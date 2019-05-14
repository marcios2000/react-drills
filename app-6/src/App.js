import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";

class App extends Component {
  constructor() {
    super()

    this.state ={
      list: [],
      input: ''
    }
    this.handleAddtask = this.handleAddtask.bind(this)
  }
  handleInput(val){
    this.setState({ input: val})
  }
  handleAddtask(val) {
    this.setState({ 
      list: [...this.state.list, this.state.input],
      input: ""
    })
  }
  render() {
    let list = this.state.list.map((ele, index) => {
      return <Todo key={index} task={ele} />
    });
    return (
      <div className="App">
        <h1>My To-Do list</h1>

        <div>
          <input value={this.state.input} placeholder="New task" onChange={e => this.handleInput(e.target.value)}/>
          <button onClick={this.handleAddtask}>ADD</button>
        </div>

        <br />
        
      {list}
      </div>
    );
  }
}

export default App;
