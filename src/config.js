export default process.env.NODE_ENV == "development" ? {
  BASE_URL: "/"
}: {
  BASE_URL: "hyperapp-boilerplate/"
};
