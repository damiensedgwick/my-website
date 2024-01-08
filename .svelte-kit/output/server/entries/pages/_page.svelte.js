import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: ".glowing-bg.svelte-13628oa{height:16rem;width:16rem}@media(min-width: 768px){.glowing-bg.svelte-13628oa{height:20rem;width:20rem}}.glowing-bg.svelte-13628oa{position:absolute;z-index:-1;border-radius:9999px;--tw-blur:blur(50px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;animation:svelte-13628oa-pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,\n			svelte-13628oa-glow 5s linear infinite}@keyframes svelte-13628oa-glow{0%{background-color:rgb(var(--color-primary-400) / 0.5)}33%{background-color:rgb(var(--color-secondary-400) / 0.5)}66%{background-color:rgb(var(--color-tertiary-400) / 0.5)}100%{background-color:rgb(var(--color-primary-400) / 0.5)}}@keyframes svelte-13628oa-pulse{50%{transform:scale(1.25)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="relative h-full flex flex-col justify-center items-center space-y-2 p-2" data-svelte-h="svelte-x6zw8y"><h1 class="h1 text-3xl md:text-5xl lg:text-7xl font-bold"><span class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">Damien Sedgwick</span></h1> <p class="h1 text-4xl md:text-6xl lg:text-8xl font-bold"><span class="bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone">Fullstack Developer</span></p> <section class="glowing-bg svelte-13628oa"></section> <a class="absolute bottom-4 right-4 hover:rotate-12 transition-all" href="https://www.feedback-loop.io" target="_blank" rel="noopener norefer"><img src="/mint-icon.png" alt="Floop" width="50"></a> </div>`;
});
export {
  Page as default
};
