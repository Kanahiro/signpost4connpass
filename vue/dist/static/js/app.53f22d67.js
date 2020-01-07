(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],d=0,h=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&h.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(h.length)h.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,s=1;s<r.length;s++){var l=r[s];0!==o[l]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},a=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},"4a40":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Header"),r("SearchPanel",{on:{onGetApiData:t.showEvents}}),r("MapPane",{attrs:{id:"mapPane",events:t.events}}),t.events.length>0?r("EventsList",{attrs:{events:t.events}}):t._e(),r("Footer")],1)},a=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header"},[r("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[r("b-navbar-brand",{attrs:{href:"/"}},[t._v("Signpost for connpass")]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{href:"https://connpass.com/"}},[t._v("connpass")]),r("b-nav-item",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-about",modifiers:{"modal-about":!0}}],attrs:{href:"#"}},[t._v("about")]),r("b-modal",{attrs:{id:"modal-about",title:"about","hide-footer":""}},[r("p",{staticClass:"my-4"},[t._v(" このサイトは"),r("a",{attrs:{href:"https://connpass.com/"}},[t._v("connpass - エンジニアをつなぐ IT勉強会支援プラットフォーム")]),t._v(" が提供する"),r("a",{attrs:{href:"https://connpass.com/about/api/"}},[t._v("WebAPI")]),t._v("を活用し、イベント情報を地図上で可視化する事を目的としています。 ご意見・お問い合わせは"),r("a",{attrs:{href:"https://twitter.com/kanahiro_iguchi"}},[t._v("Twitterアカウント")]),t._v("までどうぞ。 ")])])],1)],1)],1)],1)},s=[],l={name:"Header",data:function(){return{}},created:function(){},methods:{}},c=l,u=r("2877"),d=Object(u["a"])(c,i,s,!1,null,"61294603",null),h=d.exports,f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"searchPanel"},[r("b-form",{staticClass:"inlineForm",attrs:{inline:""},on:{submit:function(e){return e.preventDefault(),t.onSearch(e)}}},[r("label",{attrs:{for:"keyword"}},[t._v("キーワード：")]),r("b-form-input",{attrs:{type:"search",placeholder:"例：python もくもく会"},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),r("label",{attrs:{for:"startDate"}},[t._v("開催日：")]),r("b-form-input",{attrs:{type:"date",id:"startDate"},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}}),r("label",{attrs:{for:"startMonth"}},[t._v("開催月：")]),r("b-form-input",{attrs:{type:"month",id:"startMonth"},model:{value:t.startMonth,callback:function(e){t.startMonth=e},expression:"startMonth"}}),r("b-button",{staticClass:"submitButton",attrs:{type:"submit"},on:{click:t.onSearch}},[t.isSearching?t._e():r("span",[t._v("検索")]),t.isSearching?r("b-spinner",{attrs:{small:"",label:"Spinning"}}):t._e()],1)],1)],1)},p=[],E=(r("d3b7"),r("ac1f"),r("5319"),{name:"SearchPanel",data:function(){return{keyword:"",startDate:"",startMonth:"",pref:"",city:"",isSearching:!1}},created:function(){},methods:{dateToString:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=new Date(t),n=r.getFullYear(),o=r.getMonth()+1,a=r.getDate();return n=String(n),o<10&&(o="0"+String(o)),a<10&&(a="0"+String(a)),e?n+"-"+o:n+"-"+o+"-"+a},fetchApi:function(t){var e=this;this.isSearching=!0,fetch("/api/?"+t).then((function(t){return t.json()})).then((function(t){e.$emit("onGetApiData",t),e.isSearching=!1})).catch((function(t){console.log(t),alert("エラーが発生しました。"),e.isSearching=!1}))},makeQueryUrl:function(t){var e="";for(var r in t)""!=t[r]&&(e=e+"&"+r+"="+t[r]);return e},validateQueryObj:function(t){for(var e in t)if(""!=t[e])return!0;return alert("空欄では検索できません。"),!1},onSearch:function(){var t={};if(t["keyword_or"]=this.keyword,t["ymd"]=this.startDate.replace(/-/g,""),t["ym"]=this.startMonth.replace(/-/g,""),""!=this.pref&&(t["keyword_or"]=t["keyword_or"]+","+this.pref),""!=this.city&&(t["keyword_or"]=t["keyword_or"]+","+this.city),this.validateQueryObj(t)){var e=this.makeQueryUrl(t);this.fetchApi(e)}}}}),I=E,T=(r("8bd5"),Object(u["a"])(I,f,p,!1,null,"7f2fb88c",null)),O=T.exports,S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mapPane"},[r("MglMap",{staticClass:"MglMap",attrs:{mapStyle:t.mapStyle,center:t.center,zoom:t.zoom,minZoom:t.zoom,maxZoom:t.maxZoom},on:{load:t.onloaded}},[r("MglNavigationControl",{attrs:{position:"top-left"}}),t._l(t.events,(function(e){return r("MglMarker",{key:e.event_id,attrs:{coordinates:t.latlonAry(e),color:"green"}},[r("MglPopup",[r("div",[r("a",{attrs:{href:e.event_url}},[r("h6",[t._v(t._s(e.title))])]),r("p",[t._v(t._s(e.catch))]),r("table",[r("tr",[r("td",[t._v("開催日時")]),r("td",[t._v(t._s(t.dateToString(e.started_at)))])]),r("tr",[r("td",[t._v("会場")]),r("td",[t._v(t._s(e.place))])])])])])],1)}))],2)],1)},m=[],R=(r("d81d"),r("e192")),v=r.n(R),b=r("3f3d"),N={name:"MapPane",components:{MglMap:b["a"],MglNavigationControl:b["c"],MglMarker:b["b"],MglPopup:b["d"]},props:{events:Array},data:function(){return{center:[139,38.5],zoom:3.5,maxZoom:17,mapStyle:this.makeMapStyle("https://tile.openstreetmap.jp/{z}/{x}/{y}.png","map data © OpenStreetMap contributors")}},methods:{onloaded:function(){this.map=v.a},makeMapStyle:function(t,e){return{version:8,sources:{Raster:{type:"raster",tiles:[t],tileSize:256,attribution:e}},layers:[{id:"RasterLayer",type:"raster",source:"Raster",minzoom:0,maxzoom:18}]}},latlonAry:function(t){return[t.lon,t.lat]},dateToString:function(t){var e=new Date(t),r=e.getFullYear(),n=e.getMonth()+1,o=e.getDate();e.getTime();return String(r)+"/"+String(n)+"/"+String(o)}},computed:{}},A=N,g=(r("6d14"),Object(u["a"])(A,S,m,!1,null,"260cecfb",null)),y=g.exports,D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"eventsList"},[r("b-table-simple",{attrs:{hover:"",small:""}},[r("b-thead",[r("b-tr",[r("b-th",[t._v("開催日")]),r("b-th",[t._v("タイトル")]),r("b-th",[t._v("タグ")])],1)],1),r("b-tbody",t._l(t.events,(function(e){return r("b-tr",{key:e.event_id},[r("b-th",{staticClass:"text-center"},[t._v(t._s(t.dateToString(e.started_at)))]),r("b-th",{staticClass:"text-left"},[r("a",{attrs:{href:e.event_url}},[t._v(t._s(e.title))])]),r("b-td",[t._v(t._s(e.hash_tag))])],1)})),1)],1)],1)},C=[],L={name:"EventsList",props:{events:Array},methods:{dateToString:function(t){var e=new Date(t),r=e.getFullYear(),n=e.getMonth()+1,o=e.getDate();e.getTime();return String(r)+"/"+String(n)+"/"+String(o)}}},_=L,M=Object(u["a"])(_,D,C,!1,null,"efa34854",null),w=M.exports,H=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer"},[t._v(" © "+t._s(t.thisYear)+" Kanahiro Iguchi. "),r("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-license",modifiers:{"modal-license":!0}}],attrs:{href:"#"}},[t._v("license")]),r("b-modal",{attrs:{id:"modal-license",title:"license","hide-footer":""}},[r("p",{staticClass:"my-4"},[t._v(' Mapbox GL JS Copyright (c) 2016, Mapbox All rights reserved. Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met: * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer. * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution. * Neither the name of Mapbox GL JS nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission. THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. ------------------------------------------------------------------------------- Contains Hershey Simplex Font: http://paulbourke.net/dataformats/hershey/ ------------------------------------------------------------------------------- Contains code from glfx.js Copyright (C) 2011 by Evan Wallace Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. -------------------------------------------------------------------------------- Contains a portion of d3-color https://github.com/d3/d3-color Copyright 2010-2016 Mike Bostock All rights reserved. Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met: * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer. * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution. * Neither the name of the author nor the names of contributors may be used to endorse or promote products derived from this software without specific prior written permission. THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. ')])])],1)},P=[],F={name:"Header",data:function(){return{}},created:function(){},methods:{},computed:{thisYear:function(){var t=new Date(Date.now());return String(t.getFullYear())}}},U=F,Y=(r("e459"),Object(u["a"])(U,H,P,!1,null,"b2221f80",null)),B=Y.exports,k={name:"app",components:{Header:h,SearchPanel:O,MapPane:y,EventsList:w,Footer:B},data:function(){return{events:[]}},methods:{showEvents:function(t){this.events=t.events}}},G=k,W=(r("034f"),Object(u["a"])(G,o,a,!1,null,null,null)),x=W.exports,j=(r("ac6d"),r("5f5b"));r("f9e3"),r("2dd8");n["default"].use(j["a"]),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(x)}}).$mount("#app")},"6d14":function(t,e,r){"use strict";var n=r("4a40"),o=r.n(n);o.a},"789e":function(t,e,r){},"85ec":function(t,e,r){},"8bd5":function(t,e,r){"use strict";var n=r("e3f8"),o=r.n(n);o.a},e3f8:function(t,e,r){},e459:function(t,e,r){"use strict";var n=r("789e"),o=r.n(n);o.a}});
//# sourceMappingURL=app.53f22d67.js.map