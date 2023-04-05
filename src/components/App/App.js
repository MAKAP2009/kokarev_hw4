import React from 'react';
import IncreaseNumber from '../IncreaseNumber';
import LifeCycles from '../LifeCycles';
import './App.css';

class AppendText extends React.Component {
  state = {
    isVisible: true
  }

  handleClick() {
    this.setState(prev => ({ isVisible: !prev.isVisible }));   
  }

  render() {
 
    return (
      <div>
        <div className='state'>
        {/* <button onClick={this.handleClick.bind(this)}>
          Click to hide/show text below
        </button> */}
        {/* <h2>Welcome</h2> */}
          {this.state.isVisible && <LifeCycles />}
        </div>
        
        <div className='increase'>        
          <IncreaseNumber />
        </div>
       
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        {/* <h1>
          Исчезающий текст
        </h1>       */}
        
        <AppendText />
        
      </header>
    </div>
  );
}

export default App;
