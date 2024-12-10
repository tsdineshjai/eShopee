import React, { useCallback } from "react";
import useShopContext from "../hooks/useShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";

function Cart() {
	const {
		products,
		currency,
		cartData,
		handleChangeInQuantity,
		handleDeleteItem,
	} = useShopContext();

	const [cartItems, setCartItems] = React.useState([]);

	const getCartData = useCallback(() => {
		let tempData = [];
		for (const keyId in cartData) {
			for (const [size, quantity] of Object.entries(cartData[keyId])) {
				let newItem = {};
				newItem.id = keyId;
				newItem.size = size;
				newItem.quantity = quantity;
				tempData.push(newItem);
			}
		}
		setCartItems(tempData);
	}, [cartData]);

	console.log("cart items", cartItems);
	React.useEffect(() => {
		getCartData();
	}, [getCartData]);

	return (
		<div className="border-t">
			{/* title*/}
			<div className="flex flex-start  mr-auto w-fit">
				<Title text1={"YOUR"} text2={"CART"} />
			</div>
			{/* cart content */}

			<div className="border-t border-b px-2 py-7 mt-2 flex flex-col gap-3 ">
				{cartItems.map((cartItem, cartItemIndex) => {
					const productMatch = products.find(
						(product) => product._id == cartItem.id
					);
					return (
						<div
							key={cartItemIndex}
							className="flex flex-row gap-2 items-center justify-between px-5"
						>
							<div className="flex flex-row gap-4">
								<div>
									<img
										src={productMatch.image[0]}
										alt=""
										className="w-16 rounded-sm"
									/>
								</div>

								<div className="flex flex-col gap-2 justify-start">
									<p className="min-w-[500px]">{productMatch.name}</p>
									<div className="flex flex-row gap-2 text-[15px]">
										<p className="">
											<span className="font-light">{currency}</span>
											{productMatch.price}
										</p>
										<p>{cartItem.size}</p>
									</div>
								</div>
							</div>

							{/* input: number */}

							<div className="px-1 border">
								<input
									type="number"
									defaultValue={cartItem.quantity}
									min={1}
									onChange={(e) =>
										handleChangeInQuantity(
											cartItem.id,
											cartItem.size,
											e.target.value
										)
									}
									className=" w-10 sm:w-15  outline-none"
								/>
							</div>

							<div onClick={() => handleDeleteItem(cartItem.id)}>
								<img src={assets.bin_icon} className="h-5 cursor-pointer" />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Cart;
