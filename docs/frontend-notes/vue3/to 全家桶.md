---
sidebar_position: 7
---

# to 全家桶

## toRef

```ts
import { reactive, toRef } from 'vue';

// 如果原始对象不是响应式的，可以修改数据，但不会更新视图
// const obj = { a: 1, b: 2 };

// 如果原始对象是响应式的，可以修改数据，并且会更新视图
const obj = reactive({ a: 1, b: 2 });

const a = toRef(obj, 'a');

const handleAdd = () => {
  a.value += 1;
};
```

为什么原始对象不是响应式的，使用 `toRef` 转化成 ref 对象后，仍然无法更新视图？

```ts title="toRef 源码"
export function toRef<T extends object, K extends keyof T>(
  object: T,
  key: K,
  defaultValue?: T[K]
): ToRef<T[K]> {
  const val = object[key];
  // 1. 如果原始对象是 ref 对象就直接返回，否则调用 ObjectRefImpl 创建一个类 ref 对象并返回
  return isRef(val) ? val : (new ObjectRefImpl(object, key, defaultValue) as any);
}

class ObjectRefImpl<T extends object, K extends keyof T> {
  public readonly __v_isRef = true;

  constructor(
    private readonly _object: T,
    private readonly _key: K,
    private readonly _defaultValue?: T[K]
  ) {}

  // 2. 类 ref 对象只是做了值的改变，并未处理“收集依赖”和“触发依赖”的过程
  //    所以普通对象无法更新视图
  get value() {
    const val = this._object[this._key];
    return val === undefined ? (this._defaultValue as T[K]) : val;
  }

  set value(newVal) {
    this._object[this._key] = newVal;
  }
}
```

## toRefs

可以批量创建 ref 对象，方便我们解构使用。

```ts
import { reactive, toRefs } from 'vue';

const obj = reactive({ a: 1, b: 2 });
const { a, b } = toRefs(obj);

const handleAdd = () => {
  a.value += 1;
  b.value += 1;
};
```

## toRaw

将响应式对象转化为普通对象。

```ts
import { reactive, toRaw } from 'vue';

// obj 是响应式对象
const obj = reactive({ a: 1, b: 2 });

// state 是普通对象，不具有响应式
const state = toRaw(obj);
```
