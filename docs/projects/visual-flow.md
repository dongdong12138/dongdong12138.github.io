# VisualFlow

## Webstorm 中引入 vue 组件报错

报错信息：

```
Cannot find module ‘../views/HomeView.vue‘ or its corresponding type declarations.
```

解决办法：在根目录新建以下文件：

```ts title="env.d.ts"
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
```

## run-p

package.json 的 scripts 中的 `run-p`，表示并行执行后面的命令。如以下示例，只要执行 check 脚本，就会并行执行后面的四个命令，而不用一个个地手动执行。

```json title="package.json"
{
  "scripts": {
    "type-check": "vue-tsc --noEmit -p tsconfig.app.json --composite false",
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore",
    "lint:css": "stylelint --fix \"**/*.{vue,css,sass,scss}\" --cache --cache-location node_modules/.cache/stylelint/",
    "spellcheck": "cspell lint --dot --gitignore --color --cache --show-suggestions \"src/**/*.@(html|js|cjs|mjs|ts|tsx|css|scss|md|vue)\"",
    "check": "run-p type-check lint lint:css spellcheck"
  }
}
```

## 提交代码跳过检查

提交代码时，如果要跳过 Husky 的 pre-commit 和 commit-msg 这两个 hook 的检查，可以使用如下提交方式：

```shell
# -n: --no-verify
git commit -m "提交信息" -n
```
