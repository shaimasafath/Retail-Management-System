// backend/src/controllers/salesController.js
const { getFilteredSales } = require("../services/salesService");

function parseArrayParam(raw) {
  if (!raw) return null;
  if (Array.isArray(raw)) return raw;
  return String(raw)
    .split(",")
    .map((v) => v.trim())
    .filter(Boolean);
}

function getSales(req, res) {
  try {
    const {
      search,
      region,
      gender,
      ageMin,
      ageMax,
      category,
      tag,
      paymentMethod,
      dateFrom,
      dateTo,
      sortBy,
      sortOrder,
      page,
    } = req.query;

    const options = {
      search: search || "",
      regions: parseArrayParam(region),
      genders: parseArrayParam(gender),
      ageMin: ageMin ? Number(ageMin) : null,
      ageMax: ageMax ? Number(ageMax) : null,
      categories: parseArrayParam(category),
      tags: parseArrayParam(tag),
      paymentMethods: parseArrayParam(paymentMethod),
      dateFrom: dateFrom || null,
      dateTo: dateTo || null,
      sortBy: sortBy || null,
      sortOrder: sortOrder || null,
      page: page ? Number(page) : 1,
    };

    // Basic validation for numeric ranges (edge cases)
    if (options.ageMin != null && options.ageMax != null && options.ageMin > options.ageMax) {
      return res.status(400).json({ message: "Invalid age range: min > max" });
    }

    const { items, meta } = getFilteredSales(options);

    return res.json({
      data: items,
      meta,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { getSales };
