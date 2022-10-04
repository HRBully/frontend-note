## 封装axios

### api模块化管理

在src目录下新建request文件并在该文件内新建axios.js，以这个文件作为全局的基本配置

```js
import axios from 'axios'

function requestAPI(axiosConfig) {
  const service = axios.create({
    baseURL: 'http://localhost:8888', // 设置统一的请求前缀
    timeout: 10000, // 设置统一的超时时长
  });

  return service(axiosConfig)
}
// 声明一个map，用来存储请求队列
const pendingMap = new Map()
```

之后在request目录下新建相关的api文件即可

```js
import requestAPI from './axios'
export function login(paramsList) {
  return requestAPI({
    url: '/api/login',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: paramsList
  });
}
```

相关api设置只需要到相关文件夹查找即可

### 取消重复请求

用户多次点击按钮来发起请求会给服务器带来巨大的负担，所以axios可以通过cancel来对重复的请求进行取消

```js
```

