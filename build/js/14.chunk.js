(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[14],{267:function(e,t,n){"use strict";n.r(t);var o=n(2),r=n(0),a=n.n(r),c=n(4),i=n(293),l=n(265),s=["property","description","default","type","value"],m=[{property:"content",description:"Dropdown content",default:"",type:"any",value:""},{property:"trigger",description:"Trigger element (Button, InputField & etc.)",default:"",type:"any",value:""},{property:"width",description:"Set Dropdown content width",default:"",type:"string | number",value:""},{property:"minWidth",description:"Set Dropdown content minWidth",default:"",type:"string | number",value:""},{property:"position",description:"Set Dropdown content position",default:"left",type:"string",value:"centered | right"},{property:"leftOffset",description:"Set Dropdown content offset from left side",default:"0",type:"number",value:""},{property:"rightOffset",description:"Set Dropdown content offset from right side",default:"0",type:"number",value:""},{property:"closeManaged",description:"Enable custom dropdown state control",default:"false",type:"boolean",value:"true | false"},{property:"visible",description:"Pass state visible value",default:"",type:"boolean",value:"true | false"},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],p=[{name:"Steve Rogers",hero:"Captain America",icon:"account",check:!1},{name:"Peter Parker",hero:"Spider man",icon:"account",check:!1},{name:"Tony Stark",hero:"Iron man",icon:"account",check:!1},{name:"Bruce Benner",hero:"Hulk",icon:"account",check:!1}];t.default=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],u=t[1],d=Object(r.useState)(""),g=Object(o.a)(d,2),h=g[0],f=g[1],y=Object(r.createRef)(),E=Object(r.createRef)();return a.a.createElement("div",{className:"rui-page",ref:y},a.a.createElement("div",{className:"row align-center space-between"},a.a.createElement("div",{className:"rui-page-title"},"Dropdown Component"),a.a.createElement("div",{onClick:function(){E.current&&E.current.scrollIntoView({behavior:"smooth",block:"center"})},className:"rui-link fz-13 fw-bold"},"API")),a.a.createElement(c.e,{outlined:!0,color:"primary",title:"Dropdown on Button"},a.a.createElement("div",{className:"row align-center"},a.a.createElement(c.i,{width:250,content:a.a.createElement(c.m,{dense:!0},p.map((function(e,t){return a.a.createElement(c.n,{key:t,hover:!0,onClick:function(){return u(e.hero)},item:e.hero})}))),itemTitle:"name",trigger:a.a.createElement(c.c,{color:"info",name:"Button"})}),a.a.createElement(c.w,{value:"Your select: ".concat(n),color:n?"error":"",className:"ml-10"})),a.a.createElement(c.g,{icon:"code",iconSize:18,tooltip:"Code"},a.a.createElement(i.a,{language:"jsx",style:l.a},"// Usage examples\nimport React, { useState } from 'react';\nimport { Dropdown, Button, Tag } from '@assenti/rui-components';\nconst heroes = [\n    { hero: 'Captain America' }, \n    { hero: 'Spider man' }, \n    { hero: 'Iron man' }, \n    { hero: 'Hulk' }\n];\n\nfunction Example() {\n    const [item, setItem] = useState('');\n\n    return (\n        <div>\n            <Dropdown\n                width={250}\n                content={\n                    <List dense>\n                        {heroes.map((item, index) => \n                            <ListItem\n                                key={index}\n                                hover \n                                onClick={() => setItem(item.hero)}\n                                item={item}\n                                itemTitle=\"hero\"/>\n                        )}\n                    </List>\n                }\n                itemTitle=\"name\"\n                trigger={<Button\n                    color=\"info\"\n                    name=\"Button\"/>}\n                    />\n            <Tag value={`Your select: ${item}`} color={item ? 'error' : ''} className=\"ml-10\"/>\n        </div>\n    )\n}\n"))),a.a.createElement("br",null),a.a.createElement(c.e,{outlined:!0,color:"primary",title:"Dropdown on InputField"},a.a.createElement("div",{className:"row mb-10"},a.a.createElement(c.i,{content:a.a.createElement(c.m,{dense:!0},p.map((function(e,t){return a.a.createElement(c.n,{key:t,hover:!0,onClick:function(){return f(e.hero)},item:e.hero})}))),trigger:a.a.createElement(c.l,{color:"info",prefix:a.a.createElement(c.k,{name:"shield-account"}),value:h,placeholder:"Choose a hero"})})),a.a.createElement(c.g,{icon:"code",iconSize:18,tooltip:"Code"},a.a.createElement(i.a,{language:"jsx",style:l.a},"// Usage examples\nimport React, { useState } from 'react';\nimport { Dropdown, InputField, Icon, List, ListItem } from '@assenti/rui-components';\nconst heroes = [\n    { hero: 'Captain America' }, \n    { hero: 'Spider man' }, \n    { hero: 'Iron man' }, \n    { hero: 'Hulk' }\n];\n\nfunction Example() {\n    const [item, setItem] = useState('');\n\n    return (\n        <div>\n            <Dropdown\n                content={\n                    <List dense>\n                        {heroes.map((item, index) => \n                            <ListItem\n                                key={index}\n                                hover \n                                onClick={() => setItem(item.hero)}\n                                item={item}\n                                itemTitle=\"hero\"/>\n                        )}\n                    </List>\n                }\n                trigger={<InputField\n                        color=\"info\"\n                        prefix={<Icon name=\"shield-account\"/>}\n                            value={item}\n                            placeholder=\"Choose a hero\"/>}\n                            />\n        </div>\n    )\n}\n"))),a.a.createElement("br",null),a.a.createElement(c.e,{outlined:!0,color:"primary",title:"Dropdown on Icon button"},a.a.createElement("div",{className:"row space-around"},a.a.createElement(c.i,{width:180,content:a.a.createElement("div",{className:"row column align-center justify-center px-15 pt-15 pb-20"},a.a.createElement(c.k,{name:"account",color:"gray",size:70}),a.a.createElement("span",{className:"text-center text-dark fz-9 py-5"},"John Doe"),a.a.createElement(c.c,{name:"Sign out",color:"error",icon:"exit-to-app",iconLeft:!0})),trigger:a.a.createElement(c.c,{light:!0,icon:"account"})}),a.a.createElement(c.i,{width:180,position:"centered",content:a.a.createElement("div",{className:"row column align-center justify-center px-15 pt-15 pb-20"},a.a.createElement(c.k,{name:"account",color:"gray",size:70}),a.a.createElement("span",{className:"text-center text-dark fz-9 py-5"},"John Doe"),a.a.createElement(c.c,{name:"Sign out",color:"error",icon:"exit-to-app",iconLeft:!0})),trigger:a.a.createElement(c.c,{light:!0,icon:"account"})}),a.a.createElement(c.i,{width:180,position:"right",content:a.a.createElement("div",{className:"row column align-center justify-center px-15 pt-15 pb-20"},a.a.createElement(c.k,{name:"account",color:"gray",size:70}),a.a.createElement("span",{className:"text-center text-dark fz-9 py-5"},"John Doe"),a.a.createElement(c.c,{name:"Sign out",color:"error",icon:"exit-to-app",iconLeft:!0})),trigger:a.a.createElement(c.c,{light:!0,icon:"account"})})),a.a.createElement(c.g,{icon:"code",iconSize:18,tooltip:"Code"},a.a.createElement(i.a,{language:"jsx",style:l.a},'// Usage examples\nimport React from \'react\';\nimport { Dropdown, Button, Icon } from \'@assenti/rui-components\';\n\nfunction Example() {\n    return (\n        <div className="row space-around">\n            <Dropdown\n                width={180}\n                content={\n                    <div className="row column align-center justify-center px-15 pt-15 pb-20">\n                        <Icon name="account" color="gray" size={70}/>\n                        <span className="text-center text-dark fz-9 py-5">John Doe</span>\n                        <Button name="Sign out" color="error" icon="exit-to-app" iconLeft/>\n                    </div>\n                }\n                trigger={<Button\n                            light\n                            icon="account"/>}/>\n            <Dropdown\n                width={180}\n                position="centered"\n                content={\n                    <div className="row column align-center justify-center px-15 pt-15 pb-20">\n                        <Icon name="account" color="gray" size={70}/>\n                        <span className="text-center text-dark fz-9 py-5">John Doe</span>\n                        <Button name="Sign out" color="error" icon="exit-to-app" iconLeft/>\n                    </div>\n                }\n                trigger={<Button\n                            light\n                            icon="account"/>}/>\n            <Dropdown\n                width={180}\n                position="right"\n                content={\n                    <div className="row column align-center justify-center px-15 pt-15 pb-20">\n                        <Icon name="account" color="gray" size={70}/>\n                        <span className="text-center text-dark fz-9 py-5">John Doe</span>\n                        <Button name="Sign out" color="error" icon="exit-to-app" iconLeft/>\n                    </div>\n                }\n                trigger={<Button\n                            light\n                            icon="account"/>}/>\n        </div>\n    )\n}\n'))),a.a.createElement(c.a,{setRef:y,dark:!0}),a.a.createElement("h2",{ref:E},"API"),a.a.createElement(c.v,{bordered:!0,headers:s,items:m,index:!0,itemTitles:s}))}}}]);
//# sourceMappingURL=14.chunk.js.map