(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f97548e"],{"188c":function(e,t,n){"use strict";n("66d6")},"21ae":function(e,t,n){"use strict";n("6fc0")},"295d":function(e,t,n){"use strict";n("3544")},"31a6":function(e,t,n){"use strict";n.r(t);n("b64b"),n("b0c0");var c=n("7a23"),i=Object(c["N"])("data-v-2012f27d");Object(c["u"])("data-v-2012f27d");var a={class:"section col-1"},r={key:0,class:"row small"},l={key:1,class:"split"},o={class:"col"},u={class:"row"},s={class:"col"},b={class:"row"},d={class:"col flag"},f={key:2};Object(c["s"])();var j=i((function(e,t,n,i,j,O){var p=Object(c["A"])("btn"),v=Object(c["A"])("Pairs"),g=Object(c["A"])("toggle"),y=Object(c["A"])("Flag");return Object(c["r"])(),Object(c["d"])("div",a,[Object.keys(e.converters).length>1?(Object(c["r"])(),Object(c["d"])("div",r,[(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["y"])(e.converters,(function(t,n){return Object(c["r"])(),Object(c["d"])(p,{key:n,class:"round",text:n,"is-on":e.converter===t,onClick:function(n){return e.converter=t}},null,8,["text","is-on","onClick"])})),128))])):Object(c["e"])("",!0),e.converter?(Object(c["r"])(),Object(c["d"])("div",l,[Object(c["g"])("div",o,[Object(c["g"])("div",u,[Object(c["M"])(Object(c["g"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.mappings.initial=t})},[(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["y"])(e.fullMappings,(function(e,t){return Object(c["r"])(),Object(c["d"])("option",{key:t,value:e},Object(c["C"])(e.name),9,["value"])})),128))],512),[[c["G"],e.mappings.initial]]),e.texts.initial?(Object(c["r"])(),Object(c["d"])(p,{key:0,icon:"clear",onClick:t[2]||(t[2]=function(t){return e.texts.initial=""})})):(Object(c["r"])(),Object(c["d"])(p,{key:1,icon:"text_snippet",onClick:e.displaySample},null,8,["onClick"])),Object(c["g"])(p,{icon:"publish",onClick:e.convertFile},null,8,["onClick"]),e.canSwap?(Object(c["r"])(),Object(c["d"])(p,{key:2,icon:"swap_horiz",onClick:e.swap},null,8,["onClick"])):Object(c["e"])("",!0)]),e.pairs.initial?(Object(c["r"])(),Object(c["d"])(c["a"],{key:0},[Object(c["M"])(Object(c["g"])("textarea",{"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.texts.initial=t})},null,512),[[c["H"],e.texts.initial]]),e.showPairs?(Object(c["r"])(),Object(c["d"])(v,{key:0,pairs:e.pairs.initial},null,8,["pairs"])):Object(c["e"])("",!0)],64)):Object(c["e"])("",!0)]),Object(c["g"])("div",s,[Object(c["g"])("div",b,[Object(c["M"])(Object(c["g"])("select",{"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.mappings.final=t})},[(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["y"])(e.converter.mappings,(function(e,t){return Object(c["r"])(),Object(c["d"])("option",{key:t,value:e},Object(c["C"])(e.name),9,["value"])})),128))],512),[[c["G"],e.mappings.final]]),Object(c["g"])(g,{modelValue:e.showPairs,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.showPairs=t}),icon:"visibility"},null,8,["modelValue"]),Object(c["g"])(p,{icon:"file_copy",onClick:e.copy},null,8,["onClick"])]),e.pairs.final?(Object(c["r"])(),Object(c["d"])(c["a"],{key:0},[Object(c["g"])("div",d,[Object(c["g"])(y,{lect:e.lect},null,8,["lect"]),Object(c["M"])(Object(c["g"])("textarea",{"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.texts.final=t}),readonly:""},null,512),[[c["H"],e.texts.final]])]),e.showPairs?(Object(c["r"])(),Object(c["d"])(v,{key:0,pairs:e.pairs.final},null,8,["pairs"])):Object(c["e"])("",!0)],64)):Object(c["e"])("",!0)])])):(Object(c["r"])(),Object(c["d"])("h2",f,"Selected languages have no converters."))])})),O=(n("7db0"),n("4de4"),n("caad"),n("2532"),n("99af"),n("3835")),p=Object(c["N"])("data-v-37ef66fe");Object(c["u"])("data-v-37ef66fe");var v={key:0,class:"card row-1 wrap"},g={class:"text-faded"};Object(c["s"])();var y=p((function(e,t,n,i,a,r){return e.pairs.length?(Object(c["r"])(),Object(c["d"])("div",v,[(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["y"])(e.texts,(function(e,t){var n=Object(O["a"])(e,2),i=n[0],a=n[1];return Object(c["r"])(),Object(c["d"])("p",{key:t},[Object(c["g"])("span",g,Object(c["C"])(i),1),Object(c["g"])("span",null,Object(c["C"])(a),1)])})),128))])):Object(c["e"])("",!0)})),k=(n("d81d"),n("5319"),n("ac1f"),Object(c["h"])({props:{pairs:{type:Object,default:function(){return{}}}},setup:function(e){var t=Object(c["b"])((function(){return e.pairs.map((function(e){return e.map((function(e){return e.replace(" ","_")}))}))}));return{texts:t}}}));n("188c");k.render=y,k.__scopeId="data-v-37ef66fe";var m=k,w=n("f929"),h=n("03a7"),x=n("6f2d"),C=n("fa5c"),_=Object(c["h"])({components:{Pairs:m,Flag:w["a"]},setup:function(){var e=Object(c["b"])((function(){return Object.keys(h["b"].value).find((function(e){var t;return h["a"].value===(null===(t=h["b"].value)||void 0===t?void 0:t[e])}))})),t=Object(c["x"])(!1),n=Object(c["b"])((function(){var e;return null===(e=h["a"].value)||void 0===e?void 0:e.mappings.filter((function(e){return e.pairs.every((function(t){return t===e.pairs.find((function(e){return e[0]===t[0]}))}))}))})),i=Object(c["b"])((function(){var e;return h["c"].final&&(null===(e=n.value)||void 0===e?void 0:e.includes(Object(c["D"])(h["c"].final)))}));function a(){var e,t,n,i=h["c"].initial;h["c"].initial=null===(e=h["a"].value)||void 0===e?void 0:e.mappings[0],h["e"].initial=null!==(t=null===(n=h["a"].value)||void 0===n?void 0:n.sample)&&void 0!==t?t:"",Object(c["m"])((function(){return h["c"].initial=i}))}function r(){var e=h["c"].initial;h["c"].initial=h["c"].final,h["c"].final=e}function l(){navigator.clipboard.writeText(h["e"].final)}function o(){Object(x["b"])((function(e,t){var n;return Object(x["a"])(Object(C["a"])(e,h["d"].value.initial),"".concat(null===(n=h["c"].final)||void 0===n?void 0:n.name," - ").concat(t))}),".txt")}return{lect:e,converters:h["b"],converter:h["a"],showPairs:t,canSwap:i,swap:r,convertFile:o,fullMappings:n,copy:l,displaySample:a,texts:h["e"],mappings:h["c"],pairs:h["d"]}}});n("295d");_.render=j,_.__scopeId="data-v-2012f27d";t["default"]=_},3544:function(e,t,n){},"66d6":function(e,t,n){},"6f2d":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));n("b0c0");var c=document.createElement("a");function i(e,t,n){if(n){var i;if(t=null!==(i=window.prompt("Save file as",t))&&void 0!==i?i:"",!t)return;t+=n}c.href="data:text/plain;charset=utf-8,"+encodeURIComponent(e),c.download=t,c.click()}var a=new FileReader,r=document.createElement("input");function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".json";r.onchange=function(){var t,n=null===(t=r.files)||void 0===t?void 0:t[0];n&&(a.onload=function(t){var c=t.target;return e(null===c||void 0===c?void 0:c.result,n.name)},a.readAsText(n))},r.accept=t,r.click()}r.type="file"},"6fc0":function(e,t,n){},"7db0":function(e,t,n){"use strict";var c=n("23e7"),i=n("b727").find,a=n("44d2"),r="find",l=!0;r in[]&&Array(1)[r]((function(){l=!1})),c({target:"Array",proto:!0,forced:l},{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a(r)},a8d4:function(e,t,n){},c178:function(e,t,n){"use strict";n("a8d4")},f929:function(e,t,n){"use strict";var c=n("7a23"),i=Object(c["N"])("data-v-54304c3e"),a=i((function(e,t,n,i,a,r){return e.lect?(Object(c["r"])(),Object(c["d"])("img",{key:0,src:e.src,class:"no-select"},null,8,["src"])):Object(c["e"])("",!0)})),r=n("3a0b"),l=Object(c["h"])({props:{lect:{type:String,default:""}},setup:function(e){var t=Object(c["b"])((function(){return r["d"]+e.lect+"/flag.png"}));return{src:t}}});n("21ae"),n("c178");l.render=a,l.__scopeId="data-v-54304c3e";t["a"]=l}}]);