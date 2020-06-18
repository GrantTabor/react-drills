import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from "./Components/Todo"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      taskList: ["x", "y"],
      input: ""
    }
  }

  getInput(val){
    this.setState({
      input: val
    })
  }

  addTask(){
    this.setState ({
      taskList: [...this.state.taskList, this.state.input],
      input: ""
    })
  }

  render(){
    
    let taskList = this.state.taskList.map((element, index) => {
      return <Todo key={index} task={element} />
    })

    return(
      <div>
        <input value={this.state.input} onChange={event => this.getInput(event.target.value)}></input>
        <button onClick={() => this.addTask()}>Add</button>
        {taskList}
      </div>
    )
  }
}

export default App;
