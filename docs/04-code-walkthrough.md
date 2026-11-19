# 04. Code walkthrough (version 1)

## Files

```
index.html        All the text, sections and structure
css/style.css     All colors, fonts, spacing and animations
js/main.js        All interactions
assets/images/    Photos (placeholders show until files are added)
assets/video/     hero.mp4, the silent loop for the top of the page
docs/             This documentation
```

## index.html, section by section

Each section is wrapped in a `<section>` with an `id`, and the navigation links jump to those ids.

| Section id | What it is |
|---|---|
| `#hero` | Full screen area with the hero video, title, tagline, trailer button |
| (facts) | Four numbers: 14 minutes, 2 terreiros, 2 cities, 2024 |
| `#film` | Synopsis and a film still |
| `#themes` | Four cards: Dance, Búzios, Community, Intolerance |
| `#terreiros` | Interactive tabs for Salvador and São Paulo |
| `#people` | Miguel Rosas, Júnior and the community |
| `#gallery` | Filterable photo grid with lightbox |
| `#clips` | Three behind the scenes video buttons |
| `#statement` | Director's statement |
| `#screenings` | Upcoming screenings and a request form link |
| `#press` | Reviews, to be filled in |
| `#credits` | Film details |
| `#contact` | Contact form |

Images use this pattern:

```html
<figure class="media" data-label="Film still">
  <img src="assets/images/film-still.jpg" alt="..." onerror="this.remove()">
</figure>
```

The `figure` has a colored gradient and shows the `data-label` text. If the image file exists it covers the gradient. If it does not exist, `onerror` removes the broken image and the placeholder stays.

## css/style.css

1. `:root` holds the color palette, fonts and sizes as variables.
2. Navigation turns solid after the page scrolls (class `is-solid`).
3. The hero uses an animated gradient as a fallback behind the video.
4. `.reveal` elements start invisible and fade up when they enter the screen.
5. The `#terreiros` section changes its background according to `data-place="bahia"` or `data-place="saopaulo"`.
6. Media queries at the bottom adapt the layout for tablets (980px) and phones (820px).
7. `prefers-reduced-motion` turns animations off for visitors who ask for that.

## js/main.js

Two settings at the top:

```js
const CONTACT_EMAIL = "yasmin@example.com";  // change to the real email
const TRAILER_URL = "";                       // paste a YouTube or Vimeo embed link
```

Then, in order:

1. **Scroll handler.** Makes the nav solid, fills the progress bar and moves the hero text slightly for a depth effect.
2. **Mobile menu.** Opens and closes the side menu.
3. **Reveal on scroll.** An `IntersectionObserver` adds `is-visible` when a section enters the screen.
4. **Counters.** Counts each number from 0 to its `data-count` value over 1.6 seconds.
5. **Terreiros tabs.** Switches the active panel and updates `data-place` on the section.
6. **Gallery filter.** Hides photos whose `data-tags` do not include the chosen filter.
7. **Modals.** One player for the trailer and clips (YouTube or Vimeo embed, or a local mp4) and one lightbox for photos. The Escape key closes them.
8. **Contact form.** Opens the visitor's email app with the message filled in. This works without a server, which suits GitHub Pages.

## How version 1 was tested

- Opened in a real Chrome browser at 1440 px wide (desktop) and 390 px wide (phone).
- No JavaScript errors in the console.
- Clicking the São Paulo tab changed the panel and the background.
- The *Dance* filter showed 3 of the 8 gallery items.
- The trailer button opened the pop-up.
- Screenshots are saved in `docs/screenshots/`.
