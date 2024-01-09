import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.dplf6LF9.js","_app/immutable/chunks/scheduler.PXc6KeAP.js","_app/immutable/chunks/index.bgIAFzjM.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.ravSiD63.js","_app/immutable/chunks/index.QyGJLgFp.js"];
export const stylesheets = ["_app/immutable/assets/0.qUpTmfKJ.css","_app/immutable/assets/ProgressBar.oq5aOWfL.css"];
export const fonts = [];
