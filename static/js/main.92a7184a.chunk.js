(this.webpackJsonpschedule=this.webpackJsonpschedule||[]).push([[0],{161:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(50),u=a.n(r),s=a(12),l=a(5),o=a(4),i=a(26),m=a.n(i);m.a.initializeApp({apiKey:"AIzaSyBj774na70sz8QHPSD5hQBraF9uGMW9Sww",authDomain:"schedule-f4eee.firebaseapp.com",databaseURL:"https://schedule-f4eee.firebaseio.com",projectId:"schedule-f4eee",storageBucket:"schedule-f4eee.appspot.com",messagingSenderId:"1058621003364",appId:"1:1058621003364:web:2627e01235b34e1bdc7171",measurementId:"G-DHS9BMF46H"});var p=m.a.database(),f=m.a,d=Object(n.createContext)(),h=function(e){var t=e.children,a=Object(n.useState)(null),r=Object(o.a)(a,2),u=r[0],s=r[1],l=Object(n.useState)(null),i=Object(o.a)(l,2),m=i[0],p=i[1];return Object(n.useEffect)((function(){f.auth().onAuthStateChanged((function(e){s(e),p(!1)}))}),[]),m?c.a.createElement(c.a.Fragment,null,"Loading..."):c.a.createElement(d.Provider,{value:{currentUser:u}},t)},v=(a(74),a(19)),b=function(e){var t=e.component,a=Object(v.a)(e,["component"]),r=Object(n.useContext)(d).currentUser;return c.a.createElement(l.b,Object.assign({},a,{render:function(e){return r?c.a.createElement(t,e):c.a.createElement(l.a,{to:"/log-in"})}}))},E=(a(28),a(79),function(e){var t=e.children,a=e.size,n=Object(v.a)(e,["children","size"]);return c.a.createElement(c.a.Fragment,null,1===a&&c.a.createElement("h1",n," ",t," "),2===a&&c.a.createElement("h2",n," ",t," "),3===a&&c.a.createElement("h3",n," ",t," "),4===a&&c.a.createElement("h4",n," ",t," "),5===a&&c.a.createElement("h5",n," ",t," "))}),g=a(52),O=a.n(g),j=a(53),k=a.n(j),N=a(54),I=a.n(N),w=function(){return c.a.createElement("menu",{className:"headerMenu"},c.a.createElement(s.b,{to:"/",className:"headerLink"},c.a.createElement(E,{size:1,className:"headerTitle"},"Schedule")),c.a.createElement(s.b,{to:"/about",className:"headerIcon"},c.a.createElement("img",{src:O.a,alt:"about",className:"aboutIcon"})),c.a.createElement(s.b,{to:"/settings",className:"headerIcon"},c.a.createElement("img",{src:k.a,alt:"settings"})),c.a.createElement("img",{src:I.a,alt:"sing out",className:"headerIcon",onClick:function(){return f.auth().signOut()}}))},x=(a(80),function(e){var t=Object.assign({},e);return c.a.createElement("input",t)}),y=function(e){var t=e.type,a=e.className,n=e.children,r=Object(v.a)(e,["type","className","children"]);return c.a.createElement("button",Object.assign({type:t,className:a},r),n)},S=(a(81),a(55)),A=a.n(S),C=a(11),L=a.n(C),T=a(15),U=function(){var e=Object(n.useContext)(d).currentUser,t=function(){var t=Object(T.a)(L.a.mark((function t(a,n,c){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!(n.length>0&13===a.keyCode||"submit"===a.currentTarget.type)){t.next=14;break}return t.prev=2,t.next=5,p.ref("".concat(e.uid,"/tasks")).push({task:n,ifFinished:!1,listOrder:!1});case 5:c(""),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),console.log(t.t0);case 11:t.next=15;break;case 14:return t.abrupt("return",!1);case 15:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e,a,n){return t.apply(this,arguments)}}(),a=Object(n.useState)([]),c=Object(o.a)(a,2),r=c[0],u=c[1],s=function(){var t=Object(T.a)(L.a.mark((function t(){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.ref("".concat(e.uid,"/tasks")).on("value",(function(e){var t=[];e.forEach((function(e){t.push({id:e.key,task:e.val().task,ifFinished:e.val().ifFinished})})),u((function(){return t}))}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){return s(),function(){return p.ref("".concat(e.uid,"/tasks")).off()}}),[]);return{tasks:r,SaveTask:t,UpdateItem:function(){var t=Object(T.a)(L.a.mark((function t(a,n){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.ref("".concat(e.uid,"/tasks")).child("".concat(a)).update({task:n});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e,a){return t.apply(this,arguments)}}(),RemoveItem:function(t){try{p.ref("".concat(e.uid,"/tasks")).child("".concat(t)).remove()}catch(a){console.log(a)}}}},B=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],u=U().SaveTask;return c.a.createElement("section",{className:"NewTodoItem"},c.a.createElement(x,{className:"InputNewTodoItem",value:a,name:"task",onChange:function(e){return function(e){e.target.value.length>20?r(e.target.value.slice("0","20")):r(e.target.value)}(e)},onKeyUp:function(e){return u(e,a,r)},autoComplete:"false",type:"text"}),c.a.createElement(y,{type:"submit",className:"AddNewTask",onClick:function(e){return u(e)}},c.a.createElement("img",{src:A.a,alt:"NewTask",className:"AddNewTaskIcon"})))},R=(a(83),a(56)),D=a.n(R),F=a(57),P=a.n(F),z=a(58),M=a.n(z),W=function(e){var t=e.item,a=e.RemoveItem,r=e.UpdateItem,u=t.task,s=Object(n.useState)(u),l=Object(o.a)(s,2),i=l[0],m=l[1],p=Object(n.useState)(!1),f=Object(o.a)(p,2),d=f[0],h=f[1];Object(n.useEffect)((function(){}),[d]);return c.a.createElement("section",{draggable:"true",className:"TodoItemLabel"},c.a.createElement("img",{src:D.a,className:"ToDoCheckedIcon",alt:""}),c.a.createElement("section",{onMouseEnter:function(){return h(!0)},onMouseLeave:function(){return h(!1)},className:"dNdIconBody"},d&&c.a.createElement("img",{src:M.a,className:"dNdIcon",alt:""})),c.a.createElement(x,{className:"TodoItem",value:i,type:"text",onChange:function(e){return function(e){e.target.value.length>20?m(e.target.value.slice("0","20")):m(e.target.value)}(e)},onBlur:function(){return r(t.id,i)}}),c.a.createElement("img",{onClick:function(){return a(t.id)},src:P.a,className:"RemoveIcon",alt:""}))},q=function(){var e=U(),t=e.tasks,a=e.RemoveItem,n=e.UpdateItem;return c.a.createElement("section",{className:"TaskViewer"},c.a.createElement("section",{className:"TodoList"},t.map((function(e,t){return c.a.createElement(W,{item:e,key:e.id,RemoveItem:a,UpdateItem:n})}))),c.a.createElement(B,null))},H=function(){return c.a.createElement("section",{className:"RouteLayout"},c.a.createElement(w,null),c.a.createElement(q,null))},G=a(25),J=a.n(G),K=(a(84),function(){return c.a.createElement("nav",{className:"AuthLinks"},c.a.createElement(s.b,{className:"AuthLink",activeClassName:"ActiveAuthLink",to:"log-in"},"Log in"),c.a.createElement(s.b,{className:"AuthLink",activeClassName:"ActiveAuthLink",to:"sign-up"},"Sign up"))}),Q=(a(85),function(e){var t=e.children;return c.a.createElement("section",{className:"AuthErors"},t)}),V=(a(37),function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],u=Object(n.useState)(""),s=Object(o.a)(u,2),i=s[0],m=s[1],p=Object(n.useState)(""),h=Object(o.a)(p,2),v=h[0],b=h[1],E=Object(n.useState)(""),g=Object(o.a)(E,2),O=g[0],j=g[1],k=Object(n.useState)(""),N=Object(o.a)(k,2),I=N[0],w=N[1],S=function(e){return void 0!==e&&0!==e.length||(j("Password is required"),!1)},A=function(e){return!!J.a.isEmail(e)||(b("Enter valid email adress"),!1)},C=function(e){if(!(e.length<8||e.length>20))return!0;j("Password should contain 8-20 symbols")},U=Object(n.useCallback)(function(){var e=Object(T.a)(L.a.mark((function e(t){var a,n,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=t.target.elements,n=a.emailInput,c=a.passInput,A(n.value),C(c.value),!1!==(void 0!==(r=n.value)&&0!==r.length||(b("Email is required"),!1))&&!1!==S(c.value)&&!1!==A(n.value)&&!1!==C(c.value)){e.next=6;break}return e.abrupt("return",!1);case 6:return e.prev=6,e.next=9,f.auth().createUserWithEmailAndPassword(n.value,c.value);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(6),w(e.t0.message);case 14:case"end":return e.stop()}var r}),e,null,[[6,11]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(n.useEffect)((function(){A(a),C(i),0!==a.length&&0!==i.length||(b(""),j(""))}),[a,i]),Object(n.useContext)(d).currentUser?c.a.createElement(l.a,{to:"/"}):c.a.createElement("form",{onSubmit:U,className:"AuthForm"},c.a.createElement(K,null),c.a.createElement(x,{type:"text",name:"emailInput",className:"AuthInput",placeholder:"email@temp.com",value:a,onChange:function(e){r(e.target.value)}}),c.a.createElement(Q,null,v),c.a.createElement(x,{type:"password",name:"passInput",className:"AuthInput",placeholder:"password",value:i,onChange:function(e){return m(e.target.value)}}),c.a.createElement(Q,null,O),c.a.createElement(Q,null,I),c.a.createElement(y,{type:"submit",className:"AuthBtn"},"Log In"))}),$=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],u=Object(n.useState)(""),s=Object(o.a)(u,2),i=s[0],m=s[1],p=Object(n.useState)(""),h=Object(o.a)(p,2),v=h[0],b=h[1],E=Object(n.useState)(""),g=Object(o.a)(E,2),O=g[0],j=g[1],k=Object(n.useState)(""),N=Object(o.a)(k,2),I=N[0],w=N[1],S=function(e){return void 0!==e&&0!==e.length||(j("Password is required"),!1)},A=function(e){return!!J.a.isEmail(e)||(b("Enter valid email adress"),!1)},C=function(e){if(!(e.length<8||e.length>20))return!0;j("Password should contain 8-20 symbols")},U=Object(n.useCallback)(function(){var e=Object(T.a)(L.a.mark((function e(t){var a,n,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=t.target.elements,n=a.emailInput,c=a.passInput,!1!==(void 0!==(r=n.value)&&0!==r.length||(b("Email is required"),!1))&&!1!==S(c.value)&&!1!==A(n.value)&&!1!==C(c.value)){e.next=4;break}return e.abrupt("return",!1);case 4:return e.prev=4,e.next=7,f.auth().signInWithEmailAndPassword(n.value,c.value);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(4),w(e.t0.message);case 12:case 13:case"end":return e.stop()}var r}),e,null,[[4,9]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(n.useEffect)((function(){A(a),C(i),0!==a.length&&0!==i.length||(b(""),j(""))}),[a,i]),Object(n.useContext)(d).currentUser?c.a.createElement(l.a,{to:"/"}):c.a.createElement("form",{onSubmit:U,className:"AuthForm"},c.a.createElement(K,null),c.a.createElement(x,{type:"text",name:"emailInput",className:"AuthInput",placeholder:"email@temp.com",value:a,onChange:function(e){r(e.target.value)}}),c.a.createElement(Q,null,v),c.a.createElement(x,{type:"password",name:"passInput",className:"AuthInput",placeholder:"password",value:i,onChange:function(e){return m(e.target.value)}}),c.a.createElement(Q,null,O),c.a.createElement(Q,null,I),c.a.createElement(y,{type:"submit",className:"AuthBtn"},"Log In"))},_=function(){return c.a.createElement("section",{className:"RouteLayout"},c.a.createElement(w,null))},X=function(){return c.a.createElement("section",{className:"RouteLayout"},c.a.createElement(w,null))},Y=function(){return c.a.createElement(h,null,c.a.createElement(s.a,null,c.a.createElement("section",{className:"App"},c.a.createElement(l.d,null,c.a.createElement(b,{exact:!0,path:"/",component:H}),c.a.createElement(b,{path:"/about",component:_}),c.a.createElement(b,{path:"/settings",component:X}),c.a.createElement(l.b,{path:"/sign-up",component:V}),c.a.createElement(l.b,{path:"/log-in",component:$})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},28:function(e,t,a){},37:function(e,t,a){},52:function(e,t,a){e.exports=a.p+"static/media/AboutUs.7b6f6b46.svg"},53:function(e,t,a){e.exports=a.p+"static/media/Settings.27f7ef71.svg"},54:function(e,t,a){e.exports=a.p+"static/media/Sign_Out.b2666e26.svg"},55:function(e,t,a){e.exports=a.p+"static/media/NewTask.dec8cad7.svg"},56:function(e,t,a){e.exports=a.p+"static/media/ToDo.8e35e519.svg"},57:function(e,t,a){e.exports=a.p+"static/media/RemoveIcon.e16637bf.svg"},58:function(e,t,a){e.exports=a.p+"static/media/DragIcon.47d204fb.svg"},59:function(e,t,a){e.exports=a(161)},74:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){}},[[59,1,2]]]);
//# sourceMappingURL=main.92a7184a.chunk.js.map