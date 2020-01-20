import React from 'react';

export const Store = React.createContext();
const initialState = {
  isOpen: true, //local stateにしたい
  boards: [],
}

function reducer(state, action){
  switch (action.type) {
    case 'FETCH_BOARDS':
      return{...state, boards: {id: 1, name: 'test'}};
    case 'CLICK_NEW_BOARD':
      return {...state, isOpen: !state.isOpen};
    default:
      return state;
  }
}

export function StoreProvider(props){
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = {state, dispatch}
  return <Store.Provider value={value}>{props.children}</Store.Provider> 
}
