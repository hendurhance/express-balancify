
// server6.js
import { createServer } from "../common.js";

const port = 5573;
const csvFilePath = "data/sample.csv";

createServer(port, csvFilePath);
