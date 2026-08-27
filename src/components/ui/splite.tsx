'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Boxes } from 'lucide-react'
import { SplineErrorBoundary } from './spline-error-boundary'

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
})

interface SplineSceneProps {
  scene: string
  className?: string
}

function SplineFallback({ className }: { className?: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_50%_40%,rgb(201_169_97_/_0.16),transparent_65%)] ${className ?? ''}`}
    >
      <Boxes className="h-8 w-8 text-gold" strokeWidth={1.5} aria-hidden />
      <span className="font-mono text-[11px] tracking-[0.02em] text-body-faint">
        3D-Vorschau derzeit nicht verfügbar
      </span>
    </div>
  )
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <SplineErrorBoundary fallback={<SplineFallback className={className} />}>
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <span className="loader"></span>
          </div>
        }
      >
        <Spline
          scene={scene}
          className={className}
        />
        <span className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[11px] tracking-[0.02em] text-body-faint">
          Ziehen, um zu drehen
        </span>
      </Suspense>
    </SplineErrorBoundary>
  )
}
