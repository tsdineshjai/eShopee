import React from "react";
import { assets } from "../assets/assets";

import { Link, NavLink } from "react-router-dom";
import useShopContext from "../hooks/useShopContext";

function Navbar() {
	const [visible, setVisible] = React.useState(false);
	const { setShowSearch, getCartCount } = useShopContext();

	return (
		<div className="flex items-center text-3xl w-full py-7 justify-between font-medium  ">
			<Link className="cursor-pointer" to="/">
				<img src={assets.logo} className="w-16" alt="Logo" />
			</Link>
			<ul className="hidden sm:flex gap-5 text-[14px] text-gray-700">
				<NavLink to="/" className="cursor:pointer">
					<p>HOME</p>
					<hr className="w-1/2 h-[3px] bg-red-600  mx-auto hidden" />
				</NavLink>
				<NavLink to="/collections" className="cursor:pointer">
					<p>COLLECTIONS</p>
					<hr className="w-1/2 h-[3px] bg-red-600  mx-auto hidden" />
				</NavLink>
				<NavLink to="/about" className="cursor:pointer">
					<p>ABOUT</p>
					<hr className="w-1/2 h-[3px] bg-red-600  mx-auto hidden" />
				</NavLink>
				<NavLink to="/contact" className="cursor:pointer">
					<p>CONTACT</p>
					<hr className="w-1/2 h-[3px] bg-red-600  mx-auto hidden" />
				</NavLink>
			</ul>
			<div className="flex items-center gap-6">
				<img
					src={assets.search_icon}
					onClick={() => setShowSearch(true)}
					alt=""
					className="w-4 cursor-pointer"
				/>

				<div className="group relative">
					<img src={assets.profile_icon} className="w-4 cursor-pointer" />
					<div className="hidden group-hover:block absolute dropdown-menu right-0 ">
						<div className="flex flex-col w-24 text-[22px]  items-end right-0 p-1 mt-1 bg-transparent text-gray-500 rounded">
							<p className="text-sm cursor-pointer hover:text-black  ">
								My Profile
							</p>
							<p className="text-sm cursor-pointer hover:text-black ">Orders</p>
							<p className="text-sm cursor-pointer hover:text-black ">Logout</p>
						</div>
					</div>
				</div>
				<Link to="/cart" className="relative">
					<img src={assets.cart_icon} alt="cart" className="w-4  min-w-4" />
					<p className=" right-[-10px] mt-[-10px]  flex items-center justify-center text-center leading-4 w-4 text-[10px] aspect-square absolute rounded-full bg-black text-white">
						{getCartCount()}
					</p>
				</Link>
				<img
					src={assets.menu_icon}
					onClick={() => setVisible(true)}
					alt=""
					className="w-4  cursor-pointer sm:hidden"
				/>
			</div>

			<div
				className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white ${
					visible ? "w-full" : "w-0"
				}`}
			>
				<div className="flex flex-col text-grey-600">
					<div
						className="flex text-sm cursor-pointer items-center gap-2 p-3"
						onClick={() => setVisible(false)}
					>
						<img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
						<p>Back</p>
					</div>
					<NavLink
						onClick={() => setVisible(false)}
						to="/"
						className="py-2 pl-2 text-sm"
					>
						HOME
					</NavLink>
					<NavLink
						onClick={() => setVisible(false)}
						to="/collections"
						className="py-2 pl-2 text-sm"
					>
						COLLECTIONS
					</NavLink>
					<NavLink
						onClick={() => setVisible(false)}
						to="/about"
						className="py-2 pl-2 text-sm"
					>
						ABOUT
					</NavLink>
					<NavLink
						onClick={() => setVisible(false)}
						to="/contact"
						className="py-2 pl-2 text-sm"
					>
						CONTACT
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
