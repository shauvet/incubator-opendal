"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[3702],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(b,l(l({ref:t},u),{},{components:r})):a.createElement(b,l({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294),n=r(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>N});var a=r(7462),n=r(7294),o=r(6010),l=r(2466),i=r(6550),s=r(1980),c=r(7392),u=r(12);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function k(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=b({queryString:r,groupId:a}),[p,k]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),f=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),k(e)}),[c,k,o]),tabValues:o}}var f=r(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=u.indexOf(t),a=c[r].value;a!==i&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function g(e){const t=k(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},n.createElement(v,(0,a.Z)({},e,t)),n.createElement(y,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return n.createElement(g,(0,a.Z)({key:String(t)},e))}},5893:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>u,metadata:()=>d,toc:()=>b});var a=r(7462),n=(r(7294),r(3905));const o={toc:[{value:"Capabilities",id:"capabilities",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Credentials related",id:"credentials-related",level:3},{value:"Just provide Access Token (Temporary)",id:"just-provide-access-token-temporary",level:4},{value:"Or provide Client ID and Client Secret and refresh token (Long Term)",id:"or-provide-client-id-and-client-secret-and-refresh-token-long-term",level:4},{value:"Example",id:"example",level:2},{value:"Via Builder",id:"via-builder",level:3}]},l="wrapper";function i(e){let{components:t,...r}=e;return(0,n.kt)(l,(0,a.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"capabilities"},"Capabilities"),(0,n.kt)("p",null,"This service can be used to:"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","stat"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","read"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","write"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","create_dir"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","delete"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","copy"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","rename"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","list"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","batch"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","blocking")),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"root"),": Set the work directory for this backend.")),(0,n.kt)("h3",{id:"credentials-related"},"Credentials related"),(0,n.kt)("h4",{id:"just-provide-access-token-temporary"},"Just provide Access Token (Temporary)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"access_token"),": set the access_token for this backend.\nPlease notice its expiration.")),(0,n.kt)("h4",{id:"or-provide-client-id-and-client-secret-and-refresh-token-long-term"},"Or provide Client ID and Client Secret and refresh token (Long Term)"),(0,n.kt)("p",null,"If you want to let OpenDAL to refresh the access token automatically,\nplease provide the following fields:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"refresh_token"),": set the refresh_token for dropbox api"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"client_id"),": set the client_id for dropbox api"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"client_secret"),": set the client_secret for dropbox api")),(0,n.kt)("p",null,"OpenDAL is a library, it cannot do the first step of OAuth2 for you.\nYou need to get authorization code from user by calling Dropbox's authorize url\nand exchange it for refresh token."),(0,n.kt)("p",null,"Please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://www.dropbox.com/developers/reference/oauth-guide"},"Dropbox OAuth2 Guide"),"\nfor more information."),(0,n.kt)("p",null,"You can refer to ","[",(0,n.kt)("inlineCode",{parentName:"p"},"DropboxBuilder"),"]","'s docs for more information"),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("h3",{id:"via-builder"},"Via Builder"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'use anyhow::Result;\nuse opendal::raw::OpWrite;\nuse opendal::services::Dropbox;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut builder = Dropbox::default();\n    builder.root("/opendal");\n    builder.access_token("<token>");\n\n    let op: Operator = Operator::new(builder)?.finish();\n    Ok(())\n}\n')))}i.isMDXComponent=!0;var s=r(4866),c=r(5162);const u={title:"Dropbox"},p=void 0,d={unversionedId:"services/dropbox",id:"services/dropbox",title:"Dropbox",description:"Dropbox services support.",source:"@site/docs/services/dropbox.mdx",sourceDirName:"services",slug:"/services/dropbox",permalink:"/docs/services/dropbox",draft:!1,editUrl:"https://github.com/apache/incubator-opendal/tree/main/website/docs/services/dropbox.mdx",tags:[],version:"current",lastUpdatedBy:"Xuanwo",lastUpdatedAt:1695724979,formattedLastUpdatedAt:"Sep 26, 2023",frontMatter:{title:"Dropbox"},sidebar:"docs",previous:{title:"DashMap",permalink:"/docs/services/dashmap"},next:{title:"Etcd",permalink:"/docs/services/etcd"}},m={},b=[{value:"Via Config",id:"via-config",level:3}],k={toc:b},f="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,a.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.dropbox.com/"},"Dropbox")," services support."),(0,n.kt)(i,{components:r.components,mdxType:"Docs"}),(0,n.kt)("h3",{id:"via-config"},"Via Config"),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(c.Z,{value:"rust",label:"Rust",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'use anyhow::Result;\nuse opendal::Operator;\nuse opendal::Scheme;\nuse std::collections::HashMap;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut map = HashMap::new();\n    map.insert("root".to_string(), "/path/to/dir".to_string());\n    map.insert("access_token".to_string(), "your_access_token".to_string());\n\n    let op: Operator = Operator::via_map(Scheme::Dropbox, map)?;\n    Ok(())\n}\n'))),(0,n.kt)(c.Z,{value:"node.js",label:"Node.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Operator } from "opendal";\n\nasync function main() {\n  const op = new Operator("dropbox", {\n    root: "/path/to/dir",\n    access_token: "your_access_token",\n  });\n}\n'))),(0,n.kt)(c.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'import opendal\n\nop = opendal.Operator("dropbox",\n  root="/path/to/dir",\n  access_token="your_access_token",\n)\n')))))}h.isMDXComponent=!0}}]);