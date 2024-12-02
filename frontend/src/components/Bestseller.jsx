import React from "react";
import useShopContext from "../hooks/useShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

function Bestseller() {
	const [bestSeller, setBestSeller] = React.useState([]);
	const { products } = useShopContext();

	React.useEffect(() => {
		const bestProducts = products.filter((product) => product.bestseller);

		setBestSeller([...bestProducts.slice(0, 5)]);
	}, [products]);

	console.log("best seller products are", bestSeller);
	return (
		<div className="mt-[-7px]">
			<Title text1={"BEST"} text2={"SELLERS"} />

			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 py-6 gap-5">
				{bestSeller.map((item, index) => (
					<ProductItem key={index} item={item} />
				))}
			</div>
		</div>
	);
}

export default Bestseller;
