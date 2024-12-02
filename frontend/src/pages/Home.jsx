import Bestseller from "../components/Bestseller";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";

function Home() {
	return (
		<div className="">
			<Hero />
			<LatestCollection />
			<Bestseller />
		</div>
	);
}

export default Home;
