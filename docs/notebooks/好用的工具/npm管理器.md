当一位前端切图仔进入一家新公司后，拿到代码所必须要做的那就是进行紧张刺激的`npm install`了，能不能一次就把`package.json`中的依赖毫无报错的下载那就是撞了大运气，而如果遇到**error**，我们就需要顺腾摸瓜了，而一些常见的error，比如说，node的版本问题，又或者是镜像源等等问题。本文将介绍一些实用的`npm`相关的工具来帮助大家快速完成项目`install`！！！

## 自如切换node版本，看我nvm

`nvm`是一款可以切换`node`版本的工具，在接手新项目的时候，不可避免会遇到一些版本问题，所以我们需要切换我们当前的node版本，但是来回地安装卸载node显得我们效率很低，这个时候使用node的版本管理工具就很有必要。

### 安装

安装地址：[Releases · coreybutler/nvm-windows (github.com)](https://github.com/coreybutler/nvm-windows/releases)，往下翻一翻，下载可执行文件并运行

![image-20230203210758860](https://raw.githubusercontent.com/HRBully/Img/main/image-20230203210758860.png)

下面选择`nvm`安装路径和`node`的存放路径就好了，完成安装！✌️

### 使用

![image-20230203212156778](https://raw.githubusercontent.com/HRBully/Img/main/image-20230203212156778.png)

掌握三个指令就能自如地切换node版本

查看当前已安装的node版本号

```js
nvm ls
```

切换到某个版本的node，比如我要切换版本到11.9.0

```js
nvm use 11.9.0
```

下载某个版本的node，比如我要下载16.12.0版本

```js
nvm install 16.12.0
```

天下武功，唯快不破，掌握nvm，如此简单😏

## 快速卸载`node_modules`，继续下一步

在每次`install`后抛出`error`，我们准备进行下一次`install`，那么我们就需要删除残留的`node_modules`，而正常的删除我们需要删除半天，所以我们需要一些工具来帮助我们快速删除它

- 经典的`rm -rf ./node_modules`，不过需要在当前目录下进入`powershell`或者是`git bash`命令行中执行
- 使用`rimraf`，我们需要先全局安装`npm install rimraf -g`，之后在对应目录下执行`rimraf node_modules`

## 快速切换`npm`镜像源，用`nrm`

在下载资源的时候太慢，或者出现了卡死的情况下，我们就需要切换镜像源来帮助我们快速地去下载，而手动去更改镜像源，切换一个镜像源就要`npm config set`一下，太麻烦啦！，所以我们需要`nrm`，即`npm`的镜像管理工具来帮助我们管理`npm`的镜像资源，随用随切，我们先来全局安装一下它

```js
npm install -g nrm
```

然后可以执行`nrm ls`指令查看我们目前的镜像源

![image-20230227171240453](https://raw.githubusercontent.com/HRBully/Img/main/image-20230227171240453.png)

当我们想要切换镜像源的时候可以执行`nrm use`切换到我们想要的源

![image-20230227170951659](https://raw.githubusercontent.com/HRBully/Img/main/image-20230227170951659.png)

然后如果想要增加或者执行一个镜像源我们可以对应执行`nrm add`与`nrm del`。

## 最后

年前猪痞恶霸去实习入职后，跑项目遇到了各种问题，多亏了这些工具，他们提升了我的效率，希望这篇文章能帮助到你😶‍🌫️，跑通公司项目，快速上手开发！
