import React, { Component } from 'react';

class ContactDetails extends Component {
  render() {
    return (
      <div id="details">
        <h1>Details</h1>
        <div className="content">
          <div className="info">
            <div className="col">
              <span className="avatar">&#9787;</span>
            </div>
            <div className="col">
              <span className="name">{this.props.firstName}</span>
              <span className="name">{this.props.lastName}</span>
            </div>
          </div>
          <div className="info">
            <span className="info-line">&#9742; {this.props.phone}</span>
            <span className="info-line">&#9993; {this.props.email}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactDetails;