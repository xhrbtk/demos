webpackJsonp([1],{"2D0A":function(t,e){},"9C6B":function(t,e){},"9n10":function(t,e){},GzsJ:function(t,e){},IurH:function(t,e){},JaVd:function(t,e){},JfS5:function(t,e){},KG0V:function(t,e){},Km2B:function(t,e){},"KnI+":function(t,e){},LVkC:function(t,e){},M6Sr:function(t,e){},ME59:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"Detail"}},[e("router-view")],1)],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("2D0A")},null,null).exports,r=i("/ocq"),o=i("Dd8w"),c=i.n(o),l=i("9rMa"),d={name:"HomeHeader",computed:c()({},Object(l.c)(["city"]))},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"header-right"},[this._v("\n\t\t"+this._s(this.city)+"\n\t\t"),e("span",{staticClass:"iconfont .arrow-icon"},[this._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("div",{staticClass:"iconfont back-icon"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont "},[this._v("")]),this._v("\n\t\t输入城市/景点/游玩主题\n\t")])}]};var h=i("VU/8")(d,u,!1,function(t){i("JfS5")},"data-v-2c2fa6c5",null).exports,m={name:"HomeSwiper",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0}}},computed:{showSwiper:function(){return this.list.length}}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[this.showSwiper?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.list,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var p=i("VU/8")(m,v,!1,function(t){i("T3Zg")},"data-v-5d253377",null).exports,f={name:"HomeIcons",props:{list:Array},data:function(){return{swiperOption:{autoplay:!1}}},computed:{pages:function(){var t=[];return this.list.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{attrs:{options:t.swiperOption}},t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-Content",attrs:{src:e.imgUrl}})]),t._v(" "),i("p",{staticClass:"icon-desc"},[t._v(t._s(e.desc))])])}))}))],1)},staticRenderFns:[]};var C=i("VU/8")(f,_,!1,function(t){i("Km2B")},"data-v-78011f11",null).exports,g={name:"HomeRecommend",props:{list:Array}},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("热销推荐")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}}),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"item-button"},[t._v("查看详情")])])])}))])},staticRenderFns:[]};var y=i("VU/8")(g,w,!1,function(t){i("IurH")},"data-v-881a9c92",null).exports,b={name:"HomeWeekend",props:{list:Array}},F={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("周末去哪儿")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}))])},staticRenderFns:[]};var k=i("VU/8")(b,F,!1,function(t){i("9C6B")},"data-v-d239c386",null).exports,x=i("aozt"),A=i.n(x),D={name:"Home",components:{HomeHeader:h,HomeSwiper:p,HomeIcons:C,HomeRecommend:y,HomeWeekend:k},data:function(){return{lastCity:"",swiperList:[],iconList:[],recommendList:[],weekendList:[]}},computed:c()({},Object(l.c)(["city"])),methods:{getHomeInfo:function(){A.a.get("http://xhrbtk.cn/static/mock/index.json?city="+this.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}console.log(t)}},mounted:function(){this.lastCity=this.city,this.getHomeInfo()},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeInfo())}},V={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header"),t._v(" "),i("home-swiper",{attrs:{list:t.swiperList}}),t._v(" "),i("home-icons",{attrs:{list:t.iconList}}),t._v(" "),i("home-recommend",{attrs:{list:t.recommendList}}),t._v(" "),i("HomeWeekend",{attrs:{list:t.weekendList}})],1)},staticRenderFns:[]};var L=i("VU/8")(D,V,!1,function(t){i("ZI/I")},null,null).exports,M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._v("\n\t城市选择\n\t"),e("router-link",{attrs:{to:"./"}},[e("div",{staticClass:"iconfont header-back"},[this._v("")])])],1)},staticRenderFns:[]};var S=i("VU/8")({name:"CityHeader"},M,!1,function(t){i("ME59")},"data-v-35bd6491",null).exports,T=i("Mqpf"),U={name:"CitySearch",props:{cities:Object},data:function(){return{keyword:"",list:[],timer:null}},methods:c()({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(l.b)(["changeCity"])),computed:{hasNoData:function(){return!this.list.length}},watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keyword?this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keyword)>-1||i.name.indexOf(t.keyword)>-1)&&e.push(i)});t.list=e},100):this.list=[]}},mounted:function(){this.scroll=new T.a(this.$refs.search,{click:!0})}},$={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"输入城市名或拼音"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search-content"},[i("ul",[t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"search-item border-bottom",on:{click:function(i){t.handleCityClick(e.name)}}},[t._v(t._s(e.name))])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNoData,expression:"hasNoData"}],staticClass:"search-item border-bottom"},[t._v("没有找到匹配数据")])],2)])])},staticRenderFns:[]};var G=i("VU/8")(U,$,!1,function(t){i("GzsJ")},"data-v-097f00c7",null).exports,E={name:"CityList",props:{hot:Array,cities:Object,letter:String},computed:c()({},Object(l.c)({currentCity:"city"})),methods:c()({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(l.b)(["changeCity"])),watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}},mounted:function(){this.scroll=new T.a(this.$refs.wrapper)}},I={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("当前城市")]),t._v(" "),i("div",{staticClass:"button-list"},[i("div",{staticClass:"button-wrapper"},[i("div",{staticClass:"button"},[t._v(t._s(this.currentCity))])])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"button-list"},t._l(t.hot,function(e){return i("div",{key:e.id,staticClass:"button-wrapper",on:{click:function(i){t.handleCityClick(e.name)}}},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])}))]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(s))]),t._v(" "),i("div",{staticClass:"item-list"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"item border-bottom",on:{click:function(i){t.handleCityClick(e.name)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])}))])})],2)])},staticRenderFns:[]};var H=i("VU/8")(E,I,!1,function(t){i("Xw2h")},"data-v-5dd7a98a",null).exports,z={name:"CityAlphabet",props:{cities:Object},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},data:function(){return{touchStatus:!1,startY:0,timer:null}},updated:function(){this.startY=this.$refs.A[0].offsetTop},methods:{handleLetterClick:function(t){this.$emit("change",t.target.innerText),console.log(t.target.innerText)},handleTouchStart:function(){this.touchStatus=!0},handleTouchMove:function(t){var e=this;this.touchStatus&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var i=t.touches[0].clientY-79,s=Math.floor((i-e.startY)/20);s>=0&&s<e.letters.length&&e.$emit("change",e.letters[s])},16))},handleTouchEnd:function(){this.touchStatus=!1}}},N={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.letters,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{click:t.handleLetterClick,touchstart:function(e){return e.preventDefault(),t.handleTouchStart(e)},touchmove:t.handleTouchMove,touchend:t.handleLetterClick}},[t._v(t._s(e))])}))},staticRenderFns:[]};var R={name:"City",components:{CityHeader:S,CitySearch:G,CityList:H,CityAlphabet:i("VU/8")(z,N,!1,function(t){i("kmld")},"data-v-9d893568",null).exports},data:function(){return{cities:{},hotCities:[],letter:""}},methods:{getCityInfo:function(){A.a.get("http://xhrbtk.cn/static/mock/city.json").then(this.handleGetCityInfoSucc)},handleGetCityInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.cities=e.cities,this.hotCities=e.hotCities}},handleLetterChange:function(t){this.letter=t,console.log(this.letter)}},mounted:function(){this.getCityInfo()}},W={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{cities:t.cities,hot:t.hotCities,letter:t.letter}}),t._v(" "),i("city-alphabet",{attrs:{cities:t.cities},on:{change:t.handleLetterChange}})],1)},staticRenderFns:[]};var J=i("VU/8")(R,W,!1,function(t){i("zoNb")},"data-v-53cb3de1",null).exports,B={name:"CommonGallary",props:{imgs:{type:Array,default:function(){return[]}}},data:function(){return{swiperOption:{pagination:".swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0}}},methods:{handleGallaryClick:function(){this.$emit("close")}}},Z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.handleGallaryClick}},[e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.imgs,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"gallary-img",attrs:{src:t}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var Y=i("VU/8")(B,Z,!1,function(t){i("YO9+")},"data-v-0a51d290",null).exports,j={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var Q=i("VU/8")({name:"FadeAnimation"},j,!1,function(t){i("pimt")},"data-v-77272b95",null).exports,O={name:"DetailBanner",props:{sightName:String,bannerImg:String,bannerImgs:Array},data:function(){return{showGallary:!1,imgs:["http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png","http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg"]}},methods:{handleBannerClick:function(){this.showGallary=!0},handleGallaryClose:function(){this.showGallary=!1}},components:{CommonGallary:Y,FadeAnimation:Q}},q={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",on:{click:t.handleBannerClick}},[i("img",{staticClass:"banner-img",attrs:{src:t.bannerImg,alt:""}}),t._v(" "),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-title"},[t._v("\r\n        "+t._s(this.sightName)+"\r\n      ")]),t._v(" "),i("div",{staticClass:"banner-number"},[i("span",{staticClass:"iconfont"},[t._v("")]),t._v("\r\n        "+t._s(this.bannerImgs.length)+"\r\n      ")])])]),t._v(" "),i("fade-animation",[i("common-gallary",{directives:[{name:"show",rawName:"v-show",value:t.showGallary,expression:"showGallary"}],attrs:{imgs:t.bannerImgs},on:{close:t.handleGallaryClose}})],1)],1)},staticRenderFns:[]};var K=i("VU/8")(O,q,!1,function(t){i("KnI+")},"data-v-5f761076",null).exports,X={name:"DetailHeader",data:function(){return{showAbs:!0,opacityStyle:{opacity:0}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;if(t>60){var e=t/140;e=e>1?1:e,this.opacityStyle={opacity:e},this.showAbs=!1}else this.showAbs=!0}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},unmounted:function(){window.removeEventListener("scroll",this.handleScroll)}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:this.showAbs,expression:"showAbs"}],staticClass:"header-abs",attrs:{tag:"div",to:"/"}},[e("div",{staticClass:"iconfont header-abs-back"},[this._v("")])]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:this.opacityStyle},[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-fixed-back"},[this._v("")])]),this._v("\n    景点详情\n  ")],1)],1)},staticRenderFns:[]};var tt=i("VU/8")(X,P,!1,function(t){i("c35/")},"data-v-79f408d2",null).exports,et={name:"DetailList",props:{list:Array}},it={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"item"},[i("div",{staticClass:"item-title border-bottom"},[i("span",{staticClass:"item-title-icon"}),t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),e.children?i("div",{staticClass:"item-children"},[i("detail-list",{attrs:{list:e.children}})],1):t._e()])}))},staticRenderFns:[]};var st={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("猜你喜欢")]),t._v(" "),i("ul",t._l(t.weekendList,function(e){return i("li",{staticClass:"item border-bottom"},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}))])},staticRenderFns:[]};var nt={name:"Detail",components:{DetailBanner:K,DetailHeader:tt,DetailList:i("VU/8")(et,it,!1,function(t){i("KG0V")},"data-v-c4dac3fc",null).exports,DetailLike:i("VU/8")({name:"DetailLike",data:function(){return{weekendList:[{id:"0001",imgUrl:"http://p3-q.mafengwo.net/s5/M00/72/A2/wKgB21Aail-CYH4LAAloGv2R9po75.jpeg?imageView2%2F2%2Fw%2F680%2Fq%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL240LXEubWFmZW5nd28ubmV0L3MxMS9NMDAvQzQvMTAvd0tnQkVGcDdzdnVBVk90Z0FBQVhuUTQzcDdjNzA1LnBuZz9pbWFnZU1vZ3IyJTJGdGh1bWJuYWlsJTJGMTgweCUyRnF1YWxpdHklMkY5MA%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F15%2Fdissolve%2F40",title:"大美新疆",desc:"北疆看风景，南疆看风情"},{id:"0002",imgUrl:"http://b1-q.mafengwo.net/s10/M00/03/C8/wKgBZ1n8MayAQF3cAADrwS8KBxg57.jpeg?imageView2%2F2%2Fw%2F680%2Fq%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL240LXEubWFmZW5nd28ubmV0L3MxMS9NMDAvQzQvMTAvd0tnQkVGcDdzdnVBVk90Z0FBQVhuUTQzcDdjNzA1LnBuZz9pbWFnZU1vZ3IyJTJGdGh1bWJuYWlsJTJGMTY5eCUyRnF1YWxpdHklMkY5MA%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F15%2Fdissolve%2F40",title:"伊犁河谷",desc:"感受春的气息"},{id:"0003",imgUrl:"http://b1-q.mafengwo.net/s10/M00/03/CA/wKgBZ1n8Ma2AXbU2AADJD-WuKfY12.jpeg?imageView2%2F2%2Fw%2F680%2Fq%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL240LXEubWFmZW5nd28ubmV0L3MxMS9NMDAvQzQvMTAvd0tnQkVGcDdzdnVBVk90Z0FBQVhuUTQzcDdjNzA1LnBuZz9pbWFnZU1vZ3IyJTJGdGh1bWJuYWlsJTJGMTY5eCUyRnF1YWxpdHklMkY5MA%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F15%2Fdissolve%2F40",title:"那拉提",desc:"美在伊犁"},{id:"0004",imgUrl:"http://b3-q.mafengwo.net/s10/M00/03/CD/wKgBZ1n8Ma-ANGN8AACcVGxVOqY41.jpeg?imageView2%2F2%2Fw%2F680%2Fq%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL240LXEubWFmZW5nd28ubmV0L3MxMS9NMDAvQzQvMTAvd0tnQkVGcDdzdnVBVk90Z0FBQVhuUTQzcDdjNzA1LnBuZz9pbWFnZU1vZ3IyJTJGdGh1bWJuYWlsJTJGMTQ2eCUyRnF1YWxpdHklMkY5MA%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F15%2Fdissolve%2F40",title:"薰衣草",desc:"解忧公主神产地"},{id:"0005",imgUrl:"http://p1-q.mafengwo.net/s11/M00/67/3D/wKgBEFqre-GARtDyAAPQuF8CiiY27.jpeg?imageView2%2F2%2Fw%2F680%2Fq%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL240LXEubWFmZW5nd28ubmV0L3MxMS9NMDAvQzQvMTAvd0tnQkVGcDdzdnVBVk90Z0FBQVhuUTQzcDdjNzA1LnBuZz9pbWFnZU1vZ3IyJTJGdGh1bWJuYWlsJTJGMTgweCUyRnF1YWxpdHklMkY5MA%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F15%2Fdissolve%2F40",title:"雪山的主宰",desc:"感受冬天的寒冷，仰望雪山的洁白"}]}}},st,!1,function(t){i("LVkC")},"data-v-e3da31be",null).exports},data:function(){return{sightName:"",bannerImg:"",gallaryImgs:[],list:[]}},methods:{getDetailInfo:function(){A.a.get("http://xhrbtk.cn/static/mock/detail.json?id=",{params:{id:this.$route.params.id}}).then(this.handleGetDataSucc)},handleGetDataSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.sightName=e.sightName,this.bannerImg=e.bannerImg,this.gallaryImgs=e.gallaryImgs,this.list=e.categoryList}console.log(t)}},mounted:function(){this.getDetailInfo()}},at={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("detail-banner",{attrs:{sightName:t.sightName,bannerImg:t.bannerImg,bannerImgs:t.gallaryImgs}}),t._v(" "),i("detail-header"),t._v(" "),i("detail-list",{attrs:{list:t.list}}),t._v(" "),i("detail-like"),t._v(" "),i("div",{staticClass:"content"},[t._v("1234")])],1)},staticRenderFns:[]};var rt=i("VU/8")(nt,at,!1,function(t){i("Y+/b")},"data-v-6eb894c8",null).exports;s.a.use(r.a);var ot=new r.a({routes:[{path:"/",name:"Home",component:L},{path:"/city",name:"City",component:J},{path:"/detail/:id",name:"Detail",component:rt}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),ct=i("v5o6"),lt=i.n(ct),dt=i("41jX"),ut=i.n(dt),ht=(i("briU"),"上海");try{localStorage.city&&(ht=localStorage.city)}catch(t){}var mt={city:ht},vt={changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}};s.a.use(l.a);var pt=new l.a.Store({state:mt,mutations:vt});i("9n10"),i("M6Sr"),i("TzC8"),i("JaVd");s.a.config.productionTip=!1,lt.a.attach(document.body),s.a.use(ut.a),new s.a({el:"#app",router:ot,store:pt,components:{App:a},template:"<App/>"})},T3Zg:function(t,e){},TzC8:function(t,e){},UGy7:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},Xw2h:function(t,e){},"Y+/b":function(t,e){},"YO9+":function(t,e){},"ZI/I":function(t,e){},"c35/":function(t,e){},kmld:function(t,e){},pimt:function(t,e){},syvT:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("Bnvi"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},zoNb:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f1fb8f9832c848f58d93.js.map