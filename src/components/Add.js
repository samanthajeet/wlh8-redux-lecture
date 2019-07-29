import React, { Component } from "react";
import store, {ADD_TO_LIST} from '../store'

class Add extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  handleChange = e => {
    this.setState({
      input: e
    });
  };

  addToDo = () => {
    store.dispatch({
      type: ADD_TO_LIST ,
      payload: this.state.input
    })
  }

  render() {
    return (
      <div>
        <input
          onChange={e => this.handleChange(e.target.value)}
          type="text"
          value={this.state.input}
        />
        <button onClick={this.addToDo} >add</button>
      </div>
    );
  }
}

export default Add;
