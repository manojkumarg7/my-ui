"use client";

import { Button } from "@/components/ui";
import { toast } from "@/components/ui";

export function ToastPreview() {
  return (
    <div className="ui-d-flex ui-flex-wrap ui-gap-2">
      <Button
        type="button"
        variant="secondary"
        onClick={() =>
          toast({
            title: "Default",
            description: "Neutral notification.",
          })
        }
      >
        Default
      </Button>
      <Button
        type="button"
        variant="secondary"
        onClick={() =>
          toast({
            title: "Saved",
            description: "Your changes were saved.",
            variant: "success",
          })
        }
      >
        Success
      </Button>
      <Button
        type="button"
        variant="secondary"
        onClick={() =>
          toast({
            title: "Heads up",
            description: "Review before you continue.",
            variant: "warning",
          })
        }
      >
        Warning
      </Button>
      <Button
        type="button"
        variant="secondary"
        onClick={() =>
          toast({
            title: "Something failed",
            description: "Please try again.",
            variant: "error",
          })
        }
      >
        Error
      </Button>
      <Button
        type="button"
        variant="secondary"
        onClick={() =>
          toast({
            title: "Pinned",
            description: "This toast stays until dismissed.",
            duration: 0,
          })
        }
      >
        No auto-dismiss
      </Button>
    </div>
  );
}
