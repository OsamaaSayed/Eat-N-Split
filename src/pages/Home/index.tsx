import { useState } from "react";

import { Person } from "../../models/person";

import FriendsList from "../../components/FriendsList";
import FormAddFriend from "../../components/FormAddFriend";
import Button from "../../components/shared/Button";
import FormSplitBill from "../../components/FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const Home = () => {
  const [friends, setFriends] = useState<Person[]>(initialFriends);

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        <FormAddFriend />
        <Button>Add friend</Button>
      </div>

      <FormSplitBill />
    </div>
  );
};

export default Home;
