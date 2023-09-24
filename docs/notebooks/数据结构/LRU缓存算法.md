## 算法概念

LRU 算法，两个方法为`get`与`put`，常用的放在前面，不常用的置于底部，所以需要双向链表辅助实现

## 双链表

双向链表的节点三个基本属性，前置指针，后置指针，值

```js
class Node {
  constructor(value) {
    this.value = value
    this.prev = null
    this.next = null
  }
}
```



## 实现

```js

/**
 * @param {number} capacity
 */

class Node {
    constructor(key = 0, value = 0) {
        this.key = key
        this.value = value
        this.prev = null
        this.next = null
    }
}
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.dummy = new Node()
    this.dummy.next = this.dummy
    this.dummy.prev = this.dummy
    this.bucket = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const node = this.getNode(key)

    return node ? node.value : -1
};

LRUCache.prototype.getNode = function(key) {
    if(!this.bucket.has(key)) return null
    const node = this.bucket.get(key)

    this.remove(node)
    this.pushFrontend(node)
    return node
}
LRUCache.prototype.remove = function(node) {
    node.prev.next = node.next
    node.next.prev = node.prev
}
LRUCache.prototype.pushFrontend = function(node) {
    node.prev = this.dummy
    node.next = this.dummy.next
    node.prev.next = node
    node.next.prev = node
    
}
/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.getNode(key)
    if(node) {
        node.value = value
        return
    }

    node = new Node(key, value)
    this.bucket.set(key, node)
    this.pushFrontend(node)
    if(this.bucket.size > this.capacity) {
        const backNode = this.dummy.prev
        this.bucket.delete(backNode.key)
        this.remove(backNode)

    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
```



