import "../index.css";
export default function FormSplitBill({ friends, isSelected }) {
	const friend = friends.filter((friend) => friend.id === isSelected)[0];
	console.log(friend.name);
	return (
		<form action="" className="form-split-bill">
			<h2>Split bill with</h2>
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
