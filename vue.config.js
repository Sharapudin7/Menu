module.exports = {
  filenameHashing: process.env.NODE_ENV !== 'production',
  configureWebpack: {
      output: {
          filename: "menu-online.js"
      }
  },
  chainWebpack: config => {
      config.optimization.delete('splitChunks')
  },
  productionSourceMap: false,
};