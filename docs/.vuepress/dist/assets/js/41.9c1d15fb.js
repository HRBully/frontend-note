(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{650:function(t,a,s){"use strict";s.r(a);var v=s(17),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"盒模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#盒模型"}},[t._v("#")]),t._v(" 盒模型")]),t._v(" "),s("p",[t._v("掌握盒模型是掌握布局的前提，它的构成如下图所示")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/hogB/Img/main/202207231933683.png",alt:"image-20220723193320658"}})]),t._v(" "),s("p",[t._v("由内到外分别由"),s("strong",[t._v("内容")]),t._v("（content）即蓝色部分，"),s("strong",[t._v("内边距")]),t._v("（padding）即绿色部分，"),s("strong",[t._v("边框")]),t._v("（border）即浅黄色部分，"),s("strong",[t._v("外边距")]),t._v("（margin）即深黄色四大部分组成，下面我将为读者从"),s("strong",[t._v("各个组成部分")]),t._v("与"),s("strong",[t._v("盒模型分类")]),t._v("两个角度来具体讲解盒模型。")]),t._v(" "),s("h2",{attrs:{id:"组成部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组成部分"}},[t._v("#")]),t._v(" 组成部分")]),t._v(" "),s("p",[t._v("组成部分我主要针对"),s("strong",[t._v("内边距")]),t._v("，"),s("strong",[t._v("边框")]),t._v("以及"),s("strong",[t._v("外边距")])]),t._v(" "),s("h3",{attrs:{id:"内边距"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内边距"}},[t._v("#")]),t._v(" 内边距")]),t._v(" "),s("h4",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("p",[t._v("内边距"),s("code",[t._v("padding")]),t._v("，它是内容与边框之间的距离，共有四个方向，可以通过设置来改变每个方向的距离，我通过码上掘金来演示效果")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/hogB/Img/main/202208151622227.png",alt:"image-20220815162244191"}})]),t._v(" "),s("p",[t._v("通过上述演示我们知道了可以通过"),s("code",[t._v("padding")]),t._v("设置内边距的大小，而且其值的数量为1~4个，效果各不同，不同数量的设置的效果看如下表格")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("代码")]),t._v(" "),s("th",[t._v("效果")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("padding: 10px;")])]),t._v(" "),s("td",[t._v("四个方向内边距都为10px")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("padding: 10px 20px;")])]),t._v(" "),s("td",[t._v("上下方向10px，左右方向20px")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("padding: 10px 20px 30px;")])]),t._v(" "),s("td",[t._v("上10px，左右20px，下30px")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("padding: 20px 10px 40px 30px;")])]),t._v(" "),s("td",[t._v("上20px，右10px，下40px，左30px")])])])]),t._v(" "),s("p",[t._v("而演示的效果呈现了盒子的大小不同，这点将会在下文中"),s("strong",[t._v("盒模型分类")]),t._v("中介绍具体原因。")]),t._v(" "),s("h4",{attrs:{id:"注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),s("ol",[s("li",[t._v("行内元素不会将水平padding大小计算在盒模型内，垂直方向不受影响，块级元素padding各个方向都会计算在内")]),t._v(" "),s("li",[t._v("一些标签元素会内置"),s("code",[t._v("padding")]),t._v("大小，如果需要更改则需要利用优先级进行覆盖")]),t._v(" "),s("li",[s("code",[t._v("padding")]),t._v("不支持负值，但是可以设置百分比，且四个方向的百分比值都是根据宽度计算。")])]),t._v(" "),s("h4",{attrs:{id:"应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[t._v("#")]),t._v(" 应用")]),t._v(" "),s("p",[t._v("在我的经验里"),s("code",[t._v("padding")]),t._v("经常用于增加点击区域的大小，如果内容过小，用户点击需要点击多次，而了布局也不能更改，内容是由字体大小决定的，所以可以通过改变内边距大小扩大可点击区域，增强用户体验。")]),t._v(" "),s("p",[t._v("我们还可以利用"),s("code",[t._v("padding")]),t._v("百分比值的特性设置一些特定比例的内容，如2:4的头像。")]),t._v(" "),s("h3",{attrs:{id:"边框"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#边框"}},[t._v("#")]),t._v(" 边框")]),t._v(" "),s("h4",{attrs:{id:"语法-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法-2"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("p",[t._v("边框"),s("code",[t._v("border")]),t._v("是内边距与外边距之间的夹层，它可以通过三种属性来设置指定容器边框样式、粗细和颜色。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("作用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("border-width")])]),t._v(" "),s("td",[t._v("边框宽度")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("border-style")])]),t._v(" "),s("td",[t._v("边框样式")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("border-color")])]),t._v(" "),s("td",[t._v("边框颜色")])])])]),t._v(" "),s("p",[t._v("也可以对不同方向设置不同的样式例如："),s("code",[t._v("border-left-style:solid;")]),t._v("设置左侧边框的样式为实线")]),t._v(" "),s("p",[t._v("也可以直接使用"),s("code",[t._v("border")]),t._v("缩写这三种属性，顺序："),s("code",[t._v("border:1px solid #ccc;")])]),t._v(" "),s("h4",{attrs:{id:"好玩的边框"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#好玩的边框"}},[t._v("#")]),t._v(" 好玩的边框")]),t._v(" "),s("p",[t._v("可以控制边框样式来绘制三角形，当盒子的高度和宽度都为0的时候就会出现下面的形状")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/hogB/Img/main/202208151620319.png",alt:"image-20220815162000277"}})]),t._v(" "),s("h3",{attrs:{id:"外边距"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#外边距"}},[t._v("#")]),t._v(" 外边距")]),t._v(" "),s("h4",{attrs:{id:"语法-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法-3"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("p",[t._v("外边距"),s("code",[t._v("margin")]),t._v("定义了元素周围的空间大小，具有四个方向，与"),s("code",[t._v("padding")]),t._v("数值不同的是它可以使用负值.")]),t._v(" "),s("h4",{attrs:{id:"注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),s("p",[t._v("外边距最需要注意的是其外边距合并的问题，相邻的元素之间的外边距大小遵循一个规则：“正正按大，正负相加，负负最小”，解释一下，当两个元素相邻的时候，其距离按两元素最大的外边距宽度，如果两个元素的外边距大小有正有负，则距离为两个数值之和，如果两个元素的外边距距离都为负值，那么其宽度按最小的值来计算，下面通过演示来体会这个规则")]),t._v(" "),s("h4",{attrs:{id:"应用-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用-2"}},[t._v("#")]),t._v(" 应用")]),t._v(" "),s("p",[s("code",[t._v("margin")]),t._v("最大的使用场景是标题，文本，图片等信息的间隔，让整体的信息流显得很宽阔，这里我不再赘述，下面讲解一下两种盒模型。")]),t._v(" "),s("h2",{attrs:{id:"盒模型分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#盒模型分类"}},[t._v("#")]),t._v(" 盒模型分类")]),t._v(" "),s("p",[t._v("有两种盒模型，其规则各不同，分别为"),s("code",[t._v("content-box")]),t._v("与"),s("code",[t._v("border-box")]),t._v("，可以通过"),s("code",[t._v("box-sizing")]),t._v("来设置，其中默认值为"),s("code",[t._v("content-box")])]),t._v(" "),s("h2",{attrs:{id:"分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分类"}},[t._v("#")]),t._v(" 分类")]),t._v(" "),s("h3",{attrs:{id:"标准盒模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标准盒模型"}},[t._v("#")]),t._v(" 标准盒模型")]),t._v(" "),s("p",[t._v("**"),s("code",[t._v("content-box")]),t._v("**默认的盒模型")]),t._v(" "),s("p",[t._v("实际计算情况：")]),t._v(" "),s("p",[s("code",[t._v("width/height")]),t._v("属性设定"),s("code",[t._v("content")]),t._v("的高度与宽度，实际尺寸计算需要"),s("code",[t._v("content")]),t._v("的高度和宽度加上"),s("code",[t._v("padding")]),t._v("与·"),s("code",[t._v("border")]),t._v("的高度与宽度")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".content-box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" content-box"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px solid #66f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 80px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 80px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #f66"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("实际高度："),s("code",[t._v("80px")]),t._v("+"),s("code",[t._v("2")]),t._v("x"),s("code",[t._v("50px")]),t._v("+"),s("code",[t._v("2")]),t._v("x"),s("code",[t._v("10px")]),t._v("="),s("code",[t._v("140px")]),t._v("（宽度同理）")]),t._v(" "),s("h3",{attrs:{id:"怪异盒模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#怪异盒模型"}},[t._v("#")]),t._v(" 怪异盒模型")]),t._v(" "),s("p",[s("code",[t._v("border-box")]),t._v("IE怪异盒模型")]),t._v(" "),s("p",[t._v("实际计算情况：")]),t._v(" "),s("p",[s("code",[t._v("width/height")]),t._v("属性设定"),s("code",[t._v("content")]),t._v("+"),s("code",[t._v("padding")]),t._v("+"),s("code",[t._v("border")]),t._v("的高度与宽度，实际尺寸计算根据设定的"),s("code",[t._v("width")]),t._v("与"),s("code",[t._v("height")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".border-box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-box"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px solid #66f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #f66"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("其中"),s("code",[t._v("content")]),t._v("的高度和宽度计算："),s("code",[t._v("100px")]),t._v("-"),s("code",[t._v("2")]),t._v("x"),s("code",[t._v("20px")]),t._v("-"),s("code",[t._v("2")]),t._v("x"),s("code",[t._v("10px")]),t._v("="),s("code",[t._v("40px")])])])}),[],!1,null,null,null);a.default=_.exports}}]);