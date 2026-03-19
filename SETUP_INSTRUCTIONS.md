# Flowbite + Tailwind + Flask Setup

Your project is now configured to use Flowbite with Tailwind CSS in Flask!

## What was fixed:

### 1. **CSS Build Configuration** ([static/src/input.css](static/src/input.css))
   - Added import of Flowbite's compiled CSS: `@import "flowbite/dist/flowbite.css";`
   - Imports Flowbite theme files (default, minimal, enterprise, playful, mono)
   - Configured with custom fonts from Google Fonts

### 2. **Build Scripts** ([package.json](package.json))
   - Added `build-css`: Builds CSS once
   - Added `watch-css`: Watches for changes and rebuilds automatically

### 3. **HTML Template** ([templates/index.html](templates/index.html))
   - Already properly configured with:
     - CSS link to compiled Tailwind + Flowbite styles
     - Flowbite JavaScript from CDN

## How to use:

### Build CSS once:
```bash
npm run build-css
```

### Watch and rebuild on changes (recommended during development):
```bash
npm run watch-css
```

### Run your Flask app:
```bash
python3 app.py
```

## What you can now use:

- **Tailwind CSS utility classes**: `text-blue-600`, `bg-red-500`, etc.
- **Flowbite components**: Buttons, modals, dropdowns, navbars, etc.
- Custom Flowbite theme system with consistent styling

## Example components:

Update your HTML to use Flowbite components:

```html
<!-- Flowbite Button -->
<button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
  Click me
</button>

<!-- Flowbite Badge -->
<span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
  New
</span>
```

Enjoy building with Flowbite and Tailwind in Flask! 🚀
