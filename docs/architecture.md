# Architecture

## Backend Architecture

- **Tech stack**: Node.js, Express.
- **Data source**: `truestate_assignment_dataset.csv` loaded into memory at startup.
- **Layers**:
  - `models/`: data loading from CSV (`salesData.js`).
  - `services/`: core business logic (search, filters, sort, pagination) via `salesService.js`.
  - `controllers/`: HTTP-level handling (`salesController.js`).
  - `utils/`: shared helpers for query logic (`queryHelpers.js`).
  - `routes/`: API routes (`salesRoutes.js`).
- **API**:
  - `GET /api/sales`
    - Query params: `search`, `region`, `gender`, `ageMin`, `ageMax`, `category`, `tag`, `paymentMethod`, `dateFrom`, `dateTo`, `sortBy`, `sortOrder`, `page`.
    - Response: `{ data: [...], meta: { page, pageSize, totalItems, totalPages } }`.

## Frontend Architecture

- **Tech stack**: React, Vite, React Router.
- **Structure**:
  - `components/`: reusable UI (search bar, filters, sort dropdown, table, pagination).
  - `pages/`: page-level layouts (`DashboardPage`).
  - `routes/`: SPA routing (`AppRoutes`).
  - `services/`: API client wrappers (`apiClient.js`).
  - `hooks/`: custom hooks for data fetching and state (`useSalesQuery`).
  - `styles/`: global and component styles.

## Data Flow

1. User interacts with **Search / Filters / Sorting / Pagination**.
2. These update URL query params via `useSalesQuery`.
3. `useSalesQuery` calls `fetchSales` with query params.
4. Backend `GET /api/sales`:
   - Loads CSV into memory (if not loaded).
   - Applies search → filters → sort → pagination.
   - Returns paginated data + metadata.
5. Frontend renders the transaction table and pagination controls.

## Folder Structure

(Repeat the folder tree with short explanations for each folder.)

## Module Responsibilities

- `models/salesData.js`: Load and normalize CSV data.
- `utils/queryHelpers.js`: Encapsulate search/filter/sort/pagination logic.
- `services/salesService.js`: Orchestrate data pipeline per request.
- `controllers/salesController.js`: Parse/validate query params, call service, return JSON.
- `routes/salesRoutes.js`: Route definitions.
- `hooks/useSalesQuery.js`: Sync URL state with API, manage loading/error/meta.
- `components/*`: Presentational components reflecting Figma layout.
