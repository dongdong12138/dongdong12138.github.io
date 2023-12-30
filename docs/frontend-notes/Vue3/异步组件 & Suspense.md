---
sidebar_position: 14
---

## 异步组件

代码分包：在大型应用中，我们可能需要将应用分割成小一些的代码块，以减小主包的体积。

使用异步组件可以做到这一点。

在 `<script setup>` 中可以直接使用**顶层 `await`**，代码会被编译成 `async setup()`。

```html
<script setup>
const post = await fetch(`/api/post/1`).then(r => r.json())
</script>
```

父组件通过 `defineAsyncComponent()` 和 `import()` 来引入子组件，便可以实现“分包”。

```html title="父组件"
<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

// 引入子组件-函数形式
const Dialog = defineAsyncComponent(() => import('../../components/Dialog/index.vue'))

// 引入子组件-对象形式
const AsyncComp = defineAsyncComponent({
  loader: () => import('./Foo.vue'),  // 加载函数
  loadingComponent: LoadingComponent, // 加载异步组件时使用的组件
  delay: 200,     // 展示加载组件前的延迟时间，默认为 200ms
  errorComponent: ErrorComponent,     // 加载失败后展示的组件
  timeout: 3000   // 默认值是 Infinity，如果超时也会显示 errorComponent
})
</script>
```

## Suspense

异步组件必须在 `<Suspense>` 中使用，`<Suspense>` 组件有两个插槽。

```html
<Suspense>
  <template #default>
    <Dialog>
      <template #default>
        <div>我在哪儿</div>
      </template>
    </Dialog>
  </template>

  <template #fallback>
    <Loading />
  </template>
</Suspense>
```
