import { QuartzComponentProps } from "./types"
import { resolveRelative, slugTag } from "../util/path"
import { i18n } from "../i18n"

export function TagContent(props: QuartzComponentProps) {
  const { fileData, allFiles } = props
  const slug = fileData.slug!

  // Get all tags
  const tags = allFiles.flatMap(data => data.frontmatter?.tags ?? [])
  const tagSet = new Set(tags)
  const tagArray = Array.from(tagSet)

  return (
    <div class="tag-content">
      {tagArray.map(tag => {
        const displayName = tag
        const tagLink = resolveRelative(slug, `tags/${slugTag(tag)}`)
        return (
          <a 
            href={tagLink} 
            class="tag" 
            data-tag={tag.toLowerCase()}
          >
            #{displayName}
          </a>
        )
      })}
    </div>
  )
}
