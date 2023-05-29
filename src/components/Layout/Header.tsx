import Image from "next/image";
import React from "react";

import User from "../../assets/user.png";

const Header = () => {
	return (
		<header className="w-full flex justify-between items-center">
			<div className="flex gap-2 items-center">
				<Image src={"/logo.png"} alt="logo" width={30} height={30} />
				<h1 className="text-2xl font-bold text-accent">
					<span className="text-green-300">Ener</span>match
				</h1>
			</div>

			<div className="flex items-center gap-4">
				<button>
					<span className="material-symbols-rounded text-gray-200 relative">
						notifications
						<span className="w-3 h-3 rounded-full bg-green-300 border-2 border-gray-100 absolute left-3 top-0.5"></span>
					</span>
				</button>

				<button className="border border-gray-200 rounded-full w-[58px] h-[58px]">
					<Image
						className="rounded-full border-[3px] border-gray-100 h-full w-full"
						src={User}
						alt="user"
					/>
				</button>
			</div>
		</header>
	);
};

export default Header;
