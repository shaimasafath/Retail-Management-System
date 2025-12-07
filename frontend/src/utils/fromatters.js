/**
 * Format a date string or Date object into a readable format
 * Example: "2023-09-01" → "01 Sep 2023"
 */
export function formatDate(value) {
  if (!value) return "";

  const date = value instanceof Date ? value : new Date(value);
  if (isNaN(date)) return "";

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

/**
 * Safely format numbers (amounts, quantities)
 */
export function formatNumber(value) {
  if (value === null || value === undefined) return "";
  const num = Number(value);
  if (Number.isNaN(num)) return "";
  return num.toLocaleString();
}

/**
 * Format currency values
 * Example: 12345 → ₹12,345
 */
export function formatCurrency(value, currency = "INR") {
  if (value === null || value === undefined) return "";
  const num = Number(value);
  if (Number.isNaN(num)) return "";

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 2
  }).format(num);
}

/**
 * Parse comma-separated values into array
 * Example: "Online, Discounted" → ["Online", "Discounted"]
 */
export function parseCommaSeparated(value) {
  if (!value) return [];
  return String(value)
    .split(",")
    .map((v) => v.trim())
    .filter(Boolean);
}

/**
 * Remove empty values from an object
 * Useful before sending query params
 */
export function cleanParams(params) {
  const cleaned = {};

  Object.entries(params).forEach(([key, value]) => {
    if (
      value === null ||
      value === undefined ||
      value === "" ||
      (Array.isArray(value) && value.length === 0)
    ) {
      return;
    }
    cleaned[key] = value;
  });

  return cleaned;
}
