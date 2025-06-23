import { addTaskCommand } from "./commands/addTask.js";
import { listTasksCommand } from "./commands/listTasks.js";
import { clear, removeTaskCommand } from "./commands/removeTask.js";

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
      console.log("complete");
      break;
    case "list":
      listTasksCommand();
      break;
    case "--help":
      console.log("Hello");
      break;
    default:
      console.log("❌ Unknown command");
  }
};

export default handleCommand;
