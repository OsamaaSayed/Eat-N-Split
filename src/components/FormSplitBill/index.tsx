import { useState } from "react";
import { Person } from "../../models/person";

import Button from "../shared/Button";

type FormSplitBillProps = {
  selectedFriend: Person;
};

const FormSplitBill = ({ selectedFriend }: FormSplitBillProps) => {
  const [bill, setBill] = useState<string | number>("");
  const [paidByUser, setPaidByUser] = useState<string | number>("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const paidByFriend =
    typeof bill === "number" && typeof paidByUser === "number"
      ? bill - paidByUser
      : "";

  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label htmlFor="bill-value">💰 Bill value</label>
      <input
        id="bill-value"
        type="text"
        value={bill}
        onChange={(e) =>
          setBill(
            isNaN(+e.target.value) || +e.target.value < +paidByUser
              ? bill
              : +e.target.value
          )
        }
      />

      <label htmlFor="your-expense">🧍 Your expense</label>
      <input
        id="your-expense"
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            isNaN(+e.target.value) || +e.target.value > +bill
              ? paidByUser
              : +e.target.value
          )
        }
      />

      <label htmlFor="friend-expense">👬 {selectedFriend.name}'s expense</label>
      <input id="friend-expense" type="text" disabled value={paidByFriend} />

      <label htmlFor="person-bill">🤑 Who is paying the bill?</label>
      <select
        name="bill"
        id="person-bill"
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
};

export default FormSplitBill;
