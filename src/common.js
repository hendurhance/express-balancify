// common.js
import express from "express";
import csv from "csvtojson";

const itemsPerPage = 100;

function createServer(port, csvFilePath) {
  const app = express();

  app.get("/", (req, res) => {
    res.json({
      server: `[Load Balancer] Server listening on port ${port}`,
      message: "Welcome to the Load Balancer! Please use the /api endpoint to access the data."
    });
  });

  app.get("/api", async (req, res) => {
    const page = parseInt(req.query.page, 10) || 1;
    console.log(`Page ${page} requested`);

    try {
      const csvRows = await csv({
        noheader: true,
        output: "csv"
      }).fromFile(csvFilePath);

      if (!csvRows || csvRows.length === 0) {
        return res.status(404).json({ error: "CSV file is empty or not found." });
      }

      const headers = getHeaders(csvRows[0]);

      // Convert CSV rows to JSON format including headers
      const json = csvRows.slice(1).map((row) => {
        const item = {};
        for (let j = 0; j < headers.length; j++) {
          item[headers[j].toLowerCase()] = row[j];
        }
        return item;
      });

      // Paginate the JSON array
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const paginatedJson = json.slice(startIndex, endIndex);

      res.setHeader("Content-Type", "application/json");
      res.json({
        server: `[Load Balancer] Server listening on port ${port}`,
        page,
        itemsPerPage,
        total: json.length,
        totalPages: Math.ceil(json.length / itemsPerPage),
        data: paginatedJson
      });
    } catch (error) {
      console.error("Error reading CSV:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    console.log(`Process PID: ${process.pid}`);
  });
}

function getHeaders(firstRow) {
  // Check if the first row looks like valid identifiers
  return firstRow.map((header) => header.trim());
}

export { createServer };
