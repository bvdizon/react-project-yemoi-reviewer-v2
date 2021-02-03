import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './comps/Menu';
import Moimoi from './comps/Moimoi';
import ReviewerMoimoi from './comps/ReviewerMoimoi';
import ReviewerYeye from './comps/ReviewerYeye';
import Yeye from './comps/Yeye';
import './App.css';
import NavButtons from './comps/NavButtons';

const App = () => {
  return (
    <main className='reviewerApp'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Menu} />
          <Route exact path='/yeye' component={Yeye} />
          <Route exact path='/moimoi' component={Moimoi} />
          <Route path='/review/yeye/:deck' component={ReviewerYeye} />
          <Route path='/review/moimoi/:deck' component={ReviewerMoimoi} />
        </Switch>
        <NavButtons />
      </BrowserRouter>
    </main>
  );
};

export default App;
