const path = require("path");

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        vue$: path.resolve(
          __dirname,
          "node_modules/vue/dist/vue.runtime.esm.js"
        )
      }
    },
    performance: {
      hints: false
    }
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        options["transformAssetUrls"] = {
          img: "src",
          image: "xlink:href",
          "b-img": "src",
          "b-img-lazy": ["src", "blank-src"],
          "b-card": "img-src",
          "b-card-img": "src",
          "b-card-img-lazy": ["src", "blank-src"],
          "b-carousel-slide": "img-src",
          "b-embed": "src"
        };

        return options;
      });
  }
};
