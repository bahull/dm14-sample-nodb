import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import HeroCard from './components/HeroCard/HeroCard';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heroes: [],
      planets: [],
      hero: '',
      name: ''
    };

    this.deleteHero = this.deleteHero.bind(this);
    this.selectOneHero = this.selectOneHero.bind(this);
  }
  componentDidMount() {
    axios.get('/api/heroes')
      .then(response => this.setState({ heroes: response.data.results }))
      .catch(error => {
        this.setState({ error: error.message })
      });
  }
  deleteHero(name) {
    console.log(name);
    const heroes = this.state.heroes.filter(hero => hero.name !== name);
    this.setState({ heroes, hero: '' });
  }
  selectOneHero(url) {
    const split = url.split('/').filter(Boolean);
    const id = split[split.length - 1];
    axios.get(`/api/heroes/${id}`)
      .then(response => {
        this.setState({ hero: response.data })
      })
      .catch(error => this.setState({ error: error.message }));
  }
  filterHero(e) {
    this.setState({ name: e });
  }
  render() {
    return (
      <div className="App">
      {!this.state.hero && <input
        onChange={(e) => this.filterHero(e.target.value)}
        type="text"
        placeholder="Filter Heroes By Name"
      />}
      <div className="card-container">
        {this.state.heroes.length > 0
          && !this.state.error
          && !this.state.hero
          && this.state.heroes
          .filter(hero => hero.name.startsWith(this.state.name))
          .map((val, i) => <HeroCard
                                              hero={val}
                                              key={i}
                                              deleteHero={this.deleteHero}
                                              selectOneHero={this.selectOneHero}
                                            />)}
        {this.state.hero && <div>
          <button onClick={() => this.setState({ hero: '' })}>Go Back</button>
          <HeroCard hero={this.state.hero} deleteHero={this.deleteHero} />
        </div>}
        {this.state.heroes.length === 0 && <div>
          <h1>No More Droids To Delete</h1>
        </div>}
        {this.state.error && <div>
            <h1>{this.state.error}</h1>
        </div>}
        </div>
      </div>
    );
  }
}

export default App;
