import React from 'react';
import PropTypes from 'prop-types';
import {Store} from '../store';

const API_URL = process.env.REACT_APP_API_URL;

function TaskCreationForm(props) {
  const {state, dispatch} = React.useContext(Store);
  const handleTaskCreation = async (e) =>{
    e.preventDefault();
    const name = e.target.newTaskName.value;
    const id = state.tasks.length + 1;
    const {taskGroupId}= props;
    const data = {id: id, name: name, taskGroupId: taskGroupId};
    const url = new URL('tasks', API_URL);
    e.target.newTaskName.value = '';
    await fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    await dispatch({
      type: 'CREATE_TASK',
      payload: data,
    });
    return false;
  };
  return (
    <form onSubmit={handleTaskCreation}>
      <input className="newTask" type="text" id="newTaskName" />
    </form>
  );
}

TaskCreationForm.propTypes = {
  taskGroupId: PropTypes.string,
};
export default TaskCreationForm;
