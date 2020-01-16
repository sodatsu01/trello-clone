import React from 'react';
import PropTypes from 'prop-types';

function BoardTitle(props) {
  return (
    <div>
      <h2 className="boardTitle">{props.title}</h2>
    </div>
  );
}

BoardTitle.propTypes = {
  title: PropTypes.string,
};
export default BoardTitle;
