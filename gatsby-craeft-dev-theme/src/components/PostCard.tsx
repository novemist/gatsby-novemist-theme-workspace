import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { Post } from "../types";

interface PostCardProps extends Omit<Post, "slug"> {
  to: string;
}

export const PostCard = ({
  title,
  image,
  excerpt,
  date,
  to,
}: PostCardProps) => {
  return (
    <article>
      {image && <Link to={to}>{<Img fluid={image}></Img>}</Link>}
      <header>
        <h2>
          <Link to={to}>{title}</Link>
        </h2>
      </header>
      <section>
        <p>{excerpt}</p>
      </section>
      <footer>
        <time dateTime={date}>{date}</time>
      </footer>
    </article>
  );
};
