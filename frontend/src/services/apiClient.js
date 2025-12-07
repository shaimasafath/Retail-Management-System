// frontend/src/services/apiClient.js
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";

export async function fetchSales(params) {
  const url = new URL("/api/sales", API_BASE_URL);

  Object.entries(params || {}).forEach(([key, value]) => {
    if (value == null || value === "" || (Array.isArray(value) && !value.length)) return;
    if (Array.isArray(value)) {
      value.forEach((v) => url.searchParams.append(key, v));
    } else {
      url.searchParams.set(key, value);
    }
  });

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error("Failed to fetch sales");
  }
  return res.json();
}
