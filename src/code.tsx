// import { setupMainThread } from 'react-figma/rpc'

import createColorStyle from './utils/createColorStyle.js'
import createTextStyle from './utils/createTextStyle.js'
import createEffectStyle from './utils/createEffectStyle.js'
import createGridStyle from './utils/createGridStyle.js'
import deleteAllLocalStyles from './utils/deleteAllLocalStyles.js'

// This shows the HTML page in "ui.html".
figma.showUI(__html__)
// setupMainThread()

figma.ui.resize(256, 312)

figma.root.setRelaunchData({ open: '' })

const generateStyles = (styles) => {
  styles.color.map((style) => createColorStyle(style))
  styles.text.map((style) => createTextStyle(style))
  styles.effect.map((style) => createEffectStyle(style))
  // styles.grid.map((style) => createGridStyle(style))
}

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'generateFromJson') {
    const styles = JSON.parse(msg.styleObject)

    return generateStyles(styles)
  }
}
