/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext(null);
function ShopContextProvider(props) {
	const [search, setSearch] = React.useState("");
	const [showSearch, setShowSearch] = React.useState(false);

	const currency = "SGD";
	const delivery_fee = 6;
	const value = {
		products,
		currency,
		delivery_fee,
		search,
		setSearch,
		showSearch,
		setShowSearch,
	};
	return (
		<ShopContext.Provider value={value}>{props.children} </ShopContext.Provider>
	);
}

export default ShopContextProvider;
