import Link from "next/link";
import { Button, Container } from "@/components/ui";
import { CodeBlock } from "@/docs/CodeBlock";
import { CodeBlockWithVariants } from "@/docs/CodeBlockWithVariants";
import { PreviewBlock } from "@/docs/PreviewBlock";
import {
  buttonCodeHtml,
  buttonCodeNext,
  buttonCodeReact,
  installAddButtonCommand,
} from "@/lib/code";

export const metadata = {
  title: "Button · my-ui",
  description: "Primary and secondary button variants",
};

export default function ButtonDocPage() {
  return (
    <main className="ui-py-12">
      <Container>
        <h1 className="doc-title">Button</h1>
        <p className="doc-lead">
          Primary and secondary button styles driven by CSS variables.           Complete{" "}
          <Link href="/docs/initialization" className="doc-inline-link">
            Initialization
          </Link>{" "}
          first, then use the CLI or copy the source below.
        </p>

        <h2 className="doc-h2">Preview</h2>
        <PreviewBlock title="Live">
          <Button type="button">Primary</Button>
          <Button type="button" variant="secondary">
            Secondary
          </Button>
        </PreviewBlock>

        <h2 className="doc-h2">Add Button via CLI</h2>
        <p className="doc-lead ui-mb-4" style={{ marginTop: 0 }}>
          After init and layout theme wiring (see <code className="doc-code__inline">MY_UI_THEME_LAYOUT.md</code> in your
          project), add the Button component:
        </p>
        <div className="doc-stack">
          <CodeBlock title="Add Button via CLI" code={installAddButtonCommand} />
        </div>

        <h2 className="doc-h2">Component source</h2>
        <div className="doc-stack">
          <CodeBlockWithVariants
            title="Button"
            variants={[
              { label: "HTML", code: buttonCodeHtml },
              { label: "React", code: buttonCodeReact },
              { label: "Next.js", code: buttonCodeNext },
            ]}
          />
        </div>
      </Container>
    </main>
  );
}
