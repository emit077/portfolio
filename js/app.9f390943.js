(function(t){function e(e){for(var s,n,c=e[0],i=e[1],l=e[2],u=0,p=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&p.push(r[n][0]),r[n]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);m&&m(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,n=1;n<a.length;n++){var c=a[n];0!==r[c]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},r={app:0},o=[];function c(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-1585e10e":"5b340bc6","chunk-74185b43":"392be488","chunk-260bec03":"f51cefa6","chunk-428f99da":"918c330a","chunk-6f7c2cc6":"2153adda","chunk-72dea0ee":"01033d8a","chunk-3bcd7ee2":"a9b0b058"}[t]+".js"}function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a={"chunk-1585e10e":1,"chunk-74185b43":1,"chunk-260bec03":1,"chunk-6f7c2cc6":1,"chunk-72dea0ee":1,"chunk-3bcd7ee2":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var s="css/"+({}[t]||t)+"."+{"chunk-1585e10e":"88e11bb7","chunk-74185b43":"bd71a6e5","chunk-260bec03":"f2fe4b19","chunk-428f99da":"31d6cfe0","chunk-6f7c2cc6":"788e6305","chunk-72dea0ee":"f27e8121","chunk-3bcd7ee2":"0c7afbde"}[t]+".css",r=i.p+s,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var l=o[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===r))return e()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){l=p[c],u=l.getAttribute("data-href");if(u===s||u===r)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var s=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete n[t],m.parentNode.removeChild(m),a(o)},m.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(m)})).then((function(){n[t]=0})));var s=r[t];if(0!==s)if(s)e.push(s[2]);else{var o=new Promise((function(e,a){s=r[t]=[e,a]}));e.push(s[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(t);var p=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=r[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",p.name="ChunkLoadError",p.type=s,p.request=n,a[1](p)}r[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var m=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"05f1":function(t,e,a){},"16a1":function(t,e,a){t.exports=a.p+"img/vue.3d164d14.svg"},"1a13":function(t,e,a){t.exports=a.p+"img/aws.7805fc18.png"},"1b56":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"m-w-100 py-md-12 py-sm-0 px-md-12"},[a("v-col",{staticClass:"px-0",attrs:{cols:"12",md:"12",sm:"6"}},[a("div",[a("v-row",{staticClass:"m-w-100"},[a("v-col",{staticClass:"px-0",attrs:{cols:"12",md:"2",sm:"12"}},[a("div",{staticClass:"writing_mode-sideways-lr "},[a("span",{staticClass:"html-tag float-left"},[t._v(t._s(t.$html_elm.h1_open)+" ")]),a("span",{staticClass:"page-title writing_mode"},[t._v(t._s(t.$lang.CONTACT))]),a("span",{staticClass:"html-tag"},[t._v(" "+t._s(t.$html_elm.h1_close))])])]),a("v-col",{staticClass:"px-0 pt-10",attrs:{cols:"12",md:"10",sm:"6"}},[a("div",{staticClass:"contact-data text-left"},[a("span",{staticClass:"html-tag"},[t._v(" "+t._s(t.$html_elm.p1_open))]),a("p",{staticClass:"secondary-text"},[t._v("I "),a("span",{staticClass:"up_text"},[t._v("absolutely love ")]),t._v(" hearing form you! So, no matter what it is..... a burning question, suggestions, topic discussion, a story you want to share,or you just want to say hello .... don't hesitate to contact me.")]),a("br"),a("p",{staticClass:"secondary-text"},[t._v("Not a fan of contact form? Feel free to send an email on "),a("a",{staticClass:"contact-link un",attrs:{href:"mailto:"+t.items[2].data,"data-cursor-hover":"",target:"_blank"}},[t._v(" "+t._s(t.items[2].data)+" ")]),t._v(" or call me on "),a("a",{staticClass:"contact-link un",attrs:{"data-cursor-hover":"",href:"https://api.whatsapp.com/send?phone=+918305050674&text=''",target:"_blank"}},[t._v(" "+t._s(t.items[1].data)+" ")])]),a("span",{staticClass:"html-tag"},[t._v(" "+t._s(t.$html_elm.p1_close))])])])],1)],1)]),a("v-col",{staticClass:"large-screen",attrs:{cols:"12",md:"4",sm:"6"}},[a("v-row",{staticClass:"m-h-100 large-screen",attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{md:"7"}})],1)],1)],1)],1)},n=[],r={components:{},data:function(){return{icon_color:"#08fdd8",icon_size:"35px",items:[{data:"8305050674",icon:"mdi-phone"},{data:"8305050674",icon:"mdi-whatsapp"},{data:" emitsahu077@gmail.com",icon:"mdi-email-outline"}],social_media:[{icon:"mdi-github",url:""},{icon:"mdi-linkedin",url:""},{icon:"mdi-facebook",url:""}]}}},o=r,c=(a("62d0"),a("2877")),i=a("6544"),l=a.n(i),u=a("62ad"),p=a("a523"),m=a("0fd9"),d=Object(c["a"])(o,s,n,!1,null,"ce4a1c88",null);e["default"]=d.exports;l()(d,{VCol:u["a"],VContainer:p["a"],VRow:m["a"]})},"2fc5":function(t,e,a){t.exports=a.p+"img/pycharm.e68e9dcf.svg"},"2ff9":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 1==t.type?s("v-container",{staticClass:"profile-data"},[s("v-row",{staticClass:"m-w-100"},[s("v-col",{staticClass:"px-0",attrs:{cols:"12",md:"12",sm:"6"}},[s("div",[s("div",{staticClass:"pl-5"},[s("p",{staticClass:"pt-5 html-tag pb-2"},[t._v(t._s(t.$html_elm.h1_open))]),s("div",{staticClass:"pa-5 pt-0"},[t._l(t.$lang.introduction,(function(e,a){return s("span",{key:a,staticClass:"font-Oswald title-text"},[s("span",[t._v(t._s(e))])])})),s("br"),s("VueTextGlitch",{staticClass:"font-Oswald my-role vue-glitch_text",attrs:{background:"#0f090a45",fill:"#fff",text:"Web Developer"}}),s("p",{staticClass:"font-aldrich sub-text mt-4"},[t._v("Front End Developer / Back End Developer")])],2)])])])],1)],1):s("v-container",{staticClass:"profile-data-2 w-100"},[s("div",{staticClass:"align-self-start px-5"}),s("div",{staticClass:"d-flex flex-wrap px-12  py-12",attrs:{flat:"",height:"100",tile:""}},[s("div",{staticClass:"align-self-start"},[s("p",{staticClass:"hey-text py-4 px-10"},[t._v("Hey!")])]),s("div",{staticClass:"align-self-end px-5"},[s("p",{staticClass:"name-text"},[t._v("I'm Amit Sahu")]),s("p",{staticClass:"designation-text html-tag"},[t._v(" A software developer form Chhattisgarh,India ")])]),s("div",{staticClass:"align-self-start px-5"},[s("img",{class:t.$store.state.zoom_in?"profile-image":"profile-image-zoom",attrs:{alt:"",src:a("c3e7")}})])])])},n=[],r=a("31e2"),o=a.n(r),c={components:{VueTextGlitch:o.a},data:function(){return{type:0,zoom_in:this.$store.state.zoom_in}}},i=c,l=(a("67d8"),a("2877")),u=a("6544"),p=a.n(u),m=a("62ad"),d=a("a523"),f=a("0fd9"),_=Object(l["a"])(i,s,n,!1,null,"59c4bd10",null);e["default"]=_.exports;p()(_,{VCol:m["a"],VContainer:d["a"],VRow:f["a"]})},"357c":function(t,e,a){t.exports=a.p+"img/react.8e9f63cb.svg"},"48e4":function(t,e,a){t.exports=a.p+"img/bitbucket.565ebc84.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("b0c0"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",{staticClass:"body-bg"},[a("router-view")],1)],1)},r=[],o={name:"App"},c=o,i=(a("af6f"),a("2877")),l=a("6544"),u=a.n(l),p=a("7496"),m=a("a75b"),d=Object(i["a"])(c,n,r,!1,null,"680d7494",null),f=d.exports;u()(d,{VApp:p["a"],VContent:m["a"]});var _=a("f309");s["a"].use(_["a"]);var v=new _["a"]({theme:{themes:{light:{primary:"#5C80BC",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"}}},icons:{iconfont:"mdi"}}),h=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",{staticClass:" m-h-100 body-bg",attrs:{fluid:""}},[a("main-body")],1)],1)},b=[],C=(a("d3b7"),{components:{MainBody:function(){return a.e("chunk-74185b43").then(a.bind(null,"242a"))}},data:function(){return{}}}),y=C,x=(a("66dc"),a("a523")),w=Object(i["a"])(y,g,b,!1,null,null,null),k=w.exports;u()(w,{VApp:p["a"],VContainer:x["a"]});var E=a("2ff9"),S=a("636c"),O=a("7072"),A=a("1b56"),j=[{path:"",component:k,redirect:{name:"profile"},children:[{path:"",component:E["default"],name:"profile"},{path:"about-me",component:S["default"],name:"aboutMe"},{path:"tech-skill",component:O["default"],name:"techSkill"},{path:"contact-me",component:A["default"],name:"contactMe"}]}],T=(a("ddb0"),a("2f62"));s["a"].use(T["a"]);var $=new T["a"].Store({state:{zoom_in:!0,drawer:!0,keys:{},const_messages:{}},getters:{keys:function(t){return t.keys},messages:function(t){return t.const_messages}},mutations:{setUser:function(t){console.log(t)}}}),I=a("e956"),V=a.n(I),P=a("f5af"),M=a.n(P),D=(a("e829"),{doc_type:"<!doctype html>",html_open:"<html>",html_close:"</html>",title_open:"<title>",title_close:"</title>",body_open:"<body>",body_close:"</body>",h1_open:"<h1>",h1_close:"</h1>",p1_open:"<p1>",p1_close:"</p1>",img_src_open:"<img src=",img_src_close:"/>"}),W=D,L={introduction:["H","i",","," I","'","m "," A","m","i","t","S","a","h","u",","],about_me:["A","b","o","u","t ","m","e"],contact_me:["C","o","n","t","a","c","t ","m","e"],HIRE_ME:"Hire me",CONTACT_ME:"Contact me",CONTACT:"Contact",ABOUT_ME:"About me",SKILLS:"Skills",PROJECTS:"Projects",EXPERIENCE:"Experience",DATABASES_I_HAVE_WORKED_WITH:"Databases I have worked with",LANGUAGES_I:"Languages I",TOOLS_I_HAVE_USED:"Tools I have used",OPERATING_SYSTEM_I_WORKED:"Operating system i have used"},N=L,R=a("065c");a("e405");s["a"].prototype.$html_elm=W,s["a"].prototype.$lang=N,s["a"].component(R["CursorFx"].name,R["CursorFx"]),s["a"].use(h["a"]),s["a"].use(V.a);var H=new h["a"]({routes:j,mode:"history"});M.a.init({duration:1200}),s["a"].config.productionTip=!1,new s["a"]({router:H,store:$,vuetify:v,iconfont:"mdi",render:function(t){return t(f)}}).$mount("#app")},"5b21":function(t,e,a){},"5df1":function(t,e,a){},"5f7e":function(t,e,a){t.exports=a.p+"img/digitalocean.60ee8c42.png"},"60f3":function(t,e,a){t.exports=a.p+"img/sqlite.3091702a.svg"},"62d0":function(t,e,a){"use strict";var s=a("a153"),n=a.n(s);n.a},"636c":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("div",[a("v-row",{staticClass:"m-w-100 py-md-12 py-sm-0 px-md-12"},[a("v-col",{staticClass:"px-0",attrs:{cols:"12",md:"2",sm:"12"}},[a("div",{staticClass:"writing_mode-sideways-lr "},[a("p",{staticClass:"html-tag float-left"},[t._v(t._s(t.$html_elm.h1_open)+" ")]),a("span",{staticClass:"page-title writing_mode "},[t._v(t._s(t.$lang.ABOUT_ME))]),a("span",{staticClass:"html-tag "},[t._v(" "+t._s(t.$html_elm.h1_close))])])]),a("v-col",{staticClass:"px-0",attrs:{cols:"12",md:"10",sm:"6"}},[a("div",[a("span",{staticClass:"html-tag"},[t._v(" "+t._s(t.$html_elm.p1_open))]),a("p",{staticClass:"secondary-text"},[t._v(t._s(t.about_me_p1))]),a("br"),a("p",{staticClass:"secondary-text"},[t._v(t._s(t.about_me_p2))]),a("span",{staticClass:"html-tag"},[t._v(" "+t._s(t.$html_elm.p1_close))])])])],1)],1)])},n=[],r={components:{},data:function(){return{a:"I'm ",about_me_p1:"Professionally connected with the IT industry for more than two years. Well-organised person, problem solver, debugger with high attention to detail. Fan\n                  of outdoor activities,Web series, and recently, handcrafts.",about_me_p2:"Interested in the entire software development spectrum(frontend and backend) and working on ambitious projects with positive\n                  people."}}},o=r,c=a("2877"),i=a("6544"),l=a.n(i),u=a("62ad"),p=a("a523"),m=a("0fd9"),d=Object(c["a"])(o,s,n,!1,null,"3e73434c",null);e["default"]=d.exports;l()(d,{VCol:u["a"],VContainer:p["a"],VRow:m["a"]})},"66dc":function(t,e,a){"use strict";var s=a("5b21"),n=a.n(s);n.a},"67d8":function(t,e,a){"use strict";var s=a("77c2"),n=a.n(s);n.a},"6f0c":function(t,e,a){t.exports=a.p+"img/django.1b481461.svg"},7072:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"py-md-12 py-sm-0 px-md-12 skills"},[a("div",[a("div",{staticClass:"pa-5 pt-0"},[a("p",{staticClass:"html-tag "},[t._v(t._s(t.$html_elm.h1_open)+" ")]),a("span",{staticClass:"page-title"},[t._v(t._s(t.$lang.SKILLS))]),a("span",{staticClass:"html-tag"},[t._v(t._s(t.$html_elm.h1_close)+" ")]),a("div",[a("p"),a("v-row",[a("v-col",{staticClass:"px-2",attrs:{md:"6"}},[a("v-row",{staticClass:"border-a text-center  px-4 py-2 max-w-100",attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",md:"12"}},[a("p",[t._v("My Core Strengths")])]),t._l(t.core_strength,(function(t){return a("v-col",{key:t.name,staticClass:"text-center",attrs:{cols:"12",md:"4"}},[a("SkillsWrapper",{attrs:{item:t}})],1)}))],2)],1),a("v-col",{staticClass:"px-2",attrs:{md:"6",sm:"12"}},[a("v-row",{staticClass:"border-a text-center  px-4  py-2 max-w-100"},[a("v-col",{staticClass:"pb-2",attrs:{md:"12"}},[a("p",{},[t._v(t._s(t.$lang.LANGUAGES_I)+" "),a("v-icon",{attrs:{color:"#EB5757"}},[t._v("mdi-cards-heart")])],1)]),t._l(t.fav_lag,(function(t){return a("v-col",{key:t.name,staticClass:"text-center",attrs:{md:"4"}},[a("SkillsWrapper",{attrs:{item:t}})],1)}))],2)],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{staticClass:"px-2",attrs:{md:"12"}},[a("v-row",{staticClass:"border-a text-center  px-4 py-2 max-w-100",attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",md:"12"}},[a("p",[t._v(t._s(t.$lang.TOOLS_I_HAVE_USED))])]),t._l(t.tools,(function(t){return a("v-col",{key:t.name,staticClass:"text-center",attrs:{cols:"12",md:"2"}},[a("SkillsWrapper",{attrs:{item:t}})],1)}))],2)],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{staticClass:"px-2",attrs:{md:"8"}},[a("v-row",{staticClass:"border-a text-center  px-4 py-2 max-w-100",attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",md:"12"}},[a("p",[t._v(t._s(t.$lang.DATABASES_I_HAVE_WORKED_WITH))])]),t._l(t.databases,(function(t){return a("v-col",{key:t.name,staticClass:"text-center",attrs:{cols:"12",md:"3"}},[a("SkillsWrapper",{attrs:{item:t}})],1)}))],2)],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{staticClass:"px-2",attrs:{md:"6"}},[a("v-row",{staticClass:"border-a text-center py-2 px-4 max-w-100",attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",md:"12"}},[a("p",[t._v(t._s(t.$lang.OPERATING_SYSTEM_I_WORKED))])]),t._l(t.os,(function(t){return a("v-col",{key:t.name,staticClass:"text-center",attrs:{cols:"12",md:"4"}},[a("SkillsWrapper",{attrs:{item:t}})],1)}))],2)],1)],1)],1)])])])},n=[],r=(a("d3b7"),{components:{SkillsWrapper:function(){return a.e("chunk-1585e10e").then(a.bind(null,"b6ca"))}},data:function(){return{core_strength:[{name:"Vuejs",image_urls:a("16a1")},{name:"Django",image_urls:a("6f0c")},{name:"React",image_urls:a("357c")}],fav_lag:[{name:"Python",image_urls:a("89b5")},{name:"Javascript",image_urls:a("e858")},{name:"HTML",image_urls:a("f527")}],tools:[{name:"Pycharm",image_urls:a("2fc5")},{name:"Visual Studio Code",image_urls:a("97cb")},{name:"Bitbucket",image_urls:a("48e4")},{name:"GitHub",image_urls:a("f91c")},{name:"Amazon web services",image_urls:a("1a13")},{name:"Digital Oceans",image_urls:a("5f7e")}],databases:[{name:"Postgresql",image_urls:a("d0a4")},{name:"Mysql",image_urls:a("e48a")},{name:"Sqlite",image_urls:a("60f3")},{name:"Firebase",image_urls:a("b524")}],os:[{name:"Ubuntu",image_urls:a("9e13")},{name:"Mac OS",image_urls:a("c74a")},{name:"Windows",image_urls:a("eb7d")}]}},computed:{},methods:{}}),o=r,c=(a("90c3"),a("2877")),i=a("6544"),l=a.n(i),u=a("62ad"),p=a("a523"),m=a("132d"),d=a("0fd9"),f=Object(c["a"])(o,s,n,!1,null,"c3b0802a",null);e["default"]=f.exports;l()(f,{VCol:u["a"],VContainer:p["a"],VIcon:m["a"],VRow:d["a"]})},"77c2":function(t,e,a){},"89b5":function(t,e,a){t.exports=a.p+"img/python.fe69e2f5.svg"},"90c3":function(t,e,a){"use strict";var s=a("05f1"),n=a.n(s);n.a},"97cb":function(t,e,a){t.exports=a.p+"img/vscode.58d1fbec.svg"},"9e13":function(t,e,a){t.exports=a.p+"img/ubuntu.34f5d843.png"},a153:function(t,e,a){},af6f:function(t,e,a){"use strict";var s=a("5df1"),n=a.n(s);n.a},b524:function(t,e,a){t.exports=a.p+"img/firebase.5395d521.svg"},c3e7:function(t,e,a){t.exports=a.p+"img/profile.f60a23b1.png"},c74a:function(t,e,a){t.exports=a.p+"img/mac-os.d88a295c.png"},d0a4:function(t,e,a){t.exports=a.p+"img/postgresql.fc84c137.png"},e48a:function(t,e,a){t.exports=a.p+"img/mysql.fc8b023e.svg"},e858:function(t,e,a){t.exports=a.p+"img/javascript.1043dce2.svg"},eb7d:function(t,e,a){t.exports=a.p+"img/windows.37d10766.png"},f527:function(t,e,a){t.exports=a.p+"img/html5.321c55fe.png"},f91c:function(t,e,a){t.exports=a.p+"img/github.1f64bdff.svg"}});
//# sourceMappingURL=app.9f390943.js.map