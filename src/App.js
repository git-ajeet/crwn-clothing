import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';


import HomePage from './pages/homepage/Homepage.component';

function Hats() {
  return (
    <div>
      <h1>Hats</h1>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage}></Route>
      <Route path='/shop/hats' component={Hats}></Route>
    </div>
  );
}

export default App;
