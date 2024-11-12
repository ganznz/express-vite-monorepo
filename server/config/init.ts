import { fileURLToPath } from "url";
import path from "path";
import { config } from "dotenv";

// load server env vars
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToEnv = "../.env"; // change if your relative path is different
config({ path: path.resolve(__dirname, pathToEnv) });
