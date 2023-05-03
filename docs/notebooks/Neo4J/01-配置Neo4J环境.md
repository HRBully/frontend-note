## 配置JDK环境

Neo4J需要`jdk`环境，且版本最好是在11以下，否则在后续使用`Neo4J`使用的过程中会遇到连接不上的问题

1. 下载jdk：直接从官网下载即可[Java Downloads | Oracle](https://www.oracle.com/java/technologies/downloads/#java11-windows)
2. 启动`exe`文件安装`jdk`，直接安装即可
3. 检查是否安装成功，打开终端输入`java -version`即可

![image-20221029225056758](https://raw.githubusercontent.com/HRBully/Img/main/image-20221029225056758.png)

如上图所示，我们成功安装了`jdk`，下面我们来配置`Neo4J`

## 配置Neo4J

首先我们需要去`Neo4J`的官网去选择版本下载`zip`，一般我们是下载`zip`然后解压到某个位置，然后配置环境变量的

1. 选择社区免费版本，然后下载合适版本的`zip`文件，解压至合适的目录下
2. 配置环境变量，复制解压的`neo4j`文件，进入`bin`文件目录，复制当前的绝对路径，新增到环境变量中

