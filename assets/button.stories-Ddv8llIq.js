import{v as D}from"./v4-CQkTLCs1.js";import{d as R,o as S,b as B,e as w,n as V,u as I}from"./vue.esm-bundler-DO_cAfky.js";const{addons:P}=__STORYBOOK_MODULE_PREVIEW_API__,{global:m}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:k}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var T="storybook/actions",A=`${T}/action-event`,j={depth:10,clearOnStoryChange:!0,limit:50},y=(t,e)=>{let n=Object.getPrototypeOf(t);return!n||e(n)?n:y(n,e)},C=t=>!!(typeof t=="object"&&t&&y(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),$=t=>{if(C(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let n=Object.getOwnPropertyDescriptor(e,"view"),o=n==null?void 0:n.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...n,value:Object.create(o.constructor.prototype)}),e}return t},W=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?D():Date.now().toString(36)+Math.random().toString(36).substring(2);function U(t,e={}){let n={...j,...e},o=function(...s){var l,p;if(e.implicit){let u=(l="__STORYBOOK_PREVIEW__"in m?m.__STORYBOOK_PREVIEW__:void 0)==null?void 0:l.storyRenders.find(r=>r.phase==="playing"||r.phase==="rendering");if(u){let r=!((p=window==null?void 0:window.FEATURES)!=null&&p.disallowImplicitActionsInRenderV8),d=new k({phase:u.phase,name:t,deprecated:r});if(r)console.warn(d);else throw d}}let O=P.getChannel(),E=W(),h=5,c=s.map($),v=s.length>1?c:c[0],b={id:E,count:0,data:{name:t,args:v},options:{...n,maxDepth:h+(n.depth||3),allowFunction:n.allowFunction||!1}};O.emit(A,b)};return o.isAction=!0,o.implicit=e.implicit,o}const K=(t,e)=>`button-${t} button-${t}-${e}`,i=R({__name:"button",props:{variant:{default:"contained"},theme:{default:"primary"},content:{default:"送出"}},emits:["click"],setup(t){return(e,n)=>(S(),B("button",{class:V(`button ${I(K)(e.variant,e.theme)}`),onClick:n[0]||(n[0]=o=>e.$emit("click","點擊事件"))},[w(e.$slots,"default")],2))}});i.__docgenInfo={exportName:"default",displayName:"button",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'contained'"}},{name:"theme",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"content",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'送出'"}}],events:[{name:"click",type:{names:["string"]},description:"點擊事件"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/button/button.vue"]};const Y={component:i,title:"Design System/Sample/Button",tags:["autodocs"],argTypes:{variant:{description:"按鈕樣式",control:{type:"radio"},options:["contained","outlined","text"]},theme:{description:"按鈕主題",control:{type:"select"},options:["primary","success","warning","danger"]},content:{description:"按鈕內容",control:{type:"text"}}},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}}}},a={render:t=>({components:{Button:i},setup(){return{args:t}},template:'<Button v-bind="args">{{args.content}}</Button>'}),args:{variant:"contained",theme:"primary",content:"送出",onClick:t=>U("click")(t)}};var f,_,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">{{args.content}}</Button>'
  }),
  args: {
    variant: 'contained',
    theme: 'primary',
    content: '送出',
    onClick: e => action('click')(e)
  }
}`,...(g=(_=a.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const z=["Primary"];export{a as Primary,z as __namedExportsOrder,Y as default};
