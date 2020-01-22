import React from 'react';
import '../../styles/createboard.css';
import {Store} from '../store';

function CreateBoard(props) {
  const {dispatch} = React.useContext(Store);
  const clickCancel = () => dispatch({
    type: 'CLICK_CANCEL',
  });
  return (
    <session className="creating-card">
      <article className="header">
        <h2 className="title">Creating a board</h2>
      </article>
      <article className="body">
        <h3 className="input-label">what shall we call the board?</h3>
        <form action="" method="post">
          <input className="input-board-name" type="text"/>
          <button className="cancel" onClick={() => clickCancel()}>
            cancel
          </button>
          <input className="submit" type="button" value="CREATE"/>
        </form>
      </article>
    </session>
  );
}

export default CreateBoard;
