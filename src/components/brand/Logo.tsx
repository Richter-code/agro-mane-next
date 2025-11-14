import * as React from 'react'
import Link from 'next/link'
import { brand } from '@/lib/brand'

export type LogoProps = {
  variant?: 'icon' | 'horizontal' | 'mono'
  withText?: boolean
  className?: string
  href?: string
  'aria-label'?: string
}

/**
 * Componente de Logo centralizado. Substitua as imagens quando tiver SVG oficial.
 */
export function Logo({ variant = 'icon', withText = false, className = '', href = '/', ...rest }: LogoProps){
  const content = (
    <span className={`inline-flex items-center gap-2 ${className}`.trim()}>
      {/* Placeholder simples - ideal trocar por <Image /> com SVG real */}
      <span
        className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-brandDark to-brand text-brandLight text-xl font-bold shadow-inner"
        aria-hidden="true"
      >
        🌿
      </span>
      { (withText || variant !== 'icon') && (
        <span className="font-display font-bold tracking-tight text-sm sm:text-base">
          {brand.name}
        </span>
      ) }
    </span>
  )

  return <Link href={href as any} aria-label={rest['aria-label'] || brand.name}>{content}</Link>
}
