import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../../app/containers/Root';
import './todoapp.css';

let tabInfo;
let tabHTML;

chrome.tabs.getSelected(null, (tab) => {
  tabInfo = tab;
});

chrome.extension.onRequest.addListener(
  (request, sender, sendResponse) => {
    // LOG THE CONTENTS HERE
    tabHTML = request.content;
    console.log(request.content);
  });

const makeItGreen = 'document.body.style.border = "5px solid green"';

// chrome.tabs.getSelected(null, (tab) => {
//   // Now inject a script onto the page
//   chrome.tabs.executeScript(tab.id, {
//     code: makeItGreen
//   }, () => { console.log('done'); });
// });


chrome.storage.local.get('state', (obj) => {
  const { state } = obj;
  const actualState = JSON.parse(state || {});

  const createStore = require('../../app/store/configureStore');

  console.log('tab HTML', tabHTML);
  ReactDOM.render(
    <Root store={createStore(actualState)} tab={tabInfo} />,
    document.querySelector('#root')
  );
});
