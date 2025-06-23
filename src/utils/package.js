import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getPackageJson = () => {
  const file = path.join(__dirname, "../../package.json");
  return JSON.parse(fs.readFileSync(file, "utf-8"));
};

const showVersion = () => {
  const { version } = getPackageJson();
  console.log();
  console.log(`v${version}`);
};

export { getPackageJson, showVersion };
