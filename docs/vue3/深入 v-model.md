---
sidebar_position: 19
---

## 组件 v-model

`v-model` 用在原生元素上与用在组件上的区别：
- 属性：`value` -> `modelValue`
- 事件：`input` -> `update:modelValue`

### v-model 用在原生元素上

```html
<input v-model="searchText" />
```

模板编译器会对 `v-model` 进行更冗长的等价展开，以上代码相当于：

```html
<input :value="searchText" @input="searchText = $event.target.value" />
```

### v-model 用在组件上

```html
<CustomInput v-model="searchText" />
```

以上代码相当于：

```html
<CustomInput :model-value="searchText" @update:model-value="newValue => searchText = newValue" />
```

CustomInput 组件的实现：

```html title="CustomInput.vue 写法一"
<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
</template>
```

```html title="CustomInput.vue 写法二"
<script setup>
import { computed } from 'vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <input v-model="value" />
</template>
```

## v-model 的参数

默认情况下，`v-model` 在组件上都是使用 `modelValue` 和 `update:modelValue`。

我们可以通过给 `v-model` 指定一个参数来更改这些名字：

```html
<MyComponent v-model:title="bookTitle" />
```

```html title="MyComponent.vue"
<script setup>
defineProps(['title'])
defineEmits(['update:title'])
</script>

<template>
  <input type="text" :value="title" @input="$emit('update:title', $event.target.value)" />
</template>
```

## 绑定多个 v-model

```html
<UserName v-model:first-name="first" v-model:last-name="last" />
```

```html
<script setup>
defineProps({
  firstName: String,
  lastName: String
})

defineEmits(['update:firstName', 'update:lastName'])
</script>

<template>
  <input type="text" :value="firstName" @input="$emit('update:firstName', $event.target.value)" />
  <input type="text" :value="lastName" @input="$emit('update:lastName', $event.target.value)" />
</template>
```

## 自定义 v-model 修饰符

```html
<MyComponent v-model.capitalize="myText" />
```

组件的 `v-model` 上所添加的修饰符，可以在组件的 `modelModifiers` 中访问到。

```html
<script setup>
const props = defineProps({
  modelValue: String,
  modelModifiers: { default: () => ({}) }
})

const emit = defineEmits(['update:modelValue'])

function emitValue(e) {
  let value = e.target.value
  if (props.modelModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1)
  }
  emit('update:modelValue', value)
}
</script>

<template>
  <input type="text" :value="modelValue" @input="emitValue" />
</template>
```

## 带参数的 v-model 修饰符

```html
<UserName v-model:first-name.capitalize="first" v-model:last-name.uppercase="last" />
```

```html
<script setup>
const props = defineProps({
  firstName: String,
  lastName: String,
  firstNameModifiers: { default: () => ({}) },
  lastNameModifiers: { default: () => ({}) }
})
defineEmits(['update:firstName', 'update:lastName'])

console.log(props.firstNameModifiers) // { capitalize: true }
console.log(props.lastNameModifiers) // { uppercase: true}
</script>
```
