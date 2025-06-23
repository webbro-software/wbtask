import { generateId } from "../utils/idGenerator.js";
import { loadTasks, saveTask, writeFileSync } from "../data/taskRepository.js";

const addTask = (text) => {
  const newTask = {
    id: generateId(),
    text,
    done: false,
  };

  saveTask(newTask);
};

const removeTask = (id) => {
  const tasks = loadTasks();
  const updated = tasks.filter((task) => task != id);
  writeFileSync(updated);
};

const updateTask = (id, newText) => {
  const tasks = loadTasks();
  const updated = tasks.map((task) =>
    task.id === id ? { ...task, text: newText } : task
  );
  writeFileSync(updated);
};

const completeTask = (id) => {
  const tasks = loadTasks();
  const updated = tasks.map((task) =>
    task.id === id ? { ...task, done: !task.done } : task
  );
  writeFileSync(updated);
};

export { addTask, removeTask, updateTask, completeTask };
