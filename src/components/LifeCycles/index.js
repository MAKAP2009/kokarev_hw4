import React from 'react';

class LifeCycles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    const { isVisible } = this.state;
    this.setState({ isVisible: !isVisible });
    if (!isVisible) {
      alert('Компонент открыт');
    } else {
      alert('Компонент закрыт');
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}>
          {this.state.isVisible ? 'Hide' : 'Show'}
        </button>
        {this.state.isVisible && <div>Код компонента</div>}
      </div>
    );
  }
}

export default LifeCycles;
