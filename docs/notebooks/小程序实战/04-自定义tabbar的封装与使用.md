# 自定义tabbar的封装与使用

> 微信小程序官方文档为我们提供了自定义tab的相关说明
>
> [自定义 tabBar | 微信开放文档 (qq.com)](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html)
>
> 下面我总结一下我使用自定义封装tab整体的封装与使用思路

## 封装

### 引入

在官方文档中给出了演示示例，我们下载后可以直接将`custom-tab-bar`文件存在我们的项目根目录位置。

![image-20220703090328887](https://raw.githubusercontent.com/hogB/Img/main/202207030903920.png)

麻雀虽小五章俱全，官方给出的实例代码很齐全，我们只需要根据我们不同的需求来进行自由操作即可，下面我列举出自己根据不同场景封装tab的例子

### 换肤需求实战

> 一个可以根据主题更换`icon`的tab组件

产品：tab底下的icon可以根据季节切换吗

我：可以，马上实现

我们可以看到基本的tab数据配置是这样的

```js
data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/index/index",
      iconPath: "/image/icon_component.png",
      selectedIconPath: "/image/icon_component_HL.png",
      text: "组件"
    }, {
      pagePath: "/index/index2",
      iconPath: "/image/icon_API.png",
      selectedIconPath: "/image/icon_API_HL.png",
      text: "接口"
    }]
  },
```



