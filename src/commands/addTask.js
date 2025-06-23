import { addTask } from "../core/taskService.js";

export function addTaskCommand(taskText) {
  if (!taskText.trim()) {
    console.log("⚠️ Please provide a task description.");
    return;
  }

  addTask(taskText);
  console.log(`✅ Task added: "${taskText}"`);
}
