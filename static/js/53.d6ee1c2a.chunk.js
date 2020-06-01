(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[53],{302:function(e,t,a){"use strict";a.r(t);var o=a(2),r=a(0),n=a.n(r),l=a(3),c=a(47),i=[{property:"tooltip",description:"Set tooltip text",default:"",type:"string",value:""},{property:"position",description:"Set tooltip position",default:"top",type:"string",value:"bottom | right | left"},{property:"color",description:"Set tooltip color",default:"transparent black",type:"string",value:"primary | info | error | success"},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],s=["default","primary","info","success","error"];t.default=function(){var e=Object(r.useState)(s[0]),t=Object(o.a)(e,2),a=t[0],m=t[1];return n.a.createElement(l.V.Consumer,null,(function(e){return n.a.createElement(c.a,{usage:'// Usage examples\nimport React from \'react\';\nimport { Tooltip } from \'@assenti/react-ui-components\';\n\nfunction Example() {\n    return (\n        <>\n            <Tooltip \n                tooltip="Tooltip"\n                color="primary">\n                <Button icon="search" color="info"/>\n            </Tooltip>\n        </>\n    )\n}',componentName:"<Tooltip/>",apiDescItems:i},n.a.createElement(l.K,{items:s,prefix:n.a.createElement(l.z,{name:"brush"}),width:200,dark:e,label:"Tooltip color",color:"primary",className:"my-10",value:a,onChange:function(e){return m(e)}}),n.a.createElement("br",null),n.a.createElement(l.r,null),n.a.createElement("div",{className:"row align-center py-20"},n.a.createElement(l.Y,{tooltip:"Top position",color:a,className:"mr-20"},n.a.createElement(l.h,{icon:"search",color:"info"})),n.a.createElement(l.Y,{tooltip:"Bottom position",position:"bottom",color:a,className:"mr-20"},n.a.createElement(l.h,{color:"info",name:"Button",onAction:function(){}})),n.a.createElement(l.Y,{tooltip:"Left position",color:a,position:"left",className:"mr-20"},n.a.createElement(l.h,{icon:"menu",dark:e,light:!e})),n.a.createElement(l.Y,{tooltip:"Right position",color:a,position:"right"},n.a.createElement(l.h,{icon:"rocket",color:"error"}))))}))}},47:function(e,t,a){"use strict";var o=a(2),r=a(0),n=a.n(r),l=a(3),c=a(345),i=a(289),s=a(290),m=["property","description","default","type","value"];t.a=function(e){var t=Object(r.useRef)(),a=Object(r.useState)(!1),p=Object(o.a)(a,2),u=(p[0],p[1]);return n.a.createElement(l.V.Consumer,null,(function(a){return n.a.createElement("div",{className:"rui-page",ref:t},n.a.createElement("div",{className:"rui-page-title"},e.componentName," Component",n.a.createElement(l.o,{noTooltip:!0,className:"ml-10",text:e.componentName,dark:a})),n.a.createElement(l.k,{dark:a,header:n.a.createElement("div",{className:"row align-center pb-10"},n.a.createElement(l.z,{name:"bulb",size:18,color:"#42a5f5",className:"mr-8"}),n.a.createElement("h4",{className:"my-0 text-info"},"Usage"))},e.children,n.a.createElement(l.n,{className:"mt-10",extra:n.a.createElement(l.o,{defaultText:"Copy code",text:e.usage,dark:a}),onChange:function(e){return u(e)},customToggler:n.a.createElement(l.h,{className:"ml-20",name:"Code",icon:"code",color:"info"}),dark:a},n.a.createElement(c.a,{language:"jsx",style:a?i.a:s.a},e.usage))),e.backTopBtn?n.a.createElement(l.e,{dark:!0,setRef:t,size:"medium",tooltip:"Up"}):null,n.a.createElement(l.k,{className:"mt-10 overflow-y",style:{maxWidth:"100%"}},e.apiDescItems.length>0&&n.a.createElement(l.R,{tableTitle:n.a.createElement("h2",{className:"ml-10"},e.apiHeader?e.apiHeader:"API"),dark:a,headers:["Property","Description","Default","Type","Value"],items:e.apiDescItems,index:!0,bordered:!0,searchable:e.apiSearchable,searchKey:"property",itemTitles:m}),e.content),e.apiDescItems2&&n.a.createElement(l.k,{className:"mt-10"},e.apiDescItems2.length>0&&n.a.createElement(l.R,{tableTitle:n.a.createElement("h2",{className:"ml-10"},e.apiHeader2),dark:a,headers:["Property","Description","Default","Type","Value"],items:e.apiDescItems2,index:!0,bordered:!0,searchable:e.apiSearchable2,searchKey:"property",itemTitles:m}),e.content))}))}}}]);