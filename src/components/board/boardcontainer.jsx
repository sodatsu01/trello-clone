import React from 'react';
import BoardCard from './boardcard';
import CreateBoard from './createboard';
import {Store} from '../store';

function BoardContainer(props) {
  const {state, dispatch} = React.useContext(Store);
  const boards = [
    {id: 1, name: 'test'},
    {id: 2, name: 'hoge'},
  ];
  const showNewBoardCard = () => {
    return state.isOpen ? <CreateBoard /> : <BoardCard new={true} />
  }
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
