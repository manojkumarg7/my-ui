import { DocShell } from "@/docs/DocShell";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DocShell>{children}</DocShell>;
}
