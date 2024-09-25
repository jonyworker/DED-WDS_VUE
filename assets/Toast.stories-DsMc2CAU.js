import{j as h,w as k,H as x,m as r,b as a,z as _,n as f,d as l,t as y,E as D,o as i}from"./vue.esm-bundler-DUmJvHEW.js";import{I as o}from"./Icon-lJEXtgpb.js";import{B as H}from"./Button-a1GKQvBV.js";import"./iframe-BXJEXoxe.js";import"../sb-preview/runtime.js";import"./index-Bb4qSo10.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const m=h([]),E=s=>{m.value=m.value.filter(t=>t.id!==s)},M=s=>{const t=Date.now(),n={...s,id:t};m.value.push(n),setTimeout(()=>{E(t)},s.life||3e3)},W=()=>({add:M,remove:E,toasts:m}),V={class:"message"},F={class:"description"},z={__name:"Toast",props:{themeColor:{type:String,default:"primary",validator:s=>["primary","secondary","tertiary","success","warning","error","info"].includes(s)},severity:{type:String,default:"success",validator:s=>["success","warning","error","info"].includes(s)},title:{type:String,required:!0},message:{type:String,required:!0},duration:{type:Number,default:3e3},id:{type:String},show:{type:Boolean,default:!1}},emits:["close"],setup(s,{emit:t}){const n=t,e=s,v=()=>{n("close")},g=h(e.show);let c=h(null);const S=()=>{g.value=!0,c=setTimeout(()=>{g.value=!1,n("update:show")},3e3)};return k(()=>e.show,w=>{w&&S()}),x(()=>{c&&clearTimeout(c)}),(w,N)=>(i(),r(D,{to:"#toast"},[a("div",{class:f(["toast",`toast-border-${e.themeColor}`])},[a("button",{class:"close-button",onClick:v},[_(o,{name:"close",size:"20"})]),a("p",V,[a("span",{class:f(["icon-wrapper",`toast-${e.themeColor}`])},[e.severity==="success"?(i(),r(o,{key:0,name:"check",size:"14"})):l("",!0),e.severity==="error"?(i(),r(o,{key:1,name:"close",size:"14"})):l("",!0),e.severity==="warning"?(i(),r(o,{key:2,name:"exclamation",size:"14"})):l("",!0),e.severity==="info"?(i(),r(o,{key:3,name:"info",size:"16"})):l("",!0)],2),a("span",null,y(e.title),1)]),a("p",F,y(e.message),1)],2)]))}},d=z;z.__docgenInfo={exportName:"default",displayName:"Toast",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"severity",type:{name:"string"},defaultValue:{func:!1,value:"'success'"},values:["success","warning","error","info"]},{name:"title",type:{name:"string"},required:!0},{name:"message",type:{name:"string"},required:!0},{name:"duration",type:{name:"number"},defaultValue:{func:!1,value:"3000"}},{name:"id",type:{name:"string"}},{name:"show",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"close"}],sourceFiles:["/Users/jony_worker/Documents/90_外部檔案/DED-WDS_VUE/libs/src/ui/element/Toast/Toast.vue"]};const K={components:{Icon:o,Toast:d},title:"Design System/Toast",component:d,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},severity:{description:"tooltip嚴重程度",control:{type:"select"},options:["success","warning","error","info"]},title:{description:"tooltip標題",control:{type:"text"}},message:{description:"tooltip說明文字",control:{type:"text"}},duration:{description:"tooltip顯示時間",control:{type:"number"}},id:{description:"tooltip id(多個顯示時)",control:{type:"text"}},show:{description:"tooltip 顯示控制)",control:{type:"boolean"}}},parameters:{docs:{title:"Toast",description:{component:"Toast組件的呈現及說明。"}}}},u={name:"Toast種類樣式",render:()=>({components:{Toast:d,Icon:o},template:`
            <div style="width: 30rem; ">
                <div class="toast toast-border-success">
                    <!-- toast - 關閉按鈕 -->
                    <button class="close-button">
                        <Icon name="close" size="20"></Icon>
                    </button>
                    <!-- toast - 標題及說明文字 -->
                    <p class="message">
                    <span class="icon-wrapper toast-success">
                        <Icon name="check" size="14"></Icon>
                    </span>
                        <span>Success Message</span>
                    </p>
                    <p class="description">Hello, world! This is a toast message.</p>
                </div>
                
                <div class="toast toast-border-error">
                    <!-- toast - 關閉按鈕 -->
                    <button class="close-button">
                        <Icon name="close" size="20"></Icon>
                    </button>
                    <!-- toast - 標題及說明文字 -->
                    <p class="message">
                    <span class="icon-wrapper toast-error">
                        <Icon name="close" size="14"></Icon>
                    </span>
                        <span>Error Message</span>
                    </p>
                    <p class="description">Hello, world! This is a toast message.</p>
                </div>

                <div class="toast toast-border-warning">
                    <!-- toast - 關閉按鈕 -->
                    <button class="close-button">
                        <Icon name="close" size="20"></Icon>
                    </button>
                    <!-- toast - 標題及說明文字 -->
                    <p class="message">
                    <span class="icon-wrapper toast-warning">
                        <Icon name="exclamation" size="14"></Icon>
                    </span>
                        <span>Exclamation Message</span>
                    </p>
                    <p class="description">Hello, world! This is a toast message.</p>
                </div>

                <div class="toast toast-border-info">
                    <!-- toast - 關閉按鈕 -->
                    <button class="close-button">
                        <Icon name="close" size="20"></Icon>
                    </button>
                    <!-- toast - 標題及說明文字 -->
                    <p class="message">
                    <span class="icon-wrapper toast-info">
                        <Icon name="info" size="16"></Icon>
                    </span>
                        <span>Info Message</span>
                    </p>
                    <p class="description">Hello, world! This is a toast message.</p>
                </div>
            </div>
        `}),parameters:{controls:{}}},p={name:"Toast觸發器 ",render:()=>({components:{Toast:d,Button:H},setup(){const{add:s,toasts:t,remove:n}=W();return{toasts:t,remove:n,showSuccess:()=>{s({themeColor:"success",severity:"success",title:"Success Message",message:"Hello, world! This is a toast message.",life:3e3})},showError:()=>{s({themeColor:"error",severity:"error",title:"Error Message",message:"Hello, world! This is a toast message.",life:3e3})},showWarning:()=>{s({themeColor:"warning",severity:"warning",title:"Warning Message",message:"Hello, world! This is a toast message.",life:3e3})},showInfo:()=>{s({themeColor:"info",severity:"info",title:"Info Message",message:"Hello, world! This is a toast message.",life:3e3})}}},template:`
            <div id="toast" class="toast-container"></div>
            <Toast
                v-for="toast in toasts"
                :key="toast.id"
                :themeColor="toast.themeColor"
                :severity="toast.severity"
                :title="toast.title"
                :message="toast.message"
                @close="remove(toast.id)"
            ></Toast>

            <div style="display:flex; flex-direction: column; width: fit-content ;gap: 16px;">
                <Button themeColor="success" variant="outlined" @click="showSuccess">Success Toast</Button>
                <Button themeColor="error" variant="outlined" @click="showError">Error Toast</Button>
                <Button themeColor="warning" variant="outlined" @click="showWarning">Warning Toast</Button>
                <Button themeColor="info" variant="outlined" @click="showInfo">Info Toast</Button>
            </div>
        `}),parameters:{controls:{}}};var T,I,C;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Toast種類樣式",
  render: () => ({
    components: {
      Toast,
      Icon
    },
    template: \`
            <div style="width: 30rem; ">
                <div class="toast toast-border-success">
                    <!-- toast - 關閉按鈕 -->
                    <button class="close-button">
                        <Icon name="close" size="20"></Icon>
                    </button>
                    <!-- toast - 標題及說明文字 -->
                    <p class="message">
                    <span class="icon-wrapper toast-success">
                        <Icon name="check" size="14"></Icon>
                    </span>
                        <span>Success Message</span>
                    </p>
                    <p class="description">Hello, world! This is a toast message.</p>
                </div>
                
                <div class="toast toast-border-error">
                    <!-- toast - 關閉按鈕 -->
                    <button class="close-button">
                        <Icon name="close" size="20"></Icon>
                    </button>
                    <!-- toast - 標題及說明文字 -->
                    <p class="message">
                    <span class="icon-wrapper toast-error">
                        <Icon name="close" size="14"></Icon>
                    </span>
                        <span>Error Message</span>
                    </p>
                    <p class="description">Hello, world! This is a toast message.</p>
                </div>

                <div class="toast toast-border-warning">
                    <!-- toast - 關閉按鈕 -->
                    <button class="close-button">
                        <Icon name="close" size="20"></Icon>
                    </button>
                    <!-- toast - 標題及說明文字 -->
                    <p class="message">
                    <span class="icon-wrapper toast-warning">
                        <Icon name="exclamation" size="14"></Icon>
                    </span>
                        <span>Exclamation Message</span>
                    </p>
                    <p class="description">Hello, world! This is a toast message.</p>
                </div>

                <div class="toast toast-border-info">
                    <!-- toast - 關閉按鈕 -->
                    <button class="close-button">
                        <Icon name="close" size="20"></Icon>
                    </button>
                    <!-- toast - 標題及說明文字 -->
                    <p class="message">
                    <span class="icon-wrapper toast-info">
                        <Icon name="info" size="16"></Icon>
                    </span>
                        <span>Info Message</span>
                    </p>
                    <p class="description">Hello, world! This is a toast message.</p>
                </div>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(C=(I=u.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var b,B,A;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Toast觸發器 ",
  render: () => ({
    components: {
      Toast,
      Button
    },
    setup() {
      const {
        add,
        toasts,
        remove
      } = useToast();
      const showSuccess = () => {
        add({
          themeColor: 'success',
          severity: 'success',
          title: 'Success Message',
          message: 'Hello, world! This is a toast message.',
          life: 3000
        });
      };
      const showError = () => {
        add({
          themeColor: 'error',
          severity: 'error',
          title: 'Error Message',
          message: 'Hello, world! This is a toast message.',
          life: 3000
        });
      };
      const showWarning = () => {
        add({
          themeColor: 'warning',
          severity: 'warning',
          title: 'Warning Message',
          message: 'Hello, world! This is a toast message.',
          life: 3000
        });
      };
      const showInfo = () => {
        add({
          themeColor: 'info',
          severity: 'info',
          title: 'Info Message',
          message: 'Hello, world! This is a toast message.',
          life: 3000
        });
      };
      return {
        toasts,
        remove,
        showSuccess,
        showError,
        showWarning,
        showInfo
      };
    },
    template: \`
            <div id="toast" class="toast-container"></div>
            <Toast
                v-for="toast in toasts"
                :key="toast.id"
                :themeColor="toast.themeColor"
                :severity="toast.severity"
                :title="toast.title"
                :message="toast.message"
                @close="remove(toast.id)"
            ></Toast>

            <div style="display:flex; flex-direction: column; width: fit-content ;gap: 16px;">
                <Button themeColor="success" variant="outlined" @click="showSuccess">Success Toast</Button>
                <Button themeColor="error" variant="outlined" @click="showError">Error Toast</Button>
                <Button themeColor="warning" variant="outlined" @click="showWarning">Warning Toast</Button>
                <Button themeColor="info" variant="outlined" @click="showInfo">Info Toast</Button>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(A=(B=p.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};const L=["DefaultToast","ToastControl"];export{u as DefaultToast,p as ToastControl,L as __namedExportsOrder,K as default};
