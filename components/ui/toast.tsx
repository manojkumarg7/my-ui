"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

export type ToastVariant = "default" | "success" | "warning" | "error";

export type ToastInput = {
  title?: string;
  description?: string;
  variant?: ToastVariant;
  /** Auto-dismiss after ms. Set `0` to disable. Default 5000. */
  duration?: number;
};

type ToastRecord = ToastInput & { id: string };

const DEFAULT_DURATION = 5000;

type ToastContextValue = {
  toast: (input: ToastInput) => string;
  dismiss: (id: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

let enqueueRef: ((input: ToastInput) => string) | null = null;

/** Show a toast. Requires `<ToastProvider>` above in the tree. */
export function toast(input: ToastInput) {
  if (!enqueueRef) {
    if (typeof window !== "undefined") {
      console.warn("[my-ui] toast: ToastProvider is not mounted.");
    }
    return "";
  }
  return enqueueRef(input);
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return ctx;
}

function ToastList({
  toasts,
  onDismiss,
}: {
  toasts: ToastRecord[];
  onDismiss: (id: string) => void;
}) {
  return (
    <div
      className="ui-toast-region"
      aria-label="Notifications"
      aria-live="polite"
    >
      {toasts.map((t) => {
        const variant = t.variant ?? "default";
        return (
          <div
            key={t.id}
            role="status"
            className={cn(
              "ui-toast",
              variant === "default" && "ui-toast--default",
              variant === "success" && "ui-toast--success",
              variant === "warning" && "ui-toast--warning",
              variant === "error" && "ui-toast--error",
            )}
          >
            <div className="ui-toast__row">
              <div className="ui-toast__body">
                {t.title ? (
                  <div className="ui-toast__title">{t.title}</div>
                ) : null}
                {t.description ? (
                  <div className="ui-toast__desc">{t.description}</div>
                ) : null}
              </div>
              <button
                type="button"
                className="ui-toast__close"
                onClick={() => onDismiss(t.id)}
                aria-label="Dismiss notification"
              >
                ×
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastRecord[]>([]);
  const timers = useRef<Map<string, ReturnType<typeof setTimeout>>>(
    new Map(),
  );

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    const tid = timers.current.get(id);
    if (tid) clearTimeout(tid);
    timers.current.delete(id);
  }, []);

  const addToast = useCallback(
    (input: ToastInput) => {
      const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
      const duration = input.duration ?? DEFAULT_DURATION;
      const item: ToastRecord = { id, variant: "default", ...input };
      setToasts((prev) => [...prev, item]);
      if (duration > 0) {
        const tid = setTimeout(() => dismiss(id), duration);
        timers.current.set(id, tid);
      }
      return id;
    },
    [dismiss],
  );

  useEffect(() => {
    enqueueRef = addToast;
    return () => {
      enqueueRef = null;
    };
  }, [addToast]);

  useEffect(() => {
    return () => {
      timers.current.forEach((tid) => clearTimeout(tid));
      timers.current.clear();
    };
  }, []);

  const value = useMemo(
    () => ({ toast: addToast, dismiss }),
    [addToast, dismiss],
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastList toasts={toasts} onDismiss={dismiss} />
    </ToastContext.Provider>
  );
}
