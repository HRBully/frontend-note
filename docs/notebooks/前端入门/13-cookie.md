> 人生中第一次登录掘金——啊，我需要注册登录

![image-20220115195859877](C:\Users\hogskin\AppData\Roaming\Typora\typora-user-images\image-20220115195859877.png)

在我们注册成功后就可以开始我们的掘金之旅了，但是我们在登录过后就很长时间不需要使用账号密码来登录，这是为啥呢？

在座的各位都知道HTTP是无状态的，也就是我们这次访问了服务器，关闭网页后再次访问服务器，服务器是不知道你来过的。

那么我们是用什么保持登录状态呢？

### 存储

> 我们保存我们登录状态的秘密武器就是存储

我们在掘金注册了之后，掘金就会将我们的账号密码保存起来，也就是说在用户允许浏览器其记住账号密码，通过在每次HTTP请求都自动地将数据传给服务器的手段就是我们的小饼干——cookie

### cookie

> cookie是我们存储在浏览器中的数据

1. 浏览器发起HTTP请求，服务器会进行cookie设置```{name:cxy}```

2. 服务器会将其填充完整，cookie发送给浏览器并被保存起来

3. 在之后浏览器每发一个请求都会自动附上存储的cookie

   ![image-20220115220151871](C:\Users\hogskin\AppData\Roaming\Typora\typora-user-images\image-20220115220151871.png)

当然我们将账号和密码存储在cookie中是非常不安全的，基于这个原因，session（会话）横空出世。

### session

> 浏览器和服务器是进行会话的

这里浏览器访问服务器是会话的开始，会话结束的时间是由唯一的Session ID来设定的，并且其ID会保存在数据库中，那么我们是怎么样通过sessionid来达到我们的目的的？

1. 我们将账户和密码发送给服务器

2. 经过核对后，在服务器端创建一个session id和会话结束时间

3. 创建过后就会被发送给浏览器，通过设置cookie来讲session id和结束时间存储起来

   ![image-20220115223226577](C:\Users\hogskin\AppData\Roaming\Typora\typora-user-images\image-20220115223226577.png)

注意：这里我们就不用担心账号密码存储到cookie中会被泄露，session id被泄露对我们的账号安全没有影响。

### JWT

当我们的用户量变得很大的时候，我们还使用基于cookie的session的方式，服务器就会面临可能需要存储大量session id在服务器中，就会面临可能需要多台服务器来存储的情况。所以JWT会帮我们解决这一问题

![image-20220115223241226](C:\Users\hogskin\AppData\Roaming\Typora\typora-user-images\image-20220115223241226.png)

1. 使用账号密码登录后，服务器会生成一个JWT并不需要保存它

2. 服务器会保存JWT签名的密文，再之后将JWT发送给浏览器

3. 浏览器可以用cookie或者storage的形式存储

4. 如果我们使用cookie形式存储，那么我们每次访问服务器时都会将JWT发送过去

   ![image-20220115223254813](C:\Users\hogskin\AppData\Roaming\Typora\typora-user-images\image-20220115223254813.png)

### JWT安全性

我们的JWT由header.payload.signature组成

- header：声明了需要什么算法来生成前面
- payload：其是一些特定的数据，有效期
- signature：header和payload两部分内容会经过Base64编码后进行算法运算得到签名信息



