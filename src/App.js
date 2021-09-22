import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import './App.css';

const WigsPage = ()=> (
  <div>
  <h1>Wigs Page</h1>
  </div>
)

function App() {
  return (
    <div>
    <Switch>
    <Route exact={true} path='/' component={HomePage} />
    <Route  path='/wigs' component={WigsPage} />
  </Switch>
   
  
    </div>
  );
}

export default App;
