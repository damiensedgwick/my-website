export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","floop-dashboard.png","github-logo.webp","mint-floop.png","mint-icon.png","nordev-logo.webp","pp.webp","remix-logo.webp","xstate-catalogue-logo.webp"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.s4HvKnDz.js","app":"_app/immutable/entry/app.my7VdY5t.js","imports":["_app/immutable/entry/start.s4HvKnDz.js","_app/immutable/chunks/scheduler.PXc6KeAP.js","_app/immutable/chunks/singletons.Zls1z33Z.js","_app/immutable/chunks/index.QyGJLgFp.js","_app/immutable/entry/app.my7VdY5t.js","_app/immutable/chunks/scheduler.PXc6KeAP.js","_app/immutable/chunks/index.bgIAFzjM.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
