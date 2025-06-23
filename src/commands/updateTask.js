import { updateTask } from "../core/taskService.js";

const updateTaskCommand = (id, newText) => {
  if (!id || !newText) return console.log("⚠️ Provide task ID and new text.");

  updateTask(id, newText);

  console.log();

  console.log(`✏️  Task #${id} updated.`);
};

export { updateTaskCommand };
