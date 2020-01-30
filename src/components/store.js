import React from 'react';

export const Store = React.createContext();
const initialState = {
  isOpen: false, 
  boards: [],
  currentBoard: {},
  taskGroups: [],
  tasks: []
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_BOARDS':
      return {...state, boards: action.payload};
    case 'CLICK_NEW_BOARD':
      return {...state, isOpen: !state.isOpen};
    case 'CLICK_CANCEL':
      return {...state, isOpen: !state.isOpen};
    case 'CREATE_BOARD':
      return {...state, isOpen: !state.isOpen, boards: [...state.boards, action.payload]};
    case 'SET_CURRENT_BOARD':
      return {...state, currentBoard: action.payload};
    case 'FETCH_TASK_GROUPS':
      return {...state, taskGroups: action.payload};
    case 'CREATE_TASK_GROUP':
      return {...state, taskGroups: [...state.taskGroups, action.payload]};
    case 'FETCH_TASKS':
      return {...state, tasks: action.payload};
    case 'CREATE_TASK':
      return {...state, tasks: [...state.tasks, action.payload]};
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = {state, dispatch};
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
