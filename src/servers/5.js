// server5.js
import { createServer } from "../common.js";

const port = 5473;
const csvFilePath = "data/sample.csv";

createServer(port, csvFilePath);
