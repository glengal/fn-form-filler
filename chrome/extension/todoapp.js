import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../../app/containers/Root';
import './todoapp.css';

let tabInfo;
let tabHTML;

chrome.tabs.getSelected(null, (tab) => {
  tabInfo = tab;
});


const doTheNeedfull = () => {
  console.log('doing smth...');
  chrome.tabs.executeScript({
    code: 'window.formFiller();',
    allFrames: true,
  });
};


chrome.extension.onRequest.addListener(
  (request, sender, sendResponse) => {
    // LOG THE CONTENTS HERE
    tabHTML = request.content;
    console.log(request.content);
  });

chrome.storage.local.get('state', (obj) => {
  const { state } = obj;
  const actualState = JSON.parse(state || {});

  const successfulBooking = {
    fname: 'Roofus',
    lname: 'Summers',
  };

  const createStore = require('../../app/store/configureStore');

  console.log('tab HTML', tabHTML);
  ReactDOM.render(
    <Root
      store={createStore(actualState)}
      tab={tabInfo}
      successfulBooking={successfulBooking}
      fillAction={doTheNeedfull}
    />,
    document.querySelector('#root')
  );
});
