import React, { Component } from 'react';

class Binder extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      visibility: 'hidden'
    };
    // this.handleClickMe = this.handleClickMe.bind(this);
  }

  handleClickMe = (text) => {
    let visibility = this.state.visibility === 'hidden' ? 'visible' : 'hidden';

    this.setState({
      text,
      visibility
    });
  };

  render() {
    console.log(this.state.text);
    return (
      <div>
        <h1 style={{ visibility: this.state.visibility }}>{this.state.text}</h1>
        <button
          className='ui primary button'
          style={{ margin: '10px 15px' }}
          onClick={() => {
            this.handleClickMe('I can see you now');
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

export default Binder;
