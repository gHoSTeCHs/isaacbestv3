import{r as s,R as f,b as Ze,j as N}from"./app-BghAkaXO.js";import{s as oe,K as y,L as $,o as w,y as S,n as R,a as X,b as B,u as Y,t as le,T as Je,l as ae,p as Qe,f as ye,O as pe,c as $e,i as V,d as et,z as xe,F as G}from"./transition-CyeRop-8.js";function z(e){return oe.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let tt=s.createContext(void 0);function nt(){return s.useContext(tt)}let rt="span";var K=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(K||{});function ot(e,t){var n;let{features:r=1,...o}=e,l={ref:t,"aria-hidden":(r&2)===2?!0:(n=o["aria-hidden"])!=null?n:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return $()({ourProps:l,theirProps:o,slot:{},defaultTag:rt,name:"Hidden"})}let ee=y(ot),ue=s.createContext(null);ue.displayName="DescriptionContext";function Te(){let e=s.useContext(ue);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Te),t}return e}function lt(){let[e,t]=s.useState([]);return[e.length>0?e.join(" "):void 0,s.useMemo(()=>function(n){let r=w(l=>(t(u=>[...u,l]),()=>t(u=>{let i=u.slice(),a=i.indexOf(l);return a!==-1&&i.splice(a,1),i}))),o=s.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props,value:n.value}),[r,n.slot,n.name,n.props,n.value]);return f.createElement(ue.Provider,{value:o},n.children)},[t])]}let at="p";function ut(e,t){let n=s.useId(),r=nt(),{id:o=`headlessui-description-${n}`,...l}=e,u=Te(),i=S(t);R(()=>u.register(o),[o,u.register]);let a=r||!1,d=s.useMemo(()=>({...u.slot,disabled:a}),[u.slot,a]),c={ref:i,...u.props,id:o};return $()({ourProps:c,theirProps:l,slot:d,defaultTag:at,name:u.name||"Description"})}let it=y(ut),st=Object.assign(it,{});var Fe=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Fe||{});let ct=s.createContext(()=>{});function dt({value:e,children:t}){return f.createElement(ct.Provider,{value:e},t)}let ft=class extends Map{constructor(t){super(),this.factory=t}get(t){let n=super.get(t);return n===void 0&&(n=this.factory(t),this.set(t,n)),n}};function Pe(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(o){return r.add(o),()=>r.delete(o)},dispatch(o,...l){let u=t[o].call(n,...l);u&&(n=u,r.forEach(i=>i()))}}}function Le(e){return s.useSyncExternalStore(e.subscribe,e.getSnapshot,e.getSnapshot)}let mt=new ft(()=>Pe(()=>[],{ADD(e){return this.includes(e)?this:[...this,e]},REMOVE(e){let t=this.indexOf(e);if(t===-1)return this;let n=this.slice();return n.splice(t,1),n}}));function k(e,t){let n=mt.get(t),r=s.useId(),o=Le(n);if(R(()=>{if(e)return n.dispatch("ADD",r),()=>n.dispatch("REMOVE",r)},[n,e]),!e)return!1;let l=o.indexOf(r),u=o.length;return l===-1&&(l=u,u+=1),l===u-1}let te=new Map,j=new Map;function ve(e){var t;let n=(t=j.get(e))!=null?t:0;return j.set(e,n+1),n!==0?()=>he(e):(te.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),e.setAttribute("aria-hidden","true"),e.inert=!0,()=>he(e))}function he(e){var t;let n=(t=j.get(e))!=null?t:1;if(n===1?j.delete(e):j.set(e,n-1),n!==1)return;let r=te.get(e);r&&(r["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",r["aria-hidden"]),e.inert=r.inert,te.delete(e))}function pt(e,{allowed:t,disallowed:n}={}){let r=k(e,"inert-others");R(()=>{var o,l;if(!r)return;let u=X();for(let a of(o=n==null?void 0:n())!=null?o:[])a&&u.add(ve(a));let i=(l=t==null?void 0:t())!=null?l:[];for(let a of i){if(!a)continue;let d=z(a);if(!d)continue;let c=a.parentElement;for(;c&&c!==d.body;){for(let m of c.children)i.some(v=>m.contains(v))||u.add(ve(m));c=c.parentElement}}return u.dispose},[r,t,n])}function vt(e,t,n){let r=B(o=>{let l=o.getBoundingClientRect();l.x===0&&l.y===0&&l.width===0&&l.height===0&&n()});s.useEffect(()=>{if(!e)return;let o=t===null?null:t instanceof HTMLElement?t:t.current;if(!o)return;let l=X();if(typeof ResizeObserver<"u"){let u=new ResizeObserver(()=>r.current(o));u.observe(o),l.add(()=>u.disconnect())}if(typeof IntersectionObserver<"u"){let u=new IntersectionObserver(()=>r.current(o));u.observe(o),l.add(()=>u.disconnect())}return()=>l.dispose()},[t,r,e])}let q=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(","),ht=["[data-autofocus]"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var T=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e[e.AutoFocus=64]="AutoFocus",e))(T||{}),ne=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(ne||{}),Et=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Et||{});function gt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(q)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}function wt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(ht)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Se=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Se||{});function bt(e,t=0){var n;return e===((n=z(e))==null?void 0:n.body)?!1:Y(t,{0(){return e.matches(q)},1(){let r=e;for(;r!==null;){if(r.matches(q))return!0;r=r.parentElement}return!1}})}var yt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(yt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function F(e){e==null||e.focus({preventScroll:!0})}let $t=["textarea","input"].join(",");function xt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,$t))!=null?n:!1}function Tt(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),l=t(r);if(o===null||l===null)return 0;let u=o.compareDocumentPosition(l);return u&Node.DOCUMENT_POSITION_FOLLOWING?-1:u&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function W(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,u=Array.isArray(e)?n?Tt(e):e:t&64?wt(e):gt(e);o.length>0&&u.length>1&&(u=u.filter(p=>!o.some(h=>h!=null&&"current"in h?(h==null?void 0:h.current)===p:h===p))),r=r??l.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),a=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,u.indexOf(r))-1;if(t&4)return Math.max(0,u.indexOf(r))+1;if(t&8)return u.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},c=0,m=u.length,v;do{if(c>=m||c+m<=0)return 0;let p=a+c;if(t&16)p=(p+m)%m;else{if(p<0)return 3;if(p>=m)return 1}v=u[p],v==null||v.focus(d),c+=i}while(v!==l.activeElement);return t&6&&xt(v)&&v.select(),2}function Me(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Ft(){return/Android/gi.test(window.navigator.userAgent)}function Pt(){return Me()||Ft()}function H(e,t,n,r){let o=B(n);s.useEffect(()=>{if(!e)return;function l(u){o.current(u)}return document.addEventListener(t,l,r),()=>document.removeEventListener(t,l,r)},[e,t,r])}function Ce(e,t,n,r){let o=B(n);s.useEffect(()=>{if(!e)return;function l(u){o.current(u)}return window.addEventListener(t,l,r),()=>window.removeEventListener(t,l,r)},[e,t,r])}const Ee=30;function Lt(e,t,n){let r=k(e,"outside-click"),o=B(n),l=s.useCallback(function(a,d){if(a.defaultPrevented)return;let c=d(a);if(c===null||!c.getRootNode().contains(c)||!c.isConnected)return;let m=function v(p){return typeof p=="function"?v(p()):Array.isArray(p)||p instanceof Set?p:[p]}(t);for(let v of m)if(v!==null&&(v.contains(c)||a.composed&&a.composedPath().includes(v)))return;return!bt(c,Se.Loose)&&c.tabIndex!==-1&&a.preventDefault(),o.current(a,c)},[o,t]),u=s.useRef(null);H(r,"pointerdown",a=>{var d,c;u.current=((c=(d=a.composedPath)==null?void 0:d.call(a))==null?void 0:c[0])||a.target},!0),H(r,"mousedown",a=>{var d,c;u.current=((c=(d=a.composedPath)==null?void 0:d.call(a))==null?void 0:c[0])||a.target},!0),H(r,"click",a=>{Pt()||u.current&&(l(a,()=>u.current),u.current=null)},!0);let i=s.useRef({x:0,y:0});H(r,"touchstart",a=>{i.current.x=a.touches[0].clientX,i.current.y=a.touches[0].clientY},!0),H(r,"touchend",a=>{let d={x:a.changedTouches[0].clientX,y:a.changedTouches[0].clientY};if(!(Math.abs(d.x-i.current.x)>=Ee||Math.abs(d.y-i.current.y)>=Ee))return l(a,()=>a.target instanceof HTMLElement?a.target:null)},!0),Ce(r,"blur",a=>l(a,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function U(...e){return s.useMemo(()=>z(...e),[...e])}function De(e,t,n,r){let o=B(n);s.useEffect(()=>{e=e??window;function l(u){o.current(u)}return e.addEventListener(t,l,r),()=>e.removeEventListener(t,l,r)},[e,t,r])}function St(){let e;return{before({doc:t}){var n;let r=t.documentElement,o=(n=t.defaultView)!=null?n:window;e=Math.max(0,o.innerWidth-r.clientWidth)},after({doc:t,d:n}){let r=t.documentElement,o=Math.max(0,r.clientWidth-r.offsetWidth),l=Math.max(0,e-o);n.style(r,"paddingRight",`${l}px`)}}}function Mt(){return Me()?{before({doc:e,d:t,meta:n}){function r(o){return n.containers.flatMap(l=>l()).some(l=>l.contains(o))}t.microTask(()=>{var o;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let i=X();i.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>i.dispose()))}let l=(o=window.scrollY)!=null?o:window.pageYOffset,u=null;t.addEventListener(e,"click",i=>{if(i.target instanceof HTMLElement)try{let a=i.target.closest("a");if(!a)return;let{hash:d}=new URL(a.href),c=e.querySelector(d);c&&!r(c)&&(u=c)}catch{}},!0),t.addEventListener(e,"touchstart",i=>{if(i.target instanceof HTMLElement)if(r(i.target)){let a=i.target;for(;a.parentElement&&r(a.parentElement);)a=a.parentElement;t.style(a,"overscrollBehavior","contain")}else t.style(i.target,"touchAction","none")}),t.addEventListener(e,"touchmove",i=>{if(i.target instanceof HTMLElement){if(i.target.tagName==="INPUT")return;if(r(i.target)){let a=i.target;for(;a.parentElement&&a.dataset.headlessuiPortal!==""&&!(a.scrollHeight>a.clientHeight||a.scrollWidth>a.clientWidth);)a=a.parentElement;a.dataset.headlessuiPortal===""&&i.preventDefault()}else i.preventDefault()}},{passive:!1}),t.add(()=>{var i;let a=(i=window.scrollY)!=null?i:window.pageYOffset;l!==a&&window.scrollTo(0,l),u&&u.isConnected&&(u.scrollIntoView({block:"nearest"}),u=null)})})}}:{}}function Ct(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Dt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let A=Pe(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:X(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:Dt(n)},o=[Mt(),St(),Ct()];o.forEach(({before:l})=>l==null?void 0:l(r)),o.forEach(({after:l})=>l==null?void 0:l(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});A.subscribe(()=>{let e=A.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",o=n.count!==0;(o&&!r||!o&&r)&&A.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&A.dispatch("TEARDOWN",n)}});function At(e,t,n=()=>({containers:[]})){let r=Le(A),o=t?r.get(t):void 0,l=o?o.count>0:!1;return R(()=>{if(!(!t||!e))return A.dispatch("PUSH",t,n),()=>A.dispatch("POP",t,n)},[e,t]),l}function Rt(e,t,n=()=>[document.body]){let r=k(e,"scroll-lock");At(r,t,o=>{var l;return{containers:[...(l=o.containers)!=null?l:[],n]}})}function ie(e,t){let n=s.useRef([]),r=w(e);s.useEffect(()=>{let o=[...n.current];for(let[l,u]of t.entries())if(n.current[l]!==u){let i=r(t,o);return n.current=t,i}},[r,...t])}function Ot(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let L=[];Ot(()=>{function e(t){if(!(t.target instanceof HTMLElement)||t.target===document.body||L[0]===t.target)return;let n=t.target;n=n.closest(q),L.unshift(n??t.target),L=L.filter(r=>r!=null&&r.isConnected),L.splice(10)}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Ae(e){let t=w(e),n=s.useRef(!1);s.useEffect(()=>(n.current=!1,()=>{n.current=!0,le(()=>{n.current&&t()})}),[t])}let Re=s.createContext(!1);function Nt(){return s.useContext(Re)}function ge(e){return f.createElement(Re.Provider,{value:e.force},e.children)}function kt(e){let t=Nt(),n=s.useContext(Ne),r=U(e),[o,l]=s.useState(()=>{var u;if(!t&&n!==null)return(u=n.current)!=null?u:null;if(oe.isServer)return null;let i=r==null?void 0:r.getElementById("headlessui-portal-root");if(i)return i;if(r===null)return null;let a=r.createElement("div");return a.setAttribute("id","headlessui-portal-root"),r.body.appendChild(a)});return s.useEffect(()=>{o!==null&&(r!=null&&r.body.contains(o)||r==null||r.body.appendChild(o))},[o,r]),s.useEffect(()=>{t||n!==null&&l(n.current)},[n,l,t]),o}let Oe=s.Fragment,It=y(function(e,t){let n=e,r=s.useRef(null),o=S(Je(m=>{r.current=m}),t),l=U(r),u=kt(r),[i]=s.useState(()=>{var m;return oe.isServer?null:(m=l==null?void 0:l.createElement("div"))!=null?m:null}),a=s.useContext(re),d=ae();R(()=>{!u||!i||u.contains(i)||(i.setAttribute("data-headlessui-portal",""),u.appendChild(i))},[u,i]),R(()=>{if(i&&a)return a.register(i)},[a,i]),Ae(()=>{var m;!u||!i||(i instanceof Node&&u.contains(i)&&u.removeChild(i),u.childNodes.length<=0&&((m=u.parentElement)==null||m.removeChild(u)))});let c=$();return d?!u||!i?null:Ze.createPortal(c({ourProps:{ref:o},theirProps:n,slot:{},defaultTag:Oe,name:"Portal"}),i):null});function Ht(e,t){let n=S(t),{enabled:r=!0,...o}=e,l=$();return r?f.createElement(It,{...o,ref:n}):l({ourProps:{ref:n},theirProps:o,slot:{},defaultTag:Oe,name:"Portal"})}let _t=s.Fragment,Ne=s.createContext(null);function jt(e,t){let{target:n,...r}=e,o={ref:S(t)},l=$();return f.createElement(Ne.Provider,{value:n},l({ourProps:o,theirProps:r,defaultTag:_t,name:"Popover.Group"}))}let re=s.createContext(null);function Wt(){let e=s.useContext(re),t=s.useRef([]),n=w(l=>(t.current.push(l),e&&e.register(l),()=>r(l))),r=w(l=>{let u=t.current.indexOf(l);u!==-1&&t.current.splice(u,1),e&&e.unregister(l)}),o=s.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,s.useMemo(()=>function({children:l}){return f.createElement(re.Provider,{value:o},l)},[o])]}let Bt=y(Ht),ke=y(jt),Ut=Object.assign(Bt,{Group:ke});function Vt(e,t=typeof document<"u"?document.defaultView:null,n){let r=k(e,"escape");De(t,"keydown",o=>{r&&(o.defaultPrevented||o.key===Fe.Escape&&n(o))})}function Yt(){var e;let[t]=s.useState(()=>typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(pointer: coarse)"):null),[n,r]=s.useState((e=t==null?void 0:t.matches)!=null?e:!1);return R(()=>{if(!t)return;function o(l){r(l.matches)}return t.addEventListener("change",o),()=>t.removeEventListener("change",o)},[t]),n}function Gt({defaultContainers:e=[],portals:t,mainTreeNode:n}={}){let r=U(n),o=w(()=>{var l,u;let i=[];for(let a of e)a!==null&&(a instanceof HTMLElement?i.push(a):"current"in a&&a.current instanceof HTMLElement&&i.push(a.current));if(t!=null&&t.current)for(let a of t.current)i.push(a);for(let a of(l=r==null?void 0:r.querySelectorAll("html > *, body > *"))!=null?l:[])a!==document.body&&a!==document.head&&a instanceof HTMLElement&&a.id!=="headlessui-portal-root"&&(n&&(a.contains(n)||a.contains((u=n==null?void 0:n.getRootNode())==null?void 0:u.host))||i.some(d=>a.contains(d))||i.push(a));return i});return{resolveContainers:o,contains:w(l=>o().some(u=>u.contains(l)))}}let Ie=s.createContext(null);function we({children:e,node:t}){let[n,r]=s.useState(null),o=He(t??n);return f.createElement(Ie.Provider,{value:o},e,o===null&&f.createElement(ee,{features:K.Hidden,ref:l=>{var u,i;if(l){for(let a of(i=(u=z(l))==null?void 0:u.querySelectorAll("html > *, body > *"))!=null?i:[])if(a!==document.body&&a!==document.head&&a instanceof HTMLElement&&a!=null&&a.contains(l)){r(a);break}}}}))}function He(e=null){var t;return(t=s.useContext(Ie))!=null?t:e}var _=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(_||{});function Kt(){let e=s.useRef(0);return Ce(!0,"keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function _e(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let qt="div";var D=(e=>(e[e.None=0]="None",e[e.InitialFocus=1]="InitialFocus",e[e.TabLock=2]="TabLock",e[e.FocusLock=4]="FocusLock",e[e.RestoreFocus=8]="RestoreFocus",e[e.AutoFocus=16]="AutoFocus",e))(D||{});function Xt(e,t){let n=s.useRef(null),r=S(n,t),{initialFocus:o,initialFocusFallback:l,containers:u,features:i=15,...a}=e;ae()||(i=0);let d=U(n);Qt(i,{ownerDocument:d});let c=en(i,{ownerDocument:d,container:n,initialFocus:o,initialFocusFallback:l});tn(i,{ownerDocument:d,container:n,containers:u,previousActiveElement:c});let m=Kt(),v=w(g=>{let P=n.current;P&&(b=>b())(()=>{Y(m.current,{[_.Forwards]:()=>{W(P,T.First,{skipElements:[g.relatedTarget,l]})},[_.Backwards]:()=>{W(P,T.Last,{skipElements:[g.relatedTarget,l]})}})})}),p=k(!!(i&2),"focus-trap#tab-lock"),h=Qe(),M=s.useRef(!1),C={ref:r,onKeyDown(g){g.key=="Tab"&&(M.current=!0,h.requestAnimationFrame(()=>{M.current=!1}))},onBlur(g){if(!(i&4))return;let P=_e(u);n.current instanceof HTMLElement&&P.add(n.current);let b=g.relatedTarget;b instanceof HTMLElement&&b.dataset.headlessuiFocusGuard!=="true"&&(je(P,b)||(M.current?W(n.current,Y(m.current,{[_.Forwards]:()=>T.Next,[_.Backwards]:()=>T.Previous})|T.WrapAround,{relativeTo:g.target}):g.target instanceof HTMLElement&&F(g.target)))}},x=$();return f.createElement(f.Fragment,null,p&&f.createElement(ee,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:v,features:K.Focusable}),x({ourProps:C,theirProps:a,defaultTag:qt,name:"FocusTrap"}),p&&f.createElement(ee,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:v,features:K.Focusable}))}let zt=y(Xt),Zt=Object.assign(zt,{features:D});function Jt(e=!0){let t=s.useRef(L.slice());return ie(([n],[r])=>{r===!0&&n===!1&&le(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=L.slice())},[e,L,t]),w(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function Qt(e,{ownerDocument:t}){let n=!!(e&8),r=Jt(n);ie(()=>{n||(t==null?void 0:t.activeElement)===(t==null?void 0:t.body)&&F(r())},[n]),Ae(()=>{n&&F(r())})}function en(e,{ownerDocument:t,container:n,initialFocus:r,initialFocusFallback:o}){let l=s.useRef(null),u=k(!!(e&1),"focus-trap#initial-focus"),i=ye();return ie(()=>{if(e===0)return;if(!u){o!=null&&o.current&&F(o.current);return}let a=n.current;a&&le(()=>{if(!i.current)return;let d=t==null?void 0:t.activeElement;if(r!=null&&r.current){if((r==null?void 0:r.current)===d){l.current=d;return}}else if(a.contains(d)){l.current=d;return}if(r!=null&&r.current)F(r.current);else{if(e&16){if(W(a,T.First|T.AutoFocus)!==ne.Error)return}else if(W(a,T.First)!==ne.Error)return;if(o!=null&&o.current&&(F(o.current),(t==null?void 0:t.activeElement)===o.current))return;console.warn("There are no focusable elements inside the <FocusTrap />")}l.current=t==null?void 0:t.activeElement})},[o,u,e]),l}function tn(e,{ownerDocument:t,container:n,containers:r,previousActiveElement:o}){let l=ye(),u=!!(e&4);De(t==null?void 0:t.defaultView,"focus",i=>{if(!u||!l.current)return;let a=_e(r);n.current instanceof HTMLElement&&a.add(n.current);let d=o.current;if(!d)return;let c=i.target;c&&c instanceof HTMLElement?je(a,c)?(o.current=c,F(c)):(i.preventDefault(),i.stopPropagation(),F(d)):F(o.current)},!0)}function je(e,t){for(let n of e)if(n.contains(t))return!0;return!1}var nn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(nn||{}),rn=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(rn||{});let on={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},se=s.createContext(null);se.displayName="DialogContext";function Z(e){let t=s.useContext(se);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Z),n}return t}function ln(e,t){return Y(t.type,on,e,t)}let be=y(function(e,t){let n=s.useId(),{id:r=`headlessui-dialog-${n}`,open:o,onClose:l,initialFocus:u,role:i="dialog",autoFocus:a=!0,__demoMode:d=!1,unmount:c=!1,...m}=e,v=s.useRef(!1);i=function(){return i==="dialog"||i==="alertdialog"?i:(v.current||(v.current=!0,console.warn(`Invalid role [${i}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let p=$e();o===void 0&&p!==null&&(o=(p&V.Open)===V.Open);let h=s.useRef(null),M=S(h,t),C=U(h),x=o?0:1,[g,P]=s.useReducer(ln,{titleId:null,descriptionId:null,panelRef:s.createRef()}),b=w(()=>l(!1)),ce=w(E=>P({type:0,id:E})),O=ae()?x===0:!1,[Be,Ue]=Wt(),Ve={get current(){var E;return(E=g.panelRef.current)!=null?E:h.current}},J=He(),{resolveContainers:Q}=Gt({mainTreeNode:J,portals:Be,defaultContainers:[Ve]}),de=p!==null?(p&V.Closing)===V.Closing:!1;pt(d||de?!1:O,{allowed:w(()=>{var E,me;return[(me=(E=h.current)==null?void 0:E.closest("[data-headlessui-portal]"))!=null?me:null]}),disallowed:w(()=>{var E;return[(E=J==null?void 0:J.closest("body > *:not(#headlessui-portal-root)"))!=null?E:null]})}),Lt(O,Q,E=>{E.preventDefault(),b()}),Vt(O,C==null?void 0:C.defaultView,E=>{E.preventDefault(),E.stopPropagation(),document.activeElement&&"blur"in document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),b()}),Rt(d||de?!1:O,C,Q),vt(O,h,b);let[Ye,Ge]=lt(),Ke=s.useMemo(()=>[{dialogState:x,close:b,setTitleId:ce,unmount:c},g],[x,g,b,ce,c]),fe=s.useMemo(()=>({open:x===0}),[x]),qe={ref:M,id:r,role:i,tabIndex:-1,"aria-modal":d?void 0:x===0?!0:void 0,"aria-labelledby":g.titleId,"aria-describedby":Ye,unmount:c},Xe=!Yt(),I=D.None;O&&!d&&(I|=D.RestoreFocus,I|=D.TabLock,a&&(I|=D.AutoFocus),Xe&&(I|=D.InitialFocus));let ze=$();return f.createElement(et,null,f.createElement(ge,{force:!0},f.createElement(Ut,null,f.createElement(se.Provider,{value:Ke},f.createElement(ke,{target:h},f.createElement(ge,{force:!1},f.createElement(Ge,{slot:fe},f.createElement(Ue,null,f.createElement(Zt,{initialFocus:u,initialFocusFallback:h,containers:Q,features:I},f.createElement(dt,{value:b},ze({ourProps:qe,theirProps:m,slot:fe,defaultTag:an,features:un,visible:x===0,name:"Dialog"})))))))))))}),an="div",un=pe.RenderStrategy|pe.Static;function sn(e,t){let{transition:n=!1,open:r,...o}=e,l=$e(),u=e.hasOwnProperty("open")||l!==null,i=e.hasOwnProperty("onClose");if(!u&&!i)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!u)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!i)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(!l&&typeof e.open!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);if(typeof e.onClose!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);return(r!==void 0||n)&&!o.static?f.createElement(we,null,f.createElement(xe,{show:r,transition:n,unmount:o.unmount},f.createElement(be,{ref:t,...o}))):f.createElement(we,null,f.createElement(be,{ref:t,open:r,...o}))}let cn="div";function dn(e,t){let n=s.useId(),{id:r=`headlessui-dialog-panel-${n}`,transition:o=!1,...l}=e,[{dialogState:u,unmount:i},a]=Z("Dialog.Panel"),d=S(t,a.panelRef),c=s.useMemo(()=>({open:u===0}),[u]),m=w(C=>{C.stopPropagation()}),v={ref:d,id:r,onClick:m},p=o?G:s.Fragment,h=o?{unmount:i}:{},M=$();return f.createElement(p,{...h},M({ourProps:v,theirProps:l,slot:c,defaultTag:cn,name:"Dialog.Panel"}))}let fn="div";function mn(e,t){let{transition:n=!1,...r}=e,[{dialogState:o,unmount:l}]=Z("Dialog.Backdrop"),u=s.useMemo(()=>({open:o===0}),[o]),i={ref:t,"aria-hidden":!0},a=n?G:s.Fragment,d=n?{unmount:l}:{},c=$();return f.createElement(a,{...d},c({ourProps:i,theirProps:r,slot:u,defaultTag:fn,name:"Dialog.Backdrop"}))}let pn="h2";function vn(e,t){let n=s.useId(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:l,setTitleId:u}]=Z("Dialog.Title"),i=S(t);s.useEffect(()=>(u(r),()=>u(null)),[r,u]);let a=s.useMemo(()=>({open:l===0}),[l]),d={ref:i,id:r};return $()({ourProps:d,theirProps:o,slot:a,defaultTag:pn,name:"Dialog.Title"})}let hn=y(sn),We=y(dn);y(mn);let En=y(vn),gn=Object.assign(hn,{Panel:We,Title:En,Description:st});function $n({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,onClose:o=()=>{}}){const l=()=>{r&&o()},u={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return N.jsx(xe,{show:t,leave:"duration-200",children:N.jsxs(gn,{as:"div",id:"modal",className:"fixed inset-0 z-50 flex transform items-center overflow-y-auto px-4 py-6 transition-all sm:px-0",onClose:l,children:[N.jsx(G,{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:N.jsx("div",{className:"absolute inset-0 bg-gray-500/75"})}),N.jsx(G,{enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:N.jsx(We,{className:`mb-6 transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full ${u}`,children:e})})]})})}export{$n as M};
