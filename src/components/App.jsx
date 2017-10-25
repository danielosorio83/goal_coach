import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
    console.log('App Constructor');
  }

  render() {
    return (
      <div class="Home">
        <div className="title">Goal Coach</div>
      </div>
    );
  }
}

export default App;
