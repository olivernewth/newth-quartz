import { QuartzComponentProps } from "./types"

export function Tag(props: QuartzComponentProps) {
  const { displayName } = props

  return (
    <span class="tag" data-tag={displayName.toLowerCase()}>
      {displayName}
    </span>
  )
}
