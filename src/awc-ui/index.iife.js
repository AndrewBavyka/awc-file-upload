var index=function(i){"use strict";/**
  * @license
  * Copyright 2019 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */var Zo;const Se=globalThis,Ke=Se.ShadowRoot&&(Se.ShadyCSS===void 0||Se.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Xe=Symbol(),Br=new WeakMap;let Lr=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==Xe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ke&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=Br.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Br.set(e,t))}return t}toString(){return this.cssText}};const aa=a=>new Lr(typeof a=="string"?a:a+"",void 0,Xe),b=(a,...t)=>{const e=a.length===1?a[0]:t.reduce((o,r,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+a[s+1],a[0]);return new Lr(e,a,Xe)},ia=(a,t)=>{if(Ke)a.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const o=document.createElement("style"),r=Se.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=e.cssText,a.appendChild(o)}},Tr=Ke?a=>a:a=>a instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return aa(e)})(a):a;/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const{is:sa,defineProperty:na,getOwnPropertyDescriptor:ca,getOwnPropertyNames:la,getOwnPropertySymbols:da,getPrototypeOf:ua}=Object,$t=globalThis,Dr=$t.trustedTypes,ha=Dr?Dr.emptyScript:"",Ye=$t.reactiveElementPolyfillSupport,oe=(a,t)=>a,Oe={toAttribute(a,t){switch(t){case Boolean:a=a?ha:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,t){let e=a;switch(t){case Boolean:e=a!==null;break;case Number:e=a===null?null:Number(a);break;case Object:case Array:try{e=JSON.parse(a)}catch{e=null}}return e}},Je=(a,t)=>!sa(a,t),Mr={attribute:!0,type:String,converter:Oe,reflect:!1,hasChanged:Je};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$t.litPropertyMetadata??($t.litPropertyMetadata=new WeakMap);let Nt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Mr){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(t,o,e);r!==void 0&&na(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){const{get:r,set:s}=ca(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return r==null?void 0:r.call(this)},set(n){const d=r==null?void 0:r.call(this);s.call(this,n),this.requestUpdate(t,d,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Mr}static _$Ei(){if(this.hasOwnProperty(oe("elementProperties")))return;const t=ua(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(oe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(oe("properties"))){const e=this.properties,o=[...la(e),...da(e)];for(const r of o)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[o,r]of e)this.elementProperties.set(o,r)}this._$Eh=new Map;for(const[e,o]of this.elementProperties){const r=this._$Eu(e,o);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const r of o)e.unshift(Tr(r))}else t!==void 0&&e.push(Tr(t));return e}static _$Eu(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ia(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var o;return(o=e.hostConnected)==null?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var o;return(o=e.hostDisconnected)==null?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EC(t,e){var s;const o=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,o);if(r!==void 0&&o.reflect===!0){const n=(((s=o.converter)==null?void 0:s.toAttribute)!==void 0?o.converter:Oe).toAttribute(e,o.type);this._$Em=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){var s;const o=this.constructor,r=o._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const n=o.getPropertyOptions(r),d=typeof n.converter=="function"?{fromAttribute:n.converter}:((s=n.converter)==null?void 0:s.fromAttribute)!==void 0?n.converter:Oe;this._$Em=r,this[r]=d.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,o){if(t!==void 0){if(o??(o=this.constructor.getPropertyOptions(t)),!(o.hasChanged??Je)(this[t],e))return;this.P(t,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,o){this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,n]of r)n.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(o=this._$EO)==null||o.forEach(r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)}),this.update(e)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(o=>{var r;return(r=o.hostUpdated)==null?void 0:r.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}};Nt.elementStyles=[],Nt.shadowRootOptions={mode:"open"},Nt[oe("elementProperties")]=new Map,Nt[oe("finalized")]=new Map,Ye==null||Ye({ReactiveElement:Nt}),($t.reactiveElementVersions??($t.reactiveElementVersions=[])).push("2.0.4");/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const ae=globalThis,Ee=ae.trustedTypes,jr=Ee?Ee.createPolicy("lit-html",{createHTML:a=>a}):void 0,zr="$lit$",St=`lit$${Math.random().toFixed(9).slice(2)}$`,Rr="?"+St,pa=`<${Rr}>`,Mt=document,ie=()=>Mt.createComment(""),se=a=>a===null||typeof a!="object"&&typeof a!="function",Vr=Array.isArray,wa=a=>Vr(a)||typeof(a==null?void 0:a[Symbol.iterator])=="function",Qe=`[ 	
 \f\r]`,ne=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Fr=/-->/g,Gr=/>/g,jt=RegExp(`>|${Qe}(?:([^\\s"'>=/]+)(${Qe}*=${Qe}*(?:[^ 	
 \f\r"'\`<>=]|("|')|))|$)`,"g"),Ur=/'/g,Hr=/"/g,qr=/^(?:script|style|textarea|title)$/i,Nr=a=>(t,...e)=>({_$litType$:a,strings:t,values:e}),l=Nr(1),N=Nr(2),at=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),Wr=new WeakMap,zt=Mt.createTreeWalker(Mt,129);function Zr(a,t){if(!Array.isArray(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return jr!==void 0?jr.createHTML(t):t}const va=(a,t)=>{const e=a.length-1,o=[];let r,s=t===2?"<svg>":"",n=ne;for(let d=0;d<e;d++){const u=a[d];let p,h,v=-1,C=0;for(;C<u.length&&(n.lastIndex=C,h=n.exec(u),h!==null);)C=n.lastIndex,n===ne?h[1]==="!--"?n=Fr:h[1]!==void 0?n=Gr:h[2]!==void 0?(qr.test(h[2])&&(r=RegExp("</"+h[2],"g")),n=jt):h[3]!==void 0&&(n=jt):n===jt?h[0]===">"?(n=r??ne,v=-1):h[1]===void 0?v=-2:(v=n.lastIndex-h[2].length,p=h[1],n=h[3]===void 0?jt:h[3]==='"'?Hr:Ur):n===Hr||n===Ur?n=jt:n===Fr||n===Gr?n=ne:(n=jt,r=void 0);const m=n===jt&&a[d+1].startsWith("/>")?" ":"";s+=n===ne?u+pa:v>=0?(o.push(p),u.slice(0,v)+zr+u.slice(v)+St+m):u+St+(v===-2?d:m)}return[Zr(a,s+(a[e]||"<?>")+(t===2?"</svg>":"")),o]};class ce{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let s=0,n=0;const d=t.length-1,u=this.parts,[p,h]=va(t,e);if(this.el=ce.createElement(p,o),zt.currentNode=this.el.content,e===2){const v=this.el.content.firstChild;v.replaceWith(...v.childNodes)}for(;(r=zt.nextNode())!==null&&u.length<d;){if(r.nodeType===1){if(r.hasAttributes())for(const v of r.getAttributeNames())if(v.endsWith(zr)){const C=h[n++],m=r.getAttribute(v).split(St),E=/([.?@])?(.*)/.exec(C);u.push({type:1,index:s,name:E[2],strings:m,ctor:E[1]==="."?fa:E[1]==="?"?ba:E[1]==="@"?_a:Pe}),r.removeAttribute(v)}else v.startsWith(St)&&(u.push({type:6,index:s}),r.removeAttribute(v));if(qr.test(r.tagName)){const v=r.textContent.split(St),C=v.length-1;if(C>0){r.textContent=Ee?Ee.emptyScript:"";for(let m=0;m<C;m++)r.append(v[m],ie()),zt.nextNode(),u.push({type:2,index:++s});r.append(v[C],ie())}}}else if(r.nodeType===8)if(r.data===Rr)u.push({type:2,index:s});else{let v=-1;for(;(v=r.data.indexOf(St,v+1))!==-1;)u.push({type:7,index:s}),v+=St.length-1}s++}}static createElement(t,e){const o=Mt.createElement("template");return o.innerHTML=t,o}}function Wt(a,t,e=a,o){var n,d;if(t===at)return t;let r=o!==void 0?(n=e._$Co)==null?void 0:n[o]:e._$Cl;const s=se(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((d=r==null?void 0:r._$AO)==null||d.call(r,!1),s===void 0?r=void 0:(r=new s(a),r._$AT(a,e,o)),o!==void 0?(e._$Co??(e._$Co=[]))[o]=r:e._$Cl=r),r!==void 0&&(t=Wt(a,r._$AS(a,t.values),r,o)),t}class ga{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,r=((t==null?void 0:t.creationScope)??Mt).importNode(e,!0);zt.currentNode=r;let s=zt.nextNode(),n=0,d=0,u=o[0];for(;u!==void 0;){if(n===u.index){let p;u.type===2?p=new le(s,s.nextSibling,this,t):u.type===1?p=new u.ctor(s,u.name,u.strings,this,t):u.type===6&&(p=new ma(s,this,t)),this._$AV.push(p),u=o[++d]}n!==(u==null?void 0:u.index)&&(s=zt.nextNode(),n++)}return zt.currentNode=Mt,r}p(t){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class le{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,o,r){this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Wt(this,t,e),se(t)?t===z||t==null||t===""?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==at&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):wa(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==z&&se(this._$AH)?this._$AA.nextSibling.data=t:this.T(Mt.createTextNode(t)),this._$AH=t}$(t){var s;const{values:e,_$litType$:o}=t,r=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=ce.createElement(Zr(o.h,o.h[0]),this.options)),o);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(e);else{const n=new ga(r,this),d=n.u(this.options);n.p(e),this.T(d),this._$AH=n}}_$AC(t){let e=Wr.get(t.strings);return e===void 0&&Wr.set(t.strings,e=new ce(t)),e}k(t){Vr(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,r=0;for(const s of t)r===e.length?e.push(o=new le(this.S(ie()),this.S(ie()),this,this.options)):o=e[r],o._$AI(s),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class Pe{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,r,s){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=z}_$AI(t,e=this,o,r){const s=this.strings;let n=!1;if(s===void 0)t=Wt(this,t,e,0),n=!se(t)||t!==this._$AH&&t!==at,n&&(this._$AH=t);else{const d=t;let u,p;for(t=s[0],u=0;u<s.length-1;u++)p=Wt(this,d[o+u],e,u),p===at&&(p=this._$AH[u]),n||(n=!se(p)||p!==this._$AH[u]),p===z?t=z:t!==z&&(t+=(p??"")+s[u+1]),this._$AH[u]=p}n&&!r&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class fa extends Pe{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}}class ba extends Pe{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==z)}}class _a extends Pe{constructor(t,e,o,r,s){super(t,e,o,r,s),this.type=5}_$AI(t,e=this){if((t=Wt(this,t,e,0)??z)===at)return;const o=this._$AH,r=t===z&&o!==z||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==z&&(o===z||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class ma{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){Wt(this,t)}}const tr=ae.litHtmlPolyfillSupport;tr==null||tr(ce,le),(ae.litHtmlVersions??(ae.litHtmlVersions=[])).push("3.1.4");const ya=(a,t,e)=>{const o=(e==null?void 0:e.renderBefore)??t;let r=o._$litPart$;if(r===void 0){const s=(e==null?void 0:e.renderBefore)??null;o._$litPart$=r=new le(t.insertBefore(ie(),s),s,void 0,e??{})}return r._$AI(a),r};/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */class w extends Nt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ya(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return at}}w._$litElement$=!0,w.finalized=!0,(Zo=globalThis.litElementHydrateSupport)==null||Zo.call(globalThis,{LitElement:w});const er=globalThis.litElementPolyfillSupport;er==null||er({LitElement:w}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const g=a=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(a,t)}):customElements.define(a,t)};/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const Ca={attribute:!0,type:String,converter:Oe,reflect:!1,hasChanged:Je},Aa=(a=Ca,t,e)=>{const{kind:o,metadata:r}=e;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),s.set(e.name,a),o==="accessor"){const{name:n}=e;return{set(d){const u=t.get.call(this);t.set.call(this,d),this.requestUpdate(n,u,a)},init(d){return d!==void 0&&this.P(n,void 0,a),d}}}if(o==="setter"){const{name:n}=e;return function(d){const u=this[n];t.call(this,d),this.requestUpdate(n,u,a)}}throw Error("Unsupported decorator location: "+o)};function c(a){return(t,e)=>typeof e=="object"?Aa(a,t,e):((o,r,s)=>{const n=r.hasOwnProperty(s);return r.constructor.createProperty(s,n?{...o,wrapped:!0}:o),n?Object.getOwnPropertyDescriptor(r,s):void 0})(a,t,e)}/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */function U(a){return c({...a,state:!0,attribute:!1})}/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const Kr=(a,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(a,t,e),e);/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */function S(a,t){return(e,o,r)=>{const s=n=>{var d;return((d=n.renderRoot)==null?void 0:d.querySelector(a))??null};return Kr(e,o,{get(){return s(this)}})}}/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */let xa;function Xr(a){return(t,e)=>Kr(t,e,{get(){return(this.renderRoot??xa??(xa=document.createDocumentFragment())).querySelectorAll(a)}})}const ka=b`
     :host {
       display: flex;
       padding: 12px 0;
       box-sizing: border-box;
       font: var(--awc-font-text-regular-14);
       color: var(--colors-light-secondary);
       position: relative;
       cursor: pointer;
       max-width: max-content;
       transition: background-color 0.3s, color 0.3s, border-color 0.3s;
     }
 
     .awc-tab {
       display: flex;
       justify-content: center;
       align-items: center;
       gap: 8px;
     }
 
     :host(:hover) {
       color: var(--colors-light-text);
     }
 
     :host::before,
     :host::after {
       content: "";
       position: absolute;
       display: block;
       opacity: 0;
       bottom: 0;
       width: 100%;
       height: 2px;
       background-color: rgba(55, 97, 233, 0.35);
       border-radius: var(--corner-radius-m);
       transform-origin: 50% 100%;
       transition: 0.3s ease, transform 0.3s ease;
       transform: scaleX(0);
     }
 
     :host(:hover)::before,
     :host(:hover)::after {
       transition: width 0.3s, transform 0.3s ease; 
       opacity: 1;
       transform-origin: 50% 100%;
       transform: scaleX(1);
     }
 
     :host([active]),
     :host([active]:hover) {
       color: var(--colors-light-text);
     }
 
     :host([active])::before,
     :host([active])::after {
       opacity: 1;
       transform: scaleX(1);
       width: 100%;
       transition: width 0.3s ease, background-color 0.3s ease;
       background-color: var(--colors-light-primary);
     }
 
     :host([disabled]) {
       pointer-events: none;
       opacity: 0.5;
     }
 
     :host([hidden]) {
       display: none;
     }
 `;var $a=Object.defineProperty,Sa=Object.getOwnPropertyDescriptor,Yr=(a,t,e,o)=>{for(var r=o>1?void 0:o?Sa(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&$a(t,e,r),r};const rr="awc-tab";i.AwcTab=class extends w{constructor(){super(...arguments),this.active=!1}_handleTabClick(){this.active=!this.active,this._onChange()}_onChange(){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}render(){return l`
       <span class="awc-tab" ?active=${this.active} @click=${this._handleTabClick}><slot></slot></span>
     `}},i.AwcTab.styles=[ka],Yr([c({type:Boolean,reflect:!0})],i.AwcTab.prototype,"active",2),i.AwcTab=Yr([g(rr)],i.AwcTab);const Oa=b`
   :host {
     display: block;
   }
 
   .awc-tabs-container {
     display: flex;
     position: relative;
     justify-content: start;
     align-items: center;
     gap: 24px;
   }
 `;var Ea=Object.defineProperty,Pa=Object.getOwnPropertyDescriptor,Jr=(a,t,e,o)=>{for(var r=o>1?void 0:o?Pa(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&Ea(t,e,r),r};const Qr="awc-tabs-group";i.AwcTabsGroup=class extends w{constructor(){super(...arguments),this.noDivider=!1}get tabs(){return[...this.querySelectorAll(rr)]}_handleTabClick(t){const e=t.target;this.tabs.forEach(o=>{o.active=!1}),e.active=!0}render(){return l`
       <div class="awc-tabs-container" >
         <slot @click=${this._handleTabClick}></slot>
       </div>
       ${this.noDivider?"":l`<awc-divider spacing="none"></awc-divider>`}
     `}},i.AwcTabsGroup.styles=[Oa],Jr([c({type:Boolean,reflect:!0,attribute:"no-divider"})],i.AwcTabsGroup.prototype,"noDivider",2),i.AwcTabsGroup=Jr([g(Qr)],i.AwcTabsGroup);let to=!1;const eo=[];function Ia(a){to?a():eo.push(a)}document.addEventListener("DOMContentLoaded",()=>{to=!0,eo.forEach(a=>a())});const Ba=b`
   :host {
     width: 100%;
     display: inline-block;
     contain: content;
   }
 
   .awc-segment-switcher__item {
     cursor: pointer;
     display: flex;
     align-items: center;
     justify-content: center;
     font: var(--awc-font-caption-1-medium);
     height: 32px;
     text-align: center;
     text-decoration: none;
     margin: 0;
     border-radius: var(--corner-radius-s);
     color: var(--colors-light-text);
     transition: background-color .3s ease;
   }
 
   .awc-segment-switcher__item:hover{
     background-color: rgba(0, 0, 0, 0.07);
   }
 
   .awc-segment-switcher__item:active{
     background-color: rgba(0, 0, 0, 0.1);
   }
 
   :host([active]) .awc-segment-switcher__item {
     transition: background-color 0.4s ease;
     color: var(--colors-light-titles);
     background-color: var(--colors-light-white);
     border-radius: var(--corner-radius-s);
   }
 `;/**
  * @license
  * Copyright 2018 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const R=a=>a??z;function La(a,t){return function(e,o){const r=new CustomEvent(t,{detail:e,bubbles:!0,cancelable:!1,composed:!0,...o});return a.dispatchEvent(r),r}}function k(a){return(t,e)=>{Object.defineProperty(t,e,{get(){return La(this,a||e)},enumerable:!0,configurable:!0})}}var Ta=Object.defineProperty,Da=Object.getOwnPropertyDescriptor,de=(a,t,e,o)=>{for(var r=o>1?void 0:o?Da(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&Ta(t,e,r),r};const Ma="awc-segment-switcher-item";i.AwcSegmentSwitcherItem=class extends w{constructor(){super(...arguments),this.active=!1,this.target="_self"}update(t){super.update(t),t.has("active")&&this.active&&(this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this._handleActiveItem())}_handleActiveItem(){this._onChangeActive(this.active)}render(){return this.href?l`
       <a
         class="awc-segment-switcher__item"
         href="${R(this.href)}"
         target=${R(this.target)}
         @change="${this._handleActiveItem}"
       >
         <slot></slot>
       </a>
     `:l`
       <div
         class="awc-segment-switcher__item"
         @change="${this._handleActiveItem}"
       >
         <slot></slot>
       </div>
     `}},i.AwcSegmentSwitcherItem.styles=[Ba],de([c({type:String,reflect:!0})],i.AwcSegmentSwitcherItem.prototype,"href",2),de([c({type:Boolean,reflect:!0})],i.AwcSegmentSwitcherItem.prototype,"active",2),de([c({reflect:!0})],i.AwcSegmentSwitcherItem.prototype,"target",2),de([k("awc-segment-item-change")],i.AwcSegmentSwitcherItem.prototype,"_onChangeActive",2),i.AwcSegmentSwitcherItem=de([g("awc-segment-switcher-item")],i.AwcSegmentSwitcherItem);const ja=b`
     :host{
         display: inline-block;
         width: 100%;
     }
 
     .awc-segment-switcher {
         position: relative;
         display: grid;
         grid-template-columns: repeat(auto-fit, minmax(32px, 1fr));
         justify-content: space-between;
         align-items: center;
         border-radius: var(--corner-radius-s);
         background-color: var(--colors-light-stroke);
         overflow: hidden;
         padding: 2px;
     }
 
     .slider {
         position: absolute;
         height: 32px;
         background-color: var(--colors-light-white);
         border-radius: var(--corner-radius-s);
         transition: transform .3s ease;
     }
 `;var za=Object.defineProperty,Ra=Object.getOwnPropertyDescriptor,Ie=(a,t,e,o)=>{for(var r=o>1?void 0:o?Ra(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&za(t,e,r),r};i.AwcSegmentSwitcher=class extends w{constructor(){super(...arguments),this.sliderPosition=0,this.sliderWidth=0}get segmentSwitcherItems(){return[...this.querySelectorAll(Ma)]}connectedCallback(){super.connectedCallback(),Ia(()=>{requestAnimationFrame(()=>this.updateSliderPosition())});const t=new MutationObserver(e=>{e.forEach(o=>{o.type==="attributes"&&o.attributeName==="active"&&this.updateSliderPosition()})});this.segmentSwitcherItems.forEach(e=>{t.observe(e,{attributes:!0})})}updated(t){super.updated(t),(t.has("sliderPosition")||t.has("sliderWidth"))&&this._toggleSliderVisibility()}handleSegmentItemClick(t){const e=t.target;e&&!e.active&&(this.segmentSwitcherItems.forEach(o=>o.active=!1),e.active=!0,this._setSliderPositionToActiveItem(e))}_setSliderPositionToActiveItem(t){this.segmentSwitcherItems.forEach(e=>e.active=!1),t.active=!0,t.active&&(this.sliderPosition=t.offsetLeft,this.sliderWidth=t.offsetWidth)}_toggleSliderVisibility(){this._slider&&(this._slider.addEventListener("transitionstart",()=>{this._slider.style.visibility="visible",this._slider.style.opacity="1"}),this._slider.addEventListener("transitionend",()=>{this._slider.style.visibility="hidden",this._slider.style.opacity="0"}))}updateSliderPosition(){const t=this.querySelector("awc-segment-switcher-item[active]");if(t){const e=t.getBoundingClientRect(),o=this.getBoundingClientRect();this.sliderPosition=e.left-o.left,this.sliderWidth=t.offsetWidth}}handleSegmentActive(t){const e=t.target;this.segmentSwitcherItems.forEach(o=>{o!==e&&o.active&&(o.active=!1)})}render(){return l`
       <div class='awc-segment-switcher'>
       <div class="slider" style="transform: translateX(${this.sliderPosition}px); width: ${this.sliderWidth}px;"></div>
         <slot 
         @click="${this.handleSegmentItemClick}"
         @awc-segment-item-change="${this.handleSegmentActive}"
         ></slot>
       </div>
     `}},i.AwcSegmentSwitcher.styles=[ja],Ie([U()],i.AwcSegmentSwitcher.prototype,"sliderPosition",2),Ie([U()],i.AwcSegmentSwitcher.prototype,"sliderWidth",2),Ie([S(".slider")],i.AwcSegmentSwitcher.prototype,"_slider",2),i.AwcSegmentSwitcher=Ie([g("awc-segment-switcher")],i.AwcSegmentSwitcher);const Va=b`
   :host {
     display: block;
 
     --awc-alert-background-primary: #2a8ce31a;
     --awc-alert-background-warning: #ff71881a;
     --awc-alert-background-success: #24b8871a;
     --awc-alert-background-attention: #fd90381a;
 
     --awc-alert-text-primary: var(--global-cyan-500);
     --awc-alert-text-warning: var(--global-red-400);
     --awc-alert-text-success: var(--global-green-500);
     --awc-alert-text-attention: var(--global-orange-400);
   }
 
   :host([variant="message"]) {
     border-radius: 0 var(--corner-radius-m) var(--corner-radius-m)
       var(--corner-radius-m);
   }
 
   :host([variant="block"]) {
     border-radius: var(--corner-radius-m);
   }
 
   :host([color="primary"]) {
     background-color: var(--awc-alert-background-primary);
     color: var(--awc-alert-text-primary);
   }
 
   :host([color="warning"]) {
     background-color: var(--awc-alert-background-warning);
     color: var(--awc-alert-text-warning);
   }
 
   :host([color="success"]) {
     background-color: var(--awc-alert-background-success);
     color: var(--awc-alert-text-success);
   }
 
   :host([color="attention"]) {
     background-color: var(--awc-alert-background-attention);
     color: var(--awc-alert-text-attention);
   }
 
   .awc-alert {
     padding: 12px 16px;
     text-align: start;
     word-wrap: break-word;
     overflow-wrap: break-word;
     font: var(--awc-font-text-regular-14);
   }
 
   .awc-alert__title {
     margin: 0;
     padding: 0;
   }
 `;var Fa=Object.defineProperty,Ga=Object.getOwnPropertyDescriptor,or=(a,t,e,o)=>{for(var r=o>1?void 0:o?Ga(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&Fa(t,e,r),r};i.AwcAlert=class extends w{constructor(){super(...arguments),this.color="primary",this.variant="block"}render(){return l`
       <div class="awc-alert">
         <p class="awc-alert__title"><slot></slot></p>
       </div>
     `}},i.AwcAlert.styles=[Va],or([c({type:String,reflect:!0})],i.AwcAlert.prototype,"color",2),or([c({type:String,reflect:!0})],i.AwcAlert.prototype,"variant",2),i.AwcAlert=or([g("awc-alert")],i.AwcAlert);const Ua=b`
   :host {
     display: inline-flex;
   }
 
   .awc-avatar-container {
     text-decoration: none;
     position: relative;
     display: inline-block;
   }
 
   :host([sliced]) {
     margin-left: calc(-1 * var(--spacing-s)) !important;
   }
 
   :host([sliced]) .awc-avatar-container {
     border: 2px solid var(--colors-light-white);
     border-radius: 50%;
   }
 
   :host([hidden]) {
     display: none;
   }
   
   .awc-avatar {
     position: relative;
     display: flex;
     overflow: hidden;
   }
 
   .awc-avatar__status {
     position: absolute;
     bottom: 0;
     right: 0;
     display: flex;
   }
 
   .awc-avatar-status__wrapper {
     display: flex;
     align-items: center;
     justify-content: center;
     border-radius: 99px;
     width: 100%;
     height: 100%;
     background-color: white; 
     box-sizing: border-box;
   }
 
   .awc-avatar__online {
     background-color: var(--global-light-green-500);
     width: 100%;
     height: 100%;
     border-radius: 99px;
   }
 
   .awc-avatar__offline {
     background-color: var(--colors-light-avatar-offline);
     width: 100%;
     height: 100%;
     border-radius: 99px;
   }
 
   .awc-avatar__none {
     display: none;
   }
 
   .awc-avatar--image{
     display: flex;
     width: 100%;
     height: 100%;
     object-fit: cover;
   }
 
   /* .awc-avatar-status__wrapper.awc-avatar__fail {
     background-color: red;
   } */
 
   .awc-avatar__current {
     display: block;
     position: relative;
     border-radius: var(--corner-radius-circular);
     border: 2px solid var(--colors-light-white);
     transition: background-color 0.3s ease-in-out;
   }
 
   /* Rounded */
   .awc-avatar.circle {
     border-radius: var(--corner-radius-circular);
   }
 
   .awc-avatar.square {
     border-radius: var(--corner-radius-l);
   }
 
   /* Size */
   .awc-avatar.size_24 {
     width: 24px;
     height: 24px;
   }
 
   .awc-avatar.size_24 + .awc-avatar__status .awc-avatar__current {
     width: 5px;
     height: 5px;
   }
 
   .awc-avatar.size_24 + .awc-avatar__status .awc-avatar__status--icon{
     width: 10px;
     height: 10px;
   }
 
   .awc-avatar.size_32 {
     width: 32px;
     height: 32px;
   }
 
   .awc-avatar.size_32 + .awc-avatar__status .awc-avatar__current {
     width: 7px;
     height: 7px;
   }
 
   .awc-avatar.size_36 {
     width: 36px;
     height: 36px;
   }
 
   .awc-avatar.size_36 + .awc-avatar__status .awc-avatar__current {
     width: 7px;
     height: 7px;
   }
 
   .awc-avatar.size_40 {
     width: 40px;
     height: 40px;
   }
 
   .awc-avatar.size_40 + .awc-avatar__status .awc-avatar__current {
     width: 8px;
     height: 8px;
   }
 
   .awc-avatar.size_32 + .awc-avatar__status .awc-avatar__status--icon,
   .awc-avatar.size_36 + .awc-avatar__status .awc-avatar__status--icon,
   .awc-avatar.size_40 + .awc-avatar__status .awc-avatar__status--icon {
     width: 14px;
     height: 14px;
   }
 
   .awc-avatar.size_48 {
     width: 48px;
     height: 48px;
   }
 
   .awc-avatar.size_48 + .awc-avatar__status .awc-avatar__current {
     width: 8px;
     height: 8px;
   }
 
   .awc-avatar.size_48 + .awc-avatar__status .awc-avatar__status--icon {
     width: 16px;
     height: 16px;
   }
 
   .awc-avatar.size_128 {
     width: 128px;
     height: 128px;
   }
 
   .awc-avatar.size_128 + .awc-avatar__status .awc-avatar__current {
     width: 24px;
     height: 24px;
     border: 6px solid var(--colors-light-white);
   }
 
   .awc-avatar.size_128 + .awc-avatar__status .awc-avatar__status--icon {
     width: 36px;
     height: 36px;
   }
 
   .awc-avatar.size_160 {
     width: 160px;
     height: 160px;
   }
 
   .awc-avatar.size_160 + .awc-avatar__status .awc-avatar__current {
     width: 40px;
     height: 40px;
     border: 6px solid var(--colors-light-white);
   }
 
   .awc-avatar.size_160 + .awc-avatar__status .awc-avatar__status--icon {
     width: 40px;
     height: 40px;
   }
 
   .awc-avatar span {
     background-color: var(--awc-avatar-custom-color);
     width: 100%;
     color: white;
     display: flex;
     justify-content: center;
     align-items: center;
   }
 
   .awc-avatar--no-image {
     cursor: not-allowed;
     pointer-events: none;
   }
 
   .awc-avatar--no-image svg{
     max-width: 85%;
     height: 100%;
   }
 
   .awc-avatar--no-image.group,
   .awc-avatar--no-image.user {
     background-color: #f2f3fa;
     fill: #91a2b6;
   }
 
   .awc-avatar--no-image.deleted {
     background-color: #919BB6;
     fill: var(--colors-light-white);
   }
 
   .awc-avatar--no-image.anonymous {
     background-color: var(--colors-light-titles);
     fill: var(--colors-light-white);
   }
 
   .awc-avatar--no-image.anonymous svg,
   .awc-avatar--no-image.deleted svg{
     max-width: 50%;
     max-height: 50%;
   }
 
   .awc-avatar--no-image.group svg,
   .awc-avatar--no-image.user svg{
     max-width: 67%;
     max-height: 67%;
   }
 
   .awc-avatar--no-image.robot {
     background-color: #8DADD0;
     fill: var(--colors-light-white);
   }
 
   .awc-avatar--no-image.undefinded {
     background-color: #919BB6A3;
     fill: var(--colors-light-white);
   }
 
   .awc-avatar--no-image.undefinded svg{
     width: 34%;
   }
 
   /* title size */
   .awc-avatar.size_24 .awc-avatar--no-image {
     font: var(--awc-font-text-medium-14);
   }
 
   .awc-avatar.size_32 .awc-avatar--no-image {
     font: var(--awc-font-h5-medium);
   }
   .awc-avatar.size_36 .awc-avatar--no-image {
     font: 500 20px/24px "Inter";
   }
 
   .awc-avatar.size_40 .awc-avatar--no-image {
     font: var(--awc-font-h4-medium);
   }
 
   .awc-avatar.size_48 .awc-avatar--no-image {
     font: var(--awc-font-h3-medium);
   }
 
   .awc-avatar.size_128 .awc-avatar--no-image {
     font: var(--awc-font-h2-medium);
   }
 
   .awc-avatar.size_160 .awc-avatar--no-image {
     font: var(--awc-font-h1-medium);
   }
 `;/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const Ot={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ar=a=>(...t)=>({_$litDirective$:a,values:t});class ir{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
  * @license
  * Copyright 2018 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const Y=ar(class extends ir{constructor(a){var t;if(super(a),a.type!==Ot.ATTRIBUTE||a.name!=="class"||((t=a.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(a){return" "+Object.keys(a).filter(t=>a[t]).join(" ")+" "}update(a,[t]){var o,r;if(this.st===void 0){this.st=new Set,a.strings!==void 0&&(this.nt=new Set(a.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!((o=this.nt)!=null&&o.has(s))&&this.st.add(s);return this.render(t)}const e=a.element.classList;for(const s of this.st)s in t||(e.remove(s),this.st.delete(s));for(const s in t){const n=!!t[s];n===this.st.has(s)||(r=this.nt)!=null&&r.has(s)||(n?(e.add(s),this.st.add(s)):(e.remove(s),this.st.delete(s)))}return at}});var Ha=Object.defineProperty,qa=Object.getOwnPropertyDescriptor,J=(a,t,e,o)=>{for(var r=o>1?void 0:o?qa(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&Ha(t,e,r),r},ro=(a=>(a.size24="24",a.size32="32",a.size36="36",a.size40="40",a.size48="48",a.size128="128",a.size160="160",a))(ro||{}),oo=(a=>(a.GlobalRed2600="global-red-2-600",a.GlobalRed2500="global-red-2-500",a.GlobalOrange500="global-orange-500",a.GlobalYellow500="global-yellow-500",a.GlobalYellow300="global-yellow-300",a.GlobalLightGreen400="global-light-green-400",a.GlobalLightGreen600="global-light-green-600",a.GlobalGreen600="global-green-600",a.GlobalGreen300="global-green-300",a.GlobalTurquoise300="global-turquoise-300",a.GlobalTurquoise400="global-turquoise-400",a.GlobalCyan300="global-cyan-300",a.GlobalCyan500="global-cyan-500",a.GlobalBlue600="global-blue-600",a.GlobalBlue400="global-blue-400",a.GlobalDeepPurple400="global-deep-purple-400",a.GlobalDeepPurple600="global-deep-purple-600",a.GlobalPurple600="global-purple-600",a.GlobalPurple400="global-purple-400",a.GlobalRed500="global-red-500",a.GlobalRed400="global-red-400",a.ColorsLightSecondary="colors-light-secondary",a.ColorsLightText="colors-light-text",a.ColorsLightDarkBlue="colors-light-dark-blue",a))(oo||{}),ao=(a=>(a.none="none",a.robot="robot",a.user="user",a.group="group",a.deleted="deleted",a.anonymous="anonymous",a.undefinded="undefinded",a))(ao||{});const Na={anonymous:N`
   <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
     <path fill-rule="evenodd" clip-rule="evenodd" d="M1.71336 5.65322L2.57606 1.31676C2.85923 -0.10662 4.72235 -0.476455 5.52771 0.730849C5.79228 1.12745 6.37513 1.12745 6.63969 0.730849C7.44506 -0.476454 9.30818 -0.106622 9.59135 1.31676L10.4624 5.69495C10.6961 5.75171 10.9288 5.81295 11.1603 5.87864L11.6511 6.01788C11.9062 6.09023 12.0543 6.35563 11.9819 6.61066C11.9095 6.86569 11.6442 7.01378 11.3891 6.94143L10.8983 6.80219C9.73953 6.47345 8.5506 6.2622 7.34949 6.17164C6.45119 6.10391 5.54906 6.10391 4.65075 6.17164C3.44965 6.2622 2.26071 6.47345 1.10193 6.80219L0.611127 6.94143C0.356094 7.01378 0.0906973 6.86569 0.018346 6.61066C-0.0540052 6.35563 0.0940872 6.09023 0.34912 6.01788L0.83992 5.87864C1.12936 5.79653 1.42059 5.72137 1.71336 5.65322ZM7.43831 1.26359C7.76887 0.768059 8.53357 0.919854 8.6498 1.50407L9.44006 5.47641C8.77288 5.35296 8.09911 5.26544 7.42167 5.21436C6.47532 5.143 5.52493 5.143 4.57858 5.21436C3.95977 5.26102 3.34402 5.33808 2.73356 5.44516L3.51761 1.50407C3.63384 0.919854 4.39854 0.76806 4.7291 1.26359C5.37369 2.22987 6.79372 2.22987 7.43831 1.26359Z" fill="white"/>
     <path fill-rule="evenodd" clip-rule="evenodd" d="M0.960123 9.83963C0.960123 8.6467 1.92719 7.67963 3.12012 7.67963C4.14809 7.67963 5.00833 8.39772 5.2266 9.35963H6.77365C6.99192 8.39772 7.85216 7.67963 8.88012 7.67963C10.0731 7.67963 11.0401 8.6467 11.0401 9.83963C11.0401 11.0326 10.0731 11.9996 8.88012 11.9996C7.85216 11.9996 6.99192 11.2815 6.77365 10.3196H5.2266C5.00833 11.2815 4.14809 11.9996 3.12012 11.9996C1.92719 11.9996 0.960123 11.0326 0.960123 9.83963ZM3.12012 8.63963C2.45738 8.63963 1.92012 9.17689 1.92012 9.83963C1.92012 10.5024 2.45738 11.0396 3.12012 11.0396C3.78286 11.0396 4.32012 10.5024 4.32012 9.83963C4.32012 9.17689 3.78286 8.63963 3.12012 8.63963ZM7.68012 9.83963C7.68012 9.17689 8.21738 8.63963 8.88012 8.63963C9.54286 8.63963 10.0801 9.17689 10.0801 9.83963C10.0801 10.5024 9.54286 11.0396 8.88012 11.0396C8.21738 11.0396 7.68012 10.5024 7.68012 9.83963Z" fill="white"/>
   </svg>`,deleted:N`
   <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
     <path fill-rule="evenodd" clip-rule="evenodd" d="M6.00004 0.96C6.8616 0.96 7.56004 1.65844 7.56004 2.52C7.56004 3.38156 6.8616 4.08 6.00004 4.08C5.13847 4.08 4.44004 3.38156 4.44004 2.52C4.44004 1.65844 5.13847 0.96 6.00004 0.96ZM8.52004 2.52C8.52004 1.12824 7.3918 0 6.00004 0C4.60828 0 3.48004 1.12824 3.48004 2.52C3.48004 3.91176 4.60828 5.04 6.00004 5.04C7.3918 5.04 8.52004 3.91176 8.52004 2.52ZM8.04004 6.48C8.04004 6.2149 7.82514 6 7.56004 6H4.44004C2.51809 6 0.96004 7.55805 0.96004 9.48V10.02C0.96004 11.1135 1.84652 12 2.94004 12H5.52004C5.78514 12 6.00004 11.7851 6.00004 11.52C6.00004 11.2549 5.78514 11.04 5.52004 11.04H2.94004C2.37671 11.04 1.92004 10.5833 1.92004 10.02V9.48C1.92004 8.08824 3.04828 6.96 4.44004 6.96H7.56004C7.82514 6.96 8.04004 6.7451 8.04004 6.48ZM10.899 8.85936C11.0865 8.67188 11.0864 8.36796 10.8989 8.18054C10.7114 7.99311 10.4075 7.99316 10.2201 8.18064L9.05939 9.34172L7.89934 8.18243C7.71183 7.99504 7.40791 7.99514 7.22052 8.18265C7.03313 8.37016 7.03323 8.67408 7.22074 8.86147L8.38067 10.0207L7.22104 11.1806C7.03362 11.3681 7.03367 11.672 7.22115 11.8595C7.40863 12.0469 7.71255 12.0468 7.89997 11.8594L9.05971 10.6993L10.2207 11.8595C10.4083 12.0469 10.7122 12.0468 10.8996 11.8593C11.087 11.6718 11.0869 11.3679 10.8993 11.1805L9.73843 10.0203L10.899 8.85936Z" fill="white"/>
   </svg>
   `,robot:N`
   <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
       <path fill-rule="evenodd" clip-rule="evenodd" d="M5 8C5 6.34315 6.34315 5 8 5H16C17.6569 5 19 6.34315 19 8V16C19 17.6569 17.6569 19 16 19H8C6.34315 19 5 17.6569 5 16V8ZM8 7C7.44772 7 7 7.44772 7 8V16C7 16.5523 7.44772 17 8 17H16C16.5523 17 17 16.5523 17 16V8C17 7.44772 16.5523 7 16 7H8Z" fill="white"/>
       <path d="M7 15C5.34315 15 4 13.6569 4 12C4 10.3431 5.34315 9 7 9C7 11 7 13 7 15Z" fill="white"/>
       <path d="M17 15C18.6569 15 20 13.6569 20 12C20 10.3431 18.6569 9 17 9C17 11 17 13 17 15Z" fill="white"/>
       <path d="M15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C11 7 13 7 15 7Z" fill="white"/>
       <rect x="9" y="13" width="6" height="2" rx="1" fill="white"/>
       <circle cx="10" cy="10" r="1" fill="white"/>
       <circle cx="14" cy="10" r="1" fill="white"/>
   </svg>
   `,user:N`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"/></svg>`,group:N`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M110.5-205v-86q0-25 11.75-45.25T155.5-369q53-31 112-47.75T390-433.5q63.5 0 122.25 16.75T624-369q21.5 12.5 33.25 32.75T669-291v86H110.5Zm629 0v-85q0-41.5-19.25-75.75T669-421.5q36.5 8 70.75 20.75t65.75 32.25Q826-357 837.75-336t11.75 46v85h-110ZM390-479q-58 0-98-40t-40-98q0-58 40-98t98-40q58 0 98 40t40 98q0 58-40 98t-98 40Zm318-138.5q0 57.5-40 97.75t-98 40.25q-6.5 0-12.25-.25T545-482q24.5-27.5 38.75-61.5t14.25-74q0-39.5-14.25-73.75T545-753q6.5-1.5 12.5-1.75T570-755q58 0 98 40t40 97.5Z"/></svg>`,undefinded:N`<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25799 2.02428C3.28688 1.85771 2.2515 2.45517 1.94312 3.33182C1.75985 3.85281 1.18893 4.12658 0.667941 3.94331C0.146952 3.76004 -0.126822 3.18912 0.0564498 2.66813C0.706862 0.819198 2.7195 -0.268818 4.59611 0.0530702C6.39616 0.361827 8.01237 2.04641 8.00978 4.00091C8.00934 5.53127 6.87472 6.5419 6.06448 7.08206C5.62885 7.37248 5.20034 7.58602 4.88467 7.72632L4.32601 7.94869C3.80207 8.12334 3.23575 7.84018 3.0611 7.31623C2.88657 6.79264 3.16924 6.22672 3.69251 6.05167C3.82132 6.00646 3.94769 5.95412 4.0724 5.89869C4.31923 5.78899 4.64072 5.62753 4.95508 5.41795C5.64468 4.95822 6.00978 4.46914 6.00978 4.00001L6.00979 3.99852C6.0111 3.11391 5.19369 2.18478 4.25799 2.02428ZM2.99978 11C2.99978 10.4477 3.4475 10 3.99978 10H4.00978C4.56207 10 5.00978 10.4477 5.00978 11C5.00978 11.5523 4.56207 12 4.00978 12H3.99978C3.4475 12 2.99978 11.5523 2.99978 11Z" fill="white"/>
   </svg>
   `},io="awc-avatar";i.AwcAvatar=class extends w{constructor(){super(...arguments),this.size="36",this.rounded="circle",this.status="none",this.color="global-blue-400",this.target="_self",this.icon="none",this.sliced=!1,this.hidden=!1}_trimAvatarCharacter(t){if(this.title)return this.title.length>1?(this._croppedTitle=t.split("").shift(),this._croppedTitle):t}_setColorOrImage(){const t=this._trimAvatarCharacter(this.title);if(this.imageLink)return l`<img
         class="awc-avatar--image"
         src="${this.imageLink}"
       />`;if(this.icon&&Object.values(ao).includes(this.icon)&&this.icon!=="none")return l`<span
         class="awc-avatar--no-image ${this.icon}"
         >${Na[this.icon]}</span
       >`;if(this.color&&!this.customColor)return l`<span
         style="background-color: var(--${this.color})"
         class="awc-avatar--no-image"
         >${t}</span
       >`;if(this.color&&this.customColor||this.customColor&&!this.color)return l`<span
         style="--awc-avatar-custom-color: ${this.customColor}"
         class="awc-avatar--no-image"
         >${t}</span
       >`}render(){const t={"awc-avatar-container":!0},e=N`
     <svg class="awc-avatar__status--icon" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
       <rect x="1" y="1" width="12" height="12" rx="6" fill="#35D3AC" stroke="white" stroke-width="2"/>
       <path d="M5 7L6.5 8.5L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     </svg>`,o=N`
     <svg class="awc-avatar__status--icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
       <rect x="1" y="1" width="14" height="14" rx="7" fill="#FF7188" stroke="white" stroke-width="2"/>
       <path d="M5.5 5.5L8 8M10.5 10.5L8 8M8 8L5.5 10.5M8 8L10.5 5.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
     </svg>
     `;return this.href?l`
     <a href=${this.href} target=${this.target} class=${Y(t)}>
         <div class="awc-avatar size_${this.size} ${this.rounded}">
           ${this._setColorOrImage()}
         </div>
 
         ${this.status!=="none"?l`
               <div class="awc-avatar__status">
                 ${this.status==="online"||this.status==="offline"?l` <div class="awc-avatar-status__wrapper">
                       <div class="awc-avatar__current">
                         <div class="awc-avatar__${this.status}"></div>
                       </div>
                     </div>`:""}
                 ${this.status==="complete"?l`${e}`:""}
                 ${this.status==="fail"?l`${o}`:""}
               </div>
             `:l``}
       </a>
     `:l`
     <div class=${Y(t)}>
         <div class="awc-avatar size_${this.size} ${this.rounded}">
           ${this._setColorOrImage()}
         </div>
 
         ${this.status!=="none"?l`
               <div class="awc-avatar__status">
                 ${this.status==="online"||this.status==="offline"?l` <div class="awc-avatar-status__wrapper">
                       <div class="awc-avatar__current">
                         <div class="awc-avatar__${this.status}"></div>
                       </div>
                     </div>`:""}
                 ${this.status==="complete"?l`${e}`:""}
                 ${this.status==="fail"?l`${o}`:""}
               </div>
             `:l``}
       </div>
     `}},i.AwcAvatar.styles=[Ua],J([c({type:String,reflect:!0})],i.AwcAvatar.prototype,"size",2),J([c({type:String,reflect:!0})],i.AwcAvatar.prototype,"rounded",2),J([c({type:String,reflect:!0})],i.AwcAvatar.prototype,"status",2),J([c({type:String,reflect:!0})],i.AwcAvatar.prototype,"color",2),J([c({type:String,reflect:!0})],i.AwcAvatar.prototype,"title",2),J([c({type:String,attribute:"image-link"})],i.AwcAvatar.prototype,"imageLink",2),J([c({type:String,reflect:!0})],i.AwcAvatar.prototype,"href",2),J([c({type:String})],i.AwcAvatar.prototype,"target",2),J([c({type:String,reflect:!0,attribute:"custom-color"})],i.AwcAvatar.prototype,"customColor",2),J([c({type:String,reflect:!0})],i.AwcAvatar.prototype,"icon",2),J([c({type:Boolean,reflect:!0})],i.AwcAvatar.prototype,"sliced",2),J([c({type:Boolean,reflect:!0})],i.AwcAvatar.prototype,"hidden",2),J([U()],i.AwcAvatar.prototype,"_croppedTitle",2),i.AwcAvatar=J([g(io)],i.AwcAvatar);const Wa=b`
     :host {
       display: inline-flex;
     }
 
     .awc-avatar-group {
       display: inline-flex;;
       align-items: center;
     }
    
     .awc-avatar-group__counter {
       display: block;
       position: relative;
       z-index: 1;
       margin-left: -10px;
       display: flex;
       min-width: 24px;
       height: 24px;
       font: var(--awc-font-caption-2-regular);
       align-items: center;
       justify-content: center;
       background-color: var(--colors-light-secondary);
     }
 
     ::slotted([slot="awc-avatar-group-counter"] ) { 
       margin-left: -10px !important;
     }
 
     .awc-avatar-group__counter p {
       color: var(--colors-light-white);
     }
 
     .awc-avatar-group__counter.circle {
       border-radius: var(--corner-radius-circular);
       border: 2px solid var(--colors-light-white);
     }
 
     .awc-avatar-group__counter.size_24 {
       width: 24px;
       height: 24px;
     }
 
     .awc-avatar-group__counter.size_24 p {
       font: var(--awc-font-caption-2-regular);
     }
 
     .awc-avatar-group__counter.size_32 {
       width: 32px;
       height: 32px;
     }
 
     .awc-avatar-group__counter.size_32 p {
       font: var(--awc-font-caption-1-regular);
     }
 
     .awc-avatar-group__counter.hidden{
       display: none;
     }
 `,Za=b`
   :host {
     display: inline-flex;
   }
 
   .awc-avatar-group__counter {
     position: relative;
     z-index: 1;
     display: flex;
     min-width: 24px;
     height: 24px;
     font: var(--awc-font-caption-2-regular);
     align-items: center;
     justify-content: center;
     background-color: var(--colors-light-secondary);
   }
 
   .awc-avatar-group__counter p {
     margin: 0;
     color: var(--colors-light-white);
   }
 
   .awc-avatar-group__counter.circle {
     border-radius: var(--corner-radius-circular);
     border: 2px solid var(--colors-light-white);
   }
 
   .awc-avatar-group__counter.size_24 {
     width: 24px;
     height: 24px;
   }
 
   .awc-avatar-group__counter.size_24 p {
     font: var(--awc-font-caption-2-regular);
   }
 
   .awc-avatar-group__counter.size_32 {
     width: 32px;
     height: 32px;
   }
 
   .awc-avatar-group__counter.size_32 p {
     font: var(--awc-font-caption-1-regular);
   }
 `;var Ka=Object.defineProperty,Xa=Object.getOwnPropertyDescriptor,Be=(a,t,e,o)=>{for(var r=o>1?void 0:o?Xa(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&Ka(t,e,r),r};const so="awc-avatar-group-counter";i.AwcAvatarGroupCounter=class extends w{constructor(){super(...arguments),this.totalUsers=0,this.counterSize="24",this.counterRounded="circle"}render(){return l`
             <div class="awc-avatar-group__counter size_${this.counterSize} ${this.counterRounded}">
                 <p>+${this.totalUsers}</p>
             </div>
         `}},i.AwcAvatarGroupCounter.styles=[Za],Be([c({type:Number,attribute:"total-users"})],i.AwcAvatarGroupCounter.prototype,"totalUsers",2),Be([c({type:String,attribute:"counter-size"})],i.AwcAvatarGroupCounter.prototype,"counterSize",2),Be([c({attribute:"counter-rounded"})],i.AwcAvatarGroupCounter.prototype,"counterRounded",2),i.AwcAvatarGroupCounter=Be([g(so)],i.AwcAvatarGroupCounter);var Ya=Object.defineProperty,Ja=Object.getOwnPropertyDescriptor,Rt=(a,t,e,o)=>{for(var r=o>1?void 0:o?Ja(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&Ya(t,e,r),r};const Qa="awc-avatar-group";i.AwcAvatarGroup=class extends w{constructor(){super(...arguments),this.displayUsers=2,this.totalUsers=0,this.counterSize="24",this.counterRounded="circle",this._counterValue=0,this._counterHidden=!1}get avatars(){return Array.from(this.querySelectorAll(io))}get avatarCounter(){return this.querySelector(so)}_updateDisplayedUsers(){var e,o;const t=(o=(e=this.shadowRoot)==null?void 0:e.querySelector("slot"))==null?void 0:o.assignedElements();t&&t.forEach((r,s)=>{r.hidden=s>=this.displayUsers})}_updateCounterValue(){this.avatarCounter?this._counterHidden=this._counterValue===0:(this._counterValue=Math.max(0,this.totalUsers-this.displayUsers),this._counterHidden=this._counterValue===0)}_applySliceEffect(){var e,o;const t=(o=(e=this.shadowRoot)==null?void 0:e.querySelector("slot"))==null?void 0:o.assignedElements();t&&t.forEach((r,s)=>{r.sliced=s!==0})}connectedCallback(){super.connectedCallback(),document.addEventListener("DOMContentLoaded",()=>{this._applySliceEffect(),this._updateDisplayedUsers(),this._updateCounterValue()})}updated(t){(t.has("displayUsers")||t.has("totalUsers"))&&(this._updateDisplayedUsers(),this._updateCounterValue()),this._applySliceEffect()}render(){return l`
       <div class="awc-avatar-group">
         <slot></slot>
         ${this._counterHidden?"":l`
           <div class="awc-avatar-group__counter size_${this.counterSize} ${this.counterRounded}">
             <p>+${this._counterValue}</p>
           </div>`}
             <slot name="awc-avatar-group-counter"></slot>
       </div>
     `}},i.AwcAvatarGroup.styles=[Wa],Rt([c({type:Number,attribute:"display-users"})],i.AwcAvatarGroup.prototype,"displayUsers",2),Rt([c({type:Number,attribute:"total-users"})],i.AwcAvatarGroup.prototype,"totalUsers",2),Rt([c({type:String,attribute:"counter-size"})],i.AwcAvatarGroup.prototype,"counterSize",2),Rt([c({type:String,attribute:"counter-rounded"})],i.AwcAvatarGroup.prototype,"counterRounded",2),Rt([U()],i.AwcAvatarGroup.prototype,"_counterValue",2),Rt([U()],i.AwcAvatarGroup.prototype,"_counterHidden",2),i.AwcAvatarGroup=Rt([g(Qa)],i.AwcAvatarGroup);const ti=b`
     :host {
       display: inline-block;
       contain: content;
     }
 
     :host .awc-badge {
       content: "";
       display: block;
       width: 6px;
       height: 6px;
       border-radius: var(--corner-radius-circular);
     }
 
     .awc-badge.warning {
       background-color: var(--colors-light-warning);
     }
 
     .awc-badge.primary {
       background-color: var(--colors-light-primary);
     }
 `;var ei=Object.defineProperty,ri=Object.getOwnPropertyDescriptor,no=(a,t,e,o)=>{for(var r=o>1?void 0:o?ri(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&ei(t,e,r),r};i.AwcBadge=class extends w{constructor(){super(...arguments),this.color="primary"}render(){return l` <span class="awc-badge ${this.color}"></span> `}},i.AwcBadge.styles=[ti],no([c({type:String,reflect:!0})],i.AwcBadge.prototype,"color",2),i.AwcBadge=no([g("awc-badge")],i.AwcBadge);const oi=b`
     :host {
       display: block;
       contain: content;
       max-width: max-content;
     }
 
     .awc-counter {
       content: "";
       font: var(--awc-font-caption-3-regular);
       display: flex;
       align-items: center;
       justify-content: center;
       color: var(--colors-light-white);
       background-color: var(--colors-light-primary);
       padding: 0 4px;
       min-width: 8px;
       height: 16px;
       border-radius: var(--corner-radius-circular);
     }
 
     .awc-counter.more::after {
       content: "+";
       display: block;
     }
 
     .awc-counter.none {
       display: none;
     }
 `;var ai=Object.defineProperty,ii=Object.getOwnPropertyDescriptor,co=(a,t,e,o)=>{for(var r=o>1?void 0:o?ii(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&ai(t,e,r),r};i.AwcCounter=class extends w{constructor(){super(...arguments),this.value=1}_checkMaxValue(){return!Number.isInteger(this.value)||this.value<=0?"":this.value>99?"99+":this.value.toString()}update(t){super.update(t),this._checkMaxValue()}render(){const t=this._checkMaxValue();return l`
       <span class="awc-counter" value=${this.value}>${t}</span>
     `}},i.AwcCounter.styles=[oi],co([c({type:Number,reflect:!0})],i.AwcCounter.prototype,"value",2),i.AwcCounter=co([g("awc-counter")],i.AwcCounter);const si=b`
     :host {
       display: inline-flex;
     }
 
     .awc-toolbar-button {
         position: relative;
         cursor: pointer;
         border: 1px solid transparent;
         max-width: max-content;
         display: flex;
         align-items: center;
         justify-content: center;
         padding: 6px;
         background-color: transparent;
         border-radius: var(--corner-radius-s);
         transition: border .3s ease-in-out, background-color .3s ease;
         max-width: 36px;
         max-height: 36px;
     }
 
     .awc-toolbar-button:hover{
         transition: background-color .3s ease;
         background-color: rgba(5, 35, 125, 0.05);
     }
 
     .awc-toolbar-button:active{
         transition: background-color .3s ease;
         background-color: rgba(5, 35, 125, 0.08);
     }
 
     .awc-toolbar-button:focus{
         outline: none;
     }
 
     .awc-toolbar-button:focus-visible{
         outline: none;
         border: 1px solid var(--colors-light-focus);
         transition: background-color .3s ease;
         background-color: rgba(5, 35, 125, 0.05);
     }
 
     /* .awc-toolbar-button:focus-visible::before{
         content: "";
         position: absolute;
         inset: -3px;
         border: 3px solid #839ff633;
         pointer-events: none;
         border-radius: var(--corner-radius-m);
     } */
 `;var ni=Object.defineProperty,ci=Object.getOwnPropertyDescriptor,li=(a,t,e,o)=>{for(var r=o>1?void 0:o?ci(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&ni(t,e,r),r};i.AwcToolbarButton=class extends w{render(){return l`
       <button
         type="button"
         tabindex="0" 
         class="awc-toolbar-button">
         <slot></slot>
       </button>
     `}},i.AwcToolbarButton.styles=[si],i.AwcToolbarButton=li([g("awc-toolbar-button")],i.AwcToolbarButton);const di=b`
     :host {
       display: inline-block;
     }
 
     .awc-toolbar-group{
       display: flex;
       align-items: center;
       justify-content: flex-start;
       gap: 8px;
     }
 `;var ui=Object.defineProperty,hi=Object.getOwnPropertyDescriptor,pi=(a,t,e,o)=>{for(var r=o>1?void 0:o?hi(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&ui(t,e,r),r};i.AwcToolbarGroup=class extends w{render(){return l`
       <div class='awc-toolbar-group'>
             <slot></slot>
       </div>
     `}},i.AwcToolbarGroup.styles=[di],i.AwcToolbarGroup=pi([g("awc-toolbar-group")],i.AwcToolbarGroup);const wi=b`
   :host {
     display: var(--awc-dropdown-display, inline-flex);
   }
 
   .awc-dropdown, .awc-dropdown__nested {
     display: inherit;
   }
 
   awc-dropdown-list {
     display: none;
     position: absolute;
     max-height: 300px;
     overflow: hidden;
     z-index: 999999;
     box-shadow: var(--effects-hover-block);
     border-radius: var(--corner-radius-m);
     background-color: var(--colors-light-white);
   }
 
   awc-dropdown-list[visible] {
     display: block;
     overflow-y: auto;
   }
 
   awc-dropdown-list[scroll-off] {
     overflow-y: clip;
     max-height: max-content;
   }
 `,Zt=b`
   * ::-webkit-scrollbar {
     display: block;
     height: 10px;
     width: 10px;
     background-color: rgba(0, 0, 0, 0);
     z-index: 99;
   }
 
   * ::-webkit-scrollbar-button {
     display: none;
     width: 0;
     height: 0;
   }
 
   * ::-webkit-scrollbar-corner {
     background-color: transparent;
   }
 
   * ::-webkit-scrollbar-thumb {
     height: 40px;
     border: 3px solid rgba(0, 0, 0, 0) ;
     background-clip: padding-box;
     background-color: rgba(0, 0, 0, 0.2) ;
     -webkit-border-radius: 7px;
     transition: background-color 0.2s;
   }
 
   * ::-webkit-scrollbar-thumb:hover {
     background-color: #3761e959;
   }
 `;var Q="top",it="bottom",st="right",tt="left",sr="auto",ue=[Q,it,st,tt],Kt="start",he="end",vi="clippingParents",lo="viewport",pe="popper",gi="reference",uo=ue.reduce(function(a,t){return a.concat([t+"-"+Kt,t+"-"+he])},[]),ho=[].concat(ue,[sr]).reduce(function(a,t){return a.concat([t,t+"-"+Kt,t+"-"+he])},[]),fi="beforeRead",bi="read",_i="afterRead",mi="beforeMain",yi="main",Ci="afterMain",Ai="beforeWrite",xi="write",ki="afterWrite",$i=[fi,bi,_i,mi,yi,Ci,Ai,xi,ki];function wt(a){return a?(a.nodeName||"").toLowerCase():null}function rt(a){if(a==null)return window;if(a.toString()!=="[object Window]"){var t=a.ownerDocument;return t&&t.defaultView||window}return a}function Vt(a){var t=rt(a).Element;return a instanceof t||a instanceof Element}function nt(a){var t=rt(a).HTMLElement;return a instanceof t||a instanceof HTMLElement}function nr(a){if(typeof ShadowRoot>"u")return!1;var t=rt(a).ShadowRoot;return a instanceof t||a instanceof ShadowRoot}function Si(a){var t=a.state;Object.keys(t.elements).forEach(function(e){var o=t.styles[e]||{},r=t.attributes[e]||{},s=t.elements[e];!nt(s)||!wt(s)||(Object.assign(s.style,o),Object.keys(r).forEach(function(n){var d=r[n];d===!1?s.removeAttribute(n):s.setAttribute(n,d===!0?"":d)}))})}function Oi(a){var t=a.state,e={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,e.popper),t.styles=e,t.elements.arrow&&Object.assign(t.elements.arrow.style,e.arrow),function(){Object.keys(t.elements).forEach(function(o){var r=t.elements[o],s=t.attributes[o]||{},n=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:e[o]),d=n.reduce(function(u,p){return u[p]="",u},{});!nt(r)||!wt(r)||(Object.assign(r.style,d),Object.keys(s).forEach(function(u){r.removeAttribute(u)}))})}}const Ei={name:"applyStyles",enabled:!0,phase:"write",fn:Si,effect:Oi,requires:["computeStyles"]};function vt(a){return a.split("-")[0]}var Ft=Math.max,Le=Math.min,Xt=Math.round;function cr(){var a=navigator.userAgentData;return a!=null&&a.brands&&Array.isArray(a.brands)?a.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function po(){return!/^((?!chrome|android).)*safari/i.test(cr())}function Yt(a,t,e){t===void 0&&(t=!1),e===void 0&&(e=!1);var o=a.getBoundingClientRect(),r=1,s=1;t&&nt(a)&&(r=a.offsetWidth>0&&Xt(o.width)/a.offsetWidth||1,s=a.offsetHeight>0&&Xt(o.height)/a.offsetHeight||1);var n=Vt(a)?rt(a):window,d=n.visualViewport,u=!po()&&e,p=(o.left+(u&&d?d.offsetLeft:0))/r,h=(o.top+(u&&d?d.offsetTop:0))/s,v=o.width/r,C=o.height/s;return{width:v,height:C,top:h,right:p+v,bottom:h+C,left:p,x:p,y:h}}function lr(a){var t=Yt(a),e=a.offsetWidth,o=a.offsetHeight;return Math.abs(t.width-e)<=1&&(e=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:a.offsetLeft,y:a.offsetTop,width:e,height:o}}function wo(a,t){var e=t.getRootNode&&t.getRootNode();if(a.contains(t))return!0;if(e&&nr(e)){var o=t;do{if(o&&a.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function ft(a){return rt(a).getComputedStyle(a)}function Pi(a){return["table","td","th"].indexOf(wt(a))>=0}function Et(a){return((Vt(a)?a.ownerDocument:a.document)||window.document).documentElement}function Te(a){return wt(a)==="html"?a:a.assignedSlot||a.parentNode||(nr(a)?a.host:null)||Et(a)}function vo(a){return!nt(a)||ft(a).position==="fixed"?null:a.offsetParent}function Ii(a){var t=/firefox/i.test(cr()),e=/Trident/i.test(cr());if(e&&nt(a)){var o=ft(a);if(o.position==="fixed")return null}var r=Te(a);for(nr(r)&&(r=r.host);nt(r)&&["html","body"].indexOf(wt(r))<0;){var s=ft(r);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||t&&s.willChange==="filter"||t&&s.filter&&s.filter!=="none")return r;r=r.parentNode}return null}function we(a){for(var t=rt(a),e=vo(a);e&&Pi(e)&&ft(e).position==="static";)e=vo(e);return e&&(wt(e)==="html"||wt(e)==="body"&&ft(e).position==="static")?t:e||Ii(a)||t}function dr(a){return["top","bottom"].indexOf(a)>=0?"x":"y"}function ve(a,t,e){return Ft(a,Le(t,e))}function Bi(a,t,e){var o=ve(a,t,e);return o>e?e:o}function go(){return{top:0,right:0,bottom:0,left:0}}function fo(a){return Object.assign({},go(),a)}function bo(a,t){return t.reduce(function(e,o){return e[o]=a,e},{})}var Li=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,fo(typeof t!="number"?t:bo(t,ue))};function Ti(a){var t,e=a.state,o=a.name,r=a.options,s=e.elements.arrow,n=e.modifiersData.popperOffsets,d=vt(e.placement),u=dr(d),p=[tt,st].indexOf(d)>=0,h=p?"height":"width";if(!(!s||!n)){var v=Li(r.padding,e),C=lr(s),m=u==="y"?Q:tt,E=u==="y"?it:st,x=e.rects.reference[h]+e.rects.reference[u]-n[u]-e.rects.popper[h],$=n[u]-e.rects.reference[u],B=we(s),D=B?u==="y"?B.clientHeight||0:B.clientWidth||0:0,j=x/2-$/2,A=v[m],f=D-C[h]-v[E],_=D/2-C[h]/2+j,y=ve(A,_,f),O=u;e.modifiersData[o]=(t={},t[O]=y,t.centerOffset=y-_,t)}}function Di(a){var t=a.state,e=a.options,o=e.element,r=o===void 0?"[data-popper-arrow]":o;r!=null&&(typeof r=="string"&&(r=t.elements.popper.querySelector(r),!r)||wo(t.elements.popper,r)&&(t.elements.arrow=r))}const Mi={name:"arrow",enabled:!0,phase:"main",fn:Ti,effect:Di,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Jt(a){return a.split("-")[1]}var ji={top:"auto",right:"auto",bottom:"auto",left:"auto"};function zi(a,t){var e=a.x,o=a.y,r=t.devicePixelRatio||1;return{x:Xt(e*r)/r||0,y:Xt(o*r)/r||0}}function _o(a){var t,e=a.popper,o=a.popperRect,r=a.placement,s=a.variation,n=a.offsets,d=a.position,u=a.gpuAcceleration,p=a.adaptive,h=a.roundOffsets,v=a.isFixed,C=n.x,m=C===void 0?0:C,E=n.y,x=E===void 0?0:E,$=typeof h=="function"?h({x:m,y:x}):{x:m,y:x};m=$.x,x=$.y;var B=n.hasOwnProperty("x"),D=n.hasOwnProperty("y"),j=tt,A=Q,f=window;if(p){var _=we(e),y="clientHeight",O="clientWidth";if(_===rt(e)&&(_=Et(e),ft(_).position!=="static"&&d==="absolute"&&(y="scrollHeight",O="scrollWidth")),_=_,r===Q||(r===tt||r===st)&&s===he){A=it;var L=v&&_===f&&f.visualViewport?f.visualViewport.height:_[y];x-=L-o.height,x*=u?1:-1}if(r===tt||(r===Q||r===it)&&s===he){j=st;var M=v&&_===f&&f.visualViewport?f.visualViewport.width:_[O];m-=M-o.width,m*=u?1:-1}}var V=Object.assign({position:d},p&&ji),K=h===!0?zi({x:m,y:x},rt(e)):{x:m,y:x};if(m=K.x,x=K.y,u){var W;return Object.assign({},V,(W={},W[A]=D?"0":"",W[j]=B?"0":"",W.transform=(f.devicePixelRatio||1)<=1?"translate("+m+"px, "+x+"px)":"translate3d("+m+"px, "+x+"px, 0)",W))}return Object.assign({},V,(t={},t[A]=D?x+"px":"",t[j]=B?m+"px":"",t.transform="",t))}function Ri(a){var t=a.state,e=a.options,o=e.gpuAcceleration,r=o===void 0?!0:o,s=e.adaptive,n=s===void 0?!0:s,d=e.roundOffsets,u=d===void 0?!0:d,p={placement:vt(t.placement),variation:Jt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,_o(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:n,roundOffsets:u})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,_o(Object.assign({},p,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Vi={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Ri,data:{}};var De={passive:!0};function Fi(a){var t=a.state,e=a.instance,o=a.options,r=o.scroll,s=r===void 0?!0:r,n=o.resize,d=n===void 0?!0:n,u=rt(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&p.forEach(function(h){h.addEventListener("scroll",e.update,De)}),d&&u.addEventListener("resize",e.update,De),function(){s&&p.forEach(function(h){h.removeEventListener("scroll",e.update,De)}),d&&u.removeEventListener("resize",e.update,De)}}const Gi={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Fi,data:{}};var Ui={left:"right",right:"left",bottom:"top",top:"bottom"};function Me(a){return a.replace(/left|right|bottom|top/g,function(t){return Ui[t]})}var Hi={start:"end",end:"start"};function mo(a){return a.replace(/start|end/g,function(t){return Hi[t]})}function ur(a){var t=rt(a),e=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:e,scrollTop:o}}function hr(a){return Yt(Et(a)).left+ur(a).scrollLeft}function qi(a,t){var e=rt(a),o=Et(a),r=e.visualViewport,s=o.clientWidth,n=o.clientHeight,d=0,u=0;if(r){s=r.width,n=r.height;var p=po();(p||!p&&t==="fixed")&&(d=r.offsetLeft,u=r.offsetTop)}return{width:s,height:n,x:d+hr(a),y:u}}function Ni(a){var t,e=Et(a),o=ur(a),r=(t=a.ownerDocument)==null?void 0:t.body,s=Ft(e.scrollWidth,e.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),n=Ft(e.scrollHeight,e.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),d=-o.scrollLeft+hr(a),u=-o.scrollTop;return ft(r||e).direction==="rtl"&&(d+=Ft(e.clientWidth,r?r.clientWidth:0)-s),{width:s,height:n,x:d,y:u}}function pr(a){var t=ft(a),e=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(e+r+o)}function yo(a){return["html","body","#document"].indexOf(wt(a))>=0?a.ownerDocument.body:nt(a)&&pr(a)?a:yo(Te(a))}function ge(a,t){var e;t===void 0&&(t=[]);var o=yo(a),r=o===((e=a.ownerDocument)==null?void 0:e.body),s=rt(o),n=r?[s].concat(s.visualViewport||[],pr(o)?o:[]):o,d=t.concat(n);return r?d:d.concat(ge(Te(n)))}function wr(a){return Object.assign({},a,{left:a.x,top:a.y,right:a.x+a.width,bottom:a.y+a.height})}function Wi(a,t){var e=Yt(a,!1,t==="fixed");return e.top=e.top+a.clientTop,e.left=e.left+a.clientLeft,e.bottom=e.top+a.clientHeight,e.right=e.left+a.clientWidth,e.width=a.clientWidth,e.height=a.clientHeight,e.x=e.left,e.y=e.top,e}function Co(a,t,e){return t===lo?wr(qi(a,e)):Vt(t)?Wi(t,e):wr(Ni(Et(a)))}function Zi(a){var t=ge(Te(a)),e=["absolute","fixed"].indexOf(ft(a).position)>=0,o=e&&nt(a)?we(a):a;return Vt(o)?t.filter(function(r){return Vt(r)&&wo(r,o)&&wt(r)!=="body"}):[]}function Ki(a,t,e,o){var r=t==="clippingParents"?Zi(a):[].concat(t),s=[].concat(r,[e]),n=s[0],d=s.reduce(function(u,p){var h=Co(a,p,o);return u.top=Ft(h.top,u.top),u.right=Le(h.right,u.right),u.bottom=Le(h.bottom,u.bottom),u.left=Ft(h.left,u.left),u},Co(a,n,o));return d.width=d.right-d.left,d.height=d.bottom-d.top,d.x=d.left,d.y=d.top,d}function Ao(a){var t=a.reference,e=a.element,o=a.placement,r=o?vt(o):null,s=o?Jt(o):null,n=t.x+t.width/2-e.width/2,d=t.y+t.height/2-e.height/2,u;switch(r){case Q:u={x:n,y:t.y-e.height};break;case it:u={x:n,y:t.y+t.height};break;case st:u={x:t.x+t.width,y:d};break;case tt:u={x:t.x-e.width,y:d};break;default:u={x:t.x,y:t.y}}var p=r?dr(r):null;if(p!=null){var h=p==="y"?"height":"width";switch(s){case Kt:u[p]=u[p]-(t[h]/2-e[h]/2);break;case he:u[p]=u[p]+(t[h]/2-e[h]/2);break}}return u}function fe(a,t){t===void 0&&(t={});var e=t,o=e.placement,r=o===void 0?a.placement:o,s=e.strategy,n=s===void 0?a.strategy:s,d=e.boundary,u=d===void 0?vi:d,p=e.rootBoundary,h=p===void 0?lo:p,v=e.elementContext,C=v===void 0?pe:v,m=e.altBoundary,E=m===void 0?!1:m,x=e.padding,$=x===void 0?0:x,B=fo(typeof $!="number"?$:bo($,ue)),D=C===pe?gi:pe,j=a.rects.popper,A=a.elements[E?D:C],f=Ki(Vt(A)?A:A.contextElement||Et(a.elements.popper),u,h,n),_=Yt(a.elements.reference),y=Ao({reference:_,element:j,strategy:"absolute",placement:r}),O=wr(Object.assign({},j,y)),L=C===pe?O:_,M={top:f.top-L.top+B.top,bottom:L.bottom-f.bottom+B.bottom,left:f.left-L.left+B.left,right:L.right-f.right+B.right},V=a.modifiersData.offset;if(C===pe&&V){var K=V[r];Object.keys(M).forEach(function(W){var F=[st,it].indexOf(W)>=0?1:-1,pt=[Q,it].indexOf(W)>=0?"y":"x";M[W]+=K[pt]*F})}return M}function Xi(a,t){t===void 0&&(t={});var e=t,o=e.placement,r=e.boundary,s=e.rootBoundary,n=e.padding,d=e.flipVariations,u=e.allowedAutoPlacements,p=u===void 0?ho:u,h=Jt(o),v=h?d?uo:uo.filter(function(E){return Jt(E)===h}):ue,C=v.filter(function(E){return p.indexOf(E)>=0});C.length===0&&(C=v);var m=C.reduce(function(E,x){return E[x]=fe(a,{placement:x,boundary:r,rootBoundary:s,padding:n})[vt(x)],E},{});return Object.keys(m).sort(function(E,x){return m[E]-m[x]})}function Yi(a){if(vt(a)===sr)return[];var t=Me(a);return[mo(a),t,mo(t)]}function Ji(a){var t=a.state,e=a.options,o=a.name;if(!t.modifiersData[o]._skip){for(var r=e.mainAxis,s=r===void 0?!0:r,n=e.altAxis,d=n===void 0?!0:n,u=e.fallbackPlacements,p=e.padding,h=e.boundary,v=e.rootBoundary,C=e.altBoundary,m=e.flipVariations,E=m===void 0?!0:m,x=e.allowedAutoPlacements,$=t.options.placement,B=vt($),D=B===$,j=u||(D||!E?[Me($)]:Yi($)),A=[$].concat(j).reduce(function(re,Dt){return re.concat(vt(Dt)===sr?Xi(t,{placement:Dt,boundary:h,rootBoundary:v,padding:p,flipVariations:E,allowedAutoPlacements:x}):Dt)},[]),f=t.rects.reference,_=t.rects.popper,y=new Map,O=!0,L=A[0],M=0;M<A.length;M++){var V=A[M],K=vt(V),W=Jt(V)===Kt,F=[Q,it].indexOf(K)>=0,pt=F?"width":"height",G=fe(t,{placement:V,boundary:h,rootBoundary:v,altBoundary:C,padding:p}),dt=F?W?st:tt:W?it:Q;f[pt]>_[pt]&&(dt=Me(dt));var Tt=Me(dt),Ut=[];if(s&&Ut.push(G[K]<=0),d&&Ut.push(G[dt]<=0,G[Tt]<=0),Ut.every(function(re){return re})){L=V,O=!1;break}y.set(V,Ut)}if(O)for(var qe=E?3:1,Or=function(Dt){var $e=A.find(function(We){var Ht=y.get(We);if(Ht)return Ht.slice(0,Dt).every(function(Er){return Er})});if($e)return L=$e,"break"},ke=qe;ke>0;ke--){var Ne=Or(ke);if(Ne==="break")break}t.placement!==L&&(t.modifiersData[o]._skip=!0,t.placement=L,t.reset=!0)}}const Qi={name:"flip",enabled:!0,phase:"main",fn:Ji,requiresIfExists:["offset"],data:{_skip:!1}};function xo(a,t,e){return e===void 0&&(e={x:0,y:0}),{top:a.top-t.height-e.y,right:a.right-t.width+e.x,bottom:a.bottom-t.height+e.y,left:a.left-t.width-e.x}}function ko(a){return[Q,st,it,tt].some(function(t){return a[t]>=0})}function ts(a){var t=a.state,e=a.name,o=t.rects.reference,r=t.rects.popper,s=t.modifiersData.preventOverflow,n=fe(t,{elementContext:"reference"}),d=fe(t,{altBoundary:!0}),u=xo(n,o),p=xo(d,r,s),h=ko(u),v=ko(p);t.modifiersData[e]={referenceClippingOffsets:u,popperEscapeOffsets:p,isReferenceHidden:h,hasPopperEscaped:v},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":v})}const es={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:ts};function rs(a,t,e){var o=vt(a),r=[tt,Q].indexOf(o)>=0?-1:1,s=typeof e=="function"?e(Object.assign({},t,{placement:a})):e,n=s[0],d=s[1];return n=n||0,d=(d||0)*r,[tt,st].indexOf(o)>=0?{x:d,y:n}:{x:n,y:d}}function os(a){var t=a.state,e=a.options,o=a.name,r=e.offset,s=r===void 0?[0,0]:r,n=ho.reduce(function(h,v){return h[v]=rs(v,t.rects,s),h},{}),d=n[t.placement],u=d.x,p=d.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=p),t.modifiersData[o]=n}const as={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:os};function is(a){var t=a.state,e=a.name;t.modifiersData[e]=Ao({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const ss={name:"popperOffsets",enabled:!0,phase:"read",fn:is,data:{}};function ns(a){return a==="x"?"y":"x"}function cs(a){var t=a.state,e=a.options,o=a.name,r=e.mainAxis,s=r===void 0?!0:r,n=e.altAxis,d=n===void 0?!1:n,u=e.boundary,p=e.rootBoundary,h=e.altBoundary,v=e.padding,C=e.tether,m=C===void 0?!0:C,E=e.tetherOffset,x=E===void 0?0:E,$=fe(t,{boundary:u,rootBoundary:p,padding:v,altBoundary:h}),B=vt(t.placement),D=Jt(t.placement),j=!D,A=dr(B),f=ns(A),_=t.modifiersData.popperOffsets,y=t.rects.reference,O=t.rects.popper,L=typeof x=="function"?x(Object.assign({},t.rects,{placement:t.placement})):x,M=typeof L=="number"?{mainAxis:L,altAxis:L}:Object.assign({mainAxis:0,altAxis:0},L),V=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,K={x:0,y:0};if(_){if(s){var W,F=A==="y"?Q:tt,pt=A==="y"?it:st,G=A==="y"?"height":"width",dt=_[A],Tt=dt+$[F],Ut=dt-$[pt],qe=m?-O[G]/2:0,Or=D===Kt?y[G]:O[G],ke=D===Kt?-O[G]:-y[G],Ne=t.elements.arrow,re=m&&Ne?lr(Ne):{width:0,height:0},Dt=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:go(),$e=Dt[F],We=Dt[pt],Ht=ve(0,y[G],re[G]),Er=j?y[G]/2-qe-Ht-$e-M.mainAxis:Or-Ht-$e-M.mainAxis,td=j?-y[G]/2+qe+Ht+We+M.mainAxis:ke+Ht+We+M.mainAxis,Pr=t.elements.arrow&&we(t.elements.arrow),ed=Pr?A==="y"?Pr.clientTop||0:Pr.clientLeft||0:0,Ko=(W=V==null?void 0:V[A])!=null?W:0,rd=dt+Er-Ko-ed,od=dt+td-Ko,Xo=ve(m?Le(Tt,rd):Tt,dt,m?Ft(Ut,od):Ut);_[A]=Xo,K[A]=Xo-dt}if(d){var Yo,ad=A==="x"?Q:tt,id=A==="x"?it:st,qt=_[f],Ze=f==="y"?"height":"width",Jo=qt+$[ad],Qo=qt-$[id],Ir=[Q,tt].indexOf(B)!==-1,ta=(Yo=V==null?void 0:V[f])!=null?Yo:0,ea=Ir?Jo:qt-y[Ze]-O[Ze]-ta+M.altAxis,ra=Ir?qt+y[Ze]+O[Ze]-ta-M.altAxis:Qo,oa=m&&Ir?Bi(ea,qt,ra):ve(m?ea:Jo,qt,m?ra:Qo);_[f]=oa,K[f]=oa-qt}t.modifiersData[o]=K}}const ls={name:"preventOverflow",enabled:!0,phase:"main",fn:cs,requiresIfExists:["offset"]};function ds(a){return{scrollLeft:a.scrollLeft,scrollTop:a.scrollTop}}function us(a){return a===rt(a)||!nt(a)?ur(a):ds(a)}function hs(a){var t=a.getBoundingClientRect(),e=Xt(t.width)/a.offsetWidth||1,o=Xt(t.height)/a.offsetHeight||1;return e!==1||o!==1}function ps(a,t,e){e===void 0&&(e=!1);var o=nt(t),r=nt(t)&&hs(t),s=Et(t),n=Yt(a,r,e),d={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(o||!o&&!e)&&((wt(t)!=="body"||pr(s))&&(d=us(t)),nt(t)?(u=Yt(t,!0),u.x+=t.clientLeft,u.y+=t.clientTop):s&&(u.x=hr(s))),{x:n.left+d.scrollLeft-u.x,y:n.top+d.scrollTop-u.y,width:n.width,height:n.height}}function ws(a){var t=new Map,e=new Set,o=[];a.forEach(function(s){t.set(s.name,s)});function r(s){e.add(s.name);var n=[].concat(s.requires||[],s.requiresIfExists||[]);n.forEach(function(d){if(!e.has(d)){var u=t.get(d);u&&r(u)}}),o.push(s)}return a.forEach(function(s){e.has(s.name)||r(s)}),o}function vs(a){var t=ws(a);return $i.reduce(function(e,o){return e.concat(t.filter(function(r){return r.phase===o}))},[])}function gs(a){var t;return function(){return t||(t=new Promise(function(e){Promise.resolve().then(function(){t=void 0,e(a())})})),t}}function fs(a){var t=a.reduce(function(e,o){var r=e[o.name];return e[o.name]=r?Object.assign({},r,o,{options:Object.assign({},r.options,o.options),data:Object.assign({},r.data,o.data)}):o,e},{});return Object.keys(t).map(function(e){return t[e]})}var $o={placement:"bottom",modifiers:[],strategy:"absolute"};function So(){for(var a=arguments.length,t=new Array(a),e=0;e<a;e++)t[e]=arguments[e];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function bs(a){a===void 0&&(a={});var t=a,e=t.defaultModifiers,o=e===void 0?[]:e,r=t.defaultOptions,s=r===void 0?$o:r;return function(d,u,p){p===void 0&&(p=s);var h={placement:"bottom",orderedModifiers:[],options:Object.assign({},$o,s),modifiersData:{},elements:{reference:d,popper:u},attributes:{},styles:{}},v=[],C=!1,m={state:h,setOptions:function(B){var D=typeof B=="function"?B(h.options):B;x(),h.options=Object.assign({},s,h.options,D),h.scrollParents={reference:Vt(d)?ge(d):d.contextElement?ge(d.contextElement):[],popper:ge(u)};var j=vs(fs([].concat(o,h.options.modifiers)));return h.orderedModifiers=j.filter(function(A){return A.enabled}),E(),m.update()},forceUpdate:function(){if(!C){var B=h.elements,D=B.reference,j=B.popper;if(So(D,j)){h.rects={reference:ps(D,we(j),h.options.strategy==="fixed"),popper:lr(j)},h.reset=!1,h.placement=h.options.placement,h.orderedModifiers.forEach(function(M){return h.modifiersData[M.name]=Object.assign({},M.data)});for(var A=0;A<h.orderedModifiers.length;A++){if(h.reset===!0){h.reset=!1,A=-1;continue}var f=h.orderedModifiers[A],_=f.fn,y=f.options,O=y===void 0?{}:y,L=f.name;typeof _=="function"&&(h=_({state:h,options:O,name:L,instance:m})||h)}}}},update:gs(function(){return new Promise(function($){m.forceUpdate(),$(h)})}),destroy:function(){x(),C=!0}};if(!So(d,u))return m;m.setOptions(p).then(function($){!C&&p.onFirstUpdate&&p.onFirstUpdate($)});function E(){h.orderedModifiers.forEach(function($){var B=$.name,D=$.options,j=D===void 0?{}:D,A=$.effect;if(typeof A=="function"){var f=A({state:h,name:B,instance:m,options:j}),_=function(){};v.push(f||_)}})}function x(){v.forEach(function($){return $()}),v=[]}return m}}var _s=[Gi,ss,Vi,Ei,as,Qi,ls,Mi,es],je=bs({defaultModifiers:_s});const ms=b`
   :host {
     cursor: pointer;
   }
 
   button {
     background: none;
     border: none;
     width: 100%;
   }
 
   .awc-dropdown-item:focus-visible {
     outline: 1px solid var(--colors-light-focus);
     border-radius: var(--corner-radius-m);
   }
 
   .awc-dropdown-item {
     display: flex;
     align-items: center;
     gap: 10px;
     max-width: 100%;
     padding: 7px 16px;
     list-style-type: none;
     word-wrap: break-word;
     font: var(--awc-font-text-medium-15);
     color: var(--colors-light-text);
     text-align: start;
     text-decoration: none;
     outline-offset: -2px;
     outline: 1px solid transparent;
     transition: background-color 0.3s ease-in-out;
   }
 
   :host(:hover) .awc-dropdown-item {
     cursor: pointer;
     background-color: var(--colors-light-input-background);
   }
 
   .select-icon {
     content: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.7071 4.29289C14.0976 4.68342 14.0976 5.31658 13.7071 5.70711L7.70711 11.7071C7.31658 12.0976 6.68342 12.0976 6.29289 11.7071L3.29289 8.70711C2.90237 8.31658 2.90237 7.68342 3.29289 7.29289C3.68342 6.90237 4.31658 6.90237 4.70711 7.29289L7 9.58579L12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289Z' fill='%233761E9'/%3E%3C/svg%3E%0A");
     margin-left: auto;
   }
   
   .select-icon--none {
     content: "";
     opacity: 0;
     transition: 0.3s ease;
     display: block;
     width: 16px;
     height: 16px;
   }
 `;var ys=Object.defineProperty,Cs=Object.getOwnPropertyDescriptor,be=(a,t,e,o)=>{for(var r=o>1?void 0:o?Cs(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&ys(t,e,r),r};const Oo="awc-dropdown-item";i.AwcDropdownItem=class extends w{constructor(){super(...arguments),this.target="_self",this.selected=!1}focus(){this._dropdownItem.focus()}render(){return this.href?l`<a
         tabindex="0"
         class="awc-dropdown-item"
         href=${R(this.href)}
         target=${R(this.target)}
         ?selected=${this.selected}
       >
         <slot></slot>
         ${this.selected?l`<div class="select-icon"></div>`:l`<div class="select-icon--none"></div>`}
       </a>`:l`
         <button
           tabindex="0"
           class="awc-dropdown-item"
           ?selected=${this.selected}
         >
           <slot></slot>
           ${this.selected?l`<div class="select-icon"></div>`:l`<div class="select-icon--none"></div>`}
         </button>
       `}},i.AwcDropdownItem.styles=[Zt,ms],be([c({type:String})],i.AwcDropdownItem.prototype,"href",2),be([c({type:String})],i.AwcDropdownItem.prototype,"target",2),be([c({type:Boolean,reflect:!0})],i.AwcDropdownItem.prototype,"selected",2),be([S(".awc-dropdown-item")],i.AwcDropdownItem.prototype,"_dropdownItem",2),i.AwcDropdownItem=be([g(Oo)],i.AwcDropdownItem);var As=Object.defineProperty,xs=Object.getOwnPropertyDescriptor,ot=(a,t,e,o)=>{for(var r=o>1?void 0:o?xs(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&As(t,e,r),r};i.AwcDropdown=class extends w{constructor(){super(...arguments),this.notClosing=!1,this.visible=!1,this.selectedMode=!1,this.position="bottom-start",this.strategy="absolute",this.disabled=!1,this.scrollOff=!1,this.popperInstance=null,this._handleOutsideClick=t=>{this.contains(t.target)||this.close()},this.focusedOptionIndex=-1}_createPopperInstance(){this._nestedElement&&this._dropdownList&&(this.popperInstance=je(this._nestedElement,this._dropdownList,{placement:this.position,modifiers:[{name:"offset",options:{offset:[0,8]}}],strategy:this.strategy}))}_destroyPopperInstance(){var t;(t=this.popperInstance)==null||t.destroy(),this.popperInstance=null}_setupPopover(){this.disabled||(this._createPopperInstance(),this._addOutsideClickHandler())}_disconnectPopover(){this.disabled||(this._removeOutsideClickHandler(),this._destroyPopperInstance())}_addOutsideClickHandler(){setTimeout(()=>{document.addEventListener("click",this._handleOutsideClick)},0)}_removeOutsideClickHandler(){document.removeEventListener("click",this._handleOutsideClick)}open(){this.visible=!0,this._onOpen({visible:this.visible})}close(){this.visible=!1,this.focusedOptionIndex=-1,this._onClose({visible:this.visible})}_handleDropdown(t){t.target&&this.options.length&&(this.visible?this.close():this.open())}get options(){return[...this.querySelectorAll(Oo)]}handleKeyDown(t){if(this.options.length){if(["ArrowDown","ArrowRight"].includes(t.key))this.focusedOptionIndex++;else if(["ArrowUp","ArrowLeft"].includes(t.key))this.focusedOptionIndex--;else if(t.key==="Escape"){this.focusedOptionIndex=-1,this.close();return}else return;this.focusedOptionIndex=Math.max(0,Math.min(this.focusedOptionIndex,this.options.length-1)),this.options[this.focusedOptionIndex].focus(),t.preventDefault()}}_selectedModeHandle(t){const e=t.target;this.selectedMode&&(e.selected=!e.selected),e&&!this.notClosing&&this.close()}_setMinWidth(){this._dropdownList&&(this._dropdownList.style.width=`${this.width}px`)}updated(t){super.updated(t),t.has("notClosing")&&this._updateOutsideClickHandler(),t.has("width")&&this._setMinWidth(),t.has("visible")&&(this.visible?this._setupPopover():this._disconnectPopover())}_updateOutsideClickHandler(){this._removeOutsideClickHandler(),!this.notClosing&&this.visible}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback()}render(){return l`
       <div class="awc-dropdown">
         <div class="awc-dropdown__nested">
           <slot
            
             name="awc-dropdown-toggle"
           ></slot>
         </div>
 
         <awc-dropdown-list ?scroll-off=${this.scrollOff} ?visible=${this.visible}>
           <slot @click=${this._selectedModeHandle}></slot>
         </awc-dropdown-list>
       </div>
     `}},i.AwcDropdown.shadowRootOptions={...w.shadowRootOptions,delegatesFocus:!0},i.AwcDropdown.styles=[Zt,wi],ot([c({type:Boolean,reflect:!0,attribute:"not-closing"})],i.AwcDropdown.prototype,"notClosing",2),ot([c({type:Boolean,reflect:!0})],i.AwcDropdown.prototype,"visible",2),ot([c({type:Number,reflect:!0})],i.AwcDropdown.prototype,"width",2),ot([c({type:Boolean,reflect:!0,attribute:"selected-mode"})],i.AwcDropdown.prototype,"selectedMode",2),ot([c({type:String,reflect:!0})],i.AwcDropdown.prototype,"position",2),ot([c({type:String,reflect:!0})],i.AwcDropdown.prototype,"strategy",2),ot([c({type:Boolean,reflect:!0})],i.AwcDropdown.prototype,"disabled",2),ot([c({type:Boolean,reflect:!0,attribute:"scroll-off"})],i.AwcDropdown.prototype,"scrollOff",2),ot([k("awc-dropdown-open")],i.AwcDropdown.prototype,"_onOpen",2),ot([k("awc-dropdown-close")],i.AwcDropdown.prototype,"_onClose",2),ot([S("awc-dropdown-list")],i.AwcDropdown.prototype,"_dropdownList",2),ot([S(".awc-dropdown__nested")],i.AwcDropdown.prototype,"_nestedElement",2),i.AwcDropdown=ot([g("awc-dropdown")],i.AwcDropdown);const ks=b`
   :host {
     /* position: absolute;
     opacity: 0;
     max-height: 0;
     overflow: hidden;
     z-index: 999999;
     box-shadow: 4px 4px 8px 0px rgba(64, 72, 98, 0.1);
     border-radius: var(--corner-radius-s);
     background-color: var(--colors-light-white); */
   }
 
   .awc-dropdown-list {
     position: relative;
     margin: 0;
     display: flex;
     flex-direction: column;
     padding: 6px 0;
     list-style: none;
   }
 
   /* :host([visible]) {
     opacity: 1;
     max-height: 300px;
     overflow-y: auto;
     transition: opacity .3s ease, max-height 0.3s ease;
   } */
 `;var $s=Object.defineProperty,Ss=Object.getOwnPropertyDescriptor,Os=(a,t,e,o)=>{for(var r=o>1?void 0:o?Ss(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&$s(t,e,r),r};const Es="awc-dropdown-list";i.AwcDropdownList=class extends w{render(){return l`
       <ul class="awc-dropdown-list">
         <slot></slot>
       </ul>
     `}},i.AwcDropdownList.styles=[Zt,ks],i.AwcDropdownList=Os([g(Es)],i.AwcDropdownList);const Ps=b`
     :host([divider]) .awc-dropdown-group {
         border-bottom: 1px solid var(--colors-light-stroke);
         padding-bottom: var(--spacing-xs);
     }
         
     :host([label]) .awc-dropdown-group__label {
         padding: 0 16px;
         pointer-events: none;
         color: var(--colors-light-secondary);
         font: var(--awc-font-caption-1-regular);
     }
 
     :host([label]) .awc-dropdown-group__content{
         margin-top: var(--spacing-xs);
     }
 `;var Is=Object.defineProperty,Bs=Object.getOwnPropertyDescriptor,vr=(a,t,e,o)=>{for(var r=o>1?void 0:o?Bs(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&Is(t,e,r),r};const Ls="awc-dropdown-group";i.AwcDropdownGroup=class extends w{constructor(){super(...arguments),this.divider=!1}render(){return l`
             <div class="awc-dropdown-group">
                 <label class="awc-dropdown-group__label">${this.label}</label>
                 <div class="awc-dropdown-group__content">
                     <slot></slot>
                 </div>
             </div>
         `}},i.AwcDropdownGroup.styles=[Zt,Ps],vr([c({type:String,reflect:!0})],i.AwcDropdownGroup.prototype,"label",2),vr([c({type:Boolean,reflect:!0})],i.AwcDropdownGroup.prototype,"divider",2),i.AwcDropdownGroup=vr([g(Ls)],i.AwcDropdownGroup);var P=function(a,t,e,o){if(e==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?a!==t||!o:!t.has(a))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?o:e==="a"?o.call(a):o?o.value:t.get(a)},H=function(a,t,e,o,r){if(o==="m")throw new TypeError("Private method is not writable");if(o==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?a!==t||!r:!t.has(a))throw new TypeError("Cannot write private member to an object whose class did not declare it");return o==="a"?r.call(a,e):r?r.value=e:t.set(a,e),e};function ut(a){var t,e,o,r,s,n,d,u,p,h,v,C,m,E,x,$,B,D;class j extends a{constructor(...f){var _,y,O;super(...f),t.add(this),this.internals=this.attachInternals(),e.set(this,!1),o.set(this,!1),r.set(this,!1),s.set(this,void 0),n.set(this,void 0),d.set(this,!0),u.set(this,""),p.set(this,()=>{H(this,r,!0,"f"),H(this,e,!0,"f"),P(this,t,"m",x).call(this)}),h.set(this,()=>{H(this,e,!1,"f"),P(this,t,"m",$).call(this,this.shouldFormValueUpdate()?P(this,u,"f"):""),!this.validity.valid&&P(this,r,"f")&&H(this,o,!0,"f");const L=P(this,t,"m",x).call(this);this.validationMessageCallback&&this.validationMessageCallback(L?this.internals.validationMessage:"")}),v.set(this,()=>{var L;P(this,d,"f")&&this.validationTarget&&(this.internals.setValidity(this.validity,this.validationMessage,this.validationTarget),H(this,d,!1,"f")),H(this,r,!0,"f"),H(this,o,!0,"f"),P(this,t,"m",x).call(this),(L=this===null||this===void 0?void 0:this.validationMessageCallback)===null||L===void 0||L.call(this,this.showError?this.internals.validationMessage:"")}),C.set(this,void 0),m.set(this,!1),E.set(this,Promise.resolve()),(_=this.addEventListener)===null||_===void 0||_.call(this,"focus",P(this,p,"f")),(y=this.addEventListener)===null||y===void 0||y.call(this,"blur",P(this,h,"f")),(O=this.addEventListener)===null||O===void 0||O.call(this,"invalid",P(this,v,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const f=this.validators.map(O=>O.attribute).flat(),_=super.observedAttributes||[];return[...new Set([..._,...f])]}static getValidator(f){return this.validators.find(_=>_.attribute===f)||null}static getValidators(f){return this.validators.filter(_=>{var y;if(_.attribute===f||!((y=_.attribute)===null||y===void 0)&&y.includes(f))return!0})}get form(){return this.internals.form}get showError(){return P(this,t,"m",x).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback(f,_,y){var O;(O=super.attributeChangedCallback)===null||O===void 0||O.call(this,f,_,y);const M=this.constructor.getValidators(f);M!=null&&M.length&&this.validationTarget&&this.setValue(P(this,u,"f"))}setValue(f){var _;H(this,o,!1,"f"),(_=this.validationMessageCallback)===null||_===void 0||_.call(this,""),H(this,u,f,"f");const O=this.shouldFormValueUpdate()?f:null;this.internals.setFormValue(O),P(this,t,"m",$).call(this,O),this.valueChangedCallback&&this.valueChangedCallback(O),P(this,t,"m",x).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise(f=>f(P(this,E,"f")))}formResetCallback(){var f,_;H(this,r,!1,"f"),H(this,o,!1,"f"),P(this,t,"m",x).call(this),(f=this.resetFormControl)===null||f===void 0||f.call(this),(_=this.validationMessageCallback)===null||_===void 0||_.call(this,P(this,t,"m",x).call(this)?this.validationMessage:"")}}return e=new WeakMap,o=new WeakMap,r=new WeakMap,s=new WeakMap,n=new WeakMap,d=new WeakMap,u=new WeakMap,p=new WeakMap,h=new WeakMap,v=new WeakMap,C=new WeakMap,m=new WeakMap,E=new WeakMap,t=new WeakSet,x=function(){if(this.hasAttribute("disabled"))return!1;const f=P(this,o,"f")||P(this,r,"f")&&!this.validity.valid&&!P(this,e,"f");return f&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),f},$=function(f){const _=this.constructor,y={},O=_.validators,L=[],M=O.some(F=>F.isValid instanceof Promise);P(this,m,"f")||(H(this,E,new Promise(F=>{H(this,C,F,"f")}),"f"),H(this,m,!0,"f")),P(this,s,"f")&&(P(this,s,"f").abort(),H(this,n,P(this,s,"f"),"f"));const V=new AbortController;H(this,s,V,"f");let K,W=!1;O.length&&(O.forEach(F=>{const pt=F.key||"customError",G=F.isValid(this,f,V.signal);G instanceof Promise?(L.push(G),G.then(Tt=>{Tt!=null&&(y[pt]=!Tt,K=P(this,t,"m",D).call(this,F,f),P(this,t,"m",B).call(this,y,K))})):(y[pt]=!G,this.validity[pt]!==!G&&(W=!0),!G&&!K&&(K=P(this,t,"m",D).call(this,F,f)))}),Promise.allSettled(L).then(()=>{var F;V!=null&&V.signal.aborted||(H(this,m,!1,"f"),(F=P(this,C,"f"))===null||F===void 0||F.call(this))}),(W||!M)&&P(this,t,"m",B).call(this,y,K))},B=function(f,_){if(this.validationTarget)this.internals.setValidity(f,_,this.validationTarget),H(this,d,!1,"f");else{if(this.internals.setValidity(f,_),this.internals.validity.valid)return;H(this,d,!0,"f")}},D=function(f,_){if(this.validityCallback){const y=this.validityCallback(f.key||"customError");if(y)return y}return f.message instanceof Function?f.message(this,_):f.message},j}const gr={attribute:"required",key:"valueMissing",message:"Please fill out this field",isValid(a,t){let e=!0;return(a.hasAttribute("required")||a.required)&&!t&&(e=!1),e}},Ts={attribute:"maxlength",key:"tooLong",message(a,t){const e=t||"";return`Please use no more than ${a.maxLength} characters (you are currently using ${e.length} characters).`},isValid(a,t){return a.maxLength?!(t&&a.maxLength<t.length):!0}},Ds=b`
   :host {
     display: inline-flex;
     position: relative;
 
     --awc-radio-background: var(--awc-radio-background-theme);
     --awc-radio-background-hover: var(--awc-radio-background-hover-theme);
 
     --awc-radio-checked-background: var(
       --awc-radio-custom-color,
       var(--awc-radio-background-checked-theme)
     );
 
     --awc-radio-checked-background-hover: var(
       --awc-radio-background-checked-hover-theme
     );
 
     --awc-radio-border: var(--awc-radio-border-theme);
 
     --awc-radio-label: var(--awc-radio-label-theme);
 
     --awc-radio-size: var(--awc-radio-size-regular);
     --awc-radio-checked: var(--awc-radio-checked-regular);
 
     --awc-radio-size-regular: 20px;
     --awc-radio-checked-regular: 6px;
 
     --awc-radio-size-small: 16px;
     --awc-radio-checked-small: 4.5px;
   }
 
   :host([size="small"]) {
     --awc-radio-size: var(--awc-radio-size-small);
     --awc-radio-checked: var(--awc-radio-checked-small);
   }
 
   .awc-radio__wrapper {
     display: flex;
     flex-direction: column;
     align-items: flex-start;
   }
 
   .awc-radio__container {
     display: flex;
     align-items: center;
     justify-content: space-between;
   }
 
   .awc-radio:focus {
     outline: none;
   }
 
   .awc-radio:focus-visible > .awc-radio__label::before {
     outline: 1px solid var(--colors-light-focus);
   }
 
   .awc-radio__label {
     cursor: pointer;
 
     display: flex;
     align-items: center;
     gap: var(--spacing-sm);
     margin: 0;
 
     font: var(--awc-font-text-regular-14);
     color: var(--awc-radio-label);
   }
 
   .awc-radio__label::before {
     content: "";
     display: inline-block;
     box-sizing: border-box;
 
     outline: 1px solid transparent;
 
     height: var(--awc-radio-size);
     width: var(--awc-radio-size);
 
     border-radius: var(--corner-radius-circular);
     border: 1px solid var(--awc-radio-border);
 
     transition:
       background-color 0.25s ease,
       filter 0.25s ease,
       border-color 0.25s ease,
       outline-color 0.25s ease-in-out;
     animation: borderDecreaseAnimation 0.25s ease forwards;
   }
 
   @keyframes borderDecreaseAnimation {
     from {
       border-width: var(--awc-radio-checked);
     }
     to {
       border-width: 1px;
     }
   }
 
   .checked .awc-radio__label::before {
     animation: borderIncreaseAnimation 0.25s ease forwards;
     border: 6px solid var(--awc-radio-checked-background);
     background-color: var(--awc-radio-background);
   }
 
   :host(:not([disabled])) .awc-radio__wrapper:hover .awc-radio__label::before {
     transition:
       background-color 0.25s,
       filter 0.25s ease;
     background-color: var(--awc-radio-background-hover);
   }
 
   :host([checked]:not([disabled]))
     .awc-radio__wrapper:hover
     .awc-radio__label::before {
     transition:
       background-color 0.25s,
       filter 0.25s ease;
     border-color: var(--awc-radio-checked-background-hover);
     background-color: var(--awc-radio-background);
   }
 
   :host([checked][custom-color]:not([disabled]))
     .awc-radio__wrapper:hover
     .awc-radio__label::before {
     filter: brightness(90%);
     border-color: var(--awc-radio-checked-background);
     transition:
       border-color 0.25s,
       filter 0.25s ease;
   }
 
   :host([disabled]) .awc-radio {
     cursor: not-allowed;
     pointer-events: none;
     opacity: 0.5;
   }
 
   @keyframes borderIncreaseAnimation {
     from {
       border-width: 1px;
     }
     to {
       border-width: var(--awc-radio-checked);
     }
   }
 
   .awc-radio__label.radio--error::before {
     border-color: var(--colors-light-warning);
   }
 
   :host([static-error]) .awc-radio__label.radio--error,
   .awc-radio__label.radio--error {
     color: var(--colors-light-warning);
   }
 
   .awc-radio__error {
     margin-top: var(--spacing-s);
     font: var(--awc-font-caption-1-regular);
     color: var(--colors-light-warning);
   }
 
   /* :host .radio:focus-visible::before{
     content: '';
     position: absolute;
     border: 3px solid #839FF633; 
     inset: -3px;
     border-radius: var(--corner-radius-circular);
     pointer-events: none;
     }
 
     :host([checked]) .radio:focus-visible {
     border: 1px solid var(--colors-light-primary);;
     }  
   */
 `,Ms=b`
   :host {
     --awc-radio-group-title-color: var(--awc-radio-group-title-theme);
   }
 
   .awc-radio-group {
     display: flex;
     flex-direction: column;
     gap: var(--spacing-s);
   }
 
   .awc-radio-group__label {
     color: var(--awc-radio-group-title-color);
     font: var(--awc-font-text-medium-14);
   }
 
   .awc-radio-group__options {
     display: flex;
     flex-direction: column;
     gap: var(--spacing-l);
   }
 
   :host([horizontal]) .awc-radio-group__options {
     flex-direction: row;
   }
 
   .awc-radio-group__hint {
     margin-top: var(--spacing-s);
     font: var(--awc-font-caption-1-regular);
     color: var(--colors-light-secondary);
   }
 `;var js=Object.defineProperty,zs=Object.getOwnPropertyDescriptor,Gt=(a,t,e,o)=>{for(var r=o>1?void 0:o?zs(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&js(t,e,r),r};const fr="awc-radio-change";i.AwcRadioGroup=class extends ut(w){constructor(){super(...arguments),this.value="",this.name="",this.label="",this.hint="",this.horizontal=!1,this.focusedOptionIndex=0}get options(){return[...this.querySelectorAll(Eo)]}get availableOptions(){return this.options.filter(t=>!t.disabled)}_handleRadioButton(t){const e=t.target;this.setValue(e.value),this._onChange(e.value)}resetFormControl(){return this.options.forEach(t=>{this.value="",t.checked=!1})}_handleKeyDown(t){if(["ArrowDown","ArrowRight"].includes(t.key))this.focusedOptionIndex++;else if(["ArrowUp","ArrowLeft"].includes(t.key))this.focusedOptionIndex--;else if([" "].includes(t.key)){this.availableOptions[this.focusedOptionIndex].select();return}else return;this.focusedOptionIndex=Math.max(0,Math.min(this.focusedOptionIndex,this.availableOptions.length-1)),this.availableOptions[this.focusedOptionIndex].focus(),t.preventDefault()}_handleFocus(){this.availableOptions[this.focusedOptionIndex].focus()}updated(t){super.updated(t),t.has("value")&&this.setValue(this.value)}_setupAwcRadioValues(){this.options.forEach(t=>{t.checked&&(this.value=t.value)})}connectedCallback(){super.connectedCallback(),this.tabIndex=0,this.addEventListener("focus",this._handleFocus),this.addEventListener("keydown",this._handleKeyDown),this._setupAwcRadioValues(),document.addEventListener("DOMContentLoaded",()=>{this._setupAwcRadioValues()})}render(){return l`
       <div class="awc-radio-group" role="radiogroup" aria-labelledby="label">
         <legend class="awc-radio-group__label">${this.label}</legend>
         <div
           class="awc-radio-group__options"
           @awc-checked=${this._handleRadioButton}
         >
           <slot></slot>
         </div>
         ${this.hint?l`<span class="awc-radio-group__hint">${this.hint}</span>`:""}
       </div>
     `}},i.AwcRadioGroup.styles=[Ms],Gt([c({type:String})],i.AwcRadioGroup.prototype,"value",2),Gt([c({type:String,reflect:!0})],i.AwcRadioGroup.prototype,"name",2),Gt([c({type:String,reflect:!0})],i.AwcRadioGroup.prototype,"label",2),Gt([c({type:String,reflect:!0})],i.AwcRadioGroup.prototype,"hint",2),Gt([c({type:Boolean,reflect:!0})],i.AwcRadioGroup.prototype,"horizontal",2),Gt([k(fr)],i.AwcRadioGroup.prototype,"_onChange",2),i.AwcRadioGroup=Gt([g("awc-radio-group")],i.AwcRadioGroup);var Rs=Object.defineProperty,Vs=Object.getOwnPropertyDescriptor,Z=(a,t,e,o)=>{for(var r=o>1?void 0:o?Vs(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&Rs(t,e,r),r};const Eo="awc-radio";i.AwcRadio=class extends ut(w){constructor(){super(...arguments),this.staticError=!1,this.disabled=!1,this.size="regular",this.checked=!1,this.required=!1,this.validationMessage="",this._handleFieldValueChange=t=>{const e=t.detail;this.checked=e===this.value},this._onChange=()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},this._onInvalid=t=>{t.preventDefault(),this.validationTarget.focus()}}validityCallback(){const t=document.createElement("input");return t.type="radio",t.name="name",t.required=this.required,t.validationMessage}validationMessageCallback(t){this.customError&&!this.staticError?(this.validationMessage=t,this.validationMessage=this.customError):this.validationMessage=t}shouldFormValueUpdate(){return this.checked}connectedCallback(){super.connectedCallback(),this.addEventListener("invalid",this._onInvalid),this._setupFieldListener()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._onInvalid),this._cleanupFieldListener()}_setupFieldListener(){var t;this.field=this.closest("awc-radio-group"),this.field||console.warn("awc-radio is designed to be used inside an awc-radio-group",this),(t=this.field)==null||t.addEventListener(fr,this._handleFieldValueChange)}_cleanupFieldListener(){var t;(t=this.field)==null||t.removeEventListener(fr,this._handleFieldValueChange)}select(){this.checked=!0,this._onChecked(this.value),this._onChange()}focus(){this._radioElement.tabIndex=0,this._radioElement.focus(),this._onFocus(this.value)}blur(){this._radioElement.tabIndex=-1,this._onBlur(this.value)}_settingCustomColor(){this.customColor&&this.style.setProperty("--awc-radio-custom-color",this.customColor)}updated(t){super.updated(t),(t.has("checked")||t.has("value"))&&this.setValue(this.value),t.has("customColor")&&this._settingCustomColor()}render(){const t=Y({"awc-radio":!0,checked:this.checked}),e={"awc-radio__label":!0,"radio--error":this.showError&&!this.checked||this.staticError&&this.required};return l`
       <div class="awc-radio__wrapper">
         <div class="awc-radio__container">
           <span
             tabindex="0"
             class="${t}"
             role="radio"
             aria-checked=${this.checked}
             aria-required=${this.required}
             aria-disabled=${this.disabled}
             aria-labelledby="label"
             @blur=${this.blur}
             @click=${this.select}
           >
             <p id="label" class="${Y(e)}">${this.label}</p>
           </span>
         </div>
 
         ${this.showError&&this.required&&!this.staticError?l`<span class="awc-radio__error"
               >${this.validationMessage}</span
             >`:""}
         ${this.staticError&&this.required&&this.customError?l`<span class="awc-radio__error">${this.customError}</span>`:""}
       </div>
     `}},i.AwcRadio.shadowRootOptions={...w.shadowRootOptions,delegatesFocus:!0},i.AwcRadio.formControlValidators=[gr],i.AwcRadio.styles=[Ds],Z([c({type:String,reflect:!0})],i.AwcRadio.prototype,"name",2),Z([c({type:String,reflect:!0})],i.AwcRadio.prototype,"value",2),Z([c({type:String,reflect:!0})],i.AwcRadio.prototype,"label",2),Z([c({reflect:!0,attribute:"custom-error"})],i.AwcRadio.prototype,"customError",2),Z([c({type:Boolean,reflect:!0,attribute:"static-error"})],i.AwcRadio.prototype,"staticError",2),Z([c({type:Boolean,reflect:!0})],i.AwcRadio.prototype,"disabled",2),Z([c({reflect:!0})],i.AwcRadio.prototype,"size",2),Z([c({type:Boolean,reflect:!0})],i.AwcRadio.prototype,"checked",2),Z([c({type:Boolean,reflect:!0})],i.AwcRadio.prototype,"required",2),Z([c({reflect:!0,attribute:"custom-color"})],i.AwcRadio.prototype,"customColor",2),Z([k("awc-checked")],i.AwcRadio.prototype,"_onChecked",2),Z([k("awc-focus")],i.AwcRadio.prototype,"_onFocus",2),Z([k("awc-blur")],i.AwcRadio.prototype,"_onBlur",2),Z([S("[role=radio]")],i.AwcRadio.prototype,"_radioElement",2),Z([S("[role=radio]")],i.AwcRadio.prototype,"validationTarget",2),Z([U()],i.AwcRadio.prototype,"validationMessage",2),i.AwcRadio=Z([g(Eo)],i.AwcRadio);const Fs=globalThis.SubmitEvent=typeof globalThis.SubmitEvent<"u"?SubmitEvent:Event,br=a=>{if(!(!a.noValidate&&!a.reportValidity())){const t=new Fs("submit",{bubbles:!0,cancelable:!0});a.dispatchEvent(t),t.defaultPrevented||a.submit()}},Gs=b`
   :host {
     display: var(--awc-button-display, inline-flex);
     max-width: 100%;
 
     --awc-button-border-radius: var(--corner-radius-s);
 
     --awc-button-padding-large: 0 20px;
     --awc-button-padding-regular: 0 16px;
     --awc-button-padding-small: 0 12px;
     --awc-button-padding-extrasmall: 0 10px;
   }
 
   .awc-button {
     position: relative;
     text-decoration: none;
     padding: 0;
     border: none;
     position: relative;
     width: 100%;
     gap: 6px;
     display: flex;
     align-items: center;
     justify-content: center;
     text-decoration: none;
     border-radius: var(
       --awc-button-border-radius,
       var(--awc-button-remove-border-radius)
     );
     cursor: pointer;
     color: var(--colors-light-white);
     transition:
       background-color 0.3s ease,
       color 0.3s,
       border-color 0.3s ease,
       transform 0.3s ease;
     font: var(--awc-font-caption-1-regular);
     background-color: var(--button-background);
   }
 
   .awc-button:focus {
     outline: none;
   }
 
   awc-spinner {
     display: flex;
     align-items: center;
     justify-content: center;
     position: absolute;
     top: 50%;
     left: 50%;
     z-index: 1;
     transform: translate(-50%, -50%);
   }
 
   :host ::slotted(awc-spinner) {
     pointer-events: none;
     touch-action: none;
   }
 
   .awc-button:focus-visible {
     outline: 2px solid var(--colors-light-focus);
   }
 
   /* .awc-button:focus-visible:before {
     content: "";
     position: absolute;
     border: 3px solid #839ff633;
     inset: -3px;
     border-radius: var(--corner-radius-m);
     pointer-events: none;
   } */
 
   :host([disabled]) {
     user-select: none;
     opacity: 0.5;
     cursor: not-allowed;
     pointer-events: none;
   }
 
   :host([loading]) {
     pointer-events: none;
     touch-action: none;
     user-select: none;
   }
 
   .awc-button--disable {
     pointer-events: none;
     touch-action: none;
     user-select: none;
   }
 
   :host([loading]) .awc-button {
     color: transparent !important;
   }
 
   /* isBlock */
   :host([block]) .awc-button {
     width: 100%;
   }
 
   /* Color Primary */
   :host([background="blue"]) .awc-button {
     --button-background: var(--colors-light-primary);
   }
 
   :host([filling]) .awc-button ::slotted(awc-icon) {
     transition: fill 0.3s ease;
     fill: var(--colors-light-white);
   }
 
   :host([background="blue"]:not([disabled])) .awc-button:hover {
     --button-background: var(--colors-light-primary-hover);
   }
 
   :host([background="red"]) .awc-button {
     --button-background: var(--colors-light-warning);
   }
 
   :host([background="red"]:not([disabled])) .awc-button:hover {
     --button-background: var(--global-red-500);
   }
 
   :host([background="green"]) .awc-button {
     --button-background: var(--colors-light-success);
   }
 
   :host([background="green"]:not([disabled])) .awc-button:hover {
     --button-background: var(--global-green-400);
   }
 
   :host([background="gray"]) .awc-button {
     --button-background: var(--colors-light-secondary);
   }
 
   :host([background="gray"]:not([disabled])) .awc-button:hover {
     --button-background: var(--colors-light-secondary-hover);
   }
 
   /* Color Secondary */
   :host([background="blue"][variant="secondary"]) .awc-button {
     --button-background: rgba(55, 97, 233, 0.1);
     color: var(--colors-light-primary);
   }
 
   :host([background="blue"][variant="secondary"][filling])
     .awc-button
     ::slotted(awc-icon) {
     fill: var(--colors-light-primary);
   }
 
   :host([background="blue"][variant="secondary"]:not([disabled]))
     .awc-button:hover {
     --button-background: var(--colors-light-primary-hover);
     color: var(--colors-light-white);
   }
 
   :host([background="blue"][variant="secondary"][filling])
     .awc-button:hover
     ::slotted(awc-icon) {
     fill: var(--colors-light-white);
   }
 
   :host([background="red"][variant="secondary"]) .awc-button {
     --button-background: rgba(255, 0, 0, 0.1);
     color: var(--colors-light-warning);
   }
 
   :host([background="red"][variant="secondary"][filling])
     .awc-button
     ::slotted(awc-icon) {
     fill: var(--colors-light-warning);
   }
 
   :host([background="red"][variant="secondary"]:not([disabled]))
     .awc-button:hover {
     --button-background: var(--global-red-500);
     color: var(--colors-light-white);
   }
 
   :host([background="red"][variant="secondary"][filling])
     .awc-button:hover
     ::slotted(awc-icon) {
     fill: var(--colors-light-white);
   }
 
   :host([background="green"][variant="secondary"]) .awc-button {
     --button-background: rgba(53, 211, 172, 0.1);
     color: var(--colors-light-success);
   }
 
   :host([background="green"][variant="secondary"][filling])
     .awc-button
     ::slotted(awc-icon) {
     fill: var(--colors-light-success);
   }
 
   :host([background="green"][variant="secondary"]:not([disabled]))
     .awc-button:hover {
     --button-background: var(--global-green-400);
     color: var(--colors-light-white);
   }
 
   :host([background="green"][variant="secondary"][filling])
     .awc-button:hover
     ::slotted(awc-icon) {
     fill: var(--colors-light-white);
   }
 
   :host([background="gray"][variant="secondary"]) .awc-button {
     --button-background: rgba(145, 155, 182, 0.1);
     color: var(--colors-light-white);
   }
 
   :host([background="gray"][variant="secondary"][filling])
     .awc-button
     ::slotted(awc-icon) {
     fill: var(--colors-light-white);
   }
 
   :host([background="gray"][variant="secondary"]:not([disabled]))
     .awc-button:hover {
     --button-background: var(--colors-light-secondary-hover);
     color: var(--colors-light-white);
   }
 
   :host([background="gray"][variant="secondary"][filling])
     .awc-button:hover
     ::slotted(awc-icon) {
     fill: var(--colors-light-white);
   }
 
   /* Color transparent */
   :host([background="blue"][variant="transparent"]) .awc-button {
     --button-background: transparent;
     border: 1px solid #3761e959;
     color: var(--colors-light-primary);
   }
 
   :host([background="blue"][variant="transparent"][filling])
     .awc-button
     ::slotted(awc-icon) {
     fill: var(--colors-light-primary);
   }
 
   :host([background="blue"][variant="transparent"]:not([disabled]))
     .awc-button:hover {
     --button-background: var(--colors-light-primary-hover);
     color: var(--colors-light-white);
   }
 
   :host([background="blue"][variant="transparent"][filling])
     .awc-button:hover
     ::slotted(awc-icon) {
     fill: var(--colors-light-white);
   }
 
   :host([background="red"][variant="transparent"]) .awc-button {
     --button-background: transparent;
     border: 1px solid #ff000059;
     color: var(--colors-light-warning);
   }
 
   :host([background="red"][variant="transparent"][filling])
     .awc-button
     ::slotted(awc-icon) {
     fill: var(--colors-light-warning);
   }
 
   :host([background="red"][variant="transparent"]:not([disabled]))
     .awc-button:hover {
     --button-background: var(--global-red-500);
     color: var(--colors-light-white);
   }
 
   :host([background="red"][variant="transparent"][filling])
     .awc-button:hover
     ::slotted(awc-icon) {
     fill: var(--colors-light-white);
   }
 
   :host([background="green"][variant="transparent"]) .awc-button {
     --button-background: transparent;
     border: 1px solid #35d3ac59;
     color: var(--colors-light-success);
   }
 
   :host([background="green"][variant="transparent"][filling])
     .awc-button
     ::slotted(awc-icon) {
     fill: var(--colors-light-success);
   }
 
   :host([background="green"][variant="transparent"]:not([disabled]))
     .awc-button:hover {
     background-color: var(--global-green-400);
     color: var(--colors-light-white);
   }
 
   :host([background="green"][variant="transparent"][filling])
     .awc-button:hover
     ::slotted(awc-icon) {
     fill: var(--colors-light-white);
   }
 
   :host([background="gray"][variant="transparent"]) .awc-button {
     --button-background: transparent;
     border: 1px solid var(--colors-light-stroke-hover);
     color: var(--colors-light-text);
   }
 
   :host([background="gray"][variant="transparent"][filling])
     .awc-button
     ::slotted(awc-icon) {
     fill: var(--colors-light-text);
   }
 
   :host([background="gray"][variant="transparent"]:not([disabled]))
     .awc-button:hover {
     border-color: var(--colors-light-secondary-hover);
     --button-background: var(--colors-light-secondary-hover);
     color: var(--colors-light-white);
   }
 
   :host([background="gray"][variant="transparent"][filling])
     .awc-button:hover
     ::slotted(awc-icon) {
     fill: var(--colors-light-white);
   }
 
   /* Color link */
   :host([background="blue"][variant="link"]) .awc-button {
     --button-background: transparent;
     color: var(--colors-light-primary);
   }
 
   :host([background="blue"][variant="link"][filling])
     .awc-button
     ::slotted(awc-icon) {
     fill: var(--colors-light-primary);
   }
 
   :host([background="blue"][variant="link"]:not([disabled])) .awc-button:hover {
     --button-background: rgba(55, 97, 233, 0.1);
     color: var(--colors-light-primary);
   }
 
   :host([background="blue"][variant="link"][filling])
     .awc-button:hover
     ::slotted(awc-icon) {
     fill: var(--colors-light-primary);
   }
 
   :host([background="red"][variant="link"]) .awc-button {
     --button-background: var(--colors-light-white);
     color: var(--colors-light-warning);
   }
 
   :host([background="red"][variant="link"][filling])
     .awc-button
     ::slotted(awc-icon) {
     fill: var(--colors-light-warning);
   }
 
   :host([background="red"][variant="link"]:not([disabled])) .awc-button:hover {
     --button-background: rgba(255, 0, 0, 0.1);
     color: var(--colors-light-warning);
   }
 
   :host([background="red"][variant="link"][filling])
     .awc-button:hover
     ::slotted(awc-icon) {
     fill: var(--colors-light-warning);
   }
 
   :host([background="green"][variant="link"]) .awc-button {
     --button-background: var(--colors-light-white);
     color: var(--colors-light-success);
   }
 
   :host([background="green"][variant="link"][filling])
     .awc-button
     ::slotted(awc-icon) {
     fill: var(--colors-light-success);
   }
 
   :host([background="green"][variant="link"]:not([disabled]))
     .awc-button:hover {
     --button-background: rgba(53, 211, 172, 0.1);
     color: var(--colors-light-success);
   }
 
   :host([background="green"][variant="link"][filling])
     .awc-button:hover
     ::slotted(awc-icon) {
     fill: var(--colors-light-success);
   }
 
   :host([background="gray"][variant="link"]) .awc-button {
     --button-background: var(--colors-light-white);
     color: var(--colors-light-text);
   }
 
   :host([background="gray"][variant="link"][filling])
     .awc-button
     ::slotted(awc-icon) {
     fill: var(--colors-light-text);
   }
 
   :host([background="gray"][variant="link"]:not([disabled])) .awc-button:hover {
     --button-background: rgba(145, 155, 182, 0.1);
     color: var(--colors-light-white);
   }
 
   :host([background="gray"][variant="link"][filling])
     .awc-button:hover
     ::slotted(awc-icon) {
     fill: var(--colors-light-white);
   }
 
   /* Size */
 
   :host([size="large"]) .awc-button {
     padding: var(--awc-button-padding-large);
     height: 40px;
     font: var(--awc-font-text-medium-14);
   }
 
   :host([size="regular"]) .awc-button {
     padding: var(--awc-button-padding-regular);
     height: 36px;
     font: var(--awc-font-caption-1-medium);
   }
 
   :host([size="small"]) .awc-button {
     padding: var(--awc-button-padding-small);
     height: 30px;
     font: var(--awc-font-caption-2-regular);
   }
 
   :host([size="extrasmall"]) .awc-button {
     padding: var(--awc-button-padding-extrasmall);
     height: 24px;
     font: var(--awc-font-caption-3-regular);
   }
 `,Us=b`
     :host {
         display: inline-flex; 
     }
 
     :host([size="s"]){
         --awc-spinner-size: 16px;
         --awc-spinner-border-width: 2px;
     }
 
     :host([size="m"]){
         --awc-spinner-size: 20px;
         --awc-spinner-border-width: 2.5px;
     }
 
     :host([size="l"]){
         --awc-spinner-size: 28px;
         --awc-spinner-border-width: 3px;
     }
 
     :host([variant="primary"]){
         --awc-spinner-thumb: rgba(55, 97, 233, 0.12);
         --awc-spinner-track: var(--colors-light-primary);
     }
 
     :host([variant="secondary"]){
         --awc-spinner-thumb: rgba(255, 255, 255, 0.12);
         --awc-spinner-track: var(--colors-light-white);
     }
 
     .awc-spinner {
         position: relative;
         width: var(--awc-spinner-size);
         height: var(--awc-spinner-size);
         border: var(--awc-spinner-border-width) solid var(--awc-spinner-thumb);
         border-bottom-color: var(--awc-spinner-track);
         border-radius: 50%;
         display: inline-block;
         box-sizing: border-box;
         animation: awc-spinner .8s linear infinite;
     }
 
     @keyframes awc-spinner {
         0% {
             transform: rotate(0deg);
         }
 
         100% {
             transform: rotate(360deg);
         }
     }
 
 `;var Hs=Object.defineProperty,qs=Object.getOwnPropertyDescriptor,_r=(a,t,e,o)=>{for(var r=o>1?void 0:o?qs(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&Hs(t,e,r),r};const Po="awc-spinner";i.AwcSpinner=class extends w{constructor(){super(...arguments),this.size="m",this.variant="primary"}render(){return l`
             <div class="awc-spinner"></div>
         `}},i.AwcSpinner.styles=[Us],_r([c({type:String,reflect:!0})],i.AwcSpinner.prototype,"size",2),_r([c({type:String,reflect:!0})],i.AwcSpinner.prototype,"variant",2),i.AwcSpinner=_r([g(Po)],i.AwcSpinner);var Ns=Object.defineProperty,Ws=Object.getOwnPropertyDescriptor,X=(a,t,e,o)=>{for(var r=o>1?void 0:o?Ws(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&Ns(t,e,r),r};const Io="awc-button";i.AwcButton=class extends w{constructor(){super(...arguments),this.background="blue",this.size="regular",this.variant="primary",this.type="submit",this.target="_self",this.disabled=!1,this.filling=!1,this.loading=!1,this.autofocus=!1}get spinner(){return this.querySelector(Po)}focus(){this.button.focus()}_handleButtonClick(){const t=this.closest("form");t&&(this.type==="submit"?br(t):this.type==="reset"&&t.reset())}_renderSpinner(){const t=this.variant==="primary"?"secondary":"primary";return l`<awc-spinner size="s" variant=${t}></awc-spinner>`}_settingCurrentSpinnerVariant(){this.spinner?(this.button.classList.add("awc-button--disable"),this.variant==="primary"?this.spinner.variant="secondary":this.spinner.variant="primary"):this.button.classList.remove("awc-button--disable")}_checkingSpinnerInSlot(){this.spinner?this._settingCurrentSpinnerVariant():this.button.classList.remove("awc-button--disable")}updated(t){super.updated(t),t.has("variant")&&this._settingCurrentSpinnerVariant()}render(){const t=l`
       <slot @slotchange="${this._checkingSpinnerInSlot}"></slot>
       ${this.loading?this._renderSpinner():""}
     `,e=l`
      <button
         class="awc-button"
         ?filling=${this.filling}
         ?autofocus=${this.autofocus}
         type=${this.type}
         name=${R(this.name)}
         value=${R(this.value)}
         tabindex="0"
         background=${this.background}
         ?disabled=${this.disabled}
         @focus=${this.focus}
         @click=${this._handleButtonClick}
       >
        ${t}
       </button>
     `,o=l`
      <a
         class="awc-button"
         ?filling=${this.filling}
         ?autofocus=${this.autofocus}
         tabindex="0"
         background=${this.background}
         ?disabled=${this.disabled}
         href=${this.href}
         @focus=${this.focus}
         target=${R(this.target)}
         @click=${this._handleButtonClick}
       >
       ${t}
      </a>
     `;return this.href?o:e}},i.AwcButton.styles=[Gs],X([c({type:String,reflect:!0})],i.AwcButton.prototype,"name",2),X([c({type:String,reflect:!0})],i.AwcButton.prototype,"value",2),X([c({type:String,reflect:!0})],i.AwcButton.prototype,"background",2),X([c({type:String,reflect:!0})],i.AwcButton.prototype,"size",2),X([c({type:String,reflect:!0})],i.AwcButton.prototype,"variant",2),X([c({type:String,reflect:!0})],i.AwcButton.prototype,"type",2),X([c({type:String})],i.AwcButton.prototype,"target",2),X([c({type:String,reflect:!0})],i.AwcButton.prototype,"href",2),X([c({type:Boolean,reflect:!0})],i.AwcButton.prototype,"disabled",2),X([c({type:Boolean,reflect:!0})],i.AwcButton.prototype,"filling",2),X([c({type:Boolean,reflect:!0})],i.AwcButton.prototype,"loading",2),X([c({type:Boolean,reflect:!0})],i.AwcButton.prototype,"autofocus",2),X([U()],i.AwcButton.prototype,"pointerEvent",2),X([S(".awc-button")],i.AwcButton.prototype,"button",2),i.AwcButton=X([g(Io)],i.AwcButton);/**
  * @license
  * Copyright 2020 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const Zs=a=>a.strings===void 0,Ks={},Xs=(a,t=Ks)=>a._$AH=t;/**
  * @license
  * Copyright 2020 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const Qt=ar(class extends ir{constructor(a){if(super(a),a.type!==Ot.PROPERTY&&a.type!==Ot.ATTRIBUTE&&a.type!==Ot.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Zs(a))throw Error("`live` bindings can only contain a single expression")}render(a){return a}update(a,[t]){if(t===at||t===z)return t;const e=a.element,o=a.name;if(a.type===Ot.PROPERTY){if(t===e[o])return at}else if(a.type===Ot.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(o))return at}else if(a.type===Ot.ATTRIBUTE&&e.getAttribute(o)===t+"")return at;return Xs(a),t}}),Ys=b`
   :host {
     display: inline-flex;
 
     --awc-checkbox-size: var(--awc-checkbox-size-regular);
     --awc-checkbox-mark: var(--awc-checkbox-mark-regular);
 
     --awc-checkbox-mark-regular: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M6 10L9 13L15 7' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
     --awc-checkbox-mark-small: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='16' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M6 10L9 13L15 7' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
 
     --awc-checkbox-size-small: 16px;
     --awc-checkbox-size-regular: 20px;
 
     --awc-checkbox-background: var(--awc-checkbox-background-theme);
     --awc-checkbox-background-hover: var(--awc-checkbox-background-hover-theme);
 
     --awc-checkbox-background-checked: var(
       --awc-checkbox-custom-color,
       var(--awc-checkbox-background-checked-theme)
     );
     --awc-checkbox-background-checked-hover: var(
       --awc-checkbox-background-checked-hover-theme
     );
 
     --awc-checkbox-border-color: var(
       --awc-checkbox-custom-color,
       var(--awc-checkbox-border-theme)
     );
     --awc-checkbox-border-color-hover: var(--awc-checkbox-border-hover-theme);
 
     --awc-checkbox-border-color-checked: var(--awc-checkbox-background);
 
     --awc-checkbox-label: var(--awc-checkbox-label-theme);
   }
 
   :host([size="small"]) {
     --awc-checkbox-size: var(--awc-checkbox-size-small);
     --awc-checkbox-mark: var(--awc-checkbox-mark-small);
   }
 
   .awc-checkbox__wrapper {
     display: flex;
     flex-direction: column;
     align-items: flex-start;
   }
 
   .awc-checkbox__container {
     display: flex;
     justify-content: center;
     align-items: center;
     
     width: var(--awc-checkbox-size);
     height: var(--awc-checkbox-size);
   }
 
   /* :host([focused]:hover) span {
     background-color: var(--colors-light-primary-hover);
     border-color: var(--colors-light-primary-hover);
   } */
 
   :host([checked]) .awc-checkbox {
     background-color: var(--awc-checkbox-background-checked);
     outline-color: var(--awc-checkbox-border-color-checked);
     transition:
       background-color 0.3s ease-out;
   }
 
   :host([checked]) .awc-checkbox__label:hover .awc-checkbox {
     transition:
       background-color 0.3s ease-out;
     background-color: var(--awc-checkbox-background-checked-hover);
     outline-color: var(--awc-checkbox-border-color-checked);
   }
 
   :host([checked][custom-color]) .awc-checkbox__label:hover .awc-checkbox {
     background-color: var(--awc-checkbox-background-checked);
     filter: brightness(95%);
   }
 
   :host([disabled]) .awc-checkbox,
   :host([disabled]) .awc-checkbox__label,
   :host([disabled]) .checkbox {
     opacity: 0.5;
     cursor: not-allowed;
     pointer-events: none;
   }
 
   :host([disabled]:hover) .awc-checkbox {
     background-color: var(--colors-light-white);
   }
 
   :host([disabled][checked]:hover) .awc-checkbox {
     background-color: var(--awc-checkbox-background-checked);
     /* border-color: var(--awc-checkbox-border-color); */
   }
 
   .awc-checkbox {
     cursor: pointer;
     position: relative;
 
     display: flex;
     justify-content: center;
     align-items: center;
    
     width: var(--awc-checkbox-size);
     height: var(--awc-checkbox-size);
     max-width: var(--awc-checkbox-size);
     max-height: var(--awc-checkbox-size);
 
     border-radius: var(--corner-radius-s);
     outline: 1px solid var(--awc-checkbox-border-color);
     background-color: var(--awc-checkbox-background);
 
     transition:
       background-color 0.3s ease,
       outline-color 0.3s ease-out;
   }
 
   .awc-checkbox__label:hover .awc-checkbox {
     transition:
       background-color 0.3s,
       outline-color 0.3s;
     background-color: var(--awc-checkbox-background-hover);
     outline-color: var(--awc-checkbox-border-color-hover);
   }
 
   .awc-checkbox::after {
     content: var(--awc-checkbox-mark);
 
     /* display: flex;
     justify-content: center;
     align-items: center; */
 
     max-width: inherit;
     max-height: inherit;
 
     transform: scale3d(0, 0, 0);
     transition: transform 0.3s ease;
   }
 
   :host([checked]) .awc-checkbox::after {
     transform: scale3d(1, 1, 1);
   }
 
   .checkbox {
     cursor: pointer;
     width: inherit;
     height: inherit;
 
     position: absolute;
 
     opacity: 1;
     margin: 0;
      
     -webkit-appearance: none;
     border-radius: var(--corner-radius-s);
   }
   
   .checkbox:focus-visible {
     outline-offset: 0px;
     outline: 1px solid var(--colors-light-focus);
   }
 
   /* :host .checkbox:focus-visible::before {
     content: "";
     position: absolute;
     border: 3px solid #839ff633;
     inset: -3px;
     border-radius: var(--corner-radius-m);
     pointer-events: none;
   }
 
   :host([checked]) .checkbox:focus-visible {
     border: 1px solid var(--colors-light-primary);
   } */
 
   .awc-checkbox__label {
     display: flex;
     flex-direction: row-reverse;
     align-items: center;
     gap: 12px;
     cursor: pointer;
     color: var(--awc-checkbox-label);
     font: var(--awc-font-text-regular-14);
   }
 
   :host([static-error]) .awc-checkbox__label.checkbox--error,
   .awc-checkbox__label.checkbox--error {
     color: var(--colors-light-warning);
   }
 
   .awc-checkbox__error {
     margin-top: var(--spacing-s);
     font: var(--awc-font-caption-1-regular);
     color: var(--colors-light-warning);
   }
 
   .checkbox.checkbox--error {
     outline: 1px solid var(--colors-light-warning);
   }
 
   :host([static-error][custom-error][required]) .awc-checkbox {
     outline-color: var(--colors-light-warning);
   }
 `;var Js=Object.defineProperty,Qs=Object.getOwnPropertyDescriptor,q=(a,t,e,o)=>{for(var r=o>1?void 0:o?Qs(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&Js(t,e,r),r};const Bo="awc-checkbox";i.AwcCheckbox=class extends ut(w){constructor(){super(...arguments),this.label="",this.name="",this.checked=!1,this.required=!1,this.disabled=!1,this.indeterminate=!1,this.staticError=!1,this.customError="",this.size="regular",this.validationMessage="",this._handleFieldValueChange=t=>{this.checked=t.detail.includes(this.value)},this._onInvalid=t=>{t.preventDefault(),this.validationTarget.focus()}}validityCallback(){var t;return(t=this.validationTarget)==null?void 0:t.validationMessage}validationMessageCallback(t){this.customError&&!this.staticError?(this.validationMessage=t,this.validationMessage=this.customError):this.validationMessage=t}resetFormControl(){this.checked=!1}shouldFormValueUpdate(){return this.checked}update(t){super.update(t),(t.has("checked")||t.has("value"))&&this.setValue(this.value),t.has("customColor")&&this._settingCustomColor()}connectedCallback(){super.connectedCallback(),this.addEventListener("invalid",this._onInvalid),document.addEventListener("DOMContentLoaded",()=>{this.field=this.closest(Lo),this.field&&this.addEventListener(To,this._handleFieldValueChange)})}disconnectedCallback(){var t;super.disconnectedCallback(),this.removeEventListener("invalid",this._onInvalid),(t=this.field)==null||t.removeEventListener(To,this._handleFieldValueChange)}focus(){this.checkboxElement.tabIndex=0,this.checkboxElement.focus(),this.onFocus(this.value)}blur(){this.onBlur(this.value),this.field&&(this.checkboxElement.tabIndex=-1)}_settingCustomColor(){this.customColor&&this.style.setProperty("--awc-checkbox-custom-color",this.customColor)}_handleChange(t){const e=t.target;e.checkValidity(),this.checked=e.checked,this.onChange(e.checked),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.indeterminate=!1}render(){const t={checkbox:!0,"checkbox--error":this.showError},e={"awc-checkbox__label":!0,"checkbox--error":this.showError||this.staticError&&this.required};return l`
       <div class="awc-checkbox__wrapper">
         <label class="${Y(e)}"
           >${this.label}
           <div class="awc-checkbox__container">
             <span class="awc-checkbox"></span>
             <input
               class="${Y(t)}"
               type="checkbox"
               label=${this.label}
               name=${this.name}
               value=${R(this.value)}
               .checked=${Qt(this.checked)}
               ?disabled=${this.disabled}
               ?required=${this.required}
               .indeterminate=${this.indeterminate}
               @change=${this._handleChange}
               @blur=${this.blur}
             />
           </div>
         </label>
 
         ${this.showError&&this.required&&!this.staticError?l`<span class="awc-checkbox__error"
               >${this.validationMessage}</span
             >`:""}
         ${this.staticError&&this.required&&this.customError?l`<span class="awc-checkbox__error">${this.customError}</span>`:""}
       </div>
     `}},i.AwcCheckbox.shadowRootOptions={...w.shadowRootOptions,delegatesFocus:!0},i.AwcCheckbox.formControlValidators=[gr],i.AwcCheckbox.styles=[Ys],q([c({type:String,reflect:!0})],i.AwcCheckbox.prototype,"value",2),q([c({type:String,reflect:!0})],i.AwcCheckbox.prototype,"label",2),q([c({type:String,reflect:!0})],i.AwcCheckbox.prototype,"name",2),q([c({type:Boolean,reflect:!0})],i.AwcCheckbox.prototype,"checked",2),q([c({type:Boolean,reflect:!0})],i.AwcCheckbox.prototype,"required",2),q([c({type:Boolean,reflect:!0})],i.AwcCheckbox.prototype,"disabled",2),q([c({type:Boolean,reflect:!0})],i.AwcCheckbox.prototype,"indeterminate",2),q([c({type:Boolean,reflect:!0,attribute:"static-error"})],i.AwcCheckbox.prototype,"staticError",2),q([c({reflect:!0,attribute:"custom-error"})],i.AwcCheckbox.prototype,"customError",2),q([c({reflect:!0})],i.AwcCheckbox.prototype,"size",2),q([c({reflect:!0,attribute:"custom-color"})],i.AwcCheckbox.prototype,"customColor",2),q([U()],i.AwcCheckbox.prototype,"validationMessage",2),q([k("awc-checkbox-change")],i.AwcCheckbox.prototype,"onChange",2),q([k("awc-focus")],i.AwcCheckbox.prototype,"onFocus",2),q([k("awc-blur")],i.AwcCheckbox.prototype,"onBlur",2),q([S("input")],i.AwcCheckbox.prototype,"checkboxElement",2),q([S("label")],i.AwcCheckbox.prototype,"labelCheckboxElement",2),q([S("input[type=checkbox]")],i.AwcCheckbox.prototype,"validationTarget",2),i.AwcCheckbox=q([g(Bo)],i.AwcCheckbox);const tn=b`
   :host {
     --awc-checkbox-group-title-color: var(--awc-checkbox-group-title-theme);
   }
 
   .awc-checkbox-group {
     display: flex;
     flex-direction: column;
     gap: var(--spacing-s);
   }
 
   .awc-checkbox-group__label {
     color: var(--awc-checkbox-group-title-color);
     font: var(--awc-font-text-medium-14);
   }
 
   .awc-checkbox-group__options {
     display: flex;
     flex-direction: column;
     gap: var(--spacing-l);
   }
 
   :host([horizontal]) .awc-checkbox-group__options {
     flex-direction: row;
   }
 
   .awc-checkbox-group__hint {
     margin-top: var(--spacing-s);
     font: var(--awc-font-caption-1-regular);
     color: var(--colors-light-secondary);
   }
 `;var en=Object.defineProperty,rn=Object.getOwnPropertyDescriptor,te=(a,t,e,o)=>{for(var r=o>1?void 0:o?rn(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&en(t,e,r),r};const Lo="awc-checkbox-group",To="awc-checkbox-group-change";i.AwcCheckboxGroup=class extends ut(w){constructor(){super(...arguments),this.value=[],this.label="",this.hint="",this.horizontal=!1,this.focusedOptionIndex=0}get options(){return[...this.querySelectorAll(Bo)]}get checkedOptions(){return this.options.filter(t=>t.checked).map(t=>t.value)}get availableOptions(){return this.options.filter(t=>!t.disabled)}connectedCallback(){super.connectedCallback(),this.tabIndex=0,this._handleCheckboxItem(),this.addEventListener("focus",this.handleFocus),this.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this.handleFocus),this.removeEventListener("keydown",this.handleKeyDown)}updated(t){super.updated(t),t.has("value")&&(this.setValue(this.checkedOptions.join(", ")),this._onChange(this.value))}_handleCheckboxItem(){this.value=this.checkedOptions}handleKeyDown(t){if(["ArrowDown","ArrowRight"].includes(t.key))this.focusedOptionIndex++;else if(["ArrowUp","ArrowLeft"].includes(t.key))this.focusedOptionIndex--;else if(t.key==="Tab"){if(t.shiftKey?this.focusedOptionIndex--:this.focusedOptionIndex++,this.focusedOptionIndex===this.availableOptions.length){this.tabIndex=0,this.focusedOptionIndex=0;return}}else return;this.focusedOptionIndex=Math.max(0,Math.min(this.focusedOptionIndex,this.availableOptions.length-1)),this.availableOptions[this.focusedOptionIndex].focus(),t.preventDefault()}handleFocus(){this.availableOptions[this.focusedOptionIndex].focus()}render(){return l`
         <div class="awc-checkbox-group"
             role="group"
             aria-labelledby="label"
             .value="${Qt(this.value)}">
             <legend class="awc-checkbox-group__label">${this.label}</legend>
                 <div class="awc-checkbox-group__options"
                     @awc-checkbox-change=${this._handleCheckboxItem}>
                 <slot></slot>
             </div>
             ${this.hint?l`<span class="awc-checkbox-group__hint">${this.hint}</span>`:""}
         </div>
     `}},i.AwcCheckboxGroup.styles=[tn],te([c({type:Array,reflect:!0})],i.AwcCheckboxGroup.prototype,"value",2),te([c({type:String,reflect:!0})],i.AwcCheckboxGroup.prototype,"label",2),te([c({type:String,reflect:!0})],i.AwcCheckboxGroup.prototype,"hint",2),te([c({type:Boolean,reflect:!0})],i.AwcCheckboxGroup.prototype,"horizontal",2),te([k("awc-checkbox-group-change")],i.AwcCheckboxGroup.prototype,"_onChange",2),i.AwcCheckboxGroup=te([g(Lo)],i.AwcCheckboxGroup);const on=b`
   :host {
     display: inline-block;
     --awc-switcher-width: var(--awc-switcher-width-regular);
     --awc-switcher-height: var(--awc-switcher-height-regular);
 
     --awc-switcher-roller: var(--awc-switcher-roller-regular);
     --awc-switcher-roller-move: var(--awc-switcher-roller-move-regular);
 
     --awc-switcher-background: var(--awc-switcher-background-theme);
     --awc-switcher-background-hover: var(--awc-switcher-background-hover-theme);
 
     --awc-switcher-background-checked: var(
       --awc-switcher-custom-color,
       var(--awc-switcher-background-checked-theme)
     );
 
     --awc-switcher-background-checked-hover: var(
       --awc-switcher-background-checked-hover-theme
     );
 
     --awc-switcher-label-color: var(--awc-switcher-label-theme);
 
     --awc-switcher-width-regular: 35px;
     --awc-switcher-height-regular: 20px;
 
     --awc-switcher-width-small: 28px;
     --awc-switcher-height-small: 16px;
 
     --awc-switcher-roller-regular: 14px;
     --awc-switcher-roller-small: 12px;
 
     --awc-switcher-roller-move-regular: 3px;
     --awc-switcher-roller-move-small: 2px;
   }
 
   :host([size="small"]) {
     --awc-switcher-width: var(--awc-switcher-width-small);
     --awc-switcher-height: var(--awc-switcher-height-small);
     --awc-switcher-roller: var(--awc-switcher-roller-small);
     --awc-switcher-roller-move: var(--awc-switcher-roller-move-small);
   }
 
   .awc-switcher__label {
     cursor: pointer;
     display: inline-flex;
     align-items: center;
     gap: 12px;
     color: var(--awc-switcher-label-color);
     font: var(--awc-font-text-regular-14);
   }
 
   .awc-switch {
     position: relative;
     cursor: pointer;
     width: var(--awc-switcher-width);
     height: var(--awc-switcher-height);
     background-color: var(--awc-switcher-background);
     display: flex;
     align-items: center;
     border-radius: var(--corner-radius-circular);
     transition:
       background-color 0.3s ease-in-out,
       filter 0.3s ease-in-out;
   }
 
   .awc-switch:focus-visible {
     outline: 1px solid var(--colors-light-focus);
   }
 
   /* TODO add gray color variable */
   :host([variant="gray"][checked]) .awc-switch {
     background-color: #929bb6;
   }
 
   :host([variant="gray"][checked]:hover) .awc-switch {
     background-color: #929bb6;
     opacity: 0.9;
   }
 
   :host([variant="white"]) .awc-switch {
     border: 1px solid transparent;
   }
 
   :host([variant="white"][checked]) .awc-switch {
     background-color: var(--colors-light-white);
     border: 1px solid #929bb6;
   }
 
   :host([variant="white"][checked]:hover) .awc-switch {
     background-color: var(--colors-light-white);
     opacity: 0.9;
   }
 
   :host([variant="white"][checked]) .awc-switch::before {
     background-color: #929bb6;
   }
 
   .awc-switch::before {
     content: "";
     position: relative;
     left: var(--awc-switcher-roller-move);
     width: var(--awc-switcher-roller);
     height: var(--awc-switcher-roller);
     background-color: var(--colors-light-white);
     border-radius: var(--corner-radius-circular);
     transition: transform 0.3s ease;
   }
 
   :host([checked]) .awc-switch::before {
     transform: translateX(100%);
   }
 
   :host(:hover) .awc-switch {
     background-color: var(--awc-switcher-background-hover);
   }
 
   :host([checked]) .awc-switch {
     background-color: var(--awc-switcher-background-checked);
   }
 
   :host([checked]) .awc-switch::after {
     transform: translateX(100%);
   }
 
   :host([checked]:hover) .awc-switch {
     background-color: var(--awc-switcher-background-checked-hover);
   }
 
   :host([checked][custom-color]:hover) .awc-switch {
     background-color: var(--awc-switcher-custom-color);
     filter: brightness(95%);
   }
 
   :host([disabled]) {
     opacity: 0.5;
     cursor: not-allowed;
     pointer-events: none;
   }
 
   /* .awc-switch:focus-visible .awc-switch__focus {
     content: '';
     position: absolute;
     border: 3px solid #839FF633; 
     inset: -3px;
     border-radius: var(--corner-radius-circular);
     pointer-events: none;
   } */
 `;var an=Object.defineProperty,sn=Object.getOwnPropertyDescriptor,bt=(a,t,e,o)=>{for(var r=o>1?void 0:o?sn(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&an(t,e,r),r};const nn="awc-switcher";i.AwcSwitcher=class extends ut(w){constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.variant="primary",this.size="regular"}_onChange(){this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}_handleToggle(){this.disabled||(this.checked=!this.checked,this._onToggle(this.checked),this._onChange())}_handleKeyDown(t){(t.code==="Enter"||t.code==="Space")&&(this._handleToggle(),t.preventDefault())}_settingCustomColor(){this.customColor&&this.style.setProperty("--awc-switcher-custom-color",this.customColor)}resetFormControl(){this.checked=!1}shouldFormValueUpdate(){return this.checked}updated(t){super.updated(t),(t.has("checked")||t.has("value"))&&this.setValue(this.value),t.has("customColor")&&this._settingCustomColor()}render(){return l`
       <label class="awc-switcher__label" @click=${this._handleToggle}>
        
         <span
           class="awc-switch"
           role="switch"
           ?checked=${this.checked}
           aria-readonly=${!!this.disabled}
           @keydown=${this._handleKeyDown}
           tabindex="0"
         >
         <div class="awc-switch__focus"></div>
         </span>
         <slot class="label"></slot>
       </label>
     `}},i.AwcSwitcher.styles=[on],bt([c({type:Boolean,reflect:!0})],i.AwcSwitcher.prototype,"checked",2),bt([c({type:Boolean,reflect:!0})],i.AwcSwitcher.prototype,"disabled",2),bt([c({type:String,reflect:!0})],i.AwcSwitcher.prototype,"name",2),bt([c({type:String,reflect:!0})],i.AwcSwitcher.prototype,"value",2),bt([c({type:String,reflect:!0})],i.AwcSwitcher.prototype,"variant",2),bt([c({type:String,reflect:!0})],i.AwcSwitcher.prototype,"size",2),bt([c({reflect:!0,attribute:"custom-color"})],i.AwcSwitcher.prototype,"customColor",2),bt([k("awc-switcher-toggle")],i.AwcSwitcher.prototype,"_onToggle",2),i.AwcSwitcher=bt([g(nn)],i.AwcSwitcher);const cn=b`
   :host {
     --spacing-none: 0;
     --awc-divider-background: var(--awc-divider-background-theme);
     --awc-divider-text-color: var(--awc-divider-text-theme);
   }
 
   .awc-divider {
     position: relative;
     padding: var(--awc-divider-spacing) 0;
     text-align: center;
     color: var(--awc-divider-text-color);
   }
 
   .awc-divider__line {
     content: "";
     position: absolute;
     top: 50%;
     left: 0;
     right: 0;
     height: 1px;
     background-color: var(--awc-divider-background);
   }
 
   .awc-divider__text::before {
     content: "";
     top: 50%;
     left: 0;
     height: 1px;
     width: 100%;
     background-color: var(--awc-divider-background);
   }
 
   .awc-divider__text {
     display: flex;
     align-items: center;
     justify-content: center;
     text-align: center;
     gap: 11px;
     font: var(--awc-font-caption-1-regular);
     position: relative;
     white-space: nowrap;
   }
 
   .awc-divider__text::after {
     content: "";
     top: 50%;
     right: 0;
     height: 1px;
     width: 100%;
     background-color: var(--awc-divider-background);
   }
 `;var ln=Object.defineProperty,dn=Object.getOwnPropertyDescriptor,mr=(a,t,e,o)=>{for(var r=o>1?void 0:o?dn(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&ln(t,e,r),r};i.AwcDivider=class extends w{constructor(){super(...arguments),this.spacing="l"}render(){return l`
       <div
         class="awc-divider"
         style="--awc-divider-spacing: var(--spacing-${this.spacing});"
       >
         ${this.label?l`<span class="awc-divider__text">${this.label}</span>`:l`<div class="awc-divider__line"></div>`}
       </div>
     `}},i.AwcDivider.styles=[cn],mr([c({type:String,reflect:!0})],i.AwcDivider.prototype,"label",2),mr([c({type:String,reflect:!0})],i.AwcDivider.prototype,"spacing",2),i.AwcDivider=mr([g("awc-divider")],i.AwcDivider);const Do=["valueMissing","typeMismatch","tooLong","tooShort","rangeUnderflow","rangeOverflow","stepMismatch","badInput","patternMismatch","customError"].map(a=>({key:a,isValid(t){return t.validationTarget?!t.validationTarget.validity[a]:!0}})),un={...Ts,isValid(a){return a.validationTarget&&a.getAttribute("maxlength")?Number(a.getAttribute("maxlength"))>=a.validationTarget.value.length:!0}};[...Do];const hn=b`
   :host {
     --small: 36px;
     --medium: 40px;
     --large: 48px;
 
     --awc-input-background-color: var(--awc-input-background-theme);
     --awc-input-background-hover-color: var(--awc-input-background-hover-theme);
     --awc-input-background-focus-color: var(--awc-input-background-focus-theme);
 
     --awc-input-label-color: var(--awc-input-title-theme);
     --awc-input-text-color: var(--awc-input-text-theme);
     --awc-input-placeholder-color: var(--awc-input-placeholder-theme);
 
     --awc-input-border-focus-color: var(--awc-input-border-focus-theme);
   }
 
   .awc-input__main {
     width: 100%;
     display: flex;
     flex-direction: column;
   }
 
   .awc-input__wrapper {
     display: flex;
     justify-content: space-between;
     align-items: center;
   }
 
   .awc-input__slot ::slotted(*) {
     padding-left: var(--spacing-s);
   }
 
   .awc-input__container {
     display: flex;
     flex-direction: column;
     width: 100%;
     position: relative;
   }
 
   .awc-input {
     position: relative;
     padding: 0 14px;
     max-width: 100%;
 
     font: var(--awc-font-text-regular-15);
 
     color: var(--awc-input-text-color);
     background-color: var(--awc-input-background-color);
 
     border: none;
     border-radius: var(--corner-radius-m);
     outline: 1px solid transparent;
 
     transition:
       outline-color 0.25s ease-out,
       background-color 0.25s ease,
       border-color 0.25s ease;
   }
 
   :host([size="small"]) .awc-input {
     height: var(--small);
   }
 
   :host([size="medium"]) .awc-input {
     height: var(--medium);
   }
 
   :host([size="large"]) .awc-input {
     height: var(--large);
   }
 
   .awc-input::placeholder {
     color: var(--awc-input-placeholder-color);
   }
 
   .awc-input:hover {
     background: var(--awc-input-background-hover-color);
   }
 
   .awc-input:focus {
     outline: 1px solid var(--awc-input-border-focus-color);
     background-color: var(--awc-input-background-focus-color);
   }
 
   /* .awc-input:focus {
     outline: none;
     background: var(--colors-light-white);
     border: 1px solid #839ff6;
   }
 
   .awc-input:focus + .awc-input__focus {
     content: "";
     z-index: 1;
     position: absolute;
     border: 3px solid #839ff633;
     inset: -3px;
     border-radius: var(--corner-radius-l);
     pointer-events: none;
   } */
 
   .awc-input__label {
     max-width: max-content;
     display: inline-block;
     padding: 0;
     margin-bottom: var(--spacing-s);
     font: var(--awc-font-text-medium-14);
     color: var(--awc-input-label-color);
   }
 
   :host([required]) .awc-input__label::after {
     content: "*";
     color: var(--colors-light-warning);
     margin-left: 4px;
   }
 
   :host([disabled]) .awc-input {
     opacity: 0.5;
     cursor: not-allowed;
   }
 
   :host([readonly]) .awc-input {
     cursor: not-allowed;
   }
 
   .awc-input__password {
     display: flex;
     position: absolute;
     border: none;
     padding: 0;
     right: 14px;
     top: 50%;
     transform: translateY(-50%);
     background: none;
     cursor: pointer;
   }
 
   .awc-input.has-padding-icon {
     padding: 0 55px 0 14px;
   }
 
   .awc-input__progress {
     display: flex;
     align-items: stretch;
     justify-content: flex-end;
     width: 22px;
     height: 22px;
     border-radius: var(--corner-radius-circular);
     position: absolute;
     border: none;
     padding: 0;
     right: 14px;
     top: 50%;
     transform: translateY(-50%);
     transition: background 0.4s ease;
     background: conic-gradient(
       var(--colors-light-primary) var(--progress),
       var(--colors-light-stroke) 0deg
     );
   }
 
   .awc-input__progress.awc-input__progress--percent {
     background: conic-gradient(
       var(--colors-light-secondary) var(--progress),
       var(--colors-light-stroke) 0deg
     );
   }
 
   .awc-input__progress::before {
     content: attr(length);
     display: flex;
     justify-content: center;
     flex-direction: column;
     align-items: center;
     border-radius: 50%;
     background-color: var(--colors-light-white);
     margin: 3px;
     width: 100%;
   }
 
   .awc-input__progress.awc-input__progress--length-warning {
     background: var(--colors-light-warning);
   }
 
   .awc-input__progress--length-warning.awc-input__progress::before {
     background: none;
     color: var(--colors-light-white);
     font: var(--awc-font-caption-3-regular);
     letter-spacing: -0.5px;
   }
 
   .awc-input__progress--length-warning.awc-input__progress--small-font.awc-input__progress::before {
     font-size: 8px;
   }
 
   .awc-input__arrows {
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: space-between;
     position: absolute;
     border: none;
     padding: 0;
     right: 14px;
     top: 50%;
     transform: translateY(-50%);
   }
 
   .awc-input__arrow--up,
   .awc-input__arrow--down {
     cursor: pointer;
     display: flex;
     align-items: center;
     justify-content: center;
   }
 
   .awc-input__arrow--up svg,
   .awc-input__arrow--down svg {
     transition: color 0.3s ease;
     color: var(--colors-light-secondary);
   }
 
   .awc-input__arrow--up:hover svg,
   .awc-input__arrow--down:hover svg {
     color: var(--colors-dark-dark-violet);
   }
 
   .awc-input__arrow--up {
     transform: rotate(270deg);
   }
 
   .awc-input__arrow--down {
     transform: rotate(90deg);
   }
 
   .awc-input__error,
   .awc-input__hint {
     margin-top: var(--spacing-s);
     font: var(--awc-font-caption-1-regular);
   }
 
   .awc-input__hint {
     color: var(--colors-light-secondary);
   }
 
   .awc-input__error {
     color: var(--colors-light-warning);
   }
 
   .awc-input.awc-input--error {
     border-color: var(--colors-light-warning);
   }
 
   :host([static-error][custom-error][required]) .awc-input {
     border-color: var(--colors-light-warning);
   }
 
   .awc-input[type="search"]::-webkit-search-decoration,
   .awc-input[type="search"]::-webkit-search-cancel-button,
   .awc-input[type="search"]::-webkit-search-results-button,
   .awc-input[type="search"]::-webkit-search-results-decoration {
     -webkit-appearance: none;
   }
 
   .awc-input[type="number"]::-webkit-inner-spin-button,
   .awc-input[type="number"]::-webkit-outer-spin-button {
     -webkit-appearance: none;
     margin: 0;
   }
 
   .awc-input[type="number"] {
     -moz-appearance: textfield;
   }
 `;var pn=Object.defineProperty,wn=Object.getOwnPropertyDescriptor,T=(a,t,e,o)=>{for(var r=o>1?void 0:o?wn(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&pn(t,e,r),r};const vn="awc-input";i.AwcInput=class extends ut(w){constructor(){super(...arguments),this.value="",this.type="text",this.size="medium",this.customError="",this.autocomplete="off",this.autofocus=!1,this.required=!1,this.disabled=!1,this.readonly=!1,this.staticError=!1,this.validationMessage="",this.inputId=Math.random().toString(36).substring(2)}validityCallback(){var t;return(t=this.validationTarget)==null?void 0:t.validationMessage}validationMessageCallback(t){this.customError&&!this.staticError?(this.validationMessage=t,this.validationMessage=this.customError):this.validationMessage=t}resetFormControl(){this.validationTarget.value=""}_changeVisibilityPassword(){if(this.input&&this._passwordButton){this.input.type=this.input.type==="password"?"text":"password";const t=this.input.type==="password"?'<path fill-rule="evenodd" clip-rule="evenodd" d="M1.88016 4.52534C1.61801 4.03924 1.01143 3.85769 0.525328 4.11984C0.0392261 4.382 -0.142322 4.98858 0.119829 5.47468C0.460909 6.10714 0.886046 6.69103 1.38093 7.21455C1.35044 7.23864 1.32104 7.26476 1.29289 7.2929L0.292888 8.2929C-0.097636 8.68343 -0.097636 9.31659 0.292888 9.70712C0.683413 10.0976 1.31658 10.0976 1.7071 9.70712L2.7071 8.70712C2.77745 8.63677 2.83512 8.55856 2.88012 8.47531C3.49551 8.88444 4.16892 9.22105 4.8856 9.47295L4.51941 11.3039C4.4111 11.8455 4.76232 12.3723 5.30388 12.4806C5.84544 12.5889 6.37226 12.2377 6.48058 11.6961L6.83405 9.92873C7.21597 9.97577 7.6052 10 7.99999 10C8.39479 10 8.78401 9.97577 9.16594 9.92873L9.51941 11.6961C9.62773 12.2377 10.1546 12.5889 10.6961 12.4806C11.2377 12.3723 11.5889 11.8455 11.4806 11.3039L11.1144 9.47295C11.8311 9.22105 12.5045 8.88444 13.1199 8.47531C13.1649 8.55856 13.2225 8.63677 13.2929 8.70712L14.2929 9.70712C14.6834 10.0976 15.3166 10.0976 15.7071 9.70712C16.0976 9.31659 16.0976 8.68343 15.7071 8.2929L14.7071 7.2929C14.679 7.26476 14.6495 7.23864 14.6191 7.21455C15.1139 6.69103 15.5391 6.10714 15.8802 5.47468C16.1423 4.98858 15.9608 4.382 15.4747 4.11984C14.9886 3.85769 14.382 4.03924 14.1198 4.52534C13.0235 6.55825 10.7156 8.00001 7.99999 8.00001C5.2844 8.00001 2.97649 6.55825 1.88016 4.52534Z" fill="#919BB6"/>':'<path fill-rule="evenodd" clip-rule="evenodd" d="M0.0827055 8.39823L0.0783361 8.388C0.0249487 8.26125 -0.00032161 8.12958 -0.000259399 8.00001C-0.000324169 7.87043 0.0249465 7.73876 0.0783366 7.612L0.0827063 7.60177C1.48797 4.34653 4.46036 2 8 2C11.5396 2 14.5119 4.34645 15.9172 7.60162L15.9217 7.612C15.975 7.73875 16.0003 7.87042 16.0003 8C16.0003 8.12958 15.975 8.26125 15.9217 8.388L15.9172 8.39838C14.5119 11.6536 11.5396 14 8 14C4.46036 14 1.48797 11.6535 0.0827055 8.39823ZM8 4C10.4635 4 12.6941 5.55711 13.8989 8C12.6941 10.4429 10.4635 12 8 12C5.53648 12 3.30588 10.4429 2.10113 8C3.30588 5.55711 5.53648 4 8 4ZM8.99999 8C8.99999 8.55228 8.55228 9 7.99999 9C7.44771 9 6.99999 8.55228 6.99999 8C6.99999 7.44772 7.44771 7 7.99999 7C8.55228 7 8.99999 7.44772 8.99999 8ZM11 8C11 9.65685 9.65685 11 7.99999 11C6.34314 11 4.99999 9.65685 4.99999 8C4.99999 6.34315 6.34314 5 7.99999 5C9.65685 5 11 6.34315 11 8Z" fill="#919BB6"/>';this._passwordButton.innerHTML=`
         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
           ${t}
         </svg>
       `}}_updateCharacterLimit(){if(this.input&&this._progressBar&&this.maxlength!==void 0){const t=this.maxlength,e=this.value.length,o=e/t*360;if(e*100/t>70?this._progressBar.classList.add("awc-input__progress--percent"):this._progressBar.classList.remove("awc-input__progress--percent"),this._progressBar.style.setProperty("--progress",`${o}deg`),t<e){const s=t-e;this._progressBar.setAttribute("length",`${s}`),this._progressBar.classList.add("awc-input__progress--length-warning"),s<-99?this._progressBar.classList.add("awc-input__progress--small-font"):this._progressBar.classList.remove("awc-input__progress--small-font")}else this._progressBar.removeAttribute("length"),this._progressBar.classList.remove("awc-input__progress--length-warning")}}_paddingInputIcon(){(this.input&&this._passwordButton||this.input&&this._progressBar)&&this.input.classList.add("has-padding-icon")}_onKeyDown(t){if(t.code==="Enter"&&this.form){t.preventDefault();const e=this.form.querySelector("button[type='submit']"),o=this.form.querySelector("awc-button[type='submit']");e?setTimeout(()=>e.click()):o?(setTimeout(()=>o.click()),br(this.form)):br(this.form)}}_onInput(t){this.value=t.target.value,this.dispatchEvent(new InputEvent("input",{composed:!0,bubbles:!0}))}_onChange(t){this.value=t.target.value,this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}_onInvalid(t){t.preventDefault(),this.input.focus()}_renderPasswordButton(){return l`
       <awc-toolbar-button
         @click="${this._changeVisibilityPassword}"
         class="awc-input__password"
       >
         <svg
           width="16"
           height="16"
           viewBox="0 0 16 16"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M1.88016 4.52534C1.61801 4.03924 1.01143 3.85769 0.525328 4.11984C0.0392261 4.382 -0.142322 4.98858 0.119829 5.47468C0.460909 6.10714 0.886046 6.69103 1.38093 7.21455C1.35044 7.23864 1.32104 7.26476 1.29289 7.2929L0.292888 8.2929C-0.097636 8.68343 -0.097636 9.31659 0.292888 9.70712C0.683413 10.0976 1.31658 10.0976 1.7071 9.70712L2.7071 8.70712C2.77745 8.63677 2.83512 8.55856 2.88012 8.47531C3.49551 8.88444 4.16892 9.22105 4.8856 9.47295L4.51941 11.3039C4.4111 11.8455 4.76232 12.3723 5.30388 12.4806C5.84544 12.5889 6.37226 12.2377 6.48058 11.6961L6.83405 9.92873C7.21597 9.97577 7.6052 10 7.99999 10C8.39479 10 8.78401 9.97577 9.16594 9.92873L9.51941 11.6961C9.62773 12.2377 10.1546 12.5889 10.6961 12.4806C11.2377 12.3723 11.5889 11.8455 11.4806 11.3039L11.1144 9.47295C11.8311 9.22105 12.5045 8.88444 13.1199 8.47531C13.1649 8.55856 13.2225 8.63677 13.2929 8.70712L14.2929 9.70712C14.6834 10.0976 15.3166 10.0976 15.7071 9.70712C16.0976 9.31659 16.0976 8.68343 15.7071 8.2929L14.7071 7.2929C14.679 7.26476 14.6495 7.23864 14.6191 7.21455C15.1139 6.69103 15.5391 6.10714 15.8802 5.47468C16.1423 4.98858 15.9608 4.382 15.4747 4.11984C14.9886 3.85769 14.382 4.03924 14.1198 4.52534C13.0235 6.55825 10.7156 8.00001 7.99999 8.00001C5.2844 8.00001 2.97649 6.55825 1.88016 4.52534Z"
             fill="#919BB6"
           />
         </svg>
       </awc-toolbar-button>
     `}_renderIncrementArrowButtons(){return l`<div class="awc-input__arrows">
       <div @click=${this._increaseCounterValue} class="awc-input__arrow--up">
         <svg
           width="16"
           height="16"
           viewBox="0 0 16 16"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M6.29289 11.7071C5.90237 11.3166 5.90237 10.6834 6.29289 10.2929L8.58579 8L6.29289 5.70711C5.90237 5.31658 5.90237 4.68342 6.29289 4.29289C6.68342 3.90237 7.31658 3.90237 7.70711 4.29289L10.7071 7.29289L11.4142 8L10.7071 8.70711L7.70711 11.7071C7.31658 12.0976 6.68342 12.0976 6.29289 11.7071Z"
             fill="currentColor"
           />
         </svg>
       </div>
       <div @click=${this._decreaseCounterValue} class="awc-input__arrow--down">
         <svg
           width="16"
           height="16"
           viewBox="0 0 16 16"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M6.29289 11.7071C5.90237 11.3166 5.90237 10.6834 6.29289 10.2929L8.58579 8L6.29289 5.70711C5.90237 5.31658 5.90237 4.68342 6.29289 4.29289C6.68342 3.90237 7.31658 3.90237 7.70711 4.29289L10.7071 7.29289L11.4142 8L10.7071 8.70711L7.70711 11.7071C7.31658 12.0976 6.68342 12.0976 6.29289 11.7071Z"
             fill="currentColor"
           />
         </svg>
       </div>
     </div> `}_increaseCounterValue(){let t=parseFloat(this.value||"0");const e=this.step||1,o=this.max!==void 0?this.max:1/0;let r=t+e;r>o&&(r=o),this.value=r.toString(),this.dispatchEvent(new InputEvent("input",{composed:!0,bubbles:!0})),this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}_decreaseCounterValue(){let t=parseFloat(this.value);const e=this.step||1,o=this.min!==void 0?this.min:-1/0;let r=t-e;r<o&&(r=o),this.value=r.toString(),this.dispatchEvent(new InputEvent("input",{composed:!0,bubbles:!0})),this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}focus(){this.input.focus()}blur(){this.input.blur()}select(){this.input.select()}connectedCallback(){super.connectedCallback(),this.addEventListener("invalid",this._onInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._onInvalid)}updated(t){super.updated(t),t.has("value")&&this.setValue(this.value),t.has("value")&&this.maxlength&&this._updateCharacterLimit(),(this.type==="password"||this.maxlength)&&this._paddingInputIcon()}render(){const t={"awc-input":!0,[this.size]:!0,"awc-input--error":this.showError},e=this.type==="password"?this._renderPasswordButton():"",o=this.maxlength&&!e?l`<div class="awc-input__progress"></div>`:"",r=this.type==="number"?this._renderIncrementArrowButtons():"";return l`
       <div class="awc-input__main">
         ${this.label?l`<label for=${this.inputId} class="awc-input__label"
               >${this.label}</label
             >`:""}
         <div class="awc-input__wrapper">
           <div class="awc-input__container">
             <input
               class=${Y(t)}
               id=${this.inputId}
               type=${this.type}
               .value=${Qt(this.value)}
               placeholder=${this.placeholder}
               maxlength="${R(this.maxlength)}"
               minlength="${R(this.minlength)}"
               min="${R(this.min)}"
               max="${R(this.max)}"
               pattern="${R(this.pattern)}"
               step="${R(this.step)}"
               autocomplete="${R(this.autocomplete)}"
               ?autofocus=${this.autofocus}
               ?required=${this.required}
               ?disabled=${this.disabled}
               ?readonly=${this.readonly}
               @change=${this._onChange}
               @input=${this._onInput}
               @keypress=${this._onKeyDown}
             />
 
             ${e} ${o} ${r}
           </div>
           <div class="awc-input__slot">
             <slot></slot>
           </div>
         </div>
 
         ${this.showError&&!this.staticError?l`<span class="awc-input__error"
               >${this.validationMessage}</span
             >`:this.hint&&!this.staticError?l`<span class="awc-input__hint">${this.hint}</span>`:""}
         ${this.staticError&&this.required&&this.customError?l`<span class="awc-input__error">${this.customError}</span>`:this.hint&&this.staticError?l`<span class="awc-input__hint">${this.hint}</span>`:""}
       </div>
     `}},i.AwcInput.formControlValidators=Do,i.AwcInput.shadowRootOptions={...w.shadowRootOptions,delegatesFocus:!0},i.AwcInput.styles=[hn],T([c({type:String,reflect:!0})],i.AwcInput.prototype,"label",2),T([c({reflect:!0})],i.AwcInput.prototype,"value",2),T([c({type:String,reflect:!0})],i.AwcInput.prototype,"placeholder",2),T([c({type:String,reflect:!0})],i.AwcInput.prototype,"name",2),T([c({type:String,reflect:!0})],i.AwcInput.prototype,"hint",2),T([c({reflect:!0})],i.AwcInput.prototype,"type",2),T([c({type:String,reflect:!0})],i.AwcInput.prototype,"size",2),T([c({reflect:!0,attribute:"custom-error"})],i.AwcInput.prototype,"customError",2),T([c({type:Number,reflect:!0})],i.AwcInput.prototype,"maxlength",2),T([c({type:Number,reflect:!0})],i.AwcInput.prototype,"minlength",2),T([c({type:Number,reflect:!0})],i.AwcInput.prototype,"min",2),T([c({type:Number,reflect:!0})],i.AwcInput.prototype,"max",2),T([c({type:Number,reflect:!0})],i.AwcInput.prototype,"step",2),T([c({type:String,reflect:!0})],i.AwcInput.prototype,"pattern",2),T([c({type:String,reflect:!0})],i.AwcInput.prototype,"autocomplete",2),T([c({type:Boolean,reflect:!0})],i.AwcInput.prototype,"autofocus",2),T([c({type:Boolean,reflect:!0})],i.AwcInput.prototype,"required",2),T([c({type:Boolean,reflect:!0})],i.AwcInput.prototype,"disabled",2),T([c({type:Boolean,reflect:!0})],i.AwcInput.prototype,"readonly",2),T([c({type:Boolean,reflect:!0,attribute:"static-error"})],i.AwcInput.prototype,"staticError",2),T([U()],i.AwcInput.prototype,"validationMessage",2),T([S("input")],i.AwcInput.prototype,"validationTarget",2),T([S(".awc-input")],i.AwcInput.prototype,"input",2),T([S(".awc-input__password")],i.AwcInput.prototype,"_passwordButton",2),T([S(".awc-input__progress")],i.AwcInput.prototype,"_progressBar",2),i.AwcInput=T([g(vn)],i.AwcInput);const gn=b`
   :host {
     display: block;
 
     --awc-textarea-background-color: var(--awc-textarea-background-theme);
     --awc-textarea-background-hover-color: var(
       --awc-textarea-background-hover-theme
     );
     --awc-textarea-background-focus-color: var(
       --awc-textarea-background-focus-theme
     );
     --awc-textarea-label-color: var(--awc-textarea-title-theme);
     --awc-textarea-text-color: var(--awc-textarea-text-theme);
     --awc-textarea-placeholder-color: var(--awc-textarea-placeholder-theme);
     --awc-textarea-border-focus-color: var(--awc-textarea-border-focus-theme);
   }
 
   .awc-textarea-container {
     display: flex;
     gap: var(--spacing-s);
     flex-direction: column;
   }
 
   label {
     font: var(--awc-font-text-medium-14);
     color: var(--awc-textarea-label-color);
   }
 
   :host([disabled]) .awc-textarea {
     opacity: 0.5;
     cursor: not-allowed;
   }
 
   .awc-textarea {
     width: 100%;
     padding: 9.5px 14px;
     resize: none;
     overflow: auto;
     outline: none;
 
     background-color: var(--awc-textarea-background-color);
     color: var(--awc-textarea-text-color);
     font: var(--awc-font-text-regular-15);
 
     border: 1px solid transparent;
     border-radius: var(--corner-radius-m);
 
     transition:
       background-color 0.25s,
       border-color 0.25s;
   }
 
   .awc-textarea::placeholder {
     color: var(--colors-light-secondary);
   }
 
   .awc-textarea:hover {
     background-color: var(--awc-textarea-background-hover-color);
     transition: background-color 0.3s ease;
   }
 
   .awc-textarea-wrapper {
     display: flex;
     position: relative;
   }
 
   .awc-textarea:focus {
     outline: none;
     background-color: var(--awc-textarea-background-focus-color);
     border: 1px solid var(--awc-textarea-border-focus-color);
     transition:
       background-color 0.3s ease,
       border 0.3s;
   }
 
   /* .awc-textarea:focus + .awc-textarea__focus {
     content: "";
     z-index: 1;
     position: absolute;
     inset: -3px;
     border: 3px solid #839ff633;
     pointer-events: none;
     border-radius: var(--corner-radius-l);
   } */
 
   :host([resize]) .awc-textarea {
     resize: both;
   }
 `;var fn=Object.defineProperty,bn=Object.getOwnPropertyDescriptor,et=(a,t,e,o)=>{for(var r=o>1?void 0:o?bn(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&fn(t,e,r),r};const _n="awc-textarea";i.AwcTextarea=class extends ut(w){constructor(){super(...arguments),this.value="",this.autofocus=!1,this.readonly=!1,this.disabled=!1,this.resize=!1,this.autoheight=!1,this.autocomplete="off",this.rows=2,this.cols=20,this.textAreaId=Math.random().toString(36).substring(2)}_handleInput(){this._autoHeightTextArea(this.textarea),this.value=this.textarea.value,this._onInput.bind(this)}resetFormControl(){this.value=""}_autoHeightTextArea(t){this.autoheight&&!this.resize&&(t.style.height="auto",t.style.height=`${t.scrollHeight}px`)}_onInput(t){this.value=t.target.value,this.dispatchEvent(new InputEvent("input",{composed:!0,bubbles:!0}))}_onChange(t){this.value=t.target.value,this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}updated(t){super.updated(t),t.has("value")&&(this.setValue(this.value),this.textarea.value=this.value)}firstUpdated(){this.textarea.value=this.value,this._autoHeightTextArea(this.textarea)}select(){this.textarea.select()}render(){return l`
       <div class="awc-textarea-container">
         <label for=${this.textAreaId} name="label">${this.label}</label>
         <div class="awc-textarea-wrapper">
           <textarea
             class="awc-textarea"
             id=${this.textAreaId}
             name=${R(this.name)}
             placeholder=${R(this.placeholder)}
             .value=${Qt(this.value)}
             rows=${R(this.rows)}
             cols=${R(this.cols)}
             autocomplete="${R(this.autocomplete)}"
             ?autoheight=${this.autoheight}
             ?resize=${this.resize}
             ?autofocus=${this.autofocus}
             ?readonly=${this.readonly}
             ?disabled=${this.disabled}
             @input=${this._handleInput}
             @change=${this._onChange}
           ></textarea>
           <div class="awc-textarea__focus"></div>
         </div>
       </div>
     `}},i.AwcTextarea.shadowRootOptions={...w.shadowRootOptions,delegatesFocus:!0},i.AwcTextarea.styles=[gn],et([c({type:String,reflect:!0})],i.AwcTextarea.prototype,"value",2),et([c({type:String,reflect:!0})],i.AwcTextarea.prototype,"placeholder",2),et([c({type:String,reflect:!0})],i.AwcTextarea.prototype,"name",2),et([c({type:String,reflect:!0})],i.AwcTextarea.prototype,"label",2),et([c({type:Boolean,reflect:!0})],i.AwcTextarea.prototype,"autofocus",2),et([c({type:Boolean,reflect:!0})],i.AwcTextarea.prototype,"readonly",2),et([c({type:Boolean,reflect:!0})],i.AwcTextarea.prototype,"disabled",2),et([c({type:Boolean,reflect:!0})],i.AwcTextarea.prototype,"resize",2),et([c({type:Boolean,reflect:!0})],i.AwcTextarea.prototype,"autoheight",2),et([c({type:String,reflect:!0})],i.AwcTextarea.prototype,"autocomplete",2),et([c({type:Number,reflect:!0})],i.AwcTextarea.prototype,"rows",2),et([c({type:Number,reflect:!0})],i.AwcTextarea.prototype,"cols",2),et([S("textarea")],i.AwcTextarea.prototype,"textarea",2),i.AwcTextarea=et([g(_n)],i.AwcTextarea);const mn=b`
    .awc-steps {
       display: flex;
       flex-direction: column;
       gap: 16px;
     }
 
     .awc-steps__status {
       display: flex;
       align-items: center;
       gap: 12px;
     }
 
     .awc-steps__sticker {
       font: var(--awc-font-caption-1-regular);
       background-color: var(--colors-light-secondary);
       color: var(--colors-light-white);
       border-radius: var(--corner-radius-l);
       padding: 4px 9px;
     }
 
     .awc-steps__report {
       color: var(--colors-light-titles);
       font: var(--awc-font-headline-medium-16);
     }
 
     .awc-steps__progress {
       width: 100%;
       display: flex;
       gap: 4px;
       overflow: hidden;
       overflow-x: auto;
       padding-bottom: 3px;
     }
 
     .progress-item {
       min-width: 50px;
       width: 100%;
       height: 6px;
       border-radius: var(--corner-radius-s);
       background-color: var(--colors-light-secondary);
       opacity: 0.4;
     }
 
     .progress-item--current {
       background-color: var(--colors-light-primary);
       opacity: 1;
     }
     .progress-item--past {
       background-color: var(--colors-light-primary);
       opacity: 0.7;
     }
 
     .progress-item--completed {
       background-color: var(--colors-light-success);
       opacity: 1;
     }
 
     .progress-item--error {
       background-color: var(--colors-light-warning);
       opacity: 1;
     }
 `;var yn=Object.defineProperty,Cn=Object.getOwnPropertyDescriptor,ze=(a,t,e,o)=>{for(var r=o>1?void 0:o?Cn(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&yn(t,e,r),r};i.AwcSteps=class extends w{constructor(){super(...arguments),this.id="stepper-1",this.report=[],this.status=1}_calcSteps(){const t=this.report.length;return Array.from({length:t},(e,o)=>(o+1).toString())}_stepUpdater(){let t=parseInt(this.status.toString(),10);if((isNaN(t)||t<1)&&(t=1,this.status=t),!this.shadowRoot)return;const e=this.shadowRoot.querySelectorAll(".progress-item");if(t<=this.report.length){e.forEach((r,s)=>{const n=s+1,d=n<t,u=n===t;r.classList.toggle("progress-item--past",d),r.classList.toggle("progress-item--current",u),d&&r.classList.remove("progress-item--completed")});const o=t===this.report.length;e.forEach(r=>{r.classList.toggle("progress-item--completed",o)}),e.forEach(r=>{r.classList.remove("progress-item--error")})}else e.forEach(o=>{o.classList.add("progress-item--error")})}updated(t){super.updated(t),t.has("status")&&this._stepUpdater()}firstUpdated(){this._calcSteps()}render(){return l`
       <div id=${this.id} class="awc-steps">
         <div class="awc-steps__status">
           <div class="awc-steps__sticker">Шаг ${this.status}</div>
           <div class="awc-steps__report">
             ${this.report[this.status,10-1]}
           </div>
         </div>
         <div class="awc-steps__progress">${this._renderProgress()}</div>
       </div>
     `}_renderProgress(){const t=this.report.length;return Array.from({length:t},()=>l`<div class="progress-item"></div>`)}},i.AwcSteps.styles=[mn],ze([c({type:String,reflect:!0})],i.AwcSteps.prototype,"id",2),ze([c({type:Array,reflect:!0})],i.AwcSteps.prototype,"report",2),ze([c({type:Number,reflect:!0})],i.AwcSteps.prototype,"status",2),i.AwcSteps=ze([g("awc-steps")],i.AwcSteps);const An=b`
 
   :host {
     display: flex;
     fill: var(--colors-light-secondary);
     // fixes incorrect display in firefox (verified by awc-die)
     min-height: 16px;
     min-width: 16px;
   }
 
   .awc-icon {
     display: flex;
     max-width: max-content;
   }
 
   :host([icon-scale]) .awc-icon{
     width: var(--awc-icon-size);
     height: var(--awc-icon-size);
   }
 
   .awc-icon{
     width: var(--awc-icon-size);
     height: var(--awc-icon-size);
   }
 `;var xn=Object.defineProperty,kn=Object.getOwnPropertyDescriptor,Re=(a,t,e,o)=>{for(var r=o>1?void 0:o?kn(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&xn(t,e,r),r};i.AwcIconLoader=class extends w{constructor(){super(...arguments),this.type="icon",this.size="",this.src=""}_setGlobalIcons(){const t=this.type,e=this.size,o=this.src,r=window.__AWC_ICONS||{};return window.__AWC_ICONS=r,r[t]||(r[t]={}),r[t][e]=o,r}firstUpdated(){this._setGlobalIcons()}},Re([c({type:String})],i.AwcIconLoader.prototype,"type",2),Re([c({type:String})],i.AwcIconLoader.prototype,"size",2),Re([c({type:String})],i.AwcIconLoader.prototype,"src",2),i.AwcIconLoader=Re([g("awc-icon-loader")],i.AwcIconLoader);var $n=Object.defineProperty,Sn=Object.getOwnPropertyDescriptor,_e=(a,t,e,o)=>{for(var r=o>1?void 0:o?Sn(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&$n(t,e,r),r};const Mo="awc-icon";i.AwcIcon=class extends w{constructor(){super(...arguments),this.type="icon",this.size="16",this.name="",this.iconScale=""}_getGlobalIcon(){const t=window.__AWC_ICONS;if(t&&t[this.type]&&t[this.type][this.size])return t[this.type][this.size]}render(){const t=this._getGlobalIcon();if(t)return N`
         <svg
           class="awc-icon"
           style=${this.iconScale?`--awc-icon-size: ${this.iconScale}`:""}
           width=${this.size}
           height=${this.size}
         >
           <use href="${t}#${this.name}"></use>
         </svg>
         <slot></slot>
       `}},i.AwcIcon.styles=[An],_e([c({type:String,reflect:!0})],i.AwcIcon.prototype,"type",2),_e([c({type:String,reflect:!0})],i.AwcIcon.prototype,"size",2),_e([c({type:String,reflect:!0})],i.AwcIcon.prototype,"name",2),_e([c({type:String,attribute:"icon-scale"})],i.AwcIcon.prototype,"iconScale",2),i.AwcIcon=_e([g(Mo)],i.AwcIcon);const On=b`
   :host {
     display: var(--awc-tooltip-display, inline-flex);
   }
 
   .awc-tooltip {
     pointer-events: none;
     position: absolute;
     z-index: 99999;
     left: -9999px;
     max-width: 240px;
     display: block;
     background-color: var(--colors-light-tooltip);
     border-radius: var(--corner-radius-s);
     opacity: 0;
   }
 
   .awc-tooltip.visible {
     transition: opacity 0.3s ease;
     opacity: 1;
   }
 
   .awc-tooltip__nested {
     display: var(--awc-tooltip-display, inline-flex);
   }
 
   .awc-tooltip__nested:focus,
   .awc-tooltip__nested:focus-visible{
     outline: 2px solid blue;
   }
 
   .awc-tooltip__message {
     font: var(--awc-font-caption-2-regular);
     color: var(--colors-light-white);
     padding: 6px 10px;
     white-space: pre-wrap;
     text-align: center;
     cursor: default;
     margin: 0;
   }
 
   .awc-tooltip.visible {
     display: block;
   }
 
   .awc-tooltip__arrow,
   .awc-tooltip__arrow::before {
     position: absolute;
     width: 8px;
     height: 8px;
     background: inherit;
   }
 
   .awc-tooltip__arrow {
     visibility: hidden;
   }
 
   .awc-tooltip__arrow::before {
     visibility: visible;
     content: "";
     transform: rotate(45deg);
   }
 
   .awc-tooltip[data-popper-placement^="top"] > .awc-tooltip__arrow {
     bottom: -4px;
   }
 
   .awc-tooltip[data-popper-placement^="bottom"] > .awc-tooltip__arrow {
     top: -4px;
   }
 
   .awc-tooltip[data-popper-placement^="left"] > .awc-tooltip__arrow {
     right: -4px;
   }
 
   .awc-tooltip[data-popper-placement^="right"] > .awc-tooltip__arrow {
     left: -4px;
   }
 `;var En=Object.defineProperty,Pn=Object.getOwnPropertyDescriptor,gt=(a,t,e,o)=>{for(var r=o>1?void 0:o?Pn(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&En(t,e,r),r};const In={XXS:"2",XS:"4",S:"8",SM:"12",M:"16",L:"20",XL:"24",XXL:"32",XXXL:"40"};i.AwcTooltip=class extends w{constructor(){super(...arguments),this.marker=!0,this.message="Tooltip",this.position="top",this.spacing="S",this.strategy="absolute",this.active=!1,this.disabled=!1,this.popperInstance=null,this.tooltipTimeout=null}_createPopperInstance(){!this._nestedElement||!this.shadowRoot||(this.popperInstance=je(this._nestedElement,this._tooltip,{placement:this.position,modifiers:[{name:"offset",options:{offset:[0,In[this.spacing]]}}],strategy:this.strategy}))}_destroyPopperInstance(){this.popperInstance&&(this.popperInstance.destroy(),this.popperInstance=null)}updated(t){super.updated(t),(t.has("active")||t.has("position")||t.has("marker")||t.has("spacing"))&&(this.active?this._createPopperInstance():this._destroyPopperInstance())}_setupTimout(){this.disabled||(this.tooltipTimeout=setTimeout(()=>this.active=!0,500))}_disconnectTimeout(){this.disabled||(clearTimeout(this.tooltipTimeout),this.active=!1)}_onFocus(t){t.target&&!this.disabled&&(this.active=!0)}_onBlur(t){t.target&&!this.disabled&&(this.active=!1)}render(){return l`
       <div class="awc-tooltip__nested">
         <slot
           @mouseenter=${this._setupTimout}
           @mouseleave=${this._disconnectTimeout}
           @focus=${{handleEvent:t=>this._onFocus(t),capture:!0}}
           @blur=${{handleEvent:t=>this._onBlur(t),capture:!0}}
         ></slot>
       </div>
 
       <div class="awc-tooltip ${this.active?"visible":""}" role="tooltip">
         <p class="awc-tooltip__message">${this.message}</p>
         ${this.marker?l`<div class="awc-tooltip__arrow" data-popper-arrow></div>`:""}
       </div>
     `}},i.AwcTooltip.shadowRootOptions={...w.shadowRootOptions,delegatesFocus:!0},i.AwcTooltip.styles=[On],gt([c({type:Boolean,reflect:!0})],i.AwcTooltip.prototype,"marker",2),gt([c({type:String,reflect:!0})],i.AwcTooltip.prototype,"message",2),gt([c({reflect:!0})],i.AwcTooltip.prototype,"position",2),gt([c({type:String,reflect:!0})],i.AwcTooltip.prototype,"spacing",2),gt([c({type:String,reflect:!0})],i.AwcTooltip.prototype,"strategy",2),gt([c({type:Boolean,reflect:!0})],i.AwcTooltip.prototype,"active",2),gt([c({type:Boolean,reflect:!0})],i.AwcTooltip.prototype,"disabled",2),gt([S(".awc-tooltip")],i.AwcTooltip.prototype,"_tooltip",2),gt([S(".awc-tooltip__nested")],i.AwcTooltip.prototype,"_nestedElement",2),i.AwcTooltip=gt([g("awc-tooltip")],i.AwcTooltip);/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */let yr=class extends ir{constructor(t){if(super(t),this.it=z,t.type!==Ot.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===z||t==null)return this._t=void 0,this.it=t;if(t===at)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};yr.directiveName="unsafeHTML",yr.resultType=1;const jo=ar(yr),Bn=b`
     .awc-select-item {
         display: flex;
         align-items: center;
         position: relative;
         padding: 10px 14px;
         transition: background-color 0.3s ease;
         cursor: pointer;
         list-style-type: none;
         user-select: none;
     }
     
     :host([selected]) .awc-select-item{
         background-color: var(--colors-light-input-background);
     }
 
     :host([disabled]) .awc-select-item{
       touch-action: none;
       pointer-events: none;
       opacity: 0.5;
     }
 
     :host([hidden]) {
         display: none;
     }
 
     .awc-select-item.no-padding{
         padding: 0;
     }
 
     .awc-item-focus:focus-visible::after {
         content: "";
         position: absolute;
         border: 1px solid #839FF6; 
         inset: 1px;
         border-radius: var(--corner-radius-m);
     }
 
     .awc-select-item:hover {
         background-color: var(--colors-light-input-background);
     }
 
     .awc-select-item__value {
         outline: none;
         display: flex;
         justify-content: start;
         align-items: center;
         gap: var(--spacing-s);
         margin: 0;
         padding: 0;
         font: var(--awc-font-text-regular-14);
         color: var(--colors-light-text);
     }
 `;var Ln=Object.defineProperty,Tn=Object.getOwnPropertyDescriptor,_t=(a,t,e,o)=>{for(var r=o>1?void 0:o?Tn(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&Ln(t,e,r),r};const Cr="awc-select-item";i.AwcSelectItem=class extends ut(w){constructor(){super(...arguments),this.selected=!1,this.disabled=!1}focus(){this.focusTarget.tabIndex=0,this.focusTarget.focus(),this.onFocus(this.value)}blur(){this.onBlur(this.value),this.focusTarget.tabIndex=-1}select(){this._onSelect([{value:this.value,selected:this.selected}])}_handleEvent(){this._onSelect([{value:this.value,selected:this.selected}]),this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}handleKeydown(t){(t.code==="Enter"||t.code==="Space")&&(this._onClickOption(),t.preventDefault())}_onClickOption(){this.selected=!0,this._handleEvent()}render(){return l`
       <li
         role="option"
         aria-selected="${this.selected}"
         ?disabled=${this.disabled}
         class="awc-select-item ${this.noPadding?"no-padding":""}"
         @keydown=${this.handleKeydown}
         @click="${this._onClickOption}"
         @blur=${this.blur}
       >
         <div class="awc-select-item__value awc-item-focus">
           <slot></slot>
         </div>
       </li>
     `}},i.AwcSelectItem.shadowRootOptions={...w.shadowRootOptions,delegatesFocus:!0},i.AwcSelectItem.styles=[Bn],_t([c({type:Boolean,reflect:!0})],i.AwcSelectItem.prototype,"selected",2),_t([c({type:String,reflect:!0})],i.AwcSelectItem.prototype,"value",2),_t([c({type:Boolean,reflect:!0})],i.AwcSelectItem.prototype,"disabled",2),_t([c({type:Boolean,reflect:!0,attribute:"no-padding"})],i.AwcSelectItem.prototype,"noPadding",2),_t([k("awc-select-option")],i.AwcSelectItem.prototype,"_onSelect",2),_t([k("awc-select-option-focus")],i.AwcSelectItem.prototype,"onFocus",2),_t([k("awc-select-option-blur")],i.AwcSelectItem.prototype,"onBlur",2),_t([S(".awc-item-focus")],i.AwcSelectItem.prototype,"focusTarget",2),i.AwcSelectItem=_t([g(Cr)],i.AwcSelectItem);const Dn=b`
     .awc-select-button{
         padding: 0 14px;
         gap: 10px;
         width: 100%;
         cursor: pointer;
         height: 40px;
         display: flex;
         align-items: center;
         background: none;
         outline: none;
         border: 1px solid transparent; 
         font: var(--awc-font-text-medium-14);
         color: var(--colors-light-primary);
     }
 
     .awc-select-button:hover{
         background-color: #F3F4F9;
         transition: .3s ease-in-out;
     }
 
     .awc-select-button__icon{
         fill: var(--colors-light-primary);
     }
 
     .awc-select-button:focus-visible{
         transition: border .3s ease;
         border: 1px solid #839FF6; 
         border-radius: var(--corner-radius-m);
     }
 `;var Mn=Object.defineProperty,jn=Object.getOwnPropertyDescriptor,mt=(a,t,e,o)=>{for(var r=o>1?void 0:o?jn(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&Mn(t,e,r),r};const zo="awc-select-button",zn="awc-select-button-create";i.AwcSelectButton=class extends w{constructor(){super(...arguments),this.slot="awc-button",this.icon=!1,this.staticButton=!1,this.dynamicButton=!1,this.isClick=!1}_handleClick(){if(this.isClick=!0,this._onClick(this.isClick),this.isClick&&this.textContent||this.label)return this.textContent=""}_handleKeyboard(t){if(t.code==="Enter"&&(this._handleClick(),this.isClick&&t.code&&this.textContent||this.label))return this.textContent=""}_handleLabelOrTextContent(){if(this.textContent&&this.label&&!this.icon)return l`${this.label} «${this.textContent}»`;if(this.textContent&&this.label)return l`${this.textContent}`;if(this.label)return l`${this.label}`}render(){const t=N`
             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C7.44772 2 7 2.44772 7 3V7H3C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9H7V13C7 13.5523 7.44772 14 8 14C8.55228 14 9 13.5523 9 13V9H13C13.5523 9 14 8.55228 14 8C14 7.44772 13.5523 7 13 7H9V3C9 2.44772 8.55228 2 8 2Z" fill="#3761E9"/>
             </svg>
         `;return l`
             <button 
                 class="awc-select-button"
                 @click=${this._handleClick}
                 @keydown=${this._handleKeyboard}
                 label=${this.label}
                 tabindex="0"
                 >
                     ${this.icon?l`${t}`:""}
                     ${this._handleLabelOrTextContent()}
                 <slot></slot>
             </button>
         `}},i.AwcSelectButton.styles=[Dn],mt([c({type:String,reflect:!0})],i.AwcSelectButton.prototype,"slot",2),mt([c({type:String,reflect:!0})],i.AwcSelectButton.prototype,"label",2),mt([c({type:Boolean,reflect:!0})],i.AwcSelectButton.prototype,"icon",2),mt([c({type:Boolean,reflect:!0,attribute:"static-button"})],i.AwcSelectButton.prototype,"staticButton",2),mt([c({type:Boolean,reflect:!0,attribute:"dynamic-button"})],i.AwcSelectButton.prototype,"dynamicButton",2),mt([c({type:String})],i.AwcSelectButton.prototype,"copyLabel",2),mt([c()],i.AwcSelectButton.prototype,"textContent",2),mt([k(zn)],i.AwcSelectButton.prototype,"_onClick",2),i.AwcSelectButton=mt([g(zo)],i.AwcSelectButton);const Rn=b`
   .awc-select-group {
     display: flex;
     flex-direction: column;
   }
 
   .awc-select-group__label {
     color: var(--colors-light-secondary);
     font: var(--awc-font-caption-1-regular);
     padding: 2px 10px;
     margin: 0;
   }
 
   :host([hidden]) {
     display: none;
   }
 
   /* .awc-select-group__content {
     padding: 0 10px;
   } */
 `;var Vn=Object.defineProperty,Fn=Object.getOwnPropertyDescriptor,Ro=(a,t,e,o)=>{for(var r=o>1?void 0:o?Fn(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&Vn(t,e,r),r};const Vo="awc-select-group";i.AwcSelectGroup=class extends w{render(){return l`
             <div class='awc-select-group'>
                 <p class='awc-select-group__label'>${this.label}</p>
                 <div class='awc-select-group__content'><slot></slot></div>
             </div>
         `}},i.AwcSelectGroup.styles=[Rn],Ro([c({type:String,reflect:!0})],i.AwcSelectGroup.prototype,"label",2),i.AwcSelectGroup=Ro([g(Vo)],i.AwcSelectGroup);const Gn=b`
   :host {
     width: 100%;
     display: block;
   }
 
   :host([open]) {
     position: relative;
     z-index: 9999;
   }
 
   .awc-select {
     outline: 1px solid transparent;
     border-radius: var(--corner-radius-m);
     inset: -1px;
     transition: outline 0.25s ease;
   }
 
   .awc-select:focus-visible {
     outline: 1px solid var(--colors-light-focus);
   }
 
   /* .awc-select:focus-visible:before {
     content: "";
     position: absolute;
     transition: 0.3s ease;
     border: 1px solid var(--colors-light-focus);
     inset: -1px;
     border-radius: var(--corner-radius-m);
     pointer-events: none;
   } */
 
   :host([multiple]) .awc-select__content {
     flex-wrap: wrap;
     justify-content: flex-start;
     gap: 6px;
   }
 
   .awc-select__content {
     margin: 10px 30px 10px 10px;
     width: 100%;
     display: flex;
     align-items: center;
     font: var(--awc-font-text-regular-14);
     color: var(--colors-light-text);
     white-space: nowrap;
     text-overflow: ellipsis;
     user-select: none;
   }
 
   .awc-select__icons {
     position: absolute;
     height: 100%;
     display: flex;
     align-items: center;
     gap: var(--spacing-xs);
     right: 0;
     background-color: var(--colors-light-input-background);
     padding: 0 4px 0 4px;
   }
 
   .arrow-icon {
     transition: transform 0.3s ease;
   }
 
   .arrow-icon.arrow-rotated {
     transform: rotate(180deg);
   }
 
   :host([reset]) .awc-select__head {
     min-height: 40px;
   }
 
   .awc-select__head {
     position: relative;
     display: flex;
     align-items: center;
     justify-content: space-between;
     overflow: hidden;
     cursor: pointer;
     background-color: var(--colors-light-input-background);
     min-height: calc(60px - 20px);
     border-radius: var(--corner-radius-m);
   }
 
   :host([open]) .awc-select__head.border-radius {
     border-radius: var(--corner-radius-m) var(--corner-radius-m) 0px 0px;
   }
 
   :host([open]) .awc-select__head.border-radius--reverse {
     border-radius: 0px 0px var(--corner-radius-m) var(--corner-radius-m);
   }
 
   .awc-select__placeholder {
     margin: 0;
     color: var(--colors-light-secondary);
     font: var(--awc-font-text-regular-14);
   }
 
   .awc-select__options {
     display: none;
     position: absolute;
     left: 0;
     z-index: 99999;
     width: 100%;
     border-top: none;
     border-radius: 0 0 var(--corner-radius-m) var(--corner-radius-m);
     background-color: var(--colors-light-white);
     box-shadow: 0px 5px 8px 0px rgba(64, 72, 98, 0.15);    
   }
 
   .awc-select-list {
     padding: 0;
     margin: 0;
     list-style-type: none;
     overflow-y: auto;
     max-height: 220px;
   }
 
   .awc-select__options--open {
     display: block;
     cursor: auto;
     max-height: 100vh;
     transition: opacity .2s ease;
     border-radius: 0 0 4px 4px;
   }
 
   :host([disabled]) {
     opacity: 0.5;
     cursor: not-allowed;
     pointer-events: none;
   }
 
   :host([disabled]) .awc-select:focus {
     border: none;
   }
 
   :host([disabled]) .awc-select:focus:before {
     border: none;
   }
 
   :host([open]) .options--reverse {
     display: flex;
     flex-direction: column-reverse;
     box-shadow: 0px -5px 8px 0px rgba(64, 72, 98, 0.15);
     border-radius: var(--corner-radius-m) var(--corner-radius-m) 0 0;
   }
 
   .awc-reset-button {
     margin: 0;
     border: none;
     background: none;
     display: flex;
     align-items: center;
     justify-content: center;
   }
 
   .awc-select__search {
     position: relative;
     display: flex;
     align-items: center;
     background-color: white;
     padding: 4px;
     top: 0;
     z-index: 1;
   }
 
   .awc-select__input {
     width: 100%;
     border: none;
     padding: 0 10px;
     position: relative;
     height: 35px;
     border-radius: 0;
     border-bottom: 1px solid var(--colors-light-stroke);
   }
 
   .awc-select__options--open.options--reverse .awc-select__input {
     border: none;
     border-top: 1px solid var(--colors-light-stroke);
   }
 
   .awc-select__options--open.options--reverse .awc-select__input:focus {
     transition: border 0.3s ease;
     outline: none;
     border-top: 1px solid #839ff6;
   }
 
   .awc-select__input:focus {
     transition: border 0.3s ease;
     outline: none;
     border-bottom: 1px solid #839ff6;
   }
 
   .awc-select-create {
     padding: 1px;
   }
 
   .awc-select__error,
   .awc-select__hint {
     display: block;
     margin-top: var(--spacing-s);
     font: var(--awc-font-caption-1-regular);
   }
 
   .awc-select__hint {
     color: var(--colors-light-secondary);
   }
 
   .awc-select__error {
     color: var(--colors-light-warning);
   }
 
   .awc-select--error.awc-select:focus:before {
     border-color: var(--colors-light-warning);
   }
 
   :host([static-error][custom-error][required]) .awc-select  {
     border: 1px solid var(--colors-light-warning);
     border-radius: var(--corner-radius-m);
   }
 `;var Un=Object.defineProperty,Hn=Object.getOwnPropertyDescriptor,I=(a,t,e,o)=>{for(var r=o>1?void 0:o?Hn(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&Un(t,e,r),r};const qn="awc-select";i.AwcSelect=class extends ut(w){constructor(){super(...arguments),this.value="",this.inputPlacholder="",this.html=!1,this.disabled=!1,this.required=!1,this.autoselectOff=!1,this.reset=!1,this.multiple=!1,this.search=!1,this.customError="",this.staticError=!1,this.validationMessage="",this.filteredOptions=[],this.isOptionListReverse=!1,this.popperInstance=null,this._onInvalid=t=>{t.preventDefault(),this.validationTarget.focus()},this.focusedOptionIndex=-1}get options(){return[...this.querySelectorAll(Cr)]}get selectedOptions(){return this.options.filter(t=>t.selected)}get optionGroups(){return[...this.querySelectorAll(Vo)]}get selectButtons(){return this.querySelector(zo)}_toggleOptionsList(){this.selectedOptions.length&&this.multiple?this._open():this.open?this._close():this._open()}_open(){this.open=!0,this._updateHeadContent(),this._createPopperInstance(),requestAnimationFrame(()=>{this.search&&this.open&&this.inputElement.focus()})}_close(){this.open=!1,this.focusedOptionIndex=-1,this._unhiddingOptions(),this._destroyPopperInstance(),this._clearInputValue()}_unhiddingOptions(){this.options.forEach(t=>t.removeAttribute("hidden")),this.optionGroups.forEach(t=>t.removeAttribute("hidden"))}_getItemValueAttribute(t){return t.value}_getItemTextContent(t){var e;return(e=t.textContent)==null?void 0:e.trim()}_getItemHTMLContent(t){return jo(t.outerHTML)}_updateHeadContent(){this.selectedOptions.forEach(t=>{this.html&&t.outerHTML?(t.setAttribute("no-padding","true"),this.headContent=this._getItemHTMLContent(t)):this.headContent=this._getItemTextContent(t)||this._getItemValueAttribute(t),t.removeAttribute("no-padding")}),this._updateSelectValue()}_updateSelectValue(){this.multiple?this.value=this.selectedOptions.map(t=>this._getItemValueAttribute(t)||this._getItemTextContent(t)):this.selectedOptions.map(t=>this.value=this._getItemValueAttribute(t)||this._getItemTextContent(t)),this._updateFormData()}_singleSelection(t){t&&(this.options.forEach(e=>e.selected=!1),t.selected=!0,this._updateHeadContent(),this._updateChangeEvent())}_multipleSelection(t){this._unhiddingOptions(),this.searchText&&this._clearInputValue(),t&&(t.selected=!0,this._updateHeadContent(),this._updateChangeEvent())}_handleOption(t){const e=t.target;e&&(this._unhiddingOptions(),this.multiple?this._multipleSelection(e):this._singleSelection(e))}_updateChangeEvent(){const t=this.selectedOptions.map(e=>{var o,r;return{value:e.value||((o=e.textContent)==null?void 0:o.trim())||"",text:((r=e.textContent)==null?void 0:r.trim())||"",selected:!0}});this._onChangeSelect(t)}_handleChipsClick(t,e){t.stopPropagation(),this._removeChipsItem(e)}_renderChips(){return this.selectedOptions.map((t,e)=>l`
         <awc-chips
           reset-button
           @awc-chips-reset=${o=>this._handleChipsClick(o,e)}
           @click=${o=>o.stopPropagation()}
         >
           ${this.html?jo(t.innerHTML):t.textContent}
         </awc-chips>
       `)}_removeChipsItem(t){const e=this.selectedOptions[t];e&&(e.selected=!1,this.selectedOptions.splice(t,1),this._updateHeadContent(),this._updateChangeEvent())}_updateFormData(){const t=new FormData;if(this.multiple&&Array.isArray(this.value))this.selectedOptions.forEach(e=>{this._appendOptionToFormData(t,e)});else if(!this.multiple&&typeof this.value=="string"){const e=this.selectedOptions[0];e&&this._appendOptionToFormData(t,e)}this.setValue(t)}_appendOptionToFormData(t,e){const o=e.value||e.textContent.trim();t.append(this.name,o)}shouldFormValueUpdate(){return Array.isArray(this.value)&&this.multiple?this.value.length>0:this.value!==null&&this.value!==""}validityCallback(){const t=document.createElement("select");return t.required=this.required,t.validationMessage}validationMessageCallback(t){this.customError&&!this.staticError?(this.validationMessage=t,this.validationMessage=this.customError):this.validationMessage=t}_setSelectedElement(){this.selectedOptions.length>=1&&!this.multiple&&(this.selectedOptions.forEach((t,e)=>{e===0?t.selected=!0:t.selected=!1}),this._updateHeadContent())}_setAutoSelectedFirstElement(){this.selectedOptions.length===0&&!this.multiple&&this.options.length>0&&(this.options[0].selected=!0,this._updateHeadContent())}resetFormControl(){this.options.forEach(t=>t.selected=!1),this.value=this.multiple?[]:"",this.headContent="",this.setValue(new FormData),this._onChangeSelect([]),this._close()}_resetButton(){if(this.reset&&this.selectedOptions.length>0)return l`<awc-toolbar-button
         type="button"
         @click=${this._handleResetClick}
       >
         <svg
           width="16"
           height="16"
           viewBox="0 0 16 16"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M4.70712 3.29289C4.3166 2.90237 3.68343 2.90237 3.29291 3.29289C2.90238 3.68342 2.90238 4.31658 3.29291 4.70711L6.5821 7.9963L3.29212 11.2937C2.90203 11.6847 2.90274 12.3178 3.2937 12.7079C3.68467 13.098 4.31783 13.0973 4.70792 12.7063L7.99632 9.41052L11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071C13.0976 12.3166 13.0976 11.6834 12.7071 11.2929L9.40894 7.99472L12.69 4.70631C13.0801 4.31535 13.0793 3.68219 12.6884 3.2921C12.2974 2.90201 11.6643 2.90273 11.2742 3.29369L7.99473 6.5805L4.70712 3.29289Z"
             fill="#919BB6"
           />
         </svg>
       </awc-toolbar-button>`}_handleResetClick(t){t.stopPropagation(),this.resetFormControl()}_handleOptionKeyboard(t){if(t.code==="Enter"||t.code==="Space")this._toggleOptionsList(),t.preventDefault(),t.stopPropagation();else if(this.open===!1&&["ArrowDown","ArrowUp"].includes(t.code))this._open(),t.preventDefault();else if(t.code==="Escape")this._close(),t.preventDefault();else if(this.open&&["ArrowDown","ArrowUp"].includes(t.code)){if(this.isOptionListReverse?(t.code==="ArrowUp"&&this.focusedOptionIndex--,t.code==="ArrowDown"&&this.focusedOptionIndex++):(t.code==="ArrowDown"&&this.focusedOptionIndex++,t.code==="ArrowUp"&&this.focusedOptionIndex--),this.search&&this.searchText){if(this.filteredOptions.length===0)return;this.focusedOptionIndex=Math.max(0,Math.min(this.focusedOptionIndex,this.filteredOptions.length-1)),this.filteredOptions[this.focusedOptionIndex].focus()}else{const e=this.options.filter(o=>o.tagName==="AWC-SELECT-ITEM");this.focusedOptionIndex=Math.max(0,Math.min(this.focusedOptionIndex,e.length-1)),e[this.focusedOptionIndex].focus()}this.scrollToFocusedOption(),t.preventDefault()}}scrollToFocusedOption(){const t=this.optionList.children[this.focusedOptionIndex];t&&t.scrollIntoView({block:"nearest"})}_handleDocumentClick(t){t.composedPath().includes(this)||this._close()}_handleInput(){this.searchText=this.inputElement.value,this._filterOptions(),this._buttonSearchTextUpdate(),this._onSearch(this.searchText)}_handleInputKeydown(t){(t.code==="Enter"||t.code==="Space")&&this.open&&t.stopPropagation()}_buttonSearchTextUpdate(){if(this.selectButtons)return this.selectButtons.textContent=this.searchText}_staticCreateButton(){if(this.selectButtons.isClick){const e=this._buttonSearchTextUpdate();this._onCreateOption({value:e,selected:!0,text:e})}}_dynamicCreateOption(){if(this.selectButtons.isClick){const e=this._buttonSearchTextUpdate();this.createSelectItem(e,e,!0),this._onCreateOption({value:e,selected:!0,text:e}),this._clearInputValue()}}createSelectItem(t,e,o){const r=document.createElement(Cr);this.html?r.innerHTML=t:r.textContent=t,r.value=e??t,o&&(r.selected=!0,this.multiple||this.selectedOptions.forEach(s=>s.selected=!1)),this.appendChild(r),this.requestUpdate(),this._updateHeadContent(),this._unhiddingOptions()}handleCreateOption(t){if(this.inputElement){if(t.target&&this.inputElement.value==="")return;{const e=this.selectButtons.staticButton,o=this.selectButtons.dynamicButton;e&&this._staticCreateButton(),o&&this._dynamicCreateOption()}}}_filterOptions(){const t=this.searchText.toLowerCase();this.filteredOptions=this.options.filter(e=>{var s;const o=(s=e.textContent)==null?void 0:s.toLowerCase(),r=o==null?void 0:o.includes(t);return r?e.removeAttribute("hidden"):e.setAttribute("hidden",""),r}),this._filterGroups(),this.scrollToFocusedOption()}_filterGroups(){this.optionGroups.forEach(t=>{Array.from(t.children).some(o=>!o.hasAttribute("hidden"))?t.removeAttribute("hidden"):t.setAttribute("hidden","")})}_showPlaceholderOrSelectItem(){return this.multiple&&this.placeholder?this.selectedOptions.length?this._renderChips():l`<p class="awc-select__placeholder">${this.placeholder}</p>`:this.multiple&&!this.placeholder?this._renderChips():this.headContent?this.headContent:l`<p class="awc-select__placeholder">${this.placeholder}</p>`}_renderInput(){return l`
       <div class="awc-select__search">
         <input
           class="awc-select__input"
           type="text"
           placeholder=${this.inputPlacholder}
           autocomplete="off"
           tabindex="0"
           @input=${this._handleInput}
           @keydown=${t=>this._handleInputKeydown(t)}
           @click=${t=>t.stopPropagation()}
         />
       </div>
     `}_clearInputValue(){this.inputElement&&(this.searchText="",this.inputElement.value="")}_checkingListPosition(){this._selectOptions&&requestAnimationFrame(()=>{this._selectOptions.getAttribute("data-popper-placement")==="top"?this.isOptionListReverse=!0:this.isOptionListReverse=!1})}_createPopperInstance(){this._selectHead&&this._selectOptions&&(this.popperInstance=je(this._selectHead,this._selectOptions,{placement:"bottom-start",strategy:"absolute",modifiers:[{name:"preventOverflow",options:{boundary:this._selectHead}}]}),this.popperInstance.forceUpdate())}_destroyPopperInstance(){var t;(t=this.popperInstance)==null||t.destroy(),this.popperInstance=null}_renderMultipleSelect(){const t={"awc-select":!0,"awc-select--error":this.showError},e={"awc-select__options":!0,"awc-select__options--open":this.open},o={"awc-select__head":!0,"border-radius":!0,"border-radius--reverse":this.isOptionListReverse},r=l`
       <awc-toolbar-button
         @click=${s=>{s.stopPropagation(),this._close()}}
       >
         <svg
           class="arrow-icon ${this.open?"arrow-rotated":""}"
           width="16"
           height="16"
           viewBox="0 0 16 16"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M3.29289 5.29289C3.68342 4.90237 4.31658 4.90237 4.70711 5.29289L8 8.58579L11.2929 5.29289C11.6834 4.90237 12.3166 4.90237 12.7071 5.29289C13.0976 5.68342 13.0976 6.31658 12.7071 6.70711L8.70711 10.7071L8 11.4142L7.29289 10.7071L3.29289 6.70711C2.90237 6.31658 2.90237 5.68342 3.29289 5.29289Z"
             fill="#919BB6"
           />
         </svg>
       </awc-toolbar-button>
     `;return l`<div
         class=${Y(t)}
         name=${this.name}
         .value=${this.value}
         tabindex="0"
         ?autoselect-off=${this.autoselectOff}
         ?disabled=${this.disabled}
         ?required=${this.required}
         multiple
         @click=${this._toggleOptionsList}
         @keydown=${this._handleOptionKeyboard}
       >
         <div class="${Y(o)}">
           <div class="awc-select__content">
             ${this._showPlaceholderOrSelectItem()}
           </div>
           <div class="awc-select__icons">
             ${this._resetButton()} ${r}
           </div>
         </div>
 
         <div class=${Y(e)}>
           ${this.search?this._renderInput():""}
           <ul
             class="awc-select-list"
             tabindex="${R(this.open?void 0:"-1")}"
             @awc-select-option=${this._handleOption}
           >
             <slot></slot>
           </ul>
           <div class="awc-select-create">
             <slot
               @awc-select-button-create=${this.handleCreateOption}
               name="awc-button"
             ></slot>
           </div>
         </div>
       </div>
 
       ${this.showError&&this.required&&!this.staticError?l`<span class="awc-select__error">${this.validationMessage}</span>`:this.hint&&!this.staticError?l`<span class="awc-select__hint">${this.hint}</span>`:""}
       ${this.staticError&&this.required&&this.customError?l`<span class="awc-select__error">${this.customError}</span>`:this.hint&&this.staticError?l`<span class="awc-select__hint">${this.hint}</span>`:""} `}_renderSingleSelect(){const t={"awc-select":!0,"awc-select--error":this.showError||this.staticError&&this.required},e={"awc-select__options":!0,"awc-select__options--open":this.open,"awc-select--error":this.showError},o={"awc-select__head":!0,"border-radius":!0,"border-radius--reverse":this.isOptionListReverse},r=l`
       <awc-toolbar-button
         @click=${s=>{s.stopPropagation(),this._toggleOptionsList()}}
       >
         <svg
           class="arrow-icon ${this.open?"arrow-rotated":""}"
           width="16"
           height="16"
           viewBox="0 0 16 16"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M3.29289 5.29289C3.68342 4.90237 4.31658 4.90237 4.70711 5.29289L8 8.58579L11.2929 5.29289C11.6834 4.90237 12.3166 4.90237 12.7071 5.29289C13.0976 5.68342 13.0976 6.31658 12.7071 6.70711L8.70711 10.7071L8 11.4142L7.29289 10.7071L3.29289 6.70711C2.90237 6.31658 2.90237 5.68342 3.29289 5.29289Z"
             fill="#919BB6"
           />
         </svg>
       </awc-toolbar-button>
     `;return l`
       <div
         class=${Y(t)}
         name=${this.name}
         .value=${this.value}
         tabindex="0"
         ?disabled=${this.disabled}
         ?required=${this.required}
         ?autoselect-off=${this.autoselectOff}
         @click=${this._toggleOptionsList}
         @keydown=${this._handleOptionKeyboard}
       >
         <div class="${Y(o)}">
           <div class="awc-select__content">
             ${this._showPlaceholderOrSelectItem()}
           </div>
           <div class="awc-select__icons">
             ${this._resetButton()} ${r}
           </div>
         </div>
 
         <div class=${Y(e)}>
           ${this.search?this._renderInput():""}
 
           <ul
             class="awc-select-list"
             tabindex="${R(this.open?void 0:"-1")}"
             @awc-select-option=${this._handleOption}
           >
             <slot></slot>
           </ul>
 
           <div class="awc-select-create">
             <slot
               @awc-select-button-create=${this.handleCreateOption}
               name="awc-button"
             ></slot>
           </div>
         </div>
       </div>
 
       ${this.showError&&this.required&&!this.staticError?l`<span class="awc-select__error">${this.validationMessage}</span>`:this.hint&&!this.staticError?l`<span class="awc-select__hint">${this.hint}</span>`:""}
       ${this.staticError&&this.required&&this.customError?l`<span class="awc-select__error">${this.customError}</span>`:this.hint&&this.staticError?l`<span class="awc-select__hint">${this.hint}</span>`:""}
     `}connectedCallback(){super.connectedCallback(),this.addEventListener("invalid",this._onInvalid),document.addEventListener("click",t=>this._handleDocumentClick(t)),document.addEventListener("DOMContentLoaded",()=>{this._updateHeadContent(),this.autoselectOff?this._setSelectedElement():this._setAutoSelectedFirstElement()})}updated(t){super.updated(t),t.has("open")&&this._checkingListPosition(),this.disabled&&this.open&&this._close(),t.has("searchText")&&this._buttonSearchTextUpdate(),t.has("multiple")&&this._updateHeadContent(),t.has("autoselectOff")&&(this.autoselectOff?this._setSelectedElement():this._setAutoSelectedFirstElement())}render(){return this.multiple?this._renderMultipleSelect():this._renderSingleSelect()}},i.AwcSelect.formControlValidators=[gr],i.AwcSelect.shadowRootOptions={...w.shadowRootOptions,delegatesFocus:!0},i.AwcSelect.styles=[Zt,Gn],I([c({type:String,reflect:!0})],i.AwcSelect.prototype,"name",2),I([c()],i.AwcSelect.prototype,"value",2),I([c({type:String,reflect:!0})],i.AwcSelect.prototype,"placeholder",2),I([c({type:String,attribute:"input-placeholder"})],i.AwcSelect.prototype,"inputPlacholder",2),I([c({type:String,reflect:!0})],i.AwcSelect.prototype,"hint",2),I([c({type:Boolean,reflect:!0})],i.AwcSelect.prototype,"html",2),I([c({type:Boolean,reflect:!0})],i.AwcSelect.prototype,"open",2),I([c({type:Boolean,reflect:!0})],i.AwcSelect.prototype,"disabled",2),I([c({type:Boolean,reflect:!0})],i.AwcSelect.prototype,"required",2),I([c({type:Boolean,reflect:!0,attribute:"autoselect-off"})],i.AwcSelect.prototype,"autoselectOff",2),I([c({type:Boolean,reflect:!0})],i.AwcSelect.prototype,"reset",2),I([c({type:Boolean,reflect:!0})],i.AwcSelect.prototype,"multiple",2),I([c({type:Boolean,reflect:!0})],i.AwcSelect.prototype,"search",2),I([c({reflect:!0,attribute:"custom-error"})],i.AwcSelect.prototype,"customError",2),I([c({type:Boolean,reflect:!0,attribute:"static-error"})],i.AwcSelect.prototype,"staticError",2),I([k("awc-select-search")],i.AwcSelect.prototype,"_onSearch",2),I([k("awc-create-option")],i.AwcSelect.prototype,"_onCreateOption",2),I([k("awc-select-change")],i.AwcSelect.prototype,"_onChangeSelect",2),I([S(".awc-select__input")],i.AwcSelect.prototype,"inputElement",2),I([S(".awc-select")],i.AwcSelect.prototype,"validationTarget",2),I([S(".awc-select-list")],i.AwcSelect.prototype,"optionList",2),I([S(".awc-select")],i.AwcSelect.prototype,"_selectHead",2),I([S(".awc-select__options")],i.AwcSelect.prototype,"_selectOptions",2),I([U()],i.AwcSelect.prototype,"validationMessage",2),I([U()],i.AwcSelect.prototype,"headContent",2),I([U()],i.AwcSelect.prototype,"searchText",2),I([U()],i.AwcSelect.prototype,"filteredOptions",2),I([U()],i.AwcSelect.prototype,"isOptionListReverse",2),i.AwcSelect=I([g(qn)],i.AwcSelect);const Nn=b`
     :host {
         display: block;
         contain: content;
     }
 
     .awc-die {
         overflow: hidden;
         position: relative;
         padding: 8px 14px 8px 16px;
         max-height: 44px;
         height: calc(44px - 16px);
         display: flex;
         align-items: center;
         justify-content: space-between;
         border-radius: var(--corner-radius-s);
         gap: var(--spacing-sm);
         z-index: 1; 
     }
 
     .awc-die::before {
         content: ""; 
         position: absolute;
         top: 0;
         left: 0;
         right: 0;
         bottom: 0;
         opacity: var(--awc-opacity, 0.1);
         background-color: var(--awc-die-color);
         z-index: -1; 
     }
 
     .awc-die::after {
         content: '';
         position: absolute;
         left: 0;
         height: 100%;
         width: 3px;
         background-color: var(--awc-die-color);
     }
 
     .awc-die__main {
         position: relative;
         overflow: hidden;
         width: 100%;
         height: 22px;
         display: flex;
         align-items: center;
         gap: var(--spacing-s);
     }
 
     .awc-die__content {
         font: var(--awc-font-text-medium-15);
         color: var(--colors-light-titles);
         position: absolute;
         margin: 0;
         white-space: nowrap;
     }
 
     .awc-die__content.awc-die__content--edit{
         outline: none;
         padding: 0;
         width: 100%;
         border: none;
         background-color: rgba(255, 255, 255, 0) ;
         font: var(--awc-font-text-medium-15);
         color: var(--colors-light-titles);
     }
     
     .awc-die__icon{
         cursor: move;
         position: relative;
         display: flex;
     }
 
     .awc-die__slotted{
         display: flex;
         align-items: center;
         justify-content: space-between;
         gap: 16px;
     }
 `;/**
  * @license
  * Copyright 2020 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const Wn=Symbol.for(""),Zn=a=>{if((a==null?void 0:a.r)===Wn)return a==null?void 0:a._$litStatic$},Fo=new Map,Kn=a=>(t,...e)=>{const o=e.length;let r,s;const n=[],d=[];let u,p=0,h=!1;for(;p<o;){for(u=t[p];p<o&&(s=e[p],(r=Zn(s))!==void 0);)u+=r+t[++p],h=!0;p!==o&&d.push(s),n.push(u),p++}if(p===o&&n.push(t[o]),h){const v=n.join("$$lit$$");(t=Fo.get(v))===void 0&&(n.raw=n,Fo.set(v,t=n)),e=d}return a(t,...e)},Xn=Kn(N);var Yn=Object.defineProperty,Jn=Object.getOwnPropertyDescriptor,yt=(a,t,e,o)=>{for(var r=o>1?void 0:o?Jn(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&Yn(t,e,r),r};i.AwcDie=class extends w{constructor(){super(...arguments),this.text="",this.placeholder="",this.editing=!1,this.color="--colors-light-primary"}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",this.handleFocus),this.addEventListener("blur",this.handleBlur),this.addEventListener("dblclick",this.handleMouseDown)}handleFocus(){this._onFocus(this.text)}handleBlur(){this._onBlur(this.text),this.stopEditing(),this.triggerChange()}handleMouseDown(){this.startEditing(),this.setCursorToEnd()}handleInput(){this.contentElement&&(this.text=this.contentElement.value)}handleEnterKey(t){t.key==="Enter"&&(t.preventDefault(),this.handleFocus(),this.blur())}setCursorToEnd(){if(this.contentElement){const t=this.contentElement.value.length;this.contentElement.setSelectionRange(t,t)}}startEditing(){this.editing=!0}stopEditing(){this.editing=!1}triggerChange(){this._onChange(this.text)}updated(t){super.updated(t),t.has("editing")?(this._renderEditMode(),this.contentElement&&this.contentElement.focus()):this._renderReadOnlyMode()}_renderEditMode(){return l`
             <input 
                 type='text'
                 class='awc-die__content awc-die__content--edit' 
                 placeholder=${this.placeholder} 
                 .value=${Qt(this.text)} 
                 @input=${this.handleInput}
                 @keyup=${this.handleEnterKey}
             >
         `}_renderReadOnlyMode(){return l`
             <p class='awc-die__content'>${this.text}</p>
         `}_renderIcon(){const t=Xn`
             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M2 5C1.44772 5 1 5.44772 1 6C1 6.55228 1.44772 7 2 7H14C14.5523 7 15 6.5523 15 6C15 5.44772 14.5523 5 14 5H2ZM2 9C1.44772 9 1 9.44772 1 10C1 10.5523 1.44772 11 2 11H14C14.5523 11 15 10.5523 15 10C15 9.44772 14.5523 9 14 9H2Z" fill="#919BB6"/>
             </svg>
         `;return l`
             <div class='awc-die__icon'>
                 ${t}
             </div>
         `}render(){const t=this.color&&this.color.startsWith("--");return l`
             <div class='awc-die' style=${t?`--awc-die-color: var(${this.color})`:`--awc-die-color: ${this.color}`} >
                 ${this._renderIcon()}
                 <div class='awc-die__main'>
                     ${this.editing?this._renderEditMode():this._renderReadOnlyMode()}
                 </div>
                 <div class='awc-die__slotted'>
                     <slot></slot>
                 </div>
             </div>
         `}},i.AwcDie.styles=[Nn],yt([c({type:String})],i.AwcDie.prototype,"text",2),yt([c({type:String})],i.AwcDie.prototype,"placeholder",2),yt([c({type:Boolean,reflect:!0})],i.AwcDie.prototype,"editing",2),yt([c({type:String,attribute:"color"})],i.AwcDie.prototype,"color",2),yt([k("awc-die-change")],i.AwcDie.prototype,"_onChange",2),yt([k("awc-die-focus")],i.AwcDie.prototype,"_onFocus",2),yt([k("awc-die-blur")],i.AwcDie.prototype,"_onBlur",2),yt([S(".awc-die__content--edit")],i.AwcDie.prototype,"contentElement",2),i.AwcDie=yt([g("awc-die")],i.AwcDie);const Qn=b`
     .awc-stager{
         overflow: hidden;
         border-radius: var(--corner-radius-circular);
     }
 
     .awc-stager__progress{
         display: flex;
         align-items: center;
         gap: 2px;
         width: 100%;
         height: 10px;
         border-radius: var(--corner-radius-s);
     }
 
     .awc-stager__item{
         width: 100%;
         background-color: #D6DBE5;
         height: inherit;
     }
 
     .awc-stager__item--current{
         background-color: var(--colors-light-primary);
     }
 
 `;var tc=Object.defineProperty,ec=Object.getOwnPropertyDescriptor,me=(a,t,e,o)=>{for(var r=o>1?void 0:o?ec(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&tc(t,e,r),r};i.AwcStager=class extends w{constructor(){super(...arguments),this.steps=5,this.current=2,this.stepColor="--colors-light-primary",this._connected=!1}connectedCallback(){super.connectedCallback(),this._connected=!0,this._stepUpdater()}_handleChange(){this._onChange(this.current)}_colorUpdater(t){t&&(this.stepColor.startsWith("--")?t.style.cssText=`background-color: var(${this.stepColor})`:t.style.cssText=`background-color: ${this.stepColor}`)}_stepUpdater(){var o;if(!this._connected)return;let t=this.current;(isNaN(t)||t<1)&&(t=1,this.current=t),((o=this.shadowRoot)==null?void 0:o.querySelectorAll(".awc-stager__item")).forEach((r,s)=>{const d=s+1<t+1;r.classList.toggle("awc-stager__item--current",d)&&this._colorUpdater(r)})}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),t==="step-color"&&o!==null&&(this.stepColor=o,this._stepUpdater())}updated(t){super.updated(t),t.has("current")&&(this._stepUpdater(),this._handleChange())}render(){return l`
       <div class="awc-stager">
         <div class="awc-stager__progress">${this._renderProgress()}</div>
       </div>
     `}_renderProgress(){return Array.from({length:this.steps},()=>l`<div class="awc-stager__item"></div>`)}},i.AwcStager.styles=[Qn],me([c({type:Number,reflect:!0})],i.AwcStager.prototype,"steps",2),me([c({type:Number,reflect:!0})],i.AwcStager.prototype,"current",2),me([c({type:String,attribute:"step-color"})],i.AwcStager.prototype,"stepColor",2),me([k("awc-stager-change")],i.AwcStager.prototype,"_onChange",2),i.AwcStager=me([g("awc-stager")],i.AwcStager);const rc=b`
     :host{
         display: inline-block;
         contain: content;
     }
 
     .awc-chips{
         display: flex;
         align-items: center;
         padding: 4px 12px;
         gap: 6px;
         font: var(--awc-font-text-regular-14);
         color: var(--colors-light-text);
         background-color: var(--colors-light-stroke-hover);
         border-radius: var(--corner-radius-2xl);
         transition: background-color .3s ease-in-out;
     }
 
     .awc-chips.awc-chips__avatar{
         padding: 4px 12px 4px 3px;
     }
 
     :host([reset-button]){
         cursor: pointer;
     }
 
     :host([reset-button]:hover) .awc-chips{
        background-color: var(--colors-light-stroke);
     }
 
     :host([reset-button]) .awc-chips__reset{
       fill: var(--colors-light-secondary);
       transition: fill .3s ease-in-out;
     }
 
     :host([reset-button]:hover) .awc-chips__reset{
       fill: var(--colors-light-primary);
     }
 `;var oc=Object.defineProperty,ac=Object.getOwnPropertyDescriptor,ye=(a,t,e,o)=>{for(var r=o>1?void 0:o?ac(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&oc(t,e,r),r};i.AwcChips=class extends w{constructor(){super(...arguments),this.resetButton=!1}_checkedAwcAvatar(){this.slotElement.assignedNodes().filter(e=>e.nodeName.toLowerCase()==="awc-avatar").length===1?this.chips.classList.add("awc-chips__avatar"):this.chips.classList.remove("awc-chips__avatar")}handleResetClick(){this._onRemoveChips(this.resetButton)}updated(t){super.updated(t),this._checkedAwcAvatar()}render(){return l`
             <div class='awc-chips'>
                 <slot @slotchange=${this._checkedAwcAvatar}></slot>
                 ${this.resetButton?l`
                     <svg class="awc-chips__reset" @click=${this.handleResetClick} width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                         <path fill-rule="evenodd" clip-rule="evenodd" d="M5.70713 4.29291C5.3166 3.90239 4.68344 3.90239 4.29291 4.29291C3.90239 4.68344 3.90239 5.3166 4.29291 5.70713L6.58237 7.99658L4.29185 10.294C3.90191 10.6851 3.90286 11.3182 4.29397 11.7082C4.68508 12.0981 5.31824 12.0972 5.70818 11.7061L7.99659 9.4108L10.2929 11.7071C10.6834 12.0976 11.3166 12.0976 11.7071 11.7071C12.0976 11.3166 12.0976 10.6834 11.7071 10.2929L9.40868 7.99447L11.6902 5.70607C12.0802 5.31496 12.0792 4.68179 11.6881 4.29185C11.297 3.90191 10.6638 3.90286 10.2739 4.29397L7.99447 6.58025L5.70713 4.29291Z"/>
                     </svg>`:""}
             </div>
         `}},i.AwcChips.styles=[rc],ye([c({type:Boolean,reflect:!0,attribute:"reset-button"})],i.AwcChips.prototype,"resetButton",2),ye([k("awc-chips-reset")],i.AwcChips.prototype,"_onRemoveChips",2),ye([S(".awc-chips")],i.AwcChips.prototype,"chips",2),ye([S("slot")],i.AwcChips.prototype,"slotElement",2),i.AwcChips=ye([g("awc-chips")],i.AwcChips);const ic=b`
   :host {
     display: inline-flex;
 
     --awc-user-info-name-color: var(--awc-user-info-name-theme);
     --awc-user-info-status-color: var(--awc-user-info-status-theme);
     --awc-user-info-name-font-size: var(--awc-font-text-regular-14);
     --awc-user-info-description-font-size: var(--awc-font-caption-2-regular);
   }
 
   p {
     margin: 0;
   }
 
   .awc-user-info__wrapper {
     display: flex;
     flex-direction: column;
     gap: var(--spacing-sm);
   }
 
   .awc-user-info--link {
     text-decoration: none;
   }
 
   .awc-user-info--link .awc-user-info__name {
     transition: color 0.25s ease-in-out;
   }
 
   .awc-user-info--link:hover .awc-user-info__name {
     color: var(--colors-light-primary-hover);
   }
 
   .awc-user-info__main {
     display: flex;
     align-items: center;
     gap: var(--spacing-sm);
   }
 
   .awc-user-info__description {
     display: flex;
     flex-direction: column;
     gap: var(--spacing-xs);
   }
 
   .awc-user-info__description--reverse {
     flex-direction: column-reverse;
   }
 
   .awc-user-info__name {
     font: var(--awc-user-info-name-font-size);
     color: var(--awc-user-info-name-color);
   }
 
   .awc-user-info__status {
     font: var(--awc-user-info-description-font-size);
     color: var(--awc-user-info-status-color);
   }
 
   .awc-user-info__additional {
     display: none;
     font: var(--awc-font-text-regular-14);
     padding: 12px 16px;
     border-radius: 0 var(--corner-radius-l) var(--corner-radius-l)
       var(--corner-radius-l);
     overflow-wrap: anywhere;
   }
 
   .awc-user-info__additional.empty:not(.awc-user-info__additional--none) {
     display: block;
   }
 
   .awc-user-info__additional--complete {
     background-color: rgba(53, 211, 172, 0.1);
   }
 
   .awc-user-info__additional--complete {
     color: var(--colors-light-success);
   }
 
   .awc-user-info__additional--fail {
     background-color: rgba(255, 113, 136, 0.1);
   }
 
   .awc-user-info__additional--fail {
     color: var(--colors-light-warning);
   }
 `;var sc=Object.defineProperty,nc=Object.getOwnPropertyDescriptor,ht=(a,t,e,o)=>{for(var r=o>1?void 0:o?nc(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&sc(t,e,r),r};i.AwcUserInfo=class extends w{constructor(){super(...arguments),this.reverse=!1,this.status="none",this.target="_self",this.avatatColor=oo.GlobalBlue400,this.avatarSize=ro.size32}render(){return this.href?l`
           <div class="awc-user-info__wrapper">
             <a
               class="awc-user-info awc-user-info--link"
               href=${this.href}
               target=${this.target}
               name=${this.name}
               ?reverse=${this.reverse}
             >
               <div class="awc-user-info__main">
                 <awc-avatar
                   .size=${this.avatarSize}
                   title=${this.name}
                   image-link=${this.avatarLink}
                   status=${this.status}
                   color=${this.avatatColor}
                   custom-color="${this.avatarCustomColor}"
                 ></awc-avatar>
                 <div
                   class="awc-user-info__description ${this.reverse?"awc-user-info__description--reverse":""}"
                 >
                   ${this.name?l`<p class="awc-user-info__name">${this.name}</p>`:""}
                   ${this.description?l`<p class="awc-user-info__status">
                         ${this.description}
                       </p>`:""}
                 </div>
               </div>
             </a>
           </div>
         `:l`
           <div class="awc-user-info__wrapper">
             <div
               class="awc-user-info"
               name=${this.name}
               ?reverse=${this.reverse}
             >
               <div class="awc-user-info__main">
                 <awc-avatar
                  .size=${this.avatarSize}
                   title=${this.name}
                   image-link=${this.avatarLink}
                   status=${this.status}
                   color=${this.avatatColor}
                   custom-color="${this.avatarCustomColor}"
                 ></awc-avatar>
                 <div
                   class="awc-user-info__description ${this.reverse?"awc-user-info__description--reverse":""}"
                 >
                   ${this.name?l`<p class="awc-user-info__name">${this.name}</p>`:""}
                   ${this.description?l`<p class="awc-user-info__status">
                         ${this.description}
                       </p>`:""}
                 </div>
               </div>
             </div>
           </div>
         `}},i.AwcUserInfo.styles=[ic],ht([c({type:String,reflect:!0})],i.AwcUserInfo.prototype,"name",2),ht([c({type:String,reflect:!0})],i.AwcUserInfo.prototype,"description",2),ht([c({type:Boolean,reflect:!0})],i.AwcUserInfo.prototype,"reverse",2),ht([c({type:String,reflect:!0,attribute:"avatar-status"})],i.AwcUserInfo.prototype,"status",2),ht([c({type:String,attribute:"avatar-image"})],i.AwcUserInfo.prototype,"avatarLink",2),ht([c({type:String})],i.AwcUserInfo.prototype,"target",2),ht([c({type:String,attribute:"avatar-custom-color"})],i.AwcUserInfo.prototype,"avatarCustomColor",2),ht([c({type:String})],i.AwcUserInfo.prototype,"href",2),ht([c({type:String,attribute:"avatar-color"})],i.AwcUserInfo.prototype,"avatatColor",2),ht([c({type:String,attribute:"avatar-size"})],i.AwcUserInfo.prototype,"avatarSize",2),i.AwcUserInfo=ht([g("awc-user-info")],i.AwcUserInfo);const cc=b`
     :host{
         display: inline-block;
     }
 
     .awc-button-group{
         display: inline-flex;
         align-items: center;
     }
 
     :host([disabled]) .awc-button-group{
         pointer-events: none;
         opacity: .5;
         touch-action: none;
     }
 `,lc=b`
   :host {
     display: inline-block;
   }
 
   .awc-button-group-item {
     position: relative;
     display: flex;
     align-items: center;
     justify-content: center;
     cursor: pointer;
     margin: 0;
     height: 36px;
     max-height: 36px;
     min-width: 36px;
     padding: 5px;
     border-radius: var(--corner-radius-s);
     border: 1px solid var(--colors-light-stroke);
     background-color: var(--colors-light-white);
     font: var(--awc-font-text-regular-14);
     color: var(--colors-light-text);
     border-top: 1px solid var(--colors-light-stroke);
     border-bottom: 1px solid var(--colors-light-stroke);
     transition: border-color 0.2s ease;
   }
 
   .awc-button-group-item.first {
     border-right: none;
     border-radius: var(--corner-radius-s) 0 0 var(--corner-radius-s);
   }
 
   .awc-button-group-item.last {
     border-left: none;
     border-radius: 0 var(--corner-radius-s) var(--corner-radius-s) 0;
   }
 
   .awc-button-group-item.inner-last {
     border-right: 1px solid var(--colors-light-stroke);
   }
 
   .awc-button-group-item.inner {
     border-radius: 0px;
     border-top: 1px solid var(--colors-light-stroke);
     border-bottom: 1px solid var(--colors-light-stroke);
     transition: color 0.3s ease-in-out 0s;
     border-right: none;
   }
 
   .awc-button-group-item.inner.inner-last{
     border-right: 1px solid var(--colors-light-stroke);
   }
 
   .awc-button-group-item > ::slotted(awc-icon) {
     transition: fill .3s ease-in-out;
   }
 
   .awc-button-group-item:hover > ::slotted(awc-icon),
   .awc-button-group-item.inner:hover {
     fill: var(--colors-light-primary);
     color: var(--colors-light-primary);
   }
 
   :host([expanded]) .awc-button-group-item {
     padding: 8px 20px;
   }
 
   :host([readonly]) .awc-button-group-item {
     pointer-events: none;
     touch-action: none;
   }
 
   :host([disabled]) .awc-button-group-item {
     pointer-events: none;
     touch-action: none;
     opacity: 0.5;
   }
 
   .awc-button-group-item:focus,
   .awc-button-group-item:focus-visible {
     outline: none;
   }
 
   .awc-button-group-item:focus-visible,
   .awc-button-group-item.inner-last:focus-visible
   {
     border: 1px solid var(--colors-light-focus);
   }
 
   /* .awc-button-group-item:focus-visible::before {
     content: "";
     z-index: 1;
     position: absolute;
     inset: -3px;
     border: 3px solid #839ff633;
     pointer-events: none;
     border-radius: var(--corner-radius-s);
   } */
 
   .awc-button-group-item.first:focus-visible::before {
     border-radius: var(--corner-radius-l) 0 0 var(--corner-radius-l);
   }
 
   .awc-button-group-item.inner:focus-visible::before {
     border-radius: 0;
   }
 
   .awc-button-group-item.last:focus-visible::before {
     border-radius: 0 var(--corner-radius-l) var(--corner-radius-l) 0;
   }
 `;var dc=Object.defineProperty,uc=Object.getOwnPropertyDescriptor,Ce=(a,t,e,o)=>{for(var r=o>1?void 0:o?uc(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&dc(t,e,r),r};const Go="awc-button-group-item";i.AwcButtonGroupItem=class extends w{constructor(){super(...arguments),this.expanded=!1,this.readonly=!1,this.disabled=!1}render(){return l`
       <button
         ?readonly=${this.readonly}
         ?expanded=${this.expanded}
         ?disabled=${this.disabled}
         class="awc-button-group-item ${this.position}"
       >
         <slot></slot>
       </button>
     `}},i.AwcButtonGroupItem.styles=[lc],Ce([c({type:Boolean,reflect:!0})],i.AwcButtonGroupItem.prototype,"expanded",2),Ce([c({type:Boolean,reflect:!0})],i.AwcButtonGroupItem.prototype,"readonly",2),Ce([c({type:Boolean,reflect:!0})],i.AwcButtonGroupItem.prototype,"disabled",2),Ce([c({type:String})],i.AwcButtonGroupItem.prototype,"position",2),i.AwcButtonGroupItem=Ce([g(Go)],i.AwcButtonGroupItem);var hc=Object.defineProperty,pc=Object.getOwnPropertyDescriptor,Uo=(a,t,e,o)=>{for(var r=o>1?void 0:o?pc(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&hc(t,e,r),r};const wc="awc-button-group";i.AwcButtonGroup=class extends w{constructor(){super(...arguments),this.disabled=!1}get buttons(){return[...this.querySelectorAll(Go)]}_checkInternalButtonGroup(){this.buttons&&this.buttons.length&&this._combiningButtons(this.buttons)}_combiningButtons(t){if(!t||t.length===0)return;let e=-1;t.forEach((o,r)=>{r===0?o.position="first":r===t.length-1?o.position="last":(o.position="inner",e=r)}),e!==-1&&(t[e].position="inner inner-last")}render(){return l`
       <div class="awc-button-group">
         <slot @slotchange="${this._checkInternalButtonGroup}"></slot>
       </div>
     `}},i.AwcButtonGroup.styles=[cc],Uo([c({type:Boolean,reflect:!0})],i.AwcButtonGroup.prototype,"disabled",2),i.AwcButtonGroup=Uo([g(wc)],i.AwcButtonGroup);const vc=b`
   :host {
     display: block;
 
     --awc-accordion-item-box-shadow: inset 0 -1px 0 0 var(--awc-accordion-item-divider-theme);
     --awc-accordio-color-title: var(--awc-accordion-item-title-theme);
   }
 
   button {
     margin: 0;
     padding: 0;
     border: none;
     background: none;
   }
 
   .awc-accordion-item {
     box-shadow: var(--awc-accordion-item-box-shadow);
   }
 
   .awc-accordion-item__button {
     position: relative;
     cursor: pointer;
     padding-right: 16px;
     min-block-size: 60px;
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: space-between;
     font: var(--awc-font-headline-medium-16);
     color: var(--awc-accordio-color-title);
   }
 
   .awc-accordion-item__button:focus-visible {
     outline: 1px solid var(--colors-light-focus);
     border-radius: var(--corner-radius-m);
   }
 
   /* .awc-accordion-item__button:focus-visible:before {
         content: "";
         position: absolute;
         border: 3px solid #839ff633;
         inset: -3px;
         border-radius: var(--corner-radius-l);
         pointer-events: none;
     } */
 
   .awc-accordion-item__arrow {
     transition: transform 0.3s ease-in-out;
   }
 
   :host([active]) .awc-accordion-item__arrow {
     transform: rotate(180deg);
   }
 
   :host([disabled]) .awc-accordion-item__button {
     opacity: 0.5;
     pointer-events: none;
     touch-action: none;
   }
 
   :host([disabled][active]) .awc-accordion-item__wrapper {
     opacity: 0.5;
     pointer-events: none;
     touch-action: none;
   }
 
   .awc-accordion-item__wrapper {
     display: grid;
     opacity: 0;
     grid-template-rows: 0fr;
     transition:
       padding 0.3s,
       opacity 0.3s,
       grid-template-rows 0.3s;
   }
 
   .awc-accordion-item__wrapper.active {
     opacity: 1;
     grid-template-rows: 1fr;
     padding: 0 0 16px 0;
   }
 
   .awc-accordion-item__content {
     overflow-y: hidden;
   }
 `;var gc=Object.defineProperty,fc=Object.getOwnPropertyDescriptor,Ae=(a,t,e,o)=>{for(var r=o>1?void 0:o?fc(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&gc(t,e,r),r};const Ho="awc-accordion-item";i.AwcAccordionItem=class extends w{constructor(){super(...arguments),this.active=!1,this.disabled=!1}_toggleActive(){this.disabled||(this.active=!this.active,this._onActive(this.active))}render(){const t=N`
             <svg class="awc-accordion-item__arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289Z" fill="#919BB6"/>
             </svg>
         `;return l`
       <div class="awc-accordion-item">
         <button
           tabindex="0"
           @click=${this._toggleActive}
           class="awc-accordion-item__button"
           type="button"
         >
           ${this.title} ${t}
         </button>
 
         <section
           class="awc-accordion-item__wrapper ${this.active?"active":""}"
         >
           <div ?inert=${!this.active} class="awc-accordion-item__content">
             <slot></slot>
           </div>
         </section>
       </div>
     `}},i.AwcAccordionItem.styles=[vc],Ae([c({type:String,reflect:!0})],i.AwcAccordionItem.prototype,"title",2),Ae([c({type:Boolean,reflect:!0})],i.AwcAccordionItem.prototype,"active",2),Ae([c({type:Boolean,reflect:!0})],i.AwcAccordionItem.prototype,"disabled",2),Ae([k("awc-accordion-toggle")],i.AwcAccordionItem.prototype,"_onActive",2),i.AwcAccordionItem=Ae([g(Ho)],i.AwcAccordionItem);const bc=b`
     :host{
         display: block;
     }
 
     :host([disabled]){
         opacity: .5;
         pointer-events: none;
         touch-action: none;
     }
 
 `;var _c=Object.defineProperty,mc=Object.getOwnPropertyDescriptor,Ar=(a,t,e,o)=>{for(var r=o>1?void 0:o?mc(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&_c(t,e,r),r};const yc="awc-accordion";i.AwcAccordion=class extends w{constructor(){super(...arguments),this.disabled=!1,this.autoclose=!1}get accordionItems(){return[...this.querySelectorAll(Ho)]}_autocloseAccordionItem(t){if(!this.autoclose)return;const e=t.target;e.disabled&&this.disabled||(e.active?(this.accordionItems.forEach(o=>o.active=!1),e.active=!0):(e.active=!0,e.active&&(e.active=!1)))}_handleAccordionItem(t){this._autocloseAccordionItem(t)}_shutdownAllAccordionItems(){this.disabled?this.accordionItems.forEach(t=>t.disabled=!0):this.accordionItems.forEach(t=>t.disabled=!1)}updated(t){super.updated(t),t.has("disabled")&&this._shutdownAllAccordionItems()}render(){return l`
       <div ?disabled=${this.disabled} class="awc-accordion">
         <slot @awc-accordion-toggle=${this._handleAccordionItem}></slot>
       </div>
     `}},i.AwcAccordion.styles=[bc],Ar([c({type:Boolean,reflect:!0})],i.AwcAccordion.prototype,"disabled",2),Ar([c({type:Boolean,reflect:!0})],i.AwcAccordion.prototype,"autoclose",2),i.AwcAccordion=Ar([g(yc)],i.AwcAccordion);const Cc=b`
   .awc-range-container {
     display: flex;
     flex-direction: column;
     gap: var(--spacing-sm);
   }
   /* Для WebKit (Chrome, Safari и др.) */
   .awc-range {
     width: 100%;
     height: 4px;
     -webkit-appearance: none;
     background-color: var(--colors-light-stroke);
     border-radius: 99px;
   }
 
   :host([disabled]) {
     opacity: 0.5;
     touch-action: none;
     pointer-events: none;
   }
 
   :host([disabled]) .awc-range::-webkit-slider-thumb {
     border: 4px solid #97a3b080;
   }
 
   :host([disabled]) .awc-range::-moz-range-thumb {
     background-color: var(--colors-light-white);
     border: 4px solid #97a3b080;
   }
 
   .awc-range::-webkit-slider-thumb {
     -webkit-appearance: none;
     width: 20px;
     height: 20px;
     border-radius: 50%;
     background: white;
     cursor: grab;
     border: 4px solid var(--colors-light-primary);
     transition: border 0.25s ease;
   }
 
   .awc-range::-webkit-slider-thumb:hover {
     border: 6px solid var(--colors-light-primary);
   }
 
   /* Для Firefox */
   .awc-range::-moz-range-thumb {
     width: 12px;
     height: 12px;
     border-radius: 50%;
     background-color: var(--colors-light-white);
     cursor: grab;
     border: 4px  solid var(--colors-light-primary);
     transition: border 0.25s ease;
   }
 
   .awc-range::-moz-range-thumb:hover {
     border: 6px solid var(--colors-light-primary);
   }
 
   .awc-range::-moz-range-track {
     width: 100%;
     height: 4px;
     background-color: var(--colors-light-stroke);
     border-radius: 99px;
   }
 
   .awc-range__markers {
     position: relative;
     justify-content: space-between;
     padding: 0;
     margin: 16px 0 16px 0;
     display: flex;
     align-items: center;
   }
 
   .awc-range-label {
     display: flex;
     align-items: center;
     gap: 4px;
     font: var(--awc-font-text-medium-14);
   }
 
   .awc-range-label__value {
     margin: 0;
     font: var(--awc-font-text-regular-14);
   }
 `,Ac=b`
     :host{
         transform: translateX(calc(-50% + 16px));
     }
 
     .awc-range-item{
         cursor: pointer;
         list-style-type: none;
         padding: 0;
         margin: 0;
     }
     
     .awc-range-item__text{
         margin: 0;
         color: var(--colors-light-secondary);
         font: var(--awc-font-caption-2-regular);
         transition: color .3s ease;
     }
 
     .awc-range-item__text:hover{
         color: var(--colors-light-primary);
     }
 
 
     @media screen and (max-width: 768px){
         :host{
             transform: translateX(calc(-50% + 2px));
         }
     }
 `;var xc=Object.defineProperty,kc=Object.getOwnPropertyDescriptor,qo=(a,t,e,o)=>{for(var r=o>1?void 0:o?kc(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&xc(t,e,r),r};const No="awc-range-item";i.AwcRangeItem=class extends w{constructor(){super(...arguments),this.value="0"}render(){return l`
       <li value=${this.value} class="awc-range-item">
         <p class="awc-range-item__text"><slot></slot></p>
       </li>
     `}},i.AwcRangeItem.styles=[Ac],qo([c({type:String,reflect:!0})],i.AwcRangeItem.prototype,"value",2),i.AwcRangeItem=qo([g(No)],i.AwcRangeItem);var $c=Object.defineProperty,Sc=Object.getOwnPropertyDescriptor,Ct=(a,t,e,o)=>{for(var r=o>1?void 0:o?Sc(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&$c(t,e,r),r};i.AwcRange=class extends ut(w){constructor(){super(...arguments),this.name="0",this.value="0",this.marker=!1,this.min=0,this.max=100,this.step=1}get rangeItem(){return[...this.querySelectorAll(No)]}updated(t){super.updated(t),t.has("value")&&this.setValue(this.value)}_handleMarkers(t){const e=t.target;!e||e.tagName!=="AWC-RANGE-ITEM"||(this.value=e.value,this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0})))}_handleInputValue(t){const e=t.target;this.value=e.value,this.dispatchEvent(new Event("input",{composed:!0,bubbles:!0}))}_handleChangeValue(t){const e=t.target;this.value=e.value,this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}render(){return l`
       <div class="awc-range-container">
         ${this.label?l`<label class="awc-range-label">${this.label}: <p class="awc-range-label__value">${this.value}</p></label>`:""}
         <input
           class="awc-range"
           type="range"
           name=${this.name}
           .value=${Qt(this.value)}
           max=${this.max}
           min=${this.min}
           step=${this.step}
           ?marker=${this.marker}
           @input=${this._handleInputValue}
           @change=${this._handleChangeValue}
         />
         ${this.marker?l`
               <ul class="awc-range__markers" >
                 <slot @click=${this._handleMarkers}></slot>
               </ul>
             `:""}
       </div>
     `}},i.AwcRange.styles=[Cc],Ct([c({type:String,reflect:!0})],i.AwcRange.prototype,"name",2),Ct([c({type:String,reflect:!0})],i.AwcRange.prototype,"value",2),Ct([c({type:String,reflect:!0})],i.AwcRange.prototype,"label",2),Ct([c({type:Boolean,reflect:!0})],i.AwcRange.prototype,"marker",2),Ct([c({type:Boolean,reflect:!0})],i.AwcRange.prototype,"disabled",2),Ct([c({type:Number,reflect:!0})],i.AwcRange.prototype,"min",2),Ct([c({type:Number,reflect:!0})],i.AwcRange.prototype,"max",2),Ct([c({type:Number,reflect:!0})],i.AwcRange.prototype,"step",2),i.AwcRange=Ct([g("awc-range")],i.AwcRange);const Oc=b`
     :host {
         display: inline-flex;
         width: 100%;
     }
 
     :host([size="extrasmall"]) .awc-progress-bar__track {
         height: 2px;
     }
 
     :host([size="small"]) .awc-progress-bar__track {
         height: 4px;
     }
 
     :host([size="medium"]) .awc-progress-bar__track {
         height: 6px;
     }
 
     :host([size="large"]) .awc-progress-bar__track {
         height: 8px;
     }
 
     .awc-progress-bar {
         width: inherit;
         display: flex;
         flex-direction: column;
         gap: var(--spacing-s);
     }
 
     .awc-progress-bar__label {
         font: var(--awc-font-text-regular-14);
         color: var(--colors-light-text);
     }
 
     .awc-progress-bar__value {
         font: var(--awc-font-text-medium-14);
     }
     
     .awc-progress-bar__track {
         position: relative;
         width: inherit;
         overflow: hidden;
         border-radius: var(--corner-radius-s);
         background-color: var(--colors-light-stroke-hover);
     }
     
     .awc-progress-bar__filler {
         width: 0%;
         border-radius: var(--corner-radius-s);
         height: 100%;
         background-color: var(--colors-light-primary);
         transition: width 0.3s ease;
     }
 `;var Ec=Object.defineProperty,Pc=Object.getOwnPropertyDescriptor,Pt=(a,t,e,o)=>{for(var r=o>1?void 0:o?Pc(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&Ec(t,e,r),r};const Ic="awc-progress-bar";i.AwcProgressBar=class extends w{constructor(){super(...arguments),this.value=0,this.max=100,this.label="",this.size="medium",this.hidePercent=!1}_validateAndUpdateValues(){(isNaN(this.value)||this.value<0)&&(this.value=0),(isNaN(this.max)||this.max<0)&&(this.max=100),this.value>this.max&&(this.value=this.max,this._onSuccesEvent()),this._updateFillerWidth()}_updateFillerWidth(){const t=this.value/this.max*100;this.fillerElement&&(this.fillerElement.style.width=`${t}%`)}_onSuccesEvent(){const t={value:this.value,maxReached:!0};this._onSucces(t),this._updateFillerWidth()}updated(t){super.updated(t),(t.has("value")||t.has("max"))&&this._validateAndUpdateValues()}render(){const t=this.hidePercent?"":"%";return l`
             <div 
             ?hide-percent=${this.hidePercent}
             size=${this.size}
             class="awc-progress-bar">
                 ${this.label?l`<div class="awc-progress-bar__label">${this.label}: <span class="awc-progress-bar__value">${this.value}${t}</span></div>`:""}
                 <div class="awc-progress-bar__track">
                     <div class="awc-progress-bar__filler"></div>
                 </div>
             </div>
         `}},i.AwcProgressBar.styles=[Oc],Pt([c({type:Number,reflect:!0})],i.AwcProgressBar.prototype,"value",2),Pt([c({type:Number,reflect:!0})],i.AwcProgressBar.prototype,"max",2),Pt([c({type:String,reflect:!0})],i.AwcProgressBar.prototype,"label",2),Pt([c({type:String,reflect:!0})],i.AwcProgressBar.prototype,"size",2),Pt([c({type:Boolean,reflect:!0,attribute:"hide-percent"})],i.AwcProgressBar.prototype,"hidePercent",2),Pt([k("awc-progress-bar-success")],i.AwcProgressBar.prototype,"_onSucces",2),Pt([S(".awc-progress-bar__filler")],i.AwcProgressBar.prototype,"fillerElement",2),i.AwcProgressBar=Pt([g(Ic)],i.AwcProgressBar);const Bc=b`
     
     /* Large awc-empty-state */
 
     :host([size="large"]){
         display: flex;
         max-width: 700px;
     }
 
     :host([size="large"]) .awc-empty-state {
         display: flex;
         flex-direction: column;
         align-items: center;
         text-align: center;
         gap: var(--spacing-l);
     }
 
     :host([size="large"]) .awc-empty-state__main{
         font: var(--awc-font-text-regular-15);
         color: var(--colors-light-text);
     }
 
     :host([size="large"]) .awc-empty-state__title{
         margin: 0;
         margin-bottom: 12px;
         color: var(--colors-light-titles);
         font: var(--awc-font-h3-medium);
     }
     
     :host([size="large"]) .awc-empty-state__buttons{
         display: flex;
         align-items: center;
         justify-content: center;
         flex-wrap: wrap;
         gap: var(--spacing-l);
     }
 
     :host([size="large"]) .awc-empty-state__links {
         display: flex;
         align-items: center;
         justify-content: center;
         flex-wrap: wrap;
         gap: var(--spacing-l);
     }
 
     :host([size="large"]) .awc-empty-state__links ::slotted(awc-empty-state-link:not(:last-child))::after {
         content: "";
         display: flex;
         width: 3px;
         height: 3px;
         background-color: var(--colors-dark-secondary);
         border-radius: var(--corner-radius-circular);
     }
 
     /* Small awc-empty-state */
 
     :host([size="small"]){
         display: flex;
         max-width: 320px;
     }
 
     :host([size="small"]) .awc-empty-state {
         display: flex;
         flex-direction: column;
         align-items: center;
         text-align: center;
         gap: var(--spacing-s);
     }
 
     :host([size="small"]) .awc-empty-state__title {
         margin: 0;
         margin-bottom: 8px;
         color: var(--colors-light-titles);
         font: var(--awc-font-text-medium-15);
     }
 
     :host([size="small"]) .awc-empty-state__main {
         font: var(--awc-font-text-regular-15);
         color: var(--colors-dark-secondary);
     }
 
     :host([size="small"]) .awc-empty-state__buttons{
         display: flex;
         align-items: center;
         justify-content: center;
         flex-wrap: wrap;
         gap: var(--spacing-s);
     }
 
     :host([size="small"]) .awc-empty-state__links {
         display: flex;
         align-items: center;
         justify-content: center;
         flex-wrap: wrap;
         gap: var(--spacing-s);
     }
 
     @media screen and (max-width: 768px){
         .awc-empty-state__links ::slotted(awc-empty-state-link:not(:last-child))::after {
             display: none;
         }
     }
 `;var Lc=Object.defineProperty,Tc=Object.getOwnPropertyDescriptor,xr=(a,t,e,o)=>{for(var r=o>1?void 0:o?Tc(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&Lc(t,e,r),r};const Dc="awc-empty-state";i.AwcEmptyState=class extends w{constructor(){super(...arguments),this.size="large"}get icons(){return[...this.querySelectorAll(Mo)]}get buttons(){return[...this.querySelectorAll(Io)]}_scalingIcon(){this.icons&&this.icons.forEach(t=>{this.size==="large"?t.iconScale="78px":t.iconScale="48px"})}_setCurrentButtons(){this.buttons&&this.buttons.forEach(t=>{this.size==="large"?t.size="large":t.size="regular",t.variant="primary",t.background="blue"})}updated(t){super.updated(t),this._scalingIcon(),this._setCurrentButtons()}render(){return l`
       <div class="awc-empty-state">
         <div class="awc-empty-state__head">
           <slot @slotchange="${this._scalingIcon}" name="icon"></slot>
         </div>
         <div class="awc-empty-state__main">
           ${this.head?l`<h3 class="awc-empty-state__title">${this.head}</h3>`:""}
           <slot></slot>
         </div>
         <div class="awc-empty-state__buttons">
           <slot @slotchange="${this._setCurrentButtons}" name="button"></slot>
         </div>
         <div class="awc-empty-state__links">
           <slot name="link"></slot>
         </div>
       </div>
     `}},i.AwcEmptyState.styles=[Bc],xr([c({type:String,reflect:!0})],i.AwcEmptyState.prototype,"head",2),xr([c({type:String,reflect:!0})],i.AwcEmptyState.prototype,"size",2),i.AwcEmptyState=xr([g(Dc)],i.AwcEmptyState);const Mc=b`
 
     :host {
         display: inline-flex;
         align-items: center;
         gap: 20px;
     }
     
     .awc-empty-state-link {
         text-decoration: none;
         font: var(--awc-font-text-regular-15);
         color: var(--colors-light-primary);
         transition: color .3s ease;
         cursor: pointer;
     }
 
     .awc-empty-state-link:hover {
         color: var(--colors-light-link-hover);
     }
 `;var jc=Object.defineProperty,zc=Object.getOwnPropertyDescriptor,kr=(a,t,e,o)=>{for(var r=o>1?void 0:o?zc(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&jc(t,e,r),r};const Rc="awc-empty-state-link";i.AwcEmptyStateLink=class extends w{constructor(){super(...arguments),this.target="_self"}render(){return this.href?l`
     <a
       class="awc-empty-state-link"
       href=${this.href}
       target=${this.target}
       tabindex="0"
       >
         <slot></slot>
     </a>
     `:l`
     <div
       class="awc-empty-state-link"
       href=${this.href}
       target=${this.target}
       tabindex="0"
       >
         <slot></slot>
     </div>
     `}},i.AwcEmptyStateLink.styles=[Mc],kr([c({type:String,reflect:!0})],i.AwcEmptyStateLink.prototype,"href",2),kr([c({type:String,reflect:!0})],i.AwcEmptyStateLink.prototype,"target",2),i.AwcEmptyStateLink=kr([g(Rc)],i.AwcEmptyStateLink);const Vc=b`
     :host {
         display: inline-flex;
     }
 
     .awc-tag {
         display: flex;
         align-items: center;
         text-align: center;
         justify-content: center;
         transition: background-color .3s ease;
     }
 
     .awc-tag__text {
         margin: 0;
         transition: color .3s ease;
     }
 
     :host([variant="square"]) .awc-tag {
         padding: 6px 9px;
         border-radius: var(--corner-radius-m);
         background-color: var(--awc-tag-color);
     }
 
     :host([variant="square"]) .awc-tag__text {
         font: var(--awc-font-caption-1-regular);
         color: var(--awc-tag-text-color);
     }
 
     :host([variant="circle"]) .awc-tag {
         position: relative;
         overflow: hidden;
         padding: 5px 10px;
         border-radius: var(--corner-radius-circular);
     }
 
     :host([variant="circle"]) .awc-tag::before{
         content: "";
         position: absolute;
         inset: 0px;
         opacity: 0.1;
         background-color: var(--awc-tag-color);
     }
 
     :host([variant="circle"]) .awc-tag__text {
         font: var(--awc-font-caption-2-regular);
         color: var(--awc-tag-color);
     }
 
     :host([variant="bullet"]) .awc-tag {
         position: relative;
         overflow: hidden;
         padding: 3px 7px;
         border-radius: var(--corner-radius-2xl) var(--corner-radius-circular)
         var(--corner-radius-circular) var(--corner-radius-2xl);
     }
 
     :host([variant="bullet"]) .awc-tag::before{
         content: "";
         position: absolute;
         inset: 0px;
         opacity: 0.2;
         background-color: var(--awc-tag-color);
     }
 
     :host([variant="bullet"]) .awc-tag__text {
         font: var(--awc-font-caption-2-regular);
         color: var(--colors-light-dark-blue);
     }
 
 `;var Fc=Object.defineProperty,Gc=Object.getOwnPropertyDescriptor,Ve=(a,t,e,o)=>{for(var r=o>1?void 0:o?Gc(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&Fc(t,e,r),r};const Uc="awc-tag";i.AwcTag=class extends w{constructor(){super(...arguments),this.baseColor="colors-light-secondary",this.variant="square"}pickTextColorBasedOnBgColor(t,e,o){if(t){let r=t.charAt(0)==="#"?t.substring(1,7):t;const s=parseInt(r.substring(0,2),16),n=parseInt(r.substring(2,4),16),d=parseInt(r.substring(4,6),16);return s*.299+n*.587+d*.114>186?o:e}}render(){const t=this.variant==="square"?this.pickTextColorBasedOnBgColor(this.customColor||this.baseColor,"--awc-tag-text-color: #FFFFFF","--awc-tag-text-color: #55555A"):"",e=this.customColor?this.customColor:`var(--${this.baseColor})`;return l`
       <div class="awc-tag" style="--awc-tag-color: ${e}">
         <p class="awc-tag__text" style=${t}><slot></slot></p>
       </div>
     `}},i.AwcTag.styles=[Vc],Ve([c({type:String,reflect:!0,attribute:"custom-color"})],i.AwcTag.prototype,"customColor",2),Ve([c({type:String,reflect:!0,attribute:"base-color"})],i.AwcTag.prototype,"baseColor",2),Ve([c({type:String,reflect:!0})],i.AwcTag.prototype,"variant",2),i.AwcTag=Ve([g(Uc)],i.AwcTag);const Hc=b`
   :host {
     display: inline-flex;
 
     --awc-color-picker-bg: var(--colors-light-input-background);
     --awc-color-picker-hover-bg: var(--colors-light-stroke);
     /* --awc-color-picker-popover-bg: */
   }
 
   .awc-color-picker-activator {
     cursor: pointer;
     display: flex;
     align-items: center;
     justify-content: space-between;
     gap: var(--spacing-s);
     padding: 8px;
     background-color: var(--awc-color-picker-bg);
     border-radius: var(--corner-radius-m);
     transition: background-color 0.3s ease;
   }
 
   .awc-color-picker-activator:focus-visible {
     outline: 1px solid var(--colors-light-focus);
   }
 
   .awc-color-picker-current-color {
     display: block;
     border-radius: var(--corner-radius-s);
     width: 24px;
     height: 24px;
   }
 
   .awc-color-picker-activator:hover {
     background-color: var(--awc-color-picker-hover-bg);
   }
 
   .awc-color-picker-arrow {
     display: flex;
     justify-content: center;
     align-items: center;
     transition: transform 0.3s ease;
   }
 
   .awc-color-picker-arrow.open {
     transform: rotate(180deg);
   }
 
   .awc-color-picker {
     padding: 16px;
     max-width: 100%;
     display: flex;
     flex-direction: column;
     border-radius: var(--corner-radius-s);
     background-color: var(--colors-light-white);
     box-shadow: 0px 0px 20px 5px rgba(64, 72, 98, 0.2);
     max-height: 264px;
   }
 
   .awc-color-pciker__header ::slotted(awc-tabs-group) {
     padding-bottom: var(--spacing-m);
   }
 
   .awc-color-picker__tabs {
     position: relative;
   }
 
   .awc-color-picker__reset {
     display: inline-flex;
     position: absolute;
     top: 30%;
     right: 0;
     cursor: pointer;
   }
 
   .awc-color-picker__main {
     min-width: 232px;
   }
 
   .awc-color-picker__view {
     display: none;
   }
 
   .awc-color-picker__view--active {
     display: block;
   }
 
   .awc-color-picker__palete {
     display: grid;
     grid-template-columns: repeat(6, 1fr);
     gap: var(--spacing-s);
   }
 
   .awc-color-picker__color {
     cursor: pointer;
     border: none;
     width: 32px;
     height: 32px;
     border-radius: var(--corner-radius-m);
     transition: transform 0.3s ease;
     will-change: transform;
     transform: scale3d(1, 1, 1);
   }
 
   .awc-color-picker__color:hover {
     transform: scale3d(1.05, 1.05, 1.05);
   }
 
   .awc-color-picker__color:focus-visible {
     outline: 1px solid var(--colors-light-focus);
     transform: scale3d(1.05, 1.05, 1.05);
   }
 
   .awc-color-picker__color.active-color {
     background-position: center;
     background-repeat: no-repeat;
     background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.7071 3.29289C15.0976 3.68342 15.0976 4.31658 14.7071 4.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L1.29289 8.70711C0.902369 8.31658 0.902369 7.68342 1.29289 7.29289C1.68342 6.90237 2.31658 6.90237 2.70711 7.29289L6 10.5858L13.2929 3.29289C13.6834 2.90237 14.3166 2.90237 14.7071 3.29289Z' fill='white'/%3E%3C/svg%3E%0A");
   }
 
   .awc-color-picker__input {
     -webkit-appearance: none;
     -moz-appearance: none;
     appearance: none;
     padding: 0;
     width: 100%;
     height: 32px;
     background-color: transparent;
     border: none;
     cursor: pointer;
   }
 
   .awc-color-picker__input::-webkit-color-swatch {
     border-radius: var(--corner-radius-s);
     border: none;
   }
 
   .awc-color-picker__input::-moz-color-swatch {
     border-radius: var(--corner-radius-s);
     border: none;
   }
 `;var qc=Object.defineProperty,Nc=Object.getOwnPropertyDescriptor,ct=(a,t,e,o)=>{for(var r=o>1?void 0:o?Nc(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&qc(t,e,r),r};const Wc="awc-color-picker";i.AwcColorPicker=class extends ut(w){constructor(){super(...arguments),this.active=!1,this.reset=!1,this.BASE_PALETTE_COLORS=["#ED3A3A","#F74F4F","#FB7C28","#F8AF28","#FED34A","#81D83C","#5FB829","#1EA679","#35D3AC","#44CADA","#2FB9CE","#52ACF5","#2A8CE3","#3761E9","#5D7EF7","#8360F4","#704AE5","#AC3EC7","#C764DF","#E44662","#FF7188","#919BB6","#55555A","#26263E"],this.activeTab=0}get tabs(){return[...this.querySelectorAll(rr)]}_triggerChangeEvent(t){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}_handleColorSelection(t){var r;const e=t.currentTarget;if(!e||!e.hasAttribute("value"))return;this.colorItems.forEach(s=>s.classList.remove("active-color")),e.classList.add("active-color");const o=(r=e.getAttribute("value"))==null?void 0:r.toLowerCase();o&&(this.value=o,this._triggerChangeEvent(t),this._onChangeColor(this.value))}_setCustomColorValue(t){this.value=this._inputColor.value}_setDefaultColorInBasePalette(){this.colorItems.forEach(t=>t.classList.remove("active-color")),this.BASE_PALETTE_COLORS.forEach(t=>{this.value&&t===this.value.toUpperCase()&&this.colorItems.forEach(e=>{e.getAttribute("value")===t&&e.classList.add("active-color")})})}_checkAssignedAwcTabs(){if(!this.tabs)return;let t=-1;this.tabs.forEach((e,o)=>{e.active&&(t=o),e.addEventListener("click",()=>{this.activeTab=o,console.log("CLICK")}),e.addEventListener("change",r=>r.stopPropagation())}),t===-1?(this.tabs[0]&&(this.tabs[0].active=!0),this.activeTab=0):this.activeTab=t,this._checkAwcTabsLength()}_checkAwcTabsLength(){this.tabs.length>2&&console.warn("Maximum number of tabs exceeded")}connectedCallback(){super.connectedCallback(),document.addEventListener("DOMContentLoaded",()=>{this._checkAssignedAwcTabs()})}_resetColorPicker(){this._inputColor.value="#000000",this.value="",this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.colorItems.forEach(t=>t.classList.remove("active-color"))}_colorPickerOpenEvent(t){t.detail&&(this.active=!0)}_colorPickerCloseEvent(t){t.detail||(this.active=!1)}updated(t){super.updated(t),t.has("value")&&this.setValue(this.value),this._setDefaultColorInBasePalette(),this.active&&this._popover.addEventListener("focusout",this._handleFocusOut.bind(this))}_handleFocusOut(t){const e=t.relatedTarget;if(!e)return;const o=this._popover.contains(e),r=this.tabs.some(s=>s.contains(e));!o&&!r&&this.close()}open(){this._popover.show()}close(){this._popover.hide()}_togglePopover(){this.active?this.close():this.open()}_triggerKeyboard(t){(t.code==="Enter"||t.code==="Space")&&(this.active?this.close():this.open())}render(){const t=N`
       <svg
         width="16"
         height="16"
         viewBox="0 0 16 16"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
       >
         <g clip-path="url(#clip0_29752_259031)">
           <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M9 3C6.23858 3 4 5.23858 4 8V9C4 9.40446 3.75636 9.7691 3.38268 9.92388C3.00901 10.0787 2.57889 9.9931 2.29289 9.70711L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683418 5.90237 1.31658 5.90237 1.70711 6.29289L2.0633 6.64909C2.09212 6.5722 2.13014 6.4998 2.17601 6.43323C2.8875 3.32155 5.67264 1 9 1C12.866 1 16 4.13401 16 8C16 11.866 12.866 15 9 15C7.36709 15 5.86228 14.4396 4.67131 13.5014C4.23746 13.1597 4.16282 12.5309 4.50458 12.0971C4.84634 11.6633 5.47509 11.5886 5.90893 11.9304C6.75982 12.6007 7.83189 13 9 13C11.7614 13 14 10.7614 14 8C14 5.23858 11.7614 3 9 3ZM9 9C9.55229 9 10 8.55228 10 8C10 7.44772 9.55229 7 9 7C8.44771 7 8 7.44772 8 8C8 8.55228 8.44771 9 9 9Z"
             fill="#919BB6"
           />
         </g>
         <defs>
           <clipPath id="clip0_29752_259031">
             <rect width="16" height="16" fill="white" />
           </clipPath>
         </defs>
       </svg>
     `,e=N`
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289Z" fill="#919BB6"/>
       </svg>
     `;return l`
       <awc-popover
         @awc-popover-open="${this._colorPickerOpenEvent}"
         @awc-popover-close="${this._colorPickerCloseEvent}"
         no-padding
         trigger-type="manual"
       >
         <div
           @click=${this._togglePopover}
           @keydown=${this._triggerKeyboard}
           tabindex="${this.active?-1:0}"
           class="awc-color-picker-activator"
         >
           <span
             class="awc-color-picker-current-color"
             style="background-color: ${this.value}"
           ></span>
           <div
             class="awc-color-picker-arrow ${this.active?"open":""}"
           >
             ${e}
           </div>
         </div>
 
         <div class="awc-color-picker" slot="awc-popover-content">
           <div class="awc-color-pciker__header">
             <div class="awc-color-picker__tabs">
               <slot @slotchange=${this._checkAssignedAwcTabs}></slot>
               ${this.reset&&this._slot&&this._slot.assignedElements().length?l`
                     <div
                       tabindex="0"
                       @click=${this._resetColorPicker}
                       class="awc-color-picker__reset"
                     >
                        ${t}
                     </div>
                   `:""}
             </div>
           </div>
           <div class="awc-color-picker__main">
             <div
               class="awc-color-picker__view ${this.activeTab===0?"awc-color-picker__view--active":""}"
             >
               <div
                 class="awc-color-picker__palete"
                 @change=${this._triggerChangeEvent}
               >
                 ${this.BASE_PALETTE_COLORS.map(o=>l`
                     <button
                       @click=${this._handleColorSelection}
                       value=${o}
                       class="awc-color-picker__color"
                       style="background-color: ${o}"
                     ></button>
                   `)}
               </div>
             </div>
             <div
               class="awc-color-picker__view ${this.activeTab===1?"awc-color-picker__view--active":""}"
             >
               <input
                 class="awc-color-picker__input"
                 type="color"
                 @change=${this._triggerChangeEvent}
                 @input=${this._setCustomColorValue}
                 name=${this.name}
               />
             </div>
           </div>
         </div>
       </awc-popover>
     `}},i.AwcColorPicker.styles=[Hc],ct([c({type:String,reflect:!0})],i.AwcColorPicker.prototype,"name",2),ct([c({type:String,reflect:!0})],i.AwcColorPicker.prototype,"value",2),ct([c({type:Boolean,reflect:!0})],i.AwcColorPicker.prototype,"active",2),ct([c({type:Boolean,reflect:!0})],i.AwcColorPicker.prototype,"reset",2),ct([U()],i.AwcColorPicker.prototype,"BASE_PALETTE_COLORS",2),ct([U()],i.AwcColorPicker.prototype,"activeTab",2),ct([Xr(".awc-color-picker__color")],i.AwcColorPicker.prototype,"colorItems",2),ct([S("input")],i.AwcColorPicker.prototype,"_inputColor",2),ct([S("slot")],i.AwcColorPicker.prototype,"_slot",2),ct([S("awc-popover")],i.AwcColorPicker.prototype,"_popover",2),ct([k("awc-color-picker-change")],i.AwcColorPicker.prototype,"_onChangeColor",2),i.AwcColorPicker=ct([g(Wc)],i.AwcColorPicker);const Zc=b`
     :host {
         display: block;
     }
 
     .awc-notifier__wrapper {
         display: flex;
         justify-content: space-between;
         align-items: center;
         padding: 14px 20px;
         min-height: calc(64px - 28px);
         background-color: var(--colors-light-success);
     }
 
     .awc-notifier__main {
         width: 100%;
         display: flex;
         align-items: center;
         justify-content: center;
         height: inherit;
         gap: 40px;
         font: var(--awc-font-text-regular-14);
         color: var(--colors-light-white);
     }
 
     .awc-notifier__button {
         cursor: pointer;
         padding: 0;
         background: none;
         border: none;
         display: flex;
         align-items: center;
         justify-content: center;
     }
 
     .awc-notifier__icon {
         fill: var(--colors-light-white);
     }
 
     .awc-notifier__button:focus-visible {
         outline: 1px solid var(--colors-light-focus);
         border-radius: var(--corner-radius-s);
     }
 
     .awc-notifier__button .awc-notifier__icon {
         transition: opacity 0.3s ease;
     }
 
     .awc-notifier__button:hover .awc-notifier__icon,
     .awc-notifier__button:active .awc-notifier__icon {
         opacity: 0.7;
     }
 `;var Kc=Object.defineProperty,Xc=Object.getOwnPropertyDescriptor,Yc=(a,t,e,o)=>{for(var r=o>1?void 0:o?Xc(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&Kc(t,e,r),r};const Jc="awc-notifier";i.AwcNotifier=class extends w{_onChange(t){t.target&&this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}render(){const t=l`
             <svg class="awc-notifier__icon" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L10.5858 12L7.29295 15.2929C6.90243 15.6834 6.90243 16.3166 7.29295 16.7071C7.68348 17.0976 8.31664 17.0976 8.70717 16.7071L12 13.4142L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L13.4142 12L16.7072 8.70711C17.0977 8.31658 17.0977 7.68342 16.7072 7.29289C16.3166 6.90237 15.6835 6.90237 15.293 7.29289L12 10.5858L8.70711 7.29289Z"/>
             </svg>
         `;return l`
             <div class="awc-notifier">
                 <div class="awc-notifier__wrapper">
                     <div class="awc-notifier__main">
                         <slot></slot>
                         <slot name="button"></slot>
                     </div>
                     <button @click=${this._onChange} class="awc-notifier__button" type="button">
                         ${t}
                     </button>
                 </div>
             </div>
        `}},i.AwcNotifier.styles=[Zc],i.AwcNotifier=Yc([g(Jc)],i.AwcNotifier);const Qc=b`
     :host {
         display: flex;
     }
 
     p {
         margin: 0;
     }
 
     a {
         text-decoration: none;
     }
 
     .awc-card {
         width: 100%;
         display: flex;
         flex-direction: column;
         padding: 20px;
         border-radius: var(--corner-radius-l);
         background-color: var(--colors-light-white);
         border: 1px solid var(--colors-light-stroke);
         transition:
         border 0.3s ease,
         box-shadow 0.3s ease;
     }
 
     .awc-card:hover {
         border: 1px solid transparent;
         box-shadow: 0px 5px 20px 0px #4048621a;
     }
 
     .awc-card:focus-visible {
         outline: none;
         border: 1px solid var(--colors-light-secondary);
         box-shadow: 0px 5px 20px 0px #4048621a;
     }
 
     .awc-card__head {
         display: flex;
         justify-content: space-between;
         align-items: flex-start;
     }
 
     .awc-card__icon {
         position: relative;
         padding: 12px;
         z-index: 1;
     }
 
     .awc-card__icon::before {
         content: "";
         display: flex;
         justify-content: center;
         align-items: center;
         position: absolute;
         top: 0;
         left: 0;
         right: 0;
         bottom: 0;
         border-radius: var(--corner-radius-circular);
         background-color: var(--awc-card-color);
         opacity: 0.1;
         z-index: -1;
     }
 
     .awc-card__icon ::slotted(awc-icon[type="icon"]) {
         fill: var(--awc-card-color);
     }
 
     .awc-card__icon.awc-card__icon--module::before {
         background-color: var(--colors-light-input-background);
         opacity: 1;
     }
 
     .awc-card__main {
         margin-top: var(--spacing-sm);
         display: flex;
         flex-direction: column;
         gap: 4px;
         word-wrap: break-word;
         text-align: start;
     }
 
     .awc-card__title {
         display: -webkit-box;
         -webkit-box-orient: vertical;
         -webkit-line-clamp: 2;
         overflow: hidden;
         font: var(--awc-font-text-medium-14);
         color: var(--colors-light-titles);
     }
 
     .awc-card__subtitle {
         display: -webkit-box;
         -webkit-box-orient: vertical;
         -webkit-line-clamp: 2;
         overflow: hidden;
         font: var(--awc-font-caption-1-regular);
         color: var(--colors-light-secondary);
     }
 
     .awc-card__footer {
         padding-right: 15px;
     }
 `;var tl=Object.defineProperty,el=Object.getOwnPropertyDescriptor,At=(a,t,e,o)=>{for(var r=o>1?void 0:o?el(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&tl(t,e,r),r};const rl="awc-card";i.AwcCard=class extends w{constructor(){super(...arguments),this.target="_self",this.arrow=!1,this._isModuleIcon=!1}_changeBackgroundIconModule(){this._iconSlot.assignedElements().filter(o=>o.type==="module").length?this._isModuleIcon=!0:this._isModuleIcon=!1}render(){const t=N`
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M9.29289 6.29289C8.90237 6.68342 8.90237 7.31658 9.29289 7.70711L13.5858 12L9.29289 16.2929C8.90237 16.6834 8.90237 17.3166 9.29289 17.7071C9.68342 18.0976 10.3166 18.0976 10.7071 17.7071L15.7071 12.7071C16.0976 12.3166 16.0976 11.6834 15.7071 11.2929L10.7071 6.29289C10.3166 5.90237 9.68342 5.90237 9.29289 6.29289Z" fill="#919BB6"/>
             </svg>
         `;return l`
             ${this.href?l`
                 <a class="awc-card"
                     href=${this.href}
                     target=${this.target}
                 >
                     <div class="awc-card__head">
                         <div class="awc-card__icon ${this._isModuleIcon?"awc-card__icon--module":""}" style=${`--awc-card-color: ${this.iconColor}`}>
                             <slot @slotchange=${this._changeBackgroundIconModule} name="icon"></slot>
                         </div>
                         <div class="awc-card__additional">
                             <slot name="toolbar"></slot>
                             ${this.arrow?t:""}    
                         </div>    
                     </div>
                     <div class="awc-card__main">
                         ${this.title?l`<p class="awc-card__title">${this.title}</p>`:""}
                         ${this.subtitle?l`<p class="awc-card__subtitle">${this.subtitle}</p>`:""}
                     </div>
                     <div class="awc-card__footer">
                         <slot></slot>
                     </div>
                 </a>
                 `:l`
                     <div class="awc-card" tabIndex="0">
                         <div class="awc-card__head">
                             <div class="awc-card__icon ${this._isModuleIcon?"awc-card__icon--module":""}" style=${`--awc-card-color: ${this.iconColor}`}>
                                 <slot @slotchange=${this._changeBackgroundIconModule} name="icon"></slot>
                             </div>
                             <div class="awc-card__additional">
                                 <slot name="toolbar"></slot>
                                 ${this.arrow?t:""}    
                             </div>
                         </div>
                         <div class="awc-card__main">
                             ${this.title?l`<p class="awc-card__title">${this.title}</p>`:""}
                             ${this.subtitle?l`<p class="awc-card__subtitle">${this.subtitle}</p>`:""}
                         </div>
                         <div class="awc-card__footer">
                             <slot></slot>
                         </div>
                 </div>
             `}
         `}},i.AwcCard.styles=[Qc],At([c({type:String,reflect:!0})],i.AwcCard.prototype,"title",2),At([c({type:String,reflect:!0})],i.AwcCard.prototype,"subtitle",2),At([c({type:String,reflect:!0})],i.AwcCard.prototype,"href",2),At([c({type:String})],i.AwcCard.prototype,"target",2),At([c({type:String,reflect:!0,attribute:"icon-color"})],i.AwcCard.prototype,"iconColor",2),At([c({type:Boolean,reflect:!0})],i.AwcCard.prototype,"arrow",2),At([S("slot[name='icon']")],i.AwcCard.prototype,"_iconSlot",2),At([U()],i.AwcCard.prototype,"_isModuleIcon",2),i.AwcCard=At([g(rl)],i.AwcCard);const ol=b`
     :host {
         display: block;
         position: relative;
         --color-primary: var(--colors-light-input-background);
         --color-secondary: #e7eaf2;
         --border-radius-rounded: var(--corner-radius-circular);
         --border-radius-8: var(--corner-radius-l);
         --border-radius-12: var(--corner-radius-xl);
         --sheen-color: hsl(240 4.9% 98.5%);
     }
 
     .awc-skeleton {
         display: flex;
         width: 100%;
         height: 100%;
         min-height: 1rem;
     }
 
     .awc-skeleton__indicator {
         transition: background-color 0.25s ease-in-out;
         flex: 1 1 auto;
         background-color: var(--color-primary);
     }
 
     :host([color="secondary"]) .awc-skeleton__indicator {
         background-color: var(--color-secondary);
     }
 
     :host([rounded="8"]) .awc-skeleton__indicator {
         border-radius: var(--border-radius-8);
     }
 
     :host([rounded="12"]) .awc-skeleton__indicator {
         border-radius: var(--border-radius-12);
     }
 
     :host([rounded="rounded"]) .awc-skeleton__indicator {
         border-radius: var(--border-radius-rounded);
     }
 
     :host([effect="none"]) .awc-skeleton__indicator {
         animation: none;
     }
 
     :host([effect="pulse"]) .awc-skeleton__indicator {
         animation: pulse 2s ease-in-out 0.5s infinite;
     }
 
     :host([effect="pulse"][color="secondary"]) .awc-skeleton__indicator {
         animation: pulse 2s ease-in-out 0.5s infinite;
         background-color: var(--color-secondary);
     }
 
     @keyframes pulse {
         0% {
         opacity: 1;
         }
         50% {
         opacity: 0.5;
         }
         100% {
         opacity: 1;
         }
     }
 
     :host([effect="sheen"]) .awc-skeleton__indicator {
         background: linear-gradient(
         270deg,
         var(--sheen-color),
         var(--color-primary),
         var(--color-primary),
         var(--sheen-color)
         );
         background-size: 400% 100%;
         animation: sheen 7s ease-in-out infinite;
     }
 
     :host([effect="sheen"][color="secondary"]) .awc-skeleton__indicator {
         background: linear-gradient(
         270deg,
         var(--sheen-color),
         var(--color-secondary),
         var(--color-secondary),
         var(--sheen-color)
         );
         background-size: 400% 100%;
         animation: sheen 7s ease-in-out infinite;
     }
 
     @keyframes sheen {
         from {
         background-position: 200% 0;
         }
         to {
         background-position: -200% 0;
         }
     }
 `;var al=Object.defineProperty,il=Object.getOwnPropertyDescriptor,Fe=(a,t,e,o)=>{for(var r=o>1?void 0:o?il(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&al(t,e,r),r};const sl="awc-skeleton";i.AwcSkeleton=class extends w{constructor(){super(...arguments),this.effect="pulse",this.rounded="rounded",this.color="primary"}render(){return l`
             <div class="awc-skeleton">
                 <div class="awc-skeleton__indicator"></div>
             </div>
         `}},i.AwcSkeleton.styles=[ol],Fe([c({type:String,reflect:!0})],i.AwcSkeleton.prototype,"effect",2),Fe([c({type:String,reflect:!0})],i.AwcSkeleton.prototype,"rounded",2),Fe([c({type:String,reflect:!0})],i.AwcSkeleton.prototype,"color",2),i.AwcSkeleton=Fe([g(sl)],i.AwcSkeleton);const nl=b`
     :host {
         display: inline-flex;
     }
 
     ul {
         list-style-type: none;
     }
 
     ul,
     li {
         padding: 0;
         margin: 0;
     }
 
     .awc-pagination {
         display: inline-flex;
         gap: var(--spacing-s);
     }
 
     .awc-pagination__list {
         display: flex;
         gap: var(--spacing-s);
         align-items: center;
     }
 
     .awc-pagination__item {
         display: flex;
         align-items: center;
         justify-content: center;
         text-align: center;
         cursor: pointer;
         position: relative;
         overflow-wrap: break-word;
         white-space: nowrap;
         outline: 0;
         height: 36px;
         width: 36px;
         font: var(--awc-font-text-medium-14);
         color: var(--colors-light-titles);
         border-radius: var(--corner-radius-s);
         transition:
         color 0.3s,
         background-color 0.3s ease-out;
     }
 
     .awc-pagination__item.active {
         background-color: var(--colors-light-primary);
         color: var(--colors-light-white);
     }
 
     .awc-pagination__item:not(.active):focus-visible {
         background-color: var(--colors-light-input-background);
     }
 
     .awc-pagination__item:focus-visible,
     .awc-pagination__button:focus-visible {
         outline: 1px solid var(--colors-light-secondary);
         outline-offset: 1px;
     }
 
     .awc-pagination__item:not(.active):hover {
         transition:
         color 0.3s,
         background-color 0.3s ease-in;
         background-color: var(--colors-light-input-background);
     }
 
     .awc-pagination__button {
         display: flex;
         align-items: center;
         justify-content: center;
         text-align: center;
         height: 36px;
         width: 36px;
         cursor: pointer;
         border-radius: var(--corner-radius-s);
         transition: background-color 0.3s ease-out;
     }
 
     .awc-pagination__button:hover {
         transition: background-color 0.3s ease-in;
         background-color: var(--colors-light-input-background);
     }
 
     .ellipsis {
         cursor: default;
         pointer-events: none;
     }
 
     .ellipsis::after {
         content: "...";
         color: var(--colors-light-secondary);
     }
 `;var cl=Object.defineProperty,ll=Object.getOwnPropertyDescriptor,ee=(a,t,e,o)=>{for(var r=o>1?void 0:o?ll(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&cl(t,e,r),r};const dl="awc-pagination";i.AwcPagination=class extends w{constructor(){super(...arguments),this._activePage=1,this._itemsPerPage=1,this._totalItemsCount=1,this.first=!1,this.last=!1,this._maxVisibleItems=5,this._ellipsisVisible=!1}get activePage(){return this._activePage}set activePage(t){const e=Math.ceil(this._totalItemsCount/this._itemsPerPage),o=Math.min(Math.max(1,t||1),e),r=this._activePage;o!==r&&(this._activePage=o,this.requestUpdate("activePage",r))}get itemsPerPage(){return this._itemsPerPage}set itemsPerPage(t){const e=Math.max(1,t||1),o=this._itemsPerPage;e!==o&&(this._itemsPerPage=e,this.requestUpdate("itemsPerPage",o))}get totalItemsCount(){return this._totalItemsCount}set totalItemsCount(t){const e=Math.max(1,t||1),o=this._totalItemsCount;e!==o&&(this._totalItemsCount=e,this.requestUpdate("totalItemsCount",o))}_generatePages(t){const e=[],o=Math.floor(this._maxVisibleItems/2);let r=Math.max(1,this.activePage-o),s=Math.min(t,this.activePage+o);this.activePage<=o?s=Math.min(t,this._maxVisibleItems):this.activePage>t-o&&(r=Math.max(1,t-this._maxVisibleItems+1)),t===s&&this._maxVisibleItems!==t&&(t&&s&&r)!==1&&(e.push(1),e.push("..."),this._ellipsisVisible=!0);for(let n=r;n<=s;n++)e.push(n);return this._maxVisibleItems===s&&this._maxVisibleItems!==t&&(this._ellipsisVisible=!0,e.push("..."),e.push(t)),e}_nextPage(){const t=Math.ceil(this.totalItemsCount/this.itemsPerPage);this.activePage<t&&this.activePage++,this._onChange()}_previousPage(){this.activePage>1&&this.activePage--,this._onChange()}_onPageClick(t){typeof t=="number"&&t===this.activePage||typeof t=="number"&&(this.activePage=t,this._onChange())}_handleKeydown(t){var e;if(t.key==="Enter"||t.key===" "){const o=(e=this.shadowRoot)==null?void 0:e.activeElement;if(o!=null&&o.classList.contains("awc-pagination__button--prev"))this._previousPage();else if(o!=null&&o.classList.contains("awc-pagination__button--next"))this._nextPage();else if(o!=null&&o.classList.contains("awc-pagination__button--first"))this._firstPage();else if(o!=null&&o.classList.contains("awc-pagination__button--last"))this._lastPage();else{const r=parseInt(o.textContent,10);this._onPageClick(r)}this._onChange()}}_firstPage(){this.activePage=1,this._onChange()}_lastPage(){const t=Math.ceil(this.totalItemsCount/this.itemsPerPage);this.activePage=t,this._onChange()}_onChange(){this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleKeydown)}disconnectedCallback(){this.removeEventListener("keydown",this._handleKeydown),super.disconnectedCallback()}render(){const t=Math.ceil(this.totalItemsCount/this.itemsPerPage),e=this._generatePages(t),o=l`
             <span role="button" @keydown=${this._handleKeydown} @click=${this._previousPage} tabIndex="0" class="awc-pagination__button awc-pagination__button--prev">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7071 6.29289C15.0976 6.68342 15.0976 7.31658 14.7071 7.70711L10.4142 12L14.7071 16.2929C15.0976 16.6834 15.0976 17.3166 14.7071 17.7071C14.3166 18.0976 13.6834 18.0976 13.2929 17.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L13.2929 6.29289C13.6834 5.90237 14.3166 5.90237 14.7071 6.29289Z" fill="#919BB6"/>
                 </svg>
             </span>
         `,r=l`
             <span role="button" @keydown=${this._handleKeydown} @click=${this._nextPage} tabIndex="0" class="awc-pagination__button awc-pagination__button--next">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M9.29289 6.29289C8.90237 6.68342 8.90237 7.31658 9.29289 7.70711L13.5858 12L9.29289 16.2929C8.90237 16.6834 8.90237 17.3166 9.29289 17.7071C9.68342 18.0976 10.3166 18.0976 10.7071 17.7071L15.7071 12.7071C16.0976 12.3166 16.0976 11.6834 15.7071 11.2929L10.7071 6.29289C10.3166 5.90237 9.68342 5.90237 9.29289 6.29289Z" fill="#919BB6"/>
                 </svg>
             </span>
         `,s=l`
             <span role="button" @click=${this._firstPage} @keydown=${this._handleKeydown} tabIndex="0" class="awc-pagination__button awc-pagination__button--first">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7071 16.2929C17.0976 16.6834 17.0976 17.3166 16.7071 17.7071C16.3166 18.0976 15.6834 18.0976 15.2929 17.7071L10.2929 12.7071C10.1054 12.5196 10 12.2652 10 12C10 11.7348 10.1054 11.4804 10.2929 11.2929L15.2929 6.29289C15.6834 5.90237 16.3166 5.90237 16.7071 6.29289C17.0976 6.68342 17.0976 7.31658 16.7071 7.70711L12.4142 12L16.7071 16.2929ZM8.00004 17C8.00004 17.5523 7.55232 18 7.00004 18C6.44775 18 6.00004 17.5523 6.00004 17V7C6.00004 6.44772 6.44775 6 7.00004 6C7.55232 6 8.00004 6.44772 8.00004 7V17Z" fill="#919BB6"/>
                 </svg>
             </span>
         `,n=l`
             <span role="button" @click=${this._lastPage} tabIndex="0" class="awc-pagination__button awc-pagination__button--last">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29293 16.2929C6.90241 16.6834 6.90241 17.3166 7.29293 17.7071C7.68345 18.0976 8.31662 18.0976 8.70714 17.7071L13.7071 12.7071C13.8947 12.5196 14 12.2652 14 12C14 11.7348 13.8947 11.4804 13.7071 11.2929L8.70714 6.29289C8.31662 5.90237 7.68345 5.90237 7.29293 6.29289C6.90241 6.68342 6.90241 7.31658 7.29293 7.70711L11.5858 12L7.29293 16.2929ZM16 17C16 17.5523 16.4477 18 17 18C17.5523 18 18 17.5523 18 17V7C18 6.44771 17.5523 6 17 6C16.4477 6 16 6.44771 16 7V17Z" fill="#919BB6"/>
                 </svg>
             </span>
         `;return l`
             <nav class="awc-pagination" aria-label="Pagination">
                 ${this.first?s:""}
                 ${this.activePage>1?o:""}
             
                 <ul class="awc-pagination__list">
                     ${e.map(d=>l`
                         <li>
                             <span 
                                 class="awc-pagination__item ${d===this.activePage?"active":""}"
                                 tabIndex="0" 
                                 role="button"
                                 aria-label="Page ${d}"
                                 @click=${()=>this._onPageClick(d)}
                             >${d}</span>
                         </li>
                     `)}
                 </ul>
 
                 ${this.activePage<t?r:""}
                 ${this.last?n:""}
             </nav>
         `}},i.AwcPagination.styles=[nl],ee([c({type:Number,reflect:!0,attribute:"active-page"})],i.AwcPagination.prototype,"activePage",1),ee([c({type:Number,reflect:!0,attribute:"items-per-page"})],i.AwcPagination.prototype,"itemsPerPage",1),ee([c({type:Number,reflect:!0,attribute:"total-items-count"})],i.AwcPagination.prototype,"totalItemsCount",1),ee([c({type:Boolean,reflect:!0})],i.AwcPagination.prototype,"first",2),ee([c({type:Boolean,reflect:!0})],i.AwcPagination.prototype,"last",2),i.AwcPagination=ee([g(dl)],i.AwcPagination);const ul=b`
 
     :host{
         display: inline-flex;
         width: 100%;
         max-width: 100%;
     }
 
     .awc-header {
         padding: 0 24px;
         background: var(--colors-light-white);
         background-size: 100% 100%;
         display: flex;
         flex-direction: column;
         width: 100%;
         border-bottom: 1px solid var(--colors-light-stroke);
     }
 
     .awc-header__main {
         padding: 16px 0;
         display: flex;
         align-items: center;
         justify-content: space-between;
     }
 
     .awc-header__toolbar{
         display: flex;
         align-items: center;
     }
 
     .awc-header__tab{
         display: block;
         width: 100%;
     }
 `;var hl=Object.defineProperty,pl=Object.getOwnPropertyDescriptor,wl=(a,t,e,o)=>{for(var r=o>1?void 0:o?pl(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&hl(t,e,r),r};const vl="awc-header";i.AwcHeader=class extends w{render(){return l`
             <section class="awc-header">
                 <div class="awc-header__main">
                     <div class="awc-header__content"><slot></slot></div>
                     <div class="awc-header__toolbar">
                         <slot name="toolbar"></slot>
                     </div>
                 </div>
 
                 <div class="awc-header__tab">
                     <slot name="awc-header-tab"></slot>
                 </div>
             </section>    
         `}},i.AwcHeader.styles=[ul],i.AwcHeader=wl([g(vl)],i.AwcHeader);const gl=b`
     :host {
         --awc-modal-user-min-height: var(--awc-modal-min-height);
         --awc-modal-padding: 20px;
     }
 
     .awc-modal {
         display: none;
     }
 
     :host([opened]) .awc-modal {
         display: block;
         position: fixed;
         z-index: 9999;
         left: 0;
         top: 0;
         width: 100vw;
         height: 100vh;
         min-height: var(--awc-modal-user-min-height, auto);
         background-color: rgba(0, 0, 0, 0.55);
         animation: fade-modal .3s;
         overflow-y: auto;
         pointer-events: auto;
     }
 
     @keyframes fade-modal {
         0% {
         opacity: 0;
         }
         100% {
         opacity: 1;
         }
     }
 
     :host([opened]) .awc-modal__content {
         visibility: visible;
         width: clamp(90vw, 20em, 100vw);
         transform: translateX(0px) translateY(-50%) translateZ(0px) perspective(1px);
     }
 
     @keyframes scale-animation {
         0% {
         transform: scale3d(0.5, 0.5, 0.5);
         opacity: 0;
         }
         100% {
         transform: scale3d(1, 1, 1);
         opacity: 1;
         }
     }
 
     :host .awc-modal__content {
         margin: 0 auto;
         visibility: hidden;
         position: relative;
         top: 50vh;
         max-height: calc(100vh - 96px);
         max-width: 610px;
         transform: translateX(-50%) translateY(-50%);
         background-color: transparent;
     }
 
     .awc-modal-container {
         will-change: transform;
         display: block;
         background-color: var(--colors-light-white);
         box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
         transform: scale3d(1, 1, 1);
         animation: scale-animation 0.3s ease-out forwards;
         border-radius: var(--corner-radius-xl);
         overflow: hidden;
     }
 
     :host([heading]) .awc-modal__header--modal {
         justify-content: flex-end;
         align-items: center;
     }
 
     .awc-modal__header--modal {
         position: sticky;
         z-index: 1;
         top: 0;
         background-color: var(--colors-light-white);
         display: flex;
     }
 
     .awc-modal-title {
         margin: 0;
         padding: 0;
         font: var(--awc-font-h4-regular);
         color: var(--colors-light-titles);
     }
 
     .awc-modal__close {
         cursor: pointer;
         display: flex;
         align-items: center;
         justify-content: center;
         margin-left: auto;
     }
 
     .awc-modal__close svg {
         transition: fill 0.3s ease;
         fill: var(--colors-light-secondary);
     }
 
     .awc-modal__close:hover svg {
         fill: var(--colors-light-primary);
     }
 
     .awc-modal__body {
         position: relative;
         max-height: clamp(50vh, 75vh, 100vh);
         overflow-y: auto;
         padding: var(--awc-modal-padding)
     }
 
     .awc-modal__footer {
         display: flex;
         align-items: center;
         justify-content: space-between;
         flex-wrap: wrap;
         padding: 15px 20px;
         border-top: 1px solid var(--colors-light-stroke);
     }
 
     .awc-modal__footer--popup {
         border-top: none;
         padding: 0;
     }
 
     .awc-modal__footer--none {
         display: none;
     }
 
     .awc-modal__description {
         margin: 0;
         padding: 0;
         font: var(--awc-font-caption-1-regular);
         color: var(--colors-light-secondary);
     }
 
     .awc-modal__buttons {
         display: flex;
         align-items: center;
         justify-content: space-between;
         gap: var(--spacing-sm);
     }
 
     @media screen and (max-width: 576px) {
         .awc-modal__body {
             position: relative;
             max-height: clamp(50vh, 20rem, 100vh);
             overflow-y: auto;
         }
 
         .awc-modal__footer {
             flex-direction: column;
             padding: 6px 20px;
             gap: var(--spacing-m);
         }
 
         .awc-modal__buttons {
             flex-direction: column;
             width: 100%;
         }
 
         .awc-modal__buttons ::slotted(awc-button) {
             display: flex;
             width: 100%;
         }
     }
 `;var fl=Object.defineProperty,bl=Object.getOwnPropertyDescriptor,xt=(a,t,e,o)=>{for(var r=o>1?void 0:o?bl(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&fl(t,e,r),r};const _l="awc-modal";i.AwcModal=class extends w{constructor(){super(...arguments),this.opened=!1,this.customizable=!1,this._isEmptyButtonSlot=!0,this._html=document.querySelector("html"),this._keyClosing=this._handleKeyClosing.bind(this),this._clickOutside=this._handleClickOutside.bind(this)}get tabsGroup(){return this.querySelector(Qr)}_handleKeyClosing(t){t.key==="Escape"&&this.opened&&this.close()}_handleClickOutside(t){t.composedPath().includes(this.shadowRoot.querySelector(".awc-modal__content"))||this.close()}_toggleScrollLock(){this.opened?this._html.style.overflow="hidden":this._html.style.removeProperty("overflow")}_disableTabsDivider(){this.tabsGroup&&(this.tabsGroup.noDivider=!0)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this._keyClosing),this.addEventListener("click",this._clickOutside)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._keyClosing),this.removeEventListener("click",this._clickOutside)}updated(t){super.updated(t),t.has("opened")&&(this._toggleScrollLock(),this._disableTabsDivider(),this.opened?(this._onInert(),this._modalOpenEvent(this.opened)):(this._removeInert(),this._modalCloseEvent(this.opened))),(t.has("opened")||t.has("slottedButtons"))&&this._checkSlottedButton()}_onInert(){const t=e=>{e.parentNode&&(Array.from(e.parentNode.childNodes).forEach(o=>{o!==e&&o.nodeType===Node.ELEMENT_NODE&&(o.inert=!0)}),e.parentNode!==document.body&&t(e.parentNode))};t(this)}_removeInert(){document.querySelectorAll("[inert]").forEach(t=>{t.inert=!1})}get awcButtons(){return[...this.querySelectorAll("awc-button")]}_checkSlottedButton(){this.awcButtons.filter(e=>e.getAttribute("slot")==="awc-modal-button").length?this._isEmptyButtonSlot=!1:(this._isEmptyButtonSlot=!0,this.description="")}open(){this.opened=!0}close(){this.opened=!1}_renderCloseIcon(){return N`
             <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289Z"/>
             </svg>
         `}render(){const t=l`
             <div class="awc-modal__header--modal">
                 <awc-header>
                     <h4 class="awc-modal-title">${this.heading}</h4>
                     <span class="awc-modal__close" @click=${this.close} slot="toolbar">
                         ${this._renderCloseIcon()}
                     </span>
                     <div class="awc-modal__tab" slot="awc-header-tab">
                         <slot name="awc-modal-header"></slot>
                     </div>
                 </awc-header>
             </div>
         `;return this.customizable?l`
             <div class="awc-modal">
                     <div class="awc-modal__content"> 
                         <div class="awc-modal-container">
                             <slot></slot> 
                         </div>
                     </div>
                 </div>
             `:l`
                 <div class="awc-modal">
                     <div class="awc-modal__content"> 
                         <div class="awc-modal-container">
                             ${this.heading?t:""}
                             <div class="awc-modal__body">
                                 <slot></slot>
                             </div>
                             <div class="awc-modal__footer ${this._isEmptyButtonSlot?"awc-modal__footer--popup":""}">
                                 ${this.description?l`<p class="awc-modal__description">${this.description}</p>`:l`<slot name="awc-modal-description"></slot>`}
                                 <div class="awc-modal__buttons">
                                     <slot name="awc-modal-button"></slot>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             `}},i.AwcModal.styles=[gl,Zt],xt([c({type:String,reflect:!0})],i.AwcModal.prototype,"heading",2),xt([c({type:String,reflect:!0})],i.AwcModal.prototype,"description",2),xt([c({type:Boolean,reflect:!0})],i.AwcModal.prototype,"opened",2),xt([c({type:Boolean,reflect:!0})],i.AwcModal.prototype,"customizable",2),xt([Xr("slot[name='awc-modal-button']")],i.AwcModal.prototype,"slottedButtons",2),xt([U()],i.AwcModal.prototype,"_isEmptyButtonSlot",2),xt([k("awc-modal-open")],i.AwcModal.prototype,"_modalOpenEvent",2),xt([k("awc-modal-close")],i.AwcModal.prototype,"_modalCloseEvent",2),i.AwcModal=xt([g(_l)],i.AwcModal);const ml=b`
     :host {
         box-sizing: border-box;
         display: var(--awc-popover-display, inline-flex);
     }
     
     .awc-popover {
         position: absolute;
         display: none;
         z-index: 99999;
         min-width: var(--awc-popover-min-width);
         max-width: var(--awc-popover-max-width);
         min-height: var(--awc-popover-min-height, 10px);
         max-height: var(--awc-popover-max-height, 300px);
         padding: 12px;
         background-color: var(--colors-light-white);
         box-shadow: 0px 2px 15px 0px #0000001a;
         border-radius: var(--corner-radius-s);
         outline: none;
         box-sizing: border-box;
         overflow-y: auto;
         overflow-x: hidden;
     }
 
     :host([no-padding]) .awc-popover {
         padding: 0;
     }
 
     .awc-popover.awc-popover--active {
       
         display: block;
     }
 `;var yl=Object.defineProperty,Cl=Object.getOwnPropertyDescriptor,lt=(a,t,e,o)=>{for(var r=o>1?void 0:o?Cl(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&yl(t,e,r),r};const Al="awc-popover",xl={XXS:"2",XS:"4",S:"8",SM:"12",M:"16",L:"20",XL:"24",XXL:"32",XXXL:"40"};i.AwcPopover=class extends w{constructor(){super(...arguments),this.position="top",this.spacing="S",this.strategy="absolute",this.triggerType="click",this.active=!1,this.disabled=!1,this.noPadding=!1,this.popperInstance=null,this._hoverTimeout=null,this._handleOutsideClick=t=>{t.composedPath().includes(this)||this.hide()},this._onMouseEnter=()=>{this.disabled||(this._hoverTimeout&&clearTimeout(this._hoverTimeout),this.active=!0)},this._onMouseLeave=()=>{this.disabled||(this._hoverTimeout=window.setTimeout(()=>this.active=!1,200))},this._onFocus=()=>{this.disabled||(this.active=!0)},this._onBlur=()=>{this.disabled||(this.active=!1)}}disconnectedCallback(){super.disconnectedCallback(),this._removeOutsideClickHandler()}_createPopperInstance(){this._nestedElement&&this._popoverElement&&(this.popperInstance=je(this._nestedElement,this._popoverElement,{placement:this.position,modifiers:[{name:"offset",options:{offset:[0,xl[this.spacing]]}}],strategy:this.strategy}))}_destroyPopperInstance(){var t;(t=this.popperInstance)==null||t.destroy(),this.popperInstance=null}_addOutsideClickHandler(){document.addEventListener("click",this._handleOutsideClick)}_removeOutsideClickHandler(){document.removeEventListener("click",this._handleOutsideClick)}_setupEventListeners(){if(this._removeEventListeners(),!this.disabled)switch(this.triggerType){case"click":this._nestedElement.addEventListener("click",this.show.bind(this));break;case"hover":this._nestedElement.addEventListener("mouseenter",this._onMouseEnter),this._nestedElement.addEventListener("mouseleave",this._onMouseLeave),this._popoverElement.addEventListener("mouseenter",this._onMouseEnter),this._popoverElement.addEventListener("mouseleave",this._onMouseLeave);break;case"focus":this._nestedElement.addEventListener("focus",this._onFocus,!0),this._nestedElement.addEventListener("blur",this._onBlur,!0);break}}_removeEventListeners(){this._nestedElement.removeEventListener("focus",this._onFocus,!0),this._nestedElement.removeEventListener("blur",this._onBlur,!0),this._nestedElement.removeEventListener("mouseenter",this._onMouseEnter),this._nestedElement.removeEventListener("mouseleave",this._onMouseLeave),this._popoverElement.removeEventListener("mouseenter",this._onMouseEnter),this._popoverElement.removeEventListener("mouseleave",this._onMouseLeave)}updated(t){super.updated(t),t.has("active")&&(this.active?this._createPopperInstance():this._destroyPopperInstance(),this.active?this._popoverOpenEvent(this.active):this._popoverCloseEvent(this.active)),(t.has("triggerType")||t.has("disabled"))&&this._setupEventListeners()}show(){this.disabled||(this.active=!0,this._addOutsideClickHandler())}hide(){this.disabled||(this.active=!1,this._removeOutsideClickHandler())}render(){const t={"awc-popover":!0,"awc-popover--active":this.active};return l`
             <div class="awc-popover__nested">
                 <slot></slot>
             </div>
             <div class=${Y(t)}>
                 <slot name="awc-popover-content"></slot>
             </div>
         `}},i.AwcPopover.shadowRootOptions={...w.shadowRootOptions,delegatesFocus:!0},i.AwcPopover.styles=[ml],lt([c({reflect:!0})],i.AwcPopover.prototype,"position",2),lt([c({type:String,reflect:!0})],i.AwcPopover.prototype,"spacing",2),lt([c({type:String,reflect:!0})],i.AwcPopover.prototype,"strategy",2),lt([c({type:String,reflect:!0,attribute:"trigger-type"})],i.AwcPopover.prototype,"triggerType",2),lt([c({type:Boolean,reflect:!0})],i.AwcPopover.prototype,"active",2),lt([c({type:Boolean,reflect:!0})],i.AwcPopover.prototype,"disabled",2),lt([c({type:Boolean,reflect:!0,attribute:"no-padding"})],i.AwcPopover.prototype,"noPadding",2),lt([k("awc-popover-open")],i.AwcPopover.prototype,"_popoverOpenEvent",2),lt([k("awc-popover-close")],i.AwcPopover.prototype,"_popoverCloseEvent",2),lt([S(".awc-popover")],i.AwcPopover.prototype,"_popoverElement",2),lt([S(".awc-popover__nested")],i.AwcPopover.prototype,"_nestedElement",2),i.AwcPopover=lt([g(Al)],i.AwcPopover);const kl=b``;var $l=Object.defineProperty,Sl=Object.getOwnPropertyDescriptor,Ol=(a,t,e,o)=>{for(var r=o>1?void 0:o?Sl(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&$l(t,e,r),r};const El="awc-table-wrapper";i.AwcTableWrapper=class extends w{createRenderRoot(){return this}render(){return l``}},i.AwcTableWrapper.styles=[kl],i.AwcTableWrapper=Ol([g(El)],i.AwcTableWrapper);const Pl=b`
     .awc-dialog {
         transition-duration: 0.3s;
         animation-name: fade-dialog-out;
     }
 
     :host([opened]) .awc-dialog {
         position: fixed;
         z-index: 9998;
         left: 0;
         top: 0;
         width: 100%;
         height: 100%;
         overflow: auto;
         background-color: rgba(0, 0, 0, 0.55);
         animation-name: fade-dialog-in;
         transition-duration: 0.2s;
     }
 
     @keyframes fade-dialog-in {
         0% {
         opacity: 0;
         }
         100% {
         opacity: 1;
         }
     }
 
     @keyframes fade-dialog-out {
         0% {
         opacity: 1;
         }
         100% {
         opacity: 0;
         }
     }
 
     :host([opened]) .awc-dialog__content {
         display: block;
         animation: scale-animation .3s ease forwards;
     }
 
     .awc-dialog__content:focus{
        outline: none;
     }
 
     @keyframes scale-animation {    
         0% {
             transform:  translate(-50%, -50%) scale3d(0.7, 0.7, 0.7);
         }
         45% {
             transform: translate(-50%, -50%) scale3d(1.03, 1.03, 1.03);
         }
         80% {
             transform: translate(-50%, -50%) scale3d(0.97, 0.97, 0.97);
         }
         100% {
             transform: translate(-50%, -50%) scale3d(1, 1, 1);
         }
     }
 
     :host .awc-dialog__content {
         display: none;
         position: absolute;
         left: -9999px;
         width: 100%;
         max-width: 420px;
         overflow: hidden;
         position: absolute;
         z-index: 9999;
         border-radius: var(--corner-radius-xl);
         margin: auto;
         top: 50%;
         left: 50%;
         box-shadow: var(--effects-hover-block);
     }
 
     :host([variant="info"]) .awc-dialog__content {
         background-color: var(--colors-light-primary);
     }
 
     :host([variant="error"]) .awc-dialog__content {
         background-color: var(--colors-light-warning);
     }
 
     .awc-dialog__body {
         padding: 24px 30px;
         display: flex;
         align-items: flex-start;
         gap: var(--spacing-l);
     }
 
     .awc-dialog__heading {
         margin: 0;
         user-select: none;
         max-width: 295px;
         text-align: start;
         color: var(--colors-light-white);
         font: var(--awc-font-h4-regular);
         font-size: 22px;
     }
 
     .awc-dialog__description {
         margin: var(--spacing-2xs) 0 0 0;
         opacity: 0.7;
         color: var(--colors-light-white);
         font: var(--awc-font-text-regular-15);
     }
 
     .awc-dialog__footer {
         background-color: var(--colors-dark-white);
         flex-wrap: wrap;
     }
 
     .awc-dialog__buttons {
         flex-wrap: wrap;
         padding: 16px 0;
         display: flex;
         align-items: center;
         justify-content: center;
         gap: var(--spacing-sm);
     }
 
     .awc-dialog__buttons ::slotted(awc-button) {
         min-width: 110px;
         max-width: 110px;
     }
 
     @media screen and (max-width: 768px) {
         .awc-dialog__body {
         flex-direction: column;
         }
     }
 `;var Il=Object.defineProperty,Bl=Object.getOwnPropertyDescriptor,kt=(a,t,e,o)=>{for(var r=o>1?void 0:o?Bl(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&Il(t,e,r),r};const Ll="awc-dialog";var xe=(a=>(a.info="info",a.error="error",a))(xe||{});const Wo={infoIcon:N`
     <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 42C33.2696 42 42 33.2696 42 22.5C42 11.7304 33.2696 3 22.5 3C11.7304 3 3 11.7304 3 22.5C3 33.2696 11.7304 42 22.5 42ZM22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45ZM21 9.5C21 8.67157 21.6716 8 22.5 8C23.3284 8 24 8.67157 24 9.5V28.5C24 29.3284 23.3284 30 22.5 30C21.6716 30 21 29.3284 21 28.5V9.5ZM22.5 37C23.3284 37 24 36.3284 24 35.5C24 34.6716 23.3284 34 22.5 34C21.6716 34 21 34.6716 21 35.5C21 36.3284 21.6716 37 22.5 37Z" fill="white"/>
     </svg>
     `,errorIcon:N`
     <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 42C33.2696 42 42 33.2696 42 22.5C42 11.7304 33.2696 3 22.5 3C11.7304 3 3 11.7304 3 22.5C3 33.2696 11.7304 42 22.5 42ZM22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45ZM14.1809 13.6699C13.6817 14.1691 13.6817 14.9786 14.1809 15.4778L20.9474 22.2444L14.181 29.0108C13.6817 29.51 13.6817 30.3195 14.181 30.8187C14.6802 31.318 15.4897 31.318 15.9889 30.8187L22.7554 24.0523L29.5218 30.8187C30.0211 31.318 30.8305 31.318 31.3298 30.8187C31.829 30.3195 31.829 29.51 31.3298 29.0108L24.5633 22.2444L31.3298 15.4778C31.8291 14.9786 31.8291 14.1691 31.3298 13.6699C30.8306 13.1706 30.0211 13.1706 29.5219 13.6699L22.7554 20.4364L15.9888 13.6699C15.4896 13.1706 14.6802 13.1706 14.1809 13.6699Z" fill="white"/>
     </svg>
     `};i.AwcDialog=class extends w{constructor(){super(...arguments),this.variant="info",this.opened=!1,this._clickOutside=this._handleClickOutside.bind(this)}_handleClickOutside(t){t.composedPath().includes(this.shadowRoot.querySelector(".awc-dialog__content"))||this.close()}_lockBody(){const t=document.querySelector("body");this.opened?(t.style.overflow="hidden",t.style.touchAction="none"):(t.style.removeProperty("overflow"),t.style.removeProperty("touch-action"))}_onInert(){const t=e=>{e.parentNode&&(Array.from(e.parentNode.childNodes).forEach(o=>{o!==e&&o.nodeType===Node.ELEMENT_NODE&&(o.inert=!0)}),e.parentNode!==document.body&&t(e.parentNode))};t(this)}_removeInert(){document.querySelectorAll("[inert]").forEach(t=>{t.inert=!1})}_setCurrentStyleAwcButtonInSlot(){this._slotButtons.assignedElements().forEach(t=>{const e=t;e.size="large"})}open(){this.opened=!0,this._onOpening(this.opened)}close(){this.opened=!1,this._onClosing(this.opened)}_closingOnEscape(t){this.opened&&t.key==="Escape"&&this.close()}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._clickOutside),document.addEventListener("DOMContentLoaded",()=>{this.opened?(this._setCurrentStyleAwcButtonInSlot(),this._onInert()):this._removeInert()})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._clickOutside)}updated(t){super.updated(t),t.has("opened")&&(this.opened?(this._setCurrentStyleAwcButtonInSlot(),this._onInert(),this._dialogContent.focus()):this._removeInert(),this._lockBody())}render(){const t=this.variant==="info"?Wo.infoIcon:Wo.errorIcon;return l`
            <div @keydown=${this._closingOnEscape} tabindex="-1" class="awc-dialog">
                 <div tabindex="${this.opened?0:-1}" class="awc-dialog__content" variant=${this.variant}> 
                     <div class="awc-dialog__body">
                         <div class="awc-dialog__icon">
                             ${t}
                         </div>      
                         <div class="awc-dialog__text">
                             ${this.heading?l`<p class="awc-dialog__heading">${this.heading}</p>`:""}
                             ${this.description?l`<p class="awc-dialog__description">${this.description}</p>`:""}
                             <slot></slot>
                         </div>  
                     </div>
                     <div class="awc-dialog__footer">
                         <div class="awc-dialog__buttons">
                             <slot name="awc-dialog-button"></slot>
                         </div>
                     </div>
                 </div>
             </div>
         `}},i.AwcDialog.shadowRootOptions={...w.shadowRootOptions,delegatesFocus:!0},i.AwcDialog.styles=[Pl],kt([c({type:String,reflect:!0})],i.AwcDialog.prototype,"heading",2),kt([c({type:String,reflect:!0})],i.AwcDialog.prototype,"description",2),kt([c({type:String,reflect:!0})],i.AwcDialog.prototype,"variant",2),kt([c({type:Boolean,reflect:!0})],i.AwcDialog.prototype,"opened",2),kt([k("awc-dialog-open")],i.AwcDialog.prototype,"_onOpening",2),kt([k("awc-dialog-close")],i.AwcDialog.prototype,"_onClosing",2),kt([S("slot[name='awc-dialog-button']")],i.AwcDialog.prototype,"_slotButtons",2),kt([S(".awc-dialog__content")],i.AwcDialog.prototype,"_dialogContent",2),i.AwcDialog=kt([g(Ll)],i.AwcDialog);const Sr=class Sr{static createDialog(t={}){if(this.currentDialog&&this.currentDialog.opened)return null;const{heading:e="Title",description:o="",variant:r=xe.info,buttons:s=[],timer:n=0}=t,d=document.createElement("awc-dialog");return d.heading=e,d.description=o,d.variant=r,n>0&&setTimeout(()=>{d.close()},n),s.forEach(u=>{const p=document.createElement("awc-button");p.textContent=u.text,p.variant=u.variant,p.background=u.background,p.addEventListener("click",()=>{u.onClick(),d.close()}),p.setAttribute("slot","awc-dialog-button"),d.appendChild(p)}),document.body.appendChild(d),d.open(),this.currentDialog=d,d.addEventListener("awc-dialog-close",()=>{document.body.removeChild(d),this.currentDialog=null},{once:!0}),d}static info(t){this.createDialog({...t,variant:xe.info})||console.warn("A dialog is already open.")}static error(t){this.createDialog({...t,variant:xe.error})||console.warn("A dialog is already open.")}static sweetAlertAdapter(t,e){if(this.currentDialog&&this.currentDialog.opened){console.warn("A dialog is already open.");return}const{title:o="",text:r="",variant:s=xe.info,showCancelButton:n=!1,confirmButtonText:d="OK",cancelButtonText:u="Cancel",timer:p=0,...h}=t,v=[];v.push({text:d,variant:"primary",background:"blue",onClick:()=>{e&&e(!0)}}),n&&v.push({text:u,variant:"transparent",background:"gray",onClick:()=>{e&&e(!1)}}),this.createDialog({heading:o,description:r,variant:s,buttons:v,timer:p,...h})||console.warn("A dialog is already open.")}};Sr.currentDialog=null;let It=Sr;window.showAwcDialog={info:It.info.bind(It),error:It.error.bind(It),sweetAlert:It.sweetAlertAdapter.bind(It)};const Tl=b`
     :host {
         display: flex;
     }
 
     /* isInlineFlex */
     :host([inline-flex]) {
         display: inline-flex;
     }
 
     :host([full-width]) {
        width: 100%;
     }
 
     /* flex-direction */
     :host([flex-direction="row"]) {
         flex-direction: row;
     }
 
     :host([flex-direction="column"]) {
         flex-direction: column;
     }
 
     /* align-items */
 
     :host([align-items="start"]) {
         align-items: flex-start;
     }
 
     :host([align-items="center"]) {
         align-items: center;
     }
 
     :host([align-items="end"]) {
         align-items: flex-end;
     }
 
     :host([justify-content="center"]) {
         justify-content: center;
     }
 
     :host([justify-content="start"]) {
         justify-content: start;
     }
 
     :host([justify-content="end"]) {
         justify-content: end;
     }
 
     :host([justify-content="baseline"]) {
         justify-content: baseline;
     }
 
     :host([justify-content="space-between"]) {
         justify-content: space-between;
     }
 
     :host([justify-content="space-around"]) {
         justify-content: space-around;
     }
 
     :host([justify-content="space-evenly"]) {
         justify-content: space-evenly;
     }
 
     /* gap */
     :host([gap="none"]) {
         gap: 0;
     }
 
     :host([gap="2xs"]) {
         gap: var(--spacing-2xs);
     }
 
     :host([gap="xs"]) {
         gap: var(--spacing-xs);
     }
     :host([gap="s"]) {
         gap: var(--spacing-s);
     }
 
     :host([gap="sm"]) {
         gap: var(--spacing-sm);
     }
 
     :host([gap="m"]) {
         gap: var(--spacing-m);
     }
 
     :host([gap="l"]) {
         gap: var(--spacing-l);
     }
 
     :host([gap="xl"]) {
         gap: var(--spacing-xl);
     }
 
     :host([gap="2xl"]) {
         gap: var(--spacing-2xl);
     }
 
     :host([gap="3xl"]) {
         gap: var(--spacing-3xl);
     }
 
     :host([gap="3xl"]) {
         gap: var(--spacing-3xl);
     }
 
     /* flex-wrap */
     :host([flex-wrap="nowrap"]) {
         flex-wrap: nowrap;
     }
 
     :host([flex-wrap="wrap"]) {
         flex-wrap: wrap;
     }
 
     :host([flex-wrap="wrap-reverse"]) {
         flex-wrap: wrap-reverse;
     }
 `;var Dl=Object.defineProperty,Ml=Object.getOwnPropertyDescriptor,Bt=(a,t,e,o)=>{for(var r=o>1?void 0:o?Ml(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&Dl(t,e,r),r};const jl="awc-stack";i.AwcStack=class extends w{constructor(){super(...arguments),this.flexDirection="row",this.alignItems="start",this.gap="s",this.isInline=!1,this.fullWidth=!1}render(){return l`<slot></slot>`}},i.AwcStack.styles=[Tl],Bt([c({type:String,reflect:!0,attribute:"flex-direction"})],i.AwcStack.prototype,"flexDirection",2),Bt([c({type:String,reflect:!0,attribute:"align-items"})],i.AwcStack.prototype,"alignItems",2),Bt([c({type:String,reflect:!0,attribute:"justify-content"})],i.AwcStack.prototype,"justifyContent",2),Bt([c({type:String,reflect:!0})],i.AwcStack.prototype,"gap",2),Bt([c({type:String,reflect:!0,attribute:"flex-wrap"})],i.AwcStack.prototype,"flexWrap",2),Bt([c({type:Boolean,reflect:!0,attribute:"inline-flex"})],i.AwcStack.prototype,"isInline",2),Bt([c({type:Boolean,reflect:!0,attribute:"full-width"})],i.AwcStack.prototype,"fullWidth",2),i.AwcStack=Bt([g(jl)],i.AwcStack);const zl=b`
   :host {
     display: inline-block;
     --awc-button-remove-border-radius: 0px;
     --awc-split-button-border-radius: var(--corner-radius-s);
     --awc-split-button-padding: 0 8px;
   }
 
   :host ::slotted(awc-button) {
     --awc-button-border-radius: var(--awc-split-button-border-radius)
       var(--awc-button-remove-border-radius)
       var(--awc-button-remove-border-radius)
       var(--awc-split-button-border-radius);
     border-radius: var(--awc-button-border-radius);
   }
 
   .awc-split-button {
     display: flex;
     align-items: center;
   }
 
   awc-button.awc-button-toggler {
     --awc-button-padding-regular: var(--awc-split-button-padding);
     --awc-button-border-radius: var(--awc-button-remove-border-radius)
       var(--awc-split-button-border-radius)
       var(--awc-split-button-border-radius)
       var(--awc-button-remove-border-radius);
     border-radius: var(--awc-button-border-radius);
 
     position: relative;
   }
 
   .awc-button-toggler::after {
     content: "";
     cursor: pointer;
 
     position: absolute;
     left: 0;
     top: 4px;
     bottom: 4px;
 
     width: 1px;
 
     background-color: var(--colors-light-white);
     opacity: 0.2;
   }
 `;var Rl=Object.defineProperty,Vl=Object.getOwnPropertyDescriptor,Ge=(a,t,e,o)=>{for(var r=o>1?void 0:o?Vl(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&Rl(t,e,r),r};const Fl="awc-split-button";i.AwcSplitButton=class extends w{constructor(){super(...arguments),this.menuOpen=!1}_dropdownClose(t){t.detail.menuOpen||this.splitButtonClose()}splitButtonOpen(){this.menuOpen=!0,this._splitButtonOpened({menuOpen:this.menuOpen})}splitButtonClose(){this.menuOpen=!1,this._splitButtonClosed({menuOpen:this.menuOpen})}_handleDropdown(){this.menuOpen?this.splitButtonClose():this.splitButtonOpen()}render(){return l`
       <div class="awc-split-button">
         <slot name="awc-split-button"></slot>
         <awc-dropdown
           @awc-dropdown-close=${this._dropdownClose}
           .visible="${this.menuOpen}"
         >
           <awc-button
             class="awc-button-toggler"
             @click=${this._handleDropdown}
             filling
             slot="awc-dropdown-toggle"
           >
             <awc-icon size="16" name="select_arrow_down"></awc-icon>
           </awc-button>
           <slot></slot>
         </awc-dropdown>
       </div>
     `}},i.AwcSplitButton.styles=zl,Ge([c({type:Boolean,reflect:!0,attribute:"menu-open"})],i.AwcSplitButton.prototype,"menuOpen",2),Ge([k("awc-split-button-close")],i.AwcSplitButton.prototype,"_splitButtonClosed",2),Ge([k("awc-split-button-open")],i.AwcSplitButton.prototype,"_splitButtonOpened",2),i.AwcSplitButton=Ge([g(Fl)],i.AwcSplitButton);const Gl=b`
   :host {
     --awc-triple-toggler-width: 47px;
     --awc-triple-toggler-height: 20px;
     --awc-triple-toggler-padding: 3px;
     --awc-triple-toggler-width-calc: calc(
       var(--awc-triple-toggler-width) - var(--awc-triple-toggler-padding)
     );
 
     --awc-triple-toggler-background-first: var(--colors-light-warning);
     --awc-triple-toggler-background-second: var(--colors-light-primary);
     --awc-triple-toggler-background-third: var(--colors-light-success);
   }
 
   .awc-triple-toggler {
     outline: 1px solid transparent;
     position: relative;
     display: flex;
     width: var(--awc-triple-toggler-width-calc);
     height: var(--awc-triple-toggler-height);
     border-radius: 50px;
     padding: 0 var(--awc-triple-toggler-padding);
     transition:
       background-color 0.3s ease-in-out,
       outline 0.3s ease;
   }
 
   .awc-triple-toggler:focus-visible {
     outline: 1px solid var(--colors-light-focus);
   }
 
   :host([state="first"]) .awc-triple-toggler {
     background-color: var(--awc-triple-toggler-background-first);
   }
 
   :host([state="second"]) .awc-triple-toggler {
     background-color: var(--awc-triple-toggler-background-second);
   }
 
   :host([state="third"]) .awc-triple-toggler {
     background-color: var(--awc-triple-toggler-background-third);
   }
 
   .awc-triple-toggler__track {
     display: flex;
     flex-grow: 1;
     justify-content: space-between;
     align-items: center;
   }
 
   .awc-triple-toggler__thumb {
     position: absolute;
     width: 14px;
     height: 14px;
     background-color: white;
     border-radius: 50%;
     transition: transform 0.3s ease;
     top: 50%;
     transform: translateY(-50%);
   }
 
   .awc-triple-toggler__thumb.first {
     transform: translate(0, -50%);
   }
 
   .awc-triple-toggler__thumb.second {
     transform: translate(15px, -50%);
   }
 
   .awc-triple-toggler__thumb.third {
     transform: translate(30px, -50%);
   }
 
   .awc-triple-toggler__option {
     flex: 1;
     height: 100%;
     cursor: pointer;
   }
 `;var Ul=Object.defineProperty,Hl=Object.getOwnPropertyDescriptor,$r=(a,t,e,o)=>{for(var r=o>1?void 0:o?Hl(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&Ul(t,e,r),r};const ql="awc-triple-toggler";i.AwcTripleToggler=class extends w{constructor(){super(...arguments),this.state="first"}_setState(t){this.state=t}_handleKeydown(t){if(t.key==="ArrowLeft"||t.key==="ArrowRight")switch(t.preventDefault(),this.state){case"first":t.key==="ArrowRight"&&this._setState("second");break;case"second":t.key==="ArrowLeft"&&this._setState("first"),t.key==="ArrowRight"&&this._setState("third");break;case"third":t.key==="ArrowLeft"&&this._setState("second");break}}updated(t){super.updated(t),t.has("state")&&this._onChangeState(this.state)}render(){return l`
       <div
         tabindex="0"
         role="switch"
         class="awc-triple-toggler"
         @keydown="${this._handleKeydown}"
       >
         <div class="awc-triple-toggler__track">
           <div
             class="awc-triple-toggler__option first-option"
             @click="${()=>this._setState("first")}"
           ></div>
           <div
             class="awc-triple-toggler__option second-option"
             @click="${()=>this._setState("second")}"
           ></div>
           <div
             class="awc-triple-toggler__option third-option"
             @click="${()=>this._setState("third")}"
           ></div>
         </div>
         <div class="awc-triple-toggler__thumb ${this.state}"></div>
       </div>
     `}},i.AwcTripleToggler.styles=Gl,$r([c({type:String,reflect:!0})],i.AwcTripleToggler.prototype,"state",2),$r([k("awc-triple-toggler-change")],i.AwcTripleToggler.prototype,"_onChangeState",2),i.AwcTripleToggler=$r([g(ql)],i.AwcTripleToggler);const Nl=b`
     :host {
         display: inline-flex;
         box-sizing: border-box;
 
         --awc-icon-button-background-hover: var(--awc-icon-button-background-hover-theme);
         --awc-icon-button-background-active: var(--awc-icon-button-background-active-theme);
     }
 
     button {
         cursor: pointer;
         border: none;
         background-color: transparent;
         padding: 0;
     }
 
     a {
         cursor: pointer;
         text-decoration: none;
     }
 
     :host([disabled]),
     :host([disabled]) .awc-icon-button {
         opacity: .5;
         pointer-events: none;
     }
 
     :host([size="20"]) .awc-icon-button { 
         --awc-icon-button-width: 20px;
         --awc-icon-button-height: 20px;
     }
 
     :host([size="24"]) .awc-icon-button {
         --awc-icon-button-width: 24px;
         --awc-icon-button-height: 24px;
     }
 
     :host([size="28"]) .awc-icon-button {
         --awc-icon-button-width: 28px;
         --awc-icon-button-height: 28px;
     }
 
     :host([size="30"]) .awc-icon-button {
         --awc-icon-button-width: 30px;
         --awc-icon-button-height: 30px;
     }
 
     :host([size="32"]) .awc-icon-button {
         --awc-icon-button-width: 32px;
         --awc-icon-button-height: 32px;
     }
 
     :host([size="36"]) .awc-icon-button {
         --awc-icon-button-width: 36px;
         --awc-icon-button-height: 36px;
     }
 
     :host([size="40"]) .awc-icon-button {
         --awc-icon-button-width: 40px;
         --awc-icon-button-height: 40px;
     }
 
     .awc-icon-button {
         position: relative;
         display: flex;
         align-items: center;
         justify-content: center;
         height: var(--awc-icon-button-height);
         width: var(--awc-icon-button-width);
         border-radius: var(--corner-radius-s);
         background-color: rgba(0, 0, 0, 0);
         transition: background-color .3s ease;
     }
 
     .awc-icon-button:hover {
         background-color: var(--awc-icon-button-background-hover);
     }
 
     .awc-icon-button:active {
         background-color: var(--awc-icon-button-background-active);
     }
 
     .awc-icon-button:focus-visible {
         outline:  1px solid var(--colors-light-focus);
         background-color: var(--awc-icon-button-background-hover);
     }
 
     .awc-icon-button::slotted(awc-icon) {
         position: absolute;
         left: 0;
         top: 0;
     }
 `;var Wl=Object.defineProperty,Zl=Object.getOwnPropertyDescriptor,Lt=(a,t,e,o)=>{for(var r=o>1?void 0:o?Zl(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&Wl(t,e,r),r};const Kl="awc-icon-button";i.AwcIconButton=class extends w{constructor(){super(...arguments),this.size="24",this.type="submit",this.target="_self",this.disabled=!1}render(){const t=l`
             <button 
                 ?disabled=${this.disabled}
                 size=${this.size}
                 type=${this.type} 
                 class="awc-icon-button">
                 <slot></slot>
             </button>
         `,e=l`
             <a 
                ?disabled=${this.disabled}
                size=${this.size}
                href=${this.href} 
                target=${this.target} 
                class="awc-icon-button">
                 <slot></slot>
             </a>
         `;return this.href?e:t}},i.AwcIconButton.styles=Nl,Lt([c({type:String,reflect:!0})],i.AwcIconButton.prototype,"name",2),Lt([c({type:String,reflect:!0})],i.AwcIconButton.prototype,"value",2),Lt([c({type:String,reflect:!0})],i.AwcIconButton.prototype,"size",2),Lt([c({type:String,reflect:!0})],i.AwcIconButton.prototype,"type",2),Lt([c({type:String,reflect:!0})],i.AwcIconButton.prototype,"href",2),Lt([c({type:String})],i.AwcIconButton.prototype,"target",2),Lt([c({type:Boolean,reflect:!0})],i.AwcIconButton.prototype,"disabled",2),i.AwcIconButton=Lt([g(Kl)],i.AwcIconButton);var Xl=Object.defineProperty,Yl=Object.getOwnPropertyDescriptor,Ue=(a,t,e,o)=>{for(var r=o>1?void 0:o?Yl(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&Xl(t,e,r),r};i.AwcCanControl=class extends w{constructor(){super(...arguments),this.name="",this.options={},this._canInstance=null}connectedCallback(){super.connectedCallback(),document.addEventListener("DOMContentLoaded",this._setupCanControl.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this._automaticallyDestroyComponent()}updated(t){super.updated(t),t.has("name")&&this._setupCanControl()}_setupCanControl(){if(!this.name)return;const t=window.can;if(!t){console.error("can is not available. Please ensure it is loaded via CDN.");return}const e=t.Control.extend({},{});e&&(this._canInstance=new e(this,this.options))}_automaticallyDestroyComponent(){this._canInstance&&typeof this._canInstance.destroy=="function"&&this._canInstance.destroy()}createRenderRoot(){return this}render(){return l`<slot></slot>`}},Ue([c({type:String,reflect:!0})],i.AwcCanControl.prototype,"name",2),Ue([c({type:Object})],i.AwcCanControl.prototype,"options",2),Ue([U()],i.AwcCanControl.prototype,"_canInstance",2),i.AwcCanControl=Ue([g("awc-can-control")],i.AwcCanControl);var Jl=Object.defineProperty,Ql=Object.getOwnPropertyDescriptor,He=(a,t,e,o)=>{for(var r=o>1?void 0:o?Ql(t,e):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&Jl(t,e,r),r};return i.AwcVueMounter=class extends w{constructor(){super(...arguments),this.name="",this.options={},this.type="construct"}createVueInstance(){const t=this.getVueConstructor(this.name),e=Vue.component(this.name);if(!t&&this.type!=="component")throw new Error(`Vue constructor "${this.name}" not found on window object.`);switch(this.type){case"closure":if(!t)throw new Error(`Cannot create Vue instance via closure: constructor "${this.name}" is not found.`);this.vueInstance=this.createViaClosure(t);break;case"construct":if(!t)throw new Error(`Cannot create Vue instance via construct: constructor "${this.name}" is not found.`);this.vueInstance=this.createViaConstruct(t);break;case"component":if(!e)throw new Error(`Vue component "${this.name}" not found globally.`);this.vueInstance=this.createViaComponent(e);break;default:throw new Error(`Invalid type "${this.type}". Expected "construct", "closure", or "component".`)}if(!this.vueInstance)throw new Error("Vue instance could not be created.");this.vueInstance.$mount(this.renderRoot.querySelector("#vue-root"))}getVueConstructor(t){return t.split(".").reduce((e,o)=>e?e[o]:void 0,window)}createViaConstruct(t){return new t({data:this.options})}createViaClosure(t){const e=this.closure(this.options);return new t({data:e})}createViaComponent(t){return new t({propsData:this.options})}closure(t){return{...t}}connectedCallback(){super.connectedCallback(),document.addEventListener("DOMContentLoaded",()=>this.createVueInstance())}disconnectedCallback(){super.disconnectedCallback(),this.vueInstance&&this.vueInstance.$destroy()}updated(t){super.updated(t),this.createVueInstance()}createRenderRoot(){return this}render(){return l`<div id="vue-root"></div>`}},He([c({type:String,reflect:!0})],i.AwcVueMounter.prototype,"name",2),He([c({type:Object})],i.AwcVueMounter.prototype,"options",2),He([c({type:String,reflect:!0})],i.AwcVueMounter.prototype,"type",2),i.AwcVueMounter=He([g("awc-vue-mounter")],i.AwcVueMounter),Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),i}({});
 