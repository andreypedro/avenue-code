import express from "express";
import personRoute from "./routes/person.router.js";

const app = express();
app.use(express.json());

app.use("/person", personRoute);

// error handler
app.use((err, req, res, next) => {
  res.status(500).json({
    error: err.message || "Internal Server Error",
  });
});

export default app;
