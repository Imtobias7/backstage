/*! For license information please see d89c9ca3.562301a4.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[594564],{523696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var r=n(824246),o=n(511151);const i={id:"plugin-entity-validation.entityvalidationplugin",title:"entityValidationPlugin",description:"API reference for entityValidationPlugin"},a=void 0,u={unversionedId:"reference/plugin-entity-validation.entityvalidationplugin",id:"reference/plugin-entity-validation.entityvalidationplugin",title:"entityValidationPlugin",description:"API reference for entityValidationPlugin",source:"@site/../docs/reference/plugin-entity-validation.entityvalidationplugin.md",sourceDirName:"reference",slug:"/reference/plugin-entity-validation.entityvalidationplugin",permalink:"/docs/reference/plugin-entity-validation.entityvalidationplugin",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-entity-validation.entityvalidationplugin.md",tags:[],version:"current",frontMatter:{id:"plugin-entity-validation.entityvalidationplugin",title:"entityValidationPlugin",description:"API reference for entityValidationPlugin"}},c={},l=[];function s(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-entity-validation",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-entity-validation"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-entity-validation.entityvalidationplugin",children:(0,r.jsx)(t.code,{children:"entityValidationPlugin"})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'entityValidationPlugin: import("@backstage/core-plugin-api").BackstagePlugin<{\n    root: import("@backstage/core-plugin-api").RouteRef<undefined>;\n}, {}>\n'})})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,a,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in i=Object(arguments[c]))n.call(i,l)&&(u[l]=i[l]);if(t){a=t(i);for(var s=0;s<a.length;s++)r.call(i,a[s])&&(u[a[s]]=i[a[s]])}}return u}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,s=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(s=t.ref),t)u.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:s,props:i,_owner:a.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var r=n(862525),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,u=60110,c=60112;t.Suspense=60113;var l=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),a=f("react.provider"),u=f("react.context"),c=f("react.forward_ref"),t.Suspense=f("react.suspense"),l=f("react.memo"),s=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function g(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||y}function h(){}function m(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=g.prototype;var _=m.prototype=new h;_.constructor=m,r(_,g.prototype),_.isPureReactComponent=!0;var b={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var r,i={},a=null,u=null;if(null!=t)for(r in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)j.call(t,r)&&!k.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+2];i.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===i[r]&&(i[r]=c[r]);return{$$typeof:o,type:e,key:a,ref:u,props:i,_owner:b.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,n,r,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return a=a(c=e),e=""===r?"."+S(c,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(P,"$&/")+"/"),x(a,t,n,"",(function(e){return e}))):null!=a&&(w(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),t.push(a)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var s=r+S(u=e[l],l);c+=x(u,t,n,s,a)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),l=0;!(u=e.next()).done;)c+=x(u=u.value,t,n,s=r+S(u,l++),a);else if("object"===u)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function C(e,t,n){if(null==e)return e;var r=[],o=0;return x(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(d(321));return e}var I={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:C,forEach:function(e,t,n){C(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(d(143));return e}},t.Component=g,t.PureComponent=m,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,n){if(null==e)throw Error(d(267,e));var i=r({},e.props),a=e.key,u=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,c=b.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)j.call(t,s)&&!k.hasOwnProperty(s)&&(i[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)i.children=n;else if(1<s){l=Array(s);for(var f=0;f<s;f++)l[f]=arguments[f+2];i.children=l}return{$$typeof:o,type:e.type,key:a,ref:u,props:i,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=O,t.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return $().useCallback(e,t)},t.useContext=function(e,t){return $().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return $().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return $().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return $().useLayoutEffect(e,t)},t.useMemo=function(e,t){return $().useMemo(e,t)},t.useReducer=function(e,t,n){return $().useReducer(e,t,n)},t.useRef=function(e){return $().useRef(e)},t.useState=function(e){return $().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>u,ah:()=>i});var r=n(667294);const o=r.createContext({});function i(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function u({components:e,children:t,disableParentContext:n}){let u;return u=n?"function"==typeof e?e({}):e||a:i(e),r.createElement(o.Provider,{value:u},t)}}}]);