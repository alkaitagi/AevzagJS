(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f12d182"],{"04d4":function(e,t,n){"use strict";var r=n("7a23");function a(e,t,n,a,c,o){var i=Object(r["B"])("btn");return Object(r["s"])(),Object(r["d"])(i,{class:{"highlight-font-alert":"delete"===e.icon},icon:e.icon,text:e.text,onClick:e.confirm},null,8,["class","icon","text","onClick"])}var c=Object(r["h"])({props:{message:{type:String,default:"Delete?"},icon:{type:String,default:"delete"},text:{type:String,default:""}},emits:["confirm"],setup:function(e,t){var n=t.emit;function r(){window.confirm(e.message)&&n("confirm")}return{confirm:r}}});c.render=a;t["a"]=c},"30d2":function(e,t,n){},"3cb6":function(e,t,n){"use strict";n.r(t);n("b0c0"),n("a434");var r=n("7a23"),a=Object(r["O"])("data-v-a4caf308");Object(r["v"])("data-v-a4caf308");var c={key:0,class:"section col-2 small grid"},o={class:"col-2"};Object(r["t"])();var i=a((function(e,t,n,i,u,l){var d=Object(r["B"])("EditorCard"),f=Object(r["B"])("ArrayControl"),s=Object(r["B"])("btn");return e.file?(Object(r["s"])(),Object(r["d"])("div",c,[Object(r["g"])("div",o,[Object(r["g"])(d,{icon:"text_snippet",header:"Sample Text"},{default:a((function(){return[Object(r["N"])(Object(r["g"])("textarea",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.file.sample=t})},null,512),[[r["I"],e.file.sample]]),Object(r["N"])(Object(r["g"])("textarea",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.converted=t}),readonly:""},null,512),[[r["I"],e.converted]])]})),_:1}),Object(r["g"])(d,{icon:"call_merge",header:"Mappings"},{header:a((function(){return[Object(r["g"])(f,{modelValue:e.file.mappings,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.file.mappings=t}),item:e.mapping,"onUpdate:item":t[4]||(t[4]=function(t){return e.mapping=t}),add:{},"shift-two":"",remove:""},null,8,["modelValue","item"])]})),default:a((function(){return[(Object(r["s"])(!0),Object(r["d"])(r["a"],null,Object(r["z"])(e.file.mappings,(function(t,n){return Object(r["N"])((Object(r["s"])(),Object(r["d"])("input",{key:n,"onUpdate:modelValue":function(e){return t.name=e},class:"selectable",type:"text",placeholder:"mapping #"+n,readonly:e.mapping!==t,onClick:function(n){return e.mapping=t}},null,8,["onUpdate:modelValue","placeholder","readonly","onClick"])),[[r["I"],t.name]])})),128))]})),_:1})]),e.mapping?(Object(r["s"])(),Object(r["d"])(d,{key:0,icon:"format_list_numbered",header:"Pairs"},{header:a((function(){return[Object(r["g"])(f,{modelValue:e.mapping.pairs,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.mapping.pairs=t}),add:[]},null,8,["modelValue"])]})),default:a((function(){return[(Object(r["s"])(!0),Object(r["d"])(r["a"],null,Object(r["z"])(e.mapping.pairs,(function(t,n){return Object(r["s"])(),Object(r["d"])("div",{key:n,class:"row"},[Object(r["g"])(s,{icon:"add",onClick:function(t){return e.mapping.pairs.splice(n,0,[])}},null,8,["onClick"]),Object(r["N"])(Object(r["g"])("input",{"onUpdate:modelValue":function(e){return t[0]=e},type:"text",placeholder:"from"},null,8,["onUpdate:modelValue"]),[[r["I"],t[0]]]),Object(r["N"])(Object(r["g"])("input",{"onUpdate:modelValue":function(e){return t[1]=e},type:"text",placeholder:"to"},null,8,["onUpdate:modelValue"]),[[r["I"],t[1]]]),Object(r["g"])(s,{icon:"clear",onClick:function(t){return e.mapping.pairs.splice(n,1)}},null,8,["onClick"])])})),128))]})),_:1})):Object(r["e"])("",!0)])):Object(r["e"])("",!0)})),u=n("3835"),l=(n("d81d"),n("b5cc")),d=n("7694"),f=n("9392"),s=n("fa5c"),p=Object(r["h"])({components:{ArrayControl:l["a"],EditorCard:d["a"]},setup:function(){Object(f["b"])({default:{default:[0,0],mappings:[]},filename:"converter"});var e=Object(r["y"])(),t=Object(r["b"])((function(){var e,t,n;return null===(e=f["d"].value)||void 0===e||null===(t=e.mappings)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.pairs})),n=Object(r["b"])((function(){var n,r,a,c=null!==(n=null===(r=f["d"].value)||void 0===r?void 0:r.sample)&&void 0!==n?n:"";if(!t.value)return c;var o=Object(s["a"])(c,t.value);return null!==(a=e.value)&&void 0!==a&&a.pairs?Object(s["a"])(o,e.value.pairs.map((function(e){var t=Object(u["a"])(e,2),n=t[0],r=t[1];return[r,n]}))):o}));return{file:f["d"],mapping:e,converted:n}}});n("4ed6");p.render=i,p.__scopeId="data-v-a4caf308";t["default"]=p},"4ed6":function(e,t,n){"use strict";n("30d2")},"6f2d":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));n("b0c0");var r=document.createElement("a");function a(e,t){r.href="data:text/plain;charset=utf-8,"+encodeURIComponent(e+"\n"),r.download=t,r.click()}var c=new FileReader,o=document.createElement("input");function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".json";o.onchange=function(){var t,n=null===(t=o.files)||void 0===t?void 0:t[0];n&&(c.onload=function(t){var r=t.target;return e(null===r||void 0===r?void 0:r.result,n.name)},c.readAsText(n))},o.accept=t,o.click()}o.type="file"},7156:function(e,t,n){var r=n("861d"),a=n("d2bb");e.exports=function(e,t,n){var c,o;return a&&"function"==typeof(c=t.constructor)&&c!==n&&r(o=c.prototype)&&o!==n.prototype&&a(e,o),e}},7694:function(e,t,n){"use strict";var r=n("7a23"),a=Object(r["O"])("data-v-800c2256");Object(r["v"])("data-v-800c2256");var c={class:"col"},o={class:"row header wrap"},i={class:"icon"},u={class:"flex"},l=Object(r["g"])("hr",null,null,-1),d={class:"col"};Object(r["t"])();var f=a((function(e,t,n,a,f,s){return Object(r["s"])(),Object(r["d"])("div",c,[Object(r["g"])("div",o,[Object(r["g"])("p",i,Object(r["D"])(e.icon),1),Object(r["g"])("h2",u,Object(r["D"])(e.header),1),Object(r["A"])(e.$slots,"header",{},void 0,!0)]),l,Object(r["g"])("div",d,[Object(r["A"])(e.$slots,"default",{},void 0,!0)])])})),s=Object(r["h"])({name:"EditorCard",props:{button:{type:String,default:"add"},icon:{type:String,default:""},header:{type:String,default:""}}});n("fae1");s.render=f,s.__scopeId="data-v-800c2256";t["a"]=s},"78f7":function(e,t,n){},9392:function(e,t,n){"use strict";n.d(t,"j",(function(){return f})),n.d(t,"e",(function(){return p})),n.d(t,"f",(function(){return b})),n.d(t,"d",(function(){return O})),n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return k})),n.d(t,"g",(function(){return x})),n.d(t,"k",(function(){return I})),n.d(t,"c",(function(){return C})),n.d(t,"h",(function(){return S})),n.d(t,"i",(function(){return E}));var r=n("1da1"),a=(n("96cf"),n("a002")),c=n.n(a),o=n("7a23"),i=n("6f2d"),u=n("2cd9"),l=n("3f8f"),d=n("3a0b"),f=c.a.createInstance({name:"editor"}),s=new l["a"](f),p=Object(o["b"])((function(){var e=s.records.value[h.value];return e&&e.changed>e.added})),b=Object(o["y"])();function v(){return m.apply(this,arguments)}function m(){return m=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f.getItem("lect");case 2:t=e.sent,t&&(b.value=t),Object(o["K"])(b,Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f.clear();case 2:return e.next=4,f.setItem("lect",Object(o["E"])(b.value));case 4:s.records.value={},b.value?x():E();case 6:case"end":return e.stop()}}),e)}))));case 5:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}var O=Object(o["y"])();function j(){return g.apply(this,arguments)}function g(){return g=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f.getItem(h.value);case 2:t=e.sent,t?O.value=t:b.value||y.value.global?x():E(),s.addRecord(h.value),s.records.value[h.value].skip=!0;case 6:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}var h=Object(o["b"])((function(){var e=y.value.filename+".json",t=Object(o["E"])(b.value)||"Custom";return t&&(e=t+"/"+e),e})),y=Object(o["y"])({default:void 0,filename:""});function k(e){return w.apply(this,arguments)}function w(){return w=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(y.value=t,O.value=void 0,n=Object(o["K"])(O,_,{deep:!0}),Object(o["o"])(n),void 0!==b.value){e.next=7;break}return e.next=7,v();case 7:j();case 8:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}function x(){return N.apply(this,arguments)}function N(){return N=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(d["d"])(h.value,void 0);case 2:t=e.sent,t?O.value=t:E(),delete s.records.value[h.value];case 5:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}function I(){Object(i["b"])((function(e){return O.value=JSON.parse(e)}))}function C(){Object(i["a"])(JSON.stringify(O.value,null,2),h.value)}function S(){Object(u["b"])(JSON.stringify(O.value,null,2),h.value,window.prompt("Enter optional comment",h.value),h.value)}function E(){O.value=JSON.parse(JSON.stringify(y.value.default))}function _(){f.setItem(h.value,Object(o["E"])(O.value)),s.changeRecord(h.value)}},a434:function(e,t,n){"use strict";var r=n("23e7"),a=n("23cb"),c=n("a691"),o=n("50c4"),i=n("7b0b"),u=n("65f0"),l=n("8418"),d=n("1dde"),f=d("splice"),s=Math.max,p=Math.min,b=9007199254740991,v="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!f},{splice:function(e,t){var n,r,d,f,m,O,j=i(this),g=o(j.length),h=a(e,g),y=arguments.length;if(0===y?n=r=0:1===y?(n=0,r=g-h):(n=y-2,r=p(s(c(t),0),g-h)),g+n-r>b)throw TypeError(v);for(d=u(j,r),f=0;f<r;f++)m=h+f,m in j&&l(d,f,j[m]);if(d.length=r,n<r){for(f=h;f<g-r;f++)m=f+r,O=f+n,m in j?j[O]=j[m]:delete j[O];for(f=g;f>g-r+n;f--)delete j[f-1]}else if(n>r)for(f=g-r;f>h;f--)m=f+r-1,O=f+n-1,m in j?j[O]=j[m]:delete j[O];for(f=0;f<n;f++)j[f+h]=arguments[f+2];return j.length=g-r+n,d}})},a9e3:function(e,t,n){"use strict";var r=n("83ab"),a=n("da84"),c=n("94ca"),o=n("6eeb"),i=n("5135"),u=n("c6b6"),l=n("7156"),d=n("c04e"),f=n("d039"),s=n("7c73"),p=n("241c").f,b=n("06cf").f,v=n("9bf2").f,m=n("58a8").trim,O="Number",j=a[O],g=j.prototype,h=u(s(g))==O,y=function(e){var t,n,r,a,c,o,i,u,l=d(e,!1);if("string"==typeof l&&l.length>2)if(l=m(l),t=l.charCodeAt(0),43===t||45===t){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+l}for(c=l.slice(2),o=c.length,i=0;i<o;i++)if(u=c.charCodeAt(i),u<48||u>a)return NaN;return parseInt(c,r)}return+l};if(c(O,!j(" 0o1")||!j("0b1")||j("+0x1"))){for(var k,w=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof w&&(h?f((function(){g.valueOf.call(n)})):u(n)!=O)?l(new j(y(t)),n,w):y(t)},x=r?p(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),N=0;x.length>N;N++)i(j,k=x[N])&&!i(w,k)&&v(w,k,b(j,k));w.prototype=g,g.constructor=w,o(a,O,w)}},b5cc:function(e,t,n){"use strict";var r=n("7a23"),a={class:"row"};function c(e,t,n,c,o,i){var u=Object(r["B"])("btn"),l=Object(r["B"])("ConfirmButton");return Object(r["s"])(),Object(r["d"])("div",a,[void 0!==e.add?(Object(r["s"])(),Object(r["d"])(u,{key:0,icon:"add",onClick:e.action.add},null,8,["onClick"])):Object(r["e"])("",!0),e.array&&e.item?(Object(r["s"])(),Object(r["d"])(r["a"],{key:1},[e.copy?(Object(r["s"])(),Object(r["d"])(u,{key:0,icon:"queue",onClick:e.action.copy},null,8,["onClick"])):Object(r["e"])("",!0),e.shift?(Object(r["s"])(),Object(r["d"])(u,{key:1,icon:"keyboard_arrow_right",onClick:t[1]||(t[1]=function(t){return e.action.shift(1)})})):e.shiftTwo?(Object(r["s"])(),Object(r["d"])(r["a"],{key:2},[Object(r["g"])(u,{icon:"keyboard_arrow_up",onClick:t[2]||(t[2]=function(t){return e.action.shift(-1)})}),Object(r["g"])(u,{icon:"keyboard_arrow_down",onClick:t[3]||(t[3]=function(t){return e.action.shift(1)})})],64)):Object(r["e"])("",!0),e.remove?(Object(r["s"])(),Object(r["d"])(l,{key:3,onConfirm:e.action.remove},null,8,["onConfirm"])):Object(r["e"])("",!0)],64)):Object(r["e"])("",!0)])}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var i=n("1da1"),u=(n("96cf"),n("a9e3"),n("a434"),n("04d4")),l=Object(r["h"])({name:"ArrayControl",components:{ConfirmButton:u["a"]},props:{modelValue:{type:Array,default:function(){}},item:{type:Object,default:void 0},add:{type:[Number,String,Object,Function],default:void 0},copy:Boolean,shift:Boolean,shiftTwo:Boolean,remove:Boolean},emits:["update:modelValue","update:item"],setup:function(e,t){var n=t.emit,a=Object(r["b"])({get:function(){return e.modelValue},set:function(e){return n("update:modelValue",e)}});function c(){n("update:item",a.value?a.value[a.value.length-1]:void 0)}function u(){return l.apply(this,arguments)}function l(){return l=Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.add,void 0!==!n){t.next=3;break}return t.abrupt("return");case 3:if(a.value){t.next=7;break}return a.value=[],t.next=7,Object(r["m"])();case 7:n="function"===typeof n?n():"object"===o(n)?JSON.parse(JSON.stringify(n)):n,a.value.push(n),c();case 10:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function d(){var t=JSON.parse(JSON.stringify(Object(r["E"])(e.item)));a.value.push(t),c()}function f(t){var n=a.value.length,c=e.item,o=a.value.indexOf(Object(r["E"])(c)),i=(o+t+n)%n;a.value.splice(o,1),a.value.splice(i,0,c)}function s(){var t=a.value.indexOf(Object(r["E"])(e.item));a.value.splice(t,1),c()}return Object(r["K"])(a,c,{immediate:!0}),{array:a,action:{add:u,copy:d,shift:f,remove:s}}}});l.render=c;t["a"]=l},fae1:function(e,t,n){"use strict";n("78f7")}}]);