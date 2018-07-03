import React, { Component } from 'react';
import Image from '../components/Image';
import CharacterDetails from './CharacterDetails';

class FetchCharacters extends Component {
  constructor() {
    super();

    this.state = {
      characters: [],
      charOnFocus: 0
    };

    this.changeChar = this.changeChar.bind(this);
  }

  changeChar(char) {
    this.setState({
      charOnFocus: char
    });
  }

  componentDidMount() {
    fetch('http://localhost:8000/roster')
      .then(data => {
        return data.json();
      })
      .then(parsedData => {
        this.setState({
          characters: parsedData
        });
      });
  }

  render() {
    return (
      <div className="characters-container">
        {this.state.characters.map(
          (character) => <Image
            key={character.id}
            id={character.id}
            url={character.url}
            updateFunc={this.changeChar}
          />
        )}
        <CharacterDetails focusedChar={this.state.charOnFocus} />
      </div>
    );
  }
}

export default FetchCharacters;