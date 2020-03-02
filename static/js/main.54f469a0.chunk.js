(this["webpackJsonplusin-portfolio"]=this["webpackJsonplusin-portfolio"]||[]).push([[0],{19:function(e,n,t){e.exports=t(31)},30:function(e,n,t){},31:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(12),i=t.n(c),o=t(6),l=t(17),u=t(4),s=t(2),m=t(1),f=Object(a.createContext)(null);function b(){return Object(a.useContext)(f)}var d=function(e){var n=Object(a.useState)(null),t=Object(u.a)(n,2),c=t[0],i=t[1];return Object(a.useEffect)((function(){var e=new window.ScrollMagic.Controller({});e.scrollTo((function(e){window.scroll({top:e,behavior:"smooth"})})),i(e)}),[]),c&&r.a.createElement(f.Provider,{value:c},e.children)};function j(){var e=Object(s.a)(["\n   opacity: 0;\n\n  .image-container {\n    opacity: 0;\n  }\n\n  &.active {\n    opacity: 1;\n    z-index: 1;\n\n    .image-container {\n      transition: opacity 0.5s ease-out;\n      opacity: 1;\n      \n      img {\n        cursor: pointer;\n      }\n    }\n  }\n"]);return j=function(){return e},e}function p(){var e=Object(s.a)(["\n  padding: 5%;\n  display: flex;\n  height: 50vh;\n  align-items: center;\n  justify-content: center;\n  background: #111;\n"]);return p=function(){return e},e}function h(){var e=Object(s.a)(["\n  width: 50%;\n  display: flex;\n  justify-content: center;\n"]);return h=function(){return e},e}function g(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  \n  text-transform: lowercase;\n  color: white;\n  min-width: 620px;\n\n  @media(max-width: 1024px) {\n    min-width: 500px;\n  }\n"]);return g=function(){return e},e}function v(){var e=Object(s.a)(["\n  font-size: 30px;\n  font-weight: 700;\n"]);return v=function(){return e},e}function O(){var e=Object(s.a)(["\n  font-size: 90px;\n  font-weight: 700;\n  \n  @media(max-width: 1024px) {\n    font-size: 70px;\n    font-weight: 700;\n  }\n"]);return O=function(){return e},e}function E(){var e=Object(s.a)(["\n  padding: 25vh 0;\n  background: #111;\n  position: relative;\n"]);return E=function(){return e},e}var x=Object(m.a)(E()),w=Object(m.a)(O()),N=Object(m.a)(v()),y=Object(m.a)(g()),k=Object(m.a)(h()),S=Object(m.a)(p()),I=Object(m.a)(j());var C=function(e){var n=r.a.useRef([]);return function(e){var n=b();Object(a.useEffect)((function(){var t=e.current;t.forEach((function(e,a){var r=0===a,c=a===t.length-1;new window.ScrollMagic.Scene({triggerElement:e,triggerHook:.25,duration:c?"100%":"50%"}).setPin(e,{pushFollowers:!1}).on("enter",(function(){e.classList.add("active")})).on("leave",(function(n){r&&"REVERSE"===n.scrollDirection||e.classList.remove("active")})).addTo(n)}))}),[e])}(n),r.a.createElement("div",{className:x},e.urls.map((function(t,a){return r.a.createElement("div",{key:a,ref:function(e){return n.current.push(e)},className:Object(m.b)(S,I,"slide",{active:0===a})},r.a.createElement("div",{className:y},r.a.createElement("span",{className:w},e.header),r.a.createElement("span",{className:N},a+1," of ",e.urls.length)),r.a.createElement("div",{className:Object(m.b)(k,"image-container")},t))})))},z=t(13);function R(){var e=Object(s.a)(["\n  display: inline-flex;\n  overflow: hidden;\n  animation: "," 1s ease-out;\n"]);return R=function(){return e},e}function P(){var e=Object(s.a)(["\n  from {\n    width: 0;\n  }\n  to {\n    width: ",";\n  }\n"]);return P=function(){return e},e}var T=function(e){return Object(m.a)(R(),function(e){return Object(m.c)(P(),e)}(e))};var A=function(e){return r.a.createElement("span",{className:T(e.width)},e.children)};function H(){var e=Object(s.a)(["\n  color: #fd981b;\n  transform: rotate(-90deg);\n  transform-origin: top left;\n  position: absolute;\n  \n  line-height: 30px;\n"]);return H=function(){return e},e}function L(){var e=Object(s.a)(["\n  background: transparent;\n  box-shadow: 0 0 0 2px #fd981b;\n"]);return L=function(){return e},e}function M(){var e=Object(s.a)(["\n  width: 10px;\n  height: 10px;\n  border-radius: 100%;\n  margin: 10px;\n  background: #fd981b;\n  cursor: pointer;\n"]);return M=function(){return e},e}function D(){var e=Object(s.a)(["\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n"]);return D=function(){return e},e}function F(){var e=Object(s.a)(["\n  height: 100%;\n  margin-right: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"]);return F=function(){return e},e}var U=Object(m.a)(F()),_=Object(m.a)(D()),G=Object(m.a)(M()),V=Object(m.a)(L()),W=Object(m.a)(H());var Y=function(e){return r.a.createElement("div",{className:U},r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("div",{className:W},r.a.createElement(A,{key:e.value,width:"100px"},e.name)),r.a.createElement("ol",{className:_},Object(o.a)(Array(e.count)).map((function(n,t){return r.a.createElement("li",{key:t,className:Object(m.b)(G,Object(z.a)({},V,t===e.value)),onClick:function(){return e.onChange(t)}})})))))};function B(){var e=Object(s.a)(["\n  height: 100vh;\n  width: 100vw;\n"]);return B=function(){return e},e}var J=Object(m.a)(B());var K=function(e){var n=Object(a.useRef)(null),t=b();return Object(a.useEffect)((function(){var e=n.current;new window.ScrollMagic.Scene({triggerElement:e,triggerHook:0,duration:"100%"}).setPin(e,{pushFollowers:!1}).addTo(t)}),[]),r.a.createElement("div",{ref:n,className:Object(m.b)(J,e.className)},e.children)};var q=function(e){var n=Object(a.useState)(0),t=Object(u.a)(n,2),c=t[0],i=t[1];return Object(a.useEffect)((function(){var n=setInterval((function(){i((function(n){return(n+1)%e.texts.length}))}),2e3);return function(){return clearInterval(n)}}),[e.texts]),r.a.createElement(A,{key:c,width:e.width},e.texts[c])},Q=Object(a.createContext)({});function X(){return Object(a.useContext)(Q)}var Z=function(e){var n=Object(a.useState)([]),t=Object(u.a)(n,2),c=t[0],i=t[1],s=Object(a.useState)(0),m=Object(u.a)(s,2),f=m[0],d=m[1],j=b(),p=Object(a.useCallback)((function(e){var n=e.index,t=Object(l.a)(e,["index"]);c[n]||i((function(e){return[].concat(Object(o.a)(e.slice(0,n)),[t],Object(o.a)(e.slice(n+1,e.length-1)))}))}),[c]),h=Object(a.useCallback)((function(e){j.scrollTo(c[e].scene)}),[j,c]),g=Object(a.useMemo)((function(){return{register:p,scrollTo:h,setActivePage:d}}),[p,h,d]);return r.a.createElement(Q.Provider,{value:g},e.children,c[f]&&r.a.createElement("div",{style:{height:"100vh",width:"50px",position:"fixed",top:0,right:0,zIndex:2}},r.a.createElement(Y,{count:c.length,value:f,name:c[f].name,onChange:h})))};var $=function(e){var n=Object(a.useRef)(null),t=X(),c=b(),i=Object(a.useState)(null),o=Object(u.a)(i,2),l=o[0],s=o[1];function m(n){"DURING"===n.state?t.setActivePage(e.index):"BEFORE"===n.state&&t.setActivePage(e.index-1)}return Object(a.useEffect)((function(){var e=n.current,t=new window.ScrollMagic.Scene({triggerElement:e,triggerHook:0}).addTo(c);return s(t),t.on("progress",m),function(){return t.off("progress",m)}}),[c]),Object(a.useEffect)((function(){l&&t.register({name:e.name,index:e.index,scene:l})}),[l,t]),r.a.createElement("div",{ref:n},e.children)},ee=t(18);function ne(){var e=Object(s.a)(["\n  font-size: 12px;\n"]);return ne=function(){return e},e}function te(){var e=Object(s.a)(["\n  position: absolute;\n  bottom: 10px;\n  width: 100vw;\n  text-align: center;\n  \n  animation: "," 2s ease-out infinite;\n"]);return te=function(){return e},e}function ae(){var e=Object(s.a)(["\n  0%, 20%, 40% {\n    transform: translateY(0);\n  }\n  10%, 30% {\n    transform: translateY(-10px);\n  }\n"]);return ae=function(){return e},e}function re(){var e=Object(s.a)(["\n  ",";\n\n  background-color: white;\n  color: #fd981b;\n  border: 2px solid #fd981b;\n"]);return re=function(){return e},e}function ce(){var e=Object(s.a)(["\n  ",";\n  \n  background-color: #fd981b;\n  color: white;\n  border: 2px solid #fd981b;\n"]);return ce=function(){return e},e}function ie(){var e=Object(s.a)(["\n  display: inline-block;\n  width: 200px;\n  line-height: 38px;\n  padding: 0 20px;\n  border-radius: 26px;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  font-weight: 500;\n  text-transform: uppercase;\n"]);return ie=function(){return e},e}function oe(){var e=Object(s.a)(["\n  margin-left: 15px;\n"]);return oe=function(){return e},e}function le(){var e=Object(s.a)(["\n"]);return le=function(){return e},e}function ue(){var e=Object(s.a)(["\n  color: #fd981b;\n"]);return ue=function(){return e},e}function se(){var e=Object(s.a)(["\n  line-height: 25px;\n"]);return se=function(){return e},e}function me(){var e=Object(s.a)(["\n  color: #fd981b;\n  font-weight: 700;\n"]);return me=function(){return e},e}function fe(){var e=Object(s.a)(["\n  font-size: 42px;\n  font-weight: 700;\n  text-transform: uppercase;\n"]);return fe=function(){return e},e}function be(){var e=Object(s.a)(["\n  font-weight: 400;\n  font-size: 19px;\n"]);return be=function(){return e},e}function de(){var e=Object(s.a)(["\n  margin-left: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  max-width: 600px;\n"]);return de=function(){return e},e}function je(){var e=Object(s.a)(["\n  width: 300px;\n  height: 300px;\n  border-radius: 100%;\n  border: 10px solid #fd981b;\n"]);return je=function(){return e},e}function pe(){var e=Object(s.a)(["\n  width: 320px;\n  text-align: end;\n"]);return pe=function(){return e},e}function he(){var e=Object(s.a)(["\n  height: 320px;\n  width: 95%;\n  display: flex;\n  justify-content: center;\n"]);return he=function(){return e},e}function ge(){var e=Object(s.a)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return ge=function(){return e},e}var ve=Object(m.a)(ge()),Oe=Object(m.a)(he()),Ee=Object(m.a)(pe()),xe=Object(m.a)(je()),we=Object(m.a)(de()),Ne=Object(m.a)(be()),ye=Object(m.a)(fe()),ke=(Object(m.a)(me()),Object(m.a)(se())),Se=Object(m.a)(ue()),Ie=Object(m.a)(le()),Ce=Object(m.a)(oe()),ze=Object(m.a)(ie()),Re=Object(m.a)(ce(),ze),Pe=Object(m.a)(re(),ze),Te=Object(m.c)(ae()),Ae=Object(m.a)(te(),Te),He=Object(m.a)(ne());var Le=function(){var e=X(),n=Object(a.useCallback)((function(){e.scrollTo(1)}),[e]),t=Object(a.useCallback)((function(){e.scrollTo(2)}),[e]);return r.a.createElement(K,null,r.a.createElement("div",{className:ve},r.a.createElement("div",{className:Oe},r.a.createElement("div",{className:Ee},r.a.createElement("img",{className:xe,src:"./profile-image.jpg",alt:"profile"})),r.a.createElement("div",{className:we},r.a.createElement("h3",{className:Ne},"HI THERE!"),r.a.createElement("h1",{className:ye},"I'm\xa0",r.a.createElement(q,{width:"460px",texts:[r.a.createElement("span",{className:Se},"Lusine\xa0Voskanyan"),r.a.createElement("span",{className:Se},"a\xa0web\xa0designer"),r.a.createElement("span",{className:Se},"a\xa0teacher")]})),r.a.createElement("p",{className:ke},"I addicted to taking photos, creating new things which can change my day for the better. So having various ideas and intentions, I have decided to keep in touch with graphic/web designing."),r.a.createElement("div",{className:Ie},r.a.createElement("a",{onClick:n,href:"#",className:Re},"websites"),r.a.createElement("a",{onClick:t,href:"#",className:Object(m.b)(Pe,Ce)},"graphics"))))),r.a.createElement("div",{className:Ae},r.a.createElement(ee.a,{src:"./mouse-scroll.svg",color:"orange",beforeInjection:function(e){e.setAttribute("style","height: 60px; width: 60px")}}),r.a.createElement("span",{className:He},"Scroll to explore")))},Me=t(7),De=t(11),Fe=t(5);function Ue(){var e=Object(s.a)(["\n  z-index: 2\n"]);return Ue=function(){return e},e}function _e(){var e=Object(s.a)(["\n  margin-left: 15px;\n"]);return _e=function(){return e},e}function Ge(){var e=Object(s.a)(["\n  margin-bottom: 16px;\n"]);return Ge=function(){return e},e}function Ve(){var e=Object(s.a)(["\n  padding: 0;\n  list-style: none;\n"]);return Ve=function(){return e},e}function We(){var e=Object(s.a)(["\n  color: black;\n  text-decoration: none;\n"]);return We=function(){return e},e}function Ye(){var e=Object(s.a)(["\n  line-height: 24px;\n  margin: 0;\n"]);return Ye=function(){return e},e}function Be(){var e=Object(s.a)(["\n  font-weight: 400;\n  font-size: 19px;\n"]);return Be=function(){return e},e}function Je(){var e=Object(s.a)(["\n  color: #fd981b;\n"]);return Je=function(){return e},e}function Ke(){var e=Object(s.a)(["\n  font-size: 42px;\n  font-weight: 700;\n  text-transform: uppercase;\n"]);return Ke=function(){return e},e}function qe(){var e=Object(s.a)(["\n  text-align: center;\n"]);return qe=function(){return e},e}function Qe(){var e=Object(s.a)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return Qe=function(){return e},e}function Xe(){var e=Object(s.a)(["\n  background: white;\n"]);return Xe=function(){return e},e}var Ze=Object(m.a)(Xe()),$e=Object(m.a)(Qe()),en=Object(m.a)(qe()),nn=Object(m.a)(Ke()),tn=Object(m.a)(Je()),an=Object(m.a)(Be()),rn=Object(m.a)(Ye()),cn=Object(m.a)(We()),on=Object(m.a)(Ve()),ln=Object(m.a)(Ge()),un=Object(m.a)(_e()),sn=Object(m.a)(Ue());var mn=function(){return r.a.createElement(K,{className:sn},r.a.createElement("div",{className:Object(m.b)($e,Ze)},r.a.createElement("div",{style:{height:"70%"}},r.a.createElement("h1",{className:Object(m.b)(nn,en)},"get ",r.a.createElement("span",{className:tn},"in touch")),r.a.createElement("h3",{className:Object(m.b)(an,en)},"I\u2019M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK OR PARTNERSHIPS"),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{style:{width:"50%"}},r.a.createElement("ul",{className:on},r.a.createElement("li",{className:ln},r.a.createElement("p",{className:rn},"Name"),r.a.createElement("p",{className:rn},r.a.createElement(Fe.a,{icon:De.b,color:"#fd981b"}),r.a.createElement("span",{className:un},"Lusine Voskanyan"))),r.a.createElement("li",{className:ln},r.a.createElement("p",{className:rn},"Phone"),r.a.createElement("p",{className:rn},r.a.createElement(Fe.a,{icon:Me.d,color:"#fd981b"}),r.a.createElement("span",{className:un},"+374 96 38 28 38"))),r.a.createElement("li",{className:ln},r.a.createElement("p",{className:rn},"Email"),r.a.createElement("p",{className:rn},r.a.createElement(Fe.a,{icon:De.a,color:"#fd981b"}),r.a.createElement("span",{className:un},"lusinvosk@gmail.com"))))),r.a.createElement("div",{style:{width:"50%"}},r.a.createElement("ul",{className:on},r.a.createElement("li",{className:ln},r.a.createElement("p",{className:rn},"Instagram"),r.a.createElement("p",{className:rn},r.a.createElement(Fe.a,{icon:Me.b,color:"#fd981b"}),r.a.createElement("a",{className:Object(m.b)(un,cn),href:"https://instagram.com/lusin.v",target:"_blank"},"follow me on instagram"))),r.a.createElement("li",{className:ln},r.a.createElement("p",{className:rn},"Facebook"),r.a.createElement("p",{className:rn},r.a.createElement(Fe.a,{icon:Me.a,color:"#fd981b"}),r.a.createElement("a",{className:Object(m.b)(un,cn),href:"https://facebook.com/lusine.voskanyan.125",target:"_blank"},"write me on facebook"))),r.a.createElement("li",{className:ln},r.a.createElement("p",{className:rn},"LinkedIn"),r.a.createElement("p",{className:rn},r.a.createElement(Fe.a,{icon:Me.c,color:"#fd981b"}),r.a.createElement("a",{className:Object(m.b)(un,cn),href:"https://linkedin.com/in/lusine-voskanyan-b24274173",target:"_blank"},"connect with me on linkedIn")))))))))};function fn(){var e=Object(s.a)(["\n  max-height: 80vh;\n  max-width: 100%;\n  width: auto;\n  height: auto;\n"]);return fn=function(){return e},e}var bn=Object(m.a)(fn());var dn=function(){return r.a.createElement(C,{urls:["illustrations/illustration1.jpg","illustrations/illustration2.jpg","illustrations/illustration4.jpg","illustrations/illustration5.jpg","illustrations/illustration6.jpg","illustrations/illustration7.jpg","illustrations/illustration8.jpg","illustrations/illustration3.jpg"].map((function(e){return r.a.createElement("img",{onClick:function(){return console.log(e)},className:bn,alt:"illustration",src:e})})),header:"my illustrations"})};function jn(){var e=Object(s.a)(["\n  max-height: 80vh;\n  max-width: 100%;\n  width: auto;\n  height: auto;\n"]);return jn=function(){return e},e}var pn=Object(m.a)(jn());var hn=function(){return r.a.createElement(C,{urls:[{img:"websites/website1.jpeg",href:"travel/index.html"},{img:"websites/website2.jpeg",href:"practice-page/index.html"},{img:"websites/website3.jpeg",href:"Amaze/home/index.html"},{img:"websites/website4.jpeg",href:"first-flex/index.html"},{img:"websites/website5.jpeg",href:"omnifood/index.html"},{img:"websites/website6.jpeg",href:"Urbanic-flex/index.html"},{img:"websites/website7.jpeg",href:"page1/index3.html"},{img:"websites/website8.jpeg",href:"moto/index.html"}].map((function(e){var n=e.img,t=e.href;return r.a.createElement("a",{target:"_blank",href:t,rel:"noopener noreferrer"},r.a.createElement("img",{className:pn,alt:"website",src:n}))})),header:"my websites",name:"Websites"})};var gn=function(){var e=[{name:r.a.createElement("span",null,"about\xa0me"),content:r.a.createElement(Le,null)},{name:r.a.createElement("span",null,"websites"),content:r.a.createElement(hn,null)},{name:r.a.createElement("span",null,"graphics"),content:r.a.createElement(dn,null)},{name:r.a.createElement("span",null,"contact\xa0me"),content:r.a.createElement(mn,null)}];return r.a.createElement(d,null,r.a.createElement(Z,null,e.map((function(e,n){return r.a.createElement($,{name:e.name,index:n,key:n},e.content)}))))};t(30);i.a.render(r.a.createElement(gn,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.54f469a0.chunk.js.map