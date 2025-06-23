const handleCommand = (cmd, args) => {
  switch (cmd) {
    case "add":
      console.log("add");
      break;
    case "remove":
      console.log("remove");
      break;
    case "complete":
      console.log("complete");
      break;
    case "list":
      console.log("list");
      break;
    default:
      console.log("❌ Unknown command");
  }
};

export default handleCommand;
