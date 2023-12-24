---
sidebar_position: 30
---

## 对比 Vuex 3.x/4.x

> Vuex3 只适配 Vue2，而 Vuex4 是适配 Vue3 的。

Pinia API 与 Vuex 也有很多不同，即：

- mutation 已被弃用，它们经常被认为是极其冗余的，它们初衷是带来 devtools 的集成方案
- 无需创建自定义的复杂包装器来支持 TypeScript，一切都可标注类型
- 无过多的魔法字符串注入，只需要导入函数并调用它们
- 无需要动态添加 Store，它们默认都是动态的，甚至你可能都不会注意到这点。注意，你仍然可以在任何时候手动使用一个 Store 来注册它，但因为它是自动的，所以你不需要担心它。
- 不再有嵌套结构的模块。你仍然可以通过导入和使用另一个 Store 来隐含地嵌套 stores 空间。虽然 Pinia 从设计上提供的是一个扁平的结构，但仍然能够在 Store 之间进行交叉组合。你甚至可以让 Stores 
  有循环依赖关系。
- 不再有可命名的模块。考虑到 Store 的扁平架构，Store 的命名取决于它们的定义方式，你甚至可以说所有 Store 都应该命名。

## 基础使用

```js title="main.js"
import { createApp } from 'vue'
import { createPinia } from 'docs/frontend-notes/vue3/pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
```

## 定义 optionStore

```js title="src/store/tabbarStore.js"
import { defineStore } from 'pinia'

// 第二个参数是对象
const useTabbarStore = defineStore('tabbar', {
  state: () => {  // 推荐使用箭头函数，更有利于 TS 的类型推断
    return {
      isTabbarShow: true
    }
  },
  actions: {
    change(value) {
      // 通过 this 可以访问到 state 中的数据
      this.isTabbarShow = value
    }
  }
})

export default useTabbarStore
```

```html title="组件中使用"
<template>
  <TabBar v-show="store.isTabbarShow" />
</template>

<script setup>
import { storeToRefs } from 'pinia'
import useTabbarStore from './store/tabbarStore'

const store = useTabbarStore()
console.log(store)

// 直接修改 store 中的值
store.isTabbarShow = false

// 使用“补丁”的形式修改 store 中的数据，补丁的对象会与 state 中 return 的对象进行合并
// 如果要一次修改多个属性，可以使用“补丁”的形式
store.$patch({
  isTabbarShow: false
})

// 重置 store 为原始值
store.$reset()

// 调用 actions 中的方法
store.change(false)

// store 是一个 reactive 响应式对象，直接从 store 中解构出 isTabbarShow，会失去响应式
// const { isTabbarShow } = store()
// 所以 pinia 也提供了 storeToRefs 方法
const { isTabbarShow } = storeToRefs(store)
</script>
```

## Getters 与 Actions

```js title="src/store/cinemaStore.js"
import { defineStore } from 'pinia'

const useCinemaStore = defineStore('cinema', {
  state: () => {
    return {
      cinemaList: []
    }
  },
  getters: {
    filterCinemaList(state) {
      return (value) => {
        return state.cinemaList.filter(item => item.eTicketFlag === value)
      }
    }
  },
  actions: {
    async getCinemaList() {
      // 发送请求
      const result = await axios()
      this.cinemaList = result.data.cinemas
    }
  }
})

export default useCinemaStore
```

```js title="组件中使用"
import { storeToRefs } from 'pinia'
import useCinemaStore from './store/cinemaStore'

const store = useCinemaStore()

// 访问 getters 中的属性
store.filterCinemaList(1)

// 调用 actions 中的方法
store.getCinemaList()
```

## 定义 setupStore

```js
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// 第二个参数是函数
const useCinemaStore = defineStore('tabbar', () => {
  const cinemaList = ref([])
  
  const filterCinemaList = computed(() => {
    return (value) => {
      return cinemaList.value.filter(item => item.eTicketFlag === value)
    }
  })
  
  const getCinemaList = async () => {
    // 发送请求
    const result = await axios()
    cinemaList.value = result.data.cinemas 
  }
  
  return { cinemaList, filterCinemaList, getCinemaList }
})

export default useCinemaStore
```
