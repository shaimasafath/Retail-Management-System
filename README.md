# Retail Sales Management System

## Overview (3–5 lines)
A full-stack Retail Sales Management System built as part of the TruEstate SDE Intern assignment.  
The application provides advanced search, filtering, sorting, and pagination over structured sales data.  
The UI follows the provided Figma structure with a search bar, filter panel, transaction table, sorting dropdown, and pagination controls.

## Tech Stack
- Backend: Node.js, Express
- Frontend: React, Vite, React Router
- Data: CSV (provided sales dataset)

## Search Implementation Summary
- Full-text search on **Customer Name** and **Phone Number**, case-insensitive.  
- Implemented centrally in `backend/src/utils/queryHelpers.js::applySearch`.  
- Search works in combination with filters, sorting, and pagination.

## Filter Implementation Summary
- Multi-select / range filters for Customer Region, Gender, Age Range, Product Category, Tags, Payment Method, and Date Range.  
- All filter logic is encapsulated in `applyFilters`, called from `salesService`.  
- Filters are combined and applied on top of search, with state preserved via URL query params on the frontend.

## Sorting Implementation Summary
- Sorting supported on Date (Newest First), Quantity, and Customer Name (A–Z).  
- Sorting is handled in `applySorting` with default `sortBy=date` and `sortOrder=desc`.  
- Sorting always respects active search and filters.

## Pagination Implementation Summary
- Fixed page size of **10 items** per page.  
- Server-side pagination implemented via `applyPagination`, returning `page`, `pageSize`, `totalItems`, and `totalPages`.  
- Frontend pagination controls manage Next/Previous while preserving search, filters, and sorting.

## Setup Instructions
1. Clone the repository.
2. Backend:
   - `cd backend`
   - Place `truestate_assignment_dataset.csv` into `backend/data/`.
   - `npm install`
   - `npm run dev` (or `npm start`)
3. Frontend:
   - `cd frontend`
   - `npm install`
   - Create `.env` with `VITE_API_BASE_URL=http://localhost:4000`
   - `npm run dev`
4. Open the frontend URL (usually `http://localhost:5173`) in your browser.
