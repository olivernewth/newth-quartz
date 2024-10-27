import { QuartzTransformerPlugin } from "../types"
import emoji from "remark-emoji"
import gemoji from "remark-gemoji"

interface Options {
  style?: "native" | "gemoji"
}

export const EmojiReplacer: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = {
    style: userOpts.style ?? "gemoji",
  }

  return {
    name: "EmojiReplacer",
    markdownPlugins() {
      return [
        // Use gemoji for GitHub-style emoji codes
        opts.style === "gemoji" ? gemoji : null,
        // Use remark-emoji for converting shortcodes to flat emojis
        [emoji, { emoticon: true }],
      ].filter(Boolean)
    },
  }
}
