/**
 * In-memory index for future CLI (`npm exec -- my-ui add <name>`).
 * Point the CLI at JSON files under /registry or import this map.
 */
import type { ThemeMode } from "./theme";

export type RegistryFile = {
  path: string;
  role: "component" | "util" | "hook" | "layout" | "style";
  note?: string;
};

export type RegistryEntry = {
  name: string;
  description: string;
  dependencies: string[];
  files: RegistryFile[];
};

export const registryIndex: Record<string, RegistryEntry> = {
  alert: {
    name: "alert",
    description: "Default, success, warning, and error alert variants",
    dependencies: ["lib/utils.ts", "styles/globals.css"],
    files: [
      { path: "components/ui/Alert.tsx", role: "component" },
      { path: "lib/utils.ts", role: "util" },
    ],
  },
  badge: {
    name: "badge",
    description: "Small pill labels for status, count, or category",
    dependencies: ["lib/utils.ts", "styles/globals.css"],
    files: [
      { path: "components/ui/Badge.tsx", role: "component" },
      { path: "lib/utils.ts", role: "util" },
    ],
  },
  breadcrumb: {
    name: "breadcrumb",
    description: "Navigation breadcrumb with separators",
    dependencies: ["lib/utils.ts", "styles/globals.css"],
    files: [
      { path: "components/ui/Breadcrumb.tsx", role: "component" },
      { path: "lib/utils.ts", role: "util" },
    ],
  },
  button: {
    name: "button",
    description: "Primary and secondary button using CSS variables",
    dependencies: ["lib/utils.ts", "styles/globals.css"],
    files: [
      { path: "components/ui/Button.tsx", role: "component" },
      { path: "lib/utils.ts", role: "util" },
    ],
  },
  "liquid-button": {
    name: "liquid-button",
    description: "Liquid glass and metal buttons (SVG filter + custom CSS)",
    dependencies: ["lib/utils.ts", "styles/globals.css"],
    files: [
      { path: "components/ui/liquid-glass-button.tsx", role: "component" },
      { path: "lib/utils.ts", role: "util" },
      { path: "styles/globals.css", role: "style", note: "includes .ui-liquid-btn and .ui-metal-btn" },
    ],
  },
  container: {
    name: "container",
    description: "Responsive centered container",
    dependencies: ["lib/utils.ts", "styles/globals.css"],
    files: [
      { path: "components/ui/container.tsx", role: "component" },
      { path: "lib/utils.ts", role: "util" },
    ],
  },
  theme: {
    name: "theme",
    description: "Dark/light theme with localStorage and no flash",
    dependencies: ["lib/theme.ts", "styles/globals.css", "app/layout.tsx"],
    files: [
      { path: "lib/theme.ts", role: "util" },
      { path: "hooks/useTheme.ts", role: "hook" },
      { path: "components/ui/theme-toggle.tsx", role: "component" },
    ],
  },
};

export type { ThemeMode };
