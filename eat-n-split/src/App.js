import "./index.css";
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

function FriendList() {
	const friends = initialFriends;
	return (
		<ul>
			{friends.map((friend) => (
				<Friend key={friend.id} friend={friend} />
			))}
		</ul>
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
			<button className="button">Selected</button>
		</li>
	);
}
function App() {
	return (
		<div className="app">
			<div className="sidebar">
				<FriendList />
			</div>
			<form action="">Hello</form>
		</div>
	);
}

export default App;
