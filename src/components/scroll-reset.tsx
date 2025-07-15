"use client";

import { useEffect } from "react";

export default function ScrollReset() {
  useEffect(() => {
    // Remove hash from URL without triggering navigation
    if (window.location.hash) {
      const newUrl = window.location.pathname + window.location.search;
      window.history.replaceState(null, '', newUrl);
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  return null;
}