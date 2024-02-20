import React from "react";

function Task({tasks,  onTaskFormDelete}) {
  return (
    <div className="task">
      <div className="label">{tasks.category}</div>
      <div className="text">{tasks.text}</div>
      <button className="delete" onClick={() => onTaskFormDelete(tasks)}>X</button>
    </div>
  );
}

export default Task;
