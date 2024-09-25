import{o as e,a,t as S,n as N,j as g,c as B,b,F as h,C as _,d as V,m as I}from"./vue.esm-bundler-DUmJvHEW.js";const U=["href"],A={__name:"BreadcrumbItem",props:{label:{type:String},href:{type:String},isCurrentPage:{type:Boolean}},setup(n){const t=n;return(s,u)=>(e(),a("a",{class:N(t.isCurrentPage?"breadcrumb-item-label":"breadcrumb-item-link"),href:t.href},S(t.label),11,U))}};A.__docgenInfo={exportName:"default",displayName:"BreadcrumbItem",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"href",type:{name:"string"}},{name:"isCurrentPage",type:{name:"boolean"}}],sourceFiles:["/Users/jony_worker/Documents/90_外部檔案/DED-WDS_VUE/libs/src/ui/element/Breadcrumb/BreadcrumbItem.vue"]};const j={class:"breadcrumb-container undefined"},w={class:"breadcrumb"},$={class:"breadcrumb-item"},q={key:0,class:"rest"},M={key:0,class:"rest-dropdown-menu"},O={class:"drop-item"},W=["href"],F={__name:"Breadcrumb",props:{breadcrumbData:{type:Array,required:!0,default:()=>[]},title:{type:String},href:{type:String}},setup(n){const s=g([...n.breadcrumbData]);console.log(s.value.length);const u=B(()=>{const r=s.value;return r.length>3?[r[0],{label:"...",href:"#"},...r.slice(-2)]:r}),i=B(()=>{const r=s.value;return r.length>3?r.slice(1,-2):[]});console.log("1st",u.value),console.log("2nd",i.value);const o=g(!1),x=()=>{o.value=!o.value};return(r,f)=>(e(),a("nav",j,[b("ul",w,[(e(!0),a(h,null,_(u.value,(m,P)=>(e(),a("li",$,[m.label==="..."?(e(),a("div",q,[b("span",{class:"rest-label",onClick:f[0]||(f[0]=d=>x())},"..."),o.value?(e(),a("ul",M,[(e(!0),a(h,null,_(i.value,d=>(e(),a("li",O,[b("a",{class:"drop-item-link",href:d.href},S(d.label),9,W)]))),256))])):V("",!0)])):(e(),I(A,{key:1,label:m.label,href:m.href,isCurrentPage:P===u.value.length-1},null,8,["label","href","isCurrentPage"]))]))),256))])]))}},p=F;F.__docgenInfo={exportName:"default",displayName:"Breadcrumb",description:"",tags:{},props:[{name:"breadcrumbData",type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"title",type:{name:"string"}},{name:"href",type:{name:"string"}}],sourceFiles:["/Users/jony_worker/Documents/90_外部檔案/DED-WDS_VUE/libs/src/ui/element/Breadcrumb/Breadcrumb.vue"]};const L={title:"Design System/Breadcrumb",component:p,tags:["autodocs"],argTypes:{breadcrumbData:{description:"Breadcrumb資料接口",control:{type:"text"}}},parameters:{docs:{title:"Breadcrumb",description:{component:"Breadcrumb組件的呈現及說明。"}}}},l={name:"Breadcrumb基礎樣式",args:{breadcrumbData:[{label:"首頁",href:"/"},{label:"第一層",href:"/1st"},{label:"當前頁"}]},render:n=>({components:{Breadcrumb:p},setup(){return{args:n}},template:`
            <Breadcrumb
                            :breadcrumbData="args.breadcrumbData"
                        ></Breadcrumb>
        `}),parameters:{controls:{}}},c={name:"Breadcrumb多資料層表示",args:{breadcrumbData:[{label:"首頁",href:"/"},{label:"第一層",href:"/1st"},{label:"第二層",href:"/2nd"},{label:"第三層",href:"/3rd"},{label:"第n層",href:"/nPages"},{label:"當前頁"}]},render:n=>({components:{Breadcrumb:p},setup(){return{args:n}},template:`
            <Breadcrumb
                            :breadcrumbData="args.breadcrumbData"
                        ></Breadcrumb>
        `}),parameters:{controls:{}}};var D,y,C;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Breadcrumb基礎樣式",
  args: {
    breadcrumbData: [{
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
                            :breadcrumbData="args.breadcrumbData"
                        ></Breadcrumb>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(C=(y=l.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var v,E,k;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Breadcrumb多資料層表示",
  args: {
    breadcrumbData: [{
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
      label: "第n層",
      href: "/nPages"
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
                            :breadcrumbData="args.breadcrumbData"
                        ></Breadcrumb>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(k=(E=c.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};const T=["BreadcrumbDefault","BreadcrumbMany"];export{l as BreadcrumbDefault,c as BreadcrumbMany,T as __namedExportsOrder,L as default};
