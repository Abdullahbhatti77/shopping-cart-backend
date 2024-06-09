import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connection from "./Connection/connection.js";
import router from "./routes/product.js";

dotenv.config();
connection();

const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use(cors());
app.use(bodyParser.json());
app.use("/products", router);

app.use(bodyParser.urlencoded({ extended: true }));
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
