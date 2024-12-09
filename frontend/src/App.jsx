import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Collections from "./pages/Collections";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import Placeorder from "./pages/Placeorder";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
	return (
		<div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9w]  ">
			<ToastContainer autoClose={2000} />
			<Navbar />
			<SearchBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/collections" element={<Collections />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/login" element={<Login />} />
				<Route path="/orders" element={<Orders />} />
				<Route path="/placeorder" element={<Placeorder />} />
				<Route path="/product/:productId" element={<Product />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
