## 何为事件

> 我有一个疑问：Javascript是如何与HTML交互的

有人说这答案不是张口就来：Javascript可以通过DOM操作来与HTML交互的啊

那我问：我们靠什么来操作DOM的，我们如何判定在什么时机去操作DOM？在Javacript中对于DOM操作的程序与HTML是分离的，所以他们需要一个桥梁去连接两者，它就是**事件**

![1.drawio (5)](https://raw.githubusercontent.com/HRBully/Img/main/1.drawio%20(5).png)

什么，事件不就是函数吗，那不是一样的吗

（表情包）

事件和函数完全是两个概念，函数是一段有输入输出有返回的代码块，而事件则是代表某一个有意义的时刻，如：点击按钮时，加载页面时，滚动页面时等等。

在明白了事件的概念以及与函数的区别后，我们来从这六点来学习javascript的事件机制

![事件](https://raw.githubusercontent.com/HRBully/Img/main/%E4%BA%8B%E4%BB%B6.png)

## 不同的场景，不同的事件🤔

说起事件，我们脑中闪过那么几个：点击事件，键盘事件，鼠标事件，而由事件的功能分类大致分为**用户界面事件**，**焦点事件**，**鼠标与滚轮事件**，**键盘事件**，**设备事件**，**触摸和手势事件**，我们需要根据不同的场景去明确时机，来选择合适的事件。

## 交互的关键-事件监听器👂

当发生事件时，**事件监听器**就会执行，而事件监听器的注册方式大体有三种

### HTML属性

记得最初学习`javascript`交互的时候，我会直接在按钮的click事件上触发事件

```html
<button onclick="console.log('事件触发')">点击我</button>
```

当时并不知道事件监听器的概念，甚至将函数和事件混淆在了一起，当我将`onclick`属性赋了函数时，这一错误的思想一直延续到了现在。

### 属性+函数

```html
<button onclick="submit">点击我</button>
<script>
function sumbit() {
    console.log('事件触发')
}
</script>
```

无论怎么样，只要元素上事件属性的绑定的值为可执行js语句，那就没有问题，而在后来，我遇到了在脚本中去注册事件

### DOM

在脚本中操作DOM来进行事件监听器的注册，有两种方式

#### 为DOM赋予属性

```js
let btn = document.getElementById("btn"); 
btn.onclick = function() { 
 	console.log("点击事件"); 
};
```

其和在元素上直接赋予事件属性的形式很像，也就是声明式与函数式的区别，不过我还是喜欢最后一种注册方式，它更加地语义化😍

#### 语义上的事件监听器

```js
let btn = document.getElementById("myBtn"); 
btn.addEventListener("click", () => { 
 console.log('事件监听器执行'); 
}, false); 
```

我们有两个api来处理事件监听器，`addEventListener`与`removeEventListener`，分别为元素添加/移除事件监听器，其中在`addEventListener`有三个参数，分别是事件名，事件处理函数以及控制事件处理程序在冒泡阶段或是在捕获阶段。

讲到这里又出现新名词了，事件冒泡与事件捕获😱，二者描述了事件流的一个传播顺序，他们是事件机制的重要组成部分之一

## 事件的传播-事件流💱

> 何为流，古人曰：问君能有几多愁，恰似一江春水向东流（打住）

事件的流向有两种种，分别是**事件冒泡**（由下层流向上层），与**事件捕获**（由上层留下上层），到这里还是晕乎乎的，事件流到底是什么东西，它到底流向哪里，上层下层到底什么

我们的HTML文档结构是一个树状结构的，所以事件的流向可以理解为，当我们进行交互时，会根据当前的流向规则，来从**根节点**出发向下流还是从**叶子节点**出发向上流，又或者是从**根节点出发**流向**叶子节点**在流回来，在流的过程中，经过的结点会根据当前的事件来进行相对的操作。

啊~好像明白了一丢丢，而在事件传播机制中，有三个阶段，两个流向

1. 捕获阶段：事件会从根元素向目标元素（事件发生的元素）传播

2. 目标阶段：事件传播到目标元素

3. 冒泡阶段：事件从目标元素传播会父元素


下面我们根据实际例子来看事件的传播机制

```html
<div id="father">
    <div id="son">
      <button  id="btn">点击我</button>
    </div>
    <div></div>
</div>
```

这有一个文档结构，它的嵌套形式如下

```js
let father = document.getElementById('father')
father.addEventListener("click", () => { 
  console.log('冒泡阶段的fatherdiv事件'); 
},false); 

let son = document.getElementById('son')
son.addEventListener("click", () => { 
  console.log('捕获阶段的sondiv事件'); 
},true); 

let btn = document.getElementById("btn"); 

btn.addEventListener("click", () => { 
  console.log('捕获阶段的btn事件'); 
},true); 

btn.addEventListener("click", () => { 
  console.log('冒泡阶段的btn事件'); 
},false); 
```

这里我们为`father`注册了冒泡阶段，为`son`注册了捕获阶段，为`btn`注册了冒泡加捕获阶段的事件监听器，通过点击目标元素`btn`后，打印的顺序为：

1. 捕获阶段的sondiv事件
2. 捕获阶段的btn事件
3. 冒泡阶段的btn事件
4. 冒泡阶段的fatherdiv事件

实践出真知，通过打印顺序，我们可以了解到事件的传播顺序，好了我们休息一下，泡个茶🍵，你以为你就没了？还没到一半呢，我们继续！

## 事件对象辅助交互🤞

在用户与应用的交互过程中，我们常常需要根据交互的类型，事件目标，或是交互所在元素等结合事件监听器来达成我们的**交互行为**，而**事件对象**就包括了这些属性

```js
let btn = document.getElementById("myBtn"); 
btn.onclick = function(event) { 
     console.log(event); 
     // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
}; 
```

我们通过DOM来为按钮赋予了点击事件，而当事件发生时会生成一个事件对象`event`，在这个对象内包括了一些属性，最为熟悉的比如`target`与`currentTraget`，分别代表着**触发事件的元素**与**事件监听器注册时绑定的元素**

也许这个区别并不是很明显，我们可以用实际例子来分析`target`与`currentTraget`

```html
<body>
  <button  id="btn">点击我</button>
</body>
```

```js
document.body.onclick = function(event) { 
     console.log('currentTarget:',event.currentTarget); //  body元素
     console.log('target:',event.target); // button元素
}; 
```

我们为body添加事件监听器，当点击按钮时，由于事件流的机制，所以也会触发body上的事件监听器，再事件监听器中，我们打印了`target`与`currentTraget`，分别为`button`与`body`，而我们触发事件的元素为`button`，执行的事件监听器所绑定的元素为`body`

当然还有其他的属性，如事件类型，控制事件默认行为等等，我们再来两个场景，深入到事件对象的使用中

### 卡片跳转

经典的卡片场景，商品卡片，展示卡片等等，在点击卡片后需要传递一个参数作为卡片内容的请求参数并跳转到内容页，而这个卡片参数则是通过事件对象来传入程序进行处理的

```html
<div v-for="item in cardList">
    <div class="card" @click="goto" data-cid="item.id"
    	{{item.name}}
	</div>
</div>
```

```js
function goto(event) {
    console.log(event.target.dataset.cid) // 对应的卡片项ID
    // 进行路由跳转并传参
}
```

我们可以为卡片项赋予自定义属性`data-xxx`的形式，我们通过`event`事件对象的`target`目标元素来获取自定义属性值，来进行路由跳转，那么，我想在这个卡片再加一个收藏，又或者是加购的按钮，触发其他事件，

```html
<div v-for="item in cardList">
    <div class="card" @click="goto" data-cid="item.id">
        <div @click="collect">收藏</div>
    </div>	
</div>
```

### 阻止事件冒泡

事件流的特性可能会给我们带来一些麻烦，比如这样的一个结构

```html
<div onclick="goTo()" style="width: 100px; height: 100px; border: 1px solid black;"> 
    <button onclick="collect()" id="btn">收藏</button>
</div>
```

一个卡片容器包裹着一个按钮，一般我们点击卡片是为了跳转详情，而按钮是为了触发其他，比如说收藏事件

```js
function goTo() {
  console.log('触发了跳转事件')
}
function collect() {
  console.log('触发了收藏事件')
}
```

但是这样会出现一个问题，当我们点击按钮时，打印的顺序是先触发收藏事件，再触发跳转事件，是的，这是事件冒泡所带来的影响，所以我们需要阻止事件冒泡来解决这个问题

```js
btn.addEventListener('click',(e) => {
  console.log('触发收藏事件')
  e.stopPropagation()
})
```

欸？e是啥，它是我们的老朋友，`event`事件对象，还记得上文中我们提到过的事件对象的一些属性，其中包括了`stopPropagation()`，它可以阻止后续事件的冒泡或者捕获行为，学废了吗？

（表情包）

问题又又又来啦！一般来讲，一个列表由n张卡片组成，我们会为每个卡片都添加相应的事件，你也许会说遍历添加不就可以了，但是你有没有想过，每个卡片都赋予了事件，每个事件监听器都是独一无二的，那么你的内存消耗就会随着你的卡片数量增加，空间复杂度O(n)，所以我们需要换一种方式，使用**事件委托**

## 优化一下-事件委托🌹

为了减少事件监听器的数量，我们可以使用**事件委托**来将空间复杂度降到O(1)，所谓的事件委托，即我们只为卡片列表的列表父级元素添加事件监听器，将子元素上的事件监听器委托给父元素，通过事件冒泡机制，子元素发生了点击事件，事件冒泡给了父元素，父元素触发事件监听器，眼见为实，我们来看一下是怎么操作的

```html
<div id="list">
    <div data-cid="2">卡片1</div>
    <div data-cid="2">卡片2</div>
 </div>
```

我给出了一个列表结构，有两张卡片，我们可以通过`data-xxx`来赋予不同的值

```js
let list = document.getElementById('list')
list.addEventListener('click',(e) => {
  console.log(e.target.dataset.cid)
  // 根据cid来完成其他操作
})
```

我们为`list`父元素添加事件监听器，当点击卡片的时候，事件冒泡到了`list`上，触发了事件监听器，还记得在上文事件对象中提到过的`event.target`，也就是事件触发的元素，所以我们可以通过它来获取不同卡片的特定值完成特定操作

## 结语

通过本文，我们可以学到事件的五个要点

1. 事件的本质
2. 事件监听器
3. 事件传播机制
4. 事件对象
5. 事件委托

如果你觉得对你有帮助那么可以关注我的JS进阶专栏，持续学习，不断更新，保持热爱，拥向山海🌹
