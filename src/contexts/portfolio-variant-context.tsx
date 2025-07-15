'use client'

import { createContext, useContext } from 'react'

export type PortfolioVariant = 'general' | 'swe' | 'csr'

const PortfolioVariantContext = createContext<PortfolioVariant>('general')

export function PortfolioVariantProvider({
  children,
  variant,
}: {
  children: React.ReactNode
  variant: PortfolioVariant
}) {
  return (
    <PortfolioVariantContext.Provider value={variant}>
      {children}
    </PortfolioVariantContext.Provider>
  )
}

export function usePortfolioVariant() {
  return useContext(PortfolioVariantContext)
}