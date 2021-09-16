import{d as e}from"./index.354de788.js";import{b as l,f as a,l as s,_ as t}from"./editor.2707a92f.js";import{_ as o}from"./Seeker.7110ab0c.js";import{e as n,d,G as r,H as i,o as u,h as m,r as p,w as c,x as f,y,n as v,k as g,F as x,z as h,j as V,A as k}from"./vendor.c8bf7c27.js";import{a as U,_ as C}from"./EditorCard.fc9436a6.js";import{_}from"./NotesEditor.1646d6f7.js";import{S as w}from"./search.f060bdbd.js";import"./file-manager.9a2fdd9a.js";var b=n({name:"ContextEditor",props:{modelValue:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup:(e,{emit:l})=>({text:d({get:()=>e.modelValue.join(" "),set:e=>l("update:modelValue",e.split(" "))})})});b.render=function(e,l,a,s,t,o){return r((u(),m("input",{"onUpdate:modelValue":l[1]||(l[1]=l=>e.text=l),type:"text"},null,512)),[[i,e.text]])};var j=n({setup(){l({default:[],filename:"dictionary"});const e=new w(d((()=>({editor:a.value})))),t=p("");c([t],(()=>e.search("editor",t.value))),c(s,(()=>{o.value=void 0,t.value=""}));const o=p();c(a,(()=>{o.value=void 0}));const n=d((()=>{const e=o.value;return(null==e?void 0:e.forms.some((e=>e.plain)))||(null==e?void 0:e.uses.some((e=>e.meaning)))}));c([o,n],(([e,l],[s,t])=>{e&&e===s&&l!==t&&(l?a.value.push(e):m(e))}));const r=p();c(o,(()=>{o.value||(r.value=void 0)}));const i=p();c(o,(()=>{o.value||(i.value=void 0)}));const u=p();function m(l,s=!1){const n=a.value;n.splice(n.indexOf(l),1),s&&(o.value=void 0,e.search("editor",t.value))}return c(i,(()=>{i.value||(u.value=void 0)})),{file:a,entry:o,validEntry:n,usecase:i,form:r,sample:u,results:e.results,progress:e.progress,query:t,newEntry:function(){o.value={forms:[{plain:""}],uses:[{meaning:""}]}},deleteEntry:m}}});const E=k();f("data-v-f4d17f16");const S={key:0,class:"section small grid"},q={class:"col"},F={key:0,class:"highlight-font-alert"},T={class:"row"},A=v("hr",null,null,-1),G={class:"row seeker"},M={class:"scroll long col"},N={class:"col-2"},z={class:"col scroll"},D={class:"col-2"},H={class:"col scroll"},I={class:"row"},O={class:"col"};y();const B=E(((l,a,s,n,d,p)=>{const c=e,f=t,y=o,k=b,w=U,j=_,B=C;return l.file?(u(),m("div",S,[v("div",q,[l.entry&&!l.validEntry?(u(),m("p",F," Entry must have at least form or meaning to be saved. ")):g("",!0),v("div",T,[v(c,{class:"flex",icon:"add",text:"New word",onClick:l.newEntry},null,8,["onClick"]),v(f,{disabled:!l.entry,class:"flex",text:"Delete",onClick:a[1]||(a[1]=()=>l.deleteEntry(l.entry,!0))},null,8,["disabled"])]),A,v("div",G,[v(y,{seek:l.progress.l},null,8,["seek"]),r(v("input",{"onUpdate:modelValue":a[2]||(a[2]=e=>l.query=e),type:"text",placeholder:"Meanings, tags, forms..."},null,512),[[i,l.query]])]),v("div",M,[(u(!0),m(x,null,h(l.results,((e,a)=>(u(),m("div",{key:a,scholar:"",meaning:a,entries:e,class:"col"},[v("i",{class:"text-faded",textContent:V(a)},null,8,["textContent"]),(u(!0),m(x,null,h(e.editor,((e,a)=>(u(),m(c,{key:a,text:e.forms[0].plain,"is-on":l.entry===e,onClick:a=>l.entry=e},null,8,["text","is-on","onClick"])))),128))],8,["meaning","entries"])))),128))])]),l.entry?(u(),m(x,{key:0},[v("div",N,[v(w,{icon:"tag",header:"Tags"},{default:E((()=>[v(k,{modelValue:l.entry.tags,"onUpdate:modelValue":a[3]||(a[3]=e=>l.entry.tags=e),placeholder:"Grammatical tags"},null,8,["modelValue"])])),_:1}),v(j,{modelValue:l.entry.notes,"onUpdate:modelValue":a[4]||(a[4]=e=>l.entry.notes=e)},null,8,["modelValue"]),v(w,{icon:"tune",header:"Forms"},{header:E((()=>[v(B,{modelValue:l.entry.forms,"onUpdate:modelValue":a[5]||(a[5]=e=>l.entry.forms=e),item:l.form,"onUpdate:item":a[6]||(a[6]=e=>l.form=e),add:()=>({plain:""}),"shift-two":"",remove:""},null,8,["modelValue","item","add"])])),default:E((()=>[v("div",z,[(u(!0),m(x,null,h(l.entry.forms,((e,a)=>(u(),m(c,{key:a,text:e.plain,"is-on":l.form===e,onClick:a=>l.form=e},null,8,["text","is-on","onClick"])))),128))])])),_:1}),l.form?(u(),m(w,{key:0,icon:"segment",header:"Form Texts"},{default:E((()=>[r(v("input",{"onUpdate:modelValue":a[7]||(a[7]=e=>l.form.plain=e),type:"text",placeholder:"plain"},null,512),[[i,l.form.plain]]),r(v("input",{"onUpdate:modelValue":a[8]||(a[8]=e=>l.form.ipa=e),type:"text",placeholder:"ipa"},null,512),[[i,l.form.ipa]]),r(v("input",{"onUpdate:modelValue":a[9]||(a[9]=e=>l.form.glossed=e),type:"text",placeholder:"glossed"},null,512),[[i,l.form.glossed]])])),_:1})):g("",!0)]),v("div",D,[v(w,{icon:"textsms",header:"Uses"},{header:E((()=>[v(B,{modelValue:l.entry.uses,"onUpdate:modelValue":a[10]||(a[10]=e=>l.entry.uses=e),item:l.usecase,"onUpdate:item":a[11]||(a[11]=e=>l.usecase=e),add:()=>({meaning:""}),"shift-two":"",remove:""},null,8,["modelValue","item","add"])])),default:E((()=>[v("div",H,[(u(!0),m(x,null,h(l.entry.uses,((e,a)=>(u(),m(c,{key:a,text:e.meaning,"is-on":l.usecase===e,onClick:a=>l.usecase=e},null,8,["text","is-on","onClick"])))),128))])])),_:1}),l.usecase?(u(),m(x,{key:0},[v(w,{icon:"lightbulb",header:"Concept"},{default:E((()=>[v("div",I,[r(v("input",{"onUpdate:modelValue":a[12]||(a[12]=e=>l.usecase.meaning=e),placeholder:"Meaning",style:{flex:"0.5"},type:"text"},null,512),[[i,l.usecase.meaning]]),v(k,{modelValue:l.usecase.tags,"onUpdate:modelValue":a[13]||(a[13]=e=>l.usecase.tags=e),placeholder:"Semantic tags",class:"flex"},null,8,["modelValue"])])])),_:1}),v(j,{modelValue:l.usecase.notes,"onUpdate:modelValue":a[14]||(a[14]=e=>l.usecase.notes=e)},null,8,["modelValue"]),v(w,{icon:"format_list_numbered",header:"Samples"},{header:E((()=>[v(B,{modelValue:l.usecase.samples,"onUpdate:modelValue":a[15]||(a[15]=e=>l.usecase.samples=e),item:l.sample,"onUpdate:item":a[16]||(a[16]=e=>l.sample=e),add:()=>({plain:"sample #"+l.usecase.samples.length}),"shift-two":"",remove:""},null,8,["modelValue","item","add"])])),default:E((()=>[v("div",O,[(u(!0),m(x,null,h(l.usecase.samples,((e,a)=>(u(),m(c,{key:a,text:e.plain,"is-on":l.sample===e,onClick:a=>l.sample=e},null,8,["text","is-on","onClick"])))),128))])])),_:1}),l.sample?(u(),m(w,{key:0,icon:"segment",header:"Sample Texts"},{default:E((()=>[r(v("input",{"onUpdate:modelValue":a[17]||(a[17]=e=>l.sample.plain=e),type:"text",placeholder:"plain"},null,512),[[i,l.sample.plain]]),r(v("input",{"onUpdate:modelValue":a[18]||(a[18]=e=>l.sample.ipa=e),type:"text",placeholder:"ipa"},null,512),[[i,l.sample.ipa]]),r(v("input",{"onUpdate:modelValue":a[19]||(a[19]=e=>l.sample.glossed=e),type:"text",placeholder:"glossed"},null,512),[[i,l.sample.glossed]]),r(v("input",{"onUpdate:modelValue":a[20]||(a[20]=e=>l.sample.translation=e),type:"text",placeholder:"translation"},null,512),[[i,l.sample.translation]])])),_:1})):g("",!0)],64)):g("",!0)])],64)):g("",!0)])):g("",!0)}));j.render=B,j.__scopeId="data-v-f4d17f16";export default j;