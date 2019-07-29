import React, { Component } from 'react';

class Add extends Component {
  state = { 
    input: ''
   }
  render() { 
    return ( 
      <div>
        <input type="text" value={this.state.input} />
        <button>add</button>
      </div>
     );
  }
}
 
export default Add;