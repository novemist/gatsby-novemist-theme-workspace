import { Link } from "gatsby";
import React from "react";

import { ThemeValue } from "../types";
import { THEMES } from "../constants";

import styles from "../../styles/logo.module.css";

interface LogoProps {
  title: string;
  theme?: ThemeValue;
}

export const Logo = ({ title, theme = THEMES.light }: LogoProps) => {
  return (
    <Link to="/" className={styles[theme]}>
      {title}
    </Link>
  );
};
