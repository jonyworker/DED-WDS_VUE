import{f as t,c as l,b as s,n,o as c}from"./vue.esm-bundler-Bm7qTojY.js";import{c as o}from"./index-Bb4qSo10.js";const u=["src","alt"],m={__name:"Image",props:{ratio:{type:String,default:"11",validator:e=>["11","43","54","169"].includes(e)},objectFit:{type:String,default:"cover",validator:e=>["cover","contain","fill","none"].includes(e)},src:{type:String},alt:{type:String,default:"Image Alt Text"}},setup(e){const a=e,r=t(()=>o("image-container",{variants:{ratio:{11:"ratio-1x1",43:"ratio-4x3",54:"ratio-5x4",169:"ratio-16x9"}}})({ratio:a.ratio})),i=t(()=>o("image",{variants:{objectFit:{cover:"cover",contain:"contain",fill:"fill",none:"none"}}})({objectFit:a.objectFit}));return(p,f)=>(c(),l("div",{class:n(r.value)},[s("img",{class:n(i.value),src:a.src,alt:a.alt},null,10,u)],2))}};m.__docgenInfo={exportName:"default",displayName:"Image",description:"",tags:{},props:[{name:"ratio",type:{name:"string"},defaultValue:{func:!1,value:"'11'"},values:["11","43","54","169"]},{name:"objectFit",type:{name:"string"},defaultValue:{func:!1,value:"'cover'"},values:["cover","contain","fill","none"]},{name:"src",type:{name:"string"}},{name:"alt",type:{name:"string"},defaultValue:{func:!1,value:"'Image Alt Text'"}}],sourceFiles:["D:/98_測試/DED-WDS_VUE/libs/src/ui/element/Image/Image.vue"]};export{m as _};
