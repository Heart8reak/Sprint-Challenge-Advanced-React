import React from 'react';
import '../../src/App';
import axios from 'axios';

import PlayerCard from '../components/PlayerCard';

class Home extends React.Component {
  state = {
    listPlayers: [],
    originalList: [],
    searchTerm: ''
  };

  componentDidMount() {
    console.log('Empty List of Players', this.state.listPlayers);
    axios.get('http://localhost:5000/api/players').then(response => {
      console.log('Fetching player data:', response);
      this.setState({
        listPlayers: response.data,
        originalList: response.data
      });
      console.log('List of all player data: ', this.state.listPlayers);
    });
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      console.log('SearchTerm: we have a change in state!');

      const characters = this.state.originalList.filter(char =>
        char.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      );
      this.setState({
        listPlayers: characters
      });
      //   console.log(this.state.listPlayers);
      console.log(this.state.searchTerm);
    }
  }

  render() {
    return (
      <div>
        <form>
          <input
            onChange={this.handleChange}
            type="text"
            name="searchTerm"
            value={this.state.searchTerm}
            placeholder="Search Players"
          ></input>
        </form>
        <br />
        <div>
          {this.state.listPlayers.map(item => (
            <PlayerCard
              key={item.id}
              name={item.name}
              country={item.country}
              searches={item.searches}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
