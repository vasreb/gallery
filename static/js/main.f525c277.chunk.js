(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(t,e,n){t.exports=n(36)},25:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){},32:function(t,e,n){},33:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),l=(n(25),n(26),n(27),n(1)),u=n(7),i=n(8),s=n(10),m=n(9),d=n(11),p=(n(32),"GET_PHOTOS_REQUEST"),h="GET_PHOTOS_SUCCESS",b="GET_PHOTOS_ERROR",f="OPEN_MODAL_PHOTO",v="CLOSE_MODAL_PHOTO";function O(t){return function(e){e({type:p}),fetch("https://jsonplaceholder.typicode.com/".concat(t)).then(function(t){return t.json()}).then(function(t){return e({type:h,payload:t})}).catch(function(t){return e({type:b,payload:t})})}}var E=function(t){function e(){return Object(u.a)(this,e),Object(s.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.props,e=t.albumId,n=t.dispatch,a=t.currentAlbumId;return console.log("rerender"),r.a.createElement("div",{className:a===e?"album--selected album":"album",onClick:a!==e?function(){n(O("photos?albumId=".concat(e)))}:function(){}},r.a.createElement("h2",{className:"album__title"},"Album Id: ",e))}}]),e}(r.a.PureComponent);var _=Object(l.b)(function(t){return{currentAlbumId:t.currentAlbumId}},function(t){return{dispatch:t}})(E);function y(t){var e=t.albums.map(function(t){return r.a.createElement("li",{className:"album-list__item",key:t.albumId},r.a.createElement(_,{albumId:t.albumId}))});return r.a.createElement("ul",{className:"album-list"},e)}n(33),n(34);var g=Object(l.b)(function(t){return{dispatch:t}})(function(t){var e=t.title,n=t.url,a=t.thumbnailUrl;return r.a.createElement("div",{className:"photo-card",onClick:function(){var a;t.dispatch((a={url:n,title:e},{type:f,payload:Object.assign(a,{isOpen:!0})}))}},r.a.createElement("img",{className:"photo-card__img",src:a,alt:e}),r.a.createElement("p",{className:"photo-card__title"},e))}),j=function(t){function e(){return Object(u.a)(this,e),Object(s.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)(O("photos?albumId=1"))}},{key:"render",value:function(){var t=this.props,e=t.isLoading,n=t.photos,a=this.props.photos.map(function(t){return r.a.createElement("li",{key:t.id,className:"photo-list__item"},r.a.createElement(g,{id:t.id,title:t.title,url:t.url,thumbnailUrl:t.thumbnailUrl,albumId:t.albumId}))});return r.a.createElement("div",{className:"photo-list"},r.a.createElement("h2",{className:"photo-list__title"},e?"Photos are loading...":n[0]?"Album \u2116".concat(n[0].albumId):""),r.a.createElement("ul",{className:"photo-list__list"},a))}}]),e}(a.Component);var I=Object(l.b)(function(t){return{photos:t.photos,isLoading:t.isLoading}},function(t){return{dispatch:t}})(j),N=n(3);function P(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case p:return[];case h:return[].concat(e.payload);case b:return[];default:return t}}function k(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case p:return!0;case h:case b:return!1;default:return t}}function w(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case h:return e.payload[0].albumId;default:return t}}function A(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case f:case v:return Object.assign({},t,e.payload);default:return t}}var T=n(18),C=n.n(T),L=n(19),S=Object(N.c)(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return{photos:P(t.photos,e),isLoading:k(t.isLoading,e),currentAlbumId:w(t.currentAlbumId,e),currentPhoto:A(t.currentPhoto,e)}},Object(N.a)(L.a,C.a));n(35);for(var H=Object(l.b)(function(t){var e=t.currentPhoto;return{url:e.url,alt:e.alt,isOpen:e.isOpen}},function(t){return{dispatch:t}})(function(t){if(t.isOpen){var e=t.url,n=t.alt;return r.a.createElement("div",{className:"modal-photo",onClick:function(){t.dispatch({type:v,payload:{isOpen:!1}})}},r.a.createElement("img",{className:"modal-photo__img",src:e,alt:n}))}return""}),U=[],R=1;R<=100;R++)U.push({albumId:R});var D=function(){return r.a.createElement(l.a,{store:S},r.a.createElement("div",{className:"App"},r.a.createElement(y,{albums:U}),r.a.createElement(I,null),r.a.createElement(H,null)))};o.a.render(r.a.createElement(D,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.f525c277.chunk.js.map