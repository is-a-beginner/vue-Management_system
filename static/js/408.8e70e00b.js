"use strict";(self["webpackChunkvue_mange"]=self["webpackChunkvue_mange"]||[]).push([[408],{408:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var s=function(){var e=this,t=e._self._c;return t("el-container",{staticStyle:{height:"100%"}},[t("el-aside",{attrs:{width:"auto"}},[t("common-aside")],1),t("el-container",[t("el-header",[t("common-header")],1),t("common-tag"),t("el-main",[t("router-view")],1)],1)],1)},l=[],a=function(){var e=this,t=e._self._c;return t("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-4-1","background-color":"#545c64","text-color":"#fff","active-text-color":"#03a0d6",collapse:e.isCollapse},on:{open:e.handleOpen,close:e.handleClose}},[t("h3",[e._v(e._s(e.isCollapse?"后台":"通用后台管理系统"))]),e._l(e.noChildren,(function(n){return t("el-menu-item",{key:n.path,attrs:{index:n.path+""},on:{click:function(t){return e.clickMenu(n)}}},[t("i",{class:"el-icon-"+n.icon}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(n.label))])])})),e._l(e.hasChildren,(function(n){return t("el-submenu",{key:n.path,attrs:{index:n.path+""}},[t("template",{slot:"title"},[t("i",{class:"el-icon-"+n.icon}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(n.label))])]),e._l(n.children,(function(n,s){return t("el-menu-item-group",{key:n.path},[t("el-menu-item",{attrs:{index:s+""},on:{click:function(t){return e.clickMenu(n)}}},[e._v(" "+e._s(n.label))])],1)}))],2)}))],2)},o=[],r=(n(7658),{data(){return{menu:[]}},methods:{handleOpen(e,t){console.log(e,t)},handleClose(e,t){console.log(e,t)},clickMenu(e){this.$router.push({name:e.name}),this.$store.commit("selectMenu",e)}},computed:{noChildren(){return this.asyncMenu.filter((e=>!e.children))},hasChildren(){return this.asyncMenu.filter((e=>e.children))},isCollapse(){return this.$store.state.tab.isCollapse},asyncMenu(){return this.$store.state.tab.menu}}}),i=r,c=n(1001),u=(0,c.Z)(i,a,o,!1,null,"bfd56c54",null),m=u.exports,h=function(){var e=this,t=e._self._c;return t("header",[t("div",{staticClass:"I-content"},[t("el-button",{attrs:{plain:"",icon:"el-icon-menu",size:"mini"},on:{click:e.handleMenu}}),t("el-breadcrumb",{attrs:{separator:"/"}},e._l(e.tags,(function(n){return t("el-breadcrumb-item",{key:n.path,attrs:{to:{path:n.path}}},[e._v(e._s(n.label))])})),1)],1),t("div",{staticClass:"r-content"},[t("el-dropdown",{attrs:{trigger:"click",size:"mini"}},[t("span",[t("img",{staticClass:"user",attrs:{src:e.userImg}})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",{attrs:{icon:"el-icon-plus"}},[e._v("个人中心")]),t("el-dropdown-item",{attrs:{icon:"el-icon-circle-plus"},nativeOn:{click:function(t){return e.logOut.apply(null,arguments)}}},[e._v("退出")])],1)],1)],1)])},d=[],p=n(3822),f={name:"CommonHeader",data(){return{userImg:n(990)}},methods:{handleMenu(){this.$store.commit("collapseMenu")},logOut(){this.$store.commit("clearToken"),this.$store.commit("clearMenu"),this.$router.push("/login")}},computed:{...(0,p.rn)({tags:e=>e.tab.tabsList})}},g=f,_=(0,c.Z)(g,h,d,!1,null,"166d35b4",null),b=_.exports,C=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tags"},e._l(e.tags,(function(n,s){return t("el-tag",{key:n.name,attrs:{closable:"home"!==n.name,effect:e.$route.name===n.name?"dark":"plain",size:"small"},on:{click:function(t){return e.changeMenu(n)},close:function(t){return e.handleClose(n,s)}}},[e._v(" "+e._s(n.label)+" ")])})),1)},v=[],k={name:"CommonTag",data(){return{}},methods:{...(0,p.OI)({close:"closeTag"}),changeMenu(e){this.$router.push({name:e.name})},handleClose(e,t){const n=this.tags.length-1;this.close(e),e.name===this.$route.name&&(t===n?this.$router.push({name:this.tags[t-1].name}):this.$router.push({name:this.tags[t].name}))}},computed:{...(0,p.rn)({tags:e=>e.tab.tabsList})}},M=k,$=(0,c.Z)(M,C,v,!1,null,"14562bf0",null),w=$.exports,x={name:"Home",components:{CommonAside:m,CommonHeader:b,CommonTag:w},data(){return{}}},y=x,O=(0,c.Z)(y,s,l,!1,null,"ec962d44",null),I=O.exports},990:function(e,t,n){e.exports=n.p+"static/img/1(1).18ff9a8e.jpg"}}]);
//# sourceMappingURL=408.8e70e00b.js.map