import { assets } from "../assets/assets";

function Hero() {
	return (
		<div className="flex flex-col sm:flex-row border border-gray-400">
			{/* hero section left side */}

			<div className="w-full border-yellow-500 sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
				<div className="flex flex-col gap-1">
					<div className="flex gap-3  justify-start items-center">
						<p className="h-[2px] w-8 bg-slate-500"></p>
						<p className="text-sm">OUR BESTSELLERS</p>
					</div>
					<p className="prata-regular text-2xl font-medium">Latest Arrivals</p>
					<div className="flex gap-3  justify-start items-center">
						<p className="text-sm">SHOP NOW</p>
						<p className="h-[2px] w-8 bg-slate-950"></p>
					</div>
				</div>
			</div>

			{/* hero section right side	 */}

			<img src={assets.hero_img} alt="" className="w-full sm:w-1/2" />
		</div>
	);
}

export default Hero;
