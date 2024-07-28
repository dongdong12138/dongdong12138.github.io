"use strict";(self.webpackChunkdongdong_12138_github_io=self.webpackChunkdongdong_12138_github_io||[]).push([[5996],{249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>M,contentTitle:()=>I,default:()=>U,frontMatter:()=>R,metadata:()=>V,toc:()=>S});var r=n(5893),l=n(1151),a=n(7294),o=n(6905),s=n(2466),i=n(6550),c=n(469),m=n(1980),h=n(7392),d=n(12);function f(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return f(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:l}}=e;return{value:t,label:n,attributes:r,default:l}}))}(n);return function(e){const t=(0,h.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function v(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function z(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,m._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=u(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!v({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,m]=z({queryString:n,groupId:r}),[h,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,d.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),x=(()=>{const e=i??h;return v({value:e,tabValues:l})?e:null})();(0,c.Z)((()=>{x&&s(x)}),[x]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!v({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),m(e),f(e)}),[m,f,l]),tabValues:l}}var p=n(2389);const E={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:l,selectValue:a,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.o5)(),h=e=>{const t=e.currentTarget,n=c.indexOf(t),r=i[n].value;r!==l&&(m(t),a(r))},d=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>c.push(e),onKeyDown:d,onClick:h,...a,className:(0,o.Z)("tabs__item",E.tabItem,a?.className,{"tabs__item--active":l===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:l}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function g(e){const t=x(e);return(0,r.jsxs)("div",{className:(0,o.Z)("tabs-container",E.tabList),children:[(0,r.jsx)(y,{...t,...e}),(0,r.jsx)(b,{...t,...e})]})}function j(e){const t=(0,p.Z)();return(0,r.jsx)(g,{...e,children:f(e.children)},String(t))}const B={tabItem:"tabItem_Ymn6"};function F(e){let{children:t,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.Z)(B.tabItem,l),hidden:n,children:t})}const k=n.p+"assets/images/vue2_lifecycle-fe7b985bad55a8b1fc23ab7f27da0bc0.png";var A;function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(this,arguments)}const w=e=>{let{title:t,titleId:n,...r}=e;return a.createElement("svg",D({xmlns:"http://www.w3.org/2000/svg",width:840,height:1388,"aria-labelledby":n},r),t?a.createElement("title",{id:n},t):null,A||(A=a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("text",{fill:"#848484",fontFamily:"Inter, Roboto, sans-serif",fontSize:14},a.createElement("tspan",{x:195.593,y:1303},"* \u5982\u679c\u4f7f\u7528\u6784\u5efa\u5de5\u5177\uff0c\u4f8b\u5982\u901a\u8fc7\u5355\u6587\u4ef6\u7ec4\u4ef6\uff0c\u5219\u6a21\u677f\u7f16\u8bd1\u4f1a\u63d0\u524d\u6267\u884c\u3002")),a.createElement("g",{transform:"translate(72 1056)"},a.createElement("path",{fill:"#DB5B62",fillRule:"nonzero",d:"M160 18v14l-14-7zm180 6v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2z"}),a.createElement("rect",{width:144,height:47,x:1,y:1,stroke:"#DB5B62",strokeWidth:2,rx:8}),a.createElement("text",{fill:"#DB5B62",fontFamily:"Inter, Roboto, sans-serif",fontSize:14},a.createElement("tspan",{x:25.749,y:30},"beforeUnmount"))),a.createElement("path",{fill:"#9AA9B2",stroke:"#9AA9B2",strokeDasharray:"1,6",strokeLinecap:"square",strokeWidth:2,d:"M413 947v40"}),a.createElement("path",{fill:"#9AA9B2",fillRule:"nonzero",d:"M414 1104v2h6l-7 14-7-14h6v-2zm0-7v3h-2v-3zm0-7v3h-2v-3zm0-7v3h-2v-3zm0-7v3h-2v-3zm0-7v3h-2v-3zm0-7v3h-2v-3zm0-7v3h-2v-3z"}),a.createElement("text",{fontFamily:"Inter, Roboto, sans-serif",fontSize:14,transform:"translate(355 947)"},a.createElement("tspan",{x:29.766,y:65,fill:"#8E9EA9"},"\u5f53\u8c03\u7528\u4e86"),a.createElement("tspan",{x:12.973,y:91,fill:"#8E9EA9"},"app."),a.createElement("tspan",{x:40.221,y:91,fill:"#DB5B62"},"unmount"),a.createElement("tspan",{x:96.703,y:91,fill:"#8E9EA9"},"()")),a.createElement("g",{transform:"translate(72 238)"},a.createElement("path",{fill:"#DB5B62",fillRule:"nonzero",d:"m160.676 17.036-.037 14L146.657 24zm176.231 6.459 2 .005 1 .003-.005 2-1-.003-1-.003-1-.002zm-7-.018 1 .002 1 .003 1 .002-.005 2-1-.002-1-.003-1-.002zm-7-.019 1 .003 2 .005-.005 2-2-.005-1-.003zm-7-.018 1 .003 1 .002 1 .003-.005 2-1-.003-1-.002-1-.003zm-7-.018 2 .005 1 .003-.005 2-1-.003-2-.005zm-7-.018 1 .002 1 .003 1 .003-.005 2-1-.003-1-.003-1-.002zm-7-.018 1 .002 1 .003 1 .002-.005 2-1-.002-1-.003-1-.002zm-7-.019 1 .003 2 .005-.005 2-2-.005-1-.003zm-7-.018 1 .003 1 .002 1 .003-.005 2-1-.003-1-.002-1-.003zm-7-.018 2 .005 1 .003-.005 2-1-.003-2-.005zm-7-.018 1 .002 1 .003 1 .003-.005 2-1-.003-1-.003-1-.002zm-7-.018 1 .002 1 .003 1 .002-.005 2-1-.002-1-.003-1-.002zm-7-.019 1 .003 2 .005-.005 2-2-.005-1-.003zm-7-.018 1 .003 1 .002 1 .003-.005 2-1-.003-1-.002-1-.003zm-7-.018 2 .005 1 .003-.005 2-1-.003-2-.005zm-7-.018 1 .002 1 .003 1 .003-.005 2-1-.003-1-.003-1-.002zm-7-.018 1 .002 1 .003 1 .002-.005 2-1-.002-1-.003-1-.002zm-7-.019 1 .003 2 .005-.005 2-2-.005-1-.003zm-7-.018 1 .003 1 .002 1 .003-.005 2-1-.003-1-.002-1-.003zm-7-.018 2 .005 1 .003-.005 2-1-.003-2-.005zm-7-.018 1 .002 1 .003 1 .002-.005 2-1-.002-1-.003-1-.002zm-7-.019 1 .003 1 .003 1 .002-.005 2-1-.002-1-.003-1-.003zm-7-.018 1 .003 2 .005-.005 2-2-.005-1-.003zm-7-.018 1 .003 1 .002 1 .003-.005 2-1-.003-1-.002-1-.003zm-7-.018 2 .005 1 .003-.005 2-1-.003-2-.005zm-7-.018 1 .002 1 .003 1 .002-.005 2-1-.002-1-.003-1-.002z"}),a.createElement("rect",{width:144,height:47,x:1,y:1,stroke:"#DB5B62",strokeWidth:2,rx:8}),a.createElement("text",{fill:"#DB5B62",fontFamily:"Inter, Roboto, sans-serif",fontSize:14},a.createElement("tspan",{x:32.642,y:30},"beforeCreate"))),a.createElement("g",{transform:"translate(282 64)"},a.createElement("path",{fill:"#9AA9B2",fillRule:"nonzero",d:"M132 65v35h6l-7 14-7-14h6V65z"}),a.createElement("rect",{width:259,height:66,x:-.5,y:-.5,fill:"#3E6B94",stroke:"#2F679A",rx:8}),a.createElement("text",{fontFamily:"Inter, Roboto, sans-serif",fontSize:14},a.createElement("tspan",{x:37.555,y:28,fill:"#FFF"},"app = Vue."),a.createElement("tspan",{x:105.156,y:28,fill:"#FFB196"},"createApp"),a.createElement("tspan",{x:170.976,y:28,fill:"#FFF"},"("),a.createElement("tspan",{x:175.638,y:28,fill:"#39DD95"},"options"),a.createElement("tspan",{x:222.783,y:28,fill:"#FFF"},")"),a.createElement("tspan",{x:87.311,y:46.5,fill:"#FFF"},"app."),a.createElement("tspan",{x:114.559,y:46.5,fill:"#FFB196"},"mount"),a.createElement("tspan",{x:156.469,y:46.5,fill:"#FFF"},"("),a.createElement("tspan",{x:160.131,y:46.5,fill:"#39DD95"},"el"),a.createElement("tspan",{x:171.027,y:46.5,fill:"#FFF"},")"))),a.createElement("path",{fill:"#9AA9B2",fillRule:"nonzero",d:"M272 467v53h6l-7 14-7-14h6v-53zm282 0v53h6l-7 14-7-14h6v-53z"}),a.createElement("path",{fill:"#9AA9B2",stroke:"#9AA9B2",strokeLinecap:"square",strokeWidth:2,d:"M553.025 467.004h-282"}),a.createElement("g",{fill:"#9AA9B2"},a.createElement("path",{stroke:"#9AA9B2",strokeLinecap:"square",strokeWidth:2,d:"M271 636v-43m282 42v-42"}),a.createElement("path",{fillRule:"nonzero",d:"m413 706 7-14h-6v-55h-2v55h-6z"}),a.createElement("path",{stroke:"#9AA9B2",strokeLinecap:"square",strokeWidth:2,d:"M553 637H271"})),a.createElement("g",{transform:"translate(169 535)"},a.createElement("rect",{width:207,height:58,x:-.5,y:-.5,fill:"#3AB881",stroke:"#23AC70",rx:8}),a.createElement("text",{fontFamily:"Inter, Roboto, sans-serif",fontSize:14},a.createElement("tspan",{x:73.695,y:23.918,fill:"#FFF"},"\u7f16\u8bd1\u6a21\u677f"),a.createElement("tspan",{x:66.568,y:42.418,fill:"#FFF"},"\u81f3\u6e32\u67d3\u51fd\u6570"),a.createElement("tspan",{x:140.312,y:42.418,fill:"#F6DA72"},"*"))),a.createElement("g",{transform:"translate(451 535)"},a.createElement("rect",{width:207,height:58,x:-.5,y:-.5,fill:"#3AB881",stroke:"#23AC70",rx:8}),a.createElement("text",{fontFamily:"Inter, Roboto, sans-serif",fontSize:14},a.createElement("tspan",{x:36.016,y:23.918,fill:"#FFF"},"\u7f16\u8bd1 el \u7684 innerHTML"),a.createElement("tspan",{x:78.727,y:42.418,fill:"#FFF"},"\u81f3\u6a21\u677f"),a.createElement("tspan",{x:123.989,y:42.418,fill:"#F6DA72"},"*"))),a.createElement("path",{fill:"#FF8228",stroke:"#F2781E",d:"M413 415.433 509.057 467 413 518.567 316.943 467z"}),a.createElement("text",{fill:"#FFF",fontFamily:"Inter, Roboto, sans-serif",fontSize:14,transform:"translate(320 420)"},a.createElement("tspan",{x:74.052,y:37.727},"\u662f\u5426\u6709"),a.createElement("tspan",{x:38.08,y:56.227},"\u201ctemplate\u201d \u9009\u9879\uff1f")),a.createElement("text",{fill:"#8E9EA9",fontFamily:"Inter, Roboto, sans-serif",fontSize:14,transform:"translate(169 416)"},a.createElement("tspan",{x:65.662,y:69},"\u6709")),a.createElement("text",{fill:"#8E9EA9",fontFamily:"Inter, Roboto, sans-serif",fontSize:14,transform:"translate(169 416)"},a.createElement("tspan",{x:401.5,y:69},"\u6ca1\u6709")),a.createElement("g",{transform:"translate(72 354)"},a.createElement("path",{fill:"#DB5B62",fillRule:"nonzero",d:"M160 17v14l-14-7zm180 6v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2z"}),a.createElement("rect",{width:144,height:47,x:1,y:1,stroke:"#DB5B62",strokeWidth:2,rx:8}),a.createElement("text",{fill:"#DB5B62",fontFamily:"Inter, Roboto, sans-serif",fontSize:14},a.createElement("tspan",{x:50.652,y:30},"created"))),a.createElement("g",{transform:"translate(72 640)"},a.createElement("path",{fill:"#DB5B62",fillRule:"nonzero",d:"m160.676 18.036-.037 14L146.657 25zm176.231 6.459 2 .005 1 .003-.005 2-1-.003-1-.003-1-.002zm-7-.018 1 .002 1 .003 1 .002-.005 2-1-.002-1-.003-1-.002zm-7-.019 1 .003 2 .005-.005 2-2-.005-1-.003zm-7-.018 1 .003 1 .002 1 .003-.005 2-1-.003-1-.002-1-.003zm-7-.018 2 .005 1 .003-.005 2-1-.003-2-.005zm-7-.018 1 .002 1 .003 1 .003-.005 2-1-.003-1-.003-1-.002zm-7-.018 1 .002 1 .003 1 .002-.005 2-1-.002-1-.003-1-.002zm-7-.019 1 .003 2 .005-.005 2-2-.005-1-.003zm-7-.018 1 .003 1 .002 1 .003-.005 2-1-.003-1-.002-1-.003zm-7-.018 2 .005 1 .003-.005 2-1-.003-2-.005zm-7-.018 1 .002 1 .003 1 .003-.005 2-1-.003-1-.003-1-.002zm-7-.018 1 .002 1 .003 1 .002-.005 2-1-.002-1-.003-1-.002zm-7-.019 1 .003 2 .005-.005 2-2-.005-1-.003zm-7-.018 1 .003 1 .002 1 .003-.005 2-1-.003-1-.002-1-.003zm-7-.018 2 .005 1 .003-.005 2-1-.003-2-.005zm-7-.018 1 .002 1 .003 1 .003-.005 2-1-.003-1-.003-1-.002zm-7-.018 1 .002 1 .003 1 .002-.005 2-1-.002-1-.003-1-.002zm-7-.019 1 .003 2 .005-.005 2-2-.005-1-.003zm-7-.018 1 .003 1 .002 1 .003-.005 2-1-.003-1-.002-1-.003zm-7-.018 2 .005 1 .003-.005 2-1-.003-2-.005zm-7-.018 1 .002 1 .003 1 .002-.005 2-1-.002-1-.003-1-.002zm-7-.019 1 .003 1 .003 1 .002-.005 2-1-.002-1-.003-1-.003zm-7-.018 1 .003 2 .005-.005 2-2-.005-1-.003zm-7-.018 1 .003 1 .002 1 .003-.005 2-1-.003-1-.002-1-.003zm-7-.018 2 .005 1 .003-.005 2-1-.003-2-.005zm-7-.018 1 .002 1 .003 1 .002-.005 2-1-.002-1-.003-1-.002z"}),a.createElement("rect",{width:144,height:47,x:1,y:1,stroke:"#DB5B62",strokeWidth:2,rx:8}),a.createElement("text",{fill:"#DB5B62",fontFamily:"Inter, Roboto, sans-serif",fontSize:14},a.createElement("tspan",{x:34.697,y:30},"beforeMount"))),a.createElement("g",{transform:"translate(72 780)"},a.createElement("path",{fill:"#DB5B62",fillRule:"nonzero",d:"M160 18v14l-14-7zm180 6v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2z"}),a.createElement("rect",{width:144,height:47,x:1,y:1,stroke:"#DB5B62",strokeWidth:2,rx:8}),a.createElement("text",{fill:"#DB5B62",fontFamily:"Inter, Roboto, sans-serif",fontSize:14},a.createElement("tspan",{x:46.759,y:30},"mounted"))),a.createElement("g",{transform:"translate(72 1150)"},a.createElement("path",{fill:"#DB5B62",fillRule:"nonzero",d:"M160 18v6h1v2h-1v6l-14-7zm127 6v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2zm-7 0v2h-3v-2z"}),a.createElement("rect",{width:144,height:47,x:1,y:1,stroke:"#DB5B62",strokeWidth:2,rx:8}),a.createElement("text",{fill:"#DB5B62",fontFamily:"Inter, Roboto, sans-serif",fontSize:14},a.createElement("tspan",{x:38.973,y:30},"unmounted"))),a.createElement("g",{transform:"translate(599 749)"},a.createElement("path",{fill:"#DB5B62",fillRule:"nonzero",d:"m2.23 85.505 1.294 1.525-.763.647-1.525 1.293-1.294-1.525.763-.647zm5.339-4.528 1.293 1.525-.762.647-.763.647-.763.647-1.293-1.526 1.525-1.293zm5.339-4.527 1.293 1.525-1.525 1.293-.763.647-1.293-1.525.762-.647.763-.647zm5.338-4.528 1.294 1.525-.763.647-.763.647-.762.647-1.294-1.526.763-.646zm5.339-4.528 1.293 1.526-.762.647-.763.646-.763.647-1.293-1.525.763-.647.762-.647zm5.339-4.527 1.293 1.525-.763.647-.762.647-.763.647-1.293-1.526.762-.647.763-.646zM48 48l-6.15 14.394-9.055-10.678zM34.262 58.34l1.294 1.525-.763.646-1.525 1.294-1.294-1.525.763-.647.763-.647z"}),a.createElement("rect",{width:144.127,height:46.184,x:21,y:1,stroke:"#DB5B62",strokeWidth:2,rx:8}),a.createElement("text",{fill:"#DB5B62",fontFamily:"Inter, Roboto, sans-serif",fontSize:14},a.createElement("tspan",{x:51.101,y:28.678},"beforeUpdate"))),a.createElement("path",{fill:"#DB5B62",fillRule:"nonzero",d:"M642.86 988.602 649 1003l-15.203-3.726zm-8.378.759.763.647.762.647.762.648-1.294 1.524-.763-.647-.762-.647-.762-.648zm-5.335-4.53.762.646.762.648.762.647-1.294 1.524-.762-.647-.763-.647-.762-.647 1.295-1.525zm-5.336-4.532.762.648.762.647.762.647-1.294 1.525-1.525-1.295-.762-.647zm-5.336-4.53.762.647.762.647.763.647-1.295 1.525-.762-.647-1.525-1.295zm-5.336-4.531.762.647.762.647.763.647-1.295 1.525-.762-.647-1.525-1.295zm-5.336-4.531.762.647 1.525 1.295-1.295 1.524-.762-.647-.762-.647-.763-.648zm-5.336-4.531.762.647.763.648.762.647-1.295 1.524-.762-.647-.762-.647-.762-.647z"}),a.createElement("path",{stroke:"#DB5B62",strokeWidth:2,d:"M756.536 1004c1.933 0 3.683.784 4.95 2.05a6.98 6.98 0 0 1 2.05 4.95v35.184a6.98 6.98 0 0 1-2.05 4.95 6.98 6.98 0 0 1-4.95 2.05H627a6.98 6.98 0 0 1-4.95-2.05 6.98 6.98 0 0 1-2.05-4.95V1011c0-1.933.784-3.683 2.05-4.95A6.98 6.98 0 0 1 627 1004z"}),a.createElement("text",{fill:"#DB5B62",fontFamily:"Inter, Roboto, sans-serif",fontSize:14,transform:"translate(602 963)"},a.createElement("tspan",{x:65.132,y:70},"updated")),a.createElement("path",{stroke:"#8999A4",strokeDasharray:4,strokeWidth:2,d:"M576.785 819c6.682 3.957 12.71 8.832 18.01 14.411l-.703-.736a83.8 83.8 0 0 1 11.52 14.047c10.695 15.46 15.754 34.304 15.367 53.281.07 17.046-4.313 34.254-13.882 49.473-7.685 12.222-17.717 22.1-29.152 29.418l-1.07.675-.693.426a94.7 94.7 0 0 1-15.257 7.538l-.975.373-.28.103a95.2 95.2 0 0 1-27.074 5.78l-.258.015-.363.024-.956.051-.709.032a95.3 95.3 0 0 1-33.803-4.646 95 95 0 0 1-15.537-6.65l-.258-.141a71 71 0 0 1-.93-.51l-.99-.557-.191-.112a94.4 94.4 0 0 1-17.315-12.745 94 94 0 0 1-14.775-17.444 94 94 0 0 1-8.463-16.035l-.38-.935-.112-.289a93.7 93.7 0 0 1-6.539-32.83 93.7 93.7 0 0 1 3.885-28.58l.39-1.275a93.7 93.7 0 0 1 6.442-15.556l.227-.428q.21-.398.424-.792c6.422-11.869 15.501-22.55 27.089-31.1l.812-.593 2.62-1.936"}),a.createElement("g",{transform:"translate(519 863)"},a.createElement("rect",{width:139.833,height:78,x:20.5,y:-.5,fill:"#3AB881",stroke:"#23AC70",rx:8}),a.createElement("text",{fill:"#FFF",fontFamily:"Inter, Roboto, sans-serif",fontSize:14},a.createElement("tspan",{x:60.006,y:34.333},"\u865a\u62df DOM"),a.createElement("tspan",{x:43.424,y:50.833},"\u91cd\u65b0\u6e32\u67d3\u548c\u66f4\u65b0"))),a.createElement("text",{fill:"#8E9EA9",fontFamily:"Inter, Roboto, sans-serif",fontSize:14,transform:"translate(431 749)"},a.createElement("tspan",{x:62.197,y:65},"\u5f53\u6570\u636e\u53d1\u751f"),a.createElement("tspan",{x:82.535,y:82},"\u53d8\u5316")),a.createElement("g",{transform:"translate(316 179)"},a.createElement("path",{fill:"#9AA9B2",fillRule:"nonzero",d:"M98 57v46h6l-7 14-7-14h6V57z"}),a.createElement("rect",{width:192,height:58,x:-.5,y:-.5,fill:"#3AB881",stroke:"#23AC70",rx:8}),a.createElement("text",{fill:"#FFF",fontFamily:"Inter, Roboto, sans-serif",fontSize:14},a.createElement("tspan",{x:76.162,y:24},"\u521d\u59cb\u5316"),a.createElement("tspan",{x:48.421,y:42.5},"\u4e8b\u4ef6 & \u751f\u547d\u5468\u671f"))),a.createElement("g",{transform:"translate(316 297)"},a.createElement("path",{fill:"#9AA9B2",fillRule:"nonzero",d:"M98 57v47h6l-7 14-7-14h6V57z"}),a.createElement("rect",{width:192,height:58,x:-.5,y:-.5,fill:"#3AB881",stroke:"#23AC70",rx:8}),a.createElement("text",{fill:"#FFF",fontFamily:"Inter, Roboto, sans-serif",fontSize:14},a.createElement("tspan",{x:76.162,y:24},"\u521d\u59cb\u5316"),a.createElement("tspan",{x:54.142,y:42.5},"\u6ce8\u5165 & \u54cd\u5e94\u6027 "))),a.createElement("g",{transform:"translate(317 707)"},a.createElement("path",{fill:"#9AA9B2",fillRule:"nonzero",d:"m96.494 56.399.01 1 .81 75.583 6-.064-6.85 14.074-7.15-13.924 6-.064-.81-75.584-.01-1z"}),a.createElement("rect",{width:192,height:58,x:-.5,y:-.5,fill:"#3AB881",stroke:"#23AC70",rx:8}),a.createElement("text",{fill:"#FFF",fontFamily:"Inter, Roboto, sans-serif",fontSize:14},a.createElement("tspan",{x:54.456,y:24},"\u521b\u5efa app.$el"),a.createElement("tspan",{x:59.148,y:42.5},"\u5e76\u6dfb\u52a0\u81f3 el"))),a.createElement("g",{transform:"translate(367 855)"},a.createElement("circle",{cx:46,cy:46,r:46.5,fill:"#DB5860",stroke:"#DC424C"}),a.createElement("text",{fill:"#FFF",fontFamily:"Inter, Roboto, sans-serif",fontSize:14},a.createElement("tspan",{x:23.759,y:51},"\u5df2\u6302\u8f7d"))),a.createElement("g",{transform:"translate(360 1121)"},a.createElement("circle",{cx:53,cy:53,r:53.5,fill:"#DB5860",stroke:"#DC424C"}),a.createElement("text",{fill:"#FFF",fontFamily:"Inter, Roboto, sans-serif",fontSize:14},a.createElement("tspan",{x:31.759,y:58},"\u5df2\u5378\u8f7d"))))))},R={sidebar_position:7},I="\u751f\u547d\u5468\u671f",V={id:"front-frame/Vue3/\u751f\u547d\u5468\u671f",title:"\u751f\u547d\u5468\u671f",description:"\u57fa\u672c\u6982\u5ff5\u4e0e\u4f7f\u7528",source:"@site/docs/front-frame/Vue3/07-\u751f\u547d\u5468\u671f.md",sourceDirName:"front-frame/Vue3",slug:"/front-frame/Vue3/\u751f\u547d\u5468\u671f",permalink:"/docs/front-frame/Vue3/\u751f\u547d\u5468\u671f",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/front-frame/Vue3/07-\u751f\u547d\u5468\u671f.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"front-frame",previous:{title:"toRef\u3001toRaw\u3001readonly",permalink:"/docs/front-frame/Vue3/toRef\u3001toRaw\u3001readyonly"},next:{title:"\u81ea\u5b9a\u4e49 hook \u4e0e\u6307\u4ee4",permalink:"/docs/front-frame/Vue3/\u81ea\u5b9a\u4e49hook\u4e0e\u6307\u4ee4"}},M={},S=[{value:"\u57fa\u672c\u6982\u5ff5\u4e0e\u4f7f\u7528",id:"\u57fa\u672c\u6982\u5ff5\u4e0e\u4f7f\u7528",level:2},{value:"\u7236\u5b50\u7ec4\u4ef6\u751f\u547d\u5468\u671f\u6267\u884c\u987a\u5e8f",id:"\u7236\u5b50\u7ec4\u4ef6\u751f\u547d\u5468\u671f\u6267\u884c\u987a\u5e8f",level:2}];function C(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"\u751f\u547d\u5468\u671f",children:"\u751f\u547d\u5468\u671f"}),"\n",(0,r.jsx)(t.h2,{id:"\u57fa\u672c\u6982\u5ff5\u4e0e\u4f7f\u7528",children:"\u57fa\u672c\u6982\u5ff5\u4e0e\u4f7f\u7528"}),"\n",(0,r.jsxs)(t.p,{children:["\u751f\u547d\u5468\u671f\u6574\u4f53\u5206\u4e3a\u56db\u4e2a\u9636\u6bb5\uff0c\u5206\u522b\u662f\uff1a",(0,r.jsx)(t.strong,{children:"\u521b\u5efa\u3001\u6302\u8f7d\u3001\u66f4\u65b0\u3001\u9500\u6bc1"}),"\uff0c\u6bcf\u4e2a\u9636\u6bb5\u90fd\u6709\u4e24\u4e2a\u94a9\u5b50\uff0c\u4e00\u524d\u4e00\u540e\u3002"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Vue2 \u7684\u751f\u547d\u5468\u671f"}),(0,r.jsx)(t.th,{children:"Vue3 \u7684\u751f\u547d\u5468\u671f"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u521b\u5efa\u9636\u6bb5"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"beforeCreate"}),"\u3001",(0,r.jsx)(t.code,{children:"created"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"setup"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u6302\u8f7d\u9636\u6bb5"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"beforeMount"}),"\u3001",(0,r.jsx)(t.code,{children:"mounted"})]}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"onBeforeMount"}),"\u3001",(0,r.jsx)(t.code,{children:"onMounted"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u66f4\u65b0\u9636\u6bb5"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"beforeUpdate"}),"\u3001",(0,r.jsx)(t.code,{children:"updated"})]}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"onBeforeUpdate"}),"\u3001",(0,r.jsx)(t.code,{children:"onUpdated"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u9500\u6bc1\u9636\u6bb5"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"beforeDestroy"}),"\u3001",(0,r.jsx)(t.code,{children:"destroyed"})]}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"onBeforeUnmount"}),"\u3001",(0,r.jsx)(t.code,{children:"onUnmounted"})]})]})]})]}),"\n","\n",(0,r.jsxs)(j,{children:[(0,r.jsx)(F,{value:"vue2",label:"Vue2 \u751f\u547d\u5468\u671f\u56fe\u793a",children:(0,r.jsx)("img",{src:k,alt:"Vue2Lifecycle"})}),(0,r.jsx)(F,{value:"vue3",label:"Vue3 \u751f\u547d\u5468\u671f\u56fe\u793a",default:!0,children:(0,r.jsx)(w,{})})]}),"\n",(0,r.jsx)(t.p,{children:"\u6ce8\u610f\uff1a"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\u5e38\u7528\u7684\u94a9\u5b50\uff1a",(0,r.jsx)(t.code,{children:"onMounted"}),"\uff08\u6302\u8f7d\u5b8c\u6bd5\uff09\u3001",(0,r.jsx)(t.code,{children:"onUpdated"}),"\uff08\u66f4\u65b0\u5b8c\u6bd5\uff09\u3001",(0,r.jsx)(t.code,{children:"onBeforeUnmount"}),"\uff08\u5378\u8f7d\u4e4b\u524d\uff09\uff1b"]}),"\n",(0,r.jsxs)(t.li,{children:["\u65e0\u8bba\u662f\u54ea\u79cd\u751f\u547d\u5468\u671f\u94a9\u5b50\uff0c",(0,r.jsx)(t.code,{children:"setup"})," \u90fd\u662f\u6700\u5148\u6267\u884c\u7684\uff1b"]}),"\n",(0,r.jsxs)(t.li,{children:["\u914d\u7f6e\u9879\u5f62\u5f0f\u7684\u94a9\u5b50\u4e0e ",(0,r.jsx)(t.code,{children:"setup"})," \u4e2d\u7684\u94a9\u5b50\uff0c\u540c\u4e00\u65f6\u673a\u7684\u94a9\u5b50\uff0c\u90fd\u4f1a\u6267\u884c\uff0c\u4f46\u4f18\u5148\u6267\u884c ",(0,r.jsx)(t.code,{children:"setup"})," \u4e2d\u7684\u3002"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'\r\n\r\nconsole.log('setup')\r\n\r\nonBeforeMount(() => {\r\n  console.log('\u6302\u8f7d\u4e4b\u524d')\r\n})\r\nonMounted(() => {\r\n  console.log('\u6302\u8f7d\u5b8c\u6bd5')\r\n})\r\nonBeforeUpdate(() => {\r\n  console.log('\u66f4\u65b0\u4e4b\u524d')\r\n})\r\nonUpdated(() => {\r\n  console.log('\u66f4\u65b0\u5b8c\u6bd5')\r\n})\r\nonBeforeUnmount(() => {\r\n  console.log('\u5378\u8f7d\u4e4b\u524d')\r\n})\r\nonUnmounted(() => {\r\n  console.log('\u5378\u8f7d\u5b8c\u6bd5')\r\n})\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"updated"})," \u94a9\u5b50\u5b58\u5728\u7684\u95ee\u9898\uff1a\u8fd9\u4e2a\u94a9\u5b50\u4f1a\u5728\u7ec4\u4ef6\u7684\u4efb\u610f DOM \u66f4\u65b0\u540e\u88ab\u8c03\u7528\uff0c\u8fd9\u4e9b\u66f4\u65b0\u53ef\u80fd\u662f\u7531\u4e0d\u540c\u7684\u72b6\u6001\u53d8\u66f4\u5bfc\u81f4\u7684\u3002\u8fd9\u610f\u5473\u7740\u7ec4\u4ef6\u7684\u4efb\u610f\u72b6\u6001\u53d1\u751f\u53d8\u5316\uff0c\u90fd\u4f1a\u5bfc\u81f4 ",(0,r.jsx)(t.code,{children:"updated"})," \u94a9\u5b50\u91cd\u65b0\u8c03\u7528\u3002\u5982\u679c\u4f60\u9700\u8981\u5728\u67d0\u4e2a\u7279\u5b9a\u7684\u72b6\u6001\u66f4\u6539\u540e\u8bbf\u95ee\u66f4\u65b0\u540e\u7684 DOM\uff0c\u8bf7\u4f7f\u7528 ",(0,r.jsx)(t.code,{children:"watch()"})," + ",(0,r.jsx)(t.code,{children:"nextTick()"})," \u4f5c\u4e3a\u66ff\u4ee3\u3002"]})}),"\n",(0,r.jsx)(t.h2,{id:"\u7236\u5b50\u7ec4\u4ef6\u751f\u547d\u5468\u671f\u6267\u884c\u987a\u5e8f",children:"\u7236\u5b50\u7ec4\u4ef6\u751f\u547d\u5468\u671f\u6267\u884c\u987a\u5e8f"}),"\n",(0,r.jsx)(t.p,{children:"\u521b\u5efa\u3001\u6302\u8f7d\u6d41\u7a0b\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"\u7236-\u521b\u5efa -> \u7236-\u6302\u8f7d\u524d -> \u5b50-\u521b\u5efa -> \u5b50-\u6302\u8f7d\u524d -> \u5b50-\u6302\u8f7d\u5b8c\u6bd5 -> \u7236-\u6302\u8f7d\u5b8c\u6bd5\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u66f4\u65b0\u6d41\u7a0b\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",metastring:'title="\u7236\u5b50\u7ec4\u4ef6\u6570\u636e\u672a\u76f8\u4e92\u4f7f\u7528"',children:"\u7236\u7ec4\u4ef6\u66f4\u65b0\uff1a\u7236-\u66f4\u65b0\u524d -> \u7236-\u66f4\u65b0\u5b8c\u6bd5\r\n\u5b50\u7ec4\u4ef6\u66f4\u65b0\uff1a\u5b50-\u66f4\u65b0\u524d -> \u5b50-\u66f4\u65b0\u5b8c\u6bd5 \n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",metastring:'title="\u7236\u5b50\u7ec4\u4ef6\u6570\u636e\u76f8\u4e92\u4f7f\u7528"',children:"\u7236-\u66f4\u65b0\u524d -> \u5b50-\u66f4\u65b0\u524d -> \u5b50-\u66f4\u65b0\u5b8c\u6bd5 -> \u7236-\u66f4\u65b0\u5b8c\u6bd5\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u9500\u6bc1\u6d41\u7a0b\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",metastring:'title="\u5378\u8f7d\u7236\u7ec4\u4ef6"',children:"\u7236-\u5378\u8f7d\u524d -> \u5b50-\u5378\u8f7d\u524d -> \u5b50-\u5378\u8f7d\u5b8c\u6bd5 -> \u7236-\u5378\u8f7d\u5b8c\u6bd5 \n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",metastring:'title="\u7236\u7ec4\u4ef6\u4f7f\u7528 v-if \u9500\u6bc1\u5b50\u7ec4\u4ef6"',children:"\u7236-\u66f4\u65b0\u524d -> \u5b50-\u5378\u8f7d\u524d -> \u5b50-\u5378\u8f7d\u5b8c\u6bd5 -> \u7236-\u66f4\u65b0\u5b8c\u6bd5\n"})})]})}function U(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(C,{...e})}):C(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var r=n(7294);const l={},a=r.createContext(l);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);