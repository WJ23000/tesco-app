webpackJsonp([13],{"2dtY":function(s,t){},qIi0:function(s,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"OrderList",components:{HeaderTwo:i("UNd4").a},data:function(){return{title:"我的订单",active:0}},created:function(){this.active=this.$route.query.indexId},mounted:function(){},methods:{onTab:function(s,t){this.$toast(t)},remindGoods:function(){var s=this;this.$dialog.confirm({title:"订单",message:"是否提醒商家发货"}).then(function(){s.$notify({message:"提醒发货成功",background:"#3982f6"})}).catch(function(){})},okGoods:function(){var s=this;this.$dialog.confirm({title:"订单",message:"是否确认收货"}).then(function(){s.$notify({message:"确认收货成功",background:"#3982f6"})}).catch(function(){})}}},v={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"page"},[a("div",{staticClass:"page-header"},[a("HeaderTwo",{attrs:{titleVal:s.title}})],1),s._v(" "),a("div",{staticClass:"page-content"},[a("van-tabs",{attrs:{active:s.active,color:"#3982f6",animated:""},on:{click:s.onTab}},[a("van-tab",{attrs:{title:"待付款"}},[a("div",{staticClass:"order-cell"},[a("router-link",{attrs:{to:{path:"/OrderDetail",query:{orderId:1}}}},[a("div",{staticClass:"order-cell-store"},[a("div",{staticClass:"store-img"},[a("img",{staticClass:"img",attrs:{src:i("fuXS")}})]),s._v(" "),a("div",{staticClass:"store-left"},[s._v("乐购商城")]),s._v(" "),a("div",{staticClass:"store-right"},[s._v("待付款")])]),s._v(" "),a("div",{staticClass:"order-cell-shop"},[a("div",{staticClass:"shop-img"},[a("img",{staticClass:"img",attrs:{src:i("T2YF")}})]),s._v(" "),a("div",{staticClass:"shop-fx"},[a("div",{staticClass:"shop-label"},[s._v("智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版优惠大放送")]),s._v(" "),a("div",{staticClass:"shop-price"},[s._v("￥3500.00")]),s._v(" "),a("div",{staticClass:"shop-specif"},[s._v("蓝色"),a("div",{staticClass:"count"},[s._v("×2")])])]),s._v(" "),a("div",{staticClass:"shop-amount"},[s._v("合计：￥7000.00")])])]),s._v(" "),a("div",{staticClass:"order-cell-btn"},[a("router-link",{attrs:{to:{path:"/PayOrder",query:{orderId:1}}}},[a("button",{staticClass:"btn-zf"},[s._v("去付款")])])],1)],1),s._v(" "),a("div",{staticClass:"order-cell"},[a("div",{staticClass:"order-cell-store"},[a("div",{staticClass:"store-img"},[a("img",{staticClass:"img",attrs:{src:i("fuXS")}})]),s._v(" "),a("div",{staticClass:"store-left"},[s._v("乐购商城")]),s._v(" "),a("div",{staticClass:"store-right"},[s._v("待付款")])]),s._v(" "),a("div",{staticClass:"order-cell-shop"},[a("div",{staticClass:"shop-img"},[a("img",{staticClass:"img",attrs:{src:i("T2YF")}})]),s._v(" "),a("div",{staticClass:"shop-fx"},[a("div",{staticClass:"shop-label"},[s._v("智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版优惠大放送")]),s._v(" "),a("div",{staticClass:"shop-price"},[s._v("￥3500.00")]),s._v(" "),a("div",{staticClass:"shop-specif"},[s._v("蓝色"),a("div",{staticClass:"count"},[s._v("×2")])])]),s._v(" "),a("div",{staticClass:"shop-amount"},[s._v("合计：￥7000.00")])]),s._v(" "),a("div",{staticClass:"order-cell-btn"},[a("button",{staticClass:"btn-zf"},[s._v("去付款")])])]),s._v(" "),a("div",{staticClass:"order-cell"},[a("div",{staticClass:"order-cell-store"},[a("div",{staticClass:"store-img"},[a("img",{staticClass:"img",attrs:{src:i("fuXS")}})]),s._v(" "),a("div",{staticClass:"store-left"},[s._v("乐购商城")]),s._v(" "),a("div",{staticClass:"store-right"},[s._v("待付款")])]),s._v(" "),a("div",{staticClass:"order-cell-shop"},[a("div",{staticClass:"shop-img"},[a("img",{staticClass:"img",attrs:{src:i("T2YF")}})]),s._v(" "),a("div",{staticClass:"shop-fx"},[a("div",{staticClass:"shop-label"},[s._v("智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版优惠大放送")]),s._v(" "),a("div",{staticClass:"shop-price"},[s._v("￥3500.00")]),s._v(" "),a("div",{staticClass:"shop-specif"},[s._v("蓝色"),a("div",{staticClass:"count"},[s._v("×2")])])]),s._v(" "),a("div",{staticClass:"shop-amount"},[s._v("合计：￥7000.00")])]),s._v(" "),a("div",{staticClass:"order-cell-btn"},[a("button",{staticClass:"btn-zf"},[s._v("去付款")])])])]),s._v(" "),a("van-tab",{attrs:{title:"已发货"}},[a("div",{staticClass:"order-cell"},[a("div",{staticClass:"order-cell-store"},[a("div",{staticClass:"store-img"},[a("img",{staticClass:"img",attrs:{src:i("fuXS")}})]),s._v(" "),a("div",{staticClass:"store-left"},[s._v("乐购商城")]),s._v(" "),a("div",{staticClass:"store-right"},[s._v("已付款")])]),s._v(" "),a("div",{staticClass:"order-cell-shop"},[a("div",{staticClass:"shop-img"},[a("img",{staticClass:"img",attrs:{src:i("T2YF")}})]),s._v(" "),a("div",{staticClass:"shop-fx"},[a("div",{staticClass:"shop-label"},[s._v("智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版优惠大放送")]),s._v(" "),a("div",{staticClass:"shop-price"},[s._v("￥3500.00")]),s._v(" "),a("div",{staticClass:"shop-specif"},[s._v("蓝色"),a("div",{staticClass:"count"},[s._v("×2")])])]),s._v(" "),a("div",{staticClass:"shop-amount"},[s._v("合计：￥7000.00")])]),s._v(" "),a("div",{staticClass:"order-cell-btn"},[a("button",{staticClass:"btn-zf",on:{click:s.remindGoods}},[s._v("提醒发货")])])])]),s._v(" "),a("van-tab",{attrs:{title:"待收货"}},[a("div",{staticClass:"order-cell"},[a("div",{staticClass:"order-cell-store"},[a("div",{staticClass:"store-img"},[a("img",{staticClass:"img",attrs:{src:i("fuXS")}})]),s._v(" "),a("div",{staticClass:"store-left"},[s._v("乐购商城")]),s._v(" "),a("div",{staticClass:"store-right"},[s._v("已发货")])]),s._v(" "),a("div",{staticClass:"order-cell-shop"},[a("div",{staticClass:"shop-img"},[a("img",{staticClass:"img",attrs:{src:i("T2YF")}})]),s._v(" "),a("div",{staticClass:"shop-fx"},[a("div",{staticClass:"shop-label"},[s._v("智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版优惠大放送")]),s._v(" "),a("div",{staticClass:"shop-price"},[s._v("￥3500.00")]),s._v(" "),a("div",{staticClass:"shop-specif"},[s._v("蓝色"),a("div",{staticClass:"count"},[s._v("×2")])])]),s._v(" "),a("div",{staticClass:"shop-amount"},[s._v("合计：￥7000.00")])]),s._v(" "),a("div",{staticClass:"order-cell-btn"},[a("button",{staticClass:"btn-zf",on:{click:s.okGoods}},[s._v("确认收货")])])])]),s._v(" "),a("van-tab",{attrs:{title:"待评价"}},[a("div",{staticClass:"order-cell"},[a("div",{staticClass:"order-cell-store"},[a("div",{staticClass:"store-img"},[a("img",{staticClass:"img",attrs:{src:i("fuXS")}})]),s._v(" "),a("div",{staticClass:"store-left"},[s._v("乐购商城")]),s._v(" "),a("div",{staticClass:"store-right"},[s._v("已收货")])]),s._v(" "),a("div",{staticClass:"order-cell-shop"},[a("div",{staticClass:"shop-img"},[a("img",{staticClass:"img",attrs:{src:i("T2YF")}})]),s._v(" "),a("div",{staticClass:"shop-fx"},[a("div",{staticClass:"shop-label"},[s._v("智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版优惠大放送")]),s._v(" "),a("div",{staticClass:"shop-price"},[s._v("￥3500.00")]),s._v(" "),a("div",{staticClass:"shop-specif"},[s._v("蓝色"),a("div",{staticClass:"count"},[s._v("×2")])])]),s._v(" "),a("div",{staticClass:"shop-amount"},[s._v("合计：￥7000.00")])]),s._v(" "),a("div",{staticClass:"order-cell-btn"},[a("router-link",{attrs:{to:{path:"/Evalu",query:{orderId:1}}}},[a("button",{staticClass:"btn-zf"},[s._v("立即评价")])])],1)])])],1)],1)])},staticRenderFns:[]};var c=i("VU/8")(a,v,!1,function(s){i("2dtY")},"data-v-94f9f290",null);t.default=c.exports}});
//# sourceMappingURL=13.8640c17a07ea854bb8be.js.map