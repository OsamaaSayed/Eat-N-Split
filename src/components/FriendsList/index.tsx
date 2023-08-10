import { Person } from "../../models/person";

import Friend from "../Friend";

type FriendsListProps = {
  friends: Person[];
  selectedFriend: Person | null;
  handleFriendSelection: (friend: Person) => void;
};

const FriendsList = ({
  friends,
  handleFriendSelection,
  selectedFriend,
}: FriendsListProps) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          selectedFriend={selectedFriend}
          handleFriendSelection={handleFriendSelection}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
