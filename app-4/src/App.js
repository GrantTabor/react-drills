import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: "",
      passWord: ""
    }
  }
  setUserName(val){
    this.setState({
      userName: val
    })
  }
  setPassWord(val){
    this.setState({
      passWord: val
    })
  }
  render(){
    return (
      <div className="App">
        <input placeholer="Username" onChange={event => this.setUserName(event.target.value)}></input>
        <input onChange={event => this.setPassWord(event.target.value)}></input>
        <button onClick={() => alert(`Username: ${this.state.userName}, Password: ${this.state.passWord}`)}>submit</button>
      </div>
    );
  }
 
}

export default App;
