import Link from "next/link";
import { Collapse, Container } from "@/components/ui";
import { CodeBlock } from "@/docs/CodeBlock";
import { CodeBlockWithVariants } from "@/docs/CodeBlockWithVariants";
import { PreviewBlock } from "@/docs/PreviewBlock";
import {
  collapseCodeHtml,
  collapseCodeNext,
  collapseCodeReact,
  installAddCollapseCommand,
} from "@/lib/code";

export const metadata = {
  title: "Collapse · my-ui",
  description: "Expandable/collapsible content panel with animated toggle",
};

export default function CollapseDocPage() {
  return (
    <main className="ui-py-12">
      <Container>
        <h1 className="doc-title">Collapse</h1>
        <p className="doc-lead">
          Expandable and collapsible content panel. Supports controlled and uncontrolled modes. Complete{" "}
          <Link href="/docs/initialization" className="doc-inline-link">
            Initialization
          </Link>{" "}
          first, then use the CLI or copy the source below.
        </p>

        <h2 className="doc-h2">Preview</h2>
        <PreviewBlock title="Live">
          <div className="ui-d-flex ui-flex-col ui-gap-4" style={{ width: "100%" }}>
            <Collapse trigger="Section 1 (default open)" defaultOpen>
              <p className="ui-m-0">Content inside the first collapse. Can include any elements.</p>
            </Collapse>
            <Collapse trigger="Section 2">
              <p className="ui-m-0">This content is hidden until you click the trigger.</p>
            </Collapse>
            <Collapse trigger="Section 3">
              <p className="ui-m-0">Each collapse works independently.</p>
            </Collapse>
          </div>
        </PreviewBlock>

        <h2 className="doc-h2">Add Collapse via CLI</h2>
        <p className="doc-lead ui-mb-4" style={{ marginTop: 0 }}>
          After init and layout theme wiring (see <code className="doc-code__inline">MY_UI_THEME_LAYOUT.md</code> in your
          project), add the Collapse component:
        </p>
        <div className="doc-stack">
          <CodeBlock title="Add Collapse via CLI" code={installAddCollapseCommand} />
        </div>

        <h2 className="doc-h2">Component source</h2>
        <div className="doc-stack">
          <CodeBlockWithVariants
            title="Collapse"
            variants={[
              { label: "HTML", code: collapseCodeHtml },
              { label: "React", code: collapseCodeReact },
              { label: "Next.js", code: collapseCodeNext },
            ]}
          />
        </div>
      </Container>
    </main>
  );
}
