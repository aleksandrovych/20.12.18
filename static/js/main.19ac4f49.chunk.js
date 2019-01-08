(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1603:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(299),o=(a(312),a(194),a(316),a(85)),c=a(33),l=a(28),s=a(36),u=a(34),m=a(35),v=a(1622),d=a(1616),g=a(1621),p=a(100),h=a.n(p),f=(a(329),a(1623)),b=a(1618),y="SET_POPULAR",E="SET_LATEST",O="SET_MOVIE",j="SET_SEARCH",P="CLEAR_SEARCH",w="MOVIES_ARE_LOADING",M="MOVIE_HAS_ERROR",C="MOVIE_IS_LOADING",S="SEARCH_IS_LOADING",L="ADD_TO_WATCHLIST",I="REMOVE_FROM_WATCHLIST",_="REMOVE_FROM_WATCHLIST_FROM_WATCHLIST",k=a(46),R=a.n(k);function A(){return{type:w}}function W(){return{type:P}}function x(){return R.a.get("https://api.themoviedb.org/3/genre/movie/list?api_key=79d36b7841b090ecd252b160c9f3d79d&language=en-US")}function T(e){return R.a.get("https://api.themoviedb.org/3/movie/popular?api_key=79d36b7841b090ecd252b160c9f3d79d&language=en-US&page="+e)}function H(e){return R.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=79d36b7841b090ecd252b160c9f3d79d&language=en-US&page="+e)}function N(e){return R.a.get("https://api.themoviedb.org/3/search/movie?api_key=79d36b7841b090ecd252b160c9f3d79d&language=en-US&query="+e+"&page=1&include_adult=false")}function z(e){return function(t){t({type:S});var a=[];R.a.all([x(),N(e)]).then(R.a.spread(function(e,n){n.data.results.forEach(function(t){var n=e.data.genres.map(function(e,a){return t.genre_ids.includes(e.id)?e.name:null}).filter(function(e){return null!=e});a.push({id:t.id,title:t.title,rating:t.vote_average,genres:n,src:t.poster_path,desc:t.overview})});var i=a.map(function(e,t){return t%2===0?a.slice(t,t+2):null}).filter(function(e){return null!=e});return t({type:j,payload:i})})).catch(function(e){console.log(e)})}}function D(e){return function(t){t({type:C}),R.a.get("https://api.themoviedb.org/3/movie/"+e+"?api_key=79d36b7841b090ecd252b160c9f3d79d&language=en-US").then(function(e){var a,n=e.data.genres.map(function(e,t){return e.name}).filter(function(e){return null!=e}),i=!1;return JSON.parse(localStorage.getItem("watchlistMovies")).forEach(function(t){t.id===e.data.id&&(i=!0)}),t((a={id:e.data.id,title:e.data.title,overview:e.data.overview,poster:e.data.poster_path,rating:e.data.vote_average,genres:n,inWatchlist:i},{type:O,payload:a}))}).catch(function(e){return console.log(e),t((a=e.message,{type:M,payload:a}));var a})}}function F(e){return function(t){t(A());var a=[];R.a.all([x(),T(e)]).then(R.a.spread(function(n,i){i.data.results.forEach(function(e){var t=n.data.genres.map(function(t,a){return e.genre_ids.includes(t.id)?t.name:null}).filter(function(e){return null!=e}),i=!1;JSON.parse(localStorage.getItem("watchlistMovies")).forEach(function(t){t.id===e.id&&(i=!0)}),a.push({id:e.id,title:e.title,poster:e.poster_path,rating:e.vote_average,genres:t,inWatchlist:i})});var r,o=a.map(function(e,t){return t%4===0?a.slice(t,t+4):null}).filter(function(e){return null!=e});return t((r={activePagePopular:e,totalMovies:i.data.total_results,movies:o},{type:y,payload:r}))})).catch(function(e){console.log(e)})}}function J(e){return function(t){t(A());var a=[];R.a.all([x(),H(e)]).then(R.a.spread(function(n,i){i.data.results.forEach(function(e){var t=n.data.genres.map(function(t,a){return e.genre_ids.includes(t.id)?t.name:null}).filter(function(e){return null!=e}),i=!1;JSON.parse(localStorage.getItem("watchlistMovies")).forEach(function(t){t.id===e.id&&(i=!0)}),a.push({id:e.id,title:e.title,poster:e.poster_path,rating:e.vote_average,genres:t,inWatchlist:i})});var r,o=a.map(function(e,t){return t%4===0?a.slice(t,t+4):null}).filter(function(e){return null!=e});return t((r={activePageLatest:e,totalMovies:i.data.total_results,movies:o},{type:E,payload:r}))})).catch(function(e){console.log(e)})}}var U=a(37),V=a(23),G=a(273),B=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).resetComponent=function(){return a.setState({isLoading:!1,results:[],value:""})},a.handleResultSelect=function(e,t){var n=t.result,i=a.props.clearSearch;a.setState({value:n.title}),a.resetComponent(),i(),Ue.dispatch(Object(G.push)("/movie/"+n.id+"/"))},a.onInputChange=function(e){var t=a.props,n=t.doSearch,i=t.clearSearch,r=e.target.value.toLowerCase();a.setState({value:r,isLoading:a.props.searchIsLoading},function(){r&&r.length>1?n(r):i()})},a.state={value:"",results:a.props.search},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.resetComponent()}},{key:"render",value:function(){var e,t=this.state.value,a=this.props,n=a.searchIsLoading,r=a.search,o=new RegExp(h.a.escapeRegExp(t),"i"),c=r.reduce(function(e,t){return e.concat(t)},[]);return i.a.createElement(f.a,null,i.a.createElement(f.a.Column,{width:6},i.a.createElement(b.a,Object.assign({loading:n,onResultSelect:this.handleResultSelect,onSearchChange:h.a.debounce(this.onInputChange,500,{leading:!0}),results:h.a.filter((e=c,e.map(function(e){return{title:e.title.slice(0,30),description:e.desc.slice(0,70),image:null!==e&&null!==e.src?"https://image.tmdb.org/t/p/w500"+e.src:"https://cdn.sstatic.net/Sites/stackoverflow/img/404.svg",price:"Rating: "+e.rating,id:e.id}})),function(e){return o.test(e.title)}),value:t},this.props))))}}]),t}(n.Component),X=Object(U.connect)(function(e){return{search:e.movies.search,searchIsLoading:e.movies.searchIsLoading,pathname:e.router.location.pathname,watchlistMovies:e.movies.watchlistMovies}},function(e){return Object(V.b)({doSearch:z,clearSearch:W},e)})(B),q=a(183),K=a(182),Q=a(97),Y=a(99),Z=a(31),$=a(1617),ee=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleInputChange=function(e,t){var n=t.value;return a.setState({activePage:n})},a.handlePaginationChange=function(e,t){var n=t.activePage;return a.setState({activePage:n})},a.state={activePage:1,onPageChange:function(){},totalPages:1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state;return i.a.createElement(f.a,{padded:"vertically",columns:3,verticalAlign:"middle"},i.a.createElement(f.a.Column,null),i.a.createElement(f.a.Column,null,i.a.createElement($.a,{activePage:e.activePage,onPageChange:e.onPageChange,totalPages:e.totalPages})),i.a.createElement(f.a.Column,null))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=Object(Z.a)({},t,{activePage:e.activePage,onPageChange:e.onPageChange,totalPages:e.totalPages});return a.activePage=void 0===a.activePage?1:a.activePage,a.onPageChange=null===a.onPageChange?function(){}:a.onPageChange,a.totalPages=void 0===a.totalPages?1:a.totalPages,a}}]),t}(n.Component),te=a(43),ae=a.n(te),ne=a(104),ie=a(286),re=a(1613),oe=a(269),ce=a(1614),le=a(1612),se=function(e){return e.map(function(e,t){return{title:t+". "+e.title,image:e.image+(e.image?"?noCache="+Math.random():"")}})},ue=function(e,t){return e.image||t},me=new ne.b({imageHeight:380,defaultWidth:250,fixedWidth:!0}),ve=function(e){return Object(ne.d)(function(e){return{cellMeasurerCache:me,columnCount:e<1055?e<771?e<492?1:2:3:4,columnWidth:250,spacer:30}}(e))},de=function(e){return void 0===e?"":"Science Fiction"===e?"Sci-Fy":e.length>5?e.slice(0,5):e},ge=function(e){var t=e.itemsWithSizes,a=e.setRef,n=e.width,r=ve(n);return i.a.createElement(ne.c,{cellCount:t.length,cellMeasurerCache:me,cellPositioner:r,cellRenderer:function(e){var a=e.index,n=(e.key,e.parent),r=e.style,o=t[a],c=o.item;o.size;return i.a.createElement(ne.a,{cache:me,index:a,key:c.id,parent:n},i.a.createElement("div",{style:Object(Z.a)({},r,{border:"2px double grey",height:484})},i.a.createElement(le.a,{to:"/movie/"+c.id},i.a.createElement("img",{src:null!==c&&null!==c.poster?"https://image.tmdb.org/t/p/w500"+c.poster:"https://cdn.sstatic.net/Sites/stackoverflow/img/404.svg",alt:"No films",style:{height:380,width:246,objectFit:"fill",display:"block"}}),i.a.createElement("div",{style:{maxHeight:"20px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",paddingLeft:"10px",paddingRight:"10px",marginTop:"5px",marginBottom:"10px",font:"bold 130% serif",color:"#008080"}},c.title),i.a.createElement(re.a,null,i.a.createElement("div",{style:{paddingLeft:"10px",marginBottom:"10px",overflowX:"scroll",maxHeight:"21px"}},void 0!=c.genres[0]&&i.a.createElement(oe.a,{size:"tiny",as:"a",tag:!0},de(c.genres[0])),void 0!=c.genres[1]&&i.a.createElement(oe.a,{size:"tiny",as:"a",color:"red",tag:!0},de(c.genres[1])),void 0!=c.genres[2]&&i.a.createElement(oe.a,{size:"tiny",as:"a",color:"teal",tag:!0},de(c.genres[2])))),i.a.createElement("div",{style:{paddingLeft:"10px",paddingRight:"10px"}},i.a.createElement(ce.a,{color:c.rating<3?"red":c.rating<6?"yellow":"green",percent:10*c.rating,size:"small"},"Rating")))))},height:2600,width:n+50,keyMapper:ue,ref:a})},pe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).masonryRef=null,a.setMasonry=function(e){return a.masonryRef=e},null!=e.list&&e.list.length>0&&(me.clearAll(),null!=a.masonryRef&&a.masonryRef.clearCellPositions(),a.state={images:se(e.list)}),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillUpdate",value:function(e,t,a){me.clearAll(),this.masonryRef.clearCellPositions(),this.state={images:se(e.list)}}},{key:"render",value:function(){var e=this;return i.a.createElement(ie.a,{items:this.props.list,image:function(e){return e.image},keyMapper:ue,onError:function(e,t,a){console.error("Cannot load image",a,"for item",t,"error",e)},defaultHeight:700,defaultWidth:250},function(t){var a=t.itemsWithSizes;t.sizes;return i.a.createElement(ge,{width:e.props.width,setRef:e.setMasonry,itemsWithSizes:a})})}}]),t}(i.a.Component),he=a(1615),fe=a(98),be=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).calculateLayout=function(e){a.setState({width:e})},a.onPageChange=a.onPageChange.bind(Object(Y.a)(Object(Y.a)(a))),a.state={width:0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"onPageChange",value:function(e){try{var t=e.target.getAttribute("value");(0,this.props.getLatestMovies)(t)}catch(a){console.error("LatestFilms onPageChange")}}},{key:"componentDidMount",value:function(){var e=this.props;(0,e.getLatestMovies)(e.activePageLatest)}},{key:"render",value:function(){var e=this.props,t=(e.moviesAreLoading,e.movies),a=e.totalMovies,n=e.activePagePopular,r=t.reduce(function(e,t){return e.concat(t)},[]),o={activePage:n,onPageChange:this.onPageChange,totalPages:Math.floor(a/20)};return[i.a.createElement(fe.a,{handleWidth:!0,onResize:this.calculateLayout},i.a.createElement(pe,{width:this.state.width,key:"ImageMeasurerLatest",list:r})),i.a.createElement(ee,Object.assign({key:"PaginationControlledLatest"},o))]}}]),t}(n.Component),ye=Object(he.a)(Object(U.connect)(function(e){return{movies:e.movies.movies,moviesAreLoading:e.movies.moviesAreLoading,totalMovies:e.movies.totalMovies,activePageLatest:e.movies.activePageLatest}},function(e){return Object(V.b)({getLatestMovies:J},e)})(be)),Ee=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).onPageChange=function(e){try{var t=e.target.getAttribute("value");(0,a.props.getPopularMovies)(t)}catch(n){}},a.calculateLayout=function(e){a.setState({width:e})},a.state={width:0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.getPopularMovies)(e.activePagePopular)}},{key:"render",value:function(){var e=this.props,t=(e.moviesAreLoading,e.movies),a=e.totalMovies,n=e.activePagePopular,r=t.reduce(function(e,t){return e.concat(t)},[]),o={activePage:n,onPageChange:this.onPageChange,totalPages:Math.floor(a/20)};return[i.a.createElement(fe.a,{handleWidth:!0,onResize:this.calculateLayout},i.a.createElement(pe,{width:this.state.width,key:"ImageMeasurerPopular",list:r})),i.a.createElement(ee,Object.assign({key:"PaginationControlledPopular"},o))]}}]),t}(n.Component),Oe=Object(he.a)(Object(U.connect)(function(e){return{movies:e.movies.movies,moviesAreLoading:e.movies.moviesAreLoading,totalMovies:e.movies.totalMovies,activePagePopular:e.movies.activePagePopular}},function(e){return Object(V.b)({getPopularMovies:F},e)})(Ee));function je(e){return{type:I,payload:e}}function Pe(e){return{type:L,payload:e}}var we=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).calculateLayout=function(e){a.setState({width:e})},a.state={width:0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"doWatchlist",value:function(e){return(0,this.props.dispatch)({type:_,payload:e})}}]),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.watchlistMovies,t=e.map(function(t,a){return a%4===0?e.slice(a,a+4):null}).filter(function(e){return null!=e}).reduce(function(e,t){return e.concat(t)},[]);return i.a.createElement(fe.a,{handleWidth:!0,onResize:this.calculateLayout},i.a.createElement(pe,{width:this.state.width,key:"ImageMeasurerPopular",list:t}))}}]),t}(n.Component),Me=Object(he.a)(Object(U.connect)(function(e){return{watchlistMovies:e.movies.watchlistMovies}})(we)),Ce=a(1604),Se=a(1620),Le=a(1619),Ie=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).doWatchlist=function(){var e,t=a.props,n=t.movie,i=t.remove,r=t.add;return(e=n.inWatchlist?Object.assign({},n,{inWatchlist:!1}):Object.assign({},n,{inWatchlist:!0})).inWatchlist?r({movie:e}):i({movie:e})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.getMovie)(parseInt(this.props.match.params.movieId,10))}},{key:"render",value:function(){var e=this.props,t=(e.movieIsLoading,e.movieHasError,e.movie),a=null!==t&&null!==t.poster?"https://image.tmdb.org/t/p/w500"+t.poster:"https://cdn.sstatic.net/Sites/stackoverflow/img/404.svg",n=null!==t?t.title:"",r=null!==t?t.overview:"",o=null!==t&&null!=t.genres?t.genres:[],c=["yellow","olive","green","teal","blue","violet","purple"],l=null!=t&&void 0!=t?t.rating:0,s=parseInt(10*parseFloat(l)),u=null!=t&&t.inWatchlist;return i.a.createElement("div",null,i.a.createElement(Ce.a,{style:{display:"flex",float:"left",paddingRight:"30px"},src:a,size:"large",left:!0}),i.a.createElement("div",{style:{paddingLeft:"30px"}},i.a.createElement(Se.a,{style:{display:"block",color:"#008080"},as:"h1"},n),i.a.createElement(re.a,{style:{display:"block",font:"regular 120% serif"},text:!0},r),o.map(function(e,t){return i.a.createElement(oe.a,{style:{marginRight:"10px"},key:e,basic:!0,color:c[t%c.length],pointing:!0},e)}),i.a.createElement("div",{style:{display:"flex",marginTop:"20px",justifyContent:"space-between"}},i.a.createElement(ce.a,{style:{progress:{backgroundColor:"red"}},active:!0,indicating:!0,percent:100,size:"small",color:"olive",as:"div",precision:s})),i.a.createElement(Le.a.Group,{style:{}},i.a.createElement(Le.a,{positive:u,onClick:this.doWatchlist},"Watchlist"),i.a.createElement(Le.a.Or,null),i.a.createElement(Le.a,{positive:!u,onClick:this.doWatchlist},"Untracked"))))}}]),t}(n.Component),_e=Object(U.connect)(function(e){return{movie:e.movies.movie,movieIsLoading:e.movies.movieIsLoading,movieHasError:e.movies.movieHasError}},function(e){return Object(V.b)({getMovie:D,add:Pe,remove:je},e)})(Ie),ke=i.a.createElement("div",null,i.a.createElement(q.a,null,i.a.createElement(K.a,{exact:!0,from:"/",to:"/latest/"}),i.a.createElement(Q.a,{path:"/latest/",component:ye}),i.a.createElement(Q.a,{path:"/popular/",component:Oe}),i.a.createElement(Q.a,{path:"/watchlist/",component:Me}),i.a.createElement(Q.a,{path:"/movie/:movieId",component:_e}),i.a.createElement(Q.a,{component:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Data Not Found"))}}))),Re=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.pathname;e.searchIsLoading,e.search;return i.a.createElement(f.a,{columns:16},i.a.createElement(f.a.Column,{computer:2}),i.a.createElement(f.a.Column,{computer:12},i.a.createElement("div",null,i.a.createElement(v.a,{attached:"top"},i.a.createElement(d.a,{item:!0,icon:"wrench",simple:!0},i.a.createElement(d.a.Menu,null,i.a.createElement(le.a,{to:"/latest/"},i.a.createElement(d.a.Item,{active:"/latest/"===t}," Latest ")),i.a.createElement(le.a,{to:"/popular/"},i.a.createElement(d.a.Item,{active:"/popular/"===t}," Popular ")),i.a.createElement(le.a,{to:"/watchlist/"},i.a.createElement(d.a.Item,{active:"/watchlist/"===t}," Watchlist ")))),i.a.createElement(v.a.Menu,{position:"right"},-1===t.indexOf("/movie/")&&i.a.createElement("div",{className:"ui right aligned category search item"},i.a.createElement(X,null),i.a.createElement("div",{className:"results"})))),i.a.createElement(g.a,{key:"seg",attached:"bottom"},i.a.createElement(f.a,{columns:12},i.a.createElement(f.a.Row,null,i.a.createElement(f.a.Column,{computer:1}),i.a.createElement(f.a.Column,{computer:14},i.a.createElement("div",{id:"minContent"},ke)),i.a.createElement(f.a.Column,{computer:1})))))),i.a.createElement(f.a.Column,{computer:2}))}}]),t}(i.a.Component),Ae=Object(U.connect)(function(e){return{search:e.movies.search,searchIsLoading:e.movies.searchIsLoading,pathname:e.router.location.pathname,watchlistMovies:e.movies.watchlistMovies}},function(e){return Object(V.b)({doSearch:z},e)})(Re),We=function(e){var t=e.history;return i.a.createElement(o.ConnectedRouter,{history:t},i.a.createElement(Ae,null))},xe=a(38),Te=a(300);null===localStorage.getItem("watchlistMovies")&&localStorage.setItem("watchlistMovies",JSON.stringify([]));var He={moviesAreLoading:!1,movieIsLoading:!1,movieHasError:null,movie:null,activePagePopular:1,activePageLatest:1,totalMovies:1,movies:[],searchIsLoading:!1,search:[],watchlistMovies:JSON.parse(localStorage.getItem("watchlistMovies"))},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(Z.a)({},e,{moviesAreLoading:!1,activePagePopular:t.payload.activePagePopular,totalMovies:t.payload.totalMovies,movies:t.payload.movies});case E:return Object(Z.a)({},e,{moviesAreLoading:!1,activePageLatest:t.payload.activePageLatest,totalMovies:t.payload.totalMovies,movies:t.payload.movies});case j:return Object(Z.a)({},e,{searchIsLoading:!1,search:t.payload});case O:return Object(Z.a)({},e,{movieIsLoading:!1,movieHasError:null,movie:t.payload});case w:return Object(Z.a)({},e,{moviesAreLoading:!0});case S:return Object(Z.a)({},e,{searchIsLoading:!0});case P:return Object(Z.a)({},e,{searchIsLoading:!1,search:[]});case C:return Object(Z.a)({},e,{movieIsLoading:!0});case M:return Object(Z.a)({},e,{movieHasError:t.payload,movieIsLoading:!1});case L:var a=[].concat(Object(Te.a)(e.watchlistMovies),[t.payload.movie]);return localStorage.setItem("watchlistMovies",JSON.stringify(a)),Object(Z.a)({},e,{movie:t.payload.movie,watchlistMovies:a});case I:var n=e.watchlistMovies.filter(function(e){return e.id!==t.payload.movie.id});return localStorage.setItem("watchlistMovies",JSON.stringify(n)),Object(Z.a)({},e,{movie:t.payload.movie,watchlistMovies:n});case _:var i=e.watchlistMovies.filter(function(e){return e!==t.payload});return localStorage.setItem("watchlistMovies",JSON.stringify(i)),Object(Z.a)({},e,{watchlistMovies:i});default:return e}},ze=function(e){return Object(V.c)({movies:Ne,router:Object(o.connectRouter)(e)})},De=a(298);a.d(t,"store",function(){return Ue});var Fe=Object(xe.a)({basename:"/20.12.18"}),Je=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||V.d,Ue=Object(V.e)(ze(Fe),Je(Object(V.a)(De.a,Object(o.routerMiddleware)(Fe))));ae.a.render(i.a.createElement(r.AppContainer,null,i.a.createElement(U.Provider,{store:Ue},i.a.createElement(We,{history:Fe}))),document.getElementById("root"))},194:function(e,t,a){},310:function(e,t,a){e.exports=a(1603)},312:function(e,t,a){},316:function(e,t,a){}},[[310,2,1]]]);
//# sourceMappingURL=main.19ac4f49.chunk.js.map