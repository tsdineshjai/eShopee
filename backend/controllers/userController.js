import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

const createToken = (id) => {
	return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: "1d" });
};

const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;

		// Validate email format
		if (!email || !validator.isEmail(email)) {
			return res.status(400).json({
				success: false,
				message: "Please provide a valid email address.",
			});
		}

		//we will check if user exists
		const user = await userModel.findOne({ email });

		if (!user) {
			return res.status(404).json({
				success: false,
				message: "User doesn't exist. Please create an account.",
			});
		}

		// Check if the provided password matches the stored hashed password
		const isPasswordMatch = await bcrypt.compare(password, user.password);

		if (!isPasswordMatch) {
			return res.status(401).json({
				success: false,
				message: "Invalid credentials. Please try again.",
			});
		}

		const token = createToken(user._id);

		if (!token) {
			return res.status(500).json({
				success: false,
				message: "Failed to generate authentication token.",
			});
		}
		res.status(200).json({
			success: true,
			token,
			message: "Login successful!",
		});
	} catch (e) {
		res.status(500).json({
			success: false,
			message: `error has occurred due to the reason : ${e.message}`,
		});
	}
};
const registerUser = async (req, res) => {
	try {
		const { email, username, password } = req.body;

		//validation check of the email and password
		if (!validator.isEmail(email)) {
			return res.status(400).json({
				success: false,
				message: "Please input a valid email address",
			});
		}

		if (!password || password.length < 7) {
			return res.status(400).json({
				success: false,
				message: "Password should have a minimum of 7 characters",
			});
		}

		//checking if the email alredy exists
		const userExists = await userModel.findOne({ email });
		if (userExists) {
			return res
				.status(400)
				.json({ success: false, message: "User already exists" });
		}

		// Hash the password
		const saltRounds = 10;
		const genSalt = await bcrypt.genSalt(saltRounds);
		const hashedPassword = await bcrypt.hash(password, genSalt);

		const newUser = new userModel({
			username,
			email,
			password: hashedPassword,
		});

		//by default a property _id will be created on a  new user. we need to save the user.
		const user = await newUser.save();

		const token = createToken(user._id);
		res.status(201).json({
			success: true,
			token,
			message: "the user was succesfully created",
		});
	} catch (error) {
		console.log(error.message);
		res.status(500).json({
			success: false,
			message: `An error has occurred : ${error.message}`,
		});
	}
};
const adminUser = async (req, res) => {};

export { loginUser, registerUser, adminUser };

/* 

Key Takeaways:

    Always use asynchronous methods when dealing with I/O operations to avoid blocking the event loop.
    Add return statements after validation checks to ensure the function halts on errors.
    Include proper HTTP status codes in responses for API best practices.
    Set expiration times for JWT tokens to enhance security.
*/
