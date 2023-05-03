const { getChildren } = require("./utils/autoSidebar");
const hogskin = (e) => getChildren("./docs", e);
const sidebar = hogskin("notebooks");
sidebar.unshift(
  ...[
    {
      title: "关于笔记站",
      path: "/",
      collapsable: false, // 不折叠
    },
  ]
);
console.log(sidebar);
module.exports = {
  title: "猪痞恶霸的笔记站",
  description: "莫听穿林打叶声，何妨吟啸且徐行",
  base: "/frontend-note/",
  theme: "reco",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "HRBully",
        items: [
          { text: "GitHub", link: "https://github.com/HRBully" },
          { text: "掘金", link: "https://juejin.cn/user/431430802343479" },
        ],
      },
    ],
    sidebar,
    // sidebar: [
    // {
    //   title: '关于博客',
    //   path: '/',
    //   collapsable: false, // 不折叠
    // },
    //   {
    //     title: "基础学习",
    //     path: '/notebooks/frontendbase/02-选择器',
    //     collapsable: true, // 不折叠
    //     children: [
    //       { title: '02-选择器', path: "/notebooks/frontendbase/02-选择器" },
    //       { title: '03-样式与样式表的使用', path: "/notebooks/frontendbase/03-样式与样式表的使用" },
    //       { title: '04-传统布局与flex的使用', path: "/notebooks/frontendbase/04-传统布局与flex的使用" },
    //       { title: '05-移动端适配', path: "/notebooks/frontendbase/05-移动端适配" },
    //       { title: '06-初始脚本语言', path: "/notebooks/frontendbase/06-初始脚本语言" },
    //       { title: '07-文档对象模型', path: "/notebooks/frontendbase/07-文档对象模型" },
    //       { title: '08-浏览器对象模型', path: "/notebooks/frontendbase/08-浏览器对象模型" },
    //       { title: '09-好吃的饼干', path: "/notebooks/frontendbase/09-好吃的饼干" },
    //       { title: '09-状态封装', path: "/notebooks/frontendbase/10-如何在项目中引入图标" },
    //       { title: '11-Ajax封装', path: "/notebooks/frontendbase/11-Ajax封装" },
    //       { title: '12-Ajax教学', path: "/notebooks/frontendbase/12-Ajax教案" },
    //       { title: '13-cookie', path: "/notebooks/frontendbase/13-cookie" },
    //       { title: '14-跨域', path: "/notebooks/frontendbase/14-跨域" },
    //       { title: '15-页面传参', path: "/notebooks/frontendbase/15-页面传参" },
    //       { title: '16-js对象&json对象&json字符串', path: "/notebooks/frontendbase/16-js对象&json对象&json字符串" },
    //       { title: '17-冻结对象', path: "/notebooks/frontendbase/17-冻结对象" },
    //       { title: '18-盘点JS判空对象方法', path: "/notebooks/frontendbase/18-盘点JS判空对象方法" },
    //       { title: '19-JS数组内存效率', path: "/notebooks/frontendbase/19-JS数组内存效率" },
    //       { title: '20-语义化', path: "/notebooks/frontendbase/20-语义化" },
    //       { title: '21-jq遍历', path: "/notebooks/frontendbase/21-jq遍历" },
    //       { title: '22-手风琴', path: "/notebooks/frontendbase/22-手风琴" },
    //     ],
    //   },
    //   {
    //     title: "Vue学习指南",
    //     path: '/notebooks/vuelearn/01-脚手架',
    //     collapsable: true, // 不折叠
    //     children: [
    //       { title: '01-脚手架', path: "/notebooks/vuelearn/01-脚手架" },
    //       { title: '02-路由', path: "/notebooks/vuelearn/02-路由" },
    //       { title: '03-请求', path: "/notebooks/vuelearn/03-请求" },
    //       { title: '04-Eslint', path: "/notebooks/vuelearn/04-Eslint" },
    //       { title: '05-插槽', path: "/notebooks/vuelearn/05-插槽" },
    //       { title: '06-动态组件', path: "/notebooks/vuelearn/06-动态组件" },
    //       { title: '07-自定义指令', path: "/notebooks/vuelearn/07-自定义指令" },
    //       { title: '08-scoped原理解析', path: "/notebooks/vuelearn/08-scoped原理解析" },
    //       { title: '09-状态封装', path: "/notebooks/vuelearn/09-状态封装" },
    //     ],
    //   }
    // ]
  },
};
