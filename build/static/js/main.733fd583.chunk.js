(this.webpackJsonpreact_exercise=this.webpackJsonpreact_exercise||[]).push([[0],{66:function(e,t,c){},68:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(30),s=c.n(r),i=(c(66),c(8)),j=(c(67),c(68),c(27)),l=c(11),o=c(54);c(69);try{o.a.initializeApp({apiKey:"AIzaSyDHZODaQPsJIK2tfqHuSZ0-tH5oxozyUnA",authDomain:"exercise-tracker-effea.firebaseapp.com",projectId:"exercise-tracker-effea",storageBucket:"exercise-tracker-effea.appspot.com",messagingSenderId:"979502751935",appId:"1:979502751935:web:ddffa1f92fa5248e0ea60a"})}catch(R){console.error("Firebase initialization error",R.stack)}var b=o.a,d=c(19),u=c.n(d),h=c(31),x=c(61),O=c(34),m=c(0);var f=function(e){var t=e.exercise,c=e.onEdit,a=e.onDelete;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("tr",{className:"text-center",children:[Object(m.jsx)("td",{children:t.name}),Object(m.jsx)("td",{children:t.reps}),Object(m.jsx)("td",{children:t.sets}),Object(m.jsx)("td",{children:"".concat("lbs"===t.unit?t.weight:Math.round(.45359237*t.weight)," ").concat(t.unit)}),Object(m.jsx)("td",{children:"".concat(String(t.date.getUTCMonth()+1).padStart(2,"0"),"-").concat(String(t.date.getUTCDate()).padStart(2,"0"),"-").concat(String(t.date.getUTCFullYear()).slice(2))}),Object(m.jsx)("td",{children:Object(m.jsx)(O.b,{class:"clickable",onClick:function(){c(t)}})}),Object(m.jsx)("td",{children:Object(m.jsx)(O.a,{class:"clickable",onClick:function(){a(t._id)}})})]})})},p=c(41),g=c(58),v=c(21),C=c(28),k=c(22);var N=function(e){var t=e.id,c=e.sortCriteria;return c.field===t?"ascending"===c.direction?Object(m.jsx)(O.d,{}):Object(m.jsx)(O.c,{}):Object(m.jsx)(O.c,{className:"hidden"})};var y=function(e){var t=e.exercises,c=e.onEdit,n=e.onDelete,r=Object(a.useState)({field:"date",direction:"descending"}),s=Object(i.a)(r,2),j=s[0],l=s[1],o=Object(x.a)(t);o.sort((function(e,t){return e[j.field]<t[j.field]?"ascending"===j.direction?-1:1:e[j.field]>t[j.field]?"ascending"===j.direction?1:-1:e.date>t.date?-1:1}));var b=function(e){var t="descending";j.field===e&&"descending"===j.direction&&(t="ascending"),l({field:e,direction:t})};return t.length>0?Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(v.a,{children:Object(m.jsx)(C.a,{children:Object(m.jsxs)(k.a,{className:"mt-3",children:[Object(m.jsx)("h3",{className:"text-center",children:"Exercise List"}),Object(m.jsxs)(g.a,{striped:!0,hover:!0,className:"mt-3",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{className:"text-center",children:[Object(m.jsxs)("th",{className:"clickable",id:"name",onClick:function(){return b("name")},children:["Name  ",Object(m.jsx)(N,{id:"name",sortCriteria:j})]}),Object(m.jsxs)("th",{className:"clickable",id:"reps",onClick:function(){return b("reps")},children:["Reps  ",Object(m.jsx)(N,{id:"reps",sortCriteria:j})]}),Object(m.jsxs)("th",{className:"clickable",id:"sets",onClick:function(){return b("sets")},children:["Sets  ",Object(m.jsx)(N,{id:"sets",sortCriteria:j})]}),Object(m.jsxs)("th",{className:"clickable",id:"weight",onClick:function(){return b("weight")},children:["Weight  ",Object(m.jsx)(N,{id:"weight",sortCriteria:j})]}),Object(m.jsxs)("th",{className:"clickable",id:"date",onClick:function(){return b("date")},children:["Date  ",Object(m.jsx)(N,{id:"date",sortCriteria:j})]}),Object(m.jsx)("th",{children:"Edit"}),Object(m.jsx)("th",{children:"Delete"})]})}),Object(m.jsx)("tbody",{children:o.map((function(e,t){return Object(m.jsx)(f,{exercise:e,onEdit:c,onDelete:n},t)}))})]})]})})})}):Object(m.jsx)(v.a,{children:Object(m.jsx)(C.a,{children:Object(m.jsxs)(k.a,{className:"mt-3",children:[Object(m.jsx)("h3",{className:"text-center",children:"Exercise List"}),Object(m.jsx)(p.a,{variant:"info",className:"text-center",children:"No exercises to display"})]})})})};var S=function(){return Object(m.jsx)("div",{className:"text-center mt-5",children:Object(m.jsxs)("div",{className:"lds-ring ",children:[Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{})]})})};var E=function(e){var t=e.setExerciseToEdit,c=e.user,n=Object(l.f)(),r=Object(a.useState)([]),s=Object(i.a)(r,2),j=s[0],o=s[1],b=Object(a.useState)(!1),d=Object(i.a)(b,2),x=d[0],O=d[1],f=function(){var e=Object(h.a)(u.a.mark((function e(t){var a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.getIdToken();case 2:return a=e.sent,e.next=5,fetch("/exercises/".concat(t),{method:"DELETE",headers:{Authorization:"Bearer ".concat(a)}});case 5:204===(n=e.sent).status?g(c):(r=n.json(),alert(r.error));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(h.a)(u.a.mark((function e(c){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(c),n.push("/Edit");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(h.a)(u.a.mark((function e(t){var c,a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,t.getIdToken();case 3:return c=e.sent,e.next=6,fetch("/exercises/",{headers:{Authorization:"Bearer ".concat(c)}});case 6:if(200!==(a=e.sent).status){e.next=15;break}return e.next=10,a.json();case 10:(n=e.sent).forEach((function(e){e.date=new Date(e.date)})),o(n),e.next=19;break;case 15:return e.next=17,a.json();case 17:r=e.sent,alert(r.error);case 19:O(!1);case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){g(c)}),[c]),x?Object(m.jsx)(S,{}):Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(y,{exercises:j,onEdit:p,onDelete:f})})},w=c(5),L=c(32),I=c(17);var T=function(e){var t=e.exerciseToEdit,c=e.user,n=Object(l.f)(),r=Object(a.useState)(t.name),s=Object(i.a)(r,2),j=s[0],o=s[1],b=Object(a.useState)(t.reps),d=Object(i.a)(b,2),x=d[0],O=d[1],f=Object(a.useState)(t.sets),p=Object(i.a)(f,2),g=p[0],N=p[1],y="lbs"===t.unit?t.weight:Math.round(.45359237*t.weight),S=Object(a.useState)(y),E=Object(i.a)(S,2),T=E[0],D=E[1],F=Object(a.useState)(t.unit),A=Object(i.a)(F,2),G=A[0],B=A[1],P=Object(a.useState)("".concat(String(t.date.getUTCMonth()+1).padStart(2,"0"),"-").concat(String(t.date.getUTCDate()).padStart(2,"0"),"-").concat(String(t.date.getUTCFullYear()).slice(2))),U=Object(i.a)(P,2),R=U[0],z=U[1],W=function(){var e=Object(h.a)(u.a.mark((function e(){var a,r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.getIdToken();case 2:return a=e.sent,e.next=5,fetch("/exercises/".concat(t._id),{method:"PUT",body:JSON.stringify({name:j,reps:x,sets:g,weight:T,unit:G,date:R}),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)}});case 5:if(200!==(r=e.sent).status){e.next=10;break}alert("Successfully edited the exercise!"),e.next=14;break;case 10:return e.next=12,r.json();case 12:s=e.sent,alert(s.error);case 14:n.push("/");case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(v.a,{className:"mt-5",children:Object(m.jsx)(C.a,{className:"justify-content-center",children:Object(m.jsx)(k.a,{md:6,className:"mb-5",children:Object(m.jsx)(I.a,{className:"shadow",children:Object(m.jsxs)(I.a.Body,{children:[Object(m.jsx)(I.a.Title,{children:"Edit Exercise"}),Object(m.jsxs)(w.a,{children:[Object(m.jsxs)(w.a.Group,{className:"mb-3",controlId:"formExerciseName",children:[Object(m.jsx)(w.a.Label,{children:"Exercise Name"}),Object(m.jsx)(w.a.Control,{type:"text",value:j,onChange:function(e){var t=e.target;return o(t.value)}})]}),Object(m.jsxs)(w.a.Group,{className:"mb-3",controlId:"formReps",children:[Object(m.jsx)(w.a.Label,{children:"Number of Reps"}),Object(m.jsx)(w.a.Control,{type:"number",value:x,onChange:function(e){var t=e.target;return O(t.value)}})]}),Object(m.jsxs)(w.a.Group,{className:"mb-3",controlId:"formSets",children:[Object(m.jsx)(w.a.Label,{children:"Number of Sets"}),Object(m.jsx)(w.a.Control,{type:"number",value:g,onChange:function(e){var t=e.target;return N(t.value)}})]}),Object(m.jsxs)(w.a.Group,{className:"mb-1",controlId:"formWeight",children:[Object(m.jsx)(w.a.Label,{children:"Weight"}),Object(m.jsx)(w.a.Control,{type:"number",value:T,onChange:function(e){var t=e.target;return D(t.value)}})]}),Object(m.jsxs)(w.a.Group,{className:"mb-3",children:[Object(m.jsx)(w.a.Check,{inline:!0,checked:"lbs"===G,label:"lbs",name:"unit",type:"radio",id:"lbs",onChange:function(){return B("lbs")}}),Object(m.jsx)(w.a.Check,{inline:!0,checked:"kgs"===G,label:"kgs",name:"unit",type:"radio",id:"kgs",onChange:function(){return B("kgs")}})]}),Object(m.jsxs)(w.a.Group,{className:"mb-3",controlId:"formDate",children:[Object(m.jsx)(w.a.Label,{children:"Date"}),Object(m.jsx)(w.a.Control,{type:"test",value:R,onChange:function(e){var t=e.target;return z(t.value)}})]}),Object(m.jsx)(L.a,{variant:"primary",onClick:W,children:"Submit"})]})]})})})})}),Object(m.jsxs)("fieldset",{children:[Object(m.jsx)("legend",{children:"Edit An Exercise"}),Object(m.jsx)("label",{htmlFor:"name",children:"Name "}),Object(m.jsx)("input",{type:"text",id:"name",value:j,onChange:function(e){return o(e.target.value)}}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"reps",children:"# of Reps "}),Object(m.jsx)("input",{type:"number",id:"reps",value:x,onChange:function(e){return O(e.target.value)}}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"sets",children:"# of Sets "}),Object(m.jsx)("input",{type:"number",id:"sets",value:g,onChange:function(e){return N(e.target.value)}}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"weight",children:"Weight "}),Object(m.jsx)("input",{type:"number",id:"weight",value:T,onChange:function(e){return D(e.target.value)}}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"unit",children:"Units "}),Object(m.jsx)("input",{type:"text",id:"unit",value:G,onChange:function(e){return B(e.target.value)}}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"date",children:"Date "}),Object(m.jsx)("input",{type:"text",id:"date",value:R,onChange:function(e){return z(e.target.value)}})]}),Object(m.jsx)("button",{onClick:W,children:"Save"})]})};var D=function(e){var t=e.user,c=Object(l.f)(),n=Object(a.useState)(""),r=Object(i.a)(n,2),s=r[0],j=r[1],o=Object(a.useState)(""),b=Object(i.a)(o,2),d=b[0],x=b[1],O=Object(a.useState)(""),f=Object(i.a)(O,2),p=f[0],g=f[1],N=Object(a.useState)(""),y=Object(i.a)(N,2),S=y[0],E=y[1],T=Object(a.useState)("lbs"),D=Object(i.a)(T,2),F=D[0],A=D[1],G=Object(a.useState)(""),B=Object(i.a)(G,2),P=B[0],U=B[1],R=function(){var e=Object(h.a)(u.a.mark((function e(){var a,n,r,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={name:s,reps:d,sets:p,weight:S,unit:F,date:P},e.next=3,t.getIdToken();case 3:return n=e.sent,e.next=6,fetch("/exercises",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 6:if(201!==(r=e.sent).status){e.next=11;break}alert("Successfully added the exercise!"),e.next=15;break;case 11:return e.next=13,r.json();case 13:i=e.sent,alert(i.error);case 15:c.push("/");case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(v.a,{className:"mt-5",children:Object(m.jsx)(C.a,{className:"justify-content-center",children:Object(m.jsx)(k.a,{md:6,className:"mb-5",children:Object(m.jsx)(I.a,{className:"shadow",children:Object(m.jsxs)(I.a.Body,{children:[Object(m.jsx)(I.a.Title,{children:"New Exercise"}),Object(m.jsxs)(w.a,{children:[Object(m.jsxs)(w.a.Group,{className:"mb-3",controlId:"formExerciseName",children:[Object(m.jsx)(w.a.Label,{children:"Exercise Name"}),Object(m.jsx)(w.a.Control,{type:"text",onChange:function(e){var t=e.target;return j(t.value)}})]}),Object(m.jsxs)(w.a.Group,{className:"mb-3",controlId:"formReps",children:[Object(m.jsx)(w.a.Label,{children:"Number of Reps"}),Object(m.jsx)(w.a.Control,{type:"number",onChange:function(e){var t=e.target;return x(t.value)}})]}),Object(m.jsxs)(w.a.Group,{className:"mb-3",controlId:"formSets",children:[Object(m.jsx)(w.a.Label,{children:"Number of Sets"}),Object(m.jsx)(w.a.Control,{type:"number",onChange:function(e){var t=e.target;return g(t.value)}})]}),Object(m.jsxs)(w.a.Group,{className:"mb-1",controlId:"formWeight",children:[Object(m.jsx)(w.a.Label,{children:"Weight"}),Object(m.jsx)(w.a.Control,{type:"number",onChange:function(e){var t=e.target;return E(t.value)}})]}),Object(m.jsxs)(w.a.Group,{className:"mb-3",controlId:"formUnit",children:[Object(m.jsx)(w.a.Check,{inline:!0,checked:"lbs"===F,label:"lbs",name:"unit",type:"radio",id:"lbs",onChange:function(){return A("lbs")}}),Object(m.jsx)(w.a.Check,{inline:!0,checked:"kgs"===F,label:"kgs",name:"unit",type:"radio",id:"kgs",onChange:function(){return A("kgs")}})]}),Object(m.jsxs)(w.a.Group,{className:"mb-3",controlId:"formDate",children:[Object(m.jsx)(w.a.Label,{children:"Date"}),Object(m.jsx)(w.a.Control,{type:"test",placeholder:"MM-DD-YY",onChange:function(e){var t=e.target;return U(t.value)}})]}),Object(m.jsx)(L.a,{variant:"primary",onClick:R,children:"Submit"})]})]})})})})})})};var F=function(){var e=Object(a.useState)(),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(),s=Object(i.a)(r,2),j=s[0],l=s[1],o=Object(a.useState)(!1),d=Object(i.a)(o,2),u=d[0],h=d[1],x=Object(a.useState)(!1),O=Object(i.a)(x,2),f=O[0],g=O[1];return Object(m.jsx)("div",{className:"home pt-5",children:Object(m.jsx)(v.a,{children:Object(m.jsxs)(C.a,{className:"justify-content-center",children:[Object(m.jsx)(k.a,{md:!0,className:"mb-5",children:Object(m.jsx)(I.a,{className:"shadow",children:Object(m.jsxs)(I.a.Body,{children:[u&&Object(m.jsx)(p.a,{variant:"danger",children:"Log in Failed"}),Object(m.jsx)(I.a.Title,{children:"Log In"}),Object(m.jsxs)(w.a,{onSubmit:function(e){e.preventDefault(),b.auth().signInWithEmailAndPassword(c,j).catch((function(e){h(!0)}))},children:[Object(m.jsxs)(w.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(m.jsx)(w.a.Label,{children:"Email address"}),Object(m.jsx)(w.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){var t=e.target;return n(t.value)}})]}),Object(m.jsxs)(w.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(m.jsx)(w.a.Label,{children:"Password"}),Object(m.jsx)(w.a.Control,{type:"password",placeholder:"Password",onChange:function(e){var t=e.target;return l(t.value)}})]}),Object(m.jsx)(L.a,{variant:"primary",type:"submit",children:"Log in"}),Object(m.jsx)(L.a,{className:"ms-3",variant:"primary",onClick:function(e){b.auth().signInAnonymously().catch((function(e){h(!0)}))},children:"Log in Anonymously"})]})]})})}),Object(m.jsx)(k.a,{md:!0,className:"mb-5",children:Object(m.jsx)(I.a,{className:"shadow",children:Object(m.jsxs)(I.a.Body,{children:[f&&Object(m.jsx)(p.a,{variant:"danger",children:"Sign Up Failed"}),Object(m.jsx)(I.a.Title,{children:"Register"}),Object(m.jsxs)(w.a,{onSubmit:function(e){e.preventDefault(),b.auth().createUserWithEmailAndPassword(c,j).catch((function(e){g(!0)}))},children:[Object(m.jsxs)(w.a.Group,{className:"mb-3",controlId:"formRegisterEmail",children:[Object(m.jsx)(w.a.Label,{children:"Email address"}),Object(m.jsx)(w.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){var t=e.target;return n(t.value)}})]}),Object(m.jsxs)(w.a.Group,{className:"mb-3",controlId:"formRegisterPassword",children:[Object(m.jsx)(w.a.Label,{children:"Password"}),Object(m.jsx)(w.a.Control,{type:"password",placeholder:"Password",onChange:function(e){var t=e.target;return l(t.value)}})]}),Object(m.jsx)(L.a,{variant:"primary",type:"submit",children:"Register"})]})]})})})]})})})},A=c(42),G=c(38);var B=function(e){var t=e.isLoggedin,c=Object(l.f)();return t?Object(m.jsx)(A.a,{bg:"dark",variant:"dark",children:Object(m.jsxs)(v.a,{children:[Object(m.jsx)(A.a.Brand,{children:"Exercise Tracker"}),Object(m.jsxs)(G.a,{className:"me-auto",children:[Object(m.jsx)(G.a.Link,{as:j.b,to:"/",children:"Exercise List"}),Object(m.jsx)(G.a.Link,{as:j.b,to:"/Create",children:"Add Exercise"})]}),Object(m.jsx)(G.a,{children:Object(m.jsx)(G.a.Link,{onClick:function(){b.auth().signOut(),c.push("/")},children:"Logout"})})]})}):Object(m.jsx)(A.a,{bg:"dark",variant:"dark",children:Object(m.jsx)(v.a,{children:Object(m.jsx)(A.a.Brand,{children:"Exercise Tracker"})})})};var P=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(!1),s=Object(i.a)(r,2),o=s[0],d=s[1],u=Object(a.useState)(!1),h=Object(i.a)(u,2),x=h[0],O=h[1],f=Object(a.useState)(!0),p=Object(i.a)(f,2),g=p[0],v=p[1];return b.auth().onAuthStateChanged((function(e){e?(d(e),O(!0)):(O(!1),d(!1)),v(!1)})),Object(a.useEffect)((function(){setTimeout((function(){return v(!1)}),500)}),[]),g?Object(m.jsx)(S,{}):Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(j.a,{children:x?Object(m.jsxs)("header",{className:"App-header",children:[Object(m.jsx)(B,{isLoggedin:x}),Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{path:"/",exact:!0,children:Object(m.jsx)(E,{user:o,setExerciseToEdit:n})}),Object(m.jsx)(l.a,{path:"/Edit",exact:!0,children:Object(m.jsx)(T,{user:o,exerciseToEdit:c})}),Object(m.jsx)(l.a,{path:"/Create",exact:!0,children:Object(m.jsx)(D,{user:o})})]})]}):Object(m.jsxs)("header",{className:"App-header",children:[Object(m.jsx)(B,{isLoggedin:x}),Object(m.jsx)(l.c,{children:Object(m.jsx)(l.a,{path:"/",exact:!0,children:Object(m.jsx)(F,{})})})]})})})},U=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,84)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};s.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(P,{})}),document.getElementById("root")),U()}},[[82,1,2]]]);
//# sourceMappingURL=main.733fd583.chunk.js.map