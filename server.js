import express from "express";
import { configDotenv } from "dotenv";
import router from "./src/routes/regions.route.js";
import userRouter from "./src/routes/user.route.js";
import connectDB from "./src/config/db.js";
import cors from "cors";

configDotenv();

connectDB();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://regional-information-system.netlify.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/region", router);
app.use("/api/auth", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running on PORT - ${process.env.PORT}`);
});
