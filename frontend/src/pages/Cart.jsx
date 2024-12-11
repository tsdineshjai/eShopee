import React, { useCallback } from "react";
import useShopContext from "../hooks/useShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";
import CartTotal from "../components/CartTotal";

function Cart() {
	const {
		products,
		currency,
		cartData,
		handleChangeInQuantity,
		handleDeleteItem,
		getTotalCartAmount,
		delivery_fee,
		navigate,
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

			<div className="border-t border-b px-2 py-7 mt-2 flex flex-col gap-4 sm:gap-4 ">
				{cartItems.length > 0 ? (
					cartItems.map((cartItem, cartItemIndex) => {
						const productMatch = products.find(
							(product) => product._id == cartItem.id
						);
						return (
							<div
								key={cartItemIndex}
								className="flex flex-col  sm:flex-row gap-2 items-center justify-between px-5"
							>
								<div className="flex flex-row gap-4">
									<div>
										<img
											src={productMatch.image[0]}
											alt=""
											className="w-16 rounded-sm"
										/>
									</div>

									<div className="flex  flex-col sm:flex-col  gap-2 justify-start items-start">
										<p className="min-w-[200px] text-[14px] sm:text-[16px] ">
											{productMatch.name}
										</p>
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
											e.target.value == "" || e.target.value == "0"
												? null
												: handleChangeInQuantity(
														cartItem.id,
														cartItem.size,
														e.target.value
												  )
										}
										className=" w-10 sm:w-15  outline-none"
									/>
								</div>

								<div
									onClick={() => handleDeleteItem(cartItem.id, cartItem.size)}
								>
									<img src={assets.bin_icon} className="h-5 cursor-pointer" />
								</div>
							</div>
						);
					})
				) : (
					<div className="mx-auto">Your Shopping bag is empty !</div>
				)}

				<div className="mx-auto mt-5  py-6">
					{/* <div className="flex w-full sm:w-[400px] flex-col  px-10 ">
						<Title text1={"CART"} text2={"TOTALS"} />

						<div className="flex flex-row justify-between border-b py-2 mt-5  px-4">
							<p>Subtotal</p>
							<div className="flex flex-row flex-end items-center gap-1">
								<p className="font-light text-[15px] text-center ">
									{currency}
								</p>
								<span className="font-normal">{getTotalCartAmount()}.00</span>
							</div>
						</div>
						<div className="flex flex-row justify-between border-b py-2 px-4 ">
							<p>Shipping Fee</p>

							<div className="flex flex-row flex-end items-center gap-1">
								<p className="font-light text-[15px] text-center ">
									{currency}{" "}
								</p>
								<span className="font-normal ">
									{getTotalCartAmount() == 0 ? 0 : delivery_fee}.00
								</span>
							</div>
						</div>
						<div className="flex flex-row justify-between border-b py-2  px-4">
							<p>Total</p>

							<div className="flex flex-row flex-end items-center gap-1">
								<p className="font-normal text-[17px] text-center ">
									{currency}
								</p>
								<span className=" text-red-950">
									{getTotalCartAmount() == 0
										? 0
										: delivery_fee + getTotalCartAmount()}
									.00
								</span>
							</div>
						</div>
						<div className="mt-5 mx-auto hover:scale-105 transition-transform ease-linear delay-0">
							<button
								onClick={() =>
									getTotalCartAmount() == 0
										? toast("Add items to the cart")
										: navigate("/placeorder")
								}
								className="bg-black px-3 py-2 text-[14px] text-white rounded-sm active:bg-gray-700"
							>
								PROCEED TO CHECKOUT
							</button>
						</div>
					</div> */}

					<CartTotal />
				</div>
			</div>
		</div>
	);
}

export default Cart;
