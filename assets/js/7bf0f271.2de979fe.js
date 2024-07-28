"use strict";(self.webpackChunkdongdong_12138_github_io=self.webpackChunkdongdong_12138_github_io||[]).push([[2689],{9573:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>a});var s=r(5893),o=r(1151);const l={sidebar_position:1},t="\u51c6\u5907\u5de5\u4f5c",i={id:"front-base/Promise/\u51c6\u5907\u5de5\u4f5c",title:"\u51c6\u5907\u5de5\u4f5c",description:"\u533a\u522b\u5b9e\u4f8b\u5bf9\u8c61\u4e0e\u51fd\u6570\u5bf9\u8c61",source:"@site/docs/front-base/Promise/01-\u51c6\u5907\u5de5\u4f5c.md",sourceDirName:"front-base/Promise",slug:"/front-base/Promise/\u51c6\u5907\u5de5\u4f5c",permalink:"/docs/front-base/Promise/\u51c6\u5907\u5de5\u4f5c",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/front-base/Promise/01-\u51c6\u5907\u5de5\u4f5c.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"front-base",previous:{title:"Git",permalink:"/docs/front-base/Git"},next:{title:"Promise \u7684\u7406\u89e3\u548c\u4f7f\u7528",permalink:"/docs/front-base/Promise/Promise\u7684\u7406\u89e3\u548c\u4f7f\u7528"}},c={},a=[{value:"\u533a\u522b\u5b9e\u4f8b\u5bf9\u8c61\u4e0e\u51fd\u6570\u5bf9\u8c61",id:"\u533a\u522b\u5b9e\u4f8b\u5bf9\u8c61\u4e0e\u51fd\u6570\u5bf9\u8c61",level:2},{value:"\u4e24\u79cd\u7c7b\u578b\u7684\u56de\u8c03\u51fd\u6570",id:"\u4e24\u79cd\u7c7b\u578b\u7684\u56de\u8c03\u51fd\u6570",level:2},{value:"\u540c\u6b65\u56de\u8c03",id:"\u540c\u6b65\u56de\u8c03",level:3},{value:"\u5f02\u6b65\u56de\u8c03",id:"\u5f02\u6b65\u56de\u8c03",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:3},{value:"JS \u4e2d\u7684\u5f02\u5e38\uff08error\uff09\u5904\u7406",id:"js-\u4e2d\u7684\u5f02\u5e38error\u5904\u7406",level:2},{value:"\u9519\u8bef\u7684\u7c7b\u578b",id:"\u9519\u8bef\u7684\u7c7b\u578b",level:3},{value:"\u9519\u8bef\u5904\u7406\uff08\u6355\u83b7\u9519\u8bef\u4e0e\u629b\u51fa\u9519\u8bef\uff09",id:"\u9519\u8bef\u5904\u7406\u6355\u83b7\u9519\u8bef\u4e0e\u629b\u51fa\u9519\u8bef",level:3},{value:"Error \u5bf9\u8c61\u7684\u7ed3\u6784",id:"error-\u5bf9\u8c61\u7684\u7ed3\u6784",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,s.jsx)(n.h2,{id:"\u533a\u522b\u5b9e\u4f8b\u5bf9\u8c61\u4e0e\u51fd\u6570\u5bf9\u8c61",children:"\u533a\u522b\u5b9e\u4f8b\u5bf9\u8c61\u4e0e\u51fd\u6570\u5bf9\u8c61"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5b9e\u4f8b\u5bf9\u8c61\uff1a",(0,s.jsx)(n.code,{children:"new"})," \u4e00\u4e2a\u6784\u9020\u51fd\u6570\u4ea7\u751f\u7684\u5bf9\u8c61\uff0c\u79f0\u4e3a\u5b9e\u4f8b\u5bf9\u8c61\uff0c\u7b80\u79f0\u4e3a\u5bf9\u8c61\uff1b"]}),"\n",(0,s.jsx)(n.li,{children:"\u51fd\u6570\u5bf9\u8c61\uff1a\u5c06\u51fd\u6570\u4f5c\u4e3a\u5bf9\u8c61\u4f7f\u7528\u65f6\uff0c\u7b80\u79f0\u4e3a\u51fd\u6570\u5bf9\u8c61\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// Fn \u662f\u51fd\u6570\nfunction Fn() {}\n\n// Fn \u53ea\u6709 new \u7684\u65f6\u5019\u624d\u53ef\u4ee5\u79f0\u4e3a\u6784\u9020\u51fd\u6570\n// fn \u79f0\u4e3a\u5b9e\u4f8b\u5bf9\u8c61\uff08\u7b80\u79f0\u4e3a\u5bf9\u8c61\uff09\nconst fn = new Fn()\n\n// Fn \u4f5c\u4e3a\u5bf9\u8c61\u4f7f\u7528\u65f6\uff0c\u79f0\u4e3a\u51fd\u6570\u5bf9\u8c61\nconsole.log(Fn.prototype)\t\t\nFn.bind({})\n\n// $ \u4f5c\u4e3a\u51fd\u6570\u4f7f\u7528\n$('#test')\n// $ \u4f5c\u4e3a\u51fd\u6570\u5bf9\u8c61\u4f7f\u7528\n$.get('/test')\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4e24\u79cd\u7c7b\u578b\u7684\u56de\u8c03\u51fd\u6570",children:"\u4e24\u79cd\u7c7b\u578b\u7684\u56de\u8c03\u51fd\u6570"}),"\n",(0,s.jsx)(n.h3,{id:"\u540c\u6b65\u56de\u8c03",children:"\u540c\u6b65\u56de\u8c03"}),"\n",(0,s.jsx)(n.p,{children:"\u540c\u6b65\u56de\u8c03\uff1a\u7acb\u5373\u6267\u884c\uff0c\u5b8c\u5168\u6267\u884c\u5b8c\u4e86\u624d\u7ed3\u675f\uff0c\u4e0d\u4f1a\u653e\u5165\u56de\u8c03\u961f\u5217\u4e2d\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\uff1a\u6570\u7ec4\u904d\u5386\u76f8\u5173\u7684\u56de\u8c03\u3001Promise \u7684 ",(0,s.jsx)(n.code,{children:"executor"})," \u51fd\u6570\u7b49\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const arr = [1, 3, 5]\narr.forEach(item => {   // \u540c\u6b65\u56de\u8c03\u51fd\u6570\uff0c\u4e0d\u4f1a\u653e\u5165\u56de\u8c03\u961f\u5217\uff0c\u800c\u662f\u7acb\u5373\u6267\u884c\n  console.log(item)\n})\nconsole.log('forEach()\u4e4b\u540e')\n\n// 1\n// 3\n// 5\n// forEach()\u4e4b\u540e\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u5f02\u6b65\u56de\u8c03",children:"\u5f02\u6b65\u56de\u8c03"}),"\n",(0,s.jsx)(n.p,{children:"\u5f02\u6b65\u56de\u8c03\uff1a\u4e0d\u4f1a\u7acb\u5373\u6267\u884c\uff0c\u800c\u662f\u653e\u5165\u56de\u8c03\u961f\u5217\u4e2d\uff0c\u5c06\u6765\u6267\u884c\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\uff1a\u5b9a\u65f6\u5668\u56de\u8c03\u3001ajax \u56de\u8c03\u3001Promise \u6210\u529f\u6216\u5931\u8d25\u7684\u56de\u8c03\u7b49\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="\u5b9a\u65f6\u5668\u56de\u8c03"',children:"setTimeout(() => {    // \u5f02\u6b65\u56de\u8c03\u51fd\u6570\uff0c\u4f1a\u653e\u5165\u56de\u8c03\u961f\u5217\u4e2d\uff0c\u5c06\u6765\u6267\u884c\uff08\u6240\u6709\u540c\u6b65\u4efb\u52a1\u6267\u884c\u5b8c\u540e\u624d\u53ef\u80fd\u6267\u884c\uff09\n  console.log('timeout callback()')\n}, 0)\nconsole.log('setTimeout()\u4e4b\u540e')\n\n// setTimeout()\u4e4b\u540e\n// timeout callback()\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="Promise \u6210\u529f\u6216\u5931\u8d25\u7684\u56de\u8c03"',children:"new Promise((resolve, reject) => {\n  resolve(1)\n}).then(value => {\n  console.log('value', value)\n}, reason => {\n  console.log('reason', reason)\n})\nconsole.log('----')\n\n// ----\n// value 1\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,s.jsx)(n.p,{children:"JS \u5f15\u64ce\u5148\u628a\u521d\u59cb\u5316\u7684\u540c\u6b65\u4ee3\u7801\uff08\u540c\u6b65\u4efb\u52a1\uff09\u90fd\u6267\u884c\u5b8c\u6210\u540e\uff0c\u518d\u6267\u884c\u56de\u8c03\u961f\u5217\u4e2d\u7684\u4ee3\u7801\uff08\u5f02\u6b65\u4efb\u52a1\uff09\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"js-\u4e2d\u7684\u5f02\u5e38error\u5904\u7406",children:"JS \u4e2d\u7684\u5f02\u5e38\uff08error\uff09\u5904\u7406"}),"\n",(0,s.jsx)(n.h3,{id:"\u9519\u8bef\u7684\u7c7b\u578b",children:"\u9519\u8bef\u7684\u7c7b\u578b"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Error"}),"\uff1a\u6240\u6709\u9519\u8bef\u7684\u7236\u7c7b\u578b\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="ReferenceError\uff1a\u5f15\u7528\u7684\u53d8\u91cf\u4e0d\u5b58\u5728"',children:"console.log(a)  // ReferenceError: a is not defined\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="TypeError\uff1a\u6570\u636e\u7c7b\u578b\u4e0d\u6b63\u786e"',children:"let b\nconsole.log(b.xxx)  // TypeError: Cannot read property 'xxx' of undefined\n\nlet c = {}\nc.xxx()   // TypeError: c.xxx is not a function\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="RangeError\uff1a\u6570\u636e\u503c\u4e0d\u5728\u5176\u6240\u5141\u8bb8\u7684\u8303\u56f4\u5185"',children:"function fn() {\n  fn()\n}\nfn()    // RangeError: Maximum call stack size exceeded\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="SyntaxError\uff1a\u8bed\u6cd5\u9519\u8bef"',children:'const c = """"    // SyntaxError: Unexpected string\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u9519\u8bef\u5904\u7406\u6355\u83b7\u9519\u8bef\u4e0e\u629b\u51fa\u9519\u8bef",children:"\u9519\u8bef\u5904\u7406\uff08\u6355\u83b7\u9519\u8bef\u4e0e\u629b\u51fa\u9519\u8bef\uff09"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u4e0d\u5bf9\u9519\u8bef\u8fdb\u884c\u6355\u83b7\uff0c\u90a3\u4e48\u540e\u9762\u7684\u4ee3\u7801\u5c31\u65e0\u6cd5\u6267\u884c\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function something() {\n  if (Date.now() % 2 === 1) {\n    console.log('\u5f53\u524d\u65f6\u95f4\u4e3a\u5947\u6570\uff0c\u53ef\u4ee5\u6267\u884c\u4efb\u52a1')\n  } else {\n    // \u629b\u51fa\u9519\u8bef\n    throw new Error('\u5f53\u524d\u65f6\u95f4\u4e3a\u5076\u6570\uff0c\u65e0\u6cd5\u6267\u884c\u4efb\u52a1')\n  }\n}\n\n// \u6355\u83b7\u9519\u8bef\ntry {\n  something()\n} catch (error) {\n  alert(error.message)\n}\n\nconsole.log('\u51fa\u9519\u4e4b\u540e')\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4ee5\u4e0a\u4ee3\u7801\uff0c\u56e0\u4e3a\u9519\u8bef\u88ab\u6355\u83b7\u5904\u7406\u4e86\uff0c\u6240\u4ee5\u540e\u9762\u7684\u4ee3\u7801\u53ef\u4ee5\u8fd0\u884c\u4e0b\u53bb\uff0c\u6253\u5370\u51fa ",(0,s.jsx)(n.code,{children:'"\u51fa\u9519\u4e4b\u540e"'}),"\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"error-\u5bf9\u8c61\u7684\u7ed3\u6784",children:"Error \u5bf9\u8c61\u7684\u7ed3\u6784"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"try {\n  let d\n  console.log(d.xxx)\n} catch (error) {\n  // error \u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5176\u4e2d\u542b\u6709 message\u3001stack \u7b49\u5c5e\u6027\n  console.log(error.message)   // \u9519\u8bef\u76f8\u5173\u4fe1\u606f\n  console.log(error.stack)     // \u51fd\u6570\u8c03\u7528\u6808\u8bb0\u5f55\u4fe1\u606f\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>t});var s=r(7294);const o={},l=s.createContext(o);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);