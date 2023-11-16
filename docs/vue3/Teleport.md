---
sidebar_position: 15
---

`Teleport` 是一个传送组件，可以将模板渲染到指定 DOM 节点，它不受父级 `style`、`v-show` 等属性影响。

## 使用方法

在 `Teleport` 组件上使用 `to` 属性，指定传送的位置，支持 id、class、标签等选择器。

```html
<template>
  <Teleport to="body">
    <Loading></Loading>
  </Teleport>
  <Teleport to=".modal">
    <Loading></Loading>
  </Teleport>
  <Teleport to="#app">
    <Loading></Loading>
  </Teleport>
</template>
```

## 动态控制 Teleport

使用 `disabled` 属性，可以控制 `Teleport`。

```html
<!-- disabled 为 true，则 to 不生效 -->
<Teleport to="body" :disabled="true">
  <Loading></Loading>
</Teleport>
```
