import { STORAGE_GRID_VIEW_KEY, STORAGE_THEME_KEY, THEMES } from "./constants";
import { GridViewValue, Post, PostEdge, ThemeValue } from "./types";

export const getFormattedDateString = (dateString: string): string =>
  new Date(dateString).toLocaleDateString("en-EN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

export const getMappedPosts = (posts: PostEdge[]): Post[] =>
  posts.map(({ node: { excerpt, frontmatter } }) => ({
    title: frontmatter.title,
    slug: frontmatter.slug,
    date: frontmatter.date,
    tags: frontmatter.tags || [],
    image: frontmatter.image?.childImageSharp?.fluid,
    excerpt,
  }));

export const getTagsFromPosts = (posts: PostEdge[]): string[] =>
  Array.from(
    new Set(
      posts
        .map(
          ({
            node: {
              frontmatter: { tags },
            },
          }) => tags
        )
        .filter(Boolean)
        .flat()
    ).values()
  );

export const getRandom = (max = 100000) => {
  return Math.floor(Math.random() * Math.floor(max));
};

export const isDarkModeEnabled = (): boolean => {
  if (
    typeof window !== "undefined" &&
    typeof window.matchMedia !== "undefined"
  ) {
    const mediaQueryString = "(prefers-color-scheme: dark)";

    return window.matchMedia(mediaQueryString).matches;
  }

  return false;
};

export const getInitialThemeValue = () => {
  let initialTheme: ThemeValue = isDarkModeEnabled()
    ? THEMES.dark
    : THEMES.light;

  try {
    const settedTheme = localStorage.getItem(
      STORAGE_THEME_KEY
    ) as ThemeValue | null;

    if (settedTheme) {
      initialTheme = settedTheme;
    }
  } catch (e) {}

  return initialTheme;
};

export const getInitialGridViewValue = (
  key: string,
  initialTheme: GridViewValue = "row"
) => {
  let theme: GridViewValue = initialTheme;

  try {
    const settedGridView = localStorage.getItem(
      `${STORAGE_GRID_VIEW_KEY}_${key}`
    ) as GridViewValue | null;

    if (settedGridView) {
      theme = settedGridView;
    }
  } catch (e) {}

  return theme;
};
