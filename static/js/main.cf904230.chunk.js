(this["webpackJsonpgq-leaderboard"]=this["webpackJsonpgq-leaderboard"]||[]).push([[0],{122:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return generateQuestions}));var C_workfiles_personal_math_quiz_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(63);function generateQuestions(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,n=new Array(t).fill("");return n=n.map((function(t,n){return Object(C_workfiles_personal_math_quiz_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({key:n},generateQuestion(e,n))}))}function generateQuestion(){var difficulty=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,operators=[["-","+"],["-","+","*"],["-","+","*","/"]],max=10,min=5*difficulty,o=Math.floor(Math.random()*operators[difficulty].length),operator=operators[difficulty][o],isDivision="/"===operator,a=1+min+Math.floor(Math.random()*(isDivision?max+5:max)),b=1+min+Math.floor(Math.random()*(isDivision?max-5:max));return isDivision&&(a*=b),{a:a,b:b,o:"*"===operator?"x":operator,answer:eval("".concat(a," ").concat(operator," ").concat(b))}}},140:function(e,t,n){},1805:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(38),r=n.n(a),o=(n(140),n(28)),s=n(87),l=n(12);function u(e){var t=Object(c.useState)(0),n=Object(o.a)(t,2),i=n[0],a=n[1],r=Object(c.useState)(0),u=Object(o.a)(r,2),d=u[0],j=u[1];return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{style:{marginBottom:"20px",width:"360px"},children:Object(l.jsxs)(s.a.Group,{style:{width:"100%"},value:i,onChange:function(e){a(e.target.value)},children:[Object(l.jsx)(s.a.Button,{style:{width:"33%",textAlign:"center"},value:0,children:"Easy"}),Object(l.jsx)(s.a.Button,{style:{width:"33%",textAlign:"center"},value:1,children:"Medium"}),Object(l.jsx)(s.a.Button,{style:{width:"33%",textAlign:"center"},value:2,children:"Hard"})]})}),Object(l.jsx)("div",{style:{marginBottom:"20px",width:"360px"},children:Object(l.jsxs)(s.a.Group,{style:{width:"100%"},value:d,onChange:function(e){j(e.target.value)},children:[Object(l.jsx)(s.a.Button,{style:{width:"33%",textAlign:"center"},value:0,children:"5 Question"}),Object(l.jsx)(s.a.Button,{style:{width:"33%",textAlign:"center"},value:1,children:"10 Question"}),Object(l.jsx)(s.a.Button,{style:{width:"33%",textAlign:"center"},value:2,children:"Time "})]})}),Object(l.jsx)("div",{style:{marginBottom:"20px"},children:Object(l.jsx)("button",{className:"btn",onClick:function(t){e.onStartQuiz(i,d)},children:"Start"})})]})}n(143);var d=n(122),j=n(130),b=n(63),h=n(1809),f=n(1810),O=n(44),x=n(1808);function m(e){var t=Object(c.useState)([]),n=Object(o.a)(t,2),i=n[0],a=n[1],r=Object(c.useState)([]),s=Object(o.a)(r,2),u=s[0],d=s[1],x=Object(c.useState)(0),m=Object(o.a)(x,2),_=m[0],p=m[1],y=_===i.length-1;Object(c.useEffect)((function(t){a(e.questions)}),[]);var w=function(){p(_<i.length?_+1:_)},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,c=n.filter((function(e){return e&&e.length>0})).length===t.length;if(c){var a=t;a=a.map((function(e,t){return Object(b.a)(Object(b.a)({},e),{},{userAnswer:parseInt(n[t])})})),e.onFinish(a)}else alert("Please answer all the question")};return Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",maxWidth:"600px",margin:"auto"},onKeyPress:function(e){"Enter"===e.code&&u[_]&&(y?C():w())},children:[Object(l.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[Object(l.jsx)("div",{}),e.time?Object(l.jsx)("div",{children:Object(l.jsx)(v,{time:e.time,onFinish:function(){var e=i.splice(0,_),t=u.splice(0,_);C(e,t)}})}):"",Object(l.jsx)("div",{style:{background:"#dbdbdb",padding:"5px 20px",borderRadius:"1000px"},children:e.time>0?"".concat(_+1):"".concat(_+1," / ").concat(i.length)})]}),Object(l.jsxs)(h.a,{style:{flexDirection:"column",flex:"1",width:"100%",justifyContent:"end"},children:[i.length>0&&i[_]?Object(l.jsx)(f.a,{children:Object(l.jsx)(g,{question:i[_],onChangeValue:function(e,t){var n=Object(j.a)(u);n[e]=t,d(n)},value:u[_]})}):"",Object(l.jsx)(f.a,{style:{textAlign:"center",paddingTop:"20px",paddingBottom:"200px"},children:y?Object(l.jsx)(O.a,{className:"btn",onClick:function(e){return C()},style:{width:"100%"},children:"Finish"}):Object(l.jsx)(O.a,{className:"btn",disabled:!u[_],onClick:w,style:{width:"100%"},children:"Next"})})]}),Object(l.jsx)("div",{children:"beta 1.0"})]})}var g=function(e){var t=Object(c.useState)({}),n=Object(o.a)(t,2),i=n[0],a=n[1],r=Object(c.useState)(""),s=Object(o.a)(r,2),u=s[0],d=s[1],j=i.a,b=void 0===j?"a":j,h=i.b,f=void 0===h?"b":h,O=i.o,m=void 0===O?"+":O;Object(c.useEffect)((function(t){d(e.value),a(e.question)}),[e.question]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{style:{fontWeight:"bold",fontSize:"2em",textAlign:"center",marginBottom:"10px"},children:"".concat(b," ").concat(m," ").concat(f)}),Object(l.jsx)("div",{children:Object(l.jsx)(x.a,{value:u,onChange:function(t){e.onChangeValue(i.key,t.target.value),d(t.target.value)}})})]})},v=function(e){var t=Object(c.useState)(0),n=Object(o.a)(t,2),i=n[0],a=n[1];Object(c.useEffect)((function(t){e.time>0&&a(e.time)}),[]),function(e,t){var n=Object(c.useRef)();Object(c.useEffect)((function(){n.current=e}),[e]),Object(c.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(t){i>0&&(a((function(e){return e-1})),1===i&&e.onFinish())}),i>0?1e3:null);var r=Math.floor(i/60),s=i%60;return Object(l.jsx)("div",{children:"".concat(r," : ").concat(s)})},_=n(102),p=n(1811),y=n(1807);function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{result:[]},t=Object(c.useState)([{}]),n=Object(o.a)(t,2),i=n[0],a=n[1],r=Object(c.useState)(null),s=Object(o.a)(r,2),u=s[0],d=s[1],j=[{title:"#",dataIndex:"number",key:"number"},{title:"Question",dataIndex:"question",key:"question",align:"center"},{title:"Your Answer",dataIndex:"answer",key:"answer",align:"center"},{title:"",dataIndex:"isCorrect",key:"isCorrect",render:function(e){return Object(l.jsx)(p.a,{color:e?"green":"red",children:e?Object(l.jsx)(_.CheckOutlined,{}):Object(l.jsx)(_.CloseOutlined,{})})}}];Object(c.useEffect)((function(){b(e.result)}),[]);var b=function(e){var t=e.map((function(e,t){return{number:t+1,question:"".concat(e.a," ").concat(e.o," ").concat(e.b," = ").concat(e.answer),answer:e.userAnswer,isCorrect:e.answer===e.userAnswer}}));a(t),d(t.filter((function(e){return e.isCorrect})).length)};return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(h.a,{style:{flexDirection:"column",alignItems:"center"},children:[Object(l.jsx)(f.a,{style:{fontSize:"1.6em",fontWeight:"bold",marginBottom:"2em"},children:"Result"}),Object(l.jsx)(y.a,{dataSource:i,columns:j,pagination:!1,style:{marginBottom:"2em"},footer:function(e){return null!==u&&Object(l.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",fontWeight:"bold"},children:[Object(l.jsx)("div",{children:"Score"}),Object(l.jsxs)("div",{children:[u," / ",i.length]})]})}}),Object(l.jsx)(O.a,{onClick:e.onBack,children:"Back"})]})})}function C(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(null),r=Object(o.a)(a,2),s=r[0],j=r[1],b=Object(c.useState)(null),h=Object(o.a)(b,2),f=h[0],O=h[1],x=[{n:5,t:0},{n:10,t:0},{n:100,t:120}];return Object(l.jsx)("div",{style:{height:"100%"},children:n?f?Object(l.jsx)(w,{result:f,onBack:function(){i(null),j(null),O(null)}}):Object(l.jsx)(m,{questions:s,time:x[n.mode].t,onFinish:function(e){console.log(e),O(e)}}):Object(l.jsx)(u,{onStartQuiz:function(e,t){i({difficulty:e,mode:t});var n=Object(d.a)(e,x[t].n);j(n),console.log(n)}})})}var k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,1812)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root")),k()}},[[1805,1,2]]]);
//# sourceMappingURL=main.cf904230.chunk.js.map