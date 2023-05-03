## 前言

不知道你们有没有遇到过这样的需求：在文件上传过程中第一步就是用户进行文件选取，产品这个时候想要让你在文件选取之前让用户知悉某些要求，又或者让你判断该用户是否满足上传文件的条件，不满足的话去提示用户。在这个需求中，我们多次提到了**文件选取**，而我们所需要做的就是**在调用文件选取之前拦截掉它**。

下面我们带着这个需求目的去思考：我们如何对文件选择弹窗进行拦截呢。

## 拦截文件选择弹窗的思考🤔

在上传文件的场景下，通常点击上传按钮/上传区域，会唤醒文件选取弹窗


![image.png](https://raw.githubusercontent.com/HRBully/Img/main/78bf8fc6c9ef4847923117807a3677de%7Etplv-k3u1fbpfcp-watermark.image)

我们想做到的是**点击上传按钮/区域，不会触发这个弹窗**，但是，官方文档中并没有相关的钩子，而且我们在常用的`element`的文件上传组件`el-upload`的文档中，同样没有看到相关的钩子函数，只有文件选择后进行上传的一些钩子，`before-upload`，`on-success`，所以解决这个需求需要**另辟蹊径**

如果我们不能从编程式的角度去解决，那么我们可以从DOM层出发，而从DOM层的角度来讲，我们可以做一个**物理拦截**，也就是可以在物理的角度上给文件上传DOM做一个**保护**，保护这个DOM在被用户点击的时候被物理拦截掉，又或者我们给这个DOM加个锁，通过解锁来控制文件上传的触发。有思路了✌️，那我们来具体看看如何实现吧。

## 给上传组件套个龟壳之DOM拦截🐢

### 思路

```vue
<el-upload></el-upload>
```

这是一个`element`文件上传组件，思考一下，如果我们想要阻止用户点击这个组件后进行文件的选取，那么我们需要什么？一个拦截器，但是它并没有给我们提供一个文件选取的钩子，我们可以转变一下思路，**利用元素的层叠上下文特性**，在组件的上层放置一个**DOM拦截器**


![image.png](https://raw.githubusercontent.com/HRBully/Img/main/0e17b81f7da1438299a0cf2306f77c90%7Etplv-k3u1fbpfcp-watermark.image)

### 使用DOM进行拦截点击

我们先来看一下文件拦截模块的整体结构

```vue
<template>
    <div>
        <!--DOM拦截-->
        <div 
             class="hand-block"
             @click="handDialog" 
             >
        </div>
        <!--文件上传组件-->   
        <el-upload ref="upload-inner"></el-upload>
    </div>
</template>
<style>
    .hand-block {
         width:100%
         height:100%
         position: absolute;
         z-index: 999;
    }
</style>
```

我们将DOM拦截器和文件上传组件放置在了一个`div`内，我们需要利用层叠上下文特性将拦截元素放置在文件上传组件上方，所以第一步需要使用`position: absolute;`对他进行脱离文档流处理，此时它就会在`el-upload`上方，下来我们需要对拦截元素添加`z-index: 999;`，使它的处在`el-upload`的上方，也就是说我们点击`el-upload`的时候实际上是点击到了**拦截DOM**上了也就是不会触发文件选取操作

在拦截后，我们就可以进行下一步，关闭弹窗后唤醒文件选取

```vue
<script>
    export default {
        data() {
            return {
                isVisible:false
            }
        },
        methods: {
            handDialog() {
                this.isVisible = true
           },
            closeDialog() {
                this.isVisible = false
                this.$refs.handUpload.$refs["upload-inner"].handleClick();
           }
        }
    }
</script>
```

其实唤醒文件选取本质上也是触发点击`el-upload`，不过我们需要编程式触发，即通过DOM获取组件触发`handleClick()`模拟点击`el-upload`。

## 给上传组件上个锁之disabled🔒

### 思路

除了使用DOM元素在上传组件上方做一个**龟壳**外，我们还可以从组件本身出发，锁住它，也就是**禁用组件**


![image.png](https://raw.githubusercontent.com/HRBully/Img/main/5ca0a058c8ff4629aaadb30a2bb385cc%7Etplv-k3u1fbpfcp-watermark.image)

### 使用disabled锁住组件


```vue
<template>
    <div @click="handDialog" >
        <el-upload ref="upload-inner" :disabled="isDisabled"></el-upload>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isVisible:false
                isDisabled:true
            }
        },
        methods: {
            handDialog() {
                this.isVisible = true
           },
            closeDialog() {
                this.isVisible = false
                this.isDisabled = false
                this.$refs.handUpload.$refs["upload-inner"].handleClick();
           }
        }
    }
</script>
```

这个思路实现的关键是使用`disabled`，当其值为`true`的时候，组件为禁用状态，也就是说它无法被点击，所以我们可以通过其父容器来触发选择文件前的行为，在行文结束后对组件进行解禁，再通过编程式来触发组件，唤醒选择文件弹窗。
