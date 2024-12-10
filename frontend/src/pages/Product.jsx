import { useParams } from "react-router-dom";
import useShopContext from "../hooks/useShopContext";
import React from "react";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

function Product() {
	const { products, currency, handleAddToCartData } = useShopContext();
	const [itemInfo, setItemInfo] = React.useState();
	const [centerImage, setCenterImage] = React.useState();
	const [selectedSize, setSelectedSize] = React.useState();
	const { productId } = useParams();

	console.log(itemInfo);
	React.useEffect(() => {
		const item = products.find((product) => product._id == productId);
		if (item) {
			setItemInfo(item);
			setCenterImage(item.image[0]);
		}
	}, [products, productId]);

	return itemInfo ? (
		<div className=" pt-10 gap-3 transition-opacity ease-in duration-500 opacity-100 ">
			<div className="flex flex-col gap-12 sm:gap-14 sm:flex-row justify-center items-start">
				{/*-------------- product images----------- */}
				<div className="flex-1 flex flex-col sm:flex-row gap-3">
					<div className="  flex gap-2 sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-between sm:w-[25%] w-full">
						{itemInfo.image.map((image, index) => (
							<img
								src={image}
								alt="image"
								key={index}
								className="w-[25%] sm:w-full flex-shrink-0 cursor-pointer hover:scale-[1.05] transition-transform ease-in-out duration-300"
								onClick={() => setCenterImage(image)}
							/>
						))}
					</div>
					{/* central image */}
					<div className="flex w-full  ">
						<img src={centerImage} alt="image" className="w-full h-auto" />
					</div>
				</div>

				{/*------------------- product Info------------- */}
				<section className=" flex flex-1 flex-col justify-normal pr-20 pt-10 ">
					<p className="text-[16px] font-semibold">{itemInfo.name}</p>
					{/* star grouping */}
					<div className="flex gap-1 mt-2 mb-2 pr-2 ">
						<img src={assets.star_icon} alt="rating star" className="h-3" />
						<img src={assets.star_icon} alt="rating star" className="h-3" />
						<img src={assets.star_icon} alt="rating star" className="h-3" />
						<img src={assets.star_icon} alt="rating star" className="h-3" />
						<img
							src={assets.star_dull_icon}
							alt="rating star"
							className="h-3"
						/>
						<span className="px-2 font-light h-3 text-[14px] flex items-center justify-center">
							(73)
						</span>
					</div>

					<p className="font-normal mt-2  p-0  ">
						{itemInfo.price} <span className="text-[13px]">{currency}</span>
					</p>

					<div className="font-normal mt-3 text-[14px] text-gray-500 w-58 md:w-4/5">
						{itemInfo.description}
					</div>

					<section className="mt-6 flex flex-col gap-3 mb-3">
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

					<button
						onClick={() => handleAddToCartData(itemInfo._id, selectedSize)}
						className="bg-black mt-2 mb-5  active:bg-gray-700  flex items-center justify-center w-fit text-white px-3 py-2  rounded-sm hover:scale-105 transition-transform duration-300 ease-in-out"
					>
						ADD TO CART
					</button>

					<div className="text-[14px] font-light text-gray-500 ">
						<hr />
						<p className="pt-3">100% Original Product.</p>
						<p>Cash on delivery is available on this product</p>
						<p>Easy return and exchange policy within 7 days</p>
					</div>
				</section>
			</div>
			{/* product reviews and description */}

			<div className="mt-10">
				<div className="flex flex-row">
					<b className="text-sm px-3 py-2 border-[2px] border-gray-200">
						Description
					</b>
					<p className="text-sm font-normal px-3 py-2 border-2 border-gray-200">
						Reviews (33)
					</p>
				</div>

				<div className="flex flex-col gap-4 border px-6 py-6 text-[13px] text-gray-500">
					<p>
						E-commerce (Electronic Commerce) refers to the buying and selling of
						goods and services, or the transmission of funds or data, over an
						electronic network, primarily the internet. It allows individuals
						and businesses to conduct transactions online without the need for
						physical interaction
					</p>
					<p>
						E-commerce (Electronic Commerce) refers to the buying and selling of
						goods and services, or the transmission of funds or data, over an
						electronic network, primarily the internet. It allows individuals
						and businesses to conduct transactions online without the need for
						physical interaction
					</p>
				</div>
			</div>
			<RelatedProducts
				category={itemInfo.category}
				subCategory={itemInfo.subCategory}
			/>
		</div>
	) : (
		<div className="opacity-0"></div>
	);
}

export default Product;
