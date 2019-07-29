import React, { Component } from 'react';
import store, {REMOVE_FROM_LIST} from '../store'

class List extends Component {
  constructor(){
    super()
    const reduxState = store.getState()
    this.state = { 
      list: reduxState.todo
     }
  }

  componentDidMount(){
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        list: reduxState.todo
      })
    })
  }

  remove(index) {
    store.dispatch({
      type: REMOVE_FROM_LIST,
      payload: index
    })
  }

  render() { 
    let mappedList = this.state.list.map( (item, index) => {
      return (
          <h4 onDoubleClick={() => this.remove(index)} key={item} >{item}</h4>

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