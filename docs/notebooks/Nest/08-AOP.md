后端一般采用MVC的架构，`Model`，`Controller`，`View`，请求通过`Controller`发送给`Model`，`Model`响应也通过`Controller`响应给`View`

一般在这条链路上增加一些日志等功能，会混入业务，所以需要**面向切片**，在横截面来一刀，加入这些服务

## 中间件 Middleware

分为了全局中间件和路由中间件，全局中间件可以对每一个请求和响应进行一些拦截和处理，局部中间件可以对单独的路由进行处理

## Guard 路由守卫

`Guard `，在调用某个 Controller 之前判断权限，返回 true 或者 false 来决定是否放行

## Interceptor 拦截器

在目标 Controller 方法前后加入一些逻辑

