import React, { Component } from 'react';
import Sounds from '../assets/sounds.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sounds: Object.keys(Sounds),
    };
    this.playSound = this.playSound.bind(this);
  }

  playSound(eventObj) {
    // code to be run when click event is fired goes below this line!
  }

  render() {
    return (
      <div className="button-container">
        {/* Components that need to be returned from App go below here ! */}
        <Button />
      </div>
    );
  }
}

class Button extends Component {
  render() {
    return (
      <div
        // Add additional attributes here
        className="button"
        onClick={this.props.playSound}
      >
        <p>{this.props.sound}</p>
      </div>
    );
  }
}

export default App;
