[![npm (scoped)](https://img.shields.io/npm/v/@cycle/core.svg)](https://www.npmjs.com/package/stickerize)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/stickerize)

# <sro-sticker>

Stickerize your images with a simple web component!

[Demo](https://sroettering.github.io/stickerize/)

## Installation
```
npm -i -S sticker
```

## Loading
```html
<!-- From CDN -->
<script async type="module" src="https://unpkg.com/sticker/sticker.js"></script>

<!-- From local installation -->
<script async type="module" src="/node_modules/sticker/sticker.js"></script>

<!-- In a module -->
<script type="module">
    import "sticker";
</script>
```

## Usage
<!--
```
<custom-element-demo>
    <template>
        <link rel="import" href="stickerize.html">
    </template>
</custom-element-demo>
```
-->
```html
<!-- with SVG -->
<sro-sticker>
    <svg width="400" height="110">
        <rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
    </svg>
</sro-sticker>

<!-- with img -->
<sro-sticker>
    <img src="/my-image.png">
</sro-sticker>
```

## Notes
Basically your images receive two drop shadows (white border and blurred shadow) by applying a css filter.
This implies that your browser must support css filters.

This web component is compatible with the `@webcomponents/webcomponentsjs` polyfill.
