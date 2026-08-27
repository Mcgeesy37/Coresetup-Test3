import type { MetadataRoute } from "next";

// Required for `output: "export"` (static export for GitHub Pages) - see
// the same note in robots.ts.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://coresetup.studio/",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://coresetup.studio/impressum",
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: "https://coresetup.studio/datenschutz",
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
