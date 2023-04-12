import{L as k,J as r,o as _,e as p,a as o,b as t,w as n,K as h,M as b,g as c,n as v,D as w,r as x,F as C}from"./app.8d59652e.js";import{_ as u}from"./_plugin-vue_export-helper.cdc0426e.js";const M={name:"mobile-menu-component",components:{Link:k},methods:{toggle_dropdown(){let e=$("#drop_down_panel");$(event.currentTarget).attr("data-dropped")==="false"?($(event.currentTarget).attr("data-dropped","true"),e.children("ul").fadeIn("fast","linear"),e.css({height:"200px"})):($(event.currentTarget).attr("data-dropped","false"),e.css({height:"0px"}),e.children("ul").fadeIn("fast","linear"))}}},l=e=>(h("data-v-1bef00bd"),e=e(),b(),e),E={class:"mobile-nav"},I={class:"top-bar"},O=l(()=>o("div",{class:"logo-section"}," LOGO ",-1)),S=l(()=>o("div",{class:"menu-box"},[o("img",{src:"/storage/frontEnd/icons8-menu-64.png",alt:""})],-1)),A=[S],F={id:"drop_down_panel"},G=l(()=>o("p",null,"Home",-1)),K=l(()=>o("p",null,"About Us",-1)),N=l(()=>o("p",null,"Our Programs",-1)),U=l(()=>o("p",null,"Gallery",-1)),q=l(()=>o("p",null,"Connect",-1));function z(e,a,i,m,f,d){const s=r("Link");return _(),p("div",E,[o("div",I,[O,o("div",{class:"menu-section",onClick:a[0]||(a[0]=(...g)=>d.toggle_dropdown&&d.toggle_dropdown(...g)),"data-dropped":"false"},A)]),o("div",F,[o("ul",null,[t(s,{href:"/",as:"li"},{default:n(()=>[G]),_:1}),t(s,{href:"/AboutUs",as:"li"},{default:n(()=>[K]),_:1}),t(s,{href:"/ourWork",as:"li"},{default:n(()=>[N]),_:1}),t(s,{href:"/Gallery",as:"li"},{default:n(()=>[U]),_:1}),t(s,{href:"/Connect",as:"li"},{default:n(()=>[q]),_:1})])])])}const D=u(M,[["render",z],["__scopeId","data-v-1bef00bd"]]);const R={name:"desktop-menu-component",props:["activeLink"],components:{Link:k}},T=e=>(h("data-v-4a1357c0"),e=e(),b(),e),V={class:"desktop-nav"},W=T(()=>o("div",{class:"log-section"},[o("img",{src:"/storage/frontEnd/logo.png",alt:""}),o("p",null,[c("Royal Knights "),o("br"),c(" Organization")])],-1)),B={class:"buttons-area"},H={class:"button-section"},P={class:"contact-button"};function J(e,a,i,m,f,d){const s=r("Link");return _(),p("div",V,[W,o("div",B,[o("ul",H,[t(s,{as:"li",href:"/",class:v([i.activeLink==1?"active":""])},{default:n(()=>[c("Home")]),_:1},8,["class"]),t(s,{as:"li",href:"/ourWork",class:v([i.activeLink==2?"active":""])},{default:n(()=>[c("Our Work")]),_:1},8,["class"]),t(s,{as:"li",href:"/AboutUs",class:v([i.activeLink==3?"active":""])},{default:n(()=>[c("About")]),_:1},8,["class"]),t(s,{as:"li",href:"/Gallery",class:v([i.activeLink==4?"active":""])},{default:n(()=>[c("Gallery")]),_:1},8,["class"])]),o("div",P,[t(s,{href:"/Connect",as:"button"},{default:n(()=>[c("Connect")]),_:1})])])])}const j=u(R,[["render",J],["__scopeId","data-v-4a1357c0"]]);const Q={name:"mobile-footer"},X={class:"mobile-footer"},Y=w('<section><div class="logo-holder"><div class="logo-icon"><img src="/storage/frontEnd/logo-white.png" alt=""></div><h3>Royal Knights <br>Organization</h3></div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum dolores in nemo, nostrum optio quam qui quibusdam quos vel?</p><div class="social"><div class="social-icon"><img src="/storage/frontEnd/socialMedia/facebook.png" alt=""></div><div class="social-icon"><img src="/storage/frontEnd/socialMedia/instagram.png" alt=""></div><div class="social-icon"><img src="/storage/frontEnd/socialMedia/movie.png" alt=""></div><div class="social-icon"><img src="/storage/frontEnd/socialMedia/twitter.png" alt=""></div></div></section><section id="site-map"><ul><li>About</li><li>Our Work</li><li>Reach Out</li><li>Programs</li><li>Up Coming Events</li></ul></section><div class="contact-us-section"><h2>Contact Us</h2><ul><li><div class="icon"><img src="/storage/frontEnd/footer_icons/icons8-envelope-48.png" alt=""></div><p>info@royalknights.org</p></li><li><div class="icon"><img src="/storage/frontEnd/footer_icons/icons8-phone-60.png" alt=""></div><p>+254 700 000 000</p></li><li><div class="icon"><img src="/storage/frontEnd/footer_icons/icons8-address-50.png" alt=""></div><p>Nairobi Kenya</p></li></ul></div><section class="gallery_section"><h2>Gallery</h2><div class="image-holder"><ul><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul></div></section>',4),Z=[Y];function oo(e,a,i,m,f,d){return _(),p("div",X,Z)}const eo=u(Q,[["render",oo]]);const to={name:"desktop-footer"},so=e=>(h("data-v-3907c10f"),e=e(),b(),e),no={class:"desktop-footer"},io=so(()=>o("div",{class:"intro-section"},null,-1)),ao=[io];function co(e,a,i,m,f,d){return _(),p("div",no,ao)}const lo=u(to,[["render",co],["__scopeId","data-v-3907c10f"]]),ro={name:"websiteLayout",props:["activeLink"],components:{mobileFooter:eo,desktopFooter:lo,DesktopMenuComponent:j,MobileMenuComponent:D}},_o=o("div",{class:"copy-right"},"\xA9 2022 Royal Knights Organization . Site by Mwaura Kimani",-1);function po(e,a,i,m,f,d){const s=r("mobile-menu-component"),g=r("desktop-menu-component"),y=r("mobile-footer"),L=r("desktop-footer");return _(),p(C,null,[o("nav",null,[t(s),t(g,{activeLink:i.activeLink},null,8,["activeLink"])]),x(e.$slots,"default"),o("footer",null,[t(y),t(L),_o])],64)}const fo=u(ro,[["render",po]]);export{fo as w};
