import type { NextConfig } from "next";

// GitHub Pages serves this repo at https://mcgeesy37.github.io/Coresetup-Test3/,
// i.e. under a "/Coresetup-Test3" subpath rather than at the domain root. Every
// internal link, and every asset Next.js emits, has to be prefixed with that
// subpath or it 404s once deployed - basePath/assetPrefix handle that
// automatically for next/link, next/image, and the framework's own JS/CSS.
//
// If this project ever moves to its own domain (coresetup.studio) or to a
// host that serves it from the root (Vercel, Netlify, a custom server),
// delete basePath/assetPrefix - they should only be set while deploying to
// <username>.github.io/<repo>/.
const repoBasePath = "/Coresetup-Test3";

const nextConfig: NextConfig = {
  // GitHub Pages only serves static files - it can't run the Next.js
  // server - so the app has to be exported as plain HTML/CSS/JS.
  output: "export",
  basePath: repoBasePath,
  assetPrefix: `${repoBasePath}/`,
  // Static export emits <route>/index.html rather than <route>.html, which
  // is what GitHub Pages (and most static hosts) expect for clean URLs.
  trailingSlash: true,
  images: {
    // next/image's on-demand optimization endpoint needs a server too;
    // static export requires opting every image out of it.
    unoptimized: true,
  },
};

export default nextConfig;
