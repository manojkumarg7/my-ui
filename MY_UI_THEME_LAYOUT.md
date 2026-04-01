# my-ui — theme integration (App Router)

After `npm exec -- my-ui init`, wire the theme into your root layout:

1. **Import** `THEME_STORAGE_KEY` from `@/lib/theme`.
2. **Add** the inline script in `<head>` so the `dark` class is applied before paint (no flash).
3. Set **`suppressHydrationWarning`** on `<html>` if the class can differ from SSR.

Example (merge into `app/layout.tsx`):

```tsx
import { THEME_STORAGE_KEY } from "@/lib/theme";

const themeInitScript = `(function(){var k=${JSON.stringify(THEME_STORAGE_KEY)};try{var s=localStorage.getItem(k);var dark=s==="dark"||(s!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",dark);}catch(e){}})();`;

// Inside <html> …>
<head>
  <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
</head>
```

Ensure `app/globals.css` imports `../styles/globals.css` and `../styles/utilities.css` (the CLI merges this for you when possible).

Optional: add font variables on `<html>` (e.g. `next/font`) so `--font-geist-sans` / `--font-geist-mono` resolve; otherwise system fonts apply via fallbacks in `styles/globals.css`.
