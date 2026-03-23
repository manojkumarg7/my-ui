import Link from "next/link";
import { Container } from "@/components/ui";

export default function Home() {
  return (
    <div className="ui-min-h-screen ui-d-flex ui-flex-col ui-items-center ui-justify-center">
      <Container className="ui-text-center">
        <h1 className="ui-m-0 ui-mb-4" style={{ fontSize: "1.75rem", fontWeight: 600 }}>
          my-ui
        </h1>
        <p className="ui-text-muted ui-mb-4 ui-m-0">
          Minimal UI foundation — components, tokens, and documentation.
        </p>
        <Link href="/docs" className="ui-btn ui-btn--primary" style={{ display: "inline-flex" }}>
          Open documentation
        </Link>
      </Container>
    </div>
  );
}
