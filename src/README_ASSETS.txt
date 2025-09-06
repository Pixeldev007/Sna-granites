Assets Folder README
===================

This website requires an assets folder with specific images for proper display.

Missing Assets:
1. hero-bg.jpg - Background image for hero sections
   - Location: src/assets/hero-bg.jpg
   - Used in: src/App.css (line 44)
   - Recommended specifications:
     * Format: JPEG
     * Size: 1920x1080 pixels
     * Theme: High-quality granite texture or showroom image

2. placeholder.jpg - Placeholder image for products and gallery
   - Location: public/placeholder.jpg
   - Used in multiple components (Home, Products, Gallery)
   - Recommended specifications:
     * Format: JPEG
     * Size: 800x600 pixels
     * Theme: Neutral stone/texture image that represents granite

To resolve the missing assets issue:
1. Create an 'assets' folder in this directory (src/)
2. Add the hero-bg.jpg file to the assets folder
3. Add the placeholder.jpg file to the public folder

For a production website, replace these placeholder images with actual product images.
