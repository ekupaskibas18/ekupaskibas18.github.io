"use strict";(self.webpackChunkrandelltuazon=self.webpackChunkrandelltuazon||[]).push([[6378],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=i(n),m=o,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[c]="string"==typeof e?e:o,l[1]=u;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var r=n(4778),o=(n(9496),n(9613));const a={slug:"my-elusive-one",title:"My Elusive One",authors:["randelltuazon"],tags:["poetry","sonnet"]},l=void 0,u={permalink:"/blog/my-elusive-one",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-11-13-my-elusive-one/index.md",source:"@site/blog/2023-11-13-my-elusive-one/index.md",title:"My Elusive One",description:"Docusaurus blogging features are powered by the blog plugin.",date:"2023-11-13T00:00:00.000Z",formattedDate:"November 13, 2023",tags:[{label:"poetry",permalink:"/blog/tags/poetry"},{label:"sonnet",permalink:"/blog/tags/sonnet"}],readingTime:.405,hasTruncateMarker:!1,authors:[{name:"Randell Tuazon",title:"Poet/Writer/Coder",url:"https://github.com/randelltuazon",imageURL:"https://github.com/randelltuazon.png",key:"randelltuazon"}],frontMatter:{slug:"my-elusive-one",title:"My Elusive One",authors:["randelltuazon"],tags:["poetry","sonnet"]},nextItem:{title:"MDX Blog Post",permalink:"/blog/mdx-blog-post"}},s={authorsImageUrls:[void 0]},i=[],p={toc:i};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/blog"},"Docusaurus blogging features")," are powered by the ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog"},"blog plugin"),"."),(0,o.kt)("p",null,"Simply add Markdown files (or folders) to the ",(0,o.kt)("inlineCode",{parentName:"p"},"blog")," directory."),(0,o.kt)("p",null,"Regular blog authors can be added to ",(0,o.kt)("inlineCode",{parentName:"p"},"authors.yml"),"."),(0,o.kt)("p",null,"The blog post date can be extracted from filenames, such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome.md")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome/index.md"))),(0,o.kt)("p",null,"A blog post folder can be convenient to co-locate blog post images:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docusaurus Plushie",src:n(4365).Z,width:"1500",height:"500"})),(0,o.kt)("p",null,"The blog supports tags as well!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"And if you don't want a blog"),": just delete this directory, and use ",(0,o.kt)("inlineCode",{parentName:"p"},"blog: false")," in your Docusaurus config."))}c.isMDXComponent=!0},4365:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/docusaurus-plushie-banner-a60f7593abca1e3eef26a9afa244e4fb.jpeg"}}]);