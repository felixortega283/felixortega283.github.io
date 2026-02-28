import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_hRRz3KL_.mjs';
import { manifest } from './manifest_D10RLcxY.mjs';

const serverIslandMap = new Map([
	['DynamicHead', () => import('./chunks/DynamicHead_DJ3U-rFo.mjs')],
	['Heart', () => import('./chunks/Heart_OZAVx77f.mjs')],
]);;

const _page0 = () => import('./pages/images.astro.mjs');
const _page1 = () => import('./pages/valentines.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/images.astro", _page0],
    ["src/pages/valentines.astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///Users/felixortega/Documents/GitHub/website-test/dist/client/",
    "server": "file:///Users/felixortega/Documents/GitHub/website-test/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro",
    "experimentalStaticHeaders": false
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
