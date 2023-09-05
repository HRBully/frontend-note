## 理解vue-cli

很多开发者都使用过`vue-cli`，可以通过它来创建`Vue`的开发环境，但是始终不理解其开发环境的构建是怎么样的，它提供了一个`vue.config.js`文件，通过修改它来实现自定义配置，但是其根本还是使用`webpack`来实现的。

## 浅入webpack

借用官方文档的概念，`webpack`是一个用于现代 JavaScript 应用程序的 *静态模块打包工具*，它通过对静态模块之间的依赖进行分析，分割，打包，最后形成打包产物，根据不同环境配置不同的效果。

![image-20230813131750800](https://raw.githubusercontent.com/HRBully/Img/main/image-20230813131750800.png)

通过`webpack`，项目开发从刀耕火种，到了电气时代，在开发环境，可以通过扩展插件，实现热更新，缓存等功能，提升开发体验；在生产环境，可以通过图片压缩插件，减小静态图片的体积，使用`SourceMaps`来监控生产环境错误。通过这些功能，现代 JavaScript 应用程序的种种需求也得以实现。

### webpack基础配置

1. 输入输出
   - `entry`：指定打包入口文件路径
   - `output`：打包后输出产物的存放路径
2. 模块处理
   - `resolve`：文件解析规则，比如`@/src`，开发时可以简化文件路径，打包自动添加
   - `module`：模块加载规则，相关文件使用不同`loader`处理
3. 扩展插件
   - `plugin`：插件是对打包功能进行扩展，比如配置复制的插件
4. 后处理
   - `optimization`：在`loader`处理完文件后进行其他操作，如代码混淆，压缩

### webpack打包流程

为了加深大家对`webpack`配置的基础印象，了解简单的打包流程最为重要，注意这只是很简单理解，后文我会一一解析每一个过程

1. 读取`webpack.config.js`配置文件
2. 根据配置入口`entry`通过文件系统读入入口文件，递归解析入口文件内所有模块的依赖关系，并形成**依赖图**，图数据结构是一个**多对多**的关系，而我们从**模块化**角度来思考也确实是这样的
3. 根据配置文件内`loader`规则，递归依赖图，对不同类型模块进行处理转化
4. 根据依赖图的关系，将互相依赖的模块分割在一起，成为`chunk`
5. `chunk`最后会形成打包产物：`bundel`
6. 根据配置项的`output`，通过文件系统，输出相关产物

下面我们进入正题：搭建`Vue`开发环境，

## 开始

开始正文，首先我们先来分析一下具体需求

### 配置需求

1. 环境分为生产环境与开发环境
2. 技术选用`Typescript`，`Vue`，`Sass`，`VueRouter`，`Vuex`

### 初始环境

新建项目文件夹，初始化项目

```js
npm init
```

安装`webpack`，`webpack-cli`

```js
npm install webpack webpack-cli -D
```

在根目录下新建`build`文件夹，在此文件夹下面新建`webpack.common.js`，`webpack.dev.js`，`webpack.prod.js`，三个配置文件，分别对应通用，开发与生产环境

![image-20230822185707631](https://raw.githubusercontent.com/HRBully/Img/main/image-20230822185707631.png)

为了使打包根据不同环境来灵活地改变，所以分为三个打包配置文件，最后通过`merge`来实现配置复用，首先安装`webpack-merge`

```js
npm i webpack-merge -D
```

```js
// webpack.common.js
module.exports = {}
```

```js
// webpack.dev.js webpack.prod.js
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {})
```

### 通用配置

```js
const path = require('path')
module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src/main.js')
  },
  module: {},
  plugins: [],
  output: {
    path: path.resolve(__dirname, '../dist'),
    clean: true
  },
}
```

在根目录下创建`src`文件夹，在该文件夹下创建入口文件`main.js`，同时配置输出文件目录`dist`



### 配置Typescript开发环境



### 配置Vue开发环境



### 配置CSS开发环境



### 热更新



### 图片压缩



### 





## 深出webpack



### webpack的生成产物



### webpack的打包过程



### webpack热更新原理

