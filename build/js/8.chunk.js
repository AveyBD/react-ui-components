(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[8],{288:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(4),i=t(292),c=t(265),m=[{name:"Steve Rogers",hero:"Captain America",icon:"account",check:!1},{name:"Peter Parker",hero:"Spider man",icon:"account",check:!1},{name:"Tony Stark",hero:"Iron man",icon:"account",check:!1},{name:"Bruce Benner",hero:"Hulk",icon:"account",check:!1}],l=["property","description","default","type","value"],s=[{property:"header",description:"Set card header",default:"",type:"any",value:""},{property:"footer",description:"Set card footer",default:"",type:"any",value:""},{property:"width",description:"Set card width",default:"",type:"string | number",value:'100, "100%", "100px"'},{property:"padding",description:"Set card padding",default:"15px",type:"string | number",value:""},{property:"img",description:"Set card image",default:"",type:"string | base64",value:""},{property:"flat",description:"Remove card box shadow",default:"false",type:"boolean",value:"true | false"},{property:"dark",description:"Set dark mode",default:"false",type:"boolean",value:"true | false"},{property:"hover",description:"Lift up the card on hover",default:"false",type:"boolean",value:"true | false"},{property:"outlined",description:"Set card borders outlined",default:"false",type:"boolean",value:"true | false"},{property:"color",description:"Set card borders color from colors list",default:"",type:"string",value:"primary | info | success | error"},{property:"title",description:"Set outlined card title (has effect only with outlined prop)",default:"",type:"string",value:""},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}];n.default=function(){var e=Object(a.createRef)(),n=Object(a.createRef)();return r.a.createElement("div",{className:"rui-page",ref:n},r.a.createElement("div",{className:"row align-center space-between"},r.a.createElement("div",{className:"rui-page-title"},"Card Component"),r.a.createElement("div",{className:"rui-link fz-13 fw-bold",onClick:function(){e.current&&e.current.scrollIntoView({behavior:"smooth",block:"start"})}},"API")),r.a.createElement(o.e,{outlined:!0,color:"primary",title:"Card with header"},r.a.createElement(o.e,{header:"Marvel heroes"},r.a.createElement(o.m,null,m.map((function(e,n){return r.a.createElement(o.n,{key:n,item:e.name,hover:!0})})))),r.a.createElement(o.e,{dark:!0,header:"Marvel heroes"},r.a.createElement(o.m,{dark:!0},m.map((function(e,n){return r.a.createElement(o.n,{key:n,item:e.name,hover:!0})})))),r.a.createElement(o.g,{icon:"code",iconSize:18,tooltip:"Code"},r.a.createElement(i.a,{language:"jsx",style:c.a},"// Usage examples\nimport React from 'react';\nimport { Card, List, ListItem } from '@assenti/rui-components';\n\nconst names = [\n    { name: 'Steve Rogers', hero: 'Captain America', icon: 'account' }, \n    { name: 'Peter Parker', hero: 'Spider man', icon: 'account' }, \n    { name: 'Tony Stark', hero: 'Iron man', icon: 'account' }, \n    { name: 'Bruce Benner', hero: 'Hulk', icon: 'account' }\n];\n\nfunction Example() {\n    return (\n        <div>\n            <Card header=\"Marvel heroes\">\n                <List>\n                    {names.map((item, index) => \n                        <ListItem \n                            key={index}\n                            item={item.name}\n                            hover/>\n                    )}\n                </List>\n            </Card>\n            <Card dark header=\"Marvel heroes\">\n                <List dark>\n                    {names.map((item, index) => \n                        <ListItem \n                            key={index}\n                            item={item.name}\n                            hover/>\n                    )}\n                </List>\n            </Card>\n        </div>\n    )\n}\n"))),r.a.createElement("br",null),r.a.createElement(o.e,{outlined:!0,color:"primary",title:"Card flat"},r.a.createElement(o.e,{header:"Marvel heroes",flat:!0},r.a.createElement(o.m,null,m.map((function(e,n){return r.a.createElement(o.n,{key:n,item:e.name,hover:!0})})))),r.a.createElement(o.g,{icon:"code",iconSize:18,tooltip:"Code"},r.a.createElement(i.a,{language:"jsx",style:c.a},"// Usage examples\nimport React from 'react';\nimport { Card, List, ListItem } from '@assenti/rui-components';\n\nconst names = [\n    { name: 'Steve Rogers', hero: 'Captain America', icon: 'account' }, \n    { name: 'Peter Parker', hero: 'Spider man', icon: 'account' }, \n    { name: 'Tony Stark', hero: 'Iron man', icon: 'account' }, \n    { name: 'Bruce Benner', hero: 'Hulk', icon: 'account' }\n];\n\nfunction Example() {\n    return (\n        <Card header=\"Marvel heroes\" flat>\n            <List>\n                {names.map((item, index) => \n                    <ListItem \n                        key={index}\n                        item={item}\n                        hover\n                        itemTitle=\"name\"/>\n                )}\n            </List>\n        </Card>\n    )\n}\n"))),r.a.createElement("br",null),r.a.createElement(o.e,{outlined:!0,color:"primary",title:"Card with image and hover"},r.a.createElement("div",{className:"row space-around"},[1,2,3].map((function(e,n){return r.a.createElement(o.e,{key:n,hover:!0,className:"ma-5 col",width:200,img:r.a.createElement("div",{className:"row justify-center"},r.a.createElement(o.k,{name:"react",size:50,color:"#42a5f5"})),footer:"Some description "+e},r.a.createElement("p",null,"Some title ",e))}))),r.a.createElement(o.g,{icon:"code",iconSize:18,tooltip:"Code"},r.a.createElement(i.a,{language:"jsx",style:c.a},'// Usage examples\nimport React from \'react\';\nimport { Card, Icon } from \'@assenti/rui-components\';\n\nlet cards = [1,2,3];\n\nfunction Example() {\n    return (\n        <div className="row space-around">\n            {cards.map((item, index) => \n                <Card \n                    key={index}\n                    hover\n                    className="ma-5 col"\n                    width={200} \n                    img={<div className="row justify-center">\n                            <Icon name="react" size={50} color="#42a5f5"/>\n                        </div>}\n                    footer={\'Some description \' + item}>\n                    <p>Some title {item}</p>\n                </Card>\n            )}\n        </div>\n    )\n}\n'))),r.a.createElement("br",null),r.a.createElement(o.e,{outlined:!0,color:"primary",title:"Outlined Cards with titles"},r.a.createElement(o.e,{outlined:!0,title:"Marvel Avengers",color:"primary"},r.a.createElement(o.m,null,m.map((function(e,n){return r.a.createElement(o.n,{key:n,item:e.name,hover:!0})})))),r.a.createElement(o.g,{icon:"code",iconSize:18,tooltip:"Code"},r.a.createElement(i.a,{language:"jsx",style:c.a},"// Usage examples\nimport React from 'react';\nimport { Card, List, ListItem } from '@assenti/rui-components';\n\nconst names = [\n    { name: 'Steve Rogers', hero: 'Captain America', icon: 'account' }, \n    { name: 'Peter Parker', hero: 'Spider man', icon: 'account' }, \n    { name: 'Tony Stark', hero: 'Iron man', icon: 'account' }, \n    { name: 'Bruce Benner', hero: 'Hulk', icon: 'account' }\n];\n\nfunction Example() {\n    return (\n        <Card outlined title=\"Marvel Avengers\" color=\"primary\">\n            <List>\n                {names.map((item, index) => \n                    <ListItem \n                        key={index}\n                        item={item}\n                        hover\n                        itemTitle=\"name\"/>\n                )}\n            </List>\n        </Card>\n    )\n}\n"))),r.a.createElement(o.a,{dark:!0,setRef:n,size:"medium"}),r.a.createElement("h2",{ref:e},"API"),r.a.createElement(o.v,{bordered:!0,headers:l,items:s,index:!0,itemTitles:l}))}}}]);
//# sourceMappingURL=8.chunk.js.map