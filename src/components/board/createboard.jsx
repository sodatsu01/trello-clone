import React from 'react';
import '../../styles/createboard.css';
import {Store} from '../store';

const API_URL = process.env.REACT_APP_API_URL;

function CreateBoard(props) {
  const {state, dispatch} = React.useContext(Store);
  const [name, setName] = React.useState("");

  const clickCancel = () => dispatch({
    type: 'CLICK_CANCEL',
  });

  const clickCreate = async (e) => {
    const id = state.boards.length + 1
    const data = {id: id, name: name}
    const url = new URL("boards", API_URL)
    await fetch(url, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    // ホントはここでpostの結果によるエラー処理
    await dispatch({
      type: 'CREATE_BOARD',
      payload: data,
    })
  }
  return (
    <section className="creating-card">
      <section className="header">
        <h2 className="title">Creating a board</h2>
      </section>
      <section className="body">
        <h3 className="input-label">what shall we call the board?</h3>
        <form>
          <input 
            className="input-board-name" 
            type="text" 
            value={name}
            onChange={(e) => {setName(e.target.value)}}
          />
          <button className="cancel" onClick={() => clickCancel()}>
            cancel
          </button>
          <input className="submit" type="submit" value="CREATE" onClick={() => clickCreate()}/>
        </form>
      </section>
    </section>
  );
}

export default CreateBoard;
