(window.webpackJsonp=window.webpackJsonp||[]).push([[8,11],{588:function(t,e,n){},619:function(t,e,n){"use strict";var a=n(588);n.n(a).a},620:function(t,e,n){},622:function(t,e,n){"use strict";n.r(e);var a=n(73),s=n(0),o={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"},"/ru/":{message:"Доступен новый контент.",buttonText:"Обновить"},"/uk/":{message:"Доступний новий контент.",buttonText:"Оновити"},"/ja/":{message:"新しいコンテンツがあります。",buttonText:"更新する"},"/es/":{message:"Hay nuevo contenido disponible.",buttonText:"Actualizar"}},u={name:"SWUpdatePopup",data:function(){return{rawPopupConfig:{message:["检测到可用的新内容。","New content is available."],buttonText:["更新缓存","Refresh"]},updateEvent:null}},computed:{popupConfig:function(){return Object(s.h)(this,this.rawPopupConfig)},enabled:function(){return Boolean(this.popupConfig&&this.updateEvent)},message:function(){var t=this.popupConfig;return t&&t.message||o["/"].message},buttonText:function(){var t=this.popupConfig;return t&&t.buttonText||o["/"].buttonText}},created:function(){a.a.$on("sw-updated",this.onSWUpdated),!0==={message:["检测到可用的新内容。","New content is available."],buttonText:["更新缓存","Refresh"]}&&(this.rawPopupConfig=o)},methods:{onSWUpdated:function(t){this.updateEvent=t},reload:function(){this.updateEvent&&(this.updateEvent.skipWaiting().then((function(){location.reload(!0)})),this.updateEvent=null)}}},i=(n(619),n(2)),p=Object(i.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t._t("default",[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n      "+t._s(t.message)+"\n\n      "),n("br"),t._v(" "),n("button",{on:{click:t.reload}},[t._v("\n        "+t._s(t.buttonText)+"\n      ")])]):t._e()],{reload:t.reload,enabled:t.enabled,message:t.message,buttonText:t.buttonText})],2)}),[],!1,null,"03f17113",null);e.default=p.exports},638:function(t,e,n){"use strict";var a=n(620);n.n(a).a},651:function(t,e,n){"use strict";n.r(e);var a={components:{SWUpdatePopup:n(622).default}},s=(n(638),n(2)),o=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SWUpdatePopup",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.enabled,s=e.reload,o=e.message,u=e.buttonText;return[a?n("div",{staticClass:"my-sw-update-popup"},[n("div",{staticClass:"msg",domProps:{innerHTML:t._s(o[t.mustom$LangIndex])}}),t._v(" "),n("div",[n("span",{staticClass:"btn",on:{click:s}},[t._v(t._s(u[t.mustom$LangIndex]))])])]):t._e()]}}])})}),[],!1,null,"736a5178",null);e.default=o.exports}}]);