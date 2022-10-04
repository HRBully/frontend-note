(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{743:function(t,a,s){"use strict";s.r(a);var e=s(17),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"元数据的使用与在html中的几个应用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#元数据的使用与在html中的几个应用场景"}},[t._v("#")]),t._v(" 元数据的使用与在HTML中的几个应用场景")]),t._v(" "),s("h2",{attrs:{id:"元数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#元数据"}},[t._v("#")]),t._v(" 元数据")]),t._v(" "),s("blockquote",[s("p",[t._v("提一下"),s("strong",[t._v("元数据")]),t._v("，这个可能陌生的名词其实并不陌生，因为我们常常为我们的"),s("code",[t._v("HTML")]),t._v("文档添加元数据")])]),t._v(" "),s("p",[t._v("元数据的官方概念：描述数据的数据。有点套娃，所以难懂，下面我们来看一下元数据对于HTML文档的作用，就能大致明白元数据概念")]),t._v(" "),s("p",[t._v("因为元数据是描述数据的数据，所以元数据可以描述HTML文档的作者， 标题，概述等等，所以我们可以通过添加元数据来完善我们的HTML文档，达到更好地一个SEO效果")]),t._v(" "),s("p",[t._v("那么我们如何为我们的HTML文档添加元数据呢，下面我们来看看"),s("code",[t._v("head")]),t._v("，"),s("code",[t._v("meta")]),t._v("，"),s("code",[t._v("link")]),t._v("，与"),s("code",[t._v("script")])]),t._v(" "),s("h2",{attrs:{id:"添加元数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加元数据"}},[t._v("#")]),t._v(" 添加元数据")]),t._v(" "),s("p",[t._v("我们可以使用"),s("code",[t._v("head")]),t._v("，"),s("code",[t._v("meta")]),t._v("，"),s("code",[t._v("link")]),t._v("，与"),s("code",[t._v("script")]),t._v("来为我们的HTML文档添加元数据，各有各的作用")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("<head>")]),t._v("标签是作为存储元数据的容器，在整个文档中，我们想要添加的元数据需要存储在"),s("code",[t._v("<head>")]),t._v("包裹的区域内")]),t._v(" "),s("li",[s("code",[t._v("<meta>")]),t._v("标签可以为HTML文档添加元数据，他有很多种类，下面会具体介绍基本的构成和常见的应用")]),t._v(" "),s("li",[s("code",[t._v("<link>")]),t._v("标签可以为我们的文档添加自定义图标，也可以引入CSS")]),t._v(" "),s("li",[s("code",[t._v("<script>")]),t._v("标签可以引入外部脚本文件")])]),t._v(" "),s("p",[t._v("一个普通的元数据存储区域如下所示")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("X-UA-Compatible"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("IE=edge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, initial-scale=1.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Document"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("了解完元数据后，我们来主要学习一下"),s("code",[t._v("<meta>")]),t._v("的属性与常见的应用场景")]),t._v(" "),s("h2",{attrs:{id:"meta"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#meta"}},[t._v("#")]),t._v(" meta")]),t._v(" "),s("h3",{attrs:{id:"属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),s("p",[s("code",[t._v("<meta>")]),t._v("的属性常用的主要有四个，分别是"),s("code",[t._v("name")]),t._v("，"),s("code",[t._v("content")]),t._v("，"),s("code",[t._v("charset")]),t._v("，"),s("code",[t._v("http-equiv")]),t._v("，分别介绍一下他们的作用")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("name")]),t._v("与"),s("code",[t._v("content")]),t._v("是搭配使用的，一般用来描述文档，其以键值对形式存在，即"),s("code",[t._v("name")]),t._v("是键，"),s("code",[t._v("content")]),t._v("是值")]),t._v(" "),s("li",[s("code",[t._v("charset")]),t._v("一般用来规定文档的字符集，比如规定·字符集为"),s("code",[t._v("Utf-8")])]),t._v(" "),s("li",[s("code",[t._v("http-equiv")]),t._v("也与"),s("code",[t._v("content")]),t._v("搭配使用，也是以键值对形式，用于设置"),s("code",[t._v("http")]),t._v("响应头")])]),t._v(" "),s("p",[t._v("这四种基本的属性的作用与使用方法掌握后，让我们来看看实际的应用场景")]),t._v(" "),s("h3",{attrs:{id:"常见应用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见应用场景"}},[t._v("#")]),t._v(" 常见应用场景")]),t._v(" "),s("h4",{attrs:{id:"添加文档描述信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加文档描述信息"}},[t._v("#")]),t._v(" 添加文档描述信息")]),t._v(" "),s("p",[t._v("一般我们如果想要网页拥有更好地seo的话，就需要为我们的文档添加详细的描述元数据，比如我为我的网页添加作者描述与介绍描述")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("keyword"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("互联网"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("author"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("猪痞恶霸"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("introduce"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("这是猪痞恶霸介绍元数据及其应用的文章"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("这样的话seo会根据关键词与文档设置的描述，将相关内容推送给更多用户")]),t._v(" "),s("h4",{attrs:{id:"设置文档编码方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置文档编码方式"}},[t._v("#")]),t._v(" 设置文档编码方式")]),t._v(" "),s("p",[t._v("有些文档需要提供给很多不同国家的用户，所以需要控制文档的编码，根据个性化语言来设置不同的编码方式，我们常用的是"),s("code",[t._v("Utf-8")]),t._v("编码，因为通用字符集的特性可以更好地解析网页")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("utf-8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"link"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#link"}},[t._v("#")]),t._v(" link")]),t._v(" "),s("h3",{attrs:{id:"属性-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性-2"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),s("p",[s("code",[t._v("<link>")]),t._v("的属性主要包括"),s("code",[t._v("rel")]),t._v("，"),s("code",[t._v("href")]),t._v("，"),s("code",[t._v("media")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("href")]),t._v("其值为链接到文件地路径")]),t._v(" "),s("li",[s("code",[t._v("rel")]),t._v("主要描述链接地关系，经常与"),s("code",[t._v("href")]),t._v("联合使用")]),t._v(" "),s("li",[s("code",[t._v("media")]),t._v("可以控制引入，根据媒体类型的不同来引入不同的资源")])]),t._v(" "),s("h3",{attrs:{id:"常见应用场景-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见应用场景-2"}},[t._v("#")]),t._v(" 常见应用场景")]),t._v(" "),s("h4",{attrs:{id:"自定义图标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义图标"}},[t._v("#")]),t._v(" 自定义图标")]),t._v(" "),s("p",[t._v("为文档设置自定义图标")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("icon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("favicon.ico"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("这里的"),s("code",[t._v("rel")]),t._v("认定了其是"),s("code",[t._v("icon")]),t._v("关联资源文件，默认的文档图标是"),s("code",[t._v("favicon.ico")])]),t._v(" "),s("h4",{attrs:{id:"引入css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引入css"}},[t._v("#")]),t._v(" 引入CSS")]),t._v(" "),s("p",[t._v("一般引入外部CSS是通过"),s("code",[t._v("link")]),t._v("来引入的")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("print.css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("code",[t._v("css")]),t._v("引入通过"),s("code",[t._v("href")]),t._v("加载路径，"),s("code",[t._v("rel")]),t._v("规定其为样式表")]),t._v(" "),s("h2",{attrs:{id:"script"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#script"}},[t._v("#")]),t._v(" script")]),t._v(" "),s("h3",{attrs:{id:"属性-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性-3"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),s("p",[s("code",[t._v("<script>")]),t._v("的属性主要包括"),s("code",[t._v("async")]),t._v("，"),s("code",[t._v("crossorigin")]),t._v("与"),s("code",[t._v("defer")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("src")]),t._v("：其值为外部资源文件的路径")]),t._v(" "),s("li",[s("code",[t._v("async")]),t._v("：其控制脚本异步执行")]),t._v(" "),s("li",[s("code",[t._v("defer")]),t._v("：控制脚本执行在文档解析之后")])]),t._v(" "),s("p",[s("code",[t._v("async")]),t._v("与"),s("code",[t._v("defer")]),t._v("还是比较重要的，")]),t._v(" "),s("h3",{attrs:{id:"常见应用场景-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见应用场景-3"}},[t._v("#")]),t._v(" 常见应用场景")]),t._v(" "),s("h4",{attrs:{id:"引入脚本文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引入脚本文件"}},[t._v("#")]),t._v(" 引入脚本文件")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index.js"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("通过"),s("code",[t._v("<script>")]),t._v("引入外部脚本文件，嵌入内部，然后根据各个模块的脚本文件的需要，按需注入需要的属性")]),t._v(" "),s("h2",{attrs:{id:"解析外链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解析外链"}},[t._v("#")]),t._v(" 解析外链")]),t._v(" "),s("p",[t._v("企业微信or飞书解析url显示图片和信息是怎么做到的，这里是根据一些规定的元数据协议，我看阳光大佬的这篇文章相关，写的很详细")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.cn/post/7081462552164565006",target:"_blank",rel:"noopener noreferrer"}},[t._v("产品经理：阳光你来实现一下分享出去的URL链接预览图片、标题和描述。 - 掘金 (juejin.cn)"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("p",[t._v("mdn，w3c")]),t._v(" "),s("p",[t._v("本篇是比较基础的总结文，希望各位掘友多多包涵")])])}),[],!1,null,null,null);a.default=n.exports}}]);