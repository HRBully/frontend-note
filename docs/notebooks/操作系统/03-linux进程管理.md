# linux进程管理

## 概念

### 进程类型

#### 前台进程

具有终端可以与用户交互的进程为前台进行，比如说shell，前台进程会占用终端

#### 后台进程

与前台进程相对没有占用终端的进程为后台进程，所以后台进程不会与用户进行交互，所以前台进程的优先级比前台进程低，我们在执行命令的后面加一个&来执行后台进行会看到后台进程id

#### 守护进程

守护进程是特殊的后台进程，守护进程是在系统引导的时候启动的，一直运行到系统关闭，linux上有很多守护进程，一般进程名以d结尾的都为守护进程。

### 进程标记

#### 进程ID

进程ID是进程的唯一标识符，表示为一个非负整数，最大值是由操作系统所限定的，我们可以通过top命令来查看进程与起对应得ID，在操作系统中我们可以使用`fork`函数来创建一个进程，这样将会出现一个情况就是我们创建一个进程A，再通过进程A来调用`fork`来创建进程B，进程B再通过fork函数来创建进程C，这种关系被叫做父子进程关系。父子继承关系我们可以通过`pstree`查看

![image-20220411211928679](../../.vuepress/public/image-20220411211928679.png)

- ID为0的进程为**idle**进程，是系统创建的第一个进程
- ID为1的进程为**init**进程，是0号进程的子进程，完成系统的初始化
- **init**进程是所有用户进程的祖先进程

#### 进程状态标记

| 状态符号 |            状态说明            |
| :------: | :----------------------------: |
|    R     |       进程正处于运行状态       |
|    S     |       进程正处于睡眠状态       |
|    D     |  进程正在处于IO等待的睡眠状态  |
|    T     |       进程正处于暂停状态       |
|    Z     | 进程正在处于僵尸状态或僵尸进程 |



### 进程命令

#### ps

查看进程使用情况，列出进程使用情况。

- 使用`ps -aux`能打印出进程的详细信息
- 如果想查看指定用户则`ps -u root`，
- 果想查看指定进程则`ps -aux | grep 'python3'，
- 查看进程树则`ps -ef --forest`
- 对于进程所占内存不同进行排序则`ps -aux --sort=-pcpc`

#### top

查看linux进程使用内存

#### kill

发送给进程信号并作出相应操作

`kill -9 ID`这是讲ID进程执行退出



