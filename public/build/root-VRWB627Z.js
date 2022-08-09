import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-LD42F2JP.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-DNEVBLEG.js";

// browser-route-module:root.tsx?browser
init_react();

// app/root.tsx
init_react();

// app/styles/global.css
var global_default = "/build/_assets/global-ELCEOWWK.css";

// app/root.tsx
var meta = () => ({
  charset: "utf-8",
  title: "Damien Sedgwick | Software Developer",
  viewport: "width=device-width,initial-scale=1"
});
var links = () => {
  return [
    { rel: "stylesheet", href: global_default }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Outlet, null), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-VRWB627Z.js.map
