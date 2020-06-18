import React, {Component} from "react"

export default class NewTask extends Component{
    constructor(props){
        super(props)
    }
    addTask() = addTask.bind()

    addTask(input){
        this.setState({
            
        })
    }

    render(){
        return(
            <button onClick={this.addTask(this.props.input)}>Add</button>
        )
    }
}