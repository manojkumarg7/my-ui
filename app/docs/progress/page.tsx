import Link from "next/link";
import { Container, Progress } from "@/components/ui";
import { CodeBlock } from "@/docs/CodeBlock";
import { CodeBlockWithVariants } from "@/docs/CodeBlockWithVariants";
import { PreviewBlock } from "@/docs/PreviewBlock";
import {
  installAddProgressCommand,
  progressCodeHtml,
  progressCodeNext,
  progressCodeReact,
} from "@/lib/code";

export const metadata = {
  title: "Progress · my-ui",
  description: "Determinate and indeterminate progress bars with semantic variants",
};

export default function ProgressDocPage() {
  return (
    <main className="ui-py-12">
      <Container>
        <h1 className="doc-title">Progress</h1>
        <p className="doc-lead">
          Linear progress using <code className="doc-code__inline">role=&quot;progressbar&quot;</code> with{" "}
          <code className="doc-code__inline">value</code> / <code className="doc-code__inline">max</code>, or{" "}
          <code className="doc-code__inline">indeterminate</code> for a loading animation. Complete{" "}
          <Link href="/docs/initialization" className="doc-inline-link">
            Initialization
          </Link>{" "}
          first, then use the CLI or copy the source below.
        </p>

        <h2 className="doc-h2">Preview</h2>
        <PreviewBlock title="Live">
          <div className="ui-d-flex ui-flex-col ui-gap-4" style={{ width: "100%" }}>
            <Progress value={40} />
            <Progress value={72} variant="success" />
            <Progress value={55} variant="warning" />
            <Progress value={90} variant="error" />
            <Progress indeterminate />
          </div>
        </PreviewBlock>

        <h2 className="doc-h2">Add Progress via CLI</h2>
        <p className="doc-lead ui-mb-4" style={{ marginTop: 0 }}>
          After init and layout theme wiring (see <code className="doc-code__inline">MY_UI_THEME_LAYOUT.md</code> in your
          project), add the Progress component:
        </p>
        <div className="doc-stack">
          <CodeBlock title="Add Progress via CLI" code={installAddProgressCommand} />
        </div>

        <h2 className="doc-h2">Component source</h2>
        <div className="doc-stack">
          <CodeBlockWithVariants
            title="Progress"
            variants={[
              { label: "HTML", code: progressCodeHtml },
              { label: "React", code: progressCodeReact },
              { label: "Next.js", code: progressCodeNext },
            ]}
          />
        </div>
      </Container>
    </main>
  );
}
