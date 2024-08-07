import "./index.css";
import "./App.css";
import { useState } from "react";
const initialItems = [
	{ id: 1, description: "Passports", quantity: 2, packed: false },
	{ id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
	const [items, setItems] = useState(initialItems);

	function handleAddItem(newItem) {
		setItems([...items, newItem]);
	}

	function handleDeleteItem(id) {
		setItems(items.filter((item) => item.id !== id));
	}

	function handleToggleItem(id) {
		setItems(
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	}

	function handleClearAll() {
		const ans = window.confirm("Are you sure to clear all?");
		if (ans) setItems([]);
	}

	return (
		<div className="app">
			<Logo />
			<Form handleAddItem={handleAddItem} />
			<PackingList
				items={items}
				handleDeleteItem={handleDeleteItem}
				handleToggleItem={handleToggleItem}
				handleClearAll={handleClearAll}
			/>
			<Stats items={items} />
		</div>
	);
}

function Logo() {
	return <h1>⌛ Far Aways 💰</h1>;
}

function Form({ handleAddItem }) {
	const [quantity, setQuantity] = useState(1);
	const [desc, setDesc] = useState("");
	function handleSubmit(e) {
		e.preventDefault();
		if (!desc || !quantity) return;
		const newItem = {
			id: Date.now(),
			description: desc,
			quantity,
			packed: false,
		};
		handleAddItem(newItem);
		setQuantity(1);
		setDesc("");
	}
	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3>What do you need for your 😍 trip?</h3>
			<select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
				{Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
					<option key={i} value={i}>
						{i}
					</option>
				))}
			</select>
			<input
				type="text"
				placeholder="Item..."
				value={desc}
				onChange={(e) => setDesc(e.target.value)}
			/>
			<button>Add</button>
		</form>
	);
}

function PackingList({
	items,
	handleDeleteItem,
	handleToggleItem,
	handleClearAll,
}) {
	const [sortBy, setSortBy] = useState("quantity");

	let sortedItems = [...items];

	if (sortBy === "desc") {
		sortedItems.sort((a, b) => a.description.localeCompare(b.description));
	} else if (sortBy === "input") {
		sortedItems.sort((a, b) => a.id - b.id);
	} else if (sortBy === "quantity") {
		sortedItems.sort((a, b) => a.quantity - b.quantity);
	}

	return (
		<div className="list">
			<ul>
				{sortedItems.map((item) => (
					<Item
						key={item.id}
						item={item}
						handleDeleteItem={handleDeleteItem}
						handleToggleItem={handleToggleItem}
					/>
				))}
			</ul>
			<div className="actions">
				<select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
					<option value="quantity">Sort by Quantity</option>
					<option value="desc">Sort by Description</option>
					<option value="input">Sort by Order</option>
				</select>
				<button onClick={handleClearAll}>Clear All</button>
			</div>
		</div>
	);
}

function Item({ item, handleDeleteItem, handleToggleItem }) {
	return (
		<li>
			<input type="checkbox" onChange={() => handleToggleItem(item.id)} />
			<span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
				{item.quantity} {item.description}
			</span>
			<button onClick={() => handleDeleteItem(item.id)}>❌</button>
		</li>
	);
}

function Stats({ items }) {
	if (!items.length)
		return (
			<p className="stats">🤷‍♀️ No items. You should add some yourself 💰</p>
		);

	const totalItems = items.length;
	const packedItems = items.filter((item) => item.packed).length;
	const percentage = Math.round((packedItems / totalItems) * 100) || 0;
	return (
		<footer className="stats">
			<em>
				{percentage === 100
					? "You're ready to go! 🎉"
					: `💰 You have ${totalItems} items on your list, and you already packed ${packedItems} (${percentage}%)`}
			</em>
		</footer>
	);
}
