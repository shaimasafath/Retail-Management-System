// frontend/src/hooks/useSalesQuery.js
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSales } from "../services/apiClient";

const DEFAULT_PAGE_SIZE = 10;

export function useSalesQuery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState({ page: 1, pageSize: DEFAULT_PAGE_SIZE, totalPages: 1, totalItems: 0 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const queryState = {
    search: searchParams.get("search") || "",
    sortBy: searchParams.get("sortBy") || "date",
    sortOrder: searchParams.get("sortOrder") || "desc",
    page: Number(searchParams.get("page") || 1),
    // Filters
    region: searchParams.getAll("region"),
    gender: searchParams.getAll("gender"),
    category: searchParams.getAll("category"),
    tag: searchParams.getAll("tag"),
    paymentMethod: searchParams.getAll("paymentMethod"),
    ageMin: searchParams.get("ageMin") || "",
    ageMax: searchParams.get("ageMax") || "",
    dateFrom: searchParams.get("dateFrom") || "",
    dateTo: searchParams.get("dateTo") || "",
  };

  const updateQuery = (updates) => {
    const next = { ...queryState, ...updates };
    const sp = new URLSearchParams();
    Object.entries(next).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => v && sp.append(key, v));
      } else if (value !== "" && value != null) {
        sp.set(key, value);
      }
    });
    setSearchParams(sp);
  };

  useEffect(() => {
    const controller = new AbortController();
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const { search, sortBy, sortOrder, page, ...filterParams } = queryState;
        const response = await fetchSales({
          search,
          sortBy,
          sortOrder,
          page,
          ...filterParams,
        });
        setData(response.data);
        setMeta(response.meta);
      } catch (err) {
        setError(err.message || "Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    load();
    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.toString()]);

  return { data, meta, loading, error, queryState, updateQuery };
}
