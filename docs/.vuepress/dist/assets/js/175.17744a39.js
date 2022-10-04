(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{808:function(v,_,t){"use strict";t.r(_);var a=t(17),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"网络核心"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络核心"}},[v._v("#")]),v._v(" 网络核心")]),v._v(" "),t("h2",{attrs:{id:"分组交换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分组交换"}},[v._v("#")]),v._v(" 分组交换")]),v._v(" "),t("p",[v._v("分组交换是端系统彼此之间交互报文（包含着协议设计者所需要的所有东西）")]),v._v(" "),t("h3",{attrs:{id:"报文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#报文"}},[v._v("#")]),v._v(" 报文")]),v._v(" "),t("ol",[t("li",[v._v("执行一种控制功能")]),v._v(" "),t("li",[v._v("包含数据（电子邮件数据，图像数据等）")])]),v._v(" "),t("h3",{attrs:{id:"分组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分组"}},[v._v("#")]),v._v(" 分组")]),v._v(" "),t("p",[v._v("源将报文划分为小数据块，这种小数据块被称为分组")]),v._v(" "),t("h3",{attrs:{id:"分组交换机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分组交换机"}},[v._v("#")]),v._v(" 分组交换机")]),v._v(" "),t("p",[v._v("分组需要通过通信链路和"),t("strong",[v._v("分组交换机")]),v._v("传送，分组交换机分为如下两类")]),v._v(" "),t("ol",[t("li",[v._v("路由器")]),v._v(" "),t("li",[v._v("链路层交换机")])]),v._v(" "),t("h3",{attrs:{id:"传输速率"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#传输速率"}},[v._v("#")]),v._v(" 传输速率")]),v._v(" "),t("p",[v._v("某源端或分组交换机经过一条链路发送一个大小为L的比特，链路传输速率为R比特/秒则传输时间t=L/R")]),v._v(" "),t("h3",{attrs:{id:"存储转发传输"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#存储转发传输"}},[v._v("#")]),v._v(" 存储转发传输")]),v._v(" "),t("blockquote",[t("p",[v._v("分组交换机在链路输入端使用了存储转发传输的机制")])]),v._v(" "),t("p",[v._v("交换机在向输出链路传输该分组第一个比特前必须接受到整个分组才能进行传输，可以理解为路由器只有接受到一个分组的全部比特后才能将该分组继续向下一个链路传输")]),v._v(" "),t("h3",{attrs:{id:"排队时延和分组丢失"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#排队时延和分组丢失"}},[v._v("#")]),v._v(" 排队时延和分组丢失")]),v._v(" "),t("blockquote",[t("p",[v._v("每台分组交换机在输出分组之前都会经过输出缓存（队列），用来存储分组交换机准备发往某条链路的分组")])]),v._v(" "),t("p",[v._v("某个分组彻底到达了分组交换机后（即完成了"),t("strong",[v._v("存储转发")]),v._v("）发现该分组的传输链路发生堵塞即在忙于传输其他分组，所以这个时候该分组必须等待，所以分组在经过"),t("strong",[v._v("存储转发时延")]),v._v("后还需要经过"),t("strong",[v._v("排队时延")]),v._v("（这种时延取决于网络的拥塞程度）")]),v._v(" "),t("p",[v._v("除此之外由于缓存大小是有限的，即队列的长度是有限的，所以，新来的分组发现自己的链路队列被塞满了，这个时候就会迷失，被称为"),t("strong",[v._v("分组丢失")]),v._v("（丢包）")]),v._v(" "),t("h3",{attrs:{id:"转发路由与路由选择协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#转发路由与路由选择协议"}},[v._v("#")]),v._v(" 转发路由与路由选择协议")]),v._v(" "),t("blockquote",[t("p",[v._v("分组的传输是如何确定目的地的，即分组交换器如何决定分组将要向哪条链路进行转发")])]),v._v(" "),t("p",[v._v("每个端系统都有一个地址即IP地址，当我们主机向目的端系统发送一个分组的时候，源主机在分组的首部包含了一个目的端系统的"),t("strong",[v._v("IP地址")]),v._v("，如短信目的联系人的电话号，或者电子邮件地址，每台分组交换机都会根据这个IP地址来进行分组的转发")]),v._v(" "),t("p",[t("strong",[v._v("转发表")]),v._v("是这个过程中必要的组成，每个分组转换器都具有一个转发表，将目的地址映射成为输出链路")]),v._v(" "),t("p",[v._v("所以分组在寻找自己的输出链路的过程是这样的：")]),v._v(" "),t("ol",[t("li",[v._v("携带目的地的IP地址")]),v._v(" "),t("li",[v._v("分组交换器检查该地址的一部分")]),v._v(" "),t("li",[v._v("转发表对于这一部分进行映射处理形成输出链路")]),v._v(" "),t("li",[v._v("根据输出链路进行转发")])]),v._v(" "),t("p",[v._v("而"),t("strong",[v._v("路由选择协议")]),v._v("是自动设置转发表的基础，它可以决定从每台分组交换机到每个目的地的最短路径，并使用这些最短路径结果来配置路由器的转发表")]),v._v(" "),t("h2",{attrs:{id:"电路交换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#电路交换"}},[v._v("#")]),v._v(" 电路交换")]),v._v(" "),t("blockquote",[t("p",[v._v("通过网络链路与交换机移动数据的有两种办法，一种为分组交换，一种为电路交换")])]),v._v(" "),t("p",[v._v("在端系统通信会话期间预留了端系统间沿路径通信所需要的资源（在"),t("strong",[v._v("分组交换")]),v._v("网络中这些资源是不预留的）这句话可能难懂看一下下面的例子")]),v._v(" "),t("p",[v._v("我们来简单了解一下分组交换与电路交换的区别，将分组和电路交换比作两家餐馆，"),t("strong",[v._v("预定")]),v._v("可以理解为预留了端系统间沿路径通信所需要的资源")]),v._v(" "),t("ul",[t("li",[v._v("分组交换餐馆：这家餐馆不可以"),t("strong",[v._v("预定")]),v._v("，只能直接去，运气好不需要排队，运气不好需要排队等待")]),v._v(" "),t("li",[v._v("电路交换餐馆：这家餐馆必须"),t("strong",[v._v("预定")]),v._v("，在前往餐馆前必须"),t("strong",[v._v("预定")]),v._v("好用餐才能出发")])]),v._v(" "),t("p",[v._v("电路交换餐馆的例子：")]),v._v(" "),t("p",[v._v("传统的电话网络在一个人需要向一个人发出信息的适合，必须先建立连接，在这条链接上所有的交换机都必须为该连接维护连接状态，确保两方的连接。")]),v._v(" "),t("h3",{attrs:{id:"频分复用与时分复用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#频分复用与时分复用"}},[v._v("#")]),v._v(" 频分复用与时分复用")]),v._v(" "),t("blockquote",[t("p",[v._v("电路交换是通过频分与时分复用来实现的")])]),v._v(" "),t("ol",[t("li",[t("p",[v._v("频分复用")]),v._v(" "),t("p",[v._v("频分复用是将频率域划分为各个频段，在连接期间为每个连接专用一个频段，比如说无线电台，也是使用频分复用来共享划分88Hz~108Hz")])]),v._v(" "),t("li",[t("p",[v._v("时分复用")]),v._v(" "),t("p",[v._v("时分复用是将时间划分为固定期间的帧，每个帧又被划分为一定数量的时隙，网络创建一个连接这个连接就会指定一个时隙。")])])]),v._v(" "),t("p",[v._v("对于时分复用，电路的传输速率=帧速率乘以一个时隙中的比特量")])])}),[],!1,null,null,null);_.default=s.exports}}]);