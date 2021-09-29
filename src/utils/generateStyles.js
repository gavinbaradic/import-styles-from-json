import Color from 'tinycolor2'

const generateStyles = () => {
  const getHexValue = ({ r, g, b }) => {
    return `#${Color({ r: r * 255, g: g * 255, b: b * 255 }).toHex()}`
  }

  const localStyles = {
    colorStyles: figma.getLocalPaintStyles().map((style) => ({
      id: style.id,
      name: style.name,
      description: style.description,
      paints: style.paints,
    })),
    // textStyles: figma.getLocalTextStyles(),
    effectStyles: figma.getLocalEffectStyles().map((style) => ({
      id: style.id,
      name: style.name,
      description: style.description,
    })),
    // gridStyles: figma.getLocalGridStyles(),
  }
  console.log(localStyles)

  return figma.ui.postMessage(JSON.stringify(localStyles))
}

export default generateStyles
