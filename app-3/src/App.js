import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      array: ["Marty", "Mary", "Jacob", "Chris"],
      list: "",
      userInput: ""
    }
  }
  eventHandler(val){
    this.setState({
      userInput: val
    })
  }

  render (){

    let filteredList = this.state.array.filter((value, i) =>{
      return value.includes(this.state.userInput)
    })
    .map((value, i) => {
    return <h2>{value}</h2>
    })

    return(
      <div className="App">
        
        <input onChange={event => this.eventHandler(event.target.value)}></input>
        {filteredList}
      </div>
      
    );
  }
}

export default App;
