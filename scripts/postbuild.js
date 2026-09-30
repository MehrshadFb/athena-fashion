// Writes a per-route index.html into build/ so each URL is served with its own
// <title>, description, canonical and social tags, plus the page content
// prerendered as HTML. Search engines and AI crawlers that don't run
// JavaScript can then read the page. Vercel serves real files before falling
// back to the SPA's index.html.
const fs = require("fs");
const path = require("path");
const esbuild = require("esbuild");
const meta = require("../src/data/pageMeta.json");

const rootDir = path.join(__dirname, "..");
const buildDir = path.join(rootDir, "build");
const template = fs.readFileSync(path.join(buildDir, "index.html"), "utf8");
const assetManifest = require(path.join(buildDir, "asset-manifest.json")).files;

const escapeHtml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

// Replacements are callbacks so "$" in titles or rendered HTML is kept literally.
const replaceOnce = (html, pattern, replacer) => {
  if (!pattern.test(html)) {
    throw new Error(`postbuild: pattern not found in index.html: ${pattern}`);
  }
  return html.replace(pattern, replacer);
};

// Resolve image imports to the hashed URLs react-scripts emitted, so the
// prerendered <img> tags point at the same files the app loads.
const builtAssetsPlugin = {
  name: "built-assets",
  setup(build) {
    build.onResolve({ filter: /\.(webp|png|jpe?g|svg)$/ }, (args) => ({
      path: path.basename(args.path),
      namespace: "built-asset",
    }));
    build.onLoad({ filter: /.*/, namespace: "built-asset" }, (args) => {
      const url = assetManifest[`static/media/${args.path}`];
      if (!url) {
        throw new Error(`postbuild: ${args.path} not found in asset-manifest.json`);
      }
      return { contents: `export default ${JSON.stringify(url)};`, loader: "js" };
    });
  },
};

const loadRenderer = () => {
  const outfile = path.join(rootDir, "node_modules", ".cache", "prerender.js");
  return esbuild
    .build({
      stdin: {
        contents: `
          import React from "react";
          import { renderToString } from "react-dom/server";
          import App from "./src/App";
          export const render = (initialPath) =>
            renderToString(React.createElement(App, { initialPath }));
        `,
        resolveDir: rootDir,
        loader: "js",
      },
      bundle: true,
      platform: "node",
      format: "cjs",
      jsx: "automatic",
      external: ["react", "react-dom", "framer-motion"],
      plugins: [builtAssetsPlugin],
      outfile,
      logLevel: "warning",
    })
    .then(() => require(outfile).render);
};

const renderPage = (render, { path: pagePath, title, description }) => {
  const url = meta.siteUrl + pagePath;
  const t = escapeHtml(title);
  const d = escapeHtml(description);
  let html = template;
  const setAttr = (pattern, value) => {
    html = replaceOnce(html, pattern, (_, open) => `${open}${value}"`);
  };
  html = replaceOnce(html, /<title>[^<]*<\/title>/, () => `<title>${t}</title>`);
  setAttr(/(<meta name="description" content=")[^"]*"/, d);
  setAttr(/(<link rel="canonical" href=")[^"]*"/, url);
  setAttr(/(<meta property="og:url" content=")[^"]*"/, url);
  setAttr(/(<meta property="og:title" content=")[^"]*"/, t);
  setAttr(/(<meta property="og:description" content=")[^"]*"/, d);
  setAttr(/(<meta name="twitter:title" content=")[^"]*"/, t);
  setAttr(/(<meta name="twitter:description" content=")[^"]*"/, d);
  html = replaceOnce(html, /<div id="root"><\/div>/, () => `<div id="root">${render(pagePath)}</div>`);
  return html;
};

loadRenderer()
  .then((render) => {
    for (const page of [meta.home, meta.portfolio]) {
      const outDir = path.join(buildDir, page.path);
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, "index.html"), renderPage(render, page));
      console.log(`postbuild: prerendered ${path.join(page.path, "index.html")}`);
    }
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
