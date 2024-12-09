import { useParams } from "react-router-dom";
import useShopContext from "../hooks/useShopContext";
import React from "react";
import { assets } from "../assets/assets";

function Product() {
	const { products, currency } = useShopContext();
	const [itemInfo, setItemInfo] = React.useState();
	const [centerImage, setCenterImage] = React.useState();
	const [selectedSize, setSelectedSize] = React.useState();
	const { productId } = useParams();

	React.useEffect(() => {
		const item = products.find((product) => product._id == productId);

		setItemInfo(item);
		setCenterImage(item.image[0]);
	}, [products, productId]);

	console.log(itemInfo);

	return itemInfo ? (
		<div className="flex flex-row items-center justify-center gap-3 transition-all ease-linear delay-0  gap-y-5 px-5 border-2 border-gray-700">
			{/* vertical images */}
			<section className="flex flex-col gap-3">
				{itemInfo.image.map((image, index) => (
					<img
						src={image}
						alt="image"
						key={index}
						className="w-[125px] cursor-pointer hover:scale-[1.05] transition-transform ease-in-out duration-300"
						onClick={() => setCenterImage(image)}
					/>
				))}
			</section>

			{/* central image */}
			<div className="flex w-[50%] justify-self-start">
				<img src={centerImage} alt="image" className="object-contain" />
			</div>

			{/* product Info */}
			<section className=" flex flex-col justify-evenly  ml-3 w-[55%] pt-10   ">
				<p className="text-[16px] font-semibold">{itemInfo.name}</p>

				{/* star grouping */}

				<div className="flex gap-1 mt-2 mb-2 pr-2 ">
					<img src={assets.star_icon} alt="rating star" className="h-4" />
					<img src={assets.star_icon} alt="rating star" className="h-4" />
					<img src={assets.star_icon} alt="rating star" className="h-4" />
					<img src={assets.star_icon} alt="rating star" className="h-4" />
					<img src={assets.star_dull_icon} alt="rating star" className="h-4" />
					<span className="px-2 font-light h-4 flex items-center justify-center">
						(73)
					</span>
				</div>

				<p className="font-semibold mt-6">
					{itemInfo.price} <span className="font-light pl-1">{currency}</span>
				</p>

				<div className="font-normal mt-6 text-[15px]">
					{itemInfo.description}
				</div>

				<section className="mt-10 mb-10 flex flex-col gap-3">
					<p>Select Size</p>
					<div className="flex flex-row gap-2">
						{itemInfo.sizes.map((size, index) => (
							<p
								key={index}
								className={` cursor-pointer border-2 p-1 px-3 text-[14px] border-gray-600 ${
									selectedSize == size ? "bg-gray-900 text-white" : ""
								} `}
								onClick={() => setSelectedSize(size)}
							>
								{size}
							</p>
						))}
					</div>
				</section>

				<button className="bg-black mb-10 flex items-center justify-center w-fit text-white px-3 py-2 mt-10  rounded-sm hover:scale-105 transition-transform duration-300 ease-in-out">
					ADD TO CART
				</button>

				<div className="text-[15px] font-light ">
					<hr />
					<p>100% Original Product.</p>
					<p>Cash on delivery is available on this product</p>
					<p>Easy return and exchange policy within 7 days</p>
				</div>
			</section>
		</div>
	) : null;
}

export default Product;
