export const API =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:4001"
    : "https://server-cms-api.herokuapp.com";
