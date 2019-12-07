import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route, Switch , Redirect} from 'react-router-dom';
import { connect  } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import ShopPage from './pages/shop/shop.component';
import Header from './components/Header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import CheckoutPage from './pages/checkout/checkout-page';
import { auth ,createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from  './redux/user/user.actions';

import {selectCurrentUser} from './redux/user/user.selectors';



class App extends React.Component{
  
  
unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} =this.props; 

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //     if (userAuth){
    //       const userRef = await createUserProfileDocument(userAuth);

    //       userRef.onSnapshot(snapShot => {
    //         setCurrentUser({
    //             id:snapShot.id,
    //             ...snapShot.data()
    //           })
            
            
    //       });
        // }
        // setCurrentUser(userAuth);
      // console.log(user);
    });

  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  
  render(){
  return (<div>
            <Header/>
            <Switch>
               <Route exact path='/' component={HomePage}/>
               <Route path='/shop' component={ShopPage}/>
               <Route exact path='/checkout' component={CheckoutPage}/>
               <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp/>)  }/> 
    
            </Switch>
  
          </div>
  );
}
}


const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
})



//check out the user action page

const mapDispatchToProps = dispatch =>({
  setCurrentUser:user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
