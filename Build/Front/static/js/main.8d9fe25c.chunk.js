(this["webpackJsonpmusic-finder"]=this["webpackJsonpmusic-finder"]||[]).push([[0],{104:function(e,t,n){},182:function(e,t,n){},183:function(e,t,n){},184:function(e,t,n){},185:function(e,t,n){},186:function(e,t,n){},204:function(e,t,n){},209:function(e,t,n){},210:function(e,t,n){"use strict";n.r(t);var c=n(4),s=n(0),r=n.n(s),i=n(21),a=n.n(i),l=(n(104),n(13)),j=n(91),o=n(98),b=n(6),u=(n(182),function(e){var t=e.onSubmit,n=Object(o.a)(),s=n.register,r=n.handleSubmit;n.errors;return Object(c.jsx)(b.j,{className:"SearchFormContainer",children:Object(c.jsxs)(b.k,{onSubmit:r(t),children:[Object(c.jsxs)(b.r,{form:!0,children:[Object(c.jsx)(b.i,{children:Object(c.jsxs)(b.m,{children:[Object(c.jsx)("label",{htmlFor:"#artista",children:"Artista"}),Object(c.jsx)(b.n,{placeholder:"Introduce el artista",name:"artista",innerRef:s})]})}),Object(c.jsxs)(b.i,{children:[Object(c.jsx)("label",{htmlFor:"#artista",children:"Titulo"}),Object(c.jsx)(b.n,{placeholder:"Introduce el titulo",name:"titulo",innerRef:s})]}),Object(c.jsxs)(b.i,{children:[Object(c.jsx)("label",{htmlFor:"#artista",children:"Letras"}),Object(c.jsx)(b.n,{placeholder:"Introduce letras a buscar",name:"clave",innerRef:s})]})]}),Object(c.jsx)(b.r,{children:Object(c.jsx)(b.i,{sm:{size:8,order:2,offset:5},children:Object(c.jsxs)(b.b,{size:"sm",className:"mr-2",children:[Object(c.jsx)(b.a,{theme:"danger",type:"reset",onClick:function(){return t()},children:"Limpiar"}),Object(c.jsx)(b.a,{theme:"dark",children:"Buscar"})]})})})]})})}),d=n(10),O=(n(183),function(e){var t=e.open,n=e.lyrics,s=e.artist,r=e.toggle;return Object(c.jsx)("div",{children:Object(c.jsxs)(b.o,{className:"Modal",open:t,toggle:r,children:[Object(c.jsx)(b.q,{children:s}),Object(c.jsx)(b.p,{children:n})]})})}),h=(n(184),function(e){var t=e.song,n=t.title,r=t.artist,i=t.lyrics,a=t.artistImage,j=t.relevancy,o=Object(s.useState)(!1),u=Object(l.a)(o,2),d=u[0],h=u[1],m=function(){h(!d)},x=i.split("#");return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(O,{open:d,lyrics:x.map((function(e){return Object(c.jsx)("p",{children:e})})),artist:r,toggle:m}),Object(c.jsxs)(b.c,{className:"SongItem",children:[Object(c.jsx)(b.f,{}),Object(c.jsx)(b.g,{src:a}),Object(c.jsxs)(b.d,{children:[Object(c.jsx)(b.h,{children:n}),Object(c.jsx)("p",{children:r}),Object(c.jsx)(b.a,{theme:"dark",onClick:m,children:"Ver letra \u2192"})]}),Object(c.jsxs)(b.e,{children:["Likes: ",j]})]})]})}),m=(n(185),function(e){var t=e.songs,n=e.totalSongs,r=Object(s.useState)(!1),i=Object(l.a)(r,2),a=i[0],j=i[1],o=Object(s.useMemo)((function(){return Object(d.a)(t).sort((function(e,t){return e.title>t.title?1:t.title>e.title?-1:0}))}),[t,a]),u=a?o:t;return Object(c.jsxs)("div",{className:"SongsList",children:[Object(c.jsxs)("div",{className:"InfoContainer",children:[Object(c.jsx)(b.l,{toggle:!0,checked:a,onChange:function(){return j(!a)},children:" Ordenar Alfabeticamente"}),Object(c.jsx)("span",{children:"Numero de canciones que satisfacen la busqueda: ".concat(n)})]}),Object(c.jsx)("div",{className:"ListContainer",children:u.map((function(e,t){return Object(c.jsx)(h,{song:e})}))})]})}),x=(n(186),function(e){var t=e.artists;return console.log(t),t.sort((function(e,t){return t.numberOfSongs>e.numberOfSongs?1:e.numberOfSongs>t.numberOfSongs?-1:0})),Object(c.jsxs)("div",{className:"ArtistsBar",children:[Object(c.jsx)("span",{children:Object(c.jsx)("b",{children:"Apariciones por artista:"})}),Object(c.jsx)("div",{className:"ArtistList",children:t.map((function(e){return Object(c.jsxs)("div",{className:"ArtistItem",children:[Object(c.jsx)("img",{className:"ArtistImage",src:e.image}),Object(c.jsxs)("div",{className:"ArtistInfo",children:[Object(c.jsx)("span",{children:Object(c.jsx)("b",{children:e.artist})}),Object(c.jsxs)("span",{children:["Apariciones: ",e.numberOfSongs]})]})]})}))})]})}),f=n(96),g=n.n(f).a.create({baseURL:"http://localhost:8080/songs"}),p=n(9),v=(n(204),function(e){Object(j.a)(e);var t=Object(s.useState)([]),n=Object(l.a)(t,2),r=n[0],i=n[1],a=Object(s.useState)(0),o=Object(l.a)(a,2),d=o[0],O=o[1],h=Object(p.f)(),f=new URLSearchParams(Object(p.g)().search),v=f.get("artist"),S=f.get("title"),N=f.get("lyrics");Object(s.useEffect)((function(){g.get("",{params:{artist:v,title:S,lyrics:N}}).then((function(e){i(e.data)}))}),[v,S,N,d]);var k=Object(s.useCallback)((function(e){O(0),h.push("?artist=".concat((null===e||void 0===e?void 0:e.artista)||"","&title=").concat((null===e||void 0===e?void 0:e.titulo)||"","&lyrics=").concat((null===e||void 0===e?void 0:e.clave)||""))}),[]);console.log(r);var A,C,I=function(e,t){var n=0,c=e.length,s=[];for(n=0;n<c;n+=t){var r=e.slice(n,n+t);s.push(r)}return s}(r,12),y=Math.ceil(r.length/12),L=r.map((function(e){return{artist:e.artist,image:e.artistImage,numberOfSongs:r.filter((function(t){return t.artist===e.artist})).length}})),F=(C="artist",(A=L).map((function(e){return e[C]})).map((function(e,t,n){return n.indexOf(e)===t&&t})).filter((function(e){return A[e]})).map((function(e){return A[e]})));return Object(c.jsxs)("div",{className:"SongsPage",children:[Object(c.jsx)(u,{onSubmit:k}),Object(c.jsxs)("div",{className:"ListsContainer",children:[Object(c.jsx)(m,{songs:I[d]||[],totalSongs:r.length}),Object(c.jsx)(x,{artists:F})]}),Object(c.jsxs)("div",{className:"ButtonContainer",children:[d>0&&Object(c.jsx)(b.a,{theme:"dark",onClick:function(){O(d-1)},children:"Anterior"}),d+1<y&&Object(c.jsx)(b.a,{theme:"dark",onClick:function(){O(d+1)},children:"Siguiente"})]})]})}),S=(n(207),n(208),n(60));n(209);var N=function(){return Object(c.jsx)(S.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{class:"title",children:"LyFind."}),Object(c.jsx)(p.b,{path:"/songs",component:v}),Object(c.jsx)(p.b,{path:"/",component:v,children:Object(c.jsx)(p.a,{to:"/songs"})})]})})};a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(N,{})}),document.getElementById("root"))}},[[210,1,2]]]);
//# sourceMappingURL=main.8d9fe25c.chunk.js.map