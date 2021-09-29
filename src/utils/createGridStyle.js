const createGridStyle = ({
  id,
  name,
  description,
  pattern,
  alignment,
  gutterSize,
  count,
  sectionSize,
  offset,
}) => {
  const localStyle = id
    ? figma.getLocalGridStyles().find(({ id: localId }) => localId === id)
    : figma
        .getLocalGridStyles()
        .find(({ name: localName }) => localName === name)

  const figmaStyle = localStyle || figma.createGridStyle()

  // Only set keys if they are passed through
  const layoutGrid = Object.assign(
    { pattern },
    alignment && { alignment },
    gutterSize && { gutterSize },
    count && { count },
    offset && { offset },
    sectionSize && { sectionSize },
  )

  figmaStyle.name = name
  description && (figmaStyle.description = description)
  figmaStyle.layoutGrids = [layoutGrid]
}

export default createGridStyle
