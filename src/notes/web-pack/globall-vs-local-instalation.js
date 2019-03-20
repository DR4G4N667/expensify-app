// Ako instaliras nesto globalno(npr babel) i recimo imas 6 razlicitih react projekata, tada su svi projekti prinudjeni da koriste istu verziju babela  

// posto smo koristili yarn umesto npm-a da bi smo uninstalirali babel i live-server kucamo
// yarn global remove babel-cli live-server

// da bi smo instalirali lokalno
// yarn add live-server babel-cli@6.24.1

// sada imamo instaliralno lokalno ali nam i dalje nije dostupno u terminalu
//da bi bilo dostupno moramo da setupujemo skriptu u package.json file-u

// PRIMER

// {
//     "name": "indecision-app",
//     "version": "1.0.0",
//     "main": "index.js",
//     "license": "MIT",
//     "scripts": {
//       "serve": "live-server public/" 
//     },
//     "dependencies": {
//       "babel-cli": "6.24.1",
//       "babel-preset-env": "1.5.2",
//       "babel-preset-react": "6.24.1",
//       "live-server": "^1.2.0"
//     }
//   }


// dodali smo skriptu kao key/value par - key je kako ces nazvati skriptu, value sama skripta
// nakon ovoga sad u terminalu mozemo da kucamo yarn run serve


// instaling webpack

// yarn add webpack@3.1.0

// u packake.json-u smo ga dodali kao

// "scripts": {
//       "serve": "live-server public/" ,
//       "build": "webpack"
//     },

// i sada u root-u projekta treba da napravimo webpack.config.js file

// const path = require('path');
// module.exports = {
//     entry: './src/app.js',
//     output: {
//         path: path.join(__dirname, 'public'),
//         filename: 'bundle.js'
//     }
// };

// i da bi radio live reload dodali smo u package.json umesto "webpack ", "webpack --watch"
// https://webpack.js.org/ za dokumentaciju