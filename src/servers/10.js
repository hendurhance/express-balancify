// server10.js
import { createServer } from "../common.js";

const port = 5973;
const csvFilePath = "data/sample.csv";

createServer(port, csvFilePath);
