document.addEventListener('DOMContentLoaded', () => {
  const buttonSpin = document.getElementById('buttonSpin')
  buttonSpin.addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: 'trigger-effect', effect: 'spinWords' })
    // Send a message, update storage, etc.
  })
  const buttonBlue = document.getElementById('buttonBlue')
  buttonBlue.addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: 'trigger-effect', effect: 'blue' })
    // Send a message, update storage, etc.
  })
  // const button = document.getElementById('buttonSpin')
  // button.addEventListener('click', () => {
  //   chrome.runtime.sendMessage({ type: 'trigger-effect', effect: 'spinWords' })
  //   // Send a message, update storage, etc.
  // })
})
