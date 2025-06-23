import fs from "fs";
import { TASKS_PATH } from "../config/paths.js";

const saveTask = (task) => {
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
};

const loadTasks = () => {
  if (!fs.existsSync(TASKS_PATH)) return [];

  const content = fs.readFileSync(TASKS_PATH, "utf-8").trim();
  if (!content) return [];

  try {
    return JSON.parse(content);
  } catch (err) {
    console.error("❌ Invalid JSON in task file.");
    return [];
  }
};

const writeFileSync = (tasks) => {
  fs.writeFileSync(TASKS_PATH, JSON.stringify(tasks, null, 2), "utf-8");
};

export { saveTask, loadTasks, writeFileSync };
