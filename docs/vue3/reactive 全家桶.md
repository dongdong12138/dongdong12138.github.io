---
sidebar_position: 6
---

# reactive 全家桶

## reactive

- 为**复杂类型的数据**添加响应式，访问值时无需 `.value`；
- 不能为基本类型的数据添加响应式，会报错；
- 为基本类型的数据添加响应式可以用 `ref`；
- `ref` 可以为任意类型的数据添加响应式，如果是复杂类型的数据，`ref` 底层其实也是调用的 `reactive`。

```html
<script setup lang="ts">
import { reactive } from 'vue';

const person = reactive({ name: '张三' });

const handleChange = () => {
  person.name = '李四'
}
</script>

<template>
  <h2>{{ person }}</h2>
  <button @click="handleChange">change</button>
</template>
```

## 数组异步赋值问题

以下代码，对响应式的对象直接赋值，这样会导致该数据失去响应式。虽然数据在内存中会被修改，但视图不会更新。

```ts
import { reactive } from 'vue';

let arr = reactive([1, 2, 3]);
setTimeout(() => {
  // highlight-next-line
  arr = [4, 5, 6];
  console.log('arr:', arr);   // [4, 5, 6]
}, 1000);
```

```ts title="解决方案1：使用数组的方法"
import { reactive } from 'vue';

let arr = reactive([1, 2, 3]);
setTimeout(() => {
  // highlight-next-line
  arr.push(...[4, 5, 6]);
}, 1000);
```

```ts title="解决方案1：包装在一个对象中"
import { reactive } from 'vue';

let data = reactive({
  arr: [1, 2, 3]
});
setTimeout(() => {
  // highlight-next-line
  data.arr = [4, 5, 6];
}, 1000);
```

## readonly

```ts
import { reactive, readonly } from 'vue';

const lisi = reactive({ name: '李四' });
const lisiCopy = readonly(lisi);

const changeLisi = () => {
  lisi.name = '李四123';
  // lisiCopy 本无法修改，因为它是只读的
  // 但这个方法中也修改了 lisi，lisi 是响应式的，导致 lisiCopy 的修改也会体现在视图上
  lisiCopy.name = '李四123';
}
```

## shallowReactive

```ts
let obj = {
  a: 1,
  first: {
    b: 2,
    second: {
      c: 3
    }
  }
};
let state = shallowReactive(obj);
const change1 = () => {
  // 第一层的数据可以修改，会更新视图
  state.a = 2;
  // 第二层的数据只会在内存中修改，不会更新视图
  state.first.b = 3;
};
```
