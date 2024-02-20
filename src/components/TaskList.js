import React from "react";
import Task from "./Task";

function TaskList({TASKS,  onTaskFormDelete}) {
  return (
    <div className="tasks">
      {TASKS.map(tasks => {
        return <Task key={tasks.text} tasks={tasks} onTaskFormDelete={onTaskFormDelete}/>
      })}
    </div>
  );
}

export default TaskList;
