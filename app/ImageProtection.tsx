
"use client";

import { useEffect } from "react";

export default function ImageProtection() {
  useEffect(() => {
    const isImage = (target: EventTarget | null) =>
      target instanceof Element &&
      Boolean(target.closest("img"));

    const preventContextMenu = (event: MouseEvent) => {
      if (isImage(event.target)) {
        event.preventDefault();
      }
    };

    const preventDrag = (event: DragEvent) => {
      if (isImage(event.target)) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", preventContextMenu);
    document.addEventListener("dragstart", preventDrag);

    return () => {
      document.removeEventListener("contextmenu", preventContextMenu);
      document.removeEventListener("dragstart", preventDrag);
    };
  }, []);

  return null;
}
