import { addTaskCommand } from "./commands/addTask.js";
import { completeTaskCommand } from "./commands/completeTask.js";
import help from "./commands/help.js";
import { listTasksCommand } from "./commands/listTasks.js";
import { clear, removeTaskCommand } from "./commands/removeTask.js";
import { updateTaskCommand } from "./commands/updateTask.js";

const handleCommand = (cmd, args) => {
  switch (cmd) {
    case "add":
      addTaskCommand(args.join(" "));
      break;
    case "remove":
      removeTaskCommand(parseInt(args[0]));
      break;
    case "clear":
      clear(parseInt(args[0]));
      break;
    case "complete":
      completeTaskCommand(parseInt(args[0]));
      break;
    case "update":
      updateTaskCommand(parseInt(args[0]), args.slice(1).join(" "));
      break;
    case "list":
      listTasksCommand();
      break;
    case "help":
      help();
      break;
    default:
      console.log("❌ Unknown command, try `wbtm help`");
  }
};

export default handleCommand;
