import React, { Component } from 'react';
import store from '../store'

class List extends Component {
  constructor(){
    super()
    const reduxState = store.getState()
    this.state = { 
      list: reduxState.todo
     }
  }
  render() { 
    let mappedList = this.state.list.map( item => {
      return (
        <h4>{item}</h4>
      )
    })
    return ( 
      <div>
        {mappedList}
      </div>
     );
  }
}
 
export default List;