import React, { Component } from 'react';
import contacts from './contacts.json';
import Contact from './components/Contact';
import ContactDetails from './components/ContactDetails';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      counter: 0,
      contact: <ContactDetails {...contacts[0]}></ContactDetails>
    };
    this.increment = this.increment.bind(this);
    this.showDetails = this.showDetails.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  increment() {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  }

  showDetails(id) {
    this.setState({
      contact: <ContactDetails {...contacts[id - 1]}></ContactDetails>
    });
  }

  render() {
    return (
      <div className="container">
        <header>&#9993; Contact Book</header>
        <div id="book">
          <div id="list">
            <h1>Contacts</h1>
            <div className="content">
              {contacts.map(
                (item) => <Contact
                  key={item.id}
                  click={() => this.showDetails(item.id)}
                  firstName={item.firstName}
                  lastName={item.lastName}>
                </Contact>
              )}
            </div>
          </div>
          {this.state.contact}
        </div>
        <footer>Contact Book SPA &copy; 2017</footer>

        <div id="counter">
          <h1>Counter</h1>
          <h2>{this.state.counter}</h2>
          <button className="btn" onClick={this.increment}>Increment Counter</button>
        </div>

        <div id="timer">
          <h1>Timer</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        </div>
      </div>
    );
  }
}

export default App;