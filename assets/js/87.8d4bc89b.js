(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{577:function(e,t,a){"use strict";a.r(t);var s=a(8),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),a("TocHeader"),e._v(" "),a("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),e._v(" "),a("p",[e._v("A package/CLI tool to interact with Airnode across blockchains. There are commands for both requesters and API providers. Requesters can endorse "),a("RouterLink",{attrs:{to:"/next/technology/protocols/request-response/client.html"}},[e._v("client contracts")]),e._v(" and fund Airnodes. API providers can build "),a("RouterLink",{attrs:{to:"/next/technology/protocols/request-response/airnode.html"}},[e._v("Airnodes")]),e._v(" that serve their API data to requester client contracts.")],1),e._v(" "),a("p",[e._v("Almost all commands require you to provide a "),a("code",[e._v("providerUrl")]),e._v(" such as "),a("code",[e._v("https://ropsten.infura.io/v3/<KEY>")]),e._v(", "),a("code",[e._v("https://xdai.poanetwork.dev")]),e._v(", etc.\nThe CLI connects to "),a("a",{attrs:{href:"https://github.com/api3dao/airnode/blob/master/packages/protocol/contracts/AirnodeRrp.sol",target:"_blank",rel:"noopener noreferrer"}},[e._v("AirnodeRrp.sol"),a("OutboundLink")],1),e._v(" contract, which address is derived from the current chain.\nYou can optionally specify the contract address yourself by providing optional "),a("code",[e._v("airnodeRrp")]),e._v(" command argument with address of the deployed contract on your targeted chain.")]),e._v(" "),a("p",[e._v("Commands that require "),a("code",[e._v("mnemonic")]),e._v(" will make an on-chain transaction.\nThe application will derive the account from the mnemonic with default ethereum derivation path "),a("code",[e._v("m/44'/60'/0'/0/0")]),e._v(", but you can override this by "),a("code",[e._v("derivationPath")]),e._v(" flag.\nMake sure that the wallet that is associated with the mnemonic is funded on the target chain.\nThe application will not exit until the transaction is confirmed.")]),e._v(" "),a("p",[a("strong",[e._v("View all commands:")])]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("npx @api3/airnode-admin --help\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("strong",[e._v("View the parameters of a command:")])]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("npx @api3/airnode-admin "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$COMMAND")]),e._v(" --help\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sdk"}},[e._v("#")]),e._v(" SDK")]),e._v(" "),a("p",[e._v("You can also use the package programmatically. The SDK exports respective functions for all CLI commands as\nwell as helper functions for obtaining the contract instance on the targeted chain.")]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" createRequester"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" getAirnodeRrpWithSigner "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'@api3/admin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// First obtain the contract instance on target chain")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" airnodeRrp "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("getAirnodeRrpWithSigner")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("mnemonic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" derivationPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" providerUrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" airnodeRrpAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Pass the contract instance as the first argument to the SDK function")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" requesterIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("createRequester")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("airnodeRrp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" requesterAdmin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("If you plan to use multiple commands it might be tedious to pass the contract instance to every function call. For this reason there is also class based "),a("code",[e._v("AdminSdk")]),e._v(" which you initialize with "),a("code",[e._v("AirnodeRrp")]),e._v(" contract only once.")]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" AdminSdk "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'@api3/admin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// First initialize the SDK with AirnodeRrp contract instance.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// You can use static AdminSdk functions or provide your own instance.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" airnodeRrp "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" AdminSdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("getAirnodeRrpWithSigner")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("mnemonic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" derivationPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" providerUrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" airnodeRrpAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Create sdk instance")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" adminSdk "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("AdminSdk")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("airnodeRrp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Call the method you need")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" requesterIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" adminSdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("createRequester")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("requesterAdmin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// You can switch the contract instance anytime. E.g. if you are using ethers")]),e._v("\nadminSdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("airnodeRrp "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" airnodeRrp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("someOtherWallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br")])]),a("p",[e._v("The SDK will also provide TS typings out of the box.\nPlease, refer to the implementation for more details.")]),e._v(" "),a("h2",{attrs:{id:"requester-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requester-commands"}},[e._v("#")]),e._v(" Requester commands")]),e._v(" "),a("h3",{attrs:{id:"create-requester"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-requester"}},[e._v("#")]),e._v(" "),a("code",[e._v("create-requester")])]),e._v(" "),a("p",[e._v("Creates a "),a("a",{attrs:{href:"https://github.com/api3dao/api3-docs/blob/master/request-response-protocol/requester.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("requester"),a("OutboundLink")],1),e._v(" and returns a requester index.\nNote down your requester index because you will be using it in future interactions.")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("npx @api3/airnode-admin create-requester "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --providerUrl https://ropsten.infura.io/v3/"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("KEY"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --mnemonic "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nature about salad..."')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --requesterAdmin 0x5c17cb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h3",{attrs:{id:"set-requester-admin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-requester-admin"}},[e._v("#")]),e._v(" "),a("code",[e._v("set-requester-admin")])]),e._v(" "),a("p",[e._v("Sets the "),a("a",{attrs:{href:"https://github.com/api3dao/api3-docs/blob/master/request-response-protocol/requester.md#requesteradmin",target:"_blank",rel:"noopener noreferrer"}},[e._v("requester admin"),a("OutboundLink")],1),e._v(".\nThe account derived from the "),a("code",[e._v("mnemonic")]),e._v(" you provide here has to belong to the previous requester admin.")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("npx @api3/airnode-admin set-requester-admin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --providerUrl https://ropsten.infura.io/v3/"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("KEY"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --mnemonic "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nature about salad..."')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --requesterIndex "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --requesterAdmin 0xe97301"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("h3",{attrs:{id:"derive-designated-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#derive-designated-wallet"}},[e._v("#")]),e._v(" "),a("code",[e._v("derive-designated-wallet")])]),e._v(" "),a("p",[e._v("Derives the address of the "),a("a",{attrs:{href:"https://github.com/api3dao/api3-docs/blob/master/request-response-protocol/designated-wallet.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("wallet designated by an Airnode for a requester"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("npx @api3/airnode-admin derive-designated-wallet "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --providerUrl https://ropsten.infura.io/v3/"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("KEY"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --airnodeId 0xe1e0dd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(". "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --requesterIndex "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h3",{attrs:{id:"endorse-client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endorse-client"}},[e._v("#")]),e._v(" "),a("code",[e._v("endorse-client")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/api3dao/api3-docs/blob/master/request-response-protocol/endorsement.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Endorses"),a("OutboundLink")],1),e._v(" a client contract so that its requests can be fulfilled by the requester's designated wallet.\nThe account derived from the "),a("code",[e._v("mnemonic")]),e._v(" you provide here has to belong to the requester admin.")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("npx @api3/airnode-admin endorse-client "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --providerUrl https://ropsten.infura.io/v3/"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("KEY"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --mnemonic "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nature about salad..."')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --requesterIndex "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --clientAddress 0x2c2e12"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("h3",{attrs:{id:"unendorse-client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unendorse-client"}},[e._v("#")]),e._v(" "),a("code",[e._v("unendorse-client")])]),e._v(" "),a("p",[e._v("Unendorses a client contract so that its requests can no longer be fulfilled by the requester's designated wallet.\nThe account derived from the "),a("code",[e._v("mnemonic")]),e._v(" you provide here has to belong to the requester admin.")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("npx @api3/airnode-admin unendorse-client "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --providerUrl https://ropsten.infura.io/v3/"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("KEY"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --mnemonic "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nature about salad..."')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --requesterIndex "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --clientAddress 0x2c2e12"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("h3",{attrs:{id:"get-endorsement-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-endorsement-status"}},[e._v("#")]),e._v(" "),a("code",[e._v("get-endorsement-status")])]),e._v(" "),a("p",[e._v("Returns the endorsement status for the given requester index and client ("),a("code",[e._v("true")]),e._v(" if endorsed, "),a("code",[e._v("false")]),e._v(" otherwise).")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("npx @api3/airnode-admin get-endorsement-status "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --providerUrl https://ropsten.infura.io/v3/"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("KEY"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --requesterIndex "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --clientAddress 0x2c2e12"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h3",{attrs:{id:"create-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-template"}},[e._v("#")]),e._v(" "),a("code",[e._v("create-template")])]),e._v(" "),a("p",[e._v("Reads a file, uses its contents to create a "),a("a",{attrs:{href:"https://github.com/api3dao/api3-docs/blob/master/request-response-protocol/template.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("template"),a("OutboundLink")],1),e._v(" and returns the template ID.\nSee the "),a("code",[e._v("/example")]),e._v(" directory for an example template file.")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("npx @api3/airnode-admin create-template "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --providerUrl https://ropsten.infura.io/v3/"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("KEY"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --mnemonic "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nature about salad..."')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --templateFilePath ./template.json\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h3",{attrs:{id:"get-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-template"}},[e._v("#")]),e._v(" "),a("code",[e._v("get-template")])]),e._v(" "),a("p",[e._v("Returns the template for the given "),a("code",[e._v("templateId")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("npx @api3/airnode-admin get-template "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --providerUrl https://ropsten.infura.io/v3/"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("KEY"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --templateId 0x8d3b9"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("h3",{attrs:{id:"request-withdrawal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-withdrawal"}},[e._v("#")]),e._v(" "),a("code",[e._v("request-withdrawal")])]),e._v(" "),a("p",[e._v("Requests a "),a("a",{attrs:{href:"https://github.com/api3dao/api3-docs/blob/master/request-response-protocol/designated-wallet.md#withdrawals",target:"_blank",rel:"noopener noreferrer"}},[e._v("withdrawal"),a("OutboundLink")],1),e._v(" from the wallet designated by an Airnode for a requester, and returns the request ID.\nThe account derived from the "),a("code",[e._v("mnemonic")]),e._v(" you provide here has to belong to the requester admin.")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("npx @api3/airnode-admin request-withdrawal "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --providerUrl https://ropsten.infura.io/v3/"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("KEY"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --mnemonic "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nature about salad..."')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --airnodeId 0xe1e0dd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(". "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --requesterIndex "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --destination 0x98aaba"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("h3",{attrs:{id:"check-withdrawal-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-withdrawal-request"}},[e._v("#")]),e._v(" "),a("code",[e._v("check-withdrawal-request")])]),e._v(" "),a("p",[e._v("Checks the status of the withdrawal request with the given ID.")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("npx @api3/airnode-admin check-withdrawal-request "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --providerUrl https://ropsten.infura.io/v3/"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("KEY"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --withdrawalRequestId 0x011d1b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("h2",{attrs:{id:"airnode-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#airnode-commands"}},[e._v("#")]),e._v(" Airnode commands")]),e._v(" "),a("h3",{attrs:{id:"set-airnode-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-airnode-parameters"}},[e._v("#")]),e._v(" "),a("code",[e._v("set-airnode-parameters")])]),e._v(" "),a("p",[e._v("Sets the parameters of an "),a("a",{attrs:{href:"https://github.com/api3dao/api3-docs/blob/master/request-response-protocol/provider.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Airnode"),a("OutboundLink")],1),e._v(" and returns the Airnode ID.\nSee the "),a("code",[e._v("/example")]),e._v(" directory for an example authorizers file.")]),e._v(" "),a("p",[a("strong",[e._v("You probably should not be using this.")]),e._v("\nAirnode will set its own parameters during "),a("a",{attrs:{href:"https://github.com/api3dao/api3-docs/blob/master/provider-guides/deploying-airnode.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("deployment"),a("OutboundLink")],1),e._v(" if necessary.")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("npx @api3/airnode-admin set-airnode-parameters "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --providerUrl https://ropsten.infura.io/v3/"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("KEY"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --mnemonic "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nature about salad..."')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --airnodeAdmin 0xc2193d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(". "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --authorizersFilePath ./authorizers.json\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("h3",{attrs:{id:"get-airnode-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-airnode-parameters"}},[e._v("#")]),e._v(" "),a("code",[e._v("get-airnode-parameters")])]),e._v(" "),a("p",[e._v("Returns the Airnode parameters and block number for the given "),a("code",[e._v("airnodeId")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("npx @api3/airnode-admin get-airnode-parameters "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --providerUrl https://ropsten.infura.io/v3/"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("KEY"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --airnodeId 0xe1e0dd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("h3",{attrs:{id:"derive-endpoint-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#derive-endpoint-id"}},[e._v("#")]),e._v(" "),a("code",[e._v("derive-endpoint-id")])]),e._v(" "),a("p",[e._v("Derives the endpoint ID using the OIS title and the endpoint name using the convention described "),a("a",{attrs:{href:"https://github.com/api3dao/api3-docs/blob/master/provider-guides/configuring-airnode.md#triggers",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("npx @api3/airnode-admin derive-endpoint-id "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --oisTitle "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"My OIS title..."')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --endpointName "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"My endpoint name..."')]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("h2",{attrs:{id:"more-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#more-examples"}},[e._v("#")]),e._v(" More examples")]),e._v(" "),a("p",[e._v("You can find more examples in the "),a("em",[e._v("@api3-dao/airnode/package/admin")]),e._v(" "),a("a",{attrs:{href:"https://github.com/api3dao/airnode/tree/master/packages/admin/test",target:"_blank",rel:"noopener noreferrer"}},[e._v("test files"),a("OutboundLink")],1),e._v(".")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);