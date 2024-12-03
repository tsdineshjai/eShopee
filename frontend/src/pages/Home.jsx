import Bestseller from "../components/Bestseller";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import Ourpolicy from "../components/Ourpolicy";
import Subscribe from "../components/Subscribe";

function Home() {
	return (
		<div className="">
			<Hero />
			<LatestCollection />
			<Bestseller />
			<Ourpolicy />
			<Subscribe />
		</div>
	);
}

export default Home;
