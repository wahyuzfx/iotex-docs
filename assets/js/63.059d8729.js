(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{647:function(e,t,a){"use strict";a.r(t);var o=a(37),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"iotex-integration-with-exchanges"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iotex-integration-with-exchanges"}},[e._v("#")]),e._v(" IoTeX integration with Exchanges")]),e._v(" "),a("p",[e._v("This guide provides information and links to the relevant documentation for exchanges to integrate with the IoTeX blockchain.")]),e._v(" "),a("h2",{attrs:{id:"deploy-iotex-full-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-iotex-full-nodes"}},[e._v("#")]),e._v(" Deploy IoTeX Full Nodes")]),e._v(" "),a("p",[e._v("You'll need to deploy a few full nodes, for reading from and writing to the network. The full node stores the entire blockchain state, including pending actions/actions, and broadcasts new states (blocks, actions/actions) to the network.")]),e._v(" "),a("p",[e._v("Please follow "),a("a",{attrs:{href:"https://github.com/iotexproject/iotex-bootstrap#iotex-delegate-manual",target:"_blank",rel:"noopener noreferrer"}},[e._v("this guide"),a("OutboundLink")],1),e._v(" to setup a full node running with the "),a("code",[e._v("gateway")]),e._v(" plugin enabled.")]),e._v(" "),a("p",[e._v("Optionally, please follow "),a("a",{attrs:{href:"https://github.com/iotexproject/iotex-bootstrap/tree/master/infra/monitoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("this guide"),a("OutboundLink")],1),e._v(" to configure a dashboard for node monitoring. Alternatively, if you used the "),a("a",{attrs:{href:"https://github.com/iotexproject/iotex-bootstrap#upgrade",target:"_blank",rel:"noopener noreferrer"}},[e._v("one-line upgrader"),a("OutboundLink")],1),e._v(' to install the full node, you can just answer "Yes" to the following installer question:')]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Do you want to monitor the status of the node [Y/N] (Default: N)?) to setup the dashboard for monitoring.\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"interact-with-iotex-full-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interact-with-iotex-full-nodes"}},[e._v("#")]),e._v(" Interact with IoTeX Full Nodes")]),e._v(" "),a("p",[e._v("Once the full nodes are fully synced, one can communicate with them via "),a("a",{attrs:{href:"https://grpc.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC"),a("OutboundLink")],1),e._v(" service specified in the configuration file: see the full "),a("a",{attrs:{href:"../core-api/api"}},[e._v("API reference docs")]),e._v(" and the corresponding proto files on "),a("a",{attrs:{href:"https://github.com/iotexproject/iotex-proto",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"generate-new-accounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generate-new-accounts"}},[e._v("#")]),e._v(" Generate New Accounts")]),e._v(" "),a("p",[e._v("A IoTeX account can be generated via "),a("a",{attrs:{href:"https://github.com/iotexproject/iotex-address/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("this algorithm"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("If you have not installed the latest "),a("strong",[e._v("ioctl Command line client")]),e._v(", please check out the installation "),a("a",{attrs:{href:"../ioctl/install"}},[e._v("instructions")]),e._v(".")])]),e._v(" "),a("p",[e._v("New accounts can be generated using ioctl command line client, which will provide the private key and corresponding public keys and IoTeX address. See "),a("a",{attrs:{href:"../get-started/ioctl-create-account"}},[e._v("this example")]),e._v(" for more details about how to create a IoTeX account with ioctl.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("So far, gRPC Core API does not support the creation of new accounts.")])]),e._v(" "),a("h2",{attrs:{id:"send-iotx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#send-iotx"}},[e._v("#")]),e._v(" Send IOTX")]),e._v(" "),a("p",[e._v("To send a signed action, the "),a("RouterLink",{attrs:{to:"/developer/core-api/api.html#sendaction"}},[e._v("/APIService/SendAction")]),e._v(" gRPC endpoint can be used, or ioctl command line client can be used also: see "),a("a",{attrs:{href:"/developer/get-started/ioctl-send-transfer"}},[e._v("this example")]),e._v(" for more details on how to send a signed action using ioctl.")],1),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("For safety and auditing reasons, after a new action gets added to the blockchain (whether it's a user deposit or a withdraw) the exchange must retrieve the action data and verify the following:")]),e._v(" "),a("ol",[a("li",[e._v("The status of the receipt must equal 1 ("),a("em",[e._v("success")]),e._v(")")]),e._v(" "),a("li",[e._v('The action type must be "transfer"')]),e._v(" "),a("li",[e._v("The amount equals to the deposit [withdraw] amount")]),e._v(" "),a("li",[e._v("The sender and recipient matches with intended parties")]),e._v(" "),a("li",[e._v("The timestamp of the action roughly equals the actual time of sending the raw action to blockchain (within 5~10 seconds range)")])])]),e._v(" "),a("p",[e._v("Here's an "),a("a",{attrs:{href:"https://iotexscan.io/action/355bd7b93dadc18c2d2689cd400272d28ad28df8e6a1555086233c4b619adfee",target:"_blank",rel:"noopener noreferrer"}},[e._v("example"),a("OutboundLink")],1),e._v(" of the data associated to a IoTeX action.")]),e._v(" "),a("h2",{attrs:{id:"retrieve-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retrieve-actions"}},[e._v("#")]),e._v(" Retrieve actions")]),e._v(" "),a("p",[e._v("One can retrieve confirmed actions as well as pending (unconfirmed) actions by using "),a("code",[e._v("/APIService/GetActions")]),e._v(" endpoint. Examples are given below:")]),e._v(" "),a("ol",[a("li",[a("RouterLink",{attrs:{to:"/developer/core-api/api.html#getactionbyhash"}},[e._v("Get action by action hash")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/developer/core-api/api.html#getunconfirmedactionsbyaddress"}},[e._v("Get confirmed actions by address")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/developer/core-api/api.html#getunconfirmedactionsbyaddress"}},[e._v("Get unconfirmed actions by address")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/developer/core-api/api.html#getactionsbyblock"}},[e._v("Get actions by block")])],1)]),e._v(" "),a("p",[e._v("One can also use ioctl commandline tool to "),a("RouterLink",{attrs:{to:"/developer/ioctl/action.html#query-action"}},[e._v("query an action by hash")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"retrieve-actions-via-contracts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retrieve-actions-via-contracts"}},[e._v("#")]),e._v(" Retrieve actions via contracts")]),e._v(" "),a("p",[e._v("One can retrieve confirmed actions via contracts by using "),a("code",[e._v("/APIService/GetEVMTransfersByBlockHeight")]),e._v(" and "),a("code",[e._v("/APIService/GetEVMTransfersByActionHash")]),e._v(" endpoints. Examples are given below:")]),e._v(" "),a("ol",[a("li",[a("RouterLink",{attrs:{to:"/developer/core-api/api.html#getevmtransfersbyactionhash"}},[e._v("Get EVM transfers by action hash")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/developer/core-api/api.html#getevmtransfersbyblockheight"}},[e._v("Get EVM transfers by block height")])],1)]),e._v(" "),a("p",[e._v("**Note that you need to turn on "),a("RouterLink",{attrs:{to:"/developer/#gateway"}},[e._v("System Action Log")]),e._v(" feature if you run your own node as gateway.")],1),e._v(" "),a("h2",{attrs:{id:"retrieve-blocks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retrieve-blocks"}},[e._v("#")]),e._v(" Retrieve Blocks")]),e._v(" "),a("p",[e._v("One can retrieve blocks that contain the target transfers by using "),a("code",[e._v("/APIService/GetBlockMetas")]),e._v(" gRPC endpoint. Examples are given below:")]),e._v(" "),a("ol",[a("li",[a("RouterLink",{attrs:{to:"/developer/core-api/api.html#getblockmetasbyindex"}},[e._v("Get block metadata by index")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/developer/core-api/api.html#getblockmetasbyhash"}},[e._v("Get block metadata by block hash")])],1)]),e._v(" "),a("p",[e._v("One can also use ioctl commandline tool to "),a("a",{attrs:{href:"https://docs.iotex.io/#query-block",target:"_blank",rel:"noopener noreferrer"}},[e._v("query a block by height or hash"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"retrieve-transaction-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retrieve-transaction-log"}},[e._v("#")]),e._v(" Retrieve transaction Log")]),e._v(" "),a("p",[e._v("One can retrieve transaction logs that contain the target transfers by using "),a("code",[e._v("/APIService/GetactionLogByBlockHeight")]),e._v(" and "),a("code",[e._v("/APIService/GetactionLogByActionHash")]),e._v(" endpoints. Examples are given below:")]),e._v(" "),a("ol",[a("li",[a("RouterLink",{attrs:{to:"/developer/core-api/api.html#gettransactionlogbyblockheight"}},[e._v("Get transaction logs by block height")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/developer/core-api/api.html#gettransactionlogbyactionhash"}},[e._v("Get transaction logs by action hash")])],1)]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v('If you get an "'),a("strong",[e._v("unimplemented")]),e._v('" error code, with a message like "'),a("strong",[e._v("feature not supported")]),e._v('" when calling an action log APIs, please resync your node from 0, or download our latest snapshot with index data. Check out the '),a("a",{attrs:{href:"https://github.com/iotexproject/iotex-bootstrap#mainnet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gateway node setup and snapshot download guides"),a("OutboundLink")],1),e._v(" for more instructions.")])]),e._v(" "),a("h2",{attrs:{id:"rosetta-api-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rosetta-api-support"}},[e._v("#")]),e._v(" Rosetta API support")]),e._v(" "),a("p",[e._v("One can deploy a rosetta gateway along with a IoTeX mainnet node and use the rosetta API instead. For more about Rosetta support see the "),a("a",{attrs:{href:"rosetta"}},[e._v("Rosetta Integration document")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"testing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[e._v("#")]),e._v(" Testing")]),e._v(" "),a("p",[e._v("Once you've fully integrated with the IoTeX blockchain, please make accurate tests on both testnet and mainnet. All states of the IoTeX blockchain can be queried through either the command line tool "),a("a",{attrs:{href:"/developer/get-started/ioctl-install"}},[e._v("ioctl")]),e._v(" or the official IoTeX explorers for ("),a("a",{attrs:{href:"https://iotexscan.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mainnet"),a("OutboundLink")],1),e._v("ì and "),a("a",{attrs:{href:"https://testnet.iotexscan.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Testnet"),a("OutboundLink")],1),e._v(").")]),e._v(" "),a("p",[e._v("Please reach to IoTeX Team if you have any question.")])])}),[],!1,null,null,null);t.default=n.exports}}]);