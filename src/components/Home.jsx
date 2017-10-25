import React, { Component } from 'react';

import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';

class Home extends Component {
  signOut(){
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div className="Home" style={{margin: '5%'}}>
        <h3>Goal Coach</h3>
        <AddGoal />
        <hr />
        <GoalList />
        <hr />
        <CompleteGoalList />
        <hr />
        <button
          className="btn btn-danger"
          onClick={ () => this.signOut() }
        >
          Sign Out
        </button>
      </div>
    );
  }
}

export default Home;
