import 'react-figma/rpc'

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
