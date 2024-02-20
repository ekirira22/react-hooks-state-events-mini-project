import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [filteredTasks, setFilteredTasks] = useState(TASKS)
  const [tasks, setTasks] = useState(TASKS)

    //handle Filtering

  const handleFilter = (category) => {
    if(category !== "All"){
      const filtered = tasks.filter(task => {
        return task.category === category
      })
      setFilteredTasks(filtered)
    }else{
      setFilteredTasks(tasks)
    }
  }  

  const onTaskFormSubmit = (values) => {
    setTasks([...tasks, values])
  } 

  const onTaskFormDelete = (value) => {
    const remainingTasks = tasks.filter((task => {
      return task.text !== value.text
    }))
    setTasks(remainingTasks)
  } 
  
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter CATEGORIES={CATEGORIES} handleFilter={handleFilter}/>
      <NewTaskForm CATEGORIES={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList TASKS={filteredTasks}  onTaskFormDelete={onTaskFormDelete}/>
    </div>
  );
}

export default App;
