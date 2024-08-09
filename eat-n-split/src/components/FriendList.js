import Friend from "./Friend";
import "../index.css";
export default function FriendList({ friends, isSelected, handleSelect }) {
	return (
		<ul>
			{friends.map((friend) => (
				<Friend
					key={friend.id}
					friend={friend}
					isSelected={isSelected}
					handleSelect={handleSelect}
				/>
			))}
		</ul>
	);
}
