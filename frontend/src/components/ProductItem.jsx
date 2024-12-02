/* eslint-disable react/prop-types */
import useShopContext from "../hooks/useShopContext";
import { Link } from "react-router-dom";

function ProductItem({ item }) {
	const { currency } = useShopContext();

	const { name, price, image } = item;

	return (
		<Link
			to={`/product/${item._id}`}
			className=" text-gray-700 cursor-pointer  border pb-1 rounded-sm "
		>
			<div className="overflow-hidden"></div>
			<img
				src={image[0]}
				alt=""
				className="hover:scale-110 transition ease-in-out"
			/>
			<p className="text-[12px] pb-1 pt-3 px-1 font-normal">{name}</p>
			<p className="text-[11px] px-1  font-semibold">
				{price}
				{currency}
			</p>
		</Link>
	);
}

export default ProductItem;
