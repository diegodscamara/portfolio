import { StaticImageData } from "next/image";

export interface CardProps {
  image: StaticImageData;
  alt: string;
  link: string;
};