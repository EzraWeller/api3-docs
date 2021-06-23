(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{412:function(e,t,o){e.exports={env:"production",versions:[{name:"pre-alpha",url:"/pre-alpha/"}],head:[["link",{rel:"icon",href:"/img/small-logo.png"}]],title:"Documentation",base:"/",description:"Technical Documentation for API3 ",markdown:{lineNumbers:!0,extractHeaders:["h2","h3","h4","h5"]},themeConfig:{startPath:"/pre-alpha/",sidebarDepth:0,displayAllHeaders:!1,logo:"/img/logo.png",nav:[{text:"Discord (Dev)",link:"https://discord.gg/qnRrcfnm5W"},{text:"Telegram (Chat)",link:"https://t.me/API3DAO"},{text:"GitHub",link:"https://github.com/api3dao/api3-docs"}],sidebar:{"/next/":o(413),"/pre-alpha/":o(414),"/dev/":o(415)},smoothScroll:!1},chainWebpack:function(e,t){e.module.rule("pdfs").test(/\.pdf$/).use("file-loader").loader("file-loader").options({name:"[path][name].[ext]"}),e.module.rule("vue").uses.store.get("vue-loader").store.get("options").transformAssetUrls={video:["src","poster"],source:"src",img:"src",image:["xlink:href","href"],a:"href"}},plugins:[["@vuepress/html-redirect"],["vuepress-plugin-table-of-contents"],["vue-pdf"],["@vuepress/medium-zoom"],["vuepress-plugin-element-tabs"],["@vuepress/last-updated"],["@vuepress/back-to-top",!0],["@vuepress/search",{searchMaxSuggestions:15}]]}},413:function(e,t){e.exports=[{title:"Introduction",initialOpenGroupIndex:0,collapsable:!0,children:["","contributing","medium-posts","fundamentals/apis","fundamentals/first-party-oracles","fundamentals/decentrally-governed-oracle-networks","fundamentals/dapis"]},{title:"API Providers",initialOpenGroupIndex:0,collapsable:!0,children:[{title:"Airnode",initialOpenGroupIndex:-1,collapsable:!0,children:[{title:"Design Philosophy",path:"grp-providers/airnode/design-philosophy"},{title:"Implementation",path:"grp-providers/airnode/implementation"},{title:"Ethereum Providers",path:"grp-providers/airnode/ethereum-providers"}]},{title:"Guides",collapsable:!0,children:["grp-providers/guides/provider/api-integration","grp-providers/guides/provider/configuring-airnode","grp-providers/guides/provider/deploying-airnode","grp-providers/guides/provider/setting-authorizers"]},{title:"Docker",children:["grp-providers/guides/docker/client-image","grp-providers/guides/docker/deployer-image"]},{title:"Tutorial",collapsable:!0,children:["grp-providers/tutorial/airnode-starter","grp-providers/tutorial/config-json","grp-providers/tutorial/secrets-env","grp-providers/tutorial/authorizers-json","grp-providers/tutorial/receipt-json"]}]},{title:"Requesters",initialOpenGroupIndex:0,collapsable:!0,children:["grp-requesters/become-a-requester","grp-requesters/call-an-airnode","grp-requesters/fees","grp-requesters/developing-a-client-contract","grp-requesters/self-serve-platforms"]},{title:"API3 Members",initialOpenGroupIndex:2,collapsable:!0,children:[{title:"API3 DAO",path:"grp-members/"},{title:"The DAO Pool",path:"grp-members/dao-pool"},"grp-members/faqs"]},{title:"Technology",initialOpenGroupIndex:-1,collapsable:!0,children:[{title:"Specification Files",collapsable:!0,children:[{title:"Oracle Integration Specifications (OIS)",path:"technology/specifications/ois"},"technology/specifications/airnode-abi-specifications","technology/specifications/reserved-parameters"]},{title:"Deployment Files",collapsable:!0,children:[{title:"Overview",path:"technology/deployment-files/overview"},{title:"config.json",path:"technology/deployment-files/config-json"},{title:"secrets.env",path:"technology/deployment-files/secrets-env"},{title:"receipt.json",path:"technology/deployment-files/receipt-json"}]},{title:"Templates",children:["technology/templates/ois-json","technology/templates/config-json","technology/templates/secrets-env"]},{title:"Request-Response Protocol",collapsable:!0,initialOpenGroupIndex:-1,children:["technology/protocols/request-response/general-structure","technology/protocols/request-response/airnode","technology/protocols/request-response/endpoint","technology/protocols/request-response/authorizer","technology/protocols/request-response/requester","technology/protocols/request-response/client","technology/protocols/request-response/designated-wallet","technology/protocols/request-response/endorsement","technology/protocols/request-response/template","technology/protocols/request-response/request"]},"technology/cli-commands"]},{title:"(x) Homeless",initialOpenGroupIndex:0,collapsable:!0,children:["homeless/hardhat-starter",{title:"RRP Flow Chart",path:"technology/rrp-flowdiagram"}]}]},414:function(e,t){e.exports=[{title:"Introduction",collapsable:!1,children:[{title:"What is API3?",path:"/pre-alpha/"},"introduction/contributing"]},{title:"Fundamentals",collapsable:!1,children:[{title:"API",path:"fundamentals/apis"},"fundamentals/first-party-oracles","fundamentals/decentrally-governed-oracle-networks",{title:"dAPI",path:"fundamentals/dapis"}]},{title:"API3 Members",initialOpenGroupIndex:-1,collapsable:!0,children:["members/","members/another-file"]},{title:"Airnode",collapsable:!1,children:[{title:"Design Philosophy",path:"airnode/design-philosophy"},{title:"Implementation",path:"airnode/implementation"},{title:"Ethereum Providers",path:"airnode/ethereum-providers"},{title:"Specifications",children:[{title:"Oracle Integration Specifications (OIS)",path:"airnode/specifications/ois"},"airnode/specifications/airnode-abi-specifications","airnode/specifications/config-json","airnode/specifications/security-json","airnode/specifications/reserved-parameters"]}]},{title:"Request-Response Protocol",children:["protocols/request-response/general-structure","protocols/request-response/provider","protocols/request-response/endpoint","protocols/request-response/authorizer","protocols/request-response/requester","protocols/request-response/client","protocols/request-response/designated-wallet","protocols/request-response/endorsement","protocols/request-response/template","protocols/request-response/request"]},{title:"Guides",initialOpenGroupIndex:-1,collapsable:!1,children:[{title:"Provider",children:["guides/provider/api-integration","guides/provider/configuring-airnode","guides/provider/deploying-airnode","guides/provider/setting-authorizers"]},{title:"Requester",children:["guides/requester/creating-a-requester","guides/requester/developing-a-client-contract"]},{title:"Smart Contracts Platform",children:["guides/smart-contracts/is-my-platform-compatible","guides/smart-contracts/self-serve-integration"]},{title:"Docker",children:["guides/docker/client-image","guides/docker/deployer-image"]},{title:"Templates",children:["guides/templates/ois-json","guides/templates/config-json","guides/templates/security-json"]}]},{title:"Tutorials",collapsable:!1,children:["tutorials/airnode-starter",{title:"Config Examples",children:["tutorials/config-examples/authorizers-json","tutorials/config-examples/config-example-json","tutorials/config-examples/example-env","tutorials/config-examples/security-json"]}]}]},415:function(e,t){e.exports=[{title:"Development",collapsable:!1,children:["/dev/","/dev/theme","/dev/plugins","/dev/override-components","/dev/custom-components","/dev/versioning","/dev/github-actions","/dev/deployment","/dev/quirks"]}]},441:function(e,t,o){},493:function(e,t,o){"use strict";o(441)},509:function(e,t,o){"use strict";o.r(t);o(67),o(26),o(32),o(227),o(236),o(87);var r=o(219),s=o(0),i=o(411),n=o(401),l=o(437),a=o(412);s.a.component("font-awesome-icon",l.a),i.c.add(n.d,n.c,n.a,n.b);var p={computed:{currentVersion:function(){return this.$page.path.split("/")[1].replace(/\//g,"")}},data:function(){return{headers:a.sidebarHeaders}},methods:{select:function(e){var t=e.split("/")[1];console.log("\nRoute:",e),this.headers.forEach((function(o){if(o.vrs===t){var s,i=Object(r.a)(o.buttons);try{for(i.s();!(s=i.n()).done;){s.value.isActive=!1}}catch(e){i.e(e)}finally{i.f()}var n,l=!1,a=Object(r.a)(o.buttons);try{for(a.s();!(n=a.n()).done;){var p=n.value;if(p.isActive=!1,!p.info&&e.startsWith(p.baseUrl)){console.log("Activated:",p.baseUrl),p.isActive=!0,l=!0;break}}}catch(e){a.e(e)}finally{a.f()}!l&&o.buttons.length>0&&(console.log("Activated:",o.buttons[0].baseUrl),o.buttons[0].isActive=!0)}}))}},watch:{$route:function(e){this.select(this.$route.path)}},mounted:function(){this.$nextTick((function(){this.select(this.$route.path)}))}},c=(o(493),o(8)),d=Object(c.a)(p,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._l(e.headers,(function(t,r){return o("div",{key:r,staticClass:"container",attrs:{name:t.vrs,selected:t.vrs}},e._l(t.buttons,(function(r,s){return o("div",{key:s},[t.vrs===e.currentVersion&&r.info?o("div",[o("router-link",{staticClass:"route-link",class:{selectedButton:r.isActive},attrs:{to:r.baseUrl}},[o("font-awesome-icon",{staticStyle:{"font-size":"large","margin-top":"-30px"},attrs:{icon:r.img}})],1)],1):t.vrs!==e.currentVersion||r.info?e._e():o("div",[o("router-link",{staticClass:"route-link",class:{selectedButton:r.isActive},attrs:{to:r.baseUrl}},[o("font-awesome-icon",{attrs:{icon:r.img,size:"2x"}}),e._v(" "),o("br"),e._v(" "),o("span",{staticClass:"label"},[e._v(e._s(r.label))])],1)],1)])})),0)})),e._v(" "),o("div",{staticStyle:{"border-top":"solid 1px lightgrey","margin-bottom":"-10px"}})],2)}),[],!1,null,"5f4a676a",null);t.default=d.exports}}]);