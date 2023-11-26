---
date: 2023-11-25
slug: vue3-project-config
title: Vue3 项目工程化配置
authors: [barry]
tags: [Vue3, 工程化]
---

本文介绍了对基于 Vite 创建的 Vue3 项目，如何使用 ESLint、Prettier、Husky、commitlint、lint-staged、Stylelint、CSpell 等对项目进行配置。

## 使用 create-vue 创建项目

现在官方推荐使用 [create-vue](https://github.com/vuejs/create-vue) 来创建基于 Vite 的新项目。

```shell
pnpm create vue@latest
```

:::warning

Vite 需要 Node.js 版本 18+，20+。然而，有些模板需要依赖更高的 Node 版本才能正常运行，当你的包管理器发出警告时，请注意升级你的 Node 版本。

:::

本文使用的 node 版本为 v18.16.0，pnpm 版本为 8.10.2。

通过以下配置，可以修改启动项目的域名端口，设置自动打开浏览器：

```ts title="vite.config.ts"
export default defineConfig({
  // ...
  server: {
    host: 'localhost',  // 域名
    port: 9999,         // 端口
    open: true          // 自动打开浏览器
  }
})
```

## 配置 ESLint 与 Prettier

[ESLint](https://eslint.org/) 可以对我们的代码进行校验，在代码运行前就可以发现一些语法错误和潜在的 bug。

[Prettier](https://prettier.io/) 是代码格式化工具，用于检测代码中的格式问题，比如单行代码长度、Tab 长度、空格等。

ESLint 偏向于把控项目的代码质量，而 Prettier 更偏向于统一项目的代码风格，两者一般结合使用。

:::tip

在使用 `pnpm create vue@latest` 创建项目时，可根据命令行的提示，选择是否安装 ESLint 和 Prettier。如果选择了是，那么 Vue 会帮我们对 ESLint 和 Prettier 做一些简单的配置。

后文假定开发者在创建项目时，没有选择安装 ESLint 和 Prettier。

:::

### 1. 安装相关依赖

```shell
pnpm install eslint eslint-plugin-vue eslint-config-prettier prettier eslint-plugin-import eslint-plugin-prettier eslint-config-airbnb-base -D
```

依赖解释：
- `eslint`：ESLint 的核心库
- `eslint-plugin-vue`：ESLint 在 Vue 里的代码规范
- `eslint-config-prettier`：ESLint 结合 Prettier 的格式化
- `prettier`：Prettier 格式化代码的核心库
- `eslint-plugin-import`：项目里面支持 ESLint
- `eslint-plugin-prettier`：将 Prettier 结合 ESLint 的插件
- `eslint-config-airbnb-base`：Airbnb 的代码规范（依赖 `plugin-import`）

### 2. 配置脚本并执行

在 package.json 的 scripts 中配置以下脚本：

```json title="package.json"
{
  "scripts": {
    // ...
    "lint:create": "eslint --init"
  }
}
```

执行以下命令，根据命令行提示，结合自己实际项目进行选择，随后便会在项目根目录中创建 ESLint 的配置文件，比如 .eslintrc.cjs。

```shell
pnpm lint:create
```

### 3. 安装 TypeScript 相关依赖

:::tip

请注意，在执行上一步的 `pnpm lint:create` 时，会让你选择项目是否使用了 TypeScript，如果选择 Yes，会提示你是否要安装 TypeScript 的一些相关依赖。

后文假定开发者没有安装 TypeScript 相关依赖。

:::

如果项目用到了 TypeScript，还需要安装下面这些依赖：

```shell
pnpm install typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-import-resolver-alias @types/eslint @types/node -D
```

依赖解释：
- `@typescript-eslint/parser`：ESLint 解析器，用于解析 TS，检查 TS 代码
- `@typescript-eslint/eslint-plugin`：ESLint 插件，包含了已经定义好的检测 TS 代码的规范
- `eslint-import-resolver-alias`：让我们在用 `import` 的时候可以使用 `@` 别名

### 4. 修改 .eslintrc.cjs

因为 ESLint 是 node 工具，所以文件名是 `.cjs` 结尾，这是 CommonJS 规范。对应的，`.mjs` 就是 ESModule 规范。

```js
module.exports = {
  
  // 环境
  env: {
    browser: true,  // 浏览器
    es2021: true,
    node: true,     // node 环境
  },
  
  // 扩展的 ESLint 规范语法，可以被继承的规则
  // 字符串数组：每个配置继承它前面的配置
  // 前缀 eslint-config- 可省略
  extends: [
    'plugin:vue/vue3-strongly-recommended',   // 由 eslint-plugin-vue 提供
    'airbnb-base',  // 由 eslint-config-airbnb-base 提供
    'prettier'      // 由 eslint-config-prettier 提供
  ],
  
  // ESLint 会对代码进行检验
  // parser 的作用是将代码转换为 ESTree（AST），ESLint 会对 ESTree 进行校验
  parser: 'vue-eslint-parser',
  
  // 解析器的配置项
  parserOptions: {
    ecmaVersion: 'latest',    // ES 的版本号，或者年份都可以
    parser: '@typescript-eslint/parser',
    sourceType: 'module',     // 源码类型，默认是 script，ES 模块用 module
    ecmaFeatures: {           // 额外的语言类型
      tsx: true,
      jsx: true,
    },
  },
  
  // 全局自定义的宏，这样在源文件中使用全局变量就不会报错或者警告
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefault: 'readonly',
  },
  
  // 插件
  // 前缀 eslint-plugin-, 可省略
  // Vue 官方提供了一个 ESLint 插件 eslint-plugin-vue，它提供了 parser 和 rules
  // parser 为 vue-eslint-parser，放在上面的 parsr 字段，rules 放在 extends 字段里，选择合适的规则
  plugins: [
    'vue',
    '@typescript-eslint'
  ],

  settings: {
    // 设置项目内的别名
    'import/reslover': {
      alias: {
        map: [['@', './src']],
      },
    },
    // 允许的扩展名
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.mjs'],
  },
  
  // 自定义规则，可覆盖上面 extends 继承的第三方库的规则
  rules: {
    'import/no-extraneous-dependencies': 0,
    'no-param-reassing': 0,
    'vue/multi-word-commponent-names': 0,
    'vue/attribute-hyphenation': 0,
    'vue/v-on-event-hyphenation': 0,
  },

}
```

### 5. 修改 package.json

```json title="添加脚本命令"
{
  "scripts": {
    // ...
    "lint": "eslint "src/*/.{js,vue,ts}" --fix"
  }
}
```

### 6. 修改 vite.config.js

```shell title="安装依赖"
pnpm install vite-plugin-eslint -D
```

依赖解释：
- `vite-plugin-eslint`：这是 Vite 的一个插件，让项目可以方便的得到 ESLint 的支持。

```js title="vite.config.js"
// 引入插件
import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin()  // 使用插件
  ],
})
```

### 7. 添加常见配置文件

在项目根目录下新建以下文件：.eslintrcignore、.prettierrc.cjs、.prettierignore。

```ignorelang title=".eslintrcignore"
*.sh
node_modules
*.md
*.woff
*.ttf
.vscode
.idea
dist
/public
/docs
.husky
/bin
.eslintrc.js
prettier.config.js
/src/mock/*

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

.DS_Store
dist-ssr
*.local

/cypress/videos/
/cypress/screenshots/

# Editor directories and files
.vscode
!.vscode/extensions.json
.idea
*.suo
*.njsproj
*.sln
*.sw?

components.d.ts
```

```js title=".prettierrc.cjs"
module.exports = {
  printWidth: 80,   // 一行最多多少个字符
  tabWidth: 2,      // 使用 2 个空格缩进
  useTabs: false,   // 不使用 tab 缩进，而使用空格，因为 Windows、Mac 的 tab 缩进可能不一样
  semi: true,       // 行尾需要分号
  singleQuote: true,  // 使用单引号
  quoteProps: 'as-needed',  // 对象的 key 仅在必要时使用引号
  jsxSingleQuote: false,    // jsx 不使用单引号，而使用双引号
  trailingComma: 'es5',     // 尾随逗号
  bracketSpacing: true,     // 大括号内的收尾需要空格
  arrowParens: 'always',    // 箭头函数，只有一个参数的时候，也需要括号
  rangeStart: 0,            // 每个文件格式化的范围是文件的全部内容
  rangeEnd: Infinity,
  requirePragma: false,     // 不需要写文件开头的 @prettier
  insertPragma: false,      // 不需要自动在文件开头插入 @prettier
  proseWrap: 'always',      // 使用默认的折行标准
  htmlWhitespaceSensitivity: 'css',   // 根据显示样式决定 html 要不要折行
  endOfLine: 'lf',          // 换行符使用 lf
}
```

```ignorelang title=".prettierignore"
/dist/*
.local
.output.js
/node_modules/**
src/.DS_Store

**/*.svg
**/*.sh

/public/*
components.d.ts
```

### 8. 修改 package.json

利用 Prettier 手动格式化一些代码风格问题。

```json title="package.json"
{
  "scripts": {
    // ...
    "prettier-format": "prettier --config .prettierrc.cjs "src/*/.{vue,js,ts}" --write"
  }
}
```

### 9. tsconfig.json

```json title="tsconfig.json"
{
  "compilerOptions": {
    "target": "ESNext",   // 指定 ES 的目标版本
    "useDefineForClassFields": true,
    "module": "ESNext",
    "moduleResolution": "node",   // 决定如何处理模块
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "lib": [    // 编译过程中需要引入的库文件的列表
      "ESNext",
      "DOM",
      "DOM.Iterable"
    ],
    "types": [    // 默认所有可见的 "@types" 包会在编译过程中被包含进来
      "vite/client"
    ],
    "skipLibCheck": true,
    "noEmit": true,
    "baseUrl": ".",   // 解析非相对模块名的基准目录
    "paths": {        // 模块名到基于 baseurl 的路径映射的列表
      "@/": [
        "scr/"
      ],
      "*.ts": [
        "*"
      ]
    }
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.d.ts",
    "src/**/*.tsx",
    "src/**/*.vue"
  ],
  "references": [
    {
      "path": "./tsconfig.node.json"
    }
  ]
}
```

## 配置 Husky、lint-staged、commitlint

[Husky](https://typicode.github.io/husky/#/) 是一个为 git 客户端增加 hook 函数的工具，在执行一些 git 操作之前会触发这些 hook 函数。比如说上面的 ESLint 校验、Prettier 格式化代码，我们都是手动执行的命令。使用 Husky，就可以在我们提交代码（`git commit`）之前，自动执行这些命令。

[lint-staged](https://github.com/lint-staged/lint-staged) 用于对 git 暂存区（被 `git add` 的文件）中的代码执行一些操作，如校验、格式化等。

[commitlint](https://commitlint.js.org/#/) 是对我们 git commit 提交的注释进行校验的工具。

### Husky、lint-staged

```shell title="安装依赖"
pnpm install husky lint-staged -D
```

配置 package.json 文件（新项目需要先 `git init`）：

```json title="package.json"
{
  "scripts": {
    // ...
    "prepare": "husky install"
  }
}
```

执行 `pnpm run prepare`，将 husky 安装完毕，此时项目根目录中会创建 .husky 目录。

然后就可以添加各种 git hooks 钩子，如 `pre-commit`。

`pre-commit` 一般添加的是 `lint-staged`，去对 git 暂存区的代码做一些格式化的操作。

执行以下命令，就会在 .husky 目录中创建 pre-commit bash 文件。

`npx husky add .husky/pre-commit "npx lint-staged"`。

在 package.json 中添加 `lint-staged`。

```json title="package.json"
{
  "scripts": {},
  "lint-staged": {
    "*.{js,jsx,vue,ts,tsx}": [
      "pnpm lint",
      "pnpm prettier-format"
    ]
  }
}
```

然后执行 `git add`、`git commit`，就会对提交到暂存区中的代码进行检验和格式化。

### commitlint

```shell title="安装依赖"
pnpm install @commitlint/config-conventional @commitlint/cli -D
```

执行以下命令，在 .husky 目录中添加 commit-msg 钩子：

```shell
npx husky add .husky/commit-msg "npx --no -- commitlint --edit ${1}"
```

新建 commitlint 的配置文件 commitlint.config.cjs：

```js title="commitlint.config.cjs"
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',    // 编译相关的修改，例如发布版本，对项目构建或者依赖的改动
        'feat',     // 新功能（feature）
        'fix',      // 修复 bug
        'update',   // 更新某功能
        'refactor', // 重构
        'docs',     // 文档
        'chore',    // 构建过程或者辅助工具的变动，如增加依赖库等
        'style',    // 不影响代码运行的变动
        'revert',   // 撤销 commit，回滚到上一个版本
        'perf',     // 性能优化
        'test',     // 测试（单元，集成测试）
      ],
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 74],
  },
}
```

使用 `git commit -m "提交说明"` 进行提交，提交说明应尽量清晰明了，说明本次提交的目的。推荐使用 Angular 规范，这是目前使用最广的写法。

常用的 git hooks：
- `pre-commit`：由 `git commit` 调用，在 commit 之前执行；
- `commit-msg`：由 `git commit` 或 `git merge` 调用；
- `pre-merge-commit`：由 `git merge` 调用，在 merge 之前执行；
- `pre-push`：由 `git push` 调用，在 push 之前执行，防止进行推送。

## Stylelint

[Stylelint](https://stylelint.io/) 用于检查 CSS 代码中的错误或者风格，让 CSS 代码保持一致的编码风格。

1. 安装 VSCode 插件（Stylelint）

2. 修改 VSCode 的 `settings.json`，添加下面代码：

    ```json
    {
      "editor.codeActionsOnSave": {
        "source.fixAll.stylelint": true
      },
      "stylelint.validate": ["css", "less", "scss", "vue"]
    }
    ```

3. 安装依赖

    ```shell title="安装依赖"
    pnpm install stylelint stylelint-config-standard -D
    ```

4. 创建配置文件

    在项目根目录下创建 .stylelintrc.cjs：
    
    ```js title=".stylelintrc.cjs"
    module.exports = {
      extends: ['stylelint-config-standard'],
    }
    ```
    
    这是一个标准样式库，可以自动添加一些样式规则在 stylelintrc.cjs 文件里面。

5. 执行 `npx stylelint "**/*.css"` 命令，发现项目里面的 style.css 全局样式文件报错很多，按 ctrl+s 就会执行自动格式化（这是因为第 2 步时在 VSCode 的 setting.json 中做了一些配置）

6. 增加 vue 里面的样式支持（附带 less 和 scss 的支持）

    ```shell title="支持 less"
    pnpm install stylelint-less stylelint-config-recommended-less -D
    ```

    ```shell title="支持 scss"
    pnpm install stylelint-scss stylelint-config-recommended-scss postcss -D
    ```

    ```shell title="对 vue 里面样式的支持，vue 的样式需要依赖这些库"
    pnpm install postcss-html stylelint-config-standard-scss stylelint-config-recommended-vue postcss -D
    ```

    Vite 默认提供了对 .scss .sass .less .styl .stylus 文件的内置支持，不用再安装特定插件和预处理器：

    ```js
    extends: [
      'stylelint-config-standard',
      'stylelint-config-recommended-less',
      'stylelint-config-recommended-scss',
      'stylelint-config-recommended-vue'
    ]
    ```
    
    ```js title="scss 的 extends"
    extends: [
      'stylelint-config-standard-scss',
      'stylelint-config-recommended-vue/scss'
    ]
    ```

7. package.json 文件添加以下脚本

   ```json title="对 CSS 代码进行校验并修复"
   {
      "scripts": {
        // ...
        "lint:css": "stylelint --fix \"**/*.{vue,css,sass,scss}\" --cache --cache-location node_modules/.cache/stylelint/"
      }
   }
   ```

8. 给 Vite 添加插件

    ```shell
    pnpm install vite-plugin-stylelint -D
    ```

    修改 vite.config.js 文件：

    ```js
    import StylelintPlugin from 'vite-plugin-stylelint'
    
    plugins: [StylelintPlugin({ fix: true })]
    ```

9. 添加到 lint-staged 中，在暂存区对文件进行格式化

    ```json title="package.json"
    "lint-staged": {
      "*.{js,jsx,vue,ts,tsx}": [
        "npm run lint",
        "npm run prettier-format"
      ],
      "*.{vue,less,css,scss,sass}": [
        "npm run lint:css"
      ]
    }
    ``` 

10. 添加 .stylelintignore 文件

    ```ignorelang
    /dist/*
    /public/*
    ``` 

11. .stylelintrc.cjs 内部的其他配置

      ```js
      module.exports = {
        extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue'],
        overrides: [
          // 若项目中存在 scss 文件，添加以下配置
          {
            files: ['*.scss', '**/*.scss'],
            customSyntax: 'postcss-scss',
            extends: ['stylelint-config-recommended-scss'],
          },
          // 若项目中存在 less 文件，添加以下配置
          {
            files: ['*.less', '**/*.less'],
            customSyntax: 'postcss-less',
            extends: ['stylelint-config-recommended-less'],
          },
        ],
      }
      ```

## 环境变量和模式

- 开发环境：dev
- 测试使用的预发环境：pre
- 生产环境：pro

在 package.json 文件里面写上对应的脚本：

```json title="package.json"
"build:pre": "vue-tsc --noEmit && vite build --mode staging",
"build:pro": "vue-tsc --noEmit && vite build --mode production"
```

新建文件：.env、.env.staging、.env.production。

```js title=".env"
// 开发的时候，axios 请求地址不一样
VITE_BASE_URL = 'http://dev.jd.com/api'
```

```js title=".env.staging"
VITE_BASE_URL = 'http://pre.jd.com/api'
```

```js title=".env.production"
VITE_BASE_URL = 'http://pro.jd.com/api'
```

```ts title="main.ts"
import { createVue } from 'vue'
console.log(import.meta.env.VITE_BASE_URL)
```
