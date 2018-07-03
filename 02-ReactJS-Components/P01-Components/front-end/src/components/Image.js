import React, { Component } from 'react';

class Image extends Component {
  hasEvent() {
    return (
      <img
        src={this.props.url}
        alt={this.props.alt}
        className={this.props.className}
        onClick={() => this.props.updateFunc(Number(this.props.id))}
      />
    );
  }

  noEvent() {
    return (
      <img
        src={this.props.url}
        alt={this.props.alt}
        className={this.props.className}
      />
    );
  }

  render() {
    if (this.props.updateFunc) {
      return this.hasEvent();
    }

    return this.noEvent();
  }
}

export default Image;