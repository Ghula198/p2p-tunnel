(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fdd6b0e"],{3476:function(e,t,n){"use strict";n.r(t);n("b0c0");var c=n("7a23"),o=function(e){return Object(c["pushScopeId"])("data-v-a70b7950"),e=e(),Object(c["popScopeId"])(),e},a={class:"socks5-wrap"},r={class:"title t-c"},l={class:"form"},u={class:"w-100"},i={class:"w-100"},d={class:"w-100 t-c",style:{"line-height":"1.8rem"}},s=o((function(){return Object(c["createElementVNode"])("p",null,"自动设置代理有可能失败，可以手动配置系统代理“使用设置脚本”",-1)})),b=Object(c["createTextVNode"])("预置pac规则文件地址 "),f=Object(c["createTextVNode"])("自定义pac规则文件地址 "),m={class:"w-100 t-c"},O=Object(c["createTextVNode"])("确 定"),j=Object(c["createTextVNode"])("配置插件"),p={class:"w-100"};function V(e,t,n,o,V,N){var x=Object(c["resolveComponent"])("el-alert"),h=Object(c["resolveComponent"])("el-input"),C=Object(c["resolveComponent"])("el-form-item"),w=Object(c["resolveComponent"])("el-col"),g=Object(c["resolveComponent"])("el-option"),v=Object(c["resolveComponent"])("el-select"),_=Object(c["resolveComponent"])("el-row"),k=Object(c["resolveComponent"])("el-checkbox"),E=Object(c["resolveComponent"])("el-tooltip"),T=Object(c["resolveComponent"])("el-button"),y=Object(c["resolveComponent"])("ConfigureModal"),P=Object(c["resolveComponent"])("el-form");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",a,[Object(c["createElementVNode"])("h3",r,Object(c["toDisplayString"])(e.$route.meta.name),1),Object(c["createVNode"])(x,{class:"alert",type:"warning","show-icon":"",closable:!1,title:"socks5代理，如果服务端开启，则也可以代理到服务端",description:"适用于ftp双通道"}),Object(c["createElementVNode"])("div",l,[Object(c["createVNode"])(P,{ref:"formDom",model:o.state.form,rules:o.state.rules,"label-width":"80px"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(C,{label:"","label-width":"0"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",u,[Object(c["createVNode"])(_,{gutter:10},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(w,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(C,{label:"监听端口",prop:"ListenPort"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(h,{modelValue:o.state.form.ListenPort,"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.state.form.ListenPort=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(c["createVNode"])(w,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(C,{label:"buffersize",prop:"BufferSize"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(h,{modelValue:o.state.form.BufferSize,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.state.form.BufferSize=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(c["createVNode"])(w,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(C,{label:"通信通道",prop:"TunnelType"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(v,{modelValue:o.state.form.TunnelType,"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.state.form.TunnelType=e}),placeholder:"选择类型"},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(o.shareData.tunnelTypes,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])(g,{key:t,label:e,value:t},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1})]})),_:1}),Object(c["createVNode"])(w,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(C,{label:"目标端",prop:"TargetName"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(v,{modelValue:o.state.form.TargetName,"onUpdate:modelValue":t[3]||(t[3]=function(e){return o.state.form.TargetName=e}),placeholder:"选择目标"},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(o.targets,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])(g,{key:t,label:e.label,value:e.Name},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})])]})),_:1}),Object(c["createVNode"])(C,{label:"","label-width":"0"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",i,[Object(c["createVNode"])(_,{gutter:10},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(w,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(C,{"label-width":"0",prop:"ListenEnable"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(E,{class:"box-item",effect:"dark",content:"不勾选表示关闭socks5监听",placement:"top-start"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(k,{modelValue:o.state.form.ListenEnable,"onUpdate:modelValue":t[4]||(t[4]=function(e){return o.state.form.ListenEnable=e}),label:"开启监听"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(c["createVNode"])(w,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(C,{"label-width":"0",prop:"ConnectEnable"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(E,{class:"box-item",effect:"dark",content:"作为目标端时，是否允许被访问",placement:"top-start"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(k,{modelValue:o.state.form.ConnectEnable,"onUpdate:modelValue":t[5]||(t[5]=function(e){return o.state.form.ConnectEnable=e}),label:"允许访问"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(c["createVNode"])(w,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(C,{"label-width":"0",prop:"IsPac"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(E,{class:"box-item",effect:"dark",content:"勾选则设置系统代理，不勾选则需要自己设置",placement:"top-start"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(k,{modelValue:o.state.form.IsPac,"onUpdate:modelValue":t[6]||(t[6]=function(e){return o.state.form.IsPac=e}),label:"设置系统代理"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(c["createVNode"])(w,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(C,{"label-width":"0",prop:"IsCustomPac"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(E,{class:"box-item",effect:"dark",content:"自定义pac还是使用预制的pac规则",placement:"top-start"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(k,{modelValue:o.state.form.IsCustomPac,"onUpdate:modelValue":t[7]||(t[7]=function(e){return o.state.form.IsCustomPac=e}),label:"自定义pac"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})])]})),_:1}),Object(c["createVNode"])(C,{"label-width":"0"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",d,[s,Object(c["createElementVNode"])("p",null,[b,Object(c["createElementVNode"])("strong",null,Object(c["toDisplayString"])(o.state.localtion)+"/socks.pac",1)]),Object(c["createElementVNode"])("p",null,[f,Object(c["createElementVNode"])("strong",null,Object(c["toDisplayString"])(o.state.localtion)+"/socks-custom.pac",1)])])]})),_:1}),Object(c["createVNode"])(C,{"label-width":"0"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",m,[Object(c["createVNode"])(T,{type:"primary",loading:o.state.loading,onClick:o.handleSubmit,class:"m-r-1"},{default:Object(c["withCtx"])((function(){return[O]})),_:1},8,["loading","onClick"]),Object(c["createVNode"])(y,{className:"Socks5ClientConfigure"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(T,null,{default:Object(c["withCtx"])((function(){return[j]})),_:1})]})),_:1})])]})),_:1}),Object(c["createVNode"])(C,{"label-width":"0",class:"hidden-xs-only",style:{"margin-bottom":"0"}},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",p,[Object(c["createVNode"])(h,{modelValue:o.state.pac,"onUpdate:modelValue":t[8]||(t[8]=function(e){return o.state.pac=e}),rows:16,type:"textarea",placeholder:"写pac内容",resize:"none"},null,8,["modelValue"])])]})),_:1})]})),_:1},8,["model","rules"])])])}n("d3b7"),n("25f0"),n("99af"),n("d81d"),n("a9e3"),n("e9c4");var N=n("a1e9"),x=n("97af"),h=function(){return Object(x["b"])("socks5/get")},C=function(e){return Object(x["b"])("socks5/set",e)},w=function(){return Object(x["b"])("socks5/getpac")},g=function(e){return Object(x["b"])("socks5/setpac",e)},v=n("5c40"),_=n("3ef4"),k=n("3fd2"),E=n("8286"),T=n("49f5"),y={components:{ConfigureModal:T["a"]},setup:function(){var e=Object(k["a"])(),t=Object(E["a"])(),n=function(){h().then((function(e){r.form.ListenEnable=e.ListenEnable,r.form.ListenPort=e.ListenPort,r.form.BufferSize=e.BufferSize,r.form.ConnectEnable=e.ConnectEnable,r.form.IsCustomPac=e.IsCustomPac,r.form.IsPac=e.IsPac,r.form.TunnelType=e.TunnelType.toString(),r.form.TargetName=e.TargetName}))},c=function(){w().then((function(e){r.pac=e}))},o=function(){g({IsCustom:r.form.IsCustomPac,Pac:r.pac}).then((function(){}))};Object(v["rb"])((function(){n(),c()}));var a=Object(N["c"])((function(){return[{Name:"",label:"服务器"}].concat(e.clients.map((function(e){return{Name:e.Name,label:e.Name}})))})),r=Object(N["p"])({loading:!1,pac:"",localtion:window.location.origin,form:{ListenEnable:!1,ListenPort:5412,ConnectEnable:!1,IsPac:!1,IsCustomPac:!1,BufferSize:8192,TunnelType:"8",TargetName:""},rules:{ListenPort:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:65535,message:"数字 1-65535",trigger:"blur",transform:function(e){return Number(e)}}],BufferSize:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:1048576,message:"数字 1-1048576",trigger:"blur",transform:function(e){return Number(e)}}]}}),l=Object(N["r"])(null),u=function(){l.value.validate((function(e){if(!e)return!1;r.loading=!0;var t=JSON.parse(JSON.stringify(r.form));t.ListenPort=Number(t.ListenPort),t.BufferSize=Number(t.BufferSize),t.TunnelType=Number(t.TunnelType),console.log(t),C(t).then((function(){r.loading=!1,t.IsPac&&o(),_["a"].success("操作成功！")})).catch((function(e){r.loading=!1}))}))};return{targets:a,shareData:t,state:r,formDom:l,handleSubmit:u}}},P=(n("3d6c"),n("6b0d")),S=n.n(P);const B=S()(y,[["render",V],["__scopeId","data-v-a70b7950"]]);t["default"]=B},"3d6c":function(e,t,n){"use strict";n("d810")},"88ab":function(e,t,n){var c=n("24fb");t=c(!1),t.push([e.i,".socks5-wrap[data-v-a70b7950]{padding:2rem}.alert[data-v-a70b7950]{margin-bottom:1rem}.form[data-v-a70b7950]{border:1px solid #eee;padding:2rem;border-radius:.4rem}@media screen and (max-width:768px){.el-col[data-v-a70b7950]{margin-top:.6rem}}",""]),e.exports=t},d810:function(e,t,n){var c=n("88ab");c.__esModule&&(c=c.default),"string"===typeof c&&(c=[[e.i,c,""]]),c.locals&&(e.exports=c.locals);var o=n("499e").default;o("8f9b50b6",c,!0,{sourceMap:!1,shadowMode:!1})}}]);