(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{732:function(t,s,a){"use strict";a.r(s);var n=a(17),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"指令基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令基础"}},[t._v("#")]),t._v(" 指令基础")]),t._v(" "),a("h3",{attrs:{id:"关于指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于指令"}},[t._v("#")]),t._v(" 关于指令")]),t._v(" "),a("p",[t._v("在我们日常使用的指令内，我们有"),a("code",[t._v("v-bind")]),t._v("，"),a("code",[t._v("v-show")]),t._v("，"),a("code",[t._v("v-for")]),t._v("等等，他们都是内置指令，相信你已经体验到了这些指令的作用，而官方也允许我们封装自定义指令，本文将从封装指令的基础展开，带大家实战两个自定义指令的案例，掌握自定义指令。")]),t._v(" "),a("h3",{attrs:{id:"指令的钩子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令的钩子"}},[t._v("#")]),t._v(" 指令的钩子")]),t._v(" "),a("p",[a("code",[t._v("Vue2.x")]),t._v("与"),a("code",[t._v("Vue3.x")]),t._v("的指令钩子是不一样的，所以在大家封装的时候要注意"),a("code",[t._v("Vue")]),t._v("的版本，我们可以通过指令的钩子在合适的时机做一些操作，比如我们可以在表单元素插入DOM之后给到一个聚焦的操作，优化了用户输入表单的体验感，关于钩子的具体细节大家可以看看官方文档")]),t._v(" "),a("ul",[a("li",[t._v("Vue2.x的钩子："),a("a",{attrs:{href:"https://v2.cn.vuejs.org/v2/guide/custom-directive.html#%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue2指令钩子"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Vue3.x的钩子："),a("a",{attrs:{href:"https://cn.vuejs.org/guide/reusability/custom-directives.html#directive-hooks",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue3指令钩子"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("我比较常用的还是"),a("code",[t._v("inserted")]),t._v("或者"),a("code",[t._v("beforeMount")]),t._v("，这个时候元素还没有插入到DOM中。")]),t._v(" "),a("h3",{attrs:{id:"指令的参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令的参数"}},[t._v("#")]),t._v(" 指令的参数")]),t._v(" "),a("p",[t._v("对于指令绑定的元素肯定需要传入一些参数供我们操作，比如提供元素，我们可以进行dom操作，以及我们使用指令传递来的值，在本文开启正式封装之前一定要看看这些参数的作用，"),a("code",[t._v("Vue3.x")]),t._v("的"),a("a",{attrs:{href:"https://cn.vuejs.org/guide/reusability/custom-directives.html#directive-hooks",target:"_blank",rel:"noopener noreferrer"}},[t._v("指令参数"),a("OutboundLink")],1),t._v("，"),a("code",[t._v("Vue3.x")]),t._v("相对于"),a("code",[t._v("Vue2.x")]),t._v("多出了组件实例对象和指令的定义对象，能更好地扩展我们的封装，比较常用的是")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("el")]),t._v("：我们可以通过这个参数来操作指令所绑定的"),a("code",[t._v("DOM")]),t._v("元素，这也是自定义指令的主要目的所在，我们可以做聚焦，显示，隐藏等等操作")]),t._v(" "),a("li",[a("code",[t._v("binding")]),t._v("："),a("code",[t._v("binding")]),t._v("参数包括了指令在"),a("code",[t._v("DOM")]),t._v("元素上所绑定的值，以及参数，比如"),a("code",[t._v("v-has:fn")]),t._v("，"),a("code",[t._v("fn")]),t._v("就是指令所选的参数，我们可以根据这些参数来进行更加扩展的操作")])]),t._v(" "),a("p",[t._v("下面我们开启正题，先以自定义权限指令为例子，来教大家封装一个自定义指令。（本文以"),a("code",[t._v("Vue2.x")]),t._v("举例）")]),t._v(" "),a("h2",{attrs:{id:"自定义一个权限指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义一个权限指令"}},[t._v("#")]),t._v(" 自定义一个权限指令")]),t._v(" "),a("p",[t._v("我们下面要自定义一个权限指令，那么这个权限的定义是，根据我们所登录账户所拥有的权限，来将他所有权限不可以使用的操作元素移除，防止跨越权限操作，有思路了吧，下面一起看看具体如何实现吧")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hasPermi "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("directive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hasPermi'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("inserted")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" binding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" permissions "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hasPermission'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" isPermi "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        permissions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("some")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("permiItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" permiStr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" permiItem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            binding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("permiStr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    isPermi "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("isPermi "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("使用"),a("code",[t._v("Vue.directive")]),t._v("方法注册指令，第一个参数为注册的指令名，在使用指令的时候"),a("code",[t._v("v-")]),t._v("+注册名，第二个参数为指令定义对象，包括在各个指令钩子中操作")]),t._v(" "),a("li",[t._v("这里做的权限操作需要在被绑定元素加载前根据权限判断是否隐藏，所以我们选择在"),a("code",[t._v("inserted")]),t._v("钩子中进行判断")]),t._v(" "),a("li",[t._v("一般我们可以在"),a("code",[t._v("localStorage")]),t._v("或者"),a("code",[t._v("Vuex")]),t._v("存储指令集，这里使用"),a("code",[t._v("localStorage")]),t._v("存储，拿到"),a("code",[t._v("permissions")]),t._v("，这个集合为"),a("strong",[t._v("当前所登录账号的权限集合")])]),t._v(" "),a("li",[t._v("声明一个权限判别"),a("code",[t._v("isPermi")]),t._v("变量")]),t._v(" "),a("li",[t._v("遍历当前权限集合与指令绑定的元素所需要的权限集合，进行比较")]),t._v(" "),a("li",[t._v("最后根据"),a("code",[t._v("isPermi")]),t._v("进行元素的移除")])]),t._v(" "),a("h2",{attrs:{id:"在工程中自定义指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在工程中自定义指令"}},[t._v("#")]),t._v(" 在工程中自定义指令")]),t._v(" "),a("p",[t._v("下面以自定义聚焦指令为例子，在工程中如何封装自定义指令")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// focus.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("inserted")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 聚焦元素")]),t._v("\n     el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("focus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// index.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" focus "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./focus.js'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("directive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'focus'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" focus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.js")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("我们可以将每个指令中内含的钩子函数操作暴露出去，如"),a("code",[t._v("focus.js")])]),t._v(" "),a("li",[t._v("再在当前指令目录下"),a("code",[t._v("index.js")]),t._v("中声明指令注册函数"),a("code",[t._v("install")])]),t._v(" "),a("li",[t._v("再在"),a("code",[t._v("main.js")]),t._v("中注册全局")])])])}),[],!1,null,null,null);s.default=e.exports}}]);