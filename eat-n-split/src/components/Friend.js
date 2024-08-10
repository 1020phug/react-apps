import "../index.css";

export default function Friend({ friend, selectedID, handleSelect }) {
	const { name, image, balance } = friend;
	const handleClick = () => {
		handleSelect(friend.id === selectedID ? null : friend.id);
	};
	return (
		<li key={friend.id} className={friend.id === selectedID ? "selected" : ""}>
			<img src={image} alt={name} />
			<h3>{name}</h3>
			<p className={`${balance < 0 ? "red" : balance > 0 ? "green" : ""}`}>
				{balance < 0
					? `You owns ${name} $${Math.abs(balance)}`
					: balance > 0
					? `${name} owns you $${Math.abs(balance)}`
					: `You and ${name} are even`}
			</p>
			<button className="button" onClick={handleClick}>
				{friend.id === selectedID ? "Close" : "Select"}
			</button>
		</li>
	);
}
