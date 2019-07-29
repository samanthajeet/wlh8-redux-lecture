import {createStore} from 'redux'

//Initial State
const initialState = {
  todo: ['Practice the Piano', 'Make Dinner']
}

//Action Constants
export const ADD_TO_LIST = 'ADD_TO_LIST'


//Reducer
function reducer(state = initialState, action){
  switch(action.type){
    case ADD_TO_LIST:
      
    default:
      return state
  }
}

// Export
export default createStore(reducer)