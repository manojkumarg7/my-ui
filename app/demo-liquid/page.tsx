import { LiquidButton, MetalButton } from "@/components/ui";

const UNSPLASH_MOUNTAINS =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80";

export default function DemoLiquidPage() {
  return (
    <div className="ui-container ui-py-12">
      <h1 className="doc-title">Liquid glass &amp; metal buttons</h1>
      <p className="doc-lead">
        Glass effect uses SVG displacement + custom CSS in{" "}
        <code className="doc-code__inline">styles/globals.css</code>. Background
        photo from Unsplash so the glass reads clearly.
      </p>

      <h2 className="doc-h2">Liquid glass</h2>
      <div
        className="ui-demo-liquid"
        style={{ backgroundImage: `url(${UNSPLASH_MOUNTAINS})` }}
      >
        <LiquidButton className="ui-demo-liquid__btn" size="xxl">
          Liquid Glass
        </LiquidButton>
      </div>

      <h2 className="doc-h2">Metal</h2>
      <div className="ui-d-flex ui-gap-4 ui-flex-col" style={{ alignItems: "flex-start" }}>
        <MetalButton variant="default">Metal default</MetalButton>
        <MetalButton variant="primary">Metal primary</MetalButton>
        <MetalButton variant="success">Success</MetalButton>
      </div>
    </div>
  );
}
