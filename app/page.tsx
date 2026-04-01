import Link from "next/link";
import {
  Hero,
  Section,
  FeatureCard,
  CodeSnippet,
} from "@/components/home";
import { Button, Badge, ThemeToggle } from "@/components/ui";

const HERO_CODE = `npm exec -- my-ui init`;

const BUTTON_CODE = `<Button variant="primary">
  Click me
</Button>`;

const CARD_CODE = `<div className="card">
  <Badge variant="success">New</Badge>
  <h4>Card Title</h4>
  <span className="ui-text-muted">
    Card content with design tokens.
  </span>
</div>`;

/** Simple card-style preview using design tokens */
function ExampleCard() {
  return (
    <div
      className="home-example__preview"
      style={{ flexDirection: "column", alignItems: "flex-start" }}
    >
      <Badge variant="success">New</Badge>
      <strong style={{ margin: 0, fontSize: "0.9375rem" }}>Card Title</strong>
      <span className="ui-text-muted" style={{ fontSize: "0.875rem" }}>
        Card content with design tokens.
      </span>
    </div>
  );
}

const FEATURES = [
  {
    title: "Copy-Paste Components",
    description: "Drop components into your project. No package lock-in, full control over the source.",
    icon: "◇",
  },
  {
    title: "CLI Support",
    description: "Run npm exec -- my-ui init to scaffold styles, theme, and components in seconds.",
    icon: "⌘",
  },
  {
    title: "Dark/Light Theme",
    description: "Built-in theme toggle with system preference detection. Uses CSS variables.",
    icon: "◐",
  },
  {
    title: "No Dependencies",
    description: "Just Next.js and React. No UI libraries — copy what you need.",
    icon: "◆",
  },
];

export default function Home() {
  return (
    <div className="ui-min-h-screen ui-d-flex ui-flex-col">
      <header className="home-header">
        <Link href="/" className="home-header__logo">
          my-ui
        </Link>
        <nav className="home-header__nav">
          <ThemeToggle />
        </nav>
      </header>

      <main className="ui-flex-1">
        <Hero
          heading="Build UI Faster with My-UI"
          description="A minimal, copy-paste UI framework for Next.js. Components, design tokens, and CLI — zero dependencies."
          codeSnippet={HERO_CODE}
        />

        <Section id="features">
          <h2 className="home-section-title">Why My-UI</h2>
          <p className="home-section-lead">
            Get started in minutes. Copy components, run the CLI, or browse the docs.
          </p>
          <div className="home-features">
            {FEATURES.map((f) => (
              <FeatureCard
                key={f.title}
                title={f.title}
                description={f.description}
                icon={f.icon}
              />
            ))}
          </div>
        </Section>

        <Section id="examples">
          <h2 className="home-section-title">Example Components</h2>
          <p className="home-section-lead">
            Live previews with copy-paste ready code. All components use design tokens.
          </p>
          <div className="home-example">
            <div>
              <p className="home-example__label">Button</p>
              <div className="home-example__preview">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
              </div>
              <CodeSnippet code={BUTTON_CODE} label="tsx" className="ui-mt-4" />
            </div>
            <div>
              <p className="home-example__label">Card</p>
              <ExampleCard />
              <CodeSnippet code={CARD_CODE} label="tsx" className="ui-mt-4" />
            </div>
          </div>
        </Section>

        <Section id="installation">
          <h2 className="home-section-title">Quick Start</h2>
          <p className="home-section-lead">
            Initialize styles, theme, and components in your Next.js project.
          </p>
          <div className="home-install">
            <CodeSnippet code={HERO_CODE} />
          </div>
        </Section>

        <footer className="home-footer">
          <p className="home-footer__text">
            <Link href="/docs/initialization" className="home-footer__link">
              Documentation
            </Link>
            {" · "}
            <a
              href="https://github.com/manojkumarg7/my-ui"
              className="home-footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
