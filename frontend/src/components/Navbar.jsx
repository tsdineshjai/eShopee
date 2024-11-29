import { assets } from "../assets/assets";

function Navbar() {
	return (
		<div className="flex items-center justify-between py-5  font-medium">
			<img src={assets.logo} alt="" />
		</div>
	);
}

export default Navbar;
