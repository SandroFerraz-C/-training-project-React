import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid'

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import "./App.css";

const App = () => {
  let [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Logica de Programação",
      completed: true,
    },
    {
      id: "2",
      title: "Estudar React",
      completed: false,
    },
  ]);

  const handleTaskAddition = (taskTitle) => {
      const newTask = [ ...tasks, {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTask)
  };

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks} />
      </div>
    </>
  );
};
export default App;
