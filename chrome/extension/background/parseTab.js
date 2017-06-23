chrome.tabs.getSelected(null, (tab) => {
  const tabId = tab.id;
  const tabUrl = tab.url;

  console.log(tab.url);
});
