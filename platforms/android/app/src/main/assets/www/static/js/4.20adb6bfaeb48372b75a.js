webpackJsonp([4],{"/GAX":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("UNd4"),a=s("zV51"),o={name:"searchOrderList",components:{HeaderTwo:e.a,GoodsList:a.a},data:function(){return{title:"商品列表",textColor:"",textIndex:0,sortImg1:s("uptC"),sortIndex1:0,sortImg2:s("uptC"),sortIndex2:0,viewImg:s("cA88"),viewIndex:0,viewWay:!1,goodsList:[{id:1,title:"智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版",price:3001,sell:101,url:"",icon:s("T2YF")},{id:2,title:"智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版",price:3002,sell:102,url:"",icon:s("T2YF")},{id:3,title:"智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版",price:3003,sell:103,url:"",icon:s("T2YF")},{id:4,title:"智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版",price:3004,sell:104,url:"",icon:s("T2YF")},{id:5,title:"智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版",price:3005,sell:105,url:"",icon:s("T2YF")},{id:6,title:"智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版",price:3006,sell:106,url:"",icon:s("T2YF")}],query1:"参数1",query2:"参数2",query3:"参数3"}},created:function(){this.loadList()},mounted:function(){},methods:{textSort:function(t){0==this.textIndex?(this.textColor="textColor",this.textIndex=1,this.query1="综合",this.loadList()):(this.textColor="",this.textIndex=0,this.query1="默认",this.loadList())},searchSort1:function(t){0==this.sortIndex1?(this.sortImg1=s("56J0"),this.sortIndex1=1,this.query2="低",this.loadList()):(this.sortImg1=s("uptC"),this.sortIndex1=0,this.query2="高",this.loadList())},searchSort2:function(t){0==this.sortIndex2?(this.sortImg2=s("56J0"),this.sortIndex2=1,this.query3="便宜",this.loadList()):(this.sortImg2=s("uptC"),this.sortIndex2=0,this.query3="昂贵",this.loadList())},viewSort:function(t){0==this.viewIndex?(this.viewImg=s("9Xhz"),this.viewIndex=1,this.viewWay=!0):(this.viewImg=s("cA88"),this.viewIndex=0,this.viewWay=!1)},loadList:function(){var t=this.query1,i=this.query2,s=this.query3;this.$toast({message:"请求参数="+t+","+i+","+s,duration:1e3})}}},n={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"page"},[s("div",{staticClass:"page-header"},[s("HeaderTwo",{attrs:{titleVal:t.title}})],1),t._v(" "),s("div",{staticClass:"page-content"},[s("div",{staticClass:"sort-wrap"},[s("div",{staticClass:"sort-btn",attrs:{"data-index":t.textIndex},on:{click:t.textSort}},[s("div",{class:t.textColor},[t._v("综合")])]),t._v(" "),s("div",{staticClass:"sort-btn",attrs:{"data-index":t.sortIndex1},on:{click:t.searchSort1}},[t._v("\n        销量\n        "),s("img",{attrs:{src:t.sortImg1}})]),t._v(" "),s("div",{staticClass:"sort-btn",attrs:{"data-index":t.sortIndex2},on:{click:t.searchSort2}},[t._v("\n        价格\n        "),s("img",{attrs:{src:t.sortImg2}})]),t._v(" "),s("div",{staticClass:"sort-btn",attrs:{"data-index":t.viewIndex},on:{click:t.viewSort}},[s("img",{staticClass:"view-Img",attrs:{src:t.viewImg}})])]),t._v(" "),s("div",{staticStyle:{float:"left"}},[s("GoodsList",{attrs:{goodsListVal:t.goodsList,viewWayVal:t.viewWay}})],1)])])},staticRenderFns:[]};var r=s("VU/8")(o,n,!1,function(t){s("ZV4h")},"data-v-f45896a6",null);i.default=r.exports},"56J0":function(t,i,s){t.exports=s.p+"static/img/sort-up.cf5934d.png"},"9Xhz":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAjUlEQVRYR+2VQQ6AIAwEl5Pf8g0+0n/4Mg0HjImGbClNY7KcOCxhGCgtSB4leX8I4GngNFzHNHNegA3ADmAxwNfoAWCtky+A3umapZZJBzAe/B33GhCADIRUAaM1tAwtAEy2m5n2pY6SCMDbjEbN3+u8ACFlqG5oMRDyBgTwKwMhZcg8LHVDxhKVUTe8AOe2NCH/gW/UAAAAAElFTkSuQmCC"},ZV4h:function(t,i){},cA88:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABX0lEQVRYR+3XMUsdURAF4O81EhvthWihRYKFgiLYWKiFICHEX2ATgoKVYKWNhYVgIwYxXf6AIhJIISkEG8FCEWy0UPEHaKOkUUae8Li+vXb6ip12z5mdPXtnztyKd47KO79fwxUwjD/4kFHmCgv4nWCm8fMVRY8xg71nXKrAP3zCr0yir+hES4K5wRl2MtwpnGCkqIBDPKA/kySK+86L3xe8ePYjw32RP1WgLKBUoFRgE2M4yLTSZ9yjI8HEgGrCaYbbh118K5oDbZhDbyZJ9Ps89hNMD2bRnuHeVefEZVEBb+5NDWdGpQJxgDbQnJEiDtAKjhLMIJbqmFQtLDjLuC46hFsYRQykoog2/I+PCeCiukfk2nAAfzFR2nGpQKlAwyoQa3k31jNz4Au60JpgbnGO7Qw3NuaYE3H/eIrUjIawirDWXMTlYi0BTGKxzoCqhcUeMY740LoFlGb05go8Atw7kSEQOIG3AAAAAElFTkSuQmCC"},uptC:function(t,i,s){t.exports=s.p+"static/img/sort-down.3d18b52.png"},x2sY:function(t,i){},zV51:function(t,i,s){"use strict";var e={name:"goodsList",props:{goodsListVal:{type:Array},viewWayVal:{type:Boolean}},data:function(){return{goodsListData:[],viewWayData:!1,curActive1:"goods-grid-flex",curActive2:"goods-grid"}},created:function(){},mounted:function(){this.goodsListData=this.goodsListVal,this.viewWayData=this.viewWayVal},watch:{goodsListVal:{immediate:!0,handler:function(t){this.goodsListData=t}},viewWayVal:{immediate:!0,handler:function(t){this.viewWayData=t}}}},a={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"goods-list"},t._l(t.goodsListData,function(i,e){return s("div",{key:e,class:t.viewWayData?t.curActive1:t.curActive2},[s("router-link",{attrs:{to:{path:"/GoodsDetail",query:{goodsId:i.id}}}},[s("div",{staticClass:"goods-icon"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.icon,expression:"item.icon"}]})]),t._v(" "),s("div",{staticClass:"goods-detail"},[s("span",{staticClass:"goods-title"},[t._v(t._s(i.title))]),t._v(" "),s("span",{staticClass:"goods-price"},[t._v("￥"+t._s(i.price))]),t._v(" "),s("span",{staticClass:"goods-sell"},[t._v("已出售"+t._s(i.sell))])])])],1)}),0)},staticRenderFns:[]};var o=s("VU/8")(e,a,!1,function(t){s("x2sY")},null,null);i.a=o.exports}});
//# sourceMappingURL=4.20adb6bfaeb48372b75a.js.map