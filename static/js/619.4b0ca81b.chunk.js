"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[619],{854:function(n,e,t){var r=t(8593),a=t(184);e.Z=function(){return(0,a.jsx)("div",{children:(0,a.jsx)(r.Nx,{width:"200",color:"#000"})})}},4666:function(n,e,t){t.d(e,{Z:function(){return m}});var r,a,o,i,c,s=t(168),u=t(1109),d=t(1087),l=u.Z.ul(r||(r=(0,s.Z)(["\n  list-style: none;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  grid-gap: 10px;\n"]))),p=u.Z.li(a||(a=(0,s.Z)(["\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  transition: box-shadow 0.3s ease;\n\n  &:hover {\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n  }\n"]))),h=(0,u.Z)(d.rU)(o||(o=(0,s.Z)(["\n  text-decoration: none;\n  color: #007bff;\n  display: block;\n  padding: 10px;\n  border-radius: 5px;\n\n  &:hover {\n    background-color: #eaf2ff;\n  }\n"]))),g=u.Z.div(i||(i=(0,s.Z)(["\n  margin-top: 20px;\n  display: flex;\n  justify-content: space-evenly;\n"]))),x=u.Z.button(c||(c=(0,s.Z)(["\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  cursor: pointer;\n  border-radius: 5px;\n  transition: background-color 0.3s ease;\n\n  &:last-child {\n    margin-right: 0;\n  }\n\n  &:hover {\n    background-color: #0056b3;\n  }\n"]))),f=t(184),b=function(n){var e=n.btnName,t=n.onClick;return(0,f.jsx)(x,{onClick:t,type:"button",children:e})},m=function(n){var e=n.location,t=n.movieList,r=n.paginationPage,a=n.totalPages,o=n.onLoadNextPage,i=n.onLoadPreviousPage,c=n.onToStartPage;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l,{children:t.map((function(n){var t=n.id,r=n.title;return(0,f.jsx)(p,{children:(0,f.jsx)(h,{to:"/movies/".concat(t),state:{from:e},children:r})},t)}))}),(0,f.jsxs)(g,{children:[0!==t.length&&r>1&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(b,{btnName:"Start page",onClick:c}),(0,f.jsx)(b,{btnName:"Previous page",onClick:i})]}),0!==t.length&&r<a&&(0,f.jsx)(b,{btnName:"Next page",onClick:o})]})]})}},3619:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,a,o,i,c,s=t(9439),u=t(2791),d=t(7689),l=t(1087),p=t(3714),h=t(1686),g=t.n(h),x=t(168),f=t(1109),b=f.Z.form(r||(r=(0,x.Z)(["\n  display: inline-block;\n  background-color: #f2f2f2;\n  border-radius: 5px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  padding: 10px;\n"]))),m=f.Z.label(a||(a=(0,x.Z)(["\n  display: block;\n  margin-bottom: 10px;\n"]))),v=f.Z.input(o||(o=(0,x.Z)(["\n  padding: 8px 12px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  font-size: 16px;\n  width: 250px;\n"]))),Z=f.Z.button(i||(i=(0,x.Z)(["\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  cursor: pointer;\n  border-radius: 5px;\n  transition: background-color 0.3s ease;\n\n  &:hover {\n    background-color: #0056b3;\n  }\n"]))),k=t(184),j=function(n){var e=n.handleSubmit,t=n.handleSearchInputChange,r=n.searchText;return(0,k.jsxs)(b,{onSubmit:e,children:[(0,k.jsx)(m,{children:(0,k.jsx)(v,{value:r,name:"search",type:"text",onChange:t,autoComplete:"off"})}),(0,k.jsx)(Z,{type:"submit",children:"Search"})]})},y=t(4666),P=t(854),w=f.Z.div(c||(c=(0,x.Z)(["\n  margin-top: 20px;\n  text-align: center;\n"]))),S=function(){var n,e,t,r=(0,d.TH)(),a=(0,l.lr)(),o=(0,s.Z)(a,2),i=o[0],c=o[1],h=(0,u.useState)(!1),x=(0,s.Z)(h,2),f=x[0],b=x[1],m=(0,u.useState)([]),v=(0,s.Z)(m,2),Z=v[0],S=v[1],N=(0,u.useState)(null!==(n=i.get("search"))&&void 0!==n?n:""),C=(0,s.Z)(N,2),T=C[0],L=C[1],_=(0,u.useRef)(0),E=null!==(e=Number(i.get("page")))&&void 0!==e?e:0,F="";(0,u.useEffect)((function(){b(!0),(0,p.r)("/search/movie",E,T).then((function(n){if(200!==n.status)throw new Error(n.statusText);_.current=n.data.total_pages,S(n.data.results),b(!1)}))}),[E,T]);return F=0===Z.length?"No matches":'Search "'.concat(T,'" (Page ').concat(E," of ").concat(_.current,")"),(0,k.jsxs)(w,{children:[f&&(0,k.jsx)(P.Z,{}),(0,k.jsx)(j,{handleSubmit:function(n){n.preventDefault(),n.target[0].value.trim()||g().Notify.info("The search bar cannot be empty. Please type any criteria in the search bar."),E=1;var e=i.get("search");c({search:e.trim(),page:1}),L(e.trim())},handleSearchInputChange:function(n){var e=n.target.value;c({search:e,page:E})},searchText:null!==(t=i.get("search"))&&void 0!==t?t:""}),T&&(0,k.jsx)("h3",{children:F}),0!==Z.length&&(0,k.jsx)(y.Z,{location:r,movieList:Z,paginationPage:E,totalPages:_.current,onLoadNextPage:function(){c({search:T,page:E+=1})},onLoadPreviousPage:function(){c({search:T,page:E-=1})},onToStartPage:function(){E=1,c({search:T,page:1})}})]})}},3714:function(n,e,t){t.d(e,{r:function(){return u}});var r=t(5861),a=t(4687),o=t.n(a),i=t(1686),c=t.n(i),s=t(1243);function u(n){return d.apply(this,arguments)}function d(){return d=(0,r.Z)(o().mark((function n(e){var t,r,a,i,u=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=u.length>1&&void 0!==u[1]?u[1]:1,r=u.length>2&&void 0!==u[2]?u[2]:"",n.prev=2,a="https://api.themoviedb.org/3"+e+"?api_key=".concat("a1d23687457ad2294666771e745dbcef"),r&&(a+="&query=".concat(r.trim())),t&&(a+="&page=".concat(t)),n.next=10,s.Z.get(a);case 10:return i=n.sent,n.abrupt("return",i);case 14:n.prev=14,n.t0=n.catch(2),c().Notify.failure(n.t0.message);case 17:case"end":return n.stop()}}),n,null,[[2,14]])}))),d.apply(this,arguments)}}}]);
//# sourceMappingURL=619.4b0ca81b.chunk.js.map