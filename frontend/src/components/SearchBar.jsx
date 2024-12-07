import { assets } from "../assets/assets";
import useShopContext from "../hooks/useShopContext";
import { useLocation } from "react-router-dom";

function SearchBar() {
	const { search, setSearch, showSearch, setShowSearch } = useShopContext();

	const location = useLocation();

	const isCollectionPath = location.pathname == "/collections";

	return showSearch && isCollectionPath ? (
		<div className=" transition-all px-3 w-2/5 sm:w-3/5 flex justify-center items-center gap-2 border-gray-300 border-t border-b mx-auto py-5 mb-4 ">
			<div className="flex justify-center items-center gap-3 px-3  w-3/4  sm:w-2/3  border border-gray-400 rounded-full py-1  ">
				<input
					type="text"
					className="border-black inline w-[90%] outline-none px-2 "
					placeholder="Search"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<img
					src={assets.search_icon}
					alt="search logo"
					className="h-3 cursor-pointer "
				/>
			</div>
			<div>
				<img
					src={assets.cross_icon}
					alt="close icon"
					onClick={() => setShowSearch(false)}
					className="h-3 cursor-pointer  "
				/>
			</div>
		</div>
	) : null;
}

export default SearchBar;
