import React, { useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const input = document.querySelector("input");
    const task = input.value.trim();
    input.value = "";
    if (task) {
      setTasks((tasks) => [...tasks, task]);
    }
  };

  const deleteTask = (indexToDelete) => {
    setTasks((tasks) => tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <label className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600">
        <input
          type="text"
          placeholder="Enter your task"
          className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />
        <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
          Enter your task
        </span>
      </label>
      <button
        onClick={addTask}
        className="mt-4 bg-black hover:bg-black-600 text-white px-2 rounded"
      >
        Add +
      </button>
      <ul className="mt-4 space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-cente p-2 rounded"
          >
            <span className="text-gray-900">{task}</span>
            <button
              onClick={() => deleteTask(index)}
              className="bg-red-500 hover:bg-red-600 text-white px-2 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
