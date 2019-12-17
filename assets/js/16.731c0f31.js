(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{223:function(s,t,e){"use strict";e.r(t);var a=e(0),n=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"使用-husky-和-lint-staged-来构建你的前端工作流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-husky-和-lint-staged-来构建你的前端工作流","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用 husky 和 lint-staged 来构建你的前端工作流")]),s._v(" "),e("p",[s._v("ESLint 是一个在前端工具链中被众人熟知的代码检查工具，它能够被开发者灵活的配置，使其能够达到我们提前制定好的代码规范的要求，\n并且在编码过程中实时检测输入的代码，对于不符合代码规范的代码警告或报错。")]),s._v(" "),e("p",[e("code",[s._v("git commit")]),s._v(" 是最常用的命令之一，它触发4个"),e("code",[s._v("hooks")]),s._v(", 分别是: "),e("code",[s._v("pre-commit")]),s._v(","),e("code",[s._v("prepare-commit-msg")]),s._v(", "),e("code",[s._v("commit-msg")]),s._v("和"),e("code",[s._v("post-commit")]),s._v("。我们可以在"),e("code",[s._v("pre-commit")]),s._v("的时候去检测我们的代码是否存在问题。")]),s._v(" "),e("h2",{attrs:{id:"husky"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#husky","aria-hidden":"true"}},[s._v("#")]),s._v(" husky")]),s._v(" "),e("p",[s._v("安装")]),s._v(" "),e("p",[e("code",[s._v("npm install husky --save-dev")])]),s._v(" "),e("p",[s._v("Husky 能够帮你阻挡住不好的代码提交和推送。一句话很精准的说明了这个库的意义，而配置也非常简单，")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(' "husky": {\n    "hooks": {\n      "pre-commit": "lint-staged"\n    }\n  },\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"lint-staged"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lint-staged","aria-hidden":"true"}},[s._v("#")]),s._v(" lint-staged")]),s._v(" "),e("p",[s._v("安装")]),s._v(" "),e("p",[e("code",[s._v("npm install lint-staged --save-dev")])]),s._v(" "),e("p",[s._v("在你提交代码之前，Linting 的运行是更有意义的。当你这样去做了，那么就会有更少的错误进入你的代码库。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('  "lint-staged": {\n    "src/**/*.{js,vue}": [\n      "eslint --fix",\n      "git add"\n    ]\n  },\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])])])}],!1,null,null,null);t.default=n.exports}}]);