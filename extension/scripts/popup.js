document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('myButton')
  button.addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: 'trigger-effect', effect: 'spinWords' })
    // Send a message, update storage, etc.
  })
})
