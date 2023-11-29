import React from 'react';
import { Link } from 'react-router-dom';

const TaskList = ({ tasks, onToggleComplete, onDelete }) => {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.name}
            </span>
            <button onClick={() => onDelete(task.id)}>Delete</button>
            <Link to={`/edit/${task.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
