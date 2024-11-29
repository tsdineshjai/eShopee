import { assets } from "../assets/assets";

import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<div className="flex items-center text-3xl w-full py-7 justify-between font-medium  ">
			<img src={assets.logo} className="w-16" alt="Logo" />
			<ul className="hidden sm:flex gap-5 text-sm text-gray-700">
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
				<img src={assets.search_icon} alt="" className="w-5 cursor-pointer" />

				<div className="group relative">
					<img src={assets.profile_icon} className="w-5 cursor-pointer" />
				</div>
			</div>
		</div>
	);
}

export default Navbar;
