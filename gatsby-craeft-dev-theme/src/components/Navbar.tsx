import React from "react";

import { THEMES } from "../constants";
import { ThemeValue } from "../types";
import { NavLink } from "./NavLink";

import styles from "../../styles/navbar.module.css";

interface NavbarProps {
  theme?: ThemeValue;
  currentPath?: string;
  items: { path: string; name: string }[];
}

export const Navbar = ({
  items,
  theme = THEMES.light,
  currentPath = "",
}: NavbarProps) => {
  return (
    <nav className={styles[theme]}>
      {items.map(({ name, path }) => (
        <NavLink
          key={path}
          to={path}
          isActive={
            path === "/" ? currentPath === path : currentPath.includes(path)
          }
          theme={theme}
        >
          {name}
        </NavLink>
      ))}
    </nav>
  );
};
