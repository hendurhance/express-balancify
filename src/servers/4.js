// server4.js
import { createServer } from "../common.js";

const port = 5373;
const csvFilePath = "data/sample.csv";

createServer(port, csvFilePath);
