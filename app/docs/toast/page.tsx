import Link from "next/link";
import { Container } from "@/components/ui";
import { CodeBlock } from "@/docs/CodeBlock";
import { CodeBlockWithVariants } from "@/docs/CodeBlockWithVariants";
import { PreviewBlock } from "@/docs/PreviewBlock";
import {
  installAddToastCommand,
  toastCodeHtml,
  toastCodeNext,
  toastCodeReact,
} from "@/lib/code";
import { ToastPreview } from "./toast-preview";

export const metadata = {
  title: "Toast · my-ui",
  description: "Stacked notifications with variants, auto-dismiss, and dismiss control",
};

export default function ToastDocPage() {
  return (
    <main className="ui-py-12">
      <Container>
        <h1 className="doc-title">Toast</h1>
        <p className="doc-lead">
          Lightweight toasts via <code className="doc-code__inline">toast()</code> or{" "}
          <code className="doc-code__inline">useToast()</code>. Wrap your app with{" "}
          <code className="doc-code__inline">ToastProvider</code> (see Next.js example below). Complete{" "}
          <Link href="/docs/initialization" className="doc-inline-link">
            Initialization
          </Link>{" "}
          first, then use the CLI or copy the source below.
        </p>

        <h2 className="doc-h2">Preview</h2>
        <p className="doc-lead ui-mb-4" style={{ marginTop: 0 }}>
          Toasts appear at the bottom-right of the viewport.
        </p>
        <PreviewBlock title="Live">
          <ToastPreview />
        </PreviewBlock>

        <h2 className="doc-h2">Add Toast via CLI</h2>
        <p className="doc-lead ui-mb-4" style={{ marginTop: 0 }}>
          After init and layout theme wiring, add the toast module and wire{" "}
          <code className="doc-code__inline">ToastProvider</code> in your root layout (or a client{" "}
          <code className="doc-code__inline">providers.tsx</code>):
        </p>
        <div className="doc-stack">
          <CodeBlock title="Add Toast via CLI" code={installAddToastCommand} />
        </div>

        <h2 className="doc-h2">Component source</h2>
        <div className="doc-stack">
          <CodeBlockWithVariants
            title="Toast"
            variants={[
              { label: "HTML", code: toastCodeHtml },
              { label: "React", code: toastCodeReact },
              { label: "Next.js", code: toastCodeNext },
            ]}
          />
        </div>
      </Container>
    </main>
  );
}
