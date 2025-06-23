import { showVersion } from "../utils/package.js";

const help = () => {
  console.log(`
██╗    ██╗██████╗ ████████╗███╗   ███╗
██║    ██║██╔══██╗╚══██╔══╝████╗ ████║
██║ █╗ ██║██████╔╝   ██║   ██╔████╔██║
██║███╗██║██╔══██╗   ██║   ██║╚██╔╝██║
╚███╔███╔╝██████╔╝   ██║   ██║ ╚═╝ ██║
 ╚══╝╚══╝ ╚═════╝    ╚═╝   ╚═╝     ╚═╝`);

  showVersion();

  console.log();

  console.log("🧠 WebBro Task CLI - Simple task manager via terminal\n");

  console.log("Usage:");
  console.log("  wbtask <command> [options]\n");

  console.log("Commands:");
  console.log("  add <task>             ➕  Add a new task");
  console.log("  list                   📋  List all tasks");
  console.log("  complete <id>          ✅  Mark a task as completed");
  console.log("  delete <id>            ❌  Delete a task by ID");
  console.log("  update <id> <text>     ✏️   Update task text");
  console.log("  clear                  🧹  Remove all tasks");
  console.log("  help                   📖  Show this help menu");
  console.log("  dashboard              📊  Show visual task dashboard\n");

  console.log("Examples:");
  console.log('  wbtask add "Learn Node.js"');
  console.log("  wbtask complete 1750682171849");
  console.log('  wbtask update 1750682171849 "Refactor CLI"');
  console.log("  wbtask delete 1750682171849");
};

export default help;
