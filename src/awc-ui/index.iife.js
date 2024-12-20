var index=function(exports){"use strict";/**
  * @license
  * Copyright 2019 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */var Xr;const t$3=globalThis,e$8=t$3.ShadowRoot&&(t$3.ShadyCSS===void 0||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$1=Symbol(),o$6=new WeakMap;let n$4=class{constructor(w,D,F){if(this._$cssResult$=!0,F!==s$1)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=w,this.t=D}get styleSheet(){let w=this.o;const D=this.t;if(e$8&&w===void 0){const F=D!==void 0&&D.length===1;F&&(w=o$6.get(D)),w===void 0&&((this.o=w=new CSSStyleSheet).replaceSync(this.cssText),F&&o$6.set(D,w))}return w}toString(){return this.cssText}};const r$6=O=>new n$4(typeof O=="string"?O:O+"",void 0,s$1),i$5=(O,...w)=>{const D=O.length===1?O[0]:w.reduce((F,q,U)=>F+(W=>{if(W._$cssResult$===!0)return W.cssText;if(typeof W=="number")return W;throw Error("Value passed to 'css' function must be a 'css' function result: "+W+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(q)+O[U+1],O[0]);return new n$4(D,O,s$1)},S$1=(O,w)=>{if(e$8)O.adoptedStyleSheets=w.map(D=>D instanceof CSSStyleSheet?D:D.styleSheet);else for(const D of w){const F=document.createElement("style"),q=t$3.litNonce;q!==void 0&&F.setAttribute("nonce",q),F.textContent=D.cssText,O.appendChild(F)}},c$3=e$8?O=>O:O=>O instanceof CSSStyleSheet?(w=>{let D="";for(const F of w.cssRules)D+=F.cssText;return r$6(D)})(O):O;/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const{is:i$4,defineProperty:e$7,getOwnPropertyDescriptor:r$5,getOwnPropertyNames:h$1,getOwnPropertySymbols:o$5,getPrototypeOf:n$3}=Object,a$2=globalThis,c$2=a$2.trustedTypes,l$3=c$2?c$2.emptyScript:"",p$1=a$2.reactiveElementPolyfillSupport,d$1=(O,w)=>O,u$2={toAttribute(O,w){switch(w){case Boolean:O=O?l$3:null;break;case Object:case Array:O=O==null?O:JSON.stringify(O)}return O},fromAttribute(O,w){let D=O;switch(w){case Boolean:D=O!==null;break;case Number:D=O===null?null:Number(O);break;case Object:case Array:try{D=JSON.parse(O)}catch{D=null}}return D}},f$2=(O,w)=>!i$4(O,w),y$1={attribute:!0,type:String,converter:u$2,reflect:!1,hasChanged:f$2};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),a$2.litPropertyMetadata??(a$2.litPropertyMetadata=new WeakMap);let b$1=class extends HTMLElement{static addInitializer(w){this._$Ei(),(this.l??(this.l=[])).push(w)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(w,D=y$1){if(D.state&&(D.attribute=!1),this._$Ei(),this.elementProperties.set(w,D),!D.noAccessor){const F=Symbol(),q=this.getPropertyDescriptor(w,F,D);q!==void 0&&e$7(this.prototype,w,q)}}static getPropertyDescriptor(w,D,F){const{get:q,set:U}=r$5(this.prototype,w)??{get(){return this[D]},set(W){this[D]=W}};return{get(){return q==null?void 0:q.call(this)},set(W){const Y=q==null?void 0:q.call(this);U.call(this,W),this.requestUpdate(w,Y,F)},configurable:!0,enumerable:!0}}static getPropertyOptions(w){return this.elementProperties.get(w)??y$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const w=n$3(this);w.finalize(),w.l!==void 0&&(this.l=[...w.l]),this.elementProperties=new Map(w.elementProperties)}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const D=this.properties,F=[...h$1(D),...o$5(D)];for(const q of F)this.createProperty(q,D[q])}const w=this[Symbol.metadata];if(w!==null){const D=litPropertyMetadata.get(w);if(D!==void 0)for(const[F,q]of D)this.elementProperties.set(F,q)}this._$Eh=new Map;for(const[D,F]of this.elementProperties){const q=this._$Eu(D,F);q!==void 0&&this._$Eh.set(q,D)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(w){const D=[];if(Array.isArray(w)){const F=new Set(w.flat(1/0).reverse());for(const q of F)D.unshift(c$3(q))}else w!==void 0&&D.push(c$3(w));return D}static _$Eu(w,D){const F=D.attribute;return F===!1?void 0:typeof F=="string"?F:typeof w=="string"?w.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var w;this._$ES=new Promise(D=>this.enableUpdating=D),this._$AL=new Map,this._$E_(),this.requestUpdate(),(w=this.constructor.l)==null||w.forEach(D=>D(this))}addController(w){var D;(this._$EO??(this._$EO=new Set)).add(w),this.renderRoot!==void 0&&this.isConnected&&((D=w.hostConnected)==null||D.call(w))}removeController(w){var D;(D=this._$EO)==null||D.delete(w)}_$E_(){const w=new Map,D=this.constructor.elementProperties;for(const F of D.keys())this.hasOwnProperty(F)&&(w.set(F,this[F]),delete this[F]);w.size>0&&(this._$Ep=w)}createRenderRoot(){const w=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(w,this.constructor.elementStyles),w}connectedCallback(){var w;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(w=this._$EO)==null||w.forEach(D=>{var F;return(F=D.hostConnected)==null?void 0:F.call(D)})}enableUpdating(w){}disconnectedCallback(){var w;(w=this._$EO)==null||w.forEach(D=>{var F;return(F=D.hostDisconnected)==null?void 0:F.call(D)})}attributeChangedCallback(w,D,F){this._$AK(w,F)}_$EC(w,D){var U;const F=this.constructor.elementProperties.get(w),q=this.constructor._$Eu(w,F);if(q!==void 0&&F.reflect===!0){const W=(((U=F.converter)==null?void 0:U.toAttribute)!==void 0?F.converter:u$2).toAttribute(D,F.type);this._$Em=w,W==null?this.removeAttribute(q):this.setAttribute(q,W),this._$Em=null}}_$AK(w,D){var U;const F=this.constructor,q=F._$Eh.get(w);if(q!==void 0&&this._$Em!==q){const W=F.getPropertyOptions(q),Y=typeof W.converter=="function"?{fromAttribute:W.converter}:((U=W.converter)==null?void 0:U.fromAttribute)!==void 0?W.converter:u$2;this._$Em=q,this[q]=Y.fromAttribute(D,W.type),this._$Em=null}}requestUpdate(w,D,F){if(w!==void 0){if(F??(F=this.constructor.getPropertyOptions(w)),!(F.hasChanged??f$2)(this[w],D))return;this.P(w,D,F)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(w,D,F){this._$AL.has(w)||this._$AL.set(w,D),F.reflect===!0&&this._$Em!==w&&(this._$Ej??(this._$Ej=new Set)).add(w)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(D){Promise.reject(D)}const w=this.scheduleUpdate();return w!=null&&await w,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var F;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[U,W]of this._$Ep)this[U]=W;this._$Ep=void 0}const q=this.constructor.elementProperties;if(q.size>0)for(const[U,W]of q)W.wrapped!==!0||this._$AL.has(U)||this[U]===void 0||this.P(U,this[U],W)}let w=!1;const D=this._$AL;try{w=this.shouldUpdate(D),w?(this.willUpdate(D),(F=this._$EO)==null||F.forEach(q=>{var U;return(U=q.hostUpdate)==null?void 0:U.call(q)}),this.update(D)):this._$EU()}catch(q){throw w=!1,this._$EU(),q}w&&this._$AE(D)}willUpdate(w){}_$AE(w){var D;(D=this._$EO)==null||D.forEach(F=>{var q;return(q=F.hostUpdated)==null?void 0:q.call(F)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(w)),this.updated(w)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(w){return!0}update(w){this._$Ej&&(this._$Ej=this._$Ej.forEach(D=>this._$EC(D,this[D]))),this._$EU()}updated(w){}firstUpdated(w){}};b$1.elementStyles=[],b$1.shadowRootOptions={mode:"open"},b$1[d$1("elementProperties")]=new Map,b$1[d$1("finalized")]=new Map,p$1==null||p$1({ReactiveElement:b$1}),(a$2.reactiveElementVersions??(a$2.reactiveElementVersions=[])).push("2.0.4");/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const t$2=globalThis,i$3=t$2.trustedTypes,s=i$3?i$3.createPolicy("lit-html",{createHTML:O=>O}):void 0,e$6="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,o$4="?"+h,n$2=`<${o$4}>`,r$4=document,l$2=()=>r$4.createComment(""),c$1=O=>O===null||typeof O!="object"&&typeof O!="function",a$1=Array.isArray,u$1=O=>a$1(O)||typeof(O==null?void 0:O[Symbol.iterator])=="function",d=`[ 	
 \f\r]`,f$1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m$1=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ 	
 \f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$$3=/^(?:script|style|textarea|title)$/i,y=O=>(w,...D)=>({_$litType$:O,strings:w,values:D}),x=y(1),b=y(2),T=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),A=new WeakMap,C=r$4.createTreeWalker(r$4,129);function P(O,w){if(!a$1(O)||!O.hasOwnProperty("raw"))throw Error("invalid template strings array");return s!==void 0?s.createHTML(w):w}const V=(O,w)=>{const D=O.length-1,F=[];let q,U=w===2?"<svg>":w===3?"<math>":"",W=f$1;for(let Y=0;Y<D;Y++){const Q=O[Y];let ne,oe,ce=-1,fe=0;for(;fe<Q.length&&(W.lastIndex=fe,oe=W.exec(Q),oe!==null);)fe=W.lastIndex,W===f$1?oe[1]==="!--"?W=v:oe[1]!==void 0?W=_:oe[2]!==void 0?($$3.test(oe[2])&&(q=RegExp("</"+oe[2],"g")),W=m$1):oe[3]!==void 0&&(W=m$1):W===m$1?oe[0]===">"?(W=q??f$1,ce=-1):oe[1]===void 0?ce=-2:(ce=W.lastIndex-oe[2].length,ne=oe[1],W=oe[3]===void 0?m$1:oe[3]==='"'?g:p):W===g||W===p?W=m$1:W===v||W===_?W=f$1:(W=m$1,q=void 0);const we=W===m$1&&O[Y+1].startsWith("/>")?" ":"";U+=W===f$1?Q+n$2:ce>=0?(F.push(ne),Q.slice(0,ce)+e$6+Q.slice(ce)+h+we):Q+h+(ce===-2?Y:we)}return[P(O,U+(O[D]||"<?>")+(w===2?"</svg>":w===3?"</math>":"")),F]};class N{constructor({strings:w,_$litType$:D},F){let q;this.parts=[];let U=0,W=0;const Y=w.length-1,Q=this.parts,[ne,oe]=V(w,D);if(this.el=N.createElement(ne,F),C.currentNode=this.el.content,D===2||D===3){const ce=this.el.content.firstChild;ce.replaceWith(...ce.childNodes)}for(;(q=C.nextNode())!==null&&Q.length<Y;){if(q.nodeType===1){if(q.hasAttributes())for(const ce of q.getAttributeNames())if(ce.endsWith(e$6)){const fe=oe[W++],we=q.getAttribute(ce).split(h),Z=/([.?@])?(.*)/.exec(fe);Q.push({type:1,index:U,name:Z[2],strings:we,ctor:Z[1]==="."?H:Z[1]==="?"?I:Z[1]==="@"?L:k}),q.removeAttribute(ce)}else ce.startsWith(h)&&(Q.push({type:6,index:U}),q.removeAttribute(ce));if($$3.test(q.tagName)){const ce=q.textContent.split(h),fe=ce.length-1;if(fe>0){q.textContent=i$3?i$3.emptyScript:"";for(let we=0;we<fe;we++)q.append(ce[we],l$2()),C.nextNode(),Q.push({type:2,index:++U});q.append(ce[fe],l$2())}}}else if(q.nodeType===8)if(q.data===o$4)Q.push({type:2,index:U});else{let ce=-1;for(;(ce=q.data.indexOf(h,ce+1))!==-1;)Q.push({type:7,index:U}),ce+=h.length-1}U++}}static createElement(w,D){const F=r$4.createElement("template");return F.innerHTML=w,F}}function S(O,w,D=O,F){var W,Y;if(w===T)return w;let q=F!==void 0?(W=D._$Co)==null?void 0:W[F]:D._$Cl;const U=c$1(w)?void 0:w._$litDirective$;return(q==null?void 0:q.constructor)!==U&&((Y=q==null?void 0:q._$AO)==null||Y.call(q,!1),U===void 0?q=void 0:(q=new U(O),q._$AT(O,D,F)),F!==void 0?(D._$Co??(D._$Co=[]))[F]=q:D._$Cl=q),q!==void 0&&(w=S(O,q._$AS(O,w.values),q,F)),w}class M{constructor(w,D){this._$AV=[],this._$AN=void 0,this._$AD=w,this._$AM=D}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(w){const{el:{content:D},parts:F}=this._$AD,q=((w==null?void 0:w.creationScope)??r$4).importNode(D,!0);C.currentNode=q;let U=C.nextNode(),W=0,Y=0,Q=F[0];for(;Q!==void 0;){if(W===Q.index){let ne;Q.type===2?ne=new R(U,U.nextSibling,this,w):Q.type===1?ne=new Q.ctor(U,Q.name,Q.strings,this,w):Q.type===6&&(ne=new z(U,this,w)),this._$AV.push(ne),Q=F[++Y]}W!==(Q==null?void 0:Q.index)&&(U=C.nextNode(),W++)}return C.currentNode=r$4,q}p(w){let D=0;for(const F of this._$AV)F!==void 0&&(F.strings!==void 0?(F._$AI(w,F,D),D+=F.strings.length-2):F._$AI(w[D])),D++}}class R{get _$AU(){var w;return((w=this._$AM)==null?void 0:w._$AU)??this._$Cv}constructor(w,D,F,q){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=w,this._$AB=D,this._$AM=F,this.options=q,this._$Cv=(q==null?void 0:q.isConnected)??!0}get parentNode(){let w=this._$AA.parentNode;const D=this._$AM;return D!==void 0&&(w==null?void 0:w.nodeType)===11&&(w=D.parentNode),w}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(w,D=this){w=S(this,w,D),c$1(w)?w===E||w==null||w===""?(this._$AH!==E&&this._$AR(),this._$AH=E):w!==this._$AH&&w!==T&&this._(w):w._$litType$!==void 0?this.$(w):w.nodeType!==void 0?this.T(w):u$1(w)?this.k(w):this._(w)}O(w){return this._$AA.parentNode.insertBefore(w,this._$AB)}T(w){this._$AH!==w&&(this._$AR(),this._$AH=this.O(w))}_(w){this._$AH!==E&&c$1(this._$AH)?this._$AA.nextSibling.data=w:this.T(r$4.createTextNode(w)),this._$AH=w}$(w){var U;const{values:D,_$litType$:F}=w,q=typeof F=="number"?this._$AC(w):(F.el===void 0&&(F.el=N.createElement(P(F.h,F.h[0]),this.options)),F);if(((U=this._$AH)==null?void 0:U._$AD)===q)this._$AH.p(D);else{const W=new M(q,this),Y=W.u(this.options);W.p(D),this.T(Y),this._$AH=W}}_$AC(w){let D=A.get(w.strings);return D===void 0&&A.set(w.strings,D=new N(w)),D}k(w){a$1(this._$AH)||(this._$AH=[],this._$AR());const D=this._$AH;let F,q=0;for(const U of w)q===D.length?D.push(F=new R(this.O(l$2()),this.O(l$2()),this,this.options)):F=D[q],F._$AI(U),q++;q<D.length&&(this._$AR(F&&F._$AB.nextSibling,q),D.length=q)}_$AR(w=this._$AA.nextSibling,D){var F;for((F=this._$AP)==null?void 0:F.call(this,!1,!0,D);w&&w!==this._$AB;){const q=w.nextSibling;w.remove(),w=q}}setConnected(w){var D;this._$AM===void 0&&(this._$Cv=w,(D=this._$AP)==null||D.call(this,w))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(w,D,F,q,U){this.type=1,this._$AH=E,this._$AN=void 0,this.element=w,this.name=D,this._$AM=q,this.options=U,F.length>2||F[0]!==""||F[1]!==""?(this._$AH=Array(F.length-1).fill(new String),this.strings=F):this._$AH=E}_$AI(w,D=this,F,q){const U=this.strings;let W=!1;if(U===void 0)w=S(this,w,D,0),W=!c$1(w)||w!==this._$AH&&w!==T,W&&(this._$AH=w);else{const Y=w;let Q,ne;for(w=U[0],Q=0;Q<U.length-1;Q++)ne=S(this,Y[F+Q],D,Q),ne===T&&(ne=this._$AH[Q]),W||(W=!c$1(ne)||ne!==this._$AH[Q]),ne===E?w=E:w!==E&&(w+=(ne??"")+U[Q+1]),this._$AH[Q]=ne}W&&!q&&this.j(w)}j(w){w===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,w??"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(w){this.element[this.name]=w===E?void 0:w}}class I extends k{constructor(){super(...arguments),this.type=4}j(w){this.element.toggleAttribute(this.name,!!w&&w!==E)}}class L extends k{constructor(w,D,F,q,U){super(w,D,F,q,U),this.type=5}_$AI(w,D=this){if((w=S(this,w,D,0)??E)===T)return;const F=this._$AH,q=w===E&&F!==E||w.capture!==F.capture||w.once!==F.once||w.passive!==F.passive,U=w!==E&&(F===E||q);q&&this.element.removeEventListener(this.name,this,F),U&&this.element.addEventListener(this.name,this,w),this._$AH=w}handleEvent(w){var D;typeof this._$AH=="function"?this._$AH.call(((D=this.options)==null?void 0:D.host)??this.element,w):this._$AH.handleEvent(w)}}class z{constructor(w,D,F){this.element=w,this.type=6,this._$AN=void 0,this._$AM=D,this.options=F}get _$AU(){return this._$AM._$AU}_$AI(w){S(this,w)}}const j=t$2.litHtmlPolyfillSupport;j==null||j(N,R),(t$2.litHtmlVersions??(t$2.litHtmlVersions=[])).push("3.2.1");const B=(O,w,D)=>{const F=(D==null?void 0:D.renderBefore)??w;let q=F._$litPart$;if(q===void 0){const U=(D==null?void 0:D.renderBefore)??null;F._$litPart$=q=new R(w.insertBefore(l$2(),U),U,void 0,D??{})}return q._$AI(O),q};/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */let r$3=class extends b$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var D;const w=super.createRenderRoot();return(D=this.renderOptions).renderBefore??(D.renderBefore=w.firstChild),w}update(w){const D=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(w),this._$Do=B(D,this.renderRoot,this.renderOptions)}connectedCallback(){var w;super.connectedCallback(),(w=this._$Do)==null||w.setConnected(!0)}disconnectedCallback(){var w;super.disconnectedCallback(),(w=this._$Do)==null||w.setConnected(!1)}render(){return T}};r$3._$litElement$=!0,r$3.finalized=!0,(Xr=globalThis.litElementHydrateSupport)==null||Xr.call(globalThis,{LitElement:r$3});const i$2=globalThis.litElementPolyfillSupport;i$2==null||i$2({LitElement:r$3}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const t$1=O=>(w,D)=>{D!==void 0?D.addInitializer(()=>{customElements.define(O,w)}):customElements.define(O,w)};/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const o$3={attribute:!0,type:String,converter:u$2,reflect:!1,hasChanged:f$2},r$2=(O=o$3,w,D)=>{const{kind:F,metadata:q}=D;let U=globalThis.litPropertyMetadata.get(q);if(U===void 0&&globalThis.litPropertyMetadata.set(q,U=new Map),U.set(D.name,O),F==="accessor"){const{name:W}=D;return{set(Y){const Q=w.get.call(this);w.set.call(this,Y),this.requestUpdate(W,Q,O)},init(Y){return Y!==void 0&&this.P(W,void 0,O),Y}}}if(F==="setter"){const{name:W}=D;return function(Y){const Q=this[W];w.call(this,Y),this.requestUpdate(W,Q,O)}}throw Error("Unsupported decorator location: "+F)};function n$1(O){return(w,D)=>typeof D=="object"?r$2(O,w,D):((F,q,U)=>{const W=q.hasOwnProperty(U);return q.constructor.createProperty(U,W?{...F,wrapped:!0}:F),W?Object.getOwnPropertyDescriptor(q,U):void 0})(O,w,D)}/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */function r$1(O){return n$1({...O,state:!0,attribute:!1})}/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const e$5=(O,w,D)=>(D.configurable=!0,D.enumerable=!0,Reflect.decorate&&typeof w!="object"&&Object.defineProperty(O,w,D),D);/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */function e$4(O,w){return(D,F,q)=>{const U=W=>{var Y;return((Y=W.renderRoot)==null?void 0:Y.querySelector(O))??null};return e$5(D,F,{get(){return U(this)}})}}/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */let e$3;function r(O){return(w,D)=>e$5(w,D,{get(){return(this.renderRoot??e$3??(e$3=document.createDocumentFragment())).querySelectorAll(O)}})}const tabStyle=i$5`
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
 `;var __defProp$$=Object.defineProperty,__getOwnPropDesc$$=Object.getOwnPropertyDescriptor,__decorateClass$$=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$$(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$$(w,D,q),q};const awcTabTag="awc-tab";exports.AwcTab=class extends r$3{constructor(){super(...arguments),this.active=!1}_handleTabClick(){this.active=!this.active,this._onChange()}_onChange(){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}render(){return x`
       <span class="awc-tab" ?active=${this.active} @click=${this._handleTabClick}><slot></slot></span>
     `}},exports.AwcTab.styles=[tabStyle],__decorateClass$$([n$1({type:Boolean,reflect:!0})],exports.AwcTab.prototype,"active",2),exports.AwcTab=__decorateClass$$([t$1(awcTabTag)],exports.AwcTab);const tabsGroupStyle=i$5`
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
 `;var __defProp$_=Object.defineProperty,__getOwnPropDesc$_=Object.getOwnPropertyDescriptor,__decorateClass$_=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$_(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$_(w,D,q),q};const awcTabsGroupTag="awc-tabs-group";exports.AwcTabsGroup=class extends r$3{constructor(){super(...arguments),this.noDivider=!1}get tabs(){return[...this.querySelectorAll(awcTabTag)]}_handleTabClick(w){const D=w.target;this.tabs.forEach(F=>{F.active=!1}),D.active=!0}render(){return x`
       <div class="awc-tabs-container" >
         <slot @click=${this._handleTabClick}></slot>
       </div>
       ${this.noDivider?"":x`<awc-divider spacing="none"></awc-divider>`}
     `}},exports.AwcTabsGroup.styles=[tabsGroupStyle],__decorateClass$_([n$1({type:Boolean,reflect:!0,attribute:"no-divider"})],exports.AwcTabsGroup.prototype,"noDivider",2),exports.AwcTabsGroup=__decorateClass$_([t$1(awcTabsGroupTag)],exports.AwcTabsGroup);let isDOMReady=!1;const readyCallbacks=[];function onDOMReady(O){isDOMReady?O():readyCallbacks.push(O)}document.addEventListener("DOMContentLoaded",()=>{isDOMReady=!0,readyCallbacks.forEach(O=>O())});const segmentSwitcherItemStyle=i$5`
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
  */const o$2=O=>O??E;function dispatcher(O,w){return function(D,F){const q=new CustomEvent(w,{detail:D,bubbles:!0,cancelable:!1,composed:!0,...F});return O.dispatchEvent(q),q}}function event(O){return(w,D)=>{Object.defineProperty(w,D,{get(){return dispatcher(this,O||D)},enumerable:!0,configurable:!0})}}var __defProp$Z=Object.defineProperty,__getOwnPropDesc$Z=Object.getOwnPropertyDescriptor,__decorateClass$Z=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$Z(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$Z(w,D,q),q};const AwcSegmentSwitcherItemTag="awc-segment-switcher-item";exports.AwcSegmentSwitcherItem=class extends r$3{constructor(){super(...arguments),this.active=!1,this.target="_self"}update(w){super.update(w),w.has("active")&&this.active&&(this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this._handleActiveItem())}_handleActiveItem(){this._onChangeActive(this.active)}render(){return this.href?x`
       <a
         class="awc-segment-switcher__item"
         href="${o$2(this.href)}"
         target=${o$2(this.target)}
         @change="${this._handleActiveItem}"
       >
         <slot></slot>
       </a>
     `:x`
       <div
         class="awc-segment-switcher__item"
         @change="${this._handleActiveItem}"
       >
         <slot></slot>
       </div>
     `}},exports.AwcSegmentSwitcherItem.styles=[segmentSwitcherItemStyle],__decorateClass$Z([n$1({type:String,reflect:!0})],exports.AwcSegmentSwitcherItem.prototype,"href",2),__decorateClass$Z([n$1({type:Boolean,reflect:!0})],exports.AwcSegmentSwitcherItem.prototype,"active",2),__decorateClass$Z([n$1({reflect:!0})],exports.AwcSegmentSwitcherItem.prototype,"target",2),__decorateClass$Z([event("awc-segment-item-change")],exports.AwcSegmentSwitcherItem.prototype,"_onChangeActive",2),exports.AwcSegmentSwitcherItem=__decorateClass$Z([t$1("awc-segment-switcher-item")],exports.AwcSegmentSwitcherItem);const segmentSwitcherStyle=i$5`
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
 `;var __defProp$Y=Object.defineProperty,__getOwnPropDesc$Y=Object.getOwnPropertyDescriptor,__decorateClass$Y=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$Y(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$Y(w,D,q),q};exports.AwcSegmentSwitcher=class extends r$3{constructor(){super(...arguments),this.sliderPosition=0,this.sliderWidth=0}get segmentSwitcherItems(){return[...this.querySelectorAll(AwcSegmentSwitcherItemTag)]}connectedCallback(){super.connectedCallback(),onDOMReady(()=>{requestAnimationFrame(()=>this.updateSliderPosition())});const w=new MutationObserver(D=>{D.forEach(F=>{F.type==="attributes"&&F.attributeName==="active"&&this.updateSliderPosition()})});this.segmentSwitcherItems.forEach(D=>{w.observe(D,{attributes:!0})})}updated(w){super.updated(w),(w.has("sliderPosition")||w.has("sliderWidth"))&&this._toggleSliderVisibility()}handleSegmentItemClick(w){const D=w.target;D&&!D.active&&(this.segmentSwitcherItems.forEach(F=>F.active=!1),D.active=!0,this._setSliderPositionToActiveItem(D))}_setSliderPositionToActiveItem(w){this.segmentSwitcherItems.forEach(D=>D.active=!1),w.active=!0,w.active&&(this.sliderPosition=w.offsetLeft,this.sliderWidth=w.offsetWidth)}_toggleSliderVisibility(){this._slider&&(this._slider.addEventListener("transitionstart",()=>{this._slider.style.visibility="visible",this._slider.style.opacity="1"}),this._slider.addEventListener("transitionend",()=>{this._slider.style.visibility="hidden",this._slider.style.opacity="0"}))}updateSliderPosition(){const w=this.querySelector("awc-segment-switcher-item[active]");if(w){const D=w.getBoundingClientRect(),F=this.getBoundingClientRect();this.sliderPosition=D.left-F.left,this.sliderWidth=w.offsetWidth}}handleSegmentActive(w){const D=w.target;this.segmentSwitcherItems.forEach(F=>{F!==D&&F.active&&(F.active=!1)})}render(){return x`
       <div class='awc-segment-switcher'>
       <div class="slider" style="transform: translateX(${this.sliderPosition}px); width: ${this.sliderWidth}px;"></div>
         <slot 
         @click="${this.handleSegmentItemClick}"
         @awc-segment-item-change="${this.handleSegmentActive}"
         ></slot>
       </div>
     `}},exports.AwcSegmentSwitcher.styles=[segmentSwitcherStyle],__decorateClass$Y([r$1()],exports.AwcSegmentSwitcher.prototype,"sliderPosition",2),__decorateClass$Y([r$1()],exports.AwcSegmentSwitcher.prototype,"sliderWidth",2),__decorateClass$Y([e$4(".slider")],exports.AwcSegmentSwitcher.prototype,"_slider",2),exports.AwcSegmentSwitcher=__decorateClass$Y([t$1("awc-segment-switcher")],exports.AwcSegmentSwitcher);const alertStyle=i$5`
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
 `;var __defProp$X=Object.defineProperty,__getOwnPropDesc$X=Object.getOwnPropertyDescriptor,__decorateClass$X=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$X(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$X(w,D,q),q};exports.AwcAlert=class extends r$3{constructor(){super(...arguments),this.color="primary",this.variant="block"}render(){return x`
       <div class="awc-alert">
         <p class="awc-alert__title"><slot></slot></p>
       </div>
     `}},exports.AwcAlert.styles=[alertStyle],__decorateClass$X([n$1({type:String,reflect:!0})],exports.AwcAlert.prototype,"color",2),__decorateClass$X([n$1({type:String,reflect:!0})],exports.AwcAlert.prototype,"variant",2),exports.AwcAlert=__decorateClass$X([t$1("awc-alert")],exports.AwcAlert);const avatarStyle=i$5`
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
  */const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$2=O=>(...w)=>({_$litDirective$:O,values:w});let i$1=class{constructor(w){}get _$AU(){return this._$AM._$AU}_$AT(w,D,F){this._$Ct=w,this._$AM=D,this._$Ci=F}_$AS(w,D){return this.update(w,D)}update(w,D){return this.render(...D)}};/**
  * @license
  * Copyright 2018 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const e$1=e$2(class extends i$1{constructor(O){var w;if(super(O),O.type!==t.ATTRIBUTE||O.name!=="class"||((w=O.strings)==null?void 0:w.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(O){return" "+Object.keys(O).filter(w=>O[w]).join(" ")+" "}update(O,[w]){var F,q;if(this.st===void 0){this.st=new Set,O.strings!==void 0&&(this.nt=new Set(O.strings.join(" ").split(/\s/).filter(U=>U!=="")));for(const U in w)w[U]&&!((F=this.nt)!=null&&F.has(U))&&this.st.add(U);return this.render(w)}const D=O.element.classList;for(const U of this.st)U in w||(D.remove(U),this.st.delete(U));for(const U in w){const W=!!w[U];W===this.st.has(U)||(q=this.nt)!=null&&q.has(U)||(W?(D.add(U),this.st.add(U)):(D.remove(U),this.st.delete(U)))}return T}});var __defProp$W=Object.defineProperty,__getOwnPropDesc$W=Object.getOwnPropertyDescriptor,__decorateClass$W=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$W(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$W(w,D,q),q},AvatarSize=(O=>(O.size24="24",O.size32="32",O.size36="36",O.size40="40",O.size48="48",O.size128="128",O.size160="160",O))(AvatarSize||{}),AvatarColor=(O=>(O.GlobalRed2600="global-red-2-600",O.GlobalRed2500="global-red-2-500",O.GlobalOrange500="global-orange-500",O.GlobalYellow500="global-yellow-500",O.GlobalYellow300="global-yellow-300",O.GlobalLightGreen400="global-light-green-400",O.GlobalLightGreen600="global-light-green-600",O.GlobalGreen600="global-green-600",O.GlobalGreen300="global-green-300",O.GlobalTurquoise300="global-turquoise-300",O.GlobalTurquoise400="global-turquoise-400",O.GlobalCyan300="global-cyan-300",O.GlobalCyan500="global-cyan-500",O.GlobalBlue600="global-blue-600",O.GlobalBlue400="global-blue-400",O.GlobalDeepPurple400="global-deep-purple-400",O.GlobalDeepPurple600="global-deep-purple-600",O.GlobalPurple600="global-purple-600",O.GlobalPurple400="global-purple-400",O.GlobalRed500="global-red-500",O.GlobalRed400="global-red-400",O.ColorsLightSecondary="colors-light-secondary",O.ColorsLightText="colors-light-text",O.ColorsLightDarkBlue="colors-light-dark-blue",O))(AvatarColor||{}),AvatarIcon=(O=>(O.none="none",O.robot="robot",O.user="user",O.group="group",O.deleted="deleted",O.anonymous="anonymous",O.undefinded="undefinded",O))(AvatarIcon||{});const ICONS={anonymous:b`
   <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
     <path fill-rule="evenodd" clip-rule="evenodd" d="M1.71336 5.65322L2.57606 1.31676C2.85923 -0.10662 4.72235 -0.476455 5.52771 0.730849C5.79228 1.12745 6.37513 1.12745 6.63969 0.730849C7.44506 -0.476454 9.30818 -0.106622 9.59135 1.31676L10.4624 5.69495C10.6961 5.75171 10.9288 5.81295 11.1603 5.87864L11.6511 6.01788C11.9062 6.09023 12.0543 6.35563 11.9819 6.61066C11.9095 6.86569 11.6442 7.01378 11.3891 6.94143L10.8983 6.80219C9.73953 6.47345 8.5506 6.2622 7.34949 6.17164C6.45119 6.10391 5.54906 6.10391 4.65075 6.17164C3.44965 6.2622 2.26071 6.47345 1.10193 6.80219L0.611127 6.94143C0.356094 7.01378 0.0906973 6.86569 0.018346 6.61066C-0.0540052 6.35563 0.0940872 6.09023 0.34912 6.01788L0.83992 5.87864C1.12936 5.79653 1.42059 5.72137 1.71336 5.65322ZM7.43831 1.26359C7.76887 0.768059 8.53357 0.919854 8.6498 1.50407L9.44006 5.47641C8.77288 5.35296 8.09911 5.26544 7.42167 5.21436C6.47532 5.143 5.52493 5.143 4.57858 5.21436C3.95977 5.26102 3.34402 5.33808 2.73356 5.44516L3.51761 1.50407C3.63384 0.919854 4.39854 0.76806 4.7291 1.26359C5.37369 2.22987 6.79372 2.22987 7.43831 1.26359Z" fill="white"/>
     <path fill-rule="evenodd" clip-rule="evenodd" d="M0.960123 9.83963C0.960123 8.6467 1.92719 7.67963 3.12012 7.67963C4.14809 7.67963 5.00833 8.39772 5.2266 9.35963H6.77365C6.99192 8.39772 7.85216 7.67963 8.88012 7.67963C10.0731 7.67963 11.0401 8.6467 11.0401 9.83963C11.0401 11.0326 10.0731 11.9996 8.88012 11.9996C7.85216 11.9996 6.99192 11.2815 6.77365 10.3196H5.2266C5.00833 11.2815 4.14809 11.9996 3.12012 11.9996C1.92719 11.9996 0.960123 11.0326 0.960123 9.83963ZM3.12012 8.63963C2.45738 8.63963 1.92012 9.17689 1.92012 9.83963C1.92012 10.5024 2.45738 11.0396 3.12012 11.0396C3.78286 11.0396 4.32012 10.5024 4.32012 9.83963C4.32012 9.17689 3.78286 8.63963 3.12012 8.63963ZM7.68012 9.83963C7.68012 9.17689 8.21738 8.63963 8.88012 8.63963C9.54286 8.63963 10.0801 9.17689 10.0801 9.83963C10.0801 10.5024 9.54286 11.0396 8.88012 11.0396C8.21738 11.0396 7.68012 10.5024 7.68012 9.83963Z" fill="white"/>
   </svg>`,deleted:b`
   <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
     <path fill-rule="evenodd" clip-rule="evenodd" d="M6.00004 0.96C6.8616 0.96 7.56004 1.65844 7.56004 2.52C7.56004 3.38156 6.8616 4.08 6.00004 4.08C5.13847 4.08 4.44004 3.38156 4.44004 2.52C4.44004 1.65844 5.13847 0.96 6.00004 0.96ZM8.52004 2.52C8.52004 1.12824 7.3918 0 6.00004 0C4.60828 0 3.48004 1.12824 3.48004 2.52C3.48004 3.91176 4.60828 5.04 6.00004 5.04C7.3918 5.04 8.52004 3.91176 8.52004 2.52ZM8.04004 6.48C8.04004 6.2149 7.82514 6 7.56004 6H4.44004C2.51809 6 0.96004 7.55805 0.96004 9.48V10.02C0.96004 11.1135 1.84652 12 2.94004 12H5.52004C5.78514 12 6.00004 11.7851 6.00004 11.52C6.00004 11.2549 5.78514 11.04 5.52004 11.04H2.94004C2.37671 11.04 1.92004 10.5833 1.92004 10.02V9.48C1.92004 8.08824 3.04828 6.96 4.44004 6.96H7.56004C7.82514 6.96 8.04004 6.7451 8.04004 6.48ZM10.899 8.85936C11.0865 8.67188 11.0864 8.36796 10.8989 8.18054C10.7114 7.99311 10.4075 7.99316 10.2201 8.18064L9.05939 9.34172L7.89934 8.18243C7.71183 7.99504 7.40791 7.99514 7.22052 8.18265C7.03313 8.37016 7.03323 8.67408 7.22074 8.86147L8.38067 10.0207L7.22104 11.1806C7.03362 11.3681 7.03367 11.672 7.22115 11.8595C7.40863 12.0469 7.71255 12.0468 7.89997 11.8594L9.05971 10.6993L10.2207 11.8595C10.4083 12.0469 10.7122 12.0468 10.8996 11.8593C11.087 11.6718 11.0869 11.3679 10.8993 11.1805L9.73843 10.0203L10.899 8.85936Z" fill="white"/>
   </svg>
   `,robot:b`
   <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
       <path fill-rule="evenodd" clip-rule="evenodd" d="M5 8C5 6.34315 6.34315 5 8 5H16C17.6569 5 19 6.34315 19 8V16C19 17.6569 17.6569 19 16 19H8C6.34315 19 5 17.6569 5 16V8ZM8 7C7.44772 7 7 7.44772 7 8V16C7 16.5523 7.44772 17 8 17H16C16.5523 17 17 16.5523 17 16V8C17 7.44772 16.5523 7 16 7H8Z" fill="white"/>
       <path d="M7 15C5.34315 15 4 13.6569 4 12C4 10.3431 5.34315 9 7 9C7 11 7 13 7 15Z" fill="white"/>
       <path d="M17 15C18.6569 15 20 13.6569 20 12C20 10.3431 18.6569 9 17 9C17 11 17 13 17 15Z" fill="white"/>
       <path d="M15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C11 7 13 7 15 7Z" fill="white"/>
       <rect x="9" y="13" width="6" height="2" rx="1" fill="white"/>
       <circle cx="10" cy="10" r="1" fill="white"/>
       <circle cx="14" cy="10" r="1" fill="white"/>
   </svg>
   `,user:b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"/></svg>`,group:b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M110.5-205v-86q0-25 11.75-45.25T155.5-369q53-31 112-47.75T390-433.5q63.5 0 122.25 16.75T624-369q21.5 12.5 33.25 32.75T669-291v86H110.5Zm629 0v-85q0-41.5-19.25-75.75T669-421.5q36.5 8 70.75 20.75t65.75 32.25Q826-357 837.75-336t11.75 46v85h-110ZM390-479q-58 0-98-40t-40-98q0-58 40-98t98-40q58 0 98 40t40 98q0 58-40 98t-98 40Zm318-138.5q0 57.5-40 97.75t-98 40.25q-6.5 0-12.25-.25T545-482q24.5-27.5 38.75-61.5t14.25-74q0-39.5-14.25-73.75T545-753q6.5-1.5 12.5-1.75T570-755q58 0 98 40t40 97.5Z"/></svg>`,undefinded:b`<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25799 2.02428C3.28688 1.85771 2.2515 2.45517 1.94312 3.33182C1.75985 3.85281 1.18893 4.12658 0.667941 3.94331C0.146952 3.76004 -0.126822 3.18912 0.0564498 2.66813C0.706862 0.819198 2.7195 -0.268818 4.59611 0.0530702C6.39616 0.361827 8.01237 2.04641 8.00978 4.00091C8.00934 5.53127 6.87472 6.5419 6.06448 7.08206C5.62885 7.37248 5.20034 7.58602 4.88467 7.72632L4.32601 7.94869C3.80207 8.12334 3.23575 7.84018 3.0611 7.31623C2.88657 6.79264 3.16924 6.22672 3.69251 6.05167C3.82132 6.00646 3.94769 5.95412 4.0724 5.89869C4.31923 5.78899 4.64072 5.62753 4.95508 5.41795C5.64468 4.95822 6.00978 4.46914 6.00978 4.00001L6.00979 3.99852C6.0111 3.11391 5.19369 2.18478 4.25799 2.02428ZM2.99978 11C2.99978 10.4477 3.4475 10 3.99978 10H4.00978C4.56207 10 5.00978 10.4477 5.00978 11C5.00978 11.5523 4.56207 12 4.00978 12H3.99978C3.4475 12 2.99978 11.5523 2.99978 11Z" fill="white"/>
   </svg>
   `},awcAvatarTag="awc-avatar";exports.AwcAvatar=class extends r$3{constructor(){super(...arguments),this.size="36",this.rounded="circle",this.status="none",this.color="global-blue-400",this.target="_self",this.icon="none",this.sliced=!1,this.hidden=!1}_trimAvatarCharacter(w){if(this.title)return this.title.length>1?(this._croppedTitle=w.split("").shift(),this._croppedTitle):w}_setColorOrImage(){const w=this._trimAvatarCharacter(this.title);if(this.imageLink)return x`<img
         class="awc-avatar--image"
         src="${this.imageLink}"
       />`;if(this.icon&&Object.values(AvatarIcon).includes(this.icon)&&this.icon!=="none")return x`<span
         class="awc-avatar--no-image ${this.icon}"
         >${ICONS[this.icon]}</span
       >`;if(this.color&&!this.customColor)return x`<span
         style="background-color: var(--${this.color})"
         class="awc-avatar--no-image"
         >${w}</span
       >`;if(this.color&&this.customColor||this.customColor&&!this.color)return x`<span
         style="--awc-avatar-custom-color: ${this.customColor}"
         class="awc-avatar--no-image"
         >${w}</span
       >`}render(){const w={"awc-avatar-container":!0},D=b`
     <svg class="awc-avatar__status--icon" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
       <rect x="1" y="1" width="12" height="12" rx="6" fill="#35D3AC" stroke="white" stroke-width="2"/>
       <path d="M5 7L6.5 8.5L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     </svg>`,F=b`
     <svg class="awc-avatar__status--icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
       <rect x="1" y="1" width="14" height="14" rx="7" fill="#FF7188" stroke="white" stroke-width="2"/>
       <path d="M5.5 5.5L8 8M10.5 10.5L8 8M8 8L5.5 10.5M8 8L10.5 5.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
     </svg>
     `;return this.href?x`
     <a href=${this.href} target=${this.target} class=${e$1(w)}>
         <div class="awc-avatar size_${this.size} ${this.rounded}">
           ${this._setColorOrImage()}
         </div>
 
         ${this.status!=="none"?x`
               <div class="awc-avatar__status">
                 ${this.status==="online"||this.status==="offline"?x` <div class="awc-avatar-status__wrapper">
                       <div class="awc-avatar__current">
                         <div class="awc-avatar__${this.status}"></div>
                       </div>
                     </div>`:""}
                 ${this.status==="complete"?x`${D}`:""}
                 ${this.status==="fail"?x`${F}`:""}
               </div>
             `:x``}
       </a>
     `:x`
     <div class=${e$1(w)}>
         <div class="awc-avatar size_${this.size} ${this.rounded}">
           ${this._setColorOrImage()}
         </div>
 
         ${this.status!=="none"?x`
               <div class="awc-avatar__status">
                 ${this.status==="online"||this.status==="offline"?x` <div class="awc-avatar-status__wrapper">
                       <div class="awc-avatar__current">
                         <div class="awc-avatar__${this.status}"></div>
                       </div>
                     </div>`:""}
                 ${this.status==="complete"?x`${D}`:""}
                 ${this.status==="fail"?x`${F}`:""}
               </div>
             `:x``}
       </div>
     `}},exports.AwcAvatar.styles=[avatarStyle],__decorateClass$W([n$1({type:String,reflect:!0})],exports.AwcAvatar.prototype,"size",2),__decorateClass$W([n$1({type:String,reflect:!0})],exports.AwcAvatar.prototype,"rounded",2),__decorateClass$W([n$1({type:String,reflect:!0})],exports.AwcAvatar.prototype,"status",2),__decorateClass$W([n$1({type:String,reflect:!0})],exports.AwcAvatar.prototype,"color",2),__decorateClass$W([n$1({type:String,reflect:!0})],exports.AwcAvatar.prototype,"title",2),__decorateClass$W([n$1({type:String,attribute:"image-link"})],exports.AwcAvatar.prototype,"imageLink",2),__decorateClass$W([n$1({type:String,reflect:!0})],exports.AwcAvatar.prototype,"href",2),__decorateClass$W([n$1({type:String})],exports.AwcAvatar.prototype,"target",2),__decorateClass$W([n$1({type:String,reflect:!0,attribute:"custom-color"})],exports.AwcAvatar.prototype,"customColor",2),__decorateClass$W([n$1({type:String,reflect:!0})],exports.AwcAvatar.prototype,"icon",2),__decorateClass$W([n$1({type:Boolean,reflect:!0})],exports.AwcAvatar.prototype,"sliced",2),__decorateClass$W([n$1({type:Boolean,reflect:!0})],exports.AwcAvatar.prototype,"hidden",2),__decorateClass$W([r$1()],exports.AwcAvatar.prototype,"_croppedTitle",2),exports.AwcAvatar=__decorateClass$W([t$1(awcAvatarTag)],exports.AwcAvatar);const avatarGroupStyle=i$5`
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
 `,avatarCounterStyle=i$5`
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
 `;var __defProp$V=Object.defineProperty,__getOwnPropDesc$V=Object.getOwnPropertyDescriptor,__decorateClass$V=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$V(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$V(w,D,q),q};const awcAvatarGroupCounterTag="awc-avatar-group-counter";exports.AwcAvatarGroupCounter=class extends r$3{constructor(){super(...arguments),this.totalUsers=0,this.counterSize="24",this.counterRounded="circle"}render(){return x`
             <div class="awc-avatar-group__counter size_${this.counterSize} ${this.counterRounded}">
                 <p>+${this.totalUsers}</p>
             </div>
         `}},exports.AwcAvatarGroupCounter.styles=[avatarCounterStyle],__decorateClass$V([n$1({type:Number,attribute:"total-users"})],exports.AwcAvatarGroupCounter.prototype,"totalUsers",2),__decorateClass$V([n$1({type:String,attribute:"counter-size"})],exports.AwcAvatarGroupCounter.prototype,"counterSize",2),__decorateClass$V([n$1({attribute:"counter-rounded"})],exports.AwcAvatarGroupCounter.prototype,"counterRounded",2),exports.AwcAvatarGroupCounter=__decorateClass$V([t$1(awcAvatarGroupCounterTag)],exports.AwcAvatarGroupCounter);var __defProp$U=Object.defineProperty,__getOwnPropDesc$U=Object.getOwnPropertyDescriptor,__decorateClass$U=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$U(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$U(w,D,q),q};const awcAvatarGroupTag="awc-avatar-group";exports.AwcAvatarGroup=class extends r$3{constructor(){super(...arguments),this.displayUsers=2,this.totalUsers=0,this.counterSize="24",this.counterRounded="circle",this._counterValue=0,this._counterHidden=!1}get avatars(){return Array.from(this.querySelectorAll(awcAvatarTag))}get avatarCounter(){return this.querySelector(awcAvatarGroupCounterTag)}_updateDisplayedUsers(){var D,F;const w=(F=(D=this.shadowRoot)==null?void 0:D.querySelector("slot"))==null?void 0:F.assignedElements();w&&w.forEach((q,U)=>{q.hidden=U>=this.displayUsers})}_updateCounterValue(){this.avatarCounter?this._counterHidden=this._counterValue===0:(this._counterValue=Math.max(0,this.totalUsers-this.displayUsers),this._counterHidden=this._counterValue===0)}_applySliceEffect(){var D,F;const w=(F=(D=this.shadowRoot)==null?void 0:D.querySelector("slot"))==null?void 0:F.assignedElements();w&&w.forEach((q,U)=>{q.sliced=U!==0})}connectedCallback(){super.connectedCallback(),document.addEventListener("DOMContentLoaded",()=>{this._applySliceEffect(),this._updateDisplayedUsers(),this._updateCounterValue()})}updated(w){(w.has("displayUsers")||w.has("totalUsers"))&&(this._updateDisplayedUsers(),this._updateCounterValue()),this._applySliceEffect()}render(){return x`
       <div class="awc-avatar-group">
         <slot></slot>
         ${this._counterHidden?"":x`
           <div class="awc-avatar-group__counter size_${this.counterSize} ${this.counterRounded}">
             <p>+${this._counterValue}</p>
           </div>`}
             <slot name="awc-avatar-group-counter"></slot>
       </div>
     `}},exports.AwcAvatarGroup.styles=[avatarGroupStyle],__decorateClass$U([n$1({type:Number,attribute:"display-users"})],exports.AwcAvatarGroup.prototype,"displayUsers",2),__decorateClass$U([n$1({type:Number,attribute:"total-users"})],exports.AwcAvatarGroup.prototype,"totalUsers",2),__decorateClass$U([n$1({type:String,attribute:"counter-size"})],exports.AwcAvatarGroup.prototype,"counterSize",2),__decorateClass$U([n$1({type:String,attribute:"counter-rounded"})],exports.AwcAvatarGroup.prototype,"counterRounded",2),__decorateClass$U([r$1()],exports.AwcAvatarGroup.prototype,"_counterValue",2),__decorateClass$U([r$1()],exports.AwcAvatarGroup.prototype,"_counterHidden",2),exports.AwcAvatarGroup=__decorateClass$U([t$1(awcAvatarGroupTag)],exports.AwcAvatarGroup);const badgeStyle=i$5`
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
 `;var __defProp$T=Object.defineProperty,__getOwnPropDesc$T=Object.getOwnPropertyDescriptor,__decorateClass$T=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$T(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$T(w,D,q),q};exports.AwcBadge=class extends r$3{constructor(){super(...arguments),this.color="primary"}render(){return x` <span class="awc-badge ${this.color}"></span> `}},exports.AwcBadge.styles=[badgeStyle],__decorateClass$T([n$1({type:String,reflect:!0})],exports.AwcBadge.prototype,"color",2),exports.AwcBadge=__decorateClass$T([t$1("awc-badge")],exports.AwcBadge);const counterStyle=i$5`
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
 `;var __defProp$S=Object.defineProperty,__getOwnPropDesc$S=Object.getOwnPropertyDescriptor,__decorateClass$S=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$S(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$S(w,D,q),q};exports.AwcCounter=class extends r$3{constructor(){super(...arguments),this.value=1}_checkMaxValue(){return!Number.isInteger(this.value)||this.value<=0?"":this.value>99?"99+":this.value.toString()}update(w){super.update(w),this._checkMaxValue()}render(){const w=this._checkMaxValue();return x`
       <span class="awc-counter" value=${this.value}>${w}</span>
     `}},exports.AwcCounter.styles=[counterStyle],__decorateClass$S([n$1({type:Number,reflect:!0})],exports.AwcCounter.prototype,"value",2),exports.AwcCounter=__decorateClass$S([t$1("awc-counter")],exports.AwcCounter);const toolbarButtonStyle=i$5`
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
 `;var __defProp$R=Object.defineProperty,__getOwnPropDesc$R=Object.getOwnPropertyDescriptor,__decorateClass$R=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$R(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$R(w,D,q),q};exports.AwcToolbarButton=class extends r$3{render(){return x`
       <button
         type="button"
         tabindex="0" 
         class="awc-toolbar-button">
         <slot></slot>
       </button>
     `}},exports.AwcToolbarButton.styles=[toolbarButtonStyle],exports.AwcToolbarButton=__decorateClass$R([t$1("awc-toolbar-button")],exports.AwcToolbarButton);const toolbarGroupStyle=i$5`
     :host {
       display: inline-block;
     }
 
     .awc-toolbar-group{
       display: flex;
       align-items: center;
       justify-content: flex-start;
       gap: 8px;
     }
 `;var __defProp$Q=Object.defineProperty,__getOwnPropDesc$Q=Object.getOwnPropertyDescriptor,__decorateClass$Q=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$Q(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$Q(w,D,q),q};exports.AwcToolbarGroup=class extends r$3{render(){return x`
       <div class='awc-toolbar-group'>
             <slot></slot>
       </div>
     `}},exports.AwcToolbarGroup.styles=[toolbarGroupStyle],exports.AwcToolbarGroup=__decorateClass$Q([t$1("awc-toolbar-group")],exports.AwcToolbarGroup);const dropdownStyle=i$5`
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
 `,scrollStyle=i$5`
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
 `;var top$1="top",bottom="bottom",right="right",left="left",auto="auto",basePlacements=[top$1,bottom,right,left],start="start",end="end",clippingParents="clippingParents",viewport="viewport",popper="popper",reference="reference",variationPlacements=basePlacements.reduce(function(O,w){return O.concat([w+"-"+start,w+"-"+end])},[]),placements=[].concat(basePlacements,[auto]).reduce(function(O,w){return O.concat([w,w+"-"+start,w+"-"+end])},[]),beforeRead="beforeRead",read$2="read",afterRead="afterRead",beforeMain="beforeMain",main="main",afterMain="afterMain",beforeWrite="beforeWrite",write="write",afterWrite="afterWrite",modifierPhases=[beforeRead,read$2,afterRead,beforeMain,main,afterMain,beforeWrite,write,afterWrite];function getNodeName(O){return O?(O.nodeName||"").toLowerCase():null}function getWindow(O){if(O==null)return window;if(O.toString()!=="[object Window]"){var w=O.ownerDocument;return w&&w.defaultView||window}return O}function isElement(O){var w=getWindow(O).Element;return O instanceof w||O instanceof Element}function isHTMLElement(O){var w=getWindow(O).HTMLElement;return O instanceof w||O instanceof HTMLElement}function isShadowRoot(O){if(typeof ShadowRoot>"u")return!1;var w=getWindow(O).ShadowRoot;return O instanceof w||O instanceof ShadowRoot}function applyStyles(O){var w=O.state;Object.keys(w.elements).forEach(function(D){var F=w.styles[D]||{},q=w.attributes[D]||{},U=w.elements[D];!isHTMLElement(U)||!getNodeName(U)||(Object.assign(U.style,F),Object.keys(q).forEach(function(W){var Y=q[W];Y===!1?U.removeAttribute(W):U.setAttribute(W,Y===!0?"":Y)}))})}function effect$2(O){var w=O.state,D={popper:{position:w.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(w.elements.popper.style,D.popper),w.styles=D,w.elements.arrow&&Object.assign(w.elements.arrow.style,D.arrow),function(){Object.keys(w.elements).forEach(function(F){var q=w.elements[F],U=w.attributes[F]||{},W=Object.keys(w.styles.hasOwnProperty(F)?w.styles[F]:D[F]),Y=W.reduce(function(Q,ne){return Q[ne]="",Q},{});!isHTMLElement(q)||!getNodeName(q)||(Object.assign(q.style,Y),Object.keys(U).forEach(function(Q){q.removeAttribute(Q)}))})}}const applyStyles$1={name:"applyStyles",enabled:!0,phase:"write",fn:applyStyles,effect:effect$2,requires:["computeStyles"]};function getBasePlacement(O){return O.split("-")[0]}var max=Math.max,min=Math.min,round=Math.round;function getUAString(){var O=navigator.userAgentData;return O!=null&&O.brands&&Array.isArray(O.brands)?O.brands.map(function(w){return w.brand+"/"+w.version}).join(" "):navigator.userAgent}function isLayoutViewport(){return!/^((?!chrome|android).)*safari/i.test(getUAString())}function getBoundingClientRect(O,w,D){w===void 0&&(w=!1),D===void 0&&(D=!1);var F=O.getBoundingClientRect(),q=1,U=1;w&&isHTMLElement(O)&&(q=O.offsetWidth>0&&round(F.width)/O.offsetWidth||1,U=O.offsetHeight>0&&round(F.height)/O.offsetHeight||1);var W=isElement(O)?getWindow(O):window,Y=W.visualViewport,Q=!isLayoutViewport()&&D,ne=(F.left+(Q&&Y?Y.offsetLeft:0))/q,oe=(F.top+(Q&&Y?Y.offsetTop:0))/U,ce=F.width/q,fe=F.height/U;return{width:ce,height:fe,top:oe,right:ne+ce,bottom:oe+fe,left:ne,x:ne,y:oe}}function getLayoutRect(O){var w=getBoundingClientRect(O),D=O.offsetWidth,F=O.offsetHeight;return Math.abs(w.width-D)<=1&&(D=w.width),Math.abs(w.height-F)<=1&&(F=w.height),{x:O.offsetLeft,y:O.offsetTop,width:D,height:F}}function contains(O,w){var D=w.getRootNode&&w.getRootNode();if(O.contains(w))return!0;if(D&&isShadowRoot(D)){var F=w;do{if(F&&O.isSameNode(F))return!0;F=F.parentNode||F.host}while(F)}return!1}function getComputedStyle(O){return getWindow(O).getComputedStyle(O)}function isTableElement(O){return["table","td","th"].indexOf(getNodeName(O))>=0}function getDocumentElement(O){return((isElement(O)?O.ownerDocument:O.document)||window.document).documentElement}function getParentNode(O){return getNodeName(O)==="html"?O:O.assignedSlot||O.parentNode||(isShadowRoot(O)?O.host:null)||getDocumentElement(O)}function getTrueOffsetParent(O){return!isHTMLElement(O)||getComputedStyle(O).position==="fixed"?null:O.offsetParent}function getContainingBlock(O){var w=/firefox/i.test(getUAString()),D=/Trident/i.test(getUAString());if(D&&isHTMLElement(O)){var F=getComputedStyle(O);if(F.position==="fixed")return null}var q=getParentNode(O);for(isShadowRoot(q)&&(q=q.host);isHTMLElement(q)&&["html","body"].indexOf(getNodeName(q))<0;){var U=getComputedStyle(q);if(U.transform!=="none"||U.perspective!=="none"||U.contain==="paint"||["transform","perspective"].indexOf(U.willChange)!==-1||w&&U.willChange==="filter"||w&&U.filter&&U.filter!=="none")return q;q=q.parentNode}return null}function getOffsetParent(O){for(var w=getWindow(O),D=getTrueOffsetParent(O);D&&isTableElement(D)&&getComputedStyle(D).position==="static";)D=getTrueOffsetParent(D);return D&&(getNodeName(D)==="html"||getNodeName(D)==="body"&&getComputedStyle(D).position==="static")?w:D||getContainingBlock(O)||w}function getMainAxisFromPlacement(O){return["top","bottom"].indexOf(O)>=0?"x":"y"}function within(O,w,D){return max(O,min(w,D))}function withinMaxClamp(O,w,D){var F=within(O,w,D);return F>D?D:F}function getFreshSideObject(){return{top:0,right:0,bottom:0,left:0}}function mergePaddingObject(O){return Object.assign({},getFreshSideObject(),O)}function expandToHashMap(O,w){return w.reduce(function(D,F){return D[F]=O,D},{})}var toPaddingObject=function(w,D){return w=typeof w=="function"?w(Object.assign({},D.rects,{placement:D.placement})):w,mergePaddingObject(typeof w!="number"?w:expandToHashMap(w,basePlacements))};function arrow(O){var w,D=O.state,F=O.name,q=O.options,U=D.elements.arrow,W=D.modifiersData.popperOffsets,Y=getBasePlacement(D.placement),Q=getMainAxisFromPlacement(Y),ne=[left,right].indexOf(Y)>=0,oe=ne?"height":"width";if(!(!U||!W)){var ce=toPaddingObject(q.padding,D),fe=getLayoutRect(U),we=Q==="y"?top$1:left,Z=Q==="y"?bottom:right,ve=D.rects.reference[oe]+D.rects.reference[Q]-W[Q]-D.rects.popper[oe],de=W[Q]-D.rects.reference[Q],Ae=getOffsetParent(U),Se=Ae?Q==="y"?Ae.clientHeight||0:Ae.clientWidth||0:0,Te=ve/2-de/2,ke=ce[we],$e=Se-fe[oe]-ce[Z],be=Se/2-fe[oe]/2+Te,Pe=within(ke,be,$e),Ie=Q;D.modifiersData[F]=(w={},w[Ie]=Pe,w.centerOffset=Pe-be,w)}}function effect$1(O){var w=O.state,D=O.options,F=D.element,q=F===void 0?"[data-popper-arrow]":F;q!=null&&(typeof q=="string"&&(q=w.elements.popper.querySelector(q),!q)||contains(w.elements.popper,q)&&(w.elements.arrow=q))}const arrow$1={name:"arrow",enabled:!0,phase:"main",fn:arrow,effect:effect$1,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function getVariation(O){return O.split("-")[1]}var unsetSides={top:"auto",right:"auto",bottom:"auto",left:"auto"};function roundOffsetsByDPR(O,w){var D=O.x,F=O.y,q=w.devicePixelRatio||1;return{x:round(D*q)/q||0,y:round(F*q)/q||0}}function mapToStyles(O){var w,D=O.popper,F=O.popperRect,q=O.placement,U=O.variation,W=O.offsets,Y=O.position,Q=O.gpuAcceleration,ne=O.adaptive,oe=O.roundOffsets,ce=O.isFixed,fe=W.x,we=fe===void 0?0:fe,Z=W.y,ve=Z===void 0?0:Z,de=typeof oe=="function"?oe({x:we,y:ve}):{x:we,y:ve};we=de.x,ve=de.y;var Ae=W.hasOwnProperty("x"),Se=W.hasOwnProperty("y"),Te=left,ke=top$1,$e=window;if(ne){var be=getOffsetParent(D),Pe="clientHeight",Ie="clientWidth";if(be===getWindow(D)&&(be=getDocumentElement(D),getComputedStyle(be).position!=="static"&&Y==="absolute"&&(Pe="scrollHeight",Ie="scrollWidth")),be=be,q===top$1||(q===left||q===right)&&U===end){ke=bottom;var je=ce&&be===$e&&$e.visualViewport?$e.visualViewport.height:be[Pe];ve-=je-F.height,ve*=Q?1:-1}if(q===left||(q===top$1||q===bottom)&&U===end){Te=right;var De=ce&&be===$e&&$e.visualViewport?$e.visualViewport.width:be[Ie];we-=De-F.width,we*=Q?1:-1}}var We=Object.assign({position:Y},ne&&unsetSides),et=oe===!0?roundOffsetsByDPR({x:we,y:ve},getWindow(D)):{x:we,y:ve};if(we=et.x,ve=et.y,Q){var Xe;return Object.assign({},We,(Xe={},Xe[ke]=Se?"0":"",Xe[Te]=Ae?"0":"",Xe.transform=($e.devicePixelRatio||1)<=1?"translate("+we+"px, "+ve+"px)":"translate3d("+we+"px, "+ve+"px, 0)",Xe))}return Object.assign({},We,(w={},w[ke]=Se?ve+"px":"",w[Te]=Ae?we+"px":"",w.transform="",w))}function computeStyles(O){var w=O.state,D=O.options,F=D.gpuAcceleration,q=F===void 0?!0:F,U=D.adaptive,W=U===void 0?!0:U,Y=D.roundOffsets,Q=Y===void 0?!0:Y,ne={placement:getBasePlacement(w.placement),variation:getVariation(w.placement),popper:w.elements.popper,popperRect:w.rects.popper,gpuAcceleration:q,isFixed:w.options.strategy==="fixed"};w.modifiersData.popperOffsets!=null&&(w.styles.popper=Object.assign({},w.styles.popper,mapToStyles(Object.assign({},ne,{offsets:w.modifiersData.popperOffsets,position:w.options.strategy,adaptive:W,roundOffsets:Q})))),w.modifiersData.arrow!=null&&(w.styles.arrow=Object.assign({},w.styles.arrow,mapToStyles(Object.assign({},ne,{offsets:w.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:Q})))),w.attributes.popper=Object.assign({},w.attributes.popper,{"data-popper-placement":w.placement})}const computeStyles$1={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:computeStyles,data:{}};var passive={passive:!0};function effect(O){var w=O.state,D=O.instance,F=O.options,q=F.scroll,U=q===void 0?!0:q,W=F.resize,Y=W===void 0?!0:W,Q=getWindow(w.elements.popper),ne=[].concat(w.scrollParents.reference,w.scrollParents.popper);return U&&ne.forEach(function(oe){oe.addEventListener("scroll",D.update,passive)}),Y&&Q.addEventListener("resize",D.update,passive),function(){U&&ne.forEach(function(oe){oe.removeEventListener("scroll",D.update,passive)}),Y&&Q.removeEventListener("resize",D.update,passive)}}const eventListeners={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect,data:{}};var hash$1={left:"right",right:"left",bottom:"top",top:"bottom"};function getOppositePlacement(O){return O.replace(/left|right|bottom|top/g,function(w){return hash$1[w]})}var hash={start:"end",end:"start"};function getOppositeVariationPlacement(O){return O.replace(/start|end/g,function(w){return hash[w]})}function getWindowScroll(O){var w=getWindow(O),D=w.pageXOffset,F=w.pageYOffset;return{scrollLeft:D,scrollTop:F}}function getWindowScrollBarX(O){return getBoundingClientRect(getDocumentElement(O)).left+getWindowScroll(O).scrollLeft}function getViewportRect(O,w){var D=getWindow(O),F=getDocumentElement(O),q=D.visualViewport,U=F.clientWidth,W=F.clientHeight,Y=0,Q=0;if(q){U=q.width,W=q.height;var ne=isLayoutViewport();(ne||!ne&&w==="fixed")&&(Y=q.offsetLeft,Q=q.offsetTop)}return{width:U,height:W,x:Y+getWindowScrollBarX(O),y:Q}}function getDocumentRect(O){var w,D=getDocumentElement(O),F=getWindowScroll(O),q=(w=O.ownerDocument)==null?void 0:w.body,U=max(D.scrollWidth,D.clientWidth,q?q.scrollWidth:0,q?q.clientWidth:0),W=max(D.scrollHeight,D.clientHeight,q?q.scrollHeight:0,q?q.clientHeight:0),Y=-F.scrollLeft+getWindowScrollBarX(O),Q=-F.scrollTop;return getComputedStyle(q||D).direction==="rtl"&&(Y+=max(D.clientWidth,q?q.clientWidth:0)-U),{width:U,height:W,x:Y,y:Q}}function isScrollParent(O){var w=getComputedStyle(O),D=w.overflow,F=w.overflowX,q=w.overflowY;return/auto|scroll|overlay|hidden/.test(D+q+F)}function getScrollParent(O){return["html","body","#document"].indexOf(getNodeName(O))>=0?O.ownerDocument.body:isHTMLElement(O)&&isScrollParent(O)?O:getScrollParent(getParentNode(O))}function listScrollParents(O,w){var D;w===void 0&&(w=[]);var F=getScrollParent(O),q=F===((D=O.ownerDocument)==null?void 0:D.body),U=getWindow(F),W=q?[U].concat(U.visualViewport||[],isScrollParent(F)?F:[]):F,Y=w.concat(W);return q?Y:Y.concat(listScrollParents(getParentNode(W)))}function rectToClientRect(O){return Object.assign({},O,{left:O.x,top:O.y,right:O.x+O.width,bottom:O.y+O.height})}function getInnerBoundingClientRect(O,w){var D=getBoundingClientRect(O,!1,w==="fixed");return D.top=D.top+O.clientTop,D.left=D.left+O.clientLeft,D.bottom=D.top+O.clientHeight,D.right=D.left+O.clientWidth,D.width=O.clientWidth,D.height=O.clientHeight,D.x=D.left,D.y=D.top,D}function getClientRectFromMixedType(O,w,D){return w===viewport?rectToClientRect(getViewportRect(O,D)):isElement(w)?getInnerBoundingClientRect(w,D):rectToClientRect(getDocumentRect(getDocumentElement(O)))}function getClippingParents(O){var w=listScrollParents(getParentNode(O)),D=["absolute","fixed"].indexOf(getComputedStyle(O).position)>=0,F=D&&isHTMLElement(O)?getOffsetParent(O):O;return isElement(F)?w.filter(function(q){return isElement(q)&&contains(q,F)&&getNodeName(q)!=="body"}):[]}function getClippingRect(O,w,D,F){var q=w==="clippingParents"?getClippingParents(O):[].concat(w),U=[].concat(q,[D]),W=U[0],Y=U.reduce(function(Q,ne){var oe=getClientRectFromMixedType(O,ne,F);return Q.top=max(oe.top,Q.top),Q.right=min(oe.right,Q.right),Q.bottom=min(oe.bottom,Q.bottom),Q.left=max(oe.left,Q.left),Q},getClientRectFromMixedType(O,W,F));return Y.width=Y.right-Y.left,Y.height=Y.bottom-Y.top,Y.x=Y.left,Y.y=Y.top,Y}function computeOffsets(O){var w=O.reference,D=O.element,F=O.placement,q=F?getBasePlacement(F):null,U=F?getVariation(F):null,W=w.x+w.width/2-D.width/2,Y=w.y+w.height/2-D.height/2,Q;switch(q){case top$1:Q={x:W,y:w.y-D.height};break;case bottom:Q={x:W,y:w.y+w.height};break;case right:Q={x:w.x+w.width,y:Y};break;case left:Q={x:w.x-D.width,y:Y};break;default:Q={x:w.x,y:w.y}}var ne=q?getMainAxisFromPlacement(q):null;if(ne!=null){var oe=ne==="y"?"height":"width";switch(U){case start:Q[ne]=Q[ne]-(w[oe]/2-D[oe]/2);break;case end:Q[ne]=Q[ne]+(w[oe]/2-D[oe]/2);break}}return Q}function detectOverflow(O,w){w===void 0&&(w={});var D=w,F=D.placement,q=F===void 0?O.placement:F,U=D.strategy,W=U===void 0?O.strategy:U,Y=D.boundary,Q=Y===void 0?clippingParents:Y,ne=D.rootBoundary,oe=ne===void 0?viewport:ne,ce=D.elementContext,fe=ce===void 0?popper:ce,we=D.altBoundary,Z=we===void 0?!1:we,ve=D.padding,de=ve===void 0?0:ve,Ae=mergePaddingObject(typeof de!="number"?de:expandToHashMap(de,basePlacements)),Se=fe===popper?reference:popper,Te=O.rects.popper,ke=O.elements[Z?Se:fe],$e=getClippingRect(isElement(ke)?ke:ke.contextElement||getDocumentElement(O.elements.popper),Q,oe,W),be=getBoundingClientRect(O.elements.reference),Pe=computeOffsets({reference:be,element:Te,strategy:"absolute",placement:q}),Ie=rectToClientRect(Object.assign({},Te,Pe)),je=fe===popper?Ie:be,De={top:$e.top-je.top+Ae.top,bottom:je.bottom-$e.bottom+Ae.bottom,left:$e.left-je.left+Ae.left,right:je.right-$e.right+Ae.right},We=O.modifiersData.offset;if(fe===popper&&We){var et=We[q];Object.keys(De).forEach(function(Xe){var Ke=[right,bottom].indexOf(Xe)>=0?1:-1,ot=[top$1,bottom].indexOf(Xe)>=0?"y":"x";De[Xe]+=et[ot]*Ke})}return De}function computeAutoPlacement(O,w){w===void 0&&(w={});var D=w,F=D.placement,q=D.boundary,U=D.rootBoundary,W=D.padding,Y=D.flipVariations,Q=D.allowedAutoPlacements,ne=Q===void 0?placements:Q,oe=getVariation(F),ce=oe?Y?variationPlacements:variationPlacements.filter(function(Z){return getVariation(Z)===oe}):basePlacements,fe=ce.filter(function(Z){return ne.indexOf(Z)>=0});fe.length===0&&(fe=ce);var we=fe.reduce(function(Z,ve){return Z[ve]=detectOverflow(O,{placement:ve,boundary:q,rootBoundary:U,padding:W})[getBasePlacement(ve)],Z},{});return Object.keys(we).sort(function(Z,ve){return we[Z]-we[ve]})}function getExpandedFallbackPlacements(O){if(getBasePlacement(O)===auto)return[];var w=getOppositePlacement(O);return[getOppositeVariationPlacement(O),w,getOppositeVariationPlacement(w)]}function flip(O){var w=O.state,D=O.options,F=O.name;if(!w.modifiersData[F]._skip){for(var q=D.mainAxis,U=q===void 0?!0:q,W=D.altAxis,Y=W===void 0?!0:W,Q=D.fallbackPlacements,ne=D.padding,oe=D.boundary,ce=D.rootBoundary,fe=D.altBoundary,we=D.flipVariations,Z=we===void 0?!0:we,ve=D.allowedAutoPlacements,de=w.options.placement,Ae=getBasePlacement(de),Se=Ae===de,Te=Q||(Se||!Z?[getOppositePlacement(de)]:getExpandedFallbackPlacements(de)),ke=[de].concat(Te).reduce(function(Me,tt){return Me.concat(getBasePlacement(tt)===auto?computeAutoPlacement(w,{placement:tt,boundary:oe,rootBoundary:ce,padding:ne,flipVariations:Z,allowedAutoPlacements:ve}):tt)},[]),$e=w.rects.reference,be=w.rects.popper,Pe=new Map,Ie=!0,je=ke[0],De=0;De<ke.length;De++){var We=ke[De],et=getBasePlacement(We),Xe=getVariation(We)===start,Ke=[top$1,bottom].indexOf(et)>=0,ot=Ke?"width":"height",Je=detectOverflow(w,{placement:We,boundary:oe,rootBoundary:ce,altBoundary:fe,padding:ne}),Ze=Ke?Xe?right:left:Xe?bottom:top$1;$e[ot]>be[ot]&&(Ze=getOppositePlacement(Ze));var vt=getOppositePlacement(Ze),lt=[];if(U&&lt.push(Je[et]<=0),Y&&lt.push(Je[Ze]<=0,Je[vt]<=0),lt.every(function(Me){return Me})){je=We,Ie=!1;break}Pe.set(We,lt)}if(Ie)for(var ht=Z?3:1,st=function(tt){var Nt=ke.find(function(jt){var Ot=Pe.get(jt);if(Ot)return Ot.slice(0,tt).every(function(Jt){return Jt})});if(Nt)return je=Nt,"break"},ft=ht;ft>0;ft--){var bt=st(ft);if(bt==="break")break}w.placement!==je&&(w.modifiersData[F]._skip=!0,w.placement=je,w.reset=!0)}}const flip$1={name:"flip",enabled:!0,phase:"main",fn:flip,requiresIfExists:["offset"],data:{_skip:!1}};function getSideOffsets(O,w,D){return D===void 0&&(D={x:0,y:0}),{top:O.top-w.height-D.y,right:O.right-w.width+D.x,bottom:O.bottom-w.height+D.y,left:O.left-w.width-D.x}}function isAnySideFullyClipped(O){return[top$1,right,bottom,left].some(function(w){return O[w]>=0})}function hide(O){var w=O.state,D=O.name,F=w.rects.reference,q=w.rects.popper,U=w.modifiersData.preventOverflow,W=detectOverflow(w,{elementContext:"reference"}),Y=detectOverflow(w,{altBoundary:!0}),Q=getSideOffsets(W,F),ne=getSideOffsets(Y,q,U),oe=isAnySideFullyClipped(Q),ce=isAnySideFullyClipped(ne);w.modifiersData[D]={referenceClippingOffsets:Q,popperEscapeOffsets:ne,isReferenceHidden:oe,hasPopperEscaped:ce},w.attributes.popper=Object.assign({},w.attributes.popper,{"data-popper-reference-hidden":oe,"data-popper-escaped":ce})}const hide$1={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:hide};function distanceAndSkiddingToXY(O,w,D){var F=getBasePlacement(O),q=[left,top$1].indexOf(F)>=0?-1:1,U=typeof D=="function"?D(Object.assign({},w,{placement:O})):D,W=U[0],Y=U[1];return W=W||0,Y=(Y||0)*q,[left,right].indexOf(F)>=0?{x:Y,y:W}:{x:W,y:Y}}function offset(O){var w=O.state,D=O.options,F=O.name,q=D.offset,U=q===void 0?[0,0]:q,W=placements.reduce(function(oe,ce){return oe[ce]=distanceAndSkiddingToXY(ce,w.rects,U),oe},{}),Y=W[w.placement],Q=Y.x,ne=Y.y;w.modifiersData.popperOffsets!=null&&(w.modifiersData.popperOffsets.x+=Q,w.modifiersData.popperOffsets.y+=ne),w.modifiersData[F]=W}const offset$1={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:offset};function popperOffsets(O){var w=O.state,D=O.name;w.modifiersData[D]=computeOffsets({reference:w.rects.reference,element:w.rects.popper,strategy:"absolute",placement:w.placement})}const popperOffsets$1={name:"popperOffsets",enabled:!0,phase:"read",fn:popperOffsets,data:{}};function getAltAxis(O){return O==="x"?"y":"x"}function preventOverflow(O){var w=O.state,D=O.options,F=O.name,q=D.mainAxis,U=q===void 0?!0:q,W=D.altAxis,Y=W===void 0?!1:W,Q=D.boundary,ne=D.rootBoundary,oe=D.altBoundary,ce=D.padding,fe=D.tether,we=fe===void 0?!0:fe,Z=D.tetherOffset,ve=Z===void 0?0:Z,de=detectOverflow(w,{boundary:Q,rootBoundary:ne,padding:ce,altBoundary:oe}),Ae=getBasePlacement(w.placement),Se=getVariation(w.placement),Te=!Se,ke=getMainAxisFromPlacement(Ae),$e=getAltAxis(ke),be=w.modifiersData.popperOffsets,Pe=w.rects.reference,Ie=w.rects.popper,je=typeof ve=="function"?ve(Object.assign({},w.rects,{placement:w.placement})):ve,De=typeof je=="number"?{mainAxis:je,altAxis:je}:Object.assign({mainAxis:0,altAxis:0},je),We=w.modifiersData.offset?w.modifiersData.offset[w.placement]:null,et={x:0,y:0};if(be){if(U){var Xe,Ke=ke==="y"?top$1:left,ot=ke==="y"?bottom:right,Je=ke==="y"?"height":"width",Ze=be[ke],vt=Ze+de[Ke],lt=Ze-de[ot],ht=we?-Ie[Je]/2:0,st=Se===start?Pe[Je]:Ie[Je],ft=Se===start?-Ie[Je]:-Pe[Je],bt=w.elements.arrow,Me=we&&bt?getLayoutRect(bt):{width:0,height:0},tt=w.modifiersData["arrow#persistent"]?w.modifiersData["arrow#persistent"].padding:getFreshSideObject(),Nt=tt[Ke],jt=tt[ot],Ot=within(0,Pe[Je],Me[Je]),Jt=Te?Pe[Je]/2-ht-Ot-Nt-De.mainAxis:st-Ot-Nt-De.mainAxis,Ft=Te?-Pe[Je]/2+ht+Ot+jt+De.mainAxis:ft+Ot+jt+De.mainAxis,At=w.elements.arrow&&getOffsetParent(w.elements.arrow),zt=At?ke==="y"?At.clientTop||0:At.clientLeft||0:0,rr=(Xe=We==null?void 0:We[ke])!=null?Xe:0,hr=Ze+Jt-rr-zt,fr=Ze+Ft-rr,nr=within(we?min(vt,hr):vt,Ze,we?max(lt,fr):lt);be[ke]=nr,et[ke]=nr-Ze}if(Y){var gt,ut=ke==="x"?top$1:left,ir=ke==="x"?bottom:right,Pt=be[$e],qt=$e==="y"?"height":"width",gr=Pt+de[ut],vr=Pt-de[ir],Yt=[top$1,left].indexOf(Ae)!==-1,Vt=(gt=We==null?void 0:We[$e])!=null?gt:0,Tt=Yt?gr:Pt-Pe[qt]-Ie[qt]-Vt+De.altAxis,or=Yt?Pt+Pe[qt]+Ie[qt]-Vt-De.altAxis:vr,Qt=we&&Yt?withinMaxClamp(Tt,Pt,or):within(we?Tt:gr,Pt,we?or:vr);be[$e]=Qt,et[$e]=Qt-Pt}w.modifiersData[F]=et}}const preventOverflow$1={name:"preventOverflow",enabled:!0,phase:"main",fn:preventOverflow,requiresIfExists:["offset"]};function getHTMLElementScroll(O){return{scrollLeft:O.scrollLeft,scrollTop:O.scrollTop}}function getNodeScroll(O){return O===getWindow(O)||!isHTMLElement(O)?getWindowScroll(O):getHTMLElementScroll(O)}function isElementScaled(O){var w=O.getBoundingClientRect(),D=round(w.width)/O.offsetWidth||1,F=round(w.height)/O.offsetHeight||1;return D!==1||F!==1}function getCompositeRect(O,w,D){D===void 0&&(D=!1);var F=isHTMLElement(w),q=isHTMLElement(w)&&isElementScaled(w),U=getDocumentElement(w),W=getBoundingClientRect(O,q,D),Y={scrollLeft:0,scrollTop:0},Q={x:0,y:0};return(F||!F&&!D)&&((getNodeName(w)!=="body"||isScrollParent(U))&&(Y=getNodeScroll(w)),isHTMLElement(w)?(Q=getBoundingClientRect(w,!0),Q.x+=w.clientLeft,Q.y+=w.clientTop):U&&(Q.x=getWindowScrollBarX(U))),{x:W.left+Y.scrollLeft-Q.x,y:W.top+Y.scrollTop-Q.y,width:W.width,height:W.height}}function order(O){var w=new Map,D=new Set,F=[];O.forEach(function(U){w.set(U.name,U)});function q(U){D.add(U.name);var W=[].concat(U.requires||[],U.requiresIfExists||[]);W.forEach(function(Y){if(!D.has(Y)){var Q=w.get(Y);Q&&q(Q)}}),F.push(U)}return O.forEach(function(U){D.has(U.name)||q(U)}),F}function orderModifiers(O){var w=order(O);return modifierPhases.reduce(function(D,F){return D.concat(w.filter(function(q){return q.phase===F}))},[])}function debounce(O){var w;return function(){return w||(w=new Promise(function(D){Promise.resolve().then(function(){w=void 0,D(O())})})),w}}function mergeByName(O){var w=O.reduce(function(D,F){var q=D[F.name];return D[F.name]=q?Object.assign({},q,F,{options:Object.assign({},q.options,F.options),data:Object.assign({},q.data,F.data)}):F,D},{});return Object.keys(w).map(function(D){return w[D]})}var DEFAULT_OPTIONS={placement:"bottom",modifiers:[],strategy:"absolute"};function areValidElements(){for(var O=arguments.length,w=new Array(O),D=0;D<O;D++)w[D]=arguments[D];return!w.some(function(F){return!(F&&typeof F.getBoundingClientRect=="function")})}function popperGenerator(O){O===void 0&&(O={});var w=O,D=w.defaultModifiers,F=D===void 0?[]:D,q=w.defaultOptions,U=q===void 0?DEFAULT_OPTIONS:q;return function(Y,Q,ne){ne===void 0&&(ne=U);var oe={placement:"bottom",orderedModifiers:[],options:Object.assign({},DEFAULT_OPTIONS,U),modifiersData:{},elements:{reference:Y,popper:Q},attributes:{},styles:{}},ce=[],fe=!1,we={state:oe,setOptions:function(Ae){var Se=typeof Ae=="function"?Ae(oe.options):Ae;ve(),oe.options=Object.assign({},U,oe.options,Se),oe.scrollParents={reference:isElement(Y)?listScrollParents(Y):Y.contextElement?listScrollParents(Y.contextElement):[],popper:listScrollParents(Q)};var Te=orderModifiers(mergeByName([].concat(F,oe.options.modifiers)));return oe.orderedModifiers=Te.filter(function(ke){return ke.enabled}),Z(),we.update()},forceUpdate:function(){if(!fe){var Ae=oe.elements,Se=Ae.reference,Te=Ae.popper;if(areValidElements(Se,Te)){oe.rects={reference:getCompositeRect(Se,getOffsetParent(Te),oe.options.strategy==="fixed"),popper:getLayoutRect(Te)},oe.reset=!1,oe.placement=oe.options.placement,oe.orderedModifiers.forEach(function(De){return oe.modifiersData[De.name]=Object.assign({},De.data)});for(var ke=0;ke<oe.orderedModifiers.length;ke++){if(oe.reset===!0){oe.reset=!1,ke=-1;continue}var $e=oe.orderedModifiers[ke],be=$e.fn,Pe=$e.options,Ie=Pe===void 0?{}:Pe,je=$e.name;typeof be=="function"&&(oe=be({state:oe,options:Ie,name:je,instance:we})||oe)}}}},update:debounce(function(){return new Promise(function(de){we.forceUpdate(),de(oe)})}),destroy:function(){ve(),fe=!0}};if(!areValidElements(Y,Q))return we;we.setOptions(ne).then(function(de){!fe&&ne.onFirstUpdate&&ne.onFirstUpdate(de)});function Z(){oe.orderedModifiers.forEach(function(de){var Ae=de.name,Se=de.options,Te=Se===void 0?{}:Se,ke=de.effect;if(typeof ke=="function"){var $e=ke({state:oe,name:Ae,instance:we,options:Te}),be=function(){};ce.push($e||be)}})}function ve(){ce.forEach(function(de){return de()}),ce=[]}return we}}var defaultModifiers=[eventListeners,popperOffsets$1,computeStyles$1,applyStyles$1,offset$1,flip$1,preventOverflow$1,arrow$1,hide$1],createPopper=popperGenerator({defaultModifiers});const dropdownItemStyle=i$5`
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
 `;var __defProp$P=Object.defineProperty,__getOwnPropDesc$P=Object.getOwnPropertyDescriptor,__decorateClass$P=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$P(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$P(w,D,q),q};const awcDropdownItemTag="awc-dropdown-item";exports.AwcDropdownItem=class extends r$3{constructor(){super(...arguments),this.target="_self",this.selected=!1}focus(){this._dropdownItem.focus()}render(){return this.href?x`<a
         tabindex="0"
         class="awc-dropdown-item"
         href=${o$2(this.href)}
         target=${o$2(this.target)}
         ?selected=${this.selected}
       >
         <slot></slot>
         ${this.selected?x`<div class="select-icon"></div>`:x`<div class="select-icon--none"></div>`}
       </a>`:x`
         <button
           tabindex="0"
           class="awc-dropdown-item"
           ?selected=${this.selected}
         >
           <slot></slot>
           ${this.selected?x`<div class="select-icon"></div>`:x`<div class="select-icon--none"></div>`}
         </button>
       `}},exports.AwcDropdownItem.styles=[scrollStyle,dropdownItemStyle],__decorateClass$P([n$1({type:String})],exports.AwcDropdownItem.prototype,"href",2),__decorateClass$P([n$1({type:String})],exports.AwcDropdownItem.prototype,"target",2),__decorateClass$P([n$1({type:Boolean,reflect:!0})],exports.AwcDropdownItem.prototype,"selected",2),__decorateClass$P([e$4(".awc-dropdown-item")],exports.AwcDropdownItem.prototype,"_dropdownItem",2),exports.AwcDropdownItem=__decorateClass$P([t$1(awcDropdownItemTag)],exports.AwcDropdownItem);var __defProp$O=Object.defineProperty,__getOwnPropDesc$O=Object.getOwnPropertyDescriptor,__decorateClass$O=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$O(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$O(w,D,q),q};exports.AwcDropdown=class extends r$3{constructor(){super(...arguments),this.notClosing=!1,this.visible=!1,this.selectedMode=!1,this.position="bottom-start",this.strategy="absolute",this.disabled=!1,this.scrollOff=!1,this.popperInstance=null,this._handleOutsideClick=w=>{this.contains(w.target)||this.close()},this.focusedOptionIndex=-1}_createPopperInstance(){this._nestedElement&&this._dropdownList&&(this.popperInstance=createPopper(this._nestedElement,this._dropdownList,{placement:this.position,modifiers:[{name:"offset",options:{offset:[0,8]}}],strategy:this.strategy}))}_destroyPopperInstance(){var w;(w=this.popperInstance)==null||w.destroy(),this.popperInstance=null}_setupPopover(){this.disabled||(this._createPopperInstance(),this._addOutsideClickHandler())}_disconnectPopover(){this.disabled||(this._removeOutsideClickHandler(),this._destroyPopperInstance())}_addOutsideClickHandler(){setTimeout(()=>{document.addEventListener("click",this._handleOutsideClick)},0)}_removeOutsideClickHandler(){document.removeEventListener("click",this._handleOutsideClick)}open(){this.visible=!0,this._onOpen({visible:this.visible})}close(){this.visible=!1,this.focusedOptionIndex=-1,this._onClose({visible:this.visible})}_handleDropdown(w){w.target&&this.options.length&&(this.visible?this.close():this.open())}get options(){return[...this.querySelectorAll(awcDropdownItemTag)]}handleKeyDown(w){if(this.options.length){if(["ArrowDown","ArrowRight"].includes(w.key))this.focusedOptionIndex++;else if(["ArrowUp","ArrowLeft"].includes(w.key))this.focusedOptionIndex--;else if(w.key==="Escape"){this.focusedOptionIndex=-1,this.close();return}else return;this.focusedOptionIndex=Math.max(0,Math.min(this.focusedOptionIndex,this.options.length-1)),this.options[this.focusedOptionIndex].focus(),w.preventDefault()}}_selectedModeHandle(w){const D=w.target;this.selectedMode&&(D.selected=!D.selected),D&&!this.notClosing&&this.close()}_setMinWidth(){this._dropdownList&&(this._dropdownList.style.width=`${this.width}px`)}updated(w){super.updated(w),w.has("notClosing")&&this._updateOutsideClickHandler(),w.has("width")&&this._setMinWidth(),w.has("visible")&&(this.visible?this._setupPopover():this._disconnectPopover())}_updateOutsideClickHandler(){this._removeOutsideClickHandler(),!this.notClosing&&this.visible&&this._addOutsideClickHandler()}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this._removeOutsideClickHandler()}render(){return x`
       <div class="awc-dropdown">
         <div class="awc-dropdown__nested">
           <slot
             @click="${this._handleDropdown}"
             name="awc-dropdown-toggle"
           ></slot>
         </div>
 
         <awc-dropdown-list ?scroll-off=${this.scrollOff} ?visible=${this.visible}>
           <slot @click=${this._selectedModeHandle}></slot>
         </awc-dropdown-list>
       </div>
     `}},exports.AwcDropdown.shadowRootOptions={...r$3.shadowRootOptions,delegatesFocus:!0},exports.AwcDropdown.styles=[scrollStyle,dropdownStyle],__decorateClass$O([n$1({type:Boolean,reflect:!0,attribute:"not-closing"})],exports.AwcDropdown.prototype,"notClosing",2),__decorateClass$O([n$1({type:Boolean,reflect:!0})],exports.AwcDropdown.prototype,"visible",2),__decorateClass$O([n$1({type:Number,reflect:!0})],exports.AwcDropdown.prototype,"width",2),__decorateClass$O([n$1({type:Boolean,reflect:!0,attribute:"selected-mode"})],exports.AwcDropdown.prototype,"selectedMode",2),__decorateClass$O([n$1({type:String,reflect:!0})],exports.AwcDropdown.prototype,"position",2),__decorateClass$O([n$1({type:String,reflect:!0})],exports.AwcDropdown.prototype,"strategy",2),__decorateClass$O([n$1({type:Boolean,reflect:!0})],exports.AwcDropdown.prototype,"disabled",2),__decorateClass$O([n$1({type:Boolean,reflect:!0,attribute:"scroll-off"})],exports.AwcDropdown.prototype,"scrollOff",2),__decorateClass$O([event("awc-dropdown-open")],exports.AwcDropdown.prototype,"_onOpen",2),__decorateClass$O([event("awc-dropdown-close")],exports.AwcDropdown.prototype,"_onClose",2),__decorateClass$O([e$4("awc-dropdown-list")],exports.AwcDropdown.prototype,"_dropdownList",2),__decorateClass$O([e$4(".awc-dropdown__nested")],exports.AwcDropdown.prototype,"_nestedElement",2),exports.AwcDropdown=__decorateClass$O([t$1("awc-dropdown")],exports.AwcDropdown);const dropdownListStyle=i$5`
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
 `;var __defProp$N=Object.defineProperty,__getOwnPropDesc$N=Object.getOwnPropertyDescriptor,__decorateClass$N=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$N(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$N(w,D,q),q};const awcDropdownListTag="awc-dropdown-list";exports.AwcDropdownList=class extends r$3{render(){return x`
       <ul class="awc-dropdown-list">
         <slot></slot>
       </ul>
     `}},exports.AwcDropdownList.styles=[scrollStyle,dropdownListStyle],exports.AwcDropdownList=__decorateClass$N([t$1(awcDropdownListTag)],exports.AwcDropdownList);const dropdownGroupStyle=i$5`
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
 `;var __defProp$M=Object.defineProperty,__getOwnPropDesc$M=Object.getOwnPropertyDescriptor,__decorateClass$M=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$M(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$M(w,D,q),q};const awcDropdownGroupTag="awc-dropdown-group";exports.AwcDropdownGroup=class extends r$3{constructor(){super(...arguments),this.divider=!1}render(){return x`
             <div class="awc-dropdown-group">
                 <label class="awc-dropdown-group__label">${this.label}</label>
                 <div class="awc-dropdown-group__content">
                     <slot></slot>
                 </div>
             </div>
         `}},exports.AwcDropdownGroup.styles=[scrollStyle,dropdownGroupStyle],__decorateClass$M([n$1({type:String,reflect:!0})],exports.AwcDropdownGroup.prototype,"label",2),__decorateClass$M([n$1({type:Boolean,reflect:!0})],exports.AwcDropdownGroup.prototype,"divider",2),exports.AwcDropdownGroup=__decorateClass$M([t$1(awcDropdownGroupTag)],exports.AwcDropdownGroup);var __classPrivateFieldGet=function(O,w,D,F){if(D==="a"&&!F)throw new TypeError("Private accessor was defined without a getter");if(typeof w=="function"?O!==w||!F:!w.has(O))throw new TypeError("Cannot read private member from an object whose class did not declare it");return D==="m"?F:D==="a"?F.call(O):F?F.value:w.get(O)},__classPrivateFieldSet=function(O,w,D,F,q){if(F==="m")throw new TypeError("Private method is not writable");if(F==="a"&&!q)throw new TypeError("Private accessor was defined without a setter");if(typeof w=="function"?O!==w||!q:!w.has(O))throw new TypeError("Cannot write private member to an object whose class did not declare it");return F==="a"?q.call(O,D):q?q.value=D:w.set(O,D),D};function FormControlMixin(O){var w,D,F,q,U,W,Y,Q,ne,oe,ce,fe,we,Z,ve,de,Ae,Se;class Te extends O{constructor(...$e){var be,Pe,Ie;super(...$e),w.add(this),this.internals=this.attachInternals(),D.set(this,!1),F.set(this,!1),q.set(this,!1),U.set(this,void 0),W.set(this,void 0),Y.set(this,!0),Q.set(this,""),ne.set(this,()=>{__classPrivateFieldSet(this,q,!0,"f"),__classPrivateFieldSet(this,D,!0,"f"),__classPrivateFieldGet(this,w,"m",ve).call(this)}),oe.set(this,()=>{__classPrivateFieldSet(this,D,!1,"f"),__classPrivateFieldGet(this,w,"m",de).call(this,this.shouldFormValueUpdate()?__classPrivateFieldGet(this,Q,"f"):""),!this.validity.valid&&__classPrivateFieldGet(this,q,"f")&&__classPrivateFieldSet(this,F,!0,"f");const je=__classPrivateFieldGet(this,w,"m",ve).call(this);this.validationMessageCallback&&this.validationMessageCallback(je?this.internals.validationMessage:"")}),ce.set(this,()=>{var je;__classPrivateFieldGet(this,Y,"f")&&this.validationTarget&&(this.internals.setValidity(this.validity,this.validationMessage,this.validationTarget),__classPrivateFieldSet(this,Y,!1,"f")),__classPrivateFieldSet(this,q,!0,"f"),__classPrivateFieldSet(this,F,!0,"f"),__classPrivateFieldGet(this,w,"m",ve).call(this),(je=this===null||this===void 0?void 0:this.validationMessageCallback)===null||je===void 0||je.call(this,this.showError?this.internals.validationMessage:"")}),fe.set(this,void 0),we.set(this,!1),Z.set(this,Promise.resolve()),(be=this.addEventListener)===null||be===void 0||be.call(this,"focus",__classPrivateFieldGet(this,ne,"f")),(Pe=this.addEventListener)===null||Pe===void 0||Pe.call(this,"blur",__classPrivateFieldGet(this,oe,"f")),(Ie=this.addEventListener)===null||Ie===void 0||Ie.call(this,"invalid",__classPrivateFieldGet(this,ce,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const $e=this.validators.map(Ie=>Ie.attribute).flat(),be=super.observedAttributes||[];return[...new Set([...be,...$e])]}static getValidator($e){return this.validators.find(be=>be.attribute===$e)||null}static getValidators($e){return this.validators.filter(be=>{var Pe;if(be.attribute===$e||!((Pe=be.attribute)===null||Pe===void 0)&&Pe.includes($e))return!0})}get form(){return this.internals.form}get showError(){return __classPrivateFieldGet(this,w,"m",ve).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback($e,be,Pe){var Ie;(Ie=super.attributeChangedCallback)===null||Ie===void 0||Ie.call(this,$e,be,Pe);const De=this.constructor.getValidators($e);De!=null&&De.length&&this.validationTarget&&this.setValue(__classPrivateFieldGet(this,Q,"f"))}setValue($e){var be;__classPrivateFieldSet(this,F,!1,"f"),(be=this.validationMessageCallback)===null||be===void 0||be.call(this,""),__classPrivateFieldSet(this,Q,$e,"f");const Ie=this.shouldFormValueUpdate()?$e:null;this.internals.setFormValue(Ie),__classPrivateFieldGet(this,w,"m",de).call(this,Ie),this.valueChangedCallback&&this.valueChangedCallback(Ie),__classPrivateFieldGet(this,w,"m",ve).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise($e=>$e(__classPrivateFieldGet(this,Z,"f")))}formResetCallback(){var $e,be;__classPrivateFieldSet(this,q,!1,"f"),__classPrivateFieldSet(this,F,!1,"f"),__classPrivateFieldGet(this,w,"m",ve).call(this),($e=this.resetFormControl)===null||$e===void 0||$e.call(this),(be=this.validationMessageCallback)===null||be===void 0||be.call(this,__classPrivateFieldGet(this,w,"m",ve).call(this)?this.validationMessage:"")}}return D=new WeakMap,F=new WeakMap,q=new WeakMap,U=new WeakMap,W=new WeakMap,Y=new WeakMap,Q=new WeakMap,ne=new WeakMap,oe=new WeakMap,ce=new WeakMap,fe=new WeakMap,we=new WeakMap,Z=new WeakMap,w=new WeakSet,ve=function(){if(this.hasAttribute("disabled"))return!1;const $e=__classPrivateFieldGet(this,F,"f")||__classPrivateFieldGet(this,q,"f")&&!this.validity.valid&&!__classPrivateFieldGet(this,D,"f");return $e&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),$e},de=function($e){const be=this.constructor,Pe={},Ie=be.validators,je=[],De=Ie.some(Ke=>Ke.isValid instanceof Promise);__classPrivateFieldGet(this,we,"f")||(__classPrivateFieldSet(this,Z,new Promise(Ke=>{__classPrivateFieldSet(this,fe,Ke,"f")}),"f"),__classPrivateFieldSet(this,we,!0,"f")),__classPrivateFieldGet(this,U,"f")&&(__classPrivateFieldGet(this,U,"f").abort(),__classPrivateFieldSet(this,W,__classPrivateFieldGet(this,U,"f"),"f"));const We=new AbortController;__classPrivateFieldSet(this,U,We,"f");let et,Xe=!1;Ie.length&&(Ie.forEach(Ke=>{const ot=Ke.key||"customError",Je=Ke.isValid(this,$e,We.signal);Je instanceof Promise?(je.push(Je),Je.then(vt=>{vt!=null&&(Pe[ot]=!vt,et=__classPrivateFieldGet(this,w,"m",Se).call(this,Ke,$e),__classPrivateFieldGet(this,w,"m",Ae).call(this,Pe,et))})):(Pe[ot]=!Je,this.validity[ot]!==!Je&&(Xe=!0),!Je&&!et&&(et=__classPrivateFieldGet(this,w,"m",Se).call(this,Ke,$e)))}),Promise.allSettled(je).then(()=>{var Ke;We!=null&&We.signal.aborted||(__classPrivateFieldSet(this,we,!1,"f"),(Ke=__classPrivateFieldGet(this,fe,"f"))===null||Ke===void 0||Ke.call(this))}),(Xe||!De)&&__classPrivateFieldGet(this,w,"m",Ae).call(this,Pe,et))},Ae=function($e,be){if(this.validationTarget)this.internals.setValidity($e,be,this.validationTarget),__classPrivateFieldSet(this,Y,!1,"f");else{if(this.internals.setValidity($e,be),this.internals.validity.valid)return;__classPrivateFieldSet(this,Y,!0,"f")}},Se=function($e,be){if(this.validityCallback){const Pe=this.validityCallback($e.key||"customError");if(Pe)return Pe}return $e.message instanceof Function?$e.message(this,be):$e.message},Te}const requiredValidator={attribute:"required",key:"valueMissing",message:"Please fill out this field",isValid(O,w){let D=!0;return(O.hasAttribute("required")||O.required)&&!w&&(D=!1),D}},maxLengthValidator={attribute:"maxlength",key:"tooLong",message(O,w){const D=w||"";return`Please use no more than ${O.maxLength} characters (you are currently using ${D.length} characters).`},isValid(O,w){return O.maxLength?!(w&&O.maxLength<w.length):!0}},radioStyle=i$5`
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
 `,radioGroupStyle=i$5`
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
 `;var __defProp$L=Object.defineProperty,__getOwnPropDesc$L=Object.getOwnPropertyDescriptor,__decorateClass$L=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$L(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$L(w,D,q),q};const awcChangeEventName$1="awc-radio-change";exports.AwcRadioGroup=class extends FormControlMixin(r$3){constructor(){super(...arguments),this.value="",this.name="",this.label="",this.hint="",this.horizontal=!1,this.focusedOptionIndex=0}get options(){return[...this.querySelectorAll(awcRadioTag)]}get availableOptions(){return this.options.filter(w=>!w.disabled)}_handleRadioButton(w){const D=w.target;this.setValue(D.value),this._onChange(D.value)}resetFormControl(){return this.options.forEach(w=>{this.value="",w.checked=!1})}_handleKeyDown(w){if(["ArrowDown","ArrowRight"].includes(w.key))this.focusedOptionIndex++;else if(["ArrowUp","ArrowLeft"].includes(w.key))this.focusedOptionIndex--;else if([" "].includes(w.key)){this.availableOptions[this.focusedOptionIndex].select();return}else return;this.focusedOptionIndex=Math.max(0,Math.min(this.focusedOptionIndex,this.availableOptions.length-1)),this.availableOptions[this.focusedOptionIndex].focus(),w.preventDefault()}_handleFocus(){this.availableOptions[this.focusedOptionIndex].focus()}updated(w){super.updated(w),w.has("value")&&this.setValue(this.value)}_setupAwcRadioValues(){this.options.forEach(w=>{w.checked&&(this.value=w.value)})}connectedCallback(){super.connectedCallback(),this.tabIndex=0,this.addEventListener("focus",this._handleFocus),this.addEventListener("keydown",this._handleKeyDown),this._setupAwcRadioValues(),document.addEventListener("DOMContentLoaded",()=>{this._setupAwcRadioValues()})}render(){return x`
       <div class="awc-radio-group" role="radiogroup" aria-labelledby="label">
         <legend class="awc-radio-group__label">${this.label}</legend>
         <div
           class="awc-radio-group__options"
           @awc-checked=${this._handleRadioButton}
         >
           <slot></slot>
         </div>
         ${this.hint?x`<span class="awc-radio-group__hint">${this.hint}</span>`:""}
       </div>
     `}},exports.AwcRadioGroup.styles=[radioGroupStyle],__decorateClass$L([n$1({type:String})],exports.AwcRadioGroup.prototype,"value",2),__decorateClass$L([n$1({type:String,reflect:!0})],exports.AwcRadioGroup.prototype,"name",2),__decorateClass$L([n$1({type:String,reflect:!0})],exports.AwcRadioGroup.prototype,"label",2),__decorateClass$L([n$1({type:String,reflect:!0})],exports.AwcRadioGroup.prototype,"hint",2),__decorateClass$L([n$1({type:Boolean,reflect:!0})],exports.AwcRadioGroup.prototype,"horizontal",2),__decorateClass$L([event(awcChangeEventName$1)],exports.AwcRadioGroup.prototype,"_onChange",2),exports.AwcRadioGroup=__decorateClass$L([t$1("awc-radio-group")],exports.AwcRadioGroup);var __defProp$K=Object.defineProperty,__getOwnPropDesc$K=Object.getOwnPropertyDescriptor,__decorateClass$K=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$K(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$K(w,D,q),q};const awcRadioTag="awc-radio";exports.AwcRadio=class extends FormControlMixin(r$3){constructor(){super(...arguments),this.staticError=!1,this.disabled=!1,this.size="regular",this.checked=!1,this.required=!1,this.validationMessage="",this._handleFieldValueChange=w=>{const D=w.detail;this.checked=D===this.value},this._onChange=()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},this._onInvalid=w=>{w.preventDefault(),this.validationTarget.focus()}}validityCallback(){const w=document.createElement("input");return w.type="radio",w.name="name",w.required=this.required,w.validationMessage}validationMessageCallback(w){this.customError&&!this.staticError?(this.validationMessage=w,this.validationMessage=this.customError):this.validationMessage=w}shouldFormValueUpdate(){return this.checked}connectedCallback(){super.connectedCallback(),this.addEventListener("invalid",this._onInvalid),this._setupFieldListener()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._onInvalid),this._cleanupFieldListener()}_setupFieldListener(){var w;this.field=this.closest("awc-radio-group"),this.field||console.warn("awc-radio is designed to be used inside an awc-radio-group",this),(w=this.field)==null||w.addEventListener(awcChangeEventName$1,this._handleFieldValueChange)}_cleanupFieldListener(){var w;(w=this.field)==null||w.removeEventListener(awcChangeEventName$1,this._handleFieldValueChange)}select(){this.checked=!0,this._onChecked(this.value),this._onChange()}focus(){this._radioElement.tabIndex=0,this._radioElement.focus(),this._onFocus(this.value)}blur(){this._radioElement.tabIndex=-1,this._onBlur(this.value)}_settingCustomColor(){this.customColor&&this.style.setProperty("--awc-radio-custom-color",this.customColor)}updated(w){super.updated(w),(w.has("checked")||w.has("value"))&&this.setValue(this.value),w.has("customColor")&&this._settingCustomColor()}render(){const w=e$1({"awc-radio":!0,checked:this.checked}),D={"awc-radio__label":!0,"radio--error":this.showError&&!this.checked||this.staticError&&this.required};return x`
       <div class="awc-radio__wrapper">
         <div class="awc-radio__container">
           <span
             tabindex="0"
             class="${w}"
             role="radio"
             aria-checked=${this.checked}
             aria-required=${this.required}
             aria-disabled=${this.disabled}
             aria-labelledby="label"
             @blur=${this.blur}
             @click=${this.select}
           >
             <p id="label" class="${e$1(D)}">${this.label}</p>
           </span>
         </div>
 
         ${this.showError&&this.required&&!this.staticError?x`<span class="awc-radio__error"
               >${this.validationMessage}</span
             >`:""}
         ${this.staticError&&this.required&&this.customError?x`<span class="awc-radio__error">${this.customError}</span>`:""}
       </div>
     `}},exports.AwcRadio.shadowRootOptions={...r$3.shadowRootOptions,delegatesFocus:!0},exports.AwcRadio.formControlValidators=[requiredValidator],exports.AwcRadio.styles=[radioStyle],__decorateClass$K([n$1({type:String,reflect:!0})],exports.AwcRadio.prototype,"name",2),__decorateClass$K([n$1({type:String,reflect:!0})],exports.AwcRadio.prototype,"value",2),__decorateClass$K([n$1({type:String,reflect:!0})],exports.AwcRadio.prototype,"label",2),__decorateClass$K([n$1({reflect:!0,attribute:"custom-error"})],exports.AwcRadio.prototype,"customError",2),__decorateClass$K([n$1({type:Boolean,reflect:!0,attribute:"static-error"})],exports.AwcRadio.prototype,"staticError",2),__decorateClass$K([n$1({type:Boolean,reflect:!0})],exports.AwcRadio.prototype,"disabled",2),__decorateClass$K([n$1({reflect:!0})],exports.AwcRadio.prototype,"size",2),__decorateClass$K([n$1({type:Boolean,reflect:!0})],exports.AwcRadio.prototype,"checked",2),__decorateClass$K([n$1({type:Boolean,reflect:!0})],exports.AwcRadio.prototype,"required",2),__decorateClass$K([n$1({reflect:!0,attribute:"custom-color"})],exports.AwcRadio.prototype,"customColor",2),__decorateClass$K([event("awc-checked")],exports.AwcRadio.prototype,"_onChecked",2),__decorateClass$K([event("awc-focus")],exports.AwcRadio.prototype,"_onFocus",2),__decorateClass$K([event("awc-blur")],exports.AwcRadio.prototype,"_onBlur",2),__decorateClass$K([e$4("[role=radio]")],exports.AwcRadio.prototype,"_radioElement",2),__decorateClass$K([e$4("[role=radio]")],exports.AwcRadio.prototype,"validationTarget",2),__decorateClass$K([r$1()],exports.AwcRadio.prototype,"validationMessage",2),exports.AwcRadio=__decorateClass$K([t$1(awcRadioTag)],exports.AwcRadio);const PolyfilledSubmitEvent=globalThis.SubmitEvent=typeof globalThis.SubmitEvent<"u"?SubmitEvent:Event,submit=O=>{if(!(!O.noValidate&&!O.reportValidity())){const w=new PolyfilledSubmitEvent("submit",{bubbles:!0,cancelable:!0});O.dispatchEvent(w),w.defaultPrevented||O.submit()}},buttonStyle=i$5`
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
 `,spinnerStyle=i$5`
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
 
 `;var __defProp$J=Object.defineProperty,__getOwnPropDesc$J=Object.getOwnPropertyDescriptor,__decorateClass$J=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$J(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$J(w,D,q),q};const awcSpinnerTag="awc-spinner";exports.AwcSpinner=class extends r$3{constructor(){super(...arguments),this.size="m",this.variant="primary"}render(){return x`
             <div class="awc-spinner"></div>
         `}},exports.AwcSpinner.styles=[spinnerStyle],__decorateClass$J([n$1({type:String,reflect:!0})],exports.AwcSpinner.prototype,"size",2),__decorateClass$J([n$1({type:String,reflect:!0})],exports.AwcSpinner.prototype,"variant",2),exports.AwcSpinner=__decorateClass$J([t$1(awcSpinnerTag)],exports.AwcSpinner);var __defProp$I=Object.defineProperty,__getOwnPropDesc$I=Object.getOwnPropertyDescriptor,__decorateClass$I=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$I(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$I(w,D,q),q};const awcButtonTag="awc-button";exports.AwcButton=class extends r$3{constructor(){super(...arguments),this.background="blue",this.size="regular",this.variant="primary",this.type="submit",this.target="_self",this.disabled=!1,this.filling=!1,this.loading=!1,this.autofocus=!1}get spinner(){return this.querySelector(awcSpinnerTag)}focus(){this.button.focus()}_handleButtonClick(){const w=this.closest("form");w&&(this.type==="submit"?submit(w):this.type==="reset"&&w.reset())}_renderSpinner(){const w=this.variant==="primary"?"secondary":"primary";return x`<awc-spinner size="s" variant=${w}></awc-spinner>`}_settingCurrentSpinnerVariant(){this.spinner?(this.button.classList.add("awc-button--disable"),this.variant==="primary"?this.spinner.variant="secondary":this.spinner.variant="primary"):this.button.classList.remove("awc-button--disable")}_checkingSpinnerInSlot(){this.spinner?this._settingCurrentSpinnerVariant():this.button.classList.remove("awc-button--disable")}updated(w){super.updated(w),w.has("variant")&&this._settingCurrentSpinnerVariant()}render(){const w=x`
       <slot @slotchange="${this._checkingSpinnerInSlot}"></slot>
       ${this.loading?this._renderSpinner():""}
     `,D=x`
      <button
         class="awc-button"
         ?filling=${this.filling}
         ?autofocus=${this.autofocus}
         type=${this.type}
         name=${o$2(this.name)}
         value=${o$2(this.value)}
         tabindex="0"
         background=${this.background}
         ?disabled=${this.disabled}
         @focus=${this.focus}
         @click=${this._handleButtonClick}
       >
        ${w}
       </button>
     `,F=x`
      <a
         class="awc-button"
         ?filling=${this.filling}
         ?autofocus=${this.autofocus}
         tabindex="0"
         background=${this.background}
         ?disabled=${this.disabled}
         href=${this.href}
         @focus=${this.focus}
         target=${o$2(this.target)}
         @click=${this._handleButtonClick}
       >
       ${w}
      </a>
     `;return this.href?F:D}},exports.AwcButton.styles=[buttonStyle],__decorateClass$I([n$1({type:String,reflect:!0})],exports.AwcButton.prototype,"name",2),__decorateClass$I([n$1({type:String,reflect:!0})],exports.AwcButton.prototype,"value",2),__decorateClass$I([n$1({type:String,reflect:!0})],exports.AwcButton.prototype,"background",2),__decorateClass$I([n$1({type:String,reflect:!0})],exports.AwcButton.prototype,"size",2),__decorateClass$I([n$1({type:String,reflect:!0})],exports.AwcButton.prototype,"variant",2),__decorateClass$I([n$1({type:String,reflect:!0})],exports.AwcButton.prototype,"type",2),__decorateClass$I([n$1({type:String})],exports.AwcButton.prototype,"target",2),__decorateClass$I([n$1({type:String,reflect:!0})],exports.AwcButton.prototype,"href",2),__decorateClass$I([n$1({type:Boolean,reflect:!0})],exports.AwcButton.prototype,"disabled",2),__decorateClass$I([n$1({type:Boolean,reflect:!0})],exports.AwcButton.prototype,"filling",2),__decorateClass$I([n$1({type:Boolean,reflect:!0})],exports.AwcButton.prototype,"loading",2),__decorateClass$I([n$1({type:Boolean,reflect:!0})],exports.AwcButton.prototype,"autofocus",2),__decorateClass$I([r$1()],exports.AwcButton.prototype,"pointerEvent",2),__decorateClass$I([e$4(".awc-button")],exports.AwcButton.prototype,"button",2),exports.AwcButton=__decorateClass$I([t$1(awcButtonTag)],exports.AwcButton);/**
  * @license
  * Copyright 2020 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const f=O=>O.strings===void 0,u={},m=(O,w=u)=>O._$AH=w;/**
  * @license
  * Copyright 2020 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const l$1=e$2(class extends i$1{constructor(O){if(super(O),O.type!==t.PROPERTY&&O.type!==t.ATTRIBUTE&&O.type!==t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!f(O))throw Error("`live` bindings can only contain a single expression")}render(O){return O}update(O,[w]){if(w===T||w===E)return w;const D=O.element,F=O.name;if(O.type===t.PROPERTY){if(w===D[F])return T}else if(O.type===t.BOOLEAN_ATTRIBUTE){if(!!w===D.hasAttribute(F))return T}else if(O.type===t.ATTRIBUTE&&D.getAttribute(F)===w+"")return T;return m(O),w}}),checkboxStyle=i$5`
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
 `;var __defProp$H=Object.defineProperty,__getOwnPropDesc$H=Object.getOwnPropertyDescriptor,__decorateClass$H=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$H(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$H(w,D,q),q};const awcCheckboxTag="awc-checkbox";exports.AwcCheckbox=class extends FormControlMixin(r$3){constructor(){super(...arguments),this.label="",this.name="",this.checked=!1,this.required=!1,this.disabled=!1,this.indeterminate=!1,this.staticError=!1,this.customError="",this.size="regular",this.validationMessage="",this._handleFieldValueChange=w=>{this.checked=w.detail.includes(this.value)},this._onInvalid=w=>{w.preventDefault(),this.validationTarget.focus()}}validityCallback(){var w;return(w=this.validationTarget)==null?void 0:w.validationMessage}validationMessageCallback(w){this.customError&&!this.staticError?(this.validationMessage=w,this.validationMessage=this.customError):this.validationMessage=w}resetFormControl(){this.checked=!1}shouldFormValueUpdate(){return this.checked}update(w){super.update(w),(w.has("checked")||w.has("value"))&&this.setValue(this.value),w.has("customColor")&&this._settingCustomColor()}connectedCallback(){super.connectedCallback(),this.addEventListener("invalid",this._onInvalid),document.addEventListener("DOMContentLoaded",()=>{this.field=this.closest(awcCheckboxGroupTag),this.field&&this.addEventListener(awcChangeEventName,this._handleFieldValueChange)})}disconnectedCallback(){var w;super.disconnectedCallback(),this.removeEventListener("invalid",this._onInvalid),(w=this.field)==null||w.removeEventListener(awcChangeEventName,this._handleFieldValueChange)}focus(){this.checkboxElement.tabIndex=0,this.checkboxElement.focus(),this.onFocus(this.value)}blur(){this.onBlur(this.value),this.field&&(this.checkboxElement.tabIndex=-1)}_settingCustomColor(){this.customColor&&this.style.setProperty("--awc-checkbox-custom-color",this.customColor)}_handleChange(w){const D=w.target;D.checkValidity(),this.checked=D.checked,this.onChange(D.checked),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.indeterminate=!1}render(){const w={checkbox:!0,"checkbox--error":this.showError},D={"awc-checkbox__label":!0,"checkbox--error":this.showError||this.staticError&&this.required};return x`
       <div class="awc-checkbox__wrapper">
         <label class="${e$1(D)}"
           >${this.label}
           <div class="awc-checkbox__container">
             <span class="awc-checkbox"></span>
             <input
               class="${e$1(w)}"
               type="checkbox"
               label=${this.label}
               name=${this.name}
               value=${o$2(this.value)}
               .checked=${l$1(this.checked)}
               ?disabled=${this.disabled}
               ?required=${this.required}
               .indeterminate=${this.indeterminate}
               @change=${this._handleChange}
               @blur=${this.blur}
             />
           </div>
         </label>
 
         ${this.showError&&this.required&&!this.staticError?x`<span class="awc-checkbox__error"
               >${this.validationMessage}</span
             >`:""}
         ${this.staticError&&this.required&&this.customError?x`<span class="awc-checkbox__error">${this.customError}</span>`:""}
       </div>
     `}},exports.AwcCheckbox.shadowRootOptions={...r$3.shadowRootOptions,delegatesFocus:!0},exports.AwcCheckbox.formControlValidators=[requiredValidator],exports.AwcCheckbox.styles=[checkboxStyle],__decorateClass$H([n$1({type:String,reflect:!0})],exports.AwcCheckbox.prototype,"value",2),__decorateClass$H([n$1({type:String,reflect:!0})],exports.AwcCheckbox.prototype,"label",2),__decorateClass$H([n$1({type:String,reflect:!0})],exports.AwcCheckbox.prototype,"name",2),__decorateClass$H([n$1({type:Boolean,reflect:!0})],exports.AwcCheckbox.prototype,"checked",2),__decorateClass$H([n$1({type:Boolean,reflect:!0})],exports.AwcCheckbox.prototype,"required",2),__decorateClass$H([n$1({type:Boolean,reflect:!0})],exports.AwcCheckbox.prototype,"disabled",2),__decorateClass$H([n$1({type:Boolean,reflect:!0})],exports.AwcCheckbox.prototype,"indeterminate",2),__decorateClass$H([n$1({type:Boolean,reflect:!0,attribute:"static-error"})],exports.AwcCheckbox.prototype,"staticError",2),__decorateClass$H([n$1({reflect:!0,attribute:"custom-error"})],exports.AwcCheckbox.prototype,"customError",2),__decorateClass$H([n$1({reflect:!0})],exports.AwcCheckbox.prototype,"size",2),__decorateClass$H([n$1({reflect:!0,attribute:"custom-color"})],exports.AwcCheckbox.prototype,"customColor",2),__decorateClass$H([r$1()],exports.AwcCheckbox.prototype,"validationMessage",2),__decorateClass$H([event("awc-checkbox-change")],exports.AwcCheckbox.prototype,"onChange",2),__decorateClass$H([event("awc-focus")],exports.AwcCheckbox.prototype,"onFocus",2),__decorateClass$H([event("awc-blur")],exports.AwcCheckbox.prototype,"onBlur",2),__decorateClass$H([e$4("input")],exports.AwcCheckbox.prototype,"checkboxElement",2),__decorateClass$H([e$4("label")],exports.AwcCheckbox.prototype,"labelCheckboxElement",2),__decorateClass$H([e$4("input[type=checkbox]")],exports.AwcCheckbox.prototype,"validationTarget",2),exports.AwcCheckbox=__decorateClass$H([t$1(awcCheckboxTag)],exports.AwcCheckbox);const checkboxGroupStyle=i$5`
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
 `;var __defProp$G=Object.defineProperty,__getOwnPropDesc$G=Object.getOwnPropertyDescriptor,__decorateClass$G=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$G(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$G(w,D,q),q};const awcCheckboxGroupTag="awc-checkbox-group",awcChangeEventName="awc-checkbox-group-change";exports.AwcCheckboxGroup=class extends FormControlMixin(r$3){constructor(){super(...arguments),this.value=[],this.label="",this.hint="",this.horizontal=!1,this.focusedOptionIndex=0}get options(){return[...this.querySelectorAll(awcCheckboxTag)]}get checkedOptions(){return this.options.filter(w=>w.checked).map(w=>w.value)}get availableOptions(){return this.options.filter(w=>!w.disabled)}connectedCallback(){super.connectedCallback(),this.tabIndex=0,this._handleCheckboxItem(),this.addEventListener("focus",this.handleFocus),this.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this.handleFocus),this.removeEventListener("keydown",this.handleKeyDown)}updated(w){super.updated(w),w.has("value")&&(this.setValue(this.checkedOptions.join(", ")),this._onChange(this.value))}_handleCheckboxItem(){this.value=this.checkedOptions}handleKeyDown(w){if(["ArrowDown","ArrowRight"].includes(w.key))this.focusedOptionIndex++;else if(["ArrowUp","ArrowLeft"].includes(w.key))this.focusedOptionIndex--;else if(w.key==="Tab"){if(w.shiftKey?this.focusedOptionIndex--:this.focusedOptionIndex++,this.focusedOptionIndex===this.availableOptions.length){this.tabIndex=0,this.focusedOptionIndex=0;return}}else return;this.focusedOptionIndex=Math.max(0,Math.min(this.focusedOptionIndex,this.availableOptions.length-1)),this.availableOptions[this.focusedOptionIndex].focus(),w.preventDefault()}handleFocus(){this.availableOptions[this.focusedOptionIndex].focus()}render(){return x`
         <div class="awc-checkbox-group"
             role="group"
             aria-labelledby="label"
             .value="${l$1(this.value)}">
             <legend class="awc-checkbox-group__label">${this.label}</legend>
                 <div class="awc-checkbox-group__options"
                     @awc-checkbox-change=${this._handleCheckboxItem}>
                 <slot></slot>
             </div>
             ${this.hint?x`<span class="awc-checkbox-group__hint">${this.hint}</span>`:""}
         </div>
     `}},exports.AwcCheckboxGroup.styles=[checkboxGroupStyle],__decorateClass$G([n$1({type:Array,reflect:!0})],exports.AwcCheckboxGroup.prototype,"value",2),__decorateClass$G([n$1({type:String,reflect:!0})],exports.AwcCheckboxGroup.prototype,"label",2),__decorateClass$G([n$1({type:String,reflect:!0})],exports.AwcCheckboxGroup.prototype,"hint",2),__decorateClass$G([n$1({type:Boolean,reflect:!0})],exports.AwcCheckboxGroup.prototype,"horizontal",2),__decorateClass$G([event("awc-checkbox-group-change")],exports.AwcCheckboxGroup.prototype,"_onChange",2),exports.AwcCheckboxGroup=__decorateClass$G([t$1(awcCheckboxGroupTag)],exports.AwcCheckboxGroup);const switcherStyle=i$5`
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
 `;var __defProp$F=Object.defineProperty,__getOwnPropDesc$F=Object.getOwnPropertyDescriptor,__decorateClass$F=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$F(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$F(w,D,q),q};const awcSwitcherTag="awc-switcher";exports.AwcSwitcher=class extends FormControlMixin(r$3){constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.variant="primary",this.size="regular"}_onChange(){this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}_handleToggle(){this.disabled||(this.checked=!this.checked,this._onToggle(this.checked),this._onChange())}_handleKeyDown(w){(w.code==="Enter"||w.code==="Space")&&(this._handleToggle(),w.preventDefault())}_settingCustomColor(){this.customColor&&this.style.setProperty("--awc-switcher-custom-color",this.customColor)}resetFormControl(){this.checked=!1}shouldFormValueUpdate(){return this.checked}updated(w){super.updated(w),(w.has("checked")||w.has("value"))&&this.setValue(this.value),w.has("customColor")&&this._settingCustomColor()}render(){return x`
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
     `}},exports.AwcSwitcher.styles=[switcherStyle],__decorateClass$F([n$1({type:Boolean,reflect:!0})],exports.AwcSwitcher.prototype,"checked",2),__decorateClass$F([n$1({type:Boolean,reflect:!0})],exports.AwcSwitcher.prototype,"disabled",2),__decorateClass$F([n$1({type:String,reflect:!0})],exports.AwcSwitcher.prototype,"name",2),__decorateClass$F([n$1({type:String,reflect:!0})],exports.AwcSwitcher.prototype,"value",2),__decorateClass$F([n$1({type:String,reflect:!0})],exports.AwcSwitcher.prototype,"variant",2),__decorateClass$F([n$1({type:String,reflect:!0})],exports.AwcSwitcher.prototype,"size",2),__decorateClass$F([n$1({reflect:!0,attribute:"custom-color"})],exports.AwcSwitcher.prototype,"customColor",2),__decorateClass$F([event("awc-switcher-toggle")],exports.AwcSwitcher.prototype,"_onToggle",2),exports.AwcSwitcher=__decorateClass$F([t$1(awcSwitcherTag)],exports.AwcSwitcher);const dividerStyle=i$5`
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
 `;var __defProp$E=Object.defineProperty,__getOwnPropDesc$E=Object.getOwnPropertyDescriptor,__decorateClass$E=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$E(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$E(w,D,q),q};exports.AwcDivider=class extends r$3{constructor(){super(...arguments),this.spacing="l"}render(){return x`
       <div
         class="awc-divider"
         style="--awc-divider-spacing: var(--spacing-${this.spacing});"
       >
         ${this.label?x`<span class="awc-divider__text">${this.label}</span>`:x`<div class="awc-divider__line"></div>`}
       </div>
     `}},exports.AwcDivider.styles=[dividerStyle],__decorateClass$E([n$1({type:String,reflect:!0})],exports.AwcDivider.prototype,"label",2),__decorateClass$E([n$1({type:String,reflect:!0})],exports.AwcDivider.prototype,"spacing",2),exports.AwcDivider=__decorateClass$E([t$1("awc-divider")],exports.AwcDivider);const validityStates=["valueMissing","typeMismatch","tooLong","tooShort","rangeUnderflow","rangeOverflow","stepMismatch","badInput","patternMismatch","customError"],innerInputValidators=validityStates.map(O=>({key:O,isValid(w){return w.validationTarget?!w.validationTarget.validity[O]:!0}})),textareaLengthValidator={...maxLengthValidator,isValid(O){return O.validationTarget&&O.getAttribute("maxlength")?Number(O.getAttribute("maxlength"))>=O.validationTarget.value.length:!0}};[...innerInputValidators];const inputStyle=i$5`
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
 `;var __defProp$D=Object.defineProperty,__getOwnPropDesc$D=Object.getOwnPropertyDescriptor,__decorateClass$D=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$D(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$D(w,D,q),q};const awcInputTag="awc-input";exports.AwcInput=class extends FormControlMixin(r$3){constructor(){super(...arguments),this.value="",this.type="text",this.size="medium",this.customError="",this.autocomplete="off",this.autofocus=!1,this.required=!1,this.disabled=!1,this.readonly=!1,this.staticError=!1,this.validationMessage="",this.inputId=Math.random().toString(36).substring(2)}validityCallback(){var w;return(w=this.validationTarget)==null?void 0:w.validationMessage}validationMessageCallback(w){this.customError&&!this.staticError?(this.validationMessage=w,this.validationMessage=this.customError):this.validationMessage=w}resetFormControl(){this.validationTarget.value=""}_changeVisibilityPassword(){if(this.input&&this._passwordButton){this.input.type=this.input.type==="password"?"text":"password";const w=this.input.type==="password"?'<path fill-rule="evenodd" clip-rule="evenodd" d="M1.88016 4.52534C1.61801 4.03924 1.01143 3.85769 0.525328 4.11984C0.0392261 4.382 -0.142322 4.98858 0.119829 5.47468C0.460909 6.10714 0.886046 6.69103 1.38093 7.21455C1.35044 7.23864 1.32104 7.26476 1.29289 7.2929L0.292888 8.2929C-0.097636 8.68343 -0.097636 9.31659 0.292888 9.70712C0.683413 10.0976 1.31658 10.0976 1.7071 9.70712L2.7071 8.70712C2.77745 8.63677 2.83512 8.55856 2.88012 8.47531C3.49551 8.88444 4.16892 9.22105 4.8856 9.47295L4.51941 11.3039C4.4111 11.8455 4.76232 12.3723 5.30388 12.4806C5.84544 12.5889 6.37226 12.2377 6.48058 11.6961L6.83405 9.92873C7.21597 9.97577 7.6052 10 7.99999 10C8.39479 10 8.78401 9.97577 9.16594 9.92873L9.51941 11.6961C9.62773 12.2377 10.1546 12.5889 10.6961 12.4806C11.2377 12.3723 11.5889 11.8455 11.4806 11.3039L11.1144 9.47295C11.8311 9.22105 12.5045 8.88444 13.1199 8.47531C13.1649 8.55856 13.2225 8.63677 13.2929 8.70712L14.2929 9.70712C14.6834 10.0976 15.3166 10.0976 15.7071 9.70712C16.0976 9.31659 16.0976 8.68343 15.7071 8.2929L14.7071 7.2929C14.679 7.26476 14.6495 7.23864 14.6191 7.21455C15.1139 6.69103 15.5391 6.10714 15.8802 5.47468C16.1423 4.98858 15.9608 4.382 15.4747 4.11984C14.9886 3.85769 14.382 4.03924 14.1198 4.52534C13.0235 6.55825 10.7156 8.00001 7.99999 8.00001C5.2844 8.00001 2.97649 6.55825 1.88016 4.52534Z" fill="#919BB6"/>':'<path fill-rule="evenodd" clip-rule="evenodd" d="M0.0827055 8.39823L0.0783361 8.388C0.0249487 8.26125 -0.00032161 8.12958 -0.000259399 8.00001C-0.000324169 7.87043 0.0249465 7.73876 0.0783366 7.612L0.0827063 7.60177C1.48797 4.34653 4.46036 2 8 2C11.5396 2 14.5119 4.34645 15.9172 7.60162L15.9217 7.612C15.975 7.73875 16.0003 7.87042 16.0003 8C16.0003 8.12958 15.975 8.26125 15.9217 8.388L15.9172 8.39838C14.5119 11.6536 11.5396 14 8 14C4.46036 14 1.48797 11.6535 0.0827055 8.39823ZM8 4C10.4635 4 12.6941 5.55711 13.8989 8C12.6941 10.4429 10.4635 12 8 12C5.53648 12 3.30588 10.4429 2.10113 8C3.30588 5.55711 5.53648 4 8 4ZM8.99999 8C8.99999 8.55228 8.55228 9 7.99999 9C7.44771 9 6.99999 8.55228 6.99999 8C6.99999 7.44772 7.44771 7 7.99999 7C8.55228 7 8.99999 7.44772 8.99999 8ZM11 8C11 9.65685 9.65685 11 7.99999 11C6.34314 11 4.99999 9.65685 4.99999 8C4.99999 6.34315 6.34314 5 7.99999 5C9.65685 5 11 6.34315 11 8Z" fill="#919BB6"/>';this._passwordButton.innerHTML=`
         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
           ${w}
         </svg>
       `}}_updateCharacterLimit(){if(this.input&&this._progressBar&&this.maxlength!==void 0){const w=this.maxlength,D=this.value.length,F=D/w*360;if(D*100/w>70?this._progressBar.classList.add("awc-input__progress--percent"):this._progressBar.classList.remove("awc-input__progress--percent"),this._progressBar.style.setProperty("--progress",`${F}deg`),w<D){const U=w-D;this._progressBar.setAttribute("length",`${U}`),this._progressBar.classList.add("awc-input__progress--length-warning"),U<-99?this._progressBar.classList.add("awc-input__progress--small-font"):this._progressBar.classList.remove("awc-input__progress--small-font")}else this._progressBar.removeAttribute("length"),this._progressBar.classList.remove("awc-input__progress--length-warning")}}_paddingInputIcon(){(this.input&&this._passwordButton||this.input&&this._progressBar)&&this.input.classList.add("has-padding-icon")}_onKeyDown(w){if(w.code==="Enter"&&this.form){w.preventDefault();const D=this.form.querySelector("button[type='submit']"),F=this.form.querySelector("awc-button[type='submit']");D?setTimeout(()=>D.click()):F?(setTimeout(()=>F.click()),submit(this.form)):submit(this.form)}}_onInput(w){this.value=w.target.value,this.dispatchEvent(new InputEvent("input",{composed:!0,bubbles:!0}))}_onChange(w){this.value=w.target.value,this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}_onInvalid(w){w.preventDefault(),this.input.focus()}_renderPasswordButton(){return x`
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
     `}_renderIncrementArrowButtons(){return x`<div class="awc-input__arrows">
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
     </div> `}_increaseCounterValue(){let w=parseFloat(this.value||"0");const D=this.step||1,F=this.max!==void 0?this.max:1/0;let q=w+D;q>F&&(q=F),this.value=q.toString(),this.dispatchEvent(new InputEvent("input",{composed:!0,bubbles:!0})),this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}_decreaseCounterValue(){let w=parseFloat(this.value);const D=this.step||1,F=this.min!==void 0?this.min:-1/0;let q=w-D;q<F&&(q=F),this.value=q.toString(),this.dispatchEvent(new InputEvent("input",{composed:!0,bubbles:!0})),this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}focus(){this.input.focus()}blur(){this.input.blur()}select(){this.input.select()}connectedCallback(){super.connectedCallback(),this.addEventListener("invalid",this._onInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._onInvalid)}updated(w){super.updated(w),w.has("value")&&this.setValue(this.value),w.has("value")&&this.maxlength&&this._updateCharacterLimit(),(this.type==="password"||this.maxlength)&&this._paddingInputIcon()}render(){const w={"awc-input":!0,[this.size]:!0,"awc-input--error":this.showError},D=this.type==="password"?this._renderPasswordButton():"",F=this.maxlength&&!D?x`<div class="awc-input__progress"></div>`:"",q=this.type==="number"?this._renderIncrementArrowButtons():"";return x`
       <div class="awc-input__main">
         ${this.label?x`<label for=${this.inputId} class="awc-input__label"
               >${this.label}</label
             >`:""}
         <div class="awc-input__wrapper">
           <div class="awc-input__container">
             <input
               class=${e$1(w)}
               id=${this.inputId}
               type=${this.type}
               .value=${l$1(this.value)}
               placeholder=${this.placeholder}
               maxlength="${o$2(this.maxlength)}"
               minlength="${o$2(this.minlength)}"
               min="${o$2(this.min)}"
               max="${o$2(this.max)}"
               pattern="${o$2(this.pattern)}"
               step="${o$2(this.step)}"
               autocomplete="${o$2(this.autocomplete)}"
               ?autofocus=${this.autofocus}
               ?required=${this.required}
               ?disabled=${this.disabled}
               ?readonly=${this.readonly}
               @change=${this._onChange}
               @input=${this._onInput}
               @keypress=${this._onKeyDown}
             />
 
             ${D} ${F} ${q}
           </div>
           <div class="awc-input__slot">
             <slot></slot>
           </div>
         </div>
 
         ${this.showError&&!this.staticError?x`<span class="awc-input__error"
               >${this.validationMessage}</span
             >`:this.hint&&!this.staticError?x`<span class="awc-input__hint">${this.hint}</span>`:""}
         ${this.staticError&&this.required&&this.customError?x`<span class="awc-input__error">${this.customError}</span>`:this.hint&&this.staticError?x`<span class="awc-input__hint">${this.hint}</span>`:""}
       </div>
     `}},exports.AwcInput.formControlValidators=innerInputValidators,exports.AwcInput.shadowRootOptions={...r$3.shadowRootOptions,delegatesFocus:!0},exports.AwcInput.styles=[inputStyle],__decorateClass$D([n$1({type:String,reflect:!0})],exports.AwcInput.prototype,"label",2),__decorateClass$D([n$1({reflect:!0})],exports.AwcInput.prototype,"value",2),__decorateClass$D([n$1({type:String,reflect:!0})],exports.AwcInput.prototype,"placeholder",2),__decorateClass$D([n$1({type:String,reflect:!0})],exports.AwcInput.prototype,"name",2),__decorateClass$D([n$1({type:String,reflect:!0})],exports.AwcInput.prototype,"hint",2),__decorateClass$D([n$1({reflect:!0})],exports.AwcInput.prototype,"type",2),__decorateClass$D([n$1({type:String,reflect:!0})],exports.AwcInput.prototype,"size",2),__decorateClass$D([n$1({reflect:!0,attribute:"custom-error"})],exports.AwcInput.prototype,"customError",2),__decorateClass$D([n$1({type:Number,reflect:!0})],exports.AwcInput.prototype,"maxlength",2),__decorateClass$D([n$1({type:Number,reflect:!0})],exports.AwcInput.prototype,"minlength",2),__decorateClass$D([n$1({type:Number,reflect:!0})],exports.AwcInput.prototype,"min",2),__decorateClass$D([n$1({type:Number,reflect:!0})],exports.AwcInput.prototype,"max",2),__decorateClass$D([n$1({type:Number,reflect:!0})],exports.AwcInput.prototype,"step",2),__decorateClass$D([n$1({type:String,reflect:!0})],exports.AwcInput.prototype,"pattern",2),__decorateClass$D([n$1({type:String,reflect:!0})],exports.AwcInput.prototype,"autocomplete",2),__decorateClass$D([n$1({type:Boolean,reflect:!0})],exports.AwcInput.prototype,"autofocus",2),__decorateClass$D([n$1({type:Boolean,reflect:!0})],exports.AwcInput.prototype,"required",2),__decorateClass$D([n$1({type:Boolean,reflect:!0})],exports.AwcInput.prototype,"disabled",2),__decorateClass$D([n$1({type:Boolean,reflect:!0})],exports.AwcInput.prototype,"readonly",2),__decorateClass$D([n$1({type:Boolean,reflect:!0,attribute:"static-error"})],exports.AwcInput.prototype,"staticError",2),__decorateClass$D([r$1()],exports.AwcInput.prototype,"validationMessage",2),__decorateClass$D([e$4("input")],exports.AwcInput.prototype,"validationTarget",2),__decorateClass$D([e$4(".awc-input")],exports.AwcInput.prototype,"input",2),__decorateClass$D([e$4(".awc-input__password")],exports.AwcInput.prototype,"_passwordButton",2),__decorateClass$D([e$4(".awc-input__progress")],exports.AwcInput.prototype,"_progressBar",2),exports.AwcInput=__decorateClass$D([t$1(awcInputTag)],exports.AwcInput);const textareaStyle=i$5`
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
 `;var __defProp$C=Object.defineProperty,__getOwnPropDesc$C=Object.getOwnPropertyDescriptor,__decorateClass$C=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$C(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$C(w,D,q),q};const awcTextAreaTag="awc-textarea";exports.AwcTextarea=class extends FormControlMixin(r$3){constructor(){super(...arguments),this.value="",this.autofocus=!1,this.readonly=!1,this.disabled=!1,this.resize=!1,this.autoheight=!1,this.autocomplete="off",this.rows=2,this.cols=20,this.textAreaId=Math.random().toString(36).substring(2)}_handleInput(){this._autoHeightTextArea(this.textarea),this.value=this.textarea.value,this._onInput.bind(this)}resetFormControl(){this.value=""}_autoHeightTextArea(w){this.autoheight&&!this.resize&&(w.style.height="auto",w.style.height=`${w.scrollHeight}px`)}_onInput(w){this.value=w.target.value,this.dispatchEvent(new InputEvent("input",{composed:!0,bubbles:!0}))}_onChange(w){this.value=w.target.value,this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}updated(w){super.updated(w),w.has("value")&&(this.setValue(this.value),this.textarea.value=this.value)}firstUpdated(){this.textarea.value=this.value,this._autoHeightTextArea(this.textarea)}select(){this.textarea.select()}render(){return x`
       <div class="awc-textarea-container">
         <label for=${this.textAreaId} name="label">${this.label}</label>
         <div class="awc-textarea-wrapper">
           <textarea
             class="awc-textarea"
             id=${this.textAreaId}
             name=${o$2(this.name)}
             placeholder=${o$2(this.placeholder)}
             .value=${l$1(this.value)}
             rows=${o$2(this.rows)}
             cols=${o$2(this.cols)}
             autocomplete="${o$2(this.autocomplete)}"
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
     `}},exports.AwcTextarea.shadowRootOptions={...r$3.shadowRootOptions,delegatesFocus:!0},exports.AwcTextarea.styles=[textareaStyle],__decorateClass$C([n$1({type:String,reflect:!0})],exports.AwcTextarea.prototype,"value",2),__decorateClass$C([n$1({type:String,reflect:!0})],exports.AwcTextarea.prototype,"placeholder",2),__decorateClass$C([n$1({type:String,reflect:!0})],exports.AwcTextarea.prototype,"name",2),__decorateClass$C([n$1({type:String,reflect:!0})],exports.AwcTextarea.prototype,"label",2),__decorateClass$C([n$1({type:Boolean,reflect:!0})],exports.AwcTextarea.prototype,"autofocus",2),__decorateClass$C([n$1({type:Boolean,reflect:!0})],exports.AwcTextarea.prototype,"readonly",2),__decorateClass$C([n$1({type:Boolean,reflect:!0})],exports.AwcTextarea.prototype,"disabled",2),__decorateClass$C([n$1({type:Boolean,reflect:!0})],exports.AwcTextarea.prototype,"resize",2),__decorateClass$C([n$1({type:Boolean,reflect:!0})],exports.AwcTextarea.prototype,"autoheight",2),__decorateClass$C([n$1({type:String,reflect:!0})],exports.AwcTextarea.prototype,"autocomplete",2),__decorateClass$C([n$1({type:Number,reflect:!0})],exports.AwcTextarea.prototype,"rows",2),__decorateClass$C([n$1({type:Number,reflect:!0})],exports.AwcTextarea.prototype,"cols",2),__decorateClass$C([e$4("textarea")],exports.AwcTextarea.prototype,"textarea",2),exports.AwcTextarea=__decorateClass$C([t$1(awcTextAreaTag)],exports.AwcTextarea);const stepsStyle=i$5`
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
 `;var __defProp$B=Object.defineProperty,__getOwnPropDesc$B=Object.getOwnPropertyDescriptor,__decorateClass$B=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$B(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$B(w,D,q),q};exports.AwcSteps=class extends r$3{constructor(){super(...arguments),this.id="stepper-1",this.report=[],this.status=1}_calcSteps(){const w=this.report.length;return Array.from({length:w},(D,F)=>(F+1).toString())}_stepUpdater(){let w=parseInt(this.status.toString(),10);if((isNaN(w)||w<1)&&(w=1,this.status=w),!this.shadowRoot)return;const D=this.shadowRoot.querySelectorAll(".progress-item");if(w<=this.report.length){D.forEach((q,U)=>{const W=U+1,Y=W<w,Q=W===w;q.classList.toggle("progress-item--past",Y),q.classList.toggle("progress-item--current",Q),Y&&q.classList.remove("progress-item--completed")});const F=w===this.report.length;D.forEach(q=>{q.classList.toggle("progress-item--completed",F)}),D.forEach(q=>{q.classList.remove("progress-item--error")})}else D.forEach(F=>{F.classList.add("progress-item--error")})}updated(w){super.updated(w),w.has("status")&&this._stepUpdater()}firstUpdated(){this._calcSteps()}render(){return x`
       <div id=${this.id} class="awc-steps">
         <div class="awc-steps__status">
           <div class="awc-steps__sticker">Шаг ${this.status}</div>
           <div class="awc-steps__report">
             ${this.report[this.status,10-1]}
           </div>
         </div>
         <div class="awc-steps__progress">${this._renderProgress()}</div>
       </div>
     `}_renderProgress(){const w=this.report.length;return Array.from({length:w},()=>x`<div class="progress-item"></div>`)}},exports.AwcSteps.styles=[stepsStyle],__decorateClass$B([n$1({type:String,reflect:!0})],exports.AwcSteps.prototype,"id",2),__decorateClass$B([n$1({type:Array,reflect:!0})],exports.AwcSteps.prototype,"report",2),__decorateClass$B([n$1({type:Number,reflect:!0})],exports.AwcSteps.prototype,"status",2),exports.AwcSteps=__decorateClass$B([t$1("awc-steps")],exports.AwcSteps);const iconStyle=i$5`
 
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
 `;var __defProp$A=Object.defineProperty,__getOwnPropDesc$A=Object.getOwnPropertyDescriptor,__decorateClass$A=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$A(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$A(w,D,q),q};exports.AwcIconLoader=class extends r$3{constructor(){super(...arguments),this.type="icon",this.size="",this.src=""}_setGlobalIcons(){const w=this.type,D=this.size,F=this.src,q=window.__AWC_ICONS||{};return window.__AWC_ICONS=q,q[w]||(q[w]={}),q[w][D]=F,q}firstUpdated(){this._setGlobalIcons()}},__decorateClass$A([n$1({type:String})],exports.AwcIconLoader.prototype,"type",2),__decorateClass$A([n$1({type:String})],exports.AwcIconLoader.prototype,"size",2),__decorateClass$A([n$1({type:String})],exports.AwcIconLoader.prototype,"src",2),exports.AwcIconLoader=__decorateClass$A([t$1("awc-icon-loader")],exports.AwcIconLoader);var __defProp$z=Object.defineProperty,__getOwnPropDesc$z=Object.getOwnPropertyDescriptor,__decorateClass$z=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$z(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$z(w,D,q),q};const awcIconTag="awc-icon";exports.AwcIcon=class extends r$3{constructor(){super(...arguments),this.type="icon",this.size="16",this.name="",this.iconScale=""}_getGlobalIcon(){const w=window.__AWC_ICONS;if(w&&w[this.type]&&w[this.type][this.size])return w[this.type][this.size]}render(){const w=this._getGlobalIcon();if(w)return b`
         <svg
           class="awc-icon"
           style=${this.iconScale?`--awc-icon-size: ${this.iconScale}`:""}
           width=${this.size}
           height=${this.size}
         >
           <use href="${w}#${this.name}"></use>
         </svg>
         <slot></slot>
       `}},exports.AwcIcon.styles=[iconStyle],__decorateClass$z([n$1({type:String,reflect:!0})],exports.AwcIcon.prototype,"type",2),__decorateClass$z([n$1({type:String,reflect:!0})],exports.AwcIcon.prototype,"size",2),__decorateClass$z([n$1({type:String,reflect:!0})],exports.AwcIcon.prototype,"name",2),__decorateClass$z([n$1({type:String,attribute:"icon-scale"})],exports.AwcIcon.prototype,"iconScale",2),exports.AwcIcon=__decorateClass$z([t$1(awcIconTag)],exports.AwcIcon);const tooltipStyle=i$5`
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
 `;var __defProp$y=Object.defineProperty,__getOwnPropDesc$y=Object.getOwnPropertyDescriptor,__decorateClass$y=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$y(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$y(w,D,q),q};const spacingValues$1={XXS:"2",XS:"4",S:"8",SM:"12",M:"16",L:"20",XL:"24",XXL:"32",XXXL:"40"};exports.AwcTooltip=class extends r$3{constructor(){super(...arguments),this.marker=!0,this.message="Tooltip",this.position="top",this.spacing="S",this.strategy="absolute",this.active=!1,this.disabled=!1,this.popperInstance=null,this.tooltipTimeout=null}_createPopperInstance(){!this._nestedElement||!this.shadowRoot||(this.popperInstance=createPopper(this._nestedElement,this._tooltip,{placement:this.position,modifiers:[{name:"offset",options:{offset:[0,spacingValues$1[this.spacing]]}}],strategy:this.strategy}))}_destroyPopperInstance(){this.popperInstance&&(this.popperInstance.destroy(),this.popperInstance=null)}updated(w){super.updated(w),(w.has("active")||w.has("position")||w.has("marker")||w.has("spacing"))&&(this.active?this._createPopperInstance():this._destroyPopperInstance())}_setupTimout(){this.disabled||(this.tooltipTimeout=setTimeout(()=>this.active=!0,500))}_disconnectTimeout(){this.disabled||(clearTimeout(this.tooltipTimeout),this.active=!1)}_onFocus(w){w.target&&!this.disabled&&(this.active=!0)}_onBlur(w){w.target&&!this.disabled&&(this.active=!1)}render(){return x`
       <div class="awc-tooltip__nested">
         <slot
           @mouseenter=${this._setupTimout}
           @mouseleave=${this._disconnectTimeout}
           @focus=${{handleEvent:w=>this._onFocus(w),capture:!0}}
           @blur=${{handleEvent:w=>this._onBlur(w),capture:!0}}
         ></slot>
       </div>
 
       <div class="awc-tooltip ${this.active?"visible":""}" role="tooltip">
         <p class="awc-tooltip__message">${this.message}</p>
         ${this.marker?x`<div class="awc-tooltip__arrow" data-popper-arrow></div>`:""}
       </div>
     `}},exports.AwcTooltip.shadowRootOptions={...r$3.shadowRootOptions,delegatesFocus:!0},exports.AwcTooltip.styles=[tooltipStyle],__decorateClass$y([n$1({type:Boolean,reflect:!0})],exports.AwcTooltip.prototype,"marker",2),__decorateClass$y([n$1({type:String,reflect:!0})],exports.AwcTooltip.prototype,"message",2),__decorateClass$y([n$1({reflect:!0})],exports.AwcTooltip.prototype,"position",2),__decorateClass$y([n$1({type:String,reflect:!0})],exports.AwcTooltip.prototype,"spacing",2),__decorateClass$y([n$1({type:String,reflect:!0})],exports.AwcTooltip.prototype,"strategy",2),__decorateClass$y([n$1({type:Boolean,reflect:!0})],exports.AwcTooltip.prototype,"active",2),__decorateClass$y([n$1({type:Boolean,reflect:!0})],exports.AwcTooltip.prototype,"disabled",2),__decorateClass$y([e$4(".awc-tooltip")],exports.AwcTooltip.prototype,"_tooltip",2),__decorateClass$y([e$4(".awc-tooltip__nested")],exports.AwcTooltip.prototype,"_nestedElement",2),exports.AwcTooltip=__decorateClass$y([t$1("awc-tooltip")],exports.AwcTooltip);/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */class e extends i$1{constructor(w){if(super(w),this.it=E,w.type!==t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(w){if(w===E||w==null)return this._t=void 0,this.it=w;if(w===T)return w;if(typeof w!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(w===this.it)return this._t;this.it=w;const D=[w];return D.raw=D,this._t={_$litType$:this.constructor.resultType,strings:D,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const o$1=e$2(e),selectItemStyle=i$5`
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
 `;var __defProp$x=Object.defineProperty,__getOwnPropDesc$x=Object.getOwnPropertyDescriptor,__decorateClass$x=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$x(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$x(w,D,q),q};const awcSelectItemTag="awc-select-item";exports.AwcSelectItem=class extends FormControlMixin(r$3){constructor(){super(...arguments),this.selected=!1,this.disabled=!1}focus(){this.focusTarget.tabIndex=0,this.focusTarget.focus(),this.onFocus(this.value)}blur(){this.onBlur(this.value),this.focusTarget.tabIndex=-1}select(){this._onSelect([{value:this.value,selected:this.selected}])}_handleEvent(){this._onSelect([{value:this.value,selected:this.selected}]),this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}handleKeydown(w){(w.code==="Enter"||w.code==="Space")&&(this._onClickOption(),w.preventDefault())}_onClickOption(){this.selected=!0,this._handleEvent()}render(){return x`
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
     `}},exports.AwcSelectItem.shadowRootOptions={...r$3.shadowRootOptions,delegatesFocus:!0},exports.AwcSelectItem.styles=[selectItemStyle],__decorateClass$x([n$1({type:Boolean,reflect:!0})],exports.AwcSelectItem.prototype,"selected",2),__decorateClass$x([n$1({type:String,reflect:!0})],exports.AwcSelectItem.prototype,"value",2),__decorateClass$x([n$1({type:Boolean,reflect:!0})],exports.AwcSelectItem.prototype,"disabled",2),__decorateClass$x([n$1({type:Boolean,reflect:!0,attribute:"no-padding"})],exports.AwcSelectItem.prototype,"noPadding",2),__decorateClass$x([event("awc-select-option")],exports.AwcSelectItem.prototype,"_onSelect",2),__decorateClass$x([event("awc-select-option-focus")],exports.AwcSelectItem.prototype,"onFocus",2),__decorateClass$x([event("awc-select-option-blur")],exports.AwcSelectItem.prototype,"onBlur",2),__decorateClass$x([e$4(".awc-item-focus")],exports.AwcSelectItem.prototype,"focusTarget",2),exports.AwcSelectItem=__decorateClass$x([t$1(awcSelectItemTag)],exports.AwcSelectItem);const selectButtomStyle=i$5`
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
 `;var __defProp$w=Object.defineProperty,__getOwnPropDesc$w=Object.getOwnPropertyDescriptor,__decorateClass$w=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$w(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$w(w,D,q),q};const awcSelectButtonTag="awc-select-button",awcSelectButtonEvent="awc-select-button-create";exports.AwcSelectButton=class extends r$3{constructor(){super(...arguments),this.slot="awc-button",this.icon=!1,this.staticButton=!1,this.dynamicButton=!1,this.isClick=!1}_handleClick(){if(this.isClick=!0,this._onClick(this.isClick),this.isClick&&this.textContent||this.label)return this.textContent=""}_handleKeyboard(w){if(w.code==="Enter"&&(this._handleClick(),this.isClick&&w.code&&this.textContent||this.label))return this.textContent=""}_handleLabelOrTextContent(){if(this.textContent&&this.label&&!this.icon)return x`${this.label} «${this.textContent}»`;if(this.textContent&&this.label)return x`${this.textContent}`;if(this.label)return x`${this.label}`}render(){const w=b`
             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C7.44772 2 7 2.44772 7 3V7H3C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9H7V13C7 13.5523 7.44772 14 8 14C8.55228 14 9 13.5523 9 13V9H13C13.5523 9 14 8.55228 14 8C14 7.44772 13.5523 7 13 7H9V3C9 2.44772 8.55228 2 8 2Z" fill="#3761E9"/>
             </svg>
         `;return x`
             <button 
                 class="awc-select-button"
                 @click=${this._handleClick}
                 @keydown=${this._handleKeyboard}
                 label=${this.label}
                 tabindex="0"
                 >
                     ${this.icon?x`${w}`:""}
                     ${this._handleLabelOrTextContent()}
                 <slot></slot>
             </button>
         `}},exports.AwcSelectButton.styles=[selectButtomStyle],__decorateClass$w([n$1({type:String,reflect:!0})],exports.AwcSelectButton.prototype,"slot",2),__decorateClass$w([n$1({type:String,reflect:!0})],exports.AwcSelectButton.prototype,"label",2),__decorateClass$w([n$1({type:Boolean,reflect:!0})],exports.AwcSelectButton.prototype,"icon",2),__decorateClass$w([n$1({type:Boolean,reflect:!0,attribute:"static-button"})],exports.AwcSelectButton.prototype,"staticButton",2),__decorateClass$w([n$1({type:Boolean,reflect:!0,attribute:"dynamic-button"})],exports.AwcSelectButton.prototype,"dynamicButton",2),__decorateClass$w([n$1({type:String})],exports.AwcSelectButton.prototype,"copyLabel",2),__decorateClass$w([n$1()],exports.AwcSelectButton.prototype,"textContent",2),__decorateClass$w([event(awcSelectButtonEvent)],exports.AwcSelectButton.prototype,"_onClick",2),exports.AwcSelectButton=__decorateClass$w([t$1(awcSelectButtonTag)],exports.AwcSelectButton);const selectGroupStyle=i$5`
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
 `;var __defProp$v=Object.defineProperty,__getOwnPropDesc$v=Object.getOwnPropertyDescriptor,__decorateClass$v=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$v(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$v(w,D,q),q};const awcSelectGroupTag="awc-select-group";exports.AwcSelectGroup=class extends r$3{render(){return x`
             <div class='awc-select-group'>
                 <p class='awc-select-group__label'>${this.label}</p>
                 <div class='awc-select-group__content'><slot></slot></div>
             </div>
         `}},exports.AwcSelectGroup.styles=[selectGroupStyle],__decorateClass$v([n$1({type:String,reflect:!0})],exports.AwcSelectGroup.prototype,"label",2),exports.AwcSelectGroup=__decorateClass$v([t$1(awcSelectGroupTag)],exports.AwcSelectGroup);const selectStyle=i$5`
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
 `;var __defProp$u=Object.defineProperty,__getOwnPropDesc$u=Object.getOwnPropertyDescriptor,__decorateClass$u=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$u(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$u(w,D,q),q};const awcSelectTag="awc-select";exports.AwcSelect=class extends FormControlMixin(r$3){constructor(){super(...arguments),this.value="",this.inputPlacholder="",this.html=!1,this.disabled=!1,this.required=!1,this.autoselectOff=!1,this.reset=!1,this.multiple=!1,this.search=!1,this.customError="",this.staticError=!1,this.validationMessage="",this.filteredOptions=[],this.isOptionListReverse=!1,this.popperInstance=null,this._onInvalid=w=>{w.preventDefault(),this.validationTarget.focus()},this.focusedOptionIndex=-1}get options(){return[...this.querySelectorAll(awcSelectItemTag)]}get selectedOptions(){return this.options.filter(w=>w.selected)}get optionGroups(){return[...this.querySelectorAll(awcSelectGroupTag)]}get selectButtons(){return this.querySelector(awcSelectButtonTag)}_toggleOptionsList(){this.selectedOptions.length&&this.multiple?this._open():this.open?this._close():this._open()}_open(){this.open=!0,this._updateHeadContent(),this._createPopperInstance(),requestAnimationFrame(()=>{this.search&&this.open&&this.inputElement.focus()})}_close(){this.open=!1,this.focusedOptionIndex=-1,this._unhiddingOptions(),this._destroyPopperInstance(),this._clearInputValue()}_unhiddingOptions(){this.options.forEach(w=>w.removeAttribute("hidden")),this.optionGroups.forEach(w=>w.removeAttribute("hidden"))}_getItemValueAttribute(w){return w.value}_getItemTextContent(w){var D;return(D=w.textContent)==null?void 0:D.trim()}_getItemHTMLContent(w){return o$1(w.outerHTML)}_updateHeadContent(){this.selectedOptions.forEach(w=>{this.html&&w.outerHTML?(w.setAttribute("no-padding","true"),this.headContent=this._getItemHTMLContent(w)):this.headContent=this._getItemTextContent(w)||this._getItemValueAttribute(w),w.removeAttribute("no-padding")}),this._updateSelectValue()}_updateSelectValue(){this.multiple?this.value=this.selectedOptions.map(w=>this._getItemValueAttribute(w)||this._getItemTextContent(w)):this.selectedOptions.map(w=>this.value=this._getItemValueAttribute(w)||this._getItemTextContent(w)),this._updateFormData()}_singleSelection(w){w&&(this.options.forEach(D=>D.selected=!1),w.selected=!0,this._updateHeadContent(),this._updateChangeEvent())}_multipleSelection(w){this._unhiddingOptions(),this.searchText&&this._clearInputValue(),w&&(w.selected=!0,this._updateHeadContent(),this._updateChangeEvent())}_handleOption(w){const D=w.target;D&&(this._unhiddingOptions(),this.multiple?this._multipleSelection(D):this._singleSelection(D))}_updateChangeEvent(){const w=this.selectedOptions.map(D=>{var F,q;return{value:D.value||((F=D.textContent)==null?void 0:F.trim())||"",text:((q=D.textContent)==null?void 0:q.trim())||"",selected:!0}});this._onChangeSelect(w)}_handleChipsClick(w,D){w.stopPropagation(),this._removeChipsItem(D)}_renderChips(){return this.selectedOptions.map((w,D)=>x`
         <awc-chips
           reset-button
           @awc-chips-reset=${F=>this._handleChipsClick(F,D)}
           @click=${F=>F.stopPropagation()}
         >
           ${this.html?o$1(w.innerHTML):w.textContent}
         </awc-chips>
       `)}_removeChipsItem(w){const D=this.selectedOptions[w];D&&(D.selected=!1,this.selectedOptions.splice(w,1),this._updateHeadContent(),this._updateChangeEvent())}_updateFormData(){const w=new FormData;if(this.multiple&&Array.isArray(this.value))this.selectedOptions.forEach(D=>{this._appendOptionToFormData(w,D)});else if(!this.multiple&&typeof this.value=="string"){const D=this.selectedOptions[0];D&&this._appendOptionToFormData(w,D)}this.setValue(w)}_appendOptionToFormData(w,D){const F=D.value||D.textContent.trim();w.append(this.name,F)}shouldFormValueUpdate(){return Array.isArray(this.value)&&this.multiple?this.value.length>0:this.value!==null&&this.value!==""}validityCallback(){const w=document.createElement("select");return w.required=this.required,w.validationMessage}validationMessageCallback(w){this.customError&&!this.staticError?(this.validationMessage=w,this.validationMessage=this.customError):this.validationMessage=w}_setSelectedElement(){this.selectedOptions.length>=1&&!this.multiple&&(this.selectedOptions.forEach((w,D)=>{D===0?w.selected=!0:w.selected=!1}),this._updateHeadContent())}_setAutoSelectedFirstElement(){this.selectedOptions.length===0&&!this.multiple&&this.options.length>0&&(this.options[0].selected=!0,this._updateHeadContent())}resetFormControl(){this.options.forEach(w=>w.selected=!1),this.value=this.multiple?[]:"",this.headContent="",this.setValue(new FormData),this._onChangeSelect([]),this._close()}_resetButton(){if(this.reset&&this.selectedOptions.length>0)return x`<awc-toolbar-button
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
       </awc-toolbar-button>`}_handleResetClick(w){w.stopPropagation(),this.resetFormControl()}_handleOptionKeyboard(w){if(w.code==="Enter"||w.code==="Space")this._toggleOptionsList(),w.preventDefault(),w.stopPropagation();else if(this.open===!1&&["ArrowDown","ArrowUp"].includes(w.code))this._open(),w.preventDefault();else if(w.code==="Escape")this._close(),w.preventDefault();else if(this.open&&["ArrowDown","ArrowUp"].includes(w.code)){if(this.isOptionListReverse?(w.code==="ArrowUp"&&this.focusedOptionIndex--,w.code==="ArrowDown"&&this.focusedOptionIndex++):(w.code==="ArrowDown"&&this.focusedOptionIndex++,w.code==="ArrowUp"&&this.focusedOptionIndex--),this.search&&this.searchText){if(this.filteredOptions.length===0)return;this.focusedOptionIndex=Math.max(0,Math.min(this.focusedOptionIndex,this.filteredOptions.length-1)),this.filteredOptions[this.focusedOptionIndex].focus()}else{const D=this.options.filter(F=>F.tagName==="AWC-SELECT-ITEM");this.focusedOptionIndex=Math.max(0,Math.min(this.focusedOptionIndex,D.length-1)),D[this.focusedOptionIndex].focus()}this.scrollToFocusedOption(),w.preventDefault()}}scrollToFocusedOption(){const w=this.optionList.children[this.focusedOptionIndex];w&&w.scrollIntoView({block:"nearest"})}_handleDocumentClick(w){w.composedPath().includes(this)||this._close()}_handleInput(){this.searchText=this.inputElement.value,this._filterOptions(),this._buttonSearchTextUpdate(),this._onSearch(this.searchText)}_handleInputKeydown(w){(w.code==="Enter"||w.code==="Space")&&this.open&&w.stopPropagation()}_buttonSearchTextUpdate(){if(this.selectButtons)return this.selectButtons.textContent=this.searchText}_staticCreateButton(){if(this.selectButtons.isClick){const D=this._buttonSearchTextUpdate();this._onCreateOption({value:D,selected:!0,text:D})}}_dynamicCreateOption(){if(this.selectButtons.isClick){const D=this._buttonSearchTextUpdate();this.createSelectItem(D,D,!0),this._onCreateOption({value:D,selected:!0,text:D}),this._clearInputValue()}}createSelectItem(w,D,F){const q=document.createElement(awcSelectItemTag);this.html?q.innerHTML=w:q.textContent=w,q.value=D??w,F&&(q.selected=!0,this.multiple||this.selectedOptions.forEach(U=>U.selected=!1)),this.appendChild(q),this.requestUpdate(),this._updateHeadContent(),this._unhiddingOptions()}handleCreateOption(w){if(this.inputElement){if(w.target&&this.inputElement.value==="")return;{const D=this.selectButtons.staticButton,F=this.selectButtons.dynamicButton;D&&this._staticCreateButton(),F&&this._dynamicCreateOption()}}}_filterOptions(){const w=this.searchText.toLowerCase();this.filteredOptions=this.options.filter(D=>{var U;const F=(U=D.textContent)==null?void 0:U.toLowerCase(),q=F==null?void 0:F.includes(w);return q?D.removeAttribute("hidden"):D.setAttribute("hidden",""),q}),this._filterGroups(),this.scrollToFocusedOption()}_filterGroups(){this.optionGroups.forEach(w=>{Array.from(w.children).some(F=>!F.hasAttribute("hidden"))?w.removeAttribute("hidden"):w.setAttribute("hidden","")})}_showPlaceholderOrSelectItem(){return this.multiple&&this.placeholder?this.selectedOptions.length?this._renderChips():x`<p class="awc-select__placeholder">${this.placeholder}</p>`:this.multiple&&!this.placeholder?this._renderChips():this.headContent?this.headContent:x`<p class="awc-select__placeholder">${this.placeholder}</p>`}_renderInput(){return x`
       <div class="awc-select__search">
         <input
           class="awc-select__input"
           type="text"
           placeholder=${this.inputPlacholder}
           autocomplete="off"
           tabindex="0"
           @input=${this._handleInput}
           @keydown=${w=>this._handleInputKeydown(w)}
           @click=${w=>w.stopPropagation()}
         />
       </div>
     `}_clearInputValue(){this.inputElement&&(this.searchText="",this.inputElement.value="")}_checkingListPosition(){this._selectOptions&&requestAnimationFrame(()=>{this._selectOptions.getAttribute("data-popper-placement")==="top"?this.isOptionListReverse=!0:this.isOptionListReverse=!1})}_createPopperInstance(){this._selectHead&&this._selectOptions&&(this.popperInstance=createPopper(this._selectHead,this._selectOptions,{placement:"bottom-start",strategy:"absolute",modifiers:[{name:"preventOverflow",options:{boundary:this._selectHead}}]}),this.popperInstance.forceUpdate())}_destroyPopperInstance(){var w;(w=this.popperInstance)==null||w.destroy(),this.popperInstance=null}_renderMultipleSelect(){const w={"awc-select":!0,"awc-select--error":this.showError},D={"awc-select__options":!0,"awc-select__options--open":this.open},F={"awc-select__head":!0,"border-radius":!0,"border-radius--reverse":this.isOptionListReverse},q=x`
       <awc-toolbar-button
         @click=${U=>{U.stopPropagation(),this._close()}}
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
     `;return x`<div
         class=${e$1(w)}
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
         <div class="${e$1(F)}">
           <div class="awc-select__content">
             ${this._showPlaceholderOrSelectItem()}
           </div>
           <div class="awc-select__icons">
             ${this._resetButton()} ${q}
           </div>
         </div>
 
         <div class=${e$1(D)}>
           ${this.search?this._renderInput():""}
           <ul
             class="awc-select-list"
             tabindex="${o$2(this.open?void 0:"-1")}"
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
 
       ${this.showError&&this.required&&!this.staticError?x`<span class="awc-select__error">${this.validationMessage}</span>`:this.hint&&!this.staticError?x`<span class="awc-select__hint">${this.hint}</span>`:""}
       ${this.staticError&&this.required&&this.customError?x`<span class="awc-select__error">${this.customError}</span>`:this.hint&&this.staticError?x`<span class="awc-select__hint">${this.hint}</span>`:""} `}_renderSingleSelect(){const w={"awc-select":!0,"awc-select--error":this.showError||this.staticError&&this.required},D={"awc-select__options":!0,"awc-select__options--open":this.open,"awc-select--error":this.showError},F={"awc-select__head":!0,"border-radius":!0,"border-radius--reverse":this.isOptionListReverse},q=x`
       <awc-toolbar-button
         @click=${U=>{U.stopPropagation(),this._toggleOptionsList()}}
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
     `;return x`
       <div
         class=${e$1(w)}
         name=${this.name}
         .value=${this.value}
         tabindex="0"
         ?disabled=${this.disabled}
         ?required=${this.required}
         ?autoselect-off=${this.autoselectOff}
         @click=${this._toggleOptionsList}
         @keydown=${this._handleOptionKeyboard}
       >
         <div class="${e$1(F)}">
           <div class="awc-select__content">
             ${this._showPlaceholderOrSelectItem()}
           </div>
           <div class="awc-select__icons">
             ${this._resetButton()} ${q}
           </div>
         </div>
 
         <div class=${e$1(D)}>
           ${this.search?this._renderInput():""}
 
           <ul
             class="awc-select-list"
             tabindex="${o$2(this.open?void 0:"-1")}"
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
 
       ${this.showError&&this.required&&!this.staticError?x`<span class="awc-select__error">${this.validationMessage}</span>`:this.hint&&!this.staticError?x`<span class="awc-select__hint">${this.hint}</span>`:""}
       ${this.staticError&&this.required&&this.customError?x`<span class="awc-select__error">${this.customError}</span>`:this.hint&&this.staticError?x`<span class="awc-select__hint">${this.hint}</span>`:""}
     `}connectedCallback(){super.connectedCallback(),this.addEventListener("invalid",this._onInvalid),document.addEventListener("click",w=>this._handleDocumentClick(w)),document.addEventListener("DOMContentLoaded",()=>{this._updateHeadContent(),this.autoselectOff?this._setSelectedElement():this._setAutoSelectedFirstElement()})}updated(w){super.updated(w),w.has("open")&&this._checkingListPosition(),this.disabled&&this.open&&this._close(),w.has("searchText")&&this._buttonSearchTextUpdate(),w.has("multiple")&&this._updateHeadContent(),w.has("autoselectOff")&&(this.autoselectOff?this._setSelectedElement():this._setAutoSelectedFirstElement())}render(){return this.multiple?this._renderMultipleSelect():this._renderSingleSelect()}},exports.AwcSelect.formControlValidators=[requiredValidator],exports.AwcSelect.shadowRootOptions={...r$3.shadowRootOptions,delegatesFocus:!0},exports.AwcSelect.styles=[scrollStyle,selectStyle],__decorateClass$u([n$1({type:String,reflect:!0})],exports.AwcSelect.prototype,"name",2),__decorateClass$u([n$1()],exports.AwcSelect.prototype,"value",2),__decorateClass$u([n$1({type:String,reflect:!0})],exports.AwcSelect.prototype,"placeholder",2),__decorateClass$u([n$1({type:String,attribute:"input-placeholder"})],exports.AwcSelect.prototype,"inputPlacholder",2),__decorateClass$u([n$1({type:String,reflect:!0})],exports.AwcSelect.prototype,"hint",2),__decorateClass$u([n$1({type:Boolean,reflect:!0})],exports.AwcSelect.prototype,"html",2),__decorateClass$u([n$1({type:Boolean,reflect:!0})],exports.AwcSelect.prototype,"open",2),__decorateClass$u([n$1({type:Boolean,reflect:!0})],exports.AwcSelect.prototype,"disabled",2),__decorateClass$u([n$1({type:Boolean,reflect:!0})],exports.AwcSelect.prototype,"required",2),__decorateClass$u([n$1({type:Boolean,reflect:!0,attribute:"autoselect-off"})],exports.AwcSelect.prototype,"autoselectOff",2),__decorateClass$u([n$1({type:Boolean,reflect:!0})],exports.AwcSelect.prototype,"reset",2),__decorateClass$u([n$1({type:Boolean,reflect:!0})],exports.AwcSelect.prototype,"multiple",2),__decorateClass$u([n$1({type:Boolean,reflect:!0})],exports.AwcSelect.prototype,"search",2),__decorateClass$u([n$1({reflect:!0,attribute:"custom-error"})],exports.AwcSelect.prototype,"customError",2),__decorateClass$u([n$1({type:Boolean,reflect:!0,attribute:"static-error"})],exports.AwcSelect.prototype,"staticError",2),__decorateClass$u([event("awc-select-search")],exports.AwcSelect.prototype,"_onSearch",2),__decorateClass$u([event("awc-create-option")],exports.AwcSelect.prototype,"_onCreateOption",2),__decorateClass$u([event("awc-select-change")],exports.AwcSelect.prototype,"_onChangeSelect",2),__decorateClass$u([e$4(".awc-select__input")],exports.AwcSelect.prototype,"inputElement",2),__decorateClass$u([e$4(".awc-select")],exports.AwcSelect.prototype,"validationTarget",2),__decorateClass$u([e$4(".awc-select-list")],exports.AwcSelect.prototype,"optionList",2),__decorateClass$u([e$4(".awc-select")],exports.AwcSelect.prototype,"_selectHead",2),__decorateClass$u([e$4(".awc-select__options")],exports.AwcSelect.prototype,"_selectOptions",2),__decorateClass$u([r$1()],exports.AwcSelect.prototype,"validationMessage",2),__decorateClass$u([r$1()],exports.AwcSelect.prototype,"headContent",2),__decorateClass$u([r$1()],exports.AwcSelect.prototype,"searchText",2),__decorateClass$u([r$1()],exports.AwcSelect.prototype,"filteredOptions",2),__decorateClass$u([r$1()],exports.AwcSelect.prototype,"isOptionListReverse",2),exports.AwcSelect=__decorateClass$u([t$1(awcSelectTag)],exports.AwcSelect);const dieStyle=i$5`
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
  */const a=Symbol.for(""),o=O=>{if((O==null?void 0:O.r)===a)return O==null?void 0:O._$litStatic$},l=new Map,n=O=>(w,...D)=>{const F=D.length;let q,U;const W=[],Y=[];let Q,ne=0,oe=!1;for(;ne<F;){for(Q=w[ne];ne<F&&(U=D[ne],(q=o(U))!==void 0);)Q+=q+w[++ne],oe=!0;ne!==F&&Y.push(U),W.push(Q),ne++}if(ne===F&&W.push(w[F]),oe){const ce=W.join("$$lit$$");(w=l.get(ce))===void 0&&(W.raw=W,l.set(ce,w=W)),D=Y}return O(w,...D)},c=n(b);var __defProp$t=Object.defineProperty,__getOwnPropDesc$t=Object.getOwnPropertyDescriptor,__decorateClass$t=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$t(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$t(w,D,q),q};exports.AwcDie=class extends r$3{constructor(){super(...arguments),this.text="",this.placeholder="",this.editing=!1,this.color="--colors-light-primary"}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",this.handleFocus),this.addEventListener("blur",this.handleBlur),this.addEventListener("dblclick",this.handleMouseDown)}handleFocus(){this._onFocus(this.text)}handleBlur(){this._onBlur(this.text),this.stopEditing(),this.triggerChange()}handleMouseDown(){this.startEditing(),this.setCursorToEnd()}handleInput(){this.contentElement&&(this.text=this.contentElement.value)}handleEnterKey(w){w.key==="Enter"&&(w.preventDefault(),this.handleFocus(),this.blur())}setCursorToEnd(){if(this.contentElement){const w=this.contentElement.value.length;this.contentElement.setSelectionRange(w,w)}}startEditing(){this.editing=!0}stopEditing(){this.editing=!1}triggerChange(){this._onChange(this.text)}updated(w){super.updated(w),w.has("editing")?(this._renderEditMode(),this.contentElement&&this.contentElement.focus()):this._renderReadOnlyMode()}_renderEditMode(){return x`
             <input 
                 type='text'
                 class='awc-die__content awc-die__content--edit' 
                 placeholder=${this.placeholder} 
                 .value=${l$1(this.text)} 
                 @input=${this.handleInput}
                 @keyup=${this.handleEnterKey}
             >
         `}_renderReadOnlyMode(){return x`
             <p class='awc-die__content'>${this.text}</p>
         `}_renderIcon(){const w=c`
             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M2 5C1.44772 5 1 5.44772 1 6C1 6.55228 1.44772 7 2 7H14C14.5523 7 15 6.5523 15 6C15 5.44772 14.5523 5 14 5H2ZM2 9C1.44772 9 1 9.44772 1 10C1 10.5523 1.44772 11 2 11H14C14.5523 11 15 10.5523 15 10C15 9.44772 14.5523 9 14 9H2Z" fill="#919BB6"/>
             </svg>
         `;return x`
             <div class='awc-die__icon'>
                 ${w}
             </div>
         `}render(){const w=this.color&&this.color.startsWith("--");return x`
             <div class='awc-die' style=${w?`--awc-die-color: var(${this.color})`:`--awc-die-color: ${this.color}`} >
                 ${this._renderIcon()}
                 <div class='awc-die__main'>
                     ${this.editing?this._renderEditMode():this._renderReadOnlyMode()}
                 </div>
                 <div class='awc-die__slotted'>
                     <slot></slot>
                 </div>
             </div>
         `}},exports.AwcDie.styles=[dieStyle],__decorateClass$t([n$1({type:String})],exports.AwcDie.prototype,"text",2),__decorateClass$t([n$1({type:String})],exports.AwcDie.prototype,"placeholder",2),__decorateClass$t([n$1({type:Boolean,reflect:!0})],exports.AwcDie.prototype,"editing",2),__decorateClass$t([n$1({type:String,attribute:"color"})],exports.AwcDie.prototype,"color",2),__decorateClass$t([event("awc-die-change")],exports.AwcDie.prototype,"_onChange",2),__decorateClass$t([event("awc-die-focus")],exports.AwcDie.prototype,"_onFocus",2),__decorateClass$t([event("awc-die-blur")],exports.AwcDie.prototype,"_onBlur",2),__decorateClass$t([e$4(".awc-die__content--edit")],exports.AwcDie.prototype,"contentElement",2),exports.AwcDie=__decorateClass$t([t$1("awc-die")],exports.AwcDie);const stagerStyle=i$5`
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
 
 `;var __defProp$s=Object.defineProperty,__getOwnPropDesc$s=Object.getOwnPropertyDescriptor,__decorateClass$s=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$s(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$s(w,D,q),q};exports.AwcStager=class extends r$3{constructor(){super(...arguments),this.steps=5,this.current=2,this.stepColor="--colors-light-primary",this._connected=!1}connectedCallback(){super.connectedCallback(),this._connected=!0,this._stepUpdater()}_handleChange(){this._onChange(this.current)}_colorUpdater(w){w&&(this.stepColor.startsWith("--")?w.style.cssText=`background-color: var(${this.stepColor})`:w.style.cssText=`background-color: ${this.stepColor}`)}_stepUpdater(){var F;if(!this._connected)return;let w=this.current;(isNaN(w)||w<1)&&(w=1,this.current=w),((F=this.shadowRoot)==null?void 0:F.querySelectorAll(".awc-stager__item")).forEach((q,U)=>{const Y=U+1<w+1;q.classList.toggle("awc-stager__item--current",Y)&&this._colorUpdater(q)})}attributeChangedCallback(w,D,F){super.attributeChangedCallback(w,D,F),w==="step-color"&&F!==null&&(this.stepColor=F,this._stepUpdater())}updated(w){super.updated(w),w.has("current")&&(this._stepUpdater(),this._handleChange())}render(){return x`
       <div class="awc-stager">
         <div class="awc-stager__progress">${this._renderProgress()}</div>
       </div>
     `}_renderProgress(){return Array.from({length:this.steps},()=>x`<div class="awc-stager__item"></div>`)}},exports.AwcStager.styles=[stagerStyle],__decorateClass$s([n$1({type:Number,reflect:!0})],exports.AwcStager.prototype,"steps",2),__decorateClass$s([n$1({type:Number,reflect:!0})],exports.AwcStager.prototype,"current",2),__decorateClass$s([n$1({type:String,attribute:"step-color"})],exports.AwcStager.prototype,"stepColor",2),__decorateClass$s([event("awc-stager-change")],exports.AwcStager.prototype,"_onChange",2),exports.AwcStager=__decorateClass$s([t$1("awc-stager")],exports.AwcStager);const chipsStyle=i$5`
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
 `;var __defProp$r=Object.defineProperty,__getOwnPropDesc$r=Object.getOwnPropertyDescriptor,__decorateClass$r=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$r(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$r(w,D,q),q};exports.AwcChips=class extends r$3{constructor(){super(...arguments),this.resetButton=!1}_checkedAwcAvatar(){this.slotElement.assignedNodes().filter(D=>D.nodeName.toLowerCase()==="awc-avatar").length===1?this.chips.classList.add("awc-chips__avatar"):this.chips.classList.remove("awc-chips__avatar")}handleResetClick(){this._onRemoveChips(this.resetButton)}updated(w){super.updated(w),this._checkedAwcAvatar()}render(){return x`
             <div class='awc-chips'>
                 <slot @slotchange=${this._checkedAwcAvatar}></slot>
                 ${this.resetButton?x`
                     <svg class="awc-chips__reset" @click=${this.handleResetClick} width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                         <path fill-rule="evenodd" clip-rule="evenodd" d="M5.70713 4.29291C5.3166 3.90239 4.68344 3.90239 4.29291 4.29291C3.90239 4.68344 3.90239 5.3166 4.29291 5.70713L6.58237 7.99658L4.29185 10.294C3.90191 10.6851 3.90286 11.3182 4.29397 11.7082C4.68508 12.0981 5.31824 12.0972 5.70818 11.7061L7.99659 9.4108L10.2929 11.7071C10.6834 12.0976 11.3166 12.0976 11.7071 11.7071C12.0976 11.3166 12.0976 10.6834 11.7071 10.2929L9.40868 7.99447L11.6902 5.70607C12.0802 5.31496 12.0792 4.68179 11.6881 4.29185C11.297 3.90191 10.6638 3.90286 10.2739 4.29397L7.99447 6.58025L5.70713 4.29291Z"/>
                     </svg>`:""}
             </div>
         `}},exports.AwcChips.styles=[chipsStyle],__decorateClass$r([n$1({type:Boolean,reflect:!0,attribute:"reset-button"})],exports.AwcChips.prototype,"resetButton",2),__decorateClass$r([event("awc-chips-reset")],exports.AwcChips.prototype,"_onRemoveChips",2),__decorateClass$r([e$4(".awc-chips")],exports.AwcChips.prototype,"chips",2),__decorateClass$r([e$4("slot")],exports.AwcChips.prototype,"slotElement",2),exports.AwcChips=__decorateClass$r([t$1("awc-chips")],exports.AwcChips);const userInfoStyle=i$5`
   :host {
     display: inline-flex;
 
     --awc-user-info-name-color: var(--awc-user-info-name-theme);
     --awc-user-info-status-color: var(--awc-user-info-status-theme);
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
     font: var(--awc-font-text-regular-14);
     color: var(--awc-user-info-name-color);
   }
 
   .awc-user-info__status {
     font: var(--awc-font-caption-2-regular);
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
 `;var __defProp$q=Object.defineProperty,__getOwnPropDesc$q=Object.getOwnPropertyDescriptor,__decorateClass$q=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$q(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$q(w,D,q),q};exports.AwcUserInfo=class extends r$3{constructor(){super(...arguments),this.reverse=!1,this.status="none",this.target="_self",this.avatatColor=AvatarColor.GlobalBlue400,this.avatarSize=AvatarSize.size32}render(){return this.href?x`
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
                   ${this.name?x`<p class="awc-user-info__name">${this.name}</p>`:""}
                   ${this.description?x`<p class="awc-user-info__status">
                         ${this.description}
                       </p>`:""}
                 </div>
               </div>
             </a>
           </div>
         `:x`
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
                   ${this.name?x`<p class="awc-user-info__name">${this.name}</p>`:""}
                   ${this.description?x`<p class="awc-user-info__status">
                         ${this.description}
                       </p>`:""}
                 </div>
               </div>
             </div>
           </div>
         `}},exports.AwcUserInfo.styles=[userInfoStyle],__decorateClass$q([n$1({type:String,reflect:!0})],exports.AwcUserInfo.prototype,"name",2),__decorateClass$q([n$1({type:String,reflect:!0})],exports.AwcUserInfo.prototype,"description",2),__decorateClass$q([n$1({type:Boolean,reflect:!0})],exports.AwcUserInfo.prototype,"reverse",2),__decorateClass$q([n$1({type:String,reflect:!0,attribute:"avatar-status"})],exports.AwcUserInfo.prototype,"status",2),__decorateClass$q([n$1({type:String,attribute:"avatar-image"})],exports.AwcUserInfo.prototype,"avatarLink",2),__decorateClass$q([n$1({type:String})],exports.AwcUserInfo.prototype,"target",2),__decorateClass$q([n$1({type:String,attribute:"avatar-custom-color"})],exports.AwcUserInfo.prototype,"avatarCustomColor",2),__decorateClass$q([n$1({type:String})],exports.AwcUserInfo.prototype,"href",2),__decorateClass$q([n$1({type:String,attribute:"avatar-color"})],exports.AwcUserInfo.prototype,"avatatColor",2),__decorateClass$q([n$1({type:String,attribute:"avatar-size"})],exports.AwcUserInfo.prototype,"avatarSize",2),exports.AwcUserInfo=__decorateClass$q([t$1("awc-user-info")],exports.AwcUserInfo);const awcButtonGroupStyle=i$5`
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
 `,awcButtonGroupItemStyle=i$5`
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
 `;var __defProp$p=Object.defineProperty,__getOwnPropDesc$p=Object.getOwnPropertyDescriptor,__decorateClass$p=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$p(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$p(w,D,q),q};const awcButtonGroupItemTag="awc-button-group-item";exports.AwcButtonGroupItem=class extends r$3{constructor(){super(...arguments),this.expanded=!1,this.readonly=!1,this.disabled=!1}render(){return x`
       <button
         ?readonly=${this.readonly}
         ?expanded=${this.expanded}
         ?disabled=${this.disabled}
         class="awc-button-group-item ${this.position}"
       >
         <slot></slot>
       </button>
     `}},exports.AwcButtonGroupItem.styles=[awcButtonGroupItemStyle],__decorateClass$p([n$1({type:Boolean,reflect:!0})],exports.AwcButtonGroupItem.prototype,"expanded",2),__decorateClass$p([n$1({type:Boolean,reflect:!0})],exports.AwcButtonGroupItem.prototype,"readonly",2),__decorateClass$p([n$1({type:Boolean,reflect:!0})],exports.AwcButtonGroupItem.prototype,"disabled",2),__decorateClass$p([n$1({type:String})],exports.AwcButtonGroupItem.prototype,"position",2),exports.AwcButtonGroupItem=__decorateClass$p([t$1(awcButtonGroupItemTag)],exports.AwcButtonGroupItem);var __defProp$o=Object.defineProperty,__getOwnPropDesc$o=Object.getOwnPropertyDescriptor,__decorateClass$o=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$o(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$o(w,D,q),q};const awcButtonGroupTag="awc-button-group";exports.AwcButtonGroup=class extends r$3{constructor(){super(...arguments),this.disabled=!1}get buttons(){return[...this.querySelectorAll(awcButtonGroupItemTag)]}_checkInternalButtonGroup(){this.buttons&&this.buttons.length&&this._combiningButtons(this.buttons)}_combiningButtons(w){if(!w||w.length===0)return;let D=-1;w.forEach((F,q)=>{q===0?F.position="first":q===w.length-1?F.position="last":(F.position="inner",D=q)}),D!==-1&&(w[D].position="inner inner-last")}render(){return x`
       <div class="awc-button-group">
         <slot @slotchange="${this._checkInternalButtonGroup}"></slot>
       </div>
     `}},exports.AwcButtonGroup.styles=[awcButtonGroupStyle],__decorateClass$o([n$1({type:Boolean,reflect:!0})],exports.AwcButtonGroup.prototype,"disabled",2),exports.AwcButtonGroup=__decorateClass$o([t$1(awcButtonGroupTag)],exports.AwcButtonGroup);const accordionItemStyle=i$5`
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
 `;var __defProp$n=Object.defineProperty,__getOwnPropDesc$n=Object.getOwnPropertyDescriptor,__decorateClass$n=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$n(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$n(w,D,q),q};const awcAccordionItemTag="awc-accordion-item";exports.AwcAccordionItem=class extends r$3{constructor(){super(...arguments),this.active=!1,this.disabled=!1}_toggleActive(){this.disabled||(this.active=!this.active,this._onActive(this.active))}render(){const w=b`
             <svg class="awc-accordion-item__arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289Z" fill="#919BB6"/>
             </svg>
         `;return x`
       <div class="awc-accordion-item">
         <button
           tabindex="0"
           @click=${this._toggleActive}
           class="awc-accordion-item__button"
           type="button"
         >
           ${this.title} ${w}
         </button>
 
         <section
           class="awc-accordion-item__wrapper ${this.active?"active":""}"
         >
           <div ?inert=${!this.active} class="awc-accordion-item__content">
             <slot></slot>
           </div>
         </section>
       </div>
     `}},exports.AwcAccordionItem.styles=[accordionItemStyle],__decorateClass$n([n$1({type:String,reflect:!0})],exports.AwcAccordionItem.prototype,"title",2),__decorateClass$n([n$1({type:Boolean,reflect:!0})],exports.AwcAccordionItem.prototype,"active",2),__decorateClass$n([n$1({type:Boolean,reflect:!0})],exports.AwcAccordionItem.prototype,"disabled",2),__decorateClass$n([event("awc-accordion-toggle")],exports.AwcAccordionItem.prototype,"_onActive",2),exports.AwcAccordionItem=__decorateClass$n([t$1(awcAccordionItemTag)],exports.AwcAccordionItem);const accordionStyle=i$5`
     :host{
         display: block;
     }
 
     :host([disabled]){
         opacity: .5;
         pointer-events: none;
         touch-action: none;
     }
 
 `;var __defProp$m=Object.defineProperty,__getOwnPropDesc$m=Object.getOwnPropertyDescriptor,__decorateClass$m=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$m(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$m(w,D,q),q};const awcAccordionTag="awc-accordion";exports.AwcAccordion=class extends r$3{constructor(){super(...arguments),this.disabled=!1,this.autoclose=!1}get accordionItems(){return[...this.querySelectorAll(awcAccordionItemTag)]}_autocloseAccordionItem(w){if(!this.autoclose)return;const D=w.target;D.disabled&&this.disabled||(D.active?(this.accordionItems.forEach(F=>F.active=!1),D.active=!0):(D.active=!0,D.active&&(D.active=!1)))}_handleAccordionItem(w){this._autocloseAccordionItem(w)}_shutdownAllAccordionItems(){this.disabled?this.accordionItems.forEach(w=>w.disabled=!0):this.accordionItems.forEach(w=>w.disabled=!1)}updated(w){super.updated(w),w.has("disabled")&&this._shutdownAllAccordionItems()}render(){return x`
       <div ?disabled=${this.disabled} class="awc-accordion">
         <slot @awc-accordion-toggle=${this._handleAccordionItem}></slot>
       </div>
     `}},exports.AwcAccordion.styles=[accordionStyle],__decorateClass$m([n$1({type:Boolean,reflect:!0})],exports.AwcAccordion.prototype,"disabled",2),__decorateClass$m([n$1({type:Boolean,reflect:!0})],exports.AwcAccordion.prototype,"autoclose",2),exports.AwcAccordion=__decorateClass$m([t$1(awcAccordionTag)],exports.AwcAccordion);const awcRangeStyle=i$5`
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
 `,awcRangeItemStyle=i$5`
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
 `;var __defProp$l=Object.defineProperty,__getOwnPropDesc$l=Object.getOwnPropertyDescriptor,__decorateClass$l=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$l(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$l(w,D,q),q};const awcRangeItemTag="awc-range-item";exports.AwcRangeItem=class extends r$3{constructor(){super(...arguments),this.value="0"}render(){return x`
       <li value=${this.value} class="awc-range-item">
         <p class="awc-range-item__text"><slot></slot></p>
       </li>
     `}},exports.AwcRangeItem.styles=[awcRangeItemStyle],__decorateClass$l([n$1({type:String,reflect:!0})],exports.AwcRangeItem.prototype,"value",2),exports.AwcRangeItem=__decorateClass$l([t$1(awcRangeItemTag)],exports.AwcRangeItem);var __defProp$k=Object.defineProperty,__getOwnPropDesc$k=Object.getOwnPropertyDescriptor,__decorateClass$k=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$k(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$k(w,D,q),q};exports.AwcRange=class extends FormControlMixin(r$3){constructor(){super(...arguments),this.name="0",this.value="0",this.marker=!1,this.min=0,this.max=100,this.step=1}get rangeItem(){return[...this.querySelectorAll(awcRangeItemTag)]}updated(w){super.updated(w),w.has("value")&&this.setValue(this.value)}_handleMarkers(w){const D=w.target;!D||D.tagName!=="AWC-RANGE-ITEM"||(this.value=D.value,this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0})))}_handleInputValue(w){const D=w.target;this.value=D.value,this.dispatchEvent(new Event("input",{composed:!0,bubbles:!0}))}_handleChangeValue(w){const D=w.target;this.value=D.value,this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}render(){return x`
       <div class="awc-range-container">
         ${this.label?x`<label class="awc-range-label">${this.label}: <p class="awc-range-label__value">${this.value}</p></label>`:""}
         <input
           class="awc-range"
           type="range"
           name=${this.name}
           .value=${l$1(this.value)}
           max=${this.max}
           min=${this.min}
           step=${this.step}
           ?marker=${this.marker}
           @input=${this._handleInputValue}
           @change=${this._handleChangeValue}
         />
         ${this.marker?x`
               <ul class="awc-range__markers" >
                 <slot @click=${this._handleMarkers}></slot>
               </ul>
             `:""}
       </div>
     `}},exports.AwcRange.styles=[awcRangeStyle],__decorateClass$k([n$1({type:String,reflect:!0})],exports.AwcRange.prototype,"name",2),__decorateClass$k([n$1({type:String,reflect:!0})],exports.AwcRange.prototype,"value",2),__decorateClass$k([n$1({type:String,reflect:!0})],exports.AwcRange.prototype,"label",2),__decorateClass$k([n$1({type:Boolean,reflect:!0})],exports.AwcRange.prototype,"marker",2),__decorateClass$k([n$1({type:Boolean,reflect:!0})],exports.AwcRange.prototype,"disabled",2),__decorateClass$k([n$1({type:Number,reflect:!0})],exports.AwcRange.prototype,"min",2),__decorateClass$k([n$1({type:Number,reflect:!0})],exports.AwcRange.prototype,"max",2),__decorateClass$k([n$1({type:Number,reflect:!0})],exports.AwcRange.prototype,"step",2),exports.AwcRange=__decorateClass$k([t$1("awc-range")],exports.AwcRange);const progressBarStyle=i$5`
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
 `;var __defProp$j=Object.defineProperty,__getOwnPropDesc$j=Object.getOwnPropertyDescriptor,__decorateClass$j=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$j(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$j(w,D,q),q};const awcProgressBarTag="awc-progress-bar";exports.AwcProgressBar=class extends r$3{constructor(){super(...arguments),this.value=0,this.max=100,this.label="",this.size="medium",this.hidePercent=!1}_validateAndUpdateValues(){(isNaN(this.value)||this.value<0)&&(this.value=0),(isNaN(this.max)||this.max<0)&&(this.max=100),this.value>this.max&&(this.value=this.max,this._onSuccesEvent()),this._updateFillerWidth()}_updateFillerWidth(){const w=this.value/this.max*100;this.fillerElement&&(this.fillerElement.style.width=`${w}%`)}_onSuccesEvent(){const w={value:this.value,maxReached:!0};this._onSucces(w),this._updateFillerWidth()}updated(w){super.updated(w),(w.has("value")||w.has("max"))&&this._validateAndUpdateValues()}render(){const w=this.hidePercent?"":"%";return x`
             <div 
             ?hide-percent=${this.hidePercent}
             size=${this.size}
             class="awc-progress-bar">
                 ${this.label?x`<div class="awc-progress-bar__label">${this.label}: <span class="awc-progress-bar__value">${this.value}${w}</span></div>`:""}
                 <div class="awc-progress-bar__track">
                     <div class="awc-progress-bar__filler"></div>
                 </div>
             </div>
         `}},exports.AwcProgressBar.styles=[progressBarStyle],__decorateClass$j([n$1({type:Number,reflect:!0})],exports.AwcProgressBar.prototype,"value",2),__decorateClass$j([n$1({type:Number,reflect:!0})],exports.AwcProgressBar.prototype,"max",2),__decorateClass$j([n$1({type:String,reflect:!0})],exports.AwcProgressBar.prototype,"label",2),__decorateClass$j([n$1({type:String,reflect:!0})],exports.AwcProgressBar.prototype,"size",2),__decorateClass$j([n$1({type:Boolean,reflect:!0,attribute:"hide-percent"})],exports.AwcProgressBar.prototype,"hidePercent",2),__decorateClass$j([event("awc-progress-bar-success")],exports.AwcProgressBar.prototype,"_onSucces",2),__decorateClass$j([e$4(".awc-progress-bar__filler")],exports.AwcProgressBar.prototype,"fillerElement",2),exports.AwcProgressBar=__decorateClass$j([t$1(awcProgressBarTag)],exports.AwcProgressBar);const emptyStateStyle=i$5`
     
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
 `;var __defProp$i=Object.defineProperty,__getOwnPropDesc$i=Object.getOwnPropertyDescriptor,__decorateClass$i=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$i(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$i(w,D,q),q};const awcEmptyStateTag$1="awc-empty-state";exports.AwcEmptyState=class extends r$3{constructor(){super(...arguments),this.size="large"}get icons(){return[...this.querySelectorAll(awcIconTag)]}get buttons(){return[...this.querySelectorAll(awcButtonTag)]}_scalingIcon(){this.icons&&this.icons.forEach(w=>{this.size==="large"?w.iconScale="78px":w.iconScale="48px"})}_setCurrentButtons(){this.buttons&&this.buttons.forEach(w=>{this.size==="large"?w.size="large":w.size="regular",w.variant="primary",w.background="blue"})}updated(w){super.updated(w),this._scalingIcon(),this._setCurrentButtons()}render(){return x`
       <div class="awc-empty-state">
         <div class="awc-empty-state__head">
           <slot @slotchange="${this._scalingIcon}" name="icon"></slot>
         </div>
         <div class="awc-empty-state__main">
           ${this.head?x`<h3 class="awc-empty-state__title">${this.head}</h3>`:""}
           <slot></slot>
         </div>
         <div class="awc-empty-state__buttons">
           <slot @slotchange="${this._setCurrentButtons}" name="button"></slot>
         </div>
         <div class="awc-empty-state__links">
           <slot name="link"></slot>
         </div>
       </div>
     `}},exports.AwcEmptyState.styles=[emptyStateStyle],__decorateClass$i([n$1({type:String,reflect:!0})],exports.AwcEmptyState.prototype,"head",2),__decorateClass$i([n$1({type:String,reflect:!0})],exports.AwcEmptyState.prototype,"size",2),exports.AwcEmptyState=__decorateClass$i([t$1(awcEmptyStateTag$1)],exports.AwcEmptyState);const emptyStateLinkStyle=i$5`
 
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
 `;var __defProp$h=Object.defineProperty,__getOwnPropDesc$h=Object.getOwnPropertyDescriptor,__decorateClass$h=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$h(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$h(w,D,q),q};const awcEmptyStateTag="awc-empty-state-link";exports.AwcEmptyStateLink=class extends r$3{constructor(){super(...arguments),this.target="_self"}render(){return this.href?x`
     <a
       class="awc-empty-state-link"
       href=${this.href}
       target=${this.target}
       tabindex="0"
       >
         <slot></slot>
     </a>
     `:x`
     <div
       class="awc-empty-state-link"
       href=${this.href}
       target=${this.target}
       tabindex="0"
       >
         <slot></slot>
     </div>
     `}},exports.AwcEmptyStateLink.styles=[emptyStateLinkStyle],__decorateClass$h([n$1({type:String,reflect:!0})],exports.AwcEmptyStateLink.prototype,"href",2),__decorateClass$h([n$1({type:String,reflect:!0})],exports.AwcEmptyStateLink.prototype,"target",2),exports.AwcEmptyStateLink=__decorateClass$h([t$1(awcEmptyStateTag)],exports.AwcEmptyStateLink);const tagStyle=i$5`
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
 
 `;var __defProp$g=Object.defineProperty,__getOwnPropDesc$g=Object.getOwnPropertyDescriptor,__decorateClass$g=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$g(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$g(w,D,q),q};const awcTagTag="awc-tag";exports.AwcTag=class extends r$3{constructor(){super(...arguments),this.baseColor="colors-light-secondary",this.variant="square"}pickTextColorBasedOnBgColor(w,D,F){if(w){let q=w.charAt(0)==="#"?w.substring(1,7):w;const U=parseInt(q.substring(0,2),16),W=parseInt(q.substring(2,4),16),Y=parseInt(q.substring(4,6),16);return U*.299+W*.587+Y*.114>186?F:D}}render(){const w=this.variant==="square"?this.pickTextColorBasedOnBgColor(this.customColor||this.baseColor,"--awc-tag-text-color: #FFFFFF","--awc-tag-text-color: #55555A"):"",D=this.customColor?this.customColor:`var(--${this.baseColor})`;return x`
       <div class="awc-tag" style="--awc-tag-color: ${D}">
         <p class="awc-tag__text" style=${w}><slot></slot></p>
       </div>
     `}},exports.AwcTag.styles=[tagStyle],__decorateClass$g([n$1({type:String,reflect:!0,attribute:"custom-color"})],exports.AwcTag.prototype,"customColor",2),__decorateClass$g([n$1({type:String,reflect:!0,attribute:"base-color"})],exports.AwcTag.prototype,"baseColor",2),__decorateClass$g([n$1({type:String,reflect:!0})],exports.AwcTag.prototype,"variant",2),exports.AwcTag=__decorateClass$g([t$1(awcTagTag)],exports.AwcTag);const colorPickerStyle=i$5`
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
 `;var __defProp$f=Object.defineProperty,__getOwnPropDesc$f=Object.getOwnPropertyDescriptor,__decorateClass$f=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$f(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$f(w,D,q),q};const awcColorPickerTag="awc-color-picker";exports.AwcColorPicker=class extends FormControlMixin(r$3){constructor(){super(...arguments),this.active=!1,this.reset=!1,this.BASE_PALETTE_COLORS=["#ED3A3A","#F74F4F","#FB7C28","#F8AF28","#FED34A","#81D83C","#5FB829","#1EA679","#35D3AC","#44CADA","#2FB9CE","#52ACF5","#2A8CE3","#3761E9","#5D7EF7","#8360F4","#704AE5","#AC3EC7","#C764DF","#E44662","#FF7188","#919BB6","#55555A","#26263E"],this.activeTab=0}get tabs(){return[...this.querySelectorAll(awcTabTag)]}_triggerChangeEvent(w){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}_handleColorSelection(w){var q;const D=w.currentTarget;if(!D||!D.hasAttribute("value"))return;this.colorItems.forEach(U=>U.classList.remove("active-color")),D.classList.add("active-color");const F=(q=D.getAttribute("value"))==null?void 0:q.toLowerCase();F&&(this.value=F,this._triggerChangeEvent(w),this._onChangeColor(this.value))}_setCustomColorValue(w){this.value=this._inputColor.value}_setDefaultColorInBasePalette(){this.colorItems.forEach(w=>w.classList.remove("active-color")),this.BASE_PALETTE_COLORS.forEach(w=>{this.value&&w===this.value.toUpperCase()&&this.colorItems.forEach(D=>{D.getAttribute("value")===w&&D.classList.add("active-color")})})}_checkAssignedAwcTabs(){if(!this.tabs)return;let w=-1;this.tabs.forEach((D,F)=>{D.active&&(w=F),D.addEventListener("click",()=>{this.activeTab=F,console.log("CLICK")}),D.addEventListener("change",q=>q.stopPropagation())}),w===-1?(this.tabs[0]&&(this.tabs[0].active=!0),this.activeTab=0):this.activeTab=w,this._checkAwcTabsLength()}_checkAwcTabsLength(){this.tabs.length>2&&console.warn("Maximum number of tabs exceeded")}connectedCallback(){super.connectedCallback(),document.addEventListener("DOMContentLoaded",()=>{this._checkAssignedAwcTabs()})}_resetColorPicker(){this._inputColor.value="#000000",this.value="",this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.colorItems.forEach(w=>w.classList.remove("active-color"))}_colorPickerOpenEvent(w){w.detail&&(this.active=!0)}_colorPickerCloseEvent(w){w.detail||(this.active=!1)}updated(w){super.updated(w),w.has("value")&&this.setValue(this.value),this._setDefaultColorInBasePalette(),this.active&&this._popover.addEventListener("focusout",this._handleFocusOut.bind(this))}_handleFocusOut(w){const D=w.relatedTarget;if(!D)return;const F=this._popover.contains(D),q=this.tabs.some(U=>U.contains(D));!F&&!q&&this.close()}open(){this._popover.show()}close(){this._popover.hide()}_togglePopover(){this.active?this.close():this.open()}_triggerKeyboard(w){(w.code==="Enter"||w.code==="Space")&&(this.active?this.close():this.open())}render(){const w=b`
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
     `,D=b`
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289Z" fill="#919BB6"/>
       </svg>
     `;return x`
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
             ${D}
           </div>
         </div>
 
         <div class="awc-color-picker" slot="awc-popover-content">
           <div class="awc-color-pciker__header">
             <div class="awc-color-picker__tabs">
               <slot @slotchange=${this._checkAssignedAwcTabs}></slot>
               ${this.reset&&this._slot&&this._slot.assignedElements().length?x`
                     <div
                       tabindex="0"
                       @click=${this._resetColorPicker}
                       class="awc-color-picker__reset"
                     >
                        ${w}
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
                 ${this.BASE_PALETTE_COLORS.map(F=>x`
                     <button
                       @click=${this._handleColorSelection}
                       value=${F}
                       class="awc-color-picker__color"
                       style="background-color: ${F}"
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
     `}},exports.AwcColorPicker.styles=[colorPickerStyle],__decorateClass$f([n$1({type:String,reflect:!0})],exports.AwcColorPicker.prototype,"name",2),__decorateClass$f([n$1({type:String,reflect:!0})],exports.AwcColorPicker.prototype,"value",2),__decorateClass$f([n$1({type:Boolean,reflect:!0})],exports.AwcColorPicker.prototype,"active",2),__decorateClass$f([n$1({type:Boolean,reflect:!0})],exports.AwcColorPicker.prototype,"reset",2),__decorateClass$f([r$1()],exports.AwcColorPicker.prototype,"BASE_PALETTE_COLORS",2),__decorateClass$f([r$1()],exports.AwcColorPicker.prototype,"activeTab",2),__decorateClass$f([r(".awc-color-picker__color")],exports.AwcColorPicker.prototype,"colorItems",2),__decorateClass$f([e$4("input")],exports.AwcColorPicker.prototype,"_inputColor",2),__decorateClass$f([e$4("slot")],exports.AwcColorPicker.prototype,"_slot",2),__decorateClass$f([e$4("awc-popover")],exports.AwcColorPicker.prototype,"_popover",2),__decorateClass$f([event("awc-color-picker-change")],exports.AwcColorPicker.prototype,"_onChangeColor",2),exports.AwcColorPicker=__decorateClass$f([t$1(awcColorPickerTag)],exports.AwcColorPicker);const notifierStyle=i$5`
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
 `;var __defProp$e=Object.defineProperty,__getOwnPropDesc$e=Object.getOwnPropertyDescriptor,__decorateClass$e=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$e(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$e(w,D,q),q};const awcNotifierTag="awc-notifier";exports.AwcNotifier=class extends r$3{_onChange(w){w.target&&this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}render(){const w=x`
             <svg class="awc-notifier__icon" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L10.5858 12L7.29295 15.2929C6.90243 15.6834 6.90243 16.3166 7.29295 16.7071C7.68348 17.0976 8.31664 17.0976 8.70717 16.7071L12 13.4142L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L13.4142 12L16.7072 8.70711C17.0977 8.31658 17.0977 7.68342 16.7072 7.29289C16.3166 6.90237 15.6835 6.90237 15.293 7.29289L12 10.5858L8.70711 7.29289Z"/>
             </svg>
         `;return x`
             <div class="awc-notifier">
                 <div class="awc-notifier__wrapper">
                     <div class="awc-notifier__main">
                         <slot></slot>
                         <slot name="button"></slot>
                     </div>
                     <button @click=${this._onChange} class="awc-notifier__button" type="button">
                         ${w}
                     </button>
                 </div>
             </div>
        `}},exports.AwcNotifier.styles=[notifierStyle],exports.AwcNotifier=__decorateClass$e([t$1(awcNotifierTag)],exports.AwcNotifier);const cardStyle=i$5`
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
 `;var __defProp$d=Object.defineProperty,__getOwnPropDesc$d=Object.getOwnPropertyDescriptor,__decorateClass$d=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$d(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$d(w,D,q),q};const awcCardTag="awc-card";exports.AwcCard=class extends r$3{constructor(){super(...arguments),this.target="_self",this.arrow=!1,this._isModuleIcon=!1}_changeBackgroundIconModule(){this._iconSlot.assignedElements().filter(F=>F.type==="module").length?this._isModuleIcon=!0:this._isModuleIcon=!1}render(){const w=b`
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M9.29289 6.29289C8.90237 6.68342 8.90237 7.31658 9.29289 7.70711L13.5858 12L9.29289 16.2929C8.90237 16.6834 8.90237 17.3166 9.29289 17.7071C9.68342 18.0976 10.3166 18.0976 10.7071 17.7071L15.7071 12.7071C16.0976 12.3166 16.0976 11.6834 15.7071 11.2929L10.7071 6.29289C10.3166 5.90237 9.68342 5.90237 9.29289 6.29289Z" fill="#919BB6"/>
             </svg>
         `;return x`
             ${this.href?x`
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
                             ${this.arrow?w:""}    
                         </div>    
                     </div>
                     <div class="awc-card__main">
                         ${this.title?x`<p class="awc-card__title">${this.title}</p>`:""}
                         ${this.subtitle?x`<p class="awc-card__subtitle">${this.subtitle}</p>`:""}
                     </div>
                     <div class="awc-card__footer">
                         <slot></slot>
                     </div>
                 </a>
                 `:x`
                     <div class="awc-card" tabIndex="0">
                         <div class="awc-card__head">
                             <div class="awc-card__icon ${this._isModuleIcon?"awc-card__icon--module":""}" style=${`--awc-card-color: ${this.iconColor}`}>
                                 <slot @slotchange=${this._changeBackgroundIconModule} name="icon"></slot>
                             </div>
                             <div class="awc-card__additional">
                                 <slot name="toolbar"></slot>
                                 ${this.arrow?w:""}    
                             </div>
                         </div>
                         <div class="awc-card__main">
                             ${this.title?x`<p class="awc-card__title">${this.title}</p>`:""}
                             ${this.subtitle?x`<p class="awc-card__subtitle">${this.subtitle}</p>`:""}
                         </div>
                         <div class="awc-card__footer">
                             <slot></slot>
                         </div>
                 </div>
             `}
         `}},exports.AwcCard.styles=[cardStyle],__decorateClass$d([n$1({type:String,reflect:!0})],exports.AwcCard.prototype,"title",2),__decorateClass$d([n$1({type:String,reflect:!0})],exports.AwcCard.prototype,"subtitle",2),__decorateClass$d([n$1({type:String,reflect:!0})],exports.AwcCard.prototype,"href",2),__decorateClass$d([n$1({type:String})],exports.AwcCard.prototype,"target",2),__decorateClass$d([n$1({type:String,reflect:!0,attribute:"icon-color"})],exports.AwcCard.prototype,"iconColor",2),__decorateClass$d([n$1({type:Boolean,reflect:!0})],exports.AwcCard.prototype,"arrow",2),__decorateClass$d([e$4("slot[name='icon']")],exports.AwcCard.prototype,"_iconSlot",2),__decorateClass$d([r$1()],exports.AwcCard.prototype,"_isModuleIcon",2),exports.AwcCard=__decorateClass$d([t$1(awcCardTag)],exports.AwcCard);const skeletonStyle=i$5`
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
 `;var __defProp$c=Object.defineProperty,__getOwnPropDesc$c=Object.getOwnPropertyDescriptor,__decorateClass$c=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$c(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$c(w,D,q),q};const awcSkeletonTag="awc-skeleton";exports.AwcSkeleton=class extends r$3{constructor(){super(...arguments),this.effect="pulse",this.rounded="rounded",this.color="primary"}render(){return x`
             <div class="awc-skeleton">
                 <div class="awc-skeleton__indicator"></div>
             </div>
         `}},exports.AwcSkeleton.styles=[skeletonStyle],__decorateClass$c([n$1({type:String,reflect:!0})],exports.AwcSkeleton.prototype,"effect",2),__decorateClass$c([n$1({type:String,reflect:!0})],exports.AwcSkeleton.prototype,"rounded",2),__decorateClass$c([n$1({type:String,reflect:!0})],exports.AwcSkeleton.prototype,"color",2),exports.AwcSkeleton=__decorateClass$c([t$1(awcSkeletonTag)],exports.AwcSkeleton);const paginationStyle=i$5`
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
 `;var __defProp$b=Object.defineProperty,__getOwnPropDesc$b=Object.getOwnPropertyDescriptor,__decorateClass$b=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$b(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$b(w,D,q),q};const awcPaginationTag="awc-pagination";exports.AwcPagination=class extends r$3{constructor(){super(...arguments),this._activePage=1,this._itemsPerPage=1,this._totalItemsCount=1,this.first=!1,this.last=!1,this._maxVisibleItems=5,this._ellipsisVisible=!1}get activePage(){return this._activePage}set activePage(w){const D=Math.ceil(this._totalItemsCount/this._itemsPerPage),F=Math.min(Math.max(1,w||1),D),q=this._activePage;F!==q&&(this._activePage=F,this.requestUpdate("activePage",q))}get itemsPerPage(){return this._itemsPerPage}set itemsPerPage(w){const D=Math.max(1,w||1),F=this._itemsPerPage;D!==F&&(this._itemsPerPage=D,this.requestUpdate("itemsPerPage",F))}get totalItemsCount(){return this._totalItemsCount}set totalItemsCount(w){const D=Math.max(1,w||1),F=this._totalItemsCount;D!==F&&(this._totalItemsCount=D,this.requestUpdate("totalItemsCount",F))}_generatePages(w){const D=[],F=Math.floor(this._maxVisibleItems/2);let q=Math.max(1,this.activePage-F),U=Math.min(w,this.activePage+F);this.activePage<=F?U=Math.min(w,this._maxVisibleItems):this.activePage>w-F&&(q=Math.max(1,w-this._maxVisibleItems+1)),w===U&&this._maxVisibleItems!==w&&(w&&U&&q)!==1&&(D.push(1),D.push("..."),this._ellipsisVisible=!0);for(let W=q;W<=U;W++)D.push(W);return this._maxVisibleItems===U&&this._maxVisibleItems!==w&&(this._ellipsisVisible=!0,D.push("..."),D.push(w)),D}_nextPage(){const w=Math.ceil(this.totalItemsCount/this.itemsPerPage);this.activePage<w&&this.activePage++,this._onChange()}_previousPage(){this.activePage>1&&this.activePage--,this._onChange()}_onPageClick(w){typeof w=="number"&&w===this.activePage||typeof w=="number"&&(this.activePage=w,this._onChange())}_handleKeydown(w){var D;if(w.key==="Enter"||w.key===" "){const F=(D=this.shadowRoot)==null?void 0:D.activeElement;if(F!=null&&F.classList.contains("awc-pagination__button--prev"))this._previousPage();else if(F!=null&&F.classList.contains("awc-pagination__button--next"))this._nextPage();else if(F!=null&&F.classList.contains("awc-pagination__button--first"))this._firstPage();else if(F!=null&&F.classList.contains("awc-pagination__button--last"))this._lastPage();else{const q=parseInt(F.textContent,10);this._onPageClick(q)}this._onChange()}}_firstPage(){this.activePage=1,this._onChange()}_lastPage(){const w=Math.ceil(this.totalItemsCount/this.itemsPerPage);this.activePage=w,this._onChange()}_onChange(){this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleKeydown)}disconnectedCallback(){this.removeEventListener("keydown",this._handleKeydown),super.disconnectedCallback()}render(){const w=Math.ceil(this.totalItemsCount/this.itemsPerPage),D=this._generatePages(w),F=x`
             <span role="button" @keydown=${this._handleKeydown} @click=${this._previousPage} tabIndex="0" class="awc-pagination__button awc-pagination__button--prev">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7071 6.29289C15.0976 6.68342 15.0976 7.31658 14.7071 7.70711L10.4142 12L14.7071 16.2929C15.0976 16.6834 15.0976 17.3166 14.7071 17.7071C14.3166 18.0976 13.6834 18.0976 13.2929 17.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L13.2929 6.29289C13.6834 5.90237 14.3166 5.90237 14.7071 6.29289Z" fill="#919BB6"/>
                 </svg>
             </span>
         `,q=x`
             <span role="button" @keydown=${this._handleKeydown} @click=${this._nextPage} tabIndex="0" class="awc-pagination__button awc-pagination__button--next">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M9.29289 6.29289C8.90237 6.68342 8.90237 7.31658 9.29289 7.70711L13.5858 12L9.29289 16.2929C8.90237 16.6834 8.90237 17.3166 9.29289 17.7071C9.68342 18.0976 10.3166 18.0976 10.7071 17.7071L15.7071 12.7071C16.0976 12.3166 16.0976 11.6834 15.7071 11.2929L10.7071 6.29289C10.3166 5.90237 9.68342 5.90237 9.29289 6.29289Z" fill="#919BB6"/>
                 </svg>
             </span>
         `,U=x`
             <span role="button" @click=${this._firstPage} @keydown=${this._handleKeydown} tabIndex="0" class="awc-pagination__button awc-pagination__button--first">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7071 16.2929C17.0976 16.6834 17.0976 17.3166 16.7071 17.7071C16.3166 18.0976 15.6834 18.0976 15.2929 17.7071L10.2929 12.7071C10.1054 12.5196 10 12.2652 10 12C10 11.7348 10.1054 11.4804 10.2929 11.2929L15.2929 6.29289C15.6834 5.90237 16.3166 5.90237 16.7071 6.29289C17.0976 6.68342 17.0976 7.31658 16.7071 7.70711L12.4142 12L16.7071 16.2929ZM8.00004 17C8.00004 17.5523 7.55232 18 7.00004 18C6.44775 18 6.00004 17.5523 6.00004 17V7C6.00004 6.44772 6.44775 6 7.00004 6C7.55232 6 8.00004 6.44772 8.00004 7V17Z" fill="#919BB6"/>
                 </svg>
             </span>
         `,W=x`
             <span role="button" @click=${this._lastPage} tabIndex="0" class="awc-pagination__button awc-pagination__button--last">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29293 16.2929C6.90241 16.6834 6.90241 17.3166 7.29293 17.7071C7.68345 18.0976 8.31662 18.0976 8.70714 17.7071L13.7071 12.7071C13.8947 12.5196 14 12.2652 14 12C14 11.7348 13.8947 11.4804 13.7071 11.2929L8.70714 6.29289C8.31662 5.90237 7.68345 5.90237 7.29293 6.29289C6.90241 6.68342 6.90241 7.31658 7.29293 7.70711L11.5858 12L7.29293 16.2929ZM16 17C16 17.5523 16.4477 18 17 18C17.5523 18 18 17.5523 18 17V7C18 6.44771 17.5523 6 17 6C16.4477 6 16 6.44771 16 7V17Z" fill="#919BB6"/>
                 </svg>
             </span>
         `;return x`
             <nav class="awc-pagination" aria-label="Pagination">
                 ${this.first?U:""}
                 ${this.activePage>1?F:""}
             
                 <ul class="awc-pagination__list">
                     ${D.map(Y=>x`
                         <li>
                             <span 
                                 class="awc-pagination__item ${Y===this.activePage?"active":""}"
                                 tabIndex="0" 
                                 role="button"
                                 aria-label="Page ${Y}"
                                 @click=${()=>this._onPageClick(Y)}
                             >${Y}</span>
                         </li>
                     `)}
                 </ul>
 
                 ${this.activePage<w?q:""}
                 ${this.last?W:""}
             </nav>
         `}},exports.AwcPagination.styles=[paginationStyle],__decorateClass$b([n$1({type:Number,reflect:!0,attribute:"active-page"})],exports.AwcPagination.prototype,"activePage",1),__decorateClass$b([n$1({type:Number,reflect:!0,attribute:"items-per-page"})],exports.AwcPagination.prototype,"itemsPerPage",1),__decorateClass$b([n$1({type:Number,reflect:!0,attribute:"total-items-count"})],exports.AwcPagination.prototype,"totalItemsCount",1),__decorateClass$b([n$1({type:Boolean,reflect:!0})],exports.AwcPagination.prototype,"first",2),__decorateClass$b([n$1({type:Boolean,reflect:!0})],exports.AwcPagination.prototype,"last",2),exports.AwcPagination=__decorateClass$b([t$1(awcPaginationTag)],exports.AwcPagination);const headerStyle=i$5`
 
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
 `;var __defProp$a=Object.defineProperty,__getOwnPropDesc$a=Object.getOwnPropertyDescriptor,__decorateClass$a=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$a(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$a(w,D,q),q};const awcHeaderTag="awc-header";exports.AwcHeader=class extends r$3{render(){return x`
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
         `}},exports.AwcHeader.styles=[headerStyle],exports.AwcHeader=__decorateClass$a([t$1(awcHeaderTag)],exports.AwcHeader);const modalStyles=i$5`
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
 `;var __defProp$9=Object.defineProperty,__getOwnPropDesc$9=Object.getOwnPropertyDescriptor,__decorateClass$9=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$9(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$9(w,D,q),q};const awcModalTag="awc-modal";exports.AwcModal=class extends r$3{constructor(){super(...arguments),this.opened=!1,this.customizable=!1,this._isEmptyButtonSlot=!0,this._html=document.querySelector("html"),this._keyClosing=this._handleKeyClosing.bind(this),this._clickOutside=this._handleClickOutside.bind(this)}get tabsGroup(){return this.querySelector(awcTabsGroupTag)}_handleKeyClosing(w){w.key==="Escape"&&this.opened&&this.close()}_handleClickOutside(w){w.composedPath().includes(this.shadowRoot.querySelector(".awc-modal__content"))||this.close()}_toggleScrollLock(){this.opened?this._html.style.overflow="hidden":this._html.style.removeProperty("overflow")}_disableTabsDivider(){this.tabsGroup&&(this.tabsGroup.noDivider=!0)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this._keyClosing),this.addEventListener("click",this._clickOutside)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._keyClosing),this.removeEventListener("click",this._clickOutside)}updated(w){super.updated(w),w.has("opened")&&(this._toggleScrollLock(),this._disableTabsDivider(),this.opened?(this._onInert(),this._modalOpenEvent(this.opened)):(this._removeInert(),this._modalCloseEvent(this.opened))),(w.has("opened")||w.has("slottedButtons"))&&this._checkSlottedButton()}_onInert(){const w=D=>{D.parentNode&&(Array.from(D.parentNode.childNodes).forEach(F=>{F!==D&&F.nodeType===Node.ELEMENT_NODE&&(F.inert=!0)}),D.parentNode!==document.body&&w(D.parentNode))};w(this)}_removeInert(){document.querySelectorAll("[inert]").forEach(w=>{w.inert=!1})}get awcButtons(){return[...this.querySelectorAll("awc-button")]}_checkSlottedButton(){this.awcButtons.filter(D=>D.getAttribute("slot")==="awc-modal-button").length?this._isEmptyButtonSlot=!1:(this._isEmptyButtonSlot=!0,this.description="")}open(){this.opened=!0}close(){this.opened=!1}_renderCloseIcon(){return b`
             <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289Z"/>
             </svg>
         `}render(){const w=x`
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
         `;return this.customizable?x`
             <div class="awc-modal">
                     <div class="awc-modal__content"> 
                         <div class="awc-modal-container">
                             <slot></slot> 
                         </div>
                     </div>
                 </div>
             `:x`
                 <div class="awc-modal">
                     <div class="awc-modal__content"> 
                         <div class="awc-modal-container">
                             ${this.heading?w:""}
                             <div class="awc-modal__body">
                                 <slot></slot>
                             </div>
                             <div class="awc-modal__footer ${this._isEmptyButtonSlot?"awc-modal__footer--popup":""}">
                                 ${this.description?x`<p class="awc-modal__description">${this.description}</p>`:x`<slot name="awc-modal-description"></slot>`}
                                 <div class="awc-modal__buttons">
                                     <slot name="awc-modal-button"></slot>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             `}},exports.AwcModal.styles=[modalStyles,scrollStyle],__decorateClass$9([n$1({type:String,reflect:!0})],exports.AwcModal.prototype,"heading",2),__decorateClass$9([n$1({type:String,reflect:!0})],exports.AwcModal.prototype,"description",2),__decorateClass$9([n$1({type:Boolean,reflect:!0})],exports.AwcModal.prototype,"opened",2),__decorateClass$9([n$1({type:Boolean,reflect:!0})],exports.AwcModal.prototype,"customizable",2),__decorateClass$9([r("slot[name='awc-modal-button']")],exports.AwcModal.prototype,"slottedButtons",2),__decorateClass$9([r$1()],exports.AwcModal.prototype,"_isEmptyButtonSlot",2),__decorateClass$9([event("awc-modal-open")],exports.AwcModal.prototype,"_modalOpenEvent",2),__decorateClass$9([event("awc-modal-close")],exports.AwcModal.prototype,"_modalCloseEvent",2),exports.AwcModal=__decorateClass$9([t$1(awcModalTag)],exports.AwcModal);const popoverStyle=i$5`
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
 `;var __defProp$8=Object.defineProperty,__getOwnPropDesc$8=Object.getOwnPropertyDescriptor,__decorateClass$8=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$8(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$8(w,D,q),q};const awcPopoverTag="awc-popover",spacingValues={XXS:"2",XS:"4",S:"8",SM:"12",M:"16",L:"20",XL:"24",XXL:"32",XXXL:"40"};exports.AwcPopover=class extends r$3{constructor(){super(...arguments),this.position="top",this.spacing="S",this.strategy="absolute",this.triggerType="click",this.active=!1,this.disabled=!1,this.noPadding=!1,this.popperInstance=null,this._hoverTimeout=null,this._handleOutsideClick=w=>{w.composedPath().includes(this)||this.hide()},this._onMouseEnter=()=>{this.disabled||(this._hoverTimeout&&clearTimeout(this._hoverTimeout),this.active=!0)},this._onMouseLeave=()=>{this.disabled||(this._hoverTimeout=window.setTimeout(()=>this.active=!1,200))},this._onFocus=()=>{this.disabled||(this.active=!0)},this._onBlur=()=>{this.disabled||(this.active=!1)}}disconnectedCallback(){super.disconnectedCallback(),this._removeOutsideClickHandler()}_createPopperInstance(){this._nestedElement&&this._popoverElement&&(this.popperInstance=createPopper(this._nestedElement,this._popoverElement,{placement:this.position,modifiers:[{name:"offset",options:{offset:[0,spacingValues[this.spacing]]}}],strategy:this.strategy}))}_destroyPopperInstance(){var w;(w=this.popperInstance)==null||w.destroy(),this.popperInstance=null}_addOutsideClickHandler(){document.addEventListener("click",this._handleOutsideClick)}_removeOutsideClickHandler(){document.removeEventListener("click",this._handleOutsideClick)}_setupEventListeners(){if(this._removeEventListeners(),!this.disabled)switch(this.triggerType){case"click":this._nestedElement.addEventListener("click",this.show.bind(this));break;case"hover":this._nestedElement.addEventListener("mouseenter",this._onMouseEnter),this._nestedElement.addEventListener("mouseleave",this._onMouseLeave),this._popoverElement.addEventListener("mouseenter",this._onMouseEnter),this._popoverElement.addEventListener("mouseleave",this._onMouseLeave);break;case"focus":this._nestedElement.addEventListener("focus",this._onFocus,!0),this._nestedElement.addEventListener("blur",this._onBlur,!0);break}}_removeEventListeners(){this._nestedElement.removeEventListener("focus",this._onFocus,!0),this._nestedElement.removeEventListener("blur",this._onBlur,!0),this._nestedElement.removeEventListener("mouseenter",this._onMouseEnter),this._nestedElement.removeEventListener("mouseleave",this._onMouseLeave),this._popoverElement.removeEventListener("mouseenter",this._onMouseEnter),this._popoverElement.removeEventListener("mouseleave",this._onMouseLeave)}updated(w){super.updated(w),w.has("active")&&(this.active?this._createPopperInstance():this._destroyPopperInstance(),this.active?this._popoverOpenEvent(this.active):this._popoverCloseEvent(this.active)),(w.has("triggerType")||w.has("disabled"))&&this._setupEventListeners()}show(){this.disabled||(this.active=!0,this._addOutsideClickHandler())}hide(){this.disabled||(this.active=!1,this._removeOutsideClickHandler())}render(){const w={"awc-popover":!0,"awc-popover--active":this.active};return x`
             <div class="awc-popover__nested">
                 <slot></slot>
             </div>
             <div class=${e$1(w)}>
                 <slot name="awc-popover-content"></slot>
             </div>
         `}},exports.AwcPopover.shadowRootOptions={...r$3.shadowRootOptions,delegatesFocus:!0},exports.AwcPopover.styles=[popoverStyle],__decorateClass$8([n$1({reflect:!0})],exports.AwcPopover.prototype,"position",2),__decorateClass$8([n$1({type:String,reflect:!0})],exports.AwcPopover.prototype,"spacing",2),__decorateClass$8([n$1({type:String,reflect:!0})],exports.AwcPopover.prototype,"strategy",2),__decorateClass$8([n$1({type:String,reflect:!0,attribute:"trigger-type"})],exports.AwcPopover.prototype,"triggerType",2),__decorateClass$8([n$1({type:Boolean,reflect:!0})],exports.AwcPopover.prototype,"active",2),__decorateClass$8([n$1({type:Boolean,reflect:!0})],exports.AwcPopover.prototype,"disabled",2),__decorateClass$8([n$1({type:Boolean,reflect:!0,attribute:"no-padding"})],exports.AwcPopover.prototype,"noPadding",2),__decorateClass$8([event("awc-popover-open")],exports.AwcPopover.prototype,"_popoverOpenEvent",2),__decorateClass$8([event("awc-popover-close")],exports.AwcPopover.prototype,"_popoverCloseEvent",2),__decorateClass$8([e$4(".awc-popover")],exports.AwcPopover.prototype,"_popoverElement",2),__decorateClass$8([e$4(".awc-popover__nested")],exports.AwcPopover.prototype,"_nestedElement",2),exports.AwcPopover=__decorateClass$8([t$1(awcPopoverTag)],exports.AwcPopover);const tableWrapperStyles=i$5``;var __defProp$7=Object.defineProperty,__getOwnPropDesc$7=Object.getOwnPropertyDescriptor,__decorateClass$7=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$7(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$7(w,D,q),q};const awcTableWrapperTag="awc-table-wrapper";exports.AwcTableWrapper=class extends r$3{createRenderRoot(){return this}render(){return x``}},exports.AwcTableWrapper.styles=[tableWrapperStyles],exports.AwcTableWrapper=__decorateClass$7([t$1(awcTableWrapperTag)],exports.AwcTableWrapper);const dialogStyle=i$5`
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
 `;var __defProp$6=Object.defineProperty,__getOwnPropDesc$6=Object.getOwnPropertyDescriptor,__decorateClass$6=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$6(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$6(w,D,q),q};const awcDialogTag="awc-dialog";var DialogVariant=(O=>(O.info="info",O.error="error",O))(DialogVariant||{});const DIALOG_ICONS={infoIcon:b`
     <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 42C33.2696 42 42 33.2696 42 22.5C42 11.7304 33.2696 3 22.5 3C11.7304 3 3 11.7304 3 22.5C3 33.2696 11.7304 42 22.5 42ZM22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45ZM21 9.5C21 8.67157 21.6716 8 22.5 8C23.3284 8 24 8.67157 24 9.5V28.5C24 29.3284 23.3284 30 22.5 30C21.6716 30 21 29.3284 21 28.5V9.5ZM22.5 37C23.3284 37 24 36.3284 24 35.5C24 34.6716 23.3284 34 22.5 34C21.6716 34 21 34.6716 21 35.5C21 36.3284 21.6716 37 22.5 37Z" fill="white"/>
     </svg>
     `,errorIcon:b`
     <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 42C33.2696 42 42 33.2696 42 22.5C42 11.7304 33.2696 3 22.5 3C11.7304 3 3 11.7304 3 22.5C3 33.2696 11.7304 42 22.5 42ZM22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45ZM14.1809 13.6699C13.6817 14.1691 13.6817 14.9786 14.1809 15.4778L20.9474 22.2444L14.181 29.0108C13.6817 29.51 13.6817 30.3195 14.181 30.8187C14.6802 31.318 15.4897 31.318 15.9889 30.8187L22.7554 24.0523L29.5218 30.8187C30.0211 31.318 30.8305 31.318 31.3298 30.8187C31.829 30.3195 31.829 29.51 31.3298 29.0108L24.5633 22.2444L31.3298 15.4778C31.8291 14.9786 31.8291 14.1691 31.3298 13.6699C30.8306 13.1706 30.0211 13.1706 29.5219 13.6699L22.7554 20.4364L15.9888 13.6699C15.4896 13.1706 14.6802 13.1706 14.1809 13.6699Z" fill="white"/>
     </svg>
     `};exports.AwcDialog=class extends r$3{constructor(){super(...arguments),this.variant="info",this.opened=!1,this._clickOutside=this._handleClickOutside.bind(this)}_handleClickOutside(w){w.composedPath().includes(this.shadowRoot.querySelector(".awc-dialog__content"))||this.close()}_lockBody(){const w=document.querySelector("body");this.opened?(w.style.overflow="hidden",w.style.touchAction="none"):(w.style.removeProperty("overflow"),w.style.removeProperty("touch-action"))}_onInert(){const w=D=>{D.parentNode&&(Array.from(D.parentNode.childNodes).forEach(F=>{F!==D&&F.nodeType===Node.ELEMENT_NODE&&(F.inert=!0)}),D.parentNode!==document.body&&w(D.parentNode))};w(this)}_removeInert(){document.querySelectorAll("[inert]").forEach(w=>{w.inert=!1})}_setCurrentStyleAwcButtonInSlot(){this._slotButtons.assignedElements().forEach(w=>{const D=w;D.size="large"})}open(){this.opened=!0,this._onOpening(this.opened)}close(){this.opened=!1,this._onClosing(this.opened)}_closingOnEscape(w){this.opened&&w.key==="Escape"&&this.close()}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._clickOutside),document.addEventListener("DOMContentLoaded",()=>{this.opened?(this._setCurrentStyleAwcButtonInSlot(),this._onInert()):this._removeInert()})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._clickOutside)}updated(w){super.updated(w),w.has("opened")&&(this.opened?(this._setCurrentStyleAwcButtonInSlot(),this._onInert(),this._dialogContent.focus()):this._removeInert(),this._lockBody())}render(){const w=this.variant==="info"?DIALOG_ICONS.infoIcon:DIALOG_ICONS.errorIcon;return x`
            <div @keydown=${this._closingOnEscape} tabindex="-1" class="awc-dialog">
                 <div tabindex="${this.opened?0:-1}" class="awc-dialog__content" variant=${this.variant}> 
                     <div class="awc-dialog__body">
                         <div class="awc-dialog__icon">
                             ${w}
                         </div>      
                         <div class="awc-dialog__text">
                             ${this.heading?x`<p class="awc-dialog__heading">${this.heading}</p>`:""}
                             ${this.description?x`<p class="awc-dialog__description">${this.description}</p>`:""}
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
         `}},exports.AwcDialog.shadowRootOptions={...r$3.shadowRootOptions,delegatesFocus:!0},exports.AwcDialog.styles=[dialogStyle],__decorateClass$6([n$1({type:String,reflect:!0})],exports.AwcDialog.prototype,"heading",2),__decorateClass$6([n$1({type:String,reflect:!0})],exports.AwcDialog.prototype,"description",2),__decorateClass$6([n$1({type:String,reflect:!0})],exports.AwcDialog.prototype,"variant",2),__decorateClass$6([n$1({type:Boolean,reflect:!0})],exports.AwcDialog.prototype,"opened",2),__decorateClass$6([event("awc-dialog-open")],exports.AwcDialog.prototype,"_onOpening",2),__decorateClass$6([event("awc-dialog-close")],exports.AwcDialog.prototype,"_onClosing",2),__decorateClass$6([e$4("slot[name='awc-dialog-button']")],exports.AwcDialog.prototype,"_slotButtons",2),__decorateClass$6([e$4(".awc-dialog__content")],exports.AwcDialog.prototype,"_dialogContent",2),exports.AwcDialog=__decorateClass$6([t$1(awcDialogTag)],exports.AwcDialog);const kr=class kr{static createDialog(w={}){if(this.currentDialog&&this.currentDialog.opened)return null;const{heading:D="Title",description:F="",variant:q=DialogVariant.info,buttons:U=[],timer:W=0}=w,Y=document.createElement("awc-dialog");return Y.heading=D,Y.description=F,Y.variant=q,W>0&&setTimeout(()=>{Y.close()},W),U.forEach(Q=>{const ne=document.createElement("awc-button");ne.textContent=Q.text,ne.variant=Q.variant,ne.background=Q.background,ne.addEventListener("click",()=>{Q.onClick(),Y.close()}),ne.setAttribute("slot","awc-dialog-button"),Y.appendChild(ne)}),document.body.appendChild(Y),Y.open(),this.currentDialog=Y,Y.addEventListener("awc-dialog-close",()=>{document.body.removeChild(Y),this.currentDialog=null},{once:!0}),Y}static info(w){this.createDialog({...w,variant:DialogVariant.info})||console.warn("A dialog is already open.")}static error(w){this.createDialog({...w,variant:DialogVariant.error})||console.warn("A dialog is already open.")}static sweetAlertAdapter(w,D){if(this.currentDialog&&this.currentDialog.opened){console.warn("A dialog is already open.");return}const{title:F="",text:q="",variant:U=DialogVariant.info,showCancelButton:W=!1,confirmButtonText:Y="OK",cancelButtonText:Q="Cancel",timer:ne=0,...oe}=w,ce=[];ce.push({text:Y,variant:"primary",background:"blue",onClick:()=>{D&&D(!0)}}),W&&ce.push({text:Q,variant:"transparent",background:"gray",onClick:()=>{D&&D(!1)}}),this.createDialog({heading:F,description:q,variant:U,buttons:ce,timer:ne,...oe})||console.warn("A dialog is already open.")}};kr.currentDialog=null;let AwcDialogService=kr;window.showAwcDialog={info:AwcDialogService.info.bind(AwcDialogService),error:AwcDialogService.error.bind(AwcDialogService),sweetAlert:AwcDialogService.sweetAlertAdapter.bind(AwcDialogService)};const stackStyle=i$5`
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
 `;var __defProp$5=Object.defineProperty,__getOwnPropDesc$5=Object.getOwnPropertyDescriptor,__decorateClass$5=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$5(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$5(w,D,q),q};const awcStackTag="awc-stack";exports.AwcStack=class extends r$3{constructor(){super(...arguments),this.flexDirection="row",this.alignItems="start",this.gap="s",this.isInline=!1,this.fullWidth=!1}render(){return x`<slot></slot>`}},exports.AwcStack.styles=[stackStyle],__decorateClass$5([n$1({type:String,reflect:!0,attribute:"flex-direction"})],exports.AwcStack.prototype,"flexDirection",2),__decorateClass$5([n$1({type:String,reflect:!0,attribute:"align-items"})],exports.AwcStack.prototype,"alignItems",2),__decorateClass$5([n$1({type:String,reflect:!0,attribute:"justify-content"})],exports.AwcStack.prototype,"justifyContent",2),__decorateClass$5([n$1({type:String,reflect:!0})],exports.AwcStack.prototype,"gap",2),__decorateClass$5([n$1({type:String,reflect:!0,attribute:"flex-wrap"})],exports.AwcStack.prototype,"flexWrap",2),__decorateClass$5([n$1({type:Boolean,reflect:!0,attribute:"inline-flex"})],exports.AwcStack.prototype,"isInline",2),__decorateClass$5([n$1({type:Boolean,reflect:!0,attribute:"full-width"})],exports.AwcStack.prototype,"fullWidth",2),exports.AwcStack=__decorateClass$5([t$1(awcStackTag)],exports.AwcStack);const splitButtonStyle=i$5`
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
 `;var __defProp$4=Object.defineProperty,__getOwnPropDesc$4=Object.getOwnPropertyDescriptor,__decorateClass$4=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$4(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$4(w,D,q),q};const awcSplitButtonTag="awc-split-button";exports.AwcSplitButton=class extends r$3{constructor(){super(...arguments),this.menuOpen=!1}_dropdownClose(w){w.detail.menuOpen||this.splitButtonClose()}splitButtonOpen(){this.menuOpen=!0,this._splitButtonOpened({menuOpen:this.menuOpen})}splitButtonClose(){this.menuOpen=!1,this._splitButtonClosed({menuOpen:this.menuOpen})}_handleDropdown(){this.menuOpen?this.splitButtonClose():this.splitButtonOpen()}render(){return x`
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
     `}},exports.AwcSplitButton.styles=splitButtonStyle,__decorateClass$4([n$1({type:Boolean,reflect:!0,attribute:"menu-open"})],exports.AwcSplitButton.prototype,"menuOpen",2),__decorateClass$4([event("awc-split-button-close")],exports.AwcSplitButton.prototype,"_splitButtonClosed",2),__decorateClass$4([event("awc-split-button-open")],exports.AwcSplitButton.prototype,"_splitButtonOpened",2),exports.AwcSplitButton=__decorateClass$4([t$1(awcSplitButtonTag)],exports.AwcSplitButton);const awcTripleToggleStyle=i$5`
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
 `;var __defProp$3=Object.defineProperty,__getOwnPropDesc$3=Object.getOwnPropertyDescriptor,__decorateClass$3=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$3(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$3(w,D,q),q};const awcTripleTogglerTag="awc-triple-toggler";exports.AwcTripleToggler=class extends r$3{constructor(){super(...arguments),this.state="first"}_setState(w){this.state=w}_handleKeydown(w){if(w.key==="ArrowLeft"||w.key==="ArrowRight")switch(w.preventDefault(),this.state){case"first":w.key==="ArrowRight"&&this._setState("second");break;case"second":w.key==="ArrowLeft"&&this._setState("first"),w.key==="ArrowRight"&&this._setState("third");break;case"third":w.key==="ArrowLeft"&&this._setState("second");break}}updated(w){super.updated(w),w.has("state")&&this._onChangeState(this.state)}render(){return x`
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
     `}},exports.AwcTripleToggler.styles=awcTripleToggleStyle,__decorateClass$3([n$1({type:String,reflect:!0})],exports.AwcTripleToggler.prototype,"state",2),__decorateClass$3([event("awc-triple-toggler-change")],exports.AwcTripleToggler.prototype,"_onChangeState",2),exports.AwcTripleToggler=__decorateClass$3([t$1(awcTripleTogglerTag)],exports.AwcTripleToggler);const awcIconButtonStyles=i$5`
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
 
     :host([disabled]) {
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
 `;var __defProp$2=Object.defineProperty,__getOwnPropDesc$2=Object.getOwnPropertyDescriptor,__decorateClass$2=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$2(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$2(w,D,q),q};const awcIocnButtonTag="awc-icon-button";exports.AwcIconButton=class extends r$3{constructor(){super(...arguments),this.size="24",this.type="submit",this.target="_self",this.disabled=!1}render(){const w=x`
             <button 
                 ?disabled=${this.disabled}
                 size=${this.size}
                 type=${this.type} 
                 class="awc-icon-button">
                 <slot></slot>
             </button>
         `,D=x`
             <a 
                ?disabled=${this.disabled}
                size=${this.size}
                href=${this.href} 
                target=${this.target} 
                class="awc-icon-button">
                 <slot></slot>
             </a>
         `;return this.href?D:w}},exports.AwcIconButton.styles=awcIconButtonStyles,__decorateClass$2([n$1({type:String,reflect:!0})],exports.AwcIconButton.prototype,"name",2),__decorateClass$2([n$1({type:String,reflect:!0})],exports.AwcIconButton.prototype,"value",2),__decorateClass$2([n$1({type:String,reflect:!0})],exports.AwcIconButton.prototype,"size",2),__decorateClass$2([n$1({type:String,reflect:!0})],exports.AwcIconButton.prototype,"type",2),__decorateClass$2([n$1({type:String,reflect:!0})],exports.AwcIconButton.prototype,"href",2),__decorateClass$2([n$1({type:String})],exports.AwcIconButton.prototype,"target",2),__decorateClass$2([n$1({type:Boolean,reflect:!0})],exports.AwcIconButton.prototype,"disabled",2),exports.AwcIconButton=__decorateClass$2([t$1(awcIocnButtonTag)],exports.AwcIconButton);var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function getDefaultExportFromCjs(O){return O&&O.__esModule&&Object.prototype.hasOwnProperty.call(O,"default")?O.default:O}var jquery$1={exports:{}};/*!
  * jQuery JavaScript Library v2.2.4
  * http://jquery.com/
  *
  * Includes Sizzle.js
  * http://sizzlejs.com/
  *
  * Copyright jQuery Foundation and other contributors
  * Released under the MIT license
  * http://jquery.org/license
  *
  * Date: 2016-05-20T17:23Z
  */(function(O){(function(w,D){O.exports=w.document?D(w,!0):function(F){if(!F.document)throw new Error("jQuery requires a window with a document");return D(F)}})(typeof window<"u"?window:commonjsGlobal,function(w,D){var F=[],q=w.document,U=F.slice,W=F.concat,Y=F.push,Q=F.indexOf,ne={},oe=ne.toString,ce=ne.hasOwnProperty,fe={},we="2.2.4",Z=function(G,K){return new Z.fn.init(G,K)},ve=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,de=/^-ms-/,Ae=/-([\da-z])/gi,Se=function(G,K){return K.toUpperCase()};Z.fn=Z.prototype={jquery:we,constructor:Z,selector:"",length:0,toArray:function(){return U.call(this)},get:function(G){return G!=null?G<0?this[G+this.length]:this[G]:U.call(this)},pushStack:function(G){var K=Z.merge(this.constructor(),G);return K.prevObject=this,K.context=this.context,K},each:function(G){return Z.each(this,G)},map:function(G){return this.pushStack(Z.map(this,function(K,X){return G.call(K,X,K)}))},slice:function(){return this.pushStack(U.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(G){var K=this.length,X=+G+(G<0?K:0);return this.pushStack(X>=0&&X<K?[this[X]]:[])},end:function(){return this.prevObject||this.constructor()},push:Y,sort:F.sort,splice:F.splice},Z.extend=Z.fn.extend=function(){var G,K,X,J,ee,te,re=arguments[0]||{},ae=1,ue=arguments.length,ge=!1;for(typeof re=="boolean"&&(ge=re,re=arguments[ae]||{},ae++),typeof re!="object"&&!Z.isFunction(re)&&(re={}),ae===ue&&(re=this,ae--);ae<ue;ae++)if((G=arguments[ae])!=null)for(K in G)X=re[K],J=G[K],re!==J&&(ge&&J&&(Z.isPlainObject(J)||(ee=Z.isArray(J)))?(ee?(ee=!1,te=X&&Z.isArray(X)?X:[]):te=X&&Z.isPlainObject(X)?X:{},re[K]=Z.extend(ge,te,J)):J!==void 0&&(re[K]=J));return re},Z.extend({expando:"jQuery"+(we+Math.random()).replace(/\D/g,""),isReady:!0,error:function(G){throw new Error(G)},noop:function(){},isFunction:function(G){return Z.type(G)==="function"},isArray:Array.isArray,isWindow:function(G){return G!=null&&G===G.window},isNumeric:function(G){var K=G&&G.toString();return!Z.isArray(G)&&K-parseFloat(K)+1>=0},isPlainObject:function(G){var K;if(Z.type(G)!=="object"||G.nodeType||Z.isWindow(G)||G.constructor&&!ce.call(G,"constructor")&&!ce.call(G.constructor.prototype||{},"isPrototypeOf"))return!1;for(K in G);return K===void 0||ce.call(G,K)},isEmptyObject:function(G){var K;for(K in G)return!1;return!0},type:function(G){return G==null?G+"":typeof G=="object"||typeof G=="function"?ne[oe.call(G)]||"object":typeof G},globalEval:function(G){var K,X=eval;G=Z.trim(G),G&&(G.indexOf("use strict")===1?(K=q.createElement("script"),K.text=G,q.head.appendChild(K).parentNode.removeChild(K)):X(G))},camelCase:function(G){return G.replace(de,"ms-").replace(Ae,Se)},nodeName:function(G,K){return G.nodeName&&G.nodeName.toLowerCase()===K.toLowerCase()},each:function(G,K){var X,J=0;if(Te(G))for(X=G.length;J<X&&K.call(G[J],J,G[J])!==!1;J++);else for(J in G)if(K.call(G[J],J,G[J])===!1)break;return G},trim:function(G){return G==null?"":(G+"").replace(ve,"")},makeArray:function(G,K){var X=K||[];return G!=null&&(Te(Object(G))?Z.merge(X,typeof G=="string"?[G]:G):Y.call(X,G)),X},inArray:function(G,K,X){return K==null?-1:Q.call(K,G,X)},merge:function(G,K){for(var X=+K.length,J=0,ee=G.length;J<X;J++)G[ee++]=K[J];return G.length=ee,G},grep:function(G,K,X){for(var J,ee=[],te=0,re=G.length,ae=!X;te<re;te++)J=!K(G[te],te),J!==ae&&ee.push(G[te]);return ee},map:function(G,K,X){var J,ee,te=0,re=[];if(Te(G))for(J=G.length;te<J;te++)ee=K(G[te],te,X),ee!=null&&re.push(ee);else for(te in G)ee=K(G[te],te,X),ee!=null&&re.push(ee);return W.apply([],re)},guid:1,proxy:function(G,K){var X,J,ee;if(typeof K=="string"&&(X=G[K],K=G,G=X),!!Z.isFunction(G))return J=U.call(arguments,2),ee=function(){return G.apply(K||this,J.concat(U.call(arguments)))},ee.guid=G.guid=G.guid||Z.guid++,ee},now:Date.now,support:fe}),typeof Symbol=="function"&&(Z.fn[Symbol.iterator]=F[Symbol.iterator]),Z.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(G,K){ne["[object "+K+"]"]=K.toLowerCase()});function Te(G){var K=!!G&&"length"in G&&G.length,X=Z.type(G);return X==="function"||Z.isWindow(G)?!1:X==="array"||K===0||typeof K=="number"&&K>0&&K-1 in G}var ke=function(G){var K,X,J,ee,te,re,ae,ue,ge,pe,Ce,Oe,xe,Ge,ze,qe,yt,ct,It,Le="sizzle"+1*new Date,pt=G.document,Ve=0,it=0,Dt=zr(),$r=zr(),xt=zr(),Wt=function(ie,se){return ie===se&&(Ce=!0),0},Bt=1<<31,Rt={}.hasOwnProperty,_t=[],Ct=_t.pop,li=_t.push,Ht=_t.push,An=_t.slice,Kt=function(ie,se){for(var le=0,_e=ie.length;le<_e;le++)if(ie[le]===se)return le;return-1},Nr="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Qe="[\\x20\\t\\r\\n\\f]",Xt="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",kn="\\["+Qe+"*("+Xt+")(?:"+Qe+"*([*^$|!~]?=)"+Qe+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Xt+"))|)"+Qe+"*\\]",jr=":("+Xt+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+kn+")*)|.*)\\)|)",ui=new RegExp(Qe+"+","g"),yr=new RegExp("^"+Qe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Qe+"+$","g"),pi=new RegExp("^"+Qe+"*,"+Qe+"*"),di=new RegExp("^"+Qe+"*([>+~]|"+Qe+")"+Qe+"*"),hi=new RegExp("="+Qe+`*([^\\]'"]*?)`+Qe+"*\\]","g"),fi=new RegExp(jr),Sn=new RegExp("^"+Xt+"$"),xr={ID:new RegExp("^#("+Xt+")"),CLASS:new RegExp("^\\.("+Xt+")"),TAG:new RegExp("^("+Xt+"|[*])"),ATTR:new RegExp("^"+kn),PSEUDO:new RegExp("^"+jr),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+Qe+"*(even|odd|(([+-]|)(\\d*)n|)"+Qe+"*(?:([+-]|)"+Qe+"*(\\d+)|))"+Qe+"*\\)|)","i"),bool:new RegExp("^(?:"+Nr+")$","i"),needsContext:new RegExp("^"+Qe+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+Qe+"*((?:-\\d)?\\d*)"+Qe+"*\\)|)(?=[^-]|$)","i")},gi=/^(?:input|select|textarea|button)$/i,vi=/^h\d$/i,ur=/^[^{]+\{\s*\[native \w/,wi=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Fr=/[+~]/,_i=/'|\\/g,Lt=new RegExp("\\\\([\\da-f]{1,6}"+Qe+"?|("+Qe+")|.)","ig"),Mt=function(ie,se,le){var _e="0x"+se-65536;return _e!==_e||le?se:_e<0?String.fromCharCode(_e+65536):String.fromCharCode(_e>>10|55296,_e&1023|56320)},On=function(){Oe()};try{Ht.apply(_t=An.call(pt.childNodes),pt.childNodes),_t[pt.childNodes.length].nodeType}catch{Ht={apply:_t.length?function(se,le){li.apply(se,An.call(le))}:function(se,le){for(var _e=se.length,he=0;se[_e++]=le[he++];);se.length=_e-1}}}function rt(ie,se,le,_e){var he,ye,me,Ee,Be,Fe,Re,Ne,Ue=se&&se.ownerDocument,Ye=se?se.nodeType:9;if(le=le||[],typeof ie!="string"||!ie||Ye!==1&&Ye!==9&&Ye!==11)return le;if(!_e&&((se?se.ownerDocument||se:pt)!==xe&&Oe(se),se=se||xe,ze)){if(Ye!==11&&(Fe=wi.exec(ie)))if(he=Fe[1]){if(Ye===9)if(me=se.getElementById(he)){if(me.id===he)return le.push(me),le}else return le;else if(Ue&&(me=Ue.getElementById(he))&&It(se,me)&&me.id===he)return le.push(me),le}else{if(Fe[2])return Ht.apply(le,se.getElementsByTagName(ie)),le;if((he=Fe[3])&&X.getElementsByClassName&&se.getElementsByClassName)return Ht.apply(le,se.getElementsByClassName(he)),le}if(X.qsa&&!xt[ie+" "]&&(!qe||!qe.test(ie))){if(Ye!==1)Ue=se,Ne=ie;else if(se.nodeName.toLowerCase()!=="object"){for((Ee=se.getAttribute("id"))?Ee=Ee.replace(_i,"\\$&"):se.setAttribute("id",Ee=Le),Re=re(ie),ye=Re.length,Be=Sn.test(Ee)?"#"+Ee:"[id='"+Ee+"']";ye--;)Re[ye]=Be+" "+Cr(Re[ye]);Ne=Re.join(","),Ue=Fr.test(ie)&&Vr(se.parentNode)||se}if(Ne)try{return Ht.apply(le,Ue.querySelectorAll(Ne)),le}catch{}finally{Ee===Le&&se.removeAttribute("id")}}}return ue(ie.replace(yr,"$1"),se,le,_e)}function zr(){var ie=[];function se(le,_e){return ie.push(le+" ")>J.cacheLength&&delete se[ie.shift()],se[le+" "]=_e}return se}function St(ie){return ie[Le]=!0,ie}function Et(ie){var se=xe.createElement("div");try{return!!ie(se)}catch{return!1}finally{se.parentNode&&se.parentNode.removeChild(se),se=null}}function qr(ie,se){for(var le=ie.split("|"),_e=le.length;_e--;)J.attrHandle[le[_e]]=se}function En(ie,se){var le=se&&ie,_e=le&&ie.nodeType===1&&se.nodeType===1&&(~se.sourceIndex||Bt)-(~ie.sourceIndex||Bt);if(_e)return _e;if(le){for(;le=le.nextSibling;)if(le===se)return-1}return ie?1:-1}function bi(ie){return function(se){var le=se.nodeName.toLowerCase();return le==="input"&&se.type===ie}}function mi(ie){return function(se){var le=se.nodeName.toLowerCase();return(le==="input"||le==="button")&&se.type===ie}}function Zt(ie){return St(function(se){return se=+se,St(function(le,_e){for(var he,ye=ie([],le.length,se),me=ye.length;me--;)le[he=ye[me]]&&(le[he]=!(_e[he]=le[he]))})})}function Vr(ie){return ie&&typeof ie.getElementsByTagName<"u"&&ie}X=rt.support={},te=rt.isXML=function(ie){var se=ie&&(ie.ownerDocument||ie).documentElement;return se?se.nodeName!=="HTML":!1},Oe=rt.setDocument=function(ie){var se,le,_e=ie?ie.ownerDocument||ie:pt;return _e===xe||_e.nodeType!==9||!_e.documentElement||(xe=_e,Ge=xe.documentElement,ze=!te(xe),(le=xe.defaultView)&&le.top!==le&&(le.addEventListener?le.addEventListener("unload",On,!1):le.attachEvent&&le.attachEvent("onunload",On)),X.attributes=Et(function(he){return he.className="i",!he.getAttribute("className")}),X.getElementsByTagName=Et(function(he){return he.appendChild(xe.createComment("")),!he.getElementsByTagName("*").length}),X.getElementsByClassName=ur.test(xe.getElementsByClassName),X.getById=Et(function(he){return Ge.appendChild(he).id=Le,!xe.getElementsByName||!xe.getElementsByName(Le).length}),X.getById?(J.find.ID=function(he,ye){if(typeof ye.getElementById<"u"&&ze){var me=ye.getElementById(he);return me?[me]:[]}},J.filter.ID=function(he){var ye=he.replace(Lt,Mt);return function(me){return me.getAttribute("id")===ye}}):(delete J.find.ID,J.filter.ID=function(he){var ye=he.replace(Lt,Mt);return function(me){var Ee=typeof me.getAttributeNode<"u"&&me.getAttributeNode("id");return Ee&&Ee.value===ye}}),J.find.TAG=X.getElementsByTagName?function(he,ye){if(typeof ye.getElementsByTagName<"u")return ye.getElementsByTagName(he);if(X.qsa)return ye.querySelectorAll(he)}:function(he,ye){var me,Ee=[],Be=0,Fe=ye.getElementsByTagName(he);if(he==="*"){for(;me=Fe[Be++];)me.nodeType===1&&Ee.push(me);return Ee}return Fe},J.find.CLASS=X.getElementsByClassName&&function(he,ye){if(typeof ye.getElementsByClassName<"u"&&ze)return ye.getElementsByClassName(he)},yt=[],qe=[],(X.qsa=ur.test(xe.querySelectorAll))&&(Et(function(he){Ge.appendChild(he).innerHTML="<a id='"+Le+"'></a><select id='"+Le+"-\r\\' msallowcapture=''><option selected=''></option></select>",he.querySelectorAll("[msallowcapture^='']").length&&qe.push("[*^$]="+Qe+`*(?:''|"")`),he.querySelectorAll("[selected]").length||qe.push("\\["+Qe+"*(?:value|"+Nr+")"),he.querySelectorAll("[id~="+Le+"-]").length||qe.push("~="),he.querySelectorAll(":checked").length||qe.push(":checked"),he.querySelectorAll("a#"+Le+"+*").length||qe.push(".#.+[+~]")}),Et(function(he){var ye=xe.createElement("input");ye.setAttribute("type","hidden"),he.appendChild(ye).setAttribute("name","D"),he.querySelectorAll("[name=d]").length&&qe.push("name"+Qe+"*[*^$|!~]?="),he.querySelectorAll(":enabled").length||qe.push(":enabled",":disabled"),he.querySelectorAll("*,:x"),qe.push(",.*:")})),(X.matchesSelector=ur.test(ct=Ge.matches||Ge.webkitMatchesSelector||Ge.mozMatchesSelector||Ge.oMatchesSelector||Ge.msMatchesSelector))&&Et(function(he){X.disconnectedMatch=ct.call(he,"div"),ct.call(he,"[s!='']:x"),yt.push("!=",jr)}),qe=qe.length&&new RegExp(qe.join("|")),yt=yt.length&&new RegExp(yt.join("|")),se=ur.test(Ge.compareDocumentPosition),It=se||ur.test(Ge.contains)?function(he,ye){var me=he.nodeType===9?he.documentElement:he,Ee=ye&&ye.parentNode;return he===Ee||!!(Ee&&Ee.nodeType===1&&(me.contains?me.contains(Ee):he.compareDocumentPosition&&he.compareDocumentPosition(Ee)&16))}:function(he,ye){if(ye){for(;ye=ye.parentNode;)if(ye===he)return!0}return!1},Wt=se?function(he,ye){if(he===ye)return Ce=!0,0;var me=!he.compareDocumentPosition-!ye.compareDocumentPosition;return me||(me=(he.ownerDocument||he)===(ye.ownerDocument||ye)?he.compareDocumentPosition(ye):1,me&1||!X.sortDetached&&ye.compareDocumentPosition(he)===me?he===xe||he.ownerDocument===pt&&It(pt,he)?-1:ye===xe||ye.ownerDocument===pt&&It(pt,ye)?1:pe?Kt(pe,he)-Kt(pe,ye):0:me&4?-1:1)}:function(he,ye){if(he===ye)return Ce=!0,0;var me,Ee=0,Be=he.parentNode,Fe=ye.parentNode,Re=[he],Ne=[ye];if(!Be||!Fe)return he===xe?-1:ye===xe?1:Be?-1:Fe?1:pe?Kt(pe,he)-Kt(pe,ye):0;if(Be===Fe)return En(he,ye);for(me=he;me=me.parentNode;)Re.unshift(me);for(me=ye;me=me.parentNode;)Ne.unshift(me);for(;Re[Ee]===Ne[Ee];)Ee++;return Ee?En(Re[Ee],Ne[Ee]):Re[Ee]===pt?-1:Ne[Ee]===pt?1:0}),xe},rt.matches=function(ie,se){return rt(ie,null,null,se)},rt.matchesSelector=function(ie,se){if((ie.ownerDocument||ie)!==xe&&Oe(ie),se=se.replace(hi,"='$1']"),X.matchesSelector&&ze&&!xt[se+" "]&&(!yt||!yt.test(se))&&(!qe||!qe.test(se)))try{var le=ct.call(ie,se);if(le||X.disconnectedMatch||ie.document&&ie.document.nodeType!==11)return le}catch{}return rt(se,xe,null,[ie]).length>0},rt.contains=function(ie,se){return(ie.ownerDocument||ie)!==xe&&Oe(ie),It(ie,se)},rt.attr=function(ie,se){(ie.ownerDocument||ie)!==xe&&Oe(ie);var le=J.attrHandle[se.toLowerCase()],_e=le&&Rt.call(J.attrHandle,se.toLowerCase())?le(ie,se,!ze):void 0;return _e!==void 0?_e:X.attributes||!ze?ie.getAttribute(se):(_e=ie.getAttributeNode(se))&&_e.specified?_e.value:null},rt.error=function(ie){throw new Error("Syntax error, unrecognized expression: "+ie)},rt.uniqueSort=function(ie){var se,le=[],_e=0,he=0;if(Ce=!X.detectDuplicates,pe=!X.sortStable&&ie.slice(0),ie.sort(Wt),Ce){for(;se=ie[he++];)se===ie[he]&&(_e=le.push(he));for(;_e--;)ie.splice(le[_e],1)}return pe=null,ie},ee=rt.getText=function(ie){var se,le="",_e=0,he=ie.nodeType;if(he){if(he===1||he===9||he===11){if(typeof ie.textContent=="string")return ie.textContent;for(ie=ie.firstChild;ie;ie=ie.nextSibling)le+=ee(ie)}else if(he===3||he===4)return ie.nodeValue}else for(;se=ie[_e++];)le+=ee(se);return le},J=rt.selectors={cacheLength:50,createPseudo:St,match:xr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(ie){return ie[1]=ie[1].replace(Lt,Mt),ie[3]=(ie[3]||ie[4]||ie[5]||"").replace(Lt,Mt),ie[2]==="~="&&(ie[3]=" "+ie[3]+" "),ie.slice(0,4)},CHILD:function(ie){return ie[1]=ie[1].toLowerCase(),ie[1].slice(0,3)==="nth"?(ie[3]||rt.error(ie[0]),ie[4]=+(ie[4]?ie[5]+(ie[6]||1):2*(ie[3]==="even"||ie[3]==="odd")),ie[5]=+(ie[7]+ie[8]||ie[3]==="odd")):ie[3]&&rt.error(ie[0]),ie},PSEUDO:function(ie){var se,le=!ie[6]&&ie[2];return xr.CHILD.test(ie[0])?null:(ie[3]?ie[2]=ie[4]||ie[5]||"":le&&fi.test(le)&&(se=re(le,!0))&&(se=le.indexOf(")",le.length-se)-le.length)&&(ie[0]=ie[0].slice(0,se),ie[2]=le.slice(0,se)),ie.slice(0,3))}},filter:{TAG:function(ie){var se=ie.replace(Lt,Mt).toLowerCase();return ie==="*"?function(){return!0}:function(le){return le.nodeName&&le.nodeName.toLowerCase()===se}},CLASS:function(ie){var se=Dt[ie+" "];return se||(se=new RegExp("(^|"+Qe+")"+ie+"("+Qe+"|$)"))&&Dt(ie,function(le){return se.test(typeof le.className=="string"&&le.className||typeof le.getAttribute<"u"&&le.getAttribute("class")||"")})},ATTR:function(ie,se,le){return function(_e){var he=rt.attr(_e,ie);return he==null?se==="!=":se?(he+="",se==="="?he===le:se==="!="?he!==le:se==="^="?le&&he.indexOf(le)===0:se==="*="?le&&he.indexOf(le)>-1:se==="$="?le&&he.slice(-le.length)===le:se==="~="?(" "+he.replace(ui," ")+" ").indexOf(le)>-1:se==="|="?he===le||he.slice(0,le.length+1)===le+"-":!1):!0}},CHILD:function(ie,se,le,_e,he){var ye=ie.slice(0,3)!=="nth",me=ie.slice(-4)!=="last",Ee=se==="of-type";return _e===1&&he===0?function(Be){return!!Be.parentNode}:function(Be,Fe,Re){var Ne,Ue,Ye,He,at,dt,mt=ye!==me?"nextSibling":"previousSibling",nt=Be.parentNode,pr=Ee&&Be.nodeName.toLowerCase(),dr=!Re&&!Ee,$t=!1;if(nt){if(ye){for(;mt;){for(He=Be;He=He[mt];)if(Ee?He.nodeName.toLowerCase()===pr:He.nodeType===1)return!1;dt=mt=ie==="only"&&!dt&&"nextSibling"}return!0}if(dt=[me?nt.firstChild:nt.lastChild],me&&dr){for(He=nt,Ye=He[Le]||(He[Le]={}),Ue=Ye[He.uniqueID]||(Ye[He.uniqueID]={}),Ne=Ue[ie]||[],at=Ne[0]===Ve&&Ne[1],$t=at&&Ne[2],He=at&&nt.childNodes[at];He=++at&&He&&He[mt]||($t=at=0)||dt.pop();)if(He.nodeType===1&&++$t&&He===Be){Ue[ie]=[Ve,at,$t];break}}else if(dr&&(He=Be,Ye=He[Le]||(He[Le]={}),Ue=Ye[He.uniqueID]||(Ye[He.uniqueID]={}),Ne=Ue[ie]||[],at=Ne[0]===Ve&&Ne[1],$t=at),$t===!1)for(;(He=++at&&He&&He[mt]||($t=at=0)||dt.pop())&&!((Ee?He.nodeName.toLowerCase()===pr:He.nodeType===1)&&++$t&&(dr&&(Ye=He[Le]||(He[Le]={}),Ue=Ye[He.uniqueID]||(Ye[He.uniqueID]={}),Ue[ie]=[Ve,$t]),He===Be)););return $t-=he,$t===_e||$t%_e===0&&$t/_e>=0}}},PSEUDO:function(ie,se){var le,_e=J.pseudos[ie]||J.setFilters[ie.toLowerCase()]||rt.error("unsupported pseudo: "+ie);return _e[Le]?_e(se):_e.length>1?(le=[ie,ie,"",se],J.setFilters.hasOwnProperty(ie.toLowerCase())?St(function(he,ye){for(var me,Ee=_e(he,se),Be=Ee.length;Be--;)me=Kt(he,Ee[Be]),he[me]=!(ye[me]=Ee[Be])}):function(he){return _e(he,0,le)}):_e}},pseudos:{not:St(function(ie){var se=[],le=[],_e=ae(ie.replace(yr,"$1"));return _e[Le]?St(function(he,ye,me,Ee){for(var Be,Fe=_e(he,null,Ee,[]),Re=he.length;Re--;)(Be=Fe[Re])&&(he[Re]=!(ye[Re]=Be))}):function(he,ye,me){return se[0]=he,_e(se,null,me,le),se[0]=null,!le.pop()}}),has:St(function(ie){return function(se){return rt(ie,se).length>0}}),contains:St(function(ie){return ie=ie.replace(Lt,Mt),function(se){return(se.textContent||se.innerText||ee(se)).indexOf(ie)>-1}}),lang:St(function(ie){return Sn.test(ie||"")||rt.error("unsupported lang: "+ie),ie=ie.replace(Lt,Mt).toLowerCase(),function(se){var le;do if(le=ze?se.lang:se.getAttribute("xml:lang")||se.getAttribute("lang"))return le=le.toLowerCase(),le===ie||le.indexOf(ie+"-")===0;while((se=se.parentNode)&&se.nodeType===1);return!1}}),target:function(ie){var se=G.location&&G.location.hash;return se&&se.slice(1)===ie.id},root:function(ie){return ie===Ge},focus:function(ie){return ie===xe.activeElement&&(!xe.hasFocus||xe.hasFocus())&&!!(ie.type||ie.href||~ie.tabIndex)},enabled:function(ie){return ie.disabled===!1},disabled:function(ie){return ie.disabled===!0},checked:function(ie){var se=ie.nodeName.toLowerCase();return se==="input"&&!!ie.checked||se==="option"&&!!ie.selected},selected:function(ie){return ie.parentNode&&ie.parentNode.selectedIndex,ie.selected===!0},empty:function(ie){for(ie=ie.firstChild;ie;ie=ie.nextSibling)if(ie.nodeType<6)return!1;return!0},parent:function(ie){return!J.pseudos.empty(ie)},header:function(ie){return vi.test(ie.nodeName)},input:function(ie){return gi.test(ie.nodeName)},button:function(ie){var se=ie.nodeName.toLowerCase();return se==="input"&&ie.type==="button"||se==="button"},text:function(ie){var se;return ie.nodeName.toLowerCase()==="input"&&ie.type==="text"&&((se=ie.getAttribute("type"))==null||se.toLowerCase()==="text")},first:Zt(function(){return[0]}),last:Zt(function(ie,se){return[se-1]}),eq:Zt(function(ie,se,le){return[le<0?le+se:le]}),even:Zt(function(ie,se){for(var le=0;le<se;le+=2)ie.push(le);return ie}),odd:Zt(function(ie,se){for(var le=1;le<se;le+=2)ie.push(le);return ie}),lt:Zt(function(ie,se,le){for(var _e=le<0?le+se:le;--_e>=0;)ie.push(_e);return ie}),gt:Zt(function(ie,se,le){for(var _e=le<0?le+se:le;++_e<se;)ie.push(_e);return ie})}},J.pseudos.nth=J.pseudos.eq;for(K in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})J.pseudos[K]=bi(K);for(K in{submit:!0,reset:!0})J.pseudos[K]=mi(K);function Pn(){}Pn.prototype=J.filters=J.pseudos,J.setFilters=new Pn,re=rt.tokenize=function(ie,se){var le,_e,he,ye,me,Ee,Be,Fe=$r[ie+" "];if(Fe)return se?0:Fe.slice(0);for(me=ie,Ee=[],Be=J.preFilter;me;){(!le||(_e=pi.exec(me)))&&(_e&&(me=me.slice(_e[0].length)||me),Ee.push(he=[])),le=!1,(_e=di.exec(me))&&(le=_e.shift(),he.push({value:le,type:_e[0].replace(yr," ")}),me=me.slice(le.length));for(ye in J.filter)(_e=xr[ye].exec(me))&&(!Be[ye]||(_e=Be[ye](_e)))&&(le=_e.shift(),he.push({value:le,type:ye,matches:_e}),me=me.slice(le.length));if(!le)break}return se?me.length:me?rt.error(ie):$r(ie,Ee).slice(0)};function Cr(ie){for(var se=0,le=ie.length,_e="";se<le;se++)_e+=ie[se].value;return _e}function Gr(ie,se,le){var _e=se.dir,he=le&&_e==="parentNode",ye=it++;return se.first?function(me,Ee,Be){for(;me=me[_e];)if(me.nodeType===1||he)return ie(me,Ee,Be)}:function(me,Ee,Be){var Fe,Re,Ne,Ue=[Ve,ye];if(Be){for(;me=me[_e];)if((me.nodeType===1||he)&&ie(me,Ee,Be))return!0}else for(;me=me[_e];)if(me.nodeType===1||he){if(Ne=me[Le]||(me[Le]={}),Re=Ne[me.uniqueID]||(Ne[me.uniqueID]={}),(Fe=Re[_e])&&Fe[0]===Ve&&Fe[1]===ye)return Ue[2]=Fe[2];if(Re[_e]=Ue,Ue[2]=ie(me,Ee,Be))return!0}}}function Ur(ie){return ie.length>1?function(se,le,_e){for(var he=ie.length;he--;)if(!ie[he](se,le,_e))return!1;return!0}:ie[0]}function $i(ie,se,le){for(var _e=0,he=se.length;_e<he;_e++)rt(ie,se[_e],le);return le}function Ar(ie,se,le,_e,he){for(var ye,me=[],Ee=0,Be=ie.length,Fe=se!=null;Ee<Be;Ee++)(ye=ie[Ee])&&(!le||le(ye,_e,he))&&(me.push(ye),Fe&&se.push(Ee));return me}function Wr(ie,se,le,_e,he,ye){return _e&&!_e[Le]&&(_e=Wr(_e)),he&&!he[Le]&&(he=Wr(he,ye)),St(function(me,Ee,Be,Fe){var Re,Ne,Ue,Ye=[],He=[],at=Ee.length,dt=me||$i(se||"*",Be.nodeType?[Be]:Be,[]),mt=ie&&(me||!se)?Ar(dt,Ye,ie,Be,Fe):dt,nt=le?he||(me?ie:at||_e)?[]:Ee:mt;if(le&&le(mt,nt,Be,Fe),_e)for(Re=Ar(nt,He),_e(Re,[],Be,Fe),Ne=Re.length;Ne--;)(Ue=Re[Ne])&&(nt[He[Ne]]=!(mt[He[Ne]]=Ue));if(me){if(he||ie){if(he){for(Re=[],Ne=nt.length;Ne--;)(Ue=nt[Ne])&&Re.push(mt[Ne]=Ue);he(null,nt=[],Re,Fe)}for(Ne=nt.length;Ne--;)(Ue=nt[Ne])&&(Re=he?Kt(me,Ue):Ye[Ne])>-1&&(me[Re]=!(Ee[Re]=Ue))}}else nt=Ar(nt===Ee?nt.splice(at,nt.length):nt),he?he(null,Ee,nt,Fe):Ht.apply(Ee,nt)})}function Kr(ie){for(var se,le,_e,he=ie.length,ye=J.relative[ie[0].type],me=ye||J.relative[" "],Ee=ye?1:0,Be=Gr(function(Ne){return Ne===se},me,!0),Fe=Gr(function(Ne){return Kt(se,Ne)>-1},me,!0),Re=[function(Ne,Ue,Ye){var He=!ye&&(Ye||Ue!==ge)||((se=Ue).nodeType?Be(Ne,Ue,Ye):Fe(Ne,Ue,Ye));return se=null,He}];Ee<he;Ee++)if(le=J.relative[ie[Ee].type])Re=[Gr(Ur(Re),le)];else{if(le=J.filter[ie[Ee].type].apply(null,ie[Ee].matches),le[Le]){for(_e=++Ee;_e<he&&!J.relative[ie[_e].type];_e++);return Wr(Ee>1&&Ur(Re),Ee>1&&Cr(ie.slice(0,Ee-1).concat({value:ie[Ee-2].type===" "?"*":""})).replace(yr,"$1"),le,Ee<_e&&Kr(ie.slice(Ee,_e)),_e<he&&Kr(ie=ie.slice(_e)),_e<he&&Cr(ie))}Re.push(le)}return Ur(Re)}function yi(ie,se){var le=se.length>0,_e=ie.length>0,he=function(ye,me,Ee,Be,Fe){var Re,Ne,Ue,Ye=0,He="0",at=ye&&[],dt=[],mt=ge,nt=ye||_e&&J.find.TAG("*",Fe),pr=Ve+=mt==null?1:Math.random()||.1,dr=nt.length;for(Fe&&(ge=me===xe||me||Fe);He!==dr&&(Re=nt[He])!=null;He++){if(_e&&Re){for(Ne=0,!me&&Re.ownerDocument!==xe&&(Oe(Re),Ee=!ze);Ue=ie[Ne++];)if(Ue(Re,me||xe,Ee)){Be.push(Re);break}Fe&&(Ve=pr)}le&&((Re=!Ue&&Re)&&Ye--,ye&&at.push(Re))}if(Ye+=He,le&&He!==Ye){for(Ne=0;Ue=se[Ne++];)Ue(at,dt,me,Ee);if(ye){if(Ye>0)for(;He--;)at[He]||dt[He]||(dt[He]=Ct.call(Be));dt=Ar(dt)}Ht.apply(Be,dt),Fe&&!ye&&dt.length>0&&Ye+se.length>1&&rt.uniqueSort(Be)}return Fe&&(Ve=pr,ge=mt),at};return le?St(he):he}return ae=rt.compile=function(ie,se){var le,_e=[],he=[],ye=xt[ie+" "];if(!ye){for(se||(se=re(ie)),le=se.length;le--;)ye=Kr(se[le]),ye[Le]?_e.push(ye):he.push(ye);ye=xt(ie,yi(he,_e)),ye.selector=ie}return ye},ue=rt.select=function(ie,se,le,_e){var he,ye,me,Ee,Be,Fe=typeof ie=="function"&&ie,Re=!_e&&re(ie=Fe.selector||ie);if(le=le||[],Re.length===1){if(ye=Re[0]=Re[0].slice(0),ye.length>2&&(me=ye[0]).type==="ID"&&X.getById&&se.nodeType===9&&ze&&J.relative[ye[1].type]){if(se=(J.find.ID(me.matches[0].replace(Lt,Mt),se)||[])[0],se)Fe&&(se=se.parentNode);else return le;ie=ie.slice(ye.shift().value.length)}for(he=xr.needsContext.test(ie)?0:ye.length;he--&&(me=ye[he],!J.relative[Ee=me.type]);)if((Be=J.find[Ee])&&(_e=Be(me.matches[0].replace(Lt,Mt),Fr.test(ye[0].type)&&Vr(se.parentNode)||se))){if(ye.splice(he,1),ie=_e.length&&Cr(ye),!ie)return Ht.apply(le,_e),le;break}}return(Fe||ae(ie,Re))(_e,se,!ze,le,!se||Fr.test(ie)&&Vr(se.parentNode)||se),le},X.sortStable=Le.split("").sort(Wt).join("")===Le,X.detectDuplicates=!!Ce,Oe(),X.sortDetached=Et(function(ie){return ie.compareDocumentPosition(xe.createElement("div"))&1}),Et(function(ie){return ie.innerHTML="<a href='#'></a>",ie.firstChild.getAttribute("href")==="#"})||qr("type|href|height|width",function(ie,se,le){if(!le)return ie.getAttribute(se,se.toLowerCase()==="type"?1:2)}),(!X.attributes||!Et(function(ie){return ie.innerHTML="<input/>",ie.firstChild.setAttribute("value",""),ie.firstChild.getAttribute("value")===""}))&&qr("value",function(ie,se,le){if(!le&&ie.nodeName.toLowerCase()==="input")return ie.defaultValue}),Et(function(ie){return ie.getAttribute("disabled")==null})||qr(Nr,function(ie,se,le){var _e;if(!le)return ie[se]===!0?se.toLowerCase():(_e=ie.getAttributeNode(se))&&_e.specified?_e.value:null}),rt}(w);Z.find=ke,Z.expr=ke.selectors,Z.expr[":"]=Z.expr.pseudos,Z.uniqueSort=Z.unique=ke.uniqueSort,Z.text=ke.getText,Z.isXMLDoc=ke.isXML,Z.contains=ke.contains;var $e=function(G,K,X){for(var J=[],ee=X!==void 0;(G=G[K])&&G.nodeType!==9;)if(G.nodeType===1){if(ee&&Z(G).is(X))break;J.push(G)}return J},be=function(G,K){for(var X=[];G;G=G.nextSibling)G.nodeType===1&&G!==K&&X.push(G);return X},Pe=Z.expr.match.needsContext,Ie=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,je=/^.[^:#\[\.,]*$/;function De(G,K,X){if(Z.isFunction(K))return Z.grep(G,function(J,ee){return!!K.call(J,ee,J)!==X});if(K.nodeType)return Z.grep(G,function(J){return J===K!==X});if(typeof K=="string"){if(je.test(K))return Z.filter(K,G,X);K=Z.filter(K,G)}return Z.grep(G,function(J){return Q.call(K,J)>-1!==X})}Z.filter=function(G,K,X){var J=K[0];return X&&(G=":not("+G+")"),K.length===1&&J.nodeType===1?Z.find.matchesSelector(J,G)?[J]:[]:Z.find.matches(G,Z.grep(K,function(ee){return ee.nodeType===1}))},Z.fn.extend({find:function(G){var K,X=this.length,J=[],ee=this;if(typeof G!="string")return this.pushStack(Z(G).filter(function(){for(K=0;K<X;K++)if(Z.contains(ee[K],this))return!0}));for(K=0;K<X;K++)Z.find(G,ee[K],J);return J=this.pushStack(X>1?Z.unique(J):J),J.selector=this.selector?this.selector+" "+G:G,J},filter:function(G){return this.pushStack(De(this,G||[],!1))},not:function(G){return this.pushStack(De(this,G||[],!0))},is:function(G){return!!De(this,typeof G=="string"&&Pe.test(G)?Z(G):G||[],!1).length}});var We,et=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,Xe=Z.fn.init=function(G,K,X){var J,ee;if(!G)return this;if(X=X||We,typeof G=="string")if(G[0]==="<"&&G[G.length-1]===">"&&G.length>=3?J=[null,G,null]:J=et.exec(G),J&&(J[1]||!K))if(J[1]){if(K=K instanceof Z?K[0]:K,Z.merge(this,Z.parseHTML(J[1],K&&K.nodeType?K.ownerDocument||K:q,!0)),Ie.test(J[1])&&Z.isPlainObject(K))for(J in K)Z.isFunction(this[J])?this[J](K[J]):this.attr(J,K[J]);return this}else return ee=q.getElementById(J[2]),ee&&ee.parentNode&&(this.length=1,this[0]=ee),this.context=q,this.selector=G,this;else return!K||K.jquery?(K||X).find(G):this.constructor(K).find(G);else{if(G.nodeType)return this.context=this[0]=G,this.length=1,this;if(Z.isFunction(G))return X.ready!==void 0?X.ready(G):G(Z)}return G.selector!==void 0&&(this.selector=G.selector,this.context=G.context),Z.makeArray(G,this)};Xe.prototype=Z.fn,We=Z(q);var Ke=/^(?:parents|prev(?:Until|All))/,ot={children:!0,contents:!0,next:!0,prev:!0};Z.fn.extend({has:function(G){var K=Z(G,this),X=K.length;return this.filter(function(){for(var J=0;J<X;J++)if(Z.contains(this,K[J]))return!0})},closest:function(G,K){for(var X,J=0,ee=this.length,te=[],re=Pe.test(G)||typeof G!="string"?Z(G,K||this.context):0;J<ee;J++)for(X=this[J];X&&X!==K;X=X.parentNode)if(X.nodeType<11&&(re?re.index(X)>-1:X.nodeType===1&&Z.find.matchesSelector(X,G))){te.push(X);break}return this.pushStack(te.length>1?Z.uniqueSort(te):te)},index:function(G){return G?typeof G=="string"?Q.call(Z(G),this[0]):Q.call(this,G.jquery?G[0]:G):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(G,K){return this.pushStack(Z.uniqueSort(Z.merge(this.get(),Z(G,K))))},addBack:function(G){return this.add(G==null?this.prevObject:this.prevObject.filter(G))}});function Je(G,K){for(;(G=G[K])&&G.nodeType!==1;);return G}Z.each({parent:function(G){var K=G.parentNode;return K&&K.nodeType!==11?K:null},parents:function(G){return $e(G,"parentNode")},parentsUntil:function(G,K,X){return $e(G,"parentNode",X)},next:function(G){return Je(G,"nextSibling")},prev:function(G){return Je(G,"previousSibling")},nextAll:function(G){return $e(G,"nextSibling")},prevAll:function(G){return $e(G,"previousSibling")},nextUntil:function(G,K,X){return $e(G,"nextSibling",X)},prevUntil:function(G,K,X){return $e(G,"previousSibling",X)},siblings:function(G){return be((G.parentNode||{}).firstChild,G)},children:function(G){return be(G.firstChild)},contents:function(G){return G.contentDocument||Z.merge([],G.childNodes)}},function(G,K){Z.fn[G]=function(X,J){var ee=Z.map(this,K,X);return G.slice(-5)!=="Until"&&(J=X),J&&typeof J=="string"&&(ee=Z.filter(J,ee)),this.length>1&&(ot[G]||Z.uniqueSort(ee),Ke.test(G)&&ee.reverse()),this.pushStack(ee)}});var Ze=/\S+/g;function vt(G){var K={};return Z.each(G.match(Ze)||[],function(X,J){K[J]=!0}),K}Z.Callbacks=function(G){G=typeof G=="string"?vt(G):Z.extend({},G);var K,X,J,ee,te=[],re=[],ae=-1,ue=function(){for(ee=G.once,J=K=!0;re.length;ae=-1)for(X=re.shift();++ae<te.length;)te[ae].apply(X[0],X[1])===!1&&G.stopOnFalse&&(ae=te.length,X=!1);G.memory||(X=!1),K=!1,ee&&(X?te=[]:te="")},ge={add:function(){return te&&(X&&!K&&(ae=te.length-1,re.push(X)),function pe(Ce){Z.each(Ce,function(Oe,xe){Z.isFunction(xe)?(!G.unique||!ge.has(xe))&&te.push(xe):xe&&xe.length&&Z.type(xe)!=="string"&&pe(xe)})}(arguments),X&&!K&&ue()),this},remove:function(){return Z.each(arguments,function(pe,Ce){for(var Oe;(Oe=Z.inArray(Ce,te,Oe))>-1;)te.splice(Oe,1),Oe<=ae&&ae--}),this},has:function(pe){return pe?Z.inArray(pe,te)>-1:te.length>0},empty:function(){return te&&(te=[]),this},disable:function(){return ee=re=[],te=X="",this},disabled:function(){return!te},lock:function(){return ee=re=[],X||(te=X=""),this},locked:function(){return!!ee},fireWith:function(pe,Ce){return ee||(Ce=Ce||[],Ce=[pe,Ce.slice?Ce.slice():Ce],re.push(Ce),K||ue()),this},fire:function(){return ge.fireWith(this,arguments),this},fired:function(){return!!J}};return ge},Z.extend({Deferred:function(G){var K=[["resolve","done",Z.Callbacks("once memory"),"resolved"],["reject","fail",Z.Callbacks("once memory"),"rejected"],["notify","progress",Z.Callbacks("memory")]],X="pending",J={state:function(){return X},always:function(){return ee.done(arguments).fail(arguments),this},then:function(){var te=arguments;return Z.Deferred(function(re){Z.each(K,function(ae,ue){var ge=Z.isFunction(te[ae])&&te[ae];ee[ue[1]](function(){var pe=ge&&ge.apply(this,arguments);pe&&Z.isFunction(pe.promise)?pe.promise().progress(re.notify).done(re.resolve).fail(re.reject):re[ue[0]+"With"](this===J?re.promise():this,ge?[pe]:arguments)})}),te=null}).promise()},promise:function(te){return te!=null?Z.extend(te,J):J}},ee={};return J.pipe=J.then,Z.each(K,function(te,re){var ae=re[2],ue=re[3];J[re[1]]=ae.add,ue&&ae.add(function(){X=ue},K[te^1][2].disable,K[2][2].lock),ee[re[0]]=function(){return ee[re[0]+"With"](this===ee?J:this,arguments),this},ee[re[0]+"With"]=ae.fireWith}),J.promise(ee),G&&G.call(ee,ee),ee},when:function(G){var K=0,X=U.call(arguments),J=X.length,ee=J!==1||G&&Z.isFunction(G.promise)?J:0,te=ee===1?G:Z.Deferred(),re=function(pe,Ce,Oe){return function(xe){Ce[pe]=this,Oe[pe]=arguments.length>1?U.call(arguments):xe,Oe===ae?te.notifyWith(Ce,Oe):--ee||te.resolveWith(Ce,Oe)}},ae,ue,ge;if(J>1)for(ae=new Array(J),ue=new Array(J),ge=new Array(J);K<J;K++)X[K]&&Z.isFunction(X[K].promise)?X[K].promise().progress(re(K,ue,ae)).done(re(K,ge,X)).fail(te.reject):--ee;return ee||te.resolveWith(ge,X),te.promise()}});var lt;Z.fn.ready=function(G){return Z.ready.promise().done(G),this},Z.extend({isReady:!1,readyWait:1,holdReady:function(G){G?Z.readyWait++:Z.ready(!0)},ready:function(G){(G===!0?--Z.readyWait:Z.isReady)||(Z.isReady=!0,!(G!==!0&&--Z.readyWait>0)&&(lt.resolveWith(q,[Z]),Z.fn.triggerHandler&&(Z(q).triggerHandler("ready"),Z(q).off("ready"))))}});function ht(){q.removeEventListener("DOMContentLoaded",ht),w.removeEventListener("load",ht),Z.ready()}Z.ready.promise=function(G){return lt||(lt=Z.Deferred(),q.readyState==="complete"||q.readyState!=="loading"&&!q.documentElement.doScroll?w.setTimeout(Z.ready):(q.addEventListener("DOMContentLoaded",ht),w.addEventListener("load",ht))),lt.promise(G)},Z.ready.promise();var st=function(G,K,X,J,ee,te,re){var ae=0,ue=G.length,ge=X==null;if(Z.type(X)==="object"){ee=!0;for(ae in X)st(G,K,ae,X[ae],!0,te,re)}else if(J!==void 0&&(ee=!0,Z.isFunction(J)||(re=!0),ge&&(re?(K.call(G,J),K=null):(ge=K,K=function(pe,Ce,Oe){return ge.call(Z(pe),Oe)})),K))for(;ae<ue;ae++)K(G[ae],X,re?J:J.call(G[ae],ae,K(G[ae],X)));return ee?G:ge?K.call(G):ue?K(G[0],X):te},ft=function(G){return G.nodeType===1||G.nodeType===9||!+G.nodeType};function bt(){this.expando=Z.expando+bt.uid++}bt.uid=1,bt.prototype={register:function(G,K){var X=K||{};return G.nodeType?G[this.expando]=X:Object.defineProperty(G,this.expando,{value:X,writable:!0,configurable:!0}),G[this.expando]},cache:function(G){if(!ft(G))return{};var K=G[this.expando];return K||(K={},ft(G)&&(G.nodeType?G[this.expando]=K:Object.defineProperty(G,this.expando,{value:K,configurable:!0}))),K},set:function(G,K,X){var J,ee=this.cache(G);if(typeof K=="string")ee[K]=X;else for(J in K)ee[J]=K[J];return ee},get:function(G,K){return K===void 0?this.cache(G):G[this.expando]&&G[this.expando][K]},access:function(G,K,X){var J;return K===void 0||K&&typeof K=="string"&&X===void 0?(J=this.get(G,K),J!==void 0?J:this.get(G,Z.camelCase(K))):(this.set(G,K,X),X!==void 0?X:K)},remove:function(G,K){var X,J,ee,te=G[this.expando];if(te!==void 0){if(K===void 0)this.register(G);else for(Z.isArray(K)?J=K.concat(K.map(Z.camelCase)):(ee=Z.camelCase(K),K in te?J=[K,ee]:(J=ee,J=J in te?[J]:J.match(Ze)||[])),X=J.length;X--;)delete te[J[X]];(K===void 0||Z.isEmptyObject(te))&&(G.nodeType?G[this.expando]=void 0:delete G[this.expando])}},hasData:function(G){var K=G[this.expando];return K!==void 0&&!Z.isEmptyObject(K)}};var Me=new bt,tt=new bt,Nt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,jt=/[A-Z]/g;function Ot(G,K,X){var J;if(X===void 0&&G.nodeType===1)if(J="data-"+K.replace(jt,"-$&").toLowerCase(),X=G.getAttribute(J),typeof X=="string"){try{X=X==="true"?!0:X==="false"?!1:X==="null"?null:+X+""===X?+X:Nt.test(X)?Z.parseJSON(X):X}catch{}tt.set(G,K,X)}else X=void 0;return X}Z.extend({hasData:function(G){return tt.hasData(G)||Me.hasData(G)},data:function(G,K,X){return tt.access(G,K,X)},removeData:function(G,K){tt.remove(G,K)},_data:function(G,K,X){return Me.access(G,K,X)},_removeData:function(G,K){Me.remove(G,K)}}),Z.fn.extend({data:function(G,K){var X,J,ee,te=this[0],re=te&&te.attributes;if(G===void 0){if(this.length&&(ee=tt.get(te),te.nodeType===1&&!Me.get(te,"hasDataAttrs"))){for(X=re.length;X--;)re[X]&&(J=re[X].name,J.indexOf("data-")===0&&(J=Z.camelCase(J.slice(5)),Ot(te,J,ee[J])));Me.set(te,"hasDataAttrs",!0)}return ee}return typeof G=="object"?this.each(function(){tt.set(this,G)}):st(this,function(ae){var ue,ge;if(te&&ae===void 0)return ue=tt.get(te,G)||tt.get(te,G.replace(jt,"-$&").toLowerCase()),ue!==void 0||(ge=Z.camelCase(G),ue=tt.get(te,ge),ue!==void 0)||(ue=Ot(te,ge,void 0),ue!==void 0)?ue:void 0;ge=Z.camelCase(G),this.each(function(){var pe=tt.get(this,ge);tt.set(this,ge,ae),G.indexOf("-")>-1&&pe!==void 0&&tt.set(this,G,ae)})},null,K,arguments.length>1,null,!0)},removeData:function(G){return this.each(function(){tt.remove(this,G)})}}),Z.extend({queue:function(G,K,X){var J;if(G)return K=(K||"fx")+"queue",J=Me.get(G,K),X&&(!J||Z.isArray(X)?J=Me.access(G,K,Z.makeArray(X)):J.push(X)),J||[]},dequeue:function(G,K){K=K||"fx";var X=Z.queue(G,K),J=X.length,ee=X.shift(),te=Z._queueHooks(G,K),re=function(){Z.dequeue(G,K)};ee==="inprogress"&&(ee=X.shift(),J--),ee&&(K==="fx"&&X.unshift("inprogress"),delete te.stop,ee.call(G,re,te)),!J&&te&&te.empty.fire()},_queueHooks:function(G,K){var X=K+"queueHooks";return Me.get(G,X)||Me.access(G,X,{empty:Z.Callbacks("once memory").add(function(){Me.remove(G,[K+"queue",X])})})}}),Z.fn.extend({queue:function(G,K){var X=2;return typeof G!="string"&&(K=G,G="fx",X--),arguments.length<X?Z.queue(this[0],G):K===void 0?this:this.each(function(){var J=Z.queue(this,G,K);Z._queueHooks(this,G),G==="fx"&&J[0]!=="inprogress"&&Z.dequeue(this,G)})},dequeue:function(G){return this.each(function(){Z.dequeue(this,G)})},clearQueue:function(G){return this.queue(G||"fx",[])},promise:function(G,K){var X,J=1,ee=Z.Deferred(),te=this,re=this.length,ae=function(){--J||ee.resolveWith(te,[te])};for(typeof G!="string"&&(K=G,G=void 0),G=G||"fx";re--;)X=Me.get(te[re],G+"queueHooks"),X&&X.empty&&(J++,X.empty.add(ae));return ae(),ee.promise(K)}});var Jt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ft=new RegExp("^(?:([+-])=|)("+Jt+")([a-z%]*)$","i"),At=["Top","Right","Bottom","Left"],zt=function(G,K){return G=K||G,Z.css(G,"display")==="none"||!Z.contains(G.ownerDocument,G)};function rr(G,K,X,J){var ee,te=1,re=20,ae=J?function(){return J.cur()}:function(){return Z.css(G,K,"")},ue=ae(),ge=X&&X[3]||(Z.cssNumber[K]?"":"px"),pe=(Z.cssNumber[K]||ge!=="px"&&+ue)&&Ft.exec(Z.css(G,K));if(pe&&pe[3]!==ge){ge=ge||pe[3],X=X||[],pe=+ue||1;do te=te||".5",pe=pe/te,Z.style(G,K,pe+ge);while(te!==(te=ae()/ue)&&te!==1&&--re)}return X&&(pe=+pe||+ue||0,ee=X[1]?pe+(X[1]+1)*X[2]:+X[2],J&&(J.unit=ge,J.start=pe,J.end=ee)),ee}var hr=/^(?:checkbox|radio)$/i,fr=/<([\w:-]+)/,nr=/^$|\/(?:java|ecma)script/i,gt={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};gt.optgroup=gt.option,gt.tbody=gt.tfoot=gt.colgroup=gt.caption=gt.thead,gt.th=gt.td;function ut(G,K){var X=typeof G.getElementsByTagName<"u"?G.getElementsByTagName(K||"*"):typeof G.querySelectorAll<"u"?G.querySelectorAll(K||"*"):[];return K===void 0||K&&Z.nodeName(G,K)?Z.merge([G],X):X}function ir(G,K){for(var X=0,J=G.length;X<J;X++)Me.set(G[X],"globalEval",!K||Me.get(K[X],"globalEval"))}var Pt=/<|&#?\w+;/;function qt(G,K,X,J,ee){for(var te,re,ae,ue,ge,pe,Ce=K.createDocumentFragment(),Oe=[],xe=0,Ge=G.length;xe<Ge;xe++)if(te=G[xe],te||te===0)if(Z.type(te)==="object")Z.merge(Oe,te.nodeType?[te]:te);else if(!Pt.test(te))Oe.push(K.createTextNode(te));else{for(re=re||Ce.appendChild(K.createElement("div")),ae=(fr.exec(te)||["",""])[1].toLowerCase(),ue=gt[ae]||gt._default,re.innerHTML=ue[1]+Z.htmlPrefilter(te)+ue[2],pe=ue[0];pe--;)re=re.lastChild;Z.merge(Oe,re.childNodes),re=Ce.firstChild,re.textContent=""}for(Ce.textContent="",xe=0;te=Oe[xe++];){if(J&&Z.inArray(te,J)>-1){ee&&ee.push(te);continue}if(ge=Z.contains(te.ownerDocument,te),re=ut(Ce.appendChild(te),"script"),ge&&ir(re),X)for(pe=0;te=re[pe++];)nr.test(te.type||"")&&X.push(te)}return Ce}(function(){var G=q.createDocumentFragment(),K=G.appendChild(q.createElement("div")),X=q.createElement("input");X.setAttribute("type","radio"),X.setAttribute("checked","checked"),X.setAttribute("name","t"),K.appendChild(X),fe.checkClone=K.cloneNode(!0).cloneNode(!0).lastChild.checked,K.innerHTML="<textarea>x</textarea>",fe.noCloneChecked=!!K.cloneNode(!0).lastChild.defaultValue})();var gr=/^key/,vr=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Yt=/^([^.]*)(?:\.(.+)|)/;function Vt(){return!0}function Tt(){return!1}function or(){try{return q.activeElement}catch{}}function Qt(G,K,X,J,ee,te){var re,ae;if(typeof K=="object"){typeof X!="string"&&(J=J||X,X=void 0);for(ae in K)Qt(G,ae,X,J,K[ae],te);return G}if(J==null&&ee==null?(ee=X,J=X=void 0):ee==null&&(typeof X=="string"?(ee=J,J=void 0):(ee=J,J=X,X=void 0)),ee===!1)ee=Tt;else if(!ee)return G;return te===1&&(re=ee,ee=function(ue){return Z().off(ue),re.apply(this,arguments)},ee.guid=re.guid||(re.guid=Z.guid++)),G.each(function(){Z.event.add(this,K,ee,J,X)})}Z.event={global:{},add:function(G,K,X,J,ee){var te,re,ae,ue,ge,pe,Ce,Oe,xe,Ge,ze,qe=Me.get(G);if(qe)for(X.handler&&(te=X,X=te.handler,ee=te.selector),X.guid||(X.guid=Z.guid++),(ue=qe.events)||(ue=qe.events={}),(re=qe.handle)||(re=qe.handle=function(yt){return typeof Z<"u"&&Z.event.triggered!==yt.type?Z.event.dispatch.apply(G,arguments):void 0}),K=(K||"").match(Ze)||[""],ge=K.length;ge--;)ae=Yt.exec(K[ge])||[],xe=ze=ae[1],Ge=(ae[2]||"").split(".").sort(),xe&&(Ce=Z.event.special[xe]||{},xe=(ee?Ce.delegateType:Ce.bindType)||xe,Ce=Z.event.special[xe]||{},pe=Z.extend({type:xe,origType:ze,data:J,handler:X,guid:X.guid,selector:ee,needsContext:ee&&Z.expr.match.needsContext.test(ee),namespace:Ge.join(".")},te),(Oe=ue[xe])||(Oe=ue[xe]=[],Oe.delegateCount=0,(!Ce.setup||Ce.setup.call(G,J,Ge,re)===!1)&&G.addEventListener&&G.addEventListener(xe,re)),Ce.add&&(Ce.add.call(G,pe),pe.handler.guid||(pe.handler.guid=X.guid)),ee?Oe.splice(Oe.delegateCount++,0,pe):Oe.push(pe),Z.event.global[xe]=!0)},remove:function(G,K,X,J,ee){var te,re,ae,ue,ge,pe,Ce,Oe,xe,Ge,ze,qe=Me.hasData(G)&&Me.get(G);if(!(!qe||!(ue=qe.events))){for(K=(K||"").match(Ze)||[""],ge=K.length;ge--;){if(ae=Yt.exec(K[ge])||[],xe=ze=ae[1],Ge=(ae[2]||"").split(".").sort(),!xe){for(xe in ue)Z.event.remove(G,xe+K[ge],X,J,!0);continue}for(Ce=Z.event.special[xe]||{},xe=(J?Ce.delegateType:Ce.bindType)||xe,Oe=ue[xe]||[],ae=ae[2]&&new RegExp("(^|\\.)"+Ge.join("\\.(?:.*\\.|)")+"(\\.|$)"),re=te=Oe.length;te--;)pe=Oe[te],(ee||ze===pe.origType)&&(!X||X.guid===pe.guid)&&(!ae||ae.test(pe.namespace))&&(!J||J===pe.selector||J==="**"&&pe.selector)&&(Oe.splice(te,1),pe.selector&&Oe.delegateCount--,Ce.remove&&Ce.remove.call(G,pe));re&&!Oe.length&&((!Ce.teardown||Ce.teardown.call(G,Ge,qe.handle)===!1)&&Z.removeEvent(G,xe,qe.handle),delete ue[xe])}Z.isEmptyObject(ue)&&Me.remove(G,"handle events")}},dispatch:function(G){G=Z.event.fix(G);var K,X,J,ee,te,re=[],ae=U.call(arguments),ue=(Me.get(this,"events")||{})[G.type]||[],ge=Z.event.special[G.type]||{};if(ae[0]=G,G.delegateTarget=this,!(ge.preDispatch&&ge.preDispatch.call(this,G)===!1)){for(re=Z.event.handlers.call(this,G,ue),K=0;(ee=re[K++])&&!G.isPropagationStopped();)for(G.currentTarget=ee.elem,X=0;(te=ee.handlers[X++])&&!G.isImmediatePropagationStopped();)(!G.rnamespace||G.rnamespace.test(te.namespace))&&(G.handleObj=te,G.data=te.data,J=((Z.event.special[te.origType]||{}).handle||te.handler).apply(ee.elem,ae),J!==void 0&&(G.result=J)===!1&&(G.preventDefault(),G.stopPropagation()));return ge.postDispatch&&ge.postDispatch.call(this,G),G.result}},handlers:function(G,K){var X,J,ee,te,re=[],ae=K.delegateCount,ue=G.target;if(ae&&ue.nodeType&&(G.type!=="click"||isNaN(G.button)||G.button<1)){for(;ue!==this;ue=ue.parentNode||this)if(ue.nodeType===1&&(ue.disabled!==!0||G.type!=="click")){for(J=[],X=0;X<ae;X++)te=K[X],ee=te.selector+" ",J[ee]===void 0&&(J[ee]=te.needsContext?Z(ee,this).index(ue)>-1:Z.find(ee,this,null,[ue]).length),J[ee]&&J.push(te);J.length&&re.push({elem:ue,handlers:J})}}return ae<K.length&&re.push({elem:this,handlers:K.slice(ae)}),re},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(G,K){return G.which==null&&(G.which=K.charCode!=null?K.charCode:K.keyCode),G}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(G,K){var X,J,ee,te=K.button;return G.pageX==null&&K.clientX!=null&&(X=G.target.ownerDocument||q,J=X.documentElement,ee=X.body,G.pageX=K.clientX+(J&&J.scrollLeft||ee&&ee.scrollLeft||0)-(J&&J.clientLeft||ee&&ee.clientLeft||0),G.pageY=K.clientY+(J&&J.scrollTop||ee&&ee.scrollTop||0)-(J&&J.clientTop||ee&&ee.clientTop||0)),!G.which&&te!==void 0&&(G.which=te&1?1:te&2?3:te&4?2:0),G}},fix:function(G){if(G[Z.expando])return G;var K,X,J,ee=G.type,te=G,re=this.fixHooks[ee];for(re||(this.fixHooks[ee]=re=vr.test(ee)?this.mouseHooks:gr.test(ee)?this.keyHooks:{}),J=re.props?this.props.concat(re.props):this.props,G=new Z.Event(te),K=J.length;K--;)X=J[K],G[X]=te[X];return G.target||(G.target=q),G.target.nodeType===3&&(G.target=G.target.parentNode),re.filter?re.filter(G,te):G},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==or()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===or()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(this.type==="checkbox"&&this.click&&Z.nodeName(this,"input"))return this.click(),!1},_default:function(G){return Z.nodeName(G.target,"a")}},beforeunload:{postDispatch:function(G){G.result!==void 0&&G.originalEvent&&(G.originalEvent.returnValue=G.result)}}}},Z.removeEvent=function(G,K,X){G.removeEventListener&&G.removeEventListener(K,X)},Z.Event=function(G,K){if(!(this instanceof Z.Event))return new Z.Event(G,K);G&&G.type?(this.originalEvent=G,this.type=G.type,this.isDefaultPrevented=G.defaultPrevented||G.defaultPrevented===void 0&&G.returnValue===!1?Vt:Tt):this.type=G,K&&Z.extend(this,K),this.timeStamp=G&&G.timeStamp||Z.now(),this[Z.expando]=!0},Z.Event.prototype={constructor:Z.Event,isDefaultPrevented:Tt,isPropagationStopped:Tt,isImmediatePropagationStopped:Tt,isSimulated:!1,preventDefault:function(){var G=this.originalEvent;this.isDefaultPrevented=Vt,G&&!this.isSimulated&&G.preventDefault()},stopPropagation:function(){var G=this.originalEvent;this.isPropagationStopped=Vt,G&&!this.isSimulated&&G.stopPropagation()},stopImmediatePropagation:function(){var G=this.originalEvent;this.isImmediatePropagationStopped=Vt,G&&!this.isSimulated&&G.stopImmediatePropagation(),this.stopPropagation()}},Z.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(G,K){Z.event.special[G]={delegateType:K,bindType:K,handle:function(X){var J,ee=this,te=X.relatedTarget,re=X.handleObj;return(!te||te!==ee&&!Z.contains(ee,te))&&(X.type=re.origType,J=re.handler.apply(this,arguments),X.type=K),J}}}),Z.fn.extend({on:function(G,K,X,J){return Qt(this,G,K,X,J)},one:function(G,K,X,J){return Qt(this,G,K,X,J,1)},off:function(G,K,X){var J,ee;if(G&&G.preventDefault&&G.handleObj)return J=G.handleObj,Z(G.delegateTarget).off(J.namespace?J.origType+"."+J.namespace:J.origType,J.selector,J.handler),this;if(typeof G=="object"){for(ee in G)this.off(ee,K,G[ee]);return this}return(K===!1||typeof K=="function")&&(X=K,K=void 0),X===!1&&(X=Tt),this.each(function(){Z.event.remove(this,G,X,K)})}});var Tn=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,Ln=/<script|<style|<link/i,Mn=/checked\s*(?:[^=]|=\s*.checked.)/i,In=/^true\/(.*)/,Dn=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Zr(G,K){return Z.nodeName(G,"table")&&Z.nodeName(K.nodeType!==11?K:K.firstChild,"tr")?G.getElementsByTagName("tbody")[0]||G.appendChild(G.ownerDocument.createElement("tbody")):G}function Bn(G){return G.type=(G.getAttribute("type")!==null)+"/"+G.type,G}function Rn(G){var K=In.exec(G.type);return K?G.type=K[1]:G.removeAttribute("type"),G}function Jr(G,K){var X,J,ee,te,re,ae,ue,ge;if(K.nodeType===1){if(Me.hasData(G)&&(te=Me.access(G),re=Me.set(K,te),ge=te.events,ge)){delete re.handle,re.events={};for(ee in ge)for(X=0,J=ge[ee].length;X<J;X++)Z.event.add(K,ee,ge[ee][X])}tt.hasData(G)&&(ae=tt.access(G),ue=Z.extend({},ae),tt.set(K,ue))}}function Hn(G,K){var X=K.nodeName.toLowerCase();X==="input"&&hr.test(G.type)?K.checked=G.checked:(X==="input"||X==="textarea")&&(K.defaultValue=G.defaultValue)}function Gt(G,K,X,J){K=W.apply([],K);var ee,te,re,ae,ue,ge,pe=0,Ce=G.length,Oe=Ce-1,xe=K[0],Ge=Z.isFunction(xe);if(Ge||Ce>1&&typeof xe=="string"&&!fe.checkClone&&Mn.test(xe))return G.each(function(ze){var qe=G.eq(ze);Ge&&(K[0]=xe.call(this,ze,qe.html())),Gt(qe,K,X,J)});if(Ce&&(ee=qt(K,G[0].ownerDocument,!1,G,J),te=ee.firstChild,ee.childNodes.length===1&&(ee=te),te||J)){for(re=Z.map(ut(ee,"script"),Bn),ae=re.length;pe<Ce;pe++)ue=ee,pe!==Oe&&(ue=Z.clone(ue,!0,!0),ae&&Z.merge(re,ut(ue,"script"))),X.call(G[pe],ue,pe);if(ae)for(ge=re[re.length-1].ownerDocument,Z.map(re,Rn),pe=0;pe<ae;pe++)ue=re[pe],nr.test(ue.type||"")&&!Me.access(ue,"globalEval")&&Z.contains(ge,ue)&&(ue.src?Z._evalUrl&&Z._evalUrl(ue.src):Z.globalEval(ue.textContent.replace(Dn,"")))}return G}function Yr(G,K,X){for(var J,ee=K?Z.filter(K,G):G,te=0;(J=ee[te])!=null;te++)!X&&J.nodeType===1&&Z.cleanData(ut(J)),J.parentNode&&(X&&Z.contains(J.ownerDocument,J)&&ir(ut(J,"script")),J.parentNode.removeChild(J));return G}Z.extend({htmlPrefilter:function(G){return G.replace(Tn,"<$1></$2>")},clone:function(G,K,X){var J,ee,te,re,ae=G.cloneNode(!0),ue=Z.contains(G.ownerDocument,G);if(!fe.noCloneChecked&&(G.nodeType===1||G.nodeType===11)&&!Z.isXMLDoc(G))for(re=ut(ae),te=ut(G),J=0,ee=te.length;J<ee;J++)Hn(te[J],re[J]);if(K)if(X)for(te=te||ut(G),re=re||ut(ae),J=0,ee=te.length;J<ee;J++)Jr(te[J],re[J]);else Jr(G,ae);return re=ut(ae,"script"),re.length>0&&ir(re,!ue&&ut(G,"script")),ae},cleanData:function(G){for(var K,X,J,ee=Z.event.special,te=0;(X=G[te])!==void 0;te++)if(ft(X)){if(K=X[Me.expando]){if(K.events)for(J in K.events)ee[J]?Z.event.remove(X,J):Z.removeEvent(X,J,K.handle);X[Me.expando]=void 0}X[tt.expando]&&(X[tt.expando]=void 0)}}}),Z.fn.extend({domManip:Gt,detach:function(G){return Yr(this,G,!0)},remove:function(G){return Yr(this,G)},text:function(G){return st(this,function(K){return K===void 0?Z.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=K)})},null,G,arguments.length)},append:function(){return Gt(this,arguments,function(G){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var K=Zr(this,G);K.appendChild(G)}})},prepend:function(){return Gt(this,arguments,function(G){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var K=Zr(this,G);K.insertBefore(G,K.firstChild)}})},before:function(){return Gt(this,arguments,function(G){this.parentNode&&this.parentNode.insertBefore(G,this)})},after:function(){return Gt(this,arguments,function(G){this.parentNode&&this.parentNode.insertBefore(G,this.nextSibling)})},empty:function(){for(var G,K=0;(G=this[K])!=null;K++)G.nodeType===1&&(Z.cleanData(ut(G,!1)),G.textContent="");return this},clone:function(G,K){return G=G??!1,K=K??G,this.map(function(){return Z.clone(this,G,K)})},html:function(G){return st(this,function(K){var X=this[0]||{},J=0,ee=this.length;if(K===void 0&&X.nodeType===1)return X.innerHTML;if(typeof K=="string"&&!Ln.test(K)&&!gt[(fr.exec(K)||["",""])[1].toLowerCase()]){K=Z.htmlPrefilter(K);try{for(;J<ee;J++)X=this[J]||{},X.nodeType===1&&(Z.cleanData(ut(X,!1)),X.innerHTML=K);X=0}catch{}}X&&this.empty().append(K)},null,G,arguments.length)},replaceWith:function(){var G=[];return Gt(this,arguments,function(K){var X=this.parentNode;Z.inArray(this,G)<0&&(Z.cleanData(ut(this)),X&&X.replaceChild(K,this))},G)}}),Z.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(G,K){Z.fn[G]=function(X){for(var J,ee=[],te=Z(X),re=te.length-1,ae=0;ae<=re;ae++)J=ae===re?this:this.clone(!0),Z(te[ae])[K](J),Y.apply(ee,J.get());return this.pushStack(ee)}});var wr,Qr={HTML:"block",BODY:"block"};function en(G,K){var X=Z(K.createElement(G)).appendTo(K.body),J=Z.css(X[0],"display");return X.detach(),J}function Sr(G){var K=q,X=Qr[G];return X||(X=en(G,K),(X==="none"||!X)&&(wr=(wr||Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(K.documentElement),K=wr[0].contentDocument,K.write(),K.close(),X=en(G,K),wr.detach()),Qr[G]=X),X}var tn=/^margin/,Or=new RegExp("^("+Jt+")(?!px)[a-z%]+$","i"),_r=function(G){var K=G.ownerDocument.defaultView;return(!K||!K.opener)&&(K=w),K.getComputedStyle(G)},Er=function(G,K,X,J){var ee,te,re={};for(te in K)re[te]=G.style[te],G.style[te]=K[te];ee=X.apply(G,J||[]);for(te in K)G.style[te]=re[te];return ee},ar=q.documentElement;(function(){var G,K,X,J,ee=q.createElement("div"),te=q.createElement("div");if(!te.style)return;te.style.backgroundClip="content-box",te.cloneNode(!0).style.backgroundClip="",fe.clearCloneStyle=te.style.backgroundClip==="content-box",ee.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",ee.appendChild(te);function re(){te.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",te.innerHTML="",ar.appendChild(ee);var ae=w.getComputedStyle(te);G=ae.top!=="1%",J=ae.marginLeft==="2px",K=ae.width==="4px",te.style.marginRight="50%",X=ae.marginRight==="4px",ar.removeChild(ee)}Z.extend(fe,{pixelPosition:function(){return re(),G},boxSizingReliable:function(){return K==null&&re(),K},pixelMarginRight:function(){return K==null&&re(),X},reliableMarginLeft:function(){return K==null&&re(),J},reliableMarginRight:function(){var ae,ue=te.appendChild(q.createElement("div"));return ue.style.cssText=te.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",ue.style.marginRight=ue.style.width="0",te.style.width="1px",ar.appendChild(ee),ae=!parseFloat(w.getComputedStyle(ue).marginRight),ar.removeChild(ee),te.removeChild(ue),ae}})})();function er(G,K,X){var J,ee,te,re,ae=G.style;return X=X||_r(G),re=X?X.getPropertyValue(K)||X[K]:void 0,(re===""||re===void 0)&&!Z.contains(G.ownerDocument,G)&&(re=Z.style(G,K)),X&&!fe.pixelMarginRight()&&Or.test(re)&&tn.test(K)&&(J=ae.width,ee=ae.minWidth,te=ae.maxWidth,ae.minWidth=ae.maxWidth=ae.width=re,re=X.width,ae.width=J,ae.minWidth=ee,ae.maxWidth=te),re!==void 0?re+"":re}function Pr(G,K){return{get:function(){if(G()){delete this.get;return}return(this.get=K).apply(this,arguments)}}}var Nn=/^(none|table(?!-c[ea]).+)/,jn={position:"absolute",visibility:"hidden",display:"block"},rn={letterSpacing:"0",fontWeight:"400"},nn=["Webkit","O","Moz","ms"],on=q.createElement("div").style;function an(G){if(G in on)return G;for(var K=G[0].toUpperCase()+G.slice(1),X=nn.length;X--;)if(G=nn[X]+K,G in on)return G}function sn(G,K,X){var J=Ft.exec(K);return J?Math.max(0,J[2]-(X||0))+(J[3]||"px"):K}function cn(G,K,X,J,ee){for(var te=X===(J?"border":"content")?4:K==="width"?1:0,re=0;te<4;te+=2)X==="margin"&&(re+=Z.css(G,X+At[te],!0,ee)),J?(X==="content"&&(re-=Z.css(G,"padding"+At[te],!0,ee)),X!=="margin"&&(re-=Z.css(G,"border"+At[te]+"Width",!0,ee))):(re+=Z.css(G,"padding"+At[te],!0,ee),X!=="padding"&&(re+=Z.css(G,"border"+At[te]+"Width",!0,ee)));return re}function ln(G,K,X){var J=!0,ee=K==="width"?G.offsetWidth:G.offsetHeight,te=_r(G),re=Z.css(G,"boxSizing",!1,te)==="border-box";if(ee<=0||ee==null){if(ee=er(G,K,te),(ee<0||ee==null)&&(ee=G.style[K]),Or.test(ee))return ee;J=re&&(fe.boxSizingReliable()||ee===G.style[K]),ee=parseFloat(ee)||0}return ee+cn(G,K,X||(re?"border":"content"),J,te)+"px"}function un(G,K){for(var X,J,ee,te=[],re=0,ae=G.length;re<ae;re++)J=G[re],J.style&&(te[re]=Me.get(J,"olddisplay"),X=J.style.display,K?(!te[re]&&X==="none"&&(J.style.display=""),J.style.display===""&&zt(J)&&(te[re]=Me.access(J,"olddisplay",Sr(J.nodeName)))):(ee=zt(J),(X!=="none"||!ee)&&Me.set(J,"olddisplay",ee?X:Z.css(J,"display"))));for(re=0;re<ae;re++)J=G[re],J.style&&(!K||J.style.display==="none"||J.style.display==="")&&(J.style.display=K?te[re]||"":"none");return G}Z.extend({cssHooks:{opacity:{get:function(G,K){if(K){var X=er(G,"opacity");return X===""?"1":X}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(G,K,X,J){if(!(!G||G.nodeType===3||G.nodeType===8||!G.style)){var ee,te,re,ae=Z.camelCase(K),ue=G.style;if(K=Z.cssProps[ae]||(Z.cssProps[ae]=an(ae)||ae),re=Z.cssHooks[K]||Z.cssHooks[ae],X!==void 0){if(te=typeof X,te==="string"&&(ee=Ft.exec(X))&&ee[1]&&(X=rr(G,K,ee),te="number"),X==null||X!==X)return;te==="number"&&(X+=ee&&ee[3]||(Z.cssNumber[ae]?"":"px")),!fe.clearCloneStyle&&X===""&&K.indexOf("background")===0&&(ue[K]="inherit"),(!re||!("set"in re)||(X=re.set(G,X,J))!==void 0)&&(ue[K]=X)}else return re&&"get"in re&&(ee=re.get(G,!1,J))!==void 0?ee:ue[K]}},css:function(G,K,X,J){var ee,te,re,ae=Z.camelCase(K);return K=Z.cssProps[ae]||(Z.cssProps[ae]=an(ae)||ae),re=Z.cssHooks[K]||Z.cssHooks[ae],re&&"get"in re&&(ee=re.get(G,!0,X)),ee===void 0&&(ee=er(G,K,J)),ee==="normal"&&K in rn&&(ee=rn[K]),X===""||X?(te=parseFloat(ee),X===!0||isFinite(te)?te||0:ee):ee}}),Z.each(["height","width"],function(G,K){Z.cssHooks[K]={get:function(X,J,ee){if(J)return Nn.test(Z.css(X,"display"))&&X.offsetWidth===0?Er(X,jn,function(){return ln(X,K,ee)}):ln(X,K,ee)},set:function(X,J,ee){var te,re=ee&&_r(X),ae=ee&&cn(X,K,ee,Z.css(X,"boxSizing",!1,re)==="border-box",re);return ae&&(te=Ft.exec(J))&&(te[3]||"px")!=="px"&&(X.style[K]=J,J=Z.css(X,K)),sn(X,J,ae)}}}),Z.cssHooks.marginLeft=Pr(fe.reliableMarginLeft,function(G,K){if(K)return(parseFloat(er(G,"marginLeft"))||G.getBoundingClientRect().left-Er(G,{marginLeft:0},function(){return G.getBoundingClientRect().left}))+"px"}),Z.cssHooks.marginRight=Pr(fe.reliableMarginRight,function(G,K){if(K)return Er(G,{display:"inline-block"},er,[G,"marginRight"])}),Z.each({margin:"",padding:"",border:"Width"},function(G,K){Z.cssHooks[G+K]={expand:function(X){for(var J=0,ee={},te=typeof X=="string"?X.split(" "):[X];J<4;J++)ee[G+At[J]+K]=te[J]||te[J-2]||te[0];return ee}},tn.test(G)||(Z.cssHooks[G+K].set=sn)}),Z.fn.extend({css:function(G,K){return st(this,function(X,J,ee){var te,re,ae={},ue=0;if(Z.isArray(J)){for(te=_r(X),re=J.length;ue<re;ue++)ae[J[ue]]=Z.css(X,J[ue],!1,te);return ae}return ee!==void 0?Z.style(X,J,ee):Z.css(X,J)},G,K,arguments.length>1)},show:function(){return un(this,!0)},hide:function(){return un(this)},toggle:function(G){return typeof G=="boolean"?G?this.show():this.hide():this.each(function(){zt(this)?Z(this).show():Z(this).hide()})}});function wt(G,K,X,J,ee){return new wt.prototype.init(G,K,X,J,ee)}Z.Tween=wt,wt.prototype={constructor:wt,init:function(G,K,X,J,ee,te){this.elem=G,this.prop=X,this.easing=ee||Z.easing._default,this.options=K,this.start=this.now=this.cur(),this.end=J,this.unit=te||(Z.cssNumber[X]?"":"px")},cur:function(){var G=wt.propHooks[this.prop];return G&&G.get?G.get(this):wt.propHooks._default.get(this)},run:function(G){var K,X=wt.propHooks[this.prop];return this.options.duration?this.pos=K=Z.easing[this.easing](G,this.options.duration*G,0,1,this.options.duration):this.pos=K=G,this.now=(this.end-this.start)*K+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),X&&X.set?X.set(this):wt.propHooks._default.set(this),this}},wt.prototype.init.prototype=wt.prototype,wt.propHooks={_default:{get:function(G){var K;return G.elem.nodeType!==1||G.elem[G.prop]!=null&&G.elem.style[G.prop]==null?G.elem[G.prop]:(K=Z.css(G.elem,G.prop,""),!K||K==="auto"?0:K)},set:function(G){Z.fx.step[G.prop]?Z.fx.step[G.prop](G):G.elem.nodeType===1&&(G.elem.style[Z.cssProps[G.prop]]!=null||Z.cssHooks[G.prop])?Z.style(G.elem,G.prop,G.now+G.unit):G.elem[G.prop]=G.now}}},wt.propHooks.scrollTop=wt.propHooks.scrollLeft={set:function(G){G.elem.nodeType&&G.elem.parentNode&&(G.elem[G.prop]=G.now)}},Z.easing={linear:function(G){return G},swing:function(G){return .5-Math.cos(G*Math.PI)/2},_default:"swing"},Z.fx=wt.prototype.init,Z.fx.step={};var tr,br,Fn=/^(?:toggle|show|hide)$/,zn=/queueHooks$/;function pn(){return w.setTimeout(function(){tr=void 0}),tr=Z.now()}function mr(G,K){var X,J=0,ee={height:G};for(K=K?1:0;J<4;J+=2-K)X=At[J],ee["margin"+X]=ee["padding"+X]=G;return K&&(ee.opacity=ee.width=G),ee}function dn(G,K,X){for(var J,ee=(kt.tweeners[K]||[]).concat(kt.tweeners["*"]),te=0,re=ee.length;te<re;te++)if(J=ee[te].call(X,K,G))return J}function qn(G,K,X){var J,ee,te,re,ae,ue,ge,pe,Ce=this,Oe={},xe=G.style,Ge=G.nodeType&&zt(G),ze=Me.get(G,"fxshow");X.queue||(ae=Z._queueHooks(G,"fx"),ae.unqueued==null&&(ae.unqueued=0,ue=ae.empty.fire,ae.empty.fire=function(){ae.unqueued||ue()}),ae.unqueued++,Ce.always(function(){Ce.always(function(){ae.unqueued--,Z.queue(G,"fx").length||ae.empty.fire()})})),G.nodeType===1&&("height"in K||"width"in K)&&(X.overflow=[xe.overflow,xe.overflowX,xe.overflowY],ge=Z.css(G,"display"),pe=ge==="none"?Me.get(G,"olddisplay")||Sr(G.nodeName):ge,pe==="inline"&&Z.css(G,"float")==="none"&&(xe.display="inline-block")),X.overflow&&(xe.overflow="hidden",Ce.always(function(){xe.overflow=X.overflow[0],xe.overflowX=X.overflow[1],xe.overflowY=X.overflow[2]}));for(J in K)if(ee=K[J],Fn.exec(ee)){if(delete K[J],te=te||ee==="toggle",ee===(Ge?"hide":"show"))if(ee==="show"&&ze&&ze[J]!==void 0)Ge=!0;else continue;Oe[J]=ze&&ze[J]||Z.style(G,J)}else ge=void 0;if(Z.isEmptyObject(Oe))(ge==="none"?Sr(G.nodeName):ge)==="inline"&&(xe.display=ge);else{ze?"hidden"in ze&&(Ge=ze.hidden):ze=Me.access(G,"fxshow",{}),te&&(ze.hidden=!Ge),Ge?Z(G).show():Ce.done(function(){Z(G).hide()}),Ce.done(function(){var qe;Me.remove(G,"fxshow");for(qe in Oe)Z.style(G,qe,Oe[qe])});for(J in Oe)re=dn(Ge?ze[J]:0,J,Ce),J in ze||(ze[J]=re.start,Ge&&(re.end=re.start,re.start=J==="width"||J==="height"?1:0))}}function Vn(G,K){var X,J,ee,te,re;for(X in G)if(J=Z.camelCase(X),ee=K[J],te=G[X],Z.isArray(te)&&(ee=te[1],te=G[X]=te[0]),X!==J&&(G[J]=te,delete G[X]),re=Z.cssHooks[J],re&&"expand"in re){te=re.expand(te),delete G[J];for(X in te)X in G||(G[X]=te[X],K[X]=ee)}else K[J]=ee}function kt(G,K,X){var J,ee,te=0,re=kt.prefilters.length,ae=Z.Deferred().always(function(){delete ue.elem}),ue=function(){if(ee)return!1;for(var Ce=tr||pn(),Oe=Math.max(0,ge.startTime+ge.duration-Ce),xe=Oe/ge.duration||0,Ge=1-xe,ze=0,qe=ge.tweens.length;ze<qe;ze++)ge.tweens[ze].run(Ge);return ae.notifyWith(G,[ge,Ge,Oe]),Ge<1&&qe?Oe:(ae.resolveWith(G,[ge]),!1)},ge=ae.promise({elem:G,props:Z.extend({},K),opts:Z.extend(!0,{specialEasing:{},easing:Z.easing._default},X),originalProperties:K,originalOptions:X,startTime:tr||pn(),duration:X.duration,tweens:[],createTween:function(Ce,Oe){var xe=Z.Tween(G,ge.opts,Ce,Oe,ge.opts.specialEasing[Ce]||ge.opts.easing);return ge.tweens.push(xe),xe},stop:function(Ce){var Oe=0,xe=Ce?ge.tweens.length:0;if(ee)return this;for(ee=!0;Oe<xe;Oe++)ge.tweens[Oe].run(1);return Ce?(ae.notifyWith(G,[ge,1,0]),ae.resolveWith(G,[ge,Ce])):ae.rejectWith(G,[ge,Ce]),this}}),pe=ge.props;for(Vn(pe,ge.opts.specialEasing);te<re;te++)if(J=kt.prefilters[te].call(ge,G,pe,ge.opts),J)return Z.isFunction(J.stop)&&(Z._queueHooks(ge.elem,ge.opts.queue).stop=Z.proxy(J.stop,J)),J;return Z.map(pe,dn,ge),Z.isFunction(ge.opts.start)&&ge.opts.start.call(G,ge),Z.fx.timer(Z.extend(ue,{elem:G,anim:ge,queue:ge.opts.queue})),ge.progress(ge.opts.progress).done(ge.opts.done,ge.opts.complete).fail(ge.opts.fail).always(ge.opts.always)}Z.Animation=Z.extend(kt,{tweeners:{"*":[function(G,K){var X=this.createTween(G,K);return rr(X.elem,G,Ft.exec(K),X),X}]},tweener:function(G,K){Z.isFunction(G)?(K=G,G=["*"]):G=G.match(Ze);for(var X,J=0,ee=G.length;J<ee;J++)X=G[J],kt.tweeners[X]=kt.tweeners[X]||[],kt.tweeners[X].unshift(K)},prefilters:[qn],prefilter:function(G,K){K?kt.prefilters.unshift(G):kt.prefilters.push(G)}}),Z.speed=function(G,K,X){var J=G&&typeof G=="object"?Z.extend({},G):{complete:X||!X&&K||Z.isFunction(G)&&G,duration:G,easing:X&&K||K&&!Z.isFunction(K)&&K};return J.duration=Z.fx.off?0:typeof J.duration=="number"?J.duration:J.duration in Z.fx.speeds?Z.fx.speeds[J.duration]:Z.fx.speeds._default,(J.queue==null||J.queue===!0)&&(J.queue="fx"),J.old=J.complete,J.complete=function(){Z.isFunction(J.old)&&J.old.call(this),J.queue&&Z.dequeue(this,J.queue)},J},Z.fn.extend({fadeTo:function(G,K,X,J){return this.filter(zt).css("opacity",0).show().end().animate({opacity:K},G,X,J)},animate:function(G,K,X,J){var ee=Z.isEmptyObject(G),te=Z.speed(K,X,J),re=function(){var ae=kt(this,Z.extend({},G),te);(ee||Me.get(this,"finish"))&&ae.stop(!0)};return re.finish=re,ee||te.queue===!1?this.each(re):this.queue(te.queue,re)},stop:function(G,K,X){var J=function(ee){var te=ee.stop;delete ee.stop,te(X)};return typeof G!="string"&&(X=K,K=G,G=void 0),K&&G!==!1&&this.queue(G||"fx",[]),this.each(function(){var ee=!0,te=G!=null&&G+"queueHooks",re=Z.timers,ae=Me.get(this);if(te)ae[te]&&ae[te].stop&&J(ae[te]);else for(te in ae)ae[te]&&ae[te].stop&&zn.test(te)&&J(ae[te]);for(te=re.length;te--;)re[te].elem===this&&(G==null||re[te].queue===G)&&(re[te].anim.stop(X),ee=!1,re.splice(te,1));(ee||!X)&&Z.dequeue(this,G)})},finish:function(G){return G!==!1&&(G=G||"fx"),this.each(function(){var K,X=Me.get(this),J=X[G+"queue"],ee=X[G+"queueHooks"],te=Z.timers,re=J?J.length:0;for(X.finish=!0,Z.queue(this,G,[]),ee&&ee.stop&&ee.stop.call(this,!0),K=te.length;K--;)te[K].elem===this&&te[K].queue===G&&(te[K].anim.stop(!0),te.splice(K,1));for(K=0;K<re;K++)J[K]&&J[K].finish&&J[K].finish.call(this);delete X.finish})}}),Z.each(["toggle","show","hide"],function(G,K){var X=Z.fn[K];Z.fn[K]=function(J,ee,te){return J==null||typeof J=="boolean"?X.apply(this,arguments):this.animate(mr(K,!0),J,ee,te)}}),Z.each({slideDown:mr("show"),slideUp:mr("hide"),slideToggle:mr("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(G,K){Z.fn[G]=function(X,J,ee){return this.animate(K,X,J,ee)}}),Z.timers=[],Z.fx.tick=function(){var G,K=0,X=Z.timers;for(tr=Z.now();K<X.length;K++)G=X[K],!G()&&X[K]===G&&X.splice(K--,1);X.length||Z.fx.stop(),tr=void 0},Z.fx.timer=function(G){Z.timers.push(G),G()?Z.fx.start():Z.timers.pop()},Z.fx.interval=13,Z.fx.start=function(){br||(br=w.setInterval(Z.fx.tick,Z.fx.interval))},Z.fx.stop=function(){w.clearInterval(br),br=null},Z.fx.speeds={slow:600,fast:200,_default:400},Z.fn.delay=function(G,K){return G=Z.fx&&Z.fx.speeds[G]||G,K=K||"fx",this.queue(K,function(X,J){var ee=w.setTimeout(X,G);J.stop=function(){w.clearTimeout(ee)}})},function(){var G=q.createElement("input"),K=q.createElement("select"),X=K.appendChild(q.createElement("option"));G.type="checkbox",fe.checkOn=G.value!=="",fe.optSelected=X.selected,K.disabled=!0,fe.optDisabled=!X.disabled,G=q.createElement("input"),G.value="t",G.type="radio",fe.radioValue=G.value==="t"}();var hn,sr=Z.expr.attrHandle;Z.fn.extend({attr:function(G,K){return st(this,Z.attr,G,K,arguments.length>1)},removeAttr:function(G){return this.each(function(){Z.removeAttr(this,G)})}}),Z.extend({attr:function(G,K,X){var J,ee,te=G.nodeType;if(!(te===3||te===8||te===2)){if(typeof G.getAttribute>"u")return Z.prop(G,K,X);if((te!==1||!Z.isXMLDoc(G))&&(K=K.toLowerCase(),ee=Z.attrHooks[K]||(Z.expr.match.bool.test(K)?hn:void 0)),X!==void 0){if(X===null){Z.removeAttr(G,K);return}return ee&&"set"in ee&&(J=ee.set(G,X,K))!==void 0?J:(G.setAttribute(K,X+""),X)}return ee&&"get"in ee&&(J=ee.get(G,K))!==null?J:(J=Z.find.attr(G,K),J??void 0)}},attrHooks:{type:{set:function(G,K){if(!fe.radioValue&&K==="radio"&&Z.nodeName(G,"input")){var X=G.value;return G.setAttribute("type",K),X&&(G.value=X),K}}}},removeAttr:function(G,K){var X,J,ee=0,te=K&&K.match(Ze);if(te&&G.nodeType===1)for(;X=te[ee++];)J=Z.propFix[X]||X,Z.expr.match.bool.test(X)&&(G[J]=!1),G.removeAttribute(X)}}),hn={set:function(G,K,X){return K===!1?Z.removeAttr(G,X):G.setAttribute(X,X),X}},Z.each(Z.expr.match.bool.source.match(/\w+/g),function(G,K){var X=sr[K]||Z.find.attr;sr[K]=function(J,ee,te){var re,ae;return te||(ae=sr[ee],sr[ee]=re,re=X(J,ee,te)!=null?ee.toLowerCase():null,sr[ee]=ae),re}});var Gn=/^(?:input|select|textarea|button)$/i,Un=/^(?:a|area)$/i;Z.fn.extend({prop:function(G,K){return st(this,Z.prop,G,K,arguments.length>1)},removeProp:function(G){return this.each(function(){delete this[Z.propFix[G]||G]})}}),Z.extend({prop:function(G,K,X){var J,ee,te=G.nodeType;if(!(te===3||te===8||te===2))return(te!==1||!Z.isXMLDoc(G))&&(K=Z.propFix[K]||K,ee=Z.propHooks[K]),X!==void 0?ee&&"set"in ee&&(J=ee.set(G,X,K))!==void 0?J:G[K]=X:ee&&"get"in ee&&(J=ee.get(G,K))!==null?J:G[K]},propHooks:{tabIndex:{get:function(G){var K=Z.find.attr(G,"tabindex");return K?parseInt(K,10):Gn.test(G.nodeName)||Un.test(G.nodeName)&&G.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),fe.optSelected||(Z.propHooks.selected={get:function(G){var K=G.parentNode;return K&&K.parentNode&&K.parentNode.selectedIndex,null},set:function(G){var K=G.parentNode;K&&(K.selectedIndex,K.parentNode&&K.parentNode.selectedIndex)}}),Z.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){Z.propFix[this.toLowerCase()]=this});var Tr=/[\t\r\n\f]/g;function Ut(G){return G.getAttribute&&G.getAttribute("class")||""}Z.fn.extend({addClass:function(G){var K,X,J,ee,te,re,ae,ue=0;if(Z.isFunction(G))return this.each(function(ge){Z(this).addClass(G.call(this,ge,Ut(this)))});if(typeof G=="string"&&G){for(K=G.match(Ze)||[];X=this[ue++];)if(ee=Ut(X),J=X.nodeType===1&&(" "+ee+" ").replace(Tr," "),J){for(re=0;te=K[re++];)J.indexOf(" "+te+" ")<0&&(J+=te+" ");ae=Z.trim(J),ee!==ae&&X.setAttribute("class",ae)}}return this},removeClass:function(G){var K,X,J,ee,te,re,ae,ue=0;if(Z.isFunction(G))return this.each(function(ge){Z(this).removeClass(G.call(this,ge,Ut(this)))});if(!arguments.length)return this.attr("class","");if(typeof G=="string"&&G){for(K=G.match(Ze)||[];X=this[ue++];)if(ee=Ut(X),J=X.nodeType===1&&(" "+ee+" ").replace(Tr," "),J){for(re=0;te=K[re++];)for(;J.indexOf(" "+te+" ")>-1;)J=J.replace(" "+te+" "," ");ae=Z.trim(J),ee!==ae&&X.setAttribute("class",ae)}}return this},toggleClass:function(G,K){var X=typeof G;return typeof K=="boolean"&&X==="string"?K?this.addClass(G):this.removeClass(G):Z.isFunction(G)?this.each(function(J){Z(this).toggleClass(G.call(this,J,Ut(this),K),K)}):this.each(function(){var J,ee,te,re;if(X==="string")for(ee=0,te=Z(this),re=G.match(Ze)||[];J=re[ee++];)te.hasClass(J)?te.removeClass(J):te.addClass(J);else(G===void 0||X==="boolean")&&(J=Ut(this),J&&Me.set(this,"__className__",J),this.setAttribute&&this.setAttribute("class",J||G===!1?"":Me.get(this,"__className__")||""))})},hasClass:function(G){var K,X,J=0;for(K=" "+G+" ";X=this[J++];)if(X.nodeType===1&&(" "+Ut(X)+" ").replace(Tr," ").indexOf(K)>-1)return!0;return!1}});var Wn=/\r/g,Kn=/[\x20\t\r\n\f]+/g;Z.fn.extend({val:function(G){var K,X,J,ee=this[0];return arguments.length?(J=Z.isFunction(G),this.each(function(te){var re;this.nodeType===1&&(J?re=G.call(this,te,Z(this).val()):re=G,re==null?re="":typeof re=="number"?re+="":Z.isArray(re)&&(re=Z.map(re,function(ae){return ae==null?"":ae+""})),K=Z.valHooks[this.type]||Z.valHooks[this.nodeName.toLowerCase()],(!K||!("set"in K)||K.set(this,re,"value")===void 0)&&(this.value=re))})):ee?(K=Z.valHooks[ee.type]||Z.valHooks[ee.nodeName.toLowerCase()],K&&"get"in K&&(X=K.get(ee,"value"))!==void 0?X:(X=ee.value,typeof X=="string"?X.replace(Wn,""):X??"")):void 0}}),Z.extend({valHooks:{option:{get:function(G){var K=Z.find.attr(G,"value");return K??Z.trim(Z.text(G)).replace(Kn," ")}},select:{get:function(G){for(var K,X,J=G.options,ee=G.selectedIndex,te=G.type==="select-one"||ee<0,re=te?null:[],ae=te?ee+1:J.length,ue=ee<0?ae:te?ee:0;ue<ae;ue++)if(X=J[ue],(X.selected||ue===ee)&&(fe.optDisabled?!X.disabled:X.getAttribute("disabled")===null)&&(!X.parentNode.disabled||!Z.nodeName(X.parentNode,"optgroup"))){if(K=Z(X).val(),te)return K;re.push(K)}return re},set:function(G,K){for(var X,J,ee=G.options,te=Z.makeArray(K),re=ee.length;re--;)J=ee[re],(J.selected=Z.inArray(Z.valHooks.option.get(J),te)>-1)&&(X=!0);return X||(G.selectedIndex=-1),te}}}}),Z.each(["radio","checkbox"],function(){Z.valHooks[this]={set:function(G,K){if(Z.isArray(K))return G.checked=Z.inArray(Z(G).val(),K)>-1}},fe.checkOn||(Z.valHooks[this].get=function(G){return G.getAttribute("value")===null?"on":G.value})});var gn=/^(?:focusinfocus|focusoutblur)$/;Z.extend(Z.event,{trigger:function(G,K,X,J){var ee,te,re,ae,ue,ge,pe,Ce=[X||q],Oe=ce.call(G,"type")?G.type:G,xe=ce.call(G,"namespace")?G.namespace.split("."):[];if(te=re=X=X||q,!(X.nodeType===3||X.nodeType===8)&&!gn.test(Oe+Z.event.triggered)&&(Oe.indexOf(".")>-1&&(xe=Oe.split("."),Oe=xe.shift(),xe.sort()),ue=Oe.indexOf(":")<0&&"on"+Oe,G=G[Z.expando]?G:new Z.Event(Oe,typeof G=="object"&&G),G.isTrigger=J?2:3,G.namespace=xe.join("."),G.rnamespace=G.namespace?new RegExp("(^|\\.)"+xe.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,G.result=void 0,G.target||(G.target=X),K=K==null?[G]:Z.makeArray(K,[G]),pe=Z.event.special[Oe]||{},!(!J&&pe.trigger&&pe.trigger.apply(X,K)===!1))){if(!J&&!pe.noBubble&&!Z.isWindow(X)){for(ae=pe.delegateType||Oe,gn.test(ae+Oe)||(te=te.parentNode);te;te=te.parentNode)Ce.push(te),re=te;re===(X.ownerDocument||q)&&Ce.push(re.defaultView||re.parentWindow||w)}for(ee=0;(te=Ce[ee++])&&!G.isPropagationStopped();)G.type=ee>1?ae:pe.bindType||Oe,ge=(Me.get(te,"events")||{})[G.type]&&Me.get(te,"handle"),ge&&ge.apply(te,K),ge=ue&&te[ue],ge&&ge.apply&&ft(te)&&(G.result=ge.apply(te,K),G.result===!1&&G.preventDefault());return G.type=Oe,!J&&!G.isDefaultPrevented()&&(!pe._default||pe._default.apply(Ce.pop(),K)===!1)&&ft(X)&&ue&&Z.isFunction(X[Oe])&&!Z.isWindow(X)&&(re=X[ue],re&&(X[ue]=null),Z.event.triggered=Oe,X[Oe](),Z.event.triggered=void 0,re&&(X[ue]=re)),G.result}},simulate:function(G,K,X){var J=Z.extend(new Z.Event,X,{type:G,isSimulated:!0});Z.event.trigger(J,null,K)}}),Z.fn.extend({trigger:function(G,K){return this.each(function(){Z.event.trigger(G,K,this)})},triggerHandler:function(G,K){var X=this[0];if(X)return Z.event.trigger(G,K,X,!0)}}),Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(G,K){Z.fn[K]=function(X,J){return arguments.length>0?this.on(K,null,X,J):this.trigger(K)}}),Z.fn.extend({hover:function(G,K){return this.mouseenter(G).mouseleave(K||G)}}),fe.focusin="onfocusin"in w,fe.focusin||Z.each({focus:"focusin",blur:"focusout"},function(G,K){var X=function(J){Z.event.simulate(K,J.target,Z.event.fix(J))};Z.event.special[K]={setup:function(){var J=this.ownerDocument||this,ee=Me.access(J,K);ee||J.addEventListener(G,X,!0),Me.access(J,K,(ee||0)+1)},teardown:function(){var J=this.ownerDocument||this,ee=Me.access(J,K)-1;ee?Me.access(J,K,ee):(J.removeEventListener(G,X,!0),Me.remove(J,K))}}});var cr=w.location,Lr=Z.now(),Mr=/\?/;Z.parseJSON=function(G){return JSON.parse(G+"")},Z.parseXML=function(G){var K;if(!G||typeof G!="string")return null;try{K=new w.DOMParser().parseFromString(G,"text/xml")}catch{K=void 0}return(!K||K.getElementsByTagName("parsererror").length)&&Z.error("Invalid XML: "+G),K};var Xn=/#.*$/,vn=/([?&])_=[^&]*/,Zn=/^(.*?):[ \t]*([^\r\n]*)$/mg,Jn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Yn=/^(?:GET|HEAD)$/,Qn=/^\/\//,wn={},Ir={},_n="*/".concat("*"),Dr=q.createElement("a");Dr.href=cr.href;function bn(G){return function(K,X){typeof K!="string"&&(X=K,K="*");var J,ee=0,te=K.toLowerCase().match(Ze)||[];if(Z.isFunction(X))for(;J=te[ee++];)J[0]==="+"?(J=J.slice(1)||"*",(G[J]=G[J]||[]).unshift(X)):(G[J]=G[J]||[]).push(X)}}function mn(G,K,X,J){var ee={},te=G===Ir;function re(ae){var ue;return ee[ae]=!0,Z.each(G[ae]||[],function(ge,pe){var Ce=pe(K,X,J);if(typeof Ce=="string"&&!te&&!ee[Ce])return K.dataTypes.unshift(Ce),re(Ce),!1;if(te)return!(ue=Ce)}),ue}return re(K.dataTypes[0])||!ee["*"]&&re("*")}function Br(G,K){var X,J,ee=Z.ajaxSettings.flatOptions||{};for(X in K)K[X]!==void 0&&((ee[X]?G:J||(J={}))[X]=K[X]);return J&&Z.extend(!0,G,J),G}function ei(G,K,X){for(var J,ee,te,re,ae=G.contents,ue=G.dataTypes;ue[0]==="*";)ue.shift(),J===void 0&&(J=G.mimeType||K.getResponseHeader("Content-Type"));if(J){for(ee in ae)if(ae[ee]&&ae[ee].test(J)){ue.unshift(ee);break}}if(ue[0]in X)te=ue[0];else{for(ee in X){if(!ue[0]||G.converters[ee+" "+ue[0]]){te=ee;break}re||(re=ee)}te=te||re}if(te)return te!==ue[0]&&ue.unshift(te),X[te]}function ti(G,K,X,J){var ee,te,re,ae,ue,ge={},pe=G.dataTypes.slice();if(pe[1])for(re in G.converters)ge[re.toLowerCase()]=G.converters[re];for(te=pe.shift();te;)if(G.responseFields[te]&&(X[G.responseFields[te]]=K),!ue&&J&&G.dataFilter&&(K=G.dataFilter(K,G.dataType)),ue=te,te=pe.shift(),te){if(te==="*")te=ue;else if(ue!=="*"&&ue!==te){if(re=ge[ue+" "+te]||ge["* "+te],!re){for(ee in ge)if(ae=ee.split(" "),ae[1]===te&&(re=ge[ue+" "+ae[0]]||ge["* "+ae[0]],re)){re===!0?re=ge[ee]:ge[ee]!==!0&&(te=ae[0],pe.unshift(ae[1]));break}}if(re!==!0)if(re&&G.throws)K=re(K);else try{K=re(K)}catch(Ce){return{state:"parsererror",error:re?Ce:"No conversion from "+ue+" to "+te}}}}return{state:"success",data:K}}Z.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:cr.href,type:"GET",isLocal:Jn.test(cr.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":_n,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":Z.parseJSON,"text xml":Z.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(G,K){return K?Br(Br(G,Z.ajaxSettings),K):Br(Z.ajaxSettings,G)},ajaxPrefilter:bn(wn),ajaxTransport:bn(Ir),ajax:function(G,K){typeof G=="object"&&(K=G,G=void 0),K=K||{};var X,J,ee,te,re,ae,ue,ge,pe=Z.ajaxSetup({},K),Ce=pe.context||pe,Oe=pe.context&&(Ce.nodeType||Ce.jquery)?Z(Ce):Z.event,xe=Z.Deferred(),Ge=Z.Callbacks("once memory"),ze=pe.statusCode||{},qe={},yt={},ct=0,It="canceled",Le={readyState:0,getResponseHeader:function(Ve){var it;if(ct===2){if(!te)for(te={};it=Zn.exec(ee);)te[it[1].toLowerCase()]=it[2];it=te[Ve.toLowerCase()]}return it??null},getAllResponseHeaders:function(){return ct===2?ee:null},setRequestHeader:function(Ve,it){var Dt=Ve.toLowerCase();return ct||(Ve=yt[Dt]=yt[Dt]||Ve,qe[Ve]=it),this},overrideMimeType:function(Ve){return ct||(pe.mimeType=Ve),this},statusCode:function(Ve){var it;if(Ve)if(ct<2)for(it in Ve)ze[it]=[ze[it],Ve[it]];else Le.always(Ve[Le.status]);return this},abort:function(Ve){var it=Ve||It;return X&&X.abort(it),pt(0,it),this}};if(xe.promise(Le).complete=Ge.add,Le.success=Le.done,Le.error=Le.fail,pe.url=((G||pe.url||cr.href)+"").replace(Xn,"").replace(Qn,cr.protocol+"//"),pe.type=K.method||K.type||pe.method||pe.type,pe.dataTypes=Z.trim(pe.dataType||"*").toLowerCase().match(Ze)||[""],pe.crossDomain==null){ae=q.createElement("a");try{ae.href=pe.url,ae.href=ae.href,pe.crossDomain=Dr.protocol+"//"+Dr.host!=ae.protocol+"//"+ae.host}catch{pe.crossDomain=!0}}if(pe.data&&pe.processData&&typeof pe.data!="string"&&(pe.data=Z.param(pe.data,pe.traditional)),mn(wn,pe,K,Le),ct===2)return Le;ue=Z.event&&pe.global,ue&&Z.active++===0&&Z.event.trigger("ajaxStart"),pe.type=pe.type.toUpperCase(),pe.hasContent=!Yn.test(pe.type),J=pe.url,pe.hasContent||(pe.data&&(J=pe.url+=(Mr.test(J)?"&":"?")+pe.data,delete pe.data),pe.cache===!1&&(pe.url=vn.test(J)?J.replace(vn,"$1_="+Lr++):J+(Mr.test(J)?"&":"?")+"_="+Lr++)),pe.ifModified&&(Z.lastModified[J]&&Le.setRequestHeader("If-Modified-Since",Z.lastModified[J]),Z.etag[J]&&Le.setRequestHeader("If-None-Match",Z.etag[J])),(pe.data&&pe.hasContent&&pe.contentType!==!1||K.contentType)&&Le.setRequestHeader("Content-Type",pe.contentType),Le.setRequestHeader("Accept",pe.dataTypes[0]&&pe.accepts[pe.dataTypes[0]]?pe.accepts[pe.dataTypes[0]]+(pe.dataTypes[0]!=="*"?", "+_n+"; q=0.01":""):pe.accepts["*"]);for(ge in pe.headers)Le.setRequestHeader(ge,pe.headers[ge]);if(pe.beforeSend&&(pe.beforeSend.call(Ce,Le,pe)===!1||ct===2))return Le.abort();It="abort";for(ge in{success:1,error:1,complete:1})Le[ge](pe[ge]);if(X=mn(Ir,pe,K,Le),!X)pt(-1,"No Transport");else{if(Le.readyState=1,ue&&Oe.trigger("ajaxSend",[Le,pe]),ct===2)return Le;pe.async&&pe.timeout>0&&(re=w.setTimeout(function(){Le.abort("timeout")},pe.timeout));try{ct=1,X.send(qe,pt)}catch(Ve){if(ct<2)pt(-1,Ve);else throw Ve}}function pt(Ve,it,Dt,$r){var xt,Wt,Bt,Rt,_t,Ct=it;ct!==2&&(ct=2,re&&w.clearTimeout(re),X=void 0,ee=$r||"",Le.readyState=Ve>0?4:0,xt=Ve>=200&&Ve<300||Ve===304,Dt&&(Rt=ei(pe,Le,Dt)),Rt=ti(pe,Rt,Le,xt),xt?(pe.ifModified&&(_t=Le.getResponseHeader("Last-Modified"),_t&&(Z.lastModified[J]=_t),_t=Le.getResponseHeader("etag"),_t&&(Z.etag[J]=_t)),Ve===204||pe.type==="HEAD"?Ct="nocontent":Ve===304?Ct="notmodified":(Ct=Rt.state,Wt=Rt.data,Bt=Rt.error,xt=!Bt)):(Bt=Ct,(Ve||!Ct)&&(Ct="error",Ve<0&&(Ve=0))),Le.status=Ve,Le.statusText=(it||Ct)+"",xt?xe.resolveWith(Ce,[Wt,Ct,Le]):xe.rejectWith(Ce,[Le,Ct,Bt]),Le.statusCode(ze),ze=void 0,ue&&Oe.trigger(xt?"ajaxSuccess":"ajaxError",[Le,pe,xt?Wt:Bt]),Ge.fireWith(Ce,[Le,Ct]),ue&&(Oe.trigger("ajaxComplete",[Le,pe]),--Z.active||Z.event.trigger("ajaxStop")))}return Le},getJSON:function(G,K,X){return Z.get(G,K,X,"json")},getScript:function(G,K){return Z.get(G,void 0,K,"script")}}),Z.each(["get","post"],function(G,K){Z[K]=function(X,J,ee,te){return Z.isFunction(J)&&(te=te||ee,ee=J,J=void 0),Z.ajax(Z.extend({url:X,type:K,dataType:te,data:J,success:ee},Z.isPlainObject(X)&&X))}}),Z._evalUrl=function(G){return Z.ajax({url:G,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},Z.fn.extend({wrapAll:function(G){var K;return Z.isFunction(G)?this.each(function(X){Z(this).wrapAll(G.call(this,X))}):(this[0]&&(K=Z(G,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&K.insertBefore(this[0]),K.map(function(){for(var X=this;X.firstElementChild;)X=X.firstElementChild;return X}).append(this)),this)},wrapInner:function(G){return Z.isFunction(G)?this.each(function(K){Z(this).wrapInner(G.call(this,K))}):this.each(function(){var K=Z(this),X=K.contents();X.length?X.wrapAll(G):K.append(G)})},wrap:function(G){var K=Z.isFunction(G);return this.each(function(X){Z(this).wrapAll(K?G.call(this,X):G)})},unwrap:function(){return this.parent().each(function(){Z.nodeName(this,"body")||Z(this).replaceWith(this.childNodes)}).end()}}),Z.expr.filters.hidden=function(G){return!Z.expr.filters.visible(G)},Z.expr.filters.visible=function(G){return G.offsetWidth>0||G.offsetHeight>0||G.getClientRects().length>0};var ri=/%20/g,ni=/\[\]$/,$n=/\r?\n/g,ii=/^(?:submit|button|image|reset|file)$/i,oi=/^(?:input|select|textarea|keygen)/i;function Rr(G,K,X,J){var ee;if(Z.isArray(K))Z.each(K,function(te,re){X||ni.test(G)?J(G,re):Rr(G+"["+(typeof re=="object"&&re!=null?te:"")+"]",re,X,J)});else if(!X&&Z.type(K)==="object")for(ee in K)Rr(G+"["+ee+"]",K[ee],X,J);else J(G,K)}Z.param=function(G,K){var X,J=[],ee=function(te,re){re=Z.isFunction(re)?re():re??"",J[J.length]=encodeURIComponent(te)+"="+encodeURIComponent(re)};if(K===void 0&&(K=Z.ajaxSettings&&Z.ajaxSettings.traditional),Z.isArray(G)||G.jquery&&!Z.isPlainObject(G))Z.each(G,function(){ee(this.name,this.value)});else for(X in G)Rr(X,G[X],K,ee);return J.join("&").replace(ri,"+")},Z.fn.extend({serialize:function(){return Z.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var G=Z.prop(this,"elements");return G?Z.makeArray(G):this}).filter(function(){var G=this.type;return this.name&&!Z(this).is(":disabled")&&oi.test(this.nodeName)&&!ii.test(G)&&(this.checked||!hr.test(G))}).map(function(G,K){var X=Z(this).val();return X==null?null:Z.isArray(X)?Z.map(X,function(J){return{name:K.name,value:J.replace($n,`\r
 `)}}):{name:K.name,value:X.replace($n,`\r
 `)}}).get()}}),Z.ajaxSettings.xhr=function(){try{return new w.XMLHttpRequest}catch{}};var ai={0:200,1223:204},lr=Z.ajaxSettings.xhr();fe.cors=!!lr&&"withCredentials"in lr,fe.ajax=lr=!!lr,Z.ajaxTransport(function(G){var K,X;if(fe.cors||lr&&!G.crossDomain)return{send:function(J,ee){var te,re=G.xhr();if(re.open(G.type,G.url,G.async,G.username,G.password),G.xhrFields)for(te in G.xhrFields)re[te]=G.xhrFields[te];G.mimeType&&re.overrideMimeType&&re.overrideMimeType(G.mimeType),!G.crossDomain&&!J["X-Requested-With"]&&(J["X-Requested-With"]="XMLHttpRequest");for(te in J)re.setRequestHeader(te,J[te]);K=function(ae){return function(){K&&(K=X=re.onload=re.onerror=re.onabort=re.onreadystatechange=null,ae==="abort"?re.abort():ae==="error"?typeof re.status!="number"?ee(0,"error"):ee(re.status,re.statusText):ee(ai[re.status]||re.status,re.statusText,(re.responseType||"text")!=="text"||typeof re.responseText!="string"?{binary:re.response}:{text:re.responseText},re.getAllResponseHeaders()))}},re.onload=K(),X=re.onerror=K("error"),re.onabort!==void 0?re.onabort=X:re.onreadystatechange=function(){re.readyState===4&&w.setTimeout(function(){K&&X()})},K=K("abort");try{re.send(G.hasContent&&G.data||null)}catch(ae){if(K)throw ae}},abort:function(){K&&K()}}}),Z.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(G){return Z.globalEval(G),G}}}),Z.ajaxPrefilter("script",function(G){G.cache===void 0&&(G.cache=!1),G.crossDomain&&(G.type="GET")}),Z.ajaxTransport("script",function(G){if(G.crossDomain){var K,X;return{send:function(J,ee){K=Z("<script>").prop({charset:G.scriptCharset,src:G.url}).on("load error",X=function(te){K.remove(),X=null,te&&ee(te.type==="error"?404:200,te.type)}),q.head.appendChild(K[0])},abort:function(){X&&X()}}}});var yn=[],Hr=/(=)\?(?=&|$)|\?\?/;Z.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var G=yn.pop()||Z.expando+"_"+Lr++;return this[G]=!0,G}}),Z.ajaxPrefilter("json jsonp",function(G,K,X){var J,ee,te,re=G.jsonp!==!1&&(Hr.test(G.url)?"url":typeof G.data=="string"&&(G.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Hr.test(G.data)&&"data");if(re||G.dataTypes[0]==="jsonp")return J=G.jsonpCallback=Z.isFunction(G.jsonpCallback)?G.jsonpCallback():G.jsonpCallback,re?G[re]=G[re].replace(Hr,"$1"+J):G.jsonp!==!1&&(G.url+=(Mr.test(G.url)?"&":"?")+G.jsonp+"="+J),G.converters["script json"]=function(){return te||Z.error(J+" was not called"),te[0]},G.dataTypes[0]="json",ee=w[J],w[J]=function(){te=arguments},X.always(function(){ee===void 0?Z(w).removeProp(J):w[J]=ee,G[J]&&(G.jsonpCallback=K.jsonpCallback,yn.push(J)),te&&Z.isFunction(ee)&&ee(te[0]),te=ee=void 0}),"script"}),Z.parseHTML=function(G,K,X){if(!G||typeof G!="string")return null;typeof K=="boolean"&&(X=K,K=!1),K=K||q;var J=Ie.exec(G),ee=!X&&[];return J?[K.createElement(J[1])]:(J=qt([G],K,ee),ee&&ee.length&&Z(ee).remove(),Z.merge([],J.childNodes))};var xn=Z.fn.load;Z.fn.load=function(G,K,X){if(typeof G!="string"&&xn)return xn.apply(this,arguments);var J,ee,te,re=this,ae=G.indexOf(" ");return ae>-1&&(J=Z.trim(G.slice(ae)),G=G.slice(0,ae)),Z.isFunction(K)?(X=K,K=void 0):K&&typeof K=="object"&&(ee="POST"),re.length>0&&Z.ajax({url:G,type:ee||"GET",dataType:"html",data:K}).done(function(ue){te=arguments,re.html(J?Z("<div>").append(Z.parseHTML(ue)).find(J):ue)}).always(X&&function(ue,ge){re.each(function(){X.apply(this,te||[ue.responseText,ge,ue])})}),this},Z.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(G,K){Z.fn[K]=function(X){return this.on(K,X)}}),Z.expr.filters.animated=function(G){return Z.grep(Z.timers,function(K){return G===K.elem}).length};function Cn(G){return Z.isWindow(G)?G:G.nodeType===9&&G.defaultView}Z.offset={setOffset:function(G,K,X){var J,ee,te,re,ae,ue,ge,pe=Z.css(G,"position"),Ce=Z(G),Oe={};pe==="static"&&(G.style.position="relative"),ae=Ce.offset(),te=Z.css(G,"top"),ue=Z.css(G,"left"),ge=(pe==="absolute"||pe==="fixed")&&(te+ue).indexOf("auto")>-1,ge?(J=Ce.position(),re=J.top,ee=J.left):(re=parseFloat(te)||0,ee=parseFloat(ue)||0),Z.isFunction(K)&&(K=K.call(G,X,Z.extend({},ae))),K.top!=null&&(Oe.top=K.top-ae.top+re),K.left!=null&&(Oe.left=K.left-ae.left+ee),"using"in K?K.using.call(G,Oe):Ce.css(Oe)}},Z.fn.extend({offset:function(G){if(arguments.length)return G===void 0?this:this.each(function(re){Z.offset.setOffset(this,G,re)});var K,X,J=this[0],ee={top:0,left:0},te=J&&J.ownerDocument;if(te)return K=te.documentElement,Z.contains(K,J)?(ee=J.getBoundingClientRect(),X=Cn(te),{top:ee.top+X.pageYOffset-K.clientTop,left:ee.left+X.pageXOffset-K.clientLeft}):ee},position:function(){if(this[0]){var G,K,X=this[0],J={top:0,left:0};return Z.css(X,"position")==="fixed"?K=X.getBoundingClientRect():(G=this.offsetParent(),K=this.offset(),Z.nodeName(G[0],"html")||(J=G.offset()),J.top+=Z.css(G[0],"borderTopWidth",!0),J.left+=Z.css(G[0],"borderLeftWidth",!0)),{top:K.top-J.top-Z.css(X,"marginTop",!0),left:K.left-J.left-Z.css(X,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var G=this.offsetParent;G&&Z.css(G,"position")==="static";)G=G.offsetParent;return G||ar})}}),Z.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(G,K){var X=K==="pageYOffset";Z.fn[G]=function(J){return st(this,function(ee,te,re){var ae=Cn(ee);if(re===void 0)return ae?ae[K]:ee[te];ae?ae.scrollTo(X?ae.pageXOffset:re,X?re:ae.pageYOffset):ee[te]=re},G,J,arguments.length)}}),Z.each(["top","left"],function(G,K){Z.cssHooks[K]=Pr(fe.pixelPosition,function(X,J){if(J)return J=er(X,K),Or.test(J)?Z(X).position()[K]+"px":J})}),Z.each({Height:"height",Width:"width"},function(G,K){Z.each({padding:"inner"+G,content:K,"":"outer"+G},function(X,J){Z.fn[J]=function(ee,te){var re=arguments.length&&(X||typeof ee!="boolean"),ae=X||(ee===!0||te===!0?"margin":"border");return st(this,function(ue,ge,pe){var Ce;return Z.isWindow(ue)?ue.document.documentElement["client"+G]:ue.nodeType===9?(Ce=ue.documentElement,Math.max(ue.body["scroll"+G],Ce["scroll"+G],ue.body["offset"+G],Ce["offset"+G],Ce["client"+G])):pe===void 0?Z.css(ue,ge,ae):Z.style(ue,ge,pe,ae)},K,re?ee:void 0,re,null)}})}),Z.fn.extend({bind:function(G,K,X){return this.on(G,null,K,X)},unbind:function(G,K){return this.off(G,null,K)},delegate:function(G,K,X,J){return this.on(K,G,X,J)},undelegate:function(G,K,X){return arguments.length===1?this.off(G,"**"):this.off(K,G||"**",X)},size:function(){return this.length}}),Z.fn.andSelf=Z.fn.addBack;var si=w.jQuery,ci=w.$;return Z.noConflict=function(G){return w.$===Z&&(w.$=ci),G&&w.jQuery===Z&&(w.jQuery=si),Z},D||(w.jQuery=w.$=Z),Z})})(jquery$1);var jqueryExports=jquery$1.exports;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var glbl=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:commonjsGlobal,can$L={};(typeof GLOBALCAN>"u"||GLOBALCAN!==!1)&&(glbl.can=can$L),can$L.global=glbl,can$L.k=function(){},can$L.isDeferred=function(O){return can$L.dev&&can$L.dev.warn("can.isDeferred: this function is deprecated and will be removed in a future release. can.isPromise replaces the functionality of can.isDeferred."),O&&typeof O.then=="function"&&typeof O.pipe=="function"},can$L.isPromise=function(O){return!!O&&(window.Promise&&O instanceof Promise||can$L.isFunction(O.then)&&(can$L.List===void 0||!(O instanceof can$L.List)))},can$L.isMapLike=function(O){return can$L.Map&&(O instanceof can$L.Map||O&&O.___get)};var cid=0;can$L.cid=function(O,w){return O._cid||(cid++,O._cid=(w||"")+cid),O._cid},can$L.VERSION="2.3.34",can$L.simpleExtend=function(O,w){for(var D in w)O[D]=w[D];return O},can$L.last=function(O){return O&&O[O.length-1]},can$L.isDOM=function(O){return(O.ownerDocument||O)===can$L.global.document},can$L.childNodes=function(O){var w=O.childNodes;if("length"in w)return w;for(var D=O.firstChild,F=[];D;)F.push(D),D=D.nextSibling;return F};var protoBind=Function.prototype.bind;protoBind?can$L.proxy=function(O,w){return protoBind.call(O,w)}:can$L.proxy=function(O,w){return function(){return O.apply(w,arguments)}},can$L.frag=function(O,w){var D=w||can$L.document||can$L.global.document,F;return!O||typeof O=="string"?(F=can$L.buildFragment(O==null?"":""+O,D),F.childNodes.length||F.appendChild(D.createTextNode("")),F):O.nodeType===11?O:typeof O.nodeType=="number"?(F=D.createDocumentFragment(),F.appendChild(O),F):typeof O.length=="number"?(F=D.createDocumentFragment(),can$L.each(O,function(q){F.appendChild(can$L.frag(q))}),can$L.childNodes(F).length||F.appendChild(D.createTextNode("")),F):(F=can$L.buildFragment(""+O,D),can$L.childNodes(F).length||F.appendChild(D.createTextNode("")),F)},can$L.scope=can$L.viewModel=function(O,w,D){O=can$L.$(O);var F=can$L.data(O,"scope")||can$L.data(O,"viewModel");switch(F||(F=new can$L.Map,can$L.data(O,"scope",F),can$L.data(O,"viewModel",F)),arguments.length){case 0:case 1:return F;case 2:return F.attr(w);default:return F.attr(w,D),O}};var parseURI=function(O){var w=String(O).replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);return w?{href:w[0]||"",protocol:w[1]||"",authority:w[2]||"",host:w[3]||"",hostname:w[4]||"",port:w[5]||"",pathname:w[6]||"",search:w[7]||"",hash:w[8]||""}:null};can$L.joinURIs=function(O,w){function D(F){var q=[];return F.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(U){U==="/.."?q.pop():q.push(U)}),q.join("").replace(/^\//,F.charAt(0)==="/"?"/":"")}return w=parseURI(w||""),O=parseURI(O||""),!w||!O?null:(w.protocol||O.protocol)+(w.protocol||w.authority?w.authority:O.authority)+D(w.protocol||w.authority||w.pathname.charAt(0)==="/"?w.pathname:w.pathname?(O.authority&&!O.pathname?"/":"")+O.pathname.slice(0,O.pathname.lastIndexOf("/")+1)+w.pathname:O.pathname)+(w.protocol||w.authority||w.pathname?w.search:w.search||O.search)+w.hash},can$L.import=function(O,w){var D=new can$L.Deferred;return typeof window.System=="object"&&can$L.isFunction(window.System.import)?window.System.import(O,{name:w}).then(can$L.proxy(D.resolve,D),can$L.proxy(D.reject,D)):window.define&&window.define.amd?window.require([O],function(F){D.resolve(F)}):window.steal?steal.steal(O,function(F){D.resolve(F)}):window.require?D.resolve(window.require(O)):D.resolve(),D.promise()},can$L.__observe=function(){},can$L.isNode=typeof process=="object"&&{}.toString.call(process)==="[object process]",can$L.isBrowserWindow=typeof window<"u"&&typeof document<"u"&&typeof SimpleDOM>"u",can$L.isWebWorker=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope;var can_1$1=can$L;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$K=can_1$1,namespaces={xlink:"http://www.w3.org/1999/xlink"},setImmediate=can$K.global.setImmediate||function(O){return setTimeout(O,0)},formElements={input:!0,textarea:!0,select:!0},hasProperty=function(O,w){return w in O||can$K.document&&formElements[O.nodeName.toLowerCase()]},attr$2={MutationObserver:can$K.global.MutationObserver||can$K.global.WebKitMutationObserver||can$K.global.MozMutationObserver,map:{class:function(O,w){return w=w||"",O.namespaceURI==="http://www.w3.org/2000/svg"?O.setAttribute("class",w):O.className=w,w},value:"value",innertext:"innerText",innerhtml:"innerHTML",textcontent:"textContent",for:"htmlFor",checked:!0,disabled:!0,readonly:function(O,w){return O.readOnly=!!(w||typeof w=="string"),w},required:!0,src:function(O,w){return w==null||w===""?(O.removeAttribute("src"),null):(O.setAttribute("src",w),w)},style:function(){var O=can$K.global.document&&document.createElement("div");return O&&O.style&&"cssText"in O.style?function(w,D){return w.style.cssText=D||""}:function(w,D){return w.setAttribute("style",D)}}()},defaultValue:["input","textarea"],setAttrOrProp:function(O,w,D){w=w.toLowerCase();var F=attr$2.map[w];F===!0&&!D?this.remove(O,w):this.set(O,w,D)},setSelectValue:function(O,w){if(w!=null){for(var D=O.getElementsByTagName("option"),F=0;F<D.length;F++)if(w==D[F].value){D[F].selected=!0;return}}O.selectedIndex=-1},set:function(O,w,D){var F=can$K.isDOM(O)&&attr$2.MutationObserver;w=w.toLowerCase();var q;F||(q=attr$2.get(O,w));var U=attr$2.map[w],W;typeof U=="function"?W=U(O,D):U===!0&&hasProperty(O,w)?(W=O[w]=!0,w==="checked"&&O.type==="radio"&&can$K.inArray((O.nodeName+"").toLowerCase(),attr$2.defaultValue)>=0&&(O.defaultChecked=!0)):typeof U=="string"&&hasProperty(O,U)?(W=D,(O[U]!==D||O.nodeName.toUpperCase()==="OPTION")&&(O[U]=D),U==="value"&&can$K.inArray((O.nodeName+"").toLowerCase(),attr$2.defaultValue)>=0&&(O.defaultValue=D)):attr$2.setAttribute(O,w,D),!F&&W!==q&&attr$2.trigger(O,w,q)},setAttribute:function(){var O=can$K.global.document;if(O&&document.createAttribute)try{O.createAttribute("{}")}catch{var w={},D=document.createElement("div");return function(q,U,W){var Y=U.charAt(0),Q,ne,oe;(Y==="{"||Y==="("||Y==="*")&&q.setAttributeNode?(Q=w[U],Q||(D.innerHTML="<div "+U+'=""></div>',Q=w[U]=D.childNodes[0].attributes[0]),ne=Q.cloneNode(),ne.value=W,q.setAttributeNode(ne)):(oe=U.split(":"),oe.length!==1?q.setAttributeNS(namespaces[oe[0]],U,W):q.setAttribute(U,W))}}return function(F,q,U){F.setAttribute(q,U)}}(),trigger:function(O,w,D){if(can$K.data(can$K.$(O),"canHasAttributesBindings"))return w=w.toLowerCase(),setImmediate(function(){can$K.trigger(O,{type:"attributes",attributeName:w,target:O,oldValue:D,bubbles:!1},[])})},get:function(O,w){w=w.toLowerCase();var D=attr$2.map[w];return typeof D=="string"&&hasProperty(O,D)?O[D]:D===!0&&hasProperty(O,w)?O[w]:O.getAttribute(w)},remove:function(O,w){w=w.toLowerCase();var D;attr$2.MutationObserver||(D=attr$2.get(O,w));var F=attr$2.map[w];typeof F=="function"&&F(O,void 0),F===!0&&hasProperty(O,w)?O[w]=!1:typeof F=="string"&&hasProperty(O,F)?O[F]="":O.removeAttribute(w),!attr$2.MutationObserver&&D!=null&&attr$2.trigger(O,w,D)},has:function(){var O=can$K.global.document&&document.createElement("div");return O&&O.hasAttribute?function(w,D){return w.hasAttribute(D)}:function(w,D){return w.getAttribute(D)!==null}}()},attr_1=attr$2;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$J=can_1$1;can$J.addEvent=function(O,w){var D=this.__bindEvents||(this.__bindEvents={}),F=D[O]||(D[O]=[]);return F.push({handler:w,name:O}),this},can$J.listenTo=function(O,w,D){var F=this.__listenToEvents;F||(F=this.__listenToEvents={});var q=can$J.cid(O),U=F[q];U||(U=F[q]={obj:O,events:{}});var W=U.events[w];W||(W=U.events[w]=[]),W.push(D),can$J.bind.call(O,w,D)},can$J.stopListening=function(O,w,D){var F=this.__listenToEvents,q=F,U=0;if(!F)return this;if(O){var W=can$J.cid(O);if((q={})[W]=F[W],!F[W])return this}for(var Y in q){var Q=q[Y],ne;O=F[Y].obj,w?(ne={})[w]=Q.events[w]:ne=Q.events;for(var oe in ne){var ce=ne[oe]||[];for(U=0;U<ce.length;)D&&D===ce[U]||!D?(can$J.unbind.call(O,oe,ce[U]),ce.splice(U,1)):U++;ce.length||delete Q.events[oe]}can$J.isEmptyObject(Q.events)&&delete F[Y]}return this},can$J.removeEvent=function(O,w,D){if(!this.__bindEvents)return this;for(var F=this.__bindEvents[O]||[],q=0,U,W=typeof w=="function";q<F.length;)U=F[q],(D?D(U,O,w):W&&U.handler===w||!W&&(U.cid===w||!w))?F.splice(q,1):q++;return this},can$J.dispatch=function(O,w){var D=this.__bindEvents;if(D){var F;typeof O=="string"?(F=O,O={type:O}):F=O.type;var q=D[F];if(q)q=q.slice(0);else return;var U=[O];w&&U.push.apply(U,w);for(var W=0,Y=q.length;W<Y;W++)q[W].handler.apply(this,U);return O}},can$J.one=function(O,w){var D=function(){return can$J.unbind.call(this,O,D),w.apply(this,arguments)};return can$J.bind.call(this,O,D),this},can$J.event={on:function(){return arguments.length===0&&can$J.Control&&this instanceof can$J.Control?can$J.Control.prototype.on.call(this):can$J.addEvent.apply(this,arguments)},off:function(){return arguments.length===0&&can$J.Control&&this instanceof can$J.Control?can$J.Control.prototype.off.call(this):can$J.removeEvent.apply(this,arguments)},bind:can$J.addEvent,unbind:can$J.removeEvent,delegate:function(O,w,D){return can$J.addEvent.call(this,w,D)},undelegate:function(O,w,D){return can$J.removeEvent.call(this,w,D)},trigger:can$J.dispatch,one:can$J.one,addEvent:can$J.addEvent,removeEvent:can$J.removeEvent,listenTo:can$J.listenTo,stopListening:can$J.stopListening,dispatch:can$J.dispatch},can$J.event;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$I=can_1$1,fragmentRE=/^\s*<(\w+)[^>]*>/,toString={}.toString,fragment=function(O,w,D){w===void 0&&(w=fragmentRE.test(O)&&RegExp.$1),O&&toString.call(O.replace)==="[object Function]"&&(O=O.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,"<$1></$2>"));var F=D.createElement("div"),q=D.createElement("div");w==="tbody"||w==="tfoot"||w==="thead"||w==="colgroup"?(q.innerHTML="<table>"+O+"</table>",F=q.firstChild.nodeType===3?q.lastChild:q.firstChild):w==="col"?(q.innerHTML="<table><colgroup>"+O+"</colgroup></table>",F=q.firstChild.nodeType===3?q.lastChild:q.firstChild.firstChild):w==="tr"?(q.innerHTML="<table><tbody>"+O+"</tbody></table>",F=q.firstChild.nodeType===3?q.lastChild:q.firstChild.firstChild):w==="td"||w==="th"?(q.innerHTML="<table><tbody><tr>"+O+"</tr></tbody></table>",F=q.firstChild.nodeType===3?q.lastChild:q.firstChild.firstChild.firstChild):w==="option"?(q.innerHTML="<select>"+O+"</select>",F=q.firstChild.nodeType===3?q.lastChild:q.firstChild):F.innerHTML=""+O;var U={},W=can$I.childNodes(F);U.length=W.length;for(var Y=0;Y<W.length;Y++)U[Y]=W[Y];return[].slice.call(U)};can$I.buildFragment=function(O,w){if(O&&O.nodeType===11)return O;w?w.length&&(w=w[0]):w=document;for(var D=fragment(O,void 0,w),F=(w||document).createDocumentFragment(),q=0,U=D.length;q<U;q++)F.appendChild(D[q]);return F},function(){var O=`<-
 >`,w=can$I.buildFragment(O,document);if(O!==w.firstChild.nodeValue){var D=can$I.buildFragment;can$I.buildFragment=function(F,q){var U=D(F,q);return U.childNodes.length===1&&U.childNodes[0].nodeType===3&&(U.childNodes[0].nodeValue=F),U}}}();/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$H=can_1$1;can$H.isArrayLike=function(O){var w=O&&typeof O!="boolean"&&typeof O!="number"&&"length"in O&&O.length;return typeof arr!="function"&&(w===0||typeof w=="number"&&w>0&&w-1 in O)};/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$G=can_1$1;can$G.each=function(O,w,D){var F=0,q,U,W;if(O){if(can$G.isArrayLike(O))if(can$G.List&&O instanceof can$G.List)for(U=O.attr("length");F<U&&(W=O.attr(F),w.call(D||W,W,F,O)!==!1);F++);else for(U=O.length;F<U&&(W=O[F],w.call(D||W,W,F,O)!==!1);F++);else if(typeof O=="object"){if(can$G.Map&&O instanceof can$G.Map||O===can$G.route){var Y=can$G.Map.keys(O);for(F=0,U=Y.length;F<U&&(q=Y[F],W=O.attr(q),w.call(D||W,W,q,O)!==!1);F++);}else for(q in O)if(Object.prototype.hasOwnProperty.call(O,q)&&w.call(D||O[q],O[q],q,O)===!1)break}}return O};/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$F=can_1$1;can$F.inserted=function(O,w){if(O.length){O=can$F.makeArray(O);for(var D=w||O[0].ownerDocument||O[0],F=!1,q=can$F.$(D.contains?D:D.body),U,W=0,Y;(Y=O[W])!==void 0;W++){if(!F)if(Y.getElementsByTagName)if(can$F.has(q,Y).length)F=!0;else return;else continue;if(F&&Y.getElementsByTagName){U=can$F.makeArray(Y.getElementsByTagName("*")),can$F.trigger(Y,"inserted",[],!1);for(var Q=0,ne;(ne=U[Q])!==void 0;Q++)can$F.trigger(ne,"inserted",[],!1)}}}},can$F.appendChild=function(O,w,D){var F;w.nodeType===11?F=can$F.makeArray(can$F.childNodes(w)):F=[w],O.appendChild(w),can$F.inserted(F,D)},can$F.insertBefore=function(O,w,D,F){var q;w.nodeType===11?q=can$F.makeArray(can$F.childNodes(w)):q=[w],O.insertBefore(w,D),can$F.inserted(q,F)};/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var $$2=jqueryExports,can$E=can_1$1,attr$1=attr_1,isBindableElement=function(O){return O.nodeName&&(O.nodeType===1||O.nodeType===9)||O==window||O.addEventListener};$$2=$$2||window.jQuery,$$2.extend(can$E,$$2,{trigger:function(O,w,D,F){isBindableElement(O)?$$2.event.trigger(w,D,O,!F):O.trigger?O.trigger(w,D):(typeof w=="string"&&(w={type:w}),w.target=w.target||O,D&&(D.length&&typeof D=="string"?D=[D]:D.length||(D=[D])),D||(D=[]),can$E.dispatch.call(O,w,D))},event:can$E.event,addEvent:can$E.addEvent,removeEvent:can$E.removeEvent,buildFragment:can$E.buildFragment,$:$$2,each:can$E.each,bind:function(O,w){if(this.nodeType!==11)return this.bind&&this.bind!==can$E.bind?this.bind(O,w):isBindableElement(this)?$$2.event.add(this,O,w):can$E.addEvent.call(this,O,w),this},unbind:function(O,w){if(this.nodeType!==11)return this.unbind&&this.unbind!==can$E.unbind?this.unbind(O,w):isBindableElement(this)?$$2.event.remove(this,O,w):can$E.removeEvent.call(this,O,w),this},delegate:function(O,w,D){return this.delegate?this.delegate(O,w,D):isBindableElement(this)?$$2(this).delegate(O,w,D):can$E.bind.call(this,w,D),this},undelegate:function(O,w,D){return this.undelegate?this.undelegate(O,w,D):isBindableElement(this)?$$2(this).undelegate(O,w,D):can$E.unbind.call(this,w,D),this},proxy:can$E.proxy,attr:attr$1}),can$E.on=can$E.bind,can$E.off=can$E.unbind,$$2.each(["append","filter","addClass","remove","data","get","has"],function(O,w){can$E[w]=function(D){return D[w].apply(D,can$E.makeArray(arguments).slice(1))}});var oldClean=$$2.cleanData;$$2.cleanData=function(O){$$2.each(O,function(w,D){D&&can$E.trigger(D,"removed",[],!1)}),oldClean(O)};var oldDomManip=$$2.fn.domManip,cbIndex;$$2.fn.domManip=function(O,w,D){for(var F=1;F<arguments.length;F++)if(typeof arguments[F]=="function"){cbIndex=F;break}return oldDomManip.apply(this,arguments)},$$2(document.createElement("div")).append(document.createElement("div"));var getChildNodes$1=function(O){var w=O.childNodes;if("length"in w)return can$E.makeArray(w);for(var D=O.firstChild,F=[];D;)F.push(D),D=D.nextSibling;return F};cbIndex===void 0?($$2.fn.domManip=oldDomManip,can$E.each(["after","prepend","before","append","replaceWith"],function(O){var w=$$2.fn[O];$$2.fn[O]=function(){var D=[],F=can$E.makeArray(arguments);F[0]!=null&&(typeof F[0]=="string"&&(F[0]=can$E.buildFragment(F[0])),F[0].nodeType===11?D=getChildNodes$1(F[0]):can$E.isArrayLike(F[0])?D=can$E.makeArray(F[0]):D=[F[0]]);var q=w.apply(this,F);return can$E.inserted(D),q}})):$$2.fn.domManip=cbIndex===2?function(O,w,D){return oldDomManip.call(this,O,w,function(F){var q;F.nodeType===11&&(q=can$E.makeArray(can$E.childNodes(F)));var U=D.apply(this,arguments);return can$E.inserted(q||[F]),U})}:function(O,w){return oldDomManip.call(this,O,function(D){var F;D.nodeType===11&&(F=can$E.makeArray(can$E.childNodes(D)));var q=w.apply(this,arguments);return can$E.inserted(F||[D]),q})};var oldAttr=$$2.attr;$$2.attr=function(O,w){if(can$E.isDOM(O)&&can$E.attr.MutationObserver)return oldAttr.apply(this,arguments);var D,F;arguments.length>=3&&(D=oldAttr.call(this,O,w));var q=oldAttr.apply(this,arguments);return arguments.length>=3&&(F=oldAttr.call(this,O,w)),F!==D&&can$E.attr.trigger(O,w,D),q};var oldRemove$1=$$2.removeAttr;$$2.removeAttr=function(O,w){if(can$E.isDOM(O)&&can$E.attr.MutationObserver)return oldRemove$1.apply(this,arguments);var D=oldAttr.call(this,O,w),F=oldRemove$1.apply(this,arguments);return D!=null&&can$E.attr.trigger(O,w,D),F},$$2.event.special.attributes={setup:function(){if(can$E.isDOM(this)&&can$E.attr.MutationObserver){var O=this,w=new can$E.attr.MutationObserver(function(D){D.forEach(function(F){var q=can$E.simpleExtend({},F);can$E.trigger(O,q,[])})});w.observe(this,{attributes:!0,attributeOldValue:!0}),can$E.data(can$E.$(this),"canAttributesObserver",w)}else can$E.data(can$E.$(this),"canHasAttributesBindings",!0)},teardown:function(){can$E.isDOM(this)&&can$E.attr.MutationObserver?(can$E.data(can$E.$(this),"canAttributesObserver").disconnect(),$$2.removeData(this,"canAttributesObserver")):$$2.removeData(this,"canHasAttributesBindings")}},$$2.event.special.inserted={},$$2.event.special.removed={};var jquery=can$E;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$D=jquery,util=can$D;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$C=util;can$C.bindAndSetup=function(){return can$C.addEvent.apply(this,arguments),this.__inSetup||(this._bindings?this._bindings++:(this._bindings=1,this._bindsetup&&this._bindsetup())),this},can$C.unbindAndTeardown=function(O,w){if(!this.__bindEvents)return this;var D=this.__bindEvents[O]||[],F=D.length;return can$C.removeEvent.apply(this,arguments),this._bindings===null?this._bindings=0:this._bindings=this._bindings-(F-D.length),!this._bindings&&this._bindteardown&&this._bindteardown(),this};/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$B=util,bubble$2=can$B.bubble={bind:function(O,w){if(!O.__inSetup){var D=bubble$2.events(O,w),F=D.length,q;O._bubbleBindings||(O._bubbleBindings={});for(var U=0;U<F;U++)q=D[U],O._bubbleBindings[q]?O._bubbleBindings[q]++:(O._bubbleBindings[q]=1,bubble$2.childrenOf(O,q))}},unbind:function(O,w){for(var D=bubble$2.events(O,w),F=D.length,q,U=0;U<F;U++)q=D[U],O._bubbleBindings&&O._bubbleBindings[q]--,O._bubbleBindings&&!O._bubbleBindings[q]&&(delete O._bubbleBindings[q],bubble$2.teardownChildrenFrom(O,q),can$B.isEmptyObject(O._bubbleBindings)&&delete O._bubbleBindings)},add:function(O,w,D){if(w instanceof can$B.Map&&O._bubbleBindings)for(var F in O._bubbleBindings)O._bubbleBindings[F]&&(bubble$2.teardownFromParent(O,w,F),bubble$2.toParent(w,O,D,F))},addMany:function(O,w){for(var D=0,F=w.length;D<F;D++)bubble$2.add(O,w[D],D)},remove:function(O,w){if(w instanceof can$B.Map&&O._bubbleBindings)for(var D in O._bubbleBindings)O._bubbleBindings[D]&&bubble$2.teardownFromParent(O,w,D)},removeMany:function(O,w){for(var D=0,F=w.length;D<F;D++)bubble$2.remove(O,w[D])},set:function(O,w,D,F){return can$B.isMapLike(D)&&bubble$2.add(O,D,w),can$B.isMapLike(F)&&bubble$2.remove(O,F),D},events:function(O,w){return O.constructor._bubbleRule(w,O)},toParent:function(O,w,D,F){can$B.listenTo.call(w,O,F,function(){var q=can$B.makeArray(arguments),U=q.shift();q[0]=(can$B.List&&w instanceof can$B.List?w.indexOf(O):D)+(q[0]?"."+q[0]:""),U.triggeredNS=U.triggeredNS||{},!U.triggeredNS[w._cid]&&(U.triggeredNS[w._cid]=!0,can$B.trigger(w,U,q),F==="change"&&can$B.trigger(w,q[0],[q[2],q[3]]))})},childrenOf:function(O,w){O._each(function(D,F){D&&D.bind&&bubble$2.toParent(D,O,F,w)})},teardownFromParent:function(O,w,D){w&&w.unbind&&can$B.stopListening.call(O,w,D)},teardownChildrenFrom:function(O,w){O._each(function(D){bubble$2.teardownFromParent(O,D,w)})},isBubbling:function(O,w){return O._bubbleBindings&&O._bubbleBindings[w]}},bubble_1=bubble$2;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$A=can_1$1,core_hasOwn=Object.prototype.hasOwnProperty,isWindow=function(O){return O!==null&&O==O.window},isPlainObject=function(O){if(!O||typeof O!="object"||O.nodeType||isWindow(O))return!1;try{if(O.constructor&&!core_hasOwn.call(O,"constructor")&&!core_hasOwn.call(O.constructor.prototype,"isPrototypeOf"))return!1}catch{return!1}var w;for(w in O);return w===void 0||core_hasOwn.call(O,w)};can$A.isPlainObject=isPlainObject;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$z=util,mapHelpers$3={attrParts:function(O,w){return w?[O]:typeof O=="object"?O:(""+O).split(".")},canMakeObserve:function(O){return O&&!can$z.isPromise(O)&&(can$z.isArray(O)||can$z.isPlainObject(O))},serialize:function(){var O=null;return function(w,D,F){var q=can$z.cid(w),U=!1;return O||(U=!0,O={attr:{},serialize:{}}),O[D][q]=F,w.each(function(W,Y){var Q,ne=can$z.isMapLike(W),oe=ne&&O[D][can$z.cid(W)];oe?Q=oe:w["___"+D]?Q=w["___"+D](Y,W):Q=mapHelpers$3.getValue(w,Y,W,D),Q!==void 0&&(F[Y]=Q)}),U&&(O=null),F}}(),getValue:function(O,w,D,F){return can$z.isMapLike(D)?D[F]():D},define:null,addComputedAttr:function(O,w,D){O._computedAttrs[w]={compute:D,count:0,handler:function(F,q,U){O._triggerChange(w,"set",q,U,F.batchNum)}}},addToMap:function(w,D){var F;madeMap||(F=teardownMap,madeMap={});var q=w._cid,U=can$z.cid(w);return madeMap[U]||(madeMap[U]={obj:w,instance:D,added:!q}),F},getMapFromObject:function(O){return madeMap&&madeMap[O._cid]&&madeMap[O._cid].instance},twoLevelDeepExtend:function(O,w){for(var D in w)O[D]=O[D]||{},can$z.simpleExtend(O[D],w[D])}},madeMap=null,teardownMap=function(){for(var O in madeMap)madeMap[O].added&&delete madeMap[O].obj._cid;madeMap=null},map_helpers=mapHelpers$3;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$y=util,strUndHash=/_|-/,strColons=/\=\=/,strWords=/([A-Z]+)([A-Z][a-z])/g,strLowUp=/([a-z\d])([A-Z])/g,strDash=/([a-z\d])([A-Z])/g,strReplacer=/\{([^\}]+)\}/g,strQuote=/"/g,strSingleQuote=/'/g,strHyphenMatch=/-+(.)?/g,strCamelMatch=/[a-z][A-Z]/g,getNext=function(O,w,D){var F=O[w];return F===void 0&&D===!0&&(F=O[w]={}),F},isContainer=function(O){return/^f|^o/.test(typeof O)},convertBadValues=function(O){var w=O==null||isNaN(O)&&""+O=="NaN";return""+(w?"":O)};can$y.extend(can$y,{esc:function(O){return convertBadValues(O).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(strQuote,"&#34;").replace(strSingleQuote,"&#39;")},getObject:function(O,w,D){var F=O?O.split("."):[],q=F.length,U,W=0,Y,Q,ne;if(w=can$y.isArray(w)?w:[w||window],ne=w.length,!q)return w[0];for(W;W<ne;W++){for(U=w[W],Q=void 0,Y=0;Y<q&&isContainer(U);Y++)Q=U,U=getNext(Q,F[Y]);if(Q!==void 0&&U!==void 0)break}if(D===!1&&U!==void 0&&delete Q[F[Y-1]],D===!0&&U===void 0)for(U=w[0],Y=0;Y<q&&isContainer(U);Y++)U=getNext(U,F[Y],!0);return U},capitalize:function(O,w){return O.charAt(0).toUpperCase()+O.slice(1)},camelize:function(O){return convertBadValues(O).replace(strHyphenMatch,function(w,D){return D?D.toUpperCase():""})},hyphenate:function(O){return convertBadValues(O).replace(strCamelMatch,function(w,D){return w.charAt(0)+"-"+w.charAt(1).toLowerCase()})},underscore:function(O){return O.replace(strColons,"/").replace(strWords,"$1_$2").replace(strLowUp,"$1_$2").replace(strDash,"_").toLowerCase()},sub:function(O,w,D){var F=[];return O=O||"",F.push(O.replace(strReplacer,function(q,U){var W=can$y.getObject(U,w,D===!0?!1:void 0);return W==null?(F=null,""):isContainer(W)&&F?(F.push(W),""):""+W})),F===null?F:F.length<=1?F[0]:F},replacer:strReplacer,undHash:strUndHash});var string=can$y;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$x=string,initializing=0,canGetDescriptor;try{Object.getOwnPropertyDescriptor({}),canGetDescriptor=!0}catch(O){canGetDescriptor=!1}var getDescriptor=function(O,w){var D=Object.getOwnPropertyDescriptor(O,w);return D&&(D.get||D.set)?D:null},inheritGetterSetter=function(O,w,D){D=D||O;var F;for(var q in O)(F=getDescriptor(O,q))?this._defineProperty(D,w,q,F):can$x.Construct._overwrite(D,w,q,O[q])},simpleInherit=function(O,w,D){D=D||O;for(var F in O)can$x.Construct._overwrite(D,w,F,O[F])};can$x.Construct=function(){if(arguments.length)return can$x.Construct.extend.apply(can$x.Construct,arguments)},can$x.extend(can$x.Construct,{constructorExtends:!0,newInstance:function(){var O=this.instance(),w;return O.setup&&(O.__inSetup=!0,w=O.setup.apply(O,arguments),delete O.__inSetup),O.init&&O.init.apply(O,w||arguments),O},_inherit:canGetDescriptor?inheritGetterSetter:simpleInherit,_defineProperty:function(O,w,D,F){Object.defineProperty(O,D,F)},_overwrite:function(O,w,D,F){O[D]=F},setup:function(O,w){this.defaults=can$x.extend(!0,{},O.defaults,this.defaults)},instance:function(){initializing=1;var O=new this;return initializing=0,O},extend:function(O,w,D){var F=O,q=w,U=D;typeof F!="string"&&(U=q,q=F,F=null),U||(U=q,q=null),U=U||{};var W=this,Y=this.prototype,Q,ne,oe,ce,fe,we,Z,ve,de;de=this.instance(),can$x.Construct._inherit(U,Y,de),F?(ne=F.split("."),Z=ne.pop()):q&&q.shortName?Z=q.shortName:this.shortName&&(Z=this.shortName),typeof constructorName>"u"&&(Q=function(){return Ae.apply(this,arguments)});function Ae(){if(!initializing)return this.constructor!==Q&&arguments.length&&Q.constructorExtends?Q.extend.apply(Q,arguments):Q.newInstance.apply(Q,arguments)}for(we in W)W.hasOwnProperty(we)&&(Q[we]=W[we]);can$x.Construct._inherit(q,W,Q),F&&(oe=can$x.getObject(ne.join("."),window,!0),ve=oe,ce=can$x.underscore(F.replace(/\./g,"_")),fe=can$x.underscore(Z),oe[Z]=Q),can$x.extend(Q,{constructor:Q,prototype:de,namespace:ve,_shortName:fe,fullName:F,_fullName:ce}),Z!==void 0&&(Q.shortName=Z),Q.prototype.constructor=Q;var Se=[W].concat(can$x.makeArray(arguments)),Te=Q.setup.apply(Q,Se);return Q.init&&Q.init.apply(Q,Te||Se),Q}}),can$x.Construct.prototype.setup=function(){},can$x.Construct.prototype.init=function(){},can$x.Construct;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$w=can_1$1,batchNum=1,transactions=0,dispatchingBatch=null,collectingBatch=null,batches=[],dispatchingBatches=!1;can$w.batch={start:function(O){if(transactions++,transactions===1){var w={events:[],callbacks:[],number:batchNum++};batches.push(w),O&&w.callbacks.push(O),collectingBatch=w}},stop:function(O,w){if(O?transactions=0:transactions--,transactions===0){collectingBatch=null;var D;if(dispatchingBatches===!1){dispatchingBatches=!0;for(var F=[],q;D=batches.shift();){var U=D.events;dispatchingBatch=D,can$w.batch.batchNum=D.number;var W;for(w&&can$w.batch.start(),q=0,W=U.length;q<W;q++)can$w.dispatch.apply(U[q][0],U[q][1]);can$w.batch._onDispatchedEvents(D.number),F.push.apply(F,D.callbacks),dispatchingBatch=null,can$w.batch.batchNum=void 0}for(q=F.length-1;q>=0;q--)F[q]();dispatchingBatches=!1}}},_onDispatchedEvents:function(){},trigger:function(O,w,D){O.__inSetup||(w=typeof w=="string"?{type:w}:w,collectingBatch?(w.batchNum=collectingBatch.number,collectingBatch.events.push([O,[w,D]])):w.batchNum?can$w.dispatch.call(O,w,D):batches.length?(can$w.batch.start(),w.batchNum=collectingBatch.number,collectingBatch.events.push([O,[w,D]]),can$w.batch.stop()):can$w.dispatch.call(O,w,D))},afterPreviousEvents:function(O){var w=can$w.last(batches);if(w){var D={};can$w.bind.call(D,"ready",O),w.events.push([D,[{type:"ready"},[]]])}else O({})},after:function(O){var w=collectingBatch||dispatchingBatch;w?w.callbacks.push(O):O({})}};/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$v=util;function ObservedInfo$2(O,w,D){this.newObserved={},this.oldObserved=null,this.func=O,this.context=w,this.compute=D,this.onDependencyChange=can$v.proxy(this.onDependencyChange,this),this.depth=null,this.childDepths={},this.ignore=0,this.inBatch=!1,this.ready=!1,D.observedInfo=this,this.setReady=can$v.proxy(this._setReady,this)}can$v.simpleExtend(ObservedInfo$2.prototype,{getPrimaryDepth:function(){return this.compute._primaryDepth},_setReady:function(){this.ready=!0},getDepth:function(){return this.depth!==null?this.depth:this.depth=this._getDepth()},_getDepth:function(){var O=0,w=this.childDepths;for(var D in w)w[D]>O&&(O=w[D]);return O+1},addEdge:function(O){O.obj.bind(O.event,this.onDependencyChange),O.obj.observedInfo&&(this.childDepths[O.obj._cid]=O.obj.observedInfo.getDepth(),this.depth=null)},removeEdge:function(O){O.obj.unbind(O.event,this.onDependencyChange),O.obj.observedInfo&&(delete this.childDepths[O.obj._cid],this.depth=null)},dependencyChange:function(O){this.bound&&this.ready&&(O.batchNum!==void 0?O.batchNum!==this.batchNum&&(ObservedInfo$2.registerUpdate(this),this.batchNum=O.batchNum):this.updateCompute(O.batchNum))},onDependencyChange:function(O,w,D){this.dependencyChange(O,w,D)},updateCompute:function(O){if(this.bound){var w=this.value;this.getValueAndBind(),this.compute.updater(this.value,w,O)}},getValueAndBind:function(){this.bound=!0,this.oldObserved=this.newObserved||{},this.ignore=0,this.newObserved={},this.ready=!1,observedInfoStack.push(this),this.value=this.func.call(this.context),observedInfoStack.pop(),this.updateBindings(),can$v.batch.afterPreviousEvents(this.setReady)},updateBindings:function(){var O=this.newObserved,w=this.oldObserved,D,F;for(D in O)F=O[D],w[D]?w[D]=null:this.addEdge(F);for(D in w)F=w[D],F&&this.removeEdge(F)},teardown:function(){this.bound=!1;for(var O in this.newObserved){var w=this.newObserved[O];this.removeEdge(w)}this.newObserved={}}});var updateOrder=[],curPrimaryDepth=1/0,maxPrimaryDepth=0,currentBatchNum;ObservedInfo$2.registerUpdate=function(O,w){var D=O.getDepth()-1,F=O.getPrimaryDepth();curPrimaryDepth=Math.min(F,curPrimaryDepth),maxPrimaryDepth=Math.max(F,maxPrimaryDepth);var q=updateOrder[F]||(updateOrder[F]={observeInfos:[],current:1/0,max:0}),U=q.observeInfos[D]||(q.observeInfos[D]=[]);U.push(O),q.current=Math.min(D,q.current),q.max=Math.max(D,q.max)},ObservedInfo$2.updateUntil=function(O,w){for(var D;;)if(curPrimaryDepth<=maxPrimaryDepth&&curPrimaryDepth<=O){var F=updateOrder[curPrimaryDepth];if(F&&F.current<=F.max){if(F.current>w)return;var q=F.observeInfos[F.current];q&&(D=q.pop())?D.updateCompute(currentBatchNum):F.current++}else curPrimaryDepth++}else return},ObservedInfo$2.batchEnd=function(O){var w;for(currentBatchNum=O;;)if(curPrimaryDepth<=maxPrimaryDepth){var D=updateOrder[curPrimaryDepth];if(D&&D.current<=D.max){var F=D.observeInfos[D.current];F&&(w=F.pop())?w.updateCompute(O):D.current++}else curPrimaryDepth++}else{updateOrder=[],curPrimaryDepth=1/0,maxPrimaryDepth=0;return}};var observedInfoStack=[];can$v.__observe=function(O,w){var D=observedInfoStack[observedInfoStack.length-1];if(D&&!D.ignore){var F=w+"",q=O._cid+"|"+F;D.traps?D.traps.push({obj:O,event:F,name:q}):D.newObserved[q]||(D.newObserved[q]={obj:O,event:F})}},can$v.__reading=can$v.__observe,can$v.__trapObserves=function(){if(observedInfoStack.length){var O=observedInfoStack[observedInfoStack.length-1],w=O.traps=[];return function(){return O.traps=null,w}}else return function(){return[]}},can$v.__observes=function(O){var w=observedInfoStack[observedInfoStack.length-1];if(w)for(var D=0,F=O.length;D<F;D++){var q=O[D],U=q.name;w.newObserved[U]||(w.newObserved[U]=q)}},can$v.__isRecordingObserves=function(){var O=observedInfoStack.length,w=observedInfoStack[O-1];return O&&w.ignore===0&&w},can$v.__notObserve=function(O){return function(){if(observedInfoStack.length){var w=observedInfoStack[observedInfoStack.length-1];w.ignore++;var D=O.apply(this,arguments);return w.ignore--,D}else return O.apply(this,arguments)}},can$v.batch._onDispatchedEvents=ObservedInfo$2.batchEnd;var get_value_and_bind=ObservedInfo$2;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$u=util,bubble$1=bubble_1,mapHelpers$2=map_helpers,unobservable={constructor:!0},Map$2=can$u.Map=can$u.Construct.extend({setup:function(O){if(can$u.Construct.setup.apply(this,arguments),this._computedPropertyNames=[],can$u.Map){this.defaults||(this.defaults={});for(var w in this.prototype)w!=="define"&&w!=="constructor"&&(typeof this.prototype[w]!="function"||this.prototype[w].prototype instanceof can$u.Construct)?this.defaults[w]=this.prototype[w]:this.prototype[w].isComputed&&this._computedPropertyNames.push(w);mapHelpers$2.define&&mapHelpers$2.define(this,O.prototype.define)}can$u.List&&!(this.prototype instanceof can$u.List)&&(this.List=Map$2.List.extend({Map:this},{}))},shortName:"Map",_bubbleRule:function(O){return O==="change"||O.indexOf(".")>=0?["change"]:[]},bind:can$u.bindAndSetup,unbind:can$u.unbindAndTeardown,id:"id",keys:function(O){var w=[];can$u.__observe(O,"__keys");for(var D in O._data)w.push(D);return w}},{setup:function(O){O instanceof can$u.Map&&(O=O.serialize()),this._data={},can$u.cid(this,".map"),this._setupComputedProperties();var w=O&&mapHelpers$2.addToMap(O,this),D=this._setupDefaults(O),F=can$u.extend(can$u.extend(!0,{},D),O);this.attr(F),w&&w()},_setupComputedProperties:function(){this._computedAttrs={};for(var O=this.constructor._computedPropertyNames,w=0,D=O.length;w<D;w++){var F=O[w];mapHelpers$2.addComputedAttr(this,F,this[F].clone(this))}},_setupDefaults:function(){return this.constructor.defaults||{}},attr:function(O,w){var D=typeof O;return O===void 0?this._getAttrs():D!=="string"&&D!=="number"?this._setAttrs(O,w):arguments.length===1?this._get(O+""):(this._set(O+"",w),this)},_get:function(O){var w=O.indexOf(".");if(w>=0){var D=this.___get(O);if(D!==void 0)return can$u.__observe(this,O),D;var F=O.substr(0,w),q=O.substr(w+1),U=this.__get(F);return U&&U._get?U._get(q):void 0}else return this.__get(O)},__get:function(O){return!unobservable[O]&&!this._computedAttrs[O]&&can$u.__observe(this,O),this.___get(O)},___get:function(O){if(O!==void 0){var w=this._computedAttrs[O];return w&&w.compute?w.compute():this._data.hasOwnProperty(O)?this._data[O]:void 0}else return this._data},_set:function(O,w,D){var F=O.indexOf("."),q;if(F>=0&&!D){var U=O.substr(0,F),W=O.substr(F+1);if(q=this.__inSetup?void 0:this.___get(U),can$u.isMapLike(q))q._set(W,w);else throw new Error("can.Map: Object does not exist")}else q=this.__inSetup?void 0:this.___get(O),this.__convert&&(w=this.__convert(O,w)),this.__set(O,this.__type(w,O),q)},__type:function(O,w){if(typeof O=="object"&&!(O instanceof can$u.Map)&&mapHelpers$2.canMakeObserve(O)){var D=mapHelpers$2.getMapFromObject(O);if(D)return D;if(can$u.isArray(O)){var F=can$u.List;return new F(O)}else{var q=this.constructor.Map||can$u.Map;return new q(O)}}return O},__set:function(O,w,D){if(w!==D){var F=this._computedAttrs[O],q=F||D!==void 0||this.___get().hasOwnProperty(O)?"set":"add";this.___set(O,typeof w=="object"?bubble$1.set(this,O,w,D):w),(!F||!F.count)&&this._triggerChange(O,q,w,D),typeof D=="object"&&bubble$1.teardownFromParent(this,D)}},___set:function(O,w){var D=this._computedAttrs[O];D&&D.compute?D.compute(w):this._data[O]=w,typeof this.constructor.prototype[O]!="function"&&!D&&(this[O]=w)},removeAttr:function(O){return this._remove(O)},_remove:function(O){var w=mapHelpers$2.attrParts(O),D=w.shift(),F=this.___get(D);return w.length&&F?F.removeAttr(w):(typeof O=="string"&&~O.indexOf(".")&&(D=O),this.__remove(D,F),F)},__remove:function(O,w){O in this._data&&(this.___remove(O),this._triggerChange(O,"remove",void 0,w))},___remove:function(O){delete this._data[O],O in this.constructor.prototype||delete this[O]},___serialize:function(O,w){return mapHelpers$2.getValue(this,O,w,"serialize")},_getAttrs:function(){return mapHelpers$2.serialize(this,"attr",{})},_setAttrs:function(O,w){O=can$u.simpleExtend({},O);var D,F=this,q;can$u.batch.start(),this._each(function(U,W){if(W!=="_cid"){if(q=O[W],q===void 0){w&&F.removeAttr(W);return}F.__convert&&(q=F.__convert(W,q)),can$u.isMapLike(U)&&mapHelpers$2.canMakeObserve(q)?U.attr(q,w):U!==q&&F.__set(W,F.__type(q,W),U),delete O[W]}});for(D in O)D!=="_cid"&&(q=O[D],this._set(D,q,!0));return can$u.batch.stop(),this},serialize:function(){return mapHelpers$2.serialize(this,"serialize",{})},_triggerChange:function(O,w,D,F,q){bubble$1.isBubbling(this,"change")&&can$u.batch.trigger(this,{type:"change",target:this,batchNum:q},[O,w,D,F]),can$u.batch.trigger(this,{type:O,target:this,batchNum:q},[D,F]),(w==="remove"||w==="add")&&can$u.batch.trigger(this,{type:"__keys",target:this,batchNum:q})},_bindsetup:function(){},_bindteardown:function(){},one:can$u.one,bind:function(O,w){var D=this._computedAttrs&&this._computedAttrs[O];return D&&D.compute&&(D.count?D.count++:(D.count=1,D.compute.bind("change",D.handler))),bubble$1.bind(this,O),can$u.bindAndSetup.apply(this,arguments)},unbind:function(O,w){var D=this._computedAttrs&&this._computedAttrs[O];return D&&(D.count===1?(D.count=0,D.compute.unbind("change",D.handler)):D.count--),bubble$1.unbind(this,O),can$u.unbindAndTeardown.apply(this,arguments)},compute:function(O){if(can$u.isFunction(this.constructor.prototype[O]))return can$u.compute(this[O],this);var w=can$u.compute.read.reads(O),D=w.length-1;return can$u.compute(function(F){if(arguments.length)can$u.compute.read(this,w.slice(0,D)).value.attr(w[D].key,F);else return can$u.compute.read(this,w,{args:[]}).value},this)},each:function(){return can$u.each.apply(void 0,[this].concat(can$u.makeArray(arguments)))},_each:function(O){var w=this.___get();for(var D in w)w.hasOwnProperty(D)&&O(w[D],D)},dispatch:can$u.dispatch});Map$2.prototype.on=Map$2.prototype.bind,Map$2.prototype.off=Map$2.prototype.unbind,Map$2.on=Map$2.bind,Map$2.off=Map$2.unbind;var map=Map$2;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$t=util,Map$1=map,bubble=bubble_1,mapHelpers$1=map_helpers,splice$2=[].splice;(function(){var O={0:"a",length:1};return splice$2.call(O,0,1),!O[0]})();var list=Map$1.extend({Map:Map$1},{setup:function(O,w){this.length=0,can$t.cid(this,".map"),this._setupComputedProperties(),O=O||[];var D;can$t.isPromise(O)?this.replace(O):(D=O.length&&mapHelpers$1.addToMap(O,this),this.push.apply(this,can$t.makeArray(O||[]))),D&&D(),can$t.simpleExtend(this,w)},_triggerChange:function(O,w,D,F){Map$1.prototype._triggerChange.apply(this,arguments);var q=+O;!~(""+O).indexOf(".")&&!isNaN(q)&&(w==="add"?(can$t.batch.trigger(this,w,[D,q]),can$t.batch.trigger(this,"length",[this.length])):w==="remove"?(can$t.batch.trigger(this,w,[F,q]),can$t.batch.trigger(this,"length",[this.length])):can$t.batch.trigger(this,w,[D,q]))},___get:function(O){if(O){var w=this._computedAttrs[O];return w&&w.compute?w.compute():this[O]}else return this},__set:function(O,w,D){if(O=isNaN(+O)||O%1?O:+O,typeof O=="number"&&O>this.length-1){var F=new Array(O+1-this.length);return F[F.length-1]=w,this.push.apply(this,F),F}return can$t.Map.prototype.__set.call(this,""+O,w,D)},___set:function(O,w){this[O]=w,+O>=this.length&&(this.length=+O+1)},__remove:function(O,w){isNaN(+O)?(delete this[O],this._triggerChange(O,"remove",void 0,w)):this.splice(O,1)},_each:function(O){for(var w=this.___get(),D=0;D<w.length;D++)O(w[D],D)},serialize:function(){return mapHelpers$1.serialize(this,"serialize",[])},splice:function(O,w){var D=can$t.makeArray(arguments),F=[],q,U,W,Y=D.length>2;for(O=O||0,q=0,U=D.length-2;q<U;q++)W=q+2,D[W]=this.__type(D[W],W),F.push(D[W]),this[q+O]!==D[W]&&(Y=!1);if(Y&&this.length<=F.length)return F;w===void 0&&(w=D[1]=this.length-O);var Q=splice$2.apply(this,D);for(q=this.length;q<Q.length+this.length;q++)delete this[q];return can$t.batch.start(),w>0&&(bubble.removeMany(this,Q),this._triggerChange(""+O,"remove",void 0,Q)),D.length>2&&(bubble.addMany(this,F),this._triggerChange(""+O,"add",F,Q)),can$t.batch.stop(),Q},_getAttrs:function(){return mapHelpers$1.serialize(this,"attr",[])},_setAttrs:function(O,w){O=can$t.makeArray(O),can$t.batch.start(),this._updateAttrs(O,w),can$t.batch.stop()},_updateAttrs:function(O,w){for(var D=Math.min(O.length,this.length),F=0;F<D;F++){var q=this[F],U=O[F];can$t.isMapLike(q)&&mapHelpers$1.canMakeObserve(U)?q.attr(U,w):q!==U&&this._set(F+"",U)}O.length>this.length?this.push.apply(this,O.slice(this.length)):O.length<this.length&&w&&this.splice(O.length)}}),getArgs=function(O){return O[0]&&can$t.isArray(O[0])?O[0]:can$t.makeArray(O)};can$t.each({push:"length",unshift:0},function(O,w){var D=[][w];list.prototype[w]=function(){can$t.batch.start();for(var F=[],q=O?this.length:0,U=arguments.length,W,Y;U--;)Y=arguments[U],F[U]=bubble.set(this,U,this.__type(Y,U));return W=D.apply(this,F),(!this.comparator||F.length)&&this._triggerChange(""+q,"add",F,void 0),can$t.batch.stop(),W}}),can$t.each({pop:"length",shift:0},function(O,w){list.prototype[w]=function(){if(this.length){var D=getArgs(arguments),F=O&&this.length?this.length-1:0,q=[][w].apply(this,D);return can$t.batch.start(),this._triggerChange(""+F,"remove",void 0,[q]),q&&q.unbind&&bubble.remove(this,q),can$t.batch.stop(),q}}}),can$t.extend(list.prototype,{indexOf:function(O,w){return can$t.__observe(this,"length"),can$t.inArray(O,this,w)},join:function(){return can$t.__observe(this,"length"),[].join.apply(this,arguments)},reverse:function(){var O=[].reverse.call(can$t.makeArray(this));return this.replace(O)},slice:function(){can$t.__observe(this,"length");var O=Array.prototype.slice.apply(this,arguments);return new this.constructor(O)},concat:function(){var O=[];return can$t.each(can$t.makeArray(arguments),function(w,D){O[D]=w instanceof can$t.List?w.serialize():w}),new this.constructor(Array.prototype.concat.apply(this.serialize(),O))},forEach:function(O,w){return can$t.each(this,O,w||this)},replace:function(O){if(can$t.isPromise(O)){this._promise&&(this._promise.__isCurrentPromise=!1);var w=this._promise=O;w.__isCurrentPromise=!0;var D=this;O.then(function(F){w.__isCurrentPromise&&D.replace(F)})}else this.splice.apply(this,[0,this.length].concat(can$t.makeArray(O||[])));return this},filter:function(O,w){var D=new this.constructor,F=this,q;return this.each(function(U,W,Y){q=O.call(w||F,U,W,F),q&&D.push(U)}),D},map:function(O,w){var D=new can$t.List,F=this;return this.each(function(q,U,W){var Y=O.call(w||F,q,U,F);D.push(Y)}),D}}),can$t.List=Map$1.List=list,can$t.List;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$s=util,digitTest=/^\d+$/,keyBreaker=/([^\[\]]+)|(\[\])/g,paramTest=/([^?#]*)(#.*)?$/,prep=function(O){return decodeURIComponent(O.replace(/\+/g," "))};can$s.extend(can$s,{deparam:function(O){var w={},D,F;return O&&paramTest.test(O)&&(D=O.split("&"),can$s.each(D,function(q){var U=q.split("="),W=prep(U.shift()),Y=prep(U.join("=")),Q=w;if(W){U=W.match(keyBreaker);for(var ne=0,oe=U.length-1;ne<oe;ne++)Q[U[ne]]||(Q[U[ne]]=digitTest.test(U[ne+1])||U[ne+1]==="[]"?[]:{}),Q=Q[U[ne]];F=U.pop(),F==="[]"?Q.push(Y):Q[F]=Y}})),w}});/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$r=util,matcher=/\:([\w\.]+)/g,paramsMatcher=/^(?:&[^=]+=[^&]*)+/,makeProps=function(O){var w=[];return can$r.each(O,function(D,F){w.push((F==="className"?"class":F)+'="'+(F==="href"?D:can$r.esc(D))+'"')}),w.join(" ")},matchesData=function(O,w){var D=0,F=0,q={};for(var U in O.defaults)O.defaults[U]===w[U]&&(q[U]=1,D++);for(;F<O.names.length;F++){if(!w.hasOwnProperty(O.names[F]))return-1;q[O.names[F]]||D++}return D},location$1=window.location,wrapQuote=function(O){return(O+"").replace(/([.?*+\^$\[\]\\(){}|\-])/g,"\\$1")},each$2=can$r.each,extend$1=can$r.extend,definedToString=function(O){return O.toString.toString()!==Object.prototype.toString.toString()},stringify=function(O){return O&&typeof O=="object"&&!definedToString(O)?(O instanceof can$r.Map?O=O:O=can$r.isFunction(O.slice)?O.slice():can$r.extend({},O),can$r.each(O,function(w,D){O[D]=stringify(w)})):O!=null&&can$r.isFunction(O.toString)&&(O=O.toString()),O},removeBackslash=function(O){return O.replace(/\\/g,"")},timer,curParams,lastHash,changingData,changedAttrs=[],onRouteDataChange=function(O,w,D,F){changingData=1,changedAttrs.push(w),clearTimeout(timer),timer=setTimeout(function(){changingData=0;var q=can$r.route.data.serialize(),U=can$r.route.param(q,!0);can$r.route._call("setURL",U,changedAttrs),can$r.batch.trigger(eventsObject,"__url",[U,lastHash]),lastHash=U,changedAttrs=[]},10)},eventsObject=can$r.extend({},can$r.event),stringCoercingMapDecorator=function(O){var w=O.attr;return O.attr=function(D,F){var q=this.define===void 0||this.define[D]===void 0||!!this.define[D].serialize,U;return q?U=stringify(Array.apply(null,arguments)):U=arguments,w.apply(this,U)},O};can$r.route=function(O,w){var D=can$r.route._call("root");D.lastIndexOf("/")===D.length-1&&O.indexOf("/")===0&&(O=O.substr(1)),w=w||{};for(var F=[],q,U="",W=matcher.lastIndex=0,Y,Q=can$r.route._call("querySeparator"),ne=can$r.route._call("matchSlashes");q=matcher.exec(O);)F.push(q[1]),U+=removeBackslash(O.substring(W,matcher.lastIndex-q[0].length)),Y="\\"+(removeBackslash(O.substr(matcher.lastIndex,1))||Q+(ne?"":"|/")),U+="([^"+Y+"]"+(w[q[1]]?"*":"+")+")",W=matcher.lastIndex;return U+=O.substr(W).replace("\\",""),can$r.route.routes[O]={test:new RegExp("^"+U+"($|"+wrapQuote(Q)+")"),route:O,names:F,defaults:w,length:O.split("/").length},can$r.route},extend$1(can$r.route,{param:function(O,w){var D,F=0,q,U=O.route,W=0;if(delete O.route,each$2(O,function(){W++}),each$2(can$r.route.routes,function(oe,ce){if(q=matchesData(oe,O),q>F&&(D=oe,F=q),q>=W)return!1}),can$r.route.routes[U]&&matchesData(can$r.route.routes[U],O)===F&&(D=can$r.route.routes[U]),D){var Y=extend$1({},O),Q=D.route.replace(matcher,function(oe,ce){return delete Y[ce],O[ce]===D.defaults[ce]?"":encodeURIComponent(O[ce])}).replace("\\",""),ne;return each$2(D.defaults,function(oe,ce){Y[ce]===oe&&delete Y[ce]}),ne=can$r.param(Y),w&&can$r.route.attr("route",D.route),Q+(ne?can$r.route._call("querySeparator")+ne:"")}return can$r.isEmptyObject(O)?"":can$r.route._call("querySeparator")+can$r.param(O)},deparam:function(O){var w=can$r.route._call("root");w.lastIndexOf("/")===w.length-1&&O.indexOf("/")===0&&(O=O.substr(1));var D={length:-1},F=can$r.route._call("querySeparator"),q=can$r.route._call("paramsMatcher");if(each$2(can$r.route.routes,function(ne,oe){ne.test.test(O)&&ne.length>D.length&&(D=ne)}),D.length>-1){var U=O.match(D.test),W=U.shift(),Y=O.substr(W.length-(U[U.length-1]===F?1:0)),Q=Y&&q.test(Y)?can$r.deparam(Y.slice(1)):{};return Q=extend$1(!0,{},D.defaults,Q),each$2(U,function(ne,oe){ne&&ne!==F&&(Q[D.names[oe]]=decodeURIComponent(ne))}),Q.route=D.route,Q}return O.charAt(0)!==F&&(O=F+O),q.test(O)?can$r.deparam(O.slice(1)):{}},data:stringCoercingMapDecorator(new can$r.Map({})),map:function(O){var w;O.prototype instanceof can$r.Map?w=new O:w=O,can$r.route.data=stringCoercingMapDecorator(w)},routes:{},ready:function(O){return O!==!0&&(can$r.route._setup(),(can$r.isBrowserWindow||can$r.isWebWorker)&&can$r.route.setState()),can$r.route},url:function(O,w){return w&&(can$r.__observe(eventsObject,"__url"),O=can$r.extend({},can$r.route.deparam(can$r.route._call("matchingPartOfURL")),O)),can$r.route._call("root")+can$r.route.param(O)},link:function(O,w,D,F){return"<a "+makeProps(extend$1({href:can$r.route.url(w,F)},D))+">"+O+"</a>"},current:function(O){return can$r.__observe(eventsObject,"__url"),this._call("matchingPartOfURL")===can$r.route.param(O)},bindings:{hashchange:{paramsMatcher,querySeparator:"&",matchSlashes:!1,bind:function(){can$r.bind.call(window,"hashchange",setState)},unbind:function(){can$r.unbind.call(window,"hashchange",setState)},matchingPartOfURL:function(){var O=can$r.route.location||location$1;return O.href.split(/#!?/)[1]||""},setURL:function(O){return location$1.hash!=="#"+O&&(location$1.hash="!"+O),O},root:"#!"}},defaultBinding:"hashchange",currentBinding:null,_setup:function(){can$r.route.currentBinding||(can$r.route._call("bind"),can$r.route.bind("change",onRouteDataChange),can$r.route.currentBinding=can$r.route.defaultBinding)},_teardown:function(){can$r.route.currentBinding&&(can$r.route._call("unbind"),can$r.route.unbind("change",onRouteDataChange),can$r.route.currentBinding=null),clearTimeout(timer),changingData=0},_call:function(){var O=can$r.makeArray(arguments),w=O.shift(),D=can$r.route.bindings[can$r.route.currentBinding||can$r.route.defaultBinding],F=D[w];return F.apply?F.apply(D,O):F}}),each$2(["bind","unbind","on","off","delegate","undelegate","removeAttr","compute","_get","___get","each"],function(O){can$r.route[O]=function(){if(can$r.route.data[O])return can$r.route.data[O].apply(can$r.route.data,arguments)}}),can$r.route.attr=function(){return can$r.route.data.attr.apply(can$r.route.data,arguments)},can$r.route.batch=can$r.batch;var setState=can$r.route.setState=function(){var O=can$r.route._call("matchingPartOfURL"),w=curParams;curParams=can$r.route.deparam(O),(!changingData||O!==lastHash)&&(can$r.route.batch.start(),recursiveClean(w,curParams,can$r.route.data),can$r.route.attr(curParams),can$r.route.batch.trigger(eventsObject,"__url",[O,lastHash]),can$r.route.batch.stop())},recursiveClean=function(O,w,D){for(var F in O)w[F]===void 0?D.removeAttr(F):Object.prototype.toString.call(O[F])==="[object Object]"&&recursiveClean(O[F],w[F],D.attr(F))};can$r.route;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$q=util,bind$1=function(O,w,D){return can$q.bind.call(O,w,D),function(){can$q.unbind.call(O,w,D)}},isFunction$1=can$q.isFunction,extend=can$q.extend,each$1=can$q.each,slice$1=[].slice,paramReplacer$1=/\{([^\}]+)\}/g,special$2=can$q.getObject("$.event.special",[can$q])||{},delegate=function(O,w,D,F){return can$q.delegate.call(O,w,D,F),function(){can$q.undelegate.call(O,w,D,F)}},binder=function(O,w,D,F){return F?delegate(O,can$q.trim(F),w,D):bind$1(O,w,D)},basicProcessor;can$q.Control=can$q.Construct({setup:function(){if(can$q.Construct.setup.apply(this,arguments),can$q.Control){var O=this,w;O.actions={};for(w in O.prototype)O._isAction(w)&&(O.actions[w]=O._action(w))}},_shifter:function(O,w){var D=typeof w=="string"?O[w]:w;return isFunction$1(D)||(D=O[D]),function(){return O.called=w,D.apply(O,[this.nodeName?can$q.$(this):this].concat(slice$1.call(arguments,0)))}},_isAction:function(O){var w=this.prototype[O],D=typeof w;return O!=="constructor"&&(D==="function"||D==="string"&&isFunction$1(this.prototype[w]))&&!!(special$2[O]||processors[O]||/[^\w]/.test(O))},_action:function(O,w){if(paramReplacer$1.lastIndex=0,w||!paramReplacer$1.test(O)){var D=w?can$q.sub(O,this._lookup(w)):O;if(!D)return null;var F=can$q.isArray(D),q=F?D[1]:D,U=q.split(/\s+/g),W=U.pop();return{processor:processors[W]||basicProcessor,parts:[q,U.join(" "),W],delegate:F?D[0]:void 0}}},_lookup:function(O){return[O,window]},processors:{},defaults:{}},{setup:function(O,w){var D=this.constructor,F=D.pluginName||D._fullName,q;return this.element=can$q.$(O),F&&F!=="can_control"&&this.element.addClass(F),q=can$q.data(this.element,"controls"),q||(q=[],can$q.data(this.element,"controls",q)),q.push(this),this.options=extend({},D.defaults,w),this.on(),[this.element,this.options]},on:function(O,w,D,F){if(!O){this.off();var q=this.constructor,U=this._bindings,W=q.actions,Y=this.element,Q=can$q.Control._shifter(this,"destroy"),ne,oe;for(ne in W)W.hasOwnProperty(ne)&&(oe=W[ne]||q._action(ne,this.options,this),oe&&(U.control[ne]=oe.processor(oe.delegate||Y,oe.parts[2],oe.parts[1],ne,this)));return can$q.bind.call(Y,"removed",Q),U.user.push(function(ce){can$q.unbind.call(ce,"removed",Q)}),U.user.length}return typeof O=="string"&&(F=D,D=w,w=O,O=this.element),F===void 0&&(F=D,D=w,w=null),typeof F=="string"&&(F=can$q.Control._shifter(this,F)),this._bindings.user.push(binder(O,D,F,w)),this._bindings.user.length},off:function(){var O=this.element[0],w=this._bindings;w&&(each$1(w.user||[],function(D){D(O)}),each$1(w.control||{},function(D){D(O)})),this._bindings={user:[],control:{}}},destroy:function(){if(this.element!==null){var O=this.constructor,w=O.pluginName||O._fullName,D;this.off(),w&&w!=="can_control"&&this.element.removeClass(w),D=can$q.data(this.element,"controls"),D.splice(can$q.inArray(this,D),1),can$q.trigger(this,"destroyed"),this.element=null}}});var processors=can$q.Control.processors;basicProcessor=function(O,w,D,F,q){return binder(O,w,can$q.Control._shifter(q,F),D)},each$1(["change","click","contextmenu","dblclick","keydown","keyup","keypress","mousedown","mousemove","mouseout","mouseover","mouseup","reset","resize","scroll","select","submit","focusin","focusout","mouseenter","mouseleave","touchstart","touchmove","touchcancel","touchend","touchleave","inserted","removed","dragstart","dragenter","dragover","dragleave","drag","drop","dragend"],function(O){processors[O]=basicProcessor});/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$p=util;can$p.Control.processors.route=function(O,w,D,F,q){D=D||"",can$p.route.routes[D]||(D[0]==="/"&&(D=D.substring(1)),can$p.route(D));var U,W=function(Y,Q,ne){if(can$p.route.attr("route")===D&&(Y.batchNum===void 0||Y.batchNum!==U)){U=Y.batchNum;var oe=can$p.route.attr();delete oe.route,can$p.isFunction(q[F])?q[F](oe):q[q[F]](oe)}};return can$p.route.bind("change",W),function(){can$p.route.unbind("change",W)}};/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$o=util,pipe=function(O,w,D){var F=new can$o.Deferred;return O.then(function(){var q=can$o.makeArray(arguments),U=!0;try{q[0]=D.apply(w,q)}catch(W){U=!1,F.rejectWith(F,[W].concat(q))}U&&F.resolveWith(F,q)},function(){F.rejectWith(this,arguments)}),typeof O.abort=="function"&&(F.abort=function(){return O.abort()}),F},modelNum=0,getId=function(O){return can$o.__observe(O,O.constructor.id),O.___get(O.constructor.id)},ajax=function(O,w,D,F,q,U){var W={};if(typeof O=="string"){var Y=O.split(/\s+/);W.url=Y.pop(),Y.length&&(W.type=Y.pop())}else can$o.extend(W,O);return W.data=typeof w=="object"&&!can$o.isArray(w)?can$o.extend(W.data||{},w):w,W.url=can$o.sub(W.url,W.data,!0),can$o.ajax(can$o.extend({type:D||"post",dataType:"json",success:q,error:U},W))},makeRequest=function(O,w,D,F,q){var U;can$o.isArray(O)?(U=O[1],O=O[0]):U=O.serialize(),U=[U];var W,Y=O.constructor,Q;return(w==="update"||w==="destroy")&&U.unshift(getId(O)),Q=Y[w].apply(Y,U),W=pipe(Q,O,function(ne){return O[q||w+"d"](ne,Q),O}),Q.abort&&(W.abort=function(){Q.abort()}),W.then(D,F),W},converters={models:function(O,w,D){if(can$o.Model._reqs++,!!O){if(O instanceof this.List)return O;var F=this,q=[],U=F.List||ML,W=w instanceof can$o.List?w:new U,Y=O instanceof ML,Q=Y?O.serialize():O;if(Q=F.parseModels(Q,D),Q.data&&(O=Q,Q=Q.data),typeof Q>"u"||!can$o.isArray(Q))throw new Error("Could not get any raw data while converting using .models");return W.length&&W.splice(0),can$o.each(Q,function(ne){q.push(F.model(ne,D))}),W.push.apply(W,q),can$o.isArray(O)||can$o.each(O,function(ne,oe){oe!=="data"&&W.attr(oe,ne)}),setTimeout(can$o.proxy(this._clean,this),1),W}},model:function(O,w,D){if(O){typeof O.serialize=="function"?O=O.serialize():O=this.parseModel(O,D);var F=O[this.id];(F||F===0)&&this.store[F]&&(w=this.store[F]);var q=w&&can$o.isFunction(w.attr)?w.attr(O,this.removeAttr||!1):new this(O);return q}}},makeParser={parseModel:function(O){return function(w){return O?can$o.getObject(O,w):w}},parseModels:function(O){return function(w){if(can$o.isArray(w))return w;O=O||"data";var D=can$o.getObject(O,w);if(!can$o.isArray(D))throw new Error("Could not get any raw data while converting using .models");return D}}},ajaxMethods={create:{url:"_shortName",type:"post"},update:{data:function(O,w){w=w||{};var D=this.id;return w[D]&&w[D]!==O&&(w["new"+can$o.capitalize(O)]=w[D],delete w[D]),w[D]=O,w},type:"put"},destroy:{type:"delete",data:function(O,w){return w=w||{},w.id=w[this.id]=O,w}},findAll:{url:"_shortName"},findOne:{}},ajaxMaker=function(O,w){return function(D){return D=O.data?O.data.apply(this,arguments):D,ajax(w||this[O.url||"_url"],D,O.type||"get")}},createURLFromResource=function(O,w){if(O.resource){var D=O.resource.replace(/\/+$/,"");return w==="findAll"||w==="create"?D:D+"/{"+O.id+"}"}};can$o.Model=can$o.Map.extend({fullName:"can.Model",_reqs:0,setup:function(O,w,D,F){if(typeof w!="string"&&(F=D,D=w),F||(F=D),this.store={},can$o.Map.setup.apply(this,arguments),!!can$o.Model){D&&D.List?(this.List=D.List,this.List.Map=this):this.List=O.List.extend({Map:this},{});var q=this,U=can$o.proxy(this._clean,q);can$o.each(ajaxMethods,function(Y,Q){if(D&&D[Q]&&(typeof D[Q]=="string"||typeof D[Q]=="object")?q[Q]=ajaxMaker(Y,D[Q]):D&&D.resource&&!can$o.isFunction(D[Q])&&(q[Q]=ajaxMaker(Y,createURLFromResource(q,Q))),q["make"+can$o.capitalize(Q)]){var ne=q["make"+can$o.capitalize(Q)](q[Q]);can$o.Construct._overwrite(q,O,Q,function(){can$o.Model._reqs++;var oe=ne.apply(this,arguments),ce=oe.then(U,U);return ce.abort=oe.abort,ce})}});var W={};can$o.each(converters,function(Y,Q){var ne="parse"+can$o.capitalize(Q),oe=D&&D[Q]||q[Q];typeof oe=="string"?(q[ne]=oe,can$o.Construct._overwrite(q,O,Q,Y)):D&&D[Q]&&(W[ne]=!0)}),can$o.each(makeParser,function(Y,Q){var ne=D&&D[Q]||q[Q];if(typeof ne=="string")can$o.Construct._overwrite(q,O,Q,Y(ne));else if((!D||!can$o.isFunction(D[Q]))&&!q[Q]){var oe=Y();oe.useModelConverter=W[Q],can$o.Construct._overwrite(q,O,Q,oe)}}),(q.fullName==="can.Model"||!q.fullName)&&(q.fullName="Model"+ ++modelNum),can$o.Model._reqs=0,this._url=this._shortName+"/{"+this.id+"}"}},_ajax:ajaxMaker,_makeRequest:makeRequest,_clean:function(){if(can$o.Model._reqs--,!can$o.Model._reqs)for(var O in this.store)this.store[O]._bindings||delete this.store[O];return arguments[0]},models:converters.models,model:converters.model},{setup:function(O){var w=O&&O[this.constructor.id];can$o.Model._reqs&&w!=null&&(this.constructor.store[w]=this),can$o.Map.prototype.setup.apply(this,arguments)},isNew:function(){var O=getId(this);return!(O||O===0)},save:function(O,w){return makeRequest(this,this.isNew()?"create":"update",O,w)},destroy:function(O,w){if(this.isNew()){var D=this,F=can$o.Deferred();return F.then(O,w),F.done(function(q){D.destroyed(q)}).resolve(D)}return makeRequest(this,"destroy",O,w,"destroyed")},_bindsetup:function(){var O=this.___get(this.constructor.id);return O!=null&&(this.constructor.store[O]=this),can$o.Map.prototype._bindsetup.apply(this,arguments)},_bindteardown:function(){return delete this.constructor.store[getId(this)],can$o.Map.prototype._bindteardown.apply(this,arguments)},___set:function(O,w){can$o.Map.prototype.___set.call(this,O,w),O===this.constructor.id&&this._bindings&&(this.constructor.store[getId(this)]=this)}});var makeGetterHandler=function(O){return function(w,D,F){return this[O](w,null,F)}},createUpdateDestroyHandler=function(O){return this.parseModel.useModelConverter?this.model(O):this.parseModel(O)},responseHandlers={makeFindAll:makeGetterHandler("models"),makeFindOne:makeGetterHandler("model"),makeCreate:createUpdateDestroyHandler,makeUpdate:createUpdateDestroyHandler,makeDestroy:createUpdateDestroyHandler};can$o.each(responseHandlers,function(O,w){can$o.Model[w]=function(D){return function(){var F=can$o.makeArray(arguments),q=can$o.isFunction(F[1])?F.splice(0,1):F.splice(0,2),U=pipe(D.apply(this,q),this,O);return U.then(F[0],F[1]),U}}}),can$o.each(["created","updated","destroyed"],function(O){can$o.Model.prototype[O]=function(w){var D=this,F=D.constructor;w&&typeof w=="object"&&this.attr(can$o.isFunction(w.attr)?w.attr():w),can$o.dispatch.call(this,{type:O,target:this},[]),can$o.dispatch.call(F,O,[this])}});var ML=can$o.Model.List=can$o.List.extend({_bubbleRule:function(O,w){var D=can$o.List._bubbleRule(O,w);return D.push("destroyed"),D}},{setup:function(O){can$o.isPlainObject(O)&&!can$o.isArray(O)?(can$o.List.prototype.setup.apply(this),this.replace(can$o.isPromise(O)?O:this.constructor.Map.findAll(O))):can$o.List.prototype.setup.apply(this,arguments),this.bind("destroyed",can$o.proxy(this._destroyed,this))},_destroyed:function(O,w){if(/\w+/.test(w))for(var D;(D=this.indexOf(O.target))>-1;)this.splice(D,1)}});can$o.Model;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$n=util,read$1=function(O,w,D){D=D||{};for(var F={foundObservable:!1},q=readValue(O,0,w,D,F),U,W,Y=w.length,Q=0;Q<Y;){W=q;for(var ne=0,oe=read$1.propertyReaders.length;ne<oe;ne++){var ce=read$1.propertyReaders[ne];if(ce.test(q)){q=ce.read(q,w[Q],Q,D,F);break}}if(Q=Q+1,q=readValue(q,Q,w,D,F,W),U=typeof q,Q<w.length&&(q===null||U!=="function"&&U!=="object"))return D.earlyExit&&D.earlyExit(W,Q-1,q),{value:void 0,parent:W}}return q===void 0&&D.earlyExit&&D.earlyExit(W,Q-1),{value:q,parent:W}},isAt=function(O,w){var D=w[O-1];return D&&D.at},readValue=function(O,w,D,F,q,U){var W;do{W=!1;for(var Y=0,Q=read$1.valueReaders.length;Y<Q;Y++)read$1.valueReaders[Y].test(O,w,D,F)&&(O=read$1.valueReaders[Y].read(O,w,D,F,q,U))}while(W);return O};read$1.valueReaders=[{name:"compute",test:function(O,w,D,F){return O&&O.isComputed&&!isAt(w,D)},read:function(O,w,D,F,q){return F.readCompute===!1&&w===D.length?O:(!q.foundObservable&&F.foundObservable&&(F.foundObservable(O,w),q.foundObservable=!0),O instanceof can$n.Compute?O.get():O())}},{name:"function",test:function(O,w,D,F){var q=typeof O;return q==="function"&&!O.isComputed&&!(can$n.Construct&&O.prototype instanceof can$n.Construct)&&!(can$n.route&&O===can$n.route)},read:function(O,w,D,F,q,U){return isAt(w,D)?w===D.length?can$n.proxy(O,U):O:F.callMethodsOnObservables&&can$n.isMapLike(U)?O.apply(U,F.args||[]):F.isArgument&&w===D.length?F.proxyMethods!==!1?can$n.proxy(O,U):O:O.apply(U,F.args||[])}}],read$1.propertyReaders=[{name:"map",test:can$n.isMapLike,read:function(O,w,D,F,q){!q.foundObservable&&F.foundObservable&&(F.foundObservable(O,D),q.foundObservable=!0);var U=O.attr(w.key);return U!==void 0?U:O[w.key]}},{name:"promise",test:function(O){return can$n.isPromise(O)},read:function(O,w,D,F,q){!q.foundObservable&&F.foundObservable&&(F.foundObservable(O,D),q.foundObservable=!0);var U=O.__observeData;return O.__observeData||(U=O.__observeData={isPending:!0,state:"pending",isResolved:!1,isRejected:!1,value:void 0,reason:void 0},can$n.cid(U),can$n.simpleExtend(U,can$n.event),O.then(function(W){U.isPending=!1,U.isResolved=!0,U.value=W,U.state="resolved",U.dispatch("state",["resolved","pending"])},function(W){U.isPending=!1,U.isRejected=!0,U.reason=W,U.state="rejected",U.dispatch("state",["rejected","pending"])})),can$n.__observe(U,"state"),w.key in U?U[w.key]:O[w.key]}},{name:"object",test:function(){return!0},read:function(O,w){if(O!=null){if(w.key in O)return O[w.key];if(w.at&&specialRead[w.key]&&"@"+w.key in O)return w.at=!1,O["@"+w.key]}}}];var specialRead={index:!0,key:!0,event:!0,element:!0,viewModel:!0};read$1.write=function(O,w,D,F){if(F=F||{},can$n.isMapLike(O))return!F.isArgument&&O._data&&O._data[w]&&O._data[w].isComputed?O._data[w](D):O.attr(w,D);if(O[w]&&O[w].isComputed)return O[w](D);typeof O=="object"&&(O[w]=D)},read$1.reads=function(O){var w=[],D=0,F=!1;O.charAt(0)==="@"&&(D=1,F=!0);for(var q="",U=D;U<O.length;U++){var W=O.charAt(U);W==="."||W==="@"?O.charAt(U-1)!=="\\"?(w.push({key:q,at:F}),F=W==="@",q=""):q=q.substr(0,q.length-1)+".":q+=W}return w.push({key:q,at:F}),w};var read_1=read$1;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$m=util,read=read_1,ObservedInfo$1=get_value_and_bind;can$m.Compute=function(O,w,D,F){can$m.cid(this,"compute");for(var q=[],U=0,W=arguments.length;U<W;U++)q[U]=arguments[U];var Y=typeof q[1];typeof q[0]=="function"?this._setupGetterSetterFn(q[0],q[1],q[2],q[3]):q[1]?Y==="string"?this._setupProperty(q[0],q[1],q[2]):Y==="function"?this._setupSetter(q[0],q[1],q[2]):q[1]&&q[1].fn?this._setupAsyncCompute(q[0],q[1]):this._setupSettings(q[0],q[1]):this._setupSimpleValue(q[0]),this._args=q,this._primaryDepth=0,this.isComputed=!0},can$m.simpleExtend(can$m.Compute.prototype,{setPrimaryDepth:function(O){this._primaryDepth=O},_setupGetterSetterFn:function(O,w,D){this._set=w?can$m.proxy(O,w):O,this._get=w?can$m.proxy(O,w):O,this._canObserve=D!==!1;var F=setupComputeHandlers(this,O,w||this);can$m.simpleExtend(this,F)},_setupProperty:function(O,w,D){var F=can$m.isMapLike(O),q=this,U;F?(U=function(W,Y,Q){q.updater(Y,Q,W.batchNum)},this.hasDependencies=!0,this._get=function(){return O.attr(w)},this._set=function(W){O.attr(w,W)}):(U=function(){q.updater(q._get(),q.value)},this._get=function(){return can$m.getObject(w,[O])},this._set=function(W){var Y=w.split("."),Q=Y.pop(),ne=can$m.getObject(Y.join("."),[O]);ne[Q]=W}),this._on=function(W){can$m.bind.call(O,D||w,U),this.value=this._get()},this._off=function(){return can$m.unbind.call(O,D||w,U)}},_setupSetter:function(O,w,D){this.value=O,this._set=w,can$m.simpleExtend(this,D)},_setupSettings:function(O,w){if(this.value=O,this._set=w.set||this._set,this._get=w.get||this._get,!w.__selfUpdater){var D=this,F=this.updater;this.updater=function(){F.call(D,D._get(),D.value)}}this._on=w.on?w.on:this._on,this._off=w.off?w.off:this._off},_setupAsyncCompute:function(O,w){var D=this;this.value=O,this._setUpdates=!0,this.lastSetValue=new can$m.Compute(O),this._set=function(Y){return Y===D.lastSetValue.get()?this.value:D.lastSetValue.set(Y)},this._get=function(){return F.call(w.context,D.lastSetValue.get())};var F=w.fn,q;if(F.length===0)q=setupComputeHandlers(this,F,w.context);else if(F.length===1)q=setupComputeHandlers(this,function(){return F.call(w.context,D.lastSetValue.get())},w);else{var U=this.updater,W=function(Y){U.call(D,Y,D.value)};this.updater=function(Y){U.call(D,Y,D.value)},q=setupComputeHandlers(this,function(){var Y=F.call(w.context,D.lastSetValue.get(),W);return Y!==void 0?Y:this.value},this)}can$m.simpleExtend(this,q)},_setupSimpleValue:function(O){this.value=O},_bindsetup:can$m.__notObserve(function(){this.bound=!0,this._on(this.updater)}),_bindteardown:function(){this._off(this.updater),this.bound=!1},bind:can$m.bindAndSetup,unbind:can$m.unbindAndTeardown,clone:function(O){return O&&typeof this._args[0]=="function"?this._args[1]=O:O&&(this._args[2]=O),new can$m.Compute(this._args[0],this._args[1],this._args[2],this._args[3])},_on:can$m.k,_off:can$m.k,get:function(){var O=can$m.__isRecordingObserves();return O&&this._canObserve!==!1&&(can$m.__observe(this,"change"),this.bound||can$m.Compute.temporarilyBind(this)),this.bound?(O&&this.getDepth&&this.getDepth()>=O.getDepth()&&ObservedInfo$1.updateUntil(this.getPrimaryDepth(),this.getDepth()),this.value):this._get()},_get:function(){return this.value},set:function(O){var w=this.value,D=this._set(O,w);return this._setUpdates?this.value:this.hasDependencies?this._get():(D===void 0?this.value=this._get():this.value=D,updateOnChange(this,this.value,w),this.value)},_set:function(O){return this.value=O},updater:function(O,w,D){this.value=O,updateOnChange(this,O,w,D)},toFunction:function(){return can$m.proxy(this._computeFn,this)},_computeFn:function(O){return arguments.length?this.set(O):this.get()}});var updateOnChange=function(O,w,D,F){var q=w!==D&&!(w!==w&&D!==D);q&&can$m.batch.trigger(O,{type:"change",batchNum:F},[w,D])},setupComputeHandlers=function(O,w,D){var F=new ObservedInfo$1(w,D,O);return{readInfo:F,_on:function(){F.getValueAndBind(),O.value=F.value,O.hasDependencies=!can$m.isEmptyObject(F.newObserved)},_off:function(){F.teardown()},getDepth:function(){return F.getDepth()},getPrimaryDepth:function(){return F.getPrimaryDepth()}}};can$m.Compute.temporarilyBind=function(O){var w=O.computeInstance||O;w.bind("change",can$m.k),computes||(computes=[],setTimeout(unbindComputes,10)),computes.push(w)};var computes,unbindComputes=function(){for(var O=0,w=computes.length;O<w;O++)computes[O].unbind("change",can$m.k);computes=null};can$m.Compute.async=function(O,w,D){return new can$m.Compute(O,{fn:w,context:D})},can$m.Compute.truthy=function(O){return new can$m.Compute(function(){var w=O.get();return typeof w=="function"&&(w=w.get()),!!w})},can$m.Compute.read=read,can$m.Compute.set=read.write,can$m.Compute;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$l=util;can$l.compute=function(O,w,D,F){var q=new can$l.Compute(O,w,D,F),U=q.bind,W=q.unbind,Y=function(oe){return arguments.length?q.set(oe):q.get()},Q=can$l.cid(Y,"compute"),ne="__handler"+Q;return Y.bind=function(oe,ce){var fe=ce&&ce[ne];return ce&&!fe&&(fe=ce[ne]=function(){ce.apply(Y,arguments)}),U.call(q,oe,fe)},Y.unbind=function(oe,ce){var fe=ce&&ce[ne];return fe?(delete ce[ne],q.unbind(oe,fe)):W.apply(q,arguments)},Y.isComputed=q.isComputed,Y.clone=function(oe){return typeof O=="function"&&(w=oe),can$l.compute(O,w,oe,F)},Y.computeInstance=q,Y},can$l.compute.truthy=function(O){return can$l.compute(function(){var w=O();return typeof w=="function"&&(w=w()),!!w})},can$l.compute.async=function(O,w,D){return can$l.compute(O,{fn:w,context:D})},can$l.compute.read=can$l.Compute.read,can$l.compute.set=can$l.Compute.set,can$l.compute.temporarilyBind=can$l.Compute.temporarilyBind,can$l.compute;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$k=util,mapHelpers=map_helpers;if(!can$k.define){var define=can$k.define={},getPropDefineBehavior=function(O,w,D){var F,q;if(D){if(F=D[w],q=D["*"],F&&F[O]!==void 0)return F[O];if(q&&q[O]!==void 0)return q[O]}};mapHelpers.define=function(O,w){var D=O.prototype.define;if(w){var F=can$k.simpleExtend({},w);mapHelpers.twoLevelDeepExtend(F,D),can$k.simpleExtend(D,F)}O.defaultGenerators={};for(var q in D){var U=D[q].type;typeof U=="string"&&typeof define.types[U]=="object"&&(delete D[q].type,can$k.extend(D[q],define.types[U])),"value"in D[q]&&(typeof D[q].value=="function"?O.defaultGenerators[q]=D[q].value:O.defaults[q]=D[q].value),typeof D[q].Value=="function"&&function(W){O.defaultGenerators[q]=function(){return new W}}(D[q].Value)}};var oldSetupDefaults=can$k.Map.prototype._setupDefaults;can$k.Map.prototype._setupDefaults=function(O){var w=can$k.extend({},oldSetupDefaults.call(this)),D={},F=this.constructor,q=this._get;this._get=function(W){var Y=W.indexOf(".")!==-1?W.substr(0,W.indexOf(".")):W;return Y in w&&!(Y in D)&&(this.attr(Y,w[Y]),D[Y]=!0),q.apply(this,arguments)};for(var U in F.defaultGenerators)(!O||!(U in O))&&(w[U]=F.defaultGenerators[U].call(this));return delete this._get,w};var proto=can$k.Map.prototype,oldSet=proto.__set;proto.__set=function(O,w,D,F,q){var U=function(ce){var fe=q&&q.call(W,ce);return fe!==!1&&can$k.trigger(W,"error",[O,ce],!0),!1},W=this,Y=getPropDefineBehavior("set",O,this.define),Q=getPropDefineBehavior("get",O,this.define);if(Y){can$k.batch.start();var ne=!1,oe=Y.call(this,w,function(ce){Q?W[O](ce):oldSet.call(W,O,ce,D,F,U),ne=!0},U,Q?this._computedAttrs[O].compute.computeInstance.lastSetValue.get():D);if(Q){oe!==void 0&&!ne&&Y.length>=1&&this._computedAttrs[O].compute(oe),can$k.batch.stop();return}else if(oe===void 0&&!ne&&Y.length>=1){can$k.batch.stop();return}else return ne||oldSet.call(W,O,Y.length===0&&oe===void 0?w:oe,D,F,U),can$k.batch.stop(),this}else oldSet.call(W,O,w,D,F,U);return this},define.types={date:function(O){var w=typeof O;return w==="string"?(O=Date.parse(O),isNaN(O)?null:new Date(O)):w==="number"?new Date(O):O},number:function(O){return O==null?O:+O},boolean:function(O){return!(O==="false"||O==="0"||!O)},htmlbool:function(O){return typeof O=="string"||!!O},"*":function(O){return O},string:function(O){return O==null?O:""+O},compute:{set:function(O,w,D,F){return O&&O.isComputed?O:F&&F.isComputed?(F(O),F):O},get:function(O){return O&&O.isComputed?O():O}}};var oldType=proto.__type;proto.__type=function(O,w){var D=getPropDefineBehavior("type",w,this.define),F=getPropDefineBehavior("Type",w,this.define),q=O;return typeof D=="string"&&(D=define.types[D]),D||F?(D&&(q=D.call(this,q,w)),F&&!(q instanceof F)&&(q=new F(q)),q):(can$k.isPlainObject(q)&&q.define&&(q=can$k.Map.extend(q),q=new q),oldType.call(this,q,w))};var oldRemove=proto.__remove;proto.__remove=function(O,w){var D=getPropDefineBehavior("remove",O,this.define),F;if(D)if(can$k.batch.start(),F=D.call(this,w),F===!1){can$k.batch.stop();return}else return F=oldRemove.call(this,O,w),can$k.batch.stop(),F;return oldRemove.call(this,O,w)};var oldSetupComputes=proto._setupComputedProperties;proto._setupComputedProperties=function(){oldSetupComputes.apply(this,arguments);for(var O in this.define){var w=this.define[O],D=w.get;D&&mapHelpers.addComputedAttr(this,O,can$k.compute.async(void 0,D,this))}};var oldSingleSerialize=proto.___serialize;proto.___serialize=function(O,w){return serializeProp(this,O,w)};var serializeProp=function(O,w,D){var F=w==="*"?!1:getPropDefineBehavior("serialize",w,O.define);if(F===void 0)return oldSingleSerialize.call(O,w,D);if(F!==!1)return typeof F=="function"?F.call(O,D,w):oldSingleSerialize.call(O,w,D)},oldSerialize=proto.serialize;proto.serialize=function(O){var w=oldSerialize.apply(this,arguments);if(O)return w;var D,F;for(var q in this.define)q in w||(D=this.define&&this.define[q]&&this.define[q].serialize,D&&(F=serializeProp(this,q,this.attr(q)),F!==void 0&&(w[q]=F)));return w}}can$k.define;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$j=util,ObservedInfo=get_value_and_bind,isFastPath=function(O){return O.reads&&O.reads.length===1&&O.root instanceof can$j.Map&&!can$j.isFunction(O.root[O.reads[0].key])},scopeReader=function(O,w,D,F,q){if(arguments.length>4){var U=F.root||F.setRoot;if(U){if(U.isComputed)U(q);else if(F.reads.length){var W=F.reads.length-1,Y=F.reads.length?can$j.compute.read(U,F.reads.slice(0,W)).value:U;can$j.compute.set(Y,F.reads[W].key,q,D)}}}else{if(F.root)return can$j.compute.read(F.root,F.reads,D).value;var Q=O.read(w,D);return F.scope=Q.scope,F.initialValue=Q.value,F.reads=Q.reads,F.root=Q.rootObserve,F.setRoot=Q.setRoot,Q.value}},compute_data=function(O,w,D){D=D||{args:[]};var F={},q=function(Y){return arguments.length?scopeReader(O,w,D,F,Y):scopeReader(O,w,D,F)},U=can$j.compute(void 0,{on:function(){W.getValueAndBind(),isFastPath(F)&&(W.dependencyChange=function(Y,Q){return typeof Q!="function"?this.newVal=Q:(W.dependencyChange=ObservedInfo.prototype.dependencyChange,W.getValueAndBind=ObservedInfo.prototype.getValueAndBind),ObservedInfo.prototype.dependencyChange.call(this,Y)},W.getValueAndBind=function(){this.value=this.newVal}),U.computeInstance.value=W.value,U.computeInstance.hasDependencies=!can$j.isEmptyObject(W.newObserved)},off:function(){W.dependencyChange=ObservedInfo.prototype.dependencyChange,W.getValueAndBind=ObservedInfo.prototype.getValueAndBind,W.teardown()},set:q,get:q,__selfUpdater:!0}),W=new ObservedInfo(q,null,U.computeInstance);return F.compute=U,F};function commonjsRequire(O){throw new Error('Could not dynamically require "'+O+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$i=util,isFunction=can$i.isFunction,makeArray=can$i.makeArray,hookupId=1,makeRenderer=function(O){var w=function(){return $view.frag(O.apply(this,arguments))};return w.render=function(){return O.apply(O,arguments)},w},checkText=function(O,w){if(!O.length)throw new Error("can.view: No template or empty template:"+w)},getRenderer=function(O,w){if(isFunction(O)){var D=can$i.Deferred();return D.resolve(O)}var F=typeof O=="string"?O:O.url,q=O.engine&&"."+O.engine||F.match(/\.[\w\d]+$/),U,W,Y;if(F.match(/^#/)&&(F=F.substr(1)),(W=document.getElementById(F))&&(q="."+W.type.match(/\/(x\-)?(.+)/)[2]),!q&&!$view.cached[F]&&(F+=q=$view.ext),can$i.isArray(q)&&(q=q[0]),Y=$view.toId(F),F.match(/^\/\//)&&(F=F.substr(2),F=window.steal?steal.config().root.mapJoin(""+steal.id(F)):F),window.require&&commonjsRequire.toUrl&&(F=commonjsRequire.toUrl(F)),U=$view.types[q],$view.cached[Y])return $view.cached[Y];if(W)return $view.registerView(Y,W.innerHTML,U);var Q=new can$i.Deferred;return can$i.ajax({async:w,url:F,dataType:"text",error:function(ne){checkText("",F),Q.reject(ne)},success:function(ne){checkText(ne,F),$view.registerView(Y,ne,U,Q)}}),Q},getDeferreds=function(O){var w=[];if(can$i.isPromise(O))return[O];for(var D in O)can$i.isPromise(O[D])&&w.push(O[D]);return w},usefulPart=function(O){return can$i.isArray(O)&&O[1]==="success"?O[0]:O},$view=can$i.view=can$i.template=function(O,w,D,F){return isFunction(D)&&(F=D,D=void 0),$view.renderAs("fragment",O,w,D,F)};can$i.extend($view,{frag:function(O,w){return $view.hookup($view.fragment(O),w)},fragment:function(O){return can$i.frag(O,document)},toId:function(O){return can$i.map(O.toString().split(/\/|\./g),function(w){if(w)return w}).join("_")},toStr:function(O){return O==null?"":""+O},hookup:function(O,w){var D=[],F,q;return can$i.each(O.childNodes?can$i.makeArray(O.childNodes):O,function(U){U.nodeType===1&&(D.push(U),D.push.apply(D,can$i.makeArray(U.getElementsByTagName("*"))))}),can$i.each(D,function(U){U.getAttribute&&(F=U.getAttribute("data-view-id"))&&(q=$view.hookups[F])&&(q(U,w,F),delete $view.hookups[F],U.removeAttribute("data-view-id"))}),O},hookups:{},hook:function(O){return $view.hookups[++hookupId]=O," data-view-id='"+hookupId+"'"},cached:{},cachedRenderers:{},cache:!0,register:function(O){this.types["."+O.suffix]=O,can$i[O.suffix]=$view[O.suffix]=function(w,D){var F,q;if(!D)return q=function(){return F||(O.fragRenderer?F=O.fragRenderer(null,w):F=makeRenderer(O.renderer(null,w))),F.apply(this,arguments)},q.render=function(){var W=O.renderer(null,w);return W.apply(W,arguments)},q;var U=function(){return F||(O.fragRenderer?F=O.fragRenderer(w,D):F=O.renderer(w,D)),F.apply(this,arguments)};return O.fragRenderer?$view.preload(w,U):$view.preloadStringRenderer(w,U)}},types:{},ext:".ejs",registerScript:function(O,w,D){return"can.view.preloadStringRenderer('"+w+"',"+$view.types["."+O].script(w,D)+");"},preload:function(O,w){var D=$view.cached[O]=new can$i.Deferred().resolve(function(F,q){return w.call(F,F,q)});return D.__view_id=O,$view.cachedRenderers[O]=w,w},preloadStringRenderer:function(O,w){return this.preload(O,makeRenderer(w))},render:function(O,w,D,F,q){return can$i.view.renderAs("string",O,w,D,F,q)},renderTo:function(O,w,D,F,q){return(O==="string"&&w.render?w.render:w)(D,F,q)},renderAs:function(O,w,D,F,q,U){q!==void 0&&typeof q.expression=="string"&&(U=q,q=void 0),isFunction(F)&&(q=F,F=void 0);var W=getDeferreds(D),Y,Q,ne,oe;if(W.length)return Y=new can$i.Deferred,Q=can$i.extend({},D),W.push(getRenderer(w,!0)),can$i.when.apply(can$i,W).then(function(fe){var we=makeArray(arguments),Z=we.pop(),ve;if(can$i.isPromise(D))Q=usefulPart(fe);else for(var de in D)can$i.isPromise(D[de])&&(Q[de]=usefulPart(we.shift()));ve=can$i.view.renderTo(O,Z,Q,F,U),Y.resolve(ve,Q),q&&q(ve,Q)},function(){Y.reject.apply(Y,arguments)}),Y;if(ne=isFunction(q),Y=can$i.__notObserve(getRenderer)(w,ne),ne)oe=Y,Y.then(function(fe){q(D?can$i.view.renderTo(O,fe,D,F,U):fe)});else if(Y.state()==="resolved"&&Y.__view_id){var ce=$view.cachedRenderers[Y.__view_id];return D?can$i.view.renderTo(O,ce,D,F,U):ce}else Y.then(function(fe){oe=D?can$i.view.renderTo(O,fe,D,F,U):fe});return oe},registerView:function(O,w,D,F){var q=typeof D=="object"?D:$view.types[D||$view.ext],U;return q.fragRenderer?U=q.fragRenderer(O,w):U=makeRenderer(q.renderer(O,w)),F=F||new can$i.Deferred,$view.cache&&($view.cached[O]=F,F.__view_id=O,$view.cachedRenderers[O]=U),F.resolve(U)},simpleHelper:function(O){return function(){var w=[],D=arguments;return can$i.each(D,function(F,q){if(q<=D.length){for(;F&&F.isComputed;)F=F();w.push(F)}}),O.apply(this,w)}}});var view=can$i;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$h=util,makeComputeData=compute_data;function Scope(O,w,D){this._context=O,this._parent=w,this._meta=D||{},this.__cache={}}can$h.simpleExtend(Scope,{read:can$h.compute.read,Refs:can$h.Map.extend({shortName:"ReferenceMap"},{}),refsScope:function(){return new can$h.view.Scope(new this.Refs)}}),can$h.simpleExtend(Scope.prototype,{add:function(O,w){return O!==this._context?new this.constructor(O,this,w):this},read:function(O,w){if(O==="%root")return{value:this.getRoot()};var D=O.substr(0,2)==="./",F=O.substr(0,3)==="../",q=O==="."||O==="this",U=O==="..",W=D||F||q||U;if(W&&this._meta.notContext)return this._parent.read(O,w);var Y;if(D)Y=!0,O=O.substr(2);else if(F||U){for(var Q=this._parent;Q._meta.notContext;)Q=Q._parent;return U?{value:Q._context}:Q.read(O.substr(3)||".",w)}else if(q)return{value:this._context};var ne=can$h.compute.read.reads(O);return ne[0].key.charAt(0)==="*"?this.getRefs()._read(ne,w,!0):this._read(ne,w,Y)},_read:function(O,w,D){for(var F=this,q,U=[],W,Y,Q=-1,ne,oe,ce=can$h.simpleExtend({foundObservable:function(ve,de){W=ve,Y=O.slice(de)},earlyExit:function(ve,de){de>Q&&(oe=W,ne=Y,Q=de)}},w);F;){if(q=F._context,q!==null&&(typeof q=="object"||typeof q=="function")){var fe=can$h.__trapObserves(),we=can$h.compute.read(q,O,ce),Z=fe();if(we.value!==void 0)return can$h.__observes(Z),{scope:F,rootObserve:W,value:we.value,reads:Y};U.push.apply(U,Z)}D?F=null:F=F._parent}return can$h.__observes(U),{setRoot:oe,reads:ne,value:void 0}},get:can$h.__notObserve(function(O,w){w=can$h.simpleExtend({isArgument:!0},w);var D=this.read(O,w);return D.value}),getScope:function(O){for(var w=this;w;){if(O(w))return w;w=w._parent}},getContext:function(O){var w=this.getScope(O);return w&&w._context},getRefs:function(){return this.getScope(function(O){return O._context instanceof Scope.Refs})},getRoot:function(){for(var O=this,w=this;O._parent;)w=O,O=O._parent;return O._context instanceof Scope.Refs&&(O=w),O._context},set:function(O,w,D){var F=O.lastIndexOf("."),q=O.lastIndexOf("/"),U,W;if(q>F?(U=O.substring(0,q),W=O.substring(q+1,O.length)):F!==-1?(U=O.substring(0,F),W=O.substring(F+1,O.length)):(U=".",W=O),O.charAt(0)==="*")can$h.compute.set(this.getRefs()._context,O,w,D);else{var Y=this.read(U,D).value;can$h.compute.set(Y,W,w,D)}},attr:can$h.__notObserve(function(O,w,D){return D=can$h.simpleExtend({isArgument:!0},D),arguments.length===2?this.set(O,w,D):this.get(O,D)}),computeData:function(O,w){return makeComputeData(this,O,w)},compute:function(O,w){return this.computeData(O,w).compute},cloneFromRef:function(){for(var O=[],w=this,D,F;w;){if(D=w._context,D instanceof Scope.Refs){F=w._parent;break}O.unshift(D),w=w._parent}return F?(can$h.each(O,function(q){F=F.add(q)}),F):this}}),can$h.view.Scope=Scope;function Options$1(O,w,D){!O.helpers&&!O.partials&&!O.tags&&(O={helpers:O}),Scope.call(this,O,w,D)}Options$1.prototype=new Scope,Options$1.prototype.constructor=Options$1,can$h.view.Options=Options$1;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$g=util,doc=typeof document<"u"?document:null,selectsCommentNodes=doc&&function(){return can$g.$(document.createComment("~")).length===1}(),elements$4={tagToContentPropMap:{option:doc&&"textContent"in document.createElement("option")?"textContent":"innerText",textarea:"value"},attrMap:can$g.attr.map,attrReg:/([^\s=]+)[\s]*=[\s]*/,defaultValue:can$g.attr.defaultValue,tagMap:{"":"span",colgroup:"col",table:"tbody",tr:"td",ol:"li",ul:"li",tbody:"tr",thead:"tr",tfoot:"tr",select:"option",optgroup:"option"},reverseTagMap:{col:"colgroup",tr:"tbody",option:"select",td:"tr",th:"tr",li:"ul"},selfClosingTags:{col:!0},getParentNode:function(O,w){return w&&O.parentNode.nodeType===11?w:O.parentNode},setAttr:can$g.attr.set,getAttr:can$g.attr.get,removeAttr:can$g.attr.remove,contentText:function(O){return typeof O=="string"?O:!O&&O!==0?"":""+O},after:function(O,w){var D=O[O.length-1];D.nextSibling?can$g.insertBefore(D.parentNode,w,D.nextSibling,can$g.document):can$g.appendChild(D.parentNode,w,can$g.document)},replace:function(O,w){var D,F=O[0].parentNode;F.nodeName.toUpperCase()==="SELECT"&&F.selectedIndex>=0&&(D=F.value),elements$4.after(O,w),can$g.remove(can$g.$(O)).length<O.length&&!selectsCommentNodes&&can$g.each(O,function(q){q.nodeType===8&&q.parentNode.removeChild(q)}),D!==void 0&&(F.value=D)}};can$g.view.elements=elements$4;var elements_1=elements$4;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$f=util,attr=can$f.view.attr=function(O,w){if(w)typeof O=="string"?attributes[O]=w:regExpAttributes.push({match:O,handler:w});else{var D=attributes[O];if(!D)for(var F=0,q=regExpAttributes.length;F<q;F++){var U=regExpAttributes[F];if(U.match.test(O)){D=U.handler;break}}return D}},attributes={},regExpAttributes=[],automaticCustomElementCharacters=/[-\:]/,tag=can$f.view.tag=function(O,w){if(w)can$f.global.html5&&(can$f.global.html5.elements+=" "+O,can$f.global.html5.shivDocument()),tags[O.toLowerCase()]=w;else{var D=tags[O.toLowerCase()];return!D&&automaticCustomElementCharacters.test(O)&&(D=function(){}),D}},tags={};can$f.view.callbacks={_tags:tags,_attributes:attributes,_regExpAttributes:regExpAttributes,tag,attr,tagHandler:function(O,w,D){var F=D.options.get("tags."+w,{proxyMethods:!1}),q=F||tags[w],U=D.scope,W;if(q?W=can$f.__notObserve(q)(O,D):W=U,W&&D.subtemplate){U!==W&&(U=U.add(W));var Y=D.subtemplate(U,D.options),Q=typeof Y=="string"?can$f.view.frag(Y):Y;can$f.appendChild(O,Q)}}};var callbacks=can$f.view.callbacks;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$e=view,elements$3=elements_1,viewCallbacks$1=callbacks,newLine$1=/(\r|\n)+/g,notEndTag=/\//,clean=function(O){return O.split("\\").join("\\\\").split(`
 `).join("\\n").split('"').join('\\"').split("	").join("\\t")},getTag=function(O,w,D){if(O)return O;for(;D<w.length;){if(w[D]==="<"&&!notEndTag.test(w[D+1]))return elements$3.reverseTagMap[w[D+1]]||"span";D++}return""},bracketNum=function(O){return--O.split("{").length- --O.split("}").length},myEval=function(script){eval(script)},attrReg=/([^\s]+)[\s]*=[\s]*$/,startTxt="var ___v1ew = [];",finishTxt="return ___v1ew.join('')",put_cmd=`___v1ew.push(
 `,insert_cmd=put_cmd,htmlTag=null,quote=null,beforeQuote=null,rescan=null,getAttrName=function(){var O=beforeQuote.match(attrReg);return O&&O[1]},status=function(){return quote?"'"+getAttrName()+"'":htmlTag?1:0},top=function(O){return O[O.length-1]},Scanner;can$e.view.Scanner=Scanner=function(O){can$e.extend(this,{text:{},tokens:[]},O),this.text.options=this.text.options||"",this.tokenReg=[],this.tokenSimple={"<":"<",">":">",'"':'"',"'":"'"},this.tokenComplex=[],this.tokenMap={};for(var w=0,D;D=this.tokens[w];w++)D[2]?(this.tokenReg.push(D[2]),this.tokenComplex.push({abbr:D[1],re:new RegExp(D[2]),rescan:D[3]})):(this.tokenReg.push(D[1]),this.tokenSimple[D[1]]=D[0]),this.tokenMap[D[0]]=D[1];this.tokenReg=new RegExp("("+this.tokenReg.slice(0).concat(["<",">",'"',"'"]).join("|")+")","g")},Scanner.prototype={helpers:[],scan:function(O,w){var D=[],F=0,q=this.tokenSimple,U=this.tokenComplex;O=O.replace(newLine$1,`
 `),this.transform&&(O=this.transform(O)),O.replace(this.tokenReg,function(ht,st){var ft=arguments[arguments.length-2];if(ft>F&&D.push(O.substring(F,ft)),q[ht])D.push(ht);else for(var bt=0,Me;Me=U[bt];bt++)if(Me.re.test(ht)){D.push(Me.abbr),Me.rescan&&D.push(Me.rescan(st));break}F=ft+st.length}),F<O.length&&D.push(O.substr(F));var W="",Y=[startTxt+(this.text.start||"")],Q=function(ht,st){Y.push(put_cmd,'"',clean(ht),'"'+(st||"")+");")},ne=[],oe,ce=null,fe=!1,we={attributeHookups:[],tagHookups:[],lastTagHookup:""},Z=function(){we.lastTagHookup=we.tagHookups.pop()+we.tagHookups.length},ve="",de=[],Ae=!1,Se,Te=!1,ke=0,$e,be=this.tokenMap,Pe;for(htmlTag=quote=beforeQuote=null;($e=D[ke++])!==void 0;){if(ce===null)switch($e){case be.left:case be.escapeLeft:case be.returnLeft:fe=htmlTag&&1;case be.commentLeft:ce=$e,W.length&&Q(W),W="";break;case be.escapeFull:fe=htmlTag&&1,rescan=1,ce=be.escapeLeft,W.length&&Q(W),rescan=D[ke++],W=rescan.content||rescan,rescan.before&&Q(rescan.before),D.splice(ke,0,be.right);break;case be.commentFull:break;case be.templateLeft:W+=be.left;break;case"<":D[ke].indexOf("!--")!==0&&(htmlTag=1,fe=0),W+=$e;break;case">":htmlTag=0;var Ie=W.substr(W.length-1)==="/"||W.substr(W.length-2)==="--",je="";if(we.attributeHookups.length&&(je="attrs: ['"+we.attributeHookups.join("','")+"'], ",we.attributeHookups=[]),ve+we.tagHookups.length!==we.lastTagHookup&&ve===top(we.tagHookups))Ie&&(W=W.substr(0,W.length-1)),Y.push(put_cmd,'"',clean(W),'"',",can.view.pending({tagName:'"+ve+"',"+je+"scope: "+(this.text.scope||"this")+this.text.options),Ie?(Y.push("}));"),W="/>",Z()):D[ke]==="<"&&D[ke+1]==="/"+ve?(Y.push("}));"),W=$e,Z()):(Y.push(",subtemplate: function("+this.text.argNames+`){
 `+startTxt+(this.text.start||"")),W="");else if(fe||!Ae&&elements$3.tagToContentPropMap[de[de.length-1]]||je){var De=",can.view.pending({"+je+"scope: "+(this.text.scope||"this")+this.text.options+'}),"';Ie?Q(W.substr(0,W.length-1),De+'/>"'):Q(W,De+'>"'),W="",fe=0}else W+=$e;(Ie||Ae)&&(de.pop(),ve=de[de.length-1],Ae=!1),we.attributeHookups=[];break;case"'":case'"':if(htmlTag){if(quote&&quote===$e){quote=null;var We=getAttrName();if(viewCallbacks$1.attr(We)&&we.attributeHookups.push(We),Te){W+=$e,Q(W),Y.push(finishTxt,`}));
 `),W="",Te=!1;break}}else if(quote===null&&(quote=$e,beforeQuote=oe,Pe=getAttrName(),ve==="img"&&Pe==="src"||Pe==="style")){Q(W.replace(attrReg,"")),W="",Te=!0,Y.push(insert_cmd,"can.view.txt(2,'"+getTag(ve,D,ke)+"',"+status()+",this,function(){",startTxt),Q(Pe+"="+$e);break}}default:if(oe==="<"){ve=$e.substr(0,3)==="!--"?"!--":$e.split(/\s/)[0];var et=!1,Xe;ve.indexOf("/")===0&&(et=!0,Xe=ve.substr(1)),et?(top(de)===Xe&&(ve=Xe,Ae=!0),top(we.tagHookups)===Xe&&(Q(W.substr(0,W.length-1)),Y.push(finishTxt+"}}) );"),W="><",Z())):(ve.lastIndexOf("/")===ve.length-1&&(ve=ve.substr(0,ve.length-1)),ve!=="!--"&&viewCallbacks$1.tag(ve)&&(ve==="content"&&elements$3.tagMap[top(de)]&&($e=$e.replace("content",elements$3.tagMap[top(de)])),we.tagHookups.push(ve)),de.push(ve))}W+=$e;break}else switch($e){case be.right:case be.returnRight:switch(ce){case be.left:Se=bracketNum(W),Se===1?(Y.push(insert_cmd,"can.view.txt(0,'"+getTag(ve,D,ke)+"',"+status()+",this,function(){",startTxt,W),ne.push({before:"",after:finishTxt+`}));
 `})):(F=ne.length&&Se===-1?ne.pop():{after:";"},F.before&&Y.push(F.before),Y.push(W,";",F.after));break;case be.escapeLeft:case be.returnLeft:Se=bracketNum(W),Se&&ne.push({before:finishTxt,after:`}));
 `});for(var Ke=ce===be.escapeLeft?1:0,ot={insert:insert_cmd,tagName:getTag(ve,D,ke),status:status(),specialAttribute:Te},Je=0;Je<this.helpers.length;Je++){var Ze=this.helpers[Je];if(Ze.name.test(W)){W=Ze.fn(W,ot),Ze.name.source===/^>[\s]*\w*/.source&&(Ke=0);break}}typeof W=="object"?W.startTxt&&W.end&&Te?Y.push(insert_cmd,"can.view.toStr( ",W.content,"() ) );"):(W.startTxt?Y.push(insert_cmd,`can.view.txt(
 `+(typeof status()=="string"||(W.escaped!=null?W.escaped:Ke))+`,
 '`+ve+`',
 `+status()+`,
 this,
 `):W.startOnlyTxt&&Y.push(insert_cmd,`can.view.onlytxt(this,
 `),Y.push(W.content),W.end&&Y.push("));")):Te?Y.push(insert_cmd,W,");"):Y.push(insert_cmd,`can.view.txt(
 `+(typeof status()=="string"||Ke)+`,
 '`+ve+`',
 `+status()+`,
 this,
 function(){ `+(this.text.escape||"")+"return ",W,Se?startTxt:`}));
 `),rescan&&rescan.after&&rescan.after.length&&(Q(rescan.after.length),rescan=null);break}ce=null,W="";break;case be.templateLeft:W+=be.left;break;default:W+=$e;break}oe=$e}W.length&&Q(W),Y.push(";");var vt=Y.join(""),lt={out:(this.text.outStart||"")+vt+" "+finishTxt+(this.text.outEnd||"")};return myEval.call(lt,"this.fn = (function("+this.text.argNames+"){"+lt.out+`});\r
 //# sourceURL=`+w+".js"),lt}},can$e.view.pending=function(O){var w=can$e.view.getHooks();return can$e.view.hook(function(D){can$e.each(w,function(F){F(D)}),O.templateType="legacy",O.tagName&&viewCallbacks$1.tagHandler(D,O.tagName,O),can$e.each(O&&O.attrs||[],function(F){O.attributeName=F;var q=viewCallbacks$1.attr(F);q&&q(D,O)})})},can$e.view.tag("content",function(O,w){return w.scope}),can$e.view.Scanner=Scanner;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$d=util,canExpando=!0;try{document.createTextNode("")._=0}catch(O){canExpando=!1}var nodeMap={},textNodeMap={},expando="ejs_"+Math.random(),_id=0,id=function(O,w){var D=w||textNodeMap,F=readId(O,D);return F||(canExpando||O.nodeType!==3?(++_id,O[expando]=(O.nodeName?"element_":"obj_")+_id):(++_id,D["text_"+_id]=O,"text_"+_id))},readId=function(O,w){if(canExpando||O.nodeType!==3)return O[expando];for(var D in w)if(w[D]===O)return D},splice$1=[].splice,push=[].push,itemsInChildListTree=function(O){for(var w=0,D=0,F=O.length;D<F;D++){var q=O[D];q.nodeType?w++:w+=itemsInChildListTree(q)}return w},replacementMap=function(O,w){for(var D={},F=0,q=O.length;F<q;F++){var U=nodeLists$1.first(O[F]);D[id(U,w)]=O[F]}return D},addUnfoundAsDeepChildren=function(O,w,D){for(var F in w)D[F]||O.newDeepChildren.push(w[F])},nodeLists$1={id,update:function(O,w){var D=nodeLists$1.unregisterChildren(O);w=can$d.makeArray(w);var F=O.length;return splice$1.apply(O,[0,F].concat(w)),O.replacements?(nodeLists$1.nestReplacements(O),O.deepChildren=O.newDeepChildren,O.newDeepChildren=[]):nodeLists$1.nestList(O),D},nestReplacements:function(O){for(var w=0,D={},F=replacementMap(O.replacements,D),q=O.replacements.length,U={};w<O.length&&q;){var W=O[w],Y=readId(W,D),Q=F[Y];Q&&(O.splice(w,itemsInChildListTree(Q),Q),U[Y]=!0,q--),w++}q&&addUnfoundAsDeepChildren(O,F,U),O.replacements=[]},nestList:function(O){for(var w=0;w<O.length;){var D=O[w],F=nodeMap[id(D)];F?F!==O&&O.splice(w,itemsInChildListTree(F),F):nodeMap[id(D)]=O,w++}},last:function(O){var w=O[O.length-1];return w.nodeType?w:nodeLists$1.last(w)},first:function(O){var w=O[0];return w.nodeType?w:nodeLists$1.first(w)},flatten:function(O){for(var w=[],D=0;D<O.length;D++){var F=O[D];F.nodeType?w.push(F):w.push.apply(w,nodeLists$1.flatten(F))}return w},register:function(O,w,D,F){return can$d.cid(O),O.unregistered=w,O.parentList=D,O.nesting=D&&typeof D.nesting<"u"?D.nesting+1:0,D?(O.deepChildren=[],O.newDeepChildren=[],O.replacements=[],D!==!0&&(F?D.replacements.push(O):D.newDeepChildren.push(O))):nodeLists$1.nestList(O),O},unregisterChildren:function(O){var w=[];return can$d.each(O,function(D){D.nodeType?(O.replacements||delete nodeMap[id(D)],w.push(D)):push.apply(w,nodeLists$1.unregister(D,!0))}),can$d.each(O.deepChildren,function(D){nodeLists$1.unregister(D,!0)}),w},unregister:function(O,w){var D=nodeLists$1.unregisterChildren(O,!0);if(O.unregistered){var F=O.unregistered;if(O.replacements=O.unregistered=null,!w){var q=O.parentList&&O.parentList.deepChildren;if(q){var U=q.indexOf(O);U!==-1&&q.splice(U,1)}}F()}return D},nodeMap};can$d.view.nodeLists=nodeLists$1;var node_lists=nodeLists$1;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */function each(O,w){for(var D=0;D<O.length;D++)w(O[D],D)}function makeMap(O){var w={},D=O.split(",");return each(D,function(F){w[F]=!0}),w}function handleIntermediate(O,w){for(var D=0,F=O.length;D<F;D++){var q=O[D];w[q.tokenType].apply(w,q.args)}return O}var alphaNumeric="A-Za-z0-9",alphaNumericHU="-:_"+alphaNumeric,attributeNames="[^=>\\s\\/]+",spaceEQspace="\\s*=\\s*",singleCurly="\\{[^\\}\\{]\\}",doubleCurly="\\{\\{[^\\}]\\}\\}\\}?",attributeEqAndValue="(?:"+spaceEQspace+"(?:(?:"+doubleCurly+")|(?:"+singleCurly+`)|(?:"[^"]*")|(?:'[^']*')|[^>\\s]+))?`,matchStash="\\{\\{[^\\}]*\\}\\}\\}?",stash="\\{\\{([^\\}]*)\\}\\}\\}?",startTag=new RegExp("^<(["+alphaNumeric+"]["+alphaNumericHU+"]*)((?:\\s*(?:(?:(?:"+attributeNames+")?"+attributeEqAndValue+")|(?:"+matchStash+")+))*)\\s*(\\/?)>"),endTag=new RegExp("^<\\/(["+alphaNumericHU+"]+)[^>]*>"),mustache=new RegExp(stash,"g"),txtBreak=/<|\{\{/,space=/\s/,empty=makeMap("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed"),block=makeMap("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),inline=makeMap("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),caseMatters=makeMap("altGlyph,altGlyphDef,altGlyphItem,animateColor,animateMotion,animateTransform,clipPath,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,foreignObject,glyphRef,linearGradient,radialGradient,textPath"),closeSelf=makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),special$1=makeMap("script"),tokenTypes="start,end,close,attrStart,attrEnd,attrValue,chars,comment,special,done".split(","),fn=function(){},HTMLParser=function(O,w,D){if(typeof O=="object")return handleIntermediate(O,w);var F=[];w=w||{},D&&each(tokenTypes,function(ve){var de=w[ve]||fn;w[ve]=function(){de.apply(this,arguments)!==!1&&F.push({tokenType:ve,args:[].slice.call(arguments,0)})}});function q(ve,de,Ae,Se){if(de=caseMatters[de]?de:de.toLowerCase(),block[de]&&!inline[de])for(var Te=ce.last();Te&&inline[Te]&&!block[Te];)U("",Te),Te=ce.last();closeSelf[de]&&ce.last()===de&&U("",de),Se=empty[de]||!!Se,w.start(de,Se),Se||ce.push(de),HTMLParser.parseAttrs(Ae,w),w.end(de,Se)}function U(ve,de){var Ae;if(!de)Ae=0;else for(de=caseMatters[de]?de:de.toLowerCase(),Ae=ce.length-1;Ae>=0&&ce[Ae]!==de;Ae--);if(Ae>=0){for(var Se=ce.length-1;Se>=Ae;Se--)w.close&&w.close(ce[Se]);ce.length=Ae}}function W(ve,de){w.special&&w.special(de)}var Y=function(){we&&w.chars&&w.chars(we),we=""},Q,ne,oe,ce=[],fe=O,we="";for(ce.last=function(){return this[this.length-1]};O;){if(ne=!0,!ce.last()||!special$1[ce.last()]){if(O.indexOf("<!--")===0?(Q=O.indexOf("-->"),Q>=0&&(Y(),w.comment&&w.comment(O.substring(4,Q)),O=O.substring(Q+3),ne=!1)):O.indexOf("</")===0?(oe=O.match(endTag),oe&&(Y(),O=O.substring(oe[0].length),oe[0].replace(endTag,U),ne=!1)):O.indexOf("<")===0?(oe=O.match(startTag),oe&&(Y(),O=O.substring(oe[0].length),oe[0].replace(startTag,q),ne=!1)):O.indexOf("{{")===0&&(oe=O.match(mustache),oe&&(Y(),O=O.substring(oe[0].length),oe[0].replace(mustache,W))),ne){Q=O.search(txtBreak),Q===0&&O===fe&&(we+=O.charAt(0),O=O.substr(1),Q=O.search(txtBreak));var Z=Q<0?O:O.substring(0,Q);O=Q<0?"":O.substring(Q),Z&&(we+=Z)}}else O=O.replace(new RegExp("([\\s\\S]*?)</"+ce.last()+"[^>]*>"),function(ve,de){return de=de.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),w.chars&&w.chars(de),""}),U("",ce.last());if(O===fe)throw new Error("Parse Error: "+O);fe=O}return Y(),U(),w.done(),F},callAttrStart=function(O,w,D,F){O.attrStart=F.substring(typeof O.nameStart=="number"?O.nameStart:w,w),D.attrStart(O.attrStart),O.inName=!1},callAttrEnd=function(O,w,D,F){O.valueStart!==void 0&&O.valueStart<w&&D.attrValue(F.substring(O.valueStart,w)),D.attrEnd(O.attrStart),O.attrStart=void 0,O.valueStart=void 0,O.inValue=!1,O.inName=!1,O.lookingForEq=!1,O.inQuote=!1,O.lookingForName=!0};HTMLParser.parseAttrs=function(O,w){if(O){for(var D=0,F,q={inDoubleCurly:!1,inName:!1,nameStart:void 0,inValue:!1,valueStart:void 0,inQuote:!1,attrStart:void 0,lookingForName:!0,lookingForValue:!1,lookingForEq:!1};D<O.length;){F=D;var U=O.charAt(D),W=O.charAt(D+1),Y=O.charAt(D+2);if(D++,U==="{"&&W==="{")q.inValue&&F>q.valueStart?w.attrValue(O.substring(q.valueStart,F)):q.inName&&q.nameStart<F?(callAttrStart(q,F,w,O),callAttrEnd(q,F,w,O)):q.lookingForValue?q.inValue=!0:q.lookingForEq&&q.attrStart&&callAttrEnd(q,F,w,O),q.inDoubleCurly=!0,q.doubleCurlyStart=F+2,D++;else if(q.inDoubleCurly){if(U==="}"&&W==="}"){var Q=Y==="}"?1:0;w.special(O.substring(q.doubleCurlyStart,F)),q.inDoubleCurly=!1,q.inValue&&(q.valueStart=F+2+Q),D+=1+Q}}else q.inValue?q.inQuote?U===q.inQuote&&callAttrEnd(q,F,w,O):space.test(U)&&callAttrEnd(q,F,w,O):U==="="&&(q.lookingForEq||q.lookingForName||q.inName)?(q.attrStart||callAttrStart(q,F,w,O),q.lookingForValue=!0,q.lookingForEq=!1,q.lookingForName=!1):q.inName?space.test(U)&&(callAttrStart(q,F,w,O),q.lookingForEq=!0):q.lookingForName?space.test(U)||(q.attrStart&&callAttrEnd(q,F,w,O),q.nameStart=F,q.inName=!0):q.lookingForValue&&(space.test(U)||(q.lookingForValue=!1,q.inValue=!0,U==="'"||U==='"'?(q.inQuote=U,q.valueStart=F+1):q.valueStart=F))}q.inName?(callAttrStart(q,F+1,w,O),callAttrEnd(q,F+1,w,O)):(q.lookingForEq||q.inValue)&&callAttrEnd(q,F+1,w,O)}};var parser$1=HTMLParser;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var slice=[].slice,diff$1=function(O,w){for(var D=0,F=0,q=O.length,U=w.length,W=[];D<q&&F<U;){var Y=O[D],Q=w[F];if(Y===Q){D++,F++;continue}if(F+1<U&&w[F+1]===Y){W.push({index:F,deleteCount:0,insert:[w[F]]}),D++,F+=2;continue}else if(D+1<q&&O[D+1]===Q){W.push({index:F,deleteCount:1,insert:[]}),D+=2,F++;continue}else return W.push({index:F,deleteCount:q-D,insert:slice.call(w,F)}),W}return F===U&&D===q||W.push({index:F,deleteCount:q-D,insert:slice.call(w,F)}),W};/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$c=util,elements$2=elements_1,nodeLists=node_lists,parser=parser$1,diff=diff$1;elements$2=elements$2||can$c.view.elements,nodeLists=nodeLists||can$c.view.NodeLists,parser=parser||can$c.view.parser;var setup=function(O,w,D){var F=!1,q=function(){return F||(F=!0,D(U),can$c.unbind.call(O,"removed",q)),!0},U={teardownCheck:function(W){return W?!1:q()}};return can$c.bind.call(O,"removed",q),w(U),U},getChildNodes=function(O){var w=O.childNodes;if("length"in w)return w;for(var D=O.firstChild,F=[];D;)F.push(D),D=D.nextSibling;return F},listen=function(O,w,D){return setup(O,function(){w.computeInstance.bind("change",D)},function(F){w.computeInstance.unbind("change",D),F.nodeList&&nodeLists.unregister(F.nodeList)})},getAttributeParts=function(O){var w={},D;return parser.parseAttrs(O,{attrStart:function(F){w[F]="",D=F},attrValue:function(F){w[D]+=F},attrEnd:function(){}}),w},splice=[].splice,isNode=function(O){return O&&O.nodeType},addTextNodeIfNoChildren=function(O){O.firstChild||O.appendChild(O.ownerDocument.createTextNode(""))},getLiveFragment=function(O){var w=typeof O=="string",D=can$c.frag(O);return w?can$c.view.hookup(D):D},renderAndAddToNodeLists=function(O,w,D,F,q){var U=[];w&&(nodeLists.register(U,null,!0,!0),U.parentList=w,U.expression="#each SUBEXPRESSION");var W=D.apply(F,q.concat([U])),Y=getLiveFragment(W),Q=can$c.makeArray(getChildNodes(Y));return w?(nodeLists.update(U,Q),O.push(U)):O.push(nodeLists.register(Q)),Y},removeFromNodeList=function(O,w,D){var F=O.splice(w+1,D),q=[];return can$c.each(F,function(U){var W=nodeLists.unregister(U);[].push.apply(q,W)}),q},addFalseyIfEmpty=function(O,w,D,F){if(w&&O.length===0){var q=[],U=renderAndAddToNodeLists(q,F,w,O,[O]);elements$2.after([D[0]],U),D.push(q[0])}},childMutationCallbacks={},live$3={registerChildMutationCallback:function(O,w){if(w)childMutationCallbacks[O]=w;else return childMutationCallbacks[O]},callChildMutationCallback:function(O){var w=O&&childMutationCallbacks[O.nodeName.toLowerCase()];w&&w(O)},list:function(O,w,D,F,q,U,W){var Y=U||[O],Q=[],ne=!1,oe=!1,ce=function(ke,$e,be){if(ne){var Pe=ve.ownerDocument.createDocumentFragment(),Ie=[],je=[];can$c.each($e,function(ot,Je){var Ze=can$c.compute(Je+be),vt=renderAndAddToNodeLists(Ie,U,D,F,[ot,Ze]);Pe.appendChild(vt),je.push(Ze)});var De=be+1;if(!Q.length){var We=removeFromNodeList(Y,0,Y.length-1);can$c.remove(can$c.$(We))}if(!Y[De])elements$2.after(De===1?[ve]:[nodeLists.last(Y[De-1])],Pe);else{var et=nodeLists.first(Y[De]);can$c.insertBefore(et.parentNode,Pe,et)}splice.apply(Y,[De,0].concat(Ie)),splice.apply(Q,[be,0].concat(je));for(var Xe=be+je.length,Ke=Q.length;Xe<Ke;Xe++)Q[Xe](Xe);ke.callChildMutationCallback!==!1&&live$3.callChildMutationCallback(ve.parentNode)}},fe=function(ke,$e,be){we({},{length:1},be,!0),ce({},[$e],be)},we=function(ke,$e,be,Pe,Ie){if(ne&&!(!Pe&&Te.teardownCheck(ve.parentNode))){be<0&&(be=Q.length+be);var je=removeFromNodeList(Y,be,$e.length);Q.splice(be,$e.length);for(var De=be,We=Q.length;De<We;De++)Q[De](De);Ie?nodeLists.unregister(Y):(addFalseyIfEmpty(de,W,Y,U),can$c.remove(can$c.$(je)),ke.callChildMutationCallback!==!1&&live$3.callChildMutationCallback(ve.parentNode))}},Z=function(ke,$e,be,Pe){if(ne){be=be+1,Pe=Pe+1;var Ie=Y[be],je=can$c.frag(nodeLists.flatten(Y[Pe])),De;Pe<be?De=nodeLists.last(Ie).nextSibling:De=nodeLists.first(Ie);var We=Y[0].parentNode;We.insertBefore(je,De);var et=Y[Pe];[].splice.apply(Y,[Pe,1]),[].splice.apply(Y,[be,0,et]),be=be-1,Pe=Pe-1;var Xe=Q[Pe];[].splice.apply(Q,[Pe,1]),[].splice.apply(Q,[be,0,Xe]);var Ke=Math.min(Pe,be),ot=Q.length;for(ot;Ke<ot;Ke++)Q[Ke](Ke);ke.callChildMutationCallback!==!1&&live$3.callChildMutationCallback(ve.parentNode)}},ve=O.ownerDocument.createTextNode(""),de,Ae=function(ke){de&&de.unbind&&de.unbind("add",ce).unbind("set",fe).unbind("remove",we).unbind("move",Z),we({callChildMutationCallback:!!ke},{length:Y.length-1},0,!0,ke)},Se=function(ke,$e,be){if(!oe){if(ne=!0,$e&&be){de=$e||[];var Pe=diff(be,$e);be.unbind&&be.unbind("add",ce).unbind("set",fe).unbind("remove",we).unbind("move",Z);for(var Ie=0,je=Pe.length;Ie<je;Ie++){var De=Pe[Ie];De.deleteCount&&we({callChildMutationCallback:!1},{length:De.deleteCount},De.index,!0),De.insert.length&&ce({callChildMutationCallback:!1},De.insert,De.index)}}else be&&Ae(),de=$e||[],ce({callChildMutationCallback:!1},de,0),addFalseyIfEmpty(de,W,Y,U);live$3.callChildMutationCallback(ve.parentNode),ne=!1,de.bind&&de.bind("add",ce).bind("set",fe).bind("remove",we).bind("move",Z),can$c.batch.afterPreviousEvents(function(){ne=!0})}};q=elements$2.getParentNode(O,q);var Te=setup(q,function(){can$c.isFunction(w)&&w.bind("change",Se)},function(){can$c.isFunction(w)&&w.unbind("change",Se),Ae(!0)});U?(elements$2.replace(Y,ve),nodeLists.update(Y,[ve]),U.unregistered=function(){Te.teardownCheck(),oe=!0}):live$3.replace(Y,ve,Te.teardownCheck),Se({},can$c.isFunction(w)?w():w)},html:function(O,w,D,F){var q;D=elements$2.getParentNode(O,D),q=listen(D,w,function(Y,Q,ne){var oe=nodeLists.first(U).parentNode;oe&&W(Q);var ce=nodeLists.first(U).parentNode;q.teardownCheck(ce),live$3.callChildMutationCallback(ce)});var U=F||[O],W=function(Y){var Q=typeof Y=="function",ne=isNode(Y),oe=can$c.frag(Q?"":Y),ce=can$c.makeArray(U);addTextNodeIfNoChildren(oe),!ne&&!Q&&(oe=can$c.view.hookup(oe,D)),ce=nodeLists.update(U,getChildNodes(oe)),Q&&Y(oe.firstChild),elements$2.replace(ce,oe)};q.nodeList=U,F?F.unregistered=q.teardownCheck:nodeLists.register(U,q.teardownCheck),W(w())},replace:function(O,w,D){var F=O.slice(0),q=can$c.frag(w);return nodeLists.register(O,D),typeof w=="string"&&(q=can$c.view.hookup(q,O[0].parentNode)),nodeLists.update(O,getChildNodes(q)),elements$2.replace(F,q),O},text:function(O,w,D,F){var q=elements$2.getParentNode(O,D),U=listen(q,w,function(Y,Q,ne){typeof W.nodeValue!="unknown"&&(W.nodeValue=can$c.view.toStr(Q)),U.teardownCheck(W.parentNode)}),W=O.ownerDocument.createTextNode(can$c.view.toStr(w()));F?(F.unregistered=U.teardownCheck,U.nodeList=F,nodeLists.update(F,[W]),elements$2.replace([O],W)):U.nodeList=live$3.replace([O],W,U.teardownCheck)},setAttributes:function(O,w){var D=getAttributeParts(w);for(var F in D)can$c.attr.set(O,F,D[F])},attributes:function(O,w,D){var F={},q=function(U){var W=getAttributeParts(U),Y;for(Y in W){var Q=W[Y],ne=F[Y];Q!==ne&&can$c.attr.set(O,Y,Q),delete F[Y]}for(Y in F)elements$2.removeAttr(O,Y);F=W};listen(O,w,function(U,W){q(W)}),arguments.length>=3?F=getAttributeParts(D):q(w())},attributePlaceholder:"__!!__",attributeReplace:/__!!__/g,attribute:function(O,w,D){listen(O,D,function(ne,oe){elements$2.setAttr(O,w,Q.render())});var F=can$c.$(O),q;q=can$c.data(F,"hooks"),q||can$c.data(F,"hooks",q={});var U=String(elements$2.getAttr(O,w)),W=U.split(live$3.attributePlaceholder),Y=[],Q;Y.push(W.shift(),W.join(live$3.attributePlaceholder)),q[w]?q[w].computes.push(D):q[w]={render:function(){var ne=0,oe=U?U.replace(live$3.attributeReplace,function(){return elements$2.contentText(Q.computes[ne++]())}):elements$2.contentText(Q.computes[ne++]());return oe},computes:[D],batchNum:void 0},Q=q[w],Y.splice(1,0,D()),elements$2.setAttr(O,w,Y.join(""))},specialAttribute:function(O,w,D){listen(O,D,function(F,q){elements$2.setAttr(O,w,getValue$1(q))}),elements$2.setAttr(O,w,getValue$1(D()))},simpleAttribute:function(O,w,D){listen(O,D,function(F,q){elements$2.setAttr(O,w,q)}),elements$2.setAttr(O,w,D())}};live$3.attr=live$3.simpleAttribute,live$3.attrs=live$3.attributes,live$3.getAttributeParts=getAttributeParts;var newLine=/(\r|\n)+/g,getValue$1=function(O){var w=/^["'].*["']$/;return O=O.replace(elements$2.attrReg,"").replace(newLine,""),w.test(O)?O.substr(1,O.length-2):O};can$c.view.live=live$3;var live_1=live$3;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$b=view,elements$1=elements_1,live$2=live_1,pendingHookups=[],tagChildren=function(O){var w=elements$1.tagMap[O]||"span";return w==="span"?"@@!!@@":"<"+w+">"+tagChildren(w)+"</"+w+">"},contentText=function(O,w){if(typeof O=="string")return O;if(!O&&O!==0)return"";var D=O.hookup&&function(F,q){O.hookup.call(O,F,q)}||typeof O=="function"&&O;return D?w?"<"+w+" "+can$b.view.hook(D)+"></"+w+">":(pendingHookups.push(D),""):""+O},contentEscape=function(O,w){return typeof O=="string"||typeof O=="number"?can$b.esc(O):contentText(O,w)},withinTemplatedSectionWithinAnElement=!1,emptyHandler=function(){},lastHookups;can$b.extend(can$b.view,{live:live$2,setupLists:function(){var O=can$b.view.lists,w;return can$b.view.lists=function(D,F){return w={list:D,renderer:F},Math.random()},function(){return can$b.view.lists=O,w}},getHooks:function(){var O=pendingHookups.slice(0);return lastHookups=O,pendingHookups=[],O},onlytxt:function(O,w){return contentEscape(w.call(O))},txt:function(O,w,D,F,q){var U=elements$1.tagMap[w]||"span",W=!1,Y,Q,ne,oe=emptyHandler,ce;if(withinTemplatedSectionWithinAnElement)Y=q.call(F);else{(typeof D=="string"||D===1)&&(withinTemplatedSectionWithinAnElement=!0);var fe=can$b.view.setupLists();oe=function(){ne.unbind("change",emptyHandler)},ne=can$b.compute(q,F,!1),ne.bind("change",emptyHandler),Q=fe(),Y=ne(),withinTemplatedSectionWithinAnElement=!1,W=ne.computeInstance.hasDependencies}if(Q)return oe(),"<"+U+can$b.view.hook(function(ve,de){live$2.list(ve,Q.list,Q.renderer,F,de)})+"></"+U+">";if(!W||typeof Y=="function")return oe(),(withinTemplatedSectionWithinAnElement||O===2||!O?contentText:contentEscape)(Y,D===0&&U);var we=elements$1.tagToContentPropMap[w];if(D===0&&!we){var Z=!!elements$1.selfClosingTags[U];return"<"+U+can$b.view.hook(O&&typeof Y!="object"?function(ve,de){live$2.text(ve,ne,de),oe()}:function(ve,de){live$2.html(ve,ne,de),oe()})+(Z?"/>":">"+tagChildren(U)+"</"+U+">")}else return D===1?(pendingHookups.push(function(ve){live$2.attributes(ve,ne,ne()),oe()}),ne()):O===2?(ce=D,pendingHookups.push(function(ve){live$2.specialAttribute(ve,ce,ne),oe()}),ne()):(ce=D===0?we:D,(D===0?lastHookups:pendingHookups).push(function(ve){live$2.attribute(ve,ce,ne),oe()}),live$2.attributePlaceholder)}});/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$a=util,Options=can$a.view.Options,utils$2={isArrayLike:function(O){return O&&O.splice&&typeof O.length=="number"},isObserveLike:function(O){return O instanceof can$a.Map||O&&!!O._get},emptyHandler:function(){},jsonParse:function(str){return str[0]==="'"?str.substr(1,str.length-2):str==="undefined"?void 0:can$a.global.JSON?JSON.parse(str):eval("("+str+")")},mixins:{last:function(){return this.stack[this.stack.length-1]},add:function(O){this.last().add(O)},subSectionDepth:function(){return this.stack.length-1}},convertToScopes:function(O,w,D,F,q,U,W){q&&(O.fn=this.makeRendererConvertScopes(q,w,D,F,W)),U&&(O.inverse=this.makeRendererConvertScopes(U,w,D,F,W))},makeRendererConvertScopes:function(O,w,D,F,q){var U=function(Y,Q,ne){return O(Y||w,Q,ne)},W=function(Y,Q,ne){Y!==void 0&&!(Y instanceof can$a.view.Scope)&&(Y=w.add(Y)),Q!==void 0&&!(Q instanceof Options)&&(Q=D.add(Q));var oe=U(Y,Q||D,ne||F);return oe};return q?W:can$a.__notObserve(W)},getItemsFragContent:function(O,w,D){for(var F=this.isObserveLike(O),q=[],U=F?O.attr("length"):O.length,W=0;W<U;W++){var Y={"%index":W,"@index":W},Q=F?O.attr(""+W):O[W];q.push(w.fn(D.add(Y,{notContext:!0}).add(Q)))}return q},Options};/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$9=util,utils$1=utils$2,live$1=live_1;live$1=live$1||can$9.view.live;var resolve=function(O){return utils$1.isObserveLike(O)&&utils$1.isArrayLike(O)&&O.attr("length")?O:can$9.isFunction(O)?O():O},resolveHash=function(O){var w={};for(var D in O){var F=O[D];F&&F.isComputed?w[D]=F():w[D]=F}return w},looksLikeOptions=function(O){return O&&typeof O.fn=="function"&&typeof O.inverse=="function"},helpers$1={each:function(O,w){var D=resolve(O),F=[],q,U,W;if(D instanceof can$9.List&&!w.stringOnly)return function(ne){var oe=[ne];oe.expression="live.list",can$9.view.nodeLists.register(oe,null,w.nodeList,!0),can$9.view.nodeLists.update(w.nodeList,[ne]);var ce=function(fe,we,Z){return w.fn(w.scope.add({"%index":we,"@index":we},{notContext:!0}).add(fe),w.options,Z)};live$1.list(ne,O,ce,w.context,ne.parentNode,oe,function(fe,we){return w.inverse(w.scope.add(fe),w.options,we)})};var Y=D;if(Y&&utils$1.isArrayLike(Y)){var Q=utils$1.getItemsFragContent(Y,w,w.scope);Array.prototype.push.apply(F,Q)}else if(utils$1.isObserveLike(Y))for(q=can$9.Map.keys(Y),W=0;W<q.length;W++)U=q[W],F.push(w.fn(w.scope.add({"%key":U,"@key":U},{notContext:!0}).add(Y[U])));else if(Y instanceof Object)for(U in Y)F.push(w.fn(w.scope.add({"%key":U,"@key":U},{notContext:!0}).add(Y[U])));return w.stringOnly?F.join(""):F},"@index":function(O,w){w||(w=O,O=0);var D=w.scope.attr("@index");return""+((can$9.isFunction(D)?D():D)+O)},if:function(O,w){var D;return can$9.isFunction(O)?D=can$9.compute.truthy(O)():D=!!resolve(O),D?w.fn(w.scope||this):w.inverse(w.scope||this)},is:function(){var O,w,D=arguments[arguments.length-1];if(arguments.length-2<=0)return D.inverse();var F=arguments,q=can$9.compute(function(){for(var U=0;U<F.length-1;U++){if(w=resolve(F[U]),w=can$9.isFunction(w)?w():w,U>0&&w!==O)return!1;O=w}return!0});return q()?D.fn():D.inverse()},eq:function(){return helpers$1.is.apply(this,arguments)},unless:function(O,w){return helpers$1.if.apply(this,[O,can$9.extend({},w,{fn:w.inverse,inverse:w.fn})])},with:function(O,w){var D=O;if(O=resolve(O),O)return w.fn(D)},log:function(O,w){typeof console<"u"&&console.log&&(w?console.log(O,w.context):console.log(O.context))},data:function(O){var w=arguments.length===2?this:arguments[1];return function(D){can$9.data(can$9.$(D),O,w||this.context)}},switch:function(O,w){resolve(O);var D=!1,F=w.helpers.add({case:function(q,U){if(!D&&resolve(O)===resolve(q))return D=!0,U.fn(U.scope||this)},default:function(q){if(!D)return q.fn(q.scope||this)}});return w.fn(w.scope,F)},joinBase:function(O){var w=[].slice.call(arguments),D=w.pop(),F=can$9.map(w,function(Q){var ne=resolve(Q);return can$9.isFunction(ne)?ne():ne}).join(""),q=D.helpers.attr("helpers.module"),U=q?q.uri:void 0,W=F[0]===".";if(W&&U)return can$9.joinURIs(U,F);var Y=can$9.baseURL||typeof System<"u"&&(System.renderingLoader&&System.renderingLoader.baseURL||System.baseURL)||location.pathname;return F[0]!=="/"&&Y[Y.length-1]!=="/"&&(Y+="/"),can$9.joinURIs(Y,F)},routeUrl:function(O,w){return O||(O={}),typeof O.fn=="function"&&typeof O.inverse=="function"&&(O=resolveHash(O.hash)),can$9.route.url(O,typeof w=="boolean"?w:void 0)},routeCurrent:function(O){var w=can$9.last(arguments),D=w&&looksLikeOptions(w);return w&&D&&!(w.exprData instanceof can$9.expression.Call)?can$9.route.current(resolveHash(O.hash||{}))?O.fn():O.inverse():can$9.route.current(looksLikeOptions(O)?{}:O||{})}};helpers$1.routeCurrent.callAsMethod=!0,helpers$1.eachOf=helpers$1.each;var registerHelper=function(O,w){helpers$1[O]=w},mustache_helpers={registerHelper,registerSimpleHelper:function(O,w){registerHelper(O,can$9.view.simpleHelper(w))},getHelper:function(O,w){var D=w&&w.get("helpers."+O,{proxyMethods:!1});if(D||(D=helpers$1[O]),D)return{fn:D}}};/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$8=util,utils=utils$2,mustacheHelpers=mustache_helpers,getKeyComputeData=function(O,w,D){var F=w.computeData(O,D);return can$8.compute.temporarilyBind(F.compute),F},lookupValue=function(O,w,D,F){var q=getKeyComputeData(O,w,F);return q.compute.computeInstance.hasDependencies?{value:q.compute,computeData:q}:{value:q.initialValue,computeData:q}},lookupValueOrHelper=function(O,w,D,F){var q=lookupValue(O,w,D,F);if(q.computeData.initialValue===void 0){O.charAt(0)==="@"&&O!=="@index"&&(O=O.substr(1));var U=mustacheHelpers.getHelper(O,D);q.helper=U&&U.fn}return q},convertToArgExpression=function(O){return!(O instanceof Arg)&&!(O instanceof Literal)&&!(O instanceof Hashes)?new Arg(O):O},Literal=function(O){this._value=O};Literal.prototype.value=function(){return this._value};var Lookup=function(O,w){this.key=O,this.rootExpr=w};Lookup.prototype.value=function(O,w){var D=lookupValueOrHelper(this.key,O,w);return this.isHelper=D.helper&&!D.helper.callAsMethod,D.helper||D.value};var ScopeLookup=function(O,w){Lookup.apply(this,arguments)};ScopeLookup.prototype.value=function(O,w){return lookupValue(this.key,O).value};var Arg=function(O,w){this.expr=O,this.modifiers=w||{},this.isCompute=!1};Arg.prototype.value=function(){return this.expr.value.apply(this.expr,arguments)};var Hashes=function(O){this.hashExprs=O};Hashes.prototype.value=function(){var O={};for(var w in this.hashExprs){var D=this.hashExprs[w],F=D.value.apply(D,arguments);O[w]={call:F&&F.isComputed&&(!D.modifiers||!D.modifiers.compute),value:F}}return can$8.compute(function(){var q={};for(var U in O)q[U]=O[U].call?O[U].value():O[U].value;return q})};var Call=function(O,w,D){D&&!can$8.isEmptyObject(D)&&w.push(new Hashes(D)),this.methodExpr=O,this.argExprs=can$8.map(w,convertToArgExpression)};Call.prototype.args=function(O,w){for(var D=[],F=0,q=this.argExprs.length;F<q;F++){var U=this.argExprs[F],W=U.value.apply(U,arguments);D.push({call:W&&W.isComputed&&(!U.modifiers||!U.modifiers.compute),value:W})}return function(){for(var Y=[],Q=0,ne=D.length;Q<ne;Q++)Y[Q]=D[Q].call?D[Q].value():D[Q].value;return Y}},Call.prototype.value=function(O,w,D){var F=this.methodExpr.value(O,w);this.isHelper=this.methodExpr.isHelper;var q=this.args(O,w);return can$8.compute(function(U){var W=F;if(W&&W.isComputed&&(W=W()),typeof W=="function"){var Y=q();return D&&Y.push(D),arguments.length&&Y.unshift(new expression$2.SetIdentifier(U)),W.apply(null,Y)}})};var HelperLookup=function(){Lookup.apply(this,arguments)};HelperLookup.prototype.value=function(O,w){var D=lookupValueOrHelper(this.key,O,w,{isArgument:!0,args:[O.attr("."),O]});return D.helper||D.value};var HelperScopeLookup=function(){Lookup.apply(this,arguments)};HelperScopeLookup.prototype.value=function(O,w){return lookupValue(this.key,O,w,{callMethodsOnObservables:!0,isArgument:!0,args:[O.attr("."),O]}).value};var Helper=function(O,w,D){this.methodExpr=O,this.argExprs=w,this.hashExprs=D,this.mode=null};Helper.prototype.args=function(O,w){for(var D=[],F=0,q=this.argExprs.length;F<q;F++){var U=this.argExprs[F];D.push(U.value.apply(U,arguments))}return D},Helper.prototype.hash=function(O,w){var D={};for(var F in this.hashExprs){var q=this.hashExprs[F];D[F]=q.value.apply(q,arguments)}return D},Helper.prototype.helperAndValue=function(O,w){var D=this.argExprs.length||!can$8.isEmptyObject(this.hashExprs),F,q,U=this.methodExpr instanceof Literal?""+this.methodExpr._value:this.methodExpr.key,W,Y;if(D){F=mustacheHelpers.getHelper(U,w);var Q=O.attr(".");!F&&typeof Q[U]=="function"&&(F={fn:Q[U]})}if(!F){Y=this.args(O,w);var ne=getKeyComputeData(U,O,{isArgument:!1,args:Y&&Y.length?Y:[O.attr("."),O]}),oe=ne.compute;W=ne.initialValue,ne.compute.computeInstance.hasDependencies?q=oe:q=W,!D&&W===void 0&&(F=mustacheHelpers.getHelper(U,w))}return{value:q,args:Y,helper:F&&F.fn}},Helper.prototype.evaluator=function(O,w,D,F,q,U,W,Y){var Q={fn:function(){},inverse:function(){},stringOnly:Y},ne=w.attr("."),oe=this.args(w,D,q,U,W,Y),ce=this.hash(w,D,q,U,W,Y);return utils.convertToScopes(Q,w,D,q,U,W,Y),can$8.simpleExtend(Q,{context:ne,scope:w,contexts:w,hash:ce,nodeList:q,exprData:this,helperOptions:D,helpers:D}),oe.push(Q),function(){return O.apply(ne,oe)}},Helper.prototype.value=function(O,w,D,F,q,U){var W=this.helperAndValue(O,w),Y=W.helper;if(!Y)return W.value;var Q=this.evaluator(Y,O,w,D,F,q,U),ne=can$8.compute(Q);return can$8.compute.temporarilyBind(ne),ne.computeInstance.hasDependencies?ne:ne()};var keyRegExp=/[\w\.\\\-_@\/\&%]+/,tokensRegExp=/('.*?'|".*?"|=|[\w\.\\\-_@\/*%\$:]+|[\(\)]|,|\~)/g,literalRegExp=/^('.*?'|".*?"|[0-9]+\.?[0-9]*|true|false|null|undefined)$/,isTokenKey=function(O){return keyRegExp.test(O)},testDot=/^[\.@]\w/,isAddingToExpression=function(O){return isTokenKey(O)&&testDot.test(O)},ensureChildren=function(O){return O.children||(O.children=[]),O},Stack=function(){this.root={children:[],type:"Root"},this.current=this.root,this.stack=[this.root]};can$8.simpleExtend(Stack.prototype,{top:function(){return can$8.last(this.stack)},isRootTop:function(){return this.top()===this.root},popTo:function(O){this.popUntil(O),this.isRootTop()||this.stack.pop()},firstParent:function(O){for(var w=this.stack.length-2;w>0&&can$8.inArray(this.stack[w].type,O)===-1;)w--;return this.stack[w]},popUntil:function(O){for(;can$8.inArray(this.top().type,O)===-1&&!this.isRootTop();)this.stack.pop();return this.top()},addTo:function(O,w){var D=this.popUntil(O);ensureChildren(D).children.push(w)},addToAndPush:function(O,w){this.addTo(O,w),this.stack.push(w)},topLastChild:function(){return can$8.last(this.top().children)},replaceTopLastChild:function(O){var w=ensureChildren(this.top()).children;return w.pop(),w.push(O),O},replaceTopLastChildAndPush:function(O){this.replaceTopLastChild(O),this.stack.push(O)},replaceTopAndPush:function(O){var w;return this.top()===this.root?w=ensureChildren(this.top()).children:(this.stack.pop(),w=ensureChildren(this.top()).children),w.pop(),w.push(O),this.stack.push(O),O}});var convertKeyToLookup=function(O){var w=O.lastIndexOf("./"),D=O.lastIndexOf(".");if(D>w)return O.substr(0,D)+"@"+O.substr(D+1);var F=w===-1?0:w+2,q=O.charAt(F);return q==="."||q==="@"?O.substr(0,F)+"@"+O.substr(F+1):O.substr(0,F)+"@"+O.substr(F)},convertToAtLookup=function(O){return O.type==="Lookup"&&(O.key=convertKeyToLookup(O.key)),O},convertToHelperIfTopIsLookup=function(O){var w=O.top();if(w&&w.type==="Lookup"){var D=O.stack[O.stack.length-2];D.type!=="Helper"&&D&&O.replaceTopAndPush({type:"Helper",method:w})}},expression$2={convertKeyToLookup,Literal,Lookup,ScopeLookup,Arg,Hashes,Call,Helper,HelperLookup,HelperScopeLookup,SetIdentifier:function(O){this.value=O},tokenize:function(O){var w=[];return(can$8.trim(O)+" ").replace(tokensRegExp,function(D,F){w.push(F)}),w},lookupRules:{default:function(O,w,D){var F=(w==="Helper"&&!O.root?"Helper":"")+(D?"Scope":"")+"Lookup";return expression$2[F]},method:function(O,w,D){return ScopeLookup}},methodRules:{default:function(O){return O.type==="Call"?Call:Helper},call:function(O){return Call}},parse:function(O,w){w=w||{};var D=this.ast(O);w.lookupRule||(w.lookupRule="default"),typeof w.lookupRule=="string"&&(w.lookupRule=expression$2.lookupRules[w.lookupRule]),w.methodRule||(w.methodRule="default"),typeof w.methodRule=="string"&&(w.methodRule=expression$2.methodRules[w.methodRule]);var F=this.hydrateAst(D,w,w.baseMethodType||"Helper");return F},hydrateAst:function(O,w,D,F){var q,U=this;if(O.type==="Lookup")return new(w.lookupRule(O,D,F))(O.key,O.root&&this.hydrateAst(O.root,w,D));if(O.type==="Literal")return new Literal(O.value);if(O.type==="Arg")return new Arg(this.hydrateAst(O.children[0],w,D,F),{compute:!0});if(O.type==="Hashes")return q={},can$8.each(O.children,function(Y){q[Y.prop]=U.hydrateAst(Y.children[0],w,O.type,!0)}),new Hashes(q);if(O.type==="Hash")throw new Error("");if(O.type==="Call"||O.type==="Helper"){var W=[];return q={},can$8.each(O.children,function(Y){Y.type==="Hash"?q[Y.prop]=U.hydrateAst(Y.children[0],w,O.type,!0):W.push(U.hydrateAst(Y,w,O.type,!0))}),new(w.methodRule(O))(this.hydrateAst(O.method,w,O.type),W,q)}},ast:function(O){var w=this.tokenize(O);return this.parseAst(w,{index:0})},parseAst:function(O,w){for(var D=new Stack,F;w.index<O.length;){var q=O[w.index],U=O[w.index+1];if(w.index++,literalRegExp.test(q))convertToHelperIfTopIsLookup(D),D.addTo(["Helper","Call","Hash"],{type:"Literal",value:utils.jsonParse(q)});else if(U==="="){if(F=D.top(),F&&F.type==="Lookup"){var W=D.firstParent(["Call","Helper","Hash"]);(W.type==="Call"||W.type==="Root")&&(D.popUntil(["Call"]),F=D.top(),D.replaceTopAndPush({type:"Helper",method:F.type==="Root"?can$8.last(F.children):F}))}F=D.popUntil(["Helper","Call","Hashes"]),F.type==="Call"&&D.addToAndPush(["Call"],{type:"Hashes"}),D.addToAndPush(["Helper","Hashes"],{type:"Hash",prop:q}),w.index++}else if(keyRegExp.test(q)){var Y=D.topLastChild();Y&&Y.type==="Call"&&isAddingToExpression(q)?D.replaceTopLastChildAndPush({type:"Lookup",root:Y,key:q}):(convertToHelperIfTopIsLookup(D),D.addToAndPush(["Helper","Call","Hash","Arg"],{type:"Lookup",key:q}))}else if(q==="~")convertToHelperIfTopIsLookup(D),D.addToAndPush(["Helper","Call","Hash"],{type:"Arg",key:q});else if(q==="(")if(F=D.top(),F.type==="Lookup")D.replaceTopAndPush({type:"Call",method:convertToAtLookup(F)});else throw new Error("Unable to understand expression "+O.join(""));else q===")"?D.popTo(["Call"]):q===","&&D.popUntil(["Call"])}return D.root.children[0]}};can$8.expression=expression$2;var expression_1=expression$2;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$7=util,expression$1=expression_1,removeCurly=function(O){return O[0]==="{"&&O[O.length-1]==="}"?O.substr(1,O.length-2):O};can$7.view.attr("can-href",function(O,w){var D=expression$1.parse("tmp("+removeCurly(O.getAttribute("can-href"))+")",{baseMethodType:"Call"}),F=D.argExprs[0].value(w.scope,null),q=can$7.compute(function(){return can$7.route.url(F())});O.setAttribute("href",q());var U=function(W,Y){O.setAttribute("href",Y)};q.bind("change",U),can$7.bind.call(O,"removed",function(){q.unbind("change",U)})});/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$6=util,expression=expression_1,viewCallbacks=callbacks,live=live_1,behaviors={viewModel:function(O,w,D,F){F=F||{};var q={},U,W=[],Y={},Q={},ne=can$6.extend({},F);can$6.each(can$6.makeArray(O.attributes),function(fe){var we=makeDataBinding(fe,O,{templateType:w.templateType,scope:w.scope,semaphore:q,getViewModel:function(){return U},attributeViewModelBindings:ne,alreadyUpdatedChild:!0,nodeList:w.parentNodeList});we&&(we.onCompleteBinding&&(we.bindingInfo.parentToChild&&we.value!==void 0&&(F[cleanVMName(we.bindingInfo.childName)]=we.value),W.push(we.onCompleteBinding)),Y[fe.name]=we.onTeardown)}),U=D(F);for(var oe=0,ce=W.length;oe<ce;oe++)W[oe]();return can$6.bind.call(O,"attributes",function(fe){var we=fe.attributeName,Z=O.getAttribute(we);Y[we]&&Y[we]();var ve=Q[we]&&Q[we].parent==="attribute";if(Z!==null||ve){var de=makeDataBinding({name:we,value:Z},O,{templateType:w.templateType,scope:w.scope,semaphore:{},getViewModel:function(){return U},attributeViewModelBindings:ne,initializeValues:!0,nodeList:w.parentNodeList});de&&(de.onCompleteBinding&&de.onCompleteBinding(),Q[we]=de.bindingInfo,Y[we]=de.onTeardown)}}),function(){for(var fe in Y)Y[fe]()}},data:function(O,w){if(!can$6.data(can$6.$(O),"preventDataBindings")){var D=can$6.viewModel(O),F={},q,U=makeDataBinding({name:w.attributeName,value:O.getAttribute(w.attributeName),nodeList:w.nodeList},O,{templateType:w.templateType,scope:w.scope,semaphore:F,getViewModel:function(){return D}});U.onCompleteBinding&&U.onCompleteBinding(),q=U.onTeardown,can$6.one.call(O,"removed",function(){q()}),can$6.bind.call(O,"attributes",function(W){var Y=W.attributeName,Q=O.getAttribute(Y);if(Y===w.attributeName&&(q&&q(),Q!==null)){var ne=makeDataBinding({name:Y,value:Q},O,{templateType:w.templateType,scope:w.scope,semaphore:F,getViewModel:function(){return D},initializeValues:!0,nodeList:w.nodeList});ne&&(ne.onCompleteBinding&&ne.onCompleteBinding(),q=ne.onTeardown)}})}},reference:function(O,w){O.getAttribute(w.attributeName)&&console.warn("*reference attributes can only export the view model.");var D=can$6.camelize(w.attributeName.substr(1).toLowerCase()),F=can$6.viewModel(O),q=w.scope.getRefs();q._context.attr("*"+D,F)},event:function(O,w){var D=w.attributeName,F=D.indexOf("can-")===0,q=D.indexOf("can-")===0?D.substr(4):can$6.camelize(removeBrackets(D,"(",")")),U=F;q.charAt(0)==="$"&&(q=q.substr(1),U=!0);var W=function(ne){var oe=O.getAttribute(D);if(oe){var ce=can$6.$(O),fe=can$6.viewModel(ce[0]),we=expression.parse(removeBrackets(oe),{lookupRule:"method",methodRule:"call"});if(!(we instanceof expression.Call)&&!(we instanceof expression.Helper)){var Z=can$6.map([w.scope._context,ce].concat(can$6.makeArray(arguments)),function(Se){return new expression.Literal(Se)});we=new expression.Call(we,Z,{})}var ve=w.scope.add({"@element":ce,"@event":ne,"@viewModel":fe,"@scope":w.scope,"@context":w.scope._context,"%element":this,$element:ce,"%event":ne,"%viewModel":fe,"%scope":w.scope,"%context":w.scope._context},{notContext:!0}),de=ve.read(we.methodExpr.key,{isArgument:!0});if(!de.value)return de=ve.read(we.methodExpr.key,{isArgument:!0}),null;var Ae=we.args(ve,null)();return de.value.apply(de.parent,Ae)}};if(special[q]){var Y=special[q](w,O,W);W=Y.handler,q=Y.event}can$6.bind.call(U?O:can$6.viewModel(O),q,W);var Q=function(ne){ne.attributeName===D&&!this.getAttribute(D)&&(can$6.unbind.call(U?O:can$6.viewModel(O),q,W),can$6.unbind.call(O,"attributes",Q))};can$6.bind.call(O,"attributes",Q)},value:function(O,w){var D="$value",F=can$6.trim(removeBrackets(O.getAttribute("can-value"))),q;if(O.nodeName.toLowerCase()==="input"&&(O.type==="checkbox"||O.type==="radio")){var U=getComputeFrom.scope(O,w.scope,F,{},!0);if(O.type==="checkbox"){var W=can$6.attr.has(O,"can-true-value")?O.getAttribute("can-true-value"):!0,Y=can$6.attr.has(O,"can-false-value")?O.getAttribute("can-false-value"):!1;q=can$6.compute(function(ne){if(arguments.length)U(ne?W:Y);else return U()==W})}else O.type==="radio"&&(q=can$6.compute(function(ne){if(arguments.length)ne&&U(O.value);else return U()==O.value}));D="$checked",F="getterSetter",w.scope=new can$6.view.Scope({getterSetter:q})}else isContentEditable(O)&&(D="$innerHTML");var Q=makeDataBinding({name:"{("+D+"})",value:F},O,{templateType:w.templateType,scope:w.scope,semaphore:{},initializeValues:!0,legacyBindings:!0,syncChildWithParent:!0});can$6.one.call(O,"removed",function(){Q.onTeardown()})}};can$6.view.attr(/^\{[^\}]+\}$/,behaviors.data),can$6.view.attr(/\*[\w\.\-_]+/,behaviors.reference),can$6.view.attr(/^\([\$?\w\.\-]+\)$/,behaviors.event),can$6.view.attr(/can-[\w\.]+/,behaviors.event),can$6.view.attr("can-value",behaviors.value);var getComputeFrom={scope:function(O,w,D,F,q,U){if(D)if(q){var W=expression.parse(D,{baseMethodType:"Call"});return W.value(w,new can$6.view.Options({}))}else return function(Y){w.attr(cleanVMName(D),Y)};else return can$6.compute()},viewModel:function(O,w,D,F,q,U){var W=cleanVMName(D);return q?can$6.compute(function(Y){var Q=F.getViewModel();if(arguments.length)Q.attr(W,Y);else return D==="."?Q:can$6.compute.read(Q,can$6.compute.read.reads(D),{}).value}):function(Y){var Q,ne=F.getViewModel();U?(Q=ne._get(W,{readCompute:!1}),(!Q||!Q.isComputed)&&(Q=can$6.compute(),ne._set(W,Q,{readCompute:!1})),Q(Y)):ne.attr(W,Y)}},attribute:function(O,w,D,F,q,U,W){var Y=O.nodeName.toLowerCase()==="select",Q=D==="value"&&Y&&O.multiple,ne,oe=!1,ce,fe,we;W||(D==="innerHTML"?W=["blur","change"]:W="change"),can$6.isArray(W)||(W=[W]);var Z=function(Ae){if(Y&&!oe&&(clearTimeout(ce),ce=setTimeout(function(){Z(Ae)},1)),Q){Ae&&typeof Ae=="string"?(Ae=Ae.split(";"),ne=!0):Ae?Ae=can$6.makeArray(Ae):Ae=[];var Se={};can$6.each(Ae,function(Te){Se[Te]=!0}),can$6.each(O.childNodes,function(Te){Te.value&&(Te.selected=!!Se[Te.value])})}else!F.legacyBindings&&Y&&"selectedIndex"in O&&D==="value"?can$6.attr.setSelectValue(O,Ae):can$6.attr.setAttrOrProp(O,D,Ae??"");return Ae},ve=function(){if(Q){var Ae=[],Se=O.childNodes;return can$6.each(Se,function(Te){Te.selected&&Te.value&&Ae.push(Te.value)}),ne?Ae.join(";"):Ae}else if(Y&&"selectedIndex"in O&&O.selectedIndex===-1)return;return can$6.attr.get(O,D)};Y&&setTimeout(function(){oe=!0},1),O.tagName&&O.tagName.toLowerCase()==="input"&&O.form&&(fe=[{el:O.form,eventName:"reset",handler:function(){Z(we)}}]);var de;return we=ve(),can$6.compute(we,{on:function(Ae){if(can$6.each(W,function(Te){can$6.bind.call(O,Te,Ae)}),can$6.each(fe,function(Te){can$6.bind.call(Te.el,Te.eventName,Te.handler)}),Y){var Se=function(Te){U&&Z(U()),Ae()};can$6.attr.MutationObserver?(de=new can$6.attr.MutationObserver(Se),de.observe(O,{childList:!0,subtree:!0})):can$6.data(can$6.$(O),"canBindingCallback",{onMutation:Se})}},off:function(Ae){can$6.each(W,function(Se){can$6.unbind.call(O,Se,Ae)}),can$6.each(fe,function(Se){can$6.unbind.call(Se.el,Se.eventName,Se.handler)}),Y&&(can$6.attr.MutationObserver?de.disconnect():can$6.data(can$6.$(O),"canBindingCallback",null))},get:ve,set:Z})}},bind={childToParent:function(O,w,D,F,q,U){var W=typeof w=="function",Y=function(Q,ne){F[q]||(W?(w(ne),U&&w()!==D()&&(F[q]=(F[q]||0)+1,can$6.batch.start(),D(w()),can$6.batch.after(function(){--F[q]}),can$6.batch.stop())):w instanceof can$6.Map&&w.attr(ne,!0))};return D&&D.isComputed&&D.bind("change",Y),Y},parentToChild:function(O,w,D,F,q){var U=function(W,Y){F[q]=(F[q]||0)+1,can$6.batch.start(),D(Y),can$6.batch.after(function(){--F[q]}),can$6.batch.stop()};return w&&w.isComputed&&w.bind("change",U),U}},getBindingInfo=function(O,w,D,F){var q,U=O.name,W=O.value||"",Y=U.match(bindingsRegExp);if(!Y){var Q=ignoreAttributesRegExp.test(U),ne=can$6.camelize(U);if(Q||viewCallbacks.attr(U))return;var oe=W[0]==="{"&&can$6.last(W)==="}",ce=D==="legacy"?w[ne]:!oe,fe=oe?W.substr(1,W.length-2):W;return ce?{bindingAttributeName:U,parent:"attribute",parentName:U,child:"viewModel",childName:ne,parentToChild:!0,childToParent:!0}:{bindingAttributeName:U,parent:"scope",parentName:fe,child:"viewModel",childName:ne,parentToChild:!0,childToParent:!0}}var we=!!Y[1],Z=we||!!Y[2],ve=we||!Z,de=Y[3],Ae=de.charAt(0)==="$";return Ae?(q={parent:"scope",child:"attribute",childToParent:Z,parentToChild:ve,bindingAttributeName:U,childName:de.substr(1),parentName:W,initializeValues:!0},F==="select"&&(q.stickyParentToChild=!0),q):(q={parent:"scope",child:"viewModel",childToParent:Z,parentToChild:ve,bindingAttributeName:U,childName:can$6.camelize(de),parentName:W,initializeValues:!0},W.trim().charAt(0)==="~"&&(q.stickyParentToChild=!0),q)},bindingsRegExp=/\{(\()?(\^)?([^\}\)]+)\)?\}/,ignoreAttributesRegExp=/^(data-view-id|class|id|\[[\w\.-]+\]|#[\w\.-])$/i,makeDataBinding=function(O,w,D){var F=getBindingInfo(O,D.attributeViewModelBindings,D.templateType,w.nodeName.toLowerCase());if(F){F.alreadyUpdatedChild=D.alreadyUpdatedChild,D.initializeValues&&(F.initializeValues=!0);var q=getComputeFrom[F.parent](w,D.scope,F.parentName,D,F.parentToChild),U=getComputeFrom[F.child](w,D.scope,F.childName,D,F.childToParent,F.stickyParentToChild&&q),W,Y,Q;D.nodeList&&(q&&q.isComputed&&q.computeInstance.setPrimaryDepth(D.nodeList.nesting+1),U&&U.isComputed&&U.computeInstance.setPrimaryDepth(D.nodeList.nesting+1)),F.parentToChild&&(Y=bind.parentToChild(w,q,U,D.semaphore,F.bindingAttributeName));var ne=function(){F.childToParent?W=bind.childToParent(w,q,U,D.semaphore,F.bindingAttributeName,D.syncChildWithParent):F.stickyParentToChild&&U.bind("change",Q=can$6.k),F.initializeValues&&initializeValues(F,U,q,Y,W)},oe=function(){unbindUpdate(q,Y),unbindUpdate(U,W),unbindUpdate(U,Q)};return F.child==="viewModel"?{value:getValue(q),onCompleteBinding:ne,bindingInfo:F,onTeardown:oe}:(ne(),{bindingInfo:F,onTeardown:oe})}},initializeValues=function(O,w,D,F,q){var U=!1;O.parentToChild&&!O.childToParent?O.stickyParentToChild&&F({},getValue(D)):!O.parentToChild&&O.childToParent?U=!0:getValue(w)===void 0||getValue(D)===void 0&&(U=!0),U?q({},getValue(w)):O.alreadyUpdatedChild||F({},getValue(D))};if(!can$6.attr.MutationObserver){var updateSelectValue=function(O){var w=can$6.data(can$6.$(O),"canBindingCallback");w&&w.onMutation(O)};live.registerChildMutationCallback("select",updateSelectValue),live.registerChildMutationCallback("optgroup",function(O){updateSelectValue(O.parentNode)})}var isContentEditable=function(){var O={"":!0,true:!0,false:!1},w=function(D){if(!(!D||!D.getAttribute)){var F=D.getAttribute("contenteditable");return O[F]}};return function(D){var F=w(D);return typeof F=="boolean"?F:!!w(D.parentNode)}}(),removeBrackets=function(O,w,D){return w=w||"{",D=D||"}",O[0]===w&&O[O.length-1]===D?O.substr(1,O.length-2):O},getValue=function(O){return O&&O.isComputed?O():O},unbindUpdate=function(O,w){O&&O.isComputed&&typeof w=="function"&&O.unbind("change",w)},cleanVMName=function(O){return O.replace(/@/g,"")},special={enter:function(O,w,D){return{event:"keyup",handler:function(F){if(F.keyCode===13)return D.call(this,F)}}}};can$6.bindings={behaviors,getBindingInfo,special};var bindings$1=can$6.bindings;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$5=util;can$5.view.ext=".mustache";var SCOPE="scope",HASH="___h4sh",CONTEXT_OBJ="{scope:"+SCOPE+",options:options}",SPECIAL_CONTEXT_OBJ="{scope:"+SCOPE+",options:options, special: true}",ARG_NAMES=SCOPE+",options",argumentsRegExp=/((([^'"\s]+?=)?('.*?'|".*?"))|.*?)\s/g,literalNumberStringBooleanRegExp=/^(('.*?'|".*?"|[0-9]+\.?[0-9]*|true|false|null|undefined)|((.+?)=(('.*?'|".*?"|[0-9]+\.?[0-9]*|true|false)|(.+))))$/,makeLookupLiteral=function(O){return'{get:"'+O.replace(/"/g,'\\"')+'"}'},isLookup=function(O){return O&&typeof O.get=="string"},isObserveLike=function(O){return O instanceof can$5.Map||O&&!!O._get},isArrayLike=function(O){return O&&O.splice&&typeof O.length=="number"},makeConvertToScopes=function(O,w,D){var F=function(q,U){return O(q||w,U)};return function(q,U){return q!==void 0&&!(q instanceof can$5.view.Scope)&&(q=w.add(q)),U!==void 0&&!(U instanceof can$5.view.Options)&&(U=D.add(U)),F(q,U||D)}},Mustache=function(O,w){if(this.constructor!==Mustache){var D=new Mustache(O);return function(F,q){return D.render(F,q)}}if(typeof O=="function"){this.template={fn:O};return}can$5.extend(this,O),this.template=this.scanner.scan(this.text,this.name)};can$5.Mustache=can$5.global.Mustache=Mustache,Mustache.prototype.render=function(O,w){return O instanceof can$5.view.Scope||(O=new can$5.view.Scope(O||{})),w instanceof can$5.view.Options||(w=new can$5.view.Options(w||{})),w=w||{},this.template.fn.call(O,O,w)},can$5.extend(Mustache.prototype,{scanner:new can$5.view.Scanner({text:{start:"",scope:SCOPE,options:",options: options",argNames:ARG_NAMES},tokens:[["returnLeft","{{{","{{[{&]"],["commentFull","{{!}}","^[\\s\\t]*{{!.+?}}\\n"],["commentLeft","{{!","(\\n[\\s\\t]*{{!|{{!)"],["escapeFull","{{}}","(^[\\s\\t]*{{[#/^][^}]+?}}\\n|\\n[\\s\\t]*{{[#/^][^}]+?}}\\n|\\n[\\s\\t]*{{[#/^][^}]+?}}$)",function(O){return{before:/^\n.+?\n$/.test(O)?`
 `:"",content:O.match(/\{\{(.+?)\}\}/)[1]||""}}],["escapeLeft","{{"],["returnRight","}}}"],["right","}}"]],helpers:[{name:/^>[\s]*\w*/,fn:function(O,w){var D=can$5.trim(O.replace(/^>\s?/,"")).replace(/["|']/g,"");return"can.Mustache.renderPartial('"+D+"',"+ARG_NAMES+")"}},{name:/^\s*data\s/,fn:function(O,w){var D=O.match(/["|'](.*)["|']/)[1];return"can.proxy(function(__){can.data(can.$(__),'"+D+"', this.attr('.')); }, "+SCOPE+")"}},{name:/\s*\(([\$\w]+)\)\s*->([^\n]*)/,fn:function(O){var w=/\s*\(([\$\w]+)\)\s*->([^\n]*)/,D=O.match(w);return"can.proxy(function(__){var "+D[1]+"=can.$(__);with("+SCOPE+".attr('.')){"+D[2]+"}}, this);"}},{name:/^.*$/,fn:function(O,w){var D=!1,F={content:"",startTxt:!1,startOnlyTxt:!1,end:!1};if(O=can$5.trim(O),O.length&&(D=O.match(/^([#^/]|else$)/))){switch(D=D[0],D){case"#":case"^":w.specialAttribute?F.startOnlyTxt=!0:(F.startTxt=!0,F.escaped=0);break;case"/":return F.end=!0,F.content+='return ___v1ew.join("");}}])',F}O=O.substring(1)}if(D!=="else"){var q=[],U=[],W=0,Y;F.content+=`can.Mustache.txt(
 `+(w.specialAttribute?SPECIAL_CONTEXT_OBJ:CONTEXT_OBJ)+`,
 `+(D?'"'+D+'"':"null")+",",(can$5.trim(O)+" ").replace(argumentsRegExp,function(Q,ne){W&&(Y=ne.match(literalNumberStringBooleanRegExp))?Y[2]?q.push(Y[0]):U.push(Y[4]+":"+(Y[6]?Y[6]:makeLookupLiteral(Y[5]))):q.push(makeLookupLiteral(ne)),W++}),F.content+=q.join(","),U.length&&(F.content+=",{"+HASH+":{"+U.join(",")+"}}")}switch(D&&D!=="else"&&(F.content+=`,[
 
 `),D){case"^":case"#":F.content+="{fn:function("+ARG_NAMES+"){var ___v1ew = [];";break;case"else":F.content+=`return ___v1ew.join("");}},
 {inverse:function(`+ARG_NAMES+`){
 var ___v1ew = [];`;break;default:F.content+=")";break}return D||(F.startTxt=!0,F.end=!0),F}}]})});for(var helpers=can$5.view.Scanner.prototype.helpers,i=0;i<helpers.length;i++)Mustache.prototype.scanner.helpers.unshift(helpers[i]);Mustache.txt=function(O,w,D){for(var F=O.scope,q=O.options,U=[],W={fn:function(){},inverse:function(){}},Y,Q=F.attr("."),ne=!0,oe,ce=3;ce<arguments.length;ce++){var fe=arguments[ce];if(w&&can$5.isArray(fe))W=can$5.extend.apply(can$5,[W].concat(fe));else if(fe&&fe[HASH]){Y=fe[HASH];for(var we in Y)isLookup(Y[we])&&(Y[we]=Mustache.get(Y[we].get,O,!1,!0))}else fe&&isLookup(fe)?U.push(Mustache.get(fe.get,O,!1,!0,!0)):U.push(fe)}if(isLookup(D)){var Z=D.get;D=Mustache.get(D.get,O,U.length,!1),ne=Z===D}if(W.fn=makeConvertToScopes(W.fn,F,q),W.inverse=makeConvertToScopes(W.inverse,F,q),w==="^"){var ve=W.fn;W.fn=W.inverse,W.inverse=ve}return(oe=ne&&typeof D=="string"&&Mustache.getHelper(D,q)||can$5.isFunction(D)&&!D.isComputed&&{fn:D})?(can$5.extend(W,{context:Q,scope:F,contexts:F,hash:Y}),U.push(W),function(){var de=oe.fn.apply(Q,U);return de??""}):function(){var de;can$5.isFunction(D)&&D.isComputed?de=D():de=D;var Ae=U.length?U:[de],Se=!0,Te=[],ke,$e,be;if(w)for(ke=0;ke<Ae.length;ke++)be=Ae[ke],$e=typeof be<"u"&&isObserveLike(be),isArrayLike(be)?w==="#"?Se=Se&&!!($e?be.attr("length"):be.length):w==="^"&&(Se=Se&&!($e?be.attr("length"):be.length)):Se=w==="#"?Se&&!!be:w==="^"?Se&&!be:Se;if(Se)if(w==="#")if(isArrayLike(de)){var Pe=isObserveLike(de);for(ke=0;ke<de.length;ke++)Te.push(W.fn(Pe?de.attr(""+ke):de[ke]));return Te.join("")}else return W.fn(de||{})||"";else return w==="^"?W.inverse(de||{})||"":""+(de??"");return""}},Mustache.get=function(O,w,D,F,q){var U=w.scope.attr("."),W=w.options||{};if(D){if(Mustache.getHelper(O,W))return O;if(w.scope&&can$5.isFunction(U[O]))return U[O]}var Y=w.scope.computeData(O,{isArgument:F,args:[U,w.scope]}),Q=Y.compute;can$5.compute.temporarilyBind(Q);var ne=Y.initialValue;return Mustache.getHelper(O,W),!q&&(ne===void 0||Y.scope!==w.scope)&&Mustache.getHelper(O,W)?O:Q.computeInstance.hasDependencies?Q:ne},Mustache.resolve=function(O){return isObserveLike(O)&&isArrayLike(O)&&O.attr("length")?O:can$5.isFunction(O)?O():O},Mustache._helpers={},Mustache.registerHelper=function(O,w){this._helpers[O]={name:O,fn:w}},Mustache.registerSimpleHelper=function(O,w){Mustache.registerHelper(O,can$5.view.simpleHelper(w))},Mustache.getHelper=function(O,w){var D;return w&&(D=w.get("helpers."+O,{proxyMethods:!1})),D?{fn:D}:this._helpers[O]},Mustache.render=function(O,w,D){return can$5.view.cached[O]||can$5.__notObserve(function(){var F=w.attr(O);F&&(O=F)})(),can$5.view.render(O,w,D)},Mustache.safeString=function(O){return{toString:function(){return O}}},Mustache.renderPartial=function(O,w,D){var F=D.get("partials."+O,{proxyMethods:!1});return F?F.render?F.render(w,D):F(w,D):can$5.Mustache.render(O,w,D)},can$5.each({if:function(O,w){var D;return can$5.isFunction(O)?D=can$5.compute.truthy(O)():D=!!Mustache.resolve(O),D?w.fn(w.contexts||this):w.inverse(w.contexts||this)},is:function(){var O,w,D=arguments[arguments.length-1];if(arguments.length-2<=0)return D.inverse();for(var F=0;F<arguments.length-1;F++){if(w=Mustache.resolve(arguments[F]),w=can$5.isFunction(w)?w():w,F>0&&w!==O)return D.inverse();O=w}return D.fn()},eq:function(){return Mustache._helpers.is.fn.apply(this,arguments)},unless:function(O,w){return Mustache._helpers.if.fn.apply(this,[O,can$5.extend({},w,{fn:w.inverse,inverse:w.fn})])},each:function(O,w){var D=Mustache.resolve(O),F=[],q,U,W;if(can$5.view.lists&&(D instanceof can$5.List||O&&O.isComputed&&D===void 0))return can$5.view.lists(O,function(Y,Q){return w.fn(w.scope.add({"@index":Q}).add(Y))});if(O=D,O&&isArrayLike(O)){for(W=0;W<O.length;W++)F.push(w.fn(w.scope.add({"@index":W}).add(O[W])));return F.join("")}else if(isObserveLike(O)){for(q=can$5.Map.keys(O),W=0;W<q.length;W++)U=q[W],F.push(w.fn(w.scope.add({"@key":U}).add(O[U])));return F.join("")}else if(O instanceof Object){for(U in O)F.push(w.fn(w.scope.add({"@key":U}).add(O[U])));return F.join("")}},with:function(O,w){var D=O;if(O=Mustache.resolve(O),O)return w.fn(D)},log:function(O,w){typeof console<"u"&&console.log&&(w?console.log(O,w.context):console.log(O.context))},"@index":function(O,w){w||(w=O,O=0);var D=w.scope.read("@index",{isArgument:!0}).value;return""+((can$5.isFunction(D)?D():D)+O)}},function(O,w){Mustache.registerHelper(w,O)}),can$5.view.register({suffix:"mustache",contentType:"x-mustache-template",script:function(O,w){return"can.Mustache(function("+ARG_NAMES+") { "+new Mustache({text:w,name:O}).template.out+" })"},renderer:function(O,w){return Mustache({text:w,name:O})}}),can$5.mustache.registerHelper=can$5.proxy(can$5.Mustache.registerHelper,can$5.Mustache),can$5.mustache.safeString=can$5.Mustache.safeString;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$4=util;can$4.Observe=can$4.Map,can$4.Observe.startBatch=can$4.batch.start,can$4.Observe.stopBatch=can$4.batch.stop,can$4.Observe.triggerBatch=can$4.batch.trigger;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$3=util,$$1=can$3.$;$$1.fn&&($$1.fn.scope=$$1.fn.viewModel=function(){return can$3.viewModel.apply(can$3,[this].concat(can$3.makeArray(arguments)))});/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$2=util,elements=elements_1,bindings=bindings$1,paramReplacer=/\{([^\}]+)\}/g;can$2.Component=can$2.Construct.extend({setup:function(){if(can$2.Construct.setup.apply(this,arguments),can$2.Component){var O=this,w=this.prototype.scope||this.prototype.viewModel;if(this.Control=ComponentControl.extend(this.prototype.events),!w||typeof w=="object"&&!(w instanceof can$2.Map)?this.Map=can$2.Map.extend(w||{}):w.prototype instanceof can$2.Map&&(this.Map=w),this.attributeScopeMappings={},can$2.each(this.Map?this.Map.defaults:{},function(F,q){F==="@"&&(O.attributeScopeMappings[q]=q)}),this.prototype.template)if(typeof this.prototype.template=="function"){var D=this.prototype.template;this.renderer=function(){return can$2.view.frag(D.apply(null,arguments))}}else this.renderer=can$2.view.mustache(this.prototype.template);can$2.view.tag(this.prototype.tag,function(F,q){new O(F,q)})}}},{setup:function(O,w){var D={},F=this,q=(typeof this.leakScope>"u"?!1:!this.leakScope)&&!!this.template,U,W,Y=[],Q=function(){for(var ve=0,de=Y.length;ve<de;ve++)Y[ve]()},ne=can$2.$(O),oe=!can$2.data(ne,"preventDataBindings");can$2.each(this.constructor.attributeScopeMappings,function(ve,de){D[de]=O.getAttribute(can$2.hyphenate(ve))}),oe&&Y.push(bindings.behaviors.viewModel(O,w,function(ve){ve["%root"]=w.scope.attr("%root");var de=F.scope||F.viewModel;if(F.constructor.Map)U=new F.constructor.Map(ve);else if(de instanceof can$2.Map)U=de;else if(can$2.isFunction(de)){var Ae=de.call(F,ve,w.scope,O);Ae instanceof can$2.Map?U=Ae:Ae.prototype instanceof can$2.Map?U=new Ae(ve):U=new(can$2.Map.extend(Ae))(ve)}var Se=U.serialize;return U.serialize=function(){var Te=Se.apply(this,arguments);return delete Te["%root"],Te},U},D)),this.scope=this.viewModel=U,can$2.data(ne,"scope",this.viewModel),can$2.data(ne,"viewModel",this.viewModel),can$2.data(ne,"preventDataBindings",!0);var ce;q?ce=can$2.view.Scope.refsScope().add(this.viewModel,{viewModel:!0}):ce=(this.constructor.renderer?w.scope.add(new can$2.view.Scope.Refs):w.scope).add(this.viewModel,{viewModel:!0});var fe={helpers:{}},we=function(ve,de){fe.helpers[ve]=function(){return de.apply(U,arguments)}};can$2.each(this.helpers||{},function(ve,de){can$2.isFunction(ve)&&we(de,ve)}),can$2.each(this.simpleHelpers||{},function(ve,de){we(de,can$2.view.simpleHelper(ve))}),this._control=new this.constructor.Control(O,{scope:this.viewModel,viewModel:this.viewModel,destroy:Q});var Z=can$2.view.nodeLists.register([],void 0,w.parentNodeList||!0,!1);Z.expression="<"+this.tag+">",Y.push(function(){can$2.view.nodeLists.unregister(Z)}),this.constructor.renderer?(fe.tags||(fe.tags={}),fe.tags.content=function ve(de,Ae){var Se=w.subtemplate||Ae.subtemplate,Te=Se===w.subtemplate;if(Se){delete fe.tags.content;var ke;if(Te?q?ke=w:ke={scope:Ae.scope.cloneFromRef(),options:Ae.options}:ke=Ae,Ae.parentNodeList){var $e=Se(ke.scope,ke.options,Ae.parentNodeList);elements.replace([de],$e)}else can$2.view.live.replace([de],Se(ke.scope,ke.options));fe.tags.content=ve}},W=this.constructor.renderer(ce,w.options.add(fe),Z)):w.templateType==="legacy"?W=can$2.view.frag(w.subtemplate?w.subtemplate(ce,w.options.add(fe)):""):W=w.subtemplate?w.subtemplate(ce,w.options.add(fe),Z):document.createDocumentFragment(),can$2.appendChild(O,W,can$2.document),can$2.view.nodeLists.update(Z,can$2.childNodes(O))}});var ComponentControl=can$2.Control.extend({_lookup:function(O){return[O.scope,O,window]},_action:function(O,w,D){var F,q;if(paramReplacer.lastIndex=0,F=paramReplacer.test(O),!(!D&&F))if(F){q=can$2.compute(function(){var W,Y=O.replace(paramReplacer,function(oe,ce){var fe;return ce==="scope"||ce==="viewModel"?(W=w.viewModel,""):(ce=ce.replace(/^(scope|^viewModel)\./,""),fe=can$2.compute.read(w.viewModel,can$2.compute.read.reads(ce),{readCompute:!1}).value,fe===void 0&&(fe=can$2.getObject(ce)),typeof fe=="string"?fe:(W=fe,""))}),Q=Y.split(/\s+/g),ne=Q.pop();return{processor:this.processors[ne]||this.processors.click,parts:[Y,Q.join(" "),ne],delegate:W||void 0}},this);var U=function(W,Y){D._bindings.control[O](D.element),D._bindings.control[O]=Y.processor(Y.delegate||D.element,Y.parts[2],Y.parts[1],O,D)};return q.bind("change",U),D._bindings.readyComputes[O]={compute:q,handler:U},q()}else return can$2.Control._action.apply(this,arguments)}},{setup:function(O,w){return this.scope=w.scope,this.viewModel=w.viewModel,can$2.Control.prototype.setup.call(this,O,w)},off:function(){this._bindings&&can$2.each(this._bindings.readyComputes||{},function(O){O.compute.unbind("change",O.handler)}),can$2.Control.prototype.off.apply(this,arguments),this._bindings.readyComputes={}},destroy:function(){can$2.Control.prototype.destroy.apply(this,arguments),typeof this.options.destroy=="function"&&this.options.destroy.apply(this,arguments)}}),$=can$2.$;$.fn&&($.fn.scope=$.fn.viewModel=function(){return can$2.viewModel.apply(can$2,[this].concat(can$2.makeArray(arguments)))});/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can=util,can_1=can;const can$1=getDefaultExportFromCjs(can_1);var __defProp$1=Object.defineProperty,__getOwnPropDesc$1=Object.getOwnPropertyDescriptor,__decorateClass$1=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$1(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp$1(w,D,q),q};exports.AwcCanControl=class extends r$3{constructor(){super(...arguments),this.name="",this.options={},this._canInstance=null}connectedCallback(){super.connectedCallback(),document.addEventListener("DOMContentLoaded",this._setupCanControl.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this._automaticallyDestroyComponent()}updated(w){super.updated(w),w.has("name")&&this._setupCanControl()}_setupCanControl(){if(!this.name)return;const w=can$1.Control.extend({},{});w&&(this._canInstance=new w(this,this.options))}_automaticallyDestroyComponent(){this._canInstance&&typeof this._canInstance.destroy=="function"&&this._canInstance.destroy()}createRenderRoot(){return this}render(){return x`<slot></slot>`}},__decorateClass$1([n$1({type:String,reflect:!0})],exports.AwcCanControl.prototype,"name",2),__decorateClass$1([n$1({type:Object})],exports.AwcCanControl.prototype,"options",2),__decorateClass$1([r$1()],exports.AwcCanControl.prototype,"_canInstance",2),exports.AwcCanControl=__decorateClass$1([t$1("awc-can-control")],exports.AwcCanControl);var __defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__decorateClass=(O,w,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc(w,D):w,U=O.length-1,W;U>=0;U--)(W=O[U])&&(q=(F?W(w,D,q):W(q))||q);return F&&q&&__defProp(w,D,q),q};return exports.AwcVueMounter=class extends r$3{constructor(){super(...arguments),this.name="",this.options={},this.type="construct"}createVueInstance(){const w=this.getVueConstructor(this.name),D=Vue.component(this.name);if(!w&&this.type!=="component")throw new Error(`Vue constructor "${this.name}" not found on window object.`);switch(this.type){case"closure":if(!w)throw new Error(`Cannot create Vue instance via closure: constructor "${this.name}" is not found.`);this.vueInstance=this.createViaClosure(w);break;case"construct":if(!w)throw new Error(`Cannot create Vue instance via construct: constructor "${this.name}" is not found.`);this.vueInstance=this.createViaConstruct(w);break;case"component":if(!D)throw new Error(`Vue component "${this.name}" not found globally.`);this.vueInstance=this.createViaComponent(D);break;default:throw new Error(`Invalid type "${this.type}". Expected "construct", "closure", or "component".`)}if(!this.vueInstance)throw new Error("Vue instance could not be created.");this.vueInstance.$mount(this.renderRoot.querySelector("#vue-root"))}getVueConstructor(w){return w.split(".").reduce((D,F)=>D?D[F]:void 0,window)}createViaConstruct(w){return new w({data:this.options})}createViaClosure(w){const D=this.closure(this.options);return new w({data:D})}createViaComponent(w){return new w({propsData:this.options})}closure(w){return{...w}}connectedCallback(){super.connectedCallback(),document.addEventListener("DOMContentLoaded",()=>this.createVueInstance())}disconnectedCallback(){super.disconnectedCallback(),this.vueInstance&&this.vueInstance.$destroy()}updated(w){super.updated(w),this.createVueInstance()}createRenderRoot(){return this}render(){return x`<div id="vue-root"></div>`}},__decorateClass([n$1({type:String,reflect:!0})],exports.AwcVueMounter.prototype,"name",2),__decorateClass([n$1({type:Object})],exports.AwcVueMounter.prototype,"options",2),__decorateClass([n$1({type:String,reflect:!0})],exports.AwcVueMounter.prototype,"type",2),exports.AwcVueMounter=__decorateClass([t$1("awc-vue-mounter")],exports.AwcVueMounter),Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),exports}({});
 