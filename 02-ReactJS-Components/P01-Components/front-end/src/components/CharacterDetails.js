import React, { Component } from 'react';
import Image from '../components/Image';

class CharacterDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedChar: {}
    };
  }

  getCharacter(id) {
    fetch('http://localhost:8000/character/' + id)
      .then(data => {
        return data.json();
      })
      .then(parseData => {
        this.setState({
          selectedChar: parseData
        });
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.focusedChar !== prevProps.focusedChar) {
      this.getCharacter(this.props.focusedChar);
    }
  }

  componentDidMount() {
    this.getCharacter(this.props.focusedChar);
  }

  render() {
    return (
      <div className="character-details">
        <h1>{this.state.selectedChar.name}</h1>
        <Image
          url={this.state.selectedChar.url}
          alt="meme-character"
        />
        <p>{this.state.selectedChar.bio}</p>
      </div>
    );
  }
}

export default CharacterDetails;