import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import express from "express";

const app = express();

// Parsing Json
app.use(express.json());

// Allowed
app.use(cors());

// Adding logging
app.use(morgan("dev"));

// Adding security
app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));

// API

app.all("*", (_req, res) => {
    res.status(404).json({
        status: "failed",
        msg: "route not found!",
    });
});

export default app;
