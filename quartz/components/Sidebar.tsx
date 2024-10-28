import { QuartzComponentProps } from "./types"
import { resolveRelative } from "../util/path"

export function Sidebar(props: QuartzComponentProps) {
  const { fileData, allFiles } = props
  const currentPath = "/" + fileData.slug

  function isCurrentPage(slug: string): boolean {
    return currentPath === "/" + slug
  }

  return (
    <div class="sidebar">
      {allFiles.map((file) => (
        <div 
          class={`folder ${isCurrentPage(file.slug) ? 'active-page' : ''}`}
          key={file.slug}
        >
          <a href={resolveRelative(fileData.slug!, file.slug)}>
            {file.frontmatter?.title || file.slug}
          </a>
        </div>
      ))}
    </div>
  )
}
