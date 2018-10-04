export default {
  build: {
    publicPath: process.env.PUBLIC_PATH,

    extend(config, {
      isClient
    }) {
      const mainFields = ['module', 'main']
      if (isClient) {
        mainFields.unshift('browser')
      }
      config.resolve.mainFields = mainFields

      const additionalExtensions = ['.pug', '.jade', '.sass', '.scss']
      const extensions = config.resolve.extensions
      additionalExtensions.forEach(ext => {
        if (!~extensions.indexOf(ext)) {
          extensions.push(ext)
        }
      })
    }
  },
  generate: {
    dir: 'docs',
    fallback: true
  },
  router: {
    base: process.env.ROUTER_BASE
  }
}
