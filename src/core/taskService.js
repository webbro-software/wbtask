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

export { addTask, removeTask };
