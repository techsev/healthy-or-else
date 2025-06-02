// Inject CSS
const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = chrome.runtime.getURL('css/splitting.css')
document.head.appendChild(link)

// Inject JS
const script = document.createElement('script')
script.src = chrome.runtime.getURL('scripts/splitting.js')
script.onload = () => {
  // Safe to call Splitting() here
  setTimeout(() => {
    Splitting({
      /* target: String selector, Element, Array of Elements, or NodeList */
      target: 'h1, h2, h3, h4, h5, h6, p, li',
      /* by: String of the plugin name */
      by: 'words',
      /* key: Optional String to prefix the CSS variables */
      key: null
    })
  }, 2000)
}

const effects = ['spinWords']
console.log('content.js')
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  effects.forEach((effect) => {
    document.body.classList.remove(effect)
  })
  switch (message.type) {
    case 'spinWords':
      document.body.classList.add('spinWords')
      break
    case 'stop':
      break
  }
})

document.body.appendChild(script)
