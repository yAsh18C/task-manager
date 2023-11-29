// EditTaskForm.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditTaskForm = ({ tasks, onEditTask }) => {
  const { id } = useParams();
  const [editedTask, setEditedTask] = useState({});

  useEffect(() => {
    const taskToEdit = tasks.find((task) => task.id === parseInt(id));
    setEditedTask(taskToEdit || {});
  }, [id, tasks]);

  const handleEditTask = () => {
    onEditTask(editedTask);
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <form>
        <label>
          Task Name:
          <input
            type="text"
            value={editedTask.name || ''}
            onChange={(e) => setEditedTask({ ...editedTask, name: e.target.value })}
          />
        </label>
        <label>
          Task Description:
          <textarea
            value={editedTask.description || ''}
            onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
          ></textarea>
        </label>
        <label>
          Priority:
          <select
            value={editedTask.priority || 'low'}
            onChange={(e) => setEditedTask({ ...editedTask, priority: e.target.value })}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <button type="button" onClick={handleEditTask}>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditTaskForm;
