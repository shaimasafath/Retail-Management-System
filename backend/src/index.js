// backend/src/index.js
const express = require("express");
const cors = require("cors");
const salesRoutes = require("./routes/salesRoutes");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/health", (_, res) => res.json({ status: "ok" }));

app.use("/api/sales", salesRoutes);

// Handle 404
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
