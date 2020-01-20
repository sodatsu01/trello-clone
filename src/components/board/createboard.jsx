import React from 'react';
import '../../styles/createboard.css';
import {Store} from '../store';

function CreateBoard(props){
  const {state, dispatch} = React.useContext(Store);
  const clickCancel = () => dispatch({
    type: 'CLICK_CANCEL',
  })
  return(
 <session class="creating-card">
   <article class="header">
     <h2 class="title">Creating a board</h2>
   </article>
   <article class="body">
     <h3 class="input-label">what shall we call the board?</h3>
     <form action="" method="post">
       <input class="input-board-name" type="text"/>
       <button className="cancel" onClick={() => clickCancel()}>cancel</button>
         <input class="submit" type="button" value="CREATE"/>
     </form>
   </article>
 </session>
  )
}

export default CreateBoard
