import mongoose from "mongoose";

export default async function connectDB() {
	mongoose.connection.on("connected", () => {
		console.log("connection was succesfull");
	});

	console.log(process.env.MONGODB_URI);
	await mongoose.connect(`${process.env.MONGODB_URI}/ecomdb`);
}
