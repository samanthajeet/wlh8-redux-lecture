import {createStore} from 'redux'

//Initial State
const initialState = {
  todo: ['Call Mom', 'Binge Derry Girls']
}

//Action Constants
export const ADD_TO_LIST = 'ADD_TO_LIST'
export const REMOVE_FROM_LIST = 'REMOVE_FROM_LIST'


//Reducer
function reducer(state = initialState, action){
  switch(action.type){
    case ADD_TO_LIST:
      var newList = [...state.todo, action.payload]
      return {...state, todo: newList}
    case REMOVE_FROM_LIST: 
    // eslint-disable-next-line
      var newList = [...state.todo]
      newList.splice(action.payload, 1)
      return {...state, todo: newList}
    default:
      return state
  }
}

// Export

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__
const store = createStore(reducer, composeEnhancers())
export default store