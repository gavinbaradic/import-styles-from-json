const deleteAllLocalStyles = () => {
  const paintStyles = figma.getLocalPaintStyles()
  const textStyles = figma.getLocalTextStyles()
  const effectStyles = figma.getLocalEffectStyles()
  const layoutGridStyles = figma.getLocalGridStyles()

  const styles = {
    paintStyles: figma.getLocalPaintStyles(),
    textStyles: figma.getLocalTextStyles(),
    effectStyles: figma.getLocalEffectStyles(),
    layoutGridStyles: figma.getLocalGridStyles(),
  }

  Object.keys(styles).map((style) => {
    styles[style].map((localStyle) => {
      localStyle.remove()
    })
  })
}

export default deleteAllLocalStyles
