import { assets } from "../assets/assets";

function Footer() {
	return (
		<div>
			<section className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-3 mt-[96px] mb-[24px]">
				<div className="mr-6 flex flex-col gap-3 px-2">
					<img src={assets.logo} alt="logo" className="w-24" />
					<p className="text-[12px] sm:text-[14px] font-thin">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
						reiciendis, at, iste magni odio assumenda ab quas aliquam rerum iure
						recusandae delectus expedita similique? Quia atque ullam saepe est
						eius. Pariatur quaerat optio sint ex assumenda, quos porro?
					</p>
				</div>
				<div className="flex flex-col gap-3 px-2">
					<p>COMPANY</p>
					<ul className="flex-row flex-start text-[10px] sm:text-[14px] font-thin ">
						<li>Home</li>
						<li>About Us</li>
						<li>Delivery</li>
						<li>Private Policy</li>
					</ul>
				</div>
				<div className="flex flex-col gap-3 px-2">
					<p>GET IN TOUCH</p>
					<ul className="flex-row flex-start text-[10px] sm:text-[14px] font-thin">
						<li>+65 5647-0897</li>
						<li>customercare@forever.com</li>
					</ul>
				</div>
			</section>
			<div className="grid grid-cols-1">
				<hr />
				<hr />
				<p className="py-5 text-[12px] sm:text-sm text-center font-extralight">
					Copyrights © 2024 All Rights Reserved
				</p>
			</div>
		</div>
	);
}

export default Footer;
