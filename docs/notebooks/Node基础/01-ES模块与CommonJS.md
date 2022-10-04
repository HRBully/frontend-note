



## ES模块

### 使用

在 Node.js 的配置文件`package.json`中设置参数`type: module`。

### 语法

**导出**

```js
export { 模块的公共API }
// 或者
export default 单个API
```

**导入**

```js
import { API名字 } from 模块名
```

### 实例

```js
 // utils.js
const fn = (name) => {
    console.log("我的名字叫做"+(name || "猪痞恶霸"))
}
// 导出
export {
	fn
}
```

```js
// index.js
// 引入
import { fn } from './index.js'

fn() // 我的名字叫做猪痞恶霸
fn("ned") // 我的名字叫做ned
```

### 注意

- 通过`export`导出**函数**或者**变量**，可以导出多个
- 通过`export default 单个对象`只能导出单个`API`
- 

## CommonJS

