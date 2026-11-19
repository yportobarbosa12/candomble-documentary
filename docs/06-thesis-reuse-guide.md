# 06. Reusing the site for the Lake Tahoe thesis documentary

The site was built so that the structure stays and only the content changes.

## Recommended method

1. In GitHub, open `candomble-documentary` and click *Use this template* (turn on *Template repository* in Settings first), or copy the folder and create a new repository, for example `lake-tahoe-documentary`.
2. Turn on GitHub Pages for the new repository (see `02-github-setup.md`).
3. Follow the steps below.

## What to change

| Where | What to change |
|---|---|
| `css/style.css`, `:root` | Colors. Try lake blues, pine greens and granite grays |
| `index.html`, `<title>` and `<meta>` | Film title and description |
| `index.html`, hero | Title, tagline, director line |
| `index.html`, `#film` | Synopsis |
| `index.html`, `#themes` | The four cards |
| `index.html`, `#terreiros` | Rename to a section that fits Tahoe, for example *Two shores* or *Two seasons*. The tab behavior can stay as it is |
| `index.html`, `#people` | Interviewees |
| `index.html`, `#credits` | Credits and film details |
| `index.html`, facts bar | The four numbers and labels |
| `js/main.js` | `CONTACT_EMAIL` and `TRAILER_URL` |
| `assets/` | All photos and videos |

## What to add for the thesis

- A page or section for the marketing and distribution plan
- Festival strategy and screening list
- Press kit download (PDF)
- Newsletter signup

## Checklist before presenting

- [ ] Every placeholder is gone
- [ ] All photos have descriptive alt text
- [ ] The site opens correctly on a phone
- [ ] Trailer plays
- [ ] Contact email is correct
- [ ] Permissions and credits are complete
