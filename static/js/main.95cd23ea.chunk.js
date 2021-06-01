(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{21:function(e,t,n){"use strict";var c=n(1),a=n(16),l=n(3),i=n(12),s=Object({NODE_ENV:"production",PUBLIC_URL:"/charlesgao.page",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),r=s.NODE_ENV,o=s.REACT_APP_GA_TRACKING_ID;"production"===r&&i.a.initialize(o);var j=function(){var e=Object(l.f)().pathname;return Object(c.useEffect)((function(){"production"===r&&(i.a.set({page:e}),i.a.pageview(e))}),[e]),null},b=n(5),u=n(22),h=[{index:!0,label:"Charles Gao",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],d=n(0),O=Object(c.lazy)((function(){return n.e(5).then(n.t.bind(null,170,7))})),p=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{className:"hamburger-container",children:[Object(d.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(d.jsx)("ul",{children:n?Object(d.jsx)("li",{className:"menu close-menu",children:Object(d.jsx)("div",{onClick:function(){return a(!n)},className:"menu-hover",children:"\u2715"})}):Object(d.jsx)("li",{className:"menu open-menu",children:Object(d.jsx)("div",{onClick:function(){return a(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)(d.Fragment,{}),children:Object(d.jsx)(O,{right:!0,isOpen:n,children:Object(d.jsx)("ul",{className:"hamburger-ul",children:h.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:e.path,onClick:function(){return a(!n)},children:Object(d.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},m=function(){return Object(d.jsxs)("header",{id:"header",children:[Object(d.jsx)("h1",{className:"index-link",children:h.filter((function(e){return e.index})).map((function(e){return Object(d.jsx)(b.b,{to:e.path,children:e.label},e.label)}))}),Object(d.jsx)("nav",{className:"links",children:Object(d.jsx)("ul",{children:h.filter((function(e){return!e.index})).map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:e.path,children:e.label})},e.label)}))})}),Object(d.jsx)(p,{})]})},x=n(25),f=function(){return Object(d.jsxs)("section",{id:"sidebar",children:[Object(d.jsxs)("section",{id:"intro",children:[Object(d.jsx)(b.b,{to:"/",className:"logo",children:Object(d.jsx)("img",{src:"".concat("/charlesgao.page","/images/me.jpg"),alt:""})}),Object(d.jsxs)("header",{children:[Object(d.jsx)("h2",{children:"Charles Gao"}),Object(d.jsx)("p",{children:Object(d.jsx)("a",{href:"mailto:gao440@purdue.com",children:"gao440@purdue.com"})})]})]}),Object(d.jsxs)("section",{className:"blurb",children:[Object(d.jsx)("h2",{children:"About"}),Object(d.jsxs)("p",{children:["Hi, I'm Charles. I enjoy learning, products, and creating new things. Currently, I am a Senior at ",Object(d.jsx)("a",{href:"https://engineering.purdue.edu/ECE",children:"Purdue University"})," studying Computer Engineering. I am passionate about learning new things and developing my analytic skills."]}),Object(d.jsx)("ul",{className:"actions",children:Object(d.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(d.jsx)(b.b,{to:"/about",className:"button",children:"About Me"}):Object(d.jsx)(b.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(d.jsxs)("section",{id:"footer",children:[Object(d.jsx)(x.a,{}),Object(d.jsxs)("p",{className:"copyright",children:["\xa9 Charles Gao ",Object(d.jsx)(b.b,{to:"/",children:"gao440.com"}),"."]})]})]})},g=function(){var e=Object(l.f)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},v=function(e){return Object(d.jsxs)(a.b,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(g,{}),Object(d.jsxs)(a.a,{titleTemplate:"%s | Charles Gao",defaultTitle:"Charles Gao",defer:!1,children:[e.title&&Object(d.jsx)("title",{children:e.title}),Object(d.jsx)("meta",{name:"description",content:e.description})]}),Object(d.jsxs)("div",{id:"wrapper",children:[Object(d.jsx)(m,{}),Object(d.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(d.jsx)(f,{})]})]})};v.defaultProps={children:null,fullPage:!1,title:null,description:"Charles Gao's personal website."};t.a=v},25:function(e,t,n){"use strict";n(1);var c=n(29),a=n(30),l=n(31),i=n(32),s=n(33),r=n(34),o=n(35),j=[{link:"https://github.com/gao440",label:"Github",icon:a.faGithub},{link:"https://www.facebook.com/people/Charles-Gao/100008441505086/",label:"Facebook",icon:l.faFacebookF},{link:"https://www.instagram.com/lazyboycharles/",label:"Instagram",icon:i.faInstagram},{link:"https://www.linkedin.com/in/charlesgao9/",label:"LinkedIn",icon:s.faLinkedinIn},{link:"https://twitter.com/cha_gao",label:"Twitter",icon:r.faTwitter},{link:"mailto:gao440@purdue.com",label:"Email",icon:o.faEnvelope}],b=n(0);t.a=function(){return Object(b.jsx)("ul",{className:"icons",children:j.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:e.link,children:Object(b.jsx)(c.a,{icon:e.icon})})},e.label)}))})}},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),l=n(15),i=n(5),s=n(3),r=n(21),o=(n(48),n(0)),j=Object(c.lazy)((function(){return Promise.all([n.e(2),n.e(8)]).then(n.bind(null,167))})),b=Object(c.lazy)((function(){return n.e(9).then(n.bind(null,174))})),u=Object(c.lazy)((function(){return n.e(10).then(n.bind(null,168))})),h=Object(c.lazy)((function(){return n.e(11).then(n.bind(null,169))})),d=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,173))})),O=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,171))})),p=Object(c.lazy)((function(){return Promise.all([n.e(4),n.e(12)]).then(n.bind(null,172))})),m=function(){return Object(o.jsx)(i.a,{basename:"/charlesgao.page",children:Object(o.jsx)(c.Suspense,{fallback:Object(o.jsx)(r.a,{}),children:Object(o.jsxs)(s.c,{children:[Object(o.jsx)(s.a,{exact:!0,path:"/",component:u}),Object(o.jsx)(s.a,{path:"/about",component:j}),Object(o.jsx)(s.a,{path:"/projects",component:d}),Object(o.jsx)(s.a,{path:"/stats",component:p}),Object(o.jsx)(s.a,{path:"/contact",component:b}),Object(o.jsx)(s.a,{path:"/resume",component:O}),Object(o.jsx)(s.a,{component:h,status:404})]})})})},x=function(){return Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(m,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(l.hydrate)(Object(o.jsx)(x,{}),f):Object(l.render)(Object(o.jsx)(x,{}),f)}},[[49,1,3]]]);
//# sourceMappingURL=main.95cd23ea.chunk.js.map