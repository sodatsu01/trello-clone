import React from 'react';
import PropTypes from 'prop-types';
import {Store} from '../store';


function BoardTitle(props) {
  const {state} = React.useContext(Store);
  return (
    <div>
      <h2 className="boardTitle">{state.currentBoard.name}</h2>
    </div>
  );
}

BoardTitle.propTypes = {
  title: PropTypes.string,
};
export default BoardTitle;
