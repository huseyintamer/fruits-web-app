(this["webpackJsonpfruits-web-app"]=this["webpackJsonpfruits-web-app"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),i=n(3),a=n.n(i),s=(n(12),n(4)),u=n(5),o=n(7),l=n(6),h=(n(13),n(14),n(15),n(0)),f=function(t){return Object(h.jsxs)("div",{className:"card-container",children:[Object(h.jsx)("img",{src:t.fruit.imageurl,alt:"fruit"}),Object(h.jsxs)("h3",{children:[t.fruit.tfvname," "]}),Object(h.jsxs)("p",{children:[t.fruit.botname," "]})]})},d=function(t){return Object(h.jsx)("div",{className:"card-list",children:t.fruits.map((function(t){return Object(h.jsx)(f,{fruit:t},t.id)}))})},j=(n(17),function(t){var e=t.placeholder,n=t.type,r=t.handleChange;return Object(h.jsx)("input",{className:"search",placeholder:e,type:n,onChange:r})}),p=function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).handle=function(e){t.setState({searchField:e.target.value},(function(){return console.log(t.state.searchField)}))},t.state={Fruits:[],searchField:""},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("http://tropicalfruitandveg.com/api/tfvjsonapi.php?search=all").then((function(t){return t.json()})).then((function(e){return t.setState({Fruits:e.results})}))}},{key:"render",value:function(){var t=this.state,e=t.Fruits,n=t.searchField,r=e.filter((function(t){return t.tfvname.toLowerCase().includes(n.toLowerCase())}));return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(j,{type:"search",placeholder:"Search Fruits",handleChange:this.handle}),Object(h.jsx)(d,{fruits:r})]})}}]),n}(r.Component),b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),r(t),c(t),i(t),a(t)}))};a.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.6af38bb9.chunk.js.map