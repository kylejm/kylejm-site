module.exports = {
  presets: ['next/babel'],
  plugins: ['babel-plugin-styled-components'],
};

// Next's way of doing it: https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/.babelrc
// {
//   "presets": ["next/babel"],
//   "plugins": [["styled-components", { "ssr": true }]]
// }
