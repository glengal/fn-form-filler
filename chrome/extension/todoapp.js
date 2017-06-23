import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../../app/containers/Root';
import './todoapp.css';

const getTabInfo = () => chrome.tabs.getSelected(null, (tab) => {
  return tab;
});


chrome.storage.local.get('state', (obj) => {
  const { state } = obj;
  const actualState = JSON.parse(state || {});

  const createStore = require('../../app/store/configureStore');
  const tabInfo = getTabInfo();
  console.log("tabInfo", tabInfo);
  ReactDOM.render(
    <Root store={createStore(actualState)} tab={tabInfo} />,
    document.querySelector('#root')
  );
});
