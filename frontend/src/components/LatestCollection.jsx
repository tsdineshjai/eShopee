import React, { useContext } from "react";
import ProductItem from "./ProductItem";
import { ShopContext } from "../context/ShopContext";

function LatestCollection() {
	const [latestProducts, setLatestProducts] = React.useState([]);
	const { products } = useContext(ShopContext);

	React.useEffect(() => {
		if (Array.isArray(products)) {
			setLatestProducts(products.slice(0, 10));
		}
	}, [products]);

	if (!products) {
		return <div>Loading...</div>;
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6 ">
			{latestProducts.map((item, index) => (
				<ProductItem key={index} item={item} />
			))}
		</div>
	);
}

export default LatestCollection;
