# 模块化📦

在我们刚刚踏入前端学习的时候，仅仅需要`index.html`里面用`script`标签和`style`标签就能构建出一个效果不错的前端页面，当然这仅仅只是一个前端页面，又或者叫网页设计，但是当我们逐渐开始写一个登录功能，一个网易云音乐播放器，一个简单的前端端分离系统，接触到了`vue-cli`......，其实这是大部分前端人的学习脚步。

回首看来，你发没发现什么？是的，在这个过程中，随着工程规模的扩大，我们增进了一个又一个`js`，`css`文件，而大量的这些资源文件，是不是会引起**命名冲突**啊，比如说在`css`中我们在不同的文件中为相同选择器添加了不同的样式，在`js`中声明了两个相同名字的函数。于是乎，在2010年，石破天惊！前端模块化应运而生。而模块化具有四个特性：

- 模块化具有独立性：一个模块只**独立**负责某个功能，只为该功能服务
- 模块化具有完整性：既然要独立服务于某个功能，那它肯定需要**完整**地实现某个功能的分支，即能够完整实现某个功能。（有点小绕口）
- 模块化具有可依赖性：作为一个模块也需要**依赖其他模块**去辅助它完成功能，所以是可依赖的
- 模块化具有被依赖性：模块之间相互交流，**相互依赖**，所以作为一个优秀的模块，既然可以依赖其他模块，那肯定可以被**其他模块依赖**。

而这四个特性造就了模块化**可复用性**，**可维护性**，**避免命名冲突**等优点，下面呢，我们就从到刀耕火种时代的模块化讲起，深入学习**javascript模块化方案**

# 刀耕火种的时代🔥

> 很久很久以前~

## 全局函数

```js
function sum(a,b) {
    return a + b
}
// 冲突啦！
function sum(a,b) {
    return a - b
}
```

![2.drawio](https://raw.githubusercontent.com/HRBully/Img/main/2.drawio.png)

不要小看上面的这段求和函数，它也可以被称作一个模块，我们可以将它封装成全局函数，比如创建一个`main.js`文件以`script`的形式引入我们的文档内，以供我们随时使用，但是，如果当我们在其他的`js`文件中同时也声明了一个同名函数，就会发生命名冲突现象。

## 命名空间

而关于全局函数产生的命名冲突问题，命名空间`namespace`解决方案能够很好地解决

```js
window.global_1 = {
    function sum(a,b) {
    	return a + b
	}
}
// 不会冲突
window.global_2 = {
    function sum(a,b) {
    	return a - b
	}
}
window.global_1.sum(1,2) // 3
```

![2.drawio (2)](https://raw.githubusercontent.com/HRBully/Img/main/2.drawio%20(2).png)

上面就是通过命名空间来实现一个简单的`storage`模块，说是命名空间，其实就是利用**对象的特性**，将对象视一个模块，之后挂载在全局`window`，通过对象方法的调用来达到目的，相对于全局函数相比，避免了命名冲突，将每个对象作为一个命名空间，可以视作一个模块。

# 正式八经的模块化规范🎯

> `javascript`模块化一直持续着刀耕火种，直到......

## 同步模块 CommonJs

> `Node.js`能将`javascript`带到服务端离不开`CommonJs`模块化规范的诞生，而这也给**前端模块化**带来了一场革命，所以说它不是前端但是给前端带来了一场模块化上的革命

###  CommonJs的基本使用

```js
// utils.js
module.exports.sum = function() {
    return a + b
}

// main.js
let { sum } = require('./utils.js')
sum(1,2) // 3
```

上面是一个利用`CommonJs`实现模块化的例子，我们在`utils.js`中使用`module.exports`暴露出一个`sum`方法，在`main.js`中使用`require`命令加载`utils.js`文件，并解构出`sum`方法，究其原理，我们来了解一下`module`与`require`

###  CommonJs的模块化原理

`module`：`module`是`Node`内置的构造函数`Module`所创建的实例，有以下几个属性

- `module.id` 模块的识别符，通常是带有绝对路径的模块文件名
- `module.filename` 模块的文件名，带有绝对路径
- `module.loaded` 返回一个布尔值，表示模块是否已经完成加载。
- `module.parent` 返回一个对象，表示调用该模块的模块。
- `module.children` 返回一个数组，表示该模块要用到的其他模块。
- `module.exports` 表示模块对外输出的值。

`require`：`require`是`Node`内置的命令，它可以读入一个`js`文件并执行它，**并且返回`exports`对象**

理解`module`与`require`后，可以明白`CommonJs`模块化是如何工作的，首先通过`module`的`exports`属性将我们需要暴露给外部的变量或方法暴露出去，而`require`命令通过文件路径，返回来了`exports`，所以我们可以将我们在模块定义的属性解构出来，甚至上面的代码我们可以这么写：`let sum = require('./utils.js').sum`，但是为了可读性，我们常用的还是解构的写法

## 异步模块 AMD与CMD



## 整合通用 UMD

# `ES6` 模块化方案🔬

## ES Module

```js
// utils.js
export function sum(a,b) {
    return a + b
}
// main.js
import { sum } from './utils.js'
```

`ES Module`使用`export`作为导出命令，`import`作为导入命令，也可以使用`export default`指定默认的输出，在使用模块可以直接将其`import`出来。

## 细说导入&导出的三个姿势

### 基础的导出&导入姿势

```js
// utils.js
let name = "猪痞恶霸"
const num = function (a,b) {
    return a - b
}
export function tool(a,b) {
    return num(a,b)
}
export { name }
// main.js
import { name,tool } from './utils.js'
```

我们在模块文件中可以使用`export`来选择导出目标内容，在模块里会有服务于该模块的方法，我们不需要将这个方法导出，只需要将目标方法导出即可，而导出也是对象形式，可以使用`export { name }`导出一个对象需要导出的方法或值，使用`export function tool(){}`导出单个方法，两者混合使用皆可

### 默认的导出&导入姿势

```js
// utils.js
const num = function (a,b) {
    return a - b
}
const sum = function (a,b) {
    return a + b
}
export default { num, sum }
// main.js
import num from './utils.js'
```

函数的参数可以默认传递，模块的导入导出当然也可以，我们需要`num`导出一个对象或者单个方法都是可以的，而在导入模块，需要直接使用`import`导入

### 混合的导出&导入姿势

我们当然可以将以上两种方法混合起来形成一个新的方法

```js
// utils.js
let name = "猪痞恶霸"
export function tool(a,b) {
    return a + b
}
export default name
// main.js
import { tool } from './demo/try'
import name from './demo/try'
```

是的，我们可以在一个模块内使用`export`与`export`导出，而在接受模块需要分别地去导入模块



啊，为什么感觉和`CommonJs`差不多呢，只是将`module.exports`替换为了`export`，将`require`替换为了`import`，`ES Module`与`CommonJs`肯定有很大的区别，我们下面从原理来比较一下这两种模块化方案。

# ES Module与CommonJs的比较

> `ES Module`，`CommonJs`，为什么有了`CommonJs`模块化还要有`ES Module`

```js
// CommonJs
let { sum } = require('./utils.js')
// ES Module
import { sum } from './utils.js'
```

## 输出的差异

- 在`CommonJs`中，输出的是当前模块值的**拷贝**
- 而在`ES Module`，输出的是**引用**

因为`CommonJs`输出的是拷贝，所以会将`module.exports`全部深拷贝到引用模块，并且当原模块的内部发生改变时，已被引用的地方不会发生改变，而`ES Module`会根据引用模块的需求导入，当原模块内部发生改变，则引入也会发生改变，而两者输出的差异也决定了二者的加载时机的不同

## 加载时机不同

因为`CommonJs`输出的是模块的拷贝也就是**对象**，也就是说这个对象可以是动态的，所以我们需要在脚本运行的时候才会去生成，所以`CommonJs`为运行的时候会加载进去；而`ES Module`输出的是引用，这个引用是静态的，所以`ES Module`在编译的时候会将这个引用暴露出去。

## 异步&同步

- `CommonJs`是使用`require`命令加载模块的，而`require`是同步加载
- `ES Module`是使用`import`命令加载模块的，而`import`是异步加载

