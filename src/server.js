const express = require("express");
const multer = require("multer");
const xlsx = require("xlsx");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }

    try {
        const workbook = xlsx.read(req.file.buffer, { type: "buffer" });

        const sheetName = workbook.SheetNames[0];
        const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

        res.json({ data: sheetData });
    } catch (error) {
        res.status(500).json({ error: "Failed to process Excel file" });
    }
});

app.listen(3002, () => console.log("Server running on port 3000"));
