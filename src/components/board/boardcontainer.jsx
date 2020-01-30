import React from 'react';
import BoardCard from './boardcard';
import CreateBoard from './createboard';
import NewBoardCard from './newboardcard';
import {Store} from '../store';

const API_URL = process.env.REACT_APP_API_URL;

function BoardContainer(props) {
  const {state, dispatch} = React.useContext(Store);

  React.useEffect(() => {
    state.boards.length === 0 && fetchBoardAction();
  })

  const {boards} = state;

  const fetchBoardAction = async () =>{
    const url = new URL("boards", API_URL)
    const data = await fetch(url);
    const dataJSON = await data.json();
    return dispatch({
      type: 'FETCH_BOARDS',
      payload: dataJSON
    })
  }

  const showNewBoardCard = () => {
    return state.isOpen ? <CreateBoard /> : <NewBoardCard />;
  };

  return (
      <div className="board">
        {showNewBoardCard()}
        {boards.map((board)=>{
          return <BoardCard key={board.id} id={board.id} new={false} boardName={board.name}/>;
        })}
      </div>
  );
}

export default BoardContainer;
