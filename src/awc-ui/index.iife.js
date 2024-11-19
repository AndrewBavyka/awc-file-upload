var index=function(exports){"use strict";/**
  * @license
  * Copyright 2019 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */var Xr;const t$3=globalThis,e$9=t$3.ShadowRoot&&(t$3.ShadyCSS===void 0||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$6=new WeakMap;let n$3=class{constructor(O,D,F){if(this._$cssResult$=!0,F!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=O,this.t=D}get styleSheet(){let O=this.o;const D=this.t;if(e$9&&O===void 0){const F=D!==void 0&&D.length===1;F&&(O=o$6.get(D)),O===void 0&&((this.o=O=new CSSStyleSheet).replaceSync(this.cssText),F&&o$6.set(D,O))}return O}toString(){return this.cssText}};const r$6=B=>new n$3(typeof B=="string"?B:B+"",void 0,s$2),i$4=(B,...O)=>{const D=B.length===1?B[0]:O.reduce((F,q,G)=>F+(U=>{if(U._$cssResult$===!0)return U.cssText;if(typeof U=="number")return U;throw Error("Value passed to 'css' function must be a 'css' function result: "+U+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(q)+B[G+1],B[0]);return new n$3(D,B,s$2)},S$1=(B,O)=>{if(e$9)B.adoptedStyleSheets=O.map(D=>D instanceof CSSStyleSheet?D:D.styleSheet);else for(const D of O){const F=document.createElement("style"),q=t$3.litNonce;q!==void 0&&F.setAttribute("nonce",q),F.textContent=D.cssText,B.appendChild(F)}},c$2=e$9?B=>B:B=>B instanceof CSSStyleSheet?(O=>{let D="";for(const F of O.cssRules)D+=F.cssText;return r$6(D)})(B):B;/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const{is:i$3,defineProperty:e$8,getOwnPropertyDescriptor:r$5,getOwnPropertyNames:h$1,getOwnPropertySymbols:o$5,getPrototypeOf:n$2}=Object,a$2=globalThis,c$1=a$2.trustedTypes,l$3=c$1?c$1.emptyScript:"",p$1=a$2.reactiveElementPolyfillSupport,d$1=(B,O)=>B,u$3={toAttribute(B,O){switch(O){case Boolean:B=B?l$3:null;break;case Object:case Array:B=B==null?B:JSON.stringify(B)}return B},fromAttribute(B,O){let D=B;switch(O){case Boolean:D=B!==null;break;case Number:D=B===null?null:Number(B);break;case Object:case Array:try{D=JSON.parse(B)}catch{D=null}}return D}},f$2=(B,O)=>!i$3(B,O),y$1={attribute:!0,type:String,converter:u$3,reflect:!1,hasChanged:f$2};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),a$2.litPropertyMetadata??(a$2.litPropertyMetadata=new WeakMap);let b$1=class extends HTMLElement{static addInitializer(O){this._$Ei(),(this.l??(this.l=[])).push(O)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(O,D=y$1){if(D.state&&(D.attribute=!1),this._$Ei(),this.elementProperties.set(O,D),!D.noAccessor){const F=Symbol(),q=this.getPropertyDescriptor(O,F,D);q!==void 0&&e$8(this.prototype,O,q)}}static getPropertyDescriptor(O,D,F){const{get:q,set:G}=r$5(this.prototype,O)??{get(){return this[D]},set(U){this[D]=U}};return{get(){return q==null?void 0:q.call(this)},set(U){const Y=q==null?void 0:q.call(this);G.call(this,U),this.requestUpdate(O,Y,F)},configurable:!0,enumerable:!0}}static getPropertyOptions(O){return this.elementProperties.get(O)??y$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const O=n$2(this);O.finalize(),O.l!==void 0&&(this.l=[...O.l]),this.elementProperties=new Map(O.elementProperties)}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const D=this.properties,F=[...h$1(D),...o$5(D)];for(const q of F)this.createProperty(q,D[q])}const O=this[Symbol.metadata];if(O!==null){const D=litPropertyMetadata.get(O);if(D!==void 0)for(const[F,q]of D)this.elementProperties.set(F,q)}this._$Eh=new Map;for(const[D,F]of this.elementProperties){const q=this._$Eu(D,F);q!==void 0&&this._$Eh.set(q,D)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(O){const D=[];if(Array.isArray(O)){const F=new Set(O.flat(1/0).reverse());for(const q of F)D.unshift(c$2(q))}else O!==void 0&&D.push(c$2(O));return D}static _$Eu(O,D){const F=D.attribute;return F===!1?void 0:typeof F=="string"?F:typeof O=="string"?O.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var O;this._$ES=new Promise(D=>this.enableUpdating=D),this._$AL=new Map,this._$E_(),this.requestUpdate(),(O=this.constructor.l)==null||O.forEach(D=>D(this))}addController(O){var D;(this._$EO??(this._$EO=new Set)).add(O),this.renderRoot!==void 0&&this.isConnected&&((D=O.hostConnected)==null||D.call(O))}removeController(O){var D;(D=this._$EO)==null||D.delete(O)}_$E_(){const O=new Map,D=this.constructor.elementProperties;for(const F of D.keys())this.hasOwnProperty(F)&&(O.set(F,this[F]),delete this[F]);O.size>0&&(this._$Ep=O)}createRenderRoot(){const O=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(O,this.constructor.elementStyles),O}connectedCallback(){var O;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(O=this._$EO)==null||O.forEach(D=>{var F;return(F=D.hostConnected)==null?void 0:F.call(D)})}enableUpdating(O){}disconnectedCallback(){var O;(O=this._$EO)==null||O.forEach(D=>{var F;return(F=D.hostDisconnected)==null?void 0:F.call(D)})}attributeChangedCallback(O,D,F){this._$AK(O,F)}_$EC(O,D){var G;const F=this.constructor.elementProperties.get(O),q=this.constructor._$Eu(O,F);if(q!==void 0&&F.reflect===!0){const U=(((G=F.converter)==null?void 0:G.toAttribute)!==void 0?F.converter:u$3).toAttribute(D,F.type);this._$Em=O,U==null?this.removeAttribute(q):this.setAttribute(q,U),this._$Em=null}}_$AK(O,D){var G;const F=this.constructor,q=F._$Eh.get(O);if(q!==void 0&&this._$Em!==q){const U=F.getPropertyOptions(q),Y=typeof U.converter=="function"?{fromAttribute:U.converter}:((G=U.converter)==null?void 0:G.fromAttribute)!==void 0?U.converter:u$3;this._$Em=q,this[q]=Y.fromAttribute(D,U.type),this._$Em=null}}requestUpdate(O,D,F){if(O!==void 0){if(F??(F=this.constructor.getPropertyOptions(O)),!(F.hasChanged??f$2)(this[O],D))return;this.P(O,D,F)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(O,D,F){this._$AL.has(O)||this._$AL.set(O,D),F.reflect===!0&&this._$Em!==O&&(this._$Ej??(this._$Ej=new Set)).add(O)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(D){Promise.reject(D)}const O=this.scheduleUpdate();return O!=null&&await O,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var F;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[G,U]of this._$Ep)this[G]=U;this._$Ep=void 0}const q=this.constructor.elementProperties;if(q.size>0)for(const[G,U]of q)U.wrapped!==!0||this._$AL.has(G)||this[G]===void 0||this.P(G,this[G],U)}let O=!1;const D=this._$AL;try{O=this.shouldUpdate(D),O?(this.willUpdate(D),(F=this._$EO)==null||F.forEach(q=>{var G;return(G=q.hostUpdate)==null?void 0:G.call(q)}),this.update(D)):this._$EU()}catch(q){throw O=!1,this._$EU(),q}O&&this._$AE(D)}willUpdate(O){}_$AE(O){var D;(D=this._$EO)==null||D.forEach(F=>{var q;return(q=F.hostUpdated)==null?void 0:q.call(F)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(O)),this.updated(O)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(O){return!0}update(O){this._$Ej&&(this._$Ej=this._$Ej.forEach(D=>this._$EC(D,this[D]))),this._$EU()}updated(O){}firstUpdated(O){}};b$1.elementStyles=[],b$1.shadowRootOptions={mode:"open"},b$1[d$1("elementProperties")]=new Map,b$1[d$1("finalized")]=new Map,p$1==null||p$1({ReactiveElement:b$1}),(a$2.reactiveElementVersions??(a$2.reactiveElementVersions=[])).push("2.0.4");/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const t$2=globalThis,i$2=t$2.trustedTypes,s$1=i$2?i$2.createPolicy("lit-html",{createHTML:B=>B}):void 0,e$7="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,o$4="?"+h,n$1=`<${o$4}>`,r$4=document,l$2=()=>r$4.createComment(""),c=B=>B===null||typeof B!="object"&&typeof B!="function",a$1=Array.isArray,u$2=B=>a$1(B)||typeof(B==null?void 0:B[Symbol.iterator])=="function",d=`[ 	
 \f\r]`,f$1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m$1=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ 	
 \f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$$3=/^(?:script|style|textarea|title)$/i,y=B=>(O,...D)=>({_$litType$:B,strings:O,values:D}),x=y(1),b=y(2),w=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r$4.createTreeWalker(r$4,129);function C(B,O){if(!Array.isArray(B)||!B.hasOwnProperty("raw"))throw Error("invalid template strings array");return s$1!==void 0?s$1.createHTML(O):O}const P=(B,O)=>{const D=B.length-1,F=[];let q,G=O===2?"<svg>":"",U=f$1;for(let Y=0;Y<D;Y++){const Q=B[Y];let ne,oe,ce=-1,fe=0;for(;fe<Q.length&&(U.lastIndex=fe,oe=U.exec(Q),oe!==null);)fe=U.lastIndex,U===f$1?oe[1]==="!--"?U=v:oe[1]!==void 0?U=_:oe[2]!==void 0?($$3.test(oe[2])&&(q=RegExp("</"+oe[2],"g")),U=m$1):oe[3]!==void 0&&(U=m$1):U===m$1?oe[0]===">"?(U=q??f$1,ce=-1):oe[1]===void 0?ce=-2:(ce=U.lastIndex-oe[2].length,ne=oe[1],U=oe[3]===void 0?m$1:oe[3]==='"'?g:p):U===g||U===p?U=m$1:U===v||U===_?U=f$1:(U=m$1,q=void 0);const we=U===m$1&&B[Y+1].startsWith("/>")?" ":"";G+=U===f$1?Q+n$1:ce>=0?(F.push(ne),Q.slice(0,ce)+e$7+Q.slice(ce)+h+we):Q+h+(ce===-2?Y:we)}return[C(B,G+(B[D]||"<?>")+(O===2?"</svg>":"")),F]};class V{constructor({strings:O,_$litType$:D},F){let q;this.parts=[];let G=0,U=0;const Y=O.length-1,Q=this.parts,[ne,oe]=P(O,D);if(this.el=V.createElement(ne,F),E.currentNode=this.el.content,D===2){const ce=this.el.content.firstChild;ce.replaceWith(...ce.childNodes)}for(;(q=E.nextNode())!==null&&Q.length<Y;){if(q.nodeType===1){if(q.hasAttributes())for(const ce of q.getAttributeNames())if(ce.endsWith(e$7)){const fe=oe[U++],we=q.getAttribute(ce).split(h),X=/([.?@])?(.*)/.exec(fe);Q.push({type:1,index:G,name:X[2],strings:we,ctor:X[1]==="."?k:X[1]==="?"?H:X[1]==="@"?I:R}),q.removeAttribute(ce)}else ce.startsWith(h)&&(Q.push({type:6,index:G}),q.removeAttribute(ce));if($$3.test(q.tagName)){const ce=q.textContent.split(h),fe=ce.length-1;if(fe>0){q.textContent=i$2?i$2.emptyScript:"";for(let we=0;we<fe;we++)q.append(ce[we],l$2()),E.nextNode(),Q.push({type:2,index:++G});q.append(ce[fe],l$2())}}}else if(q.nodeType===8)if(q.data===o$4)Q.push({type:2,index:G});else{let ce=-1;for(;(ce=q.data.indexOf(h,ce+1))!==-1;)Q.push({type:7,index:G}),ce+=h.length-1}G++}}static createElement(O,D){const F=r$4.createElement("template");return F.innerHTML=O,F}}function N(B,O,D=B,F){var U,Y;if(O===w)return O;let q=F!==void 0?(U=D._$Co)==null?void 0:U[F]:D._$Cl;const G=c(O)?void 0:O._$litDirective$;return(q==null?void 0:q.constructor)!==G&&((Y=q==null?void 0:q._$AO)==null||Y.call(q,!1),G===void 0?q=void 0:(q=new G(B),q._$AT(B,D,F)),F!==void 0?(D._$Co??(D._$Co=[]))[F]=q:D._$Cl=q),q!==void 0&&(O=N(B,q._$AS(B,O.values),q,F)),O}class S{constructor(O,D){this._$AV=[],this._$AN=void 0,this._$AD=O,this._$AM=D}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(O){const{el:{content:D},parts:F}=this._$AD,q=((O==null?void 0:O.creationScope)??r$4).importNode(D,!0);E.currentNode=q;let G=E.nextNode(),U=0,Y=0,Q=F[0];for(;Q!==void 0;){if(U===Q.index){let ne;Q.type===2?ne=new M(G,G.nextSibling,this,O):Q.type===1?ne=new Q.ctor(G,Q.name,Q.strings,this,O):Q.type===6&&(ne=new L(G,this,O)),this._$AV.push(ne),Q=F[++Y]}U!==(Q==null?void 0:Q.index)&&(G=E.nextNode(),U++)}return E.currentNode=r$4,q}p(O){let D=0;for(const F of this._$AV)F!==void 0&&(F.strings!==void 0?(F._$AI(O,F,D),D+=F.strings.length-2):F._$AI(O[D])),D++}}class M{get _$AU(){var O;return((O=this._$AM)==null?void 0:O._$AU)??this._$Cv}constructor(O,D,F,q){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=O,this._$AB=D,this._$AM=F,this.options=q,this._$Cv=(q==null?void 0:q.isConnected)??!0}get parentNode(){let O=this._$AA.parentNode;const D=this._$AM;return D!==void 0&&(O==null?void 0:O.nodeType)===11&&(O=D.parentNode),O}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(O,D=this){O=N(this,O,D),c(O)?O===T||O==null||O===""?(this._$AH!==T&&this._$AR(),this._$AH=T):O!==this._$AH&&O!==w&&this._(O):O._$litType$!==void 0?this.$(O):O.nodeType!==void 0?this.T(O):u$2(O)?this.k(O):this._(O)}S(O){return this._$AA.parentNode.insertBefore(O,this._$AB)}T(O){this._$AH!==O&&(this._$AR(),this._$AH=this.S(O))}_(O){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=O:this.T(r$4.createTextNode(O)),this._$AH=O}$(O){var G;const{values:D,_$litType$:F}=O,q=typeof F=="number"?this._$AC(O):(F.el===void 0&&(F.el=V.createElement(C(F.h,F.h[0]),this.options)),F);if(((G=this._$AH)==null?void 0:G._$AD)===q)this._$AH.p(D);else{const U=new S(q,this),Y=U.u(this.options);U.p(D),this.T(Y),this._$AH=U}}_$AC(O){let D=A.get(O.strings);return D===void 0&&A.set(O.strings,D=new V(O)),D}k(O){a$1(this._$AH)||(this._$AH=[],this._$AR());const D=this._$AH;let F,q=0;for(const G of O)q===D.length?D.push(F=new M(this.S(l$2()),this.S(l$2()),this,this.options)):F=D[q],F._$AI(G),q++;q<D.length&&(this._$AR(F&&F._$AB.nextSibling,q),D.length=q)}_$AR(O=this._$AA.nextSibling,D){var F;for((F=this._$AP)==null?void 0:F.call(this,!1,!0,D);O&&O!==this._$AB;){const q=O.nextSibling;O.remove(),O=q}}setConnected(O){var D;this._$AM===void 0&&(this._$Cv=O,(D=this._$AP)==null||D.call(this,O))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(O,D,F,q,G){this.type=1,this._$AH=T,this._$AN=void 0,this.element=O,this.name=D,this._$AM=q,this.options=G,F.length>2||F[0]!==""||F[1]!==""?(this._$AH=Array(F.length-1).fill(new String),this.strings=F):this._$AH=T}_$AI(O,D=this,F,q){const G=this.strings;let U=!1;if(G===void 0)O=N(this,O,D,0),U=!c(O)||O!==this._$AH&&O!==w,U&&(this._$AH=O);else{const Y=O;let Q,ne;for(O=G[0],Q=0;Q<G.length-1;Q++)ne=N(this,Y[F+Q],D,Q),ne===w&&(ne=this._$AH[Q]),U||(U=!c(ne)||ne!==this._$AH[Q]),ne===T?O=T:O!==T&&(O+=(ne??"")+G[Q+1]),this._$AH[Q]=ne}U&&!q&&this.j(O)}j(O){O===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,O??"")}}class k extends R{constructor(){super(...arguments),this.type=3}j(O){this.element[this.name]=O===T?void 0:O}}class H extends R{constructor(){super(...arguments),this.type=4}j(O){this.element.toggleAttribute(this.name,!!O&&O!==T)}}class I extends R{constructor(O,D,F,q,G){super(O,D,F,q,G),this.type=5}_$AI(O,D=this){if((O=N(this,O,D,0)??T)===w)return;const F=this._$AH,q=O===T&&F!==T||O.capture!==F.capture||O.once!==F.once||O.passive!==F.passive,G=O!==T&&(F===T||q);q&&this.element.removeEventListener(this.name,this,F),G&&this.element.addEventListener(this.name,this,O),this._$AH=O}handleEvent(O){var D;typeof this._$AH=="function"?this._$AH.call(((D=this.options)==null?void 0:D.host)??this.element,O):this._$AH.handleEvent(O)}}class L{constructor(O,D,F){this.element=O,this.type=6,this._$AN=void 0,this._$AM=D,this.options=F}get _$AU(){return this._$AM._$AU}_$AI(O){N(this,O)}}const Z=t$2.litHtmlPolyfillSupport;Z==null||Z(V,M),(t$2.litHtmlVersions??(t$2.litHtmlVersions=[])).push("3.1.4");const j=(B,O,D)=>{const F=(D==null?void 0:D.renderBefore)??O;let q=F._$litPart$;if(q===void 0){const G=(D==null?void 0:D.renderBefore)??null;F._$litPart$=q=new M(O.insertBefore(l$2(),G),G,void 0,D??{})}return q._$AI(B),q};/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */class s extends b$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var D;const O=super.createRenderRoot();return(D=this.renderOptions).renderBefore??(D.renderBefore=O.firstChild),O}update(O){const D=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(O),this._$Do=j(D,this.renderRoot,this.renderOptions)}connectedCallback(){var O;super.connectedCallback(),(O=this._$Do)==null||O.setConnected(!0)}disconnectedCallback(){var O;super.disconnectedCallback(),(O=this._$Do)==null||O.setConnected(!1)}render(){return w}}s._$litElement$=!0,s.finalized=!0,(Xr=globalThis.litElementHydrateSupport)==null||Xr.call(globalThis,{LitElement:s});const r$3=globalThis.litElementPolyfillSupport;r$3==null||r$3({LitElement:s}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const t$1=B=>(O,D)=>{D!==void 0?D.addInitializer(()=>{customElements.define(B,O)}):customElements.define(B,O)};/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const o$3={attribute:!0,type:String,converter:u$3,reflect:!1,hasChanged:f$2},r$2=(B=o$3,O,D)=>{const{kind:F,metadata:q}=D;let G=globalThis.litPropertyMetadata.get(q);if(G===void 0&&globalThis.litPropertyMetadata.set(q,G=new Map),G.set(D.name,B),F==="accessor"){const{name:U}=D;return{set(Y){const Q=O.get.call(this);O.set.call(this,Y),this.requestUpdate(U,Q,B)},init(Y){return Y!==void 0&&this.P(U,void 0,B),Y}}}if(F==="setter"){const{name:U}=D;return function(Y){const Q=this[U];O.call(this,Y),this.requestUpdate(U,Q,B)}}throw Error("Unsupported decorator location: "+F)};function n(B){return(O,D)=>typeof D=="object"?r$2(B,O,D):((F,q,G)=>{const U=q.hasOwnProperty(G);return q.constructor.createProperty(G,U?{...F,wrapped:!0}:F),U?Object.getOwnPropertyDescriptor(q,G):void 0})(B,O,D)}/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */function r$1(B){return n({...B,state:!0,attribute:!1})}/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const e$6=(B,O,D)=>(D.configurable=!0,D.enumerable=!0,Reflect.decorate&&typeof O!="object"&&Object.defineProperty(B,O,D),D);/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */function e$5(B,O){return(D,F,q)=>{const G=U=>{var Y;return((Y=U.renderRoot)==null?void 0:Y.querySelector(B))??null};return e$6(D,F,{get(){return G(this)}})}}/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */let e$4;function r(B){return(O,D)=>e$6(O,D,{get(){return(this.renderRoot??e$4??(e$4=document.createDocumentFragment())).querySelectorAll(B)}})}const tabStyle=i$4`
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
 `;var __defProp$_=Object.defineProperty,__getOwnPropDesc$_=Object.getOwnPropertyDescriptor,__decorateClass$_=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$_(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$_(O,D,q),q};const awcTabTag="awc-tab";exports.AwcTab=class extends s{constructor(){super(...arguments),this.active=!1}_handleTabClick(){this.active=!this.active,this._onChange()}_onChange(){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}render(){return x`
       <span class="awc-tab" ?active=${this.active} @click=${this._handleTabClick}><slot></slot></span>
     `}},exports.AwcTab.styles=[tabStyle],__decorateClass$_([n({type:Boolean,reflect:!0})],exports.AwcTab.prototype,"active",2),exports.AwcTab=__decorateClass$_([t$1(awcTabTag)],exports.AwcTab);const tabsGroupStyle=i$4`
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
 `;var __defProp$Z=Object.defineProperty,__getOwnPropDesc$Z=Object.getOwnPropertyDescriptor,__decorateClass$Z=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$Z(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$Z(O,D,q),q};const awcTabsGroupTag="awc-tabs-group";exports.AwcTabsGroup=class extends s{constructor(){super(...arguments),this.noDivider=!1}get tabs(){return[...this.querySelectorAll(awcTabTag)]}_handleTabClick(O){const D=O.target;this.tabs.forEach(F=>{F.active=!1}),D.active=!0}render(){return x`
       <div class="awc-tabs-container" >
         <slot @click=${this._handleTabClick}></slot>
       </div>
       ${this.noDivider?"":x`<awc-divider spacing="none"></awc-divider>`}
     `}},exports.AwcTabsGroup.styles=[tabsGroupStyle],__decorateClass$Z([n({type:Boolean,reflect:!0,attribute:"no-divider"})],exports.AwcTabsGroup.prototype,"noDivider",2),exports.AwcTabsGroup=__decorateClass$Z([t$1(awcTabsGroupTag)],exports.AwcTabsGroup);let isDOMReady=!1;const readyCallbacks=[];function onDOMReady(B){isDOMReady?B():readyCallbacks.push(B)}document.addEventListener("DOMContentLoaded",()=>{isDOMReady=!0,readyCallbacks.forEach(B=>B())});const segmentSwitcherItemStyle=i$4`
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
  */const o$2=B=>B??T;function dispatcher(B,O){return function(D,F){const q=new CustomEvent(O,{detail:D,bubbles:!0,cancelable:!1,composed:!0,...F});return B.dispatchEvent(q),q}}function event(B){return(O,D)=>{Object.defineProperty(O,D,{get(){return dispatcher(this,B||D)},enumerable:!0,configurable:!0})}}var __defProp$Y=Object.defineProperty,__getOwnPropDesc$Y=Object.getOwnPropertyDescriptor,__decorateClass$Y=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$Y(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$Y(O,D,q),q};const AwcSegmentSwitcherItemTag="awc-segment-switcher-item";exports.AwcSegmentSwitcherItem=class extends s{constructor(){super(...arguments),this.active=!1,this.target="_self"}update(O){super.update(O),O.has("active")&&this.active&&(this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this._handleActiveItem())}_handleActiveItem(){this._onChangeActive(this.active)}render(){return this.href?x`
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
     `}},exports.AwcSegmentSwitcherItem.styles=[segmentSwitcherItemStyle],__decorateClass$Y([n({type:String,reflect:!0})],exports.AwcSegmentSwitcherItem.prototype,"href",2),__decorateClass$Y([n({type:Boolean,reflect:!0})],exports.AwcSegmentSwitcherItem.prototype,"active",2),__decorateClass$Y([n({reflect:!0})],exports.AwcSegmentSwitcherItem.prototype,"target",2),__decorateClass$Y([event("awc-segment-item-change")],exports.AwcSegmentSwitcherItem.prototype,"_onChangeActive",2),exports.AwcSegmentSwitcherItem=__decorateClass$Y([t$1("awc-segment-switcher-item")],exports.AwcSegmentSwitcherItem);const segmentSwitcherStyle=i$4`
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
 `;var __defProp$X=Object.defineProperty,__getOwnPropDesc$X=Object.getOwnPropertyDescriptor,__decorateClass$X=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$X(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$X(O,D,q),q};exports.AwcSegmentSwitcher=class extends s{constructor(){super(...arguments),this.sliderPosition=0,this.sliderWidth=0}get segmentSwitcherItems(){return[...this.querySelectorAll(AwcSegmentSwitcherItemTag)]}connectedCallback(){super.connectedCallback(),onDOMReady(()=>{requestAnimationFrame(()=>this.updateSliderPosition())});const O=new MutationObserver(D=>{D.forEach(F=>{F.type==="attributes"&&F.attributeName==="active"&&this.updateSliderPosition()})});this.segmentSwitcherItems.forEach(D=>{O.observe(D,{attributes:!0})})}updated(O){super.updated(O),(O.has("sliderPosition")||O.has("sliderWidth"))&&this._toggleSliderVisibility()}handleSegmentItemClick(O){const D=O.target;D&&!D.active&&(this.segmentSwitcherItems.forEach(F=>F.active=!1),D.active=!0,this._setSliderPositionToActiveItem(D))}_setSliderPositionToActiveItem(O){this.segmentSwitcherItems.forEach(D=>D.active=!1),O.active=!0,O.active&&(this.sliderPosition=O.offsetLeft,this.sliderWidth=O.offsetWidth)}_toggleSliderVisibility(){this._slider&&(this._slider.addEventListener("transitionstart",()=>{this._slider.style.visibility="visible",this._slider.style.opacity="1"}),this._slider.addEventListener("transitionend",()=>{this._slider.style.visibility="hidden",this._slider.style.opacity="0"}))}updateSliderPosition(){const O=this.querySelector("awc-segment-switcher-item[active]");if(O){const D=O.getBoundingClientRect(),F=this.getBoundingClientRect();this.sliderPosition=D.left-F.left,this.sliderWidth=O.offsetWidth}}handleSegmentActive(O){const D=O.target;this.segmentSwitcherItems.forEach(F=>{F!==D&&F.active&&(F.active=!1)})}render(){return x`
       <div class='awc-segment-switcher'>
       <div class="slider" style="transform: translateX(${this.sliderPosition}px); width: ${this.sliderWidth}px;"></div>
         <slot 
         @click="${this.handleSegmentItemClick}"
         @awc-segment-item-change="${this.handleSegmentActive}"
         ></slot>
       </div>
     `}},exports.AwcSegmentSwitcher.styles=[segmentSwitcherStyle],__decorateClass$X([r$1()],exports.AwcSegmentSwitcher.prototype,"sliderPosition",2),__decorateClass$X([r$1()],exports.AwcSegmentSwitcher.prototype,"sliderWidth",2),__decorateClass$X([e$5(".slider")],exports.AwcSegmentSwitcher.prototype,"_slider",2),exports.AwcSegmentSwitcher=__decorateClass$X([t$1("awc-segment-switcher")],exports.AwcSegmentSwitcher);const alertStyle=i$4`
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
 `;var __defProp$W=Object.defineProperty,__getOwnPropDesc$W=Object.getOwnPropertyDescriptor,__decorateClass$W=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$W(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$W(O,D,q),q};exports.AwcAlert=class extends s{constructor(){super(...arguments),this.color="primary",this.variant="block"}render(){return x`
       <div class="awc-alert">
         <p class="awc-alert__title"><slot></slot></p>
       </div>
     `}},exports.AwcAlert.styles=[alertStyle],__decorateClass$W([n({type:String,reflect:!0})],exports.AwcAlert.prototype,"color",2),__decorateClass$W([n({type:String,reflect:!0})],exports.AwcAlert.prototype,"variant",2),exports.AwcAlert=__decorateClass$W([t$1("awc-alert")],exports.AwcAlert);const avatarStyle=i$4`
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
  */const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$3=B=>(...O)=>({_$litDirective$:B,values:O});let i$1=class{constructor(O){}get _$AU(){return this._$AM._$AU}_$AT(O,D,F){this._$Ct=O,this._$AM=D,this._$Ci=F}_$AS(O,D){return this.update(O,D)}update(O,D){return this.render(...D)}};/**
  * @license
  * Copyright 2018 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const e$2=e$3(class extends i$1{constructor(B){var O;if(super(B),B.type!==t.ATTRIBUTE||B.name!=="class"||((O=B.strings)==null?void 0:O.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(B){return" "+Object.keys(B).filter(O=>B[O]).join(" ")+" "}update(B,[O]){var F,q;if(this.st===void 0){this.st=new Set,B.strings!==void 0&&(this.nt=new Set(B.strings.join(" ").split(/\s/).filter(G=>G!=="")));for(const G in O)O[G]&&!((F=this.nt)!=null&&F.has(G))&&this.st.add(G);return this.render(O)}const D=B.element.classList;for(const G of this.st)G in O||(D.remove(G),this.st.delete(G));for(const G in O){const U=!!O[G];U===this.st.has(G)||(q=this.nt)!=null&&q.has(G)||(U?(D.add(G),this.st.add(G)):(D.remove(G),this.st.delete(G)))}return w}});var __defProp$V=Object.defineProperty,__getOwnPropDesc$V=Object.getOwnPropertyDescriptor,__decorateClass$V=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$V(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$V(O,D,q),q},AvatarColor=(B=>(B.GlobalRed2600="global-red-2-600",B.GlobalRed2500="global-red-2-500",B.GlobalOrange500="global-orange-500",B.GlobalYellow500="global-yellow-500",B.GlobalYellow300="global-yellow-300",B.GlobalLightGreen400="global-light-green-400",B.GlobalLightGreen600="global-light-green-600",B.GlobalGreen600="global-green-600",B.GlobalGreen300="global-green-300",B.GlobalTurquoise300="global-turquoise-300",B.GlobalTurquoise400="global-turquoise-400",B.GlobalCyan300="global-cyan-300",B.GlobalCyan500="global-cyan-500",B.GlobalBlue600="global-blue-600",B.GlobalBlue400="global-blue-400",B.GlobalDeepPurple400="global-deep-purple-400",B.GlobalDeepPurple600="global-deep-purple-600",B.GlobalPurple600="global-purple-600",B.GlobalPurple400="global-purple-400",B.GlobalRed500="global-red-500",B.GlobalRed400="global-red-400",B.ColorsLightSecondary="colors-light-secondary",B.ColorsLightText="colors-light-text",B.ColorsLightDarkBlue="colors-light-dark-blue",B))(AvatarColor||{}),AvatarIcon=(B=>(B.none="none",B.robot="robot",B.user="user",B.group="group",B.deleted="deleted",B.anonymous="anonymous",B.undefinded="undefinded",B))(AvatarIcon||{});const ICONS={anonymous:b`
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
   `},awcAvatarTag="awc-avatar";exports.AwcAvatar=class extends s{constructor(){super(...arguments),this.size="36",this.rounded="circle",this.status="none",this.color="global-blue-400",this.target="_self",this.icon="none",this.sliced=!1,this.hidden=!1}_trimAvatarCharacter(O){if(this.title)return this.title.length>1?(this._croppedTitle=O.split("").shift(),this._croppedTitle):O}_setColorOrImage(){const O=this._trimAvatarCharacter(this.title);if(this.imageLink)return x`<img
         class="awc-avatar--image"
         src="${this.imageLink}"
       />`;if(this.icon&&Object.values(AvatarIcon).includes(this.icon)&&this.icon!=="none")return x`<span
         class="awc-avatar--no-image ${this.icon}"
         >${ICONS[this.icon]}</span
       >`;if(this.color&&!this.customColor)return x`<span
         style="background-color: var(--${this.color})"
         class="awc-avatar--no-image"
         >${O}</span
       >`;if(this.color&&this.customColor||this.customColor&&!this.color)return x`<span
         style="--awc-avatar-custom-color: ${this.customColor}"
         class="awc-avatar--no-image"
         >${O}</span
       >`}render(){const O={"awc-avatar-container":!0},D=b`
     <svg class="awc-avatar__status--icon" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
       <rect x="1" y="1" width="12" height="12" rx="6" fill="#35D3AC" stroke="white" stroke-width="2"/>
       <path d="M5 7L6.5 8.5L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     </svg>`,F=b`
     <svg class="awc-avatar__status--icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
       <rect x="1" y="1" width="14" height="14" rx="7" fill="#FF7188" stroke="white" stroke-width="2"/>
       <path d="M5.5 5.5L8 8M10.5 10.5L8 8M8 8L5.5 10.5M8 8L10.5 5.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
     </svg>
     `;return this.href?x`
     <a href=${this.href} target=${this.target} class=${e$2(O)}>
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
     <div class=${e$2(O)}>
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
     `}},exports.AwcAvatar.styles=[avatarStyle],__decorateClass$V([n({type:String,reflect:!0})],exports.AwcAvatar.prototype,"size",2),__decorateClass$V([n({type:String,reflect:!0})],exports.AwcAvatar.prototype,"rounded",2),__decorateClass$V([n({type:String,reflect:!0})],exports.AwcAvatar.prototype,"status",2),__decorateClass$V([n({type:String,reflect:!0})],exports.AwcAvatar.prototype,"color",2),__decorateClass$V([n({type:String,reflect:!0})],exports.AwcAvatar.prototype,"title",2),__decorateClass$V([n({type:String,attribute:"image-link"})],exports.AwcAvatar.prototype,"imageLink",2),__decorateClass$V([n({type:String,reflect:!0})],exports.AwcAvatar.prototype,"href",2),__decorateClass$V([n({type:String})],exports.AwcAvatar.prototype,"target",2),__decorateClass$V([n({type:String,reflect:!0,attribute:"custom-color"})],exports.AwcAvatar.prototype,"customColor",2),__decorateClass$V([n({type:String,reflect:!0})],exports.AwcAvatar.prototype,"icon",2),__decorateClass$V([n({type:Boolean,reflect:!0})],exports.AwcAvatar.prototype,"sliced",2),__decorateClass$V([n({type:Boolean,reflect:!0})],exports.AwcAvatar.prototype,"hidden",2),__decorateClass$V([r$1()],exports.AwcAvatar.prototype,"_croppedTitle",2),exports.AwcAvatar=__decorateClass$V([t$1(awcAvatarTag)],exports.AwcAvatar);const avatarGroupStyle=i$4`
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
 `,avatarCounterStyle=i$4`
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
 `;var __defProp$U=Object.defineProperty,__getOwnPropDesc$U=Object.getOwnPropertyDescriptor,__decorateClass$U=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$U(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$U(O,D,q),q};const awcAvatarGroupCounterTag="awc-avatar-group-counter";exports.AwcAvatarGroupCounter=class extends s{constructor(){super(...arguments),this.totalUsers=0,this.counterSize="24",this.counterRounded="circle"}render(){return x`
             <div class="awc-avatar-group__counter size_${this.counterSize} ${this.counterRounded}">
                 <p>+${this.totalUsers}</p>
             </div>
         `}},exports.AwcAvatarGroupCounter.styles=[avatarCounterStyle],__decorateClass$U([n({type:Number,attribute:"total-users"})],exports.AwcAvatarGroupCounter.prototype,"totalUsers",2),__decorateClass$U([n({type:String,attribute:"counter-size"})],exports.AwcAvatarGroupCounter.prototype,"counterSize",2),__decorateClass$U([n({attribute:"counter-rounded"})],exports.AwcAvatarGroupCounter.prototype,"counterRounded",2),exports.AwcAvatarGroupCounter=__decorateClass$U([t$1(awcAvatarGroupCounterTag)],exports.AwcAvatarGroupCounter);var __defProp$T=Object.defineProperty,__getOwnPropDesc$T=Object.getOwnPropertyDescriptor,__decorateClass$T=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$T(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$T(O,D,q),q};const awcAvatarGroupTag="awc-avatar-group";exports.AwcAvatarGroup=class extends s{constructor(){super(...arguments),this.displayUsers=2,this.totalUsers=0,this.counterSize="24",this.counterRounded="circle",this._counterValue=0,this._counterHidden=!1}get avatars(){return Array.from(this.querySelectorAll(awcAvatarTag))}get avatarCounter(){return this.querySelector(awcAvatarGroupCounterTag)}_updateDisplayedUsers(){var D,F;const O=(F=(D=this.shadowRoot)==null?void 0:D.querySelector("slot"))==null?void 0:F.assignedElements();O&&O.forEach((q,G)=>{q.hidden=G>=this.displayUsers})}_updateCounterValue(){this.avatarCounter?this._counterHidden=this._counterValue===0:(this._counterValue=Math.max(0,this.totalUsers-this.displayUsers),this._counterHidden=this._counterValue===0)}_applySliceEffect(){var D,F;const O=(F=(D=this.shadowRoot)==null?void 0:D.querySelector("slot"))==null?void 0:F.assignedElements();O&&O.forEach((q,G)=>{q.sliced=G!==0})}connectedCallback(){super.connectedCallback(),document.addEventListener("DOMContentLoaded",()=>{this._applySliceEffect(),this._updateDisplayedUsers(),this._updateCounterValue()})}updated(O){(O.has("displayUsers")||O.has("totalUsers"))&&(this._updateDisplayedUsers(),this._updateCounterValue()),this._applySliceEffect()}render(){return x`
       <div class="awc-avatar-group">
         <slot></slot>
         ${this._counterHidden?"":x`
           <div class="awc-avatar-group__counter size_${this.counterSize} ${this.counterRounded}">
             <p>+${this._counterValue}</p>
           </div>`}
             <slot name="awc-avatar-group-counter"></slot>
       </div>
     `}},exports.AwcAvatarGroup.styles=[avatarGroupStyle],__decorateClass$T([n({type:Number,attribute:"display-users"})],exports.AwcAvatarGroup.prototype,"displayUsers",2),__decorateClass$T([n({type:Number,attribute:"total-users"})],exports.AwcAvatarGroup.prototype,"totalUsers",2),__decorateClass$T([n({type:String,attribute:"counter-size"})],exports.AwcAvatarGroup.prototype,"counterSize",2),__decorateClass$T([n({type:String,attribute:"counter-rounded"})],exports.AwcAvatarGroup.prototype,"counterRounded",2),__decorateClass$T([r$1()],exports.AwcAvatarGroup.prototype,"_counterValue",2),__decorateClass$T([r$1()],exports.AwcAvatarGroup.prototype,"_counterHidden",2),exports.AwcAvatarGroup=__decorateClass$T([t$1(awcAvatarGroupTag)],exports.AwcAvatarGroup);const badgeStyle=i$4`
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
 `;var __defProp$S=Object.defineProperty,__getOwnPropDesc$S=Object.getOwnPropertyDescriptor,__decorateClass$S=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$S(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$S(O,D,q),q};exports.AwcBadge=class extends s{constructor(){super(...arguments),this.color="primary"}render(){return x` <span class="awc-badge ${this.color}"></span> `}},exports.AwcBadge.styles=[badgeStyle],__decorateClass$S([n({type:String,reflect:!0})],exports.AwcBadge.prototype,"color",2),exports.AwcBadge=__decorateClass$S([t$1("awc-badge")],exports.AwcBadge);const counterStyle=i$4`
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
 `;var __defProp$R=Object.defineProperty,__getOwnPropDesc$R=Object.getOwnPropertyDescriptor,__decorateClass$R=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$R(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$R(O,D,q),q};exports.AwcCounter=class extends s{constructor(){super(...arguments),this.value=1}_checkMaxValue(){return!Number.isInteger(this.value)||this.value<=0?"":this.value>99?"99+":this.value.toString()}update(O){super.update(O),this._checkMaxValue()}render(){const O=this._checkMaxValue();return x`
       <span class="awc-counter" value=${this.value}>${O}</span>
     `}},exports.AwcCounter.styles=[counterStyle],__decorateClass$R([n({type:Number,reflect:!0})],exports.AwcCounter.prototype,"value",2),exports.AwcCounter=__decorateClass$R([t$1("awc-counter")],exports.AwcCounter);const toolbarButtonStyle=i$4`
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
 `;var __defProp$Q=Object.defineProperty,__getOwnPropDesc$Q=Object.getOwnPropertyDescriptor,__decorateClass$Q=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$Q(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$Q(O,D,q),q};exports.AwcToolbarButton=class extends s{render(){return x`
       <button
         type="button"
         tabindex="0" 
         class="awc-toolbar-button">
         <slot></slot>
       </button>
     `}},exports.AwcToolbarButton.styles=[toolbarButtonStyle],exports.AwcToolbarButton=__decorateClass$Q([t$1("awc-toolbar-button")],exports.AwcToolbarButton);const toolbarGroupStyle=i$4`
     :host {
       display: inline-block;
     }
 
     .awc-toolbar-group{
       display: flex;
       align-items: center;
       justify-content: flex-start;
       gap: 8px;
     }
 `;var __defProp$P=Object.defineProperty,__getOwnPropDesc$P=Object.getOwnPropertyDescriptor,__decorateClass$P=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$P(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$P(O,D,q),q};exports.AwcToolbarGroup=class extends s{render(){return x`
       <div class='awc-toolbar-group'>
             <slot></slot>
       </div>
     `}},exports.AwcToolbarGroup.styles=[toolbarGroupStyle],exports.AwcToolbarGroup=__decorateClass$P([t$1("awc-toolbar-group")],exports.AwcToolbarGroup);const dropdownStyle=i$4`
   :host {
     display: var(--awc-dropdown-display, inline-flex);
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
 `,scrollStyle=i$4`
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
 `;var top$1="top",bottom="bottom",right="right",left="left",auto="auto",basePlacements=[top$1,bottom,right,left],start="start",end="end",clippingParents="clippingParents",viewport="viewport",popper="popper",reference="reference",variationPlacements=basePlacements.reduce(function(B,O){return B.concat([O+"-"+start,O+"-"+end])},[]),placements=[].concat(basePlacements,[auto]).reduce(function(B,O){return B.concat([O,O+"-"+start,O+"-"+end])},[]),beforeRead="beforeRead",read$2="read",afterRead="afterRead",beforeMain="beforeMain",main="main",afterMain="afterMain",beforeWrite="beforeWrite",write="write",afterWrite="afterWrite",modifierPhases=[beforeRead,read$2,afterRead,beforeMain,main,afterMain,beforeWrite,write,afterWrite];function getNodeName(B){return B?(B.nodeName||"").toLowerCase():null}function getWindow(B){if(B==null)return window;if(B.toString()!=="[object Window]"){var O=B.ownerDocument;return O&&O.defaultView||window}return B}function isElement(B){var O=getWindow(B).Element;return B instanceof O||B instanceof Element}function isHTMLElement(B){var O=getWindow(B).HTMLElement;return B instanceof O||B instanceof HTMLElement}function isShadowRoot(B){if(typeof ShadowRoot>"u")return!1;var O=getWindow(B).ShadowRoot;return B instanceof O||B instanceof ShadowRoot}function applyStyles(B){var O=B.state;Object.keys(O.elements).forEach(function(D){var F=O.styles[D]||{},q=O.attributes[D]||{},G=O.elements[D];!isHTMLElement(G)||!getNodeName(G)||(Object.assign(G.style,F),Object.keys(q).forEach(function(U){var Y=q[U];Y===!1?G.removeAttribute(U):G.setAttribute(U,Y===!0?"":Y)}))})}function effect$2(B){var O=B.state,D={popper:{position:O.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(O.elements.popper.style,D.popper),O.styles=D,O.elements.arrow&&Object.assign(O.elements.arrow.style,D.arrow),function(){Object.keys(O.elements).forEach(function(F){var q=O.elements[F],G=O.attributes[F]||{},U=Object.keys(O.styles.hasOwnProperty(F)?O.styles[F]:D[F]),Y=U.reduce(function(Q,ne){return Q[ne]="",Q},{});!isHTMLElement(q)||!getNodeName(q)||(Object.assign(q.style,Y),Object.keys(G).forEach(function(Q){q.removeAttribute(Q)}))})}}const applyStyles$1={name:"applyStyles",enabled:!0,phase:"write",fn:applyStyles,effect:effect$2,requires:["computeStyles"]};function getBasePlacement(B){return B.split("-")[0]}var max=Math.max,min=Math.min,round=Math.round;function getUAString(){var B=navigator.userAgentData;return B!=null&&B.brands&&Array.isArray(B.brands)?B.brands.map(function(O){return O.brand+"/"+O.version}).join(" "):navigator.userAgent}function isLayoutViewport(){return!/^((?!chrome|android).)*safari/i.test(getUAString())}function getBoundingClientRect(B,O,D){O===void 0&&(O=!1),D===void 0&&(D=!1);var F=B.getBoundingClientRect(),q=1,G=1;O&&isHTMLElement(B)&&(q=B.offsetWidth>0&&round(F.width)/B.offsetWidth||1,G=B.offsetHeight>0&&round(F.height)/B.offsetHeight||1);var U=isElement(B)?getWindow(B):window,Y=U.visualViewport,Q=!isLayoutViewport()&&D,ne=(F.left+(Q&&Y?Y.offsetLeft:0))/q,oe=(F.top+(Q&&Y?Y.offsetTop:0))/G,ce=F.width/q,fe=F.height/G;return{width:ce,height:fe,top:oe,right:ne+ce,bottom:oe+fe,left:ne,x:ne,y:oe}}function getLayoutRect(B){var O=getBoundingClientRect(B),D=B.offsetWidth,F=B.offsetHeight;return Math.abs(O.width-D)<=1&&(D=O.width),Math.abs(O.height-F)<=1&&(F=O.height),{x:B.offsetLeft,y:B.offsetTop,width:D,height:F}}function contains(B,O){var D=O.getRootNode&&O.getRootNode();if(B.contains(O))return!0;if(D&&isShadowRoot(D)){var F=O;do{if(F&&B.isSameNode(F))return!0;F=F.parentNode||F.host}while(F)}return!1}function getComputedStyle(B){return getWindow(B).getComputedStyle(B)}function isTableElement(B){return["table","td","th"].indexOf(getNodeName(B))>=0}function getDocumentElement(B){return((isElement(B)?B.ownerDocument:B.document)||window.document).documentElement}function getParentNode(B){return getNodeName(B)==="html"?B:B.assignedSlot||B.parentNode||(isShadowRoot(B)?B.host:null)||getDocumentElement(B)}function getTrueOffsetParent(B){return!isHTMLElement(B)||getComputedStyle(B).position==="fixed"?null:B.offsetParent}function getContainingBlock(B){var O=/firefox/i.test(getUAString()),D=/Trident/i.test(getUAString());if(D&&isHTMLElement(B)){var F=getComputedStyle(B);if(F.position==="fixed")return null}var q=getParentNode(B);for(isShadowRoot(q)&&(q=q.host);isHTMLElement(q)&&["html","body"].indexOf(getNodeName(q))<0;){var G=getComputedStyle(q);if(G.transform!=="none"||G.perspective!=="none"||G.contain==="paint"||["transform","perspective"].indexOf(G.willChange)!==-1||O&&G.willChange==="filter"||O&&G.filter&&G.filter!=="none")return q;q=q.parentNode}return null}function getOffsetParent(B){for(var O=getWindow(B),D=getTrueOffsetParent(B);D&&isTableElement(D)&&getComputedStyle(D).position==="static";)D=getTrueOffsetParent(D);return D&&(getNodeName(D)==="html"||getNodeName(D)==="body"&&getComputedStyle(D).position==="static")?O:D||getContainingBlock(B)||O}function getMainAxisFromPlacement(B){return["top","bottom"].indexOf(B)>=0?"x":"y"}function within(B,O,D){return max(B,min(O,D))}function withinMaxClamp(B,O,D){var F=within(B,O,D);return F>D?D:F}function getFreshSideObject(){return{top:0,right:0,bottom:0,left:0}}function mergePaddingObject(B){return Object.assign({},getFreshSideObject(),B)}function expandToHashMap(B,O){return O.reduce(function(D,F){return D[F]=B,D},{})}var toPaddingObject=function(O,D){return O=typeof O=="function"?O(Object.assign({},D.rects,{placement:D.placement})):O,mergePaddingObject(typeof O!="number"?O:expandToHashMap(O,basePlacements))};function arrow(B){var O,D=B.state,F=B.name,q=B.options,G=D.elements.arrow,U=D.modifiersData.popperOffsets,Y=getBasePlacement(D.placement),Q=getMainAxisFromPlacement(Y),ne=[left,right].indexOf(Y)>=0,oe=ne?"height":"width";if(!(!G||!U)){var ce=toPaddingObject(q.padding,D),fe=getLayoutRect(G),we=Q==="y"?top$1:left,X=Q==="y"?bottom:right,ve=D.rects.reference[oe]+D.rects.reference[Q]-U[Q]-D.rects.popper[oe],de=U[Q]-D.rects.reference[Q],Ae=getOffsetParent(G),Se=Ae?Q==="y"?Ae.clientHeight||0:Ae.clientWidth||0:0,Pe=ve/2-de/2,ke=ce[we],ye=Se-fe[oe]-ce[X],be=Se/2-fe[oe]/2+Pe,Te=within(ke,be,ye),Ie=Q;D.modifiersData[F]=(O={},O[Ie]=Te,O.centerOffset=Te-be,O)}}function effect$1(B){var O=B.state,D=B.options,F=D.element,q=F===void 0?"[data-popper-arrow]":F;q!=null&&(typeof q=="string"&&(q=O.elements.popper.querySelector(q),!q)||contains(O.elements.popper,q)&&(O.elements.arrow=q))}const arrow$1={name:"arrow",enabled:!0,phase:"main",fn:arrow,effect:effect$1,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function getVariation(B){return B.split("-")[1]}var unsetSides={top:"auto",right:"auto",bottom:"auto",left:"auto"};function roundOffsetsByDPR(B,O){var D=B.x,F=B.y,q=O.devicePixelRatio||1;return{x:round(D*q)/q||0,y:round(F*q)/q||0}}function mapToStyles(B){var O,D=B.popper,F=B.popperRect,q=B.placement,G=B.variation,U=B.offsets,Y=B.position,Q=B.gpuAcceleration,ne=B.adaptive,oe=B.roundOffsets,ce=B.isFixed,fe=U.x,we=fe===void 0?0:fe,X=U.y,ve=X===void 0?0:X,de=typeof oe=="function"?oe({x:we,y:ve}):{x:we,y:ve};we=de.x,ve=de.y;var Ae=U.hasOwnProperty("x"),Se=U.hasOwnProperty("y"),Pe=left,ke=top$1,ye=window;if(ne){var be=getOffsetParent(D),Te="clientHeight",Ie="clientWidth";if(be===getWindow(D)&&(be=getDocumentElement(D),getComputedStyle(be).position!=="static"&&Y==="absolute"&&(Te="scrollHeight",Ie="scrollWidth")),be=be,q===top$1||(q===left||q===right)&&G===end){ke=bottom;var je=ce&&be===ye&&ye.visualViewport?ye.visualViewport.height:be[Te];ve-=je-F.height,ve*=Q?1:-1}if(q===left||(q===top$1||q===bottom)&&G===end){Pe=right;var Be=ce&&be===ye&&ye.visualViewport?ye.visualViewport.width:be[Ie];we-=Be-F.width,we*=Q?1:-1}}var We=Object.assign({position:Y},ne&&unsetSides),et=oe===!0?roundOffsetsByDPR({x:we,y:ve},getWindow(D)):{x:we,y:ve};if(we=et.x,ve=et.y,Q){var Xe;return Object.assign({},We,(Xe={},Xe[ke]=Se?"0":"",Xe[Pe]=Ae?"0":"",Xe.transform=(ye.devicePixelRatio||1)<=1?"translate("+we+"px, "+ve+"px)":"translate3d("+we+"px, "+ve+"px, 0)",Xe))}return Object.assign({},We,(O={},O[ke]=Se?ve+"px":"",O[Pe]=Ae?we+"px":"",O.transform="",O))}function computeStyles(B){var O=B.state,D=B.options,F=D.gpuAcceleration,q=F===void 0?!0:F,G=D.adaptive,U=G===void 0?!0:G,Y=D.roundOffsets,Q=Y===void 0?!0:Y,ne={placement:getBasePlacement(O.placement),variation:getVariation(O.placement),popper:O.elements.popper,popperRect:O.rects.popper,gpuAcceleration:q,isFixed:O.options.strategy==="fixed"};O.modifiersData.popperOffsets!=null&&(O.styles.popper=Object.assign({},O.styles.popper,mapToStyles(Object.assign({},ne,{offsets:O.modifiersData.popperOffsets,position:O.options.strategy,adaptive:U,roundOffsets:Q})))),O.modifiersData.arrow!=null&&(O.styles.arrow=Object.assign({},O.styles.arrow,mapToStyles(Object.assign({},ne,{offsets:O.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:Q})))),O.attributes.popper=Object.assign({},O.attributes.popper,{"data-popper-placement":O.placement})}const computeStyles$1={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:computeStyles,data:{}};var passive={passive:!0};function effect(B){var O=B.state,D=B.instance,F=B.options,q=F.scroll,G=q===void 0?!0:q,U=F.resize,Y=U===void 0?!0:U,Q=getWindow(O.elements.popper),ne=[].concat(O.scrollParents.reference,O.scrollParents.popper);return G&&ne.forEach(function(oe){oe.addEventListener("scroll",D.update,passive)}),Y&&Q.addEventListener("resize",D.update,passive),function(){G&&ne.forEach(function(oe){oe.removeEventListener("scroll",D.update,passive)}),Y&&Q.removeEventListener("resize",D.update,passive)}}const eventListeners={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect,data:{}};var hash$1={left:"right",right:"left",bottom:"top",top:"bottom"};function getOppositePlacement(B){return B.replace(/left|right|bottom|top/g,function(O){return hash$1[O]})}var hash={start:"end",end:"start"};function getOppositeVariationPlacement(B){return B.replace(/start|end/g,function(O){return hash[O]})}function getWindowScroll(B){var O=getWindow(B),D=O.pageXOffset,F=O.pageYOffset;return{scrollLeft:D,scrollTop:F}}function getWindowScrollBarX(B){return getBoundingClientRect(getDocumentElement(B)).left+getWindowScroll(B).scrollLeft}function getViewportRect(B,O){var D=getWindow(B),F=getDocumentElement(B),q=D.visualViewport,G=F.clientWidth,U=F.clientHeight,Y=0,Q=0;if(q){G=q.width,U=q.height;var ne=isLayoutViewport();(ne||!ne&&O==="fixed")&&(Y=q.offsetLeft,Q=q.offsetTop)}return{width:G,height:U,x:Y+getWindowScrollBarX(B),y:Q}}function getDocumentRect(B){var O,D=getDocumentElement(B),F=getWindowScroll(B),q=(O=B.ownerDocument)==null?void 0:O.body,G=max(D.scrollWidth,D.clientWidth,q?q.scrollWidth:0,q?q.clientWidth:0),U=max(D.scrollHeight,D.clientHeight,q?q.scrollHeight:0,q?q.clientHeight:0),Y=-F.scrollLeft+getWindowScrollBarX(B),Q=-F.scrollTop;return getComputedStyle(q||D).direction==="rtl"&&(Y+=max(D.clientWidth,q?q.clientWidth:0)-G),{width:G,height:U,x:Y,y:Q}}function isScrollParent(B){var O=getComputedStyle(B),D=O.overflow,F=O.overflowX,q=O.overflowY;return/auto|scroll|overlay|hidden/.test(D+q+F)}function getScrollParent(B){return["html","body","#document"].indexOf(getNodeName(B))>=0?B.ownerDocument.body:isHTMLElement(B)&&isScrollParent(B)?B:getScrollParent(getParentNode(B))}function listScrollParents(B,O){var D;O===void 0&&(O=[]);var F=getScrollParent(B),q=F===((D=B.ownerDocument)==null?void 0:D.body),G=getWindow(F),U=q?[G].concat(G.visualViewport||[],isScrollParent(F)?F:[]):F,Y=O.concat(U);return q?Y:Y.concat(listScrollParents(getParentNode(U)))}function rectToClientRect(B){return Object.assign({},B,{left:B.x,top:B.y,right:B.x+B.width,bottom:B.y+B.height})}function getInnerBoundingClientRect(B,O){var D=getBoundingClientRect(B,!1,O==="fixed");return D.top=D.top+B.clientTop,D.left=D.left+B.clientLeft,D.bottom=D.top+B.clientHeight,D.right=D.left+B.clientWidth,D.width=B.clientWidth,D.height=B.clientHeight,D.x=D.left,D.y=D.top,D}function getClientRectFromMixedType(B,O,D){return O===viewport?rectToClientRect(getViewportRect(B,D)):isElement(O)?getInnerBoundingClientRect(O,D):rectToClientRect(getDocumentRect(getDocumentElement(B)))}function getClippingParents(B){var O=listScrollParents(getParentNode(B)),D=["absolute","fixed"].indexOf(getComputedStyle(B).position)>=0,F=D&&isHTMLElement(B)?getOffsetParent(B):B;return isElement(F)?O.filter(function(q){return isElement(q)&&contains(q,F)&&getNodeName(q)!=="body"}):[]}function getClippingRect(B,O,D,F){var q=O==="clippingParents"?getClippingParents(B):[].concat(O),G=[].concat(q,[D]),U=G[0],Y=G.reduce(function(Q,ne){var oe=getClientRectFromMixedType(B,ne,F);return Q.top=max(oe.top,Q.top),Q.right=min(oe.right,Q.right),Q.bottom=min(oe.bottom,Q.bottom),Q.left=max(oe.left,Q.left),Q},getClientRectFromMixedType(B,U,F));return Y.width=Y.right-Y.left,Y.height=Y.bottom-Y.top,Y.x=Y.left,Y.y=Y.top,Y}function computeOffsets(B){var O=B.reference,D=B.element,F=B.placement,q=F?getBasePlacement(F):null,G=F?getVariation(F):null,U=O.x+O.width/2-D.width/2,Y=O.y+O.height/2-D.height/2,Q;switch(q){case top$1:Q={x:U,y:O.y-D.height};break;case bottom:Q={x:U,y:O.y+O.height};break;case right:Q={x:O.x+O.width,y:Y};break;case left:Q={x:O.x-D.width,y:Y};break;default:Q={x:O.x,y:O.y}}var ne=q?getMainAxisFromPlacement(q):null;if(ne!=null){var oe=ne==="y"?"height":"width";switch(G){case start:Q[ne]=Q[ne]-(O[oe]/2-D[oe]/2);break;case end:Q[ne]=Q[ne]+(O[oe]/2-D[oe]/2);break}}return Q}function detectOverflow(B,O){O===void 0&&(O={});var D=O,F=D.placement,q=F===void 0?B.placement:F,G=D.strategy,U=G===void 0?B.strategy:G,Y=D.boundary,Q=Y===void 0?clippingParents:Y,ne=D.rootBoundary,oe=ne===void 0?viewport:ne,ce=D.elementContext,fe=ce===void 0?popper:ce,we=D.altBoundary,X=we===void 0?!1:we,ve=D.padding,de=ve===void 0?0:ve,Ae=mergePaddingObject(typeof de!="number"?de:expandToHashMap(de,basePlacements)),Se=fe===popper?reference:popper,Pe=B.rects.popper,ke=B.elements[X?Se:fe],ye=getClippingRect(isElement(ke)?ke:ke.contextElement||getDocumentElement(B.elements.popper),Q,oe,U),be=getBoundingClientRect(B.elements.reference),Te=computeOffsets({reference:be,element:Pe,strategy:"absolute",placement:q}),Ie=rectToClientRect(Object.assign({},Pe,Te)),je=fe===popper?Ie:be,Be={top:ye.top-je.top+Ae.top,bottom:je.bottom-ye.bottom+Ae.bottom,left:ye.left-je.left+Ae.left,right:je.right-ye.right+Ae.right},We=B.modifiersData.offset;if(fe===popper&&We){var et=We[q];Object.keys(Be).forEach(function(Xe){var Ke=[right,bottom].indexOf(Xe)>=0?1:-1,ot=[top$1,bottom].indexOf(Xe)>=0?"y":"x";Be[Xe]+=et[ot]*Ke})}return Be}function computeAutoPlacement(B,O){O===void 0&&(O={});var D=O,F=D.placement,q=D.boundary,G=D.rootBoundary,U=D.padding,Y=D.flipVariations,Q=D.allowedAutoPlacements,ne=Q===void 0?placements:Q,oe=getVariation(F),ce=oe?Y?variationPlacements:variationPlacements.filter(function(X){return getVariation(X)===oe}):basePlacements,fe=ce.filter(function(X){return ne.indexOf(X)>=0});fe.length===0&&(fe=ce);var we=fe.reduce(function(X,ve){return X[ve]=detectOverflow(B,{placement:ve,boundary:q,rootBoundary:G,padding:U})[getBasePlacement(ve)],X},{});return Object.keys(we).sort(function(X,ve){return we[X]-we[ve]})}function getExpandedFallbackPlacements(B){if(getBasePlacement(B)===auto)return[];var O=getOppositePlacement(B);return[getOppositeVariationPlacement(B),O,getOppositeVariationPlacement(O)]}function flip(B){var O=B.state,D=B.options,F=B.name;if(!O.modifiersData[F]._skip){for(var q=D.mainAxis,G=q===void 0?!0:q,U=D.altAxis,Y=U===void 0?!0:U,Q=D.fallbackPlacements,ne=D.padding,oe=D.boundary,ce=D.rootBoundary,fe=D.altBoundary,we=D.flipVariations,X=we===void 0?!0:we,ve=D.allowedAutoPlacements,de=O.options.placement,Ae=getBasePlacement(de),Se=Ae===de,Pe=Q||(Se||!X?[getOppositePlacement(de)]:getExpandedFallbackPlacements(de)),ke=[de].concat(Pe).reduce(function(Me,tt){return Me.concat(getBasePlacement(tt)===auto?computeAutoPlacement(O,{placement:tt,boundary:oe,rootBoundary:ce,padding:ne,flipVariations:X,allowedAutoPlacements:ve}):tt)},[]),ye=O.rects.reference,be=O.rects.popper,Te=new Map,Ie=!0,je=ke[0],Be=0;Be<ke.length;Be++){var We=ke[Be],et=getBasePlacement(We),Xe=getVariation(We)===start,Ke=[top$1,bottom].indexOf(et)>=0,ot=Ke?"width":"height",Je=detectOverflow(O,{placement:We,boundary:oe,rootBoundary:ce,altBoundary:fe,padding:ne}),Ze=Ke?Xe?right:left:Xe?bottom:top$1;ye[ot]>be[ot]&&(Ze=getOppositePlacement(Ze));var vt=getOppositePlacement(Ze),lt=[];if(G&&lt.push(Je[et]<=0),Y&&lt.push(Je[Ze]<=0,Je[vt]<=0),lt.every(function(Me){return Me})){je=We,Ie=!1;break}Te.set(We,lt)}if(Ie)for(var ht=X?3:1,st=function(tt){var Ht=ke.find(function(jt){var Ot=Te.get(jt);if(Ot)return Ot.slice(0,tt).every(function(Jt){return Jt})});if(Ht)return je=Ht,"break"},ft=ht;ft>0;ft--){var bt=st(ft);if(bt==="break")break}O.placement!==je&&(O.modifiersData[F]._skip=!0,O.placement=je,O.reset=!0)}}const flip$1={name:"flip",enabled:!0,phase:"main",fn:flip,requiresIfExists:["offset"],data:{_skip:!1}};function getSideOffsets(B,O,D){return D===void 0&&(D={x:0,y:0}),{top:B.top-O.height-D.y,right:B.right-O.width+D.x,bottom:B.bottom-O.height+D.y,left:B.left-O.width-D.x}}function isAnySideFullyClipped(B){return[top$1,right,bottom,left].some(function(O){return B[O]>=0})}function hide(B){var O=B.state,D=B.name,F=O.rects.reference,q=O.rects.popper,G=O.modifiersData.preventOverflow,U=detectOverflow(O,{elementContext:"reference"}),Y=detectOverflow(O,{altBoundary:!0}),Q=getSideOffsets(U,F),ne=getSideOffsets(Y,q,G),oe=isAnySideFullyClipped(Q),ce=isAnySideFullyClipped(ne);O.modifiersData[D]={referenceClippingOffsets:Q,popperEscapeOffsets:ne,isReferenceHidden:oe,hasPopperEscaped:ce},O.attributes.popper=Object.assign({},O.attributes.popper,{"data-popper-reference-hidden":oe,"data-popper-escaped":ce})}const hide$1={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:hide};function distanceAndSkiddingToXY(B,O,D){var F=getBasePlacement(B),q=[left,top$1].indexOf(F)>=0?-1:1,G=typeof D=="function"?D(Object.assign({},O,{placement:B})):D,U=G[0],Y=G[1];return U=U||0,Y=(Y||0)*q,[left,right].indexOf(F)>=0?{x:Y,y:U}:{x:U,y:Y}}function offset(B){var O=B.state,D=B.options,F=B.name,q=D.offset,G=q===void 0?[0,0]:q,U=placements.reduce(function(oe,ce){return oe[ce]=distanceAndSkiddingToXY(ce,O.rects,G),oe},{}),Y=U[O.placement],Q=Y.x,ne=Y.y;O.modifiersData.popperOffsets!=null&&(O.modifiersData.popperOffsets.x+=Q,O.modifiersData.popperOffsets.y+=ne),O.modifiersData[F]=U}const offset$1={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:offset};function popperOffsets(B){var O=B.state,D=B.name;O.modifiersData[D]=computeOffsets({reference:O.rects.reference,element:O.rects.popper,strategy:"absolute",placement:O.placement})}const popperOffsets$1={name:"popperOffsets",enabled:!0,phase:"read",fn:popperOffsets,data:{}};function getAltAxis(B){return B==="x"?"y":"x"}function preventOverflow(B){var O=B.state,D=B.options,F=B.name,q=D.mainAxis,G=q===void 0?!0:q,U=D.altAxis,Y=U===void 0?!1:U,Q=D.boundary,ne=D.rootBoundary,oe=D.altBoundary,ce=D.padding,fe=D.tether,we=fe===void 0?!0:fe,X=D.tetherOffset,ve=X===void 0?0:X,de=detectOverflow(O,{boundary:Q,rootBoundary:ne,padding:ce,altBoundary:oe}),Ae=getBasePlacement(O.placement),Se=getVariation(O.placement),Pe=!Se,ke=getMainAxisFromPlacement(Ae),ye=getAltAxis(ke),be=O.modifiersData.popperOffsets,Te=O.rects.reference,Ie=O.rects.popper,je=typeof ve=="function"?ve(Object.assign({},O.rects,{placement:O.placement})):ve,Be=typeof je=="number"?{mainAxis:je,altAxis:je}:Object.assign({mainAxis:0,altAxis:0},je),We=O.modifiersData.offset?O.modifiersData.offset[O.placement]:null,et={x:0,y:0};if(be){if(G){var Xe,Ke=ke==="y"?top$1:left,ot=ke==="y"?bottom:right,Je=ke==="y"?"height":"width",Ze=be[ke],vt=Ze+de[Ke],lt=Ze-de[ot],ht=we?-Ie[Je]/2:0,st=Se===start?Te[Je]:Ie[Je],ft=Se===start?-Ie[Je]:-Te[Je],bt=O.elements.arrow,Me=we&&bt?getLayoutRect(bt):{width:0,height:0},tt=O.modifiersData["arrow#persistent"]?O.modifiersData["arrow#persistent"].padding:getFreshSideObject(),Ht=tt[Ke],jt=tt[ot],Ot=within(0,Te[Je],Me[Je]),Jt=Pe?Te[Je]/2-ht-Ot-Ht-Be.mainAxis:st-Ot-Ht-Be.mainAxis,Ft=Pe?-Te[Je]/2+ht+Ot+jt+Be.mainAxis:ft+Ot+jt+Be.mainAxis,At=O.elements.arrow&&getOffsetParent(O.elements.arrow),Vt=At?ke==="y"?At.clientTop||0:At.clientLeft||0:0,rr=(Xe=We==null?void 0:We[ke])!=null?Xe:0,hr=Ze+Jt-rr-Vt,fr=Ze+Ft-rr,nr=within(we?min(vt,hr):vt,Ze,we?max(lt,fr):lt);be[ke]=nr,et[ke]=nr-Ze}if(Y){var gt,ut=ke==="x"?top$1:left,ir=ke==="x"?bottom:right,Tt=be[ye],qt=ye==="y"?"height":"width",gr=Tt+de[ut],vr=Tt-de[ir],Yt=[top$1,left].indexOf(Ae)!==-1,zt=(gt=We==null?void 0:We[ye])!=null?gt:0,Pt=Yt?gr:Tt-Te[qt]-Ie[qt]-zt+Be.altAxis,or=Yt?Tt+Te[qt]+Ie[qt]-zt-Be.altAxis:vr,Qt=we&&Yt?withinMaxClamp(Pt,Tt,or):within(we?Pt:gr,Tt,we?or:vr);be[ye]=Qt,et[ye]=Qt-Tt}O.modifiersData[F]=et}}const preventOverflow$1={name:"preventOverflow",enabled:!0,phase:"main",fn:preventOverflow,requiresIfExists:["offset"]};function getHTMLElementScroll(B){return{scrollLeft:B.scrollLeft,scrollTop:B.scrollTop}}function getNodeScroll(B){return B===getWindow(B)||!isHTMLElement(B)?getWindowScroll(B):getHTMLElementScroll(B)}function isElementScaled(B){var O=B.getBoundingClientRect(),D=round(O.width)/B.offsetWidth||1,F=round(O.height)/B.offsetHeight||1;return D!==1||F!==1}function getCompositeRect(B,O,D){D===void 0&&(D=!1);var F=isHTMLElement(O),q=isHTMLElement(O)&&isElementScaled(O),G=getDocumentElement(O),U=getBoundingClientRect(B,q,D),Y={scrollLeft:0,scrollTop:0},Q={x:0,y:0};return(F||!F&&!D)&&((getNodeName(O)!=="body"||isScrollParent(G))&&(Y=getNodeScroll(O)),isHTMLElement(O)?(Q=getBoundingClientRect(O,!0),Q.x+=O.clientLeft,Q.y+=O.clientTop):G&&(Q.x=getWindowScrollBarX(G))),{x:U.left+Y.scrollLeft-Q.x,y:U.top+Y.scrollTop-Q.y,width:U.width,height:U.height}}function order(B){var O=new Map,D=new Set,F=[];B.forEach(function(G){O.set(G.name,G)});function q(G){D.add(G.name);var U=[].concat(G.requires||[],G.requiresIfExists||[]);U.forEach(function(Y){if(!D.has(Y)){var Q=O.get(Y);Q&&q(Q)}}),F.push(G)}return B.forEach(function(G){D.has(G.name)||q(G)}),F}function orderModifiers(B){var O=order(B);return modifierPhases.reduce(function(D,F){return D.concat(O.filter(function(q){return q.phase===F}))},[])}function debounce(B){var O;return function(){return O||(O=new Promise(function(D){Promise.resolve().then(function(){O=void 0,D(B())})})),O}}function mergeByName(B){var O=B.reduce(function(D,F){var q=D[F.name];return D[F.name]=q?Object.assign({},q,F,{options:Object.assign({},q.options,F.options),data:Object.assign({},q.data,F.data)}):F,D},{});return Object.keys(O).map(function(D){return O[D]})}var DEFAULT_OPTIONS={placement:"bottom",modifiers:[],strategy:"absolute"};function areValidElements(){for(var B=arguments.length,O=new Array(B),D=0;D<B;D++)O[D]=arguments[D];return!O.some(function(F){return!(F&&typeof F.getBoundingClientRect=="function")})}function popperGenerator(B){B===void 0&&(B={});var O=B,D=O.defaultModifiers,F=D===void 0?[]:D,q=O.defaultOptions,G=q===void 0?DEFAULT_OPTIONS:q;return function(Y,Q,ne){ne===void 0&&(ne=G);var oe={placement:"bottom",orderedModifiers:[],options:Object.assign({},DEFAULT_OPTIONS,G),modifiersData:{},elements:{reference:Y,popper:Q},attributes:{},styles:{}},ce=[],fe=!1,we={state:oe,setOptions:function(Ae){var Se=typeof Ae=="function"?Ae(oe.options):Ae;ve(),oe.options=Object.assign({},G,oe.options,Se),oe.scrollParents={reference:isElement(Y)?listScrollParents(Y):Y.contextElement?listScrollParents(Y.contextElement):[],popper:listScrollParents(Q)};var Pe=orderModifiers(mergeByName([].concat(F,oe.options.modifiers)));return oe.orderedModifiers=Pe.filter(function(ke){return ke.enabled}),X(),we.update()},forceUpdate:function(){if(!fe){var Ae=oe.elements,Se=Ae.reference,Pe=Ae.popper;if(areValidElements(Se,Pe)){oe.rects={reference:getCompositeRect(Se,getOffsetParent(Pe),oe.options.strategy==="fixed"),popper:getLayoutRect(Pe)},oe.reset=!1,oe.placement=oe.options.placement,oe.orderedModifiers.forEach(function(Be){return oe.modifiersData[Be.name]=Object.assign({},Be.data)});for(var ke=0;ke<oe.orderedModifiers.length;ke++){if(oe.reset===!0){oe.reset=!1,ke=-1;continue}var ye=oe.orderedModifiers[ke],be=ye.fn,Te=ye.options,Ie=Te===void 0?{}:Te,je=ye.name;typeof be=="function"&&(oe=be({state:oe,options:Ie,name:je,instance:we})||oe)}}}},update:debounce(function(){return new Promise(function(de){we.forceUpdate(),de(oe)})}),destroy:function(){ve(),fe=!0}};if(!areValidElements(Y,Q))return we;we.setOptions(ne).then(function(de){!fe&&ne.onFirstUpdate&&ne.onFirstUpdate(de)});function X(){oe.orderedModifiers.forEach(function(de){var Ae=de.name,Se=de.options,Pe=Se===void 0?{}:Se,ke=de.effect;if(typeof ke=="function"){var ye=ke({state:oe,name:Ae,instance:we,options:Pe}),be=function(){};ce.push(ye||be)}})}function ve(){ce.forEach(function(de){return de()}),ce=[]}return we}}var defaultModifiers=[eventListeners,popperOffsets$1,computeStyles$1,applyStyles$1,offset$1,flip$1,preventOverflow$1,arrow$1,hide$1],createPopper=popperGenerator({defaultModifiers});const dropdownItemStyle=i$4`
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
 `;var __defProp$O=Object.defineProperty,__getOwnPropDesc$O=Object.getOwnPropertyDescriptor,__decorateClass$O=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$O(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$O(O,D,q),q};const awcDropdownItemTag="awc-dropdown-item";exports.AwcDropdownItem=class extends s{constructor(){super(...arguments),this.target="_self",this.selected=!1}focus(){this._dropdownItem.focus()}render(){return this.href?x`<a
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
       `}},exports.AwcDropdownItem.styles=[scrollStyle,dropdownItemStyle],__decorateClass$O([n({type:String})],exports.AwcDropdownItem.prototype,"href",2),__decorateClass$O([n({type:String})],exports.AwcDropdownItem.prototype,"target",2),__decorateClass$O([n({type:Boolean,reflect:!0})],exports.AwcDropdownItem.prototype,"selected",2),__decorateClass$O([e$5(".awc-dropdown-item")],exports.AwcDropdownItem.prototype,"_dropdownItem",2),exports.AwcDropdownItem=__decorateClass$O([t$1(awcDropdownItemTag)],exports.AwcDropdownItem);var __defProp$N=Object.defineProperty,__getOwnPropDesc$N=Object.getOwnPropertyDescriptor,__decorateClass$N=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$N(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$N(O,D,q),q};exports.AwcDropdown=class extends s{constructor(){super(...arguments),this.notClosing=!1,this.visible=!1,this.selectedMode=!1,this.position="bottom-start",this.strategy="absolute",this.disabled=!1,this.scrollOff=!1,this.popperInstance=null,this._handleOutsideClick=O=>{this.contains(O.target)||this.close()},this.focusedOptionIndex=-1}_createPopperInstance(){this._nestedElement&&this._dropdownList&&(this.popperInstance=createPopper(this._nestedElement,this._dropdownList,{placement:this.position,modifiers:[{name:"offset",options:{offset:[0,8]}}],strategy:this.strategy}))}_destroyPopperInstance(){var O;(O=this.popperInstance)==null||O.destroy(),this.popperInstance=null}_setupPopover(){this.disabled||(this._createPopperInstance(),this._addOutsideClickHandler())}_disconnectPopover(){this.disabled||(this._removeOutsideClickHandler(),this._destroyPopperInstance())}_addOutsideClickHandler(){setTimeout(()=>{document.addEventListener("click",this._handleOutsideClick)},0)}_removeOutsideClickHandler(){document.removeEventListener("click",this._handleOutsideClick)}open(){this.visible=!0,this._onOpen({visible:this.visible})}close(){this.visible=!1,this.focusedOptionIndex=-1,this._onClose({visible:this.visible})}_handleDropdown(O){O.target&&this.options.length&&(this.visible?this.close():this.open())}get options(){return[...this.querySelectorAll(awcDropdownItemTag)]}handleKeyDown(O){if(this.options.length){if(["ArrowDown","ArrowRight"].includes(O.key))this.focusedOptionIndex++;else if(["ArrowUp","ArrowLeft"].includes(O.key))this.focusedOptionIndex--;else if(O.key==="Escape"){this.focusedOptionIndex=-1,this.close();return}else return;this.focusedOptionIndex=Math.max(0,Math.min(this.focusedOptionIndex,this.options.length-1)),this.options[this.focusedOptionIndex].focus(),O.preventDefault()}}_selectedModeHandle(O){const D=O.target;this.selectedMode&&(D.selected=!D.selected),D&&!this.notClosing&&this.close()}_setMinWidth(){this._dropdownList&&(this._dropdownList.style.width=`${this.width}px`)}updated(O){super.updated(O),O.has("notClosing")&&this._updateOutsideClickHandler(),O.has("width")&&this._setMinWidth(),O.has("visible")&&(this.visible?this._setupPopover():this._disconnectPopover())}_updateOutsideClickHandler(){this._removeOutsideClickHandler(),!this.notClosing&&this.visible&&this._addOutsideClickHandler()}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this._removeOutsideClickHandler()}render(){return x`
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
     `}},exports.AwcDropdown.shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0},exports.AwcDropdown.styles=[scrollStyle,dropdownStyle],__decorateClass$N([n({type:Boolean,reflect:!0,attribute:"not-closing"})],exports.AwcDropdown.prototype,"notClosing",2),__decorateClass$N([n({type:Boolean,reflect:!0})],exports.AwcDropdown.prototype,"visible",2),__decorateClass$N([n({type:Number,reflect:!0})],exports.AwcDropdown.prototype,"width",2),__decorateClass$N([n({type:Boolean,reflect:!0,attribute:"selected-mode"})],exports.AwcDropdown.prototype,"selectedMode",2),__decorateClass$N([n({type:String,reflect:!0})],exports.AwcDropdown.prototype,"position",2),__decorateClass$N([n({type:String,reflect:!0})],exports.AwcDropdown.prototype,"strategy",2),__decorateClass$N([n({type:Boolean,reflect:!0})],exports.AwcDropdown.prototype,"disabled",2),__decorateClass$N([n({type:Boolean,reflect:!0,attribute:"scroll-off"})],exports.AwcDropdown.prototype,"scrollOff",2),__decorateClass$N([event("awc-dropdown-open")],exports.AwcDropdown.prototype,"_onOpen",2),__decorateClass$N([event("awc-dropdown-close")],exports.AwcDropdown.prototype,"_onClose",2),__decorateClass$N([e$5("awc-dropdown-list")],exports.AwcDropdown.prototype,"_dropdownList",2),__decorateClass$N([e$5(".awc-dropdown__nested")],exports.AwcDropdown.prototype,"_nestedElement",2),exports.AwcDropdown=__decorateClass$N([t$1("awc-dropdown")],exports.AwcDropdown);const dropdownListStyle=i$4`
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
 `;var __defProp$M=Object.defineProperty,__getOwnPropDesc$M=Object.getOwnPropertyDescriptor,__decorateClass$M=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$M(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$M(O,D,q),q};const awcDropdownListTag="awc-dropdown-list";exports.AwcDropdownList=class extends s{render(){return x`
       <ul class="awc-dropdown-list">
         <slot></slot>
       </ul>
     `}},exports.AwcDropdownList.styles=[scrollStyle,dropdownListStyle],exports.AwcDropdownList=__decorateClass$M([t$1(awcDropdownListTag)],exports.AwcDropdownList);const dropdownGroupStyle=i$4`
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
 
     .awc-dropdown-group__content{
         margin-top: var(--spacing-xs);
     }
     
 `;var __defProp$L=Object.defineProperty,__getOwnPropDesc$L=Object.getOwnPropertyDescriptor,__decorateClass$L=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$L(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$L(O,D,q),q};const awcDropdownGroupTag="awc-dropdown-group";exports.AwcDropdownGroup=class extends s{constructor(){super(...arguments),this.divider=!1}render(){return x`
             <div class="awc-dropdown-group">
                 <label class="awc-dropdown-group__label">${this.label}</label>
                 <div class="awc-dropdown-group__content">
                     <slot></slot>
                 </div>
             </div>
         `}},exports.AwcDropdownGroup.styles=[scrollStyle,dropdownGroupStyle],__decorateClass$L([n({type:String,reflect:!0})],exports.AwcDropdownGroup.prototype,"label",2),__decorateClass$L([n({type:Boolean,reflect:!0})],exports.AwcDropdownGroup.prototype,"divider",2),exports.AwcDropdownGroup=__decorateClass$L([t$1(awcDropdownGroupTag)],exports.AwcDropdownGroup);var __classPrivateFieldGet=function(B,O,D,F){if(D==="a"&&!F)throw new TypeError("Private accessor was defined without a getter");if(typeof O=="function"?B!==O||!F:!O.has(B))throw new TypeError("Cannot read private member from an object whose class did not declare it");return D==="m"?F:D==="a"?F.call(B):F?F.value:O.get(B)},__classPrivateFieldSet=function(B,O,D,F,q){if(F==="m")throw new TypeError("Private method is not writable");if(F==="a"&&!q)throw new TypeError("Private accessor was defined without a setter");if(typeof O=="function"?B!==O||!q:!O.has(B))throw new TypeError("Cannot write private member to an object whose class did not declare it");return F==="a"?q.call(B,D):q?q.value=D:O.set(B,D),D};function FormControlMixin(B){var O,D,F,q,G,U,Y,Q,ne,oe,ce,fe,we,X,ve,de,Ae,Se;class Pe extends B{constructor(...ye){var be,Te,Ie;super(...ye),O.add(this),this.internals=this.attachInternals(),D.set(this,!1),F.set(this,!1),q.set(this,!1),G.set(this,void 0),U.set(this,void 0),Y.set(this,!0),Q.set(this,""),ne.set(this,()=>{__classPrivateFieldSet(this,q,!0,"f"),__classPrivateFieldSet(this,D,!0,"f"),__classPrivateFieldGet(this,O,"m",ve).call(this)}),oe.set(this,()=>{__classPrivateFieldSet(this,D,!1,"f"),__classPrivateFieldGet(this,O,"m",de).call(this,this.shouldFormValueUpdate()?__classPrivateFieldGet(this,Q,"f"):""),!this.validity.valid&&__classPrivateFieldGet(this,q,"f")&&__classPrivateFieldSet(this,F,!0,"f");const je=__classPrivateFieldGet(this,O,"m",ve).call(this);this.validationMessageCallback&&this.validationMessageCallback(je?this.internals.validationMessage:"")}),ce.set(this,()=>{var je;__classPrivateFieldGet(this,Y,"f")&&this.validationTarget&&(this.internals.setValidity(this.validity,this.validationMessage,this.validationTarget),__classPrivateFieldSet(this,Y,!1,"f")),__classPrivateFieldSet(this,q,!0,"f"),__classPrivateFieldSet(this,F,!0,"f"),__classPrivateFieldGet(this,O,"m",ve).call(this),(je=this===null||this===void 0?void 0:this.validationMessageCallback)===null||je===void 0||je.call(this,this.showError?this.internals.validationMessage:"")}),fe.set(this,void 0),we.set(this,!1),X.set(this,Promise.resolve()),(be=this.addEventListener)===null||be===void 0||be.call(this,"focus",__classPrivateFieldGet(this,ne,"f")),(Te=this.addEventListener)===null||Te===void 0||Te.call(this,"blur",__classPrivateFieldGet(this,oe,"f")),(Ie=this.addEventListener)===null||Ie===void 0||Ie.call(this,"invalid",__classPrivateFieldGet(this,ce,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const ye=this.validators.map(Ie=>Ie.attribute).flat(),be=super.observedAttributes||[];return[...new Set([...be,...ye])]}static getValidator(ye){return this.validators.find(be=>be.attribute===ye)||null}static getValidators(ye){return this.validators.filter(be=>{var Te;if(be.attribute===ye||!((Te=be.attribute)===null||Te===void 0)&&Te.includes(ye))return!0})}get form(){return this.internals.form}get showError(){return __classPrivateFieldGet(this,O,"m",ve).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback(ye,be,Te){var Ie;(Ie=super.attributeChangedCallback)===null||Ie===void 0||Ie.call(this,ye,be,Te);const Be=this.constructor.getValidators(ye);Be!=null&&Be.length&&this.validationTarget&&this.setValue(__classPrivateFieldGet(this,Q,"f"))}setValue(ye){var be;__classPrivateFieldSet(this,F,!1,"f"),(be=this.validationMessageCallback)===null||be===void 0||be.call(this,""),__classPrivateFieldSet(this,Q,ye,"f");const Ie=this.shouldFormValueUpdate()?ye:null;this.internals.setFormValue(Ie),__classPrivateFieldGet(this,O,"m",de).call(this,Ie),this.valueChangedCallback&&this.valueChangedCallback(Ie),__classPrivateFieldGet(this,O,"m",ve).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise(ye=>ye(__classPrivateFieldGet(this,X,"f")))}formResetCallback(){var ye,be;__classPrivateFieldSet(this,q,!1,"f"),__classPrivateFieldSet(this,F,!1,"f"),__classPrivateFieldGet(this,O,"m",ve).call(this),(ye=this.resetFormControl)===null||ye===void 0||ye.call(this),(be=this.validationMessageCallback)===null||be===void 0||be.call(this,__classPrivateFieldGet(this,O,"m",ve).call(this)?this.validationMessage:"")}}return D=new WeakMap,F=new WeakMap,q=new WeakMap,G=new WeakMap,U=new WeakMap,Y=new WeakMap,Q=new WeakMap,ne=new WeakMap,oe=new WeakMap,ce=new WeakMap,fe=new WeakMap,we=new WeakMap,X=new WeakMap,O=new WeakSet,ve=function(){if(this.hasAttribute("disabled"))return!1;const ye=__classPrivateFieldGet(this,F,"f")||__classPrivateFieldGet(this,q,"f")&&!this.validity.valid&&!__classPrivateFieldGet(this,D,"f");return ye&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),ye},de=function(ye){const be=this.constructor,Te={},Ie=be.validators,je=[],Be=Ie.some(Ke=>Ke.isValid instanceof Promise);__classPrivateFieldGet(this,we,"f")||(__classPrivateFieldSet(this,X,new Promise(Ke=>{__classPrivateFieldSet(this,fe,Ke,"f")}),"f"),__classPrivateFieldSet(this,we,!0,"f")),__classPrivateFieldGet(this,G,"f")&&(__classPrivateFieldGet(this,G,"f").abort(),__classPrivateFieldSet(this,U,__classPrivateFieldGet(this,G,"f"),"f"));const We=new AbortController;__classPrivateFieldSet(this,G,We,"f");let et,Xe=!1;Ie.length&&(Ie.forEach(Ke=>{const ot=Ke.key||"customError",Je=Ke.isValid(this,ye,We.signal);Je instanceof Promise?(je.push(Je),Je.then(vt=>{vt!=null&&(Te[ot]=!vt,et=__classPrivateFieldGet(this,O,"m",Se).call(this,Ke,ye),__classPrivateFieldGet(this,O,"m",Ae).call(this,Te,et))})):(Te[ot]=!Je,this.validity[ot]!==!Je&&(Xe=!0),!Je&&!et&&(et=__classPrivateFieldGet(this,O,"m",Se).call(this,Ke,ye)))}),Promise.allSettled(je).then(()=>{var Ke;We!=null&&We.signal.aborted||(__classPrivateFieldSet(this,we,!1,"f"),(Ke=__classPrivateFieldGet(this,fe,"f"))===null||Ke===void 0||Ke.call(this))}),(Xe||!Be)&&__classPrivateFieldGet(this,O,"m",Ae).call(this,Te,et))},Ae=function(ye,be){if(this.validationTarget)this.internals.setValidity(ye,be,this.validationTarget),__classPrivateFieldSet(this,Y,!1,"f");else{if(this.internals.setValidity(ye,be),this.internals.validity.valid)return;__classPrivateFieldSet(this,Y,!0,"f")}},Se=function(ye,be){if(this.validityCallback){const Te=this.validityCallback(ye.key||"customError");if(Te)return Te}return ye.message instanceof Function?ye.message(this,be):ye.message},Pe}const requiredValidator={attribute:"required",key:"valueMissing",message:"Please fill out this field",isValid(B,O){let D=!0;return(B.hasAttribute("required")||B.required)&&!O&&(D=!1),D}},maxLengthValidator={attribute:"maxlength",key:"tooLong",message(B,O){const D=O||"";return`Please use no more than ${B.maxLength} characters (you are currently using ${D.length} characters).`},isValid(B,O){return B.maxLength?!(O&&B.maxLength<O.length):!0}},radioStyle=i$4`
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
 `,radioGroupStyle=i$4`
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
 `;var __defProp$K=Object.defineProperty,__getOwnPropDesc$K=Object.getOwnPropertyDescriptor,__decorateClass$K=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$K(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$K(O,D,q),q};const awcChangeEventName$1="awc-radio-change";exports.AwcRadioGroup=class extends FormControlMixin(s){constructor(){super(...arguments),this.value="",this.name="",this.label="",this.hint="",this.horizontal=!1,this.focusedOptionIndex=0}get options(){return[...this.querySelectorAll(awcRadioTag)]}get availableOptions(){return this.options.filter(O=>!O.disabled)}_handleRadioButton(O){const D=O.target;this.setValue(D.value),this._onChange(D.value)}resetFormControl(){return this.options.forEach(O=>{this.value="",O.checked=!1})}_handleKeyDown(O){if(["ArrowDown","ArrowRight"].includes(O.key))this.focusedOptionIndex++;else if(["ArrowUp","ArrowLeft"].includes(O.key))this.focusedOptionIndex--;else if([" "].includes(O.key)){this.availableOptions[this.focusedOptionIndex].select();return}else return;this.focusedOptionIndex=Math.max(0,Math.min(this.focusedOptionIndex,this.availableOptions.length-1)),this.availableOptions[this.focusedOptionIndex].focus(),O.preventDefault()}_handleFocus(){this.availableOptions[this.focusedOptionIndex].focus()}updated(O){super.updated(O),O.has("value")&&this.setValue(this.value)}_setupAwcRadioValues(){this.options.forEach(O=>{O.checked&&(this.value=O.value)})}connectedCallback(){super.connectedCallback(),this.tabIndex=0,this.addEventListener("focus",this._handleFocus),this.addEventListener("keydown",this._handleKeyDown),this._setupAwcRadioValues(),document.addEventListener("DOMContentLoaded",()=>{this._setupAwcRadioValues()})}render(){return x`
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
     `}},exports.AwcRadioGroup.styles=[radioGroupStyle],__decorateClass$K([n({type:String})],exports.AwcRadioGroup.prototype,"value",2),__decorateClass$K([n({type:String,reflect:!0})],exports.AwcRadioGroup.prototype,"name",2),__decorateClass$K([n({type:String,reflect:!0})],exports.AwcRadioGroup.prototype,"label",2),__decorateClass$K([n({type:String,reflect:!0})],exports.AwcRadioGroup.prototype,"hint",2),__decorateClass$K([n({type:Boolean,reflect:!0})],exports.AwcRadioGroup.prototype,"horizontal",2),__decorateClass$K([event(awcChangeEventName$1)],exports.AwcRadioGroup.prototype,"_onChange",2),exports.AwcRadioGroup=__decorateClass$K([t$1("awc-radio-group")],exports.AwcRadioGroup);var __defProp$J=Object.defineProperty,__getOwnPropDesc$J=Object.getOwnPropertyDescriptor,__decorateClass$J=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$J(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$J(O,D,q),q};const awcRadioTag="awc-radio";exports.AwcRadio=class extends FormControlMixin(s){constructor(){super(...arguments),this.staticError=!1,this.disabled=!1,this.size="regular",this.checked=!1,this.required=!1,this.validationMessage="",this._handleFieldValueChange=O=>{const D=O.detail;this.checked=D===this.value},this._onChange=()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},this._onInvalid=O=>{O.preventDefault(),this.validationTarget.focus()}}validityCallback(){const O=document.createElement("input");return O.type="radio",O.name="name",O.required=this.required,O.validationMessage}validationMessageCallback(O){this.customError&&!this.staticError?(this.validationMessage=O,this.validationMessage=this.customError):this.validationMessage=O}shouldFormValueUpdate(){return this.checked}connectedCallback(){super.connectedCallback(),this.addEventListener("invalid",this._onInvalid),this._setupFieldListener()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._onInvalid),this._cleanupFieldListener()}_setupFieldListener(){var O;this.field=this.closest("awc-radio-group"),this.field||console.warn("awc-radio is designed to be used inside an awc-radio-group",this),(O=this.field)==null||O.addEventListener(awcChangeEventName$1,this._handleFieldValueChange)}_cleanupFieldListener(){var O;(O=this.field)==null||O.removeEventListener(awcChangeEventName$1,this._handleFieldValueChange)}select(){this.checked=!0,this._onChecked(this.value),this._onChange()}focus(){this._radioElement.tabIndex=0,this._radioElement.focus(),this._onFocus(this.value)}blur(){this._radioElement.tabIndex=-1,this._onBlur(this.value)}_settingCustomColor(){this.customColor&&this.style.setProperty("--awc-radio-custom-color",this.customColor)}updated(O){super.updated(O),(O.has("checked")||O.has("value"))&&this.setValue(this.value),O.has("customColor")&&this._settingCustomColor()}render(){const O=e$2({"awc-radio":!0,checked:this.checked}),D={"awc-radio__label":!0,"radio--error":this.showError&&!this.checked||this.staticError&&this.required};return x`
       <div class="awc-radio__wrapper">
         <div class="awc-radio__container">
           <span
             tabindex="0"
             class="${O}"
             role="radio"
             aria-checked=${this.checked}
             aria-required=${this.required}
             aria-disabled=${this.disabled}
             aria-labelledby="label"
             @blur=${this.blur}
             @click=${this.select}
           >
             <p id="label" class="${e$2(D)}">${this.label}</p>
           </span>
         </div>
 
         ${this.showError&&this.required&&!this.staticError?x`<span class="awc-radio__error"
               >${this.validationMessage}</span
             >`:""}
         ${this.staticError&&this.required&&this.customError?x`<span class="awc-radio__error">${this.customError}</span>`:""}
       </div>
     `}},exports.AwcRadio.shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0},exports.AwcRadio.formControlValidators=[requiredValidator],exports.AwcRadio.styles=[radioStyle],__decorateClass$J([n({type:String,reflect:!0})],exports.AwcRadio.prototype,"name",2),__decorateClass$J([n({type:String,reflect:!0})],exports.AwcRadio.prototype,"value",2),__decorateClass$J([n({type:String,reflect:!0})],exports.AwcRadio.prototype,"label",2),__decorateClass$J([n({reflect:!0,attribute:"custom-error"})],exports.AwcRadio.prototype,"customError",2),__decorateClass$J([n({type:Boolean,reflect:!0,attribute:"static-error"})],exports.AwcRadio.prototype,"staticError",2),__decorateClass$J([n({type:Boolean,reflect:!0})],exports.AwcRadio.prototype,"disabled",2),__decorateClass$J([n({reflect:!0})],exports.AwcRadio.prototype,"size",2),__decorateClass$J([n({type:Boolean,reflect:!0})],exports.AwcRadio.prototype,"checked",2),__decorateClass$J([n({type:Boolean,reflect:!0})],exports.AwcRadio.prototype,"required",2),__decorateClass$J([n({reflect:!0,attribute:"custom-color"})],exports.AwcRadio.prototype,"customColor",2),__decorateClass$J([event("awc-checked")],exports.AwcRadio.prototype,"_onChecked",2),__decorateClass$J([event("awc-focus")],exports.AwcRadio.prototype,"_onFocus",2),__decorateClass$J([event("awc-blur")],exports.AwcRadio.prototype,"_onBlur",2),__decorateClass$J([e$5("[role=radio]")],exports.AwcRadio.prototype,"_radioElement",2),__decorateClass$J([e$5("[role=radio]")],exports.AwcRadio.prototype,"validationTarget",2),__decorateClass$J([r$1()],exports.AwcRadio.prototype,"validationMessage",2),exports.AwcRadio=__decorateClass$J([t$1(awcRadioTag)],exports.AwcRadio);const PolyfilledSubmitEvent=globalThis.SubmitEvent=typeof globalThis.SubmitEvent<"u"?SubmitEvent:Event,submit=B=>{if(!(!B.noValidate&&!B.reportValidity())){const O=new PolyfilledSubmitEvent("submit",{bubbles:!0,cancelable:!0});B.dispatchEvent(O),O.defaultPrevented||B.submit()}},buttonStyle=i$4`
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
 `,spinnerStyle=i$4`
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
 
 `;var __defProp$I=Object.defineProperty,__getOwnPropDesc$I=Object.getOwnPropertyDescriptor,__decorateClass$I=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$I(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$I(O,D,q),q};const awcSpinnerTag="awc-spinner";exports.AwcSpinner=class extends s{constructor(){super(...arguments),this.size="m",this.variant="primary"}render(){return x`
             <div class="awc-spinner"></div>
         `}},exports.AwcSpinner.styles=[spinnerStyle],__decorateClass$I([n({type:String,reflect:!0})],exports.AwcSpinner.prototype,"size",2),__decorateClass$I([n({type:String,reflect:!0})],exports.AwcSpinner.prototype,"variant",2),exports.AwcSpinner=__decorateClass$I([t$1(awcSpinnerTag)],exports.AwcSpinner);var __defProp$H=Object.defineProperty,__getOwnPropDesc$H=Object.getOwnPropertyDescriptor,__decorateClass$H=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$H(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$H(O,D,q),q};const awcButtonTag="awc-button";exports.AwcButton=class extends s{constructor(){super(...arguments),this.background="blue",this.size="regular",this.variant="primary",this.type="submit",this.target="_self",this.disabled=!1,this.filling=!1,this.loading=!1,this.autofocus=!1}get spinner(){return this.querySelector(awcSpinnerTag)}focus(){this.button.focus()}_handleButtonClick(){const O=this.closest("form");O&&(this.type==="submit"?submit(O):this.type==="reset"&&O.reset())}_renderSpinner(){const O=this.variant==="primary"?"secondary":"primary";return x`<awc-spinner size="s" variant=${O}></awc-spinner>`}_settingCurrentSpinnerVariant(){this.spinner?(this.button.classList.add("awc-button--disable"),this.variant==="primary"?this.spinner.variant="secondary":this.spinner.variant="primary"):this.button.classList.remove("awc-button--disable")}_checkingSpinnerInSlot(){this.spinner?this._settingCurrentSpinnerVariant():this.button.classList.remove("awc-button--disable")}updated(O){super.updated(O),O.has("variant")&&this._settingCurrentSpinnerVariant()}render(){const O=x`
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
        ${O}
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
       ${O}
      </a>
     `;return this.href?F:D}},exports.AwcButton.styles=[buttonStyle],__decorateClass$H([n({type:String,reflect:!0})],exports.AwcButton.prototype,"name",2),__decorateClass$H([n({type:String,reflect:!0})],exports.AwcButton.prototype,"value",2),__decorateClass$H([n({type:String,reflect:!0})],exports.AwcButton.prototype,"background",2),__decorateClass$H([n({type:String,reflect:!0})],exports.AwcButton.prototype,"size",2),__decorateClass$H([n({type:String,reflect:!0})],exports.AwcButton.prototype,"variant",2),__decorateClass$H([n({type:String,reflect:!0})],exports.AwcButton.prototype,"type",2),__decorateClass$H([n({type:String})],exports.AwcButton.prototype,"target",2),__decorateClass$H([n({type:String,reflect:!0})],exports.AwcButton.prototype,"href",2),__decorateClass$H([n({type:Boolean,reflect:!0})],exports.AwcButton.prototype,"disabled",2),__decorateClass$H([n({type:Boolean,reflect:!0})],exports.AwcButton.prototype,"filling",2),__decorateClass$H([n({type:Boolean,reflect:!0})],exports.AwcButton.prototype,"loading",2),__decorateClass$H([n({type:Boolean,reflect:!0})],exports.AwcButton.prototype,"autofocus",2),__decorateClass$H([r$1()],exports.AwcButton.prototype,"pointerEvent",2),__decorateClass$H([e$5(".awc-button")],exports.AwcButton.prototype,"button",2),exports.AwcButton=__decorateClass$H([t$1(awcButtonTag)],exports.AwcButton);/**
  * @license
  * Copyright 2020 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const f=B=>B.strings===void 0,u$1={},m=(B,O=u$1)=>B._$AH=O;/**
  * @license
  * Copyright 2020 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const l$1=e$3(class extends i$1{constructor(B){if(super(B),B.type!==t.PROPERTY&&B.type!==t.ATTRIBUTE&&B.type!==t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!f(B))throw Error("`live` bindings can only contain a single expression")}render(B){return B}update(B,[O]){if(O===w||O===T)return O;const D=B.element,F=B.name;if(B.type===t.PROPERTY){if(O===D[F])return w}else if(B.type===t.BOOLEAN_ATTRIBUTE){if(!!O===D.hasAttribute(F))return w}else if(B.type===t.ATTRIBUTE&&D.getAttribute(F)===O+"")return w;return m(B),O}}),checkboxStyle=i$4`
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
 `;var __defProp$G=Object.defineProperty,__getOwnPropDesc$G=Object.getOwnPropertyDescriptor,__decorateClass$G=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$G(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$G(O,D,q),q};const awcCheckboxTag="awc-checkbox";exports.AwcCheckbox=class extends FormControlMixin(s){constructor(){super(...arguments),this.label="",this.name="",this.checked=!1,this.required=!1,this.disabled=!1,this.indeterminate=!1,this.staticError=!1,this.customError="",this.size="regular",this.validationMessage="",this._handleFieldValueChange=O=>{this.checked=O.detail.includes(this.value)},this._onInvalid=O=>{O.preventDefault(),this.validationTarget.focus()}}validityCallback(){var O;return(O=this.validationTarget)==null?void 0:O.validationMessage}validationMessageCallback(O){this.customError&&!this.staticError?(this.validationMessage=O,this.validationMessage=this.customError):this.validationMessage=O}resetFormControl(){this.checked=!1}shouldFormValueUpdate(){return this.checked}update(O){super.update(O),(O.has("checked")||O.has("value"))&&this.setValue(this.value),O.has("customColor")&&this._settingCustomColor()}connectedCallback(){super.connectedCallback(),this.addEventListener("invalid",this._onInvalid),document.addEventListener("DOMContentLoaded",()=>{this.field=this.closest(awcCheckboxGroupTag),this.field&&this.addEventListener(awcChangeEventName,this._handleFieldValueChange)})}disconnectedCallback(){var O;super.disconnectedCallback(),this.removeEventListener("invalid",this._onInvalid),(O=this.field)==null||O.removeEventListener(awcChangeEventName,this._handleFieldValueChange)}focus(){this.checkboxElement.tabIndex=0,this.checkboxElement.focus(),this.onFocus(this.value)}blur(){this.onBlur(this.value),this.field&&(this.checkboxElement.tabIndex=-1)}_settingCustomColor(){this.customColor&&this.style.setProperty("--awc-checkbox-custom-color",this.customColor)}_handleChange(O){const D=O.target;D.checkValidity(),this.checked=D.checked,this.onChange(D.checked),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.indeterminate=!1}render(){const O={checkbox:!0,"checkbox--error":this.showError},D={"awc-checkbox__label":!0,"checkbox--error":this.showError||this.staticError&&this.required};return x`
       <div class="awc-checkbox__wrapper">
         <label class="${e$2(D)}"
           >${this.label}
           <div class="awc-checkbox__container">
             <span class="awc-checkbox"></span>
             <input
               class="${e$2(O)}"
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
     `}},exports.AwcCheckbox.shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0},exports.AwcCheckbox.formControlValidators=[requiredValidator],exports.AwcCheckbox.styles=[checkboxStyle],__decorateClass$G([n({type:String,reflect:!0})],exports.AwcCheckbox.prototype,"value",2),__decorateClass$G([n({type:String,reflect:!0})],exports.AwcCheckbox.prototype,"label",2),__decorateClass$G([n({type:String,reflect:!0})],exports.AwcCheckbox.prototype,"name",2),__decorateClass$G([n({type:Boolean,reflect:!0})],exports.AwcCheckbox.prototype,"checked",2),__decorateClass$G([n({type:Boolean,reflect:!0})],exports.AwcCheckbox.prototype,"required",2),__decorateClass$G([n({type:Boolean,reflect:!0})],exports.AwcCheckbox.prototype,"disabled",2),__decorateClass$G([n({type:Boolean,reflect:!0})],exports.AwcCheckbox.prototype,"indeterminate",2),__decorateClass$G([n({type:Boolean,reflect:!0,attribute:"static-error"})],exports.AwcCheckbox.prototype,"staticError",2),__decorateClass$G([n({reflect:!0,attribute:"custom-error"})],exports.AwcCheckbox.prototype,"customError",2),__decorateClass$G([n({reflect:!0})],exports.AwcCheckbox.prototype,"size",2),__decorateClass$G([n({reflect:!0,attribute:"custom-color"})],exports.AwcCheckbox.prototype,"customColor",2),__decorateClass$G([r$1()],exports.AwcCheckbox.prototype,"validationMessage",2),__decorateClass$G([event("awc-checkbox-change")],exports.AwcCheckbox.prototype,"onChange",2),__decorateClass$G([event("awc-focus")],exports.AwcCheckbox.prototype,"onFocus",2),__decorateClass$G([event("awc-blur")],exports.AwcCheckbox.prototype,"onBlur",2),__decorateClass$G([e$5("input")],exports.AwcCheckbox.prototype,"checkboxElement",2),__decorateClass$G([e$5("label")],exports.AwcCheckbox.prototype,"labelCheckboxElement",2),__decorateClass$G([e$5("input[type=checkbox]")],exports.AwcCheckbox.prototype,"validationTarget",2),exports.AwcCheckbox=__decorateClass$G([t$1(awcCheckboxTag)],exports.AwcCheckbox);const checkboxGroupStyle=i$4`
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
 `;var __defProp$F=Object.defineProperty,__getOwnPropDesc$F=Object.getOwnPropertyDescriptor,__decorateClass$F=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$F(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$F(O,D,q),q};const awcCheckboxGroupTag="awc-checkbox-group",awcChangeEventName="awc-checkbox-group-change";exports.AwcCheckboxGroup=class extends FormControlMixin(s){constructor(){super(...arguments),this.value=[],this.label="",this.hint="",this.horizontal=!1,this.focusedOptionIndex=0}get options(){return[...this.querySelectorAll(awcCheckboxTag)]}get checkedOptions(){return this.options.filter(O=>O.checked).map(O=>O.value)}get availableOptions(){return this.options.filter(O=>!O.disabled)}connectedCallback(){super.connectedCallback(),this.tabIndex=0,this._handleCheckboxItem(),this.addEventListener("focus",this.handleFocus),this.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this.handleFocus),this.removeEventListener("keydown",this.handleKeyDown)}updated(O){super.updated(O),O.has("value")&&(this.setValue(this.checkedOptions.join(", ")),this._onChange(this.value))}_handleCheckboxItem(){this.value=this.checkedOptions}handleKeyDown(O){if(["ArrowDown","ArrowRight"].includes(O.key))this.focusedOptionIndex++;else if(["ArrowUp","ArrowLeft"].includes(O.key))this.focusedOptionIndex--;else if(O.key==="Tab"){if(O.shiftKey?this.focusedOptionIndex--:this.focusedOptionIndex++,this.focusedOptionIndex===this.availableOptions.length){this.tabIndex=0,this.focusedOptionIndex=0;return}}else return;this.focusedOptionIndex=Math.max(0,Math.min(this.focusedOptionIndex,this.availableOptions.length-1)),this.availableOptions[this.focusedOptionIndex].focus(),O.preventDefault()}handleFocus(){this.availableOptions[this.focusedOptionIndex].focus()}render(){return x`
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
     `}},exports.AwcCheckboxGroup.styles=[checkboxGroupStyle],__decorateClass$F([n({type:Array,reflect:!0})],exports.AwcCheckboxGroup.prototype,"value",2),__decorateClass$F([n({type:String,reflect:!0})],exports.AwcCheckboxGroup.prototype,"label",2),__decorateClass$F([n({type:String,reflect:!0})],exports.AwcCheckboxGroup.prototype,"hint",2),__decorateClass$F([n({type:Boolean,reflect:!0})],exports.AwcCheckboxGroup.prototype,"horizontal",2),__decorateClass$F([event("awc-checkbox-group-change")],exports.AwcCheckboxGroup.prototype,"_onChange",2),exports.AwcCheckboxGroup=__decorateClass$F([t$1(awcCheckboxGroupTag)],exports.AwcCheckboxGroup);const switcherStyle=i$4`
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
 `;var __defProp$E=Object.defineProperty,__getOwnPropDesc$E=Object.getOwnPropertyDescriptor,__decorateClass$E=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$E(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$E(O,D,q),q};const awcSwitcherTag="awc-switcher";exports.AwcSwitcher=class extends FormControlMixin(s){constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.variant="primary",this.size="regular"}_onChange(){this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}_handleToggle(){this.disabled||(this.checked=!this.checked,this._onToggle(this.checked),this._onChange())}_handleKeyDown(O){(O.code==="Enter"||O.code==="Space")&&(this._handleToggle(),O.preventDefault())}_settingCustomColor(){this.customColor&&this.style.setProperty("--awc-switcher-custom-color",this.customColor)}resetFormControl(){this.checked=!1}shouldFormValueUpdate(){return this.checked}updated(O){super.updated(O),(O.has("checked")||O.has("value"))&&this.setValue(this.value),O.has("customColor")&&this._settingCustomColor()}render(){return x`
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
     `}},exports.AwcSwitcher.styles=[switcherStyle],__decorateClass$E([n({type:Boolean,reflect:!0})],exports.AwcSwitcher.prototype,"checked",2),__decorateClass$E([n({type:Boolean,reflect:!0})],exports.AwcSwitcher.prototype,"disabled",2),__decorateClass$E([n({type:String,reflect:!0})],exports.AwcSwitcher.prototype,"name",2),__decorateClass$E([n({type:String,reflect:!0})],exports.AwcSwitcher.prototype,"value",2),__decorateClass$E([n({type:String,reflect:!0})],exports.AwcSwitcher.prototype,"variant",2),__decorateClass$E([n({type:String,reflect:!0})],exports.AwcSwitcher.prototype,"size",2),__decorateClass$E([n({reflect:!0,attribute:"custom-color"})],exports.AwcSwitcher.prototype,"customColor",2),__decorateClass$E([event("awc-switcher-toggle")],exports.AwcSwitcher.prototype,"_onToggle",2),exports.AwcSwitcher=__decorateClass$E([t$1(awcSwitcherTag)],exports.AwcSwitcher);const dividerStyle=i$4`
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
 `;var __defProp$D=Object.defineProperty,__getOwnPropDesc$D=Object.getOwnPropertyDescriptor,__decorateClass$D=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$D(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$D(O,D,q),q};exports.AwcDivider=class extends s{constructor(){super(...arguments),this.spacing="l"}render(){return x`
       <div
         class="awc-divider"
         style="--awc-divider-spacing: var(--spacing-${this.spacing});"
       >
         ${this.label?x`<span class="awc-divider__text">${this.label}</span>`:x`<div class="awc-divider__line"></div>`}
       </div>
     `}},exports.AwcDivider.styles=[dividerStyle],__decorateClass$D([n({type:String,reflect:!0})],exports.AwcDivider.prototype,"label",2),__decorateClass$D([n({type:String,reflect:!0})],exports.AwcDivider.prototype,"spacing",2),exports.AwcDivider=__decorateClass$D([t$1("awc-divider")],exports.AwcDivider);const validityStates=["valueMissing","typeMismatch","tooLong","tooShort","rangeUnderflow","rangeOverflow","stepMismatch","badInput","patternMismatch","customError"],innerInputValidators=validityStates.map(B=>({key:B,isValid(O){return O.validationTarget?!O.validationTarget.validity[B]:!0}})),textareaLengthValidator={...maxLengthValidator,isValid(B){return B.validationTarget&&B.getAttribute("maxlength")?Number(B.getAttribute("maxlength"))>=B.validationTarget.value.length:!0}};[...innerInputValidators];const inputStyle=i$4`
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
 `;var __defProp$C=Object.defineProperty,__getOwnPropDesc$C=Object.getOwnPropertyDescriptor,__decorateClass$C=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$C(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$C(O,D,q),q};const awcInputTag="awc-input";exports.AwcInput=class extends FormControlMixin(s){constructor(){super(...arguments),this.value="",this.type="text",this.size="medium",this.customError="",this.autocomplete="off",this.autofocus=!1,this.required=!1,this.disabled=!1,this.readonly=!1,this.staticError=!1,this.validationMessage="",this.inputId=Math.random().toString(36).substring(2)}validityCallback(){var O;return(O=this.validationTarget)==null?void 0:O.validationMessage}validationMessageCallback(O){this.customError&&!this.staticError?(this.validationMessage=O,this.validationMessage=this.customError):this.validationMessage=O}resetFormControl(){this.validationTarget.value=""}_changeVisibilityPassword(){if(this.input&&this._passwordButton){this.input.type=this.input.type==="password"?"text":"password";const O=this.input.type==="password"?'<path fill-rule="evenodd" clip-rule="evenodd" d="M1.88016 4.52534C1.61801 4.03924 1.01143 3.85769 0.525328 4.11984C0.0392261 4.382 -0.142322 4.98858 0.119829 5.47468C0.460909 6.10714 0.886046 6.69103 1.38093 7.21455C1.35044 7.23864 1.32104 7.26476 1.29289 7.2929L0.292888 8.2929C-0.097636 8.68343 -0.097636 9.31659 0.292888 9.70712C0.683413 10.0976 1.31658 10.0976 1.7071 9.70712L2.7071 8.70712C2.77745 8.63677 2.83512 8.55856 2.88012 8.47531C3.49551 8.88444 4.16892 9.22105 4.8856 9.47295L4.51941 11.3039C4.4111 11.8455 4.76232 12.3723 5.30388 12.4806C5.84544 12.5889 6.37226 12.2377 6.48058 11.6961L6.83405 9.92873C7.21597 9.97577 7.6052 10 7.99999 10C8.39479 10 8.78401 9.97577 9.16594 9.92873L9.51941 11.6961C9.62773 12.2377 10.1546 12.5889 10.6961 12.4806C11.2377 12.3723 11.5889 11.8455 11.4806 11.3039L11.1144 9.47295C11.8311 9.22105 12.5045 8.88444 13.1199 8.47531C13.1649 8.55856 13.2225 8.63677 13.2929 8.70712L14.2929 9.70712C14.6834 10.0976 15.3166 10.0976 15.7071 9.70712C16.0976 9.31659 16.0976 8.68343 15.7071 8.2929L14.7071 7.2929C14.679 7.26476 14.6495 7.23864 14.6191 7.21455C15.1139 6.69103 15.5391 6.10714 15.8802 5.47468C16.1423 4.98858 15.9608 4.382 15.4747 4.11984C14.9886 3.85769 14.382 4.03924 14.1198 4.52534C13.0235 6.55825 10.7156 8.00001 7.99999 8.00001C5.2844 8.00001 2.97649 6.55825 1.88016 4.52534Z" fill="#919BB6"/>':'<path fill-rule="evenodd" clip-rule="evenodd" d="M0.0827055 8.39823L0.0783361 8.388C0.0249487 8.26125 -0.00032161 8.12958 -0.000259399 8.00001C-0.000324169 7.87043 0.0249465 7.73876 0.0783366 7.612L0.0827063 7.60177C1.48797 4.34653 4.46036 2 8 2C11.5396 2 14.5119 4.34645 15.9172 7.60162L15.9217 7.612C15.975 7.73875 16.0003 7.87042 16.0003 8C16.0003 8.12958 15.975 8.26125 15.9217 8.388L15.9172 8.39838C14.5119 11.6536 11.5396 14 8 14C4.46036 14 1.48797 11.6535 0.0827055 8.39823ZM8 4C10.4635 4 12.6941 5.55711 13.8989 8C12.6941 10.4429 10.4635 12 8 12C5.53648 12 3.30588 10.4429 2.10113 8C3.30588 5.55711 5.53648 4 8 4ZM8.99999 8C8.99999 8.55228 8.55228 9 7.99999 9C7.44771 9 6.99999 8.55228 6.99999 8C6.99999 7.44772 7.44771 7 7.99999 7C8.55228 7 8.99999 7.44772 8.99999 8ZM11 8C11 9.65685 9.65685 11 7.99999 11C6.34314 11 4.99999 9.65685 4.99999 8C4.99999 6.34315 6.34314 5 7.99999 5C9.65685 5 11 6.34315 11 8Z" fill="#919BB6"/>';this._passwordButton.innerHTML=`
         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
           ${O}
         </svg>
       `}}_updateCharacterLimit(){if(this.input&&this._progressBar&&this.maxlength!==void 0){const O=this.maxlength,D=this.value.length,F=D/O*360;if(D*100/O>70?this._progressBar.classList.add("awc-input__progress--percent"):this._progressBar.classList.remove("awc-input__progress--percent"),this._progressBar.style.setProperty("--progress",`${F}deg`),O<D){const G=O-D;this._progressBar.setAttribute("length",`${G}`),this._progressBar.classList.add("awc-input__progress--length-warning"),G<-99?this._progressBar.classList.add("awc-input__progress--small-font"):this._progressBar.classList.remove("awc-input__progress--small-font")}else this._progressBar.removeAttribute("length"),this._progressBar.classList.remove("awc-input__progress--length-warning")}}_paddingInputIcon(){(this.input&&this._passwordButton||this.input&&this._progressBar)&&this.input.classList.add("has-padding-icon")}_onKeyDown(O){if(O.code==="Enter"&&this.form){O.preventDefault();const D=this.form.querySelector("button[type='submit']"),F=this.form.querySelector("awc-button[type='submit']");D?setTimeout(()=>D.click()):F?(setTimeout(()=>F.click()),submit(this.form)):submit(this.form)}}_onInput(O){this.value=O.target.value,this.dispatchEvent(new InputEvent("input",{composed:!0,bubbles:!0}))}_onChange(O){this.value=O.target.value,this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}_onInvalid(O){O.preventDefault(),this.input.focus()}_renderPasswordButton(){return x`
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
     </div> `}_increaseCounterValue(){let O=parseFloat(this.value||"0");const D=this.step||1,F=this.max!==void 0?this.max:1/0;let q=O+D;q>F&&(q=F),this.value=q.toString(),this.dispatchEvent(new InputEvent("input",{composed:!0,bubbles:!0})),this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}_decreaseCounterValue(){let O=parseFloat(this.value);const D=this.step||1,F=this.min!==void 0?this.min:-1/0;let q=O-D;q<F&&(q=F),this.value=q.toString(),this.dispatchEvent(new InputEvent("input",{composed:!0,bubbles:!0})),this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}focus(){this.input.focus()}blur(){this.input.blur()}select(){this.input.select()}connectedCallback(){super.connectedCallback(),this.addEventListener("invalid",this._onInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._onInvalid)}updated(O){super.updated(O),O.has("value")&&this.setValue(this.value),O.has("value")&&this.maxlength&&this._updateCharacterLimit(),(this.type==="password"||this.maxlength)&&this._paddingInputIcon()}render(){const O={"awc-input":!0,[this.size]:!0,"awc-input--error":this.showError},D=this.type==="password"?this._renderPasswordButton():"",F=this.maxlength&&!D?x`<div class="awc-input__progress"></div>`:"",q=this.type==="number"?this._renderIncrementArrowButtons():"";return x`
       <div class="awc-input__main">
         ${this.label?x`<label for=${this.inputId} class="awc-input__label"
               >${this.label}</label
             >`:""}
         <div class="awc-input__wrapper">
           <div class="awc-input__container">
             <input
               class=${e$2(O)}
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
     `}},exports.AwcInput.formControlValidators=innerInputValidators,exports.AwcInput.shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0},exports.AwcInput.styles=[inputStyle],__decorateClass$C([n({type:String,reflect:!0})],exports.AwcInput.prototype,"label",2),__decorateClass$C([n({reflect:!0})],exports.AwcInput.prototype,"value",2),__decorateClass$C([n({type:String,reflect:!0})],exports.AwcInput.prototype,"placeholder",2),__decorateClass$C([n({type:String,reflect:!0})],exports.AwcInput.prototype,"name",2),__decorateClass$C([n({type:String,reflect:!0})],exports.AwcInput.prototype,"hint",2),__decorateClass$C([n({reflect:!0})],exports.AwcInput.prototype,"type",2),__decorateClass$C([n({type:String,reflect:!0})],exports.AwcInput.prototype,"size",2),__decorateClass$C([n({reflect:!0,attribute:"custom-error"})],exports.AwcInput.prototype,"customError",2),__decorateClass$C([n({type:Number,reflect:!0})],exports.AwcInput.prototype,"maxlength",2),__decorateClass$C([n({type:Number,reflect:!0})],exports.AwcInput.prototype,"minlength",2),__decorateClass$C([n({type:Number,reflect:!0})],exports.AwcInput.prototype,"min",2),__decorateClass$C([n({type:Number,reflect:!0})],exports.AwcInput.prototype,"max",2),__decorateClass$C([n({type:Number,reflect:!0})],exports.AwcInput.prototype,"step",2),__decorateClass$C([n({type:String,reflect:!0})],exports.AwcInput.prototype,"pattern",2),__decorateClass$C([n({type:String,reflect:!0})],exports.AwcInput.prototype,"autocomplete",2),__decorateClass$C([n({type:Boolean,reflect:!0})],exports.AwcInput.prototype,"autofocus",2),__decorateClass$C([n({type:Boolean,reflect:!0})],exports.AwcInput.prototype,"required",2),__decorateClass$C([n({type:Boolean,reflect:!0})],exports.AwcInput.prototype,"disabled",2),__decorateClass$C([n({type:Boolean,reflect:!0})],exports.AwcInput.prototype,"readonly",2),__decorateClass$C([n({type:Boolean,reflect:!0,attribute:"static-error"})],exports.AwcInput.prototype,"staticError",2),__decorateClass$C([r$1()],exports.AwcInput.prototype,"validationMessage",2),__decorateClass$C([e$5("input")],exports.AwcInput.prototype,"validationTarget",2),__decorateClass$C([e$5(".awc-input")],exports.AwcInput.prototype,"input",2),__decorateClass$C([e$5(".awc-input__password")],exports.AwcInput.prototype,"_passwordButton",2),__decorateClass$C([e$5(".awc-input__progress")],exports.AwcInput.prototype,"_progressBar",2),exports.AwcInput=__decorateClass$C([t$1(awcInputTag)],exports.AwcInput);const textareaStyle=i$4`
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
 `;var __defProp$B=Object.defineProperty,__getOwnPropDesc$B=Object.getOwnPropertyDescriptor,__decorateClass$B=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$B(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$B(O,D,q),q};const awcTextAreaTag="awc-textarea";exports.AwcTextarea=class extends FormControlMixin(s){constructor(){super(...arguments),this.value="",this.autofocus=!1,this.readonly=!1,this.disabled=!1,this.resize=!1,this.autoheight=!1,this.autocomplete="off",this.rows=2,this.cols=20,this.textAreaId=Math.random().toString(36).substring(2)}_handleInput(){this._autoHeightTextArea(this.textarea),this.value=this.textarea.value,this._onInput.bind(this)}resetFormControl(){this.value=""}_autoHeightTextArea(O){this.autoheight&&!this.resize&&(O.style.height="auto",O.style.height=`${O.scrollHeight}px`)}_onInput(O){this.value=O.target.value,this.dispatchEvent(new InputEvent("input",{composed:!0,bubbles:!0}))}_onChange(O){this.value=O.target.value,this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}updated(O){super.updated(O),O.has("value")&&(this.setValue(this.value),this.textarea.value=this.value)}firstUpdated(){this.textarea.value=this.value,this._autoHeightTextArea(this.textarea)}select(){this.textarea.select()}render(){return x`
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
     `}},exports.AwcTextarea.shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0},exports.AwcTextarea.styles=[textareaStyle],__decorateClass$B([n({type:String,reflect:!0})],exports.AwcTextarea.prototype,"value",2),__decorateClass$B([n({type:String,reflect:!0})],exports.AwcTextarea.prototype,"placeholder",2),__decorateClass$B([n({type:String,reflect:!0})],exports.AwcTextarea.prototype,"name",2),__decorateClass$B([n({type:String,reflect:!0})],exports.AwcTextarea.prototype,"label",2),__decorateClass$B([n({type:Boolean,reflect:!0})],exports.AwcTextarea.prototype,"autofocus",2),__decorateClass$B([n({type:Boolean,reflect:!0})],exports.AwcTextarea.prototype,"readonly",2),__decorateClass$B([n({type:Boolean,reflect:!0})],exports.AwcTextarea.prototype,"disabled",2),__decorateClass$B([n({type:Boolean,reflect:!0})],exports.AwcTextarea.prototype,"resize",2),__decorateClass$B([n({type:Boolean,reflect:!0})],exports.AwcTextarea.prototype,"autoheight",2),__decorateClass$B([n({type:String,reflect:!0})],exports.AwcTextarea.prototype,"autocomplete",2),__decorateClass$B([n({type:Number,reflect:!0})],exports.AwcTextarea.prototype,"rows",2),__decorateClass$B([n({type:Number,reflect:!0})],exports.AwcTextarea.prototype,"cols",2),__decorateClass$B([e$5("textarea")],exports.AwcTextarea.prototype,"textarea",2),exports.AwcTextarea=__decorateClass$B([t$1(awcTextAreaTag)],exports.AwcTextarea);const stepsStyle=i$4`
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
 `;var __defProp$A=Object.defineProperty,__getOwnPropDesc$A=Object.getOwnPropertyDescriptor,__decorateClass$A=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$A(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$A(O,D,q),q};exports.AwcSteps=class extends s{constructor(){super(...arguments),this.id="stepper-1",this.report=[],this.status=1}_calcSteps(){const O=this.report.length;return Array.from({length:O},(D,F)=>(F+1).toString())}_stepUpdater(){let O=parseInt(this.status.toString(),10);if((isNaN(O)||O<1)&&(O=1,this.status=O),!this.shadowRoot)return;const D=this.shadowRoot.querySelectorAll(".progress-item");if(O<=this.report.length){D.forEach((q,G)=>{const U=G+1,Y=U<O,Q=U===O;q.classList.toggle("progress-item--past",Y),q.classList.toggle("progress-item--current",Q),Y&&q.classList.remove("progress-item--completed")});const F=O===this.report.length;D.forEach(q=>{q.classList.toggle("progress-item--completed",F)}),D.forEach(q=>{q.classList.remove("progress-item--error")})}else D.forEach(F=>{F.classList.add("progress-item--error")})}updated(O){super.updated(O),O.has("status")&&this._stepUpdater()}firstUpdated(){this._calcSteps()}render(){return x`
       <div id=${this.id} class="awc-steps">
         <div class="awc-steps__status">
           <div class="awc-steps__sticker">Шаг ${this.status}</div>
           <div class="awc-steps__report">
             ${this.report[this.status,10-1]}
           </div>
         </div>
         <div class="awc-steps__progress">${this._renderProgress()}</div>
       </div>
     `}_renderProgress(){const O=this.report.length;return Array.from({length:O},()=>x`<div class="progress-item"></div>`)}},exports.AwcSteps.styles=[stepsStyle],__decorateClass$A([n({type:String,reflect:!0})],exports.AwcSteps.prototype,"id",2),__decorateClass$A([n({type:Array,reflect:!0})],exports.AwcSteps.prototype,"report",2),__decorateClass$A([n({type:Number,reflect:!0})],exports.AwcSteps.prototype,"status",2),exports.AwcSteps=__decorateClass$A([t$1("awc-steps")],exports.AwcSteps);const iconStyle=i$4`
 
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
 `;var __defProp$z=Object.defineProperty,__getOwnPropDesc$z=Object.getOwnPropertyDescriptor,__decorateClass$z=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$z(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$z(O,D,q),q};exports.AwcIconLoader=class extends s{constructor(){super(...arguments),this.type="icon",this.size="",this.src=""}_setGlobalIcons(){const O=this.type,D=this.size,F=this.src,q=window.__AWC_ICONS||{};return window.__AWC_ICONS=q,q[O]||(q[O]={}),q[O][D]=F,q}firstUpdated(){this._setGlobalIcons()}},__decorateClass$z([n({type:String})],exports.AwcIconLoader.prototype,"type",2),__decorateClass$z([n({type:String})],exports.AwcIconLoader.prototype,"size",2),__decorateClass$z([n({type:String})],exports.AwcIconLoader.prototype,"src",2),exports.AwcIconLoader=__decorateClass$z([t$1("awc-icon-loader")],exports.AwcIconLoader);var __defProp$y=Object.defineProperty,__getOwnPropDesc$y=Object.getOwnPropertyDescriptor,__decorateClass$y=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$y(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$y(O,D,q),q};const awcIconTag="awc-icon";exports.AwcIcon=class extends s{constructor(){super(...arguments),this.type="icon",this.size="16",this.name="",this.iconScale=""}_getGlobalIcon(){const O=window.__AWC_ICONS;if(O&&O[this.type]&&O[this.type][this.size])return O[this.type][this.size]}render(){const O=this._getGlobalIcon();if(O)return b`
         <svg
           class="awc-icon"
           style=${this.iconScale?`--awc-icon-size: ${this.iconScale}`:""}
           width=${this.size}
           height=${this.size}
         >
           <use href="${O}#${this.name}"></use>
         </svg>
         <slot></slot>
       `}},exports.AwcIcon.styles=[iconStyle],__decorateClass$y([n({type:String,reflect:!0})],exports.AwcIcon.prototype,"type",2),__decorateClass$y([n({type:String,reflect:!0})],exports.AwcIcon.prototype,"size",2),__decorateClass$y([n({type:String,reflect:!0})],exports.AwcIcon.prototype,"name",2),__decorateClass$y([n({type:String,attribute:"icon-scale"})],exports.AwcIcon.prototype,"iconScale",2),exports.AwcIcon=__decorateClass$y([t$1(awcIconTag)],exports.AwcIcon);const tooltipStyle=i$4`
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
 `;var __defProp$x=Object.defineProperty,__getOwnPropDesc$x=Object.getOwnPropertyDescriptor,__decorateClass$x=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$x(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$x(O,D,q),q};const spacingValues$1={XXS:"2",XS:"4",S:"8",SM:"12",M:"16",L:"20",XL:"24",XXL:"32",XXXL:"40"};exports.AwcTooltip=class extends s{constructor(){super(...arguments),this.marker=!0,this.message="Tooltip",this.position="top",this.spacing="S",this.strategy="absolute",this.active=!1,this.disabled=!1,this.popperInstance=null,this.tooltipTimeout=null}_createPopperInstance(){!this._nestedElement||!this.shadowRoot||(this.popperInstance=createPopper(this._nestedElement,this._tooltip,{placement:this.position,modifiers:[{name:"offset",options:{offset:[0,spacingValues$1[this.spacing]]}}],strategy:this.strategy}))}_destroyPopperInstance(){this.popperInstance&&(this.popperInstance.destroy(),this.popperInstance=null)}updated(O){super.updated(O),(O.has("active")||O.has("position")||O.has("marker")||O.has("spacing"))&&(this.active?this._createPopperInstance():this._destroyPopperInstance())}_setupTimout(){this.disabled||(this.tooltipTimeout=setTimeout(()=>this.active=!0,500))}_disconnectTimeout(){this.disabled||(clearTimeout(this.tooltipTimeout),this.active=!1)}_onFocus(O){O.target&&!this.disabled&&(this.active=!0)}_onBlur(O){O.target&&!this.disabled&&(this.active=!1)}render(){return x`
       <div class="awc-tooltip__nested">
         <slot
           @mouseenter=${this._setupTimout}
           @mouseleave=${this._disconnectTimeout}
           @focus=${{handleEvent:O=>this._onFocus(O),capture:!0}}
           @blur=${{handleEvent:O=>this._onBlur(O),capture:!0}}
         ></slot>
       </div>
 
       <div class="awc-tooltip ${this.active?"visible":""}" role="tooltip">
         <p class="awc-tooltip__message">${this.message}</p>
         ${this.marker?x`<div class="awc-tooltip__arrow" data-popper-arrow></div>`:""}
       </div>
     `}},exports.AwcTooltip.shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0},exports.AwcTooltip.styles=[tooltipStyle],__decorateClass$x([n({type:Boolean,reflect:!0})],exports.AwcTooltip.prototype,"marker",2),__decorateClass$x([n({type:String,reflect:!0})],exports.AwcTooltip.prototype,"message",2),__decorateClass$x([n({reflect:!0})],exports.AwcTooltip.prototype,"position",2),__decorateClass$x([n({type:String,reflect:!0})],exports.AwcTooltip.prototype,"spacing",2),__decorateClass$x([n({type:String,reflect:!0})],exports.AwcTooltip.prototype,"strategy",2),__decorateClass$x([n({type:Boolean,reflect:!0})],exports.AwcTooltip.prototype,"active",2),__decorateClass$x([n({type:Boolean,reflect:!0})],exports.AwcTooltip.prototype,"disabled",2),__decorateClass$x([e$5(".awc-tooltip")],exports.AwcTooltip.prototype,"_tooltip",2),__decorateClass$x([e$5(".awc-tooltip__nested")],exports.AwcTooltip.prototype,"_nestedElement",2),exports.AwcTooltip=__decorateClass$x([t$1("awc-tooltip")],exports.AwcTooltip);/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */let e$1=class extends i$1{constructor(O){if(super(O),this.it=T,O.type!==t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(O){if(O===T||O==null)return this._t=void 0,this.it=O;if(O===w)return O;if(typeof O!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(O===this.it)return this._t;this.it=O;const D=[O];return D.raw=D,this._t={_$litType$:this.constructor.resultType,strings:D,values:[]}}};e$1.directiveName="unsafeHTML",e$1.resultType=1;const o$1=e$3(e$1),selectItemStyle=i$4`
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
 `;var __defProp$w=Object.defineProperty,__getOwnPropDesc$w=Object.getOwnPropertyDescriptor,__decorateClass$w=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$w(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$w(O,D,q),q};const awcSelectItemTag="awc-select-item";exports.AwcSelectItem=class extends FormControlMixin(s){constructor(){super(...arguments),this.selected=!1,this.disabled=!1}focus(){this.focusTarget.tabIndex=0,this.focusTarget.focus(),this.onFocus(this.value)}blur(){this.onBlur(this.value),this.focusTarget.tabIndex=-1}select(){this._onSelect([{value:this.value,selected:this.selected}])}_handleEvent(){this._onSelect([{value:this.value,selected:this.selected}]),this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}handleKeydown(O){(O.code==="Enter"||O.code==="Space")&&(this._onClickOption(),O.preventDefault())}_onClickOption(){this.selected=!0,this._handleEvent()}render(){return x`
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
     `}},exports.AwcSelectItem.shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0},exports.AwcSelectItem.styles=[selectItemStyle],__decorateClass$w([n({type:Boolean,reflect:!0})],exports.AwcSelectItem.prototype,"selected",2),__decorateClass$w([n({type:String,reflect:!0})],exports.AwcSelectItem.prototype,"value",2),__decorateClass$w([n({type:Boolean,reflect:!0})],exports.AwcSelectItem.prototype,"disabled",2),__decorateClass$w([n({type:Boolean,reflect:!0,attribute:"no-padding"})],exports.AwcSelectItem.prototype,"noPadding",2),__decorateClass$w([event("awc-select-option")],exports.AwcSelectItem.prototype,"_onSelect",2),__decorateClass$w([event("awc-select-option-focus")],exports.AwcSelectItem.prototype,"onFocus",2),__decorateClass$w([event("awc-select-option-blur")],exports.AwcSelectItem.prototype,"onBlur",2),__decorateClass$w([e$5(".awc-item-focus")],exports.AwcSelectItem.prototype,"focusTarget",2),exports.AwcSelectItem=__decorateClass$w([t$1(awcSelectItemTag)],exports.AwcSelectItem);const selectButtomStyle=i$4`
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
 `;var __defProp$v=Object.defineProperty,__getOwnPropDesc$v=Object.getOwnPropertyDescriptor,__decorateClass$v=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$v(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$v(O,D,q),q};const awcSelectButtonTag="awc-select-button",awcSelectButtonEvent="awc-select-button-create";exports.AwcSelectButton=class extends s{constructor(){super(...arguments),this.slot="awc-button",this.icon=!1,this.staticButton=!1,this.dynamicButton=!1,this.isClick=!1}_handleClick(){if(this.isClick=!0,this._onClick(this.isClick),this.isClick&&this.textContent||this.label)return this.textContent=""}_handleKeyboard(O){if(O.code==="Enter"&&(this._handleClick(),this.isClick&&O.code&&this.textContent||this.label))return this.textContent=""}_handleLabelOrTextContent(){if(this.textContent&&this.label&&!this.icon)return x`${this.label} «${this.textContent}»`;if(this.textContent&&this.label)return x`${this.textContent}`;if(this.label)return x`${this.label}`}render(){const O=b`
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
                     ${this.icon?x`${O}`:""}
                     ${this._handleLabelOrTextContent()}
                 <slot></slot>
             </button>
         `}},exports.AwcSelectButton.styles=[selectButtomStyle],__decorateClass$v([n({type:String,reflect:!0})],exports.AwcSelectButton.prototype,"slot",2),__decorateClass$v([n({type:String,reflect:!0})],exports.AwcSelectButton.prototype,"label",2),__decorateClass$v([n({type:Boolean,reflect:!0})],exports.AwcSelectButton.prototype,"icon",2),__decorateClass$v([n({type:Boolean,reflect:!0,attribute:"static-button"})],exports.AwcSelectButton.prototype,"staticButton",2),__decorateClass$v([n({type:Boolean,reflect:!0,attribute:"dynamic-button"})],exports.AwcSelectButton.prototype,"dynamicButton",2),__decorateClass$v([n({type:String})],exports.AwcSelectButton.prototype,"copyLabel",2),__decorateClass$v([n()],exports.AwcSelectButton.prototype,"textContent",2),__decorateClass$v([event(awcSelectButtonEvent)],exports.AwcSelectButton.prototype,"_onClick",2),exports.AwcSelectButton=__decorateClass$v([t$1(awcSelectButtonTag)],exports.AwcSelectButton);const selectGroupStyle=i$4`
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
 `;var __defProp$u=Object.defineProperty,__getOwnPropDesc$u=Object.getOwnPropertyDescriptor,__decorateClass$u=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$u(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$u(O,D,q),q};const awcSelectGroupTag="awc-select-group";exports.AwcSelectGroup=class extends s{render(){return x`
             <div class='awc-select-group'>
                 <p class='awc-select-group__label'>${this.label}</p>
                 <div class='awc-select-group__content'><slot></slot></div>
             </div>
         `}},exports.AwcSelectGroup.styles=[selectGroupStyle],__decorateClass$u([n({type:String,reflect:!0})],exports.AwcSelectGroup.prototype,"label",2),exports.AwcSelectGroup=__decorateClass$u([t$1(awcSelectGroupTag)],exports.AwcSelectGroup);const selectStyle=i$4`
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
 `;var __defProp$t=Object.defineProperty,__getOwnPropDesc$t=Object.getOwnPropertyDescriptor,__decorateClass$t=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$t(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$t(O,D,q),q};const awcSelectTag="awc-select";exports.AwcSelect=class extends FormControlMixin(s){constructor(){super(...arguments),this.value="",this.inputPlacholder="",this.html=!1,this.disabled=!1,this.required=!1,this.autoselectOff=!1,this.reset=!1,this.multiple=!1,this.search=!1,this.customError="",this.staticError=!1,this.validationMessage="",this.filteredOptions=[],this.isOptionListReverse=!1,this.popperInstance=null,this._onInvalid=O=>{O.preventDefault(),this.validationTarget.focus()},this.focusedOptionIndex=-1}get options(){return[...this.querySelectorAll(awcSelectItemTag)]}get selectedOptions(){return this.options.filter(O=>O.selected)}get optionGroups(){return[...this.querySelectorAll(awcSelectGroupTag)]}get selectButtons(){return this.querySelector(awcSelectButtonTag)}_toggleOptionsList(){this.selectedOptions.length&&this.multiple?this._open():this.open?this._close():this._open()}_open(){this.open=!0,this._updateHeadContent(),this._createPopperInstance(),requestAnimationFrame(()=>{this.search&&this.open&&this.inputElement.focus()})}_close(){this.open=!1,this.focusedOptionIndex=-1,this._unhiddingOptions(),this._destroyPopperInstance(),this._clearInputValue()}_unhiddingOptions(){this.options.forEach(O=>O.removeAttribute("hidden")),this.optionGroups.forEach(O=>O.removeAttribute("hidden"))}_getItemValueAttribute(O){return O.value}_getItemTextContent(O){var D;return(D=O.textContent)==null?void 0:D.trim()}_getItemHTMLContent(O){return o$1(O.outerHTML)}_updateHeadContent(){this.selectedOptions.forEach(O=>{this.html&&O.outerHTML?(O.setAttribute("no-padding","true"),this.headContent=this._getItemHTMLContent(O)):this.headContent=this._getItemTextContent(O)||this._getItemValueAttribute(O),O.removeAttribute("no-padding")}),this._updateSelectValue()}_updateSelectValue(){this.multiple?this.value=this.selectedOptions.map(O=>this._getItemValueAttribute(O)||this._getItemTextContent(O)):this.selectedOptions.map(O=>this.value=this._getItemValueAttribute(O)||this._getItemTextContent(O)),this._updateFormData()}_singleSelection(O){O&&(this.options.forEach(D=>D.selected=!1),O.selected=!0,this._updateHeadContent(),this._updateChangeEvent())}_multipleSelection(O){this._unhiddingOptions(),this.searchText&&this._clearInputValue(),O&&(O.selected=!0,this._updateHeadContent(),this._updateChangeEvent())}_handleOption(O){const D=O.target;D&&(this._unhiddingOptions(),this.multiple?this._multipleSelection(D):this._singleSelection(D))}_updateChangeEvent(){const O=this.selectedOptions.map(D=>{var F,q;return{value:D.value||((F=D.textContent)==null?void 0:F.trim())||"",text:((q=D.textContent)==null?void 0:q.trim())||"",selected:!0}});this._onChangeSelect(O)}_handleChipsClick(O,D){O.stopPropagation(),this._removeChipsItem(D)}_renderChips(){return this.selectedOptions.map((O,D)=>x`
         <awc-chips
           reset-button
           @awc-chips-reset=${F=>this._handleChipsClick(F,D)}
           @click=${F=>F.stopPropagation()}
         >
           ${this.html?o$1(O.innerHTML):O.textContent}
         </awc-chips>
       `)}_removeChipsItem(O){const D=this.selectedOptions[O];D&&(D.selected=!1,this.selectedOptions.splice(O,1),this._updateHeadContent(),this._updateChangeEvent())}_updateFormData(){const O=new FormData;if(this.multiple&&Array.isArray(this.value))this.selectedOptions.forEach(D=>{this._appendOptionToFormData(O,D)});else if(!this.multiple&&typeof this.value=="string"){const D=this.selectedOptions[0];D&&this._appendOptionToFormData(O,D)}this.setValue(O)}_appendOptionToFormData(O,D){const F=D.value||D.textContent.trim();O.append(this.name,F)}shouldFormValueUpdate(){return Array.isArray(this.value)&&this.multiple?this.value.length>0:this.value!==null&&this.value!==""}validityCallback(){const O=document.createElement("select");return O.required=this.required,O.validationMessage}validationMessageCallback(O){this.customError&&!this.staticError?(this.validationMessage=O,this.validationMessage=this.customError):this.validationMessage=O}_setSelectedElement(){this.selectedOptions.length>=1&&!this.multiple&&(this.selectedOptions.forEach((O,D)=>{D===0?O.selected=!0:O.selected=!1}),this._updateHeadContent())}_setAutoSelectedFirstElement(){this.selectedOptions.length===0&&!this.multiple&&this.options.length>0&&(this.options[0].selected=!0,this._updateHeadContent())}resetFormControl(){this.options.forEach(O=>O.selected=!1),this.value=this.multiple?[]:"",this.headContent="",this.setValue(new FormData),this._onChangeSelect([]),this._close()}_resetButton(){if(this.reset&&this.selectedOptions.length>0)return x`<awc-toolbar-button
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
       </awc-toolbar-button>`}_handleResetClick(O){O.stopPropagation(),this.resetFormControl()}_handleOptionKeyboard(O){if(O.code==="Enter"||O.code==="Space")this._toggleOptionsList(),O.preventDefault(),O.stopPropagation();else if(this.open===!1&&["ArrowDown","ArrowUp"].includes(O.code))this._open(),O.preventDefault();else if(O.code==="Escape")this._close(),O.preventDefault();else if(this.open&&["ArrowDown","ArrowUp"].includes(O.code)){if(this.isOptionListReverse?(O.code==="ArrowUp"&&this.focusedOptionIndex--,O.code==="ArrowDown"&&this.focusedOptionIndex++):(O.code==="ArrowDown"&&this.focusedOptionIndex++,O.code==="ArrowUp"&&this.focusedOptionIndex--),this.search&&this.searchText){if(this.filteredOptions.length===0)return;this.focusedOptionIndex=Math.max(0,Math.min(this.focusedOptionIndex,this.filteredOptions.length-1)),this.filteredOptions[this.focusedOptionIndex].focus()}else{const D=this.options.filter(F=>F.tagName==="AWC-SELECT-ITEM");this.focusedOptionIndex=Math.max(0,Math.min(this.focusedOptionIndex,D.length-1)),D[this.focusedOptionIndex].focus()}this.scrollToFocusedOption(),O.preventDefault()}}scrollToFocusedOption(){const O=this.optionList.children[this.focusedOptionIndex];O&&O.scrollIntoView({block:"nearest"})}_handleDocumentClick(O){O.composedPath().includes(this)||this._close()}_handleInput(){this.searchText=this.inputElement.value,this._filterOptions(),this._buttonSearchTextUpdate(),this._onSearch(this.searchText)}_handleInputKeydown(O){(O.code==="Enter"||O.code==="Space")&&this.open&&O.stopPropagation()}_buttonSearchTextUpdate(){if(this.selectButtons)return this.selectButtons.textContent=this.searchText}_staticCreateButton(){if(this.selectButtons.isClick){const D=this._buttonSearchTextUpdate();this._onCreateOption({value:D,selected:!0,text:D})}}_dynamicCreateOption(){if(this.selectButtons.isClick){const D=this._buttonSearchTextUpdate();this.createSelectItem(D,D,!0),this._onCreateOption({value:D,selected:!0,text:D}),this._clearInputValue()}}createSelectItem(O,D,F){const q=document.createElement(awcSelectItemTag);this.html?q.innerHTML=O:q.textContent=O,q.value=D??O,F&&(q.selected=!0,this.multiple||this.selectedOptions.forEach(G=>G.selected=!1)),this.appendChild(q),this.requestUpdate(),this._updateHeadContent(),this._unhiddingOptions()}handleCreateOption(O){if(this.inputElement){if(O.target&&this.inputElement.value==="")return;{const D=this.selectButtons.staticButton,F=this.selectButtons.dynamicButton;D&&this._staticCreateButton(),F&&this._dynamicCreateOption()}}}_filterOptions(){const O=this.searchText.toLowerCase();this.filteredOptions=this.options.filter(D=>{var G;const F=(G=D.textContent)==null?void 0:G.toLowerCase(),q=F==null?void 0:F.includes(O);return q?D.removeAttribute("hidden"):D.setAttribute("hidden",""),q}),this._filterGroups(),this.scrollToFocusedOption()}_filterGroups(){this.optionGroups.forEach(O=>{Array.from(O.children).some(F=>!F.hasAttribute("hidden"))?O.removeAttribute("hidden"):O.setAttribute("hidden","")})}_showPlaceholderOrSelectItem(){return this.multiple&&this.placeholder?this.selectedOptions.length?this._renderChips():x`<p class="awc-select__placeholder">${this.placeholder}</p>`:this.multiple&&!this.placeholder?this._renderChips():this.headContent?this.headContent:x`<p class="awc-select__placeholder">${this.placeholder}</p>`}_renderInput(){return x`
       <div class="awc-select__search">
         <input
           class="awc-select__input"
           type="text"
           placeholder=${this.inputPlacholder}
           autocomplete="off"
           tabindex="0"
           @input=${this._handleInput}
           @keydown=${O=>this._handleInputKeydown(O)}
           @click=${O=>O.stopPropagation()}
         />
       </div>
     `}_clearInputValue(){this.inputElement&&(this.searchText="",this.inputElement.value="")}_checkingListPosition(){this._selectOptions&&requestAnimationFrame(()=>{this._selectOptions.getAttribute("data-popper-placement")==="top"?this.isOptionListReverse=!0:this.isOptionListReverse=!1})}_createPopperInstance(){this._selectHead&&this._selectOptions&&(this.popperInstance=createPopper(this._selectHead,this._selectOptions,{placement:"bottom-start",strategy:"absolute",modifiers:[{name:"preventOverflow",options:{boundary:this._selectHead}}]}),this.popperInstance.forceUpdate())}_destroyPopperInstance(){var O;(O=this.popperInstance)==null||O.destroy(),this.popperInstance=null}_renderMultipleSelect(){const O={"awc-select":!0,"awc-select--error":this.showError},D={"awc-select__options":!0,"awc-select__options--open":this.open},F={"awc-select__head":!0,"border-radius":!0,"border-radius--reverse":this.isOptionListReverse},q=x`
       <awc-toolbar-button
         @click=${G=>{G.stopPropagation(),this._close()}}
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
         class=${e$2(O)}
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
         <div class="${e$2(F)}">
           <div class="awc-select__content">
             ${this._showPlaceholderOrSelectItem()}
           </div>
           <div class="awc-select__icons">
             ${this._resetButton()} ${q}
           </div>
         </div>
 
         <div class=${e$2(D)}>
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
       ${this.staticError&&this.required&&this.customError?x`<span class="awc-select__error">${this.customError}</span>`:this.hint&&this.staticError?x`<span class="awc-select__hint">${this.hint}</span>`:""} `}_renderSingleSelect(){const O={"awc-select":!0,"awc-select--error":this.showError||this.staticError&&this.required},D={"awc-select__options":!0,"awc-select__options--open":this.open,"awc-select--error":this.showError},F={"awc-select__head":!0,"border-radius":!0,"border-radius--reverse":this.isOptionListReverse},q=x`
       <awc-toolbar-button
         @click=${G=>{G.stopPropagation(),this._toggleOptionsList()}}
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
         class=${e$2(O)}
         name=${this.name}
         .value=${this.value}
         tabindex="0"
         ?disabled=${this.disabled}
         ?required=${this.required}
         ?autoselect-off=${this.autoselectOff}
         @click=${this._toggleOptionsList}
         @keydown=${this._handleOptionKeyboard}
       >
         <div class="${e$2(F)}">
           <div class="awc-select__content">
             ${this._showPlaceholderOrSelectItem()}
           </div>
           <div class="awc-select__icons">
             ${this._resetButton()} ${q}
           </div>
         </div>
 
         <div class=${e$2(D)}>
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
     `}connectedCallback(){super.connectedCallback(),this.addEventListener("invalid",this._onInvalid),document.addEventListener("click",O=>this._handleDocumentClick(O)),document.addEventListener("DOMContentLoaded",()=>{this._updateHeadContent(),this.autoselectOff?this._setSelectedElement():this._setAutoSelectedFirstElement()})}updated(O){super.updated(O),O.has("open")&&this._checkingListPosition(),this.disabled&&this.open&&this._close(),O.has("searchText")&&this._buttonSearchTextUpdate(),O.has("multiple")&&this._updateHeadContent(),O.has("autoselectOff")&&(this.autoselectOff?this._setSelectedElement():this._setAutoSelectedFirstElement())}render(){return this.multiple?this._renderMultipleSelect():this._renderSingleSelect()}},exports.AwcSelect.formControlValidators=[requiredValidator],exports.AwcSelect.shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0},exports.AwcSelect.styles=[scrollStyle,selectStyle],__decorateClass$t([n({type:String,reflect:!0})],exports.AwcSelect.prototype,"name",2),__decorateClass$t([n()],exports.AwcSelect.prototype,"value",2),__decorateClass$t([n({type:String,reflect:!0})],exports.AwcSelect.prototype,"placeholder",2),__decorateClass$t([n({type:String,attribute:"input-placeholder"})],exports.AwcSelect.prototype,"inputPlacholder",2),__decorateClass$t([n({type:String,reflect:!0})],exports.AwcSelect.prototype,"hint",2),__decorateClass$t([n({type:Boolean,reflect:!0})],exports.AwcSelect.prototype,"html",2),__decorateClass$t([n({type:Boolean,reflect:!0})],exports.AwcSelect.prototype,"open",2),__decorateClass$t([n({type:Boolean,reflect:!0})],exports.AwcSelect.prototype,"disabled",2),__decorateClass$t([n({type:Boolean,reflect:!0})],exports.AwcSelect.prototype,"required",2),__decorateClass$t([n({type:Boolean,reflect:!0,attribute:"autoselect-off"})],exports.AwcSelect.prototype,"autoselectOff",2),__decorateClass$t([n({type:Boolean,reflect:!0})],exports.AwcSelect.prototype,"reset",2),__decorateClass$t([n({type:Boolean,reflect:!0})],exports.AwcSelect.prototype,"multiple",2),__decorateClass$t([n({type:Boolean,reflect:!0})],exports.AwcSelect.prototype,"search",2),__decorateClass$t([n({reflect:!0,attribute:"custom-error"})],exports.AwcSelect.prototype,"customError",2),__decorateClass$t([n({type:Boolean,reflect:!0,attribute:"static-error"})],exports.AwcSelect.prototype,"staticError",2),__decorateClass$t([event("awc-select-search")],exports.AwcSelect.prototype,"_onSearch",2),__decorateClass$t([event("awc-create-option")],exports.AwcSelect.prototype,"_onCreateOption",2),__decorateClass$t([event("awc-select-change")],exports.AwcSelect.prototype,"_onChangeSelect",2),__decorateClass$t([e$5(".awc-select__input")],exports.AwcSelect.prototype,"inputElement",2),__decorateClass$t([e$5(".awc-select")],exports.AwcSelect.prototype,"validationTarget",2),__decorateClass$t([e$5(".awc-select-list")],exports.AwcSelect.prototype,"optionList",2),__decorateClass$t([e$5(".awc-select")],exports.AwcSelect.prototype,"_selectHead",2),__decorateClass$t([e$5(".awc-select__options")],exports.AwcSelect.prototype,"_selectOptions",2),__decorateClass$t([r$1()],exports.AwcSelect.prototype,"validationMessage",2),__decorateClass$t([r$1()],exports.AwcSelect.prototype,"headContent",2),__decorateClass$t([r$1()],exports.AwcSelect.prototype,"searchText",2),__decorateClass$t([r$1()],exports.AwcSelect.prototype,"filteredOptions",2),__decorateClass$t([r$1()],exports.AwcSelect.prototype,"isOptionListReverse",2),exports.AwcSelect=__decorateClass$t([t$1(awcSelectTag)],exports.AwcSelect);const dieStyle=i$4`
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
  */const e=Symbol.for(""),o=B=>{if((B==null?void 0:B.r)===e)return B==null?void 0:B._$litStatic$},a=new Map,l=B=>(O,...D)=>{const F=D.length;let q,G;const U=[],Y=[];let Q,ne=0,oe=!1;for(;ne<F;){for(Q=O[ne];ne<F&&(G=D[ne],(q=o(G))!==void 0);)Q+=q+O[++ne],oe=!0;ne!==F&&Y.push(G),U.push(Q),ne++}if(ne===F&&U.push(O[F]),oe){const ce=U.join("$$lit$$");(O=a.get(ce))===void 0&&(U.raw=U,a.set(ce,O=U)),D=Y}return B(O,...D)},u=l(b);var __defProp$s=Object.defineProperty,__getOwnPropDesc$s=Object.getOwnPropertyDescriptor,__decorateClass$s=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$s(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$s(O,D,q),q};exports.AwcDie=class extends s{constructor(){super(...arguments),this.text="",this.placeholder="",this.editing=!1,this.color="--colors-light-primary"}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",this.handleFocus),this.addEventListener("blur",this.handleBlur),this.addEventListener("dblclick",this.handleMouseDown)}handleFocus(){this._onFocus(this.text)}handleBlur(){this._onBlur(this.text),this.stopEditing(),this.triggerChange()}handleMouseDown(){this.startEditing(),this.setCursorToEnd()}handleInput(){this.contentElement&&(this.text=this.contentElement.value)}handleEnterKey(O){O.key==="Enter"&&(O.preventDefault(),this.handleFocus(),this.blur())}setCursorToEnd(){if(this.contentElement){const O=this.contentElement.value.length;this.contentElement.setSelectionRange(O,O)}}startEditing(){this.editing=!0}stopEditing(){this.editing=!1}triggerChange(){this._onChange(this.text)}updated(O){super.updated(O),O.has("editing")?(this._renderEditMode(),this.contentElement&&this.contentElement.focus()):this._renderReadOnlyMode()}_renderEditMode(){return x`
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
         `}_renderIcon(){const O=u`
             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M2 5C1.44772 5 1 5.44772 1 6C1 6.55228 1.44772 7 2 7H14C14.5523 7 15 6.5523 15 6C15 5.44772 14.5523 5 14 5H2ZM2 9C1.44772 9 1 9.44772 1 10C1 10.5523 1.44772 11 2 11H14C14.5523 11 15 10.5523 15 10C15 9.44772 14.5523 9 14 9H2Z" fill="#919BB6"/>
             </svg>
         `;return x`
             <div class='awc-die__icon'>
                 ${O}
             </div>
         `}render(){const O=this.color&&this.color.startsWith("--");return x`
             <div class='awc-die' style=${O?`--awc-die-color: var(${this.color})`:`--awc-die-color: ${this.color}`} >
                 ${this._renderIcon()}
                 <div class='awc-die__main'>
                     ${this.editing?this._renderEditMode():this._renderReadOnlyMode()}
                 </div>
                 <div class='awc-die__slotted'>
                     <slot></slot>
                 </div>
             </div>
         `}},exports.AwcDie.styles=[dieStyle],__decorateClass$s([n({type:String})],exports.AwcDie.prototype,"text",2),__decorateClass$s([n({type:String})],exports.AwcDie.prototype,"placeholder",2),__decorateClass$s([n({type:Boolean,reflect:!0})],exports.AwcDie.prototype,"editing",2),__decorateClass$s([n({type:String,attribute:"color"})],exports.AwcDie.prototype,"color",2),__decorateClass$s([event("awc-die-change")],exports.AwcDie.prototype,"_onChange",2),__decorateClass$s([event("awc-die-focus")],exports.AwcDie.prototype,"_onFocus",2),__decorateClass$s([event("awc-die-blur")],exports.AwcDie.prototype,"_onBlur",2),__decorateClass$s([e$5(".awc-die__content--edit")],exports.AwcDie.prototype,"contentElement",2),exports.AwcDie=__decorateClass$s([t$1("awc-die")],exports.AwcDie);const stagerStyle=i$4`
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
 
 `;var __defProp$r=Object.defineProperty,__getOwnPropDesc$r=Object.getOwnPropertyDescriptor,__decorateClass$r=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$r(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$r(O,D,q),q};exports.AwcStager=class extends s{constructor(){super(...arguments),this.steps=5,this.current=2,this.stepColor="--colors-light-primary",this._connected=!1}connectedCallback(){super.connectedCallback(),this._connected=!0,this._stepUpdater()}_handleChange(){this._onChange(this.current)}_colorUpdater(O){O&&(this.stepColor.startsWith("--")?O.style.cssText=`background-color: var(${this.stepColor})`:O.style.cssText=`background-color: ${this.stepColor}`)}_stepUpdater(){var F;if(!this._connected)return;let O=this.current;(isNaN(O)||O<1)&&(O=1,this.current=O),((F=this.shadowRoot)==null?void 0:F.querySelectorAll(".awc-stager__item")).forEach((q,G)=>{const Y=G+1<O+1;q.classList.toggle("awc-stager__item--current",Y)&&this._colorUpdater(q)})}attributeChangedCallback(O,D,F){super.attributeChangedCallback(O,D,F),O==="step-color"&&F!==null&&(this.stepColor=F,this._stepUpdater())}updated(O){super.updated(O),O.has("current")&&(this._stepUpdater(),this._handleChange())}render(){return x`
       <div class="awc-stager">
         <div class="awc-stager__progress">${this._renderProgress()}</div>
       </div>
     `}_renderProgress(){return Array.from({length:this.steps},()=>x`<div class="awc-stager__item"></div>`)}},exports.AwcStager.styles=[stagerStyle],__decorateClass$r([n({type:Number,reflect:!0})],exports.AwcStager.prototype,"steps",2),__decorateClass$r([n({type:Number,reflect:!0})],exports.AwcStager.prototype,"current",2),__decorateClass$r([n({type:String,attribute:"step-color"})],exports.AwcStager.prototype,"stepColor",2),__decorateClass$r([event("awc-stager-change")],exports.AwcStager.prototype,"_onChange",2),exports.AwcStager=__decorateClass$r([t$1("awc-stager")],exports.AwcStager);const chipsStyle=i$4`
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
 `;var __defProp$q=Object.defineProperty,__getOwnPropDesc$q=Object.getOwnPropertyDescriptor,__decorateClass$q=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$q(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$q(O,D,q),q};exports.AwcChips=class extends s{constructor(){super(...arguments),this.resetButton=!1}_checkedAwcAvatar(){this.slotElement.assignedNodes().filter(D=>D.nodeName.toLowerCase()==="awc-avatar").length===1?this.chips.classList.add("awc-chips__avatar"):this.chips.classList.remove("awc-chips__avatar")}handleResetClick(){this._onRemoveChips(this.resetButton)}updated(O){super.updated(O),this._checkedAwcAvatar()}render(){return x`
             <div class='awc-chips'>
                 <slot @slotchange=${this._checkedAwcAvatar}></slot>
                 ${this.resetButton?x`
                     <svg class="awc-chips__reset" @click=${this.handleResetClick} width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                         <path fill-rule="evenodd" clip-rule="evenodd" d="M5.70713 4.29291C5.3166 3.90239 4.68344 3.90239 4.29291 4.29291C3.90239 4.68344 3.90239 5.3166 4.29291 5.70713L6.58237 7.99658L4.29185 10.294C3.90191 10.6851 3.90286 11.3182 4.29397 11.7082C4.68508 12.0981 5.31824 12.0972 5.70818 11.7061L7.99659 9.4108L10.2929 11.7071C10.6834 12.0976 11.3166 12.0976 11.7071 11.7071C12.0976 11.3166 12.0976 10.6834 11.7071 10.2929L9.40868 7.99447L11.6902 5.70607C12.0802 5.31496 12.0792 4.68179 11.6881 4.29185C11.297 3.90191 10.6638 3.90286 10.2739 4.29397L7.99447 6.58025L5.70713 4.29291Z"/>
                     </svg>`:""}
             </div>
         `}},exports.AwcChips.styles=[chipsStyle],__decorateClass$q([n({type:Boolean,reflect:!0,attribute:"reset-button"})],exports.AwcChips.prototype,"resetButton",2),__decorateClass$q([event("awc-chips-reset")],exports.AwcChips.prototype,"_onRemoveChips",2),__decorateClass$q([e$5(".awc-chips")],exports.AwcChips.prototype,"chips",2),__decorateClass$q([e$5("slot")],exports.AwcChips.prototype,"slotElement",2),exports.AwcChips=__decorateClass$q([t$1("awc-chips")],exports.AwcChips);const userInfoStyle=i$4`
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
 `;var __defProp$p=Object.defineProperty,__getOwnPropDesc$p=Object.getOwnPropertyDescriptor,__decorateClass$p=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$p(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$p(O,D,q),q};exports.AwcUserInfo=class extends s{constructor(){super(...arguments),this.reverse=!1,this.status="none",this.target="_self",this.avatatColor=AvatarColor.GlobalBlue400}render(){return this.href?x`
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
                   size="32"
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
                   size="32"
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
         `}},exports.AwcUserInfo.styles=[userInfoStyle],__decorateClass$p([n({type:String,reflect:!0})],exports.AwcUserInfo.prototype,"name",2),__decorateClass$p([n({type:String,reflect:!0})],exports.AwcUserInfo.prototype,"description",2),__decorateClass$p([n({type:Boolean,reflect:!0})],exports.AwcUserInfo.prototype,"reverse",2),__decorateClass$p([n({type:String,reflect:!0,attribute:"avatar-status"})],exports.AwcUserInfo.prototype,"status",2),__decorateClass$p([n({type:String,attribute:"avatar-image"})],exports.AwcUserInfo.prototype,"avatarLink",2),__decorateClass$p([n({type:String})],exports.AwcUserInfo.prototype,"target",2),__decorateClass$p([n({type:String,attribute:"avatar-custom-color"})],exports.AwcUserInfo.prototype,"avatarCustomColor",2),__decorateClass$p([n({type:String})],exports.AwcUserInfo.prototype,"href",2),__decorateClass$p([n({type:String,attribute:"avatar-color"})],exports.AwcUserInfo.prototype,"avatatColor",2),exports.AwcUserInfo=__decorateClass$p([t$1("awc-user-info")],exports.AwcUserInfo);const awcButtonGroupStyle=i$4`
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
 `,awcButtonGroupItemStyle=i$4`
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
 `;var __defProp$o=Object.defineProperty,__getOwnPropDesc$o=Object.getOwnPropertyDescriptor,__decorateClass$o=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$o(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$o(O,D,q),q};const awcButtonGroupItemTag="awc-button-group-item";exports.AwcButtonGroupItem=class extends s{constructor(){super(...arguments),this.expanded=!1,this.readonly=!1,this.disabled=!1}render(){return x`
       <button
         ?readonly=${this.readonly}
         ?expanded=${this.expanded}
         ?disabled=${this.disabled}
         class="awc-button-group-item ${this.position}"
       >
         <slot></slot>
       </button>
     `}},exports.AwcButtonGroupItem.styles=[awcButtonGroupItemStyle],__decorateClass$o([n({type:Boolean,reflect:!0})],exports.AwcButtonGroupItem.prototype,"expanded",2),__decorateClass$o([n({type:Boolean,reflect:!0})],exports.AwcButtonGroupItem.prototype,"readonly",2),__decorateClass$o([n({type:Boolean,reflect:!0})],exports.AwcButtonGroupItem.prototype,"disabled",2),__decorateClass$o([n({type:String})],exports.AwcButtonGroupItem.prototype,"position",2),exports.AwcButtonGroupItem=__decorateClass$o([t$1(awcButtonGroupItemTag)],exports.AwcButtonGroupItem);var __defProp$n=Object.defineProperty,__getOwnPropDesc$n=Object.getOwnPropertyDescriptor,__decorateClass$n=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$n(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$n(O,D,q),q};const awcButtonGroupTag="awc-button-group";exports.AwcButtonGroup=class extends s{constructor(){super(...arguments),this.disabled=!1}get buttons(){return[...this.querySelectorAll(awcButtonGroupItemTag)]}_checkInternalButtonGroup(){this.buttons&&this.buttons.length&&this._combiningButtons(this.buttons)}_combiningButtons(O){if(!O||O.length===0)return;let D=-1;O.forEach((F,q)=>{q===0?F.position="first":q===O.length-1?F.position="last":(F.position="inner",D=q)}),D!==-1&&(O[D].position="inner inner-last")}render(){return x`
       <div class="awc-button-group">
         <slot @slotchange="${this._checkInternalButtonGroup}"></slot>
       </div>
     `}},exports.AwcButtonGroup.styles=[awcButtonGroupStyle],__decorateClass$n([n({type:Boolean,reflect:!0})],exports.AwcButtonGroup.prototype,"disabled",2),exports.AwcButtonGroup=__decorateClass$n([t$1(awcButtonGroupTag)],exports.AwcButtonGroup);const accordionItemStyle=i$4`
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
 `;var __defProp$m=Object.defineProperty,__getOwnPropDesc$m=Object.getOwnPropertyDescriptor,__decorateClass$m=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$m(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$m(O,D,q),q};const awcAccordionItemTag="awc-accordion-item";exports.AwcAccordionItem=class extends s{constructor(){super(...arguments),this.active=!1,this.disabled=!1}_toggleActive(){this.disabled||(this.active=!this.active,this._onActive(this.active))}render(){const O=b`
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
           ${this.title} ${O}
         </button>
 
         <section
           class="awc-accordion-item__wrapper ${this.active?"active":""}"
         >
           <div ?inert=${!this.active} class="awc-accordion-item__content">
             <slot></slot>
           </div>
         </section>
       </div>
     `}},exports.AwcAccordionItem.styles=[accordionItemStyle],__decorateClass$m([n({type:String,reflect:!0})],exports.AwcAccordionItem.prototype,"title",2),__decorateClass$m([n({type:Boolean,reflect:!0})],exports.AwcAccordionItem.prototype,"active",2),__decorateClass$m([n({type:Boolean,reflect:!0})],exports.AwcAccordionItem.prototype,"disabled",2),__decorateClass$m([event("awc-accordion-toggle")],exports.AwcAccordionItem.prototype,"_onActive",2),exports.AwcAccordionItem=__decorateClass$m([t$1(awcAccordionItemTag)],exports.AwcAccordionItem);const accordionStyle=i$4`
     :host{
         display: block;
     }
 
     :host([disabled]){
         opacity: .5;
         pointer-events: none;
         touch-action: none;
     }
 
 `;var __defProp$l=Object.defineProperty,__getOwnPropDesc$l=Object.getOwnPropertyDescriptor,__decorateClass$l=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$l(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$l(O,D,q),q};const awcAccordionTag="awc-accordion";exports.AwcAccordion=class extends s{constructor(){super(...arguments),this.disabled=!1,this.autoclose=!1}get accordionItems(){return[...this.querySelectorAll(awcAccordionItemTag)]}_autocloseAccordionItem(O){if(!this.autoclose)return;const D=O.target;D.disabled&&this.disabled||(D.active?(this.accordionItems.forEach(F=>F.active=!1),D.active=!0):(D.active=!0,D.active&&(D.active=!1)))}_handleAccordionItem(O){this._autocloseAccordionItem(O)}_shutdownAllAccordionItems(){this.disabled?this.accordionItems.forEach(O=>O.disabled=!0):this.accordionItems.forEach(O=>O.disabled=!1)}updated(O){super.updated(O),O.has("disabled")&&this._shutdownAllAccordionItems()}render(){return x`
       <div ?disabled=${this.disabled} class="awc-accordion">
         <slot @awc-accordion-toggle=${this._handleAccordionItem}></slot>
       </div>
     `}},exports.AwcAccordion.styles=[accordionStyle],__decorateClass$l([n({type:Boolean,reflect:!0})],exports.AwcAccordion.prototype,"disabled",2),__decorateClass$l([n({type:Boolean,reflect:!0})],exports.AwcAccordion.prototype,"autoclose",2),exports.AwcAccordion=__decorateClass$l([t$1(awcAccordionTag)],exports.AwcAccordion);const awcRangeStyle=i$4`
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
 `,awcRangeItemStyle=i$4`
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
 `;var __defProp$k=Object.defineProperty,__getOwnPropDesc$k=Object.getOwnPropertyDescriptor,__decorateClass$k=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$k(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$k(O,D,q),q};const awcRangeItemTag="awc-range-item";exports.AwcRangeItem=class extends s{constructor(){super(...arguments),this.value="0"}render(){return x`
       <li value=${this.value} class="awc-range-item">
         <p class="awc-range-item__text"><slot></slot></p>
       </li>
     `}},exports.AwcRangeItem.styles=[awcRangeItemStyle],__decorateClass$k([n({type:String,reflect:!0})],exports.AwcRangeItem.prototype,"value",2),exports.AwcRangeItem=__decorateClass$k([t$1(awcRangeItemTag)],exports.AwcRangeItem);var __defProp$j=Object.defineProperty,__getOwnPropDesc$j=Object.getOwnPropertyDescriptor,__decorateClass$j=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$j(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$j(O,D,q),q};exports.AwcRange=class extends FormControlMixin(s){constructor(){super(...arguments),this.name="0",this.value="0",this.marker=!1,this.min=0,this.max=100,this.step=1}get rangeItem(){return[...this.querySelectorAll(awcRangeItemTag)]}updated(O){super.updated(O),O.has("value")&&this.setValue(this.value)}_handleMarkers(O){const D=O.target;!D||D.tagName!=="AWC-RANGE-ITEM"||(this.value=D.value,this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0})))}_handleInputValue(O){const D=O.target;this.value=D.value,this.dispatchEvent(new Event("input",{composed:!0,bubbles:!0}))}_handleChangeValue(O){const D=O.target;this.value=D.value,this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}render(){return x`
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
     `}},exports.AwcRange.styles=[awcRangeStyle],__decorateClass$j([n({type:String,reflect:!0})],exports.AwcRange.prototype,"name",2),__decorateClass$j([n({type:String,reflect:!0})],exports.AwcRange.prototype,"value",2),__decorateClass$j([n({type:String,reflect:!0})],exports.AwcRange.prototype,"label",2),__decorateClass$j([n({type:Boolean,reflect:!0})],exports.AwcRange.prototype,"marker",2),__decorateClass$j([n({type:Boolean,reflect:!0})],exports.AwcRange.prototype,"disabled",2),__decorateClass$j([n({type:Number,reflect:!0})],exports.AwcRange.prototype,"min",2),__decorateClass$j([n({type:Number,reflect:!0})],exports.AwcRange.prototype,"max",2),__decorateClass$j([n({type:Number,reflect:!0})],exports.AwcRange.prototype,"step",2),exports.AwcRange=__decorateClass$j([t$1("awc-range")],exports.AwcRange);const progressBarStyle=i$4`
     :host {
         display: inline-flex;
         width: 100%;
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
         height: 8px;
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
 `;var __defProp$i=Object.defineProperty,__getOwnPropDesc$i=Object.getOwnPropertyDescriptor,__decorateClass$i=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$i(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$i(O,D,q),q};const awcProgressBarTag="awc-progress-bar";exports.AwcProgressBar=class extends s{constructor(){super(...arguments),this.value=0,this.max=100,this.label="",this.hidePercent=!1}_validateAndUpdateValues(){(isNaN(this.value)||this.value<0)&&(this.value=0),(isNaN(this.max)||this.max<0)&&(this.max=100),this.value>this.max&&(this.value=this.max,this._onSuccesEvent()),this._updateFillerWidth()}_updateFillerWidth(){const O=this.value/this.max*100;this.fillerElement&&(this.fillerElement.style.width=`${O}%`)}_onSuccesEvent(){const O={value:this.value,maxReached:!0};this._onSucces(O),this._updateFillerWidth()}updated(O){super.updated(O),(O.has("value")||O.has("max"))&&this._validateAndUpdateValues()}render(){const O=this.hidePercent?"":"%";return x`
             <div 
             ?hide-percent=${this.hidePercent}
             class="awc-progress-bar">
                 ${this.label?x`<div class="awc-progress-bar__label">${this.label}: <span class="awc-progress-bar__value">${this.value}${O}</span></div>`:""}
                 <div class="awc-progress-bar__track">
                     <div class="awc-progress-bar__filler"></div>
                 </div>
             </div>
         `}},exports.AwcProgressBar.styles=[progressBarStyle],__decorateClass$i([n({type:Number,reflect:!0})],exports.AwcProgressBar.prototype,"value",2),__decorateClass$i([n({type:Number,reflect:!0})],exports.AwcProgressBar.prototype,"max",2),__decorateClass$i([n({type:String,reflect:!0})],exports.AwcProgressBar.prototype,"label",2),__decorateClass$i([n({type:Boolean,reflect:!0,attribute:"hide-percent"})],exports.AwcProgressBar.prototype,"hidePercent",2),__decorateClass$i([event("awc-progress-bar-success")],exports.AwcProgressBar.prototype,"_onSucces",2),__decorateClass$i([e$5(".awc-progress-bar__filler")],exports.AwcProgressBar.prototype,"fillerElement",2),exports.AwcProgressBar=__decorateClass$i([t$1(awcProgressBarTag)],exports.AwcProgressBar);const emptyStateStyle=i$4`
     
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
 `;var __defProp$h=Object.defineProperty,__getOwnPropDesc$h=Object.getOwnPropertyDescriptor,__decorateClass$h=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$h(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$h(O,D,q),q};const awcEmptyStateTag$1="awc-empty-state";exports.AwcEmptyState=class extends s{constructor(){super(...arguments),this.size="large"}get icons(){return[...this.querySelectorAll(awcIconTag)]}get buttons(){return[...this.querySelectorAll(awcButtonTag)]}_scalingIcon(){this.icons&&this.icons.forEach(O=>{this.size==="large"?O.iconScale="78px":O.iconScale="48px"})}_setCurrentButtons(){this.buttons&&this.buttons.forEach(O=>{this.size==="large"?O.size="large":O.size="regular",O.variant="primary",O.background="blue"})}updated(O){super.updated(O),this._scalingIcon(),this._setCurrentButtons()}render(){return x`
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
     `}},exports.AwcEmptyState.styles=[emptyStateStyle],__decorateClass$h([n({type:String,reflect:!0})],exports.AwcEmptyState.prototype,"head",2),__decorateClass$h([n({type:String,reflect:!0})],exports.AwcEmptyState.prototype,"size",2),exports.AwcEmptyState=__decorateClass$h([t$1(awcEmptyStateTag$1)],exports.AwcEmptyState);const emptyStateLinkStyle=i$4`
 
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
 `;var __defProp$g=Object.defineProperty,__getOwnPropDesc$g=Object.getOwnPropertyDescriptor,__decorateClass$g=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$g(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$g(O,D,q),q};const awcEmptyStateTag="awc-empty-state-link";exports.AwcEmptyStateLink=class extends s{constructor(){super(...arguments),this.target="_self"}render(){return this.href?x`
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
     `}},exports.AwcEmptyStateLink.styles=[emptyStateLinkStyle],__decorateClass$g([n({type:String,reflect:!0})],exports.AwcEmptyStateLink.prototype,"href",2),__decorateClass$g([n({type:String,reflect:!0})],exports.AwcEmptyStateLink.prototype,"target",2),exports.AwcEmptyStateLink=__decorateClass$g([t$1(awcEmptyStateTag)],exports.AwcEmptyStateLink);const tagStyle=i$4`
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
 
 `;var __defProp$f=Object.defineProperty,__getOwnPropDesc$f=Object.getOwnPropertyDescriptor,__decorateClass$f=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$f(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$f(O,D,q),q};const awcTagTag="awc-tag";exports.AwcTag=class extends s{constructor(){super(...arguments),this.baseColor="colors-light-secondary",this.variant="square"}pickTextColorBasedOnBgColor(O,D,F){if(O){let q=O.charAt(0)==="#"?O.substring(1,7):O;const G=parseInt(q.substring(0,2),16),U=parseInt(q.substring(2,4),16),Y=parseInt(q.substring(4,6),16);return G*.299+U*.587+Y*.114>186?F:D}}render(){const O=this.variant==="square"?this.pickTextColorBasedOnBgColor(this.customColor||this.baseColor,"--awc-tag-text-color: #FFFFFF","--awc-tag-text-color: #55555A"):"",D=this.customColor?this.customColor:`var(--${this.baseColor})`;return x`
       <div class="awc-tag" style="--awc-tag-color: ${D}">
         <p class="awc-tag__text" style=${O}><slot></slot></p>
       </div>
     `}},exports.AwcTag.styles=[tagStyle],__decorateClass$f([n({type:String,reflect:!0,attribute:"custom-color"})],exports.AwcTag.prototype,"customColor",2),__decorateClass$f([n({type:String,reflect:!0,attribute:"base-color"})],exports.AwcTag.prototype,"baseColor",2),__decorateClass$f([n({type:String,reflect:!0})],exports.AwcTag.prototype,"variant",2),exports.AwcTag=__decorateClass$f([t$1(awcTagTag)],exports.AwcTag);const colorPickerStyle=i$4`
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
 `;var __defProp$e=Object.defineProperty,__getOwnPropDesc$e=Object.getOwnPropertyDescriptor,__decorateClass$e=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$e(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$e(O,D,q),q};const awcColorPickerTag="awc-color-picker";exports.AwcColorPicker=class extends FormControlMixin(s){constructor(){super(...arguments),this.active=!1,this.reset=!1,this.BASE_PALETTE_COLORS=["#ED3A3A","#F74F4F","#FB7C28","#F8AF28","#FED34A","#81D83C","#5FB829","#1EA679","#35D3AC","#44CADA","#2FB9CE","#52ACF5","#2A8CE3","#3761E9","#5D7EF7","#8360F4","#704AE5","#AC3EC7","#C764DF","#E44662","#FF7188","#919BB6","#55555A","#26263E"],this.activeTab=0}get tabs(){return[...this.querySelectorAll(awcTabTag)]}_triggerChangeEvent(O){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}_handleColorSelection(O){var q;const D=O.currentTarget;if(!D||!D.hasAttribute("value"))return;this.colorItems.forEach(G=>G.classList.remove("active-color")),D.classList.add("active-color");const F=(q=D.getAttribute("value"))==null?void 0:q.toLowerCase();F&&(this.value=F,this._triggerChangeEvent(O),this._onChangeColor(this.value))}_setCustomColorValue(O){this.value=this._inputColor.value}_setDefaultColorInBasePalette(){this.colorItems.forEach(O=>O.classList.remove("active-color")),this.BASE_PALETTE_COLORS.forEach(O=>{this.value&&O===this.value.toUpperCase()&&this.colorItems.forEach(D=>{D.getAttribute("value")===O&&D.classList.add("active-color")})})}_checkAssignedAwcTabs(){if(!this.tabs)return;let O=-1;this.tabs.forEach((D,F)=>{D.active&&(O=F),D.addEventListener("click",()=>{this.activeTab=F,console.log("CLICK")}),D.addEventListener("change",q=>q.stopPropagation())}),O===-1?(this.tabs[0]&&(this.tabs[0].active=!0),this.activeTab=0):this.activeTab=O,this._checkAwcTabsLength()}_checkAwcTabsLength(){this.tabs.length>2&&console.warn("Maximum number of tabs exceeded")}connectedCallback(){super.connectedCallback(),document.addEventListener("DOMContentLoaded",()=>{this._checkAssignedAwcTabs()})}_resetColorPicker(){this._inputColor.value="#000000",this.value="",this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.colorItems.forEach(O=>O.classList.remove("active-color"))}_colorPickerOpenEvent(O){O.detail&&(this.active=!0)}_colorPickerCloseEvent(O){O.detail||(this.active=!1)}updated(O){super.updated(O),O.has("value")&&this.setValue(this.value),this._setDefaultColorInBasePalette(),this.active&&this._popover.addEventListener("focusout",this._handleFocusOut.bind(this))}_handleFocusOut(O){const D=O.relatedTarget;if(!D)return;const F=this._popover.contains(D),q=this.tabs.some(G=>G.contains(D));!F&&!q&&this.close()}open(){this._popover.show()}close(){this._popover.hide()}_togglePopover(){this.active?this.close():this.open()}_triggerKeyboard(O){(O.code==="Enter"||O.code==="Space")&&(this.active?this.close():this.open())}render(){const O=b`
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
                        ${O}
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
     `}},exports.AwcColorPicker.styles=[colorPickerStyle],__decorateClass$e([n({type:String,reflect:!0})],exports.AwcColorPicker.prototype,"name",2),__decorateClass$e([n({type:String,reflect:!0})],exports.AwcColorPicker.prototype,"value",2),__decorateClass$e([n({type:Boolean,reflect:!0})],exports.AwcColorPicker.prototype,"active",2),__decorateClass$e([n({type:Boolean,reflect:!0})],exports.AwcColorPicker.prototype,"reset",2),__decorateClass$e([r$1()],exports.AwcColorPicker.prototype,"BASE_PALETTE_COLORS",2),__decorateClass$e([r$1()],exports.AwcColorPicker.prototype,"activeTab",2),__decorateClass$e([r(".awc-color-picker__color")],exports.AwcColorPicker.prototype,"colorItems",2),__decorateClass$e([e$5("input")],exports.AwcColorPicker.prototype,"_inputColor",2),__decorateClass$e([e$5("slot")],exports.AwcColorPicker.prototype,"_slot",2),__decorateClass$e([e$5("awc-popover")],exports.AwcColorPicker.prototype,"_popover",2),__decorateClass$e([event("awc-color-picker-change")],exports.AwcColorPicker.prototype,"_onChangeColor",2),exports.AwcColorPicker=__decorateClass$e([t$1(awcColorPickerTag)],exports.AwcColorPicker);const notifierStyle=i$4`
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
 `;var __defProp$d=Object.defineProperty,__getOwnPropDesc$d=Object.getOwnPropertyDescriptor,__decorateClass$d=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$d(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$d(O,D,q),q};const awcNotifierTag="awc-notifier";exports.AwcNotifier=class extends s{_onChange(O){O.target&&this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}render(){const O=x`
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
                         ${O}
                     </button>
                 </div>
             </div>
        `}},exports.AwcNotifier.styles=[notifierStyle],exports.AwcNotifier=__decorateClass$d([t$1(awcNotifierTag)],exports.AwcNotifier);const cardStyle=i$4`
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
 `;var __defProp$c=Object.defineProperty,__getOwnPropDesc$c=Object.getOwnPropertyDescriptor,__decorateClass$c=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$c(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$c(O,D,q),q};const awcCardTag="awc-card";exports.AwcCard=class extends s{constructor(){super(...arguments),this.target="_self",this.arrow=!1,this._isModuleIcon=!1}_changeBackgroundIconModule(){this._iconSlot.assignedElements().filter(F=>F.type==="module").length?this._isModuleIcon=!0:this._isModuleIcon=!1}render(){const O=b`
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
                             ${this.arrow?O:""}    
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
                                 ${this.arrow?O:""}    
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
         `}},exports.AwcCard.styles=[cardStyle],__decorateClass$c([n({type:String,reflect:!0})],exports.AwcCard.prototype,"title",2),__decorateClass$c([n({type:String,reflect:!0})],exports.AwcCard.prototype,"subtitle",2),__decorateClass$c([n({type:String,reflect:!0})],exports.AwcCard.prototype,"href",2),__decorateClass$c([n({type:String})],exports.AwcCard.prototype,"target",2),__decorateClass$c([n({type:String,reflect:!0,attribute:"icon-color"})],exports.AwcCard.prototype,"iconColor",2),__decorateClass$c([n({type:Boolean,reflect:!0})],exports.AwcCard.prototype,"arrow",2),__decorateClass$c([e$5("slot[name='icon']")],exports.AwcCard.prototype,"_iconSlot",2),__decorateClass$c([r$1()],exports.AwcCard.prototype,"_isModuleIcon",2),exports.AwcCard=__decorateClass$c([t$1(awcCardTag)],exports.AwcCard);const skeletonStyle=i$4`
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
 `;var __defProp$b=Object.defineProperty,__getOwnPropDesc$b=Object.getOwnPropertyDescriptor,__decorateClass$b=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$b(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$b(O,D,q),q};const awcSkeletonTag="awc-skeleton";exports.AwcSkeleton=class extends s{constructor(){super(...arguments),this.effect="pulse",this.rounded="rounded",this.color="primary"}render(){return x`
             <div class="awc-skeleton">
                 <div class="awc-skeleton__indicator"></div>
             </div>
         `}},exports.AwcSkeleton.styles=[skeletonStyle],__decorateClass$b([n({type:String,reflect:!0})],exports.AwcSkeleton.prototype,"effect",2),__decorateClass$b([n({type:String,reflect:!0})],exports.AwcSkeleton.prototype,"rounded",2),__decorateClass$b([n({type:String,reflect:!0})],exports.AwcSkeleton.prototype,"color",2),exports.AwcSkeleton=__decorateClass$b([t$1(awcSkeletonTag)],exports.AwcSkeleton);const paginationStyle=i$4`
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
 `;var __defProp$a=Object.defineProperty,__getOwnPropDesc$a=Object.getOwnPropertyDescriptor,__decorateClass$a=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$a(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$a(O,D,q),q};const awcPaginationTag="awc-pagination";exports.AwcPagination=class extends s{constructor(){super(...arguments),this._activePage=1,this._itemsPerPage=1,this._totalItemsCount=1,this.first=!1,this.last=!1,this._maxVisibleItems=5,this._ellipsisVisible=!1}get activePage(){return this._activePage}set activePage(O){const D=Math.ceil(this._totalItemsCount/this._itemsPerPage),F=Math.min(Math.max(1,O||1),D),q=this._activePage;F!==q&&(this._activePage=F,this.requestUpdate("activePage",q))}get itemsPerPage(){return this._itemsPerPage}set itemsPerPage(O){const D=Math.max(1,O||1),F=this._itemsPerPage;D!==F&&(this._itemsPerPage=D,this.requestUpdate("itemsPerPage",F))}get totalItemsCount(){return this._totalItemsCount}set totalItemsCount(O){const D=Math.max(1,O||1),F=this._totalItemsCount;D!==F&&(this._totalItemsCount=D,this.requestUpdate("totalItemsCount",F))}_generatePages(O){const D=[],F=Math.floor(this._maxVisibleItems/2);let q=Math.max(1,this.activePage-F),G=Math.min(O,this.activePage+F);this.activePage<=F?G=Math.min(O,this._maxVisibleItems):this.activePage>O-F&&(q=Math.max(1,O-this._maxVisibleItems+1)),O===G&&this._maxVisibleItems!==O&&(O&&G&&q)!==1&&(D.push(1),D.push("..."),this._ellipsisVisible=!0);for(let U=q;U<=G;U++)D.push(U);return this._maxVisibleItems===G&&this._maxVisibleItems!==O&&(this._ellipsisVisible=!0,D.push("..."),D.push(O)),D}_nextPage(){const O=Math.ceil(this.totalItemsCount/this.itemsPerPage);this.activePage<O&&this.activePage++,this._onChange()}_previousPage(){this.activePage>1&&this.activePage--,this._onChange()}_onPageClick(O){typeof O=="number"&&O===this.activePage||typeof O=="number"&&(this.activePage=O,this._onChange())}_handleKeydown(O){var D;if(O.key==="Enter"||O.key===" "){const F=(D=this.shadowRoot)==null?void 0:D.activeElement;if(F!=null&&F.classList.contains("awc-pagination__button--prev"))this._previousPage();else if(F!=null&&F.classList.contains("awc-pagination__button--next"))this._nextPage();else if(F!=null&&F.classList.contains("awc-pagination__button--first"))this._firstPage();else if(F!=null&&F.classList.contains("awc-pagination__button--last"))this._lastPage();else{const q=parseInt(F.textContent,10);this._onPageClick(q)}this._onChange()}}_firstPage(){this.activePage=1,this._onChange()}_lastPage(){const O=Math.ceil(this.totalItemsCount/this.itemsPerPage);this.activePage=O,this._onChange()}_onChange(){this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleKeydown)}disconnectedCallback(){this.removeEventListener("keydown",this._handleKeydown),super.disconnectedCallback()}render(){const O=Math.ceil(this.totalItemsCount/this.itemsPerPage),D=this._generatePages(O),F=x`
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
         `,G=x`
             <span role="button" @click=${this._firstPage} @keydown=${this._handleKeydown} tabIndex="0" class="awc-pagination__button awc-pagination__button--first">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7071 16.2929C17.0976 16.6834 17.0976 17.3166 16.7071 17.7071C16.3166 18.0976 15.6834 18.0976 15.2929 17.7071L10.2929 12.7071C10.1054 12.5196 10 12.2652 10 12C10 11.7348 10.1054 11.4804 10.2929 11.2929L15.2929 6.29289C15.6834 5.90237 16.3166 5.90237 16.7071 6.29289C17.0976 6.68342 17.0976 7.31658 16.7071 7.70711L12.4142 12L16.7071 16.2929ZM8.00004 17C8.00004 17.5523 7.55232 18 7.00004 18C6.44775 18 6.00004 17.5523 6.00004 17V7C6.00004 6.44772 6.44775 6 7.00004 6C7.55232 6 8.00004 6.44772 8.00004 7V17Z" fill="#919BB6"/>
                 </svg>
             </span>
         `,U=x`
             <span role="button" @click=${this._lastPage} tabIndex="0" class="awc-pagination__button awc-pagination__button--last">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29293 16.2929C6.90241 16.6834 6.90241 17.3166 7.29293 17.7071C7.68345 18.0976 8.31662 18.0976 8.70714 17.7071L13.7071 12.7071C13.8947 12.5196 14 12.2652 14 12C14 11.7348 13.8947 11.4804 13.7071 11.2929L8.70714 6.29289C8.31662 5.90237 7.68345 5.90237 7.29293 6.29289C6.90241 6.68342 6.90241 7.31658 7.29293 7.70711L11.5858 12L7.29293 16.2929ZM16 17C16 17.5523 16.4477 18 17 18C17.5523 18 18 17.5523 18 17V7C18 6.44771 17.5523 6 17 6C16.4477 6 16 6.44771 16 7V17Z" fill="#919BB6"/>
                 </svg>
             </span>
         `;return x`
             <nav class="awc-pagination" aria-label="Pagination">
                 ${this.first?G:""}
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
 
                 ${this.activePage<O?q:""}
                 ${this.last?U:""}
             </nav>
         `}},exports.AwcPagination.styles=[paginationStyle],__decorateClass$a([n({type:Number,reflect:!0,attribute:"active-page"})],exports.AwcPagination.prototype,"activePage",1),__decorateClass$a([n({type:Number,reflect:!0,attribute:"items-per-page"})],exports.AwcPagination.prototype,"itemsPerPage",1),__decorateClass$a([n({type:Number,reflect:!0,attribute:"total-items-count"})],exports.AwcPagination.prototype,"totalItemsCount",1),__decorateClass$a([n({type:Boolean,reflect:!0})],exports.AwcPagination.prototype,"first",2),__decorateClass$a([n({type:Boolean,reflect:!0})],exports.AwcPagination.prototype,"last",2),exports.AwcPagination=__decorateClass$a([t$1(awcPaginationTag)],exports.AwcPagination);const headerStyle=i$4`
 
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
 `;var __defProp$9=Object.defineProperty,__getOwnPropDesc$9=Object.getOwnPropertyDescriptor,__decorateClass$9=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$9(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$9(O,D,q),q};const awcHeaderTag="awc-header";exports.AwcHeader=class extends s{render(){return x`
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
         `}},exports.AwcHeader.styles=[headerStyle],exports.AwcHeader=__decorateClass$9([t$1(awcHeaderTag)],exports.AwcHeader);const modalStyles=i$4`
     :host {
         --awc-modal-user-min-height: var(--awc-modal-min-height);
         --awc-modal-padding: 20px;
     }
 
     :host([opened]) .awc-modal {
         position: fixed;
         z-index: 9999;
         left: 0;
         top: 0;
         width: 100%;
         height: 100%;
         min-height: var(--awc-modal-user-min-height, auto);
         background-color: rgba(0, 0, 0, 0.55);
         animation-name: fade-modal;
         transition-duration: 0.3s;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
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
         position: static;
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         width: 100%;
         max-height: 600px;
         max-width: 610px;
         background-color: var(--colors-light-white);
         border-radius: var(--corner-radius-xl);
         will-change: transform;
         transform: scale3d(1, 1, 1);
         box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
         animation: scale-animation 0.3s ease-out forwards;
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
         position: absolute;
         display: none;
         left: -9999px;
     }
 
     :host([heading]) .awc-modal__header--popup {
         justify-content: flex-end;
         align-items: center;
         padding: 20px 20px 0 20px;
     }
 
     .awc-modal__header--popup {
         display: flex;
         padding: 16px 20px;
         border-bottom: 1px solid var(--colors-light-stroke);
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
 
     :host([scrollable]) .awc-modal__body {
         overflow-y: auto;
         padding: 20px 10px 20px 20px;
     }
 
     .awc-modal__body {
         padding: var(--awc-modal-padding);
         position: relative;
         max-height: 600px;
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
 `;var __defProp$8=Object.defineProperty,__getOwnPropDesc$8=Object.getOwnPropertyDescriptor,__decorateClass$8=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$8(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$8(O,D,q),q};const awcModalTag="awc-modal";exports.AwcModal=class extends s{constructor(){super(...arguments),this.opened=!1,this.scrollable=!1,this._isEmptyButtonSlot=!0,this._html=document.querySelector("html"),this._keyClosing=this._handleKeyClosing.bind(this),this._clickOutside=this._handleClickOutside.bind(this)}get tabsGroup(){return this.querySelector(awcTabsGroupTag)}_handleKeyClosing(O){O.key==="Escape"&&this.opened&&this.close()}_handleClickOutside(O){O.composedPath().includes(this.shadowRoot.querySelector(".awc-modal__content"))||this.close()}_toggleScrollLock(){this.opened?this._html.style.overflow="hidden":this._html.style.removeProperty("overflow")}_disableTabsDivider(){this.tabsGroup&&(this.tabsGroup.noDivider=!0)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this._keyClosing),this.addEventListener("click",this._clickOutside)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._keyClosing),this.removeEventListener("click",this._clickOutside)}updated(O){super.updated(O),O.has("opened")&&(this._toggleScrollLock(),this._disableTabsDivider(),this.opened?(this._onInert(),this._modalOpenEvent(this.opened)):(this._removeInert(),this._modalCloseEvent(this.opened))),(O.has("opened")||O.has("slottedButtons"))&&this._checkSlottedButton()}_onInert(){const O=D=>{D.parentNode&&(Array.from(D.parentNode.childNodes).forEach(F=>{F!==D&&F.nodeType===Node.ELEMENT_NODE&&(F.inert=!0)}),D.parentNode!==document.body&&O(D.parentNode))};O(this)}_removeInert(){document.querySelectorAll("[inert]").forEach(O=>{O.inert=!1})}get awcButtons(){return[...this.querySelectorAll("awc-button")]}_checkSlottedButton(){this.awcButtons.filter(D=>D.getAttribute("slot")==="awc-modal-button").length?this._isEmptyButtonSlot=!1:(this._isEmptyButtonSlot=!0,this.description="")}open(){this.opened=!0}close(){this.opened=!1}_renderCloseIcon(){return b`
             <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289Z"/>
             </svg>
         `}render(){const O=x`
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
         `,D=x`
             <div class="awc-modal__header--popup">
                 <slot name="awc-modal-heading"></slot>
             </div>
         `;return x`
             <div class="awc-modal">
                 <div class="awc-modal__content"> 
                     ${this.heading?O:D}
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
         `}},exports.AwcModal.styles=[modalStyles,scrollStyle],__decorateClass$8([n({type:String,reflect:!0})],exports.AwcModal.prototype,"heading",2),__decorateClass$8([n({type:String,reflect:!0})],exports.AwcModal.prototype,"description",2),__decorateClass$8([n({type:Boolean,reflect:!0})],exports.AwcModal.prototype,"opened",2),__decorateClass$8([n({type:Boolean,reflect:!0})],exports.AwcModal.prototype,"scrollable",2),__decorateClass$8([r("slot[name='awc-modal-button']")],exports.AwcModal.prototype,"slottedButtons",2),__decorateClass$8([r$1()],exports.AwcModal.prototype,"_isEmptyButtonSlot",2),__decorateClass$8([event("awc-modal-open")],exports.AwcModal.prototype,"_modalOpenEvent",2),__decorateClass$8([event("awc-modal-close")],exports.AwcModal.prototype,"_modalCloseEvent",2),exports.AwcModal=__decorateClass$8([t$1(awcModalTag)],exports.AwcModal);const popoverStyle=i$4`
     :host {
         display: var(--awc-popover-display, inline-flex);
     }
 
     .awc-popover {
         padding: 12px;
         position: absolute;
         z-index: 99999;
         left: -9999px;
         background-color: var(--colors-light-white);
         box-shadow: 0px 2px 15px 0px #0000001a;
         border-radius: var(--corner-radius-s);
         opacity: 0;
         display: none;
         transition: opacity  0.3s ease;
     }
 
     :host([no-padding]) .awc-popover {
         padding: 0;
     }
 
     .awc-popover.awc-popover--active {
         transition: opacity  0.3s ease;
         display: block;
         opacity: 1;
         max-height: 300px;
     }
 `;var __defProp$7=Object.defineProperty,__getOwnPropDesc$7=Object.getOwnPropertyDescriptor,__decorateClass$7=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$7(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$7(O,D,q),q};const awcPopoverTag="awc-popover",spacingValues={XXS:"2",XS:"4",S:"8",SM:"12",M:"16",L:"20",XL:"24",XXL:"32",XXXL:"40"};exports.AwcPopover=class extends s{constructor(){super(...arguments),this.position="top",this.spacing="S",this.strategy="absolute",this.triggerType="click",this.active=!1,this.disabled=!1,this.noPadding=!1,this.popperInstance=null,this._hoverTimeout=null,this._handleOutsideClick=O=>{O.composedPath().includes(this)||this.hide()},this._onMouseEnter=()=>{this.disabled||(this._hoverTimeout&&clearTimeout(this._hoverTimeout),this.active=!0)},this._onMouseLeave=()=>{this.disabled||(this._hoverTimeout=window.setTimeout(()=>this.active=!1,200))},this._onFocus=()=>{this.disabled||(this.active=!0)},this._onBlur=()=>{this.disabled||(this.active=!1)}}disconnectedCallback(){super.disconnectedCallback(),this._removeOutsideClickHandler()}_createPopperInstance(){this._nestedElement&&this._popoverElement&&(this.popperInstance=createPopper(this._nestedElement,this._popoverElement,{placement:this.position,modifiers:[{name:"offset",options:{offset:[0,spacingValues[this.spacing]]}}],strategy:this.strategy}))}_destroyPopperInstance(){var O;(O=this.popperInstance)==null||O.destroy(),this.popperInstance=null}_addOutsideClickHandler(){document.addEventListener("click",this._handleOutsideClick)}_removeOutsideClickHandler(){document.removeEventListener("click",this._handleOutsideClick)}_setupEventListeners(){if(this._removeEventListeners(),!this.disabled)switch(this.triggerType){case"click":this._nestedElement.addEventListener("click",this.show.bind(this));break;case"hover":this._nestedElement.addEventListener("mouseenter",this._onMouseEnter),this._nestedElement.addEventListener("mouseleave",this._onMouseLeave),this._popoverElement.addEventListener("mouseenter",this._onMouseEnter),this._popoverElement.addEventListener("mouseleave",this._onMouseLeave);break;case"focus":this._nestedElement.addEventListener("focus",this._onFocus,!0),this._nestedElement.addEventListener("blur",this._onBlur,!0);break}}_removeEventListeners(){this._nestedElement.removeEventListener("focus",this._onFocus,!0),this._nestedElement.removeEventListener("blur",this._onBlur,!0),this._nestedElement.removeEventListener("mouseenter",this._onMouseEnter),this._nestedElement.removeEventListener("mouseleave",this._onMouseLeave),this._popoverElement.removeEventListener("mouseenter",this._onMouseEnter),this._popoverElement.removeEventListener("mouseleave",this._onMouseLeave)}updated(O){super.updated(O),O.has("active")&&(this.active?this._createPopperInstance():this._destroyPopperInstance(),this.active?this._popoverOpenEvent(this.active):this._popoverCloseEvent(this.active)),(O.has("triggerType")||O.has("disabled"))&&this._setupEventListeners()}show(){this.disabled||(this.active=!0,this._addOutsideClickHandler())}hide(){this.disabled||(this.active=!1,this._removeOutsideClickHandler())}render(){const O={"awc-popover":!0,"awc-popover--active":this.active};return x`
             <div class="awc-popover__nested">
                 <slot></slot>
             </div>
                 <div class=${e$2(O)}>
                 <slot name="awc-popover-content"></slot>
             </div>
         `}},exports.AwcPopover.shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0},exports.AwcPopover.styles=[popoverStyle],__decorateClass$7([n({reflect:!0})],exports.AwcPopover.prototype,"position",2),__decorateClass$7([n({type:String,reflect:!0})],exports.AwcPopover.prototype,"spacing",2),__decorateClass$7([n({type:String,reflect:!0})],exports.AwcPopover.prototype,"strategy",2),__decorateClass$7([n({type:String,reflect:!0,attribute:"trigger-type"})],exports.AwcPopover.prototype,"triggerType",2),__decorateClass$7([n({type:Boolean,reflect:!0})],exports.AwcPopover.prototype,"active",2),__decorateClass$7([n({type:Boolean,reflect:!0})],exports.AwcPopover.prototype,"disabled",2),__decorateClass$7([n({type:Boolean,reflect:!0,attribute:"no-padding"})],exports.AwcPopover.prototype,"noPadding",2),__decorateClass$7([event("awc-popover-open")],exports.AwcPopover.prototype,"_popoverOpenEvent",2),__decorateClass$7([event("awc-popover-close")],exports.AwcPopover.prototype,"_popoverCloseEvent",2),__decorateClass$7([e$5(".awc-popover")],exports.AwcPopover.prototype,"_popoverElement",2),__decorateClass$7([e$5(".awc-popover__nested")],exports.AwcPopover.prototype,"_nestedElement",2),exports.AwcPopover=__decorateClass$7([t$1(awcPopoverTag)],exports.AwcPopover);const tableWrapperStyles=i$4``;var __defProp$6=Object.defineProperty,__getOwnPropDesc$6=Object.getOwnPropertyDescriptor,__decorateClass$6=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$6(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$6(O,D,q),q};const awcTableWrapperTag="awc-table-wrapper";exports.AwcTableWrapper=class extends s{createRenderRoot(){return this}render(){return x``}},exports.AwcTableWrapper.styles=[tableWrapperStyles],exports.AwcTableWrapper=__decorateClass$6([t$1(awcTableWrapperTag)],exports.AwcTableWrapper);const dialogStyle=i$4`
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
 `;var __defProp$5=Object.defineProperty,__getOwnPropDesc$5=Object.getOwnPropertyDescriptor,__decorateClass$5=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$5(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$5(O,D,q),q};const awcDialogTag="awc-dialog";var DialogVariant=(B=>(B.info="info",B.error="error",B))(DialogVariant||{});const DIALOG_ICONS={infoIcon:b`
     <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 42C33.2696 42 42 33.2696 42 22.5C42 11.7304 33.2696 3 22.5 3C11.7304 3 3 11.7304 3 22.5C3 33.2696 11.7304 42 22.5 42ZM22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45ZM21 9.5C21 8.67157 21.6716 8 22.5 8C23.3284 8 24 8.67157 24 9.5V28.5C24 29.3284 23.3284 30 22.5 30C21.6716 30 21 29.3284 21 28.5V9.5ZM22.5 37C23.3284 37 24 36.3284 24 35.5C24 34.6716 23.3284 34 22.5 34C21.6716 34 21 34.6716 21 35.5C21 36.3284 21.6716 37 22.5 37Z" fill="white"/>
     </svg>
     `,errorIcon:b`
     <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 42C33.2696 42 42 33.2696 42 22.5C42 11.7304 33.2696 3 22.5 3C11.7304 3 3 11.7304 3 22.5C3 33.2696 11.7304 42 22.5 42ZM22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45ZM14.1809 13.6699C13.6817 14.1691 13.6817 14.9786 14.1809 15.4778L20.9474 22.2444L14.181 29.0108C13.6817 29.51 13.6817 30.3195 14.181 30.8187C14.6802 31.318 15.4897 31.318 15.9889 30.8187L22.7554 24.0523L29.5218 30.8187C30.0211 31.318 30.8305 31.318 31.3298 30.8187C31.829 30.3195 31.829 29.51 31.3298 29.0108L24.5633 22.2444L31.3298 15.4778C31.8291 14.9786 31.8291 14.1691 31.3298 13.6699C30.8306 13.1706 30.0211 13.1706 29.5219 13.6699L22.7554 20.4364L15.9888 13.6699C15.4896 13.1706 14.6802 13.1706 14.1809 13.6699Z" fill="white"/>
     </svg>
     `};exports.AwcDialog=class extends s{constructor(){super(...arguments),this.variant="info",this.opened=!1,this._clickOutside=this._handleClickOutside.bind(this)}_handleClickOutside(O){O.composedPath().includes(this.shadowRoot.querySelector(".awc-dialog__content"))||this.close()}_lockBody(){const O=document.querySelector("body");this.opened?(O.style.overflow="hidden",O.style.touchAction="none"):(O.style.removeProperty("overflow"),O.style.removeProperty("touch-action"))}_onInert(){const O=D=>{D.parentNode&&(Array.from(D.parentNode.childNodes).forEach(F=>{F!==D&&F.nodeType===Node.ELEMENT_NODE&&(F.inert=!0)}),D.parentNode!==document.body&&O(D.parentNode))};O(this)}_removeInert(){document.querySelectorAll("[inert]").forEach(O=>{O.inert=!1})}_setCurrentStyleAwcButtonInSlot(){this._slotButtons.assignedElements().forEach(O=>{const D=O;D.size="large"})}open(){this.opened=!0,this._onOpening(this.opened)}close(){this.opened=!1,this._onClosing(this.opened)}_closingOnEscape(O){this.opened&&O.key==="Escape"&&this.close()}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._clickOutside),document.addEventListener("DOMContentLoaded",()=>{this.opened?(this._setCurrentStyleAwcButtonInSlot(),this._onInert()):this._removeInert()})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._clickOutside)}updated(O){super.updated(O),O.has("opened")&&(this.opened?(this._setCurrentStyleAwcButtonInSlot(),this._onInert(),this._dialogContent.focus()):this._removeInert(),this._lockBody())}render(){const O=this.variant==="info"?DIALOG_ICONS.infoIcon:DIALOG_ICONS.errorIcon;return x`
            <div @keydown=${this._closingOnEscape} tabindex="-1" class="awc-dialog">
                 <div tabindex="${this.opened?0:-1}" class="awc-dialog__content" variant=${this.variant}> 
                     <div class="awc-dialog__body">
                         <div class="awc-dialog__icon">
                             ${O}
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
         `}},exports.AwcDialog.shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0},exports.AwcDialog.styles=[dialogStyle],__decorateClass$5([n({type:String,reflect:!0})],exports.AwcDialog.prototype,"heading",2),__decorateClass$5([n({type:String,reflect:!0})],exports.AwcDialog.prototype,"description",2),__decorateClass$5([n({type:String,reflect:!0})],exports.AwcDialog.prototype,"variant",2),__decorateClass$5([n({type:Boolean,reflect:!0})],exports.AwcDialog.prototype,"opened",2),__decorateClass$5([event("awc-dialog-open")],exports.AwcDialog.prototype,"_onOpening",2),__decorateClass$5([event("awc-dialog-close")],exports.AwcDialog.prototype,"_onClosing",2),__decorateClass$5([e$5("slot[name='awc-dialog-button']")],exports.AwcDialog.prototype,"_slotButtons",2),__decorateClass$5([e$5(".awc-dialog__content")],exports.AwcDialog.prototype,"_dialogContent",2),exports.AwcDialog=__decorateClass$5([t$1(awcDialogTag)],exports.AwcDialog);const kr=class kr{static createDialog(O={}){if(this.currentDialog&&this.currentDialog.opened)return null;const{heading:D="Title",description:F="",variant:q=DialogVariant.info,buttons:G=[],timer:U=0}=O,Y=document.createElement("awc-dialog");return Y.heading=D,Y.description=F,Y.variant=q,U>0&&setTimeout(()=>{Y.close()},U),G.forEach(Q=>{const ne=document.createElement("awc-button");ne.textContent=Q.text,ne.variant=Q.variant,ne.background=Q.background,ne.addEventListener("click",()=>{Q.onClick(),Y.close()}),ne.setAttribute("slot","awc-dialog-button"),Y.appendChild(ne)}),document.body.appendChild(Y),Y.open(),this.currentDialog=Y,Y.addEventListener("awc-dialog-close",()=>{document.body.removeChild(Y),this.currentDialog=null},{once:!0}),Y}static info(O){this.createDialog({...O,variant:DialogVariant.info})||console.warn("A dialog is already open.")}static error(O){this.createDialog({...O,variant:DialogVariant.error})||console.warn("A dialog is already open.")}static sweetAlertAdapter(O,D){if(this.currentDialog&&this.currentDialog.opened){console.warn("A dialog is already open.");return}const{title:F="",text:q="",variant:G=DialogVariant.info,showCancelButton:U=!1,confirmButtonText:Y="OK",cancelButtonText:Q="Cancel",timer:ne=0,...oe}=O,ce=[];ce.push({text:Y,variant:"primary",background:"blue",onClick:()=>{D&&D(!0)}}),U&&ce.push({text:Q,variant:"transparent",background:"gray",onClick:()=>{D&&D(!1)}}),this.createDialog({heading:F,description:q,variant:G,buttons:ce,timer:ne,...oe})||console.warn("A dialog is already open.")}};kr.currentDialog=null;let AwcDialogService=kr;window.showAwcDialog={info:AwcDialogService.info.bind(AwcDialogService),error:AwcDialogService.error.bind(AwcDialogService),sweetAlert:AwcDialogService.sweetAlertAdapter.bind(AwcDialogService)};const stackStyle=i$4`
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
 `;var __defProp$4=Object.defineProperty,__getOwnPropDesc$4=Object.getOwnPropertyDescriptor,__decorateClass$4=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$4(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$4(O,D,q),q};const awcStackTag="awc-stack";exports.AwcStack=class extends s{constructor(){super(...arguments),this.flexDirection="row",this.alignItems="start",this.gap="s",this.isInline=!1,this.fullWidth=!1}render(){return x`<slot></slot>`}},exports.AwcStack.styles=[stackStyle],__decorateClass$4([n({type:String,reflect:!0,attribute:"flex-direction"})],exports.AwcStack.prototype,"flexDirection",2),__decorateClass$4([n({type:String,reflect:!0,attribute:"align-items"})],exports.AwcStack.prototype,"alignItems",2),__decorateClass$4([n({type:String,reflect:!0,attribute:"justify-content"})],exports.AwcStack.prototype,"justifyContent",2),__decorateClass$4([n({type:String,reflect:!0})],exports.AwcStack.prototype,"gap",2),__decorateClass$4([n({type:String,reflect:!0,attribute:"flex-wrap"})],exports.AwcStack.prototype,"flexWrap",2),__decorateClass$4([n({type:Boolean,reflect:!0,attribute:"inline-flex"})],exports.AwcStack.prototype,"isInline",2),__decorateClass$4([n({type:Boolean,reflect:!0,attribute:"full-width"})],exports.AwcStack.prototype,"fullWidth",2),exports.AwcStack=__decorateClass$4([t$1(awcStackTag)],exports.AwcStack);const splitButtonStyle=i$4`
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
 `;var __defProp$3=Object.defineProperty,__getOwnPropDesc$3=Object.getOwnPropertyDescriptor,__decorateClass$3=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$3(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$3(O,D,q),q};const awcSplitButtonTag="awc-split-button";exports.AwcSplitButton=class extends s{constructor(){super(...arguments),this.menuOpen=!1}_dropdownClose(O){O.detail.menuOpen||this.splitButtonClose()}splitButtonOpen(){this.menuOpen=!0,this._splitButtonOpened({menuOpen:this.menuOpen})}splitButtonClose(){this.menuOpen=!1,this._splitButtonClosed({menuOpen:this.menuOpen})}_handleDropdown(){this.menuOpen?this.splitButtonClose():this.splitButtonOpen()}render(){return x`
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
     `}},exports.AwcSplitButton.styles=splitButtonStyle,__decorateClass$3([n({type:Boolean,reflect:!0,attribute:"menu-open"})],exports.AwcSplitButton.prototype,"menuOpen",2),__decorateClass$3([event("awc-split-button-close")],exports.AwcSplitButton.prototype,"_splitButtonClosed",2),__decorateClass$3([event("awc-split-button-open")],exports.AwcSplitButton.prototype,"_splitButtonOpened",2),exports.AwcSplitButton=__decorateClass$3([t$1(awcSplitButtonTag)],exports.AwcSplitButton);const awcTripleToggleStyle=i$4`
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
 `;var __defProp$2=Object.defineProperty,__getOwnPropDesc$2=Object.getOwnPropertyDescriptor,__decorateClass$2=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$2(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$2(O,D,q),q};const awcTripleTogglerTag="awc-triple-toggler";exports.AwcTripleToggler=class extends s{constructor(){super(...arguments),this.state="first"}_setState(O){this.state=O}_handleKeydown(O){if(O.key==="ArrowLeft"||O.key==="ArrowRight")switch(O.preventDefault(),this.state){case"first":O.key==="ArrowRight"&&this._setState("second");break;case"second":O.key==="ArrowLeft"&&this._setState("first"),O.key==="ArrowRight"&&this._setState("third");break;case"third":O.key==="ArrowLeft"&&this._setState("second");break}}updated(O){super.updated(O),O.has("state")&&this._onChangeState(this.state)}render(){return x`
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
     `}},exports.AwcTripleToggler.styles=awcTripleToggleStyle,__decorateClass$2([n({type:String,reflect:!0})],exports.AwcTripleToggler.prototype,"state",2),__decorateClass$2([event("awc-triple-toggler-change")],exports.AwcTripleToggler.prototype,"_onChangeState",2),exports.AwcTripleToggler=__decorateClass$2([t$1(awcTripleTogglerTag)],exports.AwcTripleToggler);var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function getDefaultExportFromCjs(B){return B&&B.__esModule&&Object.prototype.hasOwnProperty.call(B,"default")?B.default:B}var jquery$1={exports:{}};/*!
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
  */(function(B){(function(O,D){B.exports=O.document?D(O,!0):function(F){if(!F.document)throw new Error("jQuery requires a window with a document");return D(F)}})(typeof window<"u"?window:commonjsGlobal,function(O,D){var F=[],q=O.document,G=F.slice,U=F.concat,Y=F.push,Q=F.indexOf,ne={},oe=ne.toString,ce=ne.hasOwnProperty,fe={},we="2.2.4",X=function(z,W){return new X.fn.init(z,W)},ve=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,de=/^-ms-/,Ae=/-([\da-z])/gi,Se=function(z,W){return W.toUpperCase()};X.fn=X.prototype={jquery:we,constructor:X,selector:"",length:0,toArray:function(){return G.call(this)},get:function(z){return z!=null?z<0?this[z+this.length]:this[z]:G.call(this)},pushStack:function(z){var W=X.merge(this.constructor(),z);return W.prevObject=this,W.context=this.context,W},each:function(z){return X.each(this,z)},map:function(z){return this.pushStack(X.map(this,function(W,K){return z.call(W,K,W)}))},slice:function(){return this.pushStack(G.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(z){var W=this.length,K=+z+(z<0?W:0);return this.pushStack(K>=0&&K<W?[this[K]]:[])},end:function(){return this.prevObject||this.constructor()},push:Y,sort:F.sort,splice:F.splice},X.extend=X.fn.extend=function(){var z,W,K,J,ee,te,re=arguments[0]||{},ae=1,ue=arguments.length,ge=!1;for(typeof re=="boolean"&&(ge=re,re=arguments[ae]||{},ae++),typeof re!="object"&&!X.isFunction(re)&&(re={}),ae===ue&&(re=this,ae--);ae<ue;ae++)if((z=arguments[ae])!=null)for(W in z)K=re[W],J=z[W],re!==J&&(ge&&J&&(X.isPlainObject(J)||(ee=X.isArray(J)))?(ee?(ee=!1,te=K&&X.isArray(K)?K:[]):te=K&&X.isPlainObject(K)?K:{},re[W]=X.extend(ge,te,J)):J!==void 0&&(re[W]=J));return re},X.extend({expando:"jQuery"+(we+Math.random()).replace(/\D/g,""),isReady:!0,error:function(z){throw new Error(z)},noop:function(){},isFunction:function(z){return X.type(z)==="function"},isArray:Array.isArray,isWindow:function(z){return z!=null&&z===z.window},isNumeric:function(z){var W=z&&z.toString();return!X.isArray(z)&&W-parseFloat(W)+1>=0},isPlainObject:function(z){var W;if(X.type(z)!=="object"||z.nodeType||X.isWindow(z)||z.constructor&&!ce.call(z,"constructor")&&!ce.call(z.constructor.prototype||{},"isPrototypeOf"))return!1;for(W in z);return W===void 0||ce.call(z,W)},isEmptyObject:function(z){var W;for(W in z)return!1;return!0},type:function(z){return z==null?z+"":typeof z=="object"||typeof z=="function"?ne[oe.call(z)]||"object":typeof z},globalEval:function(z){var W,K=eval;z=X.trim(z),z&&(z.indexOf("use strict")===1?(W=q.createElement("script"),W.text=z,q.head.appendChild(W).parentNode.removeChild(W)):K(z))},camelCase:function(z){return z.replace(de,"ms-").replace(Ae,Se)},nodeName:function(z,W){return z.nodeName&&z.nodeName.toLowerCase()===W.toLowerCase()},each:function(z,W){var K,J=0;if(Pe(z))for(K=z.length;J<K&&W.call(z[J],J,z[J])!==!1;J++);else for(J in z)if(W.call(z[J],J,z[J])===!1)break;return z},trim:function(z){return z==null?"":(z+"").replace(ve,"")},makeArray:function(z,W){var K=W||[];return z!=null&&(Pe(Object(z))?X.merge(K,typeof z=="string"?[z]:z):Y.call(K,z)),K},inArray:function(z,W,K){return W==null?-1:Q.call(W,z,K)},merge:function(z,W){for(var K=+W.length,J=0,ee=z.length;J<K;J++)z[ee++]=W[J];return z.length=ee,z},grep:function(z,W,K){for(var J,ee=[],te=0,re=z.length,ae=!K;te<re;te++)J=!W(z[te],te),J!==ae&&ee.push(z[te]);return ee},map:function(z,W,K){var J,ee,te=0,re=[];if(Pe(z))for(J=z.length;te<J;te++)ee=W(z[te],te,K),ee!=null&&re.push(ee);else for(te in z)ee=W(z[te],te,K),ee!=null&&re.push(ee);return U.apply([],re)},guid:1,proxy:function(z,W){var K,J,ee;if(typeof W=="string"&&(K=z[W],W=z,z=K),!!X.isFunction(z))return J=G.call(arguments,2),ee=function(){return z.apply(W||this,J.concat(G.call(arguments)))},ee.guid=z.guid=z.guid||X.guid++,ee},now:Date.now,support:fe}),typeof Symbol=="function"&&(X.fn[Symbol.iterator]=F[Symbol.iterator]),X.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(z,W){ne["[object "+W+"]"]=W.toLowerCase()});function Pe(z){var W=!!z&&"length"in z&&z.length,K=X.type(z);return K==="function"||X.isWindow(z)?!1:K==="array"||W===0||typeof W=="number"&&W>0&&W-1 in z}var ke=function(z){var W,K,J,ee,te,re,ae,ue,ge,pe,Ce,Oe,xe,Ge,Ve,qe,$t,ct,It,Le="sizzle"+1*new Date,pt=z.document,ze=0,it=0,Bt=Vr(),yr=Vr(),xt=Vr(),Wt=function(ie,se){return ie===se&&(Ce=!0),0},Dt=1<<31,Rt={}.hasOwnProperty,_t=[],Ct=_t.pop,li=_t.push,Nt=_t.push,An=_t.slice,Kt=function(ie,se){for(var le=0,_e=ie.length;le<_e;le++)if(ie[le]===se)return le;return-1},Hr="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Qe="[\\x20\\t\\r\\n\\f]",Xt="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",kn="\\["+Qe+"*("+Xt+")(?:"+Qe+"*([*^$|!~]?=)"+Qe+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Xt+"))|)"+Qe+"*\\]",jr=":("+Xt+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+kn+")*)|.*)\\)|)",ui=new RegExp(Qe+"+","g"),$r=new RegExp("^"+Qe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Qe+"+$","g"),pi=new RegExp("^"+Qe+"*,"+Qe+"*"),di=new RegExp("^"+Qe+"*([>+~]|"+Qe+")"+Qe+"*"),hi=new RegExp("="+Qe+`*([^\\]'"]*?)`+Qe+"*\\]","g"),fi=new RegExp(jr),Sn=new RegExp("^"+Xt+"$"),xr={ID:new RegExp("^#("+Xt+")"),CLASS:new RegExp("^\\.("+Xt+")"),TAG:new RegExp("^("+Xt+"|[*])"),ATTR:new RegExp("^"+kn),PSEUDO:new RegExp("^"+jr),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+Qe+"*(even|odd|(([+-]|)(\\d*)n|)"+Qe+"*(?:([+-]|)"+Qe+"*(\\d+)|))"+Qe+"*\\)|)","i"),bool:new RegExp("^(?:"+Hr+")$","i"),needsContext:new RegExp("^"+Qe+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+Qe+"*((?:-\\d)?\\d*)"+Qe+"*\\)|)(?=[^-]|$)","i")},gi=/^(?:input|select|textarea|button)$/i,vi=/^h\d$/i,ur=/^[^{]+\{\s*\[native \w/,wi=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Fr=/[+~]/,_i=/'|\\/g,Lt=new RegExp("\\\\([\\da-f]{1,6}"+Qe+"?|("+Qe+")|.)","ig"),Mt=function(ie,se,le){var _e="0x"+se-65536;return _e!==_e||le?se:_e<0?String.fromCharCode(_e+65536):String.fromCharCode(_e>>10|55296,_e&1023|56320)},On=function(){Oe()};try{Nt.apply(_t=An.call(pt.childNodes),pt.childNodes),_t[pt.childNodes.length].nodeType}catch{Nt={apply:_t.length?function(se,le){li.apply(se,An.call(le))}:function(se,le){for(var _e=se.length,he=0;se[_e++]=le[he++];);se.length=_e-1}}}function rt(ie,se,le,_e){var he,$e,me,Ee,De,Fe,Re,He,Ue=se&&se.ownerDocument,Ye=se?se.nodeType:9;if(le=le||[],typeof ie!="string"||!ie||Ye!==1&&Ye!==9&&Ye!==11)return le;if(!_e&&((se?se.ownerDocument||se:pt)!==xe&&Oe(se),se=se||xe,Ve)){if(Ye!==11&&(Fe=wi.exec(ie)))if(he=Fe[1]){if(Ye===9)if(me=se.getElementById(he)){if(me.id===he)return le.push(me),le}else return le;else if(Ue&&(me=Ue.getElementById(he))&&It(se,me)&&me.id===he)return le.push(me),le}else{if(Fe[2])return Nt.apply(le,se.getElementsByTagName(ie)),le;if((he=Fe[3])&&K.getElementsByClassName&&se.getElementsByClassName)return Nt.apply(le,se.getElementsByClassName(he)),le}if(K.qsa&&!xt[ie+" "]&&(!qe||!qe.test(ie))){if(Ye!==1)Ue=se,He=ie;else if(se.nodeName.toLowerCase()!=="object"){for((Ee=se.getAttribute("id"))?Ee=Ee.replace(_i,"\\$&"):se.setAttribute("id",Ee=Le),Re=re(ie),$e=Re.length,De=Sn.test(Ee)?"#"+Ee:"[id='"+Ee+"']";$e--;)Re[$e]=De+" "+Cr(Re[$e]);He=Re.join(","),Ue=Fr.test(ie)&&zr(se.parentNode)||se}if(He)try{return Nt.apply(le,Ue.querySelectorAll(He)),le}catch{}finally{Ee===Le&&se.removeAttribute("id")}}}return ue(ie.replace($r,"$1"),se,le,_e)}function Vr(){var ie=[];function se(le,_e){return ie.push(le+" ")>J.cacheLength&&delete se[ie.shift()],se[le+" "]=_e}return se}function St(ie){return ie[Le]=!0,ie}function Et(ie){var se=xe.createElement("div");try{return!!ie(se)}catch{return!1}finally{se.parentNode&&se.parentNode.removeChild(se),se=null}}function qr(ie,se){for(var le=ie.split("|"),_e=le.length;_e--;)J.attrHandle[le[_e]]=se}function En(ie,se){var le=se&&ie,_e=le&&ie.nodeType===1&&se.nodeType===1&&(~se.sourceIndex||Dt)-(~ie.sourceIndex||Dt);if(_e)return _e;if(le){for(;le=le.nextSibling;)if(le===se)return-1}return ie?1:-1}function bi(ie){return function(se){var le=se.nodeName.toLowerCase();return le==="input"&&se.type===ie}}function mi(ie){return function(se){var le=se.nodeName.toLowerCase();return(le==="input"||le==="button")&&se.type===ie}}function Zt(ie){return St(function(se){return se=+se,St(function(le,_e){for(var he,$e=ie([],le.length,se),me=$e.length;me--;)le[he=$e[me]]&&(le[he]=!(_e[he]=le[he]))})})}function zr(ie){return ie&&typeof ie.getElementsByTagName<"u"&&ie}K=rt.support={},te=rt.isXML=function(ie){var se=ie&&(ie.ownerDocument||ie).documentElement;return se?se.nodeName!=="HTML":!1},Oe=rt.setDocument=function(ie){var se,le,_e=ie?ie.ownerDocument||ie:pt;return _e===xe||_e.nodeType!==9||!_e.documentElement||(xe=_e,Ge=xe.documentElement,Ve=!te(xe),(le=xe.defaultView)&&le.top!==le&&(le.addEventListener?le.addEventListener("unload",On,!1):le.attachEvent&&le.attachEvent("onunload",On)),K.attributes=Et(function(he){return he.className="i",!he.getAttribute("className")}),K.getElementsByTagName=Et(function(he){return he.appendChild(xe.createComment("")),!he.getElementsByTagName("*").length}),K.getElementsByClassName=ur.test(xe.getElementsByClassName),K.getById=Et(function(he){return Ge.appendChild(he).id=Le,!xe.getElementsByName||!xe.getElementsByName(Le).length}),K.getById?(J.find.ID=function(he,$e){if(typeof $e.getElementById<"u"&&Ve){var me=$e.getElementById(he);return me?[me]:[]}},J.filter.ID=function(he){var $e=he.replace(Lt,Mt);return function(me){return me.getAttribute("id")===$e}}):(delete J.find.ID,J.filter.ID=function(he){var $e=he.replace(Lt,Mt);return function(me){var Ee=typeof me.getAttributeNode<"u"&&me.getAttributeNode("id");return Ee&&Ee.value===$e}}),J.find.TAG=K.getElementsByTagName?function(he,$e){if(typeof $e.getElementsByTagName<"u")return $e.getElementsByTagName(he);if(K.qsa)return $e.querySelectorAll(he)}:function(he,$e){var me,Ee=[],De=0,Fe=$e.getElementsByTagName(he);if(he==="*"){for(;me=Fe[De++];)me.nodeType===1&&Ee.push(me);return Ee}return Fe},J.find.CLASS=K.getElementsByClassName&&function(he,$e){if(typeof $e.getElementsByClassName<"u"&&Ve)return $e.getElementsByClassName(he)},$t=[],qe=[],(K.qsa=ur.test(xe.querySelectorAll))&&(Et(function(he){Ge.appendChild(he).innerHTML="<a id='"+Le+"'></a><select id='"+Le+"-\r\\' msallowcapture=''><option selected=''></option></select>",he.querySelectorAll("[msallowcapture^='']").length&&qe.push("[*^$]="+Qe+`*(?:''|"")`),he.querySelectorAll("[selected]").length||qe.push("\\["+Qe+"*(?:value|"+Hr+")"),he.querySelectorAll("[id~="+Le+"-]").length||qe.push("~="),he.querySelectorAll(":checked").length||qe.push(":checked"),he.querySelectorAll("a#"+Le+"+*").length||qe.push(".#.+[+~]")}),Et(function(he){var $e=xe.createElement("input");$e.setAttribute("type","hidden"),he.appendChild($e).setAttribute("name","D"),he.querySelectorAll("[name=d]").length&&qe.push("name"+Qe+"*[*^$|!~]?="),he.querySelectorAll(":enabled").length||qe.push(":enabled",":disabled"),he.querySelectorAll("*,:x"),qe.push(",.*:")})),(K.matchesSelector=ur.test(ct=Ge.matches||Ge.webkitMatchesSelector||Ge.mozMatchesSelector||Ge.oMatchesSelector||Ge.msMatchesSelector))&&Et(function(he){K.disconnectedMatch=ct.call(he,"div"),ct.call(he,"[s!='']:x"),$t.push("!=",jr)}),qe=qe.length&&new RegExp(qe.join("|")),$t=$t.length&&new RegExp($t.join("|")),se=ur.test(Ge.compareDocumentPosition),It=se||ur.test(Ge.contains)?function(he,$e){var me=he.nodeType===9?he.documentElement:he,Ee=$e&&$e.parentNode;return he===Ee||!!(Ee&&Ee.nodeType===1&&(me.contains?me.contains(Ee):he.compareDocumentPosition&&he.compareDocumentPosition(Ee)&16))}:function(he,$e){if($e){for(;$e=$e.parentNode;)if($e===he)return!0}return!1},Wt=se?function(he,$e){if(he===$e)return Ce=!0,0;var me=!he.compareDocumentPosition-!$e.compareDocumentPosition;return me||(me=(he.ownerDocument||he)===($e.ownerDocument||$e)?he.compareDocumentPosition($e):1,me&1||!K.sortDetached&&$e.compareDocumentPosition(he)===me?he===xe||he.ownerDocument===pt&&It(pt,he)?-1:$e===xe||$e.ownerDocument===pt&&It(pt,$e)?1:pe?Kt(pe,he)-Kt(pe,$e):0:me&4?-1:1)}:function(he,$e){if(he===$e)return Ce=!0,0;var me,Ee=0,De=he.parentNode,Fe=$e.parentNode,Re=[he],He=[$e];if(!De||!Fe)return he===xe?-1:$e===xe?1:De?-1:Fe?1:pe?Kt(pe,he)-Kt(pe,$e):0;if(De===Fe)return En(he,$e);for(me=he;me=me.parentNode;)Re.unshift(me);for(me=$e;me=me.parentNode;)He.unshift(me);for(;Re[Ee]===He[Ee];)Ee++;return Ee?En(Re[Ee],He[Ee]):Re[Ee]===pt?-1:He[Ee]===pt?1:0}),xe},rt.matches=function(ie,se){return rt(ie,null,null,se)},rt.matchesSelector=function(ie,se){if((ie.ownerDocument||ie)!==xe&&Oe(ie),se=se.replace(hi,"='$1']"),K.matchesSelector&&Ve&&!xt[se+" "]&&(!$t||!$t.test(se))&&(!qe||!qe.test(se)))try{var le=ct.call(ie,se);if(le||K.disconnectedMatch||ie.document&&ie.document.nodeType!==11)return le}catch{}return rt(se,xe,null,[ie]).length>0},rt.contains=function(ie,se){return(ie.ownerDocument||ie)!==xe&&Oe(ie),It(ie,se)},rt.attr=function(ie,se){(ie.ownerDocument||ie)!==xe&&Oe(ie);var le=J.attrHandle[se.toLowerCase()],_e=le&&Rt.call(J.attrHandle,se.toLowerCase())?le(ie,se,!Ve):void 0;return _e!==void 0?_e:K.attributes||!Ve?ie.getAttribute(se):(_e=ie.getAttributeNode(se))&&_e.specified?_e.value:null},rt.error=function(ie){throw new Error("Syntax error, unrecognized expression: "+ie)},rt.uniqueSort=function(ie){var se,le=[],_e=0,he=0;if(Ce=!K.detectDuplicates,pe=!K.sortStable&&ie.slice(0),ie.sort(Wt),Ce){for(;se=ie[he++];)se===ie[he]&&(_e=le.push(he));for(;_e--;)ie.splice(le[_e],1)}return pe=null,ie},ee=rt.getText=function(ie){var se,le="",_e=0,he=ie.nodeType;if(he){if(he===1||he===9||he===11){if(typeof ie.textContent=="string")return ie.textContent;for(ie=ie.firstChild;ie;ie=ie.nextSibling)le+=ee(ie)}else if(he===3||he===4)return ie.nodeValue}else for(;se=ie[_e++];)le+=ee(se);return le},J=rt.selectors={cacheLength:50,createPseudo:St,match:xr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(ie){return ie[1]=ie[1].replace(Lt,Mt),ie[3]=(ie[3]||ie[4]||ie[5]||"").replace(Lt,Mt),ie[2]==="~="&&(ie[3]=" "+ie[3]+" "),ie.slice(0,4)},CHILD:function(ie){return ie[1]=ie[1].toLowerCase(),ie[1].slice(0,3)==="nth"?(ie[3]||rt.error(ie[0]),ie[4]=+(ie[4]?ie[5]+(ie[6]||1):2*(ie[3]==="even"||ie[3]==="odd")),ie[5]=+(ie[7]+ie[8]||ie[3]==="odd")):ie[3]&&rt.error(ie[0]),ie},PSEUDO:function(ie){var se,le=!ie[6]&&ie[2];return xr.CHILD.test(ie[0])?null:(ie[3]?ie[2]=ie[4]||ie[5]||"":le&&fi.test(le)&&(se=re(le,!0))&&(se=le.indexOf(")",le.length-se)-le.length)&&(ie[0]=ie[0].slice(0,se),ie[2]=le.slice(0,se)),ie.slice(0,3))}},filter:{TAG:function(ie){var se=ie.replace(Lt,Mt).toLowerCase();return ie==="*"?function(){return!0}:function(le){return le.nodeName&&le.nodeName.toLowerCase()===se}},CLASS:function(ie){var se=Bt[ie+" "];return se||(se=new RegExp("(^|"+Qe+")"+ie+"("+Qe+"|$)"))&&Bt(ie,function(le){return se.test(typeof le.className=="string"&&le.className||typeof le.getAttribute<"u"&&le.getAttribute("class")||"")})},ATTR:function(ie,se,le){return function(_e){var he=rt.attr(_e,ie);return he==null?se==="!=":se?(he+="",se==="="?he===le:se==="!="?he!==le:se==="^="?le&&he.indexOf(le)===0:se==="*="?le&&he.indexOf(le)>-1:se==="$="?le&&he.slice(-le.length)===le:se==="~="?(" "+he.replace(ui," ")+" ").indexOf(le)>-1:se==="|="?he===le||he.slice(0,le.length+1)===le+"-":!1):!0}},CHILD:function(ie,se,le,_e,he){var $e=ie.slice(0,3)!=="nth",me=ie.slice(-4)!=="last",Ee=se==="of-type";return _e===1&&he===0?function(De){return!!De.parentNode}:function(De,Fe,Re){var He,Ue,Ye,Ne,at,dt,mt=$e!==me?"nextSibling":"previousSibling",nt=De.parentNode,pr=Ee&&De.nodeName.toLowerCase(),dr=!Re&&!Ee,yt=!1;if(nt){if($e){for(;mt;){for(Ne=De;Ne=Ne[mt];)if(Ee?Ne.nodeName.toLowerCase()===pr:Ne.nodeType===1)return!1;dt=mt=ie==="only"&&!dt&&"nextSibling"}return!0}if(dt=[me?nt.firstChild:nt.lastChild],me&&dr){for(Ne=nt,Ye=Ne[Le]||(Ne[Le]={}),Ue=Ye[Ne.uniqueID]||(Ye[Ne.uniqueID]={}),He=Ue[ie]||[],at=He[0]===ze&&He[1],yt=at&&He[2],Ne=at&&nt.childNodes[at];Ne=++at&&Ne&&Ne[mt]||(yt=at=0)||dt.pop();)if(Ne.nodeType===1&&++yt&&Ne===De){Ue[ie]=[ze,at,yt];break}}else if(dr&&(Ne=De,Ye=Ne[Le]||(Ne[Le]={}),Ue=Ye[Ne.uniqueID]||(Ye[Ne.uniqueID]={}),He=Ue[ie]||[],at=He[0]===ze&&He[1],yt=at),yt===!1)for(;(Ne=++at&&Ne&&Ne[mt]||(yt=at=0)||dt.pop())&&!((Ee?Ne.nodeName.toLowerCase()===pr:Ne.nodeType===1)&&++yt&&(dr&&(Ye=Ne[Le]||(Ne[Le]={}),Ue=Ye[Ne.uniqueID]||(Ye[Ne.uniqueID]={}),Ue[ie]=[ze,yt]),Ne===De)););return yt-=he,yt===_e||yt%_e===0&&yt/_e>=0}}},PSEUDO:function(ie,se){var le,_e=J.pseudos[ie]||J.setFilters[ie.toLowerCase()]||rt.error("unsupported pseudo: "+ie);return _e[Le]?_e(se):_e.length>1?(le=[ie,ie,"",se],J.setFilters.hasOwnProperty(ie.toLowerCase())?St(function(he,$e){for(var me,Ee=_e(he,se),De=Ee.length;De--;)me=Kt(he,Ee[De]),he[me]=!($e[me]=Ee[De])}):function(he){return _e(he,0,le)}):_e}},pseudos:{not:St(function(ie){var se=[],le=[],_e=ae(ie.replace($r,"$1"));return _e[Le]?St(function(he,$e,me,Ee){for(var De,Fe=_e(he,null,Ee,[]),Re=he.length;Re--;)(De=Fe[Re])&&(he[Re]=!($e[Re]=De))}):function(he,$e,me){return se[0]=he,_e(se,null,me,le),se[0]=null,!le.pop()}}),has:St(function(ie){return function(se){return rt(ie,se).length>0}}),contains:St(function(ie){return ie=ie.replace(Lt,Mt),function(se){return(se.textContent||se.innerText||ee(se)).indexOf(ie)>-1}}),lang:St(function(ie){return Sn.test(ie||"")||rt.error("unsupported lang: "+ie),ie=ie.replace(Lt,Mt).toLowerCase(),function(se){var le;do if(le=Ve?se.lang:se.getAttribute("xml:lang")||se.getAttribute("lang"))return le=le.toLowerCase(),le===ie||le.indexOf(ie+"-")===0;while((se=se.parentNode)&&se.nodeType===1);return!1}}),target:function(ie){var se=z.location&&z.location.hash;return se&&se.slice(1)===ie.id},root:function(ie){return ie===Ge},focus:function(ie){return ie===xe.activeElement&&(!xe.hasFocus||xe.hasFocus())&&!!(ie.type||ie.href||~ie.tabIndex)},enabled:function(ie){return ie.disabled===!1},disabled:function(ie){return ie.disabled===!0},checked:function(ie){var se=ie.nodeName.toLowerCase();return se==="input"&&!!ie.checked||se==="option"&&!!ie.selected},selected:function(ie){return ie.parentNode&&ie.parentNode.selectedIndex,ie.selected===!0},empty:function(ie){for(ie=ie.firstChild;ie;ie=ie.nextSibling)if(ie.nodeType<6)return!1;return!0},parent:function(ie){return!J.pseudos.empty(ie)},header:function(ie){return vi.test(ie.nodeName)},input:function(ie){return gi.test(ie.nodeName)},button:function(ie){var se=ie.nodeName.toLowerCase();return se==="input"&&ie.type==="button"||se==="button"},text:function(ie){var se;return ie.nodeName.toLowerCase()==="input"&&ie.type==="text"&&((se=ie.getAttribute("type"))==null||se.toLowerCase()==="text")},first:Zt(function(){return[0]}),last:Zt(function(ie,se){return[se-1]}),eq:Zt(function(ie,se,le){return[le<0?le+se:le]}),even:Zt(function(ie,se){for(var le=0;le<se;le+=2)ie.push(le);return ie}),odd:Zt(function(ie,se){for(var le=1;le<se;le+=2)ie.push(le);return ie}),lt:Zt(function(ie,se,le){for(var _e=le<0?le+se:le;--_e>=0;)ie.push(_e);return ie}),gt:Zt(function(ie,se,le){for(var _e=le<0?le+se:le;++_e<se;)ie.push(_e);return ie})}},J.pseudos.nth=J.pseudos.eq;for(W in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})J.pseudos[W]=bi(W);for(W in{submit:!0,reset:!0})J.pseudos[W]=mi(W);function Tn(){}Tn.prototype=J.filters=J.pseudos,J.setFilters=new Tn,re=rt.tokenize=function(ie,se){var le,_e,he,$e,me,Ee,De,Fe=yr[ie+" "];if(Fe)return se?0:Fe.slice(0);for(me=ie,Ee=[],De=J.preFilter;me;){(!le||(_e=pi.exec(me)))&&(_e&&(me=me.slice(_e[0].length)||me),Ee.push(he=[])),le=!1,(_e=di.exec(me))&&(le=_e.shift(),he.push({value:le,type:_e[0].replace($r," ")}),me=me.slice(le.length));for($e in J.filter)(_e=xr[$e].exec(me))&&(!De[$e]||(_e=De[$e](_e)))&&(le=_e.shift(),he.push({value:le,type:$e,matches:_e}),me=me.slice(le.length));if(!le)break}return se?me.length:me?rt.error(ie):yr(ie,Ee).slice(0)};function Cr(ie){for(var se=0,le=ie.length,_e="";se<le;se++)_e+=ie[se].value;return _e}function Gr(ie,se,le){var _e=se.dir,he=le&&_e==="parentNode",$e=it++;return se.first?function(me,Ee,De){for(;me=me[_e];)if(me.nodeType===1||he)return ie(me,Ee,De)}:function(me,Ee,De){var Fe,Re,He,Ue=[ze,$e];if(De){for(;me=me[_e];)if((me.nodeType===1||he)&&ie(me,Ee,De))return!0}else for(;me=me[_e];)if(me.nodeType===1||he){if(He=me[Le]||(me[Le]={}),Re=He[me.uniqueID]||(He[me.uniqueID]={}),(Fe=Re[_e])&&Fe[0]===ze&&Fe[1]===$e)return Ue[2]=Fe[2];if(Re[_e]=Ue,Ue[2]=ie(me,Ee,De))return!0}}}function Ur(ie){return ie.length>1?function(se,le,_e){for(var he=ie.length;he--;)if(!ie[he](se,le,_e))return!1;return!0}:ie[0]}function yi(ie,se,le){for(var _e=0,he=se.length;_e<he;_e++)rt(ie,se[_e],le);return le}function Ar(ie,se,le,_e,he){for(var $e,me=[],Ee=0,De=ie.length,Fe=se!=null;Ee<De;Ee++)($e=ie[Ee])&&(!le||le($e,_e,he))&&(me.push($e),Fe&&se.push(Ee));return me}function Wr(ie,se,le,_e,he,$e){return _e&&!_e[Le]&&(_e=Wr(_e)),he&&!he[Le]&&(he=Wr(he,$e)),St(function(me,Ee,De,Fe){var Re,He,Ue,Ye=[],Ne=[],at=Ee.length,dt=me||yi(se||"*",De.nodeType?[De]:De,[]),mt=ie&&(me||!se)?Ar(dt,Ye,ie,De,Fe):dt,nt=le?he||(me?ie:at||_e)?[]:Ee:mt;if(le&&le(mt,nt,De,Fe),_e)for(Re=Ar(nt,Ne),_e(Re,[],De,Fe),He=Re.length;He--;)(Ue=Re[He])&&(nt[Ne[He]]=!(mt[Ne[He]]=Ue));if(me){if(he||ie){if(he){for(Re=[],He=nt.length;He--;)(Ue=nt[He])&&Re.push(mt[He]=Ue);he(null,nt=[],Re,Fe)}for(He=nt.length;He--;)(Ue=nt[He])&&(Re=he?Kt(me,Ue):Ye[He])>-1&&(me[Re]=!(Ee[Re]=Ue))}}else nt=Ar(nt===Ee?nt.splice(at,nt.length):nt),he?he(null,Ee,nt,Fe):Nt.apply(Ee,nt)})}function Kr(ie){for(var se,le,_e,he=ie.length,$e=J.relative[ie[0].type],me=$e||J.relative[" "],Ee=$e?1:0,De=Gr(function(He){return He===se},me,!0),Fe=Gr(function(He){return Kt(se,He)>-1},me,!0),Re=[function(He,Ue,Ye){var Ne=!$e&&(Ye||Ue!==ge)||((se=Ue).nodeType?De(He,Ue,Ye):Fe(He,Ue,Ye));return se=null,Ne}];Ee<he;Ee++)if(le=J.relative[ie[Ee].type])Re=[Gr(Ur(Re),le)];else{if(le=J.filter[ie[Ee].type].apply(null,ie[Ee].matches),le[Le]){for(_e=++Ee;_e<he&&!J.relative[ie[_e].type];_e++);return Wr(Ee>1&&Ur(Re),Ee>1&&Cr(ie.slice(0,Ee-1).concat({value:ie[Ee-2].type===" "?"*":""})).replace($r,"$1"),le,Ee<_e&&Kr(ie.slice(Ee,_e)),_e<he&&Kr(ie=ie.slice(_e)),_e<he&&Cr(ie))}Re.push(le)}return Ur(Re)}function $i(ie,se){var le=se.length>0,_e=ie.length>0,he=function($e,me,Ee,De,Fe){var Re,He,Ue,Ye=0,Ne="0",at=$e&&[],dt=[],mt=ge,nt=$e||_e&&J.find.TAG("*",Fe),pr=ze+=mt==null?1:Math.random()||.1,dr=nt.length;for(Fe&&(ge=me===xe||me||Fe);Ne!==dr&&(Re=nt[Ne])!=null;Ne++){if(_e&&Re){for(He=0,!me&&Re.ownerDocument!==xe&&(Oe(Re),Ee=!Ve);Ue=ie[He++];)if(Ue(Re,me||xe,Ee)){De.push(Re);break}Fe&&(ze=pr)}le&&((Re=!Ue&&Re)&&Ye--,$e&&at.push(Re))}if(Ye+=Ne,le&&Ne!==Ye){for(He=0;Ue=se[He++];)Ue(at,dt,me,Ee);if($e){if(Ye>0)for(;Ne--;)at[Ne]||dt[Ne]||(dt[Ne]=Ct.call(De));dt=Ar(dt)}Nt.apply(De,dt),Fe&&!$e&&dt.length>0&&Ye+se.length>1&&rt.uniqueSort(De)}return Fe&&(ze=pr,ge=mt),at};return le?St(he):he}return ae=rt.compile=function(ie,se){var le,_e=[],he=[],$e=xt[ie+" "];if(!$e){for(se||(se=re(ie)),le=se.length;le--;)$e=Kr(se[le]),$e[Le]?_e.push($e):he.push($e);$e=xt(ie,$i(he,_e)),$e.selector=ie}return $e},ue=rt.select=function(ie,se,le,_e){var he,$e,me,Ee,De,Fe=typeof ie=="function"&&ie,Re=!_e&&re(ie=Fe.selector||ie);if(le=le||[],Re.length===1){if($e=Re[0]=Re[0].slice(0),$e.length>2&&(me=$e[0]).type==="ID"&&K.getById&&se.nodeType===9&&Ve&&J.relative[$e[1].type]){if(se=(J.find.ID(me.matches[0].replace(Lt,Mt),se)||[])[0],se)Fe&&(se=se.parentNode);else return le;ie=ie.slice($e.shift().value.length)}for(he=xr.needsContext.test(ie)?0:$e.length;he--&&(me=$e[he],!J.relative[Ee=me.type]);)if((De=J.find[Ee])&&(_e=De(me.matches[0].replace(Lt,Mt),Fr.test($e[0].type)&&zr(se.parentNode)||se))){if($e.splice(he,1),ie=_e.length&&Cr($e),!ie)return Nt.apply(le,_e),le;break}}return(Fe||ae(ie,Re))(_e,se,!Ve,le,!se||Fr.test(ie)&&zr(se.parentNode)||se),le},K.sortStable=Le.split("").sort(Wt).join("")===Le,K.detectDuplicates=!!Ce,Oe(),K.sortDetached=Et(function(ie){return ie.compareDocumentPosition(xe.createElement("div"))&1}),Et(function(ie){return ie.innerHTML="<a href='#'></a>",ie.firstChild.getAttribute("href")==="#"})||qr("type|href|height|width",function(ie,se,le){if(!le)return ie.getAttribute(se,se.toLowerCase()==="type"?1:2)}),(!K.attributes||!Et(function(ie){return ie.innerHTML="<input/>",ie.firstChild.setAttribute("value",""),ie.firstChild.getAttribute("value")===""}))&&qr("value",function(ie,se,le){if(!le&&ie.nodeName.toLowerCase()==="input")return ie.defaultValue}),Et(function(ie){return ie.getAttribute("disabled")==null})||qr(Hr,function(ie,se,le){var _e;if(!le)return ie[se]===!0?se.toLowerCase():(_e=ie.getAttributeNode(se))&&_e.specified?_e.value:null}),rt}(O);X.find=ke,X.expr=ke.selectors,X.expr[":"]=X.expr.pseudos,X.uniqueSort=X.unique=ke.uniqueSort,X.text=ke.getText,X.isXMLDoc=ke.isXML,X.contains=ke.contains;var ye=function(z,W,K){for(var J=[],ee=K!==void 0;(z=z[W])&&z.nodeType!==9;)if(z.nodeType===1){if(ee&&X(z).is(K))break;J.push(z)}return J},be=function(z,W){for(var K=[];z;z=z.nextSibling)z.nodeType===1&&z!==W&&K.push(z);return K},Te=X.expr.match.needsContext,Ie=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,je=/^.[^:#\[\.,]*$/;function Be(z,W,K){if(X.isFunction(W))return X.grep(z,function(J,ee){return!!W.call(J,ee,J)!==K});if(W.nodeType)return X.grep(z,function(J){return J===W!==K});if(typeof W=="string"){if(je.test(W))return X.filter(W,z,K);W=X.filter(W,z)}return X.grep(z,function(J){return Q.call(W,J)>-1!==K})}X.filter=function(z,W,K){var J=W[0];return K&&(z=":not("+z+")"),W.length===1&&J.nodeType===1?X.find.matchesSelector(J,z)?[J]:[]:X.find.matches(z,X.grep(W,function(ee){return ee.nodeType===1}))},X.fn.extend({find:function(z){var W,K=this.length,J=[],ee=this;if(typeof z!="string")return this.pushStack(X(z).filter(function(){for(W=0;W<K;W++)if(X.contains(ee[W],this))return!0}));for(W=0;W<K;W++)X.find(z,ee[W],J);return J=this.pushStack(K>1?X.unique(J):J),J.selector=this.selector?this.selector+" "+z:z,J},filter:function(z){return this.pushStack(Be(this,z||[],!1))},not:function(z){return this.pushStack(Be(this,z||[],!0))},is:function(z){return!!Be(this,typeof z=="string"&&Te.test(z)?X(z):z||[],!1).length}});var We,et=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,Xe=X.fn.init=function(z,W,K){var J,ee;if(!z)return this;if(K=K||We,typeof z=="string")if(z[0]==="<"&&z[z.length-1]===">"&&z.length>=3?J=[null,z,null]:J=et.exec(z),J&&(J[1]||!W))if(J[1]){if(W=W instanceof X?W[0]:W,X.merge(this,X.parseHTML(J[1],W&&W.nodeType?W.ownerDocument||W:q,!0)),Ie.test(J[1])&&X.isPlainObject(W))for(J in W)X.isFunction(this[J])?this[J](W[J]):this.attr(J,W[J]);return this}else return ee=q.getElementById(J[2]),ee&&ee.parentNode&&(this.length=1,this[0]=ee),this.context=q,this.selector=z,this;else return!W||W.jquery?(W||K).find(z):this.constructor(W).find(z);else{if(z.nodeType)return this.context=this[0]=z,this.length=1,this;if(X.isFunction(z))return K.ready!==void 0?K.ready(z):z(X)}return z.selector!==void 0&&(this.selector=z.selector,this.context=z.context),X.makeArray(z,this)};Xe.prototype=X.fn,We=X(q);var Ke=/^(?:parents|prev(?:Until|All))/,ot={children:!0,contents:!0,next:!0,prev:!0};X.fn.extend({has:function(z){var W=X(z,this),K=W.length;return this.filter(function(){for(var J=0;J<K;J++)if(X.contains(this,W[J]))return!0})},closest:function(z,W){for(var K,J=0,ee=this.length,te=[],re=Te.test(z)||typeof z!="string"?X(z,W||this.context):0;J<ee;J++)for(K=this[J];K&&K!==W;K=K.parentNode)if(K.nodeType<11&&(re?re.index(K)>-1:K.nodeType===1&&X.find.matchesSelector(K,z))){te.push(K);break}return this.pushStack(te.length>1?X.uniqueSort(te):te)},index:function(z){return z?typeof z=="string"?Q.call(X(z),this[0]):Q.call(this,z.jquery?z[0]:z):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(z,W){return this.pushStack(X.uniqueSort(X.merge(this.get(),X(z,W))))},addBack:function(z){return this.add(z==null?this.prevObject:this.prevObject.filter(z))}});function Je(z,W){for(;(z=z[W])&&z.nodeType!==1;);return z}X.each({parent:function(z){var W=z.parentNode;return W&&W.nodeType!==11?W:null},parents:function(z){return ye(z,"parentNode")},parentsUntil:function(z,W,K){return ye(z,"parentNode",K)},next:function(z){return Je(z,"nextSibling")},prev:function(z){return Je(z,"previousSibling")},nextAll:function(z){return ye(z,"nextSibling")},prevAll:function(z){return ye(z,"previousSibling")},nextUntil:function(z,W,K){return ye(z,"nextSibling",K)},prevUntil:function(z,W,K){return ye(z,"previousSibling",K)},siblings:function(z){return be((z.parentNode||{}).firstChild,z)},children:function(z){return be(z.firstChild)},contents:function(z){return z.contentDocument||X.merge([],z.childNodes)}},function(z,W){X.fn[z]=function(K,J){var ee=X.map(this,W,K);return z.slice(-5)!=="Until"&&(J=K),J&&typeof J=="string"&&(ee=X.filter(J,ee)),this.length>1&&(ot[z]||X.uniqueSort(ee),Ke.test(z)&&ee.reverse()),this.pushStack(ee)}});var Ze=/\S+/g;function vt(z){var W={};return X.each(z.match(Ze)||[],function(K,J){W[J]=!0}),W}X.Callbacks=function(z){z=typeof z=="string"?vt(z):X.extend({},z);var W,K,J,ee,te=[],re=[],ae=-1,ue=function(){for(ee=z.once,J=W=!0;re.length;ae=-1)for(K=re.shift();++ae<te.length;)te[ae].apply(K[0],K[1])===!1&&z.stopOnFalse&&(ae=te.length,K=!1);z.memory||(K=!1),W=!1,ee&&(K?te=[]:te="")},ge={add:function(){return te&&(K&&!W&&(ae=te.length-1,re.push(K)),function pe(Ce){X.each(Ce,function(Oe,xe){X.isFunction(xe)?(!z.unique||!ge.has(xe))&&te.push(xe):xe&&xe.length&&X.type(xe)!=="string"&&pe(xe)})}(arguments),K&&!W&&ue()),this},remove:function(){return X.each(arguments,function(pe,Ce){for(var Oe;(Oe=X.inArray(Ce,te,Oe))>-1;)te.splice(Oe,1),Oe<=ae&&ae--}),this},has:function(pe){return pe?X.inArray(pe,te)>-1:te.length>0},empty:function(){return te&&(te=[]),this},disable:function(){return ee=re=[],te=K="",this},disabled:function(){return!te},lock:function(){return ee=re=[],K||(te=K=""),this},locked:function(){return!!ee},fireWith:function(pe,Ce){return ee||(Ce=Ce||[],Ce=[pe,Ce.slice?Ce.slice():Ce],re.push(Ce),W||ue()),this},fire:function(){return ge.fireWith(this,arguments),this},fired:function(){return!!J}};return ge},X.extend({Deferred:function(z){var W=[["resolve","done",X.Callbacks("once memory"),"resolved"],["reject","fail",X.Callbacks("once memory"),"rejected"],["notify","progress",X.Callbacks("memory")]],K="pending",J={state:function(){return K},always:function(){return ee.done(arguments).fail(arguments),this},then:function(){var te=arguments;return X.Deferred(function(re){X.each(W,function(ae,ue){var ge=X.isFunction(te[ae])&&te[ae];ee[ue[1]](function(){var pe=ge&&ge.apply(this,arguments);pe&&X.isFunction(pe.promise)?pe.promise().progress(re.notify).done(re.resolve).fail(re.reject):re[ue[0]+"With"](this===J?re.promise():this,ge?[pe]:arguments)})}),te=null}).promise()},promise:function(te){return te!=null?X.extend(te,J):J}},ee={};return J.pipe=J.then,X.each(W,function(te,re){var ae=re[2],ue=re[3];J[re[1]]=ae.add,ue&&ae.add(function(){K=ue},W[te^1][2].disable,W[2][2].lock),ee[re[0]]=function(){return ee[re[0]+"With"](this===ee?J:this,arguments),this},ee[re[0]+"With"]=ae.fireWith}),J.promise(ee),z&&z.call(ee,ee),ee},when:function(z){var W=0,K=G.call(arguments),J=K.length,ee=J!==1||z&&X.isFunction(z.promise)?J:0,te=ee===1?z:X.Deferred(),re=function(pe,Ce,Oe){return function(xe){Ce[pe]=this,Oe[pe]=arguments.length>1?G.call(arguments):xe,Oe===ae?te.notifyWith(Ce,Oe):--ee||te.resolveWith(Ce,Oe)}},ae,ue,ge;if(J>1)for(ae=new Array(J),ue=new Array(J),ge=new Array(J);W<J;W++)K[W]&&X.isFunction(K[W].promise)?K[W].promise().progress(re(W,ue,ae)).done(re(W,ge,K)).fail(te.reject):--ee;return ee||te.resolveWith(ge,K),te.promise()}});var lt;X.fn.ready=function(z){return X.ready.promise().done(z),this},X.extend({isReady:!1,readyWait:1,holdReady:function(z){z?X.readyWait++:X.ready(!0)},ready:function(z){(z===!0?--X.readyWait:X.isReady)||(X.isReady=!0,!(z!==!0&&--X.readyWait>0)&&(lt.resolveWith(q,[X]),X.fn.triggerHandler&&(X(q).triggerHandler("ready"),X(q).off("ready"))))}});function ht(){q.removeEventListener("DOMContentLoaded",ht),O.removeEventListener("load",ht),X.ready()}X.ready.promise=function(z){return lt||(lt=X.Deferred(),q.readyState==="complete"||q.readyState!=="loading"&&!q.documentElement.doScroll?O.setTimeout(X.ready):(q.addEventListener("DOMContentLoaded",ht),O.addEventListener("load",ht))),lt.promise(z)},X.ready.promise();var st=function(z,W,K,J,ee,te,re){var ae=0,ue=z.length,ge=K==null;if(X.type(K)==="object"){ee=!0;for(ae in K)st(z,W,ae,K[ae],!0,te,re)}else if(J!==void 0&&(ee=!0,X.isFunction(J)||(re=!0),ge&&(re?(W.call(z,J),W=null):(ge=W,W=function(pe,Ce,Oe){return ge.call(X(pe),Oe)})),W))for(;ae<ue;ae++)W(z[ae],K,re?J:J.call(z[ae],ae,W(z[ae],K)));return ee?z:ge?W.call(z):ue?W(z[0],K):te},ft=function(z){return z.nodeType===1||z.nodeType===9||!+z.nodeType};function bt(){this.expando=X.expando+bt.uid++}bt.uid=1,bt.prototype={register:function(z,W){var K=W||{};return z.nodeType?z[this.expando]=K:Object.defineProperty(z,this.expando,{value:K,writable:!0,configurable:!0}),z[this.expando]},cache:function(z){if(!ft(z))return{};var W=z[this.expando];return W||(W={},ft(z)&&(z.nodeType?z[this.expando]=W:Object.defineProperty(z,this.expando,{value:W,configurable:!0}))),W},set:function(z,W,K){var J,ee=this.cache(z);if(typeof W=="string")ee[W]=K;else for(J in W)ee[J]=W[J];return ee},get:function(z,W){return W===void 0?this.cache(z):z[this.expando]&&z[this.expando][W]},access:function(z,W,K){var J;return W===void 0||W&&typeof W=="string"&&K===void 0?(J=this.get(z,W),J!==void 0?J:this.get(z,X.camelCase(W))):(this.set(z,W,K),K!==void 0?K:W)},remove:function(z,W){var K,J,ee,te=z[this.expando];if(te!==void 0){if(W===void 0)this.register(z);else for(X.isArray(W)?J=W.concat(W.map(X.camelCase)):(ee=X.camelCase(W),W in te?J=[W,ee]:(J=ee,J=J in te?[J]:J.match(Ze)||[])),K=J.length;K--;)delete te[J[K]];(W===void 0||X.isEmptyObject(te))&&(z.nodeType?z[this.expando]=void 0:delete z[this.expando])}},hasData:function(z){var W=z[this.expando];return W!==void 0&&!X.isEmptyObject(W)}};var Me=new bt,tt=new bt,Ht=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,jt=/[A-Z]/g;function Ot(z,W,K){var J;if(K===void 0&&z.nodeType===1)if(J="data-"+W.replace(jt,"-$&").toLowerCase(),K=z.getAttribute(J),typeof K=="string"){try{K=K==="true"?!0:K==="false"?!1:K==="null"?null:+K+""===K?+K:Ht.test(K)?X.parseJSON(K):K}catch{}tt.set(z,W,K)}else K=void 0;return K}X.extend({hasData:function(z){return tt.hasData(z)||Me.hasData(z)},data:function(z,W,K){return tt.access(z,W,K)},removeData:function(z,W){tt.remove(z,W)},_data:function(z,W,K){return Me.access(z,W,K)},_removeData:function(z,W){Me.remove(z,W)}}),X.fn.extend({data:function(z,W){var K,J,ee,te=this[0],re=te&&te.attributes;if(z===void 0){if(this.length&&(ee=tt.get(te),te.nodeType===1&&!Me.get(te,"hasDataAttrs"))){for(K=re.length;K--;)re[K]&&(J=re[K].name,J.indexOf("data-")===0&&(J=X.camelCase(J.slice(5)),Ot(te,J,ee[J])));Me.set(te,"hasDataAttrs",!0)}return ee}return typeof z=="object"?this.each(function(){tt.set(this,z)}):st(this,function(ae){var ue,ge;if(te&&ae===void 0)return ue=tt.get(te,z)||tt.get(te,z.replace(jt,"-$&").toLowerCase()),ue!==void 0||(ge=X.camelCase(z),ue=tt.get(te,ge),ue!==void 0)||(ue=Ot(te,ge,void 0),ue!==void 0)?ue:void 0;ge=X.camelCase(z),this.each(function(){var pe=tt.get(this,ge);tt.set(this,ge,ae),z.indexOf("-")>-1&&pe!==void 0&&tt.set(this,z,ae)})},null,W,arguments.length>1,null,!0)},removeData:function(z){return this.each(function(){tt.remove(this,z)})}}),X.extend({queue:function(z,W,K){var J;if(z)return W=(W||"fx")+"queue",J=Me.get(z,W),K&&(!J||X.isArray(K)?J=Me.access(z,W,X.makeArray(K)):J.push(K)),J||[]},dequeue:function(z,W){W=W||"fx";var K=X.queue(z,W),J=K.length,ee=K.shift(),te=X._queueHooks(z,W),re=function(){X.dequeue(z,W)};ee==="inprogress"&&(ee=K.shift(),J--),ee&&(W==="fx"&&K.unshift("inprogress"),delete te.stop,ee.call(z,re,te)),!J&&te&&te.empty.fire()},_queueHooks:function(z,W){var K=W+"queueHooks";return Me.get(z,K)||Me.access(z,K,{empty:X.Callbacks("once memory").add(function(){Me.remove(z,[W+"queue",K])})})}}),X.fn.extend({queue:function(z,W){var K=2;return typeof z!="string"&&(W=z,z="fx",K--),arguments.length<K?X.queue(this[0],z):W===void 0?this:this.each(function(){var J=X.queue(this,z,W);X._queueHooks(this,z),z==="fx"&&J[0]!=="inprogress"&&X.dequeue(this,z)})},dequeue:function(z){return this.each(function(){X.dequeue(this,z)})},clearQueue:function(z){return this.queue(z||"fx",[])},promise:function(z,W){var K,J=1,ee=X.Deferred(),te=this,re=this.length,ae=function(){--J||ee.resolveWith(te,[te])};for(typeof z!="string"&&(W=z,z=void 0),z=z||"fx";re--;)K=Me.get(te[re],z+"queueHooks"),K&&K.empty&&(J++,K.empty.add(ae));return ae(),ee.promise(W)}});var Jt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ft=new RegExp("^(?:([+-])=|)("+Jt+")([a-z%]*)$","i"),At=["Top","Right","Bottom","Left"],Vt=function(z,W){return z=W||z,X.css(z,"display")==="none"||!X.contains(z.ownerDocument,z)};function rr(z,W,K,J){var ee,te=1,re=20,ae=J?function(){return J.cur()}:function(){return X.css(z,W,"")},ue=ae(),ge=K&&K[3]||(X.cssNumber[W]?"":"px"),pe=(X.cssNumber[W]||ge!=="px"&&+ue)&&Ft.exec(X.css(z,W));if(pe&&pe[3]!==ge){ge=ge||pe[3],K=K||[],pe=+ue||1;do te=te||".5",pe=pe/te,X.style(z,W,pe+ge);while(te!==(te=ae()/ue)&&te!==1&&--re)}return K&&(pe=+pe||+ue||0,ee=K[1]?pe+(K[1]+1)*K[2]:+K[2],J&&(J.unit=ge,J.start=pe,J.end=ee)),ee}var hr=/^(?:checkbox|radio)$/i,fr=/<([\w:-]+)/,nr=/^$|\/(?:java|ecma)script/i,gt={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};gt.optgroup=gt.option,gt.tbody=gt.tfoot=gt.colgroup=gt.caption=gt.thead,gt.th=gt.td;function ut(z,W){var K=typeof z.getElementsByTagName<"u"?z.getElementsByTagName(W||"*"):typeof z.querySelectorAll<"u"?z.querySelectorAll(W||"*"):[];return W===void 0||W&&X.nodeName(z,W)?X.merge([z],K):K}function ir(z,W){for(var K=0,J=z.length;K<J;K++)Me.set(z[K],"globalEval",!W||Me.get(W[K],"globalEval"))}var Tt=/<|&#?\w+;/;function qt(z,W,K,J,ee){for(var te,re,ae,ue,ge,pe,Ce=W.createDocumentFragment(),Oe=[],xe=0,Ge=z.length;xe<Ge;xe++)if(te=z[xe],te||te===0)if(X.type(te)==="object")X.merge(Oe,te.nodeType?[te]:te);else if(!Tt.test(te))Oe.push(W.createTextNode(te));else{for(re=re||Ce.appendChild(W.createElement("div")),ae=(fr.exec(te)||["",""])[1].toLowerCase(),ue=gt[ae]||gt._default,re.innerHTML=ue[1]+X.htmlPrefilter(te)+ue[2],pe=ue[0];pe--;)re=re.lastChild;X.merge(Oe,re.childNodes),re=Ce.firstChild,re.textContent=""}for(Ce.textContent="",xe=0;te=Oe[xe++];){if(J&&X.inArray(te,J)>-1){ee&&ee.push(te);continue}if(ge=X.contains(te.ownerDocument,te),re=ut(Ce.appendChild(te),"script"),ge&&ir(re),K)for(pe=0;te=re[pe++];)nr.test(te.type||"")&&K.push(te)}return Ce}(function(){var z=q.createDocumentFragment(),W=z.appendChild(q.createElement("div")),K=q.createElement("input");K.setAttribute("type","radio"),K.setAttribute("checked","checked"),K.setAttribute("name","t"),W.appendChild(K),fe.checkClone=W.cloneNode(!0).cloneNode(!0).lastChild.checked,W.innerHTML="<textarea>x</textarea>",fe.noCloneChecked=!!W.cloneNode(!0).lastChild.defaultValue})();var gr=/^key/,vr=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Yt=/^([^.]*)(?:\.(.+)|)/;function zt(){return!0}function Pt(){return!1}function or(){try{return q.activeElement}catch{}}function Qt(z,W,K,J,ee,te){var re,ae;if(typeof W=="object"){typeof K!="string"&&(J=J||K,K=void 0);for(ae in W)Qt(z,ae,K,J,W[ae],te);return z}if(J==null&&ee==null?(ee=K,J=K=void 0):ee==null&&(typeof K=="string"?(ee=J,J=void 0):(ee=J,J=K,K=void 0)),ee===!1)ee=Pt;else if(!ee)return z;return te===1&&(re=ee,ee=function(ue){return X().off(ue),re.apply(this,arguments)},ee.guid=re.guid||(re.guid=X.guid++)),z.each(function(){X.event.add(this,W,ee,J,K)})}X.event={global:{},add:function(z,W,K,J,ee){var te,re,ae,ue,ge,pe,Ce,Oe,xe,Ge,Ve,qe=Me.get(z);if(qe)for(K.handler&&(te=K,K=te.handler,ee=te.selector),K.guid||(K.guid=X.guid++),(ue=qe.events)||(ue=qe.events={}),(re=qe.handle)||(re=qe.handle=function($t){return typeof X<"u"&&X.event.triggered!==$t.type?X.event.dispatch.apply(z,arguments):void 0}),W=(W||"").match(Ze)||[""],ge=W.length;ge--;)ae=Yt.exec(W[ge])||[],xe=Ve=ae[1],Ge=(ae[2]||"").split(".").sort(),xe&&(Ce=X.event.special[xe]||{},xe=(ee?Ce.delegateType:Ce.bindType)||xe,Ce=X.event.special[xe]||{},pe=X.extend({type:xe,origType:Ve,data:J,handler:K,guid:K.guid,selector:ee,needsContext:ee&&X.expr.match.needsContext.test(ee),namespace:Ge.join(".")},te),(Oe=ue[xe])||(Oe=ue[xe]=[],Oe.delegateCount=0,(!Ce.setup||Ce.setup.call(z,J,Ge,re)===!1)&&z.addEventListener&&z.addEventListener(xe,re)),Ce.add&&(Ce.add.call(z,pe),pe.handler.guid||(pe.handler.guid=K.guid)),ee?Oe.splice(Oe.delegateCount++,0,pe):Oe.push(pe),X.event.global[xe]=!0)},remove:function(z,W,K,J,ee){var te,re,ae,ue,ge,pe,Ce,Oe,xe,Ge,Ve,qe=Me.hasData(z)&&Me.get(z);if(!(!qe||!(ue=qe.events))){for(W=(W||"").match(Ze)||[""],ge=W.length;ge--;){if(ae=Yt.exec(W[ge])||[],xe=Ve=ae[1],Ge=(ae[2]||"").split(".").sort(),!xe){for(xe in ue)X.event.remove(z,xe+W[ge],K,J,!0);continue}for(Ce=X.event.special[xe]||{},xe=(J?Ce.delegateType:Ce.bindType)||xe,Oe=ue[xe]||[],ae=ae[2]&&new RegExp("(^|\\.)"+Ge.join("\\.(?:.*\\.|)")+"(\\.|$)"),re=te=Oe.length;te--;)pe=Oe[te],(ee||Ve===pe.origType)&&(!K||K.guid===pe.guid)&&(!ae||ae.test(pe.namespace))&&(!J||J===pe.selector||J==="**"&&pe.selector)&&(Oe.splice(te,1),pe.selector&&Oe.delegateCount--,Ce.remove&&Ce.remove.call(z,pe));re&&!Oe.length&&((!Ce.teardown||Ce.teardown.call(z,Ge,qe.handle)===!1)&&X.removeEvent(z,xe,qe.handle),delete ue[xe])}X.isEmptyObject(ue)&&Me.remove(z,"handle events")}},dispatch:function(z){z=X.event.fix(z);var W,K,J,ee,te,re=[],ae=G.call(arguments),ue=(Me.get(this,"events")||{})[z.type]||[],ge=X.event.special[z.type]||{};if(ae[0]=z,z.delegateTarget=this,!(ge.preDispatch&&ge.preDispatch.call(this,z)===!1)){for(re=X.event.handlers.call(this,z,ue),W=0;(ee=re[W++])&&!z.isPropagationStopped();)for(z.currentTarget=ee.elem,K=0;(te=ee.handlers[K++])&&!z.isImmediatePropagationStopped();)(!z.rnamespace||z.rnamespace.test(te.namespace))&&(z.handleObj=te,z.data=te.data,J=((X.event.special[te.origType]||{}).handle||te.handler).apply(ee.elem,ae),J!==void 0&&(z.result=J)===!1&&(z.preventDefault(),z.stopPropagation()));return ge.postDispatch&&ge.postDispatch.call(this,z),z.result}},handlers:function(z,W){var K,J,ee,te,re=[],ae=W.delegateCount,ue=z.target;if(ae&&ue.nodeType&&(z.type!=="click"||isNaN(z.button)||z.button<1)){for(;ue!==this;ue=ue.parentNode||this)if(ue.nodeType===1&&(ue.disabled!==!0||z.type!=="click")){for(J=[],K=0;K<ae;K++)te=W[K],ee=te.selector+" ",J[ee]===void 0&&(J[ee]=te.needsContext?X(ee,this).index(ue)>-1:X.find(ee,this,null,[ue]).length),J[ee]&&J.push(te);J.length&&re.push({elem:ue,handlers:J})}}return ae<W.length&&re.push({elem:this,handlers:W.slice(ae)}),re},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(z,W){return z.which==null&&(z.which=W.charCode!=null?W.charCode:W.keyCode),z}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(z,W){var K,J,ee,te=W.button;return z.pageX==null&&W.clientX!=null&&(K=z.target.ownerDocument||q,J=K.documentElement,ee=K.body,z.pageX=W.clientX+(J&&J.scrollLeft||ee&&ee.scrollLeft||0)-(J&&J.clientLeft||ee&&ee.clientLeft||0),z.pageY=W.clientY+(J&&J.scrollTop||ee&&ee.scrollTop||0)-(J&&J.clientTop||ee&&ee.clientTop||0)),!z.which&&te!==void 0&&(z.which=te&1?1:te&2?3:te&4?2:0),z}},fix:function(z){if(z[X.expando])return z;var W,K,J,ee=z.type,te=z,re=this.fixHooks[ee];for(re||(this.fixHooks[ee]=re=vr.test(ee)?this.mouseHooks:gr.test(ee)?this.keyHooks:{}),J=re.props?this.props.concat(re.props):this.props,z=new X.Event(te),W=J.length;W--;)K=J[W],z[K]=te[K];return z.target||(z.target=q),z.target.nodeType===3&&(z.target=z.target.parentNode),re.filter?re.filter(z,te):z},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==or()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===or()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(this.type==="checkbox"&&this.click&&X.nodeName(this,"input"))return this.click(),!1},_default:function(z){return X.nodeName(z.target,"a")}},beforeunload:{postDispatch:function(z){z.result!==void 0&&z.originalEvent&&(z.originalEvent.returnValue=z.result)}}}},X.removeEvent=function(z,W,K){z.removeEventListener&&z.removeEventListener(W,K)},X.Event=function(z,W){if(!(this instanceof X.Event))return new X.Event(z,W);z&&z.type?(this.originalEvent=z,this.type=z.type,this.isDefaultPrevented=z.defaultPrevented||z.defaultPrevented===void 0&&z.returnValue===!1?zt:Pt):this.type=z,W&&X.extend(this,W),this.timeStamp=z&&z.timeStamp||X.now(),this[X.expando]=!0},X.Event.prototype={constructor:X.Event,isDefaultPrevented:Pt,isPropagationStopped:Pt,isImmediatePropagationStopped:Pt,isSimulated:!1,preventDefault:function(){var z=this.originalEvent;this.isDefaultPrevented=zt,z&&!this.isSimulated&&z.preventDefault()},stopPropagation:function(){var z=this.originalEvent;this.isPropagationStopped=zt,z&&!this.isSimulated&&z.stopPropagation()},stopImmediatePropagation:function(){var z=this.originalEvent;this.isImmediatePropagationStopped=zt,z&&!this.isSimulated&&z.stopImmediatePropagation(),this.stopPropagation()}},X.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(z,W){X.event.special[z]={delegateType:W,bindType:W,handle:function(K){var J,ee=this,te=K.relatedTarget,re=K.handleObj;return(!te||te!==ee&&!X.contains(ee,te))&&(K.type=re.origType,J=re.handler.apply(this,arguments),K.type=W),J}}}),X.fn.extend({on:function(z,W,K,J){return Qt(this,z,W,K,J)},one:function(z,W,K,J){return Qt(this,z,W,K,J,1)},off:function(z,W,K){var J,ee;if(z&&z.preventDefault&&z.handleObj)return J=z.handleObj,X(z.delegateTarget).off(J.namespace?J.origType+"."+J.namespace:J.origType,J.selector,J.handler),this;if(typeof z=="object"){for(ee in z)this.off(ee,W,z[ee]);return this}return(W===!1||typeof W=="function")&&(K=W,W=void 0),K===!1&&(K=Pt),this.each(function(){X.event.remove(this,z,K,W)})}});var Pn=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,Ln=/<script|<style|<link/i,Mn=/checked\s*(?:[^=]|=\s*.checked.)/i,In=/^true\/(.*)/,Bn=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Zr(z,W){return X.nodeName(z,"table")&&X.nodeName(W.nodeType!==11?W:W.firstChild,"tr")?z.getElementsByTagName("tbody")[0]||z.appendChild(z.ownerDocument.createElement("tbody")):z}function Dn(z){return z.type=(z.getAttribute("type")!==null)+"/"+z.type,z}function Rn(z){var W=In.exec(z.type);return W?z.type=W[1]:z.removeAttribute("type"),z}function Jr(z,W){var K,J,ee,te,re,ae,ue,ge;if(W.nodeType===1){if(Me.hasData(z)&&(te=Me.access(z),re=Me.set(W,te),ge=te.events,ge)){delete re.handle,re.events={};for(ee in ge)for(K=0,J=ge[ee].length;K<J;K++)X.event.add(W,ee,ge[ee][K])}tt.hasData(z)&&(ae=tt.access(z),ue=X.extend({},ae),tt.set(W,ue))}}function Nn(z,W){var K=W.nodeName.toLowerCase();K==="input"&&hr.test(z.type)?W.checked=z.checked:(K==="input"||K==="textarea")&&(W.defaultValue=z.defaultValue)}function Gt(z,W,K,J){W=U.apply([],W);var ee,te,re,ae,ue,ge,pe=0,Ce=z.length,Oe=Ce-1,xe=W[0],Ge=X.isFunction(xe);if(Ge||Ce>1&&typeof xe=="string"&&!fe.checkClone&&Mn.test(xe))return z.each(function(Ve){var qe=z.eq(Ve);Ge&&(W[0]=xe.call(this,Ve,qe.html())),Gt(qe,W,K,J)});if(Ce&&(ee=qt(W,z[0].ownerDocument,!1,z,J),te=ee.firstChild,ee.childNodes.length===1&&(ee=te),te||J)){for(re=X.map(ut(ee,"script"),Dn),ae=re.length;pe<Ce;pe++)ue=ee,pe!==Oe&&(ue=X.clone(ue,!0,!0),ae&&X.merge(re,ut(ue,"script"))),K.call(z[pe],ue,pe);if(ae)for(ge=re[re.length-1].ownerDocument,X.map(re,Rn),pe=0;pe<ae;pe++)ue=re[pe],nr.test(ue.type||"")&&!Me.access(ue,"globalEval")&&X.contains(ge,ue)&&(ue.src?X._evalUrl&&X._evalUrl(ue.src):X.globalEval(ue.textContent.replace(Bn,"")))}return z}function Yr(z,W,K){for(var J,ee=W?X.filter(W,z):z,te=0;(J=ee[te])!=null;te++)!K&&J.nodeType===1&&X.cleanData(ut(J)),J.parentNode&&(K&&X.contains(J.ownerDocument,J)&&ir(ut(J,"script")),J.parentNode.removeChild(J));return z}X.extend({htmlPrefilter:function(z){return z.replace(Pn,"<$1></$2>")},clone:function(z,W,K){var J,ee,te,re,ae=z.cloneNode(!0),ue=X.contains(z.ownerDocument,z);if(!fe.noCloneChecked&&(z.nodeType===1||z.nodeType===11)&&!X.isXMLDoc(z))for(re=ut(ae),te=ut(z),J=0,ee=te.length;J<ee;J++)Nn(te[J],re[J]);if(W)if(K)for(te=te||ut(z),re=re||ut(ae),J=0,ee=te.length;J<ee;J++)Jr(te[J],re[J]);else Jr(z,ae);return re=ut(ae,"script"),re.length>0&&ir(re,!ue&&ut(z,"script")),ae},cleanData:function(z){for(var W,K,J,ee=X.event.special,te=0;(K=z[te])!==void 0;te++)if(ft(K)){if(W=K[Me.expando]){if(W.events)for(J in W.events)ee[J]?X.event.remove(K,J):X.removeEvent(K,J,W.handle);K[Me.expando]=void 0}K[tt.expando]&&(K[tt.expando]=void 0)}}}),X.fn.extend({domManip:Gt,detach:function(z){return Yr(this,z,!0)},remove:function(z){return Yr(this,z)},text:function(z){return st(this,function(W){return W===void 0?X.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=W)})},null,z,arguments.length)},append:function(){return Gt(this,arguments,function(z){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var W=Zr(this,z);W.appendChild(z)}})},prepend:function(){return Gt(this,arguments,function(z){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var W=Zr(this,z);W.insertBefore(z,W.firstChild)}})},before:function(){return Gt(this,arguments,function(z){this.parentNode&&this.parentNode.insertBefore(z,this)})},after:function(){return Gt(this,arguments,function(z){this.parentNode&&this.parentNode.insertBefore(z,this.nextSibling)})},empty:function(){for(var z,W=0;(z=this[W])!=null;W++)z.nodeType===1&&(X.cleanData(ut(z,!1)),z.textContent="");return this},clone:function(z,W){return z=z??!1,W=W??z,this.map(function(){return X.clone(this,z,W)})},html:function(z){return st(this,function(W){var K=this[0]||{},J=0,ee=this.length;if(W===void 0&&K.nodeType===1)return K.innerHTML;if(typeof W=="string"&&!Ln.test(W)&&!gt[(fr.exec(W)||["",""])[1].toLowerCase()]){W=X.htmlPrefilter(W);try{for(;J<ee;J++)K=this[J]||{},K.nodeType===1&&(X.cleanData(ut(K,!1)),K.innerHTML=W);K=0}catch{}}K&&this.empty().append(W)},null,z,arguments.length)},replaceWith:function(){var z=[];return Gt(this,arguments,function(W){var K=this.parentNode;X.inArray(this,z)<0&&(X.cleanData(ut(this)),K&&K.replaceChild(W,this))},z)}}),X.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(z,W){X.fn[z]=function(K){for(var J,ee=[],te=X(K),re=te.length-1,ae=0;ae<=re;ae++)J=ae===re?this:this.clone(!0),X(te[ae])[W](J),Y.apply(ee,J.get());return this.pushStack(ee)}});var wr,Qr={HTML:"block",BODY:"block"};function en(z,W){var K=X(W.createElement(z)).appendTo(W.body),J=X.css(K[0],"display");return K.detach(),J}function Sr(z){var W=q,K=Qr[z];return K||(K=en(z,W),(K==="none"||!K)&&(wr=(wr||X("<iframe frameborder='0' width='0' height='0'/>")).appendTo(W.documentElement),W=wr[0].contentDocument,W.write(),W.close(),K=en(z,W),wr.detach()),Qr[z]=K),K}var tn=/^margin/,Or=new RegExp("^("+Jt+")(?!px)[a-z%]+$","i"),_r=function(z){var W=z.ownerDocument.defaultView;return(!W||!W.opener)&&(W=O),W.getComputedStyle(z)},Er=function(z,W,K,J){var ee,te,re={};for(te in W)re[te]=z.style[te],z.style[te]=W[te];ee=K.apply(z,J||[]);for(te in W)z.style[te]=re[te];return ee},ar=q.documentElement;(function(){var z,W,K,J,ee=q.createElement("div"),te=q.createElement("div");if(!te.style)return;te.style.backgroundClip="content-box",te.cloneNode(!0).style.backgroundClip="",fe.clearCloneStyle=te.style.backgroundClip==="content-box",ee.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",ee.appendChild(te);function re(){te.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",te.innerHTML="",ar.appendChild(ee);var ae=O.getComputedStyle(te);z=ae.top!=="1%",J=ae.marginLeft==="2px",W=ae.width==="4px",te.style.marginRight="50%",K=ae.marginRight==="4px",ar.removeChild(ee)}X.extend(fe,{pixelPosition:function(){return re(),z},boxSizingReliable:function(){return W==null&&re(),W},pixelMarginRight:function(){return W==null&&re(),K},reliableMarginLeft:function(){return W==null&&re(),J},reliableMarginRight:function(){var ae,ue=te.appendChild(q.createElement("div"));return ue.style.cssText=te.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",ue.style.marginRight=ue.style.width="0",te.style.width="1px",ar.appendChild(ee),ae=!parseFloat(O.getComputedStyle(ue).marginRight),ar.removeChild(ee),te.removeChild(ue),ae}})})();function er(z,W,K){var J,ee,te,re,ae=z.style;return K=K||_r(z),re=K?K.getPropertyValue(W)||K[W]:void 0,(re===""||re===void 0)&&!X.contains(z.ownerDocument,z)&&(re=X.style(z,W)),K&&!fe.pixelMarginRight()&&Or.test(re)&&tn.test(W)&&(J=ae.width,ee=ae.minWidth,te=ae.maxWidth,ae.minWidth=ae.maxWidth=ae.width=re,re=K.width,ae.width=J,ae.minWidth=ee,ae.maxWidth=te),re!==void 0?re+"":re}function Tr(z,W){return{get:function(){if(z()){delete this.get;return}return(this.get=W).apply(this,arguments)}}}var Hn=/^(none|table(?!-c[ea]).+)/,jn={position:"absolute",visibility:"hidden",display:"block"},rn={letterSpacing:"0",fontWeight:"400"},nn=["Webkit","O","Moz","ms"],on=q.createElement("div").style;function an(z){if(z in on)return z;for(var W=z[0].toUpperCase()+z.slice(1),K=nn.length;K--;)if(z=nn[K]+W,z in on)return z}function sn(z,W,K){var J=Ft.exec(W);return J?Math.max(0,J[2]-(K||0))+(J[3]||"px"):W}function cn(z,W,K,J,ee){for(var te=K===(J?"border":"content")?4:W==="width"?1:0,re=0;te<4;te+=2)K==="margin"&&(re+=X.css(z,K+At[te],!0,ee)),J?(K==="content"&&(re-=X.css(z,"padding"+At[te],!0,ee)),K!=="margin"&&(re-=X.css(z,"border"+At[te]+"Width",!0,ee))):(re+=X.css(z,"padding"+At[te],!0,ee),K!=="padding"&&(re+=X.css(z,"border"+At[te]+"Width",!0,ee)));return re}function ln(z,W,K){var J=!0,ee=W==="width"?z.offsetWidth:z.offsetHeight,te=_r(z),re=X.css(z,"boxSizing",!1,te)==="border-box";if(ee<=0||ee==null){if(ee=er(z,W,te),(ee<0||ee==null)&&(ee=z.style[W]),Or.test(ee))return ee;J=re&&(fe.boxSizingReliable()||ee===z.style[W]),ee=parseFloat(ee)||0}return ee+cn(z,W,K||(re?"border":"content"),J,te)+"px"}function un(z,W){for(var K,J,ee,te=[],re=0,ae=z.length;re<ae;re++)J=z[re],J.style&&(te[re]=Me.get(J,"olddisplay"),K=J.style.display,W?(!te[re]&&K==="none"&&(J.style.display=""),J.style.display===""&&Vt(J)&&(te[re]=Me.access(J,"olddisplay",Sr(J.nodeName)))):(ee=Vt(J),(K!=="none"||!ee)&&Me.set(J,"olddisplay",ee?K:X.css(J,"display"))));for(re=0;re<ae;re++)J=z[re],J.style&&(!W||J.style.display==="none"||J.style.display==="")&&(J.style.display=W?te[re]||"":"none");return z}X.extend({cssHooks:{opacity:{get:function(z,W){if(W){var K=er(z,"opacity");return K===""?"1":K}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(z,W,K,J){if(!(!z||z.nodeType===3||z.nodeType===8||!z.style)){var ee,te,re,ae=X.camelCase(W),ue=z.style;if(W=X.cssProps[ae]||(X.cssProps[ae]=an(ae)||ae),re=X.cssHooks[W]||X.cssHooks[ae],K!==void 0){if(te=typeof K,te==="string"&&(ee=Ft.exec(K))&&ee[1]&&(K=rr(z,W,ee),te="number"),K==null||K!==K)return;te==="number"&&(K+=ee&&ee[3]||(X.cssNumber[ae]?"":"px")),!fe.clearCloneStyle&&K===""&&W.indexOf("background")===0&&(ue[W]="inherit"),(!re||!("set"in re)||(K=re.set(z,K,J))!==void 0)&&(ue[W]=K)}else return re&&"get"in re&&(ee=re.get(z,!1,J))!==void 0?ee:ue[W]}},css:function(z,W,K,J){var ee,te,re,ae=X.camelCase(W);return W=X.cssProps[ae]||(X.cssProps[ae]=an(ae)||ae),re=X.cssHooks[W]||X.cssHooks[ae],re&&"get"in re&&(ee=re.get(z,!0,K)),ee===void 0&&(ee=er(z,W,J)),ee==="normal"&&W in rn&&(ee=rn[W]),K===""||K?(te=parseFloat(ee),K===!0||isFinite(te)?te||0:ee):ee}}),X.each(["height","width"],function(z,W){X.cssHooks[W]={get:function(K,J,ee){if(J)return Hn.test(X.css(K,"display"))&&K.offsetWidth===0?Er(K,jn,function(){return ln(K,W,ee)}):ln(K,W,ee)},set:function(K,J,ee){var te,re=ee&&_r(K),ae=ee&&cn(K,W,ee,X.css(K,"boxSizing",!1,re)==="border-box",re);return ae&&(te=Ft.exec(J))&&(te[3]||"px")!=="px"&&(K.style[W]=J,J=X.css(K,W)),sn(K,J,ae)}}}),X.cssHooks.marginLeft=Tr(fe.reliableMarginLeft,function(z,W){if(W)return(parseFloat(er(z,"marginLeft"))||z.getBoundingClientRect().left-Er(z,{marginLeft:0},function(){return z.getBoundingClientRect().left}))+"px"}),X.cssHooks.marginRight=Tr(fe.reliableMarginRight,function(z,W){if(W)return Er(z,{display:"inline-block"},er,[z,"marginRight"])}),X.each({margin:"",padding:"",border:"Width"},function(z,W){X.cssHooks[z+W]={expand:function(K){for(var J=0,ee={},te=typeof K=="string"?K.split(" "):[K];J<4;J++)ee[z+At[J]+W]=te[J]||te[J-2]||te[0];return ee}},tn.test(z)||(X.cssHooks[z+W].set=sn)}),X.fn.extend({css:function(z,W){return st(this,function(K,J,ee){var te,re,ae={},ue=0;if(X.isArray(J)){for(te=_r(K),re=J.length;ue<re;ue++)ae[J[ue]]=X.css(K,J[ue],!1,te);return ae}return ee!==void 0?X.style(K,J,ee):X.css(K,J)},z,W,arguments.length>1)},show:function(){return un(this,!0)},hide:function(){return un(this)},toggle:function(z){return typeof z=="boolean"?z?this.show():this.hide():this.each(function(){Vt(this)?X(this).show():X(this).hide()})}});function wt(z,W,K,J,ee){return new wt.prototype.init(z,W,K,J,ee)}X.Tween=wt,wt.prototype={constructor:wt,init:function(z,W,K,J,ee,te){this.elem=z,this.prop=K,this.easing=ee||X.easing._default,this.options=W,this.start=this.now=this.cur(),this.end=J,this.unit=te||(X.cssNumber[K]?"":"px")},cur:function(){var z=wt.propHooks[this.prop];return z&&z.get?z.get(this):wt.propHooks._default.get(this)},run:function(z){var W,K=wt.propHooks[this.prop];return this.options.duration?this.pos=W=X.easing[this.easing](z,this.options.duration*z,0,1,this.options.duration):this.pos=W=z,this.now=(this.end-this.start)*W+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),K&&K.set?K.set(this):wt.propHooks._default.set(this),this}},wt.prototype.init.prototype=wt.prototype,wt.propHooks={_default:{get:function(z){var W;return z.elem.nodeType!==1||z.elem[z.prop]!=null&&z.elem.style[z.prop]==null?z.elem[z.prop]:(W=X.css(z.elem,z.prop,""),!W||W==="auto"?0:W)},set:function(z){X.fx.step[z.prop]?X.fx.step[z.prop](z):z.elem.nodeType===1&&(z.elem.style[X.cssProps[z.prop]]!=null||X.cssHooks[z.prop])?X.style(z.elem,z.prop,z.now+z.unit):z.elem[z.prop]=z.now}}},wt.propHooks.scrollTop=wt.propHooks.scrollLeft={set:function(z){z.elem.nodeType&&z.elem.parentNode&&(z.elem[z.prop]=z.now)}},X.easing={linear:function(z){return z},swing:function(z){return .5-Math.cos(z*Math.PI)/2},_default:"swing"},X.fx=wt.prototype.init,X.fx.step={};var tr,br,Fn=/^(?:toggle|show|hide)$/,Vn=/queueHooks$/;function pn(){return O.setTimeout(function(){tr=void 0}),tr=X.now()}function mr(z,W){var K,J=0,ee={height:z};for(W=W?1:0;J<4;J+=2-W)K=At[J],ee["margin"+K]=ee["padding"+K]=z;return W&&(ee.opacity=ee.width=z),ee}function dn(z,W,K){for(var J,ee=(kt.tweeners[W]||[]).concat(kt.tweeners["*"]),te=0,re=ee.length;te<re;te++)if(J=ee[te].call(K,W,z))return J}function qn(z,W,K){var J,ee,te,re,ae,ue,ge,pe,Ce=this,Oe={},xe=z.style,Ge=z.nodeType&&Vt(z),Ve=Me.get(z,"fxshow");K.queue||(ae=X._queueHooks(z,"fx"),ae.unqueued==null&&(ae.unqueued=0,ue=ae.empty.fire,ae.empty.fire=function(){ae.unqueued||ue()}),ae.unqueued++,Ce.always(function(){Ce.always(function(){ae.unqueued--,X.queue(z,"fx").length||ae.empty.fire()})})),z.nodeType===1&&("height"in W||"width"in W)&&(K.overflow=[xe.overflow,xe.overflowX,xe.overflowY],ge=X.css(z,"display"),pe=ge==="none"?Me.get(z,"olddisplay")||Sr(z.nodeName):ge,pe==="inline"&&X.css(z,"float")==="none"&&(xe.display="inline-block")),K.overflow&&(xe.overflow="hidden",Ce.always(function(){xe.overflow=K.overflow[0],xe.overflowX=K.overflow[1],xe.overflowY=K.overflow[2]}));for(J in W)if(ee=W[J],Fn.exec(ee)){if(delete W[J],te=te||ee==="toggle",ee===(Ge?"hide":"show"))if(ee==="show"&&Ve&&Ve[J]!==void 0)Ge=!0;else continue;Oe[J]=Ve&&Ve[J]||X.style(z,J)}else ge=void 0;if(X.isEmptyObject(Oe))(ge==="none"?Sr(z.nodeName):ge)==="inline"&&(xe.display=ge);else{Ve?"hidden"in Ve&&(Ge=Ve.hidden):Ve=Me.access(z,"fxshow",{}),te&&(Ve.hidden=!Ge),Ge?X(z).show():Ce.done(function(){X(z).hide()}),Ce.done(function(){var qe;Me.remove(z,"fxshow");for(qe in Oe)X.style(z,qe,Oe[qe])});for(J in Oe)re=dn(Ge?Ve[J]:0,J,Ce),J in Ve||(Ve[J]=re.start,Ge&&(re.end=re.start,re.start=J==="width"||J==="height"?1:0))}}function zn(z,W){var K,J,ee,te,re;for(K in z)if(J=X.camelCase(K),ee=W[J],te=z[K],X.isArray(te)&&(ee=te[1],te=z[K]=te[0]),K!==J&&(z[J]=te,delete z[K]),re=X.cssHooks[J],re&&"expand"in re){te=re.expand(te),delete z[J];for(K in te)K in z||(z[K]=te[K],W[K]=ee)}else W[J]=ee}function kt(z,W,K){var J,ee,te=0,re=kt.prefilters.length,ae=X.Deferred().always(function(){delete ue.elem}),ue=function(){if(ee)return!1;for(var Ce=tr||pn(),Oe=Math.max(0,ge.startTime+ge.duration-Ce),xe=Oe/ge.duration||0,Ge=1-xe,Ve=0,qe=ge.tweens.length;Ve<qe;Ve++)ge.tweens[Ve].run(Ge);return ae.notifyWith(z,[ge,Ge,Oe]),Ge<1&&qe?Oe:(ae.resolveWith(z,[ge]),!1)},ge=ae.promise({elem:z,props:X.extend({},W),opts:X.extend(!0,{specialEasing:{},easing:X.easing._default},K),originalProperties:W,originalOptions:K,startTime:tr||pn(),duration:K.duration,tweens:[],createTween:function(Ce,Oe){var xe=X.Tween(z,ge.opts,Ce,Oe,ge.opts.specialEasing[Ce]||ge.opts.easing);return ge.tweens.push(xe),xe},stop:function(Ce){var Oe=0,xe=Ce?ge.tweens.length:0;if(ee)return this;for(ee=!0;Oe<xe;Oe++)ge.tweens[Oe].run(1);return Ce?(ae.notifyWith(z,[ge,1,0]),ae.resolveWith(z,[ge,Ce])):ae.rejectWith(z,[ge,Ce]),this}}),pe=ge.props;for(zn(pe,ge.opts.specialEasing);te<re;te++)if(J=kt.prefilters[te].call(ge,z,pe,ge.opts),J)return X.isFunction(J.stop)&&(X._queueHooks(ge.elem,ge.opts.queue).stop=X.proxy(J.stop,J)),J;return X.map(pe,dn,ge),X.isFunction(ge.opts.start)&&ge.opts.start.call(z,ge),X.fx.timer(X.extend(ue,{elem:z,anim:ge,queue:ge.opts.queue})),ge.progress(ge.opts.progress).done(ge.opts.done,ge.opts.complete).fail(ge.opts.fail).always(ge.opts.always)}X.Animation=X.extend(kt,{tweeners:{"*":[function(z,W){var K=this.createTween(z,W);return rr(K.elem,z,Ft.exec(W),K),K}]},tweener:function(z,W){X.isFunction(z)?(W=z,z=["*"]):z=z.match(Ze);for(var K,J=0,ee=z.length;J<ee;J++)K=z[J],kt.tweeners[K]=kt.tweeners[K]||[],kt.tweeners[K].unshift(W)},prefilters:[qn],prefilter:function(z,W){W?kt.prefilters.unshift(z):kt.prefilters.push(z)}}),X.speed=function(z,W,K){var J=z&&typeof z=="object"?X.extend({},z):{complete:K||!K&&W||X.isFunction(z)&&z,duration:z,easing:K&&W||W&&!X.isFunction(W)&&W};return J.duration=X.fx.off?0:typeof J.duration=="number"?J.duration:J.duration in X.fx.speeds?X.fx.speeds[J.duration]:X.fx.speeds._default,(J.queue==null||J.queue===!0)&&(J.queue="fx"),J.old=J.complete,J.complete=function(){X.isFunction(J.old)&&J.old.call(this),J.queue&&X.dequeue(this,J.queue)},J},X.fn.extend({fadeTo:function(z,W,K,J){return this.filter(Vt).css("opacity",0).show().end().animate({opacity:W},z,K,J)},animate:function(z,W,K,J){var ee=X.isEmptyObject(z),te=X.speed(W,K,J),re=function(){var ae=kt(this,X.extend({},z),te);(ee||Me.get(this,"finish"))&&ae.stop(!0)};return re.finish=re,ee||te.queue===!1?this.each(re):this.queue(te.queue,re)},stop:function(z,W,K){var J=function(ee){var te=ee.stop;delete ee.stop,te(K)};return typeof z!="string"&&(K=W,W=z,z=void 0),W&&z!==!1&&this.queue(z||"fx",[]),this.each(function(){var ee=!0,te=z!=null&&z+"queueHooks",re=X.timers,ae=Me.get(this);if(te)ae[te]&&ae[te].stop&&J(ae[te]);else for(te in ae)ae[te]&&ae[te].stop&&Vn.test(te)&&J(ae[te]);for(te=re.length;te--;)re[te].elem===this&&(z==null||re[te].queue===z)&&(re[te].anim.stop(K),ee=!1,re.splice(te,1));(ee||!K)&&X.dequeue(this,z)})},finish:function(z){return z!==!1&&(z=z||"fx"),this.each(function(){var W,K=Me.get(this),J=K[z+"queue"],ee=K[z+"queueHooks"],te=X.timers,re=J?J.length:0;for(K.finish=!0,X.queue(this,z,[]),ee&&ee.stop&&ee.stop.call(this,!0),W=te.length;W--;)te[W].elem===this&&te[W].queue===z&&(te[W].anim.stop(!0),te.splice(W,1));for(W=0;W<re;W++)J[W]&&J[W].finish&&J[W].finish.call(this);delete K.finish})}}),X.each(["toggle","show","hide"],function(z,W){var K=X.fn[W];X.fn[W]=function(J,ee,te){return J==null||typeof J=="boolean"?K.apply(this,arguments):this.animate(mr(W,!0),J,ee,te)}}),X.each({slideDown:mr("show"),slideUp:mr("hide"),slideToggle:mr("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(z,W){X.fn[z]=function(K,J,ee){return this.animate(W,K,J,ee)}}),X.timers=[],X.fx.tick=function(){var z,W=0,K=X.timers;for(tr=X.now();W<K.length;W++)z=K[W],!z()&&K[W]===z&&K.splice(W--,1);K.length||X.fx.stop(),tr=void 0},X.fx.timer=function(z){X.timers.push(z),z()?X.fx.start():X.timers.pop()},X.fx.interval=13,X.fx.start=function(){br||(br=O.setInterval(X.fx.tick,X.fx.interval))},X.fx.stop=function(){O.clearInterval(br),br=null},X.fx.speeds={slow:600,fast:200,_default:400},X.fn.delay=function(z,W){return z=X.fx&&X.fx.speeds[z]||z,W=W||"fx",this.queue(W,function(K,J){var ee=O.setTimeout(K,z);J.stop=function(){O.clearTimeout(ee)}})},function(){var z=q.createElement("input"),W=q.createElement("select"),K=W.appendChild(q.createElement("option"));z.type="checkbox",fe.checkOn=z.value!=="",fe.optSelected=K.selected,W.disabled=!0,fe.optDisabled=!K.disabled,z=q.createElement("input"),z.value="t",z.type="radio",fe.radioValue=z.value==="t"}();var hn,sr=X.expr.attrHandle;X.fn.extend({attr:function(z,W){return st(this,X.attr,z,W,arguments.length>1)},removeAttr:function(z){return this.each(function(){X.removeAttr(this,z)})}}),X.extend({attr:function(z,W,K){var J,ee,te=z.nodeType;if(!(te===3||te===8||te===2)){if(typeof z.getAttribute>"u")return X.prop(z,W,K);if((te!==1||!X.isXMLDoc(z))&&(W=W.toLowerCase(),ee=X.attrHooks[W]||(X.expr.match.bool.test(W)?hn:void 0)),K!==void 0){if(K===null){X.removeAttr(z,W);return}return ee&&"set"in ee&&(J=ee.set(z,K,W))!==void 0?J:(z.setAttribute(W,K+""),K)}return ee&&"get"in ee&&(J=ee.get(z,W))!==null?J:(J=X.find.attr(z,W),J??void 0)}},attrHooks:{type:{set:function(z,W){if(!fe.radioValue&&W==="radio"&&X.nodeName(z,"input")){var K=z.value;return z.setAttribute("type",W),K&&(z.value=K),W}}}},removeAttr:function(z,W){var K,J,ee=0,te=W&&W.match(Ze);if(te&&z.nodeType===1)for(;K=te[ee++];)J=X.propFix[K]||K,X.expr.match.bool.test(K)&&(z[J]=!1),z.removeAttribute(K)}}),hn={set:function(z,W,K){return W===!1?X.removeAttr(z,K):z.setAttribute(K,K),K}},X.each(X.expr.match.bool.source.match(/\w+/g),function(z,W){var K=sr[W]||X.find.attr;sr[W]=function(J,ee,te){var re,ae;return te||(ae=sr[ee],sr[ee]=re,re=K(J,ee,te)!=null?ee.toLowerCase():null,sr[ee]=ae),re}});var Gn=/^(?:input|select|textarea|button)$/i,Un=/^(?:a|area)$/i;X.fn.extend({prop:function(z,W){return st(this,X.prop,z,W,arguments.length>1)},removeProp:function(z){return this.each(function(){delete this[X.propFix[z]||z]})}}),X.extend({prop:function(z,W,K){var J,ee,te=z.nodeType;if(!(te===3||te===8||te===2))return(te!==1||!X.isXMLDoc(z))&&(W=X.propFix[W]||W,ee=X.propHooks[W]),K!==void 0?ee&&"set"in ee&&(J=ee.set(z,K,W))!==void 0?J:z[W]=K:ee&&"get"in ee&&(J=ee.get(z,W))!==null?J:z[W]},propHooks:{tabIndex:{get:function(z){var W=X.find.attr(z,"tabindex");return W?parseInt(W,10):Gn.test(z.nodeName)||Un.test(z.nodeName)&&z.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),fe.optSelected||(X.propHooks.selected={get:function(z){var W=z.parentNode;return W&&W.parentNode&&W.parentNode.selectedIndex,null},set:function(z){var W=z.parentNode;W&&(W.selectedIndex,W.parentNode&&W.parentNode.selectedIndex)}}),X.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){X.propFix[this.toLowerCase()]=this});var Pr=/[\t\r\n\f]/g;function Ut(z){return z.getAttribute&&z.getAttribute("class")||""}X.fn.extend({addClass:function(z){var W,K,J,ee,te,re,ae,ue=0;if(X.isFunction(z))return this.each(function(ge){X(this).addClass(z.call(this,ge,Ut(this)))});if(typeof z=="string"&&z){for(W=z.match(Ze)||[];K=this[ue++];)if(ee=Ut(K),J=K.nodeType===1&&(" "+ee+" ").replace(Pr," "),J){for(re=0;te=W[re++];)J.indexOf(" "+te+" ")<0&&(J+=te+" ");ae=X.trim(J),ee!==ae&&K.setAttribute("class",ae)}}return this},removeClass:function(z){var W,K,J,ee,te,re,ae,ue=0;if(X.isFunction(z))return this.each(function(ge){X(this).removeClass(z.call(this,ge,Ut(this)))});if(!arguments.length)return this.attr("class","");if(typeof z=="string"&&z){for(W=z.match(Ze)||[];K=this[ue++];)if(ee=Ut(K),J=K.nodeType===1&&(" "+ee+" ").replace(Pr," "),J){for(re=0;te=W[re++];)for(;J.indexOf(" "+te+" ")>-1;)J=J.replace(" "+te+" "," ");ae=X.trim(J),ee!==ae&&K.setAttribute("class",ae)}}return this},toggleClass:function(z,W){var K=typeof z;return typeof W=="boolean"&&K==="string"?W?this.addClass(z):this.removeClass(z):X.isFunction(z)?this.each(function(J){X(this).toggleClass(z.call(this,J,Ut(this),W),W)}):this.each(function(){var J,ee,te,re;if(K==="string")for(ee=0,te=X(this),re=z.match(Ze)||[];J=re[ee++];)te.hasClass(J)?te.removeClass(J):te.addClass(J);else(z===void 0||K==="boolean")&&(J=Ut(this),J&&Me.set(this,"__className__",J),this.setAttribute&&this.setAttribute("class",J||z===!1?"":Me.get(this,"__className__")||""))})},hasClass:function(z){var W,K,J=0;for(W=" "+z+" ";K=this[J++];)if(K.nodeType===1&&(" "+Ut(K)+" ").replace(Pr," ").indexOf(W)>-1)return!0;return!1}});var Wn=/\r/g,Kn=/[\x20\t\r\n\f]+/g;X.fn.extend({val:function(z){var W,K,J,ee=this[0];return arguments.length?(J=X.isFunction(z),this.each(function(te){var re;this.nodeType===1&&(J?re=z.call(this,te,X(this).val()):re=z,re==null?re="":typeof re=="number"?re+="":X.isArray(re)&&(re=X.map(re,function(ae){return ae==null?"":ae+""})),W=X.valHooks[this.type]||X.valHooks[this.nodeName.toLowerCase()],(!W||!("set"in W)||W.set(this,re,"value")===void 0)&&(this.value=re))})):ee?(W=X.valHooks[ee.type]||X.valHooks[ee.nodeName.toLowerCase()],W&&"get"in W&&(K=W.get(ee,"value"))!==void 0?K:(K=ee.value,typeof K=="string"?K.replace(Wn,""):K??"")):void 0}}),X.extend({valHooks:{option:{get:function(z){var W=X.find.attr(z,"value");return W??X.trim(X.text(z)).replace(Kn," ")}},select:{get:function(z){for(var W,K,J=z.options,ee=z.selectedIndex,te=z.type==="select-one"||ee<0,re=te?null:[],ae=te?ee+1:J.length,ue=ee<0?ae:te?ee:0;ue<ae;ue++)if(K=J[ue],(K.selected||ue===ee)&&(fe.optDisabled?!K.disabled:K.getAttribute("disabled")===null)&&(!K.parentNode.disabled||!X.nodeName(K.parentNode,"optgroup"))){if(W=X(K).val(),te)return W;re.push(W)}return re},set:function(z,W){for(var K,J,ee=z.options,te=X.makeArray(W),re=ee.length;re--;)J=ee[re],(J.selected=X.inArray(X.valHooks.option.get(J),te)>-1)&&(K=!0);return K||(z.selectedIndex=-1),te}}}}),X.each(["radio","checkbox"],function(){X.valHooks[this]={set:function(z,W){if(X.isArray(W))return z.checked=X.inArray(X(z).val(),W)>-1}},fe.checkOn||(X.valHooks[this].get=function(z){return z.getAttribute("value")===null?"on":z.value})});var gn=/^(?:focusinfocus|focusoutblur)$/;X.extend(X.event,{trigger:function(z,W,K,J){var ee,te,re,ae,ue,ge,pe,Ce=[K||q],Oe=ce.call(z,"type")?z.type:z,xe=ce.call(z,"namespace")?z.namespace.split("."):[];if(te=re=K=K||q,!(K.nodeType===3||K.nodeType===8)&&!gn.test(Oe+X.event.triggered)&&(Oe.indexOf(".")>-1&&(xe=Oe.split("."),Oe=xe.shift(),xe.sort()),ue=Oe.indexOf(":")<0&&"on"+Oe,z=z[X.expando]?z:new X.Event(Oe,typeof z=="object"&&z),z.isTrigger=J?2:3,z.namespace=xe.join("."),z.rnamespace=z.namespace?new RegExp("(^|\\.)"+xe.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,z.result=void 0,z.target||(z.target=K),W=W==null?[z]:X.makeArray(W,[z]),pe=X.event.special[Oe]||{},!(!J&&pe.trigger&&pe.trigger.apply(K,W)===!1))){if(!J&&!pe.noBubble&&!X.isWindow(K)){for(ae=pe.delegateType||Oe,gn.test(ae+Oe)||(te=te.parentNode);te;te=te.parentNode)Ce.push(te),re=te;re===(K.ownerDocument||q)&&Ce.push(re.defaultView||re.parentWindow||O)}for(ee=0;(te=Ce[ee++])&&!z.isPropagationStopped();)z.type=ee>1?ae:pe.bindType||Oe,ge=(Me.get(te,"events")||{})[z.type]&&Me.get(te,"handle"),ge&&ge.apply(te,W),ge=ue&&te[ue],ge&&ge.apply&&ft(te)&&(z.result=ge.apply(te,W),z.result===!1&&z.preventDefault());return z.type=Oe,!J&&!z.isDefaultPrevented()&&(!pe._default||pe._default.apply(Ce.pop(),W)===!1)&&ft(K)&&ue&&X.isFunction(K[Oe])&&!X.isWindow(K)&&(re=K[ue],re&&(K[ue]=null),X.event.triggered=Oe,K[Oe](),X.event.triggered=void 0,re&&(K[ue]=re)),z.result}},simulate:function(z,W,K){var J=X.extend(new X.Event,K,{type:z,isSimulated:!0});X.event.trigger(J,null,W)}}),X.fn.extend({trigger:function(z,W){return this.each(function(){X.event.trigger(z,W,this)})},triggerHandler:function(z,W){var K=this[0];if(K)return X.event.trigger(z,W,K,!0)}}),X.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(z,W){X.fn[W]=function(K,J){return arguments.length>0?this.on(W,null,K,J):this.trigger(W)}}),X.fn.extend({hover:function(z,W){return this.mouseenter(z).mouseleave(W||z)}}),fe.focusin="onfocusin"in O,fe.focusin||X.each({focus:"focusin",blur:"focusout"},function(z,W){var K=function(J){X.event.simulate(W,J.target,X.event.fix(J))};X.event.special[W]={setup:function(){var J=this.ownerDocument||this,ee=Me.access(J,W);ee||J.addEventListener(z,K,!0),Me.access(J,W,(ee||0)+1)},teardown:function(){var J=this.ownerDocument||this,ee=Me.access(J,W)-1;ee?Me.access(J,W,ee):(J.removeEventListener(z,K,!0),Me.remove(J,W))}}});var cr=O.location,Lr=X.now(),Mr=/\?/;X.parseJSON=function(z){return JSON.parse(z+"")},X.parseXML=function(z){var W;if(!z||typeof z!="string")return null;try{W=new O.DOMParser().parseFromString(z,"text/xml")}catch{W=void 0}return(!W||W.getElementsByTagName("parsererror").length)&&X.error("Invalid XML: "+z),W};var Xn=/#.*$/,vn=/([?&])_=[^&]*/,Zn=/^(.*?):[ \t]*([^\r\n]*)$/mg,Jn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Yn=/^(?:GET|HEAD)$/,Qn=/^\/\//,wn={},Ir={},_n="*/".concat("*"),Br=q.createElement("a");Br.href=cr.href;function bn(z){return function(W,K){typeof W!="string"&&(K=W,W="*");var J,ee=0,te=W.toLowerCase().match(Ze)||[];if(X.isFunction(K))for(;J=te[ee++];)J[0]==="+"?(J=J.slice(1)||"*",(z[J]=z[J]||[]).unshift(K)):(z[J]=z[J]||[]).push(K)}}function mn(z,W,K,J){var ee={},te=z===Ir;function re(ae){var ue;return ee[ae]=!0,X.each(z[ae]||[],function(ge,pe){var Ce=pe(W,K,J);if(typeof Ce=="string"&&!te&&!ee[Ce])return W.dataTypes.unshift(Ce),re(Ce),!1;if(te)return!(ue=Ce)}),ue}return re(W.dataTypes[0])||!ee["*"]&&re("*")}function Dr(z,W){var K,J,ee=X.ajaxSettings.flatOptions||{};for(K in W)W[K]!==void 0&&((ee[K]?z:J||(J={}))[K]=W[K]);return J&&X.extend(!0,z,J),z}function ei(z,W,K){for(var J,ee,te,re,ae=z.contents,ue=z.dataTypes;ue[0]==="*";)ue.shift(),J===void 0&&(J=z.mimeType||W.getResponseHeader("Content-Type"));if(J){for(ee in ae)if(ae[ee]&&ae[ee].test(J)){ue.unshift(ee);break}}if(ue[0]in K)te=ue[0];else{for(ee in K){if(!ue[0]||z.converters[ee+" "+ue[0]]){te=ee;break}re||(re=ee)}te=te||re}if(te)return te!==ue[0]&&ue.unshift(te),K[te]}function ti(z,W,K,J){var ee,te,re,ae,ue,ge={},pe=z.dataTypes.slice();if(pe[1])for(re in z.converters)ge[re.toLowerCase()]=z.converters[re];for(te=pe.shift();te;)if(z.responseFields[te]&&(K[z.responseFields[te]]=W),!ue&&J&&z.dataFilter&&(W=z.dataFilter(W,z.dataType)),ue=te,te=pe.shift(),te){if(te==="*")te=ue;else if(ue!=="*"&&ue!==te){if(re=ge[ue+" "+te]||ge["* "+te],!re){for(ee in ge)if(ae=ee.split(" "),ae[1]===te&&(re=ge[ue+" "+ae[0]]||ge["* "+ae[0]],re)){re===!0?re=ge[ee]:ge[ee]!==!0&&(te=ae[0],pe.unshift(ae[1]));break}}if(re!==!0)if(re&&z.throws)W=re(W);else try{W=re(W)}catch(Ce){return{state:"parsererror",error:re?Ce:"No conversion from "+ue+" to "+te}}}}return{state:"success",data:W}}X.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:cr.href,type:"GET",isLocal:Jn.test(cr.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":_n,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":X.parseJSON,"text xml":X.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(z,W){return W?Dr(Dr(z,X.ajaxSettings),W):Dr(X.ajaxSettings,z)},ajaxPrefilter:bn(wn),ajaxTransport:bn(Ir),ajax:function(z,W){typeof z=="object"&&(W=z,z=void 0),W=W||{};var K,J,ee,te,re,ae,ue,ge,pe=X.ajaxSetup({},W),Ce=pe.context||pe,Oe=pe.context&&(Ce.nodeType||Ce.jquery)?X(Ce):X.event,xe=X.Deferred(),Ge=X.Callbacks("once memory"),Ve=pe.statusCode||{},qe={},$t={},ct=0,It="canceled",Le={readyState:0,getResponseHeader:function(ze){var it;if(ct===2){if(!te)for(te={};it=Zn.exec(ee);)te[it[1].toLowerCase()]=it[2];it=te[ze.toLowerCase()]}return it??null},getAllResponseHeaders:function(){return ct===2?ee:null},setRequestHeader:function(ze,it){var Bt=ze.toLowerCase();return ct||(ze=$t[Bt]=$t[Bt]||ze,qe[ze]=it),this},overrideMimeType:function(ze){return ct||(pe.mimeType=ze),this},statusCode:function(ze){var it;if(ze)if(ct<2)for(it in ze)Ve[it]=[Ve[it],ze[it]];else Le.always(ze[Le.status]);return this},abort:function(ze){var it=ze||It;return K&&K.abort(it),pt(0,it),this}};if(xe.promise(Le).complete=Ge.add,Le.success=Le.done,Le.error=Le.fail,pe.url=((z||pe.url||cr.href)+"").replace(Xn,"").replace(Qn,cr.protocol+"//"),pe.type=W.method||W.type||pe.method||pe.type,pe.dataTypes=X.trim(pe.dataType||"*").toLowerCase().match(Ze)||[""],pe.crossDomain==null){ae=q.createElement("a");try{ae.href=pe.url,ae.href=ae.href,pe.crossDomain=Br.protocol+"//"+Br.host!=ae.protocol+"//"+ae.host}catch{pe.crossDomain=!0}}if(pe.data&&pe.processData&&typeof pe.data!="string"&&(pe.data=X.param(pe.data,pe.traditional)),mn(wn,pe,W,Le),ct===2)return Le;ue=X.event&&pe.global,ue&&X.active++===0&&X.event.trigger("ajaxStart"),pe.type=pe.type.toUpperCase(),pe.hasContent=!Yn.test(pe.type),J=pe.url,pe.hasContent||(pe.data&&(J=pe.url+=(Mr.test(J)?"&":"?")+pe.data,delete pe.data),pe.cache===!1&&(pe.url=vn.test(J)?J.replace(vn,"$1_="+Lr++):J+(Mr.test(J)?"&":"?")+"_="+Lr++)),pe.ifModified&&(X.lastModified[J]&&Le.setRequestHeader("If-Modified-Since",X.lastModified[J]),X.etag[J]&&Le.setRequestHeader("If-None-Match",X.etag[J])),(pe.data&&pe.hasContent&&pe.contentType!==!1||W.contentType)&&Le.setRequestHeader("Content-Type",pe.contentType),Le.setRequestHeader("Accept",pe.dataTypes[0]&&pe.accepts[pe.dataTypes[0]]?pe.accepts[pe.dataTypes[0]]+(pe.dataTypes[0]!=="*"?", "+_n+"; q=0.01":""):pe.accepts["*"]);for(ge in pe.headers)Le.setRequestHeader(ge,pe.headers[ge]);if(pe.beforeSend&&(pe.beforeSend.call(Ce,Le,pe)===!1||ct===2))return Le.abort();It="abort";for(ge in{success:1,error:1,complete:1})Le[ge](pe[ge]);if(K=mn(Ir,pe,W,Le),!K)pt(-1,"No Transport");else{if(Le.readyState=1,ue&&Oe.trigger("ajaxSend",[Le,pe]),ct===2)return Le;pe.async&&pe.timeout>0&&(re=O.setTimeout(function(){Le.abort("timeout")},pe.timeout));try{ct=1,K.send(qe,pt)}catch(ze){if(ct<2)pt(-1,ze);else throw ze}}function pt(ze,it,Bt,yr){var xt,Wt,Dt,Rt,_t,Ct=it;ct!==2&&(ct=2,re&&O.clearTimeout(re),K=void 0,ee=yr||"",Le.readyState=ze>0?4:0,xt=ze>=200&&ze<300||ze===304,Bt&&(Rt=ei(pe,Le,Bt)),Rt=ti(pe,Rt,Le,xt),xt?(pe.ifModified&&(_t=Le.getResponseHeader("Last-Modified"),_t&&(X.lastModified[J]=_t),_t=Le.getResponseHeader("etag"),_t&&(X.etag[J]=_t)),ze===204||pe.type==="HEAD"?Ct="nocontent":ze===304?Ct="notmodified":(Ct=Rt.state,Wt=Rt.data,Dt=Rt.error,xt=!Dt)):(Dt=Ct,(ze||!Ct)&&(Ct="error",ze<0&&(ze=0))),Le.status=ze,Le.statusText=(it||Ct)+"",xt?xe.resolveWith(Ce,[Wt,Ct,Le]):xe.rejectWith(Ce,[Le,Ct,Dt]),Le.statusCode(Ve),Ve=void 0,ue&&Oe.trigger(xt?"ajaxSuccess":"ajaxError",[Le,pe,xt?Wt:Dt]),Ge.fireWith(Ce,[Le,Ct]),ue&&(Oe.trigger("ajaxComplete",[Le,pe]),--X.active||X.event.trigger("ajaxStop")))}return Le},getJSON:function(z,W,K){return X.get(z,W,K,"json")},getScript:function(z,W){return X.get(z,void 0,W,"script")}}),X.each(["get","post"],function(z,W){X[W]=function(K,J,ee,te){return X.isFunction(J)&&(te=te||ee,ee=J,J=void 0),X.ajax(X.extend({url:K,type:W,dataType:te,data:J,success:ee},X.isPlainObject(K)&&K))}}),X._evalUrl=function(z){return X.ajax({url:z,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},X.fn.extend({wrapAll:function(z){var W;return X.isFunction(z)?this.each(function(K){X(this).wrapAll(z.call(this,K))}):(this[0]&&(W=X(z,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&W.insertBefore(this[0]),W.map(function(){for(var K=this;K.firstElementChild;)K=K.firstElementChild;return K}).append(this)),this)},wrapInner:function(z){return X.isFunction(z)?this.each(function(W){X(this).wrapInner(z.call(this,W))}):this.each(function(){var W=X(this),K=W.contents();K.length?K.wrapAll(z):W.append(z)})},wrap:function(z){var W=X.isFunction(z);return this.each(function(K){X(this).wrapAll(W?z.call(this,K):z)})},unwrap:function(){return this.parent().each(function(){X.nodeName(this,"body")||X(this).replaceWith(this.childNodes)}).end()}}),X.expr.filters.hidden=function(z){return!X.expr.filters.visible(z)},X.expr.filters.visible=function(z){return z.offsetWidth>0||z.offsetHeight>0||z.getClientRects().length>0};var ri=/%20/g,ni=/\[\]$/,yn=/\r?\n/g,ii=/^(?:submit|button|image|reset|file)$/i,oi=/^(?:input|select|textarea|keygen)/i;function Rr(z,W,K,J){var ee;if(X.isArray(W))X.each(W,function(te,re){K||ni.test(z)?J(z,re):Rr(z+"["+(typeof re=="object"&&re!=null?te:"")+"]",re,K,J)});else if(!K&&X.type(W)==="object")for(ee in W)Rr(z+"["+ee+"]",W[ee],K,J);else J(z,W)}X.param=function(z,W){var K,J=[],ee=function(te,re){re=X.isFunction(re)?re():re??"",J[J.length]=encodeURIComponent(te)+"="+encodeURIComponent(re)};if(W===void 0&&(W=X.ajaxSettings&&X.ajaxSettings.traditional),X.isArray(z)||z.jquery&&!X.isPlainObject(z))X.each(z,function(){ee(this.name,this.value)});else for(K in z)Rr(K,z[K],W,ee);return J.join("&").replace(ri,"+")},X.fn.extend({serialize:function(){return X.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var z=X.prop(this,"elements");return z?X.makeArray(z):this}).filter(function(){var z=this.type;return this.name&&!X(this).is(":disabled")&&oi.test(this.nodeName)&&!ii.test(z)&&(this.checked||!hr.test(z))}).map(function(z,W){var K=X(this).val();return K==null?null:X.isArray(K)?X.map(K,function(J){return{name:W.name,value:J.replace(yn,`\r
 `)}}):{name:W.name,value:K.replace(yn,`\r
 `)}}).get()}}),X.ajaxSettings.xhr=function(){try{return new O.XMLHttpRequest}catch{}};var ai={0:200,1223:204},lr=X.ajaxSettings.xhr();fe.cors=!!lr&&"withCredentials"in lr,fe.ajax=lr=!!lr,X.ajaxTransport(function(z){var W,K;if(fe.cors||lr&&!z.crossDomain)return{send:function(J,ee){var te,re=z.xhr();if(re.open(z.type,z.url,z.async,z.username,z.password),z.xhrFields)for(te in z.xhrFields)re[te]=z.xhrFields[te];z.mimeType&&re.overrideMimeType&&re.overrideMimeType(z.mimeType),!z.crossDomain&&!J["X-Requested-With"]&&(J["X-Requested-With"]="XMLHttpRequest");for(te in J)re.setRequestHeader(te,J[te]);W=function(ae){return function(){W&&(W=K=re.onload=re.onerror=re.onabort=re.onreadystatechange=null,ae==="abort"?re.abort():ae==="error"?typeof re.status!="number"?ee(0,"error"):ee(re.status,re.statusText):ee(ai[re.status]||re.status,re.statusText,(re.responseType||"text")!=="text"||typeof re.responseText!="string"?{binary:re.response}:{text:re.responseText},re.getAllResponseHeaders()))}},re.onload=W(),K=re.onerror=W("error"),re.onabort!==void 0?re.onabort=K:re.onreadystatechange=function(){re.readyState===4&&O.setTimeout(function(){W&&K()})},W=W("abort");try{re.send(z.hasContent&&z.data||null)}catch(ae){if(W)throw ae}},abort:function(){W&&W()}}}),X.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(z){return X.globalEval(z),z}}}),X.ajaxPrefilter("script",function(z){z.cache===void 0&&(z.cache=!1),z.crossDomain&&(z.type="GET")}),X.ajaxTransport("script",function(z){if(z.crossDomain){var W,K;return{send:function(J,ee){W=X("<script>").prop({charset:z.scriptCharset,src:z.url}).on("load error",K=function(te){W.remove(),K=null,te&&ee(te.type==="error"?404:200,te.type)}),q.head.appendChild(W[0])},abort:function(){K&&K()}}}});var $n=[],Nr=/(=)\?(?=&|$)|\?\?/;X.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var z=$n.pop()||X.expando+"_"+Lr++;return this[z]=!0,z}}),X.ajaxPrefilter("json jsonp",function(z,W,K){var J,ee,te,re=z.jsonp!==!1&&(Nr.test(z.url)?"url":typeof z.data=="string"&&(z.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Nr.test(z.data)&&"data");if(re||z.dataTypes[0]==="jsonp")return J=z.jsonpCallback=X.isFunction(z.jsonpCallback)?z.jsonpCallback():z.jsonpCallback,re?z[re]=z[re].replace(Nr,"$1"+J):z.jsonp!==!1&&(z.url+=(Mr.test(z.url)?"&":"?")+z.jsonp+"="+J),z.converters["script json"]=function(){return te||X.error(J+" was not called"),te[0]},z.dataTypes[0]="json",ee=O[J],O[J]=function(){te=arguments},K.always(function(){ee===void 0?X(O).removeProp(J):O[J]=ee,z[J]&&(z.jsonpCallback=W.jsonpCallback,$n.push(J)),te&&X.isFunction(ee)&&ee(te[0]),te=ee=void 0}),"script"}),X.parseHTML=function(z,W,K){if(!z||typeof z!="string")return null;typeof W=="boolean"&&(K=W,W=!1),W=W||q;var J=Ie.exec(z),ee=!K&&[];return J?[W.createElement(J[1])]:(J=qt([z],W,ee),ee&&ee.length&&X(ee).remove(),X.merge([],J.childNodes))};var xn=X.fn.load;X.fn.load=function(z,W,K){if(typeof z!="string"&&xn)return xn.apply(this,arguments);var J,ee,te,re=this,ae=z.indexOf(" ");return ae>-1&&(J=X.trim(z.slice(ae)),z=z.slice(0,ae)),X.isFunction(W)?(K=W,W=void 0):W&&typeof W=="object"&&(ee="POST"),re.length>0&&X.ajax({url:z,type:ee||"GET",dataType:"html",data:W}).done(function(ue){te=arguments,re.html(J?X("<div>").append(X.parseHTML(ue)).find(J):ue)}).always(K&&function(ue,ge){re.each(function(){K.apply(this,te||[ue.responseText,ge,ue])})}),this},X.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(z,W){X.fn[W]=function(K){return this.on(W,K)}}),X.expr.filters.animated=function(z){return X.grep(X.timers,function(W){return z===W.elem}).length};function Cn(z){return X.isWindow(z)?z:z.nodeType===9&&z.defaultView}X.offset={setOffset:function(z,W,K){var J,ee,te,re,ae,ue,ge,pe=X.css(z,"position"),Ce=X(z),Oe={};pe==="static"&&(z.style.position="relative"),ae=Ce.offset(),te=X.css(z,"top"),ue=X.css(z,"left"),ge=(pe==="absolute"||pe==="fixed")&&(te+ue).indexOf("auto")>-1,ge?(J=Ce.position(),re=J.top,ee=J.left):(re=parseFloat(te)||0,ee=parseFloat(ue)||0),X.isFunction(W)&&(W=W.call(z,K,X.extend({},ae))),W.top!=null&&(Oe.top=W.top-ae.top+re),W.left!=null&&(Oe.left=W.left-ae.left+ee),"using"in W?W.using.call(z,Oe):Ce.css(Oe)}},X.fn.extend({offset:function(z){if(arguments.length)return z===void 0?this:this.each(function(re){X.offset.setOffset(this,z,re)});var W,K,J=this[0],ee={top:0,left:0},te=J&&J.ownerDocument;if(te)return W=te.documentElement,X.contains(W,J)?(ee=J.getBoundingClientRect(),K=Cn(te),{top:ee.top+K.pageYOffset-W.clientTop,left:ee.left+K.pageXOffset-W.clientLeft}):ee},position:function(){if(this[0]){var z,W,K=this[0],J={top:0,left:0};return X.css(K,"position")==="fixed"?W=K.getBoundingClientRect():(z=this.offsetParent(),W=this.offset(),X.nodeName(z[0],"html")||(J=z.offset()),J.top+=X.css(z[0],"borderTopWidth",!0),J.left+=X.css(z[0],"borderLeftWidth",!0)),{top:W.top-J.top-X.css(K,"marginTop",!0),left:W.left-J.left-X.css(K,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var z=this.offsetParent;z&&X.css(z,"position")==="static";)z=z.offsetParent;return z||ar})}}),X.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(z,W){var K=W==="pageYOffset";X.fn[z]=function(J){return st(this,function(ee,te,re){var ae=Cn(ee);if(re===void 0)return ae?ae[W]:ee[te];ae?ae.scrollTo(K?ae.pageXOffset:re,K?re:ae.pageYOffset):ee[te]=re},z,J,arguments.length)}}),X.each(["top","left"],function(z,W){X.cssHooks[W]=Tr(fe.pixelPosition,function(K,J){if(J)return J=er(K,W),Or.test(J)?X(K).position()[W]+"px":J})}),X.each({Height:"height",Width:"width"},function(z,W){X.each({padding:"inner"+z,content:W,"":"outer"+z},function(K,J){X.fn[J]=function(ee,te){var re=arguments.length&&(K||typeof ee!="boolean"),ae=K||(ee===!0||te===!0?"margin":"border");return st(this,function(ue,ge,pe){var Ce;return X.isWindow(ue)?ue.document.documentElement["client"+z]:ue.nodeType===9?(Ce=ue.documentElement,Math.max(ue.body["scroll"+z],Ce["scroll"+z],ue.body["offset"+z],Ce["offset"+z],Ce["client"+z])):pe===void 0?X.css(ue,ge,ae):X.style(ue,ge,pe,ae)},W,re?ee:void 0,re,null)}})}),X.fn.extend({bind:function(z,W,K){return this.on(z,null,W,K)},unbind:function(z,W){return this.off(z,null,W)},delegate:function(z,W,K,J){return this.on(W,z,K,J)},undelegate:function(z,W,K){return arguments.length===1?this.off(z,"**"):this.off(W,z||"**",K)},size:function(){return this.length}}),X.fn.andSelf=X.fn.addBack;var si=O.jQuery,ci=O.$;return X.noConflict=function(z){return O.$===X&&(O.$=ci),z&&O.jQuery===X&&(O.jQuery=si),X},D||(O.jQuery=O.$=X),X})})(jquery$1);var jqueryExports=jquery$1.exports;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var glbl=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:commonjsGlobal,can$L={};(typeof GLOBALCAN>"u"||GLOBALCAN!==!1)&&(glbl.can=can$L),can$L.global=glbl,can$L.k=function(){},can$L.isDeferred=function(B){return can$L.dev&&can$L.dev.warn("can.isDeferred: this function is deprecated and will be removed in a future release. can.isPromise replaces the functionality of can.isDeferred."),B&&typeof B.then=="function"&&typeof B.pipe=="function"},can$L.isPromise=function(B){return!!B&&(window.Promise&&B instanceof Promise||can$L.isFunction(B.then)&&(can$L.List===void 0||!(B instanceof can$L.List)))},can$L.isMapLike=function(B){return can$L.Map&&(B instanceof can$L.Map||B&&B.___get)};var cid=0;can$L.cid=function(B,O){return B._cid||(cid++,B._cid=(O||"")+cid),B._cid},can$L.VERSION="2.3.34",can$L.simpleExtend=function(B,O){for(var D in O)B[D]=O[D];return B},can$L.last=function(B){return B&&B[B.length-1]},can$L.isDOM=function(B){return(B.ownerDocument||B)===can$L.global.document},can$L.childNodes=function(B){var O=B.childNodes;if("length"in O)return O;for(var D=B.firstChild,F=[];D;)F.push(D),D=D.nextSibling;return F};var protoBind=Function.prototype.bind;protoBind?can$L.proxy=function(B,O){return protoBind.call(B,O)}:can$L.proxy=function(B,O){return function(){return B.apply(O,arguments)}},can$L.frag=function(B,O){var D=O||can$L.document||can$L.global.document,F;return!B||typeof B=="string"?(F=can$L.buildFragment(B==null?"":""+B,D),F.childNodes.length||F.appendChild(D.createTextNode("")),F):B.nodeType===11?B:typeof B.nodeType=="number"?(F=D.createDocumentFragment(),F.appendChild(B),F):typeof B.length=="number"?(F=D.createDocumentFragment(),can$L.each(B,function(q){F.appendChild(can$L.frag(q))}),can$L.childNodes(F).length||F.appendChild(D.createTextNode("")),F):(F=can$L.buildFragment(""+B,D),can$L.childNodes(F).length||F.appendChild(D.createTextNode("")),F)},can$L.scope=can$L.viewModel=function(B,O,D){B=can$L.$(B);var F=can$L.data(B,"scope")||can$L.data(B,"viewModel");switch(F||(F=new can$L.Map,can$L.data(B,"scope",F),can$L.data(B,"viewModel",F)),arguments.length){case 0:case 1:return F;case 2:return F.attr(O);default:return F.attr(O,D),B}};var parseURI=function(B){var O=String(B).replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);return O?{href:O[0]||"",protocol:O[1]||"",authority:O[2]||"",host:O[3]||"",hostname:O[4]||"",port:O[5]||"",pathname:O[6]||"",search:O[7]||"",hash:O[8]||""}:null};can$L.joinURIs=function(B,O){function D(F){var q=[];return F.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(G){G==="/.."?q.pop():q.push(G)}),q.join("").replace(/^\//,F.charAt(0)==="/"?"/":"")}return O=parseURI(O||""),B=parseURI(B||""),!O||!B?null:(O.protocol||B.protocol)+(O.protocol||O.authority?O.authority:B.authority)+D(O.protocol||O.authority||O.pathname.charAt(0)==="/"?O.pathname:O.pathname?(B.authority&&!B.pathname?"/":"")+B.pathname.slice(0,B.pathname.lastIndexOf("/")+1)+O.pathname:B.pathname)+(O.protocol||O.authority||O.pathname?O.search:O.search||B.search)+O.hash},can$L.import=function(B,O){var D=new can$L.Deferred;return typeof window.System=="object"&&can$L.isFunction(window.System.import)?window.System.import(B,{name:O}).then(can$L.proxy(D.resolve,D),can$L.proxy(D.reject,D)):window.define&&window.define.amd?window.require([B],function(F){D.resolve(F)}):window.steal?steal.steal(B,function(F){D.resolve(F)}):window.require?D.resolve(window.require(B)):D.resolve(),D.promise()},can$L.__observe=function(){},can$L.isNode=typeof process=="object"&&{}.toString.call(process)==="[object process]",can$L.isBrowserWindow=typeof window<"u"&&typeof document<"u"&&typeof SimpleDOM>"u",can$L.isWebWorker=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope;var can_1$1=can$L;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$K=can_1$1,namespaces={xlink:"http://www.w3.org/1999/xlink"},setImmediate=can$K.global.setImmediate||function(B){return setTimeout(B,0)},formElements={input:!0,textarea:!0,select:!0},hasProperty=function(B,O){return O in B||can$K.document&&formElements[B.nodeName.toLowerCase()]},attr$2={MutationObserver:can$K.global.MutationObserver||can$K.global.WebKitMutationObserver||can$K.global.MozMutationObserver,map:{class:function(B,O){return O=O||"",B.namespaceURI==="http://www.w3.org/2000/svg"?B.setAttribute("class",O):B.className=O,O},value:"value",innertext:"innerText",innerhtml:"innerHTML",textcontent:"textContent",for:"htmlFor",checked:!0,disabled:!0,readonly:function(B,O){return B.readOnly=!!(O||typeof O=="string"),O},required:!0,src:function(B,O){return O==null||O===""?(B.removeAttribute("src"),null):(B.setAttribute("src",O),O)},style:function(){var B=can$K.global.document&&document.createElement("div");return B&&B.style&&"cssText"in B.style?function(O,D){return O.style.cssText=D||""}:function(O,D){return O.setAttribute("style",D)}}()},defaultValue:["input","textarea"],setAttrOrProp:function(B,O,D){O=O.toLowerCase();var F=attr$2.map[O];F===!0&&!D?this.remove(B,O):this.set(B,O,D)},setSelectValue:function(B,O){if(O!=null){for(var D=B.getElementsByTagName("option"),F=0;F<D.length;F++)if(O==D[F].value){D[F].selected=!0;return}}B.selectedIndex=-1},set:function(B,O,D){var F=can$K.isDOM(B)&&attr$2.MutationObserver;O=O.toLowerCase();var q;F||(q=attr$2.get(B,O));var G=attr$2.map[O],U;typeof G=="function"?U=G(B,D):G===!0&&hasProperty(B,O)?(U=B[O]=!0,O==="checked"&&B.type==="radio"&&can$K.inArray((B.nodeName+"").toLowerCase(),attr$2.defaultValue)>=0&&(B.defaultChecked=!0)):typeof G=="string"&&hasProperty(B,G)?(U=D,(B[G]!==D||B.nodeName.toUpperCase()==="OPTION")&&(B[G]=D),G==="value"&&can$K.inArray((B.nodeName+"").toLowerCase(),attr$2.defaultValue)>=0&&(B.defaultValue=D)):attr$2.setAttribute(B,O,D),!F&&U!==q&&attr$2.trigger(B,O,q)},setAttribute:function(){var B=can$K.global.document;if(B&&document.createAttribute)try{B.createAttribute("{}")}catch{var O={},D=document.createElement("div");return function(q,G,U){var Y=G.charAt(0),Q,ne,oe;(Y==="{"||Y==="("||Y==="*")&&q.setAttributeNode?(Q=O[G],Q||(D.innerHTML="<div "+G+'=""></div>',Q=O[G]=D.childNodes[0].attributes[0]),ne=Q.cloneNode(),ne.value=U,q.setAttributeNode(ne)):(oe=G.split(":"),oe.length!==1?q.setAttributeNS(namespaces[oe[0]],G,U):q.setAttribute(G,U))}}return function(F,q,G){F.setAttribute(q,G)}}(),trigger:function(B,O,D){if(can$K.data(can$K.$(B),"canHasAttributesBindings"))return O=O.toLowerCase(),setImmediate(function(){can$K.trigger(B,{type:"attributes",attributeName:O,target:B,oldValue:D,bubbles:!1},[])})},get:function(B,O){O=O.toLowerCase();var D=attr$2.map[O];return typeof D=="string"&&hasProperty(B,D)?B[D]:D===!0&&hasProperty(B,O)?B[O]:B.getAttribute(O)},remove:function(B,O){O=O.toLowerCase();var D;attr$2.MutationObserver||(D=attr$2.get(B,O));var F=attr$2.map[O];typeof F=="function"&&F(B,void 0),F===!0&&hasProperty(B,O)?B[O]=!1:typeof F=="string"&&hasProperty(B,F)?B[F]="":B.removeAttribute(O),!attr$2.MutationObserver&&D!=null&&attr$2.trigger(B,O,D)},has:function(){var B=can$K.global.document&&document.createElement("div");return B&&B.hasAttribute?function(O,D){return O.hasAttribute(D)}:function(O,D){return O.getAttribute(D)!==null}}()},attr_1=attr$2;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$J=can_1$1;can$J.addEvent=function(B,O){var D=this.__bindEvents||(this.__bindEvents={}),F=D[B]||(D[B]=[]);return F.push({handler:O,name:B}),this},can$J.listenTo=function(B,O,D){var F=this.__listenToEvents;F||(F=this.__listenToEvents={});var q=can$J.cid(B),G=F[q];G||(G=F[q]={obj:B,events:{}});var U=G.events[O];U||(U=G.events[O]=[]),U.push(D),can$J.bind.call(B,O,D)},can$J.stopListening=function(B,O,D){var F=this.__listenToEvents,q=F,G=0;if(!F)return this;if(B){var U=can$J.cid(B);if((q={})[U]=F[U],!F[U])return this}for(var Y in q){var Q=q[Y],ne;B=F[Y].obj,O?(ne={})[O]=Q.events[O]:ne=Q.events;for(var oe in ne){var ce=ne[oe]||[];for(G=0;G<ce.length;)D&&D===ce[G]||!D?(can$J.unbind.call(B,oe,ce[G]),ce.splice(G,1)):G++;ce.length||delete Q.events[oe]}can$J.isEmptyObject(Q.events)&&delete F[Y]}return this},can$J.removeEvent=function(B,O,D){if(!this.__bindEvents)return this;for(var F=this.__bindEvents[B]||[],q=0,G,U=typeof O=="function";q<F.length;)G=F[q],(D?D(G,B,O):U&&G.handler===O||!U&&(G.cid===O||!O))?F.splice(q,1):q++;return this},can$J.dispatch=function(B,O){var D=this.__bindEvents;if(D){var F;typeof B=="string"?(F=B,B={type:B}):F=B.type;var q=D[F];if(q)q=q.slice(0);else return;var G=[B];O&&G.push.apply(G,O);for(var U=0,Y=q.length;U<Y;U++)q[U].handler.apply(this,G);return B}},can$J.one=function(B,O){var D=function(){return can$J.unbind.call(this,B,D),O.apply(this,arguments)};return can$J.bind.call(this,B,D),this},can$J.event={on:function(){return arguments.length===0&&can$J.Control&&this instanceof can$J.Control?can$J.Control.prototype.on.call(this):can$J.addEvent.apply(this,arguments)},off:function(){return arguments.length===0&&can$J.Control&&this instanceof can$J.Control?can$J.Control.prototype.off.call(this):can$J.removeEvent.apply(this,arguments)},bind:can$J.addEvent,unbind:can$J.removeEvent,delegate:function(B,O,D){return can$J.addEvent.call(this,O,D)},undelegate:function(B,O,D){return can$J.removeEvent.call(this,O,D)},trigger:can$J.dispatch,one:can$J.one,addEvent:can$J.addEvent,removeEvent:can$J.removeEvent,listenTo:can$J.listenTo,stopListening:can$J.stopListening,dispatch:can$J.dispatch},can$J.event;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$I=can_1$1,fragmentRE=/^\s*<(\w+)[^>]*>/,toString={}.toString,fragment=function(B,O,D){O===void 0&&(O=fragmentRE.test(B)&&RegExp.$1),B&&toString.call(B.replace)==="[object Function]"&&(B=B.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,"<$1></$2>"));var F=D.createElement("div"),q=D.createElement("div");O==="tbody"||O==="tfoot"||O==="thead"||O==="colgroup"?(q.innerHTML="<table>"+B+"</table>",F=q.firstChild.nodeType===3?q.lastChild:q.firstChild):O==="col"?(q.innerHTML="<table><colgroup>"+B+"</colgroup></table>",F=q.firstChild.nodeType===3?q.lastChild:q.firstChild.firstChild):O==="tr"?(q.innerHTML="<table><tbody>"+B+"</tbody></table>",F=q.firstChild.nodeType===3?q.lastChild:q.firstChild.firstChild):O==="td"||O==="th"?(q.innerHTML="<table><tbody><tr>"+B+"</tr></tbody></table>",F=q.firstChild.nodeType===3?q.lastChild:q.firstChild.firstChild.firstChild):O==="option"?(q.innerHTML="<select>"+B+"</select>",F=q.firstChild.nodeType===3?q.lastChild:q.firstChild):F.innerHTML=""+B;var G={},U=can$I.childNodes(F);G.length=U.length;for(var Y=0;Y<U.length;Y++)G[Y]=U[Y];return[].slice.call(G)};can$I.buildFragment=function(B,O){if(B&&B.nodeType===11)return B;O?O.length&&(O=O[0]):O=document;for(var D=fragment(B,void 0,O),F=(O||document).createDocumentFragment(),q=0,G=D.length;q<G;q++)F.appendChild(D[q]);return F},function(){var B=`<-
 >`,O=can$I.buildFragment(B,document);if(B!==O.firstChild.nodeValue){var D=can$I.buildFragment;can$I.buildFragment=function(F,q){var G=D(F,q);return G.childNodes.length===1&&G.childNodes[0].nodeType===3&&(G.childNodes[0].nodeValue=F),G}}}();/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$H=can_1$1;can$H.isArrayLike=function(B){var O=B&&typeof B!="boolean"&&typeof B!="number"&&"length"in B&&B.length;return typeof arr!="function"&&(O===0||typeof O=="number"&&O>0&&O-1 in B)};/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$G=can_1$1;can$G.each=function(B,O,D){var F=0,q,G,U;if(B){if(can$G.isArrayLike(B))if(can$G.List&&B instanceof can$G.List)for(G=B.attr("length");F<G&&(U=B.attr(F),O.call(D||U,U,F,B)!==!1);F++);else for(G=B.length;F<G&&(U=B[F],O.call(D||U,U,F,B)!==!1);F++);else if(typeof B=="object"){if(can$G.Map&&B instanceof can$G.Map||B===can$G.route){var Y=can$G.Map.keys(B);for(F=0,G=Y.length;F<G&&(q=Y[F],U=B.attr(q),O.call(D||U,U,q,B)!==!1);F++);}else for(q in B)if(Object.prototype.hasOwnProperty.call(B,q)&&O.call(D||B[q],B[q],q,B)===!1)break}}return B};/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$F=can_1$1;can$F.inserted=function(B,O){if(B.length){B=can$F.makeArray(B);for(var D=O||B[0].ownerDocument||B[0],F=!1,q=can$F.$(D.contains?D:D.body),G,U=0,Y;(Y=B[U])!==void 0;U++){if(!F)if(Y.getElementsByTagName)if(can$F.has(q,Y).length)F=!0;else return;else continue;if(F&&Y.getElementsByTagName){G=can$F.makeArray(Y.getElementsByTagName("*")),can$F.trigger(Y,"inserted",[],!1);for(var Q=0,ne;(ne=G[Q])!==void 0;Q++)can$F.trigger(ne,"inserted",[],!1)}}}},can$F.appendChild=function(B,O,D){var F;O.nodeType===11?F=can$F.makeArray(can$F.childNodes(O)):F=[O],B.appendChild(O),can$F.inserted(F,D)},can$F.insertBefore=function(B,O,D,F){var q;O.nodeType===11?q=can$F.makeArray(can$F.childNodes(O)):q=[O],B.insertBefore(O,D),can$F.inserted(q,F)};/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var $$2=jqueryExports,can$E=can_1$1,attr$1=attr_1,isBindableElement=function(B){return B.nodeName&&(B.nodeType===1||B.nodeType===9)||B==window||B.addEventListener};$$2=$$2||window.jQuery,$$2.extend(can$E,$$2,{trigger:function(B,O,D,F){isBindableElement(B)?$$2.event.trigger(O,D,B,!F):B.trigger?B.trigger(O,D):(typeof O=="string"&&(O={type:O}),O.target=O.target||B,D&&(D.length&&typeof D=="string"?D=[D]:D.length||(D=[D])),D||(D=[]),can$E.dispatch.call(B,O,D))},event:can$E.event,addEvent:can$E.addEvent,removeEvent:can$E.removeEvent,buildFragment:can$E.buildFragment,$:$$2,each:can$E.each,bind:function(B,O){if(this.nodeType!==11)return this.bind&&this.bind!==can$E.bind?this.bind(B,O):isBindableElement(this)?$$2.event.add(this,B,O):can$E.addEvent.call(this,B,O),this},unbind:function(B,O){if(this.nodeType!==11)return this.unbind&&this.unbind!==can$E.unbind?this.unbind(B,O):isBindableElement(this)?$$2.event.remove(this,B,O):can$E.removeEvent.call(this,B,O),this},delegate:function(B,O,D){return this.delegate?this.delegate(B,O,D):isBindableElement(this)?$$2(this).delegate(B,O,D):can$E.bind.call(this,O,D),this},undelegate:function(B,O,D){return this.undelegate?this.undelegate(B,O,D):isBindableElement(this)?$$2(this).undelegate(B,O,D):can$E.unbind.call(this,O,D),this},proxy:can$E.proxy,attr:attr$1}),can$E.on=can$E.bind,can$E.off=can$E.unbind,$$2.each(["append","filter","addClass","remove","data","get","has"],function(B,O){can$E[O]=function(D){return D[O].apply(D,can$E.makeArray(arguments).slice(1))}});var oldClean=$$2.cleanData;$$2.cleanData=function(B){$$2.each(B,function(O,D){D&&can$E.trigger(D,"removed",[],!1)}),oldClean(B)};var oldDomManip=$$2.fn.domManip,cbIndex;$$2.fn.domManip=function(B,O,D){for(var F=1;F<arguments.length;F++)if(typeof arguments[F]=="function"){cbIndex=F;break}return oldDomManip.apply(this,arguments)},$$2(document.createElement("div")).append(document.createElement("div"));var getChildNodes$1=function(B){var O=B.childNodes;if("length"in O)return can$E.makeArray(O);for(var D=B.firstChild,F=[];D;)F.push(D),D=D.nextSibling;return F};cbIndex===void 0?($$2.fn.domManip=oldDomManip,can$E.each(["after","prepend","before","append","replaceWith"],function(B){var O=$$2.fn[B];$$2.fn[B]=function(){var D=[],F=can$E.makeArray(arguments);F[0]!=null&&(typeof F[0]=="string"&&(F[0]=can$E.buildFragment(F[0])),F[0].nodeType===11?D=getChildNodes$1(F[0]):can$E.isArrayLike(F[0])?D=can$E.makeArray(F[0]):D=[F[0]]);var q=O.apply(this,F);return can$E.inserted(D),q}})):$$2.fn.domManip=cbIndex===2?function(B,O,D){return oldDomManip.call(this,B,O,function(F){var q;F.nodeType===11&&(q=can$E.makeArray(can$E.childNodes(F)));var G=D.apply(this,arguments);return can$E.inserted(q||[F]),G})}:function(B,O){return oldDomManip.call(this,B,function(D){var F;D.nodeType===11&&(F=can$E.makeArray(can$E.childNodes(D)));var q=O.apply(this,arguments);return can$E.inserted(F||[D]),q})};var oldAttr=$$2.attr;$$2.attr=function(B,O){if(can$E.isDOM(B)&&can$E.attr.MutationObserver)return oldAttr.apply(this,arguments);var D,F;arguments.length>=3&&(D=oldAttr.call(this,B,O));var q=oldAttr.apply(this,arguments);return arguments.length>=3&&(F=oldAttr.call(this,B,O)),F!==D&&can$E.attr.trigger(B,O,D),q};var oldRemove$1=$$2.removeAttr;$$2.removeAttr=function(B,O){if(can$E.isDOM(B)&&can$E.attr.MutationObserver)return oldRemove$1.apply(this,arguments);var D=oldAttr.call(this,B,O),F=oldRemove$1.apply(this,arguments);return D!=null&&can$E.attr.trigger(B,O,D),F},$$2.event.special.attributes={setup:function(){if(can$E.isDOM(this)&&can$E.attr.MutationObserver){var B=this,O=new can$E.attr.MutationObserver(function(D){D.forEach(function(F){var q=can$E.simpleExtend({},F);can$E.trigger(B,q,[])})});O.observe(this,{attributes:!0,attributeOldValue:!0}),can$E.data(can$E.$(this),"canAttributesObserver",O)}else can$E.data(can$E.$(this),"canHasAttributesBindings",!0)},teardown:function(){can$E.isDOM(this)&&can$E.attr.MutationObserver?(can$E.data(can$E.$(this),"canAttributesObserver").disconnect(),$$2.removeData(this,"canAttributesObserver")):$$2.removeData(this,"canHasAttributesBindings")}},$$2.event.special.inserted={},$$2.event.special.removed={};var jquery=can$E;/*!
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
  */var can$C=util;can$C.bindAndSetup=function(){return can$C.addEvent.apply(this,arguments),this.__inSetup||(this._bindings?this._bindings++:(this._bindings=1,this._bindsetup&&this._bindsetup())),this},can$C.unbindAndTeardown=function(B,O){if(!this.__bindEvents)return this;var D=this.__bindEvents[B]||[],F=D.length;return can$C.removeEvent.apply(this,arguments),this._bindings===null?this._bindings=0:this._bindings=this._bindings-(F-D.length),!this._bindings&&this._bindteardown&&this._bindteardown(),this};/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$B=util,bubble$2=can$B.bubble={bind:function(B,O){if(!B.__inSetup){var D=bubble$2.events(B,O),F=D.length,q;B._bubbleBindings||(B._bubbleBindings={});for(var G=0;G<F;G++)q=D[G],B._bubbleBindings[q]?B._bubbleBindings[q]++:(B._bubbleBindings[q]=1,bubble$2.childrenOf(B,q))}},unbind:function(B,O){for(var D=bubble$2.events(B,O),F=D.length,q,G=0;G<F;G++)q=D[G],B._bubbleBindings&&B._bubbleBindings[q]--,B._bubbleBindings&&!B._bubbleBindings[q]&&(delete B._bubbleBindings[q],bubble$2.teardownChildrenFrom(B,q),can$B.isEmptyObject(B._bubbleBindings)&&delete B._bubbleBindings)},add:function(B,O,D){if(O instanceof can$B.Map&&B._bubbleBindings)for(var F in B._bubbleBindings)B._bubbleBindings[F]&&(bubble$2.teardownFromParent(B,O,F),bubble$2.toParent(O,B,D,F))},addMany:function(B,O){for(var D=0,F=O.length;D<F;D++)bubble$2.add(B,O[D],D)},remove:function(B,O){if(O instanceof can$B.Map&&B._bubbleBindings)for(var D in B._bubbleBindings)B._bubbleBindings[D]&&bubble$2.teardownFromParent(B,O,D)},removeMany:function(B,O){for(var D=0,F=O.length;D<F;D++)bubble$2.remove(B,O[D])},set:function(B,O,D,F){return can$B.isMapLike(D)&&bubble$2.add(B,D,O),can$B.isMapLike(F)&&bubble$2.remove(B,F),D},events:function(B,O){return B.constructor._bubbleRule(O,B)},toParent:function(B,O,D,F){can$B.listenTo.call(O,B,F,function(){var q=can$B.makeArray(arguments),G=q.shift();q[0]=(can$B.List&&O instanceof can$B.List?O.indexOf(B):D)+(q[0]?"."+q[0]:""),G.triggeredNS=G.triggeredNS||{},!G.triggeredNS[O._cid]&&(G.triggeredNS[O._cid]=!0,can$B.trigger(O,G,q),F==="change"&&can$B.trigger(O,q[0],[q[2],q[3]]))})},childrenOf:function(B,O){B._each(function(D,F){D&&D.bind&&bubble$2.toParent(D,B,F,O)})},teardownFromParent:function(B,O,D){O&&O.unbind&&can$B.stopListening.call(B,O,D)},teardownChildrenFrom:function(B,O){B._each(function(D){bubble$2.teardownFromParent(B,D,O)})},isBubbling:function(B,O){return B._bubbleBindings&&B._bubbleBindings[O]}},bubble_1=bubble$2;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$A=can_1$1,core_hasOwn=Object.prototype.hasOwnProperty,isWindow=function(B){return B!==null&&B==B.window},isPlainObject=function(B){if(!B||typeof B!="object"||B.nodeType||isWindow(B))return!1;try{if(B.constructor&&!core_hasOwn.call(B,"constructor")&&!core_hasOwn.call(B.constructor.prototype,"isPrototypeOf"))return!1}catch{return!1}var O;for(O in B);return O===void 0||core_hasOwn.call(B,O)};can$A.isPlainObject=isPlainObject;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$z=util,mapHelpers$3={attrParts:function(B,O){return O?[B]:typeof B=="object"?B:(""+B).split(".")},canMakeObserve:function(B){return B&&!can$z.isPromise(B)&&(can$z.isArray(B)||can$z.isPlainObject(B))},serialize:function(){var B=null;return function(O,D,F){var q=can$z.cid(O),G=!1;return B||(G=!0,B={attr:{},serialize:{}}),B[D][q]=F,O.each(function(U,Y){var Q,ne=can$z.isMapLike(U),oe=ne&&B[D][can$z.cid(U)];oe?Q=oe:O["___"+D]?Q=O["___"+D](Y,U):Q=mapHelpers$3.getValue(O,Y,U,D),Q!==void 0&&(F[Y]=Q)}),G&&(B=null),F}}(),getValue:function(B,O,D,F){return can$z.isMapLike(D)?D[F]():D},define:null,addComputedAttr:function(B,O,D){B._computedAttrs[O]={compute:D,count:0,handler:function(F,q,G){B._triggerChange(O,"set",q,G,F.batchNum)}}},addToMap:function(O,D){var F;madeMap||(F=teardownMap,madeMap={});var q=O._cid,G=can$z.cid(O);return madeMap[G]||(madeMap[G]={obj:O,instance:D,added:!q}),F},getMapFromObject:function(B){return madeMap&&madeMap[B._cid]&&madeMap[B._cid].instance},twoLevelDeepExtend:function(B,O){for(var D in O)B[D]=B[D]||{},can$z.simpleExtend(B[D],O[D])}},madeMap=null,teardownMap=function(){for(var B in madeMap)madeMap[B].added&&delete madeMap[B].obj._cid;madeMap=null},map_helpers=mapHelpers$3;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$y=util,strUndHash=/_|-/,strColons=/\=\=/,strWords=/([A-Z]+)([A-Z][a-z])/g,strLowUp=/([a-z\d])([A-Z])/g,strDash=/([a-z\d])([A-Z])/g,strReplacer=/\{([^\}]+)\}/g,strQuote=/"/g,strSingleQuote=/'/g,strHyphenMatch=/-+(.)?/g,strCamelMatch=/[a-z][A-Z]/g,getNext=function(B,O,D){var F=B[O];return F===void 0&&D===!0&&(F=B[O]={}),F},isContainer=function(B){return/^f|^o/.test(typeof B)},convertBadValues=function(B){var O=B==null||isNaN(B)&&""+B=="NaN";return""+(O?"":B)};can$y.extend(can$y,{esc:function(B){return convertBadValues(B).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(strQuote,"&#34;").replace(strSingleQuote,"&#39;")},getObject:function(B,O,D){var F=B?B.split("."):[],q=F.length,G,U=0,Y,Q,ne;if(O=can$y.isArray(O)?O:[O||window],ne=O.length,!q)return O[0];for(U;U<ne;U++){for(G=O[U],Q=void 0,Y=0;Y<q&&isContainer(G);Y++)Q=G,G=getNext(Q,F[Y]);if(Q!==void 0&&G!==void 0)break}if(D===!1&&G!==void 0&&delete Q[F[Y-1]],D===!0&&G===void 0)for(G=O[0],Y=0;Y<q&&isContainer(G);Y++)G=getNext(G,F[Y],!0);return G},capitalize:function(B,O){return B.charAt(0).toUpperCase()+B.slice(1)},camelize:function(B){return convertBadValues(B).replace(strHyphenMatch,function(O,D){return D?D.toUpperCase():""})},hyphenate:function(B){return convertBadValues(B).replace(strCamelMatch,function(O,D){return O.charAt(0)+"-"+O.charAt(1).toLowerCase()})},underscore:function(B){return B.replace(strColons,"/").replace(strWords,"$1_$2").replace(strLowUp,"$1_$2").replace(strDash,"_").toLowerCase()},sub:function(B,O,D){var F=[];return B=B||"",F.push(B.replace(strReplacer,function(q,G){var U=can$y.getObject(G,O,D===!0?!1:void 0);return U==null?(F=null,""):isContainer(U)&&F?(F.push(U),""):""+U})),F===null?F:F.length<=1?F[0]:F},replacer:strReplacer,undHash:strUndHash});var string=can$y;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$x=string,initializing=0,canGetDescriptor;try{Object.getOwnPropertyDescriptor({}),canGetDescriptor=!0}catch(B){canGetDescriptor=!1}var getDescriptor=function(B,O){var D=Object.getOwnPropertyDescriptor(B,O);return D&&(D.get||D.set)?D:null},inheritGetterSetter=function(B,O,D){D=D||B;var F;for(var q in B)(F=getDescriptor(B,q))?this._defineProperty(D,O,q,F):can$x.Construct._overwrite(D,O,q,B[q])},simpleInherit=function(B,O,D){D=D||B;for(var F in B)can$x.Construct._overwrite(D,O,F,B[F])};can$x.Construct=function(){if(arguments.length)return can$x.Construct.extend.apply(can$x.Construct,arguments)},can$x.extend(can$x.Construct,{constructorExtends:!0,newInstance:function(){var B=this.instance(),O;return B.setup&&(B.__inSetup=!0,O=B.setup.apply(B,arguments),delete B.__inSetup),B.init&&B.init.apply(B,O||arguments),B},_inherit:canGetDescriptor?inheritGetterSetter:simpleInherit,_defineProperty:function(B,O,D,F){Object.defineProperty(B,D,F)},_overwrite:function(B,O,D,F){B[D]=F},setup:function(B,O){this.defaults=can$x.extend(!0,{},B.defaults,this.defaults)},instance:function(){initializing=1;var B=new this;return initializing=0,B},extend:function(B,O,D){var F=B,q=O,G=D;typeof F!="string"&&(G=q,q=F,F=null),G||(G=q,q=null),G=G||{};var U=this,Y=this.prototype,Q,ne,oe,ce,fe,we,X,ve,de;de=this.instance(),can$x.Construct._inherit(G,Y,de),F?(ne=F.split("."),X=ne.pop()):q&&q.shortName?X=q.shortName:this.shortName&&(X=this.shortName),typeof constructorName>"u"&&(Q=function(){return Ae.apply(this,arguments)});function Ae(){if(!initializing)return this.constructor!==Q&&arguments.length&&Q.constructorExtends?Q.extend.apply(Q,arguments):Q.newInstance.apply(Q,arguments)}for(we in U)U.hasOwnProperty(we)&&(Q[we]=U[we]);can$x.Construct._inherit(q,U,Q),F&&(oe=can$x.getObject(ne.join("."),window,!0),ve=oe,ce=can$x.underscore(F.replace(/\./g,"_")),fe=can$x.underscore(X),oe[X]=Q),can$x.extend(Q,{constructor:Q,prototype:de,namespace:ve,_shortName:fe,fullName:F,_fullName:ce}),X!==void 0&&(Q.shortName=X),Q.prototype.constructor=Q;var Se=[U].concat(can$x.makeArray(arguments)),Pe=Q.setup.apply(Q,Se);return Q.init&&Q.init.apply(Q,Pe||Se),Q}}),can$x.Construct.prototype.setup=function(){},can$x.Construct.prototype.init=function(){},can$x.Construct;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$w=can_1$1,batchNum=1,transactions=0,dispatchingBatch=null,collectingBatch=null,batches=[],dispatchingBatches=!1;can$w.batch={start:function(B){if(transactions++,transactions===1){var O={events:[],callbacks:[],number:batchNum++};batches.push(O),B&&O.callbacks.push(B),collectingBatch=O}},stop:function(B,O){if(B?transactions=0:transactions--,transactions===0){collectingBatch=null;var D;if(dispatchingBatches===!1){dispatchingBatches=!0;for(var F=[],q;D=batches.shift();){var G=D.events;dispatchingBatch=D,can$w.batch.batchNum=D.number;var U;for(O&&can$w.batch.start(),q=0,U=G.length;q<U;q++)can$w.dispatch.apply(G[q][0],G[q][1]);can$w.batch._onDispatchedEvents(D.number),F.push.apply(F,D.callbacks),dispatchingBatch=null,can$w.batch.batchNum=void 0}for(q=F.length-1;q>=0;q--)F[q]();dispatchingBatches=!1}}},_onDispatchedEvents:function(){},trigger:function(B,O,D){B.__inSetup||(O=typeof O=="string"?{type:O}:O,collectingBatch?(O.batchNum=collectingBatch.number,collectingBatch.events.push([B,[O,D]])):O.batchNum?can$w.dispatch.call(B,O,D):batches.length?(can$w.batch.start(),O.batchNum=collectingBatch.number,collectingBatch.events.push([B,[O,D]]),can$w.batch.stop()):can$w.dispatch.call(B,O,D))},afterPreviousEvents:function(B){var O=can$w.last(batches);if(O){var D={};can$w.bind.call(D,"ready",B),O.events.push([D,[{type:"ready"},[]]])}else B({})},after:function(B){var O=collectingBatch||dispatchingBatch;O?O.callbacks.push(B):B({})}};/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$v=util;function ObservedInfo$2(B,O,D){this.newObserved={},this.oldObserved=null,this.func=B,this.context=O,this.compute=D,this.onDependencyChange=can$v.proxy(this.onDependencyChange,this),this.depth=null,this.childDepths={},this.ignore=0,this.inBatch=!1,this.ready=!1,D.observedInfo=this,this.setReady=can$v.proxy(this._setReady,this)}can$v.simpleExtend(ObservedInfo$2.prototype,{getPrimaryDepth:function(){return this.compute._primaryDepth},_setReady:function(){this.ready=!0},getDepth:function(){return this.depth!==null?this.depth:this.depth=this._getDepth()},_getDepth:function(){var B=0,O=this.childDepths;for(var D in O)O[D]>B&&(B=O[D]);return B+1},addEdge:function(B){B.obj.bind(B.event,this.onDependencyChange),B.obj.observedInfo&&(this.childDepths[B.obj._cid]=B.obj.observedInfo.getDepth(),this.depth=null)},removeEdge:function(B){B.obj.unbind(B.event,this.onDependencyChange),B.obj.observedInfo&&(delete this.childDepths[B.obj._cid],this.depth=null)},dependencyChange:function(B){this.bound&&this.ready&&(B.batchNum!==void 0?B.batchNum!==this.batchNum&&(ObservedInfo$2.registerUpdate(this),this.batchNum=B.batchNum):this.updateCompute(B.batchNum))},onDependencyChange:function(B,O,D){this.dependencyChange(B,O,D)},updateCompute:function(B){if(this.bound){var O=this.value;this.getValueAndBind(),this.compute.updater(this.value,O,B)}},getValueAndBind:function(){this.bound=!0,this.oldObserved=this.newObserved||{},this.ignore=0,this.newObserved={},this.ready=!1,observedInfoStack.push(this),this.value=this.func.call(this.context),observedInfoStack.pop(),this.updateBindings(),can$v.batch.afterPreviousEvents(this.setReady)},updateBindings:function(){var B=this.newObserved,O=this.oldObserved,D,F;for(D in B)F=B[D],O[D]?O[D]=null:this.addEdge(F);for(D in O)F=O[D],F&&this.removeEdge(F)},teardown:function(){this.bound=!1;for(var B in this.newObserved){var O=this.newObserved[B];this.removeEdge(O)}this.newObserved={}}});var updateOrder=[],curPrimaryDepth=1/0,maxPrimaryDepth=0,currentBatchNum;ObservedInfo$2.registerUpdate=function(B,O){var D=B.getDepth()-1,F=B.getPrimaryDepth();curPrimaryDepth=Math.min(F,curPrimaryDepth),maxPrimaryDepth=Math.max(F,maxPrimaryDepth);var q=updateOrder[F]||(updateOrder[F]={observeInfos:[],current:1/0,max:0}),G=q.observeInfos[D]||(q.observeInfos[D]=[]);G.push(B),q.current=Math.min(D,q.current),q.max=Math.max(D,q.max)},ObservedInfo$2.updateUntil=function(B,O){for(var D;;)if(curPrimaryDepth<=maxPrimaryDepth&&curPrimaryDepth<=B){var F=updateOrder[curPrimaryDepth];if(F&&F.current<=F.max){if(F.current>O)return;var q=F.observeInfos[F.current];q&&(D=q.pop())?D.updateCompute(currentBatchNum):F.current++}else curPrimaryDepth++}else return},ObservedInfo$2.batchEnd=function(B){var O;for(currentBatchNum=B;;)if(curPrimaryDepth<=maxPrimaryDepth){var D=updateOrder[curPrimaryDepth];if(D&&D.current<=D.max){var F=D.observeInfos[D.current];F&&(O=F.pop())?O.updateCompute(B):D.current++}else curPrimaryDepth++}else{updateOrder=[],curPrimaryDepth=1/0,maxPrimaryDepth=0;return}};var observedInfoStack=[];can$v.__observe=function(B,O){var D=observedInfoStack[observedInfoStack.length-1];if(D&&!D.ignore){var F=O+"",q=B._cid+"|"+F;D.traps?D.traps.push({obj:B,event:F,name:q}):D.newObserved[q]||(D.newObserved[q]={obj:B,event:F})}},can$v.__reading=can$v.__observe,can$v.__trapObserves=function(){if(observedInfoStack.length){var B=observedInfoStack[observedInfoStack.length-1],O=B.traps=[];return function(){return B.traps=null,O}}else return function(){return[]}},can$v.__observes=function(B){var O=observedInfoStack[observedInfoStack.length-1];if(O)for(var D=0,F=B.length;D<F;D++){var q=B[D],G=q.name;O.newObserved[G]||(O.newObserved[G]=q)}},can$v.__isRecordingObserves=function(){var B=observedInfoStack.length,O=observedInfoStack[B-1];return B&&O.ignore===0&&O},can$v.__notObserve=function(B){return function(){if(observedInfoStack.length){var O=observedInfoStack[observedInfoStack.length-1];O.ignore++;var D=B.apply(this,arguments);return O.ignore--,D}else return B.apply(this,arguments)}},can$v.batch._onDispatchedEvents=ObservedInfo$2.batchEnd;var get_value_and_bind=ObservedInfo$2;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$u=util,bubble$1=bubble_1,mapHelpers$2=map_helpers,unobservable={constructor:!0},Map$2=can$u.Map=can$u.Construct.extend({setup:function(B){if(can$u.Construct.setup.apply(this,arguments),this._computedPropertyNames=[],can$u.Map){this.defaults||(this.defaults={});for(var O in this.prototype)O!=="define"&&O!=="constructor"&&(typeof this.prototype[O]!="function"||this.prototype[O].prototype instanceof can$u.Construct)?this.defaults[O]=this.prototype[O]:this.prototype[O].isComputed&&this._computedPropertyNames.push(O);mapHelpers$2.define&&mapHelpers$2.define(this,B.prototype.define)}can$u.List&&!(this.prototype instanceof can$u.List)&&(this.List=Map$2.List.extend({Map:this},{}))},shortName:"Map",_bubbleRule:function(B){return B==="change"||B.indexOf(".")>=0?["change"]:[]},bind:can$u.bindAndSetup,unbind:can$u.unbindAndTeardown,id:"id",keys:function(B){var O=[];can$u.__observe(B,"__keys");for(var D in B._data)O.push(D);return O}},{setup:function(B){B instanceof can$u.Map&&(B=B.serialize()),this._data={},can$u.cid(this,".map"),this._setupComputedProperties();var O=B&&mapHelpers$2.addToMap(B,this),D=this._setupDefaults(B),F=can$u.extend(can$u.extend(!0,{},D),B);this.attr(F),O&&O()},_setupComputedProperties:function(){this._computedAttrs={};for(var B=this.constructor._computedPropertyNames,O=0,D=B.length;O<D;O++){var F=B[O];mapHelpers$2.addComputedAttr(this,F,this[F].clone(this))}},_setupDefaults:function(){return this.constructor.defaults||{}},attr:function(B,O){var D=typeof B;return B===void 0?this._getAttrs():D!=="string"&&D!=="number"?this._setAttrs(B,O):arguments.length===1?this._get(B+""):(this._set(B+"",O),this)},_get:function(B){var O=B.indexOf(".");if(O>=0){var D=this.___get(B);if(D!==void 0)return can$u.__observe(this,B),D;var F=B.substr(0,O),q=B.substr(O+1),G=this.__get(F);return G&&G._get?G._get(q):void 0}else return this.__get(B)},__get:function(B){return!unobservable[B]&&!this._computedAttrs[B]&&can$u.__observe(this,B),this.___get(B)},___get:function(B){if(B!==void 0){var O=this._computedAttrs[B];return O&&O.compute?O.compute():this._data.hasOwnProperty(B)?this._data[B]:void 0}else return this._data},_set:function(B,O,D){var F=B.indexOf("."),q;if(F>=0&&!D){var G=B.substr(0,F),U=B.substr(F+1);if(q=this.__inSetup?void 0:this.___get(G),can$u.isMapLike(q))q._set(U,O);else throw new Error("can.Map: Object does not exist")}else q=this.__inSetup?void 0:this.___get(B),this.__convert&&(O=this.__convert(B,O)),this.__set(B,this.__type(O,B),q)},__type:function(B,O){if(typeof B=="object"&&!(B instanceof can$u.Map)&&mapHelpers$2.canMakeObserve(B)){var D=mapHelpers$2.getMapFromObject(B);if(D)return D;if(can$u.isArray(B)){var F=can$u.List;return new F(B)}else{var q=this.constructor.Map||can$u.Map;return new q(B)}}return B},__set:function(B,O,D){if(O!==D){var F=this._computedAttrs[B],q=F||D!==void 0||this.___get().hasOwnProperty(B)?"set":"add";this.___set(B,typeof O=="object"?bubble$1.set(this,B,O,D):O),(!F||!F.count)&&this._triggerChange(B,q,O,D),typeof D=="object"&&bubble$1.teardownFromParent(this,D)}},___set:function(B,O){var D=this._computedAttrs[B];D&&D.compute?D.compute(O):this._data[B]=O,typeof this.constructor.prototype[B]!="function"&&!D&&(this[B]=O)},removeAttr:function(B){return this._remove(B)},_remove:function(B){var O=mapHelpers$2.attrParts(B),D=O.shift(),F=this.___get(D);return O.length&&F?F.removeAttr(O):(typeof B=="string"&&~B.indexOf(".")&&(D=B),this.__remove(D,F),F)},__remove:function(B,O){B in this._data&&(this.___remove(B),this._triggerChange(B,"remove",void 0,O))},___remove:function(B){delete this._data[B],B in this.constructor.prototype||delete this[B]},___serialize:function(B,O){return mapHelpers$2.getValue(this,B,O,"serialize")},_getAttrs:function(){return mapHelpers$2.serialize(this,"attr",{})},_setAttrs:function(B,O){B=can$u.simpleExtend({},B);var D,F=this,q;can$u.batch.start(),this._each(function(G,U){if(U!=="_cid"){if(q=B[U],q===void 0){O&&F.removeAttr(U);return}F.__convert&&(q=F.__convert(U,q)),can$u.isMapLike(G)&&mapHelpers$2.canMakeObserve(q)?G.attr(q,O):G!==q&&F.__set(U,F.__type(q,U),G),delete B[U]}});for(D in B)D!=="_cid"&&(q=B[D],this._set(D,q,!0));return can$u.batch.stop(),this},serialize:function(){return mapHelpers$2.serialize(this,"serialize",{})},_triggerChange:function(B,O,D,F,q){bubble$1.isBubbling(this,"change")&&can$u.batch.trigger(this,{type:"change",target:this,batchNum:q},[B,O,D,F]),can$u.batch.trigger(this,{type:B,target:this,batchNum:q},[D,F]),(O==="remove"||O==="add")&&can$u.batch.trigger(this,{type:"__keys",target:this,batchNum:q})},_bindsetup:function(){},_bindteardown:function(){},one:can$u.one,bind:function(B,O){var D=this._computedAttrs&&this._computedAttrs[B];return D&&D.compute&&(D.count?D.count++:(D.count=1,D.compute.bind("change",D.handler))),bubble$1.bind(this,B),can$u.bindAndSetup.apply(this,arguments)},unbind:function(B,O){var D=this._computedAttrs&&this._computedAttrs[B];return D&&(D.count===1?(D.count=0,D.compute.unbind("change",D.handler)):D.count--),bubble$1.unbind(this,B),can$u.unbindAndTeardown.apply(this,arguments)},compute:function(B){if(can$u.isFunction(this.constructor.prototype[B]))return can$u.compute(this[B],this);var O=can$u.compute.read.reads(B),D=O.length-1;return can$u.compute(function(F){if(arguments.length)can$u.compute.read(this,O.slice(0,D)).value.attr(O[D].key,F);else return can$u.compute.read(this,O,{args:[]}).value},this)},each:function(){return can$u.each.apply(void 0,[this].concat(can$u.makeArray(arguments)))},_each:function(B){var O=this.___get();for(var D in O)O.hasOwnProperty(D)&&B(O[D],D)},dispatch:can$u.dispatch});Map$2.prototype.on=Map$2.prototype.bind,Map$2.prototype.off=Map$2.prototype.unbind,Map$2.on=Map$2.bind,Map$2.off=Map$2.unbind;var map=Map$2;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$t=util,Map$1=map,bubble=bubble_1,mapHelpers$1=map_helpers,splice$2=[].splice;(function(){var B={0:"a",length:1};return splice$2.call(B,0,1),!B[0]})();var list=Map$1.extend({Map:Map$1},{setup:function(B,O){this.length=0,can$t.cid(this,".map"),this._setupComputedProperties(),B=B||[];var D;can$t.isPromise(B)?this.replace(B):(D=B.length&&mapHelpers$1.addToMap(B,this),this.push.apply(this,can$t.makeArray(B||[]))),D&&D(),can$t.simpleExtend(this,O)},_triggerChange:function(B,O,D,F){Map$1.prototype._triggerChange.apply(this,arguments);var q=+B;!~(""+B).indexOf(".")&&!isNaN(q)&&(O==="add"?(can$t.batch.trigger(this,O,[D,q]),can$t.batch.trigger(this,"length",[this.length])):O==="remove"?(can$t.batch.trigger(this,O,[F,q]),can$t.batch.trigger(this,"length",[this.length])):can$t.batch.trigger(this,O,[D,q]))},___get:function(B){if(B){var O=this._computedAttrs[B];return O&&O.compute?O.compute():this[B]}else return this},__set:function(B,O,D){if(B=isNaN(+B)||B%1?B:+B,typeof B=="number"&&B>this.length-1){var F=new Array(B+1-this.length);return F[F.length-1]=O,this.push.apply(this,F),F}return can$t.Map.prototype.__set.call(this,""+B,O,D)},___set:function(B,O){this[B]=O,+B>=this.length&&(this.length=+B+1)},__remove:function(B,O){isNaN(+B)?(delete this[B],this._triggerChange(B,"remove",void 0,O)):this.splice(B,1)},_each:function(B){for(var O=this.___get(),D=0;D<O.length;D++)B(O[D],D)},serialize:function(){return mapHelpers$1.serialize(this,"serialize",[])},splice:function(B,O){var D=can$t.makeArray(arguments),F=[],q,G,U,Y=D.length>2;for(B=B||0,q=0,G=D.length-2;q<G;q++)U=q+2,D[U]=this.__type(D[U],U),F.push(D[U]),this[q+B]!==D[U]&&(Y=!1);if(Y&&this.length<=F.length)return F;O===void 0&&(O=D[1]=this.length-B);var Q=splice$2.apply(this,D);for(q=this.length;q<Q.length+this.length;q++)delete this[q];return can$t.batch.start(),O>0&&(bubble.removeMany(this,Q),this._triggerChange(""+B,"remove",void 0,Q)),D.length>2&&(bubble.addMany(this,F),this._triggerChange(""+B,"add",F,Q)),can$t.batch.stop(),Q},_getAttrs:function(){return mapHelpers$1.serialize(this,"attr",[])},_setAttrs:function(B,O){B=can$t.makeArray(B),can$t.batch.start(),this._updateAttrs(B,O),can$t.batch.stop()},_updateAttrs:function(B,O){for(var D=Math.min(B.length,this.length),F=0;F<D;F++){var q=this[F],G=B[F];can$t.isMapLike(q)&&mapHelpers$1.canMakeObserve(G)?q.attr(G,O):q!==G&&this._set(F+"",G)}B.length>this.length?this.push.apply(this,B.slice(this.length)):B.length<this.length&&O&&this.splice(B.length)}}),getArgs=function(B){return B[0]&&can$t.isArray(B[0])?B[0]:can$t.makeArray(B)};can$t.each({push:"length",unshift:0},function(B,O){var D=[][O];list.prototype[O]=function(){can$t.batch.start();for(var F=[],q=B?this.length:0,G=arguments.length,U,Y;G--;)Y=arguments[G],F[G]=bubble.set(this,G,this.__type(Y,G));return U=D.apply(this,F),(!this.comparator||F.length)&&this._triggerChange(""+q,"add",F,void 0),can$t.batch.stop(),U}}),can$t.each({pop:"length",shift:0},function(B,O){list.prototype[O]=function(){if(this.length){var D=getArgs(arguments),F=B&&this.length?this.length-1:0,q=[][O].apply(this,D);return can$t.batch.start(),this._triggerChange(""+F,"remove",void 0,[q]),q&&q.unbind&&bubble.remove(this,q),can$t.batch.stop(),q}}}),can$t.extend(list.prototype,{indexOf:function(B,O){return can$t.__observe(this,"length"),can$t.inArray(B,this,O)},join:function(){return can$t.__observe(this,"length"),[].join.apply(this,arguments)},reverse:function(){var B=[].reverse.call(can$t.makeArray(this));return this.replace(B)},slice:function(){can$t.__observe(this,"length");var B=Array.prototype.slice.apply(this,arguments);return new this.constructor(B)},concat:function(){var B=[];return can$t.each(can$t.makeArray(arguments),function(O,D){B[D]=O instanceof can$t.List?O.serialize():O}),new this.constructor(Array.prototype.concat.apply(this.serialize(),B))},forEach:function(B,O){return can$t.each(this,B,O||this)},replace:function(B){if(can$t.isPromise(B)){this._promise&&(this._promise.__isCurrentPromise=!1);var O=this._promise=B;O.__isCurrentPromise=!0;var D=this;B.then(function(F){O.__isCurrentPromise&&D.replace(F)})}else this.splice.apply(this,[0,this.length].concat(can$t.makeArray(B||[])));return this},filter:function(B,O){var D=new this.constructor,F=this,q;return this.each(function(G,U,Y){q=B.call(O||F,G,U,F),q&&D.push(G)}),D},map:function(B,O){var D=new can$t.List,F=this;return this.each(function(q,G,U){var Y=B.call(O||F,q,G,F);D.push(Y)}),D}}),can$t.List=Map$1.List=list,can$t.List;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$s=util,digitTest=/^\d+$/,keyBreaker=/([^\[\]]+)|(\[\])/g,paramTest=/([^?#]*)(#.*)?$/,prep=function(B){return decodeURIComponent(B.replace(/\+/g," "))};can$s.extend(can$s,{deparam:function(B){var O={},D,F;return B&&paramTest.test(B)&&(D=B.split("&"),can$s.each(D,function(q){var G=q.split("="),U=prep(G.shift()),Y=prep(G.join("=")),Q=O;if(U){G=U.match(keyBreaker);for(var ne=0,oe=G.length-1;ne<oe;ne++)Q[G[ne]]||(Q[G[ne]]=digitTest.test(G[ne+1])||G[ne+1]==="[]"?[]:{}),Q=Q[G[ne]];F=G.pop(),F==="[]"?Q.push(Y):Q[F]=Y}})),O}});/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$r=util,matcher=/\:([\w\.]+)/g,paramsMatcher=/^(?:&[^=]+=[^&]*)+/,makeProps=function(B){var O=[];return can$r.each(B,function(D,F){O.push((F==="className"?"class":F)+'="'+(F==="href"?D:can$r.esc(D))+'"')}),O.join(" ")},matchesData=function(B,O){var D=0,F=0,q={};for(var G in B.defaults)B.defaults[G]===O[G]&&(q[G]=1,D++);for(;F<B.names.length;F++){if(!O.hasOwnProperty(B.names[F]))return-1;q[B.names[F]]||D++}return D},location$1=window.location,wrapQuote=function(B){return(B+"").replace(/([.?*+\^$\[\]\\(){}|\-])/g,"\\$1")},each$2=can$r.each,extend$1=can$r.extend,definedToString=function(B){return B.toString.toString()!==Object.prototype.toString.toString()},stringify=function(B){return B&&typeof B=="object"&&!definedToString(B)?(B instanceof can$r.Map?B=B:B=can$r.isFunction(B.slice)?B.slice():can$r.extend({},B),can$r.each(B,function(O,D){B[D]=stringify(O)})):B!=null&&can$r.isFunction(B.toString)&&(B=B.toString()),B},removeBackslash=function(B){return B.replace(/\\/g,"")},timer,curParams,lastHash,changingData,changedAttrs=[],onRouteDataChange=function(B,O,D,F){changingData=1,changedAttrs.push(O),clearTimeout(timer),timer=setTimeout(function(){changingData=0;var q=can$r.route.data.serialize(),G=can$r.route.param(q,!0);can$r.route._call("setURL",G,changedAttrs),can$r.batch.trigger(eventsObject,"__url",[G,lastHash]),lastHash=G,changedAttrs=[]},10)},eventsObject=can$r.extend({},can$r.event),stringCoercingMapDecorator=function(B){var O=B.attr;return B.attr=function(D,F){var q=this.define===void 0||this.define[D]===void 0||!!this.define[D].serialize,G;return q?G=stringify(Array.apply(null,arguments)):G=arguments,O.apply(this,G)},B};can$r.route=function(B,O){var D=can$r.route._call("root");D.lastIndexOf("/")===D.length-1&&B.indexOf("/")===0&&(B=B.substr(1)),O=O||{};for(var F=[],q,G="",U=matcher.lastIndex=0,Y,Q=can$r.route._call("querySeparator"),ne=can$r.route._call("matchSlashes");q=matcher.exec(B);)F.push(q[1]),G+=removeBackslash(B.substring(U,matcher.lastIndex-q[0].length)),Y="\\"+(removeBackslash(B.substr(matcher.lastIndex,1))||Q+(ne?"":"|/")),G+="([^"+Y+"]"+(O[q[1]]?"*":"+")+")",U=matcher.lastIndex;return G+=B.substr(U).replace("\\",""),can$r.route.routes[B]={test:new RegExp("^"+G+"($|"+wrapQuote(Q)+")"),route:B,names:F,defaults:O,length:B.split("/").length},can$r.route},extend$1(can$r.route,{param:function(B,O){var D,F=0,q,G=B.route,U=0;if(delete B.route,each$2(B,function(){U++}),each$2(can$r.route.routes,function(oe,ce){if(q=matchesData(oe,B),q>F&&(D=oe,F=q),q>=U)return!1}),can$r.route.routes[G]&&matchesData(can$r.route.routes[G],B)===F&&(D=can$r.route.routes[G]),D){var Y=extend$1({},B),Q=D.route.replace(matcher,function(oe,ce){return delete Y[ce],B[ce]===D.defaults[ce]?"":encodeURIComponent(B[ce])}).replace("\\",""),ne;return each$2(D.defaults,function(oe,ce){Y[ce]===oe&&delete Y[ce]}),ne=can$r.param(Y),O&&can$r.route.attr("route",D.route),Q+(ne?can$r.route._call("querySeparator")+ne:"")}return can$r.isEmptyObject(B)?"":can$r.route._call("querySeparator")+can$r.param(B)},deparam:function(B){var O=can$r.route._call("root");O.lastIndexOf("/")===O.length-1&&B.indexOf("/")===0&&(B=B.substr(1));var D={length:-1},F=can$r.route._call("querySeparator"),q=can$r.route._call("paramsMatcher");if(each$2(can$r.route.routes,function(ne,oe){ne.test.test(B)&&ne.length>D.length&&(D=ne)}),D.length>-1){var G=B.match(D.test),U=G.shift(),Y=B.substr(U.length-(G[G.length-1]===F?1:0)),Q=Y&&q.test(Y)?can$r.deparam(Y.slice(1)):{};return Q=extend$1(!0,{},D.defaults,Q),each$2(G,function(ne,oe){ne&&ne!==F&&(Q[D.names[oe]]=decodeURIComponent(ne))}),Q.route=D.route,Q}return B.charAt(0)!==F&&(B=F+B),q.test(B)?can$r.deparam(B.slice(1)):{}},data:stringCoercingMapDecorator(new can$r.Map({})),map:function(B){var O;B.prototype instanceof can$r.Map?O=new B:O=B,can$r.route.data=stringCoercingMapDecorator(O)},routes:{},ready:function(B){return B!==!0&&(can$r.route._setup(),(can$r.isBrowserWindow||can$r.isWebWorker)&&can$r.route.setState()),can$r.route},url:function(B,O){return O&&(can$r.__observe(eventsObject,"__url"),B=can$r.extend({},can$r.route.deparam(can$r.route._call("matchingPartOfURL")),B)),can$r.route._call("root")+can$r.route.param(B)},link:function(B,O,D,F){return"<a "+makeProps(extend$1({href:can$r.route.url(O,F)},D))+">"+B+"</a>"},current:function(B){return can$r.__observe(eventsObject,"__url"),this._call("matchingPartOfURL")===can$r.route.param(B)},bindings:{hashchange:{paramsMatcher,querySeparator:"&",matchSlashes:!1,bind:function(){can$r.bind.call(window,"hashchange",setState)},unbind:function(){can$r.unbind.call(window,"hashchange",setState)},matchingPartOfURL:function(){var B=can$r.route.location||location$1;return B.href.split(/#!?/)[1]||""},setURL:function(B){return location$1.hash!=="#"+B&&(location$1.hash="!"+B),B},root:"#!"}},defaultBinding:"hashchange",currentBinding:null,_setup:function(){can$r.route.currentBinding||(can$r.route._call("bind"),can$r.route.bind("change",onRouteDataChange),can$r.route.currentBinding=can$r.route.defaultBinding)},_teardown:function(){can$r.route.currentBinding&&(can$r.route._call("unbind"),can$r.route.unbind("change",onRouteDataChange),can$r.route.currentBinding=null),clearTimeout(timer),changingData=0},_call:function(){var B=can$r.makeArray(arguments),O=B.shift(),D=can$r.route.bindings[can$r.route.currentBinding||can$r.route.defaultBinding],F=D[O];return F.apply?F.apply(D,B):F}}),each$2(["bind","unbind","on","off","delegate","undelegate","removeAttr","compute","_get","___get","each"],function(B){can$r.route[B]=function(){if(can$r.route.data[B])return can$r.route.data[B].apply(can$r.route.data,arguments)}}),can$r.route.attr=function(){return can$r.route.data.attr.apply(can$r.route.data,arguments)},can$r.route.batch=can$r.batch;var setState=can$r.route.setState=function(){var B=can$r.route._call("matchingPartOfURL"),O=curParams;curParams=can$r.route.deparam(B),(!changingData||B!==lastHash)&&(can$r.route.batch.start(),recursiveClean(O,curParams,can$r.route.data),can$r.route.attr(curParams),can$r.route.batch.trigger(eventsObject,"__url",[B,lastHash]),can$r.route.batch.stop())},recursiveClean=function(B,O,D){for(var F in B)O[F]===void 0?D.removeAttr(F):Object.prototype.toString.call(B[F])==="[object Object]"&&recursiveClean(B[F],O[F],D.attr(F))};can$r.route;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$q=util,bind$1=function(B,O,D){return can$q.bind.call(B,O,D),function(){can$q.unbind.call(B,O,D)}},isFunction$1=can$q.isFunction,extend=can$q.extend,each$1=can$q.each,slice$1=[].slice,paramReplacer$1=/\{([^\}]+)\}/g,special$2=can$q.getObject("$.event.special",[can$q])||{},delegate=function(B,O,D,F){return can$q.delegate.call(B,O,D,F),function(){can$q.undelegate.call(B,O,D,F)}},binder=function(B,O,D,F){return F?delegate(B,can$q.trim(F),O,D):bind$1(B,O,D)},basicProcessor;can$q.Control=can$q.Construct({setup:function(){if(can$q.Construct.setup.apply(this,arguments),can$q.Control){var B=this,O;B.actions={};for(O in B.prototype)B._isAction(O)&&(B.actions[O]=B._action(O))}},_shifter:function(B,O){var D=typeof O=="string"?B[O]:O;return isFunction$1(D)||(D=B[D]),function(){return B.called=O,D.apply(B,[this.nodeName?can$q.$(this):this].concat(slice$1.call(arguments,0)))}},_isAction:function(B){var O=this.prototype[B],D=typeof O;return B!=="constructor"&&(D==="function"||D==="string"&&isFunction$1(this.prototype[O]))&&!!(special$2[B]||processors[B]||/[^\w]/.test(B))},_action:function(B,O){if(paramReplacer$1.lastIndex=0,O||!paramReplacer$1.test(B)){var D=O?can$q.sub(B,this._lookup(O)):B;if(!D)return null;var F=can$q.isArray(D),q=F?D[1]:D,G=q.split(/\s+/g),U=G.pop();return{processor:processors[U]||basicProcessor,parts:[q,G.join(" "),U],delegate:F?D[0]:void 0}}},_lookup:function(B){return[B,window]},processors:{},defaults:{}},{setup:function(B,O){var D=this.constructor,F=D.pluginName||D._fullName,q;return this.element=can$q.$(B),F&&F!=="can_control"&&this.element.addClass(F),q=can$q.data(this.element,"controls"),q||(q=[],can$q.data(this.element,"controls",q)),q.push(this),this.options=extend({},D.defaults,O),this.on(),[this.element,this.options]},on:function(B,O,D,F){if(!B){this.off();var q=this.constructor,G=this._bindings,U=q.actions,Y=this.element,Q=can$q.Control._shifter(this,"destroy"),ne,oe;for(ne in U)U.hasOwnProperty(ne)&&(oe=U[ne]||q._action(ne,this.options,this),oe&&(G.control[ne]=oe.processor(oe.delegate||Y,oe.parts[2],oe.parts[1],ne,this)));return can$q.bind.call(Y,"removed",Q),G.user.push(function(ce){can$q.unbind.call(ce,"removed",Q)}),G.user.length}return typeof B=="string"&&(F=D,D=O,O=B,B=this.element),F===void 0&&(F=D,D=O,O=null),typeof F=="string"&&(F=can$q.Control._shifter(this,F)),this._bindings.user.push(binder(B,D,F,O)),this._bindings.user.length},off:function(){var B=this.element[0],O=this._bindings;O&&(each$1(O.user||[],function(D){D(B)}),each$1(O.control||{},function(D){D(B)})),this._bindings={user:[],control:{}}},destroy:function(){if(this.element!==null){var B=this.constructor,O=B.pluginName||B._fullName,D;this.off(),O&&O!=="can_control"&&this.element.removeClass(O),D=can$q.data(this.element,"controls"),D.splice(can$q.inArray(this,D),1),can$q.trigger(this,"destroyed"),this.element=null}}});var processors=can$q.Control.processors;basicProcessor=function(B,O,D,F,q){return binder(B,O,can$q.Control._shifter(q,F),D)},each$1(["change","click","contextmenu","dblclick","keydown","keyup","keypress","mousedown","mousemove","mouseout","mouseover","mouseup","reset","resize","scroll","select","submit","focusin","focusout","mouseenter","mouseleave","touchstart","touchmove","touchcancel","touchend","touchleave","inserted","removed","dragstart","dragenter","dragover","dragleave","drag","drop","dragend"],function(B){processors[B]=basicProcessor});/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$p=util;can$p.Control.processors.route=function(B,O,D,F,q){D=D||"",can$p.route.routes[D]||(D[0]==="/"&&(D=D.substring(1)),can$p.route(D));var G,U=function(Y,Q,ne){if(can$p.route.attr("route")===D&&(Y.batchNum===void 0||Y.batchNum!==G)){G=Y.batchNum;var oe=can$p.route.attr();delete oe.route,can$p.isFunction(q[F])?q[F](oe):q[q[F]](oe)}};return can$p.route.bind("change",U),function(){can$p.route.unbind("change",U)}};/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$o=util,pipe=function(B,O,D){var F=new can$o.Deferred;return B.then(function(){var q=can$o.makeArray(arguments),G=!0;try{q[0]=D.apply(O,q)}catch(U){G=!1,F.rejectWith(F,[U].concat(q))}G&&F.resolveWith(F,q)},function(){F.rejectWith(this,arguments)}),typeof B.abort=="function"&&(F.abort=function(){return B.abort()}),F},modelNum=0,getId=function(B){return can$o.__observe(B,B.constructor.id),B.___get(B.constructor.id)},ajax=function(B,O,D,F,q,G){var U={};if(typeof B=="string"){var Y=B.split(/\s+/);U.url=Y.pop(),Y.length&&(U.type=Y.pop())}else can$o.extend(U,B);return U.data=typeof O=="object"&&!can$o.isArray(O)?can$o.extend(U.data||{},O):O,U.url=can$o.sub(U.url,U.data,!0),can$o.ajax(can$o.extend({type:D||"post",dataType:"json",success:q,error:G},U))},makeRequest=function(B,O,D,F,q){var G;can$o.isArray(B)?(G=B[1],B=B[0]):G=B.serialize(),G=[G];var U,Y=B.constructor,Q;return(O==="update"||O==="destroy")&&G.unshift(getId(B)),Q=Y[O].apply(Y,G),U=pipe(Q,B,function(ne){return B[q||O+"d"](ne,Q),B}),Q.abort&&(U.abort=function(){Q.abort()}),U.then(D,F),U},converters={models:function(B,O,D){if(can$o.Model._reqs++,!!B){if(B instanceof this.List)return B;var F=this,q=[],G=F.List||ML,U=O instanceof can$o.List?O:new G,Y=B instanceof ML,Q=Y?B.serialize():B;if(Q=F.parseModels(Q,D),Q.data&&(B=Q,Q=Q.data),typeof Q>"u"||!can$o.isArray(Q))throw new Error("Could not get any raw data while converting using .models");return U.length&&U.splice(0),can$o.each(Q,function(ne){q.push(F.model(ne,D))}),U.push.apply(U,q),can$o.isArray(B)||can$o.each(B,function(ne,oe){oe!=="data"&&U.attr(oe,ne)}),setTimeout(can$o.proxy(this._clean,this),1),U}},model:function(B,O,D){if(B){typeof B.serialize=="function"?B=B.serialize():B=this.parseModel(B,D);var F=B[this.id];(F||F===0)&&this.store[F]&&(O=this.store[F]);var q=O&&can$o.isFunction(O.attr)?O.attr(B,this.removeAttr||!1):new this(B);return q}}},makeParser={parseModel:function(B){return function(O){return B?can$o.getObject(B,O):O}},parseModels:function(B){return function(O){if(can$o.isArray(O))return O;B=B||"data";var D=can$o.getObject(B,O);if(!can$o.isArray(D))throw new Error("Could not get any raw data while converting using .models");return D}}},ajaxMethods={create:{url:"_shortName",type:"post"},update:{data:function(B,O){O=O||{};var D=this.id;return O[D]&&O[D]!==B&&(O["new"+can$o.capitalize(B)]=O[D],delete O[D]),O[D]=B,O},type:"put"},destroy:{type:"delete",data:function(B,O){return O=O||{},O.id=O[this.id]=B,O}},findAll:{url:"_shortName"},findOne:{}},ajaxMaker=function(B,O){return function(D){return D=B.data?B.data.apply(this,arguments):D,ajax(O||this[B.url||"_url"],D,B.type||"get")}},createURLFromResource=function(B,O){if(B.resource){var D=B.resource.replace(/\/+$/,"");return O==="findAll"||O==="create"?D:D+"/{"+B.id+"}"}};can$o.Model=can$o.Map.extend({fullName:"can.Model",_reqs:0,setup:function(B,O,D,F){if(typeof O!="string"&&(F=D,D=O),F||(F=D),this.store={},can$o.Map.setup.apply(this,arguments),!!can$o.Model){D&&D.List?(this.List=D.List,this.List.Map=this):this.List=B.List.extend({Map:this},{});var q=this,G=can$o.proxy(this._clean,q);can$o.each(ajaxMethods,function(Y,Q){if(D&&D[Q]&&(typeof D[Q]=="string"||typeof D[Q]=="object")?q[Q]=ajaxMaker(Y,D[Q]):D&&D.resource&&!can$o.isFunction(D[Q])&&(q[Q]=ajaxMaker(Y,createURLFromResource(q,Q))),q["make"+can$o.capitalize(Q)]){var ne=q["make"+can$o.capitalize(Q)](q[Q]);can$o.Construct._overwrite(q,B,Q,function(){can$o.Model._reqs++;var oe=ne.apply(this,arguments),ce=oe.then(G,G);return ce.abort=oe.abort,ce})}});var U={};can$o.each(converters,function(Y,Q){var ne="parse"+can$o.capitalize(Q),oe=D&&D[Q]||q[Q];typeof oe=="string"?(q[ne]=oe,can$o.Construct._overwrite(q,B,Q,Y)):D&&D[Q]&&(U[ne]=!0)}),can$o.each(makeParser,function(Y,Q){var ne=D&&D[Q]||q[Q];if(typeof ne=="string")can$o.Construct._overwrite(q,B,Q,Y(ne));else if((!D||!can$o.isFunction(D[Q]))&&!q[Q]){var oe=Y();oe.useModelConverter=U[Q],can$o.Construct._overwrite(q,B,Q,oe)}}),(q.fullName==="can.Model"||!q.fullName)&&(q.fullName="Model"+ ++modelNum),can$o.Model._reqs=0,this._url=this._shortName+"/{"+this.id+"}"}},_ajax:ajaxMaker,_makeRequest:makeRequest,_clean:function(){if(can$o.Model._reqs--,!can$o.Model._reqs)for(var B in this.store)this.store[B]._bindings||delete this.store[B];return arguments[0]},models:converters.models,model:converters.model},{setup:function(B){var O=B&&B[this.constructor.id];can$o.Model._reqs&&O!=null&&(this.constructor.store[O]=this),can$o.Map.prototype.setup.apply(this,arguments)},isNew:function(){var B=getId(this);return!(B||B===0)},save:function(B,O){return makeRequest(this,this.isNew()?"create":"update",B,O)},destroy:function(B,O){if(this.isNew()){var D=this,F=can$o.Deferred();return F.then(B,O),F.done(function(q){D.destroyed(q)}).resolve(D)}return makeRequest(this,"destroy",B,O,"destroyed")},_bindsetup:function(){var B=this.___get(this.constructor.id);return B!=null&&(this.constructor.store[B]=this),can$o.Map.prototype._bindsetup.apply(this,arguments)},_bindteardown:function(){return delete this.constructor.store[getId(this)],can$o.Map.prototype._bindteardown.apply(this,arguments)},___set:function(B,O){can$o.Map.prototype.___set.call(this,B,O),B===this.constructor.id&&this._bindings&&(this.constructor.store[getId(this)]=this)}});var makeGetterHandler=function(B){return function(O,D,F){return this[B](O,null,F)}},createUpdateDestroyHandler=function(B){return this.parseModel.useModelConverter?this.model(B):this.parseModel(B)},responseHandlers={makeFindAll:makeGetterHandler("models"),makeFindOne:makeGetterHandler("model"),makeCreate:createUpdateDestroyHandler,makeUpdate:createUpdateDestroyHandler,makeDestroy:createUpdateDestroyHandler};can$o.each(responseHandlers,function(B,O){can$o.Model[O]=function(D){return function(){var F=can$o.makeArray(arguments),q=can$o.isFunction(F[1])?F.splice(0,1):F.splice(0,2),G=pipe(D.apply(this,q),this,B);return G.then(F[0],F[1]),G}}}),can$o.each(["created","updated","destroyed"],function(B){can$o.Model.prototype[B]=function(O){var D=this,F=D.constructor;O&&typeof O=="object"&&this.attr(can$o.isFunction(O.attr)?O.attr():O),can$o.dispatch.call(this,{type:B,target:this},[]),can$o.dispatch.call(F,B,[this])}});var ML=can$o.Model.List=can$o.List.extend({_bubbleRule:function(B,O){var D=can$o.List._bubbleRule(B,O);return D.push("destroyed"),D}},{setup:function(B){can$o.isPlainObject(B)&&!can$o.isArray(B)?(can$o.List.prototype.setup.apply(this),this.replace(can$o.isPromise(B)?B:this.constructor.Map.findAll(B))):can$o.List.prototype.setup.apply(this,arguments),this.bind("destroyed",can$o.proxy(this._destroyed,this))},_destroyed:function(B,O){if(/\w+/.test(O))for(var D;(D=this.indexOf(B.target))>-1;)this.splice(D,1)}});can$o.Model;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$n=util,read$1=function(B,O,D){D=D||{};for(var F={foundObservable:!1},q=readValue(B,0,O,D,F),G,U,Y=O.length,Q=0;Q<Y;){U=q;for(var ne=0,oe=read$1.propertyReaders.length;ne<oe;ne++){var ce=read$1.propertyReaders[ne];if(ce.test(q)){q=ce.read(q,O[Q],Q,D,F);break}}if(Q=Q+1,q=readValue(q,Q,O,D,F,U),G=typeof q,Q<O.length&&(q===null||G!=="function"&&G!=="object"))return D.earlyExit&&D.earlyExit(U,Q-1,q),{value:void 0,parent:U}}return q===void 0&&D.earlyExit&&D.earlyExit(U,Q-1),{value:q,parent:U}},isAt=function(B,O){var D=O[B-1];return D&&D.at},readValue=function(B,O,D,F,q,G){var U;do{U=!1;for(var Y=0,Q=read$1.valueReaders.length;Y<Q;Y++)read$1.valueReaders[Y].test(B,O,D,F)&&(B=read$1.valueReaders[Y].read(B,O,D,F,q,G))}while(U);return B};read$1.valueReaders=[{name:"compute",test:function(B,O,D,F){return B&&B.isComputed&&!isAt(O,D)},read:function(B,O,D,F,q){return F.readCompute===!1&&O===D.length?B:(!q.foundObservable&&F.foundObservable&&(F.foundObservable(B,O),q.foundObservable=!0),B instanceof can$n.Compute?B.get():B())}},{name:"function",test:function(B,O,D,F){var q=typeof B;return q==="function"&&!B.isComputed&&!(can$n.Construct&&B.prototype instanceof can$n.Construct)&&!(can$n.route&&B===can$n.route)},read:function(B,O,D,F,q,G){return isAt(O,D)?O===D.length?can$n.proxy(B,G):B:F.callMethodsOnObservables&&can$n.isMapLike(G)?B.apply(G,F.args||[]):F.isArgument&&O===D.length?F.proxyMethods!==!1?can$n.proxy(B,G):B:B.apply(G,F.args||[])}}],read$1.propertyReaders=[{name:"map",test:can$n.isMapLike,read:function(B,O,D,F,q){!q.foundObservable&&F.foundObservable&&(F.foundObservable(B,D),q.foundObservable=!0);var G=B.attr(O.key);return G!==void 0?G:B[O.key]}},{name:"promise",test:function(B){return can$n.isPromise(B)},read:function(B,O,D,F,q){!q.foundObservable&&F.foundObservable&&(F.foundObservable(B,D),q.foundObservable=!0);var G=B.__observeData;return B.__observeData||(G=B.__observeData={isPending:!0,state:"pending",isResolved:!1,isRejected:!1,value:void 0,reason:void 0},can$n.cid(G),can$n.simpleExtend(G,can$n.event),B.then(function(U){G.isPending=!1,G.isResolved=!0,G.value=U,G.state="resolved",G.dispatch("state",["resolved","pending"])},function(U){G.isPending=!1,G.isRejected=!0,G.reason=U,G.state="rejected",G.dispatch("state",["rejected","pending"])})),can$n.__observe(G,"state"),O.key in G?G[O.key]:B[O.key]}},{name:"object",test:function(){return!0},read:function(B,O){if(B!=null){if(O.key in B)return B[O.key];if(O.at&&specialRead[O.key]&&"@"+O.key in B)return O.at=!1,B["@"+O.key]}}}];var specialRead={index:!0,key:!0,event:!0,element:!0,viewModel:!0};read$1.write=function(B,O,D,F){if(F=F||{},can$n.isMapLike(B))return!F.isArgument&&B._data&&B._data[O]&&B._data[O].isComputed?B._data[O](D):B.attr(O,D);if(B[O]&&B[O].isComputed)return B[O](D);typeof B=="object"&&(B[O]=D)},read$1.reads=function(B){var O=[],D=0,F=!1;B.charAt(0)==="@"&&(D=1,F=!0);for(var q="",G=D;G<B.length;G++){var U=B.charAt(G);U==="."||U==="@"?B.charAt(G-1)!=="\\"?(O.push({key:q,at:F}),F=U==="@",q=""):q=q.substr(0,q.length-1)+".":q+=U}return O.push({key:q,at:F}),O};var read_1=read$1;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$m=util,read=read_1,ObservedInfo$1=get_value_and_bind;can$m.Compute=function(B,O,D,F){can$m.cid(this,"compute");for(var q=[],G=0,U=arguments.length;G<U;G++)q[G]=arguments[G];var Y=typeof q[1];typeof q[0]=="function"?this._setupGetterSetterFn(q[0],q[1],q[2],q[3]):q[1]?Y==="string"?this._setupProperty(q[0],q[1],q[2]):Y==="function"?this._setupSetter(q[0],q[1],q[2]):q[1]&&q[1].fn?this._setupAsyncCompute(q[0],q[1]):this._setupSettings(q[0],q[1]):this._setupSimpleValue(q[0]),this._args=q,this._primaryDepth=0,this.isComputed=!0},can$m.simpleExtend(can$m.Compute.prototype,{setPrimaryDepth:function(B){this._primaryDepth=B},_setupGetterSetterFn:function(B,O,D){this._set=O?can$m.proxy(B,O):B,this._get=O?can$m.proxy(B,O):B,this._canObserve=D!==!1;var F=setupComputeHandlers(this,B,O||this);can$m.simpleExtend(this,F)},_setupProperty:function(B,O,D){var F=can$m.isMapLike(B),q=this,G;F?(G=function(U,Y,Q){q.updater(Y,Q,U.batchNum)},this.hasDependencies=!0,this._get=function(){return B.attr(O)},this._set=function(U){B.attr(O,U)}):(G=function(){q.updater(q._get(),q.value)},this._get=function(){return can$m.getObject(O,[B])},this._set=function(U){var Y=O.split("."),Q=Y.pop(),ne=can$m.getObject(Y.join("."),[B]);ne[Q]=U}),this._on=function(U){can$m.bind.call(B,D||O,G),this.value=this._get()},this._off=function(){return can$m.unbind.call(B,D||O,G)}},_setupSetter:function(B,O,D){this.value=B,this._set=O,can$m.simpleExtend(this,D)},_setupSettings:function(B,O){if(this.value=B,this._set=O.set||this._set,this._get=O.get||this._get,!O.__selfUpdater){var D=this,F=this.updater;this.updater=function(){F.call(D,D._get(),D.value)}}this._on=O.on?O.on:this._on,this._off=O.off?O.off:this._off},_setupAsyncCompute:function(B,O){var D=this;this.value=B,this._setUpdates=!0,this.lastSetValue=new can$m.Compute(B),this._set=function(Y){return Y===D.lastSetValue.get()?this.value:D.lastSetValue.set(Y)},this._get=function(){return F.call(O.context,D.lastSetValue.get())};var F=O.fn,q;if(F.length===0)q=setupComputeHandlers(this,F,O.context);else if(F.length===1)q=setupComputeHandlers(this,function(){return F.call(O.context,D.lastSetValue.get())},O);else{var G=this.updater,U=function(Y){G.call(D,Y,D.value)};this.updater=function(Y){G.call(D,Y,D.value)},q=setupComputeHandlers(this,function(){var Y=F.call(O.context,D.lastSetValue.get(),U);return Y!==void 0?Y:this.value},this)}can$m.simpleExtend(this,q)},_setupSimpleValue:function(B){this.value=B},_bindsetup:can$m.__notObserve(function(){this.bound=!0,this._on(this.updater)}),_bindteardown:function(){this._off(this.updater),this.bound=!1},bind:can$m.bindAndSetup,unbind:can$m.unbindAndTeardown,clone:function(B){return B&&typeof this._args[0]=="function"?this._args[1]=B:B&&(this._args[2]=B),new can$m.Compute(this._args[0],this._args[1],this._args[2],this._args[3])},_on:can$m.k,_off:can$m.k,get:function(){var B=can$m.__isRecordingObserves();return B&&this._canObserve!==!1&&(can$m.__observe(this,"change"),this.bound||can$m.Compute.temporarilyBind(this)),this.bound?(B&&this.getDepth&&this.getDepth()>=B.getDepth()&&ObservedInfo$1.updateUntil(this.getPrimaryDepth(),this.getDepth()),this.value):this._get()},_get:function(){return this.value},set:function(B){var O=this.value,D=this._set(B,O);return this._setUpdates?this.value:this.hasDependencies?this._get():(D===void 0?this.value=this._get():this.value=D,updateOnChange(this,this.value,O),this.value)},_set:function(B){return this.value=B},updater:function(B,O,D){this.value=B,updateOnChange(this,B,O,D)},toFunction:function(){return can$m.proxy(this._computeFn,this)},_computeFn:function(B){return arguments.length?this.set(B):this.get()}});var updateOnChange=function(B,O,D,F){var q=O!==D&&!(O!==O&&D!==D);q&&can$m.batch.trigger(B,{type:"change",batchNum:F},[O,D])},setupComputeHandlers=function(B,O,D){var F=new ObservedInfo$1(O,D,B);return{readInfo:F,_on:function(){F.getValueAndBind(),B.value=F.value,B.hasDependencies=!can$m.isEmptyObject(F.newObserved)},_off:function(){F.teardown()},getDepth:function(){return F.getDepth()},getPrimaryDepth:function(){return F.getPrimaryDepth()}}};can$m.Compute.temporarilyBind=function(B){var O=B.computeInstance||B;O.bind("change",can$m.k),computes||(computes=[],setTimeout(unbindComputes,10)),computes.push(O)};var computes,unbindComputes=function(){for(var B=0,O=computes.length;B<O;B++)computes[B].unbind("change",can$m.k);computes=null};can$m.Compute.async=function(B,O,D){return new can$m.Compute(B,{fn:O,context:D})},can$m.Compute.truthy=function(B){return new can$m.Compute(function(){var O=B.get();return typeof O=="function"&&(O=O.get()),!!O})},can$m.Compute.read=read,can$m.Compute.set=read.write,can$m.Compute;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$l=util;can$l.compute=function(B,O,D,F){var q=new can$l.Compute(B,O,D,F),G=q.bind,U=q.unbind,Y=function(oe){return arguments.length?q.set(oe):q.get()},Q=can$l.cid(Y,"compute"),ne="__handler"+Q;return Y.bind=function(oe,ce){var fe=ce&&ce[ne];return ce&&!fe&&(fe=ce[ne]=function(){ce.apply(Y,arguments)}),G.call(q,oe,fe)},Y.unbind=function(oe,ce){var fe=ce&&ce[ne];return fe?(delete ce[ne],q.unbind(oe,fe)):U.apply(q,arguments)},Y.isComputed=q.isComputed,Y.clone=function(oe){return typeof B=="function"&&(O=oe),can$l.compute(B,O,oe,F)},Y.computeInstance=q,Y},can$l.compute.truthy=function(B){return can$l.compute(function(){var O=B();return typeof O=="function"&&(O=O()),!!O})},can$l.compute.async=function(B,O,D){return can$l.compute(B,{fn:O,context:D})},can$l.compute.read=can$l.Compute.read,can$l.compute.set=can$l.Compute.set,can$l.compute.temporarilyBind=can$l.Compute.temporarilyBind,can$l.compute;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$k=util,mapHelpers=map_helpers;if(!can$k.define){var define=can$k.define={},getPropDefineBehavior=function(B,O,D){var F,q;if(D){if(F=D[O],q=D["*"],F&&F[B]!==void 0)return F[B];if(q&&q[B]!==void 0)return q[B]}};mapHelpers.define=function(B,O){var D=B.prototype.define;if(O){var F=can$k.simpleExtend({},O);mapHelpers.twoLevelDeepExtend(F,D),can$k.simpleExtend(D,F)}B.defaultGenerators={};for(var q in D){var G=D[q].type;typeof G=="string"&&typeof define.types[G]=="object"&&(delete D[q].type,can$k.extend(D[q],define.types[G])),"value"in D[q]&&(typeof D[q].value=="function"?B.defaultGenerators[q]=D[q].value:B.defaults[q]=D[q].value),typeof D[q].Value=="function"&&function(U){B.defaultGenerators[q]=function(){return new U}}(D[q].Value)}};var oldSetupDefaults=can$k.Map.prototype._setupDefaults;can$k.Map.prototype._setupDefaults=function(B){var O=can$k.extend({},oldSetupDefaults.call(this)),D={},F=this.constructor,q=this._get;this._get=function(U){var Y=U.indexOf(".")!==-1?U.substr(0,U.indexOf(".")):U;return Y in O&&!(Y in D)&&(this.attr(Y,O[Y]),D[Y]=!0),q.apply(this,arguments)};for(var G in F.defaultGenerators)(!B||!(G in B))&&(O[G]=F.defaultGenerators[G].call(this));return delete this._get,O};var proto=can$k.Map.prototype,oldSet=proto.__set;proto.__set=function(B,O,D,F,q){var G=function(ce){var fe=q&&q.call(U,ce);return fe!==!1&&can$k.trigger(U,"error",[B,ce],!0),!1},U=this,Y=getPropDefineBehavior("set",B,this.define),Q=getPropDefineBehavior("get",B,this.define);if(Y){can$k.batch.start();var ne=!1,oe=Y.call(this,O,function(ce){Q?U[B](ce):oldSet.call(U,B,ce,D,F,G),ne=!0},G,Q?this._computedAttrs[B].compute.computeInstance.lastSetValue.get():D);if(Q){oe!==void 0&&!ne&&Y.length>=1&&this._computedAttrs[B].compute(oe),can$k.batch.stop();return}else if(oe===void 0&&!ne&&Y.length>=1){can$k.batch.stop();return}else return ne||oldSet.call(U,B,Y.length===0&&oe===void 0?O:oe,D,F,G),can$k.batch.stop(),this}else oldSet.call(U,B,O,D,F,G);return this},define.types={date:function(B){var O=typeof B;return O==="string"?(B=Date.parse(B),isNaN(B)?null:new Date(B)):O==="number"?new Date(B):B},number:function(B){return B==null?B:+B},boolean:function(B){return!(B==="false"||B==="0"||!B)},htmlbool:function(B){return typeof B=="string"||!!B},"*":function(B){return B},string:function(B){return B==null?B:""+B},compute:{set:function(B,O,D,F){return B&&B.isComputed?B:F&&F.isComputed?(F(B),F):B},get:function(B){return B&&B.isComputed?B():B}}};var oldType=proto.__type;proto.__type=function(B,O){var D=getPropDefineBehavior("type",O,this.define),F=getPropDefineBehavior("Type",O,this.define),q=B;return typeof D=="string"&&(D=define.types[D]),D||F?(D&&(q=D.call(this,q,O)),F&&!(q instanceof F)&&(q=new F(q)),q):(can$k.isPlainObject(q)&&q.define&&(q=can$k.Map.extend(q),q=new q),oldType.call(this,q,O))};var oldRemove=proto.__remove;proto.__remove=function(B,O){var D=getPropDefineBehavior("remove",B,this.define),F;if(D)if(can$k.batch.start(),F=D.call(this,O),F===!1){can$k.batch.stop();return}else return F=oldRemove.call(this,B,O),can$k.batch.stop(),F;return oldRemove.call(this,B,O)};var oldSetupComputes=proto._setupComputedProperties;proto._setupComputedProperties=function(){oldSetupComputes.apply(this,arguments);for(var B in this.define){var O=this.define[B],D=O.get;D&&mapHelpers.addComputedAttr(this,B,can$k.compute.async(void 0,D,this))}};var oldSingleSerialize=proto.___serialize;proto.___serialize=function(B,O){return serializeProp(this,B,O)};var serializeProp=function(B,O,D){var F=O==="*"?!1:getPropDefineBehavior("serialize",O,B.define);if(F===void 0)return oldSingleSerialize.call(B,O,D);if(F!==!1)return typeof F=="function"?F.call(B,D,O):oldSingleSerialize.call(B,O,D)},oldSerialize=proto.serialize;proto.serialize=function(B){var O=oldSerialize.apply(this,arguments);if(B)return O;var D,F;for(var q in this.define)q in O||(D=this.define&&this.define[q]&&this.define[q].serialize,D&&(F=serializeProp(this,q,this.attr(q)),F!==void 0&&(O[q]=F)));return O}}can$k.define;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$j=util,ObservedInfo=get_value_and_bind,isFastPath=function(B){return B.reads&&B.reads.length===1&&B.root instanceof can$j.Map&&!can$j.isFunction(B.root[B.reads[0].key])},scopeReader=function(B,O,D,F,q){if(arguments.length>4){var G=F.root||F.setRoot;if(G){if(G.isComputed)G(q);else if(F.reads.length){var U=F.reads.length-1,Y=F.reads.length?can$j.compute.read(G,F.reads.slice(0,U)).value:G;can$j.compute.set(Y,F.reads[U].key,q,D)}}}else{if(F.root)return can$j.compute.read(F.root,F.reads,D).value;var Q=B.read(O,D);return F.scope=Q.scope,F.initialValue=Q.value,F.reads=Q.reads,F.root=Q.rootObserve,F.setRoot=Q.setRoot,Q.value}},compute_data=function(B,O,D){D=D||{args:[]};var F={},q=function(Y){return arguments.length?scopeReader(B,O,D,F,Y):scopeReader(B,O,D,F)},G=can$j.compute(void 0,{on:function(){U.getValueAndBind(),isFastPath(F)&&(U.dependencyChange=function(Y,Q){return typeof Q!="function"?this.newVal=Q:(U.dependencyChange=ObservedInfo.prototype.dependencyChange,U.getValueAndBind=ObservedInfo.prototype.getValueAndBind),ObservedInfo.prototype.dependencyChange.call(this,Y)},U.getValueAndBind=function(){this.value=this.newVal}),G.computeInstance.value=U.value,G.computeInstance.hasDependencies=!can$j.isEmptyObject(U.newObserved)},off:function(){U.dependencyChange=ObservedInfo.prototype.dependencyChange,U.getValueAndBind=ObservedInfo.prototype.getValueAndBind,U.teardown()},set:q,get:q,__selfUpdater:!0}),U=new ObservedInfo(q,null,G.computeInstance);return F.compute=G,F};function commonjsRequire(B){throw new Error('Could not dynamically require "'+B+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$i=util,isFunction=can$i.isFunction,makeArray=can$i.makeArray,hookupId=1,makeRenderer=function(B){var O=function(){return $view.frag(B.apply(this,arguments))};return O.render=function(){return B.apply(B,arguments)},O},checkText=function(B,O){if(!B.length)throw new Error("can.view: No template or empty template:"+O)},getRenderer=function(B,O){if(isFunction(B)){var D=can$i.Deferred();return D.resolve(B)}var F=typeof B=="string"?B:B.url,q=B.engine&&"."+B.engine||F.match(/\.[\w\d]+$/),G,U,Y;if(F.match(/^#/)&&(F=F.substr(1)),(U=document.getElementById(F))&&(q="."+U.type.match(/\/(x\-)?(.+)/)[2]),!q&&!$view.cached[F]&&(F+=q=$view.ext),can$i.isArray(q)&&(q=q[0]),Y=$view.toId(F),F.match(/^\/\//)&&(F=F.substr(2),F=window.steal?steal.config().root.mapJoin(""+steal.id(F)):F),window.require&&commonjsRequire.toUrl&&(F=commonjsRequire.toUrl(F)),G=$view.types[q],$view.cached[Y])return $view.cached[Y];if(U)return $view.registerView(Y,U.innerHTML,G);var Q=new can$i.Deferred;return can$i.ajax({async:O,url:F,dataType:"text",error:function(ne){checkText("",F),Q.reject(ne)},success:function(ne){checkText(ne,F),$view.registerView(Y,ne,G,Q)}}),Q},getDeferreds=function(B){var O=[];if(can$i.isPromise(B))return[B];for(var D in B)can$i.isPromise(B[D])&&O.push(B[D]);return O},usefulPart=function(B){return can$i.isArray(B)&&B[1]==="success"?B[0]:B},$view=can$i.view=can$i.template=function(B,O,D,F){return isFunction(D)&&(F=D,D=void 0),$view.renderAs("fragment",B,O,D,F)};can$i.extend($view,{frag:function(B,O){return $view.hookup($view.fragment(B),O)},fragment:function(B){return can$i.frag(B,document)},toId:function(B){return can$i.map(B.toString().split(/\/|\./g),function(O){if(O)return O}).join("_")},toStr:function(B){return B==null?"":""+B},hookup:function(B,O){var D=[],F,q;return can$i.each(B.childNodes?can$i.makeArray(B.childNodes):B,function(G){G.nodeType===1&&(D.push(G),D.push.apply(D,can$i.makeArray(G.getElementsByTagName("*"))))}),can$i.each(D,function(G){G.getAttribute&&(F=G.getAttribute("data-view-id"))&&(q=$view.hookups[F])&&(q(G,O,F),delete $view.hookups[F],G.removeAttribute("data-view-id"))}),B},hookups:{},hook:function(B){return $view.hookups[++hookupId]=B," data-view-id='"+hookupId+"'"},cached:{},cachedRenderers:{},cache:!0,register:function(B){this.types["."+B.suffix]=B,can$i[B.suffix]=$view[B.suffix]=function(O,D){var F,q;if(!D)return q=function(){return F||(B.fragRenderer?F=B.fragRenderer(null,O):F=makeRenderer(B.renderer(null,O))),F.apply(this,arguments)},q.render=function(){var U=B.renderer(null,O);return U.apply(U,arguments)},q;var G=function(){return F||(B.fragRenderer?F=B.fragRenderer(O,D):F=B.renderer(O,D)),F.apply(this,arguments)};return B.fragRenderer?$view.preload(O,G):$view.preloadStringRenderer(O,G)}},types:{},ext:".ejs",registerScript:function(B,O,D){return"can.view.preloadStringRenderer('"+O+"',"+$view.types["."+B].script(O,D)+");"},preload:function(B,O){var D=$view.cached[B]=new can$i.Deferred().resolve(function(F,q){return O.call(F,F,q)});return D.__view_id=B,$view.cachedRenderers[B]=O,O},preloadStringRenderer:function(B,O){return this.preload(B,makeRenderer(O))},render:function(B,O,D,F,q){return can$i.view.renderAs("string",B,O,D,F,q)},renderTo:function(B,O,D,F,q){return(B==="string"&&O.render?O.render:O)(D,F,q)},renderAs:function(B,O,D,F,q,G){q!==void 0&&typeof q.expression=="string"&&(G=q,q=void 0),isFunction(F)&&(q=F,F=void 0);var U=getDeferreds(D),Y,Q,ne,oe;if(U.length)return Y=new can$i.Deferred,Q=can$i.extend({},D),U.push(getRenderer(O,!0)),can$i.when.apply(can$i,U).then(function(fe){var we=makeArray(arguments),X=we.pop(),ve;if(can$i.isPromise(D))Q=usefulPart(fe);else for(var de in D)can$i.isPromise(D[de])&&(Q[de]=usefulPart(we.shift()));ve=can$i.view.renderTo(B,X,Q,F,G),Y.resolve(ve,Q),q&&q(ve,Q)},function(){Y.reject.apply(Y,arguments)}),Y;if(ne=isFunction(q),Y=can$i.__notObserve(getRenderer)(O,ne),ne)oe=Y,Y.then(function(fe){q(D?can$i.view.renderTo(B,fe,D,F,G):fe)});else if(Y.state()==="resolved"&&Y.__view_id){var ce=$view.cachedRenderers[Y.__view_id];return D?can$i.view.renderTo(B,ce,D,F,G):ce}else Y.then(function(fe){oe=D?can$i.view.renderTo(B,fe,D,F,G):fe});return oe},registerView:function(B,O,D,F){var q=typeof D=="object"?D:$view.types[D||$view.ext],G;return q.fragRenderer?G=q.fragRenderer(B,O):G=makeRenderer(q.renderer(B,O)),F=F||new can$i.Deferred,$view.cache&&($view.cached[B]=F,F.__view_id=B,$view.cachedRenderers[B]=G),F.resolve(G)},simpleHelper:function(B){return function(){var O=[],D=arguments;return can$i.each(D,function(F,q){if(q<=D.length){for(;F&&F.isComputed;)F=F();O.push(F)}}),B.apply(this,O)}}});var view=can$i;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$h=util,makeComputeData=compute_data;function Scope(B,O,D){this._context=B,this._parent=O,this._meta=D||{},this.__cache={}}can$h.simpleExtend(Scope,{read:can$h.compute.read,Refs:can$h.Map.extend({shortName:"ReferenceMap"},{}),refsScope:function(){return new can$h.view.Scope(new this.Refs)}}),can$h.simpleExtend(Scope.prototype,{add:function(B,O){return B!==this._context?new this.constructor(B,this,O):this},read:function(B,O){if(B==="%root")return{value:this.getRoot()};var D=B.substr(0,2)==="./",F=B.substr(0,3)==="../",q=B==="."||B==="this",G=B==="..",U=D||F||q||G;if(U&&this._meta.notContext)return this._parent.read(B,O);var Y;if(D)Y=!0,B=B.substr(2);else if(F||G){for(var Q=this._parent;Q._meta.notContext;)Q=Q._parent;return G?{value:Q._context}:Q.read(B.substr(3)||".",O)}else if(q)return{value:this._context};var ne=can$h.compute.read.reads(B);return ne[0].key.charAt(0)==="*"?this.getRefs()._read(ne,O,!0):this._read(ne,O,Y)},_read:function(B,O,D){for(var F=this,q,G=[],U,Y,Q=-1,ne,oe,ce=can$h.simpleExtend({foundObservable:function(ve,de){U=ve,Y=B.slice(de)},earlyExit:function(ve,de){de>Q&&(oe=U,ne=Y,Q=de)}},O);F;){if(q=F._context,q!==null&&(typeof q=="object"||typeof q=="function")){var fe=can$h.__trapObserves(),we=can$h.compute.read(q,B,ce),X=fe();if(we.value!==void 0)return can$h.__observes(X),{scope:F,rootObserve:U,value:we.value,reads:Y};G.push.apply(G,X)}D?F=null:F=F._parent}return can$h.__observes(G),{setRoot:oe,reads:ne,value:void 0}},get:can$h.__notObserve(function(B,O){O=can$h.simpleExtend({isArgument:!0},O);var D=this.read(B,O);return D.value}),getScope:function(B){for(var O=this;O;){if(B(O))return O;O=O._parent}},getContext:function(B){var O=this.getScope(B);return O&&O._context},getRefs:function(){return this.getScope(function(B){return B._context instanceof Scope.Refs})},getRoot:function(){for(var B=this,O=this;B._parent;)O=B,B=B._parent;return B._context instanceof Scope.Refs&&(B=O),B._context},set:function(B,O,D){var F=B.lastIndexOf("."),q=B.lastIndexOf("/"),G,U;if(q>F?(G=B.substring(0,q),U=B.substring(q+1,B.length)):F!==-1?(G=B.substring(0,F),U=B.substring(F+1,B.length)):(G=".",U=B),B.charAt(0)==="*")can$h.compute.set(this.getRefs()._context,B,O,D);else{var Y=this.read(G,D).value;can$h.compute.set(Y,U,O,D)}},attr:can$h.__notObserve(function(B,O,D){return D=can$h.simpleExtend({isArgument:!0},D),arguments.length===2?this.set(B,O,D):this.get(B,D)}),computeData:function(B,O){return makeComputeData(this,B,O)},compute:function(B,O){return this.computeData(B,O).compute},cloneFromRef:function(){for(var B=[],O=this,D,F;O;){if(D=O._context,D instanceof Scope.Refs){F=O._parent;break}B.unshift(D),O=O._parent}return F?(can$h.each(B,function(q){F=F.add(q)}),F):this}}),can$h.view.Scope=Scope;function Options$1(B,O,D){!B.helpers&&!B.partials&&!B.tags&&(B={helpers:B}),Scope.call(this,B,O,D)}Options$1.prototype=new Scope,Options$1.prototype.constructor=Options$1,can$h.view.Options=Options$1;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$g=util,doc=typeof document<"u"?document:null,selectsCommentNodes=doc&&function(){return can$g.$(document.createComment("~")).length===1}(),elements$4={tagToContentPropMap:{option:doc&&"textContent"in document.createElement("option")?"textContent":"innerText",textarea:"value"},attrMap:can$g.attr.map,attrReg:/([^\s=]+)[\s]*=[\s]*/,defaultValue:can$g.attr.defaultValue,tagMap:{"":"span",colgroup:"col",table:"tbody",tr:"td",ol:"li",ul:"li",tbody:"tr",thead:"tr",tfoot:"tr",select:"option",optgroup:"option"},reverseTagMap:{col:"colgroup",tr:"tbody",option:"select",td:"tr",th:"tr",li:"ul"},selfClosingTags:{col:!0},getParentNode:function(B,O){return O&&B.parentNode.nodeType===11?O:B.parentNode},setAttr:can$g.attr.set,getAttr:can$g.attr.get,removeAttr:can$g.attr.remove,contentText:function(B){return typeof B=="string"?B:!B&&B!==0?"":""+B},after:function(B,O){var D=B[B.length-1];D.nextSibling?can$g.insertBefore(D.parentNode,O,D.nextSibling,can$g.document):can$g.appendChild(D.parentNode,O,can$g.document)},replace:function(B,O){var D,F=B[0].parentNode;F.nodeName.toUpperCase()==="SELECT"&&F.selectedIndex>=0&&(D=F.value),elements$4.after(B,O),can$g.remove(can$g.$(B)).length<B.length&&!selectsCommentNodes&&can$g.each(B,function(q){q.nodeType===8&&q.parentNode.removeChild(q)}),D!==void 0&&(F.value=D)}};can$g.view.elements=elements$4;var elements_1=elements$4;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$f=util,attr=can$f.view.attr=function(B,O){if(O)typeof B=="string"?attributes[B]=O:regExpAttributes.push({match:B,handler:O});else{var D=attributes[B];if(!D)for(var F=0,q=regExpAttributes.length;F<q;F++){var G=regExpAttributes[F];if(G.match.test(B)){D=G.handler;break}}return D}},attributes={},regExpAttributes=[],automaticCustomElementCharacters=/[-\:]/,tag=can$f.view.tag=function(B,O){if(O)can$f.global.html5&&(can$f.global.html5.elements+=" "+B,can$f.global.html5.shivDocument()),tags[B.toLowerCase()]=O;else{var D=tags[B.toLowerCase()];return!D&&automaticCustomElementCharacters.test(B)&&(D=function(){}),D}},tags={};can$f.view.callbacks={_tags:tags,_attributes:attributes,_regExpAttributes:regExpAttributes,tag,attr,tagHandler:function(B,O,D){var F=D.options.get("tags."+O,{proxyMethods:!1}),q=F||tags[O],G=D.scope,U;if(q?U=can$f.__notObserve(q)(B,D):U=G,U&&D.subtemplate){G!==U&&(G=G.add(U));var Y=D.subtemplate(G,D.options),Q=typeof Y=="string"?can$f.view.frag(Y):Y;can$f.appendChild(B,Q)}}};var callbacks=can$f.view.callbacks;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$e=view,elements$3=elements_1,viewCallbacks$1=callbacks,newLine$1=/(\r|\n)+/g,notEndTag=/\//,clean=function(B){return B.split("\\").join("\\\\").split(`
 `).join("\\n").split('"').join('\\"').split("	").join("\\t")},getTag=function(B,O,D){if(B)return B;for(;D<O.length;){if(O[D]==="<"&&!notEndTag.test(O[D+1]))return elements$3.reverseTagMap[O[D+1]]||"span";D++}return""},bracketNum=function(B){return--B.split("{").length- --B.split("}").length},myEval=function(script){eval(script)},attrReg=/([^\s]+)[\s]*=[\s]*$/,startTxt="var ___v1ew = [];",finishTxt="return ___v1ew.join('')",put_cmd=`___v1ew.push(
 `,insert_cmd=put_cmd,htmlTag=null,quote=null,beforeQuote=null,rescan=null,getAttrName=function(){var B=beforeQuote.match(attrReg);return B&&B[1]},status=function(){return quote?"'"+getAttrName()+"'":htmlTag?1:0},top=function(B){return B[B.length-1]},Scanner;can$e.view.Scanner=Scanner=function(B){can$e.extend(this,{text:{},tokens:[]},B),this.text.options=this.text.options||"",this.tokenReg=[],this.tokenSimple={"<":"<",">":">",'"':'"',"'":"'"},this.tokenComplex=[],this.tokenMap={};for(var O=0,D;D=this.tokens[O];O++)D[2]?(this.tokenReg.push(D[2]),this.tokenComplex.push({abbr:D[1],re:new RegExp(D[2]),rescan:D[3]})):(this.tokenReg.push(D[1]),this.tokenSimple[D[1]]=D[0]),this.tokenMap[D[0]]=D[1];this.tokenReg=new RegExp("("+this.tokenReg.slice(0).concat(["<",">",'"',"'"]).join("|")+")","g")},Scanner.prototype={helpers:[],scan:function(B,O){var D=[],F=0,q=this.tokenSimple,G=this.tokenComplex;B=B.replace(newLine$1,`
 `),this.transform&&(B=this.transform(B)),B.replace(this.tokenReg,function(ht,st){var ft=arguments[arguments.length-2];if(ft>F&&D.push(B.substring(F,ft)),q[ht])D.push(ht);else for(var bt=0,Me;Me=G[bt];bt++)if(Me.re.test(ht)){D.push(Me.abbr),Me.rescan&&D.push(Me.rescan(st));break}F=ft+st.length}),F<B.length&&D.push(B.substr(F));var U="",Y=[startTxt+(this.text.start||"")],Q=function(ht,st){Y.push(put_cmd,'"',clean(ht),'"'+(st||"")+");")},ne=[],oe,ce=null,fe=!1,we={attributeHookups:[],tagHookups:[],lastTagHookup:""},X=function(){we.lastTagHookup=we.tagHookups.pop()+we.tagHookups.length},ve="",de=[],Ae=!1,Se,Pe=!1,ke=0,ye,be=this.tokenMap,Te;for(htmlTag=quote=beforeQuote=null;(ye=D[ke++])!==void 0;){if(ce===null)switch(ye){case be.left:case be.escapeLeft:case be.returnLeft:fe=htmlTag&&1;case be.commentLeft:ce=ye,U.length&&Q(U),U="";break;case be.escapeFull:fe=htmlTag&&1,rescan=1,ce=be.escapeLeft,U.length&&Q(U),rescan=D[ke++],U=rescan.content||rescan,rescan.before&&Q(rescan.before),D.splice(ke,0,be.right);break;case be.commentFull:break;case be.templateLeft:U+=be.left;break;case"<":D[ke].indexOf("!--")!==0&&(htmlTag=1,fe=0),U+=ye;break;case">":htmlTag=0;var Ie=U.substr(U.length-1)==="/"||U.substr(U.length-2)==="--",je="";if(we.attributeHookups.length&&(je="attrs: ['"+we.attributeHookups.join("','")+"'], ",we.attributeHookups=[]),ve+we.tagHookups.length!==we.lastTagHookup&&ve===top(we.tagHookups))Ie&&(U=U.substr(0,U.length-1)),Y.push(put_cmd,'"',clean(U),'"',",can.view.pending({tagName:'"+ve+"',"+je+"scope: "+(this.text.scope||"this")+this.text.options),Ie?(Y.push("}));"),U="/>",X()):D[ke]==="<"&&D[ke+1]==="/"+ve?(Y.push("}));"),U=ye,X()):(Y.push(",subtemplate: function("+this.text.argNames+`){
 `+startTxt+(this.text.start||"")),U="");else if(fe||!Ae&&elements$3.tagToContentPropMap[de[de.length-1]]||je){var Be=",can.view.pending({"+je+"scope: "+(this.text.scope||"this")+this.text.options+'}),"';Ie?Q(U.substr(0,U.length-1),Be+'/>"'):Q(U,Be+'>"'),U="",fe=0}else U+=ye;(Ie||Ae)&&(de.pop(),ve=de[de.length-1],Ae=!1),we.attributeHookups=[];break;case"'":case'"':if(htmlTag){if(quote&&quote===ye){quote=null;var We=getAttrName();if(viewCallbacks$1.attr(We)&&we.attributeHookups.push(We),Pe){U+=ye,Q(U),Y.push(finishTxt,`}));
 `),U="",Pe=!1;break}}else if(quote===null&&(quote=ye,beforeQuote=oe,Te=getAttrName(),ve==="img"&&Te==="src"||Te==="style")){Q(U.replace(attrReg,"")),U="",Pe=!0,Y.push(insert_cmd,"can.view.txt(2,'"+getTag(ve,D,ke)+"',"+status()+",this,function(){",startTxt),Q(Te+"="+ye);break}}default:if(oe==="<"){ve=ye.substr(0,3)==="!--"?"!--":ye.split(/\s/)[0];var et=!1,Xe;ve.indexOf("/")===0&&(et=!0,Xe=ve.substr(1)),et?(top(de)===Xe&&(ve=Xe,Ae=!0),top(we.tagHookups)===Xe&&(Q(U.substr(0,U.length-1)),Y.push(finishTxt+"}}) );"),U="><",X())):(ve.lastIndexOf("/")===ve.length-1&&(ve=ve.substr(0,ve.length-1)),ve!=="!--"&&viewCallbacks$1.tag(ve)&&(ve==="content"&&elements$3.tagMap[top(de)]&&(ye=ye.replace("content",elements$3.tagMap[top(de)])),we.tagHookups.push(ve)),de.push(ve))}U+=ye;break}else switch(ye){case be.right:case be.returnRight:switch(ce){case be.left:Se=bracketNum(U),Se===1?(Y.push(insert_cmd,"can.view.txt(0,'"+getTag(ve,D,ke)+"',"+status()+",this,function(){",startTxt,U),ne.push({before:"",after:finishTxt+`}));
 `})):(F=ne.length&&Se===-1?ne.pop():{after:";"},F.before&&Y.push(F.before),Y.push(U,";",F.after));break;case be.escapeLeft:case be.returnLeft:Se=bracketNum(U),Se&&ne.push({before:finishTxt,after:`}));
 `});for(var Ke=ce===be.escapeLeft?1:0,ot={insert:insert_cmd,tagName:getTag(ve,D,ke),status:status(),specialAttribute:Pe},Je=0;Je<this.helpers.length;Je++){var Ze=this.helpers[Je];if(Ze.name.test(U)){U=Ze.fn(U,ot),Ze.name.source===/^>[\s]*\w*/.source&&(Ke=0);break}}typeof U=="object"?U.startTxt&&U.end&&Pe?Y.push(insert_cmd,"can.view.toStr( ",U.content,"() ) );"):(U.startTxt?Y.push(insert_cmd,`can.view.txt(
 `+(typeof status()=="string"||(U.escaped!=null?U.escaped:Ke))+`,
 '`+ve+`',
 `+status()+`,
 this,
 `):U.startOnlyTxt&&Y.push(insert_cmd,`can.view.onlytxt(this,
 `),Y.push(U.content),U.end&&Y.push("));")):Pe?Y.push(insert_cmd,U,");"):Y.push(insert_cmd,`can.view.txt(
 `+(typeof status()=="string"||Ke)+`,
 '`+ve+`',
 `+status()+`,
 this,
 function(){ `+(this.text.escape||"")+"return ",U,Se?startTxt:`}));
 `),rescan&&rescan.after&&rescan.after.length&&(Q(rescan.after.length),rescan=null);break}ce=null,U="";break;case be.templateLeft:U+=be.left;break;default:U+=ye;break}oe=ye}U.length&&Q(U),Y.push(";");var vt=Y.join(""),lt={out:(this.text.outStart||"")+vt+" "+finishTxt+(this.text.outEnd||"")};return myEval.call(lt,"this.fn = (function("+this.text.argNames+"){"+lt.out+`});\r
 //# sourceURL=`+O+".js"),lt}},can$e.view.pending=function(B){var O=can$e.view.getHooks();return can$e.view.hook(function(D){can$e.each(O,function(F){F(D)}),B.templateType="legacy",B.tagName&&viewCallbacks$1.tagHandler(D,B.tagName,B),can$e.each(B&&B.attrs||[],function(F){B.attributeName=F;var q=viewCallbacks$1.attr(F);q&&q(D,B)})})},can$e.view.tag("content",function(B,O){return O.scope}),can$e.view.Scanner=Scanner;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$d=util,canExpando=!0;try{document.createTextNode("")._=0}catch(B){canExpando=!1}var nodeMap={},textNodeMap={},expando="ejs_"+Math.random(),_id=0,id=function(B,O){var D=O||textNodeMap,F=readId(B,D);return F||(canExpando||B.nodeType!==3?(++_id,B[expando]=(B.nodeName?"element_":"obj_")+_id):(++_id,D["text_"+_id]=B,"text_"+_id))},readId=function(B,O){if(canExpando||B.nodeType!==3)return B[expando];for(var D in O)if(O[D]===B)return D},splice$1=[].splice,push=[].push,itemsInChildListTree=function(B){for(var O=0,D=0,F=B.length;D<F;D++){var q=B[D];q.nodeType?O++:O+=itemsInChildListTree(q)}return O},replacementMap=function(B,O){for(var D={},F=0,q=B.length;F<q;F++){var G=nodeLists$1.first(B[F]);D[id(G,O)]=B[F]}return D},addUnfoundAsDeepChildren=function(B,O,D){for(var F in O)D[F]||B.newDeepChildren.push(O[F])},nodeLists$1={id,update:function(B,O){var D=nodeLists$1.unregisterChildren(B);O=can$d.makeArray(O);var F=B.length;return splice$1.apply(B,[0,F].concat(O)),B.replacements?(nodeLists$1.nestReplacements(B),B.deepChildren=B.newDeepChildren,B.newDeepChildren=[]):nodeLists$1.nestList(B),D},nestReplacements:function(B){for(var O=0,D={},F=replacementMap(B.replacements,D),q=B.replacements.length,G={};O<B.length&&q;){var U=B[O],Y=readId(U,D),Q=F[Y];Q&&(B.splice(O,itemsInChildListTree(Q),Q),G[Y]=!0,q--),O++}q&&addUnfoundAsDeepChildren(B,F,G),B.replacements=[]},nestList:function(B){for(var O=0;O<B.length;){var D=B[O],F=nodeMap[id(D)];F?F!==B&&B.splice(O,itemsInChildListTree(F),F):nodeMap[id(D)]=B,O++}},last:function(B){var O=B[B.length-1];return O.nodeType?O:nodeLists$1.last(O)},first:function(B){var O=B[0];return O.nodeType?O:nodeLists$1.first(O)},flatten:function(B){for(var O=[],D=0;D<B.length;D++){var F=B[D];F.nodeType?O.push(F):O.push.apply(O,nodeLists$1.flatten(F))}return O},register:function(B,O,D,F){return can$d.cid(B),B.unregistered=O,B.parentList=D,B.nesting=D&&typeof D.nesting<"u"?D.nesting+1:0,D?(B.deepChildren=[],B.newDeepChildren=[],B.replacements=[],D!==!0&&(F?D.replacements.push(B):D.newDeepChildren.push(B))):nodeLists$1.nestList(B),B},unregisterChildren:function(B){var O=[];return can$d.each(B,function(D){D.nodeType?(B.replacements||delete nodeMap[id(D)],O.push(D)):push.apply(O,nodeLists$1.unregister(D,!0))}),can$d.each(B.deepChildren,function(D){nodeLists$1.unregister(D,!0)}),O},unregister:function(B,O){var D=nodeLists$1.unregisterChildren(B,!0);if(B.unregistered){var F=B.unregistered;if(B.replacements=B.unregistered=null,!O){var q=B.parentList&&B.parentList.deepChildren;if(q){var G=q.indexOf(B);G!==-1&&q.splice(G,1)}}F()}return D},nodeMap};can$d.view.nodeLists=nodeLists$1;var node_lists=nodeLists$1;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */function each(B,O){for(var D=0;D<B.length;D++)O(B[D],D)}function makeMap(B){var O={},D=B.split(",");return each(D,function(F){O[F]=!0}),O}function handleIntermediate(B,O){for(var D=0,F=B.length;D<F;D++){var q=B[D];O[q.tokenType].apply(O,q.args)}return B}var alphaNumeric="A-Za-z0-9",alphaNumericHU="-:_"+alphaNumeric,attributeNames="[^=>\\s\\/]+",spaceEQspace="\\s*=\\s*",singleCurly="\\{[^\\}\\{]\\}",doubleCurly="\\{\\{[^\\}]\\}\\}\\}?",attributeEqAndValue="(?:"+spaceEQspace+"(?:(?:"+doubleCurly+")|(?:"+singleCurly+`)|(?:"[^"]*")|(?:'[^']*')|[^>\\s]+))?`,matchStash="\\{\\{[^\\}]*\\}\\}\\}?",stash="\\{\\{([^\\}]*)\\}\\}\\}?",startTag=new RegExp("^<(["+alphaNumeric+"]["+alphaNumericHU+"]*)((?:\\s*(?:(?:(?:"+attributeNames+")?"+attributeEqAndValue+")|(?:"+matchStash+")+))*)\\s*(\\/?)>"),endTag=new RegExp("^<\\/(["+alphaNumericHU+"]+)[^>]*>"),mustache=new RegExp(stash,"g"),txtBreak=/<|\{\{/,space=/\s/,empty=makeMap("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed"),block=makeMap("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),inline=makeMap("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),caseMatters=makeMap("altGlyph,altGlyphDef,altGlyphItem,animateColor,animateMotion,animateTransform,clipPath,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,foreignObject,glyphRef,linearGradient,radialGradient,textPath"),closeSelf=makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),special$1=makeMap("script"),tokenTypes="start,end,close,attrStart,attrEnd,attrValue,chars,comment,special,done".split(","),fn=function(){},HTMLParser=function(B,O,D){if(typeof B=="object")return handleIntermediate(B,O);var F=[];O=O||{},D&&each(tokenTypes,function(ve){var de=O[ve]||fn;O[ve]=function(){de.apply(this,arguments)!==!1&&F.push({tokenType:ve,args:[].slice.call(arguments,0)})}});function q(ve,de,Ae,Se){if(de=caseMatters[de]?de:de.toLowerCase(),block[de]&&!inline[de])for(var Pe=ce.last();Pe&&inline[Pe]&&!block[Pe];)G("",Pe),Pe=ce.last();closeSelf[de]&&ce.last()===de&&G("",de),Se=empty[de]||!!Se,O.start(de,Se),Se||ce.push(de),HTMLParser.parseAttrs(Ae,O),O.end(de,Se)}function G(ve,de){var Ae;if(!de)Ae=0;else for(de=caseMatters[de]?de:de.toLowerCase(),Ae=ce.length-1;Ae>=0&&ce[Ae]!==de;Ae--);if(Ae>=0){for(var Se=ce.length-1;Se>=Ae;Se--)O.close&&O.close(ce[Se]);ce.length=Ae}}function U(ve,de){O.special&&O.special(de)}var Y=function(){we&&O.chars&&O.chars(we),we=""},Q,ne,oe,ce=[],fe=B,we="";for(ce.last=function(){return this[this.length-1]};B;){if(ne=!0,!ce.last()||!special$1[ce.last()]){if(B.indexOf("<!--")===0?(Q=B.indexOf("-->"),Q>=0&&(Y(),O.comment&&O.comment(B.substring(4,Q)),B=B.substring(Q+3),ne=!1)):B.indexOf("</")===0?(oe=B.match(endTag),oe&&(Y(),B=B.substring(oe[0].length),oe[0].replace(endTag,G),ne=!1)):B.indexOf("<")===0?(oe=B.match(startTag),oe&&(Y(),B=B.substring(oe[0].length),oe[0].replace(startTag,q),ne=!1)):B.indexOf("{{")===0&&(oe=B.match(mustache),oe&&(Y(),B=B.substring(oe[0].length),oe[0].replace(mustache,U))),ne){Q=B.search(txtBreak),Q===0&&B===fe&&(we+=B.charAt(0),B=B.substr(1),Q=B.search(txtBreak));var X=Q<0?B:B.substring(0,Q);B=Q<0?"":B.substring(Q),X&&(we+=X)}}else B=B.replace(new RegExp("([\\s\\S]*?)</"+ce.last()+"[^>]*>"),function(ve,de){return de=de.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),O.chars&&O.chars(de),""}),G("",ce.last());if(B===fe)throw new Error("Parse Error: "+B);fe=B}return Y(),G(),O.done(),F},callAttrStart=function(B,O,D,F){B.attrStart=F.substring(typeof B.nameStart=="number"?B.nameStart:O,O),D.attrStart(B.attrStart),B.inName=!1},callAttrEnd=function(B,O,D,F){B.valueStart!==void 0&&B.valueStart<O&&D.attrValue(F.substring(B.valueStart,O)),D.attrEnd(B.attrStart),B.attrStart=void 0,B.valueStart=void 0,B.inValue=!1,B.inName=!1,B.lookingForEq=!1,B.inQuote=!1,B.lookingForName=!0};HTMLParser.parseAttrs=function(B,O){if(B){for(var D=0,F,q={inDoubleCurly:!1,inName:!1,nameStart:void 0,inValue:!1,valueStart:void 0,inQuote:!1,attrStart:void 0,lookingForName:!0,lookingForValue:!1,lookingForEq:!1};D<B.length;){F=D;var G=B.charAt(D),U=B.charAt(D+1),Y=B.charAt(D+2);if(D++,G==="{"&&U==="{")q.inValue&&F>q.valueStart?O.attrValue(B.substring(q.valueStart,F)):q.inName&&q.nameStart<F?(callAttrStart(q,F,O,B),callAttrEnd(q,F,O,B)):q.lookingForValue?q.inValue=!0:q.lookingForEq&&q.attrStart&&callAttrEnd(q,F,O,B),q.inDoubleCurly=!0,q.doubleCurlyStart=F+2,D++;else if(q.inDoubleCurly){if(G==="}"&&U==="}"){var Q=Y==="}"?1:0;O.special(B.substring(q.doubleCurlyStart,F)),q.inDoubleCurly=!1,q.inValue&&(q.valueStart=F+2+Q),D+=1+Q}}else q.inValue?q.inQuote?G===q.inQuote&&callAttrEnd(q,F,O,B):space.test(G)&&callAttrEnd(q,F,O,B):G==="="&&(q.lookingForEq||q.lookingForName||q.inName)?(q.attrStart||callAttrStart(q,F,O,B),q.lookingForValue=!0,q.lookingForEq=!1,q.lookingForName=!1):q.inName?space.test(G)&&(callAttrStart(q,F,O,B),q.lookingForEq=!0):q.lookingForName?space.test(G)||(q.attrStart&&callAttrEnd(q,F,O,B),q.nameStart=F,q.inName=!0):q.lookingForValue&&(space.test(G)||(q.lookingForValue=!1,q.inValue=!0,G==="'"||G==='"'?(q.inQuote=G,q.valueStart=F+1):q.valueStart=F))}q.inName?(callAttrStart(q,F+1,O,B),callAttrEnd(q,F+1,O,B)):(q.lookingForEq||q.inValue)&&callAttrEnd(q,F+1,O,B)}};var parser$1=HTMLParser;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var slice=[].slice,diff$1=function(B,O){for(var D=0,F=0,q=B.length,G=O.length,U=[];D<q&&F<G;){var Y=B[D],Q=O[F];if(Y===Q){D++,F++;continue}if(F+1<G&&O[F+1]===Y){U.push({index:F,deleteCount:0,insert:[O[F]]}),D++,F+=2;continue}else if(D+1<q&&B[D+1]===Q){U.push({index:F,deleteCount:1,insert:[]}),D+=2,F++;continue}else return U.push({index:F,deleteCount:q-D,insert:slice.call(O,F)}),U}return F===G&&D===q||U.push({index:F,deleteCount:q-D,insert:slice.call(O,F)}),U};/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$c=util,elements$2=elements_1,nodeLists=node_lists,parser=parser$1,diff=diff$1;elements$2=elements$2||can$c.view.elements,nodeLists=nodeLists||can$c.view.NodeLists,parser=parser||can$c.view.parser;var setup=function(B,O,D){var F=!1,q=function(){return F||(F=!0,D(G),can$c.unbind.call(B,"removed",q)),!0},G={teardownCheck:function(U){return U?!1:q()}};return can$c.bind.call(B,"removed",q),O(G),G},getChildNodes=function(B){var O=B.childNodes;if("length"in O)return O;for(var D=B.firstChild,F=[];D;)F.push(D),D=D.nextSibling;return F},listen=function(B,O,D){return setup(B,function(){O.computeInstance.bind("change",D)},function(F){O.computeInstance.unbind("change",D),F.nodeList&&nodeLists.unregister(F.nodeList)})},getAttributeParts=function(B){var O={},D;return parser.parseAttrs(B,{attrStart:function(F){O[F]="",D=F},attrValue:function(F){O[D]+=F},attrEnd:function(){}}),O},splice=[].splice,isNode=function(B){return B&&B.nodeType},addTextNodeIfNoChildren=function(B){B.firstChild||B.appendChild(B.ownerDocument.createTextNode(""))},getLiveFragment=function(B){var O=typeof B=="string",D=can$c.frag(B);return O?can$c.view.hookup(D):D},renderAndAddToNodeLists=function(B,O,D,F,q){var G=[];O&&(nodeLists.register(G,null,!0,!0),G.parentList=O,G.expression="#each SUBEXPRESSION");var U=D.apply(F,q.concat([G])),Y=getLiveFragment(U),Q=can$c.makeArray(getChildNodes(Y));return O?(nodeLists.update(G,Q),B.push(G)):B.push(nodeLists.register(Q)),Y},removeFromNodeList=function(B,O,D){var F=B.splice(O+1,D),q=[];return can$c.each(F,function(G){var U=nodeLists.unregister(G);[].push.apply(q,U)}),q},addFalseyIfEmpty=function(B,O,D,F){if(O&&B.length===0){var q=[],G=renderAndAddToNodeLists(q,F,O,B,[B]);elements$2.after([D[0]],G),D.push(q[0])}},childMutationCallbacks={},live$3={registerChildMutationCallback:function(B,O){if(O)childMutationCallbacks[B]=O;else return childMutationCallbacks[B]},callChildMutationCallback:function(B){var O=B&&childMutationCallbacks[B.nodeName.toLowerCase()];O&&O(B)},list:function(B,O,D,F,q,G,U){var Y=G||[B],Q=[],ne=!1,oe=!1,ce=function(ke,ye,be){if(ne){var Te=ve.ownerDocument.createDocumentFragment(),Ie=[],je=[];can$c.each(ye,function(ot,Je){var Ze=can$c.compute(Je+be),vt=renderAndAddToNodeLists(Ie,G,D,F,[ot,Ze]);Te.appendChild(vt),je.push(Ze)});var Be=be+1;if(!Q.length){var We=removeFromNodeList(Y,0,Y.length-1);can$c.remove(can$c.$(We))}if(!Y[Be])elements$2.after(Be===1?[ve]:[nodeLists.last(Y[Be-1])],Te);else{var et=nodeLists.first(Y[Be]);can$c.insertBefore(et.parentNode,Te,et)}splice.apply(Y,[Be,0].concat(Ie)),splice.apply(Q,[be,0].concat(je));for(var Xe=be+je.length,Ke=Q.length;Xe<Ke;Xe++)Q[Xe](Xe);ke.callChildMutationCallback!==!1&&live$3.callChildMutationCallback(ve.parentNode)}},fe=function(ke,ye,be){we({},{length:1},be,!0),ce({},[ye],be)},we=function(ke,ye,be,Te,Ie){if(ne&&!(!Te&&Pe.teardownCheck(ve.parentNode))){be<0&&(be=Q.length+be);var je=removeFromNodeList(Y,be,ye.length);Q.splice(be,ye.length);for(var Be=be,We=Q.length;Be<We;Be++)Q[Be](Be);Ie?nodeLists.unregister(Y):(addFalseyIfEmpty(de,U,Y,G),can$c.remove(can$c.$(je)),ke.callChildMutationCallback!==!1&&live$3.callChildMutationCallback(ve.parentNode))}},X=function(ke,ye,be,Te){if(ne){be=be+1,Te=Te+1;var Ie=Y[be],je=can$c.frag(nodeLists.flatten(Y[Te])),Be;Te<be?Be=nodeLists.last(Ie).nextSibling:Be=nodeLists.first(Ie);var We=Y[0].parentNode;We.insertBefore(je,Be);var et=Y[Te];[].splice.apply(Y,[Te,1]),[].splice.apply(Y,[be,0,et]),be=be-1,Te=Te-1;var Xe=Q[Te];[].splice.apply(Q,[Te,1]),[].splice.apply(Q,[be,0,Xe]);var Ke=Math.min(Te,be),ot=Q.length;for(ot;Ke<ot;Ke++)Q[Ke](Ke);ke.callChildMutationCallback!==!1&&live$3.callChildMutationCallback(ve.parentNode)}},ve=B.ownerDocument.createTextNode(""),de,Ae=function(ke){de&&de.unbind&&de.unbind("add",ce).unbind("set",fe).unbind("remove",we).unbind("move",X),we({callChildMutationCallback:!!ke},{length:Y.length-1},0,!0,ke)},Se=function(ke,ye,be){if(!oe){if(ne=!0,ye&&be){de=ye||[];var Te=diff(be,ye);be.unbind&&be.unbind("add",ce).unbind("set",fe).unbind("remove",we).unbind("move",X);for(var Ie=0,je=Te.length;Ie<je;Ie++){var Be=Te[Ie];Be.deleteCount&&we({callChildMutationCallback:!1},{length:Be.deleteCount},Be.index,!0),Be.insert.length&&ce({callChildMutationCallback:!1},Be.insert,Be.index)}}else be&&Ae(),de=ye||[],ce({callChildMutationCallback:!1},de,0),addFalseyIfEmpty(de,U,Y,G);live$3.callChildMutationCallback(ve.parentNode),ne=!1,de.bind&&de.bind("add",ce).bind("set",fe).bind("remove",we).bind("move",X),can$c.batch.afterPreviousEvents(function(){ne=!0})}};q=elements$2.getParentNode(B,q);var Pe=setup(q,function(){can$c.isFunction(O)&&O.bind("change",Se)},function(){can$c.isFunction(O)&&O.unbind("change",Se),Ae(!0)});G?(elements$2.replace(Y,ve),nodeLists.update(Y,[ve]),G.unregistered=function(){Pe.teardownCheck(),oe=!0}):live$3.replace(Y,ve,Pe.teardownCheck),Se({},can$c.isFunction(O)?O():O)},html:function(B,O,D,F){var q;D=elements$2.getParentNode(B,D),q=listen(D,O,function(Y,Q,ne){var oe=nodeLists.first(G).parentNode;oe&&U(Q);var ce=nodeLists.first(G).parentNode;q.teardownCheck(ce),live$3.callChildMutationCallback(ce)});var G=F||[B],U=function(Y){var Q=typeof Y=="function",ne=isNode(Y),oe=can$c.frag(Q?"":Y),ce=can$c.makeArray(G);addTextNodeIfNoChildren(oe),!ne&&!Q&&(oe=can$c.view.hookup(oe,D)),ce=nodeLists.update(G,getChildNodes(oe)),Q&&Y(oe.firstChild),elements$2.replace(ce,oe)};q.nodeList=G,F?F.unregistered=q.teardownCheck:nodeLists.register(G,q.teardownCheck),U(O())},replace:function(B,O,D){var F=B.slice(0),q=can$c.frag(O);return nodeLists.register(B,D),typeof O=="string"&&(q=can$c.view.hookup(q,B[0].parentNode)),nodeLists.update(B,getChildNodes(q)),elements$2.replace(F,q),B},text:function(B,O,D,F){var q=elements$2.getParentNode(B,D),G=listen(q,O,function(Y,Q,ne){typeof U.nodeValue!="unknown"&&(U.nodeValue=can$c.view.toStr(Q)),G.teardownCheck(U.parentNode)}),U=B.ownerDocument.createTextNode(can$c.view.toStr(O()));F?(F.unregistered=G.teardownCheck,G.nodeList=F,nodeLists.update(F,[U]),elements$2.replace([B],U)):G.nodeList=live$3.replace([B],U,G.teardownCheck)},setAttributes:function(B,O){var D=getAttributeParts(O);for(var F in D)can$c.attr.set(B,F,D[F])},attributes:function(B,O,D){var F={},q=function(G){var U=getAttributeParts(G),Y;for(Y in U){var Q=U[Y],ne=F[Y];Q!==ne&&can$c.attr.set(B,Y,Q),delete F[Y]}for(Y in F)elements$2.removeAttr(B,Y);F=U};listen(B,O,function(G,U){q(U)}),arguments.length>=3?F=getAttributeParts(D):q(O())},attributePlaceholder:"__!!__",attributeReplace:/__!!__/g,attribute:function(B,O,D){listen(B,D,function(ne,oe){elements$2.setAttr(B,O,Q.render())});var F=can$c.$(B),q;q=can$c.data(F,"hooks"),q||can$c.data(F,"hooks",q={});var G=String(elements$2.getAttr(B,O)),U=G.split(live$3.attributePlaceholder),Y=[],Q;Y.push(U.shift(),U.join(live$3.attributePlaceholder)),q[O]?q[O].computes.push(D):q[O]={render:function(){var ne=0,oe=G?G.replace(live$3.attributeReplace,function(){return elements$2.contentText(Q.computes[ne++]())}):elements$2.contentText(Q.computes[ne++]());return oe},computes:[D],batchNum:void 0},Q=q[O],Y.splice(1,0,D()),elements$2.setAttr(B,O,Y.join(""))},specialAttribute:function(B,O,D){listen(B,D,function(F,q){elements$2.setAttr(B,O,getValue$1(q))}),elements$2.setAttr(B,O,getValue$1(D()))},simpleAttribute:function(B,O,D){listen(B,D,function(F,q){elements$2.setAttr(B,O,q)}),elements$2.setAttr(B,O,D())}};live$3.attr=live$3.simpleAttribute,live$3.attrs=live$3.attributes,live$3.getAttributeParts=getAttributeParts;var newLine=/(\r|\n)+/g,getValue$1=function(B){var O=/^["'].*["']$/;return B=B.replace(elements$2.attrReg,"").replace(newLine,""),O.test(B)?B.substr(1,B.length-2):B};can$c.view.live=live$3;var live_1=live$3;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$b=view,elements$1=elements_1,live$2=live_1,pendingHookups=[],tagChildren=function(B){var O=elements$1.tagMap[B]||"span";return O==="span"?"@@!!@@":"<"+O+">"+tagChildren(O)+"</"+O+">"},contentText=function(B,O){if(typeof B=="string")return B;if(!B&&B!==0)return"";var D=B.hookup&&function(F,q){B.hookup.call(B,F,q)}||typeof B=="function"&&B;return D?O?"<"+O+" "+can$b.view.hook(D)+"></"+O+">":(pendingHookups.push(D),""):""+B},contentEscape=function(B,O){return typeof B=="string"||typeof B=="number"?can$b.esc(B):contentText(B,O)},withinTemplatedSectionWithinAnElement=!1,emptyHandler=function(){},lastHookups;can$b.extend(can$b.view,{live:live$2,setupLists:function(){var B=can$b.view.lists,O;return can$b.view.lists=function(D,F){return O={list:D,renderer:F},Math.random()},function(){return can$b.view.lists=B,O}},getHooks:function(){var B=pendingHookups.slice(0);return lastHookups=B,pendingHookups=[],B},onlytxt:function(B,O){return contentEscape(O.call(B))},txt:function(B,O,D,F,q){var G=elements$1.tagMap[O]||"span",U=!1,Y,Q,ne,oe=emptyHandler,ce;if(withinTemplatedSectionWithinAnElement)Y=q.call(F);else{(typeof D=="string"||D===1)&&(withinTemplatedSectionWithinAnElement=!0);var fe=can$b.view.setupLists();oe=function(){ne.unbind("change",emptyHandler)},ne=can$b.compute(q,F,!1),ne.bind("change",emptyHandler),Q=fe(),Y=ne(),withinTemplatedSectionWithinAnElement=!1,U=ne.computeInstance.hasDependencies}if(Q)return oe(),"<"+G+can$b.view.hook(function(ve,de){live$2.list(ve,Q.list,Q.renderer,F,de)})+"></"+G+">";if(!U||typeof Y=="function")return oe(),(withinTemplatedSectionWithinAnElement||B===2||!B?contentText:contentEscape)(Y,D===0&&G);var we=elements$1.tagToContentPropMap[O];if(D===0&&!we){var X=!!elements$1.selfClosingTags[G];return"<"+G+can$b.view.hook(B&&typeof Y!="object"?function(ve,de){live$2.text(ve,ne,de),oe()}:function(ve,de){live$2.html(ve,ne,de),oe()})+(X?"/>":">"+tagChildren(G)+"</"+G+">")}else return D===1?(pendingHookups.push(function(ve){live$2.attributes(ve,ne,ne()),oe()}),ne()):B===2?(ce=D,pendingHookups.push(function(ve){live$2.specialAttribute(ve,ce,ne),oe()}),ne()):(ce=D===0?we:D,(D===0?lastHookups:pendingHookups).push(function(ve){live$2.attribute(ve,ce,ne),oe()}),live$2.attributePlaceholder)}});/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$a=util,Options=can$a.view.Options,utils$2={isArrayLike:function(B){return B&&B.splice&&typeof B.length=="number"},isObserveLike:function(B){return B instanceof can$a.Map||B&&!!B._get},emptyHandler:function(){},jsonParse:function(str){return str[0]==="'"?str.substr(1,str.length-2):str==="undefined"?void 0:can$a.global.JSON?JSON.parse(str):eval("("+str+")")},mixins:{last:function(){return this.stack[this.stack.length-1]},add:function(B){this.last().add(B)},subSectionDepth:function(){return this.stack.length-1}},convertToScopes:function(B,O,D,F,q,G,U){q&&(B.fn=this.makeRendererConvertScopes(q,O,D,F,U)),G&&(B.inverse=this.makeRendererConvertScopes(G,O,D,F,U))},makeRendererConvertScopes:function(B,O,D,F,q){var G=function(Y,Q,ne){return B(Y||O,Q,ne)},U=function(Y,Q,ne){Y!==void 0&&!(Y instanceof can$a.view.Scope)&&(Y=O.add(Y)),Q!==void 0&&!(Q instanceof Options)&&(Q=D.add(Q));var oe=G(Y,Q||D,ne||F);return oe};return q?U:can$a.__notObserve(U)},getItemsFragContent:function(B,O,D){for(var F=this.isObserveLike(B),q=[],G=F?B.attr("length"):B.length,U=0;U<G;U++){var Y={"%index":U,"@index":U},Q=F?B.attr(""+U):B[U];q.push(O.fn(D.add(Y,{notContext:!0}).add(Q)))}return q},Options};/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$9=util,utils$1=utils$2,live$1=live_1;live$1=live$1||can$9.view.live;var resolve=function(B){return utils$1.isObserveLike(B)&&utils$1.isArrayLike(B)&&B.attr("length")?B:can$9.isFunction(B)?B():B},resolveHash=function(B){var O={};for(var D in B){var F=B[D];F&&F.isComputed?O[D]=F():O[D]=F}return O},looksLikeOptions=function(B){return B&&typeof B.fn=="function"&&typeof B.inverse=="function"},helpers$1={each:function(B,O){var D=resolve(B),F=[],q,G,U;if(D instanceof can$9.List&&!O.stringOnly)return function(ne){var oe=[ne];oe.expression="live.list",can$9.view.nodeLists.register(oe,null,O.nodeList,!0),can$9.view.nodeLists.update(O.nodeList,[ne]);var ce=function(fe,we,X){return O.fn(O.scope.add({"%index":we,"@index":we},{notContext:!0}).add(fe),O.options,X)};live$1.list(ne,B,ce,O.context,ne.parentNode,oe,function(fe,we){return O.inverse(O.scope.add(fe),O.options,we)})};var Y=D;if(Y&&utils$1.isArrayLike(Y)){var Q=utils$1.getItemsFragContent(Y,O,O.scope);Array.prototype.push.apply(F,Q)}else if(utils$1.isObserveLike(Y))for(q=can$9.Map.keys(Y),U=0;U<q.length;U++)G=q[U],F.push(O.fn(O.scope.add({"%key":G,"@key":G},{notContext:!0}).add(Y[G])));else if(Y instanceof Object)for(G in Y)F.push(O.fn(O.scope.add({"%key":G,"@key":G},{notContext:!0}).add(Y[G])));return O.stringOnly?F.join(""):F},"@index":function(B,O){O||(O=B,B=0);var D=O.scope.attr("@index");return""+((can$9.isFunction(D)?D():D)+B)},if:function(B,O){var D;return can$9.isFunction(B)?D=can$9.compute.truthy(B)():D=!!resolve(B),D?O.fn(O.scope||this):O.inverse(O.scope||this)},is:function(){var B,O,D=arguments[arguments.length-1];if(arguments.length-2<=0)return D.inverse();var F=arguments,q=can$9.compute(function(){for(var G=0;G<F.length-1;G++){if(O=resolve(F[G]),O=can$9.isFunction(O)?O():O,G>0&&O!==B)return!1;B=O}return!0});return q()?D.fn():D.inverse()},eq:function(){return helpers$1.is.apply(this,arguments)},unless:function(B,O){return helpers$1.if.apply(this,[B,can$9.extend({},O,{fn:O.inverse,inverse:O.fn})])},with:function(B,O){var D=B;if(B=resolve(B),B)return O.fn(D)},log:function(B,O){typeof console<"u"&&console.log&&(O?console.log(B,O.context):console.log(B.context))},data:function(B){var O=arguments.length===2?this:arguments[1];return function(D){can$9.data(can$9.$(D),B,O||this.context)}},switch:function(B,O){resolve(B);var D=!1,F=O.helpers.add({case:function(q,G){if(!D&&resolve(B)===resolve(q))return D=!0,G.fn(G.scope||this)},default:function(q){if(!D)return q.fn(q.scope||this)}});return O.fn(O.scope,F)},joinBase:function(B){var O=[].slice.call(arguments),D=O.pop(),F=can$9.map(O,function(Q){var ne=resolve(Q);return can$9.isFunction(ne)?ne():ne}).join(""),q=D.helpers.attr("helpers.module"),G=q?q.uri:void 0,U=F[0]===".";if(U&&G)return can$9.joinURIs(G,F);var Y=can$9.baseURL||typeof System<"u"&&(System.renderingLoader&&System.renderingLoader.baseURL||System.baseURL)||location.pathname;return F[0]!=="/"&&Y[Y.length-1]!=="/"&&(Y+="/"),can$9.joinURIs(Y,F)},routeUrl:function(B,O){return B||(B={}),typeof B.fn=="function"&&typeof B.inverse=="function"&&(B=resolveHash(B.hash)),can$9.route.url(B,typeof O=="boolean"?O:void 0)},routeCurrent:function(B){var O=can$9.last(arguments),D=O&&looksLikeOptions(O);return O&&D&&!(O.exprData instanceof can$9.expression.Call)?can$9.route.current(resolveHash(B.hash||{}))?B.fn():B.inverse():can$9.route.current(looksLikeOptions(B)?{}:B||{})}};helpers$1.routeCurrent.callAsMethod=!0,helpers$1.eachOf=helpers$1.each;var registerHelper=function(B,O){helpers$1[B]=O},mustache_helpers={registerHelper,registerSimpleHelper:function(B,O){registerHelper(B,can$9.view.simpleHelper(O))},getHelper:function(B,O){var D=O&&O.get("helpers."+B,{proxyMethods:!1});if(D||(D=helpers$1[B]),D)return{fn:D}}};/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$8=util,utils=utils$2,mustacheHelpers=mustache_helpers,getKeyComputeData=function(B,O,D){var F=O.computeData(B,D);return can$8.compute.temporarilyBind(F.compute),F},lookupValue=function(B,O,D,F){var q=getKeyComputeData(B,O,F);return q.compute.computeInstance.hasDependencies?{value:q.compute,computeData:q}:{value:q.initialValue,computeData:q}},lookupValueOrHelper=function(B,O,D,F){var q=lookupValue(B,O,D,F);if(q.computeData.initialValue===void 0){B.charAt(0)==="@"&&B!=="@index"&&(B=B.substr(1));var G=mustacheHelpers.getHelper(B,D);q.helper=G&&G.fn}return q},convertToArgExpression=function(B){return!(B instanceof Arg)&&!(B instanceof Literal)&&!(B instanceof Hashes)?new Arg(B):B},Literal=function(B){this._value=B};Literal.prototype.value=function(){return this._value};var Lookup=function(B,O){this.key=B,this.rootExpr=O};Lookup.prototype.value=function(B,O){var D=lookupValueOrHelper(this.key,B,O);return this.isHelper=D.helper&&!D.helper.callAsMethod,D.helper||D.value};var ScopeLookup=function(B,O){Lookup.apply(this,arguments)};ScopeLookup.prototype.value=function(B,O){return lookupValue(this.key,B).value};var Arg=function(B,O){this.expr=B,this.modifiers=O||{},this.isCompute=!1};Arg.prototype.value=function(){return this.expr.value.apply(this.expr,arguments)};var Hashes=function(B){this.hashExprs=B};Hashes.prototype.value=function(){var B={};for(var O in this.hashExprs){var D=this.hashExprs[O],F=D.value.apply(D,arguments);B[O]={call:F&&F.isComputed&&(!D.modifiers||!D.modifiers.compute),value:F}}return can$8.compute(function(){var q={};for(var G in B)q[G]=B[G].call?B[G].value():B[G].value;return q})};var Call=function(B,O,D){D&&!can$8.isEmptyObject(D)&&O.push(new Hashes(D)),this.methodExpr=B,this.argExprs=can$8.map(O,convertToArgExpression)};Call.prototype.args=function(B,O){for(var D=[],F=0,q=this.argExprs.length;F<q;F++){var G=this.argExprs[F],U=G.value.apply(G,arguments);D.push({call:U&&U.isComputed&&(!G.modifiers||!G.modifiers.compute),value:U})}return function(){for(var Y=[],Q=0,ne=D.length;Q<ne;Q++)Y[Q]=D[Q].call?D[Q].value():D[Q].value;return Y}},Call.prototype.value=function(B,O,D){var F=this.methodExpr.value(B,O);this.isHelper=this.methodExpr.isHelper;var q=this.args(B,O);return can$8.compute(function(G){var U=F;if(U&&U.isComputed&&(U=U()),typeof U=="function"){var Y=q();return D&&Y.push(D),arguments.length&&Y.unshift(new expression$2.SetIdentifier(G)),U.apply(null,Y)}})};var HelperLookup=function(){Lookup.apply(this,arguments)};HelperLookup.prototype.value=function(B,O){var D=lookupValueOrHelper(this.key,B,O,{isArgument:!0,args:[B.attr("."),B]});return D.helper||D.value};var HelperScopeLookup=function(){Lookup.apply(this,arguments)};HelperScopeLookup.prototype.value=function(B,O){return lookupValue(this.key,B,O,{callMethodsOnObservables:!0,isArgument:!0,args:[B.attr("."),B]}).value};var Helper=function(B,O,D){this.methodExpr=B,this.argExprs=O,this.hashExprs=D,this.mode=null};Helper.prototype.args=function(B,O){for(var D=[],F=0,q=this.argExprs.length;F<q;F++){var G=this.argExprs[F];D.push(G.value.apply(G,arguments))}return D},Helper.prototype.hash=function(B,O){var D={};for(var F in this.hashExprs){var q=this.hashExprs[F];D[F]=q.value.apply(q,arguments)}return D},Helper.prototype.helperAndValue=function(B,O){var D=this.argExprs.length||!can$8.isEmptyObject(this.hashExprs),F,q,G=this.methodExpr instanceof Literal?""+this.methodExpr._value:this.methodExpr.key,U,Y;if(D){F=mustacheHelpers.getHelper(G,O);var Q=B.attr(".");!F&&typeof Q[G]=="function"&&(F={fn:Q[G]})}if(!F){Y=this.args(B,O);var ne=getKeyComputeData(G,B,{isArgument:!1,args:Y&&Y.length?Y:[B.attr("."),B]}),oe=ne.compute;U=ne.initialValue,ne.compute.computeInstance.hasDependencies?q=oe:q=U,!D&&U===void 0&&(F=mustacheHelpers.getHelper(G,O))}return{value:q,args:Y,helper:F&&F.fn}},Helper.prototype.evaluator=function(B,O,D,F,q,G,U,Y){var Q={fn:function(){},inverse:function(){},stringOnly:Y},ne=O.attr("."),oe=this.args(O,D,q,G,U,Y),ce=this.hash(O,D,q,G,U,Y);return utils.convertToScopes(Q,O,D,q,G,U,Y),can$8.simpleExtend(Q,{context:ne,scope:O,contexts:O,hash:ce,nodeList:q,exprData:this,helperOptions:D,helpers:D}),oe.push(Q),function(){return B.apply(ne,oe)}},Helper.prototype.value=function(B,O,D,F,q,G){var U=this.helperAndValue(B,O),Y=U.helper;if(!Y)return U.value;var Q=this.evaluator(Y,B,O,D,F,q,G),ne=can$8.compute(Q);return can$8.compute.temporarilyBind(ne),ne.computeInstance.hasDependencies?ne:ne()};var keyRegExp=/[\w\.\\\-_@\/\&%]+/,tokensRegExp=/('.*?'|".*?"|=|[\w\.\\\-_@\/*%\$:]+|[\(\)]|,|\~)/g,literalRegExp=/^('.*?'|".*?"|[0-9]+\.?[0-9]*|true|false|null|undefined)$/,isTokenKey=function(B){return keyRegExp.test(B)},testDot=/^[\.@]\w/,isAddingToExpression=function(B){return isTokenKey(B)&&testDot.test(B)},ensureChildren=function(B){return B.children||(B.children=[]),B},Stack=function(){this.root={children:[],type:"Root"},this.current=this.root,this.stack=[this.root]};can$8.simpleExtend(Stack.prototype,{top:function(){return can$8.last(this.stack)},isRootTop:function(){return this.top()===this.root},popTo:function(B){this.popUntil(B),this.isRootTop()||this.stack.pop()},firstParent:function(B){for(var O=this.stack.length-2;O>0&&can$8.inArray(this.stack[O].type,B)===-1;)O--;return this.stack[O]},popUntil:function(B){for(;can$8.inArray(this.top().type,B)===-1&&!this.isRootTop();)this.stack.pop();return this.top()},addTo:function(B,O){var D=this.popUntil(B);ensureChildren(D).children.push(O)},addToAndPush:function(B,O){this.addTo(B,O),this.stack.push(O)},topLastChild:function(){return can$8.last(this.top().children)},replaceTopLastChild:function(B){var O=ensureChildren(this.top()).children;return O.pop(),O.push(B),B},replaceTopLastChildAndPush:function(B){this.replaceTopLastChild(B),this.stack.push(B)},replaceTopAndPush:function(B){var O;return this.top()===this.root?O=ensureChildren(this.top()).children:(this.stack.pop(),O=ensureChildren(this.top()).children),O.pop(),O.push(B),this.stack.push(B),B}});var convertKeyToLookup=function(B){var O=B.lastIndexOf("./"),D=B.lastIndexOf(".");if(D>O)return B.substr(0,D)+"@"+B.substr(D+1);var F=O===-1?0:O+2,q=B.charAt(F);return q==="."||q==="@"?B.substr(0,F)+"@"+B.substr(F+1):B.substr(0,F)+"@"+B.substr(F)},convertToAtLookup=function(B){return B.type==="Lookup"&&(B.key=convertKeyToLookup(B.key)),B},convertToHelperIfTopIsLookup=function(B){var O=B.top();if(O&&O.type==="Lookup"){var D=B.stack[B.stack.length-2];D.type!=="Helper"&&D&&B.replaceTopAndPush({type:"Helper",method:O})}},expression$2={convertKeyToLookup,Literal,Lookup,ScopeLookup,Arg,Hashes,Call,Helper,HelperLookup,HelperScopeLookup,SetIdentifier:function(B){this.value=B},tokenize:function(B){var O=[];return(can$8.trim(B)+" ").replace(tokensRegExp,function(D,F){O.push(F)}),O},lookupRules:{default:function(B,O,D){var F=(O==="Helper"&&!B.root?"Helper":"")+(D?"Scope":"")+"Lookup";return expression$2[F]},method:function(B,O,D){return ScopeLookup}},methodRules:{default:function(B){return B.type==="Call"?Call:Helper},call:function(B){return Call}},parse:function(B,O){O=O||{};var D=this.ast(B);O.lookupRule||(O.lookupRule="default"),typeof O.lookupRule=="string"&&(O.lookupRule=expression$2.lookupRules[O.lookupRule]),O.methodRule||(O.methodRule="default"),typeof O.methodRule=="string"&&(O.methodRule=expression$2.methodRules[O.methodRule]);var F=this.hydrateAst(D,O,O.baseMethodType||"Helper");return F},hydrateAst:function(B,O,D,F){var q,G=this;if(B.type==="Lookup")return new(O.lookupRule(B,D,F))(B.key,B.root&&this.hydrateAst(B.root,O,D));if(B.type==="Literal")return new Literal(B.value);if(B.type==="Arg")return new Arg(this.hydrateAst(B.children[0],O,D,F),{compute:!0});if(B.type==="Hashes")return q={},can$8.each(B.children,function(Y){q[Y.prop]=G.hydrateAst(Y.children[0],O,B.type,!0)}),new Hashes(q);if(B.type==="Hash")throw new Error("");if(B.type==="Call"||B.type==="Helper"){var U=[];return q={},can$8.each(B.children,function(Y){Y.type==="Hash"?q[Y.prop]=G.hydrateAst(Y.children[0],O,B.type,!0):U.push(G.hydrateAst(Y,O,B.type,!0))}),new(O.methodRule(B))(this.hydrateAst(B.method,O,B.type),U,q)}},ast:function(B){var O=this.tokenize(B);return this.parseAst(O,{index:0})},parseAst:function(B,O){for(var D=new Stack,F;O.index<B.length;){var q=B[O.index],G=B[O.index+1];if(O.index++,literalRegExp.test(q))convertToHelperIfTopIsLookup(D),D.addTo(["Helper","Call","Hash"],{type:"Literal",value:utils.jsonParse(q)});else if(G==="="){if(F=D.top(),F&&F.type==="Lookup"){var U=D.firstParent(["Call","Helper","Hash"]);(U.type==="Call"||U.type==="Root")&&(D.popUntil(["Call"]),F=D.top(),D.replaceTopAndPush({type:"Helper",method:F.type==="Root"?can$8.last(F.children):F}))}F=D.popUntil(["Helper","Call","Hashes"]),F.type==="Call"&&D.addToAndPush(["Call"],{type:"Hashes"}),D.addToAndPush(["Helper","Hashes"],{type:"Hash",prop:q}),O.index++}else if(keyRegExp.test(q)){var Y=D.topLastChild();Y&&Y.type==="Call"&&isAddingToExpression(q)?D.replaceTopLastChildAndPush({type:"Lookup",root:Y,key:q}):(convertToHelperIfTopIsLookup(D),D.addToAndPush(["Helper","Call","Hash","Arg"],{type:"Lookup",key:q}))}else if(q==="~")convertToHelperIfTopIsLookup(D),D.addToAndPush(["Helper","Call","Hash"],{type:"Arg",key:q});else if(q==="(")if(F=D.top(),F.type==="Lookup")D.replaceTopAndPush({type:"Call",method:convertToAtLookup(F)});else throw new Error("Unable to understand expression "+B.join(""));else q===")"?D.popTo(["Call"]):q===","&&D.popUntil(["Call"])}return D.root.children[0]}};can$8.expression=expression$2;var expression_1=expression$2;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$7=util,expression$1=expression_1,removeCurly=function(B){return B[0]==="{"&&B[B.length-1]==="}"?B.substr(1,B.length-2):B};can$7.view.attr("can-href",function(B,O){var D=expression$1.parse("tmp("+removeCurly(B.getAttribute("can-href"))+")",{baseMethodType:"Call"}),F=D.argExprs[0].value(O.scope,null),q=can$7.compute(function(){return can$7.route.url(F())});B.setAttribute("href",q());var G=function(U,Y){B.setAttribute("href",Y)};q.bind("change",G),can$7.bind.call(B,"removed",function(){q.unbind("change",G)})});/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$6=util,expression=expression_1,viewCallbacks=callbacks,live=live_1,behaviors={viewModel:function(B,O,D,F){F=F||{};var q={},G,U=[],Y={},Q={},ne=can$6.extend({},F);can$6.each(can$6.makeArray(B.attributes),function(fe){var we=makeDataBinding(fe,B,{templateType:O.templateType,scope:O.scope,semaphore:q,getViewModel:function(){return G},attributeViewModelBindings:ne,alreadyUpdatedChild:!0,nodeList:O.parentNodeList});we&&(we.onCompleteBinding&&(we.bindingInfo.parentToChild&&we.value!==void 0&&(F[cleanVMName(we.bindingInfo.childName)]=we.value),U.push(we.onCompleteBinding)),Y[fe.name]=we.onTeardown)}),G=D(F);for(var oe=0,ce=U.length;oe<ce;oe++)U[oe]();return can$6.bind.call(B,"attributes",function(fe){var we=fe.attributeName,X=B.getAttribute(we);Y[we]&&Y[we]();var ve=Q[we]&&Q[we].parent==="attribute";if(X!==null||ve){var de=makeDataBinding({name:we,value:X},B,{templateType:O.templateType,scope:O.scope,semaphore:{},getViewModel:function(){return G},attributeViewModelBindings:ne,initializeValues:!0,nodeList:O.parentNodeList});de&&(de.onCompleteBinding&&de.onCompleteBinding(),Q[we]=de.bindingInfo,Y[we]=de.onTeardown)}}),function(){for(var fe in Y)Y[fe]()}},data:function(B,O){if(!can$6.data(can$6.$(B),"preventDataBindings")){var D=can$6.viewModel(B),F={},q,G=makeDataBinding({name:O.attributeName,value:B.getAttribute(O.attributeName),nodeList:O.nodeList},B,{templateType:O.templateType,scope:O.scope,semaphore:F,getViewModel:function(){return D}});G.onCompleteBinding&&G.onCompleteBinding(),q=G.onTeardown,can$6.one.call(B,"removed",function(){q()}),can$6.bind.call(B,"attributes",function(U){var Y=U.attributeName,Q=B.getAttribute(Y);if(Y===O.attributeName&&(q&&q(),Q!==null)){var ne=makeDataBinding({name:Y,value:Q},B,{templateType:O.templateType,scope:O.scope,semaphore:F,getViewModel:function(){return D},initializeValues:!0,nodeList:O.nodeList});ne&&(ne.onCompleteBinding&&ne.onCompleteBinding(),q=ne.onTeardown)}})}},reference:function(B,O){B.getAttribute(O.attributeName)&&console.warn("*reference attributes can only export the view model.");var D=can$6.camelize(O.attributeName.substr(1).toLowerCase()),F=can$6.viewModel(B),q=O.scope.getRefs();q._context.attr("*"+D,F)},event:function(B,O){var D=O.attributeName,F=D.indexOf("can-")===0,q=D.indexOf("can-")===0?D.substr(4):can$6.camelize(removeBrackets(D,"(",")")),G=F;q.charAt(0)==="$"&&(q=q.substr(1),G=!0);var U=function(ne){var oe=B.getAttribute(D);if(oe){var ce=can$6.$(B),fe=can$6.viewModel(ce[0]),we=expression.parse(removeBrackets(oe),{lookupRule:"method",methodRule:"call"});if(!(we instanceof expression.Call)&&!(we instanceof expression.Helper)){var X=can$6.map([O.scope._context,ce].concat(can$6.makeArray(arguments)),function(Se){return new expression.Literal(Se)});we=new expression.Call(we,X,{})}var ve=O.scope.add({"@element":ce,"@event":ne,"@viewModel":fe,"@scope":O.scope,"@context":O.scope._context,"%element":this,$element:ce,"%event":ne,"%viewModel":fe,"%scope":O.scope,"%context":O.scope._context},{notContext:!0}),de=ve.read(we.methodExpr.key,{isArgument:!0});if(!de.value)return de=ve.read(we.methodExpr.key,{isArgument:!0}),null;var Ae=we.args(ve,null)();return de.value.apply(de.parent,Ae)}};if(special[q]){var Y=special[q](O,B,U);U=Y.handler,q=Y.event}can$6.bind.call(G?B:can$6.viewModel(B),q,U);var Q=function(ne){ne.attributeName===D&&!this.getAttribute(D)&&(can$6.unbind.call(G?B:can$6.viewModel(B),q,U),can$6.unbind.call(B,"attributes",Q))};can$6.bind.call(B,"attributes",Q)},value:function(B,O){var D="$value",F=can$6.trim(removeBrackets(B.getAttribute("can-value"))),q;if(B.nodeName.toLowerCase()==="input"&&(B.type==="checkbox"||B.type==="radio")){var G=getComputeFrom.scope(B,O.scope,F,{},!0);if(B.type==="checkbox"){var U=can$6.attr.has(B,"can-true-value")?B.getAttribute("can-true-value"):!0,Y=can$6.attr.has(B,"can-false-value")?B.getAttribute("can-false-value"):!1;q=can$6.compute(function(ne){if(arguments.length)G(ne?U:Y);else return G()==U})}else B.type==="radio"&&(q=can$6.compute(function(ne){if(arguments.length)ne&&G(B.value);else return G()==B.value}));D="$checked",F="getterSetter",O.scope=new can$6.view.Scope({getterSetter:q})}else isContentEditable(B)&&(D="$innerHTML");var Q=makeDataBinding({name:"{("+D+"})",value:F},B,{templateType:O.templateType,scope:O.scope,semaphore:{},initializeValues:!0,legacyBindings:!0,syncChildWithParent:!0});can$6.one.call(B,"removed",function(){Q.onTeardown()})}};can$6.view.attr(/^\{[^\}]+\}$/,behaviors.data),can$6.view.attr(/\*[\w\.\-_]+/,behaviors.reference),can$6.view.attr(/^\([\$?\w\.\-]+\)$/,behaviors.event),can$6.view.attr(/can-[\w\.]+/,behaviors.event),can$6.view.attr("can-value",behaviors.value);var getComputeFrom={scope:function(B,O,D,F,q,G){if(D)if(q){var U=expression.parse(D,{baseMethodType:"Call"});return U.value(O,new can$6.view.Options({}))}else return function(Y){O.attr(cleanVMName(D),Y)};else return can$6.compute()},viewModel:function(B,O,D,F,q,G){var U=cleanVMName(D);return q?can$6.compute(function(Y){var Q=F.getViewModel();if(arguments.length)Q.attr(U,Y);else return D==="."?Q:can$6.compute.read(Q,can$6.compute.read.reads(D),{}).value}):function(Y){var Q,ne=F.getViewModel();G?(Q=ne._get(U,{readCompute:!1}),(!Q||!Q.isComputed)&&(Q=can$6.compute(),ne._set(U,Q,{readCompute:!1})),Q(Y)):ne.attr(U,Y)}},attribute:function(B,O,D,F,q,G,U){var Y=B.nodeName.toLowerCase()==="select",Q=D==="value"&&Y&&B.multiple,ne,oe=!1,ce,fe,we;U||(D==="innerHTML"?U=["blur","change"]:U="change"),can$6.isArray(U)||(U=[U]);var X=function(Ae){if(Y&&!oe&&(clearTimeout(ce),ce=setTimeout(function(){X(Ae)},1)),Q){Ae&&typeof Ae=="string"?(Ae=Ae.split(";"),ne=!0):Ae?Ae=can$6.makeArray(Ae):Ae=[];var Se={};can$6.each(Ae,function(Pe){Se[Pe]=!0}),can$6.each(B.childNodes,function(Pe){Pe.value&&(Pe.selected=!!Se[Pe.value])})}else!F.legacyBindings&&Y&&"selectedIndex"in B&&D==="value"?can$6.attr.setSelectValue(B,Ae):can$6.attr.setAttrOrProp(B,D,Ae??"");return Ae},ve=function(){if(Q){var Ae=[],Se=B.childNodes;return can$6.each(Se,function(Pe){Pe.selected&&Pe.value&&Ae.push(Pe.value)}),ne?Ae.join(";"):Ae}else if(Y&&"selectedIndex"in B&&B.selectedIndex===-1)return;return can$6.attr.get(B,D)};Y&&setTimeout(function(){oe=!0},1),B.tagName&&B.tagName.toLowerCase()==="input"&&B.form&&(fe=[{el:B.form,eventName:"reset",handler:function(){X(we)}}]);var de;return we=ve(),can$6.compute(we,{on:function(Ae){if(can$6.each(U,function(Pe){can$6.bind.call(B,Pe,Ae)}),can$6.each(fe,function(Pe){can$6.bind.call(Pe.el,Pe.eventName,Pe.handler)}),Y){var Se=function(Pe){G&&X(G()),Ae()};can$6.attr.MutationObserver?(de=new can$6.attr.MutationObserver(Se),de.observe(B,{childList:!0,subtree:!0})):can$6.data(can$6.$(B),"canBindingCallback",{onMutation:Se})}},off:function(Ae){can$6.each(U,function(Se){can$6.unbind.call(B,Se,Ae)}),can$6.each(fe,function(Se){can$6.unbind.call(Se.el,Se.eventName,Se.handler)}),Y&&(can$6.attr.MutationObserver?de.disconnect():can$6.data(can$6.$(B),"canBindingCallback",null))},get:ve,set:X})}},bind={childToParent:function(B,O,D,F,q,G){var U=typeof O=="function",Y=function(Q,ne){F[q]||(U?(O(ne),G&&O()!==D()&&(F[q]=(F[q]||0)+1,can$6.batch.start(),D(O()),can$6.batch.after(function(){--F[q]}),can$6.batch.stop())):O instanceof can$6.Map&&O.attr(ne,!0))};return D&&D.isComputed&&D.bind("change",Y),Y},parentToChild:function(B,O,D,F,q){var G=function(U,Y){F[q]=(F[q]||0)+1,can$6.batch.start(),D(Y),can$6.batch.after(function(){--F[q]}),can$6.batch.stop()};return O&&O.isComputed&&O.bind("change",G),G}},getBindingInfo=function(B,O,D,F){var q,G=B.name,U=B.value||"",Y=G.match(bindingsRegExp);if(!Y){var Q=ignoreAttributesRegExp.test(G),ne=can$6.camelize(G);if(Q||viewCallbacks.attr(G))return;var oe=U[0]==="{"&&can$6.last(U)==="}",ce=D==="legacy"?O[ne]:!oe,fe=oe?U.substr(1,U.length-2):U;return ce?{bindingAttributeName:G,parent:"attribute",parentName:G,child:"viewModel",childName:ne,parentToChild:!0,childToParent:!0}:{bindingAttributeName:G,parent:"scope",parentName:fe,child:"viewModel",childName:ne,parentToChild:!0,childToParent:!0}}var we=!!Y[1],X=we||!!Y[2],ve=we||!X,de=Y[3],Ae=de.charAt(0)==="$";return Ae?(q={parent:"scope",child:"attribute",childToParent:X,parentToChild:ve,bindingAttributeName:G,childName:de.substr(1),parentName:U,initializeValues:!0},F==="select"&&(q.stickyParentToChild=!0),q):(q={parent:"scope",child:"viewModel",childToParent:X,parentToChild:ve,bindingAttributeName:G,childName:can$6.camelize(de),parentName:U,initializeValues:!0},U.trim().charAt(0)==="~"&&(q.stickyParentToChild=!0),q)},bindingsRegExp=/\{(\()?(\^)?([^\}\)]+)\)?\}/,ignoreAttributesRegExp=/^(data-view-id|class|id|\[[\w\.-]+\]|#[\w\.-])$/i,makeDataBinding=function(B,O,D){var F=getBindingInfo(B,D.attributeViewModelBindings,D.templateType,O.nodeName.toLowerCase());if(F){F.alreadyUpdatedChild=D.alreadyUpdatedChild,D.initializeValues&&(F.initializeValues=!0);var q=getComputeFrom[F.parent](O,D.scope,F.parentName,D,F.parentToChild),G=getComputeFrom[F.child](O,D.scope,F.childName,D,F.childToParent,F.stickyParentToChild&&q),U,Y,Q;D.nodeList&&(q&&q.isComputed&&q.computeInstance.setPrimaryDepth(D.nodeList.nesting+1),G&&G.isComputed&&G.computeInstance.setPrimaryDepth(D.nodeList.nesting+1)),F.parentToChild&&(Y=bind.parentToChild(O,q,G,D.semaphore,F.bindingAttributeName));var ne=function(){F.childToParent?U=bind.childToParent(O,q,G,D.semaphore,F.bindingAttributeName,D.syncChildWithParent):F.stickyParentToChild&&G.bind("change",Q=can$6.k),F.initializeValues&&initializeValues(F,G,q,Y,U)},oe=function(){unbindUpdate(q,Y),unbindUpdate(G,U),unbindUpdate(G,Q)};return F.child==="viewModel"?{value:getValue(q),onCompleteBinding:ne,bindingInfo:F,onTeardown:oe}:(ne(),{bindingInfo:F,onTeardown:oe})}},initializeValues=function(B,O,D,F,q){var G=!1;B.parentToChild&&!B.childToParent?B.stickyParentToChild&&F({},getValue(D)):!B.parentToChild&&B.childToParent?G=!0:getValue(O)===void 0||getValue(D)===void 0&&(G=!0),G?q({},getValue(O)):B.alreadyUpdatedChild||F({},getValue(D))};if(!can$6.attr.MutationObserver){var updateSelectValue=function(B){var O=can$6.data(can$6.$(B),"canBindingCallback");O&&O.onMutation(B)};live.registerChildMutationCallback("select",updateSelectValue),live.registerChildMutationCallback("optgroup",function(B){updateSelectValue(B.parentNode)})}var isContentEditable=function(){var B={"":!0,true:!0,false:!1},O=function(D){if(!(!D||!D.getAttribute)){var F=D.getAttribute("contenteditable");return B[F]}};return function(D){var F=O(D);return typeof F=="boolean"?F:!!O(D.parentNode)}}(),removeBrackets=function(B,O,D){return O=O||"{",D=D||"}",B[0]===O&&B[B.length-1]===D?B.substr(1,B.length-2):B},getValue=function(B){return B&&B.isComputed?B():B},unbindUpdate=function(B,O){B&&B.isComputed&&typeof O=="function"&&B.unbind("change",O)},cleanVMName=function(B){return B.replace(/@/g,"")},special={enter:function(B,O,D){return{event:"keyup",handler:function(F){if(F.keyCode===13)return D.call(this,F)}}}};can$6.bindings={behaviors,getBindingInfo,special};var bindings$1=can$6.bindings;/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can$5=util;can$5.view.ext=".mustache";var SCOPE="scope",HASH="___h4sh",CONTEXT_OBJ="{scope:"+SCOPE+",options:options}",SPECIAL_CONTEXT_OBJ="{scope:"+SCOPE+",options:options, special: true}",ARG_NAMES=SCOPE+",options",argumentsRegExp=/((([^'"\s]+?=)?('.*?'|".*?"))|.*?)\s/g,literalNumberStringBooleanRegExp=/^(('.*?'|".*?"|[0-9]+\.?[0-9]*|true|false|null|undefined)|((.+?)=(('.*?'|".*?"|[0-9]+\.?[0-9]*|true|false)|(.+))))$/,makeLookupLiteral=function(B){return'{get:"'+B.replace(/"/g,'\\"')+'"}'},isLookup=function(B){return B&&typeof B.get=="string"},isObserveLike=function(B){return B instanceof can$5.Map||B&&!!B._get},isArrayLike=function(B){return B&&B.splice&&typeof B.length=="number"},makeConvertToScopes=function(B,O,D){var F=function(q,G){return B(q||O,G)};return function(q,G){return q!==void 0&&!(q instanceof can$5.view.Scope)&&(q=O.add(q)),G!==void 0&&!(G instanceof can$5.view.Options)&&(G=D.add(G)),F(q,G||D)}},Mustache=function(B,O){if(this.constructor!==Mustache){var D=new Mustache(B);return function(F,q){return D.render(F,q)}}if(typeof B=="function"){this.template={fn:B};return}can$5.extend(this,B),this.template=this.scanner.scan(this.text,this.name)};can$5.Mustache=can$5.global.Mustache=Mustache,Mustache.prototype.render=function(B,O){return B instanceof can$5.view.Scope||(B=new can$5.view.Scope(B||{})),O instanceof can$5.view.Options||(O=new can$5.view.Options(O||{})),O=O||{},this.template.fn.call(B,B,O)},can$5.extend(Mustache.prototype,{scanner:new can$5.view.Scanner({text:{start:"",scope:SCOPE,options:",options: options",argNames:ARG_NAMES},tokens:[["returnLeft","{{{","{{[{&]"],["commentFull","{{!}}","^[\\s\\t]*{{!.+?}}\\n"],["commentLeft","{{!","(\\n[\\s\\t]*{{!|{{!)"],["escapeFull","{{}}","(^[\\s\\t]*{{[#/^][^}]+?}}\\n|\\n[\\s\\t]*{{[#/^][^}]+?}}\\n|\\n[\\s\\t]*{{[#/^][^}]+?}}$)",function(B){return{before:/^\n.+?\n$/.test(B)?`
 `:"",content:B.match(/\{\{(.+?)\}\}/)[1]||""}}],["escapeLeft","{{"],["returnRight","}}}"],["right","}}"]],helpers:[{name:/^>[\s]*\w*/,fn:function(B,O){var D=can$5.trim(B.replace(/^>\s?/,"")).replace(/["|']/g,"");return"can.Mustache.renderPartial('"+D+"',"+ARG_NAMES+")"}},{name:/^\s*data\s/,fn:function(B,O){var D=B.match(/["|'](.*)["|']/)[1];return"can.proxy(function(__){can.data(can.$(__),'"+D+"', this.attr('.')); }, "+SCOPE+")"}},{name:/\s*\(([\$\w]+)\)\s*->([^\n]*)/,fn:function(B){var O=/\s*\(([\$\w]+)\)\s*->([^\n]*)/,D=B.match(O);return"can.proxy(function(__){var "+D[1]+"=can.$(__);with("+SCOPE+".attr('.')){"+D[2]+"}}, this);"}},{name:/^.*$/,fn:function(B,O){var D=!1,F={content:"",startTxt:!1,startOnlyTxt:!1,end:!1};if(B=can$5.trim(B),B.length&&(D=B.match(/^([#^/]|else$)/))){switch(D=D[0],D){case"#":case"^":O.specialAttribute?F.startOnlyTxt=!0:(F.startTxt=!0,F.escaped=0);break;case"/":return F.end=!0,F.content+='return ___v1ew.join("");}}])',F}B=B.substring(1)}if(D!=="else"){var q=[],G=[],U=0,Y;F.content+=`can.Mustache.txt(
 `+(O.specialAttribute?SPECIAL_CONTEXT_OBJ:CONTEXT_OBJ)+`,
 `+(D?'"'+D+'"':"null")+",",(can$5.trim(B)+" ").replace(argumentsRegExp,function(Q,ne){U&&(Y=ne.match(literalNumberStringBooleanRegExp))?Y[2]?q.push(Y[0]):G.push(Y[4]+":"+(Y[6]?Y[6]:makeLookupLiteral(Y[5]))):q.push(makeLookupLiteral(ne)),U++}),F.content+=q.join(","),G.length&&(F.content+=",{"+HASH+":{"+G.join(",")+"}}")}switch(D&&D!=="else"&&(F.content+=`,[
 
 `),D){case"^":case"#":F.content+="{fn:function("+ARG_NAMES+"){var ___v1ew = [];";break;case"else":F.content+=`return ___v1ew.join("");}},
 {inverse:function(`+ARG_NAMES+`){
 var ___v1ew = [];`;break;default:F.content+=")";break}return D||(F.startTxt=!0,F.end=!0),F}}]})});for(var helpers=can$5.view.Scanner.prototype.helpers,i=0;i<helpers.length;i++)Mustache.prototype.scanner.helpers.unshift(helpers[i]);Mustache.txt=function(B,O,D){for(var F=B.scope,q=B.options,G=[],U={fn:function(){},inverse:function(){}},Y,Q=F.attr("."),ne=!0,oe,ce=3;ce<arguments.length;ce++){var fe=arguments[ce];if(O&&can$5.isArray(fe))U=can$5.extend.apply(can$5,[U].concat(fe));else if(fe&&fe[HASH]){Y=fe[HASH];for(var we in Y)isLookup(Y[we])&&(Y[we]=Mustache.get(Y[we].get,B,!1,!0))}else fe&&isLookup(fe)?G.push(Mustache.get(fe.get,B,!1,!0,!0)):G.push(fe)}if(isLookup(D)){var X=D.get;D=Mustache.get(D.get,B,G.length,!1),ne=X===D}if(U.fn=makeConvertToScopes(U.fn,F,q),U.inverse=makeConvertToScopes(U.inverse,F,q),O==="^"){var ve=U.fn;U.fn=U.inverse,U.inverse=ve}return(oe=ne&&typeof D=="string"&&Mustache.getHelper(D,q)||can$5.isFunction(D)&&!D.isComputed&&{fn:D})?(can$5.extend(U,{context:Q,scope:F,contexts:F,hash:Y}),G.push(U),function(){var de=oe.fn.apply(Q,G);return de??""}):function(){var de;can$5.isFunction(D)&&D.isComputed?de=D():de=D;var Ae=G.length?G:[de],Se=!0,Pe=[],ke,ye,be;if(O)for(ke=0;ke<Ae.length;ke++)be=Ae[ke],ye=typeof be<"u"&&isObserveLike(be),isArrayLike(be)?O==="#"?Se=Se&&!!(ye?be.attr("length"):be.length):O==="^"&&(Se=Se&&!(ye?be.attr("length"):be.length)):Se=O==="#"?Se&&!!be:O==="^"?Se&&!be:Se;if(Se)if(O==="#")if(isArrayLike(de)){var Te=isObserveLike(de);for(ke=0;ke<de.length;ke++)Pe.push(U.fn(Te?de.attr(""+ke):de[ke]));return Pe.join("")}else return U.fn(de||{})||"";else return O==="^"?U.inverse(de||{})||"":""+(de??"");return""}},Mustache.get=function(B,O,D,F,q){var G=O.scope.attr("."),U=O.options||{};if(D){if(Mustache.getHelper(B,U))return B;if(O.scope&&can$5.isFunction(G[B]))return G[B]}var Y=O.scope.computeData(B,{isArgument:F,args:[G,O.scope]}),Q=Y.compute;can$5.compute.temporarilyBind(Q);var ne=Y.initialValue;return Mustache.getHelper(B,U),!q&&(ne===void 0||Y.scope!==O.scope)&&Mustache.getHelper(B,U)?B:Q.computeInstance.hasDependencies?Q:ne},Mustache.resolve=function(B){return isObserveLike(B)&&isArrayLike(B)&&B.attr("length")?B:can$5.isFunction(B)?B():B},Mustache._helpers={},Mustache.registerHelper=function(B,O){this._helpers[B]={name:B,fn:O}},Mustache.registerSimpleHelper=function(B,O){Mustache.registerHelper(B,can$5.view.simpleHelper(O))},Mustache.getHelper=function(B,O){var D;return O&&(D=O.get("helpers."+B,{proxyMethods:!1})),D?{fn:D}:this._helpers[B]},Mustache.render=function(B,O,D){return can$5.view.cached[B]||can$5.__notObserve(function(){var F=O.attr(B);F&&(B=F)})(),can$5.view.render(B,O,D)},Mustache.safeString=function(B){return{toString:function(){return B}}},Mustache.renderPartial=function(B,O,D){var F=D.get("partials."+B,{proxyMethods:!1});return F?F.render?F.render(O,D):F(O,D):can$5.Mustache.render(B,O,D)},can$5.each({if:function(B,O){var D;return can$5.isFunction(B)?D=can$5.compute.truthy(B)():D=!!Mustache.resolve(B),D?O.fn(O.contexts||this):O.inverse(O.contexts||this)},is:function(){var B,O,D=arguments[arguments.length-1];if(arguments.length-2<=0)return D.inverse();for(var F=0;F<arguments.length-1;F++){if(O=Mustache.resolve(arguments[F]),O=can$5.isFunction(O)?O():O,F>0&&O!==B)return D.inverse();B=O}return D.fn()},eq:function(){return Mustache._helpers.is.fn.apply(this,arguments)},unless:function(B,O){return Mustache._helpers.if.fn.apply(this,[B,can$5.extend({},O,{fn:O.inverse,inverse:O.fn})])},each:function(B,O){var D=Mustache.resolve(B),F=[],q,G,U;if(can$5.view.lists&&(D instanceof can$5.List||B&&B.isComputed&&D===void 0))return can$5.view.lists(B,function(Y,Q){return O.fn(O.scope.add({"@index":Q}).add(Y))});if(B=D,B&&isArrayLike(B)){for(U=0;U<B.length;U++)F.push(O.fn(O.scope.add({"@index":U}).add(B[U])));return F.join("")}else if(isObserveLike(B)){for(q=can$5.Map.keys(B),U=0;U<q.length;U++)G=q[U],F.push(O.fn(O.scope.add({"@key":G}).add(B[G])));return F.join("")}else if(B instanceof Object){for(G in B)F.push(O.fn(O.scope.add({"@key":G}).add(B[G])));return F.join("")}},with:function(B,O){var D=B;if(B=Mustache.resolve(B),B)return O.fn(D)},log:function(B,O){typeof console<"u"&&console.log&&(O?console.log(B,O.context):console.log(B.context))},"@index":function(B,O){O||(O=B,B=0);var D=O.scope.read("@index",{isArgument:!0}).value;return""+((can$5.isFunction(D)?D():D)+B)}},function(B,O){Mustache.registerHelper(O,B)}),can$5.view.register({suffix:"mustache",contentType:"x-mustache-template",script:function(B,O){return"can.Mustache(function("+ARG_NAMES+") { "+new Mustache({text:O,name:B}).template.out+" })"},renderer:function(B,O){return Mustache({text:O,name:B})}}),can$5.mustache.registerHelper=can$5.proxy(can$5.Mustache.registerHelper,can$5.Mustache),can$5.mustache.safeString=can$5.Mustache.safeString;/*!
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
  */var can$2=util,elements=elements_1,bindings=bindings$1,paramReplacer=/\{([^\}]+)\}/g;can$2.Component=can$2.Construct.extend({setup:function(){if(can$2.Construct.setup.apply(this,arguments),can$2.Component){var B=this,O=this.prototype.scope||this.prototype.viewModel;if(this.Control=ComponentControl.extend(this.prototype.events),!O||typeof O=="object"&&!(O instanceof can$2.Map)?this.Map=can$2.Map.extend(O||{}):O.prototype instanceof can$2.Map&&(this.Map=O),this.attributeScopeMappings={},can$2.each(this.Map?this.Map.defaults:{},function(F,q){F==="@"&&(B.attributeScopeMappings[q]=q)}),this.prototype.template)if(typeof this.prototype.template=="function"){var D=this.prototype.template;this.renderer=function(){return can$2.view.frag(D.apply(null,arguments))}}else this.renderer=can$2.view.mustache(this.prototype.template);can$2.view.tag(this.prototype.tag,function(F,q){new B(F,q)})}}},{setup:function(B,O){var D={},F=this,q=(typeof this.leakScope>"u"?!1:!this.leakScope)&&!!this.template,G,U,Y=[],Q=function(){for(var ve=0,de=Y.length;ve<de;ve++)Y[ve]()},ne=can$2.$(B),oe=!can$2.data(ne,"preventDataBindings");can$2.each(this.constructor.attributeScopeMappings,function(ve,de){D[de]=B.getAttribute(can$2.hyphenate(ve))}),oe&&Y.push(bindings.behaviors.viewModel(B,O,function(ve){ve["%root"]=O.scope.attr("%root");var de=F.scope||F.viewModel;if(F.constructor.Map)G=new F.constructor.Map(ve);else if(de instanceof can$2.Map)G=de;else if(can$2.isFunction(de)){var Ae=de.call(F,ve,O.scope,B);Ae instanceof can$2.Map?G=Ae:Ae.prototype instanceof can$2.Map?G=new Ae(ve):G=new(can$2.Map.extend(Ae))(ve)}var Se=G.serialize;return G.serialize=function(){var Pe=Se.apply(this,arguments);return delete Pe["%root"],Pe},G},D)),this.scope=this.viewModel=G,can$2.data(ne,"scope",this.viewModel),can$2.data(ne,"viewModel",this.viewModel),can$2.data(ne,"preventDataBindings",!0);var ce;q?ce=can$2.view.Scope.refsScope().add(this.viewModel,{viewModel:!0}):ce=(this.constructor.renderer?O.scope.add(new can$2.view.Scope.Refs):O.scope).add(this.viewModel,{viewModel:!0});var fe={helpers:{}},we=function(ve,de){fe.helpers[ve]=function(){return de.apply(G,arguments)}};can$2.each(this.helpers||{},function(ve,de){can$2.isFunction(ve)&&we(de,ve)}),can$2.each(this.simpleHelpers||{},function(ve,de){we(de,can$2.view.simpleHelper(ve))}),this._control=new this.constructor.Control(B,{scope:this.viewModel,viewModel:this.viewModel,destroy:Q});var X=can$2.view.nodeLists.register([],void 0,O.parentNodeList||!0,!1);X.expression="<"+this.tag+">",Y.push(function(){can$2.view.nodeLists.unregister(X)}),this.constructor.renderer?(fe.tags||(fe.tags={}),fe.tags.content=function ve(de,Ae){var Se=O.subtemplate||Ae.subtemplate,Pe=Se===O.subtemplate;if(Se){delete fe.tags.content;var ke;if(Pe?q?ke=O:ke={scope:Ae.scope.cloneFromRef(),options:Ae.options}:ke=Ae,Ae.parentNodeList){var ye=Se(ke.scope,ke.options,Ae.parentNodeList);elements.replace([de],ye)}else can$2.view.live.replace([de],Se(ke.scope,ke.options));fe.tags.content=ve}},U=this.constructor.renderer(ce,O.options.add(fe),X)):O.templateType==="legacy"?U=can$2.view.frag(O.subtemplate?O.subtemplate(ce,O.options.add(fe)):""):U=O.subtemplate?O.subtemplate(ce,O.options.add(fe),X):document.createDocumentFragment(),can$2.appendChild(B,U,can$2.document),can$2.view.nodeLists.update(X,can$2.childNodes(B))}});var ComponentControl=can$2.Control.extend({_lookup:function(B){return[B.scope,B,window]},_action:function(B,O,D){var F,q;if(paramReplacer.lastIndex=0,F=paramReplacer.test(B),!(!D&&F))if(F){q=can$2.compute(function(){var U,Y=B.replace(paramReplacer,function(oe,ce){var fe;return ce==="scope"||ce==="viewModel"?(U=O.viewModel,""):(ce=ce.replace(/^(scope|^viewModel)\./,""),fe=can$2.compute.read(O.viewModel,can$2.compute.read.reads(ce),{readCompute:!1}).value,fe===void 0&&(fe=can$2.getObject(ce)),typeof fe=="string"?fe:(U=fe,""))}),Q=Y.split(/\s+/g),ne=Q.pop();return{processor:this.processors[ne]||this.processors.click,parts:[Y,Q.join(" "),ne],delegate:U||void 0}},this);var G=function(U,Y){D._bindings.control[B](D.element),D._bindings.control[B]=Y.processor(Y.delegate||D.element,Y.parts[2],Y.parts[1],B,D)};return q.bind("change",G),D._bindings.readyComputes[B]={compute:q,handler:G},q()}else return can$2.Control._action.apply(this,arguments)}},{setup:function(B,O){return this.scope=O.scope,this.viewModel=O.viewModel,can$2.Control.prototype.setup.call(this,B,O)},off:function(){this._bindings&&can$2.each(this._bindings.readyComputes||{},function(B){B.compute.unbind("change",B.handler)}),can$2.Control.prototype.off.apply(this,arguments),this._bindings.readyComputes={}},destroy:function(){can$2.Control.prototype.destroy.apply(this,arguments),typeof this.options.destroy=="function"&&this.options.destroy.apply(this,arguments)}}),$=can$2.$;$.fn&&($.fn.scope=$.fn.viewModel=function(){return can$2.viewModel.apply(can$2,[this].concat(can$2.makeArray(arguments)))});/*!
  * CanJS - 2.3.34
  * http://canjs.com/
  * Copyright (c) 2018 Bitovi
  * Mon, 30 Apr 2018 20:56:51 GMT
  * Licensed MIT
  */var can=util,can_1=can;const can$1=getDefaultExportFromCjs(can_1);var __defProp$1=Object.defineProperty,__getOwnPropDesc$1=Object.getOwnPropertyDescriptor,__decorateClass$1=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc$1(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp$1(O,D,q),q};exports.AwcCanControl=class extends s{constructor(){super(...arguments),this.name="",this.options={},this._canInstance=null}connectedCallback(){super.connectedCallback(),document.addEventListener("DOMContentLoaded",this._setupCanControl.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this._automaticallyDestroyComponent()}updated(O){super.updated(O),O.has("name")&&this._setupCanControl()}_setupCanControl(){if(!this.name)return;const O=can$1.Control.extend({},{});O&&(this._canInstance=new O(this,this.options))}_automaticallyDestroyComponent(){this._canInstance&&typeof this._canInstance.destroy=="function"&&this._canInstance.destroy()}createRenderRoot(){return this}render(){return x`<slot></slot>`}},__decorateClass$1([n({type:String,reflect:!0})],exports.AwcCanControl.prototype,"name",2),__decorateClass$1([n({type:Object})],exports.AwcCanControl.prototype,"options",2),__decorateClass$1([r$1()],exports.AwcCanControl.prototype,"_canInstance",2),exports.AwcCanControl=__decorateClass$1([t$1("awc-can-control")],exports.AwcCanControl);var __defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__decorateClass=(B,O,D,F)=>{for(var q=F>1?void 0:F?__getOwnPropDesc(O,D):O,G=B.length-1,U;G>=0;G--)(U=B[G])&&(q=(F?U(O,D,q):U(q))||q);return F&&q&&__defProp(O,D,q),q};return exports.AwcVueMounter=class extends s{constructor(){super(...arguments),this.name="",this.options={},this.type="construct"}createVueInstance(){const O=this.getVueConstructor(this.name),D=Vue.component(this.name);if(!O&&this.type!=="component")throw new Error(`Vue constructor "${this.name}" not found on window object.`);switch(this.type){case"closure":if(!O)throw new Error(`Cannot create Vue instance via closure: constructor "${this.name}" is not found.`);this.vueInstance=this.createViaClosure(O);break;case"construct":if(!O)throw new Error(`Cannot create Vue instance via construct: constructor "${this.name}" is not found.`);this.vueInstance=this.createViaConstruct(O);break;case"component":if(!D)throw new Error(`Vue component "${this.name}" not found globally.`);this.vueInstance=this.createViaComponent(D);break;default:throw new Error(`Invalid type "${this.type}". Expected "construct", "closure", or "component".`)}if(!this.vueInstance)throw new Error("Vue instance could not be created.");this.vueInstance.$mount(this.renderRoot.querySelector("#vue-root"))}getVueConstructor(O){return O.split(".").reduce((D,F)=>D?D[F]:void 0,window)}createViaConstruct(O){return new O({data:this.options})}createViaClosure(O){const D=this.closure(this.options);return new O({data:D})}createViaComponent(O){return new O({propsData:this.options})}closure(O){return{...O}}connectedCallback(){super.connectedCallback(),document.addEventListener("DOMContentLoaded",()=>this.createVueInstance())}disconnectedCallback(){super.disconnectedCallback(),this.vueInstance&&this.vueInstance.$destroy()}updated(O){super.updated(O),this.createVueInstance()}createRenderRoot(){return this}render(){return x`<div id="vue-root"></div>`}},__decorateClass([n({type:String,reflect:!0})],exports.AwcVueMounter.prototype,"name",2),__decorateClass([n({type:Object})],exports.AwcVueMounter.prototype,"options",2),__decorateClass([n({type:String,reflect:!0})],exports.AwcVueMounter.prototype,"type",2),exports.AwcVueMounter=__decorateClass([t$1("awc-vue-mounter")],exports.AwcVueMounter),Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),exports}({});
 