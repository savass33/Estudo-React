import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Title from "./components/Title";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // CHAMAR A API PARA PEGAR AS TAREFAS (OPCIONAL)
  /*   useEffect(() => {
    const fetchTasks = async () => {
      // CHAMAR A API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        }
      );

      // PEGAR OS DADOS QUE ELA RETORNA
      const data = await response.json();
      console.log(data);

      // ARMAZENAR OS DADOS NO STATE
      setTasks(data);
    };
    fetchTasks();
  }, []); */

  function onTaskClick(taskID) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskID) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onTrashClick(taskID) {
    const newTasks = tasks.filter((task) => task.id !== taskID);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Task Manager</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTrashClick={onTrashClick}
        />
      </div>
    </div>
  );
}

export default App;
