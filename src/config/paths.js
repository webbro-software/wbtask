import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const TASKS_PATH = path.resolve(__dirname, "../data/tasks.json");
