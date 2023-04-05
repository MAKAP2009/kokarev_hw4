import React from 'react';

class IncreaseNumber extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.number > 3) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.number !== this.state.number) {
      console.log('Component updated!');
      console.log('New number:', this.state.number);
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={() => this.setState({ number: this.state.number + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default IncreaseNumber;
