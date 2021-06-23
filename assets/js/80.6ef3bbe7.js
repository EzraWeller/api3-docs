(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{568:function(e,t,r){"use strict";r.r(t);var o=r(8),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"frontmatter-title"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),r("TocHeader"),e._v(" "),r("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),e._v(" "),r("p",[e._v("A "),r("RouterLink",{attrs:{to:"/technology/protocols/request-response/client.html"}},[e._v("client")]),e._v(" is a contract that makes requests to "),r("RouterLink",{attrs:{to:"/technology/protocols/request-response/provider.html"}},[e._v("providers")]),e._v(" using the "),r("RouterLink",{attrs:{to:"/technology/protocols/request-response/general-structure.html#airnode-sol"}},[e._v("Airnode.sol")]),e._v(" contract that implements the protocol.\nA client is "),r("RouterLink",{attrs:{to:"/technology/protocols/request-response/endorsement.html"}},[e._v("endorsed")]),e._v(" by a "),r("RouterLink",{attrs:{to:"/technology/protocols/request-response/requester.html"}},[e._v("requester")]),e._v(", which means that it can specify its request to be fulfilled by the respective requester's "),r("RouterLink",{attrs:{to:"/technology/protocols/request-response/designated-wallet.html"}},[e._v("designated wallet")]),e._v(".")],1),e._v(" "),r("p",[e._v("The Airnode protocol is designed to be flexible, and is meant to serve a variety of use cases.\nSee the "),r("a",{attrs:{href:"https://github.com/api3dao/airnode-client-examples/tree/pre-alpha",target:"_blank",rel:"noopener noreferrer"}},[e._v("Airnode client examples"),r("OutboundLink")],1),e._v(" for some potential design patterns.\nThe first step a requester needs to take is to develop and deploy such a client contract.")]),e._v(" "),r("h2",{attrs:{id:"endorsing-your-contract"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#endorsing-your-contract"}},[e._v("#")]),e._v(" Endorsing your contract")]),e._v(" "),r("p",[e._v("Assuming you have already "),r("RouterLink",{attrs:{to:"/next/grp-requesters/creating-a-requester.html"}},[e._v("created a requester")]),e._v(", you should endorse the client contract so that it can make requests.\nYou can use "),r("a",{attrs:{href:"https://github.com/api3dao/airnode/tree/pre-alpha/packages/admin#endorse-client",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("@api3/airnode-admin")]),r("OutboundLink")],1),e._v(" to endorse client contracts.\nEndorsing a client contract means it can make requests that will be fulfilled by the designated wallet associated with your requester record.\nYou can use "),r("a",{attrs:{href:"https://github.com/api3dao/airnode/tree/pre-alpha/packages/admin#derive-designated-wallet",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("@api3/airnode-admin")]),r("OutboundLink")],1),e._v(" to derive your designated wallet and fund it so that the provider you have made requests to can fulfill your requests.")],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);