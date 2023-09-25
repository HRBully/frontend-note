## 模块化

- 原始模块
- 命名空间
- AMD
- CMD
- UMD
- CommonJS
- ESModule

## 包依赖

- 传统包依赖
- Node 体系
- 工程化体系

## 打包

下载 rollup

```js
npm install --save-dev @rollup@0.60.0
```

编写打包配置文件 config/rollup.config.js

```js
module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
};
```

运行打包命令

```js
npx rollup -c config/rollup.config.js
```



## 多环境适配

配置 esm，新建config/rollup.config.esm.js

```JS
module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.esm.js',
    format: 'es',
  },
};
```

配置aio，下载依赖```rollup-plugin-node-resolve```

```js
npm install --save-dev rollup-plugin-node-resolve@3.0.3
```

新建配置文件 config/rollup.config.aio.js

```js
const nodeResolve = require('rollup-plugin-node-resolve');
module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.aio.js',
    format: 'umd',
    name: 'sum',
  },
  plugins: [
    nodeResolve({
      main: true,
      extendsions: ['.js'],
    }),
  ],
}
```

## 打包命令

```js
  "scripts": {
    "build:self": "rollup -c config/rollup.config.js",
    "build:esm": "rollup -c config/rollup.config.esm.js",
    "build:aio": "rollup -c config/rollup.config.aio.js",
    "build": "npm run build:self && npm run build:esm && npm run build:aio"
  },
```

## 兼容

兼容 ES5 版本

```js
npm install --save-dev rollup-plugin-babel @babel/core @babel/preset-env
```

自定义`plugin`

```js
const babel = require('rollup-plugin-babel')
function getComplier(opt) {
  return babel({
    babelrc: false,
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          targets: {
            browsers: ['last 2 versions', 'IE 10']
          },
          loose: true
        }
      ]
    ],
    exclude: 'node_modules/**',
  })
}

exports.getComplier = getComplier
```

三个配置文件可以使用这个`plugin`

配置`polyfill`

```js
npm install --save core-js
```

