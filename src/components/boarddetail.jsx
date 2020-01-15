import React from 'react';
import BoardTitle from './boarddetail/boardtitle'
import TaskGroup from './boarddetail/taskgroup'
import '../styles/detail-style.css'

function BoardDetail(props) {
  return(
    <div className="boardDetail">
      <BoardTitle title="props.board.title" />
      <section className="taskGroupsContainer">
        <TaskGroup name="props.taskGroup" />
      </section>
    </div>
  )
}

export default BoardDetail;
