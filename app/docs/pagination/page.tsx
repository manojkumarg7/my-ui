import Link from "next/link";
import { Container } from "@/components/ui";
import { CodeBlock } from "@/docs/CodeBlock";
import { CodeBlockWithVariants } from "@/docs/CodeBlockWithVariants";
import { PreviewBlock } from "@/docs/PreviewBlock";
import {
  installAddPaginationCommand,
  paginationCodeHtml,
  paginationCodeNext,
  paginationCodeReact,
} from "@/lib/code";
import { PaginationPreview } from "./pagination-preview";

export const metadata = {
  title: "Pagination · my-ui",
  description: "Accessible page navigation with previous, next, and numbered pages",
};

export default function PaginationDocPage() {
  return (
    <main className="ui-py-12">
      <Container>
        <h1 className="doc-title">Pagination</h1>
        <p className="doc-lead">
          Previous / next controls with a compact page list (ellipsis when there are many pages). Pass{" "}
          <code className="doc-code__inline">currentPage</code>, <code className="doc-code__inline">totalPages</code>, and{" "}
          <code className="doc-code__inline">onPageChange</code> from your state or URL. Complete{" "}
          <Link href="/docs/initialization" className="doc-inline-link">
            Initialization
          </Link>{" "}
          first, then use the CLI or copy the source below.
        </p>

        <h2 className="doc-h2">Preview</h2>
        <PreviewBlock title="Live">
          <div className="ui-d-flex ui-flex-col ui-gap-4" style={{ width: "100%" }}>
            <PaginationPreview />
          </div>
        </PreviewBlock>

        <h2 className="doc-h2">Add Pagination via CLI</h2>
        <p className="doc-lead ui-mb-4" style={{ marginTop: 0 }}>
          After init and layout theme wiring (see <code className="doc-code__inline">MY_UI_THEME_LAYOUT.md</code> in your
          project), add the Pagination component:
        </p>
        <div className="doc-stack">
          <CodeBlock title="Add Pagination via CLI" code={installAddPaginationCommand} />
        </div>

        <h2 className="doc-h2">Component source</h2>
        <div className="doc-stack">
          <CodeBlockWithVariants
            title="Pagination"
            variants={[
              { label: "HTML", code: paginationCodeHtml },
              { label: "React", code: paginationCodeReact },
              { label: "Next.js", code: paginationCodeNext },
            ]}
          />
        </div>
      </Container>
    </main>
  );
}
