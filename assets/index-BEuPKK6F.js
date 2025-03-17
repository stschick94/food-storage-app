(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Wo(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ee={},Dn=[],ct=()=>{},of=()=>!1,ir=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ho=t=>t.startsWith("onUpdate:"),Ae=Object.assign,Bo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},af=Object.prototype.hasOwnProperty,Y=(t,e)=>af.call(t,e),L=Array.isArray,xn=t=>zs(t)==="[object Map]",rr=t=>zs(t)==="[object Set]",Qa=t=>zs(t)==="[object Date]",V=t=>typeof t=="function",he=t=>typeof t=="string",ht=t=>typeof t=="symbol",ae=t=>t!==null&&typeof t=="object",Uc=t=>(ae(t)||V(t))&&V(t.then)&&V(t.catch),Vc=Object.prototype.toString,zs=t=>Vc.call(t),lf=t=>zs(t).slice(8,-1),Wc=t=>zs(t)==="[object Object]",jo=t=>he(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ys=Wo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),or=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},cf=/-(\w)/g,Ke=or(t=>t.replace(cf,(e,n)=>n?n.toUpperCase():"")),uf=/\B([A-Z])/g,Qt=or(t=>t.replace(uf,"-$1").toLowerCase()),ar=or(t=>t.charAt(0).toUpperCase()+t.slice(1)),Or=or(t=>t?`on${ar(t)}`:""),pn=(t,e)=>!Object.is(t,e),yi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Hc=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Ri=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Xa;const lr=()=>Xa||(Xa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function at(t){if(L(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=he(s)?pf(s):at(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(he(t)||ae(t))return t}const df=/;(?![^(]*\))/g,hf=/:([^]+)/,ff=/\/\*[^]*?\*\//g;function pf(t){const e={};return t.replace(ff,"").split(df).forEach(n=>{if(n){const s=n.split(hf);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ut(t){let e="";if(he(t))e=t;else if(L(t))for(let n=0;n<t.length;n++){const s=Ut(t[n]);s&&(e+=s+" ")}else if(ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const gf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_f=Wo(gf);function Bc(t){return!!t||t===""}function mf(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=cr(t[s],e[s]);return n}function cr(t,e){if(t===e)return!0;let n=Qa(t),s=Qa(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=ht(t),s=ht(e),n||s)return t===e;if(n=L(t),s=L(e),n||s)return n&&s?mf(t,e):!1;if(n=ae(t),s=ae(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!cr(t[o],e[o]))return!1}}return String(t)===String(e)}function yf(t,e){return t.findIndex(n=>cr(n,e))}const jc=t=>!!(t&&t.__v_isRef===!0),U=t=>he(t)?t:t==null?"":L(t)||ae(t)&&(t.toString===Vc||!V(t.toString))?jc(t)?U(t.value):JSON.stringify(t,qc,2):String(t),qc=(t,e)=>jc(e)?qc(t,e.value):xn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Dr(s,r)+" =>"]=i,n),{})}:rr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Dr(n))}:ht(e)?Dr(e):ae(e)&&!L(e)&&!Wc(e)?String(e):e,Dr=(t,e="")=>{var n;return ht(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let We;class vf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=We,!e&&We&&(this.index=(We.scopes||(We.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=We;try{return We=this,e()}finally{We=n}}}on(){We=this}off(){We=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function If(){return We}let ie;const xr=new WeakSet;class Kc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,We&&We.active&&We.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,xr.has(this)&&(xr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Za(this),$c(this);const e=ie,n=Ye;ie=this,Ye=!0;try{return this.fn()}finally{Yc(this),ie=e,Ye=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Go(e);this.deps=this.depsTail=void 0,Za(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?xr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ao(this)&&this.run()}get dirty(){return ao(this)}}let Gc=0,vs,Is;function zc(t,e=!1){if(t.flags|=8,e){t.next=Is,Is=t;return}t.next=vs,vs=t}function qo(){Gc++}function Ko(){if(--Gc>0)return;if(Is){let e=Is;for(Is=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;vs;){let e=vs;for(vs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function $c(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Yc(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Go(s),wf(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function ao(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Jc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Jc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ps))return;t.globalVersion=Ps;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!ao(t)){t.flags&=-3;return}const n=ie,s=Ye;ie=t,Ye=!0;try{$c(t);const i=t.fn(t._value);(e.version===0||pn(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ie=n,Ye=s,Yc(t),t.flags&=-3}}function Go(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Go(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function wf(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ye=!0;const Qc=[];function Xt(){Qc.push(Ye),Ye=!1}function Zt(){const t=Qc.pop();Ye=t===void 0?!0:t}function Za(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ie;ie=void 0;try{e()}finally{ie=n}}}let Ps=0;class Ef{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ie||!Ye||ie===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ie)n=this.activeLink=new Ef(ie,this),ie.deps?(n.prevDep=ie.depsTail,ie.depsTail.nextDep=n,ie.depsTail=n):ie.deps=ie.depsTail=n,Zc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ie.depsTail,n.nextDep=void 0,ie.depsTail.nextDep=n,ie.depsTail=n,ie.deps===n&&(ie.deps=s)}return n}trigger(e){this.version++,Ps++,this.notify(e)}notify(e){qo();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ko()}}}function Zc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Zc(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const lo=new WeakMap,gn=Symbol(""),co=Symbol(""),Ns=Symbol("");function ve(t,e,n){if(Ye&&ie){let s=lo.get(t);s||lo.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new Xc),i.map=s,i.key=n),i.track()}}function yt(t,e,n,s,i,r){const o=lo.get(t);if(!o){Ps++;return}const a=l=>{l&&l.trigger()};if(qo(),e==="clear")o.forEach(a);else{const l=L(t),c=l&&jo(n);if(l&&n==="length"){const u=Number(s);o.forEach((d,f)=>{(f==="length"||f===Ns||!ht(f)&&f>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Ns)),e){case"add":l?c&&a(o.get("length")):(a(o.get(gn)),xn(t)&&a(o.get(co)));break;case"delete":l||(a(o.get(gn)),xn(t)&&a(o.get(co)));break;case"set":xn(t)&&a(o.get(gn));break}}Ko()}function Sn(t){const e=X(t);return e===t?e:(ve(e,"iterate",Ns),Je(t)?e:e.map(Oe))}function ur(t){return ve(t=X(t),"iterate",Ns),t}const Cf={__proto__:null,[Symbol.iterator](){return Mr(this,Symbol.iterator,Oe)},concat(...t){return Sn(this).concat(...t.map(e=>L(e)?Sn(e):e))},entries(){return Mr(this,"entries",t=>(t[1]=Oe(t[1]),t))},every(t,e){return _t(this,"every",t,e,void 0,arguments)},filter(t,e){return _t(this,"filter",t,e,n=>n.map(Oe),arguments)},find(t,e){return _t(this,"find",t,e,Oe,arguments)},findIndex(t,e){return _t(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return _t(this,"findLast",t,e,Oe,arguments)},findLastIndex(t,e){return _t(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return _t(this,"forEach",t,e,void 0,arguments)},includes(...t){return Lr(this,"includes",t)},indexOf(...t){return Lr(this,"indexOf",t)},join(t){return Sn(this).join(t)},lastIndexOf(...t){return Lr(this,"lastIndexOf",t)},map(t,e){return _t(this,"map",t,e,void 0,arguments)},pop(){return ls(this,"pop")},push(...t){return ls(this,"push",t)},reduce(t,...e){return el(this,"reduce",t,e)},reduceRight(t,...e){return el(this,"reduceRight",t,e)},shift(){return ls(this,"shift")},some(t,e){return _t(this,"some",t,e,void 0,arguments)},splice(...t){return ls(this,"splice",t)},toReversed(){return Sn(this).toReversed()},toSorted(t){return Sn(this).toSorted(t)},toSpliced(...t){return Sn(this).toSpliced(...t)},unshift(...t){return ls(this,"unshift",t)},values(){return Mr(this,"values",Oe)}};function Mr(t,e,n){const s=ur(t),i=s[e]();return s!==t&&!Je(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const bf=Array.prototype;function _t(t,e,n,s,i,r){const o=ur(t),a=o!==t&&!Je(t),l=o[e];if(l!==bf[e]){const d=l.apply(t,r);return a?Oe(d):d}let c=n;o!==t&&(a?c=function(d,f){return n.call(this,Oe(d),f,t)}:n.length>2&&(c=function(d,f){return n.call(this,d,f,t)}));const u=l.call(o,c,s);return a&&i?i(u):u}function el(t,e,n,s){const i=ur(t);let r=n;return i!==t&&(Je(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,Oe(a),l,t)}),i[e](r,...s)}function Lr(t,e,n){const s=X(t);ve(s,"iterate",Ns);const i=s[e](...n);return(i===-1||i===!1)&&Jo(n[0])?(n[0]=X(n[0]),s[e](...n)):i}function ls(t,e,n=[]){Xt(),qo();const s=X(t)[e].apply(t,n);return Ko(),Zt(),s}const Tf=Wo("__proto__,__v_isRef,__isVue"),eu=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ht));function Sf(t){ht(t)||(t=String(t));const e=X(this);return ve(e,"has",t),e.hasOwnProperty(t)}class tu{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Lf:ru:r?iu:su).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=L(e);if(!i){let l;if(o&&(l=Cf[n]))return l;if(n==="hasOwnProperty")return Sf}const a=Reflect.get(e,n,Re(e)?e:s);return(ht(n)?eu.has(n):Tf(n))||(i||ve(e,"get",n),r)?a:Re(a)?o&&jo(n)?a:a.value:ae(a)?i?ou(a):$o(a):a}}class nu extends tu{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=qn(r);if(!Je(s)&&!qn(s)&&(r=X(r),s=X(s)),!L(e)&&Re(r)&&!Re(s))return l?!1:(r.value=s,!0)}const o=L(e)&&jo(n)?Number(n)<e.length:Y(e,n),a=Reflect.set(e,n,s,Re(e)?e:i);return e===X(i)&&(o?pn(s,r)&&yt(e,"set",n,s):yt(e,"add",n,s)),a}deleteProperty(e,n){const s=Y(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&yt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!ht(n)||!eu.has(n))&&ve(e,"has",n),s}ownKeys(e){return ve(e,"iterate",L(e)?"length":gn),Reflect.ownKeys(e)}}class Rf extends tu{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Af=new nu,kf=new Rf,Pf=new nu(!0);const uo=t=>t,di=t=>Reflect.getPrototypeOf(t);function Nf(t,e,n){return function(...s){const i=this.__v_raw,r=X(i),o=xn(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?uo:e?ho:Oe;return!e&&ve(r,"iterate",l?co:gn),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function hi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Of(t,e){const n={get(i){const r=this.__v_raw,o=X(r),a=X(i);t||(pn(i,a)&&ve(o,"get",i),ve(o,"get",a));const{has:l}=di(o),c=e?uo:t?ho:Oe;if(l.call(o,i))return c(r.get(i));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&ve(X(i),"iterate",gn),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=X(r),a=X(i);return t||(pn(i,a)&&ve(o,"has",i),ve(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,l=X(a),c=e?uo:t?ho:Oe;return!t&&ve(l,"iterate",gn),a.forEach((u,d)=>i.call(r,c(u),c(d),o))}};return Ae(n,t?{add:hi("add"),set:hi("set"),delete:hi("delete"),clear:hi("clear")}:{add(i){!e&&!Je(i)&&!qn(i)&&(i=X(i));const r=X(this);return di(r).has.call(r,i)||(r.add(i),yt(r,"add",i,i)),this},set(i,r){!e&&!Je(r)&&!qn(r)&&(r=X(r));const o=X(this),{has:a,get:l}=di(o);let c=a.call(o,i);c||(i=X(i),c=a.call(o,i));const u=l.call(o,i);return o.set(i,r),c?pn(r,u)&&yt(o,"set",i,r):yt(o,"add",i,r),this},delete(i){const r=X(this),{has:o,get:a}=di(r);let l=o.call(r,i);l||(i=X(i),l=o.call(r,i)),a&&a.call(r,i);const c=r.delete(i);return l&&yt(r,"delete",i,void 0),c},clear(){const i=X(this),r=i.size!==0,o=i.clear();return r&&yt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Nf(i,t,e)}),n}function zo(t,e){const n=Of(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Y(n,i)&&i in s?n:s,i,r)}const Df={get:zo(!1,!1)},xf={get:zo(!1,!0)},Mf={get:zo(!0,!1)};const su=new WeakMap,iu=new WeakMap,ru=new WeakMap,Lf=new WeakMap;function Ff(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Uf(t){return t.__v_skip||!Object.isExtensible(t)?0:Ff(lf(t))}function $o(t){return qn(t)?t:Yo(t,!1,Af,Df,su)}function Vf(t){return Yo(t,!1,Pf,xf,iu)}function ou(t){return Yo(t,!0,kf,Mf,ru)}function Yo(t,e,n,s,i){if(!ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Uf(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Mn(t){return qn(t)?Mn(t.__v_raw):!!(t&&t.__v_isReactive)}function qn(t){return!!(t&&t.__v_isReadonly)}function Je(t){return!!(t&&t.__v_isShallow)}function Jo(t){return t?!!t.__v_raw:!1}function X(t){const e=t&&t.__v_raw;return e?X(e):t}function Wf(t){return!Y(t,"__v_skip")&&Object.isExtensible(t)&&Hc(t,"__v_skip",!0),t}const Oe=t=>ae(t)?$o(t):t,ho=t=>ae(t)?ou(t):t;function Re(t){return t?t.__v_isRef===!0:!1}function Hf(t){return Re(t)?t.value:t}const Bf={get:(t,e,n)=>e==="__v_raw"?t:Hf(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Re(i)&&!Re(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function au(t){return Mn(t)?t:new Proxy(t,Bf)}class jf{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Xc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ps-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ie!==this)return zc(this,!0),!0}get value(){const e=this.dep.track();return Jc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function qf(t,e,n=!1){let s,i;return V(t)?s=t:(s=t.get,i=t.set),new jf(s,i,n)}const fi={},Ai=new WeakMap;let ln;function Kf(t,e=!1,n=ln){if(n){let s=Ai.get(n);s||Ai.set(n,s=[]),s.push(t)}}function Gf(t,e,n=ee){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=n,c=O=>i?O:Je(O)||i===!1||i===0?vt(O,1):vt(O);let u,d,f,_,E=!1,A=!1;if(Re(t)?(d=()=>t.value,E=Je(t)):Mn(t)?(d=()=>c(t),E=!0):L(t)?(A=!0,E=t.some(O=>Mn(O)||Je(O)),d=()=>t.map(O=>{if(Re(O))return O.value;if(Mn(O))return c(O);if(V(O))return l?l(O,2):O()})):V(t)?e?d=l?()=>l(t,2):t:d=()=>{if(f){Xt();try{f()}finally{Zt()}}const O=ln;ln=u;try{return l?l(t,3,[_]):t(_)}finally{ln=O}}:d=ct,e&&i){const O=d,ue=i===!0?1/0:i;d=()=>vt(O(),ue)}const H=If(),B=()=>{u.stop(),H&&H.active&&Bo(H.effects,u)};if(r&&e){const O=e;e=(...ue)=>{O(...ue),B()}}let z=A?new Array(t.length).fill(fi):fi;const $=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(e){const ue=u.run();if(i||E||(A?ue.some((je,Le)=>pn(je,z[Le])):pn(ue,z))){f&&f();const je=ln;ln=u;try{const Le=[ue,z===fi?void 0:A&&z[0]===fi?[]:z,_];l?l(e,3,Le):e(...Le),z=ue}finally{ln=je}}}else u.run()};return a&&a($),u=new Kc(d),u.scheduler=o?()=>o($,!1):$,_=O=>Kf(O,!1,u),f=u.onStop=()=>{const O=Ai.get(u);if(O){if(l)l(O,4);else for(const ue of O)ue();Ai.delete(u)}},e?s?$(!0):z=u.run():o?o($.bind(null,!0),!0):u.run(),B.pause=u.pause.bind(u),B.resume=u.resume.bind(u),B.stop=B,B}function vt(t,e=1/0,n){if(e<=0||!ae(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Re(t))vt(t.value,e,n);else if(L(t))for(let s=0;s<t.length;s++)vt(t[s],e,n);else if(rr(t)||xn(t))t.forEach(s=>{vt(s,e,n)});else if(Wc(t)){for(const s in t)vt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&vt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $s(t,e,n,s){try{return s?t(...s):t()}catch(i){dr(i,e,n)}}function ft(t,e,n,s){if(V(t)){const i=$s(t,e,n,s);return i&&Uc(i)&&i.catch(r=>{dr(r,e,n)}),i}if(L(t)){const i=[];for(let r=0;r<t.length;r++)i.push(ft(t[r],e,n,s));return i}}function dr(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ee;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(r){Xt(),$s(r,null,10,[t,l,c]),Zt();return}}zf(t,n,i,s,o)}function zf(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Te=[];let ot=-1;const Ln=[];let Mt=null,kn=0;const lu=Promise.resolve();let ki=null;function cu(t){const e=ki||lu;return t?e.then(this?t.bind(this):t):e}function $f(t){let e=ot+1,n=Te.length;for(;e<n;){const s=e+n>>>1,i=Te[s],r=Os(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function Qo(t){if(!(t.flags&1)){const e=Os(t),n=Te[Te.length-1];!n||!(t.flags&2)&&e>=Os(n)?Te.push(t):Te.splice($f(e),0,t),t.flags|=1,uu()}}function uu(){ki||(ki=lu.then(hu))}function Yf(t){L(t)?Ln.push(...t):Mt&&t.id===-1?Mt.splice(kn+1,0,t):t.flags&1||(Ln.push(t),t.flags|=1),uu()}function tl(t,e,n=ot+1){for(;n<Te.length;n++){const s=Te[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Te.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function du(t){if(Ln.length){const e=[...new Set(Ln)].sort((n,s)=>Os(n)-Os(s));if(Ln.length=0,Mt){Mt.push(...e);return}for(Mt=e,kn=0;kn<Mt.length;kn++){const n=Mt[kn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Mt=null,kn=0}}const Os=t=>t.id==null?t.flags&2?-1:1/0:t.id;function hu(t){try{for(ot=0;ot<Te.length;ot++){const e=Te[ot];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),$s(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ot<Te.length;ot++){const e=Te[ot];e&&(e.flags&=-2)}ot=-1,Te.length=0,du(),ki=null,(Te.length||Ln.length)&&hu()}}let He=null,fu=null;function Pi(t){const e=He;return He=t,fu=t&&t.type.__scopeId||null,e}function Jf(t,e=He,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&dl(-1);const r=Pi(e);let o;try{o=t(...i)}finally{Pi(r),s._d&&dl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ce(t,e){if(He===null)return t;const n=gr(He),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=ee]=e[i];r&&(V(r)&&(r={mounted:r,updated:r}),r.deep&&vt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function on(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Xt(),ft(l,n,8,[t.el,a,t,e]),Zt())}}const Qf=Symbol("_vte"),Xf=t=>t.__isTeleport;function Xo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Xo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function pu(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ni(t,e,n,s,i=!1){if(L(t)){t.forEach((E,A)=>Ni(E,e&&(L(e)?e[A]:e),n,s,i));return}if(ws(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ni(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?gr(s.component):s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ee?a.refs={}:a.refs,d=a.setupState,f=X(d),_=d===ee?()=>!1:E=>Y(f,E);if(c!=null&&c!==l&&(he(c)?(u[c]=null,_(c)&&(d[c]=null)):Re(c)&&(c.value=null)),V(l))$s(l,a,12,[o,u]);else{const E=he(l),A=Re(l);if(E||A){const H=()=>{if(t.f){const B=E?_(l)?d[l]:u[l]:l.value;i?L(B)&&Bo(B,r):L(B)?B.includes(r)||B.push(r):E?(u[l]=[r],_(l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else E?(u[l]=o,_(l)&&(d[l]=o)):A&&(l.value=o,t.k&&(u[t.k]=o))};o?(H.id=-1,Ve(H,n)):H()}}}lr().requestIdleCallback;lr().cancelIdleCallback;const ws=t=>!!t.type.__asyncLoader,gu=t=>t.type.__isKeepAlive;function Zf(t,e){_u(t,"a",e)}function ep(t,e){_u(t,"da",e)}function _u(t,e,n=we){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(hr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)gu(i.parent.vnode)&&tp(s,e,n,i),i=i.parent}}function tp(t,e,n,s){const i=hr(e,t,s,!0);mu(()=>{Bo(s[e],i)},n)}function hr(t,e,n=we,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Xt();const a=Ys(n),l=ft(e,n,t,o);return a(),Zt(),l});return s?i.unshift(r):i.push(r),r}}const kt=t=>(e,n=we)=>{(!xs||t==="sp")&&hr(t,(...s)=>e(...s),n)},np=kt("bm"),sp=kt("m"),ip=kt("bu"),rp=kt("u"),op=kt("bum"),mu=kt("um"),ap=kt("sp"),lp=kt("rtg"),cp=kt("rtc");function up(t,e=we){hr("ec",t,e)}const dp="components";function hp(t,e){return pp(dp,t,!0,e)||t}const fp=Symbol.for("v-ndc");function pp(t,e,n=!0,s=!1){const i=He||we;if(i){const r=i.type;{const a=ng(r,!1);if(a&&(a===e||a===Ke(e)||a===ar(Ke(e))))return r}const o=nl(i[t]||r[t],e)||nl(i.appContext[t],e);return!o&&s?r:o}}function nl(t,e){return t&&(t[e]||t[Ke(e)]||t[ar(Ke(e))])}function Ce(t,e,n,s){let i;const r=n,o=L(t);if(o||he(t)){const a=o&&Mn(t);let l=!1;a&&(l=!Je(t),t=ur(t)),i=new Array(t.length);for(let c=0,u=t.length;c<u;c++)i[c]=e(l?Oe(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,r)}else if(ae(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(t[u],u,l,r)}}else i=[];return i}const fo=t=>t?Vu(t)?gr(t):fo(t.parent):null,Es=Ae(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>fo(t.parent),$root:t=>fo(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>vu(t),$forceUpdate:t=>t.f||(t.f=()=>{Qo(t.update)}),$nextTick:t=>t.n||(t.n=cu.bind(t.proxy)),$watch:t=>Lp.bind(t)}),Fr=(t,e)=>t!==ee&&!t.__isScriptSetup&&Y(t,e),gp={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Fr(s,e))return o[e]=1,s[e];if(i!==ee&&Y(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Y(c,e))return o[e]=3,r[e];if(n!==ee&&Y(n,e))return o[e]=4,n[e];po&&(o[e]=0)}}const u=Es[e];let d,f;if(u)return e==="$attrs"&&ve(t.attrs,"get",""),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==ee&&Y(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,Y(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Fr(i,e)?(i[e]=n,!0):s!==ee&&Y(s,e)?(s[e]=n,!0):Y(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==ee&&Y(t,o)||Fr(e,o)||(a=r[0])&&Y(a,o)||Y(s,o)||Y(Es,o)||Y(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Y(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function sl(t){return L(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let po=!0;function _p(t){const e=vu(t),n=t.proxy,s=t.ctx;po=!1,e.beforeCreate&&il(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:_,updated:E,activated:A,deactivated:H,beforeDestroy:B,beforeUnmount:z,destroyed:$,unmounted:O,render:ue,renderTracked:je,renderTriggered:Le,errorCaptured:et,serverPrefetch:Ot,expose:gt,inheritAttrs:is,components:ai,directives:li,filters:Pr}=e;if(c&&mp(c,s,null),o)for(const le in o){const ne=o[le];V(ne)&&(s[le]=ne.bind(n))}if(i){const le=i.call(n,n);ae(le)&&(t.data=$o(le))}if(po=!0,r)for(const le in r){const ne=r[le],sn=V(ne)?ne.bind(n,n):V(ne.get)?ne.get.bind(n,n):ct,ci=!V(ne)&&V(ne.set)?ne.set.bind(n):ct,rn=ig({get:sn,set:ci});Object.defineProperty(s,le,{enumerable:!0,configurable:!0,get:()=>rn.value,set:tt=>rn.value=tt})}if(a)for(const le in a)yu(a[le],s,n,le);if(l){const le=V(l)?l.call(n):l;Reflect.ownKeys(le).forEach(ne=>{Cp(ne,le[ne])})}u&&il(u,t,"c");function Ee(le,ne){L(ne)?ne.forEach(sn=>le(sn.bind(n))):ne&&le(ne.bind(n))}if(Ee(np,d),Ee(sp,f),Ee(ip,_),Ee(rp,E),Ee(Zf,A),Ee(ep,H),Ee(up,et),Ee(cp,je),Ee(lp,Le),Ee(op,z),Ee(mu,O),Ee(ap,Ot),L(gt))if(gt.length){const le=t.exposed||(t.exposed={});gt.forEach(ne=>{Object.defineProperty(le,ne,{get:()=>n[ne],set:sn=>n[ne]=sn})})}else t.exposed||(t.exposed={});ue&&t.render===ct&&(t.render=ue),is!=null&&(t.inheritAttrs=is),ai&&(t.components=ai),li&&(t.directives=li),Ot&&pu(t)}function mp(t,e,n=ct){L(t)&&(t=go(t));for(const s in t){const i=t[s];let r;ae(i)?"default"in i?r=vi(i.from||s,i.default,!0):r=vi(i.from||s):r=vi(i),Re(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function il(t,e,n){ft(L(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function yu(t,e,n,s){let i=s.includes(".")?Du(n,s):()=>n[s];if(he(t)){const r=e[t];V(r)&&Vr(i,r)}else if(V(t))Vr(i,t.bind(n));else if(ae(t))if(L(t))t.forEach(r=>yu(r,e,n,s));else{const r=V(t.handler)?t.handler.bind(n):e[t.handler];V(r)&&Vr(i,r,t)}}function vu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Oi(l,c,o,!0)),Oi(l,e,o)),ae(e)&&r.set(e,l),l}function Oi(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Oi(t,r,n,!0),i&&i.forEach(o=>Oi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=yp[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const yp={data:rl,props:ol,emits:ol,methods:gs,computed:gs,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:gs,directives:gs,watch:Ip,provide:rl,inject:vp};function rl(t,e){return e?t?function(){return Ae(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function vp(t,e){return gs(go(t),go(e))}function go(t){if(L(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function be(t,e){return t?[...new Set([].concat(t,e))]:e}function gs(t,e){return t?Ae(Object.create(null),t,e):e}function ol(t,e){return t?L(t)&&L(e)?[...new Set([...t,...e])]:Ae(Object.create(null),sl(t),sl(e??{})):e}function Ip(t,e){if(!t)return e;if(!e)return t;const n=Ae(Object.create(null),t);for(const s in e)n[s]=be(t[s],e[s]);return n}function Iu(){return{app:null,config:{isNativeTag:of,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wp=0;function Ep(t,e){return function(s,i=null){V(s)||(s=Ae({},s)),i!=null&&!ae(i)&&(i=null);const r=Iu(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:wp++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:rg,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&V(u.install)?(o.add(u),u.install(c,...d)):V(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const _=c._ceVNode||Qe(s,i);return _.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),t(_,u,f),l=!0,c._container=u,u.__vue_app__=c,gr(_.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ft(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=Fn;Fn=c;try{return u()}finally{Fn=d}}};return c}}let Fn=null;function Cp(t,e){if(we){let n=we.provides;const s=we.parent&&we.parent.provides;s===n&&(n=we.provides=Object.create(s)),n[t]=e}}function vi(t,e,n=!1){const s=we||He;if(s||Fn){const i=Fn?Fn._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&V(e)?e.call(s&&s.proxy):e}}const wu={},Eu=()=>Object.create(wu),Cu=t=>Object.getPrototypeOf(t)===wu;function bp(t,e,n,s=!1){const i={},r=Eu();t.propsDefaults=Object.create(null),bu(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Vf(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Tp(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=X(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(fr(t.emitsOptions,f))continue;const _=e[f];if(l)if(Y(r,f))_!==r[f]&&(r[f]=_,c=!0);else{const E=Ke(f);i[E]=_o(l,a,E,_,t,!1)}else _!==r[f]&&(r[f]=_,c=!0)}}}else{bu(t,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!Y(e,d)&&((u=Qt(d))===d||!Y(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=_o(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!Y(e,d))&&(delete r[d],c=!0)}c&&yt(t.attrs,"set","")}function bu(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ys(l))continue;const c=e[l];let u;i&&Y(i,u=Ke(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:fr(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=X(n),c=a||ee;for(let u=0;u<r.length;u++){const d=r[u];n[d]=_o(i,l,d,c[d],t,!Y(c,d))}}return o}function _o(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=Y(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&V(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Ys(i);s=c[n]=l.call(null,e),u()}}else s=l;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Qt(n))&&(s=!0))}return s}const Sp=new WeakMap;function Tu(t,e,n=!1){const s=n?Sp:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!V(t)){const u=d=>{l=!0;const[f,_]=Tu(d,e,!0);Ae(o,f),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ae(t)&&s.set(t,Dn),Dn;if(L(r))for(let u=0;u<r.length;u++){const d=Ke(r[u]);al(d)&&(o[d]=ee)}else if(r)for(const u in r){const d=Ke(u);if(al(d)){const f=r[u],_=o[d]=L(f)||V(f)?{type:f}:Ae({},f),E=_.type;let A=!1,H=!0;if(L(E))for(let B=0;B<E.length;++B){const z=E[B],$=V(z)&&z.name;if($==="Boolean"){A=!0;break}else $==="String"&&(H=!1)}else A=V(E)&&E.name==="Boolean";_[0]=A,_[1]=H,(A||Y(_,"default"))&&a.push(d)}}const c=[o,a];return ae(t)&&s.set(t,c),c}function al(t){return t[0]!=="$"&&!ys(t)}const Su=t=>t[0]==="_"||t==="$stable",Zo=t=>L(t)?t.map(lt):[lt(t)],Rp=(t,e,n)=>{if(e._n)return e;const s=Jf((...i)=>Zo(e(...i)),n);return s._c=!1,s},Ru=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Su(i))continue;const r=t[i];if(V(r))e[i]=Rp(i,r,s);else if(r!=null){const o=Zo(r);e[i]=()=>o}}},Au=(t,e)=>{const n=Zo(e);t.slots.default=()=>n},ku=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},Ap=(t,e,n)=>{const s=t.slots=Eu();if(t.vnode.shapeFlag&32){const i=e._;i?(ku(s,e,n),n&&Hc(s,"_",i,!0)):Ru(e,s)}else e&&Au(t,e)},kp=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ee;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:ku(i,e,n):(r=!e.$stable,Ru(e,i)),o=e}else e&&(Au(t,e),o={default:1});if(r)for(const a in i)!Su(a)&&o[a]==null&&delete i[a]},Ve=jp;function Pp(t){return Np(t)}function Np(t,e){const n=lr();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:_=ct,insertStaticContent:E}=t,A=(h,p,m,I=null,y=null,v=null,S=void 0,T=null,b=!!p.dynamicChildren)=>{if(h===p)return;h&&!cs(h,p)&&(I=ui(h),tt(h,y,v,!0),h=null),p.patchFlag===-2&&(b=!1,p.dynamicChildren=null);const{type:w,ref:D,shapeFlag:R}=p;switch(w){case pr:H(h,p,m,I);break;case _n:B(h,p,m,I);break;case Wr:h==null&&z(p,m,I,S);break;case Q:ai(h,p,m,I,y,v,S,T,b);break;default:R&1?ue(h,p,m,I,y,v,S,T,b):R&6?li(h,p,m,I,y,v,S,T,b):(R&64||R&128)&&w.process(h,p,m,I,y,v,S,T,b,os)}D!=null&&y&&Ni(D,h&&h.ref,v,p||h,!p)},H=(h,p,m,I)=>{if(h==null)s(p.el=a(p.children),m,I);else{const y=p.el=h.el;p.children!==h.children&&c(y,p.children)}},B=(h,p,m,I)=>{h==null?s(p.el=l(p.children||""),m,I):p.el=h.el},z=(h,p,m,I)=>{[h.el,h.anchor]=E(h.children,p,m,I,h.el,h.anchor)},$=({el:h,anchor:p},m,I)=>{let y;for(;h&&h!==p;)y=f(h),s(h,m,I),h=y;s(p,m,I)},O=({el:h,anchor:p})=>{let m;for(;h&&h!==p;)m=f(h),i(h),h=m;i(p)},ue=(h,p,m,I,y,v,S,T,b)=>{p.type==="svg"?S="svg":p.type==="math"&&(S="mathml"),h==null?je(p,m,I,y,v,S,T,b):Ot(h,p,y,v,S,T,b)},je=(h,p,m,I,y,v,S,T)=>{let b,w;const{props:D,shapeFlag:R,transition:N,dirs:F}=h;if(b=h.el=o(h.type,v,D&&D.is,D),R&8?u(b,h.children):R&16&&et(h.children,b,null,I,y,Ur(h,v),S,T),F&&on(h,null,I,"created"),Le(b,h,h.scopeId,S,I),D){for(const se in D)se!=="value"&&!ys(se)&&r(b,se,null,D[se],v,I);"value"in D&&r(b,"value",null,D.value,v),(w=D.onVnodeBeforeMount)&&rt(w,I,h)}F&&on(h,null,I,"beforeMount");const K=Op(y,N);K&&N.beforeEnter(b),s(b,p,m),((w=D&&D.onVnodeMounted)||K||F)&&Ve(()=>{w&&rt(w,I,h),K&&N.enter(b),F&&on(h,null,I,"mounted")},y)},Le=(h,p,m,I,y)=>{if(m&&_(h,m),I)for(let v=0;v<I.length;v++)_(h,I[v]);if(y){let v=y.subTree;if(p===v||Mu(v.type)&&(v.ssContent===p||v.ssFallback===p)){const S=y.vnode;Le(h,S,S.scopeId,S.slotScopeIds,y.parent)}}},et=(h,p,m,I,y,v,S,T,b=0)=>{for(let w=b;w<h.length;w++){const D=h[w]=T?Lt(h[w]):lt(h[w]);A(null,D,p,m,I,y,v,S,T)}},Ot=(h,p,m,I,y,v,S)=>{const T=p.el=h.el;let{patchFlag:b,dynamicChildren:w,dirs:D}=p;b|=h.patchFlag&16;const R=h.props||ee,N=p.props||ee;let F;if(m&&an(m,!1),(F=N.onVnodeBeforeUpdate)&&rt(F,m,p,h),D&&on(p,h,m,"beforeUpdate"),m&&an(m,!0),(R.innerHTML&&N.innerHTML==null||R.textContent&&N.textContent==null)&&u(T,""),w?gt(h.dynamicChildren,w,T,m,I,Ur(p,y),v):S||ne(h,p,T,null,m,I,Ur(p,y),v,!1),b>0){if(b&16)is(T,R,N,m,y);else if(b&2&&R.class!==N.class&&r(T,"class",null,N.class,y),b&4&&r(T,"style",R.style,N.style,y),b&8){const K=p.dynamicProps;for(let se=0;se<K.length;se++){const J=K[se],Fe=R[J],Ne=N[J];(Ne!==Fe||J==="value")&&r(T,J,Fe,Ne,y,m)}}b&1&&h.children!==p.children&&u(T,p.children)}else!S&&w==null&&is(T,R,N,m,y);((F=N.onVnodeUpdated)||D)&&Ve(()=>{F&&rt(F,m,p,h),D&&on(p,h,m,"updated")},I)},gt=(h,p,m,I,y,v,S)=>{for(let T=0;T<p.length;T++){const b=h[T],w=p[T],D=b.el&&(b.type===Q||!cs(b,w)||b.shapeFlag&70)?d(b.el):m;A(b,w,D,null,I,y,v,S,!0)}},is=(h,p,m,I,y)=>{if(p!==m){if(p!==ee)for(const v in p)!ys(v)&&!(v in m)&&r(h,v,p[v],null,y,I);for(const v in m){if(ys(v))continue;const S=m[v],T=p[v];S!==T&&v!=="value"&&r(h,v,T,S,y,I)}"value"in m&&r(h,"value",p.value,m.value,y)}},ai=(h,p,m,I,y,v,S,T,b)=>{const w=p.el=h?h.el:a(""),D=p.anchor=h?h.anchor:a("");let{patchFlag:R,dynamicChildren:N,slotScopeIds:F}=p;F&&(T=T?T.concat(F):F),h==null?(s(w,m,I),s(D,m,I),et(p.children||[],m,D,y,v,S,T,b)):R>0&&R&64&&N&&h.dynamicChildren?(gt(h.dynamicChildren,N,m,y,v,S,T),(p.key!=null||y&&p===y.subTree)&&Pu(h,p,!0)):ne(h,p,m,D,y,v,S,T,b)},li=(h,p,m,I,y,v,S,T,b)=>{p.slotScopeIds=T,h==null?p.shapeFlag&512?y.ctx.activate(p,m,I,S,b):Pr(p,m,I,y,v,S,b):Ga(h,p,b)},Pr=(h,p,m,I,y,v,S)=>{const T=h.component=Qp(h,I,y);if(gu(h)&&(T.ctx.renderer=os),Xp(T,!1,S),T.asyncDep){if(y&&y.registerDep(T,Ee,S),!h.el){const b=T.subTree=Qe(_n);B(null,b,p,m)}}else Ee(T,h,p,m,y,v,S)},Ga=(h,p,m)=>{const I=p.component=h.component;if(Hp(h,p,m))if(I.asyncDep&&!I.asyncResolved){le(I,p,m);return}else I.next=p,I.update();else p.el=h.el,I.vnode=p},Ee=(h,p,m,I,y,v,S)=>{const T=()=>{if(h.isMounted){let{next:R,bu:N,u:F,parent:K,vnode:se}=h;{const st=Nu(h);if(st){R&&(R.el=se.el,le(h,R,S)),st.asyncDep.then(()=>{h.isUnmounted||T()});return}}let J=R,Fe;an(h,!1),R?(R.el=se.el,le(h,R,S)):R=se,N&&yi(N),(Fe=R.props&&R.props.onVnodeBeforeUpdate)&&rt(Fe,K,R,se),an(h,!0);const Ne=cl(h),nt=h.subTree;h.subTree=Ne,A(nt,Ne,d(nt.el),ui(nt),h,y,v),R.el=Ne.el,J===null&&Bp(h,Ne.el),F&&Ve(F,y),(Fe=R.props&&R.props.onVnodeUpdated)&&Ve(()=>rt(Fe,K,R,se),y)}else{let R;const{el:N,props:F}=p,{bm:K,m:se,parent:J,root:Fe,type:Ne}=h,nt=ws(p);an(h,!1),K&&yi(K),!nt&&(R=F&&F.onVnodeBeforeMount)&&rt(R,J,p),an(h,!0);{Fe.ce&&Fe.ce._injectChildStyle(Ne);const st=h.subTree=cl(h);A(null,st,m,I,h,y,v),p.el=st.el}if(se&&Ve(se,y),!nt&&(R=F&&F.onVnodeMounted)){const st=p;Ve(()=>rt(R,J,st),y)}(p.shapeFlag&256||J&&ws(J.vnode)&&J.vnode.shapeFlag&256)&&h.a&&Ve(h.a,y),h.isMounted=!0,p=m=I=null}};h.scope.on();const b=h.effect=new Kc(T);h.scope.off();const w=h.update=b.run.bind(b),D=h.job=b.runIfDirty.bind(b);D.i=h,D.id=h.uid,b.scheduler=()=>Qo(D),an(h,!0),w()},le=(h,p,m)=>{p.component=h;const I=h.vnode.props;h.vnode=p,h.next=null,Tp(h,p.props,I,m),kp(h,p.children,m),Xt(),tl(h),Zt()},ne=(h,p,m,I,y,v,S,T,b=!1)=>{const w=h&&h.children,D=h?h.shapeFlag:0,R=p.children,{patchFlag:N,shapeFlag:F}=p;if(N>0){if(N&128){ci(w,R,m,I,y,v,S,T,b);return}else if(N&256){sn(w,R,m,I,y,v,S,T,b);return}}F&8?(D&16&&rs(w,y,v),R!==w&&u(m,R)):D&16?F&16?ci(w,R,m,I,y,v,S,T,b):rs(w,y,v,!0):(D&8&&u(m,""),F&16&&et(R,m,I,y,v,S,T,b))},sn=(h,p,m,I,y,v,S,T,b)=>{h=h||Dn,p=p||Dn;const w=h.length,D=p.length,R=Math.min(w,D);let N;for(N=0;N<R;N++){const F=p[N]=b?Lt(p[N]):lt(p[N]);A(h[N],F,m,null,y,v,S,T,b)}w>D?rs(h,y,v,!0,!1,R):et(p,m,I,y,v,S,T,b,R)},ci=(h,p,m,I,y,v,S,T,b)=>{let w=0;const D=p.length;let R=h.length-1,N=D-1;for(;w<=R&&w<=N;){const F=h[w],K=p[w]=b?Lt(p[w]):lt(p[w]);if(cs(F,K))A(F,K,m,null,y,v,S,T,b);else break;w++}for(;w<=R&&w<=N;){const F=h[R],K=p[N]=b?Lt(p[N]):lt(p[N]);if(cs(F,K))A(F,K,m,null,y,v,S,T,b);else break;R--,N--}if(w>R){if(w<=N){const F=N+1,K=F<D?p[F].el:I;for(;w<=N;)A(null,p[w]=b?Lt(p[w]):lt(p[w]),m,K,y,v,S,T,b),w++}}else if(w>N)for(;w<=R;)tt(h[w],y,v,!0),w++;else{const F=w,K=w,se=new Map;for(w=K;w<=N;w++){const Ue=p[w]=b?Lt(p[w]):lt(p[w]);Ue.key!=null&&se.set(Ue.key,w)}let J,Fe=0;const Ne=N-K+1;let nt=!1,st=0;const as=new Array(Ne);for(w=0;w<Ne;w++)as[w]=0;for(w=F;w<=R;w++){const Ue=h[w];if(Fe>=Ne){tt(Ue,y,v,!0);continue}let it;if(Ue.key!=null)it=se.get(Ue.key);else for(J=K;J<=N;J++)if(as[J-K]===0&&cs(Ue,p[J])){it=J;break}it===void 0?tt(Ue,y,v,!0):(as[it-K]=w+1,it>=st?st=it:nt=!0,A(Ue,p[it],m,null,y,v,S,T,b),Fe++)}const Ya=nt?Dp(as):Dn;for(J=Ya.length-1,w=Ne-1;w>=0;w--){const Ue=K+w,it=p[Ue],Ja=Ue+1<D?p[Ue+1].el:I;as[w]===0?A(null,it,m,Ja,y,v,S,T,b):nt&&(J<0||w!==Ya[J]?rn(it,m,Ja,2):J--)}}},rn=(h,p,m,I,y=null)=>{const{el:v,type:S,transition:T,children:b,shapeFlag:w}=h;if(w&6){rn(h.component.subTree,p,m,I);return}if(w&128){h.suspense.move(p,m,I);return}if(w&64){S.move(h,p,m,os);return}if(S===Q){s(v,p,m);for(let R=0;R<b.length;R++)rn(b[R],p,m,I);s(h.anchor,p,m);return}if(S===Wr){$(h,p,m);return}if(I!==2&&w&1&&T)if(I===0)T.beforeEnter(v),s(v,p,m),Ve(()=>T.enter(v),y);else{const{leave:R,delayLeave:N,afterLeave:F}=T,K=()=>s(v,p,m),se=()=>{R(v,()=>{K(),F&&F()})};N?N(v,K,se):se()}else s(v,p,m)},tt=(h,p,m,I=!1,y=!1)=>{const{type:v,props:S,ref:T,children:b,dynamicChildren:w,shapeFlag:D,patchFlag:R,dirs:N,cacheIndex:F}=h;if(R===-2&&(y=!1),T!=null&&Ni(T,null,m,h,!0),F!=null&&(p.renderCache[F]=void 0),D&256){p.ctx.deactivate(h);return}const K=D&1&&N,se=!ws(h);let J;if(se&&(J=S&&S.onVnodeBeforeUnmount)&&rt(J,p,h),D&6)rf(h.component,m,I);else{if(D&128){h.suspense.unmount(m,I);return}K&&on(h,null,p,"beforeUnmount"),D&64?h.type.remove(h,p,m,os,I):w&&!w.hasOnce&&(v!==Q||R>0&&R&64)?rs(w,p,m,!1,!0):(v===Q&&R&384||!y&&D&16)&&rs(b,p,m),I&&za(h)}(se&&(J=S&&S.onVnodeUnmounted)||K)&&Ve(()=>{J&&rt(J,p,h),K&&on(h,null,p,"unmounted")},m)},za=h=>{const{type:p,el:m,anchor:I,transition:y}=h;if(p===Q){sf(m,I);return}if(p===Wr){O(h);return}const v=()=>{i(m),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(h.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:T}=y,b=()=>S(m,v);T?T(h.el,v,b):b()}else v()},sf=(h,p)=>{let m;for(;h!==p;)m=f(h),i(h),h=m;i(p)},rf=(h,p,m)=>{const{bum:I,scope:y,job:v,subTree:S,um:T,m:b,a:w}=h;ll(b),ll(w),I&&yi(I),y.stop(),v&&(v.flags|=8,tt(S,h,p,m)),T&&Ve(T,p),Ve(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},rs=(h,p,m,I=!1,y=!1,v=0)=>{for(let S=v;S<h.length;S++)tt(h[S],p,m,I,y)},ui=h=>{if(h.shapeFlag&6)return ui(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const p=f(h.anchor||h.el),m=p&&p[Qf];return m?f(m):p};let Nr=!1;const $a=(h,p,m)=>{h==null?p._vnode&&tt(p._vnode,null,null,!0):A(p._vnode||null,h,p,null,null,null,m),p._vnode=h,Nr||(Nr=!0,tl(),du(),Nr=!1)},os={p:A,um:tt,m:rn,r:za,mt:Pr,mc:et,pc:ne,pbc:gt,n:ui,o:t};return{render:$a,hydrate:void 0,createApp:Ep($a)}}function Ur({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function an({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Op(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Pu(t,e,n=!1){const s=t.children,i=e.children;if(L(s)&&L(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Lt(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Pu(o,a)),a.type===pr&&(a.el=o.el)}}function Dp(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Nu(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Nu(e)}function ll(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const xp=Symbol.for("v-scx"),Mp=()=>vi(xp);function Vr(t,e,n){return Ou(t,e,n)}function Ou(t,e,n=ee){const{immediate:s,deep:i,flush:r,once:o}=n,a=Ae({},n),l=e&&s||!e&&r!=="post";let c;if(xs){if(r==="sync"){const _=Mp();c=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=ct,_.resume=ct,_.pause=ct,_}}const u=we;a.call=(_,E,A)=>ft(_,u,E,A);let d=!1;r==="post"?a.scheduler=_=>{Ve(_,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(_,E)=>{E?_():Qo(_)}),a.augmentJob=_=>{e&&(_.flags|=4),d&&(_.flags|=2,u&&(_.id=u.uid,_.i=u))};const f=Gf(t,e,a);return xs&&(c?c.push(f):l&&f()),f}function Lp(t,e,n){const s=this.proxy,i=he(t)?t.includes(".")?Du(s,t):()=>s[t]:t.bind(s,s);let r;V(e)?r=e:(r=e.handler,n=e);const o=Ys(this),a=Ou(i,r.bind(s),n);return o(),a}function Du(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Fp=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ke(e)}Modifiers`]||t[`${Qt(e)}Modifiers`];function Up(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ee;let i=n;const r=e.startsWith("update:"),o=r&&Fp(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>he(u)?u.trim():u)),o.number&&(i=n.map(Ri)));let a,l=s[a=Or(e)]||s[a=Or(Ke(e))];!l&&r&&(l=s[a=Or(Qt(e))]),l&&ft(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ft(c,t,6,i)}}function xu(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!V(t)){const l=c=>{const u=xu(c,e,!0);u&&(a=!0,Ae(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ae(t)&&s.set(t,null),null):(L(r)?r.forEach(l=>o[l]=null):Ae(o,r),ae(t)&&s.set(t,o),o)}function fr(t,e){return!t||!ir(e)?!1:(e=e.slice(2).replace(/Once$/,""),Y(t,e[0].toLowerCase()+e.slice(1))||Y(t,Qt(e))||Y(t,e))}function cl(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:_,ctx:E,inheritAttrs:A}=t,H=Pi(t);let B,z;try{if(n.shapeFlag&4){const O=i||s,ue=O;B=lt(c.call(ue,O,u,d,_,f,E)),z=a}else{const O=e;B=lt(O.length>1?O(d,{attrs:a,slots:o,emit:l}):O(d,null)),z=e.props?a:Vp(a)}}catch(O){Cs.length=0,dr(O,t,1),B=Qe(_n)}let $=B;if(z&&A!==!1){const O=Object.keys(z),{shapeFlag:ue}=$;O.length&&ue&7&&(r&&O.some(Ho)&&(z=Wp(z,r)),$=Kn($,z,!1,!0))}return n.dirs&&($=Kn($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&Xo($,n.transition),B=$,Pi(H),B}const Vp=t=>{let e;for(const n in t)(n==="class"||n==="style"||ir(n))&&((e||(e={}))[n]=t[n]);return e},Wp=(t,e)=>{const n={};for(const s in t)(!Ho(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Hp(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?ul(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==s[f]&&!fr(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?ul(s,o,c):!0:!!o;return!1}function ul(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!fr(n,r))return!0}return!1}function Bp({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Mu=t=>t.__isSuspense;function jp(t,e){e&&e.pendingBranch?L(t)?e.effects.push(...t):e.effects.push(t):Yf(t)}const Q=Symbol.for("v-fgt"),pr=Symbol.for("v-txt"),_n=Symbol.for("v-cmt"),Wr=Symbol.for("v-stc"),Cs=[];let Be=null;function k(t=!1){Cs.push(Be=t?null:[])}function qp(){Cs.pop(),Be=Cs[Cs.length-1]||null}let Ds=1;function dl(t,e=!1){Ds+=t,t<0&&Be&&e&&(Be.hasOnce=!0)}function Lu(t){return t.dynamicChildren=Ds>0?Be||Dn:null,qp(),Ds>0&&Be&&Be.push(t),t}function P(t,e,n,s,i,r){return Lu(g(t,e,n,s,i,r,!0))}function Kp(t,e,n,s,i){return Lu(Qe(t,e,n,s,i,!0))}function Fu(t){return t?t.__v_isVNode===!0:!1}function cs(t,e){return t.type===e.type&&t.key===e.key}const Uu=({key:t})=>t??null,Ii=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?he(t)||Re(t)||V(t)?{i:He,r:t,k:e,f:!!n}:t:null);function g(t,e=null,n=null,s=0,i=null,r=t===Q?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Uu(e),ref:e&&Ii(e),scopeId:fu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:He};return a?(ea(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=he(n)?8:16),Ds>0&&!o&&Be&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Be.push(l),l}const Qe=Gp;function Gp(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===fp)&&(t=_n),Fu(t)){const a=Kn(t,e,!0);return n&&ea(a,n),Ds>0&&!r&&Be&&(a.shapeFlag&6?Be[Be.indexOf(t)]=a:Be.push(a)),a.patchFlag=-2,a}if(sg(t)&&(t=t.__vccOpts),e){e=zp(e);let{class:a,style:l}=e;a&&!he(a)&&(e.class=Ut(a)),ae(l)&&(Jo(l)&&!L(l)&&(l=Ae({},l)),e.style=at(l))}const o=he(t)?1:Mu(t)?128:Xf(t)?64:ae(t)?4:V(t)?2:0;return g(t,e,n,s,i,o,r,!0)}function zp(t){return t?Jo(t)||Cu(t)?Ae({},t):t:null}function Kn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?$p(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Uu(c),ref:e&&e.ref?n&&r?L(r)?r.concat(Ii(e)):[r,Ii(e)]:Ii(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Q?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Kn(t.ssContent),ssFallback:t.ssFallback&&Kn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&Xo(u,l.clone(u)),u}function xt(t=" ",e=0){return Qe(pr,null,t,e)}function us(t="",e=!1){return e?(k(),Kp(_n,null,t)):Qe(_n,null,t)}function lt(t){return t==null||typeof t=="boolean"?Qe(_n):L(t)?Qe(Q,null,t.slice()):Fu(t)?Lt(t):Qe(pr,null,String(t))}function Lt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Kn(t)}function ea(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(L(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),ea(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Cu(e)?e._ctx=He:i===3&&He&&(He.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:He},n=32):(e=String(e),s&64?(n=16,e=[xt(e)]):n=8);t.children=e,t.shapeFlag|=n}function $p(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Ut([e.class,s.class]));else if(i==="style")e.style=at([e.style,s.style]);else if(ir(i)){const r=e[i],o=s[i];o&&r!==o&&!(L(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function rt(t,e,n,s=null){ft(t,e,7,[n,s])}const Yp=Iu();let Jp=0;function Qp(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Yp,r={uid:Jp++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new vf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Tu(s,i),emitsOptions:xu(s,i),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:s.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Up.bind(null,r),t.ce&&t.ce(r),r}let we=null,Di,mo;{const t=lr(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Di=e("__VUE_INSTANCE_SETTERS__",n=>we=n),mo=e("__VUE_SSR_SETTERS__",n=>xs=n)}const Ys=t=>{const e=we;return Di(t),t.scope.on(),()=>{t.scope.off(),Di(e)}},hl=()=>{we&&we.scope.off(),Di(null)};function Vu(t){return t.vnode.shapeFlag&4}let xs=!1;function Xp(t,e=!1,n=!1){e&&mo(e);const{props:s,children:i}=t.vnode,r=Vu(t);bp(t,s,r,e),Ap(t,i,n);const o=r?Zp(t,e):void 0;return e&&mo(!1),o}function Zp(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,gp);const{setup:s}=n;if(s){Xt();const i=t.setupContext=s.length>1?tg(t):null,r=Ys(t),o=$s(s,t,0,[t.props,i]),a=Uc(o);if(Zt(),r(),(a||t.sp)&&!ws(t)&&pu(t),a){if(o.then(hl,hl),e)return o.then(l=>{fl(t,l)}).catch(l=>{dr(l,t,0)});t.asyncDep=o}else fl(t,o)}else Wu(t)}function fl(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ae(e)&&(t.setupState=au(e)),Wu(t)}function Wu(t,e,n){const s=t.type;t.render||(t.render=s.render||ct);{const i=Ys(t);Xt();try{_p(t)}finally{Zt(),i()}}}const eg={get(t,e){return ve(t,"get",""),t[e]}};function tg(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,eg),slots:t.slots,emit:t.emit,expose:e}}function gr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(au(Wf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Es)return Es[n](t)},has(e,n){return n in e||n in Es}})):t.proxy}function ng(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function sg(t){return V(t)&&"__vccOpts"in t}const ig=(t,e)=>qf(t,e,xs),rg="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yo;const pl=typeof window<"u"&&window.trustedTypes;if(pl)try{yo=pl.createPolicy("vue",{createHTML:t=>t})}catch{}const Hu=yo?t=>yo.createHTML(t):t=>t,og="http://www.w3.org/2000/svg",ag="http://www.w3.org/1998/Math/MathML",mt=typeof document<"u"?document:null,gl=mt&&mt.createElement("template"),lg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?mt.createElementNS(og,t):e==="mathml"?mt.createElementNS(ag,t):n?mt.createElement(t,{is:n}):mt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>mt.createTextNode(t),createComment:t=>mt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>mt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{gl.innerHTML=Hu(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=gl.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},cg=Symbol("_vtc");function ug(t,e,n){const s=t[cg];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const _l=Symbol("_vod"),dg=Symbol("_vsh"),hg=Symbol(""),fg=/(^|;)\s*display\s*:/;function pg(t,e,n){const s=t.style,i=he(n);let r=!1;if(n&&!i){if(e)if(he(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&wi(s,a,"")}else for(const o in e)n[o]==null&&wi(s,o,"");for(const o in n)o==="display"&&(r=!0),wi(s,o,n[o])}else if(i){if(e!==n){const o=s[hg];o&&(n+=";"+o),s.cssText=n,r=fg.test(n)}}else e&&t.removeAttribute("style");_l in t&&(t[_l]=r?s.display:"",t[dg]&&(s.display="none"))}const ml=/\s*!important$/;function wi(t,e,n){if(L(n))n.forEach(s=>wi(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=gg(t,e);ml.test(n)?t.setProperty(Qt(s),n.replace(ml,""),"important"):t[s]=n}}const yl=["Webkit","Moz","ms"],Hr={};function gg(t,e){const n=Hr[e];if(n)return n;let s=Ke(e);if(s!=="filter"&&s in t)return Hr[e]=s;s=ar(s);for(let i=0;i<yl.length;i++){const r=yl[i]+s;if(r in t)return Hr[e]=r}return e}const vl="http://www.w3.org/1999/xlink";function Il(t,e,n,s,i,r=_f(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(vl,e.slice(6,e.length)):t.setAttributeNS(vl,e,n):n==null||r&&!Bc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":ht(n)?String(n):n)}function wl(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Hu(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Bc(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function dn(t,e,n,s){t.addEventListener(e,n,s)}function _g(t,e,n,s){t.removeEventListener(e,n,s)}const El=Symbol("_vei");function mg(t,e,n,s,i=null){const r=t[El]||(t[El]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=yg(e);if(s){const c=r[e]=wg(s,i);dn(t,a,c,l)}else o&&(_g(t,a,o,l),r[e]=void 0)}}const Cl=/(?:Once|Passive|Capture)$/;function yg(t){let e;if(Cl.test(t)){e={};let s;for(;s=t.match(Cl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Qt(t.slice(2)),e]}let Br=0;const vg=Promise.resolve(),Ig=()=>Br||(vg.then(()=>Br=0),Br=Date.now());function wg(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ft(Eg(s,n.value),e,5,[s])};return n.value=t,n.attached=Ig(),n}function Eg(t,e){if(L(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const bl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Cg=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?ug(t,s,o):e==="style"?pg(t,n,s):ir(e)?Ho(e)||mg(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bg(t,e,s,o))?(wl(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Il(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!he(s))?wl(t,Ke(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Il(t,e,s,o))};function bg(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&bl(e)&&V(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return bl(e)&&he(n)?!1:e in t}const xi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return L(e)?n=>yi(e,n):e};function Tg(t){t.target.composing=!0}function Tl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Un=Symbol("_assign"),ye={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Un]=xi(i);const r=s||i.props&&i.props.type==="number";dn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Ri(a)),t[Un](a)}),n&&dn(t,"change",()=>{t.value=t.value.trim()}),e||(dn(t,"compositionstart",Tg),dn(t,"compositionend",Tl),dn(t,"change",Tl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[Un]=xi(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?Ri(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===l)||(t.value=l))}},Rn={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=rr(e);dn(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ri(Mi(o)):Mi(o));t[Un](t.multiple?i?new Set(r):r:r[0]),t._assigning=!0,cu(()=>{t._assigning=!1})}),t[Un]=xi(s)},mounted(t,{value:e}){Sl(t,e)},beforeUpdate(t,e,n){t[Un]=xi(n)},updated(t,{value:e}){t._assigning||Sl(t,e)}};function Sl(t,e){const n=t.multiple,s=L(e);if(!(n&&!s&&!rr(e))){for(let i=0,r=t.options.length;i<r;i++){const o=t.options[i],a=Mi(o);if(n)if(s){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=yf(e,a)>-1}else o.selected=e.has(a);else if(cr(Mi(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Mi(t){return"_value"in t?t._value:t.value}const Sg=["ctrl","shift","alt","meta"],Rg={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Sg.some(n=>t[`${n}Key`]&&!e.includes(n))},Ft=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=Rg[e[o]];if(a&&a(i,e))return}return t(i,...r)})},Ag={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},jr=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=i=>{if(!("key"in i))return;const r=Qt(i.key);if(e.some(o=>o===r||Ag[o]===r))return t(i)})},kg=Ae({patchProp:Cg},lg);let Rl;function Pg(){return Rl||(Rl=Pp(kg))}const Ng=(...t)=>{const e=Pg().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Dg(s);if(!i)return;const r=e._component;!V(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Og(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Og(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Dg(t){return he(t)?document.querySelector(t):t}const xg=()=>{};var Al={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=function(t,e){if(!t)throw Qn(e)},Qn=function(t){return new Error("Firebase Database ("+Bu.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Mg=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ta={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(f=64)),s.push(n[u],n[d],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ju(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Mg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new Lg;const f=r<<2|a>>4;if(s.push(f),c!==64){const _=a<<4&240|c>>2;if(s.push(_),d!==64){const E=c<<6&192|d;s.push(E)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Lg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qu=function(t){const e=ju(t);return ta.encodeByteArray(e,!0)},Li=function(t){return qu(t).replace(/\./g,"")},Fi=function(t){try{return ta.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(t){return Ku(void 0,t)}function Ku(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Ug(n)||(t[n]=Ku(t[n],e[n]));return t}function Ug(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=()=>Vg().__FIREBASE_DEFAULTS__,Hg=()=>{if(typeof process>"u"||typeof Al>"u")return;const t=Al.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Bg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Fi(t[1]);return e&&JSON.parse(e)},na=()=>{try{return xg()||Wg()||Hg()||Bg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Gu=t=>{var e,n;return(n=(e=na())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},jg=t=>{const e=Gu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},zu=()=>{var t;return(t=na())===null||t===void 0?void 0:t.config},$u=t=>{var e;return(e=na())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Li(JSON.stringify(n)),Li(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function Kg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Gg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Yu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zg(){const t=ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $g(){return Bu.NODE_ADMIN===!0}function Yg(){try{return typeof indexedDB=="object"}catch{return!1}}function Jg(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg="FirebaseError";class en extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Qg,Object.setPrototypeOf(this,en.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Js.prototype.create)}}class Js{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Xg(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new en(i,a,s)}}function Xg(t,e){return t.replace(Zg,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Zg=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(t){return JSON.parse(t)}function fe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Ms(Fi(r[0])||""),n=Ms(Fi(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},e_=function(t){const e=Ju(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},t_=function(t){const e=Ju(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Gn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function vo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ui(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function mn(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(kl(r)&&kl(o)){if(!mn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function kl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function _s(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function ms(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function s_(t,e){const n=new i_(t,e);return n.subscribe.bind(n)}class i_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");r_(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=qr),i.error===void 0&&(i.error=qr),i.complete===void 0&&(i.complete=qr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function r_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qr(){}function ia(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,C(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},mr=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t){return t&&t._delegate?t._delegate:t}class yn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new _r;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(c_(e))try{this.getOrInitializeService({instanceIdentifier:cn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=cn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cn){return this.instances.has(e)}getOptions(e=cn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:l_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=cn){return this.component?this.component.multipleInstances?e:cn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function l_(t){return t===cn?void 0:t}function c_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new a_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const d_={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},h_=Z.INFO,f_={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},p_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=f_[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ra{constructor(e){this.name=e,this._logLevel=h_,this._logHandler=p_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?d_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const g_=(t,e)=>e.some(n=>t instanceof n);let Pl,Nl;function __(){return Pl||(Pl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function m_(){return Nl||(Nl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qu=new WeakMap,Io=new WeakMap,Xu=new WeakMap,Kr=new WeakMap,oa=new WeakMap;function y_(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(jt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Qu.set(n,t)}).catch(()=>{}),oa.set(e,t),e}function v_(t){if(Io.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Io.set(t,e)}let wo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Io.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function I_(t){wo=t(wo)}function w_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Gr(this),e,...n);return Xu.set(s,e.sort?e.sort():[e]),jt(s)}:m_().includes(t)?function(...e){return t.apply(Gr(this),e),jt(Qu.get(this))}:function(...e){return jt(t.apply(Gr(this),e))}}function E_(t){return typeof t=="function"?w_(t):(t instanceof IDBTransaction&&v_(t),g_(t,__())?new Proxy(t,wo):t)}function jt(t){if(t instanceof IDBRequest)return y_(t);if(Kr.has(t))return Kr.get(t);const e=E_(t);return e!==t&&(Kr.set(t,e),oa.set(e,t)),e}const Gr=t=>oa.get(t);function C_(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=jt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(jt(o.result),l.oldVersion,l.newVersion,jt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const b_=["get","getKey","getAll","getAllKeys","count"],T_=["put","add","delete","clear"],zr=new Map;function Ol(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zr.get(e))return zr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=T_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||b_.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return zr.set(e,r),r}I_(t=>({...t,get:(e,n,s)=>Ol(e,n)||t.get(e,n,s),has:(e,n)=>!!Ol(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(R_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function R_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Eo="@firebase/app",Dl="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=new ra("@firebase/app"),A_="@firebase/app-compat",k_="@firebase/analytics-compat",P_="@firebase/analytics",N_="@firebase/app-check-compat",O_="@firebase/app-check",D_="@firebase/auth",x_="@firebase/auth-compat",M_="@firebase/database",L_="@firebase/data-connect",F_="@firebase/database-compat",U_="@firebase/functions",V_="@firebase/functions-compat",W_="@firebase/installations",H_="@firebase/installations-compat",B_="@firebase/messaging",j_="@firebase/messaging-compat",q_="@firebase/performance",K_="@firebase/performance-compat",G_="@firebase/remote-config",z_="@firebase/remote-config-compat",$_="@firebase/storage",Y_="@firebase/storage-compat",J_="@firebase/firestore",Q_="@firebase/vertexai",X_="@firebase/firestore-compat",Z_="firebase",em="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co="[DEFAULT]",tm={[Eo]:"fire-core",[A_]:"fire-core-compat",[P_]:"fire-analytics",[k_]:"fire-analytics-compat",[O_]:"fire-app-check",[N_]:"fire-app-check-compat",[D_]:"fire-auth",[x_]:"fire-auth-compat",[M_]:"fire-rtdb",[L_]:"fire-data-connect",[F_]:"fire-rtdb-compat",[U_]:"fire-fn",[V_]:"fire-fn-compat",[W_]:"fire-iid",[H_]:"fire-iid-compat",[B_]:"fire-fcm",[j_]:"fire-fcm-compat",[q_]:"fire-perf",[K_]:"fire-perf-compat",[G_]:"fire-rc",[z_]:"fire-rc-compat",[$_]:"fire-gcs",[Y_]:"fire-gcs-compat",[J_]:"fire-fst",[X_]:"fire-fst-compat",[Q_]:"fire-vertex","fire-js":"fire-js",[Z_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=new Map,nm=new Map,bo=new Map;function xl(t,e){try{t.container.addComponent(e)}catch(n){St.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zn(t){const e=t.name;if(bo.has(e))return St.debug(`There were multiple attempts to register component ${e}.`),!1;bo.set(e,t);for(const n of Vi.values())xl(n,t);for(const n of nm.values())xl(n,t);return!0}function aa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function qe(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qt=new Js("app","Firebase",sm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=em;function Zu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Co,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw qt.create("bad-app-name",{appName:String(i)});if(n||(n=zu()),!n)throw qt.create("no-options");const r=Vi.get(i);if(r){if(mn(n,r.options)&&mn(s,r.config))return r;throw qt.create("duplicate-app",{appName:i})}const o=new u_(i);for(const l of bo.values())o.addComponent(l);const a=new im(n,s,o);return Vi.set(i,a),a}function ed(t=Co){const e=Vi.get(t);if(!e&&t===Co&&zu())return Zu();if(!e)throw qt.create("no-app",{appName:t});return e}function Kt(t,e,n){var s;let i=(s=tm[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),St.warn(a.join(" "));return}zn(new yn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm="firebase-heartbeat-database",om=1,Ls="firebase-heartbeat-store";let $r=null;function td(){return $r||($r=C_(rm,om,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ls)}catch(n){console.warn(n)}}}}).catch(t=>{throw qt.create("idb-open",{originalErrorMessage:t.message})})),$r}async function am(t){try{const n=(await td()).transaction(Ls),s=await n.objectStore(Ls).get(nd(t));return await n.done,s}catch(e){if(e instanceof en)St.warn(e.message);else{const n=qt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});St.warn(n.message)}}}async function Ml(t,e){try{const s=(await td()).transaction(Ls,"readwrite");await s.objectStore(Ls).put(e,nd(t)),await s.done}catch(n){if(n instanceof en)St.warn(n.message);else{const s=qt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});St.warn(s.message)}}}function nd(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm=1024,cm=30;class um{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hm(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ll();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>cm){const o=fm(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){St.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ll(),{heartbeatsToSend:s,unsentEntries:i}=dm(this._heartbeatsCache.heartbeats),r=Li(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return St.warn(n),""}}}function Ll(){return new Date().toISOString().substring(0,10)}function dm(t,e=lm){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Fl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Fl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class hm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yg()?Jg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await am(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ml(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ml(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Fl(t){return Li(JSON.stringify({version:2,heartbeats:t})).length}function fm(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(t){zn(new yn("platform-logger",e=>new S_(e),"PRIVATE")),zn(new yn("heartbeat",e=>new um(e),"PRIVATE")),Kt(Eo,Dl,t),Kt(Eo,Dl,"esm2017"),Kt("fire-js","")}pm("");var gm="firebase",_m="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kt(gm,_m,"app");function la(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function sd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mm=sd,id=new Js("auth","Firebase",sd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=new ra("@firebase/auth");function ym(t,...e){Wi.logLevel<=Z.WARN&&Wi.warn(`Auth (${Zn}): ${t}`,...e)}function Ei(t,...e){Wi.logLevel<=Z.ERROR&&Wi.error(`Auth (${Zn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t,...e){throw ca(t,...e)}function ut(t,...e){return ca(t,...e)}function rd(t,e,n){const s=Object.assign(Object.assign({},mm()),{[e]:n});return new Js("auth","Firebase",s).create(e,{appName:t.name})}function bt(t){return rd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ca(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return id.create(t,...e)}function x(t,e,...n){if(!t)throw ca(e,...n)}function It(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ei(e),new Error(e)}function Rt(t,e){t||It(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function vm(){return Ul()==="http:"||Ul()==="https:"}function Ul(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vm()||Gg()||"connection"in navigator)?navigator.onLine:!0}function wm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rt(n>e,"Short delay should be less than long delay!"),this.isMobile=sa()||Yu()}get(){return Im()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(t,e){Rt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;It("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;It("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;It("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm=new Qs(3e4,6e4);function tn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function nn(t,e,n,s,i={}){return ad(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Xn(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},r);return Kg()||(c.referrerPolicy="no-referrer"),od.fetch()(ld(t,t.config.apiHost,n,a),c)})}async function ad(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Em),e);try{const i=new Tm(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw pi(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw pi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw pi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw pi(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw rd(t,u,c);Ze(t,u)}}catch(i){if(i instanceof en)throw i;Ze(t,"network-request-failed",{message:String(i)})}}async function Xs(t,e,n,s,i={}){const r=await nn(t,e,n,s,i);return"mfaPendingCredential"in r&&Ze(t,"multi-factor-auth-required",{_serverResponse:r}),r}function ld(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?ua(t.config,i):`${t.config.apiScheme}://${i}`}function bm(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Tm{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(ut(this.auth,"network-request-failed")),Cm.get())})}}function pi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=ut(t,e,s);return i.customData._tokenResponse=n,i}function Vl(t){return t!==void 0&&t.enterprise!==void 0}class Sm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return bm(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Rm(t,e){return nn(t,"GET","/v2/recaptchaConfig",tn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Am(t,e){return nn(t,"POST","/v1/accounts:delete",e)}async function cd(t,e){return nn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function km(t,e=!1){const n=Pe(t),s=await n.getIdToken(e),i=da(s);x(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:bs(Yr(i.auth_time)),issuedAtTime:bs(Yr(i.iat)),expirationTime:bs(Yr(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Yr(t){return Number(t)*1e3}function da(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ei("JWT malformed, contained fewer than 3 sections"),null;try{const i=Fi(n);return i?JSON.parse(i):(Ei("Failed to decode base64 JWT payload"),null)}catch(i){return Ei("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Wl(t){const e=da(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fs(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof en&&Pm(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Pm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bs(this.lastLoginAt),this.creationTime=bs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hi(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Fs(t,cd(n,{idToken:s}));x(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?ud(r.providerUserInfo):[],a=Dm(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new So(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Om(t){const e=Pe(t);await Hi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Dm(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function ud(t){return t.map(e=>{var{providerId:n}=e,s=la(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xm(t,e){const n=await ad(t,{},async()=>{const s=Xn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=ld(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",od.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Mm(t,e){return nn(t,"POST","/v2/accounts:revokeToken",tn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){x(e.length!==0,"internal-error");const n=Wl(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await xm(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Vn;return s&&(x(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(x(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(x(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vn,this.toJSON())}_performRefresh(){return It("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class wt{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=la(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Nm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new So(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Fs(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return km(this,e)}reload(){return Om(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new wt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Hi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qe(this.auth.app))return Promise.reject(bt(this.auth));const e=await this.getIdToken();return await Fs(this,Am(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,H=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,B=(c=n.createdAt)!==null&&c!==void 0?c:void 0,z=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:$,emailVerified:O,isAnonymous:ue,providerData:je,stsTokenManager:Le}=n;x($&&Le,e,"internal-error");const et=Vn.fromJSON(this.name,Le);x(typeof $=="string",e,"internal-error"),Dt(d,e.name),Dt(f,e.name),x(typeof O=="boolean",e,"internal-error"),x(typeof ue=="boolean",e,"internal-error"),Dt(_,e.name),Dt(E,e.name),Dt(A,e.name),Dt(H,e.name),Dt(B,e.name),Dt(z,e.name);const Ot=new wt({uid:$,auth:e,email:f,emailVerified:O,displayName:d,isAnonymous:ue,photoURL:E,phoneNumber:_,tenantId:A,stsTokenManager:et,createdAt:B,lastLoginAt:z});return je&&Array.isArray(je)&&(Ot.providerData=je.map(gt=>Object.assign({},gt))),H&&(Ot._redirectEventId=H),Ot}static async _fromIdTokenResponse(e,n,s=!1){const i=new Vn;i.updateFromServerResponse(n);const r=new wt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Hi(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];x(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?ud(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new Vn;a.updateFromIdToken(s);const l=new wt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new So(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=new Map;function Et(t){Rt(t instanceof Function,"Expected a class definition");let e=Hl.get(t);return e?(Rt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Hl.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}dd.type="NONE";const Bl=dd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(t,e,n){return`firebase:${t}:${e}:${n}`}class Wn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Ci(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ci("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Wn(Et(Bl),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Et(Bl);const o=Ci(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=wt._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Wn(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Wn(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(md(e))return"Blackberry";if(yd(e))return"Webos";if(fd(e))return"Safari";if((e.includes("chrome/")||pd(e))&&!e.includes("edge/"))return"Chrome";if(_d(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function hd(t=ke()){return/firefox\//i.test(t)}function fd(t=ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pd(t=ke()){return/crios\//i.test(t)}function gd(t=ke()){return/iemobile/i.test(t)}function _d(t=ke()){return/android/i.test(t)}function md(t=ke()){return/blackberry/i.test(t)}function yd(t=ke()){return/webos/i.test(t)}function ha(t=ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Lm(t=ke()){var e;return ha(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Fm(){return zg()&&document.documentMode===10}function vd(t=ke()){return ha(t)||_d(t)||yd(t)||md(t)||/windows phone/i.test(t)||gd(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(t,e=[]){let n;switch(t){case"Browser":n=jl(ke());break;case"Worker":n=`${jl(ke())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zn}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vm(t,e={}){return nn(t,"GET","/v2/passwordPolicy",tn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=6;class Hm{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Wm,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ql(this),this.idTokenSubscription=new ql(this),this.beforeStateQueue=new Um(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=id,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Et(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Wn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await cd(this,{idToken:e}),s=await wt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(qe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Hi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qe(this.app))return Promise.reject(bt(this));const n=e?Pe(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qe(this.app)?Promise.reject(bt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qe(this.app)?Promise.reject(bt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Et(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Vm(this),n=new Hm(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Js("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Mm(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Et(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await Wn.create(this,[Et(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Id(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(qe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ym(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function bn(t){return Pe(t)}class ql{constructor(e){this.auth=e,this.observer=null,this.addObserver=s_(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jm(t){yr=t}function wd(t){return yr.loadJS(t)}function qm(){return yr.recaptchaEnterpriseScript}function Km(){return yr.gapiScript}function Gm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class zm{constructor(){this.enterprise=new $m}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class $m{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Ym="recaptcha-enterprise",Ed="NO_RECAPTCHA";class Jm{constructor(e){this.type=Ym,this.auth=bn(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Rm(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Sm(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;Vl(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(Ed)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new zm().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Vl(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=qm();l.length!==0&&(l+=a),wd(l).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Kl(t,e,n,s=!1,i=!1){const r=new Jm(t);let o;if(i)o=Ed;else try{o=await r.verify(n)}catch{o=await r.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ro(t,e,n,s,i){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Kl(t,e,n,n==="getOobCode");return s(t,o)}else return s(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Kl(t,e,n,n==="getOobCode");return s(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(t,e){const n=aa(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(mn(r,e??{}))return i;Ze(i,"already-initialized")}return n.initialize({options:e})}function Xm(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Et);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Zm(t,e,n){const s=bn(t);x(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Cd(e),{host:o,port:a}=ey(e),l=a===null?"":`:${a}`,c={url:`${r}//${o}${l}/`},u=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){x(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),x(mn(c,s.config.emulator)&&mn(u,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=c,s.emulatorConfig=u,s.settings.appVerificationDisabledForTesting=!0,ty()}function Cd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ey(t){const e=Cd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Gl(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Gl(o)}}}function Gl(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ty(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return It("not implemented")}_getIdTokenResponse(e){return It("not implemented")}_linkToIdToken(e,n){return It("not implemented")}_getReauthenticationResolver(e){return It("not implemented")}}async function ny(t,e){return nn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sy(t,e){return Xs(t,"POST","/v1/accounts:signInWithPassword",tn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iy(t,e){return Xs(t,"POST","/v1/accounts:signInWithEmailLink",tn(t,e))}async function ry(t,e){return Xs(t,"POST","/v1/accounts:signInWithEmailLink",tn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us extends fa{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Us(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Us(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ro(e,n,"signInWithPassword",sy);case"emailLink":return iy(e,{email:this._email,oobCode:this._password});default:Ze(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ro(e,s,"signUpPassword",ny);case"emailLink":return ry(e,{idToken:n,email:this._email,oobCode:this._password});default:Ze(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hn(t,e){return Xs(t,"POST","/v1/accounts:signInWithIdp",tn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy="http://localhost";class vn extends fa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ze("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=la(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new vn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Hn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Hn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hn(e,n)}buildRequest(){const e={requestUri:oy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ly(t){const e=_s(ms(t)).link,n=e?_s(ms(e)).deep_link_id:null,s=_s(ms(t)).deep_link_id;return(s?_s(ms(s)).link:null)||s||n||e||t}class pa{constructor(e){var n,s,i,r,o,a;const l=_s(ms(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,d=ay((i=l.mode)!==null&&i!==void 0?i:null);x(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ly(e);try{return new pa(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this.providerId=es.PROVIDER_ID}static credential(e,n){return Us._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=pa.parseLink(n);return x(s,"argument-error"),Us._fromEmailAndCode(e,s.code,s.tenantId)}}es.PROVIDER_ID="password";es.EMAIL_PASSWORD_SIGN_IN_METHOD="password";es.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs extends bd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends Zs{constructor(){super("facebook.com")}static credential(e){return vn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vt.credential(e.oauthAccessToken)}catch{return null}}}Vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends Zs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Wt.credential(n,s)}catch{return null}}}Wt.GOOGLE_SIGN_IN_METHOD="google.com";Wt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends Zs{constructor(){super("github.com")}static credential(e){return vn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ht.credential(e.oauthAccessToken)}catch{return null}}}Ht.GITHUB_SIGN_IN_METHOD="github.com";Ht.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends Zs{constructor(){super("twitter.com")}static credential(e,n){return vn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Bt.credential(n,s)}catch{return null}}}Bt.TWITTER_SIGN_IN_METHOD="twitter.com";Bt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cy(t,e){return Xs(t,"POST","/v1/accounts:signUp",tn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await wt._fromIdTokenResponse(e,s,i),o=zl(s);return new In({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=zl(s);return new In({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function zl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends en{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Bi.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Bi(e,n,s,i)}}function Td(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Bi._fromErrorAndOperation(t,r,e,s):r})}async function uy(t,e,n=!1){const s=await Fs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return In._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dy(t,e,n=!1){const{auth:s}=t;if(qe(s.app))return Promise.reject(bt(s));const i="reauthenticate";try{const r=await Fs(t,Td(s,i,e,t),n);x(r.idToken,s,"internal-error");const o=da(r.idToken);x(o,s,"internal-error");const{sub:a}=o;return x(t.uid===a,s,"user-mismatch"),In._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ze(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sd(t,e,n=!1){if(qe(t.app))return Promise.reject(bt(t));const s="signIn",i=await Td(t,s,e),r=await In._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function hy(t,e){return Sd(bn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rd(t){const e=bn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function fy(t,e,n){if(qe(t.app))return Promise.reject(bt(t));const s=bn(t),o=await Ro(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",cy).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Rd(t),l}),a=await In._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function py(t,e,n){return qe(t.app)?Promise.reject(bt(t)):hy(Pe(t),es.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Rd(t),s})}function gy(t,e,n,s){return Pe(t).onIdTokenChanged(e,n,s)}function _y(t,e,n){return Pe(t).beforeAuthStateChanged(e,n)}function my(t,e,n,s){return Pe(t).onAuthStateChanged(e,n,s)}function yy(t){return Pe(t).signOut()}const ji="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ji,"1"),this.storage.removeItem(ji),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=1e3,Iy=10;class kd extends Ad{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=vd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Fm()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Iy):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},vy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kd.type="LOCAL";const wy=kd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd extends Ad{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Pd.type="SESSION";const Nd=Pd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new vr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await Ey(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=ga("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return window}function by(t){dt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(){return typeof dt().WorkerGlobalScope<"u"&&typeof dt().importScripts=="function"}async function Ty(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Sy(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ry(){return Od()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="firebaseLocalStorageDb",Ay=1,qi="firebaseLocalStorage",xd="fbase_key";class ei{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ir(t,e){return t.transaction([qi],e?"readwrite":"readonly").objectStore(qi)}function ky(){const t=indexedDB.deleteDatabase(Dd);return new ei(t).toPromise()}function Ao(){const t=indexedDB.open(Dd,Ay);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(qi,{keyPath:xd})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(qi)?e(s):(s.close(),await ky(),e(await Ao()))})})}async function $l(t,e,n){const s=Ir(t,!0).put({[xd]:e,value:n});return new ei(s).toPromise()}async function Py(t,e){const n=Ir(t,!1).get(e),s=await new ei(n).toPromise();return s===void 0?null:s.value}function Yl(t,e){const n=Ir(t,!0).delete(e);return new ei(n).toPromise()}const Ny=800,Oy=3;class Md{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ao(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Oy)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Od()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vr._getInstance(Ry()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ty(),!this.activeServiceWorker)return;this.sender=new Cy(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Sy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ao();return await $l(e,ji,"1"),await Yl(e,ji),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>$l(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Py(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Ir(i,!1).getAll();return new ei(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ny)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Md.type="LOCAL";const Dy=Md;new Qs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(t,e){return e?Et(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a extends fa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function My(t){return Sd(t.auth,new _a(t),t.bypassAuthState)}function Ly(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),dy(n,new _a(t),t.bypassAuthState)}async function Fy(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),uy(n,new _a(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return My;case"linkViaPopup":case"linkViaRedirect":return Fy;case"reauthViaPopup":case"reauthViaRedirect":return Ly;default:Ze(this.auth,"internal-error")}}resolve(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy=new Qs(2e3,1e4);class Nn extends Ld{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Nn.currentPopupAction&&Nn.currentPopupAction.cancel(),Nn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){Rt(this.filter.length===1,"Popup operations only handle one event");const e=ga();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ut(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Uy.get())};e()}}Nn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy="pendingRedirect",bi=new Map;class Wy extends Ld{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=bi.get(this.auth._key());if(!e){try{const s=await Hy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}bi.set(this.auth._key(),e)}return this.bypassAuthState||bi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Hy(t,e){const n=qy(e),s=jy(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function By(t,e){bi.set(t._key(),e)}function jy(t){return Et(t._redirectPersistence)}function qy(t){return Ci(Vy,t.config.apiKey,t.name)}async function Ky(t,e,n=!1){if(qe(t.app))return Promise.reject(bt(t));const s=bn(t),i=xy(s,e),o=await new Wy(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy=10*60*1e3;class zy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$y(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Fd(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(ut(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Gy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jl(e))}saveEventToCache(e){this.cachedEventUids.add(Jl(e)),this.lastProcessedEventTime=Date.now()}}function Jl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Fd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $y(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fd(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yy(t,e={}){return nn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Qy=/^https?/;async function Xy(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Yy(t);for(const n of e)try{if(Zy(n))return}catch{}Ze(t,"unauthorized-domain")}function Zy(t){const e=To(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Qy.test(n))return!1;if(Jy.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=new Qs(3e4,6e4);function Ql(){const t=dt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tv(t){return new Promise((e,n)=>{var s,i,r;function o(){Ql(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ql(),n(ut(t,"network-request-failed"))},timeout:ev.get()})}if(!((i=(s=dt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=dt().gapi)===null||r===void 0)&&r.load)o();else{const a=Gm("iframefcb");return dt()[a]=()=>{gapi.load?o():n(ut(t,"network-request-failed"))},wd(`${Km()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ti=null,e})}let Ti=null;function nv(t){return Ti=Ti||tv(t),Ti}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv=new Qs(5e3,15e3),iv="__/auth/iframe",rv="emulator/auth/iframe",ov={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},av=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lv(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ua(e,rv):`https://${t.config.authDomain}/${iv}`,s={apiKey:e.apiKey,appName:t.name,v:Zn},i=av.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Xn(s).slice(1)}`}async function cv(t){const e=await nv(t),n=dt().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:lv(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ov,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=ut(t,"network-request-failed"),a=dt().setTimeout(()=>{r(o)},sv.get());function l(){dt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dv=500,hv=600,fv="_blank",pv="http://localhost";class Xl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gv(t,e,n,s=dv,i=hv){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},uv),{width:s.toString(),height:i.toString(),top:r,left:o}),c=ke().toLowerCase();n&&(a=pd(c)?fv:n),hd(c)&&(e=e||pv,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[_,E])=>`${f}${_}=${E},`,"");if(Lm(c)&&a!=="_self")return _v(e||"",a),new Xl(null);const d=window.open(e||"",a,u);x(d,t,"popup-blocked");try{d.focus()}catch{}return new Xl(d)}function _v(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv="__/auth/handler",yv="emulator/auth/handler",vv=encodeURIComponent("fac");async function Zl(t,e,n,s,i,r){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Zn,eventId:i};if(e instanceof bd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof Zs){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${vv}=${encodeURIComponent(l)}`:"";return`${Iv(t)}?${Xn(a).slice(1)}${c}`}function Iv({config:t}){return t.emulator?ua(t,yv):`https://${t.authDomain}/${mv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr="webStorageSupport";class wv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nd,this._completeRedirectFn=Ky,this._overrideRedirectResult=By}async _openPopup(e,n,s,i){var r;Rt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Zl(e,n,s,To(),i);return gv(e,o,ga())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Zl(e,n,s,To(),i);return by(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Rt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await cv(e),s=new zy(e);return n.register("authEvent",i=>(x(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jr,{type:Jr},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Jr];o!==void 0&&n(!!o),Ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Xy(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return vd()||fd()||ha()}}const Ev=wv;var ec="@firebase/auth",tc="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Tv(t){zn(new yn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Id(t)},c=new Bm(s,i,r,l);return Xm(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),zn(new yn("auth-internal",e=>{const n=bn(e.getProvider("auth").getImmediate());return(s=>new Cv(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kt(ec,tc,bv(t)),Kt(ec,tc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv=5*60,Rv=$u("authIdTokenMaxAge")||Sv;let nc=null;const Av=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Rv)return;const i=n==null?void 0:n.token;nc!==i&&(nc=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function kv(t=ed()){const e=aa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Qm(t,{popupRedirectResolver:Ev,persistence:[Dy,wy,Nd]}),s=$u("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=Av(r.toString());_y(n,o,()=>o(n.currentUser)),gy(n,a=>o(a))}}const i=Gu("auth");return i&&Zm(n,`http://${i}`),n}function Pv(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}jm({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=ut("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",Pv().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Tv("Browser");var sc={};const ic="@firebase/database",rc="1.0.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ud="";function Nv(t){Ud=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),fe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ms(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Pt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ov(e)}}catch{}return new Dv},hn=Vd("localStorage"),xv=Vd("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new ra("@firebase/database"),Mv=function(){let t=1;return function(){return t++}}(),Wd=function(t){const e=o_(t),n=new n_;n.update(e);const s=n.digest();return ta.encodeByteArray(s)},ti=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ti.apply(null,s):typeof s=="object"?e+=fe(s):e+=s,e+=" "}return e};let Ts=null,oc=!0;const Lv=function(t,e){C(!0,"Can't turn on custom loggers persistently."),Bn.logLevel=Z.VERBOSE,Ts=Bn.log.bind(Bn)},Ie=function(...t){if(oc===!0&&(oc=!1,Ts===null&&xv.get("logging_enabled")===!0&&Lv()),Ts){const e=ti.apply(null,t);Ts(e)}},ni=function(t){return function(...e){Ie(t,...e)}},ko=function(...t){const e="FIREBASE INTERNAL ERROR: "+ti(...t);Bn.error(e)},At=function(...t){const e=`FIREBASE FATAL ERROR: ${ti(...t)}`;throw Bn.error(e),new Error(e)},xe=function(...t){const e="FIREBASE WARNING: "+ti(...t);Bn.warn(e)},Fv=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&xe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Hd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Uv=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},$n="[MIN_NAME]",wn="[MAX_NAME]",ts=function(t,e){if(t===e)return 0;if(t===$n||e===wn)return-1;if(e===$n||t===wn)return 1;{const n=ac(t),s=ac(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Vv=function(t,e){return t===e?0:t<e?-1:1},ds=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+fe(e))},ma=function(t){if(typeof t!="object"||t===null)return fe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=fe(e[s]),n+=":",n+=ma(t[e[s]]);return n+="}",n},Bd=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Me(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const jd=function(t){C(!Hd(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},Wv=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Hv=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Bv(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const jv=new RegExp("^-?(0*)\\d{1,10}$"),qv=-2147483648,Kv=2147483647,ac=function(t){if(jv.test(t)){const e=Number(t);if(e>=qv&&e<=Kv)return e}return null},ns=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw xe("Exception was thrown by user callback.",n),e},Math.floor(0))}},Gv=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ss=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,qe(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){xe(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ie("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',xe(e)}}class Si{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Si.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya="5",qd="v",Kd="s",Gd="r",zd="f",$d=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Yd="ls",Jd="p",Po="ac",Qd="websocket",Xd="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=hn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&hn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Yv(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function eh(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let s;if(e===Qd)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Xd)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Yv(t)&&(n.ns=t.namespace);const i=[];return Me(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(){this.counters_={}}incrementCounter(e,n=1){Pt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Fg(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr={},Xr={};function va(t){const e=t.toString();return Qr[e]||(Qr[e]=new Jv),Qr[e]}function Qv(t,e){const n=t.toString();return Xr[n]||(Xr[n]=e()),Xr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&ns(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="start",Zv="close",eI="pLPCommand",tI="pRTLPCB",th="id",nh="pw",sh="ser",nI="cb",sI="seg",iI="ts",rI="d",oI="dframe",ih=1870,rh=30,aI=ih-rh,lI=25e3,cI=3e4;class On{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ni(e),this.stats_=va(n),this.urlFn=l=>(this.appCheckToken&&(l[Po]=this.appCheckToken),eh(n,Xd,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Xv(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(cI)),Uv(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ia((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===lc)this.id=a,this.password=l;else if(o===Zv)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[lc]="t",s[sh]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[nI]=this.scriptTagHolder.uniqueCallbackIdentifier),s[qd]=ya,this.transportSessionId&&(s[Kd]=this.transportSessionId),this.lastSessionId&&(s[Yd]=this.lastSessionId),this.applicationId&&(s[Jd]=this.applicationId),this.appCheckToken&&(s[Po]=this.appCheckToken),typeof location<"u"&&location.hostname&&$d.test(location.hostname)&&(s[Gd]=zd);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){On.forceAllow_=!0}static forceDisallow(){On.forceDisallow_=!0}static isAvailable(){return On.forceAllow_?!0:!On.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Wv()&&!Hv()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=qu(n),i=Bd(s,aI);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[oI]="t",s[th]=e,s[nh]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=fe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ia{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Mv(),window[eI+this.uniqueCallbackIdentifier]=e,window[tI+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ia.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ie("frame writing exception"),a.stack&&Ie(a.stack),Ie(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ie("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[th]=this.myID,e[nh]=this.myPW,e[sh]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+rh+s.length<=ih;){const o=this.pendingSegs.shift();s=s+"&"+sI+i+"="+o.seg+"&"+iI+i+"="+o.ts+"&"+rI+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(lI)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ie("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI=16384,dI=45e3;let Ki=null;typeof MozWebSocket<"u"?Ki=MozWebSocket:typeof WebSocket<"u"&&(Ki=WebSocket);class Ge{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ni(this.connId),this.stats_=va(n),this.connURL=Ge.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[qd]=ya,typeof location<"u"&&location.hostname&&$d.test(location.hostname)&&(o[Gd]=zd),n&&(o[Kd]=n),s&&(o[Yd]=s),i&&(o[Po]=i),r&&(o[Jd]=r),eh(e,Qd,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,hn.set("previous_websocket_failure",!0);try{let s;$g(),this.mySock=new Ki(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ge.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ki!==null&&!Ge.forceDisallow_}static previouslyFailed(){return hn.isInMemoryStorage||hn.get("previous_websocket_failure")===!0}markConnectionHealthy(){hn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Ms(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Bd(n,uI);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(dI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ge.responsesRequiredToBeHealthy=2;Ge.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{static get ALL_TRANSPORTS(){return[On,Ge]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Ge&&Ge.isAvailable();let s=n&&!Ge.previouslyFailed();if(e.webSocketOnly&&(n||xe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ge];else{const i=this.transports_=[];for(const r of Vs.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Vs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Vs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI=6e4,fI=5e3,pI=10*1024,gI=100*1024,Zr="t",cc="d",_I="s",uc="r",mI="e",dc="o",hc="a",fc="n",pc="p",yI="h";class vI{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ni("c:"+this.id+":"),this.transportManager_=new Vs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ss(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>gI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>pI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Zr in e){const n=e[Zr];n===hc?this.upgradeIfSecondaryHealthy_():n===uc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===dc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ds("t",e),s=ds("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:pc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:hc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:fc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ds("t",e),s=ds("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ds(Zr,e);if(cc in e){const s=e[cc];if(n===yI){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===fc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===_I?this.onConnectionShutdown_(s):n===uc?this.onReset_(s):n===mI?ko("Server Error: "+s):n===dc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ko("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ya!==s&&xe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Ss(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(hI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ss(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(fI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:pc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(hn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi extends ah{static getInstance(){return new Gi}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!sa()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=32,_c=768;class te{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function G(){return new te("")}function q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function $t(t){return t.pieces_.length-t.pieceNum_}function re(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new te(t.pieces_,e)}function lh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function II(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ch(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function uh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new te(e,0)}function pe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof te)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new te(n,0)}function j(t){return t.pieceNum_>=t.pieces_.length}function Se(t,e){const n=q(t),s=q(e);if(n===null)return e;if(n===s)return Se(re(t),re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function dh(t,e){if($t(t)!==$t(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function ze(t,e){let n=t.pieceNum_,s=e.pieceNum_;if($t(t)>$t(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class wI{constructor(e,n){this.errorPrefix_=n,this.parts_=ch(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=mr(this.parts_[s]);hh(this)}}function EI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=mr(e),hh(t)}function CI(t){const e=t.parts_.pop();t.byteLength_-=mr(e),t.parts_.length>0&&(t.byteLength_-=1)}function hh(t){if(t.byteLength_>_c)throw new Error(t.errorPrefix_+"has a key path longer than "+_c+" bytes ("+t.byteLength_+").");if(t.parts_.length>gc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+gc+") or object contains a cycle "+un(t))}function un(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa extends ah{static getInstance(){return new wa}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=1e3,bI=60*5*1e3,mc=30*1e3,TI=1.3,SI=3e4,RI="server_kill",yc=3;class Tt extends oh{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Tt.nextPersistentConnectionId_++,this.log_=ni("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=hs,this.maxReconnectDelay_=bI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");wa.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Gi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(fe(r)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new _r,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Tt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Pt(e,"w")){const s=Gn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();xe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||t_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=mc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=e_(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+fe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ko("Unrecognized action received from server: "+fe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=hs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=hs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>SI&&(this.reconnectDelay_=hs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*TI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Tt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){C(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ie("getToken() completed but was canceled"):(Ie("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new vI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{xe(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(RI)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&xe(d),l())}}}interrupt(e){Ie("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ie("Resuming connection for reason: "+e),delete this.interruptReasons_[e],vo(this.interruptReasons_)&&(this.reconnectDelay_=hs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>ma(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new te(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ie("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=yc&&(this.reconnectDelay_=mc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ie("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=yc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ud.replace(/\./g,"-")]=1,sa()?e["framework.cordova"]=1:Yu()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Gi.getInstance().currentlyOnline();return vo(this.interruptReasons_)&&e}}Tt.nextPersistentConnectionId_=0;Tt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new W(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new W($n,e),i=new W($n,n);return this.compare(s,i)!==0}minPost(){return W.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gi;class fh extends wr{static get __EMPTY_NODE(){return gi}static set __EMPTY_NODE(e){gi=e}compare(e,n){return ts(e.name,n.name)}isDefinedOn(e){throw Qn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return W.MIN}maxPost(){return new W(wn,gi)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new W(e,gi)}toString(){return".key"}}const jn=new fh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class _e{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??_e.RED,this.left=i??De.EMPTY_NODE,this.right=r??De.EMPTY_NODE}copy(e,n,s,i,r){return new _e(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return De.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return De.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}_e.RED=!0;_e.BLACK=!1;class AI{copy(e,n,s,i,r){return this}insert(e,n,s){return new _e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class De{constructor(e,n=De.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new De(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,_e.BLACK,null,null))}remove(e){return new De(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,_e.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new _i(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new _i(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new _i(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new _i(this.root_,null,this.comparator_,!0,e)}}De.EMPTY_NODE=new AI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(t,e){return ts(t.name,e.name)}function Ea(t,e){return ts(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let No;function PI(t){No=t}const ph=function(t){return typeof t=="number"?"number:"+jd(t):"string:"+t},gh=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Pt(e,".sv"),"Priority must be a string or number.")}else C(t===No||t.isEmpty(),"priority of unexpected type.");C(t===No||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vc;class ge{static set __childrenNodeConstructor(e){vc=e}static get __childrenNodeConstructor(){return vc}constructor(e,n=ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),gh(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return j(e)?this:q(e)===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=q(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(C(s!==".priority"||$t(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(re(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ph(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=jd(this.value_):e+=this.value_,this.lazyHash_=Wd(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ge.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ge.VALUE_TYPE_ORDER.indexOf(n),r=ge.VALUE_TYPE_ORDER.indexOf(s);return C(i>=0,"Unknown leaf type: "+n),C(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _h,mh;function NI(t){_h=t}function OI(t){mh=t}class DI extends wr{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?ts(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return W.MIN}maxPost(){return new W(wn,new ge("[PRIORITY-POST]",mh))}makePost(e,n){const s=_h(e);return new W(n,new ge("[PRIORITY-POST]",s))}toString(){return".priority"}}const de=new DI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=Math.log(2);class MI{constructor(e){const n=r=>parseInt(Math.log(r)/xI,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const zi=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=t[l],f=n?n(d):d,new _e(f,d.node,_e.BLACK,null,null);{const _=parseInt(u/2,10)+l,E=i(l,_),A=i(_+1,c);return d=t[_],f=n?n(d):d,new _e(f,d.node,_e.BLACK,E,A)}},r=function(l){let c=null,u=null,d=t.length;const f=function(E,A){const H=d-E,B=d;d-=E;const z=i(H+1,B),$=t[H],O=n?n($):$;_(new _e(O,$.node,A,null,z))},_=function(E){c?(c.left=E,c=E):(u=E,c=E)};for(let E=0;E<l.count;++E){const A=l.nextBitIsOne(),H=Math.pow(2,l.count-(E+1));A?f(H,_e.BLACK):(f(H,_e.BLACK),f(H,_e.RED))}return u},o=new MI(t.length),a=r(o);return new De(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eo;const An={};class Ct{static get Default(){return C(An&&de,"ChildrenNode.ts has not been loaded"),eo=eo||new Ct({".priority":An},{".priority":de}),eo}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Gn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof De?n:null}hasIndex(e){return Pt(this.indexSet_,e.toString())}addIndex(e,n){C(e!==jn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(W.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=zi(s,e.getCompare()):a=An;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Ct(u,c)}addToIndexes(e,n){const s=Ui(this.indexes_,(i,r)=>{const o=Gn(this.indexSet_,r);if(C(o,"Missing index implementation for "+r),i===An)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(W.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),zi(a,o.getCompare())}else return An;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new W(e.name,a))),l.insert(e,e.node)}});return new Ct(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ui(this.indexes_,i=>{if(i===An)return i;{const r=n.get(e.name);return r?i.remove(new W(e.name,r)):i}});return new Ct(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fs;class M{static get EMPTY_NODE(){return fs||(fs=new M(new De(Ea),null,Ct.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&gh(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fs}updatePriority(e){return this.children_.isEmpty()?this:new M(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?fs:n}}getChild(e){const n=q(e);return n===null?this:this.getImmediateChild(n).getChild(re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new W(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?fs:this.priorityNode_;return new M(i,o,r)}}updateChild(e,n){const s=q(e);if(s===null)return n;{C(q(e)!==".priority"||$t(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(re(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(de,(o,a)=>{n[o]=a.val(e),s++,r&&M.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ph(this.getPriority().val())+":"),this.forEachChild(de,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Wd(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new W(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new W(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new W(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,W.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,W.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===si?-1:0}withIndex(e){if(e===jn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new M(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===jn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(de),i=n.getIterator(de);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===jn?null:this.indexMap_.get(e.toString())}}M.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class LI extends M{constructor(){super(new De(Ea),M.EMPTY_NODE,Ct.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return M.EMPTY_NODE}isEmpty(){return!1}}const si=new LI;Object.defineProperties(W,{MIN:{value:new W($n,M.EMPTY_NODE)},MAX:{value:new W(wn,si)}});fh.__EMPTY_NODE=M.EMPTY_NODE;ge.__childrenNodeConstructor=M;PI(si);OI(si);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=!0;function me(t,e=null){if(t===null)return M.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ge(n,me(e))}if(!(t instanceof Array)&&FI){const n=[];let s=!1;if(Me(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=me(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new W(o,l)))}}),n.length===0)return M.EMPTY_NODE;const r=zi(n,kI,o=>o.name,Ea);if(s){const o=zi(n,de.getCompare());return new M(r,me(e),new Ct({".priority":o},{".priority":de}))}else return new M(r,me(e),Ct.Default)}else{let n=M.EMPTY_NODE;return Me(t,(s,i)=>{if(Pt(t,s)&&s.substring(0,1)!=="."){const r=me(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(me(e))}}NI(me);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI extends wr{constructor(e){super(),this.indexPath_=e,C(!j(e)&&q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?ts(e.name,n.name):r}makePost(e,n){const s=me(e),i=M.EMPTY_NODE.updateChild(this.indexPath_,s);return new W(n,i)}maxPost(){const e=M.EMPTY_NODE.updateChild(this.indexPath_,si);return new W(wn,e)}toString(){return ch(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI extends wr{compare(e,n){const s=e.node.compareTo(n.node);return s===0?ts(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return W.MIN}maxPost(){return W.MAX}makePost(e,n){const s=me(e);return new W(n,s)}toString(){return".value"}}const WI=new VI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(t){return{type:"value",snapshotNode:t}}function Yn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ws(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Hs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function HI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Ws(n,a)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Yn(n,s)):o.trackChildChange(Hs(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(de,(i,r)=>{n.hasChild(i)||s.trackChildChange(Ws(i,r))}),n.isLeafNode()||n.forEachChild(de,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Hs(i,r,o))}else s.trackChildChange(Yn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?M.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.indexedFilter_=new Ca(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Bs.getStartPost_(e),this.endPost_=Bs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new W(n,s))||(s=M.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=M.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(M.EMPTY_NODE);const r=this;return n.forEachChild(de,(o,a)=>{r.matches(new W(o,a))||(i=i.updateImmediateChild(o,M.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Bs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new W(n,s))||(s=M.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=M.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=M.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(M.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,M.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,_)=>d(_,f)}else o=this.index_.getCompare();const a=e;C(a.numChildren()===this.limit_,"");const l=new W(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,l);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(Hs(n,s,d)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Ws(n,d));const A=a.updateImmediateChild(n,M.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Yn(f.name,f.node)),A.updateImmediateChild(f.name,f.node)):A}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Ws(c.name,c.node)),r.trackChildChange(Yn(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,M.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=de}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:$n}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:wn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===de}copy(){const e=new ba;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function jI(t){return t.loadsAllData()?new Ca(t.getIndex()):t.hasLimit()?new BI(t):new Bs(t)}function Ic(t){const e={};if(t.isDefault())return e;let n;if(t.index_===de?n="$priority":t.index_===WI?n="$value":t.index_===jn?n="$key":(C(t.index_ instanceof UI,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=fe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=fe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+fe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=fe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+fe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function wc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==de&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i extends oh{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ni("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=$i.getListenId_(e,s),a={};this.listens_[o]=a;const l=Ic(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),Gn(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=$i.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Ic(e._queryParams),s=e._path.toString(),i=new _r;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Xn(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ms(a.responseText)}catch{xe("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&xe("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(){this.rootNode_=M.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(){return{value:null,children:new Map}}function vh(t,e,n){if(j(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=q(e);t.children.has(s)||t.children.set(s,Yi());const i=t.children.get(s);e=re(e),vh(i,e,n)}}function Oo(t,e,n){t.value!==null?n(e,t.value):KI(t,(s,i)=>{const r=new te(e.toString()+"/"+s);Oo(i,r,n)})}function KI(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Me(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec=10*1e3,zI=30*1e3,$I=5*60*1e3;class YI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new GI(e);const s=Ec+(zI-Ec)*Math.random();Ss(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Me(e,(i,r)=>{r>0&&Pt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Ss(this.reportStats_.bind(this),Math.floor(Math.random()*2*$I))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})($e||($e={}));function Ih(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ta(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Sa(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=$e.ACK_USER_WRITE,this.source=Ih()}operationForChild(e){if(j(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new te(e));return new Ji(G(),n,this.revert)}}else return C(q(this.path)===e,"operationForChild called for unrelated child."),new Ji(re(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n){this.source=e,this.path=n,this.type=$e.LISTEN_COMPLETE}operationForChild(e){return j(this.path)?new js(this.source,G()):new js(this.source,re(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=$e.OVERWRITE}operationForChild(e){return j(this.path)?new En(this.source,G(),this.snap.getImmediateChild(e)):new En(this.source,re(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=$e.MERGE}operationForChild(e){if(j(this.path)){const n=this.children.subtree(new te(e));return n.isEmpty()?null:n.value?new En(this.source,G(),n.value):new qs(this.source,G(),n)}else return C(q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new qs(this.source,re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(j(e))return this.isFullyInitialized()&&!this.filtered_;const n=q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function QI(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(HI(o.childName,o.snapshotNode))}),ps(t,i,"child_removed",e,s,n),ps(t,i,"child_added",e,s,n),ps(t,i,"child_moved",r,s,n),ps(t,i,"child_changed",e,s,n),ps(t,i,"value",e,s,n),i}function ps(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>ZI(t,a,l)),o.forEach(a=>{const l=XI(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function XI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function ZI(t,e,n){if(e.childName==null||n.childName==null)throw Qn("Should only compare child_ events.");const s=new W(e.childName,e.snapshotNode),i=new W(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t,e){return{eventCache:t,serverCache:e}}function Rs(t,e,n,s){return Er(new Yt(e,n,s),t.serverCache)}function wh(t,e,n,s){return Er(t.eventCache,new Yt(e,n,s))}function Qi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Cn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let to;const ew=()=>(to||(to=new De(Vv)),to);class oe{static fromObject(e){let n=new oe(null);return Me(e,(s,i)=>{n=n.set(new te(s),i)}),n}constructor(e,n=ew()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:G(),value:this.value};if(j(e))return null;{const s=q(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(re(e),n);return r!=null?{path:pe(new te(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(j(e))return this;{const n=q(e),s=this.children.get(n);return s!==null?s.subtree(re(e)):new oe(null)}}set(e,n){if(j(e))return new oe(n,this.children);{const s=q(e),r=(this.children.get(s)||new oe(null)).set(re(e),n),o=this.children.insert(s,r);return new oe(this.value,o)}}remove(e){if(j(e))return this.children.isEmpty()?new oe(null):new oe(null,this.children);{const n=q(e),s=this.children.get(n);if(s){const i=s.remove(re(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new oe(null):new oe(this.value,r)}else return this}}get(e){if(j(e))return this.value;{const n=q(e),s=this.children.get(n);return s?s.get(re(e)):null}}setTree(e,n){if(j(e))return n;{const s=q(e),r=(this.children.get(s)||new oe(null)).setTree(re(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new oe(this.value,o)}}fold(e){return this.fold_(G(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(pe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,G(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(j(e))return null;{const r=q(e),o=this.children.get(r);return o?o.findOnPath_(re(e),pe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,G(),n)}foreachOnPath_(e,n,s){if(j(e))return this;{this.value&&s(n,this.value);const i=q(e),r=this.children.get(i);return r?r.foreachOnPath_(re(e),pe(n,i),s):new oe(null)}}foreach(e){this.foreach_(G(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(pe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.writeTree_=e}static empty(){return new Xe(new oe(null))}}function As(t,e,n){if(j(e))return new Xe(new oe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Se(i,e);return r=r.updateChild(o,n),new Xe(t.writeTree_.set(i,r))}else{const i=new oe(n),r=t.writeTree_.setTree(e,i);return new Xe(r)}}}function Cc(t,e,n){let s=t;return Me(n,(i,r)=>{s=As(s,pe(e,i),r)}),s}function bc(t,e){if(j(e))return Xe.empty();{const n=t.writeTree_.setTree(e,new oe(null));return new Xe(n)}}function Do(t,e){return Tn(t,e)!=null}function Tn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Se(n.path,e)):null}function Tc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(de,(s,i)=>{e.push(new W(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new W(s,i.value))}),e}function Gt(t,e){if(j(e))return t;{const n=Tn(t,e);return n!=null?new Xe(new oe(n)):new Xe(t.writeTree_.subtree(e))}}function xo(t){return t.writeTree_.isEmpty()}function Jn(t,e){return Eh(G(),t.writeTree_,e)}function Eh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(C(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Eh(pe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(pe(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(t,e){return Sh(e,t)}function tw(t,e,n,s,i){C(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=As(t.visibleWrites,e,n)),t.lastWriteId=s}function nw(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function sw(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&iw(a,s.path)?i=!1:ze(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return rw(t),!0;if(s.snap)t.visibleWrites=bc(t.visibleWrites,s.path);else{const a=s.children;Me(a,l=>{t.visibleWrites=bc(t.visibleWrites,pe(s.path,l))})}return!0}else return!1}function iw(t,e){if(t.snap)return ze(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ze(pe(t.path,n),e))return!0;return!1}function rw(t){t.visibleWrites=Ch(t.allWrites,ow,G()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ow(t){return t.visible}function Ch(t,e,n){let s=Xe.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)ze(n,o)?(a=Se(n,o),s=As(s,a,r.snap)):ze(o,n)&&(a=Se(o,n),s=As(s,G(),r.snap.getChild(a)));else if(r.children){if(ze(n,o))a=Se(n,o),s=Cc(s,a,r.children);else if(ze(o,n))if(a=Se(o,n),j(a))s=Cc(s,G(),r.children);else{const l=Gn(r.children,q(a));if(l){const c=l.getChild(re(a));s=As(s,G(),c)}}}else throw Qn("WriteRecord should have .snap or .children")}}return s}function bh(t,e,n,s,i){if(!s&&!i){const r=Tn(t.visibleWrites,e);if(r!=null)return r;{const o=Gt(t.visibleWrites,e);if(xo(o))return n;if(n==null&&!Do(o,G()))return null;{const a=n||M.EMPTY_NODE;return Jn(o,a)}}}else{const r=Gt(t.visibleWrites,e);if(!i&&xo(r))return n;if(!i&&n==null&&!Do(r,G()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(ze(c.path,e)||ze(e,c.path))},a=Ch(t.allWrites,o,e),l=n||M.EMPTY_NODE;return Jn(a,l)}}}function aw(t,e,n){let s=M.EMPTY_NODE;const i=Tn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(de,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Gt(t.visibleWrites,e);return n.forEachChild(de,(o,a)=>{const l=Jn(Gt(r,new te(o)),a);s=s.updateImmediateChild(o,l)}),Tc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Gt(t.visibleWrites,e);return Tc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function lw(t,e,n,s,i){C(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=pe(e,n);if(Do(t.visibleWrites,r))return null;{const o=Gt(t.visibleWrites,r);return xo(o)?i.getChild(n):Jn(o,i.getChild(n))}}function cw(t,e,n,s){const i=pe(e,n),r=Tn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Gt(t.visibleWrites,i);return Jn(o,s.getNode().getImmediateChild(n))}else return null}function uw(t,e){return Tn(t.visibleWrites,e)}function dw(t,e,n,s,i,r,o){let a;const l=Gt(t.visibleWrites,e),c=Tn(l,G());if(c!=null)a=c;else if(n!=null)a=Jn(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=f.getNext();for(;_&&u.length<i;)d(_,s)!==0&&u.push(_),_=f.getNext();return u}else return[]}function hw(){return{visibleWrites:Xe.empty(),allWrites:[],lastWriteId:-1}}function Xi(t,e,n,s){return bh(t.writeTree,t.treePath,e,n,s)}function Ra(t,e){return aw(t.writeTree,t.treePath,e)}function Sc(t,e,n,s){return lw(t.writeTree,t.treePath,e,n,s)}function Zi(t,e){return uw(t.writeTree,pe(t.treePath,e))}function fw(t,e,n,s,i,r){return dw(t.writeTree,t.treePath,e,n,s,i,r)}function Aa(t,e,n){return cw(t.writeTree,t.treePath,e,n)}function Th(t,e){return Sh(pe(t.treePath,e),t.writeTree)}function Sh(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Hs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Ws(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Yn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Hs(s,e.snapshotNode,i.oldSnap));else throw Qn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Rh=new gw;class ka{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Yt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Aa(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Cn(this.viewCache_),r=fw(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(t){return{filter:t}}function mw(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function yw(t,e,n,s,i){const r=new pw;let o,a;if(n.type===$e.OVERWRITE){const c=n;c.source.fromUser?o=Mo(t,e,c.path,c.snap,s,i,r):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!j(c.path),o=er(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===$e.MERGE){const c=n;c.source.fromUser?o=Iw(t,e,c.path,c.children,s,i,r):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Lo(t,e,c.path,c.children,s,i,a,r))}else if(n.type===$e.ACK_USER_WRITE){const c=n;c.revert?o=Cw(t,e,c.path,s,i,r):o=ww(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===$e.LISTEN_COMPLETE)o=Ew(t,e,n.path,s,r);else throw Qn("Unknown operation type: "+n.type);const l=r.getChanges();return vw(e,o,l),{viewCache:o,changes:l}}function vw(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Qi(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(yh(Qi(e)))}}function Ah(t,e,n,s,i,r){const o=e.eventCache;if(Zi(s,n)!=null)return e;{let a,l;if(j(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Cn(e),u=c instanceof M?c:M.EMPTY_NODE,d=Ra(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Xi(s,Cn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=q(n);if(c===".priority"){C($t(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Sc(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=re(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Sc(s,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=Aa(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,r):a=o.getNode()}}return Rs(e,a,o.isFullyInitialized()||j(n),t.filter.filtersNodes())}}function er(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(j(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),_,null)}else{const _=q(n);if(!l.isCompleteForPath(n)&&$t(n)>1)return e;const E=re(n),H=l.getNode().getImmediateChild(_).updateChild(E,s);_===".priority"?c=u.updatePriority(l.getNode(),H):c=u.updateChild(l.getNode(),_,H,E,Rh,null)}const d=wh(e,c,l.isFullyInitialized()||j(n),u.filtersNodes()),f=new ka(i,d,r);return Ah(t,d,n,i,f,a)}function Mo(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new ka(i,e,r);if(j(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Rs(e,c,!0,t.filter.filtersNodes());else{const d=q(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Rs(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=re(n),_=a.getNode().getImmediateChild(d);let E;if(j(f))E=s;else{const A=u.getCompleteChild(d);A!=null?lh(f)===".priority"&&A.getChild(uh(f)).isEmpty()?E=A:E=A.updateChild(f,s):E=M.EMPTY_NODE}if(_.equals(E))l=e;else{const A=t.filter.updateChild(a.getNode(),d,E,f,u,o);l=Rs(e,A,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Rc(t,e){return t.eventCache.isCompleteForChild(e)}function Iw(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=pe(n,l);Rc(e,q(u))&&(a=Mo(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=pe(n,l);Rc(e,q(u))||(a=Mo(t,a,u,c,i,r,o))}),a}function Ac(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Lo(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;j(n)?c=s:c=new oe(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),E=Ac(t,_,f);l=er(t,l,new te(d),E,i,r,o,a)}}),c.children.inorderTraversal((d,f)=>{const _=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!_){const E=e.serverCache.getNode().getImmediateChild(d),A=Ac(t,E,f);l=er(t,l,new te(d),A,i,r,o,a)}}),l}function ww(t,e,n,s,i,r,o){if(Zi(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(j(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return er(t,e,n,l.getNode().getChild(n),i,r,a,o);if(j(n)){let c=new oe(null);return l.getNode().forEachChild(jn,(u,d)=>{c=c.set(new te(u),d)}),Lo(t,e,n,c,i,r,a,o)}else return e}else{let c=new oe(null);return s.foreach((u,d)=>{const f=pe(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Lo(t,e,n,c,i,r,a,o)}}function Ew(t,e,n,s,i){const r=e.serverCache,o=wh(e,r.getNode(),r.isFullyInitialized()||j(n),r.isFiltered());return Ah(t,o,n,s,Rh,i)}function Cw(t,e,n,s,i,r){let o;if(Zi(s,n)!=null)return e;{const a=new ka(s,e,i),l=e.eventCache.getNode();let c;if(j(n)||q(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Xi(s,Cn(e));else{const d=e.serverCache.getNode();C(d instanceof M,"serverChildren would be complete if leaf node"),u=Ra(s,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=q(n);let d=Aa(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,re(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,M.EMPTY_NODE,re(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Xi(s,Cn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Zi(s,G())!=null,Rs(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Ca(s.getIndex()),r=jI(s);this.processor_=_w(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(M.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(M.EMPTY_NODE,a.getNode(),null),u=new Yt(l,o.isFullyInitialized(),i.filtersNodes()),d=new Yt(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Er(d,u),this.eventGenerator_=new JI(this.query_)}get query(){return this.query_}}function Tw(t){return t.viewCache_.serverCache.getNode()}function Sw(t){return Qi(t.viewCache_)}function Rw(t,e){const n=Cn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!j(e)&&!n.getImmediateChild(q(e)).isEmpty())?n.getChild(e):null}function kc(t){return t.eventRegistrations_.length===0}function Aw(t,e){t.eventRegistrations_.push(e)}function Pc(t,e,n){const s=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Nc(t,e,n,s){e.type===$e.MERGE&&e.source.queryId!==null&&(C(Cn(t.viewCache_),"We should always have a full cache before handling merges"),C(Qi(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=yw(t.processor_,i,e,n,s);return mw(t.processor_,r.viewCache),C(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,kh(t,r.changes,r.viewCache.eventCache.getNode(),null)}function kw(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(de,(r,o)=>{s.push(Yn(r,o))}),n.isFullyInitialized()&&s.push(yh(n.getNode())),kh(t,s,n.getNode(),e)}function kh(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return QI(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tr;class Ph{constructor(){this.views=new Map}}function Pw(t){C(!tr,"__referenceConstructor has already been defined"),tr=t}function Nw(){return C(tr,"Reference.ts has not been loaded"),tr}function Ow(t){return t.views.size===0}function Pa(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return C(r!=null,"SyncTree gave us an op for an invalid query."),Nc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Nc(o,e,n,s));return r}}function Nh(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Xi(n,i?s:null),l=!1;a?l=!0:s instanceof M?(a=Ra(n,s),l=!1):(a=M.EMPTY_NODE,l=!1);const c=Er(new Yt(a,l,!1),new Yt(s,i,!1));return new bw(e,c)}return o}function Dw(t,e,n,s,i,r){const o=Nh(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Aw(o,n),kw(o,n)}function xw(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Jt(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Pc(c,n,s)),kc(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Pc(l,n,s)),kc(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Jt(t)&&r.push(new(Nw())(e._repo,e._path)),{removed:r,events:o}}function Oh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function zt(t,e){let n=null;for(const s of t.views.values())n=n||Rw(s,e);return n}function Dh(t,e){if(e._queryParams.loadsAllData())return br(t);{const s=e._queryIdentifier;return t.views.get(s)}}function xh(t,e){return Dh(t,e)!=null}function Jt(t){return br(t)!=null}function br(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nr;function Mw(t){C(!nr,"__referenceConstructor has already been defined"),nr=t}function Lw(){return C(nr,"Reference.ts has not been loaded"),nr}let Fw=1;class Oc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new oe(null),this.pendingWriteTree_=hw(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Mh(t,e,n,s,i){return tw(t.pendingWriteTree_,e,n,s,i),i?ri(t,new En(Ih(),e,n)):[]}function fn(t,e,n=!1){const s=nw(t.pendingWriteTree_,e);if(sw(t.pendingWriteTree_,e)){let r=new oe(null);return s.snap!=null?r=r.set(G(),!0):Me(s.children,o=>{r=r.set(new te(o),!0)}),ri(t,new Ji(s.path,r,n))}else return[]}function ii(t,e,n){return ri(t,new En(Ta(),e,n))}function Uw(t,e,n){const s=oe.fromObject(n);return ri(t,new qs(Ta(),e,s))}function Vw(t,e){return ri(t,new js(Ta(),e))}function Ww(t,e,n){const s=Oa(t,n);if(s){const i=Da(s),r=i.path,o=i.queryId,a=Se(r,e),l=new js(Sa(o),a);return xa(t,r,l)}else return[]}function Lh(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||xh(o,e))){const l=xw(o,e,n,s);Ow(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(f,_)=>Jt(_));if(u&&!d){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const _=qw(f);for(let E=0;E<_.length;++E){const A=_[E],H=A.query,B=Wh(t,A);t.listenProvider_.startListening(ks(H),Ks(t,H),B.hashFn,B.onComplete)}}}!d&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(ks(e),null):c.forEach(f=>{const _=t.queryToTagMap.get(Tr(f));t.listenProvider_.stopListening(ks(f),_)}))}Kw(t,c)}return a}function Fh(t,e,n,s){const i=Oa(t,s);if(i!=null){const r=Da(i),o=r.path,a=r.queryId,l=Se(o,e),c=new En(Sa(a),l,n);return xa(t,o,c)}else return[]}function Hw(t,e,n,s){const i=Oa(t,s);if(i){const r=Da(i),o=r.path,a=r.queryId,l=Se(o,e),c=oe.fromObject(n),u=new qs(Sa(a),l,c);return xa(t,o,u)}else return[]}function Bw(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const E=Se(f,i);r=r||zt(_,E),o=o||Jt(_)});let a=t.syncPointTree_.get(i);a?(o=o||Jt(a),r=r||zt(a,G())):(a=new Ph,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=M.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,E)=>{const A=zt(E,G());A&&(r=r.updateImmediateChild(_,A))}));const c=xh(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=Tr(e);C(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=Gw();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const u=Cr(t.pendingWriteTree_,i);let d=Dw(a,e,n,u,r,l);if(!c&&!o&&!s){const f=Dh(a,e);d=d.concat(zw(t,e,f))}return d}function Na(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Se(o,e),c=zt(a,l);if(c)return c});return bh(i,e,r,n,!0)}function jw(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=Se(c,n);s=s||zt(u,d)});let i=t.syncPointTree_.get(n);i?s=s||zt(i,G()):(i=new Ph,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Yt(s,!0,!1):null,a=Cr(t.pendingWriteTree_,e._path),l=Nh(i,e,a,r?o.getNode():M.EMPTY_NODE,r);return Sw(l)}function ri(t,e){return Uh(e,t.syncPointTree_,null,Cr(t.pendingWriteTree_,G()))}function Uh(t,e,n,s){if(j(t.path))return Vh(t,e,n,s);{const i=e.get(G());n==null&&i!=null&&(n=zt(i,G()));let r=[];const o=q(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Th(s,o);r=r.concat(Uh(a,l,c,u))}return i&&(r=r.concat(Pa(i,t,s,n))),r}}function Vh(t,e,n,s){const i=e.get(G());n==null&&i!=null&&(n=zt(i,G()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Th(s,o),u=t.operationForChild(o);u&&(r=r.concat(Vh(u,a,l,c)))}),i&&(r=r.concat(Pa(i,t,s,n))),r}function Wh(t,e){const n=e.query,s=Ks(t,n);return{hashFn:()=>(Tw(e)||M.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Ww(t,n._path,s):Vw(t,n._path);{const r=Bv(i,n);return Lh(t,n,null,r)}}}}function Ks(t,e){const n=Tr(e);return t.queryToTagMap.get(n)}function Tr(t){return t._path.toString()+"$"+t._queryIdentifier}function Oa(t,e){return t.tagToQueryMap.get(e)}function Da(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new te(t.substr(0,e))}}function xa(t,e,n){const s=t.syncPointTree_.get(e);C(s,"Missing sync point for query tag that we're tracking");const i=Cr(t.pendingWriteTree_,e);return Pa(s,n,i,null)}function qw(t){return t.fold((e,n,s)=>{if(n&&Jt(n))return[br(n)];{let i=[];return n&&(i=Oh(n)),Me(s,(r,o)=>{i=i.concat(o)}),i}})}function ks(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Lw())(t._repo,t._path):t}function Kw(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Tr(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Gw(){return Fw++}function zw(t,e,n){const s=e._path,i=Ks(t,e),r=Wh(t,n),o=t.listenProvider_.startListening(ks(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)C(!Jt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!j(c)&&u&&Jt(u))return[br(u).query];{let f=[];return u&&(f=f.concat(Oh(u).map(_=>_.query))),Me(d,(_,E)=>{f=f.concat(E)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(ks(u),Ks(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ma(n)}node(){return this.node_}}class La{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=pe(this.path_,e);return new La(this.syncTree_,n)}node(){return Na(this.syncTree_,this.path_)}}const $w=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Dc=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Yw(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Jw(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Yw=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},Jw=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&C(!1,"Unexpected increment value: "+s);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Qw=function(t,e,n,s){return Fa(e,new La(n,t),s)},Hh=function(t,e,n){return Fa(t,new Ma(e),n)};function Fa(t,e,n){const s=t.getPriority().val(),i=Dc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Dc(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ge(a,me(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ge(i))),o.forEachChild(de,(a,l)=>{const c=Fa(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Va(t,e){let n=e instanceof te?e:new te(e),s=t,i=q(n);for(;i!==null;){const r=Gn(s.node.children,i)||{children:{},childCount:0};s=new Ua(i,s,r),n=re(n),i=q(n)}return s}function ss(t){return t.node.value}function Bh(t,e){t.node.value=e,Fo(t)}function jh(t){return t.node.childCount>0}function Xw(t){return ss(t)===void 0&&!jh(t)}function Sr(t,e){Me(t.node.children,(n,s)=>{e(new Ua(n,t,s))})}function qh(t,e,n,s){n&&e(t),Sr(t,i=>{qh(i,e,!0)})}function Zw(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function oi(t){return new te(t.parent===null?t.name:oi(t.parent)+"/"+t.name)}function Fo(t){t.parent!==null&&eE(t.parent,t.name,t)}function eE(t,e,n){const s=Xw(n),i=Pt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Fo(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Fo(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE=/[\[\].#$\/\u0000-\u001F\u007F]/,nE=/[\[\].#$\u0000-\u001F\u007F]/,no=10*1024*1024,Kh=function(t){return typeof t=="string"&&t.length!==0&&!tE.test(t)},Gh=function(t){return typeof t=="string"&&t.length!==0&&!nE.test(t)},sE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Gh(t)},iE=function(t,e,n,s){Wa(ia(t,"value"),e,n)},Wa=function(t,e,n){const s=n instanceof te?new wI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+un(s));if(typeof e=="function")throw new Error(t+"contains a function "+un(s)+" with contents = "+e.toString());if(Hd(e))throw new Error(t+"contains "+e.toString()+" "+un(s));if(typeof e=="string"&&e.length>no/3&&mr(e)>no)throw new Error(t+"contains a string greater than "+no+" utf8 bytes "+un(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Me(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Kh(o)))throw new Error(t+" contains an invalid key ("+o+") "+un(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);EI(s,o),Wa(t,a,s),CI(s)}),i&&r)throw new Error(t+' contains ".value" child '+un(s)+" in addition to actual children.")}},zh=function(t,e,n,s){if(!Gh(n))throw new Error(ia(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},rE=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),zh(t,e,n)},oE=function(t,e){if(q(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},aE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Kh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!sE(n))throw new Error(ia(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function $h(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!dh(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function pt(t,e,n){$h(t,n),cE(t,s=>ze(s,e)||ze(e,s))}function cE(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(uE(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function uE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Ts&&Ie("event: "+n.toString()),ns(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE="repo_interrupt",hE=25;class fE{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new lE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Yi(),this.transactionQueueTree_=new Ua,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function pE(t,e,n){if(t.stats_=va(t.repoInfo_),t.forceRestClient_||Gv())t.server_=new $i(t.repoInfo_,(s,i,r,o)=>{xc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Mc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{fe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Tt(t.repoInfo_,e,(s,i,r,o)=>{xc(t,s,i,r,o)},s=>{Mc(t,s)},s=>{_E(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Qv(t.repoInfo_,()=>new YI(t.stats_,t.server_)),t.infoData_=new qI,t.infoSyncTree_=new Oc({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=ii(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ba(t,"connected",!1),t.serverSyncTree_=new Oc({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);pt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function gE(t){const n=t.infoData_.getNode(new te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ha(t){return $w({timestamp:gE(t)})}function xc(t,e,n,s,i){t.dataUpdateCount++;const r=new te(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Ui(n,c=>me(c));o=Hw(t.serverSyncTree_,r,l,i)}else{const l=me(n);o=Fh(t.serverSyncTree_,r,l,i)}else if(s){const l=Ui(n,c=>me(c));o=Uw(t.serverSyncTree_,r,l)}else{const l=me(n);o=ii(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ar(t,r)),pt(t.eventQueue_,a,o)}function Mc(t,e){Ba(t,"connected",e),e===!1&&vE(t)}function _E(t,e){Me(e,(n,s)=>{Ba(t,n,s)})}function Ba(t,e,n){const s=new te("/.info/"+e),i=me(n);t.infoData_.updateSnapshot(s,i);const r=ii(t.infoSyncTree_,s,i);pt(t.eventQueue_,s,r)}function Yh(t){return t.nextWriteId_++}function mE(t,e,n){const s=jw(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=me(i).withIndex(e._queryParams.getIndex());Bw(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=ii(t.serverSyncTree_,e._path,r);else{const a=Ks(t.serverSyncTree_,e);o=Fh(t.serverSyncTree_,e._path,r,a)}return pt(t.eventQueue_,e._path,o),Lh(t.serverSyncTree_,e,n,null,!0),r},i=>(Rr(t,"get for query "+fe(e)+" failed: "+i),Promise.reject(new Error(i))))}function yE(t,e,n,s,i){Rr(t,"set",{path:e.toString(),value:n,priority:s});const r=Ha(t),o=me(n,s),a=Na(t.serverSyncTree_,e),l=Hh(o,a,r),c=Yh(t),u=Mh(t.serverSyncTree_,e,l,c,!0);$h(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const E=f==="ok";E||xe("set at "+e+" failed: "+f);const A=fn(t.serverSyncTree_,c,!E);pt(t.eventQueue_,e,A),wE(t,i,f,_)});const d=ef(t,e);Ar(t,d),pt(t.eventQueue_,d,[])}function vE(t){Rr(t,"onDisconnectEvents");const e=Ha(t),n=Yi();Oo(t.onDisconnect_,G(),(i,r)=>{const o=Qw(i,r,t.serverSyncTree_,e);vh(n,i,o)});let s=[];Oo(n,G(),(i,r)=>{s=s.concat(ii(t.serverSyncTree_,i,r));const o=ef(t,i);Ar(t,o)}),t.onDisconnect_=Yi(),pt(t.eventQueue_,G(),s)}function IE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(dE)}function Rr(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ie(n,...e)}function wE(t,e,n,s){e&&ns(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Jh(t,e,n){return Na(t.serverSyncTree_,e,n)||M.EMPTY_NODE}function ja(t,e=t.transactionQueueTree_){if(e||kr(t,e),ss(e)){const n=Xh(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&EE(t,oi(e),n)}else jh(e)&&Sr(e,n=>{ja(t,n)})}function EE(t,e,n){const s=n.map(c=>c.currentWriteId),i=Jh(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];C(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Se(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Rr(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(fn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();kr(t,Va(t.transactionQueueTree_,e)),ja(t,t.transactionQueueTree_),pt(t.eventQueue_,e,u);for(let f=0;f<d.length;f++)ns(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{xe("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Ar(t,e)}},o)}function Ar(t,e){const n=Qh(t,e),s=oi(n),i=Xh(t,n);return CE(t,i,s),s}function CE(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Se(n,l.path);let u=!1,d;if(C(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(fn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=hE)u=!0,d="maxretry",i=i.concat(fn(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Jh(t,l.path,o);l.currentInputSnapshot=f;const _=e[a].update(f.val());if(_!==void 0){Wa("transaction failed: Data returned ",_,l.path);let E=me(_);typeof _=="object"&&_!=null&&Pt(_,".priority")||(E=E.updatePriority(f.getPriority()));const H=l.currentWriteId,B=Ha(t),z=Hh(E,f,B);l.currentOutputSnapshotRaw=E,l.currentOutputSnapshotResolved=z,l.currentWriteId=Yh(t),o.splice(o.indexOf(H),1),i=i.concat(Mh(t.serverSyncTree_,l.path,z,l.currentWriteId,l.applyLocally)),i=i.concat(fn(t.serverSyncTree_,H,!0))}else u=!0,d="nodata",i=i.concat(fn(t.serverSyncTree_,l.currentWriteId,!0))}pt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}kr(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)ns(s[a]);ja(t,t.transactionQueueTree_)}function Qh(t,e){let n,s=t.transactionQueueTree_;for(n=q(e);n!==null&&ss(s)===void 0;)s=Va(s,n),e=re(e),n=q(e);return s}function Xh(t,e){const n=[];return Zh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Zh(t,e,n){const s=ss(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Sr(e,i=>{Zh(t,i,n)})}function kr(t,e){const n=ss(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Bh(e,n.length>0?n:void 0)}Sr(e,s=>{kr(t,s)})}function ef(t,e){const n=oi(Qh(t,e)),s=Va(t.transactionQueueTree_,e);return Zw(s,i=>{so(t,i)}),so(t,s),qh(s,i=>{so(t,i)}),n}function so(t,e){const n=ss(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(fn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Bh(e,void 0):n.length=r+1,pt(t.eventQueue_,oi(e),i);for(let o=0;o<s.length;o++)ns(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function TE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):xe(`Invalid query segment '${n}' in query '${t}'`)}return e}const Lc=function(t,e){const n=SE(t),s=n.namespace;n.domain==="firebase.com"&&At(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&At("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Fv();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Zd(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new te(n.pathString)}},SE=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=bE(t.substring(u,d)));const f=TE(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const E=e.indexOf(".");s=e.substring(0,E).toLowerCase(),n=e.substring(E+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+fe(this.snapshot.exportVal())}}class AE{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return j(this._path)?null:lh(this._path)}get ref(){return new Nt(this._repo,this._path)}get _queryIdentifier(){const e=wc(this._queryParams),n=ma(e);return n==="{}"?"default":n}get _queryObject(){return wc(this._queryParams)}isEqual(e){if(e=Pe(e),!(e instanceof qa))return!1;const n=this._repo===e._repo,s=dh(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+II(this._path)}}class Nt extends qa{constructor(e,n){super(e,n,new ba,!1)}get parent(){const e=uh(this._path);return e===null?null:new Nt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Gs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new te(e),s=Uo(this.ref,e);return new Gs(this._node.getChild(n),s,de)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Gs(i,Uo(this.ref,s),de)))}hasChild(e){const n=new te(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function io(t,e){return t=Pe(t),t._checkNotDeleted("ref"),e!==void 0?Uo(t._root,e):t._root}function Uo(t,e){return t=Pe(t),q(t._path)===null?rE("child","path",e):zh("child","path",e),new Nt(t._repo,pe(t._path,e))}function PE(t,e){t=Pe(t),oE("set",t._path),iE("set",e,t._path);const n=new _r;return yE(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Fc(t){t=Pe(t);const e=new kE(()=>{}),n=new Ka(e);return mE(t._repo,t,n).then(s=>new Gs(s,new Nt(t._repo,t._path),t._queryParams.getIndex()))}class Ka{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new RE("value",this,new Gs(e.snapshotNode,new Nt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new AE(this,e,n):null}matches(e){return e instanceof Ka?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}Pw(Nt);Mw(Nt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE="FIREBASE_DATABASE_EMULATOR_HOST",Vo={};let OE=!1;function DE(t,e,n,s){t.repoInfo_=new Zd(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function xE(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||At("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ie("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Lc(r,i),a=o.repoInfo,l;typeof process<"u"&&sc&&(l=sc[NE]),l?(r=`http://${l}?ns=${a.namespace}`,o=Lc(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new $v(t.name,t.options,e);aE("Invalid Firebase Database URL",o),j(o.path)||At("Database URL must point to the root of a Firebase Database (not including a child path).");const u=LE(a,t,c,new zv(t,n));return new FE(u,t)}function ME(t,e){const n=Vo[e];(!n||n[t.key]!==t)&&At(`Database ${e}(${t.repoInfo_}) has already been deleted.`),IE(t),delete n[t.key]}function LE(t,e,n,s){let i=Vo[e.name];i||(i={},Vo[e.name]=i);let r=i[t.toURLString()];return r&&At("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new fE(t,OE,n,s),i[t.toURLString()]=r,r}class FE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(pE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Nt(this._repo,G())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ME(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&At("Cannot call "+e+" on a deleted database.")}}function UE(t=ed(),e){const n=aa(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=jg("database");s&&VE(n,...s)}return n}function VE(t,e,n,s={}){t=Pe(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&mn(s,r.repoInfo_.emulatorOptions))return;At("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&At('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Si(Si.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:qg(s.mockUserToken,t.app.options.projectId);o=new Si(a)}DE(r,i,s,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(t){Nv(Zn),zn(new yn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return xE(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Kt(ic,rc,t),Kt(ic,rc,"esm2017")}Tt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Tt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};WE();const ro="food-storage-data",sr={save(t){try{return localStorage.setItem(ro,JSON.stringify(t)),!0}catch(e){return console.error("Error saving to localStorage:",e),!1}},load(){try{const t=localStorage.getItem(ro);return t?JSON.parse(t):null}catch(t){return console.error("Error loading from localStorage:",t),null}},exportData(){const t=this.load();if(!t)return;const e=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),n=URL.createObjectURL(e),s=document.createElement("a");s.href=n,s.download=`food-storage-backup-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(n)},async importData(t){try{const e=await t.text(),n=JSON.parse(e);return this.save(n),!0}catch(e){return console.error("Error importing data:",e),!1}},clear(){try{return localStorage.removeItem(ro),!0}catch(t){return console.error("Error clearing localStorage:",t),!1}}},HE={apiKey:"",authDomain:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:"",databaseURL:""},tf=Zu(HE),mi=kv(tf),oo=UE(tf),Pn={currentUser:null,init(){return new Promise(t=>{my(mi,e=>{this.currentUser=e,e&&this.loadUserData(),t(e)})})},async signInWithEmail(t,e){try{const n=await py(mi,t,e);return await this.mergeLocalData(n.user),{success:!0}}catch(n){return{success:!1,error:n.message}}},async signUp(t,e){try{const n=await fy(mi,t,e);return await this.mergeLocalData(n.user),{success:!0}}catch(n){return{success:!1,error:n.message}}},async signOut(){try{return await yy(mi),this.currentUser=null,sr.clear(),{success:!0}}catch(t){return console.error("Error signing out:",t),{success:!1,error:t.message}}},async saveUserData(t){if(!this.currentUser)return!1;try{return await PE(io(oo,`users/${this.currentUser.uid}/data`),t),!0}catch(e){return console.error("Error saving to Firebase:",e),!1}},async loadUserData(){if(!this.currentUser)return null;try{return(await Fc(io(oo,`users/${this.currentUser.uid}/data`))).val()}catch(t){return console.error("Error loading from Firebase:",t),null}},async mergeLocalData(t){const e=sr.load();if(e)try{const s=(await Fc(io(oo,`users/${t.uid}/data`))).val();if(!s)await this.saveUserData(e);else{const i=this.mergeData(s,e);await this.saveUserData(i)}}catch(n){console.error("Error merging data:",n)}},mergeData(t,e){return{...t,...e,items:[...t.items||[],...e.items||[]]}}},nf=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},BE={name:"AuthControls",data(){return{firebase:Pn,email:"",password:"",newEmail:"",newPassword:"",confirmPassword:""}},methods:{async handleSignIn(){const t=await Pn.signInWithEmail(this.email,this.password);t.success?(this.email="",this.password="",this.$emit("auth-changed")):alert(t.error)},async handleSignUp(){if(this.newPassword!==this.confirmPassword){alert("Passwords do not match");return}const t=await Pn.signUp(this.newEmail,this.newPassword);t.success?(this.newEmail="",this.newPassword="",this.confirmPassword="",this.$emit("auth-changed")):alert(t.error)},async handleSignOut(){const t=await Pn.signOut();t.success?(this.email="",this.password="",this.newEmail="",this.newPassword="",this.confirmPassword="",this.$emit("auth-changed")):alert(t.error||"Failed to sign out. Please try again.")}},created(){Pn.init()}},jE={class:"auth-controls"},qE={key:0,class:"auth-forms"},KE={class:"auth-section"},GE={class:"auth-section"},zE={key:1,class:"user-info"};function $E(t,e,n,s,i,r){return k(),P("div",jE,[i.firebase.currentUser?(k(),P("div",zE,[g("span",null,"Signed in as "+U(i.firebase.currentUser.email),1),g("button",{onClick:e[7]||(e[7]=(...o)=>r.handleSignOut&&r.handleSignOut(...o)),class:"btn"},"Sign Out")])):(k(),P("div",qE,[g("div",KE,[e[9]||(e[9]=g("h3",null,"Sign In",-1)),g("form",{onSubmit:e[2]||(e[2]=Ft((...o)=>r.handleSignIn&&r.handleSignIn(...o),["prevent"]))},[ce(g("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>i.email=o),type:"email",placeholder:"Email",autocomplete:"username",required:""},null,512),[[ye,i.email]]),ce(g("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>i.password=o),type:"password",placeholder:"Password",autocomplete:"current-password",required:""},null,512),[[ye,i.password]]),e[8]||(e[8]=g("button",{type:"submit",class:"btn"},"Sign In",-1))],32)]),g("div",GE,[e[11]||(e[11]=g("h3",null,"Sign Up",-1)),g("form",{onSubmit:e[6]||(e[6]=Ft((...o)=>r.handleSignUp&&r.handleSignUp(...o),["prevent"]))},[ce(g("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>i.newEmail=o),type:"email",placeholder:"Email",autocomplete:"username",required:""},null,512),[[ye,i.newEmail]]),ce(g("input",{"onUpdate:modelValue":e[4]||(e[4]=o=>i.newPassword=o),type:"password",placeholder:"Password",autocomplete:"new-password",required:""},null,512),[[ye,i.newPassword]]),ce(g("input",{"onUpdate:modelValue":e[5]||(e[5]=o=>i.confirmPassword=o),type:"password",placeholder:"Confirm Password",autocomplete:"new-password",required:""},null,512),[[ye,i.confirmPassword]]),e[10]||(e[10]=g("button",{type:"submit",class:"btn"},"Sign Up",-1))],32)])]))])}const YE=nf(BE,[["render",$E],["__scopeId","data-v-a3cc44b4"]]),JE={components:{AuthControls:YE},data(){return{firebase:Pn,storageLocations:[{id:1,name:"Freezer",icon:"❄️",color:"#89CFF0",items:[{id:101,name:"Frozen Pizza",category:"Other",quantity:2,unit:"pieces",shelf:"top"},{id:102,name:"Ice Cream",category:"Dairy",quantity:1,unit:"l",shelf:"top"},{id:103,name:"Chicken Breast",category:"Meat & Fish",quantity:1,unit:"kg",shelf:"bottom"}]},{id:2,name:"Pantry",icon:"🏷️",color:"#C19A6B",items:[{id:301,name:"Rice",category:"Grains & Pasta",quantity:2,unit:"kg",shelf:"bottom"},{id:302,name:"Pasta",category:"Grains & Pasta",quantity:3,unit:"pieces",shelf:"middle"}]}],categories:[{id:1,name:"Fruits & Vegetables",icon:"🥬",color:"#90EE90"},{id:2,name:"Meat & Fish",icon:"🥩",color:"#FF8C94"},{id:3,name:"Dairy",icon:"🥛",color:"#FFFDD0"},{id:4,name:"Grains & Pasta",icon:"🌾",color:"#F5DEB3"},{id:5,name:"Snacks",icon:"🍪",color:"#FFB347"},{id:6,name:"Beverages",icon:"🥤",color:"#87CEEB"},{id:7,name:"Condiments",icon:"🧂",color:"#DDA0DD"},{id:8,name:"Other",icon:"📦",color:"#D3D3D3"}],units:[{value:"pieces",label:"pieces"},{value:"g",label:"grams"},{value:"kg",label:"kilograms"},{value:"ml",label:"milliliters"},{value:"l",label:"liters"}],selectedLocation:null,newItem:{name:"",category:"Other",quantity:1,unit:"pieces"},isDarkMode:!1,showThemeCustomizer:!1,showDeleteModal:!1,showSettingsModal:!1,itemToDelete:null,customTheme:{accent:"#42b983",secondary:"#666666"},showTooltip:!1,tooltipText:"",tooltipPosition:{x:0,y:0},editingCategory:null,editingLocation:null,defaultIcons:{categories:["🥬","🥩","🥛","🌾","🍪","🥤","🧂","📦","🥑","🍖","🧀","🥖","🥨","☕","🍯","📝"],locations:["❄️","🧊","🏷️","🗄️","🪟","🗃️","📥","📦","🏠","🏪","🏬","📍"]},currentView:"inventory",shoppingList:[],editingItem:{locationId:null,shelf:null,item:{name:"",category:"Other",quantity:1,unit:"pieces"}}}},methods:{selectLocation(t){this.selectedLocation=t},async addItem(){if(!this.newItem.name.trim()||!this.selectedLocation)return;const t={id:Date.now(),name:this.newItem.name.trim(),category:this.newItem.category,quantity:this.newItem.quantity,unit:this.newItem.unit,shelf:this.determineShelf(this.newItem.category)};this.selectedLocation.items.push(t),this.showTooltipMessage("Item added successfully!",2e3),this.$nextTick(()=>{const e=document.querySelector(".add-item-form");e.classList.add("form-reset-animation"),setTimeout(()=>e.classList.remove("form-reset-animation"),500),this.newItem={name:"",category:"Other",quantity:1,unit:"pieces"}}),await this.saveData()},determineShelf(t){const e=["Snacks","Condiments"],n=["Meat & Fish","Beverages"];return e.includes(t)?"top":n.includes(t)?"bottom":"middle"},toggleDarkMode(){this.isDarkMode=!this.isDarkMode,document.documentElement.classList.toggle("dark-mode")},toggleThemeCustomizer(){this.showThemeCustomizer=!this.showThemeCustomizer},updateTheme(){document.documentElement.style.setProperty("--accent-color",this.customTheme.accent),document.documentElement.style.setProperty("--accent-hover",this.adjustColor(this.customTheme.accent,-20)),document.documentElement.style.setProperty("--text-secondary",this.customTheme.secondary)},adjustColor(t,e){return t},deleteItem(t,e){this.itemToDelete={item:t,location:e},this.showDeleteModal=!0},async confirmDelete(){const t=this.itemToDelete.location.items.findIndex(e=>e.id===this.itemToDelete.item.id);t!==-1&&(this.itemToDelete.location.items.splice(t,1),this.showTooltipMessage("Item deleted successfully!",2e3)),this.showDeleteModal=!1,this.itemToDelete=null,await this.saveData()},showTooltipMessage(t,e=2e3){this.tooltipText=t,this.showTooltip=!0,setTimeout(()=>{this.showTooltip=!1},e)},toggleSettingsModal(){this.showSettingsModal=!this.showSettingsModal,this.editingCategory=null,this.editingLocation=null},async addNewCategory(){const t=Math.max(...this.categories.map(e=>e.id))+1;this.categories.push({id:t,name:"New Category",icon:"📦",color:"#D3D3D3"}),this.editingCategory=this.categories[this.categories.length-1],await this.saveData()},async addNewLocation(){const t=Math.max(...this.storageLocations.map(e=>e.id))+1;this.storageLocations.push({id:t,name:"New Location",icon:"📦",color:"#D3D3D3",items:[]}),this.editingLocation=this.storageLocations[this.storageLocations.length-1],await this.saveData()},async deleteCategory(t){const e=this.categories.findIndex(n=>n.id===t.id);e!==-1&&(this.categories.splice(e,1),await this.saveData())},async deleteLocation(t){const e=this.storageLocations.findIndex(n=>n.id===t.id);e!==-1&&(this.storageLocations.splice(e,1),await this.saveData())},startEditing(t,e){e==="category"?this.editingCategory={...t}:this.editingLocation={...t}},async saveEditing(t){if(t==="category"&&this.editingCategory){const e=this.categories.findIndex(n=>n.id===this.editingCategory.id);e!==-1&&(this.categories[e]={...this.editingCategory}),this.editingCategory=null}else if(t==="location"&&this.editingLocation){const e=this.storageLocations.findIndex(n=>n.id===this.editingLocation.id);e!==-1&&(this.storageLocations[e]={...this.editingLocation,items:this.storageLocations[e].items}),this.editingLocation=null}await this.saveData()},getCategoryIcon(t){const e=this.categories.find(n=>n.name===t);return e?e.icon:"📦"},getCategoryColor(t){const e=this.categories.find(n=>n.name===t);return e?e.color:"#D3D3D3"},getShelfItems(t,e){return t.filter(n=>n.shelf===e)},toggleView(){this.currentView=this.currentView==="inventory"?"shopping":"inventory"},async moveToShoppingList(t,e){const n=e.items.findIndex(s=>s.id===t.id);if(n!==-1){const s={...e.items[n],originalLocation:e.name};e.items.splice(n,1),this.shoppingList.push(s),this.showTooltipMessage("Item added to shopping list!",2e3),await this.saveData()}},async moveBackToInventory(t){const e=this.shoppingList.findIndex(n=>n.id===t.id);if(e!==-1){const n=this.storageLocations.find(s=>s.name===t.originalLocation);if(n){const{originalLocation:s,...i}=this.shoppingList[e];n.items.push(i),this.shoppingList.splice(e,1),this.showTooltipMessage("Item moved back to inventory!",2e3),await this.saveData()}}},async handleAuthChange(){if(this.firebase.currentUser){const t=await this.firebase.loadUserData();t&&(this.storageLocations=t.storageLocations||this.storageLocations,this.categories=t.categories||this.categories,this.shoppingList=t.shoppingList||[]),this.showTooltipMessage("Successfully signed in!",2e3)}else this.storageLocations=[{id:1,name:"Freezer",icon:"❄️",color:"#89CFF0",items:[]},{id:2,name:"Pantry",icon:"🏷️",color:"#C19A6B",items:[]}],this.shoppingList=[],this.showTooltipMessage("Successfully signed out!",2e3);await this.$nextTick(),this.$forceUpdate()},async saveData(){if(this.firebase.currentUser){const t={storageLocations:this.storageLocations,categories:this.categories,shoppingList:this.shoppingList};await this.firebase.saveUserData(t)}else sr.save({storageLocations:this.storageLocations,categories:this.categories,shoppingList:this.shoppingList})},startAddingItem(t,e){this.editingItem={locationId:t,shelf:e,item:{name:"",category:"Other",quantity:1,unit:"pieces"}}},cancelAddingItem(){this.editingItem={locationId:null,shelf:null,item:{name:"",category:"Other",quantity:1,unit:"pieces"}}},async addItemToShelf(){const t=this.storageLocations.find(n=>n.id===this.editingItem.locationId);if(!t||!this.editingItem.item.name.trim())return;const e={id:Date.now(),name:this.editingItem.item.name.trim(),category:this.editingItem.item.category,quantity:this.editingItem.item.quantity,unit:this.editingItem.item.unit,shelf:this.editingItem.shelf};t.items.push(e),this.showTooltipMessage("Item added successfully!",2e3),this.cancelAddingItem(),await this.saveData()}},async mounted(){try{if(await this.firebase.init(),this.firebase.currentUser){const t=await this.firebase.loadUserData();t&&(this.storageLocations=t.storageLocations||this.storageLocations,this.categories=t.categories||this.categories,this.shoppingList=t.shoppingList||[]),await this.$nextTick(),this.$forceUpdate()}else{const t=sr.load();t&&(this.storageLocations=t.storageLocations||this.storageLocations,this.categories=t.categories||this.categories,this.shoppingList=t.shoppingList||[])}window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&this.toggleDarkMode()}catch(t){console.error("Error initializing app:",t)}}},QE={class:"app-container",role:"application"},XE={role:"banner"},ZE={class:"header-content"},eC={class:"header-controls",role:"navigation","aria-label":"Main navigation"},tC=["aria-label"],nC=["aria-label"],sC={key:0,class:"main-grid",role:"region","aria-label":"Inventory management"},iC={class:"storage-locations"},rC={class:"locations-grid"},oC=["onClick"],aC={class:"location-icon"},lC={class:"items-grid"},cC={class:"shelf-section"},uC={class:"shelf-items"},dC=["onClick"],hC={class:"food-item-name"},fC={class:"food-item-details"},pC={class:"quantity"},gC=["onClick"],_C={key:0,class:"add-item-placeholder editing"},mC={class:"add-item-form-inline"},yC={class:"form-row-inline"},vC=["value"],IC={class:"form-row-inline"},wC=["value"],EC={class:"form-actions"},CC=["disabled"],bC=["onClick"],TC={class:"shelf-section"},SC={class:"shelf-items"},RC=["onClick"],AC={class:"food-item-name"},kC={class:"food-item-details"},PC={class:"quantity"},NC=["onClick"],OC={key:0,class:"add-item-placeholder editing"},DC={class:"add-item-form-inline"},xC={class:"form-row-inline"},MC=["value"],LC={class:"form-row-inline"},FC=["value"],UC={class:"form-actions"},VC=["disabled"],WC=["onClick"],HC={class:"shelf-section"},BC={class:"shelf-items"},jC=["onClick"],qC={class:"food-item-name"},KC={class:"food-item-details"},GC={class:"quantity"},zC=["onClick"],$C={key:0,class:"add-item-placeholder editing"},YC={class:"add-item-form-inline"},JC={class:"form-row-inline"},QC=["value"],XC={class:"form-row-inline"},ZC=["value"],eb={class:"form-actions"},tb=["disabled"],nb=["onClick"],sb={key:1,class:"shopping-list-view",role:"region","aria-label":"Shopping list"},ib={class:"section-card"},rb={class:"shopping-list-container"},ob={key:0,class:"empty-list"},ab={key:1,class:"shopping-items"},lb=["onClick"],cb={class:"shopping-item-content"},ub={class:"shopping-item-name"},db={class:"shopping-item-details"},hb={class:"quantity"},fb={class:"location-tag"},pb={class:"location-icon"},gb={class:"color-picker-group"},_b={class:"modal-actions"},mb={class:"settings-content"},yb={class:"settings-section"},vb={class:"settings-header"},Ib={class:"settings-items"},wb={key:0,class:"edit-form"},Eb={class:"icon-picker"},Cb=["onClick"],bb={class:"edit-actions"},Tb={class:"item-icon"},Sb={class:"item-name"},Rb={class:"item-actions"},Ab=["onClick"],kb=["onClick"],Pb={class:"settings-section"},Nb={class:"settings-header"},Ob={class:"settings-items"},Db={key:0,class:"edit-form"},xb={class:"icon-picker"},Mb=["onClick"],Lb={class:"edit-actions"},Fb={class:"item-icon"},Ub={class:"item-name"},Vb={class:"item-actions"},Wb=["onClick"],Hb=["onClick"];function Bb(t,e,n,s,i,r){var a;const o=hp("AuthControls");return k(),P("div",{class:Ut(["app",{"dark-mode":i.isDarkMode}]),role:"main"},[i.firebase.currentUser?(k(),P(Q,{key:1},[Qe(o,{onAuthChanged:r.handleAuthChange},null,8,["onAuthChanged"]),g("div",QE,[g("header",XE,[g("div",ZE,[e[50]||(e[50]=g("h1",null,"Food Storage Manager",-1)),g("nav",eC,[g("button",{class:"view-toggle-btn",onClick:e[0]||(e[0]=(...l)=>r.toggleView&&r.toggleView(...l)),"aria-label":i.currentView==="inventory"?"View Shopping List":"View Inventory"},U(i.currentView==="inventory"?"🛒":"🏠"),9,tC),g("button",{class:"settings-btn",onClick:e[1]||(e[1]=(...l)=>r.toggleSettingsModal&&r.toggleSettingsModal(...l)),"aria-label":"Settings"}," ⚙️ "),g("button",{class:"theme-customize-btn",onClick:e[2]||(e[2]=(...l)=>r.toggleThemeCustomizer&&r.toggleThemeCustomizer(...l)),"aria-label":"Customize Theme"}," 🎨 "),g("button",{class:"theme-toggle",onClick:e[3]||(e[3]=(...l)=>r.toggleDarkMode&&r.toggleDarkMode(...l)),"aria-label":i.isDarkMode?"Switch to Light Mode":"Switch to Dark Mode"},U(i.isDarkMode?"🌞":"🌙"),9,nC)])])]),g("main",null,[i.currentView==="inventory"?(k(),P("div",sC,[g("div",iC,[g("div",rC,[(k(!0),P(Q,null,Ce(i.storageLocations,l=>(k(),P("div",{class:Ut(["location-card",[{selected:i.selectedLocation===l},l.name.toLowerCase()]]),key:l.id,onClick:c=>r.selectLocation(l)},[g("h2",null,[g("span",aC,U(l.icon),1),xt(U(l.name),1)]),g("div",lC,[g("div",cC,[e[52]||(e[52]=g("h4",null,"Top Shelf",-1)),g("div",uC,[(k(!0),P(Q,null,Ce(r.getShelfItems(l.items,"top"),c=>{var u;return k(),P("div",{key:c.id,class:Ut(["food-item",{"item-delete-animation":((u=i.itemToDelete)==null?void 0:u.item.id)===c.id}]),onClick:d=>r.moveToShoppingList(c,l)},[g("div",hC,U(c.name),1),g("div",fC,[g("span",{class:"category-tag",style:at({backgroundColor:r.getCategoryColor(c.category)})},U(r.getCategoryIcon(c.category))+" "+U(c.category),5),g("span",pC,U(c.quantity)+" "+U(c.unit),1)]),g("button",{class:"delete-btn",onClick:Ft(d=>r.deleteItem(c,l),["stop"]),title:"Delete Item"}," × ",8,gC)],10,dC)}),128)),i.editingItem.locationId===l.id&&i.editingItem.shelf==="top"?(k(),P("div",_C,[g("div",mC,[g("div",yC,[ce(g("input",{"onUpdate:modelValue":e[4]||(e[4]=c=>i.editingItem.item.name=c),placeholder:"Item name",class:"modern-input",onKeyup:e[5]||(e[5]=jr((...c)=>r.addItemToShelf&&r.addItemToShelf(...c),["enter"]))},null,544),[[ye,i.editingItem.item.name]]),ce(g("select",{"onUpdate:modelValue":e[6]||(e[6]=c=>i.editingItem.item.category=c),class:"modern-select"},[(k(!0),P(Q,null,Ce(i.categories,c=>(k(),P("option",{key:c.id,value:c.name},U(c.icon)+" "+U(c.name),9,vC))),128))],512),[[Rn,i.editingItem.item.category]])]),g("div",IC,[ce(g("input",{type:"number","onUpdate:modelValue":e[7]||(e[7]=c=>i.editingItem.item.quantity=c),min:"0",step:"0.1",class:"modern-input"},null,512),[[ye,i.editingItem.item.quantity]]),ce(g("select",{"onUpdate:modelValue":e[8]||(e[8]=c=>i.editingItem.item.unit=c),class:"modern-select"},[(k(!0),P(Q,null,Ce(i.units,c=>(k(),P("option",{key:c.value,value:c.value},U(c.label),9,wC))),128))],512),[[Rn,i.editingItem.item.unit]])]),g("div",EC,[g("button",{class:"modern-button danger",onClick:e[9]||(e[9]=(...c)=>r.cancelAddingItem&&r.cancelAddingItem(...c))},"Cancel"),g("button",{class:"modern-button",onClick:e[10]||(e[10]=(...c)=>r.addItemToShelf&&r.addItemToShelf(...c)),disabled:!i.editingItem.item.name.trim()}," Add Item ",8,CC)])])])):(k(),P("div",{key:1,class:"add-item-placeholder",onClick:c=>r.startAddingItem(l.id,"top")},e[51]||(e[51]=[g("div",{class:"placeholder-text"},[g("span",{class:"placeholder-icon"},"➕"),xt(" Add Item ")],-1)]),8,bC))])]),g("div",TC,[e[54]||(e[54]=g("h4",null,"Middle Shelf",-1)),g("div",SC,[(k(!0),P(Q,null,Ce(r.getShelfItems(l.items,"middle"),c=>{var u;return k(),P("div",{key:c.id,class:Ut(["food-item",{"item-delete-animation":((u=i.itemToDelete)==null?void 0:u.item.id)===c.id}]),onClick:d=>r.moveToShoppingList(c,l)},[g("div",AC,U(c.name),1),g("div",kC,[g("span",{class:"category-tag",style:at({backgroundColor:r.getCategoryColor(c.category)})},U(r.getCategoryIcon(c.category))+" "+U(c.category),5),g("span",PC,U(c.quantity)+" "+U(c.unit),1)]),g("button",{class:"delete-btn",onClick:Ft(d=>r.deleteItem(c,l),["stop"]),title:"Delete Item"}," × ",8,NC)],10,RC)}),128)),i.editingItem.locationId===l.id&&i.editingItem.shelf==="middle"?(k(),P("div",OC,[g("div",DC,[g("div",xC,[ce(g("input",{"onUpdate:modelValue":e[11]||(e[11]=c=>i.editingItem.item.name=c),placeholder:"Item name",class:"modern-input",onKeyup:e[12]||(e[12]=jr((...c)=>r.addItemToShelf&&r.addItemToShelf(...c),["enter"]))},null,544),[[ye,i.editingItem.item.name]]),ce(g("select",{"onUpdate:modelValue":e[13]||(e[13]=c=>i.editingItem.item.category=c),class:"modern-select"},[(k(!0),P(Q,null,Ce(i.categories,c=>(k(),P("option",{key:c.id,value:c.name},U(c.icon)+" "+U(c.name),9,MC))),128))],512),[[Rn,i.editingItem.item.category]])]),g("div",LC,[ce(g("input",{type:"number","onUpdate:modelValue":e[14]||(e[14]=c=>i.editingItem.item.quantity=c),min:"0",step:"0.1",class:"modern-input"},null,512),[[ye,i.editingItem.item.quantity]]),ce(g("select",{"onUpdate:modelValue":e[15]||(e[15]=c=>i.editingItem.item.unit=c),class:"modern-select"},[(k(!0),P(Q,null,Ce(i.units,c=>(k(),P("option",{key:c.value,value:c.value},U(c.label),9,FC))),128))],512),[[Rn,i.editingItem.item.unit]])]),g("div",UC,[g("button",{class:"modern-button danger",onClick:e[16]||(e[16]=(...c)=>r.cancelAddingItem&&r.cancelAddingItem(...c))},"Cancel"),g("button",{class:"modern-button",onClick:e[17]||(e[17]=(...c)=>r.addItemToShelf&&r.addItemToShelf(...c)),disabled:!i.editingItem.item.name.trim()}," Add Item ",8,VC)])])])):(k(),P("div",{key:1,class:"add-item-placeholder",onClick:c=>r.startAddingItem(l.id,"middle")},e[53]||(e[53]=[g("div",{class:"placeholder-text"},[g("span",{class:"placeholder-icon"},"➕"),xt(" Add Item ")],-1)]),8,WC))])]),g("div",HC,[e[56]||(e[56]=g("h4",null,"Bottom Shelf",-1)),g("div",BC,[(k(!0),P(Q,null,Ce(r.getShelfItems(l.items,"bottom"),c=>{var u;return k(),P("div",{key:c.id,class:Ut(["food-item",{"item-delete-animation":((u=i.itemToDelete)==null?void 0:u.item.id)===c.id}]),onClick:d=>r.moveToShoppingList(c,l)},[g("div",qC,U(c.name),1),g("div",KC,[g("span",{class:"category-tag",style:at({backgroundColor:r.getCategoryColor(c.category)})},U(r.getCategoryIcon(c.category))+" "+U(c.category),5),g("span",GC,U(c.quantity)+" "+U(c.unit),1)]),g("button",{class:"delete-btn",onClick:Ft(d=>r.deleteItem(c,l),["stop"]),title:"Delete Item"}," × ",8,zC)],10,jC)}),128)),i.editingItem.locationId===l.id&&i.editingItem.shelf==="bottom"?(k(),P("div",$C,[g("div",YC,[g("div",JC,[ce(g("input",{"onUpdate:modelValue":e[18]||(e[18]=c=>i.editingItem.item.name=c),placeholder:"Item name",class:"modern-input",onKeyup:e[19]||(e[19]=jr((...c)=>r.addItemToShelf&&r.addItemToShelf(...c),["enter"]))},null,544),[[ye,i.editingItem.item.name]]),ce(g("select",{"onUpdate:modelValue":e[20]||(e[20]=c=>i.editingItem.item.category=c),class:"modern-select"},[(k(!0),P(Q,null,Ce(i.categories,c=>(k(),P("option",{key:c.id,value:c.name},U(c.icon)+" "+U(c.name),9,QC))),128))],512),[[Rn,i.editingItem.item.category]])]),g("div",XC,[ce(g("input",{type:"number","onUpdate:modelValue":e[21]||(e[21]=c=>i.editingItem.item.quantity=c),min:"0",step:"0.1",class:"modern-input"},null,512),[[ye,i.editingItem.item.quantity]]),ce(g("select",{"onUpdate:modelValue":e[22]||(e[22]=c=>i.editingItem.item.unit=c),class:"modern-select"},[(k(!0),P(Q,null,Ce(i.units,c=>(k(),P("option",{key:c.value,value:c.value},U(c.label),9,ZC))),128))],512),[[Rn,i.editingItem.item.unit]])]),g("div",eb,[g("button",{class:"modern-button danger",onClick:e[23]||(e[23]=(...c)=>r.cancelAddingItem&&r.cancelAddingItem(...c))},"Cancel"),g("button",{class:"modern-button",onClick:e[24]||(e[24]=(...c)=>r.addItemToShelf&&r.addItemToShelf(...c)),disabled:!i.editingItem.item.name.trim()}," Add Item ",8,tb)])])])):(k(),P("div",{key:1,class:"add-item-placeholder",onClick:c=>r.startAddingItem(l.id,"bottom")},e[55]||(e[55]=[g("div",{class:"placeholder-text"},[g("span",{class:"placeholder-icon"},"➕"),xt(" Add Item ")],-1)]),8,nb))])])])],10,oC))),128))])])])):(k(),P("div",sb,[g("div",ib,[e[59]||(e[59]=g("h2",null,"Shopping List",-1)),g("div",rb,[i.shoppingList.length===0?(k(),P("div",ob,e[57]||(e[57]=[g("p",null,"Your shopping list is empty",-1),g("p",{class:"empty-hint"},"Click items in your inventory to add them here",-1)]))):(k(),P("div",ab,[(k(!0),P(Q,null,Ce(i.shoppingList,l=>{var c;return k(),P("div",{key:l.id,class:"shopping-item",onClick:u=>r.moveBackToInventory(l)},[g("div",cb,[g("div",ub,U(l.name),1),g("div",db,[g("span",{class:"category-tag",style:at({backgroundColor:r.getCategoryColor(l.category)})},U(r.getCategoryIcon(l.category))+" "+U(l.category),5),g("span",hb,U(l.quantity)+" "+U(l.unit),1)]),g("div",fb,[g("span",pb,U((c=i.storageLocations.find(u=>u.name===l.originalLocation))==null?void 0:c.icon),1),xt(" "+U(l.originalLocation),1)])]),e[58]||(e[58]=g("button",{class:"restore-btn",title:"Move back to inventory"}," ↩️ ",-1))],8,lb)}),128))]))])])]))]),i.showThemeCustomizer?(k(),P("div",{key:0,class:"modal-overlay",onClick:e[31]||(e[31]=l=>i.showThemeCustomizer=!1)},[g("div",{class:"modal-content theme-customizer",onClick:e[30]||(e[30]=Ft(()=>{},["stop"]))},[e[62]||(e[62]=g("h3",null,"Customize Theme",-1)),g("div",gb,[g("label",null,[e[60]||(e[60]=xt(" Accent Color ")),ce(g("input",{type:"color","onUpdate:modelValue":e[25]||(e[25]=l=>i.customTheme.accent=l),onInput:e[26]||(e[26]=(...l)=>r.updateTheme&&r.updateTheme(...l))},null,544),[[ye,i.customTheme.accent]])]),g("label",null,[e[61]||(e[61]=xt(" Secondary Color ")),ce(g("input",{type:"color","onUpdate:modelValue":e[27]||(e[27]=l=>i.customTheme.secondary=l),onInput:e[28]||(e[28]=(...l)=>r.updateTheme&&r.updateTheme(...l))},null,544),[[ye,i.customTheme.secondary]])])]),g("button",{class:"modern-button",onClick:e[29]||(e[29]=l=>i.showThemeCustomizer=!1)},"Close")])])):us("",!0),i.showDeleteModal?(k(),P("div",{key:1,class:"modal-overlay",onClick:e[35]||(e[35]=l=>i.showDeleteModal=!1)},[g("div",{class:"modal-content delete-modal",onClick:e[34]||(e[34]=Ft(()=>{},["stop"]))},[e[63]||(e[63]=g("h3",null,"Confirm Delete",-1)),g("p",null,'Are you sure you want to delete "'+U((a=i.itemToDelete)==null?void 0:a.item.name)+'"?',1),g("div",_b,[g("button",{class:"modern-button cancel-btn",onClick:e[32]||(e[32]=l=>i.showDeleteModal=!1)},"Cancel"),g("button",{class:"modern-button delete-confirm-btn",onClick:e[33]||(e[33]=(...l)=>r.confirmDelete&&r.confirmDelete(...l))},"Delete")])])])):us("",!0),i.showSettingsModal?(k(),P("div",{key:2,class:"modal-overlay",onClick:e[48]||(e[48]=(...l)=>r.toggleSettingsModal&&r.toggleSettingsModal(...l))},[g("div",{class:"modal-content settings-modal",onClick:e[47]||(e[47]=Ft(()=>{},["stop"]))},[e[66]||(e[66]=g("h3",null,"Settings",-1)),g("div",mb,[g("div",yb,[g("div",vb,[e[64]||(e[64]=g("h4",null,"Categories",-1)),g("button",{class:"modern-button small",onClick:e[36]||(e[36]=(...l)=>r.addNewCategory&&r.addNewCategory(...l))},"Add New")]),g("div",Ib,[(k(!0),P(Q,null,Ce(i.categories,l=>{var c;return k(),P("div",{key:l.id,class:"settings-item",style:at({borderColor:l.color})},[((c=i.editingCategory)==null?void 0:c.id)===l.id?(k(),P("div",wb,[ce(g("input",{"onUpdate:modelValue":e[37]||(e[37]=u=>i.editingCategory.name=u),class:"modern-input"},null,512),[[ye,i.editingCategory.name]]),g("div",Eb,[(k(!0),P(Q,null,Ce(i.defaultIcons.categories,u=>(k(),P("button",{key:u,class:"icon-btn",onClick:d=>i.editingCategory.icon=u},U(u),9,Cb))),128))]),ce(g("input",{type:"color","onUpdate:modelValue":e[38]||(e[38]=u=>i.editingCategory.color=u),class:"color-picker"},null,512),[[ye,i.editingCategory.color]]),g("div",bb,[g("button",{class:"modern-button small",onClick:e[39]||(e[39]=u=>r.saveEditing("category"))},"Save"),g("button",{class:"modern-button small danger",onClick:e[40]||(e[40]=u=>i.editingCategory=null)},"Cancel")])])):(k(),P(Q,{key:1},[g("span",Tb,U(l.icon),1),g("span",Sb,U(l.name),1),g("div",Rb,[g("button",{class:"action-btn",onClick:u=>r.startEditing(l,"category")},"✏️",8,Ab),l.name!=="Other"?(k(),P("button",{key:0,class:"action-btn",onClick:u=>r.deleteCategory(l)},"🗑️",8,kb)):us("",!0)])],64))],4)}),128))])]),g("div",Pb,[g("div",Nb,[e[65]||(e[65]=g("h4",null,"Storage Locations",-1)),g("button",{class:"modern-button small",onClick:e[41]||(e[41]=(...l)=>r.addNewLocation&&r.addNewLocation(...l))},"Add New")]),g("div",Ob,[(k(!0),P(Q,null,Ce(i.storageLocations,l=>{var c;return k(),P("div",{key:l.id,class:"settings-item",style:at({borderColor:l.color})},[((c=i.editingLocation)==null?void 0:c.id)===l.id?(k(),P("div",Db,[ce(g("input",{"onUpdate:modelValue":e[42]||(e[42]=u=>i.editingLocation.name=u),class:"modern-input"},null,512),[[ye,i.editingLocation.name]]),g("div",xb,[(k(!0),P(Q,null,Ce(i.defaultIcons.locations,u=>(k(),P("button",{key:u,class:"icon-btn",onClick:d=>i.editingLocation.icon=u},U(u),9,Mb))),128))]),ce(g("input",{type:"color","onUpdate:modelValue":e[43]||(e[43]=u=>i.editingLocation.color=u),class:"color-picker"},null,512),[[ye,i.editingLocation.color]]),g("div",Lb,[g("button",{class:"modern-button small",onClick:e[44]||(e[44]=u=>r.saveEditing("location"))},"Save"),g("button",{class:"modern-button small danger",onClick:e[45]||(e[45]=u=>i.editingLocation=null)},"Cancel")])])):(k(),P(Q,{key:1},[g("span",Fb,U(l.icon),1),g("span",Ub,U(l.name),1),g("div",Vb,[g("button",{class:"action-btn",onClick:u=>r.startEditing(l,"location")},"✏️",8,Wb),g("button",{class:"action-btn",onClick:u=>r.deleteLocation(l)},"🗑️",8,Hb)])],64))],4)}),128))])])]),g("button",{class:"modern-button",onClick:e[46]||(e[46]=(...l)=>r.toggleSettingsModal&&r.toggleSettingsModal(...l))},"Close")])])):us("",!0),i.showTooltip?(k(),P("div",{key:3,class:"tooltip",style:at({top:i.tooltipPosition.y+"px",left:i.tooltipPosition.x+"px"})},U(i.tooltipText),5)):us("",!0)])],64)):(k(),P(Q,{key:0},[e[49]||(e[49]=g("div",{class:"welcome-section",role:"region","aria-labelledby":"welcome-title"},[g("h1",{id:"welcome-title"},"Welcome to Food Storage Manager"),g("p",null,"Please sign in to manage your food inventory")],-1)),Qe(o,{onAuthChanged:r.handleAuthChange},null,8,["onAuthChanged"])],64))],2)}const jb=nf(JE,[["render",Bb]]);Ng(jb).mount("#app");
