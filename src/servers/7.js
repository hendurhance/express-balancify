// server7.js
import { createServer } from "../common.js";

const port = 5673;
const csvFilePath = "data/sample.csv";

createServer(port, csvFilePath);
