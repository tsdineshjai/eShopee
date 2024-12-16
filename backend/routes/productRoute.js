import express from "express";
import {
	addProduct,
	listProducts,
	productInfo,
	removeProduct,
} from "../controllers/productController";

const productRouter = express.Router();

productRouter.post("/add", addProduct);
productRouter.post("/remove", removeProduct);
productRouter.post("/product", productInfo);
productRouter.get("/list", listProducts);

export default productRouter;
