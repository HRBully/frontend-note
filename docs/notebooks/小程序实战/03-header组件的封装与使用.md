# 微信小程序head组件的封装与使用

> 微信小程序的head是可以进行**默认配置head**或者**自定义封装head组件**的，本文将从这两个方面开始进行使用讲解。

## 默认的head配置方式

微信小程序的head一般是开发者通过在app.json来设置统一的样式，又或者在每个页面的json中对对应的页面进行设置

### 全局页面配置

我们可以在`app.json`中进行系统默认的全局head配置

```json
"window": {
        "backgroundTextStyle": "light",
        "navigationBarBackgroundColor": "#35d492",
        "navigationBarTitleText": "Weixin",
        "navigationBarTextStyle": "black"
},
```

- navigationBarBackgroundColor：设置的head背景颜色
- navigationBarTitleText：设置的默认head文字内容
- navigationBarTextStyle：head文字内容颜色

更多配置请参考官方文档：[页面配置 | 微信开放文档 (qq.com)](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html)

### 单页面配置

除此之外，在使用默认配置head的情况下，我们可以在想要自定义head内容的页面对应的json文字中进行配置，比如我想更改个人设置页面head文本内容，即在`person.json`中进行如下配置即可，其他相关设置默认为`app.json`中的配置。

```json
{
  "usingComponents": {},
  "navigationBarTitleText": "个人"
}
```

## 自定义封装head组件

> 首先，我们要进行自定义封装的目的是什么?

1. 页面head部分包含特定的功能，比如说：搜索框，地理位置等。
2. 应用中需要换肤功能，需要根据设置来更改head的背景颜色。

![image-20220703091419915](https://raw.githubusercontent.com/hogB/Img/main/202207030914980.png)

比如说美团小程序这里的head就为封装的head组件，包含了地理位置的功能，接下来开始封装属于我们的head

### 获取系统的head高度

> **因为不同机型的顶部高度不同，所以我们必要根据不同的机型设置不同的head高度**

我们需要在`app.js`即小程序的入口文件中调用`wx.getSystemInfo`来获取用户的机型信息还有`wx.getMenuButtonBoundingClientRect()`获取菜单按钮（右上角胶囊按钮）的布局位置信息，官方文档api介绍：[wx.getSystemInfo](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfo.html)，[wx.getMenuButtonBoundingClientRect()](https://developers.weixin.qq.com/miniprogram/dev/api/ui/menu/wx.getMenuButtonBoundingClientRect.html)

```js
 wx.getSystemInfo({
            success: (res) => {
                let capsule = wx.getMenuButtonBoundingClientRect();
                var statusBarHeight = res.statusBarHeight; //顶部状态栏高度
                this.globalData.capsule = capsule;
                this.globalData.titleHeight = statusBarHeight + capsule.height + (capsule.top - statusBarHeight) * 2;
            },
        })
```

关于这个顶部高度计算公式，我通过如下图所示分层介绍一下

![image-20220703091430816](https://raw.githubusercontent.com/hogB/Img/main/202207030914876.png)

`res.statusBarHeight`为通过api获取的状态栏高度

`capsule`是记录胶囊信息的变量对象，其`top`属性值为**以手机左上角为坐标原点，胶囊的距离x轴的长度**

所以整体的高度大小为：**状态栏高度**+**胶囊高度**+**2*(胶囊距顶高度-状态栏高度)**，胶囊距顶高度-状态栏高度为蓝色线与白色线之间得间距，最后即得`statusBarHeight + capsuleObj.height + (capsuleObj.top - statusBarHeight) * 2`

### 封装组件

封装头部组件的方式和其他组件相同，在`components`目录下新建组件

#### 获取高度

首先我们需要在`attached`生命周期中通过获取全局变量得方式拿到我们所需要的**胶囊信息与高度信息**，并响应式地设置值

```js
attached: function() {
        const app = getApp() 
        this.setData({
            titleHeight: app.globalData.titleHeight,
            capsule: app.globalData.capsule
        })
},
```

#### 配置组件属性

为了可以让头部组件更加自由，我们需要在组件属性列表中配置

```js
properties: {
        customTitle: String,
        backgroundColor: {
            type: String,
            value: ''
        },
        location: {
            type: Boolean,
            value: false
        },
        back: {
            type: Boolean,
            value: false
        },
    },
```

这里我配置了三个属性，即背景颜色，定位信息图标，返回按钮，根据不同的功能设置值得类型即可，比如背景颜色这里为字符串类型，其他为布尔型

#### 配置组件功能

一般来说基础head的基本功能就是返回上一个页面，封装一个`back`方法调用` wx.navigateBack`即可，其他方法可以根据需求增加

```js
methods: {
        back: function() {
            wx.navigateBack({
                delta: 1
            })
        },
    }
```

#### 组件自适应高度

我们在第一步的时候就拿到了高度的信息，所以我们之间可以为dom元素添加行内样式即可

```html
<wxml style="height:{{titleHeight}}px; background-color:{{backgroundColor}};"></wxml>
```

#### 完整demo

具体组件封装demo可以去开源仓库查看：[hogB/hoewo (github.com)](https://github.com/hogB/hoewo)欢迎star。

### 使用组件

#### 引入组件

首先需要在需要使用组件的页面json文件中进行组件的引入

```json
"usingComponents": {
    "Header": "/components/headBar/headBar",
  },
```

#### 取消默认head

在页面的json文件中取消默认head的配置，如下

```json
"navigationStyle": "custom"
```

#### 最后一步

最后一步直接使用即可，相关属性根据自己的配置来设置。

```wxml
<Header location customTitle="首页"></Header>
```

## 总结

其实封装head组件的核心在于：通过适配机型计算相应高度，只有拿到不同机型的高度才能完美得去展现自定义得head。

**相关demo可以在[hogB/hoewo (github.com)](https://github.com/hogB/hoewo)参考使用，欢迎star**



