var index=function(exports){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Xr;const t$3=globalThis,e$9=t$3.ShadowRoot&&(t$3.ShadyCSS===void 0||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$6=new WeakMap;let n$3=class{constructor(O,B,F){if(this._$cssResult$=!0,F!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=O,this.t=B}get styleSheet(){let O=this.o;const B=this.t;if(e$9&&O===void 0){const F=B!==void 0&&B.length===1;F&&(O=o$6.get(B)),O===void 0&&((this.o=O=new CSSStyleSheet).replaceSync(this.cssText),F&&o$6.set(B,O))}return O}toString(){return this.cssText}};const r$6=D=>new n$3(typeof D=="string"?D:D+"",void 0,s$2),i$4=(D,...O)=>{const B=D.length===1?D[0]:O.reduce((F,z,G)=>F+(U=>{if(U._$cssResult$===!0)return U.cssText;if(typeof U=="number")return U;throw Error("Value passed to 'css' function must be a 'css' function result: "+U+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(z)+D[G+1],D[0]);return new n$3(B,D,s$2)},S$1=(D,O)=>{if(e$9)D.adoptedStyleSheets=O.map(B=>B instanceof CSSStyleSheet?B:B.styleSheet);else for(const B of O){const F=document.createElement("style"),z=t$3.litNonce;z!==void 0&&F.setAttribute("nonce",z),F.textContent=B.cssText,D.appendChild(F)}},c$2=e$9?D=>D:D=>D instanceof CSSStyleSheet?(O=>{let B="";for(const F of O.cssRules)B+=F.cssText;return r$6(B)})(D):D;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$3,defineProperty:e$8,getOwnPropertyDescriptor:r$5,getOwnPropertyNames:h$1,getOwnPropertySymbols:o$5,getPrototypeOf:n$2}=Object,a$2=globalThis,c$1=a$2.trustedTypes,l$3=c$1?c$1.emptyScript:"",p$1=a$2.reactiveElementPolyfillSupport,d$1=(D,O)=>D,u$3={toAttribute(D,O){switch(O){case Boolean:D=D?l$3:null;break;case Object:case Array:D=D==null?D:JSON.stringify(D)}return D},fromAttribute(D,O){let B=D;switch(O){case Boolean:B=D!==null;break;case Number:B=D===null?null:Number(D);break;case Object:case Array:try{B=JSON.parse(D)}catch{B=null}}return B}},f$2=(D,O)=>!i$3(D,O),y$1={attribute:!0,type:String,converter:u$3,reflect:!1,hasChanged:f$2};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),a$2.litPropertyMetadata??(a$2.litPropertyMetadata=new WeakMap);let b$1=class extends HTMLElement{static addInitializer(O){this._$Ei(),(this.l??(this.l=[])).push(O)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(O,B=y$1){if(B.state&&(B.attribute=!1),this._$Ei(),this.elementProperties.set(O,B),!B.noAccessor){const F=Symbol(),z=this.getPropertyDescriptor(O,F,B);z!==void 0&&e$8(this.prototype,O,z)}}static getPropertyDescriptor(O,B,F){const{get:z,set:G}=r$5(this.prototype,O)??{get(){return this[B]},set(U){this[B]=U}};return{get(){return z==null?void 0:z.call(this)},set(U){const Y=z==null?void 0:z.call(this);G.call(this,U),this.requestUpdate(O,Y,F)},configurable:!0,enumerable:!0}}static getPropertyOptions(O){return this.elementProperties.get(O)??y$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const O=n$2(this);O.finalize(),O.l!==void 0&&(this.l=[...O.l]),this.elementProperties=new Map(O.elementProperties)}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const B=this.properties,F=[...h$1(B),...o$5(B)];for(const z of F)this.createProperty(z,B[z])}const O=this[Symbol.metadata];if(O!==null){const B=litPropertyMetadata.get(O);if(B!==void 0)for(const[F,z]of B)this.elementProperties.set(F,z)}this._$Eh=new Map;for(const[B,F]of this.elementProperties){const z=this._$Eu(B,F);z!==void 0&&this._$Eh.set(z,B)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(O){const B=[];if(Array.isArray(O)){const F=new Set(O.flat(1/0).reverse());for(const z of F)B.unshift(c$2(z))}else O!==void 0&&B.push(c$2(O));return B}static _$Eu(O,B){const F=B.attribute;return F===!1?void 0:typeof F=="string"?F:typeof O=="string"?O.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var O;this._$ES=new Promise(B=>this.enableUpdating=B),this._$AL=new Map,this._$E_(),this.requestUpdate(),(O=this.constructor.l)==null||O.forEach(B=>B(this))}addController(O){var B;(this._$EO??(this._$EO=new Set)).add(O),this.renderRoot!==void 0&&this.isConnected&&((B=O.hostConnected)==null||B.call(O))}removeController(O){var B;(B=this._$EO)==null||B.delete(O)}_$E_(){const O=new Map,B=this.constructor.elementProperties;for(const F of B.keys())this.hasOwnProperty(F)&&(O.set(F,this[F]),delete this[F]);O.size>0&&(this._$Ep=O)}createRenderRoot(){const O=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(O,this.constructor.elementStyles),O}connectedCallback(){var O;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(O=this._$EO)==null||O.forEach(B=>{var F;return(F=B.hostConnected)==null?void 0:F.call(B)})}enableUpdating(O){}disconnectedCallback(){var O;(O=this._$EO)==null||O.forEach(B=>{var F;return(F=B.hostDisconnected)==null?void 0:F.call(B)})}attributeChangedCallback(O,B,F){this._$AK(O,F)}_$EC(O,B){var G;const F=this.constructor.elementProperties.get(O),z=this.constructor._$Eu(O,F);if(z!==void 0&&F.reflect===!0){const U=(((G=F.converter)==null?void 0:G.toAttribute)!==void 0?F.converter:u$3).toAttribute(B,F.type);this._$Em=O,U==null?this.removeAttribute(z):this.setAttribute(z,U),this._$Em=null}}_$AK(O,B){var G;const F=this.constructor,z=F._$Eh.get(O);if(z!==void 0&&this._$Em!==z){const U=F.getPropertyOptions(z),Y=typeof U.converter=="function"?{fromAttribute:U.converter}:((G=U.converter)==null?void 0:G.fromAttribute)!==void 0?U.converter:u$3;this._$Em=z,this[z]=Y.fromAttribute(B,U.type),this._$Em=null}}requestUpdate(O,B,F){if(O!==void 0){if(F??(F=this.constructor.getPropertyOptions(O)),!(F.hasChanged??f$2)(this[O],B))return;this.P(O,B,F)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(O,B,F){this._$AL.has(O)||this._$AL.set(O,B),F.reflect===!0&&this._$Em!==O&&(this._$Ej??(this._$Ej=new Set)).add(O)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(B){Promise.reject(B)}const O=this.scheduleUpdate();return O!=null&&await O,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var F;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[G,U]of this._$Ep)this[G]=U;this._$Ep=void 0}const z=this.constructor.elementProperties;if(z.size>0)for(const[G,U]of z)U.wrapped!==!0||this._$AL.has(G)||this[G]===void 0||this.P(G,this[G],U)}let O=!1;const B=this._$AL;try{O=this.shouldUpdate(B),O?(this.willUpdate(B),(F=this._$EO)==null||F.forEach(z=>{var G;return(G=z.hostUpdate)==null?void 0:G.call(z)}),this.update(B)):this._$EU()}catch(z){throw O=!1,this._$EU(),z}O&&this._$AE(B)}willUpdate(O){}_$AE(O){var B;(B=this._$EO)==null||B.forEach(F=>{var z;return(z=F.hostUpdated)==null?void 0:z.call(F)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(O)),this.updated(O)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(O){return!0}update(O){this._$Ej&&(this._$Ej=this._$Ej.forEach(B=>this._$EC(B,this[B]))),this._$EU()}updated(O){}firstUpdated(O){}};b$1.elementStyles=[],b$1.shadowRootOptions={mode:"open"},b$1[d$1("elementProperties")]=new Map,b$1[d$1("finalized")]=new Map,p$1==null||p$1({ReactiveElement:b$1}),(a$2.reactiveElementVersions??(a$2.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t$2=globalThis,i$2=t$2.trustedTypes,s$1=i$2?i$2.createPolicy("lit-html",{createHTML:D=>D}):void 0,e$7="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,o$4="?"+h,n$1=`<${o$4}>`,r$4=document,l$2=()=>r$4.createComment(""),c=D=>D===null||typeof D!="object"&&typeof D!="function",a$1=Array.isArray,u$2=D=>a$1(D)||typeof(D==null?void 0:D[Symbol.iterator])=="function",d=`[ 	
\f\r]`,f$1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m$1=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$$3=/^(?:script|style|textarea|title)$/i,y=D=>(O,...B)=>({_$litType$:D,strings:O,values:B}),x=y(1),b=y(2),w=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r$4.createTreeWalker(r$4,129);function C(D,O){if(!Array.isArray(D)||!D.hasOwnProperty("raw"))throw Error("invalid template strings array");return s$1!==void 0?s$1.createHTML(O):O}const P=(D,O)=>{const B=D.length-1,F=[];let z,G=O===2?"<svg>":"",U=f$1;for(let Y=0;Y<B;Y++){const Q=D[Y];let ne,oe,ce=-1,fe=0;for(;fe<Q.length&&(U.lastIndex=fe,oe=U.exec(Q),oe!==null);)fe=U.lastIndex,U===f$1?oe[1]==="!--"?U=v:oe[1]!==void 0?U=_:oe[2]!==void 0?($$3.test(oe[2])&&(z=RegExp("</"+oe[2],"g")),U=m$1):oe[3]!==void 0&&(U=m$1):U===m$1?oe[0]===">"?(U=z??f$1,ce=-1):oe[1]===void 0?ce=-2:(ce=U.lastIndex-oe[2].length,ne=oe[1],U=oe[3]===void 0?m$1:oe[3]==='"'?g:p):U===g||U===p?U=m$1:U===v||U===_?U=f$1:(U=m$1,z=void 0);const we=U===m$1&&D[Y+1].startsWith("/>")?" ":"";G+=U===f$1?Q+n$1:ce>=0?(F.push(ne),Q.slice(0,ce)+e$7+Q.slice(ce)+h+we):Q+h+(ce===-2?Y:we)}return[C(D,G+(D[B]||"<?>")+(O===2?"</svg>":"")),F]};class V{constructor({strings:O,_$litType$:B},F){let z;this.parts=[];let G=0,U=0;const Y=O.length-1,Q=this.parts,[ne,oe]=P(O,B);if(this.el=V.createElement(ne,F),E.currentNode=this.el.content,B===2){const ce=this.el.content.firstChild;ce.replaceWith(...ce.childNodes)}for(;(z=E.nextNode())!==null&&Q.length<Y;){if(z.nodeType===1){if(z.hasAttributes())for(const ce of z.getAttributeNames())if(ce.endsWith(e$7)){const fe=oe[U++],we=z.getAttribute(ce).split(h),X=/([.?@])?(.*)/.exec(fe);Q.push({type:1,index:G,name:X[2],strings:we,ctor:X[1]==="."?k:X[1]==="?"?H:X[1]==="@"?I:R}),z.removeAttribute(ce)}else ce.startsWith(h)&&(Q.push({type:6,index:G}),z.removeAttribute(ce));if($$3.test(z.tagName)){const ce=z.textContent.split(h),fe=ce.length-1;if(fe>0){z.textContent=i$2?i$2.emptyScript:"";for(let we=0;we<fe;we++)z.append(ce[we],l$2()),E.nextNode(),Q.push({type:2,index:++G});z.append(ce[fe],l$2())}}}else if(z.nodeType===8)if(z.data===o$4)Q.push({type:2,index:G});else{let ce=-1;for(;(ce=z.data.indexOf(h,ce+1))!==-1;)Q.push({type:7,index:G}),ce+=h.length-1}G++}}static createElement(O,B){const F=r$4.createElement("template");return F.innerHTML=O,F}}function N(D,O,B=D,F){var U,Y;if(O===w)return O;let z=F!==void 0?(U=B._$Co)==null?void 0:U[F]:B._$Cl;const G=c(O)?void 0:O._$litDirective$;return(z==null?void 0:z.constructor)!==G&&((Y=z==null?void 0:z._$AO)==null||Y.call(z,!1),G===void 0?z=void 0:(z=new G(D),z._$AT(D,B,F)),F!==void 0?(B._$Co??(B._$Co=[]))[F]=z:B._$Cl=z),z!==void 0&&(O=N(D,z._$AS(D,O.values),z,F)),O}class S{constructor(O,B){this._$AV=[],this._$AN=void 0,this._$AD=O,this._$AM=B}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(O){const{el:{content:B},parts:F}=this._$AD,z=((O==null?void 0:O.creationScope)??r$4).importNode(B,!0);E.currentNode=z;let G=E.nextNode(),U=0,Y=0,Q=F[0];for(;Q!==void 0;){if(U===Q.index){let ne;Q.type===2?ne=new M(G,G.nextSibling,this,O):Q.type===1?ne=new Q.ctor(G,Q.name,Q.strings,this,O):Q.type===6&&(ne=new L(G,this,O)),this._$AV.push(ne),Q=F[++Y]}U!==(Q==null?void 0:Q.index)&&(G=E.nextNode(),U++)}return E.currentNode=r$4,z}p(O){let B=0;for(const F of this._$AV)F!==void 0&&(F.strings!==void 0?(F._$AI(O,F,B),B+=F.strings.length-2):F._$AI(O[B])),B++}}class M{get _$AU(){var O;return((O=this._$AM)==null?void 0:O._$AU)??this._$Cv}constructor(O,B,F,z){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=O,this._$AB=B,this._$AM=F,this.options=z,this._$Cv=(z==null?void 0:z.isConnected)??!0}get parentNode(){let O=this._$AA.parentNode;const B=this._$AM;return B!==void 0&&(O==null?void 0:O.nodeType)===11&&(O=B.parentNode),O}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(O,B=this){O=N(this,O,B),c(O)?O===T||O==null||O===""?(this._$AH!==T&&this._$AR(),this._$AH=T):O!==this._$AH&&O!==w&&this._(O):O._$litType$!==void 0?this.$(O):O.nodeType!==void 0?this.T(O):u$2(O)?this.k(O):this._(O)}S(O){return this._$AA.parentNode.insertBefore(O,this._$AB)}T(O){this._$AH!==O&&(this._$AR(),this._$AH=this.S(O))}_(O){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=O:this.T(r$4.createTextNode(O)),this._$AH=O}$(O){var G;const{values:B,_$litType$:F}=O,z=typeof F=="number"?this._$AC(O):(F.el===void 0&&(F.el=V.createElement(C(F.h,F.h[0]),this.options)),F);if(((G=this._$AH)==null?void 0:G._$AD)===z)this._$AH.p(B);else{const U=new S(z,this),Y=U.u(this.options);U.p(B),this.T(Y),this._$AH=U}}_$AC(O){let B=A.get(O.strings);return B===void 0&&A.set(O.strings,B=new V(O)),B}k(O){a$1(this._$AH)||(this._$AH=[],this._$AR());const B=this._$AH;let F,z=0;for(const G of O)z===B.length?B.push(F=new M(this.S(l$2()),this.S(l$2()),this,this.options)):F=B[z],F._$AI(G),z++;z<B.length&&(this._$AR(F&&F._$AB.nextSibling,z),B.length=z)}_$AR(O=this._$AA.nextSibling,B){var F;for((F=this._$AP)==null?void 0:F.call(this,!1,!0,B);O&&O!==this._$AB;){const z=O.nextSibling;O.remove(),O=z}}setConnected(O){var B;this._$AM===void 0&&(this._$Cv=O,(B=this._$AP)==null||B.call(this,O))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(O,B,F,z,G){this.type=1,this._$AH=T,this._$AN=void 0,this.element=O,this.name=B,this._$AM=z,this.options=G,F.length>2||F[0]!==""||F[1]!==""?(this._$AH=Array(F.length-1).fill(new String),this.strings=F):this._$AH=T}_$AI(O,B=this,F,z){const G=this.strings;let U=!1;if(G===void 0)O=N(this,O,B,0),U=!c(O)||O!==this._$AH&&O!==w,U&&(this._$AH=O);else{const Y=O;let Q,ne;for(O=G[0],Q=0;Q<G.length-1;Q++)ne=N(this,Y[F+Q],B,Q),ne===w&&(ne=this._$AH[Q]),U||(U=!c(ne)||ne!==this._$AH[Q]),ne===T?O=T:O!==T&&(O+=(ne??"")+G[Q+1]),this._$AH[Q]=ne}U&&!z&&this.j(O)}j(O){O===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,O??"")}}class k extends R{constructor(){super(...arguments),this.type=3}j(O){this.element[this.name]=O===T?void 0:O}}class H extends R{constructor(){super(...arguments),this.type=4}j(O){this.element.toggleAttribute(this.name,!!O&&O!==T)}}class I extends R{constructor(O,B,F,z,G){super(O,B,F,z,G),this.type=5}_$AI(O,B=this){if((O=N(this,O,B,0)??T)===w)return;const F=this._$AH,z=O===T&&F!==T||O.capture!==F.capture||O.once!==F.once||O.passive!==F.passive,G=O!==T&&(F===T||z);z&&this.element.removeEventListener(this.name,this,F),G&&this.element.addEventListener(this.name,this,O),this._$AH=O}handleEvent(O){var B;typeof this._$AH=="function"?this._$AH.call(((B=this.options)==null?void 0:B.host)??this.element,O):this._$AH.handleEvent(O)}}class L{constructor(O,B,F){this.element=O,this.type=6,this._$AN=void 0,this._$AM=B,this.options=F}get _$AU(){return this._$AM._$AU}_$AI(O){N(this,O)}}const Z=t$2.litHtmlPolyfillSupport;Z==null||Z(V,M),(t$2.litHtmlVersions??(t$2.litHtmlVersions=[])).push("3.1.4");const j=(D,O,B)=>{const F=(B==null?void 0:B.renderBefore)??O;let z=F._$litPart$;if(z===void 0){const G=(B==null?void 0:B.renderBefore)??null;F._$litPart$=z=new M(O.insertBefore(l$2(),G),G,void 0,B??{})}return z._$AI(D),z};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class s extends b$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var B;const O=super.createRenderRoot();return(B=this.renderOptions).renderBefore??(B.renderBefore=O.firstChild),O}update(O){const B=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(O),this._$Do=j(B,this.renderRoot,this.renderOptions)}connectedCallback(){var O;super.connectedCallback(),(O=this._$Do)==null||O.setConnected(!0)}disconnectedCallback(){var O;super.disconnectedCallback(),(O=this._$Do)==null||O.setConnected(!1)}render(){return w}}s._$litElement$=!0,s.finalized=!0,(Xr=globalThis.litElementHydrateSupport)==null||Xr.call(globalThis,{LitElement:s});const r$3=globalThis.litElementPolyfillSupport;r$3==null||r$3({LitElement:s}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t$1=D=>(O,B)=>{B!==void 0?B.addInitializer(()=>{customElements.define(D,O)}):customElements.define(D,O)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$3={attribute:!0,type:String,converter:u$3,reflect:!1,hasChanged:f$2},r$2=(D=o$3,O,B)=>{const{kind:F,metadata:z}=B;let G=globalThis.litPropertyMetadata.get(z);if(G===void 0&&globalThis.litPropertyMetadata.set(z,G=new Map),G.set(B.name,D),F==="accessor"){const{name:U}=B;return{set(Y){const Q=O.get.call(this);O.set.call(this,Y),this.requestUpdate(U,Q,D)},init(Y){return Y!==void 0&&this.P(U,void 0,D),Y}}}if(F==="setter"){const{name:U}=B;return function(Y){const Q=this[U];O.call(this,Y),this.requestUpdate(U,Q,D)}}throw Error("Unsupported decorator location: "+F)};function n(D){return(O,B)=>typeof B=="object"?r$2(D,O,B):((F,z,G)=>{const U=z.hasOwnProperty(G);return z.constructor.createProperty(G,U?{...F,wrapped:!0}:F),U?Object.getOwnPropertyDescriptor(z,G):void 0})(D,O,B)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r$1(D){return n({...D,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$6=(D,O,B)=>(B.configurable=!0,B.enumerable=!0,Reflect.decorate&&typeof O!="object"&&Object.defineProperty(D,O,B),B);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$5(D,O){return(B,F,z)=>{const G=U=>{var Y;return((Y=U.renderRoot)==null?void 0:Y.querySelector(D))??null};return e$6(B,F,{get(){return G(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let e$4;function r(D){return(O,B)=>e$6(O,B,{get(){return(this.renderRoot??e$4??(e$4=document.createDocumentFragment())).querySelectorAll(D)}})}const tabStyle=i$4`
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
`;var __defProp$$=Object.defineProperty,__getOwnPropDesc$$=Object.getOwnPropertyDescriptor,__decorateClass$$=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$$(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$$(O,B,z),z};const awcTabTag="awc-tab";exports.AwcTab=class extends s{constructor(){super(...arguments),this.active=!1}_handleTabClick(){this.active=!this.active,this._onChange()}_onChange(){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}render(){return x`
      <span class="awc-tab" ?active=${this.active} @click=${this._handleTabClick}><slot></slot></span>
    `}},exports.AwcTab.styles=[tabStyle],__decorateClass$$([n({type:Boolean,reflect:!0})],exports.AwcTab.prototype,"active",2),exports.AwcTab=__decorateClass$$([t$1(awcTabTag)],exports.AwcTab);const tabsGroupStyle=i$4`
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
`;var __defProp$_=Object.defineProperty,__getOwnPropDesc$_=Object.getOwnPropertyDescriptor,__decorateClass$_=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$_(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$_(O,B,z),z};const awcTabsGroupTag="awc-tabs-group";exports.AwcTabsGroup=class extends s{constructor(){super(...arguments),this.noDivider=!1}get tabs(){return[...this.querySelectorAll(awcTabTag)]}_handleTabClick(O){const B=O.target;this.tabs.forEach(F=>{F.active=!1}),B.active=!0}render(){return x`
      <div class="awc-tabs-container" >
        <slot @click=${this._handleTabClick}></slot>
      </div>
      ${this.noDivider?"":x`<awc-divider spacing="none"></awc-divider>`}
    `}},exports.AwcTabsGroup.styles=[tabsGroupStyle],__decorateClass$_([n({type:Boolean,reflect:!0,attribute:"no-divider"})],exports.AwcTabsGroup.prototype,"noDivider",2),exports.AwcTabsGroup=__decorateClass$_([t$1(awcTabsGroupTag)],exports.AwcTabsGroup);let isDOMReady=!1;const readyCallbacks=[];function onDOMReady(D){isDOMReady?D():readyCallbacks.push(D)}document.addEventListener("DOMContentLoaded",()=>{isDOMReady=!0,readyCallbacks.forEach(D=>D())});const segmentSwitcherItemStyle=i$4`
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
 */const o$2=D=>D??T;function dispatcher(D,O){return function(B,F){const z=new CustomEvent(O,{detail:B,bubbles:!0,cancelable:!1,composed:!0,...F});return D.dispatchEvent(z),z}}function event(D){return(O,B)=>{Object.defineProperty(O,B,{get(){return dispatcher(this,D||B)},enumerable:!0,configurable:!0})}}var __defProp$Z=Object.defineProperty,__getOwnPropDesc$Z=Object.getOwnPropertyDescriptor,__decorateClass$Z=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$Z(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$Z(O,B,z),z};const AwcSegmentSwitcherItemTag="awc-segment-switcher-item";exports.AwcSegmentSwitcherItem=class extends s{constructor(){super(...arguments),this.active=!1,this.target="_self"}update(O){super.update(O),O.has("active")&&this.active&&(this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this._handleActiveItem())}_handleActiveItem(){this._onChangeActive(this.active)}render(){return this.href?x`
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
    `}},exports.AwcSegmentSwitcherItem.styles=[segmentSwitcherItemStyle],__decorateClass$Z([n({type:String,reflect:!0})],exports.AwcSegmentSwitcherItem.prototype,"href",2),__decorateClass$Z([n({type:Boolean,reflect:!0})],exports.AwcSegmentSwitcherItem.prototype,"active",2),__decorateClass$Z([n({reflect:!0})],exports.AwcSegmentSwitcherItem.prototype,"target",2),__decorateClass$Z([event("awc-segment-item-change")],exports.AwcSegmentSwitcherItem.prototype,"_onChangeActive",2),exports.AwcSegmentSwitcherItem=__decorateClass$Z([t$1("awc-segment-switcher-item")],exports.AwcSegmentSwitcherItem);const segmentSwitcherStyle=i$4`
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
`;var __defProp$Y=Object.defineProperty,__getOwnPropDesc$Y=Object.getOwnPropertyDescriptor,__decorateClass$Y=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$Y(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$Y(O,B,z),z};exports.AwcSegmentSwitcher=class extends s{constructor(){super(...arguments),this.sliderPosition=0,this.sliderWidth=0}get segmentSwitcherItems(){return[...this.querySelectorAll(AwcSegmentSwitcherItemTag)]}connectedCallback(){super.connectedCallback(),onDOMReady(()=>{requestAnimationFrame(()=>this.updateSliderPosition())});const O=new MutationObserver(B=>{B.forEach(F=>{F.type==="attributes"&&F.attributeName==="active"&&this.updateSliderPosition()})});this.segmentSwitcherItems.forEach(B=>{O.observe(B,{attributes:!0})})}updated(O){super.updated(O),(O.has("sliderPosition")||O.has("sliderWidth"))&&this._toggleSliderVisibility()}handleSegmentItemClick(O){const B=O.target;B&&!B.active&&(this.segmentSwitcherItems.forEach(F=>F.active=!1),B.active=!0,this._setSliderPositionToActiveItem(B))}_setSliderPositionToActiveItem(O){this.segmentSwitcherItems.forEach(B=>B.active=!1),O.active=!0,O.active&&(this.sliderPosition=O.offsetLeft,this.sliderWidth=O.offsetWidth)}_toggleSliderVisibility(){this._slider&&(this._slider.addEventListener("transitionstart",()=>{this._slider.style.visibility="visible",this._slider.style.opacity="1"}),this._slider.addEventListener("transitionend",()=>{this._slider.style.visibility="hidden",this._slider.style.opacity="0"}))}updateSliderPosition(){const O=this.querySelector("awc-segment-switcher-item[active]");if(O){const B=O.getBoundingClientRect(),F=this.getBoundingClientRect();this.sliderPosition=B.left-F.left,this.sliderWidth=O.offsetWidth}}handleSegmentActive(O){const B=O.target;this.segmentSwitcherItems.forEach(F=>{F!==B&&F.active&&(F.active=!1)})}render(){return x`
      <div class='awc-segment-switcher'>
      <div class="slider" style="transform: translateX(${this.sliderPosition}px); width: ${this.sliderWidth}px;"></div>
        <slot 
        @click="${this.handleSegmentItemClick}"
        @awc-segment-item-change="${this.handleSegmentActive}"
        ></slot>
      </div>
    `}},exports.AwcSegmentSwitcher.styles=[segmentSwitcherStyle],__decorateClass$Y([r$1()],exports.AwcSegmentSwitcher.prototype,"sliderPosition",2),__decorateClass$Y([r$1()],exports.AwcSegmentSwitcher.prototype,"sliderWidth",2),__decorateClass$Y([e$5(".slider")],exports.AwcSegmentSwitcher.prototype,"_slider",2),exports.AwcSegmentSwitcher=__decorateClass$Y([t$1("awc-segment-switcher")],exports.AwcSegmentSwitcher);const alertStyle=i$4`
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
`;var __defProp$X=Object.defineProperty,__getOwnPropDesc$X=Object.getOwnPropertyDescriptor,__decorateClass$X=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$X(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$X(O,B,z),z};exports.AwcAlert=class extends s{constructor(){super(...arguments),this.color="primary",this.variant="block"}render(){return x`
      <div class="awc-alert">
        <p class="awc-alert__title"><slot></slot></p>
      </div>
    `}},exports.AwcAlert.styles=[alertStyle],__decorateClass$X([n({type:String,reflect:!0})],exports.AwcAlert.prototype,"color",2),__decorateClass$X([n({type:String,reflect:!0})],exports.AwcAlert.prototype,"variant",2),exports.AwcAlert=__decorateClass$X([t$1("awc-alert")],exports.AwcAlert);const avatarStyle=i$4`
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
 */const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$3=D=>(...O)=>({_$litDirective$:D,values:O});let i$1=class{constructor(O){}get _$AU(){return this._$AM._$AU}_$AT(O,B,F){this._$Ct=O,this._$AM=B,this._$Ci=F}_$AS(O,B){return this.update(O,B)}update(O,B){return this.render(...B)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$2=e$3(class extends i$1{constructor(D){var O;if(super(D),D.type!==t.ATTRIBUTE||D.name!=="class"||((O=D.strings)==null?void 0:O.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(D){return" "+Object.keys(D).filter(O=>D[O]).join(" ")+" "}update(D,[O]){var F,z;if(this.st===void 0){this.st=new Set,D.strings!==void 0&&(this.nt=new Set(D.strings.join(" ").split(/\s/).filter(G=>G!=="")));for(const G in O)O[G]&&!((F=this.nt)!=null&&F.has(G))&&this.st.add(G);return this.render(O)}const B=D.element.classList;for(const G of this.st)G in O||(B.remove(G),this.st.delete(G));for(const G in O){const U=!!O[G];U===this.st.has(G)||(z=this.nt)!=null&&z.has(G)||(U?(B.add(G),this.st.add(G)):(B.remove(G),this.st.delete(G)))}return w}});var __defProp$W=Object.defineProperty,__getOwnPropDesc$W=Object.getOwnPropertyDescriptor,__decorateClass$W=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$W(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$W(O,B,z),z},AvatarColor=(D=>(D.GlobalRed2600="global-red-2-600",D.GlobalRed2500="global-red-2-500",D.GlobalOrange500="global-orange-500",D.GlobalYellow500="global-yellow-500",D.GlobalYellow300="global-yellow-300",D.GlobalLightGreen400="global-light-green-400",D.GlobalLightGreen600="global-light-green-600",D.GlobalGreen600="global-green-600",D.GlobalGreen300="global-green-300",D.GlobalTurquoise300="global-turquoise-300",D.GlobalTurquoise400="global-turquoise-400",D.GlobalCyan300="global-cyan-300",D.GlobalCyan500="global-cyan-500",D.GlobalBlue600="global-blue-600",D.GlobalBlue400="global-blue-400",D.GlobalDeepPurple400="global-deep-purple-400",D.GlobalDeepPurple600="global-deep-purple-600",D.GlobalPurple600="global-purple-600",D.GlobalPurple400="global-purple-400",D.GlobalRed500="global-red-500",D.GlobalRed400="global-red-400",D.ColorsLightSecondary="colors-light-secondary",D.ColorsLightText="colors-light-text",D.ColorsLightDarkBlue="colors-light-dark-blue",D))(AvatarColor||{}),AvatarIcon=(D=>(D.none="none",D.robot="robot",D.user="user",D.group="group",D.deleted="deleted",D.anonymous="anonymous",D.undefinded="undefinded",D))(AvatarIcon||{});const ICONS={anonymous:b`
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
      >`}render(){const O={"awc-avatar-container":!0},B=b`
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
                ${this.status==="complete"?x`${B}`:""}
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
                ${this.status==="complete"?x`${B}`:""}
                ${this.status==="fail"?x`${F}`:""}
              </div>
            `:x``}
      </div>
    `}},exports.AwcAvatar.styles=[avatarStyle],__decorateClass$W([n({type:String,reflect:!0})],exports.AwcAvatar.prototype,"size",2),__decorateClass$W([n({type:String,reflect:!0})],exports.AwcAvatar.prototype,"rounded",2),__decorateClass$W([n({type:String,reflect:!0})],exports.AwcAvatar.prototype,"status",2),__decorateClass$W([n({type:String,reflect:!0})],exports.AwcAvatar.prototype,"color",2),__decorateClass$W([n({type:String,reflect:!0})],exports.AwcAvatar.prototype,"title",2),__decorateClass$W([n({type:String,attribute:"image-link"})],exports.AwcAvatar.prototype,"imageLink",2),__decorateClass$W([n({type:String,reflect:!0})],exports.AwcAvatar.prototype,"href",2),__decorateClass$W([n({type:String})],exports.AwcAvatar.prototype,"target",2),__decorateClass$W([n({type:String,reflect:!0,attribute:"custom-color"})],exports.AwcAvatar.prototype,"customColor",2),__decorateClass$W([n({type:String,reflect:!0})],exports.AwcAvatar.prototype,"icon",2),__decorateClass$W([n({type:Boolean,reflect:!0})],exports.AwcAvatar.prototype,"sliced",2),__decorateClass$W([n({type:Boolean,reflect:!0})],exports.AwcAvatar.prototype,"hidden",2),__decorateClass$W([r$1()],exports.AwcAvatar.prototype,"_croppedTitle",2),exports.AwcAvatar=__decorateClass$W([t$1(awcAvatarTag)],exports.AwcAvatar);const avatarGroupStyle=i$4`
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
`;var __defProp$V=Object.defineProperty,__getOwnPropDesc$V=Object.getOwnPropertyDescriptor,__decorateClass$V=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$V(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$V(O,B,z),z};const awcAvatarGroupCounterTag="awc-avatar-group-counter";exports.AwcAvatarGroupCounter=class extends s{constructor(){super(...arguments),this.totalUsers=0,this.counterSize="24",this.counterRounded="circle"}render(){return x`
            <div class="awc-avatar-group__counter size_${this.counterSize} ${this.counterRounded}">
                <p>+${this.totalUsers}</p>
            </div>
        `}},exports.AwcAvatarGroupCounter.styles=[avatarCounterStyle],__decorateClass$V([n({type:Number,attribute:"total-users"})],exports.AwcAvatarGroupCounter.prototype,"totalUsers",2),__decorateClass$V([n({type:String,attribute:"counter-size"})],exports.AwcAvatarGroupCounter.prototype,"counterSize",2),__decorateClass$V([n({attribute:"counter-rounded"})],exports.AwcAvatarGroupCounter.prototype,"counterRounded",2),exports.AwcAvatarGroupCounter=__decorateClass$V([t$1(awcAvatarGroupCounterTag)],exports.AwcAvatarGroupCounter);var __defProp$U=Object.defineProperty,__getOwnPropDesc$U=Object.getOwnPropertyDescriptor,__decorateClass$U=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$U(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$U(O,B,z),z};const awcAvatarGroupTag="awc-avatar-group";exports.AwcAvatarGroup=class extends s{constructor(){super(...arguments),this.displayUsers=2,this.totalUsers=0,this.counterSize="24",this.counterRounded="circle",this._counterValue=0,this._counterHidden=!1}get avatars(){return Array.from(this.querySelectorAll(awcAvatarTag))}get avatarCounter(){return this.querySelector(awcAvatarGroupCounterTag)}_updateDisplayedUsers(){var B,F;const O=(F=(B=this.shadowRoot)==null?void 0:B.querySelector("slot"))==null?void 0:F.assignedElements();O&&O.forEach((z,G)=>{z.hidden=G>=this.displayUsers})}_updateCounterValue(){this.avatarCounter?this._counterHidden=this._counterValue===0:(this._counterValue=Math.max(0,this.totalUsers-this.displayUsers),this._counterHidden=this._counterValue===0)}_applySliceEffect(){var B,F;const O=(F=(B=this.shadowRoot)==null?void 0:B.querySelector("slot"))==null?void 0:F.assignedElements();O&&O.forEach((z,G)=>{z.sliced=G!==0})}connectedCallback(){super.connectedCallback(),document.addEventListener("DOMContentLoaded",()=>{this._applySliceEffect(),this._updateDisplayedUsers(),this._updateCounterValue()})}updated(O){(O.has("displayUsers")||O.has("totalUsers"))&&(this._updateDisplayedUsers(),this._updateCounterValue()),this._applySliceEffect()}render(){return x`
      <div class="awc-avatar-group">
        <slot></slot>
        ${this._counterHidden?"":x`
          <div class="awc-avatar-group__counter size_${this.counterSize} ${this.counterRounded}">
            <p>+${this._counterValue}</p>
          </div>`}
            <slot name="awc-avatar-group-counter"></slot>
      </div>
    `}},exports.AwcAvatarGroup.styles=[avatarGroupStyle],__decorateClass$U([n({type:Number,attribute:"display-users"})],exports.AwcAvatarGroup.prototype,"displayUsers",2),__decorateClass$U([n({type:Number,attribute:"total-users"})],exports.AwcAvatarGroup.prototype,"totalUsers",2),__decorateClass$U([n({type:String,attribute:"counter-size"})],exports.AwcAvatarGroup.prototype,"counterSize",2),__decorateClass$U([n({type:String,attribute:"counter-rounded"})],exports.AwcAvatarGroup.prototype,"counterRounded",2),__decorateClass$U([r$1()],exports.AwcAvatarGroup.prototype,"_counterValue",2),__decorateClass$U([r$1()],exports.AwcAvatarGroup.prototype,"_counterHidden",2),exports.AwcAvatarGroup=__decorateClass$U([t$1(awcAvatarGroupTag)],exports.AwcAvatarGroup);const badgeStyle=i$4`
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
`;var __defProp$T=Object.defineProperty,__getOwnPropDesc$T=Object.getOwnPropertyDescriptor,__decorateClass$T=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$T(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$T(O,B,z),z};exports.AwcBadge=class extends s{constructor(){super(...arguments),this.color="primary"}render(){return x` <span class="awc-badge ${this.color}"></span> `}},exports.AwcBadge.styles=[badgeStyle],__decorateClass$T([n({type:String,reflect:!0})],exports.AwcBadge.prototype,"color",2),exports.AwcBadge=__decorateClass$T([t$1("awc-badge")],exports.AwcBadge);const counterStyle=i$4`
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
`;var __defProp$S=Object.defineProperty,__getOwnPropDesc$S=Object.getOwnPropertyDescriptor,__decorateClass$S=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$S(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$S(O,B,z),z};exports.AwcCounter=class extends s{constructor(){super(...arguments),this.value=1}_checkMaxValue(){return!Number.isInteger(this.value)||this.value<=0?"":this.value>99?"99+":this.value.toString()}update(O){super.update(O),this._checkMaxValue()}render(){const O=this._checkMaxValue();return x`
      <span class="awc-counter" value=${this.value}>${O}</span>
    `}},exports.AwcCounter.styles=[counterStyle],__decorateClass$S([n({type:Number,reflect:!0})],exports.AwcCounter.prototype,"value",2),exports.AwcCounter=__decorateClass$S([t$1("awc-counter")],exports.AwcCounter);const toolbarButtonStyle=i$4`
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
`;var __defProp$R=Object.defineProperty,__getOwnPropDesc$R=Object.getOwnPropertyDescriptor,__decorateClass$R=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$R(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$R(O,B,z),z};exports.AwcToolbarButton=class extends s{render(){return x`
      <button
        type="button"
        tabindex="0" 
        class="awc-toolbar-button">
        <slot></slot>
      </button>
    `}},exports.AwcToolbarButton.styles=[toolbarButtonStyle],exports.AwcToolbarButton=__decorateClass$R([t$1("awc-toolbar-button")],exports.AwcToolbarButton);const toolbarGroupStyle=i$4`
    :host {
      display: inline-block;
    }

    .awc-toolbar-group{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 8px;
    }
`;var __defProp$Q=Object.defineProperty,__getOwnPropDesc$Q=Object.getOwnPropertyDescriptor,__decorateClass$Q=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$Q(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$Q(O,B,z),z};exports.AwcToolbarGroup=class extends s{render(){return x`
      <div class='awc-toolbar-group'>
            <slot></slot>
      </div>
    `}},exports.AwcToolbarGroup.styles=[toolbarGroupStyle],exports.AwcToolbarGroup=__decorateClass$Q([t$1("awc-toolbar-group")],exports.AwcToolbarGroup);const dropdownStyle=i$4`
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
`;var top$1="top",bottom="bottom",right="right",left="left",auto="auto",basePlacements=[top$1,bottom,right,left],start="start",end="end",clippingParents="clippingParents",viewport="viewport",popper="popper",reference="reference",variationPlacements=basePlacements.reduce(function(D,O){return D.concat([O+"-"+start,O+"-"+end])},[]),placements=[].concat(basePlacements,[auto]).reduce(function(D,O){return D.concat([O,O+"-"+start,O+"-"+end])},[]),beforeRead="beforeRead",read$2="read",afterRead="afterRead",beforeMain="beforeMain",main="main",afterMain="afterMain",beforeWrite="beforeWrite",write="write",afterWrite="afterWrite",modifierPhases=[beforeRead,read$2,afterRead,beforeMain,main,afterMain,beforeWrite,write,afterWrite];function getNodeName(D){return D?(D.nodeName||"").toLowerCase():null}function getWindow(D){if(D==null)return window;if(D.toString()!=="[object Window]"){var O=D.ownerDocument;return O&&O.defaultView||window}return D}function isElement(D){var O=getWindow(D).Element;return D instanceof O||D instanceof Element}function isHTMLElement(D){var O=getWindow(D).HTMLElement;return D instanceof O||D instanceof HTMLElement}function isShadowRoot(D){if(typeof ShadowRoot>"u")return!1;var O=getWindow(D).ShadowRoot;return D instanceof O||D instanceof ShadowRoot}function applyStyles(D){var O=D.state;Object.keys(O.elements).forEach(function(B){var F=O.styles[B]||{},z=O.attributes[B]||{},G=O.elements[B];!isHTMLElement(G)||!getNodeName(G)||(Object.assign(G.style,F),Object.keys(z).forEach(function(U){var Y=z[U];Y===!1?G.removeAttribute(U):G.setAttribute(U,Y===!0?"":Y)}))})}function effect$2(D){var O=D.state,B={popper:{position:O.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(O.elements.popper.style,B.popper),O.styles=B,O.elements.arrow&&Object.assign(O.elements.arrow.style,B.arrow),function(){Object.keys(O.elements).forEach(function(F){var z=O.elements[F],G=O.attributes[F]||{},U=Object.keys(O.styles.hasOwnProperty(F)?O.styles[F]:B[F]),Y=U.reduce(function(Q,ne){return Q[ne]="",Q},{});!isHTMLElement(z)||!getNodeName(z)||(Object.assign(z.style,Y),Object.keys(G).forEach(function(Q){z.removeAttribute(Q)}))})}}const applyStyles$1={name:"applyStyles",enabled:!0,phase:"write",fn:applyStyles,effect:effect$2,requires:["computeStyles"]};function getBasePlacement(D){return D.split("-")[0]}var max=Math.max,min=Math.min,round=Math.round;function getUAString(){var D=navigator.userAgentData;return D!=null&&D.brands&&Array.isArray(D.brands)?D.brands.map(function(O){return O.brand+"/"+O.version}).join(" "):navigator.userAgent}function isLayoutViewport(){return!/^((?!chrome|android).)*safari/i.test(getUAString())}function getBoundingClientRect(D,O,B){O===void 0&&(O=!1),B===void 0&&(B=!1);var F=D.getBoundingClientRect(),z=1,G=1;O&&isHTMLElement(D)&&(z=D.offsetWidth>0&&round(F.width)/D.offsetWidth||1,G=D.offsetHeight>0&&round(F.height)/D.offsetHeight||1);var U=isElement(D)?getWindow(D):window,Y=U.visualViewport,Q=!isLayoutViewport()&&B,ne=(F.left+(Q&&Y?Y.offsetLeft:0))/z,oe=(F.top+(Q&&Y?Y.offsetTop:0))/G,ce=F.width/z,fe=F.height/G;return{width:ce,height:fe,top:oe,right:ne+ce,bottom:oe+fe,left:ne,x:ne,y:oe}}function getLayoutRect(D){var O=getBoundingClientRect(D),B=D.offsetWidth,F=D.offsetHeight;return Math.abs(O.width-B)<=1&&(B=O.width),Math.abs(O.height-F)<=1&&(F=O.height),{x:D.offsetLeft,y:D.offsetTop,width:B,height:F}}function contains(D,O){var B=O.getRootNode&&O.getRootNode();if(D.contains(O))return!0;if(B&&isShadowRoot(B)){var F=O;do{if(F&&D.isSameNode(F))return!0;F=F.parentNode||F.host}while(F)}return!1}function getComputedStyle(D){return getWindow(D).getComputedStyle(D)}function isTableElement(D){return["table","td","th"].indexOf(getNodeName(D))>=0}function getDocumentElement(D){return((isElement(D)?D.ownerDocument:D.document)||window.document).documentElement}function getParentNode(D){return getNodeName(D)==="html"?D:D.assignedSlot||D.parentNode||(isShadowRoot(D)?D.host:null)||getDocumentElement(D)}function getTrueOffsetParent(D){return!isHTMLElement(D)||getComputedStyle(D).position==="fixed"?null:D.offsetParent}function getContainingBlock(D){var O=/firefox/i.test(getUAString()),B=/Trident/i.test(getUAString());if(B&&isHTMLElement(D)){var F=getComputedStyle(D);if(F.position==="fixed")return null}var z=getParentNode(D);for(isShadowRoot(z)&&(z=z.host);isHTMLElement(z)&&["html","body"].indexOf(getNodeName(z))<0;){var G=getComputedStyle(z);if(G.transform!=="none"||G.perspective!=="none"||G.contain==="paint"||["transform","perspective"].indexOf(G.willChange)!==-1||O&&G.willChange==="filter"||O&&G.filter&&G.filter!=="none")return z;z=z.parentNode}return null}function getOffsetParent(D){for(var O=getWindow(D),B=getTrueOffsetParent(D);B&&isTableElement(B)&&getComputedStyle(B).position==="static";)B=getTrueOffsetParent(B);return B&&(getNodeName(B)==="html"||getNodeName(B)==="body"&&getComputedStyle(B).position==="static")?O:B||getContainingBlock(D)||O}function getMainAxisFromPlacement(D){return["top","bottom"].indexOf(D)>=0?"x":"y"}function within(D,O,B){return max(D,min(O,B))}function withinMaxClamp(D,O,B){var F=within(D,O,B);return F>B?B:F}function getFreshSideObject(){return{top:0,right:0,bottom:0,left:0}}function mergePaddingObject(D){return Object.assign({},getFreshSideObject(),D)}function expandToHashMap(D,O){return O.reduce(function(B,F){return B[F]=D,B},{})}var toPaddingObject=function(O,B){return O=typeof O=="function"?O(Object.assign({},B.rects,{placement:B.placement})):O,mergePaddingObject(typeof O!="number"?O:expandToHashMap(O,basePlacements))};function arrow(D){var O,B=D.state,F=D.name,z=D.options,G=B.elements.arrow,U=B.modifiersData.popperOffsets,Y=getBasePlacement(B.placement),Q=getMainAxisFromPlacement(Y),ne=[left,right].indexOf(Y)>=0,oe=ne?"height":"width";if(!(!G||!U)){var ce=toPaddingObject(z.padding,B),fe=getLayoutRect(G),we=Q==="y"?top$1:left,X=Q==="y"?bottom:right,ve=B.rects.reference[oe]+B.rects.reference[Q]-U[Q]-B.rects.popper[oe],de=U[Q]-B.rects.reference[Q],Ae=getOffsetParent(G),Se=Ae?Q==="y"?Ae.clientHeight||0:Ae.clientWidth||0:0,Pe=ve/2-de/2,ke=ce[we],ye=Se-fe[oe]-ce[X],be=Se/2-fe[oe]/2+Pe,Te=within(ke,be,ye),Ie=Q;B.modifiersData[F]=(O={},O[Ie]=Te,O.centerOffset=Te-be,O)}}function effect$1(D){var O=D.state,B=D.options,F=B.element,z=F===void 0?"[data-popper-arrow]":F;z!=null&&(typeof z=="string"&&(z=O.elements.popper.querySelector(z),!z)||contains(O.elements.popper,z)&&(O.elements.arrow=z))}const arrow$1={name:"arrow",enabled:!0,phase:"main",fn:arrow,effect:effect$1,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function getVariation(D){return D.split("-")[1]}var unsetSides={top:"auto",right:"auto",bottom:"auto",left:"auto"};function roundOffsetsByDPR(D,O){var B=D.x,F=D.y,z=O.devicePixelRatio||1;return{x:round(B*z)/z||0,y:round(F*z)/z||0}}function mapToStyles(D){var O,B=D.popper,F=D.popperRect,z=D.placement,G=D.variation,U=D.offsets,Y=D.position,Q=D.gpuAcceleration,ne=D.adaptive,oe=D.roundOffsets,ce=D.isFixed,fe=U.x,we=fe===void 0?0:fe,X=U.y,ve=X===void 0?0:X,de=typeof oe=="function"?oe({x:we,y:ve}):{x:we,y:ve};we=de.x,ve=de.y;var Ae=U.hasOwnProperty("x"),Se=U.hasOwnProperty("y"),Pe=left,ke=top$1,ye=window;if(ne){var be=getOffsetParent(B),Te="clientHeight",Ie="clientWidth";if(be===getWindow(B)&&(be=getDocumentElement(B),getComputedStyle(be).position!=="static"&&Y==="absolute"&&(Te="scrollHeight",Ie="scrollWidth")),be=be,z===top$1||(z===left||z===right)&&G===end){ke=bottom;var je=ce&&be===ye&&ye.visualViewport?ye.visualViewport.height:be[Te];ve-=je-F.height,ve*=Q?1:-1}if(z===left||(z===top$1||z===bottom)&&G===end){Pe=right;var De=ce&&be===ye&&ye.visualViewport?ye.visualViewport.width:be[Ie];we-=De-F.width,we*=Q?1:-1}}var We=Object.assign({position:Y},ne&&unsetSides),et=oe===!0?roundOffsetsByDPR({x:we,y:ve},getWindow(B)):{x:we,y:ve};if(we=et.x,ve=et.y,Q){var Xe;return Object.assign({},We,(Xe={},Xe[ke]=Se?"0":"",Xe[Pe]=Ae?"0":"",Xe.transform=(ye.devicePixelRatio||1)<=1?"translate("+we+"px, "+ve+"px)":"translate3d("+we+"px, "+ve+"px, 0)",Xe))}return Object.assign({},We,(O={},O[ke]=Se?ve+"px":"",O[Pe]=Ae?we+"px":"",O.transform="",O))}function computeStyles(D){var O=D.state,B=D.options,F=B.gpuAcceleration,z=F===void 0?!0:F,G=B.adaptive,U=G===void 0?!0:G,Y=B.roundOffsets,Q=Y===void 0?!0:Y,ne={placement:getBasePlacement(O.placement),variation:getVariation(O.placement),popper:O.elements.popper,popperRect:O.rects.popper,gpuAcceleration:z,isFixed:O.options.strategy==="fixed"};O.modifiersData.popperOffsets!=null&&(O.styles.popper=Object.assign({},O.styles.popper,mapToStyles(Object.assign({},ne,{offsets:O.modifiersData.popperOffsets,position:O.options.strategy,adaptive:U,roundOffsets:Q})))),O.modifiersData.arrow!=null&&(O.styles.arrow=Object.assign({},O.styles.arrow,mapToStyles(Object.assign({},ne,{offsets:O.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:Q})))),O.attributes.popper=Object.assign({},O.attributes.popper,{"data-popper-placement":O.placement})}const computeStyles$1={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:computeStyles,data:{}};var passive={passive:!0};function effect(D){var O=D.state,B=D.instance,F=D.options,z=F.scroll,G=z===void 0?!0:z,U=F.resize,Y=U===void 0?!0:U,Q=getWindow(O.elements.popper),ne=[].concat(O.scrollParents.reference,O.scrollParents.popper);return G&&ne.forEach(function(oe){oe.addEventListener("scroll",B.update,passive)}),Y&&Q.addEventListener("resize",B.update,passive),function(){G&&ne.forEach(function(oe){oe.removeEventListener("scroll",B.update,passive)}),Y&&Q.removeEventListener("resize",B.update,passive)}}const eventListeners={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect,data:{}};var hash$1={left:"right",right:"left",bottom:"top",top:"bottom"};function getOppositePlacement(D){return D.replace(/left|right|bottom|top/g,function(O){return hash$1[O]})}var hash={start:"end",end:"start"};function getOppositeVariationPlacement(D){return D.replace(/start|end/g,function(O){return hash[O]})}function getWindowScroll(D){var O=getWindow(D),B=O.pageXOffset,F=O.pageYOffset;return{scrollLeft:B,scrollTop:F}}function getWindowScrollBarX(D){return getBoundingClientRect(getDocumentElement(D)).left+getWindowScroll(D).scrollLeft}function getViewportRect(D,O){var B=getWindow(D),F=getDocumentElement(D),z=B.visualViewport,G=F.clientWidth,U=F.clientHeight,Y=0,Q=0;if(z){G=z.width,U=z.height;var ne=isLayoutViewport();(ne||!ne&&O==="fixed")&&(Y=z.offsetLeft,Q=z.offsetTop)}return{width:G,height:U,x:Y+getWindowScrollBarX(D),y:Q}}function getDocumentRect(D){var O,B=getDocumentElement(D),F=getWindowScroll(D),z=(O=D.ownerDocument)==null?void 0:O.body,G=max(B.scrollWidth,B.clientWidth,z?z.scrollWidth:0,z?z.clientWidth:0),U=max(B.scrollHeight,B.clientHeight,z?z.scrollHeight:0,z?z.clientHeight:0),Y=-F.scrollLeft+getWindowScrollBarX(D),Q=-F.scrollTop;return getComputedStyle(z||B).direction==="rtl"&&(Y+=max(B.clientWidth,z?z.clientWidth:0)-G),{width:G,height:U,x:Y,y:Q}}function isScrollParent(D){var O=getComputedStyle(D),B=O.overflow,F=O.overflowX,z=O.overflowY;return/auto|scroll|overlay|hidden/.test(B+z+F)}function getScrollParent(D){return["html","body","#document"].indexOf(getNodeName(D))>=0?D.ownerDocument.body:isHTMLElement(D)&&isScrollParent(D)?D:getScrollParent(getParentNode(D))}function listScrollParents(D,O){var B;O===void 0&&(O=[]);var F=getScrollParent(D),z=F===((B=D.ownerDocument)==null?void 0:B.body),G=getWindow(F),U=z?[G].concat(G.visualViewport||[],isScrollParent(F)?F:[]):F,Y=O.concat(U);return z?Y:Y.concat(listScrollParents(getParentNode(U)))}function rectToClientRect(D){return Object.assign({},D,{left:D.x,top:D.y,right:D.x+D.width,bottom:D.y+D.height})}function getInnerBoundingClientRect(D,O){var B=getBoundingClientRect(D,!1,O==="fixed");return B.top=B.top+D.clientTop,B.left=B.left+D.clientLeft,B.bottom=B.top+D.clientHeight,B.right=B.left+D.clientWidth,B.width=D.clientWidth,B.height=D.clientHeight,B.x=B.left,B.y=B.top,B}function getClientRectFromMixedType(D,O,B){return O===viewport?rectToClientRect(getViewportRect(D,B)):isElement(O)?getInnerBoundingClientRect(O,B):rectToClientRect(getDocumentRect(getDocumentElement(D)))}function getClippingParents(D){var O=listScrollParents(getParentNode(D)),B=["absolute","fixed"].indexOf(getComputedStyle(D).position)>=0,F=B&&isHTMLElement(D)?getOffsetParent(D):D;return isElement(F)?O.filter(function(z){return isElement(z)&&contains(z,F)&&getNodeName(z)!=="body"}):[]}function getClippingRect(D,O,B,F){var z=O==="clippingParents"?getClippingParents(D):[].concat(O),G=[].concat(z,[B]),U=G[0],Y=G.reduce(function(Q,ne){var oe=getClientRectFromMixedType(D,ne,F);return Q.top=max(oe.top,Q.top),Q.right=min(oe.right,Q.right),Q.bottom=min(oe.bottom,Q.bottom),Q.left=max(oe.left,Q.left),Q},getClientRectFromMixedType(D,U,F));return Y.width=Y.right-Y.left,Y.height=Y.bottom-Y.top,Y.x=Y.left,Y.y=Y.top,Y}function computeOffsets(D){var O=D.reference,B=D.element,F=D.placement,z=F?getBasePlacement(F):null,G=F?getVariation(F):null,U=O.x+O.width/2-B.width/2,Y=O.y+O.height/2-B.height/2,Q;switch(z){case top$1:Q={x:U,y:O.y-B.height};break;case bottom:Q={x:U,y:O.y+O.height};break;case right:Q={x:O.x+O.width,y:Y};break;case left:Q={x:O.x-B.width,y:Y};break;default:Q={x:O.x,y:O.y}}var ne=z?getMainAxisFromPlacement(z):null;if(ne!=null){var oe=ne==="y"?"height":"width";switch(G){case start:Q[ne]=Q[ne]-(O[oe]/2-B[oe]/2);break;case end:Q[ne]=Q[ne]+(O[oe]/2-B[oe]/2);break}}return Q}function detectOverflow(D,O){O===void 0&&(O={});var B=O,F=B.placement,z=F===void 0?D.placement:F,G=B.strategy,U=G===void 0?D.strategy:G,Y=B.boundary,Q=Y===void 0?clippingParents:Y,ne=B.rootBoundary,oe=ne===void 0?viewport:ne,ce=B.elementContext,fe=ce===void 0?popper:ce,we=B.altBoundary,X=we===void 0?!1:we,ve=B.padding,de=ve===void 0?0:ve,Ae=mergePaddingObject(typeof de!="number"?de:expandToHashMap(de,basePlacements)),Se=fe===popper?reference:popper,Pe=D.rects.popper,ke=D.elements[X?Se:fe],ye=getClippingRect(isElement(ke)?ke:ke.contextElement||getDocumentElement(D.elements.popper),Q,oe,U),be=getBoundingClientRect(D.elements.reference),Te=computeOffsets({reference:be,element:Pe,strategy:"absolute",placement:z}),Ie=rectToClientRect(Object.assign({},Pe,Te)),je=fe===popper?Ie:be,De={top:ye.top-je.top+Ae.top,bottom:je.bottom-ye.bottom+Ae.bottom,left:ye.left-je.left+Ae.left,right:je.right-ye.right+Ae.right},We=D.modifiersData.offset;if(fe===popper&&We){var et=We[z];Object.keys(De).forEach(function(Xe){var Ke=[right,bottom].indexOf(Xe)>=0?1:-1,ot=[top$1,bottom].indexOf(Xe)>=0?"y":"x";De[Xe]+=et[ot]*Ke})}return De}function computeAutoPlacement(D,O){O===void 0&&(O={});var B=O,F=B.placement,z=B.boundary,G=B.rootBoundary,U=B.padding,Y=B.flipVariations,Q=B.allowedAutoPlacements,ne=Q===void 0?placements:Q,oe=getVariation(F),ce=oe?Y?variationPlacements:variationPlacements.filter(function(X){return getVariation(X)===oe}):basePlacements,fe=ce.filter(function(X){return ne.indexOf(X)>=0});fe.length===0&&(fe=ce);var we=fe.reduce(function(X,ve){return X[ve]=detectOverflow(D,{placement:ve,boundary:z,rootBoundary:G,padding:U})[getBasePlacement(ve)],X},{});return Object.keys(we).sort(function(X,ve){return we[X]-we[ve]})}function getExpandedFallbackPlacements(D){if(getBasePlacement(D)===auto)return[];var O=getOppositePlacement(D);return[getOppositeVariationPlacement(D),O,getOppositeVariationPlacement(O)]}function flip(D){var O=D.state,B=D.options,F=D.name;if(!O.modifiersData[F]._skip){for(var z=B.mainAxis,G=z===void 0?!0:z,U=B.altAxis,Y=U===void 0?!0:U,Q=B.fallbackPlacements,ne=B.padding,oe=B.boundary,ce=B.rootBoundary,fe=B.altBoundary,we=B.flipVariations,X=we===void 0?!0:we,ve=B.allowedAutoPlacements,de=O.options.placement,Ae=getBasePlacement(de),Se=Ae===de,Pe=Q||(Se||!X?[getOppositePlacement(de)]:getExpandedFallbackPlacements(de)),ke=[de].concat(Pe).reduce(function(Me,tt){return Me.concat(getBasePlacement(tt)===auto?computeAutoPlacement(O,{placement:tt,boundary:oe,rootBoundary:ce,padding:ne,flipVariations:X,allowedAutoPlacements:ve}):tt)},[]),ye=O.rects.reference,be=O.rects.popper,Te=new Map,Ie=!0,je=ke[0],De=0;De<ke.length;De++){var We=ke[De],et=getBasePlacement(We),Xe=getVariation(We)===start,Ke=[top$1,bottom].indexOf(et)>=0,ot=Ke?"width":"height",Je=detectOverflow(O,{placement:We,boundary:oe,rootBoundary:ce,altBoundary:fe,padding:ne}),Ze=Ke?Xe?right:left:Xe?bottom:top$1;ye[ot]>be[ot]&&(Ze=getOppositePlacement(Ze));var vt=getOppositePlacement(Ze),lt=[];if(G&&lt.push(Je[et]<=0),Y&&lt.push(Je[Ze]<=0,Je[vt]<=0),lt.every(function(Me){return Me})){je=We,Ie=!1;break}Te.set(We,lt)}if(Ie)for(var ht=X?3:1,st=function(tt){var Nt=ke.find(function(jt){var Ot=Te.get(jt);if(Ot)return Ot.slice(0,tt).every(function(Jt){return Jt})});if(Nt)return je=Nt,"break"},ft=ht;ft>0;ft--){var bt=st(ft);if(bt==="break")break}O.placement!==je&&(O.modifiersData[F]._skip=!0,O.placement=je,O.reset=!0)}}const flip$1={name:"flip",enabled:!0,phase:"main",fn:flip,requiresIfExists:["offset"],data:{_skip:!1}};function getSideOffsets(D,O,B){return B===void 0&&(B={x:0,y:0}),{top:D.top-O.height-B.y,right:D.right-O.width+B.x,bottom:D.bottom-O.height+B.y,left:D.left-O.width-B.x}}function isAnySideFullyClipped(D){return[top$1,right,bottom,left].some(function(O){return D[O]>=0})}function hide(D){var O=D.state,B=D.name,F=O.rects.reference,z=O.rects.popper,G=O.modifiersData.preventOverflow,U=detectOverflow(O,{elementContext:"reference"}),Y=detectOverflow(O,{altBoundary:!0}),Q=getSideOffsets(U,F),ne=getSideOffsets(Y,z,G),oe=isAnySideFullyClipped(Q),ce=isAnySideFullyClipped(ne);O.modifiersData[B]={referenceClippingOffsets:Q,popperEscapeOffsets:ne,isReferenceHidden:oe,hasPopperEscaped:ce},O.attributes.popper=Object.assign({},O.attributes.popper,{"data-popper-reference-hidden":oe,"data-popper-escaped":ce})}const hide$1={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:hide};function distanceAndSkiddingToXY(D,O,B){var F=getBasePlacement(D),z=[left,top$1].indexOf(F)>=0?-1:1,G=typeof B=="function"?B(Object.assign({},O,{placement:D})):B,U=G[0],Y=G[1];return U=U||0,Y=(Y||0)*z,[left,right].indexOf(F)>=0?{x:Y,y:U}:{x:U,y:Y}}function offset(D){var O=D.state,B=D.options,F=D.name,z=B.offset,G=z===void 0?[0,0]:z,U=placements.reduce(function(oe,ce){return oe[ce]=distanceAndSkiddingToXY(ce,O.rects,G),oe},{}),Y=U[O.placement],Q=Y.x,ne=Y.y;O.modifiersData.popperOffsets!=null&&(O.modifiersData.popperOffsets.x+=Q,O.modifiersData.popperOffsets.y+=ne),O.modifiersData[F]=U}const offset$1={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:offset};function popperOffsets(D){var O=D.state,B=D.name;O.modifiersData[B]=computeOffsets({reference:O.rects.reference,element:O.rects.popper,strategy:"absolute",placement:O.placement})}const popperOffsets$1={name:"popperOffsets",enabled:!0,phase:"read",fn:popperOffsets,data:{}};function getAltAxis(D){return D==="x"?"y":"x"}function preventOverflow(D){var O=D.state,B=D.options,F=D.name,z=B.mainAxis,G=z===void 0?!0:z,U=B.altAxis,Y=U===void 0?!1:U,Q=B.boundary,ne=B.rootBoundary,oe=B.altBoundary,ce=B.padding,fe=B.tether,we=fe===void 0?!0:fe,X=B.tetherOffset,ve=X===void 0?0:X,de=detectOverflow(O,{boundary:Q,rootBoundary:ne,padding:ce,altBoundary:oe}),Ae=getBasePlacement(O.placement),Se=getVariation(O.placement),Pe=!Se,ke=getMainAxisFromPlacement(Ae),ye=getAltAxis(ke),be=O.modifiersData.popperOffsets,Te=O.rects.reference,Ie=O.rects.popper,je=typeof ve=="function"?ve(Object.assign({},O.rects,{placement:O.placement})):ve,De=typeof je=="number"?{mainAxis:je,altAxis:je}:Object.assign({mainAxis:0,altAxis:0},je),We=O.modifiersData.offset?O.modifiersData.offset[O.placement]:null,et={x:0,y:0};if(be){if(G){var Xe,Ke=ke==="y"?top$1:left,ot=ke==="y"?bottom:right,Je=ke==="y"?"height":"width",Ze=be[ke],vt=Ze+de[Ke],lt=Ze-de[ot],ht=we?-Ie[Je]/2:0,st=Se===start?Te[Je]:Ie[Je],ft=Se===start?-Ie[Je]:-Te[Je],bt=O.elements.arrow,Me=we&&bt?getLayoutRect(bt):{width:0,height:0},tt=O.modifiersData["arrow#persistent"]?O.modifiersData["arrow#persistent"].padding:getFreshSideObject(),Nt=tt[Ke],jt=tt[ot],Ot=within(0,Te[Je],Me[Je]),Jt=Pe?Te[Je]/2-ht-Ot-Nt-De.mainAxis:st-Ot-Nt-De.mainAxis,Ft=Pe?-Te[Je]/2+ht+Ot+jt+De.mainAxis:ft+Ot+jt+De.mainAxis,At=O.elements.arrow&&getOffsetParent(O.elements.arrow),zt=At?ke==="y"?At.clientTop||0:At.clientLeft||0:0,rr=(Xe=We==null?void 0:We[ke])!=null?Xe:0,hr=Ze+Jt-rr-zt,fr=Ze+Ft-rr,nr=within(we?min(vt,hr):vt,Ze,we?max(lt,fr):lt);be[ke]=nr,et[ke]=nr-Ze}if(Y){var gt,ut=ke==="x"?top$1:left,ir=ke==="x"?bottom:right,Tt=be[ye],qt=ye==="y"?"height":"width",gr=Tt+de[ut],vr=Tt-de[ir],Yt=[top$1,left].indexOf(Ae)!==-1,Vt=(gt=We==null?void 0:We[ye])!=null?gt:0,Pt=Yt?gr:Tt-Te[qt]-Ie[qt]-Vt+De.altAxis,or=Yt?Tt+Te[qt]+Ie[qt]-Vt-De.altAxis:vr,Qt=we&&Yt?withinMaxClamp(Pt,Tt,or):within(we?Pt:gr,Tt,we?or:vr);be[ye]=Qt,et[ye]=Qt-Tt}O.modifiersData[F]=et}}const preventOverflow$1={name:"preventOverflow",enabled:!0,phase:"main",fn:preventOverflow,requiresIfExists:["offset"]};function getHTMLElementScroll(D){return{scrollLeft:D.scrollLeft,scrollTop:D.scrollTop}}function getNodeScroll(D){return D===getWindow(D)||!isHTMLElement(D)?getWindowScroll(D):getHTMLElementScroll(D)}function isElementScaled(D){var O=D.getBoundingClientRect(),B=round(O.width)/D.offsetWidth||1,F=round(O.height)/D.offsetHeight||1;return B!==1||F!==1}function getCompositeRect(D,O,B){B===void 0&&(B=!1);var F=isHTMLElement(O),z=isHTMLElement(O)&&isElementScaled(O),G=getDocumentElement(O),U=getBoundingClientRect(D,z,B),Y={scrollLeft:0,scrollTop:0},Q={x:0,y:0};return(F||!F&&!B)&&((getNodeName(O)!=="body"||isScrollParent(G))&&(Y=getNodeScroll(O)),isHTMLElement(O)?(Q=getBoundingClientRect(O,!0),Q.x+=O.clientLeft,Q.y+=O.clientTop):G&&(Q.x=getWindowScrollBarX(G))),{x:U.left+Y.scrollLeft-Q.x,y:U.top+Y.scrollTop-Q.y,width:U.width,height:U.height}}function order(D){var O=new Map,B=new Set,F=[];D.forEach(function(G){O.set(G.name,G)});function z(G){B.add(G.name);var U=[].concat(G.requires||[],G.requiresIfExists||[]);U.forEach(function(Y){if(!B.has(Y)){var Q=O.get(Y);Q&&z(Q)}}),F.push(G)}return D.forEach(function(G){B.has(G.name)||z(G)}),F}function orderModifiers(D){var O=order(D);return modifierPhases.reduce(function(B,F){return B.concat(O.filter(function(z){return z.phase===F}))},[])}function debounce(D){var O;return function(){return O||(O=new Promise(function(B){Promise.resolve().then(function(){O=void 0,B(D())})})),O}}function mergeByName(D){var O=D.reduce(function(B,F){var z=B[F.name];return B[F.name]=z?Object.assign({},z,F,{options:Object.assign({},z.options,F.options),data:Object.assign({},z.data,F.data)}):F,B},{});return Object.keys(O).map(function(B){return O[B]})}var DEFAULT_OPTIONS={placement:"bottom",modifiers:[],strategy:"absolute"};function areValidElements(){for(var D=arguments.length,O=new Array(D),B=0;B<D;B++)O[B]=arguments[B];return!O.some(function(F){return!(F&&typeof F.getBoundingClientRect=="function")})}function popperGenerator(D){D===void 0&&(D={});var O=D,B=O.defaultModifiers,F=B===void 0?[]:B,z=O.defaultOptions,G=z===void 0?DEFAULT_OPTIONS:z;return function(Y,Q,ne){ne===void 0&&(ne=G);var oe={placement:"bottom",orderedModifiers:[],options:Object.assign({},DEFAULT_OPTIONS,G),modifiersData:{},elements:{reference:Y,popper:Q},attributes:{},styles:{}},ce=[],fe=!1,we={state:oe,setOptions:function(Ae){var Se=typeof Ae=="function"?Ae(oe.options):Ae;ve(),oe.options=Object.assign({},G,oe.options,Se),oe.scrollParents={reference:isElement(Y)?listScrollParents(Y):Y.contextElement?listScrollParents(Y.contextElement):[],popper:listScrollParents(Q)};var Pe=orderModifiers(mergeByName([].concat(F,oe.options.modifiers)));return oe.orderedModifiers=Pe.filter(function(ke){return ke.enabled}),X(),we.update()},forceUpdate:function(){if(!fe){var Ae=oe.elements,Se=Ae.reference,Pe=Ae.popper;if(areValidElements(Se,Pe)){oe.rects={reference:getCompositeRect(Se,getOffsetParent(Pe),oe.options.strategy==="fixed"),popper:getLayoutRect(Pe)},oe.reset=!1,oe.placement=oe.options.placement,oe.orderedModifiers.forEach(function(De){return oe.modifiersData[De.name]=Object.assign({},De.data)});for(var ke=0;ke<oe.orderedModifiers.length;ke++){if(oe.reset===!0){oe.reset=!1,ke=-1;continue}var ye=oe.orderedModifiers[ke],be=ye.fn,Te=ye.options,Ie=Te===void 0?{}:Te,je=ye.name;typeof be=="function"&&(oe=be({state:oe,options:Ie,name:je,instance:we})||oe)}}}},update:debounce(function(){return new Promise(function(de){we.forceUpdate(),de(oe)})}),destroy:function(){ve(),fe=!0}};if(!areValidElements(Y,Q))return we;we.setOptions(ne).then(function(de){!fe&&ne.onFirstUpdate&&ne.onFirstUpdate(de)});function X(){oe.orderedModifiers.forEach(function(de){var Ae=de.name,Se=de.options,Pe=Se===void 0?{}:Se,ke=de.effect;if(typeof ke=="function"){var ye=ke({state:oe,name:Ae,instance:we,options:Pe}),be=function(){};ce.push(ye||be)}})}function ve(){ce.forEach(function(de){return de()}),ce=[]}return we}}var defaultModifiers=[eventListeners,popperOffsets$1,computeStyles$1,applyStyles$1,offset$1,flip$1,preventOverflow$1,arrow$1,hide$1],createPopper=popperGenerator({defaultModifiers});const dropdownItemStyle=i$4`
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
`;var __defProp$P=Object.defineProperty,__getOwnPropDesc$P=Object.getOwnPropertyDescriptor,__decorateClass$P=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$P(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$P(O,B,z),z};const awcDropdownItemTag="awc-dropdown-item";exports.AwcDropdownItem=class extends s{constructor(){super(...arguments),this.target="_self",this.selected=!1}focus(){this._dropdownItem.focus()}render(){return this.href?x`<a
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
      `}},exports.AwcDropdownItem.styles=[scrollStyle,dropdownItemStyle],__decorateClass$P([n({type:String})],exports.AwcDropdownItem.prototype,"href",2),__decorateClass$P([n({type:String})],exports.AwcDropdownItem.prototype,"target",2),__decorateClass$P([n({type:Boolean,reflect:!0})],exports.AwcDropdownItem.prototype,"selected",2),__decorateClass$P([e$5(".awc-dropdown-item")],exports.AwcDropdownItem.prototype,"_dropdownItem",2),exports.AwcDropdownItem=__decorateClass$P([t$1(awcDropdownItemTag)],exports.AwcDropdownItem);var __defProp$O=Object.defineProperty,__getOwnPropDesc$O=Object.getOwnPropertyDescriptor,__decorateClass$O=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$O(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$O(O,B,z),z};exports.AwcDropdown=class extends s{constructor(){super(...arguments),this.notClosing=!1,this.visible=!1,this.selectedMode=!1,this.position="bottom-start",this.strategy="absolute",this.disabled=!1,this.scrollOff=!1,this.popperInstance=null,this._handleOutsideClick=O=>{this.contains(O.target)||this.close()},this.focusedOptionIndex=-1}_createPopperInstance(){this._nestedElement&&this._dropdownList&&(this.popperInstance=createPopper(this._nestedElement,this._dropdownList,{placement:this.position,modifiers:[{name:"offset",options:{offset:[0,8]}}],strategy:this.strategy}))}_destroyPopperInstance(){var O;(O=this.popperInstance)==null||O.destroy(),this.popperInstance=null}_setupPopover(){this.disabled||(this._createPopperInstance(),this._addOutsideClickHandler())}_disconnectPopover(){this.disabled||(this._removeOutsideClickHandler(),this._destroyPopperInstance())}_addOutsideClickHandler(){setTimeout(()=>{document.addEventListener("click",this._handleOutsideClick)},0)}_removeOutsideClickHandler(){document.removeEventListener("click",this._handleOutsideClick)}open(){this.visible=!0,this._onOpen({visible:this.visible})}close(){this.visible=!1,this.focusedOptionIndex=-1,this._onClose({visible:this.visible})}_handleDropdown(O){O.target&&this.options.length&&(this.visible?this.close():this.open())}get options(){return[...this.querySelectorAll(awcDropdownItemTag)]}handleKeyDown(O){if(this.options.length){if(["ArrowDown","ArrowRight"].includes(O.key))this.focusedOptionIndex++;else if(["ArrowUp","ArrowLeft"].includes(O.key))this.focusedOptionIndex--;else if(O.key==="Escape"){this.focusedOptionIndex=-1,this.close();return}else return;this.focusedOptionIndex=Math.max(0,Math.min(this.focusedOptionIndex,this.options.length-1)),this.options[this.focusedOptionIndex].focus(),O.preventDefault()}}_selectedModeHandle(O){const B=O.target;this.selectedMode&&(B.selected=!B.selected),B&&!this.notClosing&&this.close()}_setMinWidth(){this._dropdownList&&(this._dropdownList.style.width=`${this.width}px`)}updated(O){super.updated(O),O.has("notClosing")&&this._updateOutsideClickHandler(),O.has("width")&&this._setMinWidth(),O.has("visible")&&(this.visible?this._setupPopover():this._disconnectPopover())}_updateOutsideClickHandler(){this._removeOutsideClickHandler(),!this.notClosing&&this.visible&&this._addOutsideClickHandler()}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this._removeOutsideClickHandler()}render(){return x`
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
    `}},exports.AwcDropdown.shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0},exports.AwcDropdown.styles=[scrollStyle,dropdownStyle],__decorateClass$O([n({type:Boolean,reflect:!0,attribute:"not-closing"})],exports.AwcDropdown.prototype,"notClosing",2),__decorateClass$O([n({type:Boolean,reflect:!0})],exports.AwcDropdown.prototype,"visible",2),__decorateClass$O([n({type:Number,reflect:!0})],exports.AwcDropdown.prototype,"width",2),__decorateClass$O([n({type:Boolean,reflect:!0,attribute:"selected-mode"})],exports.AwcDropdown.prototype,"selectedMode",2),__decorateClass$O([n({type:String,reflect:!0})],exports.AwcDropdown.prototype,"position",2),__decorateClass$O([n({type:String,reflect:!0})],exports.AwcDropdown.prototype,"strategy",2),__decorateClass$O([n({type:Boolean,reflect:!0})],exports.AwcDropdown.prototype,"disabled",2),__decorateClass$O([n({type:Boolean,reflect:!0,attribute:"scroll-off"})],exports.AwcDropdown.prototype,"scrollOff",2),__decorateClass$O([event("awc-dropdown-open")],exports.AwcDropdown.prototype,"_onOpen",2),__decorateClass$O([event("awc-dropdown-close")],exports.AwcDropdown.prototype,"_onClose",2),__decorateClass$O([e$5("awc-dropdown-list")],exports.AwcDropdown.prototype,"_dropdownList",2),__decorateClass$O([e$5(".awc-dropdown__nested")],exports.AwcDropdown.prototype,"_nestedElement",2),exports.AwcDropdown=__decorateClass$O([t$1("awc-dropdown")],exports.AwcDropdown);const dropdownListStyle=i$4`
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
`;var __defProp$N=Object.defineProperty,__getOwnPropDesc$N=Object.getOwnPropertyDescriptor,__decorateClass$N=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$N(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$N(O,B,z),z};const awcDropdownListTag="awc-dropdown-list";exports.AwcDropdownList=class extends s{render(){return x`
      <ul class="awc-dropdown-list">
        <slot></slot>
      </ul>
    `}},exports.AwcDropdownList.styles=[scrollStyle,dropdownListStyle],exports.AwcDropdownList=__decorateClass$N([t$1(awcDropdownListTag)],exports.AwcDropdownList);const dropdownGroupStyle=i$4`
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
    
`;var __defProp$M=Object.defineProperty,__getOwnPropDesc$M=Object.getOwnPropertyDescriptor,__decorateClass$M=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$M(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$M(O,B,z),z};const awcDropdownGroupTag="awc-dropdown-group";exports.AwcDropdownGroup=class extends s{constructor(){super(...arguments),this.divider=!1}render(){return x`
            <div class="awc-dropdown-group">
                <label class="awc-dropdown-group__label">${this.label}</label>
                <div class="awc-dropdown-group__content">
                    <slot></slot>
                </div>
            </div>
        `}},exports.AwcDropdownGroup.styles=[scrollStyle,dropdownGroupStyle],__decorateClass$M([n({type:String,reflect:!0})],exports.AwcDropdownGroup.prototype,"label",2),__decorateClass$M([n({type:Boolean,reflect:!0})],exports.AwcDropdownGroup.prototype,"divider",2),exports.AwcDropdownGroup=__decorateClass$M([t$1(awcDropdownGroupTag)],exports.AwcDropdownGroup);var __classPrivateFieldGet=function(D,O,B,F){if(B==="a"&&!F)throw new TypeError("Private accessor was defined without a getter");if(typeof O=="function"?D!==O||!F:!O.has(D))throw new TypeError("Cannot read private member from an object whose class did not declare it");return B==="m"?F:B==="a"?F.call(D):F?F.value:O.get(D)},__classPrivateFieldSet=function(D,O,B,F,z){if(F==="m")throw new TypeError("Private method is not writable");if(F==="a"&&!z)throw new TypeError("Private accessor was defined without a setter");if(typeof O=="function"?D!==O||!z:!O.has(D))throw new TypeError("Cannot write private member to an object whose class did not declare it");return F==="a"?z.call(D,B):z?z.value=B:O.set(D,B),B};function FormControlMixin(D){var O,B,F,z,G,U,Y,Q,ne,oe,ce,fe,we,X,ve,de,Ae,Se;class Pe extends D{constructor(...ye){var be,Te,Ie;super(...ye),O.add(this),this.internals=this.attachInternals(),B.set(this,!1),F.set(this,!1),z.set(this,!1),G.set(this,void 0),U.set(this,void 0),Y.set(this,!0),Q.set(this,""),ne.set(this,()=>{__classPrivateFieldSet(this,z,!0,"f"),__classPrivateFieldSet(this,B,!0,"f"),__classPrivateFieldGet(this,O,"m",ve).call(this)}),oe.set(this,()=>{__classPrivateFieldSet(this,B,!1,"f"),__classPrivateFieldGet(this,O,"m",de).call(this,this.shouldFormValueUpdate()?__classPrivateFieldGet(this,Q,"f"):""),!this.validity.valid&&__classPrivateFieldGet(this,z,"f")&&__classPrivateFieldSet(this,F,!0,"f");const je=__classPrivateFieldGet(this,O,"m",ve).call(this);this.validationMessageCallback&&this.validationMessageCallback(je?this.internals.validationMessage:"")}),ce.set(this,()=>{var je;__classPrivateFieldGet(this,Y,"f")&&this.validationTarget&&(this.internals.setValidity(this.validity,this.validationMessage,this.validationTarget),__classPrivateFieldSet(this,Y,!1,"f")),__classPrivateFieldSet(this,z,!0,"f"),__classPrivateFieldSet(this,F,!0,"f"),__classPrivateFieldGet(this,O,"m",ve).call(this),(je=this===null||this===void 0?void 0:this.validationMessageCallback)===null||je===void 0||je.call(this,this.showError?this.internals.validationMessage:"")}),fe.set(this,void 0),we.set(this,!1),X.set(this,Promise.resolve()),(be=this.addEventListener)===null||be===void 0||be.call(this,"focus",__classPrivateFieldGet(this,ne,"f")),(Te=this.addEventListener)===null||Te===void 0||Te.call(this,"blur",__classPrivateFieldGet(this,oe,"f")),(Ie=this.addEventListener)===null||Ie===void 0||Ie.call(this,"invalid",__classPrivateFieldGet(this,ce,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const ye=this.validators.map(Ie=>Ie.attribute).flat(),be=super.observedAttributes||[];return[...new Set([...be,...ye])]}static getValidator(ye){return this.validators.find(be=>be.attribute===ye)||null}static getValidators(ye){return this.validators.filter(be=>{var Te;if(be.attribute===ye||!((Te=be.attribute)===null||Te===void 0)&&Te.includes(ye))return!0})}get form(){return this.internals.form}get showError(){return __classPrivateFieldGet(this,O,"m",ve).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback(ye,be,Te){var Ie;(Ie=super.attributeChangedCallback)===null||Ie===void 0||Ie.call(this,ye,be,Te);const De=this.constructor.getValidators(ye);De!=null&&De.length&&this.validationTarget&&this.setValue(__classPrivateFieldGet(this,Q,"f"))}setValue(ye){var be;__classPrivateFieldSet(this,F,!1,"f"),(be=this.validationMessageCallback)===null||be===void 0||be.call(this,""),__classPrivateFieldSet(this,Q,ye,"f");const Ie=this.shouldFormValueUpdate()?ye:null;this.internals.setFormValue(Ie),__classPrivateFieldGet(this,O,"m",de).call(this,Ie),this.valueChangedCallback&&this.valueChangedCallback(Ie),__classPrivateFieldGet(this,O,"m",ve).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise(ye=>ye(__classPrivateFieldGet(this,X,"f")))}formResetCallback(){var ye,be;__classPrivateFieldSet(this,z,!1,"f"),__classPrivateFieldSet(this,F,!1,"f"),__classPrivateFieldGet(this,O,"m",ve).call(this),(ye=this.resetFormControl)===null||ye===void 0||ye.call(this),(be=this.validationMessageCallback)===null||be===void 0||be.call(this,__classPrivateFieldGet(this,O,"m",ve).call(this)?this.validationMessage:"")}}return B=new WeakMap,F=new WeakMap,z=new WeakMap,G=new WeakMap,U=new WeakMap,Y=new WeakMap,Q=new WeakMap,ne=new WeakMap,oe=new WeakMap,ce=new WeakMap,fe=new WeakMap,we=new WeakMap,X=new WeakMap,O=new WeakSet,ve=function(){if(this.hasAttribute("disabled"))return!1;const ye=__classPrivateFieldGet(this,F,"f")||__classPrivateFieldGet(this,z,"f")&&!this.validity.valid&&!__classPrivateFieldGet(this,B,"f");return ye&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),ye},de=function(ye){const be=this.constructor,Te={},Ie=be.validators,je=[],De=Ie.some(Ke=>Ke.isValid instanceof Promise);__classPrivateFieldGet(this,we,"f")||(__classPrivateFieldSet(this,X,new Promise(Ke=>{__classPrivateFieldSet(this,fe,Ke,"f")}),"f"),__classPrivateFieldSet(this,we,!0,"f")),__classPrivateFieldGet(this,G,"f")&&(__classPrivateFieldGet(this,G,"f").abort(),__classPrivateFieldSet(this,U,__classPrivateFieldGet(this,G,"f"),"f"));const We=new AbortController;__classPrivateFieldSet(this,G,We,"f");let et,Xe=!1;Ie.length&&(Ie.forEach(Ke=>{const ot=Ke.key||"customError",Je=Ke.isValid(this,ye,We.signal);Je instanceof Promise?(je.push(Je),Je.then(vt=>{vt!=null&&(Te[ot]=!vt,et=__classPrivateFieldGet(this,O,"m",Se).call(this,Ke,ye),__classPrivateFieldGet(this,O,"m",Ae).call(this,Te,et))})):(Te[ot]=!Je,this.validity[ot]!==!Je&&(Xe=!0),!Je&&!et&&(et=__classPrivateFieldGet(this,O,"m",Se).call(this,Ke,ye)))}),Promise.allSettled(je).then(()=>{var Ke;We!=null&&We.signal.aborted||(__classPrivateFieldSet(this,we,!1,"f"),(Ke=__classPrivateFieldGet(this,fe,"f"))===null||Ke===void 0||Ke.call(this))}),(Xe||!De)&&__classPrivateFieldGet(this,O,"m",Ae).call(this,Te,et))},Ae=function(ye,be){if(this.validationTarget)this.internals.setValidity(ye,be,this.validationTarget),__classPrivateFieldSet(this,Y,!1,"f");else{if(this.internals.setValidity(ye,be),this.internals.validity.valid)return;__classPrivateFieldSet(this,Y,!0,"f")}},Se=function(ye,be){if(this.validityCallback){const Te=this.validityCallback(ye.key||"customError");if(Te)return Te}return ye.message instanceof Function?ye.message(this,be):ye.message},Pe}const requiredValidator={attribute:"required",key:"valueMissing",message:"Please fill out this field",isValid(D,O){let B=!0;return(D.hasAttribute("required")||D.required)&&!O&&(B=!1),B}},maxLengthValidator={attribute:"maxlength",key:"tooLong",message(D,O){const B=O||"";return`Please use no more than ${D.maxLength} characters (you are currently using ${B.length} characters).`},isValid(D,O){return D.maxLength?!(O&&D.maxLength<O.length):!0}},radioStyle=i$4`
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
`;var __defProp$L=Object.defineProperty,__getOwnPropDesc$L=Object.getOwnPropertyDescriptor,__decorateClass$L=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$L(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$L(O,B,z),z};const awcChangeEventName$1="awc-radio-change";exports.AwcRadioGroup=class extends FormControlMixin(s){constructor(){super(...arguments),this.value="",this.name="",this.label="",this.hint="",this.horizontal=!1,this.focusedOptionIndex=0}get options(){return[...this.querySelectorAll(awcRadioTag)]}get availableOptions(){return this.options.filter(O=>!O.disabled)}_handleRadioButton(O){const B=O.target;this.setValue(B.value),this._onChange(B.value)}resetFormControl(){return this.options.forEach(O=>{this.value="",O.checked=!1})}_handleKeyDown(O){if(["ArrowDown","ArrowRight"].includes(O.key))this.focusedOptionIndex++;else if(["ArrowUp","ArrowLeft"].includes(O.key))this.focusedOptionIndex--;else if([" "].includes(O.key)){this.availableOptions[this.focusedOptionIndex].select();return}else return;this.focusedOptionIndex=Math.max(0,Math.min(this.focusedOptionIndex,this.availableOptions.length-1)),this.availableOptions[this.focusedOptionIndex].focus(),O.preventDefault()}_handleFocus(){this.availableOptions[this.focusedOptionIndex].focus()}updated(O){super.updated(O),O.has("value")&&this.setValue(this.value)}_setupAwcRadioValues(){this.options.forEach(O=>{O.checked&&(this.value=O.value)})}connectedCallback(){super.connectedCallback(),this.tabIndex=0,this.addEventListener("focus",this._handleFocus),this.addEventListener("keydown",this._handleKeyDown),this._setupAwcRadioValues(),document.addEventListener("DOMContentLoaded",()=>{this._setupAwcRadioValues()})}render(){return x`
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
    `}},exports.AwcRadioGroup.styles=[radioGroupStyle],__decorateClass$L([n({type:String})],exports.AwcRadioGroup.prototype,"value",2),__decorateClass$L([n({type:String,reflect:!0})],exports.AwcRadioGroup.prototype,"name",2),__decorateClass$L([n({type:String,reflect:!0})],exports.AwcRadioGroup.prototype,"label",2),__decorateClass$L([n({type:String,reflect:!0})],exports.AwcRadioGroup.prototype,"hint",2),__decorateClass$L([n({type:Boolean,reflect:!0})],exports.AwcRadioGroup.prototype,"horizontal",2),__decorateClass$L([event(awcChangeEventName$1)],exports.AwcRadioGroup.prototype,"_onChange",2),exports.AwcRadioGroup=__decorateClass$L([t$1("awc-radio-group")],exports.AwcRadioGroup);var __defProp$K=Object.defineProperty,__getOwnPropDesc$K=Object.getOwnPropertyDescriptor,__decorateClass$K=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$K(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$K(O,B,z),z};const awcRadioTag="awc-radio";exports.AwcRadio=class extends FormControlMixin(s){constructor(){super(...arguments),this.staticError=!1,this.disabled=!1,this.size="regular",this.checked=!1,this.required=!1,this.validationMessage="",this._handleFieldValueChange=O=>{const B=O.detail;this.checked=B===this.value},this._onChange=()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},this._onInvalid=O=>{O.preventDefault(),this.validationTarget.focus()}}validityCallback(){const O=document.createElement("input");return O.type="radio",O.name="name",O.required=this.required,O.validationMessage}validationMessageCallback(O){this.customError&&!this.staticError?(this.validationMessage=O,this.validationMessage=this.customError):this.validationMessage=O}shouldFormValueUpdate(){return this.checked}connectedCallback(){super.connectedCallback(),this.addEventListener("invalid",this._onInvalid),this._setupFieldListener()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._onInvalid),this._cleanupFieldListener()}_setupFieldListener(){var O;this.field=this.closest("awc-radio-group"),this.field||console.warn("awc-radio is designed to be used inside an awc-radio-group",this),(O=this.field)==null||O.addEventListener(awcChangeEventName$1,this._handleFieldValueChange)}_cleanupFieldListener(){var O;(O=this.field)==null||O.removeEventListener(awcChangeEventName$1,this._handleFieldValueChange)}select(){this.checked=!0,this._onChecked(this.value),this._onChange()}focus(){this._radioElement.tabIndex=0,this._radioElement.focus(),this._onFocus(this.value)}blur(){this._radioElement.tabIndex=-1,this._onBlur(this.value)}_settingCustomColor(){this.customColor&&this.style.setProperty("--awc-radio-custom-color",this.customColor)}updated(O){super.updated(O),(O.has("checked")||O.has("value"))&&this.setValue(this.value),O.has("customColor")&&this._settingCustomColor()}render(){const O=e$2({"awc-radio":!0,checked:this.checked}),B={"awc-radio__label":!0,"radio--error":this.showError&&!this.checked||this.staticError&&this.required};return x`
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
            <p id="label" class="${e$2(B)}">${this.label}</p>
          </span>
        </div>

        ${this.showError&&this.required&&!this.staticError?x`<span class="awc-radio__error"
              >${this.validationMessage}</span
            >`:""}
        ${this.staticError&&this.required&&this.customError?x`<span class="awc-radio__error">${this.customError}</span>`:""}
      </div>
    `}},exports.AwcRadio.shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0},exports.AwcRadio.formControlValidators=[requiredValidator],exports.AwcRadio.styles=[radioStyle],__decorateClass$K([n({type:String,reflect:!0})],exports.AwcRadio.prototype,"name",2),__decorateClass$K([n({type:String,reflect:!0})],exports.AwcRadio.prototype,"value",2),__decorateClass$K([n({type:String,reflect:!0})],exports.AwcRadio.prototype,"label",2),__decorateClass$K([n({reflect:!0,attribute:"custom-error"})],exports.AwcRadio.prototype,"customError",2),__decorateClass$K([n({type:Boolean,reflect:!0,attribute:"static-error"})],exports.AwcRadio.prototype,"staticError",2),__decorateClass$K([n({type:Boolean,reflect:!0})],exports.AwcRadio.prototype,"disabled",2),__decorateClass$K([n({reflect:!0})],exports.AwcRadio.prototype,"size",2),__decorateClass$K([n({type:Boolean,reflect:!0})],exports.AwcRadio.prototype,"checked",2),__decorateClass$K([n({type:Boolean,reflect:!0})],exports.AwcRadio.prototype,"required",2),__decorateClass$K([n({reflect:!0,attribute:"custom-color"})],exports.AwcRadio.prototype,"customColor",2),__decorateClass$K([event("awc-checked")],exports.AwcRadio.prototype,"_onChecked",2),__decorateClass$K([event("awc-focus")],exports.AwcRadio.prototype,"_onFocus",2),__decorateClass$K([event("awc-blur")],exports.AwcRadio.prototype,"_onBlur",2),__decorateClass$K([e$5("[role=radio]")],exports.AwcRadio.prototype,"_radioElement",2),__decorateClass$K([e$5("[role=radio]")],exports.AwcRadio.prototype,"validationTarget",2),__decorateClass$K([r$1()],exports.AwcRadio.prototype,"validationMessage",2),exports.AwcRadio=__decorateClass$K([t$1(awcRadioTag)],exports.AwcRadio);const PolyfilledSubmitEvent=globalThis.SubmitEvent=typeof globalThis.SubmitEvent<"u"?SubmitEvent:Event,submit=D=>{if(!(!D.noValidate&&!D.reportValidity())){const O=new PolyfilledSubmitEvent("submit",{bubbles:!0,cancelable:!0});D.dispatchEvent(O),O.defaultPrevented||D.submit()}},buttonStyle=i$4`
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

`;var __defProp$J=Object.defineProperty,__getOwnPropDesc$J=Object.getOwnPropertyDescriptor,__decorateClass$J=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$J(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$J(O,B,z),z};const awcSpinnerTag="awc-spinner";exports.AwcSpinner=class extends s{constructor(){super(...arguments),this.size="m",this.variant="primary"}render(){return x`
            <div class="awc-spinner"></div>
        `}},exports.AwcSpinner.styles=[spinnerStyle],__decorateClass$J([n({type:String,reflect:!0})],exports.AwcSpinner.prototype,"size",2),__decorateClass$J([n({type:String,reflect:!0})],exports.AwcSpinner.prototype,"variant",2),exports.AwcSpinner=__decorateClass$J([t$1(awcSpinnerTag)],exports.AwcSpinner);var __defProp$I=Object.defineProperty,__getOwnPropDesc$I=Object.getOwnPropertyDescriptor,__decorateClass$I=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$I(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$I(O,B,z),z};const awcButtonTag="awc-button";exports.AwcButton=class extends s{constructor(){super(...arguments),this.background="blue",this.size="regular",this.variant="primary",this.type="submit",this.target="_self",this.disabled=!1,this.filling=!1,this.loading=!1,this.autofocus=!1}get spinner(){return this.querySelector(awcSpinnerTag)}focus(){this.button.focus()}_handleButtonClick(){const O=this.closest("form");O&&(this.type==="submit"?submit(O):this.type==="reset"&&O.reset())}_renderSpinner(){const O=this.variant==="primary"?"secondary":"primary";return x`<awc-spinner size="s" variant=${O}></awc-spinner>`}_settingCurrentSpinnerVariant(){this.spinner?(this.button.classList.add("awc-button--disable"),this.variant==="primary"?this.spinner.variant="secondary":this.spinner.variant="primary"):this.button.classList.remove("awc-button--disable")}_checkingSpinnerInSlot(){this.spinner?this._settingCurrentSpinnerVariant():this.button.classList.remove("awc-button--disable")}updated(O){super.updated(O),O.has("variant")&&this._settingCurrentSpinnerVariant()}render(){const O=x`
      <slot @slotchange="${this._checkingSpinnerInSlot}"></slot>
      ${this.loading?this._renderSpinner():""}
    `,B=x`
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
    `;return this.href?F:B}},exports.AwcButton.styles=[buttonStyle],__decorateClass$I([n({type:String,reflect:!0})],exports.AwcButton.prototype,"name",2),__decorateClass$I([n({type:String,reflect:!0})],exports.AwcButton.prototype,"value",2),__decorateClass$I([n({type:String,reflect:!0})],exports.AwcButton.prototype,"background",2),__decorateClass$I([n({type:String,reflect:!0})],exports.AwcButton.prototype,"size",2),__decorateClass$I([n({type:String,reflect:!0})],exports.AwcButton.prototype,"variant",2),__decorateClass$I([n({type:String,reflect:!0})],exports.AwcButton.prototype,"type",2),__decorateClass$I([n({type:String})],exports.AwcButton.prototype,"target",2),__decorateClass$I([n({type:String,reflect:!0})],exports.AwcButton.prototype,"href",2),__decorateClass$I([n({type:Boolean,reflect:!0})],exports.AwcButton.prototype,"disabled",2),__decorateClass$I([n({type:Boolean,reflect:!0})],exports.AwcButton.prototype,"filling",2),__decorateClass$I([n({type:Boolean,reflect:!0})],exports.AwcButton.prototype,"loading",2),__decorateClass$I([n({type:Boolean,reflect:!0})],exports.AwcButton.prototype,"autofocus",2),__decorateClass$I([r$1()],exports.AwcButton.prototype,"pointerEvent",2),__decorateClass$I([e$5(".awc-button")],exports.AwcButton.prototype,"button",2),exports.AwcButton=__decorateClass$I([t$1(awcButtonTag)],exports.AwcButton);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f=D=>D.strings===void 0,u$1={},m=(D,O=u$1)=>D._$AH=O;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l$1=e$3(class extends i$1{constructor(D){if(super(D),D.type!==t.PROPERTY&&D.type!==t.ATTRIBUTE&&D.type!==t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!f(D))throw Error("`live` bindings can only contain a single expression")}render(D){return D}update(D,[O]){if(O===w||O===T)return O;const B=D.element,F=D.name;if(D.type===t.PROPERTY){if(O===B[F])return w}else if(D.type===t.BOOLEAN_ATTRIBUTE){if(!!O===B.hasAttribute(F))return w}else if(D.type===t.ATTRIBUTE&&B.getAttribute(F)===O+"")return w;return m(D),O}}),checkboxStyle=i$4`
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
`;var __defProp$H=Object.defineProperty,__getOwnPropDesc$H=Object.getOwnPropertyDescriptor,__decorateClass$H=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$H(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$H(O,B,z),z};const awcCheckboxTag="awc-checkbox";exports.AwcCheckbox=class extends FormControlMixin(s){constructor(){super(...arguments),this.label="",this.name="",this.checked=!1,this.required=!1,this.disabled=!1,this.indeterminate=!1,this.staticError=!1,this.customError="",this.size="regular",this.validationMessage="",this._handleFieldValueChange=O=>{this.checked=O.detail.includes(this.value)},this._onInvalid=O=>{O.preventDefault(),this.validationTarget.focus()}}validityCallback(){var O;return(O=this.validationTarget)==null?void 0:O.validationMessage}validationMessageCallback(O){this.customError&&!this.staticError?(this.validationMessage=O,this.validationMessage=this.customError):this.validationMessage=O}resetFormControl(){this.checked=!1}shouldFormValueUpdate(){return this.checked}update(O){super.update(O),(O.has("checked")||O.has("value"))&&this.setValue(this.value),O.has("customColor")&&this._settingCustomColor()}connectedCallback(){super.connectedCallback(),this.addEventListener("invalid",this._onInvalid),document.addEventListener("DOMContentLoaded",()=>{this.field=this.closest(awcCheckboxGroupTag),this.field&&this.addEventListener(awcChangeEventName,this._handleFieldValueChange)})}disconnectedCallback(){var O;super.disconnectedCallback(),this.removeEventListener("invalid",this._onInvalid),(O=this.field)==null||O.removeEventListener(awcChangeEventName,this._handleFieldValueChange)}focus(){this.checkboxElement.tabIndex=0,this.checkboxElement.focus(),this.onFocus(this.value)}blur(){this.onBlur(this.value),this.field&&(this.checkboxElement.tabIndex=-1)}_settingCustomColor(){this.customColor&&this.style.setProperty("--awc-checkbox-custom-color",this.customColor)}_handleChange(O){const B=O.target;B.checkValidity(),this.checked=B.checked,this.onChange(B.checked),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.indeterminate=!1}render(){const O={checkbox:!0,"checkbox--error":this.showError},B={"awc-checkbox__label":!0,"checkbox--error":this.showError||this.staticError&&this.required};return x`
      <div class="awc-checkbox__wrapper">
        <label class="${e$2(B)}"
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
    `}},exports.AwcCheckbox.shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0},exports.AwcCheckbox.formControlValidators=[requiredValidator],exports.AwcCheckbox.styles=[checkboxStyle],__decorateClass$H([n({type:String,reflect:!0})],exports.AwcCheckbox.prototype,"value",2),__decorateClass$H([n({type:String,reflect:!0})],exports.AwcCheckbox.prototype,"label",2),__decorateClass$H([n({type:String,reflect:!0})],exports.AwcCheckbox.prototype,"name",2),__decorateClass$H([n({type:Boolean,reflect:!0})],exports.AwcCheckbox.prototype,"checked",2),__decorateClass$H([n({type:Boolean,reflect:!0})],exports.AwcCheckbox.prototype,"required",2),__decorateClass$H([n({type:Boolean,reflect:!0})],exports.AwcCheckbox.prototype,"disabled",2),__decorateClass$H([n({type:Boolean,reflect:!0})],exports.AwcCheckbox.prototype,"indeterminate",2),__decorateClass$H([n({type:Boolean,reflect:!0,attribute:"static-error"})],exports.AwcCheckbox.prototype,"staticError",2),__decorateClass$H([n({reflect:!0,attribute:"custom-error"})],exports.AwcCheckbox.prototype,"customError",2),__decorateClass$H([n({reflect:!0})],exports.AwcCheckbox.prototype,"size",2),__decorateClass$H([n({reflect:!0,attribute:"custom-color"})],exports.AwcCheckbox.prototype,"customColor",2),__decorateClass$H([r$1()],exports.AwcCheckbox.prototype,"validationMessage",2),__decorateClass$H([event("awc-checkbox-change")],exports.AwcCheckbox.prototype,"onChange",2),__decorateClass$H([event("awc-focus")],exports.AwcCheckbox.prototype,"onFocus",2),__decorateClass$H([event("awc-blur")],exports.AwcCheckbox.prototype,"onBlur",2),__decorateClass$H([e$5("input")],exports.AwcCheckbox.prototype,"checkboxElement",2),__decorateClass$H([e$5("label")],exports.AwcCheckbox.prototype,"labelCheckboxElement",2),__decorateClass$H([e$5("input[type=checkbox]")],exports.AwcCheckbox.prototype,"validationTarget",2),exports.AwcCheckbox=__decorateClass$H([t$1(awcCheckboxTag)],exports.AwcCheckbox);const checkboxGroupStyle=i$4`
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
`;var __defProp$G=Object.defineProperty,__getOwnPropDesc$G=Object.getOwnPropertyDescriptor,__decorateClass$G=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$G(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$G(O,B,z),z};const awcCheckboxGroupTag="awc-checkbox-group",awcChangeEventName="awc-checkbox-group-change";exports.AwcCheckboxGroup=class extends FormControlMixin(s){constructor(){super(...arguments),this.value=[],this.label="",this.hint="",this.horizontal=!1,this.focusedOptionIndex=0}get options(){return[...this.querySelectorAll(awcCheckboxTag)]}get checkedOptions(){return this.options.filter(O=>O.checked).map(O=>O.value)}get availableOptions(){return this.options.filter(O=>!O.disabled)}connectedCallback(){super.connectedCallback(),this.tabIndex=0,this._handleCheckboxItem(),this.addEventListener("focus",this.handleFocus),this.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this.handleFocus),this.removeEventListener("keydown",this.handleKeyDown)}updated(O){super.updated(O),O.has("value")&&(this.setValue(this.checkedOptions.join(", ")),this._onChange(this.value))}_handleCheckboxItem(){this.value=this.checkedOptions}handleKeyDown(O){if(["ArrowDown","ArrowRight"].includes(O.key))this.focusedOptionIndex++;else if(["ArrowUp","ArrowLeft"].includes(O.key))this.focusedOptionIndex--;else if(O.key==="Tab"){if(O.shiftKey?this.focusedOptionIndex--:this.focusedOptionIndex++,this.focusedOptionIndex===this.availableOptions.length){this.tabIndex=0,this.focusedOptionIndex=0;return}}else return;this.focusedOptionIndex=Math.max(0,Math.min(this.focusedOptionIndex,this.availableOptions.length-1)),this.availableOptions[this.focusedOptionIndex].focus(),O.preventDefault()}handleFocus(){this.availableOptions[this.focusedOptionIndex].focus()}render(){return x`
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
    `}},exports.AwcCheckboxGroup.styles=[checkboxGroupStyle],__decorateClass$G([n({type:Array,reflect:!0})],exports.AwcCheckboxGroup.prototype,"value",2),__decorateClass$G([n({type:String,reflect:!0})],exports.AwcCheckboxGroup.prototype,"label",2),__decorateClass$G([n({type:String,reflect:!0})],exports.AwcCheckboxGroup.prototype,"hint",2),__decorateClass$G([n({type:Boolean,reflect:!0})],exports.AwcCheckboxGroup.prototype,"horizontal",2),__decorateClass$G([event("awc-checkbox-group-change")],exports.AwcCheckboxGroup.prototype,"_onChange",2),exports.AwcCheckboxGroup=__decorateClass$G([t$1(awcCheckboxGroupTag)],exports.AwcCheckboxGroup);const switcherStyle=i$4`
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
`;var __defProp$F=Object.defineProperty,__getOwnPropDesc$F=Object.getOwnPropertyDescriptor,__decorateClass$F=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$F(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$F(O,B,z),z};const awcSwitcherTag="awc-switcher";exports.AwcSwitcher=class extends FormControlMixin(s){constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.variant="primary",this.size="regular"}_onChange(){this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}_handleToggle(){this.disabled||(this.checked=!this.checked,this._onToggle(this.checked),this._onChange())}_handleKeyDown(O){(O.code==="Enter"||O.code==="Space")&&(this._handleToggle(),O.preventDefault())}_settingCustomColor(){this.customColor&&this.style.setProperty("--awc-switcher-custom-color",this.customColor)}resetFormControl(){this.checked=!1}shouldFormValueUpdate(){return this.checked}updated(O){super.updated(O),(O.has("checked")||O.has("value"))&&this.setValue(this.value),O.has("customColor")&&this._settingCustomColor()}render(){return x`
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
    `}},exports.AwcSwitcher.styles=[switcherStyle],__decorateClass$F([n({type:Boolean,reflect:!0})],exports.AwcSwitcher.prototype,"checked",2),__decorateClass$F([n({type:Boolean,reflect:!0})],exports.AwcSwitcher.prototype,"disabled",2),__decorateClass$F([n({type:String,reflect:!0})],exports.AwcSwitcher.prototype,"name",2),__decorateClass$F([n({type:String,reflect:!0})],exports.AwcSwitcher.prototype,"value",2),__decorateClass$F([n({type:String,reflect:!0})],exports.AwcSwitcher.prototype,"variant",2),__decorateClass$F([n({type:String,reflect:!0})],exports.AwcSwitcher.prototype,"size",2),__decorateClass$F([n({reflect:!0,attribute:"custom-color"})],exports.AwcSwitcher.prototype,"customColor",2),__decorateClass$F([event("awc-switcher-toggle")],exports.AwcSwitcher.prototype,"_onToggle",2),exports.AwcSwitcher=__decorateClass$F([t$1(awcSwitcherTag)],exports.AwcSwitcher);const dividerStyle=i$4`
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
`;var __defProp$E=Object.defineProperty,__getOwnPropDesc$E=Object.getOwnPropertyDescriptor,__decorateClass$E=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$E(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$E(O,B,z),z};exports.AwcDivider=class extends s{constructor(){super(...arguments),this.spacing="l"}render(){return x`
      <div
        class="awc-divider"
        style="--awc-divider-spacing: var(--spacing-${this.spacing});"
      >
        ${this.label?x`<span class="awc-divider__text">${this.label}</span>`:x`<div class="awc-divider__line"></div>`}
      </div>
    `}},exports.AwcDivider.styles=[dividerStyle],__decorateClass$E([n({type:String,reflect:!0})],exports.AwcDivider.prototype,"label",2),__decorateClass$E([n({type:String,reflect:!0})],exports.AwcDivider.prototype,"spacing",2),exports.AwcDivider=__decorateClass$E([t$1("awc-divider")],exports.AwcDivider);const validityStates=["valueMissing","typeMismatch","tooLong","tooShort","rangeUnderflow","rangeOverflow","stepMismatch","badInput","patternMismatch","customError"],innerInputValidators=validityStates.map(D=>({key:D,isValid(O){return O.validationTarget?!O.validationTarget.validity[D]:!0}})),textareaLengthValidator={...maxLengthValidator,isValid(D){return D.validationTarget&&D.getAttribute("maxlength")?Number(D.getAttribute("maxlength"))>=D.validationTarget.value.length:!0}};[...innerInputValidators];const inputStyle=i$4`
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
`;var __defProp$D=Object.defineProperty,__getOwnPropDesc$D=Object.getOwnPropertyDescriptor,__decorateClass$D=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$D(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$D(O,B,z),z};const awcInputTag="awc-input";exports.AwcInput=class extends FormControlMixin(s){constructor(){super(...arguments),this.value="",this.type="text",this.size="medium",this.customError="",this.autocomplete="off",this.autofocus=!1,this.required=!1,this.disabled=!1,this.readonly=!1,this.staticError=!1,this.validationMessage="",this.inputId=Math.random().toString(36).substring(2)}validityCallback(){var O;return(O=this.validationTarget)==null?void 0:O.validationMessage}validationMessageCallback(O){this.customError&&!this.staticError?(this.validationMessage=O,this.validationMessage=this.customError):this.validationMessage=O}resetFormControl(){this.validationTarget.value=""}_changeVisibilityPassword(){if(this.input&&this._passwordButton){this.input.type=this.input.type==="password"?"text":"password";const O=this.input.type==="password"?'<path fill-rule="evenodd" clip-rule="evenodd" d="M1.88016 4.52534C1.61801 4.03924 1.01143 3.85769 0.525328 4.11984C0.0392261 4.382 -0.142322 4.98858 0.119829 5.47468C0.460909 6.10714 0.886046 6.69103 1.38093 7.21455C1.35044 7.23864 1.32104 7.26476 1.29289 7.2929L0.292888 8.2929C-0.097636 8.68343 -0.097636 9.31659 0.292888 9.70712C0.683413 10.0976 1.31658 10.0976 1.7071 9.70712L2.7071 8.70712C2.77745 8.63677 2.83512 8.55856 2.88012 8.47531C3.49551 8.88444 4.16892 9.22105 4.8856 9.47295L4.51941 11.3039C4.4111 11.8455 4.76232 12.3723 5.30388 12.4806C5.84544 12.5889 6.37226 12.2377 6.48058 11.6961L6.83405 9.92873C7.21597 9.97577 7.6052 10 7.99999 10C8.39479 10 8.78401 9.97577 9.16594 9.92873L9.51941 11.6961C9.62773 12.2377 10.1546 12.5889 10.6961 12.4806C11.2377 12.3723 11.5889 11.8455 11.4806 11.3039L11.1144 9.47295C11.8311 9.22105 12.5045 8.88444 13.1199 8.47531C13.1649 8.55856 13.2225 8.63677 13.2929 8.70712L14.2929 9.70712C14.6834 10.0976 15.3166 10.0976 15.7071 9.70712C16.0976 9.31659 16.0976 8.68343 15.7071 8.2929L14.7071 7.2929C14.679 7.26476 14.6495 7.23864 14.6191 7.21455C15.1139 6.69103 15.5391 6.10714 15.8802 5.47468C16.1423 4.98858 15.9608 4.382 15.4747 4.11984C14.9886 3.85769 14.382 4.03924 14.1198 4.52534C13.0235 6.55825 10.7156 8.00001 7.99999 8.00001C5.2844 8.00001 2.97649 6.55825 1.88016 4.52534Z" fill="#919BB6"/>':'<path fill-rule="evenodd" clip-rule="evenodd" d="M0.0827055 8.39823L0.0783361 8.388C0.0249487 8.26125 -0.00032161 8.12958 -0.000259399 8.00001C-0.000324169 7.87043 0.0249465 7.73876 0.0783366 7.612L0.0827063 7.60177C1.48797 4.34653 4.46036 2 8 2C11.5396 2 14.5119 4.34645 15.9172 7.60162L15.9217 7.612C15.975 7.73875 16.0003 7.87042 16.0003 8C16.0003 8.12958 15.975 8.26125 15.9217 8.388L15.9172 8.39838C14.5119 11.6536 11.5396 14 8 14C4.46036 14 1.48797 11.6535 0.0827055 8.39823ZM8 4C10.4635 4 12.6941 5.55711 13.8989 8C12.6941 10.4429 10.4635 12 8 12C5.53648 12 3.30588 10.4429 2.10113 8C3.30588 5.55711 5.53648 4 8 4ZM8.99999 8C8.99999 8.55228 8.55228 9 7.99999 9C7.44771 9 6.99999 8.55228 6.99999 8C6.99999 7.44772 7.44771 7 7.99999 7C8.55228 7 8.99999 7.44772 8.99999 8ZM11 8C11 9.65685 9.65685 11 7.99999 11C6.34314 11 4.99999 9.65685 4.99999 8C4.99999 6.34315 6.34314 5 7.99999 5C9.65685 5 11 6.34315 11 8Z" fill="#919BB6"/>';this._passwordButton.innerHTML=`
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          ${O}
        </svg>
      `}}_updateCharacterLimit(){if(this.input&&this._progressBar&&this.maxlength!==void 0){const O=this.maxlength,B=this.value.length,F=B/O*360;if(B*100/O>70?this._progressBar.classList.add("awc-input__progress--percent"):this._progressBar.classList.remove("awc-input__progress--percent"),this._progressBar.style.setProperty("--progress",`${F}deg`),O<B){const G=O-B;this._progressBar.setAttribute("length",`${G}`),this._progressBar.classList.add("awc-input__progress--length-warning"),G<-99?this._progressBar.classList.add("awc-input__progress--small-font"):this._progressBar.classList.remove("awc-input__progress--small-font")}else this._progressBar.removeAttribute("length"),this._progressBar.classList.remove("awc-input__progress--length-warning")}}_paddingInputIcon(){(this.input&&this._passwordButton||this.input&&this._progressBar)&&this.input.classList.add("has-padding-icon")}_onKeyDown(O){if(O.code==="Enter"&&this.form){O.preventDefault();const B=this.form.querySelector("button[type='submit']"),F=this.form.querySelector("awc-button[type='submit']");B?setTimeout(()=>B.click()):F?(setTimeout(()=>F.click()),submit(this.form)):submit(this.form)}}_onInput(O){this.value=O.target.value,this.dispatchEvent(new InputEvent("input",{composed:!0,bubbles:!0}))}_onChange(O){this.value=O.target.value,this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}_onInvalid(O){O.preventDefault(),this.input.focus()}_renderPasswordButton(){return x`
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
    </div> `}_increaseCounterValue(){let O=parseFloat(this.value||"0");const B=this.step||1,F=this.max!==void 0?this.max:1/0;let z=O+B;z>F&&(z=F),this.value=z.toString(),this.dispatchEvent(new InputEvent("input",{composed:!0,bubbles:!0})),this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}_decreaseCounterValue(){let O=parseFloat(this.value);const B=this.step||1,F=this.min!==void 0?this.min:-1/0;let z=O-B;z<F&&(z=F),this.value=z.toString(),this.dispatchEvent(new InputEvent("input",{composed:!0,bubbles:!0})),this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}focus(){this.input.focus()}blur(){this.input.blur()}select(){this.input.select()}connectedCallback(){super.connectedCallback(),this.addEventListener("invalid",this._onInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._onInvalid)}updated(O){super.updated(O),O.has("value")&&this.setValue(this.value),O.has("value")&&this.maxlength&&this._updateCharacterLimit(),(this.type==="password"||this.maxlength)&&this._paddingInputIcon()}render(){const O={"awc-input":!0,[this.size]:!0,"awc-input--error":this.showError},B=this.type==="password"?this._renderPasswordButton():"",F=this.maxlength&&!B?x`<div class="awc-input__progress"></div>`:"",z=this.type==="number"?this._renderIncrementArrowButtons():"";return x`
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

            ${B} ${F} ${z}
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
    `}},exports.AwcInput.formControlValidators=innerInputValidators,exports.AwcInput.shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0},exports.AwcInput.styles=[inputStyle],__decorateClass$D([n({type:String,reflect:!0})],exports.AwcInput.prototype,"label",2),__decorateClass$D([n({reflect:!0})],exports.AwcInput.prototype,"value",2),__decorateClass$D([n({type:String,reflect:!0})],exports.AwcInput.prototype,"placeholder",2),__decorateClass$D([n({type:String,reflect:!0})],exports.AwcInput.prototype,"name",2),__decorateClass$D([n({type:String,reflect:!0})],exports.AwcInput.prototype,"hint",2),__decorateClass$D([n({reflect:!0})],exports.AwcInput.prototype,"type",2),__decorateClass$D([n({type:String,reflect:!0})],exports.AwcInput.prototype,"size",2),__decorateClass$D([n({reflect:!0,attribute:"custom-error"})],exports.AwcInput.prototype,"customError",2),__decorateClass$D([n({type:Number,reflect:!0})],exports.AwcInput.prototype,"maxlength",2),__decorateClass$D([n({type:Number,reflect:!0})],exports.AwcInput.prototype,"minlength",2),__decorateClass$D([n({type:Number,reflect:!0})],exports.AwcInput.prototype,"min",2),__decorateClass$D([n({type:Number,reflect:!0})],exports.AwcInput.prototype,"max",2),__decorateClass$D([n({type:Number,reflect:!0})],exports.AwcInput.prototype,"step",2),__decorateClass$D([n({type:String,reflect:!0})],exports.AwcInput.prototype,"pattern",2),__decorateClass$D([n({type:String,reflect:!0})],exports.AwcInput.prototype,"autocomplete",2),__decorateClass$D([n({type:Boolean,reflect:!0})],exports.AwcInput.prototype,"autofocus",2),__decorateClass$D([n({type:Boolean,reflect:!0})],exports.AwcInput.prototype,"required",2),__decorateClass$D([n({type:Boolean,reflect:!0})],exports.AwcInput.prototype,"disabled",2),__decorateClass$D([n({type:Boolean,reflect:!0})],exports.AwcInput.prototype,"readonly",2),__decorateClass$D([n({type:Boolean,reflect:!0,attribute:"static-error"})],exports.AwcInput.prototype,"staticError",2),__decorateClass$D([r$1()],exports.AwcInput.prototype,"validationMessage",2),__decorateClass$D([e$5("input")],exports.AwcInput.prototype,"validationTarget",2),__decorateClass$D([e$5(".awc-input")],exports.AwcInput.prototype,"input",2),__decorateClass$D([e$5(".awc-input__password")],exports.AwcInput.prototype,"_passwordButton",2),__decorateClass$D([e$5(".awc-input__progress")],exports.AwcInput.prototype,"_progressBar",2),exports.AwcInput=__decorateClass$D([t$1(awcInputTag)],exports.AwcInput);const textareaStyle=i$4`
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
`;var __defProp$C=Object.defineProperty,__getOwnPropDesc$C=Object.getOwnPropertyDescriptor,__decorateClass$C=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$C(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$C(O,B,z),z};const awcTextAreaTag="awc-textarea";exports.AwcTextarea=class extends FormControlMixin(s){constructor(){super(...arguments),this.value="",this.autofocus=!1,this.readonly=!1,this.disabled=!1,this.resize=!1,this.autoheight=!1,this.autocomplete="off",this.rows=2,this.cols=20,this.textAreaId=Math.random().toString(36).substring(2)}_handleInput(){this._autoHeightTextArea(this.textarea),this.value=this.textarea.value,this._onInput.bind(this)}resetFormControl(){this.value=""}_autoHeightTextArea(O){this.autoheight&&!this.resize&&(O.style.height="auto",O.style.height=`${O.scrollHeight}px`)}_onInput(O){this.value=O.target.value,this.dispatchEvent(new InputEvent("input",{composed:!0,bubbles:!0}))}_onChange(O){this.value=O.target.value,this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}updated(O){super.updated(O),O.has("value")&&(this.setValue(this.value),this.textarea.value=this.value)}firstUpdated(){this.textarea.value=this.value,this._autoHeightTextArea(this.textarea)}select(){this.textarea.select()}render(){return x`
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
    `}},exports.AwcTextarea.shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0},exports.AwcTextarea.styles=[textareaStyle],__decorateClass$C([n({type:String,reflect:!0})],exports.AwcTextarea.prototype,"value",2),__decorateClass$C([n({type:String,reflect:!0})],exports.AwcTextarea.prototype,"placeholder",2),__decorateClass$C([n({type:String,reflect:!0})],exports.AwcTextarea.prototype,"name",2),__decorateClass$C([n({type:String,reflect:!0})],exports.AwcTextarea.prototype,"label",2),__decorateClass$C([n({type:Boolean,reflect:!0})],exports.AwcTextarea.prototype,"autofocus",2),__decorateClass$C([n({type:Boolean,reflect:!0})],exports.AwcTextarea.prototype,"readonly",2),__decorateClass$C([n({type:Boolean,reflect:!0})],exports.AwcTextarea.prototype,"disabled",2),__decorateClass$C([n({type:Boolean,reflect:!0})],exports.AwcTextarea.prototype,"resize",2),__decorateClass$C([n({type:Boolean,reflect:!0})],exports.AwcTextarea.prototype,"autoheight",2),__decorateClass$C([n({type:String,reflect:!0})],exports.AwcTextarea.prototype,"autocomplete",2),__decorateClass$C([n({type:Number,reflect:!0})],exports.AwcTextarea.prototype,"rows",2),__decorateClass$C([n({type:Number,reflect:!0})],exports.AwcTextarea.prototype,"cols",2),__decorateClass$C([e$5("textarea")],exports.AwcTextarea.prototype,"textarea",2),exports.AwcTextarea=__decorateClass$C([t$1(awcTextAreaTag)],exports.AwcTextarea);const stepsStyle=i$4`
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
`;var __defProp$B=Object.defineProperty,__getOwnPropDesc$B=Object.getOwnPropertyDescriptor,__decorateClass$B=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$B(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$B(O,B,z),z};exports.AwcSteps=class extends s{constructor(){super(...arguments),this.id="stepper-1",this.report=[],this.status=1}_calcSteps(){const O=this.report.length;return Array.from({length:O},(B,F)=>(F+1).toString())}_stepUpdater(){let O=parseInt(this.status.toString(),10);if((isNaN(O)||O<1)&&(O=1,this.status=O),!this.shadowRoot)return;const B=this.shadowRoot.querySelectorAll(".progress-item");if(O<=this.report.length){B.forEach((z,G)=>{const U=G+1,Y=U<O,Q=U===O;z.classList.toggle("progress-item--past",Y),z.classList.toggle("progress-item--current",Q),Y&&z.classList.remove("progress-item--completed")});const F=O===this.report.length;B.forEach(z=>{z.classList.toggle("progress-item--completed",F)}),B.forEach(z=>{z.classList.remove("progress-item--error")})}else B.forEach(F=>{F.classList.add("progress-item--error")})}updated(O){super.updated(O),O.has("status")&&this._stepUpdater()}firstUpdated(){this._calcSteps()}render(){return x`
      <div id=${this.id} class="awc-steps">
        <div class="awc-steps__status">
          <div class="awc-steps__sticker">Шаг ${this.status}</div>
          <div class="awc-steps__report">
            ${this.report[this.status,10-1]}
          </div>
        </div>
        <div class="awc-steps__progress">${this._renderProgress()}</div>
      </div>
    `}_renderProgress(){const O=this.report.length;return Array.from({length:O},()=>x`<div class="progress-item"></div>`)}},exports.AwcSteps.styles=[stepsStyle],__decorateClass$B([n({type:String,reflect:!0})],exports.AwcSteps.prototype,"id",2),__decorateClass$B([n({type:Array,reflect:!0})],exports.AwcSteps.prototype,"report",2),__decorateClass$B([n({type:Number,reflect:!0})],exports.AwcSteps.prototype,"status",2),exports.AwcSteps=__decorateClass$B([t$1("awc-steps")],exports.AwcSteps);const iconStyle=i$4`

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
`;var __defProp$A=Object.defineProperty,__getOwnPropDesc$A=Object.getOwnPropertyDescriptor,__decorateClass$A=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$A(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$A(O,B,z),z};exports.AwcIconLoader=class extends s{constructor(){super(...arguments),this.type="icon",this.size="",this.src=""}_setGlobalIcons(){const O=this.type,B=this.size,F=this.src,z=window.__AWC_ICONS||{};return window.__AWC_ICONS=z,z[O]||(z[O]={}),z[O][B]=F,z}firstUpdated(){this._setGlobalIcons()}},__decorateClass$A([n({type:String})],exports.AwcIconLoader.prototype,"type",2),__decorateClass$A([n({type:String})],exports.AwcIconLoader.prototype,"size",2),__decorateClass$A([n({type:String})],exports.AwcIconLoader.prototype,"src",2),exports.AwcIconLoader=__decorateClass$A([t$1("awc-icon-loader")],exports.AwcIconLoader);var __defProp$z=Object.defineProperty,__getOwnPropDesc$z=Object.getOwnPropertyDescriptor,__decorateClass$z=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$z(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$z(O,B,z),z};const awcIconTag="awc-icon";exports.AwcIcon=class extends s{constructor(){super(...arguments),this.type="icon",this.size="16",this.name="",this.iconScale=""}_getGlobalIcon(){const O=window.__AWC_ICONS;if(O&&O[this.type]&&O[this.type][this.size])return O[this.type][this.size]}render(){const O=this._getGlobalIcon();if(O)return b`
        <svg
          class="awc-icon"
          style=${this.iconScale?`--awc-icon-size: ${this.iconScale}`:""}
          width=${this.size}
          height=${this.size}
        >
          <use href="${O}#${this.name}"></use>
        </svg>
        <slot></slot>
      `}},exports.AwcIcon.styles=[iconStyle],__decorateClass$z([n({type:String,reflect:!0})],exports.AwcIcon.prototype,"type",2),__decorateClass$z([n({type:String,reflect:!0})],exports.AwcIcon.prototype,"size",2),__decorateClass$z([n({type:String,reflect:!0})],exports.AwcIcon.prototype,"name",2),__decorateClass$z([n({type:String,attribute:"icon-scale"})],exports.AwcIcon.prototype,"iconScale",2),exports.AwcIcon=__decorateClass$z([t$1(awcIconTag)],exports.AwcIcon);const tooltipStyle=i$4`
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
`;var __defProp$y=Object.defineProperty,__getOwnPropDesc$y=Object.getOwnPropertyDescriptor,__decorateClass$y=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$y(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$y(O,B,z),z};const spacingValues$1={XXS:"2",XS:"4",S:"8",SM:"12",M:"16",L:"20",XL:"24",XXL:"32",XXXL:"40"};exports.AwcTooltip=class extends s{constructor(){super(...arguments),this.marker=!0,this.message="Tooltip",this.position="top",this.spacing="S",this.strategy="absolute",this.active=!1,this.disabled=!1,this.popperInstance=null,this.tooltipTimeout=null}_createPopperInstance(){!this._nestedElement||!this.shadowRoot||(this.popperInstance=createPopper(this._nestedElement,this._tooltip,{placement:this.position,modifiers:[{name:"offset",options:{offset:[0,spacingValues$1[this.spacing]]}}],strategy:this.strategy}))}_destroyPopperInstance(){this.popperInstance&&(this.popperInstance.destroy(),this.popperInstance=null)}updated(O){super.updated(O),(O.has("active")||O.has("position")||O.has("marker")||O.has("spacing"))&&(this.active?this._createPopperInstance():this._destroyPopperInstance())}_setupTimout(){this.disabled||(this.tooltipTimeout=setTimeout(()=>this.active=!0,500))}_disconnectTimeout(){this.disabled||(clearTimeout(this.tooltipTimeout),this.active=!1)}_onFocus(O){O.target&&!this.disabled&&(this.active=!0)}_onBlur(O){O.target&&!this.disabled&&(this.active=!1)}render(){return x`
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
    `}},exports.AwcTooltip.shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0},exports.AwcTooltip.styles=[tooltipStyle],__decorateClass$y([n({type:Boolean,reflect:!0})],exports.AwcTooltip.prototype,"marker",2),__decorateClass$y([n({type:String,reflect:!0})],exports.AwcTooltip.prototype,"message",2),__decorateClass$y([n({reflect:!0})],exports.AwcTooltip.prototype,"position",2),__decorateClass$y([n({type:String,reflect:!0})],exports.AwcTooltip.prototype,"spacing",2),__decorateClass$y([n({type:String,reflect:!0})],exports.AwcTooltip.prototype,"strategy",2),__decorateClass$y([n({type:Boolean,reflect:!0})],exports.AwcTooltip.prototype,"active",2),__decorateClass$y([n({type:Boolean,reflect:!0})],exports.AwcTooltip.prototype,"disabled",2),__decorateClass$y([e$5(".awc-tooltip")],exports.AwcTooltip.prototype,"_tooltip",2),__decorateClass$y([e$5(".awc-tooltip__nested")],exports.AwcTooltip.prototype,"_nestedElement",2),exports.AwcTooltip=__decorateClass$y([t$1("awc-tooltip")],exports.AwcTooltip);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let e$1=class extends i$1{constructor(O){if(super(O),this.it=T,O.type!==t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(O){if(O===T||O==null)return this._t=void 0,this.it=O;if(O===w)return O;if(typeof O!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(O===this.it)return this._t;this.it=O;const B=[O];return B.raw=B,this._t={_$litType$:this.constructor.resultType,strings:B,values:[]}}};e$1.directiveName="unsafeHTML",e$1.resultType=1;const o$1=e$3(e$1),selectItemStyle=i$4`
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
`;var __defProp$x=Object.defineProperty,__getOwnPropDesc$x=Object.getOwnPropertyDescriptor,__decorateClass$x=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$x(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$x(O,B,z),z};const awcSelectItemTag="awc-select-item";exports.AwcSelectItem=class extends FormControlMixin(s){constructor(){super(...arguments),this.selected=!1,this.disabled=!1}focus(){this.focusTarget.tabIndex=0,this.focusTarget.focus(),this.onFocus(this.value)}blur(){this.onBlur(this.value),this.focusTarget.tabIndex=-1}select(){this._onSelect([{value:this.value,selected:this.selected}])}_handleEvent(){this._onSelect([{value:this.value,selected:this.selected}]),this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}handleKeydown(O){(O.code==="Enter"||O.code==="Space")&&(this._onClickOption(),O.preventDefault())}_onClickOption(){this.selected=!0,this._handleEvent()}render(){return x`
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
    `}},exports.AwcSelectItem.shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0},exports.AwcSelectItem.styles=[selectItemStyle],__decorateClass$x([n({type:Boolean,reflect:!0})],exports.AwcSelectItem.prototype,"selected",2),__decorateClass$x([n({type:String,reflect:!0})],exports.AwcSelectItem.prototype,"value",2),__decorateClass$x([n({type:Boolean,reflect:!0})],exports.AwcSelectItem.prototype,"disabled",2),__decorateClass$x([n({type:Boolean,reflect:!0,attribute:"no-padding"})],exports.AwcSelectItem.prototype,"noPadding",2),__decorateClass$x([event("awc-select-option")],exports.AwcSelectItem.prototype,"_onSelect",2),__decorateClass$x([event("awc-select-option-focus")],exports.AwcSelectItem.prototype,"onFocus",2),__decorateClass$x([event("awc-select-option-blur")],exports.AwcSelectItem.prototype,"onBlur",2),__decorateClass$x([e$5(".awc-item-focus")],exports.AwcSelectItem.prototype,"focusTarget",2),exports.AwcSelectItem=__decorateClass$x([t$1(awcSelectItemTag)],exports.AwcSelectItem);const selectButtomStyle=i$4`
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
`;var __defProp$w=Object.defineProperty,__getOwnPropDesc$w=Object.getOwnPropertyDescriptor,__decorateClass$w=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$w(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$w(O,B,z),z};const awcSelectButtonTag="awc-select-button",awcSelectButtonEvent="awc-select-button-create";exports.AwcSelectButton=class extends s{constructor(){super(...arguments),this.slot="awc-button",this.icon=!1,this.staticButton=!1,this.dynamicButton=!1,this.isClick=!1}_handleClick(){if(this.isClick=!0,this._onClick(this.isClick),this.isClick&&this.textContent||this.label)return this.textContent=""}_handleKeyboard(O){if(O.code==="Enter"&&(this._handleClick(),this.isClick&&O.code&&this.textContent||this.label))return this.textContent=""}_handleLabelOrTextContent(){if(this.textContent&&this.label&&!this.icon)return x`${this.label} «${this.textContent}»`;if(this.textContent&&this.label)return x`${this.textContent}`;if(this.label)return x`${this.label}`}render(){const O=b`
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
        `}},exports.AwcSelectButton.styles=[selectButtomStyle],__decorateClass$w([n({type:String,reflect:!0})],exports.AwcSelectButton.prototype,"slot",2),__decorateClass$w([n({type:String,reflect:!0})],exports.AwcSelectButton.prototype,"label",2),__decorateClass$w([n({type:Boolean,reflect:!0})],exports.AwcSelectButton.prototype,"icon",2),__decorateClass$w([n({type:Boolean,reflect:!0,attribute:"static-button"})],exports.AwcSelectButton.prototype,"staticButton",2),__decorateClass$w([n({type:Boolean,reflect:!0,attribute:"dynamic-button"})],exports.AwcSelectButton.prototype,"dynamicButton",2),__decorateClass$w([n({type:String})],exports.AwcSelectButton.prototype,"copyLabel",2),__decorateClass$w([n()],exports.AwcSelectButton.prototype,"textContent",2),__decorateClass$w([event(awcSelectButtonEvent)],exports.AwcSelectButton.prototype,"_onClick",2),exports.AwcSelectButton=__decorateClass$w([t$1(awcSelectButtonTag)],exports.AwcSelectButton);const selectGroupStyle=i$4`
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
`;var __defProp$v=Object.defineProperty,__getOwnPropDesc$v=Object.getOwnPropertyDescriptor,__decorateClass$v=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$v(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$v(O,B,z),z};const awcSelectGroupTag="awc-select-group";exports.AwcSelectGroup=class extends s{render(){return x`
            <div class='awc-select-group'>
                <p class='awc-select-group__label'>${this.label}</p>
                <div class='awc-select-group__content'><slot></slot></div>
            </div>
        `}},exports.AwcSelectGroup.styles=[selectGroupStyle],__decorateClass$v([n({type:String,reflect:!0})],exports.AwcSelectGroup.prototype,"label",2),exports.AwcSelectGroup=__decorateClass$v([t$1(awcSelectGroupTag)],exports.AwcSelectGroup);const selectStyle=i$4`
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
`;var __defProp$u=Object.defineProperty,__getOwnPropDesc$u=Object.getOwnPropertyDescriptor,__decorateClass$u=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$u(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$u(O,B,z),z};const awcSelectTag="awc-select";exports.AwcSelect=class extends FormControlMixin(s){constructor(){super(...arguments),this.value="",this.inputPlacholder="",this.html=!1,this.disabled=!1,this.required=!1,this.autoselectOff=!1,this.reset=!1,this.multiple=!1,this.search=!1,this.customError="",this.staticError=!1,this.validationMessage="",this.filteredOptions=[],this.isOptionListReverse=!1,this.popperInstance=null,this._onInvalid=O=>{O.preventDefault(),this.validationTarget.focus()},this.focusedOptionIndex=-1}get options(){return[...this.querySelectorAll(awcSelectItemTag)]}get selectedOptions(){return this.options.filter(O=>O.selected)}get optionGroups(){return[...this.querySelectorAll(awcSelectGroupTag)]}get selectButtons(){return this.querySelector(awcSelectButtonTag)}_toggleOptionsList(){this.selectedOptions.length&&this.multiple?this._open():this.open?this._close():this._open()}_open(){this.open=!0,this._updateHeadContent(),this._createPopperInstance(),requestAnimationFrame(()=>{this.search&&this.open&&this.inputElement.focus()})}_close(){this.open=!1,this.focusedOptionIndex=-1,this._unhiddingOptions(),this._destroyPopperInstance(),this._clearInputValue()}_unhiddingOptions(){this.options.forEach(O=>O.removeAttribute("hidden")),this.optionGroups.forEach(O=>O.removeAttribute("hidden"))}_getItemValueAttribute(O){return O.value}_getItemTextContent(O){var B;return(B=O.textContent)==null?void 0:B.trim()}_getItemHTMLContent(O){return o$1(O.outerHTML)}_updateHeadContent(){this.selectedOptions.forEach(O=>{this.html&&O.outerHTML?(O.setAttribute("no-padding","true"),this.headContent=this._getItemHTMLContent(O)):this.headContent=this._getItemTextContent(O)||this._getItemValueAttribute(O),O.removeAttribute("no-padding")}),this._updateSelectValue()}_updateSelectValue(){this.multiple?this.value=this.selectedOptions.map(O=>this._getItemValueAttribute(O)||this._getItemTextContent(O)):this.selectedOptions.map(O=>this.value=this._getItemValueAttribute(O)||this._getItemTextContent(O)),this._updateFormData()}_singleSelection(O){O&&(this.options.forEach(B=>B.selected=!1),O.selected=!0,this._updateHeadContent(),this._updateChangeEvent())}_multipleSelection(O){this._unhiddingOptions(),this.searchText&&this._clearInputValue(),O&&(O.selected=!0,this._updateHeadContent(),this._updateChangeEvent())}_handleOption(O){const B=O.target;B&&(this._unhiddingOptions(),this.multiple?this._multipleSelection(B):this._singleSelection(B))}_updateChangeEvent(){const O=this.selectedOptions.map(B=>{var F,z;return{value:B.value||((F=B.textContent)==null?void 0:F.trim())||"",text:((z=B.textContent)==null?void 0:z.trim())||"",selected:!0}});this._onChangeSelect(O)}_handleChipsClick(O,B){O.stopPropagation(),this._removeChipsItem(B)}_renderChips(){return this.selectedOptions.map((O,B)=>x`
        <awc-chips
          reset-button
          @awc-chips-reset=${F=>this._handleChipsClick(F,B)}
          @click=${F=>F.stopPropagation()}
        >
          ${this.html?o$1(O.innerHTML):O.textContent}
        </awc-chips>
      `)}_removeChipsItem(O){const B=this.selectedOptions[O];B&&(B.selected=!1,this.selectedOptions.splice(O,1),this._updateHeadContent(),this._updateChangeEvent())}_updateFormData(){const O=new FormData;if(this.multiple&&Array.isArray(this.value))this.selectedOptions.forEach(B=>{this._appendOptionToFormData(O,B)});else if(!this.multiple&&typeof this.value=="string"){const B=this.selectedOptions[0];B&&this._appendOptionToFormData(O,B)}this.setValue(O)}_appendOptionToFormData(O,B){const F=B.value||B.textContent.trim();O.append(this.name,F)}shouldFormValueUpdate(){return Array.isArray(this.value)&&this.multiple?this.value.length>0:this.value!==null&&this.value!==""}validityCallback(){const O=document.createElement("select");return O.required=this.required,O.validationMessage}validationMessageCallback(O){this.customError&&!this.staticError?(this.validationMessage=O,this.validationMessage=this.customError):this.validationMessage=O}_setSelectedElement(){this.selectedOptions.length>=1&&!this.multiple&&(this.selectedOptions.forEach((O,B)=>{B===0?O.selected=!0:O.selected=!1}),this._updateHeadContent())}_setAutoSelectedFirstElement(){this.selectedOptions.length===0&&!this.multiple&&this.options.length>0&&(this.options[0].selected=!0,this._updateHeadContent())}resetFormControl(){this.options.forEach(O=>O.selected=!1),this.value=this.multiple?[]:"",this.headContent="",this.setValue(new FormData),this._onChangeSelect([]),this._close()}_resetButton(){if(this.reset&&this.selectedOptions.length>0)return x`<awc-toolbar-button
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
      </awc-toolbar-button>`}_handleResetClick(O){O.stopPropagation(),this.resetFormControl()}_handleOptionKeyboard(O){if(O.code==="Enter"||O.code==="Space")this._toggleOptionsList(),O.preventDefault(),O.stopPropagation();else if(this.open===!1&&["ArrowDown","ArrowUp"].includes(O.code))this._open(),O.preventDefault();else if(O.code==="Escape")this._close(),O.preventDefault();else if(this.open&&["ArrowDown","ArrowUp"].includes(O.code)){if(this.isOptionListReverse?(O.code==="ArrowUp"&&this.focusedOptionIndex--,O.code==="ArrowDown"&&this.focusedOptionIndex++):(O.code==="ArrowDown"&&this.focusedOptionIndex++,O.code==="ArrowUp"&&this.focusedOptionIndex--),this.search&&this.searchText){if(this.filteredOptions.length===0)return;this.focusedOptionIndex=Math.max(0,Math.min(this.focusedOptionIndex,this.filteredOptions.length-1)),this.filteredOptions[this.focusedOptionIndex].focus()}else{const B=this.options.filter(F=>F.tagName==="AWC-SELECT-ITEM");this.focusedOptionIndex=Math.max(0,Math.min(this.focusedOptionIndex,B.length-1)),B[this.focusedOptionIndex].focus()}this.scrollToFocusedOption(),O.preventDefault()}}scrollToFocusedOption(){const O=this.optionList.children[this.focusedOptionIndex];O&&O.scrollIntoView({block:"nearest"})}_handleDocumentClick(O){O.composedPath().includes(this)||this._close()}_handleInput(){this.searchText=this.inputElement.value,this._filterOptions(),this._buttonSearchTextUpdate(),this._onSearch(this.searchText)}_handleInputKeydown(O){(O.code==="Enter"||O.code==="Space")&&this.open&&O.stopPropagation()}_buttonSearchTextUpdate(){if(this.selectButtons)return this.selectButtons.textContent=this.searchText}_staticCreateButton(){if(this.selectButtons.isClick){const B=this._buttonSearchTextUpdate();this._onCreateOption({value:B,selected:!0,text:B})}}_dynamicCreateOption(){if(this.selectButtons.isClick){const B=this._buttonSearchTextUpdate();this.createSelectItem(B,B,!0),this._onCreateOption({value:B,selected:!0,text:B}),this._clearInputValue()}}createSelectItem(O,B,F){const z=document.createElement(awcSelectItemTag);this.html?z.innerHTML=O:z.textContent=O,z.value=B??O,F&&(z.selected=!0,this.multiple||this.selectedOptions.forEach(G=>G.selected=!1)),this.appendChild(z),this.requestUpdate(),this._updateHeadContent(),this._unhiddingOptions()}handleCreateOption(O){if(this.inputElement){if(O.target&&this.inputElement.value==="")return;{const B=this.selectButtons.staticButton,F=this.selectButtons.dynamicButton;B&&this._staticCreateButton(),F&&this._dynamicCreateOption()}}}_filterOptions(){const O=this.searchText.toLowerCase();this.filteredOptions=this.options.filter(B=>{var G;const F=(G=B.textContent)==null?void 0:G.toLowerCase(),z=F==null?void 0:F.includes(O);return z?B.removeAttribute("hidden"):B.setAttribute("hidden",""),z}),this._filterGroups(),this.scrollToFocusedOption()}_filterGroups(){this.optionGroups.forEach(O=>{Array.from(O.children).some(F=>!F.hasAttribute("hidden"))?O.removeAttribute("hidden"):O.setAttribute("hidden","")})}_showPlaceholderOrSelectItem(){return this.multiple&&this.placeholder?this.selectedOptions.length?this._renderChips():x`<p class="awc-select__placeholder">${this.placeholder}</p>`:this.multiple&&!this.placeholder?this._renderChips():this.headContent?this.headContent:x`<p class="awc-select__placeholder">${this.placeholder}</p>`}_renderInput(){return x`
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
    `}_clearInputValue(){this.inputElement&&(this.searchText="",this.inputElement.value="")}_checkingListPosition(){this._selectOptions&&requestAnimationFrame(()=>{this._selectOptions.getAttribute("data-popper-placement")==="top"?this.isOptionListReverse=!0:this.isOptionListReverse=!1})}_createPopperInstance(){this._selectHead&&this._selectOptions&&(this.popperInstance=createPopper(this._selectHead,this._selectOptions,{placement:"bottom-start",strategy:"absolute",modifiers:[{name:"preventOverflow",options:{boundary:this._selectHead}}]}),this.popperInstance.forceUpdate())}_destroyPopperInstance(){var O;(O=this.popperInstance)==null||O.destroy(),this.popperInstance=null}_renderMultipleSelect(){const O={"awc-select":!0,"awc-select--error":this.showError},B={"awc-select__options":!0,"awc-select__options--open":this.open},F={"awc-select__head":!0,"border-radius":!0,"border-radius--reverse":this.isOptionListReverse},z=x`
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
            ${this._resetButton()} ${z}
          </div>
        </div>

        <div class=${e$2(B)}>
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
      ${this.staticError&&this.required&&this.customError?x`<span class="awc-select__error">${this.customError}</span>`:this.hint&&this.staticError?x`<span class="awc-select__hint">${this.hint}</span>`:""} `}_renderSingleSelect(){const O={"awc-select":!0,"awc-select--error":this.showError||this.staticError&&this.required},B={"awc-select__options":!0,"awc-select__options--open":this.open,"awc-select--error":this.showError},F={"awc-select__head":!0,"border-radius":!0,"border-radius--reverse":this.isOptionListReverse},z=x`
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
            ${this._resetButton()} ${z}
          </div>
        </div>

        <div class=${e$2(B)}>
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
    `}connectedCallback(){super.connectedCallback(),this.addEventListener("invalid",this._onInvalid),document.addEventListener("click",O=>this._handleDocumentClick(O)),document.addEventListener("DOMContentLoaded",()=>{this._updateHeadContent(),this.autoselectOff?this._setSelectedElement():this._setAutoSelectedFirstElement()})}updated(O){super.updated(O),O.has("open")&&this._checkingListPosition(),this.disabled&&this.open&&this._close(),O.has("searchText")&&this._buttonSearchTextUpdate(),O.has("multiple")&&this._updateHeadContent(),O.has("autoselectOff")&&(this.autoselectOff?this._setSelectedElement():this._setAutoSelectedFirstElement())}render(){return this.multiple?this._renderMultipleSelect():this._renderSingleSelect()}},exports.AwcSelect.formControlValidators=[requiredValidator],exports.AwcSelect.shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0},exports.AwcSelect.styles=[scrollStyle,selectStyle],__decorateClass$u([n({type:String,reflect:!0})],exports.AwcSelect.prototype,"name",2),__decorateClass$u([n()],exports.AwcSelect.prototype,"value",2),__decorateClass$u([n({type:String,reflect:!0})],exports.AwcSelect.prototype,"placeholder",2),__decorateClass$u([n({type:String,attribute:"input-placeholder"})],exports.AwcSelect.prototype,"inputPlacholder",2),__decorateClass$u([n({type:String,reflect:!0})],exports.AwcSelect.prototype,"hint",2),__decorateClass$u([n({type:Boolean,reflect:!0})],exports.AwcSelect.prototype,"html",2),__decorateClass$u([n({type:Boolean,reflect:!0})],exports.AwcSelect.prototype,"open",2),__decorateClass$u([n({type:Boolean,reflect:!0})],exports.AwcSelect.prototype,"disabled",2),__decorateClass$u([n({type:Boolean,reflect:!0})],exports.AwcSelect.prototype,"required",2),__decorateClass$u([n({type:Boolean,reflect:!0,attribute:"autoselect-off"})],exports.AwcSelect.prototype,"autoselectOff",2),__decorateClass$u([n({type:Boolean,reflect:!0})],exports.AwcSelect.prototype,"reset",2),__decorateClass$u([n({type:Boolean,reflect:!0})],exports.AwcSelect.prototype,"multiple",2),__decorateClass$u([n({type:Boolean,reflect:!0})],exports.AwcSelect.prototype,"search",2),__decorateClass$u([n({reflect:!0,attribute:"custom-error"})],exports.AwcSelect.prototype,"customError",2),__decorateClass$u([n({type:Boolean,reflect:!0,attribute:"static-error"})],exports.AwcSelect.prototype,"staticError",2),__decorateClass$u([event("awc-select-search")],exports.AwcSelect.prototype,"_onSearch",2),__decorateClass$u([event("awc-create-option")],exports.AwcSelect.prototype,"_onCreateOption",2),__decorateClass$u([event("awc-select-change")],exports.AwcSelect.prototype,"_onChangeSelect",2),__decorateClass$u([e$5(".awc-select__input")],exports.AwcSelect.prototype,"inputElement",2),__decorateClass$u([e$5(".awc-select")],exports.AwcSelect.prototype,"validationTarget",2),__decorateClass$u([e$5(".awc-select-list")],exports.AwcSelect.prototype,"optionList",2),__decorateClass$u([e$5(".awc-select")],exports.AwcSelect.prototype,"_selectHead",2),__decorateClass$u([e$5(".awc-select__options")],exports.AwcSelect.prototype,"_selectOptions",2),__decorateClass$u([r$1()],exports.AwcSelect.prototype,"validationMessage",2),__decorateClass$u([r$1()],exports.AwcSelect.prototype,"headContent",2),__decorateClass$u([r$1()],exports.AwcSelect.prototype,"searchText",2),__decorateClass$u([r$1()],exports.AwcSelect.prototype,"filteredOptions",2),__decorateClass$u([r$1()],exports.AwcSelect.prototype,"isOptionListReverse",2),exports.AwcSelect=__decorateClass$u([t$1(awcSelectTag)],exports.AwcSelect);const dieStyle=i$4`
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
 */const e=Symbol.for(""),o=D=>{if((D==null?void 0:D.r)===e)return D==null?void 0:D._$litStatic$},a=new Map,l=D=>(O,...B)=>{const F=B.length;let z,G;const U=[],Y=[];let Q,ne=0,oe=!1;for(;ne<F;){for(Q=O[ne];ne<F&&(G=B[ne],(z=o(G))!==void 0);)Q+=z+O[++ne],oe=!0;ne!==F&&Y.push(G),U.push(Q),ne++}if(ne===F&&U.push(O[F]),oe){const ce=U.join("$$lit$$");(O=a.get(ce))===void 0&&(U.raw=U,a.set(ce,O=U)),B=Y}return D(O,...B)},u=l(b);var __defProp$t=Object.defineProperty,__getOwnPropDesc$t=Object.getOwnPropertyDescriptor,__decorateClass$t=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$t(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$t(O,B,z),z};exports.AwcDie=class extends s{constructor(){super(...arguments),this.text="",this.placeholder="",this.editing=!1,this.color="--colors-light-primary"}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",this.handleFocus),this.addEventListener("blur",this.handleBlur),this.addEventListener("dblclick",this.handleMouseDown)}handleFocus(){this._onFocus(this.text)}handleBlur(){this._onBlur(this.text),this.stopEditing(),this.triggerChange()}handleMouseDown(){this.startEditing(),this.setCursorToEnd()}handleInput(){this.contentElement&&(this.text=this.contentElement.value)}handleEnterKey(O){O.key==="Enter"&&(O.preventDefault(),this.handleFocus(),this.blur())}setCursorToEnd(){if(this.contentElement){const O=this.contentElement.value.length;this.contentElement.setSelectionRange(O,O)}}startEditing(){this.editing=!0}stopEditing(){this.editing=!1}triggerChange(){this._onChange(this.text)}updated(O){super.updated(O),O.has("editing")?(this._renderEditMode(),this.contentElement&&this.contentElement.focus()):this._renderReadOnlyMode()}_renderEditMode(){return x`
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
        `}},exports.AwcDie.styles=[dieStyle],__decorateClass$t([n({type:String})],exports.AwcDie.prototype,"text",2),__decorateClass$t([n({type:String})],exports.AwcDie.prototype,"placeholder",2),__decorateClass$t([n({type:Boolean,reflect:!0})],exports.AwcDie.prototype,"editing",2),__decorateClass$t([n({type:String,attribute:"color"})],exports.AwcDie.prototype,"color",2),__decorateClass$t([event("awc-die-change")],exports.AwcDie.prototype,"_onChange",2),__decorateClass$t([event("awc-die-focus")],exports.AwcDie.prototype,"_onFocus",2),__decorateClass$t([event("awc-die-blur")],exports.AwcDie.prototype,"_onBlur",2),__decorateClass$t([e$5(".awc-die__content--edit")],exports.AwcDie.prototype,"contentElement",2),exports.AwcDie=__decorateClass$t([t$1("awc-die")],exports.AwcDie);const stagerStyle=i$4`
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

`;var __defProp$s=Object.defineProperty,__getOwnPropDesc$s=Object.getOwnPropertyDescriptor,__decorateClass$s=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$s(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$s(O,B,z),z};exports.AwcStager=class extends s{constructor(){super(...arguments),this.steps=5,this.current=2,this.stepColor="--colors-light-primary",this._connected=!1}connectedCallback(){super.connectedCallback(),this._connected=!0,this._stepUpdater()}_handleChange(){this._onChange(this.current)}_colorUpdater(O){O&&(this.stepColor.startsWith("--")?O.style.cssText=`background-color: var(${this.stepColor})`:O.style.cssText=`background-color: ${this.stepColor}`)}_stepUpdater(){var F;if(!this._connected)return;let O=this.current;(isNaN(O)||O<1)&&(O=1,this.current=O),((F=this.shadowRoot)==null?void 0:F.querySelectorAll(".awc-stager__item")).forEach((z,G)=>{const Y=G+1<O+1;z.classList.toggle("awc-stager__item--current",Y)&&this._colorUpdater(z)})}attributeChangedCallback(O,B,F){super.attributeChangedCallback(O,B,F),O==="step-color"&&F!==null&&(this.stepColor=F,this._stepUpdater())}updated(O){super.updated(O),O.has("current")&&(this._stepUpdater(),this._handleChange())}render(){return x`
      <div class="awc-stager">
        <div class="awc-stager__progress">${this._renderProgress()}</div>
      </div>
    `}_renderProgress(){return Array.from({length:this.steps},()=>x`<div class="awc-stager__item"></div>`)}},exports.AwcStager.styles=[stagerStyle],__decorateClass$s([n({type:Number,reflect:!0})],exports.AwcStager.prototype,"steps",2),__decorateClass$s([n({type:Number,reflect:!0})],exports.AwcStager.prototype,"current",2),__decorateClass$s([n({type:String,attribute:"step-color"})],exports.AwcStager.prototype,"stepColor",2),__decorateClass$s([event("awc-stager-change")],exports.AwcStager.prototype,"_onChange",2),exports.AwcStager=__decorateClass$s([t$1("awc-stager")],exports.AwcStager);const chipsStyle=i$4`
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
`;var __defProp$r=Object.defineProperty,__getOwnPropDesc$r=Object.getOwnPropertyDescriptor,__decorateClass$r=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$r(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$r(O,B,z),z};exports.AwcChips=class extends s{constructor(){super(...arguments),this.resetButton=!1}_checkedAwcAvatar(){this.slotElement.assignedNodes().filter(B=>B.nodeName.toLowerCase()==="awc-avatar").length===1?this.chips.classList.add("awc-chips__avatar"):this.chips.classList.remove("awc-chips__avatar")}handleResetClick(){this._onRemoveChips(this.resetButton)}updated(O){super.updated(O),this._checkedAwcAvatar()}render(){return x`
            <div class='awc-chips'>
                <slot @slotchange=${this._checkedAwcAvatar}></slot>
                ${this.resetButton?x`
                    <svg class="awc-chips__reset" @click=${this.handleResetClick} width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.70713 4.29291C5.3166 3.90239 4.68344 3.90239 4.29291 4.29291C3.90239 4.68344 3.90239 5.3166 4.29291 5.70713L6.58237 7.99658L4.29185 10.294C3.90191 10.6851 3.90286 11.3182 4.29397 11.7082C4.68508 12.0981 5.31824 12.0972 5.70818 11.7061L7.99659 9.4108L10.2929 11.7071C10.6834 12.0976 11.3166 12.0976 11.7071 11.7071C12.0976 11.3166 12.0976 10.6834 11.7071 10.2929L9.40868 7.99447L11.6902 5.70607C12.0802 5.31496 12.0792 4.68179 11.6881 4.29185C11.297 3.90191 10.6638 3.90286 10.2739 4.29397L7.99447 6.58025L5.70713 4.29291Z"/>
                    </svg>`:""}
            </div>
        `}},exports.AwcChips.styles=[chipsStyle],__decorateClass$r([n({type:Boolean,reflect:!0,attribute:"reset-button"})],exports.AwcChips.prototype,"resetButton",2),__decorateClass$r([event("awc-chips-reset")],exports.AwcChips.prototype,"_onRemoveChips",2),__decorateClass$r([e$5(".awc-chips")],exports.AwcChips.prototype,"chips",2),__decorateClass$r([e$5("slot")],exports.AwcChips.prototype,"slotElement",2),exports.AwcChips=__decorateClass$r([t$1("awc-chips")],exports.AwcChips);const userInfoStyle=i$4`
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
`;var __defProp$q=Object.defineProperty,__getOwnPropDesc$q=Object.getOwnPropertyDescriptor,__decorateClass$q=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$q(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$q(O,B,z),z};exports.AwcUserInfo=class extends s{constructor(){super(...arguments),this.reverse=!1,this.status="none",this.target="_self",this.avatatColor=AvatarColor.GlobalBlue400}render(){return this.href?x`
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
        `}},exports.AwcUserInfo.styles=[userInfoStyle],__decorateClass$q([n({type:String,reflect:!0})],exports.AwcUserInfo.prototype,"name",2),__decorateClass$q([n({type:String,reflect:!0})],exports.AwcUserInfo.prototype,"description",2),__decorateClass$q([n({type:Boolean,reflect:!0})],exports.AwcUserInfo.prototype,"reverse",2),__decorateClass$q([n({type:String,reflect:!0,attribute:"avatar-status"})],exports.AwcUserInfo.prototype,"status",2),__decorateClass$q([n({type:String,attribute:"avatar-image"})],exports.AwcUserInfo.prototype,"avatarLink",2),__decorateClass$q([n({type:String})],exports.AwcUserInfo.prototype,"target",2),__decorateClass$q([n({type:String,attribute:"avatar-custom-color"})],exports.AwcUserInfo.prototype,"avatarCustomColor",2),__decorateClass$q([n({type:String})],exports.AwcUserInfo.prototype,"href",2),__decorateClass$q([n({type:String,attribute:"avatar-color"})],exports.AwcUserInfo.prototype,"avatatColor",2),exports.AwcUserInfo=__decorateClass$q([t$1("awc-user-info")],exports.AwcUserInfo);const awcButtonGroupStyle=i$4`
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
`;var __defProp$p=Object.defineProperty,__getOwnPropDesc$p=Object.getOwnPropertyDescriptor,__decorateClass$p=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$p(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$p(O,B,z),z};const awcButtonGroupItemTag="awc-button-group-item";exports.AwcButtonGroupItem=class extends s{constructor(){super(...arguments),this.expanded=!1,this.readonly=!1,this.disabled=!1}render(){return x`
      <button
        ?readonly=${this.readonly}
        ?expanded=${this.expanded}
        ?disabled=${this.disabled}
        class="awc-button-group-item ${this.position}"
      >
        <slot></slot>
      </button>
    `}},exports.AwcButtonGroupItem.styles=[awcButtonGroupItemStyle],__decorateClass$p([n({type:Boolean,reflect:!0})],exports.AwcButtonGroupItem.prototype,"expanded",2),__decorateClass$p([n({type:Boolean,reflect:!0})],exports.AwcButtonGroupItem.prototype,"readonly",2),__decorateClass$p([n({type:Boolean,reflect:!0})],exports.AwcButtonGroupItem.prototype,"disabled",2),__decorateClass$p([n({type:String})],exports.AwcButtonGroupItem.prototype,"position",2),exports.AwcButtonGroupItem=__decorateClass$p([t$1(awcButtonGroupItemTag)],exports.AwcButtonGroupItem);var __defProp$o=Object.defineProperty,__getOwnPropDesc$o=Object.getOwnPropertyDescriptor,__decorateClass$o=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$o(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$o(O,B,z),z};const awcButtonGroupTag="awc-button-group";exports.AwcButtonGroup=class extends s{constructor(){super(...arguments),this.disabled=!1}get buttons(){return[...this.querySelectorAll(awcButtonGroupItemTag)]}_checkInternalButtonGroup(){this.buttons&&this.buttons.length&&this._combiningButtons(this.buttons)}_combiningButtons(O){if(!O||O.length===0)return;let B=-1;O.forEach((F,z)=>{z===0?F.position="first":z===O.length-1?F.position="last":(F.position="inner",B=z)}),B!==-1&&(O[B].position="inner inner-last")}render(){return x`
      <div class="awc-button-group">
        <slot @slotchange="${this._checkInternalButtonGroup}"></slot>
      </div>
    `}},exports.AwcButtonGroup.styles=[awcButtonGroupStyle],__decorateClass$o([n({type:Boolean,reflect:!0})],exports.AwcButtonGroup.prototype,"disabled",2),exports.AwcButtonGroup=__decorateClass$o([t$1(awcButtonGroupTag)],exports.AwcButtonGroup);const accordionItemStyle=i$4`
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
`;var __defProp$n=Object.defineProperty,__getOwnPropDesc$n=Object.getOwnPropertyDescriptor,__decorateClass$n=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$n(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$n(O,B,z),z};const awcAccordionItemTag="awc-accordion-item";exports.AwcAccordionItem=class extends s{constructor(){super(...arguments),this.active=!1,this.disabled=!1}_toggleActive(){this.disabled||(this.active=!this.active,this._onActive(this.active))}render(){const O=b`
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
    `}},exports.AwcAccordionItem.styles=[accordionItemStyle],__decorateClass$n([n({type:String,reflect:!0})],exports.AwcAccordionItem.prototype,"title",2),__decorateClass$n([n({type:Boolean,reflect:!0})],exports.AwcAccordionItem.prototype,"active",2),__decorateClass$n([n({type:Boolean,reflect:!0})],exports.AwcAccordionItem.prototype,"disabled",2),__decorateClass$n([event("awc-accordion-toggle")],exports.AwcAccordionItem.prototype,"_onActive",2),exports.AwcAccordionItem=__decorateClass$n([t$1(awcAccordionItemTag)],exports.AwcAccordionItem);const accordionStyle=i$4`
    :host{
        display: block;
    }

    :host([disabled]){
        opacity: .5;
        pointer-events: none;
        touch-action: none;
    }

`;var __defProp$m=Object.defineProperty,__getOwnPropDesc$m=Object.getOwnPropertyDescriptor,__decorateClass$m=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$m(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$m(O,B,z),z};const awcAccordionTag="awc-accordion";exports.AwcAccordion=class extends s{constructor(){super(...arguments),this.disabled=!1,this.autoclose=!1}get accordionItems(){return[...this.querySelectorAll(awcAccordionItemTag)]}_autocloseAccordionItem(O){if(!this.autoclose)return;const B=O.target;B.disabled&&this.disabled||(B.active?(this.accordionItems.forEach(F=>F.active=!1),B.active=!0):(B.active=!0,B.active&&(B.active=!1)))}_handleAccordionItem(O){this._autocloseAccordionItem(O)}_shutdownAllAccordionItems(){this.disabled?this.accordionItems.forEach(O=>O.disabled=!0):this.accordionItems.forEach(O=>O.disabled=!1)}updated(O){super.updated(O),O.has("disabled")&&this._shutdownAllAccordionItems()}render(){return x`
      <div ?disabled=${this.disabled} class="awc-accordion">
        <slot @awc-accordion-toggle=${this._handleAccordionItem}></slot>
      </div>
    `}},exports.AwcAccordion.styles=[accordionStyle],__decorateClass$m([n({type:Boolean,reflect:!0})],exports.AwcAccordion.prototype,"disabled",2),__decorateClass$m([n({type:Boolean,reflect:!0})],exports.AwcAccordion.prototype,"autoclose",2),exports.AwcAccordion=__decorateClass$m([t$1(awcAccordionTag)],exports.AwcAccordion);const awcRangeStyle=i$4`
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
`;var __defProp$l=Object.defineProperty,__getOwnPropDesc$l=Object.getOwnPropertyDescriptor,__decorateClass$l=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$l(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$l(O,B,z),z};const awcRangeItemTag="awc-range-item";exports.AwcRangeItem=class extends s{constructor(){super(...arguments),this.value="0"}render(){return x`
      <li value=${this.value} class="awc-range-item">
        <p class="awc-range-item__text"><slot></slot></p>
      </li>
    `}},exports.AwcRangeItem.styles=[awcRangeItemStyle],__decorateClass$l([n({type:String,reflect:!0})],exports.AwcRangeItem.prototype,"value",2),exports.AwcRangeItem=__decorateClass$l([t$1(awcRangeItemTag)],exports.AwcRangeItem);var __defProp$k=Object.defineProperty,__getOwnPropDesc$k=Object.getOwnPropertyDescriptor,__decorateClass$k=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$k(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$k(O,B,z),z};exports.AwcRange=class extends FormControlMixin(s){constructor(){super(...arguments),this.name="0",this.value="0",this.marker=!1,this.min=0,this.max=100,this.step=1}get rangeItem(){return[...this.querySelectorAll(awcRangeItemTag)]}updated(O){super.updated(O),O.has("value")&&this.setValue(this.value)}_handleMarkers(O){const B=O.target;!B||B.tagName!=="AWC-RANGE-ITEM"||(this.value=B.value,this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0})))}_handleInputValue(O){const B=O.target;this.value=B.value,this.dispatchEvent(new Event("input",{composed:!0,bubbles:!0}))}_handleChangeValue(O){const B=O.target;this.value=B.value,this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}render(){return x`
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
    `}},exports.AwcRange.styles=[awcRangeStyle],__decorateClass$k([n({type:String,reflect:!0})],exports.AwcRange.prototype,"name",2),__decorateClass$k([n({type:String,reflect:!0})],exports.AwcRange.prototype,"value",2),__decorateClass$k([n({type:String,reflect:!0})],exports.AwcRange.prototype,"label",2),__decorateClass$k([n({type:Boolean,reflect:!0})],exports.AwcRange.prototype,"marker",2),__decorateClass$k([n({type:Boolean,reflect:!0})],exports.AwcRange.prototype,"disabled",2),__decorateClass$k([n({type:Number,reflect:!0})],exports.AwcRange.prototype,"min",2),__decorateClass$k([n({type:Number,reflect:!0})],exports.AwcRange.prototype,"max",2),__decorateClass$k([n({type:Number,reflect:!0})],exports.AwcRange.prototype,"step",2),exports.AwcRange=__decorateClass$k([t$1("awc-range")],exports.AwcRange);const progressBarStyle=i$4`
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
`;var __defProp$j=Object.defineProperty,__getOwnPropDesc$j=Object.getOwnPropertyDescriptor,__decorateClass$j=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$j(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$j(O,B,z),z};const awcProgressBarTag="awc-progress-bar";exports.AwcProgressBar=class extends s{constructor(){super(...arguments),this.value=0,this.max=100,this.label="",this.sise="medium",this.hidePercent=!1}_validateAndUpdateValues(){(isNaN(this.value)||this.value<0)&&(this.value=0),(isNaN(this.max)||this.max<0)&&(this.max=100),this.value>this.max&&(this.value=this.max,this._onSuccesEvent()),this._updateFillerWidth()}_updateFillerWidth(){const O=this.value/this.max*100;this.fillerElement&&(this.fillerElement.style.width=`${O}%`)}_onSuccesEvent(){const O={value:this.value,maxReached:!0};this._onSucces(O),this._updateFillerWidth()}updated(O){super.updated(O),(O.has("value")||O.has("max"))&&this._validateAndUpdateValues()}render(){const O=this.hidePercent?"":"%";return x`
            <div 
            ?hide-percent=${this.hidePercent}
            size=${this.sise}
            class="awc-progress-bar">
                ${this.label?x`<div class="awc-progress-bar__label">${this.label}: <span class="awc-progress-bar__value">${this.value}${O}</span></div>`:""}
                <div class="awc-progress-bar__track">
                    <div class="awc-progress-bar__filler"></div>
                </div>
            </div>
        `}},exports.AwcProgressBar.styles=[progressBarStyle],__decorateClass$j([n({type:Number,reflect:!0})],exports.AwcProgressBar.prototype,"value",2),__decorateClass$j([n({type:Number,reflect:!0})],exports.AwcProgressBar.prototype,"max",2),__decorateClass$j([n({type:String,reflect:!0})],exports.AwcProgressBar.prototype,"label",2),__decorateClass$j([n({type:String,reflect:!0})],exports.AwcProgressBar.prototype,"sise",2),__decorateClass$j([n({type:Boolean,reflect:!0,attribute:"hide-percent"})],exports.AwcProgressBar.prototype,"hidePercent",2),__decorateClass$j([event("awc-progress-bar-success")],exports.AwcProgressBar.prototype,"_onSucces",2),__decorateClass$j([e$5(".awc-progress-bar__filler")],exports.AwcProgressBar.prototype,"fillerElement",2),exports.AwcProgressBar=__decorateClass$j([t$1(awcProgressBarTag)],exports.AwcProgressBar);const emptyStateStyle=i$4`
    
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
`;var __defProp$i=Object.defineProperty,__getOwnPropDesc$i=Object.getOwnPropertyDescriptor,__decorateClass$i=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$i(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$i(O,B,z),z};const awcEmptyStateTag$1="awc-empty-state";exports.AwcEmptyState=class extends s{constructor(){super(...arguments),this.size="large"}get icons(){return[...this.querySelectorAll(awcIconTag)]}get buttons(){return[...this.querySelectorAll(awcButtonTag)]}_scalingIcon(){this.icons&&this.icons.forEach(O=>{this.size==="large"?O.iconScale="78px":O.iconScale="48px"})}_setCurrentButtons(){this.buttons&&this.buttons.forEach(O=>{this.size==="large"?O.size="large":O.size="regular",O.variant="primary",O.background="blue"})}updated(O){super.updated(O),this._scalingIcon(),this._setCurrentButtons()}render(){return x`
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
    `}},exports.AwcEmptyState.styles=[emptyStateStyle],__decorateClass$i([n({type:String,reflect:!0})],exports.AwcEmptyState.prototype,"head",2),__decorateClass$i([n({type:String,reflect:!0})],exports.AwcEmptyState.prototype,"size",2),exports.AwcEmptyState=__decorateClass$i([t$1(awcEmptyStateTag$1)],exports.AwcEmptyState);const emptyStateLinkStyle=i$4`

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
`;var __defProp$h=Object.defineProperty,__getOwnPropDesc$h=Object.getOwnPropertyDescriptor,__decorateClass$h=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$h(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$h(O,B,z),z};const awcEmptyStateTag="awc-empty-state-link";exports.AwcEmptyStateLink=class extends s{constructor(){super(...arguments),this.target="_self"}render(){return this.href?x`
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
    `}},exports.AwcEmptyStateLink.styles=[emptyStateLinkStyle],__decorateClass$h([n({type:String,reflect:!0})],exports.AwcEmptyStateLink.prototype,"href",2),__decorateClass$h([n({type:String,reflect:!0})],exports.AwcEmptyStateLink.prototype,"target",2),exports.AwcEmptyStateLink=__decorateClass$h([t$1(awcEmptyStateTag)],exports.AwcEmptyStateLink);const tagStyle=i$4`
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

`;var __defProp$g=Object.defineProperty,__getOwnPropDesc$g=Object.getOwnPropertyDescriptor,__decorateClass$g=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$g(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$g(O,B,z),z};const awcTagTag="awc-tag";exports.AwcTag=class extends s{constructor(){super(...arguments),this.baseColor="colors-light-secondary",this.variant="square"}pickTextColorBasedOnBgColor(O,B,F){if(O){let z=O.charAt(0)==="#"?O.substring(1,7):O;const G=parseInt(z.substring(0,2),16),U=parseInt(z.substring(2,4),16),Y=parseInt(z.substring(4,6),16);return G*.299+U*.587+Y*.114>186?F:B}}render(){const O=this.variant==="square"?this.pickTextColorBasedOnBgColor(this.customColor||this.baseColor,"--awc-tag-text-color: #FFFFFF","--awc-tag-text-color: #55555A"):"",B=this.customColor?this.customColor:`var(--${this.baseColor})`;return x`
      <div class="awc-tag" style="--awc-tag-color: ${B}">
        <p class="awc-tag__text" style=${O}><slot></slot></p>
      </div>
    `}},exports.AwcTag.styles=[tagStyle],__decorateClass$g([n({type:String,reflect:!0,attribute:"custom-color"})],exports.AwcTag.prototype,"customColor",2),__decorateClass$g([n({type:String,reflect:!0,attribute:"base-color"})],exports.AwcTag.prototype,"baseColor",2),__decorateClass$g([n({type:String,reflect:!0})],exports.AwcTag.prototype,"variant",2),exports.AwcTag=__decorateClass$g([t$1(awcTagTag)],exports.AwcTag);const colorPickerStyle=i$4`
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
`;var __defProp$f=Object.defineProperty,__getOwnPropDesc$f=Object.getOwnPropertyDescriptor,__decorateClass$f=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$f(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$f(O,B,z),z};const awcColorPickerTag="awc-color-picker";exports.AwcColorPicker=class extends FormControlMixin(s){constructor(){super(...arguments),this.active=!1,this.reset=!1,this.BASE_PALETTE_COLORS=["#ED3A3A","#F74F4F","#FB7C28","#F8AF28","#FED34A","#81D83C","#5FB829","#1EA679","#35D3AC","#44CADA","#2FB9CE","#52ACF5","#2A8CE3","#3761E9","#5D7EF7","#8360F4","#704AE5","#AC3EC7","#C764DF","#E44662","#FF7188","#919BB6","#55555A","#26263E"],this.activeTab=0}get tabs(){return[...this.querySelectorAll(awcTabTag)]}_triggerChangeEvent(O){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}_handleColorSelection(O){var z;const B=O.currentTarget;if(!B||!B.hasAttribute("value"))return;this.colorItems.forEach(G=>G.classList.remove("active-color")),B.classList.add("active-color");const F=(z=B.getAttribute("value"))==null?void 0:z.toLowerCase();F&&(this.value=F,this._triggerChangeEvent(O),this._onChangeColor(this.value))}_setCustomColorValue(O){this.value=this._inputColor.value}_setDefaultColorInBasePalette(){this.colorItems.forEach(O=>O.classList.remove("active-color")),this.BASE_PALETTE_COLORS.forEach(O=>{this.value&&O===this.value.toUpperCase()&&this.colorItems.forEach(B=>{B.getAttribute("value")===O&&B.classList.add("active-color")})})}_checkAssignedAwcTabs(){if(!this.tabs)return;let O=-1;this.tabs.forEach((B,F)=>{B.active&&(O=F),B.addEventListener("click",()=>{this.activeTab=F,console.log("CLICK")}),B.addEventListener("change",z=>z.stopPropagation())}),O===-1?(this.tabs[0]&&(this.tabs[0].active=!0),this.activeTab=0):this.activeTab=O,this._checkAwcTabsLength()}_checkAwcTabsLength(){this.tabs.length>2&&console.warn("Maximum number of tabs exceeded")}connectedCallback(){super.connectedCallback(),document.addEventListener("DOMContentLoaded",()=>{this._checkAssignedAwcTabs()})}_resetColorPicker(){this._inputColor.value="#000000",this.value="",this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.colorItems.forEach(O=>O.classList.remove("active-color"))}_colorPickerOpenEvent(O){O.detail&&(this.active=!0)}_colorPickerCloseEvent(O){O.detail||(this.active=!1)}updated(O){super.updated(O),O.has("value")&&this.setValue(this.value),this._setDefaultColorInBasePalette(),this.active&&this._popover.addEventListener("focusout",this._handleFocusOut.bind(this))}_handleFocusOut(O){const B=O.relatedTarget;if(!B)return;const F=this._popover.contains(B),z=this.tabs.some(G=>G.contains(B));!F&&!z&&this.close()}open(){this._popover.show()}close(){this._popover.hide()}_togglePopover(){this.active?this.close():this.open()}_triggerKeyboard(O){(O.code==="Enter"||O.code==="Space")&&(this.active?this.close():this.open())}render(){const O=b`
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
    `,B=b`
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
            ${B}
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
    `}},exports.AwcColorPicker.styles=[colorPickerStyle],__decorateClass$f([n({type:String,reflect:!0})],exports.AwcColorPicker.prototype,"name",2),__decorateClass$f([n({type:String,reflect:!0})],exports.AwcColorPicker.prototype,"value",2),__decorateClass$f([n({type:Boolean,reflect:!0})],exports.AwcColorPicker.prototype,"active",2),__decorateClass$f([n({type:Boolean,reflect:!0})],exports.AwcColorPicker.prototype,"reset",2),__decorateClass$f([r$1()],exports.AwcColorPicker.prototype,"BASE_PALETTE_COLORS",2),__decorateClass$f([r$1()],exports.AwcColorPicker.prototype,"activeTab",2),__decorateClass$f([r(".awc-color-picker__color")],exports.AwcColorPicker.prototype,"colorItems",2),__decorateClass$f([e$5("input")],exports.AwcColorPicker.prototype,"_inputColor",2),__decorateClass$f([e$5("slot")],exports.AwcColorPicker.prototype,"_slot",2),__decorateClass$f([e$5("awc-popover")],exports.AwcColorPicker.prototype,"_popover",2),__decorateClass$f([event("awc-color-picker-change")],exports.AwcColorPicker.prototype,"_onChangeColor",2),exports.AwcColorPicker=__decorateClass$f([t$1(awcColorPickerTag)],exports.AwcColorPicker);const notifierStyle=i$4`
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
`;var __defProp$e=Object.defineProperty,__getOwnPropDesc$e=Object.getOwnPropertyDescriptor,__decorateClass$e=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$e(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$e(O,B,z),z};const awcNotifierTag="awc-notifier";exports.AwcNotifier=class extends s{_onChange(O){O.target&&this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}render(){const O=x`
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
       `}},exports.AwcNotifier.styles=[notifierStyle],exports.AwcNotifier=__decorateClass$e([t$1(awcNotifierTag)],exports.AwcNotifier);const cardStyle=i$4`
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
`;var __defProp$d=Object.defineProperty,__getOwnPropDesc$d=Object.getOwnPropertyDescriptor,__decorateClass$d=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$d(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$d(O,B,z),z};const awcCardTag="awc-card";exports.AwcCard=class extends s{constructor(){super(...arguments),this.target="_self",this.arrow=!1,this._isModuleIcon=!1}_changeBackgroundIconModule(){this._iconSlot.assignedElements().filter(F=>F.type==="module").length?this._isModuleIcon=!0:this._isModuleIcon=!1}render(){const O=b`
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
        `}},exports.AwcCard.styles=[cardStyle],__decorateClass$d([n({type:String,reflect:!0})],exports.AwcCard.prototype,"title",2),__decorateClass$d([n({type:String,reflect:!0})],exports.AwcCard.prototype,"subtitle",2),__decorateClass$d([n({type:String,reflect:!0})],exports.AwcCard.prototype,"href",2),__decorateClass$d([n({type:String})],exports.AwcCard.prototype,"target",2),__decorateClass$d([n({type:String,reflect:!0,attribute:"icon-color"})],exports.AwcCard.prototype,"iconColor",2),__decorateClass$d([n({type:Boolean,reflect:!0})],exports.AwcCard.prototype,"arrow",2),__decorateClass$d([e$5("slot[name='icon']")],exports.AwcCard.prototype,"_iconSlot",2),__decorateClass$d([r$1()],exports.AwcCard.prototype,"_isModuleIcon",2),exports.AwcCard=__decorateClass$d([t$1(awcCardTag)],exports.AwcCard);const skeletonStyle=i$4`
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
`;var __defProp$c=Object.defineProperty,__getOwnPropDesc$c=Object.getOwnPropertyDescriptor,__decorateClass$c=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$c(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$c(O,B,z),z};const awcSkeletonTag="awc-skeleton";exports.AwcSkeleton=class extends s{constructor(){super(...arguments),this.effect="pulse",this.rounded="rounded",this.color="primary"}render(){return x`
            <div class="awc-skeleton">
                <div class="awc-skeleton__indicator"></div>
            </div>
        `}},exports.AwcSkeleton.styles=[skeletonStyle],__decorateClass$c([n({type:String,reflect:!0})],exports.AwcSkeleton.prototype,"effect",2),__decorateClass$c([n({type:String,reflect:!0})],exports.AwcSkeleton.prototype,"rounded",2),__decorateClass$c([n({type:String,reflect:!0})],exports.AwcSkeleton.prototype,"color",2),exports.AwcSkeleton=__decorateClass$c([t$1(awcSkeletonTag)],exports.AwcSkeleton);const paginationStyle=i$4`
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
`;var __defProp$b=Object.defineProperty,__getOwnPropDesc$b=Object.getOwnPropertyDescriptor,__decorateClass$b=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$b(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$b(O,B,z),z};const awcPaginationTag="awc-pagination";exports.AwcPagination=class extends s{constructor(){super(...arguments),this._activePage=1,this._itemsPerPage=1,this._totalItemsCount=1,this.first=!1,this.last=!1,this._maxVisibleItems=5,this._ellipsisVisible=!1}get activePage(){return this._activePage}set activePage(O){const B=Math.ceil(this._totalItemsCount/this._itemsPerPage),F=Math.min(Math.max(1,O||1),B),z=this._activePage;F!==z&&(this._activePage=F,this.requestUpdate("activePage",z))}get itemsPerPage(){return this._itemsPerPage}set itemsPerPage(O){const B=Math.max(1,O||1),F=this._itemsPerPage;B!==F&&(this._itemsPerPage=B,this.requestUpdate("itemsPerPage",F))}get totalItemsCount(){return this._totalItemsCount}set totalItemsCount(O){const B=Math.max(1,O||1),F=this._totalItemsCount;B!==F&&(this._totalItemsCount=B,this.requestUpdate("totalItemsCount",F))}_generatePages(O){const B=[],F=Math.floor(this._maxVisibleItems/2);let z=Math.max(1,this.activePage-F),G=Math.min(O,this.activePage+F);this.activePage<=F?G=Math.min(O,this._maxVisibleItems):this.activePage>O-F&&(z=Math.max(1,O-this._maxVisibleItems+1)),O===G&&this._maxVisibleItems!==O&&(O&&G&&z)!==1&&(B.push(1),B.push("..."),this._ellipsisVisible=!0);for(let U=z;U<=G;U++)B.push(U);return this._maxVisibleItems===G&&this._maxVisibleItems!==O&&(this._ellipsisVisible=!0,B.push("..."),B.push(O)),B}_nextPage(){const O=Math.ceil(this.totalItemsCount/this.itemsPerPage);this.activePage<O&&this.activePage++,this._onChange()}_previousPage(){this.activePage>1&&this.activePage--,this._onChange()}_onPageClick(O){typeof O=="number"&&O===this.activePage||typeof O=="number"&&(this.activePage=O,this._onChange())}_handleKeydown(O){var B;if(O.key==="Enter"||O.key===" "){const F=(B=this.shadowRoot)==null?void 0:B.activeElement;if(F!=null&&F.classList.contains("awc-pagination__button--prev"))this._previousPage();else if(F!=null&&F.classList.contains("awc-pagination__button--next"))this._nextPage();else if(F!=null&&F.classList.contains("awc-pagination__button--first"))this._firstPage();else if(F!=null&&F.classList.contains("awc-pagination__button--last"))this._lastPage();else{const z=parseInt(F.textContent,10);this._onPageClick(z)}this._onChange()}}_firstPage(){this.activePage=1,this._onChange()}_lastPage(){const O=Math.ceil(this.totalItemsCount/this.itemsPerPage);this.activePage=O,this._onChange()}_onChange(){this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleKeydown)}disconnectedCallback(){this.removeEventListener("keydown",this._handleKeydown),super.disconnectedCallback()}render(){const O=Math.ceil(this.totalItemsCount/this.itemsPerPage),B=this._generatePages(O),F=x`
            <span role="button" @keydown=${this._handleKeydown} @click=${this._previousPage} tabIndex="0" class="awc-pagination__button awc-pagination__button--prev">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7071 6.29289C15.0976 6.68342 15.0976 7.31658 14.7071 7.70711L10.4142 12L14.7071 16.2929C15.0976 16.6834 15.0976 17.3166 14.7071 17.7071C14.3166 18.0976 13.6834 18.0976 13.2929 17.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L13.2929 6.29289C13.6834 5.90237 14.3166 5.90237 14.7071 6.29289Z" fill="#919BB6"/>
                </svg>
            </span>
        `,z=x`
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
                    ${B.map(Y=>x`
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

                ${this.activePage<O?z:""}
                ${this.last?U:""}
            </nav>
        `}},exports.AwcPagination.styles=[paginationStyle],__decorateClass$b([n({type:Number,reflect:!0,attribute:"active-page"})],exports.AwcPagination.prototype,"activePage",1),__decorateClass$b([n({type:Number,reflect:!0,attribute:"items-per-page"})],exports.AwcPagination.prototype,"itemsPerPage",1),__decorateClass$b([n({type:Number,reflect:!0,attribute:"total-items-count"})],exports.AwcPagination.prototype,"totalItemsCount",1),__decorateClass$b([n({type:Boolean,reflect:!0})],exports.AwcPagination.prototype,"first",2),__decorateClass$b([n({type:Boolean,reflect:!0})],exports.AwcPagination.prototype,"last",2),exports.AwcPagination=__decorateClass$b([t$1(awcPaginationTag)],exports.AwcPagination);const headerStyle=i$4`

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
`;var __defProp$a=Object.defineProperty,__getOwnPropDesc$a=Object.getOwnPropertyDescriptor,__decorateClass$a=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$a(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$a(O,B,z),z};const awcHeaderTag="awc-header";exports.AwcHeader=class extends s{render(){return x`
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
        `}},exports.AwcHeader.styles=[headerStyle],exports.AwcHeader=__decorateClass$a([t$1(awcHeaderTag)],exports.AwcHeader);const modalStyles=i$4`
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
`;var __defProp$9=Object.defineProperty,__getOwnPropDesc$9=Object.getOwnPropertyDescriptor,__decorateClass$9=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$9(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$9(O,B,z),z};const awcModalTag="awc-modal";exports.AwcModal=class extends s{constructor(){super(...arguments),this.opened=!1,this.customizable=!1,this._isEmptyButtonSlot=!0,this._html=document.querySelector("html"),this._keyClosing=this._handleKeyClosing.bind(this),this._clickOutside=this._handleClickOutside.bind(this)}get tabsGroup(){return this.querySelector(awcTabsGroupTag)}_handleKeyClosing(O){O.key==="Escape"&&this.opened&&this.close()}_handleClickOutside(O){O.composedPath().includes(this.shadowRoot.querySelector(".awc-modal__content"))||this.close()}_toggleScrollLock(){this.opened?this._html.style.overflow="hidden":this._html.style.removeProperty("overflow")}_disableTabsDivider(){this.tabsGroup&&(this.tabsGroup.noDivider=!0)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this._keyClosing),this.addEventListener("click",this._clickOutside)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._keyClosing),this.removeEventListener("click",this._clickOutside)}updated(O){super.updated(O),O.has("opened")&&(this._toggleScrollLock(),this._disableTabsDivider(),this.opened?(this._onInert(),this._modalOpenEvent(this.opened)):(this._removeInert(),this._modalCloseEvent(this.opened))),(O.has("opened")||O.has("slottedButtons"))&&this._checkSlottedButton()}_onInert(){const O=B=>{B.parentNode&&(Array.from(B.parentNode.childNodes).forEach(F=>{F!==B&&F.nodeType===Node.ELEMENT_NODE&&(F.inert=!0)}),B.parentNode!==document.body&&O(B.parentNode))};O(this)}_removeInert(){document.querySelectorAll("[inert]").forEach(O=>{O.inert=!1})}get awcButtons(){return[...this.querySelectorAll("awc-button")]}_checkSlottedButton(){this.awcButtons.filter(B=>B.getAttribute("slot")==="awc-modal-button").length?this._isEmptyButtonSlot=!1:(this._isEmptyButtonSlot=!0,this.description="")}open(){this.opened=!0}close(){this.opened=!1}_renderCloseIcon(){return b`
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
                            ${this.heading?O:""}
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
            `}},exports.AwcModal.styles=[modalStyles,scrollStyle],__decorateClass$9([n({type:String,reflect:!0})],exports.AwcModal.prototype,"heading",2),__decorateClass$9([n({type:String,reflect:!0})],exports.AwcModal.prototype,"description",2),__decorateClass$9([n({type:Boolean,reflect:!0})],exports.AwcModal.prototype,"opened",2),__decorateClass$9([n({type:Boolean,reflect:!0})],exports.AwcModal.prototype,"customizable",2),__decorateClass$9([r("slot[name='awc-modal-button']")],exports.AwcModal.prototype,"slottedButtons",2),__decorateClass$9([r$1()],exports.AwcModal.prototype,"_isEmptyButtonSlot",2),__decorateClass$9([event("awc-modal-open")],exports.AwcModal.prototype,"_modalOpenEvent",2),__decorateClass$9([event("awc-modal-close")],exports.AwcModal.prototype,"_modalCloseEvent",2),exports.AwcModal=__decorateClass$9([t$1(awcModalTag)],exports.AwcModal);const popoverStyle=i$4`
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
`;var __defProp$8=Object.defineProperty,__getOwnPropDesc$8=Object.getOwnPropertyDescriptor,__decorateClass$8=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$8(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$8(O,B,z),z};const awcPopoverTag="awc-popover",spacingValues={XXS:"2",XS:"4",S:"8",SM:"12",M:"16",L:"20",XL:"24",XXL:"32",XXXL:"40"};exports.AwcPopover=class extends s{constructor(){super(...arguments),this.position="top",this.spacing="S",this.strategy="absolute",this.triggerType="click",this.active=!1,this.disabled=!1,this.noPadding=!1,this.popperInstance=null,this._hoverTimeout=null,this._handleOutsideClick=O=>{O.composedPath().includes(this)||this.hide()},this._onMouseEnter=()=>{this.disabled||(this._hoverTimeout&&clearTimeout(this._hoverTimeout),this.active=!0)},this._onMouseLeave=()=>{this.disabled||(this._hoverTimeout=window.setTimeout(()=>this.active=!1,200))},this._onFocus=()=>{this.disabled||(this.active=!0)},this._onBlur=()=>{this.disabled||(this.active=!1)}}disconnectedCallback(){super.disconnectedCallback(),this._removeOutsideClickHandler()}_createPopperInstance(){this._nestedElement&&this._popoverElement&&(this.popperInstance=createPopper(this._nestedElement,this._popoverElement,{placement:this.position,modifiers:[{name:"offset",options:{offset:[0,spacingValues[this.spacing]]}}],strategy:this.strategy}))}_destroyPopperInstance(){var O;(O=this.popperInstance)==null||O.destroy(),this.popperInstance=null}_addOutsideClickHandler(){document.addEventListener("click",this._handleOutsideClick)}_removeOutsideClickHandler(){document.removeEventListener("click",this._handleOutsideClick)}_setupEventListeners(){if(this._removeEventListeners(),!this.disabled)switch(this.triggerType){case"click":this._nestedElement.addEventListener("click",this.show.bind(this));break;case"hover":this._nestedElement.addEventListener("mouseenter",this._onMouseEnter),this._nestedElement.addEventListener("mouseleave",this._onMouseLeave),this._popoverElement.addEventListener("mouseenter",this._onMouseEnter),this._popoverElement.addEventListener("mouseleave",this._onMouseLeave);break;case"focus":this._nestedElement.addEventListener("focus",this._onFocus,!0),this._nestedElement.addEventListener("blur",this._onBlur,!0);break}}_removeEventListeners(){this._nestedElement.removeEventListener("focus",this._onFocus,!0),this._nestedElement.removeEventListener("blur",this._onBlur,!0),this._nestedElement.removeEventListener("mouseenter",this._onMouseEnter),this._nestedElement.removeEventListener("mouseleave",this._onMouseLeave),this._popoverElement.removeEventListener("mouseenter",this._onMouseEnter),this._popoverElement.removeEventListener("mouseleave",this._onMouseLeave)}updated(O){super.updated(O),O.has("active")&&(this.active?this._createPopperInstance():this._destroyPopperInstance(),this.active?this._popoverOpenEvent(this.active):this._popoverCloseEvent(this.active)),(O.has("triggerType")||O.has("disabled"))&&this._setupEventListeners()}show(){this.disabled||(this.active=!0,this._addOutsideClickHandler())}hide(){this.disabled||(this.active=!1,this._removeOutsideClickHandler())}render(){const O={"awc-popover":!0,"awc-popover--active":this.active};return x`
            <div class="awc-popover__nested">
                <slot></slot>
            </div>
                <div class=${e$2(O)}>
                <slot name="awc-popover-content"></slot>
            </div>
        `}},exports.AwcPopover.shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0},exports.AwcPopover.styles=[popoverStyle],__decorateClass$8([n({reflect:!0})],exports.AwcPopover.prototype,"position",2),__decorateClass$8([n({type:String,reflect:!0})],exports.AwcPopover.prototype,"spacing",2),__decorateClass$8([n({type:String,reflect:!0})],exports.AwcPopover.prototype,"strategy",2),__decorateClass$8([n({type:String,reflect:!0,attribute:"trigger-type"})],exports.AwcPopover.prototype,"triggerType",2),__decorateClass$8([n({type:Boolean,reflect:!0})],exports.AwcPopover.prototype,"active",2),__decorateClass$8([n({type:Boolean,reflect:!0})],exports.AwcPopover.prototype,"disabled",2),__decorateClass$8([n({type:Boolean,reflect:!0,attribute:"no-padding"})],exports.AwcPopover.prototype,"noPadding",2),__decorateClass$8([event("awc-popover-open")],exports.AwcPopover.prototype,"_popoverOpenEvent",2),__decorateClass$8([event("awc-popover-close")],exports.AwcPopover.prototype,"_popoverCloseEvent",2),__decorateClass$8([e$5(".awc-popover")],exports.AwcPopover.prototype,"_popoverElement",2),__decorateClass$8([e$5(".awc-popover__nested")],exports.AwcPopover.prototype,"_nestedElement",2),exports.AwcPopover=__decorateClass$8([t$1(awcPopoverTag)],exports.AwcPopover);const tableWrapperStyles=i$4``;var __defProp$7=Object.defineProperty,__getOwnPropDesc$7=Object.getOwnPropertyDescriptor,__decorateClass$7=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$7(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$7(O,B,z),z};const awcTableWrapperTag="awc-table-wrapper";exports.AwcTableWrapper=class extends s{createRenderRoot(){return this}render(){return x``}},exports.AwcTableWrapper.styles=[tableWrapperStyles],exports.AwcTableWrapper=__decorateClass$7([t$1(awcTableWrapperTag)],exports.AwcTableWrapper);const dialogStyle=i$4`
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
`;var __defProp$6=Object.defineProperty,__getOwnPropDesc$6=Object.getOwnPropertyDescriptor,__decorateClass$6=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$6(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$6(O,B,z),z};const awcDialogTag="awc-dialog";var DialogVariant=(D=>(D.info="info",D.error="error",D))(DialogVariant||{});const DIALOG_ICONS={infoIcon:b`
    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 42C33.2696 42 42 33.2696 42 22.5C42 11.7304 33.2696 3 22.5 3C11.7304 3 3 11.7304 3 22.5C3 33.2696 11.7304 42 22.5 42ZM22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45ZM21 9.5C21 8.67157 21.6716 8 22.5 8C23.3284 8 24 8.67157 24 9.5V28.5C24 29.3284 23.3284 30 22.5 30C21.6716 30 21 29.3284 21 28.5V9.5ZM22.5 37C23.3284 37 24 36.3284 24 35.5C24 34.6716 23.3284 34 22.5 34C21.6716 34 21 34.6716 21 35.5C21 36.3284 21.6716 37 22.5 37Z" fill="white"/>
    </svg>
    `,errorIcon:b`
    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 42C33.2696 42 42 33.2696 42 22.5C42 11.7304 33.2696 3 22.5 3C11.7304 3 3 11.7304 3 22.5C3 33.2696 11.7304 42 22.5 42ZM22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45ZM14.1809 13.6699C13.6817 14.1691 13.6817 14.9786 14.1809 15.4778L20.9474 22.2444L14.181 29.0108C13.6817 29.51 13.6817 30.3195 14.181 30.8187C14.6802 31.318 15.4897 31.318 15.9889 30.8187L22.7554 24.0523L29.5218 30.8187C30.0211 31.318 30.8305 31.318 31.3298 30.8187C31.829 30.3195 31.829 29.51 31.3298 29.0108L24.5633 22.2444L31.3298 15.4778C31.8291 14.9786 31.8291 14.1691 31.3298 13.6699C30.8306 13.1706 30.0211 13.1706 29.5219 13.6699L22.7554 20.4364L15.9888 13.6699C15.4896 13.1706 14.6802 13.1706 14.1809 13.6699Z" fill="white"/>
    </svg>
    `};exports.AwcDialog=class extends s{constructor(){super(...arguments),this.variant="info",this.opened=!1,this._clickOutside=this._handleClickOutside.bind(this)}_handleClickOutside(O){O.composedPath().includes(this.shadowRoot.querySelector(".awc-dialog__content"))||this.close()}_lockBody(){const O=document.querySelector("body");this.opened?(O.style.overflow="hidden",O.style.touchAction="none"):(O.style.removeProperty("overflow"),O.style.removeProperty("touch-action"))}_onInert(){const O=B=>{B.parentNode&&(Array.from(B.parentNode.childNodes).forEach(F=>{F!==B&&F.nodeType===Node.ELEMENT_NODE&&(F.inert=!0)}),B.parentNode!==document.body&&O(B.parentNode))};O(this)}_removeInert(){document.querySelectorAll("[inert]").forEach(O=>{O.inert=!1})}_setCurrentStyleAwcButtonInSlot(){this._slotButtons.assignedElements().forEach(O=>{const B=O;B.size="large"})}open(){this.opened=!0,this._onOpening(this.opened)}close(){this.opened=!1,this._onClosing(this.opened)}_closingOnEscape(O){this.opened&&O.key==="Escape"&&this.close()}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._clickOutside),document.addEventListener("DOMContentLoaded",()=>{this.opened?(this._setCurrentStyleAwcButtonInSlot(),this._onInert()):this._removeInert()})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._clickOutside)}updated(O){super.updated(O),O.has("opened")&&(this.opened?(this._setCurrentStyleAwcButtonInSlot(),this._onInert(),this._dialogContent.focus()):this._removeInert(),this._lockBody())}render(){const O=this.variant==="info"?DIALOG_ICONS.infoIcon:DIALOG_ICONS.errorIcon;return x`
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
        `}},exports.AwcDialog.shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0},exports.AwcDialog.styles=[dialogStyle],__decorateClass$6([n({type:String,reflect:!0})],exports.AwcDialog.prototype,"heading",2),__decorateClass$6([n({type:String,reflect:!0})],exports.AwcDialog.prototype,"description",2),__decorateClass$6([n({type:String,reflect:!0})],exports.AwcDialog.prototype,"variant",2),__decorateClass$6([n({type:Boolean,reflect:!0})],exports.AwcDialog.prototype,"opened",2),__decorateClass$6([event("awc-dialog-open")],exports.AwcDialog.prototype,"_onOpening",2),__decorateClass$6([event("awc-dialog-close")],exports.AwcDialog.prototype,"_onClosing",2),__decorateClass$6([e$5("slot[name='awc-dialog-button']")],exports.AwcDialog.prototype,"_slotButtons",2),__decorateClass$6([e$5(".awc-dialog__content")],exports.AwcDialog.prototype,"_dialogContent",2),exports.AwcDialog=__decorateClass$6([t$1(awcDialogTag)],exports.AwcDialog);const kr=class kr{static createDialog(O={}){if(this.currentDialog&&this.currentDialog.opened)return null;const{heading:B="Title",description:F="",variant:z=DialogVariant.info,buttons:G=[],timer:U=0}=O,Y=document.createElement("awc-dialog");return Y.heading=B,Y.description=F,Y.variant=z,U>0&&setTimeout(()=>{Y.close()},U),G.forEach(Q=>{const ne=document.createElement("awc-button");ne.textContent=Q.text,ne.variant=Q.variant,ne.background=Q.background,ne.addEventListener("click",()=>{Q.onClick(),Y.close()}),ne.setAttribute("slot","awc-dialog-button"),Y.appendChild(ne)}),document.body.appendChild(Y),Y.open(),this.currentDialog=Y,Y.addEventListener("awc-dialog-close",()=>{document.body.removeChild(Y),this.currentDialog=null},{once:!0}),Y}static info(O){this.createDialog({...O,variant:DialogVariant.info})||console.warn("A dialog is already open.")}static error(O){this.createDialog({...O,variant:DialogVariant.error})||console.warn("A dialog is already open.")}static sweetAlertAdapter(O,B){if(this.currentDialog&&this.currentDialog.opened){console.warn("A dialog is already open.");return}const{title:F="",text:z="",variant:G=DialogVariant.info,showCancelButton:U=!1,confirmButtonText:Y="OK",cancelButtonText:Q="Cancel",timer:ne=0,...oe}=O,ce=[];ce.push({text:Y,variant:"primary",background:"blue",onClick:()=>{B&&B(!0)}}),U&&ce.push({text:Q,variant:"transparent",background:"gray",onClick:()=>{B&&B(!1)}}),this.createDialog({heading:F,description:z,variant:G,buttons:ce,timer:ne,...oe})||console.warn("A dialog is already open.")}};kr.currentDialog=null;let AwcDialogService=kr;window.showAwcDialog={info:AwcDialogService.info.bind(AwcDialogService),error:AwcDialogService.error.bind(AwcDialogService),sweetAlert:AwcDialogService.sweetAlertAdapter.bind(AwcDialogService)};const stackStyle=i$4`
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
`;var __defProp$5=Object.defineProperty,__getOwnPropDesc$5=Object.getOwnPropertyDescriptor,__decorateClass$5=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$5(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$5(O,B,z),z};const awcStackTag="awc-stack";exports.AwcStack=class extends s{constructor(){super(...arguments),this.flexDirection="row",this.alignItems="start",this.gap="s",this.isInline=!1,this.fullWidth=!1}render(){return x`<slot></slot>`}},exports.AwcStack.styles=[stackStyle],__decorateClass$5([n({type:String,reflect:!0,attribute:"flex-direction"})],exports.AwcStack.prototype,"flexDirection",2),__decorateClass$5([n({type:String,reflect:!0,attribute:"align-items"})],exports.AwcStack.prototype,"alignItems",2),__decorateClass$5([n({type:String,reflect:!0,attribute:"justify-content"})],exports.AwcStack.prototype,"justifyContent",2),__decorateClass$5([n({type:String,reflect:!0})],exports.AwcStack.prototype,"gap",2),__decorateClass$5([n({type:String,reflect:!0,attribute:"flex-wrap"})],exports.AwcStack.prototype,"flexWrap",2),__decorateClass$5([n({type:Boolean,reflect:!0,attribute:"inline-flex"})],exports.AwcStack.prototype,"isInline",2),__decorateClass$5([n({type:Boolean,reflect:!0,attribute:"full-width"})],exports.AwcStack.prototype,"fullWidth",2),exports.AwcStack=__decorateClass$5([t$1(awcStackTag)],exports.AwcStack);const splitButtonStyle=i$4`
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
`;var __defProp$4=Object.defineProperty,__getOwnPropDesc$4=Object.getOwnPropertyDescriptor,__decorateClass$4=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$4(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$4(O,B,z),z};const awcSplitButtonTag="awc-split-button";exports.AwcSplitButton=class extends s{constructor(){super(...arguments),this.menuOpen=!1}_dropdownClose(O){O.detail.menuOpen||this.splitButtonClose()}splitButtonOpen(){this.menuOpen=!0,this._splitButtonOpened({menuOpen:this.menuOpen})}splitButtonClose(){this.menuOpen=!1,this._splitButtonClosed({menuOpen:this.menuOpen})}_handleDropdown(){this.menuOpen?this.splitButtonClose():this.splitButtonOpen()}render(){return x`
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
    `}},exports.AwcSplitButton.styles=splitButtonStyle,__decorateClass$4([n({type:Boolean,reflect:!0,attribute:"menu-open"})],exports.AwcSplitButton.prototype,"menuOpen",2),__decorateClass$4([event("awc-split-button-close")],exports.AwcSplitButton.prototype,"_splitButtonClosed",2),__decorateClass$4([event("awc-split-button-open")],exports.AwcSplitButton.prototype,"_splitButtonOpened",2),exports.AwcSplitButton=__decorateClass$4([t$1(awcSplitButtonTag)],exports.AwcSplitButton);const awcTripleToggleStyle=i$4`
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
`;var __defProp$3=Object.defineProperty,__getOwnPropDesc$3=Object.getOwnPropertyDescriptor,__decorateClass$3=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$3(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$3(O,B,z),z};const awcTripleTogglerTag="awc-triple-toggler";exports.AwcTripleToggler=class extends s{constructor(){super(...arguments),this.state="first"}_setState(O){this.state=O}_handleKeydown(O){if(O.key==="ArrowLeft"||O.key==="ArrowRight")switch(O.preventDefault(),this.state){case"first":O.key==="ArrowRight"&&this._setState("second");break;case"second":O.key==="ArrowLeft"&&this._setState("first"),O.key==="ArrowRight"&&this._setState("third");break;case"third":O.key==="ArrowLeft"&&this._setState("second");break}}updated(O){super.updated(O),O.has("state")&&this._onChangeState(this.state)}render(){return x`
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
    `}},exports.AwcTripleToggler.styles=awcTripleToggleStyle,__decorateClass$3([n({type:String,reflect:!0})],exports.AwcTripleToggler.prototype,"state",2),__decorateClass$3([event("awc-triple-toggler-change")],exports.AwcTripleToggler.prototype,"_onChangeState",2),exports.AwcTripleToggler=__decorateClass$3([t$1(awcTripleTogglerTag)],exports.AwcTripleToggler);const awcIconButtonStyles=i$4`
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
`;var __defProp$2=Object.defineProperty,__getOwnPropDesc$2=Object.getOwnPropertyDescriptor,__decorateClass$2=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$2(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$2(O,B,z),z};const awcIocnButtonTag="awc-icon-button";exports.AwcIconButton=class extends s{constructor(){super(...arguments),this.size="24",this.type="submit",this.target="_self",this.disabled=!1}render(){const O=x`
            <button 
                ?disabled=${this.disabled}
                size=${this.size}
                type=${this.type} 
                class="awc-icon-button">
                <slot></slot>
            </button>
        `,B=x`
            <a 
               ?disabled=${this.disabled}
               size=${this.size}
               href=${this.href} 
               target=${this.target} 
               class="awc-icon-button">
                <slot></slot>
            </a>
        `;return this.href?B:O}},exports.AwcIconButton.styles=awcIconButtonStyles,__decorateClass$2([n({type:String,reflect:!0})],exports.AwcIconButton.prototype,"name",2),__decorateClass$2([n({type:String,reflect:!0})],exports.AwcIconButton.prototype,"value",2),__decorateClass$2([n({type:String,reflect:!0})],exports.AwcIconButton.prototype,"size",2),__decorateClass$2([n({type:String,reflect:!0})],exports.AwcIconButton.prototype,"type",2),__decorateClass$2([n({type:String,reflect:!0})],exports.AwcIconButton.prototype,"href",2),__decorateClass$2([n({type:String})],exports.AwcIconButton.prototype,"target",2),__decorateClass$2([n({type:Boolean,reflect:!0})],exports.AwcIconButton.prototype,"disabled",2),exports.AwcIconButton=__decorateClass$2([t$1(awcIocnButtonTag)],exports.AwcIconButton);var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function getDefaultExportFromCjs(D){return D&&D.__esModule&&Object.prototype.hasOwnProperty.call(D,"default")?D.default:D}var jquery$1={exports:{}};/*!
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
 */(function(D){(function(O,B){D.exports=O.document?B(O,!0):function(F){if(!F.document)throw new Error("jQuery requires a window with a document");return B(F)}})(typeof window<"u"?window:commonjsGlobal,function(O,B){var F=[],z=O.document,G=F.slice,U=F.concat,Y=F.push,Q=F.indexOf,ne={},oe=ne.toString,ce=ne.hasOwnProperty,fe={},we="2.2.4",X=function(q,W){return new X.fn.init(q,W)},ve=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,de=/^-ms-/,Ae=/-([\da-z])/gi,Se=function(q,W){return W.toUpperCase()};X.fn=X.prototype={jquery:we,constructor:X,selector:"",length:0,toArray:function(){return G.call(this)},get:function(q){return q!=null?q<0?this[q+this.length]:this[q]:G.call(this)},pushStack:function(q){var W=X.merge(this.constructor(),q);return W.prevObject=this,W.context=this.context,W},each:function(q){return X.each(this,q)},map:function(q){return this.pushStack(X.map(this,function(W,K){return q.call(W,K,W)}))},slice:function(){return this.pushStack(G.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(q){var W=this.length,K=+q+(q<0?W:0);return this.pushStack(K>=0&&K<W?[this[K]]:[])},end:function(){return this.prevObject||this.constructor()},push:Y,sort:F.sort,splice:F.splice},X.extend=X.fn.extend=function(){var q,W,K,J,ee,te,re=arguments[0]||{},ae=1,ue=arguments.length,ge=!1;for(typeof re=="boolean"&&(ge=re,re=arguments[ae]||{},ae++),typeof re!="object"&&!X.isFunction(re)&&(re={}),ae===ue&&(re=this,ae--);ae<ue;ae++)if((q=arguments[ae])!=null)for(W in q)K=re[W],J=q[W],re!==J&&(ge&&J&&(X.isPlainObject(J)||(ee=X.isArray(J)))?(ee?(ee=!1,te=K&&X.isArray(K)?K:[]):te=K&&X.isPlainObject(K)?K:{},re[W]=X.extend(ge,te,J)):J!==void 0&&(re[W]=J));return re},X.extend({expando:"jQuery"+(we+Math.random()).replace(/\D/g,""),isReady:!0,error:function(q){throw new Error(q)},noop:function(){},isFunction:function(q){return X.type(q)==="function"},isArray:Array.isArray,isWindow:function(q){return q!=null&&q===q.window},isNumeric:function(q){var W=q&&q.toString();return!X.isArray(q)&&W-parseFloat(W)+1>=0},isPlainObject:function(q){var W;if(X.type(q)!=="object"||q.nodeType||X.isWindow(q)||q.constructor&&!ce.call(q,"constructor")&&!ce.call(q.constructor.prototype||{},"isPrototypeOf"))return!1;for(W in q);return W===void 0||ce.call(q,W)},isEmptyObject:function(q){var W;for(W in q)return!1;return!0},type:function(q){return q==null?q+"":typeof q=="object"||typeof q=="function"?ne[oe.call(q)]||"object":typeof q},globalEval:function(q){var W,K=eval;q=X.trim(q),q&&(q.indexOf("use strict")===1?(W=z.createElement("script"),W.text=q,z.head.appendChild(W).parentNode.removeChild(W)):K(q))},camelCase:function(q){return q.replace(de,"ms-").replace(Ae,Se)},nodeName:function(q,W){return q.nodeName&&q.nodeName.toLowerCase()===W.toLowerCase()},each:function(q,W){var K,J=0;if(Pe(q))for(K=q.length;J<K&&W.call(q[J],J,q[J])!==!1;J++);else for(J in q)if(W.call(q[J],J,q[J])===!1)break;return q},trim:function(q){return q==null?"":(q+"").replace(ve,"")},makeArray:function(q,W){var K=W||[];return q!=null&&(Pe(Object(q))?X.merge(K,typeof q=="string"?[q]:q):Y.call(K,q)),K},inArray:function(q,W,K){return W==null?-1:Q.call(W,q,K)},merge:function(q,W){for(var K=+W.length,J=0,ee=q.length;J<K;J++)q[ee++]=W[J];return q.length=ee,q},grep:function(q,W,K){for(var J,ee=[],te=0,re=q.length,ae=!K;te<re;te++)J=!W(q[te],te),J!==ae&&ee.push(q[te]);return ee},map:function(q,W,K){var J,ee,te=0,re=[];if(Pe(q))for(J=q.length;te<J;te++)ee=W(q[te],te,K),ee!=null&&re.push(ee);else for(te in q)ee=W(q[te],te,K),ee!=null&&re.push(ee);return U.apply([],re)},guid:1,proxy:function(q,W){var K,J,ee;if(typeof W=="string"&&(K=q[W],W=q,q=K),!!X.isFunction(q))return J=G.call(arguments,2),ee=function(){return q.apply(W||this,J.concat(G.call(arguments)))},ee.guid=q.guid=q.guid||X.guid++,ee},now:Date.now,support:fe}),typeof Symbol=="function"&&(X.fn[Symbol.iterator]=F[Symbol.iterator]),X.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(q,W){ne["[object "+W+"]"]=W.toLowerCase()});function Pe(q){var W=!!q&&"length"in q&&q.length,K=X.type(q);return K==="function"||X.isWindow(q)?!1:K==="array"||W===0||typeof W=="number"&&W>0&&W-1 in q}var ke=function(q){var W,K,J,ee,te,re,ae,ue,ge,pe,Ce,Oe,xe,Ge,ze,qe,$t,ct,It,Le="sizzle"+1*new Date,pt=q.document,Ve=0,it=0,Dt=zr(),yr=zr(),xt=zr(),Wt=function(ie,se){return ie===se&&(Ce=!0),0},Bt=1<<31,Rt={}.hasOwnProperty,_t=[],Ct=_t.pop,li=_t.push,Ht=_t.push,An=_t.slice,Kt=function(ie,se){for(var le=0,_e=ie.length;le<_e;le++)if(ie[le]===se)return le;return-1},Nr="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Qe="[\\x20\\t\\r\\n\\f]",Xt="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",kn="\\["+Qe+"*("+Xt+")(?:"+Qe+"*([*^$|!~]?=)"+Qe+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Xt+"))|)"+Qe+"*\\]",jr=":("+Xt+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+kn+")*)|.*)\\)|)",ui=new RegExp(Qe+"+","g"),$r=new RegExp("^"+Qe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Qe+"+$","g"),pi=new RegExp("^"+Qe+"*,"+Qe+"*"),di=new RegExp("^"+Qe+"*([>+~]|"+Qe+")"+Qe+"*"),hi=new RegExp("="+Qe+`*([^\\]'"]*?)`+Qe+"*\\]","g"),fi=new RegExp(jr),Sn=new RegExp("^"+Xt+"$"),xr={ID:new RegExp("^#("+Xt+")"),CLASS:new RegExp("^\\.("+Xt+")"),TAG:new RegExp("^("+Xt+"|[*])"),ATTR:new RegExp("^"+kn),PSEUDO:new RegExp("^"+jr),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+Qe+"*(even|odd|(([+-]|)(\\d*)n|)"+Qe+"*(?:([+-]|)"+Qe+"*(\\d+)|))"+Qe+"*\\)|)","i"),bool:new RegExp("^(?:"+Nr+")$","i"),needsContext:new RegExp("^"+Qe+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+Qe+"*((?:-\\d)?\\d*)"+Qe+"*\\)|)(?=[^-]|$)","i")},gi=/^(?:input|select|textarea|button)$/i,vi=/^h\d$/i,ur=/^[^{]+\{\s*\[native \w/,wi=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Fr=/[+~]/,_i=/'|\\/g,Lt=new RegExp("\\\\([\\da-f]{1,6}"+Qe+"?|("+Qe+")|.)","ig"),Mt=function(ie,se,le){var _e="0x"+se-65536;return _e!==_e||le?se:_e<0?String.fromCharCode(_e+65536):String.fromCharCode(_e>>10|55296,_e&1023|56320)},On=function(){Oe()};try{Ht.apply(_t=An.call(pt.childNodes),pt.childNodes),_t[pt.childNodes.length].nodeType}catch{Ht={apply:_t.length?function(se,le){li.apply(se,An.call(le))}:function(se,le){for(var _e=se.length,he=0;se[_e++]=le[he++];);se.length=_e-1}}}function rt(ie,se,le,_e){var he,$e,me,Ee,Be,Fe,Re,Ne,Ue=se&&se.ownerDocument,Ye=se?se.nodeType:9;if(le=le||[],typeof ie!="string"||!ie||Ye!==1&&Ye!==9&&Ye!==11)return le;if(!_e&&((se?se.ownerDocument||se:pt)!==xe&&Oe(se),se=se||xe,ze)){if(Ye!==11&&(Fe=wi.exec(ie)))if(he=Fe[1]){if(Ye===9)if(me=se.getElementById(he)){if(me.id===he)return le.push(me),le}else return le;else if(Ue&&(me=Ue.getElementById(he))&&It(se,me)&&me.id===he)return le.push(me),le}else{if(Fe[2])return Ht.apply(le,se.getElementsByTagName(ie)),le;if((he=Fe[3])&&K.getElementsByClassName&&se.getElementsByClassName)return Ht.apply(le,se.getElementsByClassName(he)),le}if(K.qsa&&!xt[ie+" "]&&(!qe||!qe.test(ie))){if(Ye!==1)Ue=se,Ne=ie;else if(se.nodeName.toLowerCase()!=="object"){for((Ee=se.getAttribute("id"))?Ee=Ee.replace(_i,"\\$&"):se.setAttribute("id",Ee=Le),Re=re(ie),$e=Re.length,Be=Sn.test(Ee)?"#"+Ee:"[id='"+Ee+"']";$e--;)Re[$e]=Be+" "+Cr(Re[$e]);Ne=Re.join(","),Ue=Fr.test(ie)&&Vr(se.parentNode)||se}if(Ne)try{return Ht.apply(le,Ue.querySelectorAll(Ne)),le}catch{}finally{Ee===Le&&se.removeAttribute("id")}}}return ue(ie.replace($r,"$1"),se,le,_e)}function zr(){var ie=[];function se(le,_e){return ie.push(le+" ")>J.cacheLength&&delete se[ie.shift()],se[le+" "]=_e}return se}function St(ie){return ie[Le]=!0,ie}function Et(ie){var se=xe.createElement("div");try{return!!ie(se)}catch{return!1}finally{se.parentNode&&se.parentNode.removeChild(se),se=null}}function qr(ie,se){for(var le=ie.split("|"),_e=le.length;_e--;)J.attrHandle[le[_e]]=se}function En(ie,se){var le=se&&ie,_e=le&&ie.nodeType===1&&se.nodeType===1&&(~se.sourceIndex||Bt)-(~ie.sourceIndex||Bt);if(_e)return _e;if(le){for(;le=le.nextSibling;)if(le===se)return-1}return ie?1:-1}function bi(ie){return function(se){var le=se.nodeName.toLowerCase();return le==="input"&&se.type===ie}}function mi(ie){return function(se){var le=se.nodeName.toLowerCase();return(le==="input"||le==="button")&&se.type===ie}}function Zt(ie){return St(function(se){return se=+se,St(function(le,_e){for(var he,$e=ie([],le.length,se),me=$e.length;me--;)le[he=$e[me]]&&(le[he]=!(_e[he]=le[he]))})})}function Vr(ie){return ie&&typeof ie.getElementsByTagName<"u"&&ie}K=rt.support={},te=rt.isXML=function(ie){var se=ie&&(ie.ownerDocument||ie).documentElement;return se?se.nodeName!=="HTML":!1},Oe=rt.setDocument=function(ie){var se,le,_e=ie?ie.ownerDocument||ie:pt;return _e===xe||_e.nodeType!==9||!_e.documentElement||(xe=_e,Ge=xe.documentElement,ze=!te(xe),(le=xe.defaultView)&&le.top!==le&&(le.addEventListener?le.addEventListener("unload",On,!1):le.attachEvent&&le.attachEvent("onunload",On)),K.attributes=Et(function(he){return he.className="i",!he.getAttribute("className")}),K.getElementsByTagName=Et(function(he){return he.appendChild(xe.createComment("")),!he.getElementsByTagName("*").length}),K.getElementsByClassName=ur.test(xe.getElementsByClassName),K.getById=Et(function(he){return Ge.appendChild(he).id=Le,!xe.getElementsByName||!xe.getElementsByName(Le).length}),K.getById?(J.find.ID=function(he,$e){if(typeof $e.getElementById<"u"&&ze){var me=$e.getElementById(he);return me?[me]:[]}},J.filter.ID=function(he){var $e=he.replace(Lt,Mt);return function(me){return me.getAttribute("id")===$e}}):(delete J.find.ID,J.filter.ID=function(he){var $e=he.replace(Lt,Mt);return function(me){var Ee=typeof me.getAttributeNode<"u"&&me.getAttributeNode("id");return Ee&&Ee.value===$e}}),J.find.TAG=K.getElementsByTagName?function(he,$e){if(typeof $e.getElementsByTagName<"u")return $e.getElementsByTagName(he);if(K.qsa)return $e.querySelectorAll(he)}:function(he,$e){var me,Ee=[],Be=0,Fe=$e.getElementsByTagName(he);if(he==="*"){for(;me=Fe[Be++];)me.nodeType===1&&Ee.push(me);return Ee}return Fe},J.find.CLASS=K.getElementsByClassName&&function(he,$e){if(typeof $e.getElementsByClassName<"u"&&ze)return $e.getElementsByClassName(he)},$t=[],qe=[],(K.qsa=ur.test(xe.querySelectorAll))&&(Et(function(he){Ge.appendChild(he).innerHTML="<a id='"+Le+"'></a><select id='"+Le+"-\r\\' msallowcapture=''><option selected=''></option></select>",he.querySelectorAll("[msallowcapture^='']").length&&qe.push("[*^$]="+Qe+`*(?:''|"")`),he.querySelectorAll("[selected]").length||qe.push("\\["+Qe+"*(?:value|"+Nr+")"),he.querySelectorAll("[id~="+Le+"-]").length||qe.push("~="),he.querySelectorAll(":checked").length||qe.push(":checked"),he.querySelectorAll("a#"+Le+"+*").length||qe.push(".#.+[+~]")}),Et(function(he){var $e=xe.createElement("input");$e.setAttribute("type","hidden"),he.appendChild($e).setAttribute("name","D"),he.querySelectorAll("[name=d]").length&&qe.push("name"+Qe+"*[*^$|!~]?="),he.querySelectorAll(":enabled").length||qe.push(":enabled",":disabled"),he.querySelectorAll("*,:x"),qe.push(",.*:")})),(K.matchesSelector=ur.test(ct=Ge.matches||Ge.webkitMatchesSelector||Ge.mozMatchesSelector||Ge.oMatchesSelector||Ge.msMatchesSelector))&&Et(function(he){K.disconnectedMatch=ct.call(he,"div"),ct.call(he,"[s!='']:x"),$t.push("!=",jr)}),qe=qe.length&&new RegExp(qe.join("|")),$t=$t.length&&new RegExp($t.join("|")),se=ur.test(Ge.compareDocumentPosition),It=se||ur.test(Ge.contains)?function(he,$e){var me=he.nodeType===9?he.documentElement:he,Ee=$e&&$e.parentNode;return he===Ee||!!(Ee&&Ee.nodeType===1&&(me.contains?me.contains(Ee):he.compareDocumentPosition&&he.compareDocumentPosition(Ee)&16))}:function(he,$e){if($e){for(;$e=$e.parentNode;)if($e===he)return!0}return!1},Wt=se?function(he,$e){if(he===$e)return Ce=!0,0;var me=!he.compareDocumentPosition-!$e.compareDocumentPosition;return me||(me=(he.ownerDocument||he)===($e.ownerDocument||$e)?he.compareDocumentPosition($e):1,me&1||!K.sortDetached&&$e.compareDocumentPosition(he)===me?he===xe||he.ownerDocument===pt&&It(pt,he)?-1:$e===xe||$e.ownerDocument===pt&&It(pt,$e)?1:pe?Kt(pe,he)-Kt(pe,$e):0:me&4?-1:1)}:function(he,$e){if(he===$e)return Ce=!0,0;var me,Ee=0,Be=he.parentNode,Fe=$e.parentNode,Re=[he],Ne=[$e];if(!Be||!Fe)return he===xe?-1:$e===xe?1:Be?-1:Fe?1:pe?Kt(pe,he)-Kt(pe,$e):0;if(Be===Fe)return En(he,$e);for(me=he;me=me.parentNode;)Re.unshift(me);for(me=$e;me=me.parentNode;)Ne.unshift(me);for(;Re[Ee]===Ne[Ee];)Ee++;return Ee?En(Re[Ee],Ne[Ee]):Re[Ee]===pt?-1:Ne[Ee]===pt?1:0}),xe},rt.matches=function(ie,se){return rt(ie,null,null,se)},rt.matchesSelector=function(ie,se){if((ie.ownerDocument||ie)!==xe&&Oe(ie),se=se.replace(hi,"='$1']"),K.matchesSelector&&ze&&!xt[se+" "]&&(!$t||!$t.test(se))&&(!qe||!qe.test(se)))try{var le=ct.call(ie,se);if(le||K.disconnectedMatch||ie.document&&ie.document.nodeType!==11)return le}catch{}return rt(se,xe,null,[ie]).length>0},rt.contains=function(ie,se){return(ie.ownerDocument||ie)!==xe&&Oe(ie),It(ie,se)},rt.attr=function(ie,se){(ie.ownerDocument||ie)!==xe&&Oe(ie);var le=J.attrHandle[se.toLowerCase()],_e=le&&Rt.call(J.attrHandle,se.toLowerCase())?le(ie,se,!ze):void 0;return _e!==void 0?_e:K.attributes||!ze?ie.getAttribute(se):(_e=ie.getAttributeNode(se))&&_e.specified?_e.value:null},rt.error=function(ie){throw new Error("Syntax error, unrecognized expression: "+ie)},rt.uniqueSort=function(ie){var se,le=[],_e=0,he=0;if(Ce=!K.detectDuplicates,pe=!K.sortStable&&ie.slice(0),ie.sort(Wt),Ce){for(;se=ie[he++];)se===ie[he]&&(_e=le.push(he));for(;_e--;)ie.splice(le[_e],1)}return pe=null,ie},ee=rt.getText=function(ie){var se,le="",_e=0,he=ie.nodeType;if(he){if(he===1||he===9||he===11){if(typeof ie.textContent=="string")return ie.textContent;for(ie=ie.firstChild;ie;ie=ie.nextSibling)le+=ee(ie)}else if(he===3||he===4)return ie.nodeValue}else for(;se=ie[_e++];)le+=ee(se);return le},J=rt.selectors={cacheLength:50,createPseudo:St,match:xr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(ie){return ie[1]=ie[1].replace(Lt,Mt),ie[3]=(ie[3]||ie[4]||ie[5]||"").replace(Lt,Mt),ie[2]==="~="&&(ie[3]=" "+ie[3]+" "),ie.slice(0,4)},CHILD:function(ie){return ie[1]=ie[1].toLowerCase(),ie[1].slice(0,3)==="nth"?(ie[3]||rt.error(ie[0]),ie[4]=+(ie[4]?ie[5]+(ie[6]||1):2*(ie[3]==="even"||ie[3]==="odd")),ie[5]=+(ie[7]+ie[8]||ie[3]==="odd")):ie[3]&&rt.error(ie[0]),ie},PSEUDO:function(ie){var se,le=!ie[6]&&ie[2];return xr.CHILD.test(ie[0])?null:(ie[3]?ie[2]=ie[4]||ie[5]||"":le&&fi.test(le)&&(se=re(le,!0))&&(se=le.indexOf(")",le.length-se)-le.length)&&(ie[0]=ie[0].slice(0,se),ie[2]=le.slice(0,se)),ie.slice(0,3))}},filter:{TAG:function(ie){var se=ie.replace(Lt,Mt).toLowerCase();return ie==="*"?function(){return!0}:function(le){return le.nodeName&&le.nodeName.toLowerCase()===se}},CLASS:function(ie){var se=Dt[ie+" "];return se||(se=new RegExp("(^|"+Qe+")"+ie+"("+Qe+"|$)"))&&Dt(ie,function(le){return se.test(typeof le.className=="string"&&le.className||typeof le.getAttribute<"u"&&le.getAttribute("class")||"")})},ATTR:function(ie,se,le){return function(_e){var he=rt.attr(_e,ie);return he==null?se==="!=":se?(he+="",se==="="?he===le:se==="!="?he!==le:se==="^="?le&&he.indexOf(le)===0:se==="*="?le&&he.indexOf(le)>-1:se==="$="?le&&he.slice(-le.length)===le:se==="~="?(" "+he.replace(ui," ")+" ").indexOf(le)>-1:se==="|="?he===le||he.slice(0,le.length+1)===le+"-":!1):!0}},CHILD:function(ie,se,le,_e,he){var $e=ie.slice(0,3)!=="nth",me=ie.slice(-4)!=="last",Ee=se==="of-type";return _e===1&&he===0?function(Be){return!!Be.parentNode}:function(Be,Fe,Re){var Ne,Ue,Ye,He,at,dt,mt=$e!==me?"nextSibling":"previousSibling",nt=Be.parentNode,pr=Ee&&Be.nodeName.toLowerCase(),dr=!Re&&!Ee,yt=!1;if(nt){if($e){for(;mt;){for(He=Be;He=He[mt];)if(Ee?He.nodeName.toLowerCase()===pr:He.nodeType===1)return!1;dt=mt=ie==="only"&&!dt&&"nextSibling"}return!0}if(dt=[me?nt.firstChild:nt.lastChild],me&&dr){for(He=nt,Ye=He[Le]||(He[Le]={}),Ue=Ye[He.uniqueID]||(Ye[He.uniqueID]={}),Ne=Ue[ie]||[],at=Ne[0]===Ve&&Ne[1],yt=at&&Ne[2],He=at&&nt.childNodes[at];He=++at&&He&&He[mt]||(yt=at=0)||dt.pop();)if(He.nodeType===1&&++yt&&He===Be){Ue[ie]=[Ve,at,yt];break}}else if(dr&&(He=Be,Ye=He[Le]||(He[Le]={}),Ue=Ye[He.uniqueID]||(Ye[He.uniqueID]={}),Ne=Ue[ie]||[],at=Ne[0]===Ve&&Ne[1],yt=at),yt===!1)for(;(He=++at&&He&&He[mt]||(yt=at=0)||dt.pop())&&!((Ee?He.nodeName.toLowerCase()===pr:He.nodeType===1)&&++yt&&(dr&&(Ye=He[Le]||(He[Le]={}),Ue=Ye[He.uniqueID]||(Ye[He.uniqueID]={}),Ue[ie]=[Ve,yt]),He===Be)););return yt-=he,yt===_e||yt%_e===0&&yt/_e>=0}}},PSEUDO:function(ie,se){var le,_e=J.pseudos[ie]||J.setFilters[ie.toLowerCase()]||rt.error("unsupported pseudo: "+ie);return _e[Le]?_e(se):_e.length>1?(le=[ie,ie,"",se],J.setFilters.hasOwnProperty(ie.toLowerCase())?St(function(he,$e){for(var me,Ee=_e(he,se),Be=Ee.length;Be--;)me=Kt(he,Ee[Be]),he[me]=!($e[me]=Ee[Be])}):function(he){return _e(he,0,le)}):_e}},pseudos:{not:St(function(ie){var se=[],le=[],_e=ae(ie.replace($r,"$1"));return _e[Le]?St(function(he,$e,me,Ee){for(var Be,Fe=_e(he,null,Ee,[]),Re=he.length;Re--;)(Be=Fe[Re])&&(he[Re]=!($e[Re]=Be))}):function(he,$e,me){return se[0]=he,_e(se,null,me,le),se[0]=null,!le.pop()}}),has:St(function(ie){return function(se){return rt(ie,se).length>0}}),contains:St(function(ie){return ie=ie.replace(Lt,Mt),function(se){return(se.textContent||se.innerText||ee(se)).indexOf(ie)>-1}}),lang:St(function(ie){return Sn.test(ie||"")||rt.error("unsupported lang: "+ie),ie=ie.replace(Lt,Mt).toLowerCase(),function(se){var le;do if(le=ze?se.lang:se.getAttribute("xml:lang")||se.getAttribute("lang"))return le=le.toLowerCase(),le===ie||le.indexOf(ie+"-")===0;while((se=se.parentNode)&&se.nodeType===1);return!1}}),target:function(ie){var se=q.location&&q.location.hash;return se&&se.slice(1)===ie.id},root:function(ie){return ie===Ge},focus:function(ie){return ie===xe.activeElement&&(!xe.hasFocus||xe.hasFocus())&&!!(ie.type||ie.href||~ie.tabIndex)},enabled:function(ie){return ie.disabled===!1},disabled:function(ie){return ie.disabled===!0},checked:function(ie){var se=ie.nodeName.toLowerCase();return se==="input"&&!!ie.checked||se==="option"&&!!ie.selected},selected:function(ie){return ie.parentNode&&ie.parentNode.selectedIndex,ie.selected===!0},empty:function(ie){for(ie=ie.firstChild;ie;ie=ie.nextSibling)if(ie.nodeType<6)return!1;return!0},parent:function(ie){return!J.pseudos.empty(ie)},header:function(ie){return vi.test(ie.nodeName)},input:function(ie){return gi.test(ie.nodeName)},button:function(ie){var se=ie.nodeName.toLowerCase();return se==="input"&&ie.type==="button"||se==="button"},text:function(ie){var se;return ie.nodeName.toLowerCase()==="input"&&ie.type==="text"&&((se=ie.getAttribute("type"))==null||se.toLowerCase()==="text")},first:Zt(function(){return[0]}),last:Zt(function(ie,se){return[se-1]}),eq:Zt(function(ie,se,le){return[le<0?le+se:le]}),even:Zt(function(ie,se){for(var le=0;le<se;le+=2)ie.push(le);return ie}),odd:Zt(function(ie,se){for(var le=1;le<se;le+=2)ie.push(le);return ie}),lt:Zt(function(ie,se,le){for(var _e=le<0?le+se:le;--_e>=0;)ie.push(_e);return ie}),gt:Zt(function(ie,se,le){for(var _e=le<0?le+se:le;++_e<se;)ie.push(_e);return ie})}},J.pseudos.nth=J.pseudos.eq;for(W in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})J.pseudos[W]=bi(W);for(W in{submit:!0,reset:!0})J.pseudos[W]=mi(W);function Tn(){}Tn.prototype=J.filters=J.pseudos,J.setFilters=new Tn,re=rt.tokenize=function(ie,se){var le,_e,he,$e,me,Ee,Be,Fe=yr[ie+" "];if(Fe)return se?0:Fe.slice(0);for(me=ie,Ee=[],Be=J.preFilter;me;){(!le||(_e=pi.exec(me)))&&(_e&&(me=me.slice(_e[0].length)||me),Ee.push(he=[])),le=!1,(_e=di.exec(me))&&(le=_e.shift(),he.push({value:le,type:_e[0].replace($r," ")}),me=me.slice(le.length));for($e in J.filter)(_e=xr[$e].exec(me))&&(!Be[$e]||(_e=Be[$e](_e)))&&(le=_e.shift(),he.push({value:le,type:$e,matches:_e}),me=me.slice(le.length));if(!le)break}return se?me.length:me?rt.error(ie):yr(ie,Ee).slice(0)};function Cr(ie){for(var se=0,le=ie.length,_e="";se<le;se++)_e+=ie[se].value;return _e}function Gr(ie,se,le){var _e=se.dir,he=le&&_e==="parentNode",$e=it++;return se.first?function(me,Ee,Be){for(;me=me[_e];)if(me.nodeType===1||he)return ie(me,Ee,Be)}:function(me,Ee,Be){var Fe,Re,Ne,Ue=[Ve,$e];if(Be){for(;me=me[_e];)if((me.nodeType===1||he)&&ie(me,Ee,Be))return!0}else for(;me=me[_e];)if(me.nodeType===1||he){if(Ne=me[Le]||(me[Le]={}),Re=Ne[me.uniqueID]||(Ne[me.uniqueID]={}),(Fe=Re[_e])&&Fe[0]===Ve&&Fe[1]===$e)return Ue[2]=Fe[2];if(Re[_e]=Ue,Ue[2]=ie(me,Ee,Be))return!0}}}function Ur(ie){return ie.length>1?function(se,le,_e){for(var he=ie.length;he--;)if(!ie[he](se,le,_e))return!1;return!0}:ie[0]}function yi(ie,se,le){for(var _e=0,he=se.length;_e<he;_e++)rt(ie,se[_e],le);return le}function Ar(ie,se,le,_e,he){for(var $e,me=[],Ee=0,Be=ie.length,Fe=se!=null;Ee<Be;Ee++)($e=ie[Ee])&&(!le||le($e,_e,he))&&(me.push($e),Fe&&se.push(Ee));return me}function Wr(ie,se,le,_e,he,$e){return _e&&!_e[Le]&&(_e=Wr(_e)),he&&!he[Le]&&(he=Wr(he,$e)),St(function(me,Ee,Be,Fe){var Re,Ne,Ue,Ye=[],He=[],at=Ee.length,dt=me||yi(se||"*",Be.nodeType?[Be]:Be,[]),mt=ie&&(me||!se)?Ar(dt,Ye,ie,Be,Fe):dt,nt=le?he||(me?ie:at||_e)?[]:Ee:mt;if(le&&le(mt,nt,Be,Fe),_e)for(Re=Ar(nt,He),_e(Re,[],Be,Fe),Ne=Re.length;Ne--;)(Ue=Re[Ne])&&(nt[He[Ne]]=!(mt[He[Ne]]=Ue));if(me){if(he||ie){if(he){for(Re=[],Ne=nt.length;Ne--;)(Ue=nt[Ne])&&Re.push(mt[Ne]=Ue);he(null,nt=[],Re,Fe)}for(Ne=nt.length;Ne--;)(Ue=nt[Ne])&&(Re=he?Kt(me,Ue):Ye[Ne])>-1&&(me[Re]=!(Ee[Re]=Ue))}}else nt=Ar(nt===Ee?nt.splice(at,nt.length):nt),he?he(null,Ee,nt,Fe):Ht.apply(Ee,nt)})}function Kr(ie){for(var se,le,_e,he=ie.length,$e=J.relative[ie[0].type],me=$e||J.relative[" "],Ee=$e?1:0,Be=Gr(function(Ne){return Ne===se},me,!0),Fe=Gr(function(Ne){return Kt(se,Ne)>-1},me,!0),Re=[function(Ne,Ue,Ye){var He=!$e&&(Ye||Ue!==ge)||((se=Ue).nodeType?Be(Ne,Ue,Ye):Fe(Ne,Ue,Ye));return se=null,He}];Ee<he;Ee++)if(le=J.relative[ie[Ee].type])Re=[Gr(Ur(Re),le)];else{if(le=J.filter[ie[Ee].type].apply(null,ie[Ee].matches),le[Le]){for(_e=++Ee;_e<he&&!J.relative[ie[_e].type];_e++);return Wr(Ee>1&&Ur(Re),Ee>1&&Cr(ie.slice(0,Ee-1).concat({value:ie[Ee-2].type===" "?"*":""})).replace($r,"$1"),le,Ee<_e&&Kr(ie.slice(Ee,_e)),_e<he&&Kr(ie=ie.slice(_e)),_e<he&&Cr(ie))}Re.push(le)}return Ur(Re)}function $i(ie,se){var le=se.length>0,_e=ie.length>0,he=function($e,me,Ee,Be,Fe){var Re,Ne,Ue,Ye=0,He="0",at=$e&&[],dt=[],mt=ge,nt=$e||_e&&J.find.TAG("*",Fe),pr=Ve+=mt==null?1:Math.random()||.1,dr=nt.length;for(Fe&&(ge=me===xe||me||Fe);He!==dr&&(Re=nt[He])!=null;He++){if(_e&&Re){for(Ne=0,!me&&Re.ownerDocument!==xe&&(Oe(Re),Ee=!ze);Ue=ie[Ne++];)if(Ue(Re,me||xe,Ee)){Be.push(Re);break}Fe&&(Ve=pr)}le&&((Re=!Ue&&Re)&&Ye--,$e&&at.push(Re))}if(Ye+=He,le&&He!==Ye){for(Ne=0;Ue=se[Ne++];)Ue(at,dt,me,Ee);if($e){if(Ye>0)for(;He--;)at[He]||dt[He]||(dt[He]=Ct.call(Be));dt=Ar(dt)}Ht.apply(Be,dt),Fe&&!$e&&dt.length>0&&Ye+se.length>1&&rt.uniqueSort(Be)}return Fe&&(Ve=pr,ge=mt),at};return le?St(he):he}return ae=rt.compile=function(ie,se){var le,_e=[],he=[],$e=xt[ie+" "];if(!$e){for(se||(se=re(ie)),le=se.length;le--;)$e=Kr(se[le]),$e[Le]?_e.push($e):he.push($e);$e=xt(ie,$i(he,_e)),$e.selector=ie}return $e},ue=rt.select=function(ie,se,le,_e){var he,$e,me,Ee,Be,Fe=typeof ie=="function"&&ie,Re=!_e&&re(ie=Fe.selector||ie);if(le=le||[],Re.length===1){if($e=Re[0]=Re[0].slice(0),$e.length>2&&(me=$e[0]).type==="ID"&&K.getById&&se.nodeType===9&&ze&&J.relative[$e[1].type]){if(se=(J.find.ID(me.matches[0].replace(Lt,Mt),se)||[])[0],se)Fe&&(se=se.parentNode);else return le;ie=ie.slice($e.shift().value.length)}for(he=xr.needsContext.test(ie)?0:$e.length;he--&&(me=$e[he],!J.relative[Ee=me.type]);)if((Be=J.find[Ee])&&(_e=Be(me.matches[0].replace(Lt,Mt),Fr.test($e[0].type)&&Vr(se.parentNode)||se))){if($e.splice(he,1),ie=_e.length&&Cr($e),!ie)return Ht.apply(le,_e),le;break}}return(Fe||ae(ie,Re))(_e,se,!ze,le,!se||Fr.test(ie)&&Vr(se.parentNode)||se),le},K.sortStable=Le.split("").sort(Wt).join("")===Le,K.detectDuplicates=!!Ce,Oe(),K.sortDetached=Et(function(ie){return ie.compareDocumentPosition(xe.createElement("div"))&1}),Et(function(ie){return ie.innerHTML="<a href='#'></a>",ie.firstChild.getAttribute("href")==="#"})||qr("type|href|height|width",function(ie,se,le){if(!le)return ie.getAttribute(se,se.toLowerCase()==="type"?1:2)}),(!K.attributes||!Et(function(ie){return ie.innerHTML="<input/>",ie.firstChild.setAttribute("value",""),ie.firstChild.getAttribute("value")===""}))&&qr("value",function(ie,se,le){if(!le&&ie.nodeName.toLowerCase()==="input")return ie.defaultValue}),Et(function(ie){return ie.getAttribute("disabled")==null})||qr(Nr,function(ie,se,le){var _e;if(!le)return ie[se]===!0?se.toLowerCase():(_e=ie.getAttributeNode(se))&&_e.specified?_e.value:null}),rt}(O);X.find=ke,X.expr=ke.selectors,X.expr[":"]=X.expr.pseudos,X.uniqueSort=X.unique=ke.uniqueSort,X.text=ke.getText,X.isXMLDoc=ke.isXML,X.contains=ke.contains;var ye=function(q,W,K){for(var J=[],ee=K!==void 0;(q=q[W])&&q.nodeType!==9;)if(q.nodeType===1){if(ee&&X(q).is(K))break;J.push(q)}return J},be=function(q,W){for(var K=[];q;q=q.nextSibling)q.nodeType===1&&q!==W&&K.push(q);return K},Te=X.expr.match.needsContext,Ie=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,je=/^.[^:#\[\.,]*$/;function De(q,W,K){if(X.isFunction(W))return X.grep(q,function(J,ee){return!!W.call(J,ee,J)!==K});if(W.nodeType)return X.grep(q,function(J){return J===W!==K});if(typeof W=="string"){if(je.test(W))return X.filter(W,q,K);W=X.filter(W,q)}return X.grep(q,function(J){return Q.call(W,J)>-1!==K})}X.filter=function(q,W,K){var J=W[0];return K&&(q=":not("+q+")"),W.length===1&&J.nodeType===1?X.find.matchesSelector(J,q)?[J]:[]:X.find.matches(q,X.grep(W,function(ee){return ee.nodeType===1}))},X.fn.extend({find:function(q){var W,K=this.length,J=[],ee=this;if(typeof q!="string")return this.pushStack(X(q).filter(function(){for(W=0;W<K;W++)if(X.contains(ee[W],this))return!0}));for(W=0;W<K;W++)X.find(q,ee[W],J);return J=this.pushStack(K>1?X.unique(J):J),J.selector=this.selector?this.selector+" "+q:q,J},filter:function(q){return this.pushStack(De(this,q||[],!1))},not:function(q){return this.pushStack(De(this,q||[],!0))},is:function(q){return!!De(this,typeof q=="string"&&Te.test(q)?X(q):q||[],!1).length}});var We,et=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,Xe=X.fn.init=function(q,W,K){var J,ee;if(!q)return this;if(K=K||We,typeof q=="string")if(q[0]==="<"&&q[q.length-1]===">"&&q.length>=3?J=[null,q,null]:J=et.exec(q),J&&(J[1]||!W))if(J[1]){if(W=W instanceof X?W[0]:W,X.merge(this,X.parseHTML(J[1],W&&W.nodeType?W.ownerDocument||W:z,!0)),Ie.test(J[1])&&X.isPlainObject(W))for(J in W)X.isFunction(this[J])?this[J](W[J]):this.attr(J,W[J]);return this}else return ee=z.getElementById(J[2]),ee&&ee.parentNode&&(this.length=1,this[0]=ee),this.context=z,this.selector=q,this;else return!W||W.jquery?(W||K).find(q):this.constructor(W).find(q);else{if(q.nodeType)return this.context=this[0]=q,this.length=1,this;if(X.isFunction(q))return K.ready!==void 0?K.ready(q):q(X)}return q.selector!==void 0&&(this.selector=q.selector,this.context=q.context),X.makeArray(q,this)};Xe.prototype=X.fn,We=X(z);var Ke=/^(?:parents|prev(?:Until|All))/,ot={children:!0,contents:!0,next:!0,prev:!0};X.fn.extend({has:function(q){var W=X(q,this),K=W.length;return this.filter(function(){for(var J=0;J<K;J++)if(X.contains(this,W[J]))return!0})},closest:function(q,W){for(var K,J=0,ee=this.length,te=[],re=Te.test(q)||typeof q!="string"?X(q,W||this.context):0;J<ee;J++)for(K=this[J];K&&K!==W;K=K.parentNode)if(K.nodeType<11&&(re?re.index(K)>-1:K.nodeType===1&&X.find.matchesSelector(K,q))){te.push(K);break}return this.pushStack(te.length>1?X.uniqueSort(te):te)},index:function(q){return q?typeof q=="string"?Q.call(X(q),this[0]):Q.call(this,q.jquery?q[0]:q):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(q,W){return this.pushStack(X.uniqueSort(X.merge(this.get(),X(q,W))))},addBack:function(q){return this.add(q==null?this.prevObject:this.prevObject.filter(q))}});function Je(q,W){for(;(q=q[W])&&q.nodeType!==1;);return q}X.each({parent:function(q){var W=q.parentNode;return W&&W.nodeType!==11?W:null},parents:function(q){return ye(q,"parentNode")},parentsUntil:function(q,W,K){return ye(q,"parentNode",K)},next:function(q){return Je(q,"nextSibling")},prev:function(q){return Je(q,"previousSibling")},nextAll:function(q){return ye(q,"nextSibling")},prevAll:function(q){return ye(q,"previousSibling")},nextUntil:function(q,W,K){return ye(q,"nextSibling",K)},prevUntil:function(q,W,K){return ye(q,"previousSibling",K)},siblings:function(q){return be((q.parentNode||{}).firstChild,q)},children:function(q){return be(q.firstChild)},contents:function(q){return q.contentDocument||X.merge([],q.childNodes)}},function(q,W){X.fn[q]=function(K,J){var ee=X.map(this,W,K);return q.slice(-5)!=="Until"&&(J=K),J&&typeof J=="string"&&(ee=X.filter(J,ee)),this.length>1&&(ot[q]||X.uniqueSort(ee),Ke.test(q)&&ee.reverse()),this.pushStack(ee)}});var Ze=/\S+/g;function vt(q){var W={};return X.each(q.match(Ze)||[],function(K,J){W[J]=!0}),W}X.Callbacks=function(q){q=typeof q=="string"?vt(q):X.extend({},q);var W,K,J,ee,te=[],re=[],ae=-1,ue=function(){for(ee=q.once,J=W=!0;re.length;ae=-1)for(K=re.shift();++ae<te.length;)te[ae].apply(K[0],K[1])===!1&&q.stopOnFalse&&(ae=te.length,K=!1);q.memory||(K=!1),W=!1,ee&&(K?te=[]:te="")},ge={add:function(){return te&&(K&&!W&&(ae=te.length-1,re.push(K)),function pe(Ce){X.each(Ce,function(Oe,xe){X.isFunction(xe)?(!q.unique||!ge.has(xe))&&te.push(xe):xe&&xe.length&&X.type(xe)!=="string"&&pe(xe)})}(arguments),K&&!W&&ue()),this},remove:function(){return X.each(arguments,function(pe,Ce){for(var Oe;(Oe=X.inArray(Ce,te,Oe))>-1;)te.splice(Oe,1),Oe<=ae&&ae--}),this},has:function(pe){return pe?X.inArray(pe,te)>-1:te.length>0},empty:function(){return te&&(te=[]),this},disable:function(){return ee=re=[],te=K="",this},disabled:function(){return!te},lock:function(){return ee=re=[],K||(te=K=""),this},locked:function(){return!!ee},fireWith:function(pe,Ce){return ee||(Ce=Ce||[],Ce=[pe,Ce.slice?Ce.slice():Ce],re.push(Ce),W||ue()),this},fire:function(){return ge.fireWith(this,arguments),this},fired:function(){return!!J}};return ge},X.extend({Deferred:function(q){var W=[["resolve","done",X.Callbacks("once memory"),"resolved"],["reject","fail",X.Callbacks("once memory"),"rejected"],["notify","progress",X.Callbacks("memory")]],K="pending",J={state:function(){return K},always:function(){return ee.done(arguments).fail(arguments),this},then:function(){var te=arguments;return X.Deferred(function(re){X.each(W,function(ae,ue){var ge=X.isFunction(te[ae])&&te[ae];ee[ue[1]](function(){var pe=ge&&ge.apply(this,arguments);pe&&X.isFunction(pe.promise)?pe.promise().progress(re.notify).done(re.resolve).fail(re.reject):re[ue[0]+"With"](this===J?re.promise():this,ge?[pe]:arguments)})}),te=null}).promise()},promise:function(te){return te!=null?X.extend(te,J):J}},ee={};return J.pipe=J.then,X.each(W,function(te,re){var ae=re[2],ue=re[3];J[re[1]]=ae.add,ue&&ae.add(function(){K=ue},W[te^1][2].disable,W[2][2].lock),ee[re[0]]=function(){return ee[re[0]+"With"](this===ee?J:this,arguments),this},ee[re[0]+"With"]=ae.fireWith}),J.promise(ee),q&&q.call(ee,ee),ee},when:function(q){var W=0,K=G.call(arguments),J=K.length,ee=J!==1||q&&X.isFunction(q.promise)?J:0,te=ee===1?q:X.Deferred(),re=function(pe,Ce,Oe){return function(xe){Ce[pe]=this,Oe[pe]=arguments.length>1?G.call(arguments):xe,Oe===ae?te.notifyWith(Ce,Oe):--ee||te.resolveWith(Ce,Oe)}},ae,ue,ge;if(J>1)for(ae=new Array(J),ue=new Array(J),ge=new Array(J);W<J;W++)K[W]&&X.isFunction(K[W].promise)?K[W].promise().progress(re(W,ue,ae)).done(re(W,ge,K)).fail(te.reject):--ee;return ee||te.resolveWith(ge,K),te.promise()}});var lt;X.fn.ready=function(q){return X.ready.promise().done(q),this},X.extend({isReady:!1,readyWait:1,holdReady:function(q){q?X.readyWait++:X.ready(!0)},ready:function(q){(q===!0?--X.readyWait:X.isReady)||(X.isReady=!0,!(q!==!0&&--X.readyWait>0)&&(lt.resolveWith(z,[X]),X.fn.triggerHandler&&(X(z).triggerHandler("ready"),X(z).off("ready"))))}});function ht(){z.removeEventListener("DOMContentLoaded",ht),O.removeEventListener("load",ht),X.ready()}X.ready.promise=function(q){return lt||(lt=X.Deferred(),z.readyState==="complete"||z.readyState!=="loading"&&!z.documentElement.doScroll?O.setTimeout(X.ready):(z.addEventListener("DOMContentLoaded",ht),O.addEventListener("load",ht))),lt.promise(q)},X.ready.promise();var st=function(q,W,K,J,ee,te,re){var ae=0,ue=q.length,ge=K==null;if(X.type(K)==="object"){ee=!0;for(ae in K)st(q,W,ae,K[ae],!0,te,re)}else if(J!==void 0&&(ee=!0,X.isFunction(J)||(re=!0),ge&&(re?(W.call(q,J),W=null):(ge=W,W=function(pe,Ce,Oe){return ge.call(X(pe),Oe)})),W))for(;ae<ue;ae++)W(q[ae],K,re?J:J.call(q[ae],ae,W(q[ae],K)));return ee?q:ge?W.call(q):ue?W(q[0],K):te},ft=function(q){return q.nodeType===1||q.nodeType===9||!+q.nodeType};function bt(){this.expando=X.expando+bt.uid++}bt.uid=1,bt.prototype={register:function(q,W){var K=W||{};return q.nodeType?q[this.expando]=K:Object.defineProperty(q,this.expando,{value:K,writable:!0,configurable:!0}),q[this.expando]},cache:function(q){if(!ft(q))return{};var W=q[this.expando];return W||(W={},ft(q)&&(q.nodeType?q[this.expando]=W:Object.defineProperty(q,this.expando,{value:W,configurable:!0}))),W},set:function(q,W,K){var J,ee=this.cache(q);if(typeof W=="string")ee[W]=K;else for(J in W)ee[J]=W[J];return ee},get:function(q,W){return W===void 0?this.cache(q):q[this.expando]&&q[this.expando][W]},access:function(q,W,K){var J;return W===void 0||W&&typeof W=="string"&&K===void 0?(J=this.get(q,W),J!==void 0?J:this.get(q,X.camelCase(W))):(this.set(q,W,K),K!==void 0?K:W)},remove:function(q,W){var K,J,ee,te=q[this.expando];if(te!==void 0){if(W===void 0)this.register(q);else for(X.isArray(W)?J=W.concat(W.map(X.camelCase)):(ee=X.camelCase(W),W in te?J=[W,ee]:(J=ee,J=J in te?[J]:J.match(Ze)||[])),K=J.length;K--;)delete te[J[K]];(W===void 0||X.isEmptyObject(te))&&(q.nodeType?q[this.expando]=void 0:delete q[this.expando])}},hasData:function(q){var W=q[this.expando];return W!==void 0&&!X.isEmptyObject(W)}};var Me=new bt,tt=new bt,Nt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,jt=/[A-Z]/g;function Ot(q,W,K){var J;if(K===void 0&&q.nodeType===1)if(J="data-"+W.replace(jt,"-$&").toLowerCase(),K=q.getAttribute(J),typeof K=="string"){try{K=K==="true"?!0:K==="false"?!1:K==="null"?null:+K+""===K?+K:Nt.test(K)?X.parseJSON(K):K}catch{}tt.set(q,W,K)}else K=void 0;return K}X.extend({hasData:function(q){return tt.hasData(q)||Me.hasData(q)},data:function(q,W,K){return tt.access(q,W,K)},removeData:function(q,W){tt.remove(q,W)},_data:function(q,W,K){return Me.access(q,W,K)},_removeData:function(q,W){Me.remove(q,W)}}),X.fn.extend({data:function(q,W){var K,J,ee,te=this[0],re=te&&te.attributes;if(q===void 0){if(this.length&&(ee=tt.get(te),te.nodeType===1&&!Me.get(te,"hasDataAttrs"))){for(K=re.length;K--;)re[K]&&(J=re[K].name,J.indexOf("data-")===0&&(J=X.camelCase(J.slice(5)),Ot(te,J,ee[J])));Me.set(te,"hasDataAttrs",!0)}return ee}return typeof q=="object"?this.each(function(){tt.set(this,q)}):st(this,function(ae){var ue,ge;if(te&&ae===void 0)return ue=tt.get(te,q)||tt.get(te,q.replace(jt,"-$&").toLowerCase()),ue!==void 0||(ge=X.camelCase(q),ue=tt.get(te,ge),ue!==void 0)||(ue=Ot(te,ge,void 0),ue!==void 0)?ue:void 0;ge=X.camelCase(q),this.each(function(){var pe=tt.get(this,ge);tt.set(this,ge,ae),q.indexOf("-")>-1&&pe!==void 0&&tt.set(this,q,ae)})},null,W,arguments.length>1,null,!0)},removeData:function(q){return this.each(function(){tt.remove(this,q)})}}),X.extend({queue:function(q,W,K){var J;if(q)return W=(W||"fx")+"queue",J=Me.get(q,W),K&&(!J||X.isArray(K)?J=Me.access(q,W,X.makeArray(K)):J.push(K)),J||[]},dequeue:function(q,W){W=W||"fx";var K=X.queue(q,W),J=K.length,ee=K.shift(),te=X._queueHooks(q,W),re=function(){X.dequeue(q,W)};ee==="inprogress"&&(ee=K.shift(),J--),ee&&(W==="fx"&&K.unshift("inprogress"),delete te.stop,ee.call(q,re,te)),!J&&te&&te.empty.fire()},_queueHooks:function(q,W){var K=W+"queueHooks";return Me.get(q,K)||Me.access(q,K,{empty:X.Callbacks("once memory").add(function(){Me.remove(q,[W+"queue",K])})})}}),X.fn.extend({queue:function(q,W){var K=2;return typeof q!="string"&&(W=q,q="fx",K--),arguments.length<K?X.queue(this[0],q):W===void 0?this:this.each(function(){var J=X.queue(this,q,W);X._queueHooks(this,q),q==="fx"&&J[0]!=="inprogress"&&X.dequeue(this,q)})},dequeue:function(q){return this.each(function(){X.dequeue(this,q)})},clearQueue:function(q){return this.queue(q||"fx",[])},promise:function(q,W){var K,J=1,ee=X.Deferred(),te=this,re=this.length,ae=function(){--J||ee.resolveWith(te,[te])};for(typeof q!="string"&&(W=q,q=void 0),q=q||"fx";re--;)K=Me.get(te[re],q+"queueHooks"),K&&K.empty&&(J++,K.empty.add(ae));return ae(),ee.promise(W)}});var Jt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ft=new RegExp("^(?:([+-])=|)("+Jt+")([a-z%]*)$","i"),At=["Top","Right","Bottom","Left"],zt=function(q,W){return q=W||q,X.css(q,"display")==="none"||!X.contains(q.ownerDocument,q)};function rr(q,W,K,J){var ee,te=1,re=20,ae=J?function(){return J.cur()}:function(){return X.css(q,W,"")},ue=ae(),ge=K&&K[3]||(X.cssNumber[W]?"":"px"),pe=(X.cssNumber[W]||ge!=="px"&&+ue)&&Ft.exec(X.css(q,W));if(pe&&pe[3]!==ge){ge=ge||pe[3],K=K||[],pe=+ue||1;do te=te||".5",pe=pe/te,X.style(q,W,pe+ge);while(te!==(te=ae()/ue)&&te!==1&&--re)}return K&&(pe=+pe||+ue||0,ee=K[1]?pe+(K[1]+1)*K[2]:+K[2],J&&(J.unit=ge,J.start=pe,J.end=ee)),ee}var hr=/^(?:checkbox|radio)$/i,fr=/<([\w:-]+)/,nr=/^$|\/(?:java|ecma)script/i,gt={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};gt.optgroup=gt.option,gt.tbody=gt.tfoot=gt.colgroup=gt.caption=gt.thead,gt.th=gt.td;function ut(q,W){var K=typeof q.getElementsByTagName<"u"?q.getElementsByTagName(W||"*"):typeof q.querySelectorAll<"u"?q.querySelectorAll(W||"*"):[];return W===void 0||W&&X.nodeName(q,W)?X.merge([q],K):K}function ir(q,W){for(var K=0,J=q.length;K<J;K++)Me.set(q[K],"globalEval",!W||Me.get(W[K],"globalEval"))}var Tt=/<|&#?\w+;/;function qt(q,W,K,J,ee){for(var te,re,ae,ue,ge,pe,Ce=W.createDocumentFragment(),Oe=[],xe=0,Ge=q.length;xe<Ge;xe++)if(te=q[xe],te||te===0)if(X.type(te)==="object")X.merge(Oe,te.nodeType?[te]:te);else if(!Tt.test(te))Oe.push(W.createTextNode(te));else{for(re=re||Ce.appendChild(W.createElement("div")),ae=(fr.exec(te)||["",""])[1].toLowerCase(),ue=gt[ae]||gt._default,re.innerHTML=ue[1]+X.htmlPrefilter(te)+ue[2],pe=ue[0];pe--;)re=re.lastChild;X.merge(Oe,re.childNodes),re=Ce.firstChild,re.textContent=""}for(Ce.textContent="",xe=0;te=Oe[xe++];){if(J&&X.inArray(te,J)>-1){ee&&ee.push(te);continue}if(ge=X.contains(te.ownerDocument,te),re=ut(Ce.appendChild(te),"script"),ge&&ir(re),K)for(pe=0;te=re[pe++];)nr.test(te.type||"")&&K.push(te)}return Ce}(function(){var q=z.createDocumentFragment(),W=q.appendChild(z.createElement("div")),K=z.createElement("input");K.setAttribute("type","radio"),K.setAttribute("checked","checked"),K.setAttribute("name","t"),W.appendChild(K),fe.checkClone=W.cloneNode(!0).cloneNode(!0).lastChild.checked,W.innerHTML="<textarea>x</textarea>",fe.noCloneChecked=!!W.cloneNode(!0).lastChild.defaultValue})();var gr=/^key/,vr=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Yt=/^([^.]*)(?:\.(.+)|)/;function Vt(){return!0}function Pt(){return!1}function or(){try{return z.activeElement}catch{}}function Qt(q,W,K,J,ee,te){var re,ae;if(typeof W=="object"){typeof K!="string"&&(J=J||K,K=void 0);for(ae in W)Qt(q,ae,K,J,W[ae],te);return q}if(J==null&&ee==null?(ee=K,J=K=void 0):ee==null&&(typeof K=="string"?(ee=J,J=void 0):(ee=J,J=K,K=void 0)),ee===!1)ee=Pt;else if(!ee)return q;return te===1&&(re=ee,ee=function(ue){return X().off(ue),re.apply(this,arguments)},ee.guid=re.guid||(re.guid=X.guid++)),q.each(function(){X.event.add(this,W,ee,J,K)})}X.event={global:{},add:function(q,W,K,J,ee){var te,re,ae,ue,ge,pe,Ce,Oe,xe,Ge,ze,qe=Me.get(q);if(qe)for(K.handler&&(te=K,K=te.handler,ee=te.selector),K.guid||(K.guid=X.guid++),(ue=qe.events)||(ue=qe.events={}),(re=qe.handle)||(re=qe.handle=function($t){return typeof X<"u"&&X.event.triggered!==$t.type?X.event.dispatch.apply(q,arguments):void 0}),W=(W||"").match(Ze)||[""],ge=W.length;ge--;)ae=Yt.exec(W[ge])||[],xe=ze=ae[1],Ge=(ae[2]||"").split(".").sort(),xe&&(Ce=X.event.special[xe]||{},xe=(ee?Ce.delegateType:Ce.bindType)||xe,Ce=X.event.special[xe]||{},pe=X.extend({type:xe,origType:ze,data:J,handler:K,guid:K.guid,selector:ee,needsContext:ee&&X.expr.match.needsContext.test(ee),namespace:Ge.join(".")},te),(Oe=ue[xe])||(Oe=ue[xe]=[],Oe.delegateCount=0,(!Ce.setup||Ce.setup.call(q,J,Ge,re)===!1)&&q.addEventListener&&q.addEventListener(xe,re)),Ce.add&&(Ce.add.call(q,pe),pe.handler.guid||(pe.handler.guid=K.guid)),ee?Oe.splice(Oe.delegateCount++,0,pe):Oe.push(pe),X.event.global[xe]=!0)},remove:function(q,W,K,J,ee){var te,re,ae,ue,ge,pe,Ce,Oe,xe,Ge,ze,qe=Me.hasData(q)&&Me.get(q);if(!(!qe||!(ue=qe.events))){for(W=(W||"").match(Ze)||[""],ge=W.length;ge--;){if(ae=Yt.exec(W[ge])||[],xe=ze=ae[1],Ge=(ae[2]||"").split(".").sort(),!xe){for(xe in ue)X.event.remove(q,xe+W[ge],K,J,!0);continue}for(Ce=X.event.special[xe]||{},xe=(J?Ce.delegateType:Ce.bindType)||xe,Oe=ue[xe]||[],ae=ae[2]&&new RegExp("(^|\\.)"+Ge.join("\\.(?:.*\\.|)")+"(\\.|$)"),re=te=Oe.length;te--;)pe=Oe[te],(ee||ze===pe.origType)&&(!K||K.guid===pe.guid)&&(!ae||ae.test(pe.namespace))&&(!J||J===pe.selector||J==="**"&&pe.selector)&&(Oe.splice(te,1),pe.selector&&Oe.delegateCount--,Ce.remove&&Ce.remove.call(q,pe));re&&!Oe.length&&((!Ce.teardown||Ce.teardown.call(q,Ge,qe.handle)===!1)&&X.removeEvent(q,xe,qe.handle),delete ue[xe])}X.isEmptyObject(ue)&&Me.remove(q,"handle events")}},dispatch:function(q){q=X.event.fix(q);var W,K,J,ee,te,re=[],ae=G.call(arguments),ue=(Me.get(this,"events")||{})[q.type]||[],ge=X.event.special[q.type]||{};if(ae[0]=q,q.delegateTarget=this,!(ge.preDispatch&&ge.preDispatch.call(this,q)===!1)){for(re=X.event.handlers.call(this,q,ue),W=0;(ee=re[W++])&&!q.isPropagationStopped();)for(q.currentTarget=ee.elem,K=0;(te=ee.handlers[K++])&&!q.isImmediatePropagationStopped();)(!q.rnamespace||q.rnamespace.test(te.namespace))&&(q.handleObj=te,q.data=te.data,J=((X.event.special[te.origType]||{}).handle||te.handler).apply(ee.elem,ae),J!==void 0&&(q.result=J)===!1&&(q.preventDefault(),q.stopPropagation()));return ge.postDispatch&&ge.postDispatch.call(this,q),q.result}},handlers:function(q,W){var K,J,ee,te,re=[],ae=W.delegateCount,ue=q.target;if(ae&&ue.nodeType&&(q.type!=="click"||isNaN(q.button)||q.button<1)){for(;ue!==this;ue=ue.parentNode||this)if(ue.nodeType===1&&(ue.disabled!==!0||q.type!=="click")){for(J=[],K=0;K<ae;K++)te=W[K],ee=te.selector+" ",J[ee]===void 0&&(J[ee]=te.needsContext?X(ee,this).index(ue)>-1:X.find(ee,this,null,[ue]).length),J[ee]&&J.push(te);J.length&&re.push({elem:ue,handlers:J})}}return ae<W.length&&re.push({elem:this,handlers:W.slice(ae)}),re},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(q,W){return q.which==null&&(q.which=W.charCode!=null?W.charCode:W.keyCode),q}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(q,W){var K,J,ee,te=W.button;return q.pageX==null&&W.clientX!=null&&(K=q.target.ownerDocument||z,J=K.documentElement,ee=K.body,q.pageX=W.clientX+(J&&J.scrollLeft||ee&&ee.scrollLeft||0)-(J&&J.clientLeft||ee&&ee.clientLeft||0),q.pageY=W.clientY+(J&&J.scrollTop||ee&&ee.scrollTop||0)-(J&&J.clientTop||ee&&ee.clientTop||0)),!q.which&&te!==void 0&&(q.which=te&1?1:te&2?3:te&4?2:0),q}},fix:function(q){if(q[X.expando])return q;var W,K,J,ee=q.type,te=q,re=this.fixHooks[ee];for(re||(this.fixHooks[ee]=re=vr.test(ee)?this.mouseHooks:gr.test(ee)?this.keyHooks:{}),J=re.props?this.props.concat(re.props):this.props,q=new X.Event(te),W=J.length;W--;)K=J[W],q[K]=te[K];return q.target||(q.target=z),q.target.nodeType===3&&(q.target=q.target.parentNode),re.filter?re.filter(q,te):q},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==or()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===or()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(this.type==="checkbox"&&this.click&&X.nodeName(this,"input"))return this.click(),!1},_default:function(q){return X.nodeName(q.target,"a")}},beforeunload:{postDispatch:function(q){q.result!==void 0&&q.originalEvent&&(q.originalEvent.returnValue=q.result)}}}},X.removeEvent=function(q,W,K){q.removeEventListener&&q.removeEventListener(W,K)},X.Event=function(q,W){if(!(this instanceof X.Event))return new X.Event(q,W);q&&q.type?(this.originalEvent=q,this.type=q.type,this.isDefaultPrevented=q.defaultPrevented||q.defaultPrevented===void 0&&q.returnValue===!1?Vt:Pt):this.type=q,W&&X.extend(this,W),this.timeStamp=q&&q.timeStamp||X.now(),this[X.expando]=!0},X.Event.prototype={constructor:X.Event,isDefaultPrevented:Pt,isPropagationStopped:Pt,isImmediatePropagationStopped:Pt,isSimulated:!1,preventDefault:function(){var q=this.originalEvent;this.isDefaultPrevented=Vt,q&&!this.isSimulated&&q.preventDefault()},stopPropagation:function(){var q=this.originalEvent;this.isPropagationStopped=Vt,q&&!this.isSimulated&&q.stopPropagation()},stopImmediatePropagation:function(){var q=this.originalEvent;this.isImmediatePropagationStopped=Vt,q&&!this.isSimulated&&q.stopImmediatePropagation(),this.stopPropagation()}},X.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(q,W){X.event.special[q]={delegateType:W,bindType:W,handle:function(K){var J,ee=this,te=K.relatedTarget,re=K.handleObj;return(!te||te!==ee&&!X.contains(ee,te))&&(K.type=re.origType,J=re.handler.apply(this,arguments),K.type=W),J}}}),X.fn.extend({on:function(q,W,K,J){return Qt(this,q,W,K,J)},one:function(q,W,K,J){return Qt(this,q,W,K,J,1)},off:function(q,W,K){var J,ee;if(q&&q.preventDefault&&q.handleObj)return J=q.handleObj,X(q.delegateTarget).off(J.namespace?J.origType+"."+J.namespace:J.origType,J.selector,J.handler),this;if(typeof q=="object"){for(ee in q)this.off(ee,W,q[ee]);return this}return(W===!1||typeof W=="function")&&(K=W,W=void 0),K===!1&&(K=Pt),this.each(function(){X.event.remove(this,q,K,W)})}});var Pn=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,Ln=/<script|<style|<link/i,Mn=/checked\s*(?:[^=]|=\s*.checked.)/i,In=/^true\/(.*)/,Dn=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Zr(q,W){return X.nodeName(q,"table")&&X.nodeName(W.nodeType!==11?W:W.firstChild,"tr")?q.getElementsByTagName("tbody")[0]||q.appendChild(q.ownerDocument.createElement("tbody")):q}function Bn(q){return q.type=(q.getAttribute("type")!==null)+"/"+q.type,q}function Rn(q){var W=In.exec(q.type);return W?q.type=W[1]:q.removeAttribute("type"),q}function Jr(q,W){var K,J,ee,te,re,ae,ue,ge;if(W.nodeType===1){if(Me.hasData(q)&&(te=Me.access(q),re=Me.set(W,te),ge=te.events,ge)){delete re.handle,re.events={};for(ee in ge)for(K=0,J=ge[ee].length;K<J;K++)X.event.add(W,ee,ge[ee][K])}tt.hasData(q)&&(ae=tt.access(q),ue=X.extend({},ae),tt.set(W,ue))}}function Hn(q,W){var K=W.nodeName.toLowerCase();K==="input"&&hr.test(q.type)?W.checked=q.checked:(K==="input"||K==="textarea")&&(W.defaultValue=q.defaultValue)}function Gt(q,W,K,J){W=U.apply([],W);var ee,te,re,ae,ue,ge,pe=0,Ce=q.length,Oe=Ce-1,xe=W[0],Ge=X.isFunction(xe);if(Ge||Ce>1&&typeof xe=="string"&&!fe.checkClone&&Mn.test(xe))return q.each(function(ze){var qe=q.eq(ze);Ge&&(W[0]=xe.call(this,ze,qe.html())),Gt(qe,W,K,J)});if(Ce&&(ee=qt(W,q[0].ownerDocument,!1,q,J),te=ee.firstChild,ee.childNodes.length===1&&(ee=te),te||J)){for(re=X.map(ut(ee,"script"),Bn),ae=re.length;pe<Ce;pe++)ue=ee,pe!==Oe&&(ue=X.clone(ue,!0,!0),ae&&X.merge(re,ut(ue,"script"))),K.call(q[pe],ue,pe);if(ae)for(ge=re[re.length-1].ownerDocument,X.map(re,Rn),pe=0;pe<ae;pe++)ue=re[pe],nr.test(ue.type||"")&&!Me.access(ue,"globalEval")&&X.contains(ge,ue)&&(ue.src?X._evalUrl&&X._evalUrl(ue.src):X.globalEval(ue.textContent.replace(Dn,"")))}return q}function Yr(q,W,K){for(var J,ee=W?X.filter(W,q):q,te=0;(J=ee[te])!=null;te++)!K&&J.nodeType===1&&X.cleanData(ut(J)),J.parentNode&&(K&&X.contains(J.ownerDocument,J)&&ir(ut(J,"script")),J.parentNode.removeChild(J));return q}X.extend({htmlPrefilter:function(q){return q.replace(Pn,"<$1></$2>")},clone:function(q,W,K){var J,ee,te,re,ae=q.cloneNode(!0),ue=X.contains(q.ownerDocument,q);if(!fe.noCloneChecked&&(q.nodeType===1||q.nodeType===11)&&!X.isXMLDoc(q))for(re=ut(ae),te=ut(q),J=0,ee=te.length;J<ee;J++)Hn(te[J],re[J]);if(W)if(K)for(te=te||ut(q),re=re||ut(ae),J=0,ee=te.length;J<ee;J++)Jr(te[J],re[J]);else Jr(q,ae);return re=ut(ae,"script"),re.length>0&&ir(re,!ue&&ut(q,"script")),ae},cleanData:function(q){for(var W,K,J,ee=X.event.special,te=0;(K=q[te])!==void 0;te++)if(ft(K)){if(W=K[Me.expando]){if(W.events)for(J in W.events)ee[J]?X.event.remove(K,J):X.removeEvent(K,J,W.handle);K[Me.expando]=void 0}K[tt.expando]&&(K[tt.expando]=void 0)}}}),X.fn.extend({domManip:Gt,detach:function(q){return Yr(this,q,!0)},remove:function(q){return Yr(this,q)},text:function(q){return st(this,function(W){return W===void 0?X.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=W)})},null,q,arguments.length)},append:function(){return Gt(this,arguments,function(q){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var W=Zr(this,q);W.appendChild(q)}})},prepend:function(){return Gt(this,arguments,function(q){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var W=Zr(this,q);W.insertBefore(q,W.firstChild)}})},before:function(){return Gt(this,arguments,function(q){this.parentNode&&this.parentNode.insertBefore(q,this)})},after:function(){return Gt(this,arguments,function(q){this.parentNode&&this.parentNode.insertBefore(q,this.nextSibling)})},empty:function(){for(var q,W=0;(q=this[W])!=null;W++)q.nodeType===1&&(X.cleanData(ut(q,!1)),q.textContent="");return this},clone:function(q,W){return q=q??!1,W=W??q,this.map(function(){return X.clone(this,q,W)})},html:function(q){return st(this,function(W){var K=this[0]||{},J=0,ee=this.length;if(W===void 0&&K.nodeType===1)return K.innerHTML;if(typeof W=="string"&&!Ln.test(W)&&!gt[(fr.exec(W)||["",""])[1].toLowerCase()]){W=X.htmlPrefilter(W);try{for(;J<ee;J++)K=this[J]||{},K.nodeType===1&&(X.cleanData(ut(K,!1)),K.innerHTML=W);K=0}catch{}}K&&this.empty().append(W)},null,q,arguments.length)},replaceWith:function(){var q=[];return Gt(this,arguments,function(W){var K=this.parentNode;X.inArray(this,q)<0&&(X.cleanData(ut(this)),K&&K.replaceChild(W,this))},q)}}),X.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(q,W){X.fn[q]=function(K){for(var J,ee=[],te=X(K),re=te.length-1,ae=0;ae<=re;ae++)J=ae===re?this:this.clone(!0),X(te[ae])[W](J),Y.apply(ee,J.get());return this.pushStack(ee)}});var wr,Qr={HTML:"block",BODY:"block"};function en(q,W){var K=X(W.createElement(q)).appendTo(W.body),J=X.css(K[0],"display");return K.detach(),J}function Sr(q){var W=z,K=Qr[q];return K||(K=en(q,W),(K==="none"||!K)&&(wr=(wr||X("<iframe frameborder='0' width='0' height='0'/>")).appendTo(W.documentElement),W=wr[0].contentDocument,W.write(),W.close(),K=en(q,W),wr.detach()),Qr[q]=K),K}var tn=/^margin/,Or=new RegExp("^("+Jt+")(?!px)[a-z%]+$","i"),_r=function(q){var W=q.ownerDocument.defaultView;return(!W||!W.opener)&&(W=O),W.getComputedStyle(q)},Er=function(q,W,K,J){var ee,te,re={};for(te in W)re[te]=q.style[te],q.style[te]=W[te];ee=K.apply(q,J||[]);for(te in W)q.style[te]=re[te];return ee},ar=z.documentElement;(function(){var q,W,K,J,ee=z.createElement("div"),te=z.createElement("div");if(!te.style)return;te.style.backgroundClip="content-box",te.cloneNode(!0).style.backgroundClip="",fe.clearCloneStyle=te.style.backgroundClip==="content-box",ee.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",ee.appendChild(te);function re(){te.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",te.innerHTML="",ar.appendChild(ee);var ae=O.getComputedStyle(te);q=ae.top!=="1%",J=ae.marginLeft==="2px",W=ae.width==="4px",te.style.marginRight="50%",K=ae.marginRight==="4px",ar.removeChild(ee)}X.extend(fe,{pixelPosition:function(){return re(),q},boxSizingReliable:function(){return W==null&&re(),W},pixelMarginRight:function(){return W==null&&re(),K},reliableMarginLeft:function(){return W==null&&re(),J},reliableMarginRight:function(){var ae,ue=te.appendChild(z.createElement("div"));return ue.style.cssText=te.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",ue.style.marginRight=ue.style.width="0",te.style.width="1px",ar.appendChild(ee),ae=!parseFloat(O.getComputedStyle(ue).marginRight),ar.removeChild(ee),te.removeChild(ue),ae}})})();function er(q,W,K){var J,ee,te,re,ae=q.style;return K=K||_r(q),re=K?K.getPropertyValue(W)||K[W]:void 0,(re===""||re===void 0)&&!X.contains(q.ownerDocument,q)&&(re=X.style(q,W)),K&&!fe.pixelMarginRight()&&Or.test(re)&&tn.test(W)&&(J=ae.width,ee=ae.minWidth,te=ae.maxWidth,ae.minWidth=ae.maxWidth=ae.width=re,re=K.width,ae.width=J,ae.minWidth=ee,ae.maxWidth=te),re!==void 0?re+"":re}function Tr(q,W){return{get:function(){if(q()){delete this.get;return}return(this.get=W).apply(this,arguments)}}}var Nn=/^(none|table(?!-c[ea]).+)/,jn={position:"absolute",visibility:"hidden",display:"block"},rn={letterSpacing:"0",fontWeight:"400"},nn=["Webkit","O","Moz","ms"],on=z.createElement("div").style;function an(q){if(q in on)return q;for(var W=q[0].toUpperCase()+q.slice(1),K=nn.length;K--;)if(q=nn[K]+W,q in on)return q}function sn(q,W,K){var J=Ft.exec(W);return J?Math.max(0,J[2]-(K||0))+(J[3]||"px"):W}function cn(q,W,K,J,ee){for(var te=K===(J?"border":"content")?4:W==="width"?1:0,re=0;te<4;te+=2)K==="margin"&&(re+=X.css(q,K+At[te],!0,ee)),J?(K==="content"&&(re-=X.css(q,"padding"+At[te],!0,ee)),K!=="margin"&&(re-=X.css(q,"border"+At[te]+"Width",!0,ee))):(re+=X.css(q,"padding"+At[te],!0,ee),K!=="padding"&&(re+=X.css(q,"border"+At[te]+"Width",!0,ee)));return re}function ln(q,W,K){var J=!0,ee=W==="width"?q.offsetWidth:q.offsetHeight,te=_r(q),re=X.css(q,"boxSizing",!1,te)==="border-box";if(ee<=0||ee==null){if(ee=er(q,W,te),(ee<0||ee==null)&&(ee=q.style[W]),Or.test(ee))return ee;J=re&&(fe.boxSizingReliable()||ee===q.style[W]),ee=parseFloat(ee)||0}return ee+cn(q,W,K||(re?"border":"content"),J,te)+"px"}function un(q,W){for(var K,J,ee,te=[],re=0,ae=q.length;re<ae;re++)J=q[re],J.style&&(te[re]=Me.get(J,"olddisplay"),K=J.style.display,W?(!te[re]&&K==="none"&&(J.style.display=""),J.style.display===""&&zt(J)&&(te[re]=Me.access(J,"olddisplay",Sr(J.nodeName)))):(ee=zt(J),(K!=="none"||!ee)&&Me.set(J,"olddisplay",ee?K:X.css(J,"display"))));for(re=0;re<ae;re++)J=q[re],J.style&&(!W||J.style.display==="none"||J.style.display==="")&&(J.style.display=W?te[re]||"":"none");return q}X.extend({cssHooks:{opacity:{get:function(q,W){if(W){var K=er(q,"opacity");return K===""?"1":K}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(q,W,K,J){if(!(!q||q.nodeType===3||q.nodeType===8||!q.style)){var ee,te,re,ae=X.camelCase(W),ue=q.style;if(W=X.cssProps[ae]||(X.cssProps[ae]=an(ae)||ae),re=X.cssHooks[W]||X.cssHooks[ae],K!==void 0){if(te=typeof K,te==="string"&&(ee=Ft.exec(K))&&ee[1]&&(K=rr(q,W,ee),te="number"),K==null||K!==K)return;te==="number"&&(K+=ee&&ee[3]||(X.cssNumber[ae]?"":"px")),!fe.clearCloneStyle&&K===""&&W.indexOf("background")===0&&(ue[W]="inherit"),(!re||!("set"in re)||(K=re.set(q,K,J))!==void 0)&&(ue[W]=K)}else return re&&"get"in re&&(ee=re.get(q,!1,J))!==void 0?ee:ue[W]}},css:function(q,W,K,J){var ee,te,re,ae=X.camelCase(W);return W=X.cssProps[ae]||(X.cssProps[ae]=an(ae)||ae),re=X.cssHooks[W]||X.cssHooks[ae],re&&"get"in re&&(ee=re.get(q,!0,K)),ee===void 0&&(ee=er(q,W,J)),ee==="normal"&&W in rn&&(ee=rn[W]),K===""||K?(te=parseFloat(ee),K===!0||isFinite(te)?te||0:ee):ee}}),X.each(["height","width"],function(q,W){X.cssHooks[W]={get:function(K,J,ee){if(J)return Nn.test(X.css(K,"display"))&&K.offsetWidth===0?Er(K,jn,function(){return ln(K,W,ee)}):ln(K,W,ee)},set:function(K,J,ee){var te,re=ee&&_r(K),ae=ee&&cn(K,W,ee,X.css(K,"boxSizing",!1,re)==="border-box",re);return ae&&(te=Ft.exec(J))&&(te[3]||"px")!=="px"&&(K.style[W]=J,J=X.css(K,W)),sn(K,J,ae)}}}),X.cssHooks.marginLeft=Tr(fe.reliableMarginLeft,function(q,W){if(W)return(parseFloat(er(q,"marginLeft"))||q.getBoundingClientRect().left-Er(q,{marginLeft:0},function(){return q.getBoundingClientRect().left}))+"px"}),X.cssHooks.marginRight=Tr(fe.reliableMarginRight,function(q,W){if(W)return Er(q,{display:"inline-block"},er,[q,"marginRight"])}),X.each({margin:"",padding:"",border:"Width"},function(q,W){X.cssHooks[q+W]={expand:function(K){for(var J=0,ee={},te=typeof K=="string"?K.split(" "):[K];J<4;J++)ee[q+At[J]+W]=te[J]||te[J-2]||te[0];return ee}},tn.test(q)||(X.cssHooks[q+W].set=sn)}),X.fn.extend({css:function(q,W){return st(this,function(K,J,ee){var te,re,ae={},ue=0;if(X.isArray(J)){for(te=_r(K),re=J.length;ue<re;ue++)ae[J[ue]]=X.css(K,J[ue],!1,te);return ae}return ee!==void 0?X.style(K,J,ee):X.css(K,J)},q,W,arguments.length>1)},show:function(){return un(this,!0)},hide:function(){return un(this)},toggle:function(q){return typeof q=="boolean"?q?this.show():this.hide():this.each(function(){zt(this)?X(this).show():X(this).hide()})}});function wt(q,W,K,J,ee){return new wt.prototype.init(q,W,K,J,ee)}X.Tween=wt,wt.prototype={constructor:wt,init:function(q,W,K,J,ee,te){this.elem=q,this.prop=K,this.easing=ee||X.easing._default,this.options=W,this.start=this.now=this.cur(),this.end=J,this.unit=te||(X.cssNumber[K]?"":"px")},cur:function(){var q=wt.propHooks[this.prop];return q&&q.get?q.get(this):wt.propHooks._default.get(this)},run:function(q){var W,K=wt.propHooks[this.prop];return this.options.duration?this.pos=W=X.easing[this.easing](q,this.options.duration*q,0,1,this.options.duration):this.pos=W=q,this.now=(this.end-this.start)*W+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),K&&K.set?K.set(this):wt.propHooks._default.set(this),this}},wt.prototype.init.prototype=wt.prototype,wt.propHooks={_default:{get:function(q){var W;return q.elem.nodeType!==1||q.elem[q.prop]!=null&&q.elem.style[q.prop]==null?q.elem[q.prop]:(W=X.css(q.elem,q.prop,""),!W||W==="auto"?0:W)},set:function(q){X.fx.step[q.prop]?X.fx.step[q.prop](q):q.elem.nodeType===1&&(q.elem.style[X.cssProps[q.prop]]!=null||X.cssHooks[q.prop])?X.style(q.elem,q.prop,q.now+q.unit):q.elem[q.prop]=q.now}}},wt.propHooks.scrollTop=wt.propHooks.scrollLeft={set:function(q){q.elem.nodeType&&q.elem.parentNode&&(q.elem[q.prop]=q.now)}},X.easing={linear:function(q){return q},swing:function(q){return .5-Math.cos(q*Math.PI)/2},_default:"swing"},X.fx=wt.prototype.init,X.fx.step={};var tr,br,Fn=/^(?:toggle|show|hide)$/,zn=/queueHooks$/;function pn(){return O.setTimeout(function(){tr=void 0}),tr=X.now()}function mr(q,W){var K,J=0,ee={height:q};for(W=W?1:0;J<4;J+=2-W)K=At[J],ee["margin"+K]=ee["padding"+K]=q;return W&&(ee.opacity=ee.width=q),ee}function dn(q,W,K){for(var J,ee=(kt.tweeners[W]||[]).concat(kt.tweeners["*"]),te=0,re=ee.length;te<re;te++)if(J=ee[te].call(K,W,q))return J}function qn(q,W,K){var J,ee,te,re,ae,ue,ge,pe,Ce=this,Oe={},xe=q.style,Ge=q.nodeType&&zt(q),ze=Me.get(q,"fxshow");K.queue||(ae=X._queueHooks(q,"fx"),ae.unqueued==null&&(ae.unqueued=0,ue=ae.empty.fire,ae.empty.fire=function(){ae.unqueued||ue()}),ae.unqueued++,Ce.always(function(){Ce.always(function(){ae.unqueued--,X.queue(q,"fx").length||ae.empty.fire()})})),q.nodeType===1&&("height"in W||"width"in W)&&(K.overflow=[xe.overflow,xe.overflowX,xe.overflowY],ge=X.css(q,"display"),pe=ge==="none"?Me.get(q,"olddisplay")||Sr(q.nodeName):ge,pe==="inline"&&X.css(q,"float")==="none"&&(xe.display="inline-block")),K.overflow&&(xe.overflow="hidden",Ce.always(function(){xe.overflow=K.overflow[0],xe.overflowX=K.overflow[1],xe.overflowY=K.overflow[2]}));for(J in W)if(ee=W[J],Fn.exec(ee)){if(delete W[J],te=te||ee==="toggle",ee===(Ge?"hide":"show"))if(ee==="show"&&ze&&ze[J]!==void 0)Ge=!0;else continue;Oe[J]=ze&&ze[J]||X.style(q,J)}else ge=void 0;if(X.isEmptyObject(Oe))(ge==="none"?Sr(q.nodeName):ge)==="inline"&&(xe.display=ge);else{ze?"hidden"in ze&&(Ge=ze.hidden):ze=Me.access(q,"fxshow",{}),te&&(ze.hidden=!Ge),Ge?X(q).show():Ce.done(function(){X(q).hide()}),Ce.done(function(){var qe;Me.remove(q,"fxshow");for(qe in Oe)X.style(q,qe,Oe[qe])});for(J in Oe)re=dn(Ge?ze[J]:0,J,Ce),J in ze||(ze[J]=re.start,Ge&&(re.end=re.start,re.start=J==="width"||J==="height"?1:0))}}function Vn(q,W){var K,J,ee,te,re;for(K in q)if(J=X.camelCase(K),ee=W[J],te=q[K],X.isArray(te)&&(ee=te[1],te=q[K]=te[0]),K!==J&&(q[J]=te,delete q[K]),re=X.cssHooks[J],re&&"expand"in re){te=re.expand(te),delete q[J];for(K in te)K in q||(q[K]=te[K],W[K]=ee)}else W[J]=ee}function kt(q,W,K){var J,ee,te=0,re=kt.prefilters.length,ae=X.Deferred().always(function(){delete ue.elem}),ue=function(){if(ee)return!1;for(var Ce=tr||pn(),Oe=Math.max(0,ge.startTime+ge.duration-Ce),xe=Oe/ge.duration||0,Ge=1-xe,ze=0,qe=ge.tweens.length;ze<qe;ze++)ge.tweens[ze].run(Ge);return ae.notifyWith(q,[ge,Ge,Oe]),Ge<1&&qe?Oe:(ae.resolveWith(q,[ge]),!1)},ge=ae.promise({elem:q,props:X.extend({},W),opts:X.extend(!0,{specialEasing:{},easing:X.easing._default},K),originalProperties:W,originalOptions:K,startTime:tr||pn(),duration:K.duration,tweens:[],createTween:function(Ce,Oe){var xe=X.Tween(q,ge.opts,Ce,Oe,ge.opts.specialEasing[Ce]||ge.opts.easing);return ge.tweens.push(xe),xe},stop:function(Ce){var Oe=0,xe=Ce?ge.tweens.length:0;if(ee)return this;for(ee=!0;Oe<xe;Oe++)ge.tweens[Oe].run(1);return Ce?(ae.notifyWith(q,[ge,1,0]),ae.resolveWith(q,[ge,Ce])):ae.rejectWith(q,[ge,Ce]),this}}),pe=ge.props;for(Vn(pe,ge.opts.specialEasing);te<re;te++)if(J=kt.prefilters[te].call(ge,q,pe,ge.opts),J)return X.isFunction(J.stop)&&(X._queueHooks(ge.elem,ge.opts.queue).stop=X.proxy(J.stop,J)),J;return X.map(pe,dn,ge),X.isFunction(ge.opts.start)&&ge.opts.start.call(q,ge),X.fx.timer(X.extend(ue,{elem:q,anim:ge,queue:ge.opts.queue})),ge.progress(ge.opts.progress).done(ge.opts.done,ge.opts.complete).fail(ge.opts.fail).always(ge.opts.always)}X.Animation=X.extend(kt,{tweeners:{"*":[function(q,W){var K=this.createTween(q,W);return rr(K.elem,q,Ft.exec(W),K),K}]},tweener:function(q,W){X.isFunction(q)?(W=q,q=["*"]):q=q.match(Ze);for(var K,J=0,ee=q.length;J<ee;J++)K=q[J],kt.tweeners[K]=kt.tweeners[K]||[],kt.tweeners[K].unshift(W)},prefilters:[qn],prefilter:function(q,W){W?kt.prefilters.unshift(q):kt.prefilters.push(q)}}),X.speed=function(q,W,K){var J=q&&typeof q=="object"?X.extend({},q):{complete:K||!K&&W||X.isFunction(q)&&q,duration:q,easing:K&&W||W&&!X.isFunction(W)&&W};return J.duration=X.fx.off?0:typeof J.duration=="number"?J.duration:J.duration in X.fx.speeds?X.fx.speeds[J.duration]:X.fx.speeds._default,(J.queue==null||J.queue===!0)&&(J.queue="fx"),J.old=J.complete,J.complete=function(){X.isFunction(J.old)&&J.old.call(this),J.queue&&X.dequeue(this,J.queue)},J},X.fn.extend({fadeTo:function(q,W,K,J){return this.filter(zt).css("opacity",0).show().end().animate({opacity:W},q,K,J)},animate:function(q,W,K,J){var ee=X.isEmptyObject(q),te=X.speed(W,K,J),re=function(){var ae=kt(this,X.extend({},q),te);(ee||Me.get(this,"finish"))&&ae.stop(!0)};return re.finish=re,ee||te.queue===!1?this.each(re):this.queue(te.queue,re)},stop:function(q,W,K){var J=function(ee){var te=ee.stop;delete ee.stop,te(K)};return typeof q!="string"&&(K=W,W=q,q=void 0),W&&q!==!1&&this.queue(q||"fx",[]),this.each(function(){var ee=!0,te=q!=null&&q+"queueHooks",re=X.timers,ae=Me.get(this);if(te)ae[te]&&ae[te].stop&&J(ae[te]);else for(te in ae)ae[te]&&ae[te].stop&&zn.test(te)&&J(ae[te]);for(te=re.length;te--;)re[te].elem===this&&(q==null||re[te].queue===q)&&(re[te].anim.stop(K),ee=!1,re.splice(te,1));(ee||!K)&&X.dequeue(this,q)})},finish:function(q){return q!==!1&&(q=q||"fx"),this.each(function(){var W,K=Me.get(this),J=K[q+"queue"],ee=K[q+"queueHooks"],te=X.timers,re=J?J.length:0;for(K.finish=!0,X.queue(this,q,[]),ee&&ee.stop&&ee.stop.call(this,!0),W=te.length;W--;)te[W].elem===this&&te[W].queue===q&&(te[W].anim.stop(!0),te.splice(W,1));for(W=0;W<re;W++)J[W]&&J[W].finish&&J[W].finish.call(this);delete K.finish})}}),X.each(["toggle","show","hide"],function(q,W){var K=X.fn[W];X.fn[W]=function(J,ee,te){return J==null||typeof J=="boolean"?K.apply(this,arguments):this.animate(mr(W,!0),J,ee,te)}}),X.each({slideDown:mr("show"),slideUp:mr("hide"),slideToggle:mr("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(q,W){X.fn[q]=function(K,J,ee){return this.animate(W,K,J,ee)}}),X.timers=[],X.fx.tick=function(){var q,W=0,K=X.timers;for(tr=X.now();W<K.length;W++)q=K[W],!q()&&K[W]===q&&K.splice(W--,1);K.length||X.fx.stop(),tr=void 0},X.fx.timer=function(q){X.timers.push(q),q()?X.fx.start():X.timers.pop()},X.fx.interval=13,X.fx.start=function(){br||(br=O.setInterval(X.fx.tick,X.fx.interval))},X.fx.stop=function(){O.clearInterval(br),br=null},X.fx.speeds={slow:600,fast:200,_default:400},X.fn.delay=function(q,W){return q=X.fx&&X.fx.speeds[q]||q,W=W||"fx",this.queue(W,function(K,J){var ee=O.setTimeout(K,q);J.stop=function(){O.clearTimeout(ee)}})},function(){var q=z.createElement("input"),W=z.createElement("select"),K=W.appendChild(z.createElement("option"));q.type="checkbox",fe.checkOn=q.value!=="",fe.optSelected=K.selected,W.disabled=!0,fe.optDisabled=!K.disabled,q=z.createElement("input"),q.value="t",q.type="radio",fe.radioValue=q.value==="t"}();var hn,sr=X.expr.attrHandle;X.fn.extend({attr:function(q,W){return st(this,X.attr,q,W,arguments.length>1)},removeAttr:function(q){return this.each(function(){X.removeAttr(this,q)})}}),X.extend({attr:function(q,W,K){var J,ee,te=q.nodeType;if(!(te===3||te===8||te===2)){if(typeof q.getAttribute>"u")return X.prop(q,W,K);if((te!==1||!X.isXMLDoc(q))&&(W=W.toLowerCase(),ee=X.attrHooks[W]||(X.expr.match.bool.test(W)?hn:void 0)),K!==void 0){if(K===null){X.removeAttr(q,W);return}return ee&&"set"in ee&&(J=ee.set(q,K,W))!==void 0?J:(q.setAttribute(W,K+""),K)}return ee&&"get"in ee&&(J=ee.get(q,W))!==null?J:(J=X.find.attr(q,W),J??void 0)}},attrHooks:{type:{set:function(q,W){if(!fe.radioValue&&W==="radio"&&X.nodeName(q,"input")){var K=q.value;return q.setAttribute("type",W),K&&(q.value=K),W}}}},removeAttr:function(q,W){var K,J,ee=0,te=W&&W.match(Ze);if(te&&q.nodeType===1)for(;K=te[ee++];)J=X.propFix[K]||K,X.expr.match.bool.test(K)&&(q[J]=!1),q.removeAttribute(K)}}),hn={set:function(q,W,K){return W===!1?X.removeAttr(q,K):q.setAttribute(K,K),K}},X.each(X.expr.match.bool.source.match(/\w+/g),function(q,W){var K=sr[W]||X.find.attr;sr[W]=function(J,ee,te){var re,ae;return te||(ae=sr[ee],sr[ee]=re,re=K(J,ee,te)!=null?ee.toLowerCase():null,sr[ee]=ae),re}});var Gn=/^(?:input|select|textarea|button)$/i,Un=/^(?:a|area)$/i;X.fn.extend({prop:function(q,W){return st(this,X.prop,q,W,arguments.length>1)},removeProp:function(q){return this.each(function(){delete this[X.propFix[q]||q]})}}),X.extend({prop:function(q,W,K){var J,ee,te=q.nodeType;if(!(te===3||te===8||te===2))return(te!==1||!X.isXMLDoc(q))&&(W=X.propFix[W]||W,ee=X.propHooks[W]),K!==void 0?ee&&"set"in ee&&(J=ee.set(q,K,W))!==void 0?J:q[W]=K:ee&&"get"in ee&&(J=ee.get(q,W))!==null?J:q[W]},propHooks:{tabIndex:{get:function(q){var W=X.find.attr(q,"tabindex");return W?parseInt(W,10):Gn.test(q.nodeName)||Un.test(q.nodeName)&&q.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),fe.optSelected||(X.propHooks.selected={get:function(q){var W=q.parentNode;return W&&W.parentNode&&W.parentNode.selectedIndex,null},set:function(q){var W=q.parentNode;W&&(W.selectedIndex,W.parentNode&&W.parentNode.selectedIndex)}}),X.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){X.propFix[this.toLowerCase()]=this});var Pr=/[\t\r\n\f]/g;function Ut(q){return q.getAttribute&&q.getAttribute("class")||""}X.fn.extend({addClass:function(q){var W,K,J,ee,te,re,ae,ue=0;if(X.isFunction(q))return this.each(function(ge){X(this).addClass(q.call(this,ge,Ut(this)))});if(typeof q=="string"&&q){for(W=q.match(Ze)||[];K=this[ue++];)if(ee=Ut(K),J=K.nodeType===1&&(" "+ee+" ").replace(Pr," "),J){for(re=0;te=W[re++];)J.indexOf(" "+te+" ")<0&&(J+=te+" ");ae=X.trim(J),ee!==ae&&K.setAttribute("class",ae)}}return this},removeClass:function(q){var W,K,J,ee,te,re,ae,ue=0;if(X.isFunction(q))return this.each(function(ge){X(this).removeClass(q.call(this,ge,Ut(this)))});if(!arguments.length)return this.attr("class","");if(typeof q=="string"&&q){for(W=q.match(Ze)||[];K=this[ue++];)if(ee=Ut(K),J=K.nodeType===1&&(" "+ee+" ").replace(Pr," "),J){for(re=0;te=W[re++];)for(;J.indexOf(" "+te+" ")>-1;)J=J.replace(" "+te+" "," ");ae=X.trim(J),ee!==ae&&K.setAttribute("class",ae)}}return this},toggleClass:function(q,W){var K=typeof q;return typeof W=="boolean"&&K==="string"?W?this.addClass(q):this.removeClass(q):X.isFunction(q)?this.each(function(J){X(this).toggleClass(q.call(this,J,Ut(this),W),W)}):this.each(function(){var J,ee,te,re;if(K==="string")for(ee=0,te=X(this),re=q.match(Ze)||[];J=re[ee++];)te.hasClass(J)?te.removeClass(J):te.addClass(J);else(q===void 0||K==="boolean")&&(J=Ut(this),J&&Me.set(this,"__className__",J),this.setAttribute&&this.setAttribute("class",J||q===!1?"":Me.get(this,"__className__")||""))})},hasClass:function(q){var W,K,J=0;for(W=" "+q+" ";K=this[J++];)if(K.nodeType===1&&(" "+Ut(K)+" ").replace(Pr," ").indexOf(W)>-1)return!0;return!1}});var Wn=/\r/g,Kn=/[\x20\t\r\n\f]+/g;X.fn.extend({val:function(q){var W,K,J,ee=this[0];return arguments.length?(J=X.isFunction(q),this.each(function(te){var re;this.nodeType===1&&(J?re=q.call(this,te,X(this).val()):re=q,re==null?re="":typeof re=="number"?re+="":X.isArray(re)&&(re=X.map(re,function(ae){return ae==null?"":ae+""})),W=X.valHooks[this.type]||X.valHooks[this.nodeName.toLowerCase()],(!W||!("set"in W)||W.set(this,re,"value")===void 0)&&(this.value=re))})):ee?(W=X.valHooks[ee.type]||X.valHooks[ee.nodeName.toLowerCase()],W&&"get"in W&&(K=W.get(ee,"value"))!==void 0?K:(K=ee.value,typeof K=="string"?K.replace(Wn,""):K??"")):void 0}}),X.extend({valHooks:{option:{get:function(q){var W=X.find.attr(q,"value");return W??X.trim(X.text(q)).replace(Kn," ")}},select:{get:function(q){for(var W,K,J=q.options,ee=q.selectedIndex,te=q.type==="select-one"||ee<0,re=te?null:[],ae=te?ee+1:J.length,ue=ee<0?ae:te?ee:0;ue<ae;ue++)if(K=J[ue],(K.selected||ue===ee)&&(fe.optDisabled?!K.disabled:K.getAttribute("disabled")===null)&&(!K.parentNode.disabled||!X.nodeName(K.parentNode,"optgroup"))){if(W=X(K).val(),te)return W;re.push(W)}return re},set:function(q,W){for(var K,J,ee=q.options,te=X.makeArray(W),re=ee.length;re--;)J=ee[re],(J.selected=X.inArray(X.valHooks.option.get(J),te)>-1)&&(K=!0);return K||(q.selectedIndex=-1),te}}}}),X.each(["radio","checkbox"],function(){X.valHooks[this]={set:function(q,W){if(X.isArray(W))return q.checked=X.inArray(X(q).val(),W)>-1}},fe.checkOn||(X.valHooks[this].get=function(q){return q.getAttribute("value")===null?"on":q.value})});var gn=/^(?:focusinfocus|focusoutblur)$/;X.extend(X.event,{trigger:function(q,W,K,J){var ee,te,re,ae,ue,ge,pe,Ce=[K||z],Oe=ce.call(q,"type")?q.type:q,xe=ce.call(q,"namespace")?q.namespace.split("."):[];if(te=re=K=K||z,!(K.nodeType===3||K.nodeType===8)&&!gn.test(Oe+X.event.triggered)&&(Oe.indexOf(".")>-1&&(xe=Oe.split("."),Oe=xe.shift(),xe.sort()),ue=Oe.indexOf(":")<0&&"on"+Oe,q=q[X.expando]?q:new X.Event(Oe,typeof q=="object"&&q),q.isTrigger=J?2:3,q.namespace=xe.join("."),q.rnamespace=q.namespace?new RegExp("(^|\\.)"+xe.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,q.result=void 0,q.target||(q.target=K),W=W==null?[q]:X.makeArray(W,[q]),pe=X.event.special[Oe]||{},!(!J&&pe.trigger&&pe.trigger.apply(K,W)===!1))){if(!J&&!pe.noBubble&&!X.isWindow(K)){for(ae=pe.delegateType||Oe,gn.test(ae+Oe)||(te=te.parentNode);te;te=te.parentNode)Ce.push(te),re=te;re===(K.ownerDocument||z)&&Ce.push(re.defaultView||re.parentWindow||O)}for(ee=0;(te=Ce[ee++])&&!q.isPropagationStopped();)q.type=ee>1?ae:pe.bindType||Oe,ge=(Me.get(te,"events")||{})[q.type]&&Me.get(te,"handle"),ge&&ge.apply(te,W),ge=ue&&te[ue],ge&&ge.apply&&ft(te)&&(q.result=ge.apply(te,W),q.result===!1&&q.preventDefault());return q.type=Oe,!J&&!q.isDefaultPrevented()&&(!pe._default||pe._default.apply(Ce.pop(),W)===!1)&&ft(K)&&ue&&X.isFunction(K[Oe])&&!X.isWindow(K)&&(re=K[ue],re&&(K[ue]=null),X.event.triggered=Oe,K[Oe](),X.event.triggered=void 0,re&&(K[ue]=re)),q.result}},simulate:function(q,W,K){var J=X.extend(new X.Event,K,{type:q,isSimulated:!0});X.event.trigger(J,null,W)}}),X.fn.extend({trigger:function(q,W){return this.each(function(){X.event.trigger(q,W,this)})},triggerHandler:function(q,W){var K=this[0];if(K)return X.event.trigger(q,W,K,!0)}}),X.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(q,W){X.fn[W]=function(K,J){return arguments.length>0?this.on(W,null,K,J):this.trigger(W)}}),X.fn.extend({hover:function(q,W){return this.mouseenter(q).mouseleave(W||q)}}),fe.focusin="onfocusin"in O,fe.focusin||X.each({focus:"focusin",blur:"focusout"},function(q,W){var K=function(J){X.event.simulate(W,J.target,X.event.fix(J))};X.event.special[W]={setup:function(){var J=this.ownerDocument||this,ee=Me.access(J,W);ee||J.addEventListener(q,K,!0),Me.access(J,W,(ee||0)+1)},teardown:function(){var J=this.ownerDocument||this,ee=Me.access(J,W)-1;ee?Me.access(J,W,ee):(J.removeEventListener(q,K,!0),Me.remove(J,W))}}});var cr=O.location,Lr=X.now(),Mr=/\?/;X.parseJSON=function(q){return JSON.parse(q+"")},X.parseXML=function(q){var W;if(!q||typeof q!="string")return null;try{W=new O.DOMParser().parseFromString(q,"text/xml")}catch{W=void 0}return(!W||W.getElementsByTagName("parsererror").length)&&X.error("Invalid XML: "+q),W};var Xn=/#.*$/,vn=/([?&])_=[^&]*/,Zn=/^(.*?):[ \t]*([^\r\n]*)$/mg,Jn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Yn=/^(?:GET|HEAD)$/,Qn=/^\/\//,wn={},Ir={},_n="*/".concat("*"),Dr=z.createElement("a");Dr.href=cr.href;function bn(q){return function(W,K){typeof W!="string"&&(K=W,W="*");var J,ee=0,te=W.toLowerCase().match(Ze)||[];if(X.isFunction(K))for(;J=te[ee++];)J[0]==="+"?(J=J.slice(1)||"*",(q[J]=q[J]||[]).unshift(K)):(q[J]=q[J]||[]).push(K)}}function mn(q,W,K,J){var ee={},te=q===Ir;function re(ae){var ue;return ee[ae]=!0,X.each(q[ae]||[],function(ge,pe){var Ce=pe(W,K,J);if(typeof Ce=="string"&&!te&&!ee[Ce])return W.dataTypes.unshift(Ce),re(Ce),!1;if(te)return!(ue=Ce)}),ue}return re(W.dataTypes[0])||!ee["*"]&&re("*")}function Br(q,W){var K,J,ee=X.ajaxSettings.flatOptions||{};for(K in W)W[K]!==void 0&&((ee[K]?q:J||(J={}))[K]=W[K]);return J&&X.extend(!0,q,J),q}function ei(q,W,K){for(var J,ee,te,re,ae=q.contents,ue=q.dataTypes;ue[0]==="*";)ue.shift(),J===void 0&&(J=q.mimeType||W.getResponseHeader("Content-Type"));if(J){for(ee in ae)if(ae[ee]&&ae[ee].test(J)){ue.unshift(ee);break}}if(ue[0]in K)te=ue[0];else{for(ee in K){if(!ue[0]||q.converters[ee+" "+ue[0]]){te=ee;break}re||(re=ee)}te=te||re}if(te)return te!==ue[0]&&ue.unshift(te),K[te]}function ti(q,W,K,J){var ee,te,re,ae,ue,ge={},pe=q.dataTypes.slice();if(pe[1])for(re in q.converters)ge[re.toLowerCase()]=q.converters[re];for(te=pe.shift();te;)if(q.responseFields[te]&&(K[q.responseFields[te]]=W),!ue&&J&&q.dataFilter&&(W=q.dataFilter(W,q.dataType)),ue=te,te=pe.shift(),te){if(te==="*")te=ue;else if(ue!=="*"&&ue!==te){if(re=ge[ue+" "+te]||ge["* "+te],!re){for(ee in ge)if(ae=ee.split(" "),ae[1]===te&&(re=ge[ue+" "+ae[0]]||ge["* "+ae[0]],re)){re===!0?re=ge[ee]:ge[ee]!==!0&&(te=ae[0],pe.unshift(ae[1]));break}}if(re!==!0)if(re&&q.throws)W=re(W);else try{W=re(W)}catch(Ce){return{state:"parsererror",error:re?Ce:"No conversion from "+ue+" to "+te}}}}return{state:"success",data:W}}X.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:cr.href,type:"GET",isLocal:Jn.test(cr.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":_n,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":X.parseJSON,"text xml":X.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(q,W){return W?Br(Br(q,X.ajaxSettings),W):Br(X.ajaxSettings,q)},ajaxPrefilter:bn(wn),ajaxTransport:bn(Ir),ajax:function(q,W){typeof q=="object"&&(W=q,q=void 0),W=W||{};var K,J,ee,te,re,ae,ue,ge,pe=X.ajaxSetup({},W),Ce=pe.context||pe,Oe=pe.context&&(Ce.nodeType||Ce.jquery)?X(Ce):X.event,xe=X.Deferred(),Ge=X.Callbacks("once memory"),ze=pe.statusCode||{},qe={},$t={},ct=0,It="canceled",Le={readyState:0,getResponseHeader:function(Ve){var it;if(ct===2){if(!te)for(te={};it=Zn.exec(ee);)te[it[1].toLowerCase()]=it[2];it=te[Ve.toLowerCase()]}return it??null},getAllResponseHeaders:function(){return ct===2?ee:null},setRequestHeader:function(Ve,it){var Dt=Ve.toLowerCase();return ct||(Ve=$t[Dt]=$t[Dt]||Ve,qe[Ve]=it),this},overrideMimeType:function(Ve){return ct||(pe.mimeType=Ve),this},statusCode:function(Ve){var it;if(Ve)if(ct<2)for(it in Ve)ze[it]=[ze[it],Ve[it]];else Le.always(Ve[Le.status]);return this},abort:function(Ve){var it=Ve||It;return K&&K.abort(it),pt(0,it),this}};if(xe.promise(Le).complete=Ge.add,Le.success=Le.done,Le.error=Le.fail,pe.url=((q||pe.url||cr.href)+"").replace(Xn,"").replace(Qn,cr.protocol+"//"),pe.type=W.method||W.type||pe.method||pe.type,pe.dataTypes=X.trim(pe.dataType||"*").toLowerCase().match(Ze)||[""],pe.crossDomain==null){ae=z.createElement("a");try{ae.href=pe.url,ae.href=ae.href,pe.crossDomain=Dr.protocol+"//"+Dr.host!=ae.protocol+"//"+ae.host}catch{pe.crossDomain=!0}}if(pe.data&&pe.processData&&typeof pe.data!="string"&&(pe.data=X.param(pe.data,pe.traditional)),mn(wn,pe,W,Le),ct===2)return Le;ue=X.event&&pe.global,ue&&X.active++===0&&X.event.trigger("ajaxStart"),pe.type=pe.type.toUpperCase(),pe.hasContent=!Yn.test(pe.type),J=pe.url,pe.hasContent||(pe.data&&(J=pe.url+=(Mr.test(J)?"&":"?")+pe.data,delete pe.data),pe.cache===!1&&(pe.url=vn.test(J)?J.replace(vn,"$1_="+Lr++):J+(Mr.test(J)?"&":"?")+"_="+Lr++)),pe.ifModified&&(X.lastModified[J]&&Le.setRequestHeader("If-Modified-Since",X.lastModified[J]),X.etag[J]&&Le.setRequestHeader("If-None-Match",X.etag[J])),(pe.data&&pe.hasContent&&pe.contentType!==!1||W.contentType)&&Le.setRequestHeader("Content-Type",pe.contentType),Le.setRequestHeader("Accept",pe.dataTypes[0]&&pe.accepts[pe.dataTypes[0]]?pe.accepts[pe.dataTypes[0]]+(pe.dataTypes[0]!=="*"?", "+_n+"; q=0.01":""):pe.accepts["*"]);for(ge in pe.headers)Le.setRequestHeader(ge,pe.headers[ge]);if(pe.beforeSend&&(pe.beforeSend.call(Ce,Le,pe)===!1||ct===2))return Le.abort();It="abort";for(ge in{success:1,error:1,complete:1})Le[ge](pe[ge]);if(K=mn(Ir,pe,W,Le),!K)pt(-1,"No Transport");else{if(Le.readyState=1,ue&&Oe.trigger("ajaxSend",[Le,pe]),ct===2)return Le;pe.async&&pe.timeout>0&&(re=O.setTimeout(function(){Le.abort("timeout")},pe.timeout));try{ct=1,K.send(qe,pt)}catch(Ve){if(ct<2)pt(-1,Ve);else throw Ve}}function pt(Ve,it,Dt,yr){var xt,Wt,Bt,Rt,_t,Ct=it;ct!==2&&(ct=2,re&&O.clearTimeout(re),K=void 0,ee=yr||"",Le.readyState=Ve>0?4:0,xt=Ve>=200&&Ve<300||Ve===304,Dt&&(Rt=ei(pe,Le,Dt)),Rt=ti(pe,Rt,Le,xt),xt?(pe.ifModified&&(_t=Le.getResponseHeader("Last-Modified"),_t&&(X.lastModified[J]=_t),_t=Le.getResponseHeader("etag"),_t&&(X.etag[J]=_t)),Ve===204||pe.type==="HEAD"?Ct="nocontent":Ve===304?Ct="notmodified":(Ct=Rt.state,Wt=Rt.data,Bt=Rt.error,xt=!Bt)):(Bt=Ct,(Ve||!Ct)&&(Ct="error",Ve<0&&(Ve=0))),Le.status=Ve,Le.statusText=(it||Ct)+"",xt?xe.resolveWith(Ce,[Wt,Ct,Le]):xe.rejectWith(Ce,[Le,Ct,Bt]),Le.statusCode(ze),ze=void 0,ue&&Oe.trigger(xt?"ajaxSuccess":"ajaxError",[Le,pe,xt?Wt:Bt]),Ge.fireWith(Ce,[Le,Ct]),ue&&(Oe.trigger("ajaxComplete",[Le,pe]),--X.active||X.event.trigger("ajaxStop")))}return Le},getJSON:function(q,W,K){return X.get(q,W,K,"json")},getScript:function(q,W){return X.get(q,void 0,W,"script")}}),X.each(["get","post"],function(q,W){X[W]=function(K,J,ee,te){return X.isFunction(J)&&(te=te||ee,ee=J,J=void 0),X.ajax(X.extend({url:K,type:W,dataType:te,data:J,success:ee},X.isPlainObject(K)&&K))}}),X._evalUrl=function(q){return X.ajax({url:q,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},X.fn.extend({wrapAll:function(q){var W;return X.isFunction(q)?this.each(function(K){X(this).wrapAll(q.call(this,K))}):(this[0]&&(W=X(q,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&W.insertBefore(this[0]),W.map(function(){for(var K=this;K.firstElementChild;)K=K.firstElementChild;return K}).append(this)),this)},wrapInner:function(q){return X.isFunction(q)?this.each(function(W){X(this).wrapInner(q.call(this,W))}):this.each(function(){var W=X(this),K=W.contents();K.length?K.wrapAll(q):W.append(q)})},wrap:function(q){var W=X.isFunction(q);return this.each(function(K){X(this).wrapAll(W?q.call(this,K):q)})},unwrap:function(){return this.parent().each(function(){X.nodeName(this,"body")||X(this).replaceWith(this.childNodes)}).end()}}),X.expr.filters.hidden=function(q){return!X.expr.filters.visible(q)},X.expr.filters.visible=function(q){return q.offsetWidth>0||q.offsetHeight>0||q.getClientRects().length>0};var ri=/%20/g,ni=/\[\]$/,yn=/\r?\n/g,ii=/^(?:submit|button|image|reset|file)$/i,oi=/^(?:input|select|textarea|keygen)/i;function Rr(q,W,K,J){var ee;if(X.isArray(W))X.each(W,function(te,re){K||ni.test(q)?J(q,re):Rr(q+"["+(typeof re=="object"&&re!=null?te:"")+"]",re,K,J)});else if(!K&&X.type(W)==="object")for(ee in W)Rr(q+"["+ee+"]",W[ee],K,J);else J(q,W)}X.param=function(q,W){var K,J=[],ee=function(te,re){re=X.isFunction(re)?re():re??"",J[J.length]=encodeURIComponent(te)+"="+encodeURIComponent(re)};if(W===void 0&&(W=X.ajaxSettings&&X.ajaxSettings.traditional),X.isArray(q)||q.jquery&&!X.isPlainObject(q))X.each(q,function(){ee(this.name,this.value)});else for(K in q)Rr(K,q[K],W,ee);return J.join("&").replace(ri,"+")},X.fn.extend({serialize:function(){return X.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var q=X.prop(this,"elements");return q?X.makeArray(q):this}).filter(function(){var q=this.type;return this.name&&!X(this).is(":disabled")&&oi.test(this.nodeName)&&!ii.test(q)&&(this.checked||!hr.test(q))}).map(function(q,W){var K=X(this).val();return K==null?null:X.isArray(K)?X.map(K,function(J){return{name:W.name,value:J.replace(yn,`\r
`)}}):{name:W.name,value:K.replace(yn,`\r
`)}}).get()}}),X.ajaxSettings.xhr=function(){try{return new O.XMLHttpRequest}catch{}};var ai={0:200,1223:204},lr=X.ajaxSettings.xhr();fe.cors=!!lr&&"withCredentials"in lr,fe.ajax=lr=!!lr,X.ajaxTransport(function(q){var W,K;if(fe.cors||lr&&!q.crossDomain)return{send:function(J,ee){var te,re=q.xhr();if(re.open(q.type,q.url,q.async,q.username,q.password),q.xhrFields)for(te in q.xhrFields)re[te]=q.xhrFields[te];q.mimeType&&re.overrideMimeType&&re.overrideMimeType(q.mimeType),!q.crossDomain&&!J["X-Requested-With"]&&(J["X-Requested-With"]="XMLHttpRequest");for(te in J)re.setRequestHeader(te,J[te]);W=function(ae){return function(){W&&(W=K=re.onload=re.onerror=re.onabort=re.onreadystatechange=null,ae==="abort"?re.abort():ae==="error"?typeof re.status!="number"?ee(0,"error"):ee(re.status,re.statusText):ee(ai[re.status]||re.status,re.statusText,(re.responseType||"text")!=="text"||typeof re.responseText!="string"?{binary:re.response}:{text:re.responseText},re.getAllResponseHeaders()))}},re.onload=W(),K=re.onerror=W("error"),re.onabort!==void 0?re.onabort=K:re.onreadystatechange=function(){re.readyState===4&&O.setTimeout(function(){W&&K()})},W=W("abort");try{re.send(q.hasContent&&q.data||null)}catch(ae){if(W)throw ae}},abort:function(){W&&W()}}}),X.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(q){return X.globalEval(q),q}}}),X.ajaxPrefilter("script",function(q){q.cache===void 0&&(q.cache=!1),q.crossDomain&&(q.type="GET")}),X.ajaxTransport("script",function(q){if(q.crossDomain){var W,K;return{send:function(J,ee){W=X("<script>").prop({charset:q.scriptCharset,src:q.url}).on("load error",K=function(te){W.remove(),K=null,te&&ee(te.type==="error"?404:200,te.type)}),z.head.appendChild(W[0])},abort:function(){K&&K()}}}});var $n=[],Hr=/(=)\?(?=&|$)|\?\?/;X.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var q=$n.pop()||X.expando+"_"+Lr++;return this[q]=!0,q}}),X.ajaxPrefilter("json jsonp",function(q,W,K){var J,ee,te,re=q.jsonp!==!1&&(Hr.test(q.url)?"url":typeof q.data=="string"&&(q.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Hr.test(q.data)&&"data");if(re||q.dataTypes[0]==="jsonp")return J=q.jsonpCallback=X.isFunction(q.jsonpCallback)?q.jsonpCallback():q.jsonpCallback,re?q[re]=q[re].replace(Hr,"$1"+J):q.jsonp!==!1&&(q.url+=(Mr.test(q.url)?"&":"?")+q.jsonp+"="+J),q.converters["script json"]=function(){return te||X.error(J+" was not called"),te[0]},q.dataTypes[0]="json",ee=O[J],O[J]=function(){te=arguments},K.always(function(){ee===void 0?X(O).removeProp(J):O[J]=ee,q[J]&&(q.jsonpCallback=W.jsonpCallback,$n.push(J)),te&&X.isFunction(ee)&&ee(te[0]),te=ee=void 0}),"script"}),X.parseHTML=function(q,W,K){if(!q||typeof q!="string")return null;typeof W=="boolean"&&(K=W,W=!1),W=W||z;var J=Ie.exec(q),ee=!K&&[];return J?[W.createElement(J[1])]:(J=qt([q],W,ee),ee&&ee.length&&X(ee).remove(),X.merge([],J.childNodes))};var xn=X.fn.load;X.fn.load=function(q,W,K){if(typeof q!="string"&&xn)return xn.apply(this,arguments);var J,ee,te,re=this,ae=q.indexOf(" ");return ae>-1&&(J=X.trim(q.slice(ae)),q=q.slice(0,ae)),X.isFunction(W)?(K=W,W=void 0):W&&typeof W=="object"&&(ee="POST"),re.length>0&&X.ajax({url:q,type:ee||"GET",dataType:"html",data:W}).done(function(ue){te=arguments,re.html(J?X("<div>").append(X.parseHTML(ue)).find(J):ue)}).always(K&&function(ue,ge){re.each(function(){K.apply(this,te||[ue.responseText,ge,ue])})}),this},X.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(q,W){X.fn[W]=function(K){return this.on(W,K)}}),X.expr.filters.animated=function(q){return X.grep(X.timers,function(W){return q===W.elem}).length};function Cn(q){return X.isWindow(q)?q:q.nodeType===9&&q.defaultView}X.offset={setOffset:function(q,W,K){var J,ee,te,re,ae,ue,ge,pe=X.css(q,"position"),Ce=X(q),Oe={};pe==="static"&&(q.style.position="relative"),ae=Ce.offset(),te=X.css(q,"top"),ue=X.css(q,"left"),ge=(pe==="absolute"||pe==="fixed")&&(te+ue).indexOf("auto")>-1,ge?(J=Ce.position(),re=J.top,ee=J.left):(re=parseFloat(te)||0,ee=parseFloat(ue)||0),X.isFunction(W)&&(W=W.call(q,K,X.extend({},ae))),W.top!=null&&(Oe.top=W.top-ae.top+re),W.left!=null&&(Oe.left=W.left-ae.left+ee),"using"in W?W.using.call(q,Oe):Ce.css(Oe)}},X.fn.extend({offset:function(q){if(arguments.length)return q===void 0?this:this.each(function(re){X.offset.setOffset(this,q,re)});var W,K,J=this[0],ee={top:0,left:0},te=J&&J.ownerDocument;if(te)return W=te.documentElement,X.contains(W,J)?(ee=J.getBoundingClientRect(),K=Cn(te),{top:ee.top+K.pageYOffset-W.clientTop,left:ee.left+K.pageXOffset-W.clientLeft}):ee},position:function(){if(this[0]){var q,W,K=this[0],J={top:0,left:0};return X.css(K,"position")==="fixed"?W=K.getBoundingClientRect():(q=this.offsetParent(),W=this.offset(),X.nodeName(q[0],"html")||(J=q.offset()),J.top+=X.css(q[0],"borderTopWidth",!0),J.left+=X.css(q[0],"borderLeftWidth",!0)),{top:W.top-J.top-X.css(K,"marginTop",!0),left:W.left-J.left-X.css(K,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var q=this.offsetParent;q&&X.css(q,"position")==="static";)q=q.offsetParent;return q||ar})}}),X.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(q,W){var K=W==="pageYOffset";X.fn[q]=function(J){return st(this,function(ee,te,re){var ae=Cn(ee);if(re===void 0)return ae?ae[W]:ee[te];ae?ae.scrollTo(K?ae.pageXOffset:re,K?re:ae.pageYOffset):ee[te]=re},q,J,arguments.length)}}),X.each(["top","left"],function(q,W){X.cssHooks[W]=Tr(fe.pixelPosition,function(K,J){if(J)return J=er(K,W),Or.test(J)?X(K).position()[W]+"px":J})}),X.each({Height:"height",Width:"width"},function(q,W){X.each({padding:"inner"+q,content:W,"":"outer"+q},function(K,J){X.fn[J]=function(ee,te){var re=arguments.length&&(K||typeof ee!="boolean"),ae=K||(ee===!0||te===!0?"margin":"border");return st(this,function(ue,ge,pe){var Ce;return X.isWindow(ue)?ue.document.documentElement["client"+q]:ue.nodeType===9?(Ce=ue.documentElement,Math.max(ue.body["scroll"+q],Ce["scroll"+q],ue.body["offset"+q],Ce["offset"+q],Ce["client"+q])):pe===void 0?X.css(ue,ge,ae):X.style(ue,ge,pe,ae)},W,re?ee:void 0,re,null)}})}),X.fn.extend({bind:function(q,W,K){return this.on(q,null,W,K)},unbind:function(q,W){return this.off(q,null,W)},delegate:function(q,W,K,J){return this.on(W,q,K,J)},undelegate:function(q,W,K){return arguments.length===1?this.off(q,"**"):this.off(W,q||"**",K)},size:function(){return this.length}}),X.fn.andSelf=X.fn.addBack;var si=O.jQuery,ci=O.$;return X.noConflict=function(q){return O.$===X&&(O.$=ci),q&&O.jQuery===X&&(O.jQuery=si),X},B||(O.jQuery=O.$=X),X})})(jquery$1);var jqueryExports=jquery$1.exports;/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var glbl=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:commonjsGlobal,can$L={};(typeof GLOBALCAN>"u"||GLOBALCAN!==!1)&&(glbl.can=can$L),can$L.global=glbl,can$L.k=function(){},can$L.isDeferred=function(D){return can$L.dev&&can$L.dev.warn("can.isDeferred: this function is deprecated and will be removed in a future release. can.isPromise replaces the functionality of can.isDeferred."),D&&typeof D.then=="function"&&typeof D.pipe=="function"},can$L.isPromise=function(D){return!!D&&(window.Promise&&D instanceof Promise||can$L.isFunction(D.then)&&(can$L.List===void 0||!(D instanceof can$L.List)))},can$L.isMapLike=function(D){return can$L.Map&&(D instanceof can$L.Map||D&&D.___get)};var cid=0;can$L.cid=function(D,O){return D._cid||(cid++,D._cid=(O||"")+cid),D._cid},can$L.VERSION="2.3.34",can$L.simpleExtend=function(D,O){for(var B in O)D[B]=O[B];return D},can$L.last=function(D){return D&&D[D.length-1]},can$L.isDOM=function(D){return(D.ownerDocument||D)===can$L.global.document},can$L.childNodes=function(D){var O=D.childNodes;if("length"in O)return O;for(var B=D.firstChild,F=[];B;)F.push(B),B=B.nextSibling;return F};var protoBind=Function.prototype.bind;protoBind?can$L.proxy=function(D,O){return protoBind.call(D,O)}:can$L.proxy=function(D,O){return function(){return D.apply(O,arguments)}},can$L.frag=function(D,O){var B=O||can$L.document||can$L.global.document,F;return!D||typeof D=="string"?(F=can$L.buildFragment(D==null?"":""+D,B),F.childNodes.length||F.appendChild(B.createTextNode("")),F):D.nodeType===11?D:typeof D.nodeType=="number"?(F=B.createDocumentFragment(),F.appendChild(D),F):typeof D.length=="number"?(F=B.createDocumentFragment(),can$L.each(D,function(z){F.appendChild(can$L.frag(z))}),can$L.childNodes(F).length||F.appendChild(B.createTextNode("")),F):(F=can$L.buildFragment(""+D,B),can$L.childNodes(F).length||F.appendChild(B.createTextNode("")),F)},can$L.scope=can$L.viewModel=function(D,O,B){D=can$L.$(D);var F=can$L.data(D,"scope")||can$L.data(D,"viewModel");switch(F||(F=new can$L.Map,can$L.data(D,"scope",F),can$L.data(D,"viewModel",F)),arguments.length){case 0:case 1:return F;case 2:return F.attr(O);default:return F.attr(O,B),D}};var parseURI=function(D){var O=String(D).replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);return O?{href:O[0]||"",protocol:O[1]||"",authority:O[2]||"",host:O[3]||"",hostname:O[4]||"",port:O[5]||"",pathname:O[6]||"",search:O[7]||"",hash:O[8]||""}:null};can$L.joinURIs=function(D,O){function B(F){var z=[];return F.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(G){G==="/.."?z.pop():z.push(G)}),z.join("").replace(/^\//,F.charAt(0)==="/"?"/":"")}return O=parseURI(O||""),D=parseURI(D||""),!O||!D?null:(O.protocol||D.protocol)+(O.protocol||O.authority?O.authority:D.authority)+B(O.protocol||O.authority||O.pathname.charAt(0)==="/"?O.pathname:O.pathname?(D.authority&&!D.pathname?"/":"")+D.pathname.slice(0,D.pathname.lastIndexOf("/")+1)+O.pathname:D.pathname)+(O.protocol||O.authority||O.pathname?O.search:O.search||D.search)+O.hash},can$L.import=function(D,O){var B=new can$L.Deferred;return typeof window.System=="object"&&can$L.isFunction(window.System.import)?window.System.import(D,{name:O}).then(can$L.proxy(B.resolve,B),can$L.proxy(B.reject,B)):window.define&&window.define.amd?window.require([D],function(F){B.resolve(F)}):window.steal?steal.steal(D,function(F){B.resolve(F)}):window.require?B.resolve(window.require(D)):B.resolve(),B.promise()},can$L.__observe=function(){},can$L.isNode=typeof process=="object"&&{}.toString.call(process)==="[object process]",can$L.isBrowserWindow=typeof window<"u"&&typeof document<"u"&&typeof SimpleDOM>"u",can$L.isWebWorker=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope;var can_1$1=can$L;/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$K=can_1$1,namespaces={xlink:"http://www.w3.org/1999/xlink"},setImmediate=can$K.global.setImmediate||function(D){return setTimeout(D,0)},formElements={input:!0,textarea:!0,select:!0},hasProperty=function(D,O){return O in D||can$K.document&&formElements[D.nodeName.toLowerCase()]},attr$2={MutationObserver:can$K.global.MutationObserver||can$K.global.WebKitMutationObserver||can$K.global.MozMutationObserver,map:{class:function(D,O){return O=O||"",D.namespaceURI==="http://www.w3.org/2000/svg"?D.setAttribute("class",O):D.className=O,O},value:"value",innertext:"innerText",innerhtml:"innerHTML",textcontent:"textContent",for:"htmlFor",checked:!0,disabled:!0,readonly:function(D,O){return D.readOnly=!!(O||typeof O=="string"),O},required:!0,src:function(D,O){return O==null||O===""?(D.removeAttribute("src"),null):(D.setAttribute("src",O),O)},style:function(){var D=can$K.global.document&&document.createElement("div");return D&&D.style&&"cssText"in D.style?function(O,B){return O.style.cssText=B||""}:function(O,B){return O.setAttribute("style",B)}}()},defaultValue:["input","textarea"],setAttrOrProp:function(D,O,B){O=O.toLowerCase();var F=attr$2.map[O];F===!0&&!B?this.remove(D,O):this.set(D,O,B)},setSelectValue:function(D,O){if(O!=null){for(var B=D.getElementsByTagName("option"),F=0;F<B.length;F++)if(O==B[F].value){B[F].selected=!0;return}}D.selectedIndex=-1},set:function(D,O,B){var F=can$K.isDOM(D)&&attr$2.MutationObserver;O=O.toLowerCase();var z;F||(z=attr$2.get(D,O));var G=attr$2.map[O],U;typeof G=="function"?U=G(D,B):G===!0&&hasProperty(D,O)?(U=D[O]=!0,O==="checked"&&D.type==="radio"&&can$K.inArray((D.nodeName+"").toLowerCase(),attr$2.defaultValue)>=0&&(D.defaultChecked=!0)):typeof G=="string"&&hasProperty(D,G)?(U=B,(D[G]!==B||D.nodeName.toUpperCase()==="OPTION")&&(D[G]=B),G==="value"&&can$K.inArray((D.nodeName+"").toLowerCase(),attr$2.defaultValue)>=0&&(D.defaultValue=B)):attr$2.setAttribute(D,O,B),!F&&U!==z&&attr$2.trigger(D,O,z)},setAttribute:function(){var D=can$K.global.document;if(D&&document.createAttribute)try{D.createAttribute("{}")}catch{var O={},B=document.createElement("div");return function(z,G,U){var Y=G.charAt(0),Q,ne,oe;(Y==="{"||Y==="("||Y==="*")&&z.setAttributeNode?(Q=O[G],Q||(B.innerHTML="<div "+G+'=""></div>',Q=O[G]=B.childNodes[0].attributes[0]),ne=Q.cloneNode(),ne.value=U,z.setAttributeNode(ne)):(oe=G.split(":"),oe.length!==1?z.setAttributeNS(namespaces[oe[0]],G,U):z.setAttribute(G,U))}}return function(F,z,G){F.setAttribute(z,G)}}(),trigger:function(D,O,B){if(can$K.data(can$K.$(D),"canHasAttributesBindings"))return O=O.toLowerCase(),setImmediate(function(){can$K.trigger(D,{type:"attributes",attributeName:O,target:D,oldValue:B,bubbles:!1},[])})},get:function(D,O){O=O.toLowerCase();var B=attr$2.map[O];return typeof B=="string"&&hasProperty(D,B)?D[B]:B===!0&&hasProperty(D,O)?D[O]:D.getAttribute(O)},remove:function(D,O){O=O.toLowerCase();var B;attr$2.MutationObserver||(B=attr$2.get(D,O));var F=attr$2.map[O];typeof F=="function"&&F(D,void 0),F===!0&&hasProperty(D,O)?D[O]=!1:typeof F=="string"&&hasProperty(D,F)?D[F]="":D.removeAttribute(O),!attr$2.MutationObserver&&B!=null&&attr$2.trigger(D,O,B)},has:function(){var D=can$K.global.document&&document.createElement("div");return D&&D.hasAttribute?function(O,B){return O.hasAttribute(B)}:function(O,B){return O.getAttribute(B)!==null}}()},attr_1=attr$2;/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$J=can_1$1;can$J.addEvent=function(D,O){var B=this.__bindEvents||(this.__bindEvents={}),F=B[D]||(B[D]=[]);return F.push({handler:O,name:D}),this},can$J.listenTo=function(D,O,B){var F=this.__listenToEvents;F||(F=this.__listenToEvents={});var z=can$J.cid(D),G=F[z];G||(G=F[z]={obj:D,events:{}});var U=G.events[O];U||(U=G.events[O]=[]),U.push(B),can$J.bind.call(D,O,B)},can$J.stopListening=function(D,O,B){var F=this.__listenToEvents,z=F,G=0;if(!F)return this;if(D){var U=can$J.cid(D);if((z={})[U]=F[U],!F[U])return this}for(var Y in z){var Q=z[Y],ne;D=F[Y].obj,O?(ne={})[O]=Q.events[O]:ne=Q.events;for(var oe in ne){var ce=ne[oe]||[];for(G=0;G<ce.length;)B&&B===ce[G]||!B?(can$J.unbind.call(D,oe,ce[G]),ce.splice(G,1)):G++;ce.length||delete Q.events[oe]}can$J.isEmptyObject(Q.events)&&delete F[Y]}return this},can$J.removeEvent=function(D,O,B){if(!this.__bindEvents)return this;for(var F=this.__bindEvents[D]||[],z=0,G,U=typeof O=="function";z<F.length;)G=F[z],(B?B(G,D,O):U&&G.handler===O||!U&&(G.cid===O||!O))?F.splice(z,1):z++;return this},can$J.dispatch=function(D,O){var B=this.__bindEvents;if(B){var F;typeof D=="string"?(F=D,D={type:D}):F=D.type;var z=B[F];if(z)z=z.slice(0);else return;var G=[D];O&&G.push.apply(G,O);for(var U=0,Y=z.length;U<Y;U++)z[U].handler.apply(this,G);return D}},can$J.one=function(D,O){var B=function(){return can$J.unbind.call(this,D,B),O.apply(this,arguments)};return can$J.bind.call(this,D,B),this},can$J.event={on:function(){return arguments.length===0&&can$J.Control&&this instanceof can$J.Control?can$J.Control.prototype.on.call(this):can$J.addEvent.apply(this,arguments)},off:function(){return arguments.length===0&&can$J.Control&&this instanceof can$J.Control?can$J.Control.prototype.off.call(this):can$J.removeEvent.apply(this,arguments)},bind:can$J.addEvent,unbind:can$J.removeEvent,delegate:function(D,O,B){return can$J.addEvent.call(this,O,B)},undelegate:function(D,O,B){return can$J.removeEvent.call(this,O,B)},trigger:can$J.dispatch,one:can$J.one,addEvent:can$J.addEvent,removeEvent:can$J.removeEvent,listenTo:can$J.listenTo,stopListening:can$J.stopListening,dispatch:can$J.dispatch},can$J.event;/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$I=can_1$1,fragmentRE=/^\s*<(\w+)[^>]*>/,toString={}.toString,fragment=function(D,O,B){O===void 0&&(O=fragmentRE.test(D)&&RegExp.$1),D&&toString.call(D.replace)==="[object Function]"&&(D=D.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,"<$1></$2>"));var F=B.createElement("div"),z=B.createElement("div");O==="tbody"||O==="tfoot"||O==="thead"||O==="colgroup"?(z.innerHTML="<table>"+D+"</table>",F=z.firstChild.nodeType===3?z.lastChild:z.firstChild):O==="col"?(z.innerHTML="<table><colgroup>"+D+"</colgroup></table>",F=z.firstChild.nodeType===3?z.lastChild:z.firstChild.firstChild):O==="tr"?(z.innerHTML="<table><tbody>"+D+"</tbody></table>",F=z.firstChild.nodeType===3?z.lastChild:z.firstChild.firstChild):O==="td"||O==="th"?(z.innerHTML="<table><tbody><tr>"+D+"</tr></tbody></table>",F=z.firstChild.nodeType===3?z.lastChild:z.firstChild.firstChild.firstChild):O==="option"?(z.innerHTML="<select>"+D+"</select>",F=z.firstChild.nodeType===3?z.lastChild:z.firstChild):F.innerHTML=""+D;var G={},U=can$I.childNodes(F);G.length=U.length;for(var Y=0;Y<U.length;Y++)G[Y]=U[Y];return[].slice.call(G)};can$I.buildFragment=function(D,O){if(D&&D.nodeType===11)return D;O?O.length&&(O=O[0]):O=document;for(var B=fragment(D,void 0,O),F=(O||document).createDocumentFragment(),z=0,G=B.length;z<G;z++)F.appendChild(B[z]);return F},function(){var D=`<-
>`,O=can$I.buildFragment(D,document);if(D!==O.firstChild.nodeValue){var B=can$I.buildFragment;can$I.buildFragment=function(F,z){var G=B(F,z);return G.childNodes.length===1&&G.childNodes[0].nodeType===3&&(G.childNodes[0].nodeValue=F),G}}}();/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$H=can_1$1;can$H.isArrayLike=function(D){var O=D&&typeof D!="boolean"&&typeof D!="number"&&"length"in D&&D.length;return typeof arr!="function"&&(O===0||typeof O=="number"&&O>0&&O-1 in D)};/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$G=can_1$1;can$G.each=function(D,O,B){var F=0,z,G,U;if(D){if(can$G.isArrayLike(D))if(can$G.List&&D instanceof can$G.List)for(G=D.attr("length");F<G&&(U=D.attr(F),O.call(B||U,U,F,D)!==!1);F++);else for(G=D.length;F<G&&(U=D[F],O.call(B||U,U,F,D)!==!1);F++);else if(typeof D=="object"){if(can$G.Map&&D instanceof can$G.Map||D===can$G.route){var Y=can$G.Map.keys(D);for(F=0,G=Y.length;F<G&&(z=Y[F],U=D.attr(z),O.call(B||U,U,z,D)!==!1);F++);}else for(z in D)if(Object.prototype.hasOwnProperty.call(D,z)&&O.call(B||D[z],D[z],z,D)===!1)break}}return D};/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$F=can_1$1;can$F.inserted=function(D,O){if(D.length){D=can$F.makeArray(D);for(var B=O||D[0].ownerDocument||D[0],F=!1,z=can$F.$(B.contains?B:B.body),G,U=0,Y;(Y=D[U])!==void 0;U++){if(!F)if(Y.getElementsByTagName)if(can$F.has(z,Y).length)F=!0;else return;else continue;if(F&&Y.getElementsByTagName){G=can$F.makeArray(Y.getElementsByTagName("*")),can$F.trigger(Y,"inserted",[],!1);for(var Q=0,ne;(ne=G[Q])!==void 0;Q++)can$F.trigger(ne,"inserted",[],!1)}}}},can$F.appendChild=function(D,O,B){var F;O.nodeType===11?F=can$F.makeArray(can$F.childNodes(O)):F=[O],D.appendChild(O),can$F.inserted(F,B)},can$F.insertBefore=function(D,O,B,F){var z;O.nodeType===11?z=can$F.makeArray(can$F.childNodes(O)):z=[O],D.insertBefore(O,B),can$F.inserted(z,F)};/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var $$2=jqueryExports,can$E=can_1$1,attr$1=attr_1,isBindableElement=function(D){return D.nodeName&&(D.nodeType===1||D.nodeType===9)||D==window||D.addEventListener};$$2=$$2||window.jQuery,$$2.extend(can$E,$$2,{trigger:function(D,O,B,F){isBindableElement(D)?$$2.event.trigger(O,B,D,!F):D.trigger?D.trigger(O,B):(typeof O=="string"&&(O={type:O}),O.target=O.target||D,B&&(B.length&&typeof B=="string"?B=[B]:B.length||(B=[B])),B||(B=[]),can$E.dispatch.call(D,O,B))},event:can$E.event,addEvent:can$E.addEvent,removeEvent:can$E.removeEvent,buildFragment:can$E.buildFragment,$:$$2,each:can$E.each,bind:function(D,O){if(this.nodeType!==11)return this.bind&&this.bind!==can$E.bind?this.bind(D,O):isBindableElement(this)?$$2.event.add(this,D,O):can$E.addEvent.call(this,D,O),this},unbind:function(D,O){if(this.nodeType!==11)return this.unbind&&this.unbind!==can$E.unbind?this.unbind(D,O):isBindableElement(this)?$$2.event.remove(this,D,O):can$E.removeEvent.call(this,D,O),this},delegate:function(D,O,B){return this.delegate?this.delegate(D,O,B):isBindableElement(this)?$$2(this).delegate(D,O,B):can$E.bind.call(this,O,B),this},undelegate:function(D,O,B){return this.undelegate?this.undelegate(D,O,B):isBindableElement(this)?$$2(this).undelegate(D,O,B):can$E.unbind.call(this,O,B),this},proxy:can$E.proxy,attr:attr$1}),can$E.on=can$E.bind,can$E.off=can$E.unbind,$$2.each(["append","filter","addClass","remove","data","get","has"],function(D,O){can$E[O]=function(B){return B[O].apply(B,can$E.makeArray(arguments).slice(1))}});var oldClean=$$2.cleanData;$$2.cleanData=function(D){$$2.each(D,function(O,B){B&&can$E.trigger(B,"removed",[],!1)}),oldClean(D)};var oldDomManip=$$2.fn.domManip,cbIndex;$$2.fn.domManip=function(D,O,B){for(var F=1;F<arguments.length;F++)if(typeof arguments[F]=="function"){cbIndex=F;break}return oldDomManip.apply(this,arguments)},$$2(document.createElement("div")).append(document.createElement("div"));var getChildNodes$1=function(D){var O=D.childNodes;if("length"in O)return can$E.makeArray(O);for(var B=D.firstChild,F=[];B;)F.push(B),B=B.nextSibling;return F};cbIndex===void 0?($$2.fn.domManip=oldDomManip,can$E.each(["after","prepend","before","append","replaceWith"],function(D){var O=$$2.fn[D];$$2.fn[D]=function(){var B=[],F=can$E.makeArray(arguments);F[0]!=null&&(typeof F[0]=="string"&&(F[0]=can$E.buildFragment(F[0])),F[0].nodeType===11?B=getChildNodes$1(F[0]):can$E.isArrayLike(F[0])?B=can$E.makeArray(F[0]):B=[F[0]]);var z=O.apply(this,F);return can$E.inserted(B),z}})):$$2.fn.domManip=cbIndex===2?function(D,O,B){return oldDomManip.call(this,D,O,function(F){var z;F.nodeType===11&&(z=can$E.makeArray(can$E.childNodes(F)));var G=B.apply(this,arguments);return can$E.inserted(z||[F]),G})}:function(D,O){return oldDomManip.call(this,D,function(B){var F;B.nodeType===11&&(F=can$E.makeArray(can$E.childNodes(B)));var z=O.apply(this,arguments);return can$E.inserted(F||[B]),z})};var oldAttr=$$2.attr;$$2.attr=function(D,O){if(can$E.isDOM(D)&&can$E.attr.MutationObserver)return oldAttr.apply(this,arguments);var B,F;arguments.length>=3&&(B=oldAttr.call(this,D,O));var z=oldAttr.apply(this,arguments);return arguments.length>=3&&(F=oldAttr.call(this,D,O)),F!==B&&can$E.attr.trigger(D,O,B),z};var oldRemove$1=$$2.removeAttr;$$2.removeAttr=function(D,O){if(can$E.isDOM(D)&&can$E.attr.MutationObserver)return oldRemove$1.apply(this,arguments);var B=oldAttr.call(this,D,O),F=oldRemove$1.apply(this,arguments);return B!=null&&can$E.attr.trigger(D,O,B),F},$$2.event.special.attributes={setup:function(){if(can$E.isDOM(this)&&can$E.attr.MutationObserver){var D=this,O=new can$E.attr.MutationObserver(function(B){B.forEach(function(F){var z=can$E.simpleExtend({},F);can$E.trigger(D,z,[])})});O.observe(this,{attributes:!0,attributeOldValue:!0}),can$E.data(can$E.$(this),"canAttributesObserver",O)}else can$E.data(can$E.$(this),"canHasAttributesBindings",!0)},teardown:function(){can$E.isDOM(this)&&can$E.attr.MutationObserver?(can$E.data(can$E.$(this),"canAttributesObserver").disconnect(),$$2.removeData(this,"canAttributesObserver")):$$2.removeData(this,"canHasAttributesBindings")}},$$2.event.special.inserted={},$$2.event.special.removed={};var jquery=can$E;/*!
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
 */var can$C=util;can$C.bindAndSetup=function(){return can$C.addEvent.apply(this,arguments),this.__inSetup||(this._bindings?this._bindings++:(this._bindings=1,this._bindsetup&&this._bindsetup())),this},can$C.unbindAndTeardown=function(D,O){if(!this.__bindEvents)return this;var B=this.__bindEvents[D]||[],F=B.length;return can$C.removeEvent.apply(this,arguments),this._bindings===null?this._bindings=0:this._bindings=this._bindings-(F-B.length),!this._bindings&&this._bindteardown&&this._bindteardown(),this};/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$B=util,bubble$2=can$B.bubble={bind:function(D,O){if(!D.__inSetup){var B=bubble$2.events(D,O),F=B.length,z;D._bubbleBindings||(D._bubbleBindings={});for(var G=0;G<F;G++)z=B[G],D._bubbleBindings[z]?D._bubbleBindings[z]++:(D._bubbleBindings[z]=1,bubble$2.childrenOf(D,z))}},unbind:function(D,O){for(var B=bubble$2.events(D,O),F=B.length,z,G=0;G<F;G++)z=B[G],D._bubbleBindings&&D._bubbleBindings[z]--,D._bubbleBindings&&!D._bubbleBindings[z]&&(delete D._bubbleBindings[z],bubble$2.teardownChildrenFrom(D,z),can$B.isEmptyObject(D._bubbleBindings)&&delete D._bubbleBindings)},add:function(D,O,B){if(O instanceof can$B.Map&&D._bubbleBindings)for(var F in D._bubbleBindings)D._bubbleBindings[F]&&(bubble$2.teardownFromParent(D,O,F),bubble$2.toParent(O,D,B,F))},addMany:function(D,O){for(var B=0,F=O.length;B<F;B++)bubble$2.add(D,O[B],B)},remove:function(D,O){if(O instanceof can$B.Map&&D._bubbleBindings)for(var B in D._bubbleBindings)D._bubbleBindings[B]&&bubble$2.teardownFromParent(D,O,B)},removeMany:function(D,O){for(var B=0,F=O.length;B<F;B++)bubble$2.remove(D,O[B])},set:function(D,O,B,F){return can$B.isMapLike(B)&&bubble$2.add(D,B,O),can$B.isMapLike(F)&&bubble$2.remove(D,F),B},events:function(D,O){return D.constructor._bubbleRule(O,D)},toParent:function(D,O,B,F){can$B.listenTo.call(O,D,F,function(){var z=can$B.makeArray(arguments),G=z.shift();z[0]=(can$B.List&&O instanceof can$B.List?O.indexOf(D):B)+(z[0]?"."+z[0]:""),G.triggeredNS=G.triggeredNS||{},!G.triggeredNS[O._cid]&&(G.triggeredNS[O._cid]=!0,can$B.trigger(O,G,z),F==="change"&&can$B.trigger(O,z[0],[z[2],z[3]]))})},childrenOf:function(D,O){D._each(function(B,F){B&&B.bind&&bubble$2.toParent(B,D,F,O)})},teardownFromParent:function(D,O,B){O&&O.unbind&&can$B.stopListening.call(D,O,B)},teardownChildrenFrom:function(D,O){D._each(function(B){bubble$2.teardownFromParent(D,B,O)})},isBubbling:function(D,O){return D._bubbleBindings&&D._bubbleBindings[O]}},bubble_1=bubble$2;/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$A=can_1$1,core_hasOwn=Object.prototype.hasOwnProperty,isWindow=function(D){return D!==null&&D==D.window},isPlainObject=function(D){if(!D||typeof D!="object"||D.nodeType||isWindow(D))return!1;try{if(D.constructor&&!core_hasOwn.call(D,"constructor")&&!core_hasOwn.call(D.constructor.prototype,"isPrototypeOf"))return!1}catch{return!1}var O;for(O in D);return O===void 0||core_hasOwn.call(D,O)};can$A.isPlainObject=isPlainObject;/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$z=util,mapHelpers$3={attrParts:function(D,O){return O?[D]:typeof D=="object"?D:(""+D).split(".")},canMakeObserve:function(D){return D&&!can$z.isPromise(D)&&(can$z.isArray(D)||can$z.isPlainObject(D))},serialize:function(){var D=null;return function(O,B,F){var z=can$z.cid(O),G=!1;return D||(G=!0,D={attr:{},serialize:{}}),D[B][z]=F,O.each(function(U,Y){var Q,ne=can$z.isMapLike(U),oe=ne&&D[B][can$z.cid(U)];oe?Q=oe:O["___"+B]?Q=O["___"+B](Y,U):Q=mapHelpers$3.getValue(O,Y,U,B),Q!==void 0&&(F[Y]=Q)}),G&&(D=null),F}}(),getValue:function(D,O,B,F){return can$z.isMapLike(B)?B[F]():B},define:null,addComputedAttr:function(D,O,B){D._computedAttrs[O]={compute:B,count:0,handler:function(F,z,G){D._triggerChange(O,"set",z,G,F.batchNum)}}},addToMap:function(O,B){var F;madeMap||(F=teardownMap,madeMap={});var z=O._cid,G=can$z.cid(O);return madeMap[G]||(madeMap[G]={obj:O,instance:B,added:!z}),F},getMapFromObject:function(D){return madeMap&&madeMap[D._cid]&&madeMap[D._cid].instance},twoLevelDeepExtend:function(D,O){for(var B in O)D[B]=D[B]||{},can$z.simpleExtend(D[B],O[B])}},madeMap=null,teardownMap=function(){for(var D in madeMap)madeMap[D].added&&delete madeMap[D].obj._cid;madeMap=null},map_helpers=mapHelpers$3;/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$y=util,strUndHash=/_|-/,strColons=/\=\=/,strWords=/([A-Z]+)([A-Z][a-z])/g,strLowUp=/([a-z\d])([A-Z])/g,strDash=/([a-z\d])([A-Z])/g,strReplacer=/\{([^\}]+)\}/g,strQuote=/"/g,strSingleQuote=/'/g,strHyphenMatch=/-+(.)?/g,strCamelMatch=/[a-z][A-Z]/g,getNext=function(D,O,B){var F=D[O];return F===void 0&&B===!0&&(F=D[O]={}),F},isContainer=function(D){return/^f|^o/.test(typeof D)},convertBadValues=function(D){var O=D==null||isNaN(D)&&""+D=="NaN";return""+(O?"":D)};can$y.extend(can$y,{esc:function(D){return convertBadValues(D).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(strQuote,"&#34;").replace(strSingleQuote,"&#39;")},getObject:function(D,O,B){var F=D?D.split("."):[],z=F.length,G,U=0,Y,Q,ne;if(O=can$y.isArray(O)?O:[O||window],ne=O.length,!z)return O[0];for(U;U<ne;U++){for(G=O[U],Q=void 0,Y=0;Y<z&&isContainer(G);Y++)Q=G,G=getNext(Q,F[Y]);if(Q!==void 0&&G!==void 0)break}if(B===!1&&G!==void 0&&delete Q[F[Y-1]],B===!0&&G===void 0)for(G=O[0],Y=0;Y<z&&isContainer(G);Y++)G=getNext(G,F[Y],!0);return G},capitalize:function(D,O){return D.charAt(0).toUpperCase()+D.slice(1)},camelize:function(D){return convertBadValues(D).replace(strHyphenMatch,function(O,B){return B?B.toUpperCase():""})},hyphenate:function(D){return convertBadValues(D).replace(strCamelMatch,function(O,B){return O.charAt(0)+"-"+O.charAt(1).toLowerCase()})},underscore:function(D){return D.replace(strColons,"/").replace(strWords,"$1_$2").replace(strLowUp,"$1_$2").replace(strDash,"_").toLowerCase()},sub:function(D,O,B){var F=[];return D=D||"",F.push(D.replace(strReplacer,function(z,G){var U=can$y.getObject(G,O,B===!0?!1:void 0);return U==null?(F=null,""):isContainer(U)&&F?(F.push(U),""):""+U})),F===null?F:F.length<=1?F[0]:F},replacer:strReplacer,undHash:strUndHash});var string=can$y;/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$x=string,initializing=0,canGetDescriptor;try{Object.getOwnPropertyDescriptor({}),canGetDescriptor=!0}catch(D){canGetDescriptor=!1}var getDescriptor=function(D,O){var B=Object.getOwnPropertyDescriptor(D,O);return B&&(B.get||B.set)?B:null},inheritGetterSetter=function(D,O,B){B=B||D;var F;for(var z in D)(F=getDescriptor(D,z))?this._defineProperty(B,O,z,F):can$x.Construct._overwrite(B,O,z,D[z])},simpleInherit=function(D,O,B){B=B||D;for(var F in D)can$x.Construct._overwrite(B,O,F,D[F])};can$x.Construct=function(){if(arguments.length)return can$x.Construct.extend.apply(can$x.Construct,arguments)},can$x.extend(can$x.Construct,{constructorExtends:!0,newInstance:function(){var D=this.instance(),O;return D.setup&&(D.__inSetup=!0,O=D.setup.apply(D,arguments),delete D.__inSetup),D.init&&D.init.apply(D,O||arguments),D},_inherit:canGetDescriptor?inheritGetterSetter:simpleInherit,_defineProperty:function(D,O,B,F){Object.defineProperty(D,B,F)},_overwrite:function(D,O,B,F){D[B]=F},setup:function(D,O){this.defaults=can$x.extend(!0,{},D.defaults,this.defaults)},instance:function(){initializing=1;var D=new this;return initializing=0,D},extend:function(D,O,B){var F=D,z=O,G=B;typeof F!="string"&&(G=z,z=F,F=null),G||(G=z,z=null),G=G||{};var U=this,Y=this.prototype,Q,ne,oe,ce,fe,we,X,ve,de;de=this.instance(),can$x.Construct._inherit(G,Y,de),F?(ne=F.split("."),X=ne.pop()):z&&z.shortName?X=z.shortName:this.shortName&&(X=this.shortName),typeof constructorName>"u"&&(Q=function(){return Ae.apply(this,arguments)});function Ae(){if(!initializing)return this.constructor!==Q&&arguments.length&&Q.constructorExtends?Q.extend.apply(Q,arguments):Q.newInstance.apply(Q,arguments)}for(we in U)U.hasOwnProperty(we)&&(Q[we]=U[we]);can$x.Construct._inherit(z,U,Q),F&&(oe=can$x.getObject(ne.join("."),window,!0),ve=oe,ce=can$x.underscore(F.replace(/\./g,"_")),fe=can$x.underscore(X),oe[X]=Q),can$x.extend(Q,{constructor:Q,prototype:de,namespace:ve,_shortName:fe,fullName:F,_fullName:ce}),X!==void 0&&(Q.shortName=X),Q.prototype.constructor=Q;var Se=[U].concat(can$x.makeArray(arguments)),Pe=Q.setup.apply(Q,Se);return Q.init&&Q.init.apply(Q,Pe||Se),Q}}),can$x.Construct.prototype.setup=function(){},can$x.Construct.prototype.init=function(){},can$x.Construct;/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$w=can_1$1,batchNum=1,transactions=0,dispatchingBatch=null,collectingBatch=null,batches=[],dispatchingBatches=!1;can$w.batch={start:function(D){if(transactions++,transactions===1){var O={events:[],callbacks:[],number:batchNum++};batches.push(O),D&&O.callbacks.push(D),collectingBatch=O}},stop:function(D,O){if(D?transactions=0:transactions--,transactions===0){collectingBatch=null;var B;if(dispatchingBatches===!1){dispatchingBatches=!0;for(var F=[],z;B=batches.shift();){var G=B.events;dispatchingBatch=B,can$w.batch.batchNum=B.number;var U;for(O&&can$w.batch.start(),z=0,U=G.length;z<U;z++)can$w.dispatch.apply(G[z][0],G[z][1]);can$w.batch._onDispatchedEvents(B.number),F.push.apply(F,B.callbacks),dispatchingBatch=null,can$w.batch.batchNum=void 0}for(z=F.length-1;z>=0;z--)F[z]();dispatchingBatches=!1}}},_onDispatchedEvents:function(){},trigger:function(D,O,B){D.__inSetup||(O=typeof O=="string"?{type:O}:O,collectingBatch?(O.batchNum=collectingBatch.number,collectingBatch.events.push([D,[O,B]])):O.batchNum?can$w.dispatch.call(D,O,B):batches.length?(can$w.batch.start(),O.batchNum=collectingBatch.number,collectingBatch.events.push([D,[O,B]]),can$w.batch.stop()):can$w.dispatch.call(D,O,B))},afterPreviousEvents:function(D){var O=can$w.last(batches);if(O){var B={};can$w.bind.call(B,"ready",D),O.events.push([B,[{type:"ready"},[]]])}else D({})},after:function(D){var O=collectingBatch||dispatchingBatch;O?O.callbacks.push(D):D({})}};/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$v=util;function ObservedInfo$2(D,O,B){this.newObserved={},this.oldObserved=null,this.func=D,this.context=O,this.compute=B,this.onDependencyChange=can$v.proxy(this.onDependencyChange,this),this.depth=null,this.childDepths={},this.ignore=0,this.inBatch=!1,this.ready=!1,B.observedInfo=this,this.setReady=can$v.proxy(this._setReady,this)}can$v.simpleExtend(ObservedInfo$2.prototype,{getPrimaryDepth:function(){return this.compute._primaryDepth},_setReady:function(){this.ready=!0},getDepth:function(){return this.depth!==null?this.depth:this.depth=this._getDepth()},_getDepth:function(){var D=0,O=this.childDepths;for(var B in O)O[B]>D&&(D=O[B]);return D+1},addEdge:function(D){D.obj.bind(D.event,this.onDependencyChange),D.obj.observedInfo&&(this.childDepths[D.obj._cid]=D.obj.observedInfo.getDepth(),this.depth=null)},removeEdge:function(D){D.obj.unbind(D.event,this.onDependencyChange),D.obj.observedInfo&&(delete this.childDepths[D.obj._cid],this.depth=null)},dependencyChange:function(D){this.bound&&this.ready&&(D.batchNum!==void 0?D.batchNum!==this.batchNum&&(ObservedInfo$2.registerUpdate(this),this.batchNum=D.batchNum):this.updateCompute(D.batchNum))},onDependencyChange:function(D,O,B){this.dependencyChange(D,O,B)},updateCompute:function(D){if(this.bound){var O=this.value;this.getValueAndBind(),this.compute.updater(this.value,O,D)}},getValueAndBind:function(){this.bound=!0,this.oldObserved=this.newObserved||{},this.ignore=0,this.newObserved={},this.ready=!1,observedInfoStack.push(this),this.value=this.func.call(this.context),observedInfoStack.pop(),this.updateBindings(),can$v.batch.afterPreviousEvents(this.setReady)},updateBindings:function(){var D=this.newObserved,O=this.oldObserved,B,F;for(B in D)F=D[B],O[B]?O[B]=null:this.addEdge(F);for(B in O)F=O[B],F&&this.removeEdge(F)},teardown:function(){this.bound=!1;for(var D in this.newObserved){var O=this.newObserved[D];this.removeEdge(O)}this.newObserved={}}});var updateOrder=[],curPrimaryDepth=1/0,maxPrimaryDepth=0,currentBatchNum;ObservedInfo$2.registerUpdate=function(D,O){var B=D.getDepth()-1,F=D.getPrimaryDepth();curPrimaryDepth=Math.min(F,curPrimaryDepth),maxPrimaryDepth=Math.max(F,maxPrimaryDepth);var z=updateOrder[F]||(updateOrder[F]={observeInfos:[],current:1/0,max:0}),G=z.observeInfos[B]||(z.observeInfos[B]=[]);G.push(D),z.current=Math.min(B,z.current),z.max=Math.max(B,z.max)},ObservedInfo$2.updateUntil=function(D,O){for(var B;;)if(curPrimaryDepth<=maxPrimaryDepth&&curPrimaryDepth<=D){var F=updateOrder[curPrimaryDepth];if(F&&F.current<=F.max){if(F.current>O)return;var z=F.observeInfos[F.current];z&&(B=z.pop())?B.updateCompute(currentBatchNum):F.current++}else curPrimaryDepth++}else return},ObservedInfo$2.batchEnd=function(D){var O;for(currentBatchNum=D;;)if(curPrimaryDepth<=maxPrimaryDepth){var B=updateOrder[curPrimaryDepth];if(B&&B.current<=B.max){var F=B.observeInfos[B.current];F&&(O=F.pop())?O.updateCompute(D):B.current++}else curPrimaryDepth++}else{updateOrder=[],curPrimaryDepth=1/0,maxPrimaryDepth=0;return}};var observedInfoStack=[];can$v.__observe=function(D,O){var B=observedInfoStack[observedInfoStack.length-1];if(B&&!B.ignore){var F=O+"",z=D._cid+"|"+F;B.traps?B.traps.push({obj:D,event:F,name:z}):B.newObserved[z]||(B.newObserved[z]={obj:D,event:F})}},can$v.__reading=can$v.__observe,can$v.__trapObserves=function(){if(observedInfoStack.length){var D=observedInfoStack[observedInfoStack.length-1],O=D.traps=[];return function(){return D.traps=null,O}}else return function(){return[]}},can$v.__observes=function(D){var O=observedInfoStack[observedInfoStack.length-1];if(O)for(var B=0,F=D.length;B<F;B++){var z=D[B],G=z.name;O.newObserved[G]||(O.newObserved[G]=z)}},can$v.__isRecordingObserves=function(){var D=observedInfoStack.length,O=observedInfoStack[D-1];return D&&O.ignore===0&&O},can$v.__notObserve=function(D){return function(){if(observedInfoStack.length){var O=observedInfoStack[observedInfoStack.length-1];O.ignore++;var B=D.apply(this,arguments);return O.ignore--,B}else return D.apply(this,arguments)}},can$v.batch._onDispatchedEvents=ObservedInfo$2.batchEnd;var get_value_and_bind=ObservedInfo$2;/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$u=util,bubble$1=bubble_1,mapHelpers$2=map_helpers,unobservable={constructor:!0},Map$2=can$u.Map=can$u.Construct.extend({setup:function(D){if(can$u.Construct.setup.apply(this,arguments),this._computedPropertyNames=[],can$u.Map){this.defaults||(this.defaults={});for(var O in this.prototype)O!=="define"&&O!=="constructor"&&(typeof this.prototype[O]!="function"||this.prototype[O].prototype instanceof can$u.Construct)?this.defaults[O]=this.prototype[O]:this.prototype[O].isComputed&&this._computedPropertyNames.push(O);mapHelpers$2.define&&mapHelpers$2.define(this,D.prototype.define)}can$u.List&&!(this.prototype instanceof can$u.List)&&(this.List=Map$2.List.extend({Map:this},{}))},shortName:"Map",_bubbleRule:function(D){return D==="change"||D.indexOf(".")>=0?["change"]:[]},bind:can$u.bindAndSetup,unbind:can$u.unbindAndTeardown,id:"id",keys:function(D){var O=[];can$u.__observe(D,"__keys");for(var B in D._data)O.push(B);return O}},{setup:function(D){D instanceof can$u.Map&&(D=D.serialize()),this._data={},can$u.cid(this,".map"),this._setupComputedProperties();var O=D&&mapHelpers$2.addToMap(D,this),B=this._setupDefaults(D),F=can$u.extend(can$u.extend(!0,{},B),D);this.attr(F),O&&O()},_setupComputedProperties:function(){this._computedAttrs={};for(var D=this.constructor._computedPropertyNames,O=0,B=D.length;O<B;O++){var F=D[O];mapHelpers$2.addComputedAttr(this,F,this[F].clone(this))}},_setupDefaults:function(){return this.constructor.defaults||{}},attr:function(D,O){var B=typeof D;return D===void 0?this._getAttrs():B!=="string"&&B!=="number"?this._setAttrs(D,O):arguments.length===1?this._get(D+""):(this._set(D+"",O),this)},_get:function(D){var O=D.indexOf(".");if(O>=0){var B=this.___get(D);if(B!==void 0)return can$u.__observe(this,D),B;var F=D.substr(0,O),z=D.substr(O+1),G=this.__get(F);return G&&G._get?G._get(z):void 0}else return this.__get(D)},__get:function(D){return!unobservable[D]&&!this._computedAttrs[D]&&can$u.__observe(this,D),this.___get(D)},___get:function(D){if(D!==void 0){var O=this._computedAttrs[D];return O&&O.compute?O.compute():this._data.hasOwnProperty(D)?this._data[D]:void 0}else return this._data},_set:function(D,O,B){var F=D.indexOf("."),z;if(F>=0&&!B){var G=D.substr(0,F),U=D.substr(F+1);if(z=this.__inSetup?void 0:this.___get(G),can$u.isMapLike(z))z._set(U,O);else throw new Error("can.Map: Object does not exist")}else z=this.__inSetup?void 0:this.___get(D),this.__convert&&(O=this.__convert(D,O)),this.__set(D,this.__type(O,D),z)},__type:function(D,O){if(typeof D=="object"&&!(D instanceof can$u.Map)&&mapHelpers$2.canMakeObserve(D)){var B=mapHelpers$2.getMapFromObject(D);if(B)return B;if(can$u.isArray(D)){var F=can$u.List;return new F(D)}else{var z=this.constructor.Map||can$u.Map;return new z(D)}}return D},__set:function(D,O,B){if(O!==B){var F=this._computedAttrs[D],z=F||B!==void 0||this.___get().hasOwnProperty(D)?"set":"add";this.___set(D,typeof O=="object"?bubble$1.set(this,D,O,B):O),(!F||!F.count)&&this._triggerChange(D,z,O,B),typeof B=="object"&&bubble$1.teardownFromParent(this,B)}},___set:function(D,O){var B=this._computedAttrs[D];B&&B.compute?B.compute(O):this._data[D]=O,typeof this.constructor.prototype[D]!="function"&&!B&&(this[D]=O)},removeAttr:function(D){return this._remove(D)},_remove:function(D){var O=mapHelpers$2.attrParts(D),B=O.shift(),F=this.___get(B);return O.length&&F?F.removeAttr(O):(typeof D=="string"&&~D.indexOf(".")&&(B=D),this.__remove(B,F),F)},__remove:function(D,O){D in this._data&&(this.___remove(D),this._triggerChange(D,"remove",void 0,O))},___remove:function(D){delete this._data[D],D in this.constructor.prototype||delete this[D]},___serialize:function(D,O){return mapHelpers$2.getValue(this,D,O,"serialize")},_getAttrs:function(){return mapHelpers$2.serialize(this,"attr",{})},_setAttrs:function(D,O){D=can$u.simpleExtend({},D);var B,F=this,z;can$u.batch.start(),this._each(function(G,U){if(U!=="_cid"){if(z=D[U],z===void 0){O&&F.removeAttr(U);return}F.__convert&&(z=F.__convert(U,z)),can$u.isMapLike(G)&&mapHelpers$2.canMakeObserve(z)?G.attr(z,O):G!==z&&F.__set(U,F.__type(z,U),G),delete D[U]}});for(B in D)B!=="_cid"&&(z=D[B],this._set(B,z,!0));return can$u.batch.stop(),this},serialize:function(){return mapHelpers$2.serialize(this,"serialize",{})},_triggerChange:function(D,O,B,F,z){bubble$1.isBubbling(this,"change")&&can$u.batch.trigger(this,{type:"change",target:this,batchNum:z},[D,O,B,F]),can$u.batch.trigger(this,{type:D,target:this,batchNum:z},[B,F]),(O==="remove"||O==="add")&&can$u.batch.trigger(this,{type:"__keys",target:this,batchNum:z})},_bindsetup:function(){},_bindteardown:function(){},one:can$u.one,bind:function(D,O){var B=this._computedAttrs&&this._computedAttrs[D];return B&&B.compute&&(B.count?B.count++:(B.count=1,B.compute.bind("change",B.handler))),bubble$1.bind(this,D),can$u.bindAndSetup.apply(this,arguments)},unbind:function(D,O){var B=this._computedAttrs&&this._computedAttrs[D];return B&&(B.count===1?(B.count=0,B.compute.unbind("change",B.handler)):B.count--),bubble$1.unbind(this,D),can$u.unbindAndTeardown.apply(this,arguments)},compute:function(D){if(can$u.isFunction(this.constructor.prototype[D]))return can$u.compute(this[D],this);var O=can$u.compute.read.reads(D),B=O.length-1;return can$u.compute(function(F){if(arguments.length)can$u.compute.read(this,O.slice(0,B)).value.attr(O[B].key,F);else return can$u.compute.read(this,O,{args:[]}).value},this)},each:function(){return can$u.each.apply(void 0,[this].concat(can$u.makeArray(arguments)))},_each:function(D){var O=this.___get();for(var B in O)O.hasOwnProperty(B)&&D(O[B],B)},dispatch:can$u.dispatch});Map$2.prototype.on=Map$2.prototype.bind,Map$2.prototype.off=Map$2.prototype.unbind,Map$2.on=Map$2.bind,Map$2.off=Map$2.unbind;var map=Map$2;/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$t=util,Map$1=map,bubble=bubble_1,mapHelpers$1=map_helpers,splice$2=[].splice;(function(){var D={0:"a",length:1};return splice$2.call(D,0,1),!D[0]})();var list=Map$1.extend({Map:Map$1},{setup:function(D,O){this.length=0,can$t.cid(this,".map"),this._setupComputedProperties(),D=D||[];var B;can$t.isPromise(D)?this.replace(D):(B=D.length&&mapHelpers$1.addToMap(D,this),this.push.apply(this,can$t.makeArray(D||[]))),B&&B(),can$t.simpleExtend(this,O)},_triggerChange:function(D,O,B,F){Map$1.prototype._triggerChange.apply(this,arguments);var z=+D;!~(""+D).indexOf(".")&&!isNaN(z)&&(O==="add"?(can$t.batch.trigger(this,O,[B,z]),can$t.batch.trigger(this,"length",[this.length])):O==="remove"?(can$t.batch.trigger(this,O,[F,z]),can$t.batch.trigger(this,"length",[this.length])):can$t.batch.trigger(this,O,[B,z]))},___get:function(D){if(D){var O=this._computedAttrs[D];return O&&O.compute?O.compute():this[D]}else return this},__set:function(D,O,B){if(D=isNaN(+D)||D%1?D:+D,typeof D=="number"&&D>this.length-1){var F=new Array(D+1-this.length);return F[F.length-1]=O,this.push.apply(this,F),F}return can$t.Map.prototype.__set.call(this,""+D,O,B)},___set:function(D,O){this[D]=O,+D>=this.length&&(this.length=+D+1)},__remove:function(D,O){isNaN(+D)?(delete this[D],this._triggerChange(D,"remove",void 0,O)):this.splice(D,1)},_each:function(D){for(var O=this.___get(),B=0;B<O.length;B++)D(O[B],B)},serialize:function(){return mapHelpers$1.serialize(this,"serialize",[])},splice:function(D,O){var B=can$t.makeArray(arguments),F=[],z,G,U,Y=B.length>2;for(D=D||0,z=0,G=B.length-2;z<G;z++)U=z+2,B[U]=this.__type(B[U],U),F.push(B[U]),this[z+D]!==B[U]&&(Y=!1);if(Y&&this.length<=F.length)return F;O===void 0&&(O=B[1]=this.length-D);var Q=splice$2.apply(this,B);for(z=this.length;z<Q.length+this.length;z++)delete this[z];return can$t.batch.start(),O>0&&(bubble.removeMany(this,Q),this._triggerChange(""+D,"remove",void 0,Q)),B.length>2&&(bubble.addMany(this,F),this._triggerChange(""+D,"add",F,Q)),can$t.batch.stop(),Q},_getAttrs:function(){return mapHelpers$1.serialize(this,"attr",[])},_setAttrs:function(D,O){D=can$t.makeArray(D),can$t.batch.start(),this._updateAttrs(D,O),can$t.batch.stop()},_updateAttrs:function(D,O){for(var B=Math.min(D.length,this.length),F=0;F<B;F++){var z=this[F],G=D[F];can$t.isMapLike(z)&&mapHelpers$1.canMakeObserve(G)?z.attr(G,O):z!==G&&this._set(F+"",G)}D.length>this.length?this.push.apply(this,D.slice(this.length)):D.length<this.length&&O&&this.splice(D.length)}}),getArgs=function(D){return D[0]&&can$t.isArray(D[0])?D[0]:can$t.makeArray(D)};can$t.each({push:"length",unshift:0},function(D,O){var B=[][O];list.prototype[O]=function(){can$t.batch.start();for(var F=[],z=D?this.length:0,G=arguments.length,U,Y;G--;)Y=arguments[G],F[G]=bubble.set(this,G,this.__type(Y,G));return U=B.apply(this,F),(!this.comparator||F.length)&&this._triggerChange(""+z,"add",F,void 0),can$t.batch.stop(),U}}),can$t.each({pop:"length",shift:0},function(D,O){list.prototype[O]=function(){if(this.length){var B=getArgs(arguments),F=D&&this.length?this.length-1:0,z=[][O].apply(this,B);return can$t.batch.start(),this._triggerChange(""+F,"remove",void 0,[z]),z&&z.unbind&&bubble.remove(this,z),can$t.batch.stop(),z}}}),can$t.extend(list.prototype,{indexOf:function(D,O){return can$t.__observe(this,"length"),can$t.inArray(D,this,O)},join:function(){return can$t.__observe(this,"length"),[].join.apply(this,arguments)},reverse:function(){var D=[].reverse.call(can$t.makeArray(this));return this.replace(D)},slice:function(){can$t.__observe(this,"length");var D=Array.prototype.slice.apply(this,arguments);return new this.constructor(D)},concat:function(){var D=[];return can$t.each(can$t.makeArray(arguments),function(O,B){D[B]=O instanceof can$t.List?O.serialize():O}),new this.constructor(Array.prototype.concat.apply(this.serialize(),D))},forEach:function(D,O){return can$t.each(this,D,O||this)},replace:function(D){if(can$t.isPromise(D)){this._promise&&(this._promise.__isCurrentPromise=!1);var O=this._promise=D;O.__isCurrentPromise=!0;var B=this;D.then(function(F){O.__isCurrentPromise&&B.replace(F)})}else this.splice.apply(this,[0,this.length].concat(can$t.makeArray(D||[])));return this},filter:function(D,O){var B=new this.constructor,F=this,z;return this.each(function(G,U,Y){z=D.call(O||F,G,U,F),z&&B.push(G)}),B},map:function(D,O){var B=new can$t.List,F=this;return this.each(function(z,G,U){var Y=D.call(O||F,z,G,F);B.push(Y)}),B}}),can$t.List=Map$1.List=list,can$t.List;/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$s=util,digitTest=/^\d+$/,keyBreaker=/([^\[\]]+)|(\[\])/g,paramTest=/([^?#]*)(#.*)?$/,prep=function(D){return decodeURIComponent(D.replace(/\+/g," "))};can$s.extend(can$s,{deparam:function(D){var O={},B,F;return D&&paramTest.test(D)&&(B=D.split("&"),can$s.each(B,function(z){var G=z.split("="),U=prep(G.shift()),Y=prep(G.join("=")),Q=O;if(U){G=U.match(keyBreaker);for(var ne=0,oe=G.length-1;ne<oe;ne++)Q[G[ne]]||(Q[G[ne]]=digitTest.test(G[ne+1])||G[ne+1]==="[]"?[]:{}),Q=Q[G[ne]];F=G.pop(),F==="[]"?Q.push(Y):Q[F]=Y}})),O}});/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$r=util,matcher=/\:([\w\.]+)/g,paramsMatcher=/^(?:&[^=]+=[^&]*)+/,makeProps=function(D){var O=[];return can$r.each(D,function(B,F){O.push((F==="className"?"class":F)+'="'+(F==="href"?B:can$r.esc(B))+'"')}),O.join(" ")},matchesData=function(D,O){var B=0,F=0,z={};for(var G in D.defaults)D.defaults[G]===O[G]&&(z[G]=1,B++);for(;F<D.names.length;F++){if(!O.hasOwnProperty(D.names[F]))return-1;z[D.names[F]]||B++}return B},location$1=window.location,wrapQuote=function(D){return(D+"").replace(/([.?*+\^$\[\]\\(){}|\-])/g,"\\$1")},each$2=can$r.each,extend$1=can$r.extend,definedToString=function(D){return D.toString.toString()!==Object.prototype.toString.toString()},stringify=function(D){return D&&typeof D=="object"&&!definedToString(D)?(D instanceof can$r.Map?D=D:D=can$r.isFunction(D.slice)?D.slice():can$r.extend({},D),can$r.each(D,function(O,B){D[B]=stringify(O)})):D!=null&&can$r.isFunction(D.toString)&&(D=D.toString()),D},removeBackslash=function(D){return D.replace(/\\/g,"")},timer,curParams,lastHash,changingData,changedAttrs=[],onRouteDataChange=function(D,O,B,F){changingData=1,changedAttrs.push(O),clearTimeout(timer),timer=setTimeout(function(){changingData=0;var z=can$r.route.data.serialize(),G=can$r.route.param(z,!0);can$r.route._call("setURL",G,changedAttrs),can$r.batch.trigger(eventsObject,"__url",[G,lastHash]),lastHash=G,changedAttrs=[]},10)},eventsObject=can$r.extend({},can$r.event),stringCoercingMapDecorator=function(D){var O=D.attr;return D.attr=function(B,F){var z=this.define===void 0||this.define[B]===void 0||!!this.define[B].serialize,G;return z?G=stringify(Array.apply(null,arguments)):G=arguments,O.apply(this,G)},D};can$r.route=function(D,O){var B=can$r.route._call("root");B.lastIndexOf("/")===B.length-1&&D.indexOf("/")===0&&(D=D.substr(1)),O=O||{};for(var F=[],z,G="",U=matcher.lastIndex=0,Y,Q=can$r.route._call("querySeparator"),ne=can$r.route._call("matchSlashes");z=matcher.exec(D);)F.push(z[1]),G+=removeBackslash(D.substring(U,matcher.lastIndex-z[0].length)),Y="\\"+(removeBackslash(D.substr(matcher.lastIndex,1))||Q+(ne?"":"|/")),G+="([^"+Y+"]"+(O[z[1]]?"*":"+")+")",U=matcher.lastIndex;return G+=D.substr(U).replace("\\",""),can$r.route.routes[D]={test:new RegExp("^"+G+"($|"+wrapQuote(Q)+")"),route:D,names:F,defaults:O,length:D.split("/").length},can$r.route},extend$1(can$r.route,{param:function(D,O){var B,F=0,z,G=D.route,U=0;if(delete D.route,each$2(D,function(){U++}),each$2(can$r.route.routes,function(oe,ce){if(z=matchesData(oe,D),z>F&&(B=oe,F=z),z>=U)return!1}),can$r.route.routes[G]&&matchesData(can$r.route.routes[G],D)===F&&(B=can$r.route.routes[G]),B){var Y=extend$1({},D),Q=B.route.replace(matcher,function(oe,ce){return delete Y[ce],D[ce]===B.defaults[ce]?"":encodeURIComponent(D[ce])}).replace("\\",""),ne;return each$2(B.defaults,function(oe,ce){Y[ce]===oe&&delete Y[ce]}),ne=can$r.param(Y),O&&can$r.route.attr("route",B.route),Q+(ne?can$r.route._call("querySeparator")+ne:"")}return can$r.isEmptyObject(D)?"":can$r.route._call("querySeparator")+can$r.param(D)},deparam:function(D){var O=can$r.route._call("root");O.lastIndexOf("/")===O.length-1&&D.indexOf("/")===0&&(D=D.substr(1));var B={length:-1},F=can$r.route._call("querySeparator"),z=can$r.route._call("paramsMatcher");if(each$2(can$r.route.routes,function(ne,oe){ne.test.test(D)&&ne.length>B.length&&(B=ne)}),B.length>-1){var G=D.match(B.test),U=G.shift(),Y=D.substr(U.length-(G[G.length-1]===F?1:0)),Q=Y&&z.test(Y)?can$r.deparam(Y.slice(1)):{};return Q=extend$1(!0,{},B.defaults,Q),each$2(G,function(ne,oe){ne&&ne!==F&&(Q[B.names[oe]]=decodeURIComponent(ne))}),Q.route=B.route,Q}return D.charAt(0)!==F&&(D=F+D),z.test(D)?can$r.deparam(D.slice(1)):{}},data:stringCoercingMapDecorator(new can$r.Map({})),map:function(D){var O;D.prototype instanceof can$r.Map?O=new D:O=D,can$r.route.data=stringCoercingMapDecorator(O)},routes:{},ready:function(D){return D!==!0&&(can$r.route._setup(),(can$r.isBrowserWindow||can$r.isWebWorker)&&can$r.route.setState()),can$r.route},url:function(D,O){return O&&(can$r.__observe(eventsObject,"__url"),D=can$r.extend({},can$r.route.deparam(can$r.route._call("matchingPartOfURL")),D)),can$r.route._call("root")+can$r.route.param(D)},link:function(D,O,B,F){return"<a "+makeProps(extend$1({href:can$r.route.url(O,F)},B))+">"+D+"</a>"},current:function(D){return can$r.__observe(eventsObject,"__url"),this._call("matchingPartOfURL")===can$r.route.param(D)},bindings:{hashchange:{paramsMatcher,querySeparator:"&",matchSlashes:!1,bind:function(){can$r.bind.call(window,"hashchange",setState)},unbind:function(){can$r.unbind.call(window,"hashchange",setState)},matchingPartOfURL:function(){var D=can$r.route.location||location$1;return D.href.split(/#!?/)[1]||""},setURL:function(D){return location$1.hash!=="#"+D&&(location$1.hash="!"+D),D},root:"#!"}},defaultBinding:"hashchange",currentBinding:null,_setup:function(){can$r.route.currentBinding||(can$r.route._call("bind"),can$r.route.bind("change",onRouteDataChange),can$r.route.currentBinding=can$r.route.defaultBinding)},_teardown:function(){can$r.route.currentBinding&&(can$r.route._call("unbind"),can$r.route.unbind("change",onRouteDataChange),can$r.route.currentBinding=null),clearTimeout(timer),changingData=0},_call:function(){var D=can$r.makeArray(arguments),O=D.shift(),B=can$r.route.bindings[can$r.route.currentBinding||can$r.route.defaultBinding],F=B[O];return F.apply?F.apply(B,D):F}}),each$2(["bind","unbind","on","off","delegate","undelegate","removeAttr","compute","_get","___get","each"],function(D){can$r.route[D]=function(){if(can$r.route.data[D])return can$r.route.data[D].apply(can$r.route.data,arguments)}}),can$r.route.attr=function(){return can$r.route.data.attr.apply(can$r.route.data,arguments)},can$r.route.batch=can$r.batch;var setState=can$r.route.setState=function(){var D=can$r.route._call("matchingPartOfURL"),O=curParams;curParams=can$r.route.deparam(D),(!changingData||D!==lastHash)&&(can$r.route.batch.start(),recursiveClean(O,curParams,can$r.route.data),can$r.route.attr(curParams),can$r.route.batch.trigger(eventsObject,"__url",[D,lastHash]),can$r.route.batch.stop())},recursiveClean=function(D,O,B){for(var F in D)O[F]===void 0?B.removeAttr(F):Object.prototype.toString.call(D[F])==="[object Object]"&&recursiveClean(D[F],O[F],B.attr(F))};can$r.route;/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$q=util,bind$1=function(D,O,B){return can$q.bind.call(D,O,B),function(){can$q.unbind.call(D,O,B)}},isFunction$1=can$q.isFunction,extend=can$q.extend,each$1=can$q.each,slice$1=[].slice,paramReplacer$1=/\{([^\}]+)\}/g,special$2=can$q.getObject("$.event.special",[can$q])||{},delegate=function(D,O,B,F){return can$q.delegate.call(D,O,B,F),function(){can$q.undelegate.call(D,O,B,F)}},binder=function(D,O,B,F){return F?delegate(D,can$q.trim(F),O,B):bind$1(D,O,B)},basicProcessor;can$q.Control=can$q.Construct({setup:function(){if(can$q.Construct.setup.apply(this,arguments),can$q.Control){var D=this,O;D.actions={};for(O in D.prototype)D._isAction(O)&&(D.actions[O]=D._action(O))}},_shifter:function(D,O){var B=typeof O=="string"?D[O]:O;return isFunction$1(B)||(B=D[B]),function(){return D.called=O,B.apply(D,[this.nodeName?can$q.$(this):this].concat(slice$1.call(arguments,0)))}},_isAction:function(D){var O=this.prototype[D],B=typeof O;return D!=="constructor"&&(B==="function"||B==="string"&&isFunction$1(this.prototype[O]))&&!!(special$2[D]||processors[D]||/[^\w]/.test(D))},_action:function(D,O){if(paramReplacer$1.lastIndex=0,O||!paramReplacer$1.test(D)){var B=O?can$q.sub(D,this._lookup(O)):D;if(!B)return null;var F=can$q.isArray(B),z=F?B[1]:B,G=z.split(/\s+/g),U=G.pop();return{processor:processors[U]||basicProcessor,parts:[z,G.join(" "),U],delegate:F?B[0]:void 0}}},_lookup:function(D){return[D,window]},processors:{},defaults:{}},{setup:function(D,O){var B=this.constructor,F=B.pluginName||B._fullName,z;return this.element=can$q.$(D),F&&F!=="can_control"&&this.element.addClass(F),z=can$q.data(this.element,"controls"),z||(z=[],can$q.data(this.element,"controls",z)),z.push(this),this.options=extend({},B.defaults,O),this.on(),[this.element,this.options]},on:function(D,O,B,F){if(!D){this.off();var z=this.constructor,G=this._bindings,U=z.actions,Y=this.element,Q=can$q.Control._shifter(this,"destroy"),ne,oe;for(ne in U)U.hasOwnProperty(ne)&&(oe=U[ne]||z._action(ne,this.options,this),oe&&(G.control[ne]=oe.processor(oe.delegate||Y,oe.parts[2],oe.parts[1],ne,this)));return can$q.bind.call(Y,"removed",Q),G.user.push(function(ce){can$q.unbind.call(ce,"removed",Q)}),G.user.length}return typeof D=="string"&&(F=B,B=O,O=D,D=this.element),F===void 0&&(F=B,B=O,O=null),typeof F=="string"&&(F=can$q.Control._shifter(this,F)),this._bindings.user.push(binder(D,B,F,O)),this._bindings.user.length},off:function(){var D=this.element[0],O=this._bindings;O&&(each$1(O.user||[],function(B){B(D)}),each$1(O.control||{},function(B){B(D)})),this._bindings={user:[],control:{}}},destroy:function(){if(this.element!==null){var D=this.constructor,O=D.pluginName||D._fullName,B;this.off(),O&&O!=="can_control"&&this.element.removeClass(O),B=can$q.data(this.element,"controls"),B.splice(can$q.inArray(this,B),1),can$q.trigger(this,"destroyed"),this.element=null}}});var processors=can$q.Control.processors;basicProcessor=function(D,O,B,F,z){return binder(D,O,can$q.Control._shifter(z,F),B)},each$1(["change","click","contextmenu","dblclick","keydown","keyup","keypress","mousedown","mousemove","mouseout","mouseover","mouseup","reset","resize","scroll","select","submit","focusin","focusout","mouseenter","mouseleave","touchstart","touchmove","touchcancel","touchend","touchleave","inserted","removed","dragstart","dragenter","dragover","dragleave","drag","drop","dragend"],function(D){processors[D]=basicProcessor});/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$p=util;can$p.Control.processors.route=function(D,O,B,F,z){B=B||"",can$p.route.routes[B]||(B[0]==="/"&&(B=B.substring(1)),can$p.route(B));var G,U=function(Y,Q,ne){if(can$p.route.attr("route")===B&&(Y.batchNum===void 0||Y.batchNum!==G)){G=Y.batchNum;var oe=can$p.route.attr();delete oe.route,can$p.isFunction(z[F])?z[F](oe):z[z[F]](oe)}};return can$p.route.bind("change",U),function(){can$p.route.unbind("change",U)}};/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$o=util,pipe=function(D,O,B){var F=new can$o.Deferred;return D.then(function(){var z=can$o.makeArray(arguments),G=!0;try{z[0]=B.apply(O,z)}catch(U){G=!1,F.rejectWith(F,[U].concat(z))}G&&F.resolveWith(F,z)},function(){F.rejectWith(this,arguments)}),typeof D.abort=="function"&&(F.abort=function(){return D.abort()}),F},modelNum=0,getId=function(D){return can$o.__observe(D,D.constructor.id),D.___get(D.constructor.id)},ajax=function(D,O,B,F,z,G){var U={};if(typeof D=="string"){var Y=D.split(/\s+/);U.url=Y.pop(),Y.length&&(U.type=Y.pop())}else can$o.extend(U,D);return U.data=typeof O=="object"&&!can$o.isArray(O)?can$o.extend(U.data||{},O):O,U.url=can$o.sub(U.url,U.data,!0),can$o.ajax(can$o.extend({type:B||"post",dataType:"json",success:z,error:G},U))},makeRequest=function(D,O,B,F,z){var G;can$o.isArray(D)?(G=D[1],D=D[0]):G=D.serialize(),G=[G];var U,Y=D.constructor,Q;return(O==="update"||O==="destroy")&&G.unshift(getId(D)),Q=Y[O].apply(Y,G),U=pipe(Q,D,function(ne){return D[z||O+"d"](ne,Q),D}),Q.abort&&(U.abort=function(){Q.abort()}),U.then(B,F),U},converters={models:function(D,O,B){if(can$o.Model._reqs++,!!D){if(D instanceof this.List)return D;var F=this,z=[],G=F.List||ML,U=O instanceof can$o.List?O:new G,Y=D instanceof ML,Q=Y?D.serialize():D;if(Q=F.parseModels(Q,B),Q.data&&(D=Q,Q=Q.data),typeof Q>"u"||!can$o.isArray(Q))throw new Error("Could not get any raw data while converting using .models");return U.length&&U.splice(0),can$o.each(Q,function(ne){z.push(F.model(ne,B))}),U.push.apply(U,z),can$o.isArray(D)||can$o.each(D,function(ne,oe){oe!=="data"&&U.attr(oe,ne)}),setTimeout(can$o.proxy(this._clean,this),1),U}},model:function(D,O,B){if(D){typeof D.serialize=="function"?D=D.serialize():D=this.parseModel(D,B);var F=D[this.id];(F||F===0)&&this.store[F]&&(O=this.store[F]);var z=O&&can$o.isFunction(O.attr)?O.attr(D,this.removeAttr||!1):new this(D);return z}}},makeParser={parseModel:function(D){return function(O){return D?can$o.getObject(D,O):O}},parseModels:function(D){return function(O){if(can$o.isArray(O))return O;D=D||"data";var B=can$o.getObject(D,O);if(!can$o.isArray(B))throw new Error("Could not get any raw data while converting using .models");return B}}},ajaxMethods={create:{url:"_shortName",type:"post"},update:{data:function(D,O){O=O||{};var B=this.id;return O[B]&&O[B]!==D&&(O["new"+can$o.capitalize(D)]=O[B],delete O[B]),O[B]=D,O},type:"put"},destroy:{type:"delete",data:function(D,O){return O=O||{},O.id=O[this.id]=D,O}},findAll:{url:"_shortName"},findOne:{}},ajaxMaker=function(D,O){return function(B){return B=D.data?D.data.apply(this,arguments):B,ajax(O||this[D.url||"_url"],B,D.type||"get")}},createURLFromResource=function(D,O){if(D.resource){var B=D.resource.replace(/\/+$/,"");return O==="findAll"||O==="create"?B:B+"/{"+D.id+"}"}};can$o.Model=can$o.Map.extend({fullName:"can.Model",_reqs:0,setup:function(D,O,B,F){if(typeof O!="string"&&(F=B,B=O),F||(F=B),this.store={},can$o.Map.setup.apply(this,arguments),!!can$o.Model){B&&B.List?(this.List=B.List,this.List.Map=this):this.List=D.List.extend({Map:this},{});var z=this,G=can$o.proxy(this._clean,z);can$o.each(ajaxMethods,function(Y,Q){if(B&&B[Q]&&(typeof B[Q]=="string"||typeof B[Q]=="object")?z[Q]=ajaxMaker(Y,B[Q]):B&&B.resource&&!can$o.isFunction(B[Q])&&(z[Q]=ajaxMaker(Y,createURLFromResource(z,Q))),z["make"+can$o.capitalize(Q)]){var ne=z["make"+can$o.capitalize(Q)](z[Q]);can$o.Construct._overwrite(z,D,Q,function(){can$o.Model._reqs++;var oe=ne.apply(this,arguments),ce=oe.then(G,G);return ce.abort=oe.abort,ce})}});var U={};can$o.each(converters,function(Y,Q){var ne="parse"+can$o.capitalize(Q),oe=B&&B[Q]||z[Q];typeof oe=="string"?(z[ne]=oe,can$o.Construct._overwrite(z,D,Q,Y)):B&&B[Q]&&(U[ne]=!0)}),can$o.each(makeParser,function(Y,Q){var ne=B&&B[Q]||z[Q];if(typeof ne=="string")can$o.Construct._overwrite(z,D,Q,Y(ne));else if((!B||!can$o.isFunction(B[Q]))&&!z[Q]){var oe=Y();oe.useModelConverter=U[Q],can$o.Construct._overwrite(z,D,Q,oe)}}),(z.fullName==="can.Model"||!z.fullName)&&(z.fullName="Model"+ ++modelNum),can$o.Model._reqs=0,this._url=this._shortName+"/{"+this.id+"}"}},_ajax:ajaxMaker,_makeRequest:makeRequest,_clean:function(){if(can$o.Model._reqs--,!can$o.Model._reqs)for(var D in this.store)this.store[D]._bindings||delete this.store[D];return arguments[0]},models:converters.models,model:converters.model},{setup:function(D){var O=D&&D[this.constructor.id];can$o.Model._reqs&&O!=null&&(this.constructor.store[O]=this),can$o.Map.prototype.setup.apply(this,arguments)},isNew:function(){var D=getId(this);return!(D||D===0)},save:function(D,O){return makeRequest(this,this.isNew()?"create":"update",D,O)},destroy:function(D,O){if(this.isNew()){var B=this,F=can$o.Deferred();return F.then(D,O),F.done(function(z){B.destroyed(z)}).resolve(B)}return makeRequest(this,"destroy",D,O,"destroyed")},_bindsetup:function(){var D=this.___get(this.constructor.id);return D!=null&&(this.constructor.store[D]=this),can$o.Map.prototype._bindsetup.apply(this,arguments)},_bindteardown:function(){return delete this.constructor.store[getId(this)],can$o.Map.prototype._bindteardown.apply(this,arguments)},___set:function(D,O){can$o.Map.prototype.___set.call(this,D,O),D===this.constructor.id&&this._bindings&&(this.constructor.store[getId(this)]=this)}});var makeGetterHandler=function(D){return function(O,B,F){return this[D](O,null,F)}},createUpdateDestroyHandler=function(D){return this.parseModel.useModelConverter?this.model(D):this.parseModel(D)},responseHandlers={makeFindAll:makeGetterHandler("models"),makeFindOne:makeGetterHandler("model"),makeCreate:createUpdateDestroyHandler,makeUpdate:createUpdateDestroyHandler,makeDestroy:createUpdateDestroyHandler};can$o.each(responseHandlers,function(D,O){can$o.Model[O]=function(B){return function(){var F=can$o.makeArray(arguments),z=can$o.isFunction(F[1])?F.splice(0,1):F.splice(0,2),G=pipe(B.apply(this,z),this,D);return G.then(F[0],F[1]),G}}}),can$o.each(["created","updated","destroyed"],function(D){can$o.Model.prototype[D]=function(O){var B=this,F=B.constructor;O&&typeof O=="object"&&this.attr(can$o.isFunction(O.attr)?O.attr():O),can$o.dispatch.call(this,{type:D,target:this},[]),can$o.dispatch.call(F,D,[this])}});var ML=can$o.Model.List=can$o.List.extend({_bubbleRule:function(D,O){var B=can$o.List._bubbleRule(D,O);return B.push("destroyed"),B}},{setup:function(D){can$o.isPlainObject(D)&&!can$o.isArray(D)?(can$o.List.prototype.setup.apply(this),this.replace(can$o.isPromise(D)?D:this.constructor.Map.findAll(D))):can$o.List.prototype.setup.apply(this,arguments),this.bind("destroyed",can$o.proxy(this._destroyed,this))},_destroyed:function(D,O){if(/\w+/.test(O))for(var B;(B=this.indexOf(D.target))>-1;)this.splice(B,1)}});can$o.Model;/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$n=util,read$1=function(D,O,B){B=B||{};for(var F={foundObservable:!1},z=readValue(D,0,O,B,F),G,U,Y=O.length,Q=0;Q<Y;){U=z;for(var ne=0,oe=read$1.propertyReaders.length;ne<oe;ne++){var ce=read$1.propertyReaders[ne];if(ce.test(z)){z=ce.read(z,O[Q],Q,B,F);break}}if(Q=Q+1,z=readValue(z,Q,O,B,F,U),G=typeof z,Q<O.length&&(z===null||G!=="function"&&G!=="object"))return B.earlyExit&&B.earlyExit(U,Q-1,z),{value:void 0,parent:U}}return z===void 0&&B.earlyExit&&B.earlyExit(U,Q-1),{value:z,parent:U}},isAt=function(D,O){var B=O[D-1];return B&&B.at},readValue=function(D,O,B,F,z,G){var U;do{U=!1;for(var Y=0,Q=read$1.valueReaders.length;Y<Q;Y++)read$1.valueReaders[Y].test(D,O,B,F)&&(D=read$1.valueReaders[Y].read(D,O,B,F,z,G))}while(U);return D};read$1.valueReaders=[{name:"compute",test:function(D,O,B,F){return D&&D.isComputed&&!isAt(O,B)},read:function(D,O,B,F,z){return F.readCompute===!1&&O===B.length?D:(!z.foundObservable&&F.foundObservable&&(F.foundObservable(D,O),z.foundObservable=!0),D instanceof can$n.Compute?D.get():D())}},{name:"function",test:function(D,O,B,F){var z=typeof D;return z==="function"&&!D.isComputed&&!(can$n.Construct&&D.prototype instanceof can$n.Construct)&&!(can$n.route&&D===can$n.route)},read:function(D,O,B,F,z,G){return isAt(O,B)?O===B.length?can$n.proxy(D,G):D:F.callMethodsOnObservables&&can$n.isMapLike(G)?D.apply(G,F.args||[]):F.isArgument&&O===B.length?F.proxyMethods!==!1?can$n.proxy(D,G):D:D.apply(G,F.args||[])}}],read$1.propertyReaders=[{name:"map",test:can$n.isMapLike,read:function(D,O,B,F,z){!z.foundObservable&&F.foundObservable&&(F.foundObservable(D,B),z.foundObservable=!0);var G=D.attr(O.key);return G!==void 0?G:D[O.key]}},{name:"promise",test:function(D){return can$n.isPromise(D)},read:function(D,O,B,F,z){!z.foundObservable&&F.foundObservable&&(F.foundObservable(D,B),z.foundObservable=!0);var G=D.__observeData;return D.__observeData||(G=D.__observeData={isPending:!0,state:"pending",isResolved:!1,isRejected:!1,value:void 0,reason:void 0},can$n.cid(G),can$n.simpleExtend(G,can$n.event),D.then(function(U){G.isPending=!1,G.isResolved=!0,G.value=U,G.state="resolved",G.dispatch("state",["resolved","pending"])},function(U){G.isPending=!1,G.isRejected=!0,G.reason=U,G.state="rejected",G.dispatch("state",["rejected","pending"])})),can$n.__observe(G,"state"),O.key in G?G[O.key]:D[O.key]}},{name:"object",test:function(){return!0},read:function(D,O){if(D!=null){if(O.key in D)return D[O.key];if(O.at&&specialRead[O.key]&&"@"+O.key in D)return O.at=!1,D["@"+O.key]}}}];var specialRead={index:!0,key:!0,event:!0,element:!0,viewModel:!0};read$1.write=function(D,O,B,F){if(F=F||{},can$n.isMapLike(D))return!F.isArgument&&D._data&&D._data[O]&&D._data[O].isComputed?D._data[O](B):D.attr(O,B);if(D[O]&&D[O].isComputed)return D[O](B);typeof D=="object"&&(D[O]=B)},read$1.reads=function(D){var O=[],B=0,F=!1;D.charAt(0)==="@"&&(B=1,F=!0);for(var z="",G=B;G<D.length;G++){var U=D.charAt(G);U==="."||U==="@"?D.charAt(G-1)!=="\\"?(O.push({key:z,at:F}),F=U==="@",z=""):z=z.substr(0,z.length-1)+".":z+=U}return O.push({key:z,at:F}),O};var read_1=read$1;/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$m=util,read=read_1,ObservedInfo$1=get_value_and_bind;can$m.Compute=function(D,O,B,F){can$m.cid(this,"compute");for(var z=[],G=0,U=arguments.length;G<U;G++)z[G]=arguments[G];var Y=typeof z[1];typeof z[0]=="function"?this._setupGetterSetterFn(z[0],z[1],z[2],z[3]):z[1]?Y==="string"?this._setupProperty(z[0],z[1],z[2]):Y==="function"?this._setupSetter(z[0],z[1],z[2]):z[1]&&z[1].fn?this._setupAsyncCompute(z[0],z[1]):this._setupSettings(z[0],z[1]):this._setupSimpleValue(z[0]),this._args=z,this._primaryDepth=0,this.isComputed=!0},can$m.simpleExtend(can$m.Compute.prototype,{setPrimaryDepth:function(D){this._primaryDepth=D},_setupGetterSetterFn:function(D,O,B){this._set=O?can$m.proxy(D,O):D,this._get=O?can$m.proxy(D,O):D,this._canObserve=B!==!1;var F=setupComputeHandlers(this,D,O||this);can$m.simpleExtend(this,F)},_setupProperty:function(D,O,B){var F=can$m.isMapLike(D),z=this,G;F?(G=function(U,Y,Q){z.updater(Y,Q,U.batchNum)},this.hasDependencies=!0,this._get=function(){return D.attr(O)},this._set=function(U){D.attr(O,U)}):(G=function(){z.updater(z._get(),z.value)},this._get=function(){return can$m.getObject(O,[D])},this._set=function(U){var Y=O.split("."),Q=Y.pop(),ne=can$m.getObject(Y.join("."),[D]);ne[Q]=U}),this._on=function(U){can$m.bind.call(D,B||O,G),this.value=this._get()},this._off=function(){return can$m.unbind.call(D,B||O,G)}},_setupSetter:function(D,O,B){this.value=D,this._set=O,can$m.simpleExtend(this,B)},_setupSettings:function(D,O){if(this.value=D,this._set=O.set||this._set,this._get=O.get||this._get,!O.__selfUpdater){var B=this,F=this.updater;this.updater=function(){F.call(B,B._get(),B.value)}}this._on=O.on?O.on:this._on,this._off=O.off?O.off:this._off},_setupAsyncCompute:function(D,O){var B=this;this.value=D,this._setUpdates=!0,this.lastSetValue=new can$m.Compute(D),this._set=function(Y){return Y===B.lastSetValue.get()?this.value:B.lastSetValue.set(Y)},this._get=function(){return F.call(O.context,B.lastSetValue.get())};var F=O.fn,z;if(F.length===0)z=setupComputeHandlers(this,F,O.context);else if(F.length===1)z=setupComputeHandlers(this,function(){return F.call(O.context,B.lastSetValue.get())},O);else{var G=this.updater,U=function(Y){G.call(B,Y,B.value)};this.updater=function(Y){G.call(B,Y,B.value)},z=setupComputeHandlers(this,function(){var Y=F.call(O.context,B.lastSetValue.get(),U);return Y!==void 0?Y:this.value},this)}can$m.simpleExtend(this,z)},_setupSimpleValue:function(D){this.value=D},_bindsetup:can$m.__notObserve(function(){this.bound=!0,this._on(this.updater)}),_bindteardown:function(){this._off(this.updater),this.bound=!1},bind:can$m.bindAndSetup,unbind:can$m.unbindAndTeardown,clone:function(D){return D&&typeof this._args[0]=="function"?this._args[1]=D:D&&(this._args[2]=D),new can$m.Compute(this._args[0],this._args[1],this._args[2],this._args[3])},_on:can$m.k,_off:can$m.k,get:function(){var D=can$m.__isRecordingObserves();return D&&this._canObserve!==!1&&(can$m.__observe(this,"change"),this.bound||can$m.Compute.temporarilyBind(this)),this.bound?(D&&this.getDepth&&this.getDepth()>=D.getDepth()&&ObservedInfo$1.updateUntil(this.getPrimaryDepth(),this.getDepth()),this.value):this._get()},_get:function(){return this.value},set:function(D){var O=this.value,B=this._set(D,O);return this._setUpdates?this.value:this.hasDependencies?this._get():(B===void 0?this.value=this._get():this.value=B,updateOnChange(this,this.value,O),this.value)},_set:function(D){return this.value=D},updater:function(D,O,B){this.value=D,updateOnChange(this,D,O,B)},toFunction:function(){return can$m.proxy(this._computeFn,this)},_computeFn:function(D){return arguments.length?this.set(D):this.get()}});var updateOnChange=function(D,O,B,F){var z=O!==B&&!(O!==O&&B!==B);z&&can$m.batch.trigger(D,{type:"change",batchNum:F},[O,B])},setupComputeHandlers=function(D,O,B){var F=new ObservedInfo$1(O,B,D);return{readInfo:F,_on:function(){F.getValueAndBind(),D.value=F.value,D.hasDependencies=!can$m.isEmptyObject(F.newObserved)},_off:function(){F.teardown()},getDepth:function(){return F.getDepth()},getPrimaryDepth:function(){return F.getPrimaryDepth()}}};can$m.Compute.temporarilyBind=function(D){var O=D.computeInstance||D;O.bind("change",can$m.k),computes||(computes=[],setTimeout(unbindComputes,10)),computes.push(O)};var computes,unbindComputes=function(){for(var D=0,O=computes.length;D<O;D++)computes[D].unbind("change",can$m.k);computes=null};can$m.Compute.async=function(D,O,B){return new can$m.Compute(D,{fn:O,context:B})},can$m.Compute.truthy=function(D){return new can$m.Compute(function(){var O=D.get();return typeof O=="function"&&(O=O.get()),!!O})},can$m.Compute.read=read,can$m.Compute.set=read.write,can$m.Compute;/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$l=util;can$l.compute=function(D,O,B,F){var z=new can$l.Compute(D,O,B,F),G=z.bind,U=z.unbind,Y=function(oe){return arguments.length?z.set(oe):z.get()},Q=can$l.cid(Y,"compute"),ne="__handler"+Q;return Y.bind=function(oe,ce){var fe=ce&&ce[ne];return ce&&!fe&&(fe=ce[ne]=function(){ce.apply(Y,arguments)}),G.call(z,oe,fe)},Y.unbind=function(oe,ce){var fe=ce&&ce[ne];return fe?(delete ce[ne],z.unbind(oe,fe)):U.apply(z,arguments)},Y.isComputed=z.isComputed,Y.clone=function(oe){return typeof D=="function"&&(O=oe),can$l.compute(D,O,oe,F)},Y.computeInstance=z,Y},can$l.compute.truthy=function(D){return can$l.compute(function(){var O=D();return typeof O=="function"&&(O=O()),!!O})},can$l.compute.async=function(D,O,B){return can$l.compute(D,{fn:O,context:B})},can$l.compute.read=can$l.Compute.read,can$l.compute.set=can$l.Compute.set,can$l.compute.temporarilyBind=can$l.Compute.temporarilyBind,can$l.compute;/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$k=util,mapHelpers=map_helpers;if(!can$k.define){var define=can$k.define={},getPropDefineBehavior=function(D,O,B){var F,z;if(B){if(F=B[O],z=B["*"],F&&F[D]!==void 0)return F[D];if(z&&z[D]!==void 0)return z[D]}};mapHelpers.define=function(D,O){var B=D.prototype.define;if(O){var F=can$k.simpleExtend({},O);mapHelpers.twoLevelDeepExtend(F,B),can$k.simpleExtend(B,F)}D.defaultGenerators={};for(var z in B){var G=B[z].type;typeof G=="string"&&typeof define.types[G]=="object"&&(delete B[z].type,can$k.extend(B[z],define.types[G])),"value"in B[z]&&(typeof B[z].value=="function"?D.defaultGenerators[z]=B[z].value:D.defaults[z]=B[z].value),typeof B[z].Value=="function"&&function(U){D.defaultGenerators[z]=function(){return new U}}(B[z].Value)}};var oldSetupDefaults=can$k.Map.prototype._setupDefaults;can$k.Map.prototype._setupDefaults=function(D){var O=can$k.extend({},oldSetupDefaults.call(this)),B={},F=this.constructor,z=this._get;this._get=function(U){var Y=U.indexOf(".")!==-1?U.substr(0,U.indexOf(".")):U;return Y in O&&!(Y in B)&&(this.attr(Y,O[Y]),B[Y]=!0),z.apply(this,arguments)};for(var G in F.defaultGenerators)(!D||!(G in D))&&(O[G]=F.defaultGenerators[G].call(this));return delete this._get,O};var proto=can$k.Map.prototype,oldSet=proto.__set;proto.__set=function(D,O,B,F,z){var G=function(ce){var fe=z&&z.call(U,ce);return fe!==!1&&can$k.trigger(U,"error",[D,ce],!0),!1},U=this,Y=getPropDefineBehavior("set",D,this.define),Q=getPropDefineBehavior("get",D,this.define);if(Y){can$k.batch.start();var ne=!1,oe=Y.call(this,O,function(ce){Q?U[D](ce):oldSet.call(U,D,ce,B,F,G),ne=!0},G,Q?this._computedAttrs[D].compute.computeInstance.lastSetValue.get():B);if(Q){oe!==void 0&&!ne&&Y.length>=1&&this._computedAttrs[D].compute(oe),can$k.batch.stop();return}else if(oe===void 0&&!ne&&Y.length>=1){can$k.batch.stop();return}else return ne||oldSet.call(U,D,Y.length===0&&oe===void 0?O:oe,B,F,G),can$k.batch.stop(),this}else oldSet.call(U,D,O,B,F,G);return this},define.types={date:function(D){var O=typeof D;return O==="string"?(D=Date.parse(D),isNaN(D)?null:new Date(D)):O==="number"?new Date(D):D},number:function(D){return D==null?D:+D},boolean:function(D){return!(D==="false"||D==="0"||!D)},htmlbool:function(D){return typeof D=="string"||!!D},"*":function(D){return D},string:function(D){return D==null?D:""+D},compute:{set:function(D,O,B,F){return D&&D.isComputed?D:F&&F.isComputed?(F(D),F):D},get:function(D){return D&&D.isComputed?D():D}}};var oldType=proto.__type;proto.__type=function(D,O){var B=getPropDefineBehavior("type",O,this.define),F=getPropDefineBehavior("Type",O,this.define),z=D;return typeof B=="string"&&(B=define.types[B]),B||F?(B&&(z=B.call(this,z,O)),F&&!(z instanceof F)&&(z=new F(z)),z):(can$k.isPlainObject(z)&&z.define&&(z=can$k.Map.extend(z),z=new z),oldType.call(this,z,O))};var oldRemove=proto.__remove;proto.__remove=function(D,O){var B=getPropDefineBehavior("remove",D,this.define),F;if(B)if(can$k.batch.start(),F=B.call(this,O),F===!1){can$k.batch.stop();return}else return F=oldRemove.call(this,D,O),can$k.batch.stop(),F;return oldRemove.call(this,D,O)};var oldSetupComputes=proto._setupComputedProperties;proto._setupComputedProperties=function(){oldSetupComputes.apply(this,arguments);for(var D in this.define){var O=this.define[D],B=O.get;B&&mapHelpers.addComputedAttr(this,D,can$k.compute.async(void 0,B,this))}};var oldSingleSerialize=proto.___serialize;proto.___serialize=function(D,O){return serializeProp(this,D,O)};var serializeProp=function(D,O,B){var F=O==="*"?!1:getPropDefineBehavior("serialize",O,D.define);if(F===void 0)return oldSingleSerialize.call(D,O,B);if(F!==!1)return typeof F=="function"?F.call(D,B,O):oldSingleSerialize.call(D,O,B)},oldSerialize=proto.serialize;proto.serialize=function(D){var O=oldSerialize.apply(this,arguments);if(D)return O;var B,F;for(var z in this.define)z in O||(B=this.define&&this.define[z]&&this.define[z].serialize,B&&(F=serializeProp(this,z,this.attr(z)),F!==void 0&&(O[z]=F)));return O}}can$k.define;/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$j=util,ObservedInfo=get_value_and_bind,isFastPath=function(D){return D.reads&&D.reads.length===1&&D.root instanceof can$j.Map&&!can$j.isFunction(D.root[D.reads[0].key])},scopeReader=function(D,O,B,F,z){if(arguments.length>4){var G=F.root||F.setRoot;if(G){if(G.isComputed)G(z);else if(F.reads.length){var U=F.reads.length-1,Y=F.reads.length?can$j.compute.read(G,F.reads.slice(0,U)).value:G;can$j.compute.set(Y,F.reads[U].key,z,B)}}}else{if(F.root)return can$j.compute.read(F.root,F.reads,B).value;var Q=D.read(O,B);return F.scope=Q.scope,F.initialValue=Q.value,F.reads=Q.reads,F.root=Q.rootObserve,F.setRoot=Q.setRoot,Q.value}},compute_data=function(D,O,B){B=B||{args:[]};var F={},z=function(Y){return arguments.length?scopeReader(D,O,B,F,Y):scopeReader(D,O,B,F)},G=can$j.compute(void 0,{on:function(){U.getValueAndBind(),isFastPath(F)&&(U.dependencyChange=function(Y,Q){return typeof Q!="function"?this.newVal=Q:(U.dependencyChange=ObservedInfo.prototype.dependencyChange,U.getValueAndBind=ObservedInfo.prototype.getValueAndBind),ObservedInfo.prototype.dependencyChange.call(this,Y)},U.getValueAndBind=function(){this.value=this.newVal}),G.computeInstance.value=U.value,G.computeInstance.hasDependencies=!can$j.isEmptyObject(U.newObserved)},off:function(){U.dependencyChange=ObservedInfo.prototype.dependencyChange,U.getValueAndBind=ObservedInfo.prototype.getValueAndBind,U.teardown()},set:z,get:z,__selfUpdater:!0}),U=new ObservedInfo(z,null,G.computeInstance);return F.compute=G,F};function commonjsRequire(D){throw new Error('Could not dynamically require "'+D+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$i=util,isFunction=can$i.isFunction,makeArray=can$i.makeArray,hookupId=1,makeRenderer=function(D){var O=function(){return $view.frag(D.apply(this,arguments))};return O.render=function(){return D.apply(D,arguments)},O},checkText=function(D,O){if(!D.length)throw new Error("can.view: No template or empty template:"+O)},getRenderer=function(D,O){if(isFunction(D)){var B=can$i.Deferred();return B.resolve(D)}var F=typeof D=="string"?D:D.url,z=D.engine&&"."+D.engine||F.match(/\.[\w\d]+$/),G,U,Y;if(F.match(/^#/)&&(F=F.substr(1)),(U=document.getElementById(F))&&(z="."+U.type.match(/\/(x\-)?(.+)/)[2]),!z&&!$view.cached[F]&&(F+=z=$view.ext),can$i.isArray(z)&&(z=z[0]),Y=$view.toId(F),F.match(/^\/\//)&&(F=F.substr(2),F=window.steal?steal.config().root.mapJoin(""+steal.id(F)):F),window.require&&commonjsRequire.toUrl&&(F=commonjsRequire.toUrl(F)),G=$view.types[z],$view.cached[Y])return $view.cached[Y];if(U)return $view.registerView(Y,U.innerHTML,G);var Q=new can$i.Deferred;return can$i.ajax({async:O,url:F,dataType:"text",error:function(ne){checkText("",F),Q.reject(ne)},success:function(ne){checkText(ne,F),$view.registerView(Y,ne,G,Q)}}),Q},getDeferreds=function(D){var O=[];if(can$i.isPromise(D))return[D];for(var B in D)can$i.isPromise(D[B])&&O.push(D[B]);return O},usefulPart=function(D){return can$i.isArray(D)&&D[1]==="success"?D[0]:D},$view=can$i.view=can$i.template=function(D,O,B,F){return isFunction(B)&&(F=B,B=void 0),$view.renderAs("fragment",D,O,B,F)};can$i.extend($view,{frag:function(D,O){return $view.hookup($view.fragment(D),O)},fragment:function(D){return can$i.frag(D,document)},toId:function(D){return can$i.map(D.toString().split(/\/|\./g),function(O){if(O)return O}).join("_")},toStr:function(D){return D==null?"":""+D},hookup:function(D,O){var B=[],F,z;return can$i.each(D.childNodes?can$i.makeArray(D.childNodes):D,function(G){G.nodeType===1&&(B.push(G),B.push.apply(B,can$i.makeArray(G.getElementsByTagName("*"))))}),can$i.each(B,function(G){G.getAttribute&&(F=G.getAttribute("data-view-id"))&&(z=$view.hookups[F])&&(z(G,O,F),delete $view.hookups[F],G.removeAttribute("data-view-id"))}),D},hookups:{},hook:function(D){return $view.hookups[++hookupId]=D," data-view-id='"+hookupId+"'"},cached:{},cachedRenderers:{},cache:!0,register:function(D){this.types["."+D.suffix]=D,can$i[D.suffix]=$view[D.suffix]=function(O,B){var F,z;if(!B)return z=function(){return F||(D.fragRenderer?F=D.fragRenderer(null,O):F=makeRenderer(D.renderer(null,O))),F.apply(this,arguments)},z.render=function(){var U=D.renderer(null,O);return U.apply(U,arguments)},z;var G=function(){return F||(D.fragRenderer?F=D.fragRenderer(O,B):F=D.renderer(O,B)),F.apply(this,arguments)};return D.fragRenderer?$view.preload(O,G):$view.preloadStringRenderer(O,G)}},types:{},ext:".ejs",registerScript:function(D,O,B){return"can.view.preloadStringRenderer('"+O+"',"+$view.types["."+D].script(O,B)+");"},preload:function(D,O){var B=$view.cached[D]=new can$i.Deferred().resolve(function(F,z){return O.call(F,F,z)});return B.__view_id=D,$view.cachedRenderers[D]=O,O},preloadStringRenderer:function(D,O){return this.preload(D,makeRenderer(O))},render:function(D,O,B,F,z){return can$i.view.renderAs("string",D,O,B,F,z)},renderTo:function(D,O,B,F,z){return(D==="string"&&O.render?O.render:O)(B,F,z)},renderAs:function(D,O,B,F,z,G){z!==void 0&&typeof z.expression=="string"&&(G=z,z=void 0),isFunction(F)&&(z=F,F=void 0);var U=getDeferreds(B),Y,Q,ne,oe;if(U.length)return Y=new can$i.Deferred,Q=can$i.extend({},B),U.push(getRenderer(O,!0)),can$i.when.apply(can$i,U).then(function(fe){var we=makeArray(arguments),X=we.pop(),ve;if(can$i.isPromise(B))Q=usefulPart(fe);else for(var de in B)can$i.isPromise(B[de])&&(Q[de]=usefulPart(we.shift()));ve=can$i.view.renderTo(D,X,Q,F,G),Y.resolve(ve,Q),z&&z(ve,Q)},function(){Y.reject.apply(Y,arguments)}),Y;if(ne=isFunction(z),Y=can$i.__notObserve(getRenderer)(O,ne),ne)oe=Y,Y.then(function(fe){z(B?can$i.view.renderTo(D,fe,B,F,G):fe)});else if(Y.state()==="resolved"&&Y.__view_id){var ce=$view.cachedRenderers[Y.__view_id];return B?can$i.view.renderTo(D,ce,B,F,G):ce}else Y.then(function(fe){oe=B?can$i.view.renderTo(D,fe,B,F,G):fe});return oe},registerView:function(D,O,B,F){var z=typeof B=="object"?B:$view.types[B||$view.ext],G;return z.fragRenderer?G=z.fragRenderer(D,O):G=makeRenderer(z.renderer(D,O)),F=F||new can$i.Deferred,$view.cache&&($view.cached[D]=F,F.__view_id=D,$view.cachedRenderers[D]=G),F.resolve(G)},simpleHelper:function(D){return function(){var O=[],B=arguments;return can$i.each(B,function(F,z){if(z<=B.length){for(;F&&F.isComputed;)F=F();O.push(F)}}),D.apply(this,O)}}});var view=can$i;/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$h=util,makeComputeData=compute_data;function Scope(D,O,B){this._context=D,this._parent=O,this._meta=B||{},this.__cache={}}can$h.simpleExtend(Scope,{read:can$h.compute.read,Refs:can$h.Map.extend({shortName:"ReferenceMap"},{}),refsScope:function(){return new can$h.view.Scope(new this.Refs)}}),can$h.simpleExtend(Scope.prototype,{add:function(D,O){return D!==this._context?new this.constructor(D,this,O):this},read:function(D,O){if(D==="%root")return{value:this.getRoot()};var B=D.substr(0,2)==="./",F=D.substr(0,3)==="../",z=D==="."||D==="this",G=D==="..",U=B||F||z||G;if(U&&this._meta.notContext)return this._parent.read(D,O);var Y;if(B)Y=!0,D=D.substr(2);else if(F||G){for(var Q=this._parent;Q._meta.notContext;)Q=Q._parent;return G?{value:Q._context}:Q.read(D.substr(3)||".",O)}else if(z)return{value:this._context};var ne=can$h.compute.read.reads(D);return ne[0].key.charAt(0)==="*"?this.getRefs()._read(ne,O,!0):this._read(ne,O,Y)},_read:function(D,O,B){for(var F=this,z,G=[],U,Y,Q=-1,ne,oe,ce=can$h.simpleExtend({foundObservable:function(ve,de){U=ve,Y=D.slice(de)},earlyExit:function(ve,de){de>Q&&(oe=U,ne=Y,Q=de)}},O);F;){if(z=F._context,z!==null&&(typeof z=="object"||typeof z=="function")){var fe=can$h.__trapObserves(),we=can$h.compute.read(z,D,ce),X=fe();if(we.value!==void 0)return can$h.__observes(X),{scope:F,rootObserve:U,value:we.value,reads:Y};G.push.apply(G,X)}B?F=null:F=F._parent}return can$h.__observes(G),{setRoot:oe,reads:ne,value:void 0}},get:can$h.__notObserve(function(D,O){O=can$h.simpleExtend({isArgument:!0},O);var B=this.read(D,O);return B.value}),getScope:function(D){for(var O=this;O;){if(D(O))return O;O=O._parent}},getContext:function(D){var O=this.getScope(D);return O&&O._context},getRefs:function(){return this.getScope(function(D){return D._context instanceof Scope.Refs})},getRoot:function(){for(var D=this,O=this;D._parent;)O=D,D=D._parent;return D._context instanceof Scope.Refs&&(D=O),D._context},set:function(D,O,B){var F=D.lastIndexOf("."),z=D.lastIndexOf("/"),G,U;if(z>F?(G=D.substring(0,z),U=D.substring(z+1,D.length)):F!==-1?(G=D.substring(0,F),U=D.substring(F+1,D.length)):(G=".",U=D),D.charAt(0)==="*")can$h.compute.set(this.getRefs()._context,D,O,B);else{var Y=this.read(G,B).value;can$h.compute.set(Y,U,O,B)}},attr:can$h.__notObserve(function(D,O,B){return B=can$h.simpleExtend({isArgument:!0},B),arguments.length===2?this.set(D,O,B):this.get(D,B)}),computeData:function(D,O){return makeComputeData(this,D,O)},compute:function(D,O){return this.computeData(D,O).compute},cloneFromRef:function(){for(var D=[],O=this,B,F;O;){if(B=O._context,B instanceof Scope.Refs){F=O._parent;break}D.unshift(B),O=O._parent}return F?(can$h.each(D,function(z){F=F.add(z)}),F):this}}),can$h.view.Scope=Scope;function Options$1(D,O,B){!D.helpers&&!D.partials&&!D.tags&&(D={helpers:D}),Scope.call(this,D,O,B)}Options$1.prototype=new Scope,Options$1.prototype.constructor=Options$1,can$h.view.Options=Options$1;/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$g=util,doc=typeof document<"u"?document:null,selectsCommentNodes=doc&&function(){return can$g.$(document.createComment("~")).length===1}(),elements$4={tagToContentPropMap:{option:doc&&"textContent"in document.createElement("option")?"textContent":"innerText",textarea:"value"},attrMap:can$g.attr.map,attrReg:/([^\s=]+)[\s]*=[\s]*/,defaultValue:can$g.attr.defaultValue,tagMap:{"":"span",colgroup:"col",table:"tbody",tr:"td",ol:"li",ul:"li",tbody:"tr",thead:"tr",tfoot:"tr",select:"option",optgroup:"option"},reverseTagMap:{col:"colgroup",tr:"tbody",option:"select",td:"tr",th:"tr",li:"ul"},selfClosingTags:{col:!0},getParentNode:function(D,O){return O&&D.parentNode.nodeType===11?O:D.parentNode},setAttr:can$g.attr.set,getAttr:can$g.attr.get,removeAttr:can$g.attr.remove,contentText:function(D){return typeof D=="string"?D:!D&&D!==0?"":""+D},after:function(D,O){var B=D[D.length-1];B.nextSibling?can$g.insertBefore(B.parentNode,O,B.nextSibling,can$g.document):can$g.appendChild(B.parentNode,O,can$g.document)},replace:function(D,O){var B,F=D[0].parentNode;F.nodeName.toUpperCase()==="SELECT"&&F.selectedIndex>=0&&(B=F.value),elements$4.after(D,O),can$g.remove(can$g.$(D)).length<D.length&&!selectsCommentNodes&&can$g.each(D,function(z){z.nodeType===8&&z.parentNode.removeChild(z)}),B!==void 0&&(F.value=B)}};can$g.view.elements=elements$4;var elements_1=elements$4;/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$f=util,attr=can$f.view.attr=function(D,O){if(O)typeof D=="string"?attributes[D]=O:regExpAttributes.push({match:D,handler:O});else{var B=attributes[D];if(!B)for(var F=0,z=regExpAttributes.length;F<z;F++){var G=regExpAttributes[F];if(G.match.test(D)){B=G.handler;break}}return B}},attributes={},regExpAttributes=[],automaticCustomElementCharacters=/[-\:]/,tag=can$f.view.tag=function(D,O){if(O)can$f.global.html5&&(can$f.global.html5.elements+=" "+D,can$f.global.html5.shivDocument()),tags[D.toLowerCase()]=O;else{var B=tags[D.toLowerCase()];return!B&&automaticCustomElementCharacters.test(D)&&(B=function(){}),B}},tags={};can$f.view.callbacks={_tags:tags,_attributes:attributes,_regExpAttributes:regExpAttributes,tag,attr,tagHandler:function(D,O,B){var F=B.options.get("tags."+O,{proxyMethods:!1}),z=F||tags[O],G=B.scope,U;if(z?U=can$f.__notObserve(z)(D,B):U=G,U&&B.subtemplate){G!==U&&(G=G.add(U));var Y=B.subtemplate(G,B.options),Q=typeof Y=="string"?can$f.view.frag(Y):Y;can$f.appendChild(D,Q)}}};var callbacks=can$f.view.callbacks;/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$e=view,elements$3=elements_1,viewCallbacks$1=callbacks,newLine$1=/(\r|\n)+/g,notEndTag=/\//,clean=function(D){return D.split("\\").join("\\\\").split(`
`).join("\\n").split('"').join('\\"').split("	").join("\\t")},getTag=function(D,O,B){if(D)return D;for(;B<O.length;){if(O[B]==="<"&&!notEndTag.test(O[B+1]))return elements$3.reverseTagMap[O[B+1]]||"span";B++}return""},bracketNum=function(D){return--D.split("{").length- --D.split("}").length},myEval=function(script){eval(script)},attrReg=/([^\s]+)[\s]*=[\s]*$/,startTxt="var ___v1ew = [];",finishTxt="return ___v1ew.join('')",put_cmd=`___v1ew.push(
`,insert_cmd=put_cmd,htmlTag=null,quote=null,beforeQuote=null,rescan=null,getAttrName=function(){var D=beforeQuote.match(attrReg);return D&&D[1]},status=function(){return quote?"'"+getAttrName()+"'":htmlTag?1:0},top=function(D){return D[D.length-1]},Scanner;can$e.view.Scanner=Scanner=function(D){can$e.extend(this,{text:{},tokens:[]},D),this.text.options=this.text.options||"",this.tokenReg=[],this.tokenSimple={"<":"<",">":">",'"':'"',"'":"'"},this.tokenComplex=[],this.tokenMap={};for(var O=0,B;B=this.tokens[O];O++)B[2]?(this.tokenReg.push(B[2]),this.tokenComplex.push({abbr:B[1],re:new RegExp(B[2]),rescan:B[3]})):(this.tokenReg.push(B[1]),this.tokenSimple[B[1]]=B[0]),this.tokenMap[B[0]]=B[1];this.tokenReg=new RegExp("("+this.tokenReg.slice(0).concat(["<",">",'"',"'"]).join("|")+")","g")},Scanner.prototype={helpers:[],scan:function(D,O){var B=[],F=0,z=this.tokenSimple,G=this.tokenComplex;D=D.replace(newLine$1,`
`),this.transform&&(D=this.transform(D)),D.replace(this.tokenReg,function(ht,st){var ft=arguments[arguments.length-2];if(ft>F&&B.push(D.substring(F,ft)),z[ht])B.push(ht);else for(var bt=0,Me;Me=G[bt];bt++)if(Me.re.test(ht)){B.push(Me.abbr),Me.rescan&&B.push(Me.rescan(st));break}F=ft+st.length}),F<D.length&&B.push(D.substr(F));var U="",Y=[startTxt+(this.text.start||"")],Q=function(ht,st){Y.push(put_cmd,'"',clean(ht),'"'+(st||"")+");")},ne=[],oe,ce=null,fe=!1,we={attributeHookups:[],tagHookups:[],lastTagHookup:""},X=function(){we.lastTagHookup=we.tagHookups.pop()+we.tagHookups.length},ve="",de=[],Ae=!1,Se,Pe=!1,ke=0,ye,be=this.tokenMap,Te;for(htmlTag=quote=beforeQuote=null;(ye=B[ke++])!==void 0;){if(ce===null)switch(ye){case be.left:case be.escapeLeft:case be.returnLeft:fe=htmlTag&&1;case be.commentLeft:ce=ye,U.length&&Q(U),U="";break;case be.escapeFull:fe=htmlTag&&1,rescan=1,ce=be.escapeLeft,U.length&&Q(U),rescan=B[ke++],U=rescan.content||rescan,rescan.before&&Q(rescan.before),B.splice(ke,0,be.right);break;case be.commentFull:break;case be.templateLeft:U+=be.left;break;case"<":B[ke].indexOf("!--")!==0&&(htmlTag=1,fe=0),U+=ye;break;case">":htmlTag=0;var Ie=U.substr(U.length-1)==="/"||U.substr(U.length-2)==="--",je="";if(we.attributeHookups.length&&(je="attrs: ['"+we.attributeHookups.join("','")+"'], ",we.attributeHookups=[]),ve+we.tagHookups.length!==we.lastTagHookup&&ve===top(we.tagHookups))Ie&&(U=U.substr(0,U.length-1)),Y.push(put_cmd,'"',clean(U),'"',",can.view.pending({tagName:'"+ve+"',"+je+"scope: "+(this.text.scope||"this")+this.text.options),Ie?(Y.push("}));"),U="/>",X()):B[ke]==="<"&&B[ke+1]==="/"+ve?(Y.push("}));"),U=ye,X()):(Y.push(",subtemplate: function("+this.text.argNames+`){
`+startTxt+(this.text.start||"")),U="");else if(fe||!Ae&&elements$3.tagToContentPropMap[de[de.length-1]]||je){var De=",can.view.pending({"+je+"scope: "+(this.text.scope||"this")+this.text.options+'}),"';Ie?Q(U.substr(0,U.length-1),De+'/>"'):Q(U,De+'>"'),U="",fe=0}else U+=ye;(Ie||Ae)&&(de.pop(),ve=de[de.length-1],Ae=!1),we.attributeHookups=[];break;case"'":case'"':if(htmlTag){if(quote&&quote===ye){quote=null;var We=getAttrName();if(viewCallbacks$1.attr(We)&&we.attributeHookups.push(We),Pe){U+=ye,Q(U),Y.push(finishTxt,`}));
`),U="",Pe=!1;break}}else if(quote===null&&(quote=ye,beforeQuote=oe,Te=getAttrName(),ve==="img"&&Te==="src"||Te==="style")){Q(U.replace(attrReg,"")),U="",Pe=!0,Y.push(insert_cmd,"can.view.txt(2,'"+getTag(ve,B,ke)+"',"+status()+",this,function(){",startTxt),Q(Te+"="+ye);break}}default:if(oe==="<"){ve=ye.substr(0,3)==="!--"?"!--":ye.split(/\s/)[0];var et=!1,Xe;ve.indexOf("/")===0&&(et=!0,Xe=ve.substr(1)),et?(top(de)===Xe&&(ve=Xe,Ae=!0),top(we.tagHookups)===Xe&&(Q(U.substr(0,U.length-1)),Y.push(finishTxt+"}}) );"),U="><",X())):(ve.lastIndexOf("/")===ve.length-1&&(ve=ve.substr(0,ve.length-1)),ve!=="!--"&&viewCallbacks$1.tag(ve)&&(ve==="content"&&elements$3.tagMap[top(de)]&&(ye=ye.replace("content",elements$3.tagMap[top(de)])),we.tagHookups.push(ve)),de.push(ve))}U+=ye;break}else switch(ye){case be.right:case be.returnRight:switch(ce){case be.left:Se=bracketNum(U),Se===1?(Y.push(insert_cmd,"can.view.txt(0,'"+getTag(ve,B,ke)+"',"+status()+",this,function(){",startTxt,U),ne.push({before:"",after:finishTxt+`}));
`})):(F=ne.length&&Se===-1?ne.pop():{after:";"},F.before&&Y.push(F.before),Y.push(U,";",F.after));break;case be.escapeLeft:case be.returnLeft:Se=bracketNum(U),Se&&ne.push({before:finishTxt,after:`}));
`});for(var Ke=ce===be.escapeLeft?1:0,ot={insert:insert_cmd,tagName:getTag(ve,B,ke),status:status(),specialAttribute:Pe},Je=0;Je<this.helpers.length;Je++){var Ze=this.helpers[Je];if(Ze.name.test(U)){U=Ze.fn(U,ot),Ze.name.source===/^>[\s]*\w*/.source&&(Ke=0);break}}typeof U=="object"?U.startTxt&&U.end&&Pe?Y.push(insert_cmd,"can.view.toStr( ",U.content,"() ) );"):(U.startTxt?Y.push(insert_cmd,`can.view.txt(
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
//# sourceURL=`+O+".js"),lt}},can$e.view.pending=function(D){var O=can$e.view.getHooks();return can$e.view.hook(function(B){can$e.each(O,function(F){F(B)}),D.templateType="legacy",D.tagName&&viewCallbacks$1.tagHandler(B,D.tagName,D),can$e.each(D&&D.attrs||[],function(F){D.attributeName=F;var z=viewCallbacks$1.attr(F);z&&z(B,D)})})},can$e.view.tag("content",function(D,O){return O.scope}),can$e.view.Scanner=Scanner;/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$d=util,canExpando=!0;try{document.createTextNode("")._=0}catch(D){canExpando=!1}var nodeMap={},textNodeMap={},expando="ejs_"+Math.random(),_id=0,id=function(D,O){var B=O||textNodeMap,F=readId(D,B);return F||(canExpando||D.nodeType!==3?(++_id,D[expando]=(D.nodeName?"element_":"obj_")+_id):(++_id,B["text_"+_id]=D,"text_"+_id))},readId=function(D,O){if(canExpando||D.nodeType!==3)return D[expando];for(var B in O)if(O[B]===D)return B},splice$1=[].splice,push=[].push,itemsInChildListTree=function(D){for(var O=0,B=0,F=D.length;B<F;B++){var z=D[B];z.nodeType?O++:O+=itemsInChildListTree(z)}return O},replacementMap=function(D,O){for(var B={},F=0,z=D.length;F<z;F++){var G=nodeLists$1.first(D[F]);B[id(G,O)]=D[F]}return B},addUnfoundAsDeepChildren=function(D,O,B){for(var F in O)B[F]||D.newDeepChildren.push(O[F])},nodeLists$1={id,update:function(D,O){var B=nodeLists$1.unregisterChildren(D);O=can$d.makeArray(O);var F=D.length;return splice$1.apply(D,[0,F].concat(O)),D.replacements?(nodeLists$1.nestReplacements(D),D.deepChildren=D.newDeepChildren,D.newDeepChildren=[]):nodeLists$1.nestList(D),B},nestReplacements:function(D){for(var O=0,B={},F=replacementMap(D.replacements,B),z=D.replacements.length,G={};O<D.length&&z;){var U=D[O],Y=readId(U,B),Q=F[Y];Q&&(D.splice(O,itemsInChildListTree(Q),Q),G[Y]=!0,z--),O++}z&&addUnfoundAsDeepChildren(D,F,G),D.replacements=[]},nestList:function(D){for(var O=0;O<D.length;){var B=D[O],F=nodeMap[id(B)];F?F!==D&&D.splice(O,itemsInChildListTree(F),F):nodeMap[id(B)]=D,O++}},last:function(D){var O=D[D.length-1];return O.nodeType?O:nodeLists$1.last(O)},first:function(D){var O=D[0];return O.nodeType?O:nodeLists$1.first(O)},flatten:function(D){for(var O=[],B=0;B<D.length;B++){var F=D[B];F.nodeType?O.push(F):O.push.apply(O,nodeLists$1.flatten(F))}return O},register:function(D,O,B,F){return can$d.cid(D),D.unregistered=O,D.parentList=B,D.nesting=B&&typeof B.nesting<"u"?B.nesting+1:0,B?(D.deepChildren=[],D.newDeepChildren=[],D.replacements=[],B!==!0&&(F?B.replacements.push(D):B.newDeepChildren.push(D))):nodeLists$1.nestList(D),D},unregisterChildren:function(D){var O=[];return can$d.each(D,function(B){B.nodeType?(D.replacements||delete nodeMap[id(B)],O.push(B)):push.apply(O,nodeLists$1.unregister(B,!0))}),can$d.each(D.deepChildren,function(B){nodeLists$1.unregister(B,!0)}),O},unregister:function(D,O){var B=nodeLists$1.unregisterChildren(D,!0);if(D.unregistered){var F=D.unregistered;if(D.replacements=D.unregistered=null,!O){var z=D.parentList&&D.parentList.deepChildren;if(z){var G=z.indexOf(D);G!==-1&&z.splice(G,1)}}F()}return B},nodeMap};can$d.view.nodeLists=nodeLists$1;var node_lists=nodeLists$1;/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */function each(D,O){for(var B=0;B<D.length;B++)O(D[B],B)}function makeMap(D){var O={},B=D.split(",");return each(B,function(F){O[F]=!0}),O}function handleIntermediate(D,O){for(var B=0,F=D.length;B<F;B++){var z=D[B];O[z.tokenType].apply(O,z.args)}return D}var alphaNumeric="A-Za-z0-9",alphaNumericHU="-:_"+alphaNumeric,attributeNames="[^=>\\s\\/]+",spaceEQspace="\\s*=\\s*",singleCurly="\\{[^\\}\\{]\\}",doubleCurly="\\{\\{[^\\}]\\}\\}\\}?",attributeEqAndValue="(?:"+spaceEQspace+"(?:(?:"+doubleCurly+")|(?:"+singleCurly+`)|(?:"[^"]*")|(?:'[^']*')|[^>\\s]+))?`,matchStash="\\{\\{[^\\}]*\\}\\}\\}?",stash="\\{\\{([^\\}]*)\\}\\}\\}?",startTag=new RegExp("^<(["+alphaNumeric+"]["+alphaNumericHU+"]*)((?:\\s*(?:(?:(?:"+attributeNames+")?"+attributeEqAndValue+")|(?:"+matchStash+")+))*)\\s*(\\/?)>"),endTag=new RegExp("^<\\/(["+alphaNumericHU+"]+)[^>]*>"),mustache=new RegExp(stash,"g"),txtBreak=/<|\{\{/,space=/\s/,empty=makeMap("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed"),block=makeMap("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),inline=makeMap("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),caseMatters=makeMap("altGlyph,altGlyphDef,altGlyphItem,animateColor,animateMotion,animateTransform,clipPath,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,foreignObject,glyphRef,linearGradient,radialGradient,textPath"),closeSelf=makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),special$1=makeMap("script"),tokenTypes="start,end,close,attrStart,attrEnd,attrValue,chars,comment,special,done".split(","),fn=function(){},HTMLParser=function(D,O,B){if(typeof D=="object")return handleIntermediate(D,O);var F=[];O=O||{},B&&each(tokenTypes,function(ve){var de=O[ve]||fn;O[ve]=function(){de.apply(this,arguments)!==!1&&F.push({tokenType:ve,args:[].slice.call(arguments,0)})}});function z(ve,de,Ae,Se){if(de=caseMatters[de]?de:de.toLowerCase(),block[de]&&!inline[de])for(var Pe=ce.last();Pe&&inline[Pe]&&!block[Pe];)G("",Pe),Pe=ce.last();closeSelf[de]&&ce.last()===de&&G("",de),Se=empty[de]||!!Se,O.start(de,Se),Se||ce.push(de),HTMLParser.parseAttrs(Ae,O),O.end(de,Se)}function G(ve,de){var Ae;if(!de)Ae=0;else for(de=caseMatters[de]?de:de.toLowerCase(),Ae=ce.length-1;Ae>=0&&ce[Ae]!==de;Ae--);if(Ae>=0){for(var Se=ce.length-1;Se>=Ae;Se--)O.close&&O.close(ce[Se]);ce.length=Ae}}function U(ve,de){O.special&&O.special(de)}var Y=function(){we&&O.chars&&O.chars(we),we=""},Q,ne,oe,ce=[],fe=D,we="";for(ce.last=function(){return this[this.length-1]};D;){if(ne=!0,!ce.last()||!special$1[ce.last()]){if(D.indexOf("<!--")===0?(Q=D.indexOf("-->"),Q>=0&&(Y(),O.comment&&O.comment(D.substring(4,Q)),D=D.substring(Q+3),ne=!1)):D.indexOf("</")===0?(oe=D.match(endTag),oe&&(Y(),D=D.substring(oe[0].length),oe[0].replace(endTag,G),ne=!1)):D.indexOf("<")===0?(oe=D.match(startTag),oe&&(Y(),D=D.substring(oe[0].length),oe[0].replace(startTag,z),ne=!1)):D.indexOf("{{")===0&&(oe=D.match(mustache),oe&&(Y(),D=D.substring(oe[0].length),oe[0].replace(mustache,U))),ne){Q=D.search(txtBreak),Q===0&&D===fe&&(we+=D.charAt(0),D=D.substr(1),Q=D.search(txtBreak));var X=Q<0?D:D.substring(0,Q);D=Q<0?"":D.substring(Q),X&&(we+=X)}}else D=D.replace(new RegExp("([\\s\\S]*?)</"+ce.last()+"[^>]*>"),function(ve,de){return de=de.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),O.chars&&O.chars(de),""}),G("",ce.last());if(D===fe)throw new Error("Parse Error: "+D);fe=D}return Y(),G(),O.done(),F},callAttrStart=function(D,O,B,F){D.attrStart=F.substring(typeof D.nameStart=="number"?D.nameStart:O,O),B.attrStart(D.attrStart),D.inName=!1},callAttrEnd=function(D,O,B,F){D.valueStart!==void 0&&D.valueStart<O&&B.attrValue(F.substring(D.valueStart,O)),B.attrEnd(D.attrStart),D.attrStart=void 0,D.valueStart=void 0,D.inValue=!1,D.inName=!1,D.lookingForEq=!1,D.inQuote=!1,D.lookingForName=!0};HTMLParser.parseAttrs=function(D,O){if(D){for(var B=0,F,z={inDoubleCurly:!1,inName:!1,nameStart:void 0,inValue:!1,valueStart:void 0,inQuote:!1,attrStart:void 0,lookingForName:!0,lookingForValue:!1,lookingForEq:!1};B<D.length;){F=B;var G=D.charAt(B),U=D.charAt(B+1),Y=D.charAt(B+2);if(B++,G==="{"&&U==="{")z.inValue&&F>z.valueStart?O.attrValue(D.substring(z.valueStart,F)):z.inName&&z.nameStart<F?(callAttrStart(z,F,O,D),callAttrEnd(z,F,O,D)):z.lookingForValue?z.inValue=!0:z.lookingForEq&&z.attrStart&&callAttrEnd(z,F,O,D),z.inDoubleCurly=!0,z.doubleCurlyStart=F+2,B++;else if(z.inDoubleCurly){if(G==="}"&&U==="}"){var Q=Y==="}"?1:0;O.special(D.substring(z.doubleCurlyStart,F)),z.inDoubleCurly=!1,z.inValue&&(z.valueStart=F+2+Q),B+=1+Q}}else z.inValue?z.inQuote?G===z.inQuote&&callAttrEnd(z,F,O,D):space.test(G)&&callAttrEnd(z,F,O,D):G==="="&&(z.lookingForEq||z.lookingForName||z.inName)?(z.attrStart||callAttrStart(z,F,O,D),z.lookingForValue=!0,z.lookingForEq=!1,z.lookingForName=!1):z.inName?space.test(G)&&(callAttrStart(z,F,O,D),z.lookingForEq=!0):z.lookingForName?space.test(G)||(z.attrStart&&callAttrEnd(z,F,O,D),z.nameStart=F,z.inName=!0):z.lookingForValue&&(space.test(G)||(z.lookingForValue=!1,z.inValue=!0,G==="'"||G==='"'?(z.inQuote=G,z.valueStart=F+1):z.valueStart=F))}z.inName?(callAttrStart(z,F+1,O,D),callAttrEnd(z,F+1,O,D)):(z.lookingForEq||z.inValue)&&callAttrEnd(z,F+1,O,D)}};var parser$1=HTMLParser;/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var slice=[].slice,diff$1=function(D,O){for(var B=0,F=0,z=D.length,G=O.length,U=[];B<z&&F<G;){var Y=D[B],Q=O[F];if(Y===Q){B++,F++;continue}if(F+1<G&&O[F+1]===Y){U.push({index:F,deleteCount:0,insert:[O[F]]}),B++,F+=2;continue}else if(B+1<z&&D[B+1]===Q){U.push({index:F,deleteCount:1,insert:[]}),B+=2,F++;continue}else return U.push({index:F,deleteCount:z-B,insert:slice.call(O,F)}),U}return F===G&&B===z||U.push({index:F,deleteCount:z-B,insert:slice.call(O,F)}),U};/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$c=util,elements$2=elements_1,nodeLists=node_lists,parser=parser$1,diff=diff$1;elements$2=elements$2||can$c.view.elements,nodeLists=nodeLists||can$c.view.NodeLists,parser=parser||can$c.view.parser;var setup=function(D,O,B){var F=!1,z=function(){return F||(F=!0,B(G),can$c.unbind.call(D,"removed",z)),!0},G={teardownCheck:function(U){return U?!1:z()}};return can$c.bind.call(D,"removed",z),O(G),G},getChildNodes=function(D){var O=D.childNodes;if("length"in O)return O;for(var B=D.firstChild,F=[];B;)F.push(B),B=B.nextSibling;return F},listen=function(D,O,B){return setup(D,function(){O.computeInstance.bind("change",B)},function(F){O.computeInstance.unbind("change",B),F.nodeList&&nodeLists.unregister(F.nodeList)})},getAttributeParts=function(D){var O={},B;return parser.parseAttrs(D,{attrStart:function(F){O[F]="",B=F},attrValue:function(F){O[B]+=F},attrEnd:function(){}}),O},splice=[].splice,isNode=function(D){return D&&D.nodeType},addTextNodeIfNoChildren=function(D){D.firstChild||D.appendChild(D.ownerDocument.createTextNode(""))},getLiveFragment=function(D){var O=typeof D=="string",B=can$c.frag(D);return O?can$c.view.hookup(B):B},renderAndAddToNodeLists=function(D,O,B,F,z){var G=[];O&&(nodeLists.register(G,null,!0,!0),G.parentList=O,G.expression="#each SUBEXPRESSION");var U=B.apply(F,z.concat([G])),Y=getLiveFragment(U),Q=can$c.makeArray(getChildNodes(Y));return O?(nodeLists.update(G,Q),D.push(G)):D.push(nodeLists.register(Q)),Y},removeFromNodeList=function(D,O,B){var F=D.splice(O+1,B),z=[];return can$c.each(F,function(G){var U=nodeLists.unregister(G);[].push.apply(z,U)}),z},addFalseyIfEmpty=function(D,O,B,F){if(O&&D.length===0){var z=[],G=renderAndAddToNodeLists(z,F,O,D,[D]);elements$2.after([B[0]],G),B.push(z[0])}},childMutationCallbacks={},live$3={registerChildMutationCallback:function(D,O){if(O)childMutationCallbacks[D]=O;else return childMutationCallbacks[D]},callChildMutationCallback:function(D){var O=D&&childMutationCallbacks[D.nodeName.toLowerCase()];O&&O(D)},list:function(D,O,B,F,z,G,U){var Y=G||[D],Q=[],ne=!1,oe=!1,ce=function(ke,ye,be){if(ne){var Te=ve.ownerDocument.createDocumentFragment(),Ie=[],je=[];can$c.each(ye,function(ot,Je){var Ze=can$c.compute(Je+be),vt=renderAndAddToNodeLists(Ie,G,B,F,[ot,Ze]);Te.appendChild(vt),je.push(Ze)});var De=be+1;if(!Q.length){var We=removeFromNodeList(Y,0,Y.length-1);can$c.remove(can$c.$(We))}if(!Y[De])elements$2.after(De===1?[ve]:[nodeLists.last(Y[De-1])],Te);else{var et=nodeLists.first(Y[De]);can$c.insertBefore(et.parentNode,Te,et)}splice.apply(Y,[De,0].concat(Ie)),splice.apply(Q,[be,0].concat(je));for(var Xe=be+je.length,Ke=Q.length;Xe<Ke;Xe++)Q[Xe](Xe);ke.callChildMutationCallback!==!1&&live$3.callChildMutationCallback(ve.parentNode)}},fe=function(ke,ye,be){we({},{length:1},be,!0),ce({},[ye],be)},we=function(ke,ye,be,Te,Ie){if(ne&&!(!Te&&Pe.teardownCheck(ve.parentNode))){be<0&&(be=Q.length+be);var je=removeFromNodeList(Y,be,ye.length);Q.splice(be,ye.length);for(var De=be,We=Q.length;De<We;De++)Q[De](De);Ie?nodeLists.unregister(Y):(addFalseyIfEmpty(de,U,Y,G),can$c.remove(can$c.$(je)),ke.callChildMutationCallback!==!1&&live$3.callChildMutationCallback(ve.parentNode))}},X=function(ke,ye,be,Te){if(ne){be=be+1,Te=Te+1;var Ie=Y[be],je=can$c.frag(nodeLists.flatten(Y[Te])),De;Te<be?De=nodeLists.last(Ie).nextSibling:De=nodeLists.first(Ie);var We=Y[0].parentNode;We.insertBefore(je,De);var et=Y[Te];[].splice.apply(Y,[Te,1]),[].splice.apply(Y,[be,0,et]),be=be-1,Te=Te-1;var Xe=Q[Te];[].splice.apply(Q,[Te,1]),[].splice.apply(Q,[be,0,Xe]);var Ke=Math.min(Te,be),ot=Q.length;for(ot;Ke<ot;Ke++)Q[Ke](Ke);ke.callChildMutationCallback!==!1&&live$3.callChildMutationCallback(ve.parentNode)}},ve=D.ownerDocument.createTextNode(""),de,Ae=function(ke){de&&de.unbind&&de.unbind("add",ce).unbind("set",fe).unbind("remove",we).unbind("move",X),we({callChildMutationCallback:!!ke},{length:Y.length-1},0,!0,ke)},Se=function(ke,ye,be){if(!oe){if(ne=!0,ye&&be){de=ye||[];var Te=diff(be,ye);be.unbind&&be.unbind("add",ce).unbind("set",fe).unbind("remove",we).unbind("move",X);for(var Ie=0,je=Te.length;Ie<je;Ie++){var De=Te[Ie];De.deleteCount&&we({callChildMutationCallback:!1},{length:De.deleteCount},De.index,!0),De.insert.length&&ce({callChildMutationCallback:!1},De.insert,De.index)}}else be&&Ae(),de=ye||[],ce({callChildMutationCallback:!1},de,0),addFalseyIfEmpty(de,U,Y,G);live$3.callChildMutationCallback(ve.parentNode),ne=!1,de.bind&&de.bind("add",ce).bind("set",fe).bind("remove",we).bind("move",X),can$c.batch.afterPreviousEvents(function(){ne=!0})}};z=elements$2.getParentNode(D,z);var Pe=setup(z,function(){can$c.isFunction(O)&&O.bind("change",Se)},function(){can$c.isFunction(O)&&O.unbind("change",Se),Ae(!0)});G?(elements$2.replace(Y,ve),nodeLists.update(Y,[ve]),G.unregistered=function(){Pe.teardownCheck(),oe=!0}):live$3.replace(Y,ve,Pe.teardownCheck),Se({},can$c.isFunction(O)?O():O)},html:function(D,O,B,F){var z;B=elements$2.getParentNode(D,B),z=listen(B,O,function(Y,Q,ne){var oe=nodeLists.first(G).parentNode;oe&&U(Q);var ce=nodeLists.first(G).parentNode;z.teardownCheck(ce),live$3.callChildMutationCallback(ce)});var G=F||[D],U=function(Y){var Q=typeof Y=="function",ne=isNode(Y),oe=can$c.frag(Q?"":Y),ce=can$c.makeArray(G);addTextNodeIfNoChildren(oe),!ne&&!Q&&(oe=can$c.view.hookup(oe,B)),ce=nodeLists.update(G,getChildNodes(oe)),Q&&Y(oe.firstChild),elements$2.replace(ce,oe)};z.nodeList=G,F?F.unregistered=z.teardownCheck:nodeLists.register(G,z.teardownCheck),U(O())},replace:function(D,O,B){var F=D.slice(0),z=can$c.frag(O);return nodeLists.register(D,B),typeof O=="string"&&(z=can$c.view.hookup(z,D[0].parentNode)),nodeLists.update(D,getChildNodes(z)),elements$2.replace(F,z),D},text:function(D,O,B,F){var z=elements$2.getParentNode(D,B),G=listen(z,O,function(Y,Q,ne){typeof U.nodeValue!="unknown"&&(U.nodeValue=can$c.view.toStr(Q)),G.teardownCheck(U.parentNode)}),U=D.ownerDocument.createTextNode(can$c.view.toStr(O()));F?(F.unregistered=G.teardownCheck,G.nodeList=F,nodeLists.update(F,[U]),elements$2.replace([D],U)):G.nodeList=live$3.replace([D],U,G.teardownCheck)},setAttributes:function(D,O){var B=getAttributeParts(O);for(var F in B)can$c.attr.set(D,F,B[F])},attributes:function(D,O,B){var F={},z=function(G){var U=getAttributeParts(G),Y;for(Y in U){var Q=U[Y],ne=F[Y];Q!==ne&&can$c.attr.set(D,Y,Q),delete F[Y]}for(Y in F)elements$2.removeAttr(D,Y);F=U};listen(D,O,function(G,U){z(U)}),arguments.length>=3?F=getAttributeParts(B):z(O())},attributePlaceholder:"__!!__",attributeReplace:/__!!__/g,attribute:function(D,O,B){listen(D,B,function(ne,oe){elements$2.setAttr(D,O,Q.render())});var F=can$c.$(D),z;z=can$c.data(F,"hooks"),z||can$c.data(F,"hooks",z={});var G=String(elements$2.getAttr(D,O)),U=G.split(live$3.attributePlaceholder),Y=[],Q;Y.push(U.shift(),U.join(live$3.attributePlaceholder)),z[O]?z[O].computes.push(B):z[O]={render:function(){var ne=0,oe=G?G.replace(live$3.attributeReplace,function(){return elements$2.contentText(Q.computes[ne++]())}):elements$2.contentText(Q.computes[ne++]());return oe},computes:[B],batchNum:void 0},Q=z[O],Y.splice(1,0,B()),elements$2.setAttr(D,O,Y.join(""))},specialAttribute:function(D,O,B){listen(D,B,function(F,z){elements$2.setAttr(D,O,getValue$1(z))}),elements$2.setAttr(D,O,getValue$1(B()))},simpleAttribute:function(D,O,B){listen(D,B,function(F,z){elements$2.setAttr(D,O,z)}),elements$2.setAttr(D,O,B())}};live$3.attr=live$3.simpleAttribute,live$3.attrs=live$3.attributes,live$3.getAttributeParts=getAttributeParts;var newLine=/(\r|\n)+/g,getValue$1=function(D){var O=/^["'].*["']$/;return D=D.replace(elements$2.attrReg,"").replace(newLine,""),O.test(D)?D.substr(1,D.length-2):D};can$c.view.live=live$3;var live_1=live$3;/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$b=view,elements$1=elements_1,live$2=live_1,pendingHookups=[],tagChildren=function(D){var O=elements$1.tagMap[D]||"span";return O==="span"?"@@!!@@":"<"+O+">"+tagChildren(O)+"</"+O+">"},contentText=function(D,O){if(typeof D=="string")return D;if(!D&&D!==0)return"";var B=D.hookup&&function(F,z){D.hookup.call(D,F,z)}||typeof D=="function"&&D;return B?O?"<"+O+" "+can$b.view.hook(B)+"></"+O+">":(pendingHookups.push(B),""):""+D},contentEscape=function(D,O){return typeof D=="string"||typeof D=="number"?can$b.esc(D):contentText(D,O)},withinTemplatedSectionWithinAnElement=!1,emptyHandler=function(){},lastHookups;can$b.extend(can$b.view,{live:live$2,setupLists:function(){var D=can$b.view.lists,O;return can$b.view.lists=function(B,F){return O={list:B,renderer:F},Math.random()},function(){return can$b.view.lists=D,O}},getHooks:function(){var D=pendingHookups.slice(0);return lastHookups=D,pendingHookups=[],D},onlytxt:function(D,O){return contentEscape(O.call(D))},txt:function(D,O,B,F,z){var G=elements$1.tagMap[O]||"span",U=!1,Y,Q,ne,oe=emptyHandler,ce;if(withinTemplatedSectionWithinAnElement)Y=z.call(F);else{(typeof B=="string"||B===1)&&(withinTemplatedSectionWithinAnElement=!0);var fe=can$b.view.setupLists();oe=function(){ne.unbind("change",emptyHandler)},ne=can$b.compute(z,F,!1),ne.bind("change",emptyHandler),Q=fe(),Y=ne(),withinTemplatedSectionWithinAnElement=!1,U=ne.computeInstance.hasDependencies}if(Q)return oe(),"<"+G+can$b.view.hook(function(ve,de){live$2.list(ve,Q.list,Q.renderer,F,de)})+"></"+G+">";if(!U||typeof Y=="function")return oe(),(withinTemplatedSectionWithinAnElement||D===2||!D?contentText:contentEscape)(Y,B===0&&G);var we=elements$1.tagToContentPropMap[O];if(B===0&&!we){var X=!!elements$1.selfClosingTags[G];return"<"+G+can$b.view.hook(D&&typeof Y!="object"?function(ve,de){live$2.text(ve,ne,de),oe()}:function(ve,de){live$2.html(ve,ne,de),oe()})+(X?"/>":">"+tagChildren(G)+"</"+G+">")}else return B===1?(pendingHookups.push(function(ve){live$2.attributes(ve,ne,ne()),oe()}),ne()):D===2?(ce=B,pendingHookups.push(function(ve){live$2.specialAttribute(ve,ce,ne),oe()}),ne()):(ce=B===0?we:B,(B===0?lastHookups:pendingHookups).push(function(ve){live$2.attribute(ve,ce,ne),oe()}),live$2.attributePlaceholder)}});/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$a=util,Options=can$a.view.Options,utils$2={isArrayLike:function(D){return D&&D.splice&&typeof D.length=="number"},isObserveLike:function(D){return D instanceof can$a.Map||D&&!!D._get},emptyHandler:function(){},jsonParse:function(str){return str[0]==="'"?str.substr(1,str.length-2):str==="undefined"?void 0:can$a.global.JSON?JSON.parse(str):eval("("+str+")")},mixins:{last:function(){return this.stack[this.stack.length-1]},add:function(D){this.last().add(D)},subSectionDepth:function(){return this.stack.length-1}},convertToScopes:function(D,O,B,F,z,G,U){z&&(D.fn=this.makeRendererConvertScopes(z,O,B,F,U)),G&&(D.inverse=this.makeRendererConvertScopes(G,O,B,F,U))},makeRendererConvertScopes:function(D,O,B,F,z){var G=function(Y,Q,ne){return D(Y||O,Q,ne)},U=function(Y,Q,ne){Y!==void 0&&!(Y instanceof can$a.view.Scope)&&(Y=O.add(Y)),Q!==void 0&&!(Q instanceof Options)&&(Q=B.add(Q));var oe=G(Y,Q||B,ne||F);return oe};return z?U:can$a.__notObserve(U)},getItemsFragContent:function(D,O,B){for(var F=this.isObserveLike(D),z=[],G=F?D.attr("length"):D.length,U=0;U<G;U++){var Y={"%index":U,"@index":U},Q=F?D.attr(""+U):D[U];z.push(O.fn(B.add(Y,{notContext:!0}).add(Q)))}return z},Options};/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$9=util,utils$1=utils$2,live$1=live_1;live$1=live$1||can$9.view.live;var resolve=function(D){return utils$1.isObserveLike(D)&&utils$1.isArrayLike(D)&&D.attr("length")?D:can$9.isFunction(D)?D():D},resolveHash=function(D){var O={};for(var B in D){var F=D[B];F&&F.isComputed?O[B]=F():O[B]=F}return O},looksLikeOptions=function(D){return D&&typeof D.fn=="function"&&typeof D.inverse=="function"},helpers$1={each:function(D,O){var B=resolve(D),F=[],z,G,U;if(B instanceof can$9.List&&!O.stringOnly)return function(ne){var oe=[ne];oe.expression="live.list",can$9.view.nodeLists.register(oe,null,O.nodeList,!0),can$9.view.nodeLists.update(O.nodeList,[ne]);var ce=function(fe,we,X){return O.fn(O.scope.add({"%index":we,"@index":we},{notContext:!0}).add(fe),O.options,X)};live$1.list(ne,D,ce,O.context,ne.parentNode,oe,function(fe,we){return O.inverse(O.scope.add(fe),O.options,we)})};var Y=B;if(Y&&utils$1.isArrayLike(Y)){var Q=utils$1.getItemsFragContent(Y,O,O.scope);Array.prototype.push.apply(F,Q)}else if(utils$1.isObserveLike(Y))for(z=can$9.Map.keys(Y),U=0;U<z.length;U++)G=z[U],F.push(O.fn(O.scope.add({"%key":G,"@key":G},{notContext:!0}).add(Y[G])));else if(Y instanceof Object)for(G in Y)F.push(O.fn(O.scope.add({"%key":G,"@key":G},{notContext:!0}).add(Y[G])));return O.stringOnly?F.join(""):F},"@index":function(D,O){O||(O=D,D=0);var B=O.scope.attr("@index");return""+((can$9.isFunction(B)?B():B)+D)},if:function(D,O){var B;return can$9.isFunction(D)?B=can$9.compute.truthy(D)():B=!!resolve(D),B?O.fn(O.scope||this):O.inverse(O.scope||this)},is:function(){var D,O,B=arguments[arguments.length-1];if(arguments.length-2<=0)return B.inverse();var F=arguments,z=can$9.compute(function(){for(var G=0;G<F.length-1;G++){if(O=resolve(F[G]),O=can$9.isFunction(O)?O():O,G>0&&O!==D)return!1;D=O}return!0});return z()?B.fn():B.inverse()},eq:function(){return helpers$1.is.apply(this,arguments)},unless:function(D,O){return helpers$1.if.apply(this,[D,can$9.extend({},O,{fn:O.inverse,inverse:O.fn})])},with:function(D,O){var B=D;if(D=resolve(D),D)return O.fn(B)},log:function(D,O){typeof console<"u"&&console.log&&(O?console.log(D,O.context):console.log(D.context))},data:function(D){var O=arguments.length===2?this:arguments[1];return function(B){can$9.data(can$9.$(B),D,O||this.context)}},switch:function(D,O){resolve(D);var B=!1,F=O.helpers.add({case:function(z,G){if(!B&&resolve(D)===resolve(z))return B=!0,G.fn(G.scope||this)},default:function(z){if(!B)return z.fn(z.scope||this)}});return O.fn(O.scope,F)},joinBase:function(D){var O=[].slice.call(arguments),B=O.pop(),F=can$9.map(O,function(Q){var ne=resolve(Q);return can$9.isFunction(ne)?ne():ne}).join(""),z=B.helpers.attr("helpers.module"),G=z?z.uri:void 0,U=F[0]===".";if(U&&G)return can$9.joinURIs(G,F);var Y=can$9.baseURL||typeof System<"u"&&(System.renderingLoader&&System.renderingLoader.baseURL||System.baseURL)||location.pathname;return F[0]!=="/"&&Y[Y.length-1]!=="/"&&(Y+="/"),can$9.joinURIs(Y,F)},routeUrl:function(D,O){return D||(D={}),typeof D.fn=="function"&&typeof D.inverse=="function"&&(D=resolveHash(D.hash)),can$9.route.url(D,typeof O=="boolean"?O:void 0)},routeCurrent:function(D){var O=can$9.last(arguments),B=O&&looksLikeOptions(O);return O&&B&&!(O.exprData instanceof can$9.expression.Call)?can$9.route.current(resolveHash(D.hash||{}))?D.fn():D.inverse():can$9.route.current(looksLikeOptions(D)?{}:D||{})}};helpers$1.routeCurrent.callAsMethod=!0,helpers$1.eachOf=helpers$1.each;var registerHelper=function(D,O){helpers$1[D]=O},mustache_helpers={registerHelper,registerSimpleHelper:function(D,O){registerHelper(D,can$9.view.simpleHelper(O))},getHelper:function(D,O){var B=O&&O.get("helpers."+D,{proxyMethods:!1});if(B||(B=helpers$1[D]),B)return{fn:B}}};/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$8=util,utils=utils$2,mustacheHelpers=mustache_helpers,getKeyComputeData=function(D,O,B){var F=O.computeData(D,B);return can$8.compute.temporarilyBind(F.compute),F},lookupValue=function(D,O,B,F){var z=getKeyComputeData(D,O,F);return z.compute.computeInstance.hasDependencies?{value:z.compute,computeData:z}:{value:z.initialValue,computeData:z}},lookupValueOrHelper=function(D,O,B,F){var z=lookupValue(D,O,B,F);if(z.computeData.initialValue===void 0){D.charAt(0)==="@"&&D!=="@index"&&(D=D.substr(1));var G=mustacheHelpers.getHelper(D,B);z.helper=G&&G.fn}return z},convertToArgExpression=function(D){return!(D instanceof Arg)&&!(D instanceof Literal)&&!(D instanceof Hashes)?new Arg(D):D},Literal=function(D){this._value=D};Literal.prototype.value=function(){return this._value};var Lookup=function(D,O){this.key=D,this.rootExpr=O};Lookup.prototype.value=function(D,O){var B=lookupValueOrHelper(this.key,D,O);return this.isHelper=B.helper&&!B.helper.callAsMethod,B.helper||B.value};var ScopeLookup=function(D,O){Lookup.apply(this,arguments)};ScopeLookup.prototype.value=function(D,O){return lookupValue(this.key,D).value};var Arg=function(D,O){this.expr=D,this.modifiers=O||{},this.isCompute=!1};Arg.prototype.value=function(){return this.expr.value.apply(this.expr,arguments)};var Hashes=function(D){this.hashExprs=D};Hashes.prototype.value=function(){var D={};for(var O in this.hashExprs){var B=this.hashExprs[O],F=B.value.apply(B,arguments);D[O]={call:F&&F.isComputed&&(!B.modifiers||!B.modifiers.compute),value:F}}return can$8.compute(function(){var z={};for(var G in D)z[G]=D[G].call?D[G].value():D[G].value;return z})};var Call=function(D,O,B){B&&!can$8.isEmptyObject(B)&&O.push(new Hashes(B)),this.methodExpr=D,this.argExprs=can$8.map(O,convertToArgExpression)};Call.prototype.args=function(D,O){for(var B=[],F=0,z=this.argExprs.length;F<z;F++){var G=this.argExprs[F],U=G.value.apply(G,arguments);B.push({call:U&&U.isComputed&&(!G.modifiers||!G.modifiers.compute),value:U})}return function(){for(var Y=[],Q=0,ne=B.length;Q<ne;Q++)Y[Q]=B[Q].call?B[Q].value():B[Q].value;return Y}},Call.prototype.value=function(D,O,B){var F=this.methodExpr.value(D,O);this.isHelper=this.methodExpr.isHelper;var z=this.args(D,O);return can$8.compute(function(G){var U=F;if(U&&U.isComputed&&(U=U()),typeof U=="function"){var Y=z();return B&&Y.push(B),arguments.length&&Y.unshift(new expression$2.SetIdentifier(G)),U.apply(null,Y)}})};var HelperLookup=function(){Lookup.apply(this,arguments)};HelperLookup.prototype.value=function(D,O){var B=lookupValueOrHelper(this.key,D,O,{isArgument:!0,args:[D.attr("."),D]});return B.helper||B.value};var HelperScopeLookup=function(){Lookup.apply(this,arguments)};HelperScopeLookup.prototype.value=function(D,O){return lookupValue(this.key,D,O,{callMethodsOnObservables:!0,isArgument:!0,args:[D.attr("."),D]}).value};var Helper=function(D,O,B){this.methodExpr=D,this.argExprs=O,this.hashExprs=B,this.mode=null};Helper.prototype.args=function(D,O){for(var B=[],F=0,z=this.argExprs.length;F<z;F++){var G=this.argExprs[F];B.push(G.value.apply(G,arguments))}return B},Helper.prototype.hash=function(D,O){var B={};for(var F in this.hashExprs){var z=this.hashExprs[F];B[F]=z.value.apply(z,arguments)}return B},Helper.prototype.helperAndValue=function(D,O){var B=this.argExprs.length||!can$8.isEmptyObject(this.hashExprs),F,z,G=this.methodExpr instanceof Literal?""+this.methodExpr._value:this.methodExpr.key,U,Y;if(B){F=mustacheHelpers.getHelper(G,O);var Q=D.attr(".");!F&&typeof Q[G]=="function"&&(F={fn:Q[G]})}if(!F){Y=this.args(D,O);var ne=getKeyComputeData(G,D,{isArgument:!1,args:Y&&Y.length?Y:[D.attr("."),D]}),oe=ne.compute;U=ne.initialValue,ne.compute.computeInstance.hasDependencies?z=oe:z=U,!B&&U===void 0&&(F=mustacheHelpers.getHelper(G,O))}return{value:z,args:Y,helper:F&&F.fn}},Helper.prototype.evaluator=function(D,O,B,F,z,G,U,Y){var Q={fn:function(){},inverse:function(){},stringOnly:Y},ne=O.attr("."),oe=this.args(O,B,z,G,U,Y),ce=this.hash(O,B,z,G,U,Y);return utils.convertToScopes(Q,O,B,z,G,U,Y),can$8.simpleExtend(Q,{context:ne,scope:O,contexts:O,hash:ce,nodeList:z,exprData:this,helperOptions:B,helpers:B}),oe.push(Q),function(){return D.apply(ne,oe)}},Helper.prototype.value=function(D,O,B,F,z,G){var U=this.helperAndValue(D,O),Y=U.helper;if(!Y)return U.value;var Q=this.evaluator(Y,D,O,B,F,z,G),ne=can$8.compute(Q);return can$8.compute.temporarilyBind(ne),ne.computeInstance.hasDependencies?ne:ne()};var keyRegExp=/[\w\.\\\-_@\/\&%]+/,tokensRegExp=/('.*?'|".*?"|=|[\w\.\\\-_@\/*%\$:]+|[\(\)]|,|\~)/g,literalRegExp=/^('.*?'|".*?"|[0-9]+\.?[0-9]*|true|false|null|undefined)$/,isTokenKey=function(D){return keyRegExp.test(D)},testDot=/^[\.@]\w/,isAddingToExpression=function(D){return isTokenKey(D)&&testDot.test(D)},ensureChildren=function(D){return D.children||(D.children=[]),D},Stack=function(){this.root={children:[],type:"Root"},this.current=this.root,this.stack=[this.root]};can$8.simpleExtend(Stack.prototype,{top:function(){return can$8.last(this.stack)},isRootTop:function(){return this.top()===this.root},popTo:function(D){this.popUntil(D),this.isRootTop()||this.stack.pop()},firstParent:function(D){for(var O=this.stack.length-2;O>0&&can$8.inArray(this.stack[O].type,D)===-1;)O--;return this.stack[O]},popUntil:function(D){for(;can$8.inArray(this.top().type,D)===-1&&!this.isRootTop();)this.stack.pop();return this.top()},addTo:function(D,O){var B=this.popUntil(D);ensureChildren(B).children.push(O)},addToAndPush:function(D,O){this.addTo(D,O),this.stack.push(O)},topLastChild:function(){return can$8.last(this.top().children)},replaceTopLastChild:function(D){var O=ensureChildren(this.top()).children;return O.pop(),O.push(D),D},replaceTopLastChildAndPush:function(D){this.replaceTopLastChild(D),this.stack.push(D)},replaceTopAndPush:function(D){var O;return this.top()===this.root?O=ensureChildren(this.top()).children:(this.stack.pop(),O=ensureChildren(this.top()).children),O.pop(),O.push(D),this.stack.push(D),D}});var convertKeyToLookup=function(D){var O=D.lastIndexOf("./"),B=D.lastIndexOf(".");if(B>O)return D.substr(0,B)+"@"+D.substr(B+1);var F=O===-1?0:O+2,z=D.charAt(F);return z==="."||z==="@"?D.substr(0,F)+"@"+D.substr(F+1):D.substr(0,F)+"@"+D.substr(F)},convertToAtLookup=function(D){return D.type==="Lookup"&&(D.key=convertKeyToLookup(D.key)),D},convertToHelperIfTopIsLookup=function(D){var O=D.top();if(O&&O.type==="Lookup"){var B=D.stack[D.stack.length-2];B.type!=="Helper"&&B&&D.replaceTopAndPush({type:"Helper",method:O})}},expression$2={convertKeyToLookup,Literal,Lookup,ScopeLookup,Arg,Hashes,Call,Helper,HelperLookup,HelperScopeLookup,SetIdentifier:function(D){this.value=D},tokenize:function(D){var O=[];return(can$8.trim(D)+" ").replace(tokensRegExp,function(B,F){O.push(F)}),O},lookupRules:{default:function(D,O,B){var F=(O==="Helper"&&!D.root?"Helper":"")+(B?"Scope":"")+"Lookup";return expression$2[F]},method:function(D,O,B){return ScopeLookup}},methodRules:{default:function(D){return D.type==="Call"?Call:Helper},call:function(D){return Call}},parse:function(D,O){O=O||{};var B=this.ast(D);O.lookupRule||(O.lookupRule="default"),typeof O.lookupRule=="string"&&(O.lookupRule=expression$2.lookupRules[O.lookupRule]),O.methodRule||(O.methodRule="default"),typeof O.methodRule=="string"&&(O.methodRule=expression$2.methodRules[O.methodRule]);var F=this.hydrateAst(B,O,O.baseMethodType||"Helper");return F},hydrateAst:function(D,O,B,F){var z,G=this;if(D.type==="Lookup")return new(O.lookupRule(D,B,F))(D.key,D.root&&this.hydrateAst(D.root,O,B));if(D.type==="Literal")return new Literal(D.value);if(D.type==="Arg")return new Arg(this.hydrateAst(D.children[0],O,B,F),{compute:!0});if(D.type==="Hashes")return z={},can$8.each(D.children,function(Y){z[Y.prop]=G.hydrateAst(Y.children[0],O,D.type,!0)}),new Hashes(z);if(D.type==="Hash")throw new Error("");if(D.type==="Call"||D.type==="Helper"){var U=[];return z={},can$8.each(D.children,function(Y){Y.type==="Hash"?z[Y.prop]=G.hydrateAst(Y.children[0],O,D.type,!0):U.push(G.hydrateAst(Y,O,D.type,!0))}),new(O.methodRule(D))(this.hydrateAst(D.method,O,D.type),U,z)}},ast:function(D){var O=this.tokenize(D);return this.parseAst(O,{index:0})},parseAst:function(D,O){for(var B=new Stack,F;O.index<D.length;){var z=D[O.index],G=D[O.index+1];if(O.index++,literalRegExp.test(z))convertToHelperIfTopIsLookup(B),B.addTo(["Helper","Call","Hash"],{type:"Literal",value:utils.jsonParse(z)});else if(G==="="){if(F=B.top(),F&&F.type==="Lookup"){var U=B.firstParent(["Call","Helper","Hash"]);(U.type==="Call"||U.type==="Root")&&(B.popUntil(["Call"]),F=B.top(),B.replaceTopAndPush({type:"Helper",method:F.type==="Root"?can$8.last(F.children):F}))}F=B.popUntil(["Helper","Call","Hashes"]),F.type==="Call"&&B.addToAndPush(["Call"],{type:"Hashes"}),B.addToAndPush(["Helper","Hashes"],{type:"Hash",prop:z}),O.index++}else if(keyRegExp.test(z)){var Y=B.topLastChild();Y&&Y.type==="Call"&&isAddingToExpression(z)?B.replaceTopLastChildAndPush({type:"Lookup",root:Y,key:z}):(convertToHelperIfTopIsLookup(B),B.addToAndPush(["Helper","Call","Hash","Arg"],{type:"Lookup",key:z}))}else if(z==="~")convertToHelperIfTopIsLookup(B),B.addToAndPush(["Helper","Call","Hash"],{type:"Arg",key:z});else if(z==="(")if(F=B.top(),F.type==="Lookup")B.replaceTopAndPush({type:"Call",method:convertToAtLookup(F)});else throw new Error("Unable to understand expression "+D.join(""));else z===")"?B.popTo(["Call"]):z===","&&B.popUntil(["Call"])}return B.root.children[0]}};can$8.expression=expression$2;var expression_1=expression$2;/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$7=util,expression$1=expression_1,removeCurly=function(D){return D[0]==="{"&&D[D.length-1]==="}"?D.substr(1,D.length-2):D};can$7.view.attr("can-href",function(D,O){var B=expression$1.parse("tmp("+removeCurly(D.getAttribute("can-href"))+")",{baseMethodType:"Call"}),F=B.argExprs[0].value(O.scope,null),z=can$7.compute(function(){return can$7.route.url(F())});D.setAttribute("href",z());var G=function(U,Y){D.setAttribute("href",Y)};z.bind("change",G),can$7.bind.call(D,"removed",function(){z.unbind("change",G)})});/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$6=util,expression=expression_1,viewCallbacks=callbacks,live=live_1,behaviors={viewModel:function(D,O,B,F){F=F||{};var z={},G,U=[],Y={},Q={},ne=can$6.extend({},F);can$6.each(can$6.makeArray(D.attributes),function(fe){var we=makeDataBinding(fe,D,{templateType:O.templateType,scope:O.scope,semaphore:z,getViewModel:function(){return G},attributeViewModelBindings:ne,alreadyUpdatedChild:!0,nodeList:O.parentNodeList});we&&(we.onCompleteBinding&&(we.bindingInfo.parentToChild&&we.value!==void 0&&(F[cleanVMName(we.bindingInfo.childName)]=we.value),U.push(we.onCompleteBinding)),Y[fe.name]=we.onTeardown)}),G=B(F);for(var oe=0,ce=U.length;oe<ce;oe++)U[oe]();return can$6.bind.call(D,"attributes",function(fe){var we=fe.attributeName,X=D.getAttribute(we);Y[we]&&Y[we]();var ve=Q[we]&&Q[we].parent==="attribute";if(X!==null||ve){var de=makeDataBinding({name:we,value:X},D,{templateType:O.templateType,scope:O.scope,semaphore:{},getViewModel:function(){return G},attributeViewModelBindings:ne,initializeValues:!0,nodeList:O.parentNodeList});de&&(de.onCompleteBinding&&de.onCompleteBinding(),Q[we]=de.bindingInfo,Y[we]=de.onTeardown)}}),function(){for(var fe in Y)Y[fe]()}},data:function(D,O){if(!can$6.data(can$6.$(D),"preventDataBindings")){var B=can$6.viewModel(D),F={},z,G=makeDataBinding({name:O.attributeName,value:D.getAttribute(O.attributeName),nodeList:O.nodeList},D,{templateType:O.templateType,scope:O.scope,semaphore:F,getViewModel:function(){return B}});G.onCompleteBinding&&G.onCompleteBinding(),z=G.onTeardown,can$6.one.call(D,"removed",function(){z()}),can$6.bind.call(D,"attributes",function(U){var Y=U.attributeName,Q=D.getAttribute(Y);if(Y===O.attributeName&&(z&&z(),Q!==null)){var ne=makeDataBinding({name:Y,value:Q},D,{templateType:O.templateType,scope:O.scope,semaphore:F,getViewModel:function(){return B},initializeValues:!0,nodeList:O.nodeList});ne&&(ne.onCompleteBinding&&ne.onCompleteBinding(),z=ne.onTeardown)}})}},reference:function(D,O){D.getAttribute(O.attributeName)&&console.warn("*reference attributes can only export the view model.");var B=can$6.camelize(O.attributeName.substr(1).toLowerCase()),F=can$6.viewModel(D),z=O.scope.getRefs();z._context.attr("*"+B,F)},event:function(D,O){var B=O.attributeName,F=B.indexOf("can-")===0,z=B.indexOf("can-")===0?B.substr(4):can$6.camelize(removeBrackets(B,"(",")")),G=F;z.charAt(0)==="$"&&(z=z.substr(1),G=!0);var U=function(ne){var oe=D.getAttribute(B);if(oe){var ce=can$6.$(D),fe=can$6.viewModel(ce[0]),we=expression.parse(removeBrackets(oe),{lookupRule:"method",methodRule:"call"});if(!(we instanceof expression.Call)&&!(we instanceof expression.Helper)){var X=can$6.map([O.scope._context,ce].concat(can$6.makeArray(arguments)),function(Se){return new expression.Literal(Se)});we=new expression.Call(we,X,{})}var ve=O.scope.add({"@element":ce,"@event":ne,"@viewModel":fe,"@scope":O.scope,"@context":O.scope._context,"%element":this,$element:ce,"%event":ne,"%viewModel":fe,"%scope":O.scope,"%context":O.scope._context},{notContext:!0}),de=ve.read(we.methodExpr.key,{isArgument:!0});if(!de.value)return de=ve.read(we.methodExpr.key,{isArgument:!0}),null;var Ae=we.args(ve,null)();return de.value.apply(de.parent,Ae)}};if(special[z]){var Y=special[z](O,D,U);U=Y.handler,z=Y.event}can$6.bind.call(G?D:can$6.viewModel(D),z,U);var Q=function(ne){ne.attributeName===B&&!this.getAttribute(B)&&(can$6.unbind.call(G?D:can$6.viewModel(D),z,U),can$6.unbind.call(D,"attributes",Q))};can$6.bind.call(D,"attributes",Q)},value:function(D,O){var B="$value",F=can$6.trim(removeBrackets(D.getAttribute("can-value"))),z;if(D.nodeName.toLowerCase()==="input"&&(D.type==="checkbox"||D.type==="radio")){var G=getComputeFrom.scope(D,O.scope,F,{},!0);if(D.type==="checkbox"){var U=can$6.attr.has(D,"can-true-value")?D.getAttribute("can-true-value"):!0,Y=can$6.attr.has(D,"can-false-value")?D.getAttribute("can-false-value"):!1;z=can$6.compute(function(ne){if(arguments.length)G(ne?U:Y);else return G()==U})}else D.type==="radio"&&(z=can$6.compute(function(ne){if(arguments.length)ne&&G(D.value);else return G()==D.value}));B="$checked",F="getterSetter",O.scope=new can$6.view.Scope({getterSetter:z})}else isContentEditable(D)&&(B="$innerHTML");var Q=makeDataBinding({name:"{("+B+"})",value:F},D,{templateType:O.templateType,scope:O.scope,semaphore:{},initializeValues:!0,legacyBindings:!0,syncChildWithParent:!0});can$6.one.call(D,"removed",function(){Q.onTeardown()})}};can$6.view.attr(/^\{[^\}]+\}$/,behaviors.data),can$6.view.attr(/\*[\w\.\-_]+/,behaviors.reference),can$6.view.attr(/^\([\$?\w\.\-]+\)$/,behaviors.event),can$6.view.attr(/can-[\w\.]+/,behaviors.event),can$6.view.attr("can-value",behaviors.value);var getComputeFrom={scope:function(D,O,B,F,z,G){if(B)if(z){var U=expression.parse(B,{baseMethodType:"Call"});return U.value(O,new can$6.view.Options({}))}else return function(Y){O.attr(cleanVMName(B),Y)};else return can$6.compute()},viewModel:function(D,O,B,F,z,G){var U=cleanVMName(B);return z?can$6.compute(function(Y){var Q=F.getViewModel();if(arguments.length)Q.attr(U,Y);else return B==="."?Q:can$6.compute.read(Q,can$6.compute.read.reads(B),{}).value}):function(Y){var Q,ne=F.getViewModel();G?(Q=ne._get(U,{readCompute:!1}),(!Q||!Q.isComputed)&&(Q=can$6.compute(),ne._set(U,Q,{readCompute:!1})),Q(Y)):ne.attr(U,Y)}},attribute:function(D,O,B,F,z,G,U){var Y=D.nodeName.toLowerCase()==="select",Q=B==="value"&&Y&&D.multiple,ne,oe=!1,ce,fe,we;U||(B==="innerHTML"?U=["blur","change"]:U="change"),can$6.isArray(U)||(U=[U]);var X=function(Ae){if(Y&&!oe&&(clearTimeout(ce),ce=setTimeout(function(){X(Ae)},1)),Q){Ae&&typeof Ae=="string"?(Ae=Ae.split(";"),ne=!0):Ae?Ae=can$6.makeArray(Ae):Ae=[];var Se={};can$6.each(Ae,function(Pe){Se[Pe]=!0}),can$6.each(D.childNodes,function(Pe){Pe.value&&(Pe.selected=!!Se[Pe.value])})}else!F.legacyBindings&&Y&&"selectedIndex"in D&&B==="value"?can$6.attr.setSelectValue(D,Ae):can$6.attr.setAttrOrProp(D,B,Ae??"");return Ae},ve=function(){if(Q){var Ae=[],Se=D.childNodes;return can$6.each(Se,function(Pe){Pe.selected&&Pe.value&&Ae.push(Pe.value)}),ne?Ae.join(";"):Ae}else if(Y&&"selectedIndex"in D&&D.selectedIndex===-1)return;return can$6.attr.get(D,B)};Y&&setTimeout(function(){oe=!0},1),D.tagName&&D.tagName.toLowerCase()==="input"&&D.form&&(fe=[{el:D.form,eventName:"reset",handler:function(){X(we)}}]);var de;return we=ve(),can$6.compute(we,{on:function(Ae){if(can$6.each(U,function(Pe){can$6.bind.call(D,Pe,Ae)}),can$6.each(fe,function(Pe){can$6.bind.call(Pe.el,Pe.eventName,Pe.handler)}),Y){var Se=function(Pe){G&&X(G()),Ae()};can$6.attr.MutationObserver?(de=new can$6.attr.MutationObserver(Se),de.observe(D,{childList:!0,subtree:!0})):can$6.data(can$6.$(D),"canBindingCallback",{onMutation:Se})}},off:function(Ae){can$6.each(U,function(Se){can$6.unbind.call(D,Se,Ae)}),can$6.each(fe,function(Se){can$6.unbind.call(Se.el,Se.eventName,Se.handler)}),Y&&(can$6.attr.MutationObserver?de.disconnect():can$6.data(can$6.$(D),"canBindingCallback",null))},get:ve,set:X})}},bind={childToParent:function(D,O,B,F,z,G){var U=typeof O=="function",Y=function(Q,ne){F[z]||(U?(O(ne),G&&O()!==B()&&(F[z]=(F[z]||0)+1,can$6.batch.start(),B(O()),can$6.batch.after(function(){--F[z]}),can$6.batch.stop())):O instanceof can$6.Map&&O.attr(ne,!0))};return B&&B.isComputed&&B.bind("change",Y),Y},parentToChild:function(D,O,B,F,z){var G=function(U,Y){F[z]=(F[z]||0)+1,can$6.batch.start(),B(Y),can$6.batch.after(function(){--F[z]}),can$6.batch.stop()};return O&&O.isComputed&&O.bind("change",G),G}},getBindingInfo=function(D,O,B,F){var z,G=D.name,U=D.value||"",Y=G.match(bindingsRegExp);if(!Y){var Q=ignoreAttributesRegExp.test(G),ne=can$6.camelize(G);if(Q||viewCallbacks.attr(G))return;var oe=U[0]==="{"&&can$6.last(U)==="}",ce=B==="legacy"?O[ne]:!oe,fe=oe?U.substr(1,U.length-2):U;return ce?{bindingAttributeName:G,parent:"attribute",parentName:G,child:"viewModel",childName:ne,parentToChild:!0,childToParent:!0}:{bindingAttributeName:G,parent:"scope",parentName:fe,child:"viewModel",childName:ne,parentToChild:!0,childToParent:!0}}var we=!!Y[1],X=we||!!Y[2],ve=we||!X,de=Y[3],Ae=de.charAt(0)==="$";return Ae?(z={parent:"scope",child:"attribute",childToParent:X,parentToChild:ve,bindingAttributeName:G,childName:de.substr(1),parentName:U,initializeValues:!0},F==="select"&&(z.stickyParentToChild=!0),z):(z={parent:"scope",child:"viewModel",childToParent:X,parentToChild:ve,bindingAttributeName:G,childName:can$6.camelize(de),parentName:U,initializeValues:!0},U.trim().charAt(0)==="~"&&(z.stickyParentToChild=!0),z)},bindingsRegExp=/\{(\()?(\^)?([^\}\)]+)\)?\}/,ignoreAttributesRegExp=/^(data-view-id|class|id|\[[\w\.-]+\]|#[\w\.-])$/i,makeDataBinding=function(D,O,B){var F=getBindingInfo(D,B.attributeViewModelBindings,B.templateType,O.nodeName.toLowerCase());if(F){F.alreadyUpdatedChild=B.alreadyUpdatedChild,B.initializeValues&&(F.initializeValues=!0);var z=getComputeFrom[F.parent](O,B.scope,F.parentName,B,F.parentToChild),G=getComputeFrom[F.child](O,B.scope,F.childName,B,F.childToParent,F.stickyParentToChild&&z),U,Y,Q;B.nodeList&&(z&&z.isComputed&&z.computeInstance.setPrimaryDepth(B.nodeList.nesting+1),G&&G.isComputed&&G.computeInstance.setPrimaryDepth(B.nodeList.nesting+1)),F.parentToChild&&(Y=bind.parentToChild(O,z,G,B.semaphore,F.bindingAttributeName));var ne=function(){F.childToParent?U=bind.childToParent(O,z,G,B.semaphore,F.bindingAttributeName,B.syncChildWithParent):F.stickyParentToChild&&G.bind("change",Q=can$6.k),F.initializeValues&&initializeValues(F,G,z,Y,U)},oe=function(){unbindUpdate(z,Y),unbindUpdate(G,U),unbindUpdate(G,Q)};return F.child==="viewModel"?{value:getValue(z),onCompleteBinding:ne,bindingInfo:F,onTeardown:oe}:(ne(),{bindingInfo:F,onTeardown:oe})}},initializeValues=function(D,O,B,F,z){var G=!1;D.parentToChild&&!D.childToParent?D.stickyParentToChild&&F({},getValue(B)):!D.parentToChild&&D.childToParent?G=!0:getValue(O)===void 0||getValue(B)===void 0&&(G=!0),G?z({},getValue(O)):D.alreadyUpdatedChild||F({},getValue(B))};if(!can$6.attr.MutationObserver){var updateSelectValue=function(D){var O=can$6.data(can$6.$(D),"canBindingCallback");O&&O.onMutation(D)};live.registerChildMutationCallback("select",updateSelectValue),live.registerChildMutationCallback("optgroup",function(D){updateSelectValue(D.parentNode)})}var isContentEditable=function(){var D={"":!0,true:!0,false:!1},O=function(B){if(!(!B||!B.getAttribute)){var F=B.getAttribute("contenteditable");return D[F]}};return function(B){var F=O(B);return typeof F=="boolean"?F:!!O(B.parentNode)}}(),removeBrackets=function(D,O,B){return O=O||"{",B=B||"}",D[0]===O&&D[D.length-1]===B?D.substr(1,D.length-2):D},getValue=function(D){return D&&D.isComputed?D():D},unbindUpdate=function(D,O){D&&D.isComputed&&typeof O=="function"&&D.unbind("change",O)},cleanVMName=function(D){return D.replace(/@/g,"")},special={enter:function(D,O,B){return{event:"keyup",handler:function(F){if(F.keyCode===13)return B.call(this,F)}}}};can$6.bindings={behaviors,getBindingInfo,special};var bindings$1=can$6.bindings;/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can$5=util;can$5.view.ext=".mustache";var SCOPE="scope",HASH="___h4sh",CONTEXT_OBJ="{scope:"+SCOPE+",options:options}",SPECIAL_CONTEXT_OBJ="{scope:"+SCOPE+",options:options, special: true}",ARG_NAMES=SCOPE+",options",argumentsRegExp=/((([^'"\s]+?=)?('.*?'|".*?"))|.*?)\s/g,literalNumberStringBooleanRegExp=/^(('.*?'|".*?"|[0-9]+\.?[0-9]*|true|false|null|undefined)|((.+?)=(('.*?'|".*?"|[0-9]+\.?[0-9]*|true|false)|(.+))))$/,makeLookupLiteral=function(D){return'{get:"'+D.replace(/"/g,'\\"')+'"}'},isLookup=function(D){return D&&typeof D.get=="string"},isObserveLike=function(D){return D instanceof can$5.Map||D&&!!D._get},isArrayLike=function(D){return D&&D.splice&&typeof D.length=="number"},makeConvertToScopes=function(D,O,B){var F=function(z,G){return D(z||O,G)};return function(z,G){return z!==void 0&&!(z instanceof can$5.view.Scope)&&(z=O.add(z)),G!==void 0&&!(G instanceof can$5.view.Options)&&(G=B.add(G)),F(z,G||B)}},Mustache=function(D,O){if(this.constructor!==Mustache){var B=new Mustache(D);return function(F,z){return B.render(F,z)}}if(typeof D=="function"){this.template={fn:D};return}can$5.extend(this,D),this.template=this.scanner.scan(this.text,this.name)};can$5.Mustache=can$5.global.Mustache=Mustache,Mustache.prototype.render=function(D,O){return D instanceof can$5.view.Scope||(D=new can$5.view.Scope(D||{})),O instanceof can$5.view.Options||(O=new can$5.view.Options(O||{})),O=O||{},this.template.fn.call(D,D,O)},can$5.extend(Mustache.prototype,{scanner:new can$5.view.Scanner({text:{start:"",scope:SCOPE,options:",options: options",argNames:ARG_NAMES},tokens:[["returnLeft","{{{","{{[{&]"],["commentFull","{{!}}","^[\\s\\t]*{{!.+?}}\\n"],["commentLeft","{{!","(\\n[\\s\\t]*{{!|{{!)"],["escapeFull","{{}}","(^[\\s\\t]*{{[#/^][^}]+?}}\\n|\\n[\\s\\t]*{{[#/^][^}]+?}}\\n|\\n[\\s\\t]*{{[#/^][^}]+?}}$)",function(D){return{before:/^\n.+?\n$/.test(D)?`
`:"",content:D.match(/\{\{(.+?)\}\}/)[1]||""}}],["escapeLeft","{{"],["returnRight","}}}"],["right","}}"]],helpers:[{name:/^>[\s]*\w*/,fn:function(D,O){var B=can$5.trim(D.replace(/^>\s?/,"")).replace(/["|']/g,"");return"can.Mustache.renderPartial('"+B+"',"+ARG_NAMES+")"}},{name:/^\s*data\s/,fn:function(D,O){var B=D.match(/["|'](.*)["|']/)[1];return"can.proxy(function(__){can.data(can.$(__),'"+B+"', this.attr('.')); }, "+SCOPE+")"}},{name:/\s*\(([\$\w]+)\)\s*->([^\n]*)/,fn:function(D){var O=/\s*\(([\$\w]+)\)\s*->([^\n]*)/,B=D.match(O);return"can.proxy(function(__){var "+B[1]+"=can.$(__);with("+SCOPE+".attr('.')){"+B[2]+"}}, this);"}},{name:/^.*$/,fn:function(D,O){var B=!1,F={content:"",startTxt:!1,startOnlyTxt:!1,end:!1};if(D=can$5.trim(D),D.length&&(B=D.match(/^([#^/]|else$)/))){switch(B=B[0],B){case"#":case"^":O.specialAttribute?F.startOnlyTxt=!0:(F.startTxt=!0,F.escaped=0);break;case"/":return F.end=!0,F.content+='return ___v1ew.join("");}}])',F}D=D.substring(1)}if(B!=="else"){var z=[],G=[],U=0,Y;F.content+=`can.Mustache.txt(
`+(O.specialAttribute?SPECIAL_CONTEXT_OBJ:CONTEXT_OBJ)+`,
`+(B?'"'+B+'"':"null")+",",(can$5.trim(D)+" ").replace(argumentsRegExp,function(Q,ne){U&&(Y=ne.match(literalNumberStringBooleanRegExp))?Y[2]?z.push(Y[0]):G.push(Y[4]+":"+(Y[6]?Y[6]:makeLookupLiteral(Y[5]))):z.push(makeLookupLiteral(ne)),U++}),F.content+=z.join(","),G.length&&(F.content+=",{"+HASH+":{"+G.join(",")+"}}")}switch(B&&B!=="else"&&(F.content+=`,[

`),B){case"^":case"#":F.content+="{fn:function("+ARG_NAMES+"){var ___v1ew = [];";break;case"else":F.content+=`return ___v1ew.join("");}},
{inverse:function(`+ARG_NAMES+`){
var ___v1ew = [];`;break;default:F.content+=")";break}return B||(F.startTxt=!0,F.end=!0),F}}]})});for(var helpers=can$5.view.Scanner.prototype.helpers,i=0;i<helpers.length;i++)Mustache.prototype.scanner.helpers.unshift(helpers[i]);Mustache.txt=function(D,O,B){for(var F=D.scope,z=D.options,G=[],U={fn:function(){},inverse:function(){}},Y,Q=F.attr("."),ne=!0,oe,ce=3;ce<arguments.length;ce++){var fe=arguments[ce];if(O&&can$5.isArray(fe))U=can$5.extend.apply(can$5,[U].concat(fe));else if(fe&&fe[HASH]){Y=fe[HASH];for(var we in Y)isLookup(Y[we])&&(Y[we]=Mustache.get(Y[we].get,D,!1,!0))}else fe&&isLookup(fe)?G.push(Mustache.get(fe.get,D,!1,!0,!0)):G.push(fe)}if(isLookup(B)){var X=B.get;B=Mustache.get(B.get,D,G.length,!1),ne=X===B}if(U.fn=makeConvertToScopes(U.fn,F,z),U.inverse=makeConvertToScopes(U.inverse,F,z),O==="^"){var ve=U.fn;U.fn=U.inverse,U.inverse=ve}return(oe=ne&&typeof B=="string"&&Mustache.getHelper(B,z)||can$5.isFunction(B)&&!B.isComputed&&{fn:B})?(can$5.extend(U,{context:Q,scope:F,contexts:F,hash:Y}),G.push(U),function(){var de=oe.fn.apply(Q,G);return de??""}):function(){var de;can$5.isFunction(B)&&B.isComputed?de=B():de=B;var Ae=G.length?G:[de],Se=!0,Pe=[],ke,ye,be;if(O)for(ke=0;ke<Ae.length;ke++)be=Ae[ke],ye=typeof be<"u"&&isObserveLike(be),isArrayLike(be)?O==="#"?Se=Se&&!!(ye?be.attr("length"):be.length):O==="^"&&(Se=Se&&!(ye?be.attr("length"):be.length)):Se=O==="#"?Se&&!!be:O==="^"?Se&&!be:Se;if(Se)if(O==="#")if(isArrayLike(de)){var Te=isObserveLike(de);for(ke=0;ke<de.length;ke++)Pe.push(U.fn(Te?de.attr(""+ke):de[ke]));return Pe.join("")}else return U.fn(de||{})||"";else return O==="^"?U.inverse(de||{})||"":""+(de??"");return""}},Mustache.get=function(D,O,B,F,z){var G=O.scope.attr("."),U=O.options||{};if(B){if(Mustache.getHelper(D,U))return D;if(O.scope&&can$5.isFunction(G[D]))return G[D]}var Y=O.scope.computeData(D,{isArgument:F,args:[G,O.scope]}),Q=Y.compute;can$5.compute.temporarilyBind(Q);var ne=Y.initialValue;return Mustache.getHelper(D,U),!z&&(ne===void 0||Y.scope!==O.scope)&&Mustache.getHelper(D,U)?D:Q.computeInstance.hasDependencies?Q:ne},Mustache.resolve=function(D){return isObserveLike(D)&&isArrayLike(D)&&D.attr("length")?D:can$5.isFunction(D)?D():D},Mustache._helpers={},Mustache.registerHelper=function(D,O){this._helpers[D]={name:D,fn:O}},Mustache.registerSimpleHelper=function(D,O){Mustache.registerHelper(D,can$5.view.simpleHelper(O))},Mustache.getHelper=function(D,O){var B;return O&&(B=O.get("helpers."+D,{proxyMethods:!1})),B?{fn:B}:this._helpers[D]},Mustache.render=function(D,O,B){return can$5.view.cached[D]||can$5.__notObserve(function(){var F=O.attr(D);F&&(D=F)})(),can$5.view.render(D,O,B)},Mustache.safeString=function(D){return{toString:function(){return D}}},Mustache.renderPartial=function(D,O,B){var F=B.get("partials."+D,{proxyMethods:!1});return F?F.render?F.render(O,B):F(O,B):can$5.Mustache.render(D,O,B)},can$5.each({if:function(D,O){var B;return can$5.isFunction(D)?B=can$5.compute.truthy(D)():B=!!Mustache.resolve(D),B?O.fn(O.contexts||this):O.inverse(O.contexts||this)},is:function(){var D,O,B=arguments[arguments.length-1];if(arguments.length-2<=0)return B.inverse();for(var F=0;F<arguments.length-1;F++){if(O=Mustache.resolve(arguments[F]),O=can$5.isFunction(O)?O():O,F>0&&O!==D)return B.inverse();D=O}return B.fn()},eq:function(){return Mustache._helpers.is.fn.apply(this,arguments)},unless:function(D,O){return Mustache._helpers.if.fn.apply(this,[D,can$5.extend({},O,{fn:O.inverse,inverse:O.fn})])},each:function(D,O){var B=Mustache.resolve(D),F=[],z,G,U;if(can$5.view.lists&&(B instanceof can$5.List||D&&D.isComputed&&B===void 0))return can$5.view.lists(D,function(Y,Q){return O.fn(O.scope.add({"@index":Q}).add(Y))});if(D=B,D&&isArrayLike(D)){for(U=0;U<D.length;U++)F.push(O.fn(O.scope.add({"@index":U}).add(D[U])));return F.join("")}else if(isObserveLike(D)){for(z=can$5.Map.keys(D),U=0;U<z.length;U++)G=z[U],F.push(O.fn(O.scope.add({"@key":G}).add(D[G])));return F.join("")}else if(D instanceof Object){for(G in D)F.push(O.fn(O.scope.add({"@key":G}).add(D[G])));return F.join("")}},with:function(D,O){var B=D;if(D=Mustache.resolve(D),D)return O.fn(B)},log:function(D,O){typeof console<"u"&&console.log&&(O?console.log(D,O.context):console.log(D.context))},"@index":function(D,O){O||(O=D,D=0);var B=O.scope.read("@index",{isArgument:!0}).value;return""+((can$5.isFunction(B)?B():B)+D)}},function(D,O){Mustache.registerHelper(O,D)}),can$5.view.register({suffix:"mustache",contentType:"x-mustache-template",script:function(D,O){return"can.Mustache(function("+ARG_NAMES+") { "+new Mustache({text:O,name:D}).template.out+" })"},renderer:function(D,O){return Mustache({text:O,name:D})}}),can$5.mustache.registerHelper=can$5.proxy(can$5.Mustache.registerHelper,can$5.Mustache),can$5.mustache.safeString=can$5.Mustache.safeString;/*!
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
 */var can$2=util,elements=elements_1,bindings=bindings$1,paramReplacer=/\{([^\}]+)\}/g;can$2.Component=can$2.Construct.extend({setup:function(){if(can$2.Construct.setup.apply(this,arguments),can$2.Component){var D=this,O=this.prototype.scope||this.prototype.viewModel;if(this.Control=ComponentControl.extend(this.prototype.events),!O||typeof O=="object"&&!(O instanceof can$2.Map)?this.Map=can$2.Map.extend(O||{}):O.prototype instanceof can$2.Map&&(this.Map=O),this.attributeScopeMappings={},can$2.each(this.Map?this.Map.defaults:{},function(F,z){F==="@"&&(D.attributeScopeMappings[z]=z)}),this.prototype.template)if(typeof this.prototype.template=="function"){var B=this.prototype.template;this.renderer=function(){return can$2.view.frag(B.apply(null,arguments))}}else this.renderer=can$2.view.mustache(this.prototype.template);can$2.view.tag(this.prototype.tag,function(F,z){new D(F,z)})}}},{setup:function(D,O){var B={},F=this,z=(typeof this.leakScope>"u"?!1:!this.leakScope)&&!!this.template,G,U,Y=[],Q=function(){for(var ve=0,de=Y.length;ve<de;ve++)Y[ve]()},ne=can$2.$(D),oe=!can$2.data(ne,"preventDataBindings");can$2.each(this.constructor.attributeScopeMappings,function(ve,de){B[de]=D.getAttribute(can$2.hyphenate(ve))}),oe&&Y.push(bindings.behaviors.viewModel(D,O,function(ve){ve["%root"]=O.scope.attr("%root");var de=F.scope||F.viewModel;if(F.constructor.Map)G=new F.constructor.Map(ve);else if(de instanceof can$2.Map)G=de;else if(can$2.isFunction(de)){var Ae=de.call(F,ve,O.scope,D);Ae instanceof can$2.Map?G=Ae:Ae.prototype instanceof can$2.Map?G=new Ae(ve):G=new(can$2.Map.extend(Ae))(ve)}var Se=G.serialize;return G.serialize=function(){var Pe=Se.apply(this,arguments);return delete Pe["%root"],Pe},G},B)),this.scope=this.viewModel=G,can$2.data(ne,"scope",this.viewModel),can$2.data(ne,"viewModel",this.viewModel),can$2.data(ne,"preventDataBindings",!0);var ce;z?ce=can$2.view.Scope.refsScope().add(this.viewModel,{viewModel:!0}):ce=(this.constructor.renderer?O.scope.add(new can$2.view.Scope.Refs):O.scope).add(this.viewModel,{viewModel:!0});var fe={helpers:{}},we=function(ve,de){fe.helpers[ve]=function(){return de.apply(G,arguments)}};can$2.each(this.helpers||{},function(ve,de){can$2.isFunction(ve)&&we(de,ve)}),can$2.each(this.simpleHelpers||{},function(ve,de){we(de,can$2.view.simpleHelper(ve))}),this._control=new this.constructor.Control(D,{scope:this.viewModel,viewModel:this.viewModel,destroy:Q});var X=can$2.view.nodeLists.register([],void 0,O.parentNodeList||!0,!1);X.expression="<"+this.tag+">",Y.push(function(){can$2.view.nodeLists.unregister(X)}),this.constructor.renderer?(fe.tags||(fe.tags={}),fe.tags.content=function ve(de,Ae){var Se=O.subtemplate||Ae.subtemplate,Pe=Se===O.subtemplate;if(Se){delete fe.tags.content;var ke;if(Pe?z?ke=O:ke={scope:Ae.scope.cloneFromRef(),options:Ae.options}:ke=Ae,Ae.parentNodeList){var ye=Se(ke.scope,ke.options,Ae.parentNodeList);elements.replace([de],ye)}else can$2.view.live.replace([de],Se(ke.scope,ke.options));fe.tags.content=ve}},U=this.constructor.renderer(ce,O.options.add(fe),X)):O.templateType==="legacy"?U=can$2.view.frag(O.subtemplate?O.subtemplate(ce,O.options.add(fe)):""):U=O.subtemplate?O.subtemplate(ce,O.options.add(fe),X):document.createDocumentFragment(),can$2.appendChild(D,U,can$2.document),can$2.view.nodeLists.update(X,can$2.childNodes(D))}});var ComponentControl=can$2.Control.extend({_lookup:function(D){return[D.scope,D,window]},_action:function(D,O,B){var F,z;if(paramReplacer.lastIndex=0,F=paramReplacer.test(D),!(!B&&F))if(F){z=can$2.compute(function(){var U,Y=D.replace(paramReplacer,function(oe,ce){var fe;return ce==="scope"||ce==="viewModel"?(U=O.viewModel,""):(ce=ce.replace(/^(scope|^viewModel)\./,""),fe=can$2.compute.read(O.viewModel,can$2.compute.read.reads(ce),{readCompute:!1}).value,fe===void 0&&(fe=can$2.getObject(ce)),typeof fe=="string"?fe:(U=fe,""))}),Q=Y.split(/\s+/g),ne=Q.pop();return{processor:this.processors[ne]||this.processors.click,parts:[Y,Q.join(" "),ne],delegate:U||void 0}},this);var G=function(U,Y){B._bindings.control[D](B.element),B._bindings.control[D]=Y.processor(Y.delegate||B.element,Y.parts[2],Y.parts[1],D,B)};return z.bind("change",G),B._bindings.readyComputes[D]={compute:z,handler:G},z()}else return can$2.Control._action.apply(this,arguments)}},{setup:function(D,O){return this.scope=O.scope,this.viewModel=O.viewModel,can$2.Control.prototype.setup.call(this,D,O)},off:function(){this._bindings&&can$2.each(this._bindings.readyComputes||{},function(D){D.compute.unbind("change",D.handler)}),can$2.Control.prototype.off.apply(this,arguments),this._bindings.readyComputes={}},destroy:function(){can$2.Control.prototype.destroy.apply(this,arguments),typeof this.options.destroy=="function"&&this.options.destroy.apply(this,arguments)}}),$=can$2.$;$.fn&&($.fn.scope=$.fn.viewModel=function(){return can$2.viewModel.apply(can$2,[this].concat(can$2.makeArray(arguments)))});/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
 * Licensed MIT
 */var can=util,can_1=can;const can$1=getDefaultExportFromCjs(can_1);var __defProp$1=Object.defineProperty,__getOwnPropDesc$1=Object.getOwnPropertyDescriptor,__decorateClass$1=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc$1(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp$1(O,B,z),z};exports.AwcCanControl=class extends s{constructor(){super(...arguments),this.name="",this.options={},this._canInstance=null}connectedCallback(){super.connectedCallback(),document.addEventListener("DOMContentLoaded",this._setupCanControl.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this._automaticallyDestroyComponent()}updated(O){super.updated(O),O.has("name")&&this._setupCanControl()}_setupCanControl(){if(!this.name)return;const O=can$1.Control.extend({},{});O&&(this._canInstance=new O(this,this.options))}_automaticallyDestroyComponent(){this._canInstance&&typeof this._canInstance.destroy=="function"&&this._canInstance.destroy()}createRenderRoot(){return this}render(){return x`<slot></slot>`}},__decorateClass$1([n({type:String,reflect:!0})],exports.AwcCanControl.prototype,"name",2),__decorateClass$1([n({type:Object})],exports.AwcCanControl.prototype,"options",2),__decorateClass$1([r$1()],exports.AwcCanControl.prototype,"_canInstance",2),exports.AwcCanControl=__decorateClass$1([t$1("awc-can-control")],exports.AwcCanControl);var __defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__decorateClass=(D,O,B,F)=>{for(var z=F>1?void 0:F?__getOwnPropDesc(O,B):O,G=D.length-1,U;G>=0;G--)(U=D[G])&&(z=(F?U(O,B,z):U(z))||z);return F&&z&&__defProp(O,B,z),z};return exports.AwcVueMounter=class extends s{constructor(){super(...arguments),this.name="",this.options={},this.type="construct"}createVueInstance(){const O=this.getVueConstructor(this.name),B=Vue.component(this.name);if(!O&&this.type!=="component")throw new Error(`Vue constructor "${this.name}" not found on window object.`);switch(this.type){case"closure":if(!O)throw new Error(`Cannot create Vue instance via closure: constructor "${this.name}" is not found.`);this.vueInstance=this.createViaClosure(O);break;case"construct":if(!O)throw new Error(`Cannot create Vue instance via construct: constructor "${this.name}" is not found.`);this.vueInstance=this.createViaConstruct(O);break;case"component":if(!B)throw new Error(`Vue component "${this.name}" not found globally.`);this.vueInstance=this.createViaComponent(B);break;default:throw new Error(`Invalid type "${this.type}". Expected "construct", "closure", or "component".`)}if(!this.vueInstance)throw new Error("Vue instance could not be created.");this.vueInstance.$mount(this.renderRoot.querySelector("#vue-root"))}getVueConstructor(O){return O.split(".").reduce((B,F)=>B?B[F]:void 0,window)}createViaConstruct(O){return new O({data:this.options})}createViaClosure(O){const B=this.closure(this.options);return new O({data:B})}createViaComponent(O){return new O({propsData:this.options})}closure(O){return{...O}}connectedCallback(){super.connectedCallback(),document.addEventListener("DOMContentLoaded",()=>this.createVueInstance())}disconnectedCallback(){super.disconnectedCallback(),this.vueInstance&&this.vueInstance.$destroy()}updated(O){super.updated(O),this.createVueInstance()}createRenderRoot(){return this}render(){return x`<div id="vue-root"></div>`}},__decorateClass([n({type:String,reflect:!0})],exports.AwcVueMounter.prototype,"name",2),__decorateClass([n({type:Object})],exports.AwcVueMounter.prototype,"options",2),__decorateClass([n({type:String,reflect:!0})],exports.AwcVueMounter.prototype,"type",2),exports.AwcVueMounter=__decorateClass([t$1("awc-vue-mounter")],exports.AwcVueMounter),Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),exports}({});
