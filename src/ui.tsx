import 'react-figma/rpc'
import 'figma-plugin-ds/dist/figma-plugin-ds.css'

document.getElementById('importStyles').onclick = () => {
  const textareaValue = (
    document.getElementById('jsonInput') as HTMLTextAreaElement
  ).value

  // Check if theme is empty before sending
  if (textareaValue) {
    parent.postMessage(
      {
        pluginMessage: { type: 'importStyles', styleObject: textareaValue },
      },
      '*',
    )
  } else {
    console.log('error')
  }
}

document.getElementById('generateStyles').onclick = () => {
  parent.postMessage(
    {
      pluginMessage: { type: 'generateStyles' },
    },
    '*',
  )
}

onmessage = (event) => {
  ;(document.getElementById('jsonInput') as HTMLTextAreaElement).value =
    event.data.pluginMessage
}
