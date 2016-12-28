import React, { Component } from 'react';
import { getTeamData } from '../src/actions';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
  }


  componentWillMount() {
     console.log('STEP1: COMPONENT WILL MOUNT')
  }
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img className="App-logo" alt="logo" />
          <h2>Welcome to FFTA</h2>
        </div>
        <div id="main_container">
          <p><span>Team Name :</span></p>

        </div>
      </div>
    );
  }
}

export default App;
