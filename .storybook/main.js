const { nuxifyStorybook } = require('../.nuxt-storybook/storybook/main.js')
const {resolve} = require("path");

module.exports = nuxifyStorybook({
  webpackFinal (config, options) {
    // extend config here
    return config
  },
  stories: [
    resolve(__dirname, '../components/**/*.stories.@(js|jsx|ts|tsx)'),
  ],
  addons: [
    // Add your addons here
  ]
})
