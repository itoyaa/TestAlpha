(this["webpackJsonpredux-basics"]=this["webpackJsonpredux-basics"]||[]).push([[0],{1354:function(e,t,r){"use strict";r.r(t);var a=r(3),i=r(23),n=r.n(i),c=r(5),s=(r(44),r(19)),o=r(26),l=r(8),d=r(18),u=Object(d.b)({name:"movies",initialState:{moviesDataArray:[],faveFilter:!1},reducers:{initMovies:function(e,t){e.moviesDataArray=t.payload},removeMovie:function(e,t){var r=t.payload;e.moviesDataArray=e.moviesDataArray.filter((function(e){return e.id!==r}))},likeMovie:function(e,t){for(var r=t.payload,a=0;a<e.moviesDataArray.length;a++)e.moviesDataArray[a].id===r&&(e.moviesDataArray[a].isFave=!e.moviesDataArray[a].isFave)},filterToggle:function(e){e.faveFilter=!e.faveFilter}}}),j=Object(d.a)({reducer:{moviesStore:u.reducer}}),b=u.actions,h=j,f=r(9),p=r.n(f),v=r(14),O=r.n(v),m=r(27),x=r.n(m),_=r(4),g=function(e){return Object(_.jsx)("button",{onClick:e.onClick,className:"".concat(x.a.button," ").concat(e.className),children:e.children})},C=r(6),N=r.n(C),D=r(28),F=r.n(D),k=function(e){return Object(_.jsx)("div",{className:F.a.card,children:e.children})},A=r(15),y=function(e){var t=Object(c.b)(),r=e.id,a=function(){t(b.likeMovie(r))};return!0===Object(c.c)((function(e){return e.moviesStore.moviesDataArray.filter((function(e){return r===e.id}))[0].isFave}))?Object(_.jsx)(A.Heart,{onClick:a,color:"#7048e8",height:"40px",width:"40px"}):Object(_.jsx)(A.HeartOutline,{onClick:a,color:"#7048e8",height:"40px",width:"40px"})},w=function(e){var t=Object(c.b)();return Object(_.jsxs)(k,{children:[Object(_.jsxs)("h2",{className:N.a.title,children:["\ud83c\udfa5 ",e.title]}),Object(_.jsx)("p",{className:N.a.description,children:e.description}),Object(_.jsxs)("p",{className:N.a.author,children:["\ud83d\udc68\ud83c\udffb\u200d\ud83d\udcbb ",e.author]}),Object(_.jsx)("p",{className:N.a.release,children:e.releaseDate}),Object(_.jsxs)("div",{className:N.a.actions,children:[Object(_.jsx)(g,{className:N.a["delete-btn"],onClick:function(){t(b.removeMovie(e.id))},children:"Delete"}),Object(_.jsx)(y,{id:e.id})]})]})},S=function(e){if(Object(c.c)((function(e){return e.moviesStore.faveFilter}))){var t=e.data.filter((function(e){return e.isFave}));return Object(_.jsx)("div",{className:O.a["cards-container"],children:t.map((function(e){return Object(_.jsx)(w,{title:e.title,description:e.description,author:e.author,release_date:e.releaseDate,id:e.id,isFave:e.isFave},e.id)}))})}return Object(_.jsx)("div",{className:O.a["cards-container"],children:e.data.map((function(e){return Object(_.jsx)(w,{title:e.title,description:e.description,author:e.author,release_date:e.releaseDate,id:e.id,isFave:e.isFave},e.id)}))})},M=r(32),P=r.n(M),B=function(e){return Object(_.jsx)("div",{className:P.a.page,children:e.children})},G=r(17),I=r.n(G),H=function(e){var t=Object(c.b)(),r=Object(c.c)((function(e){return e.moviesStore.faveFilter}))?I.a.pressed:"";return Object(_.jsx)(g,{onClick:function(){t(b.filterToggle())},className:"".concat(I.a["filter-btn"]," ").concat(r),children:"Favourites \u2764\ufe0f"})};var E=function(){var e=Object(c.b)(),t=Object(a.useState)(null),r=Object(l.a)(t,2),i=r[0],n=r[1],d=Object(a.useState)(!0),u=Object(l.a)(d,2),j=u[0],h=u[1],f=Object(a.useCallback)(Object(o.a)(Object(s.a)().mark((function t(){var r,a,i;return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(null),t.prev=1,t.next=4,fetch("https://ghibliapi.herokuapp.com/films/");case 4:if((r=t.sent).ok){t.next=7;break}throw new Error("Something went wrong...");case 7:return t.next=9,r.json();case 9:a=t.sent,i=a.map((function(e){return{id:e.id,title:e.title,description:e.description,author:e.director,releaseDate:e.release_date,isFave:!1}})),e(b.initMovies(i)),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),n(t.t0);case 17:h(!1);case 18:case"end":return t.stop()}}),t,null,[[1,14]])}))),[e]);Object(a.useEffect)((function(){f()}),[f]);var v=Object(c.c)((function(e){return e.moviesStore.moviesDataArray}));return j?Object(_.jsxs)(B,{children:[Object(_.jsx)("h1",{className:p.a.title,children:"Studio Ghibli API"}),Object(_.jsx)("h2",{className:p.a.loading,children:"Loading..."})]}):i?Object(_.jsxs)(B,{children:[Object(_.jsx)("h1",{className:p.a.title,children:"Studio Ghibli API"}),Object(_.jsx)("h2",{className:p.a.error,children:i.message})]}):Object(_.jsxs)(B,{children:[Object(_.jsx)("h1",{className:p.a.title,children:"Studio Ghibli API"}),Object(_.jsx)(S,{data:v}),Object(_.jsx)(H,{})]})};n.a.createRoot(document.getElementById("root")).render(Object(_.jsx)(c.a,{store:h,children:Object(_.jsx)(E,{})}))},14:function(e,t,r){e.exports={"cards-container":"CardsList_cards-container__1BCCO"}},17:function(e,t,r){e.exports={"filter-btn":"FilterButton_filter-btn__1bzH4",pressed:"FilterButton_pressed__MeGDB"}},27:function(e,t,r){},28:function(e,t,r){e.exports={card:"CardWrapper_card__31Mon"}},32:function(e,t,r){e.exports={page:"Page_page__2bd65"}},44:function(e,t,r){},6:function(e,t,r){e.exports={title:"Card_title__2pVhP",description:"Card_description__1mDTa",author:"Card_author__3aw0m",release:"Card_release__27h-l","delete-btn":"Card_delete-btn__3yHCw",actions:"Card_actions__13Li3"}},9:function(e,t,r){e.exports={loading:"App_loading__wCN4P",error:"App_error__1umzI",title:"App_title__-GfWs"}}},[[1354,1,2]]]);
//# sourceMappingURL=main.44a00d62.chunk.js.map