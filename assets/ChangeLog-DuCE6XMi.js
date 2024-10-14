import{af as n,ag as a,ah as s}from"./index-BGkFdXV7.js";import{u as t}from"./index-fW_T8Twt.js";import"./iframe-Cuot_jaF.js";import"../sb-preview/runtime.js";import"./index-i39XpuQg.js";import"./index-DrFu-skq.js";const i=`## V1.0.0 (2024-10-14)\r
\r
✨ New Feature\r
\r
- Add Button Story\r
\r
---\r
\r
🆙update\r
\r
- Dialog.vue, Dialog.stories.js\r
- Breadcrumb.stories.js 資料修改深度監聽問題\r
- Toast.stories.js 調動元件顯示順序\r
- Radio RadioGroup 拆成 radio, radioGroup 兩個元件分別顯示\r
- Checkbox 拆成 Checkbox, CheckboxGroup 兩個元件\r
- Textarea 修改 limit 設為 0 表示不限制字符數\r
- Badge 修改 props 參數名稱 label 成 value，修飾 value, maxValue 說明文字，避免混淆\r
\r
---\r
\r
🪲 Bug Fix\r
\r
- 解除安裝 storybook plugin & pnpm\r
- preview.js 創建 toastContainer, dialogContainer 容器，解決彈窗無法顯示於最上層問題\r
`;function e(r){const o={h1:"h1",...t(),...r.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,`
`,n.jsx(a,{title:"Changelog"}),`
`,n.jsx(o.h1,{id:"changelog",children:"Changelog"}),`
`,n.jsx(s,{children:i})]})}function x(r={}){const{wrapper:o}={...t(),...r.components};return o?n.jsx(o,{...r,children:n.jsx(e,{...r})}):e(r)}export{x as default};
