#!/usr/bin/env node
/**
 * my-ui CLI — init / add (Node built-ins only)
 * Usage: my-ui init [--force]  |  my-ui add button [--force]
 */

const fs = require("fs");
const path = require("path");

const cwd = process.cwd();

const templateRoot = path.join(__dirname, "templates");

function log(msg) {
  console.log(`[my-ui] ${msg}`);
}

function warn(msg) {
  console.warn(`[my-ui] ${msg}`);
}

function info(msg) {
  console.log(`[my-ui] ${msg}`);
}

function die(msg, code = 1) {
  console.error(`[my-ui] ${msg}`);
  process.exit(code);
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function readTemplate(relPath) {
  const full = path.join(templateRoot, relPath);
  return fs.readFileSync(full, "utf8");
}

function writeFile(targetPath, content, force) {
  if (fs.existsSync(targetPath) && !force) {
    info(`skip (exists): ${path.relative(cwd, targetPath)}`);
    return false;
  }
  ensureDir(path.dirname(targetPath));
  fs.writeFileSync(targetPath, content, "utf8");
  log(`write ${path.relative(cwd, targetPath)}`);
  return true;
}

function copyTemplate(relFromTemplate, destRelToCwd, force) {
  const content = readTemplate(relFromTemplate);
  const target = path.join(cwd, destRelToCwd);
  return writeFile(target, content, force);
}

function getAppGlobalsPath() {
  const srcApp = path.join(cwd, "src", "app");
  if (fs.existsSync(srcApp)) {
    return path.join(srcApp, "globals.css");
  }
  return path.join(cwd, "app", "globals.css");
}

function mergeAppGlobals() {
  const targetPath = getAppGlobalsPath();
  const stylesDir = path.join(cwd, "styles");
  const rel = path.relative(path.dirname(targetPath), stylesDir).replace(/\\/g, "/");
  const marker = "/* my-ui */";
  const block = `${marker}\n@import "${rel}/globals.css";\n@import "${rel}/utilities.css";\n`;

  ensureDir(path.dirname(targetPath));

  let content = "";
  if (fs.existsSync(targetPath)) {
    content = fs.readFileSync(targetPath, "utf8");
  }

  if (content.includes(marker) || content.includes("styles/globals.css")) {
    log(`app globals already references my-ui styles: ${path.relative(cwd, targetPath)}`);
    return;
  }

  const next = block + (content ? content : "");
  fs.writeFileSync(targetPath, next, "utf8");
  log(`updated ${path.relative(cwd, targetPath)} (prepended my-ui imports)`);
}

function copySnippetToProject(relTemplate, destRel, force) {
  const content = readTemplate(relTemplate);
  writeFile(path.join(cwd, destRel), content, force);
}

function cmdInit(force) {
  log("running init…");

  copyTemplate("styles/globals.css", "styles/globals.css", force);
  copyTemplate("styles/utilities.css", "styles/utilities.css", force);
  copyTemplate("lib/utils.ts", "lib/utils.ts", force);
  copyTemplate("lib/theme.ts", "lib/theme.ts", force);
  copyTemplate("hooks/useTheme.ts", "hooks/useTheme.ts", force);
  copyTemplate("components/ui/theme-toggle.tsx", "components/ui/theme-toggle.tsx", force);

  mergeAppGlobals();
  copySnippetToProject("snippets/LAYOUT_THEME.md", "MY_UI_THEME_LAYOUT.md", force);

  log("done. Next: follow MY_UI_THEME_LAYOUT.md to update app/layout.tsx (theme script + suppressHydrationWarning).");
  log('Then run `npm exec -- my-ui add button` or copy components from the docs.');
}

function cmdAddButton(force) {
  log("adding button…");
  copyTemplate("components/ui/Button.tsx", "components/ui/Button.tsx", force);
  log("done.");
}

function cmdAddAlert(force) {
  log("adding alert…");
  copyTemplate("components/ui/Alert.tsx", "components/ui/Alert.tsx", force);
  log("done.");
}

function cmdAddBadge(force) {
  log("adding badge…");
  copyTemplate("components/ui/Badge.tsx", "components/ui/Badge.tsx", force);
  log("done.");
}

function cmdAddBreadcrumb(force) {
  log("adding breadcrumb…");
  copyTemplate("components/ui/Breadcrumb.tsx", "components/ui/Breadcrumb.tsx", force);
  log("done.");
}

const COLLAPSE_CSS = `
/* Collapse */
.ui-collapse {
  width: 100%;
  min-width: 0;
  border: 1px solid var(--ui-border);
  border-radius: var(--ui-radius-md);
  background-color: var(--ui-bg);
  overflow: hidden;
}

.ui-collapse__trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--ui-space-3) var(--ui-space-4);
  font: inherit;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--ui-fg);
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease;
}

.ui-collapse__trigger:hover {
  background-color: var(--ui-bg-muted);
}

.ui-collapse__trigger:focus-visible {
  outline: 2px solid var(--ui-ring);
  outline-offset: -2px;
}

.ui-collapse__trigger-text {
  flex: 1;
}

.ui-collapse__icon {
  flex-shrink: 0;
  margin-left: var(--ui-space-2);
  color: var(--ui-fg-muted);
  transition: transform 0.2s ease;
}

.ui-collapse__icon--open {
  transform: rotate(180deg);
}

.ui-collapse__content {
  overflow: hidden;
  transition: height 0.22s ease-out;
}

.ui-collapse__content-inner {
  padding: var(--ui-space-4);
  border-top: 1px solid var(--ui-border);
}
`;

function ensureCollapseCssInGlobals() {
  const stylesGlobals = path.join(cwd, "styles", "globals.css");
  if (!fs.existsSync(stylesGlobals)) return;
  const content = fs.readFileSync(stylesGlobals, "utf8");
  if (content.includes("ui-collapse")) return;
  fs.appendFileSync(stylesGlobals, COLLAPSE_CSS, "utf8");
  log("added Collapse styles to styles/globals.css");
}

function cmdAddCollapse(force) {
  log("adding collapse…");
  copyTemplate("components/ui/Collapse.tsx", "components/ui/Collapse.tsx", force);
  ensureCollapseCssInGlobals();
  log("done.");
}

function cmdAddPagination(force) {
  log("adding pagination…");
  copyTemplate("components/ui/Pagination.tsx", "components/ui/Pagination.tsx", force);
  log("done.");
}

function cmdAddProgress(force) {
  log("adding progress…");
  copyTemplate("components/ui/Progress.tsx", "components/ui/Progress.tsx", force);
  log("done.");
}

const TOAST_CSS = `
/* Toast */
.ui-toast-region {
  position: fixed;
  bottom: var(--ui-space-4);
  right: var(--ui-space-4);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: var(--ui-space-2);
  max-width: 22rem;
  width: calc(100vw - 2rem);
  pointer-events: none;
}

.ui-toast {
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  padding: var(--ui-space-3) var(--ui-space-4);
  font-size: 0.875rem;
  line-height: 1.45;
  border-radius: var(--ui-radius-md);
  border: 1px solid;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.08),
    0 4px 6px -4px rgb(0 0 0 / 0.06);
  animation: ui-toast-in 0.22s ease-out;
}

@keyframes ui-toast-in {
  from {
    opacity: 0;
    transform: translateY(0.35rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.ui-toast--default {
  background-color: var(--ui-bg);
  color: var(--ui-fg);
  border-color: var(--ui-border);
}

.ui-toast--success {
  background-color: var(--ui-alert-success-bg);
  color: var(--ui-alert-success-fg);
  border-color: var(--ui-alert-success-border);
}

.ui-toast--warning {
  background-color: var(--ui-alert-warning-bg);
  color: var(--ui-alert-warning-fg);
  border-color: var(--ui-alert-warning-border);
}

.ui-toast--error {
  background-color: var(--ui-alert-error-bg);
  color: var(--ui-alert-error-fg);
  border-color: var(--ui-alert-error-border);
}

.ui-toast__row {
  display: flex;
  align-items: flex-start;
  gap: var(--ui-space-2);
}

.ui-toast__body {
  flex: 1;
  min-width: 0;
}

.ui-toast__title {
  font-weight: 600;
  font-size: 0.9375rem;
}

.ui-toast__desc {
  margin-top: var(--ui-space-1);
  font-size: 0.8125rem;
  color: var(--ui-fg-muted);
}

.ui-toast--success .ui-toast__desc,
.ui-toast--warning .ui-toast__desc,
.ui-toast--error .ui-toast__desc {
  color: inherit;
  opacity: 0.9;
}

.ui-toast__close {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  margin: -0.25rem -0.25rem 0 0;
  padding: 0;
  font: inherit;
  font-size: 1.25rem;
  line-height: 1;
  color: inherit;
  opacity: 0.65;
  background: transparent;
  border: none;
  border-radius: var(--ui-radius-sm);
  cursor: pointer;
  transition: opacity 0.15s ease;
}

.ui-toast__close:hover {
  opacity: 1;
}

.ui-toast__close:focus-visible {
  outline: 2px solid var(--ui-ring);
  outline-offset: 2px;
}
`;

function ensureToastCssInGlobals() {
  const stylesGlobals = path.join(cwd, "styles", "globals.css");
  if (!fs.existsSync(stylesGlobals)) return;
  const content = fs.readFileSync(stylesGlobals, "utf8");
  if (content.includes("ui-toast-region")) return;
  fs.appendFileSync(stylesGlobals, TOAST_CSS, "utf8");
  log("added Toast styles to styles/globals.css");
}

function cmdAddToast(force) {
  log("adding toast…");
  copyTemplate("components/ui/toast.tsx", "components/ui/toast.tsx", force);
  ensureToastCssInGlobals();
  log("done.");
}

function ensureLiquidButtonCssInGlobals() {
  const stylesGlobals = path.join(cwd, "styles", "globals.css");
  if (!fs.existsSync(stylesGlobals)) return;
  const content = fs.readFileSync(stylesGlobals, "utf8");
  if (content.includes("ui-liquid-btn")) return;
  const snippet = readTemplate("snippets/liquid-button.css");
  fs.appendFileSync(stylesGlobals, "\n" + snippet, "utf8");
  log("added Liquid Button styles to styles/globals.css");
}

function cmdAddLiquidButton(force) {
  log("adding liquid-button…");
  copyTemplate(
    "components/ui/liquid-glass-button.tsx",
    "components/ui/liquid-glass-button.tsx",
    force,
  );
  ensureLiquidButtonCssInGlobals();
  log("done.");
}

function hasFlag(name) {
  return process.argv.includes(name);
}

function main() {
  const argv = process.argv.slice(2);
  const force = hasFlag("--force");
  const cmd = argv[0];

  if (cmd === "init") {
    cmdInit(force);
    return;
  }
  if (cmd === "add" && argv[1] === "button") {
    cmdAddButton(force);
    return;
  }
  if (cmd === "add" && argv[1] === "alert") {
    cmdAddAlert(force);
    return;
  }
  if (cmd === "add" && argv[1] === "badge") {
    cmdAddBadge(force);
    return;
  }
  if (cmd === "add" && argv[1] === "breadcrumb") {
    cmdAddBreadcrumb(force);
    return;
  }
  if (cmd === "add" && argv[1] === "collapse") {
    cmdAddCollapse(force);
    return;
  }
  if (cmd === "add" && argv[1] === "pagination") {
    cmdAddPagination(force);
    return;
  }
  if (cmd === "add" && argv[1] === "progress") {
    cmdAddProgress(force);
    return;
  }
  if (cmd === "add" && argv[1] === "toast") {
    cmdAddToast(force);
    return;
  }
  if (cmd === "add" && argv[1] === "liquid-button") {
    cmdAddLiquidButton(force);
    return;
  }

  die(
    "Usage:\n  npm exec -- my-ui init [--force]\n  npm exec -- my-ui add button [--force]\n  npm exec -- my-ui add alert [--force]\n  npm exec -- my-ui add badge [--force]\n  npm exec -- my-ui add breadcrumb [--force]\n  npm exec -- my-ui add collapse [--force]\n  npm exec -- my-ui add pagination [--force]\n  npm exec -- my-ui add progress [--force]\n  npm exec -- my-ui add toast [--force]\n  npm exec -- my-ui add liquid-button [--force]",
    1,
  );
}

main();
