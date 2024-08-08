import "./index.css";
import { useState } from "react";
const initialFriends = [
	{
		id: 118836,
		name: "Clark",
		image: "https://i.pravatar.cc/48?u=118836",
		balance: -7,
	},
	{
		id: 933372,
		name: "Sarah",
		image: "https://i.pravatar.cc/48?u=933372",
		balance: 20,
	},
	{
		id: 499476,
		name: "Anthony",
		image: "https://i.pravatar.cc/48?u=499476",
		balance: 0,
	},
];

function FriendList({ friends }) {
	return (
		<ul>
			{friends.map((friend) => (
				<Friend key={friend.id} friend={friend} />
			))}
		</ul>
	);
}

function AddFriend({ handleAddFriend, handleShowAddFriend }) {
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

function FormSplitBill() {
	return (
		<form action="" className="form-split-bill">
			<h2>Split bill with X</h2>
			<label htmlFor="">💰 Bill value</label>
			<input type="text" name="" id="" placeholder="Bill value" />
			<label htmlFor="">😎 Your expense</label>
			<input type="text" name="" id="" placeholder="Your expense" />
			<label htmlFor="">👌 Friend's expense</label>
			<input
				type="text"
				name=""
				id=""
				placeholder="Friend's expense"
				disabled
			/>
			<label htmlFor="">😂 Who's paying the bill ?</label>
			<select name="" id="">
				<option value="you">You</option>
				<option value="friend">X</option>
			</select>
			<button className="button">Split</button>
		</form>
	);
}

function Friend({ friend }) {
	const { name, image, balance } = friend;
	return (
		<li key={friend.id}>
			<img src={image} alt={name} />
			<h3>{name}</h3>
			<p className={`${balance < 0 ? "red" : balance > 0 ? "green" : ""}`}>
				{balance < 0
					? `You owns ${name} $${Math.abs(balance)}`
					: balance > 0
					? `${name} owns you $${Math.abs(balance)}`
					: `You and ${name} are even`}
			</p>
			<button className="button">Select</button>
		</li>
	);
}
function App() {
	const [isAddFriendOpen, setIsAddFriendOpen] = useState(false);
	const [friends, setFriends] = useState(initialFriends);

	const handleAddFriend = (newFriend) => {
		setFriends((friends) => [...friends, newFriend]);
	};

	const handleShowAddFriend = () => {
		setIsAddFriendOpen((isAddFriendOpen) => !isAddFriendOpen);
	};
	return (
		<div className="app">
			<div className="sidebar">
				<FriendList friends={friends} />
				{isAddFriendOpen && (
					<AddFriend
						handleAddFriend={handleAddFriend}
						handleShowAddFriend={handleShowAddFriend}
					/>
				)}
				<button className="button" onClick={handleShowAddFriend}>
					{isAddFriendOpen ? "Close" : "Add friend"}
				</button>
			</div>
			<FormSplitBill />
		</div>
	);
}

export default App;
