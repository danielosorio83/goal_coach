import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setCompleted } from '../actions';
import { completeGoalRef } from '../firebase';

class CompleteGoalList extends Component {
  componentDidMount(){
    completeGoalRef.on('value', snap => {
      let completedGoals = [];
      snap.forEach(completedGoal => {
        let { email, title } = completedGoal.val();
        let serverKey = completedGoal.key;
        completedGoals.push({email, title, serverKey})
      });
      this.props.setCompleted(completedGoals);
    });
  }

  clearCompleted(){
    completeGoalRef.set([]);
  }

  render() {
    return (
      <div>
        <h4>Complete Goals List</h4>
        {
          this.props.completedGoals.map((goal, index) => {
            let { email, title } = goal;
            return (
              <div key={index} style={{margin: '5px'}}>
                <strong>{title}</strong>
                <span style={{marginRight: '5px'}}> completed by <em>{email}</em></span>
              </div>
            )
          })
        }
        <button
          className="btn btn-primary"
          onClick={ () => this.clearCompleted() }
        >
          Clear All
        </button>
      </div>
    );
  }
}

function mapStateToProps(state){
  const { completedGoals } = state;
  return {
    completedGoals
  }
}

export default connect(mapStateToProps, { setCompleted })(CompleteGoalList);
