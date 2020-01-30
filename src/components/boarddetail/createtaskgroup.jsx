import React from 'react';
import PropTypes from 'prop-types';
import {Store} from '../store';

const API_URL = process.env.REACT_APP_API_URL;

function CreateTaskGroup(props) {
  const {state, dispatch} = React.useContext(Store);
  const handleTaskGroupCreation = async (e) =>{
    e.preventDefault();
    const name = e.target.newTaskGroupName.value;
    const id = state.taskGroups.length + 1;
    const {boardId} = props;
    const data = {id: id, name: name, boardId: boardId};
    const url = new URL('taskgroups', API_URL);
    e.target.newTaskGroupName.value = '';
    await fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    await dispatch({
      type: 'CREATE_TASK_GROUP',
      payload: data,
    });
    return false;
  };
  return (
    <section className="taskGroup">
      <form onSubmit={handleTaskGroupCreation}>
        <input
          className="newTask"
          type='text'
          id='newTaskGroupName'
        />
      </form>
    </section>
  );
}

CreateTaskGroup.propTypes = {
  boardId: PropTypes.string,
};
export default CreateTaskGroup;
