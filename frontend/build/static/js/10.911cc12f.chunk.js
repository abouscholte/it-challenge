(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[10],{1420:function(n,e,t){"use strict";t.r(e);var a=t(33),i=t.n(a),r=t(86),o=t(77),c=t(0),s=t(96),l=t.n(s),d=t(3),u=t(95),b=t(24),p=t(80),h=t(23),m=t(84),j=t(83),x=t(98),f=t(87),g=t(99),O=t(2),v=function(n){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(m.a,{}),Object(O.jsxs)(j.a,{grid:!0,title:"Uw account",children:[Object(O.jsxs)(p.f,{children:[Object(O.jsx)(f.a,{visible:n.alert.visible,text:n.alert.alert}),Object(O.jsx)("h1",{children:"Wijzig account gegevens"}),n.user&&Object(O.jsx)(x.a,{handleSubmit:n.handleSubmit,onSubmit:n.onSubmit,user:n.user,register:n.register,errors:n.errors,modalVisible:n.modalVisible})]}),Object(O.jsxs)(p.e,{children:["1"===n.user.admin&&Object(O.jsxs)("div",{id:"admin",children:[Object(O.jsx)("h1",{children:"Administrator"}),Object(O.jsx)("p",{children:"U bent een administrator. Hierdoor heeft u bevoegdheid om gebruikers te bekijken en beheren en suggesties voor aanpassingen in lesboeken te accepteren. Gebruik de knop hieronder om naar het administrator paneel te gaan."}),Object(O.jsx)(h.b,{className:"button",to:"/admin",style:{marginBottom:"30px"},children:"Administrator paneel"})]}),Object(O.jsx)("h1",{children:"Uw aanpassingen"}),Object(O.jsx)("p",{children:"U heeft nog geen aanpassingen aan lesboeken gemaakt."})]})]}),Object(O.jsxs)(g.a,{show:n.showModal,handleClose:n.modalInvisible,actionButton:!0,actionButtonText:"Verwijder",actionButtonClassName:"danger",actionButtonOnClick:function(){return n.deleteUser()},children:[Object(O.jsx)("h2",{style:{margin:0,marginBottom:10},children:"Weet u zeker dat u uw account wilt verwijderen?"}),Object(O.jsx)("p",{children:"U kunt hierna niet meer terug. Al uw gegevens worden verwijderd. Weet u dit zeker?"})]})]})};e.default=function(){var n=Object(d.g)(),e=Object(d.h)(),t=Object(c.useState)(!1),a=Object(o.a)(t,2),s=a[0],p=a[1],h=Object(c.useState)({visible:!!e.state,alert:e.state?e.state.alert:null}),m=Object(o.a)(h,2),j=m[0],x=m[1],f=Object(c.useState)({id:null,email:null,username:null,password:null,name:null,admin:null}),g=Object(o.a)(f,2),w=g[0],k=g[1],y=Object(u.a)(),z=y.register,S=y.handleSubmit,N=y.errors;return Object(c.useEffect)((function(){document.title="Uw account - Notenboom";var n=localStorage.getItem("currentUser"),e=JSON.parse(n).uid,t=localStorage.getItem("jwt-token"),a=JSON.stringify({token:t,id:e});function o(){return(o=Object(r.a)(i.a.mark((function n(){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:Object(b.trackPromise)(fetch("".concat("https://informaticaserver.nl/notenboom_project/api","/user/fetch_one.php"),{method:"POST",body:a}).then(function(){var n=Object(r.a)(i.a.mark((function n(e){var t;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.json();case 2:t=n.sent,k(t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()).catch((function(n){return console.error(n)})));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){o.apply(this,arguments)}()}),[]),Object(O.jsx)(v,{alert:j,user:w,handleSubmit:S,onSubmit:function(n){x({visible:!1,alert:null}),l.a.assign(w,n),l.a.assign(w,{token:localStorage.getItem("jwt-token")});var e=JSON.stringify(w);Object(b.trackPromise)(fetch("".concat("https://informaticaserver.nl/notenboom_project/api","/user/update.php"),{method:"POST",body:e}).then(function(){var n=Object(r.a)(i.a.mark((function n(e){var t;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.json();case 2:t=n.sent,x({visible:!0,alert:t.error?t.error:t.success});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()).catch((function(n){return console.error(n)})))},register:z,errors:N,modalVisible:function(){p(!0)},modalInvisible:function(){p(!1)},showModal:s,deleteUser:function(){l.a.assign(w,{token:localStorage.getItem("jwt-token")});var e=JSON.stringify(w);Object(b.trackPromise)(fetch("".concat("https://informaticaserver.nl/notenboom_project/api","/user/delete.php"),{method:"POST",body:e}).then(function(){var e=Object(r.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:a=e.sent,x({visible:!0,alert:a.error?a.error:a.success}),setTimeout((function(){n.push({pathname:"/account/uitloggen"})}),3e3);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(n){return console.error(n)})))}})}},78:function(n,e,t){"use strict";var a,i,r=t(13),o=t(82),c=t(11),s=t(2);var l=c.default.header(a||(a=Object(r.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 900;\n\n  background: ",";\n  border-bottom: 3px solid ",";\n  box-shadow: 0 10px 20px -5px ",";\n  padding: 10px;\n\n  width: 100%;\n  max-width: 1000px;\n  left: 50%;\n  transform: translateX(-50%);\n  top: 30px;\n\n  @media screen and (max-width: 1000px) {\n    top: 0;\n    left: 0;\n    right: 0;\n    transform: none;\n  }\n"])),(function(n){return n.theme.background}),(function(n){return n.theme.primary_blue}),(function(n){return n.theme.shadow})),d=c.default.div(i||(i=Object(r.a)(["\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 0 20px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: ",";\n  align-items: center;\n"])),(function(n){return n.center?"center":"space-between"}));e.a=function(n){return Object(s.jsx)(l,{children:Object(s.jsx)(d,Object(o.a)(Object(o.a)({},n),{},{children:n.children}))})}},79:function(n,e,t){"use strict";e.a=t.p+"static/media/logo.f944e9a9.png"},80:function(n,e,t){"use strict";t.d(e,"a",(function(){return j})),t.d(e,"b",(function(){return x})),t.d(e,"g",(function(){return f})),t.d(e,"h",(function(){return g})),t.d(e,"i",(function(){return v})),t.d(e,"d",(function(){return k})),t.d(e,"e",(function(){return y})),t.d(e,"f",(function(){return z})),t.d(e,"c",(function(){return S}));var a,i,r,o,c,s,l,d,u,b,p,h=t(13),m=t(11),j=m.default.section(a||(a=Object(h.a)(["\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 0 20px;\n  position: relative;\n"]))),x=Object(m.default)(j)(i||(i=Object(h.a)(["\n  max-width: 640px;\n"]))),f=Object(m.default)(j)(r||(r=Object(h.a)(["\n  margin: 50px auto;\n"]))),g=Object(m.default)(x)(o||(o=Object(h.a)(["\n  margin: 50px auto;\n"]))),O=Object(m.default)(j)(c||(c=Object(h.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  @media screen and (max-width: 800px) {\n    display: block;\n  }\n"]))),v=Object(m.default)(O)(s||(s=Object(h.a)(["\n  margin: 50px auto;\n"]))),w=m.default.div(l||(l=Object(h.a)(["\n  @media screen and (max-width: 800px) {\n    min-width: 100%;\n    margin-bottom: 40px;\n  }\n"]))),k=Object(m.default)(w)(d||(d=Object(h.a)(["\n  width: 45%;\n"]))),y=Object(m.default)(w)(u||(u=Object(h.a)(["\n  width: 35%;\n"]))),z=Object(m.default)(w)(b||(b=Object(h.a)(["\n  width: 62%;\n"]))),S=Object(m.default)(w)(p||(p=Object(h.a)(["\n  width: 100%;\n"])))},81:function(n,e,t){"use strict";var a,i,r,o,c,s,l=t(13),d=(t(0),t(11)),u=t(2);var b=d.default.footer(a||(a=Object(l.a)(["\n  background: #003162;\n  padding: 15px 20px;\n  color: white;\n"]))),p=d.default.div(i||(i=Object(l.a)(["\n  max-width: 1000px;\n  margin: 0 auto;\n"]))),h=d.default.p(r||(r=Object(l.a)(["\n  line-height: 1.5;\n  margin: 5px 0;\n  font-size: 14px;\n  display: inline-block;\n"]))),m=d.default.ul(o||(o=Object(l.a)(["\n  padding: 0;\n  margin: 5px 0;\n  display: block;\n  list-style-type: none;\n  float: right;\n  text-align: left;\n  @media screen and (max-width: 600px) {\n    padding: 0;\n    float: none;\n  }\n"]))),j=d.default.li(c||(c=Object(l.a)(["\n  display: inline-block;\n  margin-left: 10px;\n  line-height: 1.5;\n  &:first-child {\n    margin-left: 0;\n  }\n  @media screen and (max-width: 600px) {\n    display: block;\n    margin: 0;\n    margin-bottom: 10px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n"]))),x=d.default.a(s||(s=Object(l.a)(["\n  color: #eee;\n  text-decoration: underline;\n  font-size: 14px;\n  &:hover,\n  &:focus {\n    text-decoration: none;\n  }\n"])));e.a=function(){return Object(u.jsx)(b,{children:Object(u.jsxs)(p,{className:"clearfix",children:[Object(u.jsx)(h,{children:"\xa9 2020 Business School Notenboom. Alle rechten voorbehouden."}),Object(u.jsxs)(m,{children:[Object(u.jsx)(j,{children:Object(u.jsx)(x,{href:"https://www.notenboom.nl/disclaimer",children:"Disclaimer"})}),Object(u.jsx)(j,{children:Object(u.jsx)(x,{href:"https://www.notenboom.nl/privacy-statement",children:"Privacy Statement"})}),Object(u.jsx)(j,{children:Object(u.jsx)(x,{href:"https://www.notenboom.nl/cookieverklaring",children:"Cookieverklaring"})}),Object(u.jsx)(j,{children:Object(u.jsx)(x,{href:"https://www.notenboom.nl/algemene-voorwaarden",children:"Algemene Voorwaarden"})})]})]})})}},83:function(n,e,t){"use strict";var a,i,r=t(13),o=t(0),c=t.n(o),s=t(11),l=t(81),d=t.p+"static/media/default-hero.3a09be24.png",u=t(80),b=t(2);var p=s.default.section(a||(a=Object(r.a)(['\n  padding-top: 188px;\n  padding-bottom: 50px;\n  margin-bottom: 20px;\n  color: white;\n  background-image: url("','"); \n  background-position: center;\n  background-size: cover;\n  position: relative;\n  overflow: hidden;\n  &::after {\n    content: "";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: linear-gradient(266.01deg,#d2aa71 10%,#003162 50%);\n    display: block;\n    opacity: .5;\n  }\n  @media screen and (max-width: 1000px) {\n    padding-top: 130px;\n    padding-bottom: 20px;\n  }\n'])),d),h=s.default.h1(i||(i=Object(r.a)(["\n  margin: 0;\n  font-size: 2.3rem;\n  line-height: 1.3;\n  position: relative;\n  z-index: 1;\n  @media screen and (max-width: 1000px) {\n    font-size: 1.8rem;\n  }\n"])));e.a=function(n){return Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsx)(p,{children:n.small?Object(b.jsx)(u.b,{children:Object(b.jsx)(h,{children:n.title})}):Object(b.jsx)(u.a,{children:Object(b.jsx)(h,{children:n.title})})}),n.grid?Object(b.jsx)(u.i,{children:n.children}):n.small?Object(b.jsx)(u.h,{children:n.children}):Object(b.jsx)(u.g,{children:n.children}),Object(b.jsx)(l.a,{})]})}},84:function(n,e,t){"use strict";var a,i,r,o=t(13),c=t(77),s=t(0),l=t(23),d=t(11),u=t(79),b=t(78),p=t(2);var h=Object(d.default)(l.b)(a||(a=Object(o.a)(["\n  outline: none;\n  text-decoration: none;\n  display: block;\n  img {\n    display: block;\n    margin: 0;\n    height: auto;\n    image-rendering: optimizeQuality;\n  }\n"]))),m=d.default.nav(i||(i=Object(o.a)(['\n  a {\n    margin-left: 15px;\n    color: #777;\n    display: inline-block;\n    transition: .2s;\n    text-decoration: none;\n    &.is-active {\n      font-weight: bold;\n      color: #333;\n      position: relative;\n      &::after {\n        content: "";\n        display: block;\n        position: absolute;\n        bottom: -10px;\n        width: 100%;\n        height: 1px;\n        background: #333;\n      }\n    }\n    &:first-child {\n      margin-left: 0;\n    }\n    &:hover,\n    &:focus {\n      color: black;\n    }\n  }\n\n  @media screen and (max-width: 650px) {\n    position: absolute;\n    top: 100%;\n    left: 0;\n    right: 0;\n    background: white;\n    padding: 10px 30px;\n    box-sizing: border-box;\n    display: block;\n    border-bottom: 3px solid #003162;\n    pointer-events: none;\n    opacity: 0;\n    transition: .1s;\n    z-index: 1001;\n    &.nav-open {\n      opacity: 1;\n      pointer-events: auto;\n    }\n\n    a {\n      display: block;\n      width: 100%;\n      margin: 0 0 10px;\n      position: static;\n      &.is-active::after {\n        display: none;\n      }\n    }\n  }\n']))),j=d.default.div(r||(r=Object(o.a)(["\n  width: 25px;\n  height: 22px;\n  float: right;\n  cursor: pointer;\n  padding: 4px 5px 7px 5px;\n  display: none;\n  text-decoration: none;\n  outline: none;\n  box-sizing: content-box;\n\n  span {\n    user-select: none;\n    display: block;\n    width: 100%;\n    height: 3px;\n    background: #333333;\n    -webkit-transition: all 0.25s ease-in-out;\n    -o-transition: all 0.25s ease-in-out;\n    transition: all 0.25s ease-in-out;\n    margin: 4px 0;\n    position: relative;\n    z-index: 3;\n    &:nth-child(3) {\n      margin-top: -7px;\n    }\n  }\n\n  &.nav-open span {\n    &:nth-child(1) {\n      transform: translateY(3px) scale(0);\n      opacity: 0;\n    }\n    &:nth-child(2) {\n      transform: rotate(45deg);\n    }\n    &:nth-child(3) {\n      transform: rotate(-45deg);\n      opacity: 1;\n    }\n    &:nth-child(4) {\n      transform: translateY(-3px) scale(0);\n      opacity: 0;\n    }\n  }\n\n  &:hover span,\n  &:focus span {\n    background: black;\n  }\n  &:focus {\n    box-shadow: 0 0 0 3px rgba(lightblue, .7);\n  }\n\n  @media screen and (max-width: 650px) {\n    display: block;\n  }\n"])));e.a=function(){var n=Object(s.useState)(!1),e=Object(c.a)(n,2),t=e[0],a=e[1];return Object(p.jsxs)(b.a,{children:[Object(p.jsx)(h,{to:"/",children:Object(p.jsx)("img",{src:u.a,alt:"notenboom-logo"})}),Object(p.jsxs)(m,{className:t?"nav-open":"",children:[Object(p.jsx)(l.c,{activeClassName:"is-active",to:"/fouten",children:"Rapporteer fouten"}),Object(p.jsx)(l.c,{activeClassName:"is-active",to:"/account",children:"Account"}),1==JSON.parse(localStorage.getItem("currentUser")).adm&&Object(p.jsx)(l.c,{activeClassName:"is-active",to:"/admin",children:"Admin"}),Object(p.jsx)(l.c,{exact:!0,activeClassName:"is-active",to:"/account/uitloggen",children:"Log uit"})]}),Object(p.jsxs)(j,{onClick:function(){return a(!t)},className:t?"nav-open":"",children:[Object(p.jsx)("span",{}),Object(p.jsx)("span",{}),Object(p.jsx)("span",{}),Object(p.jsx)("span",{})]})]})}},87:function(n,e,t){"use strict";var a,i,r=t(13),o=t(82),c=t(89),s=t(90),l=t(93),d=t(92),u=t(0),b=t.n(u),p=t(11),h=t(2),m=function(n){Object(l.a)(t,n);var e=Object(d.a)(t);function t(){var n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=e.call.apply(e,[this].concat(i))).handleClick=function(n){n.preventDefault(),document.getElementById("alert").style.display="none"},n}return Object(s.a)(t,[{key:"render",value:function(){return Object(h.jsxs)(j,Object(o.a)(Object(o.a)({},this.props),{},{visible:this.props.visible,id:"alert",children:[this.props.text,Object(h.jsx)(x,{onClick:this.handleClick,href:"#close-alert",children:"\xd7"})]}))}}]),t}(b.a.Component),j=p.default.div(a||(a=Object(r.a)(["\n  padding: 20px;\n  box-sizing: border-box;\n  margin: 0 auto 30px auto;\n  background: white;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  padding-right: 60px;\n  position: relative;\n  text-align: left;\n  font-family: 'Barlow', sans-serif;\n  max-width: 600px;\n  display: ",";\n"])),(function(n){return n.visible?"block":"none"})),x=p.default.a(i||(i=Object(r.a)(["\n  position: absolute;\n  right: 20px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 25px;\n  color: black;\n  cursor: pointer;\n  display: block;\n  width: 25px;\n  height: 25px;\n  line-height: 1;\n  text-align: center;\n  text-decoration: none;\n  &:hover,\n  &:focus {\n    text-decoration: none;\n  }\n"])));e.a=m},91:function(n,e,t){"use strict";t.d(e,"f",(function(){return b})),t.d(e,"c",(function(){return p})),t.d(e,"d",(function(){return h})),t.d(e,"a",(function(){return m})),t.d(e,"b",(function(){return j})),t.d(e,"g",(function(){return x})),t.d(e,"e",(function(){return f}));var a,i,r,o,c,s,l,d=t(13),u=t(11),b=u.default.form(a||(a=Object(d.a)(["\n  display: block;\n  border: 1px solid ",";\n  background: #f6f8fa;\n  padding: 20px;\n  border-radius: 5px;\n  margin: 0 0 30px;\n"])),(function(n){return n.theme.grey})),p=u.default.div(i||(i=Object(d.a)(["\n  margin-bottom: 20px;\n"]))),h=u.default.label(r||(r=Object(d.a)(["\n  display: block;\n  font-size: 13px;\n  font-family: 'Barlow', sans-serif;\n  color: #555;\n  text-align: left;\n  margin-bottom: 5px;\n  &.error {\n    color: #FF2800;\n  }\n"]))),m=u.default.input(o||(o=Object(d.a)(["\n  display: block;\n  width: 100%;\n  text-align: left;\n  padding: 10px;\n  border: 2px solid ",";\n  border-radius: 8px;\n  -webkit-appearance: none;\n  background: white;\n  box-sizing: border-box;\n  transition: .2s;\n  outline: none;\n  font-size: 16px;\n  font-family: 'Roboto Slab', sans-serif;\n  resize: vertical;\n  &:hover,\n  &:focus {\n    border-color: ",";\n  }\n  &:focus {\n    box-shadow: 0 0 0 3px ",";\n  }\n  &.error {\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.grey}),(function(n){return n.theme.darker_grey}),(function(n){return n.theme.outline}),(function(n){return n.theme.ferrari_red})),j=u.default.span(c||(c=Object(d.a)(["\n  color: ",";\n  text-align: left;\n  font-size: 13px;\n  font-family: 'Barlow', sans-serif;\n  margin-top: 5px;\n  display: block;\n"])),(function(n){return n.theme.ferrari_red})),x=u.default.input(s||(s=Object(d.a)(["\n  display: block;\n  width: 100%;\n  background: ",";\n  border: 2px solid ",";\n  border-radius: 8px;\n  padding: 10px;\n  text-align: center;\n  -webkit-appearance: none;\n  transition: .2s;\n  color: white;\n  outline: none;\n  font-family: 'Barlow', sans-serif;\n  font-size: 16px;\n  cursor: pointer;\n  line-height: 1;\n  &:hover,\n  &:focus {\n    background: ",";\n  }\n  &:focus {\n    box-shadow: 0 0 0 3px ",";\n  }\n"])),(function(n){return n.theme.primary_blue}),(function(n){return n.theme.primary_blue}),(function(n){return n.theme.lighter_blue}),(function(n){return n.theme.outline})),f=u.default.div(l||(l=Object(d.a)(["\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  margin-top: 20px;\n  a {\n    text-decoration: underline;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n"])))},98:function(n,e,t){"use strict";t(0);var a=t(3),i=t(23),r=t(91),o=t(2);e.a=function(n){var e=n.handleSubmit,t=n.onSubmit,c=n.user,s=n.register,l=n.errors,d=n.modalVisible,u=Object(a.h)().pathname.includes("/admin");return Object(o.jsxs)("form",{onSubmit:e(t),children:[Object(o.jsxs)(r.c,{children:[Object(o.jsxs)(r.d,{htmlFor:"email",children:["Wijzig ",!u&&"uw"," e-mailadres"]}),Object(o.jsx)(r.a,{name:"email",type:"email",id:"email",defaultValue:c.email,className:l.email&&"error",ref:s({required:"Dit veld is verplicht!",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Ongeldig e-mailadres, probeer een andere!"}})}),l.email&&Object(o.jsx)(r.b,{children:l.email.message})]}),Object(o.jsxs)(r.c,{children:[Object(o.jsxs)(r.d,{htmlFor:"username",children:["Wijzig ",!u&&"uw"," gebruikersnaam"]}),Object(o.jsx)(r.a,{name:"username",type:"username",id:"username",defaultValue:c.username,className:l.username&&"error",ref:s({required:"Dit veld is verplicht!",minLength:{value:3,message:"Gebruikersnaam moet bestaan uit minimaal 3 tekens!"},maxLength:{value:20,message:"Gebruikersnaam moet bestaan uit maximaal 20 tekens!"}})}),l.username&&Object(o.jsx)(r.b,{children:l.username.message})]}),Object(o.jsxs)(r.c,{children:[Object(o.jsxs)(r.d,{htmlFor:"name",children:["Wijzig ",!u&&"uw"," naam"]}),Object(o.jsx)(r.a,{name:"name",type:"name",id:"name",defaultValue:c.name,ref:s({required:"Dit veld is verplicht!"}),className:l.name&&"error"}),l.name&&Object(o.jsx)(r.b,{children:l.name.message})]}),Object(o.jsx)(r.g,{type:"submit",value:"Wijzig account",tabIndex:"4",className:"button"}),Object(o.jsxs)(r.e,{children:[Object(o.jsx)(i.b,{className:"danger",to:"#",onClick:function(){return d()},children:"Verwijder account"}),!u&&Object(o.jsx)(i.b,{to:"/account/wijzig-wachtwoord",children:"Wijzig wachtwoord"})]})]})}},99:function(n,e,t){"use strict";var a,i,r=t(13),o=(t(0),t(11)),c=t(23),s=t(2);var l=o.default.div(a||(a=Object(r.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(225,225,225,.4);\n  z-index: 1001;\n  pointer-events: auto;\n  &.display-block {\n    display: block;\n  }\n  &.display-none {\n    display: none;\n  }\n"]))),d=o.default.section(i||(i=Object(r.a)(["\n  position: fixed;\n  background: white;\n  width: 80%;\n  max-width: 500px;\n  height: auto;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 20px;\n  border-radius: .5rem;\n  box-shadow: 5px 12px 20px rgba(0,0,0,.1);\n"])));e.a=function(n){var e=n.show?"modal display-block":"modal display-none";return Object(s.jsx)(l,{className:e,children:Object(s.jsxs)(d,{onClick:n.handleClose,children:[n.children,Object(s.jsx)(c.b,{className:"button",onClick:n.handleClose,to:"#",children:n.actionButton?"Annuleer":"Sluit"}),n.actionButton&&Object(s.jsx)(c.b,{to:"#",onClick:n.actionButtonOnClick,className:n.actionButtonClassName,style:{marginLeft:15},children:n.actionButtonText})]})})}}}]);
//# sourceMappingURL=10.911cc12f.chunk.js.map