import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './comps/Menu';
import Reviewer from './comps/Reviewer';
import Error from './comps/Error';
import Questions from './comps/Questions';
import './App.css';
import NavButtons from './comps/NavButtons';

const App = () => {
  return (
    <main className='reviewerApp'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Menu} />
          <Route exact path='/reviewer' component={Reviewer} />
          <Route exact path='/questions/:deck' component={Questions} />
          <Route path='*' component={Error} />
        </Switch>
        <NavButtons />
      </BrowserRouter>
    </main>
  );
};

export default App;
