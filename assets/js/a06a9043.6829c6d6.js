"use strict";(self.webpackChunkdongdong_12138_github_io=self.webpackChunkdongdong_12138_github_io||[]).push([[4854],{9401:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>t,metadata:()=>m,toc:()=>r});var s=e(5893),o=e(1151);const t={date:new Date("2023-10-27T00:00:00.000Z"),slug:"vue-mixin",title:"Vue mixin \u8be6\u89e3",authors:["barry"],tags:["Vue","mixin"]},l=void 0,m={permalink:"/blog/vue-mixin",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/ vue-mixin.md",source:"@site/blog/ vue-mixin.md",title:"Vue mixin \u8be6\u89e3",description:"Vue3 \u5df2\u7ecf\u629b\u5f03\u4e86 mixin\uff0c\u63a8\u8350\u4f7f\u7528 CompositionAPI \u4ee3\u66ff mixin\u3002",date:"2023-10-27T00:00:00.000Z",tags:[{label:"Vue",permalink:"/blog/tags/vue"},{label:"mixin",permalink:"/blog/tags/mixin"}],readingTime:6.92,hasTruncateMarker:!1,authors:[{name:"Barry Dong",title:"\u524d\u7aef\u5de5\u7a0b\u5e08",url:"https://github.com/dongdong12138",imageURL:"https://avatars.githubusercontent.com/u/40097265?v=4",key:"barry"}],frontMatter:{date:"2023-10-27T00:00:00.000Z",slug:"vue-mixin",title:"Vue mixin \u8be6\u89e3",authors:["barry"],tags:["Vue","mixin"]},unlisted:!1,prevItem:{title:"Vue \u63d2\u69fd\u8be6\u89e3",permalink:"/blog/vue-slot"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},a={authorsImageUrls:[void 0]},r=[{value:"\u6982\u5ff5\u4ecb\u7ecd",id:"\u6982\u5ff5\u4ecb\u7ecd",level:2},{value:"\u57fa\u7840\u4f7f\u7528",id:"\u57fa\u7840\u4f7f\u7528",level:2},{value:"\u9009\u9879\u5408\u5e76",id:"\u9009\u9879\u5408\u5e76",level:2},{value:"\u540c\u65f6\u4f7f\u7528\u591a\u4e2a mixin",id:"\u540c\u65f6\u4f7f\u7528\u591a\u4e2a-mixin",level:2},{value:"\u5168\u5c40 mixin",id:"\u5168\u5c40-mixin",level:2},{value:"mixin \u5b58\u5728\u7684\u95ee\u9898",id:"mixin-\u5b58\u5728\u7684\u95ee\u9898",level:2}];function x(n){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.admonition,{type:"warning",children:(0,s.jsx)(i.p,{children:"Vue3 \u5df2\u7ecf\u629b\u5f03\u4e86 mixin\uff0c\u63a8\u8350\u4f7f\u7528 CompositionAPI \u4ee3\u66ff mixin\u3002"})}),"\n",(0,s.jsx)(i.h2,{id:"\u6982\u5ff5\u4ecb\u7ecd",children:"\u6982\u5ff5\u4ecb\u7ecd"}),"\n",(0,s.jsx)(i.p,{children:"mixin\uff08\u6df7\u5165\uff09\u662f Vue \u4e2d\u590d\u7528\u4ee3\u7801\u7684\u4e00\u79cd\u65b9\u5f0f\uff0c\u5b83\u53ef\u4ee5\u5c06\u4e00\u7ec4\u9009\u9879\uff08\u5982 data\u3001methods\u3001\u751f\u547d\u5468\u671f\u94a9\u5b50\u7b49\uff09\u5408\u5e76\u5230\u591a\u4e2a\u7ec4\u4ef6\u4e2d\uff0c\u4ece\u800c\u5b9e\u73b0\u4ee3\u7801\u6216\u529f\u80fd\u7684\u590d\u7528\u3002"}),"\n",(0,s.jsx)(i.admonition,{type:"tip",children:(0,s.jsx)(i.p,{children:"\u7ec4\u4ef6\u4e2d\u7684\u4efb\u610f\u9009\u9879\u90fd\u53ef\u4ee5\u5199\u5230 mixin \u4e2d\uff01"})}),"\n",(0,s.jsx)(i.h2,{id:"\u57fa\u7840\u4f7f\u7528",children:"\u57fa\u7840\u4f7f\u7528"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",children:"// \u5b9a\u4e49\u4e00\u4e2a\u540d\u4e3a myMixin \u7684 mixin \u5bf9\u8c61\uff0c\u5c06\u9700\u8981\u590d\u7528\u7684\u9009\u9879\u653e\u5728\u5176\u4e2d\nconst myMixin = {\n  data() {\n    return {\n      message: 'Hello, Mixin!'\n    }\n  },\n  methods: {\n    hello() {\n      console.log(this.message)\n    }\n  }\n}\n\n// \u5728\u7ec4\u4ef6\u4e2d\u901a\u8fc7 mixins \u9009\u9879\uff0c\u4f7f\u7528 myMixin\nVue.component('my-component', {\n  mixins: [myMixin],\n  mounted() {\n    this.hello()  // Hello, Mixin!\n  }\n})\n"})}),"\n",(0,s.jsx)(i.h2,{id:"\u9009\u9879\u5408\u5e76",children:"\u9009\u9879\u5408\u5e76"}),"\n",(0,s.jsx)(i.p,{children:"\u5f53 mixin \u4e0e\u7ec4\u4ef6\u5b58\u5728\u540c\u540d\u7684\u9009\u9879\u65f6\uff0cVue \u4f1a\u5c06\u540c\u540d\u7684\u9009\u9879\u8fdb\u884c\u5408\u5e76\u3002\u5408\u5e76\u89c4\u5219\u5982\u4e0b\uff1a"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u6570\u636e\u9009\u9879\uff08data\uff09\u4f1a\u8fdb\u884c\u9012\u5f52\u5408\u5e76\uff0c\u7ec4\u4ef6\u7684\u6570\u636e\u4f1a\u8986\u76d6 mixin \u7684\u540c\u540d\u6570\u636e\uff1b"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",children:"const mixin = {\n  data() {\n    return {\n      message: 'hello',\n      foo: 'abc'\n    }\n  }\n}\n\nnew Vue({\n  mixins: [mixin],\n  data() {\n    return {\n      message: 'goodbye',\n      bar: 'def'\n    }\n  },\n  created() {\n    console.log(this.$data)   // { message: \"goodbye\", foo: \"abc\", bar: \"def\" }\n  }\n})\n"})}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u503c\u4e3a\u5bf9\u8c61\u7684\u9009\u9879\uff08\u5982 methods\u3001components\u3001directives \u7b49\uff09\u4f1a\u88ab\u5408\u5e76\u4e3a\u540c\u4e00\u4e2a\u5bf9\u8c61\uff0c\u7ec4\u4ef6\u7684\u9009\u9879\u4f1a\u8986\u76d6 mixin \u7684\u540c\u540d\u9009\u9879\uff1b"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",children:"const mixin = {\n  methods: {\n    foo() {\n      console.log('foo')\n    },\n    conflicting() {\n      console.log('from mixin')\n    }\n  }\n}\n\nconst vm = new Vue({\n  mixins: [mixin],\n  methods: {\n    bar() {\n      console.log('bar')\n    },\n    conflicting() {\n      console.log('from self')\n    }\n  }\n})\n\nvm.foo()  // \"foo\"\nvm.bar()  // \"bar\"\nvm.conflicting()  // \"from self\"\n"})}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u540c\u540d\u7684\u751f\u547d\u5468\u671f\u94a9\u5b50\u51fd\u6570\u4f1a\u5408\u5e76\u5230\u4e00\u4e2a\u6570\u7ec4\u4e2d\uff0c\u6240\u4ee5\u90fd\u4f1a\u8c03\u7528\u3002\u8c03\u7528\u987a\u5e8f\u662f\u5148\u8c03\u7528 mixin \u4e2d\u7684\u94a9\u5b50\uff0c\u540e\u8c03\u7528\u7ec4\u4ef6\u4e2d\u7684\u94a9\u5b50\u3002"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",children:"const mixin = {\n  created() {\n    console.log('\u6df7\u5165\u5bf9\u8c61\u7684\u94a9\u5b50\u88ab\u8c03\u7528')\n  }\n}\n\nnew Vue({\n  mixins: [mixin],\n  created() {\n    console.log('\u7ec4\u4ef6\u94a9\u5b50\u88ab\u8c03\u7528')\n  }\n})\n\n// \"\u6df7\u5165\u5bf9\u8c61\u7684\u94a9\u5b50\u88ab\u8c03\u7528\"\n// \"\u7ec4\u4ef6\u94a9\u5b50\u88ab\u8c03\u7528\"\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"\u540c\u65f6\u4f7f\u7528\u591a\u4e2a-mixin",children:"\u540c\u65f6\u4f7f\u7528\u591a\u4e2a mixin"}),"\n",(0,s.jsx)(i.p,{children:"\u5f53\u5728\u540c\u4e00\u4e2a\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u591a\u4e2a mixin\uff0c\u4e14\u591a\u4e2a mixin \u4e2d\u4e5f\u542b\u6709\u540c\u540d\u9009\u9879\u65f6\uff0c\u540e\u4f7f\u7528\u7684\u4f1a\u8986\u76d6\u5148\u4f7f\u7528\u7684\u3002"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",metastring:'title="mixin1.js"',children:"const mixin1 = {\n  data() {\n    return {\n      aaa: 'aaa-mixin1'\n    }\n  },\n  mounted() {\n    console.log('mixin1:', this.aaa)\n  },\n  methods: {\n    showAAA() {\n      console.log(this.aaa)\n    }\n  }\n}\n\nexport default mixin1\n"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",metastring:'title="mixin2.js"',children:"const mixin2 = {\n  data() {\n    return {\n      aaa: 'aaa-mixin2'\n    }\n  },\n  mounted() {\n    console.log('mixin2:', this.aaa)\n  },\n  methods: {\n    showAAA() {\n      console.log(this.aaa)\n    }\n  }\n}\n\nexport default mixin2\n"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-html",metastring:'title="App.vue"',children:"<template>\n  <div>\n    <button @click=\"showAAA\">showAAA</button>\n  </div>\n</template>\n\n<script>\nimport mixin1 from '@/mixins/mixin1'\nimport mixin2 from '@/mixins/mixin2'\n\nexport default {\n  name: 'App',\n\n  // mixin2 \u4f1a\u5c06 mixin1 \u4e2d\u7684\u540c\u540d\u9009\u9879\u8986\u76d6\uff0c\u7136\u540e\u5148\u6267\u884c mixin1\uff0c\u540e\u6267\u884c mixin2\n  mixins: [mixin1, mixin2],\n\n  // \u5982\u679c\u662f\u4e0b\u9762\u8fd9\u6837\n  // mixin1 \u4f1a\u5c06 mixin2 \u4e2d\u7684\u540c\u540d\u9009\u9879\u8986\u76d6\uff0c\u7136\u540e\u5148\u6267\u884c mixin2\uff0c\u540e\u6267\u884c mixin1\n  // mixins: [mixin2, mixin1]\n}\n<\/script>\n"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",metastring:'title="\u4ee5\u4e0a\u4ee3\u7801\u8f93\u51fa\u7ed3\u679c"',children:"mounted \u65f6\uff1a\n// mixin1: aaa-mixin2\n// mixin2: aaa-mixin2\n\n\u70b9\u51fb\u6309\u94ae\u65f6\uff1a\n// aaa-mixin2\n"})}),"\n",(0,s.jsx)(i.p,{children:"\u4ece\u8f93\u51fa\u7ed3\u679c\u6765\u770b\uff1a"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u7531\u4e8e\u4e24\u4e2a mixin \u4e2d\u7684\u540c\u540d\u7684\u751f\u547d\u5468\u671f\u94a9\u5b50\u4f1a\u5408\u5e76\u5230\u4e00\u4e2a\u6570\u7ec4\u4e2d\uff0c\u6240\u4ee5\u4e24\u4e2a mixin \u4e2d\u7684\u94a9\u5b50\u90fd\u4f1a\u6267\u884c\uff0c\u6240\u4ee5 mounted \u65f6\u5c31\u6709\u4e24\u4e2a\u8f93\u51fa\uff1b"}),"\n",(0,s.jsx)(i.li,{children:"\u53c8\u56e0\u4e3a mixin2 \u8986\u76d6\u4e86 mixin1 \u4e2d\u7684\u540c\u540d\u9009\u9879\uff0c\u6240\u4ee5\u8f93\u51fa\u7684\u90fd\u662f mixin2 \u4e2d\u7684\u503c\u3002"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u4ece\u6267\u884c\u987a\u5e8f\u6765\u770b\uff0c\u4ecd\u7136\u662f mixin1 \u5148\u4e8e mixin2 \u6267\u884c\uff0c\u4f46\u8fd9\u5e76\u4e0d\u5f71\u54cd\u8f93\u51fa\u7ed3\u679c\u3002"}),"\n",(0,s.jsxs)(i.admonition,{type:"tip",children:[(0,s.jsx)(i.p,{children:"\u6b64\u5904\u53ef\u4ee5\u7406\u89e3\u4e3a\uff1a"}),(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Vue \u5148\u89e3\u6790\u4ee3\u7801\uff0c\u5c06 mixin2 \u8986\u76d6 mixin1 \u4e2d\u7684\u540c\u540d\u9009\u9879\uff1b"}),"\n",(0,s.jsx)(i.li,{children:"\u7136\u540e\u6309\u7167\u987a\u5e8f\u6267\u884c\u4ee3\u7801\uff0c\u6b64\u65f6 mixin1 \u4e2d\u7684\u503c\u5df2\u7ecf\u88ab\u8986\u76d6\u4e86\uff0c\u6240\u4ee5\u8f93\u51fa\u7684\u5c31\u662f mixin2 \u7684\u503c\u3002"}),"\n"]})]}),"\n",(0,s.jsx)(i.h2,{id:"\u5168\u5c40-mixin",children:"\u5168\u5c40 mixin"}),"\n",(0,s.jsx)(i.p,{children:"mixin \u4e5f\u53ef\u4ee5\u5168\u5c40\u6ce8\u518c\uff0c\u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4e00\u65e6\u4f7f\u7528\u5168\u5c40\u6df7\u5165\uff0c\u5b83\u5c06\u5f71\u54cd\u6bcf\u4e00\u4e2a\u4e4b\u540e\u521b\u5efa\u7684 Vue \u5b9e\u4f8b\u548c Vue \u7ec4\u4ef6\u3002"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",metastring:'title="main.js"',children:"import Vue from 'vue'\nimport App from './App.vue'\n\nVue.config.productionTip = false\n\n// \u5728\u5165\u53e3\u6587\u4ef6\u4e2d\uff0c\u6ce8\u518c\u4e00\u4e2a\u5168\u5c40 mixin\nVue.mixin({\n  created() {\n    console.log('\u5168\u5c40 mixin created')\n  }\n})\n\nnew Vue({\n  render: h => h(App),\n}).$mount('#app')\n"})}),"\n",(0,s.jsx)(i.p,{children:"\u4ee5\u4e0a\u4ee3\u7801\uff0c\u4f1a\u5c06\u5168\u5c40 mixin \u4e2d\u7684\u9009\u9879\uff08created\uff09\u6df7\u5165\u5230 Vue \u5b9e\u4f8b\u4ee5\u53ca\u6240\u6709 Vue \u7ec4\u4ef6\u5b9e\u4f8b\u4e2d\uff0c\u5bfc\u81f4 Vue \u5b9e\u4f8b\u53ca\u6bcf\u4e2a Vue \u7ec4\u4ef6\u90fd\u4f1a\u6267\u884c\u8fd9\u4e2a created \u94a9\u5b50\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u6240\u4ee5\uff0c\u5efa\u8bae\u8c28\u614e\u4f7f\u7528\u5168\u5c40 mixin\uff0c\u56e0\u4e3a\u5168\u5c40 mixin \u53ef\u80fd\u4f1a\u5f71\u54cd\u5230\u6240\u6709\u7ec4\u4ef6\uff0c\u63a8\u8350\u7684\u505a\u6cd5\u662f\u5728\u7279\u5b9a\u7684\u7ec4\u4ef6\u4e2d\u4f7f\u7528 mixin\u3002"}),"\n",(0,s.jsx)(i.p,{children:"Vue2 \u7684\u6587\u6863\u7ed9\u4e86\u4e00\u4e2a\u201c\u4f7f\u7528\u6070\u5f53\u201d\u7684\u4f8b\u5b50\u2014\u2014\u4e3a\u81ea\u5b9a\u4e49\u9009\u9879\u6ce8\u5165\u5904\u7406\u903b\u8f91\u3002"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",children:"// \u4e3a\u81ea\u5b9a\u4e49\u7684\u9009\u9879 'myOption' \u6ce8\u5165\u4e00\u4e2a\u5904\u7406\u5668\nVue.mixin({\n  created: function () {\n    var myOption = this.$options.myOption\n    if (myOption) {\n      console.log(myOption)\n    }\n  }\n})\n\nnew Vue({\n  myOption: 'hello!'\n})\n\n// => \"hello!\"\n"})}),"\n",(0,s.jsxs)(i.p,{children:["\u4ee5\u4e0a\u4ee3\u7801\uff0c\u5f53\u5728 Vue \u5b9e\u4f8b\u6216 Vue \u7ec4\u4ef6\u4e2d\u5b9a\u4e49\u4e86\u81ea\u5b9a\u4e49\u9009\u9879 ",(0,s.jsx)(i.code,{children:"myOption"})," \u65f6\uff0c\u5c31\u4f1a\u5728 created \u94a9\u5b50\u4e2d\u8f93\u51fa ",(0,s.jsx)(i.code,{children:"myOption"})," \u7684\u503c\u3002"]}),"\n",(0,s.jsx)(i.h2,{id:"mixin-\u5b58\u5728\u7684\u95ee\u9898",children:"mixin \u5b58\u5728\u7684\u95ee\u9898"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u547d\u540d\u51b2\u7a81"})}),"\n",(0,s.jsx)(i.p,{children:"\u4e00\u4e2a\u662f\u4e0a\u9762\u63d0\u5230\u7684\u201c\u547d\u540d\u51b2\u7a81\u201d\u7684\u95ee\u9898\uff0c\u867d\u7136\u5bf9\u4e8e\u8fd9\u4e2a\u95ee\u9898 Vue \u6709\u201c\u5408\u5e76\u201d\u7684\u8865\u6551\u63aa\u65bd\uff0c\u4f46\u662f\u5728\u5b9e\u9645\u5f00\u53d1\u4e2d\uff0c\u5f80\u5f80\u4f1a\u5b58\u5728\u591a\u4e2a\u7ec4\u4ef6\u548c mixin\uff0c\u8fd9\u4f7f\u5f97\u6211\u4eec\u7684\u547d\u540d\u4f1a\u8d8a\u6765\u8d8a\u56f0\u96be\u3002\u53e6\u5916\uff0c\u4e00\u65e6\u7b2c\u4e09\u65b9 mixin \u4f5c\u4e3a npm \u5305\u88ab\u6dfb\u52a0\u8fdb\u6765\uff0c\u53ef\u80fd\u5c31\u4f1a\u5bfc\u81f4\u547d\u540d\u51b2\u7a81\u3002"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u4f9d\u8d56\u4e0d\u900f\u660e"})}),"\n",(0,s.jsx)(i.p,{children:"\u53e6\u4e00\u4e2a\u95ee\u9898\u662f\u201c\u4f9d\u8d56\u4e0d\u900f\u660e\u201d\uff0c\u6216\u8005\u8bf4\u4e0d\u597d\u201c\u6eaf\u6e90\u201d\uff0c\u56e0\u4e3a\u7ec4\u4ef6\u53ef\u4ee5\u4f7f\u7528 mixin \u4e2d\u7684\u6570\u636e\u6216\u65b9\u6cd5\uff0cmixin\n\u4e5f\u53ef\u4ee5\u4f7f\u7528\u7ec4\u4ef6\u4e2d\u7684\u6570\u636e\u6216\u65b9\u6cd5\u3002\u8fd9\u7ecf\u5e38\u4f1a\u5bfc\u81f4\u4e00\u4e2a\u95ee\u9898\u5c31\u662f\uff0c\u660e\u660e\u7ec4\u4ef6\u4e2d\u6ca1\u6709\u5b9a\u4e49\u8fd9\u4e2a\u5c5e\u6027\u6216\u65b9\u6cd5\uff0c\u4f46\u662f\u7ec4\u4ef6\u4e2d\u5374\u80fd\u4f7f\u7528\uff0c\u8fd9\u4e0d\u7b26\u5408\u6211\u4eec\u7684\u76f4\u89c9\u3002\u5982\u679c\u4e00\u4e2a mixin \u5728\u591a\u4e2a\u7ec4\u4ef6\u4e2d\u4f7f\u7528\uff0c\u6216\u8005\u4e00\u4e2a\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u4e86\u591a\u4e2a mixin\uff0c\u4ee3\u7801\u5c31\u4f1a\u53d8\u5f97\u6df7\u4e71\uff0c\u96be\u4ee5\u7ef4\u62a4\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{title:"\u53c2\u8003\u94fe\u63a5",type:"info",children:(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://v2.cn.vuejs.org/v2/guide/mixins.html",children:"Vue2 \u6587\u6863 - \u6df7\u5165"})}),"\n"]})})]})}function c(n={}){const{wrapper:i}={...(0,o.a)(),...n.components};return i?(0,s.jsx)(i,{...n,children:(0,s.jsx)(x,{...n})}):x(n)}},1151:(n,i,e)=>{e.d(i,{Z:()=>m,a:()=>l});var s=e(7294);const o={},t=s.createContext(o);function l(n){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function m(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:l(n.components),s.createElement(t.Provider,{value:i},n.children)}}}]);