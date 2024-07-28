"use strict";(self.webpackChunkdongdong_12138_github_io=self.webpackChunkdongdong_12138_github_io||[]).push([[5342],{324:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=s(5893),r=s(1151);const o={sidebar_position:13},i="Fragment\u3001Teleport\u3001Suspense",l={id:"front-frame/Vue3/Fragment\u3001Teleport\u3001Suspense",title:"Fragment\u3001Teleport\u3001Suspense",description:"Vue3 \u65b0\u589e\u4e86 Fragment\u3001Teleport\u3001Suspense \u7b49\u7ec4\u4ef6\u3002",source:"@site/docs/front-frame/Vue3/13-Fragment\u3001Teleport\u3001Suspense.md",sourceDirName:"front-frame/Vue3",slug:"/front-frame/Vue3/Fragment\u3001Teleport\u3001Suspense",permalink:"/docs/front-frame/Vue3/Fragment\u3001Teleport\u3001Suspense",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/front-frame/Vue3/13-Fragment\u3001Teleport\u3001Suspense.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"front-frame",previous:{title:"\u8fc7\u6e21 & \u52a8\u753b",permalink:"/docs/front-frame/Vue3/\u8fc7\u6e21 & \u52a8\u753b"},next:{title:"keep-alive \u7f13\u5b58\u7ec4\u4ef6",permalink:"/docs/front-frame/Vue3/keep-alive \u7f13\u5b58\u7ec4\u4ef6"}},d={},c=[{value:"Fragment",id:"fragment",level:2},{value:"Teleport",id:"teleport",level:2},{value:"\u5f02\u6b65\u7ec4\u4ef6 &amp; Suspense",id:"\u5f02\u6b65\u7ec4\u4ef6--suspense",level:2},{value:"\u5f02\u6b65\u7ec4\u4ef6",id:"\u5f02\u6b65\u7ec4\u4ef6",level:3},{value:"Suspense",id:"suspense",level:3}];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"fragmentteleportsuspense",children:"Fragment\u3001Teleport\u3001Suspense"}),"\n",(0,t.jsxs)(n.p,{children:["Vue3 \u65b0\u589e\u4e86 ",(0,t.jsx)(n.code,{children:"Fragment"}),"\u3001",(0,t.jsx)(n.code,{children:"Teleport"}),"\u3001",(0,t.jsx)(n.code,{children:"Suspense"})," \u7b49\u7ec4\u4ef6\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"fragment",children:"Fragment"}),"\n",(0,t.jsxs)(n.p,{children:["\u6709\u4e86 ",(0,t.jsx)(n.code,{children:"Fragment"}),"\uff0cVue3 \u5c31\u5141\u8bb8\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u591a\u4e2a\u6839\u8282\u70b9\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Fragment"})," \u662f\u4e00\u4e2a\u865a\u62df\u8282\u70b9\uff0cVue \u4f1a\u5c06\u6a21\u677f\u4e2d\u7684\u5185\u5bb9\u6dfb\u52a0\u5230 ",(0,t.jsx)(n.code,{children:"Fragment"})," \u4e2d\uff0c\u76f8\u5f53\u4e8e\u628a ",(0,t.jsx)(n.code,{children:"Fragment"})," \u4f5c\u4e3a\u6839\u8282\u70b9\uff0c\u4f46 ",(0,t.jsx)(n.code,{children:"Fragment"})," \u7ec4\u4ef6\u4e0d\u4f1a\u5728 DOM \u4e2d\u6e32\u67d3\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<template>\n  <div>Hello World!</div>\n  <div>\u4f60\u597d\u4e16\u754c\uff01</div>\n</template>\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u540c\u65f6\u8fd8\u652f\u6301 render JSX \u5199\u6cd5\uff0c\u5982\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"render() {\n  return (\n    <>\n      { this.visable ? <div>{this.obj.name}</div> : <div>{this.obj.price}</div> }\n      <input v-model={this.val} />\n      { [1, 2, 3].map(item => <div>{item}</div>) }\n    </>\n  )\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"teleport",children:"Teleport"}),"\n",(0,t.jsxs)(n.p,{children:["Teleport\uff08\u4f20\u9001\u95e8\uff09\u80fd\u591f\u5c06 ",(0,t.jsx)(n.strong,{children:"\u7ec4\u4ef6HTML\u7ed3\u6784"})," \u6e32\u67d3\u5230\u6307\u5b9a DOM \u8282\u70b9\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528\u65b9\u6cd5\uff1a\u5728 ",(0,t.jsx)(n.code,{children:"teleport"})," \u7ec4\u4ef6\u4e0a\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"to"})," \u5c5e\u6027\u6307\u5b9a\u4f20\u9001\u7684\u4f4d\u7f6e\uff0c\u652f\u6301 id\u3001class\u3001\u6807\u7b7e\u7b49\u9009\u62e9\u5668\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'\x3c!-- to \u4e2d\u53ef\u4ee5\u5199\u6807\u7b7e\u3001class\u3001id \u7b49 CSS \u9009\u62e9\u5668 --\x3e\n<teleport to="body">\n  <div v-show="isShow" class="modal">\n    <h2>\u6211\u662f\u4e00\u4e2a\u5f39\u7a97</h2>\n    <p>\u6211\u662f\u5f39\u7a97\u4e2d\u7684\u4e00\u4e9b\u5185\u5bb9</p>\n    <button @click="isShow = false">\u5173\u95ed\u5f39\u7a97</button>\n  </div>\n</teleport>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"disabled"})," \u5c5e\u6027\u63a7\u5236\u662f\u5426\u4f20\u9001\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'\x3c!-- disabled \u4e3a true\uff0c\u5219 to \u4e0d\u751f\u6548 --\x3e\n<teleport to="body" :disabled="true">\n  <Loading></Loading>\n</teleport>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u5f02\u6b65\u7ec4\u4ef6--suspense",children:"\u5f02\u6b65\u7ec4\u4ef6 & Suspense"}),"\n",(0,t.jsx)(n.h3,{id:"\u5f02\u6b65\u7ec4\u4ef6",children:"\u5f02\u6b65\u7ec4\u4ef6"}),"\n",(0,t.jsx)(n.p,{children:"\u4ee3\u7801\u5206\u5305\uff1a\u5728\u5927\u578b\u5e94\u7528\u4e2d\uff0c\u6211\u4eec\u53ef\u80fd\u9700\u8981\u5c06\u5e94\u7528\u5206\u5272\u6210\u5c0f\u4e00\u4e9b\u7684\u4ee3\u7801\u5757\uff0c\u4ee5\u51cf\u5c0f\u4e3b\u5305\u7684\u4f53\u79ef\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u5f02\u6b65\u7ec4\u4ef6\u53ef\u4ee5\u505a\u5230\u8fd9\u4e00\u70b9\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 ",(0,t.jsx)(n.code,{children:"<script setup>"})," \u4e2d\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528",(0,t.jsxs)(n.strong,{children:["\u9876\u5c42 ",(0,t.jsx)(n.code,{children:"await"})]}),"\uff0c\u4ee3\u7801\u4f1a\u88ab\u7f16\u8bd1\u6210 ",(0,t.jsx)(n.code,{children:"async setup()"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<script setup>\nconst post = await fetch(`/api/post/1`).then(res => res.json())\n<\/script>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7236\u7ec4\u4ef6\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"defineAsyncComponent()"})," \u548c ",(0,t.jsx)(n.code,{children:"import()"})," \u6765\u5f15\u5165\u5b50\u7ec4\u4ef6\uff0c\u4fbf\u53ef\u4ee5\u5b9e\u73b0\u201c\u5206\u5305\u201d\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="\u7236\u7ec4\u4ef6"',children:"<script setup lang=\"ts\">\nimport { defineAsyncComponent } from 'vue'\n\n// \u5f15\u5165\u5b50\u7ec4\u4ef6-\u51fd\u6570\u5f62\u5f0f\nconst Dialog = defineAsyncComponent(() => import('../../components/Dialog/index.vue'))\n\n// \u5f15\u5165\u5b50\u7ec4\u4ef6-\u5bf9\u8c61\u5f62\u5f0f\nconst AsyncComp = defineAsyncComponent({\n  loader: () => import('./Foo.vue'),  // \u52a0\u8f7d\u51fd\u6570\n  loadingComponent: LoadingComponent, // \u52a0\u8f7d\u5f02\u6b65\u7ec4\u4ef6\u65f6\u4f7f\u7528\u7684\u7ec4\u4ef6\n  delay: 200,     // \u5c55\u793a\u52a0\u8f7d\u7ec4\u4ef6\u524d\u7684\u5ef6\u8fdf\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a 200ms\n  errorComponent: ErrorComponent,     // \u52a0\u8f7d\u5931\u8d25\u540e\u5c55\u793a\u7684\u7ec4\u4ef6\n  timeout: 3000   // \u9ed8\u8ba4\u503c\u662f Infinity\uff0c\u5982\u679c\u8d85\u65f6\u4e5f\u4f1a\u663e\u793a errorComponent\n})\n<\/script>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"suspense",children:"Suspense"}),"\n",(0,t.jsx)(n.p,{children:"\u4f5c\u7528\uff1a\u7b49\u5f85\u5f02\u6b65\u7ec4\u4ef6\u65f6\u6e32\u67d3\u4e00\u4e9b\u66ff\u4ee3\u5185\u5bb9\uff0c\u8ba9\u5e94\u7528\u6709\u66f4\u597d\u7684\u7528\u6237\u4f53\u9a8c\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u5f02\u6b65\u7ec4\u4ef6\u5fc5\u987b\u5728 ",(0,t.jsx)(n.code,{children:"<Suspense>"})," \u4e2d\u4f7f\u7528\uff0c\u5426\u5219\u63a7\u5236\u53f0\u4f1a\u6709\u8b66\u544a\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"<Suspense>"})," \u7ec4\u4ef6\u6709\u4e24\u4e2a\u63d2\u69fd\uff1a",(0,t.jsx)(n.code,{children:"default"})," \u548c ",(0,t.jsx)(n.code,{children:"fallback"}),"\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u6b65\u9aa4\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u5f02\u6b65\u5f15\u5165\u7ec4\u4ef6\uff1b"}),"\n",(0,t.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"Suspense"})," \u5305\u88f9\u7ec4\u4ef6\uff0c\u5e76\u914d\u7f6e\u597d ",(0,t.jsx)(n.code,{children:"default"})," \u4e0e ",(0,t.jsx)(n.code,{children:"fallback"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<template>\n  <Suspense>\n    <template v-slot:default>\n      <Child />\n    </template>\n    <template v-slot:fallback>\n      <h3>\u52a0\u8f7d\u4e2d.......</h3>\n    </template>\n  </Suspense>\n</template>\n\n<script setup lang=\"ts\">\n  import { defineAsyncComponent, Suspense } from 'vue'\n  const Child = defineAsyncComponent(() => import('./Child.vue'))  \n<\/script>\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="Child \u7ec4\u4ef6\u4e2d\u542b\u6709\u5f02\u6b65\u4efb\u52a1"',children:"<script setup lang=\"ts\">\n  import { ref } from 'vue'\n  import axios from 'axios'\n\n  // setup \u8bed\u6cd5\u7cd6\u4e2d\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 await\uff08\u9876\u5c42 await\uff09\n  const result = await axios.get('https://xxx')\n<\/script>\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"<Suspense>"})," \u76ee\u524d\u662f\u4e00\u4e2a\u5b9e\u9a8c\u6027\u7684\u7279\u6027\uff0c\u5b83\u7684 API \u5c06\u6765\u53ef\u80fd\u4f1a\u6539\u53d8\uff0c\u9879\u76ee\u4e2d\u8bf7\u8c28\u614e\u4f7f\u7528\uff01"]})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>i});var t=s(7294);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);