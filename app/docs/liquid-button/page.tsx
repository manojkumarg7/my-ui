import Link from "next/link";
import { Container, LiquidButton, MetalButton } from "@/components/ui";
import { CodeBlock } from "@/docs/CodeBlock";
import { CodeBlockWithVariants } from "@/docs/CodeBlockWithVariants";
import { PreviewBlock } from "@/docs/PreviewBlock";
import {
  installAddLiquidButtonCommand,
  liquidGlassButtonCodeNext,
  liquidGlassButtonCodeReact,
  liquidGlassInstallNote,
} from "@/lib/code";

const UNSPLASH_MOUNTAINS =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80";

export const metadata = {
  title: "Liquid Button · my-ui",
  description:
    "Liquid glass and metal button effects using custom CSS and SVG filters",
};

export default function LiquidButtonDocPage() {
  return (
    <main className="ui-py-12">
      <Container>
        <h1 className="doc-title">Liquid Button</h1>
        <p className="doc-lead">
          Glass-style and metal-style buttons: SVG displacement filter, layered
          shadows, and theme-aware gradients. Complete{" "}
          <Link href="/docs/initialization" className="doc-inline-link">
            Initialization
          </Link>{" "}
          first, then add via CLI or copy the component and CSS from this repository.
        </p>

        <h2 className="doc-h2">Preview</h2>
        <PreviewBlock title="Live">
          <div
            className="ui-d-flex ui-flex-col ui-gap-6"
            style={{ width: "100%" }}
          >
            <div
              className="ui-demo-liquid"
              style={{ backgroundImage: `url(${UNSPLASH_MOUNTAINS})` }}
            >
              <LiquidButton
                className="ui-demo-liquid__btn"
                size="xxl"
                type="button"
              >
                Liquid Glass
              </LiquidButton>
            </div>
            <div
              className="ui-d-flex ui-flex-col ui-gap-4"
              style={{ alignItems: "flex-start" }}
            >
              <MetalButton variant="default" type="button">
                Metal default
              </MetalButton>
              <MetalButton variant="primary" type="button">
                Metal primary
              </MetalButton>
            </div>
          </div>
        </PreviewBlock>

        <h2 className="doc-h2">Add Liquid Button via CLI</h2>
        <p className="doc-lead ui-mb-4" style={{ marginTop: 0 }}>
          After init and layout theme wiring, run:
        </p>
        <div className="doc-stack">
          <CodeBlock title="Add Liquid Button via CLI" code={installAddLiquidButtonCommand} />
        </div>
        <p className="doc-lead ui-mb-4" style={{ marginTop: 0 }}>
          Re-export <code className="doc-code__inline">LiquidButton</code> and{" "}
          <code className="doc-code__inline">MetalButton</code> from{" "}
          <code className="doc-code__inline">components/ui/index.ts</code> if you use barrel imports (same as other{" "}
          <code className="doc-code__inline">my-ui add</code> components).
        </p>

        <h2 className="doc-h2">Setup note</h2>
        <p className="doc-lead ui-mb-4" style={{ marginTop: 0 }}>
          Manual copy is still supported if you are not using the CLI:
        </p>
        <div className="doc-stack">
          <CodeBlock title="Setup note" code={liquidGlassInstallNote} />
        </div>

        <h2 className="doc-h2">Usage</h2>
        <div className="doc-stack">
          <CodeBlockWithVariants
            title="Liquid Button"
            variants={[
              { label: "React", code: liquidGlassButtonCodeReact },
              { label: "Next.js", code: liquidGlassButtonCodeNext },
            ]}
          />
        </div>
      </Container>
    </main>
  );
}
