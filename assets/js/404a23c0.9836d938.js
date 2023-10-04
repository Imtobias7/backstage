/*! For license information please see 404a23c0.9836d938.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[824572],{22003:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var t=n(824246),o=n(511151);const s={id:"plugin-bitbucket-cloud-common.models.repository",title:"Models.Repository",description:"API reference for Models.Repository"},c=void 0,i={unversionedId:"reference/plugin-bitbucket-cloud-common.models.repository",id:"reference/plugin-bitbucket-cloud-common.models.repository",title:"Models.Repository",description:"API reference for Models.Repository",source:"@site/../docs/reference/plugin-bitbucket-cloud-common.models.repository.md",sourceDirName:"reference",slug:"/reference/plugin-bitbucket-cloud-common.models.repository",permalink:"/docs/reference/plugin-bitbucket-cloud-common.models.repository",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-bitbucket-cloud-common.models.repository.md",tags:[],version:"current",frontMatter:{id:"plugin-bitbucket-cloud-common.models.repository",title:"Models.Repository",description:"API reference for Models.Repository"}},l={},d=[{value:"Properties",id:"properties",level:2}];function u(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-bitbucket-cloud-common"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models",children:(0,t.jsx)(r.code,{children:"Models"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository",children:(0,t.jsx)(r.code,{children:"Repository"})})]}),"\n",(0,t.jsx)(r.p,{children:"A Bitbucket repository."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"interface Repository extends ModelObject \n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Extends:"})," ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models.modelobject",children:"ModelObject"})]}),"\n",(0,t.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Property"}),(0,t.jsx)(r.th,{children:"Modifiers"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.created_on",children:"created_on?"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.em,{children:"(Optional)"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.description",children:"description?"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.em,{children:"(Optional)"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.fork_policy",children:"fork_policy?"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repositoryforkpolicyenum",children:"RepositoryForkPolicyEnum"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"(Optional)"})," Controls the rules for forking this repository."]}),(0,t.jsx)(r.p,{children:"* **allow_forks**: unrestricted forking * **no_public_forks**: restrict forking to private forks (forks cannot be made public later) * **no_forks**: deny all forking"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.full_name",children:"full_name?"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.em,{children:"(Optional)"}),' The concatenation of the repository owner\'s username and the slugified name, e.g. "evzijst/interruptingcow". This is the same string used in Bitbucket URLs.']})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.has_issues",children:"has_issues?"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"boolean"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.em,{children:"(Optional)"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.has_wiki",children:"has_wiki?"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"boolean"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.em,{children:"(Optional)"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.is_private",children:"is_private?"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"boolean"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.em,{children:"(Optional)"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.language",children:"language?"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.em,{children:"(Optional)"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.links",children:"links?"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repositorylinks",children:"RepositoryLinks"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.em,{children:"(Optional)"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.mainbranch",children:"mainbranch?"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models.branch",children:"Branch"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.em,{children:"(Optional)"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.name",children:"name?"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.em,{children:"(Optional)"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.owner",children:"owner?"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models.account",children:"Account"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.em,{children:"(Optional)"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.parent",children:"parent?"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository",children:"Repository"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.em,{children:"(Optional)"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.project",children:"project?"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models.project",children:"Project"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.em,{children:"(Optional)"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.scm",children:"scm?"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repositoryscmenum",children:"RepositoryScmEnum"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.em,{children:"(Optional)"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.size",children:"size?"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"number"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.em,{children:"(Optional)"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.slug",children:"slug?"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.em,{children:"(Optional)"}),' The "sluggified" version of the repository\'s name. This contains only ASCII characters and can therefore be slightly different than the name']})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.updated_on",children:"updated_on?"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.em,{children:"(Optional)"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.uuid",children:"uuid?"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.em,{children:"(Optional)"})," The repository's immutable id. This can be used as a substitute for the slug segment in URLs. Doing this guarantees your URLs will survive renaming of the repository by its owner, or even transfer of the repository to a different user."]})]})]})]})]})}const a=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var s,c,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var d in s=Object(arguments[l]))n.call(s,d)&&(i[d]=s[d]);if(r){c=r(s);for(var u=0;u<c.length;u++)t.call(s,c[u])&&(i[c[u]]=s[c[u]])}}return i}},371426:(e,r,n)=>{n(862525);var t=n(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),r.Fragment=s("react.fragment")}var c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var t,s={},d=null,u=null;for(t in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(u=r.ref),r)i.call(r,t)&&!l.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:o,type:e,key:d,ref:u,props:s,_owner:c.current}}r.jsx=d,r.jsxs=d},541535:(e,r,n)=>{var t=n(862525),o=60103,s=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var c=60109,i=60110,l=60112;r.Suspense=60113;var d=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),s=a("react.portal"),r.Fragment=a("react.fragment"),r.StrictMode=a("react.strict_mode"),r.Profiler=a("react.profiler"),c=a("react.provider"),i=a("react.context"),l=a("react.forward_ref"),r.Suspense=a("react.suspense"),d=a("react.memo"),u=a("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function j(e,r,n){this.props=e,this.context=r,this.refs=m,this.updater=n||h}function x(){}function y(e,r,n){this.props=e,this.context=r,this.refs=m,this.updater=n||h}j.prototype.isReactComponent={},j.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,r,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=j.prototype;var b=y.prototype=new x;b.constructor=y,t(b,j.prototype),b.isPureReactComponent=!0;var g={current:null},k=Object.prototype.hasOwnProperty,v={key:!0,ref:!0,__self:!0,__source:!0};function _(e,r,n){var t,s={},c=null,i=null;if(null!=r)for(t in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(c=""+r.key),r)k.call(r,t)&&!v.hasOwnProperty(t)&&(s[t]=r[t]);var l=arguments.length-2;if(1===l)s.children=n;else if(1<l){for(var d=Array(l),u=0;u<l;u++)d[u]=arguments[u+2];s.children=d}if(e&&e.defaultProps)for(t in l=e.defaultProps)void 0===s[t]&&(s[t]=l[t]);return{$$typeof:o,type:e,key:c,ref:i,props:s,_owner:g.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function R(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function S(e,r,n,t,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case s:l=!0}}if(l)return c=c(l=e),e=""===t?"."+R(l,0):t,Array.isArray(c)?(n="",null!=e&&(n=e.replace(w,"$&/")+"/"),S(c,r,n,"",(function(e){return e}))):null!=c&&(O(c)&&(c=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,n+(!c.key||l&&l.key===c.key?"":(""+c.key).replace(w,"$&/")+"/")+e)),r.push(c)),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var d=0;d<e.length;d++){var u=t+R(i=e[d],d);l+=S(i,r,n,u,c)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),d=0;!(i=e.next()).done;)l+=S(i=i.value,r,n,u=t+R(i,d++),c);else if("object"===i)throw r=""+e,Error(p(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return l}function E(e,r,n){if(null==e)return e;var t=[],o=0;return S(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function C(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function $(){var e=P.current;if(null===e)throw Error(p(321));return e}var M={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:t};r.Children={map:E,forEach:function(e,r,n){E(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return E(e,(function(){r++})),r},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(p(143));return e}},r.Component=j,r.PureComponent=y,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,r.cloneElement=function(e,r,n){if(null==e)throw Error(p(267,e));var s=t({},e.props),c=e.key,i=e.ref,l=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,l=g.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var d=e.type.defaultProps;for(u in r)k.call(r,u)&&!v.hasOwnProperty(u)&&(s[u]=void 0===r[u]&&void 0!==d?d[u]:r[u])}var u=arguments.length-2;if(1===u)s.children=n;else if(1<u){d=Array(u);for(var a=0;a<u;a++)d[a]=arguments[a+2];s.children=d}return{$$typeof:o,type:e.type,key:c,ref:i,props:s,_owner:l}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:i,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=_,r.createFactory=function(e){var r=_.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:l,render:e}},r.isValidElement=O,r.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:C}},r.memo=function(e,r){return{$$typeof:d,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,n){return $().useImperativeHandle(e,r,n)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,n){return $().useReducer(e,r,n)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Zo:()=>i,ah:()=>s});var t=n(667294);const o=t.createContext({});function s(e){const r=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function i({components:e,children:r,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||c:s(e),t.createElement(o.Provider,{value:i},r)}}}]);