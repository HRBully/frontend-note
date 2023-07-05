(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{672:function(t,s,a){"use strict";a.r(s);var n=a(17),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),a("p",[a("code",[t._v("Symbol")]),t._v("作为原始数据类型的一种，表示独一无二的值，在之前，对象的键以字符串的形式存在，所以极易引发键名冲突问题，而"),a("code",[t._v("Symbol")]),t._v("的出现解决了这个痛点")]),t._v(" "),a("h2",{attrs:{id:"基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),a("p",[t._v("创建一个"),a("code",[t._v("Symbol")]),t._v("实例，其创建一个"),a("code",[t._v("Symbol")]),t._v("与创建"),a("code",[t._v("Object")]),t._v("不同，当我们使用时需要注意："),a("strong",[t._v("不可以使用"),a("code",[t._v("new")]),t._v("来搭配"),a("code",[t._v("Symbol()")]),t._v("构造实例")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" a\n")])])]),a("p",[t._v("如果使用"),a("code",[t._v("new")]),t._v("来搭配"),a("code",[t._v("Symbol()")]),t._v("构造实例，就会抛出错误")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Symbol is not a constructor")]),t._v("\n")])])]),a("p",[t._v("那么如果我们想要得到一个"),a("code",[t._v("Symbol()")]),t._v("的对象形式，那么我们可以使用"),a("code",[t._v("Object()")]),t._v("函数")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// object")]),t._v("\n")])])]),a("p",[t._v("那么"),a("code",[t._v("Symbol")]),t._v("看起来都一样，我们怎么区分呢？我们需要传入一个字符串的参数用来描述"),a("code",[t._v("Symbol()")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("上面看来"),a("code",[t._v("a")]),t._v("和"),a("code",[t._v("b")]),t._v("的值都是"),a("code",[t._v("Symbol")]),t._v("，代码阅读上，两者没区分，那么我们调用"),a("code",[t._v("Symbol()")]),t._v("函数的时候传入字符串用来描述我们构建的"),a("code",[t._v("Symbol()")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"symbol的应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#symbol的应用"}},[t._v("#")]),t._v(" "),a("code",[t._v("Symbol")]),t._v("的应用")]),t._v(" "),a("h3",{attrs:{id:"作为对象的属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作为对象的属性"}},[t._v("#")]),t._v(" 作为对象的属性")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nobj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world"')]),t._v("\n")])])]),a("p",[t._v("我在上面创建了一个"),a("code",[t._v("symbol")]),t._v("作为键的对象，其步骤如下")]),t._v(" "),a("ol",[a("li",[t._v("创建一个"),a("code",[t._v("Symbol")])]),t._v(" "),a("li",[t._v("创建一个对象")]),t._v(" "),a("li",[t._v("通过"),a("code",[t._v("obj[]")]),t._v("将"),a("code",[t._v("Symbol")]),t._v("作为对象的键")])]),t._v(" "),a("p",[t._v("值得注意的是我们无法使用"),a("code",[t._v(".")]),t._v("来调用对象的"),a("code",[t._v("Symbol")]),t._v("属性，所以必须使用"),a("code",[t._v("[]")]),t._v("来访问"),a("code",[t._v("Symbol")]),t._v("属性")]),t._v(" "),a("h3",{attrs:{id:"降低代码耦合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#降低代码耦合"}},[t._v("#")]),t._v(" 降低代码耦合")]),t._v(" "),a("p",[t._v("我们经常会遇到这种代码")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"猪痞恶霸"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("又或者")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"猪痞恶霸"')]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ned"')]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在这两段段代码中作为判断控制语句的"),a("code",[t._v('"猪痞恶霸"')]),t._v("与"),a("code",[t._v('"Ned"')]),t._v("被称为魔术字符串，即"),a("strong",[t._v("与代码强耦合的字符串")]),t._v("，可以理解为：与我们的程序代码强制绑定在一起，然而这会导致一个问题，在条件判断复杂的情况下，我们想要更改我们的判断条件，就需要更改每一个判断控制，维护起来非常麻烦，所以我们可以换一种形式来解决字符串与代码强耦合。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" judge "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name_1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"猪痞恶霸"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name_2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ned"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" judge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name_1\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" judge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name_2\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("我们声明了一个存储判断条件字符串的对象，通过修改对象来自如地控制判断条件，当然本小节的主题是"),a("code",[t._v("Symbol")]),t._v("，所以还能继续优化！")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" judge "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("rectangle")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rectangle"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("triangle")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"triangle"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getArea")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" judge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rectangle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        \t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" judge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("triangle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        \t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" area "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getArea")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("judge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rectangle "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("area"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("为了更加直观地了解我们优化的过程，上面我创建了一个求面积的工具函数，利用"),a("code",[t._v("Symbol")]),t._v("的特性，我们使我们的条件判断更加精确，而如果是字符串形式，没有唯一的特点，可能会出现判断错误的情况。")]),t._v(" "),a("h3",{attrs:{id:"全局共享symbol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局共享symbol"}},[t._v("#")]),t._v(" 全局共享Symbol")]),t._v(" "),a("p",[t._v("如果我们想在不同的地方调用已经同一"),a("code",[t._v("Symbol")]),t._v("即全局共享的"),a("code",[t._v("Symbol")]),t._v("，可以通过"),a("code",[t._v("Symbol.for()")]),t._v("方法，参数为创建时传入的描述字符串，该方法可以遍历"),a("strong",[t._v("全局注册表")]),t._v("中的的"),a("code",[t._v("Symbol")]),t._v("，当搜索到相同描述，那么会调用这个"),a("code",[t._v("Symbol")]),t._v("，如果没有搜索到，就会创建一个新的"),a("code",[t._v("Symbol")]),t._v("。")]),t._v(" "),a("p",[t._v("为了更好地理解，请看下面例子")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("p",[t._v("如上创建"),a("code",[t._v("Symbol")])]),t._v(" "),a("ol",[a("li",[t._v("首先通过"),a("code",[t._v("Symbol.for()")]),t._v("在全局注册表中寻找描述为"),a("code",[t._v("a")]),t._v("的"),a("code",[t._v("Symbol")]),t._v("，而目前没有符合条件的"),a("code",[t._v("Symbol")]),t._v("，所以创建了一个描述为"),a("code",[t._v("a")]),t._v("的"),a("code",[t._v("Symbol")])]),t._v(" "),a("li",[t._v("当声明"),a("code",[t._v("b")]),t._v("并使用"),a("code",[t._v("Symbol.for()")]),t._v("在全局注册表中寻找描述为"),a("code",[t._v("a")]),t._v("的"),a("code",[t._v("Symbol")]),t._v("，找到并赋值")]),t._v(" "),a("li",[t._v("比较"),a("code",[t._v("a")]),t._v("与"),a("code",[t._v("b")]),t._v("结果为"),a("code",[t._v("true")]),t._v("反映了"),a("code",[t._v("Symbol.for()")]),t._v("的作用")])]),t._v(" "),a("p",[t._v("再来看看下面这段代码")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])]),a("p",[t._v("woc，结果竟然是"),a("code",[t._v("false")]),t._v("，与上面的区别仅仅在于第一个"),a("code",[t._v("Symbol")]),t._v("的创建方式，带着惊讶的表情，来一步一步分析一下为什么会出现这样的结果")]),t._v(" "),a("ol",[a("li",[t._v("使用"),a("code",[t._v('Symbol("a")')]),t._v("直接创建，所以该"),a("code",[t._v('Symbol("a")')]),t._v("不在全局注册表中")]),t._v(" "),a("li",[t._v("使用"),a("code",[t._v('Symbol.for("a")')]),t._v("在全局注册表中寻找描述为"),a("code",[t._v("a")]),t._v("的"),a("code",[t._v("Symbol")]),t._v("，并没有找到，所以在全局注册表中又创建了一个描述为"),a("code",[t._v("a")]),t._v("的新的"),a("code",[t._v("Symbol")])]),t._v(" "),a("li",[t._v("秉承"),a("code",[t._v("Symbol")]),t._v("创建的唯一特性，所以"),a("code",[t._v("a")]),t._v("与"),a("code",[t._v("b")]),t._v("创建的"),a("code",[t._v("Symbol")]),t._v("不同，结果为"),a("code",[t._v("false")])])]),t._v(" "),a("p",[t._v("问题又又又来了！我们如何去判断我们的"),a("code",[t._v("Symbol")]),t._v("是否在全局注册表中呢？")]),t._v(" "),a("p",[a("code",[t._v("Symbol.keyFor()")]),t._v("帮我们解决了这个问题，他可以通过变量名查询该变量名对应的"),a("code",[t._v("Symbol")]),t._v("是否在全局注册表中")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nSymbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("keyFor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\nSymbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("keyFor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'a'")]),t._v("\n")])])]),a("p",[t._v("如果查询存在即返回该"),a("code",[t._v("Symbol")]),t._v("的描述，如果不存在则返回"),a("code",[t._v("undefined")])]),t._v(" "),a("p",[t._v("以上通过使用"),a("code",[t._v("Symbol.for()")]),t._v("实现了"),a("code",[t._v("Symbol")]),t._v("全局共享，下面我们来看看"),a("code",[t._v("Symbol")]),t._v("的另一种应用")]),t._v(" "),a("h2",{attrs:{id:"内置symbol值又是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置symbol值又是什么"}},[t._v("#")]),t._v(" 内置"),a("code",[t._v("Symbol")]),t._v("值又是什么？！")]),t._v(" "),a("p",[t._v("上面的"),a("code",[t._v("Symbol")]),t._v("使用是我们自定义的，而JS有内置了"),a("code",[t._v("Symbol")]),t._v("值，个人的理解为：由于唯一性特点，在对象内，作为一个唯一性的键并对应着一个方法，在对象调用某方法的时候会调用这个"),a("code",[t._v("Symbol")]),t._v("值对应的方法，并且我们还可以通过更改内置"),a("code",[t._v("Symbol")]),t._v("值对应的方法来达到更改外部方法作用的效果。")]),t._v(" "),a("p",[t._v("为了更好地理解上面这一大段话，咱们以"),a("code",[t._v("Symbol.hasInstance")]),t._v("作为例子来看看内置"),a("code",[t._v("Symbol")]),t._v("到底是个啥！")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("demo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hasInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"猪痞恶霸"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"猪痞恶霸"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("demo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("p",[a("code",[t._v("Symbol.hasInstance")]),t._v("对应的外部方法是"),a("code",[t._v("instanceof")]),t._v("，这个大家熟悉吧，经常用于判断类型。而在上面的代码片段中我创建了一个"),a("code",[t._v("demo")]),t._v("类，并重写了"),a("code",[t._v("Symbol.hasInstance")]),t._v("，所以其对应的"),a("code",[t._v("instanceof")]),t._v("行为也会发生改变，其内部的机制是这样的：当我们调用"),a("code",[t._v("instanceof")]),t._v("方法的时候，内部对应调用"),a("code",[t._v("Symbol.hasInstance")]),t._v("对应的方法即"),a("code",[t._v('return item === "猪痞恶霸"')])])])}),[],!1,null,null,null);s.default=e.exports}}]);