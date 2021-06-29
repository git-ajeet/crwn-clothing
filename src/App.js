import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';


import HomePage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop/hats' component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
