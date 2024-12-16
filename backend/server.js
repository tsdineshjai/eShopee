import express from "express";
import cors from "cors";
import "dotenv/config";

import connectDB from "./config/mongodb.js";
import cloudinaryConnect from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";

const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(cors());
app.use(express.json());

//routes for user handles and product
app.use("/api/user", userRouter);
app.use("api/product", productRouter);

try {
	connectDB();
} catch (e) {
	console.error(e.message);
}
try {
	cloudinaryConnect();
} catch (e) {
	console.error(e.message);
}

app.get("/", (req, res) => {
	res.send("<h1>The get request is working</h1>");
});

app.listen(PORT, () => {
	console.log(`listening to the server at port ${PORT}`);
});
