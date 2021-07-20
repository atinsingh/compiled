(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3239],{13239:function(e,r,t){"use strict";t.d(r,{Z:function(){return y}});var a=t(85893),s=t(17513),l=t(87561),o=[{name:"Java Full Stack - Career Track",code:"FULLSTACK"},{name:"Front End Developer",code:"FRONTEND"},{name:"DevOps Bootcamp",code:"DEVOPS"},{name:"AWS Solution Architect",code:"AWSSA"},{name:"AWS Professional Architect",code:"AWSPA"}],n=t(26265),i=t(38347),d=t(67294);function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var u="relative w-full rounded-b-lg bg-gray-50 mb-6 mt-3",h="rounded-lg w-full flex-1 mt-1 py-1.5 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent border border-gray-300 border-transparent",g={list:"shadow-xl absolute top-full left-0 right-0 border w-auto md:max-w-xs overflow-y-auto max-h-80 mt-2 bg-white p-3 z-20",item:"px-6 py-4 rounded-lg focus text-sm text-gray-700 cursor-pointer hover:bg-gray-200",activeItem:"bg-gray-200"};function p(e){var r=e.name,t=(e.label,e.suggestions),s=e.value,l=e.setValue,o=e.notFound,n=e.setFieldValue,c=e.handleAutoComplete,p=(0,i.Z)(e,["name","label","suggestions","value","setValue","notFound","setFieldValue","handleAutoComplete"]),x=(0,d.useState)(0),v=x[0],f=x[1],b=(0,d.useState)([]),y=b[0],j=b[1],w=(0,d.useState)(!1),N=w[0],C=w[1],_=(0,d.useRef)(null);(0,d.useEffect)((function(){var e=function(e){var r;if(null===(r=_.current)||void 0===r||!r.contains(e.target)){if(!N)return;C(!1)}};return window.addEventListener("click",e),function(){return window.removeEventListener("click",e)}}),[N,_]);var k,O=(0,d.useCallback)((function(e){var a=e.currentTarget.value,s=t.filter((function(e){return e.toLowerCase().indexOf(a.toLowerCase())>-1}));f(0),j(s),C(!0),l(e.currentTarget.value),n(r,e.currentTarget.value),c(e)}),[s]),S=function(e){f(0),j([]),C(!1),l(e.currentTarget.innerText),n(r,e.currentTarget.innerText),c(e)};return N&&s&&(k=y.length?(0,a.jsx)("ul",{className:g.list,children:y.map((function(e,r){var t;return r===v&&(t="".concat(g.item," ").concat(g.activeItem)),r!==v&&(t=g.item),(0,a.jsx)("li",{className:t,onClick:S,children:e},e)}))}):(0,a.jsx)("div",{className:"mt-4 text-sm text-gray-700",children:(0,a.jsx)("em",{children:o})})),(0,a.jsxs)("div",{className:u,children:[(0,a.jsx)("input",m({autoComplete:"off",className:h,onChange:O,onKeyDown:function(e){if(13===e.keyCode)f(0),C(!1),l(y[v]);else if(38===e.keyCode){if(0===v)return;f(v-1)}else if(40===e.keyCode){if(v-1===y.length)return;f(v+1)}},value:s},p)),k]})}var x=t(9669),v=t.n(x),f=(t(48269),t(11163)),b=l.object().shape({firstname:l.string().min(3).max(20).required("First Name is Required"),lastname:l.string().min(3).max(20).required("First Name is Required"),email:l.string().email("Invalid email").required("Email required"),phone:l.string().phone().required("Valid Phone is required"),company:l.string(),msg:l.string().min(10).required("At least 10 character message required"),source_type:l.string().min(3).required("Source is Required")});function y(e){var r,t,l,n,i,c,m,u,h,g,x,y,j,w,N,C,_,k,O,S,F,P,A,E,q,T,D,V,L=e.redirectUrl,R=e.callback,W=e.title,I=e.img,Z=(0,f.useRouter)(),H=(0,d.useState)(""),J=H[0],M=H[1],z=o.map((function(e){return e.name})),B=(0,s.TA)({initialValues:{firstname:"",lastname:"",email:"",company:"",phone:"",msg:"",source_type:""},validationSchema:b,onSubmit:function(e){console.log(JSON.stringify(e)),v().post("https://pragra.io/api/contact",e).then((function(e){Z.push(L)}),(function(e){console.log(e)}))}});return(0,a.jsxs)("div",{className:"relative ",children:[(0,a.jsx)("div",{className:"lg:absolute bg-gray-50 lg:inset-0",children:(0,a.jsxs)("div",{className:"lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2",children:[(0,a.jsx)("img",{className:"h-68  w-full object-cover lg:absolute lg:h-full",src:R?I:"https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",alt:""}),(0,a.jsx)("div",{className:"absolute inset-0 bg-blue-700 mix-blend-multiply"})]})}),(0,a.jsx)("div",{className:"relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-20 lg:grid lg:grid-cols-2",children:(0,a.jsx)("div",{className:"lg:pr-8",children:(0,a.jsxs)("div",{className:"max-w-md mx-auto sm:max-w-lg lg:mx-0",children:[(0,a.jsx)("h2",{className:"text-3xl font-extrabold text-gray-700  sm:text-4xl",children:R?W:"Connect For More Info"}),(0,a.jsxs)("form",{action:"#",method:"POST",className:"mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"first_name",className:"block text-sm font-medium text-gray-700",children:"First name"}),(0,a.jsx)("div",{className:"mt-1",children:(0,a.jsx)("input",{type:"text",name:"firstname",value:B.values.firstname,id:"first_name",onChange:B.handleChange,autoComplete:"given-name",className:"block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"})}),(null===(r=B.touched)||void 0===r?void 0:r.firstname)&&(null===(t=B.errors)||void 0===t?void 0:t.firstname)&&(0,a.jsx)("p",{className:"mt-1 text-red-800",children:(null===(l=B.touched)||void 0===l?void 0:l.firstname)&&(null===(n=B.errors)||void 0===n?void 0:n.firstname)})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"last_name",className:"block text-sm font-medium text-gray-700",children:"Last name"}),(0,a.jsx)("div",{className:"mt-1",children:(0,a.jsx)("input",{type:"text",name:"lastname",value:B.values.lastname,onChange:B.handleChange,id:"last_name",autoComplete:"family-name",className:"block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"})}),(null===(i=B.touched)||void 0===i?void 0:i.lastname)&&(null===(c=B.errors)||void 0===c?void 0:c.lastname)&&(0,a.jsx)("p",{className:"mt-1 text-red-800",children:(null===(m=B.touched)||void 0===m?void 0:m.lastname)&&(null===(u=B.errors)||void 0===u?void 0:u.lastname)})]}),(0,a.jsxs)("div",{className:"sm:col-span-2",children:[(0,a.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),(0,a.jsx)("div",{className:"mt-1",children:(0,a.jsx)("input",{id:"email",name:"email",type:"email",onChange:B.handleChange,value:B.values.email,autoComplete:"email",className:"block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"})}),(null===(h=B.touched)||void 0===h?void 0:h.email)&&(null===(g=B.errors)||void 0===g?void 0:g.email)&&(0,a.jsx)("p",{className:"mt-1 text-red-800",children:(null===(x=B.touched)||void 0===x?void 0:x.email)&&(null===(y=B.errors)||void 0===y?void 0:y.email)})]}),(0,a.jsxs)("div",{className:"sm:col-span-2",children:[(0,a.jsx)("label",{htmlFor:"company",className:"block text-sm font-medium text-gray-700",children:R?"Program":"Company"}),(0,a.jsxs)("div",{className:"mt-1",children:[R?(0,a.jsx)(p,{id:"program",value:J,setFieldValue:B.setFieldValue,setValue:M,handleAutoComplete:B.handleChange,name:"program",label:"Program",placeholder:"Program?",suggestions:z,notFound:"Write your own"}):(0,a.jsx)("input",{type:"text",value:B.values.company,onChange:B.handleChange,name:"company",id:"company",autoComplete:"organization",className:"block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"}),(null===(j=B.touched)||void 0===j?void 0:j.program)&&(null===(w=B.errors)||void 0===w?void 0:w.program)&&(0,a.jsx)("p",{className:"mt-1 text-red-800",children:(null===(N=B.touched)||void 0===N?void 0:N.program)&&(null===(C=B.errors)||void 0===C?void 0:C.program)})]})]}),(0,a.jsxs)("div",{className:"sm:col-span-2",children:[(0,a.jsx)("div",{className:"flex justify-between",children:(0,a.jsx)("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700",children:"Phone"})}),(0,a.jsxs)("div",{className:"mt-1",children:[(0,a.jsx)("input",{type:"text",name:"phone",id:"phone",value:B.values.phone,onChange:B.handleChange,autoComplete:"tel","aria-describedby":"phone_description",className:"block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"}),(null===(_=B.touched)||void 0===_?void 0:_.phone)&&(null===(k=B.errors)||void 0===k?void 0:k.phone)&&(0,a.jsx)("p",{className:"mt-1 text-red-800",children:(null===(O=B.touched)||void 0===O?void 0:O.phone)&&(null===(S=B.errors)||void 0===S?void 0:S.phone)})]})]}),(0,a.jsxs)("div",{className:"sm:col-span-2",children:[(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsx)("label",{htmlFor:"how_can_we_help",className:"block text-sm font-medium text-gray-700",children:"How can we help you?"}),(0,a.jsx)("span",{id:"how_can_we_help_description",className:"text-sm text-gray-500",children:"Max. 500 characters"})]}),(0,a.jsx)("div",{className:"mt-1",children:(0,a.jsx)("textarea",{id:"msg",name:"msg",value:B.values.msg,onChange:B.handleChange,"aria-describedby":"how_can_we_help_description",rows:4,className:"block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"})}),(null===(F=B.touched)||void 0===F?void 0:F.msg)&&(null===(P=B.errors)||void 0===P?void 0:P.msg)&&(0,a.jsx)("p",{className:"mt-1 text-red-800",children:(null===(A=B.touched)||void 0===A?void 0:A.msg)&&(null===(E=B.errors)||void 0===E?void 0:E.msg)})]}),(0,a.jsxs)("div",{className:"sm:col-span-2",children:[(0,a.jsx)("label",{htmlFor:"how_did_you_hear_about_us",className:"block text-sm font-medium text-gray-700",children:"How did you hear about us?"}),(0,a.jsx)("div",{className:"mt-1",children:(0,a.jsx)("input",{type:"text",value:B.values.source_type,onChange:B.handleChange,name:"source_type",placeholder:"Like Google, Facebook",id:"source_type",className:"shadow-sm focus:ring-grape-500 focus:border-grape-500 block w-full sm:text-sm border-gray-300 rounded-md"})}),(null===(q=B.touched)||void 0===q?void 0:q.source_type)&&(null===(T=B.errors)||void 0===T?void 0:T.source_type)&&(0,a.jsx)("p",{className:"mt-1 text-red-800",children:(null===(D=B.touched)||void 0===D?void 0:D.source_type)&&(null===(V=B.errors)||void 0===V?void 0:V.source_type)})]}),(0,a.jsx)("div",{className:"text-right sm:col-span-2",children:(0,a.jsx)("button",{onClick:B.handleSubmit,type:"submit",className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-grape-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-grape-500",children:"Submit"})})]})]})})})]})}},38347:function(e,r,t){"use strict";function a(e,r){if(null==e)return{};var t,a,s=function(e,r){if(null==e)return{};var t,a,s={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}t.d(r,{Z:function(){return a}})}}]);