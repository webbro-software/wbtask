# 📄 WebBro Task Manager (CLI) - `wbtm`

![image](https://github.com/user-attachments/assets/de858b1f-1c47-40a3-93bc-6dae5f0c72a2)


A minimal, beautiful command-line task manager built with Node.js.  
Manage tasks directly from your terminal using simple commands.

---

## ✨ Features

- ➕ Add new tasks
- 📋 List all tasks in a clean table
- ✅ Mark tasks as completed
- ✏️ Update task text by ID
- ❌ Delete a specific task
- 🧹 Clear all tasks
- 📊 Show a dashboard view
- 💾 JSON-based local storage (no DB required)

---

## 📦 Installation

```bash
git clone https://github.com/webbro-software/wbtm.git
cd wbtm
npm install
npm link
```

> After `npm link`, you can use `wbtm` globally in your terminal.

> 🔧 If you're on Windows, ensure this is in your PATH:
>
> `export PATH=$PATH:/c/Users/ACER_NITRO/AppData/Roaming/npm`

---

## 🚀 Usage

```bash
wbtm <command> [options]
```

### ✅ Commands

| Command                       | Description             |
| ----------------------------- | ----------------------- |
| `wbtm add "Task content"`     | Add a new task          |
| `wbtm list`                   | List all tasks          |
| `wbtm complete <id>`          | Mark a task as complete |
| `wbtm update <id> "new text"` | Update a task           |
| `wbtm delete <id>`            | Delete a task           |
| `wbtm clear`                  | Delete all tasks        |
| `wbtm dashboard`              | Show a visual dashboard |
| `wbtm help`                   | Show help info          |

---

## 🧪 Example

```bash
wbtm add "Learn Node.js"
wbtm list
wbtm complete 1750682171849
wbtm update 1750682171849 "Master Node.js"
wbtm delete 1750682171849
wbtm clear
```

---

## 📁 Folder Structure

```
wbtm/
├── bin/                  # CLI entry point
│   └── wbtm.js
├── src/
│   ├── commands/         # CLI command implementations
│   ├── core/             # Business logic
│   ├── data/             # JSON storage + repository layer
│   ├── utils/            # Helpers (e.g., ID generation)
│   ├── config/           # Paths and config
│   └── index.js          # Command router
├── package.json
```

---

## 📄 License

[MIT](./LICENSE)
