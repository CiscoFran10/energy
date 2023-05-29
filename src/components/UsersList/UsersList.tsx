import React from "react";
import User from "./User";
import { UserItem } from "@/interfaces";

interface UsersListProps {
	users: UserItem[];
}

const UsersList = ({ users }: UsersListProps) => {
	return (
		<section className="content-wrapper py-5">
			<h1
				className="text-lg font-semibold
      text-gray-600"
			>
				Usuários
			</h1>

			<ul className="flex flex-col gap-4 mt-6">
				{users.map((user: UserItem) => (
					<User key={user.id} {...user} />
				))}
			</ul>
		</section>
	);
};

export default UsersList;
