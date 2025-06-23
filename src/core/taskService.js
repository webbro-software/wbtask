import { generateId } from "../utils/idGenerator.js";
import { saveTask } from "../data/taskRepository.js";

const addTask = (text) => {
  const newTask = {
    id: generateId(),
    text,
    done: false,
  };

  saveTask(newTask);
};

export { addTask };
