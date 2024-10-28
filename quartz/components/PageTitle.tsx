import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import SearchIcon from "./icons/Search"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div class={classNames(displayClass, "page-title")}>
      <h2>
        <a href={baseDir}>{title}</a>
      </h2>
      <button class="search-button" id="search-trigger" aria-label="Search">
        <SearchIcon />
      </button>
    </div>
  )
}

PageTitle.css = `
.page-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
}

.page-title h2 {
  margin: 0;
}

.search-button {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  color: var(--darkgray);
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
}

.search-button:hover {
  color: var(--secondary);
}
`

PageTitle.afterDOMLoaded = `
document.addEventListener('DOMContentLoaded', () => {
  const searchTrigger = document.getElementById('search-trigger')
  const searchButton = document.getElementById('search-button')
  
  searchTrigger?.addEventListener('click', () => {
    // Programmatically click the hidden search button
    searchButton?.click()
  })
})
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
