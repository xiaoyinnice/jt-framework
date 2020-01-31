(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{216:function(e,a,t){"use strict";t.r(a);var r=t(0),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"aware接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aware接口","aria-hidden":"true"}},[e._v("#")]),e._v(" Aware接口")]),e._v(" "),t("p",[e._v("首先声明这种 "),t("code",[e._v("Aware")]),e._v(" 接口是从 "),t("code",[e._v("Spring")]),e._v(" 中借鉴(抄袭)的 😂😂😂😂😂😂。")]),e._v(" "),t("p",[e._v("所以你要是知道 "),t("code",[e._v("Spring")]),e._v(" 中的诸如 "),t("code",[e._v("ApplicationContextAware")]),e._v("、"),t("code",[e._v("EnvironmentAware")]),e._v(" 等就几乎没必要看本小节了。")]),e._v(" "),t("h2",{attrs:{id:"为什么会提供？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么会提供？","aria-hidden":"true"}},[e._v("#")]),e._v(" 为什么会提供？")]),e._v(" "),t("p",[e._v("在用注解解析映射请求报文到实体类的时候，字段长度等的计算可能会依赖于消息头中的一些属性。")]),e._v(" "),t("p",[e._v("所以在基于注解的实体类映射时，你可以给实体类实现这些接口以自动注入一些其他信息。")]),e._v(" "),t("div",{staticClass:"danger custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),t("p",[e._v("目前为止，这些Aware接口只能用于 "),t("code",[e._v("请求体消息实体类")]),e._v(" 中。")])]),e._v(" "),t("h2",{attrs:{id:"requestmsgheaderaware"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requestmsgheaderaware","aria-hidden":"true"}},[e._v("#")]),e._v(" RequestMsgHeaderAware")]),e._v(" "),t("p",[e._v("每次消息处理时为实体类注入 "),t("code",[e._v("RequestMsgHeader")]),e._v(" 实例。")]),e._v(" "),t("h2",{attrs:{id:"requestmsgmetadataaware"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requestmsgmetadataaware","aria-hidden":"true"}},[e._v("#")]),e._v(" RequestMsgMetadataAware")]),e._v(" "),t("p",[e._v("每次消息处理时为实体类注入 "),t("code",[e._v("RequestMsgMetadata")]),e._v(" 实例。")])])}),[],!1,null,null,null);a.default=s.exports}}]);