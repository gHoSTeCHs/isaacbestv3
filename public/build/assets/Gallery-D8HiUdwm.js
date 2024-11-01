import{r as n,j as a,Y as g,a as c}from"./app-C1W8XZAd.js";import{N as y}from"./NavBar-CccOcdwg.js";import{B as r}from"./button-tes3fIUa.js";import{M as j}from"./Modal-CIu4jyaV.js";import{c as f}from"./createLucideIcon-3yF2CT3J.js";import"./images-8zAcQ_aW.js";import"./transition-Sbhv7yln.js";/**
 * @license lucide-react v0.427.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=f("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),M=({galleryCategories:d,auth:p,galleryImages:t})=>{const[l,i]=n.useState(null),[m,e]=n.useState(!1);return a.jsxs(a.Fragment,{children:[a.jsx(y,{auth:p}),a.jsx(g,{title:"Gallery Page"}),a.jsxs("div",{className:"max-w-7xl mx-auto p-6",children:[a.jsxs("div",{className:"flex flex-wrap gap-2 mb-8",children:[a.jsx(c,{href:"/gallery",children:a.jsx(r,{className:"capitalize",children:"All"})}),d.map((s,o)=>a.jsx(c,{href:`/gallery/${s.category}`,children:a.jsx(r,{className:"capitalize",children:s.category})},o))]}),t.length<1?a.jsx("div",{children:"No Images found for this Category. Please choose another."}):a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]",children:t.map((s,o)=>{const x=["md:col-span-2 md:row-span-2","md:col-span-2 md:row-span-1","md:col-span-1 md:row-span-2","md:col-span-1 md:row-span-1"][o%4],u=`${window.location.origin}/storage/${s.path}`;return a.jsxs("div",{className:`relative group overflow-hidden rounded-xl ${x}`,onClick:()=>{i(s),e(!0)},children:[a.jsx("img",{src:`${u}`,alt:"Gallery Image",className:"w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"}),a.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"}),a.jsx("div",{className:"absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),a.jsx(r,{variant:"secondary",className:"absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300",onClick:h=>{h.stopPropagation(),i(s),e(!0)},children:a.jsx(v,{className:"h-4 w-4"})})]},s.id)})}),a.jsx(j,{show:m,onClose:()=>e(!1),children:a.jsxs("div",{className:"p-4",children:[l?a.jsx("div",{children:a.jsx("img",{src:`${window.location.origin}/storage/${l.path}`,alt:"Gallery Image"})}):a.jsx("div",{}),a.jsx("div",{className:"flex justify-end gap-4 mt-4",children:a.jsx("button",{onClick:()=>e(!1),className:"bg-gray-500 text-white px-4 py-2 rounded",children:"Close"})})]})})]})]})};export{M as default};