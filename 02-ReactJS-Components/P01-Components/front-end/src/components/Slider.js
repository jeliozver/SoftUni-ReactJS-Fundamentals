import React, { Component } from 'react';
import Image from '../components/Image';
import left from '../resources/left.png';
import right from '../resources/right.png';

class Slider extends Component {
  constructor() {
    super();

    this.state = {
      focusedEpId: 0,
      selectedImg: 'https://i.imgur.com/B31Uwkm.png'
    };

    this.changeEp = this.changeEp.bind(this);
  }

  getEpisode(id) {
    fetch('http://localhost:8000/episodePreview/' + id)
      .then(data => {
        return data.json();
      })
      .then(parsedData => {
        this.setState({
          selectedImg: parsedData.url,
          focusedEpId: parsedData.id
        });
      });
  }
  
  changeEp(id) {
    this.getEpisode(id);
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <Image
            url={left}
            alt="leftArrow"
            className="slider-elem slider-button case-left"
            id={Number(this.state.focusedEpId - 1)}
            updateFunc={this.changeEp}
          />
          <Image
            url={this.state.selectedImg}
            alt="focusedEp"
            className="sliderImg slider-elem"
          />
          <Image
            url={right}
            alt="rightArrow"
            className="slider-elem slider-button case-right"
            id={Number(this.state.focusedEpId + 1)}
            updateFunc={this.changeEp}
          />
        </div>
      </div>
    );
  }
}

export default Slider;