

## 前言

熟悉`javascript`的小伙伴一定知道它是一门单线程的脚本语言，那么我们可以思考一下，**为什么`javascript`是单线程的呢？**我们来探讨一下🙈

1. 从用途角度出发，`javascript`主要目的是为了实现用户与浏览器的交互以及**操作DOM**
2. 在操作DOM的过程中我们对一个DOM节点进行了修改操作
3. 假设`javascript`是多线程的，那么现在我在另一个线程对这个DOM节点进行了删除操作

问题来了，由于我们假设`javascript`是多线程的，多线程同时对同一个DOM节点进行了不同的操作，那么浏览器就会发出**灵魂拷问**：“我是谁，我在哪，我要干啥！！！”。

所以`javascript`被设计成一门**单线程的脚本语言**，安全，简单，但是吧，肯定会有一些缺点。

```js
console.log("我执行完后执行下一条")
for(let i = 0; i < 100000000000; i++) {
    console.log("我需要执行这么多次，执行完才能执行下一条")
}
console.log("我需要等待上面的for语句执行完才能执行")
```

你可以在浏览器的控制台中执行这段程序，那么你就会发现最后一个打印会在结束`for`循环后打印出来，这就说明了单线程的缺点，如果一段程序执行太久的话会一直影响后面程序的执行，而为了解决这种问题，`javascript`任务执行的模式被分为两种，**同步模式与异步模式**，本文也将从这两种模式展开，大话**异步编程**

## 同步模式与异步模式

### 同步模式

在同步模式下，代码会按照其顺序执行，或者将代码的各个部分理解成任务（后面会提到宏任务以及微任务的点），每一个任务的执行都需要等待前一个任务的完成。

```js
console.log("我是第一个任务")
function stack_one() {
    console.log("我是任务1")
}
function stack_two() {
    console.log("我是任务2")
}
stack_one()
stack_two()
// 我是第一个任务
// 我是任务1
// 我是任务2
```

### 异步模式

## 欢迎来到回调地狱😱

在没有推出**Promises/A+规范**之前，`javascript`使用**回调函数**进行异步编程的，而它有个外号叫做**回调地狱**

### 回调函数基础

回调函数指的是将一个函数作为函数参数传递给一个函数内，在某段代码内执行

```js
function buy() {
    console.log("我去买菜")
}
function cook(foo) {
    foo()
    console.log("我在做饭")
}
cook(buy)
// 我去买菜
// 我在做饭
```

诸如上面的用例，我们在做饭函数中传入了一个买菜函数，在做饭之前去执行这个函数，这就是一个典型的回调函数用例，但是这里并不能体现回调函数是如何解决异步的，我们继续往下看

### 回调在异步中的应用

```js
function a() {
  return 'a'
}
function b(fn) {
  setTimeout(() => {
    console.log('b')
    console.log(fn())
  },1000)
}
function c() {
  console.log('c')
}
b(a)
c()
// c
// b
// a
```

这里有三个函数，`a`函数需要在`b`函数执行后执行，`c`函数独立于另外两个函数，所以，我们给`b`函数传入`a`函数作为回调函数，在执行`b`函数的过程中由`setTimeout`被其被挂起，执行栈执行`c`函数，`c`函数执行后`b`内`setTimeout`被推入执行队列，执行`b`，再执行`a`，如果对这段解析有疑问的小伙伴可以看看**事件队列，以及宏任务和微任务**

这就是对`b`进行了一个异步操作，在进行`b`的同时，不阻塞`c`的执行

### 成功回调与失败回调

一般来讲，异步操作会有失败的情况，所以我们需要对失败进行处理，所以**成功回调与失败回调**是必须的

```js
function sum(a,b,success,failure) {
    setTimeout(() => {
      try{
        if(typeof a !== 'number' || typeof b !== 'number') {
          throw 'error'
        }
        success(a+b)
      } catch(e) {
        failure(e)
      }
    },1000)
}
const suc = (val) => console.log('suc:',val)
const err = (val) => console.log('err:',val)
sum(1,2,suc,err) // suc: 3
sum('1',2,suc,err) // err: error
```

这里我们声明并传入`sum`求和函数成功回调`suc`与失败回调`err`，如果传入的求和参数的类型错误，则会执行失败回调，这就是模拟了异步操作执行失败的处理

### 何为回调地狱

这是一个经典的回调地狱，是不是看的很难受

```js
setTimeout(function () {
  console.log('地狱第一层');
  setTimeout(function () {
    console.log('地狱第二程');
    setTimeout(function () {
      console.log('地狱第三层');
    }, 1000)
  }, 1000)
}, 1000)
```

所谓的回调地狱指的是回调函数嵌套执行，比如说`b`函数需要`a`函数执行完毕再执行，而`c`函数需要等待`b`函数执行完再去执行，回调地狱会把代码可读性变差，而且难以维护，谁看到连续嵌套的回调函数不头大呢？

那有什么好的解决办法呢，Promises即**期约**可以很好地帮助我们进行异步编程！

## Promise期约你下一个春天🌹

期约，一个比较浪漫的名词，我想期约你一起去看花，这个时候你会给我三个回答

1. 你让我想想我有没有时间再答应你
2. 好的我答应你，我们一起去看花并实现若言
3. 不，因为我没有时间所以我不能和你去看花

而这三个回答也对应着期约的三个状态**待定**，**兑现**，**拒绝**

### 创建一个期约

我们需要通过实例化`Promise`来创建一个期约，必须传入一个函数作为执行器，而我们创建的实例的本质是一个**状态机**，我们创建完后立刻打印，显示的状态是`pending`也就是**待定**状态，那么这个实例是一个由状态的对象，我们可以称之为**状态机**

```js
let pro = new Promise(() => {})
console.log(pro) // Promise { <pending> }
```

当这个期约实例被创建后，被**落地**也就是被更改状态后，这个状态就不可逆了，怎么更改期约的状态呢，因为不清楚状态值的标识符，我们无法直接更改期约实例的状态值，所以我们回想一下**面向对象修改私有变量**的知识来学习如何修改期约状态。

### 期约状态的修改

既然我们知道了期约的特性，那么我们如何将待定状态转换为兑现或者拒绝状态，这个时候需要用到我们再创建期约实例的时候传入的函数了

```js
let pro = new Promise((resolve, reject) => resolve('我已兑现')); 
console.log(pro) // Promise { '我已兑现' }
```

因为`Promise`的状态值是**私有的**，了解面向对象的朋友知道我们想要修改私有的变量，只能通过内部的方法去修改访问，而`Promise`为我们提供了`resolve`, `reject`，所以我们想要修改期约的状态，必须在传入的执行函数中去执行`resolve`或 `reject`。

### 那么下一步呢

在状态不可逆更改后，我们下一步可以使用`then`来继续下一步，`then`是期约实例的方法所以可以直接调用

```js
let pro = new Promise(() => {});
pro.then(() => console.log(1)) // 啥也没有
```

欸，我调用它怎么不执行呢？那是因为只有在期约状态更改后才会触发`then`

```js
let pro = new Promise((resolve, reject) => resolve());
pro.then(() => console.log(1)) // 1
```

### 下一步的下一步

什么？还有下一步

```js
let pro = new Promise((resolve, reject) => resolve());
pro.then(() => console.log(1)).then(() => console.log(2))  // 1 2
```

没想到吧，因为`then`返回的依旧是一个期约对象，所以我们可以继续`then`

### 手撕Promise理解异步实现

我们说了这么多，状态机，状态更改，下一步执行，**异步**是只字不提，而期约状态正是实现异步的关键，我们简单地实现一个`MyPromise`，看看它是怎么实现**异步**的

```js
```

 

### 应用一下，封装ajax请求

## 异步处理集合结构

## 异步设定超时函数

使用`promise.race`的特性，即传入数组内的所有异步集合，会返回第一个改变状态的promise，来实现一个超时函数的封装。

```js
function timeOutPromsie (fn,time) {
  return  Promise.race([
    fn(),
    new Promise((resolve,reject) => {
      setTimeout(() => {
        reject('超时')
      },time)
    })
  ])
}
let fn = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('成功')
    },2000)
  })
}
timeOutPromsie(fn,3000).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
```

我们封装了`timeOutPromsie`，传入设定的限制目标函数与限制时间，其中`fn`函数必须是返回Promise实例的函数，当`Promise.race`开始执行的时候，`fn`内定时器，与限制时间的定时器同时挂起执行，当定时器快时，说明`fn`超过了限制时间，抛出问题，反之成功

