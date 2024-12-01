import useShopContext from "../hooks/useShopContext";

function LatestCollection() {
	const { products } = useShopContext();

	console.log(products[0]);
	return <div></div>;
}

export default LatestCollection;
