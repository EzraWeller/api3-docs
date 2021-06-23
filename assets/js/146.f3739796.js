(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{640:function(e,t,r){"use strict";r.r(t);var s=r(8),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"frontmatter-title"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),r("TocHeader"),e._v(" "),r("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),e._v(" "),r("p",[e._v("A requester is an entity (individual, business, etc.) whose contracts make requests to "),r("RouterLink",{attrs:{to:"/pre-alpha/protocols/request-response/provider.html"}},[e._v("providers")]),e._v(".\nThese contracts are called "),r("RouterLink",{attrs:{to:"/pre-alpha/protocols/request-response/client.html"}},[e._v("clients")]),e._v(".")],1),e._v(" "),r("p",[e._v("After a client makes a request, the provider uses the respective requester's "),r("RouterLink",{attrs:{to:"/pre-alpha/protocols/request-response/designated-wallet.html"}},[e._v("designated wallet")]),e._v(" to fulfill the request, meaning that the requester covers the gas cost.\nThis relationship between the requester and the client is announced by the requester "),r("RouterLink",{attrs:{to:"/pre-alpha/protocols/request-response/endorsement.html"}},[e._v("endorsing")]),e._v(" the client.")],1),e._v(" "),r("h2",{attrs:{id:"requesterindex"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requesterindex"}},[e._v("#")]),e._v(" "),r("code",[e._v("requesterIndex")])]),e._v(" "),r("p",[e._v("A requester needs to create a record on-chain, which results in them being assigned a requester index ("),r("code",[e._v("requesterIndex")]),e._v(").\nNote that unlike "),r("code",[e._v("providerId")]),e._v(", this index will not be the same across all chains.")]),e._v(" "),r("p",[e._v("A requester can use the "),r("RouterLink",{attrs:{to:"/pre-alpha/protocols/request-response/provider.html#xpub"}},[r("code",[e._v("xpub")]),e._v(" of a provider")]),e._v(" and their "),r("code",[e._v("requesterIndex")]),e._v(" to derive the address of their "),r("RouterLink",{attrs:{to:"/pre-alpha/protocols/request-response/designated-wallet.html"}},[e._v("designated wallet")]),e._v(" for that provider.")],1),e._v(" "),r("h2",{attrs:{id:"requesteradmin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requesteradmin"}},[e._v("#")]),e._v(" "),r("code",[e._v("requesterAdmin")])]),e._v(" "),r("p",[r("code",[e._v("requesterAdmin")]),e._v(" is an address that is authorized to update the requester-related properties (e.g., endorsements).")]),e._v(" "),r("h2",{attrs:{id:"requesters-and-identity"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requesters-and-identity"}},[e._v("#")]),e._v(" Requesters and identity")]),e._v(" "),r("p",[e._v("Note that a single entity can create multiple requester records on-chain, and have multiple "),r("code",[e._v("requesterIndex")]),e._v("s associated.\nBelow are some example reasons why one would want to have multiple requester identities on-chain:")]),e._v(" "),r("ul",[r("li",[e._v("To keep separate designated wallets for two separate use-cases for easier accounting")]),e._v(" "),r("li",[e._v("To duplicate transaction queues for a single use-case and increase response throughput")])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);