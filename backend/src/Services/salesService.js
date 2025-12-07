// backend/src/services/salesService.js
const { getSalesData } = require("../models/salesData");
const {
  applySearch,
  applyFilters,
  applySorting,
  applyPagination,
} = require("../utils/queryHelpers");

function getFilteredSales(options) {
  const {
    search,
    regions,
    genders,
    ageMin,
    ageMax,
    categories,
    tags,
    paymentMethods,
    dateFrom,
    dateTo,
    sortBy,
    sortOrder,
    page,
  } = options;

  let data = getSalesData();

  data = applySearch(data, search);

  data = applyFilters(data, {
    regions,
    genders,
    ageMin,
    ageMax,
    categories,
    tags,
    paymentMethods,
    dateFrom: dateFrom ? new Date(dateFrom) : null,
    dateTo: dateTo ? new Date(dateTo) : null,
  });

  // Default sorting: Date newest first
  const effectiveSortBy = sortBy || "date";
  const effectiveSortOrder = sortOrder || (effectiveSortBy === "date" ? "desc" : "asc");

  data = applySorting(data, effectiveSortBy, effectiveSortOrder);

  const { items, meta } = applyPagination(data, page || 1, 10);

  return { items, meta };
}

module.exports = { getFilteredSales };
