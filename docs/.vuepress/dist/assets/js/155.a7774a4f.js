(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{781:function(t,s,a){"use strict";a.r(s);var n=a(17),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"助力乡村振兴-我为农民伯伯开发了这款微信小程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#助力乡村振兴-我为农民伯伯开发了这款微信小程序"}},[t._v("#")]),t._v(" 助力乡村振兴，我为农民伯伯开发了这款微信小程序")]),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("为什么开发这个项目，有两点原因：")]),t._v(" "),a("ul",[a("li",[t._v("猪痞恶霸的家庭是务农的，在家帮忙的时候，父母遇到了农业病害的问题，不知道从哪下手，所以需要一个方便的工具去了解这些。")]),t._v(" "),a("li",[t._v("借由2022年高校微信小程序开发大赛的主题：助力乡村振兴。")])]),t._v(" "),a("p",[t._v("由此，我和我的小伙伴使用"),a("strong",[t._v("微信小程序云开发")]),t._v("打造了这款口袋农识，掘友可以通过微信扫一扫下面的二维码来体验一下。")]),t._v(" "),a("p",[t._v("下面我将从"),a("strong",[t._v("项目结构")]),t._v("，"),a("strong",[t._v("核心功能")]),t._v("与"),a("strong",[t._v("细节处理")]),t._v("来带各位掘友全面了解这款小程序")]),t._v(" "),a("h2",{attrs:{id:"项目结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目结构"}},[t._v("#")]),t._v(" 项目结构")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/hogB/Img/main/202207172126057.png",alt:"image-20220717212615963"}})]),t._v(" "),a("p",[t._v("项目总体结构如上图所示，分为"),a("strong",[t._v("首页")]),t._v("，"),a("strong",[t._v("农识百科")]),t._v("，"),a("strong",[t._v("农害识别")]),t._v("，"),a("strong",[t._v("个人中心")]),t._v("四大模块构成")]),t._v(" "),a("ul",[a("li",[t._v("首页：节气预报，天气预报，农业资讯与农业新闻")]),t._v(" "),a("li",[t._v("农识百科：农识信息，农识搜索，农识收藏，农识内容")]),t._v(" "),a("li",[t._v("农害识别：拍照识别，系统推荐")]),t._v(" "),a("li",[t._v("个人中心：我的收藏，意见反馈，联系客服，关于我们")])]),t._v(" "),a("p",[t._v("项目结构我这里就以图文的形式一笔带过，大家可以通过体验来进一步了解，我将主要篇幅放在下面"),a("strong",[t._v("核心功能")]),t._v("与"),a("strong",[t._v("细节处理")]),t._v("，让读者可以了解主要功能的主要实现方案与一些交互上的主要的细节设计。")]),t._v(" "),a("h2",{attrs:{id:"核心功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心功能"}},[t._v("#")]),t._v(" 核心功能")]),t._v(" "),a("p",[t._v("下面我将为大家介绍小程序的核心功能及相关的实现方式核心功能实现包括三大点分别为："),a("strong",[t._v("主题更迭")]),t._v("，"),a("strong",[t._v("农识收藏")]),t._v("与"),a("strong",[t._v("文本解析")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"主题更迭"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主题更迭"}},[t._v("#")]),t._v(" 主题更迭")]),t._v(" "),a("p",[t._v("主题更迭主要有两种实现方案，分别是CSS变量与字符串替换")]),t._v(" "),a("h4",{attrs:{id:"css变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css变量"}},[t._v("#")]),t._v(" CSS变量")]),t._v(" "),a("p",[t._v("CSS变量是比较常用的，但是在"),a("strong",[t._v("口袋农识")]),t._v("中我并没有应用而是选择了第二种，因为当时设计的时候没有想到（还是技术太菜）")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("theme"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("color"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("#"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FFFFFF")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("如上所示代码为CSS变量的设置方式，以"),a("code",[t._v("--")]),t._v("开头，属性即合法CSS合法属性值即可，可以通过全局变量的方式即"),a("code",[t._v("globalData")]),t._v("的形式定义CSS变量，再在相关的样式中调用即可，实例代码如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" spring_theme "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("--theme-text-color:#FFFFFF;--theme-btn-color:#363b40;")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" autumn_theme "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("--theme-text-color:#29ac55;--theme-btn-color:#ffffff;")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" themeObj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    spring"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("theme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    autumn_theme\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("globalData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("theme "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" themeObj\n")])])]),a("p",[t._v("使用模板字符串的形式定义多个主题变量，再将所有变量通过对象形式存储起来，存到全局变量内即可，其实还可以更加细节化，"),a("strong",[t._v("按钮")]),t._v("，"),a("strong",[t._v("文本")]),t._v("，"),a("strong",[t._v("表单")]),t._v("等等，定义完整体的主题变量后就可以将其存储到全局中，这些步骤完成后，我们来看看如何进行变量绑定。")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("btn {{themeObj.spring_theme}}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("首先肯定需要将定义好的CSS变量值通过插值绑定给元素，而一般的全局页面使用绑定在小程序是在"),a("code",[t._v("page")]),t._v("中进行绑定的，因为其为小程序的最顶层。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("btn "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("theme"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("btn"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("之后对绑定元素的相应"),a("code",[t._v("class")]),t._v("内通过"),a("code",[t._v("var")]),t._v("将变量解析出为CSS合法属性即可。")]),t._v(" "),a("h4",{attrs:{id:"字符串替换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串替换"}},[t._v("#")]),t._v(" 字符串替换")]),t._v(" "),a("p",[t._v("所谓字符串替换是利用插值来替换元素的"),a("code",[t._v("class")]),t._v("，比如：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("view "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"left {{season}}-item"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("view"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("设置全局变量，在"),a("code",[t._v("onload")]),t._v("生命通过"),a("code",[t._v("global")]),t._v("获取"),a("code",[t._v("season")]),t._v("字符串拼接，再在CSS中预设好每个季节的样式即可，当如果静态文件也需要发生变化，比如icon，背景图片，也可以通过这种方式来更改，值得注意的是在一些场景中可以搭配"),a("strong",[t._v("模板字符串")]),t._v("使用。")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("image")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("../../images/personicon/{{season}}-accredit.png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("主题的更迭的实现方式就介绍到这里，如果有问题，可以在评论区留言，下面将介绍在农识收藏功能中的核心。")]),t._v(" "),a("h3",{attrs:{id:"农识收藏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#农识收藏"}},[t._v("#")]),t._v(" 农识收藏")]),t._v(" "),a("p",[t._v("农识收藏的主要核心是用户操作数据的鉴权以及点击收藏防抖。")]),t._v(" "),a("h4",{attrs:{id:"用户鉴权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户鉴权"}},[t._v("#")]),t._v(" 用户鉴权")]),t._v(" "),a("p",[t._v("微信云开发的鉴权方式很轻松，因为其独特的"),a("code",[t._v("openid")]),t._v("，使得用户在操作数据的时候就会将用户唯一标识符以"),a("code",[t._v("_openid")]),t._v("的形式存储起来，而在获取的时候也只需要通过调用云开发的"),a("code",[t._v("api")]),t._v("通过"),a("code",[t._v("doc")]),t._v("来获取该唯一标识符下的收藏数据。")]),t._v(" "),a("h4",{attrs:{id:"防抖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防抖"}},[t._v("#")]),t._v(" 防抖")]),t._v(" "),a("p",[t._v("在这里防抖的作用是避免用户连续点击收藏按钮，造成发生多次收藏请求，用户收藏数据会包含重复数据。我的思路有两种，一个是在请求中对重复相同请求进行判断并拦截，一个是通过函数来实现防抖，下面是我通过网上资料参考，在工具文件中定义的防抖函数。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("debounce")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fun"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TIMEOUT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" that "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TIMEOUT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("that"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这种实现是比较暴力的，在有新的函数进入时，会清空旧的定时器并重新设定新的定时器。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("debounce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("addCollect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("使用的化如上所示，引入"),a("code",[t._v("util")]),t._v("后调用封装的防抖函数并传入收藏函数与防抖时间作为参数。")]),t._v(" "),a("h3",{attrs:{id:"文本解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文本解析"}},[t._v("#")]),t._v(" 文本解析")]),t._v(" "),a("p",[t._v("文本解析可以说是整个微信小程序最基础也是最重要的功能，因为其农识是通过"),a("strong",[t._v("文本")]),t._v("的方式实现，所以我采用了"),a("strong",[t._v("已经不维护")]),t._v("的"),a("code",[t._v("wxParse")]),t._v("作为文本解析组件，项目地址："),a("a",{attrs:{href:"https://github.com/icindy/wxParse",target:"_blank",rel:"noopener noreferrer"}},[t._v("icindy/wxParse: wxParse-微信小程序富文本解析自定义组件，支持HTML及markdown解析 (github.com)"),a("OutboundLink")],1),t._v("，在其仓库中的"),a("code",[t._v("readme")]),t._v("文件中有详细的使用说明，各位掘友也可以在我的项目中进行一个参考。")]),t._v(" "),a("h2",{attrs:{id:"细节处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#细节处理"}},[t._v("#")]),t._v(" 细节处理")]),t._v(" "),a("p",[t._v("我们通过对小程序增加一些细节来优化用户体验，主要为两点："),a("strong",[t._v("首屏渲染")]),t._v("与"),a("strong",[t._v("卡片流")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"首屏渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首屏渲染"}},[t._v("#")]),t._v(" 首屏渲染")]),t._v(" "),a("p",[t._v("首屏渲染主要是由骨架屏的使用来实现的，微信开发者工具自带了骨架屏生成工具，所以使用起来也很方便，一般是在页面组件同级目录下生成"),a("code",[t._v("skeleton.wxml")]),t._v("与"),a("code",[t._v("skeleton.wxss")]),t._v("文件，譬如主页文件目录：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n├── home\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   └── home"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   └── home"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wxml\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   └── home"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wxss\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   └── home"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   └── home"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("skeleton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wxml\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   └── home"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("skeleton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wxss\n└── "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),a("p",[t._v("之后就可以通过"),a("code",[t._v("v-show")]),t._v("与"),a("code",[t._v("v-if")]),t._v("来控制骨架屏与真实元素的出现与消失，一般是通过"),a("code",[t._v("v-show")]),t._v("来控制真实内容，因为其要先进行一个内容的加载，再通过骨架屏的消失来为用户展现加载完的文本与图片，具体的使用方式，在微信开发者工具生成的文件中有详细步骤，又或者跳到本文的倒数第二个标题：相关文章，其云开发实战总结中也有相关介绍。")]),t._v(" "),a("h3",{attrs:{id:"卡片流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卡片流"}},[t._v("#")]),t._v(" 卡片流")]),t._v(" "),a("p",[t._v("卡片流指的是在农识百科中农识卡片的集合，就会涉及到上拉加载与触底刷新问题。")]),t._v(" "),a("p",[t._v("上拉加载与触底刷新是优化卡片流的一种配套动作，用户想要刷新数据，下拉进行刷新并重新请求数据，而触底加载是为了避免集合元素即内容数量过多，造成渲染压力，使用触底加载，继续请求接下来的数据，具体实现可以参考我总结的："),a("a",{attrs:{href:"https://juejin.cn/post/7101820398253113351",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序触底加载与下拉刷新功能的设计与实现 - 掘金 (juejin.cn)"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"相关文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关文章"}},[t._v("#")]),t._v(" 相关文章")]),t._v(" "),a("p",[t._v("我在开发小程序的过程中也总结了一些个人体会，掘友们可以作为一个参考。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.cn/post/7103102468266917924",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序云开发实战总结|快速上手&场景实战 - 掘金 (juejin.cn)"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.cn/post/7102193257324478478",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信小程序head组件的封装与使用 - 掘金 (juejin.cn)"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.cn/post/7101820398253113351",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序触底加载与下拉刷新功能的设计与实现 - 掘金 (juejin.cn)"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.cn/post/7101453399240998949",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信小程序实战之骨架屏的应用与实现 - 掘金 (juejin.cn)"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),a("p",[t._v("新时代IT青年必须扛起乡村振兴的大旗，如果掘友们有好的想法与创意，一定是要关于乡村振兴的！！！可以在评论区留言，在创意活动结束后，我将通过掘金安东尼大佬的抽奖算法对符合留言规则的掘友送出click抱枕一个！！！（今天又拿到一个）")]),t._v(" "),a("p",[t._v("锄禾日当午，汗滴禾下土，谁知盘中餐，粒粒皆辛苦。")])])}),[],!1,null,null,null);s.default=e.exports}}]);