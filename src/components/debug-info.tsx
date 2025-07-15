"use client";

import { usePortfolioVariant } from "@/contexts/portfolio-variant-context";

export default function DebugInfo() {
  const variant = usePortfolioVariant();
  
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-2 text-xs rounded z-50">
      <div>Variant: {variant}</div>
      <div>Host: {typeof window !== 'undefined' ? window.location.hostname : 'SSR'}</div>
      <div>URL: {typeof window !== 'undefined' ? window.location.href : 'SSR'}</div>
    </div>
  );
}