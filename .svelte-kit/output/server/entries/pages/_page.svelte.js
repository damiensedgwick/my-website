import { c as create_ssr_component } from "../../chunks/ssr.js";
import { g as getModalStore } from "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const css = {
  code: ".glowing-bg.svelte-of0kpd{height:16rem;width:16rem}@media(min-width: 768px){.glowing-bg.svelte-of0kpd{height:20rem;width:20rem}}.glowing-bg.svelte-of0kpd{position:absolute;z-index:-1;border-radius:9999px;--tw-blur:blur(50px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;animation:svelte-of0kpd-pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,\n      svelte-of0kpd-glow 5s linear infinite}@keyframes svelte-of0kpd-glow{0%{background-color:rgb(var(--color-primary-400) / 0.5)}33%{background-color:rgb(var(--color-secondary-400) / 0.5)}66%{background-color:rgb(var(--color-tertiary-400) / 0.5)}100%{background-color:rgb(var(--color-primary-400) / 0.5)}}@keyframes svelte-of0kpd-pulse{50%{transform:scale(2)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  getModalStore();
  $$result.css.add(css);
  return `<div class="relative h-full flex flex-col justify-center items-center p-2"><section class="glowing-bg svelte-of0kpd"></section> <ul class="flex space-x-4 absolute top-6"><li><button class="opacity-75 hover:opacity-100 hover:border-b" data-svelte-h="svelte-d9npyt">OSS</button></li> <li data-svelte-h="svelte-tjq0tz"><a class="opacity-75 hover:opacity-100 hover:border-b" href="https://www.github.com/damiensedgwick" target="_blank" rel="norefer noopener">GitHub</a></li> <li data-svelte-h="svelte-mznm7r"><a class="opacity-75 hover:opacity-100 hover:border-b" href="https://www.linkedin.com/in/damiensedgwick" target="_blank" rel="norefer noopener">LinkedIn</a></li></ul> <h1 class="h1 text-3xl sm:text-5xl lg:text-7xl font-bold" data-svelte-h="svelte-1inxphn"><span class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">Damien Sedgwick</span></h1> <p class="h1 text-3xl sm:text-6xl lg:text-8xl font-bold" data-svelte-h="svelte-1w5dqlx"><span class="bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone">Fullstack Developer</span></p> <p class="h5 mt-6 max-w-prose text-center px-3 lg:px-0" data-svelte-h="svelte-1hzwgzx">I enjoy exploring new technologies and building innovative web applications,
    constantly seeking to integrate the latest advancements into practical and
    efficient solutions.</p> <a class="absolute bottom-6 right-6 hover:rotate-12 transition-all hover:scale-125" href="https://www.feedback-loop.io" target="_blank" rel="noopener norefer" data-svelte-h="svelte-kguw7v"><img class="w-8 sm:w-12" src="/mint-icon.png" alt="Floop" width="50"></a> </div>`;
});
export {
  Page as default
};
