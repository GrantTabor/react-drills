import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from "./Components/Todo"
import NewTask from './Components/NewTask';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      tasks: ["x", "y"],
      input: ""
    }
  }
  handleInput(val){
    this.setState({
      input: val
    })
  }

  render(){
    let tasks = this.state.tasks.map((element, i) =>{
      return <Todo task = {element}/>
    })

    return(
      <div className="App">
        <input value={this.state.input} onChange={event => this.handleInput(event.target.value)}></input>
        <NewTask input={this.state.input}/>
        {tasks}
      </div>
    )
  }
}

export default App;
