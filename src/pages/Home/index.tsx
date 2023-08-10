import { useState } from "react";

import { Person } from "../../models/person";

import FriendsList from "../../components/FriendsList";
import FormAddFriend from "../../components/FormAddFriend";
import Button from "../../components/shared/Button";
import FormSplitBill from "../../components/FormSplitBill";

const initialFriends = [
  {
    id: "118836",
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: "933372",
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: "499476",
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const Home = () => {
  const [friends, setFriends] = useState<Person[]>(initialFriends);
  const [showAddFriend, setshowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState<null | Person>(null);

  const handleShowAddFriend = () => {
    setshowAddFriend((prevShow) => !prevShow);
    setSelectedFriend(null);
  };

  const handleAddFriend = (friend: Person) => {
    console.log(friend);
    setFriends((prevFriends) => [...prevFriends, friend]);
    setshowAddFriend(false);
  };

  const handleFriendSelection = (friend: Person) => {
    setSelectedFriend((prevSelectedFriend) =>
      prevSelectedFriend?.id === friend.id ? null : friend
    );
    setshowAddFriend(false);
  };

  const handleSplitBill = (value: number) => {
    setFriends((prevFriends) =>
      prevFriends.map((friend) =>
        friend.id === selectedFriend?.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          handleFriendSelection={handleFriendSelection}
        />

        {showAddFriend && <FormAddFriend handleAddFriend={handleAddFriend} />}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>

      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          handleSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
};

export default Home;
