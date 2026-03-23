type ClassValue = string | number | boolean | undefined | null;

/**
 * Merges class name strings. Copy-paste friendly; no runtime dependencies.
 */
export function cn(...inputs: ClassValue[]): string {
  return inputs.filter(Boolean).join(" ");
}
