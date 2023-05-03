# 元数据的使用与在HTML中的几个应用场景

## 元数据

> 提一下**元数据**，这个可能陌生的名词其实并不陌生，因为我们常常为我们的`HTML`文档添加元数据

元数据的官方概念：描述数据的数据。有点套娃，所以难懂，下面我们来看一下元数据对于HTML文档的作用，就能大致明白元数据概念

因为元数据是描述数据的数据，所以元数据可以描述HTML文档的作者， 标题，概述等等，所以我们可以通过添加元数据来完善我们的HTML文档，达到更好地一个SEO效果

那么我们如何为我们的HTML文档添加元数据呢，下面我们来看看`head`，`meta`，`link`，与`script`

## 添加元数据

我们可以使用`head`，`meta`，`link`，与`script`来为我们的HTML文档添加元数据，各有各的作用

- `<head>`标签是作为存储元数据的容器，在整个文档中，我们想要添加的元数据需要存储在`<head>`包裹的区域内
- `<meta>`标签可以为HTML文档添加元数据，他有很多种类，下面会具体介绍基本的构成和常见的应用
- `<link>`标签可以为我们的文档添加自定义图标，也可以引入CSS
- `<script>`标签可以引入外部脚本文件

一个普通的元数据存储区域如下所示

```html
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
```

了解完元数据后，我们来主要学习一下`<meta>`的属性与常见的应用场景

## meta

### 属性

`<meta>`的属性常用的主要有四个，分别是`name`，`content`，`charset`，`http-equiv`，分别介绍一下他们的作用

- `name`与`content`是搭配使用的，一般用来描述文档，其以键值对形式存在，即`name`是键，`content`是值
- `charset`一般用来规定文档的字符集，比如规定·字符集为`Utf-8`
- `http-equiv`也与`content`搭配使用，也是以键值对形式，用于设置`http`响应头

这四种基本的属性的作用与使用方法掌握后，让我们来看看实际的应用场景

### 常见应用场景

#### 添加文档描述信息

一般我们如果想要网页拥有更好地seo的话，就需要为我们的文档添加详细的描述元数据，比如我为我的网页添加作者描述与介绍描述

```html
<head>
  <meta name="keyword" content="互联网">
  <meta name="author" content="猪痞恶霸">
  <meta name="introduce" content="这是猪痞恶霸介绍元数据及其应用的文章">
</head>
```

这样的话seo会根据关键词与文档设置的描述，将相关内容推送给更多用户

#### 设置文档编码方式

有些文档需要提供给很多不同国家的用户，所以需要控制文档的编码，根据个性化语言来设置不同的编码方式，我们常用的是`Utf-8`编码，因为通用字符集的特性可以更好地解析网页

```html
<meta charset="utf-8">
```

## link

### 属性

`<link>`的属性主要包括`rel`，`href`，`media`

- `href`其值为链接到文件地路径
- `rel`主要描述链接地关系，经常与`href`联合使用
- `media`可以控制引入，根据媒体类型的不同来引入不同的资源

### 常见应用场景

#### 自定义图标

为文档设置自定义图标

```html
<link rel="icon" href="favicon.ico">
```

这里的`rel`认定了其是`icon`关联资源文件，默认的文档图标是`favicon.ico`

#### 引入CSS

一般引入外部CSS是通过`link`来引入的

```html
<link href="print.css" rel="stylesheet" >
```

`css`引入通过`href`加载路径，`rel`规定其为样式表

## script

### 属性

`<script>`的属性主要包括`async`，` crossorigin`与`defer`

- `src`：其值为外部资源文件的路径
- `async`：其控制脚本异步执行
- `defer`：控制脚本执行在文档解析之后

`async`与`defer`还是比较重要的，

### 常见应用场景

#### 引入脚本文件

```js
<script src="index.js"></script>
```

通过`<script>`引入外部脚本文件，嵌入内部，然后根据各个模块的脚本文件的需要，按需注入需要的属性

## 解析外链

企业微信or飞书解析url显示图片和信息是怎么做到的，这里是根据一些规定的元数据协议，我看阳光大佬的这篇文章相关，写的很详细

[产品经理：阳光你来实现一下分享出去的URL链接预览图片、标题和描述。 - 掘金 (juejin.cn)](https://juejin.cn/post/7081462552164565006)

## 参考资料

mdn，w3c

本篇是比较基础的总结文，希望各位掘友多多包涵

