import { Container } from "@/components/ui";
import { CodeBlock } from "@/docs/CodeBlock";
import { installInitCommand, installNotes } from "@/lib/code";

export const metadata = {
  title: "Initialization · my-ui",
  description: "Install the design system with the my-ui CLI",
};

export default function InitializationDocPage() {
  return (
    <main className="ui-py-12">
      <Container>
        <h1 className="doc-title">Initialization</h1>
        <p className="doc-lead">
          Set up CSS variables, utilities, theme helpers, and the theme toggle in your Next.js app. After this step you can
          add components or paste them from these docs.
        </p>

        <h2 className="doc-h2">CLI</h2>
        <p className="doc-lead ui-mb-4" style={{ marginTop: 0 }}>
          Run from your project root. In this repository use{" "}
          <code className="doc-code__inline">npm run my-ui -- init</code>. When the package is published, use{" "}
          <code className="doc-code__inline">npx my-ui init</code>.
        </p>
        <CodeBlock title="Initialize design system" code={installInitCommand} />
        <div className="doc-stack">
          <CodeBlock title="What init creates" code={installNotes} />
        </div>
      </Container>
    </main>
  );
}
