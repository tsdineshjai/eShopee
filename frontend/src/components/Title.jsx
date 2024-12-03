/* eslint-disable react/prop-types */
function Title({ text1, text2 }) {
	return (
		<div className=" border flex items-center justify-center w-full gap-2 mt-5">
			<p className="text-green-600">{text1}</p>
			<p>{text2}</p>
			<p className="h-[2px] w-8 bg-red-900"></p>
		</div>
	);
}

export default Title;
