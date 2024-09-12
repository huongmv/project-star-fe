const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    client: {
      overlay: {
        warnings: false,
        errors: false,
      },

      // or
      overlay: false,
    }
  }
})
// module.exports = {
// 	runtimeCompiler: true,

// 	chainWebpack: config => {
// 		config
// 			.plugin('html')
// 			.tap(args => {
// 				args[0].title = 'Design - by HA SOFT'
// 				return args
// 			})
// 	}
// }
