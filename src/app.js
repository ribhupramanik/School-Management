import express from "express";
import cors from "cors";

import "./config/db.js";

import schoolRoutes from "./routes/schoolRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "School Management API Running"
    });
});

app.use("/", schoolRoutes);

export default app;