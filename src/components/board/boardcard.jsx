import React from 'react';
import PropTypes from 'prop-types';

function BoardCard(props) {
  return (
    <section className="card">
      <article className={props.new ? 'new' : 'created'}>
        <h3 className="card-content">{props.boardName || 'new board'}</h3>
      </article>
    </section>
  );
}

BoardCard.propTypes = {
  new: PropTypes.bool,
  boardName: PropTypes.string,
};
export default BoardCard;
