import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import HomePage from './pages/homepage/homepage'
import Error from './components/error/error'

const Hats = (props) => {
  return (
    <div>
      <h1>Hats</h1>
    </div>
  )
}
const Jackets = (props) => {
  return (
    <div>
      <h1>Jackets</h1>
    </div>
  )
}



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={Hats} />
        <Route exact path="/jackets" component={Jackets} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
