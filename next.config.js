
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['3qkYNELke6qp7oK9m4xpSm'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  