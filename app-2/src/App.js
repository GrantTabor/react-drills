import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      array: ["John", "Matt", "Grant", "More Names"]
    }
  }
 

  render(){
      let displayArr = this.state.array.map((element, i) =>{
        return (<h2>{element}</h2>)
      })
    return (
      <div className="App">
  
       <h2>{displayArr}</h2>
      </div>
    );
  }
  }

export default App;
