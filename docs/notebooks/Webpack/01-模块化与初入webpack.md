# 模块化

## ES6模块化

export/import

### 暴露

```js
export default function fun_1() {
    
}
export default let n = 1
export default MyClass {}
```

### 导入

```js
import fun_1 from './utils'
import {fun_1,fun_2} from './utils'
import fun_1 as fun from './utils'
import * as def from './utils'
```

## 安装

### 下载

```
npm install webpack -g
```

如果报错请检查一下您的权限

### 检测

```
webpack -h
```



