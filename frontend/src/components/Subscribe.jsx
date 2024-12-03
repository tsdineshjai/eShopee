import React from "react";

function Subscribe() {
	const [email, setEmail] = React.useState("");

	function handleSubmit(e) {
		e.preventDefault();
	}
	return (
		<div className="flex flex-col px-5 py-2 mb-2 mt-7 justify-content items-center gap-2 ">
			<p className="text-[12px] sm:text-[18px]">Subscribe Now & get 20% off</p>
			<p className="text-[10px] sm:text-[14px] font-light">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, ab.
				Distinctio sed.
			</p>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col sm:flex-row gap-4 py-3"
			>
				<input
					type="email"
					name="email"
					value={email}
					placeholder="Enter your email"
					onChange={(e) => setEmail(e.target.value)}
					className="w-1/1.25 mx-auto text-center sm:w-full border-2 text-[10px] sm:text-[14px] text-gray-700 px-3 py-1 focus:border-red-900 focus:border-2 outline-none rounded-sm "
				/>
				<button className="bg-gray-800 w-1/2 text-center sm:w-1/3 mx-auto text-[10px] sm:text-[14px] outline-yellow-600 text-white px-3 py-1 rounded-sm ">
					SUBSCRIBE
				</button>
			</form>
		</div>
	);
}

export default Subscribe;
