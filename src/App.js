import React from 'react';
import {Router, Link} from '@reach/router';
import './styles/app.css';
import Header from './components/header';
import BoardIndex from './components/boardindex';
import BoardDetail from './components/boarddetail';

/**
 * react app
 * @return {String} html
 */
function App() {
  return (
    <div>
      <Header />
      <Router>
        <BoardIndex path="/" />
        <BoardDetail path="/board/:id" />
      </ Router>
    </div>
  );
}

export default App;
