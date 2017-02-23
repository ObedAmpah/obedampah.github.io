import React, { Component } from 'react';
import Header from '../src/templates/Header';
import NavBar from '../src/templates/NavBar';
import axios from 'axios';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teamData: {
        players: []
      }
    }
  }

  componentDidMount() {
     console.log('STEP1: COMPONENT DID MOUNT');


     const axiosGet = axios.get('https://obedampah.github.io/teams/trilam/trilam.json');

     axiosGet.then(
       response => {
         if (response.status >= 200 && response.status < 300) {
           //console.log("AXIOS GET RESPONSE: ", response.data);
           this.setState({
             teamData: response.data
           })
         }
       },
       error => {
         console.log(error)
       }
     )
  }

  render() {

    const {teamData} = this.state;

    return (

      <div className="App">
      <NavBar />
        <Header />
        <div id="main_container" className="container-fluid">
          <div className="row">
            <div className="team-name">Team Name : {teamData && teamData.teamName ? teamData.teamName : ''}</div>
          </div>
          <div className="col-md-6">
            <table>
              <thead>
                <tr>
                  <th  className="player-names">Name</th>
                  <th>Position</th>
                  <th>Total Points</th>
                  <th>Points/Game</th>
                </tr>
              </thead>
              <tbody>
              {teamData && teamData.players ? teamData.players.map((row, key) => {
                return ( <tr className="row-striped" key={key}>
                        <td  className="player-names">{row.name}</td>
                        <td>{row.position}</td>
                        <td>{row.pointsTotal}</td>
                        <td>{row.pointsAvg}</td>
                      </tr> )
              }) : ''}
              </tbody>
            </table>
          </div>
          <div className="col-md-6">
            <div>Right Side Graph</div>
          </div>

        </div>
      </div>
    );
  }
}
