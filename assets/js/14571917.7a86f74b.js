"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48396],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),m=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=m(r),f=a,d=s["".concat(i,".").concat(f)]||s[f]||u[f]||l;return r?n.createElement(d,p(p({ref:t},c),{},{components:r})):n.createElement(d,p({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var m=2;m<l;m++)p[m]=r[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},97206:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const l={sidebar_label:"Frame.$"},p="Frame.$() method",o={unversionedId:"api/puppeteer.frame._",id:"version-17.1.2/api/puppeteer.frame._",title:"Frame.$() method",description:"Queries the frame for an element matching the given selector.",source:"@site/versioned_docs/version-17.1.2/api/puppeteer.frame._.md",sourceDirName:"api",slug:"/api/puppeteer.frame._",permalink:"/api/puppeteer.frame._",draft:!1,tags:[],version:"17.1.2",frontMatter:{sidebar_label:"Frame.$"},sidebar:"sidebar",previous:{title:"FlattenHandle",permalink:"/api/puppeteer.flattenhandle"},next:{title:"Frame.$$",permalink:"/api/puppeteer.frame.__"}},i={},m=[{value:"Parameters",id:"parameters",level:2}],c={toc:m};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"frame-method"},"Frame.$() method"),(0,a.kt)("p",null,"Queries the frame for an element matching the given selector."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Frame {\n  $<Selector extends string>(\n    selector: Selector\n  ): Promise<ElementHandle<NodeFor<Selector>> | null>;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"selector"),(0,a.kt)("td",{parentName:"tr",align:null},"Selector"),(0,a.kt)("td",{parentName:"tr",align:null},"The selector to query for.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",{parentName:"p",href:"/api/puppeteer.elementhandle"},"ElementHandle"),"<",(0,a.kt)("a",{parentName:"p",href:"/api/puppeteer.nodefor"},"NodeFor"),"<","Selector",">",">"," ","|"," null",">"),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"/api/puppeteer.elementhandle"},"element handle")," to the first element matching the given selector. Otherwise, ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."))}u.isMDXComponent=!0}}]);