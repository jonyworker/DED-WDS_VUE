import{c as a,t as S,n as x,o as r,r as B,w as N,f as g,b,F as _,p as C,e as V,d as I}from"./vue.esm-bundler-Bm7qTojY.js";const w=["href"],p={__name:"BreadcrumbItem",props:{label:{type:String},href:{type:String},isCurrentPage:{type:Boolean}},setup(n){const t=n;return(s,u)=>(r(),a("a",{class:x(t.isCurrentPage?"breadcrumb-item-label":"breadcrumb-item-link"),href:t.href},S(t.label),11,w))}};p.__docgenInfo={exportName:"default",displayName:"BreadcrumbItem",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"href",type:{name:"string"}},{name:"isCurrentPage",type:{name:"boolean"}}],sourceFiles:["D:/98_測試/DED-WDS_VUE/libs/src/ui/element/Breadcrumb/BreadcrumbItem.vue"]};const $={class:"breadcrumb-container undefined"},M={class:"breadcrumb"},O={class:"breadcrumb-item"},U={key:0,class:"rest"},W={key:0,class:"rest-dropdown-menu"},j={class:"drop-item"},z=["href"],o={__name:"Breadcrumb",props:{items:{type:Array,default:()=>[]},label:{type:String},href:{type:String},isCurrentPage:{type:Boolean,default:!1}},setup(n){const t=n,s=B([...t.items]);N(()=>t.items,e=>{s.value=[...e]});const u=g(()=>{const e=s.value;return e.length>3?[e[0],{label:"...",href:"#"},...e.slice(-2)]:e}),f=g(()=>{const e=s.value;return e.length>3?e.slice(1,-2):[]});console.log("1st",u.value),console.log("2nd",f.value);const m=B(!1),A=()=>{m.value=!m.value};return(e,h)=>(r(),a("nav",$,[b("ul",M,[(r(!0),a(_,null,C(u.value,(d,P)=>(r(),a("li",O,[d.label==="..."?(r(),a("div",U,[b("span",{class:"rest-label",onClick:h[0]||(h[0]=i=>A())},"..."),m.value?(r(),a("ul",W,[(r(!0),a(_,null,C(f.value,i=>(r(),a("li",j,[b("a",{class:"drop-item-link",href:i.href},S(i.label),9,z)]))),256))])):V("",!0)])):(r(),I(p,{key:1,label:d.label,href:d.href,isCurrentPage:P===u.value.length-1},null,8,["label","href","isCurrentPage"]))]))),256))])]))}};o.__docgenInfo={exportName:"default",displayName:"Breadcrumb",description:"",tags:{},props:[{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"label",type:{name:"string"}},{name:"href",type:{name:"string"}},{name:"isCurrentPage",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["D:/98_測試/DED-WDS_VUE/libs/src/ui/element/Breadcrumb/Breadcrumb.vue"]};const T={title:"Design System/Breadcrumb",component:o,subcomponents:{BreadcrumbItem:p},tags:["autodocs"],argTypes:{items:{description:"用於顯示的 Breadcrumb 項目，應包含路徑及其名稱的對應關係",control:{type:"object"}}},parameters:{deepControls:{enabled:!0},docs:{title:"Breadcrumb",description:{component:"Breadcrumb 組件的呈現及說明。"}}}},l={name:"Breadcrumb 基礎樣式",args:{items:[{label:"首頁",href:"/"},{label:"第一層",href:"/1st"},{label:"當前頁"}]},render:n=>({components:{Breadcrumb:o},setup(){return{args:n}},template:`
            <Breadcrumb
                :items="args.items"
            ></Breadcrumb>
        `}),parameters:{controls:{include:["items"]}}},c={name:"Breadcrumb 多層次樣式",args:{items:[{label:"首頁",href:"/"},{label:"第一層",href:"/1st"},{label:"第二層",href:"/2nd"},{label:"第三層",href:"/3rd"},{label:"第四層",href:"/4th"},{label:"第五層",href:"/5th"},{label:"第六層",href:"/6th"},{label:"第七層",href:"/7th"},{label:"第八層",href:"/8th"},{label:"當前頁"}]},render:n=>({components:{Breadcrumb:o},setup(){return{args:n}},template:`
            <Breadcrumb
                :items="args.items"
            ></Breadcrumb>
        `}),parameters:{controls:{include:["items"]}}};var y,D,v;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Breadcrumb 基礎樣式",
  args: {
    items: [{
      label: "首頁",
      href: "/"
    }, {
      label: "第一層",
      href: "/1st"
    }, {
      label: "當前頁"
    }]
  },
  render: args => ({
    components: {
      Breadcrumb
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Breadcrumb
                :items="args.items"
            ></Breadcrumb>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['items']
    }
  }
}`,...(v=(D=l.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var E,F,k;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Breadcrumb 多層次樣式",
  args: {
    items: [{
      label: "首頁",
      href: "/"
    }, {
      label: "第一層",
      href: "/1st"
    }, {
      label: "第二層",
      href: "/2nd"
    }, {
      label: "第三層",
      href: "/3rd"
    }, {
      label: "第四層",
      href: "/4th"
    }, {
      label: "第五層",
      href: "/5th"
    }, {
      label: "第六層",
      href: "/6th"
    }, {
      label: "第七層",
      href: "/7th"
    }, {
      label: "第八層",
      href: "/8th"
    }, {
      label: "當前頁"
    }]
  },
  render: args => ({
    components: {
      Breadcrumb
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Breadcrumb
                :items="args.items"
            ></Breadcrumb>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['items']
    }
  }
}`,...(k=(F=c.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};const q=["BreadcrumbDefault","BreadcrumbMany"];export{l as BreadcrumbDefault,c as BreadcrumbMany,q as __namedExportsOrder,T as default};
