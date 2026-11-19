# Candomblé, Roots of Fate

Documentary website built with plain HTML, CSS and JavaScript. It is hosted with GitHub Pages.

## Folder structure

```
index.html          all the text and sections of the site
css/style.css       colors, fonts and layout (colors live at the top, in :root)
js/main.js          interactions (trailer link and contact email live at the top)
assets/
  images/           hero-poster.jpg, film-still.jpg, miguel-rosas.jpg, junior.jpg,
                    community.jpg, director.jpg, bahia-terreiro.jpg, saopaulo-terreiro.jpg
    gallery/        01.jpg to 08.jpg
  video/            hero.mp4 (short, silent loop)
```

If a photo file is missing, the site shows a colored placeholder with a label, so nothing breaks while the media is being collected.

## How to add media

- **Hero video:** save a short silent loop as `assets/video/hero.mp4`. Keep it under 20 MB.
- **Trailer and clips:** upload to YouTube or Vimeo and paste the embed link in `TRAILER_URL` (top of `js/main.js`) or in the `data-video` attribute of each clip in `index.html`.
- **Photos:** use the file names above, or change the `src` in `index.html`.

## Reusing the site for another film

1. Change the colors in `:root` at the top of `css/style.css`.
2. Replace the text in `index.html` (search for each section comment).
3. Swap the files in `assets/`.
4. Update `CONTACT_EMAIL` and `TRAILER_URL` in `js/main.js`.
