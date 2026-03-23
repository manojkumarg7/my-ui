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
  log('Then run `npx my-ui add button` or copy components from the docs.');
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

  die(
    "Usage:\n  npx my-ui init [--force]\n  npx my-ui add button [--force]\n  npx my-ui add alert [--force]\n  npx my-ui add badge [--force]\n  npx my-ui add breadcrumb [--force]",
    1,
  );
}

main();
