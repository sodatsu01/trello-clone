import React from 'react';
import PropTypes from 'prop-types';
import {Link} from '@reach/router';
import {Store} from '../store';

function BoardCard(props) {
  const {state, dispatch} = React.useContext(Store);
  const {id} = props
  const board = state.boards.find(
    b => b.id === id
  )

  return (
    <Link 
      className="card" 
      to={`/boards/${id}`}
      onClick={() => {
        return dispatch({
          type: 'SET_CURRENT_BOARD',
          payload: board
        })
      }}
    >
      <section className="created">
        <h3 className="card-content">{props.boardName}</h3>
    </section>
  </Link>
);
}

BoardCard.propTypes = {
  boardName: PropTypes.string,
};
export default BoardCard;
