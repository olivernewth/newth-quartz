import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const CustomTitle: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <h1 className={`page-title ${displayClass ?? ""}`}>
      newth<span className="garden">.garden</span>
    </h1>
  )
}

CustomTitle.css = `
.page-title .garden {
  color: var(--secondary);
  font-weight: normal;
}
`

export default (() => CustomTitle) satisfies QuartzComponentConstructor
