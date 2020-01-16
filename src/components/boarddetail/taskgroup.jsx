import React from 'react';
import PropTypes from 'prop-types';
import TaskCard from './taskcard';
import TaskCreationForm from './taskcreationform';

function TaskGroup(props) {
  return (
    <section className="taskGroup">
      <h2 className="groupName">props.name</h2>
      <TaskCreationForm />
      <TaskCard name='test' completed={false} />
    </section>
  );
}

export default TaskGroup;
