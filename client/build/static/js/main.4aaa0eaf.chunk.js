(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{106:function(e,n,t){"use strict";t.r(n);var a=t(2),r=t.n(a),s=t(79),i=t.n(s),o=(t(94),t(95),t(107)),c=t(89),l=t(26),d=t(10),u=t(4);function j(){return Object(u.jsx)("div",{className:"apply-grad",children:Object(u.jsxs)("section",{className:"cta",children:[Object(u.jsx)("div",{className:"cta-title",children:Object(u.jsx)("h1",{className:"h-lg",children:"Dev Learn"})}),Object(u.jsxs)("div",{className:"cta-text",children:[Object(u.jsxs)("p",{children:["One of the biggest hurdles when learning web development is memorizing the vast amount of definitions and terms that is being thrown at you. The Dev Learn team wanted to create a simple, easy-to-use application that would tackle two of the major components of learning code:",Object(u.jsxs)("span",{children:[Object(u.jsx)("br",{})," 1. Consistency.",Object(u.jsx)("br",{})," 2. Memorization."]})]}),Object(u.jsxs)("p",{children:["We came up with our favorite questions from our experience and created 3 sets of flashcards that you will automatically have access to when you create an account. You will also receive daily reminders so you never miss out on a day of studying.",Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:"So what are you waiting for? Get learning!"})]})]}),Object(u.jsxs)("div",{className:"cta-buttons",children:[Object(u.jsx)("div",{className:"cta-btn",children:Object(u.jsx)(l.b,{to:"/signup",children:"Create an Account "})}),Object(u.jsx)("div",{className:"cta-btn",children:Object(u.jsx)(l.b,{to:"/login",children:"Login "})})]})]})})}function b(){return Object(u.jsx)("footer",{className:"footer-container",children:Object(u.jsx)("div",{className:"footer-text",children:"A JMJM Build"})})}var h,m,p,O,g,v,f=t(38),x=t.n(f),w=t(50),k=t(37),S=t(33),y=t(40),N=t(81),$=t(82),C=t(60),_=new(function(){function e(){Object(N.a)(this,e)}return Object($.a)(e,[{key:"getProfile",value:function(){return Object(C.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return Object(C.a)(e).exp<Date.now()/1e3}catch(n){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),q=t(35),W=t(31),L=t.n(W),A=L()(h||(h=Object(q.a)(["\n    mutation login($email: String!, $password: String!) {\n        login(email: $email, password: $password) {\n            token\n            user {\n                _id\n                username\n            }\n        }\n    }\n"]))),T=L()(m||(m=Object(q.a)(["\n    mutation addUser($username: String!, $email: String!, $password: String!){\n        addUser(username: $username, email: $email, password: $password){\n            token\n            user {\n                _id\n                username\n            }\n        }\n    }\n"])));L()(p||(p=Object(q.a)(["\n    mutation addSet($setName: String!){\n        addSet(setName: $setName) {\n            set {\n                _id\n                setName\n                    card {\n                    _id\n                    question\n                    answer\n                }\n            \n            }\n        }\n    }\n"]))),L()(O||(O=Object(q.a)(["\n    mutation addCard($question: String!, $answer: String!){\n        addCard(question: $question, answer: $answer){\n            set {\n                _id\n                setName\n                card {\n                    _id\n                    question\n                    answer\n                }\n            }\n        }\n    }\n    "]))),L()(g||(g=Object(q.a)(["\n    mutation removeSet($setName: String!){\n        removeSet(setName: $setName){\n            set {\n                _id\n                setName\n                card {\n                    _id\n                    question \n                    answer\n                }\n            }\n        }\n    }\n"]))),L()(v||(v=Object(q.a)(["\n    mutation removeCard($question: String!, $answer: String!){\n        removeCard(question: $question, answer: $answer){\n            set {\n                _id\n                setName \n                card {\n                    _id\n                    question\n                    answer\n                }\n            }\n        }\n    }\n"])));function I(){return Object(u.jsx)("header",{children:Object(u.jsxs)("div",{className:"flex-wrap",children:[Object(u.jsx)("h1",{className:"h-lg",children:"Dev Learn"}),Object(u.jsx)("nav",{children:_.loggedIn()?Object(u.jsx)("ul",{children:Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/",onClick:function(){return _.logout()},children:"Logout"})})}):Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{to:"/signup",children:"Signup"})}),Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{to:"/login",children:"Login"})})]})})]})})}var U=function(){var e=Object(a.useState)({username:"",email:"",password:""}),n=Object(y.a)(e,2),t=n[0],r=n[1],s=Object(o.useMutation)(T),i=Object(y.a)(s,2),c=i[0],l=i[1].error,d=function(e){var n=e.target,a=n.name,s=n.value;r(Object(S.a)(Object(S.a)({},t),{},Object(k.a)({},a,s)))},j=function(){var e=Object(w.a)(x.a.mark((function e(n){var a,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,console.log(t),e.next=5,c({variables:Object(S.a)({},t)});case 5:a=e.sent,s=a.data,console.log(s),_.login(s.addUser.token),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:r({username:"",email:"",password:""});case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n){return e.apply(this,arguments)}}();return Object(u.jsxs)("section",{children:[Object(u.jsx)(I,{}),Object(u.jsx)("div",{className:"form",children:Object(u.jsxs)("div",{className:"form-container",children:[Object(u.jsx)("h2",{children:"Sign Up Below"}),Object(u.jsx)("form",{onSubmit:j,children:Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{className:"form-input",placeholder:"Your username",name:"username",type:"username",id:"username",onChange:d}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{className:"form-input",placeholder:"Your email",name:"email",type:"email",id:"email",onChange:d}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{className:"form-input",placeholder:"******",name:"password",type:"password",id:"password",onChange:d}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{type:"submit",children:"Finish Signup"})]})}),l&&Object(u.jsx)("div",{children:"Something Went Wrong"})]})})]})},B=function(e){var n=Object(a.useState)({email:"",password:""}),t=Object(y.a)(n,2),r=t[0],s=t[1],i=Object(o.useMutation)(A),c=Object(y.a)(i,2),d=c[0],j=c[1].error,b=function(e){var n=e.target,t=n.name,a=n.value;s(Object(S.a)(Object(S.a)({},r),{},Object(k.a)({},t,a)))},h=function(){var e=Object(w.a)(x.a.mark((function e(n){var t,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,console.log(r),e.next=5,d({variables:Object(S.a)({},r)});case 5:t=e.sent,a=t.data,console.log(a),_.login(a.login.token),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:s({email:"",password:""});case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n){return e.apply(this,arguments)}}();return Object(u.jsxs)("section",{children:[Object(u.jsx)(I,{}),Object(u.jsx)("div",{className:"form",children:Object(u.jsxs)("div",{className:"form-container",children:[Object(u.jsx)(l.b,{to:"/signup",children:"Sign-up instead"}),Object(u.jsx)("h2",{children:"Login Below"}),Object(u.jsxs)("form",{onSubmit:h,children:[Object(u.jsx)("input",{className:"form-input",placeholder:"Your email",name:"email",type:"email",id:"email",value:r.email,onChange:b}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{className:"form-input",placeholder:"******",name:"password",type:"password",id:"password",value:r.password,onChange:b}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{className:"btn d-block w-100",type:"submit",children:"Submit"})]}),j&&Object(u.jsx)("div",{children:"Something Went Wrong"})]})})]})},D=new c.a({request:function(e){var n=localStorage.getItem("id_token");e.setContext({headers:{authorization:n?"Bearer ".concat(n):""}})},uri:"/graphql"});var M=function(){return Object(u.jsxs)(o.ApolloProvider,{client:D,children:[Object(u.jsx)(l.a,{children:Object(u.jsx)("div",{children:Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{path:"/signup",children:Object(u.jsx)(U,{})}),Object(u.jsx)(d.a,{path:"/login",children:Object(u.jsx)(B,{})}),Object(u.jsx)(d.a,{path:"/",children:Object(u.jsx)(j,{})})]})})}),Object(u.jsx)(b,{})]})},E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(M,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");E?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):J(n,e)}))}}()},94:function(e,n,t){}},[[106,1,2]]]);
//# sourceMappingURL=main.4aaa0eaf.chunk.js.map