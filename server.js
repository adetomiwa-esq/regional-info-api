import express from "express";
import { configDotenv } from "dotenv";
import router from "./src/routes/regions.route.js";

configDotenv();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/region", router);

app.listen(process.env.PORT, () => {
  console.log(`Server running on PORT - ${process.env.PORT}`);
});
