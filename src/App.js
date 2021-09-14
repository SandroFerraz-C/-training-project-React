import React, { useState } from "react";
import Tasks from "./components/Tasks";

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

  return (
    <>
      <div className="container">
        <Tasks tasks={tasks} />
      </div>
    </>
  );
};
export default App;
