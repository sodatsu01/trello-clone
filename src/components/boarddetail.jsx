import React from 'react';
import BoardTitle from './boarddetail/boardtitle';
import TaskGroup from './boarddetail/taskgroup';
import BoardDetailContainer from './boarddetail/boarddetailcontainer';
import '../styles/detail-style.css';

function BoardDetail(props) {
  return (
    <BoardDetailContainer boardId={props.boardId} />
  );
}

export default BoardDetail;
