import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../../app/containers/Root';
import './todoapp.css';

let tabInfo;

chrome.tabs.getSelected(null, (tab) => {
  const tabId = tab.id;
  const tabUrl = tab.url;

  tabInfo = tab;

  console.log(tab.url);
});


chrome.storage.local.get('state', (obj) => {
  const { state } = obj;
  const actualState = JSON.parse(state || {});

  const createStore = require('../../app/store/configureStore');

  ReactDOM.render(
    <Root store={createStore(actualState)} tab={tabInfo} />,
    document.querySelector('#root')
  );
});
