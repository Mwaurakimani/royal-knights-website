import{_ as c}from"./AppLayout.eb09be82.js";import p from"./DeleteUserForm.d4aa202a.js";import l from"./LogoutOtherBrowserSessionsForm.c3db2f11.js";import{S as s}from"./SectionBorder.622d08fa.js";import f from"./TwoFactorAuthenticationForm.0b06d515.js";import u from"./UpdatePasswordForm.cecb2784.js";import _ from"./UpdateProfileInformationForm.3cc5ed59.js";import{o,c as d,w as n,a as i,e as r,b as t,f as a,F as h}from"./app.dd8311a7.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DialogModal.5dfd68bc.js";import"./SectionTitle.4d57a972.js";import"./DangerButton.63a0a3a4.js";import"./TextInput.ef28d693.js";import"./SecondaryButton.567886f8.js";import"./ActionMessage.ce3a61be.js";import"./PrimaryButton.57c4afd1.js";import"./InputLabel.18e9363b.js";import"./FormSection.2d31e3c3.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},z={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),d(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(_,{user:e.$page.props.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{z as default};
