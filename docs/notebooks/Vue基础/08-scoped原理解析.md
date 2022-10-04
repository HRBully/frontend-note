## Scoped

> 样式冲突是我们经常会遇到的问题，但是我们该如何解决呢？

### 样式冲突

由于我们最终渲染到index.html中所以样式非常容易发生冲突，在组件中我们可以更这样做解决样式的冲突问题这里埋下个伏笔为下文刨析scoped原理做下铺垫，读者可以看一下此处解决样式冲突所使用的方法。

```html
<h1 data-v-01></h1>
```

```css
h1[data-v-01] {
    color:red;
}
```

当然不可能将所有的节点都添加属性

### 了解Scoped

在vue组件中scoped属性使CSS只对当前组件生效，而不对其他的组件，比如说不会对子组件生效，下面我们直接用例子来让大家了解scoped的应用，首先是父组件

```vue
<template>
	<div class="main">
        <p>HELLO,scoped</p>
        <hello></hello>
    </div>
</template>
```

父组件的样式

```vue
<style scoped>
    .main p {
        color:red;
    }
</style>
```

子组件

```vue
<template>
	<div>
        <p>Hello,scoped</p>
    </div>
</template>
```

在之后我们会发现父组件内的段落文字为红色，css作用上了，而子组件的段落文字为黑色说明css没有作用上，scoped属性成功地被应用但是我们还想让该子组件的样式也能被修改，那我们就可以使用deep来使CSS穿透过去为其渲染，而在Vue2和Vue3的deep选择器的写法截然不同.

在Vue2中如果我们不使用预处理器的话是需要使用>>>来进行样式穿透

```vue
>>> .child-class {
	color:red
}
```

在Vue3中我们使用:deep来完成样式穿透

```vue
:deep(.child-class) {
	color:red;
}
```



### 刨析原理

scope是使用Postcss工具来实现的，其会对vue组件进行一次代码转换，拿上面的例子进行转换如下，我们会发现我们的标签多了一个属性，以及选择也新增了同样的属性，我们在父组件中的子组件上没有相对于的属性，所以样式并没有被渲染加载，这个方法对于了我们开始时所介绍的解决样式冲突的方法，而scoped则是根据这个方法来实现的，这就是scoped的实现原理。

```vue
<template>
	<div class="main">
        <p data-v-f3f3eg9>HELLO,scoped</p>
        <hello></hello>
    </div>
</template>
<style scoped>
    .main p[data-v-f3f3eg9] {
        color:red;
    }
</style>
```

### 使用scoped的好处

当我们使用scoped的时候，父组件的样式不会泄露到子组件中，但是一个子组件的根节点还是会被父组件的scoped的css和子组件的scopedcss影响，但是我们可以根据布局等原因来去改变子组件的根节点样式。