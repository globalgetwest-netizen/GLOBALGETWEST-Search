const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ROOT TEST
app.get("/", (req, res) => {
  res.send("GLOBALGETWEST backend is running 🚀");
});

// STATUS ROUTE
app.get("/api/status", (req, res) => {
  res.json({
    node: "Global-01-Alpha",
    status: "WORLDWIDE LIVE",
    deadline: "2026-05-07",
    protocol: "One Human, One Account"
  });
});

// SEARCH ROUTE (ONLY ONE!)
app.get("/api/search", (req, res) => {
  const query = req.query.q;

  const results = [
    {
      title: `${query} - Global Match`,
      type: "LIVE DATA NODE"
    },
    {
      title: `${query} - System Insight`,
      type: "ANALYTICS ENGINE"
    },
    {
      title: `${query} - Archive Result`,
      type: "HISTORICAL DATA"
    }
  ];

  res.json({ query, results });
});

// START SERVER (ALWAYS LAST)
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});