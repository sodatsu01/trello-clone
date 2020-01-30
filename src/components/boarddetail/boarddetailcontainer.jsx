import React from 'react';
import BoardTitle from './boardtitle';
import TaskGroup from './taskgroup';
import CreateTaskGroup from './createtaskgroup';
import {Store} from '../store';

const API_URL = process.env.REACT_APP_API_URL;

function BoardDetailContainer(props) {
  const {state, dispatch} = React.useContext(Store);
  const fetchTaskGroups = async () => {
    const url = new URL('taskgroups', API_URL)
    const data =  await fetch(url);
    const dataJSON = await data.json();
    return dispatch({
      type: 'FETCH_TASK_GROUPS',
      payload: dataJSON,
    })
  }
  
  const fetchTasks = async () => {
    const url = new URL('tasks', API_URL)
    const data =  await fetch(url);
    const dataJSON = await data.json();
    return dispatch({
      type: 'FETCH_TASKS',
      payload: dataJSON,
    })
  }
  React.useEffect(() => {
    fetchTaskGroups().then(
    fetchTasks())
  }, [])

  const {taskGroups} = state;
  const currentTaskGroups = taskGroups.filter(e => e.boardId === props.boardId)
  return (
    <div className="boardDetail">
      <BoardTitle />
      <section className="taskGroupsContainer">
        {currentTaskGroups.map((tg) => {
          return <TaskGroup key={tg.id} id={tg.id} name={tg.name} />
        })}
        <CreateTaskGroup boardId={props.boardId}/>
      </section>
    </div>
  )
}

export default BoardDetailContainer;
