(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{761:function(t,s,a){"use strict";a.r(s);var e=a(17),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"冰封的美人-冻结js对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#冰封的美人-冻结js对象"}},[t._v("#")]),t._v(" 冰封的美人——冻结JS对象")]),t._v(" "),a("p",[t._v("看到这个标题你可能会很奇怪冻结JS对象，啊！又触碰到我的知识盲区了，那么首先来了解一下JS对象")]),t._v(" "),a("h3",{attrs:{id:"js对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js对象"}},[t._v("#")]),t._v(" JS对象")]),t._v(" "),a("p",[t._v("js对象是普通对象，键值对方式，且其属性不加引号，表示方法如下，对象内有对象属性，对象方法和普通的对象概念相同")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cxy"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"18"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("而我们修改对象的属性，仅仅需要"),a("code",[t._v('obj.name = "juejin"')]),t._v("即可"),a("code",[t._v("console.log(obj.name)")]),t._v("打印出来即可看到修改效果，那么冻结又是什么意思呢？我们来学习一下"),a("code",[t._v("Object.freeze()")])]),t._v(" "),a("h3",{attrs:{id:"object-freeze"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-freeze"}},[t._v("#")]),t._v(" Object.freeze")]),t._v(" "),a("p",[t._v("翻译下freeze的意思，由此得知"),a("code",[t._v("freeze()")]),t._v("是用来冻结对象的方法，我们只需要将我们要冻结的目标对象作为参数传递给他，那么该对象就会被冻结")]),t._v(" "),a("p",[a("img",{attrs:{src:"C:%5CUsers%5Chogskin%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220211151528816.png",alt:"image-20220211151528816"}})]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" iceObj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("freeze")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("这样"),a("code",[t._v("iceObj")]),t._v("就是被冻结的对象，那么冻结又是什么概念呢？我们修改一下对象的"),a("code",[t._v("age")]),t._v("属性"),a("code",[t._v('iceObj.age = "19"')]),t._v("，然后再打印一下"),a("code",[t._v("console.log(iceObj.age)")]),t._v("我们会发现，omygod，依旧是18，不愧是永远十八岁的冰封美人，除此之外还有一个检验对象冻结的方法即"),a("code",[t._v("Object.isFrozen")]),t._v("，返回值为布尔值")]),t._v(" "),a("h3",{attrs:{id:"不可冻结的对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不可冻结的对象"}},[t._v("#")]),t._v(" 不可冻结的对象")]),t._v(" "),a("p",[t._v("又有新的问题了，难不成所有的对象都可以被冻结吗？nonono，"),a("code",[t._v("Object.freeze()")]),t._v("不可冻结嵌套对象，依旧是那个对象，但是有一个son属性本身又是一个对象")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cxy"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"18"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("son")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"son"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("我们来修改并打印一下son中的name属性，会发现其属性值是修改后的值，所以说"),a("code",[t._v("Object.freeze()")]),t._v("并不是所有对象都能冻住的，当然其"),a("code",[t._v("object.freeze()")]),t._v("还可以冻结数组，大家可以定义一个数组，冻结之后，使用下标修改看看效果如何，除此之外还有一共冻结方法即"),a("code",[t._v("object.seal()")]),t._v("它和"),a("code",[t._v("object.freeze()")]),t._v("有差别，我们来看一下")]),t._v(" "),a("h3",{attrs:{id:"object-seal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-seal"}},[t._v("#")]),t._v(" Object.seal")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cxy"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"18"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" iceObj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("seal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\niceObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"juejin"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" iceObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iceObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("依旧是那个对象，我们先使用"),a("code",[t._v("object.seal()")]),t._v("冻结再执行修改name属性，删除age属性的操作，最后打印我们会发现name属性成功被修改，但是age属性没有被删除，这就是和"),a("code",[t._v("freeze()")]),t._v("不一样的地方，即可以修改属性值，但是不可以删除属性值，当然同样它还有一个检验对象冻结的方法即"),a("code",[t._v("Object.isSealed")]),t._v("，返回值为布尔值，最后还有一种冻结的方法即"),a("code",[t._v("Object.preventExtensions()")])]),t._v(" "),a("h3",{attrs:{id:"object-preventextensions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-preventextensions"}},[t._v("#")]),t._v(" Object.preventExtensions")]),t._v(" "),a("p",[a("code",[t._v("Object.preventExtensions")]),t._v("是冻结对象增加属性的能力")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cxy"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"18"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" iceObj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("preventExtensions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\niceObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("weight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"180"')]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iceObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("上述代码是为obj新增weight属性，但是打印出来后并没有出现该属性，说明对象添加属性方法被冻结了。")])])}),[],!1,null,null,null);s.default=r.exports}}]);