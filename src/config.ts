// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "I'm watching you Ø-Ø";
export const AUTHOR_NAME = "Selene";
export const AUTHOR_INITIAL = "ST";
export const SITE_DESCRIPTION = "Selene's personal website is watching you back.";
export const GENERATE_SLUG_FROM_TITLE = true;
export const TRANSITION_API = true;

// Base path helper for GitHub Pages project sites
// In dev: "/" — in prod with BASE_URL: "/im-watching-you/"
const BASE_PATH = import.meta.env.BASE_URL;
export const url = (path: string) => {
  const clean = path.replace(/^\//, "");
  return clean ? BASE_PATH + clean : BASE_PATH;
};
export { BASE_PATH };
