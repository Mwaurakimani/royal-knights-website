import{S as p}from"./SectionTitle.8b790966.js";import{o as h,e as w,b as c,w as n,r as o,a as s,l as v,p as x,q as _,j as g,c as f,v as r,T as m,x as u,n as b,h as $,f as k,z as B}from"./app.8738a6dd.js";const S={class:"md:grid md:grid-cols-3 md:gap-6"},C={class:"mt-5 md:mt-0 md:col-span-2"},E={class:"px-4 py-5 sm:p-6 bg-white shadow sm:rounded-lg"},O={__name:"ActionSection",setup(e){return(a,t)=>(h(),w("div",S,[c(p,null,{title:n(()=>[o(a.$slots,"title")]),description:n(()=>[o(a.$slots,"description")]),_:3}),s("div",C,[s("div",E,[o(a.$slots,"content")])])]))}},W={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},T=s("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1),z=[T],M={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:a}){const t=e;v(()=>t.show,()=>{t.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const l=()=>{t.closeable&&a("close")},i=d=>{d.key==="Escape"&&t.show&&l()};x(()=>document.addEventListener("keydown",i)),_(()=>{document.removeEventListener("keydown",i),document.body.style.overflow=null});const y=g(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[t.maxWidth]);return(d,L)=>(h(),f(B,{to:"body"},[c(m,{"leave-active-class":"duration-200"},{default:n(()=>[r(s("div",W,[c(m,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:n(()=>[r(s("div",{class:"fixed inset-0 transform transition-all",onClick:l},z,512),[[u,e.show]])]),_:1}),c(m,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:n(()=>[r(s("div",{class:b(["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",$(y)])},[e.show?o(d.$slots,"default",{key:0}):k("",!0)],2),[[u,e.show]])]),_:3})],512),[[u,e.show]])]),_:3})]))}},N={class:"px-6 py-4"},V={class:"text-lg"},j={class:"mt-4"},D={class:"flex flex-row justify-end px-6 py-4 bg-gray-100 text-right"},U={__name:"DialogModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:a}){const t=()=>{a("close")};return(l,i)=>(h(),f(M,{show:e.show,"max-width":e.maxWidth,closeable:e.closeable,onClose:t},{default:n(()=>[s("div",N,[s("div",V,[o(l.$slots,"title")]),s("div",j,[o(l.$slots,"content")])]),s("div",D,[o(l.$slots,"footer")])]),_:3},8,["show","max-width","closeable"]))}};export{M as _,O as a,U as b};
