// server3.js
import { createServer } from "../common.js";

const port = 5273;
const csvFilePath = "data/sample.csv";

createServer(port, csvFilePath);
