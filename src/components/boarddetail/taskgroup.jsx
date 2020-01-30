import React from 'react';
import PropTypes from 'prop-types';
import TaskCard from './taskcard';
import TaskCreationForm from './taskcreationform';
import {Store} from '../store';

const API_URL = process.env.REACT_APP_API_URL;

function TaskGroup(props) {
  const {state, dispatch} = React.useContext(Store);
  const {tasks} = state;
  const currentTasks = tasks.filter(e => e.taskGroupId === props.id)
  return (
    <section className="taskGroup">
      <h2 className="groupName">{props.name}</h2>
      <TaskCreationForm taskGroupId={props.id}/>
      {currentTasks.map(task => {
        return <TaskCard key={task.id} id={task.id} name={task.name}/>
      })}
    </section>
  );
}
TaskGroup.propTypes = {
  name: PropTypes.string,
}

export default TaskGroup;
