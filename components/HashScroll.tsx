"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function HashScrollInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    // delay helps when page content is still mounting
    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }, [pathname, searchParams]);

  return null;
}

export default function HashScroll() {
  return (
    <Suspense fallback={null}>
      <HashScrollInner />
    </Suspense>
  );
}
