import React from 'react'
import BoardCard from './boardcard'

function Board(props) {
  return(
    <div className="board">
      <BoardCard new={true} boardName="" />
    </div>
  )
}

export default Board;
