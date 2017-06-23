import FormFiller form "./form-filler";

chrome.runtime.sendMessage('getOptions', (response) => {
  if (!window.formFiller) {
    window.formFiller = new FormFiller(response.options, response.analyticsTrackingCode);
  }
});
