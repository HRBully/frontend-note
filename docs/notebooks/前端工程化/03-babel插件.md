## 概念

转译器，可以用于代码转译，代码转换，代码静态分析等工作

- 转译：es6 转 es5，typescript 转 javascript等
- 转换：函数插庄，自动国际化
- 静态分析：eslint分析

## AST 抽象语法树

### 节点类型

- Literal：字面量
- Identifier：标识符
- Statement：语句
- Declaration：声明语句
- expression：表达式
- Class：类语法
- Module：模块
- Program：整个程序节点
- Directive：整个程序节点+严格模式
- File：最外层节点
- Comment：注释体

一条语句，由各个组成部分，最后形成一棵树，为 AST 抽象语法树

### 公共属性

- type：AST 节点类型
- start，end，loc：代码开始与结束下标
- leadingComments，innerComments，trailingComments：开始，中间，结束的注释

## babel常用API

- @babel/parse：将代码转为 AST
- @babel/traverse：遍历 AST，修改 AST等 AST 操作
- @babel/type：判断 AST
- @babel/template：批量创建 AST
- @babel/core：核心功能

### babel/parse

```js
const  parser = require('@babel/parser');

const ast = parser.parse("代码", {
    sourceType: 'unambiguous', // 指定模块语法
    plugins: ['jsx'] // 指定语法
});
```

其他参数：

- strictMode：严格模式
- startLine：parse起点位置
- errRecovery：出错parse行为
- tokens：parse时是否保留token信息
- ranges：是否给 AST 添加 ranges 属性

### babel/traverse

```js
traverse(parent, opts)
```

- parent：AST 跟节点
- opt：遍历 AST 时调用的指定 visitor 函数

```js
traverse(ast, {
  FunctionDeclaration: {
      enter(path, state) {}, // 进入节点时调用
      exit(path, state) {} // 离开节点时调用
  }
})

```

每个 visitor 函数都有两个参数，path，state，两个参数分别对应路径信息和传递参数信息

- path.node
- path.parent
- Path.find/get/set

path具有很多方法，可以获取，增加，修改，判断节点

### babel/type

```js
t.ifStatement(test, consequent, alternate);

```



### babel/template

```js
const ast = template(code, [opts])(args);
const ast = template.ast(code, [opts]);
const ast = template.program(code, [opts]);
```

- template.ast：返回整个 AST
- template.program：返回根节点
- template.expression：返回创建 expression 的节点

### babel/generator

将 AST 生成目标代码

```js
import generate from "@babel/generator";

const { code, map } = generate(ast, { sourceMaps: true })
```





