import { assets } from "../assets/assets";
import Subscribe from "../components/Subscribe";
import Title from "../components/Title";

function Contact() {
	return (
		<div className=" flex flex-col md:flex-col gap-4">
			<div className="pt-5 border-t pb-3">
				<Title text1={"CONTACT"} text2={"US"} />
			</div>

			<div className="flex flex-col md:flex-row gap-10 mb-28 justify-center ">
				<img src={assets.contact_img} alt="" className="w-full md:w-[480px]" />

				<div className=" flex flex-col justify-center items-center gap-y-6 text-center">
					<b>Our Store</b>

					<div className="text-[14px] text-gray-500">
						<p>76 Pasir Road Suite 350, </p>
						<p>Pasir Ris, Singapore</p>
					</div>

					<div className="text-[14px] text-gray-500">
						<p>Tel (65) 5595-8758</p>
						<p>Email : forever@gmail.com</p>
					</div>

					<b className="text-[16px]">Carrers at Forever</b>

					<p className="text-[14px] text-gray-500">
						Learn more about our teams and job openings
					</p>

					<button className="border border-gray-500 px-3 py-4 rounded hover:bg-black hover:text-white transition-all duration-500 ease-out">
						Explore Jobs
					</button>
				</div>
			</div>

			<Subscribe />
		</div>
	);
}

export default Contact;
