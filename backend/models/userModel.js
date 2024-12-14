import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		username: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		cartData: { type: Object, default: {} },
	},
	{ minimize: false }
);

/*
By default, Mongoose's Schema option minimize is set to true.
This means that when you save a document, empty objects (like {}) in your
schema will be automatically removed to reduce the size of the stored data.

When { minimize: false } is specified, Mongoose prevents this behavior and
 ensures that empty objects are preserved in the database.
*/

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

/* 
The || operator is used to ensure that you do not create duplicate models in Mongoose, which can cause errors.
This approach is particularly useful in environments where your code might be reloaded multiple times (e.g., during development or in serverless environments like AWS Lambda).
It ensures that you do not encounter duplicate model registration errors.
*/

export default userModel;
