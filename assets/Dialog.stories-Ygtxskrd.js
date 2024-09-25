import{j as k,m as E,z as m,A as g,T as A,E as S,o as y,G as l,a as F,b as e,r as u,t as h,B as v,d as L}from"./vue.esm-bundler-DUmJvHEW.js";import{B as r}from"./Button-a1GKQvBV.js";import"./index-Bb4qSo10.js";import"./Icon-lJEXtgpb.js";import"./iframe-BXJEXoxe.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const c=k(!1),w=()=>({showDialogStatus:c,showDialog:()=>{c.value=!0},closeDialog:()=>{c.value=!1}}),V={class:"dialog-wrapper"},z={class:"dialog-container"},T={class:"dialog-header"},N={class:"dialog-title"},R={class:"dialog-body"},$={class:"dialog-message"},j={class:"dialog-footer"},I={__name:"Dialog",props:{themeColor:{type:String,default:"primary",validator:a=>["primary","secondary","tertiary","success","warning","error","info"].includes(a)},title:{type:String,default:"Dialog title"},message:{type:String,default:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "}},setup(a){const o=w(),s=a;return(d,t)=>(y(),E(S,{to:"#dialog"},[m(A,{name:"dialog"},{default:g(()=>[l(o).showDialogStatus.value?(y(),F("div",{key:0,class:"dialog-mask",onClick:t[2]||(t[2]=D=>l(o).closeDialog())},[e("div",V,[e("div",z,[e("div",T,[u(d.$slots,"dialogHeader",{},()=>[e("h3",N,h(s.title),1)])]),e("div",R,[u(d.$slots,"dialogBody",{},()=>[e("p",$,h(s.message),1)])]),e("div",j,[u(d.$slots,"dialogFooter",{},()=>[m(r,{themeColor:s.themeColor,variant:"text",onClick:t[0]||(t[0]=D=>l(o).closeDialog())},{default:g(()=>[v(" Cancel")]),_:1},8,["themeColor"]),m(r,{themeColor:s.themeColor,onClick:t[1]||(t[1]=D=>l(o).closeDialog())},{default:g(()=>[v("Enable")]),_:1},8,["themeColor"])])])])])])):L("",!0)]),_:3})]))}},p=I;I.__docgenInfo={exportName:"default",displayName:"Dialog",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"'Dialog title'"}},{name:"message",type:{name:"string"},defaultValue:{func:!1,value:"'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\\'s standard '"}}],slots:[{name:"dialogHeader"},{name:"dialogBody"},{name:"dialogFooter"}],sourceFiles:["/Users/jony_worker/Documents/90_外部檔案/DED-WDS_VUE/libs/src/ui/element/Dialog/Dialog.vue"]};const K={components:{Dialog:p},title:"Design System/Dialog",component:p,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},title:{description:"tooltip標題",control:{type:"text"}},message:{description:"tooltip說明文字",control:{type:"text"}}},parameters:{docs:{title:"Dialog",description:{component:"Dialog組件的呈現及說明。"}}}},n={name:"Dialog基礎樣式",render:()=>({components:{Button:r},template:`
                <div class="dialog-wrapper">
                    <div class="dialog-container">

                        <div class="dialog-header">
                            <slot name="dialog-header">
                                <h3 class="dialog-title">Dialog Title</h3>
                            </slot>
                        </div>

                        <div class="dialog-body">
                            <slot name="dialog-body">
                                <p class="dialog-message">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                            </slot>
                        </div>

                        <div class="dialog-footer">
                            <slot name="dialog-footer">
                                <Button themeColor="primary" variant="text">
                                    Cancel
                                </Button>
                                <Button themeColor="primary" >Enable</Button>
                            </slot>
                        </div>
                    </div>
                </div>
        `}),parameters:{controls:{}}},i={name:"Dialog自訂按鈕",render:()=>({components:{Dialog:p,Button:r},setup(){const a=w(),o=k({title:"Replace Image?",message:'A file named "example.png" already exist! Do you what to replace it?'});return{dialog:a,dialogData:o}},template:`
            <div id="dialog"></div>
            <Dialog
                :title="dialogData.title"
                :message="dialogData.message">
                <template #dialogFooter>
                    <Button themeColor="error" size="medium" variant="text" @click="dialog.closeDialog()">Cancel</Button>
                    <Button themeColor="error" size="medium" @click="dialog.closeDialog()">Replace</Button>
                </template>
            </Dialog>
            <Button themeColor="error" 
                    size="medium" 
                    prefix="replace" 
                    @click="dialog.showDialog">
                Replace Image
            </Button>
        `}),parameters:{controls:{}}};var f,C,B;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Dialog基礎樣式",
  render: () => ({
    components: {
      Button
    },
    template: \`
                <div class="dialog-wrapper">
                    <div class="dialog-container">

                        <div class="dialog-header">
                            <slot name="dialog-header">
                                <h3 class="dialog-title">Dialog Title</h3>
                            </slot>
                        </div>

                        <div class="dialog-body">
                            <slot name="dialog-body">
                                <p class="dialog-message">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                            </slot>
                        </div>

                        <div class="dialog-footer">
                            <slot name="dialog-footer">
                                <Button themeColor="primary" variant="text">
                                    Cancel
                                </Button>
                                <Button themeColor="primary" >Enable</Button>
                            </slot>
                        </div>
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
}`,...(B=(C=n.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var _,x,b;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Dialog自訂按鈕",
  render: () => ({
    components: {
      Dialog,
      Button
    },
    setup() {
      const dialog = useDialog();
      const dialogData = ref({
        title: 'Replace Image?',
        message: 'A file named \\"example.png\\" already exist! Do you what to replace it?'
      });
      return {
        dialog,
        dialogData
      };
    },
    template: \`
            <div id="dialog"></div>
            <Dialog
                :title="dialogData.title"
                :message="dialogData.message">
                <template #dialogFooter>
                    <Button themeColor="error" size="medium" variant="text" @click="dialog.closeDialog()">Cancel</Button>
                    <Button themeColor="error" size="medium" @click="dialog.closeDialog()">Replace</Button>
                </template>
            </Dialog>
            <Button themeColor="error" 
                    size="medium" 
                    prefix="replace" 
                    @click="dialog.showDialog">
                Replace Image
            </Button>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(b=(x=i.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const M=["DefaultDialog","CustomDialog"];export{i as CustomDialog,n as DefaultDialog,M as __namedExportsOrder,K as default};
