Hero Images (SVG)
====================
Files:
- assets/images/hero-1.svg  (Cement Solutions)
- assets/images/hero-2.svg  (Supply Chain)
- assets/images/hero-3.svg  (Technical Data)

How to use in your HTML (already matching your code):
<picture>
  <source srcset="assets/images/hero-1.webp" type="image/webp">
  <img src="assets/images/hero-1.svg" class="w-100" alt="..." loading="eager" decoding="async" fetchpriority="high">
</picture>

You can keep the <source> WebP line as a future enhancement; the SVGs will display perfectly without it.
Colors are aligned with your CSS tokens (gold/sky/emerald). Feel free to edit the SVGs by hand.
