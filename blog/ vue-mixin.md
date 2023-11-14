---
date: 2023-10-27
slug: vue-mixin
title: Vue mixin 详解
authors: [barry]
tags: [Vue, mixin]
---

:::warning

Vue3 已经抛弃了 mixin，推荐使用 CompositionAPI 代替 mixin。

:::

## 概念介绍

mixin（混入）是 Vue 中复用代码的一种方式，它可以将一组选项（如 data、methods、生命周期钩子等）合并到多个组件中，从而实现代码或功能的复用。

:::tip

组件中的任意选项都可以写到 mixin 中！

:::

## 基础使用

```js
// 定义一个名为 myMixin 的 mixin 对象，将需要复用的选项放在其中
const myMixin = {
  data() {
    return {
      message: 'Hello, Mixin!'
    }
  },
  methods: {
    hello() {
      console.log(this.message)
    }
  }
}

// 在组件中通过 mixins 选项，使用 myMixin
Vue.component('my-component', {
  mixins: [myMixin],
  mounted() {
    this.hello()  // Hello, Mixin!
  }
})
```

## 选项合并

当 mixin 与组件存在同名的选项时，Vue 会将同名的选项进行合并。合并规则如下：

- 数据选项（data）会进行递归合并，组件的数据会覆盖 mixin 的同名数据；

  ```js
  const mixin = {
    data() {
      return {
        message: 'hello',
        foo: 'abc'
      }
    }
  }

  new Vue({
    mixins: [mixin],
    data() {
      return {
        message: 'goodbye',
        bar: 'def'
      }
    },
    created() {
      console.log(this.$data)   // { message: "goodbye", foo: "abc", bar: "def" }
    }
  })
  ```

- 值为对象的选项（如 methods、components、directives 等）会被合并为同一个对象，组件的选项会覆盖 mixin 的同名选项；

  ```js
  const mixin = {
    methods: {
      foo() {
        console.log('foo')
      },
      conflicting() {
        console.log('from mixin')
      }
    }
  }

  const vm = new Vue({
    mixins: [mixin],
    methods: {
      bar() {
        console.log('bar')
      },
      conflicting() {
        console.log('from self')
      }
    }
  })

  vm.foo()  // "foo"
  vm.bar()  // "bar"
  vm.conflicting()  // "from self"
  ```

- 同名的生命周期钩子函数会合并到一个数组中，所以都会调用。调用顺序是先调用 mixin 中的钩子，后调用组件中的钩子。

  ```js
  const mixin = {
    created() {
      console.log('混入对象的钩子被调用')
    }
  }

  new Vue({
    mixins: [mixin],
    created() {
      console.log('组件钩子被调用')
    }
  })

  // "混入对象的钩子被调用"
  // "组件钩子被调用"
  ```

## 同时使用多个 mixin

当在同一个组件中使用多个 mixin，且多个 mixin 中也含有同名选项时，后使用的会覆盖先使用的。

```js title="mixin1.js"
const mixin1 = {
  data() {
    return {
      aaa: 'aaa-mixin1'
    }
  },
  mounted() {
    console.log('mixin1:', this.aaa)
  },
  methods: {
    showAAA() {
      console.log(this.aaa)
    }
  }
}

export default mixin1
```

```js title="mixin2.js"
const mixin2 = {
  data() {
    return {
      aaa: 'aaa-mixin2'
    }
  },
  mounted() {
    console.log('mixin2:', this.aaa)
  },
  methods: {
    showAAA() {
      console.log(this.aaa)
    }
  }
}

export default mixin2
```

```html title="App.vue"
<template>
  <div>
    <button @click="showAAA">showAAA</button>
  </div>
</template>

<script>
import mixin1 from '@/mixins/mixin1'
import mixin2 from '@/mixins/mixin2'

export default {
  name: 'App',

  // mixin2 会将 mixin1 中的同名选项覆盖，然后先执行 mixin1，后执行 mixin2
  mixins: [mixin1, mixin2],

  // 如果是下面这样
  // mixin1 会将 mixin2 中的同名选项覆盖，然后先执行 mixin2，后执行 mixin1
  // mixins: [mixin2, mixin1]
}
</script>
```

```js title="以上代码输出结果"
mounted 时：
// mixin1: aaa-mixin2
// mixin2: aaa-mixin2

点击按钮时：
// aaa-mixin2
```

从输出结果来看：
- 由于两个 mixin 中的同名的生命周期钩子会合并到一个数组中，所以两个 mixin 中的钩子都会执行，所以 mounted 时就有两个输出；
- 又因为 mixin2 覆盖了 mixin1 中的同名选项，所以输出的都是 mixin2 中的值。

从执行顺序来看，仍然是 mixin1 先于 mixin2 执行，但这并不影响输出结果。

:::tip

此处可以理解为：
- Vue 先解析代码，将 mixin2 覆盖 mixin1 中的同名选项；
- 然后按照顺序执行代码，此时 mixin1 中的值已经被覆盖了，所以输出的就是 mixin2 的值。

:::

## 全局 mixin

mixin 也可以全局注册，但需要注意的是，一旦使用全局混入，它将影响每一个之后创建的 Vue 实例和 Vue 组件。

```js title="main.js"
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 在入口文件中，注册一个全局 mixin
Vue.mixin({
  created() {
    console.log('全局 mixin created')
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
```

以上代码，会将全局 mixin 中的选项（created）混入到 Vue 实例以及所有 Vue 组件实例中，导致 Vue 实例及每个 Vue 组件都会执行这个 created 钩子。

所以，建议谨慎使用全局 mixin，因为全局 mixin 可能会影响到所有组件，推荐的做法是在特定的组件中使用 mixin。

Vue2 的文档给了一个“使用恰当”的例子——为自定义选项注入处理逻辑。

```js
// 为自定义的选项 'myOption' 注入一个处理器
Vue.mixin({
  created: function () {
    var myOption = this.$options.myOption
    if (myOption) {
      console.log(myOption)
    }
  }
})

new Vue({
  myOption: 'hello!'
})

// => "hello!"
```

以上代码，当在 Vue 实例或 Vue 组件中定义了自定义选项 `myOption` 时，就会在 created 钩子中输出 `myOption` 的值。

## mixin 存在的问题

- **命名冲突**

  一个是上面提到的“命名冲突”的问题，虽然对于这个问题 Vue 有“合并”的补救措施，但是在实际开发中，往往会存在多个组件和 mixin，这使得我们的命名会越来越困难。另外，一旦第三方 mixin 作为 npm 包被添加进来，可能就会导致命名冲突。

- **依赖不透明**

  另一个问题是“依赖不透明”，或者说不好“溯源”，因为组件可以使用 mixin 中的数据或方法，mixin
  也可以使用组件中的数据或方法。这经常会导致一个问题就是，明明组件中没有定义这个属性或方法，但是组件中却能使用，这不符合我们的直觉。如果一个 mixin 在多个组件中使用，或者一个组件中使用了多个 mixin，代码就会变得混乱，难以维护。

:::info 参考链接

1. [Vue2 文档 - 混入](https://v2.cn.vuejs.org/v2/guide/mixins.html)

:::
