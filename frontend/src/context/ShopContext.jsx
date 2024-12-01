/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext(null);
function ShopContextProvider(props) {
	const currency = "SGD";
	const delivery_fee = 6;
	const value = {
		products,
		currency,
		delivery_fee,
	};
	return (
		<ShopContext.Provider value={value}>{props.children} </ShopContext.Provider>
	);
}

export default ShopContextProvider;
