import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Oliver's Garden",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "umami",
      host: "https://cloud.umami.is",
      websiteId: "op://Private/unami-garden-id/Section_fv2djphmsozgnkzeb46fziz6hy/websiteId",
    },
    locale: "en-US",
    baseUrl: "garden.newth.ai",
    ignorePatterns: ["private", "Private", "templates", ".obsidian", "smart-chats"],
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
          light: "#ffffff",
          lightgray: "#e0e0e0",
          gray: "#808080",
          darkgray: "#404040",
          dark: "#000000",
          secondary: "#000000",
          tertiary: "#808080",
          highlight: "rgba(0, 0, 0, 0.1)",
          textHighlight: "rgba(0, 0, 0, 0.2)",
        },
        darkMode: {
          light: "#000000",
          lightgray: "#404040",
          gray: "#808080",
          darkgray: "#e0e0e0",
          dark: "#ffffff",
          secondary: "#ffffff",
          tertiary: "#808080",
          highlight: "rgba(255, 255, 255, 0.1)",
          textHighlight: "rgba(255, 255, 255, 0.2)",
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
