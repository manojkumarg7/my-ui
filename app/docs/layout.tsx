import Link from "next/link";
import { Container, ThemeToggle } from "@/components/ui";
import { DocsSidebar } from "@/docs/DocsSidebar";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="doc-shell ui-d-flex ui-flex-col ui-flex-1 ui-min-h-screen">
      <header className="ui-border-b">
        <Container className="ui-d-flex ui-items-center ui-justify-between ui-py-8">
          <Link href="/" className="doc-nav-link">
            ← my-ui
          </Link>
          <ThemeToggle />
        </Container>
      </header>

      <div className="doc-shell__grid ui-d-flex ui-flex-1">
        <aside className="doc-sidebar-wrap">
          <DocsSidebar />
        </aside>
        <div className="doc-main ui-flex-1">{children}</div>
      </div>
    </div>
  );
}
