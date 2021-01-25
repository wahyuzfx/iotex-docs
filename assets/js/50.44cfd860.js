(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{634:function(e,s,a){"use strict";a.r(s);var t=a(37),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"develop-and-build-the-pebble-firmware-linux-macos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#develop-and-build-the-pebble-firmware-linux-macos"}},[e._v("#")]),e._v(" Develop and Build the Pebble Firmware (Linux/MacOS)")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#install-dependencies"}},[e._v("Install Dependencies")])]),a("li",[a("a",{attrs:{href:"#install-arm-compiler-toolchain"}},[e._v("Install ARM Compiler Toolchain")])]),a("li",[a("a",{attrs:{href:"#install-the-nordic-sdk"}},[e._v("Install the Nordic SDK")])]),a("li",[a("a",{attrs:{href:"#clone-the-pebble-firmware-iotex-repository"}},[e._v("Clone the Pebble-Firmware IoTeX repository:")])]),a("li",[a("a",{attrs:{href:"#compile-project-with-command-line"}},[e._v("Compile Project with Command Line")])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"install-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-dependencies"}},[e._v("#")]),e._v(" Install Dependencies")]),e._v(" "),a("p",[e._v("Follow the instruction below to install the required tools. Make sure you have current versions for the following tools:")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("cmake --version "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# must be >= 3.13.1")]),e._v("\ndtc --version "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# must be >= 1.4.6")]),e._v("\npython --version "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# bust be >= 3.6")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("tabs",[a("tab",{attrs:{name:"Linux"}},[a("p",[e._v("If required, update your system:")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" upgrade\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("Install the required tools")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --no-install-recommends "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" cmake ninja-build gperf ccache dfu-util device-tree-compiler "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" python3-dev python3-pip python3-setuptools python3-tk python3-wheel xz-utils "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" gcc gcc-multilib g++-multilib libsdl2-dev\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])]),e._v(" "),a("tab",{attrs:{name:"MacOS"}},[a("p",[e._v("If it is not installed in your system, install "),a("a",{attrs:{href:"https://brew.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("Homebrew"),a("OutboundLink")],1),e._v(" by following instructions on the Homebrew:")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v(" $ /bin/bash -c "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('"')]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Install required tools:")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" cmake ninja gperf ccache dfu-util dtc python3\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])])],1),e._v(" "),a("h2",{attrs:{id:"install-arm-compiler-toolchain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-arm-compiler-toolchain"}},[e._v("#")]),e._v(" Install ARM Compiler Toolchain")]),e._v(" "),a("p",[e._v("Download the ARM embedded compiler toolchain")]),e._v(" "),a("tabs",[a("tab",{attrs:{name:"Linux"}},[a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Download the package")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://armkeil.blob.core.windows.net/developer/Files/downloads/gnu-rm/9-2020q2/gcc-arm-none-eabi-9-2020-q2-update-x86_64-linux.tar.bz2\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Extract")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" -jxvf gcc-arm-none-eabi-9-2020-q2-update-x86_64-linux.tar.bz2\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Rename the directory to ~\\gnuarmemb")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" gcc-arm-none-eabi-9-2020-q2-update gnuarmemb\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])])]),e._v(" "),a("tab",{attrs:{name:"MacOS"}},[a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Download the package")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://armkeil.blob.core.windows.net/developer/Files/downloads/gnu-rm/9-2020q2/gcc-arm-none-eabi-9-2020-q2-update-mac.tar.bz2\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Extract")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" -jxvf gcc-arm-none-eabi-9-2020-q2-update-mac.tar.bz2\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Rename the directory to ~\\gnuarmemb")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" gcc-arm-none-eabi-9-2020-q2-update gnuarmemb\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])])])],1),e._v(" "),a("p",[e._v("set required environment variables")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Create ~/.zephyrrc for easy env variables management")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'export ZEPHYR_TOOLCHAIN_VARIANT=gnuarmemb'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" ~/.zephyrrc\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'export GNUARMEMB_TOOLCHAIN_PATH=\"~/gnuarmemb\"'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" ~/.zephyrrc\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("h2",{attrs:{id:"install-the-nordic-sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-the-nordic-sdk"}},[e._v("#")]),e._v(" Install the Nordic SDK")]),e._v(" "),a("p",[e._v("the Nordic SDK is managed by the "),a("code",[e._v("west")]),e._v("tool, so we first need to install "),a("strong",[e._v("west")]),e._v(": open a terminal and type")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Install west")]),e._v("\npip3 "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --user -U west\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Make sure the `west`executable is in front of your PATH:")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'export PATH=~/.local/bin:\""),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$PATH")]),e._v("\"'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" ~/.bashrc\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("source")]),e._v(" ~/.bashrc\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Check that west is correctly installed")]),e._v("\nwest --version\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("In your home directory, crate a folder named "),a("code",[e._v("ncs")]),e._v(": we will install the SDK there:")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" ~/ncs\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/ncs\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Initialize the folder")]),e._v("\nwest init -m https://github.com/nrfconnect/sdk-nrf --mr v1.3.0\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Download all required repositories")]),e._v("\nwest update\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Export a Zephyr CMake package. This allows CMake to automatically load the boilerplate code required for building nRF Connect SDK applications:")]),e._v("\nwest zephyr-export\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("p",[e._v("Install required python dependencies")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("pip3 "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -r zephyr/scripts/requirements.txt\npip3 "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -r nrf/scripts/requirements.txt\npip3 "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -r bootloader/mcuboot/scripts/requirements.txt\n\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h2",{attrs:{id:"clone-the-pebble-firmware-iotex-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clone-the-pebble-firmware-iotex-repository"}},[e._v("#")]),e._v(" Clone the Pebble-Firmware IoTeX repository:")]),e._v(" "),a("p",[e._v("The pebble-firmware IoTeX repository contains the firmware application source and the board definition file:")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/iotexproject/pebble-firmware.git\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Before we can build the firmware we need to replace the default board definition from the SDK with the one for Pebble:")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Delete the default board definition")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" -rf ~/ncs/nrf/boards/arm/thingy91_nrf9160\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Replace with the one from pebble-firmware")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" -rv ~/pebble-firmware/nrf/boards/arm/thingy91_nrf9160 ncs/nrf/boards/arm/\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h2",{attrs:{id:"compile-project-with-command-line"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compile-project-with-command-line"}},[e._v("#")]),e._v(" Compile Project with Command Line")]),e._v(" "),a("p",[e._v("Before trying to build the project you must set required environment variables for Zephyr, to do so you can run:")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Load environment variables for the Zephyr SDK")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("source")]),e._v(" ~/ncs/zephyr/zephyr-env.sh\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("Among other things, this will also source your "),a("code",[e._v("~/.zephyrrc")]),e._v(" where the arm toolchain environment variables are set: you can use this file to add any customization to the environment.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Please notice that the environment variables will be lost if you close your terminal window: run "),a("code",[e._v("source ~/ncs/zephyr/zephyr-env.sh")]),e._v(" again to get them back")])]),e._v(" "),a("p",[e._v("The project can then be compiled with the following commands:")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Make sure to remove any previously created build directory")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" -rf build/\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Start the build process")]),e._v("\nwest build -b thingy91_nrf9160ns ~/pebble-firmware/nrf/applications/asset_tracker/\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("After the project is compiled successfully, you can flash the new Pebble firmware that is available at "),a("code",[e._v("~/build/zephyr/app_signed.hex")]),e._v(".")]),e._v(" "),a("p",[e._v("See "),a("a",{attrs:{href:"pebble-configure"}},[e._v("how to configure the frimware")]),e._v(" before the build.\nSee "),a("a",{attrs:{href:"pebble-flash"}},[e._v("how to flash the frimware")]),e._v(".")])],1)}),[],!1,null,null,null);s.default=n.exports}}]);