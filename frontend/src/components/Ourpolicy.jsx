import { assets } from "../assets/assets";

function Ourpolicy() {
	return (
		<section className=" flex flex-col gap-2 px-5  m-2 sm:flex-row  justify-around">
			<div className="flex flex-col justify-center items-center gap-2 p-2 ">
				<img
					src={assets.exchange_icon}
					className="w-5 sm:w-7"
					alt="exchange icon"
				/>
				<p className="text-[12px] sm:text-sm">Easy Exchange Policy</p>
				<small className=" text-[8px] sm:text-[10px] font-light">
					We offer hassle free exchange policy
				</small>
			</div>
			<div className="flex flex-col justify-center items-center gap-2 p-2 ">
				<img
					src={assets.quality_icon}
					className="w-5 sm:w-7"
					alt="quality icon"
				/>
				<p className="text-[12px] sm:text-sm">7 Days Return Policy</p>
				<small className=" text-[8px] sm:text-[10px] font-light">
					We offer 7 days free return policy
				</small>
			</div>
			<div className="flex flex-col justify-center items-center gap-2 p-2 ">
				<img
					src={assets.support_img}
					className="w-5 sm:w-7"
					alt="customer support icon"
				/>
				<p className="text-[12px] sm:text-sm">Best Customer Support</p>
				<small className=" text-[8px] sm:text-[10px] font-light">
					We provide 24/7 customer support
				</small>
			</div>
		</section>
	);
}

export default Ourpolicy;
