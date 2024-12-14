import mongoose from "mongoose";

//create a schema
const productSchema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
	image: { type: Array, required: true },
	category: { type: String, required: true },
	subCategory: { type: String, required: true },
	sizes: { type: Array, required: true },
	bestseller: { type: Boolean },
	date: { type: Number, required: true },
});

//create a model is similar to making a class
const productModel =
	mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
