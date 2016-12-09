
module.exports = {
 entry: ["./src/global.js" , "./app.js"],
 output: {
   filename: "bundle.js"
 },
 devtool: 'source-map',
 module: {
  /* preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'jshint-loader'

      }
   ], */
   loaders: [
     {
       // test: /\.es6$/,
       test: /\.js$/,
       exclude: /node_modules/,
       loader: 'babel-loader?presets=es2015&retainLines=true'
      }
   ]
 },
 "scripts": {
  "start": "webpack-dev-server"
},
 resolve: {
   extensions: ['', '.js', '.es6']
 }
 
}
