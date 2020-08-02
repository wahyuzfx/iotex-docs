(window.webpackJsonp = window.webpackJsonp || []).push([
  [20],
  {
    571: function(t, s, a) {
      "use strict";
      a.r(s);
      var n = a(69),
        e = Object(n.a)(
          {},
          function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s;
            return a(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": t.$parent.slotKey } },
              [
                a("h1", { attrs: { id: "guides" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#guides" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Guides")
                ]),
                t._v(" "),
                a("h2", { attrs: { id: "state-management" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#state-management" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" State management")
                ]),
                t._v(" "),
                a("p", [
                  t._v(
                    "We use redux to manage state in Pylon. To pass the state from the server to the initial page during the server-side rendering, in the server use "
                  ),
                  a("code", [t._v("ctx.setState(path, val)")]),
                  t._v(" to set the state:")
                ]),
                t._v(" "),
                a("div", { staticClass: "language-js extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    a("code", [
                      t._v("server"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("get")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"SPA"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"/*"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("function")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("onRoute")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token parameter" } },
                        [t._v("ctx")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n  ctx"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("setState")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"base.sampleState"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"this is a sample initial state"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n  ctx"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("body "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" ctx"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("isoReactRender")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    VDom"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("<")]
                      ),
                      t._v("AppContainer "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("/")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(">")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    reducer"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" noopReducer"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    clientScript"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"/main.js"')
                      ]),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n")
                    ])
                  ])
                ]),
                a("p", [t._v("And use the state in the react component:")]),
                t._v(" "),
                a("div", { staticClass: "language-js extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    a("code", [
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("const")]
                      ),
                      t._v(" SampleStateContainer "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("connect")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token parameter" } },
                        [t._v("state")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=>")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n  text"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" state"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("base"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("sampleState\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("function")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("SampleState")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token parameter" } },
                        [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v(" text "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          )
                        ]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("return")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("<")]
                      ),
                      t._v("div"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(">")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("text"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("<")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("/")]
                      ),
                      t._v("div"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(">")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n")
                    ])
                  ])
                ]),
                a("h2", { attrs: { id: "styling" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#styling" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Styling")
                ]),
                t._v(" "),
                a("p", [
                  t._v("We support both global styles with "),
                  a(
                    "a",
                    {
                      attrs: {
                        href: "https://sass-lang.com/guide",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v("sass"), a("OutboundLink")],
                    1
                  ),
                  t._v(" in "),
                  a("code", [t._v("./src/client/stylesheets/main.scss")]),
                  t._v(" and modular styles with "),
                  a(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://github.com/styletron/styletron/blob/master/packages/styletron-react/README.md",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v("styletron-react"), a("OutboundLink")],
                    1
                  ),
                  t._v(":")
                ]),
                t._v(" "),
                a("div", { staticClass: "language-js extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    a("code", [
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("import")]
                      ),
                      t._v(" react "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("from")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"react"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("import")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v(" styled "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("from")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"onefx/lib/styletron-react"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("const")]
                      ),
                      t._v(" Panel "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("styled")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"div"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n  backgroundColor"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"silver"')
                      ]),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("export")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("default")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("<")]
                      ),
                      t._v("Panel"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(">")]
                      ),
                      t._v("Hello"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("<")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("/")]
                      ),
                      t._v("Panel"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(">")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n")
                    ])
                  ])
                ]),
                a("h2", { attrs: { id: "routing" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#routing" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Routing")
                ]),
                t._v(" "),
                a("p", [
                  t._v("server-side routing is using "),
                  a(
                    "a",
                    {
                      attrs: {
                        href: "https://github.com/alexmingoia/koa-router",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v("koa-router"), a("OutboundLink")],
                    1
                  ),
                  t._v(" and located in "),
                  a("code", [t._v("./src/server/server-routes.js")]),
                  t._v(". The basic usage is:")
                ]),
                t._v(" "),
                a("div", { staticClass: "language-js extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    a("code", [
                      t._v("server\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("get")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"/"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token parameter" } },
                        [
                          t._v("ctx"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" next")
                        ]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=>")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    ctx"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("body "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"Hello World!"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("post")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"/users"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token parameter" } },
                        [
                          t._v("ctx"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" next")
                        ]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=>")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("// ...")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("put")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"/users/:id"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token parameter" } },
                        [
                          t._v("ctx"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" next")
                        ]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=>")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("// ...")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("del")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"/users/:id"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token parameter" } },
                        [
                          t._v("ctx"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" next")
                        ]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=>")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("// ...")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("all")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"/users/:id"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token parameter" } },
                        [
                          t._v("ctx"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" next")
                        ]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=>")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("// ...")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n")
                    ])
                  ])
                ]),
                a("p", [
                  t._v("client-side routing is using "),
                  a(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://reacttraining.com/react-router/web/guides/quick-start",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v("react-router v4"), a("OutboundLink")],
                    1
                  ),
                  t._v(" and located in "),
                  a("code", [t._v("./src/shared/app.js")]),
                  t._v(".")
                ]),
                t._v(" "),
                a("div", { staticClass: "language-js extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    a("code", [
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("<")]
                      ),
                      t._v("Switch"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(">")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("<")]
                      ),
                      t._v("Route exact path"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"/"')
                      ]),
                      t._v(" component"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("Home"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("/")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(">")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("<")]
                      ),
                      t._v("Route component"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("NotFound"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("/")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(">")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("<")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("/")]
                      ),
                      t._v("Switch"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(">")]
                      ),
                      t._v("\n")
                    ])
                  ])
                ]),
                a("h2", { attrs: { id: "fetching-data" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#fetching-data" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Fetching data")
                ]),
                t._v(" "),
                a("p", [
                  t._v(
                    "We use Apollo Graphql and TypeGraphQL for universal rendering with React. For detailed documentation, please visit:"
                  )
                ]),
                t._v(" "),
                a("ol", [
                  a("li", [
                    a(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://typegraphql.ml/docs/getting-started.html",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [
                        t._v("Define GraphQL schemas in TypeScript"),
                        a("OutboundLink")
                      ],
                      1
                    )
                  ]),
                  t._v(" "),
                  a("li", [
                    a(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.apollographql.com/docs/tutorial/queries/",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [
                        t._v(
                          "Learn how to fetch data with the Apollo Query component"
                        ),
                        a("OutboundLink")
                      ],
                      1
                    )
                  ])
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "make-a-query" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#make-a-query" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Make a query")
                ]),
                t._v(" "),
                a("p", [
                  t._v("In "),
                  a("code", [t._v("src/api-gateway/resolvers/")]),
                  t._v(
                    ", define a new resolver and method. Take the meta data endpoint of the server health for example."
                  )
                ]),
                t._v(" "),
                a("div", { staticClass: "language-js extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    a("code", [
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("import")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v(" Query"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" Resolver"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" ResolverInterface "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("from")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"type-graphql"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n\n@"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("Resolver")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token parameter" } },
                        [t._v("_")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=>")]
                      ),
                      t._v(" String"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("export")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("class")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token class-name" } },
                        [t._v("MetaResolver")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("implements")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token class-name" } },
                        [t._v("ResolverInterface")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("<")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=>")]
                      ),
                      t._v(" String"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(">")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n  @"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("Query")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token parameter" } },
                        [t._v("_")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=>")]
                      ),
                      t._v(" String"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v(" description"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"is the server healthy?"')
                      ]),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("public")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("async")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("health")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" Promise"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("<")]
                      ),
                      t._v("string"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(">")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("return")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"OK"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n")
                    ])
                  ])
                ]),
                a("p", [
                  t._v("and then in "),
                  a("code", [t._v("api-gateway.ts")]),
                  t._v(", mount the resolver.")
                ]),
                t._v(" "),
                a("div", { staticClass: "language-js extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    a("code", [
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("const")]
                      ),
                      t._v(" resolvers "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("[")]
                      ),
                      t._v("MetaResolver"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("]")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n")
                    ])
                  ])
                ]),
                a("p", [
                  t._v("Now the server is ready and you can call the "),
                  a("code", [t._v("health")]),
                  t._v(" endpoint at "),
                  a(
                    "a",
                    {
                      attrs: {
                        href: "https://localhost:5000/api-gateway/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [
                      t._v("https://localhost:5000/api-gateway/"),
                      a("OutboundLink")
                    ],
                    1
                  ),
                  t._v(".")
                ]),
                t._v(" "),
                a("p", [
                  t._v("The next step is to call it from the React component.")
                ]),
                t._v(" "),
                a("div", { staticClass: "language-js extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    a("code", [
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("const")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token constant" } },
                        [t._v("GET_HEALTH")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" gql"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token template-string" } },
                        [
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token template-punctuation string"
                              }
                            },
                            [t._v("`")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v("\n  {\n    health\n  }\n")]
                          ),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token template-punctuation string"
                              }
                            },
                            [t._v("`")]
                          )
                        ]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n")
                    ])
                  ])
                ]),
                a("div", { staticClass: "language-<js></js> extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    a("code", [
                      t._v(
                        '<Query query={GET_HEALTH} ssr={false} fetchPolicy="network-only">\n   {({\n     loading,\n     error,\n     data\n   }: QueryResult<{ health: string }>) => {\n     if (loading) {\n       return (\n         <div>\n           <Icon type="loading" /> Checking Status\n         </div>\n       );\n     }\n     if (error) {\n       return (\n         <div>\n           <Icon\n             type="close-circle"\n             theme="twoTone"\n             twoToneColor={colors.error}\n           />{" "}\n           Not OK\n         </div>\n       );\n     }\n\n     return (\n       <div>\n         <Icon\n           type="check-circle"\n           theme="twoTone"\n           twoToneColor={colors.success}\n         />{" "}\n         {data && data.health}\n       </div>\n     );\n   }}\n</Query>\n'
                      )
                    ])
                  ])
                ]),
                a("h2", { attrs: { id: "internationalization" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#internationalization" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Internationalization")
                ]),
                t._v(" "),
                a("p", [
                  t._v("Onefx reads translations from "),
                  a("code", [t._v("./translations")]),
                  t._v(
                    " directory. Please create a file there named with a corresponding locale, for example, "
                  ),
                  a("code", [t._v("en.yaml")]),
                  t._v(". And then add an entry")
                ]),
                t._v(" "),
                a("div", { staticClass: "language-yaml extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-yaml" } }, [
                    a("code", [
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token key atrule" } },
                        [t._v("homepage.hello")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" hello"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" $"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("userName"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        t._v("!")
                      ]),
                      t._v("\n")
                    ])
                  ])
                ]),
                a("p", [t._v("and then in the react view file")]),
                t._v(" "),
                a("div", { staticClass: "language-js extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    a("code", [
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("import")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v(" t "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("from")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"onefx/lib/iso-i18n"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("function")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("Greetings")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("return")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("<")]
                      ),
                      t._v("div"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(">")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("t")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"homepage.hello"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v(" userName"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"John"')
                      ]),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("<")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("/")]
                      ),
                      t._v("div"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(">")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n")
                    ])
                  ])
                ]),
                a("p", [
                  t._v("When users visit this site with "),
                  a("code", [t._v("accept-language: en")]),
                  t._v(
                    " in the header, which is set by the browser, then they will see translated greetings. If you want to explicitly set the locale, then visit the page with a query string "
                  ),
                  a("code", [t._v("?locale=en")]),
                  t._v(" then it will memorize this in the cookie.")
                ]),
                t._v(" "),
                a("h2", { attrs: { id: "testing" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#testing" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Testing")
                ]),
                t._v(" "),
                a("p", [
                  t._v(
                    "test files are supposed to be placed in any module like "
                  ),
                  a("code", [t._v("./__test__/example.test.js")]),
                  t._v(" in "),
                  a(
                    "a",
                    {
                      attrs: {
                        href: "https://github.com/avajs/ava/tree/master/docs",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v("ava test utils"), a("OutboundLink")],
                    1
                  ),
                  t._v(".")
                ]),
                t._v(" "),
                a("div", { staticClass: "language-js extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    a("code", [
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("import")]
                      ),
                      t._v(" test "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("from")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"ava"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("test")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"testname"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("async")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token parameter" } },
                        [t._v("t")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=>")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("// ...")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n")
                    ])
                  ])
                ]),
                a("h2", { attrs: { id: "security" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#security" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Security")
                ]),
                t._v(" "),
                a("p", [t._v("Onefx enables secure web app development with")]),
                t._v(" "),
                a("ol", [
                  a("li", [
                    t._v("CSRF protection that can be exempted at "),
                    a("code", [t._v("./config/default.js")]),
                    t._v(" ("),
                    a("code", [t._v("config.server.noCsrfRoutes")]),
                    t._v(")")
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("Helmet headers that can be exempted at "),
                    a("code", [t._v("config.server.noSecurityHeadersRoutes")])
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("Content Security Policy configured at "),
                    a("code", [t._v("config.csp")])
                  ])
                ]),
                t._v(" "),
                a("p", [
                  t._v("for example, in "),
                  a("code", [t._v("default.js")]),
                  t._v(",")
                ]),
                t._v(" "),
                a("div", { staticClass: "language-js extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    a("code", [
                      t._v("  server"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    noSecurityHeadersRoutes"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n      "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'/embed/checkout/'")
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token boolean" } },
                        [t._v("true")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    noCsrfRoutes"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n      "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'/api-gateway/'")
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token boolean" } },
                        [t._v("true")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n  csp"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'default-src'")
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("[")]
                      ),
                      t._v("\n      "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'none'")
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("]")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n")
                    ])
                  ])
                ]),
                a("h2", { attrs: { id: "static-assets" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#static-assets" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Static assets")
                ]),
                t._v(" "),
                a("p", [
                  t._v("Static assets are placed in "),
                  a("code", [t._v("./client/static/")]),
                  t._v(
                    " and loaded into the root directory of the website. Take "
                  ),
                  a("code", [t._v("./client/static/favicon.png")]),
                  t._v(" for example, you can get it at "),
                  a(
                    "a",
                    {
                      attrs: {
                        href: "http://localhost:4100/favicon.png",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [
                      t._v("http://localhost:4100/favicon.png"),
                      a("OutboundLink")
                    ],
                    1
                  ),
                  t._v(", or use it in the react component:")
                ]),
                t._v(" "),
                a("div", { staticClass: "language-js extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    a("code", [
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("import")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v(" assetURL "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("from")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"onefx/lib/asset-url"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("function")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("ImgExample")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("return")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("<")]
                      ),
                      t._v("img src"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("assetURL")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"/favicon.png"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("/")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(">")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n")
                    ])
                  ])
                ]),
                a("h2", { attrs: { id: "configuration" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#configuration" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Configuration")
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "environment-variables" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#environment-variables" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Environment variables")
                ]),
                t._v(" "),
                a("p", [
                  t._v(
                    "The environment variable is read from commandline as well as "
                  ),
                  a("code", [t._v(".env")]),
                  t._v(" file. Take "),
                  a("code", [t._v("PORT")]),
                  t._v(" for example,")
                ]),
                t._v(" "),
                a("div", { staticClass: "language-bash extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-bash" } }, [
                    a("code", [
                      a(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token assign-left variable" }
                        },
                        [t._v("PORT")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("4004")
                      ]),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("npm")]
                      ),
                      t._v(" run "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("watch")]
                      ),
                      t._v("\n")
                    ])
                  ])
                ]),
                a("p", [
                  t._v("or in "),
                  a("code", [t._v(".env")]),
                  t._v(" file")
                ]),
                t._v(" "),
                a("div", { staticClass: "language-env extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    a("code", [t._v("PORT=4004\n")])
                  ])
                ]),
                a("p", [
                  t._v("In the js file, you can read the value by "),
                  a("code", [t._v("process.env.PORT")]),
                  t._v(".")
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "static-configuration" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#static-configuration" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Static configuration")
                ]),
                t._v(" "),
                a("p", [
                  t._v("The static configuration is located in "),
                  a("code", [t._v("./config")]),
                  t._v(
                    " and can be read according to the environment variable "
                  ),
                  a("code", [t._v("NODE_ENV")]),
                  t._v(".")
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "cdn" } }, [
                  a(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#cdn" } },
                    [t._v("#")]
                  ),
                  t._v(" CDN")
                ]),
                t._v(" "),
                a("p", [
                  t._v(
                    "If you want to setup CDN for the static resources, I recommend "
                  ),
                  a(
                    "a",
                    {
                      attrs: {
                        href: "https://bunnycdn.com/?ref=qrv5hbyzrq",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v("BunnyCDN"), a("OutboundLink")],
                    1
                  ),
                  t._v(
                    " for its ease-of-use and cost-effectiveness. Then configure OneFx as"
                  )
                ]),
                t._v(" "),
                a("div", { staticClass: "language-js extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    a("code", [
                      t._v("module"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("exports "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("// ...")]
                      ),
                      t._v("\n  server"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("// ...")]
                      ),
                      t._v("\n    cdnBase"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"https://example-cdn.net"')
                      ]),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("// ...")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n")
                    ])
                  ])
                ]),
                a("p", [
                  t._v(
                    "And then when loading static assets, you just follow the same practice with the static assets."
                  )
                ]),
                t._v(" "),
                a("div", { staticClass: "language-jsx extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-jsx" } }, [
                    a("code", [
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("import")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v(" assetURL "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("from")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"onefx/lib/asset-url"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("function")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("ImgExample")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("return")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("img")
                        ]),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("src")]
                        ),
                        a(
                          "span",
                          {
                            pre: !0,
                            attrs: { class: "token script language-javascript" }
                          },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token script-punctuation punctuation"
                                }
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("assetURL")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"favicon.png"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            )
                          ]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("/>")]
                        )
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n")
                    ])
                  ])
                ]),
                a("h2", { attrs: { id: "references" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#references" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" References")
                ]),
                t._v(" "),
                a("p", [t._v("Tech Stack")]),
                t._v(" "),
                a("ul", [
                  a("li", [
                    a("p", [
                      a(
                        "a",
                        {
                          attrs: {
                            href: "https://reactjs.org/",
                            target: "_blank",
                            rel: "noopener noreferrer"
                          }
                        },
                        [t._v("react - view"), a("OutboundLink")],
                        1
                      ),
                      t._v("\n_ "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "https://github.com/rtsao/styletron",
                            target: "_blank",
                            rel: "noopener noreferrer"
                          }
                        },
                        [
                          t._v("styletron - local style in JS"),
                          a("OutboundLink")
                        ],
                        1
                      ),
                      t._v("\n_ sass - global style in sass * "),
                      a(
                        "a",
                        {
                          attrs: {
                            href:
                              "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
                            target: "_blank",
                            rel: "noopener noreferrer"
                          }
                        },
                        [t._v("flexbox - view layout"), a("OutboundLink")],
                        1
                      )
                    ])
                  ]),
                  t._v(" "),
                  a("li", [
                    a("p", [
                      a(
                        "a",
                        {
                          attrs: {
                            href: "https://redux.js.org/",
                            target: "_blank",
                            rel: "noopener noreferrer"
                          }
                        },
                        [t._v("redux - state management"), a("OutboundLink")],
                        1
                      )
                    ])
                  ]),
                  t._v(" "),
                  a("li", [
                    a("p", [
                      a(
                        "a",
                        {
                          attrs: {
                            href: "http://koajs.com/",
                            target: "_blank",
                            rel: "noopener noreferrer"
                          }
                        },
                        [t._v("Koa.js - server"), a("OutboundLink")],
                        1
                      )
                    ])
                  ]),
                  t._v(" "),
                  a("li", [
                    a("p", [
                      a(
                        "a",
                        {
                          attrs: {
                            href: "https://www.apollographql.com/",
                            target: "_blank",
                            rel: "noopener noreferrer"
                          }
                        },
                        [
                          t._v("graphql apollo - api gateway"),
                          a("OutboundLink")
                        ],
                        1
                      )
                    ])
                  ]),
                  t._v(" "),
                  a("li", [
                    a("p", [
                      a(
                        "a",
                        {
                          attrs: {
                            href: "https://mongoosejs.com/",
                            target: "_blank",
                            rel: "noopener noreferrer"
                          }
                        },
                        [
                          t._v("MongoDB mongoose - database ODM"),
                          a("OutboundLink")
                        ],
                        1
                      )
                    ])
                  ]),
                  t._v(" "),
                  a("li", [
                    a("p", [
                      a(
                        "a",
                        {
                          attrs: {
                            href: "http://docs.sequelizejs.com/",
                            target: "_blank",
                            rel: "noopener noreferrer"
                          }
                        },
                        [
                          t._v("MySQL sequalize - database ORM"),
                          a("OutboundLink")
                        ],
                        1
                      )
                    ])
                  ])
                ]),
                t._v(" "),
                a("p", [t._v("Design Resources")]),
                t._v(" "),
                a("ul", [
                  a("li", [
                    a(
                      "a",
                      {
                        attrs: {
                          href: "https://ant.design/",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [t._v("Ant Design"), a("OutboundLink")],
                      1
                    )
                  ]),
                  t._v(" "),
                  a("li", [
                    a(
                      "a",
                      {
                        attrs: {
                          href: "http://fontawesome.io/",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [t._v("Font Awesome"), a("OutboundLink")],
                      1
                    )
                  ]),
                  t._v(" "),
                  a("li", [
                    a(
                      "a",
                      {
                        attrs: {
                          href: "https://www.flaticon.com/",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [
                        t._v("flaticon - icons and graphics"),
                        a("OutboundLink")
                      ],
                      1
                    )
                  ])
                ]),
                t._v(" "),
                a("h2", { attrs: { id: "roadmap" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#roadmap" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Roadmap")
                ]),
                t._v(" "),
                a("p", [
                  t._v(
                    "Vision: Onefx = fusionjs-like presentation layer + django-like admin portal + react-native-made mobile app + minimalist (SRE infra + data pipeline)"
                  )
                ]),
                t._v(" "),
                a("ol", [
                  a("li", [
                    t._v("MVP\n"),
                    a("ol", [
                      a("li", [
                        t._v("Getting started\n"),
                        a("ol", [
                          a("li", [t._v("[x] Create a project")]),
                          t._v(" "),
                          a("li", [t._v("[x] Run your project")]),
                          t._v(" "),
                          a("li", [t._v("Framework Comparison")]),
                          t._v(" "),
                          a("li", [t._v("[x] Coding Styles")])
                        ])
                      ]),
                      t._v(" "),
                      a("li", [
                        t._v("Guides\n"),
                        a("ol", [
                          a("li", [t._v("[x] State management")]),
                          t._v(" "),
                          a("li", [
                            t._v("[x] styling\n"),
                            a("ol", [
                              a("li", [t._v("[x] import styles")]),
                              t._v(" "),
                              a("li", [
                                t._v(
                                  "[x] modular styles (now we have global root provider dependency on styletron)"
                                )
                              ])
                            ])
                          ]),
                          t._v(" "),
                          a("li", [t._v("[x] Routing")]),
                          t._v(" "),
                          a("li", [t._v("Fetching data")]),
                          t._v(" "),
                          a("li", [t._v("Forms")]),
                          t._v(" "),
                          a("li", [t._v("[x] Internationalization")]),
                          t._v(" "),
                          a("li", [t._v("[x] testing")]),
                          t._v(" "),
                          a("li", [t._v("typing")]),
                          t._v(" "),
                          a("li", [t._v("[x] security")]),
                          t._v(" "),
                          a("li", [t._v("Universal rendering")]),
                          t._v(" "),
                          a("li", [t._v("Server code")]),
                          t._v(" "),
                          a("li", [t._v("Performance")]),
                          t._v(" "),
                          a("li", [t._v("automatic code splitting")]),
                          t._v(" "),
                          a("li", [t._v("debugging")]),
                          t._v(" "),
                          a("li", [t._v("[x] Static assets")]),
                          t._v(" "),
                          a("li", [t._v("[x] Configuration")]),
                          t._v(" "),
                          a("li", [t._v("Working with Secrets")])
                        ])
                      ])
                    ])
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("ver 1.0.0 Web\n"),
                    a("ol", [
                      a("li", [t._v("yarn create")]),
                      t._v(" "),
                      a("li", [
                        t._v("Auth: Sign in / sign up / forgot-password")
                      ]),
                      t._v(" "),
                      a("li", [t._v("Admin Site")]),
                      t._v(" "),
                      a("li", [t._v("Boilerplates")])
                    ])
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("Ver 2.0.0 Mobile\n"),
                    a("ol", [a("li", [t._v("React native, Apollo graphql")])])
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("Ver 3.0.0 Infra\n"),
                    a("ol", [
                      a("li", [t._v("Kubernetes")]),
                      t._v(" "),
                      a("li", [t._v("metrics")]),
                      t._v(" "),
                      a("li", [t._v("logging")])
                    ])
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("Ver 4.0.0 Data Pipeline\n"),
                    a("ol", [
                      a("li", [t._v("ELK")]),
                      t._v(" "),
                      a("li", [t._v("BI platform")])
                    ])
                  ])
                ]),
                t._v(" "),
                a("h2", { attrs: { id: "run-on-windows" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#run-on-windows" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Run on Windows")
                ]),
                t._v(" "),
                a("ol", [
                  a("li", [
                    t._v("install "),
                    a(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.microsoft.com/en-us/windows/wsl/install-win10",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [t._v("Windows Subsystem for Linux"), a("OutboundLink")],
                      1
                    ),
                    t._v(". Choose Ubuntu, for example.")
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v(
                      "On WSL Ubuntu, install node version manager and install the latest lts dubnium"
                    )
                  ])
                ]),
                t._v(" "),
                a("div", { staticClass: "language-bash extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-bash" } }, [
                    a("code", [
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("curl")]
                      ),
                      t._v(
                        " -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh "
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("|")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("bash")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token builtin class-name" }
                        },
                        [t._v("export")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token assign-left variable" }
                        },
                        [t._v("NVM_DIR")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"'),
                        a(
                          "span",
                          {
                            pre: !0,
                            attrs: { class: "token environment constant" }
                          },
                          [t._v("$HOME")]
                        ),
                        t._v('/.nvm"')
                      ]),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("[")]
                      ),
                      t._v(" -s "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"'),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token variable" } },
                          [t._v("$NVM_DIR")]
                        ),
                        t._v('/nvm.sh"')
                      ]),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("]")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("&&")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("\\")]
                      ),
                      t._v(". "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"'),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token variable" } },
                          [t._v("$NVM_DIR")]
                        ),
                        t._v('/nvm.sh"')
                      ]),
                      t._v("  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("# This loads nvm")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("[")]
                      ),
                      t._v(" -s "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"'),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token variable" } },
                          [t._v("$NVM_DIR")]
                        ),
                        t._v('/bash_completion"')
                      ]),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("]")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("&&")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("\\")]
                      ),
                      t._v(". "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"'),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token variable" } },
                          [t._v("$NVM_DIR")]
                        ),
                        t._v('/bash_completion"')
                      ]),
                      t._v("  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("# This loads nvm bash_completion")]
                      ),
                      t._v("\n\nnvm "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("ls")]
                      ),
                      t._v("\nnvm "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("install")]
                      ),
                      t._v(" lts/Dubnium\nnvm use lts/dubnium\n")
                    ])
                  ])
                ]),
                a("ol", { attrs: { start: "3" } }, [
                  a("li", [t._v("clone repo to "), a("code", [t._v("C:/")])])
                ]),
                t._v(" "),
                a("div", { staticClass: "language-bash extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-bash" } }, [
                    a("code", [
                      a(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token builtin class-name" }
                        },
                        [t._v("cd")]
                      ),
                      t._v(" /mnt/c/\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("git")]
                      ),
                      t._v(" clone https://github.com/iotexproject/pylon.git\n")
                    ])
                  ])
                ]),
                a("ol", { attrs: { start: "4" } }, [
                  a("li", [
                    t._v("install "),
                    a(
                      "a",
                      {
                        attrs: {
                          href: "https://code.visualstudio.com/",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [t._v("VS Code"), a("OutboundLink")],
                      1
                    ),
                    t._v(
                      " and open WSL terminal with ctrl + ` . Not sure about WSL terminal? Go to "
                    ),
                    a(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://blogs.msdn.microsoft.com/commandline/2017/10/27/running-node-js-on-wsl-from-visual-studio-code/",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [t._v("this post"), a("OutboundLink")],
                      1
                    ),
                    t._v(".")
                  ])
                ])
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      s.default = e.exports;
    }
  }
]);
