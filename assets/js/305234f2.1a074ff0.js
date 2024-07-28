"use strict";(self.webpackChunkdongdong_12138_github_io=self.webpackChunkdongdong_12138_github_io||[]).push([[8418],{5933:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>a});var r=s(5893),l=s(1151);const d={},c="TypeScript",t={id:"front-base/TypeScript",title:"TypeScript",description:"\u7c7b\u578b\u58f0\u660e",source:"@site/docs/front-base/TypeScript.md",sourceDirName:"front-base",slug:"/front-base/TypeScript",permalink:"/docs/front-base/TypeScript",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/front-base/TypeScript.md",tags:[],version:"current",frontMatter:{},sidebar:"front-base",previous:{title:"SQL \u8bed\u53e5",permalink:"/docs/front-base/SQL\u8bed\u53e5"},next:{title:"\u79fb\u52a8\u7aef",permalink:"/docs/front-base/\u79fb\u52a8\u7aef"}},i={},a=[{value:"\u7c7b\u578b\u58f0\u660e",id:"\u7c7b\u578b\u58f0\u660e",level:2},{value:"\u7c7b\u578b\u63a8\u65ad",id:"\u7c7b\u578b\u63a8\u65ad",level:2},{value:"\u7c7b\u578b\u603b\u89c8",id:"\u7c7b\u578b\u603b\u89c8",level:2},{value:"\u5e38\u7528\u7c7b\u578b",id:"\u5e38\u7528\u7c7b\u578b",level:2},{value:"\u5b57\u9762\u91cf",id:"\u5b57\u9762\u91cf",level:3},{value:"any",id:"any",level:3},{value:"unknown",id:"unknown",level:3},{value:"never",id:"never",level:3},{value:"void",id:"void",level:3},{value:"object",id:"object",level:3},{value:"tuple",id:"tuple",level:3},{value:"enum",id:"enum",level:3},{value:"\u2f83\u5b9a\u4e49\u7c7b\u578b",id:"\u5b9a\u4e49\u7c7b\u578b",level:2},{value:"\u62bd\u8c61\u7c7b",id:"\u62bd\u8c61\u7c7b",level:2},{value:"\u63a5\u53e3",id:"\u63a5\u53e3",level:2},{value:"\u5c5e\u6027\u4fee\u9970\u7b26",id:"\u5c5e\u6027\u4fee\u9970\u7b26",level:2},{value:"\u6cdb\u578b",id:"\u6cdb\u578b",level:2}];function o(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"typescript",children:"TypeScript"}),"\n",(0,r.jsx)(e.h2,{id:"\u7c7b\u578b\u58f0\u660e",children:"\u7c7b\u578b\u58f0\u660e"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"let a: string;    // \u53d8\u91cf a \u53ea\u80fd\u5b58\u50a8\u5b57\u7b26\u4e32\nlet b: number;    // \u53d8\u91cf b \u53ea\u80fd\u5b58\u50a8\u6570\u503c\nlet c: boolean;   // \u53d8\u91cf c \u53ea\u80fd\u5b58\u50a8\u5e03\u5c14\u503c\n\na = 'hello';\na = 100;    // \u8b66\u544a\uff1a\u4e0d\u80fd\u5c06\u7c7b\u578b\u201cnumber\u201d\u5206\u914d\u7ed9\u7c7b\u578b\u201cstring\u201d\n\nb = 666;\nb = '\u4f60\u597d'; // \u8b66\u544a\uff1a\u4e0d\u80fd\u5c06\u7c7b\u578b\u201cstring\u201d\u5206\u914d\u7ed9\u7c7b\u578b\u201cnumber\u201d\n\nc = true;\nc = 666;    // \u8b66\u544a\uff1a\u4e0d\u80fd\u5c06\u7c7b\u578b\u201cnumber\u201d\u5206\u914d\u7ed9\u7c7b\u578b\u201cboolean\u201d\n\n// \u53c2\u6570 x\u3001y \u5fc5\u987b\u662f\u6570\u5b57\uff0c\u51fd\u6570\u8fd4\u56de\u503c\u4e5f\u5fc5\u987b\u662f\u6570\u5b57\nfunction demo(x: number, y: number): number {\n  return x + y;\n}\ndemo(100, 200);\ndemo(100, '200');     // \u8b66\u544a\uff1a\u4e0d\u80fd\u5c06\u7c7b\u578b\u201cstring\u201d\u5206\u914d\u7ed9\u7c7b\u578b\u201cnumber\u201d\ndemo(100, 200, 300);  // \u8b66\u544a\uff1a\u5e94\u6709 2 \u4e2a\u53c2\u6570\uff0c\u4f46\u83b7\u5f97 3 \u4e2a\ndemo(100);            // \u8b66\u544a\uff1a\u5e94\u6709 2 \u4e2a\u53c2\u6570\uff0c\u4f46\u83b7\u5f97 1 \u4e2a\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u7c7b\u578b\u63a8\u65ad",children:"\u7c7b\u578b\u63a8\u65ad"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"let d = -99;  // TypeScript \u4f1a\u63a8\u65ad\u51fa\u53d8\u91cf d \u7684\u7c7b\u578b\u662f\u6570\u5b57\nd = false;    // \u8b66\u544a\uff1a\u4e0d\u80fd\u5c06\u7c7b\u578b\u201cboolean\u201d\u5206\u914d\u7ed9\u7c7b\u578b\u201cnumber\u201d\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u7c7b\u578b\u603b\u89c8",children:"\u7c7b\u578b\u603b\u89c8"}),"\n",(0,r.jsx)(e.p,{children:"JavaScript \u4e2d\u7684\u6570\u636e\u7c7b\u578b\uff1astring\u3001number\u3001boolean\u3001undefined\u3001null\u3001bigint\u3001symbol\u3001object\u3002"}),"\n",(0,r.jsx)(e.p,{children:"TypeScript \u4e2d\u7684\u6570\u636e\u7c7b\u578b\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"JavaScript \u4e2d\u7684\u6570\u636e\u7c7b\u578b"}),"\n",(0,r.jsx)(e.li,{children:"\u65b0\u589e\u7c7b\u578b\uff1aany\u3001unknown\u3001void\u3001never\u3001enum\u3001tuple"}),"\n",(0,r.jsx)(e.li,{children:"\u2f83\u5b9a\u4e49\u7c7b\u578b\uff1atype\u3001interface"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u6ce8\u610f\uff0cJS \u4e2d\u7684\u4e09\u4e2a\u6784\u9020\u51fd\u6570\uff1aString\u3001Number\u3001Boolean\uff0c\u4ed6\u4eec\u53ea\u2f64\u4e8e\u5305\u88c5\u5bf9\u8c61\uff0c\u5f00\u53d1\u65f6\u5f88\u5c11\u53bb\u4f7f\u2f64\u4ed6\u4eec\uff0c\u5728 TS \u4e2d\u4e5f\u662f\u540c\u7406\u3002"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,r.jsx)(e.th,{children:"\u63cf\u8ff0"}),(0,r.jsx)(e.th,{children:"\u4e3e\u4f8b"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"string"}),(0,r.jsx)(e.td,{children:"\u5b57\u7b26\u4e32"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.code,{children:"'hello'"}),"\u3001",(0,r.jsx)(e.code,{children:"'ok'"}),"\u3001",(0,r.jsx)(e.code,{children:"'\u4f60\u597d'"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"number"}),(0,r.jsx)(e.td,{children:"\u6570\u503c"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.code,{children:"1"}),"\u3001",(0,r.jsx)(e.code,{children:"-33"}),"\u3001",(0,r.jsx)(e.code,{children:"2.5"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"boolean"}),(0,r.jsx)(e.td,{children:"\u5e03\u5c14\u503c"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.code,{children:"true"}),"\u3001",(0,r.jsx)(e.code,{children:"false"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u5b57\u9762\u91cf"}),(0,r.jsx)(e.td,{children:"\u5b57\u9762\u91cf\u503c"}),(0,r.jsx)(e.td,{children:"\u503c\u672c\u8eab"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"any"}),(0,r.jsx)(e.td,{children:"\u4efb\u610f\u7c7b\u578b"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.code,{children:"1"}),"\u3001",(0,r.jsx)(e.code,{children:"'hello'"}),"\u3001",(0,r.jsx)(e.code,{children:"true"}),"\u3001..."]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"unknown"}),(0,r.jsx)(e.td,{children:"\u7c7b\u578b\u5b89\u5168\u7684 any"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.code,{children:"1"}),"\u3001",(0,r.jsx)(e.code,{children:"'hello'"}),"\u3001",(0,r.jsx)(e.code,{children:"true"}),"\u3001..."]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"never"}),(0,r.jsx)(e.td,{children:"\u4e0d\u80fd\u662f\u4efb\u4f55\u503c"}),(0,r.jsx)(e.td,{children:"\u65e0\u503c"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"void"}),(0,r.jsxs)(e.td,{children:["\u7a7a \u6216 ",(0,r.jsx)(e.code,{children:"undefined"})]}),(0,r.jsxs)(e.td,{children:["\u7a7a \u6216 ",(0,r.jsx)(e.code,{children:"undefined"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"object"}),(0,r.jsx)(e.td,{children:"\u4efb\u610f\u7684 JS \u5bf9\u8c61"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"{name: '\u5f20\u4e09'}"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"tuple"}),(0,r.jsx)(e.td,{children:"\u5143\u7ec4\uff0c\u56fa\u5b9a\u957f\u5ea6\u7684\u6570\u7ec4"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"[4, 5]"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"enum"}),(0,r.jsx)(e.td,{children:"\u679a\u4e3e"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"enum{A, B}"})})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u5e38\u7528\u7c7b\u578b",children:"\u5e38\u7528\u7c7b\u578b"}),"\n",(0,r.jsx)(e.h3,{id:"\u5b57\u9762\u91cf",children:"\u5b57\u9762\u91cf"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"let a: '\u4f60\u597d';  // a \u7684\u503c\u53ea\u80fd\u4e3a\u5b57\u7b26\u4e32\u201c\u4f60\u597d\u201d\nlet b: 100;     // b \u7684\u503c\u53ea\u80fd\u4e3a\u6570\u5b57 100\na = '\u6b22\u8fce';     // \u8b66\u544a\uff1a\u4e0d\u80fd\u5c06\u7c7b\u578b\u201c\"\u6b22\u8fce\"\u201d\u5206\u914d\u7ed9\u7c7b\u578b\u201c\"\u4f60\u597d\"\u201d\nb = 200;        // \u8b66\u544a\uff1a\u4e0d\u80fd\u5c06\u7c7b\u578b\u201c200\u201d\u5206\u914d\u7ed9\u7c7b\u578b\u201c100\u201d\n\nlet gender: '\u7537' | '\u2f25';  // \u5b9a\u4e49\u2f00\u4e2a gender \u53d8\u91cf\uff0c\u503c\u53ea\u80fd\u4e3a\u5b57\u7b26\u4e32\u201c\u7537\u201d\u6216\u201c\u2f25\u201d\ngender = '\u7537';\ngender = '\u672a\u77e5';  // \u4e0d\u80fd\u5c06\u7c7b\u578b\u201c\"\u672a\u77e5\"\u201d\u5206\u914d\u7ed9\u7c7b\u578b\u201c\"\u7537\" | \"\u2f25\"\u201d\n"})}),"\n",(0,r.jsx)(e.h3,{id:"any",children:"any"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"any"})," \u8868\u793a\u4efb\u610f\u7c7b\u578b\uff0c\u76f8\u5f53\u4e8e\u5173\u95ed\u4e86\u5bf9\u8be5\u53d8\u91cf\u7684\u7c7b\u578b\u68c0\u67e5\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"let a: any;   // \u663e\u5f0f\u58f0\u660e\u4e3a any\na = 100;\na = '\u4f60\u597d';\na = false;\n\nlet b;        // \u9690\u5f0f\u58f0\u660e\u4e3a any\nb = 100;\nb = '\u4f60\u597d';\nb = false;\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u6ce8\u610f\uff0c",(0,r.jsx)(e.code,{children:"any"})," \u7c7b\u578b\u7684\u53d8\u91cf\uff0c\u53ef\u4ee5\u8d4b\u503c\u7ed9\u4efb\u610f\u7c7b\u578b\u7684\u53d8\u91cf\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"let a;\nlet x: string;\n\nx = a;  // \u2f46\u8b66\u544a\n"})}),"\n",(0,r.jsx)(e.h3,{id:"unknown",children:"unknown"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"unknown"})," \u8868\u793a\u672a\u77e5\u7c7b\u578b\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a\u2f00\u4e2a\u7c7b\u578b\u5b89\u5168\u7684 ",(0,r.jsx)(e.code,{children:"any"}),"\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"unknown"})," \u9002\u2f64\u4e8e\u4e00\u5f00\u59cb\u4e0d\u77e5\u9053\u6570\u636e\u7684\u7c7b\u578b\uff0c\u540e\u671f\u624d\u80fd\u786e\u5b9a\u6570\u636e\u7684\u7c7b\u578b\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"let a: unknown;\n\n// \u4ee5\u4e0b\u5bf9 a \u7684\u8d4b\u503c\uff0c\u5747\u6b63\u5e38\na = 100;\na = false;\na = '\u4f60\u597d';\n\nlet x: string;\nx = a;  // \u8b66\u544a\uff1a\u4e0d\u80fd\u5c06\u7c7b\u578b\u201cunknown\u201d\u5206\u914d\u7ed9\u7c7b\u578b\u201cstring\u201d\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u82e5\u5c31\u662f\u60f3\u628a ",(0,r.jsx)(e.code,{children:"a"})," \u8d4b\u503c\u7ed9 ",(0,r.jsx)(e.code,{children:"x"}),"\uff0c\u53ef\u4ee5\u2f64\u4ee5\u4e0b\u4e09\u79cd\u5199\u6cd5\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"let x: string;\nlet a: unknown;\na = 'hello';\n\n// \u7b2c\u2f00\u79cd\u2f45\u5f0f\uff1a\u52a0\u7c7b\u578b\u5224\u65ad\nif (typeof a === 'string') {\n  x = a;\n}\n\n// \u7b2c\u2f06\u79cd\u2f45\u5f0f\uff1a\u52a0\u65ad\u2f94\nx = a as string;\n\n// \u7b2c\u4e09\u79cd\u2f45\u5f0f\uff1a\u52a0\u65ad\u2f94\nx = <string>a;\n"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"any"})," \u540e\u70b9\u4efb\u4f55\u7684\u4e1c\u2ec4\u90fd\u4e0d\u4f1a\u62a5\u9519\uff0c\u2f7d ",(0,r.jsx)(e.code,{children:"unknown"})," \u6b63\u597d\u4e0e\u4e4b\u76f8\u53cd\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"let str1: string = 'hello';\nstr1.toUpperCase(); // \u2f46\u8b66\u544a\n\nlet str2: any = 'hello';\nstr2.toUpperCase(); // \u2f46\u8b66\u544a\n\nlet str3: unknown = 'hello';\nstr3.toUpperCase();  // \u8b66\u544a\uff1a\u201cstr3\u201d\u7684\u7c7b\u578b\u4e3a\u201c\u672a\u77e5\u201d\n\n// \u4f7f\u2f64\u65ad\u2f94\u5f3a\u5236\u6307\u5b9a str3 \u7684\u7c7b\u578b\u4e3a string\n(str3 as string).toUpperCase(); // \u2f46\u8b66\u544a\n"})}),"\n",(0,r.jsx)(e.h3,{id:"never",children:"never"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"never"})," \u8868\u793a\u4efb\u4f55\u503c\u90fd\u4e0d\u662f\uff0c\u7b80\u2f94\u4e4b\u5c31\u662f\u4e0d\u80fd\u6709\u503c\uff0c",(0,r.jsx)(e.code,{children:"undefined"}),"\u3001",(0,r.jsx)(e.code,{children:"null"}),"\u3001",(0,r.jsx)(e.code,{children:"''"}),"\u3001",(0,r.jsx)(e.code,{children:"0"})," \u90fd\u4e0d\u884c\u3002"]}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u2f0f\u4e4e\u4e0d\u2f64 ",(0,r.jsx)(e.code,{children:"never"})," \u53bb\u76f4\u63a5\u9650\u5236\u53d8\u91cf\uff0c\u56e0\u4e3a\u6ca1\u6709\u610f\u4e49\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"let a: never;\n\n// \u4ee5\u4e0b\u5bf9 a \u7684\u6240\u6709\u8d4b\u503c\u90fd\u4f1a\u6709\u8b66\u544a\na = 1;\na = true;\na = undefined;\na = null;\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"never"})," \u2f00\u822c\u662f TypeScript \u4e3b\u52a8\u63a8\u65ad\u51fa\u6765\u7684\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"let a: string;\na = 'hello';\n\nif (typeof a === 'string') {\n  a.toUpperCase();\n} else {\n  console.log(a); // TypeScript \u4f1a\u63a8\u65ad\u51fa\u6b64\u5904 a \u662f never\uff0c\u56e0\u4e3a\u6ca1\u6709\u4efb\u4f55\u2f00\u4e2a\u503c\u7b26\u5408\u6b64\u5904\u7684\u903b\u8f91\n}\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"never"})," \u4e5f\u53ef\u2f64\u4e8e\u9650\u5236\u51fd\u6570\u7684\u8fd4\u56de\u503c"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"// \u9650\u5236 demo \u51fd\u6570\u4e0d\u9700\u8981\u6709\u4efb\u4f55\u8fd4\u56de\u503c\uff0c\u4efb\u4f55\u503c\u90fd\u4e0d\u2f8f\uff0c\u8fd4\u56de undeifned\u3001null \u90fd\u4e0d\u2f8f\nfunction demo(): never {\n  throw new Error('\u7a0b\u5e8f\u5f02\u5e38\u9000\u51fa');\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"void",children:"void"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"void"})," \u5e38\u2f64\u4e8e\u9650\u5236\u51fd\u6570\u7684\u8fd4\u56de\u503c\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"// \u2f46\u8b66\u544a\nfunction demo1(): void {\n}\n\n// \u2f46\u8b66\u544a\nfunction demo2(): void {\n  return;\n}\n\n// \u2f46\u8b66\u544a\nfunction demo3(): void {\n  return undefined;\n}\n\n// \u6709\u8b66\u544a\uff1a\u4e0d\u80fd\u5c06\u7c7b\u578b\u201cnumber\u201d\u5206\u914d\u7ed9\u7c7b\u578b\u201cvoid\u201d\nfunction demo4(): void {\n  return 666;\n}\n"})}),"\n",(0,r.jsx)(e.h3,{id:"object",children:"object"}),"\n",(0,r.jsxs)(e.p,{children:["\u5173\u4e8e ",(0,r.jsx)(e.code,{children:"Object"})," \u4e0e ",(0,r.jsx)(e.code,{children:"object"}),"\uff0c\u76f4\u63a5\u8bf4\u7ed3\u8bba\uff1a\u5728\u7c7b\u578b\u9650\u5236\u65f6\uff0c",(0,r.jsx)(e.code,{children:"Object"})," \u2f0f\u4e4e\u4e0d\u2f64\uff0c\u56e0\u4e3a\u8303\u56f4\u592a\u2f24\u4e86\uff0c\u2f46\u610f\u4e49\u3002"]}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"object"})," \u7684\u542b\u4e49\uff1a\u4efb\u4f55\u3010\u2fae\u539f\u59cb\u503c\u7c7b\u578b\u3011\uff0c\u5305\u62ec\uff1a\u5bf9\u8c61\u3001\u51fd\u6570\u3001\u6570\u7ec4\u7b49\uff0c\u9650\u5236\u7684\u8303\u56f4\u2f50\u8f83\u5bbd\u6cdb\uff0c\u2f64\u7684\u5c11\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"let a: object;\n\n// \u4ee5\u4e0b\u4ee3\u7801\uff0c\u662f\u5c06\u3010\u2fae\u539f\u59cb\u7c7b\u578b\u3011\u8d4b\u7ed9 a\uff0c\u6240\u4ee5\u5747\u2f46\u8b66\u544a\na = {};\na = { name: '\u5f20\u4e09' };\na = [1, 3, 5, 7, 9];\na = function () {};\n\n// \u4ee5\u4e0b\u4ee3\u7801\uff0c\u662f\u5c06\u3010\u539f\u59cb\u7c7b\u578b\u3011\u8d4b\u7ed9 a\uff0c\u6709\u8b66\u544a\na = null;\na = undefined;\na = 1;\na = true;\na = '\u4f60\u597d';\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"Object"})," \u7684\u542b\u4e49\uff1a",(0,r.jsx)(e.code,{children:"Object"})," \u7684\u5b9e\u4f8b\u5bf9\u8c61\uff0c\u9650\u5236\u7684\u8303\u56f4\u592a\u2f24\u4e86\uff0c\u2f0f\u4e4e\u4e0d\u2f64\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"let a: Object;  // a \u7684\u503c\u5fc5\u987b\u662f Object \u7684\u5b9e\u4f8b\u5bf9\u8c61\n\n// \u4ee5\u4e0b\u4ee3\u7801\uff0c\u5747\u2f46\u8b66\u544a\uff0c\u56e0\u4e3a\u7ed9 a \u8d4b\u7684\u503c\uff0c\u90fd\u662f Object \u7684\u5b9e\u4f8b\u5bf9\u8c61\na = {};\na = { name: '\u5f20\u4e09' };\na = [1, 3, 5, 7, 9];\na = function () {};\n\n// \u4ee5\u4e0b\u4ee3\u7801\uff0c\u4e5f\u5747\u2f46\u8b66\u544a\na = 1;  // 1 \u4e0d\u662f Object \u7684\u5b9e\u4f8b\u5bf9\u8c61\uff0c\u4f46\u5176\u5305\u88c5\u5bf9\u8c61\u662f Object \u7684\u5b9e\u4f8b\uff0c\u4ee5\u4e0b\u540c\u7406\na = true;\na = '\u4f60\u597d';\n\n// \u4ee5\u4e0b\u4ee3\u7801\u5747\u6709\u8b66\u544a\na = null;       // \u8b66\u544a\uff1a\u4e0d\u80fd\u5c06\u7c7b\u578b\u201cnull\u201d\u5206\u914d\u7ed9\u7c7b\u578b\u201cObject\u201d\na = undefined;  // \u8b66\u544a\uff1a\u4e0d\u80fd\u5c06\u7c7b\u578b\u201cundefined\u201d\u5206\u914d\u7ed9\u7c7b\u578b\u201cObject\u201d\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5b9e\u9645\u5f00\u53d1\u4e2d\uff0c\u9650\u5236\u2f00\u822c\u5bf9\u8c61\uff0c\u901a\u5e38\u4f7f\u2f64\u4ee5\u4e0b\u5f62\u5f0f\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"// \u9650\u5236 person \u5bf9\u8c61\u7684\u5177\u4f53\u5185\u5bb9\uff0c\u4f7f\u2f64 , \u5206\u9694\uff0c\u95ee\u53f7\u4ee3\u8868\u53ef\u9009\u5c5e\u6027\nlet person: { name: string, age?: number };\n\n// \u9650\u5236 car \u5bf9\u8c61\u7684\u5177\u4f53\u5185\u5bb9\uff0c\u4f7f\u2f64 ; \u5206\u9694\uff0c\u5fc5\u987b\u6709 price \u548c color \u5c5e\u6027\uff0c\u5176\u4ed6\u5c5e\u6027\u4e0d\u53bb\u9650\u5236\uff0c\u6709\u6ca1\u6709\u90fd\u2f8f\nlet car: { price: number; color: string; [k: string]: any };\n\n// \u9650\u5236 student \u5bf9\u8c61\u7684\u5177\u4f53\u5185\u5bb9\uff0c\u4f7f\u2f64 \u56de\u2ecb \u5206\u9694\nlet student: {\n  id: string\n  grade: number\n};\n\n// \u4ee5\u4e0b\u4ee3\u7801\u5747\u2f46\u8b66\u544a\nperson = { name: '\u5f20\u4e09', age: 18 };\nperson = { name: '\u674e\u56db' };\ncar = { price: 100, color: '\u7ea2\u2f8a' };\nstudent = { id: 'tetqw76te01', grade: 3 };\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u9650\u5236\u51fd\u6570\u7684\u53c2\u6570\u3001\u8fd4\u56de\u503c\uff0c\u4f7f\u2f64\u4ee5\u4e0b\u5f62\u5f0f\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"let demo: (a: number, b: number) => number;\n\ndemo = function (x, y) {\n  return x + y;\n};\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u9650\u5236\u6570\u7ec4\uff0c\u4f7f\u2f64\u4ee5\u4e0b\u5f62\u5f0f"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"let arr1: string[];   // \u7b49\u4ef7\u4e8e\uff1alet arr1: Array<string>;\nlet arr2: number[];   // \u7b49\u4ef7\u4e8e\uff1alet arr2: Array<number>;\narr1 = ['a', 'b', 'c'];\narr2 = [1, 3, 5, 7, 9];\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"tuple",children:"tuple"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"tuple"})," \u8868\u793a\u5143\u7ec4\uff0c\u5c31\u662f\u2f00\u4e2a\u2ed3\u5ea6\u56fa\u5b9a\u7684\u6570\u7ec4\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"let t: [string, number];\nt = ['hello', 123];\n\n// \u8b66\u544a\uff0c\u4e0d\u80fd\u5c06\u7c7b\u578b\u201c[string, number, boolean]\u201d\u5206\u914d\u7ed9\u7c7b\u578b\u201c[string, number]\u201d\nt = ['hello', 123, false];\n"})}),"\n",(0,r.jsx)(e.h3,{id:"enum",children:"enum"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"enum"})," \u8868\u793a\u679a\u4e3e\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"// \u5b9a\u4e49\u2f00\u4e2a\u679a\u4e3e\nenum Color {\n  Red,\n  Blue,\n  Black,\n  Gold\n}\nconsole.log(Color);\n/*\n{\n  0: 'Red',\n  1: 'Blue',\n  2: 'Black',\n  3: 'Gold',\n  Red: 0,\n  Blue: 1,\n  Black: 2,\n  Gold: 3\n}\n*/\n\n// \u5b9a\u4e49\u2f00\u4e2a\u679a\u4e3e\uff0c\u5e76\u6307\u5b9a\u5176\u521d\u59cb\u503c\nenum Color2 {\n  Red = 6,\n  Blue,\n  Black,\n  Gold\n}\nconsole.log(Color2);\n/*\n{\n  6: 'Red',\n  7: 'Blue',\n  8: 'Black',\n  9: 'Gold',\n  Red: 6,\n  Blue: 7,\n  Black: 8,\n  Gold: 9\n}\n*/\n\n// \u5b9a\u4e49\u2f00\u4e2a phone \u53d8\u91cf\nlet phone: { name: string, price: number, color: Color };\nphone = { name: '\u534e\u4e3aMate60', price: 6500, color: Color.Red };\nphone = { name: 'iPhone15Pro', price: 7999, color: Color.Blue };\nif (phone.color === Color.Red) {\n  console.log('\u2f3f\u673a\u662f\u7ea2\u2f8a\u7684');\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u5b9a\u4e49\u7c7b\u578b",children:"\u2f83\u5b9a\u4e49\u7c7b\u578b"}),"\n",(0,r.jsx)(e.p,{children:"\u2f83\u5b9a\u4e49\u7c7b\u578b\uff0c\u53ef\u4ee5\u66f4\u7075\u6d3b\u7684\u9650\u5236\u7c7b\u578b\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"// \u6027\u522b\u7684\u679a\u4e3e\nenum Gender {\n   Male,\n   Female\n}\n\n// \u2f83\u5b9a\u4e49\u2f00\u4e2a\u5e74\u7ea7\u7c7b\u578b\uff08\u2fbc\u2f00\u3001\u2fbc\u2f06\u3001\u2fbc\u4e09\uff09\ntype Grade = 1 | 2 | 3\n\n// \u2f83\u5b9a\u4e49\u2f00\u4e2a\u5b66\u2f63\u7c7b\u578b\ntype Student = {\n   name: string,\n   age: number,\n   gender: Gender,\n   grade: Grade\n}\n\n// \u5b9a\u4e49\u4e24\u4e2a\u5b66\u2f63\u53d8\u91cf\uff1as1\u3001s2\nlet s1: Student;\nlet s2: Student;\ns1 = { name: '\u5f20\u4e09', age: 18, gender: Gender.Male, grade: 1 };\ns2 = { name: '\u674e\u56db', age: 18, gender: Gender.Female, grade: 2 };\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u62bd\u8c61\u7c7b",children:"\u62bd\u8c61\u7c7b"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",metastring:'title="\u5e38\u89c4\u7c7b"',children:"class Person {\n   name: string;\n   age: number;\n\n   constructor(name: string, age: number) {\n      this.name = name;\n      this.age = age;\n   }\n}\n\nconst p1 = new Person('\u5f20\u4e09', 18);\nconst p2 = new Person('\u674e\u56db', 19);\nconsole.log(p1);\nconsole.log(p2);\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",metastring:'title="\u7ee7\u627f"',children:"// Person \u7c7b\nclass Person {}\n\n// Teacher \u7c7b\u7ee7\u627f Person\nclass Teacher extends Person {}\n\n// Student \u7c7b\u7ee7\u627f Person\nclass Student extends Person {}\n\n// Person \u5b9e\u4f8b\nconst p1 = new Person('\u5468\u6770\u4f26', 38);\n\n// Student \u5b9e\u4f8b\nconst s1 = new Student('\u5f20\u540c\u5b66', 18);\nconst s2 = new Student('\u674e\u540c\u5b66', 20);\n\n// Teacher \u5b9e\u4f8b\nconst t1 = new Teacher('\u5218\u2f7c\u5e08', 40);\nconst t2 = new Teacher('\u5b59\u2f7c\u5e08', 50);\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",metastring:'title="\u62bd\u8c61\u7c7b\uff1a\u4e0d\u80fd\u53bb\u5b9e\u4f8b\u5316\uff0c\u4f46\u53ef\u4ee5\u88ab\u522b\u2f08\u7ee7\u627f\uff0c\u62bd\u8c61\u7c7b\u2fa5\u6709\u62bd\u8c61\u2f45\u6cd5"',children:"// Person\uff08\u62bd\u8c61\u7c7b\uff09\nabstract class Person {}\n\n// Teacher \u7c7b\u7ee7\u627f Person\nclass Teacher extends Person {\n   // \u6784\u9020\u5668\n   constructor(name: string, age: number) {\n      super(name, age);\n   }\n   // \u2f45\u6cd5\n   speak() {\n      console.log('\u4f60\u597d\uff01\u6211\u662f\u2f7c\u5e08:', this.name);\n   }\n}\n\n// Student \u7c7b\u7ee7\u627f Person\nclass Student extends Person {}\n\n// Person \u5b9e\u4f8b\n// const p1 = new Person('\u5468\u6770\u4f26', 38); // \u7531\u4e8e Person \u662f\u62bd\u8c61\u7c7b\uff0c\u6240\u4ee5\u6b64\u5904\u4e0d\u53ef\u4ee5 new Person \u7684\u5b9e\u4f8b\u5bf9\u8c61\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u63a5\u53e3",children:"\u63a5\u53e3"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u63a5\u2f1d\u2f64\u4e8e\u9650\u5236\u2f00\u4e2a\u7c7b\u4e2d\u5305\u542b\u54ea\u4e9b\u5c5e\u6027\u548c\u2f45\u6cd5\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"// Person \u63a5\u2f1d\ninterface Person {\n  // \u5c5e\u6027\u58f0\u660e\n  name: string;\n  age: number;\n\n  // \u2f45\u6cd5\u58f0\u660e\n  speak(): void;\n}\n\n// Teacher \u5b9e\u73b0 Person \u63a5\u2f1d\nclass Teacher implements Person {\n  name: string;\n  age: number;\n\n  // \u6784\u9020\u5668\n  constructor(name: string, age: number) {\n    this.name = name;\n    this.age = age;\n  }\n\n  // \u2f45\u6cd5\n  speak() {\n    console.log('\u4f60\u597d\uff01\u6211\u662f\u2f7c\u5e08:', this.name);\n  }\n}\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u63a5\u2f1d\u662f\u53ef\u4ee5\u91cd\u590d\u58f0\u660e\u7684\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"// Person \u63a5\u2f1d\ninterface PersonInter {\n   // \u5c5e\u6027\u58f0\u660e\n   name: string;\n   age: number;\n}\n\n// Person \u63a5\u2f1d\ninterface PersonInter {\n   // \u2f45\u6cd5\u58f0\u660e\n   speak(): void;\n}\n\n// Person \u7c7b\u5b9e\u73b0 PersonInter\nclass Person implements PersonInter {\n   name: string;\n   age: number;\n\n   // \u6784\u9020\u5668\n   constructor(name: string, age: number) {\n      this.name = name;\n      this.age = age;\n   }\n\n   // \u2f45\u6cd5\n   speak() {\n      console.log('\u4f60\u597d\uff01\u6211\u662f\u2f7c\u5e08:', this.name);\n   }\n}\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u3010\u63a5\u2f1d\u3011\u4e0e\u3010\u2f83\u5b9a\u4e49\u7c7b\u578b\u3011\u7684\u533a\u522b\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u63a5\u53e3\u53ef\u4ee5\u5f53\u81ea\u5b9a\u4e49\u7c7b\u578b\u53bb\u4f7f\u7528\uff0c\u53ef\u4ee5\u9650\u5236\u7c7b\u7684\u7ed3\u6784"}),"\n",(0,r.jsx)(e.li,{children:"\u81ea\u5b9a\u4e49\u7c7b\u578b\u4ec5\u4ec5\u5c31\u662f\u81ea\u5b9a\u4e49\u7c7b\u578b"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"// Person \u63a5\u2f1d\ninterface Person {\n   name: string;\n   age: number;\n   speak(): void;\n}\n\n// Person \u7c7b\u578b\n// type Person = {\n//    name: string\n//    age: number\n//    speak(): void\n// }\n\n// \u63a5\u2f1d\u5f53\u6210\u2f83\u5b9a\u4e49\u7c7b\u578b\u53bb\u4f7f\u2f64\nlet person: Person = {\n   name: '\u5f20\u4e09',\n   age: 18,\n   speak() {\n      console.log('\u4f60\u597d\uff01');\n   }\n};\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u3010\u63a5\u2f1d\u3011\u4e0e\u3010\u62bd\u8c61\u7c7b\u3011\u7684\u533a\u522b\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u62bd\u8c61\u7c7b\u53ef\u4ee5\u6709\u666e\u901a\u65b9\u6cd5\uff0c\u4e5f\u53ef\u4ee5\u6709\u62bd\u8c61\u65b9\u6cd5\uff0c\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"extends"})," \u53bb\u7ee7\u627f\u62bd\u8c61\u7c7b"]}),"\n",(0,r.jsxs)(e.li,{children:["\u63a5\u53e3\u53ea\u80fd\u6709\u62bd\u8c61\u65b9\u6cd5\uff0c\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"implements"})," \u53bb\u5b9e\u73b0\u63a5\u53e3"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",metastring:'title="\u62bd\u8c61\u7c7b\u4e3e\u4f8b"',children:"// \u62bd\u8c61\u7c7b \u2014\u2014 Person\nabstract class Person {\n   // \u5c5e\u6027\n   name: string;\n   age: number;\n\n   // \u6784\u9020\u5668\n   constructor(name: string, age: number) {\n      this.name = name;\n      this.age = age;\n   }\n\n   // \u62bd\u8c61\u2f45\u6cd5\n   abstract speak(): void\n\n   // \u666e\u901a\u2f45\u6cd5\n   walk() {\n      console.log('\u6211\u5728\u2f8f\u2f9b\u4e2d....');\n   }\n}\n\n// Teacher \u7c7b\u7ee7\u627f\u62bd\u8c61\u7c7b Person\nclass Teacher extends Person {\n   constructor(name: string, age: number) {\n      super(name, age);\n   }\n   speak() {\n      console.log(`\u6211\u662f\u2f7c\u5e08\uff0c\u6211\u7684\u540d\u5b57\u662f${this.name}`);\n   }\n}\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",metastring:'title="\u63a5\u53e3\u4e3e\u4f8b"',children:"// \u63a5\u2f1d \u2014\u2014 Person\uff0c\u53ea\u80fd\u5305\u542b\u62bd\u8c61\u2f45\u6cd5\ninterface Person {\n   // \u5c5e\u6027\uff0c\u4e0d\u5199\u5177\u4f53\u503c\n   name: string;\n   age: number;\n\n   // \u2f45\u6cd5\uff0c\u4e0d\u5199\u5177\u4f53\u5b9e\u73b0\n   speak(): void;\n}\n\n// \u521b\u5efa Teacher \u7c7b\u5b9e\u73b0 Person \u63a5\u2f1d\nclass Teacher implements Person {\n   name: string;\n   age: number;\n   constructor(name: string, age: number) {\n      this.name = name;\n      this.age = age;\n   }\n   speak() {\n      console.log('\u6211\u5728\u2edc\u5feb\u7684\u2f8f\u2f9b\u4e2d......');\n   }\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5c5e\u6027\u4fee\u9970\u7b26",children:"\u5c5e\u6027\u4fee\u9970\u7b26"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u4fee\u9970\u7b26"}),(0,r.jsx)(e.th,{children:"\u542b\u4e49"}),(0,r.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"readonly"}),(0,r.jsx)(e.td,{children:"\u53ea\u8bfb\u5c5e\u6027"}),(0,r.jsx)(e.td,{children:"\u5c5e\u6027\u65e0\u6cd5\u4fee\u6539"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"public"}),(0,r.jsx)(e.td,{children:"\u516c\u5f00\u7684"}),(0,r.jsx)(e.td,{children:"\u53ef\u4ee5\u5728\u7c7b\u3001\u5b50\u7c7b\u548c\u5bf9\u8c61\u4e2d\u4fee\u6539"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"protected"}),(0,r.jsx)(e.td,{children:"\u53d7\u4fdd\u62a4\u7684"}),(0,r.jsx)(e.td,{children:"\u53ef\u4ee5\u5728\u7c7b\u3001\u5b50\u7c7b\u4e2d\u4fee\u6539"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"private"}),(0,r.jsx)(e.td,{children:"\u79c1\u6709\u7684"}),(0,r.jsx)(e.td,{children:"\u53ef\u4ee5\u5728\u7c7b\u4e2d\u4fee\u6539"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u6cdb\u578b",children:"\u6cdb\u578b"}),"\n",(0,r.jsx)(e.p,{children:"\u5b9a\u4e49\u2f00\u4e2a\u51fd\u6570\u6216\u7c7b\u65f6\uff0c\u6709\u4e9b\u60c5\u51b5\u4e0b\u2f46\u6cd5\u786e\u5b9a\u5176\u4e2d\u8981\u4f7f\u2f64\u7684\u5177\u4f53\u7c7b\u578b\uff08\u8fd4\u56de\u503c\u3001\u53c2\u6570\u3001\u5c5e\u6027\u7684\u7c7b\u578b\u4e0d\u80fd\u786e\u5b9a\uff09\uff0c\u6b64\u65f6\u5c31\u9700\u8981\u6cdb\u578b\u4e86\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u4e3e\u4f8b\uff1a",(0,r.jsx)(e.code,{children:"<T>"})," \u5c31\u662f\u6cdb\u578b\uff0c\uff08\u4e0d\u2f00\u5b9a\u2fae\u53eb ",(0,r.jsx)(e.code,{children:"T"}),"\uff09\uff0c\u8bbe\u7f6e\u6cdb\u578b\u540e\u5373\u53ef\u5728\u51fd\u6570\u4e2d\u4f7f\u2f64 ",(0,r.jsx)(e.code,{children:"T"})," \u6765\u8868\u793a\u8be5\u7c7b\u578b\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"function test<T>(arg: T): T {\n   return arg;\n}\n\n// \u4e0d\u6307\u540d\u7c7b\u578b\uff0cTS \u4f1a\u2f83\u52a8\u63a8\u65ad\u51fa\u6765\ntest(10);\n// \u6307\u540d\u5177\u4f53\u7684\u7c7b\u578b\ntest<number>(10);\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u6cdb\u578b\u53ef\u4ee5\u5199\u591a\u4e2a\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"function test<T, K>(a: T, b: K): K {\n   return b;\n}\n\n// \u4e3a\u591a\u4e2a\u6cdb\u578b\u6307\u5b9a\u5177\u4f53\u2f83\u503c\ntest<number, string>(10, 'hello');\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u7c7b\u4e2d\u540c\u6837\u53ef\u4ee5\u4f7f\u2f64\u6cdb\u578b\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"class MyClass<T> {\n   prop: T;\n   constructor(prop: T) {\n      this.prop = prop;\n   }\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u4e5f\u53ef\u4ee5\u5bf9\u6cdb\u578b\u7684\u8303\u56f4\u8fdb\u2f8f\u7ea6\u675f\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"interface Demo {\n   length: number;\n}\n\n// \u6cdb\u578b T \u5fc5\u987b\u662f MyInter \u7684\u2f26\u7c7b\uff0c\u5373\uff1a\u5fc5\u987b\u62e5\u6709 length \u5c5e\u6027\nfunction test<T extends Demo>(arg: T): number {\n   return arg.length;\n}\n\ntest(10); // \u7c7b\u578b\u201cnumber\u201d\u7684\u53c2\u6570\u4e0d\u80fd\u8d4b\u7ed9\u7c7b\u578b\u201cDemo\u201d\u7684\u53c2\u6570\ntest({ name: '\u5f20\u4e09' }); // \u7c7b\u578b\u201c{ name: string; }\u201d\u7684\u53c2\u6570\u4e0d\u80fd\u8d4b\u7ed9\u7c7b\u578b\u201cDemo\u201d\u7684\u53c2\u6570\ntest('123');\ntest({ name: '\u5f20\u4e09', length: 10 });\n"})})]})}function h(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},1151:(n,e,s)=>{s.d(e,{Z:()=>t,a:()=>c});var r=s(7294);const l={},d=r.createContext(l);function c(n){const e=r.useContext(d);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:c(n.components),r.createElement(d.Provider,{value:e},n.children)}}}]);