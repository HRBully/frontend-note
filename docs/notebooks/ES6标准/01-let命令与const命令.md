# let与const命令

> 本文为猪痞恶霸学习阮一峰ES6标准入门的学习笔记
>
> 书中部分例子采摘于书籍
>
> 如有错误，请大佬指正

## let命令

### 基本使用

`let`是ES6中新增的**声明变量**的命令，但是和`var`**不同**，`let`不可以被**重复声明**，`let`只在其命令的**代码块**内**有效**，`let`禁止变量出现**变量提升**现象，`let`会通过**暂时性死区**的方式来避免程序上的错误

- **代码块**：使用`{}`包括起来的内容

- **声明变量**：分配一个存储空间

- **不可重复声明**：`let`声明过后的变量无法再再次声明，而`var`可以重复声明

  ```js
  {
      let a = 10;
      var a = 1; // 'a' has already been declared
  }
  ```

  ```js
  {
      var a = 10
      var a = 1
  }
  console.log(a) // 1
  ```

- **不同代码块可被重复声明**：值得注意的是let的**不可重复声明**是作用在同一代码块中的，后面将会具体解释相关的概念即**块级作用域**

  ```js
  {
    let a = 1
    console.log(a)
  }
  {
    let a = 2
    console.log(a)
  }
  ```

- **有效区间的不同**：`let`只在其命令的**代码块**内有效，而`var`声明的变量可**全局有效**，下面例子说明两者不同。

  ```js
  {
      let a = 10;
      var b = 1;
  }
  console.log(a) // a is not defined
  console.log(b) // 1
  ```

- **变量提升**：之前使用`var`声明变量，在声明前调用为`undefined`，`undefined`就是我们熟悉的**声明但未赋值**，这种现象叫做**变量提升**，但是`let`禁止了这一行为，使用`let`所声明的变量一定需要在声明后使用。

  ```js
  console.log(bar) // Cannot access 'bar' before initialization
  let bar = 2 
  ```

- **变量提升的编译**：我们分别来看下变量提升现象在编译后的情况，就能彻底理解**变量提升**现象出现的原因，所有的声明变量语句在编译后都会将声明语句提到程序的最先级，所以才会出现**声明但未赋值**的现象。

  ```js
  // 编译前
  console.log(a)
  var a = '猪痞恶霸'
  // 编译后
  var a 
  console.log(a)
  a = '猪痞恶霸'
  ```

- **暂时性死区**：在**代码块**中使用`let`声明变量前，该变量不可用，这种现象称为**暂时性死区**，其实这点和变量提升有些相似，我理解为：`let`禁止变量提升现象的原因是在声明变量前的代码区域为**暂时性死区**

  ```js
  {
      // 暂时性死区
      tmp = 'abc';
      console.log(tmp)
      // 暂时性死区
      let tmp; // 声明tmp，结束暂时性死区
      console.log(tmp) // undefined 声明未赋值
      tmp = '123'
      console.log(tmp) // 123
  }
  ```

- **隐蔽的死区**：有些**暂时性死区**会在我们注意不到的地方，比如

  ```js
  function bar(x = y, y = 2) { 
      return [x,y]
  }
  bar() // Cannot access 'y' before initialization
  bar(2) // 无错误
  ```

  由于x的默认值为y，且y的声明还没开始，所以`x = y`处于死区中

### 适用场景

`let`与`var`根据其各自不同的特点有着不同的**适用场景**

1. 计数器的使用：如果我们需要一个用来**计数**的变量，那么我们就可以使用`let`来声明。

   ```js
   var arr = []
   for(let i = 0; i < 10; i++) {
       arr[i] = () => {
   		console.log(i)
       } // 利用计数进行操作
   }
   arr[7]() // 7
   ```

   ```js
   for(var i = 0; i < 10; i++) {
       arr[i] = () => {
   		console.log(i)
       } // 利用计数进行操作
   }
   arr[7]() // 10
   ```

   根据适用`var`和`let`的输出结果就能清楚两者的适用场景，而这也凸显了`let`声明变量的不同之处，即声明的有效区间不同

2. for循环中的父子关系：`for`循环中有两个**作用域**，即*父作用域*与*子作用域*，设置循环变量的部分为**父作用域**，循环体内部为**子作用域**

   ```js
   for(let i = 0; i < 3; i++) {
       let i = 'abc';
       console.log(i) 
   }
   // abc
   // abc
   // abc
   ```

   上面的例子循环打出了三个`abc`就说明了两个i的作用域不同，如果不在循环体内声明的话将会打印出`0,1,2`

## 块级作用域

> ES6新增了**块级作用域**，此前ES5只有**全局作用域**与**函数作用域**

- **全局作用域**：拥有全局作用域的变量可以在程序的任意位置访问，而window对象的所有属性都具有全局作用域。
- **函数作用域**：又被称为局部作用域，每一个函数中都有一个函数作用域或者嵌套更多的函数作用域，在函数作用域中定义的变量只能在该函数作用域内部使用。

### 概念

**块级作用域**的出现其实是由新增声明`let`产生的

```js
let n = 5
function fn() {
    if(true) {
        let n = 10
    }
    console.log(n)
}
fn() // 5
```

上面的例子诠释了块级作用域的作用，即外层代码块不受内层代码块的影响，我们在`if`函数体内声明的`n`只有在`if`函数体内可以访问，而`fn`中访问`n`不受`if`内层的声明影响。

### 存在意义

```js
var tmp = new Date();
function fn() {
    console.log(tmp);
    if(false) {
        var tmp = 'hello world'
    }
}
fn()
```

如上，存在**函数作用域**与**全局作用域**，正常情况下`fn()`函数体内`if`函数体外是使用外层即`var tmp = new Date();`但是由于**变量提升**现象的存在即`if`函数体内的`var tmp = 'hello world'`发生了**变量提升**，即`fn()`函数体内的编译形式如下，所以输出结果为`undefined`。

```js
function fn() {
    var tmp
    console.log(tmp);
    tmp = 'hello world'
}
```

而**块级作用域**正是解决了这个问题

```js
let n = 5
function fn() {
    if(true) {
        let n = 10
    }
    console.log(n)
}
fn() // 5
```

除此之外还可以防止局部作用域变量的泄露到全局当中

```js
let arr = [1,2,3]
for(var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
{
  console.log(i) // 3
}
```

如上就造成了变量泄露，`i`变量被泄露到了全局当中，那么我们使用块级作用域来看一看`i is not defined`，说明变量未被泄露到全局中。

```js
let arr = [1,2,3]
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
console.log(i) // i is not defined
```

## const命令

### 基本使用

`const`声明的变量无法被再次赋值改变，且声明的时候必须赋值

```js
const name = '猪痞恶霸'
name = 'fzf404' // Assignment to constant variable.
```

```js
const name // Missing initializer in const declaration
name = '猪痞恶霸'
```

`const`与`let`的特性很像，比如只在其声明的块级作用域内有效，存在**暂时性死区**

### 不可被const的情况

javascript中有两种数据类型即：**简单数据类型**，**复杂数据类型**

**简单数据类型**：数值，字符串，布尔值

**复杂数据类型**：数组，对象

引出数据类型的原因正是因为两种数据类型的访问方式不同，**简单数据类型**的值直接保存变量所指向的内存地址，直接访问就可以拿到值而**复杂数据类型**的访问是通过变量指向的内存地址，内存地址保存的是另一个指针（引用）

`const`声明是通过保证变量所指向的那个内存地址不能改动，所有说使用`const`声明复杂数据类型，会出现数组的元素和对象的属性可以发生改变

```js
const person = {}
person.name = "猪痞恶霸"
console.log(person.name) // 猪痞恶霸
```

如果我们想要使我们的对象不可以发生改变那么我们可以使用`Object.freeze`方法，详细使用参考这篇文章：[冻结JS对象方法技术详解 - 掘金 (juejin.cn)](https://juejin.cn/post/7063356385999716366)









