## hook

### useEffect

- 操控除函数组件外的外部系统，如：网络连接，浏览器窗口（bom），浏览器监听
- 调用外部函数，外部方法
- 模拟函数组件生命周期：挂载与销毁
- 一个很好的异步控制？即消除竞争，在两个生命周期内设置标识来控制是否可`useState`
- 可以二次封装`useEffect`即可以将逻辑抽离**自定义hook**
- 第二个参数为依赖数组，包括了内部所使用的所有值，当依赖项发生改变的时候`useEffect`会重新触发
- 避免依赖数组中包括对象，可以在`useEffect`内创建对象
- 必须包括第二个参数，可以为空数组：`[]`，否则可能会出现无限执行现象

```jsx
import { useState, useEffect } from "react";
import { Button } from "antd";

const Child = () => {
  useEffect(() => {
    console.log("挂载");
    return () => {
      console.log("卸载");
    };
  }, []);
  return <div>一起学习hooks吧！</div>;
};
const Index: React.FC<any> = () => {
  const [flag, setFlag] = useState(false);
  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setFlag((v) => !v);
        }}
      >
        {flag ? "卸载" : "挂载"}
      </Button>
      {flag && <Child />}
    </>
  );
};

export default Index;
```

注意的是，`useEffect`的回调函数中为组件挂载生命周期，回调函数返回的是组件销毁生命周期

### useContext

- 作为跨组件通信的手段之一
- 简单的理解为全局共享数据
- 读取与订阅上下文：当值发生改变的时候，订阅者（useEffect的使用者）会订阅到值的更新，当然就可以正常读取
- 以`Component.Provider `闭合标签形式来提供上下文的值
- 可以嵌套多个上下文，也可以将多个上下文抽离成组件，再将组件以参数形式传递，就像**插槽slot**的概念一样
- 相同标识的上下文在嵌套过程中，组件会使用向上最近的上下文值

## useReducer

- 单组件状态管理函数
- 不推荐用`useState`来更新引用类型，但是使用`useReducer`可以
- 可以在`reducer`函数内编写`switch case`逻辑来针对不同的更改做出分支选择

```jsx
import { useReducer } from 'react';
// 很像redux
function reducer(state, action) {
  // 分支修改逻辑
  switch (action.type) {
    // 当patch传入参数进行分支判断
    case 'incremented_age': {
      return {
        name: state.name,
        age: state.age + 1
      };
    }
    case 'changed_name': {
      return {
        name: action.nextName,
        age: state.age
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
}

const initialState = { name: 'Taylor', age: 42 };

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleButtonClick() {
    // 说明需要修改数
    dispatch({ type: 'incremented_age' });
  }

  function handleInputChange(e) {
    // 说明需要修改name
    dispatch({
      type: 'changed_name',
      nextName: e.target.value
    }); 
  }

  return (
    <>
      <input
        value={state.name}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>
        Increment age
      </button>
      <p>Hello, {state.name}. You are {state.age}.</p>
    </>
  );
}
```

## useMemo

- 可以跳过组件的重新渲染，性能优化
- 参数中函数的返回值会作为缓存值，而第二个参数依赖项作为函数内使用的值，当发生改变时，缓存值才会发生改变

## useCallback

- 与`useMemo`相比，返回值的是缓存函数，而非缓存值
- 将函数缓存起来，避免使用该函数的组件会被重新渲染，值得注意的是每次渲染的函数都是不同的
- 它依赖于第二个参数依赖项数组，当没有发生改变的时候，函数缓存是不会发生改变的

## useRef

- 可以通过`useRef`来操作DOM
- 创建后将值班定到对应的组件上即可