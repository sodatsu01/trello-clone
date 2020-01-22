import React from 'react';
import BoardCard from './boardcard';
import CreateBoard from './createboard';
import NewBoardCard from './newboardcard';
import {Store} from '../store';

function BoardContainer(props) {
  const {state, dispatch} = React.useContext(Store);
  React.useEffect(() => {
    state.boards.length === 0 && fetchBoardAction();
  })
  const {boards} = state;
  const fetchBoardAction = async () =>{
    // 後ほどRails?サーバサイドと接続する
    const data = [{id: 1, name: 'test'}, {id:2, name: 'test2'}]
    return dispatch({
      type: 'FETCH_BOARDS',
      payload: data,
    })
  }
  const showNewBoardCard = () => {
    return state.isOpen ? <CreateBoard /> : <NewBoardCard />;
  };
  return (
    <React.Fragment>
      <div className="board">
        {showNewBoardCard()}
        {boards.map((board)=>{
          return <BoardCard key={board.id} new={false} boardName={board.name}/>;
        })}
      </div>
    </React.Fragment>
  );
}

export default BoardContainer;
