import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom';

import ShopPage from './pages/shop/shop.component';
import Header from './components/Header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up'

function App() {
  return (<div>
            <Header/>
            <Switch>
               <Route exact path='/' component={HomePage}/>
               <Route path='/s hop' component={ShopPage}/>
               <Route path='/signin' component={SignInAndSignUp}/> 
    
            </Switch>
  
          </div>
  );
}

export default App;
