import React, { Component } from 'react';

class Button extends Component {
  render() {
    return(
      <div
      // Add additional attributes here
        className='button'
        onClick={this.props.playSound}
      >

        <p>{this.props.sound}</p>

      </div>
    );
  }
}

export default Button;