import Color from 'tinycolor2'

const createColorStyle = ({ id, name, description, value }) => {
  const localStyle = id
    ? figma.getLocalPaintStyles().find(({ id: localId }) => localId === id)
    : figma
        .getLocalPaintStyles()
        .find(({ name: localName }) => localName === name)

  const figmaStyle = localStyle || figma.createPaintStyle()

  const convertedColor = Color(value).toRgb()
  const { r, g, b, a: opacity } = convertedColor

  const color = {
    r: r / 255,
    g: g / 255,
    b: b / 255,
  }

  const paintStyle = {
    type: 'SOLID',
    color,
    opacity,
  }

  figmaStyle.name = name
  description && (figmaStyle.description = description)
  figmaStyle.paints = [paintStyle]
}

export default createColorStyle
