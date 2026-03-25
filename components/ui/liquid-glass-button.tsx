"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type LiquidButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

export type LiquidButtonSize =
  | "default"
  | "sm"
  | "lg"
  | "xl"
  | "xxl"
  | "icon";

const LIQUID_VARIANT: Record<LiquidButtonVariant, string> = {
  default: "ui-liquid-btn--variant-default",
  destructive: "ui-liquid-btn--variant-destructive",
  outline: "ui-liquid-btn--variant-outline",
  secondary: "ui-liquid-btn--variant-secondary",
  ghost: "ui-liquid-btn--variant-ghost",
  link: "ui-liquid-btn--variant-link",
};

const LIQUID_SIZE: Record<LiquidButtonSize, string> = {
  default: "ui-liquid-btn--size-default",
  sm: "ui-liquid-btn--size-sm",
  lg: "ui-liquid-btn--size-lg",
  xl: "ui-liquid-btn--size-xl",
  xxl: "ui-liquid-btn--size-xxl",
  icon: "ui-liquid-btn--size-icon",
};

export type LiquidButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: LiquidButtonVariant;
  size?: LiquidButtonSize;
};

export function LiquidButton({
  className,
  variant = "default",
  size = "default",
  type = "button",
  children,
  ...props
}: LiquidButtonProps) {
  const rawId = React.useId();
  const filterId = `liquid-glass-${rawId.replace(/[^a-zA-Z0-9_-]/g, "")}`;

  return (
    <button
      type={type}
      data-slot="button"
      className={cn(
        "ui-liquid-btn",
        LIQUID_VARIANT[variant],
        LIQUID_SIZE[size],
        className,
      )}
      {...props}
    >
      <span className="ui-liquid-btn__shadow" aria-hidden />
      <span
        className="ui-liquid-btn__backdrop"
        style={{ backdropFilter: `url("#${filterId}")` }}
        aria-hidden
      />
      <span className="ui-liquid-btn__label">{children}</span>
      <GlassFilter id={filterId} />
    </button>
  );
}

function GlassFilter({ id }: { id: string }) {
  return (
    <svg className="ui-liquid-btn__filter-defs" aria-hidden>
      <defs>
        <filter
          id={id}
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05 0.05"
            numOctaves={1}
            seed="1"
            result="turbulence"
          />
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="70"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />
          <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

/* —— Metal button —— */

export type MetalButtonColorVariant =
  | "default"
  | "primary"
  | "success"
  | "error"
  | "gold"
  | "bronze";

export type MetalButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: MetalButtonColorVariant;
};

const METAL_OUTER: Record<MetalButtonColorVariant, string> = {
  default: "ui-metal-btn--outer-default",
  primary: "ui-metal-btn--outer-primary",
  success: "ui-metal-btn--outer-success",
  error: "ui-metal-btn--outer-error",
  gold: "ui-metal-btn--outer-gold",
  bronze: "ui-metal-btn--outer-bronze",
};

const METAL_INNER: Record<MetalButtonColorVariant, string> = {
  default: "ui-metal-btn__inner--default",
  primary: "ui-metal-btn__inner--primary",
  success: "ui-metal-btn__inner--success",
  error: "ui-metal-btn__inner--error",
  gold: "ui-metal-btn__inner--gold",
  bronze: "ui-metal-btn__inner--bronze",
};

const METAL_FACE: Record<MetalButtonColorVariant, string> = {
  default: "ui-metal-btn__face--default",
  primary: "ui-metal-btn__face--primary",
  success: "ui-metal-btn__face--success",
  error: "ui-metal-btn__face--error",
  gold: "ui-metal-btn__face--gold",
  bronze: "ui-metal-btn__face--bronze",
};

const METAL_TEXT: Record<MetalButtonColorVariant, string> = {
  default: "ui-metal-btn__text--default",
  primary: "ui-metal-btn__text--primary",
  success: "ui-metal-btn__text--success",
  error: "ui-metal-btn__text--error",
  gold: "ui-metal-btn__text--gold",
  bronze: "ui-metal-btn__text--bronze",
};

const METAL_SHADOW: Record<MetalButtonColorVariant, string> = {
  default: "ui-metal-btn__text-shadow--default",
  primary: "ui-metal-btn__text-shadow--primary",
  success: "ui-metal-btn__text-shadow--success",
  error: "ui-metal-btn__text-shadow--error",
  gold: "ui-metal-btn__text-shadow--gold",
  bronze: "ui-metal-btn__text-shadow--bronze",
};

function metalButtonStyles(
  variant: MetalButtonColorVariant,
  isPressed: boolean,
  isHovered: boolean,
  isTouchDevice: boolean,
) {
  const transitionStyle = "all 250ms cubic-bezier(0.1, 0.4, 0.2, 1)";

  return {
    wrapperStyle: {
      transform: isPressed
        ? "translateY(2.5px) scale(0.99)"
        : "translateY(0) scale(1)",
      boxShadow: isPressed
        ? "0 1px 2px rgba(0, 0, 0, 0.15)"
        : isHovered && !isTouchDevice
          ? "0 4px 12px rgba(0, 0, 0, 0.12)"
          : "0 3px 8px rgba(0, 0, 0, 0.08)",
      transition: transitionStyle,
      transformOrigin: "center center",
    } as React.CSSProperties,
    innerStyle: {
      transition: transitionStyle,
      transformOrigin: "center center",
      filter:
        isHovered && !isPressed && !isTouchDevice ? "brightness(1.05)" : "none",
    } as React.CSSProperties,
    buttonStyle: {
      transform: isPressed ? "scale(0.97)" : "scale(1)",
      transition: transitionStyle,
      transformOrigin: "center center",
      filter:
        isHovered && !isPressed && !isTouchDevice ? "brightness(1.02)" : "none",
    } as React.CSSProperties,
  };
}

function ShineEffect({ isPressed }: { isPressed: boolean }) {
  return (
    <div
      className={cn(
        "ui-metal-btn__shine",
        isPressed ? "ui-metal-btn__shine--pressed" : "ui-metal-btn__shine--idle",
      )}
    >
      <div className="ui-metal-btn__shine-gradient" />
    </div>
  );
}

export const MetalButton = React.forwardRef<HTMLButtonElement, MetalButtonProps>(
  ({ children, className, variant = "default", type = "button", ...props }, ref) => {
    const [isPressed, setIsPressed] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);
    const [isTouchDevice, setIsTouchDevice] = React.useState(false);

    React.useEffect(() => {
      setIsTouchDevice(
        typeof window !== "undefined" &&
          ("ontouchstart" in window || navigator.maxTouchPoints > 0),
      );
    }, []);

    const buttonText = children ?? "Button";
    const styles = metalButtonStyles(variant, isPressed, isHovered, isTouchDevice);

    const handleInternalMouseDown = () => setIsPressed(true);
    const handleInternalMouseUp = () => setIsPressed(false);
    const handleInternalMouseLeave = () => {
      setIsPressed(false);
      setIsHovered(false);
    };
    const handleInternalMouseEnter = () => {
      if (!isTouchDevice) setIsHovered(true);
    };
    const handleInternalTouchStart = () => setIsPressed(true);
    const handleInternalTouchEnd = () => setIsPressed(false);
    const handleInternalTouchCancel = () => setIsPressed(false);

    return (
      <div
        className={cn("ui-metal-btn", METAL_OUTER[variant])}
        style={styles.wrapperStyle}
      >
        <div
          className={cn("ui-metal-btn__inner", METAL_INNER[variant])}
          style={styles.innerStyle}
          aria-hidden
        />
        <button
          ref={ref}
          type={type}
          className={cn(
            "ui-metal-btn__face",
            METAL_FACE[variant],
            METAL_TEXT[variant],
            METAL_SHADOW[variant],
            className,
          )}
          style={styles.buttonStyle}
          {...props}
          onMouseDown={handleInternalMouseDown}
          onMouseUp={handleInternalMouseUp}
          onMouseLeave={handleInternalMouseLeave}
          onMouseEnter={handleInternalMouseEnter}
          onTouchStart={handleInternalTouchStart}
          onTouchEnd={handleInternalTouchEnd}
          onTouchCancel={handleInternalTouchCancel}
        >
          <ShineEffect isPressed={isPressed} />
          {buttonText}
          {isHovered && !isPressed && !isTouchDevice && (
            <div className="ui-metal-btn__hover-sheen" aria-hidden />
          )}
        </button>
      </div>
    );
  },
);

MetalButton.displayName = "MetalButton";
