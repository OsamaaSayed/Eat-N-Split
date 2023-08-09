import { useState } from "react";

import { Person } from "../../models/person";

import Button from "../shared/Button";

type FormAddFriendProps = {
  handleAddFriend: (friend: Person) => void;
};

const FormAddFriend = ({ handleAddFriend }: FormAddFriendProps) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend: Person = {
      id,
      name,
      image: `${image}?u=${id}`,
      balance: 0,
    };

    handleAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="friend-name">👬Friend Name</label>
      <input
        name="name"
        id="friend-name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="friend-image">🖼️ Image URL</label>
      <input
        name="image"
        id="friend-image"
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
