'use client'

import { createContext, useContext } from 'react'

export type PortfolioVariant = 'main' | 'csr'

const PortfolioVariantContext = createContext<PortfolioVariant>('main')

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