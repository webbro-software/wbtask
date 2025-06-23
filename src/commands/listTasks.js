import { loadTasks } from "../data/taskRepository.js";

export function listTasksCommand() {
  const tasks = loadTasks();

  if (tasks.length === 0) {
    console.log("📭 No tasks found.");
    return;
  }

  console.log();

  for (let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. [${tasks[i].done ? "✔" : " "}] ${tasks[i].text}`);
  }
}
