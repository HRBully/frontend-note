



## 前言

在 Web 应用内使用 Websocket 开发的朋友肯定知道，WebSocket API 是 HTML5 标准的一部分，所以我们想建立一个 Websocket 连接可以直接

```js
const ws = new WebSocket("ws://localhost:8080");

```

```js
ws.addEventListener("open", function (event) {
  socket.send("Hello Server!");
});
```

我们在 Taro 中，使用官方封装好的 api，它是一个 Promise 形式

```js
Taro.connectSocket({
  url: 'ws://echo.websocket.org/echo',
  success: function () {
    console.log('connect success')
  }
}).then(task => {
  task.onOpen(function () {
    console.log('onOpen')
    task.send({ data: 'xxx' })
  })
})
```

可以见的 Web 中开发 Websocket 与在 Taro 内的形式是有很大区别的，为了适配于代码开发，我们可以为 Taro 封装一个 Websocket 类，本文内容主要为 Websocket 介绍，Web 内建立 Websocket 以及 Taro 封装三个模块。

## 什么是 Websocket

首先，Websocket 是一种**基于 TCP 的**，可以进行**全双工**通信的**应用层**协议，允许服务器向客户端**主动**发送信息，并且在一次握手后，通信双方会建立**持久连接**

我们分析一下重点词

- 基于 TCP 协议，即建立与 TCP 协议之上的应用层协议
- 全双工，不同于单工通信和半双工通信，通信双方可以在任意时刻，**同时**向对方发出数据
- 持久连接，说明 Websocket 协议在建立连接后随时可以发生通信



我们大致有了一个基本概念，本文的重点内容是使用 Taro 封装 Websocket，不过多深入 Websocket 协议，下面我们来看在 HTML5 标准内使用 Websocket



## Web 建立 Websocket 通信

mdn文档：https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket

它为我们提供了一个 Websocket 构造函数，相关的`open`，`error`，`message`，`close`事件，以及`send`与`close`方法，下面是一个基础的建立 websocket 事例

```js
// 构造一个 webSocket 对象
const ws = new WebSocket('ws://localhost:8080');
console.log(ws)

```

![截屏2023-10-22 19.47.09](/Users/tal/Library/Application Support/typora-user-images/截屏2023-10-22 19.47.09.png)

我们可以看到创建的 Websocket 实例中有一些方法和状态

- binaryType：Websocket 传输的二进制数据类型，可以是`blob`以及`arraybuffer`
- bufferedAmount：该属性指在 Websocket 使用`send`方法放入到了`socket`队列，但是还没有真正发送到网络中的数据字节数
- extensions：服务器支持的 Websocket 扩展，比如支持压缩扩展等操作
- on事件：可以通过为实例添加`open`，`error`，`message`，`close`事件，完成 Websocket 数据的发送和接受
- protocol：服务器所配置 Websocket 子协议，比如 STOMP
- readyState：Websocket 连接状态，有0，1，2，3四个状态值，分别对应连接中，已连接，连接关闭中，已关闭
- url：Websocket 连接服务器的位置

下面我们可以为实例添加一些方法来进行数据的发送和接受

```js
ws.addEventListener("open", function (event) {
  console.log("连接成功，可以开始通讯");
  ws.send("Hello server!")
});
ws.addEventListener("message", function (event) {
  console.log("接受到数据", event.data);
});
```

下面需要基本了解`open`，`error`，`message`，`close`事件，以及`send`与`close`方法的主要作用，以便于后续我们和 Taro 的 API 进行对应学习

关于`open`，`error`，`message`，`close`，他们更可以理解为 Websocket 连接过程的生命周期，比如连接中，已连接等

- open：当 Websocket 连接成功即状态值 readyState 为 1 时
- error：当连接发送错误而导致关闭时
- message：当收到来自服务器的消息时
- close：当连接关闭时

而`send`与`close`主要是对当前连接进行操作

- close：关闭当前连接
- send：将数据存入连接传输队列

## 搭建一个服务端测试连接

光看理论肯定不行，我们可以做一个简单的 Websocket 连接，新建一个文件夹进行`npm init -y`，然后安装 Websocket 依赖`npm install websocket`，在根目录新建`server.js`将下面的代码移入，运行`node server.js，一个简单的 Websocket 连接就建好了

```js
const  websocket = require('websocket').server
const http = require('http')

const httpServer = http.createServer().listen(8080, ()=>{
  console.log('hello: ','http://localhost:8080');
})

const websocketServer = new websocket({
  httpServer: httpServer,
  autoAcceptConnections: false
})

const messageArr = []

websocketServer.on('request', function(request) {
	const connection = request.accept()
	messageArr.push(connection)

	// 监听客户端发送的消息
	connection.on('message', function(message) {
  		for(let i = 0; i < messageArr.length; i++) {
   			messageArr[i].send(message.utf8Data)
   		}
	})
})
```

然后我们可以再一个客户端的事例，来测试一下

```js
const websocket = new WebSocket('ws://localhost:8080')
    // 打开事件
websocket.onopen = function() {
  console.log(websocket.readyState);
  if (websocket.readyState === 1) {
			console.log("建立连接成功");
			const values = {
         name: "事例",
         context: "消息",
      };
      =websocket.send(JSON.stringify(values));
   }
}

const values = {
	name: '事例',
	context: '消息'
}
websocket.send(JSON .stringify(values))

// 接收服务器返回的消息
websocket.onmessage = function(data) {
	console.log('来自服务器的消息', data)
}
```

![截屏2023-10-22 20.21.05](/Users/tal/Library/Application Support/typora-user-images/截屏2023-10-22 20.21.05.png)

我们可以看到，服务端接收到了客户端的消息，下面我们来看一下 Taro 对于 Websocket 的支持

## Taro 建立 Websocket 通信

Taro 提供了八个相关的 API：https://docs.taro.zone/docs/apis/network/webSocket/sendSocketMessage，我们重点研究`Taro.connectSocket(option)`

```js
// type: (option: Option) => Promise<SocketTask>
const ws = Taro.connectSocket({
  url: 'ws://echo.websocket.org/echo',
  success: function () {
    console.log('connect success')
  }
})
```

它的如参数和`Websocket`构造函数相似，但是有连接连立成功的回调，而且返回的事一个`Promise`，我们看一下这个`Promise`

```js
ws.then(res => {
  console.log('task', res)
})
```

它的返回结果在各端的表现不同，比如在小程序端

![截屏2023-10-22 21.07.43](/Users/tal/Library/Application Support/typora-user-images/截屏2023-10-22 21.07.43.png)

在 web 内表现

![截屏2023-10-22 21.09.22](/Users/tal/Library/Application Support/typora-user-images/截屏2023-10-22 21.09.22.png)

表现不同也是因为各端对 Websocket 的封装不同，但是为了在 Taro 内拥有和在 Web 内开发同样的体验，我们可以对 Taro 的 API 进行进一步的封装使用

## 封装 TaroWebsocket

```js
```

