import React from 'react';
import '../../src/App';
import axios from 'axios';

import PlayerCard from '../components/PlayerCard';

class Home extends React.Component {
  state = {
    listPlayers: []
  };

  componentDidMount() {
    console.log(this.state.listPlayers);
    axios.get('http://localhost:5000/api/players').then(response => {
      console.log('Fetching player data:', response);
      this.setState({
        listPlayers: response.data
      });
      console.log('List of all player data: ', this.state.listPlayers);
    });
  }

  render() {
    return (
      <div>
        {this.state.listPlayers.map(item => (
          <PlayerCard key={item.id} />
        ))}
      </div>
    );
  }
}

export default Home;
