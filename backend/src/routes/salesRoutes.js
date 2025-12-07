// backend/src/routes/salesRoutes.js
const express = require("express");
const router = express.Router();
const { getSales } = require("../controllers/salesController");

// GET /api/sales?search=&region=&gender=&ageMin=&ageMax=&category=&tag=&paymentMethod=&dateFrom=&dateTo=&sortBy=&sortOrder=&page=
router.get("/", getSales);

module.exports = router;
