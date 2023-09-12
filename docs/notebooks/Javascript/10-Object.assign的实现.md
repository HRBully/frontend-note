## Object.assign的实现

根据`mdn`文档给出：`Object.assign`可以将一个或者多个*源对象*中所有**可枚举**的**自有属性**复制到*目标对象*，并返回修改后的目标对象。

分析一下

1. 可以有至少两个参数，其中第一个参数为目标对象
2. 函数结果为目标对象的浅拷贝，且其值为其他参数对象**可枚举**的合并值

根据要求我们可以实现下面`myAssign`方法

```js
function myAssign(obj1, ...argument) {
  if(typeof obj1 !== 'object' || obj1 === null) {
  throw new TypeError('Cannot convert undefined or null to object');
  }
  for(let item of Array.from(argument)) {
      for(let key in item) {
          obj1[key] = item[key]
      }
  }
  return obj1
}

myAssign({a: 1}, {b: 2}, {c: 3})
myAssign({}, {a: {
  b: {
    c: 2
  }
}})
```

通过对参数序列进行遍历，对每个对象进行键值的遍历，赋给目标对象，是不是看起来非常**easy**，但是我们落下来很多细节，这些细节会产生很多问题

## 可能会出现的问题

### 目标对象属性的不可修改



### 不可扩展



### 迭代对象方法错误

我们所熟知对对象进行迭代操作的方式有：`in`操作符，

## 对象进阶



### 对象属性的四种修饰



### 遍历对象