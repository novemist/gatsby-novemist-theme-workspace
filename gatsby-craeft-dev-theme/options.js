const POSTS_SLUG_PREFIX = "/blog";

const CONTENT_PATHS = {
  site: `src/site`,
  images: `src/images`,
  posts: `src/content${POSTS_SLUG_PREFIX}`,
};

const CONTENT_NAMES = {
  site: "site",
  posts: "posts",
  images: "images",
};

const CONTENT_REQUIRED_FILES = {
  site: {
    greeting: {
      ext: "mdx",
      content: `---\nkey: "greeting"\n---`,
    },
    about: {
      ext: "mdx",
      content: `---\nkey: "about"\n---`,
    },
  },
};

module.exports = {
  CONTENT_PATHS,
  CONTENT_NAMES,
  CONTENT_REQUIRED_FILES,
  POSTS_SLUG_PREFIX,
};
