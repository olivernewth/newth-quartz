import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "newth.garden",
    pageTitleSuffix: " - newth.garden",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "umami",
      host: "https://cloud.umami.is",
      websiteId: "64dbf6c0-0dac-4cb6-aade-a8a73d073d74",
    },
    locale: "en-US",
    baseUrl: "newth.garden",
    ignorePatterns: [
      "**/*draft.md",
      "private",
      "Private",
      "templates",
      ".obsidian",
      "smart-chats",
      "Resources",
      ".foam",
    ],
    defaultDateType: "created",
    theme: {
      fontOrigin: "local",
      typography: {
        header: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
        body: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
        code: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace",
      },
      colors: {
        lightMode: {
          light: "#ffffff", // Background
          lightgray: "#e5e5e5",
          gray: "#939293",
          darkgray: "#403e41",
          dark: "#221f22",
          secondary: "#000000", // Pink for links
          tertiary: "#ff75a0", // Blue for subtle elements
          highlight: "rgba(169, 220, 118, 0.15)", // Green tint for highlights
          textHighlight: "rgba(255, 216, 102, 0.15)", // Yellow tint for text selection
        },
        darkMode: {
          light: "#282A3A",
          lightgray: "#161821",
          gray: "#939293",
          darkgray: "#EAF2F1",
          dark: "#EAF2F1",
          secondary: "#EAF2F1", // Pink for links
          tertiary: "#ffacc7", // Blue for subtle elements
          highlight: "rgba(169, 220, 118, 0.15)", // Green tint for highlights
          textHighlight: "rgba(255, 216, 102, 0.15)", // Yellow tint for text selection
        },
      },
      cdnCaching: false,
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({
        markdownLinkResolution: "shortest",
        prettyLinks: true,
      }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
      // Remove or comment out this part:
      // Plugin.MillionLint({
      //   rsc: true,
      //   filter: {
      //     include: "**/components/*.{mtsx,mjsx,tsx,jsx}",
      //   },
      // }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
