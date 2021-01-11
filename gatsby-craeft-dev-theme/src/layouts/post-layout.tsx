import { PageProps } from "gatsby";
import React from "react";

import MainLayout from "./main-layout";
import { TextContent } from "../components";
import { useTheme } from "../core";
import { MDXProvider } from "@mdx-js/react";

const PostLayout = ({ children }: PageProps) => {
  const { theme } = useTheme();

  return (
    <MainLayout>
      <TextContent theme={theme}>
        <MDXProvider components={{}}>{children}</MDXProvider>
      </TextContent>
    </MainLayout>
  );
};

export default PostLayout;
