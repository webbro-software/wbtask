import { removeTask } from "../core/taskService.js";
import { loadTasks, saveTask, writeFileSync } from "../data/taskRepository.js";

const removeTaskCommand = (id) => {
  if (!id) return console.log("⚠️ Provide task ID to remove.");
  removeTask(id);
  console.log(`🗑️ Task #${id} removed.`);
};

const clear = () => {
  writeFileSync([]);
};

export { clear, removeTaskCommand };
