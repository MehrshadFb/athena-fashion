import img01 from "../assets/portfolio/01-wave-jacket.jpg";
import img02 from "../assets/portfolio/02-teal-gown.jpg";
import img03 from "../assets/portfolio/03-champagne-lace-gown.jpg";
import img04 from "../assets/portfolio/04-pink-lace-dress.jpg";
import img05 from "../assets/portfolio/05-blush-black-lace-gown.jpg";
import img06 from "../assets/portfolio/06-blue-floral-set.jpg";
import img07 from "../assets/portfolio/07-brown-corduroy-jacket.jpg";
import img08 from "../assets/portfolio/08-red-blazer.jpg";
import img09 from "../assets/portfolio/09-burgundy-dress.jpg";
import img10 from "../assets/portfolio/10-grey-knit-blazer.jpg";

export interface PortfolioImage {
  src: string;
  alt: string;
}

/**
 * Portfolio images — add new ones by importing the file above and appending to this array.
 */
const portfolioImages: PortfolioImage[] = [
  { src: img01, alt: "Wave-patterned tailored jacket" },
  { src: img02, alt: "Teal lace evening gown" },
  { src: img03, alt: "Champagne floral lace gown" },
  { src: img04, alt: "Pink lace cocktail dress" },
  { src: img05, alt: "Blush gown with black lace appliqué" },
  { src: img06, alt: "Navy blue floral top and wide-leg pants set" },
  { src: img07, alt: "Brown corduroy jacket" },
  { src: img08, alt: "Red structured blazer" },
  { src: img09, alt: "Burgundy double-breasted dress" },
  { src: img10, alt: "Grey blazer with knit patterned sleeves" },
];

export default portfolioImages;
