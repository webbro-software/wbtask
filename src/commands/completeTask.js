import { completeTask } from "../core/taskService.js";

const completeTaskCommand = (id) => {
  if (!id) return console.log("⚠️ Provide task ID to complete.");
  completeTask(id);
  console.log(`✅ Task #${id} marked as complete.`);
};

export { completeTaskCommand };
