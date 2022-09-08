module.exports = {
  // 这里的webpack配置会和公共的webpack.config.js进行合并
  /* publicPath 只用在生产环境，表示打包后的index.html从哪里引入资源  */
  publicPath: "./", // 默认值 '/' 这里将其改为了相对路径  src="/js/xxx ---> "src="js/xxx
  // publicPath:process.env.NODE_ENV == 'production' ? '' : '/',

  // NODE_ENV：Node.js 暴露给执行脚本的系统环境变量(全局可取到)。通常用于确定在开发环境（development）还是生产环境（production）
  /* 2 lintOnSave 关闭eslint语法检查  */
  lintOnSave: false,

  outputDir: "dist", // 3 输出文件目录 用于生产环境

  // assetsDir: 'static', // 放置生成的静态资源 (js、css、img、fonts) 的目录。

  // indexPath: 'index.html', //  index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。

  // filenameHashing:true, // 文件名hash

  // 多页配置 默认 undefined
  pages: {
    index: {
      // index 的入口文件  相对于根目录
      entry: "src/main.js",
      template: "public/index.html", // 模板文件
      // 在dist/index.html 的输出文件名
      filename: "index.html",
      // 当配置页面标题时，需要template的index.html里的title标签为
      // <title><%= htmlWebpackPlugin.options.title %></title>
      title: "simuxuan",
      // 页面包含的代码块，默认下回包含
      // 提取出来的通用的chunk 和 vender chunk
      chunks: ["chunk-vendors", "chunk-common", "index"],

      subpage: "src/subpage/main.js", // 多页？
    },
  },

  // css 配置
  css: {
    // 是否将组件里的css文件，提取到一个独立的css文件里，生产环境时 true，开发环境是false
    extract: process.env.NODE_ENV == "production",
    // 是否为css开启映射， true可能影响构建性能
    sourceMap: false,
  },
  // 开发服务器
  devServer: {
    port: 8888, // 设置端口号
    host: "192.168.109.1", // ip 本地 配置开发服务器可访问的host地址，这里是本地
    // 配置一个白名单列表，只有HTTP请求的HOST在列表里才正常返回
    allowedHosts: [
      ".host.com",
      "subdomain.host.com",
      "subdomain2.host.com",
      "host2.com",
    ],
    hot: false, // 热更新
    https: false, // https:{type:Boolean}配置前缀
    open: true, //配置自动启动浏览器
    proxy: null, //设置代理
    // proxy: { //目的是解决跨域，若测试环境不需要跨域，则不需要进行该配置
    //   '/api': { // 拦截以 /api 开头的url接口
    //     target: 'https://api.taobao.cn/', //目标接口域名
    //     changeOrigin: true, //是否跨域
    //     ws: true, //如果要代理 websockets，配置这个参数
    //     secure: false, // 如果是https接口，需要配置这个参数
    //     // 标识替换
    //     // 原请求地址为 /api/getData 将'/api'替换''时，
    //     // 代理后的请求地址为： http://xxx.xxx.xxx/getData
    //     // 若替换为'/other',则代理后的请求地址为 http://xxx.xxx.xxx/other/getData
    //     pathRewrite: { // 标识替换
    //       '^/api': '/'   //重写接口 后台接口指向不统一  所以指向所有/
    //       '^/api': '/api/mock'
    //     }
    //   }
    // }
  },
};

// 相对路径 ./src/main.js  src/main.js
// 绝对路径 /src/main.js
