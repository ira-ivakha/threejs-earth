module.exports = {
  entry: './app.js',
  output: {
    filename: 'js/bundle.js'
  },
  devServer: {
     contentBase: './dist'
   },
};
// module.exports = {
//     entry: './canvas.js',
//     output: {
//         filename: 'js/bundle.js'
//     },
//     devServer: {
//         contentBase: './dist'
//     },
// };