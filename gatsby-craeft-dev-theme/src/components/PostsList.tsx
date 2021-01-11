import React from "react";

import { Post } from "../types";
import { PostCard } from "./PostCard";

interface PostsListProps {
  posts: Post[];
}

export const PostsList = ({ posts }: PostsListProps) => {
  return (
    <div>
      {posts.map(({ slug, ...post }) => (
        <PostCard key={slug} {...post} to={`/blog/${slug}`} />
      ))}
    </div>
  );
};
