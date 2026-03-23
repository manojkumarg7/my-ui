import Link from "next/link";
import { Breadcrumb, Container } from "@/components/ui";
import { CodeBlock } from "@/docs/CodeBlock";
import { CodeBlockWithVariants } from "@/docs/CodeBlockWithVariants";
import { PreviewBlock } from "@/docs/PreviewBlock";
import {
  breadcrumbCodeHtml,
  breadcrumbCodeNext,
  breadcrumbCodeReact,
  installAddBreadcrumbCommand,
} from "@/lib/code";

export const metadata = {
  title: "Breadcrumb · my-ui",
  description: "Navigation breadcrumb with separators",
};

export default function BreadcrumbDocPage() {
  const items = [
    { label: "Home", href: "/" },
    { label: "Docs", href: "/docs" },
    { label: "Breadcrumb" },
  ];

  return (
    <main className="ui-py-12">
      <Container>
        <h1 className="doc-title">Breadcrumb</h1>
        <p className="doc-lead">
          Navigation path showing hierarchy. Pass an array of items; the last item is the current page and is not linked.
          Complete{" "}
          <Link href="/docs/initialization" className="doc-inline-link">
            Initialization
          </Link>{" "}
          first, then use the CLI or copy the source below.
        </p>

        <h2 className="doc-h2">Preview</h2>
        <PreviewBlock title="Live">
          <Breadcrumb items={items} />
          <Breadcrumb items={items} separator=">" />
        </PreviewBlock>

        <h2 className="doc-h2">Add via CLI</h2>
        <div className="doc-stack">
          <CodeBlock title="Add Breadcrumb via CLI" code={installAddBreadcrumbCommand} />
        </div>

        <h2 className="doc-h2">Component source</h2>
        <div className="doc-stack">
          <CodeBlockWithVariants
            title="Breadcrumb"
            variants={[
              { label: "HTML", code: breadcrumbCodeHtml },
              { label: "React", code: breadcrumbCodeReact },
              { label: "Next.js", code: breadcrumbCodeNext },
            ]}
          />
        </div>
      </Container>
    </main>
  );
}
