# my-ui

Next.js UI framework with CLI — init styles, theme, and add components (Button, Alert, Badge, Breadcrumb). Built with Tailwind CSS v4.

## Installation

Use the CLI in any Next.js project:

```bash
# Initialize my-ui (styles, theme, globals)
npx @manojkumarg7/my-ui init

# Add components
npx @manojkumarg7/my-ui add button
npx @manojkumarg7/my-ui add alert
npx @manojkumarg7/my-ui add badge
npx @manojkumarg7/my-ui add breadcrumb
```

Use `--force` to overwrite existing files:

```bash
npx @manojkumarg7/my-ui init --force
npx @manojkumarg7/my-ui add button --force
```

## What `init` does

- Adds `styles/globals.css` and `styles/utilities.css`
- Adds `lib/utils.ts`, `lib/theme.ts`
- Adds `hooks/useTheme.ts`
- Adds `components/ui/theme-toggle.tsx`
- Updates your app globals to import my-ui styles
- Creates `MY_UI_THEME_LAYOUT.md` with instructions for `app/layout.tsx`

## What `add` does

- Copies the requested component into `components/ui/`

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the docs.

## License

MIT
