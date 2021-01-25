(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{640:function(e,t,r){"use strict";r.r(t);var o=r(37),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"flashing-the-bootloader-firmware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flashing-the-bootloader-firmware"}},[e._v("#")]),e._v(" Flashing the Bootloader Firmware")]),e._v(" "),r("p",[e._v("The bootloader firmware is the software that runs before any other when the Pebble device is powered, and it is responsible for low level operations like booting into the application software, entering the DFU mode, etc...")]),e._v(" "),r("h2",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("p",[e._v("The bootloader firmware cannot update itself through the USB interface, therefore you will need an appropriate hardware programmer to update the bootloader, like the "),r("a",{attrs:{href:"https://www.segger.com/products/debug-probes/j-link/models/j-link-edu-mini/",target:"_blank",rel:"noopener noreferrer"}},[e._v("J-Link EDU Mini"),r("OutboundLink")],1),e._v(". Additionally, you need Segger Embedded Studio (Nordic Edition) to update the bootloader using the J-Link programmer.")]),e._v(" "),r("h2",{attrs:{id:"open-the-firmware-project-in-ses"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#open-the-firmware-project-in-ses"}},[e._v("#")]),e._v(" Open the Firmware project in SES")]),e._v(" "),r("p",[e._v("Follow "),r("RouterLink",{attrs:{to:"/developer/hardware/pebble-build-windows.html#open-and-configure-the-embedded-studio-ide"}},[e._v("the firmware build document")]),e._v(" to install the Nordic SDK, and to install and configure Segger Embedded Studio.")],1),e._v(" "),r("h2",{attrs:{id:"connect-the-j-link-programmer-to-pebble"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#connect-the-j-link-programmer-to-pebble"}},[e._v("#")]),e._v(" Connect the J-Link programmer to Pebble")]),e._v(" "),r("p",[e._v("Pebble comes with a 10-pins debugger connector that can be used to plug in the J-Link programmer:")]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/developer/pebble-jlink-port.png",alt:""}})]),e._v(" "),r("ol",[r("li",[e._v("Power Pebble through the USB port")]),e._v(" "),r("li",[e._v("Connect the J-Link programmer to Pebble J-Link connector")]),e._v(" "),r("li",[e._v("Connect the J-Link programmer USB to your PC")])]),e._v(" "),r("h2",{attrs:{id:"download-the-firmware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#download-the-firmware"}},[e._v("#")]),e._v(" Download the firmware")]),e._v(" "),r("ol",[r("li",[e._v("In "),r("RouterLink",{attrs:{to:"/developer/hardware/pebble-build-windows.html#open-and-configure-the-embedded-studio-ide"}},[e._v("Segger Embedded Studio")]),e._v(" open the Pebble Firmware project.")],1),e._v(" "),r("li",[e._v("From the "),r("code",[e._v("Target")]),e._v(" menu, select "),r("code",[e._v("Download zephyr/merged.hex")]),e._v(": this will download both the application and the bootloader firmware at the same time:")])]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/developer/pebble-bootloader-download.png",alt:""}})]),e._v(" "),r("h2",{attrs:{id:"troubleshooting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),r("p",[e._v("From the "),r("code",[e._v("Target")]),e._v(" menu, you can select "),r("code",[e._v("Verify zephyr/merged.hex")]),e._v(" to compare the Pebble current bootloader+application firmware versus the current merged.hex file in the Pebble project build folder.")]),e._v(" "),r("p",[e._v("In case you receive the following error during the download:")]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/developer/pebble-bootloader-download-error.png",alt:""}})]),e._v(" "),r("ol",[r("li",[e._v("Make sure Pebble is powered via USB")]),e._v(" "),r("li",[e._v("Make sure the J-Link connector is correctly plugged on both the J-Link programmer and Pebble connector")]),e._v(" "),r("li",[e._v("Make sure the orientation of the J-Link connector is correct (the cable pin-1 is aligned with the connector pin-1) on both the J-Link programmer and the Pebble connectors")])])])}),[],!1,null,null,null);t.default=a.exports}}]);