import purplePrintedGownFitting from "../assets/portfolio/purple-printed-evening-gown-fitting.webp";
import plumPrintedGownSide from "../assets/portfolio/plum-printed-evening-gown-side-view.webp";
import plumOmbreGown from "../assets/portfolio/plum-ombre-off-shoulder-evening-gown.webp";
import pinkDrapedHalterTop from "../assets/portfolio/pink-draped-halter-top.webp";
import paleBlueSatinGown from "../assets/portfolio/pale-blue-asymmetric-satin-gown.webp";
import tealLaceGown from "../assets/portfolio/teal-lace-bodice-evening-gown.webp";
import greyWaterfallCardigan from "../assets/portfolio/grey-draped-waterfall-cardigan.webp";
import navyEmbroideredSet from "../assets/portfolio/navy-embroidered-top-and-wide-leg-pants.webp";
import whiteBatwingBlouse from "../assets/portfolio/white-chiffon-batwing-blouse.webp";
import polkaDotSleeveBlouse from "../assets/portfolio/black-blouse-polka-dot-mesh-sleeves.webp";
import mermaidWeddingDress from "../assets/portfolio/custom-mermaid-wedding-dress.webp";
import mermaidWeddingDressLace from "../assets/portfolio/mermaid-wedding-dress-lace-sleeves.webp";
import polkaDotPuffDress from "../assets/portfolio/polka-dot-puff-sleeve-dress.webp";
import blackLaceTopTrousers from "../assets/portfolio/black-lace-top-and-flared-trousers.webp";
import blackLaceTopBack from "../assets/portfolio/black-lace-top-back-detail.webp";
import orangeBlazer from "../assets/portfolio/orange-blazer-with-black-lace-top.webp";
import redSequinDress from "../assets/portfolio/red-sequin-sheath-dress.webp";
import burgundyPinafore from "../assets/portfolio/burgundy-pinafore-dress-bow-blouse.webp";
import aLineTulleWeddingDress from "../assets/portfolio/a-line-tulle-wedding-dress.webp";
import tulleWeddingDressLace from "../assets/portfolio/tulle-wedding-dress-lace-sleeves.webp";
import peachLaceDress from "../assets/portfolio/peach-embroidered-lace-cocktail-dress.webp";
import tealOneShoulderGown from "../assets/portfolio/teal-one-shoulder-chiffon-gown.webp";
import burgundyPeplumBlazer from "../assets/portfolio/burgundy-tailored-peplum-blazer.webp";
import brocadeWrapJacket from "../assets/portfolio/brocade-wrap-jacket.webp";
import tropicalPrintBlouse from "../assets/portfolio/tropical-print-blouse.webp";
import greyBalloonSleeveCoat from "../assets/portfolio/grey-coat-with-woven-balloon-sleeves.webp";
import brownWoolJacket from "../assets/portfolio/brown-wool-jacket-patch-pockets.webp";

export interface PortfolioImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const portfolioImages: PortfolioImage[] = [
  { src: purplePrintedGownFitting, width: 1200, height: 1600, alt: "Dressmaker fitting a custom plum off-the-shoulder evening gown with a hand-printed skirt in the Toronto studio" },
  { src: plumPrintedGownSide, width: 864, height: 1184, alt: "Custom plum evening gown with asymmetric strap and printed skirt, side view on a dress form" },
  { src: plumOmbreGown, width: 912, height: 1173, alt: "Custom plum ombré off-the-shoulder evening gown with front slit" },
  { src: pinkDrapedHalterTop, width: 1200, height: 1600, alt: "Custom pink halter top with draped satin ruffle and pastel bust bands" },
  { src: paleBlueSatinGown, width: 1024, height: 1024, alt: "Pale blue satin gown with halter neckline and asymmetric overlay" },
  { src: tealLaceGown, width: 815, height: 1109, alt: "Teal evening gown with lace bodice and flowing chiffon skirt" },
  { src: greyWaterfallCardigan, width: 1024, height: 1024, alt: "Grey draped open-front waterfall cardigan" },
  { src: navyEmbroideredSet, width: 930, height: 1024, alt: "Navy two-piece set with floral embroidered top and wide-leg pants" },
  { src: whiteBatwingBlouse, width: 926, height: 1152, alt: "White chiffon batwing blouse with smocked neckline" },
  { src: polkaDotSleeveBlouse, width: 1024, height: 1024, alt: "Black blouse with sheer polka-dot mesh sleeves" },
  { src: mermaidWeddingDress, width: 1351, height: 1600, alt: "Custom mermaid wedding dress with lace sleeves and long veil, photographed outdoors" },
  { src: mermaidWeddingDressLace, width: 1182, height: 1600, alt: "Bride in a custom fitted mermaid wedding dress with lace off-the-shoulder sleeves" },
  { src: polkaDotPuffDress, width: 1040, height: 1024, alt: "Beige polka-dot dress with puff sleeves and square neckline, with detail views" },
  { src: blackLaceTopTrousers, width: 928, height: 1152, alt: "Black guipure lace top with flared trousers" },
  { src: blackLaceTopBack, width: 848, height: 940, alt: "Back detail of a black guipure lace top with scalloped V neckline" },
  { src: orangeBlazer, width: 724, height: 1024, alt: "Tailored orange blazer worn over a black lace top and flared trousers" },
  { src: redSequinDress, width: 1024, height: 1024, alt: "Red sequin sleeveless sheath dress" },
  { src: burgundyPinafore, width: 928, height: 1054, alt: "Burgundy double-breasted pinafore dress over a white bow blouse" },
  { src: aLineTulleWeddingDress, width: 919, height: 1152, alt: "Custom A-line tulle wedding dress with lace sleeves and cathedral veil" },
  { src: tulleWeddingDressLace, width: 912, height: 1147, alt: "Tulle wedding gown with sheer lace long sleeves and train" },
  { src: peachLaceDress, width: 1024, height: 1024, alt: "Peach embroidered lace sleeveless cocktail dress" },
  { src: tealOneShoulderGown, width: 1021, height: 1024, alt: "Teal one-shoulder chiffon gown with rosette and ruffle cascade" },
  { src: burgundyPeplumBlazer, width: 1170, height: 1524, alt: "Burgundy tailored peplum blazer with stand collar" },
  { src: brocadeWrapJacket, width: 924, height: 1018, alt: "Wrap jacket in wavy striped brocade with single button closure" },
  { src: tropicalPrintBlouse, width: 836, height: 930, alt: "Tropical leaf print blouse with gathered cuffs" },
  { src: greyBalloonSleeveCoat, width: 892, height: 1024, alt: "Grey double-breasted coat with multicolour woven balloon sleeves" },
  { src: brownWoolJacket, width: 747, height: 878, alt: "Brown wool jacket with patch pockets and point collar" },
];

export default portfolioImages;
