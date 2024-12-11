import React from "react";

function Login() {
	const [userState, setUserState] = React.useState("Login");

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div className="h-[60dvh] flex justify-center items-center ">
			<div className=" w-[400px]  flex flex-col justify-center items-center  px-2 py-3 ">
				<div className="flex flex-row justify-center items-center gap-3">
					<p className="text-3xl prata-regular">{userState}</p>
					<hr className="h-1 w-10 bg-gray-600" />
				</div>

				<form
					onSubmit={handleSubmit}
					className="mt-5 flex flex-col gap-3 w-full"
				>
					{userState == "Sign up" ? (
						<input
							type="text"
							className="px-4 py-1 border border-grey-300"
							placeholder="Name"
						/>
					) : null}

					<input
						type="email"
						className="px-4 py-1 border border-grey-300"
						placeholder="Email"
					/>
					<input
						type="password"
						className="px-4 py-1 border border-grey-300"
						placeholder="Password"
					/>
					<div className="w-full flex text-sm mt-[8px] justify-between items-center px-2 py-3 cursor-pointer">
						<p>Forgot your password ?</p>
						{userState == "Login" ? (
							<p
								className="prata-regular"
								onClick={() => setUserState("Sign up")}
							>
								Create Account{" "}
							</p>
						) : (
							<p
								className="prata-regular"
								onClick={() => setUserState("Login")}
							>
								Sign In
							</p>
						)}
					</div>

					<button className="bg-blue-900 text-white px-4 py-2.5 rounded active:bg-blue-300 prata-regular">
						{userState == "Login" ? "Log In" : "Sign up"}
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
