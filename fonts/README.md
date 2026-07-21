# Fonts — Gellix (brand), with web-safe mono fallback

**Gellix** is the TRI brand typeface. The full weight set ships in this folder as `.otf`:

| Weight | Regular              | Italic                    |
|-------:|----------------------|---------------------------|
| 100    | Gellix-Thin.otf      | Gellix-ThinItalic.otf     |
| 300    | Gellix-Light.otf     | Gellix-LightItalic.otf    |
| 400    | Gellix-Regular.otf   | Gellix-RegularItalic.otf  |
| 500    | Gellix-Medium.otf    | Gellix-MediumItalic.otf   |
| 600    | Gellix-SemiBold.otf  | Gellix-SemiBoldItalic.otf |
| 700    | Gellix-Bold.otf      | Gellix-BoldItalic.otf     |
| 800    | Gellix-ExtraBold.otf | Gellix-ExtraBoldItalic.otf|
| 900    | Gellix-Black.otf     | Gellix-BlackItalic.otf    |

`@font-face` declarations for the full family are already in `colors_and_type.css` and point at this folder. Any HTML file that imports `colors_and_type.css` will pick them up automatically — no extra `<link>` tag needed.

## Usage

```html
<link rel="stylesheet" href="../colors_and_type.css">
<!-- now: -->
<h1 style="font-family: var(--font-sans)">Gellix is live.</h1>
```

## Mono

Gellix has no monospaced companion. Code/tabular usage falls back to the platform monospace stack:

```css
--font-mono: ui-monospace, "SF Mono", "Cascadia Code", "Roboto Mono", Menlo, Consolas, monospace;
```

If a mono pairing is required, we'd recommend **Geist Mono** or **JetBrains Mono** from Google Fonts. Both are visually compatible with Gellix at small sizes.

## Web-safe fallback

`Inter` is declared as the CSS fallback inside `--font-sans`. System fonts are final fallbacks (SF Pro, Roboto, Segoe UI).

## Legacy fonts referenced in Figma

The source Figma files reference many other fonts (Roboto, Open Sans, Montserrat, Abel, SF Pro, Helvetica Neue, Univers, Poppins, Figtree, Lato, Courier). These show up in individual marketing decks or mock screenshots and are **not** part of the canonical merged system. Every UI surface in this design system renders in **Gellix**.
