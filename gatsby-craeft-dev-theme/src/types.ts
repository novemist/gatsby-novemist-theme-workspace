import { FluidObject } from "gatsby-image";
import { THEMES } from "./constants";

export type ThemeValue = typeof THEMES.light | typeof THEMES.dark;

export interface Post {
  title: string;
  slug: string;
  date: string;
  image: FluidObject;
  excerpt: string;
}
