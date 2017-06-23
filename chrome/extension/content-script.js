const sillyBella = () => {
  console.log("screw you Bella");
};

chrome.runtime.sendMessage('getOptions', (response) => {
  if (!window.formFiller) {
    window.formFiller = sillyBella();
  }
});
