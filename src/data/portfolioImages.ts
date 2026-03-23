import img9600 from "../assets/portfolio/9600.png";
import imgDSC07986 from "../assets/portfolio/DSC07986.jpeg";
import img0183 from "../assets/portfolio/IMG_0183.jpeg";
import img0187 from "../assets/portfolio/IMG_0187.jpeg";
import img0195 from "../assets/portfolio/IMG_0195.png";
import img0198 from "../assets/portfolio/IMG_0198.jpeg";
import img0212 from "../assets/portfolio/IMG_0212.jpeg";
import img0213 from "../assets/portfolio/IMG_0213.jpeg";
import img0215 from "../assets/portfolio/IMG_0215.jpeg";
import img0238 from "../assets/portfolio/IMG_0238.jpeg";
import img0245 from "../assets/portfolio/IMG_0245.jpeg";
import img0249 from "../assets/portfolio/IMG_0249.png";
import img0255 from "../assets/portfolio/IMG_0255.jpeg";
import img0272 from "../assets/portfolio/IMG_0272.jpeg";
import img0277 from "../assets/portfolio/IMG_0277.jpeg";
import img0287 from "../assets/portfolio/IMG_0287.jpeg";
import img1819 from "../assets/portfolio/IMG_1819.jpeg";
import img3062 from "../assets/portfolio/IMG_3062.jpeg";
import img9554 from "../assets/portfolio/IMG_9554.jpeg";
import img9556 from "../assets/portfolio/IMG_9556.jpeg";
import img9561 from "../assets/portfolio/IMG_9561.jpeg";
import img9577 from "../assets/portfolio/IMG_9577.jpeg";
import img9579 from "../assets/portfolio/IMG_9579.jpeg";
import img9594 from "../assets/portfolio/IMG_9594.jpeg";
import img9599 from "../assets/portfolio/IMG_9599.jpeg";
import imgUntitledDesign from "../assets/portfolio/Untitled design.png";

export interface PortfolioImage {
  src: string;
  alt: string;
}

export interface PortfolioCategory {
  name: string;
  images: PortfolioImage[];
}

/**
 * Portfolio is organized into grouped sections so each style can be explored separately.
 */
const portfolioCategories: PortfolioCategory[] = [
  {
    name: "Tailored Jackets & Blazers",
    images: [
      { src: img0183, alt: "Tailored look in structured blazer" },
      { src: img0187, alt: "Textured jacket with minimalist lines" },
      { src: img0198, alt: "Burgundy tailored blazer with clean silhouette" },
      { src: img0212, alt: "Patterned blazer with curved seam detailing" },
      { src: img0213, alt: "Modern grey blazer with statement sleeves" },
      { src: img0215, alt: "Structured black lace and trouser ensemble" },
    ],
  },
  {
    name: "Statement Dresses & Gowns",
    images: [
      { src: img0238, alt: "Off-shoulder satin gown" },
      { src: img0245, alt: "Hand-printed satin gown with art motifs" },
      { src: img0249, alt: "Soft draped pink mini dress on mannequin" },
      { src: img0255, alt: "Teal floor-length gown with lace bodice" },
      { src: img0272, alt: "Rose-tone dress with contrast blouse styling" },
      { src: img0277, alt: "Polka-dot dress with gathered sleeves" },
      { src: img0287, alt: "Flowing teal gown with sculptural shoulder detail" },
    ],
  },
  {
    name: "Bridal Collection",
    images: [
      { src: img9554, alt: "Bridal gown with lace bodice and long veil" },
      { src: img9556, alt: "Bridal portrait in layered white gown" },
      { src: img9561, alt: "White bridal dress in studio portrait" },
      { src: img9577, alt: "Wedding gown with floral lace veil" },
      { src: img9579, alt: "Elegant bridal look with bouquet" },
    ],
  },
  {
    name: "Contemporary Sets & Occasionwear",
    images: [
      { src: img9594, alt: "Embroidered cocktail dress in soft peach tones" },
      { src: img9599, alt: "Black top with sheer polka-dot sleeves" },
      { src: img1819, alt: "Monochrome draped outerwear set" },
      { src: img9600, alt: "Layered ice-blue evening set" },
      { src: imgDSC07986, alt: "Blue coordinated set with floral detailing" },
    ],
  },
  {
    name: "Studio & Craft Highlights",
    images: [
      { src: img3062, alt: "Designer presenting handcrafted printed gown" },
      { src: img0195, alt: "Back view of lace craftsmanship and finish" },
      { src: imgUntitledDesign, alt: "Design collage from latest collection" },
    ],
  },
];

export default portfolioCategories;
