(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[6],{1408:function(n,e,t){"use strict";t.r(e);var i,r=t(13),a=t(0),o=t(22),c=t(94),s=t(11),l=t(81),d=t(89),u=t(83),b=t(2);var p=s.default.h1(i||(i=Object(r.a)(["\n  border-bottom: 2px solid #eee;\n  padding-bottom: 10px;\n  margin-bottom: 30px;\n"])));e.default=function(){var n=Object(c.a)();Object(a.useEffect)((function(){return document.title="Administrator Paneel - Notenboom"}));var e=n.length,t=n.filter((function(n){return 1==n.status})).length,i=e-t;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(l.a,{}),Object(b.jsxs)(d.a,{title:"Administrator Paneel",grid:!0,children:[Object(b.jsx)(u.b,{children:Object(b.jsx)(p,{children:"Beheer foutenrapportages"})}),Object(b.jsxs)(u.b,{children:[Object(b.jsx)(p,{children:"Beheer gebruikers"}),Object(b.jsxs)("section",{id:"useradmin",children:[Object(b.jsx)("h2",{children:"Beheer en bekijk"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(o.b,{to:"/admin/gebruikers/alle-gebruikers",children:"Beheer en bekijk alle gebruikers"})}),Object(b.jsx)("li",{children:Object(b.jsx)(o.b,{to:"/admin/gebruikers/nieuwe-gebruikers",children:"Beheer en bekijk nieuwe gebruikers"})})]})]}),Object(b.jsxs)("section",{id:"userstats",children:[Object(b.jsx)("h2",{children:"Statistieken"}),Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:["Aantal gebruikers: ",Object(b.jsxs)("b",{children:[e," ",1==e?"gebruiker":"gebruikers"]})]}),Object(b.jsxs)("li",{children:["Aantal goedgekeurde gebruikers: ",Object(b.jsxs)("b",{children:[t," ",1==t?"gebruiker":"gebruikers"]})]}),Object(b.jsxs)("li",{children:["Aantal niet goedgekeurde gebruikers: ",Object(b.jsxs)("b",{children:[i," ",1==i?"gebruiker":"gebruikers"]})]})]})]})]})]})]})}},76:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var i=t(77);function r(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var t=[],i=!0,r=!1,a=void 0;try{for(var o,c=n[Symbol.iterator]();!(i=(o=c.next()).done)&&(t.push(o.value),!e||t.length!==e);i=!0);}catch(s){r=!0,a=s}finally{try{i||null==c.return||c.return()}finally{if(r)throw a}}return t}}(n,e)||Object(i.a)(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},77:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var i=t(80);function r(n,e){if(n){if("string"===typeof n)return Object(i.a)(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(i.a)(n,e):void 0}}},78:function(n,e,t){"use strict";var i,r,a=t(13),o=t(91),c=t(11),s=t(2);var l=c.default.header(i||(i=Object(a.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 900;\n\n  background: ",";\n  border-bottom: 3px solid ",";\n  box-shadow: 0 10px 20px -5px ",";\n  padding: 10px;\n\n  width: 100%;\n  max-width: 1000px;\n  left: 50%;\n  transform: translateX(-50%);\n  top: 30px;\n\n  @media screen and (max-width: 1000px) {\n    top: 0;\n    left: 0;\n    right: 0;\n    transform: none;\n  }\n"])),(function(n){return n.theme.background}),(function(n){return n.theme.primary_blue}),(function(n){return n.theme.shadow})),d=c.default.div(r||(r=Object(a.a)(["\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 0 20px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: ",";\n  align-items: center;\n"])),(function(n){return n.center?"center":"space-between"}));e.a=function(n){return Object(s.jsx)(l,{children:Object(s.jsx)(d,Object(o.a)(Object(o.a)({},n),{},{children:n.children}))})}},79:function(n,e,t){"use strict";e.a=t.p+"static/media/logo.f944e9a9.png"},80:function(n,e,t){"use strict";function i(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}t.d(e,"a",(function(){return i}))},81:function(n,e,t){"use strict";var i,r,a,o=t(13),c=t(76),s=t(0),l=t(22),d=t(11),u=t(79),b=t(78),p=t(2);var h=Object(d.default)(l.b)(i||(i=Object(o.a)(["\n  outline: none;\n  text-decoration: none;\n  display: block;\n  img {\n    display: block;\n    margin: 0;\n    height: auto;\n    image-rendering: optimizeQuality;\n  }\n"]))),j=d.default.nav(r||(r=Object(o.a)(['\n  a {\n    margin-left: 15px;\n    color: #777;\n    display: inline-block;\n    transition: .2s;\n    text-decoration: none;\n    &.is-active {\n      font-weight: bold;\n      color: #333;\n      position: relative;\n      &::after {\n        content: "";\n        display: block;\n        position: absolute;\n        bottom: -10px;\n        width: 100%;\n        height: 1px;\n        background: #333;\n      }\n    }\n    &:first-child {\n      margin-left: 0;\n    }\n    &:hover,\n    &:focus {\n      color: black;\n    }\n  }\n\n  @media screen and (max-width: 650px) {\n    position: absolute;\n    top: 100%;\n    left: 0;\n    right: 0;\n    background: white;\n    padding: 10px 30px;\n    box-sizing: border-box;\n    display: block;\n    border-bottom: 3px solid #003162;\n    pointer-events: none;\n    opacity: 0;\n    transition: .1s;\n    z-index: 1001;\n    &.nav-open {\n      opacity: 1;\n      pointer-events: auto;\n    }\n\n    a {\n      display: block;\n      width: 100%;\n      margin: 0 0 10px;\n      position: static;\n      &.is-active::after {\n        display: none;\n      }\n    }\n  }\n']))),x=d.default.div(a||(a=Object(o.a)(["\n  width: 25px;\n  height: 22px;\n  float: right;\n  cursor: pointer;\n  padding: 4px 5px 7px 5px;\n  display: none;\n  text-decoration: none;\n  outline: none;\n  box-sizing: content-box;\n\n  span {\n    user-select: none;\n    display: block;\n    width: 100%;\n    height: 3px;\n    background: #333333;\n    -webkit-transition: all 0.25s ease-in-out;\n    -o-transition: all 0.25s ease-in-out;\n    transition: all 0.25s ease-in-out;\n    margin: 4px 0;\n    position: relative;\n    z-index: 3;\n    &:nth-child(3) {\n      margin-top: -7px;\n    }\n  }\n\n  &.nav-open span {\n    &:nth-child(1) {\n      transform: translateY(3px) scale(0);\n      opacity: 0;\n    }\n    &:nth-child(2) {\n      transform: rotate(45deg);\n    }\n    &:nth-child(3) {\n      transform: rotate(-45deg);\n      opacity: 1;\n    }\n    &:nth-child(4) {\n      transform: translateY(-3px) scale(0);\n      opacity: 0;\n    }\n  }\n\n  &:hover span,\n  &:focus span {\n    background: black;\n  }\n  &:focus {\n    box-shadow: 0 0 0 3px rgba(lightblue, .7);\n  }\n\n  @media screen and (max-width: 650px) {\n    display: block;\n  }\n"])));e.a=function(){var n=Object(s.useState)(!1),e=Object(c.a)(n,2),t=e[0],i=e[1];return Object(p.jsxs)(b.a,{children:[Object(p.jsx)(h,{to:"/",children:Object(p.jsx)("img",{src:u.a,alt:"notenboom-logo"})}),Object(p.jsxs)(j,{className:t?"nav-open":"",children:[Object(p.jsx)(l.c,{exact:!0,activeClassName:"is-active",to:"/fouten",children:"Rapporteer fouten"}),Object(p.jsx)(l.c,{exact:!0,activeClassName:"is-active",to:"/account",children:"Account"}),1==JSON.parse(localStorage.getItem("currentUser")).adm&&Object(p.jsx)(l.c,{exact:!0,activeClassName:"is-active",to:"/admin",children:"Admin"}),Object(p.jsx)(l.c,{exact:!0,activeClassName:"is-active",to:"/account/uitloggen",children:"Log uit"})]}),Object(p.jsxs)(x,{onClick:function(){return i(!t)},className:t?"nav-open":"",children:[Object(p.jsx)("span",{}),Object(p.jsx)("span",{}),Object(p.jsx)("span",{}),Object(p.jsx)("span",{})]})]})}},82:function(n,e,t){"use strict";var i,r,a,o,c,s,l=t(13),d=(t(0),t(11)),u=t(2);var b=d.default.footer(i||(i=Object(l.a)(["\n  background: #003162;\n  padding: 15px 20px;\n  color: white;\n"]))),p=d.default.div(r||(r=Object(l.a)(["\n  max-width: 1000px;\n  margin: 0 auto;\n"]))),h=d.default.p(a||(a=Object(l.a)(["\n  line-height: 1.5;\n  margin: 5px 0;\n  font-size: 14px;\n  display: inline-block;\n"]))),j=d.default.ul(o||(o=Object(l.a)(["\n  padding: 0;\n  margin: 5px 0;\n  display: block;\n  list-style-type: none;\n  float: right;\n  text-align: left;\n  @media screen and (max-width: 600px) {\n    padding: 0;\n    float: none;\n  }\n"]))),x=d.default.li(c||(c=Object(l.a)(["\n  display: inline-block;\n  margin-left: 10px;\n  line-height: 1.5;\n  &:first-child {\n    margin-left: 0;\n  }\n  @media screen and (max-width: 600px) {\n    display: block;\n    margin: 0;\n    margin-bottom: 10px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n"]))),f=d.default.a(s||(s=Object(l.a)(["\n  color: #eee;\n  text-decoration: underline;\n  font-size: 14px;\n  &:hover,\n  &:focus {\n    text-decoration: none;\n  }\n"])));e.a=function(){return Object(u.jsx)(b,{children:Object(u.jsxs)(p,{className:"clearfix",children:[Object(u.jsx)(h,{children:"\xa9 2020 Business School Notenboom. Alle rechten voorbehouden."}),Object(u.jsxs)(j,{children:[Object(u.jsx)(x,{children:Object(u.jsx)(f,{href:"https://www.notenboom.nl/disclaimer",children:"Disclaimer"})}),Object(u.jsx)(x,{children:Object(u.jsx)(f,{href:"https://www.notenboom.nl/privacy-statement",children:"Privacy Statement"})}),Object(u.jsx)(x,{children:Object(u.jsx)(f,{href:"https://www.notenboom.nl/cookieverklaring",children:"Cookieverklaring"})}),Object(u.jsx)(x,{children:Object(u.jsx)(f,{href:"https://www.notenboom.nl/algemene-voorwaarden",children:"Algemene Voorwaarden"})})]})]})})}},83:function(n,e,t){"use strict";t.d(e,"a",(function(){return p})),t.d(e,"e",(function(){return h})),t.d(e,"f",(function(){return x})),t.d(e,"b",(function(){return m})),t.d(e,"c",(function(){return g})),t.d(e,"d",(function(){return O}));var i,r,a,o,c,s,l,d,u=t(13),b=t(11),p=b.default.section(i||(i=Object(u.a)(["\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 0 20px;\n  position: relative;\n"]))),h=Object(b.default)(p)(r||(r=Object(u.a)(["\n  margin: 50px auto;\n"]))),j=Object(b.default)(p)(a||(a=Object(u.a)(["\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  @media screen and (max-width: 800px) {\n    display: block;\n  }\n"]))),x=Object(b.default)(j)(o||(o=Object(u.a)(["\n  margin: 50px auto;\n"]))),f=b.default.div(c||(c=Object(u.a)(["\n  @media screen and (max-width: 800px) {\n    min-width: 100%;\n    margin-bottom: 40px;\n  }\n"]))),m=Object(b.default)(f)(s||(s=Object(u.a)(["\n  width: 45%;\n"]))),g=Object(b.default)(f)(l||(l=Object(u.a)(["\n  width: 35%;\n"]))),O=Object(b.default)(f)(d||(d=Object(u.a)(["\n  width: 62%;\n"])))},84:function(n,e,t){"use strict";function i(n,e,t,i,r,a,o){try{var c=n[a](o),s=c.value}catch(l){return void t(l)}c.done?e(s):Promise.resolve(s).then(i,r)}function r(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var o=n.apply(e,t);function c(n){i(o,r,a,c,s,"next",n)}function s(n){i(o,r,a,c,s,"throw",n)}c(void 0)}))}}t.d(e,"a",(function(){return r}))},89:function(n,e,t){"use strict";var i,r,a=t(13),o=t(0),c=t.n(o),s=t(11),l=t(82),d=t.p+"static/media/default-hero.3a09be24.png",u=t(83),b=t(2);var p=s.default.section(i||(i=Object(a.a)(['\n  padding-top: 188px;\n  padding-bottom: 50px;\n  margin-bottom: 20px;\n  color: white;\n  background-image: url("','"); \n  background-position: center;\n  background-size: cover;\n  position: relative;\n  overflow: hidden;\n  &::after {\n    content: "";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: linear-gradient(266.01deg,#d2aa71 10%,#003162 50%);\n    display: block;\n    opacity: .5;\n  }\n  @media screen and (max-width: 1000px) {\n    padding-top: 130px;\n    padding-bottom: 20px;\n  }\n'])),d),h=s.default.h1(r||(r=Object(a.a)(["\n  margin: 0;\n  font-size: 2.3rem;\n  line-height: 1.3;\n  position: relative;\n  z-index: 1;\n  @media screen and (max-width: 1000px) {\n    font-size: 1.8rem;\n  }\n"])));e.a=function(n){return Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsx)(p,{children:Object(b.jsx)(u.a,{children:Object(b.jsx)(h,{children:n.title})})}),n.grid?Object(b.jsx)(u.f,{children:n.children}):Object(b.jsx)(u.e,{children:n.children}),Object(b.jsx)(l.a,{})]})}},94:function(n,e,t){"use strict";var i=t(32),r=t.n(i),a=t(84),o=t(76),c=t(0),s=t(23);e.a=function(){var n=Object(c.useState)([]),e=Object(o.a)(n,2),t=e[0],i=e[1];return Object(c.useEffect)((function(){var n=localStorage.getItem("jwt-token");function e(){return(e=Object(a.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={token:n},t=JSON.stringify(t),Object(s.trackPromise)(fetch("".concat("https://informaticaserver.nl/notenboom_project/api","/user/fetch.php"),{method:"POST",body:t}).then(function(){var n=Object(a.a)(r.a.mark((function n(e){var t;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.json();case 2:t=n.sent,i(t.users);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()).catch((function(n){console.error(n)})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),t}}}]);
//# sourceMappingURL=6.d04ceef3.chunk.js.map