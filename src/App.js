import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
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
      <BrowserRouter>
        <Switch>
          <Route exact path='/boards'><BoardIndex /></Route>
          <Route path='/board/:id'><BoardDetail /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
