"use strict";(self.webpackChunkdongdong_12138_github_io=self.webpackChunkdongdong_12138_github_io||[]).push([[4013],{1460:(e,t,s)=>{s.d(t,{Z:()=>v});var a=s(7294),i=s(6905),r=s(6040),n=s(7524),l=s(3692),c=s(5999),o=s(6550),d=s(8596);function m(e){const{pathname:t}=(0,o.TH)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,d.Mg)(e.permalink,t))}(e,t)))),[e,t])}const g={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var u=s(5893);function b(e){let{sidebar:t}=e;const s=m(t.items);return(0,u.jsx)("aside",{className:"col col--3",children:(0,u.jsxs)("nav",{className:(0,i.Z)(g.sidebar,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,u.jsx)("div",{className:(0,i.Z)(g.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,u.jsx)("ul",{className:(0,i.Z)(g.sidebarItemList,"clean-list"),children:s.map((e=>(0,u.jsx)("li",{className:g.sidebarItem,children:(0,u.jsx)(l.Z,{isNavLink:!0,to:e.permalink,className:g.sidebarItemLink,activeClassName:g.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var h=s(3102);function j(e){let{sidebar:t}=e;const s=m(t.items);return(0,u.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,u.jsx)("li",{className:"menu__list-item",children:(0,u.jsx)(l.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function p(e){return(0,u.jsx)(h.Zo,{component:j,props:e})}function x(e){let{sidebar:t}=e;const s=(0,n.i)();return t?.items.length?"mobile"===s?(0,u.jsx)(p,{sidebar:t}):(0,u.jsx)(b,{sidebar:t}):null}function v(e){const{sidebar:t,toc:s,children:a,...n}=e,l=t&&t.items.length>0;return(0,u.jsx)(r.Z,{...n,children:(0,u.jsx)("div",{className:"container margin-vert--lg",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)(x,{sidebar:t}),(0,u.jsx)("main",{className:(0,i.Z)("col",{"col--7":l,"col--9 col--offset-1":!l}),children:a}),s&&(0,u.jsx)("div",{className:"col col--2",children:s})]})})})}},1223:(e,t,s)=>{s.r(t),s.d(t,{default:()=>j});s(7294);var a=s(6905),i=s(5999);const r=()=>(0,i.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var n=s(8264),l=s(5281),c=s(1460),o=s(3008),d=s(2503);const m={tag:"tag_Nnez"};var g=s(5893);function u(e){let{letterEntry:t}=e;return(0,g.jsxs)("article",{children:[(0,g.jsx)(d.Z,{as:"h2",id:t.letter,children:t.letter}),(0,g.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,g.jsx)("li",{className:m.tag,children:(0,g.jsx)(o.Z,{...e})},e.permalink)))}),(0,g.jsx)("hr",{})]})}function b(e){let{tags:t}=e;const s=function(e){const t={};return Object.values(e).forEach((e=>{const s=function(e){return e[0].toUpperCase()}(e.label);t[s]??=[],t[s].push(e)})),Object.entries(t).sort(((e,t)=>{let[s]=e,[a]=t;return s.localeCompare(a)})).map((e=>{let[t,s]=e;return{letter:t,tags:s.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return(0,g.jsx)("section",{className:"margin-vert--lg",children:s.map((e=>(0,g.jsx)(u,{letterEntry:e},e.letter)))})}var h=s(197);function j(e){let{tags:t,sidebar:s}=e;const i=r();return(0,g.jsxs)(n.FG,{className:(0,a.Z)(l.k.wrapper.blogPages,l.k.page.blogTagsListPage),children:[(0,g.jsx)(n.d,{title:i}),(0,g.jsx)(h.Z,{tag:"blog_tags_list"}),(0,g.jsxs)(c.Z,{sidebar:s,children:[(0,g.jsx)(d.Z,{as:"h1",children:i}),(0,g.jsx)(b,{tags:t})]})]})}},3008:(e,t,s)=>{s.d(t,{Z:()=>l});s(7294);var a=s(6905),i=s(3692);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var n=s(5893);function l(e){let{permalink:t,label:s,count:l}=e;return(0,n.jsxs)(i.Z,{href:t,className:(0,a.Z)(r.tag,l?r.tagWithCount:r.tagRegular),children:[s,l&&(0,n.jsx)("span",{children:l})]})}}}]);