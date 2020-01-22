import React from 'react';
import {Store} from '../store';

function NewBoardCard(props) {
  const {dispatch} = React.useContext(Store);
  const toggleIsOpen = () => dispatch({
    type: 'CLICK_NEW_BOARD',
    payload: '',
  });
  return (
    <section className="card">
      <button className="new" onClick={() =>toggleIsOpen()}>
        <h3 className="card-content">{'new board'}</h3>
      </button>
    </section>
  );
}

export default NewBoardCard;
