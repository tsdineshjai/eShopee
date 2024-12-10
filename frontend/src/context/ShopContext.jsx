/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { createContext } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext(null);
function ShopContextProvider(props) {
	const [search, setSearch] = React.useState("");
	const [showSearch, setShowSearch] = React.useState(false);
	const [cartData, setCartData] = React.useState({});

	const handleAddToCartData = async (itemId, size) => {
		if (!size) {
			toast("Select a size");
			return;
		}
		let data = structuredClone(cartData);

		if (data[itemId]) {
			if (data[itemId][size]) {
				data[itemId][size] += 1;
			} else {
				data[itemId][size] = 1;
			}
		} else {
			data[itemId] = {};
			data[itemId][size] = 1;
		}
		setCartData(data);
	};

	const getCartCount = () => {
		let totalValue = 0;
		for (let [, val] of Object.entries(cartData)) {
			for (let [, value] of Object.entries(val)) {
				totalValue += value;
			}
		}
		return totalValue;
	};

	const handleChangeInQuantity = (itemId, size, updatedQuantity) => {
		const copyCartData = structuredClone(cartData);
		copyCartData[itemId][size] = Number(updatedQuantity);
		setCartData(copyCartData);
	};

	const handleDeleteItem = (itemId) => {
		let copyCartData = structuredClone(cartData);
		delete copyCartData[itemId];
	};

	React.useEffect(() => {
		console.log("the cart info is", cartData);
	}, [cartData]);

	const currency = "SGD";
	const delivery_fee = 6;
	const value = {
		products,
		currency,
		delivery_fee,
		search,
		showSearch,
		setSearch,
		setShowSearch,
		cartData,
		handleAddToCartData,
		getCartCount,
		handleChangeInQuantity,
		handleDeleteItem,
	};
	return (
		<ShopContext.Provider value={value}>{props.children} </ShopContext.Provider>
	);
}

export default ShopContextProvider;
