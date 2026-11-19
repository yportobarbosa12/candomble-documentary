# 03. Design decisions

## Inspiration sites

| Site | What was taken from it |
|---|---|
| thebiggestlittlefarm.com | Looping background video in the hero, a big headline, a trailer play button, a film section with critic quotes, and a newsletter area in the footer |
| thesocialdilemma.com | Impact numbers near the top, a clear call to action for screenings, and a press quotes section |
| onebillionacres.org | Animated statistic counters, numbered cards, a clear step-by-step structure and a strong closing call to action |

The pages were read as text only, so layout, colors and animations are original choices and were not copied.

## Palette (nature, vibrant)

| Name | Hex | Use |
|---|---|---|
| Forest | `#0e2b24` | Main dark background |
| Ocean | `#0c3a4a` | Facts bar and Bahia section |
| Earth | `#6b4226` | São Paulo section |
| Leaf | `#3fa06a` | Accents, active filter |
| Clay | `#c8643a` | Small labels and hover details |
| Sand | `#f4ead9` | Light sections |
| Sun | `#f4b63a` | Buttons and highlights |

The palette is stored as CSS variables at the top of `css/style.css`, so a new film only needs new values there.

## Fonts

- **Fraunces** (serif) for titles. It feels warm and cinematic.
- **Inter** (sans serif) for body text, because it is easy to read on any screen.

## Layout and interaction choices

- The site opens with a full screen video area so the first impression is the film itself.
- Sections alternate between dark and light backgrounds to keep the long page easy to follow.
- The *Two terreiros* section has two tabs. Switching tabs changes the text, the photo and the background color of the whole section, from blue (Bahia) to brown (São Paulo). This shows the contrast between the two realities, which is the idea of the film.
- Numbers count up when they come into view.
- Gallery photos can be filtered by tag and enlarged in a lightbox.
- Trailer and clips open in a pop-up player.
- A thin progress bar at the top shows how far down the page the visitor is.
- Missing photos show a colored placeholder with a label, so the page never looks broken while media is being collected.
- Motion is switched off for visitors who prefer reduced motion.

## Writing rules for the site text

English only. Clear, human sentences. No em dashes.
