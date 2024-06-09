import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.js";

const Router = express.Router();

Router.get("/", getProducts);
Router.get("/:id", getProductById);
Router.post("/", createProduct);
Router.patch("/:id", updateProduct);
Router.delete("/:id", deleteProduct);

export default Router;
