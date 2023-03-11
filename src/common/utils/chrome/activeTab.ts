function activeTab(currentWindow: boolean = true): Promise<chrome.tabs.Tab> {
  return new Promise((resolve) => {
    chrome.tabs.query({ active: true, currentWindow }, (tabs) => {
      const tab = tabs[0];
      resolve(tab);
    });
  });
}

export default activeTab;
