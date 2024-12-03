import React from "react";
import useShopContext from "../hooks/useShopContext";
import ProductItem from "../components/ProductItem";
import { assets } from "../assets/assets";

const Collections = () => {
	const { products } = useShopContext();
	const [filterdProducts, setFilteredProducts] = React.useState([]);
	const [isFilter, setIsFilter] = React.useState(true);

	React.useEffect(() => {
		setFilteredProducts(products);
	}, [products]);
	return (
		<div className="mt-7 flex flex-col sm:flex-row gap-1 p-1">
			{/* left side : FILTER */}
			<div className="min-w-60">
				<div className="mx-auto mt-[-10px] w-fit">
					<p
						onClick={() => setIsFilter((prev) => !prev)}
						className=" my-3 flex items-center mx-auto text-[14px] sm:text-[16px] sm:mx-none  cursor-pointer transition-all "
					>
						FILTERS
						<img
							src={assets.dropdown_icon}
							alt="drop down menu"
							className={` ml-3 sm:hidden h-3 ${isFilter ? "rotate-90" : ""} `}
						/>
					</p>
				</div>

				<div
					className={`border border-gray-700 mx-auto py-1 px-1 w-[120px]  sm:w-fit sm:py-5 sm:px-7 flex flex-col mt-5 text-[12px] sm:text-sm gap-1 ${
						isFilter ? "" : "hidden"
					}`}
				>
					<p className="font-medium mb-3">CATEGORIES</p>
					<label htmlFor="Men" className="text-[14px] font-light ">
						<input type="checkbox" name="Men" id="Men" /> Men
					</label>
					<label htmlFor="Women" className="text-[14px] font-light">
						<input type="checkbox" name="Women" id="Women" /> Women
					</label>
					<label htmlFor="kids" className="text-[14px] font-light">
						<input type="checkbox" name="kids" id="kids" /> Kids
					</label>
				</div>

				<div
					className={`border border-gray-700 mx-auto py-1 px-1 w-[120px]  sm:w-fit sm:py-5 sm:px-7 flex flex-col mt-3 text-[12px] sm:text-sm gap-1 ${
						isFilter ? "" : "hidden"
					}`}
				>
					<p className="font-medium mb-3">TYPE</p>
					<label htmlFor="Topwear" className="text-[14px] font-light">
						<input type="checkbox" name="Topwear" id="Topwear" /> Topwear
					</label>
					<label htmlFor="Bottomwear" className="text-[14px] font-light">
						<input type="checkbox" name="Bottomwear" id="Bottomwear" />{" "}
						Bottomwear
					</label>
					<label htmlFor="Winterwear" className="text-[14px] font-light">
						<input type="checkbox" name="Winterwear" id="Winterwear" />{" "}
						Winterwear
					</label>
				</div>
			</div>
			{/* collection of products */}
			<section >
				<div className=" flex items-center justify-between px-3">
					<div className="hidden  sm:flex flex-row justify-center items-center gap-3">
						<p className="text-green-600">ALL</p>
						<p>COLLECTIONS</p>
						<p className="h-[2px] w-8 bg-red-900"></p>
					</div>
					<select
						name="sorting"
						className="bg-white mx-auto sm:mx-0 border-2 border-gray-300 px-2 text-gray-700 text-sm "
					>
						<option value="Relevant">Relevant</option>
						<option value="LOW-HIGH">Price: Low to High</option>
						<option value="HIGH-LOW">Price: High to Low</option>
					</select>
				</div>

				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 py-5 px-3 mt-3">
					{filterdProducts.map((product, index) => (
						<ProductItem key={index} item={product} />
					))}
				</div>
			</section>
		</div>
	);
};

export default Collections;
