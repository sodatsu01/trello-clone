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
    // state.boards.length && console.log(state.boards.slice(-1)[0].id)
  })

  const {boards} = state;

  const fetchBoardAction = async () =>{
    // [{"id":1,"name":"test","task_groups":"1,2"},{"id":2,"name":"hoge","task_groups":3}]/
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
      <div tabindex="-1" className="board" role="group">
        {showNewBoardCard()}
        {boards.map((board)=>{
          return <BoardCard key={board.id} new={false} boardName={board.name}/>;
        })}
      </div>
  );
}

export default BoardContainer;
