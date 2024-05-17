---
sidebar_position: 1
---

# HTML 编码规范

## 强制

### HTML5 DOCTYPE

使用 HTML5 文档类型，以保证浏览器使用标准模式渲染页面并且页面在不同浏览器中表现一致。

```html
<!-- bad -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<!-- good -->
<!DOCTYPE html>
```

### UTF-8

使用 UTF-8 编码，有助于浏览器更好地解析文档，避免出现乱码。

```html
<!-- bad -->
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">

<!-- good -->
<meta charset="UTF-8">
```

### IE 兼容模式

指定 IE 兼容模式，让 IE 使用最新模式解析渲染页面。

```html
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
```

### 属性值使用双引号

属性值使用双引号，而不要使用单引号。JS、TS 中才使用单引号。

```html
<!-- bad -->
<input type='text' value='Hello World' />

<!-- good -->
<input type="text" value="Hello World" />
```

## 推荐

### 缩进

使用 2 个空格或 4 个空格进行缩进，具体视团队规范而定。

个人更习惯使用 2 个空格。

### html lang

指定 html 标签的 `lang` 属性，有助于读屏、翻译等工具的工作。

```html
<!-- bad -->
<html>
</html>

<!-- good -->
<html lang="zh-CN">
</html>
```

### 引入 CSS 和 JS

一般来说，CSS 应在 `head` 标签中引入，JS 除了基础库等比较基础性的文件，其他的应在 `body` 标签末尾引入。

### 自闭合标签

自闭合标签末尾保留斜线，且使用空格分隔。

这可以明确表达该标签已被闭合的语义，且符合 React 的 JSX 语法规范。

```html
<!-- bad -->
<img src="image.jpg" alt="image">

<!-- good -->
<img src="image.jpg" alt="image" />
```

### 自定义属性

自定义属性，以 `data-` 为前缀。

```html
<!-- bad -->
<div modal="toggle"></div>

<!-- good -->
<div data-modal="toggle"></div>
```

### 注释

单行注释内容使用空格隔开，多行注释内容缩进。

注意，HTML 代码一般不会经过预处理，出于安全考虑，不要在 HTML 中出现任何关于业务相关敏感信息的注释。

```html
<!-- 单行注释 -->

<!--
  多行注释
  多行注释
-->
```

### class 和 id 的命名

class 和 id 的命名，使用小写字母，多个单词使用 `-` 分隔。

```html
<!-- bad -->
<div class="My-Class myClass"></div>

<!-- good -->
<div class="my-class"></div>
```

## 参考

### 属性顺序

HTML 属性应该按照特定的顺序出现以保证易读性。

`class`、`id` 放在最前，然后是标签自定义属性（`data-*`），然后是标签自身的属性，然后是 `style`，事件相关的放在最后。

### HTML 语义化

遵循 HTML 语义化的好处：
- 有利于团队阅读和维护；
- 有利于搜索引擎检索（SEO）；
- 在 CSS 意外挂掉时也能有较好的展示。
