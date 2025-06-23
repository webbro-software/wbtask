import { loadTasks } from "../data/taskRepository.js";

export function listTasksCommand() {
  const tasks = loadTasks();

  if (tasks.length === 0) {
    console.log("📭 No tasks found.");
    return;
  }

  console.log("\n📋 ALL TASK");

  console.log();

  for (let i = 0; i < tasks.length; i++) {
    const status = tasks[i].done ? "✔️  Done" : "❌ Pending";
    const space = " ".repeat(5);
    console.log(`${i + 1}. ${tasks[i].text}`);
    console.log(`${space}ID: ${tasks[i].id}`);
    console.log(`${space}Status: ${status}`);
    console.log();
  }
}
