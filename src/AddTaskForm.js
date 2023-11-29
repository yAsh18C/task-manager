import React, { useState } from 'react';

const AddTaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [priority, setPriority] = useState('low');

  const handleAddTask = () => {
    if (taskName.trim() === '') {
      alert('Task name is required!');
      return;
    }

    const newTask = {
      id: new Date().getTime(),
      name: taskName,
      description: taskDescription,
      priority,
      completed: false,
    };

    onAddTask(newTask);
    setTaskName('');
    setTaskDescription('');
    setPriority('low');
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form>
        <label>
          Task Name:
          <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
        </label>
        <label>
          Task Description:
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          ></textarea>
        </label>
        <label>
          Priority:
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <button type="button" onClick={handleAddTask}>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTaskForm;
