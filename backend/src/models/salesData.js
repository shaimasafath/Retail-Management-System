// backend/src/models/salesData.js
const fs = require("fs");
const path = require("path");

let salesData = [];

function parseNumber(value) {
  const num = Number(value);
  return Number.isNaN(num) ? null : num;
}

function parseDate(value) {
  const d = new Date(value);
  return isNaN(d.getTime()) ? null : d;
}

function loadSalesData() {
  const csvPath = path.join(__dirname, "..", "..", "data", "truestate_assignment_dataset.csv");
  const raw = fs.readFileSync(csvPath, "utf-8");
  const [headerLine, ...lines] = raw.split(/\r?\n/).filter(Boolean);
  const headers = headerLine.split(",");

  salesData = lines.map((line) => {
    const cols = line.split(",");
    const row = {};
    headers.forEach((h, idx) => {
      row[h.trim()] = cols[idx] ? cols[idx].trim() : "";
    });

    // Normalize / cast important fields based on assignment
    return {
      ...row,
      Age: parseNumber(row["Age"]),
      Quantity: parseNumber(row["Quantity"]),
      PricePerUnit: parseNumber(row["Price per Unit"]),
      DiscountPercentage: parseNumber(row["Discount Percentage"]),
      TotalAmount: parseNumber(row["Total Amount"]),
      FinalAmount: parseNumber(row["Final Amount"]),
      Date: parseDate(row["Date"]),
    };
  });
}

function getSalesData() {
  if (!salesData.length) {
    loadSalesData();
  }
  return salesData;
}

module.exports = { getSalesData };
