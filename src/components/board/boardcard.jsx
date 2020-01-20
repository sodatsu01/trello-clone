import React from 'react';
import PropTypes from 'prop-types';

function BoardCard(props) {
  return (
    <section className="card">
      <button className="created">
        <h3 className="card-content">{props.boardName}</h3>
      </button>
    </section>
  );
}

BoardCard.propTypes = {
  boardName: PropTypes.string,
};
export default BoardCard;
