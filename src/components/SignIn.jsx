import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { Link } from 'react-router-dom'

class SignIn extends Component {
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

  signIn() {
    const { email, password } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({error});
      })
  }

  render() {
    return (
      <div className="form-inline" style={{margin: '5%'}}>
        <h2>Sign In</h2>
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
            onClick={ () => this.signIn() }
          >
            Sign In
          </button>
        </div>
        {
          (this.state.error.message)
            ? <div class="alert alert-danger">{this.state.error.message}</div>
            : ''
        }
        <div>
          <Link to="/signup">Sign Up instead</Link>
        </div>
      </div>
    );
  }
}

export default SignIn;
