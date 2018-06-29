import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="contact" onClick={this.props.click}>
        <span className="avatar small">&#9787;</span>
        <span className="title">{this.props.firstName} {this.props.lastName}</span>
      </div>
    );
  }
}

export default Contact;