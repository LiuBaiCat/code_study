"use strict";(self.webpackChunk_03_webpack_study=self.webpackChunk_03_webpack_study||[]).push([[938],{130:(e,t,n)=>{var o=n(879);localStorage.getItem("token")||(location.href="../login/index.html"),(0,o.A)({url:"/v1_0/user/profile"}).then((e=>{const t=e.data.name;document.querySelector(".nick-name").innerHTML=t})),document.querySelector(".quit").addEventListener("click",(e=>{localStorage.removeItem("token"),location.href="../login/index.html"}))}}]);