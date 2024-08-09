import "../index.css";
import { useState } from "react";

export default function AddFriend({ handleAddFriend, handleShowAddFriend }) {
	const [name, setName] = useState("");
	const [image, setImage] = useState("https://i.pravatar.cc/150?u=");

	const id = crypto.randomUUID();
	function handleSubmit(e) {
		e.preventDefault();
		if (!name || !image) return;
		const newFriend = {
			id,
			name,
			image: `${image}${id}`,
			balance: 0,
		};
		handleAddFriend(newFriend);
		handleShowAddFriend(false);
		setName("");
		setImage("https://i.pravatar.cc/150?u=");
		console.log(newFriend);
	}
	return (
		<form action="" className="form-add-friend" onSubmit={handleSubmit}>
			<label htmlFor="">🎎 Friend name</label>
			<input
				type="text"
				name=""
				id=""
				placeholder="Friend Name"
				onChange={(e) => setName(e.target.value)}
			/>

			<label htmlFor="">📷 Image URL</label>
			<input
				type="text"
				name=""
				id=""
				placeholder="Img URL"
				value={image}
				onChange={(e) => setImage(e.target.value)}
			/>

			<button className="button">Add</button>
		</form>
	);
}
