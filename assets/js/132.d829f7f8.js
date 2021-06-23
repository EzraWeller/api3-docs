(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{625:function(t,e,a){"use strict";a.r(e);var s=a(8),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),a("TocHeader"),t._v(" "),a("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),t._v(" "),a("p",[t._v("Assuming you have determined that your platform "),a("RouterLink",{attrs:{to:"/pre-alpha/guides/smart-contracts/is-my-platform-compatible.html"}},[t._v("is compatible")]),t._v(", you can attempt to do the integration yourself by following the steps below.")],1),t._v(" "),a("h2",{attrs:{id:"part-1-protocol-contract-deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#part-1-protocol-contract-deployment"}},[t._v("#")]),t._v(" Part 1: Protocol contract deployment")]),t._v(" "),a("p",[a("em",[t._v("Replace parts starting with "),a("code",[t._v("$")])])]),t._v(" "),a("ol",[a("li",[t._v("Clone the "),a("a",{attrs:{href:"https://github.com/api3dao/airnode",target:"_blank",rel:"noopener noreferrer"}},[t._v("Airnode monorepo"),a("OutboundLink")],1),t._v(" (currently you need to use the "),a("code",[t._v("pre-alpha")]),t._v(" branch)")])]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --single-branch --branch pre-alpha https://github.com/api3dao/airnode.git\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Install its dependencies and build it")])]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" airnode\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" run bootstrap\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" run build\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Go to the "),a("a",{attrs:{href:"https://github.com/api3dao/airnode/tree/pre-alpha/packages/protocol",target:"_blank",rel:"noopener noreferrer"}},[t._v("protocol package"),a("OutboundLink")],1)])]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" packages/protocol\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("Create a "),a("code",[t._v("credentials.json")]),t._v(" file, similar to "),a("a",{attrs:{href:"https://github.com/api3dao/airnode/blob/pre-alpha/packages/protocol/credentials.example.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("credentials.example.json"),a("OutboundLink")],1)])]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" credentials.example.json credentials.json\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("Add the following entry to "),a("code",[t._v("credentials.json")])])]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"$CHAIN_NAME"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mnemonic"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$MNEMONIC"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"providerUrl"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$PROVIDER_URL"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[a("code",[t._v("$CHAIN_NAME")]),t._v(" is the name that will be used to refer to your chain.")]),t._v(" "),a("p",[a("code",[t._v("$MNEMONIC")]),t._v(" is the mnemonic of the wallet that you will use to deploy the protocol contracts.\nMake sure that it is funded (if applicable).")]),t._v(" "),a("p",[a("code",[t._v("$PROVIDER_URL")]),t._v(" is the URL of the node JSON-RPC API you will use to deploy the protocol contracts.")]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[t._v("Add the following entry to "),a("a",{attrs:{href:"https://github.com/api3dao/airnode/blob/pre-alpha/packages/protocol/hardhat.config.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("hardhat.config.js"),a("OutboundLink")],1)])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("$"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CHAIN_NAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" credentials"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CHAIN_NAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("providerUrl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      accounts"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mnemonic"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" credentials"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CHAIN_NAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mnemonic "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("ol",{attrs:{start:"7"}},[a("li",[t._v("Add the following script to "),a("a",{attrs:{href:"https://github.com/api3dao/airnode/blob/pre-alpha/packages/protocol/package.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("package.json"),a("OutboundLink")],1)])]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"deploy:$CHAIN_NAME"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hardhat deploy --network $CHAIN_NAME"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"8"}},[a("li",[t._v("Finally, run the added script to deploy the contracts, which will record the deployment details including the contract address in the "),a("a",{attrs:{href:"https://github.com/api3dao/airnode/tree/pre-alpha/packages/protocol/deployments",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("/deployments")]),a("OutboundLink")],1),t._v(" directory.")])]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" run deploy:"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$CHAIN_NAME")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("If your chain has a customized flow for deploying contracts, you can find the bytecodes of the compiled contracts in the "),a("code",[t._v("artifacts/")]),t._v(" directory.")]),t._v(" "),a("p",[t._v("Note that you will need to deploy both "),a("RouterLink",{attrs:{to:"/pre-alpha/protocols/request-response/general-structure.html#airnode-sol"}},[t._v("Airnode.sol")]),t._v(" and "),a("RouterLink",{attrs:{to:"/pre-alpha/protocols/request-response/general-structure.html#convenience-sol"}},[t._v("Convenience.sol")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"part-2-make-a-test-call"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#part-2-make-a-test-call"}},[t._v("#")]),t._v(" Part 2: Make a test call")]),t._v(" "),a("p",[t._v("After completing Part 1, you must have two contract addresses, one for "),a("code",[t._v("Airnode.sol")]),t._v(" and one for "),a("code",[t._v("Convenience.sol")]),t._v(".\nNow follow the steps below to make a test call:")]),t._v(" "),a("ol",[a("li",[t._v("Clone the "),a("a",{attrs:{href:"https://github.com/api3dao/airnode-starter/tree/pre-alpha",target:"_blank",rel:"noopener noreferrer"}},[t._v("airnode-starter"),a("OutboundLink")],1),t._v(" repo")])]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --single-branch --branch pre-alpha https://github.com/api3dao/airnode-starter.git\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("Open the "),a("a",{attrs:{href:"https://github.com/api3dao/airnode-starter/blob/pre-alpha/config/config.example.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("config.example.json"),a("OutboundLink")],1),t._v(" file in "),a("code",[t._v("config/")]),t._v(".\nReplace the following values:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("nodeSettings.chains.0.id")]),t._v(": "),a("code",[t._v("3")]),t._v(" -> The ID of your chain")]),t._v(" "),a("li",[a("code",[t._v("nodeSettings.chains.contracts.Airnode")]),t._v(": "),a("code",[t._v("0xF8d32C3e53F7DA6e7CB82323f2cAB2159776b832")]),t._v(" -> The address of the "),a("code",[t._v("Airnode.sol")]),t._v(" contract you have deployed")]),t._v(" "),a("li",[a("code",[t._v("nodeSettings.chains.contracts.Convenience")]),t._v(": "),a("code",[t._v("0x1552cF617711D6Da04E0EDC9e5C26eBbA08625ac")]),t._v(" -> The address of the "),a("code",[t._v("Convenience.sol")]),t._v(" contract you have deployed")])])]),t._v(" "),a("li",[a("p",[t._v("Follow the "),a("a",{attrs:{href:"https://github.com/api3dao/airnode-starter/tree/pre-alpha#setup#setup",target:"_blank",rel:"noopener noreferrer"}},[t._v("instructions"),a("OutboundLink")],1),t._v(" (both Step 1 and 2).\nNote that you can use the "),a("code",[t._v("$MNEMONIC")]),t._v(" and the "),a("code",[t._v("$PROVIDER_URL")]),t._v(" you have used while deploying the contracts in your "),a("code",[t._v(".env")]),t._v(" file.")])])]),t._v(" "),a("p",[t._v("The final step of the instructions is to run the "),a("code",[t._v("make-request")]),t._v(" script, which will make a request on your chain for the Airnode to fulfill it.\nThis example project working as intended is a very good indicator that the integration has succeeded.\nAfter doing this, you are recommended to take a deep dive into "),a("a",{attrs:{href:"https://github.com/api3dao/api3-docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("our docs"),a("OutboundLink")],1),t._v(" next to learn more about Airnode and its protocol.")])],1)}),[],!1,null,null,null);e.default=r.exports}}]);