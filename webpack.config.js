var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var _ = require('lodash');
var env = process.env.NODE_ENV;
//require('font-awesome-webpack');
console.log("Current Environment is " + env);

//一些常用的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, "public/src/");
var BUILD_PATH = path.resolve(ROOT_PATH, "public/dist/");

var entries = require('./entries.js')['operation'];

var config = {
  entry: {
  },
  output: {},
  //开启 dev source map
  //devtool: env == 'production' ? '' : 'eval-source-map',
  //开启 webpack dev server
  // devServer: env == 'production' ? null : {
  //   contentBase:'public/dist/',
  //   historyApiFallback: true,
  //   hot: true,
  //   inline: true,
  //   progress: true
  // },

  module: {
    //配置preLoaders，将eslint添加进入
    // preLoaders: [
    //   {
    //     test: /\.jsx?$/,
    //     loaders: ['eslint'],
    //     include: APP_PATH
    //   }
    // ],
    //配置loader，将Babel添加进去
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass"
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader?limit=8192&name=[name].[hash].[ext]"
      },
      {
        test: /\.svg$/,
        loader: 'svg-loader?pngScale=2'
      },
      /*{
          test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
          loader: "file-loader"
      }*/
        {
            test: /\.woff|\.woff2|\.svg|.eot|\.ttf/,
            loader: 'url-loader?limit=100000'
        }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  //配置plugin
  plugins: null
};

var configs = [], outFname, outFpath, chunkName,
    uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      except: ['$super', '$', 'exports', 'require']
    }),
    providePlugin = new webpack.ProvidePlugin({
      'Moment': 'moment',
      "React": "react",
      "ReactDOM": "react-dom",
      "$":"jquery",
      "jQuery":"jquery",
      "window.jQuery":"jquery",
      "ReactRouter":"react-router"
    }),
    definePlugin = new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    dllReferencePlugin = new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./manifest.json'),
    });

entries.forEach(function(entry) {

  outFpath = entry.name.substring(0, entry.name.lastIndexOf('/') + 1);
  outFname = entry.name.substring(entry.name.lastIndexOf('/') + 1, entry.name.length);

  chunkName = outFname.substring(0, outFname.lastIndexOf('.'));

  var _config = _.assign({}, config);
  _config.entry = {};
  _config.entry[chunkName] = path.resolve(APP_PATH, entry.name);
  _config.output = {
  path: path.resolve(BUILD_PATH, outFpath),
//    path: path.resolve(BUILD_PATH,'/H5/'),
      //node服务访问的地址
  //  publicPath:'/operation/js/',
   //   publicPath:'/H5',
    filename: '[name].js'
//    filename: '[name].[hash].js'
  };

  _config.plugins = [
    //开发的时候将压缩的插件注释，正式上线的时候打开此注释
    //uglifyJsPlugin,
    providePlugin,
    definePlugin,
    dllReferencePlugin,
    new HtmlwebpackPlugin({
      title: entry.title,
      inject: 'body',
      template: "./views/operation/index.ejs",
      //filename: ROOT_PATH + '/views/' + outFpath + chunkName + '.ejs',
      chunks: [chunkName],
      filename: BUILD_PATH + '/operation/html/' + entry.filename,
      libPath: entry.libPath
    })
  ];

  configs.push(_config);
});
// 输出配置信息
// console.log(JSON.stringify(configs, null, 2));
fs.writeFile("configOutput.txt", JSON.stringify(configs, null, 2), function (error,data){
  if(error) throw error ;
  console.log("file saved");
})

module.exports = configs;