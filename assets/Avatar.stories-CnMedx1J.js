import{o as s,a as r,z as c,n as l,d as _,b as u,m as K,t as f,G as R,r as X,F as x,C as D,c as z,j as aa,I as ea,A as sa}from"./vue.esm-bundler-DUmJvHEW.js";import{I as ra}from"./Image-Dq9GY72Q.js";import{I as Y}from"./Icon-lJEXtgpb.js";import"./index-Bb4qSo10.js";import"./iframe-BXJEXoxe.js";import"../sb-preview/runtime.js";const T={__name:"AvatarStatus",props:{avatarSize:{type:String,validator:a=>["xsmall","small","medium","large"].includes(a)},avatarStatus:{type:String,default:"default",validator:a=>["default","online","idle","busy","offline"].includes(a)}},setup(a){const e=a;return(n,t)=>e.avatarStatus!=="default"?(s(),r("div",{key:0,class:l(["avatar-icon",`avatar-icon-${e.avatarSize}`,`avatar-icon-${e.avatarStatus}`])},[c(Y,{name:e.avatarStatus},null,8,["name"])],2)):_("",!0)}};T.__docgenInfo={exportName:"default",displayName:"AvatarStatus",description:"",tags:{},props:[{name:"avatarSize",type:{name:"string"},values:["xsmall","small","medium","large"]},{name:"avatarStatus",type:{name:"string"},defaultValue:{func:!1,value:'"default"'},values:["default","online","idle","busy","offline"]}],sourceFiles:["/Users/jony_worker/Documents/90_外部檔案/DED-WDS_VUE/libs/src/ui/element/Avatar/AvatarStatus.vue"]};const ta=(a,e)=>{let n=0,t="";return a.split("").forEach(g=>{/^[A-Z]+$/.test(g)&&n<2&&(n++,t=t+g)}),n<2?a.slice(0,e).toUpperCase():t},Z={__name:"Avatar",props:{size:{type:String,default:"large",validator:a=>["xsmall","small","medium","large"].includes(a)},shape:{type:String,default:"circle",validator:a=>["circle","square"].includes(a)},customClass:{type:String,default:""},imageSrc:{type:String},imageAlt:{type:String,default:"avatar image"},username:{type:String},status:{type:String,validator:a=>["default","online","idle","busy","offline"].includes(a)}},setup(a){const e=a;return(n,t)=>(s(),r("div",{class:l(["avatar-container",`avatar-container-${e.size}`])},[u("div",{class:l(["avatar",`avatar-${e.shape}`])},[e.imageSrc?(s(),K(ra,{key:0,src:e.imageSrc,alt:e.imageAlt,ratio:"11",objectFit:"cover"},null,8,["src","alt"])):(s(),r("span",{key:1,class:l(["avatar-text",`text-${e.size}`])},f(R(ta)(e.username,2)),3))],2),c(T,{avatarStatus:e.status,avatarSize:e.size},null,8,["avatarStatus","avatarSize"])],2))}},m=Z;Z.__docgenInfo={exportName:"default",displayName:"Avatar",description:"",tags:{},props:[{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"large"'},values:["xsmall","small","medium","large"]},{name:"shape",type:{name:"string"},defaultValue:{func:!1,value:'"circle"'},values:["circle","square"]},{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"imageSrc",type:{name:"string"}},{name:"imageAlt",type:{name:"string"},defaultValue:{func:!1,value:"'avatar image'"}},{name:"username",type:{name:"string"}},{name:"status",type:{name:"string"},values:["default","online","idle","busy","offline"]}],sourceFiles:["/Users/jony_worker/Documents/90_外部檔案/DED-WDS_VUE/libs/src/ui/element/Avatar/Avatar.vue"]};const na={class:"menu-item"},ia={style:{"margin-right":"auto"}},H={__name:"Menu",props:{menuData:{type:Array},limit:{type:Number,default:1},customClass:{type:String,default:""}},setup(a){return(e,n)=>(s(),r("ul",{class:l(["menu",a.customClass])},[e.$slots.default?X(e.$slots,"default",{key:0}):(s(!0),r(x,{key:1},D(a.menuData,t=>(s(),r("li",na,[u("div",ia,f(t.userName),1),c(Y,{name:"arrow_down",size:"24"})]))),256))],2))}};H.__docgenInfo={exportName:"default",displayName:"Menu",description:"",tags:{},props:[{name:"menuData",type:{name:"array"}},{name:"limit",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/Users/jony_worker/Documents/90_外部檔案/DED-WDS_VUE/libs/src/ui/element/Menu/Menu.vue"]};const C=(a,e)=>{const n=a.slice(0,e),t=a.slice(e);return{currList:n,restList:t}},la={class:"avatar-group"},ma={key:0,class:"rest-container"},ua={class:"text-large"},ga={key:0,class:"rest-container-menu"},ca={style:{"margin-right":"auto"}},P={__name:"AvatarGroup",props:{avatarsData:{type:Array,required:!0},size:{type:String,default:"large",validator:a=>["xsmall","small","medium","large"].includes(a)},shape:{type:String,default:"circle",validator:a=>["circle","square"].includes(a)},customClass:{type:String,default:""},limit:{type:Number}},setup(a){const e=a,n=z(()=>{const y=e.avatarsData.length-e.limit;return y>=99?99:y}),t=z(()=>C(e.avatarsData,e.limit).currList),g=z(()=>C(e.avatarsData,e.limit).restList),h=aa(!1),Q=()=>{h.value=!h.value};return(y,b)=>(s(),r("div",la,[(s(!0),r(x,null,D(t.value,i=>(s(),K(m,{size:e.size,shape:e.shape,imageSrc:i.imageSrc,imageAlt:"alt text",username:i.userName},null,8,["size","shape","imageSrc","username"]))),256)),g.value.length>0?(s(),r("div",ma,[u("div",ua,[u("button",{class:l(["avatar-container",`avatar-container-${e.size}`]),onClick:b[0]||(b[0]=ea(i=>Q(),["prevent"])),style:{cursor:"pointer"}},[u("div",{class:l(["avatar",`avatar-${e.shape}`])},[u("span",{class:l(["avatar-text",`text-${e.size}`])},f(`+${n.value}`),3)],2)],2)]),h.value?(s(),r("div",ga,[c(H,null,{default:sa(()=>[(s(!0),r(x,null,D(g.value,i=>(s(),r("li",{class:"menu-item",key:i.userName},[c(m,{size:"xsmall",shape:"circle",imageSrc:i.imageSrc,username:i.userName,imageAlt:"alt text"},null,8,["imageSrc","username"]),u("div",ca,f(i.userName),1)]))),128))]),_:1})])):_("",!0)])):_("",!0)]))}};P.__docgenInfo={exportName:"default",displayName:"AvatarGroup",description:"",tags:{},props:[{name:"avatarsData",type:{name:"array"},required:!0},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"large"'},values:["xsmall","small","medium","large"]},{name:"shape",type:{name:"string"},defaultValue:{func:!1,value:'"circle"'},values:["circle","square"]},{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"limit",type:{name:"number"}}],sourceFiles:["/Users/jony_worker/Documents/90_外部檔案/DED-WDS_VUE/libs/src/ui/element/Avatar/AvatarGroup.vue"]};const fa={title:"Design System/Avatar",component:m,tags:["autodocs"],argTypes:{size:{description:"Avatar尺寸",control:{type:"select"},options:["xsmall","small","medium","large"]},shape:{description:"Avatar外型",control:{type:"select"},options:["circle","square"]},customClass:{description:"客製化樣式",control:{type:"text"}},imageSrc:{description:"Avatar圖片連結",control:{type:"text"}},imageAlt:{description:"Avatar圖片替代文字",control:{type:"text"}},username:{description:"Avatar使用者名稱，沒圖片時顯示",control:{type:"text"}},status:{description:"Avatar狀態",control:{type:"select"},options:["default","online","idle","busy","offline"]},limit:{description:"AvatarGroup 中控制 Avatar 顯示數量",control:{type:"number"}}},parameters:{docs:{title:"Avatar頭像",description:{component:"Avatar組件的呈現及說明。"}}}},o={name:"基礎樣式",args:{size:"large",shape:"circle",imageSrc:"libs/src/assets/fakeImg/avatar_01.jpg",imageAlt:"alt text",username:"JonyWu",status:"offline"},render:a=>({components:{Avatar:m},setup(){return{args:a}},template:`
            <Avatar
                :size="args.size"
                :shape="args.shape"
                :imageSrc="args.imageSrc"
                :imageAlt="args.imageAlt"
                :username="args.username"
                :status="args.status"
            ></Avatar>
        `}),parameters:{controls:{}}},p={name:"Avatar外型",args:{size:"large",imageSrc:"libs/src/assets/fakeImg/avatar_01.jpg",imageAlt:"alt text",username:"JonyWu"},render:a=>({components:{Avatar:m},setup(){return{args:a}},template:`
            <div style="display:flex; gap: 16px">
                <Avatar
                    :size="args.size"
                    shape="circle"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
                <Avatar
                    :size="args.size"
                    shape="square"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
            </div>
        `}),parameters:{controls:{}}},v={name:"Avatar狀態",args:{size:"large",shape:"circle",imageSrc:"libs/src/assets/fakeImg/avatar_01.jpg",imageAlt:"alt text",username:"JonyWu"},render:a=>({components:{Avatar:m},setup(){return{args:a}},template:`
            <div style="display:flex; gap: 16px">
                <Avatar
                    :size="args.size"
                    :shape="args.shape"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                    status="default"
                ></Avatar>
                <Avatar
                    :size="args.size"
                    :shape="args.shape"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                    status="online"
                ></Avatar>
                <Avatar
                    :size="args.size"
                    :shape="args.shape"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                    status="idle"
                ></Avatar>
                <Avatar
                    :size="args.size"
                    :shape="args.shape"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                    status="busy"
                ></Avatar>
                <Avatar
                    :size="args.size"
                    :shape="args.shape"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                    status="offline"
                ></Avatar>
            </div>
            
        `}),parameters:{controls:{}}},A={name:"Avatar大小",args:{shape:"circle",imageSrc:"libs/src/assets/fakeImg/avatar_01.jpg",imageAlt:"alt text",username:"JonyWu"},render:a=>({components:{Avatar:m},setup(){return{args:a}},template:`
            <div style="display:flex; gap: 16px">
                <Avatar
                    size="xsmall"
                    :shape="args.shape"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
                <Avatar
                    size="small"
                    :shape="args.shape"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
                <Avatar
                    size="medium"
                    :shape="args.shape"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
                <Avatar
                    size="large"
                    :shape="args.shape"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
            </div>
            
        `}),parameters:{controls:{}}},d={name:"Avatar內容",args:{size:"large",shape:"circle"},render:a=>({components:{Avatar:m},setup(){return{args:a}},template:`
            <div style="display:flex; gap: 16px">
                <Avatar
                    :size="args.size"
                    :shape="args.shape"
                    imageSrc="libs/src/assets/fakeImg/avatar_01.jpg"
                    imageAlt="圖片替代文字"
                    username="JonyWu"
                ></Avatar>
                <Avatar
                    :size="args.size"
                    :shape="args.shape"
                    imageSrc=""
                    imageAlt="圖片替代文字"
                    username="JonyWu"
                ></Avatar>
            </div>
        `}),parameters:{controls:{}}},S={name:"多個 Avatar",args:{avatarsData:[{userName:"Eason"},{userName:"KevinYang",imageSrc:"https://picsum.photos/320/240"},{userName:"AmosLee"},{userName:"JohnWu",imageSrc:"https://picsum.photos/320/340"}]},render:a=>({components:{AvatarGroup:P},setup(){return{args:a}},template:`
            <div style="display:flex; gap: 16px">
                <AvatarGroup 
                    :avatarsData="args.avatarsData" 
                    size="medium" 
                    shape="circle" 
                    :limit="3">
                </AvatarGroup>
            </div>
        `}),parameters:{controls:{}}};var k,N,E;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '基礎樣式',
  args: {
    size: 'large',
    shape: 'circle',
    imageSrc: 'libs/src/assets/fakeImg/avatar_01.jpg',
    imageAlt: 'alt text',
    username: 'JonyWu',
    status: 'offline'
  },
  render: args => ({
    components: {
      Avatar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Avatar
                :size="args.size"
                :shape="args.shape"
                :imageSrc="args.imageSrc"
                :imageAlt="args.imageAlt"
                :username="args.username"
                :status="args.status"
            ></Avatar>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(E=(N=o.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var F,I,W;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Avatar外型',
  args: {
    size: 'large',
    imageSrc: 'libs/src/assets/fakeImg/avatar_01.jpg',
    imageAlt: 'alt text',
    username: 'JonyWu'
  },
  render: args => ({
    components: {
      Avatar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <div style="display:flex; gap: 16px">
                <Avatar
                    :size="args.size"
                    shape="circle"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
                <Avatar
                    :size="args.size"
                    shape="square"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(W=(I=p.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var $,V,j;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Avatar狀態',
  args: {
    size: 'large',
    shape: 'circle',
    imageSrc: 'libs/src/assets/fakeImg/avatar_01.jpg',
    imageAlt: 'alt text',
    username: 'JonyWu'
  },
  render: args => ({
    components: {
      Avatar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <div style="display:flex; gap: 16px">
                <Avatar
                    :size="args.size"
                    :shape="args.shape"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                    status="default"
                ></Avatar>
                <Avatar
                    :size="args.size"
                    :shape="args.shape"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                    status="online"
                ></Avatar>
                <Avatar
                    :size="args.size"
                    :shape="args.shape"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                    status="idle"
                ></Avatar>
                <Avatar
                    :size="args.size"
                    :shape="args.shape"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                    status="busy"
                ></Avatar>
                <Avatar
                    :size="args.size"
                    :shape="args.shape"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                    status="offline"
                ></Avatar>
            </div>
            
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(j=(V=v.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var J,B,G;A.parameters={...A.parameters,docs:{...(J=A.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Avatar大小',
  args: {
    shape: 'circle',
    imageSrc: 'libs/src/assets/fakeImg/avatar_01.jpg',
    imageAlt: 'alt text',
    username: 'JonyWu'
  },
  render: args => ({
    components: {
      Avatar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <div style="display:flex; gap: 16px">
                <Avatar
                    size="xsmall"
                    :shape="args.shape"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
                <Avatar
                    size="small"
                    :shape="args.shape"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
                <Avatar
                    size="medium"
                    :shape="args.shape"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
                <Avatar
                    size="large"
                    :shape="args.shape"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
            </div>
            
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(G=(B=A.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var q,L,U;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Avatar內容',
  args: {
    size: 'large',
    shape: 'circle'
  },
  render: args => ({
    components: {
      Avatar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <div style="display:flex; gap: 16px">
                <Avatar
                    :size="args.size"
                    :shape="args.shape"
                    imageSrc="libs/src/assets/fakeImg/avatar_01.jpg"
                    imageAlt="圖片替代文字"
                    username="JonyWu"
                ></Avatar>
                <Avatar
                    :size="args.size"
                    :shape="args.shape"
                    imageSrc=""
                    imageAlt="圖片替代文字"
                    username="JonyWu"
                ></Avatar>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(U=(L=d.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var w,M,O;S.parameters={...S.parameters,docs:{...(w=S.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '多個 Avatar',
  args: {
    avatarsData: [{
      userName: 'Eason'
    }, {
      userName: 'KevinYang',
      imageSrc: 'https://picsum.photos/320/240'
    }, {
      userName: 'AmosLee'
    }, {
      userName: 'JohnWu',
      imageSrc: 'https://picsum.photos/320/340'
    }]
  },
  render: args => ({
    components: {
      AvatarGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <div style="display:flex; gap: 16px">
                <AvatarGroup 
                    :avatarsData="args.avatarsData" 
                    size="medium" 
                    shape="circle" 
                    :limit="3">
                </AvatarGroup>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(O=(M=S.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const ha=["DefaultAvatar","AvatarShape","AvatarStatus","AvatarSizes","AvatarContent","MultiAvatar"];export{d as AvatarContent,p as AvatarShape,A as AvatarSizes,v as AvatarStatus,o as DefaultAvatar,S as MultiAvatar,ha as __namedExportsOrder,fa as default};
