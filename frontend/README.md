# Frontend – Retail Sales Management System

This is the **frontend React application** for the Retail Sales Management System built for the TruEstate SDE Intern assignment.

The UI follows the provided Figma structure with:

- A **Search Bar**
- A **Filter Panel**
- A **Transactions Table**
- A **Sorting Dropdown**
- **Pagination Controls**

The app consumes the backend API and provides a smooth, interactive way to explore the sales data.

---

## Tech Stack

- **React 18**
- **Vite** (bundler & dev server)
- **React Router DOM** (routing)
- **Fetch API** for HTTP calls

---

## Folder Structure

```text
frontend/
├── public/
│   └── (static assets: favicon, logos, etc.)
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── FilterPanel.jsx
│   │   ├── SortDropdown.jsx
│   │   ├── TransactionsTable.jsx
│   │   └── PaginationControls.jsx
│   ├── hooks/
│   │   └── useSalesQuery.js
│   ├── pages/
│   │   └── DashboardPage.jsx
│   ├── routes/
│   │   └── AppRoutes.jsx
│   ├── services/
│   │   └── apiClient.js
│   ├── styles/
│   │   └── global.css
│   ├── main.jsx
│   └── App.jsx (optional, may be unused)
└── package.json
