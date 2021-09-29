const createTextStyle = async ({
  id,
  name,
  description,
  fontSize,
  textDecoration,
  fontName,
  letterSpacing,
  lineHeight,
  paragraphIndent,
  paragraphSpacing,
  textCase,
}) => {
  const localStyle = id
    ? figma.getLocalTextStyles().find(({ id: localId }) => localId === id)
    : figma
        .getLocalTextStyles()
        .find(({ name: localName }) => localName === name)

  const figmaStyle = localStyle || figma.createTextStyle()

  await figma.loadFontAsync(fontName)
  figmaStyle.fontName = fontName

  figmaStyle.name = name
  description && (figmaStyle.description = description)
  figmaStyle.fontSize = fontSize
  figmaStyle.textDecoration = textDecoration
  figmaStyle.letterSpacing = letterSpacing
  figmaStyle.lineHeight = lineHeight
  figmaStyle.paragraphIndent = paragraphIndent
  figmaStyle.paragraphSpacing = paragraphSpacing
  figmaStyle.textCase = textCase
}

export default createTextStyle
