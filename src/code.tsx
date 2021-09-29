import createColorStyle from './utils/createColorStyle.js'
import createTextStyle from './utils/createTextStyle.js'
import createEffectStyle from './utils/createEffectStyle.js'
import createGridStyle from './utils/createGridStyle.js'
import deleteAllLocalStyles from './utils/deleteAllLocalStyles.js'

// This shows the HTML page in "ui.html".
figma.showUI(__html__)

figma.ui.resize(256, 282)

figma.root.setRelaunchData({ open: '' })

const generateStyles = (styles) => {
  styles.colorStyles &&
    styles.colorStyles.map((style) => createColorStyle(style))
  styles.textStyles && styles.textStyles.map((style) => createTextStyle(style))
  styles.effectStyles &&
    styles.effectStyles.map((style) => createEffectStyle(style))
  styles.gridStyles && styles.gridStyles.map((style) => createGridStyle(style))
}

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'generateStyles') {
    const styles = JSON.parse(msg.styleObject)

    return generateStyles(styles)
  }

  if (msg.type === 'deleteAllLocalStyles') {
    return deleteAllLocalStyles()
  }
}
