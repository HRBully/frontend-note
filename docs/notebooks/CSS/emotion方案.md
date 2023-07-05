

## 基础使用

`emotion`的使用主要有两种，一种是通过`css`函数来创建样式代码，另一种可以使用`styled`来创建样式组件

### 创建样式代码

需要注意我们在项目中所使用的`emotion`包，与两种：`emotion/css`与`emotion/react`，因为两者都有`css`构造样式代码的能力，但是本质不同，尤其是官方文档的第一个和第二个例子，我们会发现`className`属性可以接收`css`构造的代码块，而`css`属性也可以接收。https://emotion.sh/docs/introduction。

```tsx
import { css } from '@emotion/css'
const color = 'white'
render(
  <div
    className={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${color};
      }
    `}
  >
    Hover to change color.
  </div>
)
```

```tsx
import { css } from '@emotion/react'
const color = 'white'
render(
  <div
    css={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${color};
      }
    `}
  >
    Hover to change color.
  </div>
)
```

包不同，`css`函数也不同，`React`项目常用的是`'@emotion/react'`，所以要注意，仅可以使用`css`属性来接收`css`构造的代码块

### 创建样式组件

通过`styled`来创建样式组件，它可以包裹普通的元素以及我们创建或导入的组件

```tsx
const dynamicColor = 'red';
const StyledButton = styled.button`
  background-color: ${dynamicColor};
  /* 其他样式属性 */
`;
```

因为模版字符串的特性，所以可以使用`${}`的方法来动态地改变值

> 这仅仅只是`emotion`的基础使用，下面我们来讨论一些常见场景。

## IN JS

`css in js`，也就是说可以将`css`的控制逻辑交给`js`来处理

```tsx
const style = function() {
  let color = 'black'
  return css`
  	color: ${color}
  `
}
```

比如说我们可以创建一个函数，返回值是`css`函数创建的样式块，在上面我们可以进行一些逻辑控制，当然作为函数肯定可以包含着参数，样式代码的创建可以使用函数参数来控制逻辑，那么样式组件呢

```tsx
<StyledComponet color={'balck'}></StyledComponet>
const StyledComponent = styled.div`
	${(props) => css`
		color:${props.color}
	`}
`
```

在样式组件内可以直接使用`props`参数，并通过函数的形式来处理样式逻辑

## 组件样式透传

在改造过程中涉及公用组件，`prop`传参为`className`，字符串类型，可以暂时新增`prop`，类型支持为`SerializedStyles`，传入由`css`构造的样式块

```ts
import { SerializedStyles, css } from '@emotion/react';
```

```tsx
// 类型
interface IProps {
  ...
  key?: SerializedStyles;
  ...
}
```

```tsx
// 构造代码块
const style = css`
  ...
`;
```

可以在**父组件**构造样式代码透传到**子组件/公用组件**内

需要注意的是：

1. 需要配置`eslint`，以支持`css`属性

   ```json
   rules: {
         'react/no-unknown-property': ['error', { ignore: ['css'] }],
   }
   ```

2. 配置`tsconfig`，以支持类型

   ```json
   "jsxImportSource": "@emotion/react",
   ```

3. 在使用`css`接受代码块的组件文件顶部应声明

   ```tsx
   /** @jsxImportSource @emotion/react */
   ```

   否则会出现错误：

   ```
   You have tried to stringify object returned from css function. It isn’t supposed to be used directly (e.g. as value of the className prop), but rather handed to emotion so it can handle it (e.g. as value of css prop).
   ```

   这是因为`css`未被转译造成，也可以通过配置`babel`插件来永久解决，文档解决方案：https://emotion.sh/docs/css-prop

   ```ts
   "presets": ["@emotion/babel-preset-css-prop"]
   ```

`emotion/css`模块中的`css`函数用于静态样式的创建和应用，而`emotion/react`模块中的`css`函数允许你在React组件中创建动态样式。

## 组件包裹后`prop`类型问题

```jsx
const StyledList = styled(List<IConfigure>)`
  ...
`;
```

如`antd`的`List`组件的`renderItem`，需要为`styled`包裹的节点加上对应的类型

## 样式复用

可以通过`css`函数来创建可复用的样式块，以`${}`的形式可实现多处复用

```tsx
const hovered = css`
  ...
`;
```

```tsx
const StyledItem = styled.div`
	...
  &:hover {
    ${hovered};
    cursor: pointer;
  }
`;
```

也可以和其他操作组合在一起达到很棒的效果，比如传参与控制（在改造之前是通过`classNames`库进行控制）

```tsx
const StyledItem = styled.div`
	...
  ${(props: { isActive: boolean }) =>
    props.isActive
      ? css`
          ${hovered};
        `
      : ''}
`;
```

## 令人诟病的css-hash

使用`styled`或者`css`传入样式，在浏览器调试过程会发现，元素上的`class`值为`css-hash`的形式，这导致我们并不知道我们所调试的元素是哪个`StyledComponent`，这也是`css in js`方案的缺陷之一，目前有两种辅助性方案

### 打标签 Label

我们可以在

### Source Map



