const deleteAllLocalStyles = () => {
  figma.getLocalPaintStyles().remove()
  figma.getLocalTextStyles().remove()
  figma.getLocalEffectStyles().remove()
  figma.getLocalGridStyles().remove()
}

export default deleteAllLocalStyles
