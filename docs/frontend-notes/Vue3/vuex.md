---
sidebar_position: 29
---

## 基本使用

vuex 的数据是存在内存中的，所以刷新页面就会丢失数据状态。

```shell title="安装"
npm install vuex@next --save
```

```js title="src/store/index.js"
import { createStore } from 'docs/frontend-notes/Vue3/vuex'

const store = createStore({
  state() {
    return {
      isTabBarShow: true,
      cinemaList: []
    }
  },
  // getter 相当于是 store 的计算属性
  getters: {
    filterCinemaList(state) {
      return value => state.cinemaList.filter(item => item.eTicketFlag === value)
    }
  },
  // Vue Devtool 会监控 mutations，所以建议对数据的操作都要通过 mutations
  mutations: {
    setTabBar(state, payload) {
      state.isTabBarShow = payload
    },
    setCinemaList(state, payload) {
      state.cinemaList = payload
    }
  },
  actions: {
    async getCinemaList(context, payload) {
      console.log(payload)
      // 发送请求获取数据
      const result = await axios()
      context.commit('setTabBar', result.data.cinemaList)
    }
  }
})

export default store
```

```js title="main.js"
import { createApp } from 'vue'
import store from './store'
import App from './App.vue'

createApp(App).use(store).mount('#app')
```

```js title="组件内使用"
import { useStore } from 'vuex'

const store = useStore()

store.state.isTabBarShow = false

store.getters.filterCinemaList(1)

store.commit('setTabBar', false)

store.dispatch('getCinemaList', 123)
```

## 辅助函数

Composition API 不支持 map 的辅助函数，因为这些 map 函数内部都使用到了 this。

解决方案：使用 `bind`。

```js
import { computed } from 'vue'
import { useStore, mapState } from 'vuex'

const state = mapState(['isTabBarShow'])
const store = useStore()
state.isTabBarShow = state.isTabBarShow.bind({ $store: store })
const isTabBarShow = computed(state.isTabBarShow)
```

## Module

```js
import { createStore } from 'vuex'

const moduleA = {
  namespaced: true,
  state() {
    return {
      xxx: 123
    }
  },
  getters: {},
  mutations: {
    setXXX() {}
  },
  actions: {}
}

const moduleB = {
  namespaced: true,
  state() {
    return {
      yyy: 'abc'
    }
  },
  getters: {},
  mutations: {
    setYYY() {}
  },
  actions: {}
}

const store = createStore({
  modules: {
    moduleA, moduleB
  }
})
```

```js
import { useStore, mapState, mapMutations, mapActions } from 'vuex'

const store = useStore()

store.state.moduleA.xxx
store.state.moduleB.yyy

const stateA = mapState('moduleA', ['xxx'])
const stateB = mapState('moduleB', ['yyy'])

const mutationsA = mapMutations('moduleA', ['setXXX'])
const mutationsB = mapMutations('moduleB', ['setYYY'])

const actionsA = mapActions('moduleA', [])
const actionsB = mapActions('moduleB', [])
```

## vuex 持久化插件

原理也是将数据存到 localStorage 中。

```shell
npm i vuex-persistedstate
```

```js
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
  modules: {
    moduleA, moduleB
  },
  plugins: [createPersistedState({
    reducer: (state) => {
      return {
        isTabBarShow: state.moduleA.isTabBarShow
      }
    }
  })]
})
```
