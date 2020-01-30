import React from 'react';
import PropTypes from 'prop-types';
import BoardDetailContainer from './boarddetail/boarddetailcontainer';
import '../styles/detail-style.css';

function BoardDetail(props) {
  return (
    // boardIdのバケツリレーをContextに寄せたい
    <BoardDetailContainer boardId={props.boardId} />
  );
}

BoardDetail.propTypes = {
  boardId: PropTypes.string,
};
export default BoardDetail;
