"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[888],{888:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var s=n(861),i=n(439),a=n(757),c=n.n(a),r=n(791),o=n(689),l={img:"MovieDetails_img__D3WH9",container:"MovieDetails_container__o8VqJ",info:"MovieDetails_info__0TKY1",btn:"MovieDetails_btn__tCU2l",text:"MovieDetails_text__uG5Tv",b1:"MovieDetails_b1__WcFRk",activeBtn:"MovieDetails_activeBtn__P6enA",active:"MovieDetails_active__nw0x6"},h=n(87),d=n(184),v=function(){var e,t,n=(0,o.UO)().id,a=(0,r.useState)(null),v=(0,i.Z)(a,2),u=v[0],_=v[1],x=null!==(e=null===(t=(0,o.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,r.useEffect)((function(){function e(){return(e=(0,s.Z)(c().mark((function e(){var t,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=ce046fb7a0718a1aac652aa1ca1238c4"));case 3:return t=e.sent,e.next=6,t.json();case 6:s=e.sent,_(s),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),u?(console.log(u),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{className:l.btn,children:(0,d.jsxs)(h.rU,{to:x,children:["<-"," Go Back"]})}),(0,d.jsxs)("div",{className:l.container,children:[(0,d.jsx)("div",{className:l.picture,children:(0,d.jsx)("img",{className:l.img,src:"https://image.tmdb.org/t/p/w500".concat(u.poster_path),alt:"Poster for ".concat(u.title)})}),(0,d.jsxs)("div",{className:l.info,children:[(0,d.jsxs)("h1",{children:[u.title," (",u.release_date.substring(0,4),")"]}),(0,d.jsx)("h2",{children:"user score :"}),(0,d.jsxs)("p",{children:[10*u.vote_average,"%"]}),(0,d.jsx)("h2",{children:"overview"}),(0,d.jsx)("p",{className:l.text,children:u.overview}),(0,d.jsx)("h2",{children:"Genres"}),(0,d.jsx)("p",{children:u.genres.map((function(e){return e.name})).join(", ")})]})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Aditional information"}),(0,d.jsx)(h.rU,{to:"cast",state:{from:x},children:(0,d.jsx)("button",{className:"".concat(l.btn," ").concat(l.b1),children:"Cast"})}),(0,d.jsx)(h.rU,{to:"reviews",state:{from:x},children:(0,d.jsx)("button",{className:"".concat(l.btn," ").concat(l.b1),children:"Reviews"})})]}),(0,d.jsx)(o.j3,{})]})):(0,d.jsx)("div",{children:"Loading..."})}}}]);
//# sourceMappingURL=888.719f9fc9.chunk.js.map