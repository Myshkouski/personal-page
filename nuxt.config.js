export default {
  build: {
    // publicPath: process.env.PUBLIC_PATH
  },
  generate: {
    dir: 'docs',
    fallback: true
  },
  router: {
    base: process.env.ROUTER_BASE
  }
}
