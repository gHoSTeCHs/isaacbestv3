import{W as d,j as s,Y as p}from"./app-BghAkaXO.js";import{I as l}from"./InputError-C6iEW-hG.js";import{I as c}from"./InputLabel-DuX5Bep1.js";import{P as u}from"./PrimaryButton-fiJj4S_7.js";import{T as f}from"./TextInput-CDolgDmu.js";import{G as x}from"./GuestLayout-DMh0CPoN.js";import"./ApplicationLogo-DnzFK7gt.js";function P(){const{data:a,setData:e,post:o,processing:t,errors:i,reset:m}=d({password:""}),n=r=>{r.preventDefault(),o(route("password.confirm"),{onFinish:()=>m("password")})};return s.jsxs(x,{children:[s.jsx(p,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(c,{htmlFor:"password",value:"Password"}),s.jsx(f,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>e("password",r.target.value)}),s.jsx(l,{message:i.password,className:"mt-2"})]}),s.jsx("div",{className:"mt-4 flex items-center justify-end",children:s.jsx(u,{className:"ms-4",disabled:t,children:"Confirm"})})]})]})}export{P as default};
