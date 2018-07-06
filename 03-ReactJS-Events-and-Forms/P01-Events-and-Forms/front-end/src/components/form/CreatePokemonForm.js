import React, { Component } from 'react';
import Input from './formFields/Input';
import PokemonFiled from './formFields/PokemonField';

class CreatePokemonForm extends Component {
  constructor() {
    super();

    this.state = {
      pokemonName: '',
      pokemonImg: '',
      pokemonInfo: '',
      pokemons: []
    };
  }

  submitPokemon(e) {
    e.preventDefault();
    let payload = {
      pokemonName: this.state.pokemonName,
      pokemonImg: this.state.pokemonImg,
      pokemonInfo: this.state.pokemonInfo,
    };

    console.log(payload);
    this.createPokemon(payload);
  }

  createPokemon(payload) {
    fetch('http://localhost:8000/pokedex/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(res => {
        return res.json();
      })
      .then(d => {
        this.getPokemons();
      });
  }

  getPokemons() {
    fetch('http://localhost:8000/pokedex', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        return res.json();
      })
      .then(d => {
        this.setState({
          pokemons: d.pokemonColection
        });
      });
  }
  componentDidMount() {
    this.getPokemons();
  }

  render() {
    let validObj = {
      validName: this.state.pokemonName !== '',
      validImg: this.state.pokemonImg !== '',
      validInfo: this.state.pokemonInfo !== ''
    };

    return (
      <div>
        <form onSubmit={this.submitPokemon.bind(this)}>
          <fieldset className='App'>
            <div style={{ display: 'inline-grid' }}>
              <h2>Create Pokemon</h2>
              <Input
                type='text'
                data='pokemon-name'
                name='Pokemon Name'
                func={e => {
                  this.setState({ pokemonName: e.target.value });
                }}
                valid={validObj.validName}
              />

              <Input
                type='url'
                data='pokemon-img'
                name='Pokemon Image'
                func={e => {
                  this.setState({ pokemonImg: e.target.value });
                }}
                valid={validObj.validImg}
              />

              <Input
                type='text'
                data='pokemon-info'
                name='Pokemon Info'
                func={e => {
                  this.setState({ pokemonInfo: e.target.value });
                }}
                valid={validObj.validInfo}
              />

              <input
                style={({ 'display': (validObj.validName && validObj.validImg && validObj.validInfo) === true ? '' : 'none' })}
                type='submit'
                value='Create'
              />
            </div>
          </fieldset>
        </form>
        <div className="pokemons-container">
          {this.state.pokemons.map(
            (pokemon, i) => <PokemonFiled
              pokemonName={pokemon.pokemonName}
              pokemonImg={pokemon.pokemonImg}
              key={i}
            />
          )}
        </div>
      </div>

    );
  }
}

export default CreatePokemonForm;