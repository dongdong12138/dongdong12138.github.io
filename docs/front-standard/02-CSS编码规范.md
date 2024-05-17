---
sidebar_position: 2
---

# CSS 编码规范

## 强制

### 样式名

样式名使用 `-` 连接，不要使用驼峰命名方式。

```css
/* bad */
.btnPrimary {}

/* good */
.btn-primary {}
```

样式名不能包含 ad、guanggao、ads、gg 等表示广告的关键词，避免元素被浏览器插件屏蔽。

```css
/* bad */
.ad-banner {}
.guanggao-banner {}
```

### 属性声明使用分号结尾

最后一行 CSS 属性，也应使用分号结尾。这有利于代码一致性，也有利于扩展新的 CSS 属性。

```css
/* bad */
.btn-primary {
  padding: 10px;
  margin: 10px
}

/* good */
.btn-primary {
  padding: 10px;
  margin: 10px;
}
```

### 属性声明单独成行？

大部分人都认为，不要在一行声明多条语句，这不利于可读性。

```css
.selector {
  color: #ababab;
  font-size: 14px;
  height: 100px;
  background-color: #f5fafd;
  border-radius: 8px;
  line-height: 100px;
  text-align: center;
  margin-top: 16px;
}
```

但实践中，我习惯在一行中声明多条语句，这并不影响可读性，反而使代码更简洁，利于查看更多的 CSS 代码。

但这并不意味着，要一味地把所有属性都写在一行，而是只将同一类的属性写在一行，所以也不会造成一行代码太长，不利于阅读的情况。

```css
.selector {
  /* 字体设置 */
  color: #ababab; font-size: 14px;
  /* 大小设置 */
  width: 100px; height: 100px;
  /* 背景设置 */
  background-color: #f5fafd;
  /* 边框设置 */
  border-radius: 8px;
  /* 其他设置 */
  line-height: 100px; text-align: center;
  /* 边距设置 */
  padding: 16px; margin-top: 16px;
}
```

注意：具体采用哪种方式，还是由团队规范决定。

### 简写属性

适当地使用简写属性，简写属性虽然可以简化代码，但也会降低代码可读性，并可能会引起属性覆盖，造成 bug。

如以下代码，其实只想设置元素的 `margin-top`，但使用简写形式，却同时设置了 `margin-top`、`margin-right`、`margin-bottom`、`margin-left`。如果该元素在其他地方设置了 `margin-right: 10px; margin-left: 10px;`，那么使用简写属性就会将这些属性覆盖，引起 bug。

```css
/* bad */
.selector {
  margin: 10px 0 0;
}

/* good */
.selector {
  margin-top: 10px;
}
```

## 推荐

### 缩进

使用 2 个空格或 4 个空格进行缩进，具体视团队规范而定。

个人更习惯使用 2 个空格。


### 选择器

使用 class 选择器，尽量避免使用 id 选择器、标签选择器（CSS reset 除外）。

```css
/* bad */
selector {}

/* bad */
#selector {}

/* good */
.selector {}
```

选择器层级尽量不超过 3 层，Less、SCSS 也是如此。

```css
.container .header .user-name {}
```

```scss
.container {
  .header {
    .user-name {
      // ...
    }
  }
}
```

### 代码格式

选择器与大括号之间保持一个空格。

```css
/* bad */
.selector{}

/* good */
.selector {}
```

最后一个大括号单独成行。

```css
/* bad */
.selector {
  padding: 10px; }

/* good */
.selector {
  padding: 10px;
}
```

CSS 属性名的冒号后面保持一个空格，与 CSS 属性值隔开。

```css
/* bad */
.selector {
  padding:10px;
}

/* good */
.selector {
  padding: 10px;
}
```

`>`、`+`、`~` 选择器前后保留一个空格。

```css
/* bad */
.selector>.child {}

/* good */
.selector > .child {}
```

`,` 逗号分隔的属性，逗号之后保留一个空格。

```css
/* bad */
.selector1,.selector2 {}

/* good */
.selector1, .selector2 {}
```

### 属性选择器

属性选择器的值使用双引号包围。

```css
/* bad */
input[type=text] {}

/* good */
input[type="text"] {}
```


### @import

尽量避免使用 `@import` 引入 CSS 文件，因为这会导致额外的 HTTP 请求，并可能引发其他意想不到的问题。

```html
<!-- bad -->
<style>
  @import url("example.css");
</style>

<!-- good -->
<link rel="stylesheet" href="example.css">
```



### 注释

注释内容与注释符之间使用一个空格隔开，以增加可读性。

```css
/* bad */
/*这是一个注释*/

/* good */
/* 这是一个注释 */
```

如果是 Less 或 SCSS，注释内容与注释符之间也应保持一个空格。

```scss
// bad
//这是一个注释

// good
// 这是一个注释
```

### 运算符

在使用 Less 或 SCSS 时，运算符两侧各保留一个空格。

```scss
// bad
.selector {
  padding: 10px/2;
}

// good
.selector {
  padding: 10px / 2;
}
```
