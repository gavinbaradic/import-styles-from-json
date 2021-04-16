const createGridStyle = ({
  name,
  pattern,
  alignment,
  gutterSize,
  count,
  sectionSize,
  offset,
}) => {
  const localStyle = figma
    .getLocalGridStyles()
    .find(({ name: localName }) => localName === name)

  const figmaStyle = localStyle || figma.createGridStyle()

  const layoutStyles = {
    pattern,
    alignment,
    gutterSize,
    count,
    sectionSize,
    offset,
  }

  figmaStyle.name = name
  figmaStyle.layoutGrids = [layoutStyles]
}

export default createGridStyle
