import React, { Component } from 'react';

class Binder extends Component {
  constructor() {
    super();
    this.state = {
      text: 'I can see you now',
      display: 'none'
    };
  }

  handleClickMe = () => {
    let changeVisibility = this.state.display === 'none' ? 'block' : 'none';
    this.setState({
      display: changeVisibility
    });
  };

  render() {
    console.log(this.state.text);
    return (
      <div>
        <h1 style={{ display: this.state.display }}>{this.state.text}</h1>
        <button
          className='ui primary button'
          style={{ margin: '10px 15px' }}
          onClick={this.handleClickMe}
        >
          Click
        </button>
      </div>
    );
  }
}

export default Binder;
