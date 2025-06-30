import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks({ tasks, onTaskClick, onTrashClick }) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`text-left w-full text-slate-400 p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button className="text-slate-400 p-2 rounded-md">
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onTrashClick(task.id)}
            className="text-slate-400 p-2 rounded-md"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
