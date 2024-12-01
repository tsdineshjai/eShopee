import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function useShopContext() {
	const value = useContext(ShopContext);
	return value;
}

export default useShopContext;
