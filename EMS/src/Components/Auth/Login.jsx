import React, { useState } from "react";
function Login({handleLogin}) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		handleLogin(email,password)
		setEmail("");
        setPassword("");
	};

	return (
		<div className="flex h-screen w-screen justify-center items-center">
			<div className="border-2 border-emerald-500 p-20 rounded-xl">
				<form
					onSubmit={(e) => {
						submitHandler(e);
					}}
					className="flex flex-col justify-center items-center"
				>
					<input
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						required
						className=" w-full border-2 border-emerald-600 rounded-full py-3 text-xl bg-transparent outline-none px-5 placeholder:text-grey-400"
						type="email"
						placeholder="Enter your email"
					/>
					<input
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value);
                        }}
						className="w-full border-2 border-emerald-600 rounded-full py-3 text-xl bg-transparent outline-none px-5 placeholder:text-grey-400 mt-5"
						type="password"
						placeholder="Enter Password"
					/>
					<button className="mt-8 w-full font-bold bg-emerald-600 rounded-full py-3 text-xl bg-transparent outline-none px-5 placeholder:text-white">
						Log in
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
