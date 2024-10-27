import { QuartzTransformerPlugin } from "../types"
import emoji from "remark-emoji"
import { visit } from "unist-util-visit"

// Mapping of emoji shortcodes to Phosphor icon names
const emojiToPhosphor = {
  "❤️": "Heart",
  "⭐": "Star",
  "✨": "Sparkle",
  "🔥": "Fire",
  "👍": "ThumbsUp",
  "🎉": "Party",
  "📝": "Note",
  "🔍": "MagnifyingGlass",
  "📚": "Books",
  "💡": "Lightbulb",
  "🌟": "Star", // Add new mapping
  "📌": "Pin", // Add new mapping
  // Add more mappings as needed
} as const

export const EmojiToPhosphor: QuartzTransformerPlugin = () => {
  return {
    name: "EmojiToPhosphor",
    markdownPlugins() {
      return [
        // First convert shortcodes to emojis
        [emoji, { emoticon: true }],
        // Then convert emojis to Phosphor icons
        () => (tree) => {
          visit(tree, "text", (node) => {
            let content = node.value

            // Replace emojis with Phosphor icon elements
            Object.entries(emojiToPhosphor).forEach(([emoji, iconName]) => {
              content = content.replace(
                new RegExp(emoji, "g"),
                `<i class="ph ph-${iconName.toLowerCase()}"></i>`,
              )
            })

            if (content !== node.value) {
              node.type = "html"
              node.value = content
            }
          })
        },
      ]
    },
  }
}
