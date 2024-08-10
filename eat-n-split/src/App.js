import AddFriend from "./components/AddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";
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

function App() {
	const [isAddFriendOpen, setIsAddFriendOpen] = useState(false);
	const [friends, setFriends] = useState(initialFriends);
	const [selectedID, setSelectedId] = useState(null);

	const handleAddFriend = (newFriend) => {
		setFriends((friends) => [...friends, newFriend]);
	};

	const handleShowAddFriend = () => {
		setIsAddFriendOpen((isAddFriendOpen) => !isAddFriendOpen);
	};

	const handleSelect = (id) => {
		setSelectedId(id);
	};
	return (
		<div className="app">
			<div className="sidebar">
				<FriendList
					friends={friends}
					selectedID={selectedID}
					handleSelect={handleSelect}
				/>
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
			{selectedID && (
				<FormSplitBill friends={friends} selectedID={selectedID} />
			)}
		</div>
	);
}

export default App;
