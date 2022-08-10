import {
  React,
  init_react
} from "/build/_shared/chunk-DNEVBLEG.js";

// browser-route-module:routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();

// app/components/header.tsx
init_react();
function Header() {
  return /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Damien Sedgwick"), /* @__PURE__ */ React.createElement("p", null, "Software Developer")));
}

// app/styles/index.css
var styles_default = "/build/_assets/index-KBAPWMYI.css";

// app/routes/index.tsx
var links = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, null));
}
export {
  Index as default,
  links
};
//# sourceMappingURL=/build/routes/index-HKQJU57S.js.map
