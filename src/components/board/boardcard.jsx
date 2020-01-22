import React from 'react';
import PropTypes from 'prop-types';
import {Link} from '@reach/router';

  function BoardCard(props) {
    return (
      <Link className="card" to={'board/'+props.id}>
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
