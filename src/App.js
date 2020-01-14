import React from 'react';
import './styles/index-style.css';

import Header from './components/header';
import Board from './components/board';

/**
 * react app
 * @return {String} html
 */
function App() {
  return (
    <Header />
    <Board />
  );
}

export default App;
