import React, { useState } from "react";

function NewTaskForm({CATEGORIES, onTaskFormSubmit}) {
  const [formValues, setFormValues] = useState({})
  
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormValues({
      ...formValues,
      [name] : value
    })
  }

  const options = CATEGORIES.map(category => {
    return <option key={category} onChange={handleChange}>{category}</option>
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    onTaskFormSubmit(formValues)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" id="category" onChange={handleChange}>
          {options.slice(1)}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
