// server9.js
import { createServer } from "../common.js";

const port = 5873;
const csvFilePath = "data/sample.csv";

createServer(port, csvFilePath);
