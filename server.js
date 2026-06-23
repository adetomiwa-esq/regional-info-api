import express from "express";
import { configDotenv } from "dotenv";
import router from "./src/routes/regions.route.js";
import connectDB from "./src/config/db.js";
import cors from "cors";

configDotenv();

connectDB();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://pop-tree-fe.vercel.app",
      "https://www.tabeautypoptree.com",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/region", router);

app.listen(process.env.PORT, () => {
  console.log(`Server running on PORT - ${process.env.PORT}`);
});
