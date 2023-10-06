## 本质

一个类，可以传参数实例一个，调用其 apply 函数

使用 tapable 库来进行事件的发布订阅，这样可以实现在webpack的各个生命周期内进行一些处理操作

`compiler 对象代表了完整的 webpack 生命周期`。这个对象在启动 Webpack 时被一次性建立，并配置好所有可操作的设置，包括 `options`，`loader` 和 `plugin`。当在 Webpack 环境中应用一个插件时，插件将收到此 `compiler` 对象的引用。可以使用它来访问 Webpack 的主环境。

`compilation 对象代表了一次资源版本构建`。当运行 Webpack 开发环境中间件（ [webpack-dev-server](https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fwebpack-dev-server)）时，`每当检测到一个文件变化，就会创建一个新的 compilation，从而生成一组新的编译资源`。一个 `compilation` 对象表现了当前的模块资源、编译生成资源、变化的文件、以及被跟踪依赖的状态信息。`compilation` 对象也提供了很多关键时机的回调，以供插件做自定义处理时选择使用。

