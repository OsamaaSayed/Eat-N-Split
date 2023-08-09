import Button from "../shared/Button";

const FormAddFriend = () => {
  return (
    <form className="form-add-friend">
      <label htmlFor="friend-name">👬Friend Name</label>
      <input id="friend-name" type="text" />

      <label htmlFor="friend-image">🖼️ Image URL</label>
      <input id="friend-image" type="text" />

      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
