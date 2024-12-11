import { toast } from "react-toastify";
import useShopContext from "../hooks/useShopContext";
import Title from "./Title";

function CartTotal() {
	const { getTotalCartAmount, delivery_fee, navigate, currency } =
		useShopContext();
	return (
		<div className="flex w-full sm:w-[500px] flex-col mt-[-16px] ">
			<Title text1={"CART"} text2={"TOTALS"} />

			<div className="flex flex-row justify-between border-b py-2 mt-5  px-4">
				<p>Subtotal</p>
				<div className="flex flex-row flex-end items-center gap-1">
					<p className="font-light text-[15px] text-center ">{currency}</p>
					<span className="font-normal">{getTotalCartAmount()}.00</span>
				</div>
			</div>
			<div className="flex flex-row justify-between border-b py-2 px-4 ">
				<p>Shipping Fee</p>

				<div className="flex flex-row flex-end items-center gap-1">
					<p className="font-light text-[15px] text-center ">{currency} </p>
					<span className="font-normal ">
						{getTotalCartAmount() == 0 ? 0 : delivery_fee}.00
					</span>
				</div>
			</div>
			<div className="flex flex-row justify-between border-b py-2  px-4">
				<p>Total</p>

				<div className="flex flex-row flex-end items-center gap-1">
					<p className="font-normal text-[17px] text-center ">{currency}</p>
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
		</div>
	);
}

export default CartTotal;
