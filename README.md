# Fable website replica

Next.js recreation of [yourfable.webflow.io](https://yourfable.webflow.io/). The production site is deployed from this repository to the `ouab/fable-website` Vercel project.

## Run locally

```powershell
pnpm install --frozen-lockfile
Copy-Item .env.example .env.local
# Add the project's Supabase publishable key to .env.local.
pnpm dev
```

The local preview runs at `http://localhost:3100` when started with `pnpm dev -p 3100`. `.env.local` is ignored by Git. Production and preview deployments require `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY` in Vercel for form submissions.

## Pages and forms

The home page links to founders, investors, and service providers. The about page, attend page, Startup Speed Run, its confirmation route, and media consent form are included. Events, community, and blog routes retain the source site's coming-soon state. Both multistep forms support back navigation without losing entered values.

All email, application, and consent submissions post through `/api/leads` to `public.fable_leads` in the supplied Website CMS Database. The table uses RLS with public insert access and no public read access. Its schema is in [`supabase/fable_leads.sql`](supabase/fable_leads.sql). The source site has placeholder Terms and Privacy links; those URLs should be supplied before public launch.

`public/assets` contains the supplied Fable photography, headshots, and logos, plus additional source images found on the live site. Cinema Sunday is bundled locally. Body text uses Comfortaa through Google Fonts.
