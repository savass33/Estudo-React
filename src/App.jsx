import Tasks from "./components/tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "Finalizar curso React",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar ingles",
      description: "Verbo to be",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskID) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskID) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Task Manager
        </h1>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
      </div>
    </div>
  );
}

export default App;
