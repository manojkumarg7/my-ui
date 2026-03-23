import Link from "next/link";
import { Alert, Container } from "@/components/ui";
import { CodeBlock } from "@/docs/CodeBlock";
import { CodeBlockWithVariants } from "@/docs/CodeBlockWithVariants";
import { PreviewBlock } from "@/docs/PreviewBlock";
import {
  alertCodeHtml,
  alertCodeNext,
  alertCodeReact,
  installAddAlertCommand,
} from "@/lib/code";

export const metadata = {
  title: "Alert · my-ui",
  description: "Default, success, warning, and error alert variants",
};

export default function AlertDocPage() {
  return (
    <main className="ui-py-12">
      <Container>
        <h1 className="doc-title">Alert</h1>
        <p className="doc-lead">
          Callout-style alerts for feedback and notices. Variants: default, success, warning, and error. Complete{" "}
          <Link href="/docs/initialization" className="doc-inline-link">
            Initialization
          </Link>{" "}
          first, then use the CLI or copy the source below.
        </p>

        <h2 className="doc-h2">Preview</h2>
        <PreviewBlock title="Live">
          <div className="ui-d-flex ui-flex-col ui-gap-4" style={{ width: "100%" }}>
            <Alert variant="default">A default alert with neutral styling.</Alert>
            <Alert variant="success">Operation completed successfully.</Alert>
            <Alert variant="warning">Please review this before continuing.</Alert>
            <Alert variant="error">Something went wrong. Please try again.</Alert>
          </div>
        </PreviewBlock>

        <h2 className="doc-h2">Add Alert via CLI</h2>
        <p className="doc-lead ui-mb-4" style={{ marginTop: 0 }}>
          After init and layout theme wiring (see <code className="doc-code__inline">MY_UI_THEME_LAYOUT.md</code> in your
          project), add the Alert component:
        </p>
        <div className="doc-stack">
          <CodeBlock title="Add Alert via CLI" code={installAddAlertCommand} />
        </div>

        <h2 className="doc-h2">Component source</h2>
        <div className="doc-stack">
          <CodeBlockWithVariants
            title="Alert"
            variants={[
              { label: "HTML", code: alertCodeHtml },
              { label: "React", code: alertCodeReact },
              { label: "Next.js", code: alertCodeNext },
            ]}
          />
        </div>
      </Container>
    </main>
  );
}
