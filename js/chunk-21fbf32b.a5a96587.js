(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21fbf32b"],{"1a1d":function(e,t,n){"use strict";n("d6e0")},"2f81":function(e,t,n){},"4f07":function(e,t,n){"use strict";n("8e35")},"81d7":function(e,t,n){"use strict";n("2f81")},"8e35":function(e,t,n){},d6e0:function(e,t,n){},dced:function(e,t,n){},e501:function(e,t,n){"use strict";n("dced")},e701:function(e,t,n){"use strict";n.r(t);n("b0c0");var o=n("7a23"),c=Object(o["M"])("data-v-65c392f5");Object(o["v"])("data-v-65c392f5");var a={key:0,class:"section col-2 small grid"},r={class:"col-2"},i={class:"col scroll"},l={class:"col scroll"},u={class:"row-1 wrap block-editor"};Object(o["t"])();var s=c((function(e,t,n,s,d,b){var f=Object(o["A"])("ButtonAlert"),O=Object(o["A"])("btn"),j=Object(o["A"])("EditorCard"),p=Object(o["A"])("VContext"),v=Object(o["A"])("VBlock"),h=Object(o["A"])("ContextEditor"),m=Object(o["A"])("BlockEditor");return e.file?(Object(o["s"])(),Object(o["d"])("div",a,[Object(o["h"])("div",r,[Object(o["h"])(j,{icon:"topic",header:"sections",onAction:e.addSection},Object(o["f"])({default:c((function(){return[Object(o["h"])("div",i,[(Object(o["s"])(!0),Object(o["d"])(o["a"],null,Object(o["y"])(e.file,(function(t){return Object(o["s"])(),Object(o["d"])("div",{key:t.id,class:"row"},[Object(o["h"])(O,{icon:"edit","is-on":e.section===t,onClick:function(n){return e.section=t}},null,8,["is-on","onClick"]),Object(o["L"])(Object(o["h"])("input",{"onUpdate:modelValue":function(e){return t.name=e},class:"flex",type:"text"},null,8,["onUpdate:modelValue"]),[[o["G"],t.name]])])})),128))])]})),_:2},[e.section?{name:"header",fn:c((function(){return[Object(o["h"])(f,{onConfirm:e.removeSection},null,8,["onConfirm"])]}))}:void 0]),1032,["onAction"]),e.section?(Object(o["s"])(),Object(o["d"])(j,{key:0,icon:"short_text",header:"phrases",onAction:e.addPhrase},Object(o["f"])({default:c((function(){return[Object(o["h"])("div",l,[(Object(o["s"])(!0),Object(o["d"])(o["a"],null,Object(o["y"])(e.section.phrases,(function(t){return Object(o["s"])(),Object(o["d"])("div",{key:t.id,class:"row"},[Object(o["h"])(O,{icon:"edit","is-on":e.phrase===t,onClick:function(n){return e.phrase=t}},null,8,["is-on","onClick"]),Object(o["L"])(Object(o["h"])("input",{"onUpdate:modelValue":function(e){return t.preview=e},class:"flex",type:"text"},null,8,["onUpdate:modelValue"]),[[o["G"],t.preview]])])})),128))])]})),_:2},[e.phrase?{name:"header",fn:c((function(){return[Object(o["h"])(f,{onConfirm:e.removePhrase},null,8,["onConfirm"])]}))}:void 0]),1032,["onAction"])):Object(o["e"])("",!0),e.phrase?(Object(o["s"])(),Object(o["d"])(j,{key:1,icon:"account_tree",header:"Blocks",onAction:e.addBlock},Object(o["f"])({default:c((function(){return[Object(o["h"])(p),Object(o["h"])("div",u,[(Object(o["s"])(!0),Object(o["d"])(o["a"],null,Object(o["y"])(e.phrase.blocks,(function(t,n){return Object(o["s"])(),Object(o["d"])("div",{key:e.phrase.id+"--"+n,class:"row"},[Object(o["h"])(O,{icon:"edit","is-on":e.block===t,onClick:function(n){return e.block=t}},null,8,["is-on","onClick"]),Object(o["h"])(v,{block:t},null,8,["block"])])})),128))])]})),_:2},[e.block?{name:"header",fn:c((function(){return[Object(o["h"])(f,{onConfirm:e.removeBlock},null,8,["onConfirm"])]}))}:void 0]),1032,["onAction"])):Object(o["e"])("",!0),e.phrase?(Object(o["s"])(),Object(o["d"])(h,{key:2,modelValue:e.phrase.context,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.phrase.context=t})},null,8,["modelValue"])):Object(o["e"])("",!0)]),e.block?(Object(o["s"])(),Object(o["d"])(m,{key:0,modelValue:e.block,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.block=t}),onRemove:e.removeBlock},null,8,["modelValue","onRemove"])):Object(o["e"])("",!0)])):Object(o["e"])("",!0)})),d=(n("4160"),n("c975"),n("a434"),n("d3b7"),n("ac1f"),n("6062"),n("3ca3"),n("1276"),n("159b"),n("ddb0"),n("898d")),b=n("7694"),f=n("5794"),O=Object(o["M"])("data-v-1519fa16");Object(o["v"])("data-v-1519fa16");var j={class:"col scroll"};Object(o["t"])();var p=O((function(e,t,n,c,a,r){var i=Object(o["A"])("btn"),l=Object(o["A"])("EditorCard");return Object(o["s"])(),Object(o["d"])(l,{icon:"widgets",header:"context",onAction:r.add},{default:O((function(){return[Object(o["h"])("div",j,[(Object(o["s"])(!0),Object(o["d"])(o["a"],null,Object(o["y"])(r.context,(function(e,t){return Object(o["s"])(),Object(o["d"])("div",{key:t,class:"row"},[Object(o["L"])(Object(o["h"])("input",{"onUpdate:modelValue":function(t){return e.entity=t},class:["entity","colored-"+t],type:"text"},null,10,["onUpdate:modelValue"]),[[o["G"],e.entity]]),Object(o["L"])(Object(o["h"])("input",{"onUpdate:modelValue":function(t){return e.tags=t},class:"flex",type:"text"},null,8,["onUpdate:modelValue"]),[[o["G"],e.tags]]),Object(o["h"])(i,{icon:"clear",onClick:function(e){return r.remove(t)}},null,8,["onClick"])])})),128))])]})),_:1},8,["onAction"])})),v={name:"PhraseContextEditor",components:{EditorCard:b["a"]},props:["modelValue"],emits:["update:modelValue"],computed:{context:{get:function(){return this.modelValue},set:function(e){this.$emit("update:modelValue",e)}}},methods:{add:function(){this.context.push({entity:"new entity",tags:"tags"})},remove:function(e){this.context.splice(e,1)}}};n("4f07");v.render=p,v.__scopeId="data-v-1519fa16";var h,m=v,k=n("72e9"),y=n("9362"),x=new Uint8Array(16);function w(){if(!h&&(h="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!h))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return h(x)}var C=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function g(e){return"string"===typeof e&&C.test(e)}for(var V=g,A=[],U=0;U<256;++U)A.push((U+256).toString(16).substr(1));function B(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(A[e[t+0]]+A[e[t+1]]+A[e[t+2]]+A[e[t+3]]+"-"+A[e[t+4]]+A[e[t+5]]+"-"+A[e[t+6]]+A[e[t+7]]+"-"+A[e[t+8]]+A[e[t+9]]+"-"+A[e[t+10]]+A[e[t+11]]+A[e[t+12]]+A[e[t+13]]+A[e[t+14]]+A[e[t+15]]).toLowerCase();if(!V(n))throw TypeError("Stringified UUID is invalid");return n}var E=B;function S(e,t,n){e=e||{};var o=e.random||(e.rng||w)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){n=n||0;for(var c=0;c<16;++c)t[n+c]=o[c];return t}return E(o)}var _=S,D=n("9392"),I=Object(o["i"])({components:{ButtonAlert:d["a"],EditorCard:b["a"],VContext:f["a"],ContextEditor:m,VBlock:k["a"],BlockEditor:y["a"]},setup:function(){var e=Object(D["d"])({defaultFile:{},filename:function(){return window.confirm("You're resetting phrasebook corpus.")?"phrasebook":""},storage:"editor.phrasebookCorpus"}),t=Object(o["x"])({}),n=Object(o["x"])({}),c=Object(o["x"])({}),a=Object(o["x"])({}),r=Object(o["x"])({});function i(){var n={id:_(),name:"New section",phrases:[]};e.value.push(n),t.value=n}function l(){e.value.splice(Object(o["D"])(e.value).indexOf(Object(o["D"])(t.value)),1),t.value=e.value[e.value.length-1]}function u(){var e={id:_(),preview:"New phrase",context:[],blocks:[]};t.value.phrases.push(e),n.value=e}function s(){var e=Object(o["D"])(t.value.phrases);e.splice(e.indexOf(Object(o["D"])(n.value)),1),n.value=e[e.length-1]}function d(){c.value={states:[{display:[{text:"new state"}],transition:"next"}]},n.value.blocks.push(c.value)}function b(){var e=Object(o["D"])(n.value.blocks),t=e.indexOf(Object(o["D"])(c.value));e.splice(t,1),c.value=e[e.length-1]}return Object(o["u"])("context",a),Object(o["u"])("contextSource",r),Object(o["I"])(e,(function(e){return t.value=e[e.length-1]}),{immediate:!0}),Object(o["I"])(t,(function(e){null!==e&&void 0!==e&&e.phrases&&(n.value=e.phrases[e.phrases.length-1])}),{immediate:!0}),Object(o["I"])((function(){var e;return null===(e=n.value)||void 0===e?void 0:e.context}),(function(e){e&&(a.value={},r.value={},e.forEach((function(e){var t=e.entity,n=e.tags;a.value[t]=new Set,r.value[t]=new Set(n.split(" "))})))}),{immediate:!0}),Object(o["I"])(n,(function(e){null!==e&&void 0!==e&&e.blocks&&(c.value=e.blocks[e.blocks.length-1])}),{immediate:!0}),{file:e,section:t,phrase:n,block:c,addSection:i,removeSection:l,addPhrase:u,removePhrase:s,addBlock:d,removeBlock:b}}});n("81d7"),n("1a1d"),n("e501");I.render=s,I.__scopeId="data-v-65c392f5";t["default"]=I}}]);
//# sourceMappingURL=chunk-21fbf32b.a5a96587.js.map