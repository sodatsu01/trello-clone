import React from 'react'

function BoardCard(props) {
  return (
    <section className="card">
      <article className={props.new ? "new" : "created"}>
        <h3 className="card-content">{props.boardName || "new board"}</h3>
      </article>
    </section>
  )
}
export default BoardCard;
