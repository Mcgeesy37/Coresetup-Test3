"use client";

import { Component, type ReactNode } from "react";

interface SplineErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface SplineErrorBoundaryState {
  hasError: boolean;
}

/**
 * The Spline runtime fetches its scene file from Spline's own CDN
 * (prod.spline.design) at runtime. If that request fails - offline,
 * blocked by a firewall/ad-blocker, or a Spline outage - the
 * component throws instead of failing silently. Without this
 * boundary that error bubbles all the way to Next's root error
 * handler and takes down the entire page, not just the hero visual.
 * This keeps the failure contained to the card and shows a static
 * on-brand fallback instead.
 */
export class SplineErrorBoundary extends Component<
  SplineErrorBoundaryProps,
  SplineErrorBoundaryState
> {
  constructor(props: SplineErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.warn("3D scene failed to load, showing fallback.", error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
