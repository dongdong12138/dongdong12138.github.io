---
sidebar_position: 26
---

在 Vue3 中，`$on`、`$off`、`$once` 实例方法已被移除，组件实例不再实现事件触发接口，因此大家熟悉的 EventBus 便无法使用了。

然而我们习惯了使用发布订阅模式的 EventBus，对于这种情况我们可以使用 Mitt 库来替代。

```shell
npm install mitt -S
```

```js title="main.js"
import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt' 

const Mit = mitt() 
const app = createApp(App)
 
// Vue3 挂载全局 API
app.config.globalProperties.$Bus = Mit
 
app.mount('#app')
```

```html title="A 组件派发（emit）"
<template>
  <h1>我是 A 组件</h1>
  <button @click="emit1">emit1</button>
  <button @click="emit2">emit2</button>
</template>

<script setup lang='ts'>
import { getCurrentInstance } from 'vue'

const instance = getCurrentInstance()

const emit1 = () => {
  instance?.proxy?.$Bus.emit('on-num', 100)
}
const emit2 = () => {
  instance?.proxy?.$Bus.emit('*****', 500)
}
</script>
```

```html title="B 组件监听（on）"
<template>
  <h1>我是B</h1>
</template>

<script setup lang='ts'>
import { getCurrentInstance } from 'vue'

const instance = getCurrentInstance()

instance?.proxy?.$Bus.on('on-num', (num) => {
  console.log(num)
})
</script>
```

```js title="监听所有事件"
instance?.proxy?.$Bus.on('*', (type, num) => {
  console.log(type, num)
})
```

```js title="移除监听事件"
const Fn = (num: any) => {
  console.log(num)
}

instance?.proxy?.$Bus.on('on-num', Fn)  // listen
instance?.proxy?.$Bus.off('on-num', Fn) // unListen
```

```js title="清空所有监听"
instance?.proxy?.$Bus.all.clear() 
```
