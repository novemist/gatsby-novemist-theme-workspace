import React from "react";
import { useLocation } from "@reach/router";
import { graphql, useStaticQuery } from "gatsby";

import { Navbar } from "./Navbar";
import { Logo } from "./Logo";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useTheme } from "../core";

import headerStyles from "../../styles/header.module.css";

const query = graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        nav {
          path
          name
        }
      }
    }
  }
`;

interface HeaderProps {
  logoTitle: string;
}

export const Header = ({ logoTitle }: HeaderProps) => {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();
  const {
    site: {
      siteMetadata: { nav },
    },
  } = useStaticQuery(query);

  return (
    <header className={headerStyles[theme]}>
      <div className="container">
        <div className={headerStyles.inner}>
          <Logo title={logoTitle} theme={theme} />
          <div className={headerStyles.row}>
            <Navbar items={nav} currentPath={pathname} theme={theme} />
            <ThemeSwitcher theme={theme} onToggle={toggleTheme} />
          </div>
        </div>
      </div>
    </header>
  );
};
