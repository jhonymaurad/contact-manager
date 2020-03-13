(this["webpackJsonpcontact-manager"]=this["webpackJsonpcontact-manager"]||[]).push([[0],{38:function(e,a,t){e.exports=t(68)},43:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(33),o=t.n(c),l=t(5),s=t(6),i=t(8),m=t(7),u=t(9),p=(t(43),t(44),t(11)),h=t(15);function d(e){var a=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm nav-bar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement(p.b,{to:"/"},a),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/contact/edit/:id",className:"nav-link"},r.a.createElement("i",{className:"fas fa-edit"})," Edit")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"}),"About"))))))}d.defaultProps={branding:"MY APP"};var f=t(2),b=t.n(f),E=t(13),v=t(37),y=t(19),g=t(14),N=t.n(g),C=r.a.createContext(),O=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.filter((function(e){return e.id!==a.payload}))});case"ADD_CONTACT":return Object(y.a)({},e,{contacts:[a.payload].concat(Object(v.a)(e.contacts))});case"UPDATE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.map((function(e){return e.id===a.payload.id?e=a.payload:e}))});default:return e}},j=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){t.setState((function(a){return O(a,e)}))}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,this.setState({contacts:a.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(C.Provider,{value:this.state},this.props.children)}}]),a}(r.a.Component),k=C.Consumer,w=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},t.onShowClick=function(e){t.setState({showContactInfo:!t.state.showContactInfo})},t.onDeleteClick=function(){var e=Object(E.a)(b.a.mark((function e(a,t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.delete("https://jsonplaceholder.typicode.com/users/".concat(a));case 2:t({type:"DELETE_CONTACT",payload:a});case 3:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),t.onEditClick=function(){console.log("test")},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.contact,t=a.id,n=a.name,c=a.email,o=a.phone,l=this.state.showContactInfo;return r.a.createElement(k,null,(function(a){var s=a.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n," ",r.a.createElement("i",{className:"fas fa-sort-down",onClick:e.onShowClick,style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDeleteClick.bind(e,t,s)}),r.a.createElement(p.b,{className:"fas fa-edit",style:{cursor:"pointer",float:"right",color:"green",marginRight:"1rem"},to:"contact/edit/".concat(t)})),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"}," Email: ",c),r.a.createElement("li",{className:"list-group-item"}," Phone: ",o)):null)}))}}]),a}(r.a.Component),x=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(k,null,(function(e){var a=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),a?a.map((function(e){return r.a.createElement(w,{key:e.id,contact:e})})):r.a.createElement("div",null,"loading"))}))}}]),a}(r.a.Component),S=t(17),A=t(36),T=t.n(A);function D(e){var a=e.label,t=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{type:o,name:t,className:T()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))}D.defaultProps={type:"text"};var P=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onChange=function(e){t.setState(Object(S.a)({},e.target.name,e.target.value))},t.onSubmit=function(){var e=Object(E.a)(b.a.mark((function e(a,n){var r,c,o,l,s,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return t.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return t.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return t.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},e.next=14,N.a.post("https://jsonplaceholder.typicode.com/users",s);case 14:i=e.sent,a({type:"ADD_CONTACT",payload:i.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 18:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(k,null,(function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(D,{label:"Name",name:"name",placeholder:"Enter Name ...",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(D,{label:"Email",name:"email",type:"email",placeholder:"Enter Email ...",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(D,{label:"Phone",name:"phone",placeholder:"Enter Phone ...",value:c,error:o.phone,onChange:e.onChange}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))}))}}]),a}(r.a.Component),q=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onChange=function(e){t.setState(Object(S.a)({},e.target.name,e.target.value))},t.onSubmit=function(){var e=Object(E.a)(b.a.mark((function e(a,n){var r,c,o,l,s,i,m;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return t.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return t.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return t.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},i=t.props.match.params.id,e.next=15,N.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 15:m=e.sent,a({type:"UPDATE_CONTACT",payload:m.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 19:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(b.a.mark((function e(){var a,t,n,r,c,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,N.a.get("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t=e.sent,n=t.data,r=n.name,c=n.email,o=n.phone,this.setState({name:r,email:c,phone:o});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(k,null,(function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(D,{label:"Name",name:"name",placeholder:"Enter Name ...",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(D,{label:"Email",name:"email",type:"email",placeholder:"Enter Email ...",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(D,{label:"Phone",name:"phone",placeholder:"Enter Phone ...",value:c,error:o.phone,onChange:e.onChange}),r.a.createElement("input",{type:"submit",value:"Edit Contact",className:"btn btn-light btn-block"}))))}))}}]),a}(r.a.Component);function _(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"Manager"),r.a.createElement("p",{className:"lead"},"Simple app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))}function I(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Not Found"),r.a.createElement("p",{className:"lead"},"page does not exists"))}var M=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(j,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement("div",{className:"container"},r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:x}),r.a.createElement(h.a,{exact:!0,path:"/about",component:_}),r.a.createElement(h.a,{exact:!0,path:"/contact/add",component:P}),r.a.createElement(h.a,{exact:!0,path:"/contact/edit/:id",component:q}),r.a.createElement(h.a,{component:I}))))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.8e923b64.chunk.js.map