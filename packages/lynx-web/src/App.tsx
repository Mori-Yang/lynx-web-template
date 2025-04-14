import './App.css';
import '@lynx-js/web-core/index.css';
import '@lynx-js/web-elements/index.css';
import '@lynx-js/web-core';
import '@lynx-js/web-elements/all';
import React from 'react';

const App = () => {

  return (
    <lynx-view url='/main.web.bundle' style={{ width: '100vw', height: '100vh' }}></lynx-view>
  )
};

export default App;