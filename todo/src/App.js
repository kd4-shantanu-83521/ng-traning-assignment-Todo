import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (title && description) {
      setTasks([...tasks, { title, description }]);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className="App container mt-5">
      <h1 className="text-center mb-4">My Todo</h1>

      <div className="todo-wrapper card p-4">
        {/* Input Section */}
        <div className="todo-input">
          {/* Title Input */}
          <div className="todo-input-item form-group mb-3">
            <label htmlFor="taskTitle">Title</label>
            <input
              type="text"
              className="form-control"
              id="taskTitle"
              placeholder="What's the task title?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Description Input */}
          <div className="todo-input-item form-group mb-3">
            <label htmlFor="taskDescription">Description</label>
            <input
              type="text"
              className="form-control"
              id="taskDescription"
              placeholder="What's the task description?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Add Task Button */}
          <div className="todo-input-item mb-4">
            <button type="button" className="btn btn-primary" onClick={handleAddTask}>
              Add
            </button>
          </div>

          {/* Todo and Completed Buttons */}
          <div className="btn-area mb-4 d-flex justify-content-between">
            <button className="btn btn-outline-secondary">Todo</button>
            <button className="btn btn-outline-success">Completed</button>
          </div>
        </div>

        {/* Todo List */}
        <div className="todo-list">
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <div key={index} className="todo-list-item card mb-2 p-3">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </div>
            ))
          ) : (
            <div className="alert alert-info">No tasks yet!</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
