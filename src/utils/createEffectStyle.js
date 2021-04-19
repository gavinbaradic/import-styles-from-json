import Color from 'tinycolor2'

const createEffectStyle = ({
  name,
  description,
  color,
  offset,
  radius,
  spread,
}) => {
  const localStyle = figma
    .getLocalEffectStyles()
    .find(({ name: localName }) => localName === name)

  const figmaStyle = localStyle || figma.createEffectStyle()

  const convertedColor = Color(color).toRgb()
  const { r, g, b, a } = convertedColor

  const newColor = {
    r: r / 255,
    g: g / 255,
    b: b / 255,
    a,
  }

  const effectStyles = {
    type: 'DROP_SHADOW',
    color: newColor,
    offset,
    radius,
    spread,
    blendMode: 'NORMAL',
    visible: true,
  }

  figmaStyle.name = name
  description && (figmaStyle.description = description)
  figmaStyle.effects = [effectStyles]
}

export default createEffectStyle
