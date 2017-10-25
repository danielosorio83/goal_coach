import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import { logUser } from '../actions';
import { firebaseApp } from '../firebase';

import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';

class App extends Component {
  componentWillMount(){
    let { store, history } = this.props;
    firebaseApp.auth().onAuthStateChanged(user => {
      // console.log('store', store);
      if (user){
        const { email } = user;
        store.dispatch(logUser(email));
        history.push('/');
      }else{
        history.replace('/signin');
      }
    });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    );
  }
}

export default withRouter(App);
