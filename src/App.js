import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './app.css'
import BoardIndex from './components/boardindex';
import BoardDetail from './components/boarddetail';

/**
 * react app
 * @return {String} html
 */
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'><BoardIndex /></Route>
        <Route path='/board/:id'><BoardDetail /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
