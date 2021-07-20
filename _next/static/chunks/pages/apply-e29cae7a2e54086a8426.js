(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3805],{2363:function(e,s,l){"use strict";l.d(s,{Z:function(){return p}});var r=l(6265),n=l(5893),a=l(7294),i=l(7561),o=l(7513),d=(l(8269),l(1664)),t=l(9669),c=l.n(t),u=l(1163),m=i.object().shape({firstname:i.string().min(3).max(20).required("First Name is Required"),lastname:i.string().min(3).max(20).required("Last Name is Required"),email:i.string().email("Invalid email").required("Email required"),phone:i.string().phone().required("Valid Phone is required"),country:i.string(),msg:i.string().min(10).required("At least 10 character message required"),terms:i.boolean().required().oneOf([!0],"Must Accept Terms and Conditions")});function h(){for(var e=arguments.length,s=new Array(e),l=0;l<e;l++)s[l]=arguments[l];return s.filter(Boolean).join(" ")}function p(e){var s,l,i,t,p,x,v,g,f,y,b,j,N,w,C,k,_,q,S,A,P,E,Z,T,I,O,F,L,R,V=e.bgColor,B=e.program,M=(0,a.useState)(!1),U=(M[0],M[1],(0,u.useRouter)()),X=(0,o.TA)({initialValues:{firstname:"",lastname:"",email:"",country:"",phone:"",msg:"",terms:!1,program:B},validationSchema:m,onSubmit:function(e){console.log(JSON.stringify(e)),c().post("https://pragra.io/api/applyNow",e).then((function(e){U.push("/apply/thankyou")}),(function(e){console.log(e)}))}});return(0,n.jsx)("div",{className:h(V,"bg-opacity-70 py-8 px-6 mb-24 lg:mb-0 rounded-md overflow-hidden sm:px-6 lg:px-8 lg:py-8"),children:(0,n.jsx)("div",{className:"relative max-w-xl mx-auto",children:(0,n.jsx)("div",{className:"mt-12",children:(0,n.jsxs)("form",{onSubmit:X.handleSubmit,className:"grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-8",children:[(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"mt-1",children:[(0,n.jsx)("input",{type:"text",name:"firstname",value:X.values.firstname,id:"first_name",placeholder:"First Name*",autoComplete:"given-name",className:"block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500",onChange:X.handleChange}),(null===(s=X.touched)||void 0===s?void 0:s.firstname)&&(null===(l=X.errors)||void 0===l?void 0:l.firstname)&&(0,n.jsx)("p",{className:"px-2 py-2 mt-1 text-red-600 ",children:(null===(i=X.touched)||void 0===i?void 0:i.firstname)&&(null===(t=X.errors)||void 0===t?void 0:t.firstname)})]})}),(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"mt-1",children:[(0,n.jsx)("input",{type:"text",name:"lastname",values:X.values.lastname,id:"last_name",placeholder:"Last name*",autoComplete:"family-name",className:"block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500",onChange:X.handleChange,error:(null===(p=X.touched)||void 0===p?void 0:p.lastname)&&(null===(x=X.errors)||void 0===x?void 0:x.lastname)}),(null===(v=X.touched)||void 0===v?void 0:v.lastname)&&(null===(g=X.errors)||void 0===g?void 0:g.lastname)&&(0,n.jsx)("p",{className:"px-2 py-2 mt-1 text-red-600 ",children:(null===(f=X.touched)||void 0===f?void 0:f.lastname)&&(null===(y=X.errors)||void 0===y?void 0:y.lastname)})]})}),(0,n.jsx)("div",{className:"sm:col-span-2",children:(0,n.jsxs)("div",{className:"mt-1",children:[(0,n.jsx)("input",(N={type:"text",name:"email",id:"email",className:"block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500",onChange:X.handleChange,error:(null===(b=X.touched)||void 0===b?void 0:b.email)&&(null===(j=X.errors)||void 0===j?void 0:j.email)},(0,r.Z)(N,"type","email"),(0,r.Z)(N,"autoComplete","email"),(0,r.Z)(N,"placeholder","Email*"),(0,r.Z)(N,"styleclass","block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"),N)),(null===(w=X.touched)||void 0===w?void 0:w.email)&&(null===(C=X.errors)||void 0===C?void 0:C.email)&&(0,n.jsx)("p",{className:"px-2 py-2 mt-1 text-red-600 ",children:(null===(k=X.touched)||void 0===k?void 0:k.email)&&(null===(_=X.errors)||void 0===_?void 0:_.email)})]})}),(0,n.jsx)("div",{className:"sm:col-span-2",children:(0,n.jsxs)("div",{className:"relative mt-1 rounded-md shadow-sm",children:[(0,n.jsxs)("div",{className:"absolute inset-y-0 left-0 flex items-center",children:[(0,n.jsx)("label",{htmlFor:"country",className:"sr-only",children:"Country"}),(0,n.jsxs)("select",{id:"country",name:"country",className:"h-full py-0 pl-4 text-gray-500 bg-transparent border-transparent rounded-md focus:ring-blue-500 focus:border-blue-500",value:X.values.country,onChange:X.handleChange,children:[(0,n.jsx)("option",{value:"us",children:"US"}),(0,n.jsx)("option",{value:"ca",children:"CA"}),(0,n.jsx)("option",{value:"in",children:"IN"})]})]}),(0,n.jsx)("input",{type:"text",name:"phone",onChange:X.handleChange,value:X.values.phone,id:"phone_number",autoComplete:"tel",className:"block w-full px-4 py-3 pl-24 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500",placeholder:"Phone*"}),(null===(q=X.touched)||void 0===q?void 0:q.phone)&&(null===(S=X.errors)||void 0===S?void 0:S.phone)&&(0,n.jsx)("p",{className:"mt-1 text-red-600",children:(null===(A=X.touched)||void 0===A?void 0:A.phone)&&(null===(P=X.errors)||void 0===P?void 0:P.phone)})]})}),(0,n.jsx)("div",{className:"sm:col-span-2",children:(0,n.jsxs)("div",{className:"mt-1",children:[(0,n.jsx)("textarea",{id:"message",name:"msg",onChange:X.handleChange,value:X.values.msg,rows:3,placeholder:"Message",className:"block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"}),(null===(E=X.touched)||void 0===E?void 0:E.msg)&&(null===(Z=X.errors)||void 0===Z?void 0:Z.msg)&&(0,n.jsx)("p",{className:"mt-1 text-red-600",children:(null===(T=X.touched)||void 0===T?void 0:T.msg)&&(null===(I=X.errors)||void 0===I?void 0:I.msg)})]})}),(0,n.jsxs)("div",{className:"sm:col-span-2",children:[(0,n.jsxs)("div",{className:"flex items-start",children:[(0,n.jsx)("div",{className:"flex-shrink-0",children:(0,n.jsx)("input",{name:"terms",value:X.values.terms,onChange:X.handleChange,type:"checkbox",className:"bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-6 border-2 border-transparent rounded-md cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-50"})}),(0,n.jsx)("div",{className:"ml-3",children:(0,n.jsxs)("p",{className:"text-base text-gray-400",children:["By selecting this, you agree to the"," ",(0,n.jsx)(d.default,{href:"/company/privacy",children:(0,n.jsx)("a",{href:"#",className:"font-medium text-gray-300 underline",children:"Privacy Policy"})})," ","and"," ",(0,n.jsx)(d.default,{href:"/company/cookie-policy",children:(0,n.jsx)("a",{href:"#",className:"font-medium text-gray-200 underline",children:"Cookie Policy"})}),"."]})})]}),(null===(O=X.touched)||void 0===O?void 0:O.terms)&&(null===(F=X.errors)||void 0===F?void 0:F.terms)&&(0,n.jsx)("p",{className:"px-2 py-2 mt-1 text-red-600 bg-white rounded-md",children:(null===(L=X.touched)||void 0===L?void 0:L.msg)&&(null===(R=X.errors)||void 0===R?void 0:R.terms)})]}),(0,n.jsx)("div",{className:"sm:col-span-2",children:(0,n.jsx)("button",{type:"submit",onClick:X.handleSubmit,className:"inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Apply Now"})}),(0,n.jsx)("input",{onChange:X.handleChange,className:"hidden",defaultValue:B})]})})})})}},5411:function(e,s,l){"use strict";l.r(s);var r=l(5893),n=(l(2363),l(9129)),a=l(3239);s.default=function(e){return(0,r.jsx)(n.Z,{title:"Apply Now to KickStart your career | Pragra Inc",children:(0,r.jsx)("section",{children:(0,r.jsx)("div",{className:"py-12 bg-white",children:(0,r.jsx)("div",{className:"px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"lg:text-center",children:[(0,r.jsx)("h2",{className:"mt-2 text-3xl font-extrabold text-gray-600 ",children:"Apply Now to Start a Awesome Career"}),(0,r.jsx)("p",{className:"max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto",children:"Looking to kick start your career in IT, just full in simple form and we will reach out to you."}),(0,r.jsx)("div",{className:"py-6",children:(0,r.jsx)(a.Z,{redirectUrl:"apply/thankyou",callback:!0,title:"",img:"pround.svg"})})]})})})})})}},5782:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/apply",function(){return l(5411)}])}},function(e){e.O(0,[9774,3234,4597,6049,6609,8511,3356,3239],(function(){return s=5782,e(e.s=s);var s}));var s=e.O();_N_E=s}]);