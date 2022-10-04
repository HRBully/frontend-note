//侧边栏
// const autosidebar = require('vuepress-auto-sidebar-doumjun')
const fs = require("fs");
const path = require("path");

/**
 * 过滤所要导航的文件
 * 文件名 包含.md 但 不包含  README */
function checkFileType(path) {
  return path.includes(".md") && !path.includes("README");
}

/**
 * 格式化文件路径*/
function prefixPath(basePath, dirPath) {
  // replace用于去除相对路径
  basePath = basePath.replace(
    /([\.\\\/])(?!([\.]?[a-zA-z\u4e00-\u9fa5]))/g,
    ""
  );
  // replace用于处理windows电脑的路径用\表示的问题
  return path.join(basePath, dirPath).replace(/\\/g, "/");
}

/**
 * 截取文档路径*/
function getPath(path, ele) {
  let item = prefixPath(path, ele);
  console.log(item);
  let result = item.split("/");
  result.splice(1, 1);
  return result.join("/");
}

/**
 * 选择数组中已有元素*/
function chooseItem(root, ele) {
  return root.find(({ title }) => title == ele);
}

/**
 * 递归获取分组信息并排序*/
function getGroupChildren(path, ele, root, deep = 0) {
  let palist = fs.readdirSync(path + "/" + ele + "/").sort((a, b) => {
    return a - b;
  });
  palist.forEach((item) => {
    if (item.includes("index")) {
      let group = {};
      group.title = "开始"; // item.replace(".md", "");
      group.path = getPath(path + "/" + ele, item);
      const getItem = chooseItem(root, ele);
      if (getItem) {
        return getItem.children.splice(0, 0, group);
      }
      return root.splice(0, 0, { title: ele, children: [group] });
    }
    let info = fs.statSync(path + "/" + ele + "/" + item);
    if (info.isDirectory()) {
      let children = [];
      let group = {};
      group.title = item;
      group.collapsable = true;
      getGroupChildren(path + "/" + ele, item, children, deep + 1);
      group.children = children;
      root.push(group);
    } else if (checkFileType(item)) {
      let group = {};
      group.title = item.replace(".md", "");
      group.path = getPath(path + "/" + ele, item).replace(".md", "");
      if (deep) {
        return root.push(group);
      }
      const getItem = chooseItem(root, ele);
      if (getItem) {
        return getItem.children.push(group);
      }
      return root.push({
        title: ele,
        children: [group],
      });
    }
  });
}
/**
 * 初始化*/
function getChildren(path, ele) {
  var root = [];
  getGroupChildren(path, ele, root);
  return root;
}

module.exports = { getChildren };
