# Map与Set

`Map`和`Set`是ES6中新增的数据结构

## Map

### 概念

一种存储键值对的数据结构，键与值都可以为任意类型，即值与值的映射

### 创建

```js
const map_1 = new Map()
const map_2 =  new Map({
   	["name","猪痞恶霸"]
})
```

### API

- `set`：为`Map`添加键/值对，可以连续调用即连续添加
- `get`：获取值
- `delete`：删除键值对
- `has`：查询键值对是否存在
- `clear`：清除所有键值对

```js
const map_1 = new Map()
const obj = {
    name:"猪痞恶霸"
}
map_1.set(obj,"Ned")
map_1.get(obj) // Ned
map_1.has(obj) // true
map_1.delete(obj) // true
map_1.has(obj) // false
```

### 关于同一键值引用问题

`map`对于键不同情况下会因为内存引用不同导致不同的结果

```js
const map_1 = new Map()
const a = {
    name:"猪痞恶霸"
}
const b = {
    name:"猪痞恶霸"
}
map_1.set(a,1)
	 .set(b,2)
map_1.get(a) // 1
map_1.get(b) // 2
```

`a`与`b`的引用是不同的，指向的值相同，地址不同，所以`map`会将其视为两个不同的键，如果当设为相同的简单数据类型会怎么样

```js
const map_1 = new Map()
const a = 1
const b = 1
map_1.set(a,1)
	 .set(b,2)
map_1.get(a) // 2
map_1.get(b) // 2
```

当值为简单数据类型，且`===`严格相等的情况下就会将两个键视为同一个键，其值以最后`set`的为准（覆盖）

### 与Object的性能对比

- 内存占用：`map`可以比`object`多存储50%的键值对
- 插入性能：`map`在插入大量的键值对的说话比`object`优
- 查找速度：`object`在进行大量查找操作的时候优于`map`
- 删除性能：`map`删除性能优于使用`delete object`

## Weakmap

`Weakmap`的部分api与`map`重叠

- 无法使用`clear`方法
- 只能接受对象作为键值
- 其键值指向的对象被赋为`null`的时候因为其**弱键**（**渣男**特性）的特性会被自动垃圾回收，而`map`因为被引用所以不会
- 无`size`属性且无法被遍历，由于**渣男**特性

## Set

### 概念

类似于数组，一种集合类型，但是和数组不同的是，他可以的成员不会有重复项，会自动筛掉

### 创建

```js
const set_1 = new Set()
const set_2 = new Set([1,2,3,4])
```

### API

- `add`：添加，支持链式调用
- `delete`：删除
- `has`：查询
- `clear`：清除

```js
const set_1 = new Set()
set_1.add(2).add(2).add(2)
set_1.size // 1
set_1.has(2) // true
const obj = {
    name:"猪痞恶霸"
}
set_1.add(obj).add(obj)
set_1.size // 2
```

### 数组相关

- `forEach`
- `filter`
- 扩展运算符
- `keys()`
- `values()`
- `entries()`

## Weakset

和`weakmap`类似，无遍历操作，**渣男**特性