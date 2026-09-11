# Bouchaib ENNAKR — Portfolio

Personal portfolio built with Astro 7 and Tailwind CSS 4, deployed as a static site on Cloudflare Pages.

## Local development

```sh
npm ci
npm run dev
```

## Production build

```sh
npm run build
```

The static output is written to `dist/`.

## Cloudflare Pages

The project is configured in `wrangler.jsonc`. For direct deployment with Wrangler:

```sh
npm run pages:deploy
```

For GitHub Actions deployment, create a Cloudflare Pages project named `ennbou-portfolio`, then add `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` as repository secrets. Pull requests run the production build; pushes to `main` build and deploy.

When using Cloudflare's native Git integration instead, use `npm run build` as the build command and `dist` as the output directory.
