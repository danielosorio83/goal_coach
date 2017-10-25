import React, { Component } from 'react';
import { firebaseApp } from '../firebase';

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    };
  }

  signUp() {
    console.log('SignUp', this.state);
    const { email, password } = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        // console.log('Sign Up Error', error);
        this.setState({error});
      })
  }

  render() {
    return (
      <div className="form-inline" style={{margin: '5%'}}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <input
            className="form-control"
            style={{marginRight: '5%'}}
            type="text"
            placeholder="email"
            onChange={ (event) => this.setState({email: event.target.value}) }
          />
          <input
            className="form-control"
            style={{marginRight: '5%'}}
            type="password"
            placeholder="password"
            onChange={ (event) => this.setState({password: event.target.value}) }
          />
          <button
            className="btn btn-primary"
            type="button"
            style={{marginTop: '2%'}}
            onClick={ () => this.signUp() }
          >
            Sign Up
          </button>
        </div>
        {
          (this.state.error.message)
            ? <div class="alert alert-danger">{this.state.error.message}</div>
            : ''
        }
      </div>
    );
  }
}

export default SignUp;
