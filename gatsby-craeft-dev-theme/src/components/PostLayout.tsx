import { graphql, PageProps } from "gatsby";
import React from "react";
import { FixedObject, FluidObject } from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

import MainLayout from "./MainLayout";
import { PostInfo } from "./PostInfo";
import { PostTags } from "./PostTags";
import { TextContent } from "./TextContent";
import { SEO } from "./Seo";

import { useTheme } from "../core";

interface DataType {
  mdx: {
    excerpt: string;
    frontmatter: {
      date: string;
      image: {
        childImageSharp: {
          fluid: FluidObject;
          fixed: FixedObject;
        };
      };
      title: string;
    };
    body: string;
  };
}

const PostLayout = ({
  data: {
    mdx: { frontmatter, body, excerpt },
  },
}: PageProps<DataType>) => {
  const { theme } = useTheme();

  return (
    <MainLayout>
      <SEO
        theme={theme}
        image={frontmatter.image.childImageSharp.fixed.src}
        title={frontmatter.title}
        description={excerpt}
      />
      <article>
        <TextContent
          theme={theme}
          image={frontmatter.image.childImageSharp.fluid}
        >
          <PostTags
            tags={["javascript", "typescript", "react", "gatsby", "graphql"]}
          />
          <PostInfo
            author={{
              to: "/about",
              name: "@w1zm8",
            }}
            date={frontmatter.date}
            commentsCount={5}
          />
          <h1>{frontmatter.title}</h1>
          {body && <MDXRenderer>{body}</MDXRenderer>}
        </TextContent>
      </article>
    </MainLayout>
  );
};

export const query = graphql`
  query PostPage($id: String!) {
    mdx(id: { eq: $id }) {
      excerpt
      frontmatter {
        title
        date
        image {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
            fixed {
              src
            }
          }
        }
      }
      body
    }
  }
`;

export default PostLayout;
