import express from "express";
import cors from "cors";
import "dotenv/config";

import connectDB from "./config/mongodb.js";

const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(cors());
app.use(express.json());

console.log(process.env.MONGODB_URI);

try {
	connectDB();
} catch (e) {
	console.error(e.message);
}

app.get("/", (req, res) => {
	res.send("<h1>The get request is working</h1>");
});

app.listen(PORT, () => {
	console.log(`listening to the server at port ${PORT}`);
});
