(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[29],{319:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(0),o=a.n(n),l=a(3),c=a(47),s=[{property:"text",description:"Set text that should be copied",default:"",type:"string",value:""},{property:"icon",description:"Set custom icon from icons list",default:"content-copy",type:"string",value:""},{property:"size",description:"Set icon size",default:"16px",type:"number",value:""},{property:"color",description:"Set icon color",default:"gray",type:"string",value:""},{property:"defaultText",description:"Set tooltip default text",default:"Copy",type:"string",value:""},{property:"copiedText",description:"Set tooltip copied text",default:"Copied to clipboard",type:"string",value:""},{property:"noTooltip",description:"Hide tooltip",default:"false",type:"boolean",value:"true | false"},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:"hex | rgb() | css preset colors"}];t.default=function(){var e=Object(n.useState)("Some text"),t=Object(r.a)(e,2),a=t[0],i=t[1];return o.a.createElement(l.V.Consumer,null,(function(e){return o.a.createElement(c.a,{usage:"// Usage examples\nimport React from 'react';\nimport { CopyToClipboard, InputField } from '@assenti/react-ui-components';\nconst text = 'Some text';\n\nfunction Example() {\n    return (\n        <div className=\"row align-center\">\n            <InputField color=\"info\" readOnly value={text} width={200}/>\n            <CopyToClipboard text={text} className=\"ml-10\"/>\n        </div>\n    )\n}",apiDescItems:s,componentName:"<CopyToClipboard/>"},o.a.createElement("div",{className:"row align-center"},o.a.createElement(l.A,{dark:e,color:"info",onChange:function(e){return i(e.target.value)},value:a,width:200}),o.a.createElement(l.o,{text:a,dark:e,className:"ml-10"})))}))}},47:function(e,t,a){"use strict";var r=a(2),n=a(0),o=a.n(n),l=a(3),c=a(345),s=a(289),i=a(290),p=["property","description","default","type","value"];t.a=function(e){var t=Object(n.useRef)(),a=Object(n.useState)(!1),m=Object(r.a)(a,2),u=(m[0],m[1]);return o.a.createElement(l.V.Consumer,null,(function(a){return o.a.createElement("div",{className:"rui-page",ref:t},o.a.createElement("div",{className:"rui-page-title"},e.componentName," Component",o.a.createElement(l.o,{noTooltip:!0,className:"ml-10",text:e.componentName,dark:a})),o.a.createElement(l.k,{dark:a,header:o.a.createElement("div",{className:"row align-center pb-10"},o.a.createElement(l.z,{name:"bulb",size:18,color:"#42a5f5",className:"mr-8"}),o.a.createElement("h4",{className:"my-0 text-info"},"Usage"))},e.children,o.a.createElement(l.n,{className:"mt-10",extra:o.a.createElement(l.o,{defaultText:"Copy code",text:e.usage,dark:a}),onChange:function(e){return u(e)},customToggler:o.a.createElement(l.h,{className:"ml-20",name:"Code",icon:"code",color:"info"}),dark:a},o.a.createElement(c.a,{language:"jsx",style:a?s.a:i.a},e.usage))),e.backTopBtn?o.a.createElement(l.e,{dark:!0,setRef:t,size:"medium",tooltip:"Up"}):null,o.a.createElement(l.k,{className:"mt-10 overflow-y",style:{maxWidth:"100%"}},e.apiDescItems.length>0&&o.a.createElement(l.R,{tableTitle:o.a.createElement("h2",{className:"ml-10"},e.apiHeader?e.apiHeader:"API"),dark:a,headers:["Property","Description","Default","Type","Value"],items:e.apiDescItems,index:!0,bordered:!0,searchable:e.apiSearchable,searchKey:"property",itemTitles:p}),e.content),e.apiDescItems2&&o.a.createElement(l.k,{className:"mt-10"},e.apiDescItems2.length>0&&o.a.createElement(l.R,{tableTitle:o.a.createElement("h2",{className:"ml-10"},e.apiHeader2),dark:a,headers:["Property","Description","Default","Type","Value"],items:e.apiDescItems2,index:!0,bordered:!0,searchable:e.apiSearchable2,searchKey:"property",itemTitles:p}),e.content))}))}}}]);