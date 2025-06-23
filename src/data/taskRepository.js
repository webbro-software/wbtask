import fs from "fs";
import { TASKS_PATH } from "../config/paths.js";

export function saveTask(task) {
  let tasks = [];

  if (fs.existsSync(TASKS_PATH)) {
    const content = fs.readFileSync(TASKS_PATH, "utf-8").trim();
    if (content) {
      try {
        tasks = JSON.parse(content);
      } catch (err) {
        console.error(
          "❌ Failed to parse tasks.json. Resetting to empty list."
        );
        tasks = [];
      }
    }
  }

  tasks.push(task);

  fs.writeFileSync(TASKS_PATH, JSON.stringify(tasks, null, 2), "utf-8");
}
