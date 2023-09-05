## 数据类型

JavaScript 共有八种数据类型，分别是 Undefined、Null、Boolean、Number、String、Object、Symbol、BigInt。

- 栈：原始数据类型（Undefined、Null、Boolean、Number、String）
- 堆：引用数据类型（对象、数组和函数）

原始数据类型直接存储在栈（stack）中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储

## 数据检测方法

1. typeof 除了数组，对象，null会被判断为object
2. instance of 只能判断引用数据类型
3. constructor 只能判断是否属于某构造
4. Object.prototype.toString.call() 判断精准

## instance of原理

