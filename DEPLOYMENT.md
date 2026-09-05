# Deployment & Handoff

This walks through getting the site from your computer onto
`mwdsocceragency.com`, without touching the currently-live site until
you've approved the new one on a preview URL.

## 1. Create a GitHub repository

1. Go to github.com and sign in (create a free account if you don't have one).
2. Click **New repository**. Name it something like `mwd-soccer-website`.
3. Leave it **empty** — no README, .gitignore, or license (this project already has them).
4. Set visibility to **Private** (recommended, since the codebase references real people).

## 2. Push the code to GitHub

From inside this project folder:

```bash
git init
git add .
git commit -m "Initial MWD Soccer website"
git branch -M main
git remote add origin https://github.com/<your-username>/mwd-soccer-website.git
git push -u origin main
```

## 3. Import the repository into Vercel

1. Go to vercel.com and sign in (you can sign in with your GitHub account).
2. Click **Add New → Project**.
3. Select the `mwd-soccer-website` repository.
4. Framework preset should auto-detect as **Next.js** — leave the default build settings as-is.
5. Click **Deploy**.

## 4. Environment variables

None are required for this version — there's no database or email API connected yet. If you later add a form backend (e.g. Resend for email, or a database), you'd add its API key here under **Project Settings → Environment Variables** before redeploying.

## 5. Preview the deployment

After the first deploy finishes, Vercel gives you a URL like
`mwd-soccer-website.vercel.app`. Open it and review the whole site —
this is a fully live, working version of the site, just not yet on
your domain. Share this link with anyone you want feedback from
before going live.

## 6. Connect mwdsocceragency.com to the Vercel project

**Do this only after you've reviewed and approved the preview.**

1. In the Vercel project, go to **Settings → Domains**.
2. Add `mwdsocceragency.com` (and `www.mwdsocceragency.com` if you use it).
3. Vercel will show you DNS records to add. Typically:
   - An **A record** for the root domain (`@`) pointing to `76.76.21.21`
   - A **CNAME record** for `www` pointing to `cname.vercel-dns.com`
   
   (Vercel will show the exact, current values for your project — use those over any values quoted here, as they can change.)
4. Go to wherever your domain's DNS is currently managed (your domain registrar, e.g. GoDaddy, Namecheap, or wherever mwdsocceragency.com is registered) and add those records.

## 7. Preserving the old site until you're ready

Don't change the DNS records at your registrar until you've reviewed the Vercel preview URL and are ready to go live — the current site keeps running on its existing hosting until you actually change DNS. There's no in-between state where both are half-live; it's live on the old host until the DNS change propagates, then live on Vercel.

DNS changes typically take anywhere from a few minutes to a few hours to fully propagate, depending on your registrar and previous DNS TTL settings.

## 8. Rollback plan

If something looks wrong after the DNS switch:

1. Go back to your domain registrar's DNS settings.
2. Revert the A/CNAME records to whatever they were pointing to before (write these down before step 6, or take a screenshot of your current DNS records as a backup).
3. This effectively reinstates the previous site once DNS re-propagates.

Because Vercel deployments are versioned, you can also just fix forward: revert the problematic commit in GitHub and Vercel will automatically redeploy the previous working version — often faster than a DNS rollback.
