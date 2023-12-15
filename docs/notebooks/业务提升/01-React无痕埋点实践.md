埋点，即 Event Tracking，可以追踪系统的行为数据，包括pv，uv等，而埋点的用途也有很多，比如性能异常监测，用户行为监测等，而在前端领域，埋点分为了代码埋点，无痕埋点等，区分主要有

- 代码埋点：对代码侵入较高，工作量大，但是更加灵活，精确
- 无痕埋点：对代码侵入较低，但是不灵活，一些场景下无法控制埋点触发的时机

而本文将介绍作者在埋点中以 Hook 的形式，设计无痕+代码埋点，结合两者优点进行埋点开发

## Hook 封装

### 核心代码

```js
import React, { createContext, useEffect, useContext, useRef, useCallback, useMemo } from 'react'
export const LogContext = createContext({})

export default function useLog() {

  const message = useContext(LogContext)
  const listenDOM = useRef(null)
  // 埋点数据
  const originSend = useCallback(() => {}, [])
  const originImmediateSend = useCallback(() => {}, [])
  // 无痕点击上报
  const reportClickMessage = useCallback(function(e, data = {}) {
    let eventID = e.target.dataset.eventId
    if (!eventID) return
    const [ id, ...rest ] = eventID.split('?')
    eventID = id
    const clickData = {
      eventID,
      eventType: 'click',
      ...rest.reduce((acc, cur) => {
        const [ key, value ] = cur.split('=')
        acc[key] = value
        return acc
      }, {})
    }
    originSend({
      ...data,
      ...message,
      ...clickData,
    })
  }, [ originSend, message ])
  // 通用上报
  const reportMessage = useCallback(function(type, data, isImmediate = false) {
    const logData = {
      ...data,
      eventType: type
    }
    if (isImmediate) {
      originImmediateSend({
        ...message,
        ...logData,
      })
    } else {
      originSend({
        ...message,
        ...logData,
      })
    }
  }, [ originSend, originImmediateSend, message ])
  useEffect(()=>{
    const handleClick = function (e) {
      reportClickMessage(e)
    }
    if (listenDOM.current) {
      listenDOM.current.addEventListener('click', handleClick)
    }

    return function () {
      listenDOM.current && listenDOM.current.removeEventListener('click', handleClick)
    }
  }, [ reportClickMessage ])

  return [ listenDOM, reportMessage ]
}
```

### 使用说明

Hook 函数抛出了`listenDom`与`reportMessage`

## 后置知识

- 事件代理与事件对象
- 高阶函数
- React Hook

### 事件代理与事件对象



### 高阶函数



### React Hook

## 无痕埋点



### 设计



### 实现





