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
function Wrapper({ children }) {
  return /* @__PURE__ */ React.createElement("div", null, children);
}
function Content() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Damien Sedgwick"), /* @__PURE__ */ React.createElement("p", null, "Software Developer"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "1")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "2")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "3"))));
}
var Header = {
  Wrapper,
  Content
};

// app/routes/index.tsx
function Index() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header.Wrapper, null));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-FNC4HDKD.js.map
