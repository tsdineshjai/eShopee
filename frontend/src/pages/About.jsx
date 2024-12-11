import Title from "../components/Title";
import { assets } from "../assets/assets";
import Subscribe from "../components/Subscribe";

function About() {
	return (
		<div className="flex flex-col md:flex-col gap-5">
			<div className="pt-5 border-t">
				<Title text1={"ABOUT"} text2={"US"} />
			</div>

			{/* content */}

			<div className="flex flex-col md:flex-row gap-[2rem]">
				<div className="flex-1 w-full md:w-1/4">
					<img src={assets.about_img} />
				</div>

				<div className="flex-1 flex  flex-col  gap-3 justify-center text-sm">
					<p>
						Forever is a one stop shop for all your fashion and lifestyle needs.
						Being Singapore&apos;s largest e-commerce store for fashion and
						lifestyle products, Myntra aims at providing a hassle free and
						enjoyable shopping experience to shoppers across the country with
						the widest range of brands and products on its portal. country
					</p>
					<p>
						We work according to our sustainability strategy produced jointly
						with external and internal experts. Our sustainability work spans
						the entire value chain, focusing both on our own operations and,
						together with other stakeholders, the industry in general.
					</p>

					<b className="py-3">Our Mission</b>

					<p>
						We believe in the transformative power of technology and want to
						change the world for the better by providing a platform to connect
						buyers and sellers within one community.
					</p>
				</div>
			</div>

			<div>
				<Title text1={"WHY"} text2={"CHOOSE US"} />
			</div>

			<div className="flex flex-col md:flex-row my-4 ">
				<div className="border border-gray-300 py-4 px-4 flex flex-col gap-3 justify-center items-center  rounded-sm ">
					<b>Quality Assurance:</b>
					<p className="font-light text-[13px] text-center">
						We meticulously select and vet each product to ensure if meets our
						stringent quality standards
					</p>
				</div>
				<div className="border border-gray-300 py-4 px-4 flex flex-col gap-3 justify-center items-center  rounded-sm">
					<b>Convenience:</b>
					<p className="font-light text-[13px] text-center">
						With our user friendly interface and hassle-free ordering process,
						shopping has never been easier.
					</p>
				</div>
				<div className="border border-gray-300 py-4 px-4 flex flex-col gap-3 justify-center items-center rounded-sm ">
					<b>Exceptional Customer Service:</b>
					<p className="font-light text-[13px] text-center">
						Our team of dedicated professionals is here to assit you the way,
						ensuring your satisfaction is our top priority.
					</p>
				</div>
			</div>

			<Subscribe />
		</div>
	);
}

export default About;
