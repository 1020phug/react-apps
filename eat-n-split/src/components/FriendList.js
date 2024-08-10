import Friend from "./Friend";
import "../index.css";
export default function FriendList({ friends, selectedID, handleSelect }) {
	return (
		<ul>
			{friends.map((friend) => (
				<Friend
					key={friend.id}
					friend={friend}
					selectedID={selectedID}
					handleSelect={handleSelect}
				/>
			))}
		</ul>
	);
}
