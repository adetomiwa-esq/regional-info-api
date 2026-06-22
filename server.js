import express from "express";
import { configDotenv } from "dotenv";

configDotenv();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
  console.log(`Server running on PORT - ${process.env.PORT}`);
});
