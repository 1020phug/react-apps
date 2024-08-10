import "../index.css";
export default function FormSplitBill({ friends, selectedID }) {
	const friend = friends.find((f) => f.id === selectedID);
	return (
		<form action="" className="form-split-bill">
			<h2>Split bill with {friend.name}</h2>
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
