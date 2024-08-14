import{ag as f,al as x,am as _}from"./index-C2uE_dgQ.js";import{u as l}from"./index-DQ7xRXxO.js";import"./iframe-nS227CPp.js";import"../sb-preview/runtime.js";import"./index-TAVom-gR.js";import"./index-DrFu-skq.js";var p={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=f,y=Symbol.for("react.element"),h=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,g=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,i){var t,o={},a=null,u=null;i!==void 0&&(a=""+i),n.key!==void 0&&(a=""+n.key),n.ref!==void 0&&(u=n.ref);for(t in n)j.call(n,t)&&!v.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps,n)o[t]===void 0&&(o[t]=n[t]);return{$$typeof:y,type:e,key:a,ref:u,props:o,_owner:g.current}}s.Fragment=h;s.jsx=c;s.jsxs=c;p.exports=s;var r=p.exports;const R=`## V1.0.0 (Mon July 26 2024)

✨ New Feature

- Add Button Story

---

🪲 Bug Fix

- Fix Button Hover Status
`;function m(e){const n={h1:"h1",...l(),...e.components};return r.jsxs(r.Fragment,{children:[`
`,`
`,`
`,r.jsx(x,{title:"Changelog"}),`
`,r.jsx(n.h1,{id:"changelog",children:"Changelog"}),`
`,r.jsx(_,{children:R})]})}function k(e={}){const{wrapper:n}={...l(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(m,{...e})}):m(e)}export{k as default};
