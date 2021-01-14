import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { graphql, useStaticQuery } from "gatsby";

import { Header } from "./Header";
import { SEO } from "./Seo";

import { useTheme } from "../core";

import "../../styles/main.css";

const query = graphql`
  query MainLayoutSEO {
    site {
      siteMetadata {
        logoTitle
      }
    }
  }
`;

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { theme } = useTheme();
  const { site } = useStaticQuery<{
    site: {
      siteMetadata: {
        logoTitle: string;
      };
    };
  }>(query);

  return (
    <>
      <SEO theme={theme} />
      <Header logoTitle={site.siteMetadata.logoTitle} />
      <main className="container">
        <br />
        <br />
        <section>
          <MDXProvider components={{}}>{children}</MDXProvider>
        </section>
      </main>
    </>
  );
};

export default MainLayout;
