(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function i(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var ud={exports:{}},ba={},cd={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag;function Ow(){if(ag)return Ae;ag=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),k=Symbol.iterator;function C(V){return V===null||typeof V!="object"?null:(V=k&&V[k]||V["@@iterator"],typeof V=="function"?V:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,Y={};function $(V,W,ke){this.props=V,this.context=W,this.refs=Y,this.updater=ke||F}$.prototype.isReactComponent={},$.prototype.setState=function(V,W){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,W,"setState")},$.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function he(){}he.prototype=$.prototype;function ee(V,W,ke){this.props=V,this.context=W,this.refs=Y,this.updater=ke||F}var de=ee.prototype=new he;de.constructor=ee,G(de,$.prototype),de.isPureReactComponent=!0;var we=Array.isArray,B=Object.prototype.hasOwnProperty,se={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function I(V,W,ke){var xe,Ce={},Re=null,Fe=null;if(W!=null)for(xe in W.ref!==void 0&&(Fe=W.ref),W.key!==void 0&&(Re=""+W.key),W)B.call(W,xe)&&!P.hasOwnProperty(xe)&&(Ce[xe]=W[xe]);var Oe=arguments.length-2;if(Oe===1)Ce.children=ke;else if(1<Oe){for(var Be=Array(Oe),$t=0;$t<Oe;$t++)Be[$t]=arguments[$t+2];Ce.children=Be}if(V&&V.defaultProps)for(xe in Oe=V.defaultProps,Oe)Ce[xe]===void 0&&(Ce[xe]=Oe[xe]);return{$$typeof:r,type:V,key:Re,ref:Fe,props:Ce,_owner:se.current}}function A(V,W){return{$$typeof:r,type:V.type,key:W,ref:V.ref,props:V.props,_owner:V._owner}}function D(V){return typeof V=="object"&&V!==null&&V.$$typeof===r}function N(V){var W={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(ke){return W[ke]})}var O=/\/+/g;function x(V,W){return typeof V=="object"&&V!==null&&V.key!=null?N(""+V.key):W.toString(36)}function qe(V,W,ke,xe,Ce){var Re=typeof V;(Re==="undefined"||Re==="boolean")&&(V=null);var Fe=!1;if(V===null)Fe=!0;else switch(Re){case"string":case"number":Fe=!0;break;case"object":switch(V.$$typeof){case r:case e:Fe=!0}}if(Fe)return Fe=V,Ce=Ce(Fe),V=xe===""?"."+x(Fe,0):xe,we(Ce)?(ke="",V!=null&&(ke=V.replace(O,"$&/")+"/"),qe(Ce,W,ke,"",function($t){return $t})):Ce!=null&&(D(Ce)&&(Ce=A(Ce,ke+(!Ce.key||Fe&&Fe.key===Ce.key?"":(""+Ce.key).replace(O,"$&/")+"/")+V)),W.push(Ce)),1;if(Fe=0,xe=xe===""?".":xe+":",we(V))for(var Oe=0;Oe<V.length;Oe++){Re=V[Oe];var Be=xe+x(Re,Oe);Fe+=qe(Re,W,ke,Be,Ce)}else if(Be=C(V),typeof Be=="function")for(V=Be.call(V),Oe=0;!(Re=V.next()).done;)Re=Re.value,Be=xe+x(Re,Oe++),Fe+=qe(Re,W,ke,Be,Ce);else if(Re==="object")throw W=String(V),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return Fe}function wt(V,W,ke){if(V==null)return V;var xe=[],Ce=0;return qe(V,xe,"","",function(Re){return W.call(ke,Re,Ce++)}),xe}function bt(V){if(V._status===-1){var W=V._result;W=W(),W.then(function(ke){(V._status===0||V._status===-1)&&(V._status=1,V._result=ke)},function(ke){(V._status===0||V._status===-1)&&(V._status=2,V._result=ke)}),V._status===-1&&(V._status=0,V._result=W)}if(V._status===1)return V._result.default;throw V._result}var Xe={current:null},te={transition:null},pe={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:te,ReactCurrentOwner:se};function oe(){throw Error("act(...) is not supported in production builds of React.")}return Ae.Children={map:wt,forEach:function(V,W,ke){wt(V,function(){W.apply(this,arguments)},ke)},count:function(V){var W=0;return wt(V,function(){W++}),W},toArray:function(V){return wt(V,function(W){return W})||[]},only:function(V){if(!D(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Ae.Component=$,Ae.Fragment=t,Ae.Profiler=o,Ae.PureComponent=ee,Ae.StrictMode=i,Ae.Suspense=g,Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,Ae.act=oe,Ae.cloneElement=function(V,W,ke){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var xe=G({},V.props),Ce=V.key,Re=V.ref,Fe=V._owner;if(W!=null){if(W.ref!==void 0&&(Re=W.ref,Fe=se.current),W.key!==void 0&&(Ce=""+W.key),V.type&&V.type.defaultProps)var Oe=V.type.defaultProps;for(Be in W)B.call(W,Be)&&!P.hasOwnProperty(Be)&&(xe[Be]=W[Be]===void 0&&Oe!==void 0?Oe[Be]:W[Be])}var Be=arguments.length-2;if(Be===1)xe.children=ke;else if(1<Be){Oe=Array(Be);for(var $t=0;$t<Be;$t++)Oe[$t]=arguments[$t+2];xe.children=Oe}return{$$typeof:r,type:V.type,key:Ce,ref:Re,props:xe,_owner:Fe}},Ae.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:u,_context:V},V.Consumer=V},Ae.createElement=I,Ae.createFactory=function(V){var W=I.bind(null,V);return W.type=V,W},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(V){return{$$typeof:m,render:V}},Ae.isValidElement=D,Ae.lazy=function(V){return{$$typeof:T,_payload:{_status:-1,_result:V},_init:bt}},Ae.memo=function(V,W){return{$$typeof:_,type:V,compare:W===void 0?null:W}},Ae.startTransition=function(V){var W=te.transition;te.transition={};try{V()}finally{te.transition=W}},Ae.unstable_act=oe,Ae.useCallback=function(V,W){return Xe.current.useCallback(V,W)},Ae.useContext=function(V){return Xe.current.useContext(V)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(V){return Xe.current.useDeferredValue(V)},Ae.useEffect=function(V,W){return Xe.current.useEffect(V,W)},Ae.useId=function(){return Xe.current.useId()},Ae.useImperativeHandle=function(V,W,ke){return Xe.current.useImperativeHandle(V,W,ke)},Ae.useInsertionEffect=function(V,W){return Xe.current.useInsertionEffect(V,W)},Ae.useLayoutEffect=function(V,W){return Xe.current.useLayoutEffect(V,W)},Ae.useMemo=function(V,W){return Xe.current.useMemo(V,W)},Ae.useReducer=function(V,W,ke){return Xe.current.useReducer(V,W,ke)},Ae.useRef=function(V){return Xe.current.useRef(V)},Ae.useState=function(V){return Xe.current.useState(V)},Ae.useSyncExternalStore=function(V,W,ke){return Xe.current.useSyncExternalStore(V,W,ke)},Ae.useTransition=function(){return Xe.current.useTransition()},Ae.version="18.3.1",Ae}var lg;function rf(){return lg||(lg=1,cd.exports=Ow()),cd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ug;function Lw(){if(ug)return ba;ug=1;var r=rf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,_){var T,k={},C=null,F=null;_!==void 0&&(C=""+_),g.key!==void 0&&(C=""+g.key),g.ref!==void 0&&(F=g.ref);for(T in g)i.call(g,T)&&!u.hasOwnProperty(T)&&(k[T]=g[T]);if(m&&m.defaultProps)for(T in g=m.defaultProps,g)k[T]===void 0&&(k[T]=g[T]);return{$$typeof:e,type:m,key:C,ref:F,props:k,_owner:o.current}}return ba.Fragment=t,ba.jsx=h,ba.jsxs=h,ba}var cg;function Mw(){return cg||(cg=1,ud.exports=Lw()),ud.exports}var w=Mw(),Nu={},hd={exports:{}},Xt={},dd={exports:{}},fd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hg;function jw(){return hg||(hg=1,(function(r){function e(te,pe){var oe=te.length;te.push(pe);e:for(;0<oe;){var V=oe-1>>>1,W=te[V];if(0<o(W,pe))te[V]=pe,te[oe]=W,oe=V;else break e}}function t(te){return te.length===0?null:te[0]}function i(te){if(te.length===0)return null;var pe=te[0],oe=te.pop();if(oe!==pe){te[0]=oe;e:for(var V=0,W=te.length,ke=W>>>1;V<ke;){var xe=2*(V+1)-1,Ce=te[xe],Re=xe+1,Fe=te[Re];if(0>o(Ce,oe))Re<W&&0>o(Fe,Ce)?(te[V]=Fe,te[Re]=oe,V=Re):(te[V]=Ce,te[xe]=oe,V=xe);else if(Re<W&&0>o(Fe,oe))te[V]=Fe,te[Re]=oe,V=Re;else break e}}return pe}function o(te,pe){var oe=te.sortIndex-pe.sortIndex;return oe!==0?oe:te.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var g=[],_=[],T=1,k=null,C=3,F=!1,G=!1,Y=!1,$=typeof setTimeout=="function"?setTimeout:null,he=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function de(te){for(var pe=t(_);pe!==null;){if(pe.callback===null)i(_);else if(pe.startTime<=te)i(_),pe.sortIndex=pe.expirationTime,e(g,pe);else break;pe=t(_)}}function we(te){if(Y=!1,de(te),!G)if(t(g)!==null)G=!0,bt(B);else{var pe=t(_);pe!==null&&Xe(we,pe.startTime-te)}}function B(te,pe){G=!1,Y&&(Y=!1,he(I),I=-1),F=!0;var oe=C;try{for(de(pe),k=t(g);k!==null&&(!(k.expirationTime>pe)||te&&!N());){var V=k.callback;if(typeof V=="function"){k.callback=null,C=k.priorityLevel;var W=V(k.expirationTime<=pe);pe=r.unstable_now(),typeof W=="function"?k.callback=W:k===t(g)&&i(g),de(pe)}else i(g);k=t(g)}if(k!==null)var ke=!0;else{var xe=t(_);xe!==null&&Xe(we,xe.startTime-pe),ke=!1}return ke}finally{k=null,C=oe,F=!1}}var se=!1,P=null,I=-1,A=5,D=-1;function N(){return!(r.unstable_now()-D<A)}function O(){if(P!==null){var te=r.unstable_now();D=te;var pe=!0;try{pe=P(!0,te)}finally{pe?x():(se=!1,P=null)}}else se=!1}var x;if(typeof ee=="function")x=function(){ee(O)};else if(typeof MessageChannel<"u"){var qe=new MessageChannel,wt=qe.port2;qe.port1.onmessage=O,x=function(){wt.postMessage(null)}}else x=function(){$(O,0)};function bt(te){P=te,se||(se=!0,x())}function Xe(te,pe){I=$(function(){te(r.unstable_now())},pe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(te){te.callback=null},r.unstable_continueExecution=function(){G||F||(G=!0,bt(B))},r.unstable_forceFrameRate=function(te){0>te||125<te?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<te?Math.floor(1e3/te):5},r.unstable_getCurrentPriorityLevel=function(){return C},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(te){switch(C){case 1:case 2:case 3:var pe=3;break;default:pe=C}var oe=C;C=pe;try{return te()}finally{C=oe}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(te,pe){switch(te){case 1:case 2:case 3:case 4:case 5:break;default:te=3}var oe=C;C=te;try{return pe()}finally{C=oe}},r.unstable_scheduleCallback=function(te,pe,oe){var V=r.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?V+oe:V):oe=V,te){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=oe+W,te={id:T++,callback:pe,priorityLevel:te,startTime:oe,expirationTime:W,sortIndex:-1},oe>V?(te.sortIndex=oe,e(_,te),t(g)===null&&te===t(_)&&(Y?(he(I),I=-1):Y=!0,Xe(we,oe-V))):(te.sortIndex=W,e(g,te),G||F||(G=!0,bt(B))),te},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(te){var pe=C;return function(){var oe=C;C=pe;try{return te.apply(this,arguments)}finally{C=oe}}}})(fd)),fd}var dg;function Fw(){return dg||(dg=1,dd.exports=jw()),dd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fg;function Uw(){if(fg)return Xt;fg=1;var r=rf(),e=Fw();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function u(n,s){h(n,s),h(n+"Capture",s)}function h(n,s){for(o[n]=s,n=0;n<s.length;n++)i.add(s[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T={},k={};function C(n){return g.call(k,n)?!0:g.call(T,n)?!1:_.test(n)?k[n]=!0:(T[n]=!0,!1)}function F(n,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function G(n,s,a,c){if(s===null||typeof s>"u"||F(n,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function Y(n,s,a,c,d,f,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=s,this.sanitizeURL=f,this.removeEmptyString=v}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){$[n]=new Y(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];$[s]=new Y(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){$[n]=new Y(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){$[n]=new Y(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){$[n]=new Y(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){$[n]=new Y(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){$[n]=new Y(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){$[n]=new Y(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){$[n]=new Y(n,5,!1,n.toLowerCase(),null,!1,!1)});var he=/[\-:]([a-z])/g;function ee(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(he,ee);$[s]=new Y(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(he,ee);$[s]=new Y(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(he,ee);$[s]=new Y(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){$[n]=new Y(n,1,!1,n.toLowerCase(),null,!1,!1)}),$.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){$[n]=new Y(n,1,!1,n.toLowerCase(),null,!0,!0)});function de(n,s,a,c){var d=$.hasOwnProperty(s)?$[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(G(s,a,d,c)&&(a=null),c||d===null?C(s)&&(a===null?n.removeAttribute(s):n.setAttribute(s,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,s,a):n.setAttribute(s,a))))}var we=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),se=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),N=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),qe=Symbol.for("react.suspense_list"),wt=Symbol.for("react.memo"),bt=Symbol.for("react.lazy"),Xe=Symbol.for("react.offscreen"),te=Symbol.iterator;function pe(n){return n===null||typeof n!="object"?null:(n=te&&n[te]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,V;function W(n){if(V===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||""}return`
`+V+n}var ke=!1;function xe(n,s){if(!n||ke)return"";ke=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(U){var c=U}Reflect.construct(n,[],s)}else{try{s.call()}catch(U){c=U}n.call(s.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),f=c.stack.split(`
`),v=d.length-1,S=f.length-1;1<=v&&0<=S&&d[v]!==f[S];)S--;for(;1<=v&&0<=S;v--,S--)if(d[v]!==f[S]){if(v!==1||S!==1)do if(v--,S--,0>S||d[v]!==f[S]){var R=`
`+d[v].replace(" at new "," at ");return n.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",n.displayName)),R}while(1<=v&&0<=S);break}}}finally{ke=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?W(n):""}function Ce(n){switch(n.tag){case 5:return W(n.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return n=xe(n.type,!1),n;case 11:return n=xe(n.type.render,!1),n;case 1:return n=xe(n.type,!0),n;default:return""}}function Re(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case P:return"Fragment";case se:return"Portal";case A:return"Profiler";case I:return"StrictMode";case x:return"Suspense";case qe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case N:return(n.displayName||"Context")+".Consumer";case D:return(n._context.displayName||"Context")+".Provider";case O:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case wt:return s=n.displayName||null,s!==null?s:Re(n.type)||"Memo";case bt:s=n._payload,n=n._init;try{return Re(n(s))}catch{}}return null}function Fe(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Re(s);case 8:return s===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Oe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function $t(n){var s=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),c=""+n[s];if(!n.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,f.call(this,v)}}),Object.defineProperty(n,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function vi(n){n._valueTracker||(n._valueTracker=$t(n))}function jo(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(s.setValue(n),!0):!1}function Lr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function wi(n,s){var a=s.checked;return oe({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function gl(n,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=Oe(s.value!=null?s.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Ei(n,s){s=s.checked,s!=null&&de(n,"checked",s,!1)}function Vs(n,s){Ei(n,s);var a=Oe(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?ut(n,s.type,a):s.hasOwnProperty("defaultValue")&&ut(n,s.type,Oe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function Fo(n,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,a||s===n.value||(n.value=s),n.defaultValue=s}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ut(n,s,a){(s!=="number"||Lr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var it=Array.isArray;function Tn(n,s,a,c){if(n=n.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=s.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Oe(a),s=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}s!==null||n[d].disabled||(s=n[d])}s!==null&&(s.selected=!0)}}function Uo(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function zo(n,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(it(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}n._wrapperState={initialValue:Oe(a)}}function yl(n,s){var a=Oe(s.value),c=Oe(s.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),s.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Mr(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function Bo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ti(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?Bo(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var jr,_l=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(s,a,c,d)})}:n})(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(jr=jr||document.createElement("div"),jr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=jr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function Os(n,s){if(s){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=s;return}}n.textContent=s}var Fr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vl=["Webkit","ms","Moz","O"];Object.keys(Fr).forEach(function(n){vl.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),Fr[s]=Fr[n]})});function Ur(n,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Fr.hasOwnProperty(n)&&Fr[n]?(""+s).trim():s+"px"}function Ii(n,s){n=n.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Ur(a,s[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var $o=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function In(n,s){if(s){if($o[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Si(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zr=null;function ki(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ar=null,lr=null,rt=null;function qo(n){if(n=ya(n)){if(typeof ar!="function")throw Error(t(280));var s=n.stateNode;s&&(s=Wl(s),ar(n.stateNode,n.type,s))}}function Br(n){lr?rt?rt.push(n):rt=[n]:lr=n}function $r(){if(lr){var n=lr,s=rt;if(rt=lr=null,qo(n),s)for(n=0;n<s.length;n++)qo(s[n])}}function wl(n,s){return n(s)}function El(){}var On=!1;function Tl(n,s,a){if(On)return n(s,a);On=!0;try{return wl(n,s,a)}finally{On=!1,(lr!==null||rt!==null)&&(El(),$r())}}function Ls(n,s){var a=n.stateNode;if(a===null)return null;var c=Wl(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var qr=!1;if(m)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){qr=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{qr=!1}function Il(n,s,a,c,d,f,v,S,R){var U=Array.prototype.slice.call(arguments,3);try{s.apply(a,U)}catch(Q){this.onError(Q)}}var ur=!1,Ln=null,xi=!1,hn=null,Sl={onError:function(n){ur=!0,Ln=n}};function kl(n,s,a,c,d,f,v,S,R){ur=!1,Ln=null,Il.apply(Sl,arguments)}function Ho(n,s,a,c,d,f,v,S,R){if(kl.apply(this,arguments),ur){if(ur){var U=Ln;ur=!1,Ln=null}else throw Error(t(198));xi||(xi=!0,hn=U)}}function Sn(n){var s=n,a=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(a=s.return),n=s.return;while(n)}return s.tag===3?a:null}function Wo(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function xl(n){if(Sn(n)!==n)throw Error(t(188))}function Al(n){var s=n.alternate;if(!s){if(s=Sn(n),s===null)throw Error(t(188));return s!==n?null:n}for(var a=n,c=s;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return xl(d),n;if(f===c)return xl(d),s;f=f.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=f;else{for(var v=!1,S=d.child;S;){if(S===a){v=!0,a=d,c=f;break}if(S===c){v=!0,c=d,a=f;break}S=S.sibling}if(!v){for(S=f.child;S;){if(S===a){v=!0,a=f,c=d;break}if(S===c){v=!0,c=f,a=d;break}S=S.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:s}function Cl(n){return n=Al(n),n!==null?Ms(n):null}function Ms(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=Ms(n);if(s!==null)return s;n=n.sibling}return null}var Go=e.unstable_scheduleCallback,Ai=e.unstable_cancelCallback,js=e.unstable_shouldYield,cr=e.unstable_requestPaint,Ke=e.unstable_now,Uc=e.unstable_getCurrentPriorityLevel,Ci=e.unstable_ImmediatePriority,Ko=e.unstable_UserBlockingPriority,Fs=e.unstable_NormalPriority,Qo=e.unstable_LowPriority,Ri=e.unstable_IdlePriority,Us=null,en=null;function Rl(n){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Us,n,void 0,(n.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:zs,Mn=Math.log,dn=Math.LN2;function zs(n){return n>>>=0,n===0?32:31-(Mn(n)/dn|0)|0}var jn=64,Wr=4194304;function je(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function hr(n,s){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,f=n.pingedLanes,v=a&268435455;if(v!==0){var S=v&~d;S!==0?c=je(S):(f&=v,f!==0&&(c=je(f)))}else v=a&~d,v!==0?c=je(v):f!==0&&(c=je(f));if(c===0)return 0;if(s!==0&&s!==c&&(s&d)===0&&(d=c&-c,f=s&-s,d>=f||d===16&&(f&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=c;0<s;)a=31-tn(s),d=1<<a,c|=n[a],s&=~d;return c}function Bs(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $s(n,s){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var v=31-tn(f),S=1<<v,R=d[v];R===-1?((S&a)===0||(S&c)!==0)&&(d[v]=Bs(S,s)):R<=s&&(n.expiredLanes|=S),f&=~S}}function Yo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Xo(){var n=jn;return jn<<=1,(jn&4194240)===0&&(jn=64),n}function Jo(n){for(var s=[],a=0;31>a;a++)s.push(n);return s}function qs(n,s,a){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-tn(s),n[s]=a}function zc(n,s){var a=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-tn(a),f=1<<d;s[d]=0,c[d]=-1,n[d]=-1,a&=~f}}function Zo(n,s){var a=n.entangledLanes|=s;for(n=n.entanglements;a;){var c=31-tn(a),d=1<<c;d&s|n[c]&s&&(n[c]|=s),a&=~d}}var De=0;function Fn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ea,Pi,ta,na,ra,Un=!1,Ni=[],zn=null,Bn=null,kt=null,Hs=new Map,dr=new Map,nn=[],Pl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gr(n,s){switch(n){case"focusin":case"focusout":zn=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":kt=null;break;case"pointerover":case"pointerout":Hs.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":dr.delete(s.pointerId)}}function kn(n,s,a,c,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:f,targetContainers:[d]},s!==null&&(s=ya(s),s!==null&&Pi(s)),n):(n.eventSystemFlags|=c,s=n.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),n)}function Nl(n,s,a,c,d){switch(s){case"focusin":return zn=kn(zn,n,s,a,c,d),!0;case"dragenter":return Bn=kn(Bn,n,s,a,c,d),!0;case"mouseover":return kt=kn(kt,n,s,a,c,d),!0;case"pointerover":var f=d.pointerId;return Hs.set(f,kn(Hs.get(f)||null,n,s,a,c,d)),!0;case"gotpointercapture":return f=d.pointerId,dr.set(f,kn(dr.get(f)||null,n,s,a,c,d)),!0}return!1}function bi(n){var s=Qs(n.target);if(s!==null){var a=Sn(s);if(a!==null){if(s=a.tag,s===13){if(s=Wo(a),s!==null){n.blockedOn=s,ra(n.priority,function(){ta(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function $e(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var a=Di(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);zr=c,a.target.dispatchEvent(c),zr=null}else return s=ya(a),s!==null&&Pi(s),n.blockedOn=a,!1;s.shift()}return!0}function bl(n,s,a){$e(n)&&a.delete(s)}function Bc(){Un=!1,zn!==null&&$e(zn)&&(zn=null),Bn!==null&&$e(Bn)&&(Bn=null),kt!==null&&$e(kt)&&(kt=null),Hs.forEach(bl),dr.forEach(bl)}function Kr(n,s){n.blockedOn===s&&(n.blockedOn=null,Un||(Un=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Bc)))}function Qr(n){function s(d){return Kr(d,n)}if(0<Ni.length){Kr(Ni[0],n);for(var a=1;a<Ni.length;a++){var c=Ni[a];c.blockedOn===n&&(c.blockedOn=null)}}for(zn!==null&&Kr(zn,n),Bn!==null&&Kr(Bn,n),kt!==null&&Kr(kt,n),Hs.forEach(s),dr.forEach(s),a=0;a<nn.length;a++)c=nn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<nn.length&&(a=nn[0],a.blockedOn===null);)bi(a),a.blockedOn===null&&nn.shift()}var fr=we.ReactCurrentBatchConfig,pr=!0;function $n(n,s,a,c){var d=De,f=fr.transition;fr.transition=null;try{De=1,sa(n,s,a,c)}finally{De=d,fr.transition=f}}function Dl(n,s,a,c){var d=De,f=fr.transition;fr.transition=null;try{De=4,sa(n,s,a,c)}finally{De=d,fr.transition=f}}function sa(n,s,a,c){if(pr){var d=Di(n,s,a,c);if(d===null)Zc(n,s,c,qn,a),Gr(n,c);else if(Nl(d,n,s,a,c))c.stopPropagation();else if(Gr(n,c),s&4&&-1<Pl.indexOf(n)){for(;d!==null;){var f=ya(d);if(f!==null&&ea(f),f=Di(n,s,a,c),f===null&&Zc(n,s,c,qn,a),f===d)break;d=f}d!==null&&c.stopPropagation()}else Zc(n,s,c,null,a)}}var qn=null;function Di(n,s,a,c){if(qn=null,n=ki(c),n=Qs(n),n!==null)if(s=Sn(n),s===null)n=null;else if(a=s.tag,a===13){if(n=Wo(s),n!==null)return n;n=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return qn=n,null}function Vi(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Uc()){case Ci:return 1;case Ko:return 4;case Fs:case Qo:return 16;case Ri:return 536870912;default:return 16}default:return 16}}var rn=null,Oi=null,mr=null;function Vl(){if(mr)return mr;var n,s=Oi,a=s.length,c,d="value"in rn?rn.value:rn.textContent,f=d.length;for(n=0;n<a&&s[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&s[a-c]===d[f-c];c++);return mr=d.slice(n,1<c?1-c:void 0)}function Ws(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function Hn(){return!0}function ia(){return!1}function Dt(n){function s(a,c,d,f,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(a=n[S],this[S]=a?a(f):f[S]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Hn:ia,this.isPropagationStopped=ia,this}return oe(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Hn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Hn)},persist:function(){},isPersistent:Hn}),s}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gs=Dt(Wn),Yr=oe({},Wn,{view:0,detail:0}),Li=Dt(Yr),Mi,ji,sn,Ks=oe({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ie,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==sn&&(sn&&n.type==="mousemove"?(Mi=n.screenX-sn.screenX,ji=n.screenY-sn.screenY):ji=Mi=0,sn=n),Mi)},movementY:function(n){return"movementY"in n?n.movementY:ji}}),oa=Dt(Ks),Ol=oe({},Ks,{dataTransfer:0}),Ll=Dt(Ol),Fi=oe({},Yr,{relatedTarget:0}),xt=Dt(Fi),Ml=oe({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),jl=Dt(Ml),Xr=oe({},Wn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),l=Dt(Xr),p=oe({},Wn,{data:0}),y=Dt(p),E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=z[n])?!!s[n]:!1}function Ie(){return Z}var ot=oe({},Yr,{key:function(n){if(n.key){var s=E[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=Ws(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?M[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ie,charCode:function(n){return n.type==="keypress"?Ws(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ws(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ze=Dt(ot),ct=oe({},Ks,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),on=Dt(ct),gr=oe({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ie}),Gn=Dt(gr),Kn=oe({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ui=Dt(Kn),aa=oe({},Ks,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Rv=Dt(aa),Pv=[9,13,27,32],$c=m&&"CompositionEvent"in window,la=null;m&&"documentMode"in document&&(la=document.documentMode);var Nv=m&&"TextEvent"in window&&!la,Zf=m&&(!$c||la&&8<la&&11>=la),ep=" ",tp=!1;function np(n,s){switch(n){case"keyup":return Pv.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var zi=!1;function bv(n,s){switch(n){case"compositionend":return rp(s);case"keypress":return s.which!==32?null:(tp=!0,ep);case"textInput":return n=s.data,n===ep&&tp?null:n;default:return null}}function Dv(n,s){if(zi)return n==="compositionend"||!$c&&np(n,s)?(n=Vl(),mr=Oi=rn=null,zi=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Zf&&s.locale!=="ko"?null:s.data;default:return null}}var Vv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sp(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!Vv[n.type]:s==="textarea"}function ip(n,s,a,c){Br(c),s=$l(s,"onChange"),0<s.length&&(a=new Gs("onChange","change",null,a,c),n.push({event:a,listeners:s}))}var ua=null,ca=null;function Ov(n){Ip(n,0)}function Fl(n){var s=Wi(n);if(jo(s))return n}function Lv(n,s){if(n==="change")return s}var op=!1;if(m){var qc;if(m){var Hc="oninput"in document;if(!Hc){var ap=document.createElement("div");ap.setAttribute("oninput","return;"),Hc=typeof ap.oninput=="function"}qc=Hc}else qc=!1;op=qc&&(!document.documentMode||9<document.documentMode)}function lp(){ua&&(ua.detachEvent("onpropertychange",up),ca=ua=null)}function up(n){if(n.propertyName==="value"&&Fl(ca)){var s=[];ip(s,ca,n,ki(n)),Tl(Ov,s)}}function Mv(n,s,a){n==="focusin"?(lp(),ua=s,ca=a,ua.attachEvent("onpropertychange",up)):n==="focusout"&&lp()}function jv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Fl(ca)}function Fv(n,s){if(n==="click")return Fl(s)}function Uv(n,s){if(n==="input"||n==="change")return Fl(s)}function zv(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var xn=typeof Object.is=="function"?Object.is:zv;function ha(n,s){if(xn(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var a=Object.keys(n),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(s,d)||!xn(n[d],s[d]))return!1}return!0}function cp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function hp(n,s){var a=cp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=s&&c>=s)return{node:a,offset:s-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=cp(a)}}function dp(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?dp(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function fp(){for(var n=window,s=Lr();s instanceof n.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)n=s.contentWindow;else break;s=Lr(n.document)}return s}function Wc(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function Bv(n){var s=fp(),a=n.focusedElem,c=n.selectionRange;if(s!==a&&a&&a.ownerDocument&&dp(a.ownerDocument.documentElement,a)){if(c!==null&&Wc(a)){if(s=c.start,n=c.end,n===void 0&&(n=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(n,a.value.length);else if(n=(s=a.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,f=Math.min(c.start,d);c=c.end===void 0?f:Math.min(c.end,d),!n.extend&&f>c&&(d=c,c=f,f=d),d=hp(a,f);var v=hp(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),n.removeAllRanges(),f>c?(n.addRange(s),n.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),n.addRange(s)))}}for(s=[],n=a;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)n=s[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var $v=m&&"documentMode"in document&&11>=document.documentMode,Bi=null,Gc=null,da=null,Kc=!1;function pp(n,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Kc||Bi==null||Bi!==Lr(c)||(c=Bi,"selectionStart"in c&&Wc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),da&&ha(da,c)||(da=c,c=$l(Gc,"onSelect"),0<c.length&&(s=new Gs("onSelect","select",null,s,a),n.push({event:s,listeners:c}),s.target=Bi)))}function Ul(n,s){var a={};return a[n.toLowerCase()]=s.toLowerCase(),a["Webkit"+n]="webkit"+s,a["Moz"+n]="moz"+s,a}var $i={animationend:Ul("Animation","AnimationEnd"),animationiteration:Ul("Animation","AnimationIteration"),animationstart:Ul("Animation","AnimationStart"),transitionend:Ul("Transition","TransitionEnd")},Qc={},mp={};m&&(mp=document.createElement("div").style,"AnimationEvent"in window||(delete $i.animationend.animation,delete $i.animationiteration.animation,delete $i.animationstart.animation),"TransitionEvent"in window||delete $i.transitionend.transition);function zl(n){if(Qc[n])return Qc[n];if(!$i[n])return n;var s=$i[n],a;for(a in s)if(s.hasOwnProperty(a)&&a in mp)return Qc[n]=s[a];return n}var gp=zl("animationend"),yp=zl("animationiteration"),_p=zl("animationstart"),vp=zl("transitionend"),wp=new Map,Ep="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jr(n,s){wp.set(n,s),u(s,[n])}for(var Yc=0;Yc<Ep.length;Yc++){var Xc=Ep[Yc],qv=Xc.toLowerCase(),Hv=Xc[0].toUpperCase()+Xc.slice(1);Jr(qv,"on"+Hv)}Jr(gp,"onAnimationEnd"),Jr(yp,"onAnimationIteration"),Jr(_p,"onAnimationStart"),Jr("dblclick","onDoubleClick"),Jr("focusin","onFocus"),Jr("focusout","onBlur"),Jr(vp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wv=new Set("cancel close invalid load scroll toggle".split(" ").concat(fa));function Tp(n,s,a){var c=n.type||"unknown-event";n.currentTarget=a,Ho(c,s,void 0,n),n.currentTarget=null}function Ip(n,s){s=(s&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var f=void 0;if(s)for(var v=c.length-1;0<=v;v--){var S=c[v],R=S.instance,U=S.currentTarget;if(S=S.listener,R!==f&&d.isPropagationStopped())break e;Tp(d,S,U),f=R}else for(v=0;v<c.length;v++){if(S=c[v],R=S.instance,U=S.currentTarget,S=S.listener,R!==f&&d.isPropagationStopped())break e;Tp(d,S,U),f=R}}}if(xi)throw n=hn,xi=!1,hn=null,n}function Qe(n,s){var a=s[ih];a===void 0&&(a=s[ih]=new Set);var c=n+"__bubble";a.has(c)||(Sp(s,n,2,!1),a.add(c))}function Jc(n,s,a){var c=0;s&&(c|=4),Sp(a,n,c,s)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function pa(n){if(!n[Bl]){n[Bl]=!0,i.forEach(function(a){a!=="selectionchange"&&(Wv.has(a)||Jc(a,!1,n),Jc(a,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[Bl]||(s[Bl]=!0,Jc("selectionchange",!1,s))}}function Sp(n,s,a,c){switch(Vi(s)){case 1:var d=$n;break;case 4:d=Dl;break;default:d=sa}a=d.bind(null,s,a,n),d=void 0,!qr||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(s,a,{capture:!0,passive:d}):n.addEventListener(s,a,!0):d!==void 0?n.addEventListener(s,a,{passive:d}):n.addEventListener(s,a,!1)}function Zc(n,s,a,c,d){var f=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var S=c.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var R=v.tag;if((R===3||R===4)&&(R=v.stateNode.containerInfo,R===d||R.nodeType===8&&R.parentNode===d))return;v=v.return}for(;S!==null;){if(v=Qs(S),v===null)return;if(R=v.tag,R===5||R===6){c=f=v;continue e}S=S.parentNode}}c=c.return}Tl(function(){var U=f,Q=ki(a),X=[];e:{var K=wp.get(n);if(K!==void 0){var re=Gs,le=n;switch(n){case"keypress":if(Ws(a)===0)break e;case"keydown":case"keyup":re=ze;break;case"focusin":le="focus",re=xt;break;case"focusout":le="blur",re=xt;break;case"beforeblur":case"afterblur":re=xt;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=oa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=Ll;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=Gn;break;case gp:case yp:case _p:re=jl;break;case vp:re=Ui;break;case"scroll":re=Li;break;case"wheel":re=Rv;break;case"copy":case"cut":case"paste":re=l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=on}var ue=(s&4)!==0,at=!ue&&n==="scroll",L=ue?K!==null?K+"Capture":null:K;ue=[];for(var b=U,j;b!==null;){j=b;var J=j.stateNode;if(j.tag===5&&J!==null&&(j=J,L!==null&&(J=Ls(b,L),J!=null&&ue.push(ma(b,J,j)))),at)break;b=b.return}0<ue.length&&(K=new re(K,le,null,a,Q),X.push({event:K,listeners:ue}))}}if((s&7)===0){e:{if(K=n==="mouseover"||n==="pointerover",re=n==="mouseout"||n==="pointerout",K&&a!==zr&&(le=a.relatedTarget||a.fromElement)&&(Qs(le)||le[yr]))break e;if((re||K)&&(K=Q.window===Q?Q:(K=Q.ownerDocument)?K.defaultView||K.parentWindow:window,re?(le=a.relatedTarget||a.toElement,re=U,le=le?Qs(le):null,le!==null&&(at=Sn(le),le!==at||le.tag!==5&&le.tag!==6)&&(le=null)):(re=null,le=U),re!==le)){if(ue=oa,J="onMouseLeave",L="onMouseEnter",b="mouse",(n==="pointerout"||n==="pointerover")&&(ue=on,J="onPointerLeave",L="onPointerEnter",b="pointer"),at=re==null?K:Wi(re),j=le==null?K:Wi(le),K=new ue(J,b+"leave",re,a,Q),K.target=at,K.relatedTarget=j,J=null,Qs(Q)===U&&(ue=new ue(L,b+"enter",le,a,Q),ue.target=j,ue.relatedTarget=at,J=ue),at=J,re&&le)t:{for(ue=re,L=le,b=0,j=ue;j;j=qi(j))b++;for(j=0,J=L;J;J=qi(J))j++;for(;0<b-j;)ue=qi(ue),b--;for(;0<j-b;)L=qi(L),j--;for(;b--;){if(ue===L||L!==null&&ue===L.alternate)break t;ue=qi(ue),L=qi(L)}ue=null}else ue=null;re!==null&&kp(X,K,re,ue,!1),le!==null&&at!==null&&kp(X,at,le,ue,!0)}}e:{if(K=U?Wi(U):window,re=K.nodeName&&K.nodeName.toLowerCase(),re==="select"||re==="input"&&K.type==="file")var ce=Lv;else if(sp(K))if(op)ce=Uv;else{ce=jv;var me=Mv}else(re=K.nodeName)&&re.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(ce=Fv);if(ce&&(ce=ce(n,U))){ip(X,ce,a,Q);break e}me&&me(n,K,U),n==="focusout"&&(me=K._wrapperState)&&me.controlled&&K.type==="number"&&ut(K,"number",K.value)}switch(me=U?Wi(U):window,n){case"focusin":(sp(me)||me.contentEditable==="true")&&(Bi=me,Gc=U,da=null);break;case"focusout":da=Gc=Bi=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,pp(X,a,Q);break;case"selectionchange":if($v)break;case"keydown":case"keyup":pp(X,a,Q)}var ge;if($c)e:{switch(n){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else zi?np(n,a)&&(Ee="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(Zf&&a.locale!=="ko"&&(zi||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&zi&&(ge=Vl()):(rn=Q,Oi="value"in rn?rn.value:rn.textContent,zi=!0)),me=$l(U,Ee),0<me.length&&(Ee=new y(Ee,n,null,a,Q),X.push({event:Ee,listeners:me}),ge?Ee.data=ge:(ge=rp(a),ge!==null&&(Ee.data=ge)))),(ge=Nv?bv(n,a):Dv(n,a))&&(U=$l(U,"onBeforeInput"),0<U.length&&(Q=new y("onBeforeInput","beforeinput",null,a,Q),X.push({event:Q,listeners:U}),Q.data=ge))}Ip(X,s)})}function ma(n,s,a){return{instance:n,listener:s,currentTarget:a}}function $l(n,s){for(var a=s+"Capture",c=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=Ls(n,a),f!=null&&c.unshift(ma(n,f,d)),f=Ls(n,s),f!=null&&c.push(ma(n,f,d))),n=n.return}return c}function qi(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function kp(n,s,a,c,d){for(var f=s._reactName,v=[];a!==null&&a!==c;){var S=a,R=S.alternate,U=S.stateNode;if(R!==null&&R===c)break;S.tag===5&&U!==null&&(S=U,d?(R=Ls(a,f),R!=null&&v.unshift(ma(a,R,S))):d||(R=Ls(a,f),R!=null&&v.push(ma(a,R,S)))),a=a.return}v.length!==0&&n.push({event:s,listeners:v})}var Gv=/\r\n?/g,Kv=/\u0000|\uFFFD/g;function xp(n){return(typeof n=="string"?n:""+n).replace(Gv,`
`).replace(Kv,"")}function ql(n,s,a){if(s=xp(s),xp(n)!==s&&a)throw Error(t(425))}function Hl(){}var eh=null,th=null;function nh(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var rh=typeof setTimeout=="function"?setTimeout:void 0,Qv=typeof clearTimeout=="function"?clearTimeout:void 0,Ap=typeof Promise=="function"?Promise:void 0,Yv=typeof queueMicrotask=="function"?queueMicrotask:typeof Ap<"u"?function(n){return Ap.resolve(null).then(n).catch(Xv)}:rh;function Xv(n){setTimeout(function(){throw n})}function sh(n,s){var a=s,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Qr(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Qr(s)}function Zr(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function Cp(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return n;s--}else a==="/$"&&s++}n=n.previousSibling}return null}var Hi=Math.random().toString(36).slice(2),Qn="__reactFiber$"+Hi,ga="__reactProps$"+Hi,yr="__reactContainer$"+Hi,ih="__reactEvents$"+Hi,Jv="__reactListeners$"+Hi,Zv="__reactHandles$"+Hi;function Qs(n){var s=n[Qn];if(s)return s;for(var a=n.parentNode;a;){if(s=a[yr]||a[Qn]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(n=Cp(n);n!==null;){if(a=n[Qn])return a;n=Cp(n)}return s}n=a,a=n.parentNode}return null}function ya(n){return n=n[Qn]||n[yr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Wi(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Wl(n){return n[ga]||null}var oh=[],Gi=-1;function es(n){return{current:n}}function Ye(n){0>Gi||(n.current=oh[Gi],oh[Gi]=null,Gi--)}function He(n,s){Gi++,oh[Gi]=n.current,n.current=s}var ts={},Vt=es(ts),Wt=es(!1),Ys=ts;function Ki(n,s){var a=n.type.contextTypes;if(!a)return ts;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in a)d[f]=s[f];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=d),d}function Gt(n){return n=n.childContextTypes,n!=null}function Gl(){Ye(Wt),Ye(Vt)}function Rp(n,s,a){if(Vt.current!==ts)throw Error(t(168));He(Vt,s),He(Wt,a)}function Pp(n,s,a){var c=n.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,Fe(n)||"Unknown",d));return oe({},a,c)}function Kl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ts,Ys=Vt.current,He(Vt,n),He(Wt,Wt.current),!0}function Np(n,s,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Pp(n,s,Ys),c.__reactInternalMemoizedMergedChildContext=n,Ye(Wt),Ye(Vt),He(Vt,n)):Ye(Wt),He(Wt,a)}var _r=null,Ql=!1,ah=!1;function bp(n){_r===null?_r=[n]:_r.push(n)}function ew(n){Ql=!0,bp(n)}function ns(){if(!ah&&_r!==null){ah=!0;var n=0,s=De;try{var a=_r;for(De=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}_r=null,Ql=!1}catch(d){throw _r!==null&&(_r=_r.slice(n+1)),Go(Ci,ns),d}finally{De=s,ah=!1}}return null}var Qi=[],Yi=0,Yl=null,Xl=0,fn=[],pn=0,Xs=null,vr=1,wr="";function Js(n,s){Qi[Yi++]=Xl,Qi[Yi++]=Yl,Yl=n,Xl=s}function Dp(n,s,a){fn[pn++]=vr,fn[pn++]=wr,fn[pn++]=Xs,Xs=n;var c=vr;n=wr;var d=32-tn(c)-1;c&=~(1<<d),a+=1;var f=32-tn(s)+d;if(30<f){var v=d-d%5;f=(c&(1<<v)-1).toString(32),c>>=v,d-=v,vr=1<<32-tn(s)+d|a<<d|c,wr=f+n}else vr=1<<f|a<<d|c,wr=n}function lh(n){n.return!==null&&(Js(n,1),Dp(n,1,0))}function uh(n){for(;n===Yl;)Yl=Qi[--Yi],Qi[Yi]=null,Xl=Qi[--Yi],Qi[Yi]=null;for(;n===Xs;)Xs=fn[--pn],fn[pn]=null,wr=fn[--pn],fn[pn]=null,vr=fn[--pn],fn[pn]=null}var an=null,ln=null,Je=!1,An=null;function Vp(n,s){var a=_n(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=n,s=n.deletions,s===null?(n.deletions=[a],n.flags|=16):s.push(a)}function Op(n,s){switch(n.tag){case 5:var a=n.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,an=n,ln=Zr(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,an=n,ln=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Xs!==null?{id:vr,overflow:wr}:null,n.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=_n(18,null,null,0),a.stateNode=s,a.return=n,n.child=a,an=n,ln=null,!0):!1;default:return!1}}function ch(n){return(n.mode&1)!==0&&(n.flags&128)===0}function hh(n){if(Je){var s=ln;if(s){var a=s;if(!Op(n,s)){if(ch(n))throw Error(t(418));s=Zr(a.nextSibling);var c=an;s&&Op(n,s)?Vp(c,a):(n.flags=n.flags&-4097|2,Je=!1,an=n)}}else{if(ch(n))throw Error(t(418));n.flags=n.flags&-4097|2,Je=!1,an=n}}}function Lp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;an=n}function Jl(n){if(n!==an)return!1;if(!Je)return Lp(n),Je=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!nh(n.type,n.memoizedProps)),s&&(s=ln)){if(ch(n))throw Mp(),Error(t(418));for(;s;)Vp(n,s),s=Zr(s.nextSibling)}if(Lp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(s===0){ln=Zr(n.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}n=n.nextSibling}ln=null}}else ln=an?Zr(n.stateNode.nextSibling):null;return!0}function Mp(){for(var n=ln;n;)n=Zr(n.nextSibling)}function Xi(){ln=an=null,Je=!1}function dh(n){An===null?An=[n]:An.push(n)}var tw=we.ReactCurrentBatchConfig;function _a(n,s,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,f=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===f?s.ref:(s=function(v){var S=d.refs;v===null?delete S[f]:S[f]=v},s._stringRef=f,s)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Zl(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function jp(n){var s=n._init;return s(n._payload)}function Fp(n){function s(L,b){if(n){var j=L.deletions;j===null?(L.deletions=[b],L.flags|=16):j.push(b)}}function a(L,b){if(!n)return null;for(;b!==null;)s(L,b),b=b.sibling;return null}function c(L,b){for(L=new Map;b!==null;)b.key!==null?L.set(b.key,b):L.set(b.index,b),b=b.sibling;return L}function d(L,b){return L=cs(L,b),L.index=0,L.sibling=null,L}function f(L,b,j){return L.index=j,n?(j=L.alternate,j!==null?(j=j.index,j<b?(L.flags|=2,b):j):(L.flags|=2,b)):(L.flags|=1048576,b)}function v(L){return n&&L.alternate===null&&(L.flags|=2),L}function S(L,b,j,J){return b===null||b.tag!==6?(b=rd(j,L.mode,J),b.return=L,b):(b=d(b,j),b.return=L,b)}function R(L,b,j,J){var ce=j.type;return ce===P?Q(L,b,j.props.children,J,j.key):b!==null&&(b.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===bt&&jp(ce)===b.type)?(J=d(b,j.props),J.ref=_a(L,b,j),J.return=L,J):(J=Iu(j.type,j.key,j.props,null,L.mode,J),J.ref=_a(L,b,j),J.return=L,J)}function U(L,b,j,J){return b===null||b.tag!==4||b.stateNode.containerInfo!==j.containerInfo||b.stateNode.implementation!==j.implementation?(b=sd(j,L.mode,J),b.return=L,b):(b=d(b,j.children||[]),b.return=L,b)}function Q(L,b,j,J,ce){return b===null||b.tag!==7?(b=oi(j,L.mode,J,ce),b.return=L,b):(b=d(b,j),b.return=L,b)}function X(L,b,j){if(typeof b=="string"&&b!==""||typeof b=="number")return b=rd(""+b,L.mode,j),b.return=L,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case B:return j=Iu(b.type,b.key,b.props,null,L.mode,j),j.ref=_a(L,null,b),j.return=L,j;case se:return b=sd(b,L.mode,j),b.return=L,b;case bt:var J=b._init;return X(L,J(b._payload),j)}if(it(b)||pe(b))return b=oi(b,L.mode,j,null),b.return=L,b;Zl(L,b)}return null}function K(L,b,j,J){var ce=b!==null?b.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return ce!==null?null:S(L,b,""+j,J);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case B:return j.key===ce?R(L,b,j,J):null;case se:return j.key===ce?U(L,b,j,J):null;case bt:return ce=j._init,K(L,b,ce(j._payload),J)}if(it(j)||pe(j))return ce!==null?null:Q(L,b,j,J,null);Zl(L,j)}return null}function re(L,b,j,J,ce){if(typeof J=="string"&&J!==""||typeof J=="number")return L=L.get(j)||null,S(b,L,""+J,ce);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case B:return L=L.get(J.key===null?j:J.key)||null,R(b,L,J,ce);case se:return L=L.get(J.key===null?j:J.key)||null,U(b,L,J,ce);case bt:var me=J._init;return re(L,b,j,me(J._payload),ce)}if(it(J)||pe(J))return L=L.get(j)||null,Q(b,L,J,ce,null);Zl(b,J)}return null}function le(L,b,j,J){for(var ce=null,me=null,ge=b,Ee=b=0,It=null;ge!==null&&Ee<j.length;Ee++){ge.index>Ee?(It=ge,ge=null):It=ge.sibling;var Me=K(L,ge,j[Ee],J);if(Me===null){ge===null&&(ge=It);break}n&&ge&&Me.alternate===null&&s(L,ge),b=f(Me,b,Ee),me===null?ce=Me:me.sibling=Me,me=Me,ge=It}if(Ee===j.length)return a(L,ge),Je&&Js(L,Ee),ce;if(ge===null){for(;Ee<j.length;Ee++)ge=X(L,j[Ee],J),ge!==null&&(b=f(ge,b,Ee),me===null?ce=ge:me.sibling=ge,me=ge);return Je&&Js(L,Ee),ce}for(ge=c(L,ge);Ee<j.length;Ee++)It=re(ge,L,Ee,j[Ee],J),It!==null&&(n&&It.alternate!==null&&ge.delete(It.key===null?Ee:It.key),b=f(It,b,Ee),me===null?ce=It:me.sibling=It,me=It);return n&&ge.forEach(function(hs){return s(L,hs)}),Je&&Js(L,Ee),ce}function ue(L,b,j,J){var ce=pe(j);if(typeof ce!="function")throw Error(t(150));if(j=ce.call(j),j==null)throw Error(t(151));for(var me=ce=null,ge=b,Ee=b=0,It=null,Me=j.next();ge!==null&&!Me.done;Ee++,Me=j.next()){ge.index>Ee?(It=ge,ge=null):It=ge.sibling;var hs=K(L,ge,Me.value,J);if(hs===null){ge===null&&(ge=It);break}n&&ge&&hs.alternate===null&&s(L,ge),b=f(hs,b,Ee),me===null?ce=hs:me.sibling=hs,me=hs,ge=It}if(Me.done)return a(L,ge),Je&&Js(L,Ee),ce;if(ge===null){for(;!Me.done;Ee++,Me=j.next())Me=X(L,Me.value,J),Me!==null&&(b=f(Me,b,Ee),me===null?ce=Me:me.sibling=Me,me=Me);return Je&&Js(L,Ee),ce}for(ge=c(L,ge);!Me.done;Ee++,Me=j.next())Me=re(ge,L,Ee,Me.value,J),Me!==null&&(n&&Me.alternate!==null&&ge.delete(Me.key===null?Ee:Me.key),b=f(Me,b,Ee),me===null?ce=Me:me.sibling=Me,me=Me);return n&&ge.forEach(function(Vw){return s(L,Vw)}),Je&&Js(L,Ee),ce}function at(L,b,j,J){if(typeof j=="object"&&j!==null&&j.type===P&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case B:e:{for(var ce=j.key,me=b;me!==null;){if(me.key===ce){if(ce=j.type,ce===P){if(me.tag===7){a(L,me.sibling),b=d(me,j.props.children),b.return=L,L=b;break e}}else if(me.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===bt&&jp(ce)===me.type){a(L,me.sibling),b=d(me,j.props),b.ref=_a(L,me,j),b.return=L,L=b;break e}a(L,me);break}else s(L,me);me=me.sibling}j.type===P?(b=oi(j.props.children,L.mode,J,j.key),b.return=L,L=b):(J=Iu(j.type,j.key,j.props,null,L.mode,J),J.ref=_a(L,b,j),J.return=L,L=J)}return v(L);case se:e:{for(me=j.key;b!==null;){if(b.key===me)if(b.tag===4&&b.stateNode.containerInfo===j.containerInfo&&b.stateNode.implementation===j.implementation){a(L,b.sibling),b=d(b,j.children||[]),b.return=L,L=b;break e}else{a(L,b);break}else s(L,b);b=b.sibling}b=sd(j,L.mode,J),b.return=L,L=b}return v(L);case bt:return me=j._init,at(L,b,me(j._payload),J)}if(it(j))return le(L,b,j,J);if(pe(j))return ue(L,b,j,J);Zl(L,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,b!==null&&b.tag===6?(a(L,b.sibling),b=d(b,j),b.return=L,L=b):(a(L,b),b=rd(j,L.mode,J),b.return=L,L=b),v(L)):a(L,b)}return at}var Ji=Fp(!0),Up=Fp(!1),eu=es(null),tu=null,Zi=null,fh=null;function ph(){fh=Zi=tu=null}function mh(n){var s=eu.current;Ye(eu),n._currentValue=s}function gh(n,s,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),n===a)break;n=n.return}}function eo(n,s){tu=n,fh=Zi=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(Kt=!0),n.firstContext=null)}function mn(n){var s=n._currentValue;if(fh!==n)if(n={context:n,memoizedValue:s,next:null},Zi===null){if(tu===null)throw Error(t(308));Zi=n,tu.dependencies={lanes:0,firstContext:n}}else Zi=Zi.next=n;return s}var Zs=null;function yh(n){Zs===null?Zs=[n]:Zs.push(n)}function zp(n,s,a,c){var d=s.interleaved;return d===null?(a.next=a,yh(s)):(a.next=d.next,d.next=a),s.interleaved=a,Er(n,c)}function Er(n,s){n.lanes|=s;var a=n.alternate;for(a!==null&&(a.lanes|=s),a=n,n=n.return;n!==null;)n.childLanes|=s,a=n.alternate,a!==null&&(a.childLanes|=s),a=n,n=n.return;return a.tag===3?a.stateNode:null}var rs=!1;function _h(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bp(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Tr(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function ss(n,s,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Le&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,Er(n,a)}return d=c.interleaved,d===null?(s.next=s,yh(c)):(s.next=d.next,d.next=s),c.interleaved=s,Er(n,a)}function nu(n,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,Zo(n,a)}}function $p(n,s){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?d=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?d=f=s:f=f.next=s}else d=f=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=s:n.next=s,a.lastBaseUpdate=s}function ru(n,s,a,c){var d=n.updateQueue;rs=!1;var f=d.firstBaseUpdate,v=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var R=S,U=R.next;R.next=null,v===null?f=U:v.next=U,v=R;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,S=Q.lastBaseUpdate,S!==v&&(S===null?Q.firstBaseUpdate=U:S.next=U,Q.lastBaseUpdate=R))}if(f!==null){var X=d.baseState;v=0,Q=U=R=null,S=f;do{var K=S.lane,re=S.eventTime;if((c&K)===K){Q!==null&&(Q=Q.next={eventTime:re,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var le=n,ue=S;switch(K=s,re=a,ue.tag){case 1:if(le=ue.payload,typeof le=="function"){X=le.call(re,X,K);break e}X=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ue.payload,K=typeof le=="function"?le.call(re,X,K):le,K==null)break e;X=oe({},X,K);break e;case 2:rs=!0}}S.callback!==null&&S.lane!==0&&(n.flags|=64,K=d.effects,K===null?d.effects=[S]:K.push(S))}else re={eventTime:re,lane:K,tag:S.tag,payload:S.payload,callback:S.callback,next:null},Q===null?(U=Q=re,R=X):Q=Q.next=re,v|=K;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;K=S,S=K.next,K.next=null,d.lastBaseUpdate=K,d.shared.pending=null}}while(!0);if(Q===null&&(R=X),d.baseState=R,d.firstBaseUpdate=U,d.lastBaseUpdate=Q,s=d.shared.interleaved,s!==null){d=s;do v|=d.lane,d=d.next;while(d!==s)}else f===null&&(d.shared.lanes=0);ni|=v,n.lanes=v,n.memoizedState=X}}function qp(n,s,a){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var c=n[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var va={},Yn=es(va),wa=es(va),Ea=es(va);function ei(n){if(n===va)throw Error(t(174));return n}function vh(n,s){switch(He(Ea,s),He(wa,n),He(Yn,va),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Ti(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=Ti(s,n)}Ye(Yn),He(Yn,s)}function to(){Ye(Yn),Ye(wa),Ye(Ea)}function Hp(n){ei(Ea.current);var s=ei(Yn.current),a=Ti(s,n.type);s!==a&&(He(wa,n),He(Yn,a))}function wh(n){wa.current===n&&(Ye(Yn),Ye(wa))}var et=es(0);function su(n){for(var s=n;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Eh=[];function Th(){for(var n=0;n<Eh.length;n++)Eh[n]._workInProgressVersionPrimary=null;Eh.length=0}var iu=we.ReactCurrentDispatcher,Ih=we.ReactCurrentBatchConfig,ti=0,tt=null,gt=null,Et=null,ou=!1,Ta=!1,Ia=0,nw=0;function Ot(){throw Error(t(321))}function Sh(n,s){if(s===null)return!1;for(var a=0;a<s.length&&a<n.length;a++)if(!xn(n[a],s[a]))return!1;return!0}function kh(n,s,a,c,d,f){if(ti=f,tt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,iu.current=n===null||n.memoizedState===null?ow:aw,n=a(c,d),Ta){f=0;do{if(Ta=!1,Ia=0,25<=f)throw Error(t(301));f+=1,Et=gt=null,s.updateQueue=null,iu.current=lw,n=a(c,d)}while(Ta)}if(iu.current=uu,s=gt!==null&&gt.next!==null,ti=0,Et=gt=tt=null,ou=!1,s)throw Error(t(300));return n}function xh(){var n=Ia!==0;return Ia=0,n}function Xn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?tt.memoizedState=Et=n:Et=Et.next=n,Et}function gn(){if(gt===null){var n=tt.alternate;n=n!==null?n.memoizedState:null}else n=gt.next;var s=Et===null?tt.memoizedState:Et.next;if(s!==null)Et=s,gt=n;else{if(n===null)throw Error(t(310));gt=n,n={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},Et===null?tt.memoizedState=Et=n:Et=Et.next=n}return Et}function Sa(n,s){return typeof s=="function"?s(n):s}function Ah(n){var s=gn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=gt,d=c.baseQueue,f=a.pending;if(f!==null){if(d!==null){var v=d.next;d.next=f.next,f.next=v}c.baseQueue=d=f,a.pending=null}if(d!==null){f=d.next,c=c.baseState;var S=v=null,R=null,U=f;do{var Q=U.lane;if((ti&Q)===Q)R!==null&&(R=R.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var X={lane:Q,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};R===null?(S=R=X,v=c):R=R.next=X,tt.lanes|=Q,ni|=Q}U=U.next}while(U!==null&&U!==f);R===null?v=c:R.next=S,xn(c,s.memoizedState)||(Kt=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=R,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do f=d.lane,tt.lanes|=f,ni|=f,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Ch(n){var s=gn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,f=s.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do f=n(f,v.action),v=v.next;while(v!==d);xn(f,s.memoizedState)||(Kt=!0),s.memoizedState=f,s.baseQueue===null&&(s.baseState=f),a.lastRenderedState=f}return[f,c]}function Wp(){}function Gp(n,s){var a=tt,c=gn(),d=s(),f=!xn(c.memoizedState,d);if(f&&(c.memoizedState=d,Kt=!0),c=c.queue,Rh(Yp.bind(null,a,c,n),[n]),c.getSnapshot!==s||f||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,ka(9,Qp.bind(null,a,c,d,s),void 0,null),Tt===null)throw Error(t(349));(ti&30)!==0||Kp(a,s,d)}return d}function Kp(n,s,a){n.flags|=16384,n={getSnapshot:s,value:a},s=tt.updateQueue,s===null?(s={lastEffect:null,stores:null},tt.updateQueue=s,s.stores=[n]):(a=s.stores,a===null?s.stores=[n]:a.push(n))}function Qp(n,s,a,c){s.value=a,s.getSnapshot=c,Xp(s)&&Jp(n)}function Yp(n,s,a){return a(function(){Xp(s)&&Jp(n)})}function Xp(n){var s=n.getSnapshot;n=n.value;try{var a=s();return!xn(n,a)}catch{return!0}}function Jp(n){var s=Er(n,1);s!==null&&Nn(s,n,1,-1)}function Zp(n){var s=Xn();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:n},s.queue=n,n=n.dispatch=iw.bind(null,tt,n),[s.memoizedState,n]}function ka(n,s,a,c){return n={tag:n,create:s,destroy:a,deps:c,next:null},s=tt.updateQueue,s===null?(s={lastEffect:null,stores:null},tt.updateQueue=s,s.lastEffect=n.next=n):(a=s.lastEffect,a===null?s.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,s.lastEffect=n)),n}function em(){return gn().memoizedState}function au(n,s,a,c){var d=Xn();tt.flags|=n,d.memoizedState=ka(1|s,a,void 0,c===void 0?null:c)}function lu(n,s,a,c){var d=gn();c=c===void 0?null:c;var f=void 0;if(gt!==null){var v=gt.memoizedState;if(f=v.destroy,c!==null&&Sh(c,v.deps)){d.memoizedState=ka(s,a,f,c);return}}tt.flags|=n,d.memoizedState=ka(1|s,a,f,c)}function tm(n,s){return au(8390656,8,n,s)}function Rh(n,s){return lu(2048,8,n,s)}function nm(n,s){return lu(4,2,n,s)}function rm(n,s){return lu(4,4,n,s)}function sm(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function im(n,s,a){return a=a!=null?a.concat([n]):null,lu(4,4,sm.bind(null,s,n),a)}function Ph(){}function om(n,s){var a=gn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Sh(s,c[1])?c[0]:(a.memoizedState=[n,s],n)}function am(n,s){var a=gn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Sh(s,c[1])?c[0]:(n=n(),a.memoizedState=[n,s],n)}function lm(n,s,a){return(ti&21)===0?(n.baseState&&(n.baseState=!1,Kt=!0),n.memoizedState=a):(xn(a,s)||(a=Xo(),tt.lanes|=a,ni|=a,n.baseState=!0),s)}function rw(n,s){var a=De;De=a!==0&&4>a?a:4,n(!0);var c=Ih.transition;Ih.transition={};try{n(!1),s()}finally{De=a,Ih.transition=c}}function um(){return gn().memoizedState}function sw(n,s,a){var c=ls(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},cm(n))hm(s,a);else if(a=zp(n,s,a,c),a!==null){var d=Ht();Nn(a,n,c,d),dm(a,s,c)}}function iw(n,s,a){var c=ls(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(cm(n))hm(s,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=s.lastRenderedReducer,f!==null))try{var v=s.lastRenderedState,S=f(v,a);if(d.hasEagerState=!0,d.eagerState=S,xn(S,v)){var R=s.interleaved;R===null?(d.next=d,yh(s)):(d.next=R.next,R.next=d),s.interleaved=d;return}}catch{}finally{}a=zp(n,s,d,c),a!==null&&(d=Ht(),Nn(a,n,c,d),dm(a,s,c))}}function cm(n){var s=n.alternate;return n===tt||s!==null&&s===tt}function hm(n,s){Ta=ou=!0;var a=n.pending;a===null?s.next=s:(s.next=a.next,a.next=s),n.pending=s}function dm(n,s,a){if((a&4194240)!==0){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,Zo(n,a)}}var uu={readContext:mn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},ow={readContext:mn,useCallback:function(n,s){return Xn().memoizedState=[n,s===void 0?null:s],n},useContext:mn,useEffect:tm,useImperativeHandle:function(n,s,a){return a=a!=null?a.concat([n]):null,au(4194308,4,sm.bind(null,s,n),a)},useLayoutEffect:function(n,s){return au(4194308,4,n,s)},useInsertionEffect:function(n,s){return au(4,2,n,s)},useMemo:function(n,s){var a=Xn();return s=s===void 0?null:s,n=n(),a.memoizedState=[n,s],n},useReducer:function(n,s,a){var c=Xn();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},c.queue=n,n=n.dispatch=sw.bind(null,tt,n),[c.memoizedState,n]},useRef:function(n){var s=Xn();return n={current:n},s.memoizedState=n},useState:Zp,useDebugValue:Ph,useDeferredValue:function(n){return Xn().memoizedState=n},useTransition:function(){var n=Zp(!1),s=n[0];return n=rw.bind(null,n[1]),Xn().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,a){var c=tt,d=Xn();if(Je){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Tt===null)throw Error(t(349));(ti&30)!==0||Kp(c,s,a)}d.memoizedState=a;var f={value:a,getSnapshot:s};return d.queue=f,tm(Yp.bind(null,c,f,n),[n]),c.flags|=2048,ka(9,Qp.bind(null,c,f,a,s),void 0,null),a},useId:function(){var n=Xn(),s=Tt.identifierPrefix;if(Je){var a=wr,c=vr;a=(c&~(1<<32-tn(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Ia++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=nw++,s=":"+s+"r"+a.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},aw={readContext:mn,useCallback:om,useContext:mn,useEffect:Rh,useImperativeHandle:im,useInsertionEffect:nm,useLayoutEffect:rm,useMemo:am,useReducer:Ah,useRef:em,useState:function(){return Ah(Sa)},useDebugValue:Ph,useDeferredValue:function(n){var s=gn();return lm(s,gt.memoizedState,n)},useTransition:function(){var n=Ah(Sa)[0],s=gn().memoizedState;return[n,s]},useMutableSource:Wp,useSyncExternalStore:Gp,useId:um,unstable_isNewReconciler:!1},lw={readContext:mn,useCallback:om,useContext:mn,useEffect:Rh,useImperativeHandle:im,useInsertionEffect:nm,useLayoutEffect:rm,useMemo:am,useReducer:Ch,useRef:em,useState:function(){return Ch(Sa)},useDebugValue:Ph,useDeferredValue:function(n){var s=gn();return gt===null?s.memoizedState=n:lm(s,gt.memoizedState,n)},useTransition:function(){var n=Ch(Sa)[0],s=gn().memoizedState;return[n,s]},useMutableSource:Wp,useSyncExternalStore:Gp,useId:um,unstable_isNewReconciler:!1};function Cn(n,s){if(n&&n.defaultProps){s=oe({},s),n=n.defaultProps;for(var a in n)s[a]===void 0&&(s[a]=n[a]);return s}return s}function Nh(n,s,a,c){s=n.memoizedState,a=a(c,s),a=a==null?s:oe({},s,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var cu={isMounted:function(n){return(n=n._reactInternals)?Sn(n)===n:!1},enqueueSetState:function(n,s,a){n=n._reactInternals;var c=Ht(),d=ls(n),f=Tr(c,d);f.payload=s,a!=null&&(f.callback=a),s=ss(n,f,d),s!==null&&(Nn(s,n,d,c),nu(s,n,d))},enqueueReplaceState:function(n,s,a){n=n._reactInternals;var c=Ht(),d=ls(n),f=Tr(c,d);f.tag=1,f.payload=s,a!=null&&(f.callback=a),s=ss(n,f,d),s!==null&&(Nn(s,n,d,c),nu(s,n,d))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var a=Ht(),c=ls(n),d=Tr(a,c);d.tag=2,s!=null&&(d.callback=s),s=ss(n,d,c),s!==null&&(Nn(s,n,c,a),nu(s,n,c))}};function fm(n,s,a,c,d,f,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,f,v):s.prototype&&s.prototype.isPureReactComponent?!ha(a,c)||!ha(d,f):!0}function pm(n,s,a){var c=!1,d=ts,f=s.contextType;return typeof f=="object"&&f!==null?f=mn(f):(d=Gt(s)?Ys:Vt.current,c=s.contextTypes,f=(c=c!=null)?Ki(n,d):ts),s=new s(a,f),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=cu,n.stateNode=s,s._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),s}function mm(n,s,a,c){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==n&&cu.enqueueReplaceState(s,s.state,null)}function bh(n,s,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},_h(n);var f=s.contextType;typeof f=="object"&&f!==null?d.context=mn(f):(f=Gt(s)?Ys:Vt.current,d.context=Ki(n,f)),d.state=n.memoizedState,f=s.getDerivedStateFromProps,typeof f=="function"&&(Nh(n,s,f,a),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&cu.enqueueReplaceState(d,d.state,null),ru(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function no(n,s){try{var a="",c=s;do a+=Ce(c),c=c.return;while(c);var d=a}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:s,stack:d,digest:null}}function Dh(n,s,a){return{value:n,source:null,stack:a??null,digest:s??null}}function Vh(n,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var uw=typeof WeakMap=="function"?WeakMap:Map;function gm(n,s,a){a=Tr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){yu||(yu=!0,Qh=c),Vh(n,s)},a}function ym(n,s,a){a=Tr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){Vh(n,s)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){Vh(n,s),typeof c!="function"&&(os===null?os=new Set([this]):os.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function _m(n,s,a){var c=n.pingCache;if(c===null){c=n.pingCache=new uw;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),n=Iw.bind(null,n,s,a),s.then(n,n))}function vm(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function wm(n,s,a,c,d){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Tr(-1,1),s.tag=2,ss(a,s,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var cw=we.ReactCurrentOwner,Kt=!1;function qt(n,s,a,c){s.child=n===null?Up(s,null,a,c):Ji(s,n.child,a,c)}function Em(n,s,a,c,d){a=a.render;var f=s.ref;return eo(s,d),c=kh(n,s,a,c,f,d),a=xh(),n!==null&&!Kt?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,Ir(n,s,d)):(Je&&a&&lh(s),s.flags|=1,qt(n,s,c,d),s.child)}function Tm(n,s,a,c,d){if(n===null){var f=a.type;return typeof f=="function"&&!nd(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=f,Im(n,s,f,c,d)):(n=Iu(a.type,null,c,s,s.mode,d),n.ref=s.ref,n.return=s,s.child=n)}if(f=n.child,(n.lanes&d)===0){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:ha,a(v,c)&&n.ref===s.ref)return Ir(n,s,d)}return s.flags|=1,n=cs(f,c),n.ref=s.ref,n.return=s,s.child=n}function Im(n,s,a,c,d){if(n!==null){var f=n.memoizedProps;if(ha(f,c)&&n.ref===s.ref)if(Kt=!1,s.pendingProps=c=f,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Kt=!0);else return s.lanes=n.lanes,Ir(n,s,d)}return Oh(n,s,a,c,d)}function Sm(n,s,a){var c=s.pendingProps,d=c.children,f=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(so,un),un|=a;else{if((a&1073741824)===0)return n=f!==null?f.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,He(so,un),un|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:a,He(so,un),un|=c}else f!==null?(c=f.baseLanes|a,s.memoizedState=null):c=a,He(so,un),un|=c;return qt(n,s,d,a),s.child}function km(n,s){var a=s.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Oh(n,s,a,c,d){var f=Gt(a)?Ys:Vt.current;return f=Ki(s,f),eo(s,d),a=kh(n,s,a,c,f,d),c=xh(),n!==null&&!Kt?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,Ir(n,s,d)):(Je&&c&&lh(s),s.flags|=1,qt(n,s,a,d),s.child)}function xm(n,s,a,c,d){if(Gt(a)){var f=!0;Kl(s)}else f=!1;if(eo(s,d),s.stateNode===null)du(n,s),pm(s,a,c),bh(s,a,c,d),c=!0;else if(n===null){var v=s.stateNode,S=s.memoizedProps;v.props=S;var R=v.context,U=a.contextType;typeof U=="object"&&U!==null?U=mn(U):(U=Gt(a)?Ys:Vt.current,U=Ki(s,U));var Q=a.getDerivedStateFromProps,X=typeof Q=="function"||typeof v.getSnapshotBeforeUpdate=="function";X||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==c||R!==U)&&mm(s,v,c,U),rs=!1;var K=s.memoizedState;v.state=K,ru(s,c,v,d),R=s.memoizedState,S!==c||K!==R||Wt.current||rs?(typeof Q=="function"&&(Nh(s,a,Q,c),R=s.memoizedState),(S=rs||fm(s,a,S,c,K,R,U))?(X||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=R),v.props=c,v.state=R,v.context=U,c=S):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,Bp(n,s),S=s.memoizedProps,U=s.type===s.elementType?S:Cn(s.type,S),v.props=U,X=s.pendingProps,K=v.context,R=a.contextType,typeof R=="object"&&R!==null?R=mn(R):(R=Gt(a)?Ys:Vt.current,R=Ki(s,R));var re=a.getDerivedStateFromProps;(Q=typeof re=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==X||K!==R)&&mm(s,v,c,R),rs=!1,K=s.memoizedState,v.state=K,ru(s,c,v,d);var le=s.memoizedState;S!==X||K!==le||Wt.current||rs?(typeof re=="function"&&(Nh(s,a,re,c),le=s.memoizedState),(U=rs||fm(s,a,U,c,K,le,R)||!1)?(Q||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,le,R),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,le,R)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&K===n.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&K===n.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=le),v.props=c,v.state=le,v.context=R,c=U):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&K===n.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&K===n.memoizedState||(s.flags|=1024),c=!1)}return Lh(n,s,a,c,f,d)}function Lh(n,s,a,c,d,f){km(n,s);var v=(s.flags&128)!==0;if(!c&&!v)return d&&Np(s,a,!1),Ir(n,s,f);c=s.stateNode,cw.current=s;var S=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,n!==null&&v?(s.child=Ji(s,n.child,null,f),s.child=Ji(s,null,S,f)):qt(n,s,S,f),s.memoizedState=c.state,d&&Np(s,a,!0),s.child}function Am(n){var s=n.stateNode;s.pendingContext?Rp(n,s.pendingContext,s.pendingContext!==s.context):s.context&&Rp(n,s.context,!1),vh(n,s.containerInfo)}function Cm(n,s,a,c,d){return Xi(),dh(d),s.flags|=256,qt(n,s,a,c),s.child}var Mh={dehydrated:null,treeContext:null,retryLane:0};function jh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Rm(n,s,a){var c=s.pendingProps,d=et.current,f=!1,v=(s.flags&128)!==0,S;if((S=v)||(S=n!==null&&n.memoizedState===null?!1:(d&2)!==0),S?(f=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),He(et,d&1),n===null)return hh(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(v=c.children,n=c.fallback,f?(c=s.mode,f=s.child,v={mode:"hidden",children:v},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=v):f=Su(v,c,0,null),n=oi(n,c,a,null),f.return=s,n.return=s,f.sibling=n,s.child=f,s.child.memoizedState=jh(a),s.memoizedState=Mh,n):Fh(s,v));if(d=n.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return hw(n,s,v,c,S,d,a);if(f){f=c.fallback,v=s.mode,d=n.child,S=d.sibling;var R={mode:"hidden",children:c.children};return(v&1)===0&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=R,s.deletions=null):(c=cs(d,R),c.subtreeFlags=d.subtreeFlags&14680064),S!==null?f=cs(S,f):(f=oi(f,v,a,null),f.flags|=2),f.return=s,c.return=s,c.sibling=f,s.child=c,c=f,f=s.child,v=n.child.memoizedState,v=v===null?jh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},f.memoizedState=v,f.childLanes=n.childLanes&~a,s.memoizedState=Mh,c}return f=n.child,n=f.sibling,c=cs(f,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,n!==null&&(a=s.deletions,a===null?(s.deletions=[n],s.flags|=16):a.push(n)),s.child=c,s.memoizedState=null,c}function Fh(n,s){return s=Su({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function hu(n,s,a,c){return c!==null&&dh(c),Ji(s,n.child,null,a),n=Fh(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function hw(n,s,a,c,d,f,v){if(a)return s.flags&256?(s.flags&=-257,c=Dh(Error(t(422))),hu(n,s,v,c)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(f=c.fallback,d=s.mode,c=Su({mode:"visible",children:c.children},d,0,null),f=oi(f,d,v,null),f.flags|=2,c.return=s,f.return=s,c.sibling=f,s.child=c,(s.mode&1)!==0&&Ji(s,n.child,null,v),s.child.memoizedState=jh(v),s.memoizedState=Mh,f);if((s.mode&1)===0)return hu(n,s,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;return c=S,f=Error(t(419)),c=Dh(f,c,void 0),hu(n,s,v,c)}if(S=(v&n.childLanes)!==0,Kt||S){if(c=Tt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,Er(n,d),Nn(c,n,d,-1))}return td(),c=Dh(Error(t(421))),hu(n,s,v,c)}return d.data==="$?"?(s.flags|=128,s.child=n.child,s=Sw.bind(null,n),d._reactRetry=s,null):(n=f.treeContext,ln=Zr(d.nextSibling),an=s,Je=!0,An=null,n!==null&&(fn[pn++]=vr,fn[pn++]=wr,fn[pn++]=Xs,vr=n.id,wr=n.overflow,Xs=s),s=Fh(s,c.children),s.flags|=4096,s)}function Pm(n,s,a){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s),gh(n.return,s,a)}function Uh(n,s,a,c,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(f.isBackwards=s,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=a,f.tailMode=d)}function Nm(n,s,a){var c=s.pendingProps,d=c.revealOrder,f=c.tail;if(qt(n,s,c.children,a),c=et.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Pm(n,a,s);else if(n.tag===19)Pm(n,a,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(He(et,c),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)n=a.alternate,n!==null&&su(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),Uh(s,!1,d,a,f);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(n=d.alternate,n!==null&&su(n)===null){s.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Uh(s,!0,a,null,f);break;case"together":Uh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function du(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function Ir(n,s,a){if(n!==null&&(s.dependencies=n.dependencies),ni|=s.lanes,(a&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,a=cs(n,n.pendingProps),s.child=a,a.return=s;n.sibling!==null;)n=n.sibling,a=a.sibling=cs(n,n.pendingProps),a.return=s;a.sibling=null}return s.child}function dw(n,s,a){switch(s.tag){case 3:Am(s),Xi();break;case 5:Hp(s);break;case 1:Gt(s.type)&&Kl(s);break;case 4:vh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;He(eu,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(He(et,et.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Rm(n,s,a):(He(et,et.current&1),n=Ir(n,s,a),n!==null?n.sibling:null);He(et,et.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(n.flags&128)!==0){if(c)return Nm(n,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),He(et,et.current),c)break;return null;case 22:case 23:return s.lanes=0,Sm(n,s,a)}return Ir(n,s,a)}var bm,zh,Dm,Vm;bm=function(n,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},zh=function(){},Dm=function(n,s,a,c){var d=n.memoizedProps;if(d!==c){n=s.stateNode,ei(Yn.current);var f=null;switch(a){case"input":d=wi(n,d),c=wi(n,c),f=[];break;case"select":d=oe({},d,{value:void 0}),c=oe({},c,{value:void 0}),f=[];break;case"textarea":d=Uo(n,d),c=Uo(n,c),f=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Hl)}In(a,c);var v;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var S=d[U];for(v in S)S.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?f||(f=[]):(f=f||[]).push(U,null));for(U in c){var R=c[U];if(S=d?.[U],c.hasOwnProperty(U)&&R!==S&&(R!=null||S!=null))if(U==="style")if(S){for(v in S)!S.hasOwnProperty(v)||R&&R.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in R)R.hasOwnProperty(v)&&S[v]!==R[v]&&(a||(a={}),a[v]=R[v])}else a||(f||(f=[]),f.push(U,a)),a=R;else U==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,S=S?S.__html:void 0,R!=null&&S!==R&&(f=f||[]).push(U,R)):U==="children"?typeof R!="string"&&typeof R!="number"||(f=f||[]).push(U,""+R):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(R!=null&&U==="onScroll"&&Qe("scroll",n),f||S===R||(f=[])):(f=f||[]).push(U,R))}a&&(f=f||[]).push("style",a);var U=f;(s.updateQueue=U)&&(s.flags|=4)}},Vm=function(n,s,a,c){a!==c&&(s.flags|=4)};function xa(n,s){if(!Je)switch(n.tailMode){case"hidden":s=n.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Lt(n){var s=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(s)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,s}function fw(n,s,a){var c=s.pendingProps;switch(uh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(s),null;case 1:return Gt(s.type)&&Gl(),Lt(s),null;case 3:return c=s.stateNode,to(),Ye(Wt),Ye(Vt),Th(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Jl(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,An!==null&&(Jh(An),An=null))),zh(n,s),Lt(s),null;case 5:wh(s);var d=ei(Ea.current);if(a=s.type,n!==null&&s.stateNode!=null)Dm(n,s,a,c,d),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Lt(s),null}if(n=ei(Yn.current),Jl(s)){c=s.stateNode,a=s.type;var f=s.memoizedProps;switch(c[Qn]=s,c[ga]=f,n=(s.mode&1)!==0,a){case"dialog":Qe("cancel",c),Qe("close",c);break;case"iframe":case"object":case"embed":Qe("load",c);break;case"video":case"audio":for(d=0;d<fa.length;d++)Qe(fa[d],c);break;case"source":Qe("error",c);break;case"img":case"image":case"link":Qe("error",c),Qe("load",c);break;case"details":Qe("toggle",c);break;case"input":gl(c,f),Qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},Qe("invalid",c);break;case"textarea":zo(c,f),Qe("invalid",c)}In(a,f),d=null;for(var v in f)if(f.hasOwnProperty(v)){var S=f[v];v==="children"?typeof S=="string"?c.textContent!==S&&(f.suppressHydrationWarning!==!0&&ql(c.textContent,S,n),d=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(f.suppressHydrationWarning!==!0&&ql(c.textContent,S,n),d=["children",""+S]):o.hasOwnProperty(v)&&S!=null&&v==="onScroll"&&Qe("scroll",c)}switch(a){case"input":vi(c),Fo(c,f,!0);break;case"textarea":vi(c),Mr(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=Hl)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Bo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Qn]=s,n[ga]=c,bm(n,s,!1,!1),s.stateNode=n;e:{switch(v=Si(a,c),a){case"dialog":Qe("cancel",n),Qe("close",n),d=c;break;case"iframe":case"object":case"embed":Qe("load",n),d=c;break;case"video":case"audio":for(d=0;d<fa.length;d++)Qe(fa[d],n);d=c;break;case"source":Qe("error",n),d=c;break;case"img":case"image":case"link":Qe("error",n),Qe("load",n),d=c;break;case"details":Qe("toggle",n),d=c;break;case"input":gl(n,c),d=wi(n,c),Qe("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=oe({},c,{value:void 0}),Qe("invalid",n);break;case"textarea":zo(n,c),d=Uo(n,c),Qe("invalid",n);break;default:d=c}In(a,d),S=d;for(f in S)if(S.hasOwnProperty(f)){var R=S[f];f==="style"?Ii(n,R):f==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&_l(n,R)):f==="children"?typeof R=="string"?(a!=="textarea"||R!=="")&&Os(n,R):typeof R=="number"&&Os(n,""+R):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?R!=null&&f==="onScroll"&&Qe("scroll",n):R!=null&&de(n,f,R,v))}switch(a){case"input":vi(n),Fo(n,c,!1);break;case"textarea":vi(n),Mr(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Oe(c.value));break;case"select":n.multiple=!!c.multiple,f=c.value,f!=null?Tn(n,!!c.multiple,f,!1):c.defaultValue!=null&&Tn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Hl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Lt(s),null;case 6:if(n&&s.stateNode!=null)Vm(n,s,n.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=ei(Ea.current),ei(Yn.current),Jl(s)){if(c=s.stateNode,a=s.memoizedProps,c[Qn]=s,(f=c.nodeValue!==a)&&(n=an,n!==null))switch(n.tag){case 3:ql(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ql(c.nodeValue,a,(n.mode&1)!==0)}f&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Qn]=s,s.stateNode=c}return Lt(s),null;case 13:if(Ye(et),c=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Je&&ln!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Mp(),Xi(),s.flags|=98560,f=!1;else if(f=Jl(s),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[Qn]=s}else Xi(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Lt(s),f=!1}else An!==null&&(Jh(An),An=null),f=!0;if(!f)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||(et.current&1)!==0?yt===0&&(yt=3):td())),s.updateQueue!==null&&(s.flags|=4),Lt(s),null);case 4:return to(),zh(n,s),n===null&&pa(s.stateNode.containerInfo),Lt(s),null;case 10:return mh(s.type._context),Lt(s),null;case 17:return Gt(s.type)&&Gl(),Lt(s),null;case 19:if(Ye(et),f=s.memoizedState,f===null)return Lt(s),null;if(c=(s.flags&128)!==0,v=f.rendering,v===null)if(c)xa(f,!1);else{if(yt!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(v=su(n),v!==null){for(s.flags|=128,xa(f,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)f=a,n=c,f.flags&=14680066,v=f.alternate,v===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=v.childLanes,f.lanes=v.lanes,f.child=v.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=v.memoizedProps,f.memoizedState=v.memoizedState,f.updateQueue=v.updateQueue,f.type=v.type,n=v.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return He(et,et.current&1|2),s.child}n=n.sibling}f.tail!==null&&Ke()>io&&(s.flags|=128,c=!0,xa(f,!1),s.lanes=4194304)}else{if(!c)if(n=su(v),n!==null){if(s.flags|=128,c=!0,a=n.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),xa(f,!0),f.tail===null&&f.tailMode==="hidden"&&!v.alternate&&!Je)return Lt(s),null}else 2*Ke()-f.renderingStartTime>io&&a!==1073741824&&(s.flags|=128,c=!0,xa(f,!1),s.lanes=4194304);f.isBackwards?(v.sibling=s.child,s.child=v):(a=f.last,a!==null?a.sibling=v:s.child=v,f.last=v)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=Ke(),s.sibling=null,a=et.current,He(et,c?a&1|2:a&1),s):(Lt(s),null);case 22:case 23:return ed(),c=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(un&1073741824)!==0&&(Lt(s),s.subtreeFlags&6&&(s.flags|=8192)):Lt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function pw(n,s){switch(uh(s),s.tag){case 1:return Gt(s.type)&&Gl(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return to(),Ye(Wt),Ye(Vt),Th(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return wh(s),null;case 13:if(Ye(et),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Xi()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return Ye(et),null;case 4:return to(),null;case 10:return mh(s.type._context),null;case 22:case 23:return ed(),null;case 24:return null;default:return null}}var fu=!1,Mt=!1,mw=typeof WeakSet=="function"?WeakSet:Set,ae=null;function ro(n,s){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){st(n,s,c)}else a.current=null}function Bh(n,s,a){try{a()}catch(c){st(n,s,c)}}var Om=!1;function gw(n,s){if(eh=pr,n=fp(),Wc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,S=-1,R=-1,U=0,Q=0,X=n,K=null;t:for(;;){for(var re;X!==a||d!==0&&X.nodeType!==3||(S=v+d),X!==f||c!==0&&X.nodeType!==3||(R=v+c),X.nodeType===3&&(v+=X.nodeValue.length),(re=X.firstChild)!==null;)K=X,X=re;for(;;){if(X===n)break t;if(K===a&&++U===d&&(S=v),K===f&&++Q===c&&(R=v),(re=X.nextSibling)!==null)break;X=K,K=X.parentNode}X=re}a=S===-1||R===-1?null:{start:S,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(th={focusedElem:n,selectionRange:a},pr=!1,ae=s;ae!==null;)if(s=ae,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,ae=n;else for(;ae!==null;){s=ae;try{var le=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(le!==null){var ue=le.memoizedProps,at=le.memoizedState,L=s.stateNode,b=L.getSnapshotBeforeUpdate(s.elementType===s.type?ue:Cn(s.type,ue),at);L.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var j=s.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){st(s,s.return,J)}if(n=s.sibling,n!==null){n.return=s.return,ae=n;break}ae=s.return}return le=Om,Om=!1,le}function Aa(n,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&Bh(s,a,f)}d=d.next}while(d!==c)}}function pu(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function $h(n){var s=n.ref;if(s!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof s=="function"?s(n):s.current=n}}function Lm(n){var s=n.alternate;s!==null&&(n.alternate=null,Lm(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[Qn],delete s[ga],delete s[ih],delete s[Jv],delete s[Zv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Mm(n){return n.tag===5||n.tag===3||n.tag===4}function jm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Mm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function qh(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(n,s):a.insertBefore(n,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(n,a)):(s=a,s.appendChild(n)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Hl));else if(c!==4&&(n=n.child,n!==null))for(qh(n,s,a),n=n.sibling;n!==null;)qh(n,s,a),n=n.sibling}function Hh(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.insertBefore(n,s):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Hh(n,s,a),n=n.sibling;n!==null;)Hh(n,s,a),n=n.sibling}var At=null,Rn=!1;function is(n,s,a){for(a=a.child;a!==null;)Fm(n,s,a),a=a.sibling}function Fm(n,s,a){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Us,a)}catch{}switch(a.tag){case 5:Mt||ro(a,s);case 6:var c=At,d=Rn;At=null,is(n,s,a),At=c,Rn=d,At!==null&&(Rn?(n=At,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):At.removeChild(a.stateNode));break;case 18:At!==null&&(Rn?(n=At,a=a.stateNode,n.nodeType===8?sh(n.parentNode,a):n.nodeType===1&&sh(n,a),Qr(n)):sh(At,a.stateNode));break;case 4:c=At,d=Rn,At=a.stateNode.containerInfo,Rn=!0,is(n,s,a),At=c,Rn=d;break;case 0:case 11:case 14:case 15:if(!Mt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var f=d,v=f.destroy;f=f.tag,v!==void 0&&((f&2)!==0||(f&4)!==0)&&Bh(a,s,v),d=d.next}while(d!==c)}is(n,s,a);break;case 1:if(!Mt&&(ro(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){st(a,s,S)}is(n,s,a);break;case 21:is(n,s,a);break;case 22:a.mode&1?(Mt=(c=Mt)||a.memoizedState!==null,is(n,s,a),Mt=c):is(n,s,a);break;default:is(n,s,a)}}function Um(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new mw),s.forEach(function(c){var d=kw.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Pn(n,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var f=n,v=s,S=v;e:for(;S!==null;){switch(S.tag){case 5:At=S.stateNode,Rn=!1;break e;case 3:At=S.stateNode.containerInfo,Rn=!0;break e;case 4:At=S.stateNode.containerInfo,Rn=!0;break e}S=S.return}if(At===null)throw Error(t(160));Fm(f,v,d),At=null,Rn=!1;var R=d.alternate;R!==null&&(R.return=null),d.return=null}catch(U){st(d,s,U)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)zm(s,n),s=s.sibling}function zm(n,s){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Pn(s,n),Jn(n),c&4){try{Aa(3,n,n.return),pu(3,n)}catch(ue){st(n,n.return,ue)}try{Aa(5,n,n.return)}catch(ue){st(n,n.return,ue)}}break;case 1:Pn(s,n),Jn(n),c&512&&a!==null&&ro(a,a.return);break;case 5:if(Pn(s,n),Jn(n),c&512&&a!==null&&ro(a,a.return),n.flags&32){var d=n.stateNode;try{Os(d,"")}catch(ue){st(n,n.return,ue)}}if(c&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,v=a!==null?a.memoizedProps:f,S=n.type,R=n.updateQueue;if(n.updateQueue=null,R!==null)try{S==="input"&&f.type==="radio"&&f.name!=null&&Ei(d,f),Si(S,v);var U=Si(S,f);for(v=0;v<R.length;v+=2){var Q=R[v],X=R[v+1];Q==="style"?Ii(d,X):Q==="dangerouslySetInnerHTML"?_l(d,X):Q==="children"?Os(d,X):de(d,Q,X,U)}switch(S){case"input":Vs(d,f);break;case"textarea":yl(d,f);break;case"select":var K=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var re=f.value;re!=null?Tn(d,!!f.multiple,re,!1):K!==!!f.multiple&&(f.defaultValue!=null?Tn(d,!!f.multiple,f.defaultValue,!0):Tn(d,!!f.multiple,f.multiple?[]:"",!1))}d[ga]=f}catch(ue){st(n,n.return,ue)}}break;case 6:if(Pn(s,n),Jn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(ue){st(n,n.return,ue)}}break;case 3:if(Pn(s,n),Jn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Qr(s.containerInfo)}catch(ue){st(n,n.return,ue)}break;case 4:Pn(s,n),Jn(n);break;case 13:Pn(s,n),Jn(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(Kh=Ke())),c&4&&Um(n);break;case 22:if(Q=a!==null&&a.memoizedState!==null,n.mode&1?(Mt=(U=Mt)||Q,Pn(s,n),Mt=U):Pn(s,n),Jn(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!Q&&(n.mode&1)!==0)for(ae=n,Q=n.child;Q!==null;){for(X=ae=Q;ae!==null;){switch(K=ae,re=K.child,K.tag){case 0:case 11:case 14:case 15:Aa(4,K,K.return);break;case 1:ro(K,K.return);var le=K.stateNode;if(typeof le.componentWillUnmount=="function"){c=K,a=K.return;try{s=c,le.props=s.memoizedProps,le.state=s.memoizedState,le.componentWillUnmount()}catch(ue){st(c,a,ue)}}break;case 5:ro(K,K.return);break;case 22:if(K.memoizedState!==null){qm(X);continue}}re!==null?(re.return=K,ae=re):qm(X)}Q=Q.sibling}e:for(Q=null,X=n;;){if(X.tag===5){if(Q===null){Q=X;try{d=X.stateNode,U?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(S=X.stateNode,R=X.memoizedProps.style,v=R!=null&&R.hasOwnProperty("display")?R.display:null,S.style.display=Ur("display",v))}catch(ue){st(n,n.return,ue)}}}else if(X.tag===6){if(Q===null)try{X.stateNode.nodeValue=U?"":X.memoizedProps}catch(ue){st(n,n.return,ue)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===n)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===n)break e;for(;X.sibling===null;){if(X.return===null||X.return===n)break e;Q===X&&(Q=null),X=X.return}Q===X&&(Q=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:Pn(s,n),Jn(n),c&4&&Um(n);break;case 21:break;default:Pn(s,n),Jn(n)}}function Jn(n){var s=n.flags;if(s&2){try{e:{for(var a=n.return;a!==null;){if(Mm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Os(d,""),c.flags&=-33);var f=jm(n);Hh(n,f,d);break;case 3:case 4:var v=c.stateNode.containerInfo,S=jm(n);qh(n,S,v);break;default:throw Error(t(161))}}catch(R){st(n,n.return,R)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function yw(n,s,a){ae=n,Bm(n)}function Bm(n,s,a){for(var c=(n.mode&1)!==0;ae!==null;){var d=ae,f=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||fu;if(!v){var S=d.alternate,R=S!==null&&S.memoizedState!==null||Mt;S=fu;var U=Mt;if(fu=v,(Mt=R)&&!U)for(ae=d;ae!==null;)v=ae,R=v.child,v.tag===22&&v.memoizedState!==null?Hm(d):R!==null?(R.return=v,ae=R):Hm(d);for(;f!==null;)ae=f,Bm(f),f=f.sibling;ae=d,fu=S,Mt=U}$m(n)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,ae=f):$m(n)}}function $m(n){for(;ae!==null;){var s=ae;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Mt||pu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Mt)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Cn(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=s.updateQueue;f!==null&&qp(s,f,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}qp(s,v,a)}break;case 5:var S=s.stateNode;if(a===null&&s.flags&4){a=S;var R=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&a.focus();break;case"img":R.src&&(a.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var U=s.alternate;if(U!==null){var Q=U.memoizedState;if(Q!==null){var X=Q.dehydrated;X!==null&&Qr(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||s.flags&512&&$h(s)}catch(K){st(s,s.return,K)}}if(s===n){ae=null;break}if(a=s.sibling,a!==null){a.return=s.return,ae=a;break}ae=s.return}}function qm(n){for(;ae!==null;){var s=ae;if(s===n){ae=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ae=a;break}ae=s.return}}function Hm(n){for(;ae!==null;){var s=ae;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{pu(4,s)}catch(R){st(s,a,R)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(R){st(s,d,R)}}var f=s.return;try{$h(s)}catch(R){st(s,f,R)}break;case 5:var v=s.return;try{$h(s)}catch(R){st(s,v,R)}}}catch(R){st(s,s.return,R)}if(s===n){ae=null;break}var S=s.sibling;if(S!==null){S.return=s.return,ae=S;break}ae=s.return}}var _w=Math.ceil,mu=we.ReactCurrentDispatcher,Wh=we.ReactCurrentOwner,yn=we.ReactCurrentBatchConfig,Le=0,Tt=null,ht=null,Ct=0,un=0,so=es(0),yt=0,Ca=null,ni=0,gu=0,Gh=0,Ra=null,Qt=null,Kh=0,io=1/0,Sr=null,yu=!1,Qh=null,os=null,_u=!1,as=null,vu=0,Pa=0,Yh=null,wu=-1,Eu=0;function Ht(){return(Le&6)!==0?Ke():wu!==-1?wu:wu=Ke()}function ls(n){return(n.mode&1)===0?1:(Le&2)!==0&&Ct!==0?Ct&-Ct:tw.transition!==null?(Eu===0&&(Eu=Xo()),Eu):(n=De,n!==0||(n=window.event,n=n===void 0?16:Vi(n.type)),n)}function Nn(n,s,a,c){if(50<Pa)throw Pa=0,Yh=null,Error(t(185));qs(n,a,c),((Le&2)===0||n!==Tt)&&(n===Tt&&((Le&2)===0&&(gu|=a),yt===4&&us(n,Ct)),Yt(n,c),a===1&&Le===0&&(s.mode&1)===0&&(io=Ke()+500,Ql&&ns()))}function Yt(n,s){var a=n.callbackNode;$s(n,s);var c=hr(n,n===Tt?Ct:0);if(c===0)a!==null&&Ai(a),n.callbackNode=null,n.callbackPriority=0;else if(s=c&-c,n.callbackPriority!==s){if(a!=null&&Ai(a),s===1)n.tag===0?ew(Gm.bind(null,n)):bp(Gm.bind(null,n)),Yv(function(){(Le&6)===0&&ns()}),a=null;else{switch(Fn(c)){case 1:a=Ci;break;case 4:a=Ko;break;case 16:a=Fs;break;case 536870912:a=Ri;break;default:a=Fs}a=tg(a,Wm.bind(null,n))}n.callbackPriority=s,n.callbackNode=a}}function Wm(n,s){if(wu=-1,Eu=0,(Le&6)!==0)throw Error(t(327));var a=n.callbackNode;if(oo()&&n.callbackNode!==a)return null;var c=hr(n,n===Tt?Ct:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||s)s=Tu(n,c);else{s=c;var d=Le;Le|=2;var f=Qm();(Tt!==n||Ct!==s)&&(Sr=null,io=Ke()+500,si(n,s));do try{Ew();break}catch(S){Km(n,S)}while(!0);ph(),mu.current=f,Le=d,ht!==null?s=0:(Tt=null,Ct=0,s=yt)}if(s!==0){if(s===2&&(d=Yo(n),d!==0&&(c=d,s=Xh(n,d))),s===1)throw a=Ca,si(n,0),us(n,c),Yt(n,Ke()),a;if(s===6)us(n,c);else{if(d=n.current.alternate,(c&30)===0&&!vw(d)&&(s=Tu(n,c),s===2&&(f=Yo(n),f!==0&&(c=f,s=Xh(n,f))),s===1))throw a=Ca,si(n,0),us(n,c),Yt(n,Ke()),a;switch(n.finishedWork=d,n.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:ii(n,Qt,Sr);break;case 3:if(us(n,c),(c&130023424)===c&&(s=Kh+500-Ke(),10<s)){if(hr(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ht(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=rh(ii.bind(null,n,Qt,Sr),s);break}ii(n,Qt,Sr);break;case 4:if(us(n,c),(c&4194240)===c)break;for(s=n.eventTimes,d=-1;0<c;){var v=31-tn(c);f=1<<v,v=s[v],v>d&&(d=v),c&=~f}if(c=d,c=Ke()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*_w(c/1960))-c,10<c){n.timeoutHandle=rh(ii.bind(null,n,Qt,Sr),c);break}ii(n,Qt,Sr);break;case 5:ii(n,Qt,Sr);break;default:throw Error(t(329))}}}return Yt(n,Ke()),n.callbackNode===a?Wm.bind(null,n):null}function Xh(n,s){var a=Ra;return n.current.memoizedState.isDehydrated&&(si(n,s).flags|=256),n=Tu(n,s),n!==2&&(s=Qt,Qt=a,s!==null&&Jh(s)),n}function Jh(n){Qt===null?Qt=n:Qt.push.apply(Qt,n)}function vw(n){for(var s=n;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],f=d.getSnapshot;d=d.value;try{if(!xn(f(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function us(n,s){for(s&=~Gh,s&=~gu,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var a=31-tn(s),c=1<<a;n[a]=-1,s&=~c}}function Gm(n){if((Le&6)!==0)throw Error(t(327));oo();var s=hr(n,0);if((s&1)===0)return Yt(n,Ke()),null;var a=Tu(n,s);if(n.tag!==0&&a===2){var c=Yo(n);c!==0&&(s=c,a=Xh(n,c))}if(a===1)throw a=Ca,si(n,0),us(n,s),Yt(n,Ke()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,ii(n,Qt,Sr),Yt(n,Ke()),null}function Zh(n,s){var a=Le;Le|=1;try{return n(s)}finally{Le=a,Le===0&&(io=Ke()+500,Ql&&ns())}}function ri(n){as!==null&&as.tag===0&&(Le&6)===0&&oo();var s=Le;Le|=1;var a=yn.transition,c=De;try{if(yn.transition=null,De=1,n)return n()}finally{De=c,yn.transition=a,Le=s,(Le&6)===0&&ns()}}function ed(){un=so.current,Ye(so)}function si(n,s){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Qv(a)),ht!==null)for(a=ht.return;a!==null;){var c=a;switch(uh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Gl();break;case 3:to(),Ye(Wt),Ye(Vt),Th();break;case 5:wh(c);break;case 4:to();break;case 13:Ye(et);break;case 19:Ye(et);break;case 10:mh(c.type._context);break;case 22:case 23:ed()}a=a.return}if(Tt=n,ht=n=cs(n.current,null),Ct=un=s,yt=0,Ca=null,Gh=gu=ni=0,Qt=Ra=null,Zs!==null){for(s=0;s<Zs.length;s++)if(a=Zs[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,f=a.pending;if(f!==null){var v=f.next;f.next=d,c.next=v}a.pending=c}Zs=null}return n}function Km(n,s){do{var a=ht;try{if(ph(),iu.current=uu,ou){for(var c=tt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}ou=!1}if(ti=0,Et=gt=tt=null,Ta=!1,Ia=0,Wh.current=null,a===null||a.return===null){yt=1,Ca=s,ht=null;break}e:{var f=n,v=a.return,S=a,R=s;if(s=Ct,S.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var U=R,Q=S,X=Q.tag;if((Q.mode&1)===0&&(X===0||X===11||X===15)){var K=Q.alternate;K?(Q.updateQueue=K.updateQueue,Q.memoizedState=K.memoizedState,Q.lanes=K.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var re=vm(v);if(re!==null){re.flags&=-257,wm(re,v,S,f,s),re.mode&1&&_m(f,U,s),s=re,R=U;var le=s.updateQueue;if(le===null){var ue=new Set;ue.add(R),s.updateQueue=ue}else le.add(R);break e}else{if((s&1)===0){_m(f,U,s),td();break e}R=Error(t(426))}}else if(Je&&S.mode&1){var at=vm(v);if(at!==null){(at.flags&65536)===0&&(at.flags|=256),wm(at,v,S,f,s),dh(no(R,S));break e}}f=R=no(R,S),yt!==4&&(yt=2),Ra===null?Ra=[f]:Ra.push(f),f=v;do{switch(f.tag){case 3:f.flags|=65536,s&=-s,f.lanes|=s;var L=gm(f,R,s);$p(f,L);break e;case 1:S=R;var b=f.type,j=f.stateNode;if((f.flags&128)===0&&(typeof b.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(os===null||!os.has(j)))){f.flags|=65536,s&=-s,f.lanes|=s;var J=ym(f,S,s);$p(f,J);break e}}f=f.return}while(f!==null)}Xm(a)}catch(ce){s=ce,ht===a&&a!==null&&(ht=a=a.return);continue}break}while(!0)}function Qm(){var n=mu.current;return mu.current=uu,n===null?uu:n}function td(){(yt===0||yt===3||yt===2)&&(yt=4),Tt===null||(ni&268435455)===0&&(gu&268435455)===0||us(Tt,Ct)}function Tu(n,s){var a=Le;Le|=2;var c=Qm();(Tt!==n||Ct!==s)&&(Sr=null,si(n,s));do try{ww();break}catch(d){Km(n,d)}while(!0);if(ph(),Le=a,mu.current=c,ht!==null)throw Error(t(261));return Tt=null,Ct=0,yt}function ww(){for(;ht!==null;)Ym(ht)}function Ew(){for(;ht!==null&&!js();)Ym(ht)}function Ym(n){var s=eg(n.alternate,n,un);n.memoizedProps=n.pendingProps,s===null?Xm(n):ht=s,Wh.current=null}function Xm(n){var s=n;do{var a=s.alternate;if(n=s.return,(s.flags&32768)===0){if(a=fw(a,s,un),a!==null){ht=a;return}}else{if(a=pw(a,s),a!==null){a.flags&=32767,ht=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{yt=6,ht=null;return}}if(s=s.sibling,s!==null){ht=s;return}ht=s=n}while(s!==null);yt===0&&(yt=5)}function ii(n,s,a){var c=De,d=yn.transition;try{yn.transition=null,De=1,Tw(n,s,a,c)}finally{yn.transition=d,De=c}return null}function Tw(n,s,a,c){do oo();while(as!==null);if((Le&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=a.lanes|a.childLanes;if(zc(n,f),n===Tt&&(ht=Tt=null,Ct=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||_u||(_u=!0,tg(Fs,function(){return oo(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=yn.transition,yn.transition=null;var v=De;De=1;var S=Le;Le|=4,Wh.current=null,gw(n,a),zm(a,n),Bv(th),pr=!!eh,th=eh=null,n.current=a,yw(a),cr(),Le=S,De=v,yn.transition=f}else n.current=a;if(_u&&(_u=!1,as=n,vu=d),f=n.pendingLanes,f===0&&(os=null),Rl(a.stateNode),Yt(n,Ke()),s!==null)for(c=n.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(yu)throw yu=!1,n=Qh,Qh=null,n;return(vu&1)!==0&&n.tag!==0&&oo(),f=n.pendingLanes,(f&1)!==0?n===Yh?Pa++:(Pa=0,Yh=n):Pa=0,ns(),null}function oo(){if(as!==null){var n=Fn(vu),s=yn.transition,a=De;try{if(yn.transition=null,De=16>n?16:n,as===null)var c=!1;else{if(n=as,as=null,vu=0,(Le&6)!==0)throw Error(t(331));var d=Le;for(Le|=4,ae=n.current;ae!==null;){var f=ae,v=f.child;if((ae.flags&16)!==0){var S=f.deletions;if(S!==null){for(var R=0;R<S.length;R++){var U=S[R];for(ae=U;ae!==null;){var Q=ae;switch(Q.tag){case 0:case 11:case 15:Aa(8,Q,f)}var X=Q.child;if(X!==null)X.return=Q,ae=X;else for(;ae!==null;){Q=ae;var K=Q.sibling,re=Q.return;if(Lm(Q),Q===U){ae=null;break}if(K!==null){K.return=re,ae=K;break}ae=re}}}var le=f.alternate;if(le!==null){var ue=le.child;if(ue!==null){le.child=null;do{var at=ue.sibling;ue.sibling=null,ue=at}while(ue!==null)}}ae=f}}if((f.subtreeFlags&2064)!==0&&v!==null)v.return=f,ae=v;else e:for(;ae!==null;){if(f=ae,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:Aa(9,f,f.return)}var L=f.sibling;if(L!==null){L.return=f.return,ae=L;break e}ae=f.return}}var b=n.current;for(ae=b;ae!==null;){v=ae;var j=v.child;if((v.subtreeFlags&2064)!==0&&j!==null)j.return=v,ae=j;else e:for(v=b;ae!==null;){if(S=ae,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:pu(9,S)}}catch(ce){st(S,S.return,ce)}if(S===v){ae=null;break e}var J=S.sibling;if(J!==null){J.return=S.return,ae=J;break e}ae=S.return}}if(Le=d,ns(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Us,n)}catch{}c=!0}return c}finally{De=a,yn.transition=s}}return!1}function Jm(n,s,a){s=no(a,s),s=gm(n,s,1),n=ss(n,s,1),s=Ht(),n!==null&&(qs(n,1,s),Yt(n,s))}function st(n,s,a){if(n.tag===3)Jm(n,n,a);else for(;s!==null;){if(s.tag===3){Jm(s,n,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(os===null||!os.has(c))){n=no(a,n),n=ym(s,n,1),s=ss(s,n,1),n=Ht(),s!==null&&(qs(s,1,n),Yt(s,n));break}}s=s.return}}function Iw(n,s,a){var c=n.pingCache;c!==null&&c.delete(s),s=Ht(),n.pingedLanes|=n.suspendedLanes&a,Tt===n&&(Ct&a)===a&&(yt===4||yt===3&&(Ct&130023424)===Ct&&500>Ke()-Kh?si(n,0):Gh|=a),Yt(n,s)}function Zm(n,s){s===0&&((n.mode&1)===0?s=1:(s=Wr,Wr<<=1,(Wr&130023424)===0&&(Wr=4194304)));var a=Ht();n=Er(n,s),n!==null&&(qs(n,s,a),Yt(n,a))}function Sw(n){var s=n.memoizedState,a=0;s!==null&&(a=s.retryLane),Zm(n,a)}function kw(n,s){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),Zm(n,a)}var eg;eg=function(n,s,a){if(n!==null)if(n.memoizedProps!==s.pendingProps||Wt.current)Kt=!0;else{if((n.lanes&a)===0&&(s.flags&128)===0)return Kt=!1,dw(n,s,a);Kt=(n.flags&131072)!==0}else Kt=!1,Je&&(s.flags&1048576)!==0&&Dp(s,Xl,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;du(n,s),n=s.pendingProps;var d=Ki(s,Vt.current);eo(s,a),d=kh(null,s,c,n,d,a);var f=xh();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Gt(c)?(f=!0,Kl(s)):f=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,_h(s),d.updater=cu,s.stateNode=d,d._reactInternals=s,bh(s,c,n,a),s=Lh(null,s,c,!0,f,a)):(s.tag=0,Je&&f&&lh(s),qt(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(du(n,s),n=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=Aw(c),n=Cn(c,n),d){case 0:s=Oh(null,s,c,n,a);break e;case 1:s=xm(null,s,c,n,a);break e;case 11:s=Em(null,s,c,n,a);break e;case 14:s=Tm(null,s,c,Cn(c.type,n),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Cn(c,d),Oh(n,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Cn(c,d),xm(n,s,c,d,a);case 3:e:{if(Am(s),n===null)throw Error(t(387));c=s.pendingProps,f=s.memoizedState,d=f.element,Bp(n,s),ru(s,c,null,a);var v=s.memoizedState;if(c=v.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=f,s.memoizedState=f,s.flags&256){d=no(Error(t(423)),s),s=Cm(n,s,c,a,d);break e}else if(c!==d){d=no(Error(t(424)),s),s=Cm(n,s,c,a,d);break e}else for(ln=Zr(s.stateNode.containerInfo.firstChild),an=s,Je=!0,An=null,a=Up(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Xi(),c===d){s=Ir(n,s,a);break e}qt(n,s,c,a)}s=s.child}return s;case 5:return Hp(s),n===null&&hh(s),c=s.type,d=s.pendingProps,f=n!==null?n.memoizedProps:null,v=d.children,nh(c,d)?v=null:f!==null&&nh(c,f)&&(s.flags|=32),km(n,s),qt(n,s,v,a),s.child;case 6:return n===null&&hh(s),null;case 13:return Rm(n,s,a);case 4:return vh(s,s.stateNode.containerInfo),c=s.pendingProps,n===null?s.child=Ji(s,null,c,a):qt(n,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Cn(c,d),Em(n,s,c,d,a);case 7:return qt(n,s,s.pendingProps,a),s.child;case 8:return qt(n,s,s.pendingProps.children,a),s.child;case 12:return qt(n,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,f=s.memoizedProps,v=d.value,He(eu,c._currentValue),c._currentValue=v,f!==null)if(xn(f.value,v)){if(f.children===d.children&&!Wt.current){s=Ir(n,s,a);break e}}else for(f=s.child,f!==null&&(f.return=s);f!==null;){var S=f.dependencies;if(S!==null){v=f.child;for(var R=S.firstContext;R!==null;){if(R.context===c){if(f.tag===1){R=Tr(-1,a&-a),R.tag=2;var U=f.updateQueue;if(U!==null){U=U.shared;var Q=U.pending;Q===null?R.next=R:(R.next=Q.next,Q.next=R),U.pending=R}}f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),gh(f.return,a,s),S.lanes|=a;break}R=R.next}}else if(f.tag===10)v=f.type===s.type?null:f.child;else if(f.tag===18){if(v=f.return,v===null)throw Error(t(341));v.lanes|=a,S=v.alternate,S!==null&&(S.lanes|=a),gh(v,a,s),v=f.sibling}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===s){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}qt(n,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,eo(s,a),d=mn(d),c=c(d),s.flags|=1,qt(n,s,c,a),s.child;case 14:return c=s.type,d=Cn(c,s.pendingProps),d=Cn(c.type,d),Tm(n,s,c,d,a);case 15:return Im(n,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Cn(c,d),du(n,s),s.tag=1,Gt(c)?(n=!0,Kl(s)):n=!1,eo(s,a),pm(s,c,d),bh(s,c,d,a),Lh(null,s,c,!0,n,a);case 19:return Nm(n,s,a);case 22:return Sm(n,s,a)}throw Error(t(156,s.tag))};function tg(n,s){return Go(n,s)}function xw(n,s,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(n,s,a,c){return new xw(n,s,a,c)}function nd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Aw(n){if(typeof n=="function")return nd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===wt)return 14}return 2}function cs(n,s){var a=n.alternate;return a===null?(a=_n(n.tag,s,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=s,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,s=n.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Iu(n,s,a,c,d,f){var v=2;if(c=n,typeof n=="function")nd(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case P:return oi(a.children,d,f,s);case I:v=8,d|=8;break;case A:return n=_n(12,a,s,d|2),n.elementType=A,n.lanes=f,n;case x:return n=_n(13,a,s,d),n.elementType=x,n.lanes=f,n;case qe:return n=_n(19,a,s,d),n.elementType=qe,n.lanes=f,n;case Xe:return Su(a,d,f,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case D:v=10;break e;case N:v=9;break e;case O:v=11;break e;case wt:v=14;break e;case bt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=_n(v,a,s,d),s.elementType=n,s.type=c,s.lanes=f,s}function oi(n,s,a,c){return n=_n(7,n,c,s),n.lanes=a,n}function Su(n,s,a,c){return n=_n(22,n,c,s),n.elementType=Xe,n.lanes=a,n.stateNode={isHidden:!1},n}function rd(n,s,a){return n=_n(6,n,null,s),n.lanes=a,n}function sd(n,s,a){return s=_n(4,n.children!==null?n.children:[],n.key,s),s.lanes=a,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function Cw(n,s,a,c,d){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jo(0),this.expirationTimes=Jo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jo(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function id(n,s,a,c,d,f,v,S,R){return n=new Cw(n,s,a,S,R),s===1?(s=1,f===!0&&(s|=8)):s=0,f=_n(3,null,null,s),n.current=f,f.stateNode=n,f.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},_h(f),n}function Rw(n,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:se,key:c==null?null:""+c,children:n,containerInfo:s,implementation:a}}function ng(n){if(!n)return ts;n=n._reactInternals;e:{if(Sn(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Gt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Gt(a))return Pp(n,a,s)}return s}function rg(n,s,a,c,d,f,v,S,R){return n=id(a,c,!0,n,d,f,v,S,R),n.context=ng(null),a=n.current,c=Ht(),d=ls(a),f=Tr(c,d),f.callback=s??null,ss(a,f,d),n.current.lanes=d,qs(n,d,c),Yt(n,c),n}function ku(n,s,a,c){var d=s.current,f=Ht(),v=ls(d);return a=ng(a),s.context===null?s.context=a:s.pendingContext=a,s=Tr(f,v),s.payload={element:n},c=c===void 0?null:c,c!==null&&(s.callback=c),n=ss(d,s,v),n!==null&&(Nn(n,d,v,f),nu(n,d,v)),v}function xu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function sg(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<s?a:s}}function od(n,s){sg(n,s),(n=n.alternate)&&sg(n,s)}function Pw(){return null}var ig=typeof reportError=="function"?reportError:function(n){console.error(n)};function ad(n){this._internalRoot=n}Au.prototype.render=ad.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));ku(n,s,null,null)},Au.prototype.unmount=ad.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;ri(function(){ku(null,n,null,null)}),s[yr]=null}};function Au(n){this._internalRoot=n}Au.prototype.unstable_scheduleHydration=function(n){if(n){var s=na();n={blockedOn:null,target:n,priority:s};for(var a=0;a<nn.length&&s!==0&&s<nn[a].priority;a++);nn.splice(a,0,n),a===0&&bi(n)}};function ld(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Cu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function og(){}function Nw(n,s,a,c,d){if(d){if(typeof c=="function"){var f=c;c=function(){var U=xu(v);f.call(U)}}var v=rg(s,c,n,0,null,!1,!1,"",og);return n._reactRootContainer=v,n[yr]=v.current,pa(n.nodeType===8?n.parentNode:n),ri(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var S=c;c=function(){var U=xu(R);S.call(U)}}var R=id(n,0,!1,null,null,!1,!1,"",og);return n._reactRootContainer=R,n[yr]=R.current,pa(n.nodeType===8?n.parentNode:n),ri(function(){ku(s,R,a,c)}),R}function Ru(n,s,a,c,d){var f=a._reactRootContainer;if(f){var v=f;if(typeof d=="function"){var S=d;d=function(){var R=xu(v);S.call(R)}}ku(s,v,n,d)}else v=Nw(a,s,n,d,c);return xu(v)}ea=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var a=je(s.pendingLanes);a!==0&&(Zo(s,a|1),Yt(s,Ke()),(Le&6)===0&&(io=Ke()+500,ns()))}break;case 13:ri(function(){var c=Er(n,1);if(c!==null){var d=Ht();Nn(c,n,1,d)}}),od(n,1)}},Pi=function(n){if(n.tag===13){var s=Er(n,134217728);if(s!==null){var a=Ht();Nn(s,n,134217728,a)}od(n,134217728)}},ta=function(n){if(n.tag===13){var s=ls(n),a=Er(n,s);if(a!==null){var c=Ht();Nn(a,n,s,c)}od(n,s)}},na=function(){return De},ra=function(n,s){var a=De;try{return De=n,s()}finally{De=a}},ar=function(n,s,a){switch(s){case"input":if(Vs(n,a),s=a.name,a.type==="radio"&&s!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==n&&c.form===n.form){var d=Wl(c);if(!d)throw Error(t(90));jo(c),Vs(c,d)}}}break;case"textarea":yl(n,a);break;case"select":s=a.value,s!=null&&Tn(n,!!a.multiple,s,!1)}},wl=Zh,El=ri;var bw={usingClientEntryPoint:!1,Events:[ya,Wi,Wl,Br,$r,Zh]},Na={findFiberByHostInstance:Qs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dw={bundleType:Na.bundleType,version:Na.version,rendererPackageName:Na.rendererPackageName,rendererConfig:Na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:we.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Cl(n),n===null?null:n.stateNode},findFiberByHostInstance:Na.findFiberByHostInstance||Pw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pu.isDisabled&&Pu.supportsFiber)try{Us=Pu.inject(Dw),en=Pu}catch{}}return Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bw,Xt.createPortal=function(n,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ld(s))throw Error(t(200));return Rw(n,s,null,a)},Xt.createRoot=function(n,s){if(!ld(n))throw Error(t(299));var a=!1,c="",d=ig;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=id(n,1,!1,null,null,a,!1,c,d),n[yr]=s.current,pa(n.nodeType===8?n.parentNode:n),new ad(s)},Xt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Cl(s),n=n===null?null:n.stateNode,n},Xt.flushSync=function(n){return ri(n)},Xt.hydrate=function(n,s,a){if(!Cu(s))throw Error(t(200));return Ru(null,n,s,!0,a)},Xt.hydrateRoot=function(n,s,a){if(!ld(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,f="",v=ig;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=rg(s,null,n,1,a??null,d,!1,f,v),n[yr]=s.current,pa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new Au(s)},Xt.render=function(n,s,a){if(!Cu(s))throw Error(t(200));return Ru(null,n,s,!1,a)},Xt.unmountComponentAtNode=function(n){if(!Cu(n))throw Error(t(40));return n._reactRootContainer?(ri(function(){Ru(null,null,n,!1,function(){n._reactRootContainer=null,n[yr]=null})}),!0):!1},Xt.unstable_batchedUpdates=Zh,Xt.unstable_renderSubtreeIntoContainer=function(n,s,a,c){if(!Cu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ru(n,s,a,!1,c)},Xt.version="18.3.1-next-f1338f8080-20240426",Xt}var pg;function zw(){if(pg)return hd.exports;pg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),hd.exports=Uw(),hd.exports}var mg;function Bw(){if(mg)return Nu;mg=1;var r=zw();return Nu.createRoot=r.createRoot,Nu.hydrateRoot=r.hydrateRoot,Nu}var $w=Bw(),ye=rf();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Hw=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase()),gg=r=>{const e=Hw(r);return e.charAt(0).toUpperCase()+e.slice(1)},Qy=(...r)=>r.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ww={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=ye.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:o="",children:u,iconNode:h,...m},g)=>ye.createElement("svg",{ref:g,...Ww,width:e,height:e,stroke:r,strokeWidth:i?Number(t)*24/Number(e):t,className:Qy("lucide",o),...m},[...h.map(([_,T])=>ye.createElement(_,T)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=(r,e)=>{const t=ye.forwardRef(({className:i,...o},u)=>ye.createElement(Gw,{ref:u,iconNode:e,className:Qy(`lucide-${qw(gg(r))}`,`lucide-${r}`,i),...o}));return t.displayName=gg(r),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],yg=Ze("bell",Kw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Yw=Ze("check",Qw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",key:"1qvrer"}],["path",{d:"M6 17h12",key:"1jwigz"}]],Qu=Ze("chef-hat",Xw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Zw=Ze("circle-alert",Jw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],tE=Ze("circle-help",eE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],rE=Ze("house",nE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],iE=Ze("info",sE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oE=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Yu=Ze("loader-circle",oE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Ad=Ze("lock",aE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],uE=Ze("log-out",lE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Yy=Ze("mail",cE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hE=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],dE=Ze("moon",hE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],pE=Ze("phone",fE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Xy=Ze("plus",mE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],Cd=Ze("scan",gE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Rd=Ze("search",yE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],vE=Ze("settings",_E);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],EE=Ze("shopping-cart",wE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],IE=Ze("sparkles",TE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],kE=Ze("sun",SE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],sf=Ze("trash-2",xE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],CE=Ze("trending-up",AE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],of=Ze("user",RE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Jy=Ze("x",PE),NE=()=>{};var _g={};/**
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
 */const Zy=function(r){const e=[];let t=0;for(let i=0;i<r.length;i++){let o=r.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},bE=function(r){const e=[];let t=0,i=0;for(;t<r.length;){const o=r[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[t++];e[i++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[t++],h=r[t++],m=r[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[i++]=String.fromCharCode(55296+(g>>10)),e[i++]=String.fromCharCode(56320+(g&1023))}else{const u=r[t++],h=r[t++];e[i++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},e_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<r.length;o+=3){const u=r[o],h=o+1<r.length,m=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,T=u>>2,k=(u&3)<<4|m>>4;let C=(m&15)<<2|_>>6,F=_&63;g||(F=64,h||(C=64)),i.push(t[T],t[k],t[C],t[F])}return i.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Zy(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):bE(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<r.length;){const u=t[r.charAt(o++)],m=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const k=o<r.length?t[r.charAt(o)]:64;if(++o,u==null||m==null||_==null||k==null)throw new DE;const C=u<<2|m>>4;if(i.push(C),_!==64){const F=m<<4&240|_>>2;if(i.push(F),k!==64){const G=_<<6&192|k;i.push(G)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class DE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const VE=function(r){const e=Zy(r);return e_.encodeByteArray(e,!0)},Xu=function(r){return VE(r).replace(/\./g,"")},t_=function(r){try{return e_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function OE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const LE=()=>OE().__FIREBASE_DEFAULTS__,ME=()=>{if(typeof process>"u"||typeof _g>"u")return;const r=_g.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},jE=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&t_(r[1]);return e&&JSON.parse(e)},mc=()=>{try{return NE()||LE()||ME()||jE()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},n_=r=>mc()?.emulatorHosts?.[r],FE=r=>{const e=n_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},r_=()=>mc()?.config,s_=r=>mc()?.[`_${r}`];/**
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
 */class UE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Ro(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function i_(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function zE(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Xu(JSON.stringify(t)),Xu(JSON.stringify(h)),""].join(".")}const ja={};function BE(){const r={prod:[],emulator:[]};for(const e of Object.keys(ja))ja[e]?r.emulator.push(e):r.prod.push(e);return r}function $E(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let vg=!1;function o_(r,e){if(typeof window>"u"||typeof document>"u"||!Ro(window.location.host)||ja[r]===e||ja[r]||vg)return;ja[r]=e;function t(C){return`__firebase__banner__${C}`}const i="__firebase__banner",u=BE().prod.length>0;function h(){const C=document.getElementById(i);C&&C.remove()}function m(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function g(C,F){C.setAttribute("width","24"),C.setAttribute("id",F),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function _(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{vg=!0,h()},C}function T(C,F){C.setAttribute("id",F),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function k(){const C=$E(i),F=t("text"),G=document.getElementById(F)||document.createElement("span"),Y=t("learnmore"),$=document.getElementById(Y)||document.createElement("a"),he=t("preprendIcon"),ee=document.getElementById(he)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const de=C.element;m(de),T($,Y);const we=_();g(ee,he),de.append(ee,G,$,we),document.body.appendChild(de)}u?(G.innerText="Preview backend disconnected.",ee.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ee.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,G.innerText="Preview backend running in this workspace."),G.setAttribute("id",F)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",k):k()}/**
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
 */function Bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function HE(){const r=mc()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function WE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function GE(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function KE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function QE(){const r=Bt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function YE(){return!HE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function XE(){try{return typeof indexedDB=="object"}catch{return!1}}function JE(){return new Promise((r,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const ZE="FirebaseError";class Vr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=ZE,Object.setPrototypeOf(this,Vr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rl.prototype.create)}}class rl{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?eT(u,i):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Vr(o,m,i)}}function eT(r,e){return r.replace(tT,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const tT=/\{\$([^}]+)}/g;function nT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ui(r,e){if(r===e)return!0;const t=Object.keys(r),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const u=r[o],h=e[o];if(wg(u)&&wg(h)){if(!ui(u,h))return!1}else if(u!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function wg(r){return r!==null&&typeof r=="object"}/**
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
 */function sl(r){const e=[];for(const[t,i]of Object.entries(r))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Da(r){const e={};return r.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,u]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Va(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function rT(r,e){const t=new sT(r,e);return t.subscribe.bind(t)}class sT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");iT(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=pd),o.error===void 0&&(o.error=pd),o.complete===void 0&&(o.complete=pd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iT(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function pd(){}/**
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
 */function vt(r){return r&&r._delegate?r._delegate:r}class ci{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ai="[DEFAULT]";/**
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
 */class oT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new UE;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lT(e))try{this.getOrInitializeService({instanceIdentifier:ai})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});i.resolve(u)}catch{}}}}clearInstance(e=ai){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ai){return this.instances.has(e)}getOptions(e=ai){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);i===m&&h.resolve(o)}return o}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(i)??new Set;o.add(e),this.onInitCallbacks.set(i,o);const u=this.instances.get(i);return u&&e(u,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:aT(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ai){return this.component?this.component.multipleInstances?e:ai:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aT(r){return r===ai?void 0:r}function lT(r){return r.instantiationMode==="EAGER"}/**
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
 */class uT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new oT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Pe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Pe||(Pe={}));const cT={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},hT=Pe.INFO,dT={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},fT=(r,e,...t)=>{if(e<r.logLevel)return;const i=new Date().toISOString(),o=dT[e];if(o)console[o](`[${i}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class af{constructor(e){this.name=e,this._logLevel=hT,this._logHandler=fT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const pT=(r,e)=>e.some(t=>r instanceof t);let Eg,Tg;function mT(){return Eg||(Eg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gT(){return Tg||(Tg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const a_=new WeakMap,Pd=new WeakMap,l_=new WeakMap,md=new WeakMap,lf=new WeakMap;function yT(r){const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{t(_s(r.result)),o()},h=()=>{i(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&a_.set(t,r)}).catch(()=>{}),lf.set(e,r),e}function _T(r){if(Pd.has(r))return;const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{i(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});Pd.set(r,e)}let Nd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Pd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||l_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _s(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function vT(r){Nd=r(Nd)}function wT(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=r.call(gd(this),e,...t);return l_.set(i,e.sort?e.sort():[e]),_s(i)}:gT().includes(r)?function(...e){return r.apply(gd(this),e),_s(a_.get(this))}:function(...e){return _s(r.apply(gd(this),e))}}function ET(r){return typeof r=="function"?wT(r):(r instanceof IDBTransaction&&_T(r),pT(r,mT())?new Proxy(r,Nd):r)}function _s(r){if(r instanceof IDBRequest)return yT(r);if(md.has(r))return md.get(r);const e=ET(r);return e!==r&&(md.set(r,e),lf.set(e,r)),e}const gd=r=>lf.get(r);function TT(r,e,{blocked:t,upgrade:i,blocking:o,terminated:u}={}){const h=indexedDB.open(r,e),m=_s(h);return i&&h.addEventListener("upgradeneeded",g=>{i(_s(h.result),g.oldVersion,g.newVersion,_s(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const IT=["get","getKey","getAll","getAllKeys","count"],ST=["put","add","delete","clear"],yd=new Map;function Ig(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(yd.get(e))return yd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=ST.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||IT.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return i&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&g.done]))[0]};return yd.set(e,u),u}vT(r=>({...r,get:(e,t,i)=>Ig(e,t)||r.get(e,t,i),has:(e,t)=>!!Ig(e,t)||r.has(e,t)}));/**
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
 */class kT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(xT(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function xT(r){return r.getComponent()?.type==="VERSION"}const bd="@firebase/app",Sg="0.14.6";/**
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
 */const Rr=new af("@firebase/app"),AT="@firebase/app-compat",CT="@firebase/analytics-compat",RT="@firebase/analytics",PT="@firebase/app-check-compat",NT="@firebase/app-check",bT="@firebase/auth",DT="@firebase/auth-compat",VT="@firebase/database",OT="@firebase/data-connect",LT="@firebase/database-compat",MT="@firebase/functions",jT="@firebase/functions-compat",FT="@firebase/installations",UT="@firebase/installations-compat",zT="@firebase/messaging",BT="@firebase/messaging-compat",$T="@firebase/performance",qT="@firebase/performance-compat",HT="@firebase/remote-config",WT="@firebase/remote-config-compat",GT="@firebase/storage",KT="@firebase/storage-compat",QT="@firebase/firestore",YT="@firebase/ai",XT="@firebase/firestore-compat",JT="firebase",ZT="12.6.0";/**
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
 */const Dd="[DEFAULT]",e1={[bd]:"fire-core",[AT]:"fire-core-compat",[RT]:"fire-analytics",[CT]:"fire-analytics-compat",[NT]:"fire-app-check",[PT]:"fire-app-check-compat",[bT]:"fire-auth",[DT]:"fire-auth-compat",[VT]:"fire-rtdb",[OT]:"fire-data-connect",[LT]:"fire-rtdb-compat",[MT]:"fire-fn",[jT]:"fire-fn-compat",[FT]:"fire-iid",[UT]:"fire-iid-compat",[zT]:"fire-fcm",[BT]:"fire-fcm-compat",[$T]:"fire-perf",[qT]:"fire-perf-compat",[HT]:"fire-rc",[WT]:"fire-rc-compat",[GT]:"fire-gcs",[KT]:"fire-gcs-compat",[QT]:"fire-fst",[XT]:"fire-fst-compat",[YT]:"fire-vertex","fire-js":"fire-js",[JT]:"fire-js-all"};/**
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
 */const Ju=new Map,t1=new Map,Vd=new Map;function kg(r,e){try{r.container.addComponent(e)}catch(t){Rr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function wo(r){const e=r.name;if(Vd.has(e))return Rr.debug(`There were multiple attempts to register component ${e}.`),!1;Vd.set(e,r);for(const t of Ju.values())kg(t,r);for(const t of t1.values())kg(t,r);return!0}function uf(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function vn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const n1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vs=new rl("app","Firebase",n1);/**
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
 */class r1{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ci("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vs.create("app-deleted",{appName:this._name})}}/**
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
 */const Po=ZT;function u_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const i={name:Dd,automaticDataCollectionEnabled:!0,...e},o=i.name;if(typeof o!="string"||!o)throw vs.create("bad-app-name",{appName:String(o)});if(t||(t=r_()),!t)throw vs.create("no-options");const u=Ju.get(o);if(u){if(ui(t,u.options)&&ui(i,u.config))return u;throw vs.create("duplicate-app",{appName:o})}const h=new uT(o);for(const g of Vd.values())h.addComponent(g);const m=new r1(t,i,h);return Ju.set(o,m),m}function c_(r=Dd){const e=Ju.get(r);if(!e&&r===Dd&&r_())return u_();if(!e)throw vs.create("no-app",{appName:r});return e}function ws(r,e,t){let i=e1[r]??r;t&&(i+=`-${t}`);const o=i.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${i}" with version "${e}":`];o&&h.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rr.warn(h.join(" "));return}wo(new ci(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const s1="firebase-heartbeat-database",i1=1,Ga="firebase-heartbeat-store";let _d=null;function h_(){return _d||(_d=TT(s1,i1,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ga)}catch(t){console.warn(t)}}}}).catch(r=>{throw vs.create("idb-open",{originalErrorMessage:r.message})})),_d}async function o1(r){try{const t=(await h_()).transaction(Ga),i=await t.objectStore(Ga).get(d_(r));return await t.done,i}catch(e){if(e instanceof Vr)Rr.warn(e.message);else{const t=vs.create("idb-get",{originalErrorMessage:e?.message});Rr.warn(t.message)}}}async function xg(r,e){try{const i=(await h_()).transaction(Ga,"readwrite");await i.objectStore(Ga).put(e,d_(r)),await i.done}catch(t){if(t instanceof Vr)Rr.warn(t.message);else{const i=vs.create("idb-set",{originalErrorMessage:t?.message});Rr.warn(i.message)}}}function d_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const a1=1024,l1=30;class u1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new h1(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ag();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats.length>l1){const o=d1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Rr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ag(),{heartbeatsToSend:t,unsentEntries:i}=c1(this._heartbeatsCache.heartbeats),o=Xu(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Rr.warn(e),""}}}function Ag(){return new Date().toISOString().substring(0,10)}function c1(r,e=a1){const t=[];let i=r.slice();for(const o of r){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Cg(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Cg(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class h1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return XE()?JE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await o1(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return xg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return xg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Cg(r){return Xu(JSON.stringify({version:2,heartbeats:r})).length}function d1(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let i=1;i<r.length;i++)r[i].date<t&&(t=r[i].date,e=i);return e}/**
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
 */function f1(r){wo(new ci("platform-logger",e=>new kT(e),"PRIVATE")),wo(new ci("heartbeat",e=>new u1(e),"PRIVATE")),ws(bd,Sg,r),ws(bd,Sg,"esm2020"),ws("fire-js","")}f1("");function f_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const p1=f_,p_=new rl("auth","Firebase",f_());/**
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
 */const Zu=new af("@firebase/auth");function m1(r,...e){Zu.logLevel<=Pe.WARN&&Zu.warn(`Auth (${Po}): ${r}`,...e)}function Fu(r,...e){Zu.logLevel<=Pe.ERROR&&Zu.error(`Auth (${Po}): ${r}`,...e)}/**
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
 */function Dn(r,...e){throw cf(r,...e)}function er(r,...e){return cf(r,...e)}function m_(r,e,t){const i={...p1(),[e]:t};return new rl("auth","Firebase",i).create(e,{appName:r.name})}function Ar(r){return m_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cf(r,...e){if(typeof r!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=r.name),r._errorFactory.create(t,...i)}return p_.create(r,...e)}function _e(r,e,...t){if(!r)throw cf(e,...t)}function kr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Fu(e),new Error(e)}function Pr(r,e){r||kr(e)}/**
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
 */function Od(){return typeof self<"u"&&self.location?.href||""}function g1(){return Rg()==="http:"||Rg()==="https:"}function Rg(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function y1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(g1()||GE()||"connection"in navigator)?navigator.onLine:!0}function _1(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class il{constructor(e,t){this.shortDelay=e,this.longDelay=t,Pr(t>e,"Short delay should be less than long delay!"),this.isMobile=qE()||KE()}get(){return y1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function hf(r,e){Pr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class g_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const v1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const w1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],E1=new il(3e4,6e4);function Ns(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Or(r,e,t,i,o={}){return y_(r,o,async()=>{let u={},h={};i&&(e==="GET"?h=i:u={body:JSON.stringify(i)});const m=sl({key:r.config.apiKey,...h}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _={method:e,headers:g,...u};return WE()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&Ro(r.emulatorConfig.host)&&(_.credentials="include"),g_.fetch()(await __(r,r.config.apiHost,t,m),_)})}async function y_(r,e,t){r._canInitEmulator=!1;const i={...v1,...e};try{const o=new I1(r),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw bu(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,_]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw bu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw bu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw bu(r,"user-disabled",h);const T=i[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw m_(r,T,_);Dn(r,T)}}catch(o){if(o instanceof Vr)throw o;Dn(r,"network-request-failed",{message:String(o)})}}async function ol(r,e,t,i,o={}){const u=await Or(r,e,t,i,o);return"mfaPendingCredential"in u&&Dn(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function __(r,e,t,i){const o=`${e}${t}?${i}`,u=r,h=u.config.emulator?hf(r.config,o):`${r.config.apiScheme}://${o}`;return w1.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function T1(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class I1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(er(this.auth,"network-request-failed")),E1.get())})}}function bu(r,e,t){const i={appName:r.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=er(r,e,i);return o.customData._tokenResponse=t,o}function Pg(r){return r!==void 0&&r.enterprise!==void 0}class S1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return T1(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function k1(r,e){return Or(r,"GET","/v2/recaptchaConfig",Ns(r,e))}/**
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
 */async function x1(r,e){return Or(r,"POST","/v1/accounts:delete",e)}async function ec(r,e){return Or(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fa(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function A1(r,e=!1){const t=vt(r),i=await t.getIdToken(e),o=df(i);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u?.sign_in_provider;return{claims:o,token:i,authTime:Fa(vd(o.auth_time)),issuedAtTime:Fa(vd(o.iat)),expirationTime:Fa(vd(o.exp)),signInProvider:h||null,signInSecondFactor:u?.sign_in_second_factor||null}}function vd(r){return Number(r)*1e3}function df(r){const[e,t,i]=r.split(".");if(e===void 0||t===void 0||i===void 0)return Fu("JWT malformed, contained fewer than 3 sections"),null;try{const o=t_(t);return o?JSON.parse(o):(Fu("Failed to decode base64 JWT payload"),null)}catch(o){return Fu("Caught error parsing JWT payload as JSON",o?.toString()),null}}function Ng(r){const e=df(r);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Eo(r,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Vr&&C1(i)&&r.auth.currentUser===r&&await r.auth.signOut(),i}}function C1({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class R1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ld{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fa(this.lastLoginAt),this.creationTime=Fa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function tc(r){const e=r.auth,t=await r.getIdToken(),i=await Eo(r,ec(e,{idToken:t}));_e(i?.users.length,e,"internal-error");const o=i.users[0];r._notifyReloadListener(o);const u=o.providerUserInfo?.length?v_(o.providerUserInfo):[],h=N1(r.providerData,u),m=r.isAnonymous,g=!(r.email&&o.passwordHash)&&!h?.length,_=m?g:!1,T={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Ld(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(r,T)}async function P1(r){const e=vt(r);await tc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function N1(r,e){return[...r.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function v_(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function b1(r,e){const t=await y_(r,{},async()=>{const i=sl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,h=await __(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:i};return r.emulatorConfig&&Ro(r.emulatorConfig.host)&&(g.credentials="include"),g_.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function D1(r,e){return Or(r,"POST","/v2/accounts:revokeToken",Ns(r,e))}/**
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
 */class fo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ng(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=Ng(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:u}=await b1(e,t);this.updateTokensAndExpiration(i,o,Number(u))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:u}=t,h=new fo;return i&&(_e(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(_e(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(_e(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fo,this.toJSON())}_performRefresh(){return kr("not implemented")}}/**
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
 */function ds(r,e){_e(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class bn{constructor({uid:e,auth:t,stsTokenManager:i,...o}){this.providerId="firebase",this.proactiveRefresh=new R1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ld(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Eo(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return A1(this,e)}reload(){return P1(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new bn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await tc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vn(this.auth.app))return Promise.reject(Ar(this.auth));const e=await this.getIdToken();return await Eo(this,x1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,g=t._redirectEventId??void 0,_=t.createdAt??void 0,T=t.lastLoginAt??void 0,{uid:k,emailVerified:C,isAnonymous:F,providerData:G,stsTokenManager:Y}=t;_e(k&&Y,e,"internal-error");const $=fo.fromJSON(this.name,Y);_e(typeof k=="string",e,"internal-error"),ds(i,e.name),ds(o,e.name),_e(typeof C=="boolean",e,"internal-error"),_e(typeof F=="boolean",e,"internal-error"),ds(u,e.name),ds(h,e.name),ds(m,e.name),ds(g,e.name),ds(_,e.name),ds(T,e.name);const he=new bn({uid:k,auth:e,email:o,emailVerified:C,displayName:i,isAnonymous:F,photoURL:h,phoneNumber:u,tenantId:m,stsTokenManager:$,createdAt:_,lastLoginAt:T});return G&&Array.isArray(G)&&(he.providerData=G.map(ee=>({...ee}))),g&&(he._redirectEventId=g),he}static async _fromIdTokenResponse(e,t,i=!1){const o=new fo;o.updateFromServerResponse(t);const u=new bn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await tc(u),u}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?v_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!u?.length,m=new fo;m.updateFromIdToken(i);const g=new bn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Ld(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(g,_),g}}/**
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
 */const bg=new Map;function xr(r){Pr(r instanceof Function,"Expected a class definition");let e=bg.get(r);return e?(Pr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,bg.set(r,e),e)}/**
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
 */class w_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}w_.type="NONE";const Dg=w_;/**
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
 */function Uu(r,e,t){return`firebase:${r}:${e}:${t}`}class po{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:u}=this.auth;this.fullUserKey=Uu(this.userKey,o.apiKey,u),this.fullPersistenceKey=Uu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ec(this.auth,{idToken:e}).catch(()=>{});return t?bn._fromGetAccountInfoResponse(this.auth,t,e):null}return bn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new po(xr(Dg),e,i);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||xr(Dg);const h=Uu(i,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const T=await _._get(h);if(T){let k;if(typeof T=="string"){const C=await ec(e,{idToken:T}).catch(()=>{});if(!C)break;k=await bn._fromGetAccountInfoResponse(e,C,T)}else k=bn._fromJSON(e,T);_!==u&&(m=k),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new po(u,e,i):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new po(u,e,i))}}/**
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
 */function Vg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(S_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(E_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(x_(e))return"Blackberry";if(A_(e))return"Webos";if(T_(e))return"Safari";if((e.includes("chrome/")||I_(e))&&!e.includes("edge/"))return"Chrome";if(k_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=r.match(t);if(i?.length===2)return i[1]}return"Other"}function E_(r=Bt()){return/firefox\//i.test(r)}function T_(r=Bt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function I_(r=Bt()){return/crios\//i.test(r)}function S_(r=Bt()){return/iemobile/i.test(r)}function k_(r=Bt()){return/android/i.test(r)}function x_(r=Bt()){return/blackberry/i.test(r)}function A_(r=Bt()){return/webos/i.test(r)}function ff(r=Bt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function V1(r=Bt()){return ff(r)&&!!window.navigator?.standalone}function O1(){return QE()&&document.documentMode===10}function C_(r=Bt()){return ff(r)||k_(r)||A_(r)||x_(r)||/windows phone/i.test(r)||S_(r)}/**
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
 */function R_(r,e=[]){let t;switch(r){case"Browser":t=Vg(Bt());break;case"Worker":t=`${Vg(Bt())}-${r}`;break;default:t=r}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Po}/${i}`}/**
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
 */class L1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function M1(r,e={}){return Or(r,"GET","/v2/passwordPolicy",Ns(r,e))}/**
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
 */const j1=6;class F1{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??j1,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class U1{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Og(this),this.idTokenSubscription=new Og(this),this.beforeStateQueue=new L1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xr(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await po.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ec(this,{idToken:e}),i=await bn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(vn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=this.redirectUser?._redirectEventId,h=i?._redirectEventId,m=await this.tryRedirectSignIn(e);(!u||u===h)&&m?.user&&(i=m.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(u){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await tc(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vn(this.app))return Promise.reject(Ar(this));const t=e?vt(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vn(this.app)?Promise.reject(Ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vn(this.app)?Promise.reject(Ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await M1(this),t=new F1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new rl("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await D1(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xr(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await po.create(this,[xr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,i,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=R_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(vn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&m1(`Error while retrieving App Check token: ${e.error}`),e?.token}}function mi(r){return vt(r)}class Og{constructor(e){this.auth=e,this.observer=null,this.addObserver=rT(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let gc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function z1(r){gc=r}function P_(r){return gc.loadJS(r)}function B1(){return gc.recaptchaEnterpriseScript}function $1(){return gc.gapiScript}function q1(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class H1{constructor(){this.enterprise=new W1}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class W1{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const G1="recaptcha-enterprise",N_="NO_RECAPTCHA";class K1{constructor(e){this.type=G1,this.auth=mi(e)}async verify(e="verify",t=!1){async function i(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{k1(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const _=new S1(g);return u.tenantId==null?u._agentRecaptchaConfig=_:u._tenantRecaptchaConfigs[u.tenantId]=_,h(_.siteKey)}}).catch(g=>{m(g)})})}function o(u,h,m){const g=window.grecaptcha;Pg(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(_=>{h(_)}).catch(()=>{h(N_)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new H1().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{i(this.auth).then(m=>{if(!t&&Pg(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=B1();g.length!==0&&(g+=m),P_(g).then(()=>{o(m,u,h)}).catch(_=>{h(_)})}}).catch(m=>{h(m)})})}}async function Lg(r,e,t,i=!1,o=!1){const u=new K1(r);let h;if(o)h=N_;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const m={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,_=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return i?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Md(r,e,t,i,o){if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await Lg(r,e,t,t==="getOobCode");return i(r,u)}else return i(r,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await Lg(r,e,t,t==="getOobCode");return i(r,h)}else return Promise.reject(u)})}/**
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
 */function Q1(r,e){const t=uf(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(ui(u,e??{}))return o;Dn(o,"already-initialized")}return t.initialize({options:e})}function Y1(r,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(xr);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(i,e?.popupRedirectResolver)}function X1(r,e,t){const i=mi(r);_e(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,u=b_(e),{host:h,port:m}=J1(e),g=m===null?"":`:${m}`,_={url:`${u}//${h}${g}/`},T=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){_e(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),_e(ui(_,i.config.emulator)&&ui(T,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=_,i.emulatorConfig=T,i.settings.appVerificationDisabledForTesting=!0,Ro(h)?(i_(`${u}//${h}${g}`),o_("Auth",!0)):Z1()}function b_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function J1(r){const e=b_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const u=o[1];return{host:u,port:Mg(i.substr(u.length+1))}}else{const[u,h]=i.split(":");return{host:u,port:Mg(h)}}}function Mg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function Z1(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class pf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return kr("not implemented")}_getIdTokenResponse(e){return kr("not implemented")}_linkToIdToken(e,t){return kr("not implemented")}_getReauthenticationResolver(e){return kr("not implemented")}}async function eI(r,e){return Or(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function tI(r,e){return ol(r,"POST","/v1/accounts:signInWithPassword",Ns(r,e))}/**
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
 */async function nI(r,e){return ol(r,"POST","/v1/accounts:signInWithEmailLink",Ns(r,e))}async function rI(r,e){return ol(r,"POST","/v1/accounts:signInWithEmailLink",Ns(r,e))}/**
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
 */class Ka extends pf{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Ka(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Ka(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Md(e,t,"signInWithPassword",tI);case"emailLink":return nI(e,{email:this._email,oobCode:this._password});default:Dn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Md(e,i,"signUpPassword",eI);case"emailLink":return rI(e,{idToken:t,email:this._email,oobCode:this._password});default:Dn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function mo(r,e){return ol(r,"POST","/v1/accounts:signInWithIdp",Ns(r,e))}/**
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
 */const sI="http://localhost";class hi extends pf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Dn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o,...u}=t;if(!i||!o)return null;const h=new hi(i,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return mo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,mo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,mo(e,t)}buildRequest(){const e={requestUri:sI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=sl(t)}return e}}/**
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
 */function iI(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function oI(r){const e=Da(Va(r)).link,t=e?Da(Va(e)).deep_link_id:null,i=Da(Va(r)).deep_link_id;return(i?Da(Va(i)).link:null)||i||t||e||r}class mf{constructor(e){const t=Da(Va(e)),i=t.apiKey??null,o=t.oobCode??null,u=iI(t.mode??null);_e(i&&o&&u,"argument-error"),this.apiKey=i,this.operation=u,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=oI(e);try{return new mf(t)}catch{return null}}}/**
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
 */class No{constructor(){this.providerId=No.PROVIDER_ID}static credential(e,t){return Ka._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=mf.parseLink(t);return _e(i,"argument-error"),Ka._fromEmailAndCode(e,i.code,i.tenantId)}}No.PROVIDER_ID="password";No.EMAIL_PASSWORD_SIGN_IN_METHOD="password";No.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class D_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class al extends D_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class fs extends al{constructor(){super("facebook.com")}static credential(e){return hi._fromParams({providerId:fs.PROVIDER_ID,signInMethod:fs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fs.credentialFromTaggedObject(e)}static credentialFromError(e){return fs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fs.credential(e.oauthAccessToken)}catch{return null}}}fs.FACEBOOK_SIGN_IN_METHOD="facebook.com";fs.PROVIDER_ID="facebook.com";/**
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
 */class ps extends al{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hi._fromParams({providerId:ps.PROVIDER_ID,signInMethod:ps.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ps.credentialFromTaggedObject(e)}static credentialFromError(e){return ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return ps.credential(t,i)}catch{return null}}}ps.GOOGLE_SIGN_IN_METHOD="google.com";ps.PROVIDER_ID="google.com";/**
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
 */class ms extends al{constructor(){super("github.com")}static credential(e){return hi._fromParams({providerId:ms.PROVIDER_ID,signInMethod:ms.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ms.credentialFromTaggedObject(e)}static credentialFromError(e){return ms.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ms.credential(e.oauthAccessToken)}catch{return null}}}ms.GITHUB_SIGN_IN_METHOD="github.com";ms.PROVIDER_ID="github.com";/**
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
 */class gs extends al{constructor(){super("twitter.com")}static credential(e,t){return hi._fromParams({providerId:gs.PROVIDER_ID,signInMethod:gs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gs.credentialFromTaggedObject(e)}static credentialFromError(e){return gs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return gs.credential(t,i)}catch{return null}}}gs.TWITTER_SIGN_IN_METHOD="twitter.com";gs.PROVIDER_ID="twitter.com";/**
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
 */async function aI(r,e){return ol(r,"POST","/v1/accounts:signUp",Ns(r,e))}/**
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
 */class di{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const u=await bn._fromIdTokenResponse(e,i,o),h=jg(i);return new di({user:u,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=jg(i);return new di({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function jg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class nc extends Vr{constructor(e,t,i,o){super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,nc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new nc(e,t,i,o)}}function V_(r,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?nc._fromErrorAndOperation(r,u,e,i):u})}async function lI(r,e,t=!1){const i=await Eo(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return di._forOperation(r,"link",i)}/**
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
 */async function uI(r,e,t=!1){const{auth:i}=r;if(vn(i.app))return Promise.reject(Ar(i));const o="reauthenticate";try{const u=await Eo(r,V_(i,o,e,r),t);_e(u.idToken,i,"internal-error");const h=df(u.idToken);_e(h,i,"internal-error");const{sub:m}=h;return _e(r.uid===m,i,"user-mismatch"),di._forOperation(r,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&Dn(i,"user-mismatch"),u}}/**
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
 */async function O_(r,e,t=!1){if(vn(r.app))return Promise.reject(Ar(r));const i="signIn",o=await V_(r,i,e),u=await di._fromIdTokenResponse(r,i,o);return t||await r._updateCurrentUser(u.user),u}async function cI(r,e){return O_(mi(r),e)}/**
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
 */async function L_(r){const e=mi(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function hI(r,e,t){if(vn(r.app))return Promise.reject(Ar(r));const i=mi(r),h=await Md(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",aI).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&L_(r),g}),m=await di._fromIdTokenResponse(i,"signIn",h);return await i._updateCurrentUser(m.user),m}function dI(r,e,t){return vn(r.app)?Promise.reject(Ar(r)):cI(vt(r),No.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&L_(r),i})}/**
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
 */async function fI(r,e){return Or(r,"POST","/v1/accounts:update",e)}/**
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
 */async function pI(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=vt(r),u={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},h=await Eo(i,fI(i.auth,u));i.displayName=h.displayName||null,i.photoURL=h.photoUrl||null;const m=i.providerData.find(({providerId:g})=>g==="password");m&&(m.displayName=i.displayName,m.photoURL=i.photoURL),await i._updateTokensIfNecessary(h)}function mI(r,e,t,i){return vt(r).onIdTokenChanged(e,t,i)}function gI(r,e,t){return vt(r).beforeAuthStateChanged(e,t)}function yI(r,e,t,i){return vt(r).onAuthStateChanged(e,t,i)}function _I(r){return vt(r).signOut()}const rc="__sak";/**
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
 */class M_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(rc,"1"),this.storage.removeItem(rc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const vI=1e3,wI=10;class j_ extends M_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=C_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},u=this.storage.getItem(i);O1()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,wI):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},vI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}j_.type="LOCAL";const EI=j_;/**
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
 */class F_ extends M_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}F_.type="SESSION";const U_=F_;/**
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
 */function TI(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class yc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new yc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,u)),g=await TI(m);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yc.receivers=[];/**
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
 */function gf(r="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class II{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const _=gf("",20);o.port1.start();const T=setTimeout(()=>{g(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(k){const C=k;if(C.data.eventId===_)switch(C.data.status){case"ack":clearTimeout(T),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(C.data.response);break;default:clearTimeout(T),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function tr(){return window}function SI(r){tr().location.href=r}/**
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
 */function z_(){return typeof tr().WorkerGlobalScope<"u"&&typeof tr().importScripts=="function"}async function kI(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xI(){return navigator?.serviceWorker?.controller||null}function AI(){return z_()?self:null}/**
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
 */const B_="firebaseLocalStorageDb",CI=1,sc="firebaseLocalStorage",$_="fbase_key";class ll{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function _c(r,e){return r.transaction([sc],e?"readwrite":"readonly").objectStore(sc)}function RI(){const r=indexedDB.deleteDatabase(B_);return new ll(r).toPromise()}function jd(){const r=indexedDB.open(B_,CI);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(sc,{keyPath:$_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const i=r.result;i.objectStoreNames.contains(sc)?e(i):(i.close(),await RI(),e(await jd()))})})}async function Fg(r,e,t){const i=_c(r,!0).put({[$_]:e,value:t});return new ll(i).toPromise()}async function PI(r,e){const t=_c(r,!1).get(e),i=await new ll(t).toPromise();return i===void 0?null:i.value}function Ug(r,e){const t=_c(r,!0).delete(e);return new ll(t).toPromise()}const NI=800,bI=3;class q_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>bI)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return z_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yc._getInstance(AI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await kI(),!this.activeServiceWorker)return;this.sender=new II(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jd();return await Fg(e,rc,"1"),await Ug(e,rc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Fg(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>PI(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ug(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=_c(o,!1).getAll();return new ll(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),NI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}q_.type="LOCAL";const DI=q_;new il(3e4,6e4);/**
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
 */function VI(r,e){return e?xr(e):(_e(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class yf extends pf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return mo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return mo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function OI(r){return O_(r.auth,new yf(r),r.bypassAuthState)}function LI(r){const{auth:e,user:t}=r;return _e(t,e,"internal-error"),uI(t,new yf(r),r.bypassAuthState)}async function MI(r){const{auth:e,user:t}=r;return _e(t,e,"internal-error"),lI(t,new yf(r),r.bypassAuthState)}/**
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
 */class H_{constructor(e,t,i,o,u=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:i,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return OI;case"linkViaPopup":case"linkViaRedirect":return MI;case"reauthViaPopup":case"reauthViaRedirect":return LI;default:Dn(this.auth,"internal-error")}}resolve(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const jI=new il(2e3,1e4);class ho extends H_{constructor(e,t,i,o,u){super(e,t,o,u),this.provider=i,this.authWindow=null,this.pollId=null,ho.currentPopupAction&&ho.currentPopupAction.cancel(),ho.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){Pr(this.filter.length===1,"Popup operations only handle one event");const e=gf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(er(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(er(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ho.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(er(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jI.get())};e()}}ho.currentPopupAction=null;/**
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
 */const FI="pendingRedirect",zu=new Map;class UI extends H_{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=zu.get(this.auth._key());if(!e){try{const i=await zI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}zu.set(this.auth._key(),e)}return this.bypassAuthState||zu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zI(r,e){const t=qI(e),i=$I(r);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function BI(r,e){zu.set(r._key(),e)}function $I(r){return xr(r._redirectPersistence)}function qI(r){return Uu(FI,r.config.apiKey,r.name)}async function HI(r,e,t=!1){if(vn(r.app))return Promise.reject(Ar(r));const i=mi(r),o=VI(i,e),h=await new UI(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
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
 */const WI=600*1e3;class GI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!W_(e)){const i=e.error.code?.split("auth/")[1]||"internal-error";t.onError(er(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=WI&&this.cachedEventUids.clear(),this.cachedEventUids.has(zg(e))}saveEventToCache(e){this.cachedEventUids.add(zg(e)),this.lastProcessedEventTime=Date.now()}}function zg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function W_({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function KI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return W_(r);default:return!1}}/**
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
 */async function QI(r,e={}){return Or(r,"GET","/v1/projects",e)}/**
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
 */const YI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XI=/^https?/;async function JI(r){if(r.config.emulator)return;const{authorizedDomains:e}=await QI(r);for(const t of e)try{if(ZI(t))return}catch{}Dn(r,"unauthorized-domain")}function ZI(r){const e=Od(),{protocol:t,hostname:i}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&i===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!XI.test(t))return!1;if(YI.test(r))return i===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const eS=new il(3e4,6e4);function Bg(){const r=tr().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function tS(r){return new Promise((e,t)=>{function i(){Bg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bg(),t(er(r,"network-request-failed"))},timeout:eS.get()})}if(tr().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(tr().gapi?.load)i();else{const o=q1("iframefcb");return tr()[o]=()=>{gapi.load?i():t(er(r,"network-request-failed"))},P_(`${$1()}?onload=${o}`).catch(u=>t(u))}}).catch(e=>{throw Bu=null,e})}let Bu=null;function nS(r){return Bu=Bu||tS(r),Bu}/**
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
 */const rS=new il(5e3,15e3),sS="__/auth/iframe",iS="emulator/auth/iframe",oS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lS(r){const e=r.config;_e(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?hf(e,iS):`https://${r.config.authDomain}/${sS}`,i={apiKey:e.apiKey,appName:r.name,v:Po},o=aS.get(r.config.apiHost);o&&(i.eid=o);const u=r._getFrameworks();return u.length&&(i.fw=u.join(",")),`${t}?${sl(i).slice(1)}`}async function uS(r){const e=await nS(r),t=tr().gapi;return _e(t,r,"internal-error"),e.open({where:document.body,url:lS(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oS,dontclear:!0},i=>new Promise(async(o,u)=>{await i.restyle({setHideOnLeave:!1});const h=er(r,"network-request-failed"),m=tr().setTimeout(()=>{u(h)},rS.get());function g(){tr().clearTimeout(m),o(i)}i.ping(g).then(g,()=>{u(h)})}))}/**
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
 */const cS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hS=500,dS=600,fS="_blank",pS="http://localhost";class $g{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mS(r,e,t,i=hS,o=dS){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let m="";const g={...cS,width:i.toString(),height:o.toString(),top:u,left:h},_=Bt().toLowerCase();t&&(m=I_(_)?fS:t),E_(_)&&(e=e||pS,g.scrollbars="yes");const T=Object.entries(g).reduce((C,[F,G])=>`${C}${F}=${G},`,"");if(V1(_)&&m!=="_self")return gS(e||"",m),new $g(null);const k=window.open(e||"",m,T);_e(k,r,"popup-blocked");try{k.focus()}catch{}return new $g(k)}function gS(r,e){const t=document.createElement("a");t.href=r,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const yS="__/auth/handler",_S="emulator/auth/handler",vS=encodeURIComponent("fac");async function qg(r,e,t,i,o,u){_e(r.config.authDomain,r,"auth-domain-config-required"),_e(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:i,v:Po,eventId:o};if(e instanceof D_){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",nT(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,k]of Object.entries({}))h[T]=k}if(e instanceof al){const T=e.getScopes().filter(k=>k!=="");T.length>0&&(h.scopes=T.join(","))}r.tenantId&&(h.tid=r.tenantId);const m=h;for(const T of Object.keys(m))m[T]===void 0&&delete m[T];const g=await r._getAppCheckToken(),_=g?`#${vS}=${encodeURIComponent(g)}`:"";return`${wS(r)}?${sl(m).slice(1)}${_}`}function wS({config:r}){return r.emulator?hf(r,_S):`https://${r.authDomain}/${yS}`}/**
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
 */const wd="webStorageSupport";class ES{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=U_,this._completeRedirectFn=HI,this._overrideRedirectResult=BI}async _openPopup(e,t,i,o){Pr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const u=await qg(e,t,i,Od(),o);return mS(e,u,gf())}async _openRedirect(e,t,i,o){await this._originValidation(e);const u=await qg(e,t,i,Od(),o);return SI(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Pr(u,"If manager is not set, promise should be"),u)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await uS(e),i=new GI(e);return t.register("authEvent",o=>(_e(o?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(wd,{type:wd},o=>{const u=o?.[0]?.[wd];u!==void 0&&t(!!u),Dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=JI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return C_()||T_()||ff()}}const TS=ES;var Hg="@firebase/auth",Wg="1.12.0";/**
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
 */class IS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function SS(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kS(r){wo(new ci("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=i.options;_e(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const g={apiKey:h,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:R_(r)},_=new U1(i,o,u,g);return Y1(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),wo(new ci("auth-internal",e=>{const t=mi(e.getProvider("auth").getImmediate());return(i=>new IS(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ws(Hg,Wg,SS(r)),ws(Hg,Wg,"esm2020")}/**
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
 */const xS=300,AS=s_("authIdTokenMaxAge")||xS;let Gg=null;const CS=r=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>AS)return;const o=t?.token;Gg!==o&&(Gg=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function RS(r=c_()){const e=uf(r,"auth");if(e.isInitialized())return e.getImmediate();const t=Q1(r,{popupRedirectResolver:TS,persistence:[DI,EI,U_]}),i=s_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(i,location.origin);if(location.origin===u.origin){const h=CS(u.toString());gI(t,h,()=>h(t.currentUser)),mI(t,m=>h(m))}}const o=n_("auth");return o&&X1(t,`http://${o}`),t}function PS(){return document.getElementsByTagName("head")?.[0]??document}z1({loadJS(r){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",r),i.onload=e,i.onerror=o=>{const u=er("internal-error");u.customData=o,t(u)},i.type="text/javascript",i.charset="UTF-8",PS().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kS("Browser");var NS="firebase",bS="12.7.0";/**
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
 */ws(NS,bS,"app");var Kg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Es,G_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,I){function A(){}A.prototype=I.prototype,P.F=I.prototype,P.prototype=new A,P.prototype.constructor=P,P.D=function(D,N,O){for(var x=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)x[qe-2]=arguments[qe];return I.prototype[N].apply(D,x)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(P,I,A){A||(A=0);const D=Array(16);if(typeof I=="string")for(var N=0;N<16;++N)D[N]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(N=0;N<16;++N)D[N]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=P.g[0],A=P.g[1],N=P.g[2];let O=P.g[3],x;x=I+(O^A&(N^O))+D[0]+3614090360&4294967295,I=A+(x<<7&4294967295|x>>>25),x=O+(N^I&(A^N))+D[1]+3905402710&4294967295,O=I+(x<<12&4294967295|x>>>20),x=N+(A^O&(I^A))+D[2]+606105819&4294967295,N=O+(x<<17&4294967295|x>>>15),x=A+(I^N&(O^I))+D[3]+3250441966&4294967295,A=N+(x<<22&4294967295|x>>>10),x=I+(O^A&(N^O))+D[4]+4118548399&4294967295,I=A+(x<<7&4294967295|x>>>25),x=O+(N^I&(A^N))+D[5]+1200080426&4294967295,O=I+(x<<12&4294967295|x>>>20),x=N+(A^O&(I^A))+D[6]+2821735955&4294967295,N=O+(x<<17&4294967295|x>>>15),x=A+(I^N&(O^I))+D[7]+4249261313&4294967295,A=N+(x<<22&4294967295|x>>>10),x=I+(O^A&(N^O))+D[8]+1770035416&4294967295,I=A+(x<<7&4294967295|x>>>25),x=O+(N^I&(A^N))+D[9]+2336552879&4294967295,O=I+(x<<12&4294967295|x>>>20),x=N+(A^O&(I^A))+D[10]+4294925233&4294967295,N=O+(x<<17&4294967295|x>>>15),x=A+(I^N&(O^I))+D[11]+2304563134&4294967295,A=N+(x<<22&4294967295|x>>>10),x=I+(O^A&(N^O))+D[12]+1804603682&4294967295,I=A+(x<<7&4294967295|x>>>25),x=O+(N^I&(A^N))+D[13]+4254626195&4294967295,O=I+(x<<12&4294967295|x>>>20),x=N+(A^O&(I^A))+D[14]+2792965006&4294967295,N=O+(x<<17&4294967295|x>>>15),x=A+(I^N&(O^I))+D[15]+1236535329&4294967295,A=N+(x<<22&4294967295|x>>>10),x=I+(N^O&(A^N))+D[1]+4129170786&4294967295,I=A+(x<<5&4294967295|x>>>27),x=O+(A^N&(I^A))+D[6]+3225465664&4294967295,O=I+(x<<9&4294967295|x>>>23),x=N+(I^A&(O^I))+D[11]+643717713&4294967295,N=O+(x<<14&4294967295|x>>>18),x=A+(O^I&(N^O))+D[0]+3921069994&4294967295,A=N+(x<<20&4294967295|x>>>12),x=I+(N^O&(A^N))+D[5]+3593408605&4294967295,I=A+(x<<5&4294967295|x>>>27),x=O+(A^N&(I^A))+D[10]+38016083&4294967295,O=I+(x<<9&4294967295|x>>>23),x=N+(I^A&(O^I))+D[15]+3634488961&4294967295,N=O+(x<<14&4294967295|x>>>18),x=A+(O^I&(N^O))+D[4]+3889429448&4294967295,A=N+(x<<20&4294967295|x>>>12),x=I+(N^O&(A^N))+D[9]+568446438&4294967295,I=A+(x<<5&4294967295|x>>>27),x=O+(A^N&(I^A))+D[14]+3275163606&4294967295,O=I+(x<<9&4294967295|x>>>23),x=N+(I^A&(O^I))+D[3]+4107603335&4294967295,N=O+(x<<14&4294967295|x>>>18),x=A+(O^I&(N^O))+D[8]+1163531501&4294967295,A=N+(x<<20&4294967295|x>>>12),x=I+(N^O&(A^N))+D[13]+2850285829&4294967295,I=A+(x<<5&4294967295|x>>>27),x=O+(A^N&(I^A))+D[2]+4243563512&4294967295,O=I+(x<<9&4294967295|x>>>23),x=N+(I^A&(O^I))+D[7]+1735328473&4294967295,N=O+(x<<14&4294967295|x>>>18),x=A+(O^I&(N^O))+D[12]+2368359562&4294967295,A=N+(x<<20&4294967295|x>>>12),x=I+(A^N^O)+D[5]+4294588738&4294967295,I=A+(x<<4&4294967295|x>>>28),x=O+(I^A^N)+D[8]+2272392833&4294967295,O=I+(x<<11&4294967295|x>>>21),x=N+(O^I^A)+D[11]+1839030562&4294967295,N=O+(x<<16&4294967295|x>>>16),x=A+(N^O^I)+D[14]+4259657740&4294967295,A=N+(x<<23&4294967295|x>>>9),x=I+(A^N^O)+D[1]+2763975236&4294967295,I=A+(x<<4&4294967295|x>>>28),x=O+(I^A^N)+D[4]+1272893353&4294967295,O=I+(x<<11&4294967295|x>>>21),x=N+(O^I^A)+D[7]+4139469664&4294967295,N=O+(x<<16&4294967295|x>>>16),x=A+(N^O^I)+D[10]+3200236656&4294967295,A=N+(x<<23&4294967295|x>>>9),x=I+(A^N^O)+D[13]+681279174&4294967295,I=A+(x<<4&4294967295|x>>>28),x=O+(I^A^N)+D[0]+3936430074&4294967295,O=I+(x<<11&4294967295|x>>>21),x=N+(O^I^A)+D[3]+3572445317&4294967295,N=O+(x<<16&4294967295|x>>>16),x=A+(N^O^I)+D[6]+76029189&4294967295,A=N+(x<<23&4294967295|x>>>9),x=I+(A^N^O)+D[9]+3654602809&4294967295,I=A+(x<<4&4294967295|x>>>28),x=O+(I^A^N)+D[12]+3873151461&4294967295,O=I+(x<<11&4294967295|x>>>21),x=N+(O^I^A)+D[15]+530742520&4294967295,N=O+(x<<16&4294967295|x>>>16),x=A+(N^O^I)+D[2]+3299628645&4294967295,A=N+(x<<23&4294967295|x>>>9),x=I+(N^(A|~O))+D[0]+4096336452&4294967295,I=A+(x<<6&4294967295|x>>>26),x=O+(A^(I|~N))+D[7]+1126891415&4294967295,O=I+(x<<10&4294967295|x>>>22),x=N+(I^(O|~A))+D[14]+2878612391&4294967295,N=O+(x<<15&4294967295|x>>>17),x=A+(O^(N|~I))+D[5]+4237533241&4294967295,A=N+(x<<21&4294967295|x>>>11),x=I+(N^(A|~O))+D[12]+1700485571&4294967295,I=A+(x<<6&4294967295|x>>>26),x=O+(A^(I|~N))+D[3]+2399980690&4294967295,O=I+(x<<10&4294967295|x>>>22),x=N+(I^(O|~A))+D[10]+4293915773&4294967295,N=O+(x<<15&4294967295|x>>>17),x=A+(O^(N|~I))+D[1]+2240044497&4294967295,A=N+(x<<21&4294967295|x>>>11),x=I+(N^(A|~O))+D[8]+1873313359&4294967295,I=A+(x<<6&4294967295|x>>>26),x=O+(A^(I|~N))+D[15]+4264355552&4294967295,O=I+(x<<10&4294967295|x>>>22),x=N+(I^(O|~A))+D[6]+2734768916&4294967295,N=O+(x<<15&4294967295|x>>>17),x=A+(O^(N|~I))+D[13]+1309151649&4294967295,A=N+(x<<21&4294967295|x>>>11),x=I+(N^(A|~O))+D[4]+4149444226&4294967295,I=A+(x<<6&4294967295|x>>>26),x=O+(A^(I|~N))+D[11]+3174756917&4294967295,O=I+(x<<10&4294967295|x>>>22),x=N+(I^(O|~A))+D[2]+718787259&4294967295,N=O+(x<<15&4294967295|x>>>17),x=A+(O^(N|~I))+D[9]+3951481745&4294967295,P.g[0]=P.g[0]+I&4294967295,P.g[1]=P.g[1]+(N+(x<<21&4294967295|x>>>11))&4294967295,P.g[2]=P.g[2]+N&4294967295,P.g[3]=P.g[3]+O&4294967295}i.prototype.v=function(P,I){I===void 0&&(I=P.length);const A=I-this.blockSize,D=this.C;let N=this.h,O=0;for(;O<I;){if(N==0)for(;O<=A;)o(this,P,O),O+=this.blockSize;if(typeof P=="string"){for(;O<I;)if(D[N++]=P.charCodeAt(O++),N==this.blockSize){o(this,D),N=0;break}}else for(;O<I;)if(D[N++]=P[O++],N==this.blockSize){o(this,D),N=0;break}}this.h=N,this.o+=I},i.prototype.A=function(){var P=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);P[0]=128;for(var I=1;I<P.length-8;++I)P[I]=0;I=this.o*8;for(var A=P.length-8;A<P.length;++A)P[A]=I&255,I/=256;for(this.v(P),P=Array(16),I=0,A=0;A<4;++A)for(let D=0;D<32;D+=8)P[I++]=this.g[A]>>>D&255;return P};function u(P,I){var A=m;return Object.prototype.hasOwnProperty.call(A,P)?A[P]:A[P]=I(P)}function h(P,I){this.h=I;const A=[];let D=!0;for(let N=P.length-1;N>=0;N--){const O=P[N]|0;D&&O==I||(A[N]=O,D=!1)}this.g=A}var m={};function g(P){return-128<=P&&P<128?u(P,function(I){return new h([I|0],I<0?-1:0)}):new h([P|0],P<0?-1:0)}function _(P){if(isNaN(P)||!isFinite(P))return k;if(P<0)return $(_(-P));const I=[];let A=1;for(let D=0;P>=A;D++)I[D]=P/A|0,A*=4294967296;return new h(I,0)}function T(P,I){if(P.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(P.charAt(0)=="-")return $(T(P.substring(1),I));if(P.indexOf("-")>=0)throw Error('number format error: interior "-" character');const A=_(Math.pow(I,8));let D=k;for(let O=0;O<P.length;O+=8){var N=Math.min(8,P.length-O);const x=parseInt(P.substring(O,O+N),I);N<8?(N=_(Math.pow(I,N)),D=D.j(N).add(_(x))):(D=D.j(A),D=D.add(_(x)))}return D}var k=g(0),C=g(1),F=g(16777216);r=h.prototype,r.m=function(){if(Y(this))return-$(this).m();let P=0,I=1;for(let A=0;A<this.g.length;A++){const D=this.i(A);P+=(D>=0?D:4294967296+D)*I,I*=4294967296}return P},r.toString=function(P){if(P=P||10,P<2||36<P)throw Error("radix out of range: "+P);if(G(this))return"0";if(Y(this))return"-"+$(this).toString(P);const I=_(Math.pow(P,6));var A=this;let D="";for(;;){const N=we(A,I).g;A=he(A,N.j(I));let O=((A.g.length>0?A.g[0]:A.h)>>>0).toString(P);if(A=N,G(A))return O+D;for(;O.length<6;)O="0"+O;D=O+D}},r.i=function(P){return P<0?0:P<this.g.length?this.g[P]:this.h};function G(P){if(P.h!=0)return!1;for(let I=0;I<P.g.length;I++)if(P.g[I]!=0)return!1;return!0}function Y(P){return P.h==-1}r.l=function(P){return P=he(this,P),Y(P)?-1:G(P)?0:1};function $(P){const I=P.g.length,A=[];for(let D=0;D<I;D++)A[D]=~P.g[D];return new h(A,~P.h).add(C)}r.abs=function(){return Y(this)?$(this):this},r.add=function(P){const I=Math.max(this.g.length,P.g.length),A=[];let D=0;for(let N=0;N<=I;N++){let O=D+(this.i(N)&65535)+(P.i(N)&65535),x=(O>>>16)+(this.i(N)>>>16)+(P.i(N)>>>16);D=x>>>16,O&=65535,x&=65535,A[N]=x<<16|O}return new h(A,A[A.length-1]&-2147483648?-1:0)};function he(P,I){return P.add($(I))}r.j=function(P){if(G(this)||G(P))return k;if(Y(this))return Y(P)?$(this).j($(P)):$($(this).j(P));if(Y(P))return $(this.j($(P)));if(this.l(F)<0&&P.l(F)<0)return _(this.m()*P.m());const I=this.g.length+P.g.length,A=[];for(var D=0;D<2*I;D++)A[D]=0;for(D=0;D<this.g.length;D++)for(let N=0;N<P.g.length;N++){const O=this.i(D)>>>16,x=this.i(D)&65535,qe=P.i(N)>>>16,wt=P.i(N)&65535;A[2*D+2*N]+=x*wt,ee(A,2*D+2*N),A[2*D+2*N+1]+=O*wt,ee(A,2*D+2*N+1),A[2*D+2*N+1]+=x*qe,ee(A,2*D+2*N+1),A[2*D+2*N+2]+=O*qe,ee(A,2*D+2*N+2)}for(P=0;P<I;P++)A[P]=A[2*P+1]<<16|A[2*P];for(P=I;P<2*I;P++)A[P]=0;return new h(A,0)};function ee(P,I){for(;(P[I]&65535)!=P[I];)P[I+1]+=P[I]>>>16,P[I]&=65535,I++}function de(P,I){this.g=P,this.h=I}function we(P,I){if(G(I))throw Error("division by zero");if(G(P))return new de(k,k);if(Y(P))return I=we($(P),I),new de($(I.g),$(I.h));if(Y(I))return I=we(P,$(I)),new de($(I.g),I.h);if(P.g.length>30){if(Y(P)||Y(I))throw Error("slowDivide_ only works with positive integers.");for(var A=C,D=I;D.l(P)<=0;)A=B(A),D=B(D);var N=se(A,1),O=se(D,1);for(D=se(D,2),A=se(A,2);!G(D);){var x=O.add(D);x.l(P)<=0&&(N=N.add(A),O=x),D=se(D,1),A=se(A,1)}return I=he(P,N.j(I)),new de(N,I)}for(N=k;P.l(I)>=0;){for(A=Math.max(1,Math.floor(P.m()/I.m())),D=Math.ceil(Math.log(A)/Math.LN2),D=D<=48?1:Math.pow(2,D-48),O=_(A),x=O.j(I);Y(x)||x.l(P)>0;)A-=D,O=_(A),x=O.j(I);G(O)&&(O=C),N=N.add(O),P=he(P,x)}return new de(N,P)}r.B=function(P){return we(this,P).h},r.and=function(P){const I=Math.max(this.g.length,P.g.length),A=[];for(let D=0;D<I;D++)A[D]=this.i(D)&P.i(D);return new h(A,this.h&P.h)},r.or=function(P){const I=Math.max(this.g.length,P.g.length),A=[];for(let D=0;D<I;D++)A[D]=this.i(D)|P.i(D);return new h(A,this.h|P.h)},r.xor=function(P){const I=Math.max(this.g.length,P.g.length),A=[];for(let D=0;D<I;D++)A[D]=this.i(D)^P.i(D);return new h(A,this.h^P.h)};function B(P){const I=P.g.length+1,A=[];for(let D=0;D<I;D++)A[D]=P.i(D)<<1|P.i(D-1)>>>31;return new h(A,P.h)}function se(P,I){const A=I>>5;I%=32;const D=P.g.length-A,N=[];for(let O=0;O<D;O++)N[O]=I>0?P.i(O+A)>>>I|P.i(O+A+1)<<32-I:P.i(O+A);return new h(N,P.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,G_=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=T,Es=h}).apply(typeof Kg<"u"?Kg:typeof self<"u"?self:typeof window<"u"?window:{});var Du=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var K_,Oa,Q_,$u,Fd,Y_,X_,J_;(function(){var r,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Du=="object"&&Du];for(var p=0;p<l.length;++p){var y=l[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var i=t(this);function o(l,p){if(p)e:{var y=i;l=l.split(".");for(var E=0;E<l.length-1;E++){var M=l[E];if(!(M in y))break e;y=y[M]}l=l[l.length-1],E=y[l],p=p(E),p!=E&&p!=null&&e(y,l,{configurable:!0,writable:!0,value:p})}}o("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(l){return l||function(p){var y=[],E;for(E in p)Object.prototype.hasOwnProperty.call(p,E)&&y.push([E,p[E]]);return y}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function m(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function g(l,p,y){return l.call.apply(l.bind,arguments)}function _(l,p,y){return _=g,_.apply(null,arguments)}function T(l,p){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function k(l,p){function y(){}y.prototype=p.prototype,l.Z=p.prototype,l.prototype=new y,l.prototype.constructor=l,l.Ob=function(E,M,z){for(var Z=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)Z[Ie-2]=arguments[Ie];return p.prototype[M].apply(E,Z)}}var C=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function F(l){const p=l.length;if(p>0){const y=Array(p);for(let E=0;E<p;E++)y[E]=l[E];return y}return[]}function G(l,p){for(let E=1;E<arguments.length;E++){const M=arguments[E];var y=typeof M;if(y=y!="object"?y:M?Array.isArray(M)?"array":y:"null",y=="array"||y=="object"&&typeof M.length=="number"){y=l.length||0;const z=M.length||0;l.length=y+z;for(let Z=0;Z<z;Z++)l[y+Z]=M[Z]}else l.push(M)}}class Y{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function $(l){h.setTimeout(()=>{throw l},0)}function he(){var l=P;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class ee{constructor(){this.h=this.g=null}add(p,y){const E=de.get();E.set(p,y),this.h?this.h.next=E:this.g=E,this.h=E}}var de=new Y(()=>new we,l=>l.reset());class we{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let B,se=!1,P=new ee,I=()=>{const l=Promise.resolve(void 0);B=()=>{l.then(A)}};function A(){for(var l;l=he();){try{l.h.call(l.g)}catch(y){$(y)}var p=de;p.j(l),p.h<100&&(p.h++,l.next=p.g,p.g=l)}se=!1}function D(){this.u=this.u,this.C=this.C}D.prototype.u=!1,D.prototype.dispose=function(){this.u||(this.u=!0,this.N())},D.prototype[Symbol.dispose]=function(){this.dispose()},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var O=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};h.addEventListener("test",y,p),h.removeEventListener("test",y,p)}catch{}return l})();function x(l){return/^[\s\xa0]*$/.test(l)}function qe(l,p){N.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,p)}k(qe,N),qe.prototype.init=function(l,p){const y=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget,p||(y=="mouseover"?p=l.fromElement:y=="mouseout"&&(p=l.toElement)),this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&qe.Z.h.call(this)},qe.prototype.h=function(){qe.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var wt="closure_listenable_"+(Math.random()*1e6|0),bt=0;function Xe(l,p,y,E,M){this.listener=l,this.proxy=null,this.src=p,this.type=y,this.capture=!!E,this.ha=M,this.key=++bt,this.da=this.fa=!1}function te(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function pe(l,p,y){for(const E in l)p.call(y,l[E],E,l)}function oe(l,p){for(const y in l)p.call(void 0,l[y],y,l)}function V(l){const p={};for(const y in l)p[y]=l[y];return p}const W="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ke(l,p){let y,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(y in E)l[y]=E[y];for(let z=0;z<W.length;z++)y=W[z],Object.prototype.hasOwnProperty.call(E,y)&&(l[y]=E[y])}}function xe(l){this.src=l,this.g={},this.h=0}xe.prototype.add=function(l,p,y,E,M){const z=l.toString();l=this.g[z],l||(l=this.g[z]=[],this.h++);const Z=Re(l,p,E,M);return Z>-1?(p=l[Z],y||(p.fa=!1)):(p=new Xe(p,this.src,z,!!E,M),p.fa=y,l.push(p)),p};function Ce(l,p){const y=p.type;if(y in l.g){var E=l.g[y],M=Array.prototype.indexOf.call(E,p,void 0),z;(z=M>=0)&&Array.prototype.splice.call(E,M,1),z&&(te(p),l.g[y].length==0&&(delete l.g[y],l.h--))}}function Re(l,p,y,E){for(let M=0;M<l.length;++M){const z=l[M];if(!z.da&&z.listener==p&&z.capture==!!y&&z.ha==E)return M}return-1}var Fe="closure_lm_"+(Math.random()*1e6|0),Oe={};function Be(l,p,y,E,M){if(Array.isArray(p)){for(let z=0;z<p.length;z++)Be(l,p[z],y,E,M);return null}return y=Fo(y),l&&l[wt]?l.J(p,y,m(E)?!!E.capture:!1,M):$t(l,p,y,!1,E,M)}function $t(l,p,y,E,M,z){if(!p)throw Error("Invalid event type");const Z=m(M)?!!M.capture:!!M;let Ie=Ei(l);if(Ie||(l[Fe]=Ie=new xe(l)),y=Ie.add(p,y,E,Z,z),y.proxy)return y;if(E=vi(),y.proxy=E,E.src=l,E.listener=y,l.addEventListener)O||(M=Z),M===void 0&&(M=!1),l.addEventListener(p.toString(),E,M);else if(l.attachEvent)l.attachEvent(wi(p.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function vi(){function l(y){return p.call(l.src,l.listener,y)}const p=gl;return l}function jo(l,p,y,E,M){if(Array.isArray(p))for(var z=0;z<p.length;z++)jo(l,p[z],y,E,M);else E=m(E)?!!E.capture:!!E,y=Fo(y),l&&l[wt]?(l=l.i,z=String(p).toString(),z in l.g&&(p=l.g[z],y=Re(p,y,E,M),y>-1&&(te(p[y]),Array.prototype.splice.call(p,y,1),p.length==0&&(delete l.g[z],l.h--)))):l&&(l=Ei(l))&&(p=l.g[p.toString()],l=-1,p&&(l=Re(p,y,E,M)),(y=l>-1?p[l]:null)&&Lr(y))}function Lr(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[wt])Ce(p.i,l);else{var y=l.type,E=l.proxy;p.removeEventListener?p.removeEventListener(y,E,l.capture):p.detachEvent?p.detachEvent(wi(y),E):p.addListener&&p.removeListener&&p.removeListener(E),(y=Ei(p))?(Ce(y,l),y.h==0&&(y.src=null,p[Fe]=null)):te(l)}}}function wi(l){return l in Oe?Oe[l]:Oe[l]="on"+l}function gl(l,p){if(l.da)l=!0;else{p=new qe(p,this);const y=l.listener,E=l.ha||l.src;l.fa&&Lr(l),l=y.call(E,p)}return l}function Ei(l){return l=l[Fe],l instanceof xe?l:null}var Vs="__closure_events_fn_"+(Math.random()*1e9>>>0);function Fo(l){return typeof l=="function"?l:(l[Vs]||(l[Vs]=function(p){return l.handleEvent(p)}),l[Vs])}function ut(){D.call(this),this.i=new xe(this),this.M=this,this.G=null}k(ut,D),ut.prototype[wt]=!0,ut.prototype.removeEventListener=function(l,p,y,E){jo(this,l,p,y,E)};function it(l,p){var y,E=l.G;if(E)for(y=[];E;E=E.G)y.push(E);if(l=l.M,E=p.type||p,typeof p=="string")p=new N(p,l);else if(p instanceof N)p.target=p.target||l;else{var M=p;p=new N(E,l),ke(p,M)}M=!0;let z,Z;if(y)for(Z=y.length-1;Z>=0;Z--)z=p.g=y[Z],M=Tn(z,E,!0,p)&&M;if(z=p.g=l,M=Tn(z,E,!0,p)&&M,M=Tn(z,E,!1,p)&&M,y)for(Z=0;Z<y.length;Z++)z=p.g=y[Z],M=Tn(z,E,!1,p)&&M}ut.prototype.N=function(){if(ut.Z.N.call(this),this.i){var l=this.i;for(const p in l.g){const y=l.g[p];for(let E=0;E<y.length;E++)te(y[E]);delete l.g[p],l.h--}}this.G=null},ut.prototype.J=function(l,p,y,E){return this.i.add(String(l),p,!1,y,E)},ut.prototype.K=function(l,p,y,E){return this.i.add(String(l),p,!0,y,E)};function Tn(l,p,y,E){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();let M=!0;for(let z=0;z<p.length;++z){const Z=p[z];if(Z&&!Z.da&&Z.capture==y){const Ie=Z.listener,ot=Z.ha||Z.src;Z.fa&&Ce(l.i,Z),M=Ie.call(ot,E)!==!1&&M}}return M&&!E.defaultPrevented}function Uo(l,p){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=_(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(l,p||0)}function zo(l){l.g=Uo(()=>{l.g=null,l.i&&(l.i=!1,zo(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class yl extends D{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:zo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mr(l){D.call(this),this.h=l,this.g={}}k(Mr,D);var Bo=[];function Ti(l){pe(l.g,function(p,y){this.g.hasOwnProperty(y)&&Lr(p)},l),l.g={}}Mr.prototype.N=function(){Mr.Z.N.call(this),Ti(this)},Mr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var jr=h.JSON.stringify,_l=h.JSON.parse,Os=class{stringify(l){return h.JSON.stringify(l,void 0)}parse(l){return h.JSON.parse(l,void 0)}};function Fr(){}function vl(){}var Ur={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ii(){N.call(this,"d")}k(Ii,N);function $o(){N.call(this,"c")}k($o,N);var In={},Si=null;function zr(){return Si=Si||new ut}In.Ia="serverreachability";function ki(l){N.call(this,In.Ia,l)}k(ki,N);function ar(l){const p=zr();it(p,new ki(p))}In.STAT_EVENT="statevent";function lr(l,p){N.call(this,In.STAT_EVENT,l),this.stat=p}k(lr,N);function rt(l){const p=zr();it(p,new lr(p,l))}In.Ja="timingevent";function qo(l,p){N.call(this,In.Ja,l),this.size=p}k(qo,N);function Br(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){l()},p)}function $r(){this.g=!0}$r.prototype.ua=function(){this.g=!1};function wl(l,p,y,E,M,z){l.info(function(){if(l.g)if(z){var Z="",Ie=z.split("&");for(let ze=0;ze<Ie.length;ze++){var ot=Ie[ze].split("=");if(ot.length>1){const ct=ot[0];ot=ot[1];const on=ct.split("_");Z=on.length>=2&&on[1]=="type"?Z+(ct+"="+ot+"&"):Z+(ct+"=redacted&")}}}else Z=null;else Z=z;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+p+`
`+y+`
`+Z})}function El(l,p,y,E,M,z,Z){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+p+`
`+y+`
`+z+" "+Z})}function On(l,p,y,E){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+Ls(l,y)+(E?" "+E:"")})}function Tl(l,p){l.info(function(){return"TIMEOUT: "+p})}$r.prototype.info=function(){};function Ls(l,p){if(!l.g)return p;if(!p)return null;try{const z=JSON.parse(p);if(z){for(l=0;l<z.length;l++)if(Array.isArray(z[l])){var y=z[l];if(!(y.length<2)){var E=y[1];if(Array.isArray(E)&&!(E.length<1)){var M=E[0];if(M!="noop"&&M!="stop"&&M!="close")for(let Z=1;Z<E.length;Z++)E[Z]=""}}}}return jr(z)}catch{return p}}var qr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Hr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Il;function ur(){}k(ur,Fr),ur.prototype.g=function(){return new XMLHttpRequest},Il=new ur;function Ln(l){return encodeURIComponent(String(l))}function xi(l){var p=1;l=l.split(":");const y=[];for(;p>0&&l.length;)y.push(l.shift()),p--;return l.length&&y.push(l.join(":")),y}function hn(l,p,y,E){this.j=l,this.i=p,this.l=y,this.S=E||1,this.V=new Mr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Sl}function Sl(){this.i=null,this.g="",this.h=!1}var kl={},Ho={};function Sn(l,p,y){l.M=1,l.A=hr(dn(p)),l.u=y,l.R=!0,Wo(l,null)}function Wo(l,p){l.F=Date.now(),Ms(l),l.B=dn(l.A);var y=l.B,E=l.S;Array.isArray(E)||(E=[String(E)]),na(y.i,"t",E),l.C=0,y=l.j.L,l.h=new Sl,l.g=Ol(l.j,y?p:null,!l.u),l.P>0&&(l.O=new yl(_(l.Y,l,l.g),l.P)),p=l.V,y=l.g,E=l.ba;var M="readystatechange";Array.isArray(M)||(M&&(Bo[0]=M.toString()),M=Bo);for(let z=0;z<M.length;z++){const Z=Be(y,M[z],E||p.handleEvent,!1,p.h||p);if(!Z)break;p.g[Z.key]=Z}p=l.J?V(l.J):{},l.u?(l.v||(l.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,p)):(l.v="GET",l.g.ea(l.B,l.v,null,p)),ar(),wl(l.i,l.v,l.B,l.l,l.S,l.u)}hn.prototype.ba=function(l){l=l.target;const p=this.O;p&&$n(l)==3?p.j():this.Y(l)},hn.prototype.Y=function(l){try{if(l==this.g)e:{const Ie=$n(this.g),ot=this.g.ya(),ze=this.g.ca();if(!(Ie<3)&&(Ie!=3||this.g&&(this.h.h||this.g.la()||Dl(this.g)))){this.K||Ie!=4||ot==7||(ot==8||ze<=0?ar(3):ar(2)),Ai(this);var p=this.g.ca();this.X=p;var y=xl(this);if(this.o=p==200,El(this.i,this.v,this.B,this.l,this.S,Ie,p),this.o){if(this.U&&!this.L){t:{if(this.g){var E,M=this.g;if((E=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(E)){var z=E;break t}}z=null}if(l=z)On(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ke(this,l);else{this.o=!1,this.m=3,rt(12),cr(this),js(this);break e}}if(this.R){l=!0;let ct;for(;!this.K&&this.C<y.length;)if(ct=Cl(this,y),ct==Ho){Ie==4&&(this.m=4,rt(14),l=!1),On(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==kl){this.m=4,rt(15),On(this.i,this.l,y,"[Invalid Chunk]"),l=!1;break}else On(this.i,this.l,ct,null),Ke(this,ct);if(Al(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ie!=4||y.length!=0||this.h.h||(this.m=1,rt(16),l=!1),this.o=this.o&&l,!l)On(this.i,this.l,y,"[Invalid Chunked Response]"),cr(this),js(this);else if(y.length>0&&!this.W){this.W=!0;var Z=this.j;Z.g==this&&Z.aa&&!Z.P&&(Z.j.info("Great, no buffering proxy detected. Bytes received: "+y.length),Gs(Z),Z.P=!0,rt(11))}}else On(this.i,this.l,y,null),Ke(this,y);Ie==4&&cr(this),this.o&&!this.K&&(Ie==4?Mi(this.j,this):(this.o=!1,Ms(this)))}else sa(this.g),p==400&&y.indexOf("Unknown SID")>0?(this.m=3,rt(12)):(this.m=0,rt(13)),cr(this),js(this)}}}catch{}finally{}};function xl(l){if(!Al(l))return l.g.la();const p=Dl(l.g);if(p==="")return"";let y="";const E=p.length,M=$n(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return cr(l),js(l),"";l.h.i=new h.TextDecoder}for(let z=0;z<E;z++)l.h.h=!0,y+=l.h.i.decode(p[z],{stream:!(M&&z==E-1)});return p.length=0,l.h.g+=y,l.C=0,l.h.g}function Al(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function Cl(l,p){var y=l.C,E=p.indexOf(`
`,y);return E==-1?Ho:(y=Number(p.substring(y,E)),isNaN(y)?kl:(E+=1,E+y>p.length?Ho:(p=p.slice(E,E+y),l.C=E+y,p)))}hn.prototype.cancel=function(){this.K=!0,cr(this)};function Ms(l){l.T=Date.now()+l.H,Go(l,l.H)}function Go(l,p){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Br(_(l.aa,l),p)}function Ai(l){l.D&&(h.clearTimeout(l.D),l.D=null)}hn.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(Tl(this.i,this.B),this.M!=2&&(ar(),rt(17)),cr(this),this.m=2,js(this)):Go(this,this.T-l)};function js(l){l.j.I==0||l.K||Mi(l.j,l)}function cr(l){Ai(l);var p=l.O;p&&typeof p.dispose=="function"&&p.dispose(),l.O=null,Ti(l.V),l.g&&(p=l.g,l.g=null,p.abort(),p.dispose())}function Ke(l,p){try{var y=l.j;if(y.I!=0&&(y.g==l||Qo(y.h,l))){if(!l.L&&Qo(y.h,l)&&y.I==3){try{var E=y.Ba.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!y.v){if(y.g)if(y.g.F+3e3<l.F)Li(y),rn(y);else break e;Wn(y),rt(18)}}else y.xa=M[1],0<y.xa-y.K&&M[2]<37500&&y.F&&y.A==0&&!y.C&&(y.C=Br(_(y.Va,y),6e3));Fs(y.h)<=1&&y.ta&&(y.ta=void 0)}else sn(y,11)}else if((l.L||y.g==l)&&Li(y),!x(p))for(M=y.Ba.g.parse(p),p=0;p<M.length;p++){let ze=M[p];const ct=ze[0];if(!(ct<=y.K))if(y.K=ct,ze=ze[1],y.I==2)if(ze[0]=="c"){y.M=ze[1],y.ba=ze[2];const on=ze[3];on!=null&&(y.ka=on,y.j.info("VER="+y.ka));const gr=ze[4];gr!=null&&(y.za=gr,y.j.info("SVER="+y.za));const Gn=ze[5];Gn!=null&&typeof Gn=="number"&&Gn>0&&(E=1.5*Gn,y.O=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const Kn=l.g;if(Kn){const Ui=Kn.g?Kn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ui){var z=E.h;z.g||Ui.indexOf("spdy")==-1&&Ui.indexOf("quic")==-1&&Ui.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(Ri(z,z.h),z.h=null))}if(E.G){const aa=Kn.g?Kn.g.getResponseHeader("X-HTTP-Session-Id"):null;aa&&(E.wa=aa,je(E.J,E.G,aa))}}y.I=3,y.l&&y.l.ra(),y.aa&&(y.T=Date.now()-l.F,y.j.info("Handshake RTT: "+y.T+"ms")),E=y;var Z=l;if(E.na=oa(E,E.L?E.ba:null,E.W),Z.L){Us(E.h,Z);var Ie=Z,ot=E.O;ot&&(Ie.H=ot),Ie.D&&(Ai(Ie),Ms(Ie)),E.g=Z}else Dt(E);y.i.length>0&&mr(y)}else ze[0]!="stop"&&ze[0]!="close"||sn(y,7);else y.I==3&&(ze[0]=="stop"||ze[0]=="close"?ze[0]=="stop"?sn(y,7):Vi(y):ze[0]!="noop"&&y.l&&y.l.qa(ze),y.A=0)}}ar(4)}catch{}}var Uc=class{constructor(l,p){this.g=l,this.map=p}};function Ci(l){this.l=l||10,h.PerformanceNavigationTiming?(l=h.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ko(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Fs(l){return l.h?1:l.g?l.g.size:0}function Qo(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function Ri(l,p){l.g?l.g.add(p):l.h=p}function Us(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}Ci.prototype.cancel=function(){if(this.i=en(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function en(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const y of l.g.values())p=p.concat(y.G);return p}return F(l.i)}var Rl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tn(l,p){if(l){l=l.split("&");for(let y=0;y<l.length;y++){const E=l[y].indexOf("=");let M,z=null;E>=0?(M=l[y].substring(0,E),z=l[y].substring(E+1)):M=l[y],p(M,z?decodeURIComponent(z.replace(/\+/g," ")):"")}}}function Mn(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;l instanceof Mn?(this.l=l.l,zs(this,l.j),this.o=l.o,this.g=l.g,jn(this,l.u),this.h=l.h,Wr(this,ra(l.i)),this.m=l.m):l&&(p=String(l).match(Rl))?(this.l=!1,zs(this,p[1]||"",!0),this.o=Bs(p[2]||""),this.g=Bs(p[3]||"",!0),jn(this,p[4]),this.h=Bs(p[5]||"",!0),Wr(this,p[6]||"",!0),this.m=Bs(p[7]||"")):(this.l=!1,this.i=new De(null,this.l))}Mn.prototype.toString=function(){const l=[];var p=this.j;p&&l.push($s(p,Xo,!0),":");var y=this.g;return(y||p=="file")&&(l.push("//"),(p=this.o)&&l.push($s(p,Xo,!0),"@"),l.push(Ln(y).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.u,y!=null&&l.push(":",String(y))),(y=this.h)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push($s(y,y.charAt(0)=="/"?qs:Jo,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",$s(y,Zo)),l.join("")},Mn.prototype.resolve=function(l){const p=dn(this);let y=!!l.j;y?zs(p,l.j):y=!!l.o,y?p.o=l.o:y=!!l.g,y?p.g=l.g:y=l.u!=null;var E=l.h;if(y)jn(p,l.u);else if(y=!!l.h){if(E.charAt(0)!="/")if(this.g&&!this.h)E="/"+E;else{var M=p.h.lastIndexOf("/");M!=-1&&(E=p.h.slice(0,M+1)+E)}if(M=E,M==".."||M==".")E="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){E=M.lastIndexOf("/",0)==0,M=M.split("/");const z=[];for(let Z=0;Z<M.length;){const Ie=M[Z++];Ie=="."?E&&Z==M.length&&z.push(""):Ie==".."?((z.length>1||z.length==1&&z[0]!="")&&z.pop(),E&&Z==M.length&&z.push("")):(z.push(Ie),E=!0)}E=z.join("/")}else E=M}return y?p.h=E:y=l.i.toString()!=="",y?Wr(p,ra(l.i)):y=!!l.m,y&&(p.m=l.m),p};function dn(l){return new Mn(l)}function zs(l,p,y){l.j=y?Bs(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function jn(l,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);l.u=p}else l.u=null}function Wr(l,p,y){p instanceof De?(l.i=p,Ni(l.i,l.l)):(y||(p=$s(p,zc)),l.i=new De(p,l.l))}function je(l,p,y){l.i.set(p,y)}function hr(l){return je(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function Bs(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function $s(l,p,y){return typeof l=="string"?(l=encodeURI(l).replace(p,Yo),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Yo(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Xo=/[#\/\?@]/g,Jo=/[#\?:]/g,qs=/[#\?]/g,zc=/[#\?@]/g,Zo=/#/g;function De(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function Fn(l){l.g||(l.g=new Map,l.h=0,l.i&&tn(l.i,function(p,y){l.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=De.prototype,r.add=function(l,p){Fn(this),this.i=null,l=Un(this,l);let y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(p),this.h+=1,this};function ea(l,p){Fn(l),p=Un(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function Pi(l,p){return Fn(l),p=Un(l,p),l.g.has(p)}r.forEach=function(l,p){Fn(this),this.g.forEach(function(y,E){y.forEach(function(M){l.call(p,M,E,this)},this)},this)};function ta(l,p){Fn(l);let y=[];if(typeof p=="string")Pi(l,p)&&(y=y.concat(l.g.get(Un(l,p))));else for(l=Array.from(l.g.values()),p=0;p<l.length;p++)y=y.concat(l[p]);return y}r.set=function(l,p){return Fn(this),this.i=null,l=Un(this,l),Pi(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},r.get=function(l,p){return l?(l=ta(this,l),l.length>0?String(l[0]):p):p};function na(l,p,y){ea(l,p),y.length>0&&(l.i=null,l.g.set(Un(l,p),F(y)),l.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(let E=0;E<p.length;E++){var y=p[E];const M=Ln(y);y=ta(this,y);for(let z=0;z<y.length;z++){let Z=M;y[z]!==""&&(Z+="="+Ln(y[z])),l.push(Z)}}return this.i=l.join("&")};function ra(l){const p=new De;return p.i=l.i,l.g&&(p.g=new Map(l.g),p.h=l.h),p}function Un(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function Ni(l,p){p&&!l.j&&(Fn(l),l.i=null,l.g.forEach(function(y,E){const M=E.toLowerCase();E!=M&&(ea(this,E),na(this,M,y))},l)),l.j=p}function zn(l,p){const y=new $r;if(h.Image){const E=new Image;E.onload=T(kt,y,"TestLoadImage: loaded",!0,p,E),E.onerror=T(kt,y,"TestLoadImage: error",!1,p,E),E.onabort=T(kt,y,"TestLoadImage: abort",!1,p,E),E.ontimeout=T(kt,y,"TestLoadImage: timeout",!1,p,E),h.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else p(!1)}function Bn(l,p){const y=new $r,E=new AbortController,M=setTimeout(()=>{E.abort(),kt(y,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:E.signal}).then(z=>{clearTimeout(M),z.ok?kt(y,"TestPingServer: ok",!0,p):kt(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),kt(y,"TestPingServer: error",!1,p)})}function kt(l,p,y,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(y)}catch{}}function Hs(){this.g=new Os}function dr(l){this.i=l.Sb||null,this.h=l.ab||!1}k(dr,Fr),dr.prototype.g=function(){return new nn(this.i,this.h)};function nn(l,p){ut.call(this),this.H=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}k(nn,ut),r=nn.prototype,r.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=p,this.readyState=1,kn(this)},r.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(p.body=l),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Gr(this)),this.readyState=0},r.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,kn(this)),this.g&&(this.readyState=3,kn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Pl(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function Pl(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}r.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?Gr(this):kn(this),this.readyState==3&&Pl(this)}},r.Oa=function(l){this.g&&(this.response=this.responseText=l,Gr(this))},r.Na=function(l){this.g&&(this.response=l,Gr(this))},r.ga=function(){this.g&&Gr(this)};function Gr(l){l.readyState=4,l.l=null,l.j=null,l.B=null,kn(l)}r.setRequestHeader=function(l,p){this.A.append(l,p)},r.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=p.next();return l.join(`\r
`)};function kn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(nn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Nl(l){let p="";return pe(l,function(y,E){p+=E,p+=":",p+=y,p+=`\r
`}),p}function bi(l,p,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=Nl(y),typeof l=="string"?y!=null&&Ln(y):je(l,p,y))}function $e(l){ut.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}k($e,ut);var bl=/^https?$/i,Bc=["POST","PUT"];r=$e.prototype,r.Fa=function(l){this.H=l},r.ea=function(l,p,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Il.g(),this.g.onreadystatechange=C(_(this.Ca,this));try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(z){Kr(this,z);return}if(l=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)y.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const z of E.keys())y.set(z,E.get(z));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(z=>z.toLowerCase()=="content-type"),M=h.FormData&&l instanceof h.FormData,!(Array.prototype.indexOf.call(Bc,p,void 0)>=0)||E||M||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,Z]of y)this.g.setRequestHeader(z,Z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(z){Kr(this,z)}};function Kr(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.o=5,Qr(l),pr(l)}function Qr(l){l.A||(l.A=!0,it(l,"complete"),it(l,"error"))}r.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,it(this,"complete"),it(this,"abort"),pr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pr(this,!0)),$e.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?fr(this):this.Xa())},r.Xa=function(){fr(this)};function fr(l){if(l.h&&typeof u<"u"){if(l.v&&$n(l)==4)setTimeout(l.Ca.bind(l),0);else if(it(l,"readystatechange"),$n(l)==4){l.h=!1;try{const z=l.ca();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var E;if(E=z===0){let Z=String(l.D).match(Rl)[1]||null;!Z&&h.self&&h.self.location&&(Z=h.self.location.protocol.slice(0,-1)),E=!bl.test(Z?Z.toLowerCase():"")}y=E}if(y)it(l,"complete"),it(l,"success");else{l.o=6;try{var M=$n(l)>2?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.ca()+"]",Qr(l)}}finally{pr(l)}}}}function pr(l,p){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const y=l.g;l.g=null,p||it(l,"ready");try{y.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function $n(l){return l.g?l.g.readyState:0}r.ca=function(){try{return $n(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),_l(p)}};function Dl(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function sa(l){const p={};l=(l.g&&$n(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(x(l[E]))continue;var y=xi(l[E]);const M=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const z=p[M]||[];p[M]=z,z.push(y)}oe(p,function(E){return E.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function qn(l,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||p}function Di(l){this.za=0,this.i=[],this.j=new $r,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=qn("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=qn("baseRetryDelayMs",5e3,l),this.Za=qn("retryDelaySeedMs",1e4,l),this.Ta=qn("forwardChannelMaxRetries",2,l),this.va=qn("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new Ci(l&&l.concurrentRequestLimit),this.Ba=new Hs,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Di.prototype,r.ka=8,r.I=1,r.connect=function(l,p,y,E){rt(0),this.W=l,this.H=p||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.J=oa(this,null,this.W),mr(this)};function Vi(l){if(Oi(l),l.I==3){var p=l.V++,y=dn(l.J);if(je(y,"SID",l.M),je(y,"RID",p),je(y,"TYPE","terminate"),Hn(l,y),p=new hn(l,l.j,p),p.M=2,p.A=hr(dn(y)),y=!1,h.navigator&&h.navigator.sendBeacon)try{y=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!y&&h.Image&&(new Image().src=p.A,y=!0),y||(p.g=Ol(p.j,null),p.g.ea(p.A)),p.F=Date.now(),Ms(p)}Ks(l)}function rn(l){l.g&&(Gs(l),l.g.cancel(),l.g=null)}function Oi(l){rn(l),l.v&&(h.clearTimeout(l.v),l.v=null),Li(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&h.clearTimeout(l.m),l.m=null)}function mr(l){if(!Ko(l.h)&&!l.m){l.m=!0;var p=l.Ea;B||I(),se||(B(),se=!0),P.add(p,l),l.D=0}}function Vl(l,p){return Fs(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=p.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Br(_(l.Ea,l,p),ji(l,l.D)),l.D++,!0)}r.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const M=new hn(this,this.j,l);let z=this.o;if(this.U&&(z?(z=V(z),ke(z,this.U)):z=this.U),this.u!==null||this.R||(M.J=z,z=null),this.S)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,p>4096){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=ia(this,M,p),y=dn(this.J),je(y,"RID",l),je(y,"CVER",22),this.G&&je(y,"X-HTTP-Session-Id",this.G),Hn(this,y),z&&(this.R?p="headers="+Ln(Nl(z))+"&"+p:this.u&&bi(y,this.u,z)),Ri(this.h,M),this.Ra&&je(y,"TYPE","init"),this.S?(je(y,"$req",p),je(y,"SID","null"),M.U=!0,Sn(M,y,null)):Sn(M,y,p),this.I=2}}else this.I==3&&(l?Ws(this,l):this.i.length==0||Ko(this.h)||Ws(this))};function Ws(l,p){var y;p?y=p.l:y=l.V++;const E=dn(l.J);je(E,"SID",l.M),je(E,"RID",y),je(E,"AID",l.K),Hn(l,E),l.u&&l.o&&bi(E,l.u,l.o),y=new hn(l,l.j,y,l.D+1),l.u===null&&(y.J=l.o),p&&(l.i=p.G.concat(l.i)),p=ia(l,y,1e3),y.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),Ri(l.h,y),Sn(y,E,p)}function Hn(l,p){l.H&&pe(l.H,function(y,E){je(p,E,y)}),l.l&&pe({},function(y,E){je(p,E,y)})}function ia(l,p,y){y=Math.min(l.i.length,y);const E=l.l?_(l.l.Ka,l.l,l):null;e:{var M=l.i;let Ie=-1;for(;;){const ot=["count="+y];Ie==-1?y>0?(Ie=M[0].g,ot.push("ofs="+Ie)):Ie=0:ot.push("ofs="+Ie);let ze=!0;for(let ct=0;ct<y;ct++){var z=M[ct].g;const on=M[ct].map;if(z-=Ie,z<0)Ie=Math.max(0,M[ct].g-100),ze=!1;else try{z="req"+z+"_"||"";try{var Z=on instanceof Map?on:Object.entries(on);for(const[gr,Gn]of Z){let Kn=Gn;m(Gn)&&(Kn=jr(Gn)),ot.push(z+gr+"="+encodeURIComponent(Kn))}}catch(gr){throw ot.push(z+"type="+encodeURIComponent("_badmap")),gr}}catch{E&&E(on)}}if(ze){Z=ot.join("&");break e}}Z=void 0}return l=l.i.splice(0,y),p.G=l,Z}function Dt(l){if(!l.g&&!l.v){l.Y=1;var p=l.Da;B||I(),se||(B(),se=!0),P.add(p,l),l.A=0}}function Wn(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Br(_(l.Da,l),ji(l,l.A)),l.A++,!0)}r.Da=function(){if(this.v=null,Yr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Br(_(this.Wa,this),l)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,rt(10),rn(this),Yr(this))};function Gs(l){l.B!=null&&(h.clearTimeout(l.B),l.B=null)}function Yr(l){l.g=new hn(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var p=dn(l.na);je(p,"RID","rpc"),je(p,"SID",l.M),je(p,"AID",l.K),je(p,"CI",l.F?"0":"1"),!l.F&&l.ia&&je(p,"TO",l.ia),je(p,"TYPE","xmlhttp"),Hn(l,p),l.u&&l.o&&bi(p,l.u,l.o),l.O&&(l.g.H=l.O);var y=l.g;l=l.ba,y.M=1,y.A=hr(dn(p)),y.u=null,y.R=!0,Wo(y,l)}r.Va=function(){this.C!=null&&(this.C=null,rn(this),Wn(this),rt(19))};function Li(l){l.C!=null&&(h.clearTimeout(l.C),l.C=null)}function Mi(l,p){var y=null;if(l.g==p){Li(l),Gs(l),l.g=null;var E=2}else if(Qo(l.h,p))y=p.G,Us(l.h,p),E=1;else return;if(l.I!=0){if(p.o)if(E==1){y=p.u?p.u.length:0,p=Date.now()-p.F;var M=l.D;E=zr(),it(E,new qo(E,y)),mr(l)}else Dt(l);else if(M=p.m,M==3||M==0&&p.X>0||!(E==1&&Vl(l,p)||E==2&&Wn(l)))switch(y&&y.length>0&&(p=l.h,p.i=p.i.concat(y)),M){case 1:sn(l,5);break;case 4:sn(l,10);break;case 3:sn(l,6);break;default:sn(l,2)}}}function ji(l,p){let y=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(y*=2),y*p}function sn(l,p){if(l.j.info("Error code "+p),p==2){var y=_(l.bb,l),E=l.Ua;const M=!E;E=new Mn(E||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||zs(E,"https"),hr(E),M?zn(E.toString(),y):Bn(E.toString(),y)}else rt(2);l.I=0,l.l&&l.l.pa(p),Ks(l),Oi(l)}r.bb=function(l){l?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function Ks(l){if(l.I=0,l.ja=[],l.l){const p=en(l.h);(p.length!=0||l.i.length!=0)&&(G(l.ja,p),G(l.ja,l.i),l.h.i.length=0,F(l.i),l.i.length=0),l.l.oa()}}function oa(l,p,y){var E=y instanceof Mn?dn(y):new Mn(y);if(E.g!="")p&&(E.g=p+"."+E.g),jn(E,E.u);else{var M=h.location;E=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;const z=new Mn(null);E&&zs(z,E),p&&(z.g=p),M&&jn(z,M),y&&(z.h=y),E=z}return y=l.G,p=l.wa,y&&p&&je(E,y,p),je(E,"VER",l.ka),Hn(l,E),E}function Ol(l,p,y){if(p&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Aa&&!l.ma?new $e(new dr({ab:y})):new $e(l.ma),p.Fa(l.L),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ll(){}r=Ll.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Fi(){}Fi.prototype.g=function(l,p){return new xt(l,p)};function xt(l,p){ut.call(this),this.g=new Di(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(l?l["X-WebChannel-Client-Profile"]=p.sa:l={"X-WebChannel-Client-Profile":p.sa}),this.g.U=l,(l=p&&p.Qb)&&!x(l)&&(this.g.u=l),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!x(p)&&(this.g.G=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new Xr(this)}k(xt,ut),xt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){Vi(this.g)},xt.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.v&&(y={},y.__data__=jr(l),l=y);p.i.push(new Uc(p.Ya++,l)),p.I==3&&mr(p)},xt.prototype.N=function(){this.g.l=null,delete this.j,Vi(this.g),delete this.g,xt.Z.N.call(this)};function Ml(l){Ii.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const y in p){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}k(Ml,Ii);function jl(){$o.call(this),this.status=1}k(jl,$o);function Xr(l){this.g=l}k(Xr,Ll),Xr.prototype.ra=function(){it(this.g,"a")},Xr.prototype.qa=function(l){it(this.g,new Ml(l))},Xr.prototype.pa=function(l){it(this.g,new jl)},Xr.prototype.oa=function(){it(this.g,"b")},Fi.prototype.createWebChannel=Fi.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,J_=function(){return new Fi},X_=function(){return zr()},Y_=In,Fd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},qr.NO_ERROR=0,qr.TIMEOUT=8,qr.HTTP_ERROR=6,$u=qr,Hr.COMPLETE="complete",Q_=Hr,vl.EventType=Ur,Ur.OPEN="a",Ur.CLOSE="b",Ur.ERROR="c",Ur.MESSAGE="d",ut.prototype.listen=ut.prototype.J,Oa=vl,$e.prototype.listenOnce=$e.prototype.K,$e.prototype.getLastError=$e.prototype.Ha,$e.prototype.getLastErrorCode=$e.prototype.ya,$e.prototype.getStatus=$e.prototype.ca,$e.prototype.getResponseJson=$e.prototype.La,$e.prototype.getResponseText=$e.prototype.la,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Fa,K_=$e}).apply(typeof Du<"u"?Du:typeof self<"u"?self:typeof window<"u"?window:{});const Qg="@firebase/firestore",Yg="4.9.3";/**
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
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
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
 */let bo="12.7.0";/**
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
 */const fi=new af("@firebase/firestore");function ao(){return fi.logLevel}function ie(r,...e){if(fi.logLevel<=Pe.DEBUG){const t=e.map(_f);fi.debug(`Firestore (${bo}): ${r}`,...t)}}function Nr(r,...e){if(fi.logLevel<=Pe.ERROR){const t=e.map(_f);fi.error(`Firestore (${bo}): ${r}`,...t)}}function To(r,...e){if(fi.logLevel<=Pe.WARN){const t=e.map(_f);fi.warn(`Firestore (${bo}): ${r}`,...t)}}function _f(r){if(typeof r=="string")return r;try{/**
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
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
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
 */function ve(r,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Z_(r,i,t)}function Z_(r,e,t){let i=`FIRESTORE (${bo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Nr(i),new Error(i)}function Ue(r,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,r||Z_(e,o,i)}function Se(r,e){return r}/**
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
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends Vr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ts{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class e0{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class DS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ft.UNAUTHENTICATED)))}shutdown(){}}class VS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class OS{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0,42304);let i=this.i;const o=g=>this.i!==i?(i=this.i,t(g)):Promise.resolve();let u=new Ts;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Ts,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=u;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},m=g=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>m(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Ts)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ue(typeof i.accessToken=="string",31837,{l:i}),new e0(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string",2055,{h:e}),new Ft(e)}}class LS{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class MS{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new LS(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ft.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Xg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jS{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,vn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ue(this.o===void 0,3512);const i=u=>{u.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,ie("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>i(u)))};const o=u=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Xg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ue(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Xg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function FS(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<r;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class vf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=FS(40);for(let u=0;u<o.length;++u)i.length<20&&o[u]<t&&(i+=e.charAt(o[u]%62))}return i}}function Ne(r,e){return r<e?-1:r>e?1:0}function Ud(r,e){const t=Math.min(r.length,e.length);for(let i=0;i<t;i++){const o=r.charAt(i),u=e.charAt(i);if(o!==u)return Ed(o)===Ed(u)?Ne(o,u):Ed(o)?1:-1}return Ne(r.length,e.length)}const US=55296,zS=57343;function Ed(r){const e=r.charCodeAt(0);return e>=US&&e<=zS}function Io(r,e,t){return r.length===e.length&&r.every(((i,o)=>t(i,e[o])))}/**
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
 */const Jg="__name__";class Zn{constructor(e,t,i){t===void 0?t=0:t>e.length&&ve(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&ve(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Zn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Zn?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const u=Zn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Ne(e.length,t.length)}static compareSegments(e,t){const i=Zn.isNumericId(e),o=Zn.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?Zn.extractNumericId(e).compare(Zn.extractNumericId(t)):Ud(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Es.fromString(e.substring(4,e.length-2))}}class We extends Zn{construct(e,t,i){return new We(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ne(q.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new We(t)}static emptyPath(){return new We([])}}const BS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pt extends Zn{construct(e,t,i){return new Pt(e,t,i)}static isValidIdentifier(e){return BS.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Jg}static keyField(){return new Pt([Jg])}static fromServerFormat(e){const t=[];let i="",o=0;const u=()=>{if(i.length===0)throw new ne(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ne(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ne(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(i+=m,o++):(u(),o++)}if(u(),h)throw new ne(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pt(t)}static emptyPath(){return new Pt([])}}/**
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
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(We.fromString(e))}static fromName(e){return new fe(We.fromString(e).popFirst(5))}static empty(){return new fe(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return We.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new We(e.slice()))}}/**
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
 */function t0(r,e,t){if(!t)throw new ne(q.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function $S(r,e,t,i){if(e===!0&&i===!0)throw new ne(q.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Zg(r){if(!fe.isDocumentKey(r))throw new ne(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function ey(r){if(fe.isDocumentKey(r))throw new ne(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function n0(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function vc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":ve(12329,{type:typeof r})}function br(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ne(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=vc(r);throw new ne(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function pt(r,e){const t={typeString:r};return e&&(t.value=e),t}function ul(r,e){if(!n0(r))throw new ne(q.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,u="value"in e[i]?{value:e[i].value}:void 0;if(!(i in r)){t=`JSON missing required field: '${i}'`;break}const h=r[i];if(o&&typeof h!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${i}' field to equal '${u.value}'`;break}}if(t)throw new ne(q.INVALID_ARGUMENT,t);return!0}/**
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
 */const ty=-62135596800,ny=1e6;class Ge{static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*ny);return new Ge(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ne(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ne(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ty)throw new ne(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ny}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ge._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ul(e,Ge._jsonSchema))return new Ge(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ty;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ge._jsonSchemaVersion="firestore/timestamp/1.0",Ge._jsonSchema={type:pt("string",Ge._jsonSchemaVersion),seconds:pt("number"),nanoseconds:pt("number")};/**
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
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new Ge(0,0))}static max(){return new Te(new Ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Qa=-1;function qS(r,e){const t=r.toTimestamp().seconds,i=r.toTimestamp().nanoseconds+1,o=Te.fromTimestamp(i===1e9?new Ge(t+1,0):new Ge(t,i));return new ks(o,fe.empty(),e)}function HS(r){return new ks(r.readTime,r.key,Qa)}class ks{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new ks(Te.min(),fe.empty(),Qa)}static max(){return new ks(Te.max(),fe.empty(),Qa)}}function WS(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=fe.comparator(r.documentKey,e.documentKey),t!==0?t:Ne(r.largestBatchId,e.largestBatchId))}/**
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
 */const GS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class KS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Do(r){if(r.code!==q.FAILED_PRECONDITION||r.message!==GS)throw r;ie("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ve(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H(((i,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(i,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):H.reject(t)}static resolve(e){return new H(((t,i)=>{t(e)}))}static reject(e){return new H(((t,i)=>{i(e)}))}static waitFor(e){return new H(((t,i)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(g=>i(g)))})),h=!0,u===o&&t()}))}static or(e){let t=H.resolve(!1);for(const i of e)t=t.next((o=>o?H.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,u)=>{i.push(t.call(this,o,u))})),this.waitFor(i)}static mapArray(e,t){return new H(((i,o)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const _=g;t(e[_]).next((T=>{h[_]=T,++m,m===u&&i(h)}),(T=>o(T)))}}))}static doWhile(e,t){return new H(((i,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):i()};u()}))}}function QS(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Vo(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class wc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}wc.ce=-1;/**
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
 */const wf=-1;function Ec(r){return r==null}function ic(r){return r===0&&1/r==-1/0}function YS(r){return typeof r=="number"&&Number.isInteger(r)&&!ic(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const r0="";function XS(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=ry(e)),e=JS(r.get(t),e);return ry(e)}function JS(r,e){let t=e;const i=r.length;for(let o=0;o<i;o++){const u=r.charAt(o);switch(u){case"\0":t+="";break;case r0:t+="";break;default:t+=u}}return t}function ry(r){return r+r0+""}/**
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
 */function sy(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function bs(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function s0(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class nt{constructor(e,t){this.comparator=e,this.root=t||Rt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Rt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Rt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vu(this.root,e,this.comparator,!0)}}class Vu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?i(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Rt{constructor(e,t,i,o,u){this.key=e,this.value=t,this.color=i??Rt.RED,this.left=o??Rt.EMPTY,this.right=u??Rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,u){return new Rt(e??this.key,t??this.value,i??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const u=i(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,i),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Rt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ve(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ve(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ve(27949);return e+(this.isRed()?0:1)}}Rt.EMPTY=null,Rt.RED=!0,Rt.BLACK=!1;Rt.EMPTY=new class{constructor(){this.size=0}get key(){throw ve(57766)}get value(){throw ve(16141)}get color(){throw ve(16727)}get left(){throw ve(29726)}get right(){throw ve(36894)}copy(e,t,i,o,u){return this}insert(e,t,i){return new Rt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class _t{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new iy(this.data.getIterator())}getIteratorFrom(e){return new iy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=i.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new _t(this.comparator);return t.data=e,t}}class iy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class cn{constructor(e){this.fields=e,e.sort(Pt.comparator)}static empty(){return new cn([])}unionWith(e){let t=new _t(Pt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new cn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Io(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class i0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new i0("Invalid base64 string: "+u):u}})(e);return new Nt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new Nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const ZS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xs(r){if(Ue(!!r,39018),typeof r=="string"){let e=0;const t=ZS.exec(r);if(Ue(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(r);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:lt(r.seconds),nanos:lt(r.nanos)}}function lt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function As(r){return typeof r=="string"?Nt.fromBase64String(r):Nt.fromUint8Array(r)}/**
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
 */const o0="server_timestamp",a0="__type__",l0="__previous_value__",u0="__local_write_time__";function Ef(r){return(r?.mapValue?.fields||{})[a0]?.stringValue===o0}function Tc(r){const e=r.mapValue.fields[l0];return Ef(e)?Tc(e):e}function Ya(r){const e=xs(r.mapValue.fields[u0].timestampValue);return new Ge(e.seconds,e.nanos)}/**
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
 */class ek{constructor(e,t,i,o,u,h,m,g,_,T){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=T}}const oc="(default)";class Xa{constructor(e,t){this.projectId=e,this.database=t||oc}static empty(){return new Xa("","")}get isDefaultDatabase(){return this.database===oc}isEqual(e){return e instanceof Xa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const c0="__type__",tk="__max__",Ou={mapValue:{}},h0="__vector__",ac="value";function Cs(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Ef(r)?4:rk(r)?9007199254740991:nk(r)?10:11:ve(28295,{value:r})}function or(r,e){if(r===e)return!0;const t=Cs(r);if(t!==Cs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Ya(r).isEqual(Ya(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=xs(o.timestampValue),m=xs(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,u){return As(o.bytesValue).isEqual(As(u.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,u){return lt(o.geoPointValue.latitude)===lt(u.geoPointValue.latitude)&&lt(o.geoPointValue.longitude)===lt(u.geoPointValue.longitude)})(r,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return lt(o.integerValue)===lt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=lt(o.doubleValue),m=lt(u.doubleValue);return h===m?ic(h)===ic(m):isNaN(h)&&isNaN(m)}return!1})(r,e);case 9:return Io(r.arrayValue.values||[],e.arrayValue.values||[],or);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(sy(h)!==sy(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!or(h[g],m[g])))return!1;return!0})(r,e);default:return ve(52216,{left:r})}}function Ja(r,e){return(r.values||[]).find((t=>or(t,e)))!==void 0}function So(r,e){if(r===e)return 0;const t=Cs(r),i=Cs(e);if(t!==i)return Ne(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ne(r.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=lt(u.integerValue||u.doubleValue),g=lt(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1})(r,e);case 3:return oy(r.timestampValue,e.timestampValue);case 4:return oy(Ya(r),Ya(e));case 5:return Ud(r.stringValue,e.stringValue);case 6:return(function(u,h){const m=As(u),g=As(h);return m.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),g=h.split("/");for(let _=0;_<m.length&&_<g.length;_++){const T=Ne(m[_],g[_]);if(T!==0)return T}return Ne(m.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=Ne(lt(u.latitude),lt(h.latitude));return m!==0?m:Ne(lt(u.longitude),lt(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return ay(r.arrayValue,e.arrayValue);case 10:return(function(u,h){const m=u.fields||{},g=h.fields||{},_=m[ac]?.arrayValue,T=g[ac]?.arrayValue,k=Ne(_?.values?.length||0,T?.values?.length||0);return k!==0?k:ay(_,T)})(r.mapValue,e.mapValue);case 11:return(function(u,h){if(u===Ou.mapValue&&h===Ou.mapValue)return 0;if(u===Ou.mapValue)return 1;if(h===Ou.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),_=h.fields||{},T=Object.keys(_);g.sort(),T.sort();for(let k=0;k<g.length&&k<T.length;++k){const C=Ud(g[k],T[k]);if(C!==0)return C;const F=So(m[g[k]],_[T[k]]);if(F!==0)return F}return Ne(g.length,T.length)})(r.mapValue,e.mapValue);default:throw ve(23264,{he:t})}}function oy(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ne(r,e);const t=xs(r),i=xs(e),o=Ne(t.seconds,i.seconds);return o!==0?o:Ne(t.nanos,i.nanos)}function ay(r,e){const t=r.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const u=So(t[o],i[o]);if(u)return u}return Ne(t.length,i.length)}function ko(r){return zd(r)}function zd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const i=xs(t);return`time(${i.seconds},${i.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return As(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return fe.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let i="[",o=!0;for(const u of t.values||[])o?o=!1:i+=",",i+=zd(u);return i+"]"})(r.arrayValue):"mapValue"in r?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of i)u?u=!1:o+=",",o+=`${h}:${zd(t.fields[h])}`;return o+"}"})(r.mapValue):ve(61005,{value:r})}function qu(r){switch(Cs(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Tc(r);return e?16+qu(e):16;case 5:return 2*r.stringValue.length;case 6:return As(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,u)=>o+qu(u)),0)})(r.arrayValue);case 10:case 11:return(function(i){let o=0;return bs(i.fields,((u,h)=>{o+=u.length+qu(h)})),o})(r.mapValue);default:throw ve(13486,{value:r})}}function ly(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Bd(r){return!!r&&"integerValue"in r}function Tf(r){return!!r&&"arrayValue"in r}function uy(r){return!!r&&"nullValue"in r}function cy(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Hu(r){return!!r&&"mapValue"in r}function nk(r){return(r?.mapValue?.fields||{})[c0]?.stringValue===h0}function Ua(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return bs(r.mapValue.fields,((t,i)=>e.mapValue.fields[t]=Ua(i))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ua(r.arrayValue.values[t]);return e}return{...r}}function rk(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===tk}/**
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
 */class Zt{constructor(e){this.value=e}static empty(){return new Zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Hu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ua(t)}setAll(e){let t=Pt.emptyPath(),i={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,i,o),i={},o=[],t=m.popLast()}h?i[m.lastSegment()]=Ua(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,i,o)}delete(e){const t=this.field(e.popLast());Hu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return or(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];Hu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){bs(t,((o,u)=>e[o]=u));for(const o of i)delete e[o]}clone(){return new Zt(Ua(this.value))}}function d0(r){const e=[];return bs(r.fields,((t,i)=>{const o=new Pt([t]);if(Hu(i)){const u=d0(i.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new cn(e)}/**
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
 */class Ut{constructor(e,t,i,o,u,h,m){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Ut(e,0,Te.min(),Te.min(),Te.min(),Zt.empty(),0)}static newFoundDocument(e,t,i,o){return new Ut(e,1,t,Te.min(),i,o,0)}static newNoDocument(e,t){return new Ut(e,2,t,Te.min(),Te.min(),Zt.empty(),0)}static newUnknownDocument(e,t){return new Ut(e,3,t,Te.min(),Te.min(),Zt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class lc{constructor(e,t){this.position=e,this.inclusive=t}}function hy(r,e,t){let i=0;for(let o=0;o<r.position.length;o++){const u=e[o],h=r.position[o];if(u.field.isKeyField()?i=fe.comparator(fe.fromName(h.referenceValue),t.key):i=So(h,t.data.field(u.field)),u.dir==="desc"&&(i*=-1),i!==0)break}return i}function dy(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!or(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Za{constructor(e,t="asc"){this.field=e,this.dir=t}}function sk(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class f0{}class ft extends f0{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new ok(e,t,i):t==="array-contains"?new uk(e,i):t==="in"?new ck(e,i):t==="not-in"?new hk(e,i):t==="array-contains-any"?new dk(e,i):new ft(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new ak(e,i):new lk(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(So(t,this.value)):t!==null&&Cs(this.value)===Cs(t)&&this.matchesComparison(So(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vn extends f0{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Vn(e,t)}matches(e){return p0(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function p0(r){return r.op==="and"}function m0(r){return ik(r)&&p0(r)}function ik(r){for(const e of r.filters)if(e instanceof Vn)return!1;return!0}function $d(r){if(r instanceof ft)return r.field.canonicalString()+r.op.toString()+ko(r.value);if(m0(r))return r.filters.map((e=>$d(e))).join(",");{const e=r.filters.map((t=>$d(t))).join(",");return`${r.op}(${e})`}}function g0(r,e){return r instanceof ft?(function(i,o){return o instanceof ft&&i.op===o.op&&i.field.isEqual(o.field)&&or(i.value,o.value)})(r,e):r instanceof Vn?(function(i,o){return o instanceof Vn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((u,h,m)=>u&&g0(h,o.filters[m])),!0):!1})(r,e):void ve(19439)}function y0(r){return r instanceof ft?(function(t){return`${t.field.canonicalString()} ${t.op} ${ko(t.value)}`})(r):r instanceof Vn?(function(t){return t.op.toString()+" {"+t.getFilters().map(y0).join(" ,")+"}"})(r):"Filter"}class ok extends ft{constructor(e,t,i){super(e,t,i),this.key=fe.fromName(i.referenceValue)}matches(e){const t=fe.comparator(e.key,this.key);return this.matchesComparison(t)}}class ak extends ft{constructor(e,t){super(e,"in",t),this.keys=_0("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class lk extends ft{constructor(e,t){super(e,"not-in",t),this.keys=_0("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function _0(r,e){return(e.arrayValue?.values||[]).map((t=>fe.fromName(t.referenceValue)))}class uk extends ft{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Tf(t)&&Ja(t.arrayValue,this.value)}}class ck extends ft{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ja(this.value.arrayValue,t)}}class hk extends ft{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ja(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ja(this.value.arrayValue,t)}}class dk extends ft{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Tf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>Ja(this.value.arrayValue,i)))}}/**
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
 */class fk{constructor(e,t=null,i=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Te=null}}function fy(r,e=null,t=[],i=[],o=null,u=null,h=null){return new fk(r,e,t,i,o,u,h)}function If(r){const e=Se(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>$d(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(u){return u.field.canonicalString()+u.dir})(i))).join(","),Ec(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>ko(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>ko(i))).join(",")),e.Te=t}return e.Te}function Sf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!sk(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!g0(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!dy(r.startAt,e.startAt)&&dy(r.endAt,e.endAt)}function qd(r){return fe.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Oo{constructor(e,t=null,i=[],o=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function pk(r,e,t,i,o,u,h,m){return new Oo(r,e,t,i,o,u,h,m)}function v0(r){return new Oo(r)}function py(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function w0(r){return r.collectionGroup!==null}function za(r){const e=Se(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new _t(Pt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new Za(u,i))})),t.has(Pt.keyField().canonicalString())||e.Ie.push(new Za(Pt.keyField(),i))}return e.Ie}function nr(r){const e=Se(r);return e.Ee||(e.Ee=mk(e,za(r))),e.Ee}function mk(r,e){if(r.limitType==="F")return fy(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Za(o.field,u)}));const t=r.endAt?new lc(r.endAt.position,r.endAt.inclusive):null,i=r.startAt?new lc(r.startAt.position,r.startAt.inclusive):null;return fy(r.path,r.collectionGroup,e,r.filters,r.limit,t,i)}}function Hd(r,e){const t=r.filters.concat([e]);return new Oo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Wd(r,e,t){return new Oo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Ic(r,e){return Sf(nr(r),nr(e))&&r.limitType===e.limitType}function E0(r){return`${If(nr(r))}|lt:${r.limitType}`}function lo(r){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>y0(o))).join(", ")}]`),Ec(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>ko(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>ko(o))).join(",")),`Target(${i})`})(nr(r))}; limitType=${r.limitType})`}function Sc(r,e){return e.isFoundDocument()&&(function(i,o){const u=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(u):fe.isDocumentKey(i.path)?i.path.isEqual(u):i.path.isImmediateParentOf(u)})(r,e)&&(function(i,o){for(const u of za(i))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(r,e)&&(function(i,o){for(const u of i.filters)if(!u.matches(o))return!1;return!0})(r,e)&&(function(i,o){return!(i.startAt&&!(function(h,m,g){const _=hy(h,m,g);return h.inclusive?_<=0:_<0})(i.startAt,za(i),o)||i.endAt&&!(function(h,m,g){const _=hy(h,m,g);return h.inclusive?_>=0:_>0})(i.endAt,za(i),o))})(r,e)}function gk(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function T0(r){return(e,t)=>{let i=!1;for(const o of za(r)){const u=yk(o,e,t);if(u!==0)return u;i=i||o.field.isKeyField()}return 0}}function yk(r,e,t){const i=r.field.isKeyField()?fe.comparator(e.key,t.key):(function(u,h,m){const g=h.data.field(u),_=m.data.field(u);return g!==null&&_!==null?So(g,_):ve(42886)})(r.field,e,t);switch(r.dir){case"asc":return i;case"desc":return-1*i;default:return ve(19790,{direction:r.dir})}}/**
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
 */class gi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,u]of i)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){bs(this.inner,((t,i)=>{for(const[o,u]of i)e(o,u)}))}isEmpty(){return s0(this.inner)}size(){return this.innerSize}}/**
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
 */const _k=new nt(fe.comparator);function Dr(){return _k}const I0=new nt(fe.comparator);function La(...r){let e=I0;for(const t of r)e=e.insert(t.key,t);return e}function S0(r){let e=I0;return r.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function li(){return Ba()}function k0(){return Ba()}function Ba(){return new gi((r=>r.toString()),((r,e)=>r.isEqual(e)))}const vk=new nt(fe.comparator),wk=new _t(fe.comparator);function be(...r){let e=wk;for(const t of r)e=e.add(t);return e}const Ek=new _t(Ne);function Tk(){return Ek}/**
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
 */function kf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ic(e)?"-0":e}}function x0(r){return{integerValue:""+r}}function Ik(r,e){return YS(e)?x0(e):kf(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class kc{constructor(){this._=void 0}}function Sk(r,e,t){return r instanceof el?(function(o,u){const h={fields:{[a0]:{stringValue:o0},[u0]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Ef(u)&&(u=Tc(u)),u&&(h.fields[l0]=u),{mapValue:h}})(t,e):r instanceof tl?C0(r,e):r instanceof nl?R0(r,e):(function(o,u){const h=A0(o,u),m=my(h)+my(o.Ae);return Bd(h)&&Bd(o.Ae)?x0(m):kf(o.serializer,m)})(r,e)}function kk(r,e,t){return r instanceof tl?C0(r,e):r instanceof nl?R0(r,e):t}function A0(r,e){return r instanceof uc?(function(i){return Bd(i)||(function(u){return!!u&&"doubleValue"in u})(i)})(e)?e:{integerValue:0}:null}class el extends kc{}class tl extends kc{constructor(e){super(),this.elements=e}}function C0(r,e){const t=P0(e);for(const i of r.elements)t.some((o=>or(o,i)))||t.push(i);return{arrayValue:{values:t}}}class nl extends kc{constructor(e){super(),this.elements=e}}function R0(r,e){let t=P0(e);for(const i of r.elements)t=t.filter((o=>!or(o,i)));return{arrayValue:{values:t}}}class uc extends kc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function my(r){return lt(r.integerValue||r.doubleValue)}function P0(r){return Tf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class xk{constructor(e,t){this.field=e,this.transform=t}}function Ak(r,e){return r.field.isEqual(e.field)&&(function(i,o){return i instanceof tl&&o instanceof tl||i instanceof nl&&o instanceof nl?Io(i.elements,o.elements,or):i instanceof uc&&o instanceof uc?or(i.Ae,o.Ae):i instanceof el&&o instanceof el})(r.transform,e.transform)}class Ck{constructor(e,t){this.version=e,this.transformResults=t}}class En{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new En}static exists(e){return new En(void 0,e)}static updateTime(e){return new En(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class xc{}function N0(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new xf(r.key,En.none()):new cl(r.key,r.data,En.none());{const t=r.data,i=Zt.empty();let o=new _t(Pt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?i.delete(u):i.set(u,h),o=o.add(u)}return new Ds(r.key,i,new cn(o.toArray()),En.none())}}function Rk(r,e,t){r instanceof cl?(function(o,u,h){const m=o.value.clone(),g=yy(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(r,e,t):r instanceof Ds?(function(o,u,h){if(!Wu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=yy(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(b0(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function $a(r,e,t,i){return r instanceof cl?(function(u,h,m,g){if(!Wu(u.precondition,h))return m;const _=u.value.clone(),T=_y(u.fieldTransforms,g,h);return _.setAll(T),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(r,e,t,i):r instanceof Ds?(function(u,h,m,g){if(!Wu(u.precondition,h))return m;const _=_y(u.fieldTransforms,g,h),T=h.data;return T.setAll(b0(u)),T.setAll(_),h.convertToFoundDocument(h.version,T).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((k=>k.field)))})(r,e,t,i):(function(u,h,m){return Wu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(r,e,t)}function Pk(r,e){let t=null;for(const i of r.fieldTransforms){const o=e.data.field(i.field),u=A0(i.transform,o||null);u!=null&&(t===null&&(t=Zt.empty()),t.set(i.field,u))}return t||null}function gy(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Io(i,o,((u,h)=>Ak(u,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class cl extends xc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ds extends xc{constructor(e,t,i,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function b0(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=r.data.field(t);e.set(t,i)}})),e}function yy(r,e,t){const i=new Map;Ue(r.length===t.length,32656,{Re:t.length,Ve:r.length});for(let o=0;o<t.length;o++){const u=r[o],h=u.transform,m=e.data.field(u.field);i.set(u.field,kk(h,m,t[o]))}return i}function _y(r,e,t){const i=new Map;for(const o of r){const u=o.transform,h=t.data.field(o.field);i.set(o.field,Sk(u,h,e))}return i}class xf extends xc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Nk extends xc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class bk{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&Rk(u,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=$a(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=$a(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=k0();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const g=N0(h,m);g!==null&&i.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Te.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),be())}isEqual(e){return this.batchId===e.batchId&&Io(this.mutations,e.mutations,((t,i)=>gy(t,i)))&&Io(this.baseMutations,e.baseMutations,((t,i)=>gy(t,i)))}}class Af{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Ue(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let o=(function(){return vk})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,i[h].version);return new Af(e,t,i,o)}}/**
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
 */class Dk{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Vk{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var dt,Ve;function Ok(r){switch(r){case q.OK:return ve(64938);case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0;default:return ve(15467,{code:r})}}function D0(r){if(r===void 0)return Nr("GRPC error has no .code"),q.UNKNOWN;switch(r){case dt.OK:return q.OK;case dt.CANCELLED:return q.CANCELLED;case dt.UNKNOWN:return q.UNKNOWN;case dt.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case dt.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case dt.INTERNAL:return q.INTERNAL;case dt.UNAVAILABLE:return q.UNAVAILABLE;case dt.UNAUTHENTICATED:return q.UNAUTHENTICATED;case dt.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case dt.NOT_FOUND:return q.NOT_FOUND;case dt.ALREADY_EXISTS:return q.ALREADY_EXISTS;case dt.PERMISSION_DENIED:return q.PERMISSION_DENIED;case dt.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case dt.ABORTED:return q.ABORTED;case dt.OUT_OF_RANGE:return q.OUT_OF_RANGE;case dt.UNIMPLEMENTED:return q.UNIMPLEMENTED;case dt.DATA_LOSS:return q.DATA_LOSS;default:return ve(39323,{code:r})}}(Ve=dt||(dt={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Lk(){return new TextEncoder}/**
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
 */const Mk=new Es([4294967295,4294967295],0);function vy(r){const e=Lk().encode(r),t=new G_;return t.update(e),new Uint8Array(t.digest())}function wy(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Es([t,i],0),new Es([o,u],0)]}class Cf{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ma(`Invalid padding: ${t}`);if(i<0)throw new Ma(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ma(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ma(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Es.fromNumber(this.ge)}ye(e,t,i){let o=e.add(t.multiply(Es.fromNumber(i)));return o.compare(Mk)===1&&(o=new Es([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=vy(e),[i,o]=wy(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(i,o,u);if(!this.we(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Cf(u,o,t);return i.forEach((m=>h.insert(m))),h}insert(e){if(this.ge===0)return;const t=vy(e),[i,o]=wy(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(i,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ma extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ac{constructor(e,t,i,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,hl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Ac(Te.min(),o,new nt(Ne),Dr(),be())}}class hl{constructor(e,t,i,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new hl(i,t,be(),be(),be())}}/**
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
 */class Gu{constructor(e,t,i,o){this.be=e,this.removedTargetIds=t,this.key=i,this.De=o}}class V0{constructor(e,t){this.targetId=e,this.Ce=t}}class O0{constructor(e,t,i=Nt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class Ey{constructor(){this.ve=0,this.Fe=Ty(),this.Me=Nt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=be(),t=be(),i=be();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:ve(38017,{changeType:u})}})),new hl(this.Me,this.xe,e,t,i)}qe(){this.Oe=!1,this.Fe=Ty()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ue(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class jk{constructor(e){this.Ge=e,this.ze=new Map,this.je=Dr(),this.Je=Lu(),this.He=Lu(),this.Ye=new nt(Ne)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.Ke(),i.Ne||i.qe(),i.Le(e.resumeToken);break;case 2:i.Ke(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.We(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:ve(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,i=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(qd(u))if(i===0){const h=new fe(u.path);this.et(t,h,Ut.newNoDocument(h,Te.min()))}else Ue(i===1,20013,{expectedCount:i});else{const h=this._t(t);if(h!==i){const m=this.ut(e),g=m?this.ct(m,e,h):1;if(g!==0){this.it(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=As(i).toUint8Array()}catch(g){if(g instanceof i0)return To("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new Cf(h,o,u)}catch(g){return To(g instanceof Ma?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.ge===0?null:m}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let o=0;return i.forEach((u=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((u,h)=>{const m=this.ot(h);if(m){if(u.current&&qd(m.target)){const g=new fe(m.target.path);this.It(g).has(h)||this.Et(h,g)||this.et(h,g,Ut.newNoDocument(g,e))}u.Be&&(t.set(h,u.ke()),u.qe())}}));let i=be();this.He.forEach(((u,h)=>{let m=!0;h.forEachWhile((g=>{const _=this.ot(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(i=i.add(u))})),this.je.forEach(((u,h)=>h.setReadTime(e)));const o=new Ac(e,t,this.Ye,this.je,i);return this.je=Dr(),this.Je=Lu(),this.He=Lu(),this.Ye=new nt(Ne),o}Xe(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,i),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Ey,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new _t(Ne),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new _t(Ne),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ie("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ey),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Lu(){return new nt(fe.comparator)}function Ty(){return new nt(fe.comparator)}const Fk={asc:"ASCENDING",desc:"DESCENDING"},Uk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zk={and:"AND",or:"OR"};class Bk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Gd(r,e){return r.useProto3Json||Ec(e)?e:{value:e}}function cc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function L0(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function $k(r,e){return cc(r,e.toTimestamp())}function rr(r){return Ue(!!r,49232),Te.fromTimestamp((function(t){const i=xs(t);return new Ge(i.seconds,i.nanos)})(r))}function Rf(r,e){return Kd(r,e).canonicalString()}function Kd(r,e){const t=(function(o){return new We(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function M0(r){const e=We.fromString(r);return Ue(B0(e),10190,{key:e.toString()}),e}function Qd(r,e){return Rf(r.databaseId,e.path)}function Td(r,e){const t=M0(e);if(t.get(1)!==r.databaseId.projectId)throw new ne(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ne(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new fe(F0(t))}function j0(r,e){return Rf(r.databaseId,e)}function qk(r){const e=M0(r);return e.length===4?We.emptyPath():F0(e)}function Yd(r){return new We(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function F0(r){return Ue(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Iy(r,e,t){return{name:Qd(r,e),fields:t.value.mapValue.fields}}function Hk(r,e){let t;if("targetChange"in e){e.targetChange;const i=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:ve(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(_,T){return _.useProto3Json?(Ue(T===void 0||typeof T=="string",58123),Nt.fromBase64String(T||"")):(Ue(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),Nt.fromUint8Array(T||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(_){const T=_.code===void 0?q.UNKNOWN:D0(_.code);return new ne(T,_.message||"")})(h);t=new O0(i,o,u,m||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Td(r,i.document.name),u=rr(i.document.updateTime),h=i.document.createTime?rr(i.document.createTime):Te.min(),m=new Zt({mapValue:{fields:i.document.fields}}),g=Ut.newFoundDocument(o,u,h,m),_=i.targetIds||[],T=i.removedTargetIds||[];t=new Gu(_,T,g.key,g)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Td(r,i.document),u=i.readTime?rr(i.readTime):Te.min(),h=Ut.newNoDocument(o,u),m=i.removedTargetIds||[];t=new Gu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Td(r,i.document),u=i.removedTargetIds||[];t=new Gu([],u,o,null)}else{if(!("filter"in e))return ve(11601,{Rt:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:u}=i,h=new Vk(o,u),m=i.targetId;t=new V0(m,h)}}return t}function Wk(r,e){let t;if(e instanceof cl)t={update:Iy(r,e.key,e.value)};else if(e instanceof xf)t={delete:Qd(r,e.key)};else if(e instanceof Ds)t={update:Iy(r,e.key,e.data),updateMask:tx(e.fieldMask)};else{if(!(e instanceof Nk))return ve(16599,{Vt:e.type});t={verify:Qd(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(u,h){const m=h.transform;if(m instanceof el)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof tl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof nl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof uc)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw ve(20930,{transform:h.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:$k(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ve(27497)})(r,e.precondition)),t}function Gk(r,e){return r&&r.length>0?(Ue(e!==void 0,14353),r.map((t=>(function(o,u){let h=o.updateTime?rr(o.updateTime):rr(u);return h.isEqual(Te.min())&&(h=rr(u)),new Ck(h,o.transformResults||[])})(t,e)))):[]}function Kk(r,e){return{documents:[j0(r,e.path)]}}function Qk(r,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=j0(r,o);const u=(function(_){if(_.length!==0)return z0(Vn.create(_,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(_){if(_.length!==0)return _.map((T=>(function(C){return{field:uo(C.field),direction:Jk(C.dir)}})(T)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Gd(r,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:t,parent:o}}function Yk(r){let e=qk(r.parent);const t=r.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Ue(i===1,65062);const T=t.from[0];T.allDescendants?o=T.collectionId:e=e.child(T.collectionId)}let u=[];t.where&&(u=(function(k){const C=U0(k);return C instanceof Vn&&m0(C)?C.getFilters():[C]})(t.where));let h=[];t.orderBy&&(h=(function(k){return k.map((C=>(function(G){return new Za(co(G.field),(function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(G.direction))})(C)))})(t.orderBy));let m=null;t.limit&&(m=(function(k){let C;return C=typeof k=="object"?k.value:k,Ec(C)?null:C})(t.limit));let g=null;t.startAt&&(g=(function(k){const C=!!k.before,F=k.values||[];return new lc(F,C)})(t.startAt));let _=null;return t.endAt&&(_=(function(k){const C=!k.before,F=k.values||[];return new lc(F,C)})(t.endAt)),pk(e,o,h,u,m,"F",g,_)}function Xk(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function U0(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=co(t.unaryFilter.field);return ft.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=co(t.unaryFilter.field);return ft.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=co(t.unaryFilter.field);return ft.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=co(t.unaryFilter.field);return ft.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ve(61313);default:return ve(60726)}})(r):r.fieldFilter!==void 0?(function(t){return ft.create(co(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ve(58110);default:return ve(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return Vn.create(t.compositeFilter.filters.map((i=>U0(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ve(1026)}})(t.compositeFilter.op))})(r):ve(30097,{filter:r})}function Jk(r){return Fk[r]}function Zk(r){return Uk[r]}function ex(r){return zk[r]}function uo(r){return{fieldPath:r.canonicalString()}}function co(r){return Pt.fromServerFormat(r.fieldPath)}function z0(r){return r instanceof ft?(function(t){if(t.op==="=="){if(cy(t.value))return{unaryFilter:{field:uo(t.field),op:"IS_NAN"}};if(uy(t.value))return{unaryFilter:{field:uo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(cy(t.value))return{unaryFilter:{field:uo(t.field),op:"IS_NOT_NAN"}};if(uy(t.value))return{unaryFilter:{field:uo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:uo(t.field),op:Zk(t.op),value:t.value}}})(r):r instanceof Vn?(function(t){const i=t.getFilters().map((o=>z0(o)));return i.length===1?i[0]:{compositeFilter:{op:ex(t.op),filters:i}}})(r):ve(54877,{filter:r})}function tx(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function B0(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class ys{constructor(e,t,i,o,u=Te.min(),h=Te.min(),m=Nt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new ys(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ys(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ys(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ys(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class nx{constructor(e){this.yt=e}}function rx(r){const e=Yk({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Wd(e,e.limit,"L"):e}/**
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
 */class sx{constructor(){this.Cn=new ix}addToCollectionParentIndex(e,t){return this.Cn.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(ks.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(ks.min())}updateCollectionGroup(e,t,i){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class ix{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new _t(We.comparator),u=!o.has(i);return this.index[t]=o.add(i),u}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new _t(We.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Sy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},$0=41943040;class Jt{static withCacheSize(e){return new Jt(e,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */Jt.DEFAULT_COLLECTION_PERCENTILE=10,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Jt.DEFAULT=new Jt($0,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Jt.DISABLED=new Jt(-1,0,0);/**
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
 */class xo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new xo(0)}static cr(){return new xo(-1)}}/**
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
 */const ky="LruGarbageCollector",ox=1048576;function xy([r,e],[t,i]){const o=Ne(r,t);return o===0?Ne(e,i):o}class ax{constructor(e){this.Ir=e,this.buffer=new _t(xy),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();xy(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class lx{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ie(ky,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Vo(t)?ie(ky,"Ignoring IndexedDB error during garbage collection: ",t):await Do(t)}await this.Vr(3e5)}))}}class ux{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return H.resolve(wc.ce);const i=new ax(t);return this.mr.forEachTarget(e,(o=>i.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>i.Ar(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.mr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(Sy)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Sy):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let i,o,u,h,m,g,_;const T=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((k=>(k>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${k}`),o=this.params.maximumSequenceNumbersToCollect):o=k,h=Date.now(),this.nthSequenceNumber(e,o)))).next((k=>(i=k,m=Date.now(),this.removeTargets(e,i,t)))).next((k=>(u=k,g=Date.now(),this.removeOrphanedDocuments(e,i)))).next((k=>(_=Date.now(),ao()<=Pe.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-T}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${k} documents in `+(_-g)+`ms
Total Duration: ${_-T}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:k}))))}}function cx(r,e){return new ux(r,e)}/**
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
 */class hx{constructor(){this.changes=new gi((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?H.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class dx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class fx{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&$a(i.mutation,o,cn.empty(),Ge.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,be()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=be()){const o=li();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((u=>{let h=La();return u.forEach(((m,g)=>{h=h.insert(m,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const i=li();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,be())))}populateOverlays(e,t,i){const o=[];return i.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,i,o){let u=Dr();const h=Ba(),m=(function(){return Ba()})();return t.forEach(((g,_)=>{const T=i.get(_.key);o.has(_.key)&&(T===void 0||T.mutation instanceof Ds)?u=u.insert(_.key,_):T!==void 0?(h.set(_.key,T.mutation.getFieldMask()),$a(T.mutation,_,T.mutation.getFieldMask(),Ge.now())):h.set(_.key,cn.empty())})),this.recalculateAndSaveOverlays(e,u).next((g=>(g.forEach(((_,T)=>h.set(_,T))),t.forEach(((_,T)=>m.set(_,new dx(T,h.get(_)??null)))),m)))}recalculateAndSaveOverlays(e,t){const i=Ba();let o=new nt(((h,m)=>h-m)),u=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let T=i.get(g)||cn.empty();T=m.applyToLocalView(_,T),i.set(g,T);const k=(o.get(m.batchId)||be()).add(g);o=o.insert(m.batchId,k)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),_=g.key,T=g.value,k=k0();T.forEach((C=>{if(!u.has(C)){const F=N0(t.get(C),i.get(C));F!==null&&k.set(C,F),u=u.add(C)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,k))}return H.waitFor(h)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(h){return fe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):w0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-u.size):H.resolve(li());let m=Qa,g=u;return h.next((_=>H.forEach(_,((T,k)=>(m<k.largestBatchId&&(m=k.largestBatchId),u.get(T)?H.resolve():this.remoteDocumentCache.getEntry(e,T).next((C=>{g=g.insert(T,C)}))))).next((()=>this.populateOverlays(e,_,u))).next((()=>this.computeViews(e,g,_,be()))).next((T=>({batchId:m,changes:S0(T)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new fe(t)).next((i=>{let o=La();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const u=t.collectionGroup;let h=La();return this.indexManager.getCollectionParents(e,u).next((m=>H.forEach(m,(g=>{const _=(function(k,C){return new Oo(C,null,k.explicitOrderBy.slice(),k.filters.slice(),k.limit,k.limitType,k.startAt,k.endAt)})(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,i,o).next((T=>{T.forEach(((k,C)=>{h=h.insert(k,C)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,u,o)))).next((h=>{u.forEach(((g,_)=>{const T=_.getKey();h.get(T)===null&&(h=h.insert(T,Ut.newInvalidDocument(T)))}));let m=La();return h.forEach(((g,_)=>{const T=u.get(g);T!==void 0&&$a(T.mutation,_,cn.empty(),Ge.now()),Sc(t,_)&&(m=m.insert(g,_))})),m}))}}/**
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
 */class px{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return H.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:rr(o.createTime)}})(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(o){return{name:o.name,query:rx(o.bundledQuery),readTime:rr(o.readTime)}})(t)),H.resolve()}}/**
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
 */class mx{constructor(){this.overlays=new nt(fe.comparator),this.qr=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const i=li();return H.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&i.set(o,u)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,u)=>{this.St(e,t,u)})),H.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.qr.get(i);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(i)),H.resolve()}getOverlaysForCollection(e,t,i){const o=li(),u=t.length+1,h=new fe(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>i&&o.set(g.getKey(),g)}return H.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let u=new nt(((_,T)=>_-T));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>i){let T=u.get(_.largestBatchId);T===null&&(T=li(),u=u.insert(_.largestBatchId,T)),T.set(_.getKey(),_)}}const m=li(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,T)=>m.set(_,T))),!(m.size()>=o)););return H.resolve(m)}St(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(i.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new Dk(t,i));let u=this.qr.get(t);u===void 0&&(u=be(),this.qr.set(t,u)),this.qr.set(t,u.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class gx{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
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
 */class Pf{constructor(){this.Qr=new _t(St.$r),this.Ur=new _t(St.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const i=new St(e,t);this.Qr=this.Qr.add(i),this.Ur=this.Ur.add(i)}Wr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Gr(new St(e,t))}zr(e,t){e.forEach((i=>this.removeReference(i,t)))}jr(e){const t=new fe(new We([])),i=new St(t,e),o=new St(t,e+1),u=[];return this.Ur.forEachInRange([i,o],(h=>{this.Gr(h),u.push(h.key)})),u}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new fe(new We([])),i=new St(t,e),o=new St(t,e+1);let u=be();return this.Ur.forEachInRange([i,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new St(e,0),i=this.Qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class St{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return fe.comparator(e.key,t.key)||Ne(e.Yr,t.Yr)}static Kr(e,t){return Ne(e.Yr,t.Yr)||fe.comparator(e.key,t.key)}}/**
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
 */class yx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new _t(St.$r)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new bk(u,t,i,o);this.mutationQueue.push(h);for(const m of o)this.Zr=this.Zr.add(new St(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return H.resolve(h)}lookupMutationBatch(e,t){return H.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.ei(i),u=o<0?0:o;return H.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?wf:this.tr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new St(t,0),o=new St(t,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([i,o],(h=>{const m=this.Xr(h.Yr);u.push(m)})),H.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new _t(Ne);return t.forEach((o=>{const u=new St(o,0),h=new St(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,h],(m=>{i=i.add(m.Yr)}))})),H.resolve(this.ti(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let u=i;fe.isDocumentKey(u)||(u=u.child(""));const h=new St(new fe(u),0);let m=new _t(Ne);return this.Zr.forEachWhile((g=>{const _=g.key.path;return!!i.isPrefixOf(_)&&(_.length===o&&(m=m.add(g.Yr)),!0)}),h),H.resolve(this.ti(m))}ti(e){const t=[];return e.forEach((i=>{const o=this.Xr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Ue(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Zr;return H.forEach(t.mutations,(o=>{const u=new St(o.key,t.batchId);return i=i.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=i}))}ir(e){}containsKey(e,t){const i=new St(t,0),o=this.Zr.firstAfterOrEqual(i);return H.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class _x{constructor(e){this.ri=e,this.docs=(function(){return new nt(fe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),u=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return H.resolve(i?i.document.mutableCopy():Ut.newInvalidDocument(t))}getEntries(e,t){let i=Dr();return t.forEach((o=>{const u=this.docs.get(o);i=i.insert(o,u?u.document.mutableCopy():Ut.newInvalidDocument(o))})),H.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let u=Dr();const h=t.path,m=new fe(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:_,value:{document:T}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||WS(HS(T),i)<=0||(o.has(T.key)||Sc(t,T))&&(u=u.insert(T.key,T.mutableCopy()))}return H.resolve(u)}getAllFromCollectionGroup(e,t,i,o){ve(9500)}ii(e,t){return H.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new vx(this)}getSize(e){return H.resolve(this.size)}}class vx extends hx{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(i)})),H.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class wx{constructor(e){this.persistence=e,this.si=new gi((t=>If(t)),Sf),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.oi=0,this._i=new Pf,this.targetCount=0,this.ai=xo.ur()}forEachTarget(e,t){return this.si.forEach(((i,o)=>t(o))),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.oi&&(this.oi=t),H.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new xo(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.Pr(t),H.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,i){let o=0;const u=[];return this.si.forEach(((h,m)=>{m.sequenceNumber<=t&&i.get(m.targetId)===null&&(this.si.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),H.waitFor(u).next((()=>o))}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const i=this.si.get(t)||null;return H.resolve(i)}addMatchingKeys(e,t,i){return this._i.Wr(t,i),H.resolve()}removeMatchingKeys(e,t,i){this._i.zr(t,i);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),H.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const i=this._i.Hr(t);return H.resolve(i)}containsKey(e,t){return H.resolve(this._i.containsKey(t))}}/**
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
 */class q0{constructor(e,t){this.ui={},this.overlays={},this.ci=new wc(0),this.li=!1,this.li=!0,this.hi=new gx,this.referenceDelegate=e(this),this.Pi=new wx(this),this.indexManager=new sx,this.remoteDocumentCache=(function(o){return new _x(o)})((i=>this.referenceDelegate.Ti(i))),this.serializer=new nx(t),this.Ii=new px(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new mx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ui[e.toKey()];return i||(i=new yx(t,this.referenceDelegate),this.ui[e.toKey()]=i),i}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,i){ie("MemoryPersistence","Starting transaction:",e);const o=new Ex(this.ci.next());return this.referenceDelegate.Ei(),i(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(e,t){return H.or(Object.values(this.ui).map((i=>()=>i.containsKey(e,t))))}}class Ex extends KS{constructor(e){super(),this.currentSequenceNumber=e}}class Nf{constructor(e){this.persistence=e,this.Ri=new Pf,this.Vi=null}static mi(e){return new Nf(e)}get fi(){if(this.Vi)return this.Vi;throw ve(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.fi.delete(i.toString()),H.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.fi.add(i.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),H.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((o=>this.fi.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>i.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.fi,(i=>{const o=fe.fromPath(i);return this.gi(e,o).next((u=>{u||t.removeEntry(o,Te.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((i=>{i?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return H.or([()=>H.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class hc{constructor(e,t){this.persistence=e,this.pi=new gi((i=>XS(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=cx(this,t)}static mi(e,t){return new hc(e,t)}Ei(){}di(e){return H.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}wr(e){let t=0;return this.pr(e,(i=>{t++})).next((()=>t))}pr(e,t){return H.forEach(this.pi,((i,o)=>this.br(e,i,o).next((u=>u?H.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,(h=>this.br(e,h,t).next((m=>{m||(i++,u.removeEntry(h,Te.min()))})))).next((()=>u.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),H.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.pi.set(i,e.currentSequenceNumber),H.resolve()}removeReference(e,t,i){return this.pi.set(i,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),H.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=qu(e.data.value)),t}br(e,t,i){return H.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return H.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class bf{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Es=i,this.ds=o}static As(e,t){let i=be(),o=be();for(const u of t.docChanges)switch(u.type){case 0:i=i.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new bf(e,t.fromCache,i,o)}}/**
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
 */class Tx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Ix{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return YE()?8:QS(Bt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,o){const u={result:null};return this.ys(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ws(e,t,o,i).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new Tx;return this.Ss(e,t,h).next((m=>{if(u.result=m,this.Vs)return this.bs(e,t,h,m.size)}))})).next((()=>u.result))}bs(e,t,i,o){return i.documentReadCount<this.fs?(ao()<=Pe.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",lo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),H.resolve()):(ao()<=Pe.DEBUG&&ie("QueryEngine","Query:",lo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.gs*o?(ao()<=Pe.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",lo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nr(t))):H.resolve())}ys(e,t){if(py(t))return H.resolve(null);let i=nr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Wd(t,null,"F"),i=nr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((u=>{const h=be(...u);return this.ps.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,i).next((g=>{const _=this.Ds(t,m);return this.Cs(t,_,h,g.readTime)?this.ys(e,Wd(t,null,"F")):this.vs(e,_,t,g)}))))})))))}ws(e,t,i,o){return py(t)||o.isEqual(Te.min())?H.resolve(null):this.ps.getDocuments(e,i).next((u=>{const h=this.Ds(t,u);return this.Cs(t,h,i,o)?H.resolve(null):(ao()<=Pe.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),lo(t)),this.vs(e,h,t,qS(o,Qa)).next((m=>m)))}))}Ds(e,t){let i=new _t(T0(e));return t.forEach(((o,u)=>{Sc(e,u)&&(i=i.add(u))})),i}Cs(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,i){return ao()<=Pe.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",lo(t)),this.ps.getDocumentsMatchingQuery(e,t,ks.min(),i)}vs(e,t,i,o){return this.ps.getDocumentsMatchingQuery(e,i,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
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
 */const Df="LocalStore",Sx=3e8;class kx{constructor(e,t,i,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new nt(Ne),this.xs=new gi((u=>If(u)),Sf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(i)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fx(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function xx(r,e,t,i){return new kx(r,e,t,i)}async function H0(r,e){const t=Se(r);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((u=>(o=u,t.Bs(e),t.mutationQueue.getAllMutationBatches(i)))).next((u=>{const h=[],m=[];let g=be();for(const _ of o){h.push(_.batchId);for(const T of _.mutations)g=g.add(T.key)}for(const _ of u){m.push(_.batchId);for(const T of _.mutations)g=g.add(T.key)}return t.localDocuments.getDocuments(i,g).next((_=>({Ls:_,removedBatchIds:h,addedBatchIds:m})))}))}))}function Ax(r,e){const t=Se(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),u=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(m,g,_,T){const k=_.batch,C=k.keys();let F=H.resolve();return C.forEach((G=>{F=F.next((()=>T.getEntry(g,G))).next((Y=>{const $=_.docVersions.get(G);Ue($!==null,48541),Y.version.compareTo($)<0&&(k.applyToRemoteDocument(Y,_),Y.isValidDocument()&&(Y.setReadTime(_.commitVersion),T.addEntry(Y)))}))})),F.next((()=>m.mutationQueue.removeMutationBatch(g,k)))})(t,i,e,u).next((()=>u.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(m){let g=be();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(g=g.add(m.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function W0(r){const e=Se(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function Cx(r,e){const t=Se(r),i=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const m=[];e.targetChanges.forEach(((T,k)=>{const C=o.get(k);if(!C)return;m.push(t.Pi.removeMatchingKeys(u,T.removedDocuments,k).next((()=>t.Pi.addMatchingKeys(u,T.addedDocuments,k))));let F=C.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(k)!==null?F=F.withResumeToken(Nt.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):T.resumeToken.approximateByteSize()>0&&(F=F.withResumeToken(T.resumeToken,i)),o=o.insert(k,F),(function(Y,$,he){return Y.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=Sx?!0:he.addedDocuments.size+he.modifiedDocuments.size+he.removedDocuments.size>0})(C,F,T)&&m.push(t.Pi.updateTargetData(u,F))}));let g=Dr(),_=be();if(e.documentUpdates.forEach((T=>{e.resolvedLimboDocuments.has(T)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,T))})),m.push(Rx(u,h,e.documentUpdates).next((T=>{g=T.ks,_=T.qs}))),!i.isEqual(Te.min())){const T=t.Pi.getLastRemoteSnapshotVersion(u).next((k=>t.Pi.setTargetsMetadata(u,u.currentSequenceNumber,i)));m.push(T)}return H.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,g,_))).next((()=>g))})).then((u=>(t.Ms=o,u)))}function Rx(r,e,t){let i=be(),o=be();return t.forEach((u=>i=i.add(u))),e.getEntries(r,i).next((u=>{let h=Dr();return t.forEach(((m,g)=>{const _=u.get(m);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(Te.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):ie(Df,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",g.version)})),{ks:h,qs:o}}))}function Px(r,e){const t=Se(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=wf),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function Nx(r,e){const t=Se(r);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.Pi.getTargetData(i,e).next((u=>u?(o=u,H.resolve(o)):t.Pi.allocateTargetId(i).next((h=>(o=new ys(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.Pi.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.Ms.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(i.targetId,i),t.xs.set(e,i.targetId)),i}))}async function Xd(r,e,t){const i=Se(r),o=i.Ms.get(e),u=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",u,(h=>i.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Vo(h))throw h;ie(Df,`Failed to update sequence numbers for target ${e}: ${h}`)}i.Ms=i.Ms.remove(e),i.xs.delete(o.target)}function Ay(r,e,t){const i=Se(r);let o=Te.min(),u=be();return i.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,T){const k=Se(g),C=k.xs.get(T);return C!==void 0?H.resolve(k.Ms.get(C)):k.Pi.getTargetData(_,T)})(i,h,nr(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,i.Pi.getMatchingKeysForTargetId(h,m.targetId).next((g=>{u=g}))})).next((()=>i.Fs.getDocumentsMatchingQuery(h,e,t?o:Te.min(),t?u:be()))).next((m=>(bx(i,gk(e),m),{documents:m,Qs:u})))))}function bx(r,e,t){let i=r.Os.get(e)||Te.min();t.forEach(((o,u)=>{u.readTime.compareTo(i)>0&&(i=u.readTime)})),r.Os.set(e,i)}class Cy{constructor(){this.activeTargetIds=Tk()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Dx{constructor(){this.Mo=new Cy,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,i){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Cy,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Vx{Oo(e){}shutdown(){}}/**
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
 */const Ry="ConnectivityMonitor";class Py{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ie(Ry,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ie(Ry,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Mu=null;function Jd(){return Mu===null?Mu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Mu++,"0x"+Mu.toString(16)}/**
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
 */const Id="RestConnection",Ox={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Lx{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${i}/databases/${o}`,this.Wo=this.databaseId.database===oc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Go(e,t,i,o,u){const h=Jd(),m=this.zo(e,t.toUriEncodedString());ie(Id,`Sending RPC '${e}' ${h}:`,m,i);const g={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(g,o,u);const{host:_}=new URL(m),T=Ro(_);return this.Jo(e,m,g,i,T).then((k=>(ie(Id,`Received RPC '${e}' ${h}: `,k),k)),(k=>{throw To(Id,`RPC '${e}' ${h} failed with error: `,k,"url: ",m,"request:",i),k}))}Ho(e,t,i,o,u,h){return this.Go(e,t,i,o,u)}jo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+bo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),i&&i.headers.forEach(((o,u)=>e[u]=o))}zo(e,t){const i=Ox[e];return`${this.Uo}/v1/${t}:${i}`}terminate(){}}/**
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
 */class Mx{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const jt="WebChannelConnection";class jx extends Lx{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,i,o,u){const h=Jd();return new Promise(((m,g)=>{const _=new K_;_.setWithCredentials(!0),_.listenOnce(Q_.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case $u.NO_ERROR:const k=_.getResponseJson();ie(jt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(k)),m(k);break;case $u.TIMEOUT:ie(jt,`RPC '${e}' ${h} timed out`),g(new ne(q.DEADLINE_EXCEEDED,"Request time out"));break;case $u.HTTP_ERROR:const C=_.getStatus();if(ie(jt,`RPC '${e}' ${h} failed with status:`,C,"response text:",_.getResponseText()),C>0){let F=_.getResponseJson();Array.isArray(F)&&(F=F[0]);const G=F?.error;if(G&&G.status&&G.message){const Y=(function(he){const ee=he.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(ee)>=0?ee:q.UNKNOWN})(G.status);g(new ne(Y,G.message))}else g(new ne(q.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new ne(q.UNAVAILABLE,"Connection failed."));break;default:ve(9055,{l_:e,streamId:h,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{ie(jt,`RPC '${e}' ${h} completed.`)}}));const T=JSON.stringify(o);ie(jt,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",T,i,15)}))}T_(e,t,i){const o=Jd(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=J_(),m=X_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.jo(g.initMessageHeaders,t,i),g.encodeInitMessageHeaders=!0;const T=u.join("");ie(jt,`Creating RPC '${e}' stream ${o}: ${T}`,g);const k=h.createWebChannel(T,g);this.I_(k);let C=!1,F=!1;const G=new Mx({Yo:$=>{F?ie(jt,`Not sending because RPC '${e}' stream ${o} is closed:`,$):(C||(ie(jt,`Opening RPC '${e}' stream ${o} transport.`),k.open(),C=!0),ie(jt,`RPC '${e}' stream ${o} sending:`,$),k.send($))},Zo:()=>k.close()}),Y=($,he,ee)=>{$.listen(he,(de=>{try{ee(de)}catch(we){setTimeout((()=>{throw we}),0)}}))};return Y(k,Oa.EventType.OPEN,(()=>{F||(ie(jt,`RPC '${e}' stream ${o} transport opened.`),G.o_())})),Y(k,Oa.EventType.CLOSE,(()=>{F||(F=!0,ie(jt,`RPC '${e}' stream ${o} transport closed`),G.a_(),this.E_(k))})),Y(k,Oa.EventType.ERROR,($=>{F||(F=!0,To(jt,`RPC '${e}' stream ${o} transport errored. Name:`,$.name,"Message:",$.message),G.a_(new ne(q.UNAVAILABLE,"The operation could not be completed")))})),Y(k,Oa.EventType.MESSAGE,($=>{if(!F){const he=$.data[0];Ue(!!he,16349);const ee=he,de=ee?.error||ee[0]?.error;if(de){ie(jt,`RPC '${e}' stream ${o} received error:`,de);const we=de.status;let B=(function(I){const A=dt[I];if(A!==void 0)return D0(A)})(we),se=de.message;B===void 0&&(B=q.INTERNAL,se="Unknown error status: "+we+" with message "+de.message),F=!0,G.a_(new ne(B,se)),k.close()}else ie(jt,`RPC '${e}' stream ${o} received:`,he),G.u_(he)}})),Y(m,Y_.STAT_EVENT,($=>{$.stat===Fd.PROXY?ie(jt,`RPC '${e}' stream ${o} detected buffering proxy`):$.stat===Fd.NOPROXY&&ie(jt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{G.__()}),0),G}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Sd(){return typeof document<"u"?document:null}/**
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
 */function Cc(r){return new Bk(r,!0)}/**
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
 */class G0{constructor(e,t,i=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=t,this.d_=i,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-i);o>0&&ie("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Ny="PersistentStream";class K0{constructor(e,t,i,o,u,h,m,g){this.Mi=e,this.S_=i,this.b_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new G0(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===q.RESOURCE_EXHAUSTED?(Nr(t.toString()),Nr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.D_===t&&this.G_(i,o)}),(i=>{e((()=>{const o=new ne(q.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(o)}))}))}G_(e,t){const i=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{i((()=>this.listener.Xo()))})),this.stream.t_((()=>{i((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{i((()=>this.z_(o)))})),this.stream.onMessage((o=>{i((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ie(Ny,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(ie(Ny,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Fx extends K0{constructor(e,t,i,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Hk(this.serializer,e),i=(function(u){if(!("targetChange"in u))return Te.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Te.min():h.readTime?rr(h.readTime):Te.min()})(e);return this.listener.H_(t,i)}Y_(e){const t={};t.database=Yd(this.serializer),t.addTarget=(function(u,h){let m;const g=h.target;if(m=qd(g)?{documents:Kk(u,g)}:{query:Qk(u,g).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=L0(u,h.resumeToken);const _=Gd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(Te.min())>0){m.readTime=cc(u,h.snapshotVersion.toTimestamp());const _=Gd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m})(this.serializer,e);const i=Xk(this.serializer,e);i&&(t.labels=i),this.q_(t)}Z_(e){const t={};t.database=Yd(this.serializer),t.removeTarget=e,this.q_(t)}}class Ux extends K0{constructor(e,t,i,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Gk(e.writeResults,e.commitTime),i=rr(e.commitTime);return this.listener.na(i,t)}ra(){const e={};e.database=Yd(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>Wk(this.serializer,i)))};this.q_(t)}}/**
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
 */class zx{}class Bx extends zx{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ne(q.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Go(e,Kd(t,i),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ne(q.UNKNOWN,u.toString())}))}Ho(e,t,i,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Ho(e,Kd(t,i),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ne(q.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class $x{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Nr(t),this.aa=!1):ie("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const pi="RemoteStore";class qx{constructor(e,t,i,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((h=>{i.enqueueAndForget((async()=>{yi(this)&&(ie(pi,"Restarting streams for network reachability change."),await(async function(g){const _=Se(g);_.Ea.add(4),await dl(_),_.Ra.set("Unknown"),_.Ea.delete(4),await Rc(_)})(this))}))})),this.Ra=new $x(i,o)}}async function Rc(r){if(yi(r))for(const e of r.da)await e(!0)}async function dl(r){for(const e of r.da)await e(!1)}function Q0(r,e){const t=Se(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Mf(t)?Lf(t):Lo(t).O_()&&Of(t,e))}function Vf(r,e){const t=Se(r),i=Lo(t);t.Ia.delete(e),i.O_()&&Y0(t,e),t.Ia.size===0&&(i.O_()?i.L_():yi(t)&&t.Ra.set("Unknown"))}function Of(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Lo(r).Y_(e)}function Y0(r,e){r.Va.Ue(e),Lo(r).Z_(e)}function Lf(r){r.Va=new jk({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Lo(r).start(),r.Ra.ua()}function Mf(r){return yi(r)&&!Lo(r).x_()&&r.Ia.size>0}function yi(r){return Se(r).Ea.size===0}function X0(r){r.Va=void 0}async function Hx(r){r.Ra.set("Online")}async function Wx(r){r.Ia.forEach(((e,t)=>{Of(r,e)}))}async function Gx(r,e){X0(r),Mf(r)?(r.Ra.ha(e),Lf(r)):r.Ra.set("Unknown")}async function Kx(r,e,t){if(r.Ra.set("Online"),e instanceof O0&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ia.delete(m),o.Va.removeTarget(m))})(r,e)}catch(i){ie(pi,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await dc(r,i)}else if(e instanceof Gu?r.Va.Ze(e):e instanceof V0?r.Va.st(e):r.Va.tt(e),!t.isEqual(Te.min()))try{const i=await W0(r.localStore);t.compareTo(i)>=0&&await(function(u,h){const m=u.Va.Tt(h);return m.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const T=u.Ia.get(_);T&&u.Ia.set(_,T.withResumeToken(g.resumeToken,h))}})),m.targetMismatches.forEach(((g,_)=>{const T=u.Ia.get(g);if(!T)return;u.Ia.set(g,T.withResumeToken(Nt.EMPTY_BYTE_STRING,T.snapshotVersion)),Y0(u,g);const k=new ys(T.target,g,_,T.sequenceNumber);Of(u,k)})),u.remoteSyncer.applyRemoteEvent(m)})(r,t)}catch(i){ie(pi,"Failed to raise snapshot:",i),await dc(r,i)}}async function dc(r,e,t){if(!Vo(e))throw e;r.Ea.add(1),await dl(r),r.Ra.set("Offline"),t||(t=()=>W0(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{ie(pi,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await Rc(r)}))}function J0(r,e){return e().catch((t=>dc(r,t,e)))}async function Pc(r){const e=Se(r),t=Rs(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:wf;for(;Qx(e);)try{const o=await Px(e.localStore,i);if(o===null){e.Ta.length===0&&t.L_();break}i=o.batchId,Yx(e,o)}catch(o){await dc(e,o)}Z0(e)&&ev(e)}function Qx(r){return yi(r)&&r.Ta.length<10}function Yx(r,e){r.Ta.push(e);const t=Rs(r);t.O_()&&t.X_&&t.ea(e.mutations)}function Z0(r){return yi(r)&&!Rs(r).x_()&&r.Ta.length>0}function ev(r){Rs(r).start()}async function Xx(r){Rs(r).ra()}async function Jx(r){const e=Rs(r);for(const t of r.Ta)e.ea(t.mutations)}async function Zx(r,e,t){const i=r.Ta.shift(),o=Af.from(i,e,t);await J0(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Pc(r)}async function eA(r,e){e&&Rs(r).X_&&await(async function(i,o){if((function(h){return Ok(h)&&h!==q.ABORTED})(o.code)){const u=i.Ta.shift();Rs(i).B_(),await J0(i,(()=>i.remoteSyncer.rejectFailedWrite(u.batchId,o))),await Pc(i)}})(r,e),Z0(r)&&ev(r)}async function by(r,e){const t=Se(r);t.asyncQueue.verifyOperationInProgress(),ie(pi,"RemoteStore received new credentials");const i=yi(t);t.Ea.add(3),await dl(t),i&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Rc(t)}async function tA(r,e){const t=Se(r);e?(t.Ea.delete(2),await Rc(t)):e||(t.Ea.add(2),await dl(t),t.Ra.set("Unknown"))}function Lo(r){return r.ma||(r.ma=(function(t,i,o){const u=Se(t);return u.sa(),new Fx(i,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Xo:Hx.bind(null,r),t_:Wx.bind(null,r),r_:Gx.bind(null,r),H_:Kx.bind(null,r)}),r.da.push((async e=>{e?(r.ma.B_(),Mf(r)?Lf(r):r.Ra.set("Unknown")):(await r.ma.stop(),X0(r))}))),r.ma}function Rs(r){return r.fa||(r.fa=(function(t,i,o){const u=Se(t);return u.sa(),new Ux(i,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:Xx.bind(null,r),r_:eA.bind(null,r),ta:Jx.bind(null,r),na:Zx.bind(null,r)}),r.da.push((async e=>{e?(r.fa.B_(),await Pc(r)):(await r.fa.stop(),r.Ta.length>0&&(ie(pi,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
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
 */class jf{constructor(e,t,i,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=u,this.deferred=new Ts,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,u){const h=Date.now()+i,m=new jf(e,t,h,o,u);return m.start(i),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ff(r,e){if(Nr("AsyncQueue",`${e}: ${r}`),Vo(r))return new ne(q.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class go{static emptySet(e){return new go(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||fe.comparator(t.key,i.key):(t,i)=>fe.comparator(t.key,i.key),this.keyedMap=La(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof go)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=i.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new go;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class Dy{constructor(){this.ga=new nt(fe.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ve(63341,{Rt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Ao{constructor(e,t,i,o,u,h,m,g,_){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,i,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new Ao(e,t,go.emptySet(t),h,i,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ic(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class nA{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class rA{constructor(){this.queries=Vy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const o=Se(t),u=o.queries;o.queries=Vy(),u.forEach(((h,m)=>{for(const g of m.Sa)g.onError(i)}))})(this,new ne(q.ABORTED,"Firestore shutting down"))}}function Vy(){return new gi((r=>E0(r)),Ic)}async function sA(r,e){const t=Se(r);let i=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(i=2):(u=new nA,i=e.Da()?0:1);try{switch(i){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=Ff(h,`Initialization of query '${lo(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&Uf(t)}async function iA(r,e){const t=Se(r),i=e.query;let o=3;const u=t.queries.get(i);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function oA(r,e){const t=Se(r);let i=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.Sa)m.Fa(o)&&(i=!0);h.wa=o}}i&&Uf(t)}function aA(r,e,t){const i=Se(r),o=i.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);i.queries.delete(e)}function Uf(r){r.Ca.forEach((e=>{e.next()}))}var Zd,Oy;(Oy=Zd||(Zd={})).Ma="default",Oy.Cache="cache";class lA{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Ao(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Ao.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Zd.Cache}}/**
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
 */class tv{constructor(e){this.key=e}}class nv{constructor(e){this.key=e}}class uA{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=be(),this.mutatedKeys=be(),this.eu=T0(e),this.tu=new go(this.eu)}get nu(){return this.Ya}ru(e,t){const i=t?t.iu:new Dy,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((T,k)=>{const C=o.get(T),F=Sc(this.query,k)?k:null,G=!!C&&this.mutatedKeys.has(C.key),Y=!!F&&(F.hasLocalMutations||this.mutatedKeys.has(F.key)&&F.hasCommittedMutations);let $=!1;C&&F?C.data.isEqual(F.data)?G!==Y&&(i.track({type:3,doc:F}),$=!0):this.su(C,F)||(i.track({type:2,doc:F}),$=!0,(g&&this.eu(F,g)>0||_&&this.eu(F,_)<0)&&(m=!0)):!C&&F?(i.track({type:0,doc:F}),$=!0):C&&!F&&(i.track({type:1,doc:C}),$=!0,(g||_)&&(m=!0)),$&&(F?(h=h.add(F),u=Y?u.add(T):u.delete(T)):(h=h.delete(T),u=u.delete(T)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const T=this.query.limitType==="F"?h.last():h.first();h=h.delete(T.key),u=u.delete(T.key),i.track({type:1,doc:T})}return{tu:h,iu:i,Cs:m,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((T,k)=>(function(F,G){const Y=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve(20277,{Rt:$})}};return Y(F)-Y(G)})(T.type,k.type)||this.eu(T.doc,k.doc))),this.ou(i),o=o??!1;const m=t&&!o?this._u():[],g=this.Xa.size===0&&this.current&&!o?1:0,_=g!==this.Za;return this.Za=g,h.length!==0||_?{snapshot:new Ao(this.query,e.tu,u,h,e.mutatedKeys,g===0,_,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Dy,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=be(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Xa=this.Xa.add(i.key))}));const t=[];return e.forEach((i=>{this.Xa.has(i)||t.push(new nv(i))})),this.Xa.forEach((i=>{e.has(i)||t.push(new tv(i))})),t}cu(e){this.Ya=e.Qs,this.Xa=be();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Ao.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const zf="SyncEngine";class cA{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class hA{constructor(e){this.key=e,this.hu=!1}}class dA{constructor(e,t,i,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new gi((m=>E0(m)),Ic),this.Iu=new Map,this.Eu=new Set,this.du=new nt(fe.comparator),this.Au=new Map,this.Ru=new Pf,this.Vu={},this.mu=new Map,this.fu=xo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function fA(r,e,t=!0){const i=lv(r);let o;const u=i.Tu.get(e);return u?(i.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await rv(i,e,t,!0),o}async function pA(r,e){const t=lv(r);await rv(t,e,!0,!1)}async function rv(r,e,t,i){const o=await Nx(r.localStore,nr(e)),u=o.targetId,h=r.sharedClientState.addLocalQueryTarget(u,t);let m;return i&&(m=await mA(r,e,u,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Q0(r.remoteStore,o),m}async function mA(r,e,t,i,o){r.pu=(k,C,F)=>(async function(Y,$,he,ee){let de=$.view.ru(he);de.Cs&&(de=await Ay(Y.localStore,$.query,!1).then((({documents:P})=>$.view.ru(P,de))));const we=ee&&ee.targetChanges.get($.targetId),B=ee&&ee.targetMismatches.get($.targetId)!=null,se=$.view.applyChanges(de,Y.isPrimaryClient,we,B);return My(Y,$.targetId,se.au),se.snapshot})(r,k,C,F);const u=await Ay(r.localStore,e,!0),h=new uA(e,u.Qs),m=h.ru(u.documents),g=hl.createSynthesizedTargetChangeForCurrentChange(t,i&&r.onlineState!=="Offline",o),_=h.applyChanges(m,r.isPrimaryClient,g);My(r,t,_.au);const T=new cA(e,t,h);return r.Tu.set(e,T),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),_.snapshot}async function gA(r,e,t){const i=Se(r),o=i.Tu.get(e),u=i.Iu.get(o.targetId);if(u.length>1)return i.Iu.set(o.targetId,u.filter((h=>!Ic(h,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Xd(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Vf(i.remoteStore,o.targetId),ef(i,o.targetId)})).catch(Do)):(ef(i,o.targetId),await Xd(i.localStore,o.targetId,!0))}async function yA(r,e){const t=Se(r),i=t.Tu.get(e),o=t.Iu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Vf(t.remoteStore,i.targetId))}async function _A(r,e,t){const i=kA(r);try{const o=await(function(h,m){const g=Se(h),_=Ge.now(),T=m.reduce(((F,G)=>F.add(G.key)),be());let k,C;return g.persistence.runTransaction("Locally write mutations","readwrite",(F=>{let G=Dr(),Y=be();return g.Ns.getEntries(F,T).next(($=>{G=$,G.forEach(((he,ee)=>{ee.isValidDocument()||(Y=Y.add(he))}))})).next((()=>g.localDocuments.getOverlayedDocuments(F,G))).next(($=>{k=$;const he=[];for(const ee of m){const de=Pk(ee,k.get(ee.key).overlayedDocument);de!=null&&he.push(new Ds(ee.key,de,d0(de.value.mapValue),En.exists(!0)))}return g.mutationQueue.addMutationBatch(F,_,he,m)})).next(($=>{C=$;const he=$.applyToLocalDocumentSet(k,Y);return g.documentOverlayCache.saveOverlays(F,$.batchId,he)}))})).then((()=>({batchId:C.batchId,changes:S0(k)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(h,m,g){let _=h.Vu[h.currentUser.toKey()];_||(_=new nt(Ne)),_=_.insert(m,g),h.Vu[h.currentUser.toKey()]=_})(i,o.batchId,t),await fl(i,o.changes),await Pc(i.remoteStore)}catch(o){const u=Ff(o,"Failed to persist write");t.reject(u)}}async function sv(r,e){const t=Se(r);try{const i=await Cx(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Au.get(u);h&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?Ue(h.hu,14607):o.removedDocuments.size>0&&(Ue(h.hu,42227),h.hu=!1))})),await fl(t,i,e)}catch(i){await Do(i)}}function Ly(r,e,t){const i=Se(r);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Tu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const g=Se(h);g.onlineState=m;let _=!1;g.queries.forEach(((T,k)=>{for(const C of k.Sa)C.va(m)&&(_=!0)})),_&&Uf(g)})(i.eventManager,e),o.length&&i.Pu.H_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function vA(r,e,t){const i=Se(r);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Au.get(e),u=o&&o.key;if(u){let h=new nt(fe.comparator);h=h.insert(u,Ut.newNoDocument(u,Te.min()));const m=be().add(u),g=new Ac(Te.min(),new Map,new nt(Ne),h,m);await sv(i,g),i.du=i.du.remove(u),i.Au.delete(e),Bf(i)}else await Xd(i.localStore,e,!1).then((()=>ef(i,e,t))).catch(Do)}async function wA(r,e){const t=Se(r),i=e.batch.batchId;try{const o=await Ax(t.localStore,e);ov(t,i,null),iv(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await fl(t,o)}catch(o){await Do(o)}}async function EA(r,e,t){const i=Se(r);try{const o=await(function(h,m){const g=Se(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let T;return g.mutationQueue.lookupMutationBatch(_,m).next((k=>(Ue(k!==null,37113),T=k.keys(),g.mutationQueue.removeMutationBatch(_,k)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,T,m))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,T))).next((()=>g.localDocuments.getDocuments(_,T)))}))})(i.localStore,e);ov(i,e,t),iv(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await fl(i,o)}catch(o){await Do(o)}}function iv(r,e){(r.mu.get(e)||[]).forEach((t=>{t.resolve()})),r.mu.delete(e)}function ov(r,e,t){const i=Se(r);let o=i.Vu[i.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),i.Vu[i.currentUser.toKey()]=o}}function ef(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const i of r.Iu.get(e))r.Tu.delete(i),t&&r.Pu.yu(i,t);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach((i=>{r.Ru.containsKey(i)||av(r,i)}))}function av(r,e){r.Eu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Vf(r.remoteStore,t),r.du=r.du.remove(e),r.Au.delete(t),Bf(r))}function My(r,e,t){for(const i of t)i instanceof tv?(r.Ru.addReference(i.key,e),TA(r,i)):i instanceof nv?(ie(zf,"Document no longer in limbo: "+i.key),r.Ru.removeReference(i.key,e),r.Ru.containsKey(i.key)||av(r,i.key)):ve(19791,{wu:i})}function TA(r,e){const t=e.key,i=t.path.canonicalString();r.du.get(t)||r.Eu.has(i)||(ie(zf,"New document in limbo: "+t),r.Eu.add(i),Bf(r))}function Bf(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new fe(We.fromString(e)),i=r.fu.next();r.Au.set(i,new hA(t)),r.du=r.du.insert(t,i),Q0(r.remoteStore,new ys(nr(v0(t.path)),i,"TargetPurposeLimboResolution",wc.ce))}}async function fl(r,e,t){const i=Se(r),o=[],u=[],h=[];i.Tu.isEmpty()||(i.Tu.forEach(((m,g)=>{h.push(i.pu(g,e,t).then((_=>{if((_||t)&&i.isPrimaryClient){const T=_?!_.fromCache:t?.targetChanges.get(g.targetId)?.current;i.sharedClientState.updateQueryState(g.targetId,T?"current":"not-current")}if(_){o.push(_);const T=bf.As(g.targetId,_);u.push(T)}})))})),await Promise.all(h),i.Pu.H_(o),await(async function(g,_){const T=Se(g);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",(k=>H.forEach(_,(C=>H.forEach(C.Es,(F=>T.persistence.referenceDelegate.addReference(k,C.targetId,F))).next((()=>H.forEach(C.ds,(F=>T.persistence.referenceDelegate.removeReference(k,C.targetId,F)))))))))}catch(k){if(!Vo(k))throw k;ie(Df,"Failed to update sequence numbers: "+k)}for(const k of _){const C=k.targetId;if(!k.fromCache){const F=T.Ms.get(C),G=F.snapshotVersion,Y=F.withLastLimboFreeSnapshotVersion(G);T.Ms=T.Ms.insert(C,Y)}}})(i.localStore,u))}async function IA(r,e){const t=Se(r);if(!t.currentUser.isEqual(e)){ie(zf,"User change. New user:",e.toKey());const i=await H0(t.localStore,e);t.currentUser=e,(function(u,h){u.mu.forEach((m=>{m.forEach((g=>{g.reject(new ne(q.CANCELLED,h))}))})),u.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await fl(t,i.Ls)}}function SA(r,e){const t=Se(r),i=t.Au.get(e);if(i&&i.hu)return be().add(i.key);{let o=be();const u=t.Iu.get(e);if(!u)return o;for(const h of u){const m=t.Tu.get(h);o=o.unionWith(m.view.nu)}return o}}function lv(r){const e=Se(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=sv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vA.bind(null,e),e.Pu.H_=oA.bind(null,e.eventManager),e.Pu.yu=aA.bind(null,e.eventManager),e}function kA(r){const e=Se(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=EA.bind(null,e),e}class fc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Cc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return xx(this.persistence,new Ix,e.initialUser,this.serializer)}Cu(e){return new q0(Nf.mi,this.serializer)}Du(e){return new Dx}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fc.provider={build:()=>new fc};class xA extends fc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ue(this.persistence.referenceDelegate instanceof hc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new lx(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Jt.withCacheSize(this.cacheSizeBytes):Jt.DEFAULT;return new q0((i=>hc.mi(i,t)),this.serializer)}}class tf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Ly(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=IA.bind(null,this.syncEngine),await tA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new rA})()}createDatastore(e){const t=Cc(e.databaseInfo.databaseId),i=(function(u){return new jx(u)})(e.databaseInfo);return(function(u,h,m,g){return new Bx(u,h,m,g)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,u,h,m){return new qx(i,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>Ly(this.syncEngine,t,0)),(function(){return Py.v()?new Py:new Vx})())}createSyncEngine(e,t){return(function(o,u,h,m,g,_,T){const k=new dA(o,u,h,m,g,_);return T&&(k.gu=!0),k})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const i=Se(t);ie(pi,"RemoteStore shutting down."),i.Ea.add(5),await dl(i),i.Aa.shutdown(),i.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}tf.provider={build:()=>new tf};/**
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
 *//**
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
 */class AA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Nr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Ps="FirestoreClient";class CA{constructor(e,t,i,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=vf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(i,(async h=>{ie(Ps,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(i,(h=>(ie(Ps,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ts;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Ff(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function kd(r,e){r.asyncQueue.verifyOperationInProgress(),ie(Ps,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let i=t.initialUser;r.setCredentialChangeListener((async o=>{i.isEqual(o)||(await H0(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function jy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await RA(r);ie(Ps,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((i=>by(e.remoteStore,i))),r.setAppCheckTokenChangeListener(((i,o)=>by(e.remoteStore,o))),r._onlineComponents=e}async function RA(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ie(Ps,"Using user provided OfflineComponentProvider");try{await kd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===q.FAILED_PRECONDITION||o.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;To("Error using user provided cache. Falling back to memory cache: "+t),await kd(r,new fc)}}else ie(Ps,"Using default OfflineComponentProvider"),await kd(r,new xA(void 0));return r._offlineComponents}async function uv(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ie(Ps,"Using user provided OnlineComponentProvider"),await jy(r,r._uninitializedComponentsProvider._online)):(ie(Ps,"Using default OnlineComponentProvider"),await jy(r,new tf))),r._onlineComponents}function PA(r){return uv(r).then((e=>e.syncEngine))}async function NA(r){const e=await uv(r),t=e.eventManager;return t.onListen=fA.bind(null,e.syncEngine),t.onUnlisten=gA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=pA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=yA.bind(null,e.syncEngine),t}function bA(r,e,t={}){const i=new Ts;return r.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,g,_){const T=new AA({next:C=>{T.Nu(),h.enqueueAndForget((()=>iA(u,k))),C.fromCache&&g.source==="server"?_.reject(new ne(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(C)},error:C=>_.reject(C)}),k=new lA(m,T,{includeMetadataChanges:!0,qa:!0});return sA(u,k)})(await NA(r),r.asyncQueue,e,t,i))),i.promise}/**
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
 */function cv(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const Fy=new Map;/**
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
 */const hv="firestore.googleapis.com",Uy=!0;class zy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ne(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=hv,this.ssl=Uy}else this.host=e.host,this.ssl=e.ssl??Uy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=$0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ox)throw new ne(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$S("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cv(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ne(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ne(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ne(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nc{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new DS;switch(i.type){case"firstParty":return new MS(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ne(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=Fy.get(t);i&&(ie("ComponentProvider","Removing Datastore"),Fy.delete(t),i.terminate())})(this),Promise.resolve()}}function DA(r,e,t,i={}){r=br(r,Nc);const o=Ro(e),u=r._getSettings(),h={...u,emulatorOptions:r._getEmulatorOptions()},m=`${e}:${t}`;o&&(i_(`https://${m}`),o_("Firestore",!0)),u.host!==hv&&u.host!==m&&To("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...u,host:m,ssl:o,emulatorOptions:i};if(!ui(g,h)&&(r._setSettings(g),i.mockUserToken)){let _,T;if(typeof i.mockUserToken=="string")_=i.mockUserToken,T=Ft.MOCK_USER;else{_=zE(i.mockUserToken,r._app?.options.projectId);const k=i.mockUserToken.sub||i.mockUserToken.user_id;if(!k)throw new ne(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Ft(k)}r._authCredentials=new VS(new e0(_,T))}}/**
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
 */class _i{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new _i(this.firestore,e,this._query)}}class mt{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Is(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mt(this.firestore,e,this._key)}toJSON(){return{type:mt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(ul(t,mt._jsonSchema))return new mt(e,i||null,new fe(We.fromString(t.referencePath)))}}mt._jsonSchemaVersion="firestore/documentReference/1.0",mt._jsonSchema={type:pt("string",mt._jsonSchemaVersion),referencePath:pt("string")};class Is extends _i{constructor(e,t,i){super(e,t,v0(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mt(this.firestore,null,new fe(e))}withConverter(e){return new Is(this.firestore,e,this._path)}}function Ss(r,e,...t){if(r=vt(r),t0("collection","path",e),r instanceof Nc){const i=We.fromString(e,...t);return ey(i),new Is(r,null,i)}{if(!(r instanceof mt||r instanceof Is))throw new ne(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(We.fromString(e,...t));return ey(i),new Is(r.firestore,null,i)}}function Cr(r,e,...t){if(r=vt(r),arguments.length===1&&(e=vf.newId()),t0("doc","path",e),r instanceof Nc){const i=We.fromString(e,...t);return Zg(i),new mt(r,null,new fe(i))}{if(!(r instanceof mt||r instanceof Is))throw new ne(q.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(We.fromString(e,...t));return Zg(i),new mt(r.firestore,r instanceof Is?r.converter:null,new fe(i))}}/**
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
 */const By="AsyncQueue";class $y{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new G0(this,"async_queue_retry"),this._c=()=>{const i=Sd();i&&ie(By,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=Sd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Sd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Ts;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Vo(e))throw e;ie(By,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Nr("INTERNAL UNHANDLED ERROR: ",qy(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=jf.createAndSchedule(this,e,t,i,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&ve(47125,{Pc:qy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function qy(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class Mo extends Nc{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new $y,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $y(e),this._firestoreClient=void 0,await e}}}function VA(r,e){const t=typeof r=="object"?r:c_(),i=typeof r=="string"?r:oc,o=uf(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const u=FE("firestore");u&&DA(o,...u)}return o}function dv(r){if(r._terminated)throw new ne(q.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||OA(r),r._firestoreClient}function OA(r){const e=r._freezeSettings(),t=(function(o,u,h,m){return new ek(o,u,h,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,cv(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,e);r._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new CA(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(o){const u=o?._online.build();return{_offline:o?._offline.build(u),_online:u}})(r._componentsProvider))}/**
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
 */class wn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wn(Nt.fromBase64String(e))}catch(t){throw new ne(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new wn(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:wn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ul(e,wn._jsonSchema))return wn.fromBase64String(e.bytes)}}wn._jsonSchemaVersion="firestore/bytes/1.0",wn._jsonSchema={type:pt("string",wn._jsonSchemaVersion),bytes:pt("string")};/**
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
 */class bc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ne(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Dc{constructor(e){this._methodName=e}}/**
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
 */class sr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ne(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ne(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:sr._jsonSchemaVersion}}static fromJSON(e){if(ul(e,sr._jsonSchema))return new sr(e.latitude,e.longitude)}}sr._jsonSchemaVersion="firestore/geoPoint/1.0",sr._jsonSchema={type:pt("string",sr._jsonSchemaVersion),latitude:pt("number"),longitude:pt("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class ir{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let u=0;u<i.length;++u)if(i[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ir._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ul(e,ir._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ir(e.vectorValues);throw new ne(q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ir._jsonSchemaVersion="firestore/vectorValue/1.0",ir._jsonSchema={type:pt("string",ir._jsonSchemaVersion),vectorValues:pt("object")};/**
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
 */const LA=/^__.*__$/;class MA{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Ds(e,this.data,this.fieldMask,t,this.fieldTransforms):new cl(e,this.data,t,this.fieldTransforms)}}class fv{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Ds(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function pv(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve(40011,{Ac:r})}}class $f{constructor(e,t,i,o,u,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new $f({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),i=this.Vc({path:t,fc:!1});return i.gc(e),i}yc(e){const t=this.path?.child(e),i=this.Vc({path:t,fc:!1});return i.Rc(),i}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return pc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(pv(this.Ac)&&LA.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class jA{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Cc(e)}Cc(e,t,i,o=!1){return new $f({Ac:e,methodName:t,Dc:i,path:Pt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vc(r){const e=r._freezeSettings(),t=Cc(r._databaseId);return new jA(r._databaseId,!!e.ignoreUndefinedProperties,t)}function mv(r,e,t,i,o,u={}){const h=r.Cc(u.merge||u.mergeFields?2:0,e,t,o);Hf("Data must be an object, but it was:",h,i);const m=gv(i,h);let g,_;if(u.merge)g=new cn(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const T=[];for(const k of u.mergeFields){const C=nf(e,k,t);if(!h.contains(C))throw new ne(q.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);_v(T,C)||T.push(C)}g=new cn(T),_=h.fieldTransforms.filter((k=>g.covers(k.field)))}else g=null,_=h.fieldTransforms;return new MA(new Zt(m),g,_)}class Oc extends Dc{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Oc}}class qf extends Dc{_toFieldTransform(e){return new xk(e.path,new el)}isEqual(e){return e instanceof qf}}function FA(r,e,t,i){const o=r.Cc(1,e,t);Hf("Data must be an object, but it was:",o,i);const u=[],h=Zt.empty();bs(i,((g,_)=>{const T=Wf(e,g,t);_=vt(_);const k=o.yc(T);if(_ instanceof Oc)u.push(T);else{const C=pl(_,k);C!=null&&(u.push(T),h.set(T,C))}}));const m=new cn(u);return new fv(h,m,o.fieldTransforms)}function UA(r,e,t,i,o,u){const h=r.Cc(1,e,t),m=[nf(e,i,t)],g=[o];if(u.length%2!=0)throw new ne(q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let C=0;C<u.length;C+=2)m.push(nf(e,u[C])),g.push(u[C+1]);const _=[],T=Zt.empty();for(let C=m.length-1;C>=0;--C)if(!_v(_,m[C])){const F=m[C];let G=g[C];G=vt(G);const Y=h.yc(F);if(G instanceof Oc)_.push(F);else{const $=pl(G,Y);$!=null&&(_.push(F),T.set(F,$))}}const k=new cn(_);return new fv(T,k,h.fieldTransforms)}function zA(r,e,t,i=!1){return pl(t,r.Cc(i?4:3,e))}function pl(r,e){if(yv(r=vt(r)))return Hf("Unsupported field value:",e,r),gv(r,e);if(r instanceof Dc)return(function(i,o){if(!pv(o.Ac))throw o.Sc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${i._methodName}() is not currently supported inside arrays`);const u=i._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(i,o){const u=[];let h=0;for(const m of i){let g=pl(m,o.wc(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}})(r,e)}return(function(i,o){if((i=vt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Ik(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const u=Ge.fromDate(i);return{timestampValue:cc(o.serializer,u)}}if(i instanceof Ge){const u=new Ge(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:cc(o.serializer,u)}}if(i instanceof sr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof wn)return{bytesValue:L0(o.serializer,i._byteString)};if(i instanceof mt){const u=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(u))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Rf(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof ir)return(function(h,m){return{mapValue:{fields:{[c0]:{stringValue:h0},[ac]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw m.Sc("VectorValues must only contain numeric values.");return kf(m.serializer,_)}))}}}}}})(i,o);throw o.Sc(`Unsupported field value: ${vc(i)}`)})(r,e)}function gv(r,e){const t={};return s0(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bs(r,((i,o)=>{const u=pl(o,e.mc(i));u!=null&&(t[i]=u)})),{mapValue:{fields:t}}}function yv(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Ge||r instanceof sr||r instanceof wn||r instanceof mt||r instanceof Dc||r instanceof ir)}function Hf(r,e,t){if(!yv(t)||!n0(t)){const i=vc(t);throw i==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+i)}}function nf(r,e,t){if((e=vt(e))instanceof bc)return e._internalPath;if(typeof e=="string")return Wf(r,e);throw pc("Field path arguments must be of type string or ",r,!1,void 0,t)}const BA=new RegExp("[~\\*/\\[\\]]");function Wf(r,e,t){if(e.search(BA)>=0)throw pc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new bc(...e.split("."))._internalPath}catch{throw pc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function pc(r,e,t,i,o){const u=i&&!i.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${i}`),h&&(g+=` in document ${o}`),g+=")"),new ne(q.INVALID_ARGUMENT,m+r+g)}function _v(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class vv{constructor(e,t,i,o,u){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $A(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Lc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class $A extends vv{data(){return super.data()}}function Lc(r,e){return typeof e=="string"?Wf(r,e):e instanceof bc?e._internalPath:e._delegate._internalPath}/**
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
 */function qA(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ne(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gf{}class wv extends Gf{}function qa(r,e,...t){let i=[];e instanceof Gf&&i.push(e),i=i.concat(t),(function(u){const h=u.filter((g=>g instanceof Kf)).length,m=u.filter((g=>g instanceof Mc)).length;if(h>1||h>0&&m>0)throw new ne(q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)r=o._apply(r);return r}class Mc extends wv{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Mc(e,t,i)}_apply(e){const t=this._parse(e);return Ev(e._query,t),new _i(e.firestore,e.converter,Hd(e._query,t))}_parse(e){const t=Vc(e.firestore);return(function(u,h,m,g,_,T,k){let C;if(_.isKeyField()){if(T==="array-contains"||T==="array-contains-any")throw new ne(q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${T}' queries on documentId().`);if(T==="in"||T==="not-in"){Wy(k,T);const G=[];for(const Y of k)G.push(Hy(g,u,Y));C={arrayValue:{values:G}}}else C=Hy(g,u,k)}else T!=="in"&&T!=="not-in"&&T!=="array-contains-any"||Wy(k,T),C=zA(m,h,k,T==="in"||T==="not-in");return ft.create(_,T,C)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Ha(r,e,t){const i=e,o=Lc("where",r);return Mc._create(o,i,t)}class Kf extends Gf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Kf(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:Vn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,u){let h=o;const m=u.getFlattenedFilters();for(const g of m)Ev(h,g),h=Hd(h,g)})(e._query,t),new _i(e.firestore,e.converter,Hd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Qf extends wv{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Qf(e,t)}_apply(e){const t=(function(o,u,h){if(o.startAt!==null)throw new ne(q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ne(q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Za(u,h)})(e._query,this._field,this._direction);return new _i(e.firestore,e.converter,(function(o,u){const h=o.explicitOrderBy.concat([u]);return new Oo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function HA(r,e="asc"){const t=e,i=Lc("orderBy",r);return Qf._create(i,t)}function Hy(r,e,t){if(typeof(t=vt(t))=="string"){if(t==="")throw new ne(q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!w0(e)&&t.indexOf("/")!==-1)throw new ne(q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(We.fromString(t));if(!fe.isDocumentKey(i))throw new ne(q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return ly(r,new fe(i))}if(t instanceof mt)return ly(r,t._key);throw new ne(q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vc(t)}.`)}function Wy(r,e){if(!Array.isArray(r)||r.length===0)throw new ne(q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ev(r,e){const t=(function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ne(q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne(q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class WA{convertValue(e,t="none"){switch(Cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(As(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ve(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return bs(e,((o,u)=>{i[o]=this.convertValue(u,t)})),i}convertVectorValue(e){const t=e.fields?.[ac].arrayValue?.values?.map((i=>lt(i.doubleValue)));return new ir(t)}convertGeoPoint(e){return new sr(lt(e.latitude),lt(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Tc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Ya(e));default:return null}}convertTimestamp(e){const t=xs(e);return new Ge(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=We.fromString(e);Ue(B0(i),9688,{name:e});const o=new Xa(i.get(1),i.get(3)),u=new fe(i.popFirst(5));return o.isEqual(t)||Nr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function Tv(r,e,t){let i;return i=r?r.toFirestore(e):e,i}class ju{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yo extends vv{constructor(e,t,i,o,u,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ku(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Lc("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=yo._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}yo._jsonSchemaVersion="firestore/documentSnapshot/1.0",yo._jsonSchema={type:pt("string",yo._jsonSchemaVersion),bundleSource:pt("string","DocumentSnapshot"),bundleName:pt("string"),bundle:pt("string")};class Ku extends yo{data(e={}){return super.data(e)}}class _o{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new ju(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new Ku(this._firestore,this._userDataWriter,i.key,i,new ju(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ne(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const g=new Ku(o._firestore,o._userDataWriter,m.doc.key,m.doc,new ju(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const g=new Ku(o._firestore,o._userDataWriter,m.doc.key,m.doc,new ju(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,T=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),T=h.indexOf(m.doc.key)),{type:GA(m.type),doc:g,oldIndex:_,newIndex:T}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=_o._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=vf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),i.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function GA(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve(61501,{type:r})}}_o._jsonSchemaVersion="firestore/querySnapshot/1.0",_o._jsonSchema={type:pt("string",_o._jsonSchemaVersion),bundleSource:pt("string","QuerySnapshot"),bundleName:pt("string"),bundle:pt("string")};class KA extends WA{constructor(e){super(),this.firestore=e}convertBytes(e){return new wn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new mt(this.firestore,null,t)}}function Wa(r){r=br(r,_i);const e=br(r.firestore,Mo),t=dv(e),i=new KA(e);return qA(r._query),bA(t,r._query).then((o=>new _o(e,i,r,o)))}function QA(r,e,t){r=br(r,mt);const i=br(r.firestore,Mo),o=Tv(r.converter,e);return jc(i,[mv(Vc(i),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,En.none())])}function YA(r,e,t,...i){r=br(r,mt);const o=br(r.firestore,Mo),u=Vc(o);let h;return h=typeof(e=vt(e))=="string"||e instanceof bc?UA(u,"updateDoc",r._key,e,t,i):FA(u,"updateDoc",r._key,e),jc(o,[h.toMutation(r._key,En.exists(!0))])}function vo(r){return jc(br(r.firestore,Mo),[new xf(r._key,En.none())])}function Yf(r,e){const t=br(r.firestore,Mo),i=Cr(r),o=Tv(r.converter,e);return jc(t,[mv(Vc(r.firestore),"addDoc",i._key,o,r.converter!==null,{}).toMutation(i._key,En.exists(!1))]).then((()=>i))}function jc(r,e){return(function(i,o){const u=new Ts;return i.asyncQueue.enqueueAndForget((async()=>_A(await PA(i),o,u))),u.promise})(dv(r),e)}function Co(){return new qf("serverTimestamp")}(function(e,t=!0){(function(o){bo=o})(Po),wo(new ci("firestore",((i,{instanceIdentifier:o,options:u})=>{const h=i.getProvider("app").getImmediate(),m=new Mo(new OS(i.getProvider("auth-internal")),new jS(h,i.getProvider("app-check-internal")),(function(_,T){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ne(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xa(_.options.projectId,T)})(h,o),h);return u={useFetchStreams:t,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),ws(Qg,Yg,e),ws(Qg,Yg,"esm2020")})();const XA={apiKey:"AIzaSyAYH2LknXO2VuBYsag6qNj4A3oBgjAunXE",authDomain:"fsktm-29ed3.firebaseapp.com",projectId:"fsktm-29ed3",storageBucket:"fsktm-29ed3.firebasestorage.app",messagingSenderId:"10409911302",appId:"1:10409911302:web:b14d9dce788d1dcaba8f87"},Iv=u_(XA),Fc=RS(Iv),zt=VA(Iv),JA="users",ZA=async r=>{try{const e=Cr(zt,JA,r.user_id);await QA(e,{...r,created_at:Co(),updated_at:Co()})}catch(e){throw new Error(e.message)}},eC=async r=>{try{const e=await hI(Fc,r.user_email,r.user_password);return await pI(e.user,{displayName:r.user_name}),await ZA({user_id:e.user.uid,user_name:r.user_name,user_email:r.user_email}),e.user}catch(e){throw new Error(e.message)}},tC=async(r,e)=>{try{return(await dI(Fc,r,e)).user}catch(t){throw new Error(t.message)}},Xf=async()=>{try{await _I(Fc)}catch(r){throw new Error(r.message)}},Sv=r=>yI(Fc,r),kv=Object.freeze(Object.defineProperty({__proto__:null,logout:Xf,onAuthChange:Sv,signIn:tC,signUp:eC},Symbol.toStringTag,{value:"Module"})),xv=ye.createContext(void 0),nC=({children:r})=>{const[e,t]=ye.useState(null),[i,o]=ye.useState(!0);return ye.useEffect(()=>{const u=Sv(h=>{t(h),o(!1)});return()=>u()},[]),w.jsx(xv.Provider,{value:{user:e,isLoading:i},children:r})},ml=()=>{const r=ye.useContext(xv);if(!r)throw new Error("useAuth must be used within AuthProvider");return r},Jf="user_items",rC=r=>{const e=new Date,t=Math.ceil((r.getTime()-e.getTime())/(1e3*60*60*24));return t<0?"expired":t<=3?"expiring_soon":"fresh"},sC=async(r,e)=>{try{const t=rC(e.user_items_expiry_date);return(await Yf(Ss(zt,Jf),{user_id:r,item_id:e.item_id,user_items_quantity:e.user_items_quantity,user_items_unit:e.user_items_unit,user_items_expiry_date:Ge.fromDate(e.user_items_expiry_date),user_items_added_at:Co(),user_items_status:t})).id}catch(t){throw new Error(t.message)}},iC=async r=>{try{const e=qa(Ss(zt,Jf),Ha("user_id","==",r),HA("user_items_expiry_date"));return(await Wa(e)).docs.map(i=>{const o=i.data();return{user_items_id:i.id,user_id:o.user_id,item_id:o.item_id,user_items_quantity:o.user_items_quantity,user_items_unit:o.user_items_unit,user_items_expiry_date:o.user_items_expiry_date?.toDate(),user_items_added_at:o.user_items_added_at?.toDate(),user_items_status:o.user_items_status}})}catch(e){throw new Error(e.message)}},oC=async r=>{try{const e=Cr(zt,Jf,r);await vo(e)}catch(e){throw new Error(e.message)}},aC="item_master",lC=async r=>{try{return(await Yf(Ss(zt,aC),{...r,created_at:Co(),updated_at:Co()})).id}catch(e){throw new Error(e.message)}},xd={123456789:"Organic Milk",987654321:"Free Range Eggs",555555555:"Whole Wheat Bread",111111111:"Greek Yogurt",222222222:"Cheddar Cheese"};function uC({onClose:r,onResult:e}){const[t,i]=ye.useState(""),[o,u]=ye.useState(!1),h=g=>{if(g.preventDefault(),!t)return;const _=xd[t]||"Unknown Product";e(t,_)},m=()=>{u(!0),setTimeout(()=>{const g=Object.keys(xd),_=g[Math.floor(Math.random()*g.length)],T=xd[_];u(!1),e(_,T)},2e3)};return w.jsx("div",{className:"fixed inset-0 bg-black/90 z-[60] flex items-center justify-center",children:w.jsx("div",{className:"w-full max-w-md mx-4",children:w.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg overflow-hidden",children:[w.jsxs("div",{className:"p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between",children:[w.jsx("h2",{className:"text-gray-900 dark:text-white",children:"Scan Barcode"}),w.jsx("button",{onClick:r,className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors",children:w.jsx(Jy,{className:"w-5 h-5 text-gray-500 dark:text-gray-400"})})]}),w.jsxs("div",{className:"p-6",children:[w.jsxs("div",{className:"relative aspect-square bg-gray-900 rounded-lg mb-4 overflow-hidden",children:[w.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:o?w.jsxs("div",{className:"text-center",children:[w.jsx("div",{className:"animate-pulse mb-4",children:w.jsx(Cd,{className:"w-16 h-16 text-[#007057] mx-auto"})}),w.jsx("p",{className:"text-white",children:"Scanning..."})]}):w.jsxs("div",{className:"text-center",children:[w.jsx(Cd,{className:"w-16 h-16 text-gray-400 mx-auto mb-4"}),w.jsx("p",{className:"text-gray-400",children:"Position barcode within frame"})]})}),w.jsx("div",{className:"absolute inset-8 border-2 border-blue-500 rounded-lg",children:o&&w.jsx("div",{className:"absolute top-1/2 left-0 right-0 h-0.5 bg-blue-500 animate-pulse"})})]}),w.jsx("button",{onClick:m,disabled:o,className:"w-full py-3 bg-[#007057] hover:bg-[#005a45] disabled:bg-gray-400 text-white rounded-lg transition-colors mb-4",children:o?"Scanning...":"Simulate Scan"}),w.jsxs("div",{className:"relative my-6",children:[w.jsx("div",{className:"absolute inset-0 flex items-center",children:w.jsx("div",{className:"w-full border-t border-gray-300 dark:border-gray-600"})}),w.jsx("div",{className:"relative flex justify-center",children:w.jsx("span",{className:"px-2 bg-white dark:bg-gray-800 text-sm text-gray-500 dark:text-gray-400",children:"or enter manually"})})]}),w.jsxs("form",{onSubmit:h,className:"space-y-3",children:[w.jsx("input",{type:"text",placeholder:"Enter barcode number",value:t,onChange:g=>i(g.target.value),className:"w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"}),w.jsx("button",{type:"submit",className:"w-full py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-colors",children:"Submit"})]}),w.jsx("div",{className:"mt-4 p-3 bg-[#007057]/10 dark:bg-[#007057]/20 rounded-lg",children:w.jsx("p",{className:"text-xs text-[#007057]",children:"Try these test barcodes: 123456789, 987654321, 555555555"})})]})]})})})}const Gy=[{name:"Milk",category:"Dairy",unit:"L",defaultQty:1},{name:"Eggs",category:"Dairy",unit:"pcs",defaultQty:12},{name:"Bread",category:"Bakery",unit:"loaf",defaultQty:1},{name:"Chicken Breast",category:"Meat",unit:"g",defaultQty:500},{name:"Tomatoes",category:"Vegetables",unit:"pcs",defaultQty:4},{name:"Lettuce",category:"Vegetables",unit:"head",defaultQty:1},{name:"Cheese",category:"Dairy",unit:"g",defaultQty:250},{name:"Yogurt",category:"Dairy",unit:"g",defaultQty:500},{name:"Orange Juice",category:"Beverages",unit:"L",defaultQty:1},{name:"Apples",category:"Fruits",unit:"pcs",defaultQty:6}];function cC({onClose:r,onItemAdded:e}){const{user:t}=ml(),[i,o]=ye.useState("suggestions"),[u,h]=ye.useState(!1),[m,g]=ye.useState(""),[_,T]=ye.useState(!1),[k,C]=ye.useState(""),[F,G]=ye.useState({name:"",category:"Dairy",quantity:1,unit:"pcs",expiryDate:""}),Y=["Dairy","Meat","Vegetables","Fruits","Bakery","Beverages","Other"],$=["pcs","g","kg","L","ml","oz","lb"],he=async B=>{if(B.preventDefault(),!(!F.name||!F.expiryDate||!t)){T(!0),C("");try{const se=await lC({item_code:`${F.category.toUpperCase()}_${Date.now()}`,item_name:F.name,item_category:F.category,item_default_shelf_life:7});console.log("Created item:",se),await sC(t.uid,{item_id:se,user_items_quantity:F.quantity,user_items_unit:F.unit,user_items_expiry_date:new Date(F.expiryDate)}),e(),r()}catch(se){console.error("Error adding item:",se),C(se instanceof Error?se.message:"Failed to add item")}finally{T(!1)}}},ee=B=>{const se=new Date;se.setDate(se.getDate()+7),G({name:B.name,category:B.category,quantity:B.defaultQty,unit:B.unit,expiryDate:se.toISOString().split("T")[0]}),o("manual")},de=(B,se)=>{const P=new Date;P.setDate(P.getDate()+7),G({...F,name:se,expiryDate:P.toISOString().split("T")[0]}),h(!1),o("manual")},we=Gy.filter(B=>B.name.toLowerCase().includes(m.toLowerCase()));return w.jsxs(w.Fragment,{children:[w.jsx("div",{className:"fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center",children:w.jsxs("div",{className:"bg-white dark:bg-gray-800 w-full sm:max-w-lg sm:rounded-lg rounded-t-2xl max-h-[90vh] overflow-y-auto",children:[w.jsxs("div",{className:"sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between",children:[w.jsx("h2",{className:"text-gray-900 dark:text-white",children:"Add Item"}),w.jsx("button",{onClick:r,className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors",disabled:_,children:w.jsx(Jy,{className:"w-5 h-5 text-gray-500 dark:text-gray-400"})})]}),w.jsxs("div",{className:"p-4",children:[i==="suggestions"&&w.jsxs("div",{className:"space-y-4",children:[w.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[w.jsxs("button",{onClick:()=>h(!0),className:"p-4 bg-[#007057]/10 dark:bg-[#007057]/20 border-2 border-[#007057]/30 dark:border-[#007057]/40 rounded-lg hover:bg-[#007057]/20 dark:hover:bg-[#007057]/30 transition-colors",children:[w.jsx(Cd,{className:"w-8 h-8 text-[#007057] mx-auto mb-2"}),w.jsx("p",{className:"text-sm text-[#007057]",children:"Scan Barcode"})]}),w.jsxs("button",{onClick:()=>o("search"),className:"p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors",children:[w.jsx(Rd,{className:"w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2"}),w.jsx("p",{className:"text-sm text-green-900 dark:text-green-100",children:"Search Items"})]})]}),w.jsx("button",{onClick:()=>o("manual"),className:"w-full py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors",children:"Enter Manually"}),w.jsxs("div",{children:[w.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[w.jsx(CE,{className:"w-5 h-5 text-gray-600 dark:text-gray-400"}),w.jsx("h3",{className:"text-gray-900 dark:text-white",children:"Popular Items"})]}),w.jsx("div",{className:"grid grid-cols-2 gap-2",children:Gy.slice(0,6).map((B,se)=>w.jsxs("button",{onClick:()=>ee(B),className:"p-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-left",children:[w.jsx("p",{className:"text-gray-900 dark:text-white",children:B.name}),w.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:B.category})]},se))})]})]}),i==="search"&&w.jsxs("div",{className:"space-y-4",children:[w.jsx("button",{onClick:()=>o("suggestions"),className:"text-blue-600 dark:text-blue-400 text-sm",children:"← Back"}),w.jsxs("div",{className:"relative",children:[w.jsx(Rd,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"}),w.jsx("input",{type:"text",placeholder:"Search for items...",value:m,onChange:B=>g(B.target.value),className:"w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400",autoFocus:!0})]}),w.jsxs("div",{className:"space-y-2 max-h-96 overflow-y-auto",children:[we.map((B,se)=>w.jsxs("button",{onClick:()=>ee(B),className:"w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-left",children:[w.jsx("p",{className:"text-gray-900 dark:text-white",children:B.name}),w.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:[B.category," • ",B.defaultQty," ",B.unit]})]},se)),we.length===0&&w.jsx("p",{className:"text-center py-8 text-gray-500 dark:text-gray-400",children:"No items found"})]})]}),i==="manual"&&w.jsxs("form",{onSubmit:he,className:"space-y-4",children:[w.jsx("button",{type:"button",onClick:()=>o("suggestions"),className:"text-blue-600 dark:text-blue-400 text-sm",disabled:_,children:"← Back"}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm text-gray-700 dark:text-gray-300 mb-1",children:"Item Name"}),w.jsx("input",{type:"text",value:F.name,onChange:B=>G({...F,name:B.target.value}),className:"w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white",required:!0,disabled:_})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm text-gray-700 dark:text-gray-300 mb-1",children:"Category"}),w.jsx("select",{value:F.category,onChange:B=>G({...F,category:B.target.value}),className:"w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white",disabled:_,children:Y.map(B=>w.jsx("option",{value:B,children:B},B))})]}),w.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm text-gray-700 dark:text-gray-300 mb-1",children:"Quantity"}),w.jsx("input",{type:"number",value:F.quantity,onChange:B=>G({...F,quantity:Number(B.target.value)}),className:"w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white",min:"0.1",step:"0.1",required:!0,disabled:_})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm text-gray-700 dark:text-gray-300 mb-1",children:"Unit"}),w.jsx("select",{value:F.unit,onChange:B=>G({...F,unit:B.target.value}),className:"w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white",disabled:_,children:$.map(B=>w.jsx("option",{value:B,children:B},B))})]})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm text-gray-700 dark:text-gray-300 mb-1",children:"Expiry Date"}),w.jsx("input",{type:"date",value:F.expiryDate,onChange:B=>G({...F,expiryDate:B.target.value}),className:"w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white",required:!0,disabled:_})]}),k&&w.jsx("div",{className:"bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3",children:w.jsx("p",{className:"text-red-600 dark:text-red-400 text-sm",children:k})}),w.jsx("button",{type:"submit",className:"w-full py-3 bg-[#007057] hover:bg-[#005a45] disabled:bg-gray-400 text-white rounded-lg transition-colors flex items-center justify-center gap-2",disabled:_,children:_?w.jsxs(w.Fragment,{children:[w.jsx(Yu,{className:"w-5 h-5 animate-spin"}),"Adding..."]}):"Add to Fridge"})]})]})]})}),u&&w.jsx(uC,{onClose:()=>h(!1),onResult:de})]})}function hC(){const{user:r}=ml(),[e,t]=ye.useState(""),[i,o]=ye.useState(!1),[u,h]=ye.useState("All"),[m,g]=ye.useState([]),[_,T]=ye.useState(!0);ye.useEffect(()=>{r&&k()},[r]);const k=async()=>{try{T(!0);const ee=await iC(r.uid);g(ee)}catch(ee){console.error("Error loading items:",ee)}finally{T(!1)}},C=async ee=>{try{await oC(ee),g(m.filter(de=>de.user_items_id!==ee))}catch(de){console.error("Error removing item:",de)}},F=async()=>{try{await Xf()}catch(ee){console.error("Error logging out:",ee)}},G=["All",...Array.from(new Set(m.map(ee=>"General")))],Y=ee=>{const de=new Date,we=ee.getTime()-de.getTime();return Math.ceil(we/(1e3*60*60*24))},$=m.filter(ee=>u==="All"),he=m.filter(ee=>ee.user_items_status==="expiring_soon");return _?w.jsx("div",{className:"max-w-2xl mx-auto p-4 flex items-center justify-center min-h-screen",children:w.jsx("div",{className:"text-gray-600 dark:text-gray-400",children:"Loading your fridge..."})}):w.jsxs("div",{className:"max-w-2xl mx-auto p-4",children:[w.jsxs("div",{className:"mb-6 flex items-center justify-between",children:[w.jsxs("div",{children:[w.jsx("h1",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-2",children:"My Fridge"}),w.jsxs("p",{className:"text-gray-600 dark:text-gray-400",children:[m.length," items stored"]})]}),w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsxs("div",{className:"text-right",children:[w.jsx("p",{className:"text-sm font-medium text-gray-900 dark:text-white",children:r?.displayName||"User"}),w.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:r?.email})]}),w.jsx("button",{onClick:F,className:"p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors",children:w.jsx(of,{className:"w-5 h-5 text-gray-600 dark:text-gray-400"})})]})]}),he.length>0&&w.jsx("div",{className:"mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg",children:w.jsxs("div",{className:"flex items-start gap-3",children:[w.jsx(Zw,{className:"w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0"}),w.jsxs("div",{children:[w.jsxs("p",{className:"text-red-900 dark:text-red-100 font-medium",children:[he.length," item",he.length>1?"s":""," expiring soon"]}),w.jsx("p",{className:"text-sm text-red-700 dark:text-red-300 mt-1",children:"Check your fridge and use them before they expire!"})]})]})}),w.jsxs("div",{className:"relative mb-4",children:[w.jsx(Rd,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"}),w.jsx("input",{type:"text",placeholder:"Search ingredients...",value:e,onChange:ee=>t(ee.target.value),className:"w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"})]}),w.jsx("div",{className:"flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-hide",children:G.map(ee=>w.jsx("button",{onClick:()=>h(ee),className:`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${u===ee?"bg-[#007057] text-white":"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`,children:ee},ee))}),w.jsxs("button",{onClick:()=>o(!0),className:"w-full mb-4 py-3 bg-[#007057] hover:bg-[#005a45] text-white rounded-lg flex items-center justify-center gap-2 transition-colors",children:[w.jsx(Xy,{className:"w-5 h-5"}),"Add Item"]}),w.jsxs("div",{className:"space-y-3",children:[$.map(ee=>{const de=Y(ee.user_items_expiry_date),we=ee.user_items_status;return w.jsx("div",{className:`p-4 rounded-lg border ${we==="expired"?"bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600":we==="expiring_soon"?"bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700":"bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"}`,children:w.jsxs("div",{className:"flex items-start justify-between",children:[w.jsxs("div",{className:"flex-1",children:[w.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[w.jsxs("h3",{className:"font-medium text-gray-900 dark:text-white",children:["Item #",ee.user_items_id.slice(0,8)]}),we==="expiring_soon"&&w.jsx("div",{className:"w-2 h-2 bg-red-500 rounded-full"})]}),w.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:[ee.user_items_quantity," ",ee.user_items_unit]}),w.jsx("div",{className:"flex items-center gap-2",children:w.jsx("span",{className:`text-xs px-2 py-1 rounded ${we==="expired"?"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300":we==="expiring_soon"?"bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300":"bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"}`,children:we==="expired"?"Expired":de===0?"Expires today":de===1?"Expires tomorrow":`${de} days left`})})]}),w.jsx("button",{onClick:()=>C(ee.user_items_id),className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors",children:w.jsx(sf,{className:"w-5 h-5 text-gray-500 dark:text-gray-400"})})]})},ee.user_items_id)}),$.length===0&&w.jsxs("div",{className:"text-center py-12",children:[w.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"No items in your fridge yet"}),w.jsx("p",{className:"text-sm text-gray-400 dark:text-gray-500 mt-2",children:'Click "Add Item" to get started'})]})]}),i&&w.jsx(cC,{onClose:()=>o(!1),onItemAdded:k})]})}const dC=[{name:"Milk",category:"Dairy",quantity:1,unit:"L"},{name:"Eggs",category:"Dairy",quantity:12,unit:"pcs"},{name:"Bread",category:"Bakery",quantity:1,unit:"loaf"},{name:"Bananas",category:"Fruits",quantity:6,unit:"pcs"},{name:"Rice",category:"Grains",quantity:1,unit:"kg"}];function fC(){const{user:r}=ml(),[e,t]=ye.useState([]),[i,o]=ye.useState(!0),[u,h]=ye.useState(!1),[m,g]=ye.useState(!1),[_,T]=ye.useState({name:"",category:"Dairy",quantity:1,unit:"pcs"}),k=["Dairy","Meat","Vegetables","Fruits","Bakery","Beverages","Grains","Other"],C=["pcs","g","kg","L","ml","oz","lb","loaf"],F=e.filter(B=>B.completed).length;ye.useEffect(()=>{r&&G()},[r]);const G=async()=>{try{o(!0);const B=qa(Ss(zt,"grocery_items"),Ha("user_id","==",r.uid)),P=(await Wa(B)).docs.map(I=>({id:I.id,user_id:I.data().user_id,name:I.data().name,category:I.data().category,quantity:I.data().quantity,unit:I.data().unit,completed:I.data().completed||!1,created_at:I.data().created_at?.toDate()||new Date}));t(P)}catch(B){console.error("Error loading items:",B)}finally{o(!1)}},Y=async B=>{if(r)try{await Yf(Ss(zt,"grocery_items"),{user_id:r.uid,name:B.name,category:B.category,quantity:B.quantity,unit:B.unit,completed:!1,created_at:Co()}),await G()}catch(se){console.error("Error adding item:",se)}},$=async B=>{try{await vo(Cr(zt,"grocery_items",B)),t(e.filter(se=>se.id!==B))}catch(se){console.error("Error removing item:",se)}},he=async B=>{try{const se=e.find(P=>P.id===B);if(!se)return;await YA(Cr(zt,"grocery_items",B),{completed:!se.completed}),t(e.map(P=>P.id===B?{...P,completed:!P.completed}:P))}catch(se){console.error("Error toggling item:",se)}},ee=async()=>{try{const B=e.filter(se=>se.completed);await Promise.all(B.map(se=>vo(Cr(zt,"grocery_items",se.id)))),await G()}catch(B){console.error("Error completing purchase:",B)}},de=async B=>{B.preventDefault(),_.name&&(await Y(_),T({name:"",category:"Dairy",quantity:1,unit:"pcs"}),h(!1))},we=async B=>{await Y(B)};return i?w.jsx("div",{className:"max-w-2xl mx-auto p-4 flex items-center justify-center min-h-screen",children:w.jsx(Yu,{className:"w-8 h-8 animate-spin text-gray-600 dark:text-gray-400"})}):w.jsxs("div",{className:"max-w-2xl mx-auto p-4",children:[w.jsxs("div",{className:"mb-6",children:[w.jsx("h1",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-2",children:"Grocery List"}),w.jsxs("p",{className:"text-gray-600 dark:text-gray-400",children:[F," of ",e.length," items completed"]})]}),w.jsx("button",{onClick:()=>g(!m),className:"w-full mb-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200 dark:border-purple-700 rounded-lg hover:from-purple-100 hover:to-blue-100 dark:hover:from-purple-900/30 dark:hover:to-blue-900/30 transition-colors",children:w.jsxs("div",{className:"flex items-center justify-between",children:[w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx(IE,{className:"w-5 h-5 text-purple-600 dark:text-purple-400"}),w.jsx("span",{className:"text-purple-900 dark:text-purple-100 font-medium",children:"AI Recommended Items"})]}),w.jsx("span",{className:"text-sm text-purple-600 dark:text-purple-400",children:m?"Hide":"Show"})]})}),m&&w.jsxs("div",{className:"mb-4 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg",children:[w.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-3",children:"Based on your fridge contents and shopping patterns"}),w.jsx("div",{className:"space-y-2",children:dC.map((B,se)=>w.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg",children:[w.jsxs("div",{children:[w.jsx("p",{className:"text-gray-900 dark:text-white font-medium",children:B.name}),w.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:[B.quantity," ",B.unit]})]}),w.jsx("button",{onClick:()=>we(B),className:"px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors",children:"Add"})]},se))})]}),!u&&w.jsxs("button",{onClick:()=>h(!0),className:"w-full mb-4 py-3 bg-[#007057] hover:bg-[#005a45] text-white rounded-lg flex items-center justify-center gap-2 transition-colors",children:[w.jsx(Xy,{className:"w-5 h-5"}),"Add Item"]}),u&&w.jsxs("form",{onSubmit:de,className:"mb-4 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg space-y-3",children:[w.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[w.jsx("input",{type:"text",placeholder:"Item name",value:_.name,onChange:B=>T({..._,name:B.target.value}),className:"px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white text-sm",required:!0}),w.jsx("select",{value:_.category,onChange:B=>T({..._,category:B.target.value}),className:"px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white text-sm",children:k.map(B=>w.jsx("option",{value:B,children:B},B))})]}),w.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[w.jsx("input",{type:"number",placeholder:"Quantity",value:_.quantity,onChange:B=>T({..._,quantity:Number(B.target.value)}),className:"px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white text-sm",min:"0.1",step:"0.1",required:!0}),w.jsx("select",{value:_.unit,onChange:B=>T({..._,unit:B.target.value}),className:"px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white text-sm",children:C.map(B=>w.jsx("option",{value:B,children:B},B))})]}),w.jsxs("div",{className:"flex gap-2",children:[w.jsx("button",{type:"submit",className:"flex-1 py-2 bg-[#007057] hover:bg-[#005a45] text-white rounded-lg transition-colors text-sm",children:"Add"}),w.jsx("button",{type:"button",onClick:()=>h(!1),className:"px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-colors text-sm",children:"Cancel"})]})]}),w.jsxs("div",{className:"space-y-3 mb-4",children:[e.map(B=>w.jsx("div",{className:`p-4 rounded-lg border transition-all ${B.completed?"bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-60":"bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"}`,children:w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("button",{onClick:()=>he(B.id),className:`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${B.completed?"bg-[#007057] border-[#007057]":"border-gray-300 dark:border-gray-600 hover:border-[#007057]"}`,children:B.completed&&w.jsx(Yw,{className:"w-4 h-4 text-white"})}),w.jsxs("div",{className:"flex-1",children:[w.jsx("h3",{className:`font-medium text-gray-900 dark:text-white ${B.completed?"line-through":""}`,children:B.name}),w.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[B.quantity," ",B.unit," • ",B.category]})]}),w.jsx("button",{onClick:()=>$(B.id),className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors",children:w.jsx(sf,{className:"w-5 h-5 text-gray-500 dark:text-gray-400"})})]})},B.id)),e.length===0&&w.jsxs("div",{className:"text-center py-12",children:[w.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"No items in your grocery list"}),w.jsx("p",{className:"text-sm text-gray-400 dark:text-gray-500 mt-2",children:'Click "Add Item" to start building your list'})]})]}),F>0&&w.jsxs("button",{onClick:ee,className:"w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium",children:["Complete Purchase (",F," items)"]})]})}const Av=ye.createContext(void 0);function pC({children:r}){const[e,t]=ye.useState(()=>localStorage.getItem("theme")||"light");ye.useEffect(()=>{localStorage.setItem("theme",e),e==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[e]);const i=()=>{t(o=>o==="light"?"dark":"light")};return w.jsx(Av.Provider,{value:{theme:e,toggleTheme:i},children:r})}function mC(){const r=ye.useContext(Av);if(r===void 0)throw new Error("useTheme must be used within a ThemeProvider");return r}function gC(){const{theme:r,toggleTheme:e}=mC(),{user:t}=ml(),[i,o]=ye.useState(!1),[u,h]=ye.useState(!1),m=async()=>{try{o(!0),await Xf()}catch(_){console.error("Error signing out:",_)}finally{o(!1)}},g=async()=>{if(t)try{o(!0);const _=qa(Ss(zt,"user_items"),Ha("user_id","==",t.uid)),T=await Wa(_);await Promise.all(T.docs.map(Y=>vo(Cr(zt,"user_items",Y.id))));const k=qa(Ss(zt,"grocery_items"),Ha("user_id","==",t.uid)),C=await Wa(k);await Promise.all(C.docs.map(Y=>vo(Cr(zt,"grocery_items",Y.id))));const F=qa(Ss(zt,"recipes"),Ha("user_id","==",t.uid)),G=await Wa(F);await Promise.all(G.docs.map(Y=>vo(Cr(zt,"recipes",Y.id)))),alert("All data cleared successfully!"),h(!1)}catch(_){console.error("Error clearing data:",_),alert("Failed to clear data. Please try again.")}finally{o(!1)}};return w.jsxs("div",{className:"max-w-2xl mx-auto p-4",children:[w.jsxs("div",{className:"mb-6",children:[w.jsx("h1",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-2",children:"Settings"}),w.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Manage your preferences"})]}),w.jsxs("div",{className:"space-y-4",children:[w.jsxs("div",{className:"bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden",children:[w.jsx("div",{className:"p-4 border-b border-gray-200 dark:border-gray-700",children:w.jsx("h2",{className:"font-semibold text-gray-900 dark:text-white",children:"Account"})}),w.jsxs("div",{className:"p-4 space-y-1",children:[w.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg",children:[w.jsx(of,{className:"w-5 h-5 text-gray-600 dark:text-gray-400"}),w.jsxs("div",{className:"flex-1",children:[w.jsx("p",{className:"font-medium text-gray-900 dark:text-white",children:t?.displayName||"User"}),w.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:t?.email})]})]}),w.jsxs("button",{onClick:m,disabled:i,className:"w-full flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors text-left disabled:opacity-50 disabled:cursor-not-allowed",children:[i?w.jsx(Yu,{className:"w-5 h-5 text-gray-600 dark:text-gray-400 animate-spin"}):w.jsx(uE,{className:"w-5 h-5 text-gray-600 dark:text-gray-400"}),w.jsxs("div",{className:"flex-1",children:[w.jsx("p",{className:"font-medium text-gray-900 dark:text-white",children:"Sign Out"}),w.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Log out of your account"})]})]})]})]}),w.jsxs("div",{className:"bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden",children:[w.jsx("div",{className:"p-4 border-b border-gray-200 dark:border-gray-700",children:w.jsx("h2",{className:"font-semibold text-gray-900 dark:text-white",children:"Appearance"})}),w.jsx("div",{className:"p-4",children:w.jsxs("button",{onClick:e,className:"w-full flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors",children:[w.jsxs("div",{className:"flex items-center gap-3",children:[r==="light"?w.jsx(kE,{className:"w-5 h-5 text-gray-600 dark:text-gray-400"}):w.jsx(dE,{className:"w-5 h-5 text-gray-600 dark:text-gray-400"}),w.jsxs("div",{className:"text-left",children:[w.jsx("p",{className:"font-medium text-gray-900 dark:text-white",children:"Dark Mode"}),w.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:r==="dark"?"On":"Off"})]})]}),w.jsx("div",{className:`w-12 h-6 rounded-full transition-colors ${r==="dark"?"bg-[#007057]":"bg-gray-300"}`,children:w.jsx("div",{className:`w-5 h-5 bg-white rounded-full mt-0.5 transition-transform ${r==="dark"?"translate-x-6":"translate-x-0.5"}`})})]})})]}),w.jsxs("div",{className:"bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden",children:[w.jsx("div",{className:"p-4 border-b border-gray-200 dark:border-gray-700",children:w.jsx("h2",{className:"font-semibold text-gray-900 dark:text-white",children:"Notifications"})}),w.jsxs("div",{className:"p-4 space-y-1",children:[w.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg opacity-50",children:[w.jsx(yg,{className:"w-5 h-5 text-gray-600 dark:text-gray-400"}),w.jsxs("div",{className:"flex-1",children:[w.jsx("p",{className:"font-medium text-gray-900 dark:text-white",children:"Expiry Reminders"}),w.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Coming soon"})]})]}),w.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg opacity-50",children:[w.jsx(yg,{className:"w-5 h-5 text-gray-600 dark:text-gray-400"}),w.jsxs("div",{className:"flex-1",children:[w.jsx("p",{className:"font-medium text-gray-900 dark:text-white",children:"Recipe Suggestions"}),w.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Coming soon"})]})]})]})]}),w.jsxs("div",{className:"bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden",children:[w.jsx("div",{className:"p-4 border-b border-gray-200 dark:border-gray-700",children:w.jsx("h2",{className:"font-semibold text-gray-900 dark:text-white",children:"Data Management"})}),w.jsx("div",{className:"p-4 space-y-1",children:w.jsxs("button",{onClick:()=>h(!0),disabled:i,className:"w-full flex items-center gap-3 p-3 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors text-left disabled:opacity-50 disabled:cursor-not-allowed",children:[w.jsx(sf,{className:"w-5 h-5 text-red-600 dark:text-red-400"}),w.jsxs("div",{className:"flex-1",children:[w.jsx("p",{className:"font-medium text-red-900 dark:text-red-100",children:"Clear All Data"}),w.jsx("p",{className:"text-sm text-red-700 dark:text-red-300",children:"Remove all items from fridge and lists"})]})]})})]}),w.jsxs("div",{className:"bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden",children:[w.jsx("div",{className:"p-4 border-b border-gray-200 dark:border-gray-700",children:w.jsx("h2",{className:"font-semibold text-gray-900 dark:text-white",children:"About"})}),w.jsxs("div",{className:"p-4 space-y-1",children:[w.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg",children:[w.jsx(tE,{className:"w-5 h-5 text-gray-600 dark:text-gray-400"}),w.jsxs("div",{className:"flex-1",children:[w.jsx("p",{className:"font-medium text-gray-900 dark:text-white",children:"Help & Support"}),w.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Get help using the app"})]})]}),w.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg",children:[w.jsx(iE,{className:"w-5 h-5 text-gray-600 dark:text-gray-400"}),w.jsxs("div",{className:"flex-1",children:[w.jsx("p",{className:"font-medium text-gray-900 dark:text-white",children:"App Version"}),w.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"1.0.0 - Firebase Edition"})]})]})]})]})]}),u&&w.jsx("div",{className:"fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4",children:w.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6",children:[w.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-2",children:"Clear All Data?"}),w.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-6",children:"This will permanently delete all your fridge items, grocery lists, and recipes. This action cannot be undone."}),w.jsxs("div",{className:"flex gap-3",children:[w.jsx("button",{onClick:()=>h(!1),disabled:i,className:"flex-1 py-2 px-4 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-colors disabled:opacity-50",children:"Cancel"}),w.jsx("button",{onClick:g,disabled:i,className:"flex-1 py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center gap-2",children:i?w.jsxs(w.Fragment,{children:[w.jsx(Yu,{className:"w-4 h-4 animate-spin"}),"Deleting..."]}):"Delete All"})]})]})})]})}const yC="modulepreload",_C=function(r){return"/"+r},Ky={},Cv=function(e,t,i){let o=Promise.resolve();if(t&&t.length>0){let h=function(_){return Promise.all(_.map(T=>Promise.resolve(T).then(k=>({status:"fulfilled",value:k}),k=>({status:"rejected",reason:k}))))};document.getElementsByTagName("link");const m=document.querySelector("meta[property=csp-nonce]"),g=m?.nonce||m?.getAttribute("nonce");o=h(t.map(_=>{if(_=_C(_),_ in Ky)return;Ky[_]=!0;const T=_.endsWith(".css"),k=T?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${_}"]${k}`))return;const C=document.createElement("link");if(C.rel=T?"stylesheet":yC,T||(C.as="script"),C.crossOrigin="",C.href=_,g&&C.setAttribute("nonce",g),document.head.appendChild(C),T)return new Promise((F,G)=>{C.addEventListener("load",F),C.addEventListener("error",()=>G(new Error(`Unable to preload CSS for ${_}`)))})}))}function u(h){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=h,window.dispatchEvent(m),!m.defaultPrevented)throw h}return o.then(h=>{for(const m of h||[])m.status==="rejected"&&u(m.reason);return e().catch(u)})};function vC({onSwitchToSignUp:r}){const[e,t]=ye.useState(""),[i,o]=ye.useState(""),[u,h]=ye.useState(!1),[m,g]=ye.useState(""),[_,T]=ye.useState(!1),k=async C=>{C.preventDefault(),g(""),T(!0);try{const{signIn:F}=await Cv(async()=>{const{signIn:G}=await Promise.resolve().then(()=>kv);return{signIn:G}},void 0);await F(e,i),u?localStorage.setItem("rememberedEmail",e):localStorage.removeItem("rememberedEmail"),console.log("Login successful! Redirecting...")}catch(F){g(F instanceof Error?F.message:"Failed to sign in")}finally{T(!1)}};return w.jsx("div",{className:"min-h-screen bg-gradient-to-br from-[#007057] to-[#005a45] flex items-center justify-center p-4",children:w.jsxs("div",{className:"w-full max-w-md",children:[w.jsxs("div",{className:"text-center mb-8",children:[w.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4",children:w.jsx(Qu,{className:"w-8 h-8 text-[#007057]"})}),w.jsx("h1",{className:"text-white text-3xl mb-2",children:"FridgeTrack"}),w.jsx("p",{className:"text-white/80",children:"Track ingredients, reduce waste"})]}),w.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-6",children:[w.jsx("h2",{className:"text-2xl text-gray-900 mb-6",children:"Welcome Back"}),w.jsxs("form",{onSubmit:k,className:"space-y-4",children:[w.jsxs("div",{className:"space-y-2",children:[w.jsx("label",{className:"text-sm font-medium text-gray-700",children:"Email"}),w.jsxs("div",{className:"relative",children:[w.jsx(Yy,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"}),w.jsx("input",{type:"email",placeholder:"your@email.com",value:e,onChange:C=>t(C.target.value),className:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007057] focus:border-transparent",required:!0})]})]}),w.jsxs("div",{className:"space-y-2",children:[w.jsx("label",{className:"text-sm font-medium text-gray-700",children:"Password"}),w.jsxs("div",{className:"relative",children:[w.jsx(Ad,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"}),w.jsx("input",{type:"password",placeholder:"••••••••",value:i,onChange:C=>o(C.target.value),className:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007057] focus:border-transparent",required:!0})]})]}),w.jsxs("div",{className:"flex items-center space-x-2",children:[w.jsx("input",{type:"checkbox",id:"rememberMe",checked:u,onChange:C=>h(C.target.checked),className:"h-4 w-4 text-[#007057] border-gray-300 rounded"}),w.jsx("label",{htmlFor:"rememberMe",className:"text-sm text-gray-700",children:"Remember Me"})]}),m&&w.jsx("div",{className:"bg-red-50 border border-red-200 rounded-lg p-3",children:w.jsx("p",{className:"text-red-600 text-sm",children:m})}),w.jsx("button",{type:"submit",className:"w-full bg-[#007057] hover:bg-[#005a45] text-white py-2 px-4 rounded-lg font-medium transition-colors",disabled:_,children:_?"Signing in...":"Sign In"})]}),w.jsx("div",{className:"mt-6 text-center",children:w.jsxs("p",{className:"text-gray-600",children:["Don't have an account?"," ",w.jsx("button",{onClick:r,className:"text-[#007057] hover:underline font-medium",children:"Sign Up"})]})})]})]})})}function wC({onSwitchToLogin:r}){const[e,t]=ye.useState(""),[i,o]=ye.useState(""),[u,h]=ye.useState(""),[m,g]=ye.useState(""),[_,T]=ye.useState(""),[k,C]=ye.useState(""),[F,G]=ye.useState(!1),Y=async $=>{if($.preventDefault(),C(""),m!==_){C("Passwords do not match");return}if(m.length<6){C("Password must be at least 6 characters");return}G(!0);try{const{signUp:he}=await Cv(async()=>{const{signUp:ee}=await Promise.resolve().then(()=>kv);return{signUp:ee}},void 0);await he({user_name:e,user_email:i,user_password:m}),console.log("Sign up successful! Redirecting...")}catch(he){C(he instanceof Error?he.message:"Failed to sign up")}finally{G(!1)}};return w.jsx("div",{className:"min-h-screen bg-gradient-to-br from-[#007057] to-[#005a45] flex items-center justify-center p-4",children:w.jsxs("div",{className:"w-full max-w-md",children:[w.jsxs("div",{className:"text-center mb-8",children:[w.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4",children:w.jsx(Qu,{className:"w-8 h-8 text-[#007057]"})}),w.jsx("h1",{className:"text-white text-3xl mb-2",children:"FridgeTrack"}),w.jsx("p",{className:"text-white/80",children:"Track ingredients, reduce waste"})]}),w.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-6",children:[w.jsx("h2",{className:"text-2xl text-gray-900 mb-6",children:"Create Account"}),w.jsxs("form",{onSubmit:Y,className:"space-y-4",children:[w.jsxs("div",{className:"space-y-2",children:[w.jsx("label",{className:"text-sm font-medium text-gray-700",children:"Full Name"}),w.jsxs("div",{className:"relative",children:[w.jsx(of,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"}),w.jsx("input",{type:"text",placeholder:"John Doe",value:e,onChange:$=>t($.target.value),className:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007057] focus:border-transparent",required:!0})]})]}),w.jsxs("div",{className:"space-y-2",children:[w.jsx("label",{className:"text-sm font-medium text-gray-700",children:"Email"}),w.jsxs("div",{className:"relative",children:[w.jsx(Yy,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"}),w.jsx("input",{type:"email",placeholder:"your@email.com",value:i,onChange:$=>o($.target.value),className:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007057] focus:border-transparent",required:!0})]})]}),w.jsxs("div",{className:"space-y-2",children:[w.jsx("label",{className:"text-sm font-medium text-gray-700",children:"Phone Number"}),w.jsxs("div",{className:"relative",children:[w.jsx(pE,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"}),w.jsx("input",{type:"tel",placeholder:"+60123456789",value:u,onChange:$=>h($.target.value),className:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007057] focus:border-transparent",required:!0})]})]}),w.jsxs("div",{className:"space-y-2",children:[w.jsx("label",{className:"text-sm font-medium text-gray-700",children:"Password"}),w.jsxs("div",{className:"relative",children:[w.jsx(Ad,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"}),w.jsx("input",{type:"password",placeholder:"••••••••",value:m,onChange:$=>g($.target.value),className:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007057] focus:border-transparent",required:!0})]})]}),w.jsxs("div",{className:"space-y-2",children:[w.jsx("label",{className:"text-sm font-medium text-gray-700",children:"Confirm Password"}),w.jsxs("div",{className:"relative",children:[w.jsx(Ad,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"}),w.jsx("input",{type:"password",placeholder:"••••••••",value:_,onChange:$=>T($.target.value),className:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007057] focus:border-transparent",required:!0})]})]}),k&&w.jsx("div",{className:"bg-red-50 border border-red-200 rounded-lg p-3",children:w.jsx("p",{className:"text-red-600 text-sm",children:k})}),w.jsx("button",{type:"submit",className:"w-full bg-[#007057] hover:bg-[#005a45] text-white py-2 px-4 rounded-lg font-medium transition-colors",disabled:F,children:F?"Creating account...":"Sign Up"})]}),w.jsx("div",{className:"mt-6 text-center",children:w.jsxs("p",{className:"text-gray-600",children:["Already have an account?"," ",w.jsx("button",{onClick:r,className:"text-[#007057] hover:underline font-medium",children:"Sign In"})]})})]})]})})}function EC(){const{user:r,isLoading:e}=ml(),[t,i]=ye.useState("login");return e?w.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center",children:w.jsx("div",{className:"text-gray-600 dark:text-gray-400",children:"Loading..."})}):r?w.jsx(TC,{}):t==="login"?w.jsx(vC,{onSwitchToSignUp:()=>i("signup")}):w.jsx(wC,{onSwitchToLogin:()=>i("login")})}function TC(){const[r,e]=ye.useState("fridge"),t=()=>{switch(r){case"fridge":return w.jsx(hC,{});case"grocery":return w.jsx(fC,{});case"recipes":return w.jsx("div",{className:"max-w-2xl mx-auto p-4 min-h-screen flex items-center justify-center",children:w.jsxs("div",{className:"text-center",children:[w.jsx(Qu,{className:"w-16 h-16 text-gray-400 mx-auto mb-4"}),w.jsx("h2",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-2",children:"Recipes"}),w.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Coming soon! Find recipes based on your fridge items."})]})});case"settings":return w.jsx(gC,{});default:return null}};return w.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 pb-20",children:[t(),w.jsx("nav",{className:"fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 safe-area-bottom",children:w.jsxs("div",{className:"grid grid-cols-4 h-16",children:[w.jsxs("button",{onClick:()=>e("fridge"),className:`flex flex-col items-center justify-center gap-1 transition-colors ${r==="fridge"?"text-[#007057]":"text-gray-500 dark:text-gray-400"}`,children:[w.jsx(rE,{className:"w-6 h-6"}),w.jsx("span",{className:"text-xs",children:"Fridge"})]}),w.jsxs("button",{onClick:()=>e("grocery"),className:`flex flex-col items-center justify-center gap-1 transition-colors ${r==="grocery"?"text-[#007057]":"text-gray-500 dark:text-gray-400"}`,children:[w.jsx(EE,{className:"w-6 h-6"}),w.jsx("span",{className:"text-xs",children:"Grocery"})]}),w.jsxs("button",{onClick:()=>e("recipes"),className:`flex flex-col items-center justify-center gap-1 transition-colors ${r==="recipes"?"text-[#007057]":"text-gray-500 dark:text-gray-400"}`,children:[w.jsx(Qu,{className:"w-6 h-6"}),w.jsx("span",{className:"text-xs",children:"Recipes"})]}),w.jsxs("button",{onClick:()=>e("settings"),className:`flex flex-col items-center justify-center gap-1 transition-colors ${r==="settings"?"text-[#007057]":"text-gray-500 dark:text-gray-400"}`,children:[w.jsx(vE,{className:"w-6 h-6"}),w.jsx("span",{className:"text-xs",children:"Settings"})]})]})})]})}function IC(){return w.jsx(pC,{children:w.jsx(nC,{children:w.jsx(EC,{})})})}$w.createRoot(document.getElementById("root")).render(w.jsx(IC,{}));
