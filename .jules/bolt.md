## 2024-05-23 - Image Dimensions & CLS
**Learning:** Using `file` command to inspect WebP images works for dimensions on this system, but falls back to generic description for others (likely due to internal WebP format variations like VP8X vs VP8). Python's `struct` module is a reliable fallback to parse WebP headers if `PIL`/`Pillow` is missing.
**Action:** Always verify image dimensions with a script if CLI tools are ambiguous before hardcoding `width`/`height` attributes.
