import { Person } from "../../models/person";

import Friend from "../Friend";

type FriendsListProps = {
  friends: Person[];
};

const FriendsList = ({ friends }: FriendsListProps) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} {...friend} />
      ))}
    </ul>
  );
};

export default FriendsList;
