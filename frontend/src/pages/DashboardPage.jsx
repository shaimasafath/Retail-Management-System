import React from "react";
import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import SortDropdown from "../components/SortDropdown";
import TransactionsTable from "../components/TransactionsTable";
import PaginationControls from "../components/PaginationControls";
import { useSalesQuery } from "../hooks/useSalesQuery";

const DashboardPage = () => {
  const { data, meta, loading, error, queryState, updateQuery } = useSalesQuery();

  const handleSearchChange = (value) => {
    updateQuery({ search: value, page: 1 });
  };

  const handlePageChange = (page) => {
    updateQuery({ page });
  };

  return (
    <div className="dashboard">
      {/* Top bar */}
      <header className="dashboard-header">
        <h1>Retail Sales Management</h1>
      </header>

      <main className="dashboard-main">
        {/* Left: Filters */}
        <aside className="dashboard-filters">
          <FilterPanel queryState={queryState} onChange={updateQuery} />
        </aside>

        {/* Right: content (Search, Sort, Table, Pagination) */}
        <section className="dashboard-content">
          <div className="top-row">
            <SearchBar value={queryState.search} onChange={handleSearchChange} />
            <SortDropdown
              sortBy={queryState.sortBy}
              sortOrder={queryState.sortOrder}
              onChange={updateQuery}
            />
          </div>

          {loading && <div className="loading">Loading...</div>}
          {error && <div className="error">{error}</div>}

          {!loading && !error && (
            <>
              <TransactionsTable data={data} />
              <PaginationControls
                page={meta.page}
                totalPages={meta.totalPages}
                onChangePage={handlePageChange}
              />
            </>
          )}
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
