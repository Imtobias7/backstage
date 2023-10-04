/*! For license information please see 94dfadad.5edf3a12.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[187649],{92531:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var r=t(824246),o=t(511151);const c={id:"plugin-techdocs-backend.recommendeddeploymentoptions",title:"RecommendedDeploymentOptions",description:"API reference for RecommendedDeploymentOptions"},i=void 0,s={unversionedId:"reference/plugin-techdocs-backend.recommendeddeploymentoptions",id:"reference/plugin-techdocs-backend.recommendeddeploymentoptions",title:"RecommendedDeploymentOptions",description:"API reference for RecommendedDeploymentOptions",source:"@site/../docs/reference/plugin-techdocs-backend.recommendeddeploymentoptions.md",sourceDirName:"reference",slug:"/reference/plugin-techdocs-backend.recommendeddeploymentoptions",permalink:"/docs/reference/plugin-techdocs-backend.recommendeddeploymentoptions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-techdocs-backend.recommendeddeploymentoptions.md",tags:[],version:"current",frontMatter:{id:"plugin-techdocs-backend.recommendeddeploymentoptions",title:"RecommendedDeploymentOptions",description:"API reference for RecommendedDeploymentOptions"}},a={},u=[];function l(e){const n=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-backend",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-techdocs-backend"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-backend.recommendeddeploymentoptions",children:(0,r.jsx)(n.code,{children:"RecommendedDeploymentOptions"})})]}),"\n",(0,r.jsx)(n.p,{children:'Required dependencies for running TechDocs in the "recommended" deployment configuration (prepare/generate handled externally in CI/CD).'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export type RecommendedDeploymentOptions = {\n    publisher: PublisherBase;\n    logger: winston.Logger;\n    discovery: PluginEndpointDiscovery;\n    config: Config;\n    cache: PluginCacheManager;\n    docsBuildStrategy?: DocsBuildStrategy;\n    buildLogTransport?: winston.transport;\n    catalogClient?: CatalogClient;\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"References:"})," ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.publisherbase",children:"PublisherBase"}),", ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.discoveryservice",children:"PluginEndpointDiscovery"}),", ",(0,r.jsx)(n.a,{href:"/docs/reference/config.config",children:"Config"}),", ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-common.plugincachemanager",children:"PluginCacheManager"}),", ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-backend.docsbuildstrategy",children:"DocsBuildStrategy"}),", ",(0,r.jsx)(n.a,{href:"/docs/reference/catalog-client.catalogclient",children:"CatalogClient"})]})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,i,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var u in c=Object(arguments[a]))t.call(c,u)&&(s[u]=c[u]);if(n){i=n(c);for(var l=0;l<i.length;l++)r.call(c,i[l])&&(s[i[l]]=c[i[l]])}}return s}},371426:(e,n,t)=>{t(862525);var r=t(827378),o=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),n.Fragment=c("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,t){var r,c={},u=null,l=null;for(r in void 0!==t&&(u=""+t),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,r)&&!a.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:o,type:e,key:u,ref:l,props:c,_owner:i.current}}n.jsx=u,n.jsxs=u},541535:(e,n,t)=>{var r=t(862525),o=60103,c=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var i=60109,s=60110,a=60112;n.Suspense=60113;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),c=f("react.portal"),n.Fragment=f("react.fragment"),n.StrictMode=f("react.strict_mode"),n.Profiler=f("react.profiler"),i=f("react.provider"),s=f("react.context"),a=f("react.forward_ref"),n.Suspense=f("react.suspense"),u=f("react.memo"),l=f("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function h(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||y}function g(){}function b(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,n,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=h.prototype;var v=b.prototype=new g;v.constructor=b,r(v,h.prototype),v.isPureReactComponent=!0;var _={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function O(e,n,t){var r,c={},i=null,s=null;if(null!=n)for(r in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(i=""+n.key),n)j.call(n,r)&&!k.hasOwnProperty(r)&&(c[r]=n[r]);var a=arguments.length-2;if(1===a)c.children=t;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];c.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===c[r]&&(c[r]=a[r]);return{$$typeof:o,type:e,key:i,ref:s,props:c,_owner:_.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function w(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function S(e,n,t,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var a=!1;if(null===e)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case c:a=!0}}if(a)return i=i(a=e),e=""===r?"."+w(a,0):r,Array.isArray(i)?(t="",null!=e&&(t=e.replace(C,"$&/")+"/"),S(i,n,t,"",(function(e){return e}))):null!=i&&(x(i)&&(i=function(e,n){return{$$typeof:o,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(i,t+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),n.push(i)),1;if(a=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=r+w(s=e[u],u);a+=S(s,n,t,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(s=e.next()).done;)a+=S(s=s.value,n,t,l=r+w(s,u++),i);else if("object"===s)throw n=""+e,Error(p(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return a}function R(e,n,t){if(null==e)return e;var r=[],o=0;return S(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function P(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function $(){var e=E.current;if(null===e)throw Error(p(321));return e}var D={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:R,forEach:function(e,n,t){R(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return R(e,(function(){n++})),n},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error(p(143));return e}},n.Component=h,n.PureComponent=b,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,n.cloneElement=function(e,n,t){if(null==e)throw Error(p(267,e));var c=r({},e.props),i=e.key,s=e.ref,a=e._owner;if(null!=n){if(void 0!==n.ref&&(s=n.ref,a=_.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in n)j.call(n,l)&&!k.hasOwnProperty(l)&&(c[l]=void 0===n[l]&&void 0!==u?u[l]:n[l])}var l=arguments.length-2;if(1===l)c.children=t;else if(1<l){u=Array(l);for(var f=0;f<l;f++)u[f]=arguments[f+2];c.children=u}return{$$typeof:o,type:e.type,key:i,ref:s,props:c,_owner:a}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:s,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},n.createElement=O,n.createFactory=function(e){var n=O.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:a,render:e}},n.isValidElement=x,n.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:P}},n.memo=function(e,n){return{$$typeof:u,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return $().useCallback(e,n)},n.useContext=function(e,n){return $().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return $().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return $().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return $().useLayoutEffect(e,n)},n.useMemo=function(e,n){return $().useMemo(e,n)},n.useReducer=function(e,n,t){return $().useReducer(e,n,t)},n.useRef=function(e){return $().useRef(e)},n.useState=function(e){return $().useState(e)},n.version="17.0.2"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>s,ah:()=>c});var r=t(667294);const o=r.createContext({});function c(e){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function s({components:e,children:n,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||i:c(e),r.createElement(o.Provider,{value:s},n)}}}]);