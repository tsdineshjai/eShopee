/* eslint-disable react/prop-types */
function Title({ text1, text2 }) {
	return (
		<>
			<div className="inline-flex items-center justify-center w-full gap-2 pt-5">
				<p className="text-green-600">{text1}</p>
				<p>{text2}</p>
				<p className="h-[2px] w-8 bg-red-900"></p>
			</div>
			<p className=" text-[12px]   text-center  ">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sit
				distinctio, maiores esse hic odio velit corporis
			</p>
		</>
	);
}

export default Title;
