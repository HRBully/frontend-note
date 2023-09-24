(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{782:function(e,a,s){"use strict";s.r(a);var t=s(17),v=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("当一位前端切图仔进入一家新公司后，拿到代码所必须要做的那就是进行紧张刺激的"),s("code",[e._v("npm install")]),e._v("了，能不能一次就把"),s("code",[e._v("package.json")]),e._v("中的依赖毫无报错的下载那就是撞了大运气，而如果遇到"),s("strong",[e._v("error")]),e._v("，我们就需要顺腾摸瓜了，而一些常见的error，比如说，node的版本问题，又或者是镜像源等等问题。本文将介绍一些实用的"),s("code",[e._v("npm")]),e._v("相关的工具来帮助大家快速完成项目"),s("code",[e._v("install")]),e._v("！！！")]),e._v(" "),s("h2",{attrs:{id:"自如切换node版本-看我nvm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自如切换node版本-看我nvm"}},[e._v("#")]),e._v(" 自如切换node版本，看我nvm")]),e._v(" "),s("p",[s("code",[e._v("nvm")]),e._v("是一款可以切换"),s("code",[e._v("node")]),e._v("版本的工具，在接手新项目的时候，不可避免会遇到一些版本问题，所以我们需要切换我们当前的node版本，但是来回地安装卸载node显得我们效率很低，这个时候使用node的版本管理工具就很有必要。")]),e._v(" "),s("h3",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),s("p",[e._v("安装地址："),s("a",{attrs:{href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Releases · coreybutler/nvm-windows (github.com)"),s("OutboundLink")],1),e._v("，往下翻一翻，下载可执行文件并运行")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/HRBully/Img/main/image-20230203210758860.png",alt:"image-20230203210758860"}})]),e._v(" "),s("p",[e._v("下面选择"),s("code",[e._v("nvm")]),e._v("安装路径和"),s("code",[e._v("node")]),e._v("的存放路径就好了，完成安装！✌️")]),e._v(" "),s("h3",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/HRBully/Img/main/image-20230203212156778.png",alt:"image-20230203212156778"}})]),e._v(" "),s("p",[e._v("掌握三个指令就能自如地切换node版本")]),e._v(" "),s("p",[e._v("查看当前已安装的node版本号")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("nvm ls\n")])])]),s("p",[e._v("切换到某个版本的node，比如我要切换版本到11.9.0")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("nvm use "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("11.9")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v(".0")]),e._v("\n")])])]),s("p",[e._v("下载某个版本的node，比如我要下载16.12.0版本")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("nvm install "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("16.12")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v(".0")]),e._v("\n")])])]),s("p",[e._v("天下武功，唯快不破，掌握nvm，如此简单😏")]),e._v(" "),s("h2",{attrs:{id:"快速卸载node-modules-继续下一步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速卸载node-modules-继续下一步"}},[e._v("#")]),e._v(" 快速卸载"),s("code",[e._v("node_modules")]),e._v("，继续下一步")]),e._v(" "),s("p",[e._v("在每次"),s("code",[e._v("install")]),e._v("后抛出"),s("code",[e._v("error")]),e._v("，我们准备进行下一次"),s("code",[e._v("install")]),e._v("，那么我们就需要删除残留的"),s("code",[e._v("node_modules")]),e._v("，而正常的删除我们需要删除半天，所以我们需要一些工具来帮助我们快速删除它")]),e._v(" "),s("ul",[s("li",[e._v("经典的"),s("code",[e._v("rm -rf ./node_modules")]),e._v("，不过需要在当前目录下进入"),s("code",[e._v("powershell")]),e._v("或者是"),s("code",[e._v("git bash")]),e._v("命令行中执行")]),e._v(" "),s("li",[e._v("使用"),s("code",[e._v("rimraf")]),e._v("，我们需要先全局安装"),s("code",[e._v("npm install rimraf -g")]),e._v("，之后在对应目录下执行"),s("code",[e._v("rimraf node_modules")])])]),e._v(" "),s("h2",{attrs:{id:"快速切换npm镜像源-用nrm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速切换npm镜像源-用nrm"}},[e._v("#")]),e._v(" 快速切换"),s("code",[e._v("npm")]),e._v("镜像源，用"),s("code",[e._v("nrm")])]),e._v(" "),s("p",[e._v("在下载资源的时候太慢，或者出现了卡死的情况下，我们就需要切换镜像源来帮助我们快速地去下载，而手动去更改镜像源，切换一个镜像源就要"),s("code",[e._v("npm config set")]),e._v("一下，太麻烦啦！，所以我们需要"),s("code",[e._v("nrm")]),e._v("，即"),s("code",[e._v("npm")]),e._v("的镜像管理工具来帮助我们管理"),s("code",[e._v("npm")]),e._v("的镜像资源，随用随切，我们先来全局安装一下它")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("npm install "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("g nrm\n")])])]),s("p",[e._v("然后可以执行"),s("code",[e._v("nrm ls")]),e._v("指令查看我们目前的镜像源")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/HRBully/Img/main/image-20230227171240453.png",alt:"image-20230227171240453"}})]),e._v(" "),s("p",[e._v("当我们想要切换镜像源的时候可以执行"),s("code",[e._v("nrm use")]),e._v("切换到我们想要的源")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/HRBully/Img/main/image-20230227170951659.png",alt:"image-20230227170951659"}})]),e._v(" "),s("p",[e._v("然后如果想要增加或者执行一个镜像源我们可以对应执行"),s("code",[e._v("nrm add")]),e._v("与"),s("code",[e._v("nrm del")]),e._v("。")]),e._v(" "),s("h2",{attrs:{id:"最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[e._v("#")]),e._v(" 最后")]),e._v(" "),s("p",[e._v("年前猪痞恶霸去实习入职后，跑项目遇到了各种问题，多亏了这些工具，他们提升了我的效率，希望这篇文章能帮助到你😶‍🌫️，跑通公司项目，快速上手开发！")])])}),[],!1,null,null,null);a.default=v.exports}}]);