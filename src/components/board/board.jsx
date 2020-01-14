import React from 'react'
import BoardCard from './boardcard'

function Board(props) {
  const boards = [
    {id: 1, name: "test"},
    {id: 2, name: "hoge"}
  ]
  return(
    <div className="board">
      <BoardCard new={true} boardName="" />
      {boards.map((board)=>{ return <BoardCard new={false} boardName={board.name}/>})}
    </div>
  )
}

export default Board;
