"use strict";(self["webpackChunkvue_mange"]=self["webpackChunkvue_mange"]||[]).push([[587],{4587:function(e,t,s){s.r(t),s.d(t,{default:function(){return u}});var r=function(){var e=this,t=e._self._c;return t("el-form",{ref:"form",staticClass:"login-container",attrs:{model:e.form,"status-icon":"",rules:e.rules,"label-width":"100px"}},[t("h3",{staticClass:"login_title"},[e._v("系统登录")]),t("el-form-item",{staticClass:"username",attrs:{label:"用户名","label-width":"80px",prop:"username"}},[t("el-input",{attrs:{type:"input",autocomplete:"off",placeholder:"请输入账号"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),t("el-form-item",{attrs:{label:"密码","label-width":"80px",prop:"password"}},[t("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),t("el-form-item",{staticClass:"login_submit"},[t("el-button",{staticClass:"login_submit",attrs:{type:"primary"},on:{click:e.login}},[e._v("登录")])],1)],1)},a=[],o=(s(7658),s(7634),s(8560)),l={name:"login",data(){return{form:{},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,message:"用户名长度不能小于3位",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{login(){(0,o.r7)(this.form).then((({data:e})=>{console.log(e),2e4===e.code?(this.$store.commit("clearMenu"),this.$store.commit("setMenu",e.data.menu),this.$store.commit("setToken",e.data.token),this.$store.commit("addMenu",this.$router),this.$router.push({name:"home"})):this.$message.warning(e.data.message)}))}}},i=l,n=s(1001),m=(0,n.Z)(i,r,a,!1,null,"bf8bd3e4",null),u=m.exports}}]);
//# sourceMappingURL=587.1128705d.js.map