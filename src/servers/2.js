// server2.js
import { createServer } from "../common.js";

const port = 5173;
const csvFilePath = "data/sample.csv";

createServer(port, csvFilePath);
