import express, { Application } from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb-connection";
import { errorHandler } from "./middleware/error-handler";
import authRouter from "./routes/auth-route";
import cencusRouter from "./routes/cencus-route";
import cookieRoute from "./routes/cookie-route";
import residentRouter from "./routes/resident-route";
import imageDetectionRoute from "./routes/image-detection-route";

const app: Application = express();
const PORT = 3000;

const allowedOrigins = [
  "https://barangay-ly7m.onrender.com",
  "http://localhost:5173",
  "https://smartbarangayconnect.com",
  "https://drs.smartbarangayconnect.com",
  "https://cyms.smartbarangayconnect.com",
  "https://bciacms.smartbarangayconnect.com",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/cencus", cencusRouter);
app.use("/api/cookie", cookieRoute);
app.use("/api/resident", residentRouter);
app.use("/api/image", imageDetectionRoute);

app.use(errorHandler);

// Start the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
