# 初识 Ajax

## 发送第一个 Ajax 请求

```js
var baseUrl = "http://127.0.0.1:1880";
function send_first() {
  // 1.创建Ajax对象
  var xhr = null;
  try {
    xhr = new XMLHttpRequest();
  } catch (error) {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  // 2.调用open
  xhr.open("get", `${baseUrl}/test`, true);
  // 必须在send方法之前设置请求头
  xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  // 3.调用send
  xhr.send("");
  // 4.等待数据响应
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      // 判断状态码是否为200
      if (xhr.status == 200) {
        // 将返回数据赋给res
        const res = JSON.parse(xhr.responseText);
        // 将data渲染进dom
        let box = document.getElementById("first");
        let text = box.getElementsByClassName("receive")[0];
        text.innerText = res.msg;
      } else {
        alert("Error:" + xhr.status);
      }
    }
  };
}
```

我们刚刚发送了一个空请求，只为了演示 Ajax 请求发送的过程。下面讲一下 _get_ 请求和 _post_ 请求的区别。

## get 请求与 post 请求的一些区别

_get_ 请求与 _post_ 请求基本相同，那么我们单独拿出不同的部分就可以了。

**get**

```js
xhr.open("get", `${baseUrl}/test?${_value}`, true);
xhr.send("");
```

**post**

```js
xhr.open("post", `${baseUrl}/test`, true);
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
xhr.send(`${_value}`);
```

通过对比上面的代码，我们能看出 _get_ 与 _post_ 最大的区别就是数据放置的位置。\
_get_ 请求的数据放在链接里，_post_ 请求的数据放在 send 方法里。\
还有一点 _get_ 请求可以不用配置请求头。
