import type { MetadataRoute } from "next";

// Required for `output: "export"` (static export for GitHub Pages) - without
// this, `next build` errors because it can't tell this route has no
// per-request dynamic data and is safe to prerender as a static file.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://coresetup.studio/sitemap.xml",
  };
}
