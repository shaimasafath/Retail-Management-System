// backend/src/utils/queryHelpers.js

// SEARCH: Customer Name + Phone Number, case-insensitive
function applySearch(data, search) {
  if (!search) return data;
  const term = search.toLowerCase();
  return data.filter((row) => {
    const name = String(row["Customer Name"] || "").toLowerCase();
    const phone = String(row["Phone Number"] || "").toLowerCase();
    return name.includes(term) || phone.includes(term);
  });
}

// FILTERS
function applyFilters(data, filters) {
  const {
    regions,
    genders,
    ageMin,
    ageMax,
    categories,
    tags,
    paymentMethods,
    dateFrom,
    dateTo,
  } = filters;

  return data.filter((row) => {
    // Region
    if (regions?.length && !regions.includes(row["Customer Region"])) return false;

    // Gender
    if (genders?.length && !genders.includes(row["Gender"])) return false;

    // Age range
    if (ageMin != null && row.Age != null && row.Age < ageMin) return false;
    if (ageMax != null && row.Age != null && row.Age > ageMax) return false;

    // Product Category
    if (categories?.length && !categories.includes(row["Product Category"])) return false;

    // Tags (assuming tags column is comma-separated string)
    if (tags?.length) {
      const rowTags = String(row["Tags"] || "")
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);

      const intersects = tags.some((t) => rowTags.includes(t));
      if (!intersects) return false;
    }

    // Payment Method
    if (paymentMethods?.length && !paymentMethods.includes(row["Payment Method"])) return false;

    // Date range
    if (dateFrom && row.Date && row.Date < dateFrom) return false;
    if (dateTo && row.Date && row.Date > dateTo) return false;

    return true;
  });
}

// SORTING
function applySorting(data, sortBy, sortOrder) {
  if (!sortBy) return data;

  const order = sortOrder === "asc" ? 1 : -1;

  const sorted = [...data].sort((a, b) => {
    let valA, valB;

    switch (sortBy) {
      case "date":
        valA = a.Date;
        valB = b.Date;
        break;
      case "quantity":
        valA = a.Quantity || 0;
        valB = b.Quantity || 0;
        break;
      case "customerName":
        valA = (a["Customer Name"] || "").toLowerCase();
        valB = (b["Customer Name"] || "").toLowerCase();
        break;
      default:
        return 0;
    }

    if (valA == null && valB != null) return -1 * order;
    if (valA != null && valB == null) return 1 * order;
    if (valA == null && valB == null) return 0;

    if (valA < valB) return -1 * order;
    if (valA > valB) return 1 * order;
    return 0;
  });

  return sorted;
}

// PAGINATION (page size fixed to 10)
function applyPagination(data, page, pageSize = 10) {
  const totalItems = data.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const safePage = Math.min(Math.max(page, 1), totalPages);
  const start = (safePage - 1) * pageSize;
  const end = start + pageSize;

  return {
    items: data.slice(start, end),
    meta: {
      page: safePage,
      pageSize,
      totalItems,
      totalPages,
    },
  };
}

module.exports = {
  applySearch,
  applyFilters,
  applySorting,
  applyPagination,
};
