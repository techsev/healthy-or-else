chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'trigger-effect') {
    chrome.tabs.query({}, (tabs) => {
      for (const tab of tabs) {
        if (tab.id) {
          try {
            chrome.tabs.sendMessage(tab.id, { type: message.effect })
          } catch (error) {
            // console.error(error)
          }
        }
      }
    })
  }
})

chrome.runtime.onMessageExternal.addListener(
  (message, sender, sendResponse) => {
    if (message.type === 'trigger-effect') {
      chrome.tabs.query({}, (tabs) => {
        for (const tab of tabs) {
          if (tab.id) {
            try {
              chrome.tabs.sendMessage(tab.id, { type: message.effect })
            } catch (error) {
              // console.error(error)
            }
          }
        }
      })
    }
  }
)
