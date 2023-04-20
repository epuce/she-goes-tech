const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

// module.exports = {
//    chainWebpack: config => {
//        plugins: [
//            new GoogleFontsPlugin({
//                fonts: [
//                    { family: "Source Sans Pro" },
//                    { family: "Roboto", variants: [ "400", "700italic" ] },
//                    { family: "Montserrat", variants: [ "400", "700italic" ] },

//                ]
//            })
//        ]
//     }
// }
