---
sidebar_position: 31
---

```ts title="reactive"
import { reactive } from 'vue'

interface InterState {
  name: string
}

const state: InterState = reactive({ name: '张三' })
```

```ts title="ref"
import { ref, Ref } from 'vue'

interface InterItem {
  filmId: number
  name: string
}

const name: Ref<string> = ref('张三')
const age = ref<number>(18)
const divEle = ref<HTMLDivElement>()
const filmList = ref<InterItem[]>([])
```

```ts title="computed"
import { ref, Ref, computed } from 'vue'

const name: Ref<string> = ref('张三')

const computedName = computed<string>(() => {
  return name.value.substring(0, 1).toUpperCase() + name.value.substring(1)
})
```

```html title="组件接收参数"
<script setup lang="ts">
interface InterObj {
  name: string
  age: number
}
const props = defineProps<{
  name: string
  obj: InterObj
}>()
</script>
```

```html title="组件触发事件"
<script setup lang="ts">
// const emit = defineEmits(['on-click'])

const emit = defineEmits<{
  // 第一个参数 e 是固定的，是自定义事件的名字
  (e: 'on-click', name: string): void
}>()
  
const handleClick = () => {
  emit('on-click', '张三')
}
</script>
```
