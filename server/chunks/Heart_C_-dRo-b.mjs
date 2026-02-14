import { d as createAstro, c as createComponent, m as maybeRenderHead, b as renderTemplate } from './astro/server_CoUqLbNk.mjs';
import 'piccolore';
import 'clsx';
/* empty css                              */
/* empty css                              */

const $$Astro = createAstro("https://felixpro.dev/");
const $$ValentinesHeart = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ValentinesHeart;
  const referer = Astro2.request.headers.get("Referer");
  const url = new URL(referer);
  const name = url.searchParams.get("name");
  return renderTemplate`${maybeRenderHead()}<div id="heart" data-astro-cid-nyqpzvms></div> <h3 id="valentinesMessage" data-astro-cid-nyqpzvms>Happy Valentines Day ${name}!!</h3> `;
}, "/Users/felixortega/Documents/GitHub/website-test/src/components/valentinesHeart.astro", void 0);

const $$file = "/Users/felixortega/Documents/GitHub/website-test/src/components/valentinesHeart.astro";
const $$url = undefined;

export { $$ValentinesHeart as default, $$file as file, $$url as url };
