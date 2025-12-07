# Backend – Retail Sales Management System

This is the **backend API** for the Retail Sales Management System built for the TruEstate SDE Intern assignment.  
It loads the provided CSV dataset into memory and exposes a single endpoint for **search, filtering, sorting, and pagination**.

---

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express
- **Other:** CORS, dotenv, nodemon (for local development)

---

## Folder Structure

```text
backend/
├── data/
│   └── truestate_assignment_dataset.csv
├── src/
│   ├── controllers/
│   │   └── salesController.js
│   ├── services/
│   │   └── salesService.js
│   ├── utils/
│   │   └── queryHelpers.js
│   ├── routes/
│   │   └── salesRoutes.js
│   ├── models/
│   │   └── salesData.js
│   └── index.js
└── package.json
