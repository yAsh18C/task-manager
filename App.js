import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import EditTaskForm from './EditTaskForm';
// css file
import './App.css';


const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const editTask = (editedTask) => {
    const updatedTasks = tasks.map((task) => (task.id === editedTask.id ? editedTask : task));
    setTasks(updatedTasks);
  };

  const path = window.location.pathname;

  let content;
  if (path === '/add') {
    content = <AddTaskForm onAddTask={addTask} />;
  } else if (path.startsWith('/edit/')) {
    const taskId = parseInt(path.substring('/edit/'.length), 10);
    const task = tasks.find((task) => task.id === taskId);
    content = <EditTaskForm task={task} onEditTask={editTask} />;
  } else {
    content = <TaskList tasks={tasks} onToggleComplete={toggleComplete} onDelete={deleteTask} />;
  }

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/add">Add Task</a>
          </li>
        </ul>
      </nav>
      {content}
    </div>
  );
};


export default App;
