(function(t){function e(e){for(var n,r,s=e[0],c=e[1],l=e[2],u=0,f=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var s=a[r];0!==o[s]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"409d0611"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"936f2eca"}[t]+".css",o=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){l=f[s],u=l.getAttribute("data-href");if(u===n||u===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[t],d.parentNode.removeChild(d),a(i)},d.href=o;var v=document.getElementsByTagName("head")[0];v.appendChild(d)})).then((function(){r[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",f.name="ChunkLoadError",f.type=n,f.request=r,a[1](f)}o[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var d=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2c97":function(t,e,a){"use strict";var n=a("9abf"),r=a.n(n);r.a},"34ff":function(t,e,a){},"4f33":function(t,e,a){"use strict";var n=a("aa64"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e623"),a("e379"),a("5dc8"),a("37e1");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",[a("v-content",[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1)],1)],1)},o=[],i=(a("5c0b"),a("2877")),s=a("6544"),c=a.n(s),l=a("7496"),u=a("a523"),f=a("a75b"),d={},v=Object(i["a"])(d,r,o,!1,null,null,null),p=v.exports;c()(v,{VApp:l["a"],VContainer:u["a"],VContent:f["a"]});a("d3b7");var m=a("8c4f"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("navigationBar"),a("homeCarousel"),a("footerBar")],1)},h=[],g=a("da9b"),C=a("6a8a"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-carousel",{attrs:{"hide-delimiters":"",height:"750","show-arrows-on-hover":"",cycle:""}},t._l(t.items,(function(e,n){return a("v-carousel-item",{key:n,attrs:{src:e.src}},[a("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[a("div",{staticClass:"display-3 white--text slajd"},[t._v(t._s(t.slides[n]))])])],1)})),1)},_=[],k={name:"homeCarousel",data:function(){return{items:[{src:"http://danielradosa.com/img/design.jpg"},{src:"http://danielradosa.com/img/innovation.jpg"},{src:"http://danielradosa.com/img/technology.jpg"}],slides:["FUTURE","DESIGN","TECH"]}}},w=k,x=(a("2c97"),a("5e66")),V=a("3e35"),E=a("0fd9b"),j=Object(i["a"])(w,y,_,!1,null,"3dd03aa6",null),O=j.exports;c()(j,{VCarousel:x["a"],VCarouselItem:V["a"],VRow:E["a"]});var T={name:"Home",components:{navigationBar:g["a"],footerBar:C["a"],homeCarousel:O}},A=T,S=Object(i["a"])(A,b,h,!1,null,null,null),N=S.exports;n["a"].use(m["a"]);var P=[{path:"/",name:"Home",component:N},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/projects",name:"Projects",component:function(){return a.e("about").then(a.bind(null,"acca"))}},{path:"/contact",name:"Contact",component:function(){return a.e("about").then(a.bind(null,"b8fa"))}},{path:"/video",name:"Video",component:function(){return a.e("about").then(a.bind(null,"81a8"))}}],B=new m["a"]({mode:"history",base:"/",routes:P}),I=B,L=a("f309");n["a"].use(L["a"]);var M=new L["a"]({}),D=a("f5af"),z=a.n(D);a("e829");n["a"].config.productionTip=!1,new n["a"]({created:function(){z.a.init()},router:I,vuetify:M,render:function(t){return t(p)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("7694"),r=a.n(n);r.a},"6a8a":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-footer",{attrs:{ligt:"",padless:""}},[a("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[a("v-card-title",[a("strong",{staticClass:"subheading"},[t._v("Get connected with me on social networks!")]),a("v-spacer"),t._l(t.test,(function(e){return a("v-btn",{key:e,staticClass:"mx-4",attrs:{dark:"",icon:""}},[a("a",{attrs:{href:e.link}},[a("v-icon",{attrs:{size:"24px",color:"black"}},[t._v(t._s(e.iconName))])],1)])}))],2),a("v-card-text",{staticClass:"py-2 black--text text-center"},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("DANIEL RADOSA")])])],1)],1)],1)},r=[],o={name:"footerBar",data:function(){return{bottomNav:"recent",icons:["fab fa-facebook","fab fa-twitter","fab fa-linkedin","fab fa-instagram"],test:[{iconName:"fab fa-facebook",link:"https://www.facebook.com/radosadaniel/"},{iconName:"fab fa-twitter",link:"https://twitter.com/danielradosa"},{iconName:"fab fa-linkedin",link:"https://www.linkedin.com/in/daniel-radosa-705285134/"},{iconName:"fab fa-instagram",link:"https://www.instagram.com/danielradosa/"}]}}},i=o,s=(a("d5ee"),a("2877")),c=a("6544"),l=a.n(c),u=a("8336"),f=a("b0af"),d=a("99d9"),v=a("a523"),p=a("553a"),m=a("132d"),b=a("2fa4"),h=Object(s["a"])(i,n,r,!1,null,"394ba9c0",null);e["a"]=h.exports;l()(h,{VBtn:u["a"],VCard:f["a"],VCardText:d["a"],VCardTitle:d["b"],VContainer:v["a"],VFooter:p["a"],VIcon:m["a"],VSpacer:b["a"]})},7694:function(t,e,a){},"9abf":function(t,e,a){},aa64:function(t,e,a){},d5ee:function(t,e,a){"use strict";var n=a("34ff"),r=a.n(n);r.a},da9b:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-toolbar",{attrs:{app:"",flat:""}},[a("v-toolbar-title",{staticClass:"title"},[t._v("DANIEL")]),a("span",{staticStyle:{"font-size":"20px"}},[t._v("RADOSA")]),a("v-spacer"),a("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[a("div",{staticClass:"my-2"},[a("router-link",{staticClass:"linkz",attrs:{to:"/"}},[a("v-btn",{attrs:{text:"",small:""}},[t._v("home")])],1)],1),a("div",{staticClass:"height"}),a("div",{staticClass:"my-2"},[a("router-link",{staticClass:"linkz",attrs:{to:"About"}},[a("v-btn",{attrs:{text:"",small:""}},[t._v("about me")])],1)],1),a("div",{staticClass:"height"}),a("div",{staticClass:"my-2"},[a("router-link",{staticClass:"linkz",attrs:{to:"Projects"}},[a("v-btn",{attrs:{text:"",small:""}},[t._v("my projects")])],1)],1),a("div",{staticClass:"height"}),a("div",{staticClass:"my-2"},[a("router-link",{staticClass:"linkz",attrs:{to:"Video"}},[a("v-btn",{attrs:{text:"",small:""}},[t._v("ceevee")])],1)],1),a("div",{staticClass:"height"}),a("div",{staticClass:"my-2"},[a("router-link",{staticClass:"linkz",attrs:{to:"Contact"}},[a("v-btn",{attrs:{text:"",small:""}},[t._v("contact me")])],1)],1)]),a("v-spacer"),a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{color:"black",flat:"",dark:""}},n),[a("v-icon",[t._v("fas fa-list")])],1)]}}])},[a("v-list",t._l(t.links,(function(e){return a("v-list-item",{key:e.text,attrs:{router:"",to:e.route}},[a("v-list-item-title",[t._v(t._s(e.text))])],1)})),1)],1)],1)},r=[],o={name:"navigationBar",data:function(){return{drawer:!1,links:[{text:"HOME",route:"/"},{text:"ABOUT ME",route:"/About"},{text:"MY PROJECTS",route:"/Projects"},{text:"CEEVEE",route:"/Video"},{text:"CONTACT ME",route:"/Contact"}]}}},i=o,s=(a("4f33"),a("2877")),c=a("6544"),l=a.n(c),u=a("8336"),f=a("132d"),d=a("8860"),v=a("da13"),p=a("5d23"),m=a("e449"),b=a("2fa4"),h=a("71d9"),g=a("2a7f"),C=Object(s["a"])(i,n,r,!1,null,"7a727e40",null);e["a"]=C.exports;l()(C,{VBtn:u["a"],VIcon:f["a"],VList:d["a"],VListItem:v["a"],VListItemTitle:p["a"],VMenu:m["a"],VSpacer:b["a"],VToolbar:h["a"],VToolbarItems:g["a"],VToolbarTitle:g["b"]})}});
//# sourceMappingURL=app.9c945990.js.map