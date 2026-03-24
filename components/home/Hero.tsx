import Link from "next/link";
import { CodeSnippet } from "./CodeSnippet";

export type HeroProps = {
  heading?: string;
  description?: string;
  /** Optional code to show in hero (e.g. install or usage snippet) */
  codeSnippet?: string;
};

const DEFAULT_HEADING = "Build UI Faster with My-UI";
const DEFAULT_DESCRIPTION =
  "A minimal, copy-paste UI framework for Next.js. Components, design tokens, and CLI — zero dependencies.";

export function Hero({
  heading = DEFAULT_HEADING,
  description = DEFAULT_DESCRIPTION,
  codeSnippet,
}: HeroProps) {
  return (
    <section className="home-hero">
      <div className="home-hero__inner">
        <div className="home-hero__content">
          <h1 className="home-hero__heading">{heading}</h1>
          <p className="home-hero__description">{description}</p>
          <div className="home-hero__actions">
            <Link href="/docs/initialization" className="home-hero__btn home-hero__btn--primary">
              Get Started
            </Link>
            <Link href="/docs" className="home-hero__btn home-hero__btn--secondary">
              View Components
            </Link>
          </div>
        </div>
        {codeSnippet ? (
          <div className="home-hero__preview">
            <CodeSnippet code={codeSnippet} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
