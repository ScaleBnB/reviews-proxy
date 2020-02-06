// var path = require('path');
// var DIST_DIR = path.join(__dirname, '/client/dist');

// var ImageCarousel_DIR = path.join(__dirname, './imageCarousel/client/src');
// var Calendar_DIR = path.join(__dirname, './calendar/client/src');
// var Recommendations_DIR = path.join(__dirname, './recommendations/client/src');
// var Reviews_DIR = path.join(__dirname, './reviews/client/src');

// module.exports = {
//   entry: {
//     gallery: `${ImageCarousel_DIR}/index.jsx`,
//     reviews: `${Reviews_DIR}/index.jsx`,
//     calendar: `${Calendar_DIR}/index.jsx`,
//     recommendations: `${Recommendations_DIR}/index.jsx`,
//   },
//   output: {
//     filename: 'bundle.js',
//     path: DIST_DIR
//   },
//   module : {
//     loaders : [
//       {
//         test : /\.jsx?/,
//         loader : 'babel-loader',
//         query: {
//           presets: ['@babel/preset-react', '@babel/preset-env']
//        }
//       }
//     ]
//   }
// };
