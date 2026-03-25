# my-ui

Next.js UI framework with CLI — init styles, theme, and add components (Button, Alert, Badge, Breadcrumb). Built with Tailwind CSS v4.

## Installation

Install the package, then use `npm exec` to run the CLI (requires npm 7+):

```bash
npm install @manojkumarg5/my-ui
```

```bash
# Initialize my-ui (styles, theme, globals)
npm exec -- my-ui init

# Add components
npm exec -- my-ui add button
npm exec -- my-ui add alert
npm exec -- my-ui add badge
npm exec -- my-ui add breadcrumb
```

**One-shot without adding a dependency** (downloads and runs the published package):

```bash
npm exec --package=@manojkumarg5/my-ui -- my-ui init
```

Use `--force` to overwrite existing files:

```bash
npm exec -- my-ui init --force
npm exec -- my-ui add button --force
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
