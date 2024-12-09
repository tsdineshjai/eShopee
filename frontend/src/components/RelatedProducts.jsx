/* eslint-disable react/prop-types */
import React from "react";
import useShopContext from "../hooks/useShopContext";
import ProductItem from "./ProductItem";
import Title from "./Title";

function RelatedProducts({ category, subCategory }) {
	const { products } = useShopContext();
	const [relatedProds, setRelatedProducts] = React.useState([]);

	React.useEffect(() => {
		let productsCopy = [...products];
		if (products.length > 0) {
			productsCopy = productsCopy.filter((item) => item.category == category);
			productsCopy = productsCopy.filter(
				(item) => item.subCategory == subCategory
			);

			setRelatedProducts(productsCopy.slice(0, 5));
		}
	}, [category, subCategory, products]);

	console.log("related prods is ", relatedProds);

	return products ? (
		<div className="my-10">
			<div className="">
				<Title text1={"RELATED"} text2={"PRODUCTS"} />
			</div>
			<section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 gap-y-6 mt-6 mb-4 ">
				{relatedProds.map((item, index) => (
					<ProductItem item={item} key={index} />
				))}
			</section>
		</div>
	) : null;
}

export default RelatedProducts;
