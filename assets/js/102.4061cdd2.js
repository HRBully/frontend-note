(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{711:function(t,a,s){"use strict";s.r(a);var e=s(17),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[t._v("#")]),t._v(" 编译")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("tsc app.js\n")])])]),s("h2",{attrs:{id:"自动编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动编译"}},[t._v("#")]),t._v(" 自动编译")]),t._v(" "),s("p",[t._v("在编译命令后添加一个w，监视文件变化")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("tsc app.js -w\n")])])]),s("h2",{attrs:{id:"ts编译配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ts编译配置文件"}},[t._v("#")]),t._v(" TS编译配置文件")]),t._v(" "),s("p",[t._v("在目标文件夹下新建一个"),s("code",[t._v("tsconfig.json")]),t._v("文件，该文件是ts编译器的配置文件，编译器可以根据这个文件信息来对代码进行编译")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("{}\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("tsc -w\n")])])]),s("p",[t._v("这样的话我们就可以监视目标文件夹下的所有文件")]),t._v(" "),s("h3",{attrs:{id:"配置选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置选项"}},[t._v("#")]),t._v(" 配置选项")]),t._v(" "),s("h4",{attrs:{id:"include"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#include"}},[t._v("#")]),t._v(" include")]),t._v(" "),s("p",[t._v("包含，用来指定哪些ts文件需要被编译比如"),s("code",[t._v('"./ts/**/*"')]),t._v("表示的是ts文件目录下任意的目录中任意的文件可以被编译")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n\t"include":[\n\t\t"./01.ts"\n\t]\n}\n')])])]),s("h4",{attrs:{id:"exclude"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exclude"}},[t._v("#")]),t._v(" exclude")]),t._v(" "),s("p",[t._v("不包含，用来指定不需要被编译的文件譬如node模块")]),t._v(" "),s("h3",{attrs:{id:"编译器选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译器选项"}},[t._v("#")]),t._v(" 编译器选项")]),t._v(" "),s("p",[s("code",[t._v("compilerOptions")]),t._v("编译器选项，决定编译器对ts的编译效果，其包含子选项来选择编译效果")]),t._v(" "),s("h4",{attrs:{id:"target"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#target"}},[t._v("#")]),t._v(" target")]),t._v(" "),s("p",[t._v("目标，用于指定被编译的es版本")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n\t"compilerOptions":{\n\t\t"target":"ES6"\n\t} \n}\n')])])]),s("h4",{attrs:{id:"module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#module"}},[t._v("#")]),t._v(" module")]),t._v(" "),s("p",[t._v("模块化标准")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\n")])])]),s("h4",{attrs:{id:"lib"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lib"}},[t._v("#")]),t._v(" lib")]),t._v(" "),s("p",[t._v("指定项目中使用的库")]),t._v(" "),s("h4",{attrs:{id:"outdir"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outdir"}},[t._v("#")]),t._v(" outDir")]),t._v(" "),s("p",[t._v("用来指定编译后文件所在目录")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n\t"compilerOptions":{\n\t\t"target":"ES6",\n\t\t"module":"commonjs",\n\t\t"outDir":"./dist"\n\t} \n}\n')])])]),s("h4",{attrs:{id:"outfile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outfile"}},[t._v("#")]),t._v(" outFile")]),t._v(" "),s("p",[t._v("将代码合并为一个文件，全局作用域中的代码都会合并到同一个文件中。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n\t"compilerOptions":{\n\t\t"target":"ES6",\n\t\t"module":"amd",\n\t\t"outDir":"./dist",\n\t\t"outFile":"./dist/app.js"\n\t} \n}\n')])])]),s("h4",{attrs:{id:"allowjs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#allowjs"}},[t._v("#")]),t._v(" allowJs")]),t._v(" "),s("p",[t._v("是否对js文件进行编译，默认为false即不编译")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n\t"compilerOptions":{\n\t\t"target":"ES6",\n\t\t"module":"amd",\n\t\t"outDir":"./dist",\n\t\t"outFile":"./dist/app.js",\n\t\t"allowJs":false\n\t} \n}\n')])])]),s("h4",{attrs:{id:"checkjs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#checkjs"}},[t._v("#")]),t._v(" checkJs")]),t._v(" "),s("p",[t._v("是否检测js文件语法（以ts规范检测）")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n\t"compilerOptions":{\n\t\t"target":"ES6",\n\t\t"module":"amd",\n\t\t"outDir":"./dist",\n\t\t"outFile":"./dist/app.js",\n\t\t"allowJs":false,\n\t\t"checkJs":false\n\t} \n}\n')])])]),s("h4",{attrs:{id:"removecomments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#removecomments"}},[t._v("#")]),t._v(" removeComments")]),t._v(" "),s("p",[t._v("是否移除注释")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n\t"compilerOptions":{\n\t\t"target":"ES6",\n\t\t"module":"amd",\n\t\t"outDir":"./dist",\n\t\t"outFile":"./dist/app.js",\n\t\t"allowJs":false,\n\t\t"checkJs":false,\n\t\t"removeComments":true\n\t} \n}\n')])])]),s("h4",{attrs:{id:"noemit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#noemit"}},[t._v("#")]),t._v(" noEmit")]),t._v(" "),s("p",[t._v("不生成编译后的文件，执行编译的步骤但是不生成编译后产生的js文件")]),t._v(" "),s("h4",{attrs:{id:"noemitonerror"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#noemitonerror"}},[t._v("#")]),t._v(" noEmitOnError")]),t._v(" "),s("p",[t._v("当代码有错误的时候不生成编译后的文件")]),t._v(" "),s("h4",{attrs:{id:"alwaysstrict"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alwaysstrict"}},[t._v("#")]),t._v(" alwaysStrict")]),t._v(" "),s("p",[t._v("设置编译后文件是否使用严格模式")]),t._v(" "),s("h4",{attrs:{id:"noimplicitany"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#noimplicitany"}},[t._v("#")]),t._v(" noImplicitAny")]),t._v(" "),s("p",[t._v("是否开启检查隐式any变量")]),t._v(" "),s("h4",{attrs:{id:"noimplicitthis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#noimplicitthis"}},[t._v("#")]),t._v(" noImplicitThis")]),t._v(" "),s("p",[t._v("不允许不明确类型的this")]),t._v(" "),s("h4",{attrs:{id:"strictnullchecks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#strictnullchecks"}},[t._v("#")]),t._v(" strictNullChecks")]),t._v(" "),s("p",[t._v("严格检查空值")]),t._v(" "),s("h4",{attrs:{id:"strict"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#strict"}},[t._v("#")]),t._v(" strict")]),t._v(" "),s("p",[t._v("可以开启所以严格选项模式")])])}),[],!1,null,null,null);a.default=r.exports}}]);