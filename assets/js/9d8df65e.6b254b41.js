"use strict";(self.webpackChunkdongdong_12138_github_io=self.webpackChunkdongdong_12138_github_io||[]).push([[2845],{8855:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=t(5893),i=t(1151);const r={},o="\u79fb\u52a8\u7aef",c={id:"front-base/\u79fb\u52a8\u7aef",title:"\u79fb\u52a8\u7aef",description:"rem \u9002\u914d\u65b9\u6848",source:"@site/docs/front-base/\u79fb\u52a8\u7aef.md",sourceDirName:"front-base",slug:"/front-base/\u79fb\u52a8\u7aef",permalink:"/docs/front-base/\u79fb\u52a8\u7aef",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/front-base/\u79fb\u52a8\u7aef.md",tags:[],version:"current",frontMatter:{},sidebar:"front-base",previous:{title:"TypeScript",permalink:"/docs/front-base/TypeScript"}},l={},d=[{value:"rem \u9002\u914d\u65b9\u6848",id:"rem-\u9002\u914d\u65b9\u6848",level:2},{value:"\u539f\u751f JS \u5b9e\u73b0",id:"\u539f\u751f-js-\u5b9e\u73b0",level:3},{value:"flexible \u5b9e\u73b0",id:"flexible-\u5b9e\u73b0",level:3},{value:"vw\u3001vh \u9002\u914d\u65b9\u6848",id:"vwvh-\u9002\u914d\u65b9\u6848",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u79fb\u52a8\u7aef",children:"\u79fb\u52a8\u7aef"}),"\n",(0,s.jsx)(n.h2,{id:"rem-\u9002\u914d\u65b9\u6848",children:"rem \u9002\u914d\u65b9\u6848"}),"\n",(0,s.jsx)(n.h3,{id:"\u539f\u751f-js-\u5b9e\u73b0",children:"\u539f\u751f JS \u5b9e\u73b0"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function remRefresh() {\n  const clientWidth = document.documentElement.clientWidth\n  const rem = clientWidth / 10\n  document.documentElement.style.fontSize = rem + 'px'\n  document.body.style.fontSize = '12px'\n}\n\nwindow.addEventListener('pageshow', () => {\n  remRefresh()\n})\n\nlet timer\nwindow.addEventListener('resize', () => {\n  timer && clearTimeout(timer)\n  timer = setTimeout(() => {\n    remRefresh()\n  }, 300)\n})\n"})}),"\n",(0,s.jsx)(n.h3,{id:"flexible-\u5b9e\u73b0",children:"flexible \u5b9e\u73b0"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"npm install -D lib-flexible px2rem-loader\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"lib-flexible"})," \u4f1a\u81ea\u52a8\u5728 ",(0,s.jsx)(n.code,{children:"html"})," \u7684 ",(0,s.jsx)(n.code,{children:"head"})," \u6807\u7b7e\u4e2d\u6dfb\u52a0\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:'<meta name="viewport">'}),"\n\u7684\u6807\u7b7e\uff0c\u540c\u65f6\u4f1a\u81ea\u52a8\u8bbe\u7f6e ",(0,s.jsx)(n.code,{children:"html"})," \u7684 ",(0,s.jsx)(n.code,{children:"font-size"})," \u4e3a\u5c4f\u5e55\u5bbd\u5ea6\u9664\u4ee5 10\uff0c\u4e5f\u5c31\u662f 1rem \u7b49\u4e8e ",(0,s.jsx)(n.code,{children:"html"})," \u6839\u8282\u70b9\u7684 ",(0,s.jsx)(n.code,{children:"font-size"}),"\u3002\u5047\u5982\u8bbe\u8ba1\u7a3f\u7684\u5bbd\u5ea6\u662f\n750px\uff0c\u90a3\u4e48 1rem \u5c31\u7b49\u4e8e 75px\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4e00\u822c\u6765\u8bf4\uff0c",(0,s.jsx)(n.code,{children:"lib-flexible"})," \u4f1a\u4e0e ",(0,s.jsx)(n.code,{children:"px2rem-loader"})," \u642d\u914d\u4f7f\u7528\uff0c",(0,s.jsx)(n.code,{children:"px2rem-loader"})," \u4f1a\u81ea\u52a8\u5c06 CSS \u4e2d\u7684",(0,s.jsx)(n.code,{children:"px"})," \u8f6c\u6362\u6210 ",(0,s.jsx)(n.code,{children:"rem"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"vwvh-\u9002\u914d\u65b9\u6848",children:"vw\u3001vh \u9002\u914d\u65b9\u6848"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e4b\u524d\u7528\u7684\u662f ",(0,s.jsx)(n.code,{children:"rem"}),"\uff0c\u73b0\u5728\u53ef\u4ee5\u7528 ",(0,s.jsx)(n.code,{children:"vw"}),"\u3001",(0,s.jsx)(n.code,{children:"vh"}),"\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"npm install postcss-px-to-viewport -D\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u56e0\u4e3a Vite \u4e2d\u5df2\u7ecf\u5185\u8054\u4e86 postcss\uff0c\u6240\u4ee5\u5e76\u4e0d\u9700\u8981\u989d\u5916\u7684\u521b\u5efa ",(0,s.jsx)(n.code,{children:"postcss.config.js"})," \u6587\u4ef6\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="vite.config.ts"',children:"import { defineConfig } from 'vite';\nimport { fileURLToPath, URL } from 'url';\nimport vue from '@vitejs/plugin-vue';\nimport vueJsx from '@vitejs/plugin-vue-jsx';\nimport postcsspxtoviewport from 'postcss-px-to-viewport'; // \u5f15\u5165\u63d2\u4ef6\n\nexport default defineConfig({\n  plugins: [vue(), vueJsx()],\n  css: {\n    postcss: {\n      plugins: [\n        postcsspxtoviewport({\n          unitToConvert: 'px',  // \u8981\u8f6c\u5316\u7684\u5355\u4f4d\n          viewportWidth: 750,   // UI \u8bbe\u8ba1\u7a3f\u7684\u5bbd\u5ea6\n          unitPrecision: 6,     // \u8f6c\u6362\u540e\u7684\u7cbe\u5ea6\uff0c\u5373\u5c0f\u6570\u70b9\u4f4d\u6570\n          propList: ['*'],      // \u6307\u5b9a\u8f6c\u6362\u7684 css \u5c5e\u6027\u7684\u5355\u4f4d\uff0c* \u4ee3\u8868\u5168\u90e8 css \u5c5e\u6027\u7684\u5355\u4f4d\u90fd\u8fdb\u884c\u8f6c\u6362\n          viewportUnit: 'vw',   // \u6307\u5b9a\u9700\u8981\u8f6c\u6362\u6210\u7684\u89c6\u7a97\u5355\u4f4d\uff0c\u9ed8\u8ba4 vw\n          fontViewportUnit: 'vw', // \u6307\u5b9a\u5b57\u4f53\u9700\u8981\u8f6c\u6362\u6210\u7684\u89c6\u7a97\u5355\u4f4d\uff0c\u9ed8\u8ba4 vw\n          selectorBlackList: ['ignore-'], // \u6307\u5b9a\u4e0d\u8f6c\u6362\u4e3a\u89c6\u7a97\u5355\u4f4d\u7684\u7c7b\u540d\uff0c\n          minPixelValue: 1,     // \u9ed8\u8ba4\u503c 1\uff0c\u5c0f\u4e8e\u6216\u7b49\u4e8e 1px \u5219\u4e0d\u8fdb\u884c\u8f6c\u6362\n          mediaQuery: true,     // \u662f\u5426\u5728\u5a92\u4f53\u67e5\u8be2\u7684 css \u4ee3\u7801\u4e2d\u4e5f\u8fdb\u884c\u8f6c\u6362\uff0c\u9ed8\u8ba4 false\n          replace: true,        // \u662f\u5426\u8f6c\u6362\u540e\u76f4\u63a5\u66f4\u6362\u5c5e\u6027\u503c\n          landscape: false      // \u662f\u5426\u5904\u7406\u6a2a\u5c4f\u60c5\u51b5\n        })\n      ]\n    }\n  },\n  resolve: {\n    alias: {\n      '@': fileURLToPath(new URL('./src', import.meta.url))\n    }\n  }\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u4e2a\u63d2\u4ef6\u6ca1\u6709\u63d0\u4f9b\u58f0\u660e\u6587\u4ef6\uff0c\u6240\u4ee5\u9700\u8981\u81ea\u5df1\u5199\u58f0\u660e\u6587\u4ef6\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="postcss-px-to-viewport.d.ts"',children:"declare module 'postcss-px-to-viewport' {\n  type Options = {\n    unitToConvert: 'px' | 'rem' | 'cm' | 'em',\n    viewportWidth: number,\n    viewportHeight: number, // not now used; TODO: need for different units and math for different properties\n    unitPrecision: number,\n    viewportUnit: string,\n    fontViewportUnit: string,  // vmin is more suitable.\n    selectorBlackList: string[],\n    propList: string[],\n    minPixelValue: number,\n    mediaQuery: boolean,\n    replace: boolean,\n    landscape: boolean,\n    landscapeUnit: string,\n    landscapeWidth: number\n  }\n  export default function (options: Partial<Options>): any\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5f15\u5165\u58f0\u660e\u6587\u4ef6\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "extends": "@vue/tsconfig/tsconfig.web.json",\n  "include": ["env.d.ts", "src/**/*", "src/**/*.vue", "postcss-px-to-viewport.d.ts"],\n  "exclude": ["src/**/__tests__/*"],\n  "compilerOptions": {\n    "composite": true,\n    "baseUrl": ".",\n    "paths": {\n      "@/*": ["./src/*"]\n    }\n  }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var s=t(7294);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);