import React from "react";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import useShopContext from "../hooks/useShopContext";

function Placeorder() {
	const [paymentType, setPaymentType] = React.useState("");
	const { navigate } = useShopContext();
	return (
		<div>
			<div className="flex flex-col sm:flex-col gap-4 flex-start">
				<div className=" w-full sm:w-fit flex flex-start  ">
					<Title text1={"Delivery"} text2={"Information"} />
				</div>

				<div className="flex flex-col sm:flex-row justify-between">
					{/* left half --- Delivery Information */}
					<div className="w-fit gap-3 flex flex-col mt-5">
						<section className="flex   flex-col sm:flex-row gap-2 ">
							<input
								type="text"
								className="px-4 py-2 border border-gray-400 text-[14px]"
								placeholder="FIRST NAME"
								name="firstName"
								id=""
							/>
							<input
								type="text"
								className="px-4 py-2 border border-gray-400 text-[14px]"
								placeholder="LAST NAME"
								name="lastName"
								id=""
							/>
						</section>
						<input
							type="email"
							className="px-4 py-2 border border-gray-400 text-[14px] w-full"
							placeholder="EMAIL"
							name="EMAIL"
						/>
						<input
							type="text"
							className="px-4 py-2 border border-gray-400 text-[14px]"
							placeholder="STREET"
							name="STREET"
						/>
						<section className="flex   flex-col sm:flex-row gap-2 ">
							<input
								type="text"
								className="px-4 py-2 border border-gray-400 text-[14px]"
								placeholder="CITY"
								name="CITY"
							/>
							<input
								type="text"
								className="px-4 py-2 border border-gray-400 text-[14px]"
								placeholder="STATE"
								name="STATE"
							/>
						</section>
						<section className="flex   flex-col sm:flex-row gap-2 ">
							<input
								type="text"
								className="px-4 py-2 border border-gray-400 text-[14px]"
								placeholder="ZIPCODE"
								name="ZIPCODE"
							/>
							<input
								type="text"
								className="px-4 py-2 border border-gray-400 text-[14px]"
								placeholder="COUNTRY"
								name="STATE"
							/>
						</section>
						<input
							type="tel"
							className="px-4 py-2 border border-gray-400 text-[14px]"
							placeholder="Phone"
							name="Phone"
						/>
					</div>

					{/* right side cart informatin */}

					<div>
						<CartTotal />

						<div className="flex flex-start mt-5 flex-col">
							<div className="w-fit border-black flex flex-start mx-auto">
								<Title text1={"PAYMENT"} text2={"METHOD"} />
							</div>
							<div className="flex flex-col justify-center items-center sm:flex-row gap-3 mt-3">
								<div
									onClick={() => setPaymentType("stripe")}
									className="flex flex-row border border-gray-200 gap-4 px-2 py-3 w-fit justify-center items-center cursor-pointer"
								>
									<input
										type="text"
										className={` h-3 w-3 rounded-full border border-gray-300  ${
											paymentType == "stripe" ? "bg-blue-800  border-none" : ""
										}`}
									/>
									<img src={assets.stripe_logo} className="h-5" />
								</div>
								<div
									onClick={() => setPaymentType("razorPay")}
									className="flex flex-row border border-gray-200 gap-4 px-2 py-3 w-fit justify-center items-center cursor-pointer"
								>
									<input
										type="text"
										className={`h-3 w-3 rounded-full border border-gray-300  ${
											paymentType == "razorPay"
												? "bg-blue-800 border-none "
												: ""
										}`}
									/>
									<img src={assets.razorpay_logo} className="h-5" />
								</div>
								<div
									onClick={() => setPaymentType("cod")}
									className="flex flex-row border border-gray-200 gap-4 px-2 py-3 w-fit justify-center items-center cursor-pointer"
								>
									<input
										type="text"
										className={`h-3 w-3 rounded-full border border-gray-300   ${
											paymentType == "cod" ? "bg-blue-800 border-none" : ""
										}`}
									/>
									<p className="text-gray-600  text-[14px]">CASH ON DELIVERY</p>
								</div>
							</div>
						</div>

						<div className="mt-5 hover:scale-105 transition-transform ease-linear delay-0 text-center">
							<button
								onClick={() => navigate("/orders")}
								className="bg-black px-3 py-2 text-[14px] text-white rounded-sm active:bg-gray-700"
							>
								PROCEED TO CHECKOUT
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Placeorder;
