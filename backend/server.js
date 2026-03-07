import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import helmet from "helmet";
import { fileURLToPath } from "url";
import connectDB from "./conn.js";
import rateLimit from "express-rate-limit";
import formRoute from "./routes/formRoutes.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname,"../dist")
app.use(express.static(distPath))
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const corsOptions = {
  origin: process.env.CLIENT_URL || "http://localhost:4173",
  method: ["POST"],
  credentials: true,
};
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later.",
});

app.use(limiter);
app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//routes
app.use("/api/v1/user", formRoute);

const PORT = 3000;
connectDB(); //db connected here

app.get(/.*/, (req, res) => {
  res.sendFile(path.resolve(distPath, "index.html"));
});


app.listen(PORT, () => {
  console.log("Server starte on ", PORT);
});
