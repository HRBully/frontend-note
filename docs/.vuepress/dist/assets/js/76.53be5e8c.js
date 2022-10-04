(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{692:function(t,s,a){"use strict";a.r(s);var n=a(17),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("愉快的周末，我在实验室里清点掘金礼品，当数到小黄鸭的时候，学长走了过来\n学长:你这是不是一种迭代鸭子的行为。\n我：emmm可能算是吧。\n学长：那你给我讲一讲在JS中的迭代吧")]),t._v(" "),a("blockquote",[a("p",[t._v("我先问大家一个问题：你认为迭代（遍历）是一种什么行为？带着问题开始我们的正题吧！")])]),t._v(" "),a("h2",{attrs:{id:"迭代的基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#迭代的基础"}},[t._v("#")]),t._v(" 迭代的基础")]),t._v(" "),a("p",[t._v("举一个经典且刻在印象中的迭代例子：对数组的元素"),a("strong",[t._v("按序访问")]),t._v("，当遍历次数到达数组长度时"),a("strong",[t._v("停止迭代")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("上面我标注了"),a("strong",[t._v("按序访问")]),t._v("与"),a("strong",[t._v("停止迭代")]),t._v("，思考一下，得出迭代必须满足如下两点")]),t._v(" "),a("ol",[a("li",[t._v("有某种固有的顺序，可以安某种顺序"),a("strong",[t._v("开始或者停止")]),t._v("迭代。例如：在数组中顺序对应着下标，遍历次数到达数组长度则停止")]),t._v(" "),a("li",[t._v("了解如何访问迭代目标的元素。例如：在数组中可以通过下标访问对应的元素")])]),t._v(" "),a("p",[t._v("这里提一下使用"),a("code",[t._v("for")]),t._v("循环进行迭代")]),t._v(" "),a("h2",{attrs:{id:"迭代的升华"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#迭代的升华"}},[t._v("#")]),t._v(" 迭代的升华")]),t._v(" "),a("p",[t._v("好，上面我们已经掌握迭代的条件，那么将其带入"),a("code",[t._v("Javascript")]),t._v("中，分析一下其他可迭代的数据结构的迭代机制是怎么样的。")]),t._v(" "),a("h3",{attrs:{id:"可迭代的数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可迭代的数据结构"}},[t._v("#")]),t._v(" 可迭代的数据结构")]),t._v(" "),a("p",[t._v("我们使用"),a("code",[t._v("for of")]),t._v("来对"),a("code",[t._v("JS")]),t._v("中常见的数据结构进行迭代，来看看其结果是怎么样的")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"猪痞恶霸"')]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 猪 痞 恶 霸")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"猪痞恶霸"')]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// obj is not iterable")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ['猪痞恶霸', 1]")]),t._v("\nm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这里看到只有"),a("code",[t._v("obj")]),t._v("抛出了错误："),a("code",[t._v("obj is not iterable")]),t._v("，翻译为"),a("code",[t._v("obj")]),t._v("不是"),a("strong",[t._v("可迭代对象")]),t._v("，那么就是可以理解为，"),a("code",[t._v("map")]),t._v("，"),a("code",[t._v("set")]),t._v("，"),a("code",[t._v("arr")]),t._v("等都是"),a("strong",[t._v("可迭代对象")]),t._v("，这里可能有人想到那"),a("code",[t._v("obj")]),t._v("对象类型可以使用"),a("code",[t._v("for in")]),t._v("进行迭代，为什么不可以叫做"),a("strong",[t._v("可迭代对象")]),t._v("呢？其是因为内部的实现机制与其他数据结果的迭代不同，这点我们放在最后再聊。")]),t._v(" "),a("p",[t._v("上面这段话我标注了"),a("strong",[t._v("可迭代对象")]),t._v("这一概念，而可迭代对象是什么呢？指的是"),a("code",[t._v("map")]),t._v("，"),a("code",[t._v("set")]),t._v("，"),a("code",[t._v("str")]),t._v("这些数据结果吗？其实不然，官方文档针对"),a("strong",[t._v("可迭代对象")]),t._v("给出了明确的要求：")]),t._v(" "),a("ol",[a("li",[t._v("实现正式的"),a("code",[t._v("interable")]),t._v("接口")]),t._v(" "),a("li",[t._v("可以通过"),a("code",[t._v("interator")]),t._v("迭代器消费")])]),t._v(" "),a("p",[t._v("这是啥啊，看不明白，那么我们下面来深入解析这两点要求。")]),t._v(" "),a("h3",{attrs:{id:"interable接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interable接口"}},[t._v("#")]),t._v(" "),a("code",[t._v("interable")]),t._v("接口")]),t._v(" "),a("p",[a("code",[t._v("interable")]),a("strong",[t._v("接口")]),t._v("又称"),a("strong",[t._v("可迭代协议")]),t._v("是一个比较抽象的东西，我将它理解为数据结构迭代操作的入口，不同的数据结构通过该接口可以实现相同的操作，而在"),a("code",[t._v("javascript")]),t._v("中正是利用"),a("code",[t._v("Symbol.iterator")]),t._v("来作为这个接口，如果不了解"),a("code",[t._v("Symbol")]),t._v("的掘友可以看一下这篇文章："),a("a",{attrs:{href:"https://juejin.cn/post/7143252808257503240",target:"_blank",rel:"noopener noreferrer"}},[t._v("学长突然问我用过Symbol吗，我哽咽住了（准备挨骂）"),a("OutboundLink")],1),t._v("比较细致地说明了"),a("code",[t._v("Symbol")]),t._v("的一些应用。")]),t._v(" "),a("p",[t._v("如果你了解"),a("code",[t._v("Symbol")]),t._v("那么肯定知道"),a("strong",[t._v("内置"),a("code",[t._v("Symbol")]),t._v("值")]),t._v("是什么，"),a("code",[t._v("Symbol.iterator")]),t._v("正是一种"),a("strong",[t._v("内置"),a("code",[t._v("Symbol")]),t._v("值")]),t._v("，它对应的外部操作即是"),a("code",[t._v("for of")]),t._v("，当外部使用"),a("code",[t._v("for of")]),t._v("方法时，内部就会启用以"),a("code",[t._v("Symbol.iterator")]),t._v("为键的方法，下面我们通过代码来分析内部的构造")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iterator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  values() { [native code] }")]),t._v("\n")])])]),a("p",[a("code",[t._v("values() { [native code] }")]),t._v("正是"),a("code",[t._v("Symbol.iterator")]),t._v("对应的函数，而只有相关类型内置了"),a("code",[t._v("Symbol.iterator")]),t._v("才会打印出来")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iterator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n")])])]),a("p",[t._v("如上例子"),a("code",[t._v("obj[Symbol.iterator]")]),t._v("为"),a("code",[t._v("undefined")]),t._v("，这也是为什么说"),a("code",[t._v("obj")]),t._v("无法进行"),a("code",[t._v("for of")]),t._v("进行迭代，因为其没有内置"),a("code",[t._v("Symbol.iterator")]),t._v("即可迭代协议")]),t._v(" "),a("h3",{attrs:{id:"继承interable接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#继承interable接口"}},[t._v("#")]),t._v(" 继承"),a("code",[t._v("interable")]),t._v("接口")]),t._v(" "),a("p",[a("code",[t._v("interable")]),t._v("接口是可以被继承的，也就是说当父类实现了"),a("code",[t._v("interable")]),t._v("接口，那么子类也会实现")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Son")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" son "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Son")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("son"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iterator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [Symbol.iterator]() { [native code] }")]),t._v("\n")])])]),a("p",[t._v("我们通过上面的代码可以看到"),a("code",[t._v("Son")]),t._v("继承"),a("code",[t._v("String")]),t._v("类，所以内部也实现了"),a("code",[t._v("interable")]),t._v("接口")]),t._v(" "),a("p",[t._v("非常好，我们通过上面的两点已经了解了"),a("strong",[t._v("可迭代对象")]),t._v("的第一个要求：实现正式的"),a("code",[t._v("interable")]),t._v("接口，那么我们来看看**"),a("code",[t._v("interator")]),t._v("迭代器**又是什么")]),t._v(" "),a("h3",{attrs:{id:"interator迭代器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interator迭代器"}},[t._v("#")]),t._v(" "),a("code",[t._v("interator")]),t._v("迭代器")]),t._v(" "),a("p",[a("code",[t._v("interator")]),t._v("迭代器本质上是"),a("strong",[t._v("对象")]),t._v("，由"),a("code",[t._v("interable")]),t._v("接口对应的函数执行生成")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iterator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Array Iterator {}            ")]),t._v("\n")])])]),a("p",[t._v("上面我们调用了"),a("code",[t._v("arr[Symbol.iterator]()")]),t._v("方法获得了一个"),a("code",[t._v("Array Iterator {}")]),t._v("对象，也就是迭代器，其实这种方法是手动调用的，真正迭代的时候内部操作。")]),t._v(" "),a("p",[t._v("那"),a("code",[t._v("interator")]),t._v("迭代器是怎么做到迭代数据结构的呢？他的核心就是使用"),a("code",[t._v("next()")]),t._v("，下面我们手动迭代一个字符串")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"猪痞恶霸"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" strInter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iterator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nstrInter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {value: '猪', done: false}")]),t._v("\nstrInter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {value: '痞', done: false}")]),t._v("\n")])])]),a("p",[t._v("手动迭代的过程是这样的")]),t._v(" "),a("ol",[a("li",[t._v("通过"),a("code",[t._v("str[Symbol.iterator]()")]),t._v("返回拿到"),a("strong",[t._v("迭代器")])]),t._v(" "),a("li",[t._v("调用迭代器对象的"),a("code",[t._v("next()")]),t._v("方法")]),t._v(" "),a("li",[t._v("返回一个"),a("strong",[t._v("IteratorResult 对象")]),t._v("比如"),a("code",[t._v("{value: '猪', done: false}")])]),t._v(" "),a("li",[t._v("该对象内包含了两种属性对应着不同的作用")]),t._v(" "),a("li",[a("code",[t._v("value")]),t._v("代表当前迭代的内容，"),a("code",[t._v("done")]),t._v("标记是否可以进行下一次"),a("code",[t._v("next()")])]),t._v(" "),a("li",[t._v("若"),a("code",[t._v("done")]),t._v("为"),a("code",[t._v("true")]),t._v("则不会进行下一次迭代，说明迭代终止")])]),t._v(" "),a("p",[t._v("迭代内部的机制我们已经学习完毕，下面开始练习时间，先看看常用的迭代的实战场景")]),t._v(" "),a("h2",{attrs:{id:"迭代的实战"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#迭代的实战"}},[t._v("#")]),t._v(" 迭代的实战")]),t._v(" "),a("p",[t._v("我们知道很多迭代的操作，比如最经典的"),a("code",[t._v("for")]),t._v("，还有"),a("code",[t._v("forEach")]),t._v("，"),a("code",[t._v("for of")]),t._v("，"),a("code",[t._v("for in")]),t._v("等等，那么同样是迭代，我们该如何选择正确的迭代方式呢？下面来一一分析")]),t._v(" "),a("h3",{attrs:{id:"foreach场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#foreach场景"}},[t._v("#")]),t._v(" "),a("code",[t._v("forEach")]),t._v("场景")]),t._v(" "),a("p",[a("code",[t._v("forEach")]),t._v("方法常见的可以遍历对象有"),a("code",[t._v("Set")]),t._v("，"),a("code",[t._v("Map")]),t._v("，"),a("code",[t._v("array")]),t._v("，"),a("code",[t._v("NodeList")]),t._v("，它会迭代每个数据结构知道终止，因为无法在内部使用"),a("code",[t._v("return")]),t._v("或者是"),a("code",[t._v("break")]),t._v("所以无法终止迭代，所以说如果我们的迭代无需终止，就可以使用"),a("code",[t._v("forEach")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"猪痞恶霸"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ned"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\narr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("比如使用"),a("code",[t._v("forEach")]),t._v("来对数组元素进行批量处理")]),t._v(" "),a("h3",{attrs:{id:"for-of场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-of场景"}},[t._v("#")]),t._v(" "),a("code",[t._v("for of")]),t._v("场景")]),t._v(" "),a("p",[t._v("上面提到了"),a("code",[t._v("forEach")]),t._v("的迭代是无法终止的，所以当我们想终止迭代，那么我们就可以使用"),a("code",[t._v("for of")]),t._v("，比如在当元素满足某个条件的时候终止迭代")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1,3,10")]),t._v("\n")])])]),a("p",[t._v("如上，当元素是偶数的时候那么就停止迭代，相对于"),a("code",[t._v("forEach")]),t._v("来看"),a("code",[t._v("for of")]),t._v("有个缺陷就是无法获取当前元素对应的索引，而"),a("code",[t._v("forEach")]),t._v("可以，所以我们需要选择不同的迭代操作来适应当前的需求。")]),t._v(" "),a("h3",{attrs:{id:"for-in场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-in场景"}},[t._v("#")]),t._v(" "),a("code",[t._v("for in")]),t._v("场景")]),t._v(" "),a("p",[t._v("由于"),a("code",[t._v("Object")]),t._v("没有内置迭代器，所以"),a("code",[t._v("for of")]),t._v("无法对其进行迭代，我们可以使用"),a("code",[t._v("for in")]),t._v("方法来迭代对象，其返回的是属性的键名")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ned"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("like")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"man"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// name like")]),t._v("\n")])])]),a("p",[t._v("当然如果你想要针对对象进行一些特性地迭代，比如迭代"),a("code",[t._v("Symbol")]),t._v("属性，那么可以参考一下这篇文章："),a("a",{attrs:{href:"https://juejin.cn/post/7129374520015585317",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS遍历对象的七种方法 "),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Very Good！！！通过上面的三种迭代场景，我们学到了可以根据不同类型的迭代对象，参数需要，以及性能相关来判断使用哪种迭代操作，那么下面我给大家带来点花的："),a("strong",[t._v("手撕迭代")])]),t._v(" "),a("h2",{attrs:{id:"手撕迭代"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手撕迭代"}},[t._v("#")]),t._v(" 手撕迭代")]),t._v(" "),a("p",[t._v("来源："),a("strong",[t._v("JS高程4")]),t._v("，下面我会根据这个手撕来给大家分析，帮助大家进一步透彻迭代")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Counter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("limit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("limit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" limit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iterator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      limit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("limit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" limit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("done")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("done")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" counter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Counter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" counter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])]),a("p",[t._v("这是一个实现迭代的类"),a("code",[t._v("Counter")]),t._v("，内部有构造函数与迭代器接口"),a("code",[t._v("Symbol.iterator")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("创建实例的时候传入"),a("code",[t._v("limit")]),t._v("给予实例长度，其实这里可以理解为我们在初始化数组的时候给与数组长度")])]),t._v(" "),a("li",[a("p",[t._v("进行"),a("code",[t._v("for of")]),t._v("操作的时候对应内部"),a("code",[t._v("Symbol.iterator")]),t._v("方法并调用，返回一个"),a("strong",[t._v("迭代器")]),t._v("对象，该对象包含一个"),a("code",[t._v("next")]),t._v("方法")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 内部机制")]),t._v("\ncounter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iterator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\t{next: ƒ}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("调用"),a("code",[t._v("next")]),t._v("方法，返回"),a("code",[t._v("{ done: false, value: count++ }")]),t._v("格式数据，每次调用为"),a("code",[t._v("count")]),t._v("和"),a("code",[t._v("limit")]),t._v("做判断，如果超过范围，那么将返回的对象的"),a("code",[t._v("done")]),t._v("属性标记为"),a("code",[t._v("false")]),t._v("说明迭代完毕")])])]),t._v(" "),a("h2",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])])])}),[],!1,null,null,null);s.default=e.exports}}]);