import React from 'react';
import '../../styles/createboard.css';

function CreateBoard(props){
  return(
 <session class="creating-card">
   <article class="header">
     <h2 class="title">Creating a board</h2>
   </article>
   <article class="body">
     <h3 class="input-label">what shall we call the board?</h3>
     <form action="" method="post">
       <input class="input-board-name" type="text"/>
         <input class="cancel" type="button" value="cancel"/>
         <input class="submit" type="button" value="CREATE"/>
     </form>
   </article>
 </session>
  )
}

export default CreateBoard
