---
date: 2023-10-28
slug: vue-slot
title: Vue slot 详解
authors: [barry]
tags: [Vue, slot]
---

## 基础使用

插槽允许我们向组件中插入一段模板代码（比如 HTML 或组件），以此提高组件的可复用性和扩展性。

### 在子组件中定义插槽

通过在组件中使用 `<slot></slot>` 标签，我们可以定义一个或多个插槽。

```html
<template>
  <div>
    <slot></slot>
    <slot></slot>
    <slot></slot>
  </div>
</template>
```

在插槽中，我们也可以指定默认内容。如果没有向该组件的插槽传入内容，就会显示插槽的默认内容。

```html
<template>
  <div>
    <slot>
      <em>我是默认内容</em>
      <img src="xxx.jpg" alt="xxx">
    </slot>
  </div>
</template>
```

### 在父组件中使用插槽

假设上面的子组件名为 `MyComponent`，那么我们可以在父组件中引入 `MyComponent` 组件并使用。

```html
<template>
  <div>
    <my-component>
      
      <!-- 插入一段 HTML -->
      <p>我是父组件传递给子组件插槽的内容</p>
      
      <!-- 插入一个图标组件 -->
      <font-awesome-icon name="user"></font-awesome-icon>
      
    </my-component>
  </div>
</template>
```

注意，如果 `MyComponent` 组件中没有使用 `<slot></slot>` 定义插槽，那么 `<my-component>` 组件的起始标签和结束标签之间的内容将会被抛弃。

## 默认插槽

```html title="子组件 MyComponent"
<template>
  <div>
    <h1>默认插槽</h1>

    <!-- 默认插槽，父组件传过来的内容会在这里渲染 -->
    <slot></slot>

    <!-- 当父组件没有向子组件的插槽传递内容时，就会渲染插槽中的默认内容 -->
    <slot>我是默认内容</slot>

    <!-- 若组件中定义了多个默认插槽，那么这些插槽都可以接收到父组件传递的内容并渲染 -->
    <slot></slot>
    <slot></slot>
    <slot></slot>
  </div>
</template>
```

```html title="父组件"
<template>
  <div>
    <my-component>
      <p>我是父组件传递给子组件插槽的内容</p>
    </my-component>
  </div>
</template>
```

## 具名插槽

在子组件的 `<slot></slot>` 标签上使用 `name` 属性，可以为插槽取一个名字。

```html title="子组件 MyComponent"
<template>
  <div>
    <h1>具名插槽</h1>
    <slot name="header"></slot>
    <slot name="content"></slot>
    <slot name="footer"></slot>
  </div>
</template>
```

父组件通过 `v-slot` 指令，可以指定将内容放到子组件的哪个插槽。注意，`v-slot` 要与 `template` 标签配合使用。

```html title="父组件"
<template>
  <div>
    <my-component>
      
      <template v-slot:header>
        <p>这是传递给 header 插槽的内容</p>
      </template>
      
      <template v-slot:content>
        <p>这是传递给 content 插槽的内容</p>
      </template>
      
      <template v-slot:footer>
        <p>这是传递给 footer 插槽的内容</p>
      </template>
      
    </my-component>
  </div>
</template>
```

:::warning 注意

- 在 Vue2.6.0 中，已经废弃了旧的 `slot` 和 `slot-scope` 属性，但仍然可以使用；
- `slot` 和 `slot-scope` 不会出现在 Vue3 中。

:::

## 默认插槽与具名插槽的关系

默认插槽 `<slot></slot>` 相当于具名插槽 `<slot name="default"></slot>`。

```html title="子组件 MyComponent"
<template>
  <div>

    <!-- 默认插槽 -->
    <slot></slot>

    <!-- 相当于 -->
    <slot name="default"></slot>

  </div>
</template>
```

```html title="父组件"
<template>
  <div>
    <my-component>

      <p>这是传递给默认插槽的内容</p>

      <!-- 相当于 -->
      <template v-slot:default>
        <p>这是传递给默认插槽的内容</p>
      </template>

    </my-component>
  </div>
</template>
```

## 作用域插槽

如果希望父组件传递的插槽内容能够访问到子组件中的数据，那么我们可以将子组件的数据绑定到 `<slot></slot>` 标签上，父组件的插槽内容就可以访问到子组件的数据，这就是作用域插槽。

```html title="子组件 MyComponent"
<template>
  <div>

    <!-- 将数据绑定给默认插槽 -->
    <slot :user="user"></slot>

    <!-- 将数据绑定给具名插槽 -->
    <!--
      注意，插槽上的 name 是 Vue 特别保留的属性，不会作为 props 传递给插槽，
      所以父组件传递的插槽内容无法访问到 name 属性
    -->
    <slot name="content" :user="user"></slot>

  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      user: { name: '张三', age: 18 }
    }
  }
}
</script>
```

```html title="父组件"
<template>
  <div>
    <my-component>

      <!-- 获取默认插槽数据（这里使用了解构语法） -->
      <template v-slot="{ user }">
        <p>{{ user.name }}</p>
      </template>

      <!-- 获取具名插槽数据 -->
      <template v-slot:content="slotProps">
        <p>{{ slotProps.user }}</p>
      </template>

    </my-component>
  </div>
</template>
```

## 编译作用域

插槽内容是在父组件中编译后，再传递给子组件的，所以插槽内容也可以访问到父组件中的数据或方法。

```html
<template>
  <div id="app">
    <my-component>

      <!-- 传递给子组件的插槽内容，也可以访问到父组件的数据或方法 -->
      <template v-slot:content>
        <p>{{ msg }}</p>
        <button @click="showMsg">click me</button>
      </template>

    </my-component>
  </div>
</template>

<script>
import MyComponent from './components/MyComponent.vue'

export default {
  name: 'App',
  components: { MyComponent },
  data() {
    return {
      msg: '父组件数据'
    }
  },
  methods: {
    showMsg() {
      console.log(this.msg)
    }
  }
}
</script>
```

## 插槽样式

在子组件中给 `<slot></slot>` 标签设置样式是不会生效的，因为 `<slot></slot>` 标签会被父组件传递过来的内容替换掉。

```html title="子组件 MyComponent"
<template>
  <div>
    <slot style="color: red"></slot>
  </div>
</template>
```

```html title="父组件"
<template>
  <div>
    <my-component>
      <p style="color: green">我是父组件传递给子组件插槽的内容</p>
    </my-component>
  </div>
</template>
```

以上代码，由于父组件传递过去的 `p` 标签会替换子组件的 `slot` 标签，所以字体最终呈现绿色。

但是，如果子组件的插槽定义了带有样式的默认内容，且父组件没有传递插槽内容，此时插槽默认内容的样式会生效。

```html title="子组件 MyComponent"
<template>
  <div>
    <slot style="color: red">
      <em style="color: blue">我是默认内容</em>
    </slot>
  </div>
</template>
```

```html title="父组件"
<template>
  <div>
    <my-component></my-component>
  </div>
</template>
```

以上代码，插槽的默认内容将呈现蓝色。

## 其他

### 动态插槽

```html
<template>
  <base-layout>
    <template v-slot:[slotName]>
      ...
    </template>
  </base-layout>
</template>

<script>
  export default {
    data() {
      return {
        slotName: 'header'
      }
    }
  }
</script>
```

### 具名插槽的简写形式

具名插槽的 `v-slot:` 也可以简写为 `#`。

```html title="父组件"
<template>
  <div>
    <my-component>
       
      <template #header>
        <p>这是传递给 header 插槽的内容</p>
      </template>
       
      <template #content>
        <p>这是传递给 content 插槽的内容</p>
      </template>
       
      <template #footer="footerProps">
        <p>这是传递给 footer 插槽的内容，{{ footerProps }}</p>
      </template>
       
    </my-component>
  </div>
</template>
```

注意，对于默认插槽，必须写成 `#default`，而不能只写一个 `#`。

```html

<template>
  <div>
    <my-component>

      <!-- 只写一个 # 是不对的 -->
      <template #>
        <p>这是传递给默认插槽的内容</p>
      </template>

      <!-- 更不能写成这样 -->
      <template #="{ user }">
        <p>{{ user.name }}</p>
      </template>

      <!-- 要写成 #default 才行 -->
      <template #default>
        <p>这是传递给默认插槽的内容</p>
      </template>

      <!-- 或者 -->
      <template #default="{ user }">
        <p>{{ user.name }}</p>
      </template>

    </my-component>
  </div>
</template>
```

:::info 参考链接

1. [Vue2 文档 - 插槽](https://v2.cn.vuejs.org/v2/guide/components-slots.html)
2. [Vue3 文档 - 插槽](https://cn.vuejs.org/guide/components/slots.html)

:::
