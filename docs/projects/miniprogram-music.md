# 小程序-云音乐

## 小程序中使用 iconfont

由于小程序中不支持 css 文件，只支持 wxss 文件，所以我们可以将 iconfont 生成的 css 文件复制到小程序中，后缀改成 `.wxss`。

如果是全局使用，可以在 app.wxss 中使用 `@import` 引入：

```css title="app.wxss 中引入"
@import "/static/iconfont.wxss";
```

```html title="使用"
<text class="iconfont icon-icon-ranking"></text>
```

## 前后端交互

注意点：
- 协议必须是 `https` 协议，但开发时也可以设置不校验合法域名
- 一个接口最多配置 20 个域名
- 并发限制上限是 10 个
