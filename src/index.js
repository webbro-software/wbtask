import { addTaskCommand } from "./commands/addTask.js";
import { listTasksCommand } from "./commands/listTasks.js";

const handleCommand = (cmd, args) => {
  switch (cmd) {
    case "add":
      addTaskCommand(args.join(" "));
      break;
    case "remove":
      console.log("remove");
      break;
    case "complete":
      console.log("complete");
      break;
    case "list":
      listTasksCommand();
      break;
    default:
      console.log("❌ Unknown command");
  }
};

export default handleCommand;
