import 'react-figma/rpc'
import 'figma-plugin-ds/dist/figma-plugin-ds.css'

document.getElementById('generateStyles').onclick = () => {
  const textarea = document.getElementById('jsonInput')

  // Check if theme is empty before sending
  if (textarea?.value !== '') {
    parent.postMessage(
      {
        pluginMessage: { type: 'generateStyles', styleObject: textarea.value },
      },
      '*'
    )
  } else {
    console.log('error')
  }
}
