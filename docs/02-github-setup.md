# 02. GitHub setup

Date: November 18 and 19, 2026

## What exists

- GitHub user: `yportobarbosa12`
- Repository: `candomble-documentary` (public, created without a README)
- Live site: https://yportobarbosa12.github.io/candomble-documentary/
- Older class repositories, kept untouched: `my-first-website` and `web-design-class`

## Steps that were taken

1. **Connect GitHub to Claude.** In claude.ai, open the Claude Code page (`claude.ai/code`), open the repository selector and click *Connect to GitHub*. Sign in to GitHub when asked. The old path *Settings > Connectors* is now called *Plugins* in the app, and GitHub appears there as a built-in integration after it is connected.
2. **Create the repository.** On github.com/new, owner `yportobarbosa12`, name `candomble-documentary`, visibility Public, README off, no .gitignore, no license.
3. **Install the Claude GitHub App on the new repository.** On the install page choose *Only select repositories*, pick `candomble-documentary`, click *Install & Authorize*, then click *Finish connecting GitHub* on claude.ai. This gives Claude permission to push code to that one repository.
4. **First commit.** The site files were committed and pushed to the `main` branch.
5. **Turn on GitHub Pages.** Repository *Settings > Pages*, Source *Deploy from a branch*, Branch `main`, folder `/ (root)`, Save. The first build takes one to two minutes.

## How to update the site later

Any change pushed to `main` is published automatically by GitHub Pages in a minute or two. With VS Code: edit the files, then *Source Control*, write a message, *Commit*, *Sync Changes*.

## Notes

- GitHub Pages is free for public repositories.
- The site uses only relative paths (`css/style.css`, `assets/images/...`), so it works from the `/candomble-documentary/` address without changes.
- Large videos should not live in the repository. GitHub blocks single files over 100 MB and works best with small files. Upload trailers and clips to YouTube or Vimeo and use the embed link.
