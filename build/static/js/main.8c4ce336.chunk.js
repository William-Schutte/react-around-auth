(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/header-logo.8f7611ae.svg"},28:function(e,t,a){e.exports=a(39)},33:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),s=a.n(o),i=a(6);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(33);var l=a(26),c=a(8),u=a(9),d=a(2),m=a(11),h=a(10),p=a(1),f=r.a.createContext();var b=function(e){var t=r.a.useContext(f),a=e.card.owner._id===t._id,n="card__delete-button ".concat(a?"card__delete-button_visible":"card__delete-button_hidden"),o=e.card.likes.some((function(e){return e._id===t._id})),s="card__fav-button ".concat(o&&"card__fav-button_active");return r.a.createElement("li",{className:"card"},r.a.createElement("div",{className:"card__image",style:{backgroundImage:"url(".concat(e.card.link,")")},onClick:function(){e.onCardClick(e.card)}}),r.a.createElement("button",{type:"button","aria-label":"Card Delete Button",className:n,onClick:function(){e.onCardDelete(e.card)}}),r.a.createElement("div",{className:"card__overlay"},r.a.createElement("h2",{className:"card__name"},e.card.name),r.a.createElement("div",{className:"card__like-column"},r.a.createElement("button",{type:"button","aria-label":"Card Favorite Button",className:s,onClick:function(){e.onCardLike(e.card)}}),r.a.createElement("p",{className:"card__like-count"},e.card.likes.length))))},g=a(24),E=a.n(g);var _=function(e){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{className:"header__logo",src:E.a,alt:"Around the U.S. Logo"}),e.linkText&&r.a.createElement(i.b,{className:"header__link btn-animate",to:e.linkTo},e.linkText),e.userEmail&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"header__link"},e.userEmail),r.a.createElement(i.b,{className:"header__sign-out btn-animate",onClick:function(t){localStorage.removeItem("jwt"),e.setLoggedIn({loggedIn:!1,email:null})},to:"/"},"Log Out")))};var v=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__copyright"},"\xa92020 William Schutte. Around the U.S."))};var C=function(e){var t=r.a.useContext(f);return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{userEmail:e.userEmail,setLoggedIn:e.setLoggedIn}),r.a.createElement("main",{className:"content"},r.a.createElement("section",{className:"profile"},r.a.createElement("button",{type:"button",className:"profile__pic-button",onClick:e.onEditAvatar}),r.a.createElement("div",{className:"profile__picture",style:{backgroundImage:"url(".concat(t.avatar,")")},alt:"My Profile Pic"}),r.a.createElement("div",{className:"profile__info"},r.a.createElement("h1",{className:"profile__name"},t.name),r.a.createElement("p",{className:"profile__occupation"},t.about)),r.a.createElement("button",{type:"button","aria-label":"Edit Profile Button",className:"profile__edit-button btn-animate",onClick:e.onEditProfile}),r.a.createElement("button",{type:"button","aria-label":"Add Card Button",className:"profile__add-button btn-animate",onClick:e.onAddPlace})),r.a.createElement("section",{className:"cards"},r.a.createElement("ul",{className:"cards__container"},e.cards.map((function(t){return r.a.createElement(b,{key:t._id,card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete,onClose:e.onClose})}))))),r.a.createElement(v,null))};var k=function(e){return r.a.createElement("form",{className:"form ".concat(e.name," ").concat(e.isOpen&&"popup-opened"),name:e.name,onSubmit:e.onSubmit},r.a.createElement("div",{className:"form__container"},r.a.createElement("h2",{className:"form__title"},e.title),e.children,r.a.createElement("button",{type:"submit",className:"form__save-button btn-animate"},e.btnText),r.a.createElement("button",{type:"button","aria-label":"Close Form Button",className:"form__exit-button btn-animate",onClick:e.onClose})))};var O=function(e){var t=e.card,a=e.onClose;return r.a.createElement("div",{className:"picture ".concat(t&&"popup-opened")},r.a.createElement("div",{className:"picture__column"},r.a.createElement("img",{className:"picture__img",src:t?t.link:"",alt:t?t.name:""}),r.a.createElement("h2",{className:"picture__title"},t&&t.name),r.a.createElement("button",{type:"button","aria-label":"Close Picture Button",className:"form__exit-button btn-animate",onClick:a})))},y=new(function(){function e(t){Object(c.a)(this,e),this.options=t}return Object(u.a)(e,[{key:"getUserInfo",value:function(){return fetch("".concat(this.options.baseUrl,"/users/me"),{headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"patchUserInfo",value:function(e){var t=e.name,a=e.about;return fetch("".concat(this.options.baseUrl,"/users/me"),{method:"PATCH",headers:this.options.headers,body:JSON.stringify({name:t,about:a})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"patchUserPic",value:function(e){var t=e.avatar;return fetch("".concat(this.options.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.options.headers,body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this.options.baseUrl,"/cards"),{headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"addNewCard",value:function(e){var t=e.name,a=e.link;return fetch("".concat(this.options.baseUrl,"/cards"),{method:"POST",headers:this.options.headers,body:JSON.stringify({name:t,link:a})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this.options.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"likeCard",value:function(e,t){return t?fetch("".concat(this.options.baseUrl,"/cards/likes/").concat(e._id),{method:"DELETE",headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})):fetch("".concat(this.options.baseUrl,"/cards/likes/").concat(e._id),{method:"PUT",headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}}]),e}())({baseUrl:"https://around.nomoreparties.co/v1/group-1",headers:{authorization:"b3ddd9c8-cc64-4470-93b1-0840e92522c5","Content-Type":"application/json"}}),N=a(13);var j=function(e){var t=r.a.useContext(f);r.a.useEffect((function(){s(t.name),u(t.about)}),[t]);var a=r.a.useState(t.name),n=Object(N.a)(a,2),o=n[0],s=n[1],i=r.a.useState(t.about),l=Object(N.a)(i,2),c=l[0],u=l[1];return r.a.createElement(k,{name:"form-edit",title:"Edit profile",isOpen:e.isOpen,btnText:"Save",onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:o,about:c}),e.onClose()}},r.a.createElement("label",{className:"form__input-field"},r.a.createElement("input",{id:"form-name",name:"primary",className:"form__name form__input",type:"text",value:o,onChange:function(e){s(e.target.value)},required:!0,minLength:"2",maxLength:"40",pattern:"[A-Za-z -]*"}),r.a.createElement("span",{id:"form-name-error",className:"form__error"})),r.a.createElement("label",{className:"form__input-field"},r.a.createElement("input",{id:"form-occupation",name:"secondary",className:"form__occupation form__input secondary",type:"text",value:c,onChange:function(e){u(e.target.value)},required:!0,minLength:"2",maxLength:"200"}),r.a.createElement("span",{id:"form-occupation-error",className:"form__error"})))};var S=function(e){var t=r.a.useContext(f),a=r.a.useRef();return r.a.createElement(k,{name:"form-pic",title:"Change userpic",isOpen:e.isOpen,btnText:"Save",onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateAvatar({avatar:a.current.value}),e.onClose(),a.current.value=null}},r.a.createElement("label",{className:"form__input-field"},r.a.createElement("input",{ref:a,id:"form-name",name:"primary",className:"form__name form__input",type:"url",placeholder:t.avatar,required:!0}),r.a.createElement("span",{id:"form-name-error",className:"form__error"})))};var P=function(e){var t=r.a.useState(null),a=Object(N.a)(t,2),n=a[0],o=a[1],s=r.a.useState(null),i=Object(N.a)(s,2),l=i[0],c=i[1];return r.a.createElement(k,{name:"form-add",title:"New place",isOpen:e.isOpen,btnText:"Create",onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:n,link:l}),e.onClose()}},r.a.createElement("label",{className:"form__input-field"},r.a.createElement("input",{id:"form-place",name:"primary",className:"form__place form__input",type:"text",placeholder:"Title",value:n,onChange:function(e){o(e.target.value)},required:!0,minLength:"1",maxLength:"30"}),r.a.createElement("span",{id:"form-place-error",className:"form__error"})),r.a.createElement("label",{className:"form__input-field"},r.a.createElement("input",{id:"form-url",name:"secondary",className:"form__url form__input",type:"url",placeholder:"Image link",value:l,onChange:function(e){c(e.target.value)},required:!0}),r.a.createElement("span",{id:"form-url-error",className:"form__error"})))},A=a(27),U=function(e){var t=e.component,a=Object(A.a)(e,["component"]);return r.a.createElement(p.b,null,(function(){return a.loggedIn?r.a.createElement(t,a):r.a.createElement(p.a,{to:"/signin"})}))},I=a(17),w="https://register.nomoreparties.co",L=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={email:"",password:""},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n}return Object(u.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(I.a)({},a,n))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state;(function(e,t){return fetch("".concat(w,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})}).then((function(e){if(201===e.status)return e.json();throw new Error("Unsuccessful registration")})).catch((function(e){return console.log(e)}))})(a.email,a.password).then((function(e){e?(t.props.onClick(!0),t.setState({email:"",password:""},(function(){t.props.history.push("/signin")}))):t.props.onClick(!1)}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{linkText:"Log In",linkTo:"/signin"}),r.a.createElement("main",{className:"content"},r.a.createElement("form",{className:"register"},r.a.createElement("h2",{className:"register__header"},"Sign Up"),r.a.createElement("input",{name:"email",className:"register__input",type:"text",value:this.state.email,onChange:this.handleChange,placeholder:"Email"}),r.a.createElement("input",{name:"password",className:"register__input",type:"password",value:this.state.password,onChange:this.handleChange,placeholder:"Password"}),r.a.createElement("button",{className:"register__button btn-animate",onClick:this.handleSubmit},"Sign Up"),r.a.createElement(i.b,{to:"/signin",className:"register__link btn-animate"},"Already a member? Log in here!"))))}}]),a}(r.a.Component),T=Object(p.g)(L),x=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={email:"",password:""},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n}return Object(u.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(I.a)({},a,n))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.email,r=a.password;(function(e,t){return fetch("".concat(w,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})}).then((function(e){if(200===e.status)return e.json();throw new Error("Unsuccessful login")})).then((function(e){return localStorage.setItem("jwt",e.token),!0})).catch((function(e){return console.log(e)}))})(n,r).then((function(e){e?t.setState({email:"",password:""},(function(){t.props.setLoggedIn({loggedIn:!0,email:n}),t.props.history.push("/")})):t.props.onClick(!1)}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{linkText:"Sign Up",linkTo:"/signup"}),r.a.createElement("main",{className:"content"},r.a.createElement("form",{className:"register"},r.a.createElement("h2",{className:"register__header"},"Log In"),r.a.createElement("input",{name:"email",className:"register__input",type:"text",value:this.state.email,onChange:this.handleChange,placeholder:"Email"}),r.a.createElement("input",{name:"password",className:"register__input",type:"password",value:this.state.password,onChange:this.handleChange,placeholder:"Password"}),r.a.createElement("button",{className:"register__button btn-animate",onClick:this.handleSubmit},"Log In"),r.a.createElement(i.b,{to:"/signup",className:"register__link btn-animate"},"Not a member yet? Sign up here!"))))}}]),a}(r.a.Component),D=Object(p.g)(x),B=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"form ".concat(this.props.isOpen&&"popup-opened")},r.a.createElement("div",{className:"form__container"},r.a.createElement("div",{className:"form__tool-icon ".concat(this.props.success?"form__tool-icon_success":"form__tool-icon_failure")}),r.a.createElement("h2",{className:"form__tool-tip"},this.props.success?"Success! You have now been registered.":"Oops, something went wrong! Please try again."),r.a.createElement("button",{type:"button","aria-label":"Close Form Button",className:"form__exit-button btn-animate",onClick:this.props.onClose})))}}]),a}(r.a.Component),F=Object(p.g)(B),J=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={isLoggedIn:null,userEmail:"",currentUser:{},isEditProfileOpen:!1,isAddPlaceOpen:!1,isEditAvatarOpen:!1,isInfoToolTipOpen:!1,regSuccess:!1,selectedCard:null,cards:[]},e.handleEditAvatarClick=e.handleEditAvatarClick.bind(Object(d.a)(e)),e.handleEditProfileClick=e.handleEditProfileClick.bind(Object(d.a)(e)),e.handleAddPlaceClick=e.handleAddPlaceClick.bind(Object(d.a)(e)),e.handleAuthRegClick=e.handleAuthRegClick.bind(Object(d.a)(e)),e.closeAllPopups=e.closeAllPopups.bind(Object(d.a)(e)),e.handleCardClick=e.handleCardClick.bind(Object(d.a)(e)),e.handleUpdateUser=e.handleUpdateUser.bind(Object(d.a)(e)),e.handleUpdateAvatar=e.handleUpdateAvatar.bind(Object(d.a)(e)),e.handleCardLike=e.handleCardLike.bind(Object(d.a)(e)),e.handleCardDelete=e.handleCardDelete.bind(Object(d.a)(e)),e.handleAddPlace=e.handleAddPlace.bind(Object(d.a)(e)),e.handleSetLoggedIn=e.handleSetLoggedIn.bind(Object(d.a)(e)),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;y.getUserInfo().then((function(t){e.setState({currentUser:t})})).catch((function(e){console.log(e)})),y.getInitialCards().then((function(t){e.setState({cards:t})})).catch((function(e){console.log(e)}));var t,a=localStorage.getItem("jwt");a&&(t=a,fetch("".concat(w,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){if(200===e.status)return e.json()}))).then((function(t){t&&e.setState({isLoggedIn:!0,userEmail:t.data.email})})).then((function(){e.props.history.push("/")}))}},{key:"handleSetLoggedIn",value:function(e){var t=e.loggedIn,a=e.email;this.setState({isLoggedIn:t,userEmail:a})}},{key:"handleEditAvatarClick",value:function(){this.setState({isEditAvatarOpen:!0})}},{key:"handleEditProfileClick",value:function(){this.setState({isEditProfileOpen:!0})}},{key:"handleAddPlaceClick",value:function(){this.setState({isAddPlaceOpen:!0})}},{key:"handleAuthRegClick",value:function(e){this.setState({regSuccess:e,isInfoToolTipOpen:!0})}},{key:"closeAllPopups",value:function(){this.setState({isEditAvatarOpen:!1,isEditProfileOpen:!1,isAddPlaceOpen:!1,isInfoToolTipOpen:!1,selectedCard:null})}},{key:"handleCardClick",value:function(e){this.setState({selectedCard:e})}},{key:"handleUpdateUser",value:function(e){var t=this;y.patchUserInfo(e).then((function(e){t.setState({currentUser:e})})).catch((function(e){console.log(e)}))}},{key:"handleUpdateAvatar",value:function(e){var t=this;y.patchUserPic(e).then((function(e){t.setState({currentUser:e})})).catch((function(e){console.log(e)}))}},{key:"handleCardLike",value:function(e){var t=this,a=e.likes.some((function(e){return e._id===t.state.currentUser._id}));y.likeCard(e,a).then((function(a){var n=t.state.cards.map((function(t){return t._id===e._id?a:t}));t.setState({cards:n})})).catch((function(e){console.log(e)}))}},{key:"handleCardDelete",value:function(e){var t=this;y.deleteCard(e._id).then((function(){var a=t.state.cards.filter((function(t){return t._id!==e._id}));t.setState({cards:a})}))}},{key:"handleAddPlace",value:function(e){var t=this;y.addNewCard(e).then((function(e){var a=[].concat(Object(l.a)(t.state.cards),[e]);t.setState({cards:a})}))}},{key:"render",value:function(){return r.a.createElement(f.Provider,{value:this.state.currentUser},r.a.createElement(p.d,null,r.a.createElement(U,{exact:!0,path:"/",component:C,loggedIn:this.state.isLoggedIn,userEmail:this.state.userEmail,onEditProfile:this.handleEditProfileClick,onAddPlace:this.handleAddPlaceClick,onEditAvatar:this.handleEditAvatarClick,onCardClick:this.handleCardClick,onClose:this.closeAllPopups,cards:this.state.cards,onCardLike:this.handleCardLike,onCardDelete:this.handleCardDelete,setLoggedIn:this.handleSetLoggedIn}),r.a.createElement(p.b,{path:"/signup"},r.a.createElement(T,{onClick:this.handleAuthRegClick})),r.a.createElement(p.b,{path:"/signin"},r.a.createElement(D,{onClick:this.handleAuthRegClick,setLoggedIn:this.handleSetLoggedIn})),r.a.createElement(p.b,{path:"*"},r.a.createElement(p.a,{to:"/signin"}))),r.a.createElement(F,{isOpen:this.state.isInfoToolTipOpen,success:this.state.regSuccess,onClose:this.closeAllPopups}),r.a.createElement(j,{isOpen:this.state.isEditProfileOpen,onClose:this.closeAllPopups,onUpdateUser:this.handleUpdateUser}),r.a.createElement(S,{isOpen:this.state.isEditAvatarOpen,onClose:this.closeAllPopups,onUpdateAvatar:this.handleUpdateAvatar}),r.a.createElement(P,{isOpen:this.state.isAddPlaceOpen,onClose:this.closeAllPopups,onAddPlace:this.handleAddPlace}),r.a.createElement(k,{name:"form-delete",title:"Are you sure?",isOpen:null,btnText:"Yes",onClose:this.closeAllPopups}),r.a.createElement(O,{card:this.state.selectedCard,onClose:this.closeAllPopups}))}}]),a}(r.a.Component),R=Object(p.g)(J);s.a.render(r.a.createElement(i.a,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.8c4ce336.chunk.js.map