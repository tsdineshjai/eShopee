import React, { useContext } from "react";
import ProductItem from "./ProductItem";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

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
		<>
			<Title text1={"LATEST"} text2={"COLLECTIONS"} />
			<div className="grid grid-cols-2 w-fit mx-auto sm:grid-cols-3 md:grid-cols-4 gap-5 py-7 ">
				{latestProducts.map((item, index) => (
					<ProductItem key={index} item={item} />
				))}
			</div>
		</>
	);
}

export default LatestCollection;
