---
sidebar_position: 7
---

# Pinia

Pinia API 与 Vuex 的不同：

- `mutation` 已被弃用，它们经常被认为是极其冗余的，它们初衷是带来 devtools 的集成方案
- 无需创建自定义的复杂包装器来支持 TypeScript，一切都可标注类型
- 无过多的魔法字符串注入，只需要导入函数并调用它们
- 无需要动态添加 Store，它们默认都是动态的，甚至你可能都不会注意到这点。注意，你仍然可以在任何时候手动使用一个 Store 来注册它，但因为它是自动的，所以你不需要担心它。
- 不再有嵌套结构的模块。你仍然可以通过导入和使用另一个 Store 来隐含地嵌套 stores 空间。虽然 Pinia 从设计上提供的是一个扁平的结构，但仍然能够在 Store 之间进行交叉组合。你甚至可以让 Stores
  有循环依赖关系。
- 不再有可命名的模块。考虑到 Store 的扁平架构，Store 的命名取决于它们的定义方式，你甚至可以说所有 Store 都应该命名。

## 搭建 Pinia 环境

```shell title="安装"
npm install pinia
```

```ts title="src/main.ts"
import { createApp } from 'vue'
// 引入 createPinia
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
// 创建 pinia
const pinia = createPinia()

// 使用 pinia
app.use(pinia)
app.mount('#app')
```

此时开发者工具中已经有了 `pinia` 选项。

## 存储 + 读取数据

`Store` 是一个保存**状态**、**业务逻辑**的实体，每个组件都可以**读取**、**写入**它。

它有三个概念：`state`、`getter`、`action`，相当于组件中的：`data`、`computed` 和 `methods`。

```ts title="src/store/count.ts"
// 引入 defineStore 用于创建 store
import { defineStore } from 'pinia'

// 定义并暴露一个 store
export const useCountStore = defineStore('count', {
  // 状态
  state: () => {   // 推荐使用箭头函数，更有利于 TS 的类型推断
    return {
      sum: 6
    }
  },
  // 计算
  getters: {},
  // 动作
  actions: {},
})
```

```html title="组件中使用 state 中的数据"
<template>
  <h2>当前求和为：{{ countStore.sum }}</h2>
</template>

<script setup lang="ts" name="Count">
  import { useCountStore } from '@/store/count'
  
  const countStore = useCountStore()
</script>
```

```ts title="src/store/talk.ts"
// 引入 defineStore 用于创建 store
import { defineStore } from 'pinia'

// 定义并暴露一个 store
export const useTalkStore = defineStore('talk', {
  // 状态
  state: () => {
    return {
      talkList: [
        { id: 'yuysada01', content: '你今天有点怪，哪里怪？怪好看的！' },
        { id: 'yuysada02', content: '草莓、蓝莓、蔓越莓，你想我了没？' },
        { id: 'yuysada03', content: '心里给你留了一块地，我的死心塌地' }
      ]
    }
  },
  // 计算
  getters: {},
  // 动作
  actions: {}
})
```

```html title="组件中使用 state 中的数据"
<template>
  <ul>
    <li v-for="talk in talkStore.talkList" :key="talk.id">{{ talk.content }}</li>
  </ul>
</template>

<script setup lang="ts" name="Count">
  import { useTalkStore } from '@/store/talk'

  const talkStore = useTalkStore()
</script>
```

## 修改数据

### 直接修改

```ts
import { useCountStore } from '@/store/count'

const countStore = useCountStore()
countStore.sum = 666
```

### 批量修改

```ts
import { useCountStore } from '@/store/count'

const countStore = useCountStore()
// 补丁的对象会与 state 中 return 的对象进行合并
countStore.$patch({
   sum: 999,
   school: 'atguigu'
})
```

### 借助 actions 修改

`action` 中可以编写一些业务逻辑。

```js
import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
   // ...
   actions: {
      increment(value: number) {
        // actions 中的 this 指向的是当前 store 实例，所以通过 this 可以访问到 state 中的数据
        if (this.sum < 10) {
          this.sum += value
        }
      },
      decrement(value: number) {
        if (this.sum > 1) {
          this.sum -= value
        }
      }
   },
})
```

```js title="组件中调用 actions 中的方法"
import { useCountStore } from '@/store/count'

const countStore = useCountStore()
countStore.incrementOdd(value)
```

### 重置

```ts
import { useCountStore } from '@/store/count'

const countStore = useCountStore()
// 重置 store 为原始值
countStore.$reset()
```

## storeToRefs

`store` 是一个 `reactive` 响应式对象，直接从 `store` 中解构出的数据，会失去响应式。所以 Pinia 也提供了 `storeToRefs` 方法，用于将 `store` 中的数据转为 `ref` 对象，保持响应式，也方便在模板中使用。

:::warning

- Pinia 提供的 `storeToRefs` 只会将 store 中的数据转换成 ref 对象
- Vue 提供的 `toRefs` 会将 store 中的数据、方法以及 _ 开头的属性全都转换成 ref 对象

:::

```html
<template>
   <h2>当前求和为：{{ sum }}</h2>
</template>

<script setup lang="ts" name="Count">
   import { storeToRefs } from 'pinia'
   import { useCountStore } from '@/store/count'
   
   const countStore = useCountStore()
   // 解构出的 sum 仍然是有响应式的
   const { sum } = storeToRefs(countStore)
</script>
```

## getters

概念：当 `state` 中的数据，需要经过处理后再使用时，可以使用 `getters` 配置。

```ts title="src/store/count.ts"
import { defineStore } from 'pinia';

export const useCountStore = defineStore('count', {
   state() {
      return {
         sum: 1,
         school: 'atguigu'
      };
   },
   getters: {
     // 接收 state 作为参数
     bigSum: (state): number => state.sum * 10,
     // 如果要用 this，就不能写成箭头函数
     upperSchool(): string {
       // this 指向的是当前 store 实例，也可以通过 this 访问 state 中的数据
       return this.school.toUpperCase();
     },
     filterCinemaList(state) {
       return (value) => {
         return state.cinemaList.filter(item => item.eTicketFlag === value)
       }
     }
   },
   actions: {},
});
```

```js title="组件中读取数据"
import { useCountStore } from '@/store/count'

const countStore = useCountStore()
const { increment, decrement } = countStore

let { sum, school, bigSum, upperSchool } = storeToRefs(countStore)

// 访问 getters 中的属性
countStore.filterCinemaList(1)
```

## $subscribe

`store` 的 `$subscribe()` 方法用于监听 `state` 是否发生变化（类似于 `watch`）。

```ts
import { useTalkStore } from '@/store/talk'

const talkStore = useTalkStore()
talkStore.$subscribe((mutate, state) => {
  // mutate 是本次修改的信息，state 是修改后的数据
  console.log('LoveTalk', mutate, state)
  localStorage.setItem('talk', JSON.stringify(state.talkList))
})
```

## store 组合式写法

```ts
import { reactive, computed } from 'vue'
import axios from 'axios'
import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'

export const useTalkStore = defineStore('talk', () => {
  // talkList 就是 state
  const talkList = reactive(JSON.parse(localStorage.getItem('talkList') as string) || [])

  // 相当于 getters
  const filterCinemaList = computed(() => {
    return (value) => {
      return cinemaList.value.filter(item => item.eTicketFlag === value)
    }
  })

  // getATalk 函数相当于 action
  async function getATalk() {
    let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
    let obj = { id: nanoid(), title }
    talkList.unshift(obj)
  }

  return { talkList, getATalk }
})
```
