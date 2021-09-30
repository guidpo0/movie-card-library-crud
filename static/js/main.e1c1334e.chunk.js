(this["webpackJsonpsd-0x-block14-project-movie-card-library-crud"]=this["webpackJsonpsd-0x-block14-project-movie-card-library-crud"]||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/Kingsglaive_Final_Fantasy_XV.917daac0.jpg"},25:function(e,t,a){e.exports=a.p+"static/media/Final_Fantasy_Spirits_Within.0d8b80ec.jpg"},26:function(e,t,a){e.exports=a.p+"static/media/Ghost_In_The_Shell_2_0.7d6b4f9c.jpg"},27:function(e,t,a){e.exports=a.p+"static/media/Appleseed_Alpha.498ae78a.jpg"},28:function(e,t,a){e.exports=a.p+"static/media/Resident_Evil_Vendetta.77c10ef3.jpg"},30:function(e,t,a){e.exports=a(48)},35:function(e,t,a){},36:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(21),o=a.n(r),l=(a(35),a(11)),c=a(1),s=a(3),u=a(4),m=a(6),d=a(5),h=(a(36),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.movie,t=e.title,a=e.storyline,n=e.id,r=e.imagePath;return i.a.createElement("div",{"data-testid":"movie-card",className:"movie-card"},i.a.createElement("img",{src:r,alt:t}),i.a.createElement("h3",null,t),i.a.createElement("p",null,a),i.a.createElement(l.b,{to:"/movies/".concat(n)},"VER DETALHES"))}}]),a}(i.a.Component)),v=(a(42),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"loading"},"Carregando...")}}]),a}(n.Component)),p=a(29),f=a(12),b=a(24),g=a.n(b),y=a(25),E=a.n(y),O=a(26),j=a.n(O),k=a(27),S=a.n(k),N=a(28),I=a.n(N),_=[{id:1,title:"Kingsglaive",subtitle:"Final Fantasy XV",storyline:"King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",rating:4.5,imagePath:g.a,bookmarked:!0,genre:"action"},{id:2,title:"Final Fantasy",subtitle:"Spirits Within",storyline:"A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",rating:4.5,imagePath:E.a,bookmarked:!1,genre:"fantasy"},{id:3,title:"Ghost In The Shell",subtitle:"Ghost In The Shell",storyline:"A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",rating:5,imagePath:j.a,bookmarked:!1,genre:"comedy"},{id:4,title:"Appleseed Alpha",subtitle:"Appleseed Alpha",storyline:"A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",rating:3.8,imagePath:S.a,bookmarked:!0,genre:"action"},{id:5,title:"Resident Evil",subtitle:"Vendetta",storyline:"Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",rating:4.2,imagePath:I.a,bookmarked:!0,genre:"fantasy"}];localStorage.setItem("movies",JSON.stringify(_));var C=function(){return JSON.parse(localStorage.getItem("movies"))},w=function(e){return localStorage.setItem("movies",JSON.stringify(e))},A=function(e){return function(t){setTimeout((function(){t(e)}),2e3)}},F=function(e){var t=C().find((function(t){return t.id===parseInt(e,10)}));return new Promise((function(e){A(t)(e)}))},P=(a(43),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={movies:[],status:"loading"},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;new Promise((function(e){var t=C();A(t)(e)})).then((function(t){return e.setState((function(){return{movies:t,status:"ready"}}))}))}},{key:"render",value:function(){var e=this.state,t=e.movies,a=e.status;return i.a.createElement("div",{className:"movie-list-container"},"loading"===a?i.a.createElement(v,null):i.a.createElement("div",{"data-testid":"movie-list",className:"movie-list"},t.map((function(e){return i.a.createElement(h,{key:e.title,movie:e})}))),i.a.createElement(l.b,{className:"add-card-link",to:"/movies/new"},"ADICIONAR CART\xc3O"))}}]),a}(n.Component)),x=a(10),M=a(15),R=(a(44),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state=Object(f.a)({},e.movie),n.handleSubmit=n.handleSubmit.bind(Object(x.a)(n)),n}return Object(u.a)(a,[{key:"handleSubmit",value:function(){(0,this.props.onSubmit)(this.state)}},{key:"updateMovie",value:function(e,t){this.setState(Object(M.a)({},e,t))}},{key:"renderTitleInput",value:function(){var e=this,t=this.state.title;return i.a.createElement("label",{className:"form-label",htmlFor:"movie_title"},i.a.createElement("p",null,"T\xedtulo"),i.a.createElement("input",{id:"movie_title",type:"text",className:"validate",value:t,onChange:function(t){return e.updateMovie("title",t.target.value)}}))}},{key:"renderSubtitleInput",value:function(){var e=this,t=this.state.subtitle;return i.a.createElement("label",{className:"form-label",htmlFor:"movie_subtitle"},i.a.createElement("p",null,"Subt\xedtulo"),i.a.createElement("input",{id:"movie_subtitle",type:"text",value:t,onChange:function(t){return e.updateMovie("subtitle",t.target.value)}}))}},{key:"renderImagePathInput",value:function(){var e=this,t=this.state.imagePath;return i.a.createElement("label",{className:"form-label",htmlFor:"movie_image"},i.a.createElement("p",null,"Link da Imagem"),i.a.createElement("input",{id:"movie_image",type:"text",value:t,onChange:function(t){return e.updateMovie("imagePath",t.target.value)}}))}},{key:"renderStorylineInput",value:function(){var e=this,t=this.state.storyline;return i.a.createElement("label",{className:"form-label",htmlFor:"movie_storyline"},i.a.createElement("p",null,"Sinopse"),i.a.createElement("textarea",{id:"movie_storyline",value:t,onChange:function(t){return e.updateMovie("storyline",t.target.value)}}))}},{key:"renderGenreSelection",value:function(){var e=this,t=this.state.genre;return i.a.createElement("label",{className:"form-label",htmlFor:"movie_genre"},i.a.createElement("p",null,"G\xeanero"),i.a.createElement("select",{id:"movie_genre",value:t,onChange:function(t){return e.updateMovie("genre",t.target.value)}},i.a.createElement("option",{value:"action"},"A\xe7\xe3o"),i.a.createElement("option",{value:"comedy"},"Com\xe9dia"),i.a.createElement("option",{value:"thriller"},"Suspense"),i.a.createElement("option",{value:"fantasy"},"Fantasia")))}},{key:"renderRatingInput",value:function(){var e=this,t=this.state.rating;return i.a.createElement("label",{className:"form-label",htmlFor:"movie_rating"},i.a.createElement("p",null,"Avalia\xe7\xe3o"),i.a.createElement("input",{id:"movie_rating",type:"number",step:.1,min:0,max:5,value:t,onChange:function(t){return e.updateMovie("rating",t.target.value)}}))}},{key:"renderSubmitButton",value:function(){return i.a.createElement("button",{type:"button",onClick:this.handleSubmit,className:"add-button"},"Salvar")}},{key:"render",value:function(){var e=this.props.title;return i.a.createElement("form",{className:"movie-form-container"},i.a.createElement("h2",{className:"add-title"},e),this.renderTitleInput(),this.renderSubtitleInput(),this.renderImagePathInput(),this.renderStorylineInput(),i.a.createElement("div",{className:"rate-genre-container"},this.renderGenreSelection(),this.renderRatingInput()),this.renderSubmitButton())}}]),a}(i.a.Component)),T=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(x.a)(n)),n}return Object(u.a)(a,[{key:"handleSubmit",value:function(e){var t,a=this.props.history;(t=e,new Promise((function(e){var a=C(),n=a[a.length-1].id+1,i=Object(f.a)(Object(f.a)({},t),{},{id:n});a=[].concat(Object(p.a)(a),[i]),w(a),A("OK")(e)}))).then((function(){return a.push("/")}))}},{key:"render",value:function(){return i.a.createElement("div",{"data-testid":"new-movie"},i.a.createElement(R,{title:"Adicionar Filme",onSubmit:this.handleSubmit}))}}]),a}(n.Component),D=(a(45),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={movie:{},status:"loading"},e.deleteMovie=e.deleteMovie.bind(Object(x.a)(e)),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;F(t).then((function(t){return e.setState({movie:t,status:"ready"})}))}},{key:"deleteMovie",value:function(e){!function(e){var t=C();t=t.filter((function(t){return t.id!==parseInt(e,10)})),w(t),new Promise((function(e){A({status:"OK"})(e)}))}(e)}},{key:"render",value:function(){var e=this,t=this.props.match.params.id,a=this.state,n=a.movie,r=n.title,o=n.storyline,c=n.imagePath,s=n.genre,u=n.rating,m=n.subtitle;return"loading"===a.status?i.a.createElement(v,null):i.a.createElement("div",{"data-testid":"movie-details",className:"movie-details-container"},i.a.createElement("img",{alt:"Movie Cover",src:"../".concat(c)}),i.a.createElement("p",{className:"title"},"Title: ".concat(r)),i.a.createElement("p",{className:"subtitle"},"Subtitle: ".concat(m)),i.a.createElement("p",null,"Storyline: ".concat(o)),i.a.createElement("p",null,"Genre: ".concat(s)),i.a.createElement("p",null,"Rating: ".concat(u)),i.a.createElement("div",{className:"buttons-container"},i.a.createElement(l.b,{to:"/"},"VOLTAR"),i.a.createElement(l.b,{to:"/movies/".concat(t,"/edit")},"EDITAR"),i.a.createElement(l.b,{to:"/",onClick:function(){return e.deleteMovie(t)}},"DELETAR")))}}]),a}(n.Component)),G=(a(46),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={movie:{},status:"loading"},n.handleSubmit=n.handleSubmit.bind(Object(x.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;F(t).then((function(t){return e.setState((function(){return{movie:t,status:"ready"}}))}))}},{key:"handleSubmit",value:function(e){var t=this.props.history;(function(e){return new Promise((function(t){var a=C().map((function(t){return t.id===parseInt(e.id,10)?Object(f.a)(Object(f.a)({},t),e):t}));w(a),A("OK")(t)}))})(e).then((function(){return t.push("/")}))}},{key:"render",value:function(){var e=this.state,t=e.status,a=(e.shouldRedirect,e.movie);return"loading"===t?i.a.createElement(v,null):i.a.createElement("div",{"data-testid":"edit-movie",className:"edit-movie"},i.a.createElement(R,{title:"Editar Filme",movie:a,onSubmit:this.handleSubmit}))}}]),a}(n.Component)),K=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{"data-testid":"404-error"},"P\xe1gina n\xe3o encontrada")}}]),a}(n.Component);a(47);var L=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",null,i.a.createElement("h1",{className:"header-title"},"Movie Cards Library")),i.a.createElement(l.a,null,i.a.createElement(c.c,null,i.a.createElement(c.a,{exact:!0,path:"/",component:P}),i.a.createElement(c.a,{exact:!0,path:"/movies/new",component:T}),i.a.createElement(c.a,{exact:!0,path:"/movies/:id",component:D}),i.a.createElement(c.a,{exact:!0,path:"/movies/:id/edit",component:G}),i.a.createElement(c.a,{path:"",component:K}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.e1c1334e.chunk.js.map