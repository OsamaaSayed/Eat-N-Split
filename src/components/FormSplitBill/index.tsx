import { Person } from "../../models/person";

import Button from "../shared/Button";

type FormSplitBillProps = {
  selectedFriend: Person;
};

const FormSplitBill = ({ selectedFriend }: FormSplitBillProps) => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label htmlFor="bill-value">💰 Bill value</label>
      <input id="bill-value" type="text" />

      <label htmlFor="your-expense">🧍 Your expense</label>
      <input id="your-expense" type="text" />

      <label htmlFor="friend-expense">👬 {selectedFriend.name}'s expense</label>
      <input id="friend-expense" type="text" disabled />

      <label htmlFor="person-bill">🤑 Who is paying the bill?</label>
      <select name="bill" id="person-bill">
        <option value="user">You</option>
        <option value="X">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
};

export default FormSplitBill;
