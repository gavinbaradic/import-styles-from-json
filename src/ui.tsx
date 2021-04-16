import 'react-figma/rpc'
import 'figma-plugin-ds/dist/figma-plugin-ds.css'

document.getElementById('generateStyles').onclick = () => {
  const textareaValue = (document.getElementById(
    'jsonInput'
  ) as HTMLTextAreaElement).value

  // Check if theme is empty before sending
  if (textareaValue) {
    parent.postMessage(
      {
        pluginMessage: { type: 'generateStyles', styleObject: textareaValue },
      },
      '*'
    )
  } else {
    console.log('error')
  }
}
