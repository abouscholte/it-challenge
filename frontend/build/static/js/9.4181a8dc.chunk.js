(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[9],{101:function(n,e,t){"use strict";var i=t(33),a=t.n(i),r=t(86),c=t(77),o=t(0),s=t(24);e.a=function(){var n=Object(o.useState)([]),e=Object(c.a)(n,2),t=e[0],i=e[1];return Object(o.useEffect)((function(){var n=localStorage.getItem("jwt-token");function e(){return(e=Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={token:n},t=JSON.stringify(t),Object(s.trackPromise)(fetch("".concat("https://informaticaserver.nl/notenboom_project/api","/user/fetch.php"),{method:"POST",body:t}).then(function(){var n=Object(r.a)(a.a.mark((function n(e){var t;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.json();case 2:t=n.sent,i(t.users);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()).catch((function(n){console.error(n)})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),t}},1413:function(n,e,t){"use strict";t.r(e);var i=t(77),a=t(0),r=t(3),c=t(96),o=t.n(c),s=t(23),l=t(26),d=t(84),u=t(83),b=t(101),p=t(100),h=t(2);e.default=function(n){var e=Object(a.useState)("old_to_new"),t=Object(i.a)(e,2),c=t[0],j=t[1],f=Object(r.g)(),x=Object(r.h)();Object(a.useEffect)((function(){return document.title="Administrator Paneel - Notenboom"}));var m=Object(b.a)(),O=m.filter((function(n){return 0==n.status})),g=n.new_users?O:m;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(l.a,{}),Object(h.jsx)(d.a,{}),Object(h.jsxs)(u.a,{title:n.new_users?"Nieuwe gebruikers":"Alle gebruikers",children:[Object(h.jsx)("p",{children:Object(h.jsxs)(s.b,{to:"/admin",className:"button button-back",children:[Object(h.jsx)(p.ArrowBackOutline,{color:"#ffffff",height:"16px"}),"\xa0Ga terug"]})}),Object(h.jsxs)("h1",{children:[n.new_users?"Nieuwe gebruikers":"Alle gebruikers",Object(h.jsx)("div",{className:"small",onClick:function(){return j("old_to_new"==c?"new_to_old":"old_to_new"),void o.a.reverse(m)},children:"old_to_new"==c?"Sorteer van nieuw naar oud":"Sorteer van oud naar nieuw"})]}),g.length>0?Object(h.jsx)("div",{className:"table-container",children:Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"#"}),Object(h.jsx)("th",{scope:"col",children:"Gebruikersnaam"}),Object(h.jsx)("th",{scope:"col",children:"E-mailadres"}),Object(h.jsx)("th",{scope:"col",children:"Volledige naam"}),Object(h.jsx)("th",{scope:"col",children:"Status"})]})}),Object(h.jsx)("tbody",{children:g.map((function(n,e){return Object(h.jsxs)("tr",{onClick:function(){return e=n.id,void f.push({pathname:"/admin/gebruikers/gebruiker-".concat(e),state:{from:x.pathname}});var e},tabIndex:e,children:[Object(h.jsx)("th",{scope:"col",children:n.id}),Object(h.jsx)("td",{children:n.username}),Object(h.jsx)("td",{children:n.email}),Object(h.jsx)("td",{children:n.name}),Object(h.jsx)("td",{children:1==n.status?"Goedgekeurd":"Niet goedgekeurd"})]},e)}))})]})}):Object(h.jsx)("p",{className:"large",children:n.new_users?"Geen nieuwe gebruikers gevonden":"Geen gebruikers gevonden"})]})]})}},77:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var i=t(85);function a(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var t=[],i=!0,a=!1,r=void 0;try{for(var c,o=n[Symbol.iterator]();!(i=(c=o.next()).done)&&(t.push(c.value),!e||t.length!==e);i=!0);}catch(s){a=!0,r=s}finally{try{i||null==o.return||o.return()}finally{if(a)throw r}}return t}}(n,e)||Object(i.a)(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},78:function(n,e,t){"use strict";var i,a,r=t(13),c=t(82),o=t(11),s=t(2);var l=o.default.header(i||(i=Object(r.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 900;\n\n  background: ",";\n  border-bottom: 3px solid ",";\n  box-shadow: 0 10px 20px -5px ",";\n  padding: 10px;\n\n  width: 100%;\n  max-width: 1000px;\n  left: 50%;\n  transform: translateX(-50%);\n  top: 30px;\n\n  @media screen and (max-width: 1000px) {\n    top: 0;\n    left: 0;\n    right: 0;\n    transform: none;\n  }\n"])),(function(n){return n.theme.background}),(function(n){return n.theme.primary_blue}),(function(n){return n.theme.shadow})),d=o.default.div(a||(a=Object(r.a)(["\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 0 20px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: ",";\n  align-items: center;\n"])),(function(n){return n.center?"center":"space-between"}));e.a=function(n){return Object(s.jsx)(l,{children:Object(s.jsx)(d,Object(c.a)(Object(c.a)({},n),{},{children:n.children}))})}},79:function(n,e,t){"use strict";e.a=t.p+"static/media/logo.f944e9a9.png"},80:function(n,e,t){"use strict";t.d(e,"a",(function(){return f})),t.d(e,"b",(function(){return x})),t.d(e,"g",(function(){return m})),t.d(e,"h",(function(){return O})),t.d(e,"i",(function(){return v})),t.d(e,"d",(function(){return y})),t.d(e,"e",(function(){return k})),t.d(e,"f",(function(){return N})),t.d(e,"c",(function(){return S}));var i,a,r,c,o,s,l,d,u,b,p,h=t(13),j=t(11),f=j.default.section(i||(i=Object(h.a)(["\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 0 20px;\n  position: relative;\n"]))),x=Object(j.default)(f)(a||(a=Object(h.a)(["\n  max-width: 640px;\n"]))),m=Object(j.default)(f)(r||(r=Object(h.a)(["\n  margin: 50px auto;\n"]))),O=Object(j.default)(x)(c||(c=Object(h.a)(["\n  margin: 50px auto;\n"]))),g=Object(j.default)(f)(o||(o=Object(h.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  @media screen and (max-width: 800px) {\n    display: block;\n  }\n"]))),v=Object(j.default)(g)(s||(s=Object(h.a)(["\n  margin: 50px auto;\n"]))),w=j.default.div(l||(l=Object(h.a)(["\n  @media screen and (max-width: 800px) {\n    min-width: 100%;\n    margin-bottom: 40px;\n  }\n"]))),y=Object(j.default)(w)(d||(d=Object(h.a)(["\n  width: 45%;\n"]))),k=Object(j.default)(w)(u||(u=Object(h.a)(["\n  width: 35%;\n"]))),N=Object(j.default)(w)(b||(b=Object(h.a)(["\n  width: 62%;\n"]))),S=Object(j.default)(w)(p||(p=Object(h.a)(["\n  width: 100%;\n"])))},81:function(n,e,t){"use strict";var i,a,r,c,o,s,l=t(13),d=(t(0),t(11)),u=t(2);var b=d.default.footer(i||(i=Object(l.a)(["\n  background: #003162;\n  padding: 15px 20px;\n  color: white;\n"]))),p=d.default.div(a||(a=Object(l.a)(["\n  max-width: 1000px;\n  margin: 0 auto;\n"]))),h=d.default.p(r||(r=Object(l.a)(["\n  line-height: 1.5;\n  margin: 5px 0;\n  font-size: 14px;\n  display: inline-block;\n"]))),j=d.default.ul(c||(c=Object(l.a)(["\n  padding: 0;\n  margin: 5px 0;\n  display: block;\n  list-style-type: none;\n  float: right;\n  text-align: left;\n  @media screen and (max-width: 600px) {\n    padding: 0;\n    float: none;\n  }\n"]))),f=d.default.li(o||(o=Object(l.a)(["\n  display: inline-block;\n  margin-left: 10px;\n  line-height: 1.5;\n  &:first-child {\n    margin-left: 0;\n  }\n  @media screen and (max-width: 600px) {\n    display: block;\n    margin: 0;\n    margin-bottom: 10px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n"]))),x=d.default.a(s||(s=Object(l.a)(["\n  color: #eee;\n  text-decoration: underline;\n  font-size: 14px;\n  &:hover,\n  &:focus {\n    text-decoration: none;\n  }\n"])));e.a=function(){return Object(u.jsx)(b,{children:Object(u.jsxs)(p,{className:"clearfix",children:[Object(u.jsx)(h,{children:"\xa9 2020 Business School Notenboom. Alle rechten voorbehouden."}),Object(u.jsxs)(j,{children:[Object(u.jsx)(f,{children:Object(u.jsx)(x,{href:"https://www.notenboom.nl/disclaimer",children:"Disclaimer"})}),Object(u.jsx)(f,{children:Object(u.jsx)(x,{href:"https://www.notenboom.nl/privacy-statement",children:"Privacy Statement"})}),Object(u.jsx)(f,{children:Object(u.jsx)(x,{href:"https://www.notenboom.nl/cookieverklaring",children:"Cookieverklaring"})}),Object(u.jsx)(f,{children:Object(u.jsx)(x,{href:"https://www.notenboom.nl/algemene-voorwaarden",children:"Algemene Voorwaarden"})})]})]})})}},83:function(n,e,t){"use strict";var i,a,r=t(13),c=t(0),o=t.n(c),s=t(11),l=t(81),d=t.p+"static/media/default-hero.3a09be24.png",u=t(80),b=t(2);var p=s.default.section(i||(i=Object(r.a)(['\n  padding-top: 188px;\n  padding-bottom: 50px;\n  margin-bottom: 20px;\n  color: white;\n  background-image: url("','"); \n  background-position: center;\n  background-size: cover;\n  position: relative;\n  overflow: hidden;\n  &::after {\n    content: "";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: linear-gradient(266.01deg,#d2aa71 10%,#003162 50%);\n    display: block;\n    opacity: .5;\n  }\n  @media screen and (max-width: 1000px) {\n    padding-top: 130px;\n    padding-bottom: 20px;\n  }\n'])),d),h=s.default.h1(a||(a=Object(r.a)(["\n  margin: 0;\n  font-size: 2.3rem;\n  line-height: 1.3;\n  position: relative;\n  z-index: 1;\n  @media screen and (max-width: 1000px) {\n    font-size: 1.8rem;\n  }\n"])));e.a=function(n){return Object(b.jsxs)(o.a.Fragment,{children:[Object(b.jsx)(p,{children:n.small?Object(b.jsx)(u.b,{children:Object(b.jsx)(h,{children:n.title})}):Object(b.jsx)(u.a,{children:Object(b.jsx)(h,{children:n.title})})}),n.grid?Object(b.jsx)(u.i,{children:n.children}):n.small?Object(b.jsx)(u.h,{children:n.children}):Object(b.jsx)(u.g,{children:n.children}),Object(b.jsx)(l.a,{})]})}},84:function(n,e,t){"use strict";var i,a,r,c=t(13),o=t(77),s=t(0),l=t(23),d=t(11),u=t(79),b=t(78),p=t(2);var h=Object(d.default)(l.b)(i||(i=Object(c.a)(["\n  outline: none;\n  text-decoration: none;\n  display: block;\n  img {\n    display: block;\n    margin: 0;\n    height: auto;\n    image-rendering: optimizeQuality;\n  }\n"]))),j=d.default.nav(a||(a=Object(c.a)(['\n  a {\n    margin-left: 15px;\n    color: #777;\n    display: inline-block;\n    transition: .2s;\n    text-decoration: none;\n    &.is-active {\n      font-weight: bold;\n      color: #333;\n      position: relative;\n      &::after {\n        content: "";\n        display: block;\n        position: absolute;\n        bottom: -10px;\n        width: 100%;\n        height: 1px;\n        background: #333;\n      }\n    }\n    &:first-child {\n      margin-left: 0;\n    }\n    &:hover,\n    &:focus {\n      color: black;\n    }\n  }\n\n  @media screen and (max-width: 650px) {\n    position: absolute;\n    top: 100%;\n    left: 0;\n    right: 0;\n    background: white;\n    padding: 10px 30px;\n    box-sizing: border-box;\n    display: block;\n    border-bottom: 3px solid #003162;\n    pointer-events: none;\n    opacity: 0;\n    transition: .1s;\n    z-index: 1001;\n    &.nav-open {\n      opacity: 1;\n      pointer-events: auto;\n    }\n\n    a {\n      display: block;\n      width: 100%;\n      margin: 0 0 10px;\n      position: static;\n      &.is-active::after {\n        display: none;\n      }\n    }\n  }\n']))),f=d.default.div(r||(r=Object(c.a)(["\n  width: 25px;\n  height: 22px;\n  float: right;\n  cursor: pointer;\n  padding: 4px 5px 7px 5px;\n  display: none;\n  text-decoration: none;\n  outline: none;\n  box-sizing: content-box;\n\n  span {\n    user-select: none;\n    display: block;\n    width: 100%;\n    height: 3px;\n    background: #333333;\n    -webkit-transition: all 0.25s ease-in-out;\n    -o-transition: all 0.25s ease-in-out;\n    transition: all 0.25s ease-in-out;\n    margin: 4px 0;\n    position: relative;\n    z-index: 3;\n    &:nth-child(3) {\n      margin-top: -7px;\n    }\n  }\n\n  &.nav-open span {\n    &:nth-child(1) {\n      transform: translateY(3px) scale(0);\n      opacity: 0;\n    }\n    &:nth-child(2) {\n      transform: rotate(45deg);\n    }\n    &:nth-child(3) {\n      transform: rotate(-45deg);\n      opacity: 1;\n    }\n    &:nth-child(4) {\n      transform: translateY(-3px) scale(0);\n      opacity: 0;\n    }\n  }\n\n  &:hover span,\n  &:focus span {\n    background: black;\n  }\n  &:focus {\n    box-shadow: 0 0 0 3px rgba(lightblue, .7);\n  }\n\n  @media screen and (max-width: 650px) {\n    display: block;\n  }\n"])));e.a=function(){var n=Object(s.useState)(!1),e=Object(o.a)(n,2),t=e[0],i=e[1];return Object(p.jsxs)(b.a,{children:[Object(p.jsx)(h,{to:"/",children:Object(p.jsx)("img",{src:u.a,alt:"notenboom-logo"})}),Object(p.jsxs)(j,{className:t?"nav-open":"",children:[Object(p.jsx)(l.c,{activeClassName:"is-active",to:"/fouten",children:"Rapporteer fouten"}),Object(p.jsx)(l.c,{activeClassName:"is-active",to:"/account",children:"Account"}),1==JSON.parse(localStorage.getItem("currentUser")).adm&&Object(p.jsx)(l.c,{activeClassName:"is-active",to:"/admin",children:"Admin"}),Object(p.jsx)(l.c,{exact:!0,activeClassName:"is-active",to:"/account/uitloggen",children:"Log uit"})]}),Object(p.jsxs)(f,{onClick:function(){return i(!t)},className:t?"nav-open":"",children:[Object(p.jsx)("span",{}),Object(p.jsx)("span",{}),Object(p.jsx)("span",{}),Object(p.jsx)("span",{})]})]})}},85:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var i=t(88);function a(n,e){if(n){if("string"===typeof n)return Object(i.a)(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(i.a)(n,e):void 0}}},86:function(n,e,t){"use strict";function i(n,e,t,i,a,r,c){try{var o=n[r](c),s=o.value}catch(l){return void t(l)}o.done?e(s):Promise.resolve(s).then(i,a)}function a(n){return function(){var e=this,t=arguments;return new Promise((function(a,r){var c=n.apply(e,t);function o(n){i(c,a,r,o,s,"next",n)}function s(n){i(c,a,r,o,s,"throw",n)}o(void 0)}))}}t.d(e,"a",(function(){return a}))},88:function(n,e,t){"use strict";function i(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}t.d(e,"a",(function(){return i}))}}]);
//# sourceMappingURL=9.4181a8dc.chunk.js.map