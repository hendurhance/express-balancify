// server1.js
import { createServer } from "../common.js";

const port = 5073;
const csvFilePath = "data/sample.csv";

createServer(port, csvFilePath);
