## 前言

> 目前市面上的主流应用都在逐渐支持小程序，比如小红书，快手，抖音，微信，支付宝...，而一些产品为了争夺市场，小程序的阵地上不可失去的，而为了保证一次开发，多平台使用，目前有两种小程序的多平台方案，uni-app 与 Taro

开发者可以根据团队的情况以及产品的需求，来选择适合跨端框架，而本文将从 Taro 入手，搭建一套 React + Taro + less + 国际化 + 网络请求一套开箱即用的 Taro 开发模版

## Taro 的本质

Taro 提供了一个脚手架来支持我们进行项目创建 `npm install -g @tarojs/cli`，我们将它装到全局内，然后在终端输入`Taro -v`，查看安装的 Taro 脚手架的版本号，说明安装成功，再通过脚手架创建一个基础的项目模版

```js
taro init taro-project
```

它提供了一些选型，选择你的语言，预处理器等等

![截屏2023-10-14 23.11.08](/Users/tal/Library/Application Support/typora-user-images/截屏2023-10-14 23.11.08.png)

我们把目光转到这个模版的`package.json`的依赖上

```
// dependencies
"@tarojs/components": "3.6.16",
"@tarojs/plugin-platform-platform": "3.6.16", // 各个平台的依赖插件如：tt, weapp
"@tarojs/runtime": "3.6.16",
"@tarojs/shared": "3.6.16",
"@tarojs/taro": "3.6.16",
"@tarojs/plugin-framework-react": "3.6.16",
// devDependencies
"@tarojs/cli": "3.6.16",
"@tarojs/taro-loader": "3.6.16",
```

我们会发现 Taro 的脚手架创建的模版引入了很多 `@taro/`的包，每个包的作用都体现在了 Taro 的文档里，比如`@tarojs/components`，它是 Taro 的组件库，那真么多的依赖，他的仓库都是分开的吗？显然不是，我们看一下 Taro 的文件目录：https://github.com/NervJS/taro/tree/next/packages

![截屏2023-10-14 23.27.51](/Users/tal/Library/Application Support/typora-user-images/截屏2023-10-14 23.27.51.png)

很明显是一个 Monorepo 结构的项目，所以每个模块各司其职，互不影响，自由度很大，下面列举一下常见 Taro 模块的作用，诸如上面项目模版内的依赖

- @tarojs/components：Taro 组件库
- @tarojs/runtime：Taro 运行时，来支持 React/Vue 直接运行在小程序端
- @tarojs/taro：抛出给开发者的核心 API，`import Taro from '@tarojs/taro'`
- @tarojs/cli：Taro 命令行工具，内置命令，打包等操作
- @tarojs/taro-loader：自定义的 Webpack loader

而这些依赖也是分门别类的，比如`@tarojs/taro-loader`与`@tarojs/cli`是 Taro 的**编译时**依赖，而其他三个则是**运行时**，这也是 Taro 编译时+运行时的基础，对没错，和 Vue.js 的设计方式是相同的，那么具体的编译时和运行时又是如何呢？

- 当我们执行`taro build`时，会触发 Taro 的编译时，根据我们的编译配置即在项目目录下`config`内，走 Webpack 的编译流程，其中当然包括了插件和 loader 的注入如 taro-loader，此阶段为**编译时**
- 在编译后，编译产物运行在小程序平台，内部会调用一些小程序独有 API 或组件，则会用到 @tarojs/components，或者 @tarojs/taro，这就是**运行时**，运行时的核心是 @tarojs/runtime 因为小程序和 Web 的 API 大相径庭，所以它作为适配器，完成了 Web 应用到小程序应用的转化，比如 DOM，BOM等，通过 Taro 解析为 Taro DOM，交给小程序进行渲染，还记得 Vue 的运行时，即将树形结构交给 Render 函数，进行渲染，本质是相似的

## 多平台编译

我们的目标是可以支持到主流的小程序平台内，而 Taro 支持了大部分主流小程序插件，选择平台需要根据文档来操作，一些插件是在项目模版内置了，部分平台如：小红书，快手，需要手动安装配置

```js
npm install @tarojs/plugin-platform-kwai 
npm install @tarojs/plugin-platform-xhs

// config/index.js
const config = {
  // ...
  plugins: [
      '@tarojs/plugin-platform-kwai',
      '@tarojs/plugin-platform-xhs'
    ],
  // ...
}
```

配置打包命令

```
"dev:weapp": "taro build --type weapp --watch",
"build:weapp": "taro build --type weapp",
```

如果我们需要同时调试开发多个平台，那么我建议你配置一下打包路径，Taro 支持使用`process.env.TARO_ENV`访问当前打包的属性，所以你这样配置

```js
// config/index.js
const config = {
  // ...
  outputRoot: `dist/${process.env.TARO_ENV}_dist`
  // ...
}
```

除此之外，每个小程序平台都需要有专属的配置文件，项目默认有`project.config.json`，它是微信小程序的配置文件，我们可以在内设置开发 appid，开发配置等信息，常用开发信息包括

- 拦截不合法域名开关
- ES6 转 ES5 开关
- 代码压缩开关

![截屏2023-10-15 14.28.12](/Users/tal/Library/Application Support/typora-user-images/截屏2023-10-15 14.28.12.png)

如果我们需要更改配置建议直接写到配置文件内，而不是在开发平台上手动配置，因为每次编译以 Taro 代码配置为准，会自动更改开发平台的配置

## 构建加速

在我们平时使用 Webpack 进行打包时经常会用到两个 loader，`cache-loader`与 `thread-loader`

- cache-loader：持久化缓存
- thread-loader：将 loader 运行在独立的线程池内运行

而 Taro 社区内开源了`taro-plugin-compiler-optimization`插件，该插件依赖于上面两个插件，在配置文件内以插件形式引入即可

```js
const config = {
  // ...
  	plugins: [
      'taro-plugin-compiler-optimization',
    ],
  // ...
}
```

内部的机制是将耗时严重的 loader 放在 thread-loader 后，放置在单独的线程池运行，实现并行

## 小程序持续集成

> 小程序每次进行体验测试都需要管理员去 pc 平台进行手动点击上传代码，再将体验二维码发送给测试，为了减少这个步骤，可以在小程序内配置持续集成

### CI 插件

CI 即持续集成，开发人员快速迭代的同时，产物也会持续在体验版本上，而 Taro 基于微信团队的微信小程序持续集成工具，开源了  `@tarojs/plugin-mini-ci  `

 安装插件:

```js
yarn add @tarojs/plugin-mini-ci --dev
npm install @tarojs/plugin-mini-ci -D
```

配置平台校验字段，不同平台要求字段不同，目前支持微信，字节，百度，支付宝小程序，具体可以在 Taro 文档内查看，下面以抖音小程序为例

```js
// config/index.js
const CIpluginOpt = {
  tt: {
    email: 'xxxx@163.com',
    password: 'xxxx',
  }
}
```

在 Taro 配置文件内引入插件，传递平台校验参数

```js
// config/index.js
const config = {
  plugins: [['@tarojs/plugin-mini-ci', CIPluginFn]],
}
```

配置上传命令

```js
"build:tt:upload": "taro upload --type tt --projectPath dist/tt_dist"
```

--projectPath 为上传指定路径，--type 指定上传平台，这里上传平台完成，后续对群聊机器人进行配置

### 配置群聊机器人

CI 插件提供了钩子函数的机制，当上传平台成功后，可以触发钩子函数，钩子函数，我们可以单独在配置目录下编写

```js
// config/test.js
module.exports = function (ctx) {
  ctx.register({
    name: 'onPreviewComplete',
    fn: ({ success, data, error }) => {
      console.log('接收预览后数据', success, data, error)
    },
  })
  ctx.register({
    name: 'onUploadComplete',
    fn: async ({ success, data, error }) => {
      console.log('接收上传后数据', success, data, error)
    },
  })
}
```

编写后可以将函数引入到编译配置文件内，作为插件注入

```js
const config = {
  plugins: [['@tarojs/plugin-mini-ci', CIPluginFn]],
  require('path').join(__dirname, './test'),
}
```

一般上传数据包括了体验二维码，小程序版本等信息，而机器人根据你的需求，选择钉钉，企业微信等等







