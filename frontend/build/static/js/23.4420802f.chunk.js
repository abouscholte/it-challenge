(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[23],{1419:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return p}));var i=t(74),a=t(0),o=t.n(a),r=t(102),c=t(96),s=t(79),d=t(103),l=t(2);function p(){var n=Object(r.a)(),e=Object(a.useState)([]),t=Object(i.a)(e,2),p=t[0],x=t[1];return Object(a.useEffect)((function(){document.title="Bekijk boeken - Notenboom",x(n)}),[n,x]),Object(l.jsxs)(o.a.Fragment,{children:[Object(l.jsx)(s.a,{}),Object(l.jsx)(c.a,{title:"Administrator paneel",sidebarTitle:"Beheer alle boeken",sidebarType:"admin",children:Object(l.jsx)(d.f,{children:p.map((function(n){return Object(l.jsxs)(d.a,{two:!0,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(d.e,{dangerouslySetInnerHTML:{__html:n.title}}),Object(l.jsx)(d.d,{dangerouslySetInnerHTML:{__html:n.author}})]}),Object(l.jsxs)(d.c,{children:[Object(l.jsx)("li",{dangerouslySetInnerHTML:{__html:"Uitgever: ".concat(n.publisher)}}),Object(l.jsxs)("li",{children:["Uitgegeven: ",n.year_published]}),Object(l.jsxs)("li",{children:["ISBN: ",n.isbn]}),Object(l.jsxs)("li",{children:["Type: ","papier"==n.type?"Papieren boek":"audio"==n.type?"Audioboek":"E-book"]})]}),Object(l.jsx)(d.b,{to:"/boeken/boek-".concat(n.id),children:"Wijzig boek"})]},n.id)}))})})]})}},96:function(n,e,t){"use strict";var i,a,o,r,c,s,d,l=t(10),p=t(74),x=t(0),b=t.n(x),m=t(7),j=t(76),u=t(22),h=t(95),f=t(2),g=m.default.section(i||(i=Object(l.a)(["\n  position: relative;\n  display: flex;\n  flex-wrap: nowrap;\n  max-width: 1000px;\n  margin: 0 auto;\n  @media screen and (max-width: 750px) {\n    display: block;\n  }\n"]))),O=m.default.nav(a||(a=Object(l.a)(["\n  position: relative;\n  z-index: 900;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  display: flex;\n  min-width: 250px;\n  max-width: 33%;\n  flex-direction: column;\n  border-right: 1px solid #ddd;\n  margin-right: 30px;\n  padding: 50px 50px 50px 20px;\n\n  @media screen and (max-width: 750px) {\n    max-width: 100%;\n    position: sticky;\n    z-index: 500;\n    top: 0;\n    padding: 30px 20px 5px 20px;\n    margin: 0;\n    border-right: none;\n    border-bottom: 1px solid #ddd;\n    background: white;\n  }\n"]))),w=m.default.div(o||(o=Object(l.a)(["\n  position: sticky;\n  top: 30px;\n  @media screen and (max-width: 750px) {\n    position: static;\n  }\n"]))),v=m.default.h3(r||(r=Object(l.a)(["\n  font-size: 1.8rem;\n  margin: 0 0 40px;\n\n  #nav-open-button {\n    margin-left: 10px;\n    cursor: pointer;\n    display: none;\n    width: 32px;\n    justify-content: center;\n    align-items: center;\n    outline: none;\n    transition: box-shadow .2s ease;\n    border-radius: .5rem;\n    svg {\n      margin-bottom: -3px;\n      transition: all .3s ease;\n      transform: rotateX(0);\n    }\n    &:hover svg,\n    &:focus svg {\n      color: #666;\n    }\n    &:focus {\n      box-shadow: 0 0 0 3px ",";\n    }\n    &.nav-open svg {\n      transform: rotateX(180deg);\n    }\n  }\n  \n  @media screen and (max-width: 750px) {\n    font-size: 1.5rem;\n    display: flex;\n    #nav-open-button {\n      display: flex;\n    }\n  }\n"])),(function(n){return n.theme.outline})),k=m.default.ul(c||(c=Object(l.a)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  li {\n    margin-bottom: 15px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  @media screen and (max-width: 750px) {\n    max-height: 0;\n    overflow: hidden;\n    margin-top: -20px;\n    transition: max-height 300ms ease;\n\n    &.nav-open {\n      max-height: 100px;\n    }\n    \n    li {\n      margin-bottom: 10px;\n      &:last-child {\n        margin-bottom: 30px;\n      }\n    }\n  }\n"]))),y=Object(m.default)(u.c)(s||(s=Object(l.a)(["\n  font-weight: 400;\n  font-size: 18px;\n  color: #333;\n  &.active {\n    font-weight: 700;\n    color: ",";\n  }\n  @media screen and (max-width: 750px) {\n    font-size: 1rem;\n  }\n"])),(function(n){return n.theme.primary_blue})),T=m.default.section(d||(d=Object(l.a)(["\n  width: 100%;\n  max-width: 67%;\n  margin: 50px auto;\n  padding: 0 40px;\n\n  @media screen and (max-width: 750px) {\n    max-width: 100%;\n    padding: 0 20px;\n    margin: 20px auto 50px auto;\n  }\n"])));e.a=function(n){var e=n.children,t=n.title,i=n.sidebarTitle,a=n.sidebarType,o=Object(x.useState)(!1),r=Object(p.a)(o,2),c=r[0],s=r[1],d=Object(x.useState)("account"==a?[{title:"Uw account",to:"/account"},{title:"Uw aanpassingen",to:"/account/aanpassingen"},{title:"Uw boeken",to:"/account/boeken"}]:[{title:"Gebruikers",to:"/admin"},{title:"Foutenrapportages",to:"/admin/fouten"},{title:"Boeken",to:"/admin/boeken"}]),l=Object(p.a)(d,1)[0];return Object(f.jsx)(b.a.Fragment,{children:Object(f.jsx)(j.a,{title:t,full:!0,children:Object(f.jsxs)(g,{children:[Object(f.jsx)(O,{children:Object(f.jsxs)(w,{children:[Object(f.jsxs)(v,{children:[i,Object(f.jsx)("span",{id:"nav-open-button",className:c?"nav-open":"",onClick:function(){return s(0==c)},tabIndex:"1",children:Object(f.jsx)(h.ChevronDownOutline,{})})]}),Object(f.jsx)(k,{className:c?"nav-open":"",children:l.map((function(n,e){return Object(f.jsx)("li",{children:Object(f.jsx)(y,{exact:!0,to:n.to,children:n.title})},e)}))})]})}),Object(f.jsx)(T,{children:e})]})})})}}}]);
//# sourceMappingURL=23.4420802f.chunk.js.map