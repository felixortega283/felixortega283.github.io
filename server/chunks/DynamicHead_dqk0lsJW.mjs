import { d as createAstro, c as createComponent, m as maybeRenderHead, b as renderTemplate } from './astro/server_CoUqLbNk.mjs';
import 'piccolore';
import 'clsx';
/* empty css                              */

const $$Astro = createAstro("https://felixpro.dev/");
const $$DynamicHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DynamicHead;
  const { title, exitTitle, heading, customProperty } = Astro2.props;
  const referer = Astro2.request.headers.get("Referer");
  console.log(referer);
  const url = new URL(referer);
  const custom = url.searchParams.get(customProperty);
  return renderTemplate`<title>${title + " " + custom + exitTitle}</title>${maybeRenderHead()}<div class="topBar"> <h1>${heading}</h1> </div>`;
}, "/Users/felixortega/Documents/GitHub/website-test/src/components/DynamicHead.astro", void 0);

const $$file = "/Users/felixortega/Documents/GitHub/website-test/src/components/DynamicHead.astro";
const $$url = undefined;

export { $$DynamicHead as default, $$file as file, $$url as url };
