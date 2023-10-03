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

通过对参数序列进行遍历，对每个对象进行键值的遍历，赋给目标对象，是不是看起来非常**easy**，但是我们落下来很多细节，他们会产生很多问题

## 注意对象遍历方式

在上面我们使用`in`操作符，对其进行遍历，我们需要注意`in`遍历对象会追溯到原型链上，产生额外的遍历结果，所以我们不建议使用这种方式，但我们可以使用`Object.keys()`取出对象自身的键值

```js
function myAssign(obj1, ...argument) {
  if(typeof obj1 !== 'object' || obj1 === null) {
  throw new TypeError('Cannot convert undefined or null to object');
  }
  for(let item of Array.from(argument)) {
      for(let key of Object.keys(item)) {
          obj1[key] = item[key]
      }
  }
  return obj1
}
```

