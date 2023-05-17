console.log("Live now") 

chrome.tabs.onCreated.addListener(() => {
  console.log(`onCreated`);

})

chrome.action.onClicked.addListener(() => {
  console.log(`action clicked`)
  }
  )

chrome.commands.onCommand.addListener((command) => {
    if (command === "test") 
    {
      console.log(`hello`)
    }
  }
  )

chrome.tabs.onUpdated.addListener(() => {
  console.log(`OnUpdated`)
})

