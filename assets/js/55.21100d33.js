(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{639:function(e,t,r){"use strict";r.r(t);var n=r(37),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"configure-the-firmware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-firmware"}},[e._v("#")]),e._v(" Configure the firmware")]),e._v(" "),r("p",[e._v("If required, firmware parameters (e.g. MQTT parameters) can be customized before building a new image. You can configure the firmware both from inside Embedded Studio IDE or from command line.")]),e._v(" "),r("p",[e._v("Most common settings you will want to configure are the following:")]),e._v(" "),r("p",[r("strong",[e._v("Enable/Disable GPS")]),r("br"),e._v(" "),r("code",[e._v("Asset Tracker > GPS > GPS Device")]),r("br")]),e._v(" "),r("p",[r("strong",[e._v("MQTT Broker url")]),r("br"),e._v(" "),r("code",[e._v("Asset Tracker > IoTeX Hosted MQTT broker hostname")]),r("br")]),e._v(" "),r("p",[r("strong",[e._v("Network mode (NB-IoT/LTE-M)")]),r("br"),e._v(" "),r("code",[e._v("Zephyr Kernel > Modules > Nordic nRF Connect > Libraries > nRF91 LTE Link control library > Select network mode")])]),e._v(" "),r("h3",{attrs:{id:"configure-the-firmware-in-embedded-studio"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-firmware-in-embedded-studio"}},[e._v("#")]),e._v(" Configure the firmware in Embedded Studio")]),e._v(" "),r("p",[e._v("From the Embedded Studio, before starting the build process, choose "),r("strong",[e._v("Configure nRF Connect SDK Project")]),e._v(" in the "),r("strong",[e._v("Project")]),e._v(" menu, and choose "),r("strong",[e._v("menuconfig")]),e._v(" in the pop-up window.")]),e._v(" "),r("p",[e._v('You can use the search box to quickly locate te parameters you want to customize, e.g. and search "mqtt" to customize MQTT specific parameters:')]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/developer/pebble-sdk/firmware_fig8.png",alt:""}})]),e._v(" "),r("h3",{attrs:{id:"configure-the-firmware-from-command-line"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-firmware-from-command-line"}},[e._v("#")]),e._v(" Configure the firmware from command line")]),e._v(" "),r("p",[e._v("From command line, you can just run the following command to start the configuration menu:")]),e._v(" "),r("tabs",[r("tab",{attrs:{name:"Windows"}},[r("div",{staticClass:"language-sh line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Move into the firmware app folder")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" %userprofile%/ncs/v1.3.0/nrf/applications/asset_tracker\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Optionally, delete the old build folder to start from default configuration")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("rmdir")]),e._v(" build /S /Q\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Start the configuration tool")]),e._v("\nwest build -t menuconfig -b thingy91_nrf9160ns\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br")])])]),e._v(" "),r("tab",{attrs:{name:"Linux"}},[r("div",{staticClass:"language-sh line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Make sure to remove any previously created build directory")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("rmdir")]),e._v(" -rf build\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Start the command line configuration tool")]),e._v("\nwest build -t menuconfig -b thingy91_nrf9160ns\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br")])])])],1),e._v(" "),r("p",[e._v("this will start the configuration program from command line, allowing you to interactively set all the build configuration values for the firmware.")])],1)}),[],!1,null,null,null);t.default=a.exports}}]);