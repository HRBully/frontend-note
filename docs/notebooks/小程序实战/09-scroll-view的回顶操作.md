> 下面我将围绕三个功能实现要点，分别是**按钮的固定悬浮**，控制**按钮的显示与隐藏**以及**回到顶部**，来带读者实现**固定按钮回到顶部**这个场景。

## 按钮的固定悬浮

悬浮按钮的固定主要是依靠`position:fixed`完成的，`fixed`可以让元素以窗口为参照点进行定位，所以可以控制元素在屏幕上的位置固定不变，下面我拿码上掘金的代码块来复现按钮的固定悬浮及其样式

## 按钮的显示与隐藏

这个功能是这个样子的，在顶部的时候，将按钮隐藏，在底部的时候将按钮显示，这个需要对滑块与顶部的距离进行监听，来控制按钮的显隐，所以需要两个东西，`bindscroll`与`hidden`

### bindscroll

`bindscroll`可以绑定滚动监听函数，当滚动区域滚动的时候会触发绑定事件

```html
<scroll-view class="enroll-page-container" scroll-y="true"  bindscroll="onMonitor" scroll-left >
</scroll-view>
```

上面是一个简易的滚动区域，我们设定了`onMonitor`作为监听函数，当滚动的时候会实时触发，那么知道了这个滚动监听函数，问题就迎刃而解了，在函数内接受`e`参数，参数内包含了`scroll-view`的一个属性为`scrollTop`拿到这个属性后就可以根据滑动距离来控制按钮的显示与隐藏

```js
onMonitor(e) {
        if(e.detail.scrollTop > 150) {
            this.setData({
                isTop:false
            })
        }else {
            this.setData({
                isTop:true
            })
        }
    },
```

### hidden

为什么要使用`hidden`而不使用`wx:if`，这里大佬肯定能知道是为什么，`hidden`与`wx:if`的选用是根据场景来的，`hidden`能保留元素，`wx:if`不保留元素，所以如果元素需要频繁的显示与消失，为了避免节点的销毁与生成影响性能，所以必须使用`hidden`来控制。

## 回到顶部

回到顶部这个功能也需要搭配`scroll-view`的属性来实现，即`scroll-top`，距离顶部的距离，绑定变量后，添加回到顶部事件，将其置为0即可

```js
 trunTop() {
        this.setData({
            topDistance: 0
        })
    },
```

## 总结

总结来看，整体功能的设计实现分为三步

- 考虑按钮的固定问题
- 如何判断列表滚动的距离来控制按钮的显示与隐藏
- 如何将列表滚动回到顶部

根据每个步骤，在文档查找相关的api与属性，成功实现了这个场景

