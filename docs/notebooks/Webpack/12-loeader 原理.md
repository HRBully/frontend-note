loader是一个导出的模块，一个函数，可以接受上一个loader 处理后的结果，处理后转换成新的结果

```js
/**
 *
 * @param {string|Buffer} content 源文件的内容
 * @param {object} [map] 可以被 https://github.com/mozilla/source-map 使用的 SourceMap 数据
 * @param {any} [meta] meta 数据，可以是任何内容
 */
function webpackLoader(content, map, meta) {
  // 你的 webpack loader 代码
  return content // 处理后的内容
}

```

## loader分类

- 前置
- 普通
- 内联
- 后置

同级loader从右到左，从下到上进行处理，也可以设置enforce来设置前置loader，优先级高

## loader的两个阶段

- pitching 阶段 从后到前
- normal 阶段 从前到后