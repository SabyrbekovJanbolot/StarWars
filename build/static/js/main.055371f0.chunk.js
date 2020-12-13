(this.webpackJsonpstar_db=this.webpackJsonpstar_db||[]).push([[0],{29:function(e,t,r){},36:function(e,t,r){},37:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(1),i=r(22),s=r.n(i),c=r(7),o=r(10),u=r(14),A=r(13),l=(r(29),r(12)),h=function(e){var t=e.onServiceChange;return Object(n.jsxs)("div",{className:"header d-flex",children:[Object(n.jsx)("h2",{children:Object(n.jsx)(l.b,{to:"/",children:"Star Wars"})}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(l.b,{to:"/characters/",children:"Characters"})}),Object(n.jsx)("li",{children:Object(n.jsx)(l.b,{to:"/planets/",children:"Planets"})}),Object(n.jsx)("li",{children:Object(n.jsx)(l.b,{to:"/starships/",children:"Starships"})}),Object(n.jsx)("button",{className:"btn btn-success btn-sm",onClick:t,children:"Change API"})]})]})},j=r(2),d=r.n(j),p=r(6),b=function(){function e(){var t=this;Object(c.a)(this,e),this.BASEURL="https://swapi.dev/api",this.BASEIMAGEURL="https://starwars-visualguide.com//assets/img",this.getData=function(){var e=Object(p.a)(d.a.mark((function e(r){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t.BASEURL,"/").concat(r));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(r,", status: ").concat(n.status));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllCharacters=Object(p.a)(d.a.mark((function e(){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getData("people/");case 2:return r=e.sent,e.abrupt("return",r.results.map(t._transformPersonData));case 4:case"end":return e.stop()}}),e)}))),this.getPerson=function(){var e=Object(p.a)(d.a.mark((function e(r){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getData("people/".concat(r));case 2:return n=e.sent,e.abrupt("return",t._transformPersonData(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllPlanets=Object(p.a)(d.a.mark((function e(){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getData("planets/");case 2:return r=e.sent,e.abrupt("return",r.results.map(t._transformPlanetData));case 4:case"end":return e.stop()}}),e)}))),this.getPlanet=function(){var e=Object(p.a)(d.a.mark((function e(r){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getData("planets/".concat(r));case 2:return n=e.sent,e.abrupt("return",t._transformPlanetData(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllStarships=Object(p.a)(d.a.mark((function e(){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getData("starships/");case 2:return r=e.sent,e.abrupt("return",r.results.map(t._transformStarshipData));case 4:case"end":return e.stop()}}),e)}))),this.getStarship=function(){var e=Object(p.a)(d.a.mark((function e(r){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getData("starships/".concat(r));case 2:return n=e.sent,e.abrupt("return",t._transformStarshipData(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getPersonImage=function(e){var r=e.id;return"".concat(t.BASEIMAGEURL,"/characters/").concat(r,".jpg")},this.getStarshipImage=function(e){var r=e.id;return"".concat(t.BASEIMAGEURL,"/starships/").concat(r,".jpg")},this.getPlanetImage=function(e){var r=e.id;return"".concat(t.BASEIMAGEURL,"/planets/").concat(r,".jpg")},this._transformPlanetData=function(e){var r=e.name,n=e.population,a=e.rotation_period,i=e.diameter;return{id:t._getId(e),name:r,population:n,rotationPeriod:a,diameter:i}},this._transformPersonData=function(e){var r=e.name,n=e.gender,a=e.birth_year,i=e.eye_color;return{id:t._getId(e),name:r,gender:n,birthYear:a,eyeColor:i}},this._transformStarshipData=function(e){var r=e.name,n=e.model,a=e.manufacturer,i=e.cost_in_credits,s=e.length,c=e.crew,o=e.passengers,u=e.cargo_capacity;return{id:t._getId(e),name:r,model:n,manufacturer:a,costInCredits:i,length:s,crew:c,passengers:o,cargoCapacity:u}}}return Object(o.a)(e,[{key:"_getId",value:function(e){return e.url.match(/\/([0-9]*)\/$/)[1]}}]),e}(),f=(r(36),function(){return Object(n.jsx)("div",{className:"spinner-css",children:Object(n.jsxs)("div",{className:"double-ring",children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]})})}),x=function(){return Object(n.jsxs)("div",{className:"error",children:[Object(n.jsx)("img",{className:"error-item error-img",src:"data:image/png;base64,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",alt:"error icon"}),Object(n.jsx)("span",{className:"error-item boom",children:"BOOM!"}),Object(n.jsx)("span",{className:"error-item",children:"Something has gone terribly wrong"}),Object(n.jsx)("span",{className:"error-item",children:"(but we already sent driods to fix it :)"})]})},m=function(e){Object(u.a)(r,e);var t=Object(A.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={hasError:!1},e}return Object(o.a)(r,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(n.jsx)(x,{}):this.props.children}}]),r}(a.Component),g=function(e){var t=e.planet,r=t.name,a=t.population,i=t.rotationPeriod,s=t.diameter,c=t.id;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("img",{src:"https://starwars-visualguide.com//assets/img/planets/".concat(c,".jpg"),className:"planet-image",alt:"planet-image"}),Object(n.jsxs)("div",{className:"planet-info",children:[Object(n.jsx)("h3",{children:r}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:["Population : ",a]}),Object(n.jsxs)("li",{children:["Rotation Period : ",i]}),Object(n.jsxs)("li",{children:["Diameter : ",s]})]})]})]})},v=function(e){Object(u.a)(r,e);var t=Object(A.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={planet:{},loading:!0,hasError:!1},e.swapiService=new b,e.onPlanetLoaded=function(t){e.setState({planet:t,loading:!1})},e.updatePlanet=function(){var t=Math.floor(17*Math.random()+2);e.swapiService.getPlanet(t).then(e.onPlanetLoaded).catch(e.onError)},e}return Object(o.a)(r,[{key:"componentDidMount",value:function(){var e=this.props.updateInterval;this.updatePlanet(),this.interval=setInterval(this.updatePlanet,e)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"componentDidCatch",value:function(){this.setState({hasError:!0,loading:!1})}},{key:"render",value:function(){var e=this.state,t=e.planet,r=e.loading,a=e.hasError,i=r?Object(n.jsx)(f,{}):null,s=r||a?null:Object(n.jsx)(g,{planet:t});return r?Object(n.jsx)(f,{}):Object(n.jsx)(m,{children:Object(n.jsxs)("div",{className:"random-planet",children:[i,s]})})}}]),r}(a.Component);v.defaultProps={updateInterval:1e4};var O=Object(a.createContext)(),D=O.Provider,R=O.Consumer,E=r.p+"static/media/planet.6b95258e.jpg",N=r.p+"static/media/starship.ea2ea9b3.jpg",P=r.p+"static/media/person.dff54c69.jpg",U=function e(){var t=this;Object(c.a)(this,e),this._characters=[{id:1,name:"Luke TEST",eyeColor:"brown",gender:"male",birthYear:"2300"}],this._starships=[{id:2,name:"Type-54 TEST",model:"t-54",costInCredits:"121212",length:"121212"}],this._planets=[{id:1,name:"Pluton TEST",population:"121212",rotationPeriod:"121212",diameter:"121212"}],this.getAllCharacters=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._characters);case 1:case"end":return e.stop()}}),e)}))),this.getPerson=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._characters[0]);case 1:case"end":return e.stop()}}),e)}))),this.getAllStarships=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._starships);case 1:case"end":return e.stop()}}),e)}))),this.getStarship=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._starships[0]);case 1:case"end":return e.stop()}}),e)}))),this.getAllPlanets=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._planets);case 1:case"end":return e.stop()}}),e)}))),this.getPlanet=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._planets[0]);case 1:case"end":return e.stop()}}),e)}))),this.getPersonImage=function(){return P},this.getStarshipImage=function(){return N},this.getPlanetImage=function(){return E}},Q=function(e){var t=e.children;return Object(n.jsxs)("div",{className:"row mb2 mt-5",children:[Object(n.jsx)("div",{className:"col-md-6",children:t[0]}),Object(n.jsx)("div",{className:"col-md-6",children:t[1]})]})},q=r(5),B=function(e){return function(t){Object(u.a)(a,t);var r=Object(A.a)(a);function a(){var e;Object(c.a)(this,a);for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return(e=r.call.apply(r,[this].concat(n))).state={itemList:null,loading:!0},e.onItemsLoaded=function(t){e.setState({itemList:t,loading:!1})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.update()}},{key:"componentDidUpdate",value:function(e){this.props.getData!==e.getData&&this.update()}},{key:"update",value:function(){this.setState({loading:!0}),this.props.getData().then(this.onItemsLoaded)}},{key:"render",value:function(){var t=this.state,r=t.itemList,a=t.loading,i=a?Object(n.jsx)(f,{}):null,s=a?null:Object(n.jsx)(e,Object(q.a)(Object(q.a)({},this.props),{},{itemList:r}));return!r||a?Object(n.jsx)(f,{}):Object(n.jsxs)(n.Fragment,{children:[i,s]})}}]),a}(a.Component)},G=function(e){return function(t){return function(r){return Object(n.jsx)(t,Object(q.a)(Object(q.a)({},r),{},{children:e}))}}},I=function(e){return function(t){return function(r){return Object(n.jsx)(R,{children:function(a){var i=e(a);return Object(n.jsx)(t,Object(q.a)(Object(q.a)({},r),i))}})}}},w=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}},Y=function(e){var t=e.onItemSelected,r=e.itemList,a=e.children,i=r.map((function(e){var r=e.id,i=a(e);return Object(n.jsx)("li",{className:"list-group-item",onClick:function(){return t(r)},children:i},r)}));return Object(n.jsx)("ul",{className:"item-list list group",children:i})};Y.defaultProps={onItemSelected:function(){}};var M=function(e){var t=e.name;return"".concat(t)},S=w(I((function(e){return{getData:e.getAllCharacters}})),B,G(M))(Y),F=w(I((function(e){return{getData:e.getAllPlanets}})),B,G(M))(Y),T=w(I((function(e){return{getData:e.getAllStarships}})),B,G(M))(Y),W=function(e){var t=e.item,r=e.field,a=e.label;return Object(n.jsxs)("li",{children:[a," : ",t[r]]})},V=function(e){var t=e.item,r=e.image,i=e.childs,s=t.name;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("img",{src:r,alt:"item-image"}),Object(n.jsxs)("div",{className:"item-info",children:[Object(n.jsx)("h4",{children:s}),Object(n.jsx)("ul",{children:a.Children.map(i,(function(e){return Object(a.cloneElement)(e,{item:t})}))})]})]})},C=function(e){Object(u.a)(r,e);var t=Object(A.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={item:null,image:null,loading:!0},e.onItemLoaded=function(t){e.setState({item:t,image:e.props.getImageUrl(t),loading:!1})},e}return Object(o.a)(r,[{key:"componentDidMount",value:function(){this.updateItem()}},{key:"componentDidUpdate",value:function(e){e.itemId===this.props.itemId&&this.props.getData===e.getData&&this.props.image===e.image||this.updateItem()}},{key:"updateItem",value:function(){var e=this.props,t=e.itemId,r=e.getData;this.setState({loading:!0}),t&&r(t).then(this.onItemLoaded)}},{key:"render",value:function(){var e=this.state,t=e.item,r=e.loading,a=e.image,i=r?Object(n.jsx)(f,{}):null,s=r?null:Object(n.jsx)(V,{item:t,image:a,childs:this.props.children});return r?Object(n.jsx)(f,{}):Object(n.jsxs)("div",{className:"item-details card",children:[i,s]})}}]),r}(a.Component),k=function(e){return Object(n.jsxs)(C,Object(q.a)(Object(q.a)({},e),{},{children:[Object(n.jsx)(W,{field:"birthYear",label:"BirthYear"}),Object(n.jsx)(W,{field:"eyeColor",label:"Eye Color"}),Object(n.jsx)(W,{field:"gender",label:"Gender"})]}))};k.defaultProps={itemId:1};var H=I((function(e){var t=e.getPersonImage;return{getData:e.getPerson,getImageUrl:t}}))(k),X=function(e){return Object(n.jsxs)(C,Object(q.a)(Object(q.a)({},e),{},{children:[Object(n.jsx)(W,{field:"model",label:"Model"}),Object(n.jsx)(W,{field:"costInCredits",label:"Cost"}),Object(n.jsx)(W,{field:"length",label:"Length"})]}))};X.defaultProps={itemId:2};var L=I((function(e){var t=e.getStarshipImage;return{getData:e.getStarship,getImageUrl:t}}))(X),y=I((function(e){var t=e.getPlanetImage;return{getData:e.getPlanet,getImageUrl:t}}))((function(e){return Object(n.jsxs)(C,Object(q.a)(Object(q.a)({},e),{},{children:[Object(n.jsx)(W,{field:"population",label:"Population"}),Object(n.jsx)(W,{field:"diameter",label:"Diameter"}),Object(n.jsx)(W,{field:"rotationPeriod",label:"Rotation period"})]}))})),J=r(3),z=Object(J.f)((function(e){var t=e.history,r=e.match.params.id;return Object(n.jsx)(m,{children:Object(n.jsxs)(Q,{children:[Object(n.jsx)(m,{children:Object(n.jsx)(S,{onItemSelected:function(e){return t.push(e)}})}),Object(n.jsx)(m,{children:Object(n.jsx)(H,{itemId:r})})]})})})),K=Object(J.f)((function(e){var t=e.history;return Object(n.jsx)(m,{children:Object(n.jsx)(m,{children:Object(n.jsx)(F,{onItemSelected:function(e){return t.push(e)}})})})})),Z=Object(J.f)((function(e){var t=e.history,r=e.match.params.id;return Object(n.jsx)(m,{children:Object(n.jsxs)(Q,{children:[Object(n.jsx)(m,{children:Object(n.jsx)(T,{onItemSelected:function(e){return t.push(e)}})}),Object(n.jsx)(m,{children:Object(n.jsx)(L,{itemId:r})})]})})})),_=function(e){Object(u.a)(r,e);var t=Object(A.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={hasError:!1,service:new b},e.onServiceChange=function(){e.setState((function(e){return{service:new(e.service instanceof U?b:U)}}))},e}return Object(o.a)(r,[{key:"render",value:function(){var e=Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h2",{className:"mt-4",children:"Welcome to Star Wars!"}),Object(n.jsx)("p",{children:"This site was created just to learn react"})]}),t=Object(n.jsx)("h1",{className:"mt-5",children:"Page not Found"});return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)(m,{children:Object(n.jsx)(D,{value:this.state.service,children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(h,{onServiceChange:this.onServiceChange}),Object(n.jsx)(v,{}),Object(n.jsxs)(J.c,{children:[Object(n.jsx)(J.a,{path:"/",render:function(){return e},exact:!0}),Object(n.jsx)(J.a,{path:"/characters/:id?",component:z}),Object(n.jsx)(J.a,{path:"/starships/:id?",component:Z}),Object(n.jsx)(J.a,{path:"/planets",exact:!0,component:K}),Object(n.jsx)(J.a,{path:"/planets/:id",render:function(e){var t=e.match.params.id;return Object(n.jsx)(y,{itemId:t})}}),Object(n.jsx)(J.a,{render:function(){return t}})]})]})})})})}}]),r}(a.Component),$=document.querySelector("#root");s.a.render(Object(n.jsx)(_,{}),$)}},[[37,1,2]]]);
//# sourceMappingURL=main.055371f0.chunk.js.map