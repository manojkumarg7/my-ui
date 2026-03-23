import Link from "next/link";
import { Badge, Container } from "@/components/ui";
import { CodeBlock } from "@/docs/CodeBlock";
import { CodeBlockWithVariants } from "@/docs/CodeBlockWithVariants";
import { PreviewBlock } from "@/docs/PreviewBlock";
import {
  badgeCodeHtml,
  badgeCodeNext,
  badgeCodeReact,
  installAddBadgeCommand,
} from "@/lib/code";

export const metadata = {
  title: "Badge · my-ui",
  description: "Small labels for status, count, or category",
};

export default function BadgeDocPage() {
  return (
    <main className="ui-py-12">
      <Container>
        <h1 className="doc-title">Badge</h1>
        <p className="doc-lead">
          Small pill-style labels for status, counts, or categories. Variants: default, success, warning, and error.
          Complete{" "}
          <Link href="/docs/initialization" className="doc-inline-link">
            Initialization
          </Link>{" "}
          first, then use the CLI or copy the source below.
        </p>

        <h2 className="doc-h2">Preview</h2>
        <PreviewBlock title="Live">
          <div className="ui-d-flex ui-gap-2 ui-items-center">
            <Badge>Default</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
          </div>
        </PreviewBlock>

        <h2 className="doc-h2">Add via CLI</h2>
        <div className="doc-stack">
          <CodeBlock title="Add Badge via CLI" code={installAddBadgeCommand} />
        </div>

        <h2 className="doc-h2">Component source</h2>
        <div className="doc-stack">
          <CodeBlockWithVariants
            title="Badge"
            variants={[
              { label: "HTML", code: badgeCodeHtml },
              { label: "React", code: badgeCodeReact },
              { label: "Next.js", code: badgeCodeNext },
            ]}
          />
        </div>
      </Container>
    </main>
  );
}
