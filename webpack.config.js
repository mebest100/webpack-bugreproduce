var debug = process.env.NODE_ENV !== "production";
var webpack = require("webpack");
var path = require("path");
const port = 8000;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
  mode: "development",
  context: path.join(__dirname),
  devtool: debug ? "eval-cheap-module-source-map" : "eval",
  entry: { main: "./index.js" },
  devServer: {
    //contentBase是解决webpack开发模式找不到css样式文件的关键点
    //contentBase是wepack-dev-server启动http服务器host静态文件的物理位置根路径
    static: {
      directory: path.join(__dirname, "public"), //webpack5中contentBase被static替代了
    },
    // contentBase: path.join(__dirname, "./public"), 
    port: port,
   
  },
  module: {
    rules: [
    //   {
    //     test: /\.js?$/,
    //     exclude: /(node_modules)/,
    //     use: {
    //       loader: "babel-loader",
    //     },
    //   },
    
    ],
  },
  output: {
    publicPath: "/test/", //publicPath本质上是：静态资源引用路径的前缀对项目编译后文件打包输出的物理存储位置的映射
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
 
  plugins: debug
    ? [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "./public/index.html"),
          filename: "index.html",          
          inject: true, //true表示生成html时插入js/css代码，这个HtmlWebpackPlugin配置是开发环境下显示页面内容的关键！
        }),
      ]
    : [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "./public/index.html"),
          filename: "index.html",
        }),
      
        new CleanWebpackPlugin({
          cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, "./dist")],
        }), //每次构建自动删除dist目录
      ],
};
