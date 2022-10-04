## Vuex

大范围的数据共享方案，实现组件数据管理的机制

组件间共享数据的话需要进行一层一层地传递，如果使用vuex的话只需要将数据存到store中，其他组件直接使用即可

### 使用

1. 安包

   ```
   npm install vuex --save
   ```

2. 导入vuex

   ```
   import Vuex from 'vuex'
   Vue.use(Vuex)
   ```

3. 创建store对象

   ```
   //store.js
   const store = new Vuex.store({
   	state:{count:0}
   })
   ```

4. 将store对象挂载到vue实例

   ```js
   new Vue({
       el:'#app',
       render:h => h(app),
       router,
       store
   })
   ```

### 核心概念

#### state

state是提供唯一的公共数据源，所有的共享数据要放在state中的store中存储，下面是访问共享数据的方法

1. 直接通过```this.$store```访问

   ```
   this.$store.state.count
   ```

2. 通过mapState函数访问，将函数按需引入，将当前组件需要的全局数据映射为当前组件的computer计算属性

   ```js
   import {mapState} from 'vuex'
   ```

   ```js
   computer: {
       ...mapState(['count'])
   }
   ```

#### Mutation

Mutation是用来修改store中的数据，在vuex中不推荐直接通过this来修改store中的数据，通过Mutation可以集中监控数据的变化，如下所示

```js
const store = new Vuex.store({
	state:{count:0}
    mutations:{
    add(state) {
    state.count++
}
}
})
```

我们在组件中可以直接调用mutations来触发

```js
this.$store.commit('add')
```

当我们想要为mutation传参的话可以为mutations中的函数增加参数

```js
mutations:{
    add(state,step) {
    state.count+=step
}
}
```

```
this.$store.commit('add',3)
```

最后这里commit的作用就是调用某个mutation函数

除此之外还可以通过mapMutations进行mutation触发，先进行按需引入

```js
import {mapMutations} from 'vuex'
```

将指定的mutations函数映射为当前组件的methods方法，之后直接通过this来调用映射过来的函数

```js
method: {
    ...mapMutations(['add','addN'])
}
```

需要注意的是我们的mutations中不能执行异步操作，那么如果我们想延迟执行该如何去做

#### action

action是vuex中专门处理异步任务的，所以如果我们需要异步，则需要在action中使用，不过在action中我们还是需要触发mutation来更改数据，如下

```js
const store = new Vuex.store({
	state:{count:0}
    mutations:{
    	add(state) {
    		state.count++
		}
	},
    actions: {
    	addAsync(contnext) {
            setTimeout(() => {
                context.commit('add')
            },1000)
        }
    }
})
```

在组件中使用触发如下

```js
this.$store.dispactch('addAsunc')
```

我们还可以使用```mapActions```来触发actions，同样映射到methods方法中去

```js
import {mapActions} from 'vuex'
```

```js
...mapActions
```

#### Getter

Getter是用于对store中的数据进行加工处理形成新的数据，即深拷贝，但是stroe数据发生变化后getter包装过的数据也会发送响应变化

```js
const store = new Vuex.store({
	state:{count:0}
     getters: {
    	showNum: state => {
    		return '当前数量为'+state.count
		}
	}
})
```

我们可以通过this来访问getter的值

```js
this.$store.getter.showNum
```

我们依旧可以引入mapGetter来映射到计算属性中

```js
import mapGetter from 'vuex'
```

```js
computer: {
    ...mapGetters(['showNum'])
}
```











