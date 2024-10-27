import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
import { EmojiReplacer } from "./quartz/plugins/transformers/emoji-replacer"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "newth",
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
          light: "#FAF4F2", // Monokai Pro Light background
          lightgray: "#e5e5e5", // Light border color
          gray: "#939293", // Monokai muted
          darkgray: "#403e41", // Monokai Pro medium
          dark: "#221f22", // Monokai Pro dark
          secondary: "#696769", // Subtle but visible links
          tertiary: "#939293", // Muted text
          highlight: "rgba(34, 31, 34, 0.08)", // Subtle highlight
          textHighlight: "rgba(34, 31, 34, 0.15)",
        },
        darkMode: {
          light: "#2d2a2e", // Monokai Pro background
          lightgray: "#403e41", // Monokai Pro border
          gray: "#939293", // Monokai muted
          darkgray: "#e5e5e5", // Light text
          dark: "#fdfdf6", // Brightest text
          secondary: "#c1c0c0", // Visible but gentle links
          tertiary: "#939293", // Muted text
          highlight: "rgba(253, 253, 246, 0.08)", // Subtle highlight
          textHighlight: "rgba(253, 253, 246, 0.15)",
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
      EmojiReplacer({
        style: "gemoji", // or "native"
      }),
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
