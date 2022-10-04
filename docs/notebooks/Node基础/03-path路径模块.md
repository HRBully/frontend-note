## path路径模块

path模块是node提供用来处理路径的模块，来满足路径的处理需求

### 使用

1. 导入

   ```js
   const path = require('path')
   ```

2. 调用api使用

### 路径拼接

我们可以使用```path.join()```实现路径拼接，语法格式如下

```js
path.join('/a','/b/c','../','./d')
```

最后输出为```\a\b\d\e```因为```../```会向上一层级，所以没有c

### 路径字段获取

```path.basename()```可以获取路径的最后一部分，我们可以通过此方法获取文件名，```basename```有两个参数，一个是路径，一个是文件后缀

```js
const path = require('path')
const fpath = '/a/b/c/index.html'
const name = path.basename(fpath)
console.log(name)
//index.html
const name = path.basename(fpath,'.html')
//index
```

### 扩展名获取

```path.extname```可以获取文件扩展名后缀，参数为路径，返回值为扩展名。

```JS
const fpath = '/a/b/c/index.html'
console.log(path.extname(fpath))
//.html
```

