import "../index.css";
import { useState } from "react";
export default function FormSplitBill({ friends, selectedID }) {
	const friend = friends.find((f) => f.id === selectedID);

	const [billValue, setBillValue] = useState("");
	const [yourExpense, setYourExpense] = useState("");
	const friendExpense = billValue ? billValue - yourExpense : "";
	const [payer, setPayer] = useState("you");
	return (
		<form action="" className="form-split-bill">
			<h2>Split bill with {friend.name}</h2>
			<label htmlFor="">💰 Bill value</label>
			<input
				type="text"
				name=""
				id=""
				placeholder="Bill value"
				value={billValue}
				onChange={(e) => setBillValue(Number(e.target.value))}
			/>
			<label htmlFor="">😎 Your expense</label>
			<input
				type="text"
				name=""
				id=""
				placeholder="Your expense"
				value={yourExpense}
				onChange={(e) =>
					setYourExpense(
						Number(e.target.value) > billValue
							? billValue
							: Number(e.target.value)
					)
				}
			/>
			<label htmlFor="">👌 Friend's expense</label>
			<input
				type="text"
				name=""
				id=""
				placeholder="Friend's expense"
				disabled
				value={friendExpense}
				onChange={(e) => setYourExpense(Number(e.target.value))}
			/>
			<label htmlFor="">😂 Who's paying the bill ?</label>
			<select
				name=""
				id=""
				value={payer}
				onChange={(e) => setPayer(e.target.value)}
			>
				<option value="you">You</option>
				<option value="friend">X</option>
			</select>
			<button className="button">Split</button>
		</form>
	);
}
