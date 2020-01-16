import React from 'react';
import PropTypes from 'prop-types';

function TaskCard(props) {
  return (
    <h3 className="taskCard">{props.name}</h3>
  );
}

TaskCard.propTypes = {
  name: PropTypes.string,
};
export default TaskCard;
