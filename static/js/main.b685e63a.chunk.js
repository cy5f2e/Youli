(this["webpackJsonpyouli-react-redux"]=this["webpackJsonpyouli-react-redux"]||[]).push([[0],{150:function(e,t,n){},151:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(30),o=n.n(a),r=n(164),j=n(171),i=n(96),s=n(50),l=n(168),b=n(166),u="PLAYER_ADD",d="PLAYER_DELETE",O=n(78),x=n(113),h=n(169),p=n(165),m=n(7),f=function(e){var t=e.onClose,n=Object(s.b)(),a=Object(c.useState)([]),o=Object(i.a)(a,2),r=o[0],j=o[1];function l(e,t){var n=t.name,c=t.value;j((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(O.a)({},n,c))}))}return Object(m.jsx)(h.a,{children:Object(m.jsxs)(p.a,{size:"small",children:[Object(m.jsx)(p.a.Input,{label:"Name",name:"name",onChange:l}),Object(m.jsx)(p.a.Input,{label:"Score",name:"points",onChange:l}),Object(m.jsx)(p.a.Button,{content:"Submit",color:"green",onClick:function(){var e=r.name,c=r.points;void 0!==e&&void 0!==c&&(n({type:u,payload:{name:e,points:c}}),setTimeout((function(){return t()}),500))}})]})})},C=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.players})),n=Object(c.useState)(!1),a=Object(i.a)(n,2),o=a[0],r=a[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(l.a,{content:"Add Player Score",primary:!0,onClick:function(){return r(!o)}}),Object(m.jsx)("br",{}),o&&Object(m.jsx)(f,{onClose:function(){r(!1)}}),t&&Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(b.a,{celled:!0,textAlign:"center",children:[Object(m.jsx)(b.a.Header,{children:Object(m.jsxs)(b.a.Row,{children:[Object(m.jsx)(b.a.HeaderCell,{content:"ID",negative:!0}),Object(m.jsx)(b.a.HeaderCell,{content:"Name"}),Object(m.jsx)(b.a.HeaderCell,{content:"PTS"}),Object(m.jsx)(b.a.HeaderCell,{content:"Action"})]})}),Object(m.jsx)(b.a.Body,{children:t.map((function(t){return Object(m.jsxs)(b.a.Row,{children:[Object(m.jsx)(b.a.Cell,{content:t.id}),Object(m.jsx)(b.a.Cell,{content:t.name}),Object(m.jsx)(b.a.Cell,{content:t.points}),Object(m.jsx)(b.a.Cell,{children:Object(m.jsx)(l.a,{content:"Delete",color:"red",onClick:function(){return n=t.id,void e({type:d,payload:{id:n}});var n}})})]},"".concat(t.id,"-").concat(t.name))}))})]})})]})},v=function(){return Object(m.jsxs)(r.a,{fluid:!0,children:[Object(m.jsx)(j.a,{as:"h1",children:"Game No.24"}),Object(m.jsx)(C,{})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,172)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))},y=n(47),S=n(126),D=n(105),A=n(167),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case u:return[].concat(Object(D.a)(e),[{id:Object(A.a)(),name:c.name,points:c.points}]);case d:var a=Object(D.a)(e),o=a.findIndex((function(e){return e.id===c.id}));return a.splice(o,1),Object(D.a)(a);default:return e}},F=Object(y.combineReducers)({players:E}),I=Object(y.createStore)(F,Object(S.composeWithDevTools)());n(150);o.a.render(Object(m.jsx)(s.a,{store:I,children:Object(m.jsx)(v,{})}),document.getElementById("root")),g()}},[[151,1,2]]]);
//# sourceMappingURL=main.b685e63a.chunk.js.map