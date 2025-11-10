import { defineConfig } from "astro/config";
import icon from "astro-icon";
import i18n from "@astrolicious/i18n";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://anavareethaimassage.de", // update me!
  integrations: [
    icon(),
    i18n({
      defaultLocale: "de",
      locales: ["de", "en"],
      client: {
        data: true,
        paths: true,
      },
      // used to localize the routes
      pages: {
        "/about": {
          en: "/about",
        },
        "/massages": {
          en: "/massages",
        }
      },
    }),
    sitemap({
      i18n: {
        defaultLocale: 'de', // All urls that don't contain `en` after "https://www.yourwebsite.com/" will be treated as default locale, i.e. `de`
        locales: {
          // key/value pairs of all languages supported
          de: 'de-DE', // The `defaultLocale` value must be present in `locales` keys
          en: 'en-US',
        },
      },
    }),
  ],
});