export default process.env.NODE_ENV == "development" ? {
  BASE_URL: "/"
}: {
  BASE_URL: "https://tomoyaf.github.io/hyperapp-boilerplate/"
};
