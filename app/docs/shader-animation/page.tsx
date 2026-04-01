import Link from "next/link";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";
import { CodeBlock } from "@/docs/CodeBlock";
import { PreviewBlock } from "@/docs/PreviewBlock";
import { Container } from "@/components/ui";
import {
  shaderAnimationCodeNext,
  shaderAnimationInstallNote,
} from "@/lib/code";

export const metadata = {
  title: "Shader Animation · my-ui",
  description:
    "Full-viewport WebGL aurora shader background powered by Three.js",
};

export default function ShaderAnimationDocPage() {
  return (
    <main className="ui-py-12">
      <Container>
        <h1 className="doc-title">Shader Animation</h1>
        <p className="doc-lead">
          A real-time animated fragment shader (aurora-style) as a background layer.
          It depends only on{" "}
          <code className="doc-code__inline">three</code> and React. Complete{" "}
          <Link href="/docs/initialization" className="doc-inline-link">
            Initialization
          </Link>{" "}
          first, then copy the component from this repo and install the dependency
          below. For a full-screen preview, open{" "}
          <Link href="/demo-shader" className="doc-inline-link">
            the demo page
          </Link>
          .
        </p>

        <h2 className="doc-h2">Preview</h2>
        <PreviewBlock title="Live (cropped)">
          <div
            className="ui-w-full"
            style={{ borderRadius: "var(--ui-radius-lg)", overflow: "hidden" }}
          >
            <AnimatedShaderBackground
              style={{ minHeight: "min(22rem, 50vh)" }}
            />
          </div>
        </PreviewBlock>

        <h2 className="doc-h2">Setup</h2>
        <div className="doc-stack">
          <CodeBlock title="Setup steps" code={shaderAnimationInstallNote} />
        </div>

        <h2 className="doc-h2">Usage</h2>
        <div className="doc-stack">
          <CodeBlock title="Next.js" code={shaderAnimationCodeNext} />
        </div>
      </Container>
    </main>
  );
}
