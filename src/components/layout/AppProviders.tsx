"use client";

import type { ReactNode } from 'react';

// This component can be used to wrap any global context providers, e.g., ThemeProvider, QueryClientProvider.
// For now, it's a simple pass-through, but it's good practice to have it for future extensions.

export function AppProviders({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
