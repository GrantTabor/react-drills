import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      input: ''
    }
  }

  changeInput(val){
    this.setState ({
      input: val
    })
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <input onChange={event =>this.changeInput(event.target.value)}></input>
          <p>{this.state.input}</p>
        </header>
      </div>
    );
  }
 
}

export default App;

