import React, { Component } from 'react';

import PokemonList from './PokemonList';
import Search from './Search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      pokemonList: [],
      clickedPokemon: -1
    }
  }

  getPokemon = (query) => {
    this.props.getPokemon(query, ({ data }) => {
      let { id, name, sprites } = data;
      this.setState({ pokemonList: [...this.state.pokemonList, { id, name, sprites }]})
    });
  }

  render(){
    let { pokemonList, clickedPokemon } = this.state;
    return (
      <div>
        <Search getPokemon={this.getPokemon}/>
        <PokemonList pokemonList={this.state.pokemonList}/>
      </div>
    )
  }
}

export default App;