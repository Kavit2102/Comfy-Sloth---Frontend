import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: " Our mission is to redefine the way you experience and furnish your living spaces. We are committed to curating an exclusive collection of high-quality, stylish furniture that transcends trends and transforms your home into a haven of comfort and sophistication.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "We envision a world where every home is a sanctuary of style, comfort, and self-expression. Our ambition is to be the premier destination for individuals seeking not just furniture but a curated experience that transforms houses into personalized havens.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Established in 2023, Comfy Sloth embarked on a mission to revolutionize the way people furnish their homes. What began as a vision to bring together style, quality, and convenience has evolved into a leading E-commerce furniture destination with a rich history of innovation and customer-centricity.",
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
