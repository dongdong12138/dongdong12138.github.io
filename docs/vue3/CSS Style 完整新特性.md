---
sidebar_position: 25
---

## 插槽选择器

```html title="App.vue"
<template>
  <A>
    <div class="a">私人定制div</div>
  </A>
</template>

<script setup>
import A from '@/components/A.vue'
</script>
```

```html title="A 组件"
<template>
  <div>
    我是插槽
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* 在组件内部修改外部传递进来的插槽内容的样式，无效果 */
.a {
  color: red;
}
</style>
```

默认情况下，作用域样式不会影响到 `<slot />` 渲染出来的内容，因为它们被认为是父组件所持有并传递进来的。

解决方案：使用 `slotted`：

```html title="A 组件"
<style scoped>
:slotted(.a) {
  color: red;
}
</style>
```

## 全局选择器

Vue2 中我们想加入全局样式，通常都是新建一个 `<style>` 标签，不加 `scoped`。

```html
<style>
div { color: red; }
</style>

<style lang="less" scoped>
</style>
```

现在有了更优雅的解决方案，使用 `global`。

```html
<style lang="less" scoped>
:global(div) {
  color: red;
}
</style>
```

## 动态 CSS

意思就是可以在 `<style>` 标签中访问 `<script>` 中的变量，通过 `v-bind` 这一 CSS 函数实现。

```html title="绑定单个值"
<template>
  <div class="div">Hello World</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const red = ref<string>('red')
</script>

<style lang="less" scoped>
.div {
  color: v-bind(red);
}
</style>
```

```html title="绑定对象中的值"
<template>
  <div class="div">Hello World</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const red = ref({
  color: 'pink'
})
</script>

<style lang="less" scoped>
.div {
  color: v-bind('red.color');
}
</style>
```

## CSS Module

`<style module>` 标签会被编译为 CSS Modules，并且将生成的 CSS 类作为 `$style` 对象的键暴露给组件。

使用场景一般用于 TSX 和 render 函数居多。

```html
<template>
  <div :class="$style.red">Hello World</div>
</template>

<style module>
.red {
  color: red; font-size: 20px;
}
</style>
```

也可以自定义注入名称（多个类可以放到数组中）。

```html
<template>
  <div :class="[zs.red, zs.border]">Hello World</div>
</template>

<style module="zs">
.red {
  color: red; font-size: 20px;
}
.border {
  border: 1px solid #ccc;
}
</style>
```

也可以与组合式 API 一同使用。

```html
<template>
  <div :class="[zs.red, zs.border]">Hello World</div>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue'

const css = useCssModule('zs')
</script>

<style module="zs">
.red {
  color: red; font-size: 20px;
}
.border {
  border: 1px solid #ccc;
}
</style>
```


