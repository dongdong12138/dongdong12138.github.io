---
sidebar_position: 24
---

## scoped

scoped 三条渲染规则：

- 给 DOM 节点加一个不重复的 `data` 属性（形如：`data-v-123`）来表示它的唯一性
- 在 CSS 选择器的末尾加一个当前组件的 `data` 属性选择器（如 `[data-v-123]`）来私有化样式
- 如果组件内部包含其他组件，只会给其他组件的最外层标签加上当前组件的 `data` 属性

## 样式穿透

```html title=":deep()"
<style scoped lang="less">
.ipt {
  :deep(input) {
    background: red;
  }
}
</style>
```
